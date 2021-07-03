var __pow = Math.pow;
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import { _ as j$1, eV as V, eW as X, eX as D, aa as s, cr as M$1, di as H, dg as g$1, b7 as S, cT as G, eY as O } from "./vendor.74d5941c.js";
const u = 5e-4, m = function(e, n) {
  const t = (e.isWGS84 || e.isWebMercator) && (n.isWGS84 || n.isWebMercator);
  return !(e.equals(n) || t);
}, p = function(e, n) {
  const t = (e[0] + e[4] + e[4 * n.cols] + e[4 * n.cols + 4]) / 4, o = (e[1] + e[5] + e[4 * n.rows + 1] + e[4 * n.rows + 5]) / 4;
  return [Math.abs(t - e[2 * n.rows + 2]), Math.abs(o - e[2 * n.rows + 3])];
}, f = 32;
function h() {
  return __async(this, null, function* () {
    if (V() || !X())
      return null;
    yield D();
  });
}
function y(n, t, o) {
  if (!m(n.spatialReference, t))
    return null;
  if (!V())
    throw new s("rasterprojectionhelper-projectResolution", "projection engine is not loaded");
  return o ? O(t, n.spatialReference, n) : O(n.spatialReference, t, n);
}
function M(n, o, r, s$1 = null) {
  if (n.spatialReference.equals(o))
    return n;
  const l = m(n.spatialReference, o);
  if (l && !V())
    throw new s("rasterprojectionhelper-projectResolution", "projection engine is not loaded");
  const c = r.center, u2 = new M$1({ xmin: c.x - n.x / 2, xmax: c.x + n.x / 2, ymin: c.y - n.y / 2, ymax: c.y + n.y / 2, spatialReference: n.spatialReference }), p2 = l ? H(u2, o, s$1) : g$1(u2, o);
  if (p2 == null)
    return null;
  return { x: p2.xmax - p2.xmin, y: p2.ymax - p2.ymin };
}
function w(e, n = 0.01) {
  return G(e) ? n / G(e) : 0;
}
function d(o, i, r = null, s$1 = true) {
  const l = o.spatialReference;
  if (l.equals(i))
    return o;
  const c = m(l, i);
  if (c && !V())
    throw new s("rasterprojectionhelper-projectResolution", "projection engine is not loaded");
  const p2 = c ? H(o, i, r) : g$1(o, i);
  if (p2 && s$1 && i.isGeographic) {
    var f2, h2;
    const [e, t] = l.isWebMercator ? S(l).origin : (f2 = (h2 = S(l)) == null ? void 0 : h2.valid) != null ? f2 : [], i2 = w(l);
    i2 && e != null && t != null && (Math.abs(o.x - e) < i2 && Math.abs(180 - p2.x) < u ? p2.x -= 360 : Math.abs(o.x - t) < i2 && Math.abs(180 + p2.x) < u && (p2.x += 360));
  }
  return p2;
}
function g(i, r, s$1 = null, l = true) {
  var c, p2, f2, h2;
  const y2 = i.spatialReference;
  if (y2.equals(r))
    return i;
  const M2 = m(y2, r);
  if (M2 && !V())
    throw new s("rasterprojectionhelper-projectExtent", "projection engine is not loaded");
  const g2 = M2 ? H(i, r, s$1) : g$1(i, r);
  let [R2, j2] = (c = (p2 = S(y2)) == null ? void 0 : p2.origin) != null ? c : [];
  if (g2 && l && y2.isWebMercator && r.isGeographic && R2 != null && j2 != null) {
    const e = 1e-3, n = 1e3;
    if (Math.abs(i.xmin - R2) < e && Math.abs(j2 - i.xmax) > n && Math.abs(180 - g2.xmax) < u) {
      g2.xmin = -180;
      const e2 = [];
      e2.push(new j$1(i.xmax, i.ymin, y2)), e2.push(new j$1(i.xmax, (i.ymin + i.ymax) / 2, y2)), e2.push(new j$1(i.xmax, i.ymax, y2));
      const n2 = e2.map((e3) => d(e3, r, s$1)).filter((e3) => !isNaN(e3 == null ? void 0 : e3.x)).map((e3) => e3.x);
      g2.xmax = Math.max.apply(null, n2);
    }
    if (Math.abs(i.xmax - j2) < e && Math.abs(R2 - i.xmin) > n && Math.abs(180 + g2.xmin) < u) {
      g2.xmax = 180;
      const e2 = [];
      e2.push(new j$1(i.xmin, i.ymin, y2)), e2.push(new j$1(i.xmin, (i.ymin + i.ymax) / 2, y2)), e2.push(new j$1(i.xmin, i.ymax, y2));
      const n2 = e2.map((e3) => d(e3, r, s$1)).filter((e3) => !isNaN(e3 == null ? void 0 : e3.x)).map((e3) => e3.x);
      g2.xmin = Math.min.apply(null, n2);
    }
  }
  [R2, j2] = r.isWebMercator ? S(r).origin : (f2 = (h2 = S(r)) == null ? void 0 : h2.valid) != null ? f2 : [];
  const b2 = w(r);
  return b2 && R2 != null && j2 != null && (Math.abs(g2.xmin - R2) < b2 && (g2.xmin = R2), Math.abs(g2.xmax - j2) < b2 && (g2.xmax = j2)), g2;
}
function R(t, i, r, s$1 = null, l = null, c = false, x = [f, f]) {
  var u2, h2;
  if (m(t.spatialReference, i.spatialReference) && !V())
    throw new s("rasterprojectionhelper-projectResolution", "projection engine is not loaded");
  if (!(t && i && r))
    return null;
  const { xmin: y2, ymin: M2, xmax: w2, ymax: g2 } = t, R2 = t.spatialReference, j2 = i.spatialReference, [b2, v] = (u2 = (h2 = S(R2)) == null ? void 0 : h2.valid) != null ? u2 : [], N = { x: x[0] * r.x, y: x[1] * r.y }, S$1 = { cols: Math.ceil((w2 - y2) / N.x - 0.1) + 1, rows: Math.ceil((g2 - M2) / N.y - 0.1) + 1 }, z = N.x, W = N.y, G2 = [];
  let P, L = false;
  for (let e = 0; e < S$1.cols; e++) {
    const n = [];
    for (let t2 = 0; t2 < S$1.rows; t2++) {
      let r2 = d(new j$1({ x: y2 + z * e, y: g2 - W * t2, spatialReference: R2 }), j2, s$1);
      l && (r2 = l.inverseTransform(r2)), n.push(r2), e > 0 && c && r2 && P[t2] && b2 != null && r2.x < P[t2].x && (r2.x += v - b2), r2 ? (G2.push((r2.x - i.xmin) / (i.xmax - i.xmin)), G2.push((i.ymax - r2.y) / (i.ymax - i.ymin))) : (G2.push(NaN), G2.push(NaN), L = true);
    }
    P = n;
  }
  const q = p(G2, S$1), A = new Float32Array((S$1.cols - 1) * (S$1.rows - 1) * 2 * 6), E = new Float32Array([-0, -1, 1, -1, 1, -0, 1, -0, -0]), F = new Float32Array([-1, 1, 0, 0, -1, 1, 1, 0, 0]);
  for (let e = 0; e < S$1.cols - 1; e++) {
    for (let n = 0; n < S$1.rows - 1; n++) {
      let t2 = e * S$1.rows * 2 + 2 * n;
      const o = G2[t2], i2 = G2[t2 + 1], r2 = G2[t2 + 2], a = G2[t2 + 3];
      t2 += 2 * S$1.rows;
      const s2 = G2[t2], l2 = G2[t2 + 1], c2 = G2[t2 + 2], x2 = G2[t2 + 3];
      let u3 = 0, m2 = 12 * (n * (S$1.cols - 1) + e);
      for (let e2 = 0; e2 < 3; e2++)
        A[m2++] = E[u3++] * o + E[u3++] * r2 + E[u3++] * c2;
      u3 = 0;
      for (let e2 = 0; e2 < 3; e2++)
        A[m2++] = E[u3++] * i2 + E[u3++] * a + E[u3++] * x2;
      u3 = 0;
      for (let e2 = 0; e2 < 3; e2++)
        A[m2++] = F[u3++] * o + F[u3++] * s2 + F[u3++] * c2;
      u3 = 0;
      for (let e2 = 0; e2 < 3; e2++)
        A[m2++] = F[u3++] * i2 + F[u3++] * l2 + F[u3++] * x2;
    }
    if (L)
      for (let e2 = 0; e2 < A.length; e2++)
        isNaN(A[e2]) && (A[e2] = -1);
  }
  return { offsets: G2, error: q, coefficients: A, spacing: x, size: [S$1.cols - 1, S$1.rows - 1] };
}
function j(e, n, t) {
  const i = Math.log(e.x / n.pixelSize.x) / Math.LN2, r = Math.log(e.y / n.pixelSize.y) / Math.LN2, a = n.storageInfo.maximumPyramidLevel || 0;
  let s2 = t === "down" ? Math.floor(Math.min(i, r)) : t === "up" ? Math.ceil(Math.max(i, r)) : Math.round((i + r) / 2), l = false;
  s2 < 0 ? s2 = 0 : s2 > a && (l = s2 > a + 3, s2 = a);
  const c = __pow(2, s2);
  return { pyramidLevel: s2, pyramidResolution: new j$1({ x: c * n.nativePixelSize.x, y: c * n.nativePixelSize.y, spatialReference: n.spatialReference }), excessiveReading: l };
}
function b(e, n, t = 512, i = true) {
  const { extent: a, spatialReference: s2, pixelSize: l } = e, c = M(new j$1({ x: l.x, y: l.y, spatialReference: s2 }), n, a);
  if (c == null)
    return { projectedPixelSize: null, scales: null, srcResolutions: null, isCustomTilingScheme: false };
  const x = (c.x + c.y) / 2, u2 = G(n), m2 = x * u2 * 96 * 39.37, p2 = n.isGeographic ? 512 / t * 2958287637958547e-7 : 512 / t * 591657527591555e-6;
  let f2 = false;
  const h2 = g(a, n);
  i && (n.isGeographic || n.isWebMercator) && (f2 = h2.xmin * h2.xmax < 0);
  let y2, w2 = m2;
  const d2 = 1.001;
  if (f2) {
    w2 = p2;
    const e2 = 0.29858214164761665, n2 = e2 * (96 * u2 * 39.37);
    y2 = M(new j$1({ x: e2, y: e2, spatialReference: { wkid: 3857 } }), s2, h2), y2.x *= w2 / n2, y2.y *= w2 / n2;
  } else {
    y2 = { x: l.x, y: l.y };
    const n2 = Math.ceil(Math.log(Math.min(e.width, e.height) / 32) / Math.LN2);
    let t2 = 0;
    for (; w2 < p2 * (d2 / 2) && t2 < n2; )
      t2++, w2 *= 2, y2.x *= 2, y2.y *= 2;
    Math.max(w2, p2) / Math.min(w2, p2) <= d2 && (w2 = p2);
  }
  const R2 = [w2], j2 = [{ x: y2.x, y: y2.y }], b2 = 70.5310735, v = Math.min(b2, m2) / d2;
  for (; w2 >= v; )
    w2 /= 2, y2.x /= 2, y2.y /= 2, R2.push(w2), j2.push({ x: y2.x, y: y2.y });
  return { projectedPixelSize: c, scales: R2, srcResolutions: j2, isCustomTilingScheme: !f2 };
}
export { M, R, b, d, g, h, j, y };
