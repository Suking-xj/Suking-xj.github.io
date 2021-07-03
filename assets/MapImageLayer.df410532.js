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
import { gR as t, hw as f, gS as s, gT as o, i1 as h, i2 as y, dX as p, dY as l, dZ as u, d_ as l$1, i3 as e, ab as a, e1 as b, a5 as r, hP as t$1, i4 as e$1, f3 as n, i5 as r$1, aa as s$1, aj as U, an as g, cr as M, d5 as d, h5 as n$1, ae as e$2, af as y$1, dQ as e$3, c4 as o$1, i6 as G, gV as N, e0 as f$1, ag as i } from "./vendor.74d5941c.js";
let R = class extends t(f(s(o(h(y(p(l(u(l$1(e(a(b)))))))))))) {
  constructor(...e2) {
    super(...e2), this.alwaysRefetch = false, this.dpi = 96, this.gdbVersion = null, this.imageFormat = "png24", this.imageMaxHeight = 2048, this.imageMaxWidth = 2048, this.imageTransparency = true, this.isReference = null, this.labelsVisible = false, this.operationalLayerType = "ArcGISMapServiceLayer", this.sourceJSON = null, this.sublayers = null, this.type = "map-image", this.url = null;
  }
  normalizeCtorArgs(e2, r2) {
    return typeof e2 == "string" ? __spreadValues({ url: e2 }, r2) : e2;
  }
  load(e2) {
    const t2 = r(e2) ? e2.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Map Service"] }, e2).then(() => this._fetchService(t2), () => this._fetchService(t2))), Promise.resolve(this);
  }
  readImageFormat(e2, r2) {
    const t2 = r2.supportedImageFormatTypes;
    return t2 && t2.indexOf("PNG32") > -1 ? "png32" : "png24";
  }
  writeSublayers(e2, r2, t2, s2) {
    if (!this.loaded || !e2)
      return;
    const o2 = e2.slice().reverse().flatten(({ sublayers: e3 }) => e3 && e3.toArray().reverse()).toArray();
    let i2 = false;
    if (this.capabilities && this.capabilities.operations.supportsExportMap && this.capabilities.exportMap.supportsDynamicLayers) {
      const e3 = t$1(s2.origin);
      if (e3 === 3) {
        const e4 = this.createSublayersForOrigin("service").sublayers;
        i2 = e$1(o2, e4, 2);
      } else if (e3 > 3) {
        const e4 = this.createSublayersForOrigin("portal-item");
        i2 = e$1(o2, e4.sublayers, t$1(e4.origin));
      }
    }
    const a2 = [], p2 = __spreadValues({ writeSublayerStructure: i2 }, s2);
    let n2 = i2;
    o2.forEach((e3) => {
      const r3 = e3.write({}, p2);
      a2.push(r3), n2 = n2 || e3.originOf("visible") === "user";
    });
    a2.some((e3) => Object.keys(e3).length > 1) && (r2.layers = a2), n2 && (r2.visibleLayers = o2.filter((e3) => e3.visible).map((e3) => e3.id));
  }
  createExportImageParameters(e2, r2, t2, s2) {
    const o2 = s2 && s2.pixelRatio || 1;
    e2 && this.version >= 10 && (e2 = e2.clone().shiftCentralMeridian());
    const i2 = new n({ layer: this, scale: r$1({ extent: e2, width: r2 }) * o2 }), a2 = i2.toJSON();
    i2.destroy();
    const p2 = !s2 || !s2.rotation || this.version < 10.3 ? {} : { rotation: -s2.rotation }, m = e2 && e2.spatialReference, n$12 = m.wkid || JSON.stringify(m.toJSON());
    a2.dpi *= o2;
    const l2 = {};
    if (s2 != null && s2.timeExtent) {
      const { start: e3, end: r3 } = s2.timeExtent.toJSON();
      l2.time = e3 && r3 && e3 === r3 ? "" + e3 : `${e3 == null ? "null" : e3},${r3 == null ? "null" : r3}`;
    } else
      this.timeInfo && !this.timeInfo.hasLiveData && (l2.time = "null,null");
    return __spreadValues(__spreadValues(__spreadValues({ bbox: e2 && e2.xmin + "," + e2.ymin + "," + e2.xmax + "," + e2.ymax, bboxSR: n$12, imageSR: n$12, size: r2 + "," + t2 }, a2), p2), l2);
  }
  fetchImage(e2, r2, t2, s2) {
    return __async(this, null, function* () {
      const o2 = { responseType: "image" };
      s2 && s2.timestamp && (o2.query = __spreadProps(__spreadValues({}, o2.query), { _ts: s2.timestamp })), s2 && s2.signal && (o2.signal = s2.signal), this.customParameters && Object.keys(this.customParameters).length && (o2.query = __spreadValues(__spreadValues({}, this.customParameters), o2.query));
      const i2 = this.parsedUrl.path + "/export", a2 = __spreadProps(__spreadValues(__spreadValues({}, this.parsedUrl.query), this.createExportImageParameters(e2, r2, t2, s2)), { f: "image", _ts: this.alwaysRefetch ? Date.now() : null });
      if (a2.dynamicLayers != null && !this.capabilities.exportMap.supportsDynamicLayers)
        return Promise.reject(new s$1("mapimagelayer:dynamiclayer-not-supported", `service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`, { query: a2 }));
      o2.query ? o2.query = __spreadValues(__spreadValues({}, a2), o2.query) : o2.query = a2;
      return U(i2, o2).then((e3) => e3.data).catch((e3) => {
        if (g(e3))
          throw e3;
        throw new s$1("mapimagelayer:image-fetch-error", `Unable to load image: ${i2}`, { error: e3 });
      });
    });
  }
  fetchRecomputedExtents() {
    return __async(this, arguments, function* (e2 = {}) {
      const r2 = __spreadProps(__spreadValues({}, e2), { query: { returnUpdates: true, f: "json" } }), { data: t2 } = yield U(this.url, r2), { extent: s2, fullExtent: o2, timeExtent: i2 } = t2, a2 = s2 || o2;
      return { fullExtent: a2 && M.fromJSON(a2), timeExtent: i2 && d.fromJSON({ start: i2[0], end: i2[1] }) };
    });
  }
  loadAll() {
    return n$1(this, (e2) => {
      e2(this.allSublayers);
    });
  }
  _fetchService(e2) {
    return __async(this, null, function* () {
      if (this.sourceJSON)
        return void this.read(this.sourceJSON, { origin: "service", url: this.parsedUrl });
      const { data: r2, ssl: t2 } = yield U(this.parsedUrl.path, { query: __spreadValues(__spreadValues({ f: "json" }, this.parsedUrl.query), this.customParameters), signal: e2 });
      t2 && (this.url = this.url.replace(/^http:/i, "https:")), this.sourceJSON = r2, this.read(r2, { origin: "service", url: this.parsedUrl });
    });
  }
};
e$2([y$1()], R.prototype, "alwaysRefetch", void 0), e$2([y$1()], R.prototype, "dpi", void 0), e$2([y$1()], R.prototype, "gdbVersion", void 0), e$2([y$1()], R.prototype, "imageFormat", void 0), e$2([e$3("imageFormat", ["supportedImageFormatTypes"])], R.prototype, "readImageFormat", null), e$2([y$1({ json: { origins: { service: { read: { source: "maxImageHeight" } } } } })], R.prototype, "imageMaxHeight", void 0), e$2([y$1({ json: { origins: { service: { read: { source: "maxImageWidth" } } } } })], R.prototype, "imageMaxWidth", void 0), e$2([y$1()], R.prototype, "imageTransparency", void 0), e$2([y$1({ type: Boolean, json: { read: false, write: { enabled: true, overridePolicy: () => ({ enabled: false }) } } })], R.prototype, "isReference", void 0), e$2([y$1({ json: { read: false, write: false } })], R.prototype, "labelsVisible", void 0), e$2([y$1({ type: ["ArcGISMapServiceLayer"] })], R.prototype, "operationalLayerType", void 0), e$2([y$1({ json: { read: false, write: false } })], R.prototype, "popupEnabled", void 0), e$2([y$1()], R.prototype, "sourceJSON", void 0), e$2([y$1({ json: { write: { ignoreOrigin: true } } })], R.prototype, "sublayers", void 0), e$2([o$1("sublayers", { layers: { type: [G] }, visibleLayers: { type: [N] } })], R.prototype, "writeSublayers", null), e$2([y$1({ type: ["show", "hide", "hide-children"] })], R.prototype, "listMode", void 0), e$2([y$1({ json: { read: false }, readOnly: true, value: "map-image" })], R.prototype, "type", void 0), e$2([y$1(f$1)], R.prototype, "url", void 0), R = e$2([i("esri.layers.MapImageLayer")], R);
var J = R;
export default J;
