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
import { eh as i, b3 as u, fd as d$1, ei as h, ej as p, ek as c, an as g, ae as e, af as y, ag as i$2 } from "./vendor.74d5941c.js";
import { l, d as d$2 } from "./LayerView2D.06dde519.js";
import { i as i$1 } from "./BitmapTileLayerView2D.08dbb104.js";
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
const f = [102113, 102100, 3857, 3785, 900913];
let d = class extends i(i$1(l(d$2))) {
  constructor() {
    super(...arguments), this._handles = new u(), this._tileStrategy = null, this._fetchQueue = null, this._tileRequests = new Map(), this.layer = null;
  }
  get tileMatrixSet() {
    if (this.layer.activeLayer.tileMatrixSetId)
      return this.layer.activeLayer.tileMatrixSet;
    const e2 = this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);
    return e2 ? (this.layer.activeLayer.tileMatrixSetId = e2.id, e2) : null;
  }
  hitTest() {
    return null;
  }
  update(e2) {
    this._fetchQueue.pause(), this._fetchQueue.state = e2.state, this._tileStrategy.update(e2), this._fetchQueue.resume(), this.notifyChange("updating");
  }
  attach() {
    const e2 = this.layer.activeLayer, t = this.tileMatrixSet;
    if (!t)
      return;
    const i2 = t.tileInfo.spatialReference;
    let s = e2.fullExtent && e2.fullExtent.clone();
    i2.isWebMercator ? s = d$1(s) : i2.isWGS84 || (s = t.fullExtent), this._tileInfoView = new h(t.tileInfo, s), this._fetchQueue = new p({ tileInfoView: this._tileInfoView, process: (e3) => this.fetchTile(e3) }), this._tileStrategy = new c({ cachePolicy: "keep", acquireTile: (e3) => this.acquireTile(e3), releaseTile: (e3) => this.releaseTile(e3), tileInfoView: this._tileInfoView }), this._handles.add(this.watch(["layer.activeLayer.styleId", "tileMatrixSet"], () => this._refresh())), super.attach();
  }
  detach() {
    super.detach(), this._handles.removeAll(), this._tileStrategy.destroy(), this._fetchQueue.clear(), this._fetchQueue = this._tileStrategy = this._tileInfoView = null;
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
  doRefresh() {
    return __async(this, null, function* () {
      this.updateRequested || this.suspended || this._refresh();
    });
  }
  isUpdating() {
    return this._fetchQueue.length > 0;
  }
  acquireTile(e2) {
    const t = this._bitmapView.createTile(e2), i2 = t.bitmap;
    [i2.x, i2.y] = this._tileInfoView.getTileCoords([0, 0], t.key), i2.resolution = this._tileInfoView.getTileResolution(t.key), [i2.width, i2.height] = this._tileInfoView.tileInfo.size, this._tileInfoView.getTileCoords(i2, t.key);
    const r = { id: e2.id, fulfilled: false, promise: this._fetchQueue.push(t.key).then((e3) => {
      t.bitmap.source = e3, t.once("attach", () => this.requestUpdate()), this._bitmapView.addChild(t);
    }).catch((e3) => {
      g(e3) || (t.bitmap.source = null, t.once("attach", () => this.requestUpdate()), this._bitmapView.addChild(t));
    }) };
    return r.promise.finally(() => r.fulfilled = true), this._tileRequests.set(t, r), this.requestUpdate(), t;
  }
  releaseTile(e2) {
    const t = this._tileRequests.get(e2);
    t.fulfilled || this._fetchQueue.abort(t.id), this._tileRequests.delete(e2), this._bitmapView.removeChild(e2), e2.once("detach", () => e2.destroy()), this.requestUpdate();
  }
  fetchTile(e2) {
    return __async(this, null, function* () {
      return this.layer.fetchTile(e2.level, e2.row, e2.col);
    });
  }
  canResume() {
    const e2 = super.canResume();
    return e2 ? this.tileMatrixSet !== null : e2;
  }
  _refresh() {
    this._fetchQueue.reset(), this._tileStrategy.tiles.forEach((e2) => {
      if (!e2.bitmap.source)
        return;
      e2.bitmap.source = null;
      const t = { id: e2.key.id, fulfilled: false, promise: this._fetchQueue.push(e2.key).then((t2) => {
        e2.bitmap.source = t2, e2.requestRender(), this.notifyChange("updating");
      }) };
      t.promise.then(() => t.fulfilled = true, () => t.fulfilled = true), this._tileRequests.set(e2, t);
    }), this.notifyChange("updating");
  }
  _getTileMatrixSetBySpatialReference(e2) {
    const t = this.view.spatialReference;
    if (!e2.tileMatrixSets)
      return null;
    let i2 = e2.tileMatrixSets.find((e3) => e3.tileInfo.spatialReference.wkid === t.wkid);
    return !i2 && t.isWebMercator && (i2 = e2.tileMatrixSets.find((e3) => f.indexOf(e3.tileInfo.spatialReference.wkid) > -1)), i2;
  }
};
e([y()], d.prototype, "suspended", void 0), e([y({ readOnly: true })], d.prototype, "tileMatrixSet", null), d = e([i$2("esri.views.2d.layers.WMTSLayerView2D")], d);
var m = d;
export default m;
