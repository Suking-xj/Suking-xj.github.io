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
import { ae as e, af as y, eR as t, ag as i$1, c_ as L, en as n } from "./vendor.74d5941c.js";
import { d, l } from "./LayerView2D.06dde519.js";
import { r as r$1 } from "./FramebufferObject.18518335.js";
import { o as o$1 } from "./WGLContainer.74815466.js";
import "./Container.d2c27c9d.js";
import "./mat4f32.a5cabe00.js";
import "./_commonjsHelpers.f2a458db.js";
import "./Utils.3f1577e5.js";
import "./definitions.6737c10c.js";
import "./VertexArrayObject.67803418.js";
import "./vec4f32.6de15d07.js";
import "./ShaderCompiler.b19da10d.js";
import "./earcut.0e5467f0.js";
import "./GeometryUtils.9c8423f5.js";
import "./MaterialKey.3bc4aaea.js";
let o = class extends d {
  constructor(e2) {
    super(e2), this.layerViews = new L();
  }
  initialize() {
    this.handles.add([this.layerViews.on("change", (e2) => this._layerViewsChangeHandler(e2)), this.layerViews.on("after-changes", () => this._layerViewsAfterChangesHandler()), this.layer.watch("visibilityMode", () => this._visibilityModeHandler(), true), this.watch("visible", () => this._visibleHandler(), true)], "grouplayerview"), this._layerViewsChangeHandler({ target: null, added: this.layerViews.toArray(), removed: [], moved: [] }), this._layerViewsAfterChangesHandler();
  }
  set layerViews(e2) {
    this._set("layerViews", n(e2, this._get("layerViews")));
  }
  isUpdating() {
    return this.layerViews.some((e2) => e2.updating);
  }
  _hasLayerViewVisibleOverrides() {
    return this.layerViews.some((e2) => e2._isOverridden("visible"));
  }
  _findLayerViewForLayer(e2) {
    return e2 && this.layerViews.find((i2) => i2.layer === e2);
  }
  _firstVisibleOnLayerOrder() {
    const e2 = this.layer.layers.find((e3) => {
      const i2 = this._findLayerViewForLayer(e3);
      return i2 && i2.visible;
    });
    return e2 && this._findLayerViewForLayer(e2);
  }
  _enforceExclusiveVisibility(e2) {
    this._hasLayerViewVisibleOverrides() && (e2 || !(e2 = this._firstVisibleOnLayerOrder()) && this.layerViews.length > 0 && (e2 = this._findLayerViewForLayer(this.layer.layers.getItemAt(0))), this.layerViews.forEach((i2) => {
      i2.visible = i2 === e2;
    }));
  }
  _layerViewsChangeHandler(e2) {
    this.handles.remove("grouplayerview:visible"), this.handles.add(this.layerViews.map((e3) => e3.watch("visible", (i3) => this._layerViewVisibleHandler(i3, e3), true)).toArray(), "grouplayerview:visible");
    const i2 = e2.added[e2.added.length - 1];
    let s = null;
    i2 && i2.visible && (s = i2), this._enforceVisibility(s);
  }
  _layerViewsAfterChangesHandler() {
    this.handles.remove("grouplayerview:updating"), this.handles.add(this.layerViews.map((e2) => e2.watch("updating", () => this._updateUpdating(), true)).toArray(), "grouplayerview:updating"), this._updateUpdating();
  }
  _enforceVisibility(e2) {
    if (this._hasLayerViewVisibleOverrides())
      switch (this.layer.visibilityMode) {
        case "inherited": {
          const e3 = this.visible;
          this.layerViews.forEach((i2) => {
            i2.visible = e3;
          });
          break;
        }
        case "exclusive":
          this._enforceExclusiveVisibility(e2);
      }
  }
  _visibilityModeHandler() {
    this._enforceVisibility();
  }
  _layerViewVisibleHandler(e2, i2) {
    if (this._hasLayerViewVisibleOverrides())
      switch (this.layer.visibilityMode) {
        case "inherited":
          e2 !== this.visible && (i2.visible = this.visible);
          break;
        case "exclusive":
          this._enforceExclusiveVisibility(e2 && i2);
      }
  }
  _visibleHandler() {
    var e2;
    this._hasLayerViewVisibleOverrides() && ((e2 = this.layer) == null ? void 0 : e2.visibilityMode) === "inherited" && this._enforceVisibility();
  }
  _updateUpdating() {
    this.notifyChange("updating");
  }
};
e([y({ cast: t })], o.prototype, "layerViews", null), e([y()], o.prototype, "view", void 0), o = e([i$1("esri.views.layers.GroupLayerView")], o);
var h = o;
class r extends o$1 {
  constructor() {
    super(...arguments), this._lastWidth = 0, this._lastHeight = 0, this.requiresDedicatedFBO = false;
  }
  dispose() {
    this._renderTarget && (this._renderTarget.dispose(), this._renderTarget = null);
  }
  doRender(e2) {
    const t2 = this.createRenderParams(e2), { context: r2, painter: s, profiler: i2 } = t2;
    this._prevFBO = r2.getBoundFramebufferObject(), i2.recordContainerStart(this.name);
    const o2 = this._getFbo(t2), a2 = s.getRenderTarget();
    r2.bindFramebuffer(o2), s.setRenderTarget(o2), r2.setDepthWriteEnabled(true), r2.setColorMask(true, true, true, true), r2.setClearColor(0, 0, 0, 0), r2.setClearDepth(1), r2.clear(r2.gl.COLOR_BUFFER_BIT | r2.gl.DEPTH_BUFFER_BIT), r2.setDepthWriteEnabled(false);
    for (const n2 of this.children)
      n2.beforeRender(e2);
    for (const n2 of this.children)
      n2.processRender(t2);
    for (const n2 of this.children)
      n2.afterRender(e2);
    s.setRenderTarget(a2), r2.bindFramebuffer(this._prevFBO), s.beforeRenderLayer(t2, this._clippingInfos ? 255 : 0, this.computedOpacity), r2.setStencilTestEnabled(false), r2.setStencilWriteMask(0), s.blitTexture(r2, o2.colorTexture, 9728), s.compositeLayer(t2, this.computedOpacity), i2.recordContainerEnd();
  }
  createRenderParams(e2) {
    return __spreadProps(__spreadValues({}, super.createRenderParams(e2)), { blendMode: this.blendMode, effects: this.computedEffects, globalOpacity: 1 });
  }
  _getFbo(t2) {
    const { context: r2, painter: s } = t2, { width: i2, height: o2 } = r2.getViewport();
    if (i2 !== this._lastWidth || o2 !== this._lastHeight)
      if (this._lastWidth = i2, this._lastHeight = o2, this._renderTarget)
        this._renderTarget.resize(i2, o2);
      else {
        const t3 = { target: 3553, pixelFormat: 6408, dataType: 5121, samplingMode: 9728, wrapMode: 33071, width: i2, height: o2 }, a2 = { colorTarget: 0, depthStencilTarget: 3 }, n2 = s.getSharedStencilBuffer();
        this._renderTarget = new r$1(r2, a2, t3, n2);
      }
    return this._renderTarget;
  }
}
let i = class extends l(h) {
  constructor() {
    super(...arguments), this.container = new r();
  }
  attach() {
    this._updateStageChildren(), this.handles.add(this.layerViews.on("after-changes", () => this._updateStageChildren()), "grouplayerview2d");
  }
  detach() {
    this.handles.remove("grouplayerview2d"), this.container.removeAllChildren();
  }
  hitTest(e2, r2) {
    return null;
  }
  update(e2) {
  }
  moveStart() {
  }
  viewChange() {
  }
  moveEnd() {
  }
  _updateStageChildren() {
    this.container.removeAllChildren(), this.layerViews.forEach((e2, r2) => this.container.addChildAt(e2.container, r2));
  }
};
i = e([i$1("esri.views.2d.layers.GroupLayerView2D")], i);
var a = i;
export default a;
