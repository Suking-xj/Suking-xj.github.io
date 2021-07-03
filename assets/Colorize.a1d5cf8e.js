import "./vendor.74d5941c.js";
import { o } from "./FramebufferObject.18518335.js";
import { r as r$1 } from "./WGLContainer.74815466.js";
import "./_commonjsHelpers.f2a458db.js";
import "./Utils.3f1577e5.js";
import "./Container.d2c27c9d.js";
import "./mat4f32.a5cabe00.js";
import "./definitions.6737c10c.js";
import "./VertexArrayObject.67803418.js";
import "./vec4f32.6de15d07.js";
import "./ShaderCompiler.b19da10d.js";
import "./earcut.0e5467f0.js";
import "./GeometryUtils.9c8423f5.js";
import "./MaterialKey.3bc4aaea.js";
class r {
  constructor() {
    this._size = [0, 0], this._programDesc = { vsPath: "post-processing/pp", fsPath: "post-processing/filterEffect", attributes: { a_position: 0 } };
  }
  dispose() {
    this._layerFBOTexture && (this._layerFBOTexture.dispose(), this._layerFBOTexture = null);
  }
  draw(e, t, r2) {
    const { width: s, height: i } = t;
    this._createOrResizeResources(e, s, i);
    const { context: o2, painter: a } = e, { materialManager: n } = a, c = this._programDesc, l = this._quad, h = r2.colorMatrix;
    l.bind();
    const u = this._layerFBOTexture;
    o2.bindFramebuffer(t), t.copyToTexture(0, 0, s, i, 0, 0, u), o2.setBlendingEnabled(false), o2.setStencilTestEnabled(false);
    const p = n.getProgram(e, c);
    o2.bindProgram(p), o2.bindTexture(u, 2), p.setUniformMatrix4fv("u_coefficients", h), p.setUniform1i("u_colorTexture", 2), l.draw(), o2.setBlendingEnabled(true), o2.setBlendFunction(1, 771), o2.setStencilTestEnabled(true), l.unbind();
  }
  _createOrResizeResources(r2, s, i) {
    const { context: o$1 } = r2;
    this._layerFBOTexture && this._size[0] === s && this._size[1] === i || (this._size[0] = s, this._size[1] = i, this._layerFBOTexture ? this._layerFBOTexture.resize(s, i) : this._layerFBOTexture = new o(o$1, { target: 3553, pixelFormat: 6408, internalFormat: 6408, dataType: 5121, wrapMode: 33071, samplingMode: 9729, flipped: false, width: s, height: i }), this._quad || (this._quad = new r$1(o$1, [-1, -1, 1, -1, -1, 1, 1, 1])));
  }
}
export { r as Colorize };
