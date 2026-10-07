/**
 * 只读静态伺服（it-tools dist）。全部读进内存再 end：
 * 文件都是构建产物（最大个位数 MB），换来 handler 无流状态、可测、幂等。
 */
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.eot': 'application/vnd.ms-fontobject',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.webmanifest': 'application/manifest+json',
  '.wasm': 'application/wasm',
};

function json(res, status, obj) {
  const body = JSON.stringify(obj);
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(body),
    'Cache-Control': 'no-store',
  });
  res.end(body);
}

function fileHeaders(filePath, size) {
  const type = MIME[path.extname(filePath).toLowerCase()] || 'application/octet-stream';
  return {
    'Content-Type': type,
    'Content-Length': size,
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
  };
}

async function statOrNull(p) {
  try {
    const s = await stat(p);
    return s.isFile() ? s : null;
  } catch {
    return null;
  }
}

/**
 * @param req 未使用（保留形参位）；@param res 只需 writeHead/end（真宿主是 ServerResponse，测试用替身）。
 * @param relPath 已剥掉 `/it-tools/app` 前缀、未解码的 URL 路径（query 由调用方去掉）。
 * @param opts.virtual { [rel]: { contentType, body } } 命中即回（sw.js 自注销桩）。
 * @param opts.indexTransform 函数 html→html：凡最终落到 index.html（直请或 SPA fallback）就过一遍
 *        （改 base href、预置中文、隐藏 chrome 由此进入；对回写响应重算 Content-Length）。
 * @param opts.chunkTransform 函数 js→js：凡 .js 响应就过一遍（Emscripten 裸 wasm 名重写；同样重算长度）。
 */
export async function serveStatic({ distRoot, virtual, indexTransform, chunkTransform }, req, res, relPath) {
  let rel;
  try {
    rel = decodeURIComponent((relPath || '/').replace(/^\/+/, ''));
  } catch {
    return json(res, 400, { ok: false, reason: 'bad-url' });
  }
  if (rel.includes('\0')) return json(res, 400, { ok: false, reason: 'bad-path' });

  const v = virtual && virtual[rel];
  if (v) {
    const body = Buffer.from(v.body, 'utf8');
    res.writeHead(200, {
      'Content-Type': v.contentType,
      'Content-Length': body.length,
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
    });
    return res.end(body);
  }

  const abs = path.resolve(distRoot, rel);
  const rootWithSep = distRoot.endsWith(path.sep) ? distRoot : distRoot + path.sep;
  if (abs !== distRoot && !abs.startsWith(rootWithSep)) {
    return json(res, 404, { ok: false, reason: 'not-found' });
  }

  let s = await statOrNull(abs);
  let target = abs;
  if (!s) {
    const hasExt = path.extname(abs) !== '';
    if (hasExt) return json(res, 404, { ok: false, reason: 'not-found' });
    // history 路由（createWebHistory）⇒ 无扩展名路径一律回落到入口页
    target = path.join(distRoot, 'index.html');
    s = await statOrNull(target);
    if (!s) return json(res, 503, { ok: false, reason: 'dist-missing' });
  }

  let buf = await readFile(target);
  const headers = fileHeaders(target, buf.length);
  if (indexTransform && headers['Content-Type'].startsWith('text/html')) {
    buf = Buffer.from(indexTransform(buf.toString('utf8')), 'utf8');
    headers['Content-Length'] = buf.length;
  } else if (chunkTransform && headers['Content-Type'].startsWith('text/javascript')) {
    buf = Buffer.from(chunkTransform(buf.toString('utf8')), 'utf8');
    headers['Content-Length'] = buf.length;
  }
  res.writeHead(200, headers);
  res.end(buf);
}

export { json };
