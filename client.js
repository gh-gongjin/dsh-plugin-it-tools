// ============================================================
// dsh-plugin-it-tools — Browser Client Half（浏览器半边）
// ============================================================
// 1) sidebar.panellist 注册图标按钮  2) main keyed slot 注册整页 UI。
// 一份真相：工具目录/模式/demoBase 全部来自 GET /it-tools/api/catalog，
// 载荷没到就如实显示「配置未就位」，绝不自己抄一份目录数据。
// 壳（分类栏/搜索/页签/收藏/主题）为插件自绘；工具区是 iframe：
//   · demo 模式（dist 未就位）：挂线上演示站 + 定值裁剪隐藏双层导航 + 顶栏展开开关；
//   · local 模式（dist 就位）：挂同源 /it-tools/app/，不裁剪（构建侧已真隐藏 chrome、预置中文）。
// 不弹浮层：加载/错误/降级一律就地落面板。
//    CSS 模板串里注释与选择器都不许出现反引号。

window.__ModuleLoader__.load({
  id: 'dsh-plugin-it-tools',
  factory: (require) => {
    const module = { exports: {} };
    const exports = module.exports;

    const React = require('react');
    const h = React.createElement;
    const { useEffect, useRef } = React;

    const GLOBAL_KEY = '__IT_TOOLS__';
    const cfg = () => globalThis[GLOBAL_KEY] || {};
    const PANEL_ID = cfg().panelId || 'it-tools';
    const PANEL_ORDER = () => Number(cfg().panelOrder) || 17;
    const API = () => cfg().api || '';

    // ------------------------------------------------------------
    // 1) 样式：宿主 token 优先，原型值兜底
    // ------------------------------------------------------------
    // ⛔ 禁视口高度单位与 container query（appearance 与 modelwatch 的真机病历）：
    //   根高度走 height:100% + min-height 兜底，iframe 区 flex:1 + min-height。
    const STYLE_ID = 'dsh-plugin-it-tools:style';
    const CSS = `
.itp-root{--itp-bg:var(--dsw-alias-bg-layer-2,#f4f5f7);--itp-panel:var(--dsw-alias-bg-base,#ffffff);
  --itp-panel2:var(--dsw-alias-bg-layer-2,#f0f1f4);--itp-line:var(--dsw-alias-border-l1,#dcdfe5);
  --itp-fg:var(--dsw-alias-label-primary,#2c313a);--itp-fg-strong:var(--dsw-alias-label-primary,#111418);
  --itp-fg-dim:var(--dsw-alias-label-secondary,#6b7280);
  --itp-accent:#2f62c9;--itp-accent-weak:var(--dsw-alias-bg-layer-3,#dbe6fb);
  --itp-card:var(--dsw-alias-bg-base,#ffffff);--itp-card-hover:var(--dsw-alias-bg-layer-3,#f2f5fa);
  --itp-badge:var(--dsw-alias-bg-layer-3,#e4e8ef);--itp-radius:8px;
  box-sizing:border-box;color:var(--itp-fg);width:100%;height:100%;min-height:560px;
  display:flex;flex-direction:column;font-size:14px;line-height:1.55;
  font-family:system-ui,"PingFang SC","Microsoft YaHei",sans-serif}
.itp-shell{display:flex;flex-direction:column;flex:1;min-height:0;width:100%;background:var(--itp-bg);color:var(--itp-fg)}
.itp-root *{box-sizing:border-box;margin:0;padding:0}
.itp-root button{font:inherit;color:inherit;background:none;border:none;cursor:pointer}
.itp-root input{font:inherit}
.itp-dark{--itp-bg:#15171b;--itp-panel:#1b1e24;--itp-panel2:#20242b;--itp-line:#2b303a;
  --itp-fg:#d7dae0;--itp-fg-strong:#f0f2f5;--itp-fg-dim:#8b93a1;
  --itp-accent:#4d7fdf;--itp-accent-weak:#2c3f63;--itp-card:#1f232a;--itp-card-hover:#252a33;--itp-badge:#333a46}
.itp-head{display:flex;align-items:center;gap:12px;padding:10px 16px;border-bottom:1px solid var(--itp-line);background:var(--itp-panel);flex:none}
.itp-title{font-size:17px;font-weight:600;color:var(--itp-fg-strong);white-space:nowrap}
.itp-count{color:var(--itp-fg-dim);font-size:12px;white-space:nowrap}
.itp-search{flex:1;max-width:420px;margin-left:auto}
.itp-search input{width:100%;padding:6px 12px;border:1px solid var(--itp-line);border-radius:var(--itp-radius);background:var(--itp-panel2);color:var(--itp-fg);outline:none}
.itp-search input:focus{border-color:var(--itp-accent)}
.itp-theme{padding:6px 10px;border:1px solid var(--itp-line);border-radius:var(--itp-radius);background:var(--itp-panel2);white-space:nowrap}
.itp-body{flex:1;display:flex;min-height:0}
.itp-rail{width:172px;flex:none;border-right:1px solid var(--itp-line);background:var(--itp-panel);overflow-y:auto;padding:8px 0}
.itp-rail button{display:flex;justify-content:space-between;width:100%;padding:7px 14px;color:var(--itp-fg-dim);text-align:left}
.itp-rail button:hover{background:var(--itp-panel2);color:var(--itp-fg)}
.itp-rail button.on{background:var(--itp-accent-weak);color:var(--itp-fg-strong);border-right:2px solid var(--itp-accent)}
.itp-rail .n{font-size:12px;color:var(--itp-fg-dim)}
.itp-rail .en{display:block;font-size:11px;opacity:.75}
.itp-rail .sep{margin:6px 14px;border-top:1px solid var(--itp-line)}
.itp-main{flex:1;display:flex;flex-direction:column;min-width:0}
.itp-tabs{display:flex;align-items:stretch;border-bottom:1px solid var(--itp-line);background:var(--itp-panel);overflow-x:auto;flex:none}
.itp-tab{display:flex;align-items:center;gap:6px;padding:7px 12px;border-right:1px solid var(--itp-line);color:var(--itp-fg-dim);white-space:nowrap;font-size:13px;max-width:220px;cursor:pointer}
.itp-tab.on{background:var(--itp-panel2);color:var(--itp-fg-strong);box-shadow:inset 0 -2px 0 var(--itp-accent)}
.itp-tab .x{padding:0 3px;border-radius:4px;color:var(--itp-fg-dim)}
.itp-tab .x:hover{background:var(--itp-badge);color:var(--itp-fg-strong)}
.itp-tab .lbl{overflow:hidden;text-overflow:ellipsis}
.itp-view{flex:1;min-height:0;overflow-y:auto}
.itp-home{padding:16px 20px}
.itp-group-h{display:flex;align-items:baseline;gap:8px;margin:18px 0 10px;color:var(--itp-fg-strong);font-size:14px;font-weight:600}
.itp-group-h:first-child{margin-top:2px}
.itp-group-h .gc{color:var(--itp-fg-dim);font-weight:400;font-size:12px}
.itp-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:10px}
.itp-card{position:relative;display:flex;flex-direction:column;gap:4px;padding:12px 14px;border:1px solid var(--itp-line);border-radius:var(--itp-radius);background:var(--itp-card);cursor:pointer}
.itp-card:hover{background:var(--itp-card-hover);border-color:var(--itp-accent)}
.itp-card .nm{color:var(--itp-fg-strong);font-weight:600;padding-right:26px}
.itp-card .ds{color:var(--itp-fg-dim);font-size:12.5px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.itp-card .slug{color:var(--itp-fg-dim);font-size:11px;font-family:ui-monospace,Consolas,monospace;opacity:.75}
.itp-card .fav{position:absolute;top:8px;right:8px;font-size:15px;line-height:1;padding:2px 4px;border-radius:4px;color:var(--itp-fg-dim)}
.itp-card .fav:hover{background:var(--itp-badge)}
.itp-card .fav.on{color:#e0a63f}
.itp-badges{display:flex;gap:5px;margin-top:2px}
.itp-badge{font-size:11px;padding:1px 7px;border-radius:9px;background:var(--itp-badge);color:var(--itp-fg-dim)}
.itp-badge.fork{color:#7aa7ff}
.itp-badge.net{color:#d99a4e}
.itp-empty{padding:60px 0;text-align:center;color:var(--itp-fg-dim)}
.itp-tool{display:flex;flex-direction:column;height:100%}
.itp-tool-note{flex:none;display:flex;gap:14px;align-items:center;padding:6px 14px;border-bottom:1px solid var(--itp-line);background:var(--itp-panel2);color:var(--itp-fg-dim);font-size:12px}
.itp-tool-note .warn{color:#d99a4e}
.itp-mini{padding:2px 10px;border:1px solid var(--itp-line);border-radius:9px;background:var(--itp-panel);color:var(--itp-fg-dim);font-size:12px;white-space:nowrap}
.itp-mini:hover{color:var(--itp-fg-strong);border-color:var(--itp-accent)}
.itp-frame{flex:1;position:relative;overflow:hidden;min-height:400px}
.itp-frame iframe{position:absolute;left:0;top:0;width:100%;height:100%;border:0;background:#fff}
.itp-foot{padding:6px 16px;border-top:1px solid var(--itp-line);background:var(--itp-panel);color:var(--itp-fg-dim);font-size:11.5px;flex:none}
.itp-state{padding:40px 20px;text-align:center;color:var(--itp-fg-dim);font-size:13px}
.itp-state-err{color:#c0392b}`;

    function injectStyle() {
      if (document.getElementById(STYLE_ID)) return () => {};
      const style = document.createElement('style');
      style.id = STYLE_ID;
      style.textContent = CSS;
      document.head.appendChild(style);
      return () => style.remove();
    }

    // ------------------------------------------------------------
    // 2) 壳：命令式 DOM（与 prototype 同一份逻辑，数据改走 api 载荷）
    // ------------------------------------------------------------
    const LS = { fav: 'dsh-itp:fav', theme: 'dsh-itp:theme', tab: 'dsh-itp:open-tabs' };
    function loadLS(k, d) { try { const v = JSON.parse(localStorage.getItem(k)); return v ?? d; } catch { return d; } }
    function saveLS(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* 宿主禁存储时只是丢页签，不炸壳 */ } }
    function esc(s) { return String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }

    // 演示裁剪：线上站侧栏 240px 定宽（max(240, 视口×12.5%)）、顶栏带 62px（CDP 实测）。
    const CLIP_TOP = 62;
    function clipSider(containerW) {
      return (containerW + 240) * 0.125 <= 240 ? 240 : Math.ceil(containerW / 7);
    }
    function applyClip(wrap, f) {
      const S = clipSider(wrap.clientWidth);
      const T = wrap.__showTop ? 0 : CLIP_TOP;
      f.style.left = `-${S}px`;
      f.style.top = `-${T}px`;
      f.style.width = `calc(100% + ${S}px)`;
      f.style.height = `calc(100% + ${T}px)`;
    }

    /**
     * @param el 挂载容器（.itp-root 内的命令式子树）
     * @param data GET /it-tools/api/catalog 的响应体
     */
    function createShell(el, data) {
      injectStyle(); // 幂等自保底：样式跟着壳走，不依赖调用方先跑 apply
      const TOOLS = data.tools;
      const GROUP_ORDER = data.groups;
      // 中文组名 → 英文原分类（it-tools 源码 category 字段），并列展示用（api-catalog 同款裁定）
      const CAT_OF = {};
      for (const t of TOOLS) if (!CAT_OF[t.group]) CAT_OF[t.group] = t.cat;
      const demo = data.mode !== 'local';
      const shellCleanups = [];  // 整个壳卸载才清（keydown）
      // 工具页 iframe 常驻：页签存续期间只隐藏不销毁，切换页签不丢页内输入（S6 用户裁定）。
      // 关闭页签 / 壳 dispose 才真销毁；面板整体重挂（换页再回来）仍是新 iframe。
      const toolViews = new Map(); // dir -> { wrap }
      let homeBox = null;

      const state = {
        group: 'all',
        query: '',
        open: Array.isArray(loadLS(LS.tab, [])) ? loadLS(LS.tab, []).filter((d) => TOOLS.some((t) => t.dir === d)) : [],
        active: 'home',
        fav: new Set(loadLS(LS.fav, [])),
        showTop: false,
      };

      const root = document.createElement('div');
      root.className = 'itp-shell';
      if (loadLS(LS.theme, 'light') === 'dark') root.classList.add('itp-dark');
      root.innerHTML = `
        <div class="itp-head">
          <span class="itp-title">${esc(cfg().label || 'IT 工具箱')}</span>
          <span class="itp-count"></span>
          <div class="itp-search"><input type="search" placeholder="搜索工具（中英文名、关键词） —— 按 / 聚焦"></div>
          <button class="itp-theme">切换亮/暗</button>
        </div>
        <div class="itp-body">
          <nav class="itp-rail"></nav>
          <div class="itp-main">
            <div class="itp-tabs"></div>
            <div class="itp-view"></div>
          </div>
        </div>
        <div class="itp-foot"></div>`;
      el.appendChild(root);
      const $ = (s) => root.querySelector(s);
      const view = $('.itp-view');

      function matches(t) {
        if (state.group === 'fav' && !state.fav.has(t.dir)) return false;
        if (state.group !== 'all' && state.group !== 'fav' && t.group !== state.group) return false;
        const q = state.query.trim().toLowerCase();
        if (!q) return true;
        return (t.zh + ' ' + t.dir + ' ' + t.desc + ' ' + t.path + ' ' + t.cat + ' ' + t.group).toLowerCase().includes(q);
      }

      function renderRail() {
        const counts = { all: TOOLS.length, fav: state.fav.size };
        for (const t of TOOLS) counts[t.group] = (counts[t.group] || 0) + 1;
        const rail = $('.itp-rail');
        rail.innerHTML = '';
        const item = (key, label, en) => {
          const b = document.createElement('button');
          b.className = state.group === key ? 'on' : '';
          b.innerHTML = `<span>${esc(label)}${en ? ` <span class="en">${esc(en)}</span>` : ''}</span><span class="n">${counts[key] ?? 0}</span>`;
          b.onclick = () => { state.group = key; renderAll(); };
          rail.appendChild(b);
        };
        item('all', '全部工具');
        item('fav', '★ 收藏');
        const sep = document.createElement('div'); sep.className = 'sep'; rail.appendChild(sep);
        for (const g of GROUP_ORDER) item(g, g, CAT_OF[g]);
      }

      function renderTabs() {
        const el2 = $('.itp-tabs');
        el2.innerHTML = '';
        const mk = (id, label, closable, onClick) => {
          const d = document.createElement('div');
          d.className = 'itp-tab' + (state.active === id ? ' on' : '');
          const l = document.createElement('span'); l.className = 'lbl'; l.textContent = label;
          d.appendChild(l);
          d.onclick = (e) => { if (!e.target.classList.contains('x')) onClick(); };
          if (closable) {
            const x = document.createElement('button');
            x.className = 'x'; x.textContent = '✕';
            x.onclick = (e) => { e.stopPropagation(); closeTab(id); };
            d.appendChild(x);
          }
          el2.appendChild(d);
        };
        mk('home', '工具箱首页', false, () => { state.active = 'home'; renderAll(); });
        for (const dir of state.open) {
          const t = TOOLS.find((x) => x.dir === dir);
          if (t) mk(dir, t.zh, true, () => { state.active = dir; renderAll(); });
        }
      }

      function closeTab(dir) {
        state.open = state.open.filter((d) => d !== dir);
        const v = toolViews.get(dir);
        if (v) { v.wrap.__off(); v.wrap.remove(); toolViews.delete(dir); }
        if (state.active === dir) state.active = 'home';
        saveLS(LS.tab, state.open);
        renderAll();
      }
      function openTool(dir) {
        if (!state.open.includes(dir)) state.open.push(dir);
        state.active = dir;
        saveLS(LS.tab, state.open);
        renderAll();
      }
      function toggleFav(dir) {
        state.fav.has(dir) ? state.fav.delete(dir) : state.fav.add(dir);
        saveLS(LS.fav, [...state.fav]);
        renderAll();
      }

      function card(t) {
        const c = document.createElement('div');
        c.className = 'itp-card';
        const badges = [];
        if (t.forkOnly && demo) badges.push('<span class="itp-badge fork">fork 新增</span>');
        if (t.needsNet) badges.push('<span class="itp-badge net">需联网</span>');
        c.innerHTML = `
          <span class="nm">${esc(t.zh)}</span>
          <span class="ds">${esc(t.desc)}</span>
          <span class="slug">${esc(t.path)}</span>
          ${badges.length ? `<span class="itp-badges">${badges.join('')}</span>` : ''}`;
        const f = document.createElement('button');
        f.className = 'fav' + (state.fav.has(t.dir) ? ' on' : '');
        f.textContent = '★';
        f.title = state.fav.has(t.dir) ? '取消收藏' : '收藏';
        f.onclick = (e) => { e.stopPropagation(); toggleFav(t.dir); };
        c.prepend(f);
        c.onclick = () => openTool(t.dir);
        return c;
      }

      function renderHome() {
        const list = TOOLS.filter(matches);
        $('.itp-count').textContent =
          `${TOOLS.length} 个工具 · 全量` + (list.length !== TOOLS.length ? ` · 筛选出 ${list.length}` : '');
        if (homeBox) homeBox.remove();
        homeBox = document.createElement('div');
        if (!list.length) {
          homeBox.innerHTML = '<div class="itp-empty">没有匹配的工具，换个关键词试试</div>';
        } else {
          homeBox.className = 'itp-home';
          const groups = GROUP_ORDER.filter((g) => list.some((t) => t.group === g));
          // fav 不是工具分组名：与 all 一样按命中项的真实分组渲染，否则按 [state.group] 过滤恒空（真机白屏病历）
          const byRealGroup = state.group === 'all' || state.group === 'fav' || state.query;
          for (const g of (byRealGroup ? groups : [state.group])) {
            const items = list.filter((t) => t.group === g);
            if (!items.length) continue;
            const hh = document.createElement('div'); hh.className = 'itp-group-h';
            hh.innerHTML = `<span>${esc(g)}</span><span class="gc">${esc(CAT_OF[g])} · ${items.length} 个</span>`;
            homeBox.appendChild(hh);
            const grid = document.createElement('div'); grid.className = 'itp-grid';
            for (const t of items) grid.appendChild(card(t));
            homeBox.appendChild(grid);
          }
        }
        view.appendChild(homeBox);
      }

      function buildTool(t) {
        const wrap = document.createElement('div'); wrap.className = 'itp-tool';
        const note = document.createElement('div'); note.className = 'itp-tool-note';
        const bits = [`<span>${esc(t.zh)} · <code>${esc(t.path)}</code></span>`];
        if (demo && t.forkOnly) bits.push('<span class="warn">fork 新增工具：线上演示站没有，iframe 显示该站 404；本地 dist 就位后由插件伺服，此问题消失</span>');
        if (t.needsNet) bits.push('<span class="warn">需联网：此工具运行时要访问外部服务</span>');
        if (demo) bits.push('<span>双层导航已裁剪隐藏（定值裁剪，滚动时顶部 62px 为遮罩带）</span>');
        note.innerHTML = bits.join('');
        wrap.appendChild(note);
        const frame = document.createElement('div'); frame.className = 'itp-frame';
        const f = document.createElement('iframe');
        const srcBase = demo ? (data.demoBase || 'https://it-tools.tech') : (data.appBase || '/it-tools/app/');
        f.src = demo ? srcBase + t.path : srcBase + t.path.slice(1);
        f.loading = 'lazy';
        frame.appendChild(f);
        wrap.appendChild(frame);
        const applyNow = () => { if (demo && wrap.style.display !== 'none') { frame.__showTop = state.showTop; applyClip(frame, f); } };
        if (demo) {
          const hint = document.createElement('span');
          hint.textContent = '工具页若是英文：展开顶栏选一次「简体中文」（存在 iframe 分区存储里，与官网互不影响），收起后仍是中文。';
          note.appendChild(hint);
          const btn = document.createElement('button');
          btn.className = 'itp-mini';
          const syncBtn = () => { btn.textContent = state.showTop ? '收起演示站顶栏（恢复裁剪）' : '展开演示站顶栏（切语言/主题用）'; };
          syncBtn();
          btn.onclick = () => { state.showTop = !state.showTop; syncBtn(); applyNow(); };
          note.appendChild(btn);
          applyNow();
          const onResize = () => applyNow();
          window.addEventListener('resize', onResize);
          wrap.__off = () => window.removeEventListener('resize', onResize);
        } else {
          wrap.__off = () => {};
        }
        wrap.__applyClip = applyNow;
        return wrap;
      }

      function renderFoot() {
        const modeNote = demo
          ? '当前为演示模式（it-tools 构建产物未就位，工具页挂线上站）；产物放入插件 dist/ 后自动切同源伺服并预置中文。'
          : '当前为本地模式（同源 dist 伺服，构建侧已隐藏双层导航并预置中文）。';
        $('.itp-foot').textContent =
          `目录 ${TOOLS.length} 个工具 · 中文词条取自 it-tools 仓库 zh.yml · ${modeNote}` +
          (cfg().distNote ? ` ${cfg().distNote}` : '');
      }

      function renderAll() {
        renderRail(); renderTabs(); renderFoot();
        if (state.active !== 'home' && !TOOLS.some((x) => x.dir === state.active)) state.active = 'home';
        for (const [dir, v] of toolViews) v.wrap.style.display = dir === state.active ? '' : 'none';
        if (state.active === 'home') {
          renderHome();
        } else {
          if (homeBox) { homeBox.remove(); homeBox = null; }
          const t = TOOLS.find((x) => x.dir === state.active);
          let v = toolViews.get(t.dir);
          if (!v) { v = { wrap: buildTool(t) }; toolViews.set(t.dir, v); }
          if (!v.wrap.isConnected) view.appendChild(v.wrap);
          v.wrap.style.display = '';
          v.wrap.__applyClip();
        }
        view.scrollTop = 0;
      }

      const q = $('.itp-search input');
      q.addEventListener('input', () => {
        state.query = q.value;
        // 搜索只筛首页清单：工具页开着时逐键重渲会反复重建 iframe（每次一发整站加载）
        state.active = 'home';
        renderAll();
        q.focus();
      });
      const onKey = (e) => {
        if (e.key === '/' && !root.contains(document.activeElement)) { e.preventDefault(); q.focus(); }
      };
      document.addEventListener('keydown', onKey);
      shellCleanups.push(() => document.removeEventListener('keydown', onKey));
      $('.itp-theme').onclick = () => {
        const dark = root.classList.toggle('itp-dark');
        saveLS(LS.theme, dark ? 'dark' : 'light');
      };

      renderAll();
      return { dispose() {
        while (shellCleanups.length) shellCleanups.pop()();
        for (const v of toolViews.values()) v.wrap.__off();
        toolViews.clear(); homeBox = null;
        root.remove();
      } };
    }

    // ------------------------------------------------------------
    // 3) 页面组件：拉目录 → 挂壳
    // ------------------------------------------------------------
    function ItToolsPage() {
      const boxRef = useRef(null);
      useEffect(() => {
        const el = boxRef.current;
        if (!el) return;
        let dead = false;
        let shell = null;
        el.innerHTML = '<div class="itp-state">正在加载工具目录…</div>';
        if (!API()) {
          el.innerHTML = '<div class="itp-state itp-state-err">配置未就位：宿主未提供 webServer，一个入口都不注册</div>';
          return;
        }
        fetch(API(), { method: 'GET' })
          .then((r) => (r.ok ? r.json() : Promise.reject(new Error(`HTTP ${r.status}`))))
          .then((data) => {
            if (dead) return;
            if (!data || !data.ok || !Array.isArray(data.tools)) throw new Error('目录载荷形状不对');
            el.innerHTML = '';
            shell = createShell(el, data);
          })
          .catch((e) => {
            if (dead) return;
            el.innerHTML = '';
            const box = document.createElement('div');
            box.className = 'itp-state itp-state-err';
            box.textContent = `目录拉取失败：${e?.message ?? e}。刷新本页面可重试。`;
            el.appendChild(box);
          });
        return () => { dead = true; if (shell) shell.dispose(); shell = null; };
      }, []);
      return h('div', { className: 'itp-root', ref: boxRef });
    }

    function PanelIcon() {
      return h('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' },
        h('path', { d: 'M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-2.4 2.5-2.5z' }));
    }

    // ------------------------------------------------------------
    // 4) apply：入口注册
    // ------------------------------------------------------------
    function apply(ctx) {
      if (!cfg().routePrefix) return; // 没路由前缀 = 没 webServer：一个入口都不注册
      ctx.effect(() => injectStyle(), 'it-tools:style');
      ctx.slots.inject('sidebar.panellist', () =>
        ctx.slots.register(
          { name: 'sidebar.panellist', id: PANEL_ID, order: PANEL_ORDER(), label: () => cfg().label || 'IT 工具箱' },
          PanelIcon,
        ));
      ctx.slots.inject('main', () =>
        ctx.slots.register({ name: 'main', key: PANEL_ID }, ItToolsPage));
    }

    exports.apply = apply;
    exports.inject = ['slots'];
    exports.PANEL_ID = PANEL_ID;
    exports.__test = { cfg, API, esc, clipSider, applyClip, createShell, CLIP_TOP, LS, PanelIcon, ItToolsPage };

    // 宿主 ModuleLoader 吃的是 factory 的**返回值**当模块导出：
    // 返回 module 会让外层拿不到 apply ⇒ 真机报 "invalid plugin, received object"。
    return module.exports;
  },
});
