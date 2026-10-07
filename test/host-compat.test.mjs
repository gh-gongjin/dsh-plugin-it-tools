import { readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as host from '../index.js';
import { ok, eq, report, section, fakeRes } from './_helpers.mjs';

const ROOT = path.resolve(fileURLToPath(import.meta.url), '../..');

section('源码铁律');
const src = readFileSync(path.join(ROOT, 'index.js'), 'utf8');
ok(!/from\s+['"]@deepseek-ai/.test(src), '零 @deepseek-ai import（按 import 语句扫，注释里的禁令原话不算）');
const imports = [...src.matchAll(/from\s+'([^']+)'/g)].map((m) => m[1]);
ok(imports.every((s) => s.startsWith('node:') || s.startsWith('./')), 'import 只有 node: 与 ./lib');
eq(host.inject, [], 'inject = []');
eq(typeof host.apply, 'function', 'apply 导出');
eq(typeof host.DEFAULT_CONFIG, 'object', 'DEFAULT_CONFIG 导出');

section('resolveConfig 钳制');
eq(host.resolveConfig({ demoBase: 'javascript:alert(1)' }).demoBase, host.DEMO_BASE_DEFAULT, 'javascript: 协议被拒');
eq(host.resolveConfig({ demoBase: 'http://x.dev' }).demoBase, host.DEMO_BASE_DEFAULT, 'http 被拒（只认 https）');
eq(host.resolveConfig({ demoBase: 42 }).demoBase, host.DEMO_BASE_DEFAULT, '非字符串被拒');
eq(host.resolveConfig({ panelOrder: '18.7' }).panelOrder, 18, 'panelOrder 取整');
eq(host.resolveConfig({ panelOrder: 'x' }).panelOrder, 17, '脏 panelOrder 回默认');
eq(host.resolveConfig({ label: '' }).label, 'IT 工具箱', '空 label 回默认');
eq(host.resolveConfig(null).demoBase, host.DEMO_BASE_DEFAULT, 'null 配置不炸');

/** 假 ctx：记录 inject 回调与 index-inject 订阅，可驱动完整路由。 */
function makeCtx() {
  const injected = new Map();
  const events = new Map();
  const ctx = {
    logger: { warn() {}, error() {} },
    inject(deps, cb) { injected.set(deps.join(','), cb); },
    on(ev, cb) { events.set(ev, cb); },
    effect(fn) { const d = fn(); return typeof d === 'function' ? d : () => {}; },
  };
  return { ctx, injected, events };
}

section('无 webServer：零注册');
{
  const { ctx, injected, events } = makeCtx();
  const teardown = host.apply(ctx, {});
  eq(typeof teardown, 'function', 'apply 返回清理器');
  const table = [];
  events.get('webserver/index-inject')(table);
  eq(table.length, 0, 'webServer 缺席时不推入口载荷（点开空白页比看不到入口更糟）');
  void injected;
}

section('有 webServer：路由面全量断言');
let handler;
{
  const { ctx, injected, events } = makeCtx();
  host.apply(ctx, {});
  const registered = [];
  const webServer = { register: (r) => { registered.push(r); return () => { r.disposed = true; }; } };
  injected.get('webServer')({ webServer, effect: (fn) => fn() });
  eq(registered.length, 1, '注册一条前缀路由');
  eq(registered[0].path, '/it-tools', '前缀 /it-tools');
  eq(registered[0].kind, 'prefix', 'kind=prefix');
  handler = registered[0].handler;

  const table = [];
  events.get('webserver/index-inject')(table);
  eq(table.length, 1, '推一份入口载荷');
  const v = table[0].value;
  eq(table[0].name, '__IT_TOOLS__', 'global key');
  for (const k of ['panelId', 'label', 'panelOrder', 'routePrefix', 'api', 'appBase', 'demoBase', 'capabilities', 'capabilityRows']) {
    ok(v[k] !== undefined, `载荷含 ${k}`);
  }
  eq(v.capabilities.webServer, true, 'caps.webServer=true');
  eq(v.capabilities.catalog, true, 'caps.catalog=true');
  ok(v.capabilities.dist === true || v.capabilities.dist === false, 'caps.dist 是布尔（随 dist 就位情况翻转）');
}

async function req(method, url) {
  const res = fakeRes();
  await handler({ method, url }, res);
  return res;
}

const cat = await req('GET', '/it-tools/api/catalog');
eq(cat.status, 200, 'catalog 200');
eq(cat.json().ok, true, 'catalog ok');
eq(cat.json().tools.length, 474, 'catalog 474 条（全量裁定）');
eq(cat.json().groups.length, 26, 'catalog 26 组');
ok(['local', 'demo'].includes(cat.json().mode), 'mode 二选一');
eq(cat.json().demoBase, 'https://it-tools.tech', 'demoBase 下发');

eq((await req('POST', '/it-tools/api/catalog')).status, 405, 'POST 一律 405（无 body 面）');
eq((await req('DELETE', '/it-tools/app/x')).status, 405, 'DELETE 405');
eq((await req('GET', '/it-tools/nope')).status, 404, '前缀内未知路径 404');
eq((await req('GET', '/it-tools/api/other')).status, 404, 'api 白名单外 404');

const app = await req('GET', '/it-tools/app/json-prettify');
const distReady = cat.json().mode === 'local';
eq(app.status, distReady ? 200 : 503, distReady ? 'dist 就位：SPA 路径 200' : 'dist 缺失：SPA 路径 503 诚实降级');
if (!distReady) eq(app.json().reason, 'dist-missing', '503 带 reason');

if (distReady) {
  // S3 装配面：虚拟响应覆盖磁盘文件，index.html 注入（直请与 SPA 回落都吃）
  const html = app.body.toString();
  ok(html.includes('<base href="/it-tools/app/">'), 'SPA 回落页 base 已改写到插件子路径');
  ok(html.includes('itp-hide-chrome'), 'SPA 回落页注入隐藏 chrome CSS');
  ok(html.includes('itp-locale-preset'), 'SPA 回落页注入中文预置');
  const direct = await req('GET', '/it-tools/app/index.html');
  ok(direct.body.toString().includes('itp-hide-chrome'), '直请 index.html 同样被注入');
  eq(String(direct.headers['Content-Length']), String(direct.body.length), '注入后 Content-Length 重算');

  const sw = await req('GET', '/it-tools/app/sw.js');
  eq(sw.status, 200, 'sw.js 200');
  ok(sw.body.toString().includes('registration.unregister'), 'sw.js 被自注销桩顶掉（不许真 SW 出门）');
  eq(sw.headers['Content-Type'], 'text/javascript; charset=utf-8', 'sw.js 是 JS 型');

  const tf = await req('GET', '/it-tools/app/tools-filter.json');
  eq(tf.status, 200, 'tools-filter.json 200（盘上原样，不再虚拟顶掉）');
  const filter = JSON.parse(tf.body.toString());
  // 全量口径（2026-10-05「要全量」）：dist 构建侧写的就是 `{}`；
  // fork src/tools/index.ts 判定：无 include/exclude 字段 ⇒ 逐条默认留 ⇒ SPA 看到全量。
  eq(Object.keys(filter).length, 0, 'tools-filter.json 是空对象 ⇒ 不做任何裁剪');
  ok(filter.includeToolsFilterRegex === undefined && filter.excludeToolsFilterRegex === undefined, '无 include/exclude 正则（全留语义）');

  // 目录 474 条与 dist 真 store 全量对账（防 catalog 与产物两套事实）
  const store = readdirSync(path.join(ROOT, 'dist', 'assets')).find((f) => /^tools\.store-.*\.js$/.test(f));
  ok(Boolean(store), 'dist 内 tools.store chunk 在册');
  const storeText = readFileSync(path.join(ROOT, 'dist', 'assets', store), 'utf8');
  const storePaths = new Set([...storeText.matchAll(/path:`(\/[^`]*)`/g)].map((m) => m[1]));
  eq(storePaths.size, 474, '真 store 恰 474 条锚定路径');
  eq([...storePaths].sort().join('|'), cat.json().tools.map((t) => t.path).sort().join('|'), 'catalog 路径集合 == dist store（全量对账）');

  // 伺服时重写（全量 dist 同样适用）：curl-converter 的裸 wasm 引用不许出路由
  const chunk = readdirSync(path.join(ROOT, 'dist', 'assets')).find((f) => /^curl-converter-.*\.js$/.test(f));
  ok(Boolean(chunk), 'dist 内 curl-converter chunk 在册');
  const js = await req('GET', `/it-tools/app/assets/${chunk}`);
  eq(js.status, 200, 'chunk 200');
  const jsText = js.body.toString();
  ok(jsText.includes('`it-tools/app/tree-sitter.wasm`'), '裸名重写为去头斜杠相对（经 locateFile 补 /）');
  ok(jsText.includes('`/it-tools/app/tree-sitter-bash.wasm`'), '根绝对串重写为路由绝对');
  ok(!jsText.includes('`tree-sitter.wasm`') && !jsText.includes('`/tree-sitter-bash.wasm`'), '原始出路由形态不残留');
  const wasm = await req('GET', '/it-tools/app/tree-sitter.wasm');
  eq(wasm.status, 200, 'dist 根 wasm 伺服 200');
  eq(wasm.headers['Content-Type'], 'application/wasm', 'wasm MIME 正确');
  const md = await req('GET', '/it-tools/app/home.custom.md');
  eq(md.status, 200, 'home.custom.md 在册（css/md 引用修复）');
}

const head = await req('HEAD', '/it-tools/api/catalog');
eq(head.status, 200, 'HEAD 放行');
report('test/host-compat.test.mjs');
