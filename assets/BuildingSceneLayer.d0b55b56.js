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
import { bB as r, gU as O, ae as e$1, af as y$1, dQ as e$2, gV as N, gW as u$5, ag as i$3, a4 as n$3, d2 as f, el as n$4, cE as e$3, a5 as r$1, v as ke, gX as a$4, aj as U, ec as R$1, a0 as t$3, aa as s$1, cr as M, bF as k, gY as x, gZ as n$6, g_ as c$6, M as M$1, eS as r$2, c9 as t$4, g$ as l$6, c_ as L, h0 as t$5, h1 as i$4, dA as a$5, bT as y$2, h2 as t$6, h3 as o, dX as p$6, dY as l$7, dZ as u$7, gS as s$3, d_ as l$8, e1 as b, h4 as l$9, ee as D, dl as w, h5 as n$7, h6 as v, h7 as m$5 } from "./vendor.74d5941c.js";
import { s, l as l$a } from "./FetchAssociatedFeatureLayer.e9e7443e.js";
import { n as n$5, R as R$2 } from "./SceneService.00767b42.js";
import { s as s$2, l as l$5, u as u$6, m as m$4 } from "./I3SLayerDefinitions.faeba957.js";
import "./resourceUtils.a485eb9e.js";
let l$4 = class extends r(O) {
  constructor(r2) {
    super(r2), this.title = "", this.id = -1, this.modelName = null, this.isEmpty = null, this.visible = true, this.opacity = 1;
  }
  readTitle(r2, o2) {
    return typeof o2.alias == "string" ? o2.alias : typeof o2.name == "string" ? o2.name : "";
  }
  readIdOnlyOnce(r2) {
    return this.id !== -1 ? this.id : typeof r2 == "number" ? r2 : void 0;
  }
};
e$1([y$1({ type: String, json: { origins: { "web-scene": { write: true }, "portal-item": { write: true } } } })], l$4.prototype, "title", void 0), e$1([e$2("service", "title", ["alias", "name"])], l$4.prototype, "readTitle", null), e$1([y$1()], l$4.prototype, "layer", void 0), e$1([y$1({ type: N, readOnly: true, json: { read: false, write: { ignoreOrigin: true } } })], l$4.prototype, "id", void 0), e$1([e$2("service", "id")], l$4.prototype, "readIdOnlyOnce", null), e$1([y$1(u$5(String))], l$4.prototype, "modelName", void 0), e$1([y$1(u$5(Boolean))], l$4.prototype, "isEmpty", void 0), e$1([y$1({ type: Boolean, json: { name: "visibility", write: true } })], l$4.prototype, "visible", void 0), e$1([y$1({ type: Number, json: { write: true } })], l$4.prototype, "opacity", void 0), l$4 = e$1([i$3("esri.layers.buildingSublayers.BuildingSublayer")], l$4);
var n$2 = l$4;
const P$1 = n$3.getLogger("esri.layers.buildingSublayers.BuildingComponentSublayer"), E$1 = l$6();
let Q = class extends f.LoadableMixin(n$4(n$2)) {
  constructor(e2) {
    super(e2), this.type = "building-component", this.nodePages = null, this.materialDefinitions = null, this.textureSetDefinitions = null, this.geometryDefinitions = null, this.serviceUpdateTimeStamp = null, this.fields = null, this.associatedLayer = null, this.outFields = null, this.listMode = "show", this.renderer = null, this.definitionExpression = null, this.popupEnabled = true, this.popupTemplate = null, this.layerType = "3d-object";
  }
  get parsedUrl() {
    return this.layer ? { path: `${this.layer.parsedUrl.path}/sublayers/${this.id}`, query: this.layer.parsedUrl.query } : null;
  }
  get fieldsIndex() {
    return new e$3(this.fields);
  }
  readAssociatedLayer(e2, t2) {
    const o2 = this.layer.associatedFeatureServiceItem, s2 = t2.associatedLayerID;
    return r$1(o2) && typeof s2 == "number" ? new ke({ portalItem: o2, layerId: s2 }) : null;
  }
  get objectIdField() {
    if (this.fields != null) {
      for (const e2 of this.fields)
        if (e2.type === "oid")
          return e2.name;
    }
    return null;
  }
  get displayField() {
    return r$1(this.associatedLayer) ? this.associatedLayer.displayField : null;
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  load(e2) {
    const t2 = r$1(e2) ? e2.signal : null;
    return this.addResolvingPromise(this._fetchService(t2).then(() => {
      this.indexInfo = n$5(this.parsedUrl.path, this.rootNode, this.nodePages, P$1, t2);
    })), Promise.resolve(this);
  }
  createPopupTemplate(e2) {
    return a$4(this, e2);
  }
  _fetchService(e2) {
    return __async(this, null, function* () {
      const r2 = (yield U(this.parsedUrl.path, { query: { f: "json" }, responseType: "json", signal: e2 })).data;
      this.read(r2, { origin: "service", url: this.parsedUrl });
    });
  }
  getField(e2) {
    return this.fieldsIndex.get(e2);
  }
  getFieldDomain(e2) {
    const r2 = this.getField(e2);
    return r2 && r2.domain ? r2.domain : null;
  }
  get geometryType() {
    return this.layerType === "3d-object" ? "mesh" : "point";
  }
  get profile() {
    return this.layerType === "3d-object" ? "mesh-pyramids" : "points";
  }
  get capabilities() {
    const e2 = r$1(this.associatedLayer) && this.associatedLayer.capabilities ? this.associatedLayer.capabilities : s, { query: t2, data: { supportsZ: o2, supportsM: s$12, isVersioned: i2 } } = e2;
    return { query: t2, data: { supportsZ: o2, supportsM: s$12, isVersioned: i2 } };
  }
  createQuery() {
    const e2 = new R$1();
    return this.geometryType !== "mesh" && (e2.returnGeometry = true, e2.returnZ = true), e2.where = this.definitionExpression || "1=1", e2.sqlFormat = "standard", e2;
  }
  queryExtent(e2, r2) {
    return this._getAssociatedLayerForQuery().then((t2) => t2.queryExtent(e2 || this.createQuery(), r2));
  }
  queryFeatureCount(e2, r2) {
    return this._getAssociatedLayerForQuery().then((t2) => t2.queryFeatureCount(e2 || this.createQuery(), r2));
  }
  queryFeatures(e2, r2) {
    return this._getAssociatedLayerForQuery().then((t2) => t2.queryFeatures(e2 || this.createQuery(), r2)).then((e3) => {
      if (e3 && e3.features)
        for (const r3 of e3.features)
          r3.layer = this.layer, r3.sourceLayer = this;
      return e3;
    });
  }
  queryObjectIds(e2, r2) {
    return this._getAssociatedLayerForQuery().then((t2) => t2.queryObjectIds(e2 || this.createQuery(), r2));
  }
  getFieldUsageInfo(e2) {
    return this.fieldsIndex.has(e2) ? { supportsLabelingInfo: false, supportsRenderer: false, supportsPopupTemplate: false, supportsLayerQuery: false } : { supportsLabelingInfo: false, supportsRenderer: true, supportsPopupTemplate: true, supportsLayerQuery: r$1(this.associatedLayer) };
  }
  _getAssociatedLayerForQuery() {
    const e2 = this.associatedLayer;
    return r$1(e2) && e2.loaded ? Promise.resolve(e2) : this._loadAssociatedLayerForQuery();
  }
  _loadAssociatedLayerForQuery() {
    return __async(this, null, function* () {
      if (yield this.load(), t$3(this.associatedLayer))
        throw new s$1("buildingscenelayer:query-not-available", "BuildingSceneLayer component layer queries are not available without an associated feature layer", { layer: this });
      try {
        yield this.associatedLayer.load();
      } catch (e2) {
        throw new s$1("buildingscenelayer:query-not-available", "BuildingSceneLayer associated feature layer could not be loaded", { layer: this, error: e2 });
      }
      return this.associatedLayer;
    });
  }
};
e$1([y$1({ readOnly: true })], Q.prototype, "parsedUrl", null), e$1([y$1({ type: s$2, readOnly: true })], Q.prototype, "nodePages", void 0), e$1([y$1({ type: [l$5], readOnly: true })], Q.prototype, "materialDefinitions", void 0), e$1([y$1({ type: [u$6], readOnly: true })], Q.prototype, "textureSetDefinitions", void 0), e$1([y$1({ type: [m$4], readOnly: true })], Q.prototype, "geometryDefinitions", void 0), e$1([y$1({ readOnly: true })], Q.prototype, "serviceUpdateTimeStamp", void 0), e$1([y$1({ readOnly: true })], Q.prototype, "store", void 0), e$1([y$1({ type: String, readOnly: true, json: { read: { source: "store.rootNode" } } })], Q.prototype, "rootNode", void 0), e$1([y$1({ readOnly: true })], Q.prototype, "attributeStorageInfo", void 0), e$1([y$1(E$1.fields)], Q.prototype, "fields", void 0), e$1([y$1({ readOnly: true })], Q.prototype, "fieldsIndex", null), e$1([y$1({ readOnly: true, type: ke })], Q.prototype, "associatedLayer", void 0), e$1([e$2("service", "associatedLayer", ["associatedLayerID"])], Q.prototype, "readAssociatedLayer", null), e$1([y$1(E$1.outFields)], Q.prototype, "outFields", void 0), e$1([y$1({ type: String, readOnly: true })], Q.prototype, "objectIdField", null), e$1([y$1({ readOnly: true, type: String, json: { read: false } })], Q.prototype, "displayField", null), e$1([y$1({ readOnly: true, type: M, aliasOf: "layer.fullExtent" })], Q.prototype, "fullExtent", void 0), e$1([y$1({ readOnly: true, type: k, aliasOf: "layer.spatialReference" })], Q.prototype, "spatialReference", void 0), e$1([y$1({ readOnly: true, aliasOf: "layer.version" })], Q.prototype, "version", void 0), e$1([y$1({ readOnly: true, type: x, aliasOf: "layer.elevationInfo" })], Q.prototype, "elevationInfo", void 0), e$1([y$1({ readOnly: true, type: Number, aliasOf: "layer.minScale" })], Q.prototype, "minScale", void 0), e$1([y$1({ readOnly: true, type: Number, aliasOf: "layer.maxScale" })], Q.prototype, "maxScale", void 0), e$1([y$1({ type: ["hide", "show"], json: { write: true } })], Q.prototype, "listMode", void 0), e$1([y$1({ types: n$6, json: { origins: { service: { read: { source: "drawingInfo.renderer" } } }, name: "layerDefinition.drawingInfo.renderer", write: true }, value: null })], Q.prototype, "renderer", void 0), e$1([y$1({ type: String, json: { origins: { service: { read: false, write: false } }, read: { source: "layerDefinition.definitionExpression" }, write: { target: "layerDefinition.definitionExpression" } } })], Q.prototype, "definitionExpression", void 0), e$1([y$1(c$6)], Q.prototype, "popupEnabled", void 0), e$1([y$1({ type: M$1, json: { read: { source: "popupInfo" }, write: { target: "popupInfo" } } })], Q.prototype, "popupTemplate", void 0), e$1([y$1({ readOnly: true, type: String, json: { origins: { service: { read: { source: "store.normalReferenceFrame" } } }, read: false } })], Q.prototype, "normalReferenceFrame", void 0), e$1([y$1({ readOnly: true, json: { read: false } })], Q.prototype, "defaultPopupTemplate", null), e$1([y$1({ json: { write: false } }), r$2(new t$4({ "3DObject": "3d-object", Point: "point" }))], Q.prototype, "layerType", void 0), e$1([y$1()], Q.prototype, "geometryType", null), e$1([y$1()], Q.prototype, "profile", null), e$1([y$1({ readOnly: true, json: { read: false } })], Q.prototype, "capabilities", null), Q = e$1([i$3("esri.layers.buildingSublayers.BuildingComponentSublayer")], Q);
var R = Q;
var p$5;
const a$3 = { type: L, readOnly: true, json: { origins: { service: { read: { source: "sublayers", reader: l$3 } } }, read: false } };
function l$3(r2, e2, s2) {
  if (r2 && Array.isArray(r2))
    return new L(r2.map((r3) => {
      const e3 = y(r3);
      if (e3) {
        const o2 = new e3();
        return o2.read(r3, s2), o2;
      }
      s2 && s2.messages && r3 && s2.messages.push(new t$5("building-scene-layer:unsupported-sublayer-type", "Building scene sublayer of type '" + (r3.type || "unknown") + "' are not supported", { definition: r3, context: s2 }));
    }));
}
let c$5 = p$5 = class extends n$2 {
  constructor(r2) {
    super(r2), this.type = "building-group", this.listMode = "show", this.sublayers = null;
  }
  loadAll() {
    return i$4(this, (r2) => p$5.forEachSublayer(this.sublayers, (e2) => {
      e2.type !== "building-group" && r2(e2);
    }));
  }
};
function y(r2) {
  return r2.layerType === "group" ? c$5 : R;
}
e$1([y$1({ type: ["hide", "show", "hide-children"], json: { write: true } })], c$5.prototype, "listMode", void 0), e$1([y$1(a$3)], c$5.prototype, "sublayers", void 0), c$5 = p$5 = e$1([i$3("esri.layers.buildingSublayers.BuildingGroupSublayer")], c$5), function(r2) {
  function e2(r3, o2) {
    r3.forEach((r4) => {
      o2(r4), r4.type === "building-group" && e2(r4.sublayers, o2);
    });
  }
  r2.sublayersProperty = a$3, r2.readSublayers = l$3, r2.forEachSublayer = e2;
}(c$5 || (c$5 = {}));
var d$2 = c$5;
let e = class extends a$5 {
  constructor() {
    super(...arguments), this.type = null;
  }
};
e$1([y$1({ type: String, readOnly: true, json: { write: true } })], e.prototype, "type", void 0), e = e$1([i$3("esri.layers.support.BuildingFilterAuthoringInfo")], e);
var p$4 = e;
var p$3;
let i$2 = p$3 = class extends a$5 {
  constructor() {
    super(...arguments), this.filterType = null, this.filterValues = null;
  }
  clone() {
    return new p$3({ filterType: this.filterType, filterValues: y$2(this.filterValues) });
  }
};
e$1([y$1({ type: String, json: { write: true } })], i$2.prototype, "filterType", void 0), e$1([y$1({ type: [String], json: { write: true } })], i$2.prototype, "filterValues", void 0), i$2 = p$3 = e$1([i$3("esri.layers.support.BuildingFilterAuthoringInfoType")], i$2);
var l$2 = i$2;
var c$4;
const l$1 = L.ofType(l$2);
let m$3 = c$4 = class extends a$5 {
  clone() {
    return new c$4({ filterTypes: y$2(this.filterTypes) });
  }
};
e$1([y$1({ type: l$1, json: { write: true } })], m$3.prototype, "filterTypes", void 0), m$3 = c$4 = e$1([i$3("esri.layers.support.BuildingFilterAuthoringInfoBlock")], m$3);
var u$4 = m$3;
var c$3;
const l = L.ofType(u$4);
let n$1 = c$3 = class extends p$4 {
  constructor() {
    super(...arguments), this.type = "checkbox";
  }
  clone() {
    return new c$3({ filterBlocks: y$2(this.filterBlocks) });
  }
};
e$1([y$1({ type: ["checkbox"] })], n$1.prototype, "type", void 0), e$1([y$1({ type: l, json: { write: true } })], n$1.prototype, "filterBlocks", void 0), n$1 = c$3 = e$1([i$3("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")], n$1);
var u$3 = n$1;
let t$2 = class extends a$5 {
};
e$1([y$1({ readOnly: true, json: { read: false } })], t$2.prototype, "type", void 0), t$2 = e$1([i$3("esri.layers.support.BuildingFilterMode")], t$2);
var p$2 = t$2;
var t$1;
let p$1 = t$1 = class extends p$2 {
  constructor() {
    super(...arguments), this.type = "solid";
  }
  clone() {
    return new t$1();
  }
};
e$1([y$1({ type: ["solid"], readOnly: true, json: { write: true } })], p$1.prototype, "type", void 0), p$1 = t$1 = e$1([i$3("esri.layers.support.BuildingFilterModeSolid")], p$1);
var i$1 = p$1;
var c$2;
let m$2 = c$2 = class extends p$2 {
  constructor() {
    super(...arguments), this.type = "wire-frame", this.edges = null;
  }
  clone() {
    return new c$2({ edges: y$2(this.edges) });
  }
};
e$1([r$2({ wireFrame: "wire-frame" })], m$2.prototype, "type", void 0), e$1([y$1(t$6)], m$2.prototype, "edges", void 0), m$2 = c$2 = e$1([i$3("esri.layers.support.BuildingFilterModeWireFrame")], m$2);
var a$2 = m$2;
var t;
let p = t = class extends p$2 {
  constructor() {
    super(...arguments), this.type = "x-ray";
  }
  clone() {
    return new t();
  }
};
e$1([y$1({ type: ["x-ray"], readOnly: true, json: { write: true } })], p.prototype, "type", void 0), p = t = e$1([i$3("esri.layers.support.BuildingFilterModeXRay")], p);
var i = p;
var a$1;
const d$1 = { nonNullable: true, types: { key: "type", base: p$2, typeMap: { solid: i$1, "wire-frame": a$2, "x-ray": i } }, json: { read: (r2) => {
  switch (r2 && r2.type) {
    case "solid":
      return i$1.fromJSON(r2);
    case "wireFrame":
      return a$2.fromJSON(r2);
    case "x-ray":
      return i.fromJSON(r2);
    default:
      return;
  }
}, write: { enabled: true, isRequired: true } } };
let u$2 = a$1 = class extends a$5 {
  constructor() {
    super(...arguments), this.filterExpression = null, this.filterMode = new i$1(), this.title = "";
  }
  clone() {
    return new a$1({ filterExpression: this.filterExpression, filterMode: y$2(this.filterMode), title: this.title });
  }
};
e$1([y$1({ type: String, json: { write: { enabled: true, isRequired: true } } })], u$2.prototype, "filterExpression", void 0), e$1([y$1(d$1)], u$2.prototype, "filterMode", void 0), e$1([y$1({ type: String, json: { write: { enabled: true, isRequired: true } } })], u$2.prototype, "title", void 0), u$2 = a$1 = e$1([i$3("esri.layers.support.BuildingFilterBlock")], u$2);
var c$1 = u$2;
var u$1;
const d = L.ofType(c$1);
let m$1 = u$1 = class extends a$5 {
  constructor() {
    super(...arguments), this.description = null, this.filterBlocks = null, this.id = o(), this.name = null;
  }
  clone() {
    return new u$1({ description: this.description, filterBlocks: y$2(this.filterBlocks), id: this.id, name: this.name, filterAuthoringInfo: y$2(this.filterAuthoringInfo) });
  }
};
e$1([y$1({ type: String, json: { write: true } })], m$1.prototype, "description", void 0), e$1([y$1({ type: d, json: { write: { enabled: true, isRequired: true } } })], m$1.prototype, "filterBlocks", void 0), e$1([y$1({ types: { key: "type", base: p$4, typeMap: { checkbox: u$3 } }, json: { read: (r2) => {
  switch (r2 && r2.type) {
    case "checkbox":
      return u$3.fromJSON(r2);
    default:
      return null;
  }
}, write: true } })], m$1.prototype, "filterAuthoringInfo", void 0), e$1([y$1({ type: String, constructOnly: true, json: { write: { enabled: true, isRequired: true } } })], m$1.prototype, "id", void 0), e$1([y$1({ type: String, json: { write: { enabled: true, isRequired: true } } })], m$1.prototype, "name", void 0), m$1 = u$1 = e$1([i$3("esri.layers.support.BuildingFilter")], m$1);
var a = m$1;
const u = n$3.getLogger("esri.layers.support.BuildingSummaryStatistics");
let n = class extends a$5 {
  constructor() {
    super(...arguments), this.fieldName = null, this.modelName = null, this.label = null, this.min = null, this.max = null, this.mostFrequentValues = null, this.subLayerIds = null;
  }
};
e$1([y$1({ type: String })], n.prototype, "fieldName", void 0), e$1([y$1({ type: String })], n.prototype, "modelName", void 0), e$1([y$1({ type: String })], n.prototype, "label", void 0), e$1([y$1({ type: Number })], n.prototype, "min", void 0), e$1([y$1({ type: Number })], n.prototype, "max", void 0), e$1([y$1({ json: { read: (r2) => Array.isArray(r2) && (r2.every((r3) => typeof r3 == "string") || r2.every((r3) => typeof r3 == "number")) ? r2.slice() : null } })], n.prototype, "mostFrequentValues", void 0), e$1([y$1({ type: [Number] })], n.prototype, "subLayerIds", void 0), n = e$1([i$3("esri.layers.support.BuildingFieldStatistics")], n);
let m = class extends f.LoadableMixin(n$4(a$5)) {
  constructor() {
    super(...arguments), this.url = null;
  }
  get fields() {
    return this.loaded || this.loadStatus === "loading" ? this._get("fields") : (u.error("building summary statistics are not loaded"), null);
  }
  load(r2) {
    const t2 = r$1(r2) ? r2.signal : null;
    return this.addResolvingPromise(this._fetchService(t2)), Promise.resolve(this);
  }
  _fetchService(r2) {
    return __async(this, null, function* () {
      const e2 = (yield U(this.url, { query: { f: "json" }, responseType: "json", signal: r2 })).data;
      this.read(e2, { origin: "service" });
    });
  }
};
e$1([y$1({ constructOnly: true, type: String })], m.prototype, "url", void 0), e$1([y$1({ readOnly: true, type: [n], json: { read: { source: "summary" } } })], m.prototype, "fields", null), m = e$1([i$3("esri.layers.support.BuildingSummaryStatistics")], m);
var c = m;
const B = n$3.getLogger("esri.layers.BuildingSceneLayer"), E = L.ofType(a), _ = y$2(d$2.sublayersProperty);
_.json.origins["web-scene"] = { type: [R], write: { enabled: true, overridePolicy: () => ({ enabled: false }) } }, _.json.origins["portal-item"] = { type: [R], write: { enabled: true, overridePolicy: () => ({ enabled: false }) } };
let A = class extends R$2(p$6(l$7(u$7(s$3(l$8(b)))))) {
  constructor(e2) {
    super(e2), this.operationalLayerType = "BuildingSceneLayer", this.allSublayers = new l$9({ root: this, rootCollectionNames: ["sublayers"], getChildrenFunction: (e3) => e3.type === "building-group" ? e3.sublayers : null }), this.sublayers = null, this.sublayerOverrides = null, this.filters = new E(), this.activeFilterId = null, this.summaryStatistics = null, this.outFields = null, this.type = "building-scene";
  }
  normalizeCtorArgs(e2) {
    return typeof e2 == "string" ? { url: e2 } : e2;
  }
  destroy() {
    this.allSublayers.destroy();
  }
  readSublayers(e2, r2, t2) {
    const s2 = d$2.readSublayers(e2, r2, t2);
    return d$2.forEachSublayer(s2, (e3) => e3.layer = this), this.sublayerOverrides && (this.applySublayerOverrides(s2, this.sublayerOverrides), this.sublayerOverrides = null), s2;
  }
  applySublayerOverrides(e2, { overrides: r2, context: t2 }) {
    d$2.forEachSublayer(e2, (e3) => e3.read(r2.get(e3.id), t2));
  }
  readSublayerOverrides(e2, r2) {
    const t2 = new Map();
    for (const s2 of e2)
      s2 != null && typeof s2 == "object" && typeof s2.id == "number" ? t2.set(s2.id, s2) : r2.messages.push(new s$1("building-scene-layer:invalid-sublayer-override", "Invalid value for sublayer override. Not an object or no id specified.", { value: s2 }));
    return { overrides: t2, context: r2 };
  }
  writeSublayerOverrides(e2, r2, t2) {
    const s2 = [];
    d$2.forEachSublayer(this.sublayers, (e3) => {
      const r3 = e3.write({}, t2);
      Object.keys(r3).length > 1 && s2.push(r3);
    }), s2.length > 0 && (r2.sublayers = s2);
  }
  writeUnappliedOverrides(e2, t2) {
    t2.sublayers = [], e2.overrides.forEach((e3) => {
      t2.sublayers.push(y$2(e3));
    });
  }
  write(e2, r2) {
    return e2 = super.write(e2, r2), !r2 || r2.origin !== "web-scene" && r2.origin !== "portal-item" || (this.sublayers ? this.writeSublayerOverrides(this.sublayers, e2, r2) : this.sublayerOverrides && this.writeUnappliedOverrides(this.sublayerOverrides, e2)), e2;
  }
  read(e2, r2) {
    if (super.read(e2, r2), r2 && (r2.origin === "web-scene" || r2.origin === "portal-item") && e2 != null && Array.isArray(e2.sublayers)) {
      const t2 = this.readSublayerOverrides(e2.sublayers, r2);
      this.sublayers ? this.applySublayerOverrides(this.sublayers, t2) : this.sublayerOverrides = t2;
    }
  }
  readSummaryStatistics(e2, r2) {
    if (typeof r2.statisticsHRef == "string") {
      const e3 = D(this.parsedUrl.path, r2.statisticsHRef);
      return new c({ url: e3 });
    }
    return null;
  }
  set elevationInfo(e2) {
    this._set("elevationInfo", e2), this._validateElevationInfo();
  }
  load(e2) {
    const r2 = r$1(e2) ? e2.signal : null, s2 = this.loadFromPortal({ supportedTypes: ["Scene Service"] }, e2).catch(w).then(() => this._fetchService(r2)).then(() => this._fetchAssociatedFeatureService(r2));
    return this.addResolvingPromise(s2), Promise.resolve(this);
  }
  loadAll() {
    return n$7(this, (e2) => {
      d$2.forEachSublayer(this.sublayers, (r2) => {
        r2.type !== "building-group" && e2(r2);
      }), this.summaryStatistics && e2(this.summaryStatistics);
    });
  }
  saveAs(e2, r2) {
    return __async(this, null, function* () {
      return this._debouncedSaveOperations(1, __spreadProps(__spreadValues({}, r2), { getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "building-scene" }), e2);
    });
  }
  save() {
    return __async(this, null, function* () {
      const e2 = { getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "building-scene" };
      return this._debouncedSaveOperations(0, e2);
    });
  }
  validateLayer(e2) {
    if (!e2.layerType || e2.layerType !== "Building")
      throw new s$1("buildingscenelayer:layer-type-not-supported", "BuildingSceneLayer does not support this layer type", { layerType: e2.layerType });
  }
  _getTypeKeywords() {
    return ["Building"];
  }
  _validateElevationInfo() {
    const e2 = this.elevationInfo;
    e2 && (e2.mode !== "absolute-height" && B.warn(".elevationInfo=", "Building scene layers only support absolute-height elevation mode"), e2.featureExpressionInfo && e2.featureExpressionInfo.expression !== "0" && B.warn(".elevationInfo=", "Building scene layers do not support featureExpressionInfo"));
  }
  _fetchAssociatedFeatureService(e2) {
    return __async(this, null, function* () {
      const r2 = new l$a(this.parsedUrl, this.portalItem, e2);
      try {
        this.associatedFeatureServiceItem = yield r2.fetchPortalItem();
      } catch (t2) {
        B.warn("Associated feature service item could not be loaded", t2);
      }
    });
  }
};
e$1([y$1({ type: ["BuildingSceneLayer"] })], A.prototype, "operationalLayerType", void 0), e$1([y$1({ readOnly: true })], A.prototype, "allSublayers", void 0), e$1([y$1(_)], A.prototype, "sublayers", void 0), e$1([e$2("service", "sublayers")], A.prototype, "readSublayers", null), e$1([y$1({ type: E, nonNullable: true, json: { write: true } })], A.prototype, "filters", void 0), e$1([y$1({ type: String, json: { write: true } })], A.prototype, "activeFilterId", void 0), e$1([y$1({ readOnly: true, type: c })], A.prototype, "summaryStatistics", void 0), e$1([e$2("summaryStatistics", ["statisticsHRef"])], A.prototype, "readSummaryStatistics", null), e$1([y$1({ type: [String], json: { read: false } })], A.prototype, "outFields", void 0), e$1([y$1(v)], A.prototype, "fullExtent", void 0), e$1([y$1({ type: ["show", "hide", "hide-children"] })], A.prototype, "listMode", void 0), e$1([y$1(u$5(k))], A.prototype, "spatialReference", void 0), e$1([y$1(m$5)], A.prototype, "elevationInfo", null), e$1([y$1({ json: { read: false }, readOnly: true })], A.prototype, "type", void 0), e$1([y$1()], A.prototype, "associatedFeatureServiceItem", void 0), A = e$1([i$3("esri.layers.BuildingSceneLayer")], A);
var P = A;
export default P;
