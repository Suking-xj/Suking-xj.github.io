function t(t2, e2) {
  return e2 ? "xoffset" in e2 && e2.xoffset ? Math.max(t2, Math.abs(e2.xoffset)) : "yoffset" in e2 && e2.yoffset ? Math.max(t2, Math.abs(e2.yoffset || 0)) : t2 : t2;
}
function e(t2) {
  let e2 = 0, n2 = 0;
  for (let r2 = 0; r2 < t2.length; r2++) {
    const s2 = t2[r2].size;
    typeof s2 == "number" && (e2 += s2, n2++);
  }
  return e2 / n2;
}
function n(t2, n2) {
  return typeof t2 == "number" ? t2 : t2 && t2.stops && t2.stops.length ? e(t2.stops) : n2;
}
function r(t2, e2) {
  if (!e2)
    return t2;
  const r2 = e2.filter((t3) => t3.type === "size").map((e3) => {
    const { maxSize: r3, minSize: s3 } = e3;
    return (n(r3, t2) + n(s3, t2)) / 2;
  });
  let s2 = 0;
  const o = r2.length;
  if (o === 0)
    return t2;
  for (let n2 = 0; n2 < o; n2++)
    s2 += r2[n2];
  const f = Math.floor(s2 / o);
  return Math.max(f, t2);
}
function s(e2) {
  const n2 = e2 && e2.renderer, s2 = (e2 && e2.event && e2.event.pointerType) === "touch" ? 9 : 6;
  if (!n2)
    return s2;
  const o = "visualVariables" in n2 ? r(s2, n2.visualVariables) : s2;
  if (n2.type === "simple")
    return t(o, n2.symbol);
  if (n2.type === "unique-value") {
    let e3 = o;
    return n2.uniqueValueInfos.forEach((n3) => {
      e3 = t(e3, n3.symbol);
    }), e3;
  }
  if (n2.type === "class-breaks") {
    let e3 = o;
    return n2.classBreakInfos.forEach((n3) => {
      e3 = t(e3, n3.symbol);
    }), e3;
  }
  return n2.type, o;
}
export { s };
