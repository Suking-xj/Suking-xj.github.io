import { fV as a$1, fW as t } from "./vendor.74d5941c.js";
function a(t2, n) {
  return t2[0] = n[0], t2[1] = n[1], t2[2] = n[2], t2[3] = n[3], t2;
}
function r(t2, n, a2, r2, s2) {
  return t2[0] = n, t2[1] = a2, t2[2] = r2, t2[3] = s2, t2;
}
function s(t2, n, a2) {
  return t2[0] = n[0] + a2[0], t2[1] = n[1] + a2[1], t2[2] = n[2] + a2[2], t2[3] = n[3] + a2[3], t2;
}
function u(t2, n, a2) {
  return t2[0] = n[0] - a2[0], t2[1] = n[1] - a2[1], t2[2] = n[2] - a2[2], t2[3] = n[3] - a2[3], t2;
}
function o(t2, n, a2) {
  return t2[0] = n[0] * a2[0], t2[1] = n[1] * a2[1], t2[2] = n[2] * a2[2], t2[3] = n[3] * a2[3], t2;
}
function e(t2, n, a2) {
  return t2[0] = n[0] / a2[0], t2[1] = n[1] / a2[1], t2[2] = n[2] / a2[2], t2[3] = n[3] / a2[3], t2;
}
function c(t2, n) {
  return t2[0] = Math.ceil(n[0]), t2[1] = Math.ceil(n[1]), t2[2] = Math.ceil(n[2]), t2[3] = Math.ceil(n[3]), t2;
}
function i(t2, n) {
  return t2[0] = Math.floor(n[0]), t2[1] = Math.floor(n[1]), t2[2] = Math.floor(n[2]), t2[3] = Math.floor(n[3]), t2;
}
function h(t2, n, a2) {
  return t2[0] = Math.min(n[0], a2[0]), t2[1] = Math.min(n[1], a2[1]), t2[2] = Math.min(n[2], a2[2]), t2[3] = Math.min(n[3], a2[3]), t2;
}
function M(t2, n, a2) {
  return t2[0] = Math.max(n[0], a2[0]), t2[1] = Math.max(n[1], a2[1]), t2[2] = Math.max(n[2], a2[2]), t2[3] = Math.max(n[3], a2[3]), t2;
}
function f(t2, n) {
  return t2[0] = Math.round(n[0]), t2[1] = Math.round(n[1]), t2[2] = Math.round(n[2]), t2[3] = Math.round(n[3]), t2;
}
function l(t2, n, a2) {
  return t2[0] = n[0] * a2, t2[1] = n[1] * a2, t2[2] = n[2] * a2, t2[3] = n[3] * a2, t2;
}
function m(t2, n, a2, r2) {
  return t2[0] = n[0] + a2[0] * r2, t2[1] = n[1] + a2[1] * r2, t2[2] = n[2] + a2[2] * r2, t2[3] = n[3] + a2[3] * r2, t2;
}
function d(t2, n) {
  const a2 = n[0] - t2[0], r2 = n[1] - t2[1], s2 = n[2] - t2[2], u2 = n[3] - t2[3];
  return Math.sqrt(a2 * a2 + r2 * r2 + s2 * s2 + u2 * u2);
}
function b(t2, n) {
  const a2 = n[0] - t2[0], r2 = n[1] - t2[1], s2 = n[2] - t2[2], u2 = n[3] - t2[3];
  return a2 * a2 + r2 * r2 + s2 * s2 + u2 * u2;
}
function x(t2) {
  const n = t2[0], a2 = t2[1], r2 = t2[2], s2 = t2[3];
  return Math.sqrt(n * n + a2 * a2 + r2 * r2 + s2 * s2);
}
function q(t2) {
  const n = t2[0], a2 = t2[1], r2 = t2[2], s2 = t2[3];
  return n * n + a2 * a2 + r2 * r2 + s2 * s2;
}
function p(t2, n) {
  return t2[0] = -n[0], t2[1] = -n[1], t2[2] = -n[2], t2[3] = -n[3], t2;
}
function v(t2, n) {
  return t2[0] = 1 / n[0], t2[1] = 1 / n[1], t2[2] = 1 / n[2], t2[3] = 1 / n[3], t2;
}
function g(t2, n) {
  const a2 = n[0], r2 = n[1], s2 = n[2], u2 = n[3];
  let o2 = a2 * a2 + r2 * r2 + s2 * s2 + u2 * u2;
  return o2 > 0 && (o2 = 1 / Math.sqrt(o2), t2[0] = a2 * o2, t2[1] = r2 * o2, t2[2] = s2 * o2, t2[3] = u2 * o2), t2;
}
function _(t2, n) {
  return t2[0] * n[0] + t2[1] * n[1] + t2[2] * n[2] + t2[3] * n[3];
}
function j(t2, n, a2, r2) {
  const s2 = n[0], u2 = n[1], o2 = n[2], e2 = n[3];
  return t2[0] = s2 + r2 * (a2[0] - s2), t2[1] = u2 + r2 * (a2[1] - u2), t2[2] = o2 + r2 * (a2[2] - o2), t2[3] = e2 + r2 * (a2[3] - e2), t2;
}
function w(t$1, a2) {
  let r2, s2, u2, o2, e2, c2;
  a2 = a2 || 1;
  do {
    r2 = 2 * t() - 1, s2 = 2 * t() - 1, e2 = r2 * r2 + s2 * s2;
  } while (e2 >= 1);
  do {
    u2 = 2 * t() - 1, o2 = 2 * t() - 1, c2 = u2 * u2 + o2 * o2;
  } while (c2 >= 1);
  const i2 = Math.sqrt((1 - e2) / c2);
  return t$1[0] = a2 * r2, t$1[1] = a2 * s2, t$1[2] = a2 * u2 * i2, t$1[3] = a2 * o2 * i2, t$1;
}
function y(t2, n, a2) {
  const r2 = n[0], s2 = n[1], u2 = n[2], o2 = n[3];
  return t2[0] = a2[0] * r2 + a2[4] * s2 + a2[8] * u2 + a2[12] * o2, t2[1] = a2[1] * r2 + a2[5] * s2 + a2[9] * u2 + a2[13] * o2, t2[2] = a2[2] * r2 + a2[6] * s2 + a2[10] * u2 + a2[14] * o2, t2[3] = a2[3] * r2 + a2[7] * s2 + a2[11] * u2 + a2[15] * o2, t2;
}
function z(t2, n, a2) {
  const r2 = n[0], s2 = n[1], u2 = n[2], o2 = a2[0], e2 = a2[1], c2 = a2[2], i2 = a2[3], h2 = i2 * r2 + e2 * u2 - c2 * s2, M2 = i2 * s2 + c2 * r2 - o2 * u2, f2 = i2 * u2 + o2 * s2 - e2 * r2, l2 = -o2 * r2 - e2 * s2 - c2 * u2;
  return t2[0] = h2 * i2 + l2 * -o2 + M2 * -c2 - f2 * -e2, t2[1] = M2 * i2 + l2 * -e2 + f2 * -o2 - h2 * -c2, t2[2] = f2 * i2 + l2 * -c2 + h2 * -e2 - M2 * -o2, t2[3] = n[3], t2;
}
function A(t2) {
  return "vec4(" + t2[0] + ", " + t2[1] + ", " + t2[2] + ", " + t2[3] + ")";
}
function D(t2, n) {
  return t2[0] === n[0] && t2[1] === n[1] && t2[2] === n[2] && t2[3] === n[3];
}
function E(n, a2) {
  const r2 = n[0], s2 = n[1], u2 = n[2], o2 = n[3], e2 = a2[0], c2 = a2[1], i2 = a2[2], h2 = a2[3];
  return Math.abs(r2 - e2) <= a$1 * Math.max(1, Math.abs(r2), Math.abs(e2)) && Math.abs(s2 - c2) <= a$1 * Math.max(1, Math.abs(s2), Math.abs(c2)) && Math.abs(u2 - i2) <= a$1 * Math.max(1, Math.abs(u2), Math.abs(i2)) && Math.abs(o2 - h2) <= a$1 * Math.max(1, Math.abs(o2), Math.abs(h2));
}
const L = u, k = o, B = e, C = d, F = b, G = x, H = q;
Object.freeze({ __proto__: null, copy: a, set: r, add: s, subtract: u, multiply: o, divide: e, ceil: c, floor: i, min: h, max: M, round: f, scale: l, scaleAndAdd: m, distance: d, squaredDistance: b, length: x, squaredLength: q, negate: p, inverse: v, normalize: g, dot: _, lerp: j, random: w, transformMat4: y, transformQuat: z, str: A, exactEquals: D, equals: E, sub: L, mul: k, div: B, dist: C, sqrDist: F, len: G, sqrLen: H });
export { D, E, _, a, g, j, l, q, r, s, x, y };
