import { a as i$1 } from "./geometryEngineBase.80eb2415.js";
import { hydratedAdapter as r$1 } from "./hydrated.6b35c055.js";
import "./_commonjsHelpers.f2a458db.js";
import "./vendor.74d5941c.js";
function r(n) {
  return Array.isArray(n) ? n[0].spatialReference : n && n.spatialReference;
}
function t(e) {
  return i$1.extendedSpatialReferenceInfo(e);
}
function u(t2, u2) {
  return i$1.clip(r$1, r(t2), t2, u2);
}
function i(t2, u2) {
  return i$1.cut(r$1, r(t2), t2, u2);
}
function o(t2, u2) {
  return i$1.contains(r$1, r(t2), t2, u2);
}
function c(t2, u2) {
  return i$1.crosses(r$1, r(t2), t2, u2);
}
function f(t2, u2, i2) {
  return i$1.distance(r$1, r(t2), t2, u2, i2);
}
function l(t2, u2) {
  return i$1.equals(r$1, r(t2), t2, u2);
}
function a(t2, u2) {
  return i$1.intersects(r$1, r(t2), t2, u2);
}
function s(t2, u2) {
  return i$1.touches(r$1, r(t2), t2, u2);
}
function p(t2, u2) {
  return i$1.within(r$1, r(t2), t2, u2);
}
function g(t2, u2) {
  return i$1.disjoint(r$1, r(t2), t2, u2);
}
function m(t2, u2) {
  return i$1.overlaps(r$1, r(t2), t2, u2);
}
function d(t2, u2, i2) {
  return i$1.relate(r$1, r(t2), t2, u2, i2);
}
function x(t2) {
  return i$1.isSimple(r$1, r(t2), t2);
}
function w(t2) {
  return i$1.simplify(r$1, r(t2), t2);
}
function E(t2, u2 = false) {
  return i$1.convexHull(r$1, r(t2), t2, u2);
}
function h(t2, u2) {
  return i$1.difference(r$1, r(t2), t2, u2);
}
function A(t2, u2) {
  return i$1.symmetricDifference(r$1, r(t2), t2, u2);
}
function y(t2, u2) {
  return i$1.intersect(r$1, r(t2), t2, u2);
}
function R(t2, u2 = null) {
  return i$1.union(r$1, r(t2), t2, u2);
}
function I(t2, u2, i2, o2, c2, f2) {
  return i$1.offset(r$1, r(t2), t2, u2, i2, o2, c2, f2);
}
function v(t2, u2, i2, o2 = false) {
  return i$1.buffer(r$1, r(t2), t2, u2, i2, o2);
}
function S(t2, u2, i2, o2, c2, f2) {
  return i$1.geodesicBuffer(r$1, r(t2), t2, u2, i2, o2, c2, f2);
}
function j(t2, u2, i2 = true) {
  return i$1.nearestCoordinate(r$1, r(t2), t2, u2, i2);
}
function J(t2, u2) {
  return i$1.nearestVertex(r$1, r(t2), t2, u2);
}
function N(t2, u2, i2, o2) {
  return i$1.nearestVertices(r$1, r(t2), t2, u2, i2, o2);
}
function O(n) {
  return "xmin" in n ? "center" in n ? n.center : null : "x" in n ? n : "extent" in n ? n.extent.center : null;
}
function V(e, r2, t2) {
  var u2;
  if (e == null)
    throw new Error("Illegal Argument Exception");
  const i2 = e.spatialReference;
  if ((t2 = (u2 = t2) != null ? u2 : O(e)) == null)
    throw new Error("Illegal Argument Exception");
  const o2 = e.constructor.fromJSON(i$1.rotate(e, r2, t2));
  return o2.spatialReference = i2, o2;
}
function z(e, r2) {
  var t2;
  if (e == null)
    throw new Error("Illegal Argument Exception");
  const u2 = e.spatialReference;
  if ((r2 = (t2 = r2) != null ? t2 : O(e)) == null)
    throw new Error("Illegal Argument Exception");
  const i2 = e.constructor.fromJSON(i$1.flipHorizontal(e, r2));
  return i2.spatialReference = u2, i2;
}
function B(e, r2) {
  var t2;
  if (e == null)
    throw new Error("Illegal Argument Exception");
  const u2 = e.spatialReference;
  if ((r2 = (t2 = r2) != null ? t2 : O(e)) == null)
    throw new Error("Illegal Argument Exception");
  const i2 = e.constructor.fromJSON(i$1.flipVertical(e, r2));
  return i2.spatialReference = u2, i2;
}
function D(t2, u2, i2, o2) {
  return i$1.generalize(r$1, r(t2), t2, u2, i2, o2);
}
function H(t2, u2, i2) {
  return i$1.densify(r$1, r(t2), t2, u2, i2);
}
function L(t2, u2, i2, o2 = 0) {
  return i$1.geodesicDensify(r$1, r(t2), t2, u2, i2, o2);
}
function b(t2, u2) {
  return i$1.planarArea(r$1, r(t2), t2, u2);
}
function k(t2, u2) {
  return i$1.planarLength(r$1, r(t2), t2, u2);
}
function q(t2, u2, i2) {
  return i$1.geodesicArea(r$1, r(t2), t2, u2, i2);
}
function C(t2, u2, i2) {
  return i$1.geodesicLength(r$1, r(t2), t2, u2, i2);
}
export { v as buffer, u as clip, o as contains, E as convexHull, c as crosses, i as cut, H as densify, h as difference, g as disjoint, f as distance, l as equals, t as extendedSpatialReferenceInfo, z as flipHorizontal, B as flipVertical, D as generalize, q as geodesicArea, S as geodesicBuffer, L as geodesicDensify, C as geodesicLength, y as intersect, a as intersects, x as isSimple, j as nearestCoordinate, J as nearestVertex, N as nearestVertices, I as offset, m as overlaps, b as planarArea, k as planarLength, d as relate, V as rotate, w as simplify, A as symmetricDifference, s as touches, R as union, p as within };
