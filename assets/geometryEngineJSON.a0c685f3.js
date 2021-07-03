import { a as i$1 } from "./geometryEngineBase.80eb2415.js";
import { t as t$1 } from "./json.7989af9b.js";
function r(n) {
  return i$1.extendedSpatialReferenceInfo(n);
}
function t(r2, t2, i2) {
  return i$1.clip(t$1, r2, t2, i2);
}
function i(r2, t2, i2) {
  return i$1.cut(t$1, r2, t2, i2);
}
function s(r2, t2, i2) {
  return i$1.contains(t$1, r2, t2, i2);
}
function u(r2, t2, i2) {
  return i$1.crosses(t$1, r2, t2, i2);
}
function o(r2, t2, i2, s2) {
  return i$1.distance(t$1, r2, t2, i2, s2);
}
function a(r2, t2, i2) {
  return i$1.equals(t$1, r2, t2, i2);
}
function c(r2, t2, i2) {
  return i$1.intersects(t$1, r2, t2, i2);
}
function f(r2, t2, i2) {
  return i$1.touches(t$1, r2, t2, i2);
}
function l(r2, t2, i2) {
  return i$1.within(t$1, r2, t2, i2);
}
function p(r2, t2, i2) {
  return i$1.disjoint(t$1, r2, t2, i2);
}
function g(r2, t2, i2) {
  return i$1.overlaps(t$1, r2, t2, i2);
}
function d(r2, t2, i2, s2) {
  return i$1.relate(t$1, r2, t2, i2, s2);
}
function m(r2, t2) {
  return i$1.isSimple(t$1, r2, t2);
}
function h(r2, t2) {
  return i$1.simplify(t$1, r2, t2);
}
function y(r2, t2, i2 = false) {
  return i$1.convexHull(t$1, r2, t2, i2);
}
function x(r2, t2, i2) {
  return i$1.difference(t$1, r2, t2, i2);
}
function w(r2, t2, i2) {
  return i$1.symmetricDifference(t$1, r2, t2, i2);
}
function A(r2, t2, i2) {
  return i$1.intersect(t$1, r2, t2, i2);
}
function E(r2, t2, i2 = null) {
  return i$1.union(t$1, r2, t2, i2);
}
function j(r2, t2, i2, s2, u2, o2, a2) {
  return i$1.offset(t$1, r2, t2, i2, s2, u2, o2, a2);
}
function v(r2, t2, i2, s2, u2 = false) {
  return i$1.buffer(t$1, r2, t2, i2, s2, u2);
}
function z(r2, t2, i2, s2, u2, o2, a2) {
  return i$1.geodesicBuffer(t$1, r2, t2, i2, s2, u2, o2, a2);
}
function I(r2, t2, i2, s2 = true) {
  return i$1.nearestCoordinate(t$1, r2, t2, i2, s2);
}
function V(r2, t2, i2) {
  return i$1.nearestVertex(t$1, r2, t2, i2);
}
function D(r2, t2, i2, s2, u2) {
  return i$1.nearestVertices(t$1, r2, t2, i2, s2, u2);
}
function H(n, r2, t2, i2) {
  if (r2 == null || i2 == null)
    throw new Error("Illegal Argument Exception");
  const s2 = i$1.rotate(r2, t2, i2);
  return s2.spatialReference = n, s2;
}
function R(n, r2, t2) {
  if (r2 == null || t2 == null)
    throw new Error("Illegal Argument Exception");
  const i2 = i$1.flipHorizontal(r2, t2);
  return i2.spatialReference = n, i2;
}
function b(n, r2, t2) {
  if (r2 == null || t2 == null)
    throw new Error("Illegal Argument Exception");
  const i2 = i$1.flipVertical(r2, t2);
  return i2.spatialReference = n, i2;
}
function B(r2, t2, i2, s2, u2) {
  return i$1.generalize(t$1, r2, t2, i2, s2, u2);
}
function L(r2, t2, i2, s2) {
  return i$1.densify(t$1, r2, t2, i2, s2);
}
function S(r2, t2, i2, s2, u2 = 0) {
  return i$1.geodesicDensify(t$1, r2, t2, i2, s2, u2);
}
function _(r2, t2, i2) {
  return i$1.planarArea(t$1, r2, t2, i2);
}
function q(r2, t2, i2) {
  return i$1.planarLength(t$1, r2, t2, i2);
}
function C(r2, t2, i2, s2) {
  return i$1.geodesicArea(t$1, r2, t2, i2, s2);
}
function k(r2, t2, i2, s2) {
  return i$1.geodesicLength(t$1, r2, t2, i2, s2);
}
var F = Object.freeze({ __proto__: null, extendedSpatialReferenceInfo: r, clip: t, cut: i, contains: s, crosses: u, distance: o, equals: a, intersects: c, touches: f, within: l, disjoint: p, overlaps: g, relate: d, isSimple: m, simplify: h, convexHull: y, difference: x, symmetricDifference: w, intersect: A, union: E, offset: j, buffer: v, geodesicBuffer: z, nearestCoordinate: I, nearestVertex: V, nearestVertices: D, rotate: H, flipHorizontal: R, flipVertical: b, generalize: B, densify: L, geodesicDensify: S, planarArea: _, planarLength: q, geodesicArea: C, geodesicLength: k });
export { A, B, C, D, E, F, H, I, L, R, S, V, _, a, b, c, d, f, g, h, i, j, k, l, m, o, p, q, r, s, t, u, v, w, x, y, z };
