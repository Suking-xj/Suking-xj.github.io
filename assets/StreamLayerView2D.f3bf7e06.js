var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
import { ae as e, af as y, ag as i, aa as s, dR as g, a0 as t, a5 as r } from "./vendor.74d5941c.js";
import { f as e$1 } from "./schemaUtils.ab77d03d.js";
import Y from "./FeatureLayerView2D.1ef9f875.js";
import "./MD5.1ef35834.js";
import "./Utils.3f1577e5.js";
import "./FramebufferObject.18518335.js";
import "./_commonjsHelpers.f2a458db.js";
import "./MaterialKey.3bc4aaea.js";
import "./visualVariablesUtils.cb58e4df.js";
import "./definitions.6737c10c.js";
import "./CIMSymbolHelper.6546a069.js";
import "./Rect.b51904ac.js";
import "./BidiEngine.9b392b22.js";
import "./LayerView2D.06dde519.js";
import "./Container.d2c27c9d.js";
import "./mat4f32.a5cabe00.js";
import "./clickToleranceUtils.1b8c692d.js";
import "./drapedUtils.72df2b08.js";
import "./popupUtils.017b06d1.js";
function p(e2, o) {
  if (t(e2) && t(o))
    return null;
  const i2 = {};
  return r(o) && (i2.geometry = o.toJSON()), r(e2) && (i2.where = e2), i2;
}
let l = class extends Y {
  constructor() {
    super(...arguments), this._enabledDataReceived = false, this.errorString = null, this.connectionStatus = "disconnected";
  }
  initialize() {
    this.handles.add([this.layer.watch("purgeOptions", () => this._update())]);
  }
  destroy() {
    this.connectionStatus = "disconnected";
  }
  get connectionError() {
    if (this.errorString)
      return new s("stream-controller", this.errorString);
  }
  on(e2, t2) {
    e2 === "data-received" && (this._enabledDataReceived = true, this._proxy.enableEvent("data-received", true));
    const r2 = super.on(e2, t2), o = this;
    return { remove() {
      r2.remove(), e2 === "data-received" && (o._proxy.closed || o.hasEventListener("data-received") || o._proxy.enableEvent("data-received", false));
    } };
  }
  queryLatestObservations(e2, t2) {
    if (!(this.layer.timeInfo.endField || this.layer.timeInfo.startField))
      throw new s("streamlayer-no-timeField", "queryLatestObservation can only be used with services that define a TrackIdField");
    return this._proxy.queryLatestObservations(this._cleanUpQuery(e2), t2).then((e3) => {
      const t3 = g.fromJSON(e3);
      return t3.features.forEach((e4) => {
        e4.layer = this.layer, e4.sourceLayer = this.layer;
      }), t3;
    });
  }
  _createClientOptions() {
    return __spreadProps(__spreadValues({}, super._createClientOptions()), { setProperty: (e2) => {
      this.set(e2.propertyName, e2.value);
    } });
  }
  _createTileRendererHash(e2) {
    const t2 = `${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(p(this.layer.definitionExpression, this.layer.geometryDefinition))})`;
    return super._createTileRendererHash(e2) + t2;
  }
  _createServiceOptions() {
    return __async(this, null, function* () {
      const e2 = this.layer, { objectIdField: t2 } = e2, r2 = e2.fields.map((e3) => e3.toJSON()), o = e$1(e2.geometryType), i2 = e2.timeInfo && e2.timeInfo.toJSON() || null, s2 = e2.spatialReference ? e2.spatialReference.toJSON() : null;
      return { type: "stream", fields: r2, geometryType: o, objectIdField: t2, timeInfo: i2, source: this.layer.parsedUrl, serviceFilter: p(this.layer.definitionExpression, this.layer.geometryDefinition), purgeOptions: this.layer.purgeOptions.toJSON(), enableDataReceived: this._enabledDataReceived, spatialReference: s2, maxReconnectionAttempts: this.layer.maxReconnectionAttempts, maxReconnectionInterval: this.layer.maxReconnectionInterval, updateInterval: this.layer.updateInterval };
    });
  }
};
e([y()], l.prototype, "errorString", void 0), e([y({ readOnly: true })], l.prototype, "connectionError", null), e([y()], l.prototype, "connectionStatus", void 0), l = e([i("esri.views.2d.layers.StreamLayerView2D")], l);
var d = l;
export default d;
