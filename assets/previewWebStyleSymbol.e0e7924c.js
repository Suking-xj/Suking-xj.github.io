import { aj as U, a9 as u } from "./vendor.74d5941c.js";
function i(t, i2, h) {
  const s = t.thumbnail && t.thumbnail.url;
  return s ? U(s, { responseType: "image" }).then((t2) => {
    const e = n(t2.data, h);
    return h && h.node ? (h.node.appendChild(e), h.node) : e;
  }) : t.fetchSymbol().then((t2) => i2(t2, h));
}
function n(e, i2) {
  const n2 = !/\\.svg$/i.test(e.src) && i2 && i2.disableUpsampling, h = Math.max(e.width, e.height);
  let s = i2 && i2.maxSize != null ? u(i2.maxSize) : 120;
  n2 && (s = Math.min(h, s));
  const o = Math.min(s, i2 && i2.size != null ? u(i2.size) : h);
  if (o !== h) {
    const t = e.width !== 0 && e.height !== 0 ? e.width / e.height : 1;
    t >= 1 ? (e.width = o, e.height = o / t) : (e.width = o * t, e.height = o);
  }
  return e;
}
export { i as previewWebStyleSymbol };
