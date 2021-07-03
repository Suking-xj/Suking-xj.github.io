import { cr as M, a5 as r, cT as G } from "./vendor.74d5941c.js";
function a(t, i, a2, o = new M()) {
  let s;
  if (a2.type === "2d")
    s = i * a2.resolution;
  else if (a2.type === "3d") {
    const r$1 = a2.overlayPixelSizeInMapUnits(t), o2 = a2.basemapSpatialReference;
    s = r(o2) && !o2.equals(a2.spatialReference) ? G(o2) / G(a2.spatialReference) : i * r$1;
  }
  const m = t.x - s, p = t.y - s, c = t.x + s, l = t.y + s, { spatialReference: f } = a2;
  return o.xmin = Math.min(m, c), o.ymin = Math.min(p, l), o.xmax = Math.max(m, c), o.ymax = Math.max(p, l), o.spatialReference = f, o;
}
new M();
export { a };
