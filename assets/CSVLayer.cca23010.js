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
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import { ae as e, af as y, ag as i, d2 as f, a5 as r, dR as g, cr as M, dU as p, ai as t, dQ as e$1, hd as m, he as p$1, v as ke, bF as k, fs as t$1, ec as R } from "./vendor.74d5941c.js";
let u = class extends f {
  constructor(e2) {
    super(e2), this.type = "csv";
  }
  load(e2) {
    const t2 = r(e2) ? e2.signal : null;
    return this.addResolvingPromise(this._startWorker(t2)), Promise.resolve(this);
  }
  destroy() {
    var e2;
    (e2 = this._connection) == null || e2.close(), this._connection = null;
  }
  openPorts() {
    return this.load().then(() => this._connection.openPorts());
  }
  queryFeatures(e2, t2 = {}) {
    return this.load(t2).then(() => this._connection.invoke("queryFeatures", e2 ? e2.toJSON() : null, t2)).then((e3) => g.fromJSON(e3));
  }
  queryFeaturesJSON(e2, t2 = {}) {
    return this.load(t2).then(() => this._connection.invoke("queryFeatures", e2 ? e2.toJSON() : null, t2));
  }
  queryFeatureCount(e2, t2 = {}) {
    return this.load(t2).then(() => this._connection.invoke("queryFeatureCount", e2 ? e2.toJSON() : null, t2));
  }
  queryObjectIds(e2, t2 = {}) {
    return this.load(t2).then(() => this._connection.invoke("queryObjectIds", e2 ? e2.toJSON() : null, t2));
  }
  queryExtent(e2, t2 = {}) {
    return this.load(t2).then(() => this._connection.invoke("queryExtent", e2 ? e2.toJSON() : null, t2)).then((e3) => ({ count: e3.count, extent: M.fromJSON(e3.extent) }));
  }
  querySnapping(e2, t2 = {}) {
    return this.load(t2).then(() => this._connection.invoke("querySnapping", e2, t2));
  }
  _startWorker(e2) {
    return __async(this, null, function* () {
      this._connection = yield p("CSVSourceWorker", { strategy: t("feature-layers-workers") ? "dedicated" : "local", signal: e2 });
      const o = yield this._connection.invoke("load", { url: this.url, parsing: { columnDelimiter: this.delimiter, fields: this.fields && this.fields.map((e3) => e3.toJSON()), latitudeField: this.latitudeField, longitudeField: this.longitudeField, spatialReference: this.spatialReference && this.spatialReference.toJSON(), timeInfo: this.timeInfo && this.timeInfo.toJSON() } }, { signal: e2 });
      this.locationInfo = o.locationInfo, this.sourceJSON = o.layerDefinition, this.columnDelimiter = o.columnDelimiter;
    });
  }
};
e([y()], u.prototype, "type", void 0), e([y()], u.prototype, "url", void 0), e([y()], u.prototype, "delimiter", void 0), e([y()], u.prototype, "fields", void 0), e([y()], u.prototype, "latitudeField", void 0), e([y()], u.prototype, "longitudeField", void 0), e([y()], u.prototype, "spatialReference", void 0), e([y()], u.prototype, "timeInfo", void 0), e([y()], u.prototype, "locationInfo", void 0), e([y()], u.prototype, "sourceJSON", void 0), e([y()], u.prototype, "columnDelimiter", void 0), u = e([i("esri.layers.graphics.sources.CSVSource")], u);
var a = u;
let d = class extends ke {
  constructor(...e2) {
    super(...e2), this.delimiter = null, this.editingEnabled = false, this.fields = null, this.latitudeField = null, this.locationType = "coordinates", this.longitudeField = null, this.operationalLayerType = "CSV", this.outFields = ["*"], this.path = null, this.portalItem = null, this.spatialReference = k.WGS84, this.source = null, this.type = "csv";
  }
  normalizeCtorArgs(e2, t2) {
    return typeof e2 == "string" ? __spreadValues({ url: e2 }, t2) : e2;
  }
  get capabilities() {
    return { data: { supportsAttachment: false, supportsM: false, supportsZ: false }, operations: { supportsCalculate: false, supportsTruncate: false, supportsValidateSql: false, supportsAdd: false, supportsDelete: false, supportsEditing: false, supportsQuery: true, supportsResizeAttachments: false, supportsUpdate: false }, query: t$1, queryRelated: { supportsCount: false, supportsOrderBy: false, supportsPagination: false }, editing: { supportsGeometryUpdate: false, supportsGlobalId: false, supportsRollbackOnFailure: false, supportsUpdateWithoutM: false, supportsUploadWithItemId: false, supportsDeleteByAnonymous: false, supportsDeleteByOthers: false, supportsUpdateByAnonymous: false, supportsUpdateByOthers: false } };
  }
  get isTable() {
    return this.loaded && this.geometryType == null;
  }
  readWebMapLabelsVisible(e2, t2) {
    return t2.showLabels != null ? t2.showLabels : !!(t2.layerDefinition && t2.layerDefinition.drawingInfo && t2.layerDefinition.drawingInfo.labelingInfo);
  }
  set url(e2) {
    this._set("url", e2);
  }
  createGraphicsSource(e2) {
    return __async(this, null, function* () {
      const t2 = new a({ delimiter: this.delimiter, fields: this.fields, latitudeField: this.latitudeField, longitudeField: this.longitudeField, spatialReference: this.spatialReference, timeInfo: this.timeInfo, url: this.url });
      return this._set("source", t2), yield t2.load({ signal: e2 }), this.read({ locationInfo: t2.locationInfo, columnDelimiter: t2.columnDelimiter }, { origin: "service", url: this.parsedUrl }), t2;
    });
  }
  queryFeatures(e2, t2) {
    return this.load().then(() => this.source.queryFeatures(R.from(e2) || this.createQuery())).then((e3) => {
      if (e3 && e3.features)
        for (const t3 of e3.features)
          t3.layer = t3.sourceLayer = this;
      return e3;
    });
  }
  queryObjectIds(e2, t2) {
    return this.load().then(() => this.source.queryObjectIds(R.from(e2) || this.createQuery()));
  }
  queryFeatureCount(e2, t2) {
    return this.load().then(() => this.source.queryFeatureCount(R.from(e2) || this.createQuery()));
  }
  queryExtent(e2, t2) {
    return this.load().then(() => this.source.queryExtent(R.from(e2) || this.createQuery()));
  }
  write(e2, t2) {
    return super.write(e2, __spreadProps(__spreadValues({}, t2), { writeLayerSchema: true }));
  }
  _verifyFields() {
  }
  _verifySource() {
  }
  _hasMemorySource() {
    return false;
  }
};
e([y({ readOnly: true, dependsOn: ["loaded"], json: { read: false, write: false } })], d.prototype, "capabilities", null), e([y({ type: [",", " ", ";", "|", "	"], json: { read: { source: "columnDelimiter" }, write: { target: "columnDelimiter", ignoreOrigin: true } } })], d.prototype, "delimiter", void 0), e([y({ readOnly: true, type: Boolean, json: { origins: { "web-scene": { read: false, write: false } } } })], d.prototype, "editingEnabled", void 0), e([y({ json: { read: { source: "layerDefinition.fields" }, write: { target: "layerDefinition.fields" } } })], d.prototype, "fields", void 0), e([y({ type: Boolean, readOnly: true })], d.prototype, "isTable", null), e([e$1("web-map", "labelsVisible", ["layerDefinition.drawingInfo.labelingInfo", "showLabels"])], d.prototype, "readWebMapLabelsVisible", null), e([y({ type: String, json: { read: { source: "locationInfo.latitudeFieldName" }, write: { target: "locationInfo.latitudeFieldName", ignoreOrigin: true } } })], d.prototype, "latitudeField", void 0), e([y({ type: ["show", "hide"] })], d.prototype, "listMode", void 0), e([y({ type: ["coordinates"], json: { read: { source: "locationInfo.locationType" }, write: { target: "locationInfo.locationType", ignoreOrigin: true, isRequired: true } } })], d.prototype, "locationType", void 0), e([y({ type: String, json: { read: { source: "locationInfo.longitudeFieldName" }, write: { target: "locationInfo.longitudeFieldName", ignoreOrigin: true } } })], d.prototype, "longitudeField", void 0), e([y({ type: ["CSV"] })], d.prototype, "operationalLayerType", void 0), e([y()], d.prototype, "outFields", void 0), e([y({ type: String, json: { origins: { "web-scene": { read: false, write: false } }, read: false, write: false } })], d.prototype, "path", void 0), e([y({ json: { read: false, write: false, origins: { "web-document": { read: false, write: false } } } })], d.prototype, "portalItem", void 0), e([y({ json: { read: false }, cast: null, type: a, readOnly: true })], d.prototype, "source", void 0), e([y({ json: { read: false }, value: "csv", readOnly: true })], d.prototype, "type", void 0), e([y({ json: { read: m, write: { isRequired: true, ignoreOrigin: true, writer: p$1 } } })], d.prototype, "url", null), d = e([i("esri.layers.CSVLayer")], d);
var c = d;
export default c;
