var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
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
import { ae as e, af as y, ag as i, d2 as f, a5 as r, ai as t, d3 as x, aj as U, d4 as l, cr as M, d5 as d, d6 as a, aa as s, d7 as o, a0 as t$1, d8 as p, c$ as V } from "./vendor.74d5941c.js";
import { i as i$1 } from "./clientSideDefaults.2ad4eec3.js";
function b(e2) {
  return __async(this, null, function* () {
    if (typeof e2 == "string") {
      const t2 = V(e2);
      return t2 || { data: e2 };
    }
    return new Promise((t2, r2) => {
      const a2 = new FileReader();
      a2.readAsDataURL(e2), a2.onload = () => t2(V(a2.result)), a2.onerror = (e3) => r2(e3);
    });
  });
}
const F = new Set(["Feature Layer", "Table"]);
let R = class extends f {
  constructor() {
    super(...arguments), this.type = "feature-layer";
  }
  load(e2) {
    const t2 = r(e2) ? e2.signal : null;
    return this.addResolvingPromise(this._fetchService(t2)), Promise.resolve(this);
  }
  get queryTask() {
    const { capabilities: { query: { supportsFormatPBF: e2 } }, parsedUrl: r2, dynamicDataSource: a2, gdbVersion: s2, spatialReference: o2, fieldsIndex: i2 } = this.layer, u = t("featurelayer-pbf") && e2 ? "pbf" : "json";
    return new x({ url: r2.path, format: u, fieldsIndex: i2, dynamicDataSource: a2, gdbVersion: s2, sourceSpatialReference: o2 });
  }
  addAttachment(e2, t2) {
    return __async(this, null, function* () {
      yield this.load();
      const r2 = e2.attributes[this.layer.objectIdField], a2 = this.layer.parsedUrl.path + "/" + r2 + "/addAttachment", s2 = this._getLayerRequestOptions(), o2 = this._getFormDataForAttachment(t2, s2.query);
      try {
        const e3 = yield U(a2, { body: o2 });
        return this._createFeatureEditResult(e3.data.addAttachmentResult);
      } catch (i2) {
        throw this._createAttachmentErrorResult(r2, i2);
      }
    });
  }
  updateAttachment(e2, t2, r2) {
    return __async(this, null, function* () {
      yield this.load();
      const a2 = e2.attributes[this.layer.objectIdField], s2 = this.layer.parsedUrl.path + "/" + a2 + "/updateAttachment", o2 = this._getLayerRequestOptions({ query: { attachmentId: t2 } }), i2 = this._getFormDataForAttachment(r2, o2.query);
      try {
        const e3 = yield U(s2, { body: i2 });
        return this._createFeatureEditResult(e3.data.updateAttachmentResult);
      } catch (u) {
        throw this._createAttachmentErrorResult(a2, u);
      }
    });
  }
  applyEdits(e2, t2) {
    return __async(this, null, function* () {
      yield this.load();
      const r2 = e2.addFeatures.map(this._serializeFeature, this), a2 = e2.updateFeatures.map(this._serializeFeature, this), s2 = this._getFeatureIds(e2.deleteFeatures, t2 == null ? void 0 : t2.globalIdUsed);
      l(r2, a2, this.layer.spatialReference);
      const o2 = [], i2 = [], u = [...e2.deleteAttachments];
      for (const c of e2.addAttachments)
        o2.push(yield this._serializeAttachment(c));
      for (const c of e2.updateAttachments)
        i2.push(yield this._serializeAttachment(c));
      const n = o2.length || i2.length || u.length ? { adds: o2, updates: i2, deletes: u } : null, l$1 = this._getLayerRequestOptions({ method: "post", query: { adds: r2.length ? JSON.stringify(r2) : null, updates: a2.length ? JSON.stringify(a2) : null, deletes: s2.length ? t2 != null && t2.globalIdUsed ? JSON.stringify(s2) : s2.join(",") : null, gdbVersion: (t2 == null ? void 0 : t2.gdbVersion) || this.layer.gdbVersion, rollbackOnFailure: t2 == null ? void 0 : t2.rollbackOnFailureEnabled, useGlobalIds: t2 == null ? void 0 : t2.globalIdUsed, attachments: n && JSON.stringify(n) } }), d2 = yield U(this.layer.parsedUrl.path + "/applyEdits", l$1);
      return this._createEditsResult(d2);
    });
  }
  deleteAttachments(e2, t2) {
    return __async(this, null, function* () {
      yield this.load();
      const r2 = e2.attributes[this.layer.objectIdField], a2 = this.layer.parsedUrl.path + "/" + r2 + "/deleteAttachments";
      try {
        return (yield U(a2, this._getLayerRequestOptions({ query: { attachmentIds: t2.join(",") }, method: "post" }))).data.deleteAttachmentResults.map(this._createFeatureEditResult);
      } catch (s2) {
        throw this._createAttachmentErrorResult(r2, s2);
      }
    });
  }
  fetchRecomputedExtents(e2 = {}) {
    const t2 = e2.signal;
    return this.load({ signal: t2 }).then(() => __async(this, null, function* () {
      const t3 = this._getLayerRequestOptions(__spreadProps(__spreadValues({}, e2), { query: { returnUpdates: true } })), { layerId: r2, url: a2 } = this.layer, { data: s2 } = yield U(`${a2}/${r2}`, t3), { id: o2, extent: i2, fullExtent: u, timeExtent: n } = s2, l2 = i2 || u;
      return { id: o2, fullExtent: l2 && M.fromJSON(l2), timeExtent: n && d.fromJSON({ start: n[0], end: n[1] }) };
    }));
  }
  queryAttachments(_0) {
    return __async(this, arguments, function* (e2, t2 = {}) {
      const { parsedUrl: r2 } = this.layer, a$1 = r2.path;
      yield this.load();
      const s2 = this._getLayerRequestOptions(t2);
      if (!this.layer.get("capabilities.operations.supportsQueryAttachments")) {
        const { objectIds: t3 } = e2, r3 = [];
        for (const e3 of t3) {
          const t4 = a$1 + "/" + e3 + "/attachments";
          r3.push(U(t4, s2));
        }
        return Promise.all(r3).then((e3) => t3.map((t4, r4) => ({ parentObjectId: t4, attachmentInfos: e3[r4].data.attachmentInfos }))).then((e3) => a(e3, a$1));
      }
      return this.queryTask.executeAttachmentQuery(e2, s2);
    });
  }
  queryFeatures(e2, t2) {
    return __async(this, null, function* () {
      return yield this.load(), this.queryTask.execute(e2, __spreadProps(__spreadValues({}, t2), { query: __spreadValues(__spreadValues({}, this.layer.customParameters), t2 == null ? void 0 : t2.query) }));
    });
  }
  queryFeaturesJSON(e2, t2) {
    return __async(this, null, function* () {
      return yield this.load(), this.queryTask.executeJSON(e2, __spreadProps(__spreadValues({}, t2), { query: __spreadValues(__spreadValues({}, this.layer.customParameters), t2 == null ? void 0 : t2.query) }));
    });
  }
  queryObjectIds(e2, t2) {
    return __async(this, null, function* () {
      return yield this.load(), this.queryTask.executeForIds(e2, __spreadProps(__spreadValues({}, t2), { query: __spreadValues(__spreadValues({}, this.layer.customParameters), t2 == null ? void 0 : t2.query) }));
    });
  }
  queryFeatureCount(e2, t2) {
    return __async(this, null, function* () {
      return yield this.load(), this.queryTask.executeForCount(e2, __spreadProps(__spreadValues({}, t2), { query: __spreadValues(__spreadValues({}, this.layer.customParameters), t2 == null ? void 0 : t2.query) }));
    });
  }
  queryExtent(e2, t2) {
    return __async(this, null, function* () {
      return yield this.load(), this.queryTask.executeForExtent(e2, __spreadProps(__spreadValues({}, t2), { query: __spreadValues(__spreadValues({}, this.layer.customParameters), t2 == null ? void 0 : t2.query) }));
    });
  }
  queryRelatedFeatures(e2, t2) {
    return __async(this, null, function* () {
      return yield this.load(), this.queryTask.executeRelationshipQuery(e2, __spreadProps(__spreadValues({}, t2), { query: __spreadValues(__spreadValues({}, this.layer.customParameters), t2 == null ? void 0 : t2.query) }));
    });
  }
  queryRelatedFeaturesCount(e2, t2) {
    return __async(this, null, function* () {
      return yield this.load(), this.queryTask.executeRelationshipQueryForCount(e2, __spreadProps(__spreadValues({}, t2), { query: __spreadValues(__spreadValues({}, this.layer.customParameters), t2 == null ? void 0 : t2.query) }));
    });
  }
  _fetchService(e2) {
    return __async(this, null, function* () {
      let r2 = this.layer.sourceJSON;
      if (!r2) {
        const { data: a3 } = yield U(this.layer.parsedUrl.path, this._getLayerRequestOptions({ query: t("featurelayer-advanced-symbols") ? { returnAdvancedSymbols: true } : {}, signal: e2 }));
        r2 = a3;
      }
      this.sourceJSON = this._patchServiceJSON(r2);
      const a2 = r2.type;
      if (!F.has(a2))
        throw new s("feature-layer-source:unsupported-type", `Source type "${a2}" is not supported`);
    });
  }
  _patchServiceJSON(e2) {
    var t2;
    if (e2.type !== "Table" && e2.geometryType && (e2 == null || (t2 = e2.drawingInfo) == null || !t2.renderer) && !e2.defaultSymbol) {
      const t3 = i$1(e2.geometryType).renderer;
      o("drawingInfo.renderer", t3, e2);
    }
    return e2;
  }
  _serializeFeature(e2) {
    const { geometry: t2, attributes: r2 } = e2;
    return t$1(t2) ? { attributes: r2 } : t2.type === "mesh" || t2.type === "extent" ? null : { geometry: t2.toJSON(), attributes: r2 };
  }
  _serializeAttachment(e2) {
    return __async(this, null, function* () {
      const { feature: t2, attachment: r2 } = e2, { globalId: a2, name: s2, contentType: o2, data: i2, uploadId: u } = r2, n = { globalId: a2, parentGlobalId: null, contentType: null, name: null, uploadId: null, data: null };
      if (t2 && (n.parentGlobalId = "attributes" in t2 ? t2.attributes && t2.attributes[this.layer.globalIdField] : t2.globalId), u)
        n.uploadId = u;
      else if (i2) {
        const e3 = yield b(i2);
        n.contentType = e3.mediaType, n.data = e3.data, i2 instanceof File && (n.name = i2.name);
      }
      return s2 && (n.name = s2), o2 && (n.contentType = o2), n;
    });
  }
  _getFeatureIds(e2, t2) {
    const r2 = e2[0];
    return r2 ? this._canUseGlobalIds(t2, e2) ? this._getGlobalIdsFromFeatureIdentifier(e2) : "objectId" in r2 ? this._getObjectIdsFromFeatureIdentifier(e2) : this._getIdsFromFeatures(e2) : [];
  }
  _getIdsFromFeatures(e2) {
    const t2 = this.layer.objectIdField;
    return e2.map((e3) => e3.attributes && e3.attributes[t2]);
  }
  _canUseGlobalIds(e2, t2) {
    return e2 && "globalId" in t2[0];
  }
  _getObjectIdsFromFeatureIdentifier(e2) {
    return e2.map((e3) => e3.objectId);
  }
  _getGlobalIdsFromFeatureIdentifier(e2) {
    return e2.map((e3) => e3.globalId);
  }
  _createEditsResult(e2) {
    const t2 = e2.data, r2 = e2.data && e2.data.attachments;
    return { addFeatureResults: t2.addResults ? t2.addResults.map(this._createFeatureEditResult, this) : [], updateFeatureResults: t2.updateResults ? t2.updateResults.map(this._createFeatureEditResult, this) : [], deleteFeatureResults: t2.deleteResults ? t2.deleteResults.map(this._createFeatureEditResult, this) : [], addAttachmentResults: r2 && r2.addResults ? r2.addResults.map(this._createFeatureEditResult, this) : [], updateAttachmentResults: r2 && r2.updateResults ? r2.updateResults.map(this._createFeatureEditResult, this) : [], deleteAttachmentResults: r2 && r2.deleteResults ? r2.deleteResults.map(this._createFeatureEditResult, this) : [] };
  }
  _createFeatureEditResult(e2) {
    const t2 = e2.success === true ? null : e2.error || { code: void 0, description: void 0 };
    return { objectId: e2.objectId, globalId: e2.globalId, error: t2 ? new s("feature-layer-source:edit-failure", t2.description, { code: t2.code }) : null };
  }
  _createAttachmentErrorResult(e2, t2) {
    const r2 = t2.details.messages && t2.details.messages[0] || t2.message, a2 = t2.details.httpStatus || t2.details.messageCode;
    return { objectId: e2, globalId: null, error: new s("feature-layer-source:attachment-failure", r2, { code: a2 }) };
  }
  _getFormDataForAttachment(e2, t2) {
    const r2 = e2 instanceof FormData ? e2 : e2 && e2.elements ? new FormData(e2) : null;
    if (r2)
      for (const a2 in t2) {
        const e3 = t2[a2];
        e3 != null && (r2.set ? r2.set(a2, e3) : r2.append(a2, e3));
      }
    return r2;
  }
  _getLayerRequestOptions(e2 = {}) {
    const { parsedUrl: t2, gdbVersion: a2, dynamicDataSource: s2 } = this.layer;
    return __spreadProps(__spreadValues({}, e2), { query: p(__spreadValues(__spreadValues(__spreadProps(__spreadValues({ gdbVersion: a2, layer: s2 ? JSON.stringify({ source: s2 }) : void 0 }, t2.query), { f: "json" }), this.layer.customParameters), e2 == null ? void 0 : e2.query)), responseType: "json" });
  }
};
e([y()], R.prototype, "type", void 0), e([y({ constructOnly: true })], R.prototype, "layer", void 0), e([y({ readOnly: true })], R.prototype, "queryTask", null), R = e([i("esri.layers.graphics.sources.FeatureLayerSource")], R);
var q = R;
export default q;
