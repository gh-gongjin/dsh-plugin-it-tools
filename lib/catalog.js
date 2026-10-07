/**
 * 全量工具目录装载（单一事实源 catalog/tools-all.json，由 tmp/build-tools-all.mjs 生成；
 * 2026-10-05 用户裁定「要全量」，此前的 50 工具裁剪口径作废）。
 * 校验失败宁可抛错让装配层降级成「目录不可用」，也不端出半坏的数据。
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const CATALOG_FILE = fileURLToPath(new URL('../catalog/tools-all.json', import.meta.url));

const FIELDS = ['dir', 'path', 'group', 'cat', 'zh', 'desc', 'forkOnly', 'needsNet'];
const PATH_RE = /^\/[a-z0-9][a-z0-9-]*$/;
const DIR_RE = /^[a-z0-9][a-z0-9-]*$/;

export function loadCatalog({ file = CATALOG_FILE } = {}) {
  const raw = JSON.parse(readFileSync(file, 'utf8'));
  if (!Array.isArray(raw) || raw.length === 0) throw new Error('catalog: 不是非空数组');
  const seenPath = new Set();
  const seenDir = new Set();
  raw.forEach((t, i) => {
    for (const f of FIELDS) {
      if (!(f in t)) throw new Error(`catalog[${i}]: 缺字段 ${f}`);
    }
    if (typeof t.dir !== 'string' || !DIR_RE.test(t.dir)) throw new Error(`catalog[${i}]: dir 非法 ${t.dir}`);
    if (typeof t.path !== 'string' || !PATH_RE.test(t.path)) throw new Error(`catalog[${i}]: path 非法 ${t.path}`);
    if (typeof t.group !== 'string' || !t.group) throw new Error(`catalog[${i}]: group 非法`);
    if (typeof t.cat !== 'string' || !t.cat) throw new Error(`catalog[${i}]: cat（英文原分类）非法`);
    if (typeof t.zh !== 'string' || !t.zh) throw new Error(`catalog[${i}]: zh 标题为空`);
    if (typeof t.desc !== 'string' || !t.desc) throw new Error(`catalog[${i}]: zh 描述为空`);
    if (typeof t.forkOnly !== 'boolean' || typeof t.needsNet !== 'boolean') {
      throw new Error(`catalog[${i}]: forkOnly/needsNet 必须是布尔`);
    }
    if (seenPath.has(t.path)) throw new Error(`catalog[${i}]: path 重复 ${t.path}`);
    if (seenDir.has(t.dir)) throw new Error(`catalog[${i}]: dir 重复 ${t.dir}`);
    seenPath.add(t.path);
    seenDir.add(t.dir);
  });
  // 分组顺序 = 数组内首次出现顺序（壳的分类栏与 API 载荷共用这一份顺序，不再各自排）
  const groups = [...new Set(raw.map((t) => t.group))];
  return { tools: raw, groups };
}
