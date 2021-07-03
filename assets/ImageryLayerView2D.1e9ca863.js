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
import { ae as e, af as y$1, et as w, ag as i, aa as s, a5 as r, ec as R, _ as j$1, a4 as n$1, eS as r$1, ac as u$1, eT as m, eH as z, cr as M, eM as C, an as g$1, aO as c, d1 as n$2, aj as U, eh as i$2, aE as d$2, eU as h } from "./vendor.74d5941c.js";
import { l, d as d$3 } from "./LayerView2D.06dde519.js";
import { d as d$1 } from "./popupUtils.017b06d1.js";
import { p as p$1 } from "./vectorFieldUtils.cdd2fa8a.js";
import { g as g$2 } from "./rasterProjectionHelper.3405c919.js";
import { r as r$2 } from "./Container.d2c27c9d.js";
import { e as et } from "./BaseGraphicContainer.437a7535.js";
import { i as i$1 } from "./GraphicContainer.df674785.js";
import { m as m$1 } from "./pixelUtils.5399eb4b.js";
import { e as e$1 } from "./Bitmap.0855f65e.js";
import { t } from "./BitmapContainer.dc86fd3a.js";
import { S } from "./ExportStrategy.a30951f7.js";
import "./mat4f32.a5cabe00.js";
import "./_commonjsHelpers.f2a458db.js";
import "./definitions.6737c10c.js";
import "./schemaUtils.ab77d03d.js";
import "./MD5.1ef35834.js";
import "./Utils.3f1577e5.js";
import "./FramebufferObject.18518335.js";
import "./MaterialKey.3bc4aaea.js";
import "./visualVariablesUtils.cb58e4df.js";
import "./CIMSymbolHelper.6546a069.js";
import "./Rect.b51904ac.js";
import "./BidiEngine.9b392b22.js";
import "./WGLMeshFactory.8977e3d9.js";
import "./ComputedAttributeStorage.2a55b702.js";
import "./quickselect.e4940b29.js";
import "./FeatureSetReader.a91e3e2d.js";
import "./centroid.93c1b848.js";
import "./visualVariablesUtils.bb9f81fa.js";
import "./tileUtils.7f9c3912.js";
import "./cimAnalyzer.0b895c7f.js";
import "./TurboLine.ecd76861.js";
import "./GeometryUtils.9c8423f5.js";
import "./projectionSupport.62084d5a.js";
import "./json.7989af9b.js";
import "./VertexArrayObject.67803418.js";
import "./FeatureContainer.3e3899c9.js";
import "./TileContainer.763b6c09.js";
import "./WGLContainer.74815466.js";
import "./vec4f32.6de15d07.js";
import "./ShaderCompiler.b19da10d.js";
import "./earcut.0e5467f0.js";
const n = (n2) => {
  let c2 = class extends n2 {
    constructor() {
      super(...arguments), this.view = null;
    }
    fetchPopupFeatures(e2, o) {
      return __async(this, null, function* () {
        const { layer: t2 } = this;
        if (!e2)
          throw new s("imagerylayerview:fetchPopupFeatures", "Nothing to fetch without area", { layer: t2 });
        const { popupEnabled: i2 } = t2, n3 = d$1(t2, o);
        if (!i2 || !r(n3))
          throw new s("imagerylayerview:fetchPopupFeatures", "Missing required popupTemplate or popupEnabled", { popupEnabled: i2, popupTemplate: n3 });
        const c3 = yield n3.getRequiredFields(), m2 = new R();
        m2.geometry = e2, m2.outFields = c3, m2.outSpatialReference = e2.spatialReference;
        const l2 = this.view.resolution, y2 = this.view.type === "2d" ? new j$1(l2, l2, this.view.spatialReference) : new j$1(0.5 * l2, 0.5 * l2, this.view.spatialReference), { returnTopmostRaster: d2, showNoDataRecords: w2 } = n3.layerOptions || { returnTopmostRaster: true, showNoDataRecords: false }, h2 = { returnDomainValues: true, returnTopmostRaster: d2, pixelSize: y2, showNoDataRecords: w2 };
        return t2.queryVisibleRasters(m2, h2).then((e3) => e3);
      });
    }
    canResume() {
      var e2;
      return !!super.canResume() && ((e2 = this.timeExtent) == null || !e2.isEmpty);
    }
  };
  return e([y$1()], c2.prototype, "layer", void 0), e([y$1()], c2.prototype, "suspended", void 0), e([y$1(w)], c2.prototype, "timeExtent", void 0), e([y$1()], c2.prototype, "view", void 0), c2 = e([i("esri.views.layers.ImageryLayerView")], c2), c2;
};
const f = n$1.getLogger("esri.views.2d.layers.imagery.ImageryGraphicsView2D");
let j = class extends u$1 {
  constructor() {
    super(...arguments), this.attached = false, this.container = new r$2(), this.updateRequested = false, this._graphicsView = null, this._projectFullExtentPromise = null, this.type = "Graphics", this._graphics = new m(), this._updateGraphics = z((t2, e2) => __async(this, null, function* () {
      if (!t2.stationary)
        return;
      const r2 = t2.state, i2 = new M({ xmin: r2.extent.xmin, ymin: r2.extent.ymin, xmax: r2.extent.xmax, ymax: r2.extent.ymax, spatialReference: r2.spatialReference }), s2 = t2.state.size[0], a = t2.state.size[1], o = {};
      o.timeExtent = this.timeExtent, o.requestAsImageElement = false, o.signal = e2, this._projectFullExtentPromise == null && (this._projectFullExtentPromise = this._getProjectedFullExtent(i2.spatialReference));
      const n2 = this.layer.renderer.type === "vector-field" ? this.layer.renderer.symbolTileSize : 50, h2 = yield this._projectFullExtentPromise, l2 = p$1(i2, s2, a, n2, h2), u2 = yield this.layer.fetchImage(l2.extent, l2.width, l2.height, o), d2 = this.layer.renderer;
      if (d2.type === "vector-field") {
        this._pixelData = { extent: l2.extent, pixelBlock: u2.pixelData.pixelBlock };
        const e3 = yield d2.getGraphicsFromPixelData(u2.pixelData, this.layer.rasterInfo.dataType === "vector-uv");
        this._graphicsView.update(t2), yield C(0).then(() => {
          this._graphics.set("items", e3);
        });
      }
    }));
  }
  destroy() {
    this.attached && (this.detach(), this.attached = false), this.updateRequested = false;
  }
  get updating() {
    return !this.attached || this.isUpdating();
  }
  update(t2) {
    this._updateGraphics(t2).catch((t3) => {
      g$1(t3) || f.error(t3);
    });
  }
  hitTest(t2, e2) {
    const r2 = this.view.toMap(c(t2, e2));
    return Promise.resolve(new n$2({ attributes: {}, geometry: r2, layer: this.layer }));
  }
  attach() {
    this._graphicsView = new et({ view: this.view, graphics: this._graphics, requestUpdateCallback: () => this.requestUpdate(), container: new i$1(this.view.featuresTilingScheme) }), this.attached = true;
  }
  detach() {
    this._graphics.destroy(), this._graphicsView.destroy(), this.container.removeChild(this._graphicsView.container), this._graphicsView = null;
  }
  moveStart() {
  }
  viewChange() {
  }
  moveEnd() {
  }
  install(t2) {
    this.container.addChild(this._graphicsView.container), t2.addChild(this.container);
  }
  uninstall(t2) {
    this.container.removeChild(this._graphicsView.container), t2.removeChild(this.container);
  }
  isUpdating() {
    return this._graphicsView.updating || this.updateRequested;
  }
  getPixelData() {
    return this.updating ? null : this._pixelData;
  }
  redraw() {
  }
  requestUpdate() {
    this.updateRequested || (this.updateRequested = true, this.view.requestUpdate());
  }
  _getProjectedFullExtent(t2) {
    return __async(this, null, function* () {
      try {
        return yield g$2(this.layer.fullExtent, t2);
      } catch (e2) {
        try {
          const e3 = (yield U(this.layer.url, { query: { option: "footprints", outSR: t2.wkid || JSON.stringify(t2.toJSON()), f: "json" } })).data.featureCollection.layers[0].layerDefinition.extent;
          return e3 ? M.fromJSON(e3) : null;
        } catch (e3) {
          return null;
        }
      }
    });
  }
};
e([y$1()], j.prototype, "attached", void 0), e([y$1()], j.prototype, "container", void 0), e([y$1()], j.prototype, "layer", void 0), e([y$1()], j.prototype, "timeExtent", void 0), e([y$1()], j.prototype, "view", void 0), e([y$1()], j.prototype, "updateRequested", void 0), e([y$1()], j.prototype, "updating", null), e([r$1({ graphics: "Graphics" })], j.prototype, "type", void 0), j = e([i("esri.views.2d.layers.imagery.ImageryGraphicsView2D")], j);
var v = j;
const u = n$1.getLogger("esri.views.2d.layers.imagery.ImageryView2D");
let g = class extends u$1 {
  constructor() {
    super(...arguments), this.attached = false, this.container = new r$2(), this.updateRequested = false, this.type = "Imagery", this._bitmapView = null;
  }
  destroy() {
    this.attached && (this.detach(), this.attached = false), this.updateRequested = false;
  }
  get updating() {
    return !this.attached || this.isUpdating();
  }
  update(e2) {
    this.strategy.update(e2).catch((e3) => {
      g$1(e3) || u.error(e3);
    });
  }
  detach() {
    this.strategy.destroy(), this._bitmapView.removeAllChildren(), this.container.removeAllChildren();
  }
  hitTest(e2, t2) {
    const r2 = this.view.toMap(c(e2, t2));
    return Promise.resolve(new n$2({ attributes: {}, geometry: r2, layer: this.layer }));
  }
  attach() {
    const e2 = this.layer.version >= 10, t$1 = this.layer.version >= 10.1 ? this.layer.imageMaxHeight : 2048, r2 = this.layer.version >= 10.1 ? this.layer.imageMaxWidth : 2048;
    this._bitmapView = new t(), this.strategy = new S({ container: this._bitmapView, imageNormalizationSupported: e2, imageMaxHeight: t$1, imageMaxWidth: r2, fetchSource: this._fetchImage.bind(this), requestUpdate: () => this.requestUpdate() }), this.attached = true;
  }
  moveStart() {
  }
  viewChange() {
  }
  moveEnd() {
  }
  install(e2) {
    this.container.addChild(this._bitmapView), e2.addChild(this.container);
  }
  uninstall(e2) {
    this.container.removeChild(this._bitmapView), e2.removeChild(this.container);
  }
  redraw() {
    this.strategy.updateExports((e2) => {
      e2.source instanceof HTMLImageElement ? e2.requestRender() : this.layer.applyRenderer({ pixelBlock: e2.source.pixelBlock }).then((t2) => {
        const r2 = e2.source;
        r2.pixelBlock = t2.pixelBlock, r2.filter = (e3) => this.layer.applyFilter(e3), this.container.requestRender();
      });
    });
  }
  requestUpdate() {
    this.updateRequested || (this.updateRequested = true, this.view.requestUpdate());
  }
  isUpdating() {
    return this.strategy.updating || this.updateRequested;
  }
  getPixelData() {
    if (this.updating)
      return null;
    const e2 = this.strategy.container.children;
    if (e2.length === 1 && e2[0].source)
      return { extent: e2[0].source.extent, pixelBlock: e2[0].source.originalPixelBlock };
    if (e2.length > 1) {
      const t2 = this.view.extent, r2 = e2.map((e3) => e3.source).filter((e3) => e3.extent && e3.extent.intersects(t2)).map((e3) => ({ extent: e3.extent, pixelBlock: e3.originalPixelBlock })), i2 = m$1(r2, t2);
      return i2 ? { extent: i2.extent, pixelBlock: i2.pixelBlock } : null;
    }
    return null;
  }
  _fetchImage(e2, t2, r2, i2) {
    return (i2 = i2 || {}).timeExtent = this.timeExtent, i2.requestAsImageElement = true, this.layer.fetchImage(e2, t2, r2, i2).then((e3) => e3.imageElement ? e3.imageElement : this.layer.applyRenderer(e3.pixelData, { signal: i2.signal }).then((t3) => {
      const r3 = new e$1(t3.pixelBlock, t3.extent.clone(), e3.pixelData.pixelBlock);
      return r3.filter = (e4) => this.layer.applyFilter(e4), r3;
    }));
  }
};
e([y$1()], g.prototype, "attached", void 0), e([y$1()], g.prototype, "container", void 0), e([y$1()], g.prototype, "layer", void 0), e([y$1()], g.prototype, "strategy", void 0), e([y$1()], g.prototype, "timeExtent", void 0), e([y$1()], g.prototype, "view", void 0), e([y$1()], g.prototype, "updateRequested", void 0), e([y$1()], g.prototype, "updating", null), e([r$1({ imagery: "Imagery" })], g.prototype, "type", void 0), g = e([i("esri.views.2d.layers.imagery.ImageryView2D")], g);
var y = g;
let p = class extends n(i$2(l(d$3))) {
  constructor() {
    super(...arguments), this._exportImageVersion = -1;
  }
  initialize() {
    this.handles.add(d$2(this, ["layer.blendMode"], (e2) => {
      this.subview && (this.subview.container.blendMode = e2);
    }, true));
  }
  get pixelData() {
    return this.updating ? null : this.subview.getPixelData();
  }
  get updating() {
    return !(this.subview && !this.subview.updating);
  }
  hitTest(e2, t2) {
    return this.suspended || !this.subview ? Promise.resolve(null) : this.subview.hitTest(e2, t2);
  }
  update(e2) {
    var t2;
    (t2 = this.subview) == null || t2.update(e2);
  }
  attach() {
    this.layer.increaseRasterJobHandlerUsage(), this._setSubView(), this.handles.add([d$2(this, "layer.exportImageServiceParameters.version", (e2) => {
      this._exportImageVersion !== e2 && (this._exportImageVersion = e2, this.requestUpdate());
    }), this.watch("timeExtent", () => {
      this.subview.timeExtent = this.timeExtent, this.requestUpdate();
    }), this.layer.on("redraw", () => this.subview.redraw()), h(this.layer, "renderer", () => this._setSubView())], "imagerylayerview-update");
  }
  detach() {
    this.layer.decreaseRasterJobHandlerUsage(), this.subview.destroy(), this.handles.remove("imagerylayerview-update"), this._exportImageVersion = -1;
  }
  moveStart() {
  }
  viewChange() {
  }
  moveEnd() {
    this.requestUpdate();
  }
  doRefresh() {
    return __async(this, null, function* () {
      this.requestUpdate();
    });
  }
  isUpdating() {
    return !this.subview || !this.suspended && this.subview.isUpdating();
  }
  _setSubView() {
    var e2;
    let t2 = "Imagery";
    var s2, i2;
    (((e2 = this.layer.renderer) == null ? void 0 : e2.type) === "vector-field" && this.layer.format === "lerc" && (t2 = "Graphics"), this.subview && this.subview.type === t2) || ((s2 = this.subview) == null || s2.uninstall(this.container), (i2 = this.subview) == null || i2.destroy(), this.subview = t2 === "Imagery" ? new y({ layer: this.layer, view: this.view, timeExtent: this.timeExtent }) : new v({ layer: this.layer, view: this.view, timeExtent: this.timeExtent }), this.subview.attach(), this.subview.install(this.container), this.subview.container.blendMode = this.layer.blendMode);
    this.requestUpdate();
  }
};
e([y$1()], p.prototype, "pixelData", null), e([y$1({ readOnly: true })], p.prototype, "updating", null), e([y$1()], p.prototype, "subview", void 0), p = e([i("esri.views.2d.layers.ImageryLayerView2D")], p);
var d = p;
export default d;
