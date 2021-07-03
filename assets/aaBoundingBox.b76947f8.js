import { a0 as t } from "./vendor.74d5941c.js";
function i(n) {
  return n;
}
function a(n = H) {
  return i([n[0], n[1], n[2], n[3], n[4], n[5]]);
}
function u(n, t2, r, i2, u2, e, m = a()) {
  return m[0] = n, m[1] = t2, m[2] = r, m[3] = i2, m[4] = u2, m[5] = e, m;
}
function f(n, t2) {
  n[0] = Math.min(n[0], t2[0]), n[1] = Math.min(n[1], t2[1]), n[2] = Math.min(n[2], t2[2]), n[3] = Math.max(n[3], t2[3]), n[4] = Math.max(n[4], t2[4]), n[5] = Math.max(n[5], t2[5]);
}
function h(n, t2) {
  n[0] = Math.min(n[0], t2[0]), n[1] = Math.min(n[1], t2[1]), n[2] = Math.min(n[2], t2[2]), n[3] = Math.max(n[3], t2[0]), n[4] = Math.max(n[4], t2[1]), n[5] = Math.max(n[5], t2[2]);
}
function I(n) {
  return n[0] >= n[3] ? 0 : n[3] - n[0];
}
function y(n) {
  return n[1] >= n[4] ? 0 : n[4] - n[1];
}
function N(n) {
  return n[2] >= n[5] ? 0 : n[5] - n[2];
}
function F(n, t2 = [0, 0, 0]) {
  return t2[0] = I(n), t2[1] = y(n), t2[2] = N(n), t2;
}
function q(n, t2, r = n) {
  return r[0] = t2[0], r[1] = t2[1], r[2] = t2[2], r !== n && (r[3] = n[3], r[4] = n[4], r[5] = n[5]), r;
}
function w(n, t2, r = n) {
  return r[3] = t2[0], r[4] = t2[1], r[5] = t2[2], r !== n && (r[0] = n[0], r[1] = n[1], r[2] = n[2]), n;
}
function A(n, t2) {
  return n[0] = t2[0], n[1] = t2[1], n[2] = t2[2], n[3] = t2[3], n[4] = t2[4], n[5] = t2[5], n;
}
function B(n) {
  return n ? A(n, D) : a(D);
}
function O(n, t2) {
  return n[0] = t2[0], n[1] = t2[1], n[2] = Number.NEGATIVE_INFINITY, n[3] = t2[2], n[4] = t2[3], n[5] = Number.POSITIVE_INFINITY, n;
}
function P(n) {
  return n.length === 6;
}
function k(t$1, r, i2) {
  if (t(t$1) || t(r))
    return t$1 === r;
  if (!P(t$1) || !P(r))
    return false;
  if (i2) {
    for (let n = 0; n < t$1.length; n++)
      if (!i2(t$1[n], r[n]))
        return false;
  } else
    for (let n = 0; n < t$1.length; n++)
      if (t$1[n] !== r[n])
        return false;
  return true;
}
const D = i([1 / 0, 1 / 0, 1 / 0, -1 / 0, -1 / 0, -1 / 0]), H = i([0, 0, 0, 0, 0, 0]);
a();
export { A, B, D, F, O, a, f, h, k, q, u, w };
