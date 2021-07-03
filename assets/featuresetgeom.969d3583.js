import { fg as x, em as c, fh as L } from "./vendor.74d5941c.js";
import { G as se, l as k, ak as s, J, K } from "./arcadeUtils.f4f7c393.js";
import { w, A, x as x$1, O, p, g as g$2, h as h$1 } from "./geometryEngineAsync.6e91af62.js";
import { g as g$1, c as n } from "./SpatialFilter.3aceea46.js";
import "./number.c0719e5d.js";
import "./FeatureSetReader.a91e3e2d.js";
import "./centroid.93c1b848.js";
import "./WhereClause.f27c6004.js";
import "./_commonjsHelpers.f2a458db.js";
function S(e) {
  return e instanceof c;
}
function h(i, s$1, d, h2, g2) {
  return g2(i, s$1, function(i2, s$12, g3) {
    if (g3.length < 2)
      return h2(new Error("Missing Parameters"));
    if ((g3 = se(g3))[0] === null && g3[1] === null)
      return x(false);
    if (k(g3[0]))
      return g3[1] instanceof c ? x(new g$1({ parentfeatureset: g3[0], relation: d, relationGeom: g3[1] })) : g3[1] === null ? x(new n({ parentfeatureset: g3[0] })) : h2("Spatial Relation cannot accept this parameter type");
    if (S(g3[0])) {
      if (S(g3[1])) {
        let e = null;
        switch (d) {
          case "esriSpatialRelEnvelopeIntersects":
            e = g$2(s(g3[0]), s(g3[1]));
            break;
          case "esriSpatialRelIntersects":
            e = g$2(g3[0], g3[1]);
            break;
          case "esriSpatialRelContains":
            e = p(g3[0], g3[1]);
            break;
          case "esriSpatialRelOverlaps":
            e = O(g3[0], g3[1]);
            break;
          case "esriSpatialRelWithin":
            e = x$1(g3[0], g3[1]);
            break;
          case "esriSpatialRelTouches":
            e = A(g3[0], g3[1]);
            break;
          case "esriSpatialRelCrosses":
            e = w(g3[0], g3[1]);
        }
        return e !== null ? e : L(new Error("Unrecognised Relationship"));
      }
      return k(g3[1]) ? x(new g$1({ parentfeatureset: g3[1], relation: d, relationGeom: g3[0] })) : g3[1] === null ? x(false) : h2("Spatial Relation cannot accept this parameter type");
    }
    return g3[0] !== null ? h2("Spatial Relation cannot accept this parameter type") : k(g3[1]) ? x(new n({ parentfeatureset: g3[1] })) : g3[1] instanceof c || g3[1] === null ? x(false) : void 0;
  });
}
function g(e) {
  e.mode === "async" && (e.functions.intersects = function(n2, t) {
    return h(n2, t, "esriSpatialRelIntersects", e.failDefferred, e.standardFunctionAsync);
  }, e.functions.envelopeintersects = function(n2, t) {
    return h(n2, t, "esriSpatialRelEnvelopeIntersects", e.failDefferred, e.standardFunctionAsync);
  }, e.signatures.push({ name: "envelopeintersects", min: "2", max: "2" }), e.functions.contains = function(n2, t) {
    return h(n2, t, "esriSpatialRelContains", e.failDefferred, e.standardFunctionAsync);
  }, e.functions.overlaps = function(n2, t) {
    return h(n2, t, "esriSpatialRelOverlaps", e.failDefferred, e.standardFunctionAsync);
  }, e.functions.within = function(n2, t) {
    return h(n2, t, "esriSpatialRelWithin", e.failDefferred, e.standardFunctionAsync);
  }, e.functions.touches = function(n2, t) {
    return h(n2, t, "esriSpatialRelTouches", e.failDefferred, e.standardFunctionAsync);
  }, e.functions.crosses = function(n2, t) {
    return h(n2, t, "esriSpatialRelCrosses", e.failDefferred, e.standardFunctionAsync);
  }, e.functions.relate = function(n$1, l) {
    return e.standardFunctionAsync(n$1, l, function(e2, n$12, l2) {
      if (l2 = se(l2), J(l2, 3, 3), S(l2[0]) && S(l2[1]))
        return h$1(l2[0], l2[1], K(l2[2]));
      if (l2[0] instanceof c && l2[1] === null)
        return false;
      if (l2[1] instanceof c && l2[0] === null)
        return false;
      if (k(l2[0]) && l2[1] === null)
        return new n({ parentfeatureset: l2[0] });
      if (k(l2[1]) && l2[0] === null)
        return new n({ parentfeatureset: l2[1] });
      if (k(l2[0]) && l2[1] instanceof c)
        return l2[0].relate(l2[1], K(l2[2]));
      if (k(l2[1]) && l2[0] instanceof c)
        return l2[1].relate(l2[0], K(l2[2]));
      if (l2[0] === null && l2[1] === null)
        return false;
      throw new Error("Illegal Argument");
    });
  });
}
export { g as registerFunctions };
