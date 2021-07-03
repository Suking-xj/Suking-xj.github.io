import "./vendor.74d5941c.js";
import { r as r$2 } from "./FramebufferObject.18518335.js";
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
const r = [1, 0], s = [0, 1];
class i {
  constructor() {
    this._blurFBO = null, this._size = [0, 0], this._programDesc = { gaussianBlur: { vsPath: "post-processing/pp", fsPath: "post-processing/blur/gaussianBlur", attributes: { a_position: 0 } }, radialBlur: { vsPath: "post-processing/pp", fsPath: "post-processing/blur/radial-blur", attributes: { a_position: 0 } }, blit: { vsPath: "post-processing/pp", fsPath: "post-processing/blit", attributes: { a_position: 0 } } };
  }
  dispose() {
    this._blurFBO && (this._blurFBO.dispose(), this._blurFBO = null);
  }
  draw(e, r2, s2) {
    const { context: i2 } = e, { type: a, radius: n } = s2;
    if (n === 0)
      return;
    this._createOrResizeResources(e), this._quad || (this._quad = new r$1(i2, [-1, -1, 1, -1, -1, 1, 1, 1]));
    const o = this._quad;
    o.bind(), a === "blur" ? this._gaussianBlur(e, r2, n) : this._radialBlur(e, r2), o.unbind();
  }
  _gaussianBlur(e, t, i2) {
    const { context: a, state: n, painter: o, pixelRatio: l } = e, { size: u } = n, { materialManager: d } = o, b = this._programDesc, c = this._quad, h = [Math.round(l * u[0]), Math.round(l * u[1])], p = this._blurFBO, _ = d.getProgram(e, b.gaussianBlur, [{ name: "radius", value: Math.ceil(i2) }]);
    a.bindProgram(_), a.setBlendingEnabled(false), a.bindFramebuffer(p), a.bindTexture(t.colorTexture, 4), _.setUniform1i("u_colorTexture", 4), _.setUniform2fv("u_texSize", h), _.setUniform2fv("u_direction", r), _.setUniform1f("u_sigma", i2), c.draw(), a.bindFramebuffer(t), a.setStencilWriteMask(0), a.setStencilTestEnabled(false), a.setDepthWriteEnabled(false), a.setDepthTestEnabled(false), a.bindTexture(p.colorTexture, 5), _.setUniform1i("u_colorTexture", 5), _.setUniform2fv("u_direction", s), c.draw(), a.setBlendingEnabled(true), a.setBlendFunction(1, 771), a.setStencilTestEnabled(true);
  }
  _radialBlur(e, t) {
    const { context: r2, painter: s2 } = e, { materialManager: i2 } = s2, a = this._programDesc, n = this._quad, o = this._blurFBO;
    r2.bindFramebuffer(o);
    const l = i2.getProgram(e, a.radialBlur);
    r2.bindProgram(l), r2.setBlendingEnabled(false), r2.bindTexture(t.colorTexture, 4), l.setUniform1i("u_colorTexture", 4), n.draw(), r2.bindFramebuffer(t), r2.setStencilWriteMask(0), r2.setStencilTestEnabled(false), r2.setDepthWriteEnabled(false), r2.setDepthTestEnabled(false), r2.setBlendingEnabled(true);
    const u = i2.getProgram(e, a.blit);
    r2.bindProgram(u), r2.bindTexture(o.colorTexture, 5), u.setUniform1i("u_texture", 5), r2.setBlendFunction(1, 771), n.draw();
  }
  _createOrResizeResources(t) {
    const { context: r2, state: s2, pixelRatio: i2 } = t, { size: a } = s2, n = Math.round(i2 * a[0]), o = Math.round(i2 * a[1]);
    this._blurFBO && this._size[0] === n && this._size[1] === o || (this._size[0] = n, this._size[1] = o, this._blurFBO ? this._blurFBO.resize(n, o) : this._blurFBO = new r$2(r2, { colorTarget: 0, depthStencilTarget: 0, width: n, height: o }, { target: 3553, pixelFormat: 6408, internalFormat: 6408, dataType: 5121, wrapMode: 33071, samplingMode: 9729, flipped: false, width: n, height: o }));
  }
}
export { i as Blur };
