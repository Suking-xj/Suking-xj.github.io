var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a2, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a2, prop, b[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b) => __defProps(a2, __getOwnPropDescs(b));
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
import { ae as e$1, af as y, ag as i$1, d1 as n, c9 as t, c4 as o, es as i$2, cW as p$2, d5 as d$1, dA as a, ec as R$1, bT as y$1, a4 as n$1, et as w, aE as d$2, eu as C, ev as y$2, ew as I, a5 as r, ex as a$1, dd as A, ey as U, ez as v, eA as L, eB as V, eC as g, eD as F, aa as s$2, eE as ce, eF as m$1, bN as B$1, bI as h$1, eG as y$3, dU as p$3, ah as j$1, cd as e$2, cu as l$3, eh as i$4, eH as z, eI as $$1, an as g$1, aw as A$1, ay as c$2, c_ as L$1, dR as g$2, cr as M, eJ as k, eK as M$1, eL as w$1, ai as t$1, a0 as t$2, bC as r$1, eM as C$1 } from "./vendor.74d5941c.js";
import { N } from "./definitions.6737c10c.js";
import { l as l$4, d as d$5 } from "./LayerView2D.06dde519.js";
import { s as s$3 } from "./clickToleranceUtils.1b8c692d.js";
import { a as a$2 } from "./drapedUtils.72df2b08.js";
import { f as e$3, u as u$3, g as d$4, h as f, m as m$2, i as c$3, k as k$1 } from "./schemaUtils.ab77d03d.js";
import { u as u$2 } from "./Container.d2c27c9d.js";
import { d as d$3, i as i$3 } from "./popupUtils.017b06d1.js";
import "./MD5.1ef35834.js";
import "./Utils.3f1577e5.js";
import "./FramebufferObject.18518335.js";
import "./_commonjsHelpers.f2a458db.js";
import "./MaterialKey.3bc4aaea.js";
import "./visualVariablesUtils.cb58e4df.js";
import "./CIMSymbolHelper.6546a069.js";
import "./Rect.b51904ac.js";
import "./BidiEngine.9b392b22.js";
import "./mat4f32.a5cabe00.js";
var p$1;
let s$1 = p$1 = class extends n {
  constructor() {
    super(...arguments), this.isAggregate = true;
  }
  getEffectivePopupTemplate(e2 = false) {
    if (this.popupTemplate)
      return this.popupTemplate;
    const r2 = this.sourceLayer && this.sourceLayer.featureReduction;
    return r2 && "popupTemplate" in r2 && r2.popupEnabled ? r2.popupTemplate : null;
  }
  getObjectId() {
    return this.objectId;
  }
  clone() {
    return new p$1(__spreadValues({ objectId: this.objectId }, this.cloneProperties()));
  }
};
e$1([y({ type: Boolean })], s$1.prototype, "isAggregate", void 0), e$1([y({ type: Number, json: { read: true } })], s$1.prototype, "objectId", void 0), s$1 = p$1 = e$1([i$1("esri.AggregateGraphic")], s$1);
var c$1 = s$1;
var d;
const m = new t({ esriSpatialRelIntersects: "intersects", esriSpatialRelContains: "contains", esriSpatialRelCrosses: "crosses", esriSpatialRelDisjoint: "disjoint", esriSpatialRelEnvelopeIntersects: "envelope-intersects", esriSpatialRelIndexIntersects: "index-intersects", esriSpatialRelOverlaps: "overlaps", esriSpatialRelTouches: "touches", esriSpatialRelWithin: "within", esriSpatialRelRelation: "relation" }), u$1 = new t({ esriSRUnit_Meter: "meters", esriSRUnit_Kilometer: "kilometers", esriSRUnit_Foot: "feet", esriSRUnit_StatuteMile: "miles", esriSRUnit_NauticalMile: "nautical-miles", esriSRUnit_USNauticalMile: "us-nautical-miles" });
let h = d = class extends a {
  constructor(e2) {
    super(e2), this.where = null, this.geometry = null, this.spatialRelationship = "intersects", this.hiddenIds = new Set(), this.distance = void 0, this.objectIds = null, this.units = null, this.timeExtent = null, this.enabled = false;
  }
  writeWhere(e2, t2) {
    t2.where = e2 || "1=1";
  }
  enable() {
    this._set("enabled", true);
  }
  createQuery(e2 = {}) {
    const { where: r2, geometry: i2, spatialRelationship: s2, timeExtent: o2, objectIds: n2, units: a2, distance: p2 } = this;
    return new R$1(__spreadValues({ geometry: y$1(i2), objectIds: y$1(n2), spatialRelationship: s2, timeExtent: y$1(o2), where: r2, units: a2, distance: p2 }, e2));
  }
  clone() {
    const { where: e2, geometry: r2, spatialRelationship: i2, hiddenIds: s2, timeExtent: o2, objectIds: n2, units: a2, distance: p2 } = this, l2 = new Set();
    return s2.forEach((e3) => l2.add(e3)), new d({ geometry: y$1(r2), hiddenIds: l2, objectIds: y$1(n2), spatialRelationship: i2, timeExtent: y$1(o2), where: e2, units: a2, distance: p2 });
  }
};
e$1([y({ type: String })], h.prototype, "where", void 0), e$1([o("where")], h.prototype, "writeWhere", null), e$1([y({ types: i$2, json: { read: p$2, write: true } })], h.prototype, "geometry", void 0), e$1([y({ type: String, json: { read: { source: "spatialRel", reader: m.read }, write: { target: "spatialRel", writer: m.write } } })], h.prototype, "spatialRelationship", void 0), e$1([y({ json: { write: (e2, t2, r2) => t2[r2] = Array.from(e2), read: (e2) => new Set(e2) } })], h.prototype, "hiddenIds", void 0), e$1([y({ type: Number, json: { write: { overridePolicy: (e2) => ({ enabled: e2 > 0 }) } } })], h.prototype, "distance", void 0), e$1([y({ type: [Number], json: { write: true } })], h.prototype, "objectIds", void 0), e$1([y({ type: String, json: { read: u$1.read, write: { writer: u$1.write, overridePolicy(e2) {
  return { enabled: e2 && this.distance > 0 };
} } } })], h.prototype, "units", void 0), e$1([y({ type: d$1, json: { write: true } })], h.prototype, "timeExtent", void 0), e$1([y({ readOnly: true })], h.prototype, "enabled", void 0), h = d = e$1([i$1("esri.views.layers.support.FeatureFilter")], h);
var j = h;
var i;
let c = i = class extends a {
  constructor() {
    super(...arguments), this.filter = null, this.includedEffect = null, this.excludedEffect = null, this.excludedLabelsVisible = false;
  }
  clone() {
    return new i({ filter: this.filter && this.filter.clone(), includedEffect: this.includedEffect, excludedEffect: this.excludedEffect, excludedLabelsVisible: this.excludedLabelsVisible });
  }
};
e$1([y({ type: j, json: { write: true } })], c.prototype, "filter", void 0), e$1([y({ json: { write: true } })], c.prototype, "includedEffect", void 0), e$1([y({ json: { write: true } })], c.prototype, "excludedEffect", void 0), e$1([y({ type: Boolean, json: { write: true } })], c.prototype, "excludedLabelsVisible", void 0), c = i = e$1([i$1("esri.views.layers.support.FeatureEffect")], c);
var l$2 = c;
const q = n$1.getLogger("esri.views.layers.FeatureLayerView"), R = (r$12) => {
  let R2 = class extends r$12 {
    constructor(...e2) {
      super(...e2), this._updatingRequiredFieldsPromise = null, this.effect = null, this.filter = null, this.timeExtent = null, this.layer = null, this.requiredFields = [], this.view = null;
    }
    initialize() {
      d$2(this, ["layer.renderer", "layer.labelingInfo", "layer.elevationInfo.featureExpressionInfo", "layer.displayField", "filter", "effect", "layer.timeInfo", "layer.floorInfo", "timeExtent"], () => this._handleRequiredFieldsChange(), true), C(this, "view.floors", "change", () => this._handleRequiredFieldsChange());
    }
    get availableFields() {
      const { layer: e2, layer: { fields: t2 }, requiredFields: r2 } = this;
      return "outFields" in e2 && e2.outFields ? y$2(t2, [...I(t2, e2.outFields), ...r2]) : y$2(t2, r2);
    }
    get maximumNumberOfFeatures() {
      return 0;
    }
    set maximumNumberOfFeatures(e2) {
      q.error("#maximumNumberOfFeatures=", "Setting maximum number of features is not supported");
    }
    get maximumNumberOfFeaturesExceeded() {
      return false;
    }
    highlight(e2) {
      throw new Error("missing implementation");
    }
    createQuery() {
      const e2 = { outFields: ["*"], returnGeometry: true, outSpatialReference: this.view.spatialReference }, r$13 = r(this.filter) ? this.filter.createQuery(e2) : new R$1(e2);
      return r(this.timeExtent) && (r$13.timeExtent = r(r$13.timeExtent) ? r$13.timeExtent.intersection(this.timeExtent) : this.timeExtent.clone()), r$13;
    }
    queryFeatures(e2, t2) {
      throw new Error("missing implementation");
    }
    queryObjectIds(e2, t2) {
      throw new Error("missing implementation");
    }
    queryFeatureCount(e2, t2) {
      throw new Error("missing implementation");
    }
    queryExtent(e2, t2) {
      throw new Error("missing implementation");
    }
    _loadArcadeModules(e2) {
      if (e2.get("expressionInfos.length"))
        return a$1();
    }
    _handleRequiredFieldsChange() {
      const e2 = this._updateRequiredFields();
      this._set("_updatingRequiredFieldsPromise", e2), e2.then(() => {
        this._updatingRequiredFieldsPromise === e2 && this._set("_updatingRequiredFieldsPromise", null);
      });
    }
    _updateRequiredFields() {
      return __async(this, null, function* () {
        if (!this.layer || !this.view)
          return;
        const e2 = this.view.type === "3d", { layer: r$13, layer: { fields: i2, objectIdField: s2, renderer: o2, displayField: a2 } } = this, n2 = r$13.featureReduction, u2 = new Set(), h2 = yield A([o2 ? o2.collectRequiredFields(u2, i2) : null, U(u2, r$13), e2 ? v(u2, r$13) : null, r(this.filter) ? L(u2, r$13, this.filter) : null, this.effect ? L(u2, r$13, this.effect.filter) : null, n2 ? V(u2, r$13, n2) : null]);
        r$13.timeInfo && this.timeExtent && g(u2, r$13.fields, [r$13.timeInfo.startField, r$13.timeInfo.endField]), r$13.type === "feature" && r$13.floorInfo && g(u2, r$13.fields, [r$13.floorInfo.floorField]);
        for (const t2 of h2)
          t2.error && q.error(t2.error);
        F(u2, i2, s2), e2 && a2 && F(u2, i2, a2);
        const F$1 = Array.from(u2).sort();
        this._set("requiredFields", F$1);
      });
    }
    validateFetchPopupFeatures(e2) {
      const { layer: t2, layer: { popupEnabled: r2 } } = this;
      if (!r2)
        return new s$2("featurelayerview:fetchPopupFeatures", "Popups are disabled", { layer: t2 });
      return d$3(this.layer, e2) ? void 0 : new s$2("featurelayerview:fetchPopupFeatures", "Layer does not define a popup template", { layer: t2 });
    }
    fetchClientPopupFeatures(e2) {
      return __async(this, null, function* () {
        const r$13 = r(e2) ? e2.clientGraphics : null;
        if (!r$13 || r$13.length === 0)
          return Promise.resolve([]);
        const i2 = [], s2 = [], { layer: o2 } = this, l2 = d$3(o2, e2);
        if (!r(l2))
          return Promise.resolve([]);
        const a2 = yield this._loadArcadeModules(l2), n2 = a2 && a2.arcadeUtils.hasGeometryOperations(l2), p2 = yield this.createPopupQuery(e2), m2 = I(o2.fields, p2.outFields);
        for (const t2 of r$13)
          n2 || !ce(m2, t2) ? s2.push(t2) : i2.push(t2);
        return o2.type === "stream" || s2.length === 0 ? Promise.resolve(i2) : (p2.objectIds = s2.map((e3) => e3.attributes[o2.objectIdField]), o2.queryFeatures(p2).then((e3) => i2.concat(e3.features)).catch(() => s2));
      });
    }
    createPopupQuery(e2) {
      return __async(this, null, function* () {
        const r$13 = this.layer, i2 = r$13.createQuery(), s2 = d$3(r$13, e2), o2 = r(s2) && (yield this._loadArcadeModules(s2)), l2 = r(s2) && o2 && o2.arcadeUtils.hasGeometryOperations(s2), a2 = !(r$13.geometryType !== "point" && !l2);
        return i2.returnGeometry = a2, i2.returnZ = a2, i2.returnM = a2, i2.outFields = yield i$3(this.layer, s2), i2.outSpatialReference = this.view.spatialReference, i2;
      });
    }
    canResume() {
      return !!super.canResume() && (!r(this.timeExtent) || !this.timeExtent.isEmpty);
    }
  };
  return e$1([y()], R2.prototype, "_updatingRequiredFieldsPromise", void 0), e$1([y({ readOnly: true })], R2.prototype, "availableFields", null), e$1([y({ type: l$2 })], R2.prototype, "effect", void 0), e$1([y({ type: j })], R2.prototype, "filter", void 0), e$1([y(w)], R2.prototype, "timeExtent", void 0), e$1([y()], R2.prototype, "layer", void 0), e$1([y({ type: Number })], R2.prototype, "maximumNumberOfFeatures", null), e$1([y({ readOnly: true, type: Boolean })], R2.prototype, "maximumNumberOfFeaturesExceeded", null), e$1([y({ readOnly: true })], R2.prototype, "requiredFields", void 0), e$1([y()], R2.prototype, "suspended", void 0), e$1([y()], R2.prototype, "view", void 0), R2 = e$1([i$1("esri.views.layers.FeatureLayerView")], R2), R2;
};
function e(e2, a2) {
  return __async(this, null, function* () {
    if (!e2)
      return null;
    switch (e2.type) {
      case "class-breaks":
      case "simple":
      case "unique-value":
      case "dot-density":
      case "dictionary":
        return new (yield import("./SymbolTileRenderer.7b6cd256.js")).default(a2);
      case "heatmap":
        return new (yield import("./HeatmapTileRenderer.e497da71.js")).default(a2);
    }
  });
}
function l$1(e2) {
  return Array.isArray(e2);
}
let u = class extends m$1 {
  constructor(e2) {
    super(e2), this._startupResolver = B$1(), this.isReady = false;
  }
  initialize() {
    this._controller = h$1(), this.addResolvingPromise(this._startWorker(this._controller.signal));
  }
  destroy() {
    this._controller.abort(), this._connection && this._connection.close();
  }
  set tileRenderer(e2) {
    this.client.tileRenderer = e2;
  }
  get closed() {
    return this._connection.closed;
  }
  startup(e2, t2, r2, s2) {
    return __async(this, null, function* () {
      yield this.when();
      const o2 = this._controller.signal, i2 = l$1(r2.source) ? { transferList: r2.source, signal: o2 } : void 0, n2 = { service: r2, config: t2, tileInfo: e2.tileInfo.toJSON(), tiles: s2 };
      yield this._connection.invoke("startup", n2, i2), this._startupResolver.resolve(), this._set("isReady", true);
    });
  }
  updateTiles(e2) {
    return __async(this, null, function* () {
      return yield this._startupResolver.promise, y$3(this._connection.invoke("updateTiles", e2));
    });
  }
  update(e2) {
    return __async(this, null, function* () {
      const t2 = { config: e2 };
      return yield this._startupResolver.promise, this._connection.invoke("update", t2);
    });
  }
  applyUpdate(e2) {
    return __async(this, null, function* () {
      return yield this._startupResolver.promise, this._connection.invoke("applyUpdate", e2);
    });
  }
  setHighlight(e2) {
    return __async(this, null, function* () {
      return yield this._startupResolver.promise, y$3(this._connection.invoke("controller.setHighlight", e2));
    });
  }
  refresh() {
    return __async(this, null, function* () {
      return yield this._startupResolver.promise, y$3(this._connection.invoke("controller.refresh"));
    });
  }
  queryFeatures(e2, t2) {
    return __async(this, null, function* () {
      return yield this._startupResolver.promise, this._connection.invoke("controller.queryFeatures", e2.toJSON(), t2);
    });
  }
  queryObjectIds(e2, t2) {
    return __async(this, null, function* () {
      return yield this._startupResolver.promise, this._connection.invoke("controller.queryObjectIds", e2.toJSON(), t2);
    });
  }
  queryFeatureCount(e2, t2) {
    return __async(this, null, function* () {
      return yield this._startupResolver.promise, this._connection.invoke("controller.queryFeatureCount", e2.toJSON(), t2);
    });
  }
  queryExtent(e2, t2) {
    return __async(this, null, function* () {
      return this._connection.invoke("controller.queryExtent", e2.toJSON(), t2);
    });
  }
  queryLatestObservations(e2, t2) {
    return __async(this, null, function* () {
      return yield this._startupResolver.promise, this._connection.invoke("controller.queryLatestObservations", e2.toJSON(), t2);
    });
  }
  queryStatistics(e2) {
    return __async(this, null, function* () {
      return yield this._startupResolver.promise, this._connection.invoke("controller.queryStatistics", e2);
    });
  }
  getObjectId(e2) {
    return __async(this, null, function* () {
      return yield this._startupResolver.promise, this._connection.invoke("controller.getObjectId", e2);
    });
  }
  getDisplayId(e2) {
    return __async(this, null, function* () {
      return yield this._startupResolver.promise, this._connection.invoke("controller.getDisplayId", e2);
    });
  }
  getFeature(e2) {
    return __async(this, null, function* () {
      return yield this._startupResolver.promise, this._connection.invoke("controller.getFeature", e2);
    });
  }
  getAggregate(e2) {
    return __async(this, null, function* () {
      return yield this._startupResolver.promise, this._connection.invoke("controller.getAggregate", e2);
    });
  }
  getAggregateValueRanges() {
    return __async(this, null, function* () {
      return yield this._startupResolver.promise, this._connection.invoke("controller.getAggregateValueRanges");
    });
  }
  mapValidDisplayIds(e2) {
    return __async(this, null, function* () {
      return yield this._startupResolver.promise, this._connection.invoke("controller.mapValidDisplayIds", e2);
    });
  }
  onEdits(e2) {
    return __async(this, null, function* () {
      yield this._startupResolver.promise;
      const { addedFeatures: t2, deletedFeatures: r2, updatedFeatures: s2 } = e2;
      return y$3(this._connection.invoke("controller.onEdits", { addedFeatures: t2, deletedFeatures: r2, updatedFeatures: s2 }));
    });
  }
  enableEvent(e2, t2) {
    return __async(this, null, function* () {
      return yield this._startupResolver.promise, y$3(this._connection.invoke("controller.enableEvent", { name: e2, value: t2 }));
    });
  }
  _startWorker(e2) {
    return __async(this, null, function* () {
      try {
        this._connection = yield p$3("Pipeline", { client: this.client, strategy: "dedicated", signal: e2 });
      } catch (t2) {
        j$1(t2);
      }
    });
  }
};
e$1([y()], u.prototype, "isReady", void 0), e$1([y()], u.prototype, "client", void 0), e$1([y()], u.prototype, "tileRenderer", null), u = e$1([i$1("esri.views.2d.layers.support.FeatureLayerProxy")], u);
var p = u;
const l = 1e-6;
class s {
  constructor(e2) {
    this._tiles = new Map(), this.buffer = 0, this.acquireTile = e2.acquireTile, this.releaseTile = e2.releaseTile, this.tileInfoView = e2.tileInfoView, this.buffer = e2.buffer;
  }
  destroy() {
  }
  clear() {
    this._tiles.forEach((e2) => this._releaseTile(e2));
  }
  tileKeys() {
    const e2 = [];
    return this._tiles.forEach((i2, t2) => e2.push(t2)), e2;
  }
  update(e2) {
    const l2 = this.tileInfoView.getTileCoverage(e2.state, this.buffer, "closest"), { spans: s2, lodInfo: r2 } = l2, { level: a2 } = r2, o2 = [], d2 = [], h2 = new Set(), n2 = new Set();
    for (const { row: t2, colFrom: c2, colTo: f2 } of s2)
      for (let e3 = c2; e3 <= f2; e3++) {
        const l3 = e$2.getId(a2, t2, r2.normalizeCol(e3), r2.getWorldForColumn(e3)), s3 = this._getOrAcquireTile(o2, l3);
        h2.add(l3), s3.isReady ? s3.visible = true : n2.add(s3.key);
      }
    n2.forEach((e3) => this._addPlaceholders(h2, e3)), this._tiles.forEach((e3) => {
      h2.has(e3.key.id) || (d2.push(e3.key.id), this._releaseTile(e3));
    }), l$3.pool.release(l2);
    return { hasMissingTiles: n2.size > 0, added: o2, removed: d2 };
  }
  _getOrAcquireTile(e2, t2) {
    if (!this._tiles.has(t2)) {
      const l2 = this.acquireTile(new e$2(t2));
      e2.push(t2), this._tiles.set(t2, l2), l2.visible = false;
    }
    return this._tiles.get(t2);
  }
  _getTile(e2) {
    return this._tiles.get(e2);
  }
  _releaseTile(e2) {
    this._tiles.delete(e2.key.id), this.releaseTile(e2);
  }
  _addPlaceholders(e2, i2) {
    const t2 = this._addPlaceholderChildren(e2, i2);
    if (!(Math.abs(1 - t2) < l)) {
      if (!this._addPlaceholderParent(e2, i2)) {
        this._getTile(i2.id).visible = true;
      }
    }
  }
  _addPlaceholderChildren(e2, i2) {
    let t2 = 0;
    return this._tiles.forEach((l2) => {
      t2 += this._addPlaceholderChild(e2, l2, i2);
    }), t2;
  }
  _addPlaceholderChild(e2, i2, t2) {
    if (i2.key.level <= t2.level || !i2.hasData || !t2.contains(i2.key))
      return 0;
    i2.visible = true, e2.add(i2.key.id);
    return 1 / (1 << 2 * (i2.key.level - t2.level));
  }
  _addPlaceholderParent(i2, t2) {
    let l2 = t2.getParentKey(), s2 = 0, r$12 = null;
    for (; r(l2); ) {
      if (i2.has(l2.id))
        return true;
      const e2 = this._getTile(l2.id);
      if (e2 != null && e2.isReady)
        return e2.visible = true, i2.add(e2.key.id), true;
      e2 != null && e2.hasData && e2.patchCount > s2 && (s2 = e2.patchCount, r$12 = e2), l2 = l2.getParentKey();
    }
    return !!r$12 && (r$12.visible = true, i2.add(r$12.key.id), true);
  }
}
const $ = 2147483648, Q = 1, B = (e2) => (e2 & $) >>> 31 === Q;
function K(e2) {
  return e2 && "openPorts" in e2;
}
const W = n$1.getLogger("esri.views.2d.layers.FeatureLayerView2D");
let X = class extends R(i$4(l$4(d$5))) {
  constructor() {
    super(...arguments), this._pipelineIsUpdating = true, this._updatingPipelineConfig = false, this._onGoingEdits = 0, this._isRefreshing = false, this._visibilityOverrides = new Set(), this._effect = null, this._highlightIds = new Map(), this._lastPixelBuffer = 0, this.filter = null, this.effectLists = { included: new u$2(), excluded: new u$2() }, this.doRefresh = z(() => __async(this, null, function* () {
      this.isUpdating() && (yield $$1(this, "updating")), this._set("_isRefreshing", true), this._lockGPUUploads();
      try {
        yield this._proxy.refresh();
      } catch (e2) {
        g$1(e2);
      }
      this._unlockGPUUploads(), this._set("_isRefreshing", false);
    })), this._doUpdate = z(() => __async(this, null, function* () {
      try {
        if (this.destroyed || !this._hasRequiredSupport(this.layer))
          return;
        this._set("_updatingPipelineConfig", true), yield $$1(this, "_isRefreshing");
        const { effect: t2, filter: i2 } = this;
        yield this._updateRequiredFields();
        const { renderer: r$12 } = this._getEffectiveRenderer();
        this._set("_effectiveRenderer", r$12);
        const s2 = this.layer.type === "feature" ? this.layer.historicMoment : null, n2 = this.layer.type === "feature" ? this.layer.gdbVersion : null, o2 = { renderer: this.layer.renderer, spatialReference: this.layer.spatialReference, timeExtent: this.layer.timeExtent, definitionExpression: this.layer.definitionExpression, featureReduction: this.layer.featureReduction, fields: this.layer.fields, geometryType: this.layer.geometryType, historicMoment: s2, labelsVisible: this.layer.labelsVisible, labelingInfo: this.layer.labelingInfo, availableFields: this.availableFields, effect: this.effect, filter: this.filter, gdbVersion: n2, pixelBuffer: 0 }, l2 = e$3(this.layer.geometryType), h2 = yield u$3(r$12, l2, this.layer.featureReduction), u2 = this._createConfiguration(o2, i2, t2);
        this._lastPixelBuffer = h2 === 0 ? 0 : Math.max(h2, this._lastPixelBuffer), u2.schema.source.pixelBuffer = this._lastPixelBuffer;
        const d2 = this._createTileRendererHash(r$12);
        if (d2 !== this._tileRendererHash) {
          yield this._initTileRenderer(r$12);
          const e2 = this._serviceOptions;
          this.effects.forEach((e3) => r(e3) && r(e3.filter) && e3.filter.enable()), this.tileRenderer.onConfigUpdate(r$12);
          const t3 = { added: this._tileStrategy.tileKeys(), removed: [] }, i3 = this.layer;
          i3.type !== "stream" && K(i3.source) && (e2.source = yield i3.source.openPorts()), yield this._proxy.startup(this.view.featuresTilingScheme, u2, e2, t3), this.hasHighlight() && (yield this._proxy.setHighlight(Array.from(this._highlightIds.keys()))), yield this._onceTilesUpdated(), this.tileRenderer.onConfigUpdate(r$12);
        } else {
          const t3 = yield this._proxy.update(u2);
          (t3.mesh || t3.targets.aggregate) && this._lockGPUUploads();
          try {
            yield this._proxy.applyUpdate(t3);
          } catch (e2) {
            g$1(e2) || W.error(e2);
          }
          (t3.mesh || t3.targets.aggregate) && this._unlockGPUUploads(), this.effects.forEach((e2) => r(e2) && r(e2.filter) && e2.filter.enable()), this.tileRenderer.onConfigUpdate(r$12), this._forceAttributeTextureUpload();
        }
        this._tileRendererHash = d2, this.tileRenderer.invalidateLabels(), this.requestUpdate();
      } catch (e2) {
      }
    })), this._updateHighlight = z(() => __async(this, null, function* () {
      return this._proxy.setHighlight(Array.from(this._highlightIds.keys()));
    }));
  }
  destroy() {
    var e2, t2;
    (e2 = this._proxy) == null || e2.destroy(), A$1(this._updateClusterSizeTask, (e3) => e3.remove()), (t2 = this.tileRenderer) == null || t2.destroy();
  }
  initialize() {
    this.addResolvingPromise(Promise.all([this._initProxy(), this._initServiceOptions()])), this.handles.add([this.on("valueRangesChanged", (e2) => {
      this._set("_aggregateValueRanges", e2.valueRanges);
    }), d$2(this, "effect", (e2) => {
      this.effectLists.included.effect = e2 == null ? void 0 : e2.includedEffect;
    }), d$2(this, "effect", (e2) => {
      this.effectLists.excluded.effect = e2 == null ? void 0 : e2.excludedEffect;
    })]);
  }
  _initProxy() {
    return __async(this, null, function* () {
      if (this.layer.type !== "stream" && this.layer.type !== "ogc-feature" && this.layer.isTable)
        throw new s$2("featurelayerview:table-not-supported", "table feature layer can't be displayed", { layer: this.layer });
      this._proxy && this._proxy.destroy();
      const e2 = this._createClientOptions();
      return this._set("_proxy", new p({ client: e2 })), this._proxy.when();
    });
  }
  _initServiceOptions() {
    return __async(this, null, function* () {
      this._set("_serviceOptions", yield this._createServiceOptions());
    });
  }
  get labelsVisible() {
    return !this.suspended && this.layer.labelingInfo && this.layer.labelsVisible;
  }
  get effect() {
    return c$2(this._effect, null);
  }
  set effect(e2) {
    const t2 = this._effect;
    r(t2) && r(t2.filter) && t2.filter.enabled && r(e2) && r(e2.filter) && e2.filter.enable(), this._effect = e2, this.notifyChange("effect");
  }
  get effects() {
    return this.effect && [this.effect] || [];
  }
  get queryMode() {
    return this._serviceOptions.type;
  }
  get renderingConfigHash() {
    if (!this.layer)
      return null;
    const e2 = this.availableFields, t2 = this.layer, i2 = this.view.floors, { definitionExpression: r$12, renderer: s2, labelingInfo: n2 } = t2, o2 = t2.type === "feature" ? t2.gdbVersion : void 0, l2 = t2.type === "feature" && t2.historicMoment ? t2.historicMoment.getTime() : void 0, { timeExtent: h2 } = this, u2 = t2.type === "stream" ? `${JSON.stringify(t2.geometryDefinition)}${t2.definitionExpression}` : null, d2 = JSON.stringify(this.clips), p2 = t2.featureReduction && t2.featureReduction.toJSON();
    return JSON.stringify({ filterHash: r(this.filter) && this.filter.toJSON(), effectHash: r(this.effect) && this.effect.toJSON(), streamFilter: u2, gdbVersion: o2, definitionExpression: r$12, historicMoment: l2, availableFields: e2, renderer: s2, labelingInfo: t2.labelsVisible && n2, timeExtent: h2, floors: i2, clipsHash: d2, featureReduction: p2 });
  }
  get hasEffects() {
    return this.effectLists.included.hasEffects || this.effectLists.excluded.hasEffects;
  }
  highlight(e2) {
    let t2;
    return e2 instanceof n ? t2 = [e2.getObjectId()] : typeof e2 == "number" || typeof e2 == "string" ? t2 = [e2] : L$1.isCollection(e2) ? t2 = e2.map((e3) => e3 && e3.getAttribute(this.layer.objectIdField)).toArray() : Array.isArray(e2) && e2.length > 0 && (t2 = typeof e2[0] == "number" || typeof e2[0] == "string" ? e2 : e2.map((e3) => e3 && e3.getAttribute(this.layer.objectIdField))), t2 && t2.length ? (t2 = t2.filter((e3) => e3 != null), this._addHighlight(t2), { remove: () => this._removeHighlight(t2) }) : { remove: () => {
    } };
  }
  hasHighlight() {
    return !!this._highlightIds.size;
  }
  hitTest(e2, t2) {
    return this._hitTest(e2, t2);
  }
  queryStatistics() {
    return this._proxy.queryStatistics();
  }
  queryFeatures(e2, t2) {
    return this.queryFeaturesJSON(e2, t2).then((e3) => {
      const t3 = g$2.fromJSON(e3);
      return t3.features.forEach((e4) => {
        e4.layer = this.layer, e4.sourceLayer = this.layer;
      }), t3;
    });
  }
  queryFeaturesJSON(e2, t2) {
    return this._proxy.queryFeatures(this._cleanUpQuery(e2), t2);
  }
  queryObjectIds(e2, t2) {
    return this._proxy.queryObjectIds(this._cleanUpQuery(e2), t2);
  }
  queryFeatureCount(e2, t2) {
    return this._proxy.queryFeatureCount(this._cleanUpQuery(e2), t2);
  }
  queryExtent(e2, t2) {
    return this._proxy.queryExtent(this._cleanUpQuery(e2), t2).then((e3) => ({ count: e3.count, extent: M.fromJSON(e3.extent) }));
  }
  setVisibility(e2, t2) {
    t2 ? this._visibilityOverrides.delete(e2) : this._visibilityOverrides.add(e2), this._update();
  }
  update(e2) {
    if (!this._tileStrategy || !this.tileRenderer)
      return;
    const { hasMissingTiles: t2, added: i2, removed: r2 } = this._tileStrategy.update(e2);
    (i2.length || r2.length) && this._proxy.updateTiles({ added: i2, removed: r2 }), t2 && this.requestUpdate(), this.notifyChange("updating");
  }
  attach() {
    this.view.timeline.record(`${this.layer.title} (FeatureLayer) Attach`), this._tileStrategy = new s({ acquireTile: (e2) => this._acquireTile(e2), releaseTile: (e2) => this._releaseTile(e2), tileInfoView: this.view.featuresTilingScheme, buffer: 0 }), this.handles.add(d$2(this, "renderingConfigHash", () => this._update()), "attach"), this.layer.type !== "stream" && this.handles.add(this.layer.on("edits", (e2) => __async(this, null, function* () {
      this._set("_onGoingEdits", this._onGoingEdits + 1);
      try {
        const t2 = "globalIdField" in this.layer && this.layer.globalIdField, i2 = e2.deletedFeatures.some((e3) => e3.objectId === -1 || !e3.objectId), r2 = t2 && this.availableFields.includes(t2);
        if (i2 && !r2)
          return void W.error(new s$2("mapview-apply-edits", `Editing the specified service requires the layer's globalIdField, ${t2} to be included the layer's outFields for updates to be reflected on the map`));
        yield this._proxy.onEdits(e2);
      } catch (t2) {
        g$1(t2);
      }
      this._set("_onGoingEdits", Math.max(0, this._onGoingEdits - 1));
    })), "attach");
  }
  detach() {
    this.container.removeAllChildren(), this.handles.remove("attach"), this._updatingPipelineConfig = false, this.tileRenderer && (this.tileRenderer.uninstall(this.container), this.tileRenderer = null), this._tileStrategy && (this._tileStrategy.destroy(), this._tileStrategy = null), this._tileRendererHash = null;
  }
  moveStart() {
    this.requestUpdate();
  }
  viewChange() {
    this.requestUpdate();
  }
  moveEnd() {
    this.requestUpdate();
  }
  fetchPopupFeatures(e2, t2) {
    return __async(this, null, function* () {
      if (r(t2) && t2.clientGraphics.length) {
        const e3 = t2.clientGraphics[0];
        if (e3 instanceof c$1)
          return [e3];
      }
      const i2 = this.validateFetchPopupFeatures(t2);
      if (i2)
        throw i2;
      if (r(t2) && t2.clientGraphics.length === 0)
        return [];
      const r$12 = this.fetchClientPopupFeatures(t2);
      if (!e2)
        return r$12;
      const s2 = this._fetchServicePopupFeatures(e2, t2);
      return k([r$12, s2]).then(M$1);
    });
  }
  _fetchServicePopupFeatures(e2, t2) {
    return __async(this, null, function* () {
      if (this.layer.type === "stream" || this.layer.type === "ogc-feature")
        return [];
      const i2 = yield this.createPopupQuery(t2), { layer: r$12 } = this, { renderer: s2 } = r$12, n2 = r(t2) ? t2.event : null, o2 = s$3({ renderer: s2, event: n2 });
      i2.geometry = this.createFetchPopupFeaturesQueryGeometry(e2, o2);
      const l2 = new Set(), { objectIdField: h2 } = r$12, u2 = r(t2) ? t2.clientGraphics : null;
      if (u2)
        for (const a2 of u2)
          l2.add(a2.attributes[h2]);
      return r$12.queryFeatures(i2).then((e3) => e3.features.filter((e4) => !l2.has(e4.attributes[h2])));
    });
  }
  createFetchPopupFeaturesQueryGeometry(e2, t2) {
    return a$2(e2, t2, this.view);
  }
  isUpdating() {
    return this.layer.renderer != null && (this._updatingRequiredFieldsPromise != null || this.tileRenderer == null || !this._proxy || !this._proxy.isReady || this._pipelineIsUpdating || this._updatingPipelineConfig || this.tileRenderer.updating || this._onGoingEdits > 0);
  }
  _createClientOptions() {
    return { setUpdating: (e2) => {
      this._set("_pipelineIsUpdating", e2);
    }, emitEvent: (e2) => {
      this.emit(e2.name, e2.event);
    } };
  }
  _detectQueryMode(e2) {
    return __async(this, null, function* () {
      if ("path" in e2 && w$1(e2.path) && this.layer.type === "feature" && this.layer.geometryType === "point" && !this.layer.capabilities.operations.supportsEditing && t$1("featurelayer-snapshot-enabled"))
        try {
          const e3 = yield this.layer.queryFeatureCount();
          if (e3 <= t$1("featurelayer-snapshot-point-min-threshold"))
            return { mode: "snapshot", featureCount: e3 };
          const i2 = t$1("featurelayer-snapshot-point-max-threshold"), r2 = t$1("featurelayer-snapshot-point-coverage"), s2 = this.view.extent, a2 = this.layer.fullExtent, n2 = a2 == null ? void 0 : a2.clone().intersection(s2), o2 = (n2 == null ? void 0 : n2.width) * (n2 == null ? void 0 : n2.height), l2 = (a2 == null ? void 0 : a2.width) * (a2 == null ? void 0 : a2.height), h2 = l2 === 0 ? 0 : o2 / l2;
          if (e3 <= i2 && h2 >= r2)
            return { mode: "snapshot", featureCount: e3 };
        } catch (i2) {
          W.warn("mapview-feature-layer", "Encountered an error when querying for featureCount", { error: i2 });
        }
      return { mode: "on-demand" };
    });
  }
  _createServiceOptions() {
    return __async(this, null, function* () {
      const e2 = this.layer;
      if (e2.type === "stream")
        return null;
      const { capabilities: t2, objectIdField: r2 } = e2, s2 = e2.fields.map((e3) => e3.toJSON()), a2 = e2.fullExtent && e2.fullExtent.toJSON(), n2 = e$3(e2.geometryType), o2 = e2.timeInfo && e2.timeInfo.toJSON() || null, l2 = e2.spatialReference ? e2.spatialReference.toJSON() : null, h2 = e2.type === "feature" ? e2.customParameters : null, u2 = e2.type === "feature" ? e2.globalIdField : null;
      let d2;
      e2.type === "ogc-feature" ? d2 = e2.source.getFeatureDefinition() : K(e2.source) ? d2 = yield e2.source.openPorts() : e2.parsedUrl && (d2 = y$1(e2.parsedUrl), "dynamicDataSource" in e2 && e2.dynamicDataSource && (d2.query = { layer: JSON.stringify({ source: e2.dynamicDataSource }) }));
      const { mode: p2, featureCount: c2 } = yield this._detectQueryMode(d2);
      return { type: p2, featureCount: c2, globalIdField: u2, maxRecordCount: t2.query.maxRecordCount, tileMaxRecordCount: t2.query.tileMaxRecordCount, capabilities: t2, fields: s2, fullExtent: a2, geometryType: n2, objectIdField: r2, source: d2, timeInfo: o2, spatialReference: l2, customParameters: h2 };
    });
  }
  _createMemoryServiceOptions(e2) {
    return __async(this, null, function* () {
      const t2 = yield e2.openPorts();
      return __spreadProps(__spreadValues({}, this._createServiceOptions()), { type: "memory", source: t2 });
    });
  }
  _cleanUpQuery(e2) {
    const t2 = R$1.from(e2) || this.createQuery();
    return t2.outSpatialReference || (t2.outSpatialReference = this.view.spatialReference), t2;
  }
  _createUpdateClusterSizeTask(e2, t2) {
    return this.watch("_aggregateValueRanges", (i2) => __async(this, null, function* () {
      this._updateClusterEffectiveRendererSizeVariable(e2, t2, i2), this._updatingPipelineConfig || this.tileRenderer.onConfigUpdate(this._effectiveRenderer);
    }));
  }
  _updateClusterEffectiveRendererSizeVariable(e2, t2, i2) {
    return __async(this, null, function* () {
      if (e2.dynamicClusterSize && "visualVariables" in e2 && e2.visualVariables) {
        const r$12 = d$4(e2.visualVariables);
        if (r(r$12) && r$12.field === "cluster_count") {
          const s2 = e2.visualVariables.indexOf(r$12);
          e2.visualVariables[s2] = f(t2, i2);
          const a2 = e2.clone();
          a2.dynamicClusterSize = true, this._set("_effectiveRenderer", a2);
        }
      }
    });
  }
  _getEffectiveRenderer() {
    const e2 = this.layer.renderer, t2 = this.layer.featureReduction;
    if (r(this._updateClusterSizeTask) && (this._updateClusterSizeTask.remove(), this._updateClusterSizeTask = null), t2 && t2.type === "cluster" && m$2(e2)) {
      const i2 = t2, s2 = [], a2 = c$3(s2, e2, i2, this._aggregateValueRanges);
      return A$1(this._updateClusterSizeTask, (e3) => e3.remove()), this._updateClusterSizeTask = this._createUpdateClusterSizeTask(a2, i2), { renderer: a2, aggregateFields: s2, featureReduction: t2 };
    }
    return { renderer: e2, aggregateFields: [], featureReduction: null };
  }
  _acquireTile(e2) {
    const t2 = this.tileRenderer.acquireTile(e2);
    return t2.once("attach", () => {
      this.requestUpdate();
    }), t2;
  }
  _releaseTile(e2) {
    this.tileRenderer.releaseTile(e2);
  }
  _initTileRenderer(e$12) {
    return __async(this, null, function* () {
      const t2 = yield e(e$12, { layerView: this, tileInfoView: this.view.featuresTilingScheme, layer: this.layer });
      return this.tileRenderer && (this._tileStrategy.clear(), this.tileRenderer.uninstall(this.container), this.tileRenderer.destroy(), this.tileRenderer = null), this.destroyed ? null : (this._proxy.tileRenderer = t2, this._set("tileRenderer", t2), this.tileRenderer.install(this.container), this.tileRenderer.onConfigUpdate(e$12), this.requestUpdate(), this.tileRenderer);
    });
  }
  _createTileRendererHash(e2) {
    return `${e2.type === "heatmap" ? "heatmap" : "symbol"}.${e2.type === "dot-density"}`;
  }
  _createFeatureDataHash(e2, t2, i2) {
    const r$12 = e2.getAttributeHash(), s2 = JSON.stringify(t2), n2 = r(i2) && JSON.stringify(i2.filter), o2 = JSON.stringify(this.timeExtent);
    let l2 = "";
    return this._visibilityOverrides.forEach((e3) => l2 += e3), `${r$12}.${s2}.${n2}.${o2}.${l2}`;
  }
  get hasFilter() {
    const e2 = !!("floorInfo" in this.layer && this.layer.floorInfo && this.view.floors && this.view.floors.length);
    return !!this.filter || e2 || !!this._visibilityOverrides.size || !!this.timeExtent;
  }
  _injectOverrides(e2) {
    const t2 = r(e2) ? e2.timeExtent : null, i2 = r(this.timeExtent) && r(t2) ? this.timeExtent.intersection(t2) : this.timeExtent || t2;
    let r$12 = null;
    const s2 = "floorInfo" in this.layer && this.layer.floorInfo;
    if (s2) {
      const t3 = r(e2) && e2.where;
      r$12 = this._addFloorFilterClause(t3);
    }
    if (!this._visibilityOverrides.size && !i2 && !s2)
      return e2;
    const n2 = r(e2) && e2.clone() || new j();
    return n2.hiddenIds = this._visibilityOverrides, n2.timeExtent = i2, r$12 && (n2.where = r$12), n2;
  }
  _addFloorFilterClause(e2) {
    const t2 = this.layer;
    let i2 = e2 || "";
    if ("floorInfo" in t2 && t2.floorInfo) {
      var r$12;
      let e3 = this.view.floors;
      if (!e3 || !e3.length)
        return i2;
      (r$12 = t2.floorInfo.viewAllLevelIds) != null && r$12.length && (e3 = t2.floorInfo.viewAllLevelIds);
      const s2 = e3.filter((e4) => e4 !== "").map((e4) => "'" + e4 + "'");
      s2.push("''");
      const n2 = t2.floorInfo.floorField;
      let o2 = "(" + n2 + " IN ({ids}) OR " + n2 + " IS NULL)";
      if (o2 = o2.replace("{ids}", s2.join(", ")), r(i2) && i2.includes(n2)) {
        let e4 = new RegExp("AND \\(" + n2 + ".*NULL\\)", "g");
        i2 = i2.replace(e4, ""), e4 = new RegExp("\\(" + n2 + ".*NULL\\)", "g"), i2 = i2.replace(e4, ""), i2 = i2.replace(/\s+/g, " ").trim();
      }
      i2 = i2 !== "" ? "(" + i2 + ") AND " + o2 : o2;
    }
    return i2 !== "" ? i2 : null;
  }
  _createConfiguration(e2, t2, i2) {
    const r$2 = this.layer.type === "feature" && this.layer.historicMoment ? this.layer.historicMoment.getTime() : void 0, s2 = this.layer.type === "feature" ? this.layer.gdbVersion : void 0, o2 = new Array(N), l2 = this._injectOverrides(t2);
    o2[0] = r(l2) ? l2.toJSON() : null, o2[1] = r(i2) && i2.filter ? i2.filter.toJSON() : null;
    const h2 = k$1(e2);
    if (t$2(h2))
      return null;
    const u2 = r$1();
    return { definitionExpression: this.layer.definitionExpression, availableFields: this.availableFields, gdbVersion: s2, historicMoment: r$2, devicePixelRatio: window.devicePixelRatio || 1, filters: o2, schema: h2, supportsTextureFloat: u2.supportsTextureFloat, maxTextureSize: u2.maxTextureSize };
  }
  _hasRequiredSupport(e2) {
    var t2;
    return !(((t2 = e2.renderer) == null ? void 0 : t2.type) === "dot-density" && !r$1().supportsTextureFloat) || (W.error(new s$2("webgl-missing-extension", "Missing WebGL extension OES_Texture_Float which is required for DotDensity")), false);
  }
  _onceTilesUpdated() {
    return this.requestUpdate(), $$1(this, "_pipelineIsUpdating", false);
  }
  _lockGPUUploads() {
    this.tileRenderer && this.tileRenderer.lockGPUUploads();
  }
  _unlockGPUUploads() {
    this.tileRenderer && this.tileRenderer.unlockGPUUploads();
  }
  _forceAttributeTextureUpload() {
    this.tileRenderer && this.tileRenderer.forceAttributeTextureUpload();
  }
  _update() {
    this.view.timeline.begin(`${this.layer.title} (FeatureLayer) Initial Pipeline Config`);
    const e2 = this._doUpdate();
    this._updatingPromise = e2;
    const t2 = () => {
      e2 === this._updatingPromise && this._set("_updatingPipelineConfig", false), this.view && this.view.timeline.end(`${this.layer.title} (FeatureLayer) Initial Pipeline Config`);
    };
    e2.then(t2).catch((e3) => {
      g$1(e3) || W.error(e3), t2();
    });
  }
  _addHighlight(e2) {
    for (const t2 of e2)
      if (this._highlightIds.has(t2)) {
        const e3 = this._highlightIds.get(t2);
        this._highlightIds.set(t2, e3 + 1);
      } else
        this._highlightIds.set(t2, 1);
    this._updateHighlight().catch((e3) => {
      g$1(e3) || W.error(e3);
    });
  }
  _removeHighlight(e2) {
    for (const t2 of e2)
      if (this._highlightIds.has(t2)) {
        const e3 = this._highlightIds.get(t2) - 1;
        e3 === 0 ? this._highlightIds.delete(t2) : this._highlightIds.set(t2, e3);
      }
    this._updateHighlight().catch((e3) => {
      g$1(e3) || W.error(e3);
    });
  }
  _createHittestResult(e2) {
    return e2.layer = this.layer, e2.sourceLayer = this.layer, r(e2.geometry) && (e2.geometry.spatialReference = this.view.spatialReference), e2;
  }
  _hitTest(e2, t2) {
    return __async(this, null, function* () {
      if (this.suspended || !this.tileRenderer)
        return null;
      const i2 = yield this.tileRenderer.hitTest(e2, t2);
      if (i2.length === 0)
        return yield C$1(1), null;
      const s2 = i2[0];
      if (!B(s2)) {
        const e3 = yield this._proxy.getFeature(s2);
        return A$1(e3, (e4) => this._createHittestResult(n.fromJSON(e4)));
      }
      const o2 = yield this._proxy.getAggregate(s2);
      if (t$2(o2))
        return null;
      if (r(o2.referenceId)) {
        const e3 = yield this._proxy.getFeature(o2.referenceId);
        return A$1(e3, (e4) => this._createHittestResult(n.fromJSON(e4)));
      }
      return this._createHittestResult(c$1.fromJSON(o2));
    });
  }
};
e$1([y()], X.prototype, "_serviceOptions", void 0), e$1([y()], X.prototype, "_proxy", void 0), e$1([y()], X.prototype, "_pipelineIsUpdating", void 0), e$1([y()], X.prototype, "_updatingPipelineConfig", void 0), e$1([y()], X.prototype, "_effectiveRenderer", void 0), e$1([y()], X.prototype, "_aggregateValueRanges", void 0), e$1([y()], X.prototype, "_onGoingEdits", void 0), e$1([y()], X.prototype, "_isRefreshing", void 0), e$1([y()], X.prototype, "labelsVisible", null), e$1([y({ type: j })], X.prototype, "filter", void 0), e$1([y({ type: l$2 })], X.prototype, "effect", null), e$1([y({ readOnly: true })], X.prototype, "effects", null), e$1([y({ readOnly: true })], X.prototype, "queryMode", null), e$1([y()], X.prototype, "renderingConfigHash", null), e$1([y()], X.prototype, "tileRenderer", void 0), e$1([y()], X.prototype, "updating", void 0), X = e$1([i$1("esri.views.2d.layers.FeatureLayerView2D")], X);
var Y = X;
export default Y;
