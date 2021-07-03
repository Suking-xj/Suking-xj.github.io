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
import { ae as e, af as y, ag as i$1, dA as a, a4 as n, c9 as t$1, gR as t$2, hw as f, gS as s, gT as o, dX as p$1, dY as l, dZ as u, d_ as l$1, e1 as b, bF as k, ds as e$1, aa as s$1, a5 as r, ir as u$1, is as c, cE as e$2, ig as c$1, it as p$2, hG as P, ca as m, iu as o$1, gX as a$1, ec as R, aj as U, iv as m$1, de as t$3, gY as x, dQ as e$3, c4 as o$2, iw as s$2, e6 as y$1, cr as M, il as p$3, im as E, io as r$1, hj as d, gV as N, ix as S, iy as j, g_ as c$2, M as M$1, iz as m$2, gZ as n$1, iq as l$2, e0 as f$1, iA as u$2, iB as M$2 } from "./vendor.74d5941c.js";
var t;
let p = t = class extends a {
  constructor() {
    super(...arguments), this.age = null, this.ageReceived = null, this.displayCount = null, this.maxObservations = 1;
  }
  clone() {
    return new t({ age: this.age, ageReceived: this.ageReceived, displayCount: this.displayCount, maxObservations: this.maxObservations });
  }
};
e([y({ type: Number, json: { write: true } })], p.prototype, "age", void 0), e([y({ type: Number, json: { write: true } })], p.prototype, "ageReceived", void 0), e([y({ type: Number, json: { write: true } })], p.prototype, "displayCount", void 0), e([y({ type: Number, json: { write: true } })], p.prototype, "maxObservations", void 0), p = t = e([i$1("esri.layers.support.PurgeOptions")], p);
var i = p;
const $ = n.getLogger("esri.layers.StreamLayer"), ee = new t$1({ esriGeometryPoint: "point", esriGeometryMultipoint: "multipoint", esriGeometryPolyline: "polyline", esriGeometryPolygon: "polygon" });
let re = class extends t$2(f(s(o(p$1(l(u(l$1(b)))))))) {
  constructor(...e2) {
    super(...e2), this.copyright = null, this.definitionExpression = null, this.displayField = null, this.elevationInfo = null, this.featureReduction = null, this.fields = null, this.geometryDefinition = null, this.geometryType = null, this.labelsVisible = true, this.labelingInfo = null, this.legendEnabled = true, this.maxReconnectionAttempts = 0, this.maxReconnectionInterval = 20, this.maxScale = 0, this.minScale = 0, this.objectIdField = null, this.operationalLayerType = "ArcGISStreamLayer", this.popupEnabled = true, this.popupTemplate = null, this.purgeOptions = new i(), this.screenSizePerspectiveEnabled = true, this.sourceJSON = null, this.spatialReference = k.WGS84, this.type = "stream", this.url = null, this.updateInterval = 300, this.webSocketUrl = null;
  }
  normalizeCtorArgs(e2, r2) {
    return typeof e2 == "string" ? __spreadValues({ url: e2 }, r2) : e2;
  }
  load(e2) {
    if (!("WebSocket" in e$1))
      return this.addResolvingPromise(Promise.reject(new s$1("stream-layer:websocket-unsupported", "WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))), Promise.resolve(this);
    const o2 = r(e2) ? e2.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Stream Service"] }, e2).catch((e3) => e3).then(() => this._fetchService(o2))), Promise.resolve(this);
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  readFeatureReduction(e2, r2) {
    return u$1(e2, r2);
  }
  writeWebSceneFeatureReduction(e2, r2, t2, o2) {
    c(e2, r2, "layerDefinition.featureReduction", o2);
  }
  get fieldsIndex() {
    return new e$2(this.fields);
  }
  set renderer(e2) {
    c$1(e2, this.fields), this._set("renderer", e2);
  }
  readRenderer(e2, r2, t2) {
    const o2 = (r2 = r2.layerDefinition || r2).drawingInfo && r2.drawingInfo.renderer || void 0;
    if (o2) {
      const e3 = p$2(o2, r2, t2) || void 0;
      return e3 || $.error("Failed to create renderer", { rendererDefinition: r2.drawingInfo.renderer, layer: this, context: t2 }), e3;
    }
    if (r2.defaultSymbol)
      return r2.types && r2.types.length ? new P({ defaultSymbol: te(r2.defaultSymbol, r2, t2), field: r2.typeIdField, uniqueValueInfos: r2.types.map((e3) => ({ id: e3.id, symbol: te(e3.symbol, e3, t2) })) }) : new m({ symbol: te(r2.defaultSymbol, r2, t2) });
  }
  writeRenderer(e2, r2, t2, o2) {
    o$1(e2, r2, t2, o2);
  }
  writeWebSceneRenderer(e2, r2, t2, o2) {
    o$1(e2, r2, "layerDefinition.drawingInfo.renderer", o2);
  }
  createPopupTemplate(e2) {
    return a$1(this, e2);
  }
  createQuery() {
    const e2 = new R();
    return e2.returnGeometry = true, e2.outFields = ["*"], e2.where = this.definitionExpression || "1=1", e2;
  }
  getFieldDomain(e2, r2) {
    if (!this.fields)
      return null;
    let t2 = null;
    return this.fields.some((r3) => (r3.name === e2 && (t2 = r3.domain), !!t2)), t2;
  }
  getField(e2) {
    return this.fieldsIndex.get(e2);
  }
  _fetchService(e2) {
    return __async(this, null, function* () {
      var r2;
      if (!!this.webSocketUrl) {
        var t2;
        if ((t2 = this.timeInfo) == null || !t2.trackIdField)
          throw new s$1("stream-layer:missing-metadata", "The stream layer trackIdField must be specified.");
        if (!this.objectIdField)
          throw new s$1("stream-layer:missing-metadata", "The stream layer objectIdField must be specified.");
        if (!this.fields)
          throw new s$1("stream-layer:missing-metadata", "The stream layer fields must be specified.");
        if (!this.geometryType)
          throw new s$1("stream-layer:missing-metadata", "The stream layer geometryType must be specified.");
        this.url = this.webSocketUrl;
      } else if (!this.sourceJSON) {
        const { data: r3 } = yield U(this.parsedUrl.path, { query: __spreadValues({ f: "json" }, this.parsedUrl.query), responseType: "json", signal: e2 });
        this.sourceJSON = r3;
      }
      return this.sourceJSON = __spreadProps(__spreadValues({}, (r2 = this.sourceJSON) != null ? r2 : {}), { objectIdField: "__esri_stream_id__" }), this.read(this.sourceJSON, { origin: "service", url: this.parsedUrl }), c$1(this.renderer, this.fields), m$1(this.timeInfo, this.fields), t$3(this, { origin: "service" });
    });
  }
};
e([y({ type: String })], re.prototype, "copyright", void 0), e([y({ readOnly: true })], re.prototype, "defaultPopupTemplate", null), e([y({ type: String, json: { read: { source: "layerDefinition.definitionExpression" }, write: { target: "layerDefinition.definitionExpression" } } })], re.prototype, "definitionExpression", void 0), e([y({ type: String })], re.prototype, "displayField", void 0), e([y({ type: x })], re.prototype, "elevationInfo", void 0), e([e$3("featureReduction", ["layerDefinition.featureReduction"])], re.prototype, "readFeatureReduction", null), e([o$2("web-scene", "featureReduction", { "layerDefinition.featureReduction": { types: s$2 } })], re.prototype, "writeWebSceneFeatureReduction", null), e([y({ type: [y$1] })], re.prototype, "fields", void 0), e([y({ readOnly: true })], re.prototype, "fieldsIndex", null), e([y({ type: M })], re.prototype, "geometryDefinition", void 0), e([y({ type: ["point", "polygon", "polyline", "multipoint"], json: { read: { reader: ee.read } } })], re.prototype, "geometryType", void 0), e([y(p$3)], re.prototype, "labelsVisible", void 0), e([y({ type: [E], json: { read: { source: "layerDefinition.drawingInfo.labelingInfo", reader: r$1 }, write: { target: "layerDefinition.drawingInfo.labelingInfo" } } })], re.prototype, "labelingInfo", void 0), e([y(d)], re.prototype, "legendEnabled", void 0), e([y({ type: ["show", "hide"] })], re.prototype, "listMode", void 0), e([y({ type: N })], re.prototype, "maxReconnectionAttempts", void 0), e([y({ type: N })], re.prototype, "maxReconnectionInterval", void 0), e([y(S)], re.prototype, "maxScale", void 0), e([y(j)], re.prototype, "minScale", void 0), e([y({ type: String })], re.prototype, "objectIdField", void 0), e([y({ value: "ArcGISStreamLayer", type: ["ArcGISStreamLayer"] })], re.prototype, "operationalLayerType", void 0), e([y(c$2)], re.prototype, "popupEnabled", void 0), e([y({ type: M$1, json: { read: { source: "popupInfo" }, write: { target: "popupInfo" } } })], re.prototype, "popupTemplate", void 0), e([y({ type: i })], re.prototype, "purgeOptions", void 0), e([y({ types: m$2, json: { origins: { service: { write: { target: "drawingInfo.renderer", enabled: false } } }, write: { target: "layerDefinition.drawingInfo.renderer" } } })], re.prototype, "renderer", null), e([e$3("service", "renderer", ["drawingInfo.renderer", "defaultSymbol"]), e$3("renderer", ["layerDefinition.drawingInfo.renderer", "layerDefinition.defaultSymbol"])], re.prototype, "readRenderer", null), e([o$2("renderer")], re.prototype, "writeRenderer", null), e([o$2("web-scene", "renderer", { "layerDefinition.drawingInfo.renderer": { types: n$1 } })], re.prototype, "writeWebSceneRenderer", null), e([y(l$2)], re.prototype, "screenSizePerspectiveEnabled", void 0), e([y({ type: k, json: { origins: { service: { read: { source: "spatialReference" } } } } })], re.prototype, "spatialReference", void 0), e([y({ json: { read: false } })], re.prototype, "type", void 0), e([y(f$1)], re.prototype, "url", void 0), e([y({ type: Number })], re.prototype, "updateInterval", void 0), e([y({ type: String })], re.prototype, "webSocketUrl", void 0), re = e([i$1("esri.layers.StreamLayer")], re);
const te = u$2({ types: M$2 });
var oe = re;
export default oe;
