var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a2, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a2, prop, b[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b) => __defProps(a2, __getOwnPropDescs(b));
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
import { ae as e, af as y$1, et as w, ag as i$1, f3 as n, aa as s, a5 as r, dd as A, ex as a, a4 as n$1, eh as i$3, eT as m, an as g } from "./vendor.74d5941c.js";
import { l as l$1, d as d$1 } from "./LayerView2D.06dde519.js";
import { a as a$1 } from "./drapedUtils.72df2b08.js";
import { t, e as et } from "./BaseGraphicContainer.437a7535.js";
import { s as s$1 } from "./clickToleranceUtils.1b8c692d.js";
import { i as i$2, d } from "./popupUtils.017b06d1.js";
import { t as t$1 } from "./BitmapContainer.dc86fd3a.js";
import { S } from "./ExportStrategy.a30951f7.js";
import { I } from "./Utils.3f1577e5.js";
import "./Container.d2c27c9d.js";
import "./mat4f32.a5cabe00.js";
import "./_commonjsHelpers.f2a458db.js";
import "./definitions.6737c10c.js";
import "./schemaUtils.ab77d03d.js";
import "./MD5.1ef35834.js";
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
import "./FramebufferObject.18518335.js";
import "./VertexArrayObject.67803418.js";
import "./FeatureContainer.3e3899c9.js";
import "./TileContainer.763b6c09.js";
import "./WGLContainer.74815466.js";
import "./vec4f32.6de15d07.js";
import "./ShaderCompiler.b19da10d.js";
import "./earcut.0e5467f0.js";
import "./Bitmap.0855f65e.js";
const c = (c2) => {
  let y2 = class extends c2 {
    initialize() {
      this.exportImageParameters = new n({ layer: this.layer });
    }
    destroy() {
      this.exportImageParameters.destroy(), this.exportImageParameters = null;
    }
    get exportImageVersion() {
      var e2;
      return (e2 = this.exportImageParameters) == null || e2.commitProperty("version"), this.commitProperty("timeExtent"), (this._get("exportImageVersion") || 0) + 1;
    }
    fetchPopupFeatures(e2, t2) {
      return __async(this, null, function* () {
        const { layer: o2 } = this;
        if (!e2)
          return Promise.reject(new s("mapimagelayerview:fetchPopupFeatures", "Nothing to fetch without area", { layer: o2 }));
        const p = this.get("view.scale"), i2 = [], m2 = (e3) => __async(this, null, function* () {
          const o3 = e3.minScale === 0 || p <= e3.minScale, s2 = e3.maxScale === 0 || p >= e3.maxScale;
          if (e3.visible && o3 && s2) {
            if (e3.sublayers)
              e3.sublayers.forEach(m2);
            else if (e3.popupEnabled) {
              const o4 = d(e3, __spreadProps(__spreadValues({}, t2), { defaultPopupTemplateEnabled: false }));
              r(o4) && i2.unshift({ sublayer: e3, popupTemplate: o4 });
            }
          }
        }), c3 = o2.sublayers.toArray().reverse().map(m2);
        yield Promise.all(c3);
        const y3 = i2.map((_0) => __async(this, [_0], function* ({ sublayer: o3, popupTemplate: s2 }) {
          yield o3.load().catch(() => {
          });
          const a2 = o3.createQuery(), p2 = r(t2) ? t2.event : null, i3 = s$1({ renderer: o3.renderer, event: p2 }), m3 = this.createFetchPopupFeaturesQueryGeometry(e2, i3);
          a2.geometry = m3, a2.outFields = yield i$2(o3, s2);
          const n2 = yield this._loadArcadeModules(s2);
          n2 && n2.arcadeUtils.hasGeometryOperations(s2) || (a2.maxAllowableOffset = m3.width / i3);
          return (yield o3.queryFeatures(a2)).features;
        }));
        return (yield A(y3)).reduce((e3, r2) => r2.value ? [...e3, ...r2.value] : e3, []).filter((e3) => e3 != null);
      });
    }
    canResume() {
      var e2;
      return !!super.canResume() && ((e2 = this.timeExtent) == null || !e2.isEmpty);
    }
    _loadArcadeModules(e2) {
      if (e2.get("expressionInfos.length"))
        return a();
    }
  };
  return e([y$1()], y2.prototype, "exportImageParameters", void 0), e([y$1({ readOnly: true })], y2.prototype, "exportImageVersion", null), e([y$1()], y2.prototype, "layer", void 0), e([y$1()], y2.prototype, "suspended", void 0), e([y$1(w)], y2.prototype, "timeExtent", void 0), y2 = e([i$1("esri.views.layers.MapImageLayerView")], y2), y2;
};
let o = class extends t {
  renderChildren(r2) {
    if (r2.drawPhase !== I.HIGHLIGHT)
      return;
    if (this.attributeView.bindTextures(r2.context), !this.children.some((r3) => r3.hasData))
      return;
    super.renderChildren(r2);
    const { painter: e2 } = r2, t2 = e2.effects.highlight;
    t2.bind(r2), r2.context.setColorMask(true, true, true, true), r2.context.clear(16384), this._renderChildren(r2, t2.defines.concat(["highlightAll"])), t2.draw(r2), t2.unbind();
  }
};
o = e([i$1("esri.views.2d.layers.support.HighlightGraphicContainer")], o);
var i = o;
const l = n$1.getLogger("esri.views.2d.layers.MapImageLayerView2D");
let y = class extends c(i$3(l$1(d$1))) {
  constructor() {
    super(...arguments), this._highlightGraphics = new m();
  }
  hitTest() {
    return null;
  }
  update(e2) {
    this.strategy.update(e2).catch((e3) => {
      g(e3) || l.error(e3);
    });
  }
  attach() {
    const { imageMaxWidth: e2, imageMaxHeight: t2, version: r2 } = this.layer, i$12 = r2 >= 10.3, s2 = r2 >= 10;
    this._bitmapContainer = new t$1(), this.container.addChild(this._bitmapContainer);
    const a2 = new et({ view: this.view, graphics: this._highlightGraphics, requestUpdateCallback: () => this.requestUpdate(), container: new i(this.view.featuresTilingScheme) });
    this.container.addChild(a2.container), this.strategy = new S({ container: this._bitmapContainer, fetchSource: this.fetchImage.bind(this), requestUpdate: this.requestUpdate.bind(this), imageMaxWidth: e2, imageMaxHeight: t2, imageRotationSupported: i$12, imageNormalizationSupported: s2, hidpi: true }), this.handles.add(this.watch("exportImageVersion", () => this.requestUpdate()), "exportImageVersion"), this.requestUpdate();
  }
  detach() {
    this.handles.remove("exportImageVersion"), this.strategy.destroy(), this.container.removeAllChildren(), this._bitmapContainer.removeAllChildren();
  }
  moveStart() {
  }
  viewChange() {
  }
  moveEnd() {
    this.requestUpdate();
  }
  highlight(e2, t2) {
    return this._highlightGraphics.add(e2), { remove: () => {
      this._highlightGraphics.remove(e2);
    } };
  }
  createFetchPopupFeaturesQueryGeometry(e2, t2) {
    return a$1(e2, t2, this.view);
  }
  doRefresh() {
    return __async(this, null, function* () {
      this.requestUpdate();
    });
  }
  isUpdating() {
    return this.strategy.updating || this.updateRequested;
  }
  fetchImage(e2, t2, r2, i2) {
    return this.layer.fetchImage(e2, t2, r2, __spreadValues({ timeExtent: this.timeExtent, timestamp: this.refreshTimestamp }, i2));
  }
};
e([y$1()], y.prototype, "strategy", void 0), e([y$1()], y.prototype, "updating", void 0), y = e([i$1("esri.views.2d.layers.MapImageLayerView2D")], y);
var f = y;
export default f;
