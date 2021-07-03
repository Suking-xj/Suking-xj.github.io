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
    var step = (x2) => x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import { aa as s, fX as i, fY as j, cE as e, bi as d, b9 as l, cv as K, cx as W, fZ as J, fn as I } from "./vendor.74d5941c.js";
import { t, n } from "./objectIdUtils.8e3fb893.js";
import { s as s$1, i as i$1, u } from "./clientSideDefaults.2ad4eec3.js";
import { p, y as y$1 } from "./projectionSupport.62084d5a.js";
import { u as u$1 } from "./FeatureStore.2d2de89b.js";
import { Z } from "./QueryEngine.202b3395.js";
import { y, u as u$2, d as d$1, c, h } from "./sourceUtils.446906a0.js";
import "./json.7989af9b.js";
import "./aaBoundingBox.b76947f8.js";
import "./PooledRBush.257a80e4.js";
import "./quickselect.e4940b29.js";
import "./_commonjsHelpers.f2a458db.js";
import "./centroid.93c1b848.js";
import "./WhereClause.f27c6004.js";
import "./timeSupport.2cea3b6f.js";
const x = I, T = { xmin: -180, ymin: -90, xmax: 180, ymax: 90, spatialReference: I }, q = { hasAttachments: false, capabilities: "query, editing, create, delete, update", useStandardizedQueries: true, supportsCoordinatesQuantization: true, supportsReturningQueryGeometry: true, advancedQueryCapabilities: { supportsQueryAttachments: false, supportsStatistics: true, supportsPercentileStatistics: true, supportsReturningGeometryCentroid: true, supportsQueryWithDistance: true, supportsDistinct: true, supportsReturningQueryExtent: true, supportsReturningGeometryProperties: false, supportsHavingClause: true, supportsOrderBy: true, supportsPagination: true, supportsQueryWithResultType: false, supportsSqlExpression: true, supportsDisjointSpatialRel: true } };
function R(e2) {
  return l(e2) ? e2.z != null : !!e2.hasZ;
}
function D(e2) {
  return l(e2) ? e2.m != null : !!e2.hasM;
}
class O {
  constructor() {
    this._queryEngine = null, this._nextObjectId = null;
  }
  destroy() {
    this._queryEngine && this._queryEngine && this._queryEngine.destroy(), this._queryEngine = this._requiredFields = this._fieldsIndex = this._createDefaultAttributes = null;
  }
  load(t$1) {
    return __async(this, null, function* () {
      const i$2 = [], { features: s$2 } = t$1, a = this._inferLayerProperties(s$2, t$1.fields), l2 = t$1.fields || [], o = t$1.hasM != null ? t$1.hasM : a.hasM, h2 = t$1.hasZ != null ? t$1.hasZ : a.hasZ, b = !t$1.spatialReference && !a.spatialReference, F = b ? x : t$1.spatialReference || a.spatialReference, _ = b ? T : null, j$1 = t$1.geometryType || a.geometryType, E = !j$1;
      let R2 = t$1.objectIdField || a.objectIdField, D2 = t$1.timeInfo;
      if (!E && (b && i$2.push({ name: "feature-layer:spatial-reference-not-found", message: "Spatial reference not provided or found in features. Defaults to WGS84" }), !j$1))
        throw new s("feature-layer:missing-property", "geometryType not set and couldn't be inferred from the provided features");
      if (!R2)
        throw new s("feature-layer:missing-property", "objectIdField not set and couldn't be found in the provided fields");
      if (a.objectIdField && R2 !== a.objectIdField && (i$2.push({ name: "feature-layer:duplicated-oid-field", message: `Provided objectIdField "${R2}" doesn't match the field name "${a.objectIdField}", found in the provided fields` }), R2 = a.objectIdField), R2 && !a.objectIdField) {
        let e2 = null;
        l2.some((t2) => t2.name === R2 && (e2 = t2, true)) ? (e2.type = "esriFieldTypeOID", e2.editable = false, e2.nullable = false) : l2.unshift({ alias: R2, name: R2, type: "esriFieldTypeOID", editable: false, nullable: false });
      }
      for (const r of l2) {
        if (r.name == null && (r.name = r.alias), r.alias == null && (r.alias = r.name), !r.name)
          throw new s("feature-layer:invalid-field-name", "field name is missing", { field: r });
        if (r.name === R2 && (r.type = "esriFieldTypeOID"), i.jsonValues.indexOf(r.type) === -1)
          throw new s("feature-layer:invalid-field-type", `invalid type for field "${r.name}"`, { field: r });
      }
      const O2 = {};
      this._requiredFields = [];
      for (const e2 of l2)
        if (e2.type !== "esriFieldTypeOID" && e2.type !== "esriFieldTypeGlobalID") {
          e2.editable = e2.editable == null || !!e2.editable, e2.nullable = e2.nullable == null || !!e2.nullable;
          const t2 = j(e2);
          e2.nullable || t2 !== void 0 ? O2[e2.name] = t2 : this._requiredFields.push(e2);
        }
      if (this._fieldsIndex = new e(l2), this._createDefaultAttributes = s$1(O2, R2), D2) {
        if (D2.startTimeField) {
          const e2 = this._fieldsIndex.get(D2.startTimeField);
          e2 ? (D2.startTimeField = e2.name, e2.type = "esriFieldTypeDate") : D2.startTimeField = null;
        }
        if (D2.endTimeField) {
          const e2 = this._fieldsIndex.get(D2.endTimeField);
          e2 ? (D2.endTimeField = e2.name, e2.type = "esriFieldTypeDate") : D2.endTimeField = null;
        }
        if (D2.trackIdField) {
          const e2 = this._fieldsIndex.get(D2.trackIdField);
          e2 ? D2.trackIdField = e2.name : (D2.trackIdField = null, i$2.push({ name: "feature-layer:invalid-timeInfo-trackIdField", message: "trackIdField is missing", details: { timeInfo: D2 } }));
        }
        D2.startTimeField || D2.endTimeField || (i$2.push({ name: "feature-layer:invalid-timeInfo", message: "startTimeField and endTimeField are missing or invalid", details: { timeInfo: D2 } }), D2 = null);
      }
      const w = { warnings: i$2, featureErrors: [], layerDefinition: __spreadProps(__spreadValues({}, q), { drawingInfo: i$1(j$1), templates: u(O2), extent: _, geometryType: j$1, objectIdField: R2, fields: l2, hasZ: !!h2, hasM: !!o, timeInfo: D2 }), assignedObjectIds: {} };
      if (this._queryEngine = new Z({ fields: l2, geometryType: j$1, hasM: o, hasZ: h2, objectIdField: R2, spatialReference: F, featureStore: new u$1({ geometryType: j$1, hasM: o, hasZ: h2 }), timeInfo: D2, cacheSpatialQueries: true }), !s$2 || !s$2.length)
        return this._nextObjectId = t, w;
      const S = n(R2, s$2);
      return this._nextObjectId = S + 1, yield p(s$2, F), this._loadInitialFeatures(w, s$2);
    });
  }
  applyEdits(e2) {
    return __async(this, null, function* () {
      const { spatialReference: t2, geometryType: i2 } = this._queryEngine;
      return yield Promise.all([y(t2, i2), p(e2.adds, t2), p(e2.updates, t2)]), this._applyEdits(e2);
    });
  }
  queryFeatures(e2, t2 = {}) {
    return this._queryEngine.executeQuery(e2, t2.signal);
  }
  queryFeatureCount(e2, t2 = {}) {
    return this._queryEngine.executeQueryForCount(e2, t2.signal);
  }
  queryObjectIds(e2, t2 = {}) {
    return this._queryEngine.executeQueryForIds(e2, t2.signal);
  }
  queryExtent(e2, t2 = {}) {
    return this._queryEngine.executeQueryForExtent(e2, t2.signal);
  }
  querySnapping(e2, t2 = {}) {
    return this._queryEngine.executeQueryForSnapping(e2, t2.signal);
  }
  _inferLayerProperties(e2, t2) {
    let s2, r, n2 = null, a = null, l2 = null;
    for (const o of e2) {
      const e3 = o.geometry;
      if (e3 && (n2 || (n2 = d(e3)), a || (a = e3.spatialReference), s2 == null && (s2 = R(e3)), r == null && (r = D(e3)), n2 && a && s2 != null && r != null))
        break;
    }
    if (t2 && t2.length) {
      let e3 = null;
      t2.some((t3) => {
        const i2 = t3.type === "esriFieldTypeOID", s3 = !t3.type && t3.name && t3.name.toLowerCase() === "objectid";
        return e3 = t3, i2 || s3;
      }) && (l2 = e3.name);
    }
    return { geometryType: n2, spatialReference: a, objectIdField: l2, hasM: r, hasZ: s2 };
  }
  _loadInitialFeatures(e2, t2) {
    const { geometryType: s2, hasM: r, hasZ: n2, objectIdField: l2, spatialReference: o, featureStore: d$2 } = this._queryEngine, u2 = [];
    for (const a of t2) {
      if (a.uid != null && (e2.assignedObjectIds[a.uid] = -1), a.geometry && s2 !== d(a.geometry)) {
        e2.featureErrors.push(u$2("Incorrect geometry type."));
        continue;
      }
      const t3 = this._createDefaultAttributes(), r2 = d$1(this._fieldsIndex, this._requiredFields, t3, a.attributes, true, e2.warnings);
      r2 ? e2.featureErrors.push(r2) : (this._assignObjectId(t3, a.attributes, true), a.attributes = t3, a.uid != null && (e2.assignedObjectIds[a.uid] = a.attributes[l2]), a.geometry && (a.geometry = y$1(a.geometry, a.geometry.spatialReference, o)), u2.push(a));
    }
    if (d$2.addMany(K([], u2, s2, n2, r, l2)), e2.layerDefinition.extent = this._queryEngine.fullExtent, e2.layerDefinition.timeInfo) {
      const { start: t3, end: i2 } = this._queryEngine.timeExtent;
      e2.layerDefinition.timeInfo.timeExtent = [t3, i2];
    }
    return e2;
  }
  _applyEdits(e2) {
    const { adds: t2, updates: i2, deletes: s2 } = e2, r = { addResults: [], deleteResults: [], updateResults: [], uidToObjectId: {} };
    if (t2 && t2.length && this._applyAddEdits(r, t2), i2 && i2.length && this._applyUpdateEdits(r, i2), s2 && s2.length) {
      for (const e3 of s2)
        r.deleteResults.push(c(e3));
      this._queryEngine.featureStore.removeManyById(s2);
    }
    return { fullExtent: this._queryEngine.fullExtent, featureEditResults: r };
  }
  _applyAddEdits(e2, t2) {
    const { addResults: s2 } = e2, { geometryType: r, hasM: n2, hasZ: l2, objectIdField: o, spatialReference: d$2, featureStore: u2 } = this._queryEngine, p2 = [];
    for (const a of t2) {
      if (a.geometry && r !== d(a.geometry)) {
        s2.push(u$2("Incorrect geometry type."));
        continue;
      }
      const t3 = this._createDefaultAttributes(), n3 = d$1(this._fieldsIndex, this._requiredFields, t3, a.attributes);
      if (n3)
        s2.push(n3);
      else {
        if (this._assignObjectId(t3, a.attributes), a.attributes = t3, a.uid != null) {
          const t4 = a.attributes[o];
          e2.uidToObjectId[a.uid] = t4;
        }
        a.geometry && (a.geometry = y$1(h(a.geometry, d$2), a.geometry.spatialReference, d$2)), p2.push(a), s2.push(c(a.attributes[o]));
      }
    }
    u2.addMany(K([], p2, r, l2, n2, o));
  }
  _applyUpdateEdits({ updateResults: e2 }, t2) {
    const { geometryType: s2, hasM: r, hasZ: n2, objectIdField: a, spatialReference: d$2, featureStore: u2 } = this._queryEngine;
    for (const p2 of t2) {
      const { attributes: t3, geometry: f } = p2, y2 = t3 && t3[a];
      if (y2 == null) {
        e2.push(u$2(`Identifier field ${a} missing`));
        continue;
      }
      if (!u2.has(y2)) {
        e2.push(u$2(`Feature with object id ${y2} missing`));
        continue;
      }
      const c$1 = W(u2.getFeature(y2), s2, n2, r);
      if (f) {
        if (s2 !== d(f)) {
          e2.push(u$2("Incorrect geometry type."));
          continue;
        }
        c$1.geometry = y$1(h(f, d$2), f.spatialReference, d$2);
      }
      if (t3) {
        const i2 = d$1(this._fieldsIndex, this._requiredFields, c$1.attributes, t3);
        if (i2) {
          e2.push(i2);
          continue;
        }
      }
      u2.add(J(c$1, s2, n2, r, a)), e2.push(c(y2));
    }
  }
  _assignObjectId(e2, t2, i2 = false) {
    const s2 = this._queryEngine.objectIdField;
    i2 && t2 && isFinite(t2[s2]) ? e2[s2] = t2[s2] : e2[s2] = this._nextObjectId++;
  }
}
export default O;
