var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __pow = Math.pow;
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
import { a4 as n$2, ae as e$2, af as y$1, cr as M, hq as o$2, bF as k, eP as x$4, e0 as f$1, ag as i$2, hL as y$2, b7 as S$1, aj as U, a5 as r$2, _ as j$1, dA as a$1, el as n$5, aa as s$1, b$ as e$3, bI as h$2, al as v$1, eS as r$4, dQ as e$4, c4 as o$3, dR as g$3, dd as A$1, am as m$3, hM as n$6, dD as U$2, fc as j$3, hp as o$5, gR as t$3, gS as s$2, gT as o$6, dY as l$3, dZ as u$5, d_ as l$4, e1 as b$2, e6 as y$4, gX as a$2, gV as N$1, hj as d$5, M as M$3 } from "./vendor.74d5941c.js";
import { a as n$3, d as d$1, K, M as M$1, V, j, b as n$4, p as p$4, i as i$4 } from "./rasterRendererHelper.c783c0d1.js";
import { N, T as T$1, r as r$3, p as p$3, D, a as r$6, b as b$1, y as y$3, c as n$7, x as x$6, E as E$1 } from "./RasterSymbolizer.07b5503f.js";
import { p as p$2, C, U as U$1, r as r$5, o as o$4, d as d$4, u as u$4 } from "./pixelUtils.5399eb4b.js";
import { h as h$1, d as d$2, j as j$2, M as M$2, g as g$2, R as R$1 } from "./rasterProjectionHelper.3405c919.js";
import { i as i$3, m as m$2, x as x$5, d as d$3, h as h$3 } from "./RawBlockCache.0fd02a44.js";
import "./vectorFieldUtils.cdd2fa8a.js";
import "./_commonjsHelpers.f2a458db.js";
import "./LercCodec.7b2d60e1.js";
const J = n$2.getLogger("esri.layers.mixins.ImageryTileMixin"), x$3 = (r2) => {
  let x2 = class extends r2 {
    constructor() {
      super(...arguments), this._rasterJobHandler = { instance: null, refCount: 0, connectionPromise: null }, this.bandIds = null, this.copyright = null, this.fullExtent = null, this.interpolation = "nearest", this.raster = null, this.rasterInfo = null, this.sourceJSON = null, this.spatialReference = null, this.tileInfo = null, this.symbolizer = null;
    }
    set multidimensionalDefinition(e2) {
      this.raster && (this._sliceId = this.raster.getSliceIndex(e2)), this._set("multidimensionalDefinition", e2);
    }
    set url(e2) {
      this._set("url", y$2(e2, J));
    }
    set renderer(e2) {
      this._set("renderer", e2), this.updateRenderer();
    }
    updateRenderer() {
      return __async(this, null, function* () {
        if (!this.loaded)
          return;
        if (JSON.stringify(this._cachedRendererJson) === JSON.stringify(this.renderer))
          return;
        const e2 = this._rasterJobHandler.instance;
        e2 && (this.symbolizer.rendererJSON = K(this.renderer.toJSON()), this.symbolizer.bind(), yield e2.updateSymbolizer(this.symbolizer), this._cachedRendererJson = this.renderer.toJSON());
      });
    }
    applyRenderer(e2, t2) {
      return __async(this, null, function* () {
        const r3 = e2 && e2.pixelBlock;
        if (!(r3 && r3.pixels && r3.pixels.length > 0))
          return null;
        let i2;
        this.updateRenderer();
        const s2 = this._rasterJobHandler.instance, { bandIds: n2 } = this;
        return i2 = s2 ? yield s2.symbolize(__spreadProps(__spreadValues({}, e2), { simpleStretchParams: t2, bandIds: n2 })) : this.symbolizer.symbolize(__spreadProps(__spreadValues({}, e2), { simpleStretchParams: t2, bandIds: n2 })), i2;
      });
    }
    getTileUrl(e2, t2, r3) {
      return this.raster.datasetFormat === "RasterTileServer" ? `${this.url}/tile/${e2}/${t2}/${r3}` : "";
    }
    getCompatibleTileInfo(e2, t2) {
      if (!this.loaded)
        return null;
      const r3 = S$1(e2);
      return x$4.create({ size: 256, spatialReference: e2, origin: r3 ? { x: r3.origin[0], y: r3.origin[1] } : { x: t2.xmin, y: t2.ymax } });
    }
    getCompatibleFullExtent(e2) {
      return this.loaded ? (this._compatibleFullExtent && this._compatibleFullExtent.spatialReference.equals(e2) || (this._compatibleFullExtent = this.raster.computeExtent(e2)), this._compatibleFullExtent) : null;
    }
    fetchTile(_0, _1, _2) {
      return __async(this, arguments, function* (e2, t2, r3, i2 = {}) {
        if (i2.requestAsImageElement) {
          const s3 = this.getTileUrl(e2, t2, r3);
          return U(s3, { responseType: "image", query: { sliceId: this._sliceId, _ts: i2.timestamp }, signal: i2.signal }).then((e3) => e3.data);
        }
        yield this._initJobHandler();
        const s2 = this.renderer.type === "raster-shaded-relief" ? { cols: 1, rows: 1 } : null;
        if (this.multidimensionalDefinition) {
          const e3 = this._sliceId;
          i2 = __spreadValues({ multidimensionalDefinition: this.multidimensionalDefinition, sliceId: e3, buffer: s2 }, i2);
        }
        return this.raster.fetchTile(e2, t2, r3, i2);
      });
    }
    fetchPixels(e2, t2, r3, i2) {
      return __async(this, null, function* () {
        if (yield this._initJobHandler(), this.multidimensionalDefinition) {
          const e3 = this._sliceId;
          i2 = __spreadValues({ multidimensionalDefinition: this.multidimensionalDefinition, sliceId: e3 }, i2);
        }
        return this.raster.fetchPixels(e2, t2, r3, i2);
      });
    }
    identify(e2, t2 = {}) {
      return this.multidimensionalDefinition && !t2.multidimensionalDefinition && (t2 = __spreadProps(__spreadValues({}, t2), { multidimensionalDefinition: this.multidimensionalDefinition })), this.raster.identify(e2, t2);
    }
    increaseRasterJobHandlerUsage() {
      this._rasterJobHandler.refCount++;
    }
    decreaseRasterJobHandlerUsage() {
      this._rasterJobHandler.refCount--, this._rasterJobHandler.refCount <= 0 && this._shutdownJobHandler();
    }
    _configDefaultSettings() {
      this._configDefaultInterpolation(), this._configDefaultSlice(), this._configDefaultRenderer();
    }
    _initJobHandler() {
      if (this._rasterJobHandler.connectionPromise != null)
        return this._rasterJobHandler.connectionPromise;
      const e2 = new n$4();
      return this._rasterJobHandler.connectionPromise = e2.initialize().then(() => {
        this._rasterJobHandler.instance = e2, this.raster.rasterJobHandler = e2, this.renderer && this.updateRenderer();
      }).catch(() => null), this._rasterJobHandler.connectionPromise;
    }
    _shutdownJobHandler() {
      this._rasterJobHandler.instance && this._rasterJobHandler.instance.destroy(), this._rasterJobHandler.instance = null, this._rasterJobHandler.connectionPromise = null, this._rasterJobHandler.refCount = 0, this.raster.rasterJobHandler = null;
    }
    _configDefaultInterpolation() {
      if (this.interpolation == null) {
        var e2;
        const t2 = M$1(this.rasterInfo, this.raster.tileType, (e2 = this.sourceJSON) == null ? void 0 : e2.defaultResamplingMethod);
        this._set("interpolation", t2);
      }
    }
    _configDefaultSlice() {
      const { multidimensionalInfo: e2 } = this.raster.rasterInfo;
      if (r$2(e2)) {
        if (!this.multidimensionalDefinition) {
          const t2 = e2.variables[0], r3 = [];
          t2.dimensions.forEach((e3) => {
            r3.push(new n$3({ variableName: t2.name, dimensionName: e3.name, values: e3.hasRegularIntervals ? e3.extent[0] : e3.values[0], isSlice: true }));
          }), this.multidimensionalDefinition = r3;
        }
        this._sliceId = this.raster.getSliceIndex(this.multidimensionalDefinition);
      }
    }
    _configDefaultRenderer() {
      const e2 = this.raster.rasterInfo;
      var t2, r3;
      (this.bandIds || (this.bandIds = V(e2)), this.renderer) || (this.renderer = j(e2, { bandIds: this.bandIds, variableName: (t2 = this.multidimensionalDefinition) == null || (r3 = t2[0]) == null ? void 0 : r3.variableName }));
      this.symbolizer ? (this.symbolizer.rendererJSON = K(this.renderer.toJSON()), this.symbolizer.rasterInfo = e2) : this.symbolizer = new N({ rendererJSON: this.renderer.toJSON(), rasterInfo: e2 }), this.symbolizer.bind() || J.warn("imagery-tile-mixin", "The given renderer is not supported by the layer.");
    }
  };
  return e$2([y$1()], x2.prototype, "_cachedRendererJson", void 0), e$2([y$1()], x2.prototype, "_sliceId", void 0), e$2([y$1()], x2.prototype, "_compatibleFullExtent", void 0), e$2([y$1()], x2.prototype, "_rasterJobHandler", void 0), e$2([y$1()], x2.prototype, "bandIds", void 0), e$2([y$1()], x2.prototype, "copyright", void 0), e$2([y$1({ type: M }), o$2("rasterInfo.extent")], x2.prototype, "fullExtent", void 0), e$2([y$1()], x2.prototype, "interpolation", void 0), e$2([y$1()], x2.prototype, "ioConfig", void 0), e$2([y$1({ type: [n$3] })], x2.prototype, "multidimensionalDefinition", null), e$2([y$1()], x2.prototype, "raster", void 0), e$2([y$1({ readOnly: true }), o$2("raster.rasterInfo")], x2.prototype, "rasterInfo", void 0), e$2([y$1()], x2.prototype, "sourceJSON", void 0), e$2([y$1({ type: k }), o$2("rasterInfo.spatialReference")], x2.prototype, "spatialReference", void 0), e$2([y$1({ type: x$4 }), o$2("rasterInfo.storageInfo.tileInfo")], x2.prototype, "tileInfo", void 0), e$2([y$1(f$1)], x2.prototype, "url", null), e$2([y$1({ types: d$1 })], x2.prototype, "renderer", null), e$2([y$1()], x2.prototype, "symbolizer", void 0), x2 = e$2([i$2("esri.layers.ImageryTileMixin")], x2), x2;
};
let s = class extends a$1 {
  constructor() {
    super(...arguments), this.blockWidth = void 0, this.blockHeight = void 0, this.compression = null, this.origin = null, this.firstPyramidLevel = null, this.maximumPyramidLevel = null, this.pyramidScalingFactor = 2, this.pyramidBlockWidth = null, this.pyramidBlockHeight = null, this.isVirtualTileInfo = false, this.tileInfo = null, this.blockBoundary = null;
  }
};
e$2([y$1({ type: Number, json: { write: true } })], s.prototype, "blockWidth", void 0), e$2([y$1({ type: Number, json: { write: true } })], s.prototype, "blockHeight", void 0), e$2([y$1({ type: String, json: { write: true } })], s.prototype, "compression", void 0), e$2([y$1({ type: j$1, json: { write: true } })], s.prototype, "origin", void 0), e$2([y$1({ type: Number, json: { write: true } })], s.prototype, "firstPyramidLevel", void 0), e$2([y$1({ type: Number, json: { write: true } })], s.prototype, "maximumPyramidLevel", void 0), e$2([y$1()], s.prototype, "pyramidScalingFactor", void 0), e$2([y$1({ type: Number, json: { write: true } })], s.prototype, "pyramidBlockWidth", void 0), e$2([y$1({ type: Number, json: { write: true } })], s.prototype, "pyramidBlockHeight", void 0), e$2([y$1({ type: Boolean, json: { write: true } })], s.prototype, "isVirtualTileInfo", void 0), e$2([y$1({ json: { write: true } })], s.prototype, "tileInfo", void 0), e$2([y$1()], s.prototype, "blockBoundary", void 0), s = e$2([i$2("esri.layers.support.RasterStorageInfo")], s);
var p$1 = s;
let S = class extends n$5(a$1) {
  constructor() {
    super(...arguments), this.rasterJobHandler = null, this.datasetName = null, this.datasetFormat = null, this.rasterInfo = null, this.ioConfig = { sampling: "closest" };
  }
  init() {
    return __async(this, null, function* () {
      const e2 = h$1();
      this.addResolvingPromise(e2), yield this.when();
    });
  }
  normalizeCtorArgs(e2) {
    return e2 && e2.ioConfig && (e2 = __spreadProps(__spreadValues({}, e2), { ioConfig: __spreadValues({ resolution: null, bandIds: null, sampling: "closest", tileInfo: x$4.create() }, e2.ioConfig) })), e2;
  }
  set url(e2) {
    this._set("url", y$2(e2, n$2.getLogger(this.declaredClass)));
  }
  open(e2) {
    return __async(this, null, function* () {
      throw new s$1("BaseRaster:open-not-implemented", "open() is not implemented");
    });
  }
  fetchTile(_0, _1, _2) {
    return __async(this, arguments, function* (e2, r2, o2, i2 = {}) {
      var n2;
      const { tileInfo: s2 } = i2, a2 = s2.lodAt(e2), l2 = this.getTileExtent({ x: a2.resolution, y: a2.resolution }, r2, o2, s2.origin, s2.spatialReference, s2.size);
      return (n2 = i2.multidimensionalDefinition) != null && n2.length && r$2(this.rasterInfo.multidimensionalInfo) && i2.sliceId == null && (i2 = __spreadProps(__spreadValues({}, i2), { sliceId: this.getSliceIndex(i2.multidimensionalDefinition) || 0 })), this.fetchPixels(l2, s2.size[0], s2.size[1], i2);
    });
  }
  identify(_0) {
    return __async(this, arguments, function* (e2, r2 = {}) {
      const { spatialReference: o2, extent: i2 } = this.rasterInfo, { datumTransformation: n2 } = r2;
      let s2 = d$2(e2, o2, n2);
      if (!i2.intersects(s2))
        return { location: s2, value: null };
      if (r$2(this.rasterInfo.transform)) {
        const e3 = this.rasterInfo.transform.inverseTransform(s2);
        if (!this.rasterInfo.nativeExtent.intersects(e3))
          return { location: e3, value: null };
        s2 = e3;
      }
      let a2 = 0;
      if (r2.srcResolution) {
        a2 = j$2(r2.srcResolution, this.rasterInfo, this.ioConfig.sampling).pyramidLevel;
      } else if (a2 = yield this.computeBestPyramidLevelForLocation(e2, r2), a2 == null)
        return { location: s2, value: null };
      const l2 = this.identifyPixelLocation(s2, a2, null);
      if (l2 === null)
        return { location: s2, value: null };
      const { row: c2, col: u2, rowOffset: m2, colOffset: f2 } = l2, h2 = i$3(this.url, r2.sliceId), d2 = `${a2}/${c2}/${u2}`;
      let p2 = m$2(h2, null, d2);
      r$2(p2) || (p2 = this.fetchRawTile(a2, c2, u2, r2), x$5(h2, null, d2, p2));
      const x2 = yield p2;
      if (!(x2 && x2.pixels && x2.pixels.length > 0))
        return { location: s2, value: null };
      const y2 = m2 * this.rasterInfo.storageInfo.blockHeight + f2;
      return { location: s2, value: !x2.mask || x2.mask[y2] ? x2.pixels.map((e3) => e3[y2]) : null, pyramidLevel: a2 };
    });
  }
  fetchPixels(_0, _1, _2) {
    return __async(this, arguments, function* (e2, t2, o2, i2 = {}) {
      const n2 = e2.clone().normalize();
      e2 = n2[0];
      const s2 = this.rasterInfo.spatialReference, a2 = !e2.spatialReference.equals(s2), { datumTransformation: l2 } = i2, c2 = new j$1({ x: (e2.xmax - e2.xmin) / t2, y: (e2.ymax - e2.ymin) / o2, spatialReference: e2.spatialReference }), m2 = i2.srcResolution || (a2 ? M$2(c2, s2, e2, l2) : c2);
      if (!m2)
        return null;
      const { pyramidLevel: f2, pyramidResolution: h2, excessiveReading: d2 } = j$2(m2, this.rasterInfo, this.ioConfig.sampling);
      if (d2)
        return null;
      const p2 = this.rasterInfo.storageInfo;
      let x2 = a2 ? g$2(e2, s2, l2) : e2;
      const y2 = e$3(this.rasterInfo.transform);
      if (y2 && (x2 = y2.inverseTransform(x2)), x2 == null)
        return null;
      const I2 = { x: Math.floor((x2.xmin - p2.origin.x) / h2.x + 0.1), y: Math.floor((p2.origin.y - x2.ymax) / h2.y + 0.1) }, k2 = Math.ceil((x2.xmax - x2.xmin) / h2.x - 0.1), v2 = Math.ceil((x2.ymax - x2.ymin) / h2.y - 0.1);
      if (k2 / t2 > 8 || v2 / o2 > 8)
        return null;
      const B = yield this.fetchRawPixels(f2, I2, { width: k2, height: v2 }, i2);
      if (!B)
        return null;
      const P = f2 > 0 ? p2.pyramidBlockWidth : p2.blockWidth, j2 = f2 > 0 ? p2.pyramidBlockHeight : p2.blockHeight;
      if (!a2 && B.pixelBlocks.length === 1 && P === t2 && j2 === o2 && m2.x === c2.x && m2.y === c2.y)
        return { extent: e2, srcExtent: x2, pixelBlock: B.pixelBlocks[0] };
      const T2 = R$1(e2, B.extent, c2, l2, y2);
      let F;
      const S2 = !i2.requestRawData, L2 = { rows: T2.spacing[0], cols: T2.spacing[1] }, { pixelBlocks: D2, mosaicSize: H, isPartiallyFilled: U2 } = B;
      if (this.rasterJobHandler)
        F = yield this.rasterJobHandler.mosaicAndTransform({ srcPixelBlocks: D2, srcMosaicSize: H, destDimension: S2 ? { width: t2, height: o2 } : null, coefs: S2 ? T2.coefficients : null, sampleSpacing: S2 ? L2 : null, interpolation: i2.interpolation }, i2);
      else {
        const e3 = p$2(D2, H);
        F = S2 ? C(e3, { width: t2, height: o2 }, T2.coefficients, L2, i2.interpolation) : e3;
      }
      return i2.requestRawData ? { srcExtent: x2, pixelBlock: F, transformGrid: T2, extent: e2, isPartiallyFilled: U2 } : { srcExtent: x2, extent: e2, pixelBlock: F };
    });
  }
  fetchRawPixels(e2, t2, r2, o2) {
    return __async(this, null, function* () {
      const { origin: i2, blockBoundary: n2 } = this.rasterInfo.storageInfo, { blockWidth: s2, blockHeight: a2 } = this.getBlockWidthHeight(e2);
      let { x: l2, y: c2 } = t2, { width: u2, height: f2 } = r2;
      o2.buffer && (l2 -= o2.buffer.cols, c2 -= o2.buffer.rows, u2 += 2 * o2.buffer.cols, f2 += 2 * o2.buffer.rows);
      const h2 = Math.floor(l2 / s2), d2 = Math.floor(c2 / a2), p2 = Math.floor((l2 + u2 - 1) / s2), x2 = Math.floor((c2 + f2 - 1) / a2), y2 = n2[e2];
      if (!y2)
        return null;
      const { minRow: g2, minCol: w2, maxCol: I2, maxRow: k2 } = y2;
      if (x2 < g2 || p2 < w2 || d2 > k2 || h2 > I2)
        return null;
      const v2 = [];
      let R2, b2 = false;
      for (let m2 = d2; m2 <= x2; m2++)
        for (let t3 = h2; t3 <= p2; t3++)
          m2 >= g2 && t3 >= w2 && k2 >= m2 && I2 >= t3 ? (R2 = this._fetchRawTile(e2, m2, t3, o2), this.ioConfig.allowPartialFill && (R2 = new Promise((e3) => {
            R2.then((t4) => e3(t4)).catch(() => {
              b2 = true, e3(null);
            });
          })), v2.push(R2)) : v2.push(null);
      if (v2.length === 0)
        return null;
      const M$12 = yield Promise.all(v2), C2 = { height: (x2 - d2 + 1) * s2, width: (p2 - h2 + 1) * a2 }, { nativePixelSize: B, spatialReference: P } = this.rasterInfo, j2 = B.x * __pow(2, e2), T2 = B.y * __pow(2, e2);
      return { extent: new M({ xmin: i2.x + h2 * s2 * j2, xmax: i2.x + (p2 + 1) * s2 * j2, ymin: i2.y - (x2 + 1) * a2 * T2, ymax: i2.y - d2 * a2 * T2, spatialReference: P }), pixelBlocks: M$12, mosaicSize: C2, isPartiallyFilled: b2 };
    });
  }
  fetchRawTile(e2, t2, r2, o2) {
    return __async(this, null, function* () {
      throw new s$1("BaseRaster:read-not-implemented", "fetchRawTile() is not implemented");
    });
  }
  computeExtent(e2) {
    return g$2(this.rasterInfo.extent, e2);
  }
  decodePixelBlock(e2, t2) {
    return !this.rasterJobHandler || t2.useCanvas ? T$1(e2, t2) : this.rasterJobHandler.decode({ data: e2, options: t2 });
  }
  request(e2, t2, r2) {
    return __async(this, null, function* () {
      var o2, i2;
      const { customFetchParameters: n2 } = this.ioConfig, { range: s2, query: a2, headers: l2 } = t2;
      r2 = (o2 = (i2 = r2) != null ? i2 : t2.retryCount) != null ? o2 : this.ioConfig.retryCount;
      const c2 = s2 ? { Range: `bytes=${s2.from}-${s2.to}` } : null;
      try {
        return yield U(e2, __spreadProps(__spreadValues({}, t2), { query: __spreadValues(__spreadValues({}, a2), n2), headers: __spreadValues(__spreadValues({}, l2), c2) }));
      } catch (u2) {
        if (r2 > 0)
          return r2--, this.request(e2, t2, r2);
        throw u2;
      }
    });
  }
  getSliceIndex(e2) {
    const { multidimensionalInfo: r2 } = this.rasterInfo;
    if (!r$2(r2) || e2 == null || !e2.length)
      return null;
    let o2 = 0;
    const i2 = e2[0].variableName;
    for (let t2 = 0; t2 < r2.variables.length; t2++) {
      const n2 = r2.variables[t2], s2 = n2.dimensions;
      if (n2.name !== i2) {
        o2 += s2.map((e3) => this._getDimensionValuesCount(e3)).reduce((e3, t3) => e3 + t3);
        break;
      }
      const a2 = s2.map((e3) => this._getDimensionValuesCount(e3)), l2 = s2.length;
      for (let t3 = 0; t3 < l2; t3++) {
        const r3 = e2.filter((e3) => e3.dimensionName === s2[t3].name)[0];
        if (r3 == null)
          return null;
        const i3 = Array.isArray(r3.values[0]) ? r3.values[0][0] : r3.values[0], n3 = this._getIndexFromDimensions(i3, s2[t3]);
        if (n3 === -1)
          return null;
        a2.shift(), o2 += t3 === l2 - 1 ? n3 : n3 * a2.reduce((e3, t4) => e3 + t4);
      }
    }
    return o2;
  }
  updateTileInfo() {
    const { storageInfo: e2, spatialReference: t2, extent: r2, pixelSize: o2 } = this.rasterInfo;
    if (!e2.tileInfo) {
      const i2 = [], n2 = e2.maximumPyramidLevel || 0;
      let s2 = Math.max(o2.x, o2.y), a2 = 1 / 0.0254 * 96 * s2;
      for (let e3 = 0; e3 <= n2; e3++)
        i2.push({ level: n2 - e3, resolution: s2, scale: a2 }), s2 *= 2, a2 *= 2;
      const l2 = new j$1({ x: r2.xmin, y: r2.ymax, spatialReference: t2 });
      e2.tileInfo = new x$4({ origin: l2, size: [e2.blockWidth, e2.blockHeight], spatialReference: t2, lods: i2 }), e2.isVirtualTileInfo = true;
    }
  }
  createRemoteDatasetStorageInfo(e2, t2 = 512, r2 = 512, o2) {
    const { width: i2, height: n2, nativeExtent: s2, pixelSize: a2, spatialReference: l2 } = e2, c2 = new j$1({ x: s2.xmin, y: s2.ymax, spatialReference: l2 });
    o2 == null && (o2 = Math.max(0, Math.round(Math.log(Math.max(i2, n2)) / Math.LN2 - 8)));
    const m2 = this._computeBlockBoundary(s2, a2, o2, 512, 512);
    e2.storageInfo = new p$1({ blockWidth: t2, blockHeight: r2, pyramidBlockWidth: t2, pyramidBlockHeight: r2, origin: c2, firstPyramidLevel: 1, maximumPyramidLevel: o2, blockBoundary: m2 });
  }
  computeBestPyramidLevelForLocation(_0) {
    return __async(this, arguments, function* (e2, t2 = {}) {
      return 0;
    });
  }
  identifyPixelLocation(e2, t2, r2) {
    const { spatialReference: o2, nativePixelSize: i2, nativeExtent: n2 } = this.rasterInfo, { blockWidth: s2, blockHeight: a2, maximumPyramidLevel: l2, pyramidScalingFactor: c2, origin: u2 } = this.rasterInfo.storageInfo, m2 = d$2(e2, o2, r2);
    if (!n2.intersects(m2))
      return null;
    if (t2 < 0 || t2 > l2)
      return null;
    const f2 = __pow(c2, t2), h2 = f2 * i2.x, d2 = f2 * i2.y, p2 = (u2.y - m2.y) / d2 / a2, x2 = (m2.x - u2.x) / h2 / s2, y2 = Math.min(a2 - 1, Math.floor((p2 - Math.floor(p2)) * a2)), g2 = Math.min(s2 - 1, Math.floor((x2 - Math.floor(x2)) * s2));
    return { pyramidLevel: t2, row: Math.floor(p2), col: Math.floor(x2), rowOffset: y2, colOffset: g2, srcLocation: m2 };
  }
  getTileExtent(e2, t2, r2, o2, i2, n2) {
    const [s2, a2] = n2, l2 = o2.x + r2 * s2 * e2.x, c2 = l2 + s2 * e2.x, u2 = o2.y - t2 * a2 * e2.y, f2 = u2 - a2 * e2.y;
    return new M({ xmin: l2, xmax: c2, ymin: f2, ymax: u2, spatialReference: i2 });
  }
  getBlockWidthHeight(e2) {
    return { blockWidth: e2 > 0 ? this.rasterInfo.storageInfo.pyramidBlockWidth : this.rasterInfo.storageInfo.blockWidth, blockHeight: e2 > 0 ? this.rasterInfo.storageInfo.pyramidBlockHeight : this.rasterInfo.storageInfo.blockHeight };
  }
  isBlockOutside(e2, t2, r2) {
    const o2 = this.rasterInfo.storageInfo.blockBoundary[e2];
    return !o2 || o2.maxRow < t2 || o2.maxCol < r2 || o2.minRow > t2 || o2.minCol > r2;
  }
  _computeBlockBoundary(e2, t2, r2, o2, i2) {
    let { x: n2, y: s2 } = t2;
    const a2 = e2.xmin, l2 = e2.ymax, c2 = [{ minCol: Math.floor((e2.xmin - a2 + 0.1 * n2) / o2 / n2), maxCol: Math.floor((e2.xmax - a2 - 0.1 * n2) / o2 / n2), minRow: Math.floor((l2 - e2.ymax + 0.1 * s2) / i2 / s2), maxRow: Math.floor((l2 - e2.ymin - 0.1 * s2) / i2 / s2) }];
    if (r2 > 0)
      for (let u2 = 0; u2 < r2; u2++)
        n2 *= 2, s2 *= 2, c2.push({ minCol: Math.floor((e2.xmin - a2 + 0.1 * n2) / o2 / n2), maxCol: Math.floor((e2.xmax - a2 - 0.1 * n2) / o2 / n2), minRow: Math.floor((l2 - e2.ymax + 0.1 * s2) / i2 / n2), maxRow: Math.floor((l2 - e2.ymin - 0.1 * s2) / i2 / n2) });
    return c2;
  }
  _fetchRawTile(e2, r2, o2, i2) {
    const n2 = this.rasterInfo.storageInfo.blockBoundary[e2];
    if (!n2)
      return Promise.resolve(null);
    const { minRow: s2, minCol: c2, maxCol: u2, maxRow: m2 } = n2;
    if (r2 < s2 || o2 < c2 || r2 > m2 || o2 > u2)
      return Promise.resolve(null);
    const f2 = i$3(this.url, i2.sliceId), h2 = `${e2}/${r2}/${o2}`;
    let d2 = m$2(f2, i2.registryId, h2);
    if (!r$2(d2)) {
      const t2 = h$2();
      d2 = this.fetchRawTile(e2, r2, o2, __spreadProps(__spreadValues({}, i2), { signal: t2.signal })), x$5(f2, i2.registryId, h2, d2, t2), d2.catch(() => {
        d$3(f2, i2.registryId, h2);
      });
    }
    return i2.signal && v$1(i2, () => {
      h$3(f2, i2.registryId, h2);
    }), d2;
  }
  _getIndexFromDimensions(e2, t2) {
    const { extent: r2, interval: o2, unit: i2, values: n2 } = t2;
    if (n2 != null && n2.length)
      return Array.isArray(n2[0]) ? n2.findIndex((t3) => t3[0] <= e2 && t3[1] >= e2) : n2.indexOf(e2);
    if (e2 > r2[1])
      return -1;
    const s2 = r2[0];
    let a2 = -1;
    if (i2 === "ISO8601") {
      var l2;
      switch (((l2 = t2.intervalUnit) == null ? void 0 : l2.toLowerCase()) || "seconds") {
        case "seconds":
          a2 = Math.round((e2 - s2) / 1e3 / o2);
          break;
        case "minutes":
          a2 = Math.round((e2 - s2) / 6e4 / o2);
          break;
        case "hours":
          a2 = Math.round((e2 - s2) / 36e5 / o2);
          break;
        case "days":
          a2 = Math.round((e2 - s2) / 864e5 / o2);
          break;
        case "years":
          a2 = Math.round((new Date(e2).getUTCFullYear() - new Date(s2).getUTCFullYear()) / o2);
          break;
        case "decades":
          a2 = Math.round((new Date(e2).getUTCFullYear() - new Date(s2).getUTCFullYear()) / 10 / o2);
      }
      return a2;
    }
    return Math.round((e2 - s2) / o2);
  }
  _getDimensionValuesCount(e2) {
    const { extent: t2, interval: r2, unit: o2, values: i2 } = e2;
    let n2 = (i2 == null ? void 0 : i2.length) || 0;
    if (n2)
      return n2;
    const s2 = t2[0];
    if (n2 === 0 && o2 === "ISO8601") {
      var a2;
      switch (((a2 = e2.intervalUnit) == null ? void 0 : a2.toLowerCase()) || "seconds") {
        case "seconds":
          n2 = Math.round((t2[1] - t2[0]) / 1e3 / r2);
          break;
        case "minutes":
          n2 = Math.round((t2[1] - t2[0]) / 6e4 / r2);
          break;
        case "hours":
          n2 = Math.round((t2[1] - t2[0]) / 36e5 / r2);
          break;
        case "days":
          n2 = Math.round((t2[1] - t2[0]) / 864e5 / r2);
          break;
        case "years":
          n2 = Math.round((new Date(t2[1]).getUTCFullYear() - new Date(s2).getUTCFullYear()) / r2);
          break;
        case "decades":
          n2 = Math.round((new Date(t2[1]).getUTCFullYear() - new Date(s2).getUTCFullYear()) / 10 / r2);
      }
      return n2;
    }
    return Math.round((t2[1] - t2[0]) / r2);
  }
};
e$2([y$1(f$1)], S.prototype, "url", null), e$2([y$1({ type: String, json: { write: true } })], S.prototype, "datasetName", void 0), e$2([y$1({ type: String, json: { write: true } })], S.prototype, "datasetFormat", void 0), e$2([y$1()], S.prototype, "rasterInfo", void 0), e$2([y$1()], S.prototype, "ioConfig", void 0), e$2([y$1()], S.prototype, "sourceJSON", void 0), S = e$2([i$2("esri.layers.support.rasterDatasets.BaseRaster")], S);
var L = S;
function t$2(e2) {
  const t2 = e2.fields, r2 = e2.records, n2 = t2.some((e3) => e3.name.toLowerCase() === "oid") ? "OBJECTID" : "OID", i2 = [{ name: n2, type: "esriFieldTypeOID", alias: "OID" }].concat(t2.map((e3) => ({ name: e3.name, type: "esriFieldType" + e3.typeName, alias: e3.name }))), s2 = i2.map((e3) => e3.name), a2 = [];
  let o2 = 0, l2 = 0;
  return r2.forEach((e3) => {
    const t3 = {};
    for (t3[n2] = o2++, l2 = 1; l2 < s2.length; l2++)
      t3[s2[l2]] = e3[l2 - 1];
    a2.push({ attributes: t3 });
  }), { displayFieldName: "", fields: i2, features: a2 };
}
class r$1 {
  static get supportedVersions() {
    return [5];
  }
  static parse(r2) {
    const n2 = new DataView(r2), i2 = 3 & n2.getUint8(0);
    if (i2 !== 3)
      return { header: { version: i2 }, recordSet: null };
    const s2 = n2.getUint32(4, true), a2 = n2.getUint16(8, true), o2 = n2.getUint16(10, true), l2 = { version: i2, recordCount: s2, headerByteCount: a2, recordByteCount: o2 };
    let p2 = 32;
    const g2 = [], u2 = [];
    let d2;
    if (i2 === 3) {
      for (; n2.getUint8(p2) !== 13; )
        d2 = String.fromCharCode(n2.getUint8(p2 + 11)).trim(), g2.push({ name: r$3(new Uint8Array(r2, p2, 11)), type: d2, typeName: ["String", "Date", "Double", "Boolean", "String", "Integer"][["C", "D", "F", "L", "M", "N"].indexOf(d2)], length: n2.getUint8(p2 + 16) }), p2 += 32;
      if (p2 += 1, g2.length > 0)
        for (; u2.length < s2 && r2.byteLength - p2 > o2; ) {
          const t2 = [];
          n2.getUint8(p2) === 32 ? (p2 += 1, g2.forEach((n3) => {
            if (n3.type === "C")
              t2.push(r$3(new Uint8Array(r2, p2, n3.length)).trim());
            else if (n3.type === "N")
              t2.push(parseInt(String.fromCharCode.apply(null, new Uint8Array(r2, p2, n3.length)).trim(), 10));
            else if (n3.type === "F")
              t2.push(parseFloat(String.fromCharCode.apply(null, new Uint8Array(r2, p2, n3.length)).trim()));
            else if (n3.type === "D") {
              const e2 = String.fromCharCode.apply(null, new Uint8Array(r2, p2, n3.length)).trim();
              t2.push(new Date(parseInt(e2.substring(0, 4), 10), parseInt(e2.substring(4, 6), 10) - 1, parseInt(e2.substring(6, 8), 10)));
            }
            p2 += n3.length;
          }), u2.push(t2)) : p2 += o2;
        }
    }
    return { header: l2, fields: g2, records: u2, recordSet: t$2({ fields: g2, records: u2 }) };
  }
}
let p = class extends a$1 {
  constructor() {
    super(...arguments), this.type = "identity";
  }
  forwardTransform(r2) {
    return r2;
  }
  inverseTransform(r2) {
    return r2;
  }
};
e$2([y$1({ json: { write: true } })], p.prototype, "spatialReference", void 0), e$2([r$4({ IdentityXform: "identity" })], p.prototype, "type", void 0), p = e$2([i$2("esri.layers.support.rasterTransforms.IdentityTransform")], p);
var i$1 = p;
function l$2(e2, r2, o2) {
  const { x: t2, y: s2 } = r2;
  if (o2 < 2) {
    return { x: e2[0] + t2 * e2[2] + s2 * e2[4], y: e2[1] + t2 * e2[3] + s2 * e2[5] };
  }
  if (o2 === 2) {
    const r3 = t2 * t2, o3 = s2 * s2, n3 = t2 * s2;
    return { x: e2[0] + t2 * e2[2] + s2 * e2[4] + r3 * e2[6] + n3 * e2[8] + o3 * e2[10], y: e2[1] + t2 * e2[3] + s2 * e2[5] + r3 * e2[7] + n3 * e2[9] + o3 * e2[11] };
  }
  const n2 = t2 * t2, i2 = s2 * s2, f2 = t2 * s2, p2 = n2 * t2, l2 = n2 * s2, c2 = t2 * i2, a2 = s2 * i2;
  return { x: e2[0] + t2 * e2[2] + s2 * e2[4] + n2 * e2[6] + f2 * e2[8] + i2 * e2[10] + p2 * e2[12] + l2 * e2[14] + c2 * e2[16] + a2 * e2[18], y: e2[1] + t2 * e2[3] + s2 * e2[5] + n2 * e2[7] + f2 * e2[9] + i2 * e2[11] + p2 * e2[13] + l2 * e2[15] + c2 * e2[17] + a2 * e2[19] };
}
function c$2(e2, r2, o2) {
  const { xmin: t2, ymin: s2, xmax: n2, ymax: i2, spatialReference: f2 } = r2;
  let c2 = [];
  if (o2 < 2)
    c2.push({ x: t2, y: i2 }), c2.push({ x: n2, y: i2 }), c2.push({ x: t2, y: s2 }), c2.push({ x: n2, y: s2 });
  else {
    let e3 = 10;
    for (let r3 = 0; r3 < e3; r3++)
      c2.push({ x: t2, y: s2 + (i2 - s2) * r3 / (e3 - 1) }), c2.push({ x: n2, y: s2 + (i2 - s2) * r3 / (e3 - 1) });
    e3 = 8;
    for (let r3 = 1; r3 <= e3; r3++)
      c2.push({ x: t2 + (n2 - t2) * r3 / e3, y: s2 }), c2.push({ x: t2 + (n2 - t2) * r3 / e3, y: i2 });
  }
  c2 = c2.map((r3) => l$2(e2, r3, o2));
  const a2 = c2.map((e3) => e3.x), u2 = c2.map((e3) => e3.y);
  return new M({ xmin: Math.min.apply(null, a2), xmax: Math.max.apply(null, a2), ymin: Math.min.apply(null, u2), ymax: Math.max.apply(null, u2), spatialReference: f2 });
}
function a(e2) {
  const [r2, o2, t2, s2, n2, i2] = e2, f2 = t2 * i2 - n2 * s2, p2 = n2 * s2 - t2 * i2;
  return [(n2 * o2 - r2 * i2) / f2, (t2 * o2 - r2 * s2) / p2, i2 / f2, s2 / p2, -n2 / f2, -t2 / p2];
}
let u$3 = class extends a$1 {
  constructor() {
    super(...arguments), this.polynomialOrder = 1, this.type = "polynomial";
  }
  readForwardCoefficients(e2, r2) {
    const { coeffX: o2, coeffY: t2 } = r2;
    if (o2 == null || !o2.length || t2 == null || !t2.length || o2.length !== t2.length)
      return null;
    const s2 = [];
    for (let n2 = 0; n2 < o2.length; n2++)
      s2.push(o2[n2]), s2.push(t2[n2]);
    return s2;
  }
  writeForwardCoefficients(e2, r2, o2) {
    const t2 = [], s2 = [];
    for (let n2 = 0; n2 < (e2 == null ? void 0 : e2.length); n2++)
      n2 % 2 == 0 ? t2.push(e2[n2]) : s2.push(e2[n2]);
    r2.coeffX = t2, r2.coeffY = s2;
  }
  get inverseCoefficients() {
    let e2 = this._get("inverseCoefficients");
    const r2 = this._get("forwardCoefficients");
    return !e2 && r2 && this.polynomialOrder < 2 && (e2 = a(r2)), e2;
  }
  set inverseCoefficients(e2) {
    this._set("inverseCoefficients", e2);
  }
  readInverseCoefficients(e2, r2) {
    const { inverseCoeffX: o2, inverseCoeffY: t2 } = r2;
    if (o2 == null || !o2.length || t2 == null || !t2.length || o2.length !== t2.length)
      return null;
    const s2 = [];
    for (let n2 = 0; n2 < o2.length; n2++)
      s2.push(o2[n2]), s2.push(t2[n2]);
    return s2;
  }
  writeInverseCoefficients(e2, r2, o2) {
    const t2 = [], s2 = [];
    for (let n2 = 0; n2 < (e2 == null ? void 0 : e2.length); n2++)
      n2 % 2 == 0 ? t2.push(e2[n2]) : s2.push(e2[n2]);
    r2.inverseCoeffX = t2, r2.inverseCoeffY = s2;
  }
  forwardTransform(e2) {
    if (e2.type === "point") {
      const r2 = l$2(this.forwardCoefficients, e2, this.polynomialOrder);
      return new j$1({ x: r2.x, y: r2.y, spatialReference: e2.spatialReference });
    }
    return c$2(this.forwardCoefficients, e2, this.polynomialOrder);
  }
  inverseTransform(e2) {
    if (e2.type === "point") {
      const r2 = l$2(this.inverseCoefficients, e2, this.polynomialOrder);
      return new j$1({ x: r2.x, y: r2.y, spatialReference: e2.spatialReference });
    }
    return c$2(this.inverseCoefficients, e2, this.polynomialOrder);
  }
};
e$2([y$1({ json: { write: true } })], u$3.prototype, "polynomialOrder", void 0), e$2([y$1()], u$3.prototype, "forwardCoefficients", void 0), e$2([e$4("forwardCoefficients", ["coeffX", "coeffY"])], u$3.prototype, "readForwardCoefficients", null), e$2([o$3("forwardCoefficients")], u$3.prototype, "writeForwardCoefficients", null), e$2([y$1({ json: { write: true } })], u$3.prototype, "inverseCoefficients", null), e$2([e$4("inverseCoefficients", ["inverseCoeffX", "inverseCoeffY"])], u$3.prototype, "readInverseCoefficients", null), e$2([o$3("inverseCoefficients")], u$3.prototype, "writeInverseCoefficients", null), e$2([y$1({ json: { write: true } })], u$3.prototype, "spatialReference", void 0), e$2([r$4({ PolynomialXform: "polynomial" })], u$3.prototype, "type", void 0), u$3 = e$2([i$2("esri.layers.support.rasterTransforms.PolynomialTransform")], u$3);
var m$1 = u$3;
const t$1 = { PolynomialXform: m$1, IdentityXform: i$1 }, r = Object.keys(t$1);
function e$1(n2) {
  const o2 = n2 == null ? void 0 : n2.type;
  return !n2 || r.includes(o2);
}
function l$1(n2) {
  if (!(n2 == null ? void 0 : n2.type))
    return null;
  const o2 = t$1[n2 == null ? void 0 : n2.type];
  if (o2) {
    const t2 = new o2();
    return t2.read(n2), t2;
  }
  return null;
}
const g$1 = new Map();
g$1.set("int16", "esriFieldTypeSmallInteger"), g$1.set("int32", "esriFieldTypeInteger"), g$1.set("int64", "esriFieldTypeInteger"), g$1.set("float32", "esriFieldTypeSingle"), g$1.set("float64", "esriFieldTypeDouble"), g$1.set("text", "esriFieldTypeString");
const y = 8;
let x$2 = class extends L {
  constructor() {
    super(...arguments), this.storageInfo = null, this.datasetFormat = "CRF";
  }
  open(e2) {
    return __async(this, null, function* () {
      yield this.init();
      const { data: t2 } = yield this.request(this.url + "/conf.json", { signal: e2 == null ? void 0 : e2.signal });
      if (!this._validateHeader(t2))
        throw new s$1("cloudraster:open", "Invalid or unsupported conf.json.");
      this.datasetName = this.url.slice(this.url.lastIndexOf("/") + 1);
      const { storageInfo: r2, rasterInfo: o2 } = this._parseHeader(t2);
      if (o2.dataType === "thematic") {
        const e3 = yield this._fetchAuxiliaryInformation();
        o2.attributeTable = e3;
      }
      this._set("storageInfo", r2), this._set("rasterInfo", o2), this.ioConfig.retryCount = this.ioConfig.retryCount || 0;
    });
  }
  fetchRawTile(_0, _1, _2) {
    return __async(this, arguments, function* (e2, t2, r2, o2 = {}) {
      const i2 = this.rasterInfo.storageInfo.maximumPyramidLevel - e2;
      if (i2 < 0)
        return null;
      const s2 = this._buildCacheFilePath(i2, t2, r2, o2.multidimensionalDefinition), a2 = this._getIndexRecordFromBundle(t2, r2), n2 = yield this.request(s2, { range: { from: 0, to: this.storageInfo.headerSize - 1 }, responseType: "array-buffer", signal: o2.signal });
      if (!n2)
        return null;
      const l2 = new Uint8Array(n2.data), f2 = this._getTileEndAndContentType(l2, a2);
      if (f2.recordSize === 0)
        return null;
      const m2 = yield this.request(s2, { range: { from: f2.position, to: f2.position + f2.recordSize }, responseType: "array-buffer", signal: o2.signal });
      return m2 ? this.decodePixelBlock(m2.data, { width: this.rasterInfo.storageInfo.tileInfo.size[0], height: this.rasterInfo.storageInfo.tileInfo.size[1], planes: null, pixelType: null }) : null;
    });
  }
  _validateHeader(e2) {
    const t2 = ["origin", "extent", "geodataXform", "LODInfos", "blockWidth", "blockHeight", "bandCount", "pixelType", "pixelSizeX", "pixelSizeY", "format", "packetSize"];
    return e2 && e2.type === "RasterInfo" && !t2.some((t3) => !e2[t3]);
  }
  _parseHeader(e2) {
    var t2, r2;
    const o2 = ["u1", "u2", "u4", "u8", "s8", "u16", "s16", "u32", "s32", "f32", "f64"][e2.pixelType], { bandCount: i2, histograms: l2, colormap: c2, blockWidth: u2, blockHeight: d2, firstPyramidLevel: h2, maximumPyramidLevel: g2 } = e2, x2 = e2.statistics && e2.statistics.map((e3) => ({ min: e3.min, max: e3.max, avg: e3.mean, stddev: e3.standardDeviation, median: e3.median, mode: e3.mode })), I2 = e2.extent.spatialReference, S2 = (t2 = e2.geodataXform) == null ? void 0 : t2.spatialReference, v2 = new k(I2 != null && I2.wkid || I2 != null && I2.wkt ? I2 : S2);
    let w2 = new M({ xmin: e2.extent.xmin, ymin: e2.extent.ymin, xmax: e2.extent.xmax, ymax: e2.extent.ymax, spatialReference: v2 });
    const b2 = new j$1({ x: e2.pixelSizeX, y: e2.pixelSizeY, spatialReference: v2 }), T2 = Math.round((w2.xmax - w2.xmin) / b2.x), j2 = Math.round((w2.ymax - w2.ymin) / b2.y), k$1 = this._parseTransform(e2.geodataXform), z = k$1 ? w2 : null;
    k$1 && (w2 = k$1.forwardTransform(w2), b2.x = (w2.xmax - w2.xmin) / T2, b2.y = (w2.ymax - w2.ymin) / j2);
    const _ = (r2 = e2.properties) != null ? r2 : {}, C2 = e2.format.toLowerCase().replace("cache/", ""), R2 = new j$1(e2.origin.x, e2.origin.y, v2);
    let F, P, H, L2;
    if (c2 && c2.colors)
      for (F = [], P = 0; P < c2.colors.length; P++)
        H = c2.colors[P], L2 = c2.values ? c2.values[P] : P, F.push([L2, 255 & H, H << 16 >>> 24, H << 8 >>> 24, H >>> 24]);
    const D2 = e2.LODInfos, M$12 = [];
    for (P = 0; P < D2.levels.length; P++)
      M$12.push({ level: D2.levels[P], resolution: D2.resolutions[P], scale: 96 / 0.0254 * D2.resolutions[P] });
    const B = new x$4({ dpi: 96, lods: M$12, format: C2, origin: R2, size: [u2, d2], spatialReference: v2 }), O2 = { recordSize: y, packetSize: e2.packetSize, headerSize: e2.packetSize * e2.packetSize * y + 64 }, $ = [{ maxCol: Math.ceil(T2 / u2) - 1, maxRow: Math.ceil(j2 / d2) - 1, minCol: 0, minRow: 0 }];
    let q = 2;
    if (g2 > 0)
      for (P = 0; P < g2; P++)
        $.push({ maxCol: Math.ceil(T2 / q / u2) - 1, maxRow: Math.ceil(j2 / q / d2) - 1, minCol: 0, minRow: 0 }), q *= 2;
    const E2 = e2.mdInfo;
    return { storageInfo: O2, rasterInfo: new p$3({ width: T2, height: j2, pixelType: o2, bandCount: i2, extent: w2, nativeExtent: z, transform: k$1, spatialReference: v2, pixelSize: b2, keyProperties: _, statistics: x2, histograms: l2, multidimensionalInfo: E2, colormap: F, storageInfo: new p$1({ blockWidth: u2, blockHeight: d2, pyramidBlockWidth: u2, pyramidBlockHeight: d2, origin: R2, tileInfo: B, firstPyramidLevel: h2, maximumPyramidLevel: g2, blockBoundary: $ }) }) };
  }
  _parseTransform(e2) {
    var t2, r2;
    if (!e$1(e2))
      throw new s$1("cloudraster:open", "the data contains unsupported geodata transform types");
    const o2 = l$1(e2);
    if (o2.type === "identity")
      return null;
    if ((t2 = o2.forwardCoefficients) == null || !t2.length || (r2 = o2.inverseCoefficients) == null || !r2.length)
      throw new s$1("cloudraster:open", "the data contains unsupported geodata transforms - both forward and inverse coefficients are required currently");
    return o2;
  }
  _fetchAuxiliaryInformation(e2) {
    return __async(this, null, function* () {
      const t2 = this.request(this.url + "/conf.vat.json", { signal: e2 }).then((e3) => e3.data).catch(() => null), r2 = this.request(this.url + "/conf.vat.dbf", { responseType: "array-buffer", signal: e2 }).then((e3) => e3.data).catch(() => null), o2 = yield Promise.all([t2, r2]);
      let i2;
      if (o2[0]) {
        let e3 = o2[0].fields;
        const t3 = o2[0].values;
        if (e3 && t3) {
          e3 = e3.map((e4) => ({ type: e4.name === "OID" ? "esriFieldTypeOID" : g$1.get(e4.type), name: e4.name, alias: e4.alias || e4.name }));
          const r3 = t3.map((e4) => ({ attributes: e4 }));
          e3 && t3 && (i2 = { fields: e3, features: r3 });
        }
      }
      if (!i2 && o2[1]) {
        i2 = r$1.parse(o2[1]).recordSet;
      }
      return g$3.fromJSON(i2);
    });
  }
  _buildCacheFilePath(e2, r2, o2, i2) {
    const s2 = this.storageInfo.packetSize, a2 = Math.floor(r2 / s2) * s2, n2 = Math.floor(o2 / s2) * s2, l2 = "R" + this._toHexString4(a2) + "C" + this._toHexString4(n2);
    let f2 = "L";
    f2 += e2 >= 10 ? e2.toString() : "0" + e2.toString();
    const { multidimensionalInfo: m2 } = this.rasterInfo, p2 = i2 == null ? void 0 : i2[0];
    if (!r$2(m2) || !p2)
      return `${this.url}/_alllayers/${f2}/${l2}.bundle`;
    let c2 = m2.variables.filter((e3) => e3.name === p2.variableName)[0].dimensions[0].values.indexOf(p2.values[0]).toString(16);
    const u2 = 4 - c2.length;
    for (let t2 = 0; t2 < u2; t2++)
      c2 = "0" + c2;
    return c2 = "S" + c2, `${this.url}/_alllayers/${p2.variableName}/${c2}/${f2}/${l2}.bundle`;
  }
  _getIndexRecordFromBundle(e2, t2) {
    const r2 = this.storageInfo.packetSize, o2 = r2 * (e2 % r2) + t2 % r2;
    if (o2 < 0)
      throw "Invalid level / row / col";
    return 20 + o2 * this.storageInfo.recordSize + 44;
  }
  _getTileEndAndContentType(e2, t2) {
    const r2 = e2.subarray(t2, t2 + 8);
    let o2, i2 = 0;
    for (o2 = 0; o2 < 5; o2++)
      i2 |= (255 & r2[o2]) << 8 * o2;
    const s2 = 1099511627775 & i2;
    for (i2 = 0, o2 = 5; o2 < 8; o2++)
      i2 |= (255 & r2[o2]) << 8 * (o2 - 5);
    return { position: s2, recordSize: 1099511627775 & i2 };
  }
  _toHexString4(e2) {
    let t2 = e2.toString(16);
    if (t2.length !== 4) {
      let e3 = 4 - t2.length;
      for (; e3-- > 0; )
        t2 = "0" + t2;
    }
    return t2;
  }
};
e$2([y$1({ readOnly: true })], x$2.prototype, "storageInfo", void 0), e$2([y$1({ type: String, json: { write: true } })], x$2.prototype, "datasetFormat", void 0), x$2 = e$2([i$2("esri.layers.support.rasterDatasets.CloudRaster")], x$2);
var I$3 = x$2;
let h = class extends L {
  constructor() {
    super(...arguments), this.datasetFormat = "MEMORY";
  }
  open(t2) {
    return __async(this, null, function* () {
      var e2;
      yield this.init();
      const { pixelBlock: s2, statistics: r2, histograms: i2, name: o2, keyProperties: l2, nativeExtent: p2, transform: c2 } = this.data, { width: h2, height: u2, pixelType: d2 } = s2, f2 = this.data.extent || new M({ xmin: -0.5, ymin: 0.5, xmax: h2 - 0.5, ymax: u2 - 0.5, spatialReference: new k({ wkid: 3857 }) }), y2 = (e2 = this.data.isPseudoSpatialReference) != null ? e2 : !this.data.extent, x2 = { x: f2.width / h2, y: f2.height / u2 }, g2 = new p$3({ width: h2, height: u2, pixelType: d2, extent: f2, nativeExtent: p2, transform: c2, pixelSize: x2, spatialReference: f2.spatialReference, bandCount: 3, keyProperties: l2 || {}, statistics: r2, isPseudoSpatialReference: y2, histograms: i2 });
      this.createRemoteDatasetStorageInfo(g2, 512, 512), this._set("rasterInfo", g2), this.updateTileInfo(), yield this._buildInMemoryRaster(s2, { width: 512, height: 512 }, t2), this.datasetName = o2, this.url = "/InMemory/" + o2;
    });
  }
  fetchRawTile(t2, e2, s2, r2 = {}) {
    const i2 = this._pixelBlockTiles.get(`${t2}/${e2}/${s2}`);
    return Promise.resolve(i2);
  }
  _buildInMemoryRaster(t2, s2, r2) {
    return __async(this, null, function* () {
      const a2 = this.rasterInfo.storageInfo.maximumPyramidLevel, m2 = this.rasterJobHandler ? this.rasterJobHandler.split({ pixelBlock: t2, tileSize: s2, maximumPyramidLevel: a2 }, r2) : Promise.resolve(U$1(t2, s2, a2)), n2 = r$2(this.rasterInfo.statistics), c2 = r$2(this.rasterInfo.histograms), h2 = n2 && c2 ? Promise.resolve({ statistics: null, histograms: null }) : this.rasterJobHandler ? this.rasterJobHandler.estimateStatisticsHistograms({ pixelBlock: t2 }, r2) : Promise.resolve(r$5(t2)), u2 = yield A$1([m2, h2]);
      if (!u2[0].value && u2[1].value)
        throw new s$1("inmemory-raster:open", "failed to build in memory raster");
      var d2, f2;
      (this._pixelBlockTiles = u2[0].value, n2) || (this.rasterInfo.statistics = (d2 = u2[1].value) == null ? void 0 : d2.statistics);
      c2 && (this.rasterInfo.histograms = (f2 = u2[1].value) == null ? void 0 : f2.histograms);
    });
  }
};
e$2([y$1({ type: String, json: { write: true } })], h.prototype, "datasetFormat", void 0), e$2([y$1()], h.prototype, "data", void 0), h = e$2([i$2("esri.layers.support.rasterDatasets.InMemoryRaster")], h);
var u$2 = h;
function n$1(e2, t2) {
  if (!e2 || !t2)
    return [];
  let l2 = t2;
  t2.indexOf("/") > -1 ? (l2 = t2.slice(0, t2.indexOf("/")), t2 = t2.slice(t2.indexOf("/") + 1)) : t2 = "";
  const r2 = [];
  if (t2) {
    const u3 = n$1(e2, l2);
    for (let e3 = 0; e3 < u3.length; e3++) {
      n$1(u3[e3], t2).forEach((n2) => r2.push(n2));
    }
    return r2;
  }
  const u2 = e2.getElementsByTagNameNS("*", l2);
  if (!u2 || u2.length === 0)
    return [];
  for (let n2 = 0; n2 < u2.length; n2++)
    r2.push(u2[n2] || u2.item[n2]);
  return r2;
}
function e(t2, l2) {
  if (!t2 || !l2)
    return null;
  let r2 = l2;
  l2.indexOf("/") > -1 ? (r2 = l2.slice(0, l2.indexOf("/")), l2 = l2.slice(l2.indexOf("/") + 1)) : l2 = "";
  const u2 = n$1(t2, r2);
  return u2.length > 0 ? l2 ? e(u2[0], l2) : u2[0] : null;
}
function t(n2, t2 = null) {
  const l2 = t2 ? e(n2, t2) : n2;
  let r2;
  return l2 ? (r2 = l2.textContent || l2.nodeValue, r2 ? r2.trim() : null) : null;
}
function l(e2, t2) {
  const l2 = n$1(e2, t2), r2 = [];
  let u2;
  for (let n2 = 0; n2 < l2.length; n2++)
    u2 = l2[n2].textContent || l2[n2].nodeValue, u2 && (u2 = u2.trim(), u2 !== "" && r2.push(u2));
  return r2;
}
function u$1(n2, e2) {
  return l(n2, e2).map((n3) => Number(n3));
}
function o$1(n2, e2) {
  const l2 = t(n2, e2);
  return Number(l2);
}
function i(n2, e2) {
  var t2;
  const l2 = n2 == null || (t2 = n2.nodeName) == null ? void 0 : t2.toLowerCase(), r2 = e2.toLowerCase();
  return l2.slice(l2.lastIndexOf(":") + 1) === r2;
}
function o(e2, t2) {
  if (!e2 || !t2)
    return null;
  const n2 = [];
  for (let a2 = 0; a2 < e2.length; a2++)
    n2.push(e2[a2]), n2.push(t2[a2]);
  return n2;
}
function u(e$12) {
  var n2;
  const r2 = e(e$12, "GeodataXform"), u2 = c$1(o$1(r2, "SpatialReference/WKID") || t(r2, "SpatialReference/WKT"));
  if (r2.getAttribute("xsi:type") !== "typens:PolynomialXform")
    return { spatialReference: u2, transform: null };
  const f2 = (n2 = o$1(r2, "PolynomialOrder")) != null ? n2 : 1, m2 = u$1(r2, "CoeffX/Double"), d2 = u$1(r2, "CoeffY/Double"), p2 = u$1(r2, "InverseCoeffX/Double"), S2 = u$1(r2, "InverseCoeffY/Double"), I2 = o(m2, d2), g2 = o(p2, S2);
  return { spatialReference: u2, transform: new m$1({ spatialReference: u2, polynomialOrder: f2, forwardCoefficients: I2, inverseCoefficients: g2 }) };
}
function f(e$12) {
  var t$12;
  const n2 = o$1(e$12, "NoDataValue"), i2 = e(e$12, "Histograms/HistItem"), o2 = o$1(i2, "HistMin"), u2 = o$1(i2, "HistMax"), f2 = o$1(i2, "BucketCount"), c2 = (t$12 = t(i2, "HistCounts")) == null ? void 0 : t$12.split("|").map((e2) => Number(e2));
  let m2, d2, p2, S2;
  n$1(e$12, "Metadata/MDI").forEach((e2) => {
    var t2;
    const n3 = Number((t2 = e2.textContent) != null ? t2 : e2.nodeValue);
    switch (e2.getAttribute("key").toUpperCase()) {
      case "STATISTICS_MINIMUM":
        m2 = n3;
        break;
      case "STATISTICS_MAXIMUM":
        d2 = n3;
        break;
      case "STATISTICS_MEAN":
        p2 = n3;
        break;
      case "STATISTICS_STDDEV":
        S2 = n3;
    }
  });
  const I2 = o$1(e$12, "Metadata/SourceBandIndex");
  return { noDataValue: n2, histogram: c2 != null && c2.length && m2 != null && d2 != null ? { min: o2, max: u2, size: f2 || c2.length, counts: c2 } : null, sourceBandIndex: I2, statistics: m2 != null && d2 != null ? { min: m2, max: d2, avg: p2, stddev: S2 } : null };
}
function c$1(t2) {
  if (!t2)
    return null;
  let n2 = Number(t2);
  if (!isNaN(n2) && n2 !== 0)
    return new k({ wkid: n2 });
  if (!(t2 = String(t2)).startsWith("GEOGCS") && !t2.startsWith("PROJCS"))
    return null;
  const a2 = t2.replace(/\]/g, "[").replace(/\"/g, "").split("[").map((e2) => e2.trim()).filter((e2) => e2 !== ""), r2 = a2[a2.length - 1].split(",");
  return r2[0] === "EPSG" && t2.endsWith('"]]') && (n2 = Number(r2[1]), !isNaN(n2) && n2 !== 0) ? new k({ wkid: n2 }) : new k({ wkt: t2 });
}
function m(e2) {
  var t$12;
  if ((e2 == null || (t$12 = e2.documentElement.tagName) == null ? void 0 : t$12.toLowerCase()) !== "pamdataset")
    return {};
  const s2 = { spatialReference: null, transform: null, metadata: {}, rasterBands: [], statistics: null, histograms: null };
  e2.documentElement.childNodes.forEach((e3) => {
    if (e3.nodeType === 1) {
      if (i(e3, "SRS")) {
        if (!s2.spatialReference) {
          const t$13 = t(e3);
          s2.spatialReference = c$1(t$13);
        }
      } else if (i(e3, "Metadata"))
        if (e3.getAttribute("domain") === "xml:ESRI") {
          const { spatialReference: t2, transform: n2 } = u(e3);
          s2.transform = n2, s2.spatialReference || (s2.spatialReference = t2);
        } else {
          n$1(e3, "MDI").forEach((e4) => s2.metadata[e4.getAttribute("key")] = t(e4));
        }
      else if (i(e3, "PAMRasterBand")) {
        const t2 = f(e3);
        t2.sourceBandIndex != null && s2.rasterBands[t2.sourceBandIndex] == null ? s2.rasterBands[t2.sourceBandIndex] = t2 : s2.rasterBands.push(t2);
      }
    }
  });
  const l2 = s2.rasterBands;
  if (l2) {
    const e3 = !!l2[0].statistics;
    s2.statistics = e3 ? l2.map((e4) => e4.statistics) : null;
    const t2 = !!l2[0].histogram;
    s2.histograms = t2 ? l2.map((e4) => e4.histogram) : null;
  }
  return s2;
}
let d = class extends L {
  open(t2) {
    return __async(this, null, function* () {
      yield this.init();
      const r2 = yield this._fetchData(t2);
      let { spatialReference: e2, statistics: s2, histograms: o2, transform: a2 } = yield this._fetchAuxiliaryData(t2);
      const i2 = !e2;
      i2 && (e2 = new k({ wkid: 3857 })), o2 != null && o2.length && s2 == null && (s2 = o$4(o2));
      const { width: m2, height: c2 } = r2;
      let f2 = new M({ xmin: -0.5, ymin: 0.5 - c2, xmax: m2 - 0.5, ymax: 0.5, spatialReference: e2 });
      const h2 = a2 ? a2.forwardTransform(f2) : f2;
      let d2 = true;
      if (a2) {
        const t3 = a2.forwardCoefficients;
        d2 = t3 && t3[1] === 0 && t3[2] === 0, d2 && (a2 = null, f2 = h2);
      }
      const x2 = new u$2({ data: { extent: h2, nativeExtent: f2, transform: a2, pixelBlock: r2, statistics: s2, histograms: o2, keyProperties: { DateType: "Processed" }, isPseudoSpatialReference: i2 } });
      yield x2.open(), this._set("rasterInfo", x2.rasterInfo), this._inMemoryRaster = x2;
    });
  }
  fetchRawTile(t2, r2, e2, s2 = {}) {
    return this._inMemoryRaster.fetchRawTile(t2, r2, e2, s2);
  }
  _fetchData(t2) {
    return __async(this, null, function* () {
      const { data: r2 } = yield this.request(this.url, { responseType: "array-buffer", signal: t2 == null ? void 0 : t2.signal }), e2 = D(r2).toUpperCase();
      if (e2 !== "JPG" && e2 !== "PNG" && e2 !== "GIF" && e2 !== "BMP")
        throw new s$1("image-aux-raster:open", "the data is not a supported format");
      this._set("datasetFormat", e2);
      return yield this.decodePixelBlock(r2, { format: "jpg", width: 1, height: 1, useCanvas: true });
    });
  }
  _fetchAuxiliaryData(t2) {
    return __async(this, null, function* () {
      var e2, s2;
      const o2 = e$3(t2 == null ? void 0 : t2.signal), n2 = (e2 = this.ioConfig.skipExtensions) != null ? e2 : [], l2 = n2.indexOf("aux.xml") > -1 ? null : this.request(this.url + ".aux.xml", { responseType: "xml", signal: o2 }), m$22 = this.datasetFormat, p2 = m$22 === "JPG" ? "jgw" : m$22 === "PNG" ? "pgw" : m$22 === "BMP" ? "bpw" : null, c2 = n2.indexOf(p2) > -1 ? null : this.request(this.url.slice(0, this.url.lastIndexOf(".")) + "." + p2, { responseType: "text", signal: o2 }), u2 = yield A$1([l2, c2]);
      if (o2 != null && o2.aborted)
        throw m$3();
      const d2 = m((s2 = u2[0].value) == null ? void 0 : s2.data);
      if (!d2.transform) {
        const t3 = u2[1].value ? u2[1].value.data.split("\n").slice(0, 6).map((t4) => Number(t4)) : null;
        d2.transform = (t3 == null ? void 0 : t3.length) === 6 ? new m$1({ forwardCoefficients: [t3[4], t3[5], t3[0], -t3[1], t3[2], -t3[3]] }) : null;
      }
      return d2;
    });
  }
};
e$2([y$1({ type: String, json: { write: true } })], d.prototype, "datasetFormat", void 0), d = e$2([i$2("esri.layers.support.rasterDatasets.ImageAuxRaster")], d);
var x$1 = d;
let g = class extends L {
  constructor() {
    super(...arguments), this._levelOffset = 0, this._slices = null, this._tilemapCache = null, this.datasetFormat = "RasterTileServer";
  }
  open(e2) {
    return __async(this, null, function* () {
      yield this.init();
      const i2 = e2 && e2.signal, s2 = this.sourceJSON ? { data: this.sourceJSON } : yield this.request(this.url, { query: { f: "json" }, signal: i2 });
      s2.ssl && (this.url = this.url.replace(/^http:/i, "https:"));
      const a2 = s2.data;
      if (this.sourceJSON = a2, !a2)
        throw new s$1("imageserverraster:open", "cannot initialize tiled image service, missing service info");
      if (!a2.tileInfo)
        throw new s$1("imageserverraster:open", "use ImageryLayer to open non-tiled image services");
      this._fixScaleInServiceInfo();
      const o2 = ["jpg", "jpeg", "png", "png8", "png24", "png32", "mixed"];
      this.tileType = a2.cacheType, this.tileType == null && (o2.indexOf(a2.tileInfo.format.toLowerCase()) > -1 ? this.tileType = "Map" : a2.tileInfo.format.toLowerCase() === "lerc" ? this.tileType = "Elevation" : this.tileType = "Raster"), this.datasetName = a2.name.slice(a2.name.indexOf("/") + 1);
      const n2 = yield this._fetchRasterInfo({ signal: i2 });
      if (!r$2(n2))
        throw new s$1("image-server-raster:open", "cannot initialize image service");
      {
        const e3 = this.tileType === "Map" ? n$6(a2.tileInfo, a2) : x$4.fromJSON(a2.tileInfo), { extent: t2, pixelSize: i3 } = n2, s3 = 0.5 / n2.width * i3.x;
        let l2, r2;
        const o3 = e3.lodAt(Math.max.apply(null, e3.lods.map((e4) => e4.level)));
        this.tileType !== "Map" && a2.maxScale !== 0 && (this.tileType === "Raster" ? (l2 = e3.lods.filter((e4) => e4.resolution === i3.x)[0], l2 || (l2 = e3.lods[e3.lods.length - 1])) : (l2 = e3.lods.filter((e4) => Math.abs(e4.scale - a2.maxScale) < s3)[0], l2 || (l2 = e3.lods.filter((e4) => e4.scale > a2.maxScale).sort((e4, t3) => e4.scale > t3.scale ? 1 : -1)[0])), i3.x = i3.y = l2.resolution, n2.width = Math.ceil((t2.xmax - t2.xmin) / i3.x - 0.1), n2.height = Math.ceil((t2.ymax - t2.ymin) / i3.y - 0.1)), l2 || (l2 = o3);
        const m2 = e3.lodAt(Math.min.apply(null, e3.lods.map((e4) => e4.level)));
        this.tileType === "Map" ? this._levelOffset = e3.lods[0].level : a2.minScale !== 0 && this.tileType === "Elevation" && (r2 = e3.lods.filter((e4) => Math.abs(e4.scale - a2.minScale) < s3)[0], this._levelOffset = r2.level - m2.level), r2 || (r2 = m2);
        const h2 = Math.max(i3.x, i3.y);
        (Math.abs(i3.x - i3.y) > s3 || !e3.lods.some((e4) => Math.abs(e4.resolution - h2) < s3)) && (i3.x = i3.y = l2.resolution, n2.width = Math.ceil((t2.xmax - t2.xmin) / i3.x - 0.1), n2.height = Math.ceil((t2.ymax - t2.ymin) / i3.y - 0.1));
        const p2 = l2.level - r2.level, [f2, x2] = e3.size, y2 = e3.origin;
        let { x: g2, y: v2 } = i3;
        const S2 = [{ minCol: Math.floor((t2.xmin - y2.x + 0.1 * g2) / f2 / g2), maxCol: Math.floor((t2.xmax - y2.x - 0.1 * g2) / f2 / g2), minRow: Math.floor((y2.y - t2.ymax + 0.1 * v2) / x2 / v2), maxRow: Math.floor((y2.y - t2.ymin - 0.1 * v2) / x2 / v2) }];
        if (p2 > 0)
          for (let a3 = 0; a3 < p2; a3++)
            g2 *= 2, v2 *= 2, S2.push({ minCol: Math.floor((t2.xmin - y2.x + 0.1 * g2) / f2 / g2), maxCol: Math.floor((t2.xmax - y2.x - 0.1 * g2) / f2 / g2), minRow: Math.floor((y2.y - t2.ymax + 0.1 * v2) / x2 / g2), maxRow: Math.floor((y2.y - t2.ymin - 0.1 * v2) / x2 / g2) });
        n2.storageInfo = new p$1({ blockWidth: e3.size[0], blockHeight: e3.size[1], pyramidBlockWidth: e3.size[0], pyramidBlockHeight: e3.size[1], compression: e3.format, origin: e3.origin, firstPyramidLevel: 1, maximumPyramidLevel: p2, tileInfo: e3, blockBoundary: S2 }), this._set("rasterInfo", n2);
      }
      if (a2.capabilities.toLowerCase().indexOf("tilemap") > -1) {
        const e3 = { tileInfo: n2.storageInfo.tileInfo, parsedUrl: U$2(this.url), url: this.url, tileServers: [], type: "tile" };
        this._tilemapCache = new j$3({ layer: e3 });
      }
    });
  }
  fetchRawTile(_0, _1, _2) {
    return __async(this, arguments, function* (e2, t2, i2, s2 = {}) {
      const { storageInfo: a2, extent: l2, pixelSize: r2 } = this.rasterInfo, o2 = a2.maximumPyramidLevel - e2 + this._levelOffset, n2 = `${this.url}/tile/${o2}/${t2}/${i2}`, m2 = this._slices ? { sliceId: s2.sliceId || 0 } : null, { data: h2 } = yield this.request(n2, { query: m2, responseType: "array-buffer", signal: s2.signal });
      if (!h2)
        return null;
      const c2 = yield this.decodePixelBlock(h2, { width: a2.tileInfo.size[0], height: a2.tileInfo.size[1], planes: null, pixelType: null, isPoint: this.tileType === "Elevation" }), u2 = a2.blockBoundary[e2];
      if (a2.compression !== "jpg" || i2 > u2.minCol && i2 < u2.maxCol && t2 > u2.minRow && t2 < u2.maxRow)
        return c2;
      const { origin: p2, blockWidth: f2, blockHeight: d2 } = a2, y2 = __pow(2, e2), g2 = Math.round((l2.xmin - p2.x) / (r2.x * y2)) % f2, v2 = Math.round((l2.xmax - p2.x) / (r2.x * y2)) % f2, S2 = Math.round((p2.y - l2.ymax) / (r2.x * y2)) % d2, w2 = Math.round((p2.y - l2.ymin) / (r2.x * y2)) % d2, I2 = i2 === u2.minCol ? g2 : 0, j2 = t2 === u2.minRow ? S2 : 0, b2 = i2 === u2.maxCol ? v2 : f2, M2 = t2 === u2.maxRow ? w2 : d2;
      return d$4(c2, { x: I2, y: j2 }, { width: b2 - I2, height: M2 - j2 }), c2;
    });
  }
  getSliceIndex(e2) {
    if (e2 == null || !e2.length || !this._slices)
      return null;
    const t2 = e2;
    for (let i2 = 0; i2 < this._slices.length; i2++) {
      const e3 = this._slices[i2].multidimensionalDefinition;
      if (e3.length === t2.length && !e3.some((e4) => {
        const i3 = t2.filter((t3) => e4.variableName === t3.variableName && t3.dimensionName === e4.dimensionName)[0];
        if (!i3)
          return true;
        return (Array.isArray(e4.values[0]) ? e4.values[0][0] : e4.values[0]) !== (Array.isArray(i3.values[0]) ? i3.values[0][0] : i3.values[0]);
      }))
        return i2;
    }
    return null;
  }
  fetchVariableStatisticsHistograms(e2, t2) {
    return __async(this, null, function* () {
      const i2 = this.request(this.url + "/statistics", { query: { variable: e2, f: "json" }, signal: t2 }).then((e3) => {
        var t3;
        return (t3 = e3.data) == null ? void 0 : t3.statistics;
      }), s2 = this.request(this.url + "/histograms", { query: { variable: e2, f: "json" }, signal: t2 }).then((e3) => {
        var t3;
        return (t3 = e3.data) == null ? void 0 : t3.histograms;
      }), a2 = yield Promise.all([i2, s2]);
      return a2[0] && a2[0].forEach((e3) => {
        e3.avg = e3.mean, e3.stddev = e3.standardDeviation;
      }), { statistics: a2[0] || null, histograms: a2[1] || null };
    });
  }
  computeBestPyramidLevelForLocation(_0) {
    return __async(this, arguments, function* (e2, t2 = {}) {
      if (!this._tilemapCache)
        return 0;
      let s2 = this.identifyPixelLocation(e2, 0, e$3(t2.datumTransformation));
      if (s2 === null)
        return null;
      let a2 = 0;
      const { maximumPyramidLevel: l2 } = this.rasterInfo.storageInfo;
      let r2 = l2 - a2 + this._levelOffset;
      const o2 = s2.srcLocation;
      for (; r2 >= 0; ) {
        try {
          if ((yield this._tilemapCache.fetchAvailability(r2, s2.row, s2.col, t2)) === "available")
            break;
        } catch (e3) {
        }
        if (r2--, a2++, s2 = this.identifyPixelLocation(o2, a2, e$3(t2.datumTransformation)), s2 === null)
          return null;
      }
      return r2 === -1 || s2 == null ? null : a2;
    });
  }
  _fetchRasterInfo(e2) {
    return __async(this, null, function* () {
      const t2 = this.sourceJSON, i2 = Math.ceil((t2.extent.xmax - t2.extent.xmin) / t2.pixelSizeX - 0.1), s2 = Math.ceil((t2.extent.ymax - t2.extent.ymin) / t2.pixelSizeY - 0.1), a2 = k.fromJSON(t2.spatialReference || t2.extent.spatialReference);
      if (this.tileType === "Map")
        return new p$3({ width: i2, height: s2, bandCount: 3, extent: M.fromJSON(t2.extent), spatialReference: a2, pixelSize: new j$1({ x: t2.pixelSizeX, y: t2.pixelSizeY, spatialReference: a2 }), pixelType: "u8", statistics: null, keyProperties: { DataType: "processed" } });
      const { slice: l2, signal: r2 } = e2, c2 = !!t2.hasRasterAttributeTable && this.request(this.url + "/rasterAttributeTable", { query: { slice: l2, f: "json" }, signal: r2 }).then((e3) => g$3.fromJSON(e3.data)).catch(() => null), u2 = !!t2.hasColormap && this.request(this.url + "/colormap", { query: { slice: l2, f: "json" }, signal: r2 }).then((e3) => {
        var t3;
        return (t3 = e3.data) == null ? void 0 : t3.colormap;
      }), p2 = !!t2.hasHistograms && this.request(this.url + "/histograms", { query: { slice: l2, f: "json" }, signal: r2 }).then((e3) => {
        var t3;
        return (t3 = e3.data) == null ? void 0 : t3.histograms;
      }), x2 = this.request(this.url + "/keyProperties", { query: { f: "json" }, signal: r2 }).then((e3) => e3.data).catch(() => {
      }), d2 = !!t2.hasMultidimensions && this._fetchMultidimensionalInfo(), y2 = !!t2.hasMultidimensions && this.request(this.url + "/slices", { query: { f: "json" }, signal: r2 }).then((e3) => e3.data && e3.data.slices).catch(() => {
      });
      return Promise.all([c2, u2, p2, x2, d2, y2]).then((e3) => {
        let l3 = null;
        if (t2.minValues && t2.minValues.length === t2.bandCount) {
          l3 = [];
          for (let e4 = 0; e4 < t2.minValues.length; e4++)
            l3.push({ min: t2.minValues[e4], max: t2.maxValues[e4], avg: t2.meanValues[e4], stddev: t2.stdvValues[e4] });
        }
        return this._slices = e3[5] || null, new p$3({ width: i2, height: s2, bandCount: t2.bandCount, extent: M.fromJSON(t2.extent), spatialReference: a2, pixelSize: new j$1({ x: t2.pixelSizeX, y: t2.pixelSizeY, spatialReference: a2 }), pixelType: t2.pixelType.toLowerCase(), statistics: l3, attributeTable: e3[0] || null, colormap: e3[1] || null, histograms: e3[2] || null, keyProperties: e3[3] || {}, multidimensionalInfo: e3[4] || null });
      });
    });
  }
  _fetchMultidimensionalInfo(e2) {
    return __async(this, null, function* () {
      var t2;
      const i2 = yield this.request(this.url + "/multidimensionalInfo", { query: { f: "json" }, signal: e2 }).then((e3) => {
        var t3;
        return (t3 = e3.data) == null ? void 0 : t3.multidimensionalInfo;
      });
      return (t2 = i2.variables) != null && t2.length && i2.variables.forEach((e3) => {
        var t3;
        (t3 = e3.statistics) != null && t3.length && e3.statistics.forEach((e4) => {
          e4.avg = e4.mean, e4.stddev = e4.standardDeviation;
        });
      }), i2;
    });
  }
  _fixScaleInServiceInfo() {
    const { sourceJSON: e2 } = this;
    e2.minScale && e2.minScale < 0 && (e2.minScale = 0), e2.maxScale && e2.maxScale < 0 && (e2.maxScale = 0);
  }
};
e$2([y$1({ type: String, json: { write: true } })], g.prototype, "datasetFormat", void 0), e$2([y$1()], g.prototype, "tileType", void 0), g = e$2([i$2("esri.layers.support.rasterDatasets.ImageServerRaster")], g);
var v = g;
const w$1 = new Map();
w$1.set("Int8", "s8"), w$1.set("UInt8", "u8"), w$1.set("Int16", "s16"), w$1.set("UInt16", "u16"), w$1.set("Int32", "s32"), w$1.set("UInt32", "u32"), w$1.set("Float32", "f32"), w$1.set("Float64", "f32"), w$1.set("Double64", "f32");
const I$2 = new Map();
I$2.set("lerc", ".lrc"), I$2.set("none", ".til"), I$2.set("deflate", ".pzp"), I$2.set("jpeg", ".jzp");
let b = class extends L {
  constructor() {
    super(...arguments), this._files = null, this._storageIndex = null, this.datasetFormat = "MRF";
  }
  open(t2) {
    return __async(this, null, function* () {
      var s2;
      yield this.init(), this.datasetName = this.url.slice(this.url.lastIndexOf("/") + 1);
      const o2 = t2 ? e$3(t2.signal) : null, i2 = yield this.request(this.url, { responseType: "xml", signal: o2 }), { rasterInfo: a2, files: n2 } = this._parseHeader(i2.data);
      if (((s2 = this.ioConfig.skipExtensions) == null ? void 0 : s2.indexOf("aux.xml")) === -1) {
        const e2 = yield this._fetchAuxiliaryData(t2);
        var l2;
        if (e2 != null)
          a2.statistics = (l2 = e2.statistics) != null ? l2 : a2.statistics, a2.histograms = e2.histograms, e2.histograms && !r$2(a2.statistics) && (a2.statistics = o$4(e2.histograms));
      }
      this._set("rasterInfo", a2), this._files = n2;
      const p2 = yield this.request(n2.index, { responseType: "array-buffer", signal: o2 });
      this._storageIndex = this._parseIndex(p2.data);
      let c2, f2, h2 = 0, u2 = -1;
      const { blockWidth: g2, blockHeight: d2, compression: y2 } = this.rasterInfo.storageInfo, x2 = this.rasterInfo.storageInfo.pyramidScalingFactor, { width: w2, height: I2, bandCount: b2 } = this.rasterInfo, A2 = [], j2 = y2 === "none" ? 1 : b2;
      for (; h2 < this._storageIndex.length; )
        u2++, c2 = Math.ceil(w2 / g2 / __pow(x2, u2)), f2 = Math.ceil(I2 / d2 / __pow(x2, u2)), h2 += c2 * f2 * j2 * 4, A2.push({ maxRow: f2, maxCol: c2, minCol: 0, minRow: 0 });
      this.rasterInfo.storageInfo.blockBoundary = A2, u2 > 0 && (this.rasterInfo.storageInfo.firstPyramidLevel = 1, this.rasterInfo.storageInfo.maximumPyramidLevel = u2), this.updateTileInfo();
    });
  }
  fetchRawTile(_0, _1, _2) {
    return __async(this, arguments, function* (t2, e2, r2, s2 = {}) {
      const { blockWidth: o2, blockHeight: i2, blockBoundary: a2, compression: n2 } = this.rasterInfo.storageInfo, l2 = a2[t2];
      if (!l2 || l2.maxRow < e2 || l2.maxCol < r2 || l2.minRow > e2 || l2.minCol > r2)
        return null;
      const { bandCount: c2, pixelType: f2 } = this.rasterInfo, { ranges: m2, actualTileWidth: h2, actualTileHeight: u2 } = this._getTileLocation(t2, e2, r2);
      if (!m2 || m2.length === 0)
        return null;
      if (m2[0].from === 0 && m2[0].to === 0) {
        const t3 = new Uint8Array(o2 * i2);
        return new u$4({ width: o2, height: i2, pixels: null, mask: t3, validPixelCount: 0 });
      }
      const { bandIds: g2 } = this.ioConfig, d2 = n2 === "none" ? 1 : c2, y2 = [];
      let x2 = 0;
      for (x2 = 0; x2 < d2; x2++)
        (!g2 || g2.indexOf[x2] > -1) && y2.push(this.request(this._files.data, { range: { from: m2[x2].from, to: m2[x2].to }, responseType: "array-buffer", signal: s2.signal }));
      const w2 = yield Promise.all(y2), I2 = w2.map((t3) => t3.data.byteLength).reduce((t3, e3) => t3 + e3), b2 = new Uint8Array(I2);
      let A2 = 0;
      for (x2 = 0; x2 < d2; x2++)
        b2.set(new Uint8Array(w2[x2].data), A2), A2 += w2[x2].data.byteLength;
      const j2 = this.rasterInfo.storageInfo.compression === "lerc" ? "lerc" : "bip", R2 = yield this.decodePixelBlock(b2.buffer, { width: o2, height: i2, format: j2, pixelType: f2 });
      let _ = 0, F = 0;
      if (h2 !== o2 || u2 !== i2) {
        let t3 = R2.mask;
        if (t3)
          for (x2 = 0; x2 < i2; x2++)
            if (F = x2 * o2, x2 < u2)
              for (_ = h2; _ < o2; _++)
                t3[F + _] = 0;
            else
              for (_ = 0; _ < o2; _++)
                t3[F + _] = 0;
        else
          for (t3 = new Uint8Array(o2 * i2), R2.mask = t3, x2 = 0; x2 < u2; x2++)
            for (F = x2 * o2, _ = 0; _ < h2; _++)
              t3[F + _] = 1;
      }
      return R2;
    });
  }
  _parseIndex(t2) {
    if (t2.byteLength % 16 > 0)
      throw "invalid array buffer must be multiples of 16";
    let e2, r2, s2, o2, i2, a2;
    if (r$6) {
      for (r2 = new Uint8Array(t2), o2 = new ArrayBuffer(t2.byteLength), s2 = new Uint8Array(o2), i2 = 0; i2 < t2.byteLength / 4; i2++)
        for (a2 = 0; a2 < 4; a2++)
          s2[4 * i2 + a2] = r2[4 * i2 + 3 - a2];
      e2 = new Uint32Array(o2);
    } else
      e2 = new Uint32Array(t2);
    return e2;
  }
  _getTileLocation(t2, e2, r2) {
    const { blockWidth: s2, blockHeight: o2, pyramidScalingFactor: i2, compression: a2 } = this.rasterInfo.storageInfo, { width: n2, height: l2, bandCount: p2 } = this.rasterInfo, c2 = a2 === "none" ? 1 : p2;
    let f2, m2, h2, u2 = 0, g2 = 0;
    for (h2 = 0; h2 < t2; h2++)
      g2 = __pow(i2, h2), f2 = Math.ceil(n2 / s2 / g2), m2 = Math.ceil(l2 / o2 / g2), u2 += f2 * m2;
    g2 = __pow(i2, t2), f2 = Math.ceil(n2 / s2 / g2), m2 = Math.ceil(l2 / o2 / g2), u2 += e2 * f2 + r2, u2 *= 4 * c2;
    const d2 = this._storageIndex.subarray(u2, u2 + 4 * c2);
    let y2 = 0, x2 = 0;
    const w2 = [];
    for (let I2 = 0; I2 < c2; I2++)
      y2 = d2[4 * I2 + 0] * __pow(2, 32) + d2[4 * I2 + 1], x2 = y2 + d2[4 * I2 + 2] * __pow(2, 32) + d2[4 * I2 + 3], w2.push({ from: y2, to: x2 });
    return { ranges: w2, actualTileWidth: r2 < f2 - 1 ? s2 : Math.ceil(n2 / g2) - s2 * (f2 - 1), actualTileHeight: e2 < m2 - 1 ? o2 : Math.ceil(l2 / g2) - o2 * (m2 - 1) };
  }
  _parseHeader(t$12) {
    const e$12 = e(t$12, "MRF_META/Raster");
    if (!e$12)
      throw new s$1("mrf:open", "not a valid MRF format");
    const r2 = e(e$12, "Size"), s2 = parseInt(r2.getAttribute("x"), 10), o2 = parseInt(r2.getAttribute("y"), 10), p2 = parseInt(r2.getAttribute("c"), 10), f2 = (t(e$12, "Compression") || "none").toLowerCase();
    if (!f2 || ["none", "lerc"].indexOf(f2) === -1)
      throw new s$1("mrf:open", "currently does not support compression " + f2);
    const m2 = t(e$12, "DataType") || "UInt8", u2 = w$1.get(m2);
    if (u2 == null)
      throw new s$1("mrf:open", "currently does not support pixel type " + m2);
    const x2 = e(e$12, "PageSize"), b2 = parseInt(x2.getAttribute("x"), 10), A2 = parseInt(x2.getAttribute("y"), 10), j2 = e(e$12, "DataValues");
    let R2, _;
    j2 && (_ = j2.getAttribute("NoData"), _ != null && (R2 = _.trim().split(" ").map((t2) => parseFloat(t2))));
    if (e(t$12, "MRF_META/CachedSource"))
      throw new s$1("mrf:open", "currently does not support MRF referencing other data files");
    const F = e(t$12, "MRF_META/GeoTags"), M$12 = e(F, "BoundingBox");
    if (M$12 == null)
      throw new s$1("mrf:open", "missing node MRF_META/GeoTags/BoundingBox");
    const T2 = parseFloat(M$12.getAttribute("minx")), k$1 = parseFloat(M$12.getAttribute("miny")), C2 = parseFloat(M$12.getAttribute("maxx")), U2 = parseFloat(M$12.getAttribute("maxy")), L2 = t(F, "Projection") || "", S2 = t(t$12, "datafile"), v2 = t(t$12, "IndexFile");
    let B;
    if (L2 !== "LOCAL_CS[]")
      if (L2.toLowerCase().startsWith("epsg:")) {
        const t2 = Number(L2.slice(5));
        isNaN(t2) || t2 === 0 || (B = new k({ wkid: t2 }));
      } else
        B = c$1(L2);
    const P = new M(T2, k$1, C2, U2);
    P.spatialReference = B;
    const E2 = e(t$12, "MRF_META/Rsets"), H = parseInt(E2 && E2.getAttribute("scale") || "2", 10), W = new p$1({ origin: new j$1({ x: P.xmin, y: P.ymax, spatialReference: B }), blockWidth: b2, blockHeight: A2, pyramidBlockWidth: b2, pyramidBlockHeight: A2, compression: f2, pyramidScalingFactor: H }), D2 = new j$1({ x: (C2 - T2) / s2, y: (U2 - k$1) / o2, spatialReference: B });
    return { rasterInfo: new p$3({ width: s2, height: o2, extent: P, spatialReference: B, bandCount: p2, pixelType: u2, pixelSize: D2, noDataValue: R2, storageInfo: W }), files: { mrf: this.url, index: v2 || this.url.replace(".mrf", ".idx"), data: S2 || this.url.replace(".mrf", I$2.get(f2)) } };
  }
  _fetchAuxiliaryData(t2) {
    return __async(this, null, function* () {
      try {
        const { data: e2 } = yield this.request(this.url + ".aux.xml", { responseType: "xml", signal: t2 == null ? void 0 : t2.signal });
        return m(e2);
      } catch (e2) {
        return null;
      }
    });
  }
};
e$2([y$1()], b.prototype, "_files", void 0), e$2([y$1()], b.prototype, "_storageIndex", void 0), e$2([y$1({ type: String, json: { write: true } })], b.prototype, "datasetFormat", void 0), b = e$2([i$2("esri.layers.support.rasterIO.MRFRaster")], b);
var A = b;
const T = function(e2, t2) {
  const r2 = e2.get(t2);
  return r2 && r2.values;
}, I$1 = function(e2, t2) {
  const r2 = e2.get(t2);
  return r2 && r2.values[0];
};
let w = class extends L {
  constructor() {
    super(...arguments), this._files = null, this._headerInfo = null, this._bufferSize = 1048576, this.datasetFormat = "TIFF";
  }
  open(e2) {
    return __async(this, null, function* () {
      var i2;
      yield this.init();
      const s2 = e2 ? e$3(e2.signal) : null, { data: l2 } = yield this.request(this.url, { range: { from: 0, to: this._bufferSize }, responseType: "array-buffer", signal: s2 });
      if (!l2)
        throw new s$1("tiffraster:open", "failed to open url " + this.url);
      this.datasetName = this.url.slice(this.url.lastIndexOf("/") + 1);
      const { littleEndian: p2, firstIFD: c2, isBigTiff: y2 } = b$1(l2), x2 = [];
      yield this.readIFDs(x2, l2, p2, c2, 0, y2 ? 8 : 4, s2);
      const T2 = y$3(x2), { width: I2, height: w2, tileWidth: E2, tileHeight: F, planes: S2, pixelType: v2, compression: b2, firstPyramidLevel: _, maximumPyramidLevel: j2, pyramidBlockWidth: R2, pyramidBlockHeight: B, tileBoundary: D2, affine: k2, metadata: L2 } = T2, O2 = M.fromJSON(T2.extent), z = O2.spatialReference, H = new j$1(O2 ? { x: O2.xmin, y: O2.ymax, spatialReference: z } : { x: 0, y: 0 }), P = new p$1({ blockWidth: E2, blockHeight: F, pyramidBlockWidth: R2, pyramidBlockHeight: B, compression: b2, origin: H, firstPyramidLevel: _, maximumPyramidLevel: j2, blockBoundary: D2 }), G = new j$1({ x: (O2.xmax - O2.xmin) / I2, y: (O2.ymax - O2.ymin) / w2, spatialReference: z }), q = L2 ? { BandProperties: L2.bandProperties, DataType: L2.dataType } : {}, W = new p$3({ width: I2, height: w2, bandCount: S2, pixelType: v2, compression: b2, pixelSize: G, storageInfo: P, spatialReference: z, keyProperties: q, extent: O2, statistics: L2 ? L2.statistics : null });
      if (k2 != null && k2.length && (W.nativeExtent = new M({ xmin: -0.5, ymin: 0.5 - w2, xmax: I2 - 0.5, ymax: 0.5, spatialReference: z }), W.transform = new m$1({ polynomialOrder: 1, forwardCoefficients: [k2[2] + k2[0] / 2, k2[5] - k2[3] / 2, k2[0], k2[3], -k2[1], -k2[4]] }), W.extent = W.transform.forwardTransform(W.nativeExtent), W.pixelSize = new j$1({ x: (O2.xmax - O2.xmin) / I2, y: (O2.ymax - O2.ymin) / w2, spatialReference: z }), P.origin.x = -0.5, P.origin.y = 0.5), (i2 = this.ioConfig.skipExtensions) == null || !i2.includes("aux.xml")) {
        const t2 = yield this._fetchAuxiliaryData(e2);
        if (t2 != null) {
          var C2;
          if (W.statistics = (C2 = t2.statistics) != null ? C2 : W.statistics, W.histograms = t2.histograms, t2.histograms && !r$2(W.statistics) && (W.statistics = o$4(t2.histograms)), t2.transform && !k2) {
            W.transform = t2.transform, W.nativeExtent = W.extent;
            const e3 = W.transform.forwardTransform(W.nativeExtent);
            W.pixelSize = new j$1({ x: (e3.xmax - e3.xmin) / I2, y: (e3.ymax - e3.ymin) / w2, spatialReference: z }), W.extent = e3;
          }
          W.spatialReference || (W.spatialReference = t2.spatialReference);
        }
      }
      if (this._set("rasterInfo", W), this._headerInfo = __spreadValues({ littleEndian: p2, isBigTiff: y2, ifds: x2 }, T2), !this._headerInfo.isSupported)
        throw new s$1("tiffraster:open", "this tiff is not supported: " + this._headerInfo.message);
      this.updateTileInfo();
    });
  }
  fetchRawTile(_0, _1, _2) {
    return __async(this, arguments, function* (e2, t2, r2, i2 = {}) {
      var s2;
      if ((s2 = this._headerInfo) == null || !s2.isSupported || this.isBlockOutside(e2, t2, r2))
        return null;
      const a2 = this.getTileLocation(e2, t2, r2);
      if (!a2)
        return null;
      const { range: o2, actualTileWidth: n2, actualTileHeight: f2, ifd: l2 } = a2, { data: u2 } = yield this.request(this.url, { range: o2, responseType: "array-buffer", signal: i2.signal }), { blockWidth: m2, blockHeight: p2 } = this.getBlockWidthHeight(e2), c2 = yield this.decodePixelBlock(u2, { format: "tiff", customOptions: { headerInfo: this._headerInfo, ifd: l2, offset: 0, size: 0 }, width: m2, height: p2, planes: null, pixelType: null });
      let h2, d2, y2;
      if (n2 !== m2 || f2 !== p2) {
        let e3 = c2.mask;
        if (e3)
          for (h2 = 0; h2 < p2; h2++)
            if (y2 = h2 * m2, h2 < f2)
              for (d2 = n2; d2 < m2; d2++)
                e3[y2 + d2] = 0;
            else
              for (d2 = 0; d2 < m2; d2++)
                e3[y2 + d2] = 0;
        else
          for (e3 = new Uint8Array(m2 * p2), c2.mask = e3, h2 = 0; h2 < f2; h2++)
            for (y2 = h2 * m2, d2 = 0; d2 < n2; d2++)
              e3[y2 + d2] = 1;
      }
      return c2;
    });
  }
  readIFDs(e2, t2, r2, i2, s2, a2 = 4, o2) {
    return __async(this, null, function* () {
      if (!i2)
        return null;
      if (i2 >= t2.byteLength || i2 < 0) {
        t2 = (yield this.request(this.url, { range: { from: i2 + s2, to: i2 + s2 + this._bufferSize }, responseType: "array-buffer", signal: o2 })).data, s2 = i2 + s2, i2 = 0;
      }
      const n2 = yield this.readIFD(t2, r2, i2, s2, n$7.TIFF_TAGS, a2, o2);
      if (e2.push(n2.ifd), !n2.nextIFD)
        return null;
      yield this.readIFDs(e2, t2, r2, n2.nextIFD - s2, s2, a2, o2);
    });
  }
  readIFD(_0, _1, _2, _3) {
    return __async(this, arguments, function* (e2, t2, r2, i2, s2 = n$7.TIFF_TAGS, a2 = 4, o2) {
      if (!e2)
        return null;
      const n2 = x$6(e2, t2, r2, i2, s2, a2);
      if (n2.success) {
        const r3 = [];
        if (n2.ifd.forEach((e3) => {
          e3.values || r3.push(e3);
        }), r3.length > 0) {
          const s3 = r3.map((e3) => e3.offlineOffsetSize), a3 = Math.min.apply(null, s3.map((e3) => e3[0]));
          if (Math.min.apply(null, s3.map((e3) => e3[0] + e3[1])) - a3 <= this._bufferSize) {
            const { data: s4 } = yield this.request(this.url, { range: { from: a3, to: a3 + this._bufferSize }, responseType: "array-buffer", signal: o2 });
            e2 = s4, i2 = a3, r3.forEach((r4) => E$1(e2, t2, r4, i2));
          }
        }
        if (n2.ifd.has("GEOKEYDIRECTORY")) {
          const r4 = n2.ifd.get("GEOKEYDIRECTORY"), s3 = r4.values;
          if (s3 && s3.length > 4) {
            const a3 = s3[0] + "." + s3[1] + "." + s3[2], n3 = yield this.readIFD(e2, t2, r4.valueOffset + 6 - i2, i2, n$7.GEO_KEYS, 2, o2);
            r4.data = n3.ifd, r4.data && r4.data.set("GEOTIFFVersion", { id: 0, type: 2, valueCount: 1, valueOffset: null, values: [a3] });
          }
        }
        return n2;
      }
      if (n2.requiredBufferSize && n2.requiredBufferSize !== e2.byteLength) {
        const r3 = yield this.request(this.url, { range: { from: i2, to: i2 + n2.requiredBufferSize + 4 }, responseType: "array-buffer", signal: o2 });
        return (e2 = r3.data).byteLength < n2.requiredBufferSize ? null : this.readIFD(e2, t2, 0, i2, n$7.TIFF_TAGS, 4, o2);
      }
    });
  }
  getTileLocation(e2, t2, r2) {
    const { firstPyramidLevel: i2, blockBoundary: s2 } = this.rasterInfo.storageInfo, a2 = e2 === 0 ? 0 : e2 - (i2 - 1), o2 = this._headerInfo.ifds[a2];
    if (!o2)
      return null;
    const n2 = T(o2, "TILEOFFSETS");
    if (n2 === void 0)
      return null;
    const f2 = T(o2, "TILEBYTECOUNTS"), { minRow: l2, minCol: u2, maxRow: m2, maxCol: p2 } = s2[a2];
    if (t2 > m2 || r2 > p2 || t2 < l2 || r2 < u2)
      return null;
    const c2 = I$1(o2, "IMAGEWIDTH"), h2 = I$1(o2, "IMAGELENGTH"), d2 = I$1(o2, "TILEWIDTH"), y2 = I$1(o2, "TILELENGTH"), g2 = t2 * (p2 + 1) + r2, x2 = n2[g2], w2 = f2[g2];
    if (x2 == null || w2 == null)
      return null;
    return { range: { from: x2, to: x2 + w2 - 1 }, ifd: o2, actualTileWidth: r2 === p2 ? c2 % d2 : d2, actualTileHeight: t2 === m2 ? h2 % y2 : y2 };
  }
  _fetchAuxiliaryData(e2) {
    return __async(this, null, function* () {
      try {
        const { data: t2 } = yield this.request(this.url + ".aux.xml", { responseType: "xml", signal: e2 == null ? void 0 : e2.signal });
        return m(t2);
      } catch (e3) {
        return null;
      }
    });
  }
};
e$2([y$1()], w.prototype, "_files", void 0), e$2([y$1()], w.prototype, "_headerInfo", void 0), e$2([y$1()], w.prototype, "_bufferSize", void 0), e$2([y$1({ type: String, json: { write: true } })], w.prototype, "datasetFormat", void 0), w = e$2([i$2("esri.layers.support.rasterDatasets.TIFFRaster")], w);
var E = w;
const c = new Map();
c.set("CRF", { desc: "Cloud Raster Format", constructor: I$3 }), c.set("MRF", { desc: "Meta Raster Format", constructor: A }), c.set("TIFF", { desc: "GeoTIFF", constructor: E }), c.set("RasterTileServer", { desc: "Raster Tile Server", constructor: v }), c.set("JPG", { desc: "JPG Raster Format", constructor: x$1 }), c.set("PNG", { desc: "PNG Raster Format", constructor: x$1 }), c.set("GIF", { desc: "GIF Raster Format", constructor: x$1 }), c.set("BMP", { desc: "BMP Raster Format", constructor: x$1 });
class n {
  static get supportedFormats() {
    const t2 = new Set();
    return c.forEach((r2, e2) => t2.add(e2)), t2;
  }
  static open(r2) {
    return __async(this, null, function* () {
      const { url: e2, ioConfig: s2, sourceJSON: o2 } = r2;
      let a2 = r2.datasetFormat;
      a2 == null && e2.lastIndexOf(".") && (a2 = e2.slice(e2.lastIndexOf(".") + 1).toUpperCase()), a2 === "OVR" || a2 === "TIF" ? a2 = "TIFF" : a2 !== "JPG" && a2 !== "JPEG" && a2 !== "JFIF" || (a2 = "JPG"), e2.toLowerCase().indexOf("/imageserver") > -1 && e2.toLowerCase().indexOf("/wcsserver") === -1 && (a2 = "RasterTileServer");
      const n2 = { url: e2, sourceJSON: o2, datasetFormat: a2, ioConfig: s2 || { bandIds: null, sampling: null } };
      let i2, u2;
      if (this.supportedFormats.has(a2))
        return i2 = c.get(a2).constructor, u2 = new i2(n2), yield u2.open({ signal: r2.signal }), u2;
      if (a2)
        throw new s$1("rasterfactory:open", "not a supported format " + a2);
      const l2 = Array.from(c.keys());
      let m2 = 0;
      const F = function() {
        return a2 = l2[m2++], a2 ? (i2 = c.get(a2).constructor, u2 = new i2(n2), u2.open({ signal: r2.signal }).then(() => u2).catch(() => F())) : null;
      };
      return F();
    });
  }
  static register(t2, r2, e2) {
    c.has(t2.toUpperCase()) || c.set(t2.toUpperCase(), { desc: r2, constructor: e2 });
  }
}
const R = o$5()({ RSP_NearestNeighbor: "nearest", RSP_BilinearInterpolation: "bilinear", RSP_CubicConvolution: "cubic", RSP_Majority: "majority" });
function I() {
  return { enabled: !this.loaded || this.raster.datasetFormat === "RasterTileServer" && this.raster.tileType === "Raster" };
}
let O = class extends t$3(s$2(o$6(l$3(u$5(x$3(l$4(b$2))))))) {
  constructor(...e2) {
    super(...e2), this.bandIds = null, this.interpolation = null, this.legendEnabled = true, this.isReference = null, this.listMode = "show", this.sourceJSON = null, this.version = null, this.title = null, this.type = "imagery-tile", this.operationalLayerType = "ArcGISTiledImageServiceLayer", this.popupEnabled = true, this.popupTemplate = null;
  }
  normalizeCtorArgs(e2, r2) {
    return typeof e2 == "string" ? __spreadValues({ url: e2 }, r2) : e2;
  }
  load(e2) {
    const t2 = r$2(e2) ? e2.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Image Service"] }, e2).then(() => this._openRaster(t2), () => this._openRaster(t2))), Promise.resolve(this);
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  get fields() {
    var e2, r2;
    let t2 = [new y$4({ name: "Raster.ServicePixelValue", alias: "Pixel Value", domain: null, editable: false, length: 50, type: "string" })];
    const o2 = (e2 = this.rasterInfo) == null || (r2 = e2.attributeTable) == null ? void 0 : r2.fields, i2 = "Raster.";
    if (o2) {
      const e3 = o2.filter((e4) => e4.type !== "oid" && e4.name.toLowerCase() !== "value").map((e4) => {
        const r3 = e4.clone();
        return r3.name = i2 + e4.name, r3;
      });
      t2 = t2.concat(e3);
    }
    return t2;
  }
  set renderer(e2) {
    this._set("renderer", e2), this.updateRenderer();
  }
  readRenderer(e2, r2, t2) {
    const o2 = r2 && r2.layerDefinition && r2.layerDefinition.drawingInfo && r2.layerDefinition.drawingInfo.renderer, i2 = p$4(o2, t2) || void 0;
    if (i2 != null)
      return i2;
  }
  createPopupTemplate(e2) {
    return a$2(this, e2);
  }
  write(e2, r2) {
    const { raster: t2 } = this;
    if (this.loaded ? t2.datasetFormat === "RasterTileServer" && (t2.tileType === "Raster" || t2.tileType === "Map") : this.url && /\/ImageServer(\/|\/?$)/i.test(this.url))
      return super.write(e2, r2);
    if (r2 && r2.messages) {
      const e3 = `${r2.origin}/${r2.layerContainerType || "operational-layers"}`;
      r2.messages.push(new s$1("layer:unsupported", `Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${e3}'`, { layer: this }));
    }
    return null;
  }
  _openRaster(e2) {
    return __async(this, null, function* () {
      this.raster ? (this.raster.rasterInfo || (yield this.raster.open()), this.url = this.raster.url) : this.raster = yield n.open({ url: this.url, sourceJSON: this.sourceJSON, ioConfig: this.ioConfig, signal: e2 });
      const { rasterInfo: r2 } = this.raster;
      if (!r2)
        throw new s$1("imagery-tile-layer:load", "cannot load resources on " + this.url);
      this.sourceJSON = this.sourceJSON || this.raster.sourceJSON, this.sourceJSON != null && (this._set("version", this.sourceJSON.currentVersion), this._set("copyright", this.sourceJSON.copyrightText)), this.title == null && (this.title = this.raster.datasetName), this.raster.tileType === "Map" && (this.popupEnabled = false), this._configDefaultSettings();
    });
  }
};
e$2([y$1({ type: [N$1], json: { write: { overridePolicy: I } } })], O.prototype, "bandIds", void 0), e$2([y$1({ json: { write: { overridePolicy: I } } }), r$4(R)], O.prototype, "interpolation", void 0), e$2([y$1({ json: { write: true } })], O.prototype, "multidimensionalDefinition", void 0), e$2([y$1(d$5)], O.prototype, "legendEnabled", void 0), e$2([y$1({ type: Boolean, json: { read: false, write: { enabled: true, overridePolicy: () => ({ enabled: false }) } } })], O.prototype, "isReference", void 0), e$2([y$1({ type: ["show", "hide"] })], O.prototype, "listMode", void 0), e$2([y$1()], O.prototype, "sourceJSON", void 0), e$2([y$1({ readOnly: true })], O.prototype, "version", void 0), e$2([y$1()], O.prototype, "title", void 0), e$2([y$1({ readOnly: true, json: { read: false } })], O.prototype, "type", void 0), e$2([y$1({ type: ["ArcGISTiledImageServiceLayer"] })], O.prototype, "operationalLayerType", void 0), e$2([y$1({ type: Boolean, value: true, json: { read: { source: "disablePopup", reader: (e2, r2) => !r2.disablePopup }, write: { target: "disablePopup", overridePolicy: I, writer(e2, r2, t2) {
  r2[t2] = !e2;
} } } })], O.prototype, "popupEnabled", void 0), e$2([y$1({ type: M$3, json: { read: { source: "popupInfo" }, write: { target: "popupInfo", overridePolicy: I } } })], O.prototype, "popupTemplate", void 0), e$2([y$1({ readOnly: true })], O.prototype, "defaultPopupTemplate", null), e$2([y$1({ readOnly: true, type: [y$4] })], O.prototype, "fields", null), e$2([y$1({ types: d$1, json: { name: "layerDefinition.drawingInfo.renderer", write: { overridePolicy: I }, origins: { "web-scene": { types: i$4, name: "layerDefinition.drawingInfo.renderer", write: { overridePolicy: (e2) => ({ enabled: e2 && e2.type !== "vector-field" }) } } } } })], O.prototype, "renderer", null), e$2([e$4("renderer")], O.prototype, "readRenderer", null), O = e$2([i$2("esri.layers.ImageryTileLayer")], O);
var x = O;
export default x;
