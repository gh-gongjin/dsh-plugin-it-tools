import { mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { serveStatic } from '../lib/static.js';
import { ok, eq, report, fakeRes, section } from './_helpers.mjs';

const dir = await mkdtemp(path.join(os.tmpdir(), 'itp-dist-'));
await mkdir(path.join(dir, 'assets'), { recursive: true });
await writeFile(path.join(dir, 'index.html'), '<!doctype html><title>it-tools</title>');
await writeFile(path.join(dir, 'assets', 'app.js'), 'console.log(1)');
await writeFile(path.join(dir, 'favicon.ico'), 'ICIC');
// 目录外的一份"秘密"文件：越界读取必须碰不到它
await writeFile(path.join(dir, '..', 'secret.txt'), 'TOP-SECRET');

async function get(rel) {
  const res = fakeRes();
  await serveStatic({ distRoot: dir }, { url: '/it-tools/app' }, res, rel);
  return res;
}

section('命中');
let r = await get('/');
eq(r.status, 200, '根路径 200');
ok(String(r.headers['Content-Type']).startsWith('text/html'), '根路径 html MIME');
eq(r.body.toString(), '<!doctype html><title>it-tools</title>', 'index.html 内容');
eq(r.headers['Content-Length'], Buffer.byteLength(r.body), 'Content-Length 与实体一致');
eq(r.headers['Cache-Control'], 'no-store', 'no-store');

r = await get('/assets/app.js');
eq(r.status, 200, 'js 200');
ok(String(r.headers['Content-Type']).includes('javascript'), 'js MIME');

r = await get('/favicon.ico');
eq(r.headers['Content-Type'], 'image/x-icon', 'ico MIME');
eq(r.headers['X-Content-Type-Options'], 'nosniff', 'nosniff 头');

section('SPA fallback');
r = await get('/json-prettify');
eq(r.status, 200, '无扩展名未命中 → 回落 200');
ok(r.body.toString().includes('<title>it-tools</title>'), '回落内容是 index.html');
r = await get('/docker-compose-to-docker-run-converter');
eq(r.status, 200, '长 slug 同样回落');

section('拒绝面');
r = await get('/missing.png');
eq(r.status, 404, '带扩展名未命中 404');
r = await get('/../secret.txt');
ok(r.status === 404 || r.status === 400, '字面 .. 越界被拒');
r = await get('/%2e%2e%2fsecret.txt');
ok(r.status === 404 || r.status === 400, '编码 .. 越界被拒');
r = await get('/' + encodeURIComponent(process.env.SYSTEMROOT || 'C:/Windows') + '/win.ini');
ok(r.status === 404, '绝对路径越界被拒');
ok(!(r.body && r.body.toString().includes('TOP-SECRET')), '任何越界响应不含秘密内容');
r = await get('/a%zzb');
eq(r.status, 400, '坏百分号编码 400');
r = await get('/a%00b');
eq(r.status, 400, 'NUL 字节 400');
r = await get('/assets');
ok(r.status === 200 || r.status === 404 || r.status === 503, '目录路径不崩（回落或 404）');

section('dist 缺失');
const empty = await mkdtemp(path.join(os.tmpdir(), 'itp-empty-'));
async function serveStaticWrap(root, rel) {
  const res = fakeRes();
  await serveStatic({ distRoot: root }, {}, res, rel);
  return res;
}
const r2 = await serveStaticWrap(empty, '/');
eq(r2.status, 503, '空目录根路径 503');
eq(r2.json().reason, 'dist-missing', '503 带 reason');
const r3 = await serveStaticWrap(empty, '/some-tool');
eq(r3.status, 503, '空目录 SPA 路径也 503');
const r4 = await serveStaticWrap(empty, '/x.png');
eq(r4.status, 404, '空目录带扩展名仍 404 不装 503');

section('S3：virtual 覆盖与 index 注入');
const vres = fakeRes();
await serveStatic(
  { distRoot: dir, virtual: { 'sw.js': { contentType: 'text/javascript; charset=utf-8', body: 'STUB' } } },
  {}, vres, '/sw.js',
);
eq(vres.status, 200, 'virtual 命中 200');
eq(vres.body.toString(), 'STUB', 'virtual 内容顶掉磁盘文件');
eq(vres.headers['Content-Type'], 'text/javascript; charset=utf-8', 'virtual 自带型');
eq(vres.headers['Cache-Control'], 'no-store', 'virtual 不缓存');

// 磁盘上放一个真 sw.js，证明 virtual 优先级高于文件
await writeFile(path.join(dir, 'sw.js'), 'REAL');
const vres2 = fakeRes();
await serveStatic(
  { distRoot: dir, virtual: { 'sw.js': { contentType: 'text/javascript; charset=utf-8', body: 'STUB' } } },
  {}, vres2, '/sw.js',
);
eq(vres2.body.toString(), 'STUB', 'virtual 优先于同名磁盘文件');

let transformCalls = 0;
const tr = (html) => { transformCalls++; return html.replace('<head>', '<head><i id="x">'); };
await writeFile(path.join(dir, 'index.html'), '<html><head></head><body>b</body></html>');
await writeFile(path.join(dir, 'assets', 'a.js'), 'console.log(1)');
const tres = fakeRes();
await serveStatic({ distRoot: dir, indexTransform: tr }, {}, tres, '/json-prettify');
eq(tres.status, 200, 'SPA 回落吃 indexTransform');
ok(tres.body.toString().includes('<i id="x">'), '注入落在 index.html');
eq(String(tres.headers['Content-Length']), String(tres.body.length), 'Transform 后 Content-Length 重算');
const jres = fakeRes();
await serveStatic({ distRoot: dir, indexTransform: tr }, {}, jres, '/assets/a.js');
ok(!jres.body.toString().includes('<i id="x">'), '非 html 不经 indexTransform 内容');

section('chunkTransform：.js 响应重写');
await writeFile(path.join(dir, 'assets', 'w.js'), 'var e=`tree-sitter.wasm`;');
let chunkCalls = 0;
const cres = fakeRes();
await serveStatic({ distRoot: dir, chunkTransform: (js) => { chunkCalls++; return js.replace('tree-sitter.wasm', 'it-tools/app/tree-sitter.wasm'); } }, {}, cres, '/assets/w.js');
eq(cres.status, 200, 'js 200');
ok(cres.body.toString().includes('it-tools/app/tree-sitter.wasm'), '.js 过 chunkTransform');
eq(String(cres.headers['Content-Length']), String(cres.body.length), 'chunkTransform 后 Content-Length 重算');
const eres = fakeRes();
await serveStatic({ distRoot: dir, chunkTransform: (js) => { chunkCalls++; return js; } }, {}, eres, '/json-prettify');
eq(chunkCalls, 1, 'html 回落不经 chunkTransform（只调过 js 那一次）');

await rm(dir, { recursive: true, force: true });
await rm(empty, { recursive: true, force: true });
await rm(path.join(dir, '..', 'secret.txt'), { force: true });
report('test/static.test.mjs');
