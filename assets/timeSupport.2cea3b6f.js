var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var step = (x2) => x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import { c9 as t$2, fw as l$1, d0 as L, cW as p$1, a0 as t$3, fx as L$1, fy as R$1, co as u$1, fn as I$1, br as t$4, bo as le, bp as ce, fz as ge, fA as w$1, bq as A, fB as $, fC as V, bc as y$1, cI as C, bb as u$2, dh as t$5, fD as r$1, fE as G$2, aa as s, bs as s$1, bi as d } from "./vendor.74d5941c.js";
import { p, y } from "./projectionSupport.62084d5a.js";
const w = new t$2({ esriSRUnit_Meter: "meters", esriSRUnit_Kilometer: "kilometers", esriSRUnit_Foot: "feet", esriSRUnit_StatuteMile: "miles", esriSRUnit_NauticalMile: "nautical-miles", esriSRUnit_USNauticalMile: "us-nautical-miles" }), j$1 = Object.freeze({}), U = new t$4(), M = new t$4(), F = new t$4(), G$1 = { esriGeometryPoint: w$1, esriGeometryPolyline: A, esriGeometryPolygon: $, esriGeometryMultipoint: V };
function N(e2, t2, r2, i = e2.hasZ, o2 = e2.hasM) {
  const n2 = e2.hasZ && i, s2 = e2.hasM && o2;
  if (r2) {
    const a = ce(F, t2, e2.hasZ, e2.hasM, "esriGeometryPoint", r2, i, o2);
    return w$1(a, n2, s2);
  }
  return w$1(t2, n2, s2);
}
function _(e2, t2, r2, i, o2, n2, s2 = t2, a = r2) {
  const l2 = t2 && s2, m = r2 && a, u2 = i ? "coords" in i ? i : i.geometry : null;
  if (!u2)
    return null;
  if (o2) {
    let i2 = le(M, u2, t2, r2, e2, o2, s2, a);
    return n2 && (i2 = ce(F, i2, l2, m, e2, n2)), G$1[e2](i2, l2, m);
  }
  if (n2) {
    const i2 = ce(F, u2, t2, r2, e2, n2, s2, a);
    return G$1[e2](i2, l2, m);
  }
  return ge(U, u2, t2, r2, s2, a), G$1[e2](U, l2, m);
}
function J(e2, t2, r2) {
  return __async(this, null, function* () {
    const { outFields: i, orderByFields: o2, groupByFieldsForStatistics: n2, outStatistics: s2 } = e2;
    if (i)
      for (let a = 0; a < i.length; a++)
        i[a] = i[a].trim();
    if (o2)
      for (let a = 0; a < o2.length; a++)
        o2[a] = o2[a].trim();
    if (n2)
      for (let a = 0; a < n2.length; a++)
        n2[a] = n2[a].trim();
    if (s2)
      for (let a = 0; a < s2.length; a++)
        s2[a].onStatisticField && (s2[a].onStatisticField = s2[a].onStatisticField.trim());
    return e2.geometry && !e2.outSR && (e2.outSR = e2.geometry.spatialReference), v$1(e2, t2, r2);
  });
}
function v$1(t2, r2, i) {
  return __async(this, null, function* () {
    if (!t2)
      return null;
    let { where: o2 } = t2;
    if (t2.where = o2 = o2 && o2.trim(), (!o2 || /^1 *= *1$/.test(o2) || r2 && r2 === o2) && (t2.where = null), !t2.geometry)
      return t2;
    let a = yield Z(t2);
    if (t2.distance = 0, t2.units = null, t2.spatialRel === "esriSpatialRelEnvelopeIntersects") {
      const { spatialReference: e2 } = t2.geometry;
      a = l$1(a), a.spatialReference = e2;
    }
    t2.geometry = a, yield p(a.spatialReference, i);
    const m = (yield L(p$1(a)))[0];
    if (t$3(m))
      throw j$1;
    const c2 = m.toJSON(), u2 = yield y(c2, c2.spatialReference, i);
    if (!u2)
      throw j$1;
    return u2.spatialReference = i, t2.geometry = u2, t2;
  });
}
function Z(e2) {
  return __async(this, null, function* () {
    const { geometry: t2, distance: n2, units: s2 } = e2;
    if (n2 == null || "vertexAttributes" in t2)
      return t2;
    const l2 = t2.spatialReference, m = s2 ? w.fromJSON(s2) : L$1(l2), c2 = l2 && (R$1(l2) || u$1(l2)) ? t2 : yield p(l2, I$1).then(() => y(t2, I$1));
    return (yield b())(c2.spatialReference, c2, n2, m);
  });
}
function b() {
  return __async(this, null, function* () {
    return (yield import("./geometryEngineJSON.100cb9da.js")).geodesicBuffer;
  });
}
function x(e2) {
  return e2 && z in e2 ? JSON.parse(JSON.stringify(e2, B)) : e2;
}
const z = "_geVersion", B = (e2, t2) => e2 !== z ? t2 : void 0;
function n$1(n2, t2) {
  return n2 ? t2 ? 4 : 3 : t2 ? 3 : 2;
}
function t$1(n2, t2, r2, e2) {
  return o(n2, t2, r2, e2.coords[0], e2.coords[1]);
}
function r(t2, r2, e2, c2, u2, f) {
  const s2 = n$1(u2, f), { coords: i, lengths: l2 } = c2;
  if (!l2)
    return false;
  for (let n2 = 0, d2 = 0; n2 < l2.length; n2++, d2 += s2)
    if (!o(t2, r2, e2, i[d2], i[d2 + 1]))
      return false;
  return true;
}
function o(t2, r2, o2, c2, u2) {
  if (!t2)
    return false;
  const f = n$1(r2, o2), { coords: s2, lengths: i } = t2;
  let l2 = false, d2 = 0;
  for (const n2 of i)
    l2 = e$1(l2, s2, f, d2, n2, c2, u2), d2 += n2 * f;
  return l2;
}
function e$1(n2, t2, r2, o2, e2, c2, u2) {
  let f = n2, s2 = o2;
  for (let i = o2, l2 = o2 + e2 * r2; i < l2; i += r2) {
    s2 = i + r2, s2 === l2 && (s2 = o2);
    const n3 = t2[i], e3 = t2[i + 1], d2 = t2[s2], g2 = t2[s2 + 1];
    (e3 < u2 && g2 >= u2 || g2 < u2 && e3 >= u2) && n3 + (u2 - e3) / (g2 - e3) * (d2 - n3) < c2 && (f = !f);
  }
  return f;
}
const c = "feature-store:unsupported-query", R = { esriSpatialRelIntersects: "intersects", esriSpatialRelContains: "contains", esriSpatialRelCrosses: "crosses", esriSpatialRelDisjoint: "disjoint", esriSpatialRelEnvelopeIntersects: "intersects", esriSpatialRelIndexIntersects: null, esriSpatialRelOverlaps: "overlaps", esriSpatialRelTouches: "touches", esriSpatialRelWithin: "within", esriSpatialRelRelation: null }, S = { spatialRelationship: { esriSpatialRelIntersects: true, esriSpatialRelContains: true, esriSpatialRelWithin: true, esriSpatialRelCrosses: true, esriSpatialRelDisjoint: true, esriSpatialRelTouches: true, esriSpatialRelOverlaps: true, esriSpatialRelEnvelopeIntersects: true, esriSpatialRelIndexIntersects: false, esriSpatialRelRelation: false }, queryGeometry: { esriGeometryPoint: true, esriGeometryMultipoint: true, esriGeometryPolyline: true, esriGeometryPolygon: true, esriGeometryEnvelope: true }, layerGeometry: { esriGeometryPoint: true, esriGeometryMultipoint: true, esriGeometryPolyline: true, esriGeometryPolygon: true, esriGeometryEnvelope: false } };
function G(e2) {
  return S.spatialRelationship[e2] === true;
}
function g(e2) {
  return S.queryGeometry[d(e2)] === true;
}
function j(e2) {
  return S.layerGeometry[e2] === true;
}
function h() {
  return import("./geometryEngineJSON.100cb9da.js");
}
function v(e2, r$2, l2, y2, c2) {
  if (y$1(r$2) && l2 === "esriGeometryPoint" && (e2 === "esriSpatialRelIntersects" || e2 === "esriSpatialRelContains")) {
    const e3 = C(new t$4(), r$2, false, false);
    return Promise.resolve((r2) => t$1(e3, false, false, r2));
  }
  if (y$1(r$2) && l2 === "esriGeometryMultipoint") {
    const t2 = C(new t$4(), r$2, false, false);
    if (e2 === "esriSpatialRelContains")
      return Promise.resolve((e3) => r(t2, false, false, e3, y2, c2));
  }
  if (u$2(r$2) && l2 === "esriGeometryPoint" && (e2 === "esriSpatialRelIntersects" || e2 === "esriSpatialRelContains"))
    return Promise.resolve((e3) => t$5(r$2, _(l2, y2, c2, e3)));
  if (u$2(r$2) && l2 === "esriGeometryMultipoint" && e2 === "esriSpatialRelContains")
    return Promise.resolve((e3) => r$1(r$2, _(l2, y2, c2, e3)));
  if (u$2(r$2) && e2 === "esriSpatialRelIntersects") {
    const e3 = G$2(l2);
    return Promise.resolve((t2) => e3(r$2, _(l2, y2, c2, t2)));
  }
  return h().then((t2) => {
    const i = t2[R[e2]].bind(null, r$2.spatialReference, r$2);
    return (e3) => i(_(l2, y2, c2, e3));
  });
}
function P(t2, i, s$2) {
  return __async(this, null, function* () {
    const { spatialRel: o2, geometry: n2 } = t2;
    if (n2) {
      if (!G(o2))
        throw new s(c, "Unsupported query spatial relationship", { query: t2 });
      if (s$1(n2.spatialReference) && s$1(s$2)) {
        if (!g(n2))
          throw new s(c, "Unsupported query geometry type", { query: t2 });
        if (!j(i))
          throw new s(c, "Unsupported layer geometry type", { query: t2 });
        if (t2.outSR)
          return p(t2.geometry && t2.geometry.spatialReference, t2.outSR);
      }
    }
  });
}
function I(e2) {
  if (u$2(e2))
    return true;
  if (y$1(e2)) {
    for (const r2 of e2.rings) {
      if (r2.length !== 5)
        return false;
      if (r2[0][0] !== r2[1][0] || r2[0][0] !== r2[4][0] || r2[2][0] !== r2[3][0] || r2[0][1] !== r2[3][1] || r2[0][1] !== r2[4][1] || r2[1][1] !== r2[2][1])
        return false;
    }
    return true;
  }
  return false;
}
function t(t2, n2) {
  if (!t2)
    return null;
  const e2 = n2.featureAdapter, { startTimeField: u2, endTimeField: l2 } = t2;
  let r2 = Number.POSITIVE_INFINITY, i = Number.NEGATIVE_INFINITY;
  if (u2 && l2)
    n2.forEach((t3) => {
      const n3 = e2.getAttribute(t3, u2), o2 = e2.getAttribute(t3, l2);
      n3 == null || isNaN(n3) || (r2 = Math.min(r2, n3)), o2 == null || isNaN(o2) || (i = Math.max(i, o2));
    });
  else {
    const t3 = u2 || l2;
    n2.forEach((n3) => {
      const u3 = e2.getAttribute(n3, t3);
      u3 == null || isNaN(u3) || (r2 = Math.min(r2, u3), i = Math.max(i, u3));
    });
  }
  return { start: r2, end: i };
}
function n(t2, n2, r2) {
  if (!n2 || !t2)
    return null;
  const { startTimeField: i, endTimeField: o2 } = t2;
  if (!i && !o2)
    return null;
  const { start: s2, end: a } = n2;
  return s2 === null && a === null ? null : s2 === void 0 && a === void 0 ? l() : i && o2 ? e(r2, i, o2, s2, a) : u(r2, i || o2, s2, a);
}
function e(t2, n2, e2, u2, l2) {
  return u2 != null && l2 != null ? (r2) => {
    const i = t2.getAttribute(r2, n2), o2 = t2.getAttribute(r2, e2);
    return (i == null || i <= l2) && (o2 == null || o2 >= u2);
  } : u2 != null ? (n3) => {
    const l3 = t2.getAttribute(n3, e2);
    return l3 == null || l3 >= u2;
  } : l2 != null ? (e3) => {
    const u3 = t2.getAttribute(e3, n2);
    return u3 == null || u3 <= l2;
  } : void 0;
}
function u(t2, n2, e2, u2) {
  return e2 != null && u2 != null && e2 === u2 ? (u3) => t2.getAttribute(u3, n2) === e2 : e2 != null && u2 != null ? (l2) => {
    const r2 = t2.getAttribute(l2, n2);
    return r2 >= e2 && r2 <= u2;
  } : e2 != null ? (u3) => t2.getAttribute(u3, n2) >= e2 : u2 != null ? (e3) => t2.getAttribute(e3, n2) <= u2 : void 0;
}
function l() {
  return () => false;
}
export { I, J, N, P, _, v$1 as a, j$1 as j, n, t, v, x };
