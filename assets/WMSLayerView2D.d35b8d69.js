var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
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
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import { ae as e, af as y$1, et as w, ag as i$1, aa as s, a4 as n, eh as i$2, an as g, cr as M } from "./vendor.74d5941c.js";
import { l as l$2, d } from "./LayerView2D.06dde519.js";
import { l as l$1 } from "./ExportWMSImageParameters.371f2196.js";
import { t } from "./BitmapContainer.dc86fd3a.js";
import { S } from "./ExportStrategy.a30951f7.js";
import "./Container.d2c27c9d.js";
import "./mat4f32.a5cabe00.js";
import "./_commonjsHelpers.f2a458db.js";
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
import "./Bitmap.0855f65e.js";
const i = (i2) => {
  let a = class extends i2 {
    initialize() {
      this.exportImageParameters = new l$1({ layer: this.layer });
    }
    destroy() {
      this.exportImageParameters.destroy(), this.exportImageParameters = null;
    }
    get exportImageVersion() {
      var e2;
      return (e2 = this.exportImageParameters) == null || e2.commitProperty("version"), this.commitProperty("timeExtent"), (this._get("exportImageVersion") || 0) + 1;
    }
    fetchPopupFeatures(e2) {
      const { layer: r } = this;
      if (!e2)
        return Promise.reject(new s("wmslayerview:fetchPopupFeatures", "Nothing to fetch without area", { layer: r }));
      const { popupEnabled: t2 } = r;
      if (!t2)
        return Promise.reject(new s("wmslayerview:fetchPopupFeatures", "popupEnabled should be true", { popupEnabled: t2 }));
      const s$1 = this.createFetchPopupFeaturesQuery(e2);
      if (!s$1)
        return Promise.resolve([]);
      const { extent: p, width: i3, height: a2, x: m, y: n2 } = s$1;
      if (!(p && i3 && a2))
        throw new s("wmslayerview:fetchPopupFeatures", "WMSLayer does not support fetching features.", { extent: p, width: i3, height: a2 });
      const u2 = r.fetchFeatureInfo(p, i3, a2, m, n2);
      return Promise.resolve(u2 ? [u2] : []);
    }
  };
  return e([y$1()], a.prototype, "exportImageParameters", void 0), e([y$1({ readOnly: true })], a.prototype, "exportImageVersion", null), e([y$1()], a.prototype, "layer", void 0), e([y$1(w)], a.prototype, "timeExtent", void 0), a = e([i$1("esri.layers.mixins.WMSLayerView")], a), a;
};
const l = n.getLogger("esri.views.2d.layers.WMSLayerView2D");
let u = class extends i(i$2(l$2(d))) {
  initialize() {
    const { layer: e2, view: t2 } = this;
    e2.supportsSpatialReference(t2.spatialReference) || this.addResolvingPromise(Promise.reject(new s("layerview:spatial-reference-incompatible", "The spatial references supported by this WMS layer are incompatible with the spatial reference of the view", { layer: e2 })));
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
    const { layer: e2 } = this, { imageMaxHeight: t$1, imageMaxWidth: r } = e2;
    this._bitmapContainer = new t(), this.container.addChild(this._bitmapContainer), this.strategy = new S({ container: this._bitmapContainer, fetchSource: this.fetchImage.bind(this), requestUpdate: this.requestUpdate.bind(this), imageMaxHeight: t$1, imageMaxWidth: r, imageRotationSupported: false, imageNormalizationSupported: false, hidpi: false }), this.handles.add(this.watch("exportImageVersion", () => this.requestUpdate()), "exportImageVersion");
  }
  detach() {
    this.handles.remove("exportImageVersion"), this.strategy.destroy(), this.container.removeChild(this._bitmapContainer), this._bitmapContainer.removeAllChildren();
  }
  moveStart() {
  }
  viewChange() {
  }
  moveEnd() {
    this.requestUpdate();
  }
  createFetchPopupFeaturesQuery(e2) {
    const { view: t2 } = this, r = this._bitmapContainer, { x: i2, y: s2 } = e2, { spatialReference: a } = t2;
    let n2 = null, p = 0, m = 0;
    if (r.children.some((e3) => {
      const { width: t3, height: r2, resolution: h2, x: c2, y: d3 } = e3, l2 = c2 + h2 * t3, u2 = d3 - h2 * r2;
      return i2 >= c2 && i2 <= l2 && s2 <= d3 && s2 >= u2 && (n2 = new M({ xmin: c2, ymin: u2, xmax: l2, ymax: d3, spatialReference: a }), p = t3, m = r2, true);
    }), !n2)
      return null;
    const h = n2.width / p, c = Math.round((i2 - n2.xmin) / h), d2 = Math.round((n2.ymax - s2) / h);
    return { extent: n2, width: p, height: m, x: c, y: d2 };
  }
  doRefresh() {
    return __async(this, null, function* () {
      this.requestUpdate();
    });
  }
  isUpdating() {
    return this.strategy.updating || this.updateRequested;
  }
  fetchImage(e2, t2, r, i2) {
    return this.layer.fetchImage(e2, t2, r, __spreadValues({ timeExtent: this.timeExtent, timestamp: this.refreshTimestamp }, i2));
  }
};
e([y$1()], u.prototype, "strategy", void 0), e([y$1()], u.prototype, "updating", void 0), u = e([i$1("esri.views.2d.layers.WMSLayerView2D")], u);
var y = u;
export default y;
