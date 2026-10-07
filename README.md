# dsh-plugin-it-tools

dsh 面板内的 IT 工具箱：it-tools（[sharevb fork](https://github.com/sharevb/it-tools)）全量 474 个工具，
中文分类壳 + iframe 工具区。不另部署服务：产物由插件自己的 `/it-tools` 只读路由伺服。

权威文档：`docs/design-spec.md`（铁律 / 路由面 / dist 未决项 / S0 探针清单 / 验收台账）。

## 状态

- **S1 骨架 + S3 装配 + S5 全量 + S6 壳修正（离线面）**：宿主半边 + 面板半边 + 离线测试 **5 文件 / 164 项全绿**（`node test/run-all.mjs`）。
- **dist 全量就位**（2026-10-05，用户裁定「要全量」，此前的 50 工具深裁剪作废回退）：fork `vite build`
  产物 **182MB / 2411 文件** 原样拷入，盘上 `tools-filter.json` 为 `{}` ⇒ SPA 全留；
  预置中文 / 隐藏 chrome / SW 自注销桩 / wasm 裸名重写全部由路由伺服侧注入（源码零改动，spec §2/§9.3/§9.6）。
  本地模式 CDP 实测：iframe 内 `locale=zh`、工具页全中文、SPA 侧栏/顶栏 computed 不可见、SW 未接管
  （`tmp/shots/panel-local-*.png`）；`tmp/verify-all.mjs` 电池逐页真加载 **474/474 中文标题渲染、伺服日志零 404**（spec §9.6）。
- **真机 S0 已过（2026-10-05 用户挂载）**：真宿主 GET 读数 `mode=local`、SPA 回落 200；面板全中文出图。
  首轮贴图揪出「黑条」= accent 绑了真宿主近黑的 brand-primary 令牌 ⇒ 已改自有蓝（离线钉住），**重启宿主生效**。
- **真机二轮（2026-10-06 用户贴图）**：黑条已蓝、474 全量上屏；新两案=页签无手型光标（补 `cursor:pointer`）、
  切页签 iframe 重建丢输入（改 toolViews 常驻复用，只隐藏不销毁）。同源夹具功能验 `tmp/verify-tabs-persist.mjs` **7/7**
  （真写值→切走→切回读回原值）。**client.js 又动了 ⇒ 再重启一次宿主复验**（spec §9.7）。

## 布局

```
index.js              宿主半边：/it-tools 前缀 GET/HEAD 路由（api/catalog + app 静态伺服）
client.js             面板半边：自绘壳（分类/搜索/页签/收藏/主题）+ iframe
lib/static.js         dist 只读伺服：越界守卫 + MIME + SPA fallback + dist-missing 503
lib/catalog.js        catalog/tools-all.json 装载校验（单一事实源，tmp/build-tools-all.mjs 生成）
test/                 node 直跑无框架：node test/run-all.mjs
tmp/ prototype/       取证脚本与可交互原型（prototype/index.html 可直接打开）——本地通道，不随仓发布
```

## 安装

```
dsh plugin add github:gh-gongjin/dsh-plugin-it-tools
```

仓内自带 `dist/`（182MB 构建产物，link:/github: 挂载无宿主打包机制，缺它只能跑 demo 模式）。

## 挂载（link: 方式，同其它 dsh 插件）

profile `package.json` 加 `"dsh-plugin-it-tools": "link:F:/dsh-plugins/dsh-plugin-it-tools"` 后重启宿主。
无第三方依赖，宿主半边只用 `node:` 内置模块。

## 许可

GPL-3.0-only。本插件随仓分发 it-tools（sharevb fork，GPLv3）的构建产物 `dist/`，整仓按上游口径以 GPL-3.0 发布（LICENSE 与上游同文）。

