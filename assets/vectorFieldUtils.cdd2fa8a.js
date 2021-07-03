import { a5 as r$1 } from "./vendor.74d5941c.js";
import { u } from "./pixelUtils.5399eb4b.js";
const i = 180 / Math.PI, n = function(e) {
  return e && e.declaredClass === "esri.layers.support.PixelBlock" && e.pixels && e.pixels.length > 0;
}, r = new Map();
function a(e, t) {
  return r.get(e) / r.get(t) || 1;
}
function o(e) {
  return (450 - e) % 360;
}
function h(e, t = "geographic") {
  const [n2, r2] = e, a2 = Math.sqrt(n2 * n2 + r2 * r2);
  let h2 = Math.atan2(r2, n2) * i;
  return h2 = (360 + h2) % 360, t === "geographic" && (h2 = o(h2)), [a2, h2];
}
function s(e, t = "geographic") {
  let n2 = e[1];
  t === "geographic" && (n2 = o(n2)), n2 %= 360;
  const r2 = e[0];
  return [r2 * Math.cos(n2 / i), r2 * Math.sin(n2 / i)];
}
function l(e, i2, r2 = "geographic", a2 = 1) {
  if (!n(e))
    return e;
  const { pixels: o2, width: l2, height: c2 } = e, p2 = l2 * c2, u$1 = o2[0], x = o2[1], m = u.createEmptyBand(e.pixelType, p2), f = u.createEmptyBand(e.pixelType, p2);
  let g = 0;
  for (let t = 0; t < c2; t++)
    for (let e2 = 0; e2 < l2; e2++)
      i2 === "vector-uv" ? ([m[g], f[g]] = h([u$1[g], x[g]], r2), m[g] *= a2) : ([m[g], f[g]] = s([u$1[g], x[g]], r2), m[g] *= a2, f[g] *= a2), g++;
  const d = new u({ pixelType: e.pixelType, width: e.width, height: e.height, mask: e.mask, validPixelCount: e.validPixelCount, maskIsAlpha: e.maskIsAlpha, pixels: [m, f] });
  return d.updateStatistics(), d;
}
function c(e, t, i2 = 1) {
  if (i2 === 1 || !n(e))
    return e;
  const r2 = e.clone(), { pixels: a2, width: o2, height: h2 } = r2, s2 = a2[0], l2 = a2[1];
  let c2 = 0;
  for (let n2 = 0; n2 < h2; n2++)
    for (let e2 = 0; e2 < o2; e2++)
      t === "vector-uv" ? (s2[c2] *= i2, l2[c2] *= i2) : s2[c2] *= i2, c2++;
  return r2.updateStatistics(), r2;
}
function p(t, i2, n2, r2, a2) {
  if (!r$1(a2) || !a2.spatialReference.equals(t.spatialReference))
    return { extent: t, width: i2, height: n2 };
  const o2 = a2.xmin, h2 = a2.ymax;
  r2 = Math.max(r2 || 0, 30);
  const s2 = Math.ceil(i2 * (1 / r2)), l2 = Math.ceil(n2 * (1 / r2)), c2 = ((t.xmax - t.xmin) / s2 + (t.ymax - t.ymin) / l2) / 2;
  return t.xmin = o2 + Math.floor((t.xmin - o2) / c2) * c2, t.xmax = o2 + Math.ceil((t.xmax - o2) / c2) * c2, t.ymin = h2 + Math.floor((t.ymin - h2) / c2) * c2, t.ymax = h2 + Math.ceil((t.ymax - h2) / c2) * c2, { extent: t, width: Math.round(t.width / c2), height: Math.round(t.height / c2) };
}
r.set("meter-per-second", 1), r.set("kilometer-per-hour", 0.277778), r.set("knots", 0.514444), r.set("feet-per-second", 0.3048), r.set("mile-per-hour", 0.44704);
export { a, c, l, p };
