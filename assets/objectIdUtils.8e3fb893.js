const t = 1;
function n(t2, n2) {
  let o = 0;
  for (const r of n2) {
    var e;
    const n3 = (e = r.attributes) == null ? void 0 : e[t2];
    typeof n3 == "number" && isFinite(n3) && (o = Math.max(o, n3));
  }
  return o;
}
export { n, t };
