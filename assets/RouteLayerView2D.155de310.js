import { b3 as u, ae as e, ag as i$1 } from "./vendor.74d5941c.js";
import { l, d } from "./LayerView2D.06dde519.js";
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
let a = class extends l(d) {
  constructor() {
    super(...arguments), this._handles = new u(), this._popupTemplates = new Map(), this.graphicsViews = [];
  }
  hitTest(e2, s) {
    if (this.suspended || !this.graphicsViews.length)
      return Promise.resolve(null);
    const r = this.graphicsViews.map((r2) => r2.hitTest(e2, s));
    return Promise.all(r).then((e3) => e3.filter((e4, s2) => (e4 && (e4.popupTemplate = this._popupTemplates.get(this.graphicsViews[s2]), e4.layer = this.layer, e4.sourceLayer = this.layer), !!e4))[0] || null);
  }
  update(e2) {
    if (this.graphicsViews)
      for (const s of this.graphicsViews)
        s.processUpdate(e2);
  }
  attach() {
    this.layer.featureCollections.forEach((e2) => {
      const s = new et({ view: this.view, graphics: e2.source, requestUpdateCallback: () => this.requestUpdate(), container: new i(this.view.featuresTilingScheme) });
      s.renderer = e2.renderer, this._popupTemplates.set(s, e2.popupTemplate), this.graphicsViews.push(s), this.container.addChild(s.container);
    });
  }
  detach() {
    this.container.removeAllChildren();
    for (const e2 of this.graphicsViews)
      e2.destroy();
    this.graphicsViews.length = 0, this._handles.removeAll(), this._popupTemplates = null;
  }
  moveStart() {
  }
  moveEnd() {
  }
  viewChange() {
    for (const e2 of this.graphicsViews)
      e2.viewChange();
  }
};
a = e([i$1("esri.views.2d.layers.RouteLayerView2D")], a);
var h = a;
export default h;
