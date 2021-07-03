var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a, prop, b2[prop]);
    }
  return a;
};
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
import { gR as t, gT as o, dY as l, dZ as u, gS as s, d_ as l$1, e1 as b, dO as pt, a5 as r, aj as U, ar as s$1, ae as e, af as y, dQ as e$1, h8 as b$1, hj as d, e0 as f, ag as i, hk as n, hl as d$1, hm as n$1, hn as y$1, ho as u$1 } from "./vendor.74d5941c.js";
const R = ["atom", "xml"], C = { base: n, key: "type", typeMap: { "simple-line": d$1 }, errorContext: "symbol" }, L = { base: n, key: "type", typeMap: { "picture-marker": n$1, "simple-marker": y$1 }, errorContext: "symbol" }, k = { base: n, key: "type", typeMap: { "simple-fill": u$1 }, errorContext: "symbol" };
let F = class extends t(o(l(u(s(l$1(b)))))) {
  constructor(...e2) {
    super(...e2), this.description = null, this.legendEnabled = true, this.lineSymbol = null, this.pointSymbol = null, this.polygonSymbol = null, this.operationalLayerType = "GeoRSS", this.outSpatialReference = null, this.url = null, this.type = "geo-rss";
  }
  normalizeCtorArgs(e2, o2) {
    return typeof e2 == "string" ? __spreadValues({ url: e2 }, o2) : e2;
  }
  get title() {
    const e2 = this._get("title");
    return e2 && this.originOf("title") !== "defaults" ? e2 : this.url ? pt(this.url, R) || "GeoRSS" : e2 || "";
  }
  set title(e2) {
    this._set("title", e2);
  }
  readFeatureCollections(e2, o2) {
    return o2.featureCollection.layers.forEach((e3) => {
      const o3 = e3.layerDefinition.drawingInfo.renderer.symbol;
      o3 && o3.type === "esriSFS" && o3.outline && o3.outline.style.indexOf("esriSFS") !== -1 && (o3.outline.style = "esriSLSSolid");
    }), o2.featureCollection.layers;
  }
  load(e2) {
    const o2 = r(e2) ? e2.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Map Service", "Feature Service", "Feature Collection", "Scene Service"] }, e2).then(() => this._fetchService(o2), () => this._fetchService(o2))), Promise.resolve(this);
  }
  _fetchService(e2) {
    return __async(this, null, function* () {
      const { data: r2 } = yield U(s$1.geoRSSServiceUrl, { query: { url: this.url, refresh: !!this.loaded || void 0, outSR: this.outSpatialReference ? JSON.stringify(this.outSpatialReference.toJSON()) : void 0 }, signal: e2 });
      this.read(r2, { origin: "service" });
    });
  }
};
e([y()], F.prototype, "description", void 0), e([y({ json: { origins: { service: { read: { source: "name", reader: (e2) => e2 || void 0 } } } } })], F.prototype, "title", null), e([y()], F.prototype, "featureCollections", void 0), e([e$1("service", "featureCollections", ["featureCollection.layers"])], F.prototype, "readFeatureCollections", null), e([y(b$1)], F.prototype, "id", void 0), e([y(d)], F.prototype, "legendEnabled", void 0), e([y({ types: C, json: { write: true } })], F.prototype, "lineSymbol", void 0), e([y({ type: ["show", "hide"] })], F.prototype, "listMode", void 0), e([y({ types: L, json: { write: true } })], F.prototype, "pointSymbol", void 0), e([y({ types: k, json: { write: true } })], F.prototype, "polygonSymbol", void 0), e([y({ type: ["GeoRSS"] })], F.prototype, "operationalLayerType", void 0), e([y()], F.prototype, "outSpatialReference", void 0), e([y(f)], F.prototype, "url", void 0), e([y({ readOnly: true, json: { read: false }, value: "geo-rss" })], F.prototype, "type", void 0), F = e([i("esri.layers.GeoRSSLayer")], F);
var M = F;
export default M;
