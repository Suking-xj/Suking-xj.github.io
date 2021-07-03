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
import { a4 as n$2, dU as p, dy as n$3, dV as C, a5 as r$1, aq as a, dW as a$1, dX as p$1, dY as l, dZ as u, d_ as l$1, aa as s$1, bI as h$1, aj as U, dK as C$1, ae as e, af as y, d$ as v, e0 as f, dQ as e$1, ag as i, e1 as b } from "./vendor.74d5941c.js";
const h = n$2.getLogger("esri.core.workers.WorkerHandle");
class n$1 {
  constructor(e2, t2, r2, s2 = {}) {
    this._mainMethod = t2, this._listeners = [], this._promise = p(e2, __spreadProps(__spreadValues({}, s2), { scheduler: r2 })).then((e3) => {
      if (this._thread === void 0) {
        this._thread = e3, this._promise = null, s2.hasInitialize && this.broadcast({}, "initialize");
        for (const e4 of this._listeners)
          this._connectListener(e4);
      } else
        e3.close();
    }), this._promise.catch((t3) => h.error(`Failed to initialize ${e2} worker: ${t3}`));
  }
  on(t2, i2) {
    const o = { removed: false, eventName: t2, callback: i2, threadHandle: null };
    return this._listeners.push(o), this._connectListener(o), n$3(() => {
      o.removed = true, C(this._listeners, o), this._thread && r$1(o.threadHandle) && o.threadHandle.remove();
    });
  }
  destroy() {
    this._thread && (this._thread.close(), this._thread = null), this._promise = null;
  }
  invoke(e2, t2) {
    return this.invokeMethod(this._mainMethod, e2, t2);
  }
  invokeMethod(e2, t2, r2) {
    if (this._thread) {
      const s2 = this.getTransferList(t2, e2);
      return this._thread.invoke(e2, t2, { transferList: s2, signal: r2 });
    }
    return this._promise ? this._promise.then(() => (a(r2), this.invokeMethod(e2, t2, r2))) : Promise.reject(null);
  }
  broadcast(e2, t2) {
    return this._thread ? Promise.all(this._thread.broadcast(t2, e2)).then(() => {
    }) : this._promise ? this._promise.then(() => this.broadcast(e2, t2)) : Promise.reject();
  }
  get promise() {
    return this._promise;
  }
  _connectListener(e2) {
    this._thread && this._thread.on(e2.eventName, e2.callback).then((t2) => {
      e2.removed || (e2.threadHandle = t2);
    });
  }
}
class r extends n$1 {
  constructor(e2) {
    super("LercWorker", "_decode", e2, { strategy: "dedicated" }), this.scheduler = e2;
  }
  decode(e2, r2, t2) {
    return e2 && e2.byteLength !== 0 ? this.invoke({ buffer: e2, options: r2 }, t2) : Promise.resolve(null);
  }
  getTransferList(e2) {
    return [e2.buffer];
  }
}
const t = new Map();
function n(e2) {
  let n2 = t.get(e2);
  return n2 || (n2 = { instance: new r(e2), ref: 0 }, t.set(e2, n2)), ++n2.ref, n2.instance;
}
function s(e2) {
  if (e2 == null)
    return;
  const r2 = e2.scheduler, n2 = t.get(r2);
  n2 && --n2.ref <= 0 && (n2.instance.destroy(), t.delete(r2));
}
const w = n$2.getLogger("esri.layers.ElevationLayer");
let x = class extends a$1(p$1(l(u(l$1(b))))) {
  constructor(...e2) {
    super(...e2), this.copyright = null, this.heightModelInfo = null, this.path = null, this.opacity = 1, this.operationalLayerType = "ArcGISTiledElevationServiceLayer", this.sourceJSON = null, this.type = "elevation", this.url = null, this.version = null, this._lercDecoder = n();
  }
  normalizeCtorArgs(e2, r2) {
    return typeof e2 == "string" ? __spreadValues({ url: e2 }, r2) : e2;
  }
  destroy() {
    s(this._lercDecoder), this._lercDecoder = null;
  }
  set minScale(e2) {
    this.constructed && w.warn(`${this.declaredClass}.minScale support has been removed (since 4.5)`);
  }
  get minScale() {
  }
  set maxScale(e2) {
    this.constructed && w.warn(`${this.declaredClass}.maxScale support has been removed (since 4.5)`);
  }
  get maxScale() {
  }
  readVersion(e2, r2) {
    let t2 = r2.currentVersion;
    return t2 || (t2 = 9.3), t2;
  }
  load(e2) {
    const t2 = r$1(e2) ? e2.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Image Service"], supportsData: false, validateItem: (e3) => {
      for (let r2 = 0; r2 < e3.typeKeywords.length; r2++)
        if (e3.typeKeywords[r2].toLowerCase() === "elevation 3d layer")
          return true;
      throw new s$1("portal:invalid-layer-item-type", "Invalid layer item type '${type}', expected '${expectedType}' ", { type: "Image Service", expectedType: "Image Service Elevation 3D Layer" });
    } }, e2).then(() => this._fetchImageService(t2), () => this._fetchImageService(t2))), Promise.resolve(this);
  }
  fetchTile(e2, t2, o, i2) {
    const s2 = r$1((i2 = i2 || { signal: null }).signal) ? i2.signal : i2.signal = h$1().signal, a2 = { responseType: "array-buffer", signal: s2 }, l2 = { noDataValue: i2.noDataValue, returnFileInfo: true };
    return this.load().then(() => this._fetchTileAvailability(e2, t2, o, i2)).then(() => U(this.getTileUrl(e2, t2, o), a2)).then((e3) => this._lercDecoder.decode(e3.data, l2, s2)).then((e3) => ({ values: e3.pixelData, width: e3.width, height: e3.height, maxZError: e3.fileInfo.maxZError, noDataValue: e3.noDataValue, minValue: e3.minValue, maxValue: e3.maxValue }));
  }
  getTileUrl(e2, r2, t2) {
    const o = !this.tilemapCache && this.supportsBlankTile, i2 = C$1(__spreadProps(__spreadValues({}, this.parsedUrl.query), { blankTile: !o && null }));
    return `${this.parsedUrl.path}/tile/${e2}/${r2}/${t2}${i2 ? "?" + i2 : ""}`;
  }
  queryElevation(e2, r2) {
    return __async(this, null, function* () {
      const { ElevationQuery: t2 } = yield import("./ElevationQuery.b77e7933.js");
      a(r2);
      return new t2().query(this, e2, r2);
    });
  }
  createElevationSampler(e2, r2) {
    return __async(this, null, function* () {
      const { ElevationQuery: t2 } = yield import("./ElevationQuery.b77e7933.js");
      a(r2);
      return new t2().createSampler(this, e2, r2);
    });
  }
  _fetchTileAvailability(e2, r2, t2, o) {
    return this.tilemapCache ? this.tilemapCache.fetchAvailability(e2, r2, t2, o) : Promise.resolve("unknown");
  }
  _fetchImageService(e2) {
    return __async(this, null, function* () {
      if (this.sourceJSON)
        return this.sourceJSON;
      const r2 = { query: __spreadValues({ f: "json" }, this.parsedUrl.query), responseType: "json", signal: e2 }, t2 = yield U(this.parsedUrl.path, r2);
      t2.ssl && (this.url = this.url.replace(/^http:/i, "https:")), this.sourceJSON = t2.data, this.read(t2.data, { origin: "service", url: this.parsedUrl });
    });
  }
};
e([y({ json: { read: { source: "copyrightText" } } })], x.prototype, "copyright", void 0), e([y({ readOnly: true, type: v })], x.prototype, "heightModelInfo", void 0), e([y({ type: String, json: { origins: { "web-scene": { read: true, write: true } }, read: false } })], x.prototype, "path", void 0), e([y({ type: ["show", "hide"] })], x.prototype, "listMode", void 0), e([y({ json: { read: false, write: false, origins: { service: { read: false, write: false }, "portal-item": { read: false, write: false }, "web-document": { read: false, write: false } } } })], x.prototype, "minScale", null), e([y({ json: { read: false, write: false, origins: { service: { read: false, write: false }, "portal-item": { read: false, write: false }, "web-document": { read: false, write: false } } } })], x.prototype, "maxScale", null), e([y({ json: { read: false, write: false, origins: { "web-document": { read: false, write: false } } } })], x.prototype, "opacity", void 0), e([y({ type: ["ArcGISTiledElevationServiceLayer"] })], x.prototype, "operationalLayerType", void 0), e([y()], x.prototype, "sourceJSON", void 0), e([y({ json: { read: false }, value: "elevation", readOnly: true })], x.prototype, "type", void 0), e([y(f)], x.prototype, "url", void 0), e([y()], x.prototype, "version", void 0), e([e$1("version", ["currentVersion"])], x.prototype, "readVersion", null), x = e([i("esri.layers.ElevationLayer")], x);
var T = x;
export default T;
