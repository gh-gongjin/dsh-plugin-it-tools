/** 零依赖断言小套：node test/<x>.test.mjs 直跑，非 0 退出码即失败。 */
let checks = 0;
const fails = [];
let group = '';

export function section(name) { group = name; }
export function ok(cond, label) {
  checks++;
  if (!cond) fails.push(`${group ? group + ' / ' : ''}${label}`);
}
export function eq(actual, expected, label) {
  checks++;
  const a = JSON.stringify(actual), e = JSON.stringify(expected);
  if (a !== e) fails.push(`${group ? group + ' / ' : ''}${label}: 期望 ${e}，实得 ${a}`);
}
export function throws(fn, label) {
  checks++;
  try { fn(); fails.push(`${group ? group + ' / ' : ''}${label}: 未抛错`); }
  catch { /* expected */ }
}
export function report(file) {
  if (fails.length) {
    console.error(`FAIL ${file}: ${fails.length}/${checks} 项失败`);
    for (const f of fails) console.error('  - ' + f);
    process.exit(1);
  }
  console.log(`PASS ${file}: ${checks} 项全绿`);
}

/** 假 ServerResponse：只记录 writeHead/end。 */
export function fakeRes() {
  const res = {
    status: 0, headers: null, body: null,
    writeHead(s, h) { res.status = s; res.headers = h || {}; },
    end(b) { res.body = b; },
  };
  res.json = () => (typeof res.body === 'string' ? JSON.parse(res.body) : null);
  return res;
}
