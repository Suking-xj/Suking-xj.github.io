import { a5 as r, _ as j } from "./vendor.74d5941c.js";
import { g as g$1, M, j as j$1 } from "./rasterProjectionHelper.3405c919.js";
class t {
  constructor(t2 = 15e3, e = 5e3) {
    this._timer = null, this._cachedBlocks = new Map(), this._size = -1, this._duration = t2, this._interval = Math.min(t2, e);
  }
  decreaseRefCount(t2, e) {
    const s2 = t2 + "/" + e, r2 = this._cachedBlocks;
    if (r2.has(s2)) {
      const t3 = r2.get(s2);
      return t3.refCount--, t3.refCount <= 0 && (r2.delete(s2), t3.controller && t3.controller.abort()), t3.refCount;
    }
    return 0;
  }
  getBlock(t2, e) {
    const s2 = t2 + "/" + e, r2 = this._cachedBlocks;
    if (r2.has(s2)) {
      const t3 = r2.get(s2);
      return t3.ts = Date.now(), t3.refCount++, r2.delete(s2), r2.set(s2, t3), t3.block;
    }
    return null;
  }
  putBlock(t2, e, s2, r2 = null) {
    const i2 = this._cachedBlocks, c2 = t2 + "/" + e;
    if (i2.has(c2)) {
      const t3 = i2.get(c2);
      t3.ts = Date.now(), t3.refCount++;
    } else
      i2.set(c2, { block: s2, ts: Date.now(), refCount: 1, controller: r2 });
    this.trim(), this.updateTimer();
  }
  deleteBlock(t2, e) {
    const s2 = this._cachedBlocks, r2 = t2 + "/" + e;
    s2.has(r2) && s2.delete(r2);
  }
  updateMaxSize(t2) {
    this._size = t2, this.trim();
  }
  empty() {
    this._cachedBlocks.clear(), this.clearTimer();
  }
  getCurrentSize() {
    return this._cachedBlocks.size;
  }
  updateTimer() {
    if (this._timer != null)
      return;
    const t2 = this._cachedBlocks;
    this._timer = setInterval(() => {
      const e = Array.from(t2), s2 = Date.now();
      for (let r2 = 0; r2 < e.length && e[r2][1].ts <= s2 - this._duration; r2++)
        t2.delete(e[r2][0]);
      t2.size === 0 && this.clearTimer();
    }, this._interval);
  }
  trim() {
    const t2 = this._cachedBlocks;
    if (this._size === -1 || this._size >= t2.size)
      return;
    const e = Array.from(t2);
    for (let s2 = 0; s2 < e.length - this._size; s2++)
      t2.delete(e[s2][0]);
  }
  clearTimer() {
    this._timer != null && (clearInterval(this._timer), this._timer = null);
  }
}
const c = new Map(), a = new t();
function i(e, t2) {
  return t2 == null ? e : `${e}?sliceId=${t2}`;
}
function s(e, t2) {
  const n = { extent: null, rasterInfo: t2, cache: new Map() };
  if (c.has(e)) {
    const t3 = c.get(e);
    return t3.push(n), t3.length - 1;
  }
  return c.set(e, [n]), 0;
}
function u(e, t2) {
  if (c.has(e)) {
    const n = c.get(e);
    n[t2] = null, n.some((e2) => e2 != null) || c.delete(e);
  }
}
function h(e, t2, n) {
  if (!c.has(e))
    return t2 == null ? a.decreaseRefCount(e, n) : 0;
  const o = c.get(e);
  if (o[t2] == null)
    return a.decreaseRefCount(e, n);
  const r2 = o[t2].cache;
  if (r2.has(n)) {
    const e2 = r2.get(n);
    if (e2.refCount--, e2.refCount === 0) {
      r2.delete(n);
      for (let e3 = 0; e3 < o.length; e3++)
        o[e3] && o[e3].cache.has(n) && o[e3].cache.delete(n);
      e2.controller && e2.controller.abort();
    }
    return e2.refCount;
  }
  return 0;
}
function m(e, t2, n) {
  if (!c.has(e))
    return t2 == null ? a.getBlock(e, n) : null;
  const o = c.get(e);
  if (o[t2] == null) {
    for (let e2 = 0; e2 < o.length; e2++)
      if (o[e2] && o[e2].cache.has(n)) {
        const t3 = o[e2].cache.get(n);
        return t3.refCount++, t3.block;
      }
    return a.getBlock(e, n);
  }
  const r2 = o[t2].cache;
  if (r2.has(n)) {
    const e2 = r2.get(n);
    return e2.refCount++, e2.block;
  }
  for (let l = 0; l < o.length; l++)
    if (l !== t2 && o[l] && o[l] && o[l].cache.has(n)) {
      const e2 = o[l].cache.get(n);
      return e2.refCount++, r2.set(n, e2), e2.block;
    }
  return null;
}
function x(e, t2, n, o, r2 = null) {
  if (!c.has(e))
    return void (t2 == null && a.putBlock(e, n, o, r2));
  const l = c.get(e);
  if (l[t2] == null)
    return void a.putBlock(e, n, o, r2);
  const i2 = { refCount: 1, block: o, isResolved: false, isRejected: false, controller: r2 };
  o.then(() => i2.isResolved = true).catch(() => i2.isRejected = true), l[t2].cache.set(n, i2);
}
function d(e, t2, n) {
  if (!c.has(e))
    return void (t2 == null && a.deleteBlock(e, n));
  const o = c.get(e);
  o[t2] != null ? o[t2].cache.delete(n) : a.deleteBlock(e, n);
}
function y(e, t2) {
  if (!c.has(e))
    return null;
  const n = c.get(e);
  return n[t2] == null ? null : n[t2];
}
function g(n, c2, a2, i2, s2, u2, f = null) {
  const h2 = y(n, c2), m2 = h2.extent, { cache: x2, rasterInfo: d2 } = h2;
  if (m2 && m2.xmin === a2.xmin && m2.xmax === a2.xmax && m2.ymin === a2.ymin && m2.ymax === a2.ymax)
    return;
  const g2 = a2.clone().normalize(), { spatialReference: p, transform: k } = d2, M$1 = new Set();
  for (let y2 = 0; y2 < g2.length; y2++) {
    const n2 = g2[y2];
    if (n2.xmax - n2.xmin <= i2 || n2.ymax - n2.ymin <= i2)
      continue;
    let c3 = g$1(n2, p, f);
    r(k) && (c3 = k.inverseTransform(c3));
    const a3 = new j({ x: i2, y: i2, spatialReference: n2.spatialReference });
    if (s2 == null && !(s2 = M(a3, p, n2, f)))
      return;
    const { pyramidLevel: h3, pyramidResolution: m3, excessiveReading: x3 } = j$1(s2, d2, u2 || "closest");
    if (x3)
      return;
    const { storageInfo: R } = d2, { origin: C } = R, j$2 = { x: Math.max(0, Math.floor((c3.xmin - C.x) / m3.x)), y: Math.max(0, Math.floor((C.y - c3.ymax) / m3.y)) }, v = Math.ceil((c3.xmax - c3.xmin) / m3.x - 0.1), B = Math.ceil((c3.ymax - c3.ymin) / m3.y - 0.1), b = h3 > 0 ? R.pyramidBlockWidth : R.blockWidth, w = h3 > 0 ? R.pyramidBlockHeight : R.blockHeight, $ = 1, I = Math.max(0, Math.floor(j$2.x / b) - $), H = Math.max(0, Math.floor(j$2.y / w) - $), E = Math.floor((j$2.x + v - 1) / b) + $, P = Math.floor((j$2.y + B - 1) / w) + $;
    for (let e = H; e <= P; e++)
      for (let t2 = I; t2 <= E; t2++)
        M$1.add(`${h3}/${e}/${t2}`);
  }
  x2.forEach((e, t2) => {
    if (!M$1.has(t2)) {
      const e2 = x2.get(t2);
      (e2 == null || e2.isResolved || e2.isRejected) && x2.delete(t2);
    }
  }), h2.extent = { xmin: a2.xmin, ymin: a2.ymin, xmax: a2.xmax, ymax: a2.ymax };
}
export { d, g, h, i, m, s, u, x };
