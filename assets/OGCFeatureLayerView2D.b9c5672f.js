import { ae as e, af as y, ag as i$1, aa as s, ev as y$1 } from "./vendor.74d5941c.js";
import Y from "./FeatureLayerView2D.1ef9f875.js";
import "./definitions.6737c10c.js";
import "./LayerView2D.06dde519.js";
import "./Container.d2c27c9d.js";
import "./mat4f32.a5cabe00.js";
import "./_commonjsHelpers.f2a458db.js";
import "./clickToleranceUtils.1b8c692d.js";
import "./drapedUtils.72df2b08.js";
import "./schemaUtils.ab77d03d.js";
import "./MD5.1ef35834.js";
import "./Utils.3f1577e5.js";
import "./FramebufferObject.18518335.js";
import "./MaterialKey.3bc4aaea.js";
import "./visualVariablesUtils.cb58e4df.js";
import "./CIMSymbolHelper.6546a069.js";
import "./Rect.b51904ac.js";
import "./BidiEngine.9b392b22.js";
import "./popupUtils.017b06d1.js";
const i = (i2) => {
  let a = class extends i2 {
    initialize() {
      const { layer: e2, view: r } = this;
      e2.source.supportsSpatialReference(r.spatialReference) || this.addResolvingPromise(Promise.reject(new s("layerview:spatial-reference-incompatible", "The spatial references supported by this OGC layer are incompatible with the spatial reference of the view", { layer: e2 })));
    }
    get availableFields() {
      return y$1(this.layer.fields, ["*"]);
    }
  };
  return e([y()], a.prototype, "layer", void 0), e([y({ readOnly: true })], a.prototype, "availableFields", null), a = e([i$1("esri.views.layers.OGCFeatureLayerView")], a), a;
};
let t = class extends i(Y) {
};
t = e([i$1("esri.views.2d.layers.OGCFeatureLayerView2D")], t);
var p = t;
export default p;
