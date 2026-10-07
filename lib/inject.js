/**
 * dist 生产化注入（S3）：源码零改动，全部在伺服侧完成。
 * - index.html：改写 <base href>（vite 产物资源是相对路径，运行时 base 决定一切），
 *   预置 locale=zh（仅当未设置，尊重用户之后的手动切换），隐藏 SPA 自身侧栏与顶栏
 *   （面板壳已提供分类/搜索/主题，双层导航是真隐藏而非裁剪）。
 * - sw.js：自注销桩。生产 bundle 会 register(`${base}sw.js`, {scope:base})——改写 base 后
 *   恰好落进插件路由，这里返回桩把老缓存清掉并自我注销，杜绝接管 dsh 同源 scope 与
 *   controllerchange 强制 reload（红线）。
 * 选择器事实源：src/components/MenuLayout.vue（n-layout-sider）、src/layouts/base.layout.vue（.navbar）。
 */

export function decorateIndex(html, { appBase }) {
  if (!appBase || typeof appBase !== 'string') throw new Error('decorateIndex: appBase 必填');
  let out = html.replace('<base href="/">', `<base href="${appBase}">`);
  const at = out.indexOf('<head');
  if (at === -1) return out;
  const close = out.indexOf('>', at);
  out = out.slice(0, close + 1) + HEAD_SNIPPET + out.slice(close + 1);
  return out;
}

const HEAD_SNIPPET = [
  '<script id="itp-locale-preset">(function(){try{if(!localStorage.getItem("locale"))localStorage.setItem("locale","zh");}catch(e){}})();</script>',
  '<style id="itp-hide-chrome">.n-layout-sider,.navbar{display:none !important}</style>',
].join('\n');

/**
 * Emscripten 胶水（web-tree-sitter 等）把 wasm 文件名写成裸串（`tree-sitter.wasm`），
 * 运行时解析成 scriptDirectory+name，而打包后 scriptDirectory 是空模板串 `` ⇒
 * fetch(name) 被当作 `http://name/` 协议 URL ⇒ ERR_NAME_NOT_RESOLVED（curl-converter 实测）。
 * 伺服时重写为「去根斜杠的 appBase 相对路径」（it-tools/app/tree-sitter.wasm），
 * 由 <base href> 相对解析进插件路由。只重写整串恰好等于该文件名的引号内容，不碰子串。
 */
export function rewriteBareAssetRefs(js, appBase, names) {
  const relBase = appBase.replace(/^\//, '');
  let out = js;
  for (const name of names) {
    const q = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    // 先处理带根斜杠的整串（原样 fetch）⇒ 重写为路由绝对；再处理裸名（经 locateFile 补 "/"）⇒ 重写为无头斜杠相对
    out = out.replace(new RegExp('(["\'`])/' + q + '\\1', 'g'), '$1' + appBase + name + '$1');
    out = out.replace(new RegExp('(["\'`])' + q + '\\1', 'g'), '$1' + relBase + name + '$1');
  }
  return out;
}

export const SW_STUB = [
  '// dsh-plugin-it-tools: 覆盖 it-tools 生产 SW。装完即清旧缓存并注销，绝不再控页面。',
  'self.addEventListener("install", function () { self.skipWaiting(); });',
  'self.addEventListener("activate", function (event) { event.waitUntil((async () => {',
  '  try {',
  '    var keys = await caches.keys();',
  '    await Promise.all(keys.map(function (k) { return caches.delete(k); }));',
  '    await self.registration.unregister();',
  '  } catch (e) {}',
  '})()); });',
].join('\n');
