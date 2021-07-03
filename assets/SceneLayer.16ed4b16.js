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
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import { ae as e, af as y, ag as i, dA as a, a4 as n, dX as p$1, dY as l, dZ as u, gS as s$1, d_ as l$1, e1 as b, cE as e$1, ig as c, a5 as r, dl as w, de as t, ec as R$1, gX as a$1, a0 as t$1, aa as s$4, ee as D, aj as U, hi as e$2, an as g, ih as i$1, ii as p$2, ij as c$1, ik as p$3, dQ as e$3, h7 as m$1, il as p$4, im as E, io as r$1, hj as d, ip as g$1, gZ as n$1, g_ as c$2, M, iq as l$4, g$ as l$5 } from "./vendor.74d5941c.js";
import { s as s$3, l as l$2 } from "./FetchAssociatedFeatureLayer.e9e7443e.js";
import { s as s$2, l as l$3, u as u$1, m } from "./I3SLayerDefinitions.faeba957.js";
import { R } from "./SceneService.00767b42.js";
import "./resourceUtils.a485eb9e.js";
let s = class extends a {
  constructor() {
    super(...arguments), this.name = null, this.field = null, this.currentRangeExtent = null, this.fullRangeExtent = null, this.type = "rangeInfo";
  }
};
e([y({ type: String, json: { read: true, write: true } })], s.prototype, "name", void 0), e([y({ type: String, json: { read: true, write: true } })], s.prototype, "field", void 0), e([y({ type: [Number], json: { read: true, write: true } })], s.prototype, "currentRangeExtent", void 0), e([y({ type: [Number], json: { read: true, write: true } })], s.prototype, "fullRangeExtent", void 0), e([y({ type: ["rangeInfo"], readOnly: true, json: { read: false, write: true } })], s.prototype, "type", void 0), s = e([i("esri.layers.support.RangeInfo")], s);
var p = s;
const z = ["3DObject", "Point"], Z = n.getLogger("esri.layers.SceneLayer"), B = l$5();
let J = class extends R(p$1(l(u(s$1(l$1(b)))))) {
  constructor(...e2) {
    super(...e2), this.featureReduction = null, this.rangeInfos = null, this.operationalLayerType = "ArcGISSceneServiceLayer", this.type = "scene", this.fields = null, this.floorInfo = null, this.outFields = null, this.nodePages = null, this.materialDefinitions = null, this.textureSetDefinitions = null, this.geometryDefinitions = null, this.serviceUpdateTimeStamp = null, this.definitionExpression = null, this.path = null, this.labelsVisible = true, this.labelingInfo = null, this.legendEnabled = true, this.cachedDrawingInfo = { color: false }, this.editingEnabled = true, this.popupEnabled = true, this.popupTemplate = null, this.objectIdField = null, this.globalIdField = null, this._fieldUsageInfo = {}, this.screenSizePerspectiveEnabled = true;
  }
  normalizeCtorArgs(e2, t2) {
    return typeof e2 == "string" ? __spreadValues({ url: e2 }, t2) : e2;
  }
  getField(e2) {
    return this.fieldsIndex.get(e2);
  }
  getFieldDomain(e2) {
    const t2 = this.getField(e2);
    return t2 && t2.domain ? t2.domain : null;
  }
  get fieldsIndex() {
    return new e$1(this.fields);
  }
  readNodePages(e2, t2, r2) {
    return t2.layerType === "Point" && (e2 = t2.pointNodePages), e2 == null || typeof e2 != "object" ? null : s$2.fromJSON(e2, r2);
  }
  set elevationInfo(e2) {
    this._set("elevationInfo", e2), this.loaded && this._validateElevationInfo();
  }
  get geometryType() {
    return X[this.profile] || "mesh";
  }
  set renderer(e2) {
    c(e2, this.fields), this._set("renderer", e2);
  }
  readCachedDrawingInfo(e2) {
    return e2 != null && typeof e2 == "object" || (e2 = {}), e2.color == null && (e2.color = false), e2;
  }
  get capabilities() {
    const e2 = r(this.associatedLayer) && this.associatedLayer.capabilities ? this.associatedLayer.capabilities : s$3, { query: r$12, editing: { supportsGlobalId: o, supportsRollbackOnFailure: s2, supportsUploadWithItemId: i2 }, data: { supportsZ: a2, supportsM: n2, isVersioned: p2 }, operations: { supportsEditing: l2, supportsUpdate: d2 } } = e2, y2 = e2.operations.supportsChangeTracking;
    return { query: r$12, editing: { supportsGlobalId: o, supportsRollbackOnFailure: s2, supportsGeometryUpdate: false, supportsUploadWithItemId: i2 }, data: { supportsZ: a2, supportsM: n2, isVersioned: p2 }, operations: { supportsEditing: l2 && y2, supportsAdd: false, supportsDelete: false, supportsUpdate: d2 && y2 } };
  }
  get defaultPopupTemplate() {
    return r(this.associatedLayer) || this.attributeStorageInfo ? this.createPopupTemplate() : null;
  }
  readObjectIdField(e2, t2) {
    return !e2 && t2.fields && t2.fields.some((t3) => (t3.type === "esriFieldTypeOID" && (e2 = t3.name), !!e2)), e2 || void 0;
  }
  readGlobalIdField(e2, t2) {
    return !e2 && t2.fields && t2.fields.some((t3) => (t3.type === "esriFieldTypeGlobalID" && (e2 = t3.name), !!e2)), e2 || void 0;
  }
  get displayField() {
    return r(this.associatedLayer) ? this.associatedLayer.displayField : null;
  }
  readProfile(e2, t2) {
    const r2 = t2.store.profile;
    return r2 != null && H[r2] ? H[r2] : (Z.error("Unknown or missing profile", { profile: r2, layer: this }), "mesh-pyramids");
  }
  load(e2) {
    const r$12 = r(e2) ? e2.signal : null, o = this.loadFromPortal({ supportedTypes: ["Scene Service"] }, e2).catch(w).then(() => this._fetchService(r$12)).then(() => Promise.all([this._fetchIndexAndUpdateExtent(this.nodePages, r$12), this._setAssociatedFeatureLayer(r$12)])).then(() => this._validateElevationInfo()).then(() => this._applyAssociatedLayerOverrides()).then(() => this._populateFieldUsageInfo()).then(() => t(this, { origin: "service" }, r$12)).then(() => c(this.renderer, this.fields));
    return this.addResolvingPromise(o), Promise.resolve(this);
  }
  createQuery() {
    const e2 = new R$1();
    return this.geometryType !== "mesh" && (e2.returnGeometry = true, e2.returnZ = true), e2.where = this.definitionExpression || "1=1", e2.sqlFormat = "standard", e2;
  }
  queryExtent(e2, t2) {
    return this._getAssociatedLayerForQuery().then((r2) => r2.queryExtent(e2 || this.createQuery(), t2));
  }
  queryFeatureCount(e2, t2) {
    return this._getAssociatedLayerForQuery().then((r2) => r2.queryFeatureCount(e2 || this.createQuery(), t2));
  }
  queryFeatures(e2, t2) {
    return this._getAssociatedLayerForQuery().then((r2) => r2.queryFeatures(e2 || this.createQuery(), t2)).then((e3) => {
      if (e3 && e3.features)
        for (const t3 of e3.features)
          t3.layer = this, t3.sourceLayer = this;
      return e3;
    });
  }
  queryObjectIds(e2, t2) {
    return this._getAssociatedLayerForQuery().then((r2) => r2.queryObjectIds(e2 || this.createQuery(), t2));
  }
  getFieldUsageInfo(e2) {
    const t2 = { supportsLabelingInfo: false, supportsRenderer: false, supportsPopupTemplate: false, supportsLayerQuery: false };
    return this.loaded ? this._fieldUsageInfo[e2] || t2 : (Z.error("#getFieldUsageInfo()", "Unavailable until layer is loaded"), t2);
  }
  createPopupTemplate(e2) {
    return a$1(this, e2);
  }
  _getAssociatedLayerForQuery() {
    const e2 = this.associatedLayer;
    return r(e2) && e2.loaded ? Promise.resolve(e2) : this._loadAssociatedLayerForQuery();
  }
  _loadAssociatedLayerForQuery() {
    return __async(this, null, function* () {
      if (yield this.load(), t$1(this.associatedLayer))
        throw new s$4("scenelayer:query-not-available", "SceneLayer queries are not available without an associated feature layer", { layer: this });
      try {
        yield this.associatedLayer.load();
      } catch (e2) {
        throw new s$4("scenelayer:query-not-available", "SceneLayer associated feature layer could not be loaded", { layer: this, error: e2 });
      }
      return this.associatedLayer;
    });
  }
  hasCachedStatistics(e2) {
    return this.statisticsInfo != null && this.statisticsInfo.some((t2) => t2.name === e2);
  }
  queryCachedStatistics(e2, t2) {
    return __async(this, null, function* () {
      if (yield this.load(t2), !this.statisticsInfo)
        throw new s$4("scenelayer:no-cached-statistics", "Cached statistics are not available for this layer");
      const r2 = this.fieldsIndex.get(e2);
      if (!r2)
        throw new s$4("scenelayer:field-unexisting", `Field '${e2}' does not exist on the layer`);
      for (const o of this.statisticsInfo)
        if (o.name === r2.name) {
          const e3 = D(this.parsedUrl.path, o.href);
          return U(e3, { query: { f: "json" }, responseType: "json", signal: t2 ? t2.signal : null }).then((e4) => e4.data);
        }
      throw new s$4("scenelayer:no-cached-statistics", "Cached statistics for this attribute are not available");
    });
  }
  saveAs(e2, t2) {
    return __async(this, null, function* () {
      return this._debouncedSaveOperations(1, __spreadProps(__spreadValues({}, t2), { getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "scene" }), e2);
    });
  }
  save() {
    return __async(this, null, function* () {
      const e2 = { getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "scene" };
      return this._debouncedSaveOperations(0, e2);
    });
  }
  applyEdits(e2, t2) {
    return __async(this, null, function* () {
      const o = yield import("./editingSupport.b1ce7bf4.js");
      if (yield this.load(), t$1(this.associatedLayer))
        throw new s$4(`${this.type}-layer:not-editable`, "Service is not editable");
      return yield this.associatedLayer.load(), o.applyEdits(this, this.associatedLayer.source, e2, t2);
    });
  }
  on(e2, t2) {
    return super.on(e2, t2);
  }
  validateLayer(e2) {
    if (e2.layerType && z.indexOf(e2.layerType) === -1)
      throw new s$4("scenelayer:layer-type-not-supported", "SceneLayer does not support this layer type", { layerType: e2.layerType });
    if (isNaN(this.version.major) || isNaN(this.version.minor))
      throw new s$4("layer:service-version-not-supported", "Service version is not supported.", { serviceVersion: this.version.versionString, supportedVersions: "1.x" });
    if (this.version.major > 1)
      throw new s$4("layer:service-version-too-new", "Service version is too new.", { serviceVersion: this.version.versionString, supportedVersions: "1.x" });
    function t2(e3, t3) {
      let r2 = false, o = false;
      if (e3 == null)
        r2 = true, o = true;
      else {
        const s2 = t3 && t3.isGeographic;
        switch (e3) {
          case "east-north-up":
          case "earth-centered":
            r2 = true, o = s2;
            break;
          case "vertex-reference-frame":
            r2 = true, o = !s2;
            break;
          default:
            r2 = false;
        }
      }
      if (!r2)
        throw new s$4("scenelayer:unsupported-normal-reference-frame", "Normal reference frame is invalid.");
      if (!o)
        throw new s$4("scenelayer:incompatible-normal-reference-frame", "Normal reference frame is incompatible with layer spatial reference.");
    }
    t2(this.normalReferenceFrame, this.spatialReference);
  }
  _getTypeKeywords() {
    const e2 = [];
    if (this.profile === "points")
      e2.push("Point");
    else {
      if (this.profile !== "mesh-pyramids")
        throw new s$4("scenelayer:unknown-profile", "SceneLayer:save() encountered an unknown SceneLayer profile: " + this.profile);
      e2.push("3DObject");
    }
    return e2;
  }
  _populateFieldUsageInfo() {
    if (this._fieldUsageInfo = {}, this.fields)
      for (const e2 of this.fields) {
        const r$12 = !(!this.attributeStorageInfo || !this.attributeStorageInfo.some((t2) => t2.name === e2.name)), o = !!(r(this.associatedLayer) && this.associatedLayer.fields && this.associatedLayer.fields.some((t2) => t2 && e2.name === t2.name)), s2 = { supportsLabelingInfo: r$12, supportsRenderer: r$12, supportsPopupTemplate: r$12 || o, supportsLayerQuery: o };
        this._fieldUsageInfo[e2.name] = s2;
      }
  }
  _applyAssociatedLayerOverrides() {
    this._applyAssociatedLayerFieldsOverrides(), this._applyAssociatedLayerPopupOverrides();
  }
  _applyAssociatedLayerFieldsOverrides() {
    if (t$1(this.associatedLayer) || !this.associatedLayer.fields)
      return;
    let e2 = null;
    for (const t2 of this.associatedLayer.fields) {
      const r2 = this.getField(t2.name);
      r2 ? (!r2.domain && t2.domain && (r2.domain = t2.domain.clone()), r2.editable = t2.editable, r2.nullable = t2.nullable, r2.length = t2.length) : (e2 || (e2 = this.fields ? this.fields.slice() : []), e2.push(t2.clone()));
    }
    e2 && this._set("fields", e2);
  }
  _applyAssociatedLayerPopupOverrides() {
    if (t$1(this.associatedLayer))
      return;
    const e2 = ["popupTemplate", "popupEnabled"], t2 = e$2(this);
    for (let r2 = 0; r2 < e2.length; r2++) {
      const o = e2[r2];
      this._buddyIsMoreImportant(o) && (t2.setDefaultOrigin(this.associatedLayer.originOf(o)), t2.set(o, this.associatedLayer[o]), t2.setDefaultOrigin("user"));
    }
  }
  _setAssociatedFeatureLayer(e2) {
    return __async(this, null, function* () {
      if (["mesh-pyramids", "points"].indexOf(this.profile) === -1)
        return;
      const t2 = new l$2(this.parsedUrl, this.portalItem, e2);
      try {
        this.associatedLayer = yield t2.fetch();
      } catch (r2) {
        g(r2) || this._logWarningOnPopupEnabled();
      }
    });
  }
  _logWarningOnPopupEnabled() {
    i$1(this, ["popupTemplate", "popupEnabled"], () => this.popupEnabled && this.popupTemplate != null).then(() => () => {
      const e2 = `this SceneLayer: ${this.title}`;
      this.attributeStorageInfo == null ? Z.warn(`Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${e2}`) : Z.info(`Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${e2}`);
    });
  }
  _buddyIsMoreImportant(e2) {
    if (t$1(this.associatedLayer))
      return false;
    const t2 = this.originIdOf(e2), o = this.associatedLayer.originIdOf(e2);
    return o != null && o <= 2 ? t2 == null || t2 < 2 : o != null && o <= 3 && (t2 == null || t2 < 3);
  }
  _validateElevationInfo() {
    const e2 = this.elevationInfo;
    e2 && (this.profile === "mesh-pyramids" && e2.mode !== "absolute-height" && Z.warn(".elevationInfo=", "Mesh scene layers only support absolute-height elevation mode"), e2.featureExpressionInfo && e2.featureExpressionInfo.expression !== "0" && Z.warn(".elevationInfo=", "Scene layers do not support featureExpressionInfo"));
  }
};
e([y({ types: { key: "type", base: p$2, typeMap: { selection: c$1 } }, json: { origins: { "web-scene": { name: "layerDefinition.featureReduction", write: true }, "portal-item": { name: "layerDefinition.featureReduction", write: true } } } })], J.prototype, "featureReduction", void 0), e([y({ type: [p], json: { read: false, origins: { "web-scene": { name: "layerDefinition.rangeInfos", write: true }, "portal-item": { name: "layerDefinition.rangeInfos", write: true } } } })], J.prototype, "rangeInfos", void 0), e([y({ json: { read: false } })], J.prototype, "associatedLayer", void 0), e([y({ type: ["show", "hide"] })], J.prototype, "listMode", void 0), e([y({ type: ["ArcGISSceneServiceLayer"] })], J.prototype, "operationalLayerType", void 0), e([y({ json: { read: false }, readOnly: true })], J.prototype, "type", void 0), e([y(__spreadProps(__spreadValues({}, B.fields), { readOnly: true, json: { read: false, origins: { service: { read: true } } } }))], J.prototype, "fields", void 0), e([y({ readOnly: true })], J.prototype, "fieldsIndex", null), e([y({ type: p$3, json: { read: { source: "layerDefinition.floorInfo" }, write: { target: "layerDefinition.floorInfo" } } })], J.prototype, "floorInfo", void 0), e([y(B.outFields)], J.prototype, "outFields", void 0), e([y({ type: s$2, readOnly: true, json: { read: false } })], J.prototype, "nodePages", void 0), e([e$3("service", "nodePages", ["nodePages", "pointNodePages"])], J.prototype, "readNodePages", null), e([y({ type: [l$3], readOnly: true })], J.prototype, "materialDefinitions", void 0), e([y({ type: [u$1], readOnly: true })], J.prototype, "textureSetDefinitions", void 0), e([y({ type: [m], readOnly: true })], J.prototype, "geometryDefinitions", void 0), e([y({ readOnly: true })], J.prototype, "serviceUpdateTimeStamp", void 0), e([y({ readOnly: true })], J.prototype, "attributeStorageInfo", void 0), e([y({ readOnly: true })], J.prototype, "statisticsInfo", void 0), e([y({ type: String, json: { origins: { service: { read: false, write: false } }, name: "layerDefinition.definitionExpression", write: true } })], J.prototype, "definitionExpression", void 0), e([y({ type: String, json: { origins: { "web-scene": { read: true, write: true } }, read: false } })], J.prototype, "path", void 0), e([y(m$1)], J.prototype, "elevationInfo", null), e([y({ type: String })], J.prototype, "geometryType", null), e([y(p$4)], J.prototype, "labelsVisible", void 0), e([y({ type: [E], json: { origins: { service: { name: "drawingInfo.labelingInfo", read: { reader: r$1 }, write: false } }, name: "layerDefinition.drawingInfo.labelingInfo", read: { reader: r$1 }, write: true } })], J.prototype, "labelingInfo", void 0), e([y(d)], J.prototype, "legendEnabled", void 0), e([y(g$1)], J.prototype, "opacity", void 0), e([y({ types: n$1, json: { origins: { service: { read: { source: "drawingInfo.renderer" } } }, name: "layerDefinition.drawingInfo.renderer", write: true }, value: null })], J.prototype, "renderer", null), e([y({ json: { read: false } })], J.prototype, "cachedDrawingInfo", void 0), e([e$3("service", "cachedDrawingInfo")], J.prototype, "readCachedDrawingInfo", null), e([y({ readOnly: true, json: { read: false } })], J.prototype, "capabilities", null), e([y({ type: Boolean, json: { read: false } })], J.prototype, "editingEnabled", void 0), e([y(c$2)], J.prototype, "popupEnabled", void 0), e([y({ type: M, json: { name: "popupInfo", write: true } })], J.prototype, "popupTemplate", void 0), e([y({ readOnly: true, json: { read: false } })], J.prototype, "defaultPopupTemplate", null), e([y({ type: String, json: { read: false } })], J.prototype, "objectIdField", void 0), e([e$3("service", "objectIdField", ["objectIdField", "fields"])], J.prototype, "readObjectIdField", null), e([y({ type: String, json: { read: false } })], J.prototype, "globalIdField", void 0), e([e$3("service", "globalIdField", ["globalIdField", "fields"])], J.prototype, "readGlobalIdField", null), e([y({ readOnly: true, type: String, json: { read: false } })], J.prototype, "displayField", null), e([y({ type: String, json: { read: false } })], J.prototype, "profile", void 0), e([e$3("service", "profile", ["store.profile"])], J.prototype, "readProfile", null), e([y({ readOnly: true, type: String, json: { origins: { service: { read: { source: "store.normalReferenceFrame" } } }, read: false } })], J.prototype, "normalReferenceFrame", void 0), e([y(l$4)], J.prototype, "screenSizePerspectiveEnabled", void 0), J = e([i("esri.layers.SceneLayer")], J);
const H = { "mesh-pyramids": "mesh-pyramids", meshpyramids: "mesh-pyramids", "features-meshes": "mesh-pyramids", points: "points", "features-points": "points", lines: "lines", "features-lines": "lines", polygons: "polygons", "features-polygons": "polygons" }, X = { "mesh-pyramids": "mesh", points: "point", lines: "polyline", polygons: "polygon" };
var Y = J;
export default Y;
