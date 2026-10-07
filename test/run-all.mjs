import { spawnSync } from 'node:child_process';
import { readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const files = readdirSync(here).filter((f) => f.endsWith('.test.mjs')).sort();
let bad = 0;
for (const f of files) {
  const r = spawnSync(process.execPath, [path.join(here, f)], { stdio: 'inherit' });
  if (r.status !== 0) bad++;
}
console.log(bad ? `\nRUN-ALL FAIL: ${bad}/${files.length} 个文件红` : `\nRUN-ALL PASS: ${files.length} 个文件全绿`);
process.exit(bad ? 1 : 0);
