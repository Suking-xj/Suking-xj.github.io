import { dR as g$1, c_ as L, d1 as n, M, eQ as c, aE as d, ca as m, ae as e, ag as i$1 } from "./vendor.74d5941c.js";
import { l, d as d$1 } from "./LayerView2D.06dde519.js";
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
let y = class extends l(d$1) {
  constructor() {
    super(...arguments), this._graphicsViewMap = {}, this._popupTemplates = new Map(), this.graphicsViews = [];
  }
  hitTest(e2, r) {
    if (this.suspended || !this.graphicsViews.length)
      return Promise.resolve(null);
    const s = this.graphicsViews.reverse().map((s2) => s2.hitTest(e2, r));
    return Promise.all(s).then((e3) => e3.filter((e4, r2) => (e4 && (e4.popupTemplate = this._popupTemplates.get(this.graphicsViews[r2]), e4.layer = this.layer, e4.sourceLayer = this.layer), !!e4))[0] || null);
  }
  update(e2) {
    if (this.graphicsViews)
      for (const r of this.graphicsViews)
        r.processUpdate(e2);
  }
  attach() {
    this.layer.featureCollections.forEach((e2) => {
      const r = g$1.fromJSON(e2.featureSet), t = new (L.ofType(n))(r.features);
      let p;
      if (this._graphicsViewMap[r.geometryType])
        p = this._graphicsViewMap[r.geometryType], p.graphics.addMany(t);
      else {
        const s = e2.layerDefinition.drawingInfo, o = e2.popupInfo ? M.fromJSON(e2.popupInfo) : null, l2 = c(s.renderer);
        p = new et({ requestUpdateCallback: () => this.requestUpdate(), view: this.view, graphics: t, renderer: l2, container: new i(this.view.featuresTilingScheme) }), this._graphicsViewMap[r.geometryType] = p, this._popupTemplates.set(p, o), r.geometryType !== "polygon" || this.layer.polygonSymbol ? r.geometryType !== "polyline" || this.layer.lineSymbol ? r.geometryType !== "point" || this.layer.pointSymbol || (this.layer.pointSymbol = l2.symbol) : this.layer.lineSymbol = l2.symbol : this.layer.polygonSymbol = l2.symbol, this.graphicsViews.push(p), this.container.addChild(p.container);
      }
    }), this.handles.add([d(this.layer, "polygonSymbol", (e2) => {
      this._graphicsViewMap.polygon.renderer = new m({ symbol: e2 });
    }), d(this.layer, "lineSymbol", (e2) => {
      this._graphicsViewMap.polyline.renderer = new m({ symbol: e2 });
    }), d(this.layer, "pointSymbol", (e2) => {
      this._graphicsViewMap.point.renderer = new m({ symbol: e2 });
    })]);
  }
  detach() {
    this.container.removeAllChildren();
    for (const e2 of this.graphicsViews)
      e2.destroy();
    this.graphicsViews.length = 0;
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
y = e([i$1("esri.views.2d.layers.GeoRSSLayerView2D")], y);
var g = y;
export default g;
