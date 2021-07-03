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
import { d1 as n$1, c_ as L, ae as e, af as y, ag as i$1 } from "./vendor.74d5941c.js";
import { l as l$1, d } from "./LayerView2D.06dde519.js";
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
const c = { remove() {
}, pause() {
}, resume() {
} };
let n = class extends l$1(d) {
  initialize() {
    this.graphicsView = new et({ requestUpdateCallback: () => this.requestUpdate(), view: this.view, graphics: this.layer.graphics, container: new i(this.view.featuresTilingScheme) });
  }
  attach() {
    this.container.addChild(this.graphicsView.container), this.handles.add(this.layer.on("graphic-update", this.graphicsView.graphicUpdateHandler), "graphicslayerview2d");
  }
  detach() {
    this.container.removeAllChildren(), this.graphicsView.destroy(), this.handles.remove("graphicslayerview2d");
  }
  hitTest(e2, i2) {
    return this.suspended || !this.graphicsView ? Promise.resolve(null) : this.graphicsView.hitTest(e2, i2);
  }
  fetchPopupFeatures(e2) {
    return __async(this, null, function* () {
      if (this.graphicsView)
        return this.graphicsView.searchFeatures(e2).then((e3) => e3.filter((e4) => !!e4.popupTemplate));
    });
  }
  update(e2) {
    this.graphicsView.processUpdate(e2);
  }
  moveStart() {
  }
  viewChange() {
    this.graphicsView.viewChange();
  }
  moveEnd() {
  }
  isUpdating() {
    return !this.graphicsView || this.graphicsView.updating;
  }
  highlight(e2) {
    let i2;
    return typeof e2 == "number" ? i2 = [e2] : e2 instanceof n$1 ? i2 = [e2.uid] : Array.isArray(e2) && e2.length > 0 ? i2 = typeof e2[0] == "number" ? e2 : e2.map((e3) => e3 && e3.uid) : L.isCollection(e2) && (i2 = e2.map((e3) => e3 && e3.uid).toArray()), i2 = i2.filter((e3) => e3 != null), i2.length ? (this.graphicsView.addHighlight(i2), { remove: () => this.graphicsView.removeHighlight(i2) }) : c;
  }
  queryGraphics() {
    return Promise.resolve(this.graphicsView.graphics);
  }
};
e([y()], n.prototype, "graphicsView", void 0), e([y()], n.prototype, "updating", void 0), n = e([i$1("esri.views.2d.layers.GraphicsLayerView2D")], n);
var l = n;
export default l;
