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
    var step = (x2) => x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import { av as n, hY as i, d2 as f, h_ as j$1, h$ as x, a5 as r, cr as M, e4 as d, c_ as L$1, ae as e, af as y, eZ as c, i0 as u, dQ as e$1, ag as i$1, gR as t, gT as o, gS as s, dY as l, dZ as u$1, d_ as l$1, e1 as b, h4 as l$2, bF as k, dO as pt, c4 as o$1, e0 as f$1 } from "./vendor.74d5941c.js";
import { j as j$2, S as S$1, g as g$1, d as d$1 } from "./kmlUtils.e19028c7.js";
import "./aaBoundingBox.b76947f8.js";
var j;
let S = j = class extends n.EventedMixin(i(f)) {
  constructor() {
    super(...arguments), this._sublayersHandles = null, this.description = null, this.id = null, this.networkLink = null, this.title = null, this.sourceJSON = null, this.fullExtent = null;
  }
  initialize() {
    j$1(this, "networkLink").then(() => x(this, "visible")).then(() => this.load());
  }
  load(e2) {
    if (!this.networkLink)
      return;
    if (this.networkLink.viewFormat)
      return;
    const t2 = r(e2) ? e2.signal : null, o2 = this._fetchService(this._get("networkLink").href, t2).then((e3) => {
      const r2 = j$2(e3.sublayers);
      this.fullExtent = M.fromJSON(r2), this.sourceJSON = e3;
      const t3 = d(L$1.ofType(j), S$1(j, e3));
      this.sublayers ? this.sublayers.addMany(t3) : this.sublayers = t3, this.layer.emit("sublayer-update"), this.layer && this.layer.notifyChange("visibleSublayers");
    });
    return this.addResolvingPromise(o2), Promise.resolve(this);
  }
  set sublayers(e2) {
    const r2 = this._get("sublayers");
    r2 && (r2.forEach((e3) => {
      e3.parent = null, e3.layer = null;
    }), this._sublayersHandles.forEach((e3) => e3.remove()), this._sublayersHandles = null), e2 && (e2.forEach((e3) => {
      e3.parent = this, e3.layer = this.layer;
    }), this._sublayersHandles = [e2.on("after-add", ({ item: e3 }) => {
      e3.parent = this, e3.layer = this.layer;
    }), e2.on("after-remove", ({ item: e3 }) => {
      e3.parent = null, e3.layer = null;
    })]), this._set("sublayers", e2);
  }
  castSublayers(e2) {
    return d(L$1.ofType(j), e2);
  }
  get visible() {
    return this._get("visible");
  }
  set visible(e2) {
    this._get("visible") !== e2 && (this._set("visible", e2), this.layer && this.layer.notifyChange("visibleSublayers"));
  }
  readVisible(e2, r2) {
    return !!r2.visibility;
  }
  set layer(e2) {
    this._set("layer", e2), this.sublayers && this.sublayers.forEach((r2) => r2.layer = e2);
  }
  _fetchService(e2, r2) {
    return g$1(e2, this.layer.outSpatialReference, this.layer.refreshInterval, r2).then((e3) => d$1(e3.data));
  }
};
e([y()], S.prototype, "description", void 0), e([y()], S.prototype, "id", void 0), e([y({ readOnly: true, value: null })], S.prototype, "networkLink", void 0), e([y({ json: { write: { allowNull: true } } })], S.prototype, "parent", void 0), e([y({ value: null, json: { write: { allowNull: true } } })], S.prototype, "sublayers", null), e([c("sublayers")], S.prototype, "castSublayers", null), e([y({ value: null, json: { read: { source: "name", reader: (e2) => u(e2) } } })], S.prototype, "title", void 0), e([y({ value: true })], S.prototype, "visible", null), e([e$1("visible", ["visibility"])], S.prototype, "readVisible", null), e([y()], S.prototype, "sourceJSON", void 0), e([y({ value: null })], S.prototype, "layer", null), e([y({ type: M })], S.prototype, "fullExtent", void 0), S = j = e([i$1("esri.layers.support.KMLSublayer")], S);
var g = S;
const L = ["kml", "xml"];
let E = class extends t(o(s(l(u$1(l$1(b)))))) {
  constructor(...e2) {
    super(...e2), this._visibleFolders = [], this.allSublayers = new l$2({ root: this, rootCollectionNames: ["sublayers"], getChildrenFunction: (e3) => e3.sublayers }), this.outSpatialReference = k.WGS84, this.path = null, this.legendEnabled = false, this.operationalLayerType = "KML", this.sublayers = null, this.type = "kml", this.url = null;
  }
  initialize() {
    this.watch("sublayers", (e2, r2) => {
      r2 && r2.forEach((e3) => {
        e3.parent = null, e3.layer = null;
      }), e2 && e2.forEach((e3) => {
        e3.parent = this, e3.layer = this;
      });
    }, true), this.on("sublayer-update", () => this.notifyChange("fullExtent"));
  }
  normalizeCtorArgs(e2, r2) {
    return typeof e2 == "string" ? __spreadValues({ url: e2 }, r2) : e2;
  }
  readSublayersFromItemOrWebMap(e2, r2) {
    this._visibleFolders = r2.visibleFolders;
  }
  readSublayers(e2, r2, t2) {
    return S$1(g, r2, t2, this._visibleFolders);
  }
  writeSublayers(e2, r2) {
    const t2 = [], o2 = e2.toArray();
    for (; o2.length; ) {
      const e3 = o2[0];
      e3.networkLink || (e3.visible && t2.push(e3.id), e3.sublayers && o2.push(...e3.sublayers.toArray())), o2.shift();
    }
    r2.visibleFolders = t2;
  }
  get title() {
    const e2 = this._get("title");
    return e2 && this.originOf("title") !== "defaults" ? e2 : this.url ? pt(this.url, L) || "KML" : e2 || "";
  }
  set title(e2) {
    this._set("title", e2);
  }
  get visibleSublayers() {
    const e2 = this.sublayers, r2 = [], t2 = (e3) => {
      e3.visible && (r2.push(e3), e3.sublayers && e3.sublayers.forEach(t2));
    };
    return e2 && e2.forEach(t2), r2;
  }
  get fullExtent() {
    return this._recomputeFullExtent();
  }
  load(e2) {
    const t2 = r(e2) ? e2.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["KML"] }, e2).then(() => this._fetchService(t2))), Promise.resolve(this);
  }
  destroy() {
    super.destroy(), this.allSublayers.destroy();
  }
  _fetchService(e2) {
    return __async(this, null, function* () {
      const r2 = yield Promise.resolve().then(() => this.resourceInfo ? { ssl: false, data: this.resourceInfo } : g$1(this.url, this.outSpatialReference, this.refreshInterval, e2)), t2 = d$1(r2.data);
      t2 && this.read(t2, { origin: "service" });
    });
  }
  _recomputeFullExtent() {
    let e2 = null;
    this.extent && (e2 = this.extent.clone());
    const r2 = (t2) => {
      if (t2.sublayers)
        for (const o2 of t2.sublayers.items)
          r2(o2), o2.visible && o2.fullExtent && (e2 ? e2.union(o2.fullExtent) : e2 = o2.fullExtent.clone());
    };
    return r2(this), e2;
  }
};
e([y({ readOnly: true })], E.prototype, "allSublayers", void 0), e([y({ type: k })], E.prototype, "outSpatialReference", void 0), e([y({ type: String, json: { origins: { "web-scene": { read: true, write: true } }, read: false } })], E.prototype, "path", void 0), e([y({ readOnly: true, json: { read: false, write: false } })], E.prototype, "legendEnabled", void 0), e([y({ type: ["show", "hide", "hide-children"] })], E.prototype, "listMode", void 0), e([y({ type: ["KML"] })], E.prototype, "operationalLayerType", void 0), e([y({})], E.prototype, "resourceInfo", void 0), e([y({ type: L$1.ofType(g), json: { write: { ignoreOrigin: true } } })], E.prototype, "sublayers", void 0), e([e$1(["web-map", "portal-item"], "sublayers", ["visibleFolders"])], E.prototype, "readSublayersFromItemOrWebMap", null), e([e$1("service", "sublayers", ["sublayers"])], E.prototype, "readSublayers", null), e([o$1("sublayers")], E.prototype, "writeSublayers", null), e([y({ readOnly: true, json: { read: false } })], E.prototype, "type", void 0), e([y({ json: { origins: { "web-map": { read: { source: "title" } } }, write: { ignoreOrigin: true } } })], E.prototype, "title", null), e([y(f$1)], E.prototype, "url", void 0), e([y({ readOnly: true })], E.prototype, "visibleSublayers", null), e([y({ type: M })], E.prototype, "extent", void 0), e([y()], E.prototype, "fullExtent", null), E = e([i$1("esri.layers.KMLLayer")], E);
var w = E;
export default w;
