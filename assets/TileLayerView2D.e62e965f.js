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
import { ae as e, af as y, ag as i$1, aa as s, dd as A, a5 as r, a4 as n, eh as i$2, ei as h, ej as p, ek as c, a0 as t, an as g, cd as e$1 } from "./vendor.74d5941c.js";
import { l, d as d$1 } from "./LayerView2D.06dde519.js";
import { a } from "./drapedUtils.72df2b08.js";
import { s as s$1 } from "./clickToleranceUtils.1b8c692d.js";
import { i as i$3 } from "./BitmapTileLayerView2D.08dbb104.js";
import "./Container.d2c27c9d.js";
import "./mat4f32.a5cabe00.js";
import "./_commonjsHelpers.f2a458db.js";
import "./BitmapTileContainer.2514059d.js";
import "./Utils.3f1577e5.js";
import "./FramebufferObject.18518335.js";
import "./WGLContainer.74815466.js";
import "./definitions.6737c10c.js";
import "./VertexArrayObject.67803418.js";
import "./vec4f32.6de15d07.js";
import "./ShaderCompiler.b19da10d.js";
import "./earcut.0e5467f0.js";
import "./GeometryUtils.9c8423f5.js";
import "./MaterialKey.3bc4aaea.js";
import "./TileContainer.763b6c09.js";
import "./Bitmap.0855f65e.js";
const i = (i2) => {
  let c2 = class extends i2 {
    fetchPopupFeatures(e2, t2) {
      return __async(this, null, function* () {
        const { layer: o } = this;
        if (!e2)
          return Promise.reject(new s("tilelayerview:fetchPopupFeatures", "Nothing to fetch without area", { layer: o }));
        if (o.type !== "tile")
          return Promise.reject(new s("tilelayerview:fetchPopupFeatures", "Layer type should be 'tile'", { type: o.type }));
        const i3 = this.get("view.scale"), c3 = o.allSublayers.toArray().filter((e3) => {
          const r2 = e3.minScale === 0 || i3 <= e3.minScale, t3 = e3.maxScale === 0 || i3 >= e3.maxScale;
          return e3.popupTemplate && e3.popupEnabled && e3.visible && r2 && t3;
        });
        return A(c3.map((o2) => __async(this, null, function* () {
          const s2 = o2.createQuery(), p2 = r(t2) ? t2.event : null, i4 = s$1({ renderer: o2.renderer, event: p2 });
          s2.geometry = this.createFetchPopupFeaturesQueryGeometry(e2, i4), s2.outFields = yield o2.popupTemplate.getRequiredFields();
          return (yield o2.queryFeatures(s2)).features;
        }))).then((e3) => [].concat(...e3.map((e4) => e4.value).filter(Boolean)));
      });
    }
  };
  return e([y()], c2.prototype, "layer", void 0), c2 = e([i$1("esri.layers.mixins.TileLayerView")], c2), c2;
};
const w = n.getLogger("esri.views.2d.layers.TileLayerView2D"), d = [0, 0];
let _ = class extends i(i$2(i$3(l(d$1)))) {
  constructor() {
    super(...arguments), this._tileStrategy = null, this._fetchQueue = null, this.layer = null;
  }
  initialize() {
    const e2 = this.layer.tileInfo, t2 = e2 && e2.spatialReference;
    let i2;
    t2 || (i2 = new s("layerview:tiling-information-missing", "The layer doesn't provide tiling information", { layer: this.layer })), t2.equals(this.view.spatialReference) || (i2 = new s("layerview:spatial-reference-incompatible", "The spatial reference of this layer does not meet the requirements of the view", { layer: this.layer })), this.watch("resampling", () => {
      this.refresh();
    }), i2 && this.addResolvingPromise(Promise.reject(i2));
  }
  get resampling() {
    return !("resampling" in this.layer) || this.layer.resampling !== false;
  }
  hitTest() {
    return null;
  }
  update(e2) {
    this._fetchQueue.pause(), this._fetchQueue.state = e2.state, this._tileStrategy.update(e2), this._fetchQueue.resume(), this.notifyChange("updating");
  }
  attach() {
    const e2 = "tileServers" in this.layer ? this.layer.tileServers : null;
    this._tileInfoView = new h(this.layer.tileInfo, this.layer.fullExtent), this._fetchQueue = new p({ tileInfoView: this._tileInfoView, concurrency: e2 && 10 * e2.length || 10, process: (e3, t2) => this.fetchTile(e3, t2) }), this._tileStrategy = new c({ cachePolicy: "keep", resampling: this.resampling, acquireTile: (e3) => this.acquireTile(e3), releaseTile: (e3) => this.releaseTile(e3), tileInfoView: this._tileInfoView }), this.requestUpdate(), this.container.requestRender(), super.attach();
  }
  detach() {
    super.detach(), this._tileStrategy.destroy(), this._fetchQueue.clear(), this.container.removeAllChildren(), this._fetchQueue = this._tileStrategy = this._tileInfoView = null;
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
  createFetchPopupFeaturesQueryGeometry(e2, t2) {
    return a(e2, t2, this.view);
  }
  doRefresh() {
    return __async(this, null, function* () {
      this.updateRequested || this.suspended || (this._fetchQueue.reset(), this._tileStrategy.tiles.forEach((e2) => this._enqueueTileFetch(e2)), this.notifyChange("updating"));
    });
  }
  isUpdating() {
    var e2;
    return ((e2 = this._fetchQueue) == null ? void 0 : e2.length) > 0;
  }
  acquireTile(e2) {
    const t2 = this._bitmapView.createTile(e2), i2 = t2.bitmap;
    return [i2.x, i2.y] = this._tileInfoView.getTileCoords(d, t2.key), i2.resolution = this._tileInfoView.getTileResolution(t2.key), [i2.width, i2.height] = this._tileInfoView.tileInfo.size, this._enqueueTileFetch(t2), this._bitmapView.addChild(t2), this.requestUpdate(), t2;
  }
  releaseTile(e2) {
    this._fetchQueue.abort(e2.key.id), this._bitmapView.removeChild(e2), e2.once("detach", () => e2.destroy()), this.requestUpdate();
  }
  fetchTile(e2, i2) {
    return __async(this, null, function* () {
      const r2 = "tilemapCache" in this.layer ? this.layer.tilemapCache : null, s2 = !t(i2) && i2.signal;
      if (!r2)
        try {
          return yield this._fetchImage(e2, s2);
        } catch (m) {
          if (!g(m) && !this.resampling)
            return this._createBlankImage();
          throw m;
        }
      const a2 = new e$1(0, 0, 0, 0);
      let h2;
      try {
        if (yield r2.fetchAvailabilityUpsample(e2.level, e2.row, e2.col, a2, { signal: s2 }), a2.level !== e2.level && !this.resampling)
          return this._createBlankImage();
        h2 = yield this._fetchImage(a2, s2);
      } catch (m) {
        if (g(m))
          throw m;
        h2 = yield this._fetchImage(e2, s2);
      }
      const { level: n2, row: c2, col: u } = a2;
      return this.resampling && n2 !== e2.level ? this._resampleImage(h2, n2, c2, u, e2.level, e2.row, e2.col) : h2;
    });
  }
  _enqueueTileFetch(e2) {
    return __async(this, null, function* () {
      if (!this._fetchQueue.has(e2.key.id)) {
        try {
          const t2 = yield this._fetchQueue.push(e2.key);
          e2.bitmap.source = t2, e2.bitmap.width = this._tileInfoView.tileInfo.size[0], e2.bitmap.height = this._tileInfoView.tileInfo.size[1], e2.once("attach", () => this.requestUpdate());
        } catch (t2) {
          g(t2) || w.error(t2);
        }
        this.requestUpdate();
      }
    });
  }
  _fetchImage(e2, t2) {
    return __async(this, null, function* () {
      return this.layer.fetchTile(e2.level, e2.row, e2.col, { timestamp: this.refreshTimestamp, signal: t2 });
    });
  }
  _resampleImage(e2, t2, i2, r2, s2, a2, l2) {
    const o = this._tileInfoView.tileInfo.size, h2 = this._tileInfoView.getTileResolution(t2), n2 = this._tileInfoView.getTileResolution(s2);
    let c2 = this._tileInfoView.getLODInfoAt(s2);
    const u = c2.getXForColumn(l2), m = c2.getYForRow(a2);
    c2 = this._tileInfoView.getLODInfoAt(t2);
    const p2 = c2.getXForColumn(r2), f = c2.getYForRow(i2), g2 = Math.round((u - p2) / h2), y2 = Math.round(-(m - f) / h2), w2 = Math.round(o[0] * (n2 / h2)), d2 = Math.round(o[1] * (n2 / h2)), _2 = this._createBlankImage();
    return _2.getContext("2d").drawImage(e2, g2, y2, w2, d2, 0, 0, o[0], o[1]), _2;
  }
  _createBlankImage() {
    const e2 = this._tileInfoView.tileInfo.size, t2 = document.createElement("canvas");
    return [t2.width, t2.height] = e2, t2;
  }
};
e([y()], _.prototype, "resampling", null), _ = e([i$1("esri.views.2d.layers.TileLayerView2D")], _);
var I = _;
export default I;
