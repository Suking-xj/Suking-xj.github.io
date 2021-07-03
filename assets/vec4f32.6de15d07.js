function n() {
  return new Float32Array(4);
}
function r(n2) {
  const r2 = new Float32Array(4);
  return r2[0] = n2[0], r2[1] = n2[1], r2[2] = n2[2], r2[3] = n2[3], r2;
}
function t(n2, r2, t2, a2) {
  const e2 = new Float32Array(4);
  return e2[0] = n2, e2[1] = r2, e2[2] = t2, e2[3] = a2, e2;
}
function a(n2, r2) {
  return new Float32Array(n2, r2, 4);
}
function e() {
  return n();
}
function u() {
  return t(1, 1, 1, 1);
}
function o() {
  return t(1, 0, 0, 0);
}
function s() {
  return t(0, 1, 0, 0);
}
function c() {
  return t(0, 0, 1, 0);
}
function i() {
  return t(0, 0, 0, 1);
}
const f = e(), l = u(), _ = o(), w = s(), N = c(), U = i();
Object.freeze({ __proto__: null, create: n, clone: r, fromValues: t, createView: a, zeros: e, ones: u, unitX: o, unitY: s, unitZ: c, unitW: i, ZEROS: f, ONES: l, UNIT_X: _, UNIT_Y: w, UNIT_Z: N, UNIT_W: U });
export { n, t };
