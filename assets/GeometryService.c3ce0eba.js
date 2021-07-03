var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a2, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a2, prop, b[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b) => __defProps(a2, __getOwnPropDescs(b));
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
import { dS as r$5, e2 as e$1, aj as U, bi as d, e3 as G, bG as x, cW as p$1, c9 as t$4, ae as e$2, af as y, ag as i$b, e4 as d$1, dA as a$1, dp as m$5, dD as U$1, dT as p$2 } from "./vendor.74d5941c.js";
import { a as a$2 } from "./ProjectParameters.7956a902.js";
function o$7(o2, s2, e2) {
  return __async(this, null, function* () {
    const a2 = r$5(o2), u = __spreadValues(__spreadProps(__spreadValues({}, a2.query), { f: "json" }), s2.toJSON()), f = e$1(u, e2);
    return U(a2.path + "/areasAndLengths", f).then((t2) => t2.data);
  });
}
function r$4(t2) {
  return { geometryType: d(t2[0]), geometries: t2.map((e2) => e2.toJSON()) };
}
function o$6(e2, r2, o2) {
  const n2 = G(r2);
  return e2.map((e3) => {
    const t2 = n2.fromJSON(e3);
    return t2.spatialReference = o2, t2;
  });
}
function i$a(i2, n2, m2, p2) {
  return __async(this, null, function* () {
    const g2 = n2[0].spatialReference, f = r$5(i2), a2 = __spreadProps(__spreadValues({}, f.query), { f: "json", sr: JSON.stringify(g2.toJSON()), polygons: JSON.stringify(r$4(n2).geometries), polylines: JSON.stringify(r$4(m2).geometries) }), y2 = e$1(a2, p2);
    return U(f.path + "/autoComplete", y2).then(({ data: t2 }) => (t2.geometries || []).map(({ rings: t3 }) => new x({ spatialReference: g2, rings: t3 })));
  });
}
function s$1(s2, n2, i2) {
  return __async(this, null, function* () {
    const m2 = r$5(s2), a2 = __spreadValues(__spreadProps(__spreadValues({}, m2.query), { f: "json" }), n2.toJSON()), f = n2.outSpatialReference || n2.geometries[0].spatialReference, p2 = e$1(a2, i2);
    return U(m2.path + "/buffer", p2).then((r2) => (r2.data.geometries || []).map(({ rings: r3 }) => new x({ spatialReference: f, rings: r3 })));
  });
}
function i$9(i2, n2, m2) {
  return __async(this, null, function* () {
    const f = n2[0].spatialReference, p2 = r$5(i2), a2 = __spreadProps(__spreadValues({}, p2.query), { f: "json", sr: JSON.stringify(f.toJSON()), geometries: JSON.stringify(r$4(n2)) }), u = e$1(a2, m2);
    return U(p2.path + "/convexHull", u).then(({ data: e2 }) => p$1(e2.geometry).set({ spatialReference: f }));
  });
}
function o$5(o2, i2, n2, m2) {
  return __async(this, null, function* () {
    const a2 = r$5(o2), p2 = i2[0].spatialReference, u = __spreadProps(__spreadValues({}, m2), { query: __spreadProps(__spreadValues({}, a2.query), { f: "json", sr: JSON.stringify(p2), target: JSON.stringify({ geometryType: d(i2[0]), geometries: i2 }), cutter: JSON.stringify(n2) }) }), c = yield U(a2.path + "/cut", u), { cutIndexes: f, geometries: g2 = [] } = c.data;
    return { cutIndexes: f, geometries: g2.map((e2) => {
      const r2 = p$1(e2);
      return r2.spatialReference = p2, r2;
    }) };
  });
}
function o$4(o2, i2, n2) {
  return __async(this, null, function* () {
    const m2 = i2.geometries[0].spatialReference, p2 = r$5(o2), a2 = __spreadValues(__spreadProps(__spreadValues({}, p2.query), { f: "json" }), i2.toJSON()), f = e$1(a2, n2);
    return U(p2.path + "/densify", f).then(({ data: t2 }) => (t2.geometries || []).map((t3) => p$1(t3).set({ spatialReference: m2 })));
  });
}
function i$8(i2, m2, n2, f) {
  return __async(this, null, function* () {
    const p2 = m2[0].spatialReference, y2 = r$5(i2);
    let a2 = { query: __spreadProps(__spreadValues({}, y2.query), { f: "json", sr: JSON.stringify(p2.toJSON()), geometries: JSON.stringify(r$4(m2)), geometry: JSON.stringify({ geometryType: d(n2), geometry: n2.toJSON() }) }) };
    return f && (a2 = __spreadValues(__spreadValues({}, f), a2)), U(y2.path + "/difference", a2).then(({ data: e2 }) => (e2.geometries || []).map((e3) => p$1(e3).set({ spatialReference: p2 })));
  });
}
function r$3(r2, s2, e2) {
  return __async(this, null, function* () {
    const a2 = r$5(r2), i2 = __spreadValues(__spreadProps(__spreadValues({}, a2.query), { f: "json" }), s2.toJSON()), c = e$1(i2, e2);
    return U(a2.path + "/distance", c).then(({ data: t2 }) => t2 && t2.distance);
  });
}
const _ = new t$4({ MGRS: "mgrs", USNG: "usng", UTM: "utm", GeoRef: "geo-ref", GARS: "gars", DMS: "dms", DDM: "ddm", DD: "dd" });
function t$3(t2, i2, e2) {
  return __async(this, null, function* () {
    const c = {};
    i2.sr != null && typeof i2.sr == "object" ? c.sr = i2.sr.wkid || JSON.stringify(i2.sr) : c.sr = i2.sr, c.strings = JSON.stringify(i2.strings);
    const f = i2.conversionType || "mgrs";
    c.conversionType = _.toJSON(f), c.conversionMode = i2.conversionMode;
    const m2 = r$5(t2), p2 = __spreadValues(__spreadProps(__spreadValues({}, m2.query), { f: "json" }), c), u = e$1(p2, e2);
    return U(m2.path + "/fromGeoCoordinateString", u).then(({ data: o2 }) => o2.coordinates);
  });
}
const i$7 = new t$4({ 109006: "centimeters", 9102: "decimal-degrees", 109005: "decimeters", 9002: "feet", 109009: "inches", 9036: "kilometers", 9001: "meters", 9035: "miles", 109007: "millimeters", 109012: "nautical-miles", 9096: "yards" });
function r$2(e2) {
  const { geometries: r2, deviationUnit: s2, maxDeviation: o2 } = e2.toJSON(), n2 = { maxDeviation: o2 };
  return r2 && r2.length && (n2.geometries = JSON.stringify({ geometryType: d(r2[0]), geometries: r2 }), n2.sr = JSON.stringify(r2[0].spatialReference)), i$7.write(s2, n2, "deviationUnit"), n2;
}
let p = class extends a$1 {
  constructor(r2) {
    super(r2), this.deviationUnit = null, this.geometries = null, this.maxDeviation = null;
  }
};
e$2([y({ type: String, json: { write: true } })], p.prototype, "deviationUnit", void 0), e$2([y({ json: { read: { reader: (r2) => r2 ? r2.map((r3) => p$1(r3)) : null }, write: { writer: (r2, o2) => {
  o2.geometries = r2.map((r3) => r3.toJSON());
} } } })], p.prototype, "geometries", void 0), e$2([y({ type: Number, json: { write: true } })], p.prototype, "maxDeviation", void 0), p = e$2([i$b("esri.tasks.support.GeneralizeParameters")], p), p.from = d$1(p);
var m$4 = p;
function i$6(i2, m2, p2) {
  return __async(this, null, function* () {
    const n2 = (m2 = m$4.from(m2)).toJSON(), f = r$2(m2), j = r$5(i2), l2 = __spreadValues(__spreadProps(__spreadValues({}, j.query), { f: "json" }), f), u = n2.geometries[0].spatialReference, c = e$1(l2, p2);
    return U(j.path + "/generalize", c).then(({ data: r2 }) => (r2.geometries || []).map((r3) => p$1(r3).set({ spatialReference: u })));
  });
}
function m$3(m2, n2, p2, f) {
  return __async(this, null, function* () {
    const y2 = n2[0].spatialReference, a2 = r$5(m2), g2 = __spreadProps(__spreadValues({}, a2.query), { f: "json", sr: JSON.stringify(y2.toJSON()), geometries: JSON.stringify(r$4(n2)), geometry: JSON.stringify({ geometryType: d(p2), geometry: p2.toJSON() }) }), u = e$1(g2, f);
    return U(a2.path + "/intersect", u).then(({ data: e2 }) => (e2.geometries || []).map((e3) => p$1(e3).set({ spatialReference: y2 })));
  });
}
function r$1(r2, i2, n2) {
  const p2 = i2.map((t2) => t2.toJSON()), a2 = i2[0].spatialReference, f = r$5(r2), l2 = __spreadProps(__spreadValues({}, f.query), { f: "json", sr: a2.wkid ? a2.wkid : JSON.stringify(a2.toJSON()), polygons: JSON.stringify(p2) }), m2 = e$1(l2, n2);
  return U(f.path + "/labelPoints", m2).then(({ data: e2 }) => (e2.labelPoints || []).map((e3) => p$1(e3).set({ spatialReference: a2 })));
}
const n$5 = new t$4({ preserveShape: "preserve-shape" });
function o$3(e2) {
  const { polylines: o2, lengthUnit: t2, geodesic: i2, calculationType: s2 } = e2.toJSON(), r2 = {};
  r2.polylines = JSON.stringify(o2);
  const l2 = e2.polylines[0].spatialReference;
  return r2.sr = l2.wkid ? l2.wkid : JSON.stringify(l2.toJSON()), t2 && (r2.lengthUnit = t2), i2 && (r2.geodesic = i2), s2 && (r2.calculationType = n$5.toJSON(s2)), r2;
}
let l = class extends a$1 {
  constructor(o2) {
    super(o2), this.calculationType = null, this.geodesic = null, this.lengthUnit = null, this.polylines = null;
  }
};
e$2([y({ type: String, json: { write: true } })], l.prototype, "calculationType", void 0), e$2([y({ type: Boolean, json: { write: true } })], l.prototype, "geodesic", void 0), e$2([y({ json: { write: true } })], l.prototype, "lengthUnit", void 0), e$2([y({ type: [m$5], json: { read: { reader: (o2) => o2 ? o2.map((o3) => p$1(o3)) : null }, write: { writer: (o2, r2) => {
  r2.polylines = o2.map((o3) => o3.toJSON());
} } } })], l.prototype, "polylines", void 0), l = e$2([i$b("esri.tasks.support.LengthsParameters")], l), l.from = d$1(l);
var n$4 = l;
function n$3(n2, m2, a2) {
  return __async(this, null, function* () {
    m2 = n$4.from(m2);
    const p2 = o$3(m2), f = r$5(n2), i2 = __spreadValues(__spreadProps(__spreadValues({}, f.query), { f: "json" }), p2), u = e$1(i2, a2);
    return U(f.path + "/lengths", u).then(({ data: t2 }) => t2);
  });
}
const o$2 = new t$4({ esriGeometryOffsetBevelled: "bevelled", esriGeometryOffsetMitered: "mitered", esriGeometryOffsetRounded: "rounded" }), s = new t$4({ 9001: "meters", 9002: "feet", 9036: "kilometers", 9093: "miles", 109012: "nautical-miles", 109001: "yards" });
function r(e2) {
  const { geometries: r2, bevelRatio: i2, offsetDistance: f, offsetHow: n2, offsetUnit: m2 } = e2.toJSON(), l2 = { bevelRatio: i2, offsetDistance: f };
  return r2 && r2.length && (l2.geometries = JSON.stringify({ geometryType: d(r2[0]), geometries: r2 }), l2.sr = JSON.stringify(r2[0].spatialReference)), n2 && (l2.offsetHow = o$2.toJSON(n2)), m2 && (l2.offsetUnit = s.toJSON(m2)), l2;
}
let i$5 = class extends a$1 {
  constructor(o2) {
    super(o2), this.bevelRatio = null, this.geometries = null, this.offsetDistance = null, this.offsetHow = null, this.offsetUnit = null;
  }
};
e$2([y({ type: Number, json: { write: true } })], i$5.prototype, "bevelRatio", void 0), e$2([y({ json: { read: { reader: (o2) => o2 ? o2.map((o3) => p$1(o3)) : null }, write: { writer: (o2, r2) => {
  r2.geometries = o2.map((o3) => o3.toJSON());
} } } })], i$5.prototype, "geometries", void 0), e$2([y({ type: Number, json: { write: true } })], i$5.prototype, "offsetDistance", void 0), e$2([y({ type: String, json: { write: true } })], i$5.prototype, "offsetHow", void 0), e$2([y({ type: String, json: { write: true } })], i$5.prototype, "offsetUnit", void 0), i$5 = e$2([i$b("esri.tasks.support.OffsetParameters")], i$5), i$5.from = d$1(i$5);
var m$2 = i$5;
function m$1(m2, p2, a2) {
  return __async(this, null, function* () {
    p2 = m$2.from(p2);
    const i2 = r(p2), n2 = r$5(m2), j = __spreadValues(__spreadProps(__spreadValues({}, n2.query), { f: "json" }), i2), u = p2.geometries[0].spatialReference, c = e$1(j, a2);
    return U(n2.path + "/offset", c).then(({ data: e2 }) => (e2.geometries || []).map((e3) => p$1(e3).set({ spatialReference: u })));
  });
}
const i$4 = d$1(a$2);
function n$2(r2, e2, n2) {
  return __async(this, null, function* () {
    e2 = i$4(e2);
    const u = r$5(r2), a2 = __spreadValues(__spreadProps(__spreadValues({}, u.query), { f: "json" }), e2.toJSON()), c = e2.outSpatialReference, j = d(e2.geometries[0]), f = e$1(a2, n2);
    return U(u.path + "/project", f).then(({ data: { geometries: r3 } }) => o$6(r3, j, c));
  });
}
const t$2 = new t$4({ esriGeometryRelationCross: "cross", esriGeometryRelationDisjoint: "disjoint", esriGeometryRelationIn: "in", esriGeometryRelationInteriorIntersection: "interior-intersection", esriGeometryRelationIntersection: "intersection", esriGeometryRelationLineCoincidence: "line-coincidence", esriGeometryRelationLineTouch: "line-touch", esriGeometryRelationOverlap: "overlap", esriGeometryRelationPointTouch: "point-touch", esriGeometryRelationTouch: "touch", esriGeometryRelationWithin: "within", esriGeometryRelationRelation: "relation" });
function o$1(e2) {
  const { geometries1: o2, geometries2: r2, relation: n2, relationParameter: s2 } = e2.toJSON(), a2 = {};
  if (o2 && o2.length) {
    a2.geometries1 = JSON.stringify({ geometryType: d(o2[0]), geometries: o2 });
    const e3 = o2[0].spatialReference;
    a2.sr = e3.wkid ? e3.wkid : JSON.stringify(e3);
  }
  return r2 && r2.length > 0 && (a2.geometries2 = JSON.stringify({ geometryType: d(r2[0]), geometries: r2 })), n2 && (a2.relation = t$2.toJSON(n2)), s2 && (a2.relationParam = s2), a2;
}
let i$3 = class extends a$1 {
  constructor(r2) {
    super(r2), this.geometries1 = null, this.geometries2 = null, this.relation = null, this.relationParameter = null;
  }
};
e$2([y({ json: { read: { reader: (r2) => r2 ? r2.map((r3) => p$1(r3)) : null }, write: { writer: (r2, o2) => {
  o2.geometries1 = r2.map((r3) => r3.toJSON());
} } } })], i$3.prototype, "geometries1", void 0), e$2([y({ json: { read: { reader: (r2) => r2 ? r2.map((r3) => p$1(r3)) : null }, write: { writer: (r2, o2) => {
  o2.geometries2 = r2.map((r3) => r3.toJSON());
} } } })], i$3.prototype, "geometries2", void 0), e$2([y({ type: String, json: { write: true } })], i$3.prototype, "relation", void 0), e$2([y({ type: String, json: { write: true } })], i$3.prototype, "relationParameter", void 0), i$3 = e$2([i$b("esri.tasks.support.RelationParameters")], i$3), i$3.from = d$1(i$3);
var a = i$3;
function e(e2, n2, i2) {
  return __async(this, null, function* () {
    n2 = a.from(n2);
    const m2 = o$1(n2), p2 = r$5(e2), f = __spreadValues(__spreadProps(__spreadValues({}, p2.query), { f: "json" }), m2), u = e$1(f, i2);
    return U(p2.path + "/relation", u).then(({ data: t2 }) => t2.relations);
  });
}
function i$2(i2, n2, p2, a2) {
  return __async(this, null, function* () {
    const f = n2.spatialReference, m2 = r$5(i2), y2 = __spreadProps(__spreadValues({}, m2.query), { f: "json", sr: JSON.stringify(f.toJSON()), target: JSON.stringify({ geometryType: d(n2), geometry: n2.toJSON() }), reshaper: JSON.stringify(p2.toJSON()) }), g2 = e$1(y2, a2);
    return U(m2.path + "/reshape", g2).then(({ data: e2 }) => p$1(e2.geometry).set({ spatialReference: f }));
  });
}
function o(o2, m2, f) {
  return __async(this, null, function* () {
    const n2 = typeof o2 == "string" ? U$1(o2) : o2, p2 = m2[0].spatialReference, a2 = d(m2[0]), u = __spreadProps(__spreadValues({}, f), { query: __spreadProps(__spreadValues({}, n2.query), { f: "json", sr: p2.wkid ? p2.wkid : JSON.stringify(p2), geometries: JSON.stringify(r$4(m2)) }) }), { data: y2 } = yield U(n2.path + "/simplify", u);
    return o$6(y2.geometries, a2, p2);
  });
}
function t$1(t2, i2, e2) {
  return __async(this, null, function* () {
    const c = {};
    i2.sr != null && typeof i2.sr == "object" ? c.sr = i2.sr.wkid || JSON.stringify(i2.sr) : c.sr = i2.sr, c.coordinates = JSON.stringify(i2.coordinates);
    const d2 = i2.conversionType || "mgrs";
    c.conversionType = _.toJSON(d2), c.conversionMode = i2.conversionMode, c.numOfDigits = i2.numOfDigits, c.rounding = i2.rounding, c.addSpaces = i2.addSpaces;
    const a2 = r$5(t2), u = __spreadValues(__spreadProps(__spreadValues({}, a2.query), { f: "json" }), c), f = e$1(u, e2);
    return U(a2.path + "/toGeoCoordinateString", f).then(({ data: o2 }) => o2.strings);
  });
}
const t = new t$4({ 0: "default-curve-extension", 1: "relocate-ends", 2: "keep-end-attributes", 4: "no-end-attributes", 8: "no-extend-at-from", 16: "no-extend-at-to" });
function n$1(e2) {
  const { extendHow: n2, polylines: o2, trimExtendTo: r2 } = e2.toJSON(), i2 = {};
  return i2.extendHow = t.toJSON(n2), o2 && o2.length && (i2.polylines = JSON.stringify(o2), i2.sr = JSON.stringify(o2[0].spatialReference)), r2 && (i2.trimExtendTo = JSON.stringify(r2)), i2;
}
let m = class extends a$1 {
  constructor(r2) {
    super(r2), this.extendHow = "default-curve-extension", this.polylines = null, this.trimExtendTo = null;
  }
};
e$2([y({ type: String, json: { write: true } })], m.prototype, "extendHow", void 0), e$2([y({ type: [m$5], json: { read: { reader: (r2) => r2 ? r2.map((r3) => p$1(r3)) : null }, write: { writer: (r2, o2) => {
  o2.polylines = r2.map((r3) => r3.toJSON());
} } } })], m.prototype, "polylines", void 0), e$2([y({ json: { read: { reader: (r2) => r2 ? p$1(r2) : null }, write: { writer: (r2, o2) => {
  o2.trimExtendTo = r2.toJSON();
} } } })], m.prototype, "trimExtendTo", void 0), m = e$2([i$b("esri.tasks.support.TrimExtendParameters")], m), m.from = d$1(m);
var n = m;
function i$1(i2, p2, a2) {
  return __async(this, null, function* () {
    p2 = n.from(p2);
    const n$22 = n$1(p2), f = r$5(i2), j = __spreadValues(__spreadProps(__spreadValues({}, f.query), { f: "json" }), n$22), u = p2.sr, y2 = e$1(j, a2);
    return U(f.path + "/trimExtend", y2).then(({ data: r2 }) => (r2.geometries || []).map(({ paths: r3 }) => new m$5({ spatialReference: u, paths: r3 })));
  });
}
function i(i2, n2, m2) {
  return __async(this, null, function* () {
    const f = n2[0].spatialReference, p2 = r$5(i2), a2 = __spreadProps(__spreadValues({}, p2.query), { f: "json", sr: JSON.stringify(f.toJSON()), geometries: JSON.stringify(r$4(n2)) }), u = e$1(a2, m2);
    return U(p2.path + "/union", u).then(({ data: e2 }) => p$1(e2.geometry).set({ spatialReference: f }));
  });
}
let C = class extends p$2 {
  constructor(r2) {
    super(r2), this.url = null;
  }
  areasAndLengths(r2, e2) {
    return o$7(this.url, r2, e2);
  }
  autoComplete(r2, e2, t2) {
    return i$a(this.url, r2, e2, t2);
  }
  buffer(r2, e2) {
    return s$1(this.url, r2, e2);
  }
  convexHull(r2, e2) {
    return i$9(this.url, r2, e2);
  }
  cut(r2, e2, t2) {
    return o$5(this.url, r2, e2, t2);
  }
  densify(r2, e2) {
    return o$4(this.url, r2, e2);
  }
  difference(r2, e2, t2) {
    return i$8(this.url, r2, e2, t2);
  }
  distance(r2, e2) {
    return r$3(this.url, r2, e2);
  }
  fromGeoCoordinateString(r2, e2) {
    return t$3(this.url, r2, e2);
  }
  generalize(r2, e2) {
    return i$6(this.url, r2, e2);
  }
  intersect(r2, e2, t2) {
    return m$3(this.url, r2, e2, t2);
  }
  labelPoints(r2, e2) {
    return r$1(this.url, r2, e2);
  }
  lengths(r2, e2) {
    return n$3(this.url, r2, e2);
  }
  offset(r2, e2) {
    return m$1(this.url, r2, e2);
  }
  project(r2, e2) {
    return n$2(this.url, r2, e2);
  }
  relation(r2, e$12) {
    return e(this.url, r2, e$12);
  }
  reshape(r2, e2, t2) {
    return i$2(this.url, r2, e2, t2);
  }
  simplify(r2, e2) {
    return o(this.url, r2, e2);
  }
  toGeoCoordinateString(r2, e2) {
    return t$1(this.url, r2, e2);
  }
  trimExtend(r2, e2) {
    return i$1(this.url, r2, e2);
  }
  union(r2, e2) {
    return i(this.url, r2, e2);
  }
};
C.UNIT_METER = 9001, C.UNIT_GERMAN_METER = 9031, C.UNIT_FOOT = 9002, C.UNIT_SURVEY_FOOT = 9003, C.UNIT_CLARKE_FOOT = 9005, C.UNIT_FATHOM = 9014, C.UNIT_NAUTICAL_MILE = 9030, C.UNIT_SURVEY_CHAIN = 9033, C.UNIT_SURVEY_LINK = 9034, C.UNIT_SURVEY_MILE = 9035, C.UNIT_KILOMETER = 9036, C.UNIT_CLARKE_YARD = 9037, C.UNIT_CLARKE_CHAIN = 9038, C.UNIT_CLARKE_LINK = 9039, C.UNIT_SEARS_YARD = 9040, C.UNIT_SEARS_FOOT = 9041, C.UNIT_SEARS_CHAIN = 9042, C.UNIT_SEARS_LINK = 9043, C.UNIT_BENOIT_1895A_YARD = 9050, C.UNIT_BENOIT_1895A_FOOT = 9051, C.UNIT_BENOIT_1895A_CHAIN = 9052, C.UNIT_BENOIT_1895A_LINK = 9053, C.UNIT_BENOIT_1895B_YARD = 9060, C.UNIT_BENOIT_1895B_FOOT = 9061, C.UNIT_BENOIT_1895B_CHAIN = 9062, C.UNIT_BENOIT_1895B_LINK = 9063, C.UNIT_INDIAN_FOOT = 9080, C.UNIT_INDIAN_1937_FOOT = 9081, C.UNIT_INDIAN_1962_FOOT = 9082, C.UNIT_INDIAN_1975_FOOT = 9083, C.UNIT_INDIAN_YARD = 9084, C.UNIT_INDIAN_1937_YARD = 9085, C.UNIT_INDIAN_1962_YARD = 9086, C.UNIT_INDIAN_1975_YARD = 9087, C.UNIT_FOOT_1865 = 9070, C.UNIT_RADIAN = 9101, C.UNIT_DEGREE = 9102, C.UNIT_ARCMINUTE = 9103, C.UNIT_ARCSECOND = 9104, C.UNIT_GRAD = 9105, C.UNIT_GON = 9106, C.UNIT_MICRORADIAN = 9109, C.UNIT_ARCMINUTE_CENTESIMAL = 9112, C.UNIT_ARCSECOND_CENTESIMAL = 9113, C.UNIT_MIL6400 = 9114, C.UNIT_BRITISH_1936_FOOT = 9095, C.UNIT_GOLDCOAST_FOOT = 9094, C.UNIT_INTERNATIONAL_CHAIN = 109003, C.UNIT_INTERNATIONAL_LINK = 109004, C.UNIT_INTERNATIONAL_YARD = 109001, C.UNIT_STATUTE_MILE = 9093, C.UNIT_SURVEY_YARD = 109002, C.UNIT_50KILOMETER_LENGTH = 109030, C.UNIT_150KILOMETER_LENGTH = 109031, C.UNIT_DECIMETER = 109005, C.UNIT_CENTIMETER = 109006, C.UNIT_MILLIMETER = 109007, C.UNIT_INTERNATIONAL_INCH = 109008, C.UNIT_US_SURVEY_INCH = 109009, C.UNIT_INTERNATIONAL_ROD = 109010, C.UNIT_US_SURVEY_ROD = 109011, C.UNIT_US_NAUTICAL_MILE = 109012, C.UNIT_UK_NAUTICAL_MILE = 109013, C.UNIT_SQUARE_INCHES = "esriSquareInches", C.UNIT_SQUARE_FEET = "esriSquareFeet", C.UNIT_SQUARE_YARDS = "esriSquareYards", C.UNIT_ACRES = "esriAcres", C.UNIT_SQUARE_MILES = "esriSquareMiles", C.UNIT_SQUARE_MILLIMETERS = "esriSquareMillimeters", C.UNIT_SQUARE_CENTIMETERS = "esriSquareCentimeters", C.UNIT_SQUARE_DECIMETERS = "esriSquareDecimeters", C.UNIT_SQUARE_METERS = "esriSquareMeters", C.UNIT_ARES = "esriAres", C.UNIT_HECTARES = "esriHectares", C.UNIT_SQUARE_KILOMETERS = "esriSquareKilometers", e$2([y()], C.prototype, "url", void 0), C = e$2([i$b("esri.tasks.GeometryService")], C);
var g = C;
export default g;
