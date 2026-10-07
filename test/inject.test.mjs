/** lib/inject.js 单测：index.html 装饰与 sw.js 桩（形状对得上真构建产物）。 */
import vm from 'node:vm';
import { ok, eq, throws, report, section } from './_helpers.mjs';
import { decorateIndex, rewriteBareAssetRefs, SW_STUB } from '../lib/inject.js';

section('decorateIndex：base 改写');
const REAL_HEAD = '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <base href="/">\n    <meta charset="UTF-8" />\n  </head>\n  <body><script type="module" src="./assets/index-x.js"></script></body>\n</html>';
const out = decorateIndex(REAL_HEAD, { appBase: '/it-tools/app/' });
ok(out.includes('<base href="/it-tools/app/">'), 'base 改到插件子路径（vite 相对资源全靠运行时 base）');
ok(!out.includes('<base href="/">'), '旧 base 不残留');
eq(out.split('<base').length - 1, 1, 'base 只此一处（replace 不越范围）');

section('decorateIndex：注入落点与内容');
ok(out.indexOf('itp-locale-preset') < out.indexOf('src="./assets'), '中文预置跑在应用 bundle 之前');
ok(out.includes('localStorage.setItem("locale","zh")'), '预置写 locale=zh');
ok(out.includes("if(!localStorage.getItem('locale'))") || out.includes('if(!localStorage.getItem("locale"))'), '仅未设置才写（尊重用户手动切换）');
ok(out.includes('.n-layout-sider,.navbar{display:none !important}'), '隐藏 chrome 选择器对得上 MenuLayout/base.layout 真类名');

section('decorateIndex：退化路径');
eq(decorateIndex('<html><body>x</body></html>', { appBase: '/b/' }), '<html><body>x</body></html>', '无 <head> 原样回');
throws(() => decorateIndex('<head></head>', {}), 'appBase 缺失抛错');

section('SW_STUB：红线桩');
eq(SW_STUB.includes('registration.unregister'), true, '激活即注销');
ok(SW_STUB.includes('caches.delete'), '清旧缓存');
ok(!/clients\.matchAll[\s\S]*navigate/.test(SW_STUB), '不主动 reload/navigate 页面（防注册-刷新死循环）');
let syntaxOk = true;
try { new vm.Script(SW_STUB); } catch { syntaxOk = false; }
ok(syntaxOk, 'SW 桩语法可编译（Service Worker 真环境是严格 script 解析）');

section('rewriteBareAssetRefs：wasm 引用两形态（curl-converter 真产物取证）');
const AB = '/it-tools/app/';
const NAMES = ['tree-sitter.wasm', 'tree-sitter-bash.wasm'];
// 形态一：Emscripten 胶水裸名，运行时经补 "/" 的 locateFile ⇒ 重写为无头斜杠相对名
const glue = 'findWasmBinary(){var e=`tree-sitter.wasm`;return isDataURI(e)?e:locateFile(e)}';
eq(rewriteBareAssetRefs(glue, AB, NAMES), glue.replace('`tree-sitter.wasm`', '`it-tools/app/tree-sitter.wasm`'), '裸名→去头斜杠（locateFile 补 / 后落在路由内）');
// 形态二：web-tree-sitter Language.load 的根绝对串，原样 fetch ⇒ 重写为路由绝对
const load = 'Language.load(`/tree-sitter-bash.wasm`)';
eq(rewriteBareAssetRefs(load, AB, NAMES), 'Language.load(`/it-tools/app/tree-sitter-bash.wasm`)', '带/整串→路由绝对');
// 只动整串：前后是引号紧贴的完整 token
const sub = 'fetch("assets/tree-sitter.wasm"),x="old-tree-sitter-bash.wasm",y=`tree-sitter.wasm.bak`';
eq(rewriteBareAssetRefs(sub, AB, NAMES), sub, '子串/长名/带扩展后缀一律不碰');
// 两遍顺序不互相污染：带/形态重写后不得再被裸名遍二次命中
const both = '`/tree-sitter.wasm`+`tree-sitter.wasm`';
eq(rewriteBareAssetRefs(both, AB, NAMES), '`/it-tools/app/tree-sitter.wasm`+`it-tools/app/tree-sitter.wasm`', '同文两形态各归各');

report('test/inject.test.mjs');
