import { _ as j, bG as x$1, dp as m$1, dn as m$2, cr as M } from "./vendor.74d5941c.js";
const r = { convertToGEGeometry: s, exportPoint: a, exportPolygon: c, exportPolyline: h, exportMultipoint: m, exportExtent: x };
function s(e, n) {
  if (n == null)
    return null;
  let t = "cache" in n ? n.cache._geVersion : void 0;
  return t == null && (t = e.convertJSONToGeometry(n), "cache" in n && (n.cache._geVersion = t)), t;
}
function a(n, t, o) {
  const i = n.hasZ(t), r2 = n.hasM(t), s2 = new j({ x: n.getPointX(t), y: n.getPointY(t), spatialReference: o });
  return i && (s2.z = n.getPointZ(t)), r2 && (s2.m = n.getPointM(t)), s2.cache._geVersion = t, s2;
}
function c(e, n, t) {
  const i = new x$1({ rings: e.exportPaths(n), hasZ: e.hasZ(n), hasM: e.hasM(n), spatialReference: t });
  return i.cache._geVersion = n, i;
}
function h(e, n, t) {
  const o = new m$1({ paths: e.exportPaths(n), hasZ: e.hasZ(n), hasM: e.hasM(n), spatialReference: t });
  return o.cache._geVersion = n, o;
}
function m(e, n, o) {
  const i = new m$2({ hasZ: e.hasZ(n), hasM: e.hasM(n), points: e.exportPoints(n), spatialReference: o });
  return i.cache._geVersion = n, i;
}
function x(e, t, o) {
  const i = e.hasZ(t), r2 = e.hasM(t), s2 = new M({ xmin: e.getXMin(t), ymin: e.getYMin(t), xmax: e.getXMax(t), ymax: e.getYMax(t), spatialReference: o });
  if (i) {
    const n = e.getZExtent(t);
    s2.zmin = n.vmin, s2.zmax = n.vmax;
  }
  if (r2) {
    const n = e.getMExtent(t);
    s2.mmin = n.vmin, s2.mmax = n.vmax;
  }
  return s2.cache._geVersion = t, s2;
}
export { r as hydratedAdapter };
