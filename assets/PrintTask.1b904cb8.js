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
import { ae as e$2, af as y$1, bF as k$1, cr as M$1, ag as i$3, e4 as d$2, ac as u$2, dA as a$2, c9 as t$1, e5 as n, e6 as y$2, dR as g$2, d0 as L$1, dS as r, aj as U, al as v$1, am as m$3, dT as p$8, e7 as V$1, e8 as e$3, e9 as d$3, ea as v$2, eb as b$1, ec as R, bG as x$1, ed as U$1, dG as z$1, a5 as r$1, aO as c$4, c$ as V$2, dB as s$3, a9 as u$3, aa as s$4 } from "./vendor.74d5941c.js";
import { a as a$3 } from "./GPMessage.8bfedb6d.js";
let c$3 = class extends u$2 {
  constructor() {
    super(...arguments), this.outSpatialReference = null, this.processExtent = null, this.processSpatialReference = null, this.returnFeatureCollection = false, this.returnM = false, this.returnZ = false;
  }
};
e$2([y$1({ type: k$1 })], c$3.prototype, "outSpatialReference", void 0), e$2([y$1({ type: M$1 })], c$3.prototype, "processExtent", void 0), e$2([y$1({ type: k$1 })], c$3.prototype, "processSpatialReference", void 0), e$2([y$1({ nonNullable: true })], c$3.prototype, "returnFeatureCollection", void 0), e$2([y$1({ nonNullable: true })], c$3.prototype, "returnM", void 0), e$2([y$1({ nonNullable: true })], c$3.prototype, "returnZ", void 0), c$3 = e$2([i$3("esri/rest/geoprocessor/GPOptions")], c$3), c$3.from = d$2(c$3);
var l$1 = c$3;
let p$7 = class extends a$2 {
  constructor() {
    super(...arguments), this.extent = null, this.height = null, this.href = null, this.opacity = 1, this.rotation = 0, this.scale = null, this.visible = true, this.width = null;
  }
};
e$2([y$1({ type: M$1 })], p$7.prototype, "extent", void 0), e$2([y$1()], p$7.prototype, "height", void 0), e$2([y$1()], p$7.prototype, "href", void 0), e$2([y$1()], p$7.prototype, "opacity", void 0), e$2([y$1()], p$7.prototype, "rotation", void 0), e$2([y$1()], p$7.prototype, "scale", void 0), e$2([y$1()], p$7.prototype, "visible", void 0), e$2([y$1()], p$7.prototype, "width", void 0), p$7 = e$2([i$3("esri.layer.support.MapImage")], p$7);
var i$2 = p$7;
let e$1 = class extends a$2 {
  constructor(r2) {
    super(r2), this.itemId = null, this.url = null;
  }
};
e$2([y$1({ type: String, json: { read: { source: "itemID" }, write: { target: "itemID" } } })], e$1.prototype, "itemId", void 0), e$2([y$1({ type: String, json: { write: true } })], e$1.prototype, "url", void 0), e$1 = e$2([i$3("esri.tasks.support.DataFile")], e$1);
var p$6 = e$1;
const i$1 = new t$1({ esriMeters: "meters", esriFeet: "feet", esriKilometers: "kilometers", esriMiles: "miles", esriNauticalMiles: "nautical-miles", esriYards: "yards" }, { ignoreUnknown: false });
let p$5 = class extends a$2 {
  constructor(r2) {
    super(r2), this.distance = 0, this.units = null;
  }
};
e$2([y$1({ json: { write: true } })], p$5.prototype, "distance", void 0), e$2([y$1({ json: { read: i$1.read, write: i$1.write } })], p$5.prototype, "units", void 0), p$5 = e$2([i$3("esri/tasks/support/LinearUnit")], p$5);
var c$2 = p$5;
const u$1 = new t$1({ GPBoolean: "boolean", GPDataFile: "data-file", GPDate: "date", GPDouble: "double", GPFeatureRecordSetLayer: "feature-record-set-layer", GPField: "field", GPLinearUnit: "linear-unit", GPLong: "long", GPRasterData: "raster-data", GPRasterDataLayer: "raster-data-layer", GPRecordSet: "record-set", GPString: "string", "GPMultiValue:GPBoolean": "multi-value", "GPMultiValue:GPDataFile": "multi-value", "GPMultiValue:GPDate": "multi-value", "GPMultiValue:GPDouble": "multi-value", "GPMultiValue:GPFeatureRecordSetLayer": "multi-value", "GPMultiValue:GPField": "multi-value", "GPMultiValue:GPLinearUnit": "multi-value", "GPMultiValue:GPLong": "multi-value", "GPMultiValue:GPRasterData": "multi-value", "GPMultiValue:GPRasterDataLayer": "multi-value", "GPMultiValue:GPRecordSet": "multi-value", "GPMultiValue:GPString": "multi-value" });
let o$3 = class extends a$2 {
  constructor(e2) {
    super(e2), this.dataType = null, this.value = null;
  }
};
e$2([y$1({ json: { read: u$1.read, write: u$1.write } })], o$3.prototype, "dataType", void 0), e$2([y$1()], o$3.prototype, "value", void 0), o$3 = e$2([i$3("esri.tasks.support.ParameterValue")], o$3);
var i = o$3;
let e = class extends a$2 {
  constructor(r2) {
    super(r2), this.format = null, this.itemId = null, this.url = null;
  }
};
e$2([y$1()], e.prototype, "format", void 0), e$2([y$1({ json: { read: { source: "itemID" }, write: { target: "itemID" } } })], e.prototype, "itemId", void 0), e$2([y$1()], e.prototype, "url", void 0), e = e$2([i$3("esri/tasks/support/RasterData")], e);
var p$4 = e;
function m$2(t2, r$12, u2, s2, l2) {
  return __async(this, null, function* () {
    const n2 = {}, i2 = {}, c2 = [];
    return p$3(s2, c2, n2), L$1(c2).then((a2) => {
      const { outSpatialReference: c3, processExtent: m2, processSpatialReference: p2, returnFeatureCollection: f2, returnM: G2, returnZ: v2 } = u2, { path: S2 } = r(t2);
      for (const e2 in n2) {
        const t3 = n2[e2];
        i2[e2] = a2.slice(t3[0], t3[1]);
      }
      const k2 = c3 ? c3.wkid || c3 : null, y2 = p2 ? p2.wkid || p2 : null, D2 = r$12 === "execute" ? { returnFeatureCollection: f2 || void 0, returnM: G2 || void 0, returnZ: v2 || void 0 } : null, J = P$1(__spreadProps(__spreadValues(__spreadValues(__spreadValues({}, m2 ? { context: { extent: m2, outSR: k2, processSR: y2 } } : { "env:outSR": k2, "env:processSR": y2 }), s2), D2), { f: "json" }), null, i2), M2 = __spreadProps(__spreadValues({}, l2), { query: J });
      return U(`${S2}/${r$12}`, M2);
    });
  });
}
function p$3(e2, a2, t2) {
  for (const o2 in e2) {
    const u2 = e2[o2];
    if (u2 && typeof u2 == "object" && u2 instanceof g$2) {
      const { features: e3 } = u2;
      t2[o2] = [a2.length, a2.length + e3.length], e3.forEach((e4) => {
        a2.push(e4.geometry);
      });
    }
  }
}
function f$1(e2) {
  const a2 = e2.dataType, o2 = i.fromJSON(e2);
  switch (a2) {
    case "GPBoolean":
    case "GPDouble":
    case "GPLong":
    case "GPString":
      return o2;
    case "GPDate":
      o2.value = new Date(o2.value);
      break;
    case "GPDataFile":
      o2.value = p$6.fromJSON(o2.value);
      break;
    case "GPLinearUnit":
      o2.value = c$2.fromJSON(o2.value);
      break;
    case "GPFeatureRecordSetLayer":
    case "GPRecordSet": {
      const a3 = e2.value.url;
      o2.value = a3 ? p$6.fromJSON(o2.value) : g$2.fromJSON(o2.value);
      break;
    }
    case "GPRasterData":
    case "GPRasterDataLayer": {
      const a3 = e2.value.mapImage;
      o2.value = a3 ? i$2.fromJSON(a3) : p$4.fromJSON(o2.value);
      break;
    }
    case "GPField":
      o2.value = y$2.fromJSON(o2.value);
      break;
    case "GPMultiValue:GPBoolean":
    case "GPMultiValue:GPDouble":
    case "GPMultiValue:GPLong":
    case "GPMultiValue:GPString":
      return o2;
    case "GPMultiValue:GPDate": {
      const e3 = o2.value;
      o2.value = e3.map((e4) => new Date(e4));
      break;
    }
    case "GPMultiValue:GPDataFile":
      o2.value = o2.value.map((e3) => p$6.fromJSON(e3));
      break;
    case "GPMultiValue:GPLinearUnit":
      o2.value = o2.value.map((e3) => c$2.fromJSON(e3));
      break;
    case "GPMultiValue:GPFeatureRecordSetLayer":
    case "GPMultiValue:GPRecordSet":
      o2.value = o2.value.map((e3) => g$2.fromJSON(e3));
      break;
    case "GPMultiValue:GPRasterData":
    case "GPMultiValue:GPRasterDataLayer":
      o2.value = o2.value.map((e3) => e3 ? i$2.fromJSON(e3) : p$4.fromJSON(o2.value));
      break;
    case "GPMultiValue:GPField":
      o2.value = o2.value.map((e3) => y$2.fromJSON(e3));
  }
  return o2;
}
function P$1(e2, a2, t2) {
  for (const r2 in e2) {
    const a3 = e2[r2];
    Array.isArray(a3) ? e2[r2] = JSON.stringify(a3.map((e3) => P$1({ item: e3 }, true).item)) : a3 instanceof Date && (e2[r2] = a3.getTime());
  }
  return n(e2, a2, t2);
}
function o$2(o2, m2, a2, p2) {
  return __async(this, null, function* () {
    return a2 = l$1.from(a2), m$2(o2, "execute", a2, m2, p2).then((t2) => {
      const r2 = t2.data.results || [], o3 = t2.data.messages || [];
      return { results: r2.map(f$1), messages: o3.map((t3) => a$3.fromJSON(t3)) };
    });
  });
}
var j$1;
const m$1 = new t$1({ esriJobCancelled: "job-cancelled", esriJobCancelling: "job-cancelling", esriJobDeleted: "job-deleted", esriJobDeleting: "job-deleting", esriJobTimedOut: "job-timed-out", esriJobExecuting: "job-executing", esriJobFailed: "job-failed", esriJobNew: "job-new", esriJobSubmitted: "job-submitted", esriJobSucceeded: "job-succeeded", esriJobWaiting: "job-waiting" });
let h$1 = j$1 = class extends a$2 {
  constructor(e2) {
    super(e2), this.jobId = null, this.jobStatus = null, this.messages = null, this.requestOptions = null, this.sourceUrl = null, this._timer = null;
  }
  cancelJob(e2) {
    const { jobId: t2, sourceUrl: s2 } = this, { path: r$12 } = r(s2), o2 = __spreadProps(__spreadValues(__spreadValues({}, this.requestOptions), e2), { query: { f: "json" } });
    this._clearTimer();
    return U(`${r$12}/jobs/${t2}/cancel`, o2).then((e3) => {
      const t3 = j$1.fromJSON(e3.data);
      return this.messages = t3.messages, this.jobStatus = t3.jobStatus, this;
    });
  }
  destroy() {
    clearInterval(this._timer);
  }
  checkJobStatus(e2) {
    const { path: t2 } = r(this.sourceUrl), s2 = __spreadProps(__spreadValues(__spreadValues({}, this.requestOptions), e2), { query: { f: "json" } }), r$12 = `${t2}/jobs/${this.jobId}`;
    return U(r$12, s2).then(({ data: e3 }) => {
      const t3 = j$1.fromJSON(e3);
      return this.messages = t3.messages, this.jobStatus = t3.jobStatus, this;
    });
  }
  fetchResultData(e2, t2, s2) {
    t2 = l$1.from(t2);
    const { returnFeatureCollection: r$12, returnM: o2, returnZ: i2, outSpatialReference: a2 } = t2, { path: u2 } = r(this.sourceUrl), j2 = P$1({ returnFeatureCollection: r$12 || void 0, returnM: o2 || void 0, returnZ: i2 || void 0, outSR: a2, returnType: "data", f: "json" }, null), m2 = __spreadProps(__spreadValues(__spreadValues({}, this.requestOptions), s2), { query: j2 }), h2 = `${u2}/jobs/${this.jobId}/results/${e2}`;
    return U(h2, m2).then((e3) => f$1(e3.data));
  }
  fetchResultImage(e2, t2, s2) {
    const { path: r$12 } = r(this.sourceUrl), o2 = __spreadProps(__spreadValues({}, t2.toJSON()), { f: "json" }), i2 = P$1(o2), a2 = __spreadProps(__spreadValues(__spreadValues({}, this.requestOptions), s2), { query: i2 }), u2 = `${r$12}/jobs/${this.jobId}/results/${e2}`;
    return U(u2, a2).then((e3) => f$1(e3.data));
  }
  fetchResultMapImageLayer() {
    return __async(this, null, function* () {
      const { path: e2 } = r(this.sourceUrl), t2 = e2.indexOf("/GPServer/"), s2 = `${e2.substring(0, t2)}/MapServer/jobs/${this.jobId}`;
      return new (yield import("./MapImageLayer.df410532.js")).default({ url: s2 });
    });
  }
  waitForJobCompletion() {
    return __async(this, arguments, function* (e2 = {}) {
      const { interval: t2 = 1e3, signal: s2, statusCallback: r2 } = e2;
      return new Promise((e3, a2) => {
        v$1(s2, () => {
          this._clearTimer(), a2(m$3());
        }), this._clearTimer();
        const c2 = setInterval(() => {
          this._timer || a2(m$3()), this.checkJobStatus(this.requestOptions).then((t3) => {
            const { jobStatus: s3 } = t3;
            switch (this.jobStatus = s3, s3) {
              case "job-succeeded":
                this._clearTimer(), e3(this);
                break;
              case "job-submitted":
              case "job-executing":
              case "job-waiting":
              case "job-new":
                r2 && r2(this);
                break;
              case "job-cancelled":
              case "job-cancelling":
              case "job-deleted":
              case "job-deleting":
              case "job-timed-out":
              case "job-failed":
                this._clearTimer(), a2(this);
            }
          });
        }, t2);
        this._timer = c2;
      });
    });
  }
  _clearTimer() {
    this._timer && (clearInterval(this._timer), this._timer = null);
  }
};
e$2([y$1()], h$1.prototype, "jobId", void 0), e$2([y$1({ json: { read: m$1.read } })], h$1.prototype, "jobStatus", void 0), e$2([y$1({ type: [a$3] })], h$1.prototype, "messages", void 0), e$2([y$1()], h$1.prototype, "requestOptions", void 0), e$2([y$1({ json: { write: true } })], h$1.prototype, "sourceUrl", void 0), h$1 = j$1 = e$2([i$3("esri.tasks.support.JobInfo")], h$1);
var d$1 = h$1;
function s$2(s2, m2, n2, f2) {
  return __async(this, null, function* () {
    return n2 = l$1.from(n2), m$2(s2, "submitJob", n2, m2, f2).then((o2) => {
      const r2 = d$1.fromJSON(o2.data);
      return r2.sourceUrl = s2, r2;
    });
  });
}
let c$1 = class extends p$8 {
  constructor(e2) {
    super(e2), this._jobs = new Map(), this.outSpatialReference = null, this.processExtent = null, this.processSpatialReference = null, this.returnFeatureCollection = false, this.returnM = false, this.returnZ = false;
  }
  destroy() {
    this._jobs.forEach((e2) => e2.destroy()), this._jobs.clear();
  }
  cancelJob(e2, t2) {
    const r2 = this._jobs.get(e2), o2 = __spreadValues(__spreadValues({}, this.requestOptions), t2);
    return r2.cancelJob(o2);
  }
  checkJobStatus(e2, t2) {
    const r2 = this._jobs.get(e2), o2 = __spreadValues(__spreadValues({}, this.requestOptions), t2);
    return r2.checkJobStatus(o2);
  }
  execute(e2, t2) {
    const r2 = new l$1({ outSpatialReference: this.outSpatialReference, processExtent: this.processExtent, processSpatialReference: this.processSpatialReference, returnFeatureCollection: this.returnFeatureCollection, returnM: this.returnM, returnZ: this.returnZ }), o2 = __spreadValues(__spreadValues({}, this.requestOptions), t2);
    return o$2(this.url, e2, r2, o2);
  }
  getResultData(e2, t2, r2) {
    const o2 = this._jobs.get(e2), { returnFeatureCollection: s2, returnM: i2, returnZ: u2, outSpatialReference: p2 } = this, c2 = new l$1({ returnFeatureCollection: s2, returnM: i2, returnZ: u2, outSpatialReference: p2, url: this.url }), a2 = __spreadValues(__spreadValues({}, this.requestOptions), r2);
    return o2.fetchResultData(t2, c2, a2);
  }
  getResultImage(e2, t2, r2, o2) {
    const s2 = this._jobs.get(e2), i2 = __spreadValues(__spreadValues({}, this.requestOptions), o2);
    return s2.fetchResultImage(t2, r2, i2);
  }
  getResultMapImageLayer(e2) {
    return __async(this, null, function* () {
      return this._jobs.get(e2).fetchResultMapImageLayer();
    });
  }
  submitJob(e2, t2) {
    const r2 = new l$1({ outSpatialReference: this.outSpatialReference, processExtent: this.processExtent, processSpatialReference: this.processSpatialReference, returnFeatureCollection: this.returnFeatureCollection, returnM: this.returnM, returnZ: this.returnZ }), o2 = __spreadValues(__spreadValues({}, this.requestOptions), t2);
    return s$2(this.url, e2, r2, o2).then((e3) => (e3.sourceUrl = this.url, this._jobs.set(e3.jobId, e3), e3));
  }
  waitForJobCompletion(e2, t2 = {}) {
    return this._jobs.get(e2).waitForJobCompletion(t2);
  }
};
e$2([y$1({ type: k$1 })], c$1.prototype, "outSpatialReference", void 0), e$2([y$1({ type: M$1 })], c$1.prototype, "processExtent", void 0), e$2([y$1({ type: k$1 })], c$1.prototype, "processSpatialReference", void 0), e$2([y$1({ nonNullable: true })], c$1.prototype, "returnFeatureCollection", void 0), e$2([y$1({ nonNullable: true })], c$1.prototype, "returnM", void 0), e$2([y$1({ nonNullable: true })], c$1.prototype, "returnZ", void 0), c$1 = e$2([i$3("esri/tasks/Geoprocessor")], c$1);
var a$1 = c$1;
const p$2 = new t$1({ PDF: "pdf", PNG32: "png32", PNG8: "png8", JPG: "jpg", GIF: "gif", EPS: "eps", SVG: "svg", SVGZ: "svgz" });
p$2.fromJSON.bind(p$2);
const g$1 = p$2.toJSON.bind(p$2);
const t = new t$1({ MAP_ONLY: "map-only", "A3 Landscape": "a3-landscape", "A3 Portrait": "a3-portrait", "A4 Landscape": "a4-landscape", "A4 Portrait": "a4-portrait", "Letter ANSI A Landscape": "letter-ansi-a-landscape", "Letter ANSI A Portrait": "letter-ansi-a-portrait", "Tabloid ANSI B Landscape": "tabloid-ansi-b-landscape", "Tabloid ANSI B Portrait": "tabloid-ansi-b-portrait" });
t.fromJSON.bind(t);
const o$1 = t.toJSON.bind(t);
const o = "simple-marker", a = "picture-marker", u = "simple-line", l = "simple-fill", s$1 = "shield-label-symbol", y = "text";
function f(f2, p2) {
  const { graphic: c2, renderer: m2, symbol: g2 } = p2, d2 = g2.type;
  if (d2 === y || d2 === s$1 || !("visualVariables" in m2) || !m2.visualVariables)
    return;
  const b2 = m2.getVisualVariablesForType("size"), h2 = m2.getVisualVariablesForType("color"), w2 = m2.getVisualVariablesForType("opacity"), V2 = m2.getVisualVariablesForType("rotation"), T2 = b2 && b2[0], v2 = h2 && h2[0], G2 = w2 && w2[0], k2 = V2 && V2[0];
  if (T2) {
    const t2 = d2 === o ? g2.style : null, n2 = V$1(T2, c2, { shape: t2 });
    n2 != null && (d2 === o ? f2.size = e$3(n2) : d2 === a ? (f2.width = e$3(n2), f2.height = e$3(n2)) : d2 === u ? f2.width = e$3(n2) : f2.outline && (f2.outline.width = e$3(n2)));
  }
  if (v2) {
    const e2 = d$3(v2, c2);
    (e2 && d2 === o || d2 === u || d2 === l) && (f2.color = e2 ? e2.toJSON() : void 0);
  }
  if (G2) {
    const e2 = v$2(G2, c2);
    e2 != null && f2.color && (f2.color[3] = Math.round(255 * e2));
  }
  k2 && (f2.angle = -b$1(m2, c2));
}
function p$1() {
  return { layerDefinition: { name: "multipointLayer", geometryType: "esriGeometryMultipoint", drawingInfo: { renderer: null } }, featureSet: { geometryType: "esriGeometryMultipoint", features: [] } };
}
function c() {
  return { layerDefinition: { name: "polygonLayer", geometryType: "esriGeometryPolygon", drawingInfo: { renderer: null } }, featureSet: { geometryType: "esriGeometryPolygon", features: [] } };
}
function m() {
  return { layerDefinition: { name: "pointLayer", geometryType: "esriGeometryPoint", drawingInfo: { renderer: null } }, featureSet: { geometryType: "esriGeometryPoint", features: [] } };
}
function g() {
  return { layerDefinition: { name: "polylineLayer", geometryType: "esriGeometryPolyline", drawingInfo: { renderer: null } }, featureSet: { geometryType: "esriGeometryPolyline", features: [] } };
}
function d(e2, r2 = 15) {
  const t2 = e2.canvas.width, n2 = e2.canvas.height, i2 = e2.getImageData(0, 0, t2, n2).data;
  let o2, a2, u2, l2, s2, y2;
  e:
    for (a2 = n2; a2--; )
      for (o2 = t2; o2--; )
        if (i2[4 * (t2 * a2 + o2) + 3] > r2) {
          y2 = a2;
          break e;
        }
  if (!y2)
    return null;
  e:
    for (o2 = t2; o2--; )
      for (a2 = y2 + 1; a2--; )
        if (i2[4 * (t2 * a2 + o2) + 3] > r2) {
          s2 = o2;
          break e;
        }
  e:
    for (o2 = 0; o2 <= s2; ++o2)
      for (a2 = y2 + 1; a2--; )
        if (i2[4 * (t2 * a2 + o2) + 3] > r2) {
          u2 = o2;
          break e;
        }
  e:
    for (a2 = 0; a2 <= y2; ++a2)
      for (o2 = u2; o2 <= s2; ++o2)
        if (i2[4 * (t2 * a2 + o2) + 3] > r2) {
          l2 = a2;
          break e;
        }
  return { x: u2, y: l2, width: s2 - u2, height: y2 - l2 };
}
function b(e2, r2) {
  const t2 = e2.allLayerViews.items;
  if (r2 === e2.scale)
    return t2.filter((e3) => !e3.suspended);
  const n2 = new Array();
  for (const i2 of t2)
    k(i2.parent) && !n2.includes(i2.parent) || !i2.visible || r2 && "isVisibleAtScale" in i2 && !i2.isVisibleAtScale(r2) || n2.push(i2);
  return n2;
}
function h(e2) {
  return e2 && e2.type === "bing-maps";
}
function w(e2) {
  return e2 && e2.type === "csv";
}
function V(e2) {
  return e2 && e2.type === "feature";
}
function T(e2) {
  return e2 && e2.type === "geojson";
}
function v(e2) {
  return e2 && e2.type === "graphics";
}
function G(e2) {
  return e2 && e2.type === "group";
}
function k(e2) {
  return e2 && e2.declaredClass === "esri.views.2d.layers.GroupLayerView2D";
}
function S(e2) {
  return e2 && e2.type === "imagery";
}
function D(e2) {
  return e2 && e2.type === "kml";
}
function L(e2) {
  return e2 && e2.type === "map-image";
}
function P(e2) {
  return e2 && e2.type === "map-notes";
}
function I(e2) {
  return e2 && e2.type === "open-street-map";
}
function F(e2) {
  return e2 && e2.type === "stream";
}
function j(e2) {
  return e2 && e2.type === "tile";
}
function x(e2) {
  return e2 && e2.type === "vector-tile";
}
function A(e2) {
  return e2 && e2.type === "web-tile";
}
function M(e2) {
  return e2 && e2.type === "wms";
}
function z(e2) {
  return e2 && e2.type === "wmts";
}
let s = class extends u$2 {
  constructor(o2) {
    super(o2), this.attributionVisible = true, this.exportOptions = { width: 800, height: 1100, dpi: 96 }, this.forceFeatureAttributes = false, this.format = "png32", this.label = null, this.layout = "map-only", this.layoutOptions = null, this.outScale = 0, this.scalePreserved = true, this.showLabels = true;
  }
};
e$2([y$1()], s.prototype, "attributionVisible", void 0), e$2([y$1()], s.prototype, "exportOptions", void 0), e$2([y$1()], s.prototype, "forceFeatureAttributes", void 0), e$2([y$1()], s.prototype, "format", void 0), e$2([y$1()], s.prototype, "label", void 0), e$2([y$1()], s.prototype, "layout", void 0), e$2([y$1()], s.prototype, "layoutOptions", void 0), e$2([y$1()], s.prototype, "outScale", void 0), e$2([y$1()], s.prototype, "scalePreserved", void 0), e$2([y$1()], s.prototype, "showLabels", void 0), s = e$2([i$3("esri.tasks.support.PrintTemplate")], s);
var p = s;
const $ = { Feet: "ft", Kilometers: "km", Meters: "m", Miles: "mi" }, q = new t$1({ esriFeet: "Feet", esriKilometers: "Kilometers", esriMeters: "Meters", esriMiles: "Miles" }), B = new t$1({ esriExecutionTypeSynchronous: "sync", esriExecutionTypeAsynchronous: "async" }), K = new R({ returnGeometry: true });
function Q(e2) {
  return e2 && (e2.path || e2.contentType === "image/svg+xml" || e2.url && e2.url.endsWith(".svg"));
}
let H = class extends p$8 {
  constructor(...e2) {
    super(...e2), this._ssExtent = null, this._legendLayers = [], this._legendLayerNameMap = {}, this._gpServerUrl = null, this._cimVersion = null, this._is11xService = false, this._gpMetadata = null, this.updateDelay = 1e3;
  }
  get _geoprocessor() {
    return new a$1({ url: this.url });
  }
  get mode() {
    return this._gpMetadata && this._gpMetadata.executionType ? B.fromJSON(this._gpMetadata.executionType) : "sync";
  }
  execute(e2, t2) {
    let r2 = this.url;
    const i2 = r2.lastIndexOf("/GPServer/");
    return i2 > 0 && (r2 = r2.slice(0, i2 + 9)), Promise.resolve().then(() => this._gpServerUrl === r2 ? { data: this._gpMetadata } : (this._gpServerUrl = r2, U(r2, { query: { f: "json" } }))).then((t3) => (this._gpMetadata = t3.data, this._cimVersion = this._gpMetadata.cimVersion, this._is11xService = !!this._cimVersion, this._getGpPrintParams(e2))).then((e3) => {
      const r3 = (e4) => this.mode === "sync" ? e4.results && e4.results[0] && e4.results[0].value : this._geoprocessor.getResultData(e4.jobId, "Output_File", t2).then((e5) => e5.value);
      return this.mode === "async" ? this._geoprocessor.submitJob(e3, t2).then((e4) => this._geoprocessor.waitForJobCompletion(e4.jobId, { interval: this.updateDelay }).then(r3)) : this._geoprocessor.execute(e3, t2).then(r3);
    });
  }
  _createOperationalLayers(e2, t2) {
    return __async(this, null, function* () {
      const r2 = [], i2 = { layerView: null, printTemplate: t2, view: e2 };
      let a2 = 0;
      t2.scalePreserved && (a2 = t2.outScale || e2.scale);
      const s2 = b(e2, a2);
      for (const n2 of s2) {
        const e3 = n2.layer;
        if (!e3.loaded || G(e3))
          continue;
        let t3;
        i2.layerView = n2, t3 = h(e3) ? this._createBingMapsLayerJSON(e3) : w(e3) ? yield this._createCSVLayerJSON(e3, i2) : V(e3) ? yield this._createFeatureLayerJSON(e3, i2) : T(e3) ? yield this._createGeoJSONLayer(e3, i2) : v(e3) ? yield this._createGraphicsLayerJSON(e3, i2) : S(e3) ? this._createImageryLayerJSON(e3) : D(e3) ? yield this._createKMLLayerJSON(e3, i2) : L(e3) ? this._createMapImageLayerJSON(e3, i2) : P(e3) ? yield this._createMapNotesLayerJSON(i2) : I(e3) ? this._createOpenStreetMapLayerJSON() : F(e3) ? yield this._createStreamLayerJSON(e3, i2) : j(e3) ? this._createTileLayerJSON(e3) : x(e3) ? yield this._createVectorTileLayerJSON(e3, i2) : A(e3) ? this._createWebTileLayerJSON(e3) : M(e3) ? this._createWMSLayerJSON(e3) : z(e3) ? this._createWMTSLayerJSON(e3) : yield this._createScreenshotJSON(e3, i2), t3 && (Array.isArray(t3) ? r2.push(...t3) : (t3.id = e3.id, t3.title = this._legendLayerNameMap[e3.id] || e3.title, t3.opacity = e3.opacity, t3.minScale = e3.minScale || 0, t3.maxScale = e3.maxScale || 0, r2.push(t3)));
      }
      if (a2 && r2.forEach((e3) => {
        e3.minScale = 0, e3.maxScale = 0;
      }), e2.graphics && e2.graphics.length) {
        const i3 = yield this._createFeatureCollectionJSON(null, e2.graphics, t2);
        i3 && r2.push(i3);
      }
      return r2;
    });
  }
  _createBingMapsLayerJSON(e2) {
    return { culture: e2.culture, key: e2.key, type: "BingMaps" + (e2.style === "aerial" ? "Aerial" : e2.style === "hybrid" ? "Hybrid" : "Road") };
  }
  _createCSVLayerJSON(_0, _1) {
    return __async(this, arguments, function* (e2, { layerView: t2, printTemplate: r2 }) {
      let i2;
      if (this._legendLayers && this._legendLayers.push({ id: e2.id }), !this._is11xService) {
        const i3 = yield this._getGraphics(t2);
        return this._createFeatureCollectionJSON(e2, i3, r2);
      }
      return i2 = { type: "CSV" }, e2.write(i2, { origin: "web-map" }), delete i2.popupInfo, delete i2.layerType, i2.showLabels = r2.showLabels && e2.labelsVisible, i2;
    });
  }
  _createFeatureCollectionJSON(e2, t2, r2) {
    return __async(this, null, function* () {
      let i2;
      const a2 = c(), s2 = g(), n2 = m(), o2 = p$1(), c$12 = m();
      if (c$12.layerDefinition.name = "textLayer", delete c$12.layerDefinition.drawingInfo, e2) {
        if (e2.declaredClass === "esri.layers.FeatureLayer" || e2.declaredClass === "esri.layers.StreamLayer" ? a2.layerDefinition.name = s2.layerDefinition.name = n2.layerDefinition.name = o2.layerDefinition.name = this._legendLayerNameMap[e2.id] || e2.get("arcgisProps.title") || e2.title : e2.declaredClass === "esri.layers.GraphicsLayer" && (t2 = e2.graphics.items), e2.renderer) {
          const t3 = e2.renderer.toJSON();
          a2.layerDefinition.drawingInfo.renderer = t3, s2.layerDefinition.drawingInfo.renderer = t3, n2.layerDefinition.drawingInfo.renderer = t3, o2.layerDefinition.drawingInfo.renderer = t3;
        }
        if (r2.showLabels && e2.labelsVisible && typeof e2.write == "function") {
          var u2, y2;
          const t3 = (u2 = e2.write({}, { origin: "web-map" }).layerDefinition) == null || (y2 = u2.drawingInfo) == null ? void 0 : y2.labelingInfo;
          t3 && (i2 = true, a2.layerDefinition.drawingInfo.labelingInfo = t3, s2.layerDefinition.drawingInfo.labelingInfo = t3, n2.layerDefinition.drawingInfo.labelingInfo = t3, o2.layerDefinition.drawingInfo.labelingInfo = t3);
        }
      }
      let p2;
      e2 != null && e2.renderer || i2 || (delete a2.layerDefinition.drawingInfo, delete s2.layerDefinition.drawingInfo, delete n2.layerDefinition.drawingInfo, delete o2.layerDefinition.drawingInfo);
      const m$12 = e2 && e2.fields, d2 = e2 && e2.renderer;
      if (m$12 && d2 && typeof d2.collectRequiredFields == "function") {
        const e3 = new Set();
        yield d2.collectRequiredFields(e3, m$12), p2 = Array.from(e3);
      }
      if (m$12) {
        const e3 = m$12.map((e4) => e4.toJSON());
        a2.layerDefinition.fields = e3, s2.layerDefinition.fields = e3, n2.layerDefinition.fields = e3, o2.layerDefinition.fields = e3;
      }
      const h2 = t2 && t2.length;
      let f$12;
      for (let S2 = 0; S2 < h2; S2++) {
        const i3 = t2[S2] || t2.getItemAt(S2);
        if (i3.visible === false || !i3.geometry)
          continue;
        if (f$12 = i3.toJSON(), f$12.hasOwnProperty("popupTemplate") && delete f$12.popupTemplate, f$12.geometry && f$12.geometry.z && delete f$12.geometry.z, f$12.symbol && f$12.symbol.outline && f$12.symbol.outline.type === "esriCLS" && !this._is11xService)
          continue;
        !this._is11xService && f$12.symbol && f$12.symbol.outline && f$12.symbol.outline.color && f$12.symbol.outline.color[3] && (f$12.symbol.outline.color[3] = 255);
        const u3 = e2 && e2.renderer && ("valueExpression" in e2.renderer && e2.renderer.valueExpression || "hasVisualVariables" in e2.renderer && e2.renderer.hasVisualVariables());
        if (!f$12.symbol && e2 && e2.renderer && u3 && !this._is11xService) {
          const t3 = e2.renderer, r3 = yield t3.getSymbolAsync(i3);
          if (!r3)
            continue;
          f$12.symbol = r3.toJSON(), "hasVisualVariables" in t3 && t3.hasVisualVariables() && f(f$12.symbol, { renderer: t3, graphic: i3, symbol: r3 });
        }
        if (f$12.symbol && (f$12.symbol.angle || delete f$12.symbol.angle, Q(f$12.symbol) ? f$12.symbol = yield this._convertSvgToPictureMarkerSymbolJson(f$12.symbol) : f$12.symbol.text && delete f$12.attributes), (!r2 || !r2.forceFeatureAttributes) && p2 && p2.length) {
          const e3 = {};
          p2.forEach((t3) => {
            f$12.attributes && f$12.attributes.hasOwnProperty(t3) && (e3[t3] = f$12.attributes[t3]);
          }), f$12.attributes = e3;
        }
        i3.geometry.type === "polygon" ? a2.featureSet.features.push(f$12) : i3.geometry.type === "polyline" ? s2.featureSet.features.push(f$12) : i3.geometry.type === "point" ? f$12.symbol && f$12.symbol.text ? c$12.featureSet.features.push(f$12) : n2.featureSet.features.push(f$12) : i3.geometry.type === "multipoint" ? o2.featureSet.features.push(f$12) : i3.geometry.type === "extent" && (f$12.geometry = x$1.fromExtent(i3.geometry).toJSON(), a2.featureSet.features.push(f$12));
      }
      const g$12 = [a2, s2, o2, n2, c$12].filter((e3) => e3.featureSet.features.length > 0);
      for (const l2 of g$12) {
        const e3 = l2.featureSet.features.every((e4) => e4.symbol);
        !e3 || r2 && r2.forceFeatureAttributes || l2.featureSet.features.forEach((e4) => {
          delete e4.attributes;
        }), e3 && delete l2.layerDefinition.drawingInfo, l2.layerDefinition.drawingInfo && l2.layerDefinition.drawingInfo.renderer && (yield this._convertSvgRenderer(l2.layerDefinition.drawingInfo.renderer));
      }
      return g$12.length ? { featureCollection: { layers: g$12 }, showLabels: i2 } : null;
    });
  }
  _createFeatureLayerJSON(e2, t2) {
    return __async(this, null, function* () {
      var r2, i2;
      let a2;
      this._legendLayers && this._legendLayers.push({ id: e2.id });
      const s2 = e2.renderer;
      if (e2.featureReduction || s2 && s2.type === "dot-density" && (!this._is11xService || parseFloat(this._cimVersion) < 2.6))
        return this._createScreenshotJSON(e2, t2);
      const { layerView: n2, printTemplate: o2, view: l2 } = t2, c2 = s2 && ("valueExpression" in s2 && s2.valueExpression || "hasVisualVariables" in s2 && s2.hasVisualVariables()), u2 = ((r2 = e2.source) == null ? void 0 : r2.type) !== "feature-layer" && ((i2 = e2.source) == null ? void 0 : i2.type) !== "ogc-feature";
      if (!this._is11xService && c2 || e2.featureReduction || u2 || !s2 || "field" in s2 && s2.field != null && (typeof s2.field != "string" || !e2.getField(s2.field))) {
        const t3 = yield this._getGraphics(n2);
        a2 = yield this._createFeatureCollectionJSON(e2, t3, o2);
      } else {
        var y2, p2;
        if (a2 = { id: (m2 = e2.write()).id, title: m2.title, opacity: m2.opacity, minScale: m2.minScale, maxScale: m2.maxScale, url: m2.url, layerDefinition: m2.layerDefinition }, a2.showLabels = o2.showLabels && e2.labelsVisible, this._setURLandToken(a2, e2), (y2 = a2.layerDefinition) != null && (p2 = y2.drawingInfo) != null && p2.renderer && (delete a2.layerDefinition.minScale, delete a2.layerDefinition.maxScale, yield this._convertSvgRenderer(a2.layerDefinition.drawingInfo.renderer), "visualVariables" in s2 && s2.visualVariables && s2.visualVariables[0])) {
          const e3 = s2.visualVariables[0];
          if (e3.type === "size" && e3.maxSize && typeof e3.maxSize != "number" && e3.minSize && typeof e3.minSize != "number") {
            const t3 = U$1(e3, l2.scale);
            a2.layerDefinition.drawingInfo.renderer.visualVariables[0].minSize = t3.minSize, a2.layerDefinition.drawingInfo.renderer.visualVariables[0].maxSize = t3.maxSize;
          }
        }
      }
      var m2;
      return a2;
    });
  }
  _createGeoJSONLayer(_0, _1) {
    return __async(this, arguments, function* (e2, { layerView: t2, printTemplate: r2 }) {
      this._legendLayers && this._legendLayers.push({ id: e2.id });
      const i2 = yield this._getGraphics(t2);
      return this._createFeatureCollectionJSON(e2, i2, r2);
    });
  }
  _createGraphicsLayerJSON(_0, _1) {
    return __async(this, arguments, function* (e2, { printTemplate: t2 }) {
      return this._createFeatureCollectionJSON(e2, null, t2);
    });
  }
  _createImageryLayerJSON(e2) {
    this._legendLayers && this._legendLayers.push({ id: e2.id });
    const t2 = { bandIds: e2.bandIds, compressionQuality: e2.compressionQuality, format: e2.format, interpolation: e2.interpolation };
    if ((e2.mosaicRule || e2.definitionExpression) && (t2.mosaicRule = e2.exportImageServiceParameters.mosaicRule.toJSON()), e2.renderingRule || e2.renderer)
      if (this._is11xService)
        e2.renderingRule && (t2.renderingRule = e2.renderingRule.toJSON()), e2.renderer && (t2.layerDefinition = t2.layerDefinition || {}, t2.layerDefinition.drawingInfo = t2.layerDefinition.drawingInfo || {}, t2.layerDefinition.drawingInfo.renderer = e2.renderer.toJSON());
      else {
        const r2 = e2.exportImageServiceParameters.combineRendererWithRenderingRule();
        r2 && (t2.renderingRule = r2.toJSON());
      }
    return this._setURLandToken(t2, e2), t2;
  }
  _createKMLLayerJSON(e2, t2) {
    return __async(this, null, function* () {
      const r2 = t2.printTemplate;
      if (this._is11xService) {
        const t3 = { type: "kml" };
        return e2.write(t3, { origin: "web-map" }), delete t3.layerType, t3.url = z$1(e2.url), t3;
      }
      {
        const i2 = [], a2 = t2.layerView;
        a2.allVisibleMapImages.forEach((t3, r3) => {
          const a3 = { id: `${e2.id}_image${r3}`, type: "image", title: e2.id, minScale: e2.minScale || 0, maxScale: e2.maxScale || 0, opacity: e2.opacity, extent: t3.extent };
          t3.href.substr(0, 22) === "data:image/png;base64," ? a3.imageData = t3.href.substr(22) : a3.url = t3.href, i2.push(a3);
        });
        const s2 = [...a2.allVisiblePoints.items, ...a2.allVisiblePolylines.items, ...a2.allVisiblePolygons.items], n2 = __spreadValues({ id: e2.id }, yield this._createFeatureCollectionJSON(null, s2, r2));
        return i2.push(n2), i2;
      }
    });
  }
  _createMapImageLayerJSON(e2, { view: t2 }) {
    let r2;
    const i2 = { id: e2.id, subLayerIds: [] };
    let a2 = [];
    const s2 = t2.scale, n2 = (e3) => {
      const t3 = s2 === 0, r3 = e3.minScale === 0 || s2 <= e3.minScale, o2 = e3.maxScale === 0 || s2 >= e3.maxScale;
      if (e3.visible && (t3 || r3 && o2))
        if (e3.sublayers)
          e3.sublayers.forEach(n2);
        else {
          const t4 = e3.toExportImageJSON(), r4 = { id: e3.id, name: e3.title, layerDefinition: { drawingInfo: t4.drawingInfo, definitionExpression: t4.definitionExpression, source: t4.source } };
          a2.unshift(r4), i2.subLayerIds.push(e3.id);
        }
    };
    return e2.sublayers && e2.sublayers.forEach(n2), a2.length && (a2 = a2.map(({ id: e3, name: t3, layerDefinition: r3 }) => ({ id: e3, name: t3, layerDefinition: r3 })), r2 = { layers: a2, visibleLayers: e2.capabilities.exportMap.supportsDynamicLayers ? void 0 : i2.subLayerIds }, this._setURLandToken(r2, e2), this._legendLayers.push(i2)), r2;
  }
  _createMapNotesLayerJSON(_0) {
    return __async(this, arguments, function* ({ layerView: e2, printTemplate: r2 }) {
      const i2 = [], a2 = e2.layer;
      if (r$1(a2.featureCollections))
        for (const t2 of a2.featureCollections) {
          const e3 = yield this._createFeatureCollectionJSON(t2, t2.source, r2);
          e3 && i2.push(...e3.featureCollection.layers);
        }
      else if (r$1(a2.sublayers))
        for (const t2 of a2.sublayers) {
          const e3 = yield this._createFeatureCollectionJSON(null, t2.graphics, r2);
          e3 && i2.push(...e3.featureCollection.layers);
        }
      return { featureCollection: { layers: i2 } };
    });
  }
  _createOpenStreetMapLayerJSON() {
    return { type: "OpenStreetMap" };
  }
  _createScreenshotJSON(_0, _1) {
    return __async(this, arguments, function* (e2, { printTemplate: t2, view: r2 }) {
      const i2 = { type: "image" }, a2 = { format: "png", ignoreBackground: true, layers: [e2], rotation: 0 }, s2 = this._ssExtent || r2.extent.clone();
      let n2 = 96, l2 = true, u2 = true;
      if (t2.exportOptions) {
        const e3 = t2.exportOptions;
        e3.dpi > 0 && (n2 = e3.dpi), e3.width > 0 && (l2 = e3.width % 2 == r2.width % 2), e3.height > 0 && (u2 = e3.height % 2 == r2.height % 2);
      }
      if (t2.layout === "map-only" && t2.scalePreserved && (!t2.outScale || t2.outScale === r2.scale) && n2 === 96 && (!l2 || !u2) && (a2.area = { x: 0, y: 0, width: r2.width, height: r2.height }, l2 || (a2.area.width -= 1), u2 || (a2.area.height -= 1), !this._ssExtent)) {
        const e3 = r2.toMap(c$4(a2.area.width, a2.area.height));
        s2.ymin = e3.y, s2.xmax = e3.x, this._ssExtent = s2;
      }
      i2.extent = s2.clone()._normalize(true).toJSON();
      const y2 = yield r2.takeScreenshot(a2), p2 = V$2(y2.dataUrl);
      return i2.imageData = p2.data, i2;
    });
  }
  _createStreamLayerJSON(_0, _1) {
    return __async(this, arguments, function* (e2, { layerView: t2, printTemplate: r2 }) {
      this._legendLayers && this._legendLayers.push({ id: e2.id });
      const i2 = yield this._getGraphics(t2);
      return this._createFeatureCollectionJSON(e2, i2, r2);
    });
  }
  _createTileLayerJSON(e2) {
    const t2 = { customParameters: e2.customParameters };
    return this._setURLandToken(t2, e2), t2;
  }
  _createVectorTileLayerJSON(e2, t2) {
    return __async(this, null, function* () {
      if (this._is11xService && e2.serviceUrl && e2.styleUrl) {
        const t3 = s$3 && s$3.findCredential(e2.styleUrl), r2 = s$3 && s$3.findCredential(e2.serviceUrl);
        if (!t3 && !r2 || this._cimVersion !== "2.1.0") {
          const i2 = { type: "VectorTileLayer" };
          return i2.styleUrl = z$1(e2.styleUrl), t3 && (i2.token = t3.token), r2 && r2.token !== i2.token && (i2.additionalTokens = [{ url: e2.serviceUrl, token: r2.token }]), i2;
        }
      }
      return this._createScreenshotJSON(e2, t2);
    });
  }
  _createWebTileLayerJSON(e2) {
    const t2 = { type: "WebTiledLayer", urlTemplate: e2.urlTemplate.replace(/\${/g, "{"), credits: e2.copyright };
    return e2.subDomains && e2.subDomains.length > 0 && (t2.subDomains = e2.subDomains), t2;
  }
  _createWMSLayerJSON(e2) {
    let t2;
    const r2 = [], i2 = (e3) => {
      e3.visible && (e3.sublayers ? e3.sublayers.forEach(i2) : e3.name && r2.unshift(e3.name));
    };
    return e2.sublayers && e2.sublayers.forEach(i2), r2.length && (t2 = { type: "wms", customLayerParameters: e2.customLayerParameters, customParameters: e2.customParameters, transparentBackground: e2.imageTransparency, visibleLayers: r2, url: z$1(e2.url), version: e2.version }), t2;
  }
  _createWMTSLayerJSON(e2) {
    const t2 = e2.activeLayer;
    return { type: "wmts", customLayerParameters: e2.customLayerParameters, customParameters: e2.customParameters, format: t2.imageFormat, layer: t2.id, style: t2.styleId, tileMatrixSet: t2.tileMatrixSetId, url: z$1(e2.url) };
  }
  _setURLandToken(e2, t2) {
    var r2;
    if (!t2.url)
      return;
    e2.url = z$1(e2.url || t2.url);
    const i2 = (r2 = s$3) == null ? void 0 : r2.findCredential(t2.url);
    i2 && (e2.token = i2.token);
  }
  _convertSvgToPictureMarkerSymbolJson(e2) {
    return __async(this, null, function* () {
      this._canvas || (this._canvas = document.createElement("canvas"));
      const t2 = 1024;
      this._canvas.width = t2, this._canvas.height = t2;
      const r2 = this._canvas.getContext("2d");
      let i2, a2;
      if (e2.path) {
        var s2;
        const n2 = new Path2D(e2.path);
        n2.closePath(), r2.fillStyle = Array.isArray(e2.color) ? `rgba(${e2.color[0]},${e2.color[1]},${e2.color[2]},${e2.color[3] / 255})` : "rgb(0,0,0)", r2.fill(n2);
        const o2 = d(r2);
        if (!o2)
          return null;
        r2.clearRect(0, 0, t2, t2);
        const l2 = u$3(e2.size) / Math.max(o2.width, o2.height);
        r2.scale(l2, l2);
        const c2 = t2 / l2, y2 = c2 / 2 - o2.width / 2 - o2.x, p2 = c2 / 2 - o2.height / 2 - o2.y;
        if (r2.translate(y2, p2), Array.isArray(e2.color) && r2.fill(n2), (s2 = e2.outline) != null && s2.width && Array.isArray(e2.outline.color)) {
          const t3 = e2.outline;
          r2.lineWidth = u$3(t3.width) / l2, r2.lineJoin = "round", r2.strokeStyle = `rgba(${t3.color[0]},${t3.color[1]},${t3.color[2]},${t3.color[3] / 255})`, r2.stroke(n2), o2.width += r2.lineWidth, o2.height += r2.lineWidth;
        }
        o2.width *= l2, o2.height *= l2;
        const m2 = r2.getImageData(t2 / 2 - o2.width / 2, t2 / 2 - o2.height / 2, Math.ceil(o2.width), Math.ceil(o2.height));
        i2 = m2.width, a2 = m2.height, r2.canvas.width = i2, r2.canvas.height = a2, r2.putImageData(m2, 0, 0);
      } else {
        const t3 = e2.contentType === "image/svg+xml" ? "data:image/svg+xml;base64," + e2.imageData : e2.url, s3 = (yield U(t3, { responseType: "image" })).data;
        i2 = u$3(e2.width), a2 = u$3(e2.height), r2.canvas.width = i2, r2.canvas.height = a2, r2.drawImage(s3, 0, 0, r2.canvas.width, r2.canvas.height);
      }
      return { type: "esriPMS", imageData: r2.canvas.toDataURL("image/png").substr(22), angle: e2.angle, contentType: "image/png", height: e$3(a2), width: e$3(i2), xoffset: e2.xoffset, yoffset: e2.yoffset };
    });
  }
  _convertSvgRenderer(e2) {
    return __async(this, null, function* () {
      const t2 = e2.type;
      if (t2 === "simple" && Q(e2.symbol))
        e2.symbol = yield this._convertSvgToPictureMarkerSymbolJson(e2.symbol);
      else if (t2 === "uniqueValue" || t2 === "classBreaks") {
        Q(e2.defaultSymbol) && (e2.defaultSymbol = yield this._convertSvgToPictureMarkerSymbolJson(e2.defaultSymbol));
        const r2 = e2[t2 === "uniqueValue" ? "uniqueValueInfos" : "classBreakInfos"];
        if (r2)
          for (const e3 of r2)
            Q(e3.symbol) && (e3.symbol = yield this._convertSvgToPictureMarkerSymbolJson(e3.symbol));
      }
    });
  }
  _getGraphics(e2) {
    return e2.queryFeatures(K).then((e3) => e3.features);
  }
  _getPrintDefinition(e2, t2) {
    return __async(this, null, function* () {
      const r2 = e2.view;
      let i2 = r2.spatialReference;
      const a2 = { operationalLayers: yield this._createOperationalLayers(r2, t2) };
      let s2 = this._ssExtent || e2.extent || r2.extent;
      return i2 && i2.isWrappable && (s2 = s2.clone()._normalize(true), i2 = s2.spatialReference), a2.mapOptions = { extent: s2 && s2.toJSON(), spatialReference: i2 && i2.toJSON(), showAttribution: t2.attributionVisible }, this._ssExtent = null, r2.background && (a2.background = r2.background.toJSON()), r2.rotation && (a2.mapOptions.rotation = -r2.rotation), t2.scalePreserved && (a2.mapOptions.scale = t2.outScale || r2.scale), a2;
    });
  }
  _getGpPrintParams(e2) {
    return __async(this, null, function* () {
      const t2 = e2.template || new p();
      t2.showLabels == null && (t2.showLabels = true);
      const r2 = t2.exportOptions;
      let i2;
      const a2 = o$1(t2.layout);
      if (r2) {
        if (i2 = { dpi: r2.dpi }, a2.toLowerCase() === "map_only" || a2 === "") {
          const e3 = r2.width, t3 = r2.height;
          i2.outputSize = [e3, t3];
        }
      }
      const n2 = t2.layoutOptions;
      let o2;
      if (n2) {
        let e3, t3;
        n2.scalebarUnit === "Miles" || n2.scalebarUnit === "Kilometers" ? (e3 = "Kilometers", t3 = "Miles") : n2.scalebarUnit !== "Meters" && n2.scalebarUnit !== "Feet" || (e3 = "Meters", t3 = "Feet"), o2 = { titleText: n2.titleText, authorText: n2.authorText, copyrightText: n2.copyrightText, customTextElements: n2.customTextElements, scaleBarOptions: { metricUnit: q.toJSON(e3), metricLabel: $[e3], nonMetricUnit: q.toJSON(t3), nonMetricLabel: $[t3] } };
      }
      let l2 = null;
      n2 && n2.legendLayers && (l2 = n2.legendLayers.map((e3) => {
        this._legendLayerNameMap[e3.layerId] = e3.title;
        const t3 = { id: e3.layerId };
        return e3.subLayerIds && (t3.subLayerIds = e3.subLayerIds), t3;
      }));
      const c2 = yield this._getPrintDefinition(e2, t2);
      if (c2.operationalLayers) {
        const e3 = new RegExp("[\\u4E00-\\u9FFF\\u0E00-\\u0E7F\\u0900-\\u097F\\u3040-\\u309F\\u30A0-\\u30FF\\u31F0-\\u31FF]"), t3 = /[\u0600-\u06FF]/, r3 = (r4) => {
          const i4 = r4.text, a3 = r4.font, s2 = a3 && a3.family && a3.family.toLowerCase();
          i4 && a3 && (s2 === "arial" || s2 === "arial unicode ms") && (a3.family = e3.test(i4) ? "Arial Unicode MS" : "Arial", a3.style !== "normal" && t3.test(i4) && (a3.family = "Arial Unicode MS"));
        }, i3 = () => {
          throw new s$4("print-task:cim-symbol-unsupported", "CIMSymbol is not supported by a print service published from ArcMap");
        };
        c2.operationalLayers.forEach((e4) => {
          var t4, a3, s2;
          (t4 = e4.featureCollection) != null && t4.layers ? e4.featureCollection.layers.forEach((e5) => {
            var t5, a4, s3, n3;
            if ((t5 = e5.layerDefinition) != null && (a4 = t5.drawingInfo) != null && (s3 = a4.renderer) != null && s3.symbol) {
              const t6 = e5.layerDefinition.drawingInfo.renderer;
              t6.symbol.type === "esriTS" ? r3(t6.symbol) : t6.symbol.type !== "CIMSymbolReference" || this._is11xService || i3();
            }
            (n3 = e5.featureSet) != null && n3.features && e5.featureSet.features.forEach((e6) => {
              e6.symbol && (e6.symbol.type === "esriTS" ? r3(e6.symbol) : e6.symbol.type !== "CIMSymbolReference" || this._is11xService || i3());
            });
          }) : !this._is11xService && (a3 = e4.layerDefinition) != null && (s2 = a3.drawingInfo) != null && s2.renderer && JSON.stringify(e4.layerDefinition.drawingInfo.renderer).includes('"type":"CIMSymbolReference"') && i3();
        });
      }
      e2.outSpatialReference && (c2.mapOptions.spatialReference = e2.outSpatialReference.toJSON()), Object.assign(c2, { exportOptions: i2, layoutOptions: o2 || {} }), Object.assign(c2.layoutOptions, { legendOptions: { operationalLayers: l2 != null ? l2 : this._legendLayers.slice() } }), this._legendLayers.length = 0;
      const u2 = { Web_Map_as_JSON: JSON.stringify(c2), Format: g$1(t2.format), Layout_Template: a2 };
      return e2.extraParameters && Object.assign(u2, e2.extraParameters), u2;
    });
  }
};
e$2([y$1()], H.prototype, "_geoprocessor", null), e$2([y$1()], H.prototype, "_gpMetadata", void 0), e$2([y$1({ readOnly: true })], H.prototype, "mode", null), e$2([y$1()], H.prototype, "updateDelay", void 0), H = e$2([i$3("esri.tasks.PrintTask")], H);
var X = H;
export default X;
