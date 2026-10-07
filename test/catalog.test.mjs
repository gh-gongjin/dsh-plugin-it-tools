import { writeFileSync, mkdtempSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { loadCatalog } from '../lib/catalog.js';
import { ok, eq, throws, report, section } from './_helpers.mjs';

section('真目录（全量 474，2026-10-05「要全量」裁定后口径）');
const c = loadCatalog();
eq(c.tools.length, 474, '474 个工具');
eq(c.groups.length, 26, '26 个分组');
eq(c.groups[0], 'JSON', '分组顺序=首次出现（JSON 打头）');
eq(c.groups[c.groups.length - 1], '未分类', '未分类垫底');
eq([...new Set(c.tools.map((t) => t.group))].join('|'), c.groups.join('|'), '分组集合与顺序一致');
ok(c.tools.every((t) => t.zh && t.desc && t.path && t.dir), '每条都有中文名与描述');
ok(c.tools.every((t) => typeof t.cat === 'string' && t.cat), '每条都有英文原分类 cat');
ok(c.tools.filter((t) => t.forkOnly).length === 388, 'forkOnly=388');
eq(c.tools.filter((t) => t.needsNet).length, 8, 'needsNet=8');
ok(c.tools.every((t) => !/<\/?[a-zA-Z]/.test(t.zh + t.desc)), '词条无 HTML 标签（尖括号只可能是字面量，壳侧走 esc）');

section('坏数据必须抛');
const tmp = mkdtempSync(path.join(os.tmpdir(), 'itp-cat-'));
function bad(name, arr) {
  const f = path.join(tmp, name + '.json');
  writeFileSync(f, JSON.stringify(arr));
  throws(() => loadCatalog({ file: f }), name);
}
const GOOD = { dir: 'x-tool', path: '/x-tool', group: 'g', cat: 'C', zh: '名', desc: '述', forkOnly: false, needsNet: false };
bad('缺字段', [{ dir: 'x', path: '/x', group: 'g', zh: '名', desc: '述' }]);
bad('缺cat', [{ ...GOOD, cat: undefined }]);
bad('cat为空串', [{ ...GOOD, cat: '' }]);
bad('路径非法', [{ ...GOOD, path: 'x' }]);
bad('路径大写', [{ ...GOOD, path: '/X-Tool' }]);
bad('path重复', [GOOD, { ...GOOD }]);
bad('dir重复', [GOOD, { ...GOOD, path: '/y-tool' }]);
bad('空描述', [{ ...GOOD, desc: '' }]);
bad('forkOnly非布尔', [{ ...GOOD, forkOnly: 'yes' }]);
bad('空数组', []);
bad('不是数组', { tools: [] });
report('test/catalog.test.mjs');
