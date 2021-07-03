import { fm as t, br as t$1, aa as s$1 } from "./vendor.74d5941c.js";
function o(e) {
  const n = [];
  for (; ; ) {
    const { value: t2, done: o2 } = e.next();
    if (o2)
      return n;
    n.push(t2);
  }
}
function r(e) {
  const n = [];
  return e.forEach((e2) => n.push(e2)), n;
}
const i = { LineString: "esriGeometryPolyline", MultiLineString: "esriGeometryPolyline", MultiPoint: "esriGeometryMultipoint", Point: "esriGeometryPoint", Polygon: "esriGeometryPolygon", MultiPolygon: "esriGeometryPolygon" };
function* s(e) {
  switch (e.type) {
    case "Feature":
      yield e;
      break;
    case "FeatureCollection":
      for (const n of e.features)
        n && (yield n);
  }
}
function* u(e) {
  if (!e)
    return null;
  switch (e.type) {
    case "Point":
      yield e.coordinates;
      break;
    case "LineString":
    case "MultiPoint":
      yield* e.coordinates;
      break;
    case "MultiLineString":
    case "Polygon":
      for (const n of e.coordinates)
        yield* n;
      break;
    case "MultiPolygon":
      for (const n of e.coordinates)
        for (const e2 of n)
          yield* e2;
  }
}
function* c(e, o2 = {}) {
  const { geometryType: r2, objectIdFieldName: s2 } = o2;
  for (; ; ) {
    const { value: u2, done: c2 } = e.next();
    if (c2)
      return;
    const { geometry: l2, properties: f2, id: a2 } = u2;
    if (l2 && i[l2.type] !== r2)
      continue;
    const y2 = f2 || {};
    s2 && a2 != null && !y2[s2] && (y2[s2] = a2);
    const p2 = new t(l2 ? d(new t$1(), l2, o2) : null, y2);
    yield p2;
  }
}
function l(e) {
  for (; ; ) {
    const { value: n, done: t2 } = e.next();
    if (t2)
      return false;
    if (n.length > 2)
      return true;
  }
}
function f(e) {
  return !y(e);
}
function a(e) {
  return y(e);
}
function y(e) {
  let n = 0;
  for (let t2 = 0; t2 < e.length; t2++) {
    const o2 = e[t2], r2 = e[(t2 + 1) % e.length];
    n += o2[0] * r2[1] - r2[0] * o2[1];
  }
  return n <= 0;
}
function p(e) {
  const n = e[0], t2 = e[e.length - 1];
  return n[0] === t2[0] && n[1] === t2[1] && n[2] === t2[2] || e.push(n), e;
}
function d(e, n, t2) {
  switch (n.type) {
    case "LineString":
      return g(e, n, t2);
    case "MultiLineString":
      return m(e, n, t2);
    case "MultiPoint":
      return h(e, n, t2);
    case "MultiPolygon":
      return w(e, n, t2);
    case "Point":
      return b(e, n, t2);
    case "Polygon":
      return P(e, n, t2);
  }
}
function g(e, n, t2) {
  return S(e, n.coordinates, t2), e;
}
function m(e, n, t2) {
  for (const o2 of n.coordinates)
    S(e, o2, t2);
  return e;
}
function h(e, n, t2) {
  return S(e, n.coordinates, t2), e;
}
function w(e, n, t2) {
  for (const o2 of n.coordinates) {
    j(e, o2[0], t2);
    for (let n2 = 1; n2 < o2.length; n2++)
      F(e, o2[n2], t2);
  }
  return e;
}
function b(e, n, t2) {
  return G(e, n.coordinates, t2), e;
}
function P(e, n, t2) {
  const o2 = n.coordinates;
  j(e, o2[0], t2);
  for (let r2 = 1; r2 < o2.length; r2++)
    F(e, o2[r2], t2);
  return e;
}
function j(e, n, t2) {
  const o2 = p(n);
  f(o2) ? M(e, o2, t2) : S(e, o2, t2);
}
function F(e, n, t2) {
  const o2 = p(n);
  a(o2) ? M(e, o2, t2) : S(e, o2, t2);
}
function S(e, n, t2) {
  for (const o2 of n)
    G(e, o2, t2);
  e.lengths.push(n.length);
}
function M(e, n, t2) {
  for (let o2 = n.length - 1; o2 >= 0; o2--)
    G(e, n[o2], t2);
  e.lengths.push(n.length);
}
function G(e, n, t2) {
  const [o2, r2, i2] = n;
  e.coords.push(o2, r2), t2.hasZ && e.coords.push(i2 || 0);
}
function x(e) {
  switch (typeof e) {
    case "string":
      return "esriFieldTypeString";
    case "number":
      return "esriFieldTypeDouble";
    default:
      return "unknown";
  }
}
function I(n) {
  if (!n)
    throw new s$1("geojson-layer:empty", "GeoJSON data is empty");
  if (n.type !== "Feature" && n.type !== "FeatureCollection")
    throw new s$1("geojson-layer:unsupported-geojson-object", "missing or not supported GeoJSON object type", { data: n });
  const { crs: t2 } = n;
  if (!t2)
    return;
  const o2 = typeof t2 == "string" ? t2 : t2.type === "name" ? t2.properties.name : null, r2 = new RegExp(".*(CRS84H?|4326)$", "i");
  if (!o2 || !r2.test(o2))
    throw new s$1("geojson-layer:unsupported-crs", "unsupported GeoJSON 'crs' member", { crs: t2 });
}
function N(e, n = {}) {
  const t2 = s(e), o2 = [], c2 = new Set(), f2 = new Set();
  let a2, y2 = false, p2 = Number.NEGATIVE_INFINITY, d2 = null, g2 = false, { geometryType: m2 = null } = n, h2 = false;
  for (; ; ) {
    const { value: e2, done: n2 } = t2.next();
    if (n2) {
      const e3 = d2 && d2.length === 1 && d2[0] || null;
      if (e3)
        for (const n3 of o2)
          n3.name === e3 && (n3.type = "esriFieldTypeOID");
      return { fields: o2, geometryType: m2, hasZ: y2, maxObjectId: Math.max(0, p2), objectIdFieldName: e3, objectIdFieldType: a2, unknownFields: r(f2) };
    }
    const { geometry: s2, properties: w2, id: b2 } = e2;
    if (!s2 || (m2 || (m2 = i[s2.type]), i[s2.type] === m2)) {
      if (!y2) {
        y2 = l(u(s2));
      }
      if (g2 || (g2 = b2 != null, g2 && (a2 = typeof b2, a2 === "number" && (d2 = Object.keys(w2).filter((e3) => w2[e3] === b2)))), g2 && a2 === "number" && b2 != null && (p2 = Math.max(p2, b2), d2.length > 1 ? d2 = d2.filter((e3) => w2[e3] === b2) : d2.length === 1 && (d2 = w2[d2[0]] === b2 ? d2 : [])), !h2 && w2) {
        let e3 = true;
        for (const n3 in w2) {
          if (c2.has(n3))
            continue;
          const t3 = w2[n3];
          if (t3 == null) {
            e3 = false, f2.add(n3);
            continue;
          }
          const r2 = x(t3);
          r2 !== "unknown" ? (f2.delete(n3), c2.add(n3), o2.push({ name: n3, alias: n3, type: r2 })) : f2.add(n3);
        }
        h2 = e3;
      }
    }
  }
}
function T(e, n) {
  return o(c(s(e), n));
}
export { I, N, T };
