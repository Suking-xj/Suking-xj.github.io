import { a9 as u } from "./vendor.74d5941c.js";
import { r as r$1, o as o$1 } from "./FramebufferObject.18518335.js";
import { r } from "./WGLContainer.74815466.js";
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
const s = [1, 0], o = [0, 1];
class a {
  constructor() {
    this._horizontalBlurFBO = null, this._verticalBlurFBO = null, this._size = [0, 0], this._programDesc = { blur: { vsPath: "post-processing/drop-shadow", fsPath: "post-processing/blur/gaussianBlur", attributes: { a_position: 0 } }, composite: { vsPath: "post-processing/pp", fsPath: "post-processing/drop-shadow/composite", attributes: { a_position: 0 } }, blit: { vsPath: "post-processing/pp", fsPath: "post-processing/blit", attributes: { a_position: 0 } } };
  }
  dispose() {
    this._layerFBOTexture && (this._layerFBOTexture.dispose(), this._layerFBOTexture = null), this._horizontalBlurFBO && (this._horizontalBlurFBO.dispose(), this._horizontalBlurFBO = null), this._verticalBlurFBO && (this._verticalBlurFBO.dispose(), this._verticalBlurFBO = null);
  }
  draw(e, r$12, a2) {
    const { context: l, state: n, painter: u$1, pixelRatio: h } = e, { materialManager: p } = u$1, d = this._programDesc, c = r$12.width, _ = r$12.height, m = [Math.round(c / 2), Math.round(_ / 2)], { blurRadius: f, offsetX: B, offsetY: g, color: b } = a2, F = [h * u(B / 2), h * u(g / 2)];
    this._createOrResizeResources(e, c, _, m);
    const x = this._horizontalBlurFBO, T = this._verticalBlurFBO;
    l.setStencilWriteMask(0), l.setStencilTestEnabled(false), l.setDepthWriteEnabled(false), l.setDepthTestEnabled(false);
    const O = this._layerFBOTexture;
    r$12.copyToTexture(0, 0, c, _, 0, 0, O), this._quad || (this._quad = new r(l, [-1, -1, 1, -1, -1, 1, 1, 1])), l.setViewport(0, 0, m[0], m[1]);
    const w = this._quad;
    w.bind(), l.setBlendingEnabled(false);
    const v = p.getProgram(e, d.blur, [{ name: "radius", value: Math.ceil(f) }]);
    l.bindProgram(v), l.bindFramebuffer(x), l.bindTexture(r$12.colorTexture, 4), v.setUniformMatrix3fv("u_displayViewMat3", n.displayMat3), v.setUniform2fv("u_offset", F), v.setUniform1i("u_colorTexture", 4), v.setUniform2fv("u_texSize", m), v.setUniform2fv("u_direction", s), v.setUniform1f("u_sigma", f), w.draw(), l.bindFramebuffer(T), l.bindTexture(x.colorTexture, 5), v.setUniformMatrix3fv("u_displayViewMat3", n.displayMat3), v.setUniform2fv("u_offset", [0, 0]), v.setUniform1i("u_colorTexture", 5), v.setUniform2fv("u_direction", o), w.draw(), l.bindFramebuffer(r$12), l.setViewport(0, 0, c, _);
    const z = p.getProgram(e, d.composite);
    l.bindProgram(z), l.bindTexture(T.colorTexture, 2), z.setUniform1i("u_blurTexture", 2), l.bindTexture(O, 3), z.setUniform1i("u_layerFBOTexture", 3), z.setUniform4fv("u_shadowColor", [b[3] * (b[0] / 255), b[3] * (b[1] / 255), b[3] * (b[2] / 255), b[3]]), w.draw(), l.setBlendingEnabled(true), l.setStencilTestEnabled(true), l.setBlendFunction(1, 771), w.unbind();
  }
  _createOrResizeResources(t, i, s2, o2) {
    const { context: a2 } = t;
    this._horizontalBlurFBO && this._size[0] === i && this._size[1] === s2 || (this._size[0] = i, this._size[1] = s2, this._horizontalBlurFBO ? this._horizontalBlurFBO.resize(o2[0], o2[1]) : this._horizontalBlurFBO = new r$1(a2, { colorTarget: 0, depthStencilTarget: 0, width: o2[0], height: o2[1] }, { target: 3553, pixelFormat: 6408, internalFormat: 6408, dataType: 5121, wrapMode: 33071, samplingMode: 9729, flipped: false, width: o2[0], height: o2[1] }), this._verticalBlurFBO ? this._verticalBlurFBO.resize(o2[0], o2[1]) : this._verticalBlurFBO = new r$1(a2, { colorTarget: 0, depthStencilTarget: 0, width: o2[0], height: o2[1] }, { target: 3553, pixelFormat: 6408, internalFormat: 6408, dataType: 5121, wrapMode: 33071, samplingMode: 9729, flipped: false, width: o2[0], height: o2[1] }), this._layerFBOTexture ? this._layerFBOTexture.resize(i, s2) : this._layerFBOTexture = new o$1(a2, { target: 3553, pixelFormat: 6408, internalFormat: 6408, dataType: 5121, wrapMode: 33071, samplingMode: 9729, flipped: false, width: i, height: s2 }));
  }
}
export { a as DropShadow };
