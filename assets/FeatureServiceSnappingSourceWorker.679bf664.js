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
    var step = (x2) => x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import { ae as e$1, af as y$1, ag as i$1, ac as u$1, b6 as i$2, b4 as F, gt as u$2, a0 as t$2, dj as a, by as F$1, a4 as n$1, gf as d, bI as h, a5 as r$2, gu as l, gv as S$1, ec as R, cr as M, dl as w$1, dy as n$2, b$ as e$2, gw as c, gx as n$3, gy as re, gc as y$2, cw as oe, df as o, fp as fe, gz as p, gA as l$1, av as n$4, gB as E$1, b3 as u$3, gC as l$2, gD as c$1, bF as k, aq as a$1, eP as x$1, dk as d$1, gE as A } from "./vendor.74d5941c.js";
import { e as e$3, u as u$4 } from "./FeatureStore.2d2de89b.js";
import { Z } from "./QueryEngine.202b3395.js";
import "./aaBoundingBox.b76947f8.js";
import "./PooledRBush.257a80e4.js";
import "./quickselect.e4940b29.js";
import "./_commonjsHelpers.f2a458db.js";
import "./centroid.93c1b848.js";
import "./projectionSupport.62084d5a.js";
import "./json.7989af9b.js";
import "./WhereClause.f27c6004.js";
import "./timeSupport.2cea3b6f.js";
function n(n2) {
  return 32 + n2.length;
}
function t$1() {
  return 16;
}
function e(e2) {
  if (!e2)
    return 0;
  let r2 = 32;
  for (const o2 in e2)
    if (e2.hasOwnProperty(o2)) {
      const c2 = e2[o2];
      switch (typeof c2) {
        case "string":
          r2 += n(c2);
          break;
        case "number":
          r2 += t$1();
          break;
        case "boolean":
          r2 += 4;
      }
    }
  return r2;
}
function r$1(n2, t2) {
  return 32 + n2.length * t2;
}
let r = class extends u$1 {
  constructor() {
    super(...arguments), this.updating = false, this.pending = [];
  }
  push(s, t2) {
    this.pending.push({ promise: s, callback: t2 }), this.pending.length === 1 && this.process();
  }
  process() {
    if (!this.pending.length)
      return void (this.updating = false);
    this.updating = true;
    const s = this.pending[0];
    s.promise.then((t2) => s.callback(t2)).catch(() => {
    }).then(() => {
      this.pending.shift(), this.process();
    });
  }
};
e$1([y$1()], r.prototype, "updating", void 0), r = e$1([i$1("esri.core.AsyncSequence")], r);
class u {
  constructor(t2, e2) {
    this.data = t2, this.resolution = e2, this.state = { type: 0 }, this.alive = true;
  }
  process(t2) {
    switch (this.state.type) {
      case 0:
        return this.state = this.gotoFetchCount(this.state, t2), this.state.task.promise.then(t2.resume, t2.resume);
      case 1:
        break;
      case 2:
        return this.state = this.gotoFetchFeatures(this.state, t2), this.state.task.promise.then(t2.resume, t2.resume);
      case 3:
        break;
      case 4:
        this.state = this.goToDone(this.state, t2);
    }
    return null;
  }
  get debugInfo() {
    return { data: this.data, featureCount: this.featureCount, state: this.stateToString };
  }
  get featureCount() {
    switch (this.state.type) {
      case 0:
      case 1:
        return 0;
      case 2:
        return this.state.featureCount;
      case 3:
        return this.state.previous.featureCount;
      case 4:
        return this.state.features.length;
      case 5:
        return this.state.previous.features.length;
    }
  }
  get stateToString() {
    switch (this.state.type) {
      case 0:
        return "created";
      case 1:
        return "fetch-count";
      case 2:
        return "fetched-count";
      case 3:
        return "fetch-features";
      case 4:
        return "fetched-features";
      case 5:
        return "done";
    }
  }
  gotoFetchCount(t2, a2) {
    return { type: 1, previous: t2, task: F((t3) => __async(this, null, function* () {
      const e2 = yield u$2(a2.fetchCount(this, t3));
      this.state.type === 1 && (this.state = this.gotoFetchedCount(this.state, e2.ok ? e2.value : 1 / 0));
    })) };
  }
  gotoFetchedCount(t2, e2) {
    return { type: 2, featureCount: e2, previous: t2 };
  }
  gotoFetchFeatures(t2, a2) {
    return { type: 3, previous: t2, task: F((e2) => __async(this, null, function* () {
      const r2 = yield u$2(a2.fetchFeatures(this, t2.featureCount, e2));
      this.state.type === 3 && (this.state = this.gotoFetchedFeatures(this.state, r2.ok ? r2.value : []));
    })) };
  }
  gotoFetchedFeatures(t2, e2) {
    return { type: 4, previous: t2, features: e2 };
  }
  goToDone(t2, e2) {
    return e2.finish(this, t2.features), { type: 5, previous: t2 };
  }
  reset() {
    const t2 = this.state;
    switch (this.state = { type: 0 }, t2.type) {
      case 0:
      case 2:
      case 4:
      case 5:
        break;
      case 1:
      case 3:
        t2.task.abort();
    }
  }
  intersects(e2) {
    return !(!t$2(e2) && this.data.extent) || (a(e2, i), F$1(this.data.extent, i));
  }
}
const i = i$2();
const O = n$1.getLogger("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher");
let x = class extends d {
  constructor(e2) {
    super(e2), this.tilesOfInterest = [], this.availability = 0, this.pendingTiles = new Map(), this.pendingEdits = new r(), this.pendingEditsAbortController = h();
  }
  get minimumVerticesPerFeature() {
    var e2;
    switch ((e2 = this.store) == null ? void 0 : e2.featureStore.geometryType) {
      case "esriGeometryPoint":
      case "esriGeometryMultipoint":
        return 1;
      case "esriGeometryPolygon":
        return 4;
      case "esriGeometryPolyline":
        return 2;
    }
  }
  set filter(e2) {
    const t2 = this._get("filter"), i2 = this.filterProperties(e2);
    JSON.stringify(t2) !== JSON.stringify(i2) && this._set("filter", i2);
  }
  set customParameters(e2) {
    const t2 = this._get("customParameters");
    JSON.stringify(t2) !== JSON.stringify(e2) && this._set("customParameters", e2);
  }
  get configuration() {
    return { filter: this.filter, customParameters: this.customParameters, tileInfo: this.tileInfo, tileSize: this.tileSize };
  }
  set tileInfo(e2) {
    const i2 = this._get("tileInfo");
    i2 !== e2 && (r$2(e2) && r$2(i2) && JSON.stringify(e2) === JSON.stringify(i2) || (this._set("tileInfo", e2), this.store.tileInfo = e2));
  }
  set tileSize(e2) {
    this._get("tileSize") !== e2 && this._set("tileSize", e2);
  }
  get updating() {
    return this.updatingHandles.updating || this.pendingEdits.updating;
  }
  initialize() {
    this.initializeFetchExtent(), this.updatingHandles.add(this, "configuration", () => this.refresh()), this.updatingHandles.add(this, "tilesOfInterest", (e2, t2) => {
      l(e2, t2, ({ id: e3 }, { id: t3 }) => e3 === t3) || this.process();
    }, 1);
  }
  destroy() {
    this.pendingTiles.forEach((e2) => this.deletePendingTile(e2)), this.pendingTiles.clear(), this.store.destroy(), this.tilesOfInterest.length = 0, this.pendingEditsAbortController.abort(), this.pendingEditsAbortController = null;
  }
  refresh() {
    this.store.refresh(), this.pendingTiles.forEach((e2) => this.deletePendingTile(e2)), this.process();
  }
  applyEdits(e2) {
    this.pendingEdits.push(e2, (e3) => __async(this, null, function* () {
      if (e3.addedFeatures.length !== 0 || e3.updatedFeatures.length !== 0 || e3.deletedFeatures.length !== 0) {
        for (const [, e4] of this.pendingTiles)
          e4.reset();
        yield this.updatingHandles.addPromise(this.store.processEdits(e3, (e4, t2) => this.queryFeaturesById(e4, t2), this.pendingEditsAbortController.signal)), this.processPendingTiles();
      }
    }));
  }
  initializeFetchExtent() {
    if (!this.capabilities.query.supportsExtent)
      return;
    const e2 = F((e3) => __async(this, null, function* () {
      try {
        var t2;
        const i2 = yield S$1(this.url, new R({ where: "1=1", outSpatialReference: this.spatialReference, cacheHint: !!this.capabilities.query.supportsCacheHint || void 0 }), { query: this.configuration.customParameters, signal: e3 });
        this.store.extent = M.fromJSON((t2 = i2.data) == null ? void 0 : t2.extent);
      } catch (i2) {
        w$1(i2), O.error("Failed to fetch data extent", i2);
      }
    }));
    this.updatingHandles.addPromise(e2.promise.then(() => this.process())), this.handles.add(n$2(() => e2.abort())), this.fetchExtentTask = e2;
  }
  get debugInfo() {
    return { numberOfFeatures: this.store.featureStore.numFeatures, tilesOfInterest: this.tilesOfInterest, pendingTiles: Array.from(this.pendingTiles.values()).map((e2) => e2.debugInfo), storedTiles: this.store.debugInfo };
  }
  process() {
    !r$2(this.fetchExtentTask) || this.fetchExtentTask.finished ? (this.markTilesNotAlive(), this.createPendingTiles(), this.deletePendingTiles(), this.processPendingTiles()) : this.setAvailability(0);
  }
  markTilesNotAlive() {
    for (const [, e2] of this.pendingTiles)
      e2.alive = false;
  }
  createPendingTiles() {
    const e2 = this.collectMissingTilesInfo();
    if (this.setAvailability(t$2(e2) ? 1 : e2.coveredArea / e2.fullArea), !t$2(e2))
      for (const { data: t2, resolution: i2 } of e2.missingTiles) {
        const e3 = this.pendingTiles.get(t2.id);
        e3 ? (e3.resolution = i2, e3.alive = true) : this.createPendingTile(t2, i2);
      }
  }
  collectMissingTilesInfo() {
    let e2 = null;
    for (let t2 = this.tilesOfInterest.length - 1; t2 >= 0; t2--) {
      const s = this.tilesOfInterest[t2], r2 = this.store.process(s, (e3, t3) => this.verifyTileComplexity(e3, t3));
      t$2(e2) ? e2 = r2 : e2.prepend(r2);
    }
    return e2;
  }
  deletePendingTiles() {
    for (const [, e2] of this.pendingTiles)
      e2.alive || this.deletePendingTile(e2);
  }
  processPendingTiles() {
    const e2 = { fetchCount: (e3, t2) => this.fetchCount(e3, t2), fetchFeatures: (e3, t2, i2) => this.fetchFeatures(e3, t2, i2), finish: (e3, t2) => this.finishPendingTile(e3, t2), resume: () => this.processPendingTiles() };
    if (this.ensureFetchAllCounts(e2))
      for (const [, t2] of this.pendingTiles)
        this.verifyTileComplexity(this.store.getFeatureCount(t2.data), t2.resolution) && this.updatingHandles.addPromise(t2.process(e2));
  }
  verifyTileComplexity(e2, t2) {
    return this.verifyVertexComplexity(e2) && this.verifyFeatureDensity(e2, t2);
  }
  verifyVertexComplexity(e2) {
    return e2 * this.minimumVerticesPerFeature < j$2;
  }
  verifyFeatureDensity(e2, t2) {
    if (t$2(this.tileInfo))
      return false;
    const s = this.tileSize * t2;
    return e2 * (q / (s * s)) < E;
  }
  ensureFetchAllCounts(e2) {
    let t2 = true;
    for (const [, i2] of this.pendingTiles)
      i2.state.type < 2 && this.updatingHandles.addPromise(i2.process(e2)), i2.state.type <= 1 && (t2 = false);
    return t2;
  }
  finishPendingTile(e2, t2) {
    this.store.add(e2.data, t2), this.deletePendingTile(e2), this.updateAvailability();
  }
  updateAvailability() {
    const e2 = this.collectMissingTilesInfo();
    this.setAvailability(t$2(e2) ? 1 : e2.coveredArea / e2.fullArea);
  }
  setAvailability(e2) {
    this._set("availability", e2);
  }
  createPendingTile(e2, t2) {
    const i2 = new u(e2, t2);
    return this.pendingTiles.set(e2.id, i2), i2;
  }
  deletePendingTile(e2) {
    e2.reset(), this.pendingTiles.delete(e2.data.id);
  }
  fetchCount(e2, t2) {
    return __async(this, null, function* () {
      return this.store.fetchCount(e2.data, this.url, this.createCountQuery(e2), { query: this.customParameters, timeout: I, signal: t2 });
    });
  }
  fetchFeatures(e2, t2, i2) {
    return __async(this, null, function* () {
      let r2, n2 = 0, o2 = 0, a2 = t2;
      for (; ; ) {
        const l2 = this.createFeaturesQuery(e2), u2 = this.setPagingParameters(l2, n2, a2), { features: c2, exceededTransferLimit: h2 } = yield this.queryFeatures(l2, i2);
        if (u2 && (n2 += e$2(l2.num)), o2 += c2.length, r2 = r2 ? r2.concat(c2) : c2, a2 = t2 - o2, !u2 || !h2 || a2 <= 0)
          return r2;
      }
    });
  }
  filterProperties(e2) {
    return t$2(e2) ? { where: "1=1", gdbVersion: void 0, timeExtent: void 0 } : { where: e2.where || "1=1", timeExtent: e2.timeExtent, gdbVersion: e2.gdbVersion };
  }
  queryFeaturesById(e2, t2) {
    const i2 = this.createFeaturesQuery(null);
    return i2.objectIds = e2, this.queryFeatures(i2, t2);
  }
  queryFeatures(e2, t2) {
    return this.capabilities.query.supportsFormatPBF ? this.queryFeaturesPBF(e2, t2) : this.queryFeaturesJSON(e2, t2);
  }
  queryFeaturesPBF(e2, t2) {
    return __async(this, null, function* () {
      const { sourceSpatialReference: i2 } = this, { data: s } = yield c(this.url, e2, new n$3({ sourceSpatialReference: i2 }), { query: this.configuration.customParameters, timeout: I, signal: t2 });
      return re(s);
    });
  }
  queryFeaturesJSON(e2, t2) {
    return __async(this, null, function* () {
      const { sourceSpatialReference: i2 } = this, { data: s } = yield y$2(this.url, e2, i2, { query: this.configuration.customParameters, timeout: I, signal: t2 });
      return oe(s, this.objectIdField);
    });
  }
  createCountQuery(e2) {
    const t2 = this.createBaseQuery(e2);
    return this.capabilities.query.supportsCacheHint && (t2.cacheHint = true), t2;
  }
  createFeaturesQuery(e2) {
    const i2 = this.createBaseQuery(e2);
    return i2.outFields = [this.objectIdField], i2.returnGeometry = true, r$2(e2) && (this.capabilities.query.supportsResultType ? i2.resultType = "tile" : this.capabilities.query.supportsCacheHint && (i2.cacheHint = true)), i2;
  }
  createBaseQuery(e2) {
    const i2 = new R({ returnZ: false, returnM: false, geometry: r$2(this.tileInfo) && r$2(e2) ? o(e2.data.extent, this.tileInfo.spatialReference) : void 0 }), s = this.configuration.filter;
    return r$2(s) && (i2.where = s.where, i2.gdbVersion = s.gdbVersion, i2.timeExtent = s.timeExtent), i2.outSpatialReference = this.spatialReference, i2;
  }
  setPagingParameters(e2, t2, i2) {
    if (!this.capabilities.query.supportsPagination)
      return false;
    const { supportsMaxRecordCountFactor: s, supportsCacheHint: r2, tileMaxRecordCount: n2, maxRecordCount: o2, supportsResultType: a2 } = this.capabilities.query, l2 = s ? R.MAX_MAX_RECORD_COUNT_FACTOR : 1, u2 = l2 * ((a2 || r2) && n2 ? n2 : o2 || C$1);
    return e2.start = t2, s ? (e2.maxRecordCountFactor = Math.min(l2, Math.ceil(i2 / u2)), e2.num = Math.min(i2, e2.maxRecordCountFactor * u2)) : e2.num = Math.min(i2, u2), true;
  }
};
e$1([y$1({ constructOnly: true })], x.prototype, "url", void 0), e$1([y$1({ constructOnly: true })], x.prototype, "objectIdField", void 0), e$1([y$1({ constructOnly: true })], x.prototype, "capabilities", void 0), e$1([y$1({ constructOnly: true })], x.prototype, "sourceSpatialReference", void 0), e$1([y$1({ constructOnly: true })], x.prototype, "spatialReference", void 0), e$1([y$1({ constructOnly: true })], x.prototype, "store", void 0), e$1([y$1({ readOnly: true })], x.prototype, "minimumVerticesPerFeature", null), e$1([y$1()], x.prototype, "filter", null), e$1([y$1()], x.prototype, "customParameters", null), e$1([y$1({ readOnly: true })], x.prototype, "configuration", null), e$1([y$1()], x.prototype, "tileInfo", null), e$1([y$1()], x.prototype, "tileSize", null), e$1([y$1()], x.prototype, "tilesOfInterest", void 0), e$1([y$1({ readOnly: true })], x.prototype, "updating", null), e$1([y$1({ readOnly: true })], x.prototype, "availability", void 0), x = e$1([i$1("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher")], x);
const C$1 = 2e3, I = 6e5, j$2 = 1e6, q = 25, E = 1;
class t {
  constructor() {
    this._store = new Map(), this._byteSize = 0;
  }
  set(t2, e2) {
    this.delete(t2), this._store.set(t2, e2), this._byteSize += e2.byteSize;
  }
  delete(t2) {
    const e2 = this._store.get(t2);
    return !!this._store.delete(t2) && (this._byteSize -= e2.byteSize, true);
  }
  get(t2) {
    return this.used(t2), this._store.get(t2);
  }
  has(t2) {
    return this.used(t2), this._store.has(t2);
  }
  clear() {
    this._store.clear();
  }
  applyByteSizeLimit(t2, e2) {
    for (const [s, r2] of this._store) {
      if (this._byteSize <= t2)
        break;
      this.delete(s), e2(r2);
    }
  }
  values() {
    return this._store.values();
  }
  [Symbol.iterator]() {
    return this._store[Symbol.iterator]();
  }
  used(t2) {
    const e2 = this._store.get(t2);
    e2 && (this._store.delete(t2), this._store.set(t2, e2));
  }
}
let g = class extends u$1 {
  constructor(e2) {
    super(e2), this.tileInfo = null, this.extent = null, this.maximumByteSize = 10485760, this.tileBounds = new e$3(), this.tiles = new t(), this.refCounts = new Map(), this.tileFeatureCounts = new Map(), this.tmpBoundingRect = i$2();
  }
  add(e2, t2) {
    const s = [];
    for (const i2 of t2)
      this.referenceFeature(i2.objectId) === 0 && s.push(i2);
    this.addTileStorage(e2, new Set(t2.map(({ objectId: e3 }) => e3)), this.byteSizeOfFeatures(t2)), this.featureStore.addMany(s), this.tiles.applyByteSizeLimit(this.maximumByteSize, (e3) => this.removeTileStorage(e3));
  }
  destroy() {
    this.clear(), this.tileFeatureCounts.clear();
  }
  clear() {
    this.featureStore.clear(), this.tileBounds.clear(), this.tiles.clear(), this.refCounts.clear();
  }
  refresh() {
    this.clear(), this.tileFeatureCounts.clear();
  }
  processEdits(e2, t2, s) {
    return this.processEditsDelete(e2.deletedFeatures.concat(e2.updatedFeatures)), this.processEditsRefetch(e2.addedFeatures.concat(e2.updatedFeatures), t2, s);
  }
  addTileStorage(e2, t2, s) {
    this.tiles.set(e2.id, new y(e2, t2, s)), this.tileBounds.set(e2.id, e2.extent), this.tileFeatureCounts.set(e2.id, t2.size);
  }
  remove({ id: e2 }) {
    const t2 = this.tiles.get(e2);
    t2 && this.removeTileStorage(t2);
  }
  removeTileStorage(e2) {
    const t2 = [];
    for (const i2 of e2.objectIds)
      this.unreferenceFeature(i2) === 1 && t2.push(i2);
    this.featureStore.removeManyById(t2);
    const s = e2.data.id;
    this.tiles.delete(s), this.tileBounds.delete(s);
  }
  processEditsDelete(e2) {
    this.featureStore.removeManyById(e2);
    for (const [, t2] of this.tiles) {
      for (const s of e2)
        t2.objectIds.delete(s);
      this.tileFeatureCounts.set(t2.data.id, t2.objectIds.size);
    }
    for (const t2 of e2)
      this.refCounts.delete(t2);
  }
  processEditsRefetch(e2, t2, s) {
    return __async(this, null, function* () {
      const i2 = (yield t2(e2, s)).features, { hasZ: r2, hasM: o2 } = this.featureStore;
      for (const n2 of i2) {
        const e3 = fe(this.tmpBoundingRect, n2.geometry, r2, o2);
        this.tileBounds.forEachInBounds(e3, (e4) => {
          const t3 = this.tiles.get(e4);
          this.featureStore.add(n2), t3.objectIds.has(n2.objectId) || (t3.objectIds.add(n2.objectId), this.referenceFeature(n2.objectId), this.tileFeatureCounts.set(t3.data.id, t3.objectIds.size));
        });
      }
    });
  }
  process(e2, i2 = () => true) {
    if (t$2(this.tileInfo) || !e2.extent || r$2(this.extent) && !F$1(a(this.extent, this.tmpBoundingRect), e2.extent))
      return new S(e2);
    if (this.tiles.has(e2.id))
      return new S(e2);
    const r2 = this.createTileTree(e2, this.tileInfo);
    return this.simplify(r2, i2, null, 0, 1), this.collectMissingTiles(e2, r2, this.tileInfo);
  }
  get debugInfo() {
    return Array.from(this.tiles.values()).map(({ data: e2 }) => ({ data: e2, featureCount: this.tileFeatureCounts.get(e2.id) || 0 }));
  }
  getFeatureCount(e2) {
    const t2 = this.tileFeatureCounts.get(e2.id);
    return t2 != null ? t2 : 0;
  }
  fetchCount(e2, t2, s, i2) {
    return __async(this, null, function* () {
      const r2 = this.tileFeatureCounts.get(e2.id);
      if (r2 != null)
        return r2;
      const o2 = yield p(t2, s, i2);
      return this.tileFeatureCounts.set(e2.id, o2.data.count), o2.data.count;
    });
  }
  createTileTree(e2, t2) {
    const s = new v(e2.level, e2.row, e2.col);
    return t2.updateTileInfo(s, 1), this.tileBounds.forEachInBounds(e2.extent, (i2) => {
      const r2 = this.tiles.get(i2).data;
      this.tilesAreRelated(e2, r2) && this.populateChildren(s, r2, t2, this.tileFeatureCounts.get(r2.id) || 0);
    }), s;
  }
  tilesAreRelated(e2, t2) {
    if (!e2 || !t2)
      return false;
    if (e2.level === t2.level)
      return e2.row === t2.row && e2.col === t2.col;
    const s = e2.level < t2.level, i2 = s ? e2 : t2, r2 = s ? t2 : e2, o2 = 1 << r2.level - i2.level;
    return Math.floor(r2.row / o2) === i2.row && Math.floor(r2.col / o2) === i2.col;
  }
  populateChildren(e2, t2, i2, r2) {
    const o2 = t2.level - e2.level - 1;
    if (o2 < 0)
      return void (e2.isLeaf = true);
    const n2 = t2.row >> o2, l2 = t2.col >> o2, c2 = e2.row << 1, a2 = l2 - (e2.col << 1) + (n2 - c2 << 1), h2 = e2.children[a2];
    if (r$2(h2))
      this.populateChildren(h2, t2, i2, r2);
    else {
      const s = new v(e2.level + 1, n2, l2);
      i2.updateTileInfo(s, 1), e2.children[a2] = s, this.populateChildren(s, t2, i2, r2);
    }
  }
  simplify(e2, t2, i2, r2, o2) {
    const n2 = o2 * o2;
    if (e2.isLeaf)
      return t2(this.getFeatureCount(e2), o2) ? 0 : (this.remove(e2), r$2(i2) && (i2.children[r2] = null), n2);
    const l2 = o2 / 2, c2 = l2 * l2;
    let a2 = 0;
    for (let h2 = 0; h2 < e2.children.length; h2++) {
      const i3 = e2.children[h2];
      a2 += r$2(i3) ? this.simplify(i3, t2, e2, h2, l2) : c2;
    }
    return a2 === 0 ? this.mergeChildren(e2) : 1 - a2 / n2 < j$1 && (this.purge(e2), r$2(i2) && (i2.children[r2] = null), a2 = n2), a2;
  }
  mergeChildren(e2) {
    const t2 = new Set();
    let s = 0;
    this.forEachLeaf(e2, (e3) => {
      const i2 = this.tiles.get(e3.id);
      if (i2) {
        s += i2.byteSize;
        for (const e4 of i2.objectIds)
          t2.has(e4) || (t2.add(e4), this.referenceFeature(e4));
        this.remove(e3);
      }
    }), this.addTileStorage(e2, t2, s), e2.isLeaf = true, e2.children[0] = e2.children[1] = e2.children[2] = e2.children[3] = null, this.tileFeatureCounts.set(e2.id, t2.size);
  }
  forEachLeaf(e2, s) {
    for (const i2 of e2.children)
      t$2(i2) || (i2.isLeaf ? s(i2) : this.forEachLeaf(i2, s));
  }
  purge(e2) {
    if (!t$2(e2))
      if (e2.isLeaf)
        this.remove(e2);
      else
        for (let t2 = 0; t2 < e2.children.length; t2++) {
          const s = e2.children[t2];
          this.purge(s), e2.children[t2] = null;
        }
  }
  collectMissingTiles(e2, t2, s) {
    const i2 = new C(s, e2, this.extent);
    return this.collectMissingTilesRecurse(t2, i2, 1), i2.info;
  }
  collectMissingTilesRecurse(e2, s, i2) {
    if (e2.isLeaf)
      return;
    if (!e2.hasChildren)
      return void s.addMissing(e2.level, e2.row, e2.col, i2);
    const r2 = i2 / 2;
    for (let o2 = 0; o2 < e2.children.length; o2++) {
      const i3 = e2.children[o2];
      t$2(i3) ? s.addMissing(e2.level + 1, (e2.row << 1) + ((2 & o2) >> 1), (e2.col << 1) + (1 & o2), r2) : this.collectMissingTilesRecurse(i3, s, r2);
    }
  }
  referenceFeature(e2) {
    const t2 = (this.refCounts.get(e2) || 0) + 1;
    return this.refCounts.set(e2, t2), t2 === 1 ? 0 : 2;
  }
  unreferenceFeature(e2) {
    const t2 = (this.refCounts.get(e2) || 0) - 1;
    return t2 === 0 ? (this.refCounts.delete(e2), 1) : (t2 > 0 && this.refCounts.set(e2, t2), 2);
  }
  byteSizeOfFeatures(e2) {
    let t2 = 0;
    for (const s of e2)
      t2 += this.byteSizeOfFeature(s);
    return t2;
  }
  byteSizeOfFeature(e$12) {
    return 32 + this.byteSizeOfGeometry(e$12.geometry) + e(e$12.attributes);
  }
  byteSizeOfGeometry(e2) {
    if (!e2)
      return 0;
    const t2 = r$1(e2.lengths, 4);
    return 32 + r$1(e2.coords, 8) + t2;
  }
  get test() {
    return { tiles: Array.from(this.tiles.values()).map((e2) => `${e2.data.id}:[${Array.from(e2.objectIds)}]`), featureReferences: Array.from(this.refCounts.keys()).map((e2) => `${e2}:${this.refCounts.get(e2)}`) };
  }
};
e$1([y$1({ constructOnly: true })], g.prototype, "featureStore", void 0), e$1([y$1()], g.prototype, "tileInfo", void 0), e$1([y$1()], g.prototype, "extent", void 0), e$1([y$1()], g.prototype, "maximumByteSize", void 0), g = e$1([i$1("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTileStore")], g);
class y {
  constructor(e2, t2, s) {
    this.data = e2, this.objectIds = t2, this.byteSize = s;
  }
}
class v {
  constructor(e2, t2, s) {
    this.level = e2, this.row = t2, this.col = s, this.isLeaf = false, this.extent = null, this.children = [null, null, null, null];
  }
  get hasChildren() {
    return !this.isLeaf && (r$2(this.children[0]) || r$2(this.children[1]) || r$2(this.children[2]) || r$2(this.children[3]));
  }
}
class S {
  constructor(e2, t2 = []) {
    this.missingTiles = t2, this.fullArea = 0, this.coveredArea = 0, this.fullArea = l$1(e2.extent), this.coveredArea = this.fullArea;
  }
  prepend(e2) {
    this.missingTiles = e2.missingTiles.concat(this.missingTiles), this.coveredArea += e2.coveredArea, this.fullArea += e2.fullArea;
  }
}
class C {
  constructor(e2, t2, i2) {
    this.tileInfo = e2, this.extent = null, this.info = new S(t2), r$2(i2) && (this.extent = a(i2));
  }
  addMissing(e2, t2, i2, r2) {
    const o2 = { id: null, level: e2, row: t2, col: i2 };
    this.tileInfo.updateTileInfo(o2, 1), !r$2(o2.extent) || r$2(this.extent) && !F$1(this.extent, o2.extent) || (this.info.missingTiles.push({ data: o2, resolution: r2 }), this.info.coveredArea -= l$1(o2.extent));
  }
}
const j$1 = 0.18751;
let w = class extends n$4.EventedAccessor {
  constructor() {
    super(...arguments), this.isInitializing = true, this.whenSetup = E$1(), this.handles = new u$3(), this.updatingHandles = new l$2(), this.pendingApplyEdits = new Map();
  }
  get updating() {
    return this.featureFetcher.updating || this.isInitializing || this.updatingHandles.updating;
  }
  destroy() {
    this.featureFetcher.destroy(), this.queryEngine.destroy(), this.featureStore.clear(), this.handles.destroy();
  }
  setup(e2) {
    return __async(this, null, function* () {
      const { geometryType: t2, objectIdField: r2, timeInfo: i2, fields: s } = e2.serviceInfo;
      return this.featureStore = new u$4(__spreadProps(__spreadValues({}, e2.serviceInfo), { hasZ: false, hasM: false })), this.queryEngine = new Z({ spatialReference: e2.spatialReference, featureStore: this.featureStore, geometryType: t2, fields: s, hasZ: false, hasM: false, objectIdField: r2, timeInfo: i2 ? c$1.fromJSON(i2) : null }), this.featureFetcher = new x({ store: new g({ featureStore: this.featureStore }), url: e2.serviceInfo.url, objectIdField: e2.serviceInfo.objectIdField, capabilities: e2.serviceInfo.capabilities, spatialReference: k.fromJSON(e2.spatialReference), sourceSpatialReference: k.fromJSON(e2.serviceInfo.spatialReference) }), this.handles.add([this.featureFetcher.watch("availability", (e3) => this.emit("notify-availability", { availability: e3 }), true), this.watch("updating", () => this.notifyUpdating())]), this.whenSetup.resolve(), this.isInitializing = false, this.configure(e2.configuration);
    });
  }
  configure(e2) {
    return __async(this, null, function* () {
      return yield this.updatingHandles.addPromise(this.whenSetup.promise), this.updateFeatureFetcherConfiguration(e2), { result: {} };
    });
  }
  fetchCandidates(e2, r2) {
    return __async(this, null, function* () {
      yield this.whenSetup.promise, a$1(r2);
      return { result: yield this.queryEngine.executeQueryForSnapping({ point: e2.point, distance: e2.distance, types: e2.types, query: r$2(e2.filter) ? e2.filter : { where: "1=1" } }, r$2(r2) ? r2.signal : null) };
    });
  }
  updateTiles(e2, r2) {
    return __async(this, null, function* () {
      return yield this.updatingHandles.addPromise(this.whenSetup.promise), a$1(r2), this.featureFetcher.tileSize = e2.tileSize, this.featureFetcher.tilesOfInterest = e2.tiles, this.featureFetcher.tileInfo = r$2(e2.tileInfo) ? x$1.fromJSON(e2.tileInfo) : null, { result: {} };
    });
  }
  refresh(e2, t2) {
    return __async(this, null, function* () {
      return yield this.updatingHandles.addPromise(this.whenSetup.promise), a$1(t2), this.featureFetcher.refresh(), { result: {} };
    });
  }
  whenNotUpdating(e2, t2) {
    return __async(this, null, function* () {
      return yield this.updatingHandles.addPromise(this.whenSetup.promise), a$1(t2), yield d$1(A(this, "updating"), t2), { result: {} };
    });
  }
  getDebugInfo(e2, t2) {
    return __async(this, null, function* () {
      return a$1(t2), { result: this.featureFetcher.debugInfo };
    });
  }
  beginApplyEdits(e2, t2) {
    return __async(this, null, function* () {
      this.updatingHandles.addPromise(this.whenSetup.promise), a$1(t2);
      const r2 = E$1();
      return this.pendingApplyEdits.set(e2.id, r2), this.featureFetcher.applyEdits(r2.promise), this.updatingHandles.addPromise(r2.promise), { result: {} };
    });
  }
  endApplyEdits(e2, t2) {
    return __async(this, null, function* () {
      const r2 = this.pendingApplyEdits.get(e2.id);
      return r2 && r2.resolve(e2.edits), a$1(t2), { result: {} };
    });
  }
  updateFeatureFetcherConfiguration(e2) {
    this.featureFetcher.filter = r$2(e2.filter) ? R.fromJSON(e2.filter) : null, this.featureFetcher.customParameters = e2.customParameters;
  }
  notifyUpdating() {
    this.emit("notify-updating", { updating: this.updating });
  }
};
function j() {
  return new w();
}
e$1([y$1({ readOnly: true })], w.prototype, "updating", null), e$1([y$1()], w.prototype, "isInitializing", void 0), w = e$1([i$1("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorker")], w);
export default j;
export { w as FeatureServiceSnappingSourceWorker };
