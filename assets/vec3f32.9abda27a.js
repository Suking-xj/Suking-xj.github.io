import { fV as a$2, fP as z$1, fQ as _$3, gp as Y$1, fK as j$1, aP as n$3, aW as t$3, fW as t$4 } from "./vendor.74d5941c.js";
import { a as a$3, r as r$3, s as s$1, l as l$1, _ as _$2, j, x as x$1, q, g, D as D$1, E as E$1 } from "./vec4.44fdb266.js";
function e$2() {
  return [1, 0, 0, 0, 1, 0, 0, 0, 1];
}
function r$2(e2) {
  return [e2[0], e2[1], e2[2], e2[3], e2[4], e2[5], e2[6], e2[7], e2[8]];
}
function n$2(e2, r2, n2, t2, a2, o2, u2, c2, f2) {
  return [e2, r2, n2, t2, a2, o2, u2, c2, f2];
}
function t$2(e2, r2) {
  return new Float64Array(e2, r2, 9);
}
Object.freeze({ __proto__: null, create: e$2, clone: r$2, fromValues: n$2, createView: t$2 });
function e$1() {
  return [0, 0, 0, 1];
}
function r$1(e2) {
  return [e2[0], e2[1], e2[2], e2[3]];
}
function n$1(e2, r2, n2, t2) {
  return [e2, r2, n2, t2];
}
function t$1(e2, r2) {
  return new Float64Array(e2, r2, 4);
}
const a$1 = e$1();
Object.freeze({ __proto__: null, create: e$1, clone: r$1, fromValues: n$1, createView: t$1, IDENTITY: a$1 });
function x(t2) {
  return t2[0] = 0, t2[1] = 0, t2[2] = 0, t2[3] = 1, t2;
}
function A(t2, s2, a2) {
  a2 *= 0.5;
  const n2 = Math.sin(a2);
  return t2[0] = n2 * s2[0], t2[1] = n2 * s2[1], t2[2] = n2 * s2[2], t2[3] = Math.cos(a2), t2;
}
function I(t2, s2) {
  const n2 = 2 * Math.acos(s2[3]), o2 = Math.sin(n2 / 2);
  return o2 > a$2 ? (t2[0] = s2[0] / o2, t2[1] = s2[1] / o2, t2[2] = s2[2] / o2) : (t2[0] = 1, t2[1] = 0, t2[2] = 0), n2;
}
function P(t2, s2, a2) {
  const n2 = s2[0], o2 = s2[1], r2 = s2[2], c2 = s2[3], e2 = a2[0], u2 = a2[1], i2 = a2[2], h = a2[3];
  return t2[0] = n2 * h + c2 * e2 + o2 * i2 - r2 * u2, t2[1] = o2 * h + c2 * u2 + r2 * e2 - n2 * i2, t2[2] = r2 * h + c2 * i2 + n2 * u2 - o2 * e2, t2[3] = c2 * h - n2 * e2 - o2 * u2 - r2 * i2, t2;
}
function b(t2, s2, a2) {
  a2 *= 0.5;
  const n2 = s2[0], o2 = s2[1], r2 = s2[2], c2 = s2[3], e2 = Math.sin(a2), u2 = Math.cos(a2);
  return t2[0] = n2 * u2 + c2 * e2, t2[1] = o2 * u2 + r2 * e2, t2[2] = r2 * u2 - o2 * e2, t2[3] = c2 * u2 - n2 * e2, t2;
}
function y(t2, s2, a2) {
  a2 *= 0.5;
  const n2 = s2[0], o2 = s2[1], r2 = s2[2], c2 = s2[3], e2 = Math.sin(a2), u2 = Math.cos(a2);
  return t2[0] = n2 * u2 - r2 * e2, t2[1] = o2 * u2 + c2 * e2, t2[2] = r2 * u2 + n2 * e2, t2[3] = c2 * u2 - o2 * e2, t2;
}
function E(t2, s2, a2) {
  a2 *= 0.5;
  const n2 = s2[0], o2 = s2[1], r2 = s2[2], c2 = s2[3], e2 = Math.sin(a2), u2 = Math.cos(a2);
  return t2[0] = n2 * u2 + o2 * e2, t2[1] = o2 * u2 - n2 * e2, t2[2] = r2 * u2 + c2 * e2, t2[3] = c2 * u2 - r2 * e2, t2;
}
function _$1(t2, s2) {
  const a2 = s2[0], n2 = s2[1], o2 = s2[2];
  return t2[0] = a2, t2[1] = n2, t2[2] = o2, t2[3] = Math.sqrt(Math.abs(1 - a2 * a2 - n2 * n2 - o2 * o2)), t2;
}
function z(t2, s2, n2, o2) {
  const r2 = s2[0], c2 = s2[1], e2 = s2[2], u2 = s2[3];
  let i2, h, M, f2, l2, m = n2[0], p = n2[1], q2 = n2[2], j2 = n2[3];
  return h = r2 * m + c2 * p + e2 * q2 + u2 * j2, h < 0 && (h = -h, m = -m, p = -p, q2 = -q2, j2 = -j2), 1 - h > a$2 ? (i2 = Math.acos(h), M = Math.sin(i2), f2 = Math.sin((1 - o2) * i2) / M, l2 = Math.sin(o2 * i2) / M) : (f2 = 1 - o2, l2 = o2), t2[0] = f2 * r2 + l2 * m, t2[1] = f2 * c2 + l2 * p, t2[2] = f2 * e2 + l2 * q2, t2[3] = f2 * u2 + l2 * j2, t2;
}
function L(t2) {
  const s2 = t$4(), a2 = t$4(), o2 = t$4(), r2 = Math.sqrt(1 - s2), c2 = Math.sqrt(s2);
  return t2[0] = r2 * Math.sin(2 * Math.PI * a2), t2[1] = r2 * Math.cos(2 * Math.PI * a2), t2[2] = c2 * Math.sin(2 * Math.PI * o2), t2[3] = c2 * Math.cos(2 * Math.PI * o2), t2;
}
function k(t2, s2) {
  const a2 = s2[0], n2 = s2[1], o2 = s2[2], r2 = s2[3], c2 = a2 * a2 + n2 * n2 + o2 * o2 + r2 * r2, e2 = c2 ? 1 / c2 : 0;
  return t2[0] = -a2 * e2, t2[1] = -n2 * e2, t2[2] = -o2 * e2, t2[3] = r2 * e2, t2;
}
function w$1(t2, s2) {
  return t2[0] = -s2[0], t2[1] = -s2[1], t2[2] = -s2[2], t2[3] = s2[3], t2;
}
function B(t2, s2) {
  const a2 = s2[0] + s2[4] + s2[8];
  let n2;
  if (a2 > 0)
    n2 = Math.sqrt(a2 + 1), t2[3] = 0.5 * n2, n2 = 0.5 / n2, t2[0] = (s2[5] - s2[7]) * n2, t2[1] = (s2[6] - s2[2]) * n2, t2[2] = (s2[1] - s2[3]) * n2;
  else {
    let a3 = 0;
    s2[4] > s2[0] && (a3 = 1), s2[8] > s2[3 * a3 + a3] && (a3 = 2);
    const o2 = (a3 + 1) % 3, r2 = (a3 + 2) % 3;
    n2 = Math.sqrt(s2[3 * a3 + a3] - s2[3 * o2 + o2] - s2[3 * r2 + r2] + 1), t2[a3] = 0.5 * n2, n2 = 0.5 / n2, t2[3] = (s2[3 * o2 + r2] - s2[3 * r2 + o2]) * n2, t2[o2] = (s2[3 * o2 + a3] + s2[3 * a3 + o2]) * n2, t2[r2] = (s2[3 * r2 + a3] + s2[3 * a3 + r2]) * n2;
  }
  return t2;
}
function C(t2, s2, a2, n2) {
  const o2 = 0.5 * Math.PI / 180;
  s2 *= o2, a2 *= o2, n2 *= o2;
  const r2 = Math.sin(s2), c2 = Math.cos(s2), e2 = Math.sin(a2), u2 = Math.cos(a2), i2 = Math.sin(n2), h = Math.cos(n2);
  return t2[0] = r2 * u2 * h - c2 * e2 * i2, t2[1] = c2 * e2 * h + r2 * u2 * i2, t2[2] = c2 * u2 * i2 - r2 * e2 * h, t2[3] = c2 * u2 * h + r2 * e2 * i2, t2;
}
function D(t2) {
  return "quat(" + t2[0] + ", " + t2[1] + ", " + t2[2] + ", " + t2[3] + ")";
}
const F = a$3, G = r$3, O = s$1, R = P, T = l$1, W = _$2, X = j, Y = x$1, Z = Y, H = q, J = H, K = g, N = D$1, Q = E$1;
function S(t2, s2, a2) {
  const n2 = z$1(s2, a2);
  return n2 < -0.999999 ? (_$3(U, V, s2), Y$1(U) < 1e-6 && _$3(U, $, s2), j$1(U, U), A(t2, U, Math.PI), t2) : n2 > 0.999999 ? (t2[0] = 0, t2[1] = 0, t2[2] = 0, t2[3] = 1, t2) : (_$3(U, s2, a2), t2[0] = U[0], t2[1] = U[1], t2[2] = U[2], t2[3] = 1 + n2, K(t2, t2));
}
const U = n$3(), V = t$3(1, 0, 0), $ = t$3(0, 1, 0);
function tt(t2, s2, a2, n2, o2, r2) {
  return z(st, s2, o2, r2), z(at, a2, n2, r2), z(t2, st, at, 2 * r2 * (1 - r2)), t2;
}
const st = e$1(), at = e$1();
function nt(t2, s2, a2, n2) {
  const o2 = ot;
  return o2[0] = a2[0], o2[3] = a2[1], o2[6] = a2[2], o2[1] = n2[0], o2[4] = n2[1], o2[7] = n2[2], o2[2] = -s2[0], o2[5] = -s2[1], o2[8] = -s2[2], K(t2, B(t2, o2));
}
const ot = e$2();
Object.freeze({ __proto__: null, identity: x, setAxisAngle: A, getAxisAngle: I, multiply: P, rotateX: b, rotateY: y, rotateZ: E, calculateW: _$1, slerp: z, random: L, invert: k, conjugate: w$1, fromMat3: B, fromEuler: C, str: D, copy: F, set: G, add: O, mul: R, scale: T, dot: W, lerp: X, length: Y, len: Z, squaredLength: H, sqrLen: J, normalize: K, exactEquals: N, equals: Q, rotationTo: S, sqlerp: tt, setAxes: nt });
function n() {
  return new Float32Array(3);
}
function r(n2) {
  const r2 = new Float32Array(3);
  return r2[0] = n2[0], r2[1] = n2[1], r2[2] = n2[2], r2;
}
function t(n2, r2, t2) {
  const a2 = new Float32Array(3);
  return a2[0] = n2, a2[1] = r2, a2[2] = t2, a2;
}
function a(n2, r2) {
  return new Float32Array(n2, r2, 3);
}
function e() {
  return n();
}
function o() {
  return t(1, 1, 1);
}
function u() {
  return t(1, 0, 0);
}
function s() {
  return t(0, 1, 0);
}
function c() {
  return t(0, 0, 1);
}
const i = e(), f = o(), l = u(), _ = s(), w = c();
Object.freeze({ __proto__: null, create: n, clone: r, fromValues: t, createView: a, zeros: e, ones: o, unitX: u, unitY: s, unitZ: c, ZEROS: i, ONES: f, UNIT_X: l, UNIT_Y: _, UNIT_Z: w });
export { I, t$2 as a, t$1 as b, e$1 as c, e$2 as e, n, t, w$1 as w };
