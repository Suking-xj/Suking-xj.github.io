var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import { aj as U, fn as I$1, aa as s, fX as i, fY as j, cE as e, cm as d, ci as X, cy as ee, bi as d$2, cv as K, cx as W, fZ as J } from "./vendor.74d5941c.js";
import { I, N, T } from "./geojson.689424f4.js";
import { i as i$1, u, s as s$1 } from "./clientSideDefaults.2ad4eec3.js";
import { y, p } from "./projectionSupport.62084d5a.js";
import { u as u$1 } from "./FeatureStore.2d2de89b.js";
import { Z } from "./QueryEngine.202b3395.js";
import { y as y$1, d as d$1, c, u as u$2, h } from "./sourceUtils.446906a0.js";
import "./json.7989af9b.js";
import "./aaBoundingBox.b76947f8.js";
import "./PooledRBush.257a80e4.js";
import "./quickselect.e4940b29.js";
import "./_commonjsHelpers.f2a458db.js";
import "./centroid.93c1b848.js";
import "./WhereClause.f27c6004.js";
import "./timeSupport.2cea3b6f.js";
const R = { hasAttachments: false, capabilities: "query, editing, create, delete, update", useStandardizedQueries: true, supportsCoordinatesQuantization: true, supportsReturningQueryGeometry: true, advancedQueryCapabilities: { supportsQueryAttachments: false, supportsStatistics: true, supportsPercentileStatistics: true, supportsReturningGeometryCentroid: true, supportsQueryWithDistance: true, supportsDistinct: true, supportsReturningQueryExtent: true, supportsReturningGeometryProperties: false, supportsHavingClause: true, supportsOrderBy: true, supportsPagination: true, supportsQueryWithResultType: false, supportsSqlExpression: true, supportsDisjointSpatialRel: true } };
class D {
  constructor() {
    this._queryEngine = null;
  }
  destroy() {
    this._queryEngine && this._queryEngine && this._queryEngine.destroy(), this._queryEngine = this._requiredFields = this._fieldsIndex = this._createDefaultAttributes = null;
  }
  load(s$2) {
    return __async(this, null, function* () {
      const d$12 = [];
      yield this._checkProjection(s$2.spatialReference);
      let u$22 = null;
      if (s$2.url) {
        u$22 = (yield U(s$2.url, { responseType: "json" })).data, yield I(u$22);
      }
      const p2 = N(u$22, { geometryType: s$2.geometryType }), b = s$2.fields || p2.fields || [], E = s$2.hasZ != null ? s$2.hasZ : p2.hasZ, T$1 = p2.geometryType, q = s$2.objectIdField || (p2.objectIdFieldType === "number" ? p2.objectIdFieldName : "OBJECTID") || "OBJECTID", x = s$2.spatialReference || I$1;
      let w = s$2.timeInfo;
      if (!T$1)
        throw new s("geojson-layer:missing-property", "geometryType not set and couldn't be inferred from the provided features");
      if (p2.objectIdFieldType === "string" && d$12.push({ name: "geojson-layer:unsupported-id-type", message: "Feature ids are of type string and can't be honored." }), b === p2.fields && p2.unknownFields.length > 0 && d$12.push({ name: "geojson-layer:unknown-field-types", message: "Some fields types couldn't be inferred from the features and were dropped", details: { unknownFields: p2.unknownFields } }), q) {
        let e2 = null;
        b.some((t) => t.name === q && (e2 = t, true)) ? (e2.type = "esriFieldTypeOID", e2.editable = false, e2.nullable = false) : b.unshift({ alias: q, name: q, type: "esriFieldTypeOID", editable: false, nullable: false });
      }
      for (const t of b) {
        if (t.name == null && (t.name = t.alias), t.alias == null && (t.alias = t.name), !t.name)
          throw new s("geojson-layer:invalid-field-name", "field name is missing", { field: t });
        if (t.name === q && (t.type = "esriFieldTypeOID"), i.jsonValues.indexOf(t.type) === -1)
          throw new s("geojson-layer:invalid-field-type", `invalid type for field "${t.name}"`, { field: t });
      }
      const D2 = {};
      this._requiredFields = [];
      for (const e2 of b)
        if (e2.type !== "esriFieldTypeOID" && e2.type !== "esriFieldTypeGlobalID") {
          e2.editable = e2.editable == null || !!e2.editable, e2.nullable = e2.nullable == null || !!e2.nullable;
          const t = j(e2);
          e2.nullable || t !== void 0 ? D2[e2.name] = t : this._requiredFields.push(e2);
        }
      if (this._fieldsIndex = new e(b), w) {
        if (w.startTimeField) {
          const e2 = this._fieldsIndex.get(w.startTimeField);
          e2 ? (w.startTimeField = e2.name, e2.type = "esriFieldTypeDate") : w.startTimeField = null;
        }
        if (w.endTimeField) {
          const e2 = this._fieldsIndex.get(w.endTimeField);
          e2 ? (w.endTimeField = e2.name, e2.type = "esriFieldTypeDate") : w.endTimeField = null;
        }
        if (w.trackIdField) {
          const e2 = this._fieldsIndex.get(w.trackIdField);
          e2 ? w.trackIdField = e2.name : (w.trackIdField = null, d$12.push({ name: "geojson-layer:invalid-timeInfo-trackIdField", message: "trackIdField is missing", details: { timeInfo: w } }));
        }
        w.startTimeField || w.endTimeField || (d$12.push({ name: "geojson-layer:invalid-timeInfo", message: "startTimeField and endTimeField are missing", details: { timeInfo: w } }), w = null);
      }
      const O = { warnings: d$12, featureErrors: [], layerDefinition: __spreadProps(__spreadValues({}, R), { drawingInfo: i$1(T$1), templates: u(D2), extent: null, geometryType: T$1, objectIdField: q, fields: b, hasZ: !!E, timeInfo: w }) };
      this._queryEngine = new Z({ fields: b, geometryType: T$1, hasM: false, hasZ: E, objectIdField: q, spatialReference: x, timeInfo: w, featureStore: new u$1({ geometryType: T$1, hasM: false, hasZ: E }), cacheSpatialQueries: true }), this._createDefaultAttributes = s$1(D2, q), this._nextObjectId = p2.maxObjectId + 1;
      const S = T(u$22, { geometryType: T$1, hasZ: E, objectIdFieldName: p2.objectIdFieldType === "number" ? q : null });
      if (!d(x, I$1))
        for (const e2 of S)
          e2.geometry && (e2.geometry = X(y(ee(e2.geometry, T$1, E, false), I$1, x)));
      return this._loadInitialFeatures(O, S), O;
    });
  }
  applyEdits(e2) {
    return __async(this, null, function* () {
      const { spatialReference: t, geometryType: i2 } = this._queryEngine;
      return yield Promise.all([y$1(t, i2), p(e2.adds, t), p(e2.updates, t)]), this._applyEdits(e2);
    });
  }
  queryFeatures(e2 = {}, t = {}) {
    return this._queryEngine.executeQuery(e2, t.signal);
  }
  queryFeatureCount(e2 = {}, t = {}) {
    return this._queryEngine.executeQueryForCount(e2, t.signal);
  }
  queryObjectIds(e2 = {}, t = {}) {
    return this._queryEngine.executeQueryForIds(e2, t.signal);
  }
  queryExtent(e2 = {}, t = {}) {
    return this._queryEngine.executeQueryForExtent(e2, t.signal);
  }
  querySnapping(e2, t = {}) {
    return this._queryEngine.executeQueryForSnapping(e2, t.signal);
  }
  _loadInitialFeatures(e2, t) {
    const { featureStore: i2, objectIdField: s2 } = this._queryEngine, r = [];
    for (const n of t) {
      const t2 = this._createDefaultAttributes(), i3 = d$1(this._fieldsIndex, this._requiredFields, t2, n.attributes, true, e2.warnings);
      i3 ? e2.featureErrors.push(i3) : (this._assignObjectId(t2, n.attributes, true), n.attributes = t2, n.objectId = t2[s2], r.push(n));
    }
    if (i2.addMany(r), e2.layerDefinition.extent = this._queryEngine.fullExtent, e2.layerDefinition.timeInfo) {
      const { start: t2, end: i3 } = this._queryEngine.timeExtent;
      e2.layerDefinition.timeInfo.timeExtent = [t2, i3];
    }
    return e2;
  }
  _applyEdits(e2) {
    const { adds: t, updates: i2, deletes: s2 } = e2, r = { addResults: [], deleteResults: [], updateResults: [], uidToObjectId: {} };
    if (t && t.length && this._applyAddEdits(r, t), i2 && i2.length && this._applyUpdateEdits(r, i2), s2 && s2.length) {
      for (const e3 of s2)
        r.deleteResults.push(c(e3));
      this._queryEngine.featureStore.removeManyById(s2);
    }
    return { fullExtent: this._queryEngine.fullExtent, timeExtent: this._queryEngine.timeExtent, featureEditResults: r };
  }
  _applyAddEdits(e2, t) {
    const { addResults: i2 } = e2, { geometryType: r, hasM: n, hasZ: o, objectIdField: a, spatialReference: l, featureStore: u2 } = this._queryEngine, p2 = [];
    for (const d2 of t) {
      if (d2.geometry && r !== d$2(d2.geometry)) {
        i2.push(u$2("Incorrect geometry type."));
        continue;
      }
      const t2 = this._createDefaultAttributes(), n2 = d$1(this._fieldsIndex, this._requiredFields, t2, d2.attributes);
      if (n2)
        i2.push(n2);
      else {
        if (this._assignObjectId(t2, d2.attributes), d2.attributes = t2, d2.uid != null) {
          const t3 = d2.attributes[a];
          e2.uidToObjectId[d2.uid] = t3;
        }
        d2.geometry && (d2.geometry = y(h(d2.geometry, l), d2.geometry.spatialReference, l)), p2.push(d2), i2.push(c(d2.attributes[a]));
      }
    }
    u2.addMany(K([], p2, r, o, n, a));
  }
  _applyUpdateEdits({ updateResults: e2 }, t) {
    const { geometryType: i2, hasM: r, hasZ: n, objectIdField: o, spatialReference: a, featureStore: l } = this._queryEngine;
    for (const d2 of t) {
      const { attributes: t2, geometry: y$12 } = d2, f = t2 && t2[o];
      if (f == null) {
        e2.push(u$2(`Identifier field ${o} missing`));
        continue;
      }
      if (!l.has(f)) {
        e2.push(u$2(`Feature with object id ${f} missing`));
        continue;
      }
      const m = W(l.getFeature(f), i2, n, r);
      if (y$12) {
        if (i2 !== d$2(y$12)) {
          e2.push(u$2("Incorrect geometry type."));
          continue;
        }
        m.geometry = y(h(y$12, a), y$12.spatialReference, a);
      }
      if (t2) {
        const i3 = d$1(this._fieldsIndex, this._requiredFields, m.attributes, t2);
        if (i3) {
          e2.push(i3);
          continue;
        }
      }
      l.add(J(m, i2, n, r, o)), e2.push(c(f));
    }
  }
  _assignObjectId(e2, t, i2 = false) {
    const s2 = this._queryEngine.objectIdField;
    i2 && isFinite(t[s2]) ? e2[s2] = t[s2] : e2[s2] = this._nextObjectId++;
  }
  _checkProjection(i2) {
    return __async(this, null, function* () {
      try {
        yield p(I$1, i2);
      } catch (e2) {
        throw new s("geojson-layer", "Projection not supported");
      }
    });
  }
}
export default D;
