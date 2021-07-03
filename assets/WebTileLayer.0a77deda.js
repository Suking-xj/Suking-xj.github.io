var __defProp = Object.defineProperty;
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
import { ae as e, af as y, ag as i$1, dA as a$1, bT as y$1, gR as t, gT as o, gS as s, dY as l, dZ as u, d_ as l$1, e1 as b, cr as M, bF as k, eP as x$1, _ as j, i9 as i$2, dC as $, aa as s$1, ia as et, dG as z, aj as U, ib as r, dQ as e$1, c4 as o$1 } from "./vendor.74d5941c.js";
var i;
let p = i = class extends a$1 {
  constructor(r2) {
    super(r2);
  }
  clone() {
    return new i({ customLayerParameters: y$1(this.customLayerParameters), customParameters: y$1(this.customParameters), layerIdentifier: this.layerIdentifier, tileMatrixSet: this.tileMatrixSet, url: this.url });
  }
};
e([y({ json: { type: Object, write: true } })], p.prototype, "customLayerParameters", void 0), e([y({ json: { type: Object, write: true } })], p.prototype, "customParameters", void 0), e([y({ type: String, json: { write: true } })], p.prototype, "layerIdentifier", void 0), e([y({ type: String, json: { write: true } })], p.prototype, "tileMatrixSet", void 0), e([y({ type: String, json: { write: true } })], p.prototype, "url", void 0), p = i = e([i$1("esri.layer.support.WMTSLayerInfo")], p);
var a = p;
let R = class extends t(o(s(l(u(l$1(b)))))) {
  constructor(...e2) {
    super(...e2), this.copyright = "", this.fullExtent = new M(-20037508342787e-6, -2003750834278e-5, 2003750834278e-5, 20037508342787e-6, k.WebMercator), this.legendEnabled = false, this.isReference = null, this.popupEnabled = false, this.spatialReference = k.WebMercator, this.subDomains = null, this.tileInfo = new x$1({ size: [256, 256], dpi: 96, format: "png8", compressionQuality: 0, origin: new j({ x: -20037508342787e-6, y: 20037508342787e-6, spatialReference: k.WebMercator }), spatialReference: k.WebMercator, lods: [new i$2({ level: 0, scale: 591657527591555e-6, resolution: 156543.033928 }), new i$2({ level: 1, scale: 295828763795777e-6, resolution: 78271.5169639999 }), new i$2({ level: 2, scale: 147914381897889e-6, resolution: 39135.7584820001 }), new i$2({ level: 3, scale: 73957190948944e-6, resolution: 19567.8792409999 }), new i$2({ level: 4, scale: 36978595474472e-6, resolution: 9783.93962049996 }), new i$2({ level: 5, scale: 18489297737236e-6, resolution: 4891.96981024998 }), new i$2({ level: 6, scale: 9244648868618e-6, resolution: 2445.98490512499 }), new i$2({ level: 7, scale: 4622324434309e-6, resolution: 1222.99245256249 }), new i$2({ level: 8, scale: 2311162217155e-6, resolution: 611.49622628138 }), new i$2({ level: 9, scale: 1155581108577e-6, resolution: 305.748113140558 }), new i$2({ level: 10, scale: 577790.554289, resolution: 152.874056570411 }), new i$2({ level: 11, scale: 288895.277144, resolution: 76.4370282850732 }), new i$2({ level: 12, scale: 144447.638572, resolution: 38.2185141425366 }), new i$2({ level: 13, scale: 72223.819286, resolution: 19.1092570712683 }), new i$2({ level: 14, scale: 36111.909643, resolution: 9.55462853563415 }), new i$2({ level: 15, scale: 18055.954822, resolution: 4.77731426794937 }), new i$2({ level: 16, scale: 9027.977411, resolution: 2.38865713397468 }), new i$2({ level: 17, scale: 4513.988705, resolution: 1.19432856685505 }), new i$2({ level: 18, scale: 2256.994353, resolution: 0.597164283559817 }), new i$2({ level: 19, scale: 1128.497176, resolution: 0.298582141647617 })] }), this.type = "web-tile", this.urlTemplate = null, this.wmtsInfo = null;
  }
  normalizeCtorArgs(e2, t2) {
    return typeof e2 == "string" ? __spreadValues({ urlTemplate: e2 }, t2) : e2;
  }
  load(e2) {
    const t2 = this.loadFromPortal({ supportedTypes: ["WMTS"] }, e2).then(() => {
      let e3 = "";
      if (this.urlTemplate)
        if (this.spatialReference.equals(this.tileInfo.spatialReference)) {
          const t3 = new $(this.urlTemplate);
          !!this.subDomains && this.subDomains.length > 0 || t3.authority.indexOf("{subDomain}") === -1 || (e3 = "is missing 'subDomains' property");
        } else
          e3 = "spatialReference must match tileInfo.spatialReference";
      else
        e3 = "is missing the required 'urlTemplate' property value";
      if (e3)
        throw new s$1("web-tile-layer:load", `WebTileLayer (title: '${this.title}', id: '${this.id}') ${e3}`);
    });
    return this.addResolvingPromise(t2), Promise.resolve(this);
  }
  get levelValues() {
    const e2 = [];
    if (!this.tileInfo)
      return null;
    for (const t2 of this.tileInfo.lods)
      e2[t2.level] = t2.levelValue || t2.level;
    return e2;
  }
  readSpatialReference(e2, t2) {
    return e2 || t2.fullExtent && t2.fullExtent.spatialReference && k.fromJSON(t2.fullExtent.spatialReference);
  }
  get tileServers() {
    if (!this.urlTemplate)
      return null;
    const e2 = [], { urlTemplate: t2, subDomains: r2 } = this, l2 = new $(t2), o2 = l2.scheme ? l2.scheme + "://" : "//", s2 = o2 + l2.authority + "/";
    if (l2.authority.indexOf("{subDomain}") === -1)
      e2.push(s2);
    else if (r2 && r2.length > 0 && l2.authority.split(".").length > 1)
      for (const i2 of r2)
        e2.push(o2 + l2.authority.replace(/\{subDomain\}/gi, i2) + "/");
    return e2.map((e3) => (e3.charAt(e3.length - 1) !== "/" && (e3 += "/"), e3));
  }
  get urlPath() {
    if (!this.urlTemplate)
      return null;
    const e2 = this.urlTemplate, t2 = new $(e2), r2 = (t2.scheme ? t2.scheme + "://" : "//") + t2.authority + "/";
    return e2.substring(r2.length);
  }
  readUrlTemplate(e2, t2) {
    return e2 || t2.templateUrl;
  }
  writeUrlTemplate(e2, t2) {
    e2 && et(e2) && (e2 = "https:" + e2), e2 && (e2 = e2.replace(/\{z\}/gi, "{level}").replace(/\{x\}/gi, "{col}").replace(/\{y\}/gi, "{row}"), e2 = z(e2)), t2.templateUrl = e2;
  }
  fetchTile(e2, t2, r2, l2 = {}) {
    const { signal: o2, timestamp: s2 } = l2, i2 = this.getTileUrl(e2, t2, r2), n = { responseType: "image", signal: o2 };
    return s2 != null && (n.query = { _ts: l2.timestamp }), U(i2, n).then((e3) => e3.data);
  }
  getTileUrl(e2, r$1, l2) {
    const o2 = this.levelValues[e2];
    return this.tileServers[r$1 % this.tileServers.length] + r(this.urlPath, { level: o2, z: o2, col: l2, x: l2, row: r$1, y: r$1 });
  }
};
e([y({ type: String, value: "", json: { write: true } })], R.prototype, "copyright", void 0), e([y({ type: M, json: { write: true } })], R.prototype, "fullExtent", void 0), e([y({ readOnly: true, json: { read: false, write: false } })], R.prototype, "legendEnabled", void 0), e([y({ type: ["show", "hide"] })], R.prototype, "listMode", void 0), e([y()], R.prototype, "levelValues", null), e([y({ type: Boolean, json: { read: false, write: { enabled: true, overridePolicy: () => ({ enabled: false }) } } })], R.prototype, "isReference", void 0), e([y({ type: ["WebTiledLayer"], value: "WebTiledLayer" })], R.prototype, "operationalLayerType", void 0), e([y({ readOnly: true, json: { read: false, write: false } })], R.prototype, "popupEnabled", void 0), e([y({ type: k })], R.prototype, "spatialReference", void 0), e([e$1("spatialReference", ["spatialReference", "fullExtent.spatialReference"])], R.prototype, "readSpatialReference", null), e([y({ type: [String], json: { write: true } })], R.prototype, "subDomains", void 0), e([y({ type: x$1, json: { write: true } })], R.prototype, "tileInfo", void 0), e([y({ readOnly: true })], R.prototype, "tileServers", null), e([y({ json: { read: false } })], R.prototype, "type", void 0), e([y()], R.prototype, "urlPath", null), e([y({ type: String, json: { origins: { "portal-item": { read: { source: "url" } } } } })], R.prototype, "urlTemplate", void 0), e([e$1("urlTemplate", ["urlTemplate", "templateUrl"])], R.prototype, "readUrlTemplate", null), e([o$1("urlTemplate", { templateUrl: { type: String } })], R.prototype, "writeUrlTemplate", null), e([y({ type: a, json: { write: true } })], R.prototype, "wmtsInfo", void 0), R = e([i$1("esri.layers.WebTileLayer")], R);
var x = R;
var WebTileLayer = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": x
});
export { WebTileLayer as W, a, x };
