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
import { a4 as n, eh as i, an as g, ae as e, af as y, ag as i$1 } from "./vendor.74d5941c.js";
import { l, d as d$1 } from "./LayerView2D.06dde519.js";
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
const h = n.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D");
let c = class extends i(l(d$1)) {
  hitTest() {
    return null;
  }
  update(t2) {
    this.strategy.update(t2).catch((t3) => {
      g(t3) || h.error(t3);
    }), this.notifyChange("updating");
  }
  attach() {
    this._bitmapContainer = new t(), this.container.addChild(this._bitmapContainer), this.strategy = new S({ container: this._bitmapContainer, fetchSource: this.fetchBitmapData.bind(this), requestUpdate: this.requestUpdate.bind(this) });
  }
  detach() {
    this.strategy.destroy(), this.strategy = null, this.container.removeChild(this._bitmapContainer), this._bitmapContainer.removeAllChildren();
  }
  moveStart() {
  }
  viewChange() {
  }
  moveEnd() {
    this.requestUpdate();
  }
  fetchBitmapData(t2, e2, r) {
    return this.layer.fetchImage(t2, e2, r, { timestamp: this.refreshTimestamp });
  }
  doRefresh() {
    return __async(this, null, function* () {
      this.requestUpdate();
    });
  }
  isUpdating() {
    return this.strategy.updating || this.updateRequested;
  }
};
e([y()], c.prototype, "strategy", void 0), e([y()], c.prototype, "updating", void 0), c = e([i$1("esri.views.2d.layers.BaseDynamicLayerView2D")], c);
var d = c;
export default d;
