function n(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function o(e, n2, o2) {
  return e(o2 = { path: n2, exports: {}, require: function(e2, n3) {
    return r(e2, n3 == null ? o2.path : n3);
  } }, o2.exports), o2.exports;
}
function r() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
export { n, o, r };
