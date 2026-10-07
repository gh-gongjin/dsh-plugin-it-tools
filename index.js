/**
 * ============================================================
 * dsh-plugin-it-tools —— Host Half（宿主半边）index.js
 * ============================================================
 *
 * 装配三件事（口径见 docs/design-spec.md §0/§6）：
 *   1. 装载全量工具目录（catalog/tools-all.json，校验失败即降级）；
 *   2. 按需探测 webServer，注册 `/it-tools` 前缀只读路由（api/catalog + app 静态伺服）；
 *   3. 经 `webserver/index-inject` 把面板载荷推给浏览器半边。
 *
 * 铁律：零 @deepseek-ai/* import；零第三方依赖；全程 GET/HEAD，无 POST 面；
 * inject = []（webServer 缺失不许卡死加载）；ctx.inject 回调里才注册路由（sysops 病历）。
 */
import { existsSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { loadCatalog } from './lib/catalog.js';
import { serveStatic, json } from './lib/static.js';
import { decorateIndex, rewriteBareAssetRefs, SW_STUB } from './lib/inject.js';

export const name = 'dsh-plugin-it-tools';

export const inject = [];

export const ROUTE_PREFIX = '/it-tools';
export const APP_PREFIX = '/it-tools/app';
export const GLOBAL_KEY = '__IT_TOOLS__';
export const DEMO_BASE_DEFAULT = 'https://it-tools.tech';

export const DEFAULT_CONFIG = {
  panelId: 'it-tools',
  panelOrder: 17,
  label: 'IT 工具箱',
  demoBase: DEMO_BASE_DEFAULT,
};

/** 逐键钳制：只认已知键，脏值绝不带进运行时（demoBase 会被拼进 iframe src）。 */
export function resolveConfig(raw = {}) {
  const cfg = { ...DEFAULT_CONFIG, ...(raw && typeof raw === 'object' ? raw : {}) };
  if (typeof cfg.panelId !== 'string' || !cfg.panelId) cfg.panelId = DEFAULT_CONFIG.panelId;
  if (typeof cfg.label !== 'string' || !cfg.label) cfg.label = DEFAULT_CONFIG.label;
  cfg.panelOrder = Number.isFinite(Number(cfg.panelOrder)) ? Math.trunc(Number(cfg.panelOrder)) : DEFAULT_CONFIG.panelOrder;
  let demoOk = false;
  if (typeof cfg.demoBase === 'string') {
    try {
      const u = new URL(cfg.demoBase);
      demoOk = u.protocol === 'https:';
    } catch { demoOk = false; }
  }
  if (!demoOk) cfg.demoBase = DEFAULT_CONFIG.demoBase;
  return cfg;
}

function makeCaps() {
  const rows = new Map();
  return {
    mark(key, ok, note = '') { rows.set(key, { key, ok: Boolean(ok), note }); },
    read() { return Object.fromEntries([...rows].map(([k, v]) => [k, v.ok])); },
    rows() { return [...rows.values()]; },
  };
}

/**
 * @param ctx 宿主 Context（代理对象，未 inject 的属性读了会抛）。
 * @param config profile 写的配置，只从第二参拿。
 */
export function apply(ctx, config = {}) {
  const resolved = resolveConfig(config);
  const distRoot = path.resolve(fileURLToPath(new URL('./dist', import.meta.url)));

  let catalog;
  let catalogError = '';
  try {
    catalog = loadCatalog();
  } catch (e) {
    catalogError = e?.message ?? String(e);
    ctx.logger?.error?.(`[it-tools] 目录装载失败：${catalogError}`);
  }

  let webServer;
  const caps = makeCaps();
  const distReady = () => existsSync(path.join(distRoot, 'index.html'));
  // dist 根上的 .wasm（web-tree-sitter 等）被胶水写成裸文件名引用，运行时按站点根解析会出路由 404；
  // 伺服时把裸名重写为 appBase 绝对路径。每次现读，dist 换构建不用重启。
  const rootWasmNames = () => {
    try {
      return readdirSync(distRoot).filter((f) => f.endsWith('.wasm'));
    } catch {
      return [];
    }
  };
  function syncCaps() {
    caps.mark('webServer', Boolean(webServer), webServer ? '' : '宿主未提供 webServer，一个入口都不注册');
    caps.mark('catalog', Boolean(catalog), catalogError || (catalog ? '' : '目录未装载'));
    caps.mark('dist', distReady(), distReady() ? '' : 'dist 未就位：工具页回落到线上演示站（demo 模式），构建产物放入插件 dist/ 后自动切换');
  }
  syncCaps();

  async function handle(req, res) {
    const method = String(req.method || 'GET').toUpperCase();
    if (method !== 'GET' && method !== 'HEAD') {
      return json(res, 405, { ok: false, reason: 'method-not-allowed' });
    }
    let pathname;
    try {
      pathname = new URL(req.url, 'http://dsh.local').pathname;
    } catch {
      return json(res, 400, { ok: false, reason: 'bad-url' });
    }

    if (pathname === `${ROUTE_PREFIX}/api/catalog`) {
      if (!catalog) return json(res, 503, { ok: false, reason: 'catalog-unavailable', detail: catalogError });
      return json(res, 200, {
        ok: true,
        mode: distReady() ? 'local' : 'demo',
        groups: catalog.groups,
        tools: catalog.tools,
        demoBase: resolved.demoBase,
        appBase: `${APP_PREFIX}/`,
        caps: caps.read(),
      });
    }
    if (pathname === APP_PREFIX || pathname.startsWith(`${APP_PREFIX}/`)) {
      const rel = pathname === APP_PREFIX ? '/' : pathname.slice(APP_PREFIX.length);
      // 全量口径（2026-10-05 裁定）：不再注入 tools-filter 虚拟文件，
      // dist 盘上的 tools-filter.json 本就是 `{}` ⇒ SPA 判「全留」。
      const virtual = {
        'sw.js': { contentType: 'text/javascript; charset=utf-8', body: SW_STUB },
      };
      const appBase = `${APP_PREFIX}/`;
      return serveStatic(
        {
          distRoot,
          virtual,
          indexTransform: (html) => decorateIndex(html, { appBase }),
          chunkTransform: (js) => rewriteBareAssetRefs(js, appBase, rootWasmNames()),
        },
        req, res, rel,
      );
    }
    return json(res, 404, { ok: false, reason: 'not-found' });
  }

  let disposeRoute = () => {};
  function teardown() {
    try { disposeRoute(); } catch (e) { ctx.logger?.warn?.(`[it-tools] 注销路由失败：${e?.message ?? e}`); }
  }
  if (typeof ctx.effect === 'function') {
    ctx.effect(() => teardown, 'it-tools:lifecycle');
  }

  ctx.inject(['webServer'], (w) => {
    webServer = w.webServer;
    syncCaps();
    const register = () => {
      const disposer = webServer.register({ kind: 'prefix', path: ROUTE_PREFIX, handler: (req, res) => handle(req, res) });
      disposeRoute = typeof disposer === 'function' ? disposer : () => {};
    };
    if (typeof w.effect === 'function') w.effect(register, 'it-tools:route');
    else register();
  });

  ctx.on('webserver/index-inject', (table) => {
    if (!webServer) return;
    syncCaps();
    table.push({
      kind: 'global',
      name: GLOBAL_KEY,
      value: {
        panelId: resolved.panelId,
        label: resolved.label,
        panelOrder: resolved.panelOrder,
        routePrefix: ROUTE_PREFIX,
        api: `${ROUTE_PREFIX}/api/catalog`,
        appBase: `${APP_PREFIX}/`,
        demoBase: resolved.demoBase,
        capabilities: caps.read(),
        capabilityRows: caps.rows(),
        distNote: distReady() ? '' : 'it-tools 构建产物未就位，工具页走线上演示站（demo 模式）',
        builtAt: Date.now(),
      },
    });
  });

  return teardown;
}
