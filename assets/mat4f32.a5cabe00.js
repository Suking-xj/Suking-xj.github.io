function r() {
  const r2 = new Float32Array(16);
  return r2[0] = 1, r2[5] = 1, r2[10] = 1, r2[15] = 1, r2;
}
function n(r2) {
  const n2 = new Float32Array(16);
  return n2[0] = r2[0], n2[1] = r2[1], n2[2] = r2[2], n2[3] = r2[3], n2[4] = r2[4], n2[5] = r2[5], n2[6] = r2[6], n2[7] = r2[7], n2[8] = r2[8], n2[9] = r2[9], n2[10] = r2[10], n2[11] = r2[11], n2[12] = r2[12], n2[13] = r2[13], n2[14] = r2[14], n2[15] = r2[15], n2;
}
function t(r2, n2, t2, e2, a2, o, c, s, u, l, f, i, w, y, A, F) {
  const _ = new Float32Array(16);
  return _[0] = r2, _[1] = n2, _[2] = t2, _[3] = e2, _[4] = a2, _[5] = o, _[6] = c, _[7] = s, _[8] = u, _[9] = l, _[10] = f, _[11] = i, _[12] = w, _[13] = y, _[14] = A, _[15] = F, _;
}
function e(r2, n2) {
  return new Float32Array(r2, n2, 16);
}
const a = r();
Object.freeze({ __proto__: null, create: r, clone: n, fromValues: t, createView: e, IDENTITY: a });
export { r };
