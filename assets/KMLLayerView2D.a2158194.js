var __defProp = Object.defineProperty;
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
import { b3 as u, e$ as a, c_ as L, aj as U, cr as M$1, cn as x, dg as g, a5 as r, a0 as t$1, eX as D, di as H, bF as k, f0 as t$2, dF as b, dS as r$1, dK as C$1, ae as e, af as y, ag as i$1 } from "./vendor.74d5941c.js";
import { b as b$1, g as g$1, d } from "./kmlUtils.e19028c7.js";
import { l, d as d$1 } from "./LayerView2D.06dde519.js";
import { e as et } from "./BaseGraphicContainer.437a7535.js";
import { i } from "./GraphicContainer.df674785.js";
import { _ } from "./Bitmap.0855f65e.js";
import { t } from "./BitmapContainer.dc86fd3a.js";
import "./aaBoundingBox.b76947f8.js";
import "./Container.d2c27c9d.js";
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
class j {
  constructor() {
    this.allSublayers = new Map(), this.allPoints = [], this.allPolylines = [], this.allPolygons = [], this.allMapImages = [];
  }
}
let C = class extends l(d$1) {
  constructor() {
    super(...arguments), this._handles = new u(), this._bitmapIndex = new Map(), this._mapImageContainer = new t(), this._kmlVisualData = new j(), this.allVisiblePoints = new a(), this.allVisiblePolylines = new a(), this.allVisiblePolygons = new a(), this.allVisibleMapImages = new L();
  }
  hitTest(e2, i2) {
    if (this.suspended || !this._pointsView && !this._polylinesView && !this._polygonsView)
      return Promise.resolve(null);
    const t2 = [this._pointsView.hitTest(e2, i2), this._polylinesView.hitTest(e2, i2), this._polygonsView.hitTest(e2, i2)];
    return Promise.all(t2).then((e3) => e3.filter((e4) => (e4 && (e4.layer = this.layer, e4.sourceLayer = this.layer), !!e4))[0] || null);
  }
  update(e2) {
    this._polygonsView && this._polygonsView.processUpdate(e2), this._polylinesView && this._polylinesView.processUpdate(e2), this._pointsView && this._pointsView.processUpdate(e2);
  }
  attach() {
    this._handles.add([this.allVisibleMapImages.on("change", (e2) => {
      e2.added.forEach((e3) => this._addMapImage(e3)), e2.removed.forEach((e3) => this._removeMapImage(e3));
    })]), this.container.addChild(this._mapImageContainer), this._polygonsView = new et({ view: this.view, graphics: this.allVisiblePolygons, requestUpdateCallback: () => this.requestUpdate(), container: new i(this.view.featuresTilingScheme) }), this.container.addChild(this._polygonsView.container), this._polylinesView = new et({ view: this.view, graphics: this.allVisiblePolylines, requestUpdateCallback: () => this.requestUpdate(), container: new i(this.view.featuresTilingScheme) }), this.container.addChild(this._polylinesView.container), this._pointsView = new et({ view: this.view, graphics: this.allVisiblePoints, requestUpdateCallback: () => this.requestUpdate(), container: new i(this.view.featuresTilingScheme) }), this.container.addChild(this._pointsView.container), this.watch("layer.visibleSublayers", (e2) => {
      for (const [i2, t2] of this._kmlVisualData.allSublayers)
        t2.visibility = 0;
      for (const i2 of e2) {
        const e3 = this._kmlVisualData.allSublayers.get(i2.id);
        e3 && (e3.visibility = 1);
      }
      this._refreshCollections();
    }), this._fetchingPromise = this._fetchService().then(() => {
      this._fetchingPromise = null, this.notifyChange("updating");
    });
  }
  detach() {
    this._handles.removeAll(), this._mapImageContainer.removeAllChildren(), this.container.removeAllChildren(), this._bitmapIndex.clear(), this._polygonsView && (this._polygonsView.destroy(), this._polygonsView = null), this._polylinesView && (this._polylinesView.destroy(), this._polylinesView = null), this._pointsView && (this._pointsView.destroy(), this._pointsView = null);
  }
  moveStart() {
  }
  viewChange() {
    this._polygonsView.viewChange(), this._polylinesView.viewChange(), this._pointsView.viewChange();
  }
  moveEnd() {
  }
  isUpdating() {
    return this._fetchingPromise != null || this._pointsView.updating || this._polygonsView.updating || this._polylinesView.updating;
  }
  _addMapImage(e2) {
    (this.view.spatialReference.isWGS84 || this.view.spatialReference.isWebMercator) && U(e2.href, { responseType: "image" }).then(({ data: i2 }) => {
      let t2 = M$1.fromJSON(e2.extent);
      x(t2, this.view.spatialReference) && (t2 = g(t2, this.view.spatialReference));
      const s = new _(i2, "standard");
      s.x = t2.xmin, s.y = t2.ymax, s.resolution = t2.width / i2.naturalWidth, s.rotation = e2.rotation, this._mapImageContainer.addChild(s), this._bitmapIndex.set(e2, s);
    });
  }
  _getViewDependentUrl(e2, s) {
    return __async(this, null, function* () {
      const { viewFormat: a2, viewBoundScale: n, httpQuery: h } = e2;
      if (r(a2)) {
        if (t$1(s))
          throw new Error("Loading this network link requires a view state.");
        let m;
        if (yield D(), r(n) && n !== 1) {
          const e3 = new M$1(s.extent);
          e3.expand(n), m = e3;
        } else
          m = s.extent;
        m = H(m, k.WGS84);
        const d2 = H(m, k.WebMercator), y2 = m.xmin, _2 = m.xmax, V = m.ymin, b$12 = m.ymax, f = s.size[0] * s.pixelRatio, v = s.size[1] * s.pixelRatio, S = Math.max(d2.width, d2.height), I = { "[bboxWest]": y2.toString(), "[bboxEast]": _2.toString(), "[bboxSouth]": V.toString(), "[bboxNorth]": b$12.toString(), "[lookatLon]": m.center.x.toString(), "[lookatLat]": m.center.y.toString(), "[lookatRange]": S.toString(), "[lookatTilt]": "0", "[lookatHeading]": s.rotation.toString(), "[lookatTerrainLon]": m.center.x.toString(), "[lookatTerrainLat]": m.center.y.toString(), "[lookatTerrainAlt]": "0", "[cameraLon]": m.center.x.toString(), "[cameraLat]": m.center.y.toString(), "[cameraAlt]": S.toString(), "[horizFov]": "60", "[vertFov]": "60", "[horizPixels]": f.toString(), "[vertPixels]": v.toString(), "[terrainEnabled]": "0", "[clientVersion]": t$2, "[kmlVersion]": "2.2", "[clientName]": "ArcGIS API for JavaScript", "[language]": "en-US" }, x2 = (e3) => {
          for (const i2 in e3)
            for (const t2 in I)
              e3[i2] = e3[i2].replace(t2, I[t2]);
        }, P = b(a2);
        x2(P);
        let k$1 = {};
        r(h) && (k$1 = b(h), x2(k$1));
        const j2 = r$1(e2.href);
        j2.query = __spreadValues(__spreadValues(__spreadValues({}, j2.query), P), k$1);
        return `${j2.path}?${C$1(P)}`;
      }
      return e2.href;
    });
  }
  _fetchService() {
    return __async(this, null, function* () {
      const e2 = new j();
      yield this._loadVisualData(this.layer.url, e2), this._kmlVisualData = e2, this._refreshCollections();
    });
  }
  _refreshCollections() {
    this.allVisiblePoints.removeAll(), this.allVisiblePolylines.removeAll(), this.allVisiblePolygons.removeAll(), this.allVisibleMapImages.removeAll(), this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter((e2) => this._isSublayerVisible(e2.sublayerId)).map(({ item: e2 }) => e2)), this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter((e2) => this._isSublayerVisible(e2.sublayerId)).map(({ item: e2 }) => e2)), this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter((e2) => this._isSublayerVisible(e2.sublayerId)).map(({ item: e2 }) => e2)), this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter((e2) => this._isSublayerVisible(e2.sublayerId)).map(({ item: e2 }) => e2));
  }
  _isSublayerVisible(e2) {
    const i2 = this._kmlVisualData.allSublayers.get(e2);
    return !!i2.visibility && (i2.parentFolderId === -1 || this._isSublayerVisible(i2.parentFolderId));
  }
  _loadVisualData(e2, i2) {
    return this._fetchParsedKML(e2).then((e3) => __async(this, null, function* () {
      for (const t2 of e3.sublayers) {
        i2.allSublayers.set(t2.id, t2);
        const e4 = t2.points ? yield b$1(t2.points) : [], s = t2.polylines ? yield b$1(t2.polylines) : [], a2 = t2.polygons ? yield b$1(t2.polygons) : [], o = t2.mapImages || [];
        if (i2.allPoints.push(...e4.map((e5) => ({ item: e5, sublayerId: t2.id }))), i2.allPolylines.push(...s.map((e5) => ({ item: e5, sublayerId: t2.id }))), i2.allPolygons.push(...a2.map((e5) => ({ item: e5, sublayerId: t2.id }))), i2.allMapImages.push(...o.map((e5) => ({ item: e5, sublayerId: t2.id }))), t2.networkLink) {
          const e5 = yield this._getViewDependentUrl(t2.networkLink, this.view.state);
          yield this._loadVisualData(e5, i2);
        }
      }
    }));
  }
  _fetchParsedKML(e2) {
    return g$1(e2, this.view.spatialReference, this.layer.refreshInterval).then((e3) => d(e3.data));
  }
  _removeMapImage(e2) {
    const i2 = this._bitmapIndex.get(e2);
    i2 && (this._mapImageContainer.removeChild(i2), this._bitmapIndex.delete(e2));
  }
};
e([y()], C.prototype, "_pointsView", void 0), e([y()], C.prototype, "_polylinesView", void 0), e([y()], C.prototype, "_polygonsView", void 0), e([y()], C.prototype, "_fetchingPromise", void 0), e([y()], C.prototype, "updating", void 0), C = e([i$1("esri.views.2d.layers.KMLLayerView2D")], C);
var M = C;
export default M;
