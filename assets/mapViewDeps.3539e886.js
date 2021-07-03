var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __pow = Math.pow;
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
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e3) {
        reject(e3);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e3) {
        reject(e3);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import { a7 as e$8, a8 as m$7, a4 as n$e, a9 as u$5, a5 as r$d, aa as s$i, ab as a$g, ac as u$6, ad as e$9, ae as e$a, af as y$1, ag as i$b, ah as j$2, ai as t$j, aj as U$2, ak as n$h, al as v$3, am as m$8, an as g$4, ao as b, ap as _$2, aq as a$h, ar as s$m, a0 as t$k, as as r$f, at as n$j, au as a$i, av as n$k, aw as A$2, ax as f$5, ay as c$d, az as n$m, aA as e$d, $ as e$e, aB as e$f, aC as v$4, aD as r$k, aE as d$c, aF as n$n, aG as i$c, aH as c$e, aI as D$1, aJ as f$6, aK as a$j, aL as l$d, aM as d$d, aN as r$l, aO as c$f, aP as n$o, aQ as o$f, aR as s$o, aS as d$e, aT as u$8, _ as j$3, aU as Ft, aV as i$d, aW as t$o, aX as rt, aY as s$p, aZ as St, a_ as $$1, a$ as Mt, b0 as xt, b1 as a$k, b2 as vt, b3 as u$9, b4 as F$2, a3 as i$e, b5 as wt } from "./vendor.74d5941c.js";
import { P as P$1, Q as Q$1, Y, y as y$2, u as u$7, J, A as A$1, B as B$1, F as F$1, E as E$2, T as T$2, t as tt } from "./definitions.6737c10c.js";
import { c as c$c, h as h$a, n as n$f, r as r$e } from "./CollisionGrid.398b2c81.js";
import { o as o$d, r as r$h, t as t$l } from "./FramebufferObject.18518335.js";
import { o as o$c, a as s$k, s as s$l } from "./VertexArrayObject.67803418.js";
import { e as e$b, n as n$g, t as t$g } from "./ShaderCompiler.b19da10d.js";
import { t as t$h, a as t$m, l as l$c } from "./RenderingContext.52c630d1.js";
import { I, O as O$1, E as E$3 } from "./Utils.3f1577e5.js";
import { r as r$j, a as a$l } from "./Container.d2c27c9d.js";
import { s as s$j, r as r$g, g as g$5 } from "./WGLContainer.74815466.js";
import { n as n$i } from "./schemaUtils.ab77d03d.js";
import { o as o$e } from "./Rasterizer.86fb2371.js";
import { t as t$i } from "./Rect.b51904ac.js";
import { P as P$2 } from "./GeometryUtils.9c8423f5.js";
import { e as e$c, t as t$n, r as r$i } from "./WGLMeshFactory.8977e3d9.js";
import { s as s$n } from "./CircularArray.2e27cf26.js";
import { n as n$l, t as t$p } from "./requestImageUtils.21efc020.js";
export { e as GraphicsView2D } from "./BaseGraphicContainer.437a7535.js";
export { i as GraphicContainer } from "./GraphicContainer.df674785.js";
import "./FeatureSetReader.a91e3e2d.js";
import "./centroid.93c1b848.js";
import "./_commonjsHelpers.f2a458db.js";
import "./renderState.cca58848.js";
import "./mat4f32.a5cabe00.js";
import "./vec4f32.6de15d07.js";
import "./earcut.0e5467f0.js";
import "./MaterialKey.3bc4aaea.js";
import "./MD5.1ef35834.js";
import "./visualVariablesUtils.cb58e4df.js";
import "./CIMSymbolHelper.6546a069.js";
import "./BidiEngine.9b392b22.js";
import "./cimAnalyzer.0b895c7f.js";
import "./ComputedAttributeStorage.2a55b702.js";
import "./quickselect.e4940b29.js";
import "./visualVariablesUtils.bb9f81fa.js";
import "./tileUtils.7f9c3912.js";
import "./TurboLine.ecd76861.js";
import "./projectionSupport.62084d5a.js";
import "./json.7989af9b.js";
import "./FeatureContainer.3e3899c9.js";
import "./TileContainer.763b6c09.js";
const e$7 = Math.PI;
function r$c(t2, n2) {
  switch (n2.transformationType) {
    case "additive":
      return i$a(t2, n2);
    case "constant":
      return s$h(n2, t2);
    case "clamped-linear":
      return u$4(t2, n2);
    case "proportional":
      return o$b(t2, n2);
    case "stops":
      return c$b(t2, n2);
    case "real-world-size":
      return l$b(t2, n2);
    case "identity":
      return t2;
    case "unknown":
      return null;
  }
}
function a$f(t2, n2) {
  return typeof t2 == "number" ? t2 : r$c(n2, t2);
}
function i$a(t2, n2) {
  return t2 + (a$f(n2.minSize, t2) || n2.minDataValue);
}
function s$h(t2, n2) {
  const e3 = t2.stops;
  let r2 = e3 && e3.length && e3[0].size;
  return r2 == null && (r2 = t2.minSize), a$f(r2, n2);
}
function u$4(t2, n2) {
  const e3 = (t2 - n2.minDataValue) / (n2.maxDataValue - n2.minDataValue), r2 = a$f(n2.minSize, t2), i3 = a$f(n2.maxSize, t2);
  return t2 <= n2.minDataValue ? r2 : t2 >= n2.maxDataValue ? i3 : r2 + e3 * (i3 - r2);
}
function o$b(n2, e3) {
  const r2 = n2 / e3.minDataValue, i3 = a$f(e3.minSize, n2), s2 = a$f(e3.maxSize, n2);
  let u2 = null;
  return u2 = r2 * i3, e$8(u2, i3, s2);
}
function c$b(t2, n2) {
  const [e3, r2, i3] = m$6(t2, n2.cache.ipData);
  if (e3 === r2)
    return a$f(n2.stops[e3].size, t2);
  {
    const s2 = a$f(n2.stops[e3].size, t2);
    return s2 + (a$f(n2.stops[r2].size, t2) - s2) * i3;
  }
}
function l$b(r2, i3) {
  const s2 = m$7[i3.valueUnit], u2 = a$f(i3.minSize, r2), o2 = a$f(i3.maxSize, r2), { valueRepresentation: c2 } = i3;
  let l2 = null;
  return l2 = c2 === "area" ? 2 * Math.sqrt(r2 / e$7) / s2 : c2 === "radius" || c2 === "distance" ? 2 * r2 / s2 : r2 / s2, e$8(l2, u2, o2);
}
function m$6(t2, n2) {
  if (!n2)
    return;
  let e3 = 0, r2 = n2.length - 1;
  return n2.some((n3, a2) => t2 < n3 ? (r2 = a2, true) : (e3 = a2, false)), [e3, r2, (t2 - n2[e3]) / (n2[r2] - n2[e3])];
}
const i$9 = (e3, t2) => e3.order - t2.order, n$d = (e3, t2) => e3.index - t2.index, l$a = n$e.getLogger("esri/views/2d/engine/webgl/collisions/CollisionEngine");
function s$g(e3, r2) {
  const o2 = !!e3.minScale, i3 = !!e3.maxScale, n2 = o2 && r2.scaleToZoom(e3.minScale) || 0, l2 = i3 && r2.scaleToZoom(e3.maxScale) || 255;
  return { deconflictionStrategy: e3.deconflictionStrategy, minZoom: e$8(Math.floor(10 * n2), 0, 255), maxZoom: e$8(Math.floor(10 * l2), 0, 255) };
}
function a$e(e3) {
  return (t2) => u$5(r$c(t2, e3));
}
function c$a(e3) {
  if (!e3)
    return null;
  for (const t2 of e3)
    if (t2.type === "size")
      return a$e(t2);
  return null;
}
class d$b {
  constructor(e3, t2, r2, o2) {
    this._vvHandle = null;
    const i3 = e3.layer, { geometryType: n2, labelingInfo: l2, renderer: a2 } = i3;
    a2 && (this.vvEval = c$a("visualVariables" in a2 && a2.visualVariables)), this._vvHandle = i3.watch("renderer", (e4) => {
      e4 && (this.vvEval = c$a("visualVariables" in e4 && e4.visualVariables));
    });
    const d2 = i3.featureReduction, f2 = d2 && d2.type === "cluster" && d2.labelingInfo, m2 = (l2 || []).map((e4) => s$g(e4, o2)), u2 = (f2 || []).map((e4) => s$g(e4, o2));
    this.layerView = e3, this.geometryType = n2, this.index = t2, this.order = r2, this.zoomRanges = [...m2, ...u2], this.layerView = e3;
  }
  hasVV() {
    return !!this.vvEval;
  }
  allOrNothing() {
    return !(this.geometryType === "polyline");
  }
  destroy() {
    this._vvHandle.remove();
  }
  static create(e3, t2, r2, o2) {
    const n2 = r2.sort(i$9);
    let l2 = false, s2 = -1;
    for (const i3 of n2)
      !l2 && i3.order > t2 && (s2 = i3.index, l2 = true), l2 && i3.index++;
    return l2 || (s2 = n2.length), new d$b(e3, s2, t2, o2);
  }
  static delete(e3, t2) {
    const r2 = t2.sort(n$d);
    for (let o2 = e3 + 1; o2 < r2.length; o2++)
      t2[o2].index--;
    t2[e3].destroy(), t2.splice(e3, 1);
  }
  static find(e3, t2) {
    for (const r2 of t2)
      if (r2.index === e3)
        return r2;
    return l$a.error("Tried to get a LayerCollisionInfo for an index that doesn't exist!"), null;
  }
}
const l$9 = 254, d$a = 255, c$9 = 0;
function h$9(t2, i3) {
  const s2 = [];
  t2.forEachTile((e3) => s2.push(e3)), s2.sort((e3, t3) => e3.instanceId - t3.instanceId), s2.forEach((t3) => {
    r$d(t3.labelMetrics) && t3.isReady && i3(t3, t3.labelMetrics.getCursor());
  });
}
class f$4 {
  constructor(e3) {
    this._layers = new Map(), this._tilingScheme = e3;
  }
  get collisionInfos() {
    return Array.from(this._layers.values());
  }
  registerLayerView(e3, t2) {
    if (this._layers.has(e3))
      return;
    const i3 = d$b.create(e3, t2, this.collisionInfos, this._tilingScheme);
    this._layers.set(e3, i3);
  }
  unregisterLayerView(e3) {
    if (!this._layers.has(e3))
      return;
    const t2 = this._layers.get(e3);
    d$b.delete(t2.index, this.collisionInfos), this._layers.delete(e3);
  }
  run(e3, t2) {
    this._transformMetrics(e3), this._runCollision(e3, t2);
  }
  _runCollision(e3, t2) {
    const [i3, o2] = e3.state.size, r2 = new c$c(i3, o2);
    this._forEachLayer((e4, i4) => {
      const s2 = e4.zoomRanges.some((e5) => e5.deconflictionStrategy === "none"), o3 = i4.featuresView.attributeView;
      s2 ? h$9(i4, (e5, t3) => {
        for (; t3.nextId(); )
          o3.setLabelMinZoom(t3.id, c$9);
      }) : (this._prepare(i4), this._collideVisible(r2, i4, t2), this._collideInvisible(r2, i4));
    });
  }
  _isFiltered(e3, s2, o2) {
    const r2 = s2.getFilterFlags(e3), n2 = !o2.hasFilter || !!(r2 & P$1), a2 = !o2.effect || o2.effect.excludedLabelsVisible || !!(r2 & Q$1);
    return !(n2 && a2);
  }
  _prepare(e3) {
    const t2 = e3.featuresView.attributeView, i3 = new Set();
    h$9(e3, (s2, o2) => {
      for (; o2.nextId(); ) {
        if (i3.has(o2.id))
          continue;
        if (i3.add(o2.id), this._isFiltered(o2.id, t2, e3.layerView)) {
          t2.setLabelMinZoom(o2.id, l$9);
          continue;
        }
        t2.getLabelMinZoom(o2.id) !== c$9 ? t2.setLabelMinZoom(o2.id, d$a) : t2.setLabelMinZoom(o2.id, c$9);
      }
    });
  }
  _collideVisible(e3, t2, i3) {
    const s2 = t2.featuresView.attributeView, a2 = new Set();
    h$9(t2, (t3, d2) => {
      for (; d2.nextId(); )
        if (!a2.has(d2.id))
          if (t3.key.level === i3) {
            if (s2.getLabelMinZoom(d2.id) === 0) {
              switch (e3.insertMetrics(d2)) {
                case r$e:
                  break;
                case n$f:
                  s2.setLabelMinZoom(d2.id, l$9), a2.add(d2.id);
                  break;
                case h$a:
                  s2.setLabelMinZoom(d2.id, c$9), a2.add(d2.id);
              }
            }
          } else
            s2.setLabelMinZoom(d2.id, l$9);
    });
  }
  _collideInvisible(e3, t2) {
    const i3 = t2.featuresView.attributeView, s2 = new Set();
    h$9(t2, (t3, a2) => {
      for (; a2.nextId(); )
        if (!s2.has(a2.id) && i3.getLabelMinZoom(a2.id) === d$a) {
          switch (e3.insertMetrics(a2)) {
            case r$e:
              break;
            case n$f:
              i3.setLabelMinZoom(a2.id, d$a), s2.add(a2.id);
              break;
            case h$a:
              i3.setLabelMinZoom(a2.id, c$9), s2.add(a2.id);
          }
        }
    });
  }
  _transformMetrics(e3) {
    this._forEachLayer((t2, i3) => {
      h$9(i3, (s2, o2) => {
        const r2 = i3.featuresView.attributeView, n2 = s2.transforms.labelMat2d;
        n2[4] = Math.round(n2[4]), n2[5] = Math.round(n2[5]);
        const a2 = n2[4], l2 = n2[5], d2 = t2.geometryType === "polyline";
        for (; o2.next(); ) {
          const i4 = o2.boundsCount, s3 = o2.anchorX, c2 = o2.anchorY;
          let h2 = 0, f2 = 0;
          if (t2.hasVV()) {
            const e4 = r2.getVVSize(o2.id), i5 = t2.vvEval(e4), s4 = isNaN(i5) || i5 == null || i5 === 1 / 0 ? o2.size : i5;
            h2 = o2.directionX * (s4 / 2), f2 = o2.directionY * (s4 / 2);
          }
          for (let t3 = 0; t3 < i4; t3++) {
            let i5 = s3, r3 = o2.anchorY;
            if (d2) {
              let s4 = i5 + o2.boundsCenterX(t3) + h2, d3 = r3 + o2.boundsCenterY(t3) + f2;
              e3.state.rotation ? (s4 = n2[0] * s4 + n2[2] * d3 + n2[4], d3 = n2[1] * s4 + n2[3] * d3 + n2[5]) : (s4 += a2, d3 += l2), o2.setBoundsComputedAnchorX(t3, Math.floor(s4)), o2.setBoundsComputedAnchorY(t3, Math.floor(d3));
            } else {
              e3.state.rotation ? (i5 = n2[0] * s3 + n2[2] * c2 + n2[4], r3 = n2[1] * s3 + n2[3] * c2 + n2[5]) : (i5 += a2, r3 += l2);
              const d3 = i5 + o2.boundsCenterX(t3) + h2, u2 = r3 + o2.boundsCenterY(t3) + f2;
              o2.setBoundsComputedAnchorX(t3, d3), o2.setBoundsComputedAnchorY(t3, u2);
            }
          }
        }
      });
    });
  }
  _forEachLayer(e3) {
    const t2 = [];
    this._layers.forEach((e4) => t2.push(e4)), t2.sort((e4, t3) => e4.order - t3.order), t2.forEach((t3) => {
      var i3;
      const s2 = (i3 = t3.layerView) == null ? void 0 : i3.tileRenderer;
      s2 && e3(t3, s2);
    });
  }
}
const t$f = 4294967295, i$8 = -1, a$d = n$e.getLogger("esri.views.2d.engine.collisions.LayerViewSorter");
function s$f(e3) {
  return e3.declaredClass === "esri.views.2d.layers.FeatureLayerView2D" || e3.declaredClass === "esri.views.2d.layers.StreamLayerView2D";
}
function l$8(e3) {
  if (!e3.layer || !e3.layer.renderer)
    return false;
  switch (e3.layer.renderer.type) {
    case "class-breaks":
    case "simple":
    case "unique-value":
    case "dictionary":
    case "dot-density":
      return true;
    default:
      return a$d.error(new s$i("mapview-labeling", `Renderer of type ${e3.layer.renderer.type} does not currently support labeling`)), false;
  }
}
class n$c {
  constructor(e3, r2) {
    this.registerLayer = e3, this.unregisterLayer = r2, this._layerViewState = new Map();
  }
  findIndex(e3) {
    return e3.view.allLayerViews.findIndex((r2) => r2.uid === e3.uid);
  }
  update(e3) {
    const { added: r2, removed: t2 } = e3;
    for (const i3 of t2)
      s$f(i3) && this._layerViewState.has(i3) && this._deleteState(i3);
    for (const i3 of r2)
      s$f(i3) && l$8(i3) && !this._layerViewState.has(i3) && this._createState(i3);
    this._recomputeOrder();
  }
  destroy() {
    this._layerViewState.forEach((e3) => e3.handles.forEach((e4) => e4.remove()));
  }
  _createState(e3) {
    const r2 = { priority: -1, handles: null };
    return r2.handles = [e3.layer.watch("visible", this._recomputeOrder.bind(this)), e3.layer.watch("labelsVisible", this._recomputeOrder.bind(this)), e3.layer.watch("labelingInfo", this._recomputeOrder.bind(this)), e3.layer.watch("featureReduction", this._recomputeOrder.bind(this))], this._layerViewState.set(e3, r2), r2;
  }
  _deleteState(e3) {
    if (!this._layerViewState.has(e3))
      return;
    const r2 = this._layerViewState.get(e3);
    r2.handles.forEach((e4) => e4.remove()), r2.priority !== i$8 && this.unregisterLayer(e3), this._layerViewState.delete(e3);
  }
  _recomputeOrder() {
    this._layerViewState.forEach((e3, r2) => {
      const a2 = r2.view.map.allLayers.findIndex((e4) => e4.uid === r2.layer.uid), s2 = r2.layer, l2 = s2.featureReduction, n2 = l2 && l2.type === "cluster" && l2.labelsVisible && l2.labelingInfo && l2.labelingInfo.length, o2 = s2.labelsVisible && s2.labelingInfo && s2.labelingInfo.length || n2, d2 = s2.visible && o2 ? t$f - a2 : i$8;
      d2 !== e3.priority && (e3.priority = d2, this.unregisterLayer(r2), d2 !== i$8 && this.registerLayer(r2, d2));
    });
  }
}
const d$9 = 32, u$3 = n$e.getLogger("esri.views.2d.layers.labels.LabelManager");
let c$8 = class extends a$g(u$6) {
  constructor(e3) {
    super(e3), this._applyVisibilityPassThrottled = e$9(this._applyVisibilityPass, d$9, this), this.lastUpdateId = -1, this.updateRequested = false, this.view = null;
  }
  initialize() {
    this.collisionEngine = new f$4(this.view.featuresTilingScheme), this._layerViewSorter = new n$c((e3, t2) => {
      this.collisionEngine.registerLayerView(e3, t2), this.requestUpdate();
    }, (e3) => {
      this.collisionEngine.unregisterLayerView(e3), this.requestUpdate();
    }), this.handles.add(this.view.allLayerViews.on("change", (e3) => {
      this._layerViewSorter.update(e3);
    }));
  }
  destroy() {
    this._layerViewSorter.destroy(), this._layerViewSorter = null, this.collisionEngine = null, this._applyVisibilityPassThrottled.remove(), this._applyVisibilityPassThrottled = null;
  }
  get updating() {
    return this.updateRequested;
  }
  update(e3) {
    this._applyVisibilityPassThrottled(e3);
  }
  viewChange() {
    this.requestUpdate();
  }
  requestUpdate() {
    this.updateRequested || (this.updateRequested = true, this.view.requestUpdate());
  }
  processUpdate(e3) {
    this._set("updateParameters", e3), this.updateRequested && (this.updateRequested = false, this.update(e3));
  }
  _applyVisibilityPass(e3) {
    try {
      const t2 = this.view.featuresTilingScheme.getClosestInfoForScale(e3.state.scale).level;
      this.collisionEngine.run(e3, t2);
    } catch (t2) {
      u$3.error(new s$i("mapview-labeling", "Encountered an error during label decluttering", t2));
    }
  }
};
e$a([y$1()], c$8.prototype, "updateRequested", void 0), e$a([y$1({ readOnly: true })], c$8.prototype, "updateParameters", void 0), e$a([y$1()], c$8.prototype, "updating", null), e$a([y$1()], c$8.prototype, "view", void 0), c$8 = e$a([i$b("esri.views.2d.layers.labels.LabelManager")], c$8);
var h$8 = c$8;
var n$b = { background: { "background.frag": "#ifdef PATTERN\nuniform lowp float u_opacity;\nuniform mediump vec2 u_pattern_tl;\nuniform mediump vec2 u_pattern_br;\nuniform sampler2D u_texture;\nvarying mediump vec2 v_tileTextureCoord;\n#else\nuniform lowp vec4 u_color;\n#endif\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvoid main() {\n#ifdef PATTERN\n  mediump vec2 normalizedTextureCoord = mod(v_tileTextureCoord, 1.0);\n  mediump vec2 samplePos = mix(u_pattern_tl, u_pattern_br, normalizedTextureCoord);\n  lowp vec4 color = texture2D(u_texture, samplePos);\n  gl_FragColor = u_opacity * color;\n#else\n  gl_FragColor = u_color;\n#endif\n#ifdef ID\n  if (gl_FragColor.a < 1.0 / 255.0) {\n    discard;\n  }\n  gl_FragColor = v_id;\n#endif\n}", "background.vert": "precision mediump float;\nattribute vec2 a_pos;\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nuniform highp mat3 u_dvsMat3;\nuniform mediump float u_coord_range;\nuniform mediump float u_depth;\n#ifdef PATTERN\nuniform mediump mat3 u_pattern_matrix;\nvarying mediump vec2 v_tileTextureCoord;\n#endif\nvoid main() {\n  gl_Position = vec4((u_dvsMat3 * vec3(u_coord_range * a_pos, 1.0)).xy, u_depth, 1.0);\n#ifdef PATTERN\n  v_tileTextureCoord = (u_pattern_matrix * vec3(a_pos, 1.0)).xy;\n#endif\n#ifdef ID\n  v_id = u_id / 255.0;\n#endif\n}" }, circle: { "circle.frag": "precision lowp float;\nvarying lowp vec4 v_color;\nvarying lowp vec4 v_stroke_color;\nvarying mediump float v_blur;\nvarying mediump float v_stroke_width;\nvarying mediump float v_radius;\nvarying mediump vec2 v_offset;\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvoid main()\n{\n  mediump float dist = length(v_offset);\n  mediump float alpha = smoothstep(0.0, -v_blur, dist - 1.0);\n  lowp float color_mix_ratio = v_stroke_width < 0.01 ? 0.0 : smoothstep(-v_blur, 0.0, dist - v_radius / (v_radius + v_stroke_width));\n  gl_FragColor = alpha * mix(v_color, v_stroke_color, color_mix_ratio);\n#ifdef ID\n  if (gl_FragColor.a < 1.0 / 255.0) {\n    discard;\n  }\n  gl_FragColor = v_id;\n#endif\n}", "circle.vert": "precision mediump float;\nattribute vec2 a_pos;\n#pragma header\nvarying lowp vec4 v_color;\nvarying lowp vec4 v_stroke_color;\nvarying mediump float v_blur;\nvarying mediump float v_stroke_width;\nvarying mediump float v_radius;\nvarying mediump vec2 v_offset;\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform mediump vec2 u_circleTranslation;\nuniform mediump float u_depth;\nuniform mediump float u_antialiasingWidth;\nvoid main()\n{\n#pragma main\n  v_color = color * opacity;\n  v_stroke_color = stroke_color * stroke_opacity;\n  v_stroke_width = stroke_width;\n  v_radius = radius;\n  v_blur = max(blur, u_antialiasingWidth / (radius + stroke_width));\n  mediump vec2 offset = vec2(mod(a_pos, 2.0) * 2.0 - 1.0);\n  v_offset = offset;\n#ifdef ID\n  v_id = u_id / 255.0;\n#endif\n  mediump vec3 pos = u_dvsMat3 * vec3(a_pos * 0.5, 1.0) + u_displayMat3 * vec3((v_radius + v_stroke_width) * offset + u_circleTranslation, 0.0);\n  gl_Position = vec4(pos.xy, u_depth, 1.0);\n}" }, fill: { "fill.frag": "precision lowp float;\n#ifdef PATTERN\nuniform mediump vec2 u_pattern_tl;\nuniform mediump vec2 u_pattern_br;\nuniform lowp sampler2D u_texture;\nvarying mediump vec2 v_tileTextureCoord;\n#endif\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvarying lowp vec4 v_color;\nvec4 mixColors(vec4 color1, vec4 color2) {\n  float compositeAlpha = color2.a + color1.a * (1.0 - color2.a);\n  vec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);\n  return vec4(compositeColor, compositeAlpha);\n}\nvoid main()\n{\n#ifdef PATTERN\n  mediump vec2 normalizedTextureCoord = fract(v_tileTextureCoord);\n  mediump vec2 samplePos = mix(u_pattern_tl, u_pattern_br, normalizedTextureCoord);\n  lowp vec4 color = texture2D(u_texture, samplePos);\n  gl_FragColor = v_color[3] * color;\n#else\n  gl_FragColor = v_color;\n#endif\n#ifdef ID\n  if (gl_FragColor.a < 1.0 / 255.0) {\n    discard;\n  }\n  gl_FragColor = v_id;\n#endif\n}", "fill.vert": "precision mediump float;\nattribute vec2 a_pos;\n#pragma header\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform mediump float u_depth;\nuniform mediump vec2 u_fillTranslation;\n#ifdef PATTERN\nuniform mediump mat3 u_pattern_matrix;\nvarying mediump vec2 v_tileTextureCoord;\n#endif\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nvarying lowp vec4 v_color;\nvoid main()\n{\n#pragma main\n  v_color = color * opacity;\n#ifdef ID\n  v_id = u_id / 255.0;\n#endif\n#ifdef PATTERN\n  v_tileTextureCoord = (u_pattern_matrix * vec3(a_pos, 1.0)).xy;\n#endif\n  vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(u_fillTranslation, 0.0);\n  gl_Position = vec4(pos.xy, u_depth, 1.0);\n}" }, icon: { "icon.frag": "precision mediump float;\nuniform lowp sampler2D u_texture;\n#ifdef SDF\nuniform lowp vec4 u_color;\nuniform lowp vec4 u_outlineColor;\n#endif\nvarying mediump vec2 v_tex;\nvarying lowp float v_opacity;\nvarying mediump vec2 v_size;\nvarying lowp vec4 v_color;\n#ifdef SDF\nvarying mediump flaot v_halo_width;\n#endif\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\n#include <util/encoding.glsl>\nvec4 mixColors(vec4 color1, vec4 color2) {\n  float compositeAlpha = color2.a + color1.a * (1.0 - color2.a);\n  vec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);\n  return vec4(compositeColor, compositeAlpha);\n}\nvoid main()\n{\n#ifdef SDF\n  lowp vec4 fillPixelColor = v_color;\n  float d = rgba2float(texture2D(u_texture, v_tex)) - 0.5;\n  const float softEdgeRatio = 0.248062016;\n  float size = max(v_size.x, v_size.y);\n  float dist = d * softEdgeRatio * size;\n  fillPixelColor *= clamp(0.5 - dist, 0.0, 1.0);\n  if (v_halo_width > 0.25) {\n    lowp vec4 outlinePixelColor = u_outlineColor;\n    const float outlineLimitRatio = (16.0 / 86.0);\n    float clampedOutlineSize = softEdgeRatio * min(v_halo_width, outlineLimitRatio * max(v_size.x, v_size.y));\n    outlinePixelColor *= clamp(0.5 - (abs(dist) - clampedOutlineSize), 0.0, 1.0);\n    gl_FragColor = v_opacity * mixColors(fillPixelColor, outlinePixelColor);\n  }\n  else {\n    gl_FragColor = v_opacity * fillPixelColor;\n  }\n#else\n  lowp vec4 texColor = texture2D(u_texture, v_tex);\n  gl_FragColor = v_opacity * texColor;\n#endif\n#ifdef ID\n  if (gl_FragColor.a < 1.0 / 255.0) {\n    discard;\n  }\n  gl_FragColor = v_id;\n#endif\n}", "icon.vert": "attribute vec2 a_pos;\nattribute vec2 a_vertexOffset;\nattribute vec4 a_texAngleRange;\nattribute vec4 a_levelInfo;\nattribute float a_opacityInfo;\n#pragma header\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nvarying lowp vec4 v_color;\n#ifdef SDF\nvarying mediump float v_halo_width;\n#endif\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform highp mat3 u_displayViewMat3;\nuniform mediump vec2 u_iconTranslation;\nuniform vec2 u_mosaicSize;\nuniform mediump float u_depth;\nuniform mediump float u_mapRotation;\nuniform mediump float u_level;\nuniform lowp float u_keepUpright;\nuniform mediump float u_fadeDuration;\nvarying mediump vec2 v_tex;\nvarying lowp float v_opacity;\nvarying mediump vec2 v_size;\nconst float C_OFFSET_PRECISION = 1.0 / 8.0;\nconst float C_256_TO_RAD = 3.14159265359 / 128.0;\nconst float C_DEG_TO_RAD = 3.14159265359 / 180.0;\nconst float tileCoordRatio = 1.0 / 8.0;\nuniform highp float u_time;\nvoid main()\n{\n#pragma main\n  v_color = color;\n  v_opacity = opacity;\n#ifdef SDF\n  v_halo_width = halo_width;\n#endif\n  float modded = mod(a_opacityInfo, 128.0);\n  float targetOpacity = (a_opacityInfo - modded) / 128.0;\n  float startOpacity = modded / 127.0;\n  float interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);\n  v_opacity *= interpolatedOpacity;\n  mediump float a_angle         = a_levelInfo[1];\n  mediump float a_minLevel      = a_levelInfo[2];\n  mediump float a_maxLevel      = a_levelInfo[3];\n  mediump vec2 a_tex            = a_texAngleRange.xy;\n  mediump float delta_z = 0.0;\n  mediump float rotated = mod(a_angle + u_mapRotation, 256.0);\n  delta_z += (1.0 - step(u_keepUpright, 0.0)) * step(64.0, rotated) * (1.0 - step(192.0, rotated));\n  delta_z += 1.0 - step(a_minLevel, u_level);\n  delta_z += step(a_maxLevel, u_level);\n  delta_z += step(v_opacity, 0.0);\n  vec2 offset = C_OFFSET_PRECISION * a_vertexOffset;\n  v_size = abs(offset);\n#ifdef SDF\n  offset = (120.0 / 86.0) * offset;\n#endif\n  mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayViewMat3 * vec3(size * offset, 0.0) + u_displayMat3 * vec3(u_iconTranslation, 0.0);\n  gl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);\n#ifdef ID\n  v_id = u_id / 255.0;\n#endif\n  v_tex = a_tex.xy / u_mosaicSize;\n}" }, line: { "line.frag": "varying mediump vec2 v_normal;\nvarying highp float v_accumulatedDistance;\nvarying mediump float v_lineHalfWidth;\nvarying lowp vec4 v_color;\nvarying mediump float v_blur;\n#ifdef PATTERN\nuniform mediump vec2 u_pattern_tl;\nuniform mediump vec2 u_pattern_br;\nuniform mediump vec2 u_spriteSize;\nuniform sampler2D u_texture;\nconst mediump float tileCoordRatio = 8.0;\n#else\nvarying mediump vec2 v_dasharray;\n#endif\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvoid main()\n{\n  mediump float fragDist = length(v_normal) * v_lineHalfWidth;\n  lowp float alpha = clamp((v_lineHalfWidth - fragDist) / v_blur, 0.0, 1.0);\n#ifdef PATTERN\n  mediump float relativeTexX = mod((v_accumulatedDistance + v_normal.x * v_lineHalfWidth * tileCoordRatio) / u_spriteSize.x, 1.0);\n  mediump float relativeTexY = 0.5 + (v_normal.y * v_lineHalfWidth / u_spriteSize.y);\n  mediump vec2 texCoord = mix(u_pattern_tl, u_pattern_br, vec2(relativeTexX, relativeTexY));\n  lowp vec4 color = texture2D(u_texture, texCoord);\n  gl_FragColor = alpha * v_color[3] * color;\n#else\n  lowp float dashPos =  mod(v_accumulatedDistance, v_dasharray.x + v_dasharray.y);\n  lowp float dashAlpha = clamp(min(dashPos, v_dasharray.x - dashPos) + 0.5, 0.0, 1.0);\n  dashAlpha = max(sign(-v_dasharray.y), dashAlpha);\n  alpha *= dashAlpha;\n  gl_FragColor = alpha * v_color;\n#endif\n#ifdef ID\n  if (gl_FragColor.a < 1.0 / 255.0) {\n    discard;\n  }\n  gl_FragColor = v_id;\n#endif\n}", "line.vert": "attribute vec2 a_pos;\nattribute vec4 a_offsetAndNormal;\nattribute vec2 a_accumulatedDistance;\n#pragma header\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform highp mat3 u_displayViewMat3;\nuniform mediump vec2 u_lineTranslation;\nuniform mediump float u_antialiasing;\nuniform mediump float u_depth;\nvarying mediump vec2 v_normal;\nvarying highp float v_accumulatedDistance;\nconst float scale = 1.0 / 31.0;\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nvarying lowp vec4 v_color;\nvarying mediump float v_lineHalfWidth;\nvarying mediump float v_blur;\n#ifndef PATTERN\nuniform mediump vec2 u_dasharray;\nvarying mediump vec2 v_dasharray;\n#endif\nvoid main()\n{\n#pragma main\n  v_color = color * opacity;\n  v_blur = blur + u_antialiasing;\n  v_normal = a_offsetAndNormal.zw * scale;\n  v_lineHalfWidth += (width + u_antialiasing) * 0.5;\n#ifndef PATTERN\n  v_dasharray = u_dasharray * width;\n#endif\n  mediump vec2 dist = v_lineHalfWidth * scale * a_offsetAndNormal.xy;\n  mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) +  u_displayViewMat3 * vec3(dist, 0.0) + u_displayMat3 * vec3(u_lineTranslation, 0.0);\n  gl_Position = vec4(pos.xy, u_depth, 1.0);\n  v_accumulatedDistance = a_accumulatedDistance.x;\n  #ifdef ID\n    v_id = u_id / 255.0;\n  #endif\n}" }, outline: { "outline.frag": "varying lowp vec4 v_color;\nvarying mediump vec2 v_normal;\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvoid main()\n{\n  lowp float dist = abs(v_normal.y);\n  lowp float alpha = smoothstep(1.0, 0.0, dist);\n  gl_FragColor = alpha * v_color;\n#ifdef ID\n  if (gl_FragColor.a < 1.0 / 255.0) {\n    discard;\n  }\n  gl_FragColor = v_id;\n#endif\n}", "outline.vert": "attribute vec2 a_pos;\nattribute vec2 a_offset;\nattribute vec2 a_xnormal;\n#pragma header\nvarying lowp vec4 v_color;\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform mediump vec2 u_fillTranslation;\nuniform mediump float u_depth;\nuniform mediump float u_outline_width;\nvarying lowp vec2 v_normal;\nconst float scale = 1.0 / 15.0;\nvoid main()\n{\n#pragma main\n  v_color = color * opacity;\n#ifdef ID\n  v_id = u_id / 255.0;\n#endif\n  v_normal = a_xnormal;\n  mediump vec2 dist = u_outline_width * scale * a_offset;\n  mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(dist + u_fillTranslation, 0.0);\n  gl_Position = vec4(pos.xy, u_depth, 1.0);\n}" }, text: { "text.frag": "uniform lowp sampler2D u_texture;\nvarying lowp vec2 v_tex;\nvarying lowp vec4 v_color;\nvarying mediump float v_edgeWidth;\nvarying mediump float v_edgeDistance;\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvoid main()\n{\n  lowp float dist = texture2D(u_texture, v_tex).a;\n  mediump float alpha = smoothstep(v_edgeDistance - v_edgeWidth, v_edgeDistance + v_edgeWidth, dist);\n  gl_FragColor = alpha * v_color;\n#ifdef ID\n  if (gl_FragColor.a < 1.0 / 255.0) {\n    discard;\n  }\n  gl_FragColor = v_id;\n#endif\n}", "text.vert": "attribute vec2 a_pos;\nattribute vec2 a_vertexOffset;\nattribute vec4 a_texAngleRange;\nattribute vec4 a_levelInfo;\nattribute float a_opacityInfo;\n#pragma header\nvarying lowp vec4 v_color;\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform highp mat3 u_displayViewMat3;\nuniform mediump vec2 u_textTranslation;\nuniform vec2 u_mosaicSize;\nuniform mediump float u_depth;\nuniform mediump float u_mapRotation;\nuniform mediump float u_level;\nuniform lowp float u_keepUpright;\nuniform mediump float u_fadeDuration;\nvarying lowp vec2 v_tex;\nconst float offsetPrecision = 1.0 / 8.0;\nconst mediump float edgePos = 0.75;\nuniform mediump float u_antialiasingWidth;\nvarying mediump float v_edgeDistance;\nvarying mediump float v_edgeWidth;\nuniform lowp float u_halo;\nconst float sdfFontScale = 1.0 / 24.0;\nconst float sdfPixel = 3.0;\nuniform highp float u_time;\nvoid main()\n{\n#pragma main\n  if (u_halo > 0.5)\n  {\n    v_color = halo_color * opacity;\n    halo_width *= sdfPixel;\n    halo_blur *= sdfPixel;\n  }\n  else\n  {\n    v_color = color * opacity;\n    halo_width = 0.0;\n    halo_blur = 0.0;\n  }\n  float modded = mod(a_opacityInfo, 128.0);\n  float targetOpacity = (a_opacityInfo - modded) / 128.0;\n  float startOpacity = modded / 127.0;\n  float interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);\n  v_color *= interpolatedOpacity;\n  mediump float a_angle       = a_levelInfo[1];\n  mediump float a_minLevel    = a_levelInfo[2];\n  mediump float a_maxLevel    = a_levelInfo[3];\n  mediump vec2 a_tex          = a_texAngleRange.xy;\n  mediump float a_visMinAngle    = a_texAngleRange.z;\n  mediump float a_visMaxAngle    = a_texAngleRange.w;\n  mediump float delta_z = 0.0;\n  mediump float angle = mod(a_angle + u_mapRotation, 256.0);\n  if (a_visMinAngle < a_visMaxAngle)\n  {\n    delta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) + (1.0 - step(a_visMinAngle, angle)));\n  }\n  else\n  {\n    delta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) * (1.0 - step(a_visMinAngle, angle)));\n  }\n  delta_z += 1.0 - step(a_minLevel, u_level);\n  delta_z += step(a_maxLevel, u_level);\n  delta_z += step(v_color[3], 0.0);\n  v_tex = a_tex.xy / u_mosaicSize;\n#ifdef ID\n  v_id = u_id / 255.0;\n#endif\n  v_edgeDistance = edgePos - halo_width / size;\n  v_edgeWidth = (u_antialiasingWidth + halo_blur) / size;\n  mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + sdfFontScale * u_displayViewMat3 * vec3(offsetPrecision * size * a_vertexOffset, 0.0) + u_displayMat3 * vec3(u_textTranslation, 0.0);\n  gl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);\n}" }, util: { "encoding.glsl": "const vec4 rgba2float_factors = vec4(\n    255.0 / (256.0),\n    255.0 / (256.0 * 256.0),\n    255.0 / (256.0 * 256.0 * 256.0),\n    255.0 / (256.0 * 256.0 * 256.0 * 256.0)\n  );\nfloat rgba2float(vec4 rgba) {\n  return dot(rgba, rgba2float_factors);\n}" } };
function o$a(r2) {
  let o2 = n$b;
  return r2.split("/").forEach((r3) => {
    o2 && (o2 = o2[r3]);
  }), o2;
}
const t$e = new e$b(o$a);
function s$e(r2) {
  return t$e.resolveIncludes(r2);
}
const t$d = (r2) => n$g({ ID: r2.id, PATTERN: r2.pattern }), a$c = { shaders: (e3) => ({ vertexShader: t$d(e3) + s$e("background/background.vert"), fragmentShader: t$d(e3) + s$e("background/background.frag") }) }, i$7 = (r2) => n$g({ ID: r2.id }), d$8 = { shaders: (e3) => ({ vertexShader: i$7(e3) + s$e("circle/circle.vert"), fragmentShader: i$7(e3) + s$e("circle/circle.frag") }) }, s$d = (r2) => n$g({ ID: r2.id, PATTERN: r2.pattern }), n$a = { shaders: (e3) => ({ vertexShader: s$d(e3) + s$e("fill/fill.vert"), fragmentShader: s$d(e3) + s$e("fill/fill.frag") }) }, o$9 = (r2) => n$g({ ID: r2.id }), l$7 = { shaders: (e3) => ({ vertexShader: o$9(e3) + s$e("outline/outline.vert"), fragmentShader: o$9(e3) + s$e("outline/outline.frag") }) }, h$7 = (r2) => n$g({ ID: r2.id, SDF: r2.sdf }), c$7 = { shaders: (e3) => ({ vertexShader: h$7(e3) + s$e("icon/icon.vert"), fragmentShader: h$7(e3) + s$e("icon/icon.frag") }) }, f$3 = (r2) => n$g({ ID: r2.id, PATTERN: r2.pattern }), g$3 = { shaders: (e3) => ({ vertexShader: f$3(e3) + s$e("line/line.vert"), fragmentShader: f$3(e3) + s$e("line/line.frag") }) }, m$5 = (r2) => n$g({ ID: r2.id }), v$2 = { shaders: (e3) => ({ vertexShader: m$5(e3) + s$e("text/text.vert"), fragmentShader: m$5(e3) + s$e("text/text.frag") }) };
class c$6 {
  constructor() {
    this._programByKey = new Map();
  }
  dispose() {
    this._programByKey.forEach((e3) => e3.dispose()), this._programByKey.clear();
  }
  getMaterialProgram(r2, t2, a2) {
    const s2 = t2.key << 2 | this._getMaterialOptionsValue(t2.type, a2);
    if (this._programByKey.has(s2))
      return this._programByKey.get(s2);
    const o2 = this._getProgramTemplate(t2.type), { shaders: n2 } = o2, { vertexShader: i3, fragmentShader: c2 } = n2(a2), p2 = t2.getShaderHeader(), m2 = t2.getShaderMain(), u2 = i3.replace("#pragma header", p2).replace("#pragma main", m2), g2 = new o$c(r2, u2, c2, t2.getAttributeLocations());
    return this._programByKey.set(s2, g2), g2;
  }
  _getMaterialOptionsValue(e3, r2) {
    switch (e3) {
      case 0: {
        const e4 = r2;
        return (e4.pattern ? 1 : 0) << 1 | (e4.id ? 1 : 0);
      }
      case 1: {
        const e4 = r2;
        return (e4.pattern ? 1 : 0) << 1 | (e4.id ? 1 : 0);
      }
      case 2:
        return r2.id ? 1 : 0;
      case 3: {
        const e4 = r2;
        return (e4.pattern ? 1 : 0) << 1 | (e4.id ? 1 : 0);
      }
      case 4: {
        const e4 = r2;
        return (e4.sdf ? 1 : 0) << 1 | (e4.id ? 1 : 0);
      }
      case 5:
        return r2.id ? 1 : 0;
      case 6:
        return r2.id ? 1 : 0;
      default:
        return 0;
    }
  }
  _getProgramTemplate(e3) {
    switch (e3) {
      case 0:
        return a$c;
      case 5:
        return d$8;
      case 1:
        return n$a;
      case 4:
        return c$7;
      case 3:
        return g$3;
      case 2:
        return l$7;
      case 6:
        return v$2;
      default:
        return null;
    }
  }
}
const r$b = { shaders: { vertexShader: s$j("bitBlit/bitBlit.vert"), fragmentShader: s$j("bitBlit/bitBlit.frag") }, attributes: { a_pos: 0, a_tex: 1 } };
class s$c {
  constructor() {
    this._initialized = false;
  }
  dispose() {
    this._program && (this._program.dispose(), this._program = null), this._vertexArrayObject && (this._vertexArrayObject.dispose(), this._vertexArrayObject = null);
  }
  render(r2, t2, e3, i3) {
    r2 && (this._initialized || this._initialize(r2), r2.setBlendFunctionSeparate(1, 771, 1, 771), r2.bindVAO(this._vertexArrayObject), r2.bindProgram(this._program), t2.setSamplingMode(e3), r2.bindTexture(t2, 0), this._program.setUniform1i("u_tex", 0), this._program.setUniform1f("u_opacity", i3), r2.drawArrays(5, 0, 4), r2.bindTexture(null, 0), r2.bindVAO());
  }
  _initialize(s2) {
    if (this._initialized)
      return true;
    const o2 = r$b.attributes, a2 = t$g(s2, r$b);
    if (!a2)
      return false;
    const n2 = { geometry: [{ name: "a_pos", count: 2, type: 5120, offset: 0, stride: 4, normalized: false, divisor: 0 }, { name: "a_tex", count: 2, type: 5120, offset: 2, stride: 4, normalized: false, divisor: 0 }] }, m2 = new Int8Array(16);
    m2[0] = -1, m2[1] = -1, m2[2] = 0, m2[3] = 0, m2[4] = 1, m2[5] = -1, m2[6] = 1, m2[7] = 0, m2[8] = -1, m2[9] = 1, m2[10] = 0, m2[11] = 1, m2[12] = 1, m2[13] = 1, m2[14] = 1, m2[15] = 1;
    const p2 = new s$k(s2, o2, n2, { geometry: s$l.createVertex(s2, 35044, m2) });
    return this._program = a2, this._vertexArrayObject = p2, this._initialized = true, true;
  }
}
const e$6 = (r2) => {
  let t2 = "";
  t2 += r2[0].toUpperCase();
  for (let e3 = 1; e3 < r2.length; e3++) {
    const s2 = r2[e3];
    s2 === s2.toUpperCase() ? (t2 += "_", t2 += s2) : t2 += s2.toUpperCase();
  }
  return t2;
}, s$b = (t2) => {
  const s2 = {};
  for (const r2 in t2) {
    s2[e$6(r2)] = t2[r2];
  }
  return n$g(s2);
}, o$8 = (r2, e3, o2) => {
  const n2 = r2 + r2.substring(r2.lastIndexOf("/")), a2 = e3 + e3.substring(e3.lastIndexOf("/"));
  return { attributes: o2, shaders: (r3) => ({ vertexShader: s$b(r3) + s$j(`${n2}.vert`), fragmentShader: s$b(r3) + s$j(`${a2}.frag`) }) };
};
const a$b = (r2) => r2 === I.HITTEST || r2 === I.LABEL_ALPHA, s$a = (r2) => (a$b(r2) ? 1 : 0) | (r2 === I.HIGHLIGHT ? 2 : 0), i$6 = ({ rendererInfo: e3, drawPhase: t2 }, o2, a2, i3) => `${o2.getVariationHash()}-${i3.join(".")}-${s$a(t2)}-${e3.getVariationHash()}-${r$d(a2) && a2.join(".")}`, m$4 = (e3, o2, s2, i3) => {
  const m2 = i3.reduce((r2, t2) => __spreadProps(__spreadValues({}, r2), { [t2]: e3.driverTestResult[t2] }), {}), g2 = __spreadValues(__spreadProps(__spreadValues(__spreadValues({}, o2.getVariation()), e3.rendererInfo.getVariation()), { highlight: e3.drawPhase === I.HIGHLIGHT, id: a$b(e3.drawPhase) }), m2);
  if (r$d(s2))
    for (const r2 of s2)
      g2[r2] = true;
  return g2;
};
class g$2 {
  constructor(r2) {
    this._programByKey = new Map(), this._programCache = new t$h(r2);
  }
  dispose() {
    this._programCache && this._programCache.dispose();
  }
  getProgram(r2, e3, t2 = [], a2 = []) {
    const s2 = e3.vsPath + "." + e3.fsPath + JSON.stringify(t2) + a2.join(".");
    if (this._programByKey.has(s2))
      return this._programByKey.get(s2);
    const i3 = a2.reduce((e4, t3) => __spreadProps(__spreadValues({}, e4), { [t3]: r2.driverTestResult[t3] }), {}), m2 = __spreadValues(__spreadValues({}, t2.map((r3) => typeof r3 == "string" ? { name: r3, value: true } : r3).reduce((r3, e4) => __spreadProps(__spreadValues({}, r3), { [e4.name]: e4.value }), {})), i3), { vsPath: g2, fsPath: h2, attributes: n2 } = e3, p2 = this._programCache.getProgram(o$8(g2, h2, n2), m2);
    if (!p2)
      throw new Error("Unable to get program for key: ${key}");
    return this._programByKey.set(s2, p2), p2;
  }
  getMaterialProgram(r2, e3, t2, a2, s2, g2 = ["ignoresSamplerPrecision"]) {
    const h2 = i$6(r2, e3, s2, g2);
    if (this._programByKey.has(h2))
      return this._programByKey.get(h2);
    const n2 = m$4(r2, e3, s2, g2), p2 = this._programCache.getProgram(o$8(t2, t2, a2), n2);
    if (!p2)
      throw new Error("Unable to get program for key: ${key}");
    return this._programByKey.set(h2, p2), p2;
  }
}
function t$c(e3) {
  const r2 = e3.toLowerCase().split(" ").join("-");
  switch (r2) {
    case "serif":
      return "noto-serif";
    case "sans-serif":
      return "arial-unicode-ms";
    case "monospace":
      return "ubuntu-mono";
    case "fantasy":
      return "cabin-sketch";
    case "cursive":
      return "redressed";
    default:
      return r2;
  }
}
function n$9(e3) {
  const r2 = c$5(e3) + i$5(e3);
  return t$c(e3.family) + (r2.length > 0 ? r2 : "-regular");
}
function c$5(e3) {
  if (!e3.weight)
    return "";
  switch (e3.weight.toLowerCase()) {
    case "bold":
    case "bolder":
      return "-bold";
  }
  return "";
}
function i$5(e3) {
  if (!e3.style)
    return "";
  switch (e3.style.toLowerCase()) {
    case "italic":
    case "oblic":
      return "-italic";
  }
  return "";
}
class t$b {
  constructor(t2, e3) {
    this._width = 0, this._height = 0, this._free = [], this._width = t2, this._height = e3, this._free.push(new t$i(0, 0, t2, e3));
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  allocate(t2, e3) {
    if (t2 > this._width || e3 > this._height)
      return new t$i();
    let i3 = null, s2 = -1;
    for (let h2 = 0; h2 < this._free.length; ++h2) {
      const r2 = this._free[h2];
      t2 <= r2.width && e3 <= r2.height && (i3 === null || r2.y <= i3.y && r2.x <= i3.x) && (i3 = r2, s2 = h2);
    }
    return i3 === null ? new t$i() : (this._free.splice(s2, 1), i3.width < i3.height ? (i3.width > t2 && this._free.push(new t$i(i3.x + t2, i3.y, i3.width - t2, e3)), i3.height > e3 && this._free.push(new t$i(i3.x, i3.y + e3, i3.width, i3.height - e3))) : (i3.width > t2 && this._free.push(new t$i(i3.x + t2, i3.y, i3.width - t2, i3.height)), i3.height > e3 && this._free.push(new t$i(i3.x, i3.y + e3, t2, i3.height - e3))), new t$i(i3.x, i3.y, t2, e3));
  }
  release(h2) {
    for (let t2 = 0; t2 < this._free.length; ++t2) {
      const e3 = this._free[t2];
      if (e3.y === h2.y && e3.height === h2.height && e3.x + e3.width === h2.x)
        e3.width += h2.width;
      else if (e3.x === h2.x && e3.width === h2.width && e3.y + e3.height === h2.y)
        e3.height += h2.height;
      else if (h2.y === e3.y && h2.height === e3.height && h2.x + h2.width === e3.x)
        e3.x = h2.x, e3.width += h2.width;
      else {
        if (h2.x !== e3.x || h2.width !== e3.width || h2.y + h2.height !== e3.y)
          continue;
        e3.y = h2.y, e3.height += h2.height;
      }
      this._free.splice(t2, 1), this.release(h2);
    }
    this._free.push(h2);
  }
}
const r$a = 256, a$a = (t2) => Math.floor(t2 / 256);
function n$8(t2) {
  const e3 = new Set();
  for (const i3 of t2)
    e3.add(a$a(i3));
  return e3;
}
function c$4(t2, i3, h2) {
  return t2.has(i3) || t2.set(i3, h2().then(() => {
    t2.delete(i3);
  }).catch((h3) => {
    t2.delete(i3), j$2(h3);
  })), t2.get(i3);
}
const o$7 = (t2) => ({ rect: new t$i(0, 0, 0, 0), page: 0, metrics: { left: 0, width: 0, height: 0, advance: 0, top: 0 }, code: t2, sdf: true });
class l$6 {
  constructor(t2, e3, i3) {
    this.width = 0, this.height = 0, this._dirties = [], this._glyphData = [], this._currentPage = 0, this._glyphCache = {}, this._textures = [], this._rangePromises = new Map(), this.width = t2, this.height = e3, this._glyphSource = i3, this._binPack = new t$b(t2 - 4, e3 - 4), this._glyphData.push(new Uint8Array(t2 * e3)), this._dirties.push(true), this._textures.push(null), this._initDecorationGlyph();
  }
  dispose() {
    this._binPack = null;
    for (const t2 of this._textures)
      t2 && t2.dispose();
    this._textures.length = 0, this._glyphData.length = 0;
  }
  _initDecorationGlyph() {
    const t2 = [117, 149, 181, 207, 207, 181, 149, 117], e3 = [];
    for (let h2 = 0; h2 < t2.length; h2++) {
      const i4 = t2[h2];
      for (let t3 = 0; t3 < 11; t3++)
        e3.push(i4);
    }
    const i3 = { metrics: { width: 5, height: 2, left: 0, top: 0, advance: 0 }, bitmap: new Uint8Array(e3) };
    this._recordGlyph(i3);
  }
  getGlyphItems(t2, e3, i3) {
    return __async(this, null, function* () {
      const h2 = this._getGlyphCache(t2);
      return yield this._fetchRanges(t2, e3, i3), e3.map((e4) => this._getMosaicItem(h2, t2, e4));
    });
  }
  bind(t2, e3, i3, h2) {
    const s2 = this._getTexture(t2, i3);
    s2.setSamplingMode(e3), this._dirties[i3] && (s2.setData(this._glyphData[i3]), this._dirties[i3] = false), t2.bindTexture(s2, h2);
  }
  _getGlyphCache(t2) {
    return this._glyphCache[t2] || (this._glyphCache[t2] = {}), this._glyphCache[t2];
  }
  _getTexture(t2, e3) {
    return this._textures[e3] || (this._textures[e3] = new o$d(t2, { pixelFormat: 6406, dataType: 5121, width: this.width, height: this.height }, new Uint8Array(this.width * this.height))), this._textures[e3];
  }
  _invalidate() {
    this._dirties[this._currentPage] = true;
  }
  _fetchRanges(t2, e3, i3) {
    return __async(this, null, function* () {
      const h2 = n$8(e3), s2 = [];
      h2.forEach((e4) => {
        s2.push(this._fetchRange(t2, e4, i3));
      }), yield Promise.all(s2);
    });
  }
  _fetchRange(t2, e3, i3) {
    return __async(this, null, function* () {
      if (e3 > r$a)
        return null;
      const h2 = t2 + e3;
      return c$4(this._rangePromises, h2, () => this._glyphSource.getRange(t2, e3, i3));
    });
  }
  _getMosaicItem(t2, e3, i3) {
    if (!t2[i3]) {
      const h2 = this._glyphSource.getGlyph(e3, i3);
      if (!h2 || !h2.metrics)
        return o$7(i3);
      const s2 = this._recordGlyph(h2), r2 = this._currentPage, a2 = h2.metrics;
      t2[i3] = { rect: s2, page: r2, metrics: a2, code: i3, sdf: true }, this._invalidate();
    }
    return t2[i3];
  }
  _recordGlyph(e3) {
    const i3 = e3.metrics;
    let r2;
    if (i3.width === 0)
      r2 = new t$i(0, 0, 0, 0);
    else {
      const h2 = 3, a2 = i3.width + 2 * h2, n2 = i3.height + 2 * h2;
      r2 = this._binPack.allocate(a2, n2), r2.isEmpty && (this._dirties[this._currentPage] || (this._glyphData[this._currentPage] = null), this._currentPage = this._glyphData.length, this._glyphData.push(new Uint8Array(this.width * this.height)), this._dirties.push(true), this._textures.push(null), this._initDecorationGlyph(), this._binPack = new t$b(this.width - 4, this.height - 4), r2 = this._binPack.allocate(a2, n2));
      const c2 = this._glyphData[this._currentPage], o2 = e3.bitmap;
      let l2, g2;
      if (o2)
        for (let t2 = 0; t2 < n2; t2++) {
          l2 = a2 * t2, g2 = this.width * (r2.y + t2) + r2.x;
          for (let t3 = 0; t3 < a2; t3++)
            c2[g2 + t3] = o2[l2 + t3];
        }
      t$j("esri-glyph-debug") && this._showDebugPage(c2);
    }
    return r2;
  }
  _showDebugPage(t2) {
    const e3 = document.createElement("canvas"), i3 = e3.getContext("2d"), h2 = new ImageData(this.width, this.height), s2 = h2.data;
    e3.width = this.width, e3.height = this.height, e3.style.border = "1px solid black";
    for (let r2 = 0; r2 < t2.length; ++r2)
      s2[4 * r2 + 0] = t2[r2], s2[4 * r2 + 1] = 0, s2[4 * r2 + 2] = 0, s2[4 * r2 + 3] = 255;
    i3.putImageData(h2, 0, 0), document.body.appendChild(e3);
  }
}
class s$9 {
  constructor(t2) {
    for (this._metrics = [], this._bitmaps = []; t2.next(); )
      switch (t2.tag()) {
        case 1: {
          const e3 = t2.getMessage();
          for (; e3.next(); )
            switch (e3.tag()) {
              case 3: {
                const t3 = e3.getMessage();
                let s2, a2, r2, n2, i3, c2, g2;
                for (; t3.next(); )
                  switch (t3.tag()) {
                    case 1:
                      s2 = t3.getUInt32();
                      break;
                    case 2:
                      a2 = t3.getBytes();
                      break;
                    case 3:
                      r2 = t3.getUInt32();
                      break;
                    case 4:
                      n2 = t3.getUInt32();
                      break;
                    case 5:
                      i3 = t3.getSInt32();
                      break;
                    case 6:
                      c2 = t3.getSInt32();
                      break;
                    case 7:
                      g2 = t3.getUInt32();
                      break;
                    default:
                      t3.skip();
                  }
                t3.release(), s2 && (this._metrics[s2] = { width: r2, height: n2, left: i3, top: c2, advance: g2 }, this._bitmaps[s2] = a2);
                break;
              }
              default:
                e3.skip();
            }
          e3.release();
          break;
        }
        default:
          t2.skip();
      }
  }
  getMetrics(t2) {
    return this._metrics[t2];
  }
  getBitmap(t2) {
    return this._bitmaps[t2];
  }
}
class a$9 {
  constructor() {
    this._ranges = [];
  }
  getRange(t2) {
    return this._ranges[t2];
  }
  addRange(t2, e3) {
    this._ranges[t2] = e3;
  }
}
class r$9 {
  constructor(t2) {
    this._glyphInfo = {}, this._baseURL = t2;
  }
  getRange(a2, r2, n2) {
    const i3 = this._getFontStack(a2);
    if (i3.getRange(r2))
      return Promise.resolve();
    const c2 = 256 * r2, g2 = c2 + 255, o2 = this._baseURL.replace("{fontstack}", a2).replace("{range}", c2 + "-" + g2);
    return U$2(o2, __spreadValues({ responseType: "array-buffer" }, n2)).then((t2) => {
      i3.addRange(r2, new s$9(new n$h(new Uint8Array(t2.data), new DataView(t2.data))));
    });
  }
  getGlyph(t2, e3) {
    const s2 = this._getFontStack(t2);
    if (!s2)
      return;
    const a2 = Math.floor(e3 / 256);
    if (a2 > 256)
      return;
    const r2 = s2.getRange(a2);
    return r2 ? { metrics: r2.getMetrics(e3), bitmap: r2.getBitmap(e3) } : void 0;
  }
  _getFontStack(t2) {
    let e3 = this._glyphInfo[t2];
    return e3 || (e3 = this._glyphInfo[t2] = new a$9()), e3;
  }
}
const t$a = [1, 256, 65536, 16777216], n$7 = [1 / 256, 1 / 65536, 1 / 16777216, 1 / 4294967296], o$6 = e$5(new Uint8ClampedArray([255, 255, 255, 255]));
function r$8(n2, r2, e3 = 0) {
  const c2 = f$2(n2, 0, o$6);
  for (let o2 = 0; o2 < 4; o2++)
    r2[e3 + o2] = Math.floor(256 * u$2(c2 * t$a[o2]));
}
function e$5(t2, o2 = 0) {
  let r2 = 0;
  for (let e3 = 0; e3 < 4; e3++)
    r2 += t2[o2 + e3] * n$7[e3];
  return r2;
}
function f$2(t2, n2, o2) {
  return t2 < n2 ? n2 : t2 > o2 ? o2 : t2;
}
function u$2(t2) {
  return t2 - Math.floor(t2);
}
const i$4 = 1e20;
class r$7 {
  constructor(t2) {
    this.size = t2;
    const s2 = document.createElement("canvas");
    s2.width = s2.height = t2, this._context = s2.getContext("2d"), this._gridOuter = new Float64Array(t2 * t2), this._gridInner = new Float64Array(t2 * t2), this._f = new Float64Array(t2), this._d = new Float64Array(t2), this._z = new Float64Array(t2 + 1), this._v = new Int16Array(t2);
  }
  dispose() {
    this._context = this._gridOuter = this._gridInner = this._f = this._d = this._z = this._v = null, this._svg && (document.body.removeChild(this._svg), this._svg = null);
  }
  draw(r2, h2, n2 = 31) {
    this._initSVG();
    const o2 = this._createSVGString(r2);
    return new Promise((r3, d2) => {
      const a2 = new Image();
      a2.src = "data:image/svg+xml; charset=utf8, " + encodeURIComponent(o2), a2.onload = () => {
        a2.onload = null, this._context.clearRect(0, 0, this.size, this.size), this._context.drawImage(a2, 0, 0, this.size, this.size);
        const t2 = this._context.getImageData(0, 0, this.size, this.size), s2 = new Uint8Array(this.size * this.size * 4);
        for (let e3 = 0; e3 < this.size * this.size; e3++) {
          const s3 = t2.data[4 * e3 + 3] / 255;
          this._gridOuter[e3] = s3 === 1 ? 0 : s3 === 0 ? i$4 : __pow(Math.max(0, 0.5 - s3), 2), this._gridInner[e3] = s3 === 1 ? i$4 : s3 === 0 ? 0 : __pow(Math.max(0, s3 - 0.5), 2);
        }
        this._edt(this._gridOuter, this.size, this.size), this._edt(this._gridInner, this.size, this.size);
        for (let i3 = 0; i3 < this.size * this.size; i3++) {
          const t3 = this._gridOuter[i3] - this._gridInner[i3];
          r$8(0.5 - t3 / (2 * n2), s2, 4 * i3);
        }
        r3(s2);
      };
      const l2 = h2 && h2.signal;
      l2 && v$3(l2, () => d2(m$8()));
    });
  }
  _initSVG() {
    if (!this._svg) {
      const t2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      t2.setAttribute("style", "position: absolute;"), t2.setAttribute("width", "0"), t2.setAttribute("height", "0"), t2.setAttribute("aria-hidden", "true"), t2.setAttribute("role", "presentation"), document.body.appendChild(t2), this._svg = t2;
    }
  }
  _createSVGString(t2) {
    const s2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    s2.setAttribute("d", t2), this._svg.appendChild(s2);
    const e3 = s2.getBBox(), i3 = e3.width / e3.height, r2 = this.size / 2;
    let h2, n2, o2, d2;
    if (i3 > 1) {
      n2 = h2 = r2 / e3.width;
      const t3 = r2 * (1 / i3);
      o2 = this.size / 4, d2 = r2 - t3 / 2;
    } else {
      h2 = n2 = r2 / e3.height;
      o2 = r2 - r2 * i3 / 2, d2 = this.size / 4;
    }
    const a2 = -e3.x * h2 + o2, l2 = -e3.y * n2 + d2;
    s2.setAttribute("style", `transform: matrix(${h2}, 0, 0, ${n2}, ${a2}, ${l2})`);
    const _2 = `<svg style="fill:red;" height="${this.size}" width="${this.size}" xmlns="http://www.w3.org/2000/svg">${this._svg.innerHTML}</svg>`;
    return this._svg.removeChild(s2), _2;
  }
  _edt(t2, s2, e3) {
    const i3 = this._f, r2 = this._d, h2 = this._v, n2 = this._z;
    for (let o2 = 0; o2 < s2; o2++) {
      for (let r3 = 0; r3 < e3; r3++)
        i3[r3] = t2[r3 * s2 + o2];
      this._edt1d(i3, r2, h2, n2, e3);
      for (let i4 = 0; i4 < e3; i4++)
        t2[i4 * s2 + o2] = r2[i4];
    }
    for (let o2 = 0; o2 < e3; o2++) {
      for (let e4 = 0; e4 < s2; e4++)
        i3[e4] = t2[o2 * s2 + e4];
      this._edt1d(i3, r2, h2, n2, s2);
      for (let e4 = 0; e4 < s2; e4++)
        t2[o2 * s2 + e4] = Math.sqrt(r2[e4]);
    }
  }
  _edt1d(t2, s2, e3, r2, h2) {
    e3[0] = 0, r2[0] = -i$4, r2[1] = +i$4;
    for (let n2 = 1, o2 = 0; n2 < h2; n2++) {
      let s3 = (t2[n2] + n2 * n2 - (t2[e3[o2]] + e3[o2] * e3[o2])) / (2 * n2 - 2 * e3[o2]);
      for (; s3 <= r2[o2]; )
        o2--, s3 = (t2[n2] + n2 * n2 - (t2[e3[o2]] + e3[o2] * e3[o2])) / (2 * n2 - 2 * e3[o2]);
      o2++, e3[o2] = n2, r2[o2] = s3, r2[o2 + 1] = +i$4;
    }
    for (let i3 = 0, n2 = 0; i3 < h2; i3++) {
      for (; r2[n2 + 1] < i3; )
        n2++;
      s2[i3] = (i3 - e3[n2]) * (i3 - e3[n2]) + t2[e3[n2]];
    }
  }
}
function h$6(t2) {
  return t2 && t2.type === "static";
}
class c$3 {
  constructor(t2, e3, i3, s2 = 0) {
    this._mosaicPages = [], this._maxItemSize = 0, this._currentPage = 0, this._pageWidth = 0, this._pageHeight = 0, this._mosaicRects = new Map(), this._spriteCopyQueue = [], this.pixelRatio = 1, (e3 <= 0 || i3 <= 0) && console.error("Sprites mosaic defaultWidth and defaultHeight must be greater than zero!"), this._pageWidth = e3, this._pageHeight = i3, this._requestRender = t2, s2 > 0 && (this._maxItemSize = s2), this.pixelRatio = window.devicePixelRatio || 1, this._binPack = new t$b(this._pageWidth, this._pageHeight);
    const a2 = Math.floor(this._pageWidth), r2 = Math.floor(this._pageHeight);
    this._mosaicPages.push({ mosaicsData: { type: "static", data: new Uint32Array(a2 * r2) }, size: [this._pageWidth, this._pageHeight], dirty: true, texture: void 0 });
  }
  getWidth(t2) {
    return t2 >= this._mosaicPages.length ? -1 : this._mosaicPages[t2].size[0];
  }
  getHeight(t2) {
    return t2 >= this._mosaicPages.length ? -1 : this._mosaicPages[t2].size[1];
  }
  getPageTexture(t2) {
    return t2 < this._mosaicPages.length ? this._mosaicPages[t2].texture : null;
  }
  has(t2) {
    return this._mosaicRects.has(t2);
  }
  get itemCount() {
    return this._mosaicRects.size;
  }
  getSpriteItem(t2) {
    return this._mosaicRects.get(t2);
  }
  addSpriteItem(t2, e3, i3, s2, r2, o2) {
    if (this._mosaicRects.has(t2))
      return this._mosaicRects.get(t2);
    let c2, n2, g2;
    if (h$6(i3))
      [c2, n2, g2] = this._allocateImage(e3[0], e3[1]);
    else {
      c2 = new t$i(0, 0, e3[0], e3[1]), n2 = this._mosaicPages.length;
      const t3 = void 0;
      this._mosaicPages.push({ mosaicsData: i3, size: e3, dirty: true, texture: t3 });
    }
    if (c2.width <= 0 || c2.height <= 0)
      return null;
    const m2 = { rect: c2, width: e3[0], height: e3[1], sdf: r2, simplePattern: o2, pixelRatio: 1, page: n2 };
    return this._mosaicRects.set(t2, m2), h$6(i3) && this._copy({ rect: c2, spriteSize: e3, spriteData: i3.data, page: n2, pageSize: g2, repeat: s2, sdf: r2 }), m2;
  }
  hasItemsToProcess() {
    return this._spriteCopyQueue.length !== 0;
  }
  processNextItem() {
    const t2 = this._spriteCopyQueue.pop();
    t2 && this._copy(t2);
  }
  getSpriteItems(t2) {
    const e3 = {};
    for (const i3 of t2)
      e3[i3] = this.getSpriteItem(i3);
    return e3;
  }
  getMosaicItemPosition(t2) {
    const e3 = this.getSpriteItem(t2), s2 = e3 && e3.rect;
    if (!s2)
      return null;
    s2.width = e3.width, s2.height = e3.height;
    const a2 = e3.width, r2 = e3.height, o2 = Y, h2 = this._mosaicPages[e3.page];
    return { size: [e3.width, e3.height], tl: [(s2.x + o2) / h2[0], (s2.y + o2) / h2[1]], br: [(s2.x + o2 + a2) / h2[0], (s2.y + o2 + r2) / h2[1]], page: e3.page };
  }
  bind(e3, i3, s2 = 0, a2 = 0) {
    const r2 = this._mosaicPages[s2], o2 = r2.mosaicsData;
    let c2 = r2.texture;
    if (c2 || (c2 = n$6(e3, o2, r2.size), r2.texture = c2), c2.setSamplingMode(i3), h$6(o2))
      e3.bindTexture(c2, a2), r2.dirty && (c2.setData(new Uint8Array(o2.data.buffer)), c2.generateMipmap());
    else {
      const i4 = o2.data, s3 = i4.bindFrame(e3, c2, a2);
      r$d(this._requestRender) && s3 && i4.frameCount > 0 && this._requestRender.requestRender(), i4.bindFrame(e3, c2, a2);
    }
    r2.dirty = false;
  }
  static _copyBits(t2, e3, i3, s2, a2, r2, o2, h2, c2, n2, g2) {
    let m2 = s2 * e3 + i3, p2 = h2 * r2 + o2;
    if (g2) {
      p2 -= r2;
      for (let o3 = -1; o3 <= n2; o3++, m2 = ((o3 + n2) % n2 + s2) * e3 + i3, p2 += r2)
        for (let e4 = -1; e4 <= c2; e4++)
          a2[p2 + e4] = t2[m2 + (e4 + c2) % c2];
    } else
      for (let u2 = 0; u2 < n2; u2++) {
        for (let e4 = 0; e4 < c2; e4++)
          a2[p2 + e4] = t2[m2 + e4];
        m2 += e3, p2 += r2;
      }
  }
  _copy(t2) {
    if (t2.page >= this._mosaicPages.length)
      return;
    const s2 = this._mosaicPages[t2.page], a2 = s2.mosaicsData;
    if (!h$6(s2.mosaicsData))
      throw new s$i("mapview-invalid-resource", "unsuitable data type!");
    const r2 = t2.spriteData, o2 = a2.data;
    o2 && r2 || console.error("Source or target images are uninitialized!"), c$3._copyBits(r2, t2.spriteSize[0], 0, 0, o2, t2.pageSize[0], t2.rect.x + Y, t2.rect.y + Y, t2.spriteSize[0], t2.spriteSize[1], t2.repeat), s2.dirty = true;
  }
  _allocateImage(t2, e3) {
    t2 += 2 * Y, e3 += 2 * Y;
    const s2 = Math.max(t2, e3);
    if (this._maxItemSize && this._maxItemSize < s2) {
      const i3 = __pow(2, Math.ceil(P$2(t2))), s3 = __pow(2, Math.ceil(P$2(e3))), o2 = new t$i(0, 0, t2, e3);
      return this._mosaicPages.push({ mosaicsData: { type: "static", data: new Uint32Array(i3 * s3) }, size: [i3, s3], dirty: true, texture: void 0 }), [o2, this._mosaicPages.length - 1, [i3, s3]];
    }
    const c2 = this._binPack.allocate(t2, e3);
    if (c2.width <= 0) {
      const i3 = this._mosaicPages[this._currentPage];
      return !i3.dirty && h$6(i3.mosaicsData) && (i3.mosaicsData.data = null), this._currentPage = this._mosaicPages.length, this._mosaicPages.push({ mosaicsData: { type: "static", data: new Uint32Array(this._pageWidth * this._pageHeight) }, size: [this._pageWidth, this._pageHeight], dirty: true, texture: void 0 }), this._binPack = new t$b(this._pageWidth, this._pageHeight), this._allocateImage(t2, e3);
    }
    return [c2, this._currentPage, [this._pageWidth, this._pageHeight]];
  }
  dispose() {
    this._binPack = null;
    for (const t2 of this._mosaicPages) {
      const e3 = t2.texture;
      e3 && e3.dispose();
      const i3 = t2.mosaicsData;
      if (!h$6(i3)) {
        i3.data.pause();
      }
    }
    this._mosaicPages = null, this._mosaicRects.clear();
  }
}
function n$6(t2, e3, i3) {
  return h$6(e3) ? new o$d(t2, { pixelFormat: 6408, dataType: 5121, width: i3[0], height: i3[1] }, new Uint8Array(e3.data.buffer)) : new o$d(t2, { pixelFormat: 6408, dataType: 5121, samplingMode: 9729, wrapMode: 33071, width: i3[0], height: i3[1] }, null);
}
const r$6 = new Uint32Array(256);
for (let b2 = 0; b2 < 256; b2++) {
  let t2 = b2;
  for (let e3 = 0; e3 < 8; e3++)
    t2 = (1 & t2) != 0 ? 3988292384 ^ t2 >>> 1 : t2 >>> 1;
  r$6[b2] = t2;
}
function a$8(t2, e3 = 0, a2 = t2.length - e3) {
  let i3 = -1;
  for (let n2 = e3, s2 = e3 + a2; n2 < s2; n2++)
    i3 = i3 >>> 8 ^ r$6[255 & (i3 ^ t2[n2])];
  return -1 ^ i3;
}
const i$3 = new s$i("Not a PNG"), n$5 = new s$i("Not an animated PNG"), s$8 = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]);
function h$5(t2) {
  const e3 = t2.constructor === Uint8Array ? t2 : new Uint8Array(t2);
  return !s$8.some((t3, r2) => t3 !== e3[r2]);
}
function l$5(t2) {
  const e3 = new Uint8Array(t2);
  if (!h$5(e3))
    return false;
  let r2 = false;
  return p$2(e3, (t3) => !(r2 = t3 === "acTL")), r2;
}
class o$5 {
  constructor() {
    this.width = 0, this.height = 0, this.numPlays = 0, this.playTime = 0, this.frames = [], this.paused = false, this.playing = false, this.playSpeed = 1, this.currentFrameNumber = 0, this._lastUsedFrame = -1;
  }
  static create(r2, a2) {
    return __async(this, null, function* () {
      const i3 = new o$5();
      try {
        yield i3._load(r2, a2);
      } catch (n2) {
        if (!g$4(n2))
          return new s$i("invalid-resource", `Could not load PNG: ${n2.message}`);
      }
      return i3;
    });
  }
  play() {
    this.playing || (this.paused = false, this.playing = true, this._play());
  }
  pause() {
    this.paused = true, this.playing = false, clearTimeout(this.timerID);
  }
  togglePlay() {
    this.paused || !this.playing ? this.play() : this.pause();
  }
  bindFrame(t2, e3, r2) {
    t2.bindTexture(e3, r2);
    const a2 = this.frameChanged();
    if (!a2)
      return false;
    const i3 = this.currentFrame, n2 = i3.frameData, s2 = e3.descriptor;
    return (i3.left || i3.top || i3.width !== s2.width || i3.height !== s2.height) && e3.setData(null), e3.updateData(0, i3.left, i3.top, i3.width, i3.height, n2), this.updateUsedFrame(), a2;
  }
  frameChanged() {
    return this._lastUsedFrame !== this.currentFrameNumber;
  }
  updateUsedFrame() {
    this._lastUsedFrame = this.currentFrameNumber;
  }
  _load(r2, a2) {
    return __async(this, null, function* () {
      try {
        const t2 = d$7(this, r2);
        if (t2 !== this)
          return t2;
        this._resizeCanvas = document.createElement("canvas"), this._resizeCanvas.width = this.width, this._resizeCanvas.height = this.height, yield Promise.all(this.frames.map((t3) => t3.createImage(this._resizeCanvas)));
      } catch (i3) {
        if (!g$4(i3))
          return new s$i("invalid-resource", "Could not parse PNG");
      }
      this.play();
    });
  }
  _play() {
    let t2, e3;
    if (this.playSpeed === 0)
      return void this.pause();
    this.playSpeed < 0 ? (this.currentFrameNumber -= 1, this.currentFrameNumber < 0 && (this.currentFrameNumber = this.frames.length - 1), e3 = this.currentFrameNumber, e3 -= 1, e3 < 0 && (e3 = this.frames.length - 1), t2 = 1 * -this.frames[e3].delay / this.playSpeed) : (this.currentFrameNumber += 1, this.currentFrameNumber %= this.frames.length, t2 = 1 * this.frames[this.currentFrameNumber].delay / this.playSpeed);
    const r2 = this.frames[this.currentFrameNumber];
    this.currentFrame = { frameData: r2.imageData, top: r2.top, left: r2.left, width: r2.width, height: r2.height }, this.timerID = window.setTimeout(() => this._play(), t2);
  }
}
class c$2 {
  constructor() {
    this.left = 0, this.top = 0, this.width = 0, this.height = 0, this.delay = 0, this.disposeOp = 0, this.blendOp = 0, this.data = null, this.imageData = null;
  }
  createImage(t2) {
    return __async(this, null, function* () {
      if (this.imageData === null)
        return new Promise((e3, r2) => {
          const a2 = URL.createObjectURL(this.data), i3 = document.createElement("img");
          i3.onload = () => {
            URL.revokeObjectURL(a2), this.imageData = m$3(i3, t2), e3();
          }, i3.onerror = () => {
            URL.revokeObjectURL(a2), this.imageData = null, r2(new Error("Image creation error"));
          }, i3.src = a2;
        });
    });
  }
}
function m$3(t2, e3) {
  e3.width = t2.width, e3.height = t2.height;
  const r2 = e3.getContext("2d");
  r2.drawImage(t2, 0, 0, t2.width, t2.height);
  const a2 = r2.getImageData(0, 0, t2.width, t2.height), i3 = new Uint8Array(a2.data);
  let n2;
  for (let s2 = 0; s2 < i3.length; s2 += 4)
    n2 = i3[s2 + 3] / 255, i3[s2] = i3[s2] * n2, i3[s2 + 1] = i3[s2 + 1] * n2, i3[s2 + 2] = i3[s2 + 2] * n2;
  return new ImageData(new Uint8ClampedArray(i3.buffer), t2.width, t2.height);
}
function d$7(t2, e3) {
  const r2 = new Uint8Array(e3);
  if (s$8.some((t3, e4) => t3 !== r2[e4]))
    return i$3;
  let a2 = false;
  if (p$2(r2, (t3) => !(a2 = t3 === "acTL")), !a2)
    return n$5;
  const h2 = [], u2 = [];
  let l2 = null, o2 = null, m2 = 0;
  if (p$2(r2, (e4, r3, a3, i3) => {
    const n2 = new DataView(r3.buffer);
    switch (e4) {
      case "IHDR":
        l2 = r3.subarray(a3 + 8, a3 + 8 + i3), t2.width = n2.getUint32(a3 + 8), t2.height = n2.getUint32(a3 + 12);
        break;
      case "acTL":
        t2.numPlays = n2.getUint32(a3 + 8 + 4);
        break;
      case "fcTL": {
        o2 && (t2.frames.push(o2), m2++), o2 = new c$2(), o2.width = n2.getUint32(a3 + 8 + 4), o2.height = n2.getUint32(a3 + 8 + 8), o2.left = n2.getUint32(a3 + 8 + 12), o2.top = n2.getUint32(a3 + 8 + 16);
        const e5 = n2.getUint16(a3 + 8 + 20);
        let r4 = n2.getUint16(a3 + 8 + 22);
        r4 === 0 && (r4 = 100), o2.delay = 1e3 * e5 / r4, o2.delay <= 10 && (o2.delay = 100), t2.playTime += o2.delay, o2.disposeOp = n2.getUint8(a3 + 8 + 24), o2.blendOp = n2.getUint8(a3 + 8 + 25), o2.dataParts = [], m2 === 0 && o2.disposeOp === 2 && (o2.disposeOp = 1);
        break;
      }
      case "fdAT":
        o2 && o2.dataParts.push(r3.subarray(a3 + 8 + 4, a3 + 8 + i3));
        break;
      case "IDAT":
        o2 && o2.dataParts.push(r3.subarray(a3 + 8, a3 + 8 + i3));
        break;
      case "IEND":
        u2.push(w$1(r3, a3, 12 + i3));
        break;
      default:
        h2.push(w$1(r3, a3, 12 + i3));
    }
  }), t2.frames.length === 0)
    return n$5;
  t2.frameCount = t2.frames.length;
  const d2 = new Blob(h2), g2 = new Blob(u2);
  return t2.frames.forEach((t3) => {
    let e4 = [];
    e4.push(s$8), l2.set(U$1(t3.width), 0), l2.set(U$1(t3.height), 4), e4.push(y("IHDR", l2)), e4.push(d2), t3.dataParts.forEach((t4) => e4.push(y("IDAT", t4))), e4.push(g2), t3.data = new Blob(e4, { type: "image/png" }), delete t3.dataParts, e4 = null;
  }), t2;
}
function p$2(t2, e3) {
  const r2 = new DataView(t2.buffer);
  let a2, i3, n2, s2 = 8;
  do {
    i3 = r2.getUint32(s2), a2 = g$1(t2, s2 + 4, 4), n2 = e3(a2, t2, s2, i3), s2 += 12 + i3;
  } while (n2 !== false && a2 !== "IEND" && s2 < t2.length);
}
function g$1(t2, e3, r2) {
  const a2 = Array.prototype.slice.call(t2.subarray(e3, e3 + r2));
  return String.fromCharCode.apply(String, a2);
}
function f$1(t2) {
  const e3 = new Uint8Array(t2.length);
  for (let r2 = 0; r2 < t2.length; r2++)
    e3[r2] = t2.charCodeAt(r2);
  return e3;
}
function w$1(t2, e3, r2) {
  const a2 = new Uint8Array(r2);
  return a2.set(t2.subarray(e3, e3 + r2)), a2;
}
function y(t2, e3) {
  const r2 = t2.length + e3.length, i3 = new Uint8Array(r2 + 8), n2 = new DataView(i3.buffer);
  n2.setUint32(0, e3.length), i3.set(f$1(t2), 4), i3.set(e3, 8);
  const s2 = a$8(i3, 4, r2);
  return n2.setUint32(r2 + 4, s2), i3;
}
function U$1(t2) {
  return new Uint8Array([t2 >>> 24 & 255, t2 >>> 16 & 255, t2 >>> 8 & 255, 255 & t2]);
}
const a$7 = { GCExt: 249, COMMENT: 254, APPExt: 255, UNKNOWN: 1, IMAGE: 44, EOF: 59, EXT: 33 };
function r$5(t2) {
  if (!t2 || t2.byteLength === 0)
    return false;
  const e3 = t2.constructor === Uint8Array ? t2 : new Uint8Array(t2);
  return e3[0] === 71 && e3[1] === 73 && e3[2] === 70 && e3[3] === 56;
}
function o$4(t2) {
  if (!t2 || t2.byteLength === 0)
    return false;
  const e3 = new Uint8Array(t2);
  if (!r$5(e3))
    return false;
  let s2 = 0;
  for (let i3 = 0, a2 = e3.length - 9; i3 < a2 && (e3[i3] !== 0 || e3[i3 + 1] !== 33 || e3[i3 + 2] !== 249 || e3[i3 + 3] !== 4 || e3[i3 + 8] !== 0 || e3[i3 + 9] !== 44 && e3[i3 + 9] !== 33 || (s2++, !(s2 > 1))); ++i3)
    ;
  return s2 > 1;
}
class n$4 {
  constructor() {
    this.paused = false, this.playing = false, this.waitTillDone = true, this.loading = false, this.firstFrameOnly = false, this.frames = [], this.comment = "", this.length = 0, this.currentFrameNumber = 0, this.frameCount = 0, this.playSpeed = 1, this.lastFrame = null, this.playOnLoad = true, this.complete = false, this.interlaceOffsets = [0, 4, 2, 1], this.interlaceSteps = [8, 8, 4, 2], this._lastUsedFrame = -1;
  }
  static create(s2, i3) {
    return __async(this, null, function* () {
      const a2 = new n$4();
      try {
        yield a2._load(s2, i3);
      } catch (r2) {
        if (!g$4(r2))
          return new s$i("invalid-resource", `Could not load PNG: ${r2.message}`);
      }
      return a2;
    });
  }
  play() {
    this.playing || (this.paused = false, this.playing = true, this._play());
  }
  pause() {
    this.paused = true, this.playing = false, clearTimeout(this.timerID);
  }
  togglePlay() {
    this.paused || !this.playing ? this.play() : this.pause();
  }
  bindFrame(t2, e3, s2) {
    t2.bindTexture(e3, s2);
    const i3 = this.frameChanged();
    if (i3) {
      const t3 = this.currentFrame, s3 = t3.frameData;
      e3.updateData(0, 0, 0, t3.width, t3.height, s3), this.updateUsedFrame();
    }
    return i3;
  }
  seekFrame(t2) {
    clearTimeout(this.timerID), this.currentFrameNumber = t2 % this.frames.length, this.playing ? this._play() : this._setCurrentFrame(this.currentFrameNumber);
  }
  seek(t2) {
    clearTimeout(this.timerID), t2 < 0 && (t2 = 0), t2 *= 1e3, t2 %= this.length;
    let e3 = 0;
    for (; t2 > this.frames[e3].time + this.frames[e3].delay && e3 < this.frames.length; )
      e3 += 1;
    this.currentFrameNumber = e3, this.playing ? this._play() : this._setCurrentFrame(this.currentFrameNumber);
  }
  frameChanged() {
    return this._lastUsedFrame !== this.currentFrameNumber;
  }
  updateUsedFrame() {
    this._lastUsedFrame = this.currentFrameNumber;
  }
  _load(s2, i3) {
    return __async(this, null, function* () {
      try {
        this.loading = true, yield this._parse(s2, i3), this.loading = false, this.play();
      } catch (a2) {
        if (!g$4(a2))
          return new s$i("invalid-resource", "Could not parse gif!");
      }
    });
  }
  _parse(t2, e3) {
    const s2 = new l$4(t2);
    s2.pos += 6, this.width = s2.data[s2.pos++] + (s2.data[s2.pos++] << 8), this.height = s2.data[s2.pos++] + (s2.data[s2.pos++] << 8);
    const i3 = s2.data[s2.pos++];
    return this.globalColourCount = 1 << 1 + (7 & i3), s2.pos++, s2.pos++, 128 & i3 && (this.globalColourTable = this._parseColourTable(this.globalColourCount, s2)), new Promise((t3, i4) => {
      setTimeout(() => this._parseBlock(s2, t3, i4, e3), 0);
    });
  }
  _parseBlock(t2, e3, r2, h2) {
    return __async(this, null, function* () {
      if (h2 && h2.signal && b(h2.signal))
        return void r2(m$8());
      const o2 = t2.data[t2.pos++];
      if (o2 === a$7.IMAGE) {
        if (this._parseImg(t2), this.firstFrameOnly)
          return this._finishedLoading(), void e3();
      } else {
        if (o2 === a$7.EOF)
          return this._finishedLoading(), void e3();
        this._parseExt(t2);
      }
      typeof this.onprogress == "function" && this.onprogress({ bytesRead: t2.pos, totalBytes: t2.data.length, frame: this.frames.length }), setTimeout(() => this._parseBlock(t2, e3, r2, h2), 0);
    });
  }
  _parseColourTable(t2, e3) {
    const s2 = [];
    for (let i3 = 0; i3 < t2; i3++)
      s2.push([e3.data[e3.pos++], e3.data[e3.pos++], e3.data[e3.pos++]]);
    return s2;
  }
  _parseImg(t2) {
    const e3 = (t3) => {
      const e4 = this.pixelBufSize / t3;
      this.interlacedBufSize !== this.pixelBufSize && (this.deinterlaceBuf = new Uint8Array(this.pixelBufSize), this.interlacedBufSize = this.pixelBufSize);
      let s3 = 0;
      for (let i4 = 0; i4 < 4; i4++)
        for (let a2 = this.interlaceOffsets[i4]; a2 < e4; a2 += this.interlaceSteps[i4])
          this.deinterlaceBuf.set(this.pixelBuf.subarray(s3, s3 + t3), a2 * t3), s3 += t3;
    }, s2 = {};
    this.frames.push(s2), s2.disposalMethod = this.disposalMethod, s2.time = this.length, s2.delay = 10 * this.delayTime, this.length += s2.delay, this.transparencyGiven ? s2.transparencyIndex = this.transparencyIndex : s2.transparencyIndex = void 0, s2.leftPos = t2.data[t2.pos++] + (t2.data[t2.pos++] << 8), s2.topPos = t2.data[t2.pos++] + (t2.data[t2.pos++] << 8), s2.width = t2.data[t2.pos++] + (t2.data[t2.pos++] << 8), s2.height = t2.data[t2.pos++] + (t2.data[t2.pos++] << 8);
    const i3 = t2.data[t2.pos++];
    s2.localColourTableFlag = !!(128 & i3), s2.localColourTableFlag && (s2.localColourTable = this._parseColourTable(1 << 1 + (7 & i3), t2)), this.pixelBufSize !== s2.width * s2.height && (this.pixelBuf = new Uint8Array(s2.width * s2.height), this.pixelBufSize = s2.width * s2.height), this._lzwDecode(t2.data[t2.pos++], t2.readSubBlocksB()), 64 & i3 ? (s2.interlaced = true, e3(s2.width)) : s2.interlaced = false, this._processFrame(s2);
  }
  _lzwDecode(t2, e3) {
    let s2, i3, a2, r2, h2, o2, n2, l2, d2;
    a2 = i3 = 0;
    let p2 = [];
    const u2 = 1 << t2, m2 = u2 + 1;
    for (r2 = t2 + 1, d2 = false; !d2; ) {
      for (o2 = h2, h2 = 0, s2 = 0; s2 < r2; s2++)
        e3[a2 >> 3] & 1 << (7 & a2) && (h2 |= 1 << s2), a2++;
      if (h2 === u2) {
        for (p2 = [], r2 = t2 + 1, s2 = 0; s2 < u2; s2++)
          p2[s2] = [s2];
        p2[u2] = [], p2[m2] = null;
      } else {
        if (h2 === m2)
          return void (d2 = true);
        for (h2 >= p2.length ? p2.push(p2[o2].concat(p2[o2][0])) : o2 !== u2 && p2.push(p2[o2].concat(p2[h2][0])), n2 = p2[h2], l2 = n2.length, s2 = 0; s2 < l2; s2++)
          this.pixelBuf[i3++] = n2[s2];
        p2.length === 1 << r2 && r2 < 12 && r2++;
      }
    }
  }
  _processFrame(t2) {
    t2.image = document.createElement("canvas"), t2.image.width = this.width, t2.image.height = this.height, t2.ctx = t2.image.getContext("2d");
    const e3 = t2.localColourTableFlag ? t2.localColourTable : this.globalColourTable;
    this.lastFrame === null && (this.lastFrame = t2);
    const s2 = this.lastFrame.disposalMethod === 2 || this.lastFrame.disposalMethod === 3;
    s2 || t2.ctx.drawImage(this.lastFrame.image, 0, 0, this.width, this.height);
    const i3 = t2.ctx.getImageData(t2.leftPos, t2.topPos, t2.width, t2.height), a2 = t2.transparencyIndex, r2 = i3.data, h2 = t2.interlaced ? this.deinterlaceBuf : this.pixelBuf, o2 = h2.length;
    let n2, l2, d2 = 0;
    for (let p2 = 0; p2 < o2; p2++)
      n2 = h2[p2], l2 = e3[n2], a2 !== n2 ? (r2[d2++] = l2[0], r2[d2++] = l2[1], r2[d2++] = l2[2], r2[d2++] = 255) : s2 ? (r2[d2 + 3] = 0, d2 += 4) : d2 += 4;
    t2.ctx.putImageData(i3, t2.leftPos, t2.topPos), this.lastFrame = t2;
  }
  _parseExt(t2) {
    const e3 = t2.data[t2.pos++];
    e3 === a$7.GCExt ? this._parseGCExt(t2) : e3 === a$7.COMMENT ? this.comment += t2.readSubBlocks() : e3 === a$7.APPExt ? this._parseAppExt(t2) : (e3 === a$7.UNKNOWN && (t2.pos += 13), t2.readSubBlocks());
  }
  _parseAppExt(t2) {
    t2.pos += 1, t2.getString(8) === "NETSCAPE" ? t2.pos += 8 : (t2.pos += 3, t2.readSubBlocks());
  }
  _parseGCExt(t2) {
    t2.pos++;
    const e3 = t2.data[t2.pos++];
    this.disposalMethod = (28 & e3) >> 2, this.transparencyGiven = !!(1 & e3), this.delayTime = t2.data[t2.pos++] + (t2.data[t2.pos++] << 8), this.transparencyIndex = t2.data[t2.pos++], t2.pos++;
  }
  _finishedLoading() {
    this.loading = false, this.frameCount = this.frames.length, this.lastFrame = null, this.complete = true, this.disposalMethod = void 0, this.transparencyGiven = void 0, this.delayTime = void 0, this.transparencyIndex = void 0, this.waitTillDone = void 0, this.pixelBuf = void 0, this.deinterlaceBuf = void 0, this.pixelBufSize = void 0, this.deinterlaceBuf = void 0, this.currentFrameNumber = 0, this.frames.length > 0 && this._setCurrentFrame(0), this.playOnLoad && this.play();
  }
  _play() {
    let t2, e3;
    this.playSpeed !== 0 ? (this.playSpeed < 0 ? (this.currentFrameNumber -= 1, this.currentFrameNumber < 0 && (this.currentFrameNumber = this.frames.length - 1), e3 = this.currentFrameNumber, e3 -= 1, e3 < 0 && (e3 = this.frames.length - 1), t2 = 1 * -this.frames[e3].delay / this.playSpeed) : (this.currentFrameNumber += 1, this.currentFrameNumber %= this.frames.length, t2 = 1 * this.frames[this.currentFrameNumber].delay / this.playSpeed), this._setCurrentFrame(this.currentFrameNumber), this.timerID = window.setTimeout(() => this._play(), t2)) : this.pause();
  }
  _setCurrentFrame(t2) {
    const e3 = this.frames[t2];
    this.currentFrame = { frameData: e3.image, top: 0, left: 0, width: this.width, height: this.height };
  }
}
class l$4 {
  constructor(t2) {
    this.pos = 0, this.data = new Uint8ClampedArray(t2), this.len = this.data.length;
  }
  getString(t2) {
    let e3 = "";
    for (; t2--; )
      e3 += String.fromCharCode(this.data[this.pos++]);
    return e3;
  }
  readSubBlocks() {
    let t2, e3, s2 = "";
    do {
      for (e3 = t2 = this.data[this.pos++]; e3--; )
        s2 += String.fromCharCode(this.data[this.pos++]);
    } while (t2 !== 0 && this.pos < this.len);
    return s2;
  }
  readSubBlocksB() {
    let t2, e3;
    const s2 = [];
    do {
      for (e3 = t2 = this.data[this.pos++]; e3--; )
        s2.push(this.data[this.pos++]);
    } while (t2 !== 0 && this.pos < this.len);
    return s2;
  }
}
function e$4(e3) {
  switch (e3.type) {
    case "esriSMS":
      return `${e3.style}.${e3.path}`;
    case "esriSLS":
      return `${e3.style}.${e3.cap}`;
    case "esriSFS":
      return `${e3.style}`;
    case "esriPFS":
    case "esriPMS":
      return e3.imageData ? `${e3.imageData}${e3.width}${e3.height}` : `${e3.url}${e3.width}${e3.height}`;
    default:
      return e3.mosaicHash ? e3.mosaicHash : JSON.stringify(e3);
  }
}
const j$1 = n$j(), C = "arial-unicode-ms-regular", F = 126, U = n$e.getLogger("esri.views.2d.engine.webgl.TextureManager"), P = (e3) => e3.type === "esriSMS" && e3.path, B = (e3) => e3.url || e3.imageData, G = (e3) => e3.url && e3.url.indexOf(".gif") !== -1 || e3.contentType && e3.contentType === "image/gif" || e3.imageData && e3.imageData.indexOf("data:image/gif") !== -1, L = (e3) => e3.url && e3.url.indexOf(".png") !== -1 || e3.contentType && e3.contentType === "image/png" || e3.imageData && e3.imageData.indexOf("data:image/png") !== -1, O = (e3) => e3.type && e3.type.toLowerCase().indexOf("3d") !== -1;
function $(e3) {
  switch (e3.type) {
    case "CIMSolidStroke":
    case "CIMSolidFill":
      return true;
    case "esriSFS":
      return e3.style === "esriSFSSolid" || e3.style === "esriSFSNull";
    case "esriSLS":
      return e3.style === "esriSLSSolid" || e3.style === "esriSLSNull";
    default:
      return false;
  }
}
const k = (e3) => e3.indexOf("data:image/svg+xml") !== -1;
function q(e3) {
  switch (e3.type) {
    case "esriSMS":
    case "esriPMS":
    case "CIMPointSymbol":
    case "CIMVectorMarker":
    case "CIMPictureMarker":
    case "CIMCharacterMarker":
      return false;
    default:
      return true;
  }
}
function D(e3) {
  const t2 = [];
  for (let i3 = 0; i3 < e3.length; i3++)
    t2.push(e3.charCodeAt(i3));
  return t2;
}
function A(e3, t2) {
  return __async(this, null, function* () {
    const i3 = e3.imageData ? `data:${e3.contentType};base64,${e3.imageData}` : e3.url;
    let r2;
    const n2 = ";base64,";
    if (i3.indexOf(n2) !== -1) {
      const e4 = i3.indexOf(n2) + n2.length, t3 = i3.substring(e4), s2 = atob(t3), a2 = new Uint8Array(s2.length);
      for (let i4 = 0; i4 < s2.length; i4++)
        a2[i4] = s2.charCodeAt(i4);
      r2 = a2.buffer;
    } else
      try {
        const { data: e4 } = yield U$2(i3, __spreadValues({ responseType: "array-buffer" }, t2));
        r2 = e4;
      } catch (c2) {
        if (!g$4(c2))
          return new s$i("mapview-invalid-resource", `Could not fetch requested resource at ${i3}`);
      }
    return r2;
  });
}
function N(e3, t2) {
  const i3 = Math.round(u$5(t2) * window.devicePixelRatio), s2 = i3 >= 128 ? 2 : 4;
  return Math.min(e3, i3 * s2);
}
const Q = (e3, t2, i3) => U.error(new s$i(e3, t2, i3));
class E$1 {
  constructor(e3, t2, i3) {
    this.mosaicType = e3, this.page = t2, this.sdf = i3;
  }
  static fromMosaic(e3, t2) {
    return new E$1(e3, t2.page, t2.sdf);
  }
}
class H {
  constructor(t2) {
    this._invalidFontsMap = new Map(), this._sdfConverter = new r$7(F), this._bindingInfos = new Array(), this._hashToBindingIndex = new Map(), this._rasterizer = new o$e(), this._ongoingRasterizations = new Map(), this._imageRequestQueue = new _$2({ concurrency: 10, process: (e3, t3) => __async(this, null, function* () {
      a$h(t3);
      try {
        return yield U$2(e3, { responseType: "image", signal: t3 });
      } catch (i3) {
        if (!g$4(i3))
          throw new s$i("mapview-invalid-resource", `Could not fetch requested resource at ${e3}`, i3);
        throw i3;
      }
    }) }), this._spriteMosaic = new c$3(t2, 2048, 2048, 500), this._glyphSource = new r$9(`${s$m.fontsUrl}/{fontstack}/{range}.pbf`), this._glyphMosaic = new l$6(1024, 1024, this._glyphSource);
  }
  dispose() {
    this._spriteMosaic.dispose(), this._glyphMosaic.dispose(), this._rasterizer.dispose(), this._sdfConverter.dispose(), this._spriteMosaic = null, this._glyphMosaic = null, this._rasterizer = null, this._sdfConverter = null, this._hashToBindingIndex.clear(), this._hashToBindingIndex = null, this._bindingInfos = null, this._ongoingRasterizations.clear(), this._ongoingRasterizations = null, this._imageRequestQueue.clear(), this._imageRequestQueue = null;
  }
  get sprites() {
    return this._spriteMosaic;
  }
  get glyphs() {
    return this._glyphMosaic;
  }
  rasterizeItem(e3, i3, s2, r2) {
    return __async(this, null, function* () {
      if (t$k(e3))
        return Q("mapview-null-resource", "Unable to rasterize null resource"), null;
      switch (e3.type) {
        case "CIMTextSymbol":
        case "esriTS": {
          const t2 = yield this._rasterizeText(e3, s2, r2);
          return t2.forEach((e4) => this._setTextureBinding(O$1.GLYPH, e4)), { glyphMosaicItems: t2 };
        }
        case "esriSMS":
        case "esriPMS":
        case "esriSFS":
        case "esriPFS":
        case "esriSLS":
        default: {
          if (O(e3))
            return Q("mapview-invalid-type", `MapView does not support symbol type: ${e3.type}`, e3), null;
          const t2 = yield this._rasterizeSpriteSymbol(e3, i3, r2);
          return e$c(t2) && t2 && this._setTextureBinding(O$1.SPRITE, t2), { spriteMosaicItem: t2 };
        }
      }
    });
  }
  bindTextures(e3, t2, i3, s2 = false) {
    if (i3.textureBinding === 0)
      return;
    const r2 = this._bindingInfos[i3.textureBinding - 1], a2 = r2.page, n2 = s2 ? 9987 : 9729;
    switch (r2.mosaicType) {
      case O$1.SPRITE: {
        const i4 = this.sprites.getWidth(a2), s3 = this.sprites.getHeight(a2), r3 = r$f(j$1, i4, s3);
        return this._spriteMosaic.bind(e3, n2, a2, u$7), t2.setUniform1i("u_texture", u$7), void t2.setUniform2fv("u_mosaicSize", r3);
      }
      case O$1.GLYPH: {
        const i4 = this.glyphs.width, s3 = this.glyphs.height, r3 = r$f(j$1, i4, s3);
        return this._glyphMosaic.bind(e3, n2, a2, y$2), t2.setUniform1i("u_texture", y$2), void t2.setUniform2fv("u_mosaicSize", r3);
      }
      default:
        U.error("mapview-texture-manager", `Cannot handle unknown type ${r2.mosaicType}`);
    }
  }
  _hashMosaic(e3, t2) {
    return 1 | e3 << 1 | (t2.sdf ? 1 : 0) << 2 | t2.page << 3;
  }
  _setTextureBinding(e3, t2) {
    const i3 = this._hashMosaic(e3, t2);
    if (!this._hashToBindingIndex.has(i3)) {
      const s2 = E$1.fromMosaic(e3, t2), r2 = this._bindingInfos.length + 1;
      this._hashToBindingIndex.set(i3, r2), this._bindingInfos.push(s2);
    }
    t2.textureBinding = this._hashToBindingIndex.get(i3);
  }
  _rasterizeText(e3, t2, i3) {
    return __async(this, null, function* () {
      const s2 = n$9(e3.font), r2 = this._invalidFontsMap.has(s2), a2 = t2 || D(n$i(e3.text)[0]);
      try {
        return yield this._glyphMosaic.getGlyphItems(r2 ? C : s2, a2, i3);
      } catch (n2) {
        return Q("mapview-invalid-resource", `Couldn't find font ${s2}. Falling back to Arial Unicode MS Regular`), this._invalidFontsMap.set(s2, true), this._glyphMosaic.getGlyphItems(C, a2, i3);
      }
    });
  }
  _rasterizeSpriteSymbol(e3, t2, i3) {
    return __async(this, null, function* () {
      if ($(e3))
        return null;
      const r2 = e$4(e3);
      if (this._spriteMosaic.has(r2))
        return this._spriteMosaic.getSpriteItem(r2);
      if (P(e3) || B(e3))
        return this._handleAsyncResource(r2, e3, i3);
      const a2 = this._rasterizer.rasterizeJSONResource(e3, t2);
      if (a2) {
        const { size: t3, image: i4, sdf: s2, simplePattern: n2 } = a2;
        return this._addItemToMosaic(r2, t3, { type: "static", data: i4 }, q(e3), s2, n2);
      }
      return new s$i("TextureManager", "unrecognized or null rasterized image");
    });
  }
  _handleAsyncResource(e3, t2, i3) {
    return __async(this, null, function* () {
      if (this._ongoingRasterizations.has(e3))
        return this._ongoingRasterizations.get(e3);
      let s2;
      s2 = P(t2) ? this._handleSVG(t2, e3, i3) : this._handleImage(t2, e3, i3), this._ongoingRasterizations.set(e3, s2);
      try {
        yield s2, this._ongoingRasterizations.delete(e3);
      } catch (e4) {
        this._ongoingRasterizations.delete(e3);
      }
      return s2;
    });
  }
  _handleSVG(e3, t2, i3) {
    return __async(this, null, function* () {
      const s2 = [F, F], r2 = yield this._sdfConverter.draw(e3.path, i3);
      return this._addItemToMosaic(t2, s2, { type: "static", data: new Uint32Array(r2.buffer) }, false, true, true);
    });
  }
  _handleGIFOrPNG(e3, t2, i3) {
    return __async(this, null, function* () {
      const r2 = yield A(e3, i3);
      if (e$c(r2)) {
        const o2 = r$5(r2), c2 = h$5(r2);
        if (!o2 && !c2)
          return new s$i("mapview-invalid-resource", "Image data is neither GIF nor PNG!");
        let h2;
        try {
          o2 && o$4(r2) ? h2 = yield n$4.create(r2, i3) : c2 && l$5(r2) && (h2 = yield o$5.create(r2, i3));
        } catch (n2) {
          if (!g$4(n2))
            return new s$i("mapview-invalid-resource", "Could not fetch requested resource!");
        }
        if (h2 && e$c(h2))
          return this._addItemToMosaic(t2, [h2.width, h2.height], { type: "animated", data: h2 }, q(e3), false, false);
        const u2 = new Blob([r2], { type: o2 ? "image/gif" : "image/png" }), d2 = yield this._imageFromBlob(u2);
        if (d2 && d2 instanceof HTMLImageElement) {
          let i4 = d2.width, s2 = d2.height;
          e3.type === "esriPMS" && (i4 = Math.round(N(d2.width, e3.width)), s2 = Math.round(d2.height * (i4 / d2.width)));
          const { size: r3, sdf: a2, image: n2 } = this._rasterizer.rasterizeImageResource(i4, s2, d2, e3.colorSubstitutions);
          return this._addItemToMosaic(t2, r3, { type: "static", data: n2 }, q(e3), a2, false);
        }
      }
      return new s$i("mapview-invalid-resource", "Could not handle resource!");
    });
  }
  _handleImage(e3, t2, i3) {
    return __async(this, null, function* () {
      if (G(e3) || L(e3))
        return this._handleGIFOrPNG(e3, t2, i3);
      const r2 = e3.imageData ? `data:${e3.contentType};base64,${e3.imageData}` : e3.url;
      try {
        const { data: s2 } = yield this._imageRequestQueue.push(r2, __spreadValues({}, i3));
        k(r2) && (s2.width = u$5(e3.width), s2.height = u$5(e3.height));
        let a2 = s2.width, o2 = s2.height;
        e3.type === "esriPMS" && (a2 = Math.round(N(s2.width, e3.width)), o2 = Math.round(s2.height * (a2 / s2.width)));
        const { size: c2, sdf: h2, image: u2 } = this._rasterizer.rasterizeImageResource(a2, o2, s2, e3.colorSubstitutions);
        return this._addItemToMosaic(t2, c2, { type: "static", data: u2 }, q(e3), h2, false);
      } catch (o2) {
        if (!g$4(o2))
          return new s$i("mapview-invalid-resource", `Could not fetch requested resource at ${r2}. ${o2.message}`);
      }
    });
  }
  _imageFromBlob(e3) {
    return __async(this, null, function* () {
      const t2 = window.URL.createObjectURL(e3);
      try {
        const { data: e4 } = yield this._imageRequestQueue.push(t2);
        return window.URL.revokeObjectURL(t2), e4;
      } catch (i3) {
        if (window.URL.revokeObjectURL(t2), !g$4(i3))
          return new s$i("mapview-invalid-resource", `Could not fetch requested resource at ${t2}`);
        throw i3;
      }
    });
  }
  _addItemToMosaic(e3, t2, i3, s2, r2, a2) {
    return this._spriteMosaic.addSpriteItem(e3, t2, i3, s2, r2, a2);
  }
}
class t$9 {
  constructor() {
    this.name = this.constructor.name;
  }
}
class o$3 extends t$9 {
  constructor() {
    super(...arguments), this.defines = [], this._desc = { vsPath: "fx/integrate", fsPath: "fx/integrate", attributes: { a_position: 0 } };
  }
  dispose() {
    this._quad && this._quad.dispose();
  }
  bind() {
  }
  unbind() {
  }
  draw(i3, r2) {
    if (!r2.size)
      return;
    const { context: a2, renderingOptions: o2 } = i3;
    this._quad || (this._quad = new r$g(a2, [0, 0, 1, 0, 0, 1, 1, 1]));
    const n2 = a2.getBoundFramebufferObject(), { x: m2, y: u2, width: d2, height: f2 } = a2.getViewport();
    r2.bindTextures(a2);
    const c2 = r2.getBlock(J);
    if (t$k(c2))
      return;
    const _2 = c2.getFBO(a2), l2 = c2.getFBO(a2, 1);
    a2.setViewport(0, 0, r2.size, r2.size), this._computeDelta(i3, l2, o2.labelsAnimationTime), this._updateAnimationState(i3, l2, _2), a2.bindFramebuffer(n2), a2.setViewport(m2, u2, d2, f2);
  }
  _computeDelta(e3, t2, s2) {
    const { context: a2, painter: o2, displayLevel: n2 } = e3, m2 = o2.materialManager.getProgram(e3, this._desc, ["delta"]);
    a2.bindFramebuffer(t2), a2.setClearColor(0, 0, 0, 0), a2.clear(a2.gl.COLOR_BUFFER_BIT), a2.bindProgram(m2), m2.setUniform1i("u_maskTexture", A$1), m2.setUniform1i("u_sourceTexture", B$1), m2.setUniform1f("u_timeDelta", e3.deltaTime), m2.setUniform1f("u_animationTime", s2), m2.setUniform1f("u_zoomLevel", Math.round(10 * n2)), this._quad.draw();
  }
  _updateAnimationState(e3, t2, i3) {
    const { context: r2, painter: s2 } = e3, a2 = s2.materialManager.getProgram(e3, this._desc, ["update"]);
    r2.bindTexture(t2.colorTexture, 1), r2.bindProgram(a2), a2.setUniform1i("u_sourceTexture", 1), r2.bindFramebuffer(i3), r2.setClearColor(0, 0, 0, 0), r2.clear(r2.gl.COLOR_BUFFER_BIT), this._quad.draw();
  }
}
const r$4 = (e3) => e3.replace("-", "_").toUpperCase(), t$8 = (e3) => `#define ${r$4(e3)}
`, a$6 = { attributes: { a_pos: 0, a_tex: 1 }, shaders: (r2) => ({ vertexShader: t$8(r2) + s$j("blend/blend.vert"), fragmentShader: t$8(r2) + s$j("blend/blend.frag") }) };
const d$6 = n$e.getLogger("esri.views.2d.engine.webgl.effects.blendEffects.BlendEffect");
class u$1 {
  constructor() {
    this._size = [0, 0];
  }
  dispose(e3) {
    this._backBufferTexture && (this._backBufferTexture.dispose(), this._backBufferTexture = null), this._programCache && (this._programCache.dispose(), this._programCache = null), this._quad && (this._quad.dispose(), this._quad = null);
  }
  draw(e3, r2, i3, s2, a2) {
    const { context: u2, drawPhase: c2 } = e3;
    if (this._setupShader(u2), s2 && s2 !== "normal" && c2 !== I.LABEL)
      return void this._drawBlended(e3, r2, i3, s2, a2);
    const m2 = this._programCache.getProgram(a$6, "normal");
    if (!m2)
      return void d$6.error(new s$i("mapview-BlendEffect", 'Error creating shader program for blend mode "normal"'));
    u2.bindProgram(m2), r2.setSamplingMode(i3), u2.bindTexture(r2, 0), m2.setUniform1i("u_layerTexture", 0), m2.setUniform1f("u_opacity", a2), u2.setBlendingEnabled(true), u2.setBlendFunction(1, 771);
    const h2 = this._quad;
    h2.draw(), h2.unbind();
  }
  _drawBlended(r2, i3, s2, o2, a2) {
    const { context: u2, state: c2, pixelRatio: m2, inFadeTransition: h2 } = r2, { size: f2 } = c2, l2 = u2.getBoundFramebufferObject();
    let p2, g2;
    if (r$d(l2)) {
      const e3 = l2.descriptor;
      p2 = e3.width, g2 = e3.height;
    } else
      p2 = Math.round(m2 * f2[0]), g2 = Math.round(m2 * f2[1]);
    this._createOrResizeTexture(r2, p2, g2);
    const _2 = this._backBufferTexture;
    l2.copyToTexture(0, 0, p2, g2, 0, 0, _2), u2.setStencilTestEnabled(false), u2.setStencilWriteMask(0), u2.setBlendingEnabled(true), u2.setDepthTestEnabled(false), u2.setDepthWriteEnabled(false);
    const b2 = this._programCache.getProgram(a$6, o2);
    if (!b2)
      return void d$6.error(new s$i("mapview-BlendEffect", `Error creating shader program for blend mode ${o2}`));
    u2.bindProgram(b2), _2.setSamplingMode(s2), u2.bindTexture(_2, 0), b2.setUniform1i("u_backbufferTexture", 0), i3.setSamplingMode(s2), u2.bindTexture(i3, 1), b2.setUniform1i("u_layerTexture", 1), b2.setUniform1f("u_opacity", a2), b2.setUniform1f("u_inFadeOpacity", h2 ? 1 : 0), u2.setBlendFunction(1, 0);
    const x = this._quad;
    x.draw(), x.unbind(), u2.setBlendFunction(1, 771);
  }
  _setupShader(e3) {
    this._programCache || (this._programCache = new t$h(e3), this._quad || (this._quad = new r$g(e3, [-1, -1, 1, -1, -1, 1, 1, 1])));
  }
  _createOrResizeTexture(e3, r2, t2) {
    const { context: s2 } = e3;
    this._backBufferTexture !== null && r2 === this._size[0] && t2 === this._size[1] || (this._backBufferTexture ? this._backBufferTexture.resize(r2, t2) : this._backBufferTexture = new o$d(s2, { target: 3553, pixelFormat: 6408, internalFormat: 6408, dataType: 5121, wrapMode: 33071, samplingMode: 9729, flipped: false, width: r2, height: t2 }), this._size[0] = r2, this._size[1] = t2);
  }
}
class t$7 extends t$9 {
  constructor(e3) {
    super(), this.name = this.constructor.name, this.defines = [e3];
  }
  dispose() {
  }
  bind({ context: e3, painter: t2 }) {
    this._prev = e3.getBoundFramebufferObject();
    const { width: s2, height: r2 } = e3.getViewport(), o2 = t2.getFbos(s2, r2).effect0;
    e3.bindFramebuffer(o2), e3.setColorMask(true, true, true, true), e3.setClearColor(0, 0, 0, 0), e3.clear(e3.gl.COLOR_BUFFER_BIT);
  }
  unbind() {
  }
  draw(e3, t2) {
    const { context: s2, painter: r2, state: o2, deltaTime: n2 } = e3, c2 = r2.getPostProcessingEffects(t2.effects), i3 = s2.getBoundFramebufferObject();
    c2.length && t2.transitionStep(n2, o2.scale);
    for (const { postProcessingEffect: f2, effect: a2 } of c2)
      f2.draw(e3, i3, a2);
    s2.bindFramebuffer(this._prev), s2.setStencilTestEnabled(false), r2.blitTexture(s2, i3.colorTexture, 9728), s2.setStencilTestEnabled(true);
  }
}
const o$2 = [void 0, void 0, void 0, 1], i$2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1], t$6 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], d$5 = 256, n$3 = { outlineWidth: 0.7, outerHaloWidth: 0.7, innerHaloWidth: 0.7, outlinePosition: 0 };
const n$2 = n$e.getLogger("esri.views.2d.engine.webgl.painter.highlight.HighlightGradient");
function h$4(o2, i3) {
  i3.fillColor[0] = o2.color.r / 255, i3.fillColor[1] = o2.color.g / 255, i3.fillColor[2] = o2.color.b / 255, i3.fillColor[3] = o2.color.a, o2.haloColor ? (i3.outlineColor[0] = o2.haloColor.r / 255, i3.outlineColor[1] = o2.haloColor.g / 255, i3.outlineColor[2] = o2.haloColor.b / 255, i3.outlineColor[3] = o2.haloColor.a) : (i3.outlineColor[0] = i3.fillColor[0], i3.outlineColor[1] = i3.fillColor[1], i3.outlineColor[2] = i3.fillColor[2], i3.outlineColor[3] = i3.fillColor[3]), i3.fillColor[3] *= o2.fillOpacity, i3.outlineColor[3] *= o2.haloOpacity, i3.fillColor[0] *= i3.fillColor[3], i3.fillColor[1] *= i3.fillColor[3], i3.fillColor[2] *= i3.fillColor[3], i3.outlineColor[0] *= i3.outlineColor[3], i3.outlineColor[1] *= i3.outlineColor[3], i3.outlineColor[2] *= i3.outlineColor[3], i3.outlineWidth = n$3.outlineWidth, i3.outerHaloWidth = n$3.outerHaloWidth, i3.innerHaloWidth = n$3.innerHaloWidth, i3.outlinePosition = n$3.outlinePosition;
}
const s$7 = [0, 0, 0, 0];
class a$5 {
  constructor() {
    this._convertedHighlightOptions = { fillColor: [0.2 * 0.75, 0.6 * 0.75, 0.675, 0.75], outlineColor: [0.2 * 0.9, 0.54, 0.81, 0.9], outlinePosition: n$3.outlinePosition, outlineWidth: n$3.outlineWidth, innerHaloWidth: n$3.innerHaloWidth, outerHaloWidth: n$3.outerHaloWidth }, this.shadeTexChanged = true, this.texelData = new Uint8Array(4 * d$5), this.minMaxDistance = [0, 0];
  }
  setHighlightOptions(o2) {
    const i3 = this._convertedHighlightOptions;
    h$4(o2, i3);
    const t2 = i3.outlinePosition - i3.outlineWidth / 2 - i3.outerHaloWidth, e3 = i3.outlinePosition - i3.outlineWidth / 2, a2 = i3.outlinePosition + i3.outlineWidth / 2, d2 = i3.outlinePosition + i3.outlineWidth / 2 + i3.innerHaloWidth, u2 = Math.sqrt(Math.PI / 2) * o$2[3], g2 = Math.abs(t2) > u2 ? Math.round(10 * (Math.abs(t2) - u2)) / 10 : 0, C2 = Math.abs(d2) > u2 ? Math.round(10 * (Math.abs(d2) - u2)) / 10 : 0;
    let f2;
    g2 && !C2 ? n$2.error("The outer rim of the highlight is " + g2 + "px away from the edge of the feature; consider reducing some width values or shifting the outline position towards positive values (inwards).") : !g2 && C2 ? n$2.error("The inner rim of the highlight is " + C2 + "px away from the edge of the feature; consider reducing some width values or shifting the outline position towards negative values (outwards).") : g2 && C2 && n$2.error("The highlight is " + Math.max(g2, C2) + "px away from the edge of the feature; consider reducing some width values.");
    const c2 = [void 0, void 0, void 0, void 0];
    function m2(o3, i4, t3) {
      c2[0] = (1 - t3) * o3[0] + t3 * i4[0], c2[1] = (1 - t3) * o3[1] + t3 * i4[1], c2[2] = (1 - t3) * o3[2] + t3 * i4[2], c2[3] = (1 - t3) * o3[3] + t3 * i4[3];
    }
    const { texelData: p2 } = this;
    for (let r2 = 0; r2 < d$5; ++r2)
      f2 = t2 + r2 / (d$5 - 1) * (d2 - t2), f2 < t2 ? (c2[4 * r2 + 0] = 0, c2[4 * r2 + 1] = 0, c2[4 * r2 + 2] = 0, c2[4 * r2 + 3] = 0) : f2 < e3 ? m2(s$7, i3.outlineColor, (f2 - t2) / (e3 - t2)) : f2 < a2 ? [c2[0], c2[1], c2[2], c2[3]] = i3.outlineColor : f2 < d2 ? m2(i3.outlineColor, i3.fillColor, (f2 - a2) / (d2 - a2)) : [c2[4 * r2 + 0], c2[4 * r2 + 1], c2[4 * r2 + 2], c2[4 * r2 + 3]] = i3.fillColor, p2[4 * r2 + 0] = 255 * c2[0], p2[4 * r2 + 1] = 255 * c2[1], p2[4 * r2 + 2] = 255 * c2[2], p2[4 * r2 + 3] = 255 * c2[3];
    this.minMaxDistance[0] = t2, this.minMaxDistance[1] = d2, this.shadeTexChanged = true;
  }
  applyHighlightOptions(o2, e3) {
    this.shadeTex || (this.shadeTex = new o$d(o2, { target: 3553, pixelFormat: 6408, dataType: 5121, wrapMode: 33071, width: d$5, height: 1, samplingMode: 9729 })), this.shadeTexChanged && (this.shadeTex.updateData(0, 0, 0, d$5, 1, this.texelData), this.shadeTexChanged = false), o2.bindTexture(this.shadeTex, F$1), e3.setUniform2fv("u_minMaxDistance", this.minMaxDistance);
  }
  destroy() {
    this.shadeTex && (this.shadeTex.dispose(), this.shadeTex = null);
  }
}
const r$3 = { shaders: { vertexShader: s$j("highlight/textured.vert"), fragmentShader: s$j("highlight/highlight.frag") }, attributes: { a_position: 0, a_texcoord: 1 } }, e$3 = { shaders: { vertexShader: s$j("highlight/textured.vert"), fragmentShader: s$j("highlight/blur.frag") }, attributes: { a_position: 0, a_texcoord: 1 } };
class m$2 {
  constructor() {
    this._width = void 0, this._height = void 0, this._resources = null;
  }
  dispose() {
    this._resources && (this._resources.quadGeometry.dispose(), this._resources.quadVAO.dispose(), this._resources.highlightProgram.dispose(), this._resources.blurProgram.dispose(), this._resources = null);
  }
  preBlur(e3, s2) {
    e3.bindTexture(s2, E$2), e3.bindProgram(this._resources.blurProgram), this._resources.blurProgram.setUniform4fv("u_direction", [1, 0, 1 / this._width, 0]), this._resources.blurProgram.setUniformMatrix4fv("u_channelSelector", i$2), e3.bindVAO(this._resources.quadVAO), e3.drawArrays(5, 0, 4), e3.bindVAO();
  }
  finalBlur(e3, s2) {
    e3.bindTexture(s2, E$2), e3.bindProgram(this._resources.blurProgram), this._resources.blurProgram.setUniform4fv("u_direction", [0, 1, 0, 1 / this._height]), this._resources.blurProgram.setUniformMatrix4fv("u_channelSelector", t$6), e3.bindVAO(this._resources.quadVAO), e3.drawArrays(5, 0, 4), e3.bindVAO();
  }
  renderHighlight(e3, s2, i3) {
    e3.bindTexture(s2, E$2), e3.bindProgram(this._resources.highlightProgram), i3.applyHighlightOptions(e3, this._resources.highlightProgram), e3.bindVAO(this._resources.quadVAO), e3.setBlendingEnabled(true), e3.setBlendFunction(1, 771), e3.drawArrays(5, 0, 4), e3.bindVAO();
  }
  _initialize(o2, h2, m2) {
    this._width = h2, this._height = m2;
    const d2 = s$l.createVertex(o2, 35044, new Int8Array([-1, -1, 0, 0, 1, -1, 1, 0, -1, 1, 0, 1, 1, 1, 1, 1]).buffer), g2 = new s$k(o2, { a_position: 0, a_texcoord: 1 }, { geometry: [{ name: "a_position", count: 2, type: 5120, offset: 0, stride: 4, normalized: false }, { name: "a_texcoord", count: 2, type: 5121, offset: 2, stride: 4, normalized: false }] }, { geometry: d2 }), l2 = t$g(o2, r$3), _2 = t$g(o2, e$3);
    l2.setUniform1i("u_texture", E$2), l2.setUniform1i("u_shade", F$1), l2.setUniform4fv("u_sigmas", o$2), _2.setUniform1i("u_texture", E$2), _2.setUniform4fv("u_sigmas", o$2), this._resources = { quadGeometry: d2, quadVAO: g2, highlightProgram: l2, blurProgram: _2 };
  }
  setup(r2, e3, s2) {
    this._resources ? (this._width = e3, this._height = s2) : this._initialize(r2, e3, s2);
  }
}
function s$6(s2, t2, i3) {
  const h2 = new o$d(s2, { target: 3553, pixelFormat: 6408, dataType: 5121, wrapMode: 33071, width: t2, height: i3, samplingMode: 9729 });
  return [h2, new r$h(s2, { colorTarget: 0, depthStencilTarget: 2 }, h2)];
}
class t$5 {
  constructor() {
    this._width = void 0, this._height = void 0, this._resources = null;
  }
  dispose() {
    this._resources && (this._resources.sharedBlur1Tex.dispose(), this._resources.sharedBlur1Fbo.dispose(), this._resources.sharedBlur2Tex.dispose(), this._resources.sharedBlur2Fbo.dispose(), this._resources = null);
  }
  _initialize(e3, r2, t2) {
    this._width = r2, this._height = t2;
    const [i3, h2] = s$6(e3, r2, t2), [o2, u2] = s$6(e3, r2, t2);
    this._resources = { sharedBlur1Tex: i3, sharedBlur1Fbo: h2, sharedBlur2Tex: o2, sharedBlur2Fbo: u2 };
  }
  setup(e3, r2, s2) {
    !this._resources || this._width === r2 && this._height === s2 || this.dispose(), this._resources || this._initialize(e3, r2, s2);
  }
  get sharedBlur1Tex() {
    return this._resources.sharedBlur1Tex;
  }
  get sharedBlur1Fbo() {
    return this._resources.sharedBlur1Fbo;
  }
  get sharedBlur2Tex() {
    return this._resources.sharedBlur2Tex;
  }
  get sharedBlur2Fbo() {
    return this._resources.sharedBlur2Fbo;
  }
}
const r$2 = 4, d$4 = 3 / r$2;
class l$3 extends t$9 {
  constructor() {
    super(...arguments), this.defines = ["highlight"], this._hlRenderer = new m$2(), this._hlGradient = new a$5(), this._width = void 0, this._height = void 0, this._hlSurfaces = new t$5(), this._adjustedWidth = void 0, this._adjustedHeight = void 0, this._blitRenderer = new s$c();
  }
  dispose() {
    this._hlSurfaces && this._hlSurfaces.dispose(), this._hlRenderer && this._hlRenderer.dispose(), this._hlGradient && this._hlGradient.destroy(), this._boundFBO = null;
  }
  bind(e3) {
    const { context: t2, painter: i3 } = e3, { width: h2, height: s2 } = t2.getViewport(), r2 = i3.getFbos(h2, s2).effect0;
    this.setup(e3, h2, s2), t2.bindFramebuffer(r2), t2.setColorMask(true, true, true, true), t2.setClearColor(0, 0, 0, 0), t2.clear(t2.gl.COLOR_BUFFER_BIT);
  }
  unbind() {
  }
  setup({ context: e3 }, t2, i3) {
    this._width = t2, this._height = i3;
    const h2 = t2 % r$2, s2 = i3 % r$2;
    t2 += h2 < r$2 / 2 ? -h2 : r$2 - h2, i3 += s2 < r$2 / 2 ? -s2 : r$2 - s2, this._adjustedWidth = t2, this._adjustedHeight = i3, this._boundFBO = e3.getBoundFramebufferObject();
    const l2 = Math.round(t2 * d$4), n2 = Math.round(i3 * d$4);
    this._hlRenderer.setup(e3, l2, n2), this._hlSurfaces.setup(e3, l2, n2);
  }
  draw({ context: e3 }) {
    const t2 = e3.getBoundFramebufferObject();
    e3.setViewport(0, 0, this._adjustedWidth * d$4, this._adjustedHeight * d$4), e3.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo), e3.setStencilTestEnabled(false), e3.setClearColor(0, 0, 0, 0), e3.clear(e3.gl.COLOR_BUFFER_BIT), this._blitRenderer.render(e3, t2.colorTexture, 9728, 1), e3.setStencilTestEnabled(false), e3.setBlendingEnabled(false), e3.bindFramebuffer(this._hlSurfaces.sharedBlur2Fbo), e3.setClearColor(0, 0, 0, 0), e3.clear(e3.gl.COLOR_BUFFER_BIT), this._hlRenderer.preBlur(e3, this._hlSurfaces.sharedBlur1Tex), e3.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo), e3.setClearColor(0, 0, 0, 0), e3.clear(e3.gl.COLOR_BUFFER_BIT), this._hlRenderer.finalBlur(e3, this._hlSurfaces.sharedBlur2Tex), e3.bindFramebuffer(this._boundFBO), e3.setBlendingEnabled(true), e3.setViewport(0, 0, this._width, this._height), this._hlRenderer.renderHighlight(e3, this._hlSurfaces.sharedBlur1Tex, this._hlGradient), this._boundFBO = null;
  }
  setHighlightOptions(e3) {
    this._hlGradient.setHighlightOptions(e3);
  }
}
class o$1 extends t$9 {
  constructor() {
    super(...arguments), this.name = this.constructor.name, this.defines = ["id"], this._lastSize = 0;
  }
  dispose() {
    r$d(this._fbo) && this._fbo.dispose();
  }
  bind({ context: t2, painter: e3 }) {
    const { width: s2, height: o2 } = t2.getViewport(), r2 = e3.getFbos(s2, o2).effect0;
    t2.bindFramebuffer(r2), t2.setColorMask(true, true, true, true), t2.setClearColor(0, 0, 0, 0), t2.clear(t2.gl.COLOR_BUFFER_BIT);
  }
  unbind() {
  }
  draw({ context: t2, state: s2, pixelRatio: o2 }, r2, i3 = T$2) {
    const f2 = t2.getBoundFramebufferObject(), n2 = s2.size[1] * o2, a2 = Math.round(i3 * o2), h2 = a2 / 2, c2 = a2 / 2;
    this._ensureBuffer(a2), r2.forEach((t3, e3) => {
      const s3 = new Map(), i4 = Math.floor(e3[0] * o2 - a2 / 2), u2 = Math.floor(n2 - e3[1] * o2 - a2 / 2);
      f2.readPixels(i4, u2, a2, a2, 6408, 5121, this._buf);
      for (let o3 = 0; o3 < this._buf32.length; o3++) {
        const t4 = this._buf32[o3];
        if (t4 !== 4294967295 && t4 !== 0) {
          const e4 = o3 % a2, r3 = a2 - Math.floor(o3 / a2), i5 = (h2 - e4) * (h2 - e4) + (c2 - r3) * (c2 - r3), f3 = s3.has(t4) ? s3.get(t4) : 4294967295;
          s3.set(t4, Math.min(i5, f3));
        }
      }
      const l2 = Array.from(s3).sort((t4, e4) => t4[1] - e4[1]).map((t4) => t4[0]);
      t3.resolve(l2), r2.delete(e3);
    });
  }
  _ensureBuffer(t2) {
    this._lastSize !== t2 && (this._lastSize = t2, this._buf = new Uint8Array(4 * t2 * t2), this._buf32 = new Uint32Array(this._buf.buffer));
  }
}
function e$2(e3) {
  switch (e3) {
    case "bloom":
    case "blur":
    case "opacity":
    case "drop-shadow":
      return e3;
    default:
      return "colorize";
  }
}
const t$4 = { colorize: () => __async(this, null, function* () {
  return new (yield import("./Colorize.a1d5cf8e.js")).Colorize();
}), blur: () => __async(this, null, function* () {
  return new (yield import("./Blur.3aa3a731.js")).Blur();
}), bloom: () => __async(this, null, function* () {
  return new (yield import("./Bloom.01183c94.js")).Bloom();
}), opacity: () => __async(this, null, function* () {
  return new (yield import("./Opacity.41d917af.js")).Opacity();
}), "drop-shadow": () => __async(this, null, function* () {
  return new (yield import("./DropShadow.51d5fc80.js")).DropShadow();
}) };
class s$5 {
  constructor(e3) {
    this._requestRender = e3, this._effectMap = new Map(), this._effectPromiseMap = new Map();
  }
  dispose() {
    this._requestRender && (this._requestRender = null), this._effectMap.forEach((e3) => e3.dispose()), this._effectMap.clear(), this._effectPromiseMap.clear();
  }
  getPostProcessingEffects(t2) {
    if (!t2 || t2.length === 0)
      return [];
    const s2 = [];
    for (const o2 of t2) {
      const t3 = e$2(o2.type), r2 = this._effectMap.get(t3);
      r2 ? s2.push({ postProcessingEffect: r2, effect: o2 }) : this._enablePostProcessingEffect(t3);
    }
    return s2;
  }
  _enablePostProcessingEffect(e3) {
    return __async(this, null, function* () {
      const t2 = yield this._loadPostProcessingEffect(e3);
      this._requestRender && (this._effectMap.set(e3, t2), this._requestRender.requestRender());
    });
  }
  _loadPostProcessingEffect(e3) {
    return __async(this, null, function* () {
      return this._effectPromiseMap.has(e3) || this._effectPromiseMap.set(e3, t$4[e3]()), this._effectPromiseMap.get(e3);
    });
  }
}
class a$4 {
  constructor(r2, e3) {
    var s2;
    this.brushes = r2, this.name = e3.name, this.drawPhase = e3.drawPhase || I.MAP, this._targetFn = e3.target, this.effects = e3.effects || [], this.enableDefaultDraw = (s2 = e3.enableDefaultDraw) != null ? s2 : () => true, this.has = e3.has;
  }
  render(e3) {
    const { context: s2, profiler: t2 } = e3, a2 = this._targetFn(), o2 = this.drawPhase & e3.drawPhase;
    if (t2.recordPassStart(this.name), o2 && (!this.has || t$j(this.has))) {
      this.enableDefaultDraw() && this._doRender(e3, a2), t2.recordPassEnd();
      for (const r2 of this.effects) {
        if (!r2.enable())
          continue;
        const o3 = r2.apply;
        t2.recordPassStart(this.name + "." + o3.name), t2.recordBrushStart(o3.name);
        const i3 = r2.args && r2.args(), { x: n2, y: h2, width: f2, height: d2 } = s2.getViewport(), c2 = s2.getBoundFramebufferObject();
        o3.bind(e3, i3), this._doRender(e3, a2, o3.defines), o3.draw(e3, i3), o3.unbind(e3, i3), s2.bindFramebuffer(c2), s2.setViewport(n2, h2, f2, d2), t2.recordBrushEnd(), t2.recordPassEnd();
      }
    }
  }
  _doRender(r2, t2, a2) {
    if (!t$k(t2))
      if (a$i(t2)) {
        for (const e3 of t2)
          if (e3.visible)
            for (const s2 of this.brushes)
              r2.profiler.recordBrushStart(s2.name), s2.prepareState(r2, e3, a2), s2.draw(r2, e3, a2), r2.profiler.recordBrushEnd();
      } else
        for (const e3 of this.brushes)
          r2.profiler.recordBrushStart(e3.name), e3.prepareState(r2, t2, a2), e3.draw(r2, t2, a2), r2.profiler.recordBrushEnd();
  }
}
class p$1 {
  constructor(e3, t2) {
    this.context = e3, this._blitRenderer = new s$c(), this._brushCache = new Map(), this._vtlMaterialManager = new c$6(), this._blendEffect = new u$1(), this.effects = { highlight: new l$3(), hittest: new o$1(), integrate: new o$3(), insideEffect: new t$7("inside"), outsideEffect: new t$7("outside") }, this.materialManager = new g$2(e3), this.textureManager = new H(t2), this._effectsManager = new s$5(t2);
  }
  get vectorTilesMaterialManager() {
    return this._vtlMaterialManager;
  }
  getRenderTarget() {
    return this._renderTarget;
  }
  setRenderTarget(e3) {
    this._renderTarget = e3;
  }
  getFbos(e3, r2) {
    if (e3 !== this._lastWidth || r2 !== this._lastHeight) {
      if (this._lastWidth = e3, this._lastHeight = r2, this._fbos) {
        for (const t2 in this._fbos)
          this._fbos[t2].resize(e3, r2);
        return this._fbos;
      }
      const i3 = { target: 3553, pixelFormat: 6408, dataType: 5121, samplingMode: 9728, wrapMode: 33071, width: e3, height: r2 }, n2 = { colorTarget: 0, depthStencilTarget: 3 }, o2 = new t$l(this.context, { width: e3, height: r2, internalFormat: 34041 });
      this._stencilBuf = o2, this._fbos = { output: new r$h(this.context, n2, i3, o2), blend: new r$h(this.context, n2, i3, o2), effect0: new r$h(this.context, n2, i3, o2) };
    }
    return this._fbos;
  }
  getSharedStencilBuffer() {
    return this._stencilBuf;
  }
  beforeRenderLayers(t2, s2 = null) {
    const { width: r2, height: i3 } = t2.getViewport();
    this._prevFBO = t2.getBoundFramebufferObject();
    const n2 = this.getFbos(r2, i3);
    if (t2.bindFramebuffer(n2.output), t2.setColorMask(true, true, true, true), t2.setDepthWriteEnabled(true), r$d(s2)) {
      const { r: e3, g: r3, b: i4, a: n3 } = s2.color;
      t2.setClearColor(n3 * e3 / 255, n3 * r3 / 255, n3 * i4 / 255, n3);
    } else
      t2.setClearColor(0, 0, 0, 0);
    t2.setClearDepth(1), t2.clear(t2.gl.COLOR_BUFFER_BIT | t2.gl.DEPTH_BUFFER_BIT), t2.setDepthWriteEnabled(false);
  }
  beforeRenderLayer(e3, t2, s2) {
    const { context: r2, blendMode: i3, effects: n2, requireFBO: o2 } = e3;
    if (o2 || m$1(i3, n2, s2))
      r2.bindFramebuffer(this._fbos.blend), r2.setColorMask(true, true, true, true), r2.setClearColor(0, 0, 0, 0), r2.clear(r2.gl.COLOR_BUFFER_BIT);
    else {
      const e4 = this._getOutputFBO();
      r2.bindFramebuffer(e4);
    }
    r2.setDepthWriteEnabled(false), r2.setDepthTestEnabled(false), r2.setStencilTestEnabled(true), r2.setClearStencil(t2), r2.setStencilWriteMask(255), r2.clear(r2.gl.STENCIL_BUFFER_BIT);
  }
  compositeLayer(t2, s2) {
    const { context: i3, blendMode: n2, effects: o2, requireFBO: a2 } = t2;
    if (a2 || m$1(n2, o2, s2)) {
      r$d(o2) && o2.length > 0 && t2.drawPhase === I.MAP && this._applyEffects(t2, o2);
      const a3 = this._getOutputFBO();
      i3.bindFramebuffer(a3), i3.setStencilTestEnabled(false), i3.setStencilWriteMask(0), i3.setBlendingEnabled(true), i3.setBlendFunctionSeparate(1, 771, 1, 771), i3.setColorMask(true, true, true, true);
      const h2 = r$d(n2) ? n2 : "normal";
      this._blendEffect.draw(t2, this._fbos.blend.colorTexture, 9728, h2, s2);
    }
  }
  renderLayers(e3) {
    if (e3.bindFramebuffer(this._prevFBO), !this._fbos)
      return;
    const t2 = this._getOutputFBO();
    e3.setStencilTestEnabled(false), e3.setStencilWriteMask(0), this.blitTexture(e3, t2.colorTexture, 9728);
  }
  dispose() {
    if (this.materialManager.dispose(), this.textureManager.dispose(), this._blitRenderer && (this._blitRenderer.dispose(), this._blitRenderer = null), this._brushCache && (this._brushCache.forEach((e3) => e3.dispose()), this._brushCache.clear(), this._brushCache = null), this._fbos)
      for (const e3 in this._fbos)
        this._fbos[e3] && this._fbos[e3].dispose();
    if (this.effects)
      for (const e3 in this.effects)
        this.effects[e3] && this.effects[e3].dispose();
    this._vtlMaterialManager && (this._vtlMaterialManager.dispose(), this._vtlMaterialManager = null), this._prevFBO = null;
  }
  getGeometryBrush(e3) {
    const t2 = { [E$3.FILL]: g$5.fill, [E$3.LINE]: g$5.line, [E$3.MARKER]: g$5.marker, [E$3.TEXT]: g$5.text }[e3];
    let s2 = this._brushCache.get(t2);
    return s2 === void 0 && (s2 = new t2(), this._brushCache.set(t2, s2)), this._brushCache.get(t2);
  }
  renderObject(e3, t2, s2, r2) {
    const i3 = g$5[s2];
    if (!i3)
      return null;
    let o2 = this._brushCache.get(i3);
    o2 === void 0 && (o2 = new i3(), this._brushCache.set(i3, o2)), o2.prepareState(e3, t2, r2), o2.draw(e3, t2, r2);
  }
  renderObjects(e3, t2, s2, r2) {
    const i3 = g$5[s2];
    if (!i3)
      return null;
    let o2 = this._brushCache.get(i3);
    o2 === void 0 && (o2 = new i3(), this._brushCache.set(i3, o2)), o2.drawMany(e3, t2, r2);
  }
  registerRenderPass(e3) {
    const t2 = e3.brushes.map((e4) => (this._brushCache.has(e4) || this._brushCache.set(e4, new e4()), this._brushCache.get(e4)));
    return new a$4(t2, e3);
  }
  setHighlightOptions(e3) {
    this.effects.highlight.setHighlightOptions(e3);
  }
  blitTexture(e3, t2, s2, r2 = 1) {
    e3.setBlendingEnabled(true), e3.setBlendFunctionSeparate(1, 771, 1, 771), e3.setColorMask(true, true, true, true), this._blitRenderer.render(e3, t2, s2, r2);
  }
  getPostProcessingEffects(e3) {
    return this._effectsManager.getPostProcessingEffects(e3);
  }
  _getOutputFBO() {
    return this._renderTarget != null ? this._renderTarget : this._fbos.output;
  }
  _applyEffects(e3, t2) {
    const { context: s2 } = e3, r2 = this._effectsManager.getPostProcessingEffects(t2);
    for (const { postProcessingEffect: i3, effect: n2 } of r2)
      s2.bindFramebuffer(this._fbos.blend), i3.draw(e3, this._fbos.blend, n2);
  }
}
function m$1(t2, s2, r2) {
  return r2 !== 1 || r$d(t2) && t2 !== "normal" || r$d(s2) && s2.length > 0;
}
const i$1 = t$j("esri-2d-profiler");
class o {
  constructor(e3, s2) {
    if (this._events = new n$k(), this._entries = new Map(), this._timings = new s$n(10), !i$1)
      return;
    this._ext = t$m(e3.gl, {}), this._debugOutput = s2;
    const o2 = e3.gl;
    if (this.enableCommandLogging) {
      for (const t2 in o2)
        if (typeof o2[t2] == "function") {
          const e4 = o2[t2], s3 = t2.indexOf("draw") !== -1;
          o2[t2] = (...r2) => (this._events.emit("command", { container: this._currentContainer, pass: this._currentPass, brush: this._currentBrush, method: t2, args: r2, isDrawCommand: s3 }), this._currentSummary && (this._currentSummary.commands++, s3 && this._currentSummary.drawCommands++), e4.apply(o2, r2));
        }
    }
  }
  get enableCommandLogging() {
    return !(typeof i$1 == "object" && i$1.disableCommands);
  }
  recordContainerStart(e3) {
    i$1 && (this._currentContainer = e3);
  }
  recordContainerEnd() {
    i$1 && (this._currentContainer = null);
  }
  recordPassStart(e3) {
    i$1 && (this._currentPass = e3, this._initSummary());
  }
  recordPassEnd() {
    i$1 && (this._currentPass = null, this._emitSummary());
  }
  recordBrushStart(e3) {
    i$1 && (this._currentBrush = e3);
  }
  recordBrushEnd() {
    i$1 && (this._currentBrush = null);
  }
  recordStart(e3) {
    if (i$1 && r$d(this._ext)) {
      if (this._entries.has(e3)) {
        const t3 = this._entries.get(e3), r2 = this._ext.resultAvailable(t3.query), n2 = this._ext.disjoint();
        if (r2 && !n2) {
          const r3 = this._ext.getResult(t3.query) / 1e6;
          let n3 = 0;
          if (r$d(this._timings.enqueue(r3))) {
            const e4 = this._timings.entries, s2 = e4.length;
            let t4 = 0;
            for (const r4 of e4)
              t4 += r4;
            n3 = t4 / s2;
          }
          const i3 = r3.toFixed(2), o2 = n3 ? n3.toFixed(2) : "--";
          this.enableCommandLogging ? (console.groupCollapsed(`Frame report for ${e3}, ${i3} ms (${o2} last 10 avg)
${t3.commandsLen} Commands (${t3.drawCommands} draw)`), console.log("RenderPass breakdown: "), console.table(t3.summaries), console.log("Commands: ", t3.commands), console.groupEnd()) : console.log(`Frame report for ${e3}, ${i3} ms (${o2} last 10 avg)`), this._debugOutput.innerHTML = `${i3} (${o2})`;
        }
        for (const e4 of t3.handles)
          e4.remove();
        this._entries.delete(e3);
      }
      const t2 = { name: e3, query: this._ext.createQuery(), commands: [], commandsLen: 0, drawCommands: 0, summaries: [], handles: [] };
      this.enableCommandLogging && (t2.handles.push(this._events.on("command", (e4) => {
        t2.commandsLen++, t2.commands.push(e4), e4.isDrawCommand && t2.drawCommands++;
      })), t2.handles.push(this._events.on("summary", (e4) => {
        t2.summaries.push(e4);
      }))), this._ext.beginTimeElapsed(t2.query), this._entries.set(e3, t2);
    }
  }
  recordEnd(e3) {
    i$1 && r$d(this._ext) && this._entries.has(e3) && this._ext.endTimeElapsed();
  }
  _initSummary() {
    this.enableCommandLogging && (this._currentSummary = { container: this._currentContainer, pass: this._currentPass, drawCommands: 0, commands: 0 });
  }
  _emitSummary() {
    this.enableCommandLogging && this._events.emit("summary", this._currentSummary);
  }
}
const a$3 = n$e.getLogger("esri.views.2d.engine.webgl.WebGLDriverTest");
class l$2 {
  constructor(e3) {
    this.svgAlwaysPremultipliesAlpha = false, this._ignoresSamplerPrecision = null, this._context = e3, n$l(e3).then((e4) => {
      this.svgAlwaysPremultipliesAlpha = !e4;
    });
  }
  get ignoresSamplerPrecision() {
    return t$k(this._ignoresSamplerPrecision) && (this._ignoresSamplerPrecision = m(this._context)), this._ignoresSamplerPrecision;
  }
}
const p = (e3) => new l$2(e3), m = (e3) => {
  const r2 = new r$h(e3, { colorTarget: 0, depthStencilTarget: 0 }, { target: 3553, wrapMode: 33071, pixelFormat: 6408, dataType: 5121, samplingMode: 9728, width: 1, height: 1 }), n2 = "\nprecision highp float;\n\nattribute vec2 a_pos;\n\nuniform highp sampler2D u_texture;\nvarying vec4 v_color;\n\nfloat getBit(in float bitset, in int bitIndex) {\n  float offset = pow(2.0, float(bitIndex));\n\n  return mod(floor(bitset / offset), 2.0);\n}\n\nvoid main() {\n  vec4 value = texture2D(u_texture, vec2(0.0));\n\n  float bit = getBit(value.x * 255.0, 1);\n\n  v_color = bit * vec4(1.0);\n\n  gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n}\n", l2 = "\nprecision highp float;\n\nvarying vec4 v_color;\n\nvoid main() {\n  gl_FragColor = v_color;\n}\n", p2 = new Uint8Array(4), m2 = new r$g(e3, [0, 0, 1, 0, 0, 1, 1, 1]), g2 = new o$c(e3, n2, l2, { a_pos: 0 }), c2 = new o$d(e3, { target: 3553, wrapMode: 33071, pixelFormat: 6408, dataType: 5121, samplingMode: 9728, width: 1, height: 1 }, new Uint8Array([2, 255, 0, 0]));
  g2.setUniform1i("u_texture", 0), e3.bindTexture(c2, 0);
  const d2 = e3.getBoundFramebufferObject();
  e3.bindFramebuffer(r2), e3.bindProgram(g2);
  const { x: h2, y: u2, width: w2, height: f2 } = e3.getViewport();
  e3.setViewport(0, 0, 1, 1), m2.draw(), e3.setViewport(h2, u2, w2, f2), r2.readPixels(0, 0, 1, 1, 6408, 5121, p2), g2.dispose(), m2.dispose(), r2.dispose();
  const b2 = p2[0] !== 255 || p2[1] !== 255 || p2[2] !== 255 || p2[3] !== 255;
  return b2 && a$3.warn(`A problem was detected with your graphics driver. Your driver does not appear to honor sampler precision specifiers, which may result in rendering issues due to numerical instability. We recommend ensuring that your drivers have been updated to the latest version. Applying lowp sampler workaround. [${p2[0]}.${p2[1]}.${p2[2]}.${p2[3]}]`), e3.bindFramebuffer(d2), b2;
};
class t$3 {
  constructor(t2, e3, i3, s2, n2) {
    this.target = t2, this.geometryType = e3, this.materialKey = i3, this.indexFrom = s2, this.indexCount = n2;
  }
  get indexEnd() {
    return this.indexFrom + this.indexCount;
  }
  extend(t2) {
    this.indexCount += t2;
  }
  draw(t2, e3, i3) {
    this.target.draw(t2, e3, i3, this.indexFrom, this.indexCount);
  }
}
class e$1 {
  constructor(t2) {
    this._infos = new Array(), this._target = t2;
  }
  static from(t2, i3) {
    const s2 = new e$1(t2);
    for (; i3.next(); )
      s2.add(i3);
    return s2;
  }
  get _last() {
    return this._infos[this._infos.length - 1];
  }
  add(e3) {
    const { materialKey: i3, indexFrom: s2, indexCount: n2 } = e3;
    if (this._infos.length && e3.materialKey === this._last.materialKey && e3.indexFrom === this._last.indexEnd)
      this._last.extend(n2);
    else {
      const e4 = new t$3(this._target, this.geometryType, i3, s2, n2);
      this._infos.push(e4);
    }
  }
  forEach(t2) {
    for (const e3 of this._infos)
      t2(e3);
  }
}
class e2 {
  constructor(t2) {
    if (!Array.isArray(t2))
      return void (this.data = t2);
    this.data = t2[0];
    let a2 = this;
    for (let n2 = 1; n2 < t2.length; n2++)
      a2.next = new e2([t2[n2]]), a2 = a2.next;
  }
  find(t2) {
    var e3;
    return t2(this.data) ? this : (e3 = this.next) == null ? void 0 : e3.find(t2);
  }
  max(t2, e3 = this) {
    const a2 = t2(this.data) > t2(e3.data) ? this : e3;
    return this.next ? this.next.max(t2, a2) : a2;
  }
  remove(t2, e3 = null) {
    return this === t2 ? e3 ? (e3.next = this.next, e3) : this.next : this.next.remove(t2, this);
  }
  get last() {
    return this.next ? this.next.last : this;
  }
}
class a$2 {
  constructor(a2) {
    this._head = null, t$k(a2) || (this._head = new e2(a2));
  }
  get head() {
    return this._head;
  }
  maxAvailableSpace() {
    if (t$k(this._head))
      return 0;
    const e3 = this._head.max((t2) => t2.end - t2.start);
    return e3.data.end - e3.data.start;
  }
  firstFit(e3) {
    if (t$k(this._head))
      return null;
    let a2 = null, n2 = this._head;
    for (; n2; ) {
      const t2 = n2.data.end - n2.data.start;
      if (t2 === e3)
        return a2 ? a2.next = n2.next : this._head = n2.next, n2.data.start;
      if (t2 > e3) {
        const t3 = n2.data.start;
        return n2.data.start += e3, t3;
      }
      a2 = n2, n2 = n2.next;
    }
    return null;
  }
  free(a2, n2) {
    const r2 = a2 + n2;
    if (t$k(this._head)) {
      const t2 = new e2({ start: a2, end: r2 });
      return void (this._head = t2);
    }
    if (r2 <= this._head.data.start) {
      if (r2 === this._head.data.start)
        return void (this._head.data.start -= n2);
      const t2 = new e2({ start: a2, end: r2 });
      return t2.next = this._head, void (this._head = t2);
    }
    let s2 = this._head, i3 = s2.next;
    for (; i3; ) {
      if (i3.data.start >= r2) {
        if (s2.data.end === a2)
          return void (s2.data.end += n2);
        if (i3.data.start === r2)
          return void (i3.data.start -= n2);
        const t2 = new e2({ start: a2, end: r2 });
        return t2.next = s2.next, void (s2.next = t2);
      }
      s2 = i3, i3 = i3.next;
    }
    if (a2 === s2.data.end)
      return void (s2.data.end += n2);
    const d2 = new e2({ start: a2, end: r2 });
    s2.next = d2;
  }
}
const h$3 = 32767, n$1 = h$3 << 16 | h$3;
class d$3 {
  constructor(t2, i3, s2) {
    const r2 = new Uint32Array(i3 * s2);
    this.strideInt = s2, this.bufferType = t2, this.dirty = { start: 1 / 0, end: 0 }, this.cpu = r2, this.gpu = null, this.clear();
  }
  destroy() {
    A$2(this.gpu, (t2) => t2.dispose());
  }
  clear() {
    this.dirty.start = 1 / 0, this.dirty.end = 0, this.freeList = new a$2({ start: 0, end: this.cpu.length / this.strideInt }), this.fillPointer = 0;
  }
  get bufferSize() {
    return this.cpu.length / this.strideInt;
  }
  maxAvailableSpace() {
    return this.freeList.maxAvailableSpace();
  }
  insert(t2, s2, r2, e3) {
    const h2 = r2 * this.strideInt, n2 = s2 * this.strideInt * Uint32Array.BYTES_PER_ELEMENT, d2 = new Uint32Array(t2, n2, h2), a2 = f$5(this.freeList.firstFit(r2), "First fit region must be defined"), f2 = a2 * this.strideInt, u2 = h2 * this.strideInt, o2 = a2 - s2;
    if (e3 !== 0)
      for (let i3 = 0; i3 < d2.length; i3++)
        d2[i3] += e3;
    return this.cpu.set(d2, f2), this.dirty.start = Math.min(this.dirty.start, f2), this.dirty.end = Math.max(this.dirty.end, f2 + u2), this.fillPointer = Math.max(this.fillPointer, f2 + u2), o2;
  }
  free(t2, i3, s2) {
    const r2 = t2 * this.strideInt, e3 = (t2 + i3) * this.strideInt;
    if (s2 === true)
      for (let h2 = t2; h2 !== t2 + i3; h2++)
        this.cpu[h2 * this.strideInt] = n$1;
    this.dirty.start = Math.min(this.dirty.start, r2), this.dirty.end = Math.max(this.dirty.end, e3), this.freeList.free(t2, i3);
  }
  upload(t2) {
    if (this.dirty.end) {
      if (t$k(this.gpu))
        return this.gpu = this._createBuffer(t2), this.dirty.start = 1 / 0, void (this.dirty.end = 0);
      this.gpu.setSubData(this.cpu, this.dirty.start, this.dirty.start, this.dirty.end), this.dirty.start = 1 / 0, this.dirty.end = 0;
    }
  }
  _createBuffer(t2) {
    const i3 = 35048;
    return this.bufferType === "index" ? s$l.createIndex(t2, i3, this.cpu) : s$l.createVertex(t2, i3, this.cpu);
  }
}
class u {
  constructor(e3, r2, t2, s2, i3) {
    this._vaoInvalidated = true;
    const o2 = t$n(r2), d2 = Math.max(o2.indicesPerRecord * o2.multiplier * t2, i3 + 1), u2 = Math.max(o2.verticesPerRecord * o2.multiplier * t2, s2 + 1), a2 = e3 / Uint32Array.BYTES_PER_ELEMENT, l2 = new d$3("index", d2, 1), h2 = { geometry: new d$3("vertex", u2, a2) };
    this.stride = e3, this.strideInt = a2, this.geometryType = r2, this._buffers = { index: l2, vertex: h2 };
  }
  static createPooled(r2, t2, i3, o2, n2, d2, f2) {
    const a2 = Math.max(tt, Math.round(1.5 * d2)), l2 = c$d(r2, () => new u(t2.stride, i3, a2, o2, n2));
    return l2._buffers.index.clear(), l2._buffers.vertex.geometry.clear(), l2._records = null, l2._displayList = null, l2._vaoInvalidated = true, l2._pool = f2, l2._released = false, l2;
  }
  release() {
    this.isReleased || (this._pool.release(this), this._released = true);
  }
  destroy() {
    this._buffers.index.destroy(), this._buffers.vertex.geometry.destroy(), A$2(this._vao, (e3) => e3.dispose(false));
  }
  get isReleased() {
    return this._released;
  }
  get indexBufferSize() {
    return this._buffers.index.bufferSize;
  }
  get vertexBufferSize() {
    return this._buffers.vertex.geometry.bufferSize;
  }
  get displayList() {
    return t$k(this._displayList) && (this._displayList = e$1.from(this, this._records.getCursor())), this._displayList;
  }
  draw(e3, r2, t2, s2, i3) {
    this.upload(e3);
    const o2 = this._getVAO(e3, r2, t2), n2 = Uint32Array.BYTES_PER_ELEMENT * s2;
    e3.bindVAO(o2), e3.drawElements(4, i3, 5125, n2), e3.bindVAO(null);
  }
  insert(e3) {
    if (e3.done)
      return;
    const { vertexData: r2, offset: t2 } = e3, { records: s2, indices: i3, vertices: o2 } = r2, n2 = this._getInsertionInfo(r$i.from(s2, t2)), { vertFrom: f2, vertCount: u2, indexFrom: a2, indexCount: l2, recordCount: h2, done: c2 } = n2;
    if (e3.done = c2, e3.offset = h2 + t2, h2 === 0)
      return;
    const { index: _2, vertex: m2 } = this._buffers, x = m2.geometry.insert(o2, f2, u2, 0), v2 = _2.insert(i3, a2, l2, x);
    this._addRecords(r$i.from(s2, t2, h2), v2, x);
  }
  free(e3) {
    const r2 = r$i.from(e3.records).getCursor();
    for (; r2.next(); )
      this._freeId(r2.id);
  }
  freeIds(e3) {
    for (const r2 of e3)
      this._freeId(r2);
  }
  upload(e3) {
    const { index: r2, vertex: t2 } = this._buffers;
    r2.upload(e3), t2.geometry.upload(e3);
  }
  has(e3) {
    if (!this._records)
      return false;
    const r2 = this._records.getCursor();
    for (; r2.next(); )
      if (r2.id === e3)
        return true;
    return false;
  }
  getViewOf(e3) {
    if (!this._records)
      return null;
    const r2 = this._records.getCursor();
    for (; r2.next(); )
      if (r2.id === e3)
        return r2;
    return null;
  }
  _getInsertionInfo(e3) {
    const r2 = e3.getCursor(), { index: t2, vertex: s2 } = this._buffers, i3 = t2.maxAvailableSpace(), o2 = s2.geometry.maxAvailableSpace();
    let n2 = 0, d2 = null, f2 = 0, u2 = null, a2 = 0, l2 = true;
    for (; r2.next(); ) {
      u2 === null && (u2 = r2.vertexFrom, d2 = r2.indexFrom);
      const e4 = a2 + r2.vertexCount, t3 = f2 + r2.indexCount;
      if (e4 >= o2 || t3 >= i3) {
        l2 = false;
        break;
      }
      n2 += 1, f2 = t3, a2 = e4;
    }
    return { done: l2, vertFrom: u2, vertCount: a2, indexFrom: d2, indexCount: f2, recordCount: n2 };
  }
  _addRecords(e3, r2, t2) {
    const s2 = e3.getCursor();
    for (; s2.next(); )
      s2.indexFrom += r2, s2.vertexFrom += t2;
    this._records ? (this._records.link(e3), this._displayList = null) : this._records = e3;
  }
  _freeId(e3) {
    const r2 = this._records.getCursor(), t2 = this._buffers.index, s2 = this._buffers.vertex.geometry;
    if (!r2.lookup(e3))
      return;
    const i3 = r2.indexFrom;
    let o2 = r2.indexCount;
    const n2 = r2.vertexFrom;
    let d2 = r2.vertexCount;
    for (; r2.next() && r2.id === e3; )
      o2 += r2.indexCount, d2 += r2.vertexCount;
    t2.free(i3, o2), s2.free(n2, d2, true), this._records.delete(e3);
  }
  _getVAO(e3, s2, o2) {
    if (this._vaoInvalidated) {
      const e4 = JSON.stringify(s2) + JSON.stringify(o2);
      e4 !== this._vaoHash && (A$2(this._vao, (e5) => {
        e5.dispose(false);
      }), this._vao = null, this._vaoHash = e4), this._vaoInvalidated = false;
    }
    if (t$k(this._vao)) {
      const { index: r2, vertex: n2 } = this._buffers;
      if (t$k(n2.geometry.gpu) || t$k(r2.gpu))
        throw new Error("bad news");
      this._vao = new s$k(e3, o2, s2, { geometry: n2.geometry.gpu }, r2.gpu);
    }
    return this._vao;
  }
}
class s$4 {
  constructor() {
    this._pools = new Map();
  }
  acquire(e3, r2, s2 = 0) {
    const i3 = r$i.from(e3.records, s2), c2 = i3.size();
    i3.next();
    const n2 = i3.vertexCount, u$12 = i3.indexCount, a2 = this._tryAcquire(e3.stride, r2, n2, u$12);
    return u.createPooled(a2, e3, r2, n2, u$12, c2, this);
  }
  release(e3) {
    e3.isReleased || e3.destroy();
  }
  destroy() {
    this._pools.forEach((r2) => {
      r$d(r2) && r2.clear((e3) => e3.destroy());
    });
  }
  _tryAcquire(o2, t2, s2, i3) {
    const c2 = o2 << 3 | t2, n2 = this._pools.get(c2);
    if (t$k(n2))
      return null;
    const u2 = n2.dequeue();
    return r$d(u2) && u2.vertexBufferSize >= s2 && u2.indexBufferSize >= i3 ? u2 : null;
  }
}
const r$1 = { shaders: { vertexShader: s$j("stencil/stencil.vert"), fragmentShader: s$j("stencil/stencil.frag") }, attributes: { a_pos: 0 } };
const E = 2e3;
class T$1 extends r$j {
  constructor(r2, n2) {
    super(), this._trash = new Set(), this._clipData = new Float32Array(8), this._upperLeft = n$m(), this._upperRight = n$m(), this._lowerLeft = n$m(), this._lowerRight = n$m(), this._mat2 = e$d(), this._clipRendererInitialized = false, this._supersampleScreenshots = true, this._pools = { bufferData: new s$4() }, this.renderRequested = false, this.stage = this, this._stationary = true;
    const { canvas: o$12 = document.createElement("canvas"), alpha: h2 = true, stencil: l2 = true, renderContext: d2 = "webgl", supersampleScreenshots: c2 = true, contextOptions: p$22 = {} } = n2;
    this._canvas = o$12;
    const _2 = e$e(o$12, { alpha: h2, antialias: false, depth: true, stencil: l2 }, d2);
    this.context = new l$c(_2, p$22), this.painter = new p$1(this.context, this), t$j("esri-2d-profiler") && (this._debugOutput = document.createElement("div"), this._debugOutput.setAttribute("style", "margin: 24px 64px; position: absolute; color: red;"), r2.appendChild(this._debugOutput)), this._renderParameters = { drawPhase: 0, state: this.state, pixelRatio: window.devicePixelRatio, stationary: false, globalOpacity: 1, blendMode: null, deltaTime: -1, time: 0, inFadeTransition: false, effects: null, context: this.context, painter: this.painter, timeline: n2.timeline || new e$f(), renderingOptions: n2.renderingOptions, requireFBO: false, driverTestResult: p(this.context), profiler: new o(this.context, this._debugOutput), dataUploadCounter: 0 }, this._taskHandle = v$4({ render: (e3) => this.renderFrame(e3) }), this._taskHandle.pause(), this._supersampleScreenshots = c2, this._lostWebGLContextHandle = r$k(o$12, "webglcontextlost", () => {
      this.emit("webgl-error", { error: new s$i("webgl-context-lost") });
    }), o$12.setAttribute("style", "width: 100%; height:100%; display:block;"), r2.appendChild(o$12);
  }
  destroy() {
    this.removeAllChildren(), this._emptyTrash(), this._taskHandle.remove(), this._taskHandle = null, this._boundFBO = null, this._clipFBO && (this._clipFBO.dispose(), this._clipFBO = null), this._clipVAO && (this._clipVAO.dispose(), this._clipVAO = null, this._clipVBO = null), this._clipStencilProgram && (this._clipStencilProgram.dispose(), this._clipStencilProgram = null), this._lostWebGLContextHandle && (this._lostWebGLContextHandle.remove(), this._lostWebGLContextHandle = null), this._canvas.parentNode && this._canvas.parentNode.removeChild(this._canvas), this._debugOutput && this._debugOutput.parentNode && this._debugOutput.parentNode.removeChild(this._debugOutput), this.highlightOptions = null, this._pools.bufferData.destroy(), this.painter.dispose(), this.context.dispose(), this._canvas = null;
  }
  get background() {
    return this._background;
  }
  set background(e3) {
    this._background = e3, this.requestRender();
  }
  get highlightOptions() {
    return this._highlightOptions;
  }
  set highlightOptions(e3) {
    this._highlightOptionsHandle && (this._highlightOptionsHandle.remove(), this._highlightOptionsHandle = null), this._highlightOptions = e3, this._highlightOptions && (this._highlightOptionsHandle = d$c(this._highlightOptions, "version", () => {
      this.painter.setHighlightOptions(e3), this.requestRender();
    }));
  }
  get pools() {
    return this._pools;
  }
  get renderingOptions() {
    return this._renderingOptions;
  }
  set renderingOptions(e3) {
    this._renderingOptions = e3, this.requestRender();
  }
  get state() {
    return this._state;
  }
  set state(e3) {
    this._state = e3, this.requestRender();
  }
  get stationary() {
    return this._stationary;
  }
  set stationary(e3) {
    this._stationary !== e3 && (this._stationary = e3, this.requestRender());
  }
  trashDisplayObject(e3) {
    this._trash.add(e3), this.requestRender();
  }
  untrashDisplayObject(e3) {
    return this._trash.delete(e3);
  }
  requestRender() {
    this._lastRenderRequestTime = performance.now(), this.renderRequested || (this.renderRequested = true, this.emit("will-render"), this._taskHandle.resume());
  }
  renderFrame(e3) {
    e3.time - this._lastRenderRequestTime >= E && this._taskHandle.pause(), this.renderRequested = false, this._renderParameters.state = this._state, this._renderParameters.stationary = this.stationary, this._renderParameters.pixelRatio = window.devicePixelRatio, this._renderParameters.globalOpacity = 1, this._renderParameters.time = e3.time, this._renderParameters.deltaTime = e3.deltaTime, this._renderParameters.effects = null, this.processRender(this._renderParameters), this._emptyTrash(), this.emit("post-render");
  }
  renderChildren(e3) {
    for (const t2 of this.children)
      t2.beforeRender(e3);
    this._renderChildren(this.children, e3);
    for (const t2 of this.children)
      t2.afterRender(e3);
  }
  _renderChildren(t2, i3) {
    const s2 = this.context;
    i3.profiler.recordStart("drawLayers"), i3.dataUploadCounter = 0, this._beforeRenderChildren(i3), i3.drawPhase = I.MAP, this.painter.beforeRenderLayers(s2, this.background);
    for (const e3 of t2)
      e3.processRender(i3);
    this.painter.renderLayers(s2), i3.drawPhase = I.HIGHLIGHT, this.painter.beforeRenderLayers(s2);
    for (const e3 of t2)
      e3.processRender(i3);
    this.painter.renderLayers(s2);
    if (this._isLabelDrawPhaseRequired(t2)) {
      i3.drawPhase = I.LABEL, this.painter.beforeRenderLayers(s2);
      for (const e3 of t2)
        e3.processRender(i3);
      this.painter.renderLayers(s2);
    }
    if (t$j("esri-tiles-debug")) {
      i3.drawPhase = I.DEBUG, this.painter.beforeRenderLayers(s2);
      for (const e3 of t2)
        e3.processRender(i3);
      this.painter.renderLayers(s2);
    }
    i3.profiler.recordEnd("drawLayers"), this._afterRenderChildren();
  }
  _beforeRenderChildren(e3) {
    const { context: t2 } = this, { state: i3, pixelRatio: s2 } = e3;
    t2.enforceState();
    const { size: n2, rotation: a2 } = i3, o2 = Math.round(n2[0] * s2), h2 = Math.round(n2[1] * s2);
    this._boundFBO = t2.getBoundFramebufferObject();
    if (!(i3.spatialReference && (i3.spatialReference._isWrappable ? i3.spatialReference._isWrappable() : i3.spatialReference.isWrappable)))
      return void (this._clipFrame = false);
    const l2 = r$l(a2), d2 = Math.abs(Math.cos(l2)), u2 = Math.abs(Math.sin(l2)), g2 = Math.round(o2 * d2 + h2 * u2), b2 = Math.round(i3.worldScreenWidth);
    if (g2 <= b2)
      return void (this._clipFrame = false);
    this._clipFBO && this._clipFBO.width === o2 && this._clipFBO.height === h2 || (this._clipFBO = new r$h(t2, { colorTarget: 0, depthStencilTarget: 3, width: o2, height: h2 }));
    const w2 = (this.state.padding.left - this.state.padding.right) / 2, O2 = (this.state.padding.bottom - this.state.padding.top) / 2, x = 0.5 * o2, y2 = 0.5 * h2, C2 = 1 / o2, F2 = 1 / h2, v2 = b2 * s2 * 0.5, P2 = 0.5 * (o2 * u2 + h2 * d2), j2 = this._upperLeft, B2 = this._upperRight, S = this._lowerLeft, E2 = this._lowerRight;
    r$f(j2, -v2, -P2), r$f(B2, v2, -P2), r$f(S, -v2, P2), r$f(E2, v2, P2), n$n(this._mat2), i$c(this._mat2, this._mat2, [x + w2, y2 + O2]), a2 !== 0 && c$e(this._mat2, this._mat2, l2), D$1(j2, j2, this._mat2), D$1(B2, B2, this._mat2), D$1(S, S, this._mat2), D$1(E2, E2, this._mat2);
    const T2 = this._clipData;
    T2.set([2 * S[0] * C2 - 1, 2 * (h2 - S[1]) * F2 - 1, 2 * E2[0] * C2 - 1, 2 * (h2 - E2[1]) * F2 - 1, 2 * j2[0] * C2 - 1, 2 * (h2 - j2[1]) * F2 - 1, 2 * B2[0] * C2 - 1, 2 * (h2 - B2[1]) * F2 - 1]), this._clipRendererInitialized || this._initializeClipRenderer(t2), this._clipVBO.setData(T2), this._boundFBO = t2.getBoundFramebufferObject(), t2.bindFramebuffer(this._clipFBO), t2.setDepthWriteEnabled(true), t2.setStencilWriteMask(255), t2.setClearColor(0, 0, 0, 0), t2.setClearDepth(1), t2.setClearStencil(0), t2.clear(t2.gl.COLOR_BUFFER_BIT | t2.gl.DEPTH_BUFFER_BIT | t2.gl.STENCIL_BUFFER_BIT), t2.setDepthWriteEnabled(false), this._clipFrame = true;
  }
  _afterRenderChildren() {
    const e3 = this.context;
    if (e3.logIno(), this._clipFrame && this._clipRendererInitialized) {
      if (e3.bindFramebuffer(this._boundFBO), this._boundFBO = null, e3.bindVAO(this._clipVAO), e3.bindProgram(this._clipStencilProgram), e3.setDepthWriteEnabled(false), e3.setDepthTestEnabled(false), e3.setStencilTestEnabled(true), e3.setBlendingEnabled(false), e3.setColorMask(false, false, false, false), e3.setStencilOp(7680, 7680, 7681), e3.setStencilWriteMask(255), e3.setStencilFunction(519, 1, 255), e3.drawElements(4, 6, 5123, 0), e3.bindVAO(), e3.setColorMask(true, true, true, true), this.background != null) {
        const { r: t2, g: i3, b: s2, a: r2 } = this.background.color;
        e3.setClearColor(r2 * t2 / 255, r2 * i3 / 255, r2 * s2 / 255, r2);
      } else
        e3.setClearColor(0, 0, 0, 0);
      e3.clear(e3.gl.COLOR_BUFFER_BIT), e3.setBlendingEnabled(true), e3.setStencilFunction(514, 1, 255), this.painter.blitTexture(e3, this._clipFBO.colorTexture, 9728, 1), e3.setStencilTestEnabled(false);
    }
  }
  doRender(e3) {
    const t2 = this.context, { state: i3, pixelRatio: s2 } = e3;
    this._resizeCanvas(e3), this.context.enforceState(), t2.setViewport(0, 0, s2 * i3.size[0], s2 * i3.size[1]), t2.setDepthWriteEnabled(true), t2.setStencilWriteMask(255), super.doRender(e3);
  }
  takeScreenshot(e3, t2) {
    return __async(this, null, function* () {
      const i3 = f$6(e3, this._supersampleScreenshots, this._state.padding), { framebufferWidth: s2, framebufferHeight: r2 } = i3, n2 = this.context, a2 = e3.layers;
      let l2 = this.children;
      const d2 = __spreadProps(__spreadValues({}, this._renderParameters), { drawPhase: null, globalOpacity: 1, stationary: true, state: this._renderParameters.state.clone(), pixelRatio: i3.pixelRatio, time: Date.now(), deltaTime: 0, blendMode: null, effects: null, inFadeTransition: false });
      if (e3.rotation != null) {
        const t3 = d2.state.viewpoint;
        t3.rotation = e3.rotation, d2.state.viewpoint = t3;
      }
      a2.length > 0 && (l2 = [], a2.forEach((e4) => {
        const i4 = t2.find((t3) => t3.layer.id === e4.id);
        i4 && "container" in i4 && i4.container && l2.push(i4.container);
      }));
      const c2 = new r$h(n2, { colorTarget: 0, depthStencilTarget: 3, width: s2, height: r2 }), p2 = n2.getBoundFramebufferObject(), u2 = n2.getViewport();
      n2.bindFramebuffer(c2), n2.setViewport(0, 0, s2, r2), this._renderChildren(l2, d2);
      const _2 = this._readbackScreenshot(i3);
      n2.bindFramebuffer(p2), n2.setViewport(u2.x, u2.y, u2.width, u2.height), this.requestRender();
      const m2 = this._ensureScreenshotEncodeCanvas();
      return a$j(_2, e3, m2, { flipY: true, premultipliedAlpha: true });
    });
  }
  _ensureScreenshotEncodeCanvas() {
    return this._screenshotEncodeCanvas || (this._screenshotEncodeCanvas = document.createElement("canvas")), this._screenshotEncodeCanvas;
  }
  _readbackScreenshot(e3) {
    const { framebufferWidth: t2, framebufferHeight: i3, region: s2, resample: r2 } = e3, n2 = this.context.gl;
    if (r2) {
      const e4 = l$d(t2, i3, this._ensureScreenshotEncodeCanvas());
      n2.readPixels(0, 0, t2, i3, 6408, 5121, new Uint8Array(e4.data.buffer));
      const a2 = l$d(s2.width, s2.height, this._ensureScreenshotEncodeCanvas());
      return d$d(e4, a2, true, r2.region.x, i3 - (r2.region.y + r2.region.height), r2.region.width, r2.region.height);
    }
    {
      const e4 = l$d(s2.width, s2.height, this._ensureScreenshotEncodeCanvas());
      return n2.readPixels(s2.x, i3 - (s2.y + s2.height), s2.width, s2.height, 6408, 5121, new Uint8Array(e4.data.buffer)), e4;
    }
  }
  _resizeCanvas(e3) {
    const t2 = this._canvas, i3 = t2.style, { state: { size: s2 }, pixelRatio: r2 } = e3, n2 = s2[0], a2 = s2[1], o2 = Math.round(n2 * r2), h2 = Math.round(a2 * r2);
    t2.width === o2 && t2.height === h2 || (t2.width = o2, t2.height = h2), i3.width = n2 + "px", i3.height = a2 + "px";
  }
  _initializeClipRenderer(e3) {
    if (this._clipRendererInitialized)
      return true;
    const t2 = r$1.attributes, i3 = t$g(e3, r$1);
    if (!i3)
      return false;
    const s2 = s$l.createVertex(e3, 35040, 32), r2 = new Uint16Array([0, 1, 2, 2, 1, 3]), n2 = s$l.createIndex(e3, 35044, r2), a2 = new s$k(e3, t2, { geometry: [{ name: "a_pos", count: 2, type: 5126, offset: 0, stride: 8, normalized: false, divisor: 0 }] }, { geometry: s2 }, n2);
    return this._clipStencilProgram = i3, this._clipVBO = s2, this._clipVAO = a2, this._clipRendererInitialized = true, true;
  }
  _emptyTrash() {
    for (; this._trash.size > 0; ) {
      const e3 = Array.from(this._trash);
      this._trash.clear();
      for (const t2 of e3)
        t2.processDetach();
    }
  }
  _isLabelDrawPhaseRequired(e3) {
    let t2 = false;
    for (const i3 of e3) {
      if (!(i3 instanceof r$j)) {
        t2 = t2 || false;
        break;
      }
      if (i3.hasLabels)
        return true;
      t2 = t2 || this._isLabelDrawPhaseRequired(i3.children);
    }
    return t2;
  }
}
const s$3 = { container: "esri-zoom-box__container", overlay: "esri-zoom-box__overlay", background: "esri-zoom-box__overlay-background", box: "esri-zoom-box__outline" }, a$1 = { zoom: "Shift", counter: "Ctrl" };
let n = class extends u$6 {
  constructor(t2) {
    super(t2), this._container = null, this._overlay = null, this._backgroundShape = null, this._boxShape = null, this._box = { x: 0, y: 0, width: 0, height: 0 }, this._redraw = this._redraw.bind(this);
  }
  destroy() {
    this.view = null;
  }
  set view(t2) {
    this._handles && this._handles.forEach((t3) => {
      t3.remove();
    }), this._handles = null, this._destroyOverlay(), this._set("view", t2), t2 && (t2.on("drag", [a$1.zoom], (t3) => this._handleDrag(t3, 1)), t2.on("drag", [a$1.zoom, a$1.counter], (t3) => this._handleDrag(t3, -1)));
  }
  _start() {
    this._createContainer(), this._createOverlay(), this.navigation.begin();
  }
  _update(t2, e3, r2, o2) {
    this._box.x = t2, this._box.y = e3, this._box.width = r2, this._box.height = o2, this._rafId || (this._rafId = requestAnimationFrame(this._redraw));
  }
  _end(t2, e3, r2, o2, s2) {
    const a2 = this.view, n2 = a2.toMap(c$f(t2 + 0.5 * r2, e3 + 0.5 * o2));
    let h2 = Math.max(r2 / a2.width, o2 / a2.height);
    s2 === -1 && (h2 = 1 / h2), this._destroyOverlay(), this.navigation.end(), a2.goTo({ center: n2, scale: a2.scale * h2 });
  }
  _updateBox(t2, e3, r2, o2) {
    const i3 = this._boxShape;
    i3.setAttributeNS(null, "x", "" + t2), i3.setAttributeNS(null, "y", "" + e3), i3.setAttributeNS(null, "width", "" + r2), i3.setAttributeNS(null, "height", "" + o2), i3.setAttributeNS(null, "class", s$3.box);
  }
  _updateBackground(t2, e3, r2, o2) {
    this._backgroundShape.setAttributeNS(null, "d", this._toSVGPath(t2, e3, r2, o2, this.view.width, this.view.height));
  }
  _createContainer() {
    const t2 = document.createElement("div");
    t2.className = s$3.container, this.view.root.appendChild(t2), this._container = t2;
  }
  _createOverlay() {
    const t2 = this.view.width, e3 = this.view.height, r2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    r2.setAttributeNS(null, "d", "M 0 0 L " + t2 + " 0 L " + t2 + " " + e3 + " L 0 " + e3 + " Z"), r2.setAttributeNS(null, "class", s$3.background);
    const o2 = document.createElementNS("http://www.w3.org/2000/svg", "rect"), i3 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    i3.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"), i3.setAttributeNS(null, "class", s$3.overlay), i3.appendChild(r2), i3.appendChild(o2), this._container.appendChild(i3), this._backgroundShape = r2, this._boxShape = o2, this._overlay = i3;
  }
  _destroyOverlay() {
    this._container && this._container.parentNode && this._container.parentNode.removeChild(this._container), this._container = this._backgroundShape = this._boxShape = this._overlay = null;
  }
  _toSVGPath(t2, e3, r2, o2, i3, s2) {
    const a2 = t2 + r2, n2 = e3 + o2;
    return "M 0 0 L " + i3 + " 0 L " + i3 + " " + s2 + " L 0 " + s2 + " ZM " + t2 + " " + e3 + " L " + t2 + " " + n2 + " L " + a2 + " " + n2 + " L " + a2 + " " + e3 + " Z";
  }
  _handleDrag(t2, e3) {
    const r2 = t2.x, o2 = t2.y, i3 = t2.origin.x, s2 = t2.origin.y;
    let a2, n2, h2, l2;
    switch (r2 > i3 ? (a2 = i3, h2 = r2 - i3) : (a2 = r2, h2 = i3 - r2), o2 > s2 ? (n2 = s2, l2 = o2 - s2) : (n2 = o2, l2 = s2 - o2), t2.action) {
      case "start":
        this._start();
        break;
      case "update":
        this._update(a2, n2, h2, l2);
        break;
      case "end":
        this._end(a2, n2, h2, l2, e3);
    }
    t2.stopPropagation();
  }
  _redraw() {
    if (!this._rafId)
      return;
    if (this._rafId = null, !this._overlay)
      return;
    const { x: t2, y: e3, width: r2, height: o2 } = this._box;
    this._updateBox(t2, e3, r2, o2), this._updateBackground(t2, e3, r2, o2), this._rafId = requestAnimationFrame(this._redraw);
  }
};
e$a([y$1()], n.prototype, "navigation", void 0), e$a([y$1()], n.prototype, "view", null), n = e$a([i$b("esri.views.2d.navigation.ZoomBox")], n);
var h$2 = n;
class t$2 {
  constructor(t2) {
    this.gain = t2;
  }
  update(t2) {
    if (this.hasLastValue) {
      const e3 = this.computeDelta(t2);
      this.updateDelta(e3);
    }
    this.lastValue = t2;
  }
  reset() {
    this.lastValue = void 0, this.filteredDelta = void 0;
  }
  get hasLastValue() {
    return this.lastValue !== void 0;
  }
  get hasFilteredDelta() {
    return this.filteredDelta !== void 0;
  }
  computeDelta(t2) {
    return t2 - this.lastValue;
  }
  updateDelta(t2) {
    this.hasFilteredDelta ? this.filteredDelta = (1 - this.gain) * this.filteredDelta + this.gain * t2 : this.filteredDelta = t2;
  }
}
class t$1 {
  constructor(t2, i3, o2) {
    this._initialVelocity = t2, this._stopVelocity = i3, this._friction = o2, this._duration = Math.abs(Math.log(Math.abs(this._initialVelocity) / this._stopVelocity) / Math.log(1 - this._friction));
  }
  get duration() {
    return this._duration;
  }
  isFinished(t2) {
    return t2 > this.duration;
  }
  get friction() {
    return this._friction;
  }
  value(t2) {
    return this.valueFromInitialVelocity(this._initialVelocity, t2);
  }
  valueDelta(t2, i3) {
    const o2 = this.value(t2);
    return this.value(t2 + i3) - o2;
  }
  valueFromInitialVelocity(t2, i3) {
    i3 = Math.min(i3, this.duration);
    const o2 = 1 - this.friction;
    return t2 * (__pow(o2, i3) - 1) / Math.log(o2);
  }
}
class c$1 extends t$1 {
  constructor(e3, t2, i3, s2, n2) {
    super(e3, t2, i3), this.sceneVelocity = s2, this.direction = n2;
  }
  value(e3) {
    return super.valueFromInitialVelocity(this.sceneVelocity, e3);
  }
}
class h$1 {
  constructor(t2 = 300, i3 = 12, s2 = 0.84) {
    this.minimumInitialVelocity = t2, this.stopVelocity = i3, this.friction = s2, this.enabled = true, this.time = new t$2(0.6), this.screen = [new t$2(0.4), new t$2(0.4)], this.scene = [new t$2(0.6), new t$2(0.6), new t$2(0.6)], this.tmpDirection = n$o();
  }
  add(e3, t2, i3) {
    if (this.enabled) {
      if (this.time.hasLastValue) {
        if (this.time.computeDelta(i3) < 0.015)
          return;
      }
      this.screen[0].update(e3[0]), this.screen[1].update(e3[1]), this.scene[0].update(t2[0]), this.scene[1].update(t2[1]), this.scene[2].update(t2[2]), this.time.update(i3);
    }
  }
  reset() {
    this.screen[0].reset(), this.screen[1].reset(), this.scene[0].reset(), this.scene[1].reset(), this.scene[2].reset(), this.time.reset();
  }
  evaluateMomentum() {
    if (!this.enabled || !this.screen[0].hasFilteredDelta)
      return null;
    const e3 = this.screen[0].filteredDelta, t2 = this.screen[1].filteredDelta, i3 = Math.sqrt(e3 * e3 + t2 * t2) / this.time.filteredDelta;
    return Math.abs(i3) < this.minimumInitialVelocity ? null : this.createMomentum(i3, this.stopVelocity, this.friction);
  }
  createMomentum(e3, n2, r2) {
    o$f(this.tmpDirection, this.scene[0].filteredDelta, this.scene[1].filteredDelta, this.scene[2].filteredDelta);
    const h2 = s$o(this.tmpDirection);
    h2 > 0 && d$e(this.tmpDirection, this.tmpDirection, 1 / h2);
    const a2 = h2 / this.time.filteredDelta;
    return new c$1(e3, n2, r2, a2, this.tmpDirection);
  }
}
let c = class extends u$6 {
  constructor(t2) {
    super(t2), this.animationTime = 0, this.momentumEstimator = new h$1(500, 6, 0.92), this.momentum = null, this.tmpMomentum = n$o(), this.momentumFinished = false, this.viewpoint = new u$8({ targetGeometry: new j$3(), scale: 0, rotation: 0 }), this.watch("momentumFinished", (t3) => {
      t3 && this.navigation.stop();
    });
  }
  begin(t2, i3) {
    this.navigation.begin(), this.momentumEstimator.reset(), this.addToEstimator(i3), this.previousDrag = i3;
  }
  update(t2, i3) {
    this.addToEstimator(i3);
    let o2 = i3.center.x, s2 = i3.center.y;
    const e3 = this.previousDrag;
    o2 = e3 ? e3.center.x - o2 : -o2, s2 = e3 ? s2 - e3.center.y : s2, t2.viewpoint = Ft(this.viewpoint, t2.viewpoint, [o2 || 0, s2 || 0]), this.previousDrag = i3;
  }
  end(t2, i3) {
    this.addToEstimator(i3);
    const o2 = t2.navigation.momentumEnabled;
    this.momentum = o2 ? this.momentumEstimator.evaluateMomentum() : null, this.animationTime = 0, this.momentum && this.onAnimationUpdate(t2), this.previousDrag = null, this.navigation.end();
  }
  addToEstimator(t2) {
    const i3 = t2.center.x, o2 = t2.center.y, s2 = i$d(-i3, o2), e3 = t$o(-i3, o2, 0);
    this.momentumEstimator.add(s2, e3, 1e-3 * t2.timestamp);
  }
  onAnimationUpdate(t2) {
    this.navigation.animationManager.animateContinous(t2.viewpoint, (i3, o2) => {
      this.momentumFinished = !this.momentum || this.momentum.isFinished(this.animationTime);
      const s2 = 1e-3 * o2;
      if (!this.momentumFinished) {
        const o3 = this.momentum.valueDelta(this.animationTime, s2);
        d$e(this.tmpMomentum, this.momentum.direction, o3), Ft(i3, i3, this.tmpMomentum), t2.constraints.constrainByGeometry(i3);
      }
      this.animationTime += s2;
    });
  }
  stopMomentumNavigation() {
    this.momentum && (this.momentumEstimator.reset(), this.momentum = null, this.navigation.stop());
  }
};
e$a([y$1()], c.prototype, "momentumFinished", void 0), e$a([y$1()], c.prototype, "viewpoint", void 0), e$a([y$1()], c.prototype, "navigation", void 0), c = e$a([i$b("esri.views.2d.navigation.actions.Pan")], c);
var d$2 = c;
class s$2 {
  constructor(t2 = 2.5, i3 = 0.01, s2 = 0.95, l2 = 12) {
    this.minimumInitialVelocity = t2, this.stopVelocity = i3, this.friction = s2, this.maxVelocity = l2, this.enabled = true, this.value = new t$2(0.8), this.time = new t$2(0.3);
  }
  add(t2, e3) {
    if (this.enabled) {
      if (this.time.hasLastValue) {
        if (this.time.computeDelta(e3) < 0.01)
          return;
        if (this.value.hasFilteredDelta) {
          const e4 = this.value.computeDelta(t2);
          this.value.filteredDelta * e4 < 0 && this.value.reset();
        }
      }
      this.time.update(e3), this.value.update(t2);
    }
  }
  reset() {
    this.value.reset(), this.time.reset();
  }
  evaluateMomentum() {
    if (!this.enabled || !this.value.hasFilteredDelta)
      return null;
    let e3 = this.value.filteredDelta / this.time.filteredDelta;
    return e3 = e$8(e3, -this.maxVelocity, this.maxVelocity), Math.abs(e3) < this.minimumInitialVelocity ? null : this.createMomentum(e3, this.stopVelocity, this.friction);
  }
  createMomentum(t2, e3, s2) {
    return new t$1(t2, e3, s2);
  }
}
class a extends s$2 {
  constructor(t2 = 3, a2 = 0.01, s2 = 0.95, e3 = 12) {
    super(t2, a2, s2, e3);
  }
  add(t2, a2) {
    if (this.value.hasLastValue) {
      const a3 = this.value.lastValue;
      let s2 = t2 - a3;
      for (; s2 > Math.PI; )
        s2 -= 2 * Math.PI;
      for (; s2 < -Math.PI; )
        s2 += 2 * Math.PI;
      t2 = a3 + s2;
    }
    super.add(t2, a2);
  }
}
class r extends t$1 {
  constructor(e3, t2, r2) {
    super(e3, t2, r2);
  }
  value(e3) {
    const t2 = super.value(e3);
    return Math.exp(t2);
  }
  valueDelta(e3, t2) {
    const r2 = super.value(e3), s2 = super.value(e3 + t2) - r2;
    return Math.exp(s2);
  }
}
class s$1 extends s$2 {
  constructor(e3 = 2.5, t2 = 0.01, r2 = 0.95, s2 = 12) {
    super(e3, t2, r2, s2);
  }
  add(e3, t2) {
    super.add(Math.log(e3), t2);
  }
  createMomentum(e3, t2, s2) {
    return new r(e3, t2, s2);
  }
}
let l$1 = class extends u$6 {
  constructor(t2) {
    super(t2), this._animationTime = 0, this._momentumFinished = false, this._rotationMomentumEstimator = new a(0.6, 0.15, 0.95), this._rotationDirection = 1, this._zoomDirection = 1, this._zoomMomentumEstimator = new s$1(), this._zoomOnly = null, this.zoomMomentum = null, this.rotateMomentum = null, this.viewpoint = new u$8({ targetGeometry: new j$3(), scale: 0, rotation: 0 }), this.watch("_momentumFinished", (t3) => {
      t3 && this.navigation.stop();
    });
  }
  begin(t2, o2) {
    this.navigation.begin(), this._rotationMomentumEstimator.reset(), this._zoomMomentumEstimator.reset(), this._zoomOnly = null, this._previousAngle = this._startAngle = o2.angle, this._previousRadius = this._startRadius = o2.radius, this._previousCenter = o2.center, this._updateTimestamp = null, t2.constraints.rotationEnabled && this.addToRotateEstimator(0, o2.timestamp), this.addToZoomEstimator(o2, 1);
  }
  update(t2, o2) {
    this._updateTimestamp === null && (this._updateTimestamp = o2.timestamp);
    const i3 = o2.angle, s2 = o2.radius, e3 = o2.center, n2 = Math.abs(180 * (i3 - this._startAngle) / Math.PI), m2 = Math.abs(s2 - this._startRadius), a2 = this._startRadius / s2;
    if (this._previousRadius) {
      const r2 = s2 / this._previousRadius;
      let h2 = 180 * (i3 - this._previousAngle) / Math.PI;
      this._rotationDirection = h2 >= 0 ? 1 : -1, this._zoomDirection = r2 >= 1 ? 1 : -1, t2.constraints.rotationEnabled ? (this._zoomOnly === null && o2.timestamp - this._updateTimestamp > 200 && (this._zoomOnly = m2 - n2 > 0), this._zoomOnly === null || this._zoomOnly ? h2 = 0 : this.addToRotateEstimator(i3 - this._startAngle, o2.timestamp)) : h2 = 0, this.addToZoomEstimator(o2, a2), this.navigation.setViewpoint([e3.x, e3.y], 1 / r2, h2, [this._previousCenter.x - e3.x, e3.y - this._previousCenter.y]);
    }
    this._previousAngle = i3, this._previousRadius = s2, this._previousCenter = e3;
  }
  end(t2) {
    this.rotateMomentum = this._rotationMomentumEstimator.evaluateMomentum(), this.zoomMomentum = this._zoomMomentumEstimator.evaluateMomentum(), this._animationTime = 0, (this.rotateMomentum || this.zoomMomentum) && this.onAnimationUpdate(t2), this.navigation.end();
  }
  addToRotateEstimator(t2, o2) {
    this._rotationMomentumEstimator.add(t2, 1e-3 * o2);
  }
  addToZoomEstimator(t2, o2) {
    this._zoomMomentumEstimator.add(o2, 1e-3 * t2.timestamp);
  }
  canZoomIn(t2) {
    const o2 = t2.scale, i3 = t2.constraints.effectiveMaxScale;
    return i3 === 0 || o2 > i3;
  }
  canZoomOut(t2) {
    const o2 = t2.scale, i3 = t2.constraints.effectiveMinScale;
    return i3 === 0 || o2 < i3;
  }
  onAnimationUpdate(t2) {
    this.navigation.animationManager.animateContinous(t2.viewpoint, (o2, i3) => {
      const s2 = !this.canZoomIn(t2) && this._zoomDirection > 1 || !this.canZoomOut(t2) && this._zoomDirection < 1, e3 = !this.rotateMomentum || this.rotateMomentum.isFinished(this._animationTime), n2 = s2 || !this.zoomMomentum || this.zoomMomentum.isFinished(this._animationTime), p2 = 1e-3 * i3;
      if (this._momentumFinished = e3 && n2, !this._momentumFinished) {
        const i4 = this.rotateMomentum ? Math.abs(this.rotateMomentum.valueDelta(this._animationTime, p2)) * this._rotationDirection * 180 / Math.PI : 0;
        let s3 = this.zoomMomentum ? Math.abs(this.zoomMomentum.valueDelta(this._animationTime, p2)) : 1;
        const e4 = n$m(), n3 = n$m();
        if (this._previousCenter) {
          r$f(e4, this._previousCenter.x, this._previousCenter.y), rt(n3, t2.size, t2.padding), s$p(e4, e4, n3);
          const { constraints: m2, scale: p3 } = t2, c2 = p3 * s3;
          s3 < 1 && !m2.canZoomInTo(c2) ? (s3 = p3 / m2.effectiveMaxScale, this.zoomMomentum = null, this.rotateMomentum = null) : s3 > 1 && !m2.canZoomOutTo(c2) && (s3 = p3 / m2.effectiveMinScale, this.zoomMomentum = null, this.rotateMomentum = null), St(o2, t2.viewpoint, s3, i4, e4, t2.size), t2.constraints.constrainByGeometry(o2);
        }
      }
      this._animationTime += p2;
    });
  }
  stopMomentumNavigation() {
    (this.rotateMomentum || this.zoomMomentum) && (this.rotateMomentum && (this._rotationMomentumEstimator.reset(), this.rotateMomentum = null), this.zoomMomentum && (this._zoomMomentumEstimator.reset(), this.zoomMomentum = null), this.navigation.stop());
  }
};
e$a([y$1()], l$1.prototype, "_momentumFinished", void 0), e$a([y$1()], l$1.prototype, "viewpoint", void 0), e$a([y$1()], l$1.prototype, "navigation", void 0), l$1 = e$a([i$b("esri.views.2d.navigation.actions.Pinch")], l$1);
var _$1 = l$1;
const v$1 = n$m(), d$1 = n$m();
let j = class extends u$6 {
  constructor(e3) {
    super(e3), this._previousCenter = n$m(), this.viewpoint = new u$8({ targetGeometry: new j$3(), scale: 0, rotation: 0 });
  }
  begin(e3, t2) {
    this.navigation.begin(), r$f(this._previousCenter, t2.center.x, t2.center.y);
  }
  update(e3, t2) {
    const { state: { size: o2, padding: r2 } } = e3;
    r$f(v$1, t2.center.x, t2.center.y), $$1(d$1, o2, r2), e3.viewpoint = Mt(this.viewpoint, e3.state.paddedViewState.viewpoint, xt(d$1, this._previousCenter, v$1)), a$k(this._previousCenter, v$1);
  }
  end() {
    this.navigation.end();
  }
};
e$a([y$1()], j.prototype, "viewpoint", void 0), e$a([y$1()], j.prototype, "navigation", void 0), j = e$a([i$b("esri.views.2d.actions.Rotate")], j);
var h = j;
const l = 10, v = 1, w = new u$8({ targetGeometry: new j$3() }), g = [0, 0], d = 250;
let _ = class extends u$6 {
  constructor(t2) {
    super(t2), this._endTimer = null, this.animationManager = null;
  }
  initialize() {
    this.pan = new d$2({ navigation: this }), this.rotate = new h({ navigation: this }), this.pinch = new _$1({ navigation: this }), this.zoomBox = new h$2({ view: this.view, navigation: this });
  }
  destroy() {
    this.zoomBox.destroy(), this.zoomBox = null, this.animationManager = null;
  }
  begin() {
    this._set("interacting", true);
  }
  end() {
    this._lastEventTimestamp = performance.now(), this._startTimer(d);
  }
  zoom(_0) {
    return __async(this, arguments, function* (t2, i3 = this._getDefaultAnchor()) {
      if (this.stop(), this.begin(), this.view.constraints.snapToZoom && this.view.constraints.effectiveLODs)
        return t2 < 1 ? this.zoomIn(i3) : this.zoomOut(i3);
      this.setViewpoint(i3, t2, 0, [0, 0]);
    });
  }
  zoomIn(t2) {
    return __async(this, null, function* () {
      const i3 = this.view, o2 = i3.constraints.snapToNextScale(i3.scale);
      return this._zoomToScale(o2, t2);
    });
  }
  zoomOut(t2) {
    return __async(this, null, function* () {
      const i3 = this.view, o2 = i3.constraints.snapToPreviousScale(i3.scale);
      return this._zoomToScale(o2, t2);
    });
  }
  setViewpoint(t2, i3, o2, n2) {
    this.begin(), this.view.state.viewpoint = this._scaleRotateTranslateViewpoint(this.view.viewpoint, t2, i3, o2, n2), this.end();
  }
  setViewpointImmediate(t2, i3 = 0, o2 = [0, 0], n2 = this._getDefaultAnchor()) {
    this.view.state.viewpoint = this._scaleRotateTranslateViewpoint(this.view.viewpoint, n2, t2, i3, o2);
  }
  continousRotateClockwise() {
    const t2 = this.get("view.viewpoint");
    this.animationManager.animateContinous(t2, (t3) => {
      Mt(t3, t3, -v);
    });
  }
  continousRotateCounterclockwise() {
    const t2 = this.get("view.viewpoint");
    this.animationManager.animateContinous(t2, (t3) => {
      Mt(t3, t3, v);
    });
  }
  resetRotation() {
    this.view.rotation = 0;
  }
  continousPanLeft() {
    this._continuousPan([-l, 0]);
  }
  continousPanRight() {
    this._continuousPan([l, 0]);
  }
  continousPanUp() {
    this._continuousPan([0, l]);
  }
  continousPanDown() {
    this._continuousPan([0, -l]);
  }
  stop() {
    this.pan.stopMomentumNavigation(), this.animationManager.stop(), this.end(), this._endTimer !== null && (clearTimeout(this._endTimer), this._endTimer = null, this._set("interacting", false));
  }
  _continuousPan(t2) {
    const i3 = this.get("view.viewpoint");
    this.animationManager.animateContinous(i3, (i4) => {
      Ft(i4, i4, t2), this.view.constraints.constrainByGeometry(i4);
    });
  }
  _startTimer(t2) {
    return this._endTimer !== null || (this._endTimer = setTimeout(() => {
      this._endTimer = null;
      const t3 = performance.now() - this._lastEventTimestamp;
      t3 < d ? this._endTimer = this._startTimer(t3) : this._set("interacting", false);
    }, t2)), this._endTimer;
  }
  _getDefaultAnchor() {
    const { size: t2, padding: { left: i3, right: o2, top: n2, bottom: e3 } } = this.view;
    return g[0] = 0.5 * (t2[0] - o2 + i3), g[1] = 0.5 * (t2[1] - e3 + n2), g;
  }
  _zoomToScale(_0) {
    return __async(this, arguments, function* (t2, i3 = this._getDefaultAnchor()) {
      const { view: o2 } = this, { constraints: n2, scale: e3, viewpoint: s2, size: a2, padding: r2 } = o2, m2 = n2.canZoomInTo(t2), p2 = n2.canZoomOutTo(t2);
      if (!(t2 < e3 && !m2 || t2 > e3 && !p2))
        return vt(w, s2, t2 / e3, 0, i3, a2, r2), n2.constrainByGeometry(w), o2.goTo(w, { animate: true });
    });
  }
  _scaleRotateTranslateViewpoint(t2, i3, o2, n2, e3) {
    const { view: s2 } = this, { size: a2, padding: m2, constraints: p2, scale: h2, viewpoint: u2 } = s2, l2 = h2 * o2, v2 = p2.canZoomInTo(l2), w2 = p2.canZoomOutTo(l2);
    return (o2 < 1 && !v2 || o2 > 1 && !w2) && (o2 = 1), Ft(u2, u2, e3), vt(t2, u2, o2, n2, i3, a2, m2), p2.constrainByGeometry(t2);
  }
};
e$a([y$1()], _.prototype, "animationManager", void 0), e$a([y$1({ type: Boolean, readOnly: true })], _.prototype, "interacting", void 0), e$a([y$1()], _.prototype, "pan", void 0), e$a([y$1()], _.prototype, "pinch", void 0), e$a([y$1()], _.prototype, "rotate", void 0), e$a([y$1()], _.prototype, "view", void 0), e$a([y$1()], _.prototype, "zoomBox", void 0), _ = e$a([i$b("esri.views.2d.navigation.MapViewNavigation")], _);
var T = _;
function s(s2) {
  return __async(this, null, function* () {
    const r2 = import("./mask-svg.6c18451e.js"), i3 = import("./overlay-svg.9a4d5607.js"), o2 = t$p((yield r2).default, { signal: s2 }), e3 = t$p((yield i3).default, { signal: s2 }), m2 = { mask: yield o2, overlay: yield e3 };
    return a$h(s2), m2;
  });
}
const t = { shaders: { vertexShader: s$j("magnifier/magnifier.vert"), fragmentShader: s$j("magnifier/magnifier.frag") }, attributes: { a_pos: 0 } };
function i2(e3) {
  return t$g(e3, t);
}
class f extends a$l {
  constructor() {
    super(), this._handles = new u$9(), this._resourcePixelRatio = 1, this.visible = false;
  }
  destroy() {
    this._handles.destroy(), this._handles = null, this._disposeRenderResources(), this._resourcesTask && (this._resourcesTask.abort(), this._resourcesTask = null);
  }
  get background() {
    return this._background;
  }
  set background(e3) {
    this._background = e3, this.requestRender();
  }
  get magnifier() {
    return this._magnifier;
  }
  set magnifier(e3) {
    this._magnifier = e3, this._handles.removeAll(), this._handles.add([d$c(e3, "version", () => {
      this.visible = e3.visible && r$d(e3.position) && e3.size > 0, this.requestRender();
    }), e3.watch(["mask", "overlay"], () => this._reloadResources()), e3.watch("size", () => {
      this._disposeRenderResources(), this.requestRender();
    })]);
  }
  doRender(r2) {
    var s2;
    const t2 = r2.context;
    if (!this._resourcesTask)
      return void this._reloadResources();
    if (r2.drawPhase !== I.MAP || !this._canRender())
      return;
    this._updateResources(r2);
    const i3 = this._magnifier;
    if (t$k(i3.position))
      return;
    const o2 = r2.pixelRatio, n2 = i3.size * o2, l2 = 1 / i3.factor, h2 = Math.ceil(l2 * n2);
    this._readbackTexture.resize(h2, h2);
    const { size: m2 } = r2.state, d2 = o2 * m2[0], u2 = o2 * m2[1], c2 = 0.5 * h2, _2 = 0.5 * h2, g2 = e$8(o2 * i3.position.x, c2, d2 - c2 - 1), f2 = e$8(u2 - o2 * i3.position.y, _2, u2 - _2 - 1);
    t2.setBlendingEnabled(true);
    const b2 = g2 - c2, x = f2 - _2, y2 = this._readbackTexture;
    t2.bindTexture(y2, 0), t2.gl.copyTexImage2D(y2.descriptor.target, 0, y2.descriptor.pixelFormat, b2, x, h2, h2, 0);
    const k2 = (s2 = this.background) == null ? void 0 : s2.color, T2 = k2 ? [k2.a * k2.r / 255, k2.a * k2.g / 255, k2.a * k2.b / 255, k2.a] : [1, 1, 1, 1], v2 = (g2 + i3.offset.x * o2) / d2 * 2 - 1, R = (f2 - i3.offset.y * o2) / u2 * 2 - 1, w2 = n2 / d2 * 2, j2 = n2 / u2 * 2, A2 = this._program;
    t2.bindVAO(this._vertexArrayObject), t2.bindTexture(this._overlayTexture, 6), t2.bindTexture(this._maskTexture, 7), t2.bindProgram(A2), A2.setUniform4fv("u_background", T2), A2.setUniform1i("u_readbackTexture", 0), A2.setUniform1i("u_overlayTexture", 6), A2.setUniform1i("u_maskTexture", 7), A2.setUniform4f("u_drawPos", v2, R, w2, j2), A2.setUniform1i("u_maskEnabled", i3.maskEnabled ? 1 : 0), A2.setUniform1i("u_overlayEnabled", i3.overlayEnabled ? 1 : 0), t2.setStencilTestEnabled(false), t2.setColorMask(true, true, true, true), t2.drawArrays(5, 0, 4), t2.bindVAO();
  }
  _canRender() {
    return this.mask && this.overlay && this._magnifier != null;
  }
  _reloadResources() {
    this._resourcesTask && this._resourcesTask.abort();
    const s$12 = r$d(this._magnifier) ? this._magnifier.maskUrl : null, t2 = r$d(this._magnifier) ? this._magnifier.overlayUrl : null;
    this._resourcesTask = F$2((i3) => __async(this, null, function* () {
      const a2 = t$k(s$12) || t$k(t2) ? s(i3) : null, n2 = r$d(s$12) ? U$2(s$12, { responseType: "image", signal: i3 }).then((e3) => e3.data) : a2.then((e3) => e3.mask), l2 = r$d(t2) ? U$2(t2, { responseType: "image", signal: i3 }).then((e3) => e3.data) : a2.then((e3) => e3.overlay), [h2, m2] = yield Promise.all([n2, l2]);
      this.mask = h2, this.overlay = m2, this._disposeRenderResources(), this.requestRender();
    }));
  }
  _disposeRenderResources() {
    this._readbackTexture = i$e(this._readbackTexture), this._overlayTexture = i$e(this._overlayTexture), this._maskTexture = i$e(this._maskTexture), this._vertexArrayObject = i$e(this._vertexArrayObject), this._program = i$e(this._program);
  }
  _updateResources(e3) {
    if (e3.pixelRatio !== this._resourcePixelRatio && this._disposeRenderResources(), this._readbackTexture)
      return;
    const r2 = e3.context;
    this._resourcePixelRatio = e3.pixelRatio;
    const s2 = Math.ceil(this._magnifier.size * e3.pixelRatio);
    this._program = i2(r2);
    const i$12 = { geometry: [{ name: "a_pos", count: 2, type: 5123, offset: 0, stride: 4, normalized: false, divisor: 0 }] }, a2 = new Uint16Array([0, 1, 0, 0, 1, 1, 1, 0]), o2 = t.attributes;
    this._vertexArrayObject = new s$k(r2, o2, i$12, { geometry: s$l.createVertex(r2, 35044, a2) }), this.overlay.width = s2, this.overlay.height = s2, this._overlayTexture = new o$d(r2, { target: 3553, pixelFormat: 6408, internalFormat: 6408, dataType: 5121, wrapMode: 33071, samplingMode: 9728, flipped: true, preMultiplyAlpha: !wt(this.overlay.src) || !e3.driverTestResult.svgAlwaysPremultipliesAlpha }, this.overlay), this.mask.width = s2, this.mask.height = s2, this._maskTexture = new o$d(r2, { target: 3553, pixelFormat: 6406, internalFormat: 6406, dataType: 5121, wrapMode: 33071, samplingMode: 9728, flipped: true }, this.mask);
    const n2 = 1 / this._magnifier.factor;
    this._readbackTexture = new o$d(r2, { target: 3553, pixelFormat: 6408, internalFormat: 6408, dataType: 5121, wrapMode: 33071, samplingMode: 9729, flipped: false, width: Math.ceil(n2 * s2), height: Math.ceil(n2 * s2) });
  }
}
export { h$8 as LabelManager, f as MagnifierView2D, T as MapViewNavigation, T$1 as Stage };
