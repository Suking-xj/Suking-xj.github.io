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
import { a5 as r, d1 as n, c_ as L, aE as d$1, eu as C, a0 as t, ae as e, ag as i$1 } from "./vendor.74d5941c.js";
import { l, d as d$2 } from "./LayerView2D.06dde519.js";
import { e as et } from "./BaseGraphicContainer.437a7535.js";
import { i } from "./GraphicContainer.df674785.js";
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
const u = "sublayers", d = "layerView", f = Object.freeze({ remove() {
}, pause() {
}, resume() {
} });
let g = class extends l(d$2) {
  fetchPopupFeatures(e2) {
    return __async(this, null, function* () {
      return (yield Promise.all(Array.from(this.graphicsViews(), (s) => s.searchFeatures(e2).then((e3) => e3.filter((e4) => !!e4.popupTemplate))))).flat();
    });
  }
  *graphicsViews() {
    r(this._graphicsViewsFeatureCollectionMap) ? yield* this._graphicsViewsFeatureCollectionMap.keys() : r(this._graphicsViews) ? yield* this._graphicsViews : yield* [];
  }
  hitTest(e2, i2) {
    return __async(this, null, function* () {
      if (this.suspended)
        return null;
      const r$1 = Array.from(this.graphicsViews(), (r$12) => __async(this, null, function* () {
        const t2 = yield r$12.hitTest(e2, i2);
        if (t2) {
          if (r(this._graphicsViewsFeatureCollectionMap)) {
            const e3 = this._graphicsViewsFeatureCollectionMap.get(r$12);
            !t2.popupTemplate && e3.popupTemplate && (t2.popupTemplate = e3.popupTemplate);
          }
          return t2;
        }
        return null;
      }));
      return (yield Promise.all(r$1)).filter((e3) => !!e3)[0] || null;
    });
  }
  highlight(e2) {
    let s;
    if (typeof e2 == "number" ? s = [e2] : e2 instanceof n ? s = [e2.uid] : Array.isArray(e2) && e2.length > 0 ? s = typeof e2[0] == "number" ? e2 : e2.map((e3) => e3 && e3.uid) : L.isCollection(e2) && (s = e2.map((e3) => e3 && e3.uid).toArray()), s = s.filter((e3) => e3 != null), !s.length)
      return f;
    for (const i2 of this.graphicsViews())
      i2.addHighlight(s);
    return { remove: () => {
      for (const e3 of this.graphicsViews())
        e3.removeHighlight(s);
    } };
  }
  update(e2) {
    for (const s of this.graphicsViews())
      s.processUpdate(e2);
  }
  attach() {
    const e2 = this.view, i$12 = () => this.requestUpdate(), r$1 = this.layer.featureCollections;
    if (r(r$1) && r$1.length) {
      this._graphicsViewsFeatureCollectionMap = new Map();
      for (const s of r$1) {
        const r2 = new i(this.view.featuresTilingScheme);
        r2.fadeTransitionEnabled = true;
        const t2 = new et({ view: e2, graphics: s.source, renderer: s.renderer, requestUpdateCallback: i$12, container: r2 });
        this._graphicsViewsFeatureCollectionMap.set(t2, s), this.container.addChild(t2.container), this.handles.add([d$1(s, "visible", (e3) => t2.container.visible = e3), d$1(t2, "updating", () => this.notifyChange("updating"))], d);
      }
    } else
      r(this.layer.sublayers) && this.handles.add(C(this.layer, "sublayers", "change", () => this._createGraphicsViews(), () => this._createGraphicsViews(), () => this._destroyGraphicsViews()), u);
  }
  detach() {
    this._destroyGraphicsViews(), this.handles.remove(u);
  }
  moveStart() {
  }
  moveEnd() {
  }
  viewChange() {
    for (const e2 of this.graphicsViews())
      e2.viewChange();
  }
  isUpdating() {
    for (const e2 of this.graphicsViews())
      if (e2.updating)
        return true;
    return false;
  }
  _destroyGraphicsViews() {
    this.container.removeAllChildren(), this.handles.remove(d);
    for (const e2 of this.graphicsViews())
      e2.destroy();
    this._graphicsViews = null, this._graphicsViewsFeatureCollectionMap = null;
  }
  _createGraphicsViews() {
    if (this._destroyGraphicsViews(), t(this.layer.sublayers))
      return;
    const e2 = [], s = this.view, r2 = () => this.requestUpdate();
    for (const i$12 of this.layer.sublayers) {
      const t2 = new i(this.view.featuresTilingScheme);
      t2.fadeTransitionEnabled = true;
      const a = new et({ view: s, graphics: i$12.graphics, requestUpdateCallback: r2, container: t2 });
      this.handles.add([i$12.on("graphic-update", a.graphicUpdateHandler), d$1(i$12, "visible", (e3) => a.container.visible = e3), d$1(a, "updating", () => this.notifyChange("updating"))], d), this.container.addChild(a.container), e2.push(a);
    }
    this._graphicsViews = e2;
  }
};
g = e([i$1("esri.views.2d.layers.MapNotesLayerView2D")], g);
var m = g;
export default m;
