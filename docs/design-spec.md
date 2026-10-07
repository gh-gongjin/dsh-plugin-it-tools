# dsh-plugin-it-tools 设计规格

状态：**S1 骨架（离线面）**。真机探针（S0）与 dist 构建产物均未发生。
原型验收通道：`prototype/index.html`（自绘壳 + 线上演示站 iframe），2026-10-05 用户裁定停留在此形态，见 §2。

## 0. 铁律（继承 sysops / modelwatch / gh-trending，逐条生效）

- 零 `@deepseek-ai/*` import —— link: 挂载会解析出第二份模块实例。
- 零第三方依赖 —— 宿主半边只用 `node:` 内置模块与 `./lib/*`。
- `inject = []` —— 三项服务（webServer / storageDomain / timer）全部按需注入；写死进 inject 会让宿主缺任一服务时插件加载即卡死。
- 路由 handler 只吃宿主传的参数；本插件 **全程 GET/HEAD**，不定义任何 POST 路由（无 body 拼接面）。
- 不弹浮层：状态与降级一律就地落面板。
- 生命周期：`ctx.effect` 返回撤销器；webServer 路由注册走 `w.effect(register)`。
- client factory **必须 `return module.exports`**（modelwatch 病历：返回 module ⇒ 真机 "invalid plugin, received object"）。
- `tmp/` 是 gitignore 的取证目录，未经确认不清理。

## 1. 定位与路线（已裁定）

把 it-tools（sharevb fork）做成 dsh 面板内的工具箱：
**静态 dist + 插件同源只读路由 + 面板 iframe**。不移植工具本身（475 个不现实），
全量工具的中文目录由插件自绘壳呈现（数据链见 §5；50 子集口径已作废，见 §9.6）。

## 2. dist 供给 —— A 形态：本地构建产物（终态=全量，见 §9.6；下文 50 裁剪是被改判的中间口径）

插件运行需要 `dist/`（it-tools 构建产物）。裁定过程：B（docker 镜像提取）先被选中，
执行中 Docker Desktop 引擎不稳（管道两次消失）+ containerd 内容 store 坏层（`678c697b` blob 反复
"blob not found"），改走 registry API 直拉又因重定向/文件名冒号折损，用户最终裁定 **A：自己构建**。
**不得自行对 fork 发起 pnpm install / vite build**（构建由用户在 `F:\gj_workspace\it-tools` 执行）。

用户构建**不需要任何源码改动**——生产化三项都安排在装配/伺服侧做，不依赖重构：
- 裁剪到 50：`tools-filter.json` 是 dist 里的运行时文件，拷入后由插件改写，无需重新构建；
- 预置中文 + 隐藏 chrome：插件路由在 index.html 响应里注入（同源，S3 实现）；
- SW 红线：插件路由对 `sw.js` 返回自注销桩（S3 实现）。

构建命令（对标 fork `Dockerfile` 已验证配方；pnpm 12.6.0 由 Dockerfile 与 `@pnpm/exe` devDep 锁定，本机 PATH 无 pnpm 故走 npx；engines 需 node 24.x，本机 v24.14.0 满足）：

```
cd /d F:\gj_workspace\it-tools
npx pnpm@12.6.0 install --frozen-lockfile --ignore-scripts
npx pnpm@12.6.0 run build
```

