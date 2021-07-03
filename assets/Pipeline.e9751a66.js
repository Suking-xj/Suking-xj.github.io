var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __pow = Math.pow;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
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
import { a4 as n$3, aa as s, bF as k$2, ay as c$4, cm as d$4, aj as U, cy as ee, ci as X, dg as g$3, fn as I, g7 as e, a0 as t$4, a5 as r$1, g8 as I$1, g9 as g$4, fm as t$5, br as t$6, cA as ae, ak as n$4, ai as t$7, ga as f$3, gb as d$6, gc as y$5, cw as oe, gd as se, b$ as e$1, ae as e$2, af as y$6, ag as i$2, ac as u$4, bI as h$7, am as m$6, bN as B, av as n$5, cB as m$7, d5 as d$7, f7 as a$5, ge as y$7, ec as R$3, fk as s$2, ap as _$3, aq as a$6, an as g$5, a7 as e$3, gf as d$8, g3 as t$8, eM as C$3, cW as p$6, ef as g$6, fZ as J, bp as ce, gg as p$7, gh as I$2, ah as j$1, cG as t$9, eL as w$2, cS as v$2, gi as s$3, aw as A, b7 as S, eG as y$9, cE as e$4, eI as $, ei as h$8, eP as x$2 } from "./vendor.74d5941c.js";
import { c as c$5, i as i$3, u as u$5, O as O$1, l as l$6 } from "./ComputedAttributeStorage.2a55b702.js";
import { r as r$2, o as o$4, l as l$5 } from "./FeatureStore2D.8e44e1d6.js";
import { Z } from "./QueryEngine.202b3395.js";
import { T as T$1 } from "./geojson.689424f4.js";
import { d as d$5 } from "./FeatureSetReader.a91e3e2d.js";
import { s as s$1 } from "./CircularArray.2e27cf26.js";
import { o as o$5 } from "./definitions.6737c10c.js";
import { p as p$8, y as y$8 } from "./projectionSupport.62084d5a.js";
import "./quickselect.e4940b29.js";
import "./_commonjsHelpers.f2a458db.js";
import "./Utils.3f1577e5.js";
import "./FramebufferObject.18518335.js";
import "./visualVariablesUtils.bb9f81fa.js";
import "./visualVariablesUtils.cb58e4df.js";
import "./aaBoundingBox.b76947f8.js";
import "./WhereClause.f27c6004.js";
import "./timeSupport.2cea3b6f.js";
import "./centroid.93c1b848.js";
import "./json.7989af9b.js";
function o$3(o2) {
  return o2 === "heatmap" ? import("./HeatmapProcessor.9b3c2ec9.js") : import("./SymbolProcessor.56bfeb33.js");
}
class t$3 {
  constructor() {
    this.source = false, this.targets = { feature: false, aggregate: false }, this.storage = { filters: false, data: false }, this.mesh = false, this.queryFilter = false, this.why = { mesh: [], source: [] };
  }
  static create(e2) {
    const s2 = new t$3();
    for (const t2 in e2) {
      const r2 = e2[t2];
      if (typeof r2 == "object")
        for (const e3 in r2) {
          const a2 = r2[e3];
          s2[t2][e3] = a2;
        }
      s2[t2] = r2;
    }
    return s2;
  }
  static empty() {
    return t$3.create({});
  }
  static all() {
    return t$3.create({ source: true, targets: { feature: true, aggregate: true }, storage: { filters: true, data: true }, mesh: true });
  }
  unset(t2) {
    t2.source && (this.source = false), t2.targets.feature && (this.targets.feature = false), t2.targets.aggregate && (this.targets.aggregate = false), t2.storage.filters && (this.storage.filters = false), t2.storage.data && (this.storage.data = false), t2.mesh && (this.mesh = false), t2.queryFilter && (this.queryFilter = false);
  }
  any() {
    return this.source || this.mesh || this.storage.filters || this.storage.data || this.targets.feature || this.targets.aggregate || this.queryFilter;
  }
  describe() {
    let t2 = 0, e2 = "";
    if (this.mesh) {
      t2 += 20, e2 += "-> (20) Mesh needs update\n";
      for (const t3 of this.why.mesh)
        e2 += `    + ${t3}
`;
    }
    if (this.source) {
      t2 += 10, e2 += "-> (10) The source needs update\n";
      for (const t3 of this.why.source)
        e2 += `    + ${t3}
`;
    }
    this.targets.feature && (t2 += 5, e2 += "-> (5) Feature target parameters changed\n"), this.storage.filters && (t2 += 5, e2 += "-> (5) Feature filter parameters changed\n"), this.targets.aggregate && (t2 += 4, e2 += "-> (4) Aggregate target parameters changed\n"), this.storage.data && (t2 += 1, e2 += "-> (1) Texture storage parameters changed");
    const s2 = t2 < 5 ? "Fastest" : t2 < 10 ? "Fast" : t2 < 15 ? "Moderate" : t2 < 20 ? "Slow" : "Very Slow";
    console.debug(`Applying ${s2} update of cost ${t2}/45 `), console.debug(e2);
  }
  toJSON() {
    return { queryFilter: this.queryFilter, source: this.source, targets: this.targets, storage: this.storage, mesh: this.mesh };
  }
}
n$3.getLogger("esri.layers.graphics.sources.ogcfeature");
const h$6 = "json";
function k$1(e2) {
  const t2 = /^http:\/\/www\.opengis\.net\/def\/crs\/(.+)\/(.+)\/(.+)$/i.exec(e2);
  if (!t2)
    return null;
  const [, r2, , i2] = t2;
  switch (r2.toLowerCase()) {
    case "ogc":
      switch (i2.toLowerCase()) {
        case "crs27":
          return k$2.GCS_NAD_1927;
        case "crs83":
          return new k$2({ wkid: 4269 });
        case "crs84":
        case "crs84h":
          return k$2.WGS84;
        default:
          return null;
      }
    case "esri":
    case "epsg": {
      const e3 = Number.parseInt(i2, 10);
      return Number.isNaN(e3) ? null : e3 === 900913 ? k$2.WebMercator : new k$2({ wkid: e3 });
    }
    default:
      return null;
  }
}
function D(t2, r2, i2) {
  return __async(this, null, function* () {
    const { capabilities: { query: { maxRecordCount: s$12 } }, collectionId: d2, layerDefinition: f2, spatialReference: y2, supportedCrs: g2, url: b2 } = t2, w2 = `${b2}/collections/${d2}/items`, { geometry: I$12, num: j2, start: T2, timeExtent: S2, where: x2 } = r2;
    if (r2.objectIds)
      throw new s("ogc-feature-layer:query-by-objectids-not-supported", "Queries with objectids are not supported");
    const N = k$2.fromJSON(y2), $2 = c$4(r2.outSpatialReference, N), k2 = $2.isWGS84 ? null : M$1($2, g2), q = G(I$12, g2), O2 = v$1(S2), D2 = C$2(x2), R2 = j2 != null ? j2 : T2 != null && T2 !== void 0 ? 10 : s$12, { data: W2 } = yield U(w2, __spreadProps(__spreadValues({}, i2), { query: __spreadProps(__spreadValues({}, q), { crs: k2, datetime: O2, query: D2, limit: R2, startindex: T2, f: h$6 }) }));
    let Z2 = false;
    if (W2.links) {
      Z2 = !!W2.links.find((e2) => e2.rel === "next");
    }
    !Z2 && Number.isInteger(W2.numberMatched) && Number.isInteger(W2.numberReturned) && (Z2 = W2.numberReturned < W2.numberMatched);
    const { fields: L2, globalIdField: J2, hasM: E2, hasZ: U$1, objectIdField: _2 } = f2, z = f2.geometryType, A2 = T$1(W2, { geometryType: z, hasZ: U$1, objectIdFieldName: _2 });
    if (!k2 && $2.isWebMercator) {
      for (const e2 of A2)
        if (e2.geometry) {
          const t3 = ee(e2.geometry, z, U$1, false);
          t3.spatialReference = k$2.WGS84, e2.geometry = X(g$3(t3, $2));
        }
    }
    for (const e2 of A2)
      e2.objectId = e2.attributes[_2];
    const B2 = k2 || !k2 && $2.isWebMercator ? $2.toJSON() : I, Q = new e();
    return Q.exceededTransferLimit = Z2, Q.features = A2, Q.fields = L2, Q.geometryType = z, Q.globalIdFieldName = J2, Q.hasM = E2, Q.hasZ = U$1, Q.objectIdFieldName = _2, Q.spatialReference = B2, Q;
  });
}
function R$2(e2) {
  return r$1(e2) && e2.type === "extent";
}
function M$1(e2, t2) {
  return t2.find((t3) => {
    const r2 = k$1(t3);
    return d$4(r2, e2);
  });
}
function W(e2) {
  const { xmin: t2, ymin: r2, xmax: i2, ymax: n2 } = e2;
  return `${t2},${r2},${i2},${n2}`;
}
function v$1(e2) {
  if (t$4(e2))
    return null;
  const { start: r2, end: i2 } = e2;
  return `${r2 ? r2.toISOString() : ".."}/${i2 ? i2.toISOString() : ".."}`;
}
function C$2(e2) {
  return t$4(e2) || !e2 || e2 === "1=1" ? null : e2;
}
function G(e2, t2) {
  if (!R$2(e2))
    return null;
  const { spatialReference: r2 } = e2;
  if (!r2 || r2.isWGS84)
    return { bbox: W(e2) };
  const i2 = M$1(r2, t2);
  return i2 ? { bbox: W(e2), "bbox-crs": i2 } : r2.isWebMercator ? { bbox: W(g$3(e2, k$2.WGS84)) } : null;
}
const r = 268435455;
class n$2 {
  constructor() {
    this.fieldMap = new Map(), this.fields = [], this.hasFeatures = false, this.fieldCount = 0, this.featureCount = 0, this.objectIdFieldIndex = 0, this.offsets = { attributes: new Array(), geometry: new Array() }, this.centroid = new Array();
  }
  hasField(e2) {
    return this.fieldMap.has(e2);
  }
  isDateField(e2) {
    var t2;
    return (t2 = this.fieldMap.get(e2)) == null ? void 0 : t2.isDate;
  }
  getFieldIndex(e2) {
    var t2;
    return (t2 = this.fieldMap.get(e2)) == null ? void 0 : t2.index;
  }
}
function a$4(e2) {
  const t2 = 1, r2 = 2, n2 = e2.getLength(), a2 = e2.pos() + n2, i2 = { name: "", isDate: false };
  for (; e2.pos() < a2 && e2.next(); )
    switch (e2.tag()) {
      case t2:
        i2.name = e2.getString();
        break;
      case r2:
        g$4(e2.getEnum()) === "esriFieldTypeDate" && (i2.isDate = true);
        break;
      default:
        e2.skip();
    }
  return i2;
}
function i$1(e2) {
  return e2.toLowerCase().trim();
}
function o$2(s$12, o2, c2 = false) {
  const f2 = 1, d2 = 3, l2 = 9, u2 = 12, g2 = 13, p2 = 15, h2 = s$12.pos(), m2 = new n$2();
  let b2 = 0, w2 = 0;
  const k2 = 1, y2 = 2, I2 = 4, x2 = 3;
  let F2 = null, L2 = null, A2 = null, S2 = false;
  for (; s$12.next(); )
    switch (s$12.tag()) {
      case f2:
        F2 = s$12.getString();
        break;
      case d2:
        L2 = s$12.getString();
        break;
      case u2:
        A2 = s$12.processMessage(I$1);
        break;
      case l2:
        if (m2.exceededTransferLimit = s$12.getBool(), m2.exceededTransferLimit) {
          m2.offsets.geometry = c2 ? new Float64Array(8e3) : new Int32Array(8e3), m2.centroid = c2 ? new Float64Array(16e3) : new Int32Array(16e3);
          for (let e2 = 0; e2 < m2.centroid.length; e2++)
            m2.centroid[e2] = r;
        }
        break;
      case g2: {
        const e2 = a$4(s$12), t2 = e2.name, r2 = i$1(e2.name), n2 = { fieldName: t2, index: b2++, isDate: e2.isDate };
        m2.fields.push(n2), m2.fieldMap.set(e2.name, n2), m2.fieldMap.set(r2, n2);
        break;
      }
      case p2: {
        const e2 = s$12.getLength(), t2 = s$12.pos() + e2;
        if (!m2.exceededTransferLimit) {
          const e3 = m2.offsets.geometry, t3 = m2.centroid;
          e3.push(0), t3.push(r), t3.push(r);
        }
        !S2 && m2.exceededTransferLimit && (S2 = true, m2.offsets.attributes = c2 ? new Float64Array(8e3 * b2) : new Uint32Array(8e3 * b2));
        let n2 = w2 * b2;
        for (; s$12.pos() < t2 && s$12.next(); )
          switch (s$12.tag()) {
            case k2: {
              if (S2)
                m2.offsets.attributes[n2++] = s$12.pos();
              else {
                m2.offsets.attributes.push(s$12.pos());
              }
              const e3 = s$12.getLength();
              s$12.skipLen(e3);
              break;
            }
            case y2:
              if (o2) {
                const e3 = s$12.getLength(), t3 = s$12.pos() + e3;
                for (; s$12.pos() < t3 && s$12.next(); )
                  switch (s$12.tag()) {
                    case x2: {
                      s$12.getUInt32();
                      const e4 = s$12.getSInt64(), t4 = s$12.getSInt64();
                      m2.centroid[2 * w2] = e4, m2.centroid[2 * w2 + 1] = t4;
                      break;
                    }
                    default:
                      s$12.skip();
                  }
              } else {
                m2.offsets.geometry[w2] = s$12.pos();
                const e3 = s$12.getLength();
                s$12.skipLen(e3);
              }
              break;
            case I2: {
              const e3 = s$12.getLength(), t3 = s$12.pos() + e3;
              for (; s$12.pos() < t3 && s$12.next(); )
                switch (s$12.tag()) {
                  case x2: {
                    s$12.getUInt32();
                    const e4 = s$12.getSInt64(), t4 = s$12.getSInt64();
                    m2.centroid[2 * w2] = e4, m2.centroid[2 * w2 + 1] = t4;
                    break;
                  }
                  default:
                    s$12.skip();
                }
              break;
            }
            default:
              s$12.skip();
          }
        w2++, m2.hasFeatures = true;
        break;
      }
      default:
        s$12.skip();
    }
  const M2 = F2 || L2;
  if (!M2)
    throw new s("FeatureSet has no objectId or globalId field name");
  return m2.featureCount = w2, m2.fieldCount = b2, m2.objectIdFieldIndex = m2.getFieldIndex(M2), m2.transform = A2, m2.displayIds = new Uint32Array(m2.featureCount), m2.groupIds = new Uint16Array(m2.featureCount), s$12.move(h2), m2;
}
const c$3 = n$3.getLogger("esri.view.2d.layers.features.support.FeatureSetReaderPBF"), _$2 = 268435455;
function g$2(e2) {
  return e2.toLowerCase().trim();
}
function l$4(e2) {
  try {
    const t2 = 2, r2 = new n$4(new Uint8Array(e2), new DataView(e2));
    for (; r2.next(); )
      switch (r2.tag()) {
        case t2:
          return f$2(r2.getMessage());
        default:
          r2.skip();
      }
  } catch (t2) {
    const e3 = new s("query:parsing-pbf", "Error while parsing FeatureSet PBF payload", { error: t2 });
    c$3.error(e3);
  }
  return null;
}
function f$2(e2) {
  const t2 = 1;
  for (; e2.next(); )
    switch (e2.tag()) {
      case t2:
        return e2.getMessage();
      default:
        e2.skip();
    }
  return null;
}
function y$4(e2) {
  const t2 = 1, r2 = 2, s2 = 3, i2 = 4, a2 = 5, n2 = 6, h2 = 7, o2 = 8, d2 = 9, u2 = e2.getLength(), c2 = e2.pos() + u2;
  for (; e2.pos() < c2 && e2.next(); )
    switch (e2.tag()) {
      case t2: {
        const t3 = e2.getString();
        return t3 === "" ? null : t3;
      }
      case r2:
        return e2.getFloat();
      case s2:
        return e2.getDouble();
      case i2:
        return e2.getSInt32();
      case a2:
        return e2.getUInt32();
      case n2:
        return e2.getInt64();
      case h2:
        return e2.getUInt64();
      case o2:
        return e2.getSInt64();
      case d2:
        return e2.getBool();
      default:
        return e2.skip(), null;
    }
  return null;
}
class m$5 extends d$5 {
  constructor(e2, t2, r2, s2) {
    super(e2), this._hasNext = false, this._isPoints = false, this._isPolygons = false, this._featureIndex = -1, this._featureOffset = 0, this._cache = { area: 0, unquantGeometry: void 0, geometry: void 0, centroid: void 0, legacyFeature: void 0, optFeature: void 0 }, this._geometryType = s2, this._reader = t2, this._header = r2, this._hasNext = r2.hasFeatures, this._isPoints = s2 === "esriGeometryPoint", this._isPolygons = s2 === "esriGeometryPolygon";
  }
  static fromBuffer(e2, t2, r2 = false) {
    const s2 = l$4(e2), i2 = o$2(s2, t2 === "esriGeometryPoint", r2), a2 = d$5.createInstance();
    return new m$5(a2, s2, i2, t2);
  }
  get geometryType() {
    return this._geometryType;
  }
  get size() {
    return this._header.featureCount;
  }
  get hasZ() {
    return false;
  }
  get hasM() {
    return false;
  }
  get stride() {
    return 2 + (this.hasZ ? 1 : 0) + (this.hasM ? 1 : 0);
  }
  get hasFeatures() {
    return this._header.hasFeatures;
  }
  get hasNext() {
    return this._hasNext;
  }
  get exceededTransferLimit() {
    return this._header.exceededTransferLimit;
  }
  getApproximateSize() {
    if (this._hasFilter) {
      const e2 = Math.abs(this._xmax - this._xmin) * Math.abs(this._ymax - this._ymin), t2 = this.size * e2 / 262144;
      return Math.max(Math.round(t2), 0);
    }
    return this.size;
  }
  getQuantizationTransform() {
    return this._header.transform;
  }
  getCursor() {
    return this.copy();
  }
  getIndex() {
    return this._featureIndex;
  }
  setIndex(e2) {
    this._cache.area = 0, this._cache.unquantGeometry = void 0, this._cache.geometry = void 0, this._cache.centroid = void 0, this._cache.legacyFeature = void 0, this._cache.optFeature = void 0, this._featureIndex = e2;
  }
  getAttributeHash() {
    let e2 = "";
    return this._header.fields.forEach(({ index: t2 }) => {
      e2 += this._readAttributeAtIndex(t2) + ".";
    }), e2;
  }
  getObjectId() {
    return this._readAttributeAtIndex(this._header.objectIdFieldIndex);
  }
  getDisplayId() {
    return this._header.displayIds[this._featureIndex];
  }
  setDisplayId(e2) {
    this._header.displayIds[this._featureIndex] = e2;
  }
  getGroupId() {
    return this._header.groupIds[this._featureIndex];
  }
  setGroupId(e2) {
    this._header.groupIds[this._featureIndex] = e2;
  }
  readLegacyFeature() {
    if (this._cache.legacyFeature === void 0) {
      var e2;
      const t2 = this.readCentroid(), r2 = { attributes: this.readAttributes(), geometry: this._isPoints ? this.readLegacyPointGeometry() : this.readLegacyGeometry(), centroid: (e2 = t2 && { x: t2.coords[0], y: t2.coords[1] }) != null ? e2 : null };
      return this._cache.legacyFeature = r2, r2;
    }
    return this._cache.legacyFeature;
  }
  readOptimizedFeature() {
    if (this._cache.optFeature === void 0) {
      const e2 = new t$5(this.readGeometry(), this.readAttributes(), this.readCentroid());
      return e2.objectId = this.getObjectId(), e2.displayId = this.getDisplayId(), this._cache.optFeature = e2, e2;
    }
    return this._cache.optFeature;
  }
  getXHydrate() {
    const t2 = this._header.centroid[2 * this._featureIndex], r2 = this.getQuantizationTransform();
    return t$4(r2) ? t2 : t2 * r2.scale[0] + r2.translate[0];
  }
  getYHydrate() {
    const t2 = this._header.centroid[2 * this._featureIndex + 1], r2 = this.getQuantizationTransform();
    return t$4(r2) ? t2 : r2.translate[1] - t2 * r2.scale[1];
  }
  getX() {
    return this._header.centroid[2 * this._featureIndex] * this._sx + this._tx;
  }
  getY() {
    return this._header.centroid[2 * this._featureIndex + 1] * this._sy + this._ty;
  }
  readLegacyPointGeometry() {
    return { x: this.getX(), y: this.getY() };
  }
  readLegacyGeometry() {
    const e2 = this.readGeometry();
    return ee(e2, this.geometryType, false, false);
  }
  readLegacyCentroid() {
    const e2 = this.readCentroid();
    if (!e2)
      return null;
    const [t2, r2] = e2.coords;
    return { x: t2, y: r2 };
  }
  readGeometryArea() {
    return this._cache.area || this.readGeometry(), this._cache.area;
  }
  readUnquantizedGeometry() {
    if (this._cache.unquantGeometry === void 0) {
      const e2 = this.readGeometry();
      if (!e2)
        return this._cache.unquantGeometry = null, null;
      const t2 = e2.clone(), r2 = t2.lengths, s2 = t2.coords;
      for (let i2 = 0, a2 = 2; i2 < r2.length; i2++, a2 += 2) {
        const e3 = r2[i2];
        for (let t3 = 1; t3 < e3; t3 += 1, a2 += 2)
          s2[a2] += s2[a2 - 2], s2[a2 + 1] += s2[a2 - 1];
      }
      return this._cache.unquantGeometry = t2, t2;
    }
    return this._cache.unquantGeometry;
  }
  readHydratedGeometry() {
    if (this._isPoints) {
      const e3 = this.getXHydrate(), t2 = this.getYHydrate();
      return new t$6([], [e3, t2]);
    }
    const e2 = this.readGeometry();
    if (!e2)
      return null;
    const r2 = e2.clone(), s2 = this.getQuantizationTransform();
    return r$1(s2) && ae(r2, r2, this.hasZ, this.hasM, s2), r2;
  }
  readGeometry() {
    if (this._cache.geometry === void 0) {
      let t2 = null;
      if (this._isPoints) {
        const e2 = this.getX(), r2 = this.getY();
        t2 = new t$6([], [e2, r2]);
      } else {
        const r2 = this._header.offsets.geometry[this._featureIndex], s2 = this._reader;
        if (r2 === 0)
          return null;
        s2.move(r2);
        try {
          t2 = this._parseGeometry(s2);
        } catch (e2) {
          return console.error("Failed to parse geometry!", e2), null;
        }
      }
      return this._cache.geometry = t2, t2;
    }
    return this._cache.geometry;
  }
  readCentroid() {
    if (this._cache.centroid === void 0) {
      let e2 = null;
      const t2 = this._header.centroid[2 * this._featureIndex] + this._tx, r2 = this._header.centroid[2 * this._featureIndex + 1] + this._ty;
      return t2 === _$2 ? (e2 = this._computeCentroid(), e2 && (this._header.centroid[2 * this._featureIndex] = e2.coords[0] - this._tx, this._header.centroid[2 * this._featureIndex + 1] = e2.coords[1] - this._ty)) : e2 = new t$6([], [t2, r2]), this._cache.centroid = e2, e2;
    }
    return this._cache.centroid;
  }
  copy() {
    const e2 = this._reader.clone(), t2 = new m$5(this.instance, e2, this._header, this.geometryType);
    return this.copyInto(t2), t2;
  }
  next() {
    for (this._cache.area = 0, this._cache.unquantGeometry = void 0, this._cache.geometry = void 0, this._cache.centroid = void 0, this._cache.legacyFeature = void 0, this._cache.optFeature = void 0; ++this._featureIndex < this.size && !this._passesFilter() && !this._getExists(); )
      ;
    return this._featureIndex < this.size;
  }
  _readAttribute(e2, t2) {
    const r2 = this._header.hasField(e2) ? e2 : g$2(e2), s2 = this._header.getFieldIndex(r2);
    if (s2 == null)
      return;
    const i2 = this._readAttributeAtIndex(s2);
    if (!t2)
      return i2;
    if (i2 == null)
      return i2;
    return this._header.isDateField(r2) ? new Date(i2) : i2;
  }
  _readAttributes() {
    const e2 = {};
    return this._header.fields.forEach(({ fieldName: t2, index: r2 }) => {
      e2[t2] = this._readAttributeAtIndex(r2);
    }), e2;
  }
  copyInto(e2) {
    super.copyInto(e2), e2._featureIndex = this._featureIndex, e2._featureOffset = this._featureOffset, e2._hasNext = this._hasNext;
  }
  _passesFilter() {
    if (!this._hasFilter)
      return true;
    let e2 = this._header.centroid[2 * this._featureIndex], t2 = this._header.centroid[2 * this._featureIndex + 1];
    if (e2 === _$2) {
      if (this._isPolygons && !this.readCentroid())
        return false;
      e2 = this._header.centroid[2 * this._featureIndex], t2 = this._header.centroid[2 * this._featureIndex + 1];
    }
    return e2 >= this._xmin && e2 <= this._xmax && t2 >= this._ymin && t2 <= this._ymax;
  }
  _readAttributeAtIndex(e2) {
    const t2 = this._header.offsets.attributes[this._featureIndex * this._header.fieldCount + e2], r2 = this._reader;
    return r2.move(t2), y$4(r2);
  }
  _preprocessPolygon(e2, t2) {
    let r2 = 0, s2 = 0, i2 = 0, n2 = false, h2 = false, o2 = false, d2 = -1;
    const u2 = 1e6, c2 = [];
    let _2 = 0, g2 = false;
    for (let a2 = 0; a2 < t2.length; a2++) {
      const l2 = t2[a2];
      let f2 = e2[2 * r2], y2 = e2[2 * r2 + 1], m2 = 0;
      for (let t3 = 1; t3 < l2; t3++) {
        const s3 = f2, i3 = y2, a3 = f2 + e2[2 * (r2 + t3)], n3 = y2 + e2[2 * (r2 + t3) + 1];
        f2 = a3, y2 = n3, m2 += 0.5 * ((a3 - s3) * (n3 + i3));
      }
      const p2 = m2 > 0;
      if (p2 && g2 && (s2 += l2), p2 || (d2++, g2 = false), d2 >= u2)
        break;
      _2 += m2, n2 && p2 && h2 && (o2 = true);
      {
        e2[2 * i2] = e2[2 * s2], e2[2 * i2++ + 1] = e2[2 * s2++ + 1];
        let t3 = 1, r3 = e2[2 * s2], a3 = e2[2 * s2++ + 1];
        for (let n3 = 2; n3 < l2; n3++) {
          const n4 = e2[2 * s2], h3 = e2[2 * s2++ + 1];
          r3 * h3 - n4 * a3 === 0 && r3 * n4 + a3 * h3 > 0 ? (r3 += n4, a3 += h3) : (e2[2 * i2] = r3, e2[2 * i2++ + 1] = a3, t3++, r3 = n4, a3 = h3);
        }
        e2[2 * i2] = r3, e2[2 * i2++ + 1] = a3, t3++, c2.push(t3);
      }
      n2 = false, h2 = true, r2 += l2;
    }
    return c2.length ? (this._cache.area = Math.abs(_2), new t$6(c2, e2, o2)) : null;
  }
  _parseGeometry(e2) {
    const t2 = 1, r2 = 2, s2 = 3, i2 = e2.getLength(), n2 = e2.pos() + i2, h2 = [], o2 = [];
    for (; e2.pos() < n2 && e2.next(); )
      switch (e2.tag()) {
        case r2: {
          const t3 = e2.getUInt32(), r3 = e2.pos() + t3;
          for (; e2.pos() < r3; )
            o2.push(e2.getUInt32());
          break;
        }
        case s2: {
          const t3 = e2.getUInt32(), r3 = e2.pos() + t3;
          for (; e2.pos() < r3; )
            h2.push(e2.getSInt32()), h2.push(e2.getSInt32()), this.hasZ && e2.getSInt32(), this.hasM && e2.getSInt32();
          break;
        }
        case t2:
        default:
          e2.skip();
      }
    let d2 = 0;
    for (const a2 of o2)
      h2[2 * d2] += this._tx, h2[2 * d2 + 1] += this._ty, d2 += a2;
    return this._isPolygons ? this._preprocessPolygon(h2, o2) : new t$6(o2, h2);
  }
}
class l$3 {
  constructor(e2) {
    this.service = e2;
  }
  destroy() {
  }
}
function m$4(e2) {
  return Array.isArray(e2.source);
}
function p$5(e2) {
  return e2 && e2.capabilities && e2.collectionId && e2.layerDefinition && e2.url;
}
function y$3(t2) {
  const { capabilities: r2 } = t2;
  return p$5(t2.source) ? new v(t2) : m$4(t2) ? new f$1(t2) : r2.query.supportsFormatPBF && t$7("featurelayer-pbf") ? new d$3(t2) : new h$5(t2);
}
class f$1 extends l$3 {
  constructor(e2) {
    super(e2), this._portsOpen = f$3(e2.source).then((e3) => this.client = e3);
  }
  destroy() {
    this.client.close(), this.client = null;
  }
  executeQuery(e2, t2) {
    return __async(this, null, function* () {
      yield this._portsOpen;
      const r2 = yield this.client.invoke("queryFeatures", e2.toJSON(), t2);
      return c$5.fromFeatureSet(r2, this.service.objectIdField);
    });
  }
}
class d$3 extends l$3 {
  executeQuery(e2, t2) {
    return __async(this, null, function* () {
      const { data: r2 } = yield d$6(this.service.source, e2, __spreadProps(__spreadValues({}, t2), { query: __spreadValues(__spreadValues({}, this.service.customParameters), t2 == null ? void 0 : t2.query) })), s2 = !e2.quantizationParameters;
      return m$5.fromBuffer(r2, this.service.geometryType, s2);
    });
  }
}
class h$5 extends l$3 {
  executeQuery(e2, i2) {
    return __async(this, null, function* () {
      const { source: a2, capabilities: c2, spatialReference: u2, objectIdField: l2 } = this.service;
      if (e2.quantizationParameters && !c2.query.supportsQuantization) {
        const t2 = e2.clone();
        t2.quantizationParameters = null;
        const { data: c3 } = yield y$5(a2, t2, u2, __spreadProps(__spreadValues({}, i2), { query: __spreadValues(__spreadValues({}, this.service.customParameters), i2 == null ? void 0 : i2.query) })), m3 = oe(c3, l2);
        return se(i2.transform, m3), c$5.fromOptimizedFeatureSet(m3);
      }
      const { data: m2 } = yield y$5(a2, e2, this.service.spatialReference, __spreadProps(__spreadValues({}, i2), { query: __spreadValues(__spreadValues({}, e$1(this.service.customParameters)), i2 == null ? void 0 : i2.query) }));
      return c$5.fromFeatureSet(m2, this.service.objectIdField);
    });
  }
}
class v extends l$3 {
  executeQuery(e2, t2) {
    return __async(this, null, function* () {
      const { capabilities: r2 } = this.service;
      if (e2.quantizationParameters && !r2.query.supportsQuantization) {
        e2.clone().quantizationParameters = null;
        const r3 = yield D(this.service.source, e2, t2);
        return se(t2.transform, r3), c$5.fromOptimizedFeatureSet(r3);
      }
      const i2 = yield D(this.service.source, e2, t2);
      return c$5.fromOptimizedFeatureSet(i2);
    });
  }
}
let u$3 = class extends u$4 {
  constructor(e2) {
    super(e2), this._queue = [], this._onGoingRequest = null, this._abortController = h$7();
  }
  destroy() {
    this.clear();
  }
  get updating() {
    return !this.destroyed && (this._queue.length > 0 || this._onGoingRequest != null);
  }
  clear() {
    if (this.destroyed)
      throw new Error("instance is already destroyed");
    let e2 = this._queue.pop();
    for (; e2; )
      e2.resolver.reject(m$6()), e2 = this._queue.pop();
    this._queue.length = 0, this._abortController.abort(), this._abortController = h$7();
  }
  push(e2) {
    return __async(this, null, function* () {
      if (this.destroyed)
        throw new Error("instance is already destroyed");
      const t2 = B();
      return this._queue.push({ event: e2, resolver: t2 }), this.notifyChange("updating"), Promise.resolve().then(() => {
        this._processNext();
      }), t2.promise;
    });
  }
  _processNext() {
    return __async(this, null, function* () {
      if (this._onGoingRequest)
        return;
      const e2 = [], t2 = new Set(), s2 = new Set(), r2 = new Set();
      let o2 = this._queue.shift();
      for (; o2; ) {
        const { event: { addedFeatures: i3, deletedFeatures: n3, updatedFeatures: u2 }, resolver: a2 } = o2;
        e2.push(a2);
        for (const { objectId: e3, error: o3 } of i3)
          o3 || (t2.add(e3), s2.add(e3), r2.delete(e3));
        for (const { objectId: e3, error: t3 } of u2)
          t3 || (s2.add(e3), r2.delete(e3));
        for (const { objectId: e3, error: o3 } of n3)
          o3 || (t2.has(e3) ? t2.delete(e3) : r2.add(e3), s2.delete(e3));
        o2 = this._queue.shift();
      }
      if (!s2.size && !r2.size)
        return this.notifyChange("updating"), void e2.forEach((e3) => e3());
      const i2 = [], n2 = [];
      s2.size && s2.forEach((e3) => {
        i2.push(e3);
      }), r2.size && r2.forEach((e3) => {
        n2.push(e3);
      }), this._onGoingRequest = Promise.resolve().then(() => this.processEdits(i2, n2, { signal: this._abortController.signal })).catch(() => {
      }), this.notifyChange("updating"), yield this._onGoingRequest, this._onGoingRequest = null, this.notifyChange("updating"), e2.forEach((e3) => e3()), this._queue.length > 0 && this._processNext();
    });
  }
};
e$2([y$6({ constructOnly: true })], u$3.prototype, "processEdits", void 0), e$2([y$6({ readOnly: true })], u$3.prototype, "updating", null), u$3 = e$2([i$2("esri.views.2d.layers.features.controllers.EditsQueue")], u$3);
class t$2 {
  constructor(s2) {
    this.requests = { done: new Array(), stream: new s$1(10) }, this._abortController = new AbortController(), this.didSend = false, this.tile = s2;
  }
  get invalid() {
    return this._invalid;
  }
  get signal() {
    return this._abortController.signal;
  }
  get options() {
    return { signal: this._abortController.signal };
  }
  sentEnd() {
    return this.requests.done.some((e2) => e2.message.end);
  }
  clear() {
    this.requests.done = [];
  }
  applyUpdate(e2) {
    this.requests.done.forEach((s2) => s2.message.status.unset(e2));
  }
  invalidate(e2) {
    switch (e2) {
      case "fields":
        return void (this._invalid === "none" && (this._invalid = "fields"));
      case "all":
        return void (this._invalid = "all");
    }
  }
  done() {
    this._invalid = "none";
  }
  add(e2) {
    var t2;
    e2.message.status = (t2 = e2.message.status) != null ? t2 : t$3.empty(), this.requests.done.push(e2), e2.message.end && (this.resolved = true);
  }
  abort() {
    this._abortController.abort();
  }
}
function l$2(e2, s2) {
  const t2 = new Set();
  return e2 && e2.forEach((e3) => t2.add(e3)), s2 && s2.forEach((e3) => t2.add(e3)), t2.has("*") ? ["*"] : Array.from(t2);
}
class m$3 {
  constructor(e2) {
    this.events = new n$5(), this._pendingEdits = new Set(), this._resolver = B(), this._editsQueue = new u$3({ processEdits: (e3, s2) => this._processEdit(e3, s2) }), this._subscriptions = new Map(), this._outSR = e2.outSR, this._serviceInfo = e2.serviceInfo, this._onTileUpdateMessage = e2.onMessage;
  }
  destroy() {
    this._editsQueue.clear();
  }
  _onMessage(e2) {
    return __async(this, null, function* () {
      var s2;
      const t2 = this._subscriptions.get(e2.id);
      if (!t2)
        return;
      const i2 = __spreadProps(__spreadValues({}, e2), { remove: (s2 = e2.remove) != null ? s2 : [], status: e2.status });
      return this._onTileUpdateMessage(i2, t2.options);
    });
  }
  update(s2, t2) {
    var i2;
    const r2 = t2.fields.length;
    t2.outFields = l$2((i2 = this._schema) == null ? void 0 : i2.outFields, t2.outFields), t2.outFields = t2.outFields.length >= 0.75 * r2 ? ["*"] : t2.outFields, t2.outFields.sort();
    const h2 = m$7(this._schema, t2);
    if (!h2)
      return;
    t$7("esri-2d-update-debug") && console.debug("Applying Update - Source:", h2);
    const d2 = { returnCentroid: t$7("esri-2d-query-centroid-enabled") && this._serviceInfo.geometryType === "esriGeometryPolygon", returnGeometry: true, outFields: t2.outFields, outSpatialReference: this._outSR, orderByFields: [`${this._serviceInfo.objectIdField} ASC`], where: t2.definitionExpression || "1=1", gdbVersion: t2.gdbVersion, historicMoment: t2.historicMoment ? new Date(t2.historicMoment) : null, timeExtent: d$7.fromJSON(t2.timeExtent) }, c2 = this._schema && a$5(h2, "outFields");
    this._schema && y$7(h2, ["timeExtent", "definitionExpression", "gdbVersion", "historicMoment"]) && (s2.why.mesh.push("Layer filter changed"), s2.why.source.push("Layer filter changed"), s2.mesh = true, s2.source = true, s2.queryFilter = true, this._invalidate("all")), c2 && (s2.why.source.push("Layer required fields changed"), s2.source = true, this._invalidate("fields")), m$7(d2, this._queryInfo) && (this._queryInfo = d2), this._schema = t2, this._resolver.resolve();
  }
  whenInitialized() {
    return this._resolver.promise;
  }
  applyUpdate(e2) {
    return __async(this, null, function* () {
      e2.queryFilter ? this.refresh() : (this._subscriptions.forEach((s2) => s2.applyUpdate(e2)), yield this.resend());
    });
  }
  refresh() {
    for (const e2 of this._tiles())
      this.unsubscribe(e2), this.subscribe(e2);
  }
  _tiles() {
    const e2 = [];
    return this._subscriptions.forEach((s2) => e2.push(s2.tile)), e2;
  }
  pause() {
    this._subscriptions.forEach((e2) => e2.abort());
  }
  subscribe(e2) {
    const s2 = new t$2(e2);
    this._subscriptions.set(e2.id, s2);
  }
  unsubscribe(e2) {
    const t2 = this.get(e2.id);
    r$1(t2) && t2.abort(), this._subscriptions.delete(e2.id);
  }
  forEachPendingEdit(e2) {
    Array.from(this._subscriptions.values()).some((e3) => e3.invalid !== "none") ? this._pendingEdits.forEach(e2) : this._pendingEdits.clear();
  }
  edit(e2) {
    return __async(this, null, function* () {
      return this._editsQueue.push(e2);
    });
  }
  createQuery(e2 = {}) {
    return new R$3(__spreadValues(__spreadValues({}, this._queryInfo), e2));
  }
  get(e2) {
    return this._subscriptions.has(e2) ? this._subscriptions.get(e2) : null;
  }
  queryLastEditDate() {
    return __async(this, null, function* () {
      throw new Error("Service does not support query type");
    });
  }
  query(e2, s2) {
    return __async(this, null, function* () {
      throw new Error("Service does not support query");
    });
  }
  _invalidate(e2) {
    this._subscriptions.forEach((s2) => s2.invalidate(e2));
  }
  _processEdit(e2, s2) {
    return __async(this, null, function* () {
      s2.forEach((e3) => {
        this._pendingEdits.has(e3) && this._pendingEdits.delete(e3);
      }), e2.forEach((e3) => this._pendingEdits.add(e3));
      const t2 = Array.from(this._subscriptions.values()).map(({ tile: e3 }) => e3).map((s3) => {
        const t3 = this.createTileQuery(s3);
        return t3.objectIds = e2, { tile: s3, query: t3 };
      }).map((_0) => __async(this, [_0], function* ({ tile: e3, query: s3 }) {
        return { tile: e3, result: yield this.query(s3) };
      })), r2 = (yield s$2(t2)).map((_0) => __async(this, [_0], function* ({ tile: t3, result: i2 }) {
        if (!i2.hasFeatures && !s2.length && !e2.length)
          return;
        return this._subscriptions.get(t3.key.id) ? this._onMessage({ type: "update", id: t3.key.id, addOrUpdate: i2, remove: [...e2, ...s2], end: true, status: t$3.empty() }) : void 0;
      }));
      yield Promise.all(r2), this._invalidate("all");
    });
  }
}
const y$2 = n$3.getLogger("esri.views.2d.layers.features.sources.BaseFeatureSource"), h$4 = 4;
class m$2 extends m$3 {
  constructor(r2) {
    super(r2), this.type = "feature", this.mode = "on-demand", this._adapter = y$3(r2.serviceInfo), this._queue = new _$3({ concurrency: 8, process: (r3) => __async(this, null, function* () {
      if (a$6(r3), r$1(r3.tile)) {
        const t2 = r3.tile.key.id, { tile: s2, signal: i2 } = r3, o2 = { query: t$7("esri-tiles-debug") ? { tile: t2.replace(/\//g, "."), depth: r3.depth } : void 0, signal: i2, transform: s2.transform };
        return this._adapter.executeQuery(r3.query, o2);
      }
      return this._adapter.executeQuery(r3.query, r3);
    }) }), this._patchQueue = new _$3({ concurrency: 8, process: (r3) => __async(this, null, function* () {
      if (a$6(r3), r$1(r3.tile)) {
        const t2 = r3.tile.key.id, { tile: s2, signal: i2 } = r3, o2 = { query: t$7("esri-tiles-debug") ? { tile: t2.replace(/\//g, "."), depth: r3.depth } : void 0, signal: i2, transform: s2.transform };
        return this._adapter.executeQuery(r3.query, o2);
      }
      return this._adapter.executeQuery(r3.query, r3);
    }) });
  }
  destroy() {
    super.destroy(), this._adapter.destroy(), this._queue.destroy(), this._patchQueue.destroy();
  }
  get updating() {
    return !!this._queue.length;
  }
  get maxRecordCountFactor() {
    const { query: e2 } = this._serviceInfo.capabilities;
    return e2.supportsMaxRecordCountFactor ? h$4 : null;
  }
  get maxPageSize() {
    var e2;
    const { query: t2 } = this._serviceInfo.capabilities;
    return ((e2 = t2.maxRecordCount) != null ? e2 : 8e3) * c$4(this.maxRecordCountFactor, 1);
  }
  get pageSize() {
    return Math.min(8e3, this.maxPageSize);
  }
  enableEvent(e2, t2) {
  }
  subscribe(e2) {
    super.subscribe(e2), this._fetchDataTile(e2).catch((t2) => {
      g$5(t2) || y$2.error(new s("mapview-query-error", "Encountered error when fetching tile", { tile: e2, error: t2 }));
    });
  }
  unsubscribe(e2) {
    super.unsubscribe(e2);
  }
  resume() {
    this._queue.resume();
  }
  forEachRequest(e2, t2) {
    const r2 = this._subscriptions.get(e2), { requests: s2, signal: i2 } = r2;
    for (const o2 of s2.done)
      t2(o2.message, { signal: i2 });
  }
  query(e2, t2) {
    return __async(this, null, function* () {
      return this._adapter.executeQuery(e2, t2);
    });
  }
  queryLastEditDate() {
    return __async(this, null, function* () {
      const e2 = this._serviceInfo.source, t2 = __spreadProps(__spreadValues({}, e2.query), { f: "json" });
      return (yield U(e2.path, { query: t2, responseType: "json" })).data.editingInfo.lastEditDate;
    });
  }
  createTileQuery(e2) {
    const t2 = this.createQuery();
    return t2.quantizationParameters = e2.getQuantizationParameters(), t2.resultType = "tile", t2.geometry = e2.extent, this._serviceInfo.geometryType === "esriGeometryPolyline" && (t2.maxAllowableOffset = e2.resolution), this._serviceInfo.capabilities.query.supportsQuantization || (t2.quantizationParameters = null, t2.maxAllowableOffset = e2.resolution), t2;
  }
  _createQuery(e2, t2) {
    const r2 = new R$3(__spreadValues(__spreadValues({}, this._queryInfo), t2));
    return this._serviceInfo.capabilities.query.supportsQuantization || (t2.quantizationParameters = null, r2.maxAllowableOffset = e2.resolution), t2.quantizationParameters && this._serviceInfo.geometryType === "esriGeometryPolyline" && (r2.maxAllowableOffset = e2.resolution), r2.resultType = "tile", r2.geometry = e2.extent, r2;
  }
  _executePatchQuery(e2, r2, s2, i2) {
    return __async(this, null, function* () {
      const o2 = r2.clone();
      o2.outFields = [this._serviceInfo.objectIdField, ...s2], o2.returnCentroid = false, o2.returnGeometry = false;
      const a2 = r$1(o2.start) ? o2.start / 8e3 : 0, n2 = i2.signal;
      return this._patchQueue.push({ tile: e2, query: o2, signal: n2, depth: a2 });
    });
  }
  _resend(e2, r2) {
    return __async(this, null, function* () {
      const { query: i2, message: o2 } = e2, n2 = r$1(i2.outFields) ? i2.outFields : [], u2 = this._queryInfo.outFields, c2 = u2.filter((e3) => n2.indexOf(e3) === -1);
      if (!t$4(o2.addOrUpdate))
        if (c2.length)
          try {
            const e3 = this._subscriptions.get(o2.id).tile, t2 = yield this._executePatchQuery(e3, i2, c2, r2);
            a$6(r2), i2.outFields = u2, o2.addOrUpdate.joinAttributes(t2), this._onMessage(__spreadProps(__spreadValues({}, o2), { end: o2.end, type: "append" }));
          } catch (l2) {
          }
        else
          this._onMessage(__spreadProps(__spreadValues({}, o2), { end: o2.end, type: "append" }));
    });
  }
  resend() {
    return __async(this, null, function* () {
      let e2 = 0, t2 = false;
      const r2 = [];
      for (this._subscriptions.forEach((e3) => {
        e3.requests.done.length || this._onMessage({ id: e3.tile.id, addOrUpdate: null, end: false, type: "append" });
      }); !t2; )
        t2 = true, this._subscriptions.forEach(({ requests: s2, signal: i2 }) => {
          s2.done.length > e2 && (t2 = false, r2.push(this._resend(s2.done[e2], { signal: i2 })));
        }), e2++;
      yield Promise.all(r2);
    });
  }
}
const i = t$7("esri-mobile"), a$3 = { maxDrillLevel: i ? 1 : 4, maxRecordCountFactor: i ? 1 : 3 };
class o$1 extends m$2 {
  constructor(e2) {
    super(e2);
  }
  _fetchDataTile(e2) {
    return __async(this, null, function* () {
      const s2 = this._serviceInfo.capabilities.query.supportsMaxRecordCountFactor, i2 = this._subscriptions.get(e2.key.id), o2 = i2.signal, n2 = e2.getQuantizationParameters();
      let c2 = 0;
      const d2 = (u2, p2) => __async(this, null, function* () {
        const l2 = this._queryInfo, m2 = this._createQuery(u2, { maxRecordCountFactor: s2 ? a$3.maxRecordCountFactor : void 0, returnExceededLimitFeatures: false, quantizationParameters: n2 });
        c2++;
        try {
          const r2 = yield this._queue.push({ tile: e2, query: m2, signal: o2, depth: p2 });
          if (c2--, a$6(o2), !r2)
            return;
          if (l2 !== this._queryInfo)
            return void d2(u2, p2);
          if (r2.exceededTransferLimit && p2 < a$3.maxDrillLevel) {
            for (const e3 of u2.createChildTiles())
              d2(e3, p2 + 1);
            return;
          }
          const s3 = { id: e2.id, addOrUpdate: r2, end: c2 === 0, type: "append" };
          i2.add({ query: m2, message: s3 }), this._onMessage(s3);
        } catch (h2) {
          g$5(h2) || this._onMessage({ id: e2.id, addOrUpdate: null, end: true, type: "append" });
        }
      });
      d2(e2, 0);
    });
  }
}
const o = "__esri_stream_id__", d$2 = "__esri_timestamp__", a$2 = 1e3;
class h$3 {
  constructor(t2, e2, s2, i2, r2 = 128) {
    this._trackIdToObservations = new Map(), this._idCounter = 0, this._lastPurge = performance.now(), this._addOrUpdated = new Map(), this._removed = [], this._maxAge = 0, this._timeInfo = s2, this._purgeOptions = i2, this.store = t2, this.objectIdField = e2, this.purgeInterval = r2, this._useGeneratedIds = this.objectIdField === o;
  }
  add(s2) {
    if (this._useGeneratedIds) {
      const t2 = this._nextId();
      s2.attributes[this.objectIdField] = t2, s2.objectId = t2;
    } else
      s2.objectId = s2.attributes[this.objectIdField];
    if (this._addOrUpdated.set(s2.objectId, s2), this._maxAge = Math.max(this._maxAge, s2.attributes[this._timeInfo.startTimeField]), !this._timeInfo.trackIdField)
      return t$4(this._trackIdLessObservations) && (this._trackIdLessObservations = new s$1(1e5)), void this._trackIdLessObservations.enqueue(s2.objectId);
    const o2 = s2.attributes[this._timeInfo.trackIdField];
    if (!this._trackIdToObservations.has(o2)) {
      const t2 = r$1(this._purgeOptions) && this._purgeOptions.maxObservations != null ? this._purgeOptions.maxObservations : a$2, s3 = e$3(t2, 0, a$2);
      this._trackIdToObservations.set(o2, new s$1(s3));
    }
    const d2 = this._trackIdToObservations.get(o2).enqueue(s2.objectId);
    r$1(d2) && (this._addOrUpdated.has(d2) ? this._addOrUpdated.delete(d2) : this._removed.push(d2));
  }
  checkForUpdates() {
    const t2 = this._getToAdd(), s2 = this._getToRemove(), i2 = performance.now();
    i2 - this._lastPurge >= this.purgeInterval && (this._purge(i2), this._lastPurge = i2);
    const r2 = [];
    if (r$1(s2))
      for (const o2 of s2) {
        const t3 = this.store.removeById(o2);
        r$1(t3) && r2.push(t3);
      }
    if (r$1(t2))
      for (const e2 of t2)
        e2.attributes[d$2] = i2, this.store.add(e2);
    (t2 || r2) && this.store.update(t2, r2);
  }
  _getToAdd() {
    if (!this._addOrUpdated.size)
      return null;
    const t2 = new Array(this._addOrUpdated.size);
    let e2 = 0;
    return this._addOrUpdated.forEach((s2) => t2[e2++] = s2), this._addOrUpdated.clear(), t2;
  }
  _getToRemove() {
    const t2 = this._removed;
    return this._removed.length ? (this._removed = [], t2) : null;
  }
  _nextId() {
    const t2 = this._idCounter;
    return this._idCounter = (this._idCounter + 1) % 4294967294 + 1, t2;
  }
  _purge(t2) {
    const s2 = this._purgeOptions;
    r$1(s2) && (this._purgeSomeByDisplayCount(s2), this._purgeByAge(s2), this._purgeByAgeReceived(t2, s2), this._purgeTracks());
  }
  _purgeSomeByDisplayCount(t2) {
    if (!t2.displayCount)
      return;
    let i2 = this.store.size;
    if (i2 > t2.displayCount) {
      if (this._timeInfo.trackIdField) {
        for (const e2 of this._trackIdToObservations.values())
          if (i2 > t2.displayCount && e2.size) {
            const t3 = e$1(e2.dequeue());
            this._removed.push(t3), i2--;
          }
      }
      if (r$1(this._trackIdLessObservations)) {
        let s2 = i2 - t2.displayCount;
        for (; s2-- > 0; ) {
          const t3 = this._trackIdLessObservations.dequeue();
          r$1(t3) && this._removed.push(t3);
        }
      }
    }
  }
  _purgeByAge(t2) {
    var e2;
    if (!t2.age || (e2 = this._timeInfo) == null || !e2.startTimeField)
      return;
    const s2 = 60 * t2.age * 1e3, i2 = this._maxAge - s2;
    this.store.forEach((t3) => {
      t3.attributes[this._timeInfo.startTimeField] < i2 && this._removed.push(t3.objectId);
    });
  }
  _purgeByAgeReceived(t2, e2) {
    if (!e2.ageReceived)
      return;
    const s2 = t2 + 60 * e2.ageReceived * 1e3;
    this.store.forEach((t3) => {
      t3.attributes[d$2] < s2 && this._removed.push(t3.objectId);
    });
  }
  _purgeTracks() {
    this._trackIdToObservations.forEach((t2, e2) => {
      t2.size === 0 && this._trackIdToObservations.delete(e2);
    });
  }
}
let t$1 = class extends n$5.EventedMixin(d$8) {
  onFeature(r2) {
    this.emit("feature", r2);
  }
};
t$1 = e$2([i$2("esri.layers.graphics.sources.connections.StreamConnection")], t$1);
var c$2 = t$1;
const p$4 = n$3.getLogger("esri.layers.graphics.sources.connections.WebSocketConnection");
var h$2;
!function(e2) {
  e2[e2.CONNECTING = 0] = "CONNECTING", e2[e2.OPEN = 1] = "OPEN", e2[e2.CLOSING = 2] = "CLOSING", e2[e2.CLOSED = 3] = "CLOSED";
}(h$2 || (h$2 = {}));
let u$2 = class extends c$2 {
  constructor(e2) {
    super(), this.errorString = null;
    const { geometryType: t2, spatialReference: o2, sourceSpatialReference: r2 } = e2;
    this._config = e2, this._featureZScaler = t$8(t2, r2, o2), this._open();
  }
  _open() {
    return __async(this, null, function* () {
      yield this._tryCreateWebSocket(), this.destroyed || (yield this._handshake());
    });
  }
  destroy() {
    r$1(this._websocket) && (this._websocket.onopen = null, this._websocket.onclose = null, this._websocket.onerror = null, this._websocket.onmessage = null, this._websocket.close()), this._websocket = null;
  }
  get connectionStatus() {
    if (t$4(this._websocket))
      return "disconnected";
    switch (this._websocket.readyState) {
      case h$2.CONNECTING:
      case h$2.OPEN:
        return "connected";
      case h$2.CLOSING:
      case h$2.CLOSED:
        return "disconnected";
    }
  }
  _tryCreateWebSocket() {
    return __async(this, arguments, function* (e2 = this._config.source.path, t2 = 1e3, o2 = 0) {
      try {
        if (this.destroyed)
          return;
        this._websocket = yield this._createWebSocket(e2), this.notifyChange("connectionStatus");
      } catch (r2) {
        const s$12 = t2 / 1e3;
        return this._config.maxReconnectionAttempts && o2 >= this._config.maxReconnectionAttempts ? (p$4.error(new s("websocket-connection", "Exceeded maxReconnectionAttempts attempts. No further attempts will be made")), void this.destroy()) : (p$4.error(new s("websocket-connection", `Failed to connect. Attempting to reconnect in ${s$12}s`, r2)), yield C$3(t2), this._tryCreateWebSocket(e2, Math.min(1.5 * t2, 1e3 * this._config.maxReconnectionInterval), o2 + 1));
      }
    });
  }
  _createWebSocket(e2) {
    const t2 = new WebSocket(e2), o2 = new Promise((e3, o3) => {
      t2.onopen = () => e3(t2), t2.onclose = (e4) => o3(e4);
    });
    return o2.then(() => {
      if (this.destroyed)
        return t2.onclose = () => {
        }, void t2.close();
      t2.onclose = (e3) => this._onClose(e3), t2.onerror = (e3) => this._onError(e3), t2.onmessage = (e3) => this._onMessage(e3);
    }), o2;
  }
  _handshake(e2 = 1e4) {
    return __async(this, null, function* () {
      const t2 = this._websocket;
      if (t$4(t2))
        return;
      const r2 = B(), s$12 = t2.onmessage, { filter: n2, outFields: i2, spatialReference: l2 } = this._config;
      return r2.timeout(e2), t2.onmessage = (e3) => {
        var o2;
        let a2 = null;
        try {
          a2 = JSON.parse(e3.data);
        } catch (d2) {
        }
        a2 && typeof a2 == "object" || (p$4.error(new s("websocket-connection", "Protocol violation. Handshake failed - malformed message", e3.data)), r2.reject(), this.destroy()), ((o2 = a2.spatialReference) == null ? void 0 : o2.wkid) !== (l2 == null ? void 0 : l2.wkid) && (p$4.error(new s("websocket-connection", `Protocol violation. Handshake failed - expected wkid of ${l2.wkid}`, e3.data)), r2.reject(), this.destroy()), a2.format !== "json" && (p$4.error(new s("websocket-connection", "Protocol violation. Handshake failed - format is not set", e3.data)), r2.reject(), this.destroy()), n2 && a2.filter !== n2 && p$4.error(new s("websocket-connection", "Tried to set filter, but server doesn't support it")), i2 && a2.outFields !== i2 && p$4.error(new s("websocket-connection", "Tried to set outFields, but server doesn't support it")), t2.onmessage = s$12, r2.resolve();
      }, t2.send(JSON.stringify({ filter: n2, outFields: i2, format: "json", spatialReference: { wkid: l2.wkid } })), r2.promise;
    });
  }
  _onMessage(e2) {
    try {
      const t2 = JSON.parse(e2.data);
      if (t2.type !== "featureResult")
        throw new s("websocket-connection", "Protocol violation - Expected to find message of type 'featureResult'", t2);
      for (const e3 of t2.features)
        this._featureZScaler && this._featureZScaler(e3.geometry), this.onFeature(e3);
    } catch (t2) {
      return p$4.error(new s("websocket-connection", "Failed to parse message", t2)), void this.destroy();
    }
  }
  _onError(e2) {
    const t2 = "Encountered an error over WebSocket connection";
    this._set("errorString", t2), p$4.error("websocket-connection", t2);
  }
  _onClose(e2) {
    this._websocket = null, this.notifyChange("connectionStatus"), e2.code !== 1e3 && p$4.error("websocket-connection", `WebSocket closed unexpectedly with error code ${e2.code}`), this.destroyed || this._open();
  }
};
e$2([y$6()], u$2.prototype, "connectionStatus", null), e$2([y$6()], u$2.prototype, "errorString", void 0), u$2 = e$2([i$2("esri.layers.graphics.sources.connections.WebSocketConnection")], u$2);
const p$3 = n$3.getLogger("esri.layers.graphics.sources.connections.GeoEventConnection"), m$1 = 1e4, g$1 = { maxQueryDepth: 5, maxRecordCountFactor: 3 };
let _$1 = class extends u$2 {
  constructor(e2) {
    super(__spreadValues(__spreadValues({}, g$1), e2));
  }
  _open() {
    return __async(this, null, function* () {
      const e2 = yield this._fetchServiceDefinition(this._config.source);
      e2.timeInfo.trackIdField || p$3.warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect.");
      const t2 = yield this._fetchWebSocketUrl(e2.streamUrls, this._config.spatialReference);
      this._buddyServicesQuery || (this._buddyServicesQuery = this._queryBuddyServices()), yield this._buddyServicesQuery, yield this._tryCreateWebSocket(t2);
      const { filter: r2, outFields: o2 } = this._config;
      this.destroyed || this._setFilter(r2, o2);
    });
  }
  _onMessage(e2) {
    let t2;
    try {
      t2 = this._enrich(JSON.parse(e2.data)), this._featureZScaler && this._featureZScaler(t2.geometry);
    } catch (r2) {
      return void p$3.error(new s("geoevent-connection", "Failed to parse message", r2));
    }
    this.onFeature(t2);
  }
  _fetchServiceDefinition(e2) {
    return __async(this, null, function* () {
      const t2 = { f: "json" }, r2 = U(e2.path, { query: t2, responseType: "json" }), o2 = (yield r2).data;
      return this._serviceDefinition = o2, o2;
    });
  }
  _fetchWebSocketUrl(e2, t2) {
    return __async(this, null, function* () {
      const r2 = e2[0], { urls: o2, token: s2 } = r2;
      return `${this._inferWebSocketBaseUrl(o2)}/subscribe?outSR=${t2.wkid}${s2 ? "&token=" + s2 : ""}`;
    });
  }
  _inferWebSocketBaseUrl(e2) {
    if (e2.length === 1)
      return e2[0];
    for (const t2 of e2)
      if (t2.indexOf("wss") !== -1)
        return t2;
    return p$3.error(new s("geoevent-connection", "Unable to infer WebSocket url", e2)), null;
  }
  _setFilter(e2, r2) {
    return __async(this, null, function* () {
      const o2 = this._websocket;
      if (t$4(o2) || t$4(e2) && t$4(r2))
        return;
      const s$12 = JSON.stringify({ filter: this._serializeFilter(e2, r2) });
      let i2 = false;
      const n2 = B(), u2 = () => {
        i2 || (this.destroyed || this._websocket !== o2 || p$3.error(new s("geoevent-connection", "Server timed out when setting filter")), n2.reject());
      }, f2 = (e3) => {
        const t2 = JSON.parse(e3.data);
        t2.filter && (t2.error && (p$3.error(new s("geoevent-connection", "Failed to set service filter", t2.error)), this._set("errorString", `Could not set service filter - ${t2.error}`), n2.reject(t2.error)), o2.onmessage = this._onMessage.bind(this), i2 = true, n2.resolve());
      };
      return o2.onmessage = f2, o2.send(s$12), setTimeout(u2, m$1), n2.promise;
    });
  }
  _serializeFilter(e2, o2) {
    const s$12 = {};
    if (t$4(e2) && t$4(o2))
      return s$12;
    if (r$1(e2) && e2.geometry)
      try {
        const t2 = p$6(e2.geometry);
        if (t2.type !== "extent")
          throw new s(`Expected extent but found type ${t2.type}`);
        s$12.geometry = JSON.stringify(t2.shiftCentralMeridian());
      } catch (i2) {
        p$3.error(new s("geoevent-connection", "Encountered an error when setting connection geometryDefinition", i2));
      }
    return r$1(e2) && e2.where && e2.where !== "1 = 1" && (s$12.where = e2.where), r$1(o2) && (s$12.outFields = o2.join(",")), s$12;
  }
  _enrich(e2) {
    if (!this._relatedFeatures)
      return e2;
    const t2 = this._serviceDefinition.relatedFeatures.joinField, r2 = e2.attributes[t2];
    if (!this._relatedFeatures.has(r2))
      return p$3.warn("geoevent-connection", "Feature join failed. Is the join field configured correctly?", e2), e2;
    const { attributes: o2, geometry: s$12 } = this._relatedFeatures.get(r2);
    for (const i2 in o2)
      e2.attributes[i2] = o2[i2];
    return s$12 && (e2.geometry = s$12), e2.geometry || e2.centroid || p$3.error(new s("geoevent-connection", "Found malformed feature - no geometry found", e2)), e2;
  }
  _queryBuddyServices() {
    return __async(this, null, function* () {
      try {
        const { relatedFeatures: e2, keepLatestArchive: t2 } = this._serviceDefinition, r2 = this._queryRelatedFeatures(e2), o2 = this._queryArchive(t2);
        yield r2;
        const s2 = yield o2;
        if (!s2)
          return;
        for (const i2 of s2.features)
          this.onFeature(this._enrich(i2));
      } catch (e2) {
        p$3.error(new s("geoevent-connection", "Encountered an error when querying buddy services", { error: e2 }));
      }
    });
  }
  _queryRelatedFeatures(e2) {
    return __async(this, null, function* () {
      if (!e2)
        return;
      const t2 = yield this._queryBuddy(e2.featuresUrl);
      this._addRelatedFeatures(t2);
    });
  }
  _queryArchive(e2) {
    return __async(this, null, function* () {
      if (e2)
        return this._queryBuddy(e2.featuresUrl);
    });
  }
  _queryBuddy(e2) {
    return __async(this, null, function* () {
      const t2 = new (yield import("./vendor.74d5941c.js").then(function(n3) {
        return n3.jw;
      })).default({ url: e2 }), { capabilities: r2 } = yield t2.load(), i2 = r2.query.supportsMaxRecordCountFactor, n2 = r2.query.supportsPagination, a2 = r2.query.supportsCentroid, c2 = this._config.maxRecordCountFactor, f2 = t2.capabilities.query.maxRecordCount, d2 = i2 ? f2 * c2 : f2, y2 = new R$3();
      if (y2.outFields = c$4(this._config.outFields, ["*"]), y2.where = c$4(g$6(this._config.filter, "where"), "1=1"), y2.returnGeometry = true, y2.returnExceededLimitFeatures = true, y2.outSpatialReference = k$2.fromJSON(this._config.spatialReference), a2 && (y2.returnCentroid = true), i2 && (y2.maxRecordCountFactor = c2), n2)
        return y2.num = d2, t2.destroy(), this._queryPages(e2, y2);
      const p2 = yield y$5(e2, y2, this._config.sourceSpatialReference);
      return t2.destroy(), p2.data;
    });
  }
  _queryPages(_0, _1) {
    return __async(this, arguments, function* (e2, t2, o2 = [], s2 = 0) {
      t2.start = r$1(t2.num) ? s2 * t2.num : null;
      const { data: i2 } = yield y$5(e2, t2, this._config.sourceSpatialReference);
      return i2.exceededTransferLimit && s2 < this._config.maxQueryDepth ? (i2.features.forEach((e3) => o2.push(e3)), this._queryPages(e2, t2, o2, s2 + 1)) : (o2.forEach((e3) => i2.features.push(e3)), i2);
    });
  }
  _addRelatedFeatures(e2) {
    const t2 = new Map(), r2 = e2.features, o2 = this._serviceDefinition.relatedFeatures.joinField;
    for (const s2 of r2) {
      const e3 = s2.attributes[o2];
      t2.set(e3, s2);
    }
    this._relatedFeatures = t2;
  }
};
_$1 = e$2([i$2("esri.layers.graphics.sources.connections.GeoEventConnection")], _$1);
var w$1 = _$1;
function t(t2, o2, r2, c2, i2, s2, a2) {
  const p2 = t2.path.indexOf("wss://") === 0 || t2.path.indexOf("ws://") === 0, f2 = { source: t2, sourceSpatialReference: o2, spatialReference: r2, geometryType: c2, filter: i2, maxReconnectionAttempts: s2, maxReconnectionInterval: a2 };
  return p2 ? new u$2(f2) : new w$1(f2);
}
const p$2 = 2500;
function l$1(e2, s2) {
  const r2 = e2.weakClone(), i2 = p$7(s2, e2.geometry.coords[0]), a2 = I$2(s2, e2.geometry.coords[1]);
  return r2.geometry = new t$6([], [i2, a2]), r2;
}
function m(e2) {
  switch (e2) {
    case "esriGeometryPoint":
      return l$1;
    case "esriGeometryPolygon":
    case "esriGeometryPolyline":
    default:
      return (s2, n2) => {
        const o2 = s2.weakClone(), i2 = new t$6(), a2 = false, c2 = false, d2 = ce(i2, s2.geometry, a2, c2, e2, n2, false, false);
        return o2.geometry = d2, o2;
      };
  }
}
function _(e2) {
  switch (e2) {
    case "esriGeometryPoint":
      return (e3) => ({ minX: e3.geometry.coords[0], minY: e3.geometry.coords[1], maxX: e3.geometry.coords[0], maxY: e3.geometry.coords[1] });
    default:
      return (e3) => {
        let t2 = 1 / 0, s2 = 1 / 0, r2 = -1 / 0, n2 = -1 / 0;
        return e3.geometry.forEachVertex((e4, o2) => {
          t2 = Math.min(t2, e4), s2 = Math.min(s2, o2), r2 = Math.max(r2, e4), n2 = Math.max(n2, o2);
        }), { minX: t2, minY: s2, maxX: r2, maxY: n2 };
      };
  }
}
function f(e2, t2) {
  const s2 = i$3(9, _(t2));
  return s2.load(e2), s2;
}
function g(e2, t2) {
  return e2.search({ minX: t2.bounds[0], minY: t2.bounds[1], maxX: t2.bounds[2], maxY: t2.bounds[3] });
}
class y$1 {
  constructor(e2, t2) {
    this.onUpdate = e2, this._geometryType = t2, this._objectIdToFeature = new Map();
  }
  get _features() {
    const e2 = [];
    return this._objectIdToFeature.forEach((t2) => e2.push(t2)), e2;
  }
  add(e2) {
    this._objectIdToFeature.set(e2.objectId, e2), this._index = null;
  }
  get(e2) {
    return this._objectIdToFeature.has(e2) ? this._objectIdToFeature.get(e2) : null;
  }
  forEach(e2) {
    this._objectIdToFeature.forEach(e2);
  }
  search(e2) {
    return this._index || (this._index = f(this._features, this._geometryType)), g(this._index, e2);
  }
  removeById(e2) {
    const t2 = this._objectIdToFeature.get(e2);
    return t2 ? (this._objectIdToFeature.delete(e2), this._index = null, t2) : null;
  }
  update(e2, t2) {
    this.onUpdate(e2, t2);
  }
  get size() {
    return this._objectIdToFeature.size;
  }
}
class b extends m$3 {
  constructor(e2) {
    super(e2), this.type = "geoevent", this._dataReceiveEventEnabled = false, this._level = 0, this._updateInfo = { websocket: 0, client: 0 };
    const { outSR: t$12 } = e2, { geometryType: s2, objectIdField: r2, timeInfo: n2, purgeOptions: o2, source: i2, spatialReference: a2, serviceFilter: u2, maxReconnectionAttempts: h2, maxReconnectionInterval: l2, updateInterval: _2 } = e2.serviceInfo, f2 = new y$1(this._onUpdate.bind(this), s2), g2 = new h$3(f2, r2, n2, o2), b2 = t(i2, a2, t$12, s2, u2, h2, l2);
    this._store = f2, this._manager = g2, this._connection = b2, this._quantize = m(s2), this._handles = [this._connection.on("feature", (e3) => this._onFeature(e3)), this._connection.watch("connectionStatus", (e3) => this.events.emit("connectionStatus", e3)), this._connection.watch("errorString", (e3) => this.events.emit("errorString", e3))];
    let v2 = performance.now();
    this._updateIntervalId = setInterval(() => {
      const t2 = performance.now(), s3 = t2 - v2;
      if (s3 > p$2) {
        v2 = t2;
        const e3 = Math.round(this._updateInfo.client / (s3 / 1e3)), r3 = Math.round(this._updateInfo.websocket / (s3 / 1e3));
        this._updateInfo.client = 0, this._updateInfo.websocket = 0, this.events.emit("updateRate", { client: e3, websocket: r3 });
      }
      e2.canAcceptRequest() && this._manager.checkForUpdates();
    }, _2);
  }
  destroy() {
    super.destroy(), clearInterval(this._updateIntervalId), this._handles.forEach((e2) => e2.remove()), this._connection.destroy();
  }
  _fetchDataTile() {
  }
  resume() {
  }
  enableEvent(e2, t2) {
    e2 === "data-received" && (this._dataReceiveEventEnabled = t2);
  }
  get updating() {
    return false;
  }
  subscribe(e2) {
    super.subscribe(e2);
    const t2 = this._subscriptions.get(e2.id);
    this._level = e2.level;
    const s2 = this._getTileFeatures(e2);
    this._onMessage({ type: "append", id: e2.key.id, addOrUpdate: s2, end: true }), t2.didSend = true;
  }
  unsubscribe(e2) {
    super.unsubscribe(e2);
  }
  forEachRequest(t2, s2) {
    const r2 = this._subscriptions.get(t2), { tile: n2, signal: o2 } = r2, i2 = { type: "append", tile: n2, id: t2, addOrUpdate: this._getTileFeatures(n2), end: true };
    s2(i2, { signal: o2 }), r2.requests.stream.entries.forEach((t3) => {
      r$1(t3) && s2(t3, { signal: o2 });
    });
  }
  createTileQuery(e2) {
    throw new Error("Service does not support tile  queries");
  }
  resend() {
    return __async(this, null, function* () {
      this._subscriptions.forEach((e2) => {
        const { tile: t2 } = e2, s2 = { type: "append", id: t2.id, addOrUpdate: this._getTileFeatures(t2), end: true };
        this._onMessage(s2);
      });
    });
  }
  _getTileFeatures(e2) {
    const t2 = this._store.search(e2).map((t3) => this._quantize(t3, e2.transform));
    return c$5.fromOptimizedFeatures(t2, this._serviceInfo.geometryType, e2.transform);
  }
  _onFeature(e2) {
    this._updateInfo.websocket++;
    try {
      this._dataReceiveEventEnabled && this.events.emit("feature", e2);
      const t2 = J(e2, this._serviceInfo.geometryType, false, false, this._serviceInfo.objectIdField);
      this._manager.add(t2);
    } catch (t2) {
    }
  }
  _onUpdate(t2, s2) {
    r$1(t2) && (this._updateInfo.client += t2.length), this._subscriptions.forEach((e2, t3) => {
      e2.didSend && e2.tile.level === this._level && this._onMessage({ type: "append", id: t3, addOrUpdate: null, clear: true, end: false });
    }), this._subscriptions.forEach((e2, t3) => {
      if (!e2.didSend || e2.tile.level !== this._level)
        return;
      const s3 = e2.tile, r2 = { type: "append", id: t3, addOrUpdate: this._getTileFeatures(s3), remove: [], end: true, status: t$3.empty() };
      e2.requests.stream.enqueue(r2), this._onMessage(r2);
    });
  }
}
const n$1 = n$3.getLogger("esri.views.2d.layers.features.sources.FeatureSource");
class d$1 extends m$2 {
  constructor(e2) {
    super(e2);
  }
  _fetchDataTile(e2) {
    return __async(this, null, function* () {
      const t2 = 6, o2 = 20, i2 = this._subscriptions.get(e2.key.id);
      let d2 = false, c2 = 0, u2 = 0;
      const p2 = (t3, r2) => {
        u2--, a$6(i2);
        const a2 = e2.id, o3 = t3.reader, n2 = t3.query;
        if (!o3.exceededTransferLimit) {
          if (d2 = true, r2 !== 0 && !o3.hasFeatures) {
            const e4 = { id: a2, addOrUpdate: o3, end: u2 === 0, type: "append" };
            return i2.add({ message: e4, query: n2 }), void this._onMessage(e4);
          }
          const e3 = { id: a2, addOrUpdate: o3, end: u2 === 0, type: "append" };
          return i2.add({ message: e3, query: n2 }), void this._onMessage(e3);
        }
        const c3 = { id: a2, addOrUpdate: o3, end: d2 && u2 === 0, type: "append" };
        i2.add({ message: c3, query: n2 }), this._onMessage(c3);
      };
      let h2 = 0, m2 = 0;
      for (; !d2 && m2++ < o2; ) {
        let o3;
        for (let t3 = 0; t3 < h2 + 1; t3++) {
          const t4 = c2++;
          u2++, o3 = this._fetchDataTilePage(e2, t4, i2).then((e3) => e3 && p2(e3, t4)).catch((t5) => {
            d2 = true, g$5(t5) || (n$1.error(new s("mapview-query-error", "Encountered error when fetching tile", { tile: e2, error: t5 })), this._onMessage({ id: e2.id, addOrUpdate: null, end: d2, type: "append" }));
          });
        }
        yield o3, a$6(i2), h2 = Math.min(h2 + 2, t2);
      }
    });
  }
  _fetchDataTilePage(t2, r2, a2) {
    return __async(this, null, function* () {
      const i2 = this._queryInfo, n2 = { start: this.pageSize * r2, num: this.pageSize, returnExceededLimitFeatures: true, quantizationParameters: t2.getQuantizationParameters() };
      r$1(this.maxRecordCountFactor) && (n2.maxRecordCountFactor = this.maxRecordCountFactor);
      const d2 = this._createQuery(t2, n2);
      try {
        const e2 = a2.signal, o2 = yield this._queue.push({ tile: t2, query: d2, signal: e2, depth: r2 });
        return a$6(a2), o2 ? i2 !== this._queryInfo ? this._fetchDataTilePage(t2, r2, a2) : { reader: o2, query: d2 } : null;
      } catch (c2) {
        return j$1(c2), null;
      }
    });
  }
}
const h$1 = n$3.getLogger("esri.views.2d.layers.features.sources.SnapshotFeatureSource");
function u$1(e2, t2, s2) {
  const r2 = e2.getXHydrate(), o2 = e2.getYHydrate(), i2 = t2.getColumnForX(r2), a2 = Math.floor(t2.normalizeCol(i2));
  return `${s2}/${Math.floor(t2.getRowForY(o2))}/${a2}`;
}
function l(e2, s2) {
  if (t$4(e2))
    return null;
  const r2 = s2.transform, o2 = e2.getQuantizationTransform();
  if (t$4(o2)) {
    const [t2, s3] = r2.scale, [o3, i3] = r2.translate, a3 = -o3 / t2, n3 = 1 / t2, d3 = i3 / s3, h3 = 1 / -s3;
    return e2.transform(a3, d3, n3, h3);
  }
  const [i2, a2] = o2.scale, [n2, d2] = o2.translate, [h2, u2] = r2.scale, [l2, c2] = r2.translate, _2 = i2 / h2, g2 = (n2 - l2) / h2, p2 = a2 / u2, m2 = (-d2 + c2) / u2;
  return e2.transform(g2, m2, _2, p2);
}
class c$1 extends m$2 {
  constructor(e2) {
    super(e2), this.mode = "snapshot", this._loading = true, this._controller = new AbortController(), this._downloadPromise = null, this._didSendEnd = false, this._queries = new Array(), this._invalidated = false, this._hasAggregates = false, this._random = new t$9(1e3), this._featureCount = e2.featureCount, this._store = e2.store, this._markedIdsBufId = this._store.storage.createBitset();
  }
  destroy() {
    super.destroy(), this._controller.abort();
  }
  get loading() {
    return this._loading;
  }
  get _signal() {
    return this._controller.signal;
  }
  update(e2, t2) {
    super.update(e2, t2), this._hasAggregates = e2.targets.aggregate;
  }
  resend(e2 = false) {
    return __async(this, null, function* () {
      if (yield this._downloadPromise, this._invalidated || e2)
        return this._invalidated = false, this._subscriptions.forEach((e3) => e3.clear()), this._downloadPromise = this._download(this._featureCount), void (yield this._downloadPromise);
      const t2 = this._queries.map(({ query: e3, reader: t3 }) => this._sendPatchQuery(e3, t3));
      yield Promise.all(t2), this._subscriptions.forEach((e3) => {
        e3.requests.done.forEach((e4) => this._onMessage(e4.message));
      });
    });
  }
  refresh() {
    return __async(this, null, function* () {
      yield this.resend(true);
    });
  }
  edit(e2) {
    return __async(this, null, function* () {
      const t2 = this._signal, s2 = [...e2.addedFeatures.filter((e3) => !e3.error).map((e3) => e3.objectId), ...e2.updatedFeatures.filter((e3) => !e3.error).map((e3) => e3.objectId)], r2 = [...e2.deletedFeatures.filter((e3) => !e3.error).map((e3) => e3.objectId), ...s2];
      for (const o2 of r2)
        this._store.remove(o2);
      const i2 = this.createQuery();
      i2.objectIds = s2;
      const a2 = yield this._queue.push({ query: i2, depth: 0, signal: t2 });
      a$6({ signal: t2 }), this._store.insert(a2), this._send(a2), this._invalidateQueries();
    });
  }
  _invalidateQueries() {
    this._invalidated = true;
  }
  _sendPatchQuery(t2, s2) {
    return __async(this, null, function* () {
      const r2 = r$1(t2.outFields) ? t2.outFields : [], i2 = this._queryInfo.outFields, a2 = i2.filter((e2) => r2.indexOf(e2) === -1);
      if (!a2.length)
        return;
      const n2 = t2.clone(), d2 = this._signal;
      n2.returnGeometry = false, n2.returnCentroid = false, n2.outFields = a2, t2.outFields = i2;
      const h2 = yield this._queue.push({ query: n2, depth: 0, signal: d2 });
      a$6({ signal: d2 }), s2.joinAttributes(h2);
    });
  }
  _fetchDataTile(e2) {
    return __async(this, null, function* () {
      this._downloadPromise || (this._downloadPromise = this._download(this._featureCount));
      const t2 = this._store.search(e2), s2 = this._subscriptions.get(e2.key.id), r2 = t2.length - 1;
      for (let h2 = 0; h2 < r2; h2++) {
        const r3 = l(t2[h2], e2), o3 = { type: "append", id: e2.id, addOrUpdate: r3, end: false, status: t$3.empty() };
        s2.add({ query: null, message: o3 }), this._hasAggregates || (yield C$3(1)), this._onMessage(o3);
      }
      const o2 = l(r2 >= 0 ? t2[r2] : null, e2), a2 = this._didSendEnd, d2 = { type: "append", id: e2.id, addOrUpdate: o2, end: a2, status: t$3.empty() };
      s2.add({ query: null, message: d2 }), this._onMessage(d2);
    });
  }
  _download(e2) {
    return __async(this, null, function* () {
      try {
        yield this.whenInitialized();
        const t2 = this._store.storage.getBitset(this._markedIdsBufId), s2 = new Set();
        t2.clear();
        const r2 = Math.ceil(e2 / this.pageSize), o2 = Array.from({ length: r2 }, (e3, t3) => t3).sort((e3, t3) => this._random.getInt() - this._random.getInt()).map((e3) => this._downloadPage(e3, t2, s2));
        yield Promise.all(o2), this._store.sweepFeatures(t2, this._store.storage), this._store.sweepFeatureSets(s2);
      } catch (t2) {
        h$1.error("mapview-snapshot-source", "Encountered and error when downloading feature snapshot", t2);
      }
      this._sendEnd(), this._loading = false;
    });
  }
  _downloadPage(t2, s2, r2) {
    return __async(this, null, function* () {
      const i2 = this.pageSize, a2 = { start: t2 * i2, num: i2, cacheHint: true };
      r$1(this.maxRecordCountFactor) && (a2.maxRecordCountFactor = this.maxRecordCountFactor);
      const n2 = this.createQuery(a2), d2 = this._signal, h2 = yield this._queue.push({ query: n2, depth: t2, signal: d2 });
      a$6({ signal: d2 }), this._queries.push({ query: n2, reader: h2 }), this._store.insert(h2), r2.add(h2.instance);
      const u2 = h2.getCursor();
      for (; u2.next(); )
        s2.set(u2.getDisplayId());
      this._send(h2);
    });
  }
  _send(s2) {
    if (!this._subscriptions.size)
      return;
    let r2 = null;
    const o2 = new Map(), i2 = new Set(), d2 = new Map();
    this._subscriptions.forEach((e2) => {
      var t2;
      const s3 = e2.tile;
      o2.set(s3.key.id, null), r2 = s3.tileInfoView, i2.add(s3.level);
      const { row: a2, col: n2 } = s3.key, h2 = `${s3.level}/${a2}/${n2}`, u2 = (t2 = d2.get(h2)) != null ? t2 : [];
      u2.push(e2), d2.set(h2, u2);
    });
    for (const e2 of i2) {
      const i3 = r2.getLODInfoAt(e2), a2 = s2.getCursor();
      for (; a2.next(); ) {
        const s3 = u$1(a2, i3, e2), r3 = a2.getIndex();
        if (d2.has(s3))
          for (const e3 of d2.get(s3)) {
            const s4 = e3.tile.id;
            let i4 = o2.get(s4);
            t$4(i4) && (i4 = [], o2.set(s4, i4)), i4.push(r3);
          }
      }
    }
    o2.forEach((t2, r3) => {
      if (r$1(t2)) {
        const e2 = this._subscriptions.get(r3), o3 = { type: "append", id: r3, addOrUpdate: l(r$2.from(s2, t2), e2.tile), end: false, status: t$3.empty() };
        e2.add({ query: null, message: o3 }), this._onMessage(o3);
      }
    });
  }
  _sendEnd() {
    this._subscriptions.forEach((e2) => {
      const t2 = { type: "append", id: e2.tile.id, addOrUpdate: null, end: true, status: t$3.empty() };
      e2.add({ query: null, message: t2 }), this._onMessage(t2);
    }), this._didSendEnd = true;
  }
}
function a$1(e2, r2, a2, u2, i2, p2) {
  const f2 = c(e2, r2, a2, u2, i2, p2);
  switch (f2.type) {
    case "feature":
      switch (f2.origin) {
        case "hosted":
        case "local":
          return new d$1(f2);
        case "snapshot":
          return new c$1(f2);
        case "unknown":
          return new o$1(f2);
      }
    case "geoevent":
      return new b(f2);
  }
}
function c(t2, o2, n2, s2, a2, c2) {
  switch (t2.type) {
    case "snapshot":
      return { type: "feature", origin: "snapshot", featureCount: c$4(t2.featureCount, 0), serviceInfo: t2, onMessage: s2, outSR: o2, tileInfoView: n2, canAcceptRequest: a2, store: c2 };
    case "stream":
      return { type: "geoevent", serviceInfo: t2, onMessage: s2, outSR: o2, canAcceptRequest: a2 };
    case "memory":
    case "on-demand":
      return { type: "feature", serviceInfo: t2, onMessage: s2, outSR: o2, origin: u2(t2.source), tileInfoView: n2, canAcceptRequest: a2 };
  }
  function u2(e2) {
    return Array.isArray(e2) ? "local" : "path" in e2 && w$2(e2.path) ? "hosted" : "unknown";
  }
}
function x$1(t2, n2) {
  let o2 = -90, e2 = 90, r2 = -180, c2 = 180;
  for (let h2 = 0; h2 < n2; h2++) {
    const n3 = Math.ceil((h2 + 1) / 2), f2 = Math.floor((h2 + 1) / 2), l2 = 1 - h2 % 2, a2 = 30 - (3 * n3 + 2 * f2), u2 = 30 - (2 * n3 + 3 * f2), s2 = 3 * l2 + 2 * (1 - l2), i2 = 2 * l2 + 3 * (1 - l2), M2 = 3 * l2 + 7 * (1 - l2) << u2, g2 = (7 * l2 + 3 * (1 - l2) << a2 & t2.geohashX) >> a2, b2 = (M2 & t2.geohashY) >> u2;
    for (let t3 = s2 - 1; t3 >= 0; t3--) {
      const n4 = (r2 + c2) / 2, o3 = g2 & 1 << t3 ? 1 : 0;
      r2 = (1 - o3) * r2 + o3 * n4, c2 = (1 - o3) * n4 + o3 * c2;
    }
    for (let t3 = i2 - 1; t3 >= 0; t3--) {
      const n4 = (o2 + e2) / 2, r3 = b2 & 1 << t3 ? 1 : 0;
      o2 = (1 - r3) * o2 + r3 * n4, e2 = (1 - r3) * n4 + r3 * e2;
    }
  }
  return [r2, o2, c2, e2];
}
function y(t2, n2, o2, e2) {
  e2 % 2 && (e2 += 1);
  let r2 = 0, c2 = 0, h2 = -90, f2 = 90, l2 = -180, a2 = 180;
  for (let u2 = 0; u2 < e2 / 2; u2++) {
    for (let t3 = 0; t3 < 5; t3++) {
      const n3 = (l2 + a2) / 2, e3 = o2 > n3 ? 1 : 0;
      r2 |= e3 << 29 - (t3 + 5 * u2), l2 = (1 - e3) * l2 + e3 * n3, a2 = (1 - e3) * n3 + e3 * a2;
    }
    for (let t3 = 0; t3 < 5; t3++) {
      const o3 = (h2 + f2) / 2, e3 = n2 > o3 ? 1 : 0;
      c2 |= e3 << 29 - (t3 + 5 * u2), h2 = (1 - e3) * h2 + e3 * o3, f2 = (1 - e3) * o3 + e3 * f2;
    }
  }
  t2.geohashX = r2, t2.geohashY = c2;
}
function p$1(t2, n2, o2, e2, r2) {
  r2 % 2 && (r2 += 1);
  let c2 = 0, h2 = 0, f2 = -90, l2 = 90, a2 = -180, u2 = 180;
  for (let s2 = 0; s2 < r2 / 2; s2++) {
    for (let t3 = 0; t3 < 5; t3++) {
      const n3 = (a2 + u2) / 2, o3 = e2 > n3 ? 1 : 0;
      c2 |= o3 << 29 - (t3 + 5 * s2), a2 = (1 - o3) * a2 + o3 * n3, u2 = (1 - o3) * n3 + o3 * u2;
    }
    for (let t3 = 0; t3 < 5; t3++) {
      const n3 = (f2 + l2) / 2, e3 = o2 > n3 ? 1 : 0;
      h2 |= e3 << 29 - (t3 + 5 * s2), f2 = (1 - e3) * f2 + e3 * n3, l2 = (1 - e3) * n3 + e3 * l2;
    }
  }
  t2[2 * n2] = c2, t2[2 * n2 + 1] = h2;
}
class n {
  constructor(t2 = [], s2 = 8096) {
    this._nodes = 0, this._root = new a(0, 0, 0), this._statisticFields = t2, this._pool = s2 ? new s$1(8096) : null;
  }
  _acquire(s2, e2, i2) {
    this._nodes++;
    let o2 = null;
    return r$1(this._pool) && (o2 = this._pool.dequeue()), r$1(o2) ? o2.realloc(s2, e2, i2) : new a(s2, e2, i2);
  }
  _release(s2) {
    this._nodes--, r$1(this._pool) && this._pool.enqueue(s2);
  }
  get count() {
    return this._root.count;
  }
  get size() {
    return this._nodes;
  }
  get poolSize() {
    return v$2(this._pool, 0, (t2) => t2.size);
  }
  get depth() {
    let t2 = 0;
    return this._forEachNode((s2) => t2 = Math.max(t2, s2.depth)), t2;
  }
  dropLevels(t2) {
    this._forEachNode((s2) => {
      if (s2.depth >= t2)
        for (let t3 = 0; t3 < s2.children.length; t3++) {
          const e2 = s2.children[t3];
          s2.children[t3] = null, e2 && this._release(e2);
        }
    });
  }
  clear() {
    this.dropLevels(0);
  }
  insert(t2, s2, e2 = 0) {
    const i2 = c$5.fromOptimizedFeatures([t2], "esriGeometryPoint").getCursor();
    i2.next();
    const n2 = i2.readGeometry();
    if (!n2)
      return;
    const [a2, l2] = n2.coords, r2 = t2.geohashX, h2 = t2.geohashY;
    this.insertCursor(i2, t2.displayId, a2, l2, r2, h2, s2, e2);
  }
  insertCursor(t2, s2, e2, i2, o2, n2, a2, l2 = 0) {
    let r2 = this._root, h2 = 0, c2 = 0, d2 = 0;
    for (; r2 !== null; ) {
      if (r2.depth >= l2 && (r2.count += 1, r2.xTotal += e2, r2.yTotal += i2, r2.xGeohashTotal += o2, r2.yGeohashTotal += n2, r2.displayId = s2, this._updateStatisticsCursor(t2, r2, 1)), h2 >= a2)
        return void r2.add(s2);
      const u2 = Math.ceil((h2 + 1) / 2), f2 = Math.floor((h2 + 1) / 2), x2 = 1 - h2 % 2, m2 = 30 - (3 * u2 + 2 * f2), p2 = 30 - (2 * u2 + 3 * f2), y2 = (o2 & 7 * x2 + 3 * (1 - x2) << m2) >> m2, g2 = (n2 & 3 * x2 + 7 * (1 - x2) << p2) >> p2, _2 = y2 + g2 * (8 * x2 + 4 * (1 - x2));
      c2 = c2 << 3 * x2 + 2 * (1 - x2) | y2, d2 = d2 << 2 * x2 + 3 * (1 - x2) | g2, r2.children[_2] == null && (r2.children[_2] = this._acquire(c2, d2, h2 + 1)), h2 += 1, r2 = r2.children[_2];
    }
  }
  remove(t2, s2) {
    const e2 = c$5.fromOptimizedFeatures([t2], "esriGeometryPoint").getCursor();
    e2.next();
    const i2 = e2.readGeometry();
    if (!i2)
      return;
    const [n2, a2] = i2.coords, l2 = t2.geohashX, r2 = t2.geohashY;
    this.removeCursor(e2, n2, a2, l2, r2, s2);
  }
  removeCursor(t2, s2, e2, i2, o2, n2) {
    let a2 = this._root, l2 = 0;
    for (; a2 !== null; ) {
      if (a2.count -= 1, a2.xTotal -= s2, a2.yTotal -= e2, a2.xGeohashTotal -= i2, a2.yGeohashTotal -= o2, this._updateStatisticsCursor(t2, a2, -1), l2 >= n2)
        return void a2.remove(t2.getDisplayId());
      const r2 = Math.ceil((l2 + 1) / 2), h2 = Math.floor((l2 + 1) / 2), c2 = 1 - l2 % 2, d2 = 30 - (3 * r2 + 2 * h2), u2 = 30 - (2 * r2 + 3 * h2), f2 = ((i2 & 7 * c2 + 3 * (1 - c2) << d2) >> d2) + ((o2 & 3 * c2 + 7 * (1 - c2) << u2) >> u2) * (8 * c2 + 4 * (1 - c2)), x2 = a2.children[f2];
      x2.count === 1 && (this._release(x2), a2.children[f2] = null), l2 += 1, a2 = x2;
    }
  }
  find(t2, s2, e2) {
    return this._root.find(t2, s2, e2, 0, 0, 0);
  }
  findSingleOccupancyNode(t2, s2, e2, i2, o2) {
    let n2 = this._root;
    for (; n2 !== null; ) {
      const a2 = n2.depth, l2 = n2.xNode, r2 = n2.yNode, h2 = 1 - a2 % 2, c2 = n2.xGeohashTotal / n2.count, d2 = n2.yGeohashTotal / n2.count;
      if (n2.count === 1 && t2 < c2 && c2 <= e2 && s2 < d2 && d2 <= i2)
        return n2;
      if (a2 >= o2) {
        n2 = n2.next;
        continue;
      }
      const u2 = Math.ceil((a2 + 1) / 2), f2 = Math.floor((a2 + 1) / 2), x2 = 30 - (3 * u2 + 2 * f2), m2 = 30 - (2 * u2 + 3 * f2), p2 = ~((1 << x2) - 1), y2 = ~((1 << m2) - 1), g2 = (t2 & p2) >> x2, _2 = (s2 & y2) >> m2, N = (e2 & p2) >> x2, T2 = (i2 & y2) >> m2, M2 = l2 << 3 * h2 + 2 * (1 - h2), C2 = r2 << 2 * h2 + 3 * (1 - h2), S2 = M2 + 8 * h2 + 4 * (1 - h2), b2 = C2 + 4 * h2 + 8 * (1 - h2), v2 = Math.max(M2, g2), G2 = Math.max(C2, _2), k2 = Math.min(S2, N), F2 = Math.min(b2, T2);
      let I2 = null, z = null;
      for (let t3 = G2; t3 <= F2; t3++)
        for (let s3 = v2; s3 <= k2; s3++) {
          const e3 = s3 - M2 + (t3 - C2) * (8 * h2 + 4 * (1 - h2)), i3 = n2.children[e3];
          i3 && (I2 || (I2 = i3, I2.next = n2.next), z && (z.next = i3), z = i3, i3.next = n2.next);
        }
      n2 = I2 || n2.next;
    }
    return null;
  }
  getRegionDisplayIds(t2, s2, e2, i2, o2) {
    let n2 = this._root;
    const a2 = [];
    for (; n2 !== null; ) {
      const l2 = n2.depth, r2 = n2.xNode, h2 = n2.yNode;
      if (l2 >= o2) {
        const o3 = n2.xGeohashTotal / n2.count, l3 = n2.yGeohashTotal / n2.count;
        t2 <= o3 && o3 <= e2 && s2 <= l3 && l3 <= i2 && n2.displayIds.forEach((t3) => a2.push(t3)), n2 = n2.next;
        continue;
      }
      const c2 = Math.ceil((l2 + 1) / 2), d2 = Math.floor((l2 + 1) / 2), u2 = 1 - l2 % 2, f2 = 30 - (3 * c2 + 2 * d2), x2 = 30 - (2 * c2 + 3 * d2), m2 = ~((1 << f2) - 1), p2 = ~((1 << x2) - 1), y2 = (t2 & m2) >> f2, g2 = (s2 & p2) >> x2, _2 = (e2 & m2) >> f2, N = (i2 & p2) >> x2, T2 = r2 << 3 * u2 + 2 * (1 - u2), M2 = h2 << 2 * u2 + 3 * (1 - u2), C2 = T2 + 8 * u2 + 4 * (1 - u2), S2 = M2 + 4 * u2 + 8 * (1 - u2), b2 = Math.max(T2, y2), v2 = Math.max(M2, g2), G2 = Math.min(C2, _2), k2 = Math.min(S2, N);
      let F2 = null, I2 = null;
      for (let t3 = v2; t3 <= k2; t3++)
        for (let s3 = b2; s3 <= G2; s3++) {
          const e3 = s3 - T2 + (t3 - M2) * (8 * u2 + 4 * (1 - u2)), i3 = n2.children[e3];
          i3 && (F2 || (F2 = i3, F2.next = n2.next), I2 && (I2.next = i3), I2 = i3, i3.next = n2.next);
        }
      n2 = F2 || n2.next;
    }
    return a2;
  }
  getRegionStatistics(t2, s2, e2, i2, o2) {
    let n2 = this._root, a2 = 0, l2 = 0, r2 = 0;
    const h2 = {};
    let c2 = 0;
    for (; n2 !== null; ) {
      const d2 = n2.depth, u2 = n2.xNode, f2 = n2.yNode;
      if (d2 >= o2) {
        const o3 = n2.xGeohashTotal / n2.count, d3 = n2.yGeohashTotal / n2.count;
        t2 < o3 && o3 <= e2 && s2 < d3 && d3 <= i2 && (a2 += n2.count, l2 += n2.xTotal, r2 += n2.yTotal, n2.count === 1 && (c2 = n2.displayId), this._aggregateStatistics(h2, n2.statistics)), n2 = n2.next;
        continue;
      }
      const x2 = Math.ceil((d2 + 1) / 2), m2 = Math.floor((d2 + 1) / 2), p2 = 1 - d2 % 2, y2 = 30 - (3 * x2 + 2 * m2), g2 = 30 - (2 * x2 + 3 * m2), _2 = ~((1 << y2) - 1), N = ~((1 << g2) - 1), T2 = (t2 & _2) >> y2, M2 = (s2 & N) >> g2, C2 = (e2 & _2) >> y2, S2 = (i2 & N) >> g2, b2 = u2 << 3 * p2 + 2 * (1 - p2), v2 = f2 << 2 * p2 + 3 * (1 - p2), G2 = b2 + 8 * p2 + 4 * (1 - p2), k2 = v2 + 4 * p2 + 8 * (1 - p2), F2 = Math.max(b2, T2), I2 = Math.max(v2, M2), z = Math.min(G2, C2), w2 = Math.min(k2, S2);
      let A2 = null, j2 = null;
      for (let o3 = I2; o3 <= w2; o3++)
        for (let d3 = F2; d3 <= z; d3++) {
          const u3 = d3 - b2 + (o3 - v2) * (8 * p2 + 4 * (1 - p2)), f3 = n2.children[u3];
          if (f3) {
            if (o3 !== I2 && o3 !== w2 && d3 !== F2 && d3 !== z) {
              const o4 = f3.xGeohashTotal / f3.count, n3 = f3.yGeohashTotal / f3.count;
              t2 < o4 && o4 <= e2 && s2 < n3 && n3 <= i2 && (a2 += f3.count, l2 += f3.xTotal, r2 += f3.yTotal, f3.count === 1 && (c2 = f3.displayId), this._aggregateStatistics(h2, f3.statistics));
              continue;
            }
            A2 || (A2 = f3, A2.next = n2.next), j2 && (j2.next = f3), j2 = f3, f3.next = n2.next;
          }
        }
      n2 = A2 || n2.next;
    }
    return { count: a2, attributes: this._normalizeStatistics(h2, a2), xTotal: l2, yTotal: r2, referenceId: c2 };
  }
  _forEachNode(t2) {
    let s2 = this._root;
    for (; s2 !== null; ) {
      const e2 = this._linkChildren(s2) || s2.next;
      t2(s2), s2 = e2;
    }
  }
  _linkChildren(t2) {
    let s2 = null, e2 = null;
    for (let i2 = 0; i2 <= t2.children.length; i2++) {
      const o2 = t2.children[i2];
      o2 && (s2 || (s2 = o2, s2.next = t2.next), e2 && (e2.next = o2), e2 = o2, o2.next = t2.next);
    }
    return s2;
  }
  _updateStatisticsCursor(t2, s2, e2) {
    for (const i2 of this._statisticFields) {
      const o2 = i2.name, n2 = i2.inField ? t2.readAttribute(i2.inField) : t2.getComputedNumericAtIndex(i2.inFieldIndex);
      switch (i2.statisticType) {
        case "norm": {
          s2.statistics[o2] || (s2.statistics[o2] = {});
          const a2 = i2.inNormalizationField, l2 = t2.readAttribute(a2), r2 = s2.statistics[o2].onStatisticField || 0, h2 = s2.statistics[o2].onStatisticNormalizationField || 0;
          n2 == null || isNaN(n2) || l2 == null || l2 === 0 || isNaN(l2) || (s2.statistics[o2].onStatisticField = r2 + e2 * n2, s2.statistics[o2].onStatisticNormalizationField = h2 + e2 * l2);
          break;
        }
        case "sum":
        case "avg": {
          s2.statistics[o2] || (s2.statistics[o2] = { value: 0, nanCount: 0 });
          const t3 = s2.statistics[o2].value, i3 = s2.statistics[o2].nanCount;
          n2 == null || isNaN(n2) ? s2.statistics[o2].nanCount = i3 + e2 : s2.statistics[o2].value = t3 + e2 * n2;
          break;
        }
        case "avg_angle": {
          s2.statistics[o2] || (s2.statistics[o2] = { x: 0, y: 0, nanCount: 0 });
          const t3 = s2.statistics[o2].x, i3 = s2.statistics[o2].y, a2 = s2.statistics[o2].nanCount, l2 = Math.PI / 180;
          n2 == null || isNaN(n2) ? s2.statistics[o2].nanCount = a2 + e2 : (s2.statistics[o2].x = t3 + e2 * Math.cos(n2 * l2), s2.statistics[o2].y = i3 + e2 * Math.sin(n2 * l2));
          break;
        }
        case "mode": {
          s2.statistics[o2] || (s2.statistics[o2] = {});
          const t3 = s2.statistics[o2][n2] || 0;
          s2.statistics[o2][n2] = t3 + e2;
          break;
        }
      }
    }
  }
  _aggregateStatistics(t2, s2) {
    for (const e2 of this._statisticFields) {
      const i2 = e2.name;
      switch (e2.statisticType) {
        case "sum":
        case "avg":
        case "avg_angle":
        case "mode":
        case "norm":
          t2[i2] || (t2[i2] = {});
          for (const e3 in s2[i2]) {
            const o2 = t2[i2][e3] || 0;
            t2[i2][e3] = o2 + s2[i2][e3];
          }
      }
    }
  }
  _normalizeStatistics(t2, s2) {
    const e2 = {};
    for (const i2 of this._statisticFields) {
      const o2 = i2.name;
      switch (i2.statisticType) {
        case "norm": {
          const i3 = t2[o2];
          if (s2 && i3.onStatisticNormalizationField == null)
            break;
          if (s2 && i3.onStatisticNormalizationField) {
            e2[o2] = i3.onStatisticField / i3.onStatisticNormalizationField;
            break;
          }
          e2[o2] = 0;
          break;
        }
        case "sum": {
          if (!s2)
            break;
          const { value: i3, nanCount: n2 } = t2[o2];
          if (!(s2 - n2))
            break;
          e2[o2] = i3;
          break;
        }
        case "avg": {
          if (!s2)
            break;
          const { value: i3, nanCount: n2 } = t2[o2];
          if (!(s2 - n2))
            break;
          e2[o2] = i3 / (s2 - n2);
          break;
        }
        case "avg_angle": {
          if (!s2)
            break;
          const { x: i3, y: n2, nanCount: a2 } = t2[o2];
          if (!(s2 - a2))
            break;
          const l2 = i3 / (s2 - a2), r2 = n2 / (s2 - a2), h2 = 180 / Math.PI, c2 = Math.atan2(r2, l2) * h2;
          e2[o2] = c2;
          break;
        }
        case "mode": {
          const s3 = t2[o2];
          let i3 = 0, n2 = null;
          for (const t3 in s3) {
            const e3 = s3[t3];
            e3 > i3 && (i3 = e3, n2 = t3);
          }
          e2[o2] = n2 === "null" ? null : n2;
          break;
        }
      }
    }
    return e2;
  }
}
class a {
  constructor(t2, s2, e2) {
    this.count = 0, this.xTotal = 0, this.yTotal = 0, this.statistics = {}, this.displayId = 0, this.displayIds = new Set(), this.next = null, this.depth = 0, this.xNode = 0, this.yNode = 0, this.xGeohashTotal = 0, this.yGeohashTotal = 0, this.children = new Array(32);
    for (let i2 = 0; i2 < this.children.length; i2++)
      this.children[i2] = null;
    this.xNode = t2, this.yNode = s2, this.depth = e2;
  }
  realloc(t2, s2, e2) {
    for (let i2 = 0; i2 < this.children.length; i2++)
      this.children[i2] = null;
    return this.xNode = t2, this.yNode = s2, this.depth = e2, this.next = null, this.xGeohashTotal = 0, this.yGeohashTotal = 0, this.xTotal = 0, this.yTotal = 0, this.count = 0, this.statistics = {}, this.displayIds.clear(), this;
  }
  add(t2) {
    this.displayIds.add(t2);
  }
  remove(t2) {
    this.displayIds.delete(t2);
  }
  getLngLatBounds() {
    const t2 = this.depth, s2 = Math.ceil(t2 / 2), e2 = Math.floor(t2 / 2), o2 = 30 - (3 * s2 + 2 * e2), n2 = 30 - (2 * s2 + 3 * e2), a2 = this.xNode << o2, l2 = this.yNode << n2;
    return x$1({ geohashX: a2, geohashY: l2 }, this.depth);
  }
  find(t2, s2, e2, i2, o2, n2) {
    if (i2 >= e2)
      return this;
    const a2 = 1 - i2 % 2, l2 = 3 * a2 + 2 * (1 - a2), r2 = 2 * a2 + 3 * (1 - a2), h2 = 30 - o2 - l2, c2 = 30 - n2 - r2, d2 = ((t2 & 7 * a2 + 3 * (1 - a2) << h2) >> h2) + ((s2 & 3 * a2 + 7 * (1 - a2) << c2) >> c2) * (8 * a2 + 4 * (1 - a2)), u2 = this.children[d2];
    return u2 == null ? null : u2.find(t2, s2, e2, i2 + 1, o2 + l2, n2 + r2);
  }
}
const R$1 = 12, C$1 = 1;
class M extends t$5 {
  constructor(e2, t2, s2, r2, a2) {
    super(new t$6([], [t2, s2]), r2, null, e2), this.geohashBoundsInfo = a2;
  }
  get count() {
    return this.attributes.cluster_count;
  }
  static create(e2, t2, s2, r2, a2, i2, o2, h2) {
    const l2 = new M(t2, s2, r2, i2, o2);
    return l2.displayId = e2.createDisplayId(true), l2.referenceId = h2, l2.tileLevel = a2, l2;
  }
  update(e2, t2, s2, r2, a2, i2) {
    return this.geometry.coords[0] = e2, this.geometry.coords[1] = t2, this.tileLevel = s2, this.attributes = r2, this.geohashBoundsInfo = a2, this.referenceId = null, this.referenceId = i2, this;
  }
  toJSON() {
    return { objectId: this.objectId, referenceId: this.attributes.cluster_count === 1 ? this.referenceId : null, attributes: __spreadProps(__spreadValues({}, this.attributes), { clusterId: this.objectId }), geometry: { x: this.geometry.coords[0], y: this.geometry.coords[1] } };
  }
}
function x(e2) {
  return 57.29577951308232 * e2;
}
class L extends o$4 {
  constructor(e2, t2, s2) {
    super(e2, s2), this.events = new n$5(), this._geohashLevel = 0, this._aggregateValueRanges = {}, this._aggregateValueRangesChanged = false, this._geohashBuf = [], this._clusters = new Map(), this._tiles = new Map(), this.geometryInfo = e2.geometryInfo, this._spatialReference = t2, this._projectionSupportCheck = p$8(t2, k$2.WGS84), this._bitsets.geohash = s2.getBitset(s2.createBitset()), this._bitsets.inserted = s2.getBitset(s2.createBitset());
  }
  updateSchema(s2, r2) {
    var __super = (key) => super[key];
    return __async(this, null, function* () {
      const a2 = this._schema;
      try {
        yield __super("updateSchema").call(this, s2, r2), yield this._projectionSupportCheck;
      } catch (o2) {
      }
      const i2 = m$7(a2, r2);
      r2 && (!t$4(i2) || s2.source || s2.storage.filters) ? ((a$5(i2, "params.fields") || !this._tree || s2.source) && (this._tree = new n(this._statisticFields), this._rebuildTree(), t$7("esri-2d-update-debug") && console.debug("Aggregate mesh needs update due to tree changing")), t$7("esri-2d-update-debug") && console.debug("Applying Update - ClusterStore:", i2), s2.targets[r2.name] = true, s2.mesh = false, this._aggregateValueRanges = {}) : a2 && (s2.mesh = true);
    });
  }
  sweepFeatures(e2, t2) {
    this._bitsets.inserted.forEachSet((s2) => {
      if (!e2.has(s2)) {
        const e3 = t2.lookupByDisplayIdUnsafe(s2);
        this._remove(e3);
      }
    });
  }
  sweepClusters(e2, t2, s2) {
    this._clusters.forEach((r2, a2) => {
      r2 && r2.tileLevel !== s2 && (e2.releaseDisplayId(r2.displayId), t2.unsetAttributeData(r2.displayId), this._clusters.delete(a2));
    });
  }
  onTileData(e2, s2, r2, a2, i2 = true) {
    if (!this._schema || t$4(s2.addOrUpdate))
      return s2;
    const o2 = this._tree, h2 = this._getTransforms(e2, this._spatialReference);
    {
      const e3 = s2.addOrUpdate.getCursor();
      for (; e3.next(); )
        this._update(e3, a2, o2);
    }
    if (s2.status.mesh || !i2)
      return s2;
    const l2 = new Array(), n2 = this._schema.params.clusterRadius;
    this._getClustersForTile(l2, e2, n2, r2, o2, h2), s2.addOrUpdate = c$5.fromOptimizedFeatures(l2, "esriGeometryPoint"), s2.addOrUpdate.attachStorage(r2), s2.end = true;
    {
      const t2 = s2.addOrUpdate.getCursor();
      for (; t2.next(); ) {
        const s3 = t2.getDisplayId();
        this._bitsets.computed.unset(s3), this.setComputedAttributes(r2, t2, s3, e2.scale);
      }
    }
    return this._aggregateValueRangesChanged && s2.end && (this.events.emit("valueRangesChanged", { valueRanges: this._aggregateValueRanges }), this._aggregateValueRangesChanged = false), s2;
  }
  onTileUpdate({ added: e2, removed: t2 }) {
    if (e2.length) {
      const t3 = e2[0].level;
      this._setGeohashLevel(t3);
    }
    if (!this._schema)
      return;
    const s2 = this._schema.params.clusterRadius;
    t2.forEach((e3) => {
      this._tiles.delete(e3.key.id), this._markTileClustersForDeletion(e3, s2);
    });
  }
  getAggregate(e2) {
    let t2 = null;
    return this._clusters.forEach((s2) => {
      s2 && s2.displayId === e2 && (t2 = s2.toJSON());
    }), t2;
  }
  getDisplayId(e2) {
    const t2 = this._clusters.get(e2);
    return t2 ? t2.displayId : null;
  }
  getFeatureDisplayIdsForAggregate(e2) {
    const t2 = this._clusters.get(e2);
    if (!t2)
      return [];
    const s2 = t2.geohashBoundsInfo;
    return this._tree.getRegionDisplayIds(s2.xLL, s2.yLL, s2.xTR, s2.yTR, s2.level);
  }
  getDisplayIdForReferenceId(e2) {
    let t2;
    return this._clusters.forEach((s2) => {
      s2 && s2.referenceId === e2 && (t2 = s2.displayId);
    }), t2;
  }
  getAggregateValueRanges() {
    return this._aggregateValueRanges;
  }
  forEach(e2) {
    this._clusters.forEach((t2, s2) => {
      t2 && e2(t2, s2);
    });
  }
  size() {
    let e2 = 0;
    return this.forEach((t2) => e2++), e2;
  }
  _rebuildTree() {
    this._bitsets.computed.clear(), this._bitsets.inserted.clear(), this._tree && this._tree.clear();
  }
  _remove(e2) {
    const t2 = e2.getDisplayId(), s2 = e2.getXHydrate(), r2 = e2.getYHydrate(), a2 = this._geohashBuf[2 * t2], i2 = this._geohashBuf[2 * t2 + 1];
    this._bitsets.inserted.has(t2) && (this._bitsets.inserted.unset(t2), this._tree.removeCursor(e2, s2, r2, a2, i2, this._geohashLevel));
  }
  _update(e2, t2, s2) {
    const r2 = e2.getDisplayId(), a2 = this._bitsets.inserted, i2 = t2.isVisible(r2);
    if (i2 === a2.has(r2))
      return;
    if (!i2)
      return void this._remove(e2);
    const o2 = e2.getXHydrate(), h2 = e2.getYHydrate();
    if (!this._setGeohash(r2, o2, h2))
      return;
    const l2 = this._geohashBuf[2 * r2], n2 = this._geohashBuf[2 * r2 + 1];
    s2.insertCursor(e2, r2, o2, h2, l2, n2, this._geohashLevel), a2.set(r2);
  }
  _setGeohash(e2, t2, s2) {
    if (this._bitsets.geohash.has(e2))
      return true;
    const r2 = this._geohashBuf;
    if (this._spatialReference.isWebMercator) {
      const a2 = x(t2 / s$3.radius), i2 = a2 - 360 * Math.floor((a2 + 180) / 360), h2 = x(Math.PI / 2 - 2 * Math.atan(Math.exp(-1 * s2 / s$3.radius)));
      p$1(r2, e2, h2, i2, R$1);
    } else {
      const a2 = y$8({ x: t2, y: s2 }, this._spatialReference, k$2.WGS84);
      if (!a2)
        return false;
      p$1(r2, e2, a2.y, a2.x, R$1);
    }
    return this._bitsets.geohash.set(e2), true;
  }
  _getClustersForTile(e2, a2, i2, o2, h2, l2, n2 = true) {
    const c2 = this._schema.params.clusterPixelBuffer, p2 = 2 * i2, f2 = this._getGeohashLevel(a2.key.level), _2 = Math.ceil(__pow(2, a2.key.level) * o$5 / p2), m2 = Math.ceil(c2 / p2) + 0, I2 = Math.ceil(o$5 / p2), { row: b2, col: v2 } = a2.key, R2 = v2 * o$5, C2 = b2 * o$5, M2 = Math.floor(R2 / p2) - m2, x2 = Math.floor(C2 / p2) - m2, L2 = M2 + I2 + 2 * m2, j2 = x2 + I2 + 2 * m2, w2 = a2.tileInfoView.getLODInfoAt(a2.key.level);
    for (let y2 = M2; y2 <= L2; y2++)
      for (let i3 = x2; i3 <= j2; i3++) {
        let c3 = y2;
        w2.wrap && (c3 = y2 < 0 ? y2 + _2 : y2 % _2);
        const p3 = w2.wrap && y2 < 0, m3 = w2.wrap && y2 % _2 !== y2, I3 = this._lookupCluster(o2, w2, a2.key.level, c3, i3, f2, h2);
        if (r$1(I3)) {
          const a3 = A(l2, (e3) => p3 ? e3.left : m3 ? e3.right : e3.tile);
          if (n2 && t$4(a3))
            continue;
          if (!I3.count)
            continue;
          if (r$1(a3) && n2) {
            const t2 = I3.geometry.clone();
            let r2 = I3.attributes;
            t2.coords[0] = p$7(a3, t2.coords[0]), t2.coords[1] = I$2(a3, t2.coords[1]), I3.count === 1 && r$1(I3.referenceId) && (r2 = __spreadProps(__spreadValues({}, I3.attributes), { referenceId: I3.referenceId }));
            const i4 = new t$5(t2, r2);
            i4.displayId = I3.displayId, e2.push(i4);
          }
        }
      }
  }
  _getGeohashLevel(e2) {
    return Math.min(Math.ceil(e2 / 2 + 2), R$1);
  }
  _setGeohashLevel(e2) {
    const t2 = this._getGeohashLevel(e2), s2 = (Math.floor(t2 / C$1) + 1) * C$1 - 1;
    if (this._geohashLevel !== s2)
      return this._geohashLevel = s2, this._rebuildTree(), void this._bitsets.geohash.clear();
  }
  _getTransforms(e2, t2) {
    const s2 = { originPosition: "upperLeft", scale: [e2.resolution, e2.resolution], translate: [e2.bounds[0], e2.bounds[3]] }, r2 = S(t2);
    if (!r2)
      return { tile: s2, left: null, right: null };
    const [i2, o2] = r2.valid;
    return { tile: s2, left: __spreadProps(__spreadValues({}, s2), { translate: [o2, e2.bounds[3]] }), right: __spreadProps(__spreadValues({}, s2), { translate: [i2 - o2 + e2.bounds[0], e2.bounds[3]] }) };
  }
  _getClusterId(e2, t2, s2) {
    return (15 & e2) << 28 | (16383 & t2) << 14 | 16383 & s2;
  }
  _markForDeletion(e2, t2, s2) {
    const r2 = this._getClusterId(e2, t2, s2);
    this._clusters.delete(r2);
  }
  _getClusterBounds(e2, t2, s2) {
    const r2 = this._schema.params.clusterRadius, a2 = 2 * r2;
    let i2 = s2 % 2 ? t2 * a2 : t2 * a2 - r2;
    const o2 = s2 * a2;
    let h2 = i2 + a2;
    const l2 = o2 - a2, n2 = __pow(2, e2.level) * o$5;
    e2.wrap && i2 < 0 && (i2 = 0), e2.wrap && h2 > n2 && (h2 = n2);
    const u2 = i2 / o$5, c2 = o2 / o$5, g2 = h2 / o$5, d2 = l2 / o$5;
    return [e2.getXForColumn(u2), e2.getYForRow(c2), e2.getXForColumn(g2), e2.getYForRow(d2)];
  }
  _lookupCluster(e2, t2, r2, a2, h2, l2, n2) {
    const u2 = this._getClusterId(r2, a2, h2), c2 = this._clusters.get(u2), [g2, d2, p2, _2] = this._getClusterBounds(t2, a2, h2), m2 = { x: g2, y: d2 }, y$12 = { x: p2, y: _2 };
    let I2 = 0, v2 = 0, R2 = 0, C2 = 0;
    if (this._spatialReference.isWebMercator) {
      {
        const e3 = x(m2.x / s$3.radius);
        I2 = e3 - 360 * Math.floor((e3 + 180) / 360), v2 = x(Math.PI / 2 - 2 * Math.atan(Math.exp(-1 * m2.y / s$3.radius)));
      }
      {
        const e3 = x(y$12.x / s$3.radius);
        R2 = e3 - 360 * Math.floor((e3 + 180) / 360), C2 = x(Math.PI / 2 - 2 * Math.atan(Math.exp(-1 * y$12.y / s$3.radius)));
      }
    } else {
      const e3 = y$8(m2, this._spatialReference, k$2.WGS84), t3 = y$8(y$12, this._spatialReference, k$2.WGS84);
      if (!e3 || !t3)
        return null;
      I2 = e3.x, v2 = e3.y, R2 = t3.x, C2 = t3.y;
    }
    const L2 = { geohashX: 0, geohashY: 0 }, j2 = { geohashX: 0, geohashY: 0 };
    y(L2, v2, I2, l2), y(j2, C2, R2, l2);
    const w2 = L2.geohashX, V = L2.geohashY, F2 = j2.geohashX, S2 = j2.geohashY, D2 = { xLL: w2, yLL: V, xTR: F2, yTR: S2, level: l2 }, T2 = n2.getRegionStatistics(w2, V, F2, S2, l2), { count: k2, xTotal: B2, yTotal: G2, referenceId: O2 } = T2, U2 = k2 ? B2 / k2 : 0, A2 = k2 ? G2 / k2 : 0;
    if (k2 === 0)
      return this._clusters.set(u2, null), null;
    const E2 = __spreadValues({ cluster_count: k2 }, T2.attributes), X2 = r$1(c2) ? c2.update(U2, A2, r2, E2, D2, O2) : M.create(e2, u2, U2, A2, r2, E2, D2, O2);
    return k2 === 0 && (X2.geometry.coords[0] = (g2 + p2) / 2, X2.geometry.coords[1] = (d2 + _2) / 2), this._clusters.set(u2, X2), this._updateAggregateValueRangeForCluster(X2, X2.tileLevel), X2;
  }
  _updateAggregateValueRangeForCluster(e2, t2) {
    const s2 = this._aggregateValueRanges[t2] || { minValue: 1 / 0, maxValue: 0 }, r2 = s2.minValue, a2 = s2.maxValue;
    s2.minValue = Math.min(r2, e2.count), s2.maxValue = Math.max(a2, e2.count), this._aggregateValueRanges[t2] = s2, r2 === s2.minValue && a2 === s2.maxValue || (this._aggregateValueRangesChanged = true);
  }
  _markTileClustersForDeletion(e2, t2) {
    const s2 = 2 * t2, r2 = Math.ceil(o$5 / s2), { row: a2, col: i2 } = e2.key, o2 = i2 * o$5, h2 = a2 * o$5, l2 = Math.floor(o2 / s2), n2 = Math.floor(h2 / s2);
    for (let u2 = l2; u2 < l2 + r2; u2++)
      for (let t3 = n2; t3 < n2 + r2; t3++)
        this._markForDeletion(e2.key.level, u2, t3);
  }
}
const w = 5e3, j = "tileRenderer.featuresView.attributeView.initialize", C = "tileRenderer.featuresView.attributeView.requestUpdate", E = "tileRenderer.featuresView.requestRender";
function T(e2) {
  return e2.name === "worker:port-closed";
}
function k(e2) {
  if (!g$5(e2) && !T(e2))
    throw e2;
}
function F(e2) {
  return e2.type === "feature" && e2.mode === "snapshot";
}
let R = class extends d$8 {
  constructor() {
    super(...arguments), this._storage = new u$5(), this._markedIdsBufId = this._storage.createBitset(), this._lastCleanup = performance.now(), this._cleanupNeeded = false, this._invalidated = false, this._tileToResolver = new Map(), this.tileStore = null, this.config = null, this.processor = null, this.remoteClient = null, this.service = null;
  }
  initialize() {
    this._initAttributeStore(), this._initStores(), this._initQueryEngine(), this._initSource(), this._updateQueue = new _$3({ concurrency: this._source.type === "geoevent" ? 1 : 4, process: (e2, t2) => this._onTileMessage(e2, { signal: t2 }) }), this.handles.add([this.tileStore.on("update", this.onTileUpdate.bind(this)), this.watch("updating", (e2) => !e2 && this.onIdle())]), this._checkUpdating = setInterval(() => this.notifyChange("updating"), 300);
  }
  startup() {
    return __async(this, null, function* () {
      this._initAttributeStore(), this.tileStore.tiles.forEach((e2) => this._source.subscribe(e2));
    });
  }
  _initSource() {
    const e2 = this.tileStore.tileScheme, t2 = () => this._updateQueue.length < 50, r2 = (e3, t3) => (this._invalidated = true, this._patchTile(e3, t3));
    this._source = a$1(this.service, this.spatialReference, e2, r2, t2, this.featureStore), this._proxyEvents();
  }
  _proxyEvents() {
    if (this._source.type === "geoevent") {
      const e2 = this._source.events;
      this.handles.add([e2.on("connectionStatus", (e3) => this.remoteClient.invoke("setProperty", { propertyName: "connectionStatus", value: e3 }).catch(k)), e2.on("errorString", (e3) => this.remoteClient.invoke("setProperty", { propertyName: "errorString", value: e3 }).catch(k)), e2.on("feature", (e3) => this.remoteClient.invoke("emitEvent", { name: "data-received", event: { attributes: e3.attributes, centroid: e3.centroid, geometry: e3.geometry } }).catch(k)), e2.on("updateRate", (e3) => this.remoteClient.invoke("emitEvent", { name: "update-rate", event: __spreadValues({}, e3) }).catch(k))]);
    }
  }
  _initAttributeStore() {
    this.attributeStore ? this.attributeStore.invalidateResources() : this.attributeStore = new O$1({ type: "remote", initialize: (e2, t2) => y$9(this.remoteClient.invoke(j, e2, { signal: t2 }).catch(k)), update: (e2, t2) => y$9(this.remoteClient.invoke(C, e2, { signal: t2 }).catch(k)), render: (e2) => y$9(this.remoteClient.invoke(E, void 0, { signal: e2 }).catch(k)) }, this.config);
  }
  _initStores() {
    const e2 = this.service.type === "snapshot" ? "snapshot" : "on-demand", t2 = { geometryInfo: { geometryType: this.service.geometryType, hasM: false, hasZ: false }, spatialReference: this.spatialReference, fieldsIndex: this.fieldsIndex, fields: this.service.fields };
    this.featureStore = new l$5(t2, this._storage, e2), this.aggregateStore = new L(t2, this.spatialReference, this._storage), this.handles.add(this.aggregateStore.events.on("valueRangesChanged", (e3) => {
      this.remoteClient.invoke("emitEvent", { name: "valueRangesChanged", event: { valueRanges: e3.valueRanges } }).catch(k);
    }));
  }
  _initQueryEngine() {
    var e2;
    const t2 = this;
    (e2 = this.queryEngine) == null || e2.destroy(), this.queryEngine = new Z({ definitionExpression: this.config.definitionExpression, fields: this.service.fields, geometryType: this.service.geometryType, objectIdField: this.service.objectIdField, hasM: false, hasZ: false, spatialReference: this.spatialReference.toJSON(), cacheSpatialQueries: true, featureStore: this.featureStore, aggregateAdapter: { getFeatureObjectIds: (e3) => t2.aggregateStore.getFeatureDisplayIdsForAggregate(e3).map((e4) => t2.getObjectId(e4)) }, timeInfo: this.service.timeInfo });
  }
  destroy() {
    this._updateQueue.destroy(), this._source.destroy(), this.queryEngine.destroy(), this.attributeStore && this.attributeStore.destroy(), clearInterval(this._checkUpdating);
  }
  get fieldsIndex() {
    return new e$4(this.service.fields);
  }
  get hasAggregates() {
    return !!this.config.schema.targets.aggregate;
  }
  get spatialReference() {
    return this.tileStore.tileScheme.spatialReference;
  }
  get updating() {
    return this.isUpdating();
  }
  isUpdating() {
    return this._source.updating || !!this._updateQueue.length;
  }
  enableEvent(e2) {
    this._source.enableEvent(e2.name, e2.value);
  }
  pause() {
    this._updateQueue.pause(), this._updateQueue.clear();
  }
  update(e2, r2) {
    return __async(this, null, function* () {
      this._set("config", r2), this._schema = r2.schema, this._initQueryEngine(), yield Promise.all([this._source.update(e2, r2.schema.source), this.featureStore.updateSchema(e2, r2.schema.targets.feature), this.attributeStore.update(e2, r2), this.attributeStore.updateFilters(e2, this)]), yield this.aggregateStore.updateSchema(e2, r2.schema.targets.aggregate), t$7("esri-2d-update-debug") && e2.describe();
    });
  }
  applyUpdate(e2) {
    return __async(this, null, function* () {
      e2.mesh && this.clearTiles(), this._updateQueue.clear(), this._updateQueue.resume(), yield this._source.applyUpdate(e2), this.notifyChange("updating"), yield $(this, "updating", true), this.hasAggregates && (yield C$3(10), yield $(this, "updating", true));
    });
  }
  onEdits(e2) {
    return __async(this, null, function* () {
      try {
        const t2 = e2.deletedFeatures.map((e3) => __spreadProps(__spreadValues({}, e3), { objectId: e3.objectId && e3.objectId !== -1 ? e3.objectId : this._lookupObjectIdByGlobalId(e3.globalId) }));
        this.featureStore.invalidate(), yield this._source.edit(__spreadProps(__spreadValues({}, e2), { deletedFeatures: t2 }));
      } catch (t2) {
      }
    });
  }
  refresh() {
    return __async(this, null, function* () {
      this.featureStore.invalidate(), this.clearTiles(), this._source.refresh(), this._cleanupNeeded = true, this.notifyChange("updating"), yield $(this, "updating", true);
    });
  }
  clearTiles() {
    for (const e2 of this.tileStore.tiles)
      this.processor.onTileClear(e2);
  }
  onTileUpdate(e2) {
    this.aggregateStore.onTileUpdate(e2);
    for (const t2 of e2.added)
      this._source.subscribe(t2), this._level = t2.level;
    for (const t2 of e2.removed)
      this._source.unsubscribe(t2), this._cleanupNeeded = true, this._tileToResolver.has(t2.id) && (this._tileToResolver.get(t2.id).resolve(), this._tileToResolver.delete(t2.id));
    this.notifyChange("updating");
  }
  onIdle() {
    this._invalidated && ((this.hasAggregates || this.processor.type === "heatmap") && this._repushTiles(), this._invalidated = false), this._markAndSweep();
  }
  queryExtent(e2) {
    return this.queryEngine.executeQueryForExtent(e2);
  }
  queryFeatures(e2) {
    return this.queryEngine.executeQuery(e2);
  }
  queryFeatureCount(e2) {
    return this.queryEngine.executeQueryForCount(e2);
  }
  queryLatestObservations(e2) {
    return this.queryEngine.executeQueryForLatestObservations(e2);
  }
  queryObjectIds(e2) {
    return this.queryEngine.executeQueryForIds(e2);
  }
  queryStatistics() {
    return __async(this, null, function* () {
      return __spreadProps(__spreadValues({}, this.featureStore.storeStatistics), { displayedFeatureCount: 0, displayedVertexCount: 0, displayPreProcessTime: 0 });
    });
  }
  getObjectId(e2) {
    return this.featureStore.lookupObjectId(e2, this._storage);
  }
  getDisplayId(e2) {
    if (this._schema.targets.aggregate) {
      const t2 = this.aggregateStore.getDisplayId(e2);
      if (t$4(t2)) {
        const t3 = this.featureStore.lookupDisplayId(e2);
        return this.aggregateStore.getDisplayIdForReferenceId(t3);
      }
      return t2;
    }
    return this.featureStore.lookupDisplayId(e2);
  }
  getFeature(e2) {
    const t2 = this.featureStore.lookupFeatureByDisplayId(e2, this._storage);
    if (t$4(t2))
      return null;
    const s2 = t2.readHydratedGeometry(), i2 = ee(s2, t2.geometryType, t2.hasZ, t2.hasM);
    return { attributes: t2.readAttributes(), geometry: i2 };
  }
  getAggregate(e2) {
    return this.aggregateStore.getAggregate(e2);
  }
  setHighlight(e2) {
    return __async(this, null, function* () {
      const t2 = e2.map((e3) => this.getDisplayId(e3));
      return this.attributeStore.setHighlight(e2, t2);
    });
  }
  _lookupObjectIdByGlobalId(e2) {
    const t2 = this.service.globalIdField;
    if (t$4(t2))
      throw new Error("Expected globalIdField to be defined");
    let s2 = null;
    if (this.featureStore.forEach((r2) => {
      e2 === r2.readAttribute(t2) && (s2 = r2.getObjectId());
    }), t$4(s2))
      throw new Error(`Expected to find a feature with globalId ${e2}`);
    return s2;
  }
  _repushTiles() {
    for (const e2 of this.tileStore.tiles)
      this._patchTile({ type: "append", id: e2.key.id, addOrUpdate: c$5.fromOptimizedFeatures([], this.service.geometryType), remove: [], end: true, status: t$3.empty() });
  }
  _maybeForceCleanup() {
    performance.now() - this._lastCleanup > w && this._markAndSweep();
  }
  _patchTile(e2, t2) {
    const r2 = this._updateQueue.push(e2, t2).then(() => {
      this.notifyChange("updating");
    }).catch((e3) => {
      this.notifyChange("updating");
    });
    return this.notifyChange("updating"), r2;
  }
  _onTileMessage(e2, t2) {
    return __async(this, null, function* () {
      a$6(t2);
      const s2 = this.tileStore.get(e2.id);
      if (!s2)
        return;
      if (e2.clear)
        return this.processor.onTileClear(s2);
      const i2 = e2.status;
      e2.remove.length && (this._cleanupNeeded = true);
      const a2 = [];
      for (const r2 of e2.remove)
        a2.push(this.featureStore.lookupDisplayId(r2));
      e2.remove = a2;
      try {
        if (t$4(e2.addOrUpdate))
          return void this.processor.onTileMessage(s2, __spreadProps(__spreadValues({}, e2), { addOrUpdate: null }), this.hasAggregates, t2).catch(j$1);
        if (e2.addOrUpdate.setArcadeSpatialReference(this.spatialReference), this.featureStore.hasInstance(e2.addOrUpdate.instance) && i2.targets.feature || (i2.targets.feature = true, this.featureStore.onTileData(s2, e2)), i2.storage.data && i2.storage.filters || (i2.storage.data = true, i2.storage.filters = true, this.attributeStore.onTileData(s2, e2), this._source.type === "geoevent" ? (yield this.attributeStore.sendUpdates(), a$6(t2)) : this.attributeStore.sendUpdates()), this.hasAggregates && !i2.targets.aggregate) {
          i2.targets.aggregate = true;
          const t3 = F(this._source) && this._source.loading, r2 = !F(this._source) || t3 || e2.end;
          if (this.aggregateStore.onTileData(s2, e2, this._storage, this.attributeStore, r2), !r2)
            return;
          i2.mesh || (this.attributeStore.onTileData(s2, e2), this.attributeStore.sendUpdates(), this.processor.onTileClear(s2));
        }
        i2.mesh || (i2.mesh = true, yield this.processor.onTileMessage(s2, e2, this.hasAggregates, t2), a$6(t2)), this._maybeForceCleanup();
      } catch (o2) {
        j$1(o2);
      }
    });
  }
  _mark(e2, t2, r2) {
    const s2 = (4294901760 & this._storage.getInstanceId(e2)) >>> 16;
    e2 && (t2.add(s2), r2.set(e2));
  }
  _markAndSweep() {
    this._lastCleanup = performance.now();
    if (!(!(this._source.type === "feature" && this._source.mode === "snapshot") && (this._source.type === "geoevent" || this._cleanupNeeded)))
      return;
    this._cleanupNeeded = false;
    const e2 = this._storage.getBitset(this._markedIdsBufId), t2 = new Set();
    e2.clear();
    for (const s2 of this.tileStore.tiles)
      this._source.forEachRequest(s2.key.id, (s3) => {
        if (t$4(s3.addOrUpdate))
          return;
        const i2 = s3.addOrUpdate.getCursor();
        for (; i2.next(); ) {
          let r2 = i2.getDisplayId();
          if (!r2) {
            const e3 = i2.getObjectId();
            r2 = this.featureStore.lookupDisplayId(e3);
          }
          this._mark(r2, t2, e2);
        }
      });
    this._source.forEachPendingEdit((r2) => {
      const s2 = this.featureStore.lookupDisplayId(r2);
      this._mark(s2, t2, e2);
    }), this._updateQueue.forEach((r2) => {
      for (const s2 of r2.remove) {
        const r3 = this.featureStore.lookupDisplayId(s2);
        this._mark(r3, t2, e2);
      }
    }), this.config.schema.targets.aggregate && (this.aggregateStore.sweepFeatures(e2, this.featureStore), this.aggregateStore.sweepClusters(this._storage, this.attributeStore, this._level)), this.featureStore.sweepFeatures(e2, this._storage, this.attributeStore), this.featureStore.sweepFeatureSets(t2);
  }
};
e$2([y$6({ constructOnly: true })], R.prototype, "tileStore", void 0), e$2([y$6()], R.prototype, "config", void 0), e$2([y$6({ readOnly: true })], R.prototype, "fieldsIndex", null), e$2([y$6()], R.prototype, "processor", void 0), e$2([y$6({ constructOnly: true })], R.prototype, "remoteClient", void 0), e$2([y$6({ constructOnly: true })], R.prototype, "service", void 0), e$2([y$6()], R.prototype, "spatialReference", null), e$2([y$6()], R.prototype, "updating", null), R = e$2([i$2("esri.views.2d.layers.features.controllers.FeatureController2D")], R);
var O = R;
const p = new Set();
function h() {
  return p;
}
let u = class extends d$8 {
  constructor() {
    super(...arguments), this.controller = null, this.processor = null, this.remoteClient = null, this.tileStore = null, this.service = null, this.viewState = null;
  }
  initialize() {
    this.handles.add(this.watch("updating", (t2) => {
      this.remoteClient.invoke("setUpdating", t2).catch((t3) => {
      });
    }));
  }
  destroy() {
    var t2, e2, r2;
    (t2 = this.controller) == null || t2.destroy(), (e2 = this.processor) == null || e2.destroy(), (r2 = this.tileStore) == null || r2.destroy(), this.controller = this.processor = this.tileStore = this.remoteClient = null;
  }
  get updating() {
    return !this.controller || this.controller.updating;
  }
  startup(_0) {
    return __async(this, arguments, function* ({ service: t2, config: e2, tileInfo: r2, tiles: o2 }) {
      if (this.service = t2, !this.tileStore) {
        const t3 = new h$8(x$2.fromJSON(r2));
        this.tileStore = new l$6(t3);
      }
      this.tileStore.clear(), yield this._createProcessorAndController(e2), yield this.update({ config: e2 }, true), this.tileStore.updateTiles(o2);
    });
  }
  updateTiles(t2) {
    return __async(this, null, function* () {
      this.tileStore.updateTiles(t2);
    });
  }
  update(_0) {
    return __async(this, arguments, function* ({ config: t2 }, e2 = false) {
      const r2 = t$3.empty();
      return e2 || this.controller.pause(), yield Promise.all([this.processor.update(r2, t2), this.controller.update(r2, t2)]), r2.toJSON();
    });
  }
  applyUpdate(t2) {
    return __async(this, null, function* () {
      return this.controller.applyUpdate(t$3.create(t2));
    });
  }
  _createProcessorAndController(t2) {
    return __async(this, null, function* () {
      yield Promise.all([this._handleControllerConfig(t2), this._handleProcessorConfig(t2)]), this.controller.processor = this.processor;
    });
  }
  _handleControllerConfig(t2) {
    return __async(this, null, function* () {
      const e2 = yield this._createController(this.service, t2);
      return yield e2.startup(), e2;
    });
  }
  _handleProcessorConfig(t2) {
    return __async(this, null, function* () {
      return this._createProcessor(this.service, t2);
    });
  }
  _createController(t2, e2) {
    return __async(this, null, function* () {
      this.controller && this.controller.destroy();
      const { tileStore: r2, remoteClient: o2 } = this, s2 = new O({ service: t2, config: e2, tileStore: r2, remoteClient: o2 });
      return this.controller = s2, s2;
    });
  }
  _createProcessor(t2, e2) {
    return __async(this, null, function* () {
      const r2 = e2.schema.processors[0].type, o2 = (yield o$3(r2)).default, { remoteClient: s2, tileStore: i2 } = this, l2 = new o2({ service: t2, config: e2, tileStore: i2, remoteClient: s2 });
      return this.processor && this.processor.destroy(), this.processor = l2, l2;
    });
  }
};
e$2([y$6()], u.prototype, "controller", void 0), e$2([y$6()], u.prototype, "processor", void 0), e$2([y$6()], u.prototype, "updating", null), e$2([y$6()], u.prototype, "viewState", void 0), u = e$2([i$2("esri.views.2d.layers.features.Pipeline")], u);
var d = u;
export default d;
export { h as getInstances };
