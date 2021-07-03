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
import { ae as e$1, af as y, ag as i, aa as s, a5 as r, d1 as n$1, cF as r$1, eo as r$2, ep as M, bV as t, eq as h, er as b, cZ as i$1, a0 as t$1, b6 as i$4, e_ as pt, a4 as n$4, eh as i$5, eH as z, ek as c, aO as c$1, cr as M$1, bC as r$5, ei as h$1, ej as p$1, eU as h$2, an as g$3, bI as h$3, b$ as e$2, _ as j, eP as x$1, dd as A } from "./vendor.74d5941c.js";
import { n as n$2, u as u$1 } from "./pixelUtils.5399eb4b.js";
import { y as y$1, g, b as b$1 } from "./rasterProjectionHelper.3405c919.js";
import { g as g$2, u, s as s$1, i as i$6 } from "./RawBlockCache.0fd02a44.js";
import { l, d as d$1 } from "./LayerView2D.06dde519.js";
import { a as a$1 } from "./drapedUtils.72df2b08.js";
import { d } from "./popupUtils.017b06d1.js";
import { I } from "./Utils.3f1577e5.js";
import { i as i$2, n as n$3, b as r$3, g as g$1 } from "./WGLContainer.74815466.js";
import { r as r$4, i as i$3 } from "./TileContainer.763b6c09.js";
import { a } from "./Container.d2c27c9d.js";
import "./FramebufferObject.18518335.js";
import "./_commonjsHelpers.f2a458db.js";
import "./definitions.6737c10c.js";
import "./VertexArrayObject.67803418.js";
import "./vec4f32.6de15d07.js";
import "./ShaderCompiler.b19da10d.js";
import "./earcut.0e5467f0.js";
import "./GeometryUtils.9c8423f5.js";
import "./MaterialKey.3bc4aaea.js";
import "./mat4f32.a5cabe00.js";
const p = (p2) => {
  let u2 = class extends p2 {
    constructor() {
      super(...arguments), this._rasterFieldPrefix = "Raster.", this.layer = null, this.view = null, this.fullExtent = null, this.tileInfo = null, this.datumTransformation = null;
    }
    get hasTilingEffects() {
      return this.layer.renderer && "dynamicRangeAdjustment" in this.layer.renderer && this.layer.renderer.dynamicRangeAdjustment;
    }
    fetchPopupFeatures(e2, r$12) {
      return __async(this, null, function* () {
        const { layer: i2 } = this;
        if (!e2)
          return Promise.reject(new s("imageryTileLayerView:fetchPopupFeatures", "Nothing to fetch without area", { layer: i2 }));
        const { popupEnabled: a2 } = i2, n2 = d(i2, r$12);
        if (!a2 || !r(n2))
          throw new s("imageryTileLayerView:fetchPopupFeatures", "Missing required popupTemplate or popupEnabled", { popupEnabled: a2, popupTemplate: n2 });
        const p3 = [], { value: u3 } = yield i2.identify(e2);
        if (u3) {
          var f, m;
          const e3 = u3.join(", "), t2 = { ObjectId: 0 }, r2 = "Raster.ServicePixelValue";
          t2[r2] = this._formatAttributeValue(e3, r2);
          const o = (f = i2.rasterInfo) == null || (m = f.attributeTable) == null ? void 0 : m.features;
          if (o && o.length > 0) {
            const r3 = o.filter((t3) => {
              const r4 = t3.attributes.value || t3.attributes.Value || t3.attributes.VALUE;
              return String(r4) === e3;
            });
            if (r3.length > 0) {
              const e4 = r3[0];
              if (e4) {
                for (const r4 in e4.attributes)
                  if (e4.attributes.hasOwnProperty(r4)) {
                    const i3 = this._rasterFieldPrefix + r4;
                    t2[i3] = this._formatAttributeValue(e4.attributes[r4], i3);
                  }
              }
            }
          }
          const a3 = new n$1(this.fullExtent.clone(), null, t2);
          a3.layer = i2, a3.sourceLayer = a3.layer, p3.push(a3);
        }
        return p3;
      });
    }
    updateFullExtent() {
      const e2 = this.layer.tileInfo;
      let t2;
      e2 && e2.spatialReference || (t2 = new s("layerview:tiling-information-missing", "The layer doesn't provide tiling information", { layer: this.layer }));
      const r2 = y$1(this.layer.fullExtent, this.view.spatialReference, false), i2 = g(this.layer.fullExtent, this.view.spatialReference, r2);
      return i2 == null && (t2 = new s("layerview:projection-not-supported", "The layer extent cannot be projected to the view's spatial reference", { layer: this.layer })), this._set("fullExtent", i2), this.datumTransformation || (this.datumTransformation = y$1(this.layer.fullExtent, this.view.spatialReference, true)), t2 ? Promise.reject(t2) : Promise.resolve();
    }
    _formatAttributeValue(e2, t2) {
      if (typeof e2 == "string") {
        const r2 = this.layer.popupTemplate && this.layer.popupTemplate.fieldInfos, i2 = this._getFieldInfo(r2, t2), o = i2 && i2.format;
        if (o) {
          let t3, r3;
          return e2.trim().indexOf(",") > -1 ? (t3 = ",", r3 = t3 + " ", this._formatDelimitedString(e2, t3, r3, o)) : e2.trim().indexOf(" ") > -1 ? (t3 = r3 = " ", this._formatDelimitedString(e2, t3, r3, o)) : this._formatNumberFromString(e2, o);
        }
      }
      return e2;
    }
    _getFieldInfo(e2, t2) {
      if (!e2 || !e2.length || !t2)
        return;
      const r2 = t2.toLowerCase();
      let i2;
      return e2.some((e3) => !(!e3.fieldName || e3.fieldName.toLowerCase() !== r2 && e3.fieldName.toLowerCase() !== r2.replace(/ /g, "_")) && (i2 = e3, true)), i2;
    }
    _formatDelimitedString(e2, t2, r2, i2) {
      return e2 && t2 && r2 && i2 ? e2.trim().split(t2).map((e3) => this._formatNumberFromString(e3, i2)).join(r2) : e2;
    }
    _formatNumberFromString(e2, t2) {
      if (!e2 || !t2)
        return e2;
      const r2 = Number(e2);
      return isNaN(r2) ? e2 : t2.format(r2);
    }
  };
  return e$1([y()], u2.prototype, "layer", void 0), e$1([y()], u2.prototype, "view", void 0), e$1([y()], u2.prototype, "fullExtent", void 0), e$1([y()], u2.prototype, "tileInfo", void 0), e$1([y({ readOnly: true })], u2.prototype, "hasTilingEffects", null), u2 = e$1([i("esri.views.layers.ImageryTileLayerView")], u2), u2;
};
const _ = { bandCount: 3, outMin: 0, outMax: 1, minCutOff: [0, 0, 0], maxCutOff: [255, 255, 255], factor: [1 / 255, 1 / 255, 1 / 255], useGamma: false, gamma: [1, 1, 1], gammaCorrection: [1, 1, 1], colormap: null, colormapOffset: null, type: "stretch" };
class x extends a {
  constructor(t2 = null, e2 = null, s2 = null) {
    super(), this._textureInvalidated = true, this._memoryUsed = null, this._supportsBilinear = true, this.stencilRef = 0, this.coordScale = [1, 1], this._symbolizerParameters = null, this.height = null, this.isRendereredSource = false, this.pixelRatio = 1, this.resolution = 0, this.rotation = 0, this._source = null, this.rawPixelData = null, this._suspended = false, this._bandIds = null, this._interpolation = null, this._transformGrid = null, this.width = null, this.x = 0, this.y = 0, this.transforms = { dvs: r$1() }, this.source = t2, this.transformGrid = e2, this.interpolation = s2;
  }
  destroy() {
    const t2 = this.getTextures();
    t2 == null || t2.textures.forEach((t3) => t3.dispose()), this._rasterTexture = null, this._transformGridTexture = null, this._colormapTexture = null;
  }
  get symbolizerParameters() {
    return this._symbolizerParameters || _;
  }
  set symbolizerParameters(t2) {
    this._symbolizerParameters = t2;
  }
  get source() {
    return this._source;
  }
  set source(t2) {
    this._source = t2, this._rasterTexture && (this._rasterTexture.dispose(), this._rasterTexture = null, this._rasterTextureBandIds = null, this._memoryUsed = null);
  }
  get suspended() {
    return this._suspended;
  }
  set suspended(t2) {
    this._suspended && !t2 && this.stage && (this.ready(), this.requestRender()), this._suspended = t2;
  }
  get bandIds() {
    return this._bandIds;
  }
  set bandIds(t2) {
    this._bandIds = t2, this.invalidateTexture();
  }
  get interpolation() {
    return this._interpolation;
  }
  set interpolation(t2) {
    this._interpolation = t2, this._rasterTexture && this._rasterTexture.setSamplingMode(!this._supportsBilinear || t2 !== "bilinear" && t2 !== "cubic" ? 9728 : 9729);
  }
  get transformGrid() {
    return this._transformGrid;
  }
  set transformGrid(t2) {
    this._transformGrid = t2, this._transformGridTexture && (this._transformGridTexture.dispose(), this._transformGridTexture = null, this._memoryUsed = null);
  }
  invalidateTexture() {
    this._textureInvalidated || (this._textureInvalidated = true, this.requestRender());
  }
  setTransform(t$12) {
    const o = r$2(this.transforms.dvs), [u2, l2] = t$12.toScreenNoRotation([0, 0], this.x, this.y), h$12 = this.resolution / this.pixelRatio / t$12.resolution, d2 = h$12 * this.width, m = h$12 * this.height, _2 = Math.PI * this.rotation / 180;
    M(o, o, t(u2, l2)), M(o, o, t(d2 / 2, m / 2)), h(o, o, -_2), M(o, o, t(-d2 / 2, -m / 2)), b(o, o, t(d2, m)), i$1(this.transforms.dvs, t$12.displayViewMat3, o);
  }
  getTextures() {
    if (!this._rasterTexture)
      return null;
    const t2 = [], e2 = [];
    return this._transformGridTexture && (e2.push(this._transformGridTexture), t2.push("u_transformGrid")), this._rasterTexture && (e2.push(this._rasterTexture), t2.push("u_image")), this._colormapTexture && (e2.push(this._colormapTexture), t2.push("u_colormap")), { names: t2, textures: e2 };
  }
  getMemoryUsage() {
    if (t$1(this._memoryUsed)) {
      const t2 = this.getTextures();
      if (t2 == null)
        return 0;
      this._memoryUsed = t2.textures.map((t3) => t3.descriptor.width * t3.descriptor.height * 4).reduce((t3, e2) => t3 + e2);
    }
    return this._memoryUsed;
  }
  onAttach() {
    this.invalidateTexture();
  }
  onDetach() {
    this.invalidateTexture();
  }
  updateTexture({ context: t2 }) {
    var e2, s2, r2;
    if (!this.stage)
      return (e2 = this._rasterTexture) == null || e2.dispose(), (s2 = this._transformGridTexture) == null || s2.dispose(), (r2 = this._colormapTexture) == null || r2.dispose(), this._rasterTexture = null, this._rasterTextureBandIds = null, this._transformGridTexture = null, void (this._colormapTexture = null);
    if (!this._textureInvalidated)
      return;
    this._textureInvalidated = false;
    const i2 = this.source, a2 = i2 && i2.pixels && i2.pixels.length > 0;
    this._createOrDestroyRasterTexture(t2), this._rasterTexture && (a2 ? (this._updateColormapTexture(t2), this.transformGrid && !this._transformGridTexture && (this._transformGridTexture = i$2(t2, this.transformGrid))) : this._rasterTexture.setData(null)), this.suspended || (this.ready(), this.requestRender());
  }
  _createOrDestroyRasterTexture(t2) {
    var e2, s2;
    const r2 = this.source ? n$2(this.source, this.bandIds) : null;
    if (!(r2 && r2.pixels && r2.pixels.length > 0))
      return void (this._rasterTexture && (this._rasterTexture.dispose(), this._rasterTextureBandIds = null, this._rasterTexture = null));
    const i2 = this._rasterTextureBandIds == null && this.bandIds == null || this._rasterTextureBandIds && this.bandIds && this._rasterTextureBandIds.join("") === this.bandIds.join("");
    if (this._rasterTexture) {
      if (i2)
        return;
      this._rasterTexture.dispose(), this._rasterTextureBandIds = null, this._rasterTexture = null;
    }
    const a2 = this.interpolation || "nearest", u2 = this.isRendereredSource || !((e2 = t2.capabilities.textureFloat) != null && e2.textureFloat);
    this._rasterTexture = n$3(t2, r2, a2, u2), this._supportsBilinear = (s2 = t2.capabilities.textureFloat) == null ? void 0 : s2.textureFloatLinear, this._rasterTextureBandIds = this.bandIds;
  }
  _updateColormapTexture(t2) {
    const e2 = this._colormap, s2 = this.symbolizerParameters.colormap;
    return s2 ? e2 ? s2.length !== e2.length || s2.some((t3, s3) => t3 !== e2[s3]) ? (this._colormapTexture && (this._colormapTexture.dispose(), this._colormapTexture = null), this._colormapTexture = r$3(t2, s2), void (this._colormap = s2)) : void 0 : (this._colormapTexture = r$3(t2, s2), void (this._colormap = s2)) : (this._colormapTexture && (this._colormapTexture.dispose(), this._colormapTexture = null), void (this._colormap = null));
  }
}
class e extends r$4 {
  constructor(t2, e2, i2, a2 = null) {
    super(t2, e2, i2), this.bitmap = new x(a2, null, null), this.bitmap.coordScale = i2, this.bitmap.once("isReady", () => this.ready());
  }
  destroy() {
    super.destroy(), this.bitmap.destroy(), this.bitmap = null, this.stage = null;
  }
  set stencilRef(t2) {
    this.bitmap.stencilRef = t2;
  }
  get stencilRef() {
    return this.bitmap.stencilRef;
  }
  getMemoryUsage() {
    return this.bitmap.getMemoryUsage();
  }
  setTransform(t2, s2) {
    super.setTransform(t2, s2), this.bitmap.transforms.dvs = this.transforms.dvs;
  }
  onAttach() {
    this.bitmap.stage = this.stage;
  }
  onDetach() {
    this.bitmap.stage = null;
  }
}
class n extends i$3 {
  constructor() {
    super(...arguments), this.isCustomTilingScheme = false;
  }
  createTile(e$12) {
    const s2 = this._getTileBounds(e$12);
    return new e(e$12, s2, this._tileInfoView.tileInfo.size);
  }
  destroyTile() {
  }
  prepareRenderPasses(e2) {
    const s2 = e2.registerRenderPass({ name: "bitmap (tile)", brushes: [g$1.raster], target: () => this.children.map((e3) => e3.bitmap), drawPhase: I.MAP });
    return [...super.prepareRenderPasses(e2), s2];
  }
  doRender(e2) {
    this.visible && e2.drawPhase === I.MAP && super.doRender(e2);
  }
  _getTileBounds(t2) {
    const i2 = this._tileInfoView.getTileBounds(i$4(), t2);
    if (this.isCustomTilingScheme && t2.world) {
      const { tileInfo: e2 } = this._tileInfoView, r2 = pt(e2.spatialReference);
      if (r2) {
        const { resolution: s2 } = e2.lodAt(t2.level), o = r2 / s2 % e2.size[0], n2 = o ? (e2.size[0] - o) * s2 : 0;
        i2[0] -= n2 * t2.world, i2[2] -= n2 * t2.world;
      }
    }
    return i2;
  }
}
const V = n$4.getLogger("esri.views.2d.layers.ImageryTileLayerView2D"), L = [0, 0];
let q = class extends p(i$5(l(d$1))) {
  constructor() {
    super(...arguments), this._tileStrategy = null, this._tileInfoView = null, this._fetchQueue = null, this._blockCacheRegistryUrl = null, this._blockCacheRegistryId = null, this._bitmapView = null, this._emptyTilePixelBlock = null, this._srcResolutions = null, this._previousLOD = null, this._needBlockCacheUpdate = false, this._globalSymbolizerParams = null, this._symbolizerParams = null, this._abortController = null, this._globalUpdateRequested = false, this._isCustomTilingScheme = false, this.useWebGLForProcessing = true, this._redrawDebounced = z((e2) => this._redrawImage(e2), 2e3);
  }
  initialize() {
    const e2 = this.updateFullExtent();
    this.addResolvingPromise(e2);
  }
  get useProgressiveUpdate() {
    return this._get("useProgressiveUpdate") == null || this._get("useProgressiveUpdate");
  }
  set useProgressiveUpdate(e2) {
    if (this._tileStrategy && this.useProgressiveUpdate !== e2) {
      this._tileStrategy.destroy(), this._bitmapView.removeAllChildren();
      const t2 = this._getCacheSize(e2);
      this._tileStrategy = new c({ cachePolicy: "purge", resampling: false, acquireTile: (e3) => this.acquireTile(e3), releaseTile: (e3) => this.releaseTile(e3), cacheSize: t2, tileInfoView: this._tileInfoView }), this._set("useProgressiveUpdate", e2), this.requestUpdate();
    }
  }
  hitTest(e2, t2) {
    if (this.suspended)
      return Promise.resolve(null);
    const i2 = this.view.toMap(c$1(e2, t2));
    return Promise.resolve(new n$1({ attributes: {}, geometry: i2 }));
  }
  update(e2) {
    this._fetchQueue.pause(), this._fetchQueue.state = e2.state, this._tileStrategy.update(e2), this._fetchQueue.resume();
    const { extent: t2, resolution: i2, scale: s2 } = e2.state, r2 = this._tileInfoView.getClosestInfoForScale(s2);
    if (this.layer.raster) {
      var a2;
      if (!this.useProgressiveUpdate || this._needBlockCacheUpdate) {
        const e3 = this._srcResolutions[r2.level], s3 = t2.toJSON ? t2 : M$1.fromJSON(t2);
        g$2(this._blockCacheRegistryUrl, this._blockCacheRegistryId, s3, i2, e3, this.layer.raster.ioConfig.sampling);
      }
      this._needBlockCacheUpdate = false, ((a2 = this._previousLOD) == null ? void 0 : a2.level) !== r2.level && (this._previousLOD = r2, this._symbolizerParams != null && this._updateSymbolizerParams(), this._tileStrategy.updateCacheSize(0));
    }
    this.notifyChange("updating");
  }
  attach() {
    this.layer.increaseRasterJobHandlerUsage(), r$5().supportsTextureFloat || (this.useWebGLForProcessing = false), this.layer.raster && (this.layer.raster.ioConfig.allowPartialFill = true), this._initializeTileInfo(), this._tileInfoView = new h$1(this.tileInfo, this.fullExtent), this._fetchQueue = new p$1({ tileInfoView: this._tileInfoView, concurrency: 10, process: (e3, t2) => this.fetchTile(e3, t2) });
    const e2 = this._getCacheSize(this.useProgressiveUpdate);
    this._tileStrategy = new c({ cachePolicy: "purge", resampling: false, acquireTile: (e3) => this.acquireTile(e3), releaseTile: (e3) => this.releaseTile(e3), cacheSize: e2, tileInfoView: this._tileInfoView }), this._bitmapView = new n(this._tileInfoView), this._bitmapView.isCustomTilingScheme = this._isCustomTilingScheme, this.container.addChild(this._bitmapView), this.handles.add([h$2(this, ["layer.bandIds", "layer.renderer"], () => this._redrawDebounced().catch((e3) => {
      g$3(e3) || V.error(e3);
    })), h$2(this, ["layer.interpolation"], (e3, t2) => {
      e3 !== "majority" && t2 !== "majority" || !this._canUseMajorityInterpolationOnDataSource() ? this._redrawDebounced().catch((e4) => {
        g$3(e4) || V.error(e4);
      }) : this.refreshDebounced();
    }), h$2(this, ["layer.multidimensionalDefinition"], this.refreshDebounced)], "attach"), this._updateBlockCacheRegistry();
  }
  detach() {
    this.handles.remove("attach"), this.layer.decreaseRasterJobHandlerUsage(), this._tileStrategy.destroy(), this._fetchQueue.clear(), this.container.removeAllChildren(), this._fetchQueue = this._tileStrategy = this._tileInfoView = null, u(this._blockCacheRegistryUrl, this._blockCacheRegistryId);
  }
  moveStart() {
    this.requestUpdate();
  }
  viewChange() {
    this.requestUpdate();
  }
  moveEnd() {
    !this.hasTilingEffects && this.useProgressiveUpdate || (this._abortController && this._abortController.abort(), this._abortController = h$3(), this._fetchQueue.length === 0 && this._redrawImage(this._abortController.signal).then(() => {
      this._globalUpdateRequested = false, this.requestUpdate();
    }));
    const e2 = this._getCacheSize(this.useProgressiveUpdate);
    this._tileStrategy.updateCacheSize(e2), this.requestUpdate();
  }
  createFetchPopupFeaturesQueryGeometry(e2, t2) {
    return a$1(e2, t2, this.view);
  }
  doRefresh() {
    return __async(this, null, function* () {
      this.updateRequested || this.suspended || (this.layer.updateRenderer(), this._updateSymbolizerParams(), this._updateBlockCacheRegistry(true), this._fetchQueue.reset(), this._tileStrategy.tiles.forEach((e2) => this._enqueueTileFetch(e2)), this.notifyChange("updating"));
    });
  }
  isUpdating() {
    return this._fetchQueue.length > 0 || this._globalUpdateRequested;
  }
  acquireTile(e2) {
    const t2 = this._bitmapView.createTile(e2), i2 = t2.bitmap;
    return [i2.x, i2.y] = this._tileInfoView.getTileCoords(L, t2.key), i2.resolution = this._tileInfoView.getTileResolution(t2.key), [i2.width, i2.height] = this._tileInfoView.tileInfo.size, this._enqueueTileFetch(t2), this.requestUpdate(), this._needBlockCacheUpdate = true, this._globalUpdateRequested = this.hasTilingEffects || !this.useProgressiveUpdate, t2;
  }
  releaseTile(e2) {
    this._fetchQueue.abort(e2.key.id), this._bitmapView.removeChild(e2), e2.once("detach", () => {
      e2.destroy(), this.requestUpdate();
    }), this.requestUpdate();
  }
  fetchTile(e2, s2) {
    const r2 = !t$1(s2) && s2.signal, a2 = this._canUseWebGLForProcessing(), l2 = { tileInfo: this.tileInfo, signal: e$2(r2), registryId: this._blockCacheRegistryId, requestRawData: a2, srcResolution: this._srcResolutions[e2.level], datumTransformation: this.datumTransformation, interpolation: a2 ? "nearest" : this.layer.interpolation };
    return this.layer.fetchTile(e2.level, e2.row, e2.col, l2);
  }
  _canUseWebGLForProcessing() {
    return this.useWebGLForProcessing && this.layer.symbolizer.canRenderInWebGL && !(this.layer.interpolation === "majority" && this._canUseMajorityInterpolationOnDataSource());
  }
  _getCacheSize(e2) {
    return e2 ? 40 : 0;
  }
  _initializeTileInfo() {
    const e2 = this.view.spatialReference, t2 = new j({ x: this.fullExtent.xmin, y: this.fullExtent.ymax, spatialReference: e2 }), { scales: i2, srcResolutions: s2, isCustomTilingScheme: r2 } = b$1(this.layer.rasterInfo, e2), a2 = x$1.create({ spatialReference: e2, size: 512, scales: i2 });
    (a2.origin.x === 0 || a2.origin.x > t2.x) && (a2.origin = t2), this._isCustomTilingScheme = r2, this._set("tileInfo", a2), this._srcResolutions = s2 != null ? s2 : [];
  }
  _enqueueTileFetch(e2, t2) {
    return __async(this, null, function* () {
      if (!this._fetchQueue.has(e2.key.id)) {
        try {
          const t3 = yield this._fetchQueue.push(e2.key), { bandIds: s2 } = this.layer;
          let r2 = !this.useProgressiveUpdate || this.hasTilingEffects && !this._globalSymbolizerParams;
          if (this._globalUpdateRequested && !this.moving && this._fetchQueue.length === 0) {
            r2 = false;
            try {
              yield this._redrawImage(this._abortController && this._abortController.signal);
            } catch (i2) {
              g$3(i2) && V.error(i2);
            }
            this._globalUpdateRequested = false;
          }
          const a2 = this._canUseWebGLForProcessing();
          if (a2 && !this.hasTilingEffects && this._symbolizerParams == null && this._updateSymbolizerParams(), t3 && t3.pixelBlock) {
            const i2 = { extent: t3.extent, pixelBlock: t3.pixelBlock };
            if (e2.bitmap.rawPixelData = i2, a2)
              e2.bitmap.source = t3.pixelBlock, e2.bitmap.isRendereredSource = false;
            else {
              const t4 = yield this.layer.applyRenderer(i2, this.hasTilingEffects && this._globalSymbolizerParams && this._globalSymbolizerParams.type === "stretch" ? this._globalSymbolizerParams : null);
              e2.bitmap.source = t4, e2.bitmap.isRendereredSource = true;
            }
            e2.bitmap.symbolizerParameters = a2 ? this._globalSymbolizerParams || this._symbolizerParams : null, a2 ? e2.bitmap.transformGrid || (e2.bitmap.transformGrid = t3.transformGrid) : e2.bitmap.transformGrid = null;
          } else {
            const t4 = this._createEmptyTilePixelBlock();
            e2.bitmap.source = t4, e2.bitmap.symbolizerParameters = a2 ? this._symbolizerParams : null, e2.bitmap.transformGrid = null;
          }
          e2.bitmap.bandIds = s2, e2.bitmap.width = this._tileInfoView.tileInfo.size[0], e2.bitmap.height = this._tileInfoView.tileInfo.size[1], e2.bitmap.interpolation = this._getLayerInterpolation(), e2.bitmap.suspended = r2, e2.bitmap.invalidateTexture(), e2.once("attach", () => this.requestUpdate()), this._bitmapView.addChild(e2);
        } catch (i2) {
          g$3(i2) || V.error(i2);
        }
        this.requestUpdate();
      }
    });
  }
  _redrawImage(e2) {
    return __async(this, null, function* () {
      this.layer.updateRenderer(), this.hasTilingEffects ? yield this._updateGlobalSymbolizerParams(e2) : (this._updateSymbolizerParams(), this._globalSymbolizerParams = null);
      const { bandIds: t2 } = this.layer, i2 = this._bitmapView.children.map((e3) => __async(this, null, function* () {
        const i3 = this._canUseWebGLForProcessing();
        !i3 && e3.bitmap.rawPixelData ? (e3.bitmap.source = yield this.layer.applyRenderer(e3.bitmap.rawPixelData, this.hasTilingEffects && this._globalSymbolizerParams && this._globalSymbolizerParams.type === "stretch" ? this._globalSymbolizerParams : null), e3.bitmap.isRendereredSource = true) : (e3.bitmap.isRendereredSource && e3.bitmap.rawPixelData && (e3.bitmap.source = e3.bitmap.rawPixelData.pixelBlock), e3.bitmap.isRendereredSource = false), e3.bitmap.symbolizerParameters = i3 ? this._globalSymbolizerParams || this._symbolizerParams : null, e3.bitmap.bandIds = t2, e3.bitmap.interpolation = this._getLayerInterpolation(), e3.bitmap.suspended = false;
      }));
      yield A(i2), this.container.requestRender();
    });
  }
  _createEmptyTilePixelBlock() {
    if (!this._emptyTilePixelBlock) {
      const e2 = this._tileInfoView.tileInfo.size[0], t2 = this._tileInfoView.tileInfo.size[1];
      this._emptyTilePixelBlock = new u$1({ width: e2, height: t2, pixels: [new Uint8Array(e2 * t2)], mask: new Uint8Array(e2 * t2), pixelType: "u8" });
    }
    return this._emptyTilePixelBlock;
  }
  _updateGlobalSymbolizerParams(e2) {
    return __async(this, null, function* () {
      const t2 = { srcResolution: this._srcResolutions[this._previousLOD.level], registryId: this._blockCacheRegistryId, signal: e2 }, i2 = yield this.layer.fetchPixels(this.view.extent, this.view.width, this.view.height, t2);
      if (!i2 || !i2.pixelBlock)
        return;
      const s2 = this.layer.symbolizer.generateWebGLParameters({ pixelBlock: n$2(i2.pixelBlock, this.layer.bandIds), isGCS: this.view.spatialReference.isGeographic, resolution: { x: this._previousLOD.resolution, y: this._previousLOD.resolution }, bandIds: this.layer.bandIds });
      !this._canUseWebGLForProcessing() && s2 && s2.type === "stretch" && this.layer.renderer && this.layer.renderer.type === "raster-stretch" && (s2.factor = s2.factor.map((e3) => 255 * e3), s2.outMin = Math.round(255 * s2.outMin), s2.outMax = Math.round(255 * s2.outMax)), this._globalSymbolizerParams = s2;
    });
  }
  _updateSymbolizerParams() {
    this._symbolizerParams = this.layer.symbolizer.generateWebGLParameters({ pixelBlock: null, isGCS: this.view.spatialReference.isGeographic, resolution: { x: this._previousLOD.resolution, y: this._previousLOD.resolution }, bandIds: this.layer.bandIds });
  }
  _updateBlockCacheRegistry(e2 = false) {
    const { url: t2, rasterInfo: i2, multidimensionalDefinition: s2, raster: r2 } = this.layer, a2 = i2 != null && i2.multidimensionalInfo ? r2.getSliceIndex(s2) : null, l2 = i$6(t2, a2);
    if (l2 !== this._blockCacheRegistryUrl) {
      if (this._blockCacheRegistryUrl != null && u(this._blockCacheRegistryUrl, this._blockCacheRegistryId), this._blockCacheRegistryId = s$1(l2, this.layer.raster.rasterInfo), e2) {
        const e3 = this._tileInfoView.getClosestInfoForScale(this.view.scale), t3 = this._srcResolutions[e3.level];
        g$2(l2, this._blockCacheRegistryId, this.view.extent, this.view.resolution, t3, this.layer.raster.ioConfig.sampling);
      }
      this._blockCacheRegistryUrl = l2;
    }
  }
  _canUseMajorityInterpolationOnDataSource() {
    const { bandCount: e2, attributeTable: t2, colormap: i2, pixelType: s2 } = this.layer.rasterInfo;
    return e2 === 1 && (t2 != null || i2 != null || s2 === "u8" || s2 === "s8");
  }
  _getLayerInterpolation() {
    const e2 = this.layer.renderer.type;
    return e2 === "raster-colormap" || e2 === "unique-value" || e2 === "class-breaks" ? "nearest" : this.layer.interpolation;
  }
};
e$1([y()], q.prototype, "useProgressiveUpdate", null), q = e$1([i("esri.views.2d.layers.ImageryTileLayerView2D")], q);
var D = q;
export default D;
