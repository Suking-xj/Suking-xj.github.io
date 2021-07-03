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
import { f5 as e, aa as s$1, a0 as t$1, bs as s$2, cm as d$1, a5 as r$1, ci as X, fq as m$1, fr as i, fs as t$2, ft as s$3, cE as e$1, fu as e$2, bT as y$2, cT as G, d0 as L, cW as p$2, fv as u$1, bb as u$2, bx as u$3, bc as y$3, be as c$2, b6 as i$1 } from "./vendor.74d5941c.js";
import { a as a$2, A, D, f as f$2 } from "./aaBoundingBox.b76947f8.js";
import { y as y$1, j, p as p$1 } from "./projectionSupport.62084d5a.js";
import { WhereClause as f$1 } from "./WhereClause.f27c6004.js";
import { x as x$1, n as n$1, _, N as N$1, t as t$3, J as J$1, j as j$1, v as v$1, I as I$1, P as P$1 } from "./timeSupport.2cea3b6f.js";
class c$1 {
  constructor(e$12, c2) {
    this._cache = new e(e$12), this._invalidCache = new e(c2);
  }
  get(t2, c2) {
    const i2 = `${c2.uid}:${t2}`, r2 = this._cache.get(i2);
    if (r2)
      return r2;
    if (this._invalidCache.get(i2) !== void 0)
      return null;
    try {
      const r3 = f$1.create(t2, c2);
      return this._cache.put(i2, r3), r3;
    } catch (e2) {
      return this._invalidCache.put(i2, null), null;
    }
  }
}
const s = new c$1(50, 500), n = "feature-store:unsupported-query", t = " as ", r = new Set(["esriFieldTypeOID", "esriFieldTypeSmallInteger", "esriFieldTypeInteger", "esriFieldTypeSingle", "esriFieldTypeDouble", "esriFieldTypeLong", "esriFieldTypeDate"]);
function o(i2, t2) {
  if (!t2)
    return true;
  const r2 = s.get(t2, i2);
  if (!r2)
    throw new s$1(n, "invalid SQL expression", { where: t2 });
  if (!r2.isStandardized)
    throw new s$1(n, "where clause is not standard", { where: t2 });
  return c(i2, r2.fieldNames, "where clause contains missing fields"), true;
}
function a$1(i2, t2, r2) {
  if (!t2)
    return true;
  const o2 = s.get(t2, i2);
  if (!o2)
    throw new s$1(n, "invalid SQL expression", { having: t2 });
  if (!o2.isAggregate)
    throw new s$1(n, "having does not contain a valid aggregate function", { having: t2 });
  const a2 = o2.fieldNames;
  c(i2, a2, "having contains missing fields");
  if (!o2.getExpressions().every((e2) => {
    const { aggregateType: s2, field: n2 } = e2, t3 = i2.has(n2) && i2.get(n2).name;
    return r2.some((e3) => {
      const { onStatisticField: n3, statisticType: r3 } = e3;
      return (i2.has(n3) && i2.get(n3).name) === t3 && r3.toLowerCase().trim() === s2;
    });
  }))
    throw new s$1(n, "expressions in having should also exist in outStatistics", { having: t2 });
  return true;
}
function l(e2, i2) {
  return e2 ? s.get(e2, i2) : null;
}
function c(i2, s2, t2, r2 = true) {
  const o2 = [];
  for (const u2 of s2)
    if (u2 !== "*" && !i2.has(u2))
      if (r2) {
        const s3 = d(u2);
        try {
          const t3 = l(s3, i2);
          if (!t3)
            throw new s$1(n, "invalid SQL expression", { where: s3 });
          if (!t3.isStandardized)
            throw new s$1(n, "expression is not standard", { clause: t3 });
          c(i2, t3.fieldNames, "expression contains missing fields");
        } catch (a2) {
          const e2 = a2 && a2.details;
          if (e2 && (e2.clause || e2.where))
            throw a2;
          e2 && e2.missingFields ? o2.push(...e2.missingFields) : o2.push(u2);
        }
      } else
        o2.push(u2);
  if (o2.length)
    throw new s$1(n, t2, { missingFields: o2 });
}
function d(e2) {
  return e2.split(t)[0];
}
function u(e2) {
  return e2.split(t)[1];
}
function f(e2, i2) {
  const s2 = i2.get(e2);
  return !!s2 && !r.has(s2.type);
}
class a {
  constructor(t2, a2, r2) {
    this._fieldDataCache = new Map(), this._returnDistinctMap = new Map(), this.returnDistinctValues = t2.returnDistinctValues, this.fieldsIndex = r2, this.featureAdapter = a2;
    const u$12 = t2.outFields;
    if (u$12 && u$12.indexOf("*") === -1) {
      this.outFields = u$12;
      let t3 = 0;
      for (const a3 of u$12) {
        const u$13 = d(a3), l$1 = this.fieldsIndex.get(u$13), n2 = l$1 ? null : l(u$13, r2), c2 = l$1 ? l$1.name : u(a3) || "FIELD_EXP_" + t3++;
        this._fieldDataCache.set(a3, { alias: c2, clause: n2 });
      }
    }
  }
  countDistinctValues(t2) {
    return this.returnDistinctValues ? (t2.forEach((t3) => this.getAttributes(t3)), this._returnDistinctMap.size) : t2.length;
  }
  getAttributes(t2) {
    const e2 = this._processAttributesForOutFields(t2);
    return this._processAttributesForDistinctValues(e2);
  }
  getFieldValue(t2, e2, i2) {
    const a2 = i2 ? i2.name : e2;
    let r2 = null;
    return this._fieldDataCache.has(a2) ? r2 = this._fieldDataCache.get(a2).clause : i2 || (r2 = l(e2, this.fieldsIndex), this._fieldDataCache.set(a2, { alias: a2, clause: r2 })), i2 ? this.featureAdapter.getAttribute(t2, a2) : r2.calculateValue(t2, this.featureAdapter);
  }
  validateItem(t2, e2) {
    return this._fieldDataCache.has(e2) || this._fieldDataCache.set(e2, { alias: e2, clause: l(e2, this.fieldsIndex) }), this._fieldDataCache.get(e2).clause.testFeature(t2, this.featureAdapter);
  }
  validateItems(t2, e2) {
    return this._fieldDataCache.has(e2) || this._fieldDataCache.set(e2, { alias: e2, clause: l(e2, this.fieldsIndex) }), this._fieldDataCache.get(e2).clause.testSet(t2, this.featureAdapter);
  }
  _processAttributesForOutFields(t2) {
    const e2 = this.outFields;
    if (!e2 || !e2.length)
      return this.featureAdapter.getAttributes(t2);
    const s2 = {};
    for (const i2 of e2) {
      const { alias: e3, clause: a2 } = this._fieldDataCache.get(i2);
      s2[e3] = a2 ? a2.calculateValue(t2, this.featureAdapter) : this.featureAdapter.getAttribute(t2, e3);
    }
    return s2;
  }
  _processAttributesForDistinctValues(e2) {
    if (t$1(e2) || !this.returnDistinctValues)
      return e2;
    const s2 = this.outFields, i2 = [];
    if (s2)
      for (const t2 of s2) {
        const { alias: s3 } = this._fieldDataCache.get(t2);
        i2.push(e2[s3]);
      }
    else
      for (const t2 in e2)
        i2.push(e2[t2]);
    const a2 = `${(s2 || ["*"]).join(",")}=${i2.join(",")}`;
    let r2 = this._returnDistinctMap.get(a2) || 0;
    return this._returnDistinctMap.set(a2, ++r2), r2 > 1 ? null : e2;
  }
}
function m(e2) {
  return e2.substr(24, 12) + e2.substr(19, 4) + e2.substr(16, 2) + e2.substr(14, 2) + e2.substr(11, 2) + e2.substr(9, 2) + e2.substr(6, 2) + e2.substr(4, 2) + e2.substr(2, 2) + e2.substr(0, 2);
}
function p(e2, t2, s2) {
  return (s2 ? e2 > t2 : e2 < t2) ? -1 : (s2 ? e2 < t2 : e2 > t2) ? 1 : 0;
}
function y(e2, t2, s2) {
  return s2 ? t2 - e2 : e2 - t2;
}
function g(e2, t2, s2, i2) {
  if (s2 && s2.type === "esriFieldTypeDate") {
    const s3 = new Date(e2).getTime(), r2 = new Date(t2).getTime();
    if (!isNaN(s3) && !isNaN(r2))
      return y(s3, r2, i2);
  }
  if (typeof e2 == "number" && typeof t2 == "number")
    return y(e2, t2, i2);
  if (typeof e2 == "string" && typeof t2 == "string") {
    const r2 = e2.toUpperCase(), n2 = t2.toUpperCase();
    return !s2 || s2.type !== "esriFieldTypeGUID" && s2.type !== "esriFieldTypeGlobalID" ? p(r2, n2, i2) : p(m(r2), m(n2), i2);
  }
  return i2 ? 1 : -1;
}
class I {
  constructor(e2, t2, s2) {
    this.items = e2, this.queryGeometry = t2, this.definitionExpression = s2.definitionExpression, this.geometryType = s2.geometryType, this.hasM = s2.hasM, this.hasZ = s2.hasZ, this.objectIdField = s2.objectIdField, this.spatialReference = s2.spatialReference, this.fieldsIndex = s2.fieldsIndex, this.timeInfo = s2.timeInfo, this.featureAdapter = s2.featureAdapter, this.aggregateAdapter = s2.aggregateAdapter;
  }
  get size() {
    return this.items.length;
  }
  createQueryResponseForCount(e2) {
    const t2 = new a(e2, this.featureAdapter, this.fieldsIndex);
    if (!e2.outStatistics)
      return t2.countDistinctValues(this.items);
    const { groupByFieldsForStatistics: s2, having: i2 } = e2;
    if (!!!(s2 == null ? void 0 : s2.length))
      return 1;
    const r2 = new Map(), n2 = new Map(), o2 = new Set(), a$12 = e2.outStatistics;
    for (const u2 of a$12) {
      const { statisticType: e3 } = u2, a2 = e3 !== "exceedslimit" ? u2.onStatisticField : void 0;
      if (!n2.has(a2)) {
        const e4 = [];
        for (const i3 of s2) {
          const s3 = this._getAttributeValues(t2, i3, r2);
          e4.push(s3);
        }
        n2.set(a2, this._calculateUniqueValues(e4));
      }
      const l2 = n2.get(a2);
      for (const s3 in l2) {
        const { data: e4, items: r3 } = l2[s3], n3 = e4.join(",");
        i2 && !t2.validateItems(r3, i2) || o2.add(n3);
      }
    }
    return o2.size;
  }
  createQueryResponse(e2) {
    let t2;
    if (e2.outStatistics) {
      t2 = e2.outStatistics.some((e3) => e3.statisticType === "exceedslimit") ? this._createExceedsLimitQueryResponse(e2) : this._createStatisticsQueryResponse(e2);
    } else
      t2 = this._createFeatureQueryResponse(e2);
    return e2.returnQueryGeometry && (s$2(e2.outSR) && !d$1(this.queryGeometry.spatialReference, e2.outSR) ? t2.queryGeometry = x$1(__spreadValues({ spatialReference: e2.outSR }, y$1(this.queryGeometry, this.queryGeometry.spatialReference, e2.outSR))) : t2.queryGeometry = x$1(__spreadValues({ spatialReference: e2.outSR }, this.queryGeometry))), t2;
  }
  createSnappingResponse(e2, t2) {
    const s2 = this.featureAdapter, i2 = x(this.hasZ, this.hasM), { x: r2, y: n2 } = e2.point, o2 = typeof e2.distance == "number" ? e2.distance : e2.distance.x, a2 = typeof e2.distance == "number" ? e2.distance : e2.distance.y, u2 = { candidates: [] }, l2 = this.geometryType === "esriGeometryPolygon", c2 = this.getPointCreator(e2.point, this.spatialReference, t2);
    for (const h of this.items) {
      const t3 = s2.getGeometry(h);
      if (!t3)
        continue;
      const { coords: d2, lengths: f2 } = t3;
      if (1 & e2.types) {
        let e3 = 0;
        for (let t4 = 0; t4 < f2.length; t4++) {
          const l3 = f2[t4];
          for (let t5 = 0; t5 < l3; t5++, e3 += i2) {
            const f3 = d2[e3], m2 = d2[e3 + 1];
            if (t5 !== l3 - 1) {
              const t6 = d2[e3 + i2], l4 = d2[e3 + i2 + 1], { x: p2, y: y2 } = b(r2, n2, f3, m2, t6, l4), g2 = (r2 - p2) / o2, I2 = (n2 - y2) / a2, x2 = g2 * g2 + I2 * I2;
              x2 <= 1 && u2.candidates.push({ type: "edge", objectId: s2.getObjectId(h), distance: Math.sqrt(x2), target: c2(p2, y2), start: c2(f3, m2), end: c2(t6, l4) });
            }
          }
        }
      }
      if (2 & e2.types) {
        const e3 = l2 ? d2.length - i2 : d2.length;
        for (let t4 = 0; t4 < e3; t4 += i2) {
          const e4 = d2[t4], i3 = d2[t4 + 1], l3 = (r2 - e4) / o2, f3 = (n2 - i3) / a2, m2 = l3 * l3 + f3 * f3;
          m2 <= 1 && u2.candidates.push({ type: "vertex", objectId: s2.getObjectId(h), distance: Math.sqrt(m2), target: c2(e4, i3) });
        }
      }
    }
    return u2.candidates.sort((e3, t3) => e3.distance - t3.distance), u2;
  }
  getPointCreator(t2, s2, r2) {
    const n2 = r$1(r2) && !d$1(s2, r2) ? (e2) => y$1(e2, s2, r2) : (e2) => e2;
    return t2.z != null && t2.m != null ? (e2, s3) => n2({ x: e2, y: s3, z: t2.z, m: t2.m }) : t2.z != null ? (e2, s3) => n2({ x: e2, y: s3, z: t2.z }) : t2.m != null ? (e2, s3) => n2({ x: e2, y: s3, m: t2.m }) : (e2, t3) => n2({ x: e2, y: t3 });
  }
  executeAttributesQuery(e2) {
    const t2 = l(e2.where, this.fieldsIndex);
    if (!t2)
      return Promise.resolve(this);
    if (t2.isStandardized) {
      let s2 = 0;
      const i2 = [];
      for (const e3 of this.items)
        t2.testFeature(e3, this.featureAdapter) && (i2[s2++] = e3);
      const r2 = new I(i2, this.queryGeometry, this);
      return r2.definitionExpression = e2.where, Promise.resolve(r2);
    }
    return Promise.reject(new TypeError("Where clause is not standardized"));
  }
  executeAggregateIdsQuery(e2) {
    if (!e2.aggregateIds || !e2.aggregateIds.length || t$1(this.aggregateAdapter))
      return Promise.resolve(this);
    const s2 = new Set();
    for (const t2 of e2.aggregateIds) {
      this.aggregateAdapter.getFeatureObjectIds(t2).forEach((e3) => s2.add(e3));
    }
    const i2 = this.featureAdapter.getObjectId;
    return Promise.resolve(new I(this.items.filter((e3) => s2.has(i2(e3))), this.queryGeometry, this));
  }
  executeObjectIdsQuery(e2) {
    if (!e2.objectIds || !e2.objectIds.length)
      return Promise.resolve(this);
    const t2 = new Set(e2.objectIds), s2 = this.featureAdapter.getObjectId;
    return Promise.resolve(new I(this.items.filter((e3) => t2.has(s2(e3))), this.queryGeometry, this));
  }
  executeTimeQuery(t2) {
    const s2 = n$1(this.timeInfo, t2.timeExtent, this.featureAdapter);
    if (!r$1(s2))
      return Promise.resolve(this);
    const i2 = this.items.filter(s2);
    return Promise.resolve(new I(i2, this.queryGeometry, this));
  }
  filterLatest() {
    const { trackIdField: e2, startTimeField: t2, endTimeField: s2 } = this.timeInfo, i2 = s2 || t2, r2 = new Map(), n2 = this.featureAdapter.getAttribute;
    for (const a2 of this.items) {
      const t3 = n2(a2, e2), s3 = n2(a2, i2), o3 = r2.get(t3);
      (!o3 || s3 > n2(o3, i2)) && r2.set(t3, a2);
    }
    const o2 = Array.from(r2.values());
    return Promise.resolve(new I(o2, this.queryGeometry, this));
  }
  project(e2) {
    return __async(this, null, function* () {
      if (!e2 || d$1(this.spatialReference, e2))
        return this;
      const t2 = this.featureAdapter, s2 = (yield j(this.items.map((e3) => _(this.geometryType, this.hasZ, this.hasM, t2.getGeometry(e3))), this.spatialReference, e2)).map((e3, s3) => t2.cloneWithGeometry(this.items[s3], X(e3, this.hasZ, this.hasM)));
      return new I(s2, this.queryGeometry, { definitionExpression: this.definitionExpression, geometryType: this.geometryType, hasM: this.hasM, hasZ: this.hasZ, objectIdField: this.objectIdField, spatialReference: e2, fieldsIndex: this.fieldsIndex, timeInfo: this.timeInfo, featureAdapter: this.featureAdapter });
    });
  }
  _sortFeatures(e2, t2, s2) {
    if (e2.length > 1 && t2 && t2.length)
      for (const i2 of t2.reverse()) {
        const t3 = i2.split(" "), r2 = t3[0], n2 = this.fieldsIndex.get(r2), o2 = t3[1] && t3[1].toLowerCase() === "desc";
        e2.sort((e3, t4) => g(s2(e3, r2, n2), s2(t4, r2, n2), n2, o2));
      }
  }
  _createFeatureQueryResponse(e2) {
    const t2 = this.items, { geometryType: s2, hasM: i2, hasZ: r2, objectIdField: o2, spatialReference: a2 } = this, { outFields: u2, outSR: l2, quantizationParameters: h, resultRecordCount: d2, resultOffset: f2, returnZ: m2, returnM: p2 } = e2, y2 = d2 != null && t2.length > (f2 || 0) + d2, g2 = u2 && (u2.indexOf("*") > -1 ? [...this.fieldsIndex.fields] : u2.map((e3) => this.fieldsIndex.get(e3)));
    return { exceededTransferLimit: y2, features: this._createFeatures(e2, t2), fields: g2, geometryType: s2, hasM: i2 && p2, hasZ: r2 && m2, objectIdFieldName: o2, spatialReference: x$1(l2 || a2), transform: h && m$1(h) || null };
  }
  _createFeatures(e2, t2) {
    const s2 = new a(e2, this.featureAdapter, this.fieldsIndex), { hasM: i2, hasZ: r2 } = this, { orderByFields: o2, quantizationParameters: a$12, returnGeometry: u2, returnCentroid: c2, maxAllowableOffset: f2, resultOffset: m2, resultRecordCount: p2, returnZ: y2 = false, returnM: g2 = false } = e2, I2 = r2 && y2, b2 = i2 && g2;
    let x2 = [], T = 0;
    const F = [...t2];
    if (this._sortFeatures(F, o2, (e3, t3, i3) => s2.getFieldValue(e3, t3, i3)), u2 || c2) {
      const e3 = m$1(a$12);
      if (u2 && !c2)
        for (const t3 of F)
          x2[T++] = { attributes: s2.getAttributes(t3), geometry: _(this.geometryType, this.hasZ, this.hasM, this.featureAdapter.getGeometry(t3), f2, e3, I2, b2) };
      else if (!u2 && c2)
        for (const t3 of F)
          x2[T++] = { attributes: s2.getAttributes(t3), centroid: N$1(this, this.featureAdapter.getCentroid(t3, this), e3) };
      else
        for (const t3 of F)
          x2[T++] = { attributes: s2.getAttributes(t3), centroid: N$1(this, this.featureAdapter.getCentroid(t3, this), e3), geometry: _(this.geometryType, this.hasZ, this.hasM, this.featureAdapter.getGeometry(t3), f2, e3, I2, b2) };
    } else
      for (const n2 of F) {
        const e3 = s2.getAttributes(n2);
        e3 && (x2[T++] = { attributes: e3 });
      }
    const S = m2 || 0;
    if (p2 != null) {
      const e3 = S + p2;
      x2 = x2.slice(S, Math.min(x2.length, e3));
    }
    return x2;
  }
  _createExceedsLimitQueryResponse(e2) {
    let t2 = false, s2 = Number.POSITIVE_INFINITY, i2 = Number.POSITIVE_INFINITY, r2 = Number.POSITIVE_INFINITY;
    for (const n2 of e2.outStatistics)
      if (n2.statisticType === "exceedslimit") {
        s2 = n2.maxPointCount != null ? n2.maxPointCount : Number.POSITIVE_INFINITY, i2 = n2.maxRecordCount != null ? n2.maxRecordCount : Number.POSITIVE_INFINITY, r2 = n2.maxVertexCount != null ? n2.maxVertexCount : Number.POSITIVE_INFINITY;
        break;
      }
    if (this.geometryType === "esriGeometryPoint")
      t2 = this.items.length > s2;
    else if (this.items.length > i2)
      t2 = true;
    else {
      const e3 = this.hasZ ? this.hasM ? 4 : 3 : this.hasM ? 3 : 2, s3 = this.featureAdapter;
      t2 = this.items.reduce((e4, t3) => {
        const i3 = s3.getGeometry(t3);
        return e4 + (i3 && i3.coords.length || 0);
      }, 0) / e3 > r2;
    }
    return { fields: [{ name: "exceedslimit", type: "esriFieldTypeInteger", alias: "exceedslimit", sqlType: "sqlTypeInteger", domain: null, defaultValue: null }], features: [{ attributes: { exceedslimit: Number(t2) } }] };
  }
  _createStatisticsQueryResponse(e2) {
    const t2 = { attributes: {} }, s2 = [], i2 = new Map(), r2 = new Map(), n2 = new Map(), o2 = new Map(), a$12 = new a(e2, this.featureAdapter, this.fieldsIndex), u2 = e2.outStatistics, { groupByFieldsForStatistics: c2, having: h, orderByFields: d2 } = e2, f2 = c2 && c2.length, m2 = !!f2, p2 = m2 && c2[0], y2 = m2 && !this.fieldsIndex.get(p2);
    for (const l2 of u2) {
      const { outStatisticFieldName: e3, statisticType: u3 } = l2, d3 = l2, g3 = u3 !== "exceedslimit" ? l2.onStatisticField : void 0, I2 = u3 === "percentile_disc" || u3 === "percentile_cont", b2 = m2 && f2 === 1 && (g3 === p2 || y2) && u3 === "count";
      if (m2) {
        if (!n2.has(g3)) {
          const e4 = [];
          for (const t4 of c2) {
            const s3 = this._getAttributeValues(a$12, t4, i2);
            e4.push(s3);
          }
          n2.set(g3, this._calculateUniqueValues(e4, a$12.returnDistinctValues));
        }
        const t3 = n2.get(g3);
        for (const s3 in t3) {
          const { count: r3, data: n3, items: u4, itemPositions: l3 } = t3[s3], f3 = n3.join(",");
          if (!h || a$12.validateItems(u4, h)) {
            const t4 = o2.get(f3) || { attributes: {} };
            let s4 = null;
            if (b2)
              s4 = r3;
            else {
              const e4 = this._getAttributeValues(a$12, g3, i2), t5 = l3.map((t6) => e4[t6]);
              s4 = I2 && "statisticParameters" in d3 ? this._getPercentileValue(d3, t5) : this._getStatisticValue(d3, t5);
            }
            t4.attributes[e3] = s4, c2.forEach((e4, s5) => t4.attributes[this.fieldsIndex.get(e4) ? e4 : `EXPR_${s5 + 1}`] = n3[s5]), o2.set(f3, t4);
          }
        }
      } else {
        const s3 = this._getAttributeValues(a$12, g3, i2);
        t2.attributes[e3] = I2 && "statisticParameters" in d3 ? this._getPercentileValue(d3, s3) : this._getStatisticValue(d3, s3, r2);
      }
      s2.push({ name: e3, alias: e3, type: "esriFieldTypeDouble" });
    }
    const g2 = m2 ? Array.from(o2.values()) : [t2];
    return this._sortFeatures(g2, d2, (e3, t3) => e3.attributes[t3]), { fields: s2, features: g2 };
  }
  _getStatisticValue(e2, t2, s2) {
    const { onStatisticField: i2, statisticType: r2 } = e2, n2 = s2 && s2.has(i2) ? s2.get(i2) : this._calculateStatistics(t2);
    s2 && s2.set(i2, n2);
    return n2[r2 === "var" ? "variance" : r2];
  }
  _getPercentileValue(e2, t2) {
    const { onStatisticField: s2, statisticParameters: i2, statisticType: r2 } = e2, { value: n2, orderBy: o2 } = i2, a2 = o2 === "desc", u2 = this.fieldsIndex.get(s2), l2 = [...t2].filter((e3) => e3 != null).sort((e3, t3) => g(e3, t3, u2, a2));
    return this._calculatePercentile(l2, n2, r2 === "percentile_disc");
  }
  _getAttributeValues(e2, t2, s2) {
    if (s2.has(t2))
      return s2.get(t2);
    const i2 = this.fieldsIndex.get(t2), r2 = this.items.map((s3) => e2.getFieldValue(s3, t2, i2));
    return s2.set(t2, r2), r2;
  }
  _calculateStatistics(e2) {
    let t2 = Number.POSITIVE_INFINITY, s2 = Number.NEGATIVE_INFINITY, i2 = null, r2 = null, n2 = null, o2 = null;
    const a2 = [];
    let u2 = 0;
    for (const l2 of e2)
      typeof l2 == "string" ? u2++ : l2 == null || isNaN(l2) || (i2 += l2, t2 = Math.min(t2, l2), s2 = Math.max(s2, l2), a2.push(l2), u2++);
    if (u2) {
      r2 = i2 / u2;
      let e3 = 0;
      for (const t3 of a2)
        e3 += __pow(t3 - r2, 2);
      o2 = u2 > 1 ? e3 / (u2 - 1) : 0, n2 = Math.sqrt(o2);
    } else
      t2 = null, s2 = null;
    return { avg: r2, count: u2, max: s2, min: t2, stddev: n2, sum: i2, variance: o2 };
  }
  _calculateUniqueValues(e2, t2) {
    const s2 = {}, i2 = this.items, r2 = i2.length;
    for (let n2 = 0; n2 < r2; n2++) {
      const r3 = i2[n2], o2 = [];
      for (const t3 of e2)
        o2.push(t3[n2]);
      const a2 = o2.join(",");
      t2 ? s2[a2] == null && (s2[a2] = { count: 1, data: o2, items: [r3], itemPositions: [n2] }) : s2[a2] == null ? s2[a2] = { count: 1, data: o2, items: [r3], itemPositions: [n2] } : (s2[a2].count++, s2[a2].items.push(r3), s2[a2].itemPositions.push(n2));
    }
    return s2;
  }
  _calculatePercentile(e2, t2, s2) {
    if (e2.length === 0)
      return null;
    if (t2 <= 0)
      return e2[0];
    if (t2 >= 1)
      return e2[e2.length - 1];
    const i2 = (e2.length - 1) * t2, r2 = Math.floor(i2), n2 = r2 + 1, o2 = i2 % 1, a2 = e2[r2], u2 = e2[n2];
    return n2 >= e2.length || s2 || typeof a2 == "string" || typeof u2 == "string" ? a2 : a2 * (1 - o2) + u2 * o2;
  }
}
function b(e2, t2, s2, i2, r2, n2) {
  const o2 = r2 - s2, a2 = n2 - i2, u2 = o2 * o2 + a2 * a2, l2 = (e2 - s2) * o2 + (t2 - i2) * a2, c2 = Math.min(1, Math.max(0, l2 / u2));
  return { x: s2 + o2 * c2, y: i2 + a2 * c2 };
}
function x(e2, t2) {
  return e2 ? t2 ? 4 : 3 : t2 ? 3 : 2;
}
function M(e2) {
  return e2.every((e3) => e3.statisticType !== "exceedslimit");
}
const P = "feature-store:unsupported-query";
const v = new Set(), N = new i(2e6);
let U = 0;
class Z {
  constructor(e2) {
    this.capabilities = { query: t$2 }, this.geometryType = e2.geometryType, this.hasM = e2.hasM, this.hasZ = e2.hasZ, this.objectIdField = e2.objectIdField, this.spatialReference = e2.spatialReference, this.definitionExpression = e2.definitionExpression, this.featureStore = e2.featureStore, this.aggregateAdapter = e2.aggregateAdapter, this._changeHandle = this.featureStore.events.on("changed", () => this.clearCache()), this.timeInfo = e2.timeInfo, e2.cacheSpatialQueries && (this._geometryQueryCache = new s$3(U++ + "$$", N)), this.fieldsIndex = new e$1(e2.fields), e2.scheduler && e2.task && (this._frameQueue = new e$2(), this._frameTask = e2.scheduler.registerTask(e2.task, (e3) => this._update(e3), () => this._frameQueue.length > 0));
  }
  destroy() {
    this._frameTask && (this._frameTask.remove(), this._frameTask = null, this._frameQueue.cancelAll(), this._frameQueue = null), this.clearCache(), this._geometryQueryCache && this._geometryQueryCache.destroy(), this._changeHandle && (this._changeHandle.remove(), this._changeHandle = null), this.fieldsIndex.destroy();
  }
  get featureAdapter() {
    return this.featureStore.featureAdapter;
  }
  get fullExtent() {
    const e2 = this.featureStore.fullBounds;
    return e2 ? { xmin: e2[0], ymin: e2[1], xmax: e2[2], ymax: e2[3], spatialReference: x$1(this.spatialReference) } : null;
  }
  get timeExtent() {
    return this.timeInfo ? (this._timeExtent || (this._timeExtent = t$3(this.timeInfo, this.featureStore)), this._timeExtent) : null;
  }
  clearCache() {
    this._geometryQueryCache && this._geometryQueryCache.clear(), this._allItems = null, this._timeExtent = null;
  }
  executeQuery() {
    return __async(this, arguments, function* (t2 = {}, i2) {
      let s2, r2 = y$2(t2);
      try {
        r2 = yield this._schedule(() => J$1(r2, this.definitionExpression, this.spatialReference), i2), r2 = yield this._reschedule(() => this._checkQuerySupport(r2), i2), s2 = yield this._reschedule(() => this._executeGeometryQuery(r2, i2), i2), s2 = yield this._reschedule(() => s2.executeAggregateIdsQuery(r2), i2), s2 = yield this._reschedule(() => s2.executeObjectIdsQuery(r2), i2), s2 = yield this._reschedule(() => s2.executeTimeQuery(r2), i2), s2 = yield this._reschedule(() => s2.executeAttributesQuery(r2), i2);
      } catch (a2) {
        if (a2 !== j$1)
          throw a2;
        s2 = new I([], null, this);
      }
      return s2.createQueryResponse(r2);
    });
  }
  executeQueryForCount() {
    return __async(this, arguments, function* (t2 = {}, i2) {
      let s2, r2 = y$2(t2);
      r2.returnGeometry = false, r2.returnCentroid = false, r2.outSR = null;
      try {
        r2 = yield this._schedule(() => J$1(r2, this.definitionExpression, this.spatialReference), i2), r2 = yield this._reschedule(() => this._checkQuerySupport(r2), i2), s2 = yield this._reschedule(() => this._executeGeometryQuery(r2, i2), i2), s2 = yield this._reschedule(() => s2.executeAggregateIdsQuery(r2), i2), s2 = yield this._reschedule(() => s2.executeObjectIdsQuery(r2), i2), s2 = yield this._reschedule(() => s2.executeTimeQuery(r2), i2), s2 = yield this._reschedule(() => s2.executeAttributesQuery(r2), i2);
      } catch (a2) {
        if (a2 !== j$1)
          throw a2;
        return 0;
      }
      return s2.createQueryResponseForCount(r2);
    });
  }
  executeQueryForExtent() {
    return __async(this, arguments, function* (t2 = {}, i2) {
      let s2, r2 = y$2(t2);
      const a2 = r2.outSR;
      try {
        r2 = yield this._schedule(() => J$1(r2, this.definitionExpression, this.spatialReference), i2), r2 = yield this._reschedule(() => this._checkQuerySupport(r2), i2), r2.returnGeometry = true, r2.returnCentroid = false, r2.outSR = null, s2 = yield this._reschedule(() => this._executeGeometryQuery(r2, i2), i2), s2 = yield this._reschedule(() => s2.executeAggregateIdsQuery(r2), i2), s2 = yield this._reschedule(() => s2.executeObjectIdsQuery(r2), i2), s2 = yield this._reschedule(() => s2.executeTimeQuery(r2), i2), s2 = yield this._reschedule(() => s2.executeAttributesQuery(r2), i2);
        const e2 = s2.size;
        if (!e2)
          return { count: e2, extent: null };
        A(J, D), this.featureStore.forEachBounds(s2.items, (e3) => f$2(J, e3), H);
        const t3 = { xmin: J[0], ymin: J[1], xmax: J[3], ymax: J[4], spatialReference: x$1(this.spatialReference) };
        this.hasZ && isFinite(J[2]) && isFinite(J[5]) && (t3.zmin = J[2], t3.zmax = J[5]);
        const n2 = y$1(t3, s2.spatialReference, a2);
        if (n2.spatialReference = x$1(a2 || this.spatialReference), n2.xmax - n2.xmin == 0) {
          const e3 = G(n2.spatialReference);
          n2.xmin -= e3, n2.xmax += e3;
        }
        if (n2.ymax - n2.ymin == 0) {
          const e3 = G(n2.spatialReference);
          n2.ymin -= e3, n2.ymax += e3;
        }
        if (this.hasZ && n2.zmin != null && n2.zmax != null && n2.zmax - n2.zmin == 0) {
          const e3 = G(n2.spatialReference);
          n2.zmin -= e3, n2.zmax += e3;
        }
        return { count: e2, extent: n2 };
      } catch (n2) {
        if (n2 === j$1)
          return { count: 0, extent: null };
        throw n2;
      }
    });
  }
  executeQueryForIds() {
    return __async(this, arguments, function* (e2 = {}, t2) {
      return this.executeQueryForIdSet(e2, t2).then((e3) => Array.from(e3));
    });
  }
  executeQueryForIdSet() {
    return __async(this, arguments, function* (t2 = {}, i2) {
      let s2, r2 = y$2(t2);
      r2.returnGeometry = false, r2.returnCentroid = false, r2.outSR = null;
      try {
        r2 = yield this._schedule(() => J$1(r2, this.definitionExpression, this.spatialReference), i2), r2 = yield this._reschedule(() => this._checkQuerySupport(r2), i2), s2 = yield this._reschedule(() => this._executeGeometryQuery(r2, i2), i2), s2 = yield this._reschedule(() => s2.executeAggregateIdsQuery(r2), i2), s2 = yield this._reschedule(() => s2.executeObjectIdsQuery(r2), i2), s2 = yield this._reschedule(() => s2.executeTimeQuery(r2), i2), s2 = yield this._reschedule(() => s2.executeAttributesQuery(r2), i2);
        const e2 = s2.items, t3 = new Set();
        return yield this._reschedule(() => {
          for (const i3 of e2)
            t3.add(s2.featureAdapter.getObjectId(i3));
        }, i2), t3;
      } catch (a2) {
        if (a2 === j$1)
          return new Set();
        throw a2;
      }
    });
  }
  executeQueryForSnapping(e2, i2) {
    return __async(this, null, function* () {
      const { point: s2, distance: a2, types: n2 } = e2;
      if (n2 === 0)
        return { candidates: [] };
      const o2 = yield this._reschedule(() => this._checkQuerySupport(e2.query), i2), c2 = !d$1(s2.spatialReference, this.spatialReference);
      c2 && (yield p$1(s2.spatialReference, this.spatialReference));
      const h = typeof a2 == "number" ? a2 : a2.x, l2 = typeof a2 == "number" ? a2 : a2.y, d2 = { xmin: s2.x - h, xmax: s2.x + h, ymin: s2.y - l2, ymax: s2.y + l2, spatialReference: s2.spatialReference }, m2 = c2 ? y$1(d2, this.spatialReference) : d2;
      if (!m2)
        return { candidates: [] };
      const p2 = (yield L(p$2(s2), null, { signal: i2 }))[0], y2 = (yield L(p$2(m2), null, { signal: i2 }))[0];
      if (t$1(p2) || t$1(y2))
        return { candidates: [] };
      let _2 = new I(this._searchFeatures(this._getQueryBBoxes(y2.toJSON())), null, this);
      _2 = yield this._reschedule(() => _2.executeObjectIdsQuery(o2), i2), _2 = yield this._reschedule(() => _2.executeTimeQuery(o2), i2), _2 = yield this._reschedule(() => _2.executeAttributesQuery(o2), i2);
      const x2 = p2.toJSON(), g2 = c2 ? y$1(x2, this.spatialReference) : x2, w = c2 ? Math.max(m2.xmax - m2.xmin, m2.ymax - m2.ymin) / 2 : a2;
      return _2.createSnappingResponse(__spreadProps(__spreadValues({}, e2), { point: g2, distance: w }), s2.spatialReference);
    });
  }
  executeQueryForLatestObservations() {
    return __async(this, arguments, function* (t2 = {}, i2) {
      if (!this.timeInfo || !this.timeInfo.trackIdField)
        throw new s$1(P, "Missing timeInfo or timeInfo.trackIdField", { query: t2, timeInfo: this.timeInfo });
      let r2, a2 = y$2(t2);
      try {
        a2 = yield this._schedule(() => J$1(a2, this.definitionExpression, this.spatialReference), i2), a2 = yield this._reschedule(() => this._checkQuerySupport(a2), i2), r2 = yield this._reschedule(() => this._executeGeometryQuery(a2, i2), i2), r2 = yield this._reschedule(() => r2.executeAggregateIdsQuery(a2), i2), r2 = yield this._reschedule(() => r2.executeObjectIdsQuery(a2), i2), r2 = yield this._reschedule(() => r2.executeTimeQuery(a2), i2), r2 = yield this._reschedule(() => r2.executeAttributesQuery(a2), i2), r2 = yield this._reschedule(() => r2.filterLatest(), i2);
      } catch (n2) {
        if (n2 !== j$1)
          throw n2;
        r2 = new I([], null, this);
      }
      return r2.createQueryResponse(a2);
    });
  }
  _schedule(e2, t2) {
    return __async(this, null, function* () {
      return this._frameQueue ? this._frameQueue.push(e2, t2) : e2();
    });
  }
  _reschedule(e2, t2) {
    return __async(this, null, function* () {
      return this._frameQueue ? this._frameQueue.unshift(e2, t2) : e2();
    });
  }
  _update(e2) {
    for (this._budget = e2; !e2.done && this._frameQueue && this._frameQueue.process(); )
      e2.madeProgress();
    this._budget = null;
  }
  _getAll() {
    if (!this._allItems) {
      const e2 = [];
      this.featureStore.forEach((t2) => e2.push(t2)), this._allItems = new I(e2, null, this);
    }
    return this._allItems;
  }
  _executeGeometryQuery(e2, t2) {
    return __async(this, null, function* () {
      const { geometry: s2, outSR: n2, spatialRel: u2, returnGeometry: o2, returnCentroid: c2 } = e2, h = o2 || c2, l2 = s$2(n2) && !d$1(this.spatialReference, n2), d2 = this._geometryQueryCache ? l2 && h ? JSON.stringify({ geometry: s2, spatialRelationship: u2, outSpatialReference: n2 }) : JSON.stringify({ geometry: s2, spatialRelationship: u2 }) : null;
      if (d2) {
        const e3 = this._geometryQueryCache.get(d2);
        if (!u$1(e3))
          return e3;
      }
      const m2 = (e3) => __async(this, null, function* () {
        if (l2 && h) {
          const t3 = yield e3.project(n2);
          return d2 && this._geometryQueryCache.put(d2, t3, t3.size || 1), t3;
        }
        return d2 && this._geometryQueryCache.put(d2, e3, e3.size || 1), e3;
      });
      if (!s2)
        return m2(this._getAll());
      const f2 = this.featureAdapter;
      if (u2 === "esriSpatialRelDisjoint") {
        const e3 = this._searchFeatures(this._getQueryBBoxes(s2));
        if (!e3.length)
          return m2(this._getAll());
        let i2, r2;
        const a2 = new Set();
        for (const t3 of e3)
          a2.add(f2.getObjectId(t3));
        yield this._reschedule(() => {
          let e4 = 0;
          i2 = new Array(a2.size), this.featureStore.forEach((t3) => i2[e4++] = t3), r2 = a2;
        }, t2);
        return m2(yield this._reschedule(() => __async(this, null, function* () {
          const e4 = yield v$1(u2, s2, this.geometryType, this.hasZ, this.hasM), a3 = (t3) => !r2.has(f2.getObjectId(t3)) || e4(f2.getGeometry(t3));
          return new I(yield this._runSpatialFilter(i2, a3, t2), s2, this);
        }), t2));
      }
      const p2 = this._searchFeatures(this._getQueryBBoxes(s2));
      if (!p2.length) {
        const e3 = new I([], s2, this);
        return d2 && this._geometryQueryCache.put(d2, e3, e3.size || 1), e3;
      }
      if (this._canExecuteSoloPass(s2, e2))
        return m2(new I(p2, s2, this));
      const y2 = yield v$1(u2, s2, this.geometryType, this.hasZ, this.hasM), _2 = yield this._runSpatialFilter(p2, (e3) => y2(f2.getGeometry(e3)), t2);
      return m2(new I(_2, s2, this));
    });
  }
  _runSpatialFilter(e2, t2, i2) {
    return __async(this, null, function* () {
      if (!t2)
        return e2;
      if (!this._budget)
        return e2.filter((e3) => t2(e3));
      let s2 = 0;
      const r2 = new Array(), a2 = () => __async(this, null, function* () {
        for (; s2 < e2.length; ) {
          const n2 = e2[s2];
          t2(n2) && r2.push(n2), this._budget.done && (yield this._reschedule(() => a2(), i2)), ++s2;
        }
      });
      return this._reschedule(() => a2(), i2).then(() => r2);
    });
  }
  _canExecuteSoloPass(e2, t2) {
    const { geometryType: i2 } = this, { spatialRel: s2 } = t2;
    return I$1(e2) && (s2 === "esriSpatialRelEnvelopeIntersects" || i2 === "esriGeometryPoint" && (s2 === "esriSpatialRelIntersects" || s2 === "esriSpatialRelContains" || s2 === "esriSpatialRelWithin"));
  }
  _getQueryBBoxes(e2) {
    if (I$1(e2)) {
      if (u$2(e2))
        return [u$3(e2.xmin, e2.ymin, e2.xmax, e2.ymax)];
      if (y$3(e2))
        return e2.rings.map((e3) => u$3(Math.min(e3[0][0], e3[2][0]), Math.min(e3[0][1], e3[2][1]), Math.max(e3[0][0], e3[2][0]), Math.max(e3[0][1], e3[2][1])));
    }
    return [c$2(i$1(), e2)];
  }
  _searchFeatures(e2) {
    for (const s2 of e2)
      this.featureStore.forEachInBounds(s2, (e3) => {
        v.add(e3);
      });
    const t2 = new Array(v.size);
    let i2 = 0;
    return v.forEach((e3) => t2[i2++] = e3), v.clear(), t2;
  }
  _checkQuerySupport(e2) {
    return __async(this, null, function* () {
      if (e2.distance < 0 || e2.geometryPrecision != null || e2.multipatchOption || e2.pixelSize || e2.relationParam || e2.text)
        throw new s$1(P, "Unsupported query options", { query: e2 });
      return Promise.all([this._checkAttributesQuerySupport(e2), this._checkStatisticsQuerySupport(e2), P$1(e2, this.geometryType, this.spatialReference), p$1(this.spatialReference, e2.outSR)]).then(() => e2);
    });
  }
  _checkAttributesQuerySupport(e2) {
    const { outFields: t2, orderByFields: i2, returnDistinctValues: r2, outStatistics: a2 } = e2, n2 = a2 ? a2.map((e3) => e3.outStatisticFieldName && e3.outStatisticFieldName.toLowerCase()) : [];
    if (i2 && i2.length > 0) {
      const e3 = " asc", t3 = " desc", s2 = i2.map((i3) => {
        const s3 = i3.toLowerCase();
        return s3.indexOf(e3) > -1 ? s3.split(e3)[0] : s3.indexOf(t3) > -1 ? s3.split(t3)[0] : i3;
      }).filter((e4) => n2.indexOf(e4) === -1);
      c(this.fieldsIndex, s2, "orderByFields contains missing fields");
    }
    if (t2 && t2.length > 0)
      c(this.fieldsIndex, t2, "outFields contains missing fields");
    else if (r2)
      throw new s$1(P, "outFields should be specified for returnDistinctValues", { query: e2 });
    o(this.fieldsIndex, e2.where);
  }
  _checkStatisticsQuerySupport(e2) {
    return __async(this, null, function* () {
      const { outStatistics: t2, groupByFieldsForStatistics: i2, having: r2 } = e2, a2 = i2 && i2.length, n2 = t2 && t2.length;
      if (r2) {
        if (!a2 || !n2)
          throw new s$1(P, "outStatistics and groupByFieldsForStatistics should be specified with having", { query: e2 });
        a$1(this.fieldsIndex, r2, t2);
      }
      if (n2) {
        if (!M(t2))
          return;
        const r3 = t2.map((e3) => e3.onStatisticField);
        c(this.fieldsIndex, r3, "onStatisticFields contains missing fields"), a2 && c(this.fieldsIndex, i2, "groupByFieldsForStatistics contains missing fields");
        for (const i3 of t2) {
          const { onStatisticField: t3, statisticType: r4 } = i3;
          if ((r4 === "percentile_disc" || r4 === "percentile_cont") && "statisticParameters" in i3) {
            const { statisticParameters: t4 } = i3;
            if (!t4)
              throw new s$1(P, "statisticParamters should be set for percentile type", { definition: i3, query: e2 });
          } else if (r4 !== "count" && t3 && f(t3, this.fieldsIndex))
            throw new s$1(P, "outStatistics contains non-numeric fields", { definition: i3, query: e2 });
        }
      }
    });
  }
}
const H = a$2(), J = a$2();
export { Z };
