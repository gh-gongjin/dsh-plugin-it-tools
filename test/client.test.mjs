import { readFileSync } from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import { ok, eq, report, section } from './_helpers.mjs';

const ROOT = path.resolve(fileURLToPath(import.meta.url), '../..');
const src = readFileSync(path.join(ROOT, 'client.js'), 'utf8');

section('源码铁律');
ok(!src.includes('@deepseek-ai'), '零 @deepseek-ai');
ok(!src.includes('100vh'), '禁 100vh（appearance 真机病历）');
ok(!src.includes('container-type') && !src.includes('@container'), '禁 container query（modelwatch 真机病历）');
ok(/return module\.exports;/.test(src), 'factory 返回 module.exports（mw 病历：invalid plugin）');
ok(!/\bEventSource\b/.test(src), '不用 EventSource（本插件无推流面）');
// S0 真机黑条案：--dsw-alias-brand-primary 在真宿主是近黑，不能拿来当强调色（appearance 病历的复发）
ok(!src.includes('--itp-accent:var(--dsw-alias-brand-primary'), 'accent 不绑宿主 brand-primary（真宿主该令牌近黑 ⇒ 选中指示条变黑条）');
ok(/--itp-accent:#[0-9a-fA-F]{6}/.test(src), 'accent 亮/暗两档都是自有固定蓝');
// S6 真机二轮（用户贴图两案）：页签要 pointer 光标；切页签不许重建 iframe（输入被清）
ok(/\.itp-tab\{[^}]*cursor:pointer/.test(src), '.itp-tab 带 cursor:pointer（可点态）');
ok(src.includes('const toolViews = new Map()'), '工具页 iframe 常驻容器 toolViews 在位');
ok(!src.includes("view.innerHTML = ''"), 'renderAll 不再整区清空（清空=销毁 iframe 的旧形态）');

section('ModuleLoader 契约');
let loaded = null;
const fakeReact = {
  createElement: (type, props, ...kids) => ({ type, props: props || {}, children: kids }),
  useRef: (init) => ({ current: init ?? null }),
  useEffect: (fn) => { fakeReact.__effects.push(fn); return undefined; },
  __effects: [],
};
const sandbox = {
  window: { __ModuleLoader__: { load: (cfgObj) => { loaded = cfgObj; } } },
  globalThis: {},
  document: { getElementById: () => null, head: { appendChild() {} }, createElement: () => ({ style: {}, classList: { add() {}, toggle: () => false } }) },
  localStorage: { getItem: () => null, setItem: () => {} },
  fetch: () => Promise.reject(new Error('离线测试不出网')),
  console,
};
sandbox.globalThis = sandbox;
vm.createContext(sandbox);
vm.runInContext(src, sandbox, { filename: 'client.js' });
ok(loaded && loaded.id === 'dsh-plugin-it-tools', 'load({id}) 被调用');
const exportsObj = loaded.factory((name) => {
  if (name === 'react') return fakeReact;
  throw new Error('不该 require 别的模块: ' + name);
});
eq(typeof exportsObj.apply, 'function', 'exports.apply 在返回值上');
eq(exportsObj.inject, ['slots'], 'client inject = [slots]');
eq(exportsObj.PANEL_ID, 'it-tools', 'PANEL_ID');
ok(typeof exportsObj.__test === 'object', '__test 面导出');

section('无载荷不注册');
{
  let registered = 0;
  const ctx = { effect: (fn) => fn(), slots: { inject: () => { registered++; }, register: () => {} } };
  exportsObj.apply(ctx);
  eq(registered, 0, 'routePrefix 缺失 ⇒ 一个 slot 都不注');
}

section('有载荷双 slot');
{
  sandbox.globalThis.__IT_TOOLS__ = { panelId: 'it-tools', routePrefix: '/it-tools', api: '/it-tools/api/catalog', panelOrder: 17, label: 'IT 工具箱' };
  const reload = readFileSync(path.join(ROOT, 'client.js'), 'utf8');
  loaded = null;
  vm.runInContext(reload, sandbox, { filename: 'client.js' });
  const ex2 = loaded.factory((n) => n === 'react' ? fakeReact : (() => { throw new Error(n); })());
  const seen = [];
  const ctx = {
    effect: (fn) => { const d = fn(); return typeof d === 'function' ? d : () => {}; },
    slots: {
      inject: (name, fn) => { seen.push(name); fn(); },
      register: (meta, comp) => { seen.push(meta.name + ':' + (meta.key || meta.id)); seen.push(typeof comp); },
    },
  };
  ex2.apply(ctx);
  ok(seen.includes('sidebar.panellist'), '注册侧栏入口');
  ok(seen.includes('main'), '注册主面板');
  ok(seen.includes('sidebar.panellist:it-tools'), '侧栏 id');
  ok(seen.includes('main:it-tools'), '主面板 key');
  eq(ex2.PANEL_ID, 'it-tools', 'PANEL_ID 读载荷');
}

section('纯函数口径');
const T = exportsObj.__test;
eq(T.clipSider(960), 240, '窄容器侧栏 240 定宽');
eq(T.clipSider(2000), 286, '宽容器按 C/7 进位');
eq(T.esc('<a href="x">&</a>'), '&lt;a href=&quot;x&quot;&gt;&amp;&lt;/a&gt;', 'esc 覆盖 & < > "');
report('test/client.test.mjs');