产物 `F:\gj_workspace\it-tools\dist\` 整体拷入 `F:\dsh-plugins\dsh-plugin-it-tools\dist\`（或构建完由插件侧拷贝校验）。

改判登记（不改上文历史口径，只补现状）：①「你帮我构建」——用户明确要求一次，构建由插件侧执行（雷与解法见 §9.3）；
②「装进插件的只有 50 个工具就可以了」——拷入后做深裁剪，插件 `dist/` 终态 45MB / 933 文件（见 §9.4）；
③「要全量」（2026-10-05 同日改判，现行口径）——50 深裁剪作废，插件 `dist/` 复位为 fork 全量构建
**182MB / 2411 文件**，`tools-filter.json` 用盘上 `{}`（全留），路由不再虚拟顶掉它（见 §9.6）。
全量产物双份：fork 侧 `F:\gj_workspace\it-tools\dist` 与本插件 `dist/`。默认禁令（无用户明确要求不自行 install/build）依旧有效。

`dist/` 未就位时插件**诚实降级**：`/it-tools/app/*` 返回 503 JSON（`reason: dist-missing`），
面板切 demo 模式（iframe 指线上演示站 + 裁剪隐藏双层导航 + 顶栏展开开关），目录照常用。

## 3. dist 就位后的构建侧要求（生产管线，S3 才做）

- **红线：关 Service Worker / PWA** —— 生产构建自注册 SW 且 controllerchange 强制 reload，会接管 dsh 同源 scope。
- history 路由 ⇒ 插件路由对无扩展名路径 SPA fallback 到 `index.html`（本骨架已实现）。
- `tools-filter.json`：全量口径下用 fork 构建原样 `{}`（无 include/exclude ⇒ SPA 逐条默认留）；顶掉它的裁剪路数已随 §9.6 改判撤除。`base:'./'` + `<base href>` 已核实可挂子路径，不用重构。
- 注入 hide-chrome CSS（`.navbar`/`.hero-wrapper`/sider）+ 预置 `locale=zh`、`vueuse-color-scheme`；
  wasm 工具需 COOP/COEP 响应头（全量里含 argon2/scrypt/web-tree-sitter 等 wasm 项，S0 探针顺带验证）。
- dist 体积随仓自带 182MB（link: 挂载无宿主打包机制；2026-10-05 用户裁定体积换全量）。

## 4. 文件树（S1 现状）

```
dsh-plugin-it-tools/
├── package.json          # dsh.bundle/cordis patch 同 gh-trending 形
├── cordis.yml
├── index.js              # 宿主半边
├── client.js             # 浏览器半边（壳 + iframe）
├── lib/
│   ├── static.js         # 只读静态伺服：路径守卫 + MIME + SPA fallback
│   └── catalog.js        # 全量工具目录装载与校验
├── catalog/tools-all.json # 数据（tmp/build-tools-all.mjs 生成，单一事实源）
├── dist/                 # fork 全量构建产物（182MB / 2411 文件）
├── docs/design-spec.md   # 本文件
├── test/                 # node 直跑，无框架
└── tmp/ prototype/       # 取证与原型（gitignore / 演示用）
```

## 5. 数据链（离线可复跑，全量口径 2026-10-05）

`tmp/extract-tools.mjs`（扫 fork `src/tools/*/index.ts` + `locales/zh.yml`，474 条，缺 2 由下游补）
→ `tmp/build-tools-all.mjs`（自定 26 组中文名 CAT_ZH、组内按拼音排；forkOnly 按上游目录对账=388；
needsNet 源码 fetch/axios/WebSocket 扫描=8；json-patch / keyboard-tester 两条 zh.yml 真缺条目 OVERRIDES 补）
→ `catalog/tools-all.json`。
字段：`{dir, path, group, cat, zh, desc, forkOnly, needsNet}`（`cat`=英文原分类，壳侧与 `group` 并列展示，
沿用 api-catalog「分类中文+原文并列」裁定）；分组顺序=数组内首次出现顺序（26 组，JSON 打头、未分类垫底）。
抽取雷（本轮修掉并登记）：zh.yml 里 18 条 description 用块标量 `|`/`>`，旧正则把 `description: |` 当单行值吃掉
⇒ 空描述 18 条（loadCatalog 会整目录拒绝）；改为块标量优先匹配 + 续行要求 ≥6 空格缩进（防把 `    texts:` 键吞进描述）。
fork zh.yml 覆盖实测：8271 叶子键缺 43（全为 fork 新工具内部报错串等，`common.*` 零缺，`tmp/zh-coverage.mjs`）。
对账：`catalog/tools-all.json` 474 条 path 与 dist `tools.store-*.js` 的 `path:` 反引号全集合相等（host-compat 钉住）。

## 6. API 面（前缀 `/it-tools`，全部 GET/HEAD）

| 路由 | 行为 |
|---|---|
| `GET /it-tools/api/catalog` | `{ok, mode, groups, tools, demoBase, appBase, note}`；mode=`local`\|`demo` 由 dist 是否存在决定 |
| `GET /it-tools/app/<path>` | dist 静态伺服；无扩展名未命中 → `index.html`（200）；带扩展名未命中 → 404；越界路径 → 404；dist 缺失 → 503 |
| 其它 `/it-tools/*` | 404 JSON |
| 任何非 GET/HEAD | 405 JSON |

静态响应一律 `Cache-Control: no-store`（宿主重启/换 dist 不需要清缓存）。

## 7. 面板半边

- 注册形与 gh-trending 同形：`sidebar.panellist` 图标 + `main` keyed slot 整页。
- 一份真相：壳的全部词条/分组/模式来自宿主 index-inject 载荷（`__IT_TOOLS__`），载荷没到显示「配置未就位」。
- 布局：左分类栏 + 顶部搜索（`/` 聚焦）+ 可关页签 + 收藏 + 主题切换（与原型一致）；
  工具区 iframe：demo 模式带裁剪（侧栏 `clipSider(C)`、顶栏带 62px、`showTop` 开关），local 模式不裁剪（构建已真隐藏）。
- 高度链：iframe 需要确定高度，宿主主列是 overflow:hidden —— 骨架先用 gh-trending 真机已活的
  `max-height:100vh` 根 + flex 撑满，**精确读数留给 S0 真机**（appearance 的 100vh 禁令针对全屏皮肤，不在此复述为已裁定）。
- 存储：页签/收藏/主题存面板自身 localStorage（宿主 web 端同源），不占 storageDomain —— 丢了只是重开页签，无恢复义务。

## 8. S0 真机探针清单（只允许 GET；挂载后由用户点开面板配合读数）

1. 面板内 iframe 是否被宿主 CSP/框架策略拦截（demo 跨源 + `/it-tools/app/` 同源各测一发）；
2. 主列高度链实测（面板根 clientHeight、iframe 可视高）；
3. 宿主页面是否已有 SW 占 scope（为 §3 红线取基线）；
4. `GET /it-tools/api/catalog` 与 `GET /it-tools/app/`（503/200）在真宿主下的状态码。

## 9. 验收台账

### 9.1 S1 离线面（2026-10-05）
- `node test/run-all.mjs`：**4 文件 / 104 项全绿**（catalog 17、client 19、host-compat 44、static 24）。
  抓到并修掉三个真问题：catalog 两条空中文描述（timezone-converter/url-cleaner，zh.yml 缺键，OVERRIDES 补）；
  client 移植时 iframe src 少斜杠（`it-tools.techjson-prettify`）；工具页开着时逐键搜索会反复重建 iframe（改为搜索即回首页清单）。
- 壳的可视走查（`tmp/make-panel-harness.mjs` + `tmp/shot-panel.mjs`，CDP）：
  `tmp/shots/panel-home.png`（50 卡/9 组栏/页签/foot 演示模式说明）、
  `panel-tool-demo.png`（裁剪生效，iframe 几何 left=-52/top=82/1476×778）、
  `panel-topbar-expanded.png`（语言下拉可见）、`panel-search-argon.png`（筛选出 1 + fork 徽标）。
  走查还抓到 createShell 不保底注样式导致裸 DOM 的问题（已改为壳自保底，幂等）。

### 9.2 原型轮读数（同日，`prototype/index.html`）
- 裁剪几何 CDP 实测：侧栏 240px 定宽（`max(240, 视口×12.5%)`）、顶栏带 62px；`tmp/shots/v2-*.png`。
- 中文链路：`tmp/shots/zh3-tool-chinese-clipped.png`（iframe 写 `locale=zh` 后工具页全中文）。
- 用户环境限制如实登记：分区存储 ⇒ 演示站中文需用户浏览器内手动切一次；此形态已被「不要安装了」锁定为原型现状。

### 9.3 S3 装配 + 真构建（2026-10-05，用户改判「你帮我构建」）
- 构建三雷与解法（全部登记，重装环境可复现）：
  1. 在 fork 目录里直接 `npx pnpm@…` 被 npm 11 的 devEngines 检查拦下（EBADDEVENGINES，包管理器必须是 pnpm）⇒ 从 neutral cwd 跑 `npx -y pnpm@12.6.0 -C <fork>`；
  2. `devEngines.runtime` + `.nvmrc`(24.21.0) 令 pnpm 强拉 node 运行时，nodejs.org 直连超时 ⇒ 挂 `HTTP(S)_PROXY=http://127.0.0.1:7897` 后下载成功；
  3. Windows CRLF 检出把 `patches/*.patch` 的 mode 行撑坏，pnpm 报 `ERR_PNPM_INVALID_PATCH: invalid file mode: 100644` ⇒ `sed -i 's/\r$//'` 转 LF 后通过（checkout 形态修正，非源码改动）。
- 产物：`vite build` 3m15s，dist 182MB / 2411 文件，robocopy 拷入插件 `dist/`。
- 装配实现（源码零改动兑现）：路由虚拟响应顶掉 `tools-filter.json`（include 锚定 50 路径 + exclude `.*`，fork 判定顺序重放自检 50/50）与 `sw.js`（自注销桩：清缓存+unregister，**不** navigate 页面——防注册-刷新死循环）；`index.html` 伺服时改 `<base href>` 到 `/it-tools/app/` 并在 `<head>` 后注入 locale 预置（仅未设置才写）+ 隐藏 chrome CSS（`.n-layout-sider,.navbar`）。SPA 回落与直请同路（`lib/static.js` indexTransform）。
- 离线面扩到 **5 文件 / 144 项全绿**（catalog 24、client 19、host-compat 55、inject 13、static 33）。
- local 模式 CDP 真机前哨（`tmp/serve-local.mjs` + `tmp/shot-panel-local.mjs`，假 ctx 与真宿主同形、只 GET/HEAD）：
  iframe 内实测 `locale=zh`、h1=「JSON格式化与美化」、sider/navbar computed display:none、`sw: uncontrolled`；
  切工具到 base64 页 pathname/中文标题双证。截图 `tmp/shots/panel-local-tool.png`、`panel-local-tool2.png`。
  走查抓到真 bug：不裁剪路径下 iframe 无尺寸（CSS 只给 position:absolute，尺寸原先只活在 applyClip 内联里）⇒ `.itp-frame iframe` 补 `left:0;top:0;width:100%;height:100%`（demo 裁剪仍被内联覆盖，回归由 S1 四图路径保证）。
- 未做：真机 S0 探针（面板内 iframe/CSP 放行与高度链）仍待用户挂载插件后验；dist 体积裁剪（182MB）未裁定。

### 9.4 S4 深裁剪：装进插件的只有 50 个工具（2026-10-05，用户裁定）
- 裁定原文：「我现在的要求是装进插件的只有 50 个工具就可以了，其他的暂时先不管」⇒ 采 C 案（文件级深裁剪），非重新构建。
- 工具 `tmp/prune-dist.mjs`（干跑默认 / `--apply` / `--trace` 带回链）：种子 = index.html 引用 + 50 工具组件 chunk
  （从 `tools.store-*.js` 的 `path:`` + 动态 import 串里正则摘出）；对 js/css/webmanifest/xml/html 做引用 BFS
  （引号文件名、`url()` 含无引号、裸 wasm/md/mp3 名）；反向可达剪枝。store chunk 的 js 出边白名单
  = 种子 chunk + PascalCase（@vicons 图标）——否则 475 工具的 eager glob 会把 134MB 全留住；
  一刀切禁 store 出边又会误删图标（curl/docker-compose 实测红过，两头都收过学费）。
- 读数：176.6MB → **45MB / 933 文件**（删 1478，释放 134.4MB；根级只剩真被引用的 wasm 等）。全量备份在 fork 侧 `dist/`，重裁可复跑。
- 伺服侧新增（源码零改动延续）：`rewriteBareAssetRefs`（lib/inject.js）+ `chunkTransform`（lib/static.js，.js 响应重写并重算 Content-Length，index.js 接线；wasm 文件名每次现读 dist 根，换构建免重启）。
  两形态事实源（curl-converter 实测取证）：裸名 `` `tree-sitter.wasm` `` 运行时经补 `/` 的 locateFile ⇒ 重写为**去头斜杠相对**（`it-tools/app/…`）；
  带根斜杠整串 `` `/tree-sitter-bash.wasm` `` 原样 fetch ⇒ 重写为**路由绝对**（`/it-tools/app/…`）。第一版重写两头都不中：绝对路径被补成协议相对 URL（`http://it-tools/app/…` ERR_NAME_NOT_RESOLVED），CDP Network 域抓到真 URL 才对上。
- 电池：`tmp/verify-50.mjs`（CDP 逐页真加载）：**50/50 中文标题渲染**（含 curl-converter h1=「Curl转换器」，两个 wasm 请求全落 `/it-tools/app/` 前缀内）；`tmp/_serve.log` 无 `-> 404`。
  过程修正三处引用形态各治好一类误删：CSS 无引号 `url(./codicon-*.ttf)`、`${Ve}` 模板裸名 `home.custom.md`、裸 wasm 名。
- 离线面 **5 文件 / 160 项全绿**（catalog 24、client 19、host-compat 63、inject 17、static 37），含真 dist 复放：伺服出的 curl chunk 内两形态重写落地、原始出路由形态不残留、根 wasm MIME 正确、`home.custom.md` 在册。
- 仍未做：真机 S0 探针（待用户挂载）。

### 9.5 S0 真机轮 + 黑条案（2026-10-05，用户 link: 挂载并重启）
- S0 探针读数（只 GET）：`GET /it-tools/api/catalog` → 200，`mode=local`、50 工具 / 9 组、`caps {webServer:true, catalog:true, dist:true}`；
  `GET /it-tools/app/date-converter`、`/it-tools/app/json-prettify` → 200（SPA 回落在真宿主通）。用户截图：面板出全、50 卡 / 9 组栏 / 页签 / foot 全中文、本地模式说明在位 ⇒ §8 第 4 项与面板可达性过。
- **黑条案（用户贴图问「这个黑色条是干什么的」）**：位置=左栏右缘、尺寸=3px×48px（原图逐像素扫实测）、对齐=选中行「全部工具」行高 ⇒ 是 `.itp-rail button.on` 的 `border-right:2px solid var(--itp-accent)`，
  而 accent 当时绑 `--dsw-alias-brand-primary`——appearance 病历早登记过该令牌真宿主形态近黑，这次复发。同令牌连带「工具箱首页」页签下划线也是黑的（截图同帧可证）。
  修复：`--itp-accent` 改自有固定蓝（亮 #2f62c9 / 暗 #4d7fdf，本就有），不再吃宿主 brand 令牌；client.test 加两条钉（不绑 brand-primary、两档皆字面 hex）。
- **走查夹具的更大问题（同案揪出）**：`tmp/make-panel-harness.mjs` 直接把壳挂成 `.itp-shell`，而真宿主 React 路径的容器是 `.itp-root`（变量定义在它身上）⇒ 夹具里所有 `--itp-*` 全空、依赖变量的样式整条失效，
  这类令牌问题在旧走查里根本不可能露头（「跨边界夹具形状要等于真宿主」病历第三次应验）。夹具已挂 `.itp-root` 类名，并加 `hosttokens` 档（argv[4]）把 `--dsw-alias-*` 按真宿主形态摆出来。
- 复测读数（hosttokens 夹具 + `tmp/measure-accent.mjs`）：rail 指示条 `2px rgb(47,98,201)`、页签 `inset 0 -2px rgb(47,98,201)`；
  合成旧绑定探针 `border-right:2px solid var(--dsw-alias-brand-primary)` 同场实测 `rgb(17,20,24)`（近黑）——黑条因果链闭合。截图 `tmp/shots/s0-before-blackbar.png`（用户原图裁切 `s0-crop-blackbar.png`）、`s0-after-accent-blue.png`。
- 离线面 **5 文件 / 162 项全绿**（client 19→21）。
- 待用户复验：重启宿主后黑条应变蓝（client.js 走 bundle 缓存，必须重启，data-analysis 病历）。

### 9.6 S5 全量改判：要全量（2026-10-05，用户裁定，现行口径）
- 裁定原文：「要全量」——同日上午黑条修复后用户追问「50 个少了，全量打进插件有什么影响」，给出影响表（体积 45MB→182MB、目录维护面 474 条、运行时性能无差）后拍板。S4 的 50 深裁剪（§9.4）作废。
- dist 复位：`robocopy /MIR` fork 侧备份 ⇒ **182MB / 2411 文件**；复位前用 `comm` 双向对账确认插件 dist 无备份之外的独有文件（镜像不吞东西）。盘上 `tools-filter.json` = `{}` ⇒ fork 判定「无 include/exclude，逐条默认留」。
- 装配撤除：index.js 不再虚拟顶掉 `tools-filter.json`，`lib/catalog.js` 的 `makeToolsFilter` 整函数删除（连同其 50 口径注释）；`sw.js` 自注销桩保留。
- 目录换源：`catalog/tools-all.json`（474 条 / 26 组）接替 tools50.json（已删）。生成链见 §5：新增 `cat` 字段（英文原分类），壳侧栏与首页组头「中文 · English」并列（api-catalog §9 同款裁定），搜索匹配加 `cat`+`group`，头部文案「常用首版」→「全量」。
- 数据雷（修在抽取器）：zh.yml 18 条 description 用块标量 `|`/`>`，旧单行正则把 `description: |` 当值吃掉 ⇒ 空描述 18 条——`loadCatalog` 是整目录拒绝，这类脏数据必须死在生成期。改块标量优先匹配 + 续行 ≥6 空格缩进（防把 `    texts:` 键吞进描述）。修后「空描述: 0」。
- 离线面 **5 文件 / 161 项全绿**（catalog 21、client 21、host-compat 65、inject 17、static 37）。改判三钉：catalog 474/26/JSON 打头/forkOnly=388/needsNet=8；`tools-filter.json` 伺服为 `{}` 且无 include/exclude 字段；**catalog path 全集合 == dist `tools.store-*.js` 反引号 path 全集合（474）**——防目录与产物两套事实。
- 电池 `tmp/verify-all.mjs`（CDP 逐页真加载 474 工具，假宿主 serve-local + 伺服日志两头发证）：**474/474 中文标题渲染、0 页重试、`tmp/_serve.log` 零 404**（`tmp/_verify_all.log`，EXIT=0）。
- 壳首屏走查（hosttokens 夹具 + `tmp/shot-home-full.mjs`，图 `tmp/shots/s5-home-full.png`）：474 卡 / 26 组头（「中文 · English · N 个」）/ rail 28 项（全部+收藏+26 组，中英上下排、无横向溢出，`scrollWidth<=clientWidth` 实测）；头部「474 个工具 · 全量」；选中指示条为蓝（黑条修复在夹具同帧可证）。local 模式工具页回归 `panel-local-tool*.png`：h1 中文、sider/navbar 不可见、sw uncontrolled。
- 重启提醒：本轮 index.js 与 client.js 都动了 ⇒ link: 挂载须重启宿主才吃（改和撤都要重启）。

### 9.7 S6 真机二轮：页签光标 + 切页签丢输入（2026-10-06，用户贴图两案）
- 用户重启后贴图确认：474 工具 / 26 组中英并列上屏、选中指示条已是蓝（黑条案闭账）。同帧红框两案：
  1. **页签 hover 不是可点击态**——`.itp-tab` 没写 cursor（卡片有、页签漏了）⇒ 补 `cursor:pointer`；
  2. **切换页签后工具页数据被清空**——旧 `renderAll` 每次 `view.innerHTML=''` 整区重建，iframe 连文档一起销毁重加载 ⇒
     改「常驻复用」：`toolViews` Map 按 dir 缓存工具页 wrap，切页签只 `display:none` 隐藏；
     关页签（`closeTab` 里 `__off()`+remove）与壳 dispose 才真销毁；demo 顶栏开关不再触发整渲，就地改按钮文案+重算裁剪。
- 功能验 `tmp/verify-tabs-persist.mjs`（不许拿源码 regex 当效果断言）：夹具经 serve-local 新增的 `/_panel/` 路由与 app **同源**，
  真往 phone-parser 的 input 写「13800138000」、json-prettify 的 textarea 写 `{"a":1}` → 切首页 → 开第二页签 → 切回第一页签，
  **读回原值 + iframe 节点 `__mark` 同一性双证**；再关页签验「才真销毁」（DOM 剩 1 wrap、活动回首页）。读数 **7/7 PASS**（computed cursor=pointer×2、写入×2、隐藏不销毁、值在、关即毁）。
- 夹具同步升级：`make-panel-harness.mjs` 把 `client.js` 拷进 `tmp/_panel/`（相对引用），同一份夹具 file:// 与 http 同源两通道都能开。
- 离线面 **5 文件 / 164 项全绿**（client 21→24：页签 cursor 钉、toolViews 在位钉、`view.innerHTML=''` 反模式钉）。
- 同轮贴图追加：「这个字感觉太小了点，比其他插件的小」（红框=壳标题）。对账兄弟插件页头：sysops/stock/appearance 17px、api-catalog/gh-trending/modelwatch 16px，本壳 15px 确实垫底 ⇒ `.itp-title` 15→**17px**（副文案 `.itp-count` 12px 与兄弟 `-sub` 一致，不动）。夹具出图核对 `tmp/shots/s5-home-full.png`。
- 待用户复验：重启宿主后 ①页签悬停变手型 ②工具页填一半切走再切回，输入还在 ③标题与其他插件同高。

### 9.8 建仓发布（2026-10-07，用户裁定「建独立公开仓」）
- 仓库：`gh-gongjin/dsh-plugin-it-tools`（public，main，topic `dsh-plugin`+`it-tools`），插件根即仓根（`github:` 安装要求 package.json/cordis.yml 在顶层，同 sysops 形制）。
- **许可改判 MIT→GPL-3.0-only**：仓内随带 it-tools（GPLv3）构建产物 `dist/` ⇒ 整仓按上游口径 GPL-3.0（LICENSE 与 fork 同文逐字节拷入）；package.json `license` 字段同步。README 增「安装（github:）/许可」两节。
- dist 入仓裁定：`github:`/link: 挂载无宿主打包机制，dist 不进仓则装出来只能跑 demo ⇒ **182MB/2411 文件随仓**（预检：无 >50MB 单文件，GitHub 100MB 硬顶安全；`.git` 包体 66MB）。
- `.gitignore` 收 tmp/、prototype/、node_modules、*.log（取证通道不发布）；`.gitattributes` 钉 `dist/** -text`+二进制档——autocrlf 会改伺服文件字节，wasm 裸名重写依赖运行时读到的原字节，不许仓库侧动。
- 提交 `5203114`（2431 文件）；`gh api` 核对远端 main sha == 本地 HEAD；推送走 `-c http.proxy=http://127.0.0.1:7897`（历史病历：裸 push 被重置）。
- 推送前后离线套件各跑一遍：5 文件 / 164 项全绿（EXIT=0）。

### 9.9 收藏白屏案（2026-10-07，用户贴图「点了收藏后在哪里看」→ 点「★ 收藏」是空白」）
- 根因（一行逻辑）：`renderHome` 的分组循环 `state.group === 'all' || state.query ? groups : [state.group]` 把 **fav 当成了工具分组名**——fav 态下按 `[state.group]` 过滤 `t.group === 'fav'` 恒空 ⇒ 页头「筛选出 1」对、卡片区白屏。收藏计数/存储/取消路径都健康（用户截图左栏「★ 收藏 1」即证）。
- 修复：fav 与 all 同走真实分组渲染（`byRealGroup`）。
- 功能验 `tmp/verify-fav.mjs`（同源夹具真点击，不拿 regex 当效果断言）：**10/10 PASS**——点两星（跨 JSON/转换器两组）→ 点栏 → 2 卡/2 分组头/「筛选出 2」/栏计数 2；撤一剩一、全撤走 `itp-empty` 空态提示（非白屏）。截图 `tmp/shots/s8-fav-view.png`。
  过程自纠两处：初稿含 `|| true` 假断言（撤掉，改成「剩 1 卡」真读数）、`/base64-converter` 目录里不存在（改 `/base64-string-converter`，grep 目录核对）。
- 离线回归 5 文件 / 164 项全绿（EXIT=0）。**client.js 又动 ⇒ 用户需再重启宿主**，复验点=点「★ 收藏」应列出已收藏工具（按分组带组头）。
