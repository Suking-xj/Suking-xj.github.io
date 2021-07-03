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
const e = 5, s = [1, 0], r = [0, 1], o = [1, 0.8, 0.6, 0.4, 0.2], n = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
class a {
  constructor() {
    this._intensityFBO = null, this._compositeFBO = null, this._mipsFBOs = new Array(e), this._nMips = e, this._kernelSizeArray = [3, 5, 7, 9, 11], this._size = [0, 0], this._programDesc = { luminosityHighPass: { vsPath: "post-processing/pp", fsPath: "post-processing/bloom/luminosityHighPass", attributes: { a_position: 0 } }, gaussianBlur: { vsPath: "post-processing/pp", fsPath: "post-processing/bloom/gaussianBlur", attributes: { a_position: 0 } }, composite: { vsPath: "post-processing/pp", fsPath: "post-processing/bloom/composite", attributes: { a_position: 0 } }, blit: { vsPath: "post-processing/pp", fsPath: "post-processing/blit", attributes: { a_position: 0 } } };
  }
  dispose() {
    if (this._quad && (this._quad.dispose(), this._quad = null), this._intensityFBO && (this._intensityFBO.dispose(), this._intensityFBO = null), this._compositeFBO && (this._compositeFBO.dispose(), this._compositeFBO = null), this._mipsFBOs) {
      for (let t = 0; t < this._nMips; t++)
        this._mipsFBOs[t] && (this._mipsFBOs[t].horizontal.dispose(), this._mipsFBOs[t].vertical.dispose());
      this._mipsFBOs = null;
    }
  }
  draw(t, a2, h) {
    const { width: l, height: u } = a2, { context: p, painter: m } = t, { materialManager: d } = m, c = p.gl, _ = this._programDesc, { strength: g, radius: f, threshold: b } = h;
    this._quad || (this._quad = new r$1(p, [-1, -1, 1, -1, -1, 1, 1, 1])), this._createOrResizeResources(t, l, u), p.setStencilTestEnabled(false), p.setBlendingEnabled(true), p.setBlendFunction(1, 771), p.setStencilWriteMask(0);
    const F = this._quad;
    F.bind(), p.bindFramebuffer(this._intensityFBO);
    const B = d.getProgram(t, _.luminosityHighPass);
    p.bindProgram(B), p.bindTexture(a2.colorTexture, 0), B.setUniform1i("u_texture", 0), B.setUniform3fv("u_defaultColor", [0, 0, 0]), B.setUniform1f("u_defaultOpacity", 0), B.setUniform1f("u_luminosityThreshold", b), B.setUniform1f("u_smoothWidth", 0.01);
    const O = [Math.round(l / 2), Math.round(u / 2)];
    p.setViewport(0, 0, O[0], O[1]), p.setClearColor(0, 0, 0, 0), p.clear(c.COLOR_BUFFER_BIT), F.draw(), p.setBlendingEnabled(false);
    let T = this._intensityFBO.colorTexture;
    for (let i = 0; i < this._nMips; i++) {
      const e2 = d.getProgram(t, _.gaussianBlur, [{ name: "radius", value: this._kernelSizeArray[i] }]);
      p.bindProgram(e2), p.bindTexture(T, i + 1), e2.setUniform1i("u_colorTexture", i + 1), e2.setUniform2fv("u_texSize", O), e2.setUniform2fv("u_direction", s), p.setViewport(0, 0, O[0], O[1]);
      const o2 = this._mipsFBOs[i];
      p.bindFramebuffer(o2.horizontal), F.draw(), T = o2.horizontal.colorTexture, p.bindFramebuffer(o2.vertical), p.bindTexture(T, i + 1), e2.setUniform2fv("u_direction", r), F.draw(), T = o2.vertical.colorTexture, O[0] = Math.round(O[0] / 2), O[1] = Math.round(O[1] / 2);
    }
    p.setViewport(0, 0, l, u);
    const x = d.getProgram(t, _.composite, [{ name: "nummips", value: e }]);
    p.bindFramebuffer(this._compositeFBO), p.bindProgram(x), x.setUniform1f("u_bloomStrength", g), x.setUniform1f("u_bloomRadius", f), x.setUniform1fv("u_bloomFactors", o), x.setUniform3fv("u_bloomTintColors", n), p.bindTexture(this._mipsFBOs[0].vertical.colorTexture, 1), x.setUniform1i("u_blurTexture1", 1), p.bindTexture(this._mipsFBOs[1].vertical.colorTexture, 2), x.setUniform1i("u_blurTexture2", 2), p.bindTexture(this._mipsFBOs[2].vertical.colorTexture, 3), x.setUniform1i("u_blurTexture3", 3), p.bindTexture(this._mipsFBOs[3].vertical.colorTexture, 4), x.setUniform1i("u_blurTexture4", 4), p.bindTexture(this._mipsFBOs[4].vertical.colorTexture, 5), x.setUniform1i("u_blurTexture5", 5), F.draw(), p.bindFramebuffer(a2), p.setBlendingEnabled(true);
    const w = d.getProgram(t, _.blit);
    p.bindProgram(w), p.bindTexture(this._compositeFBO.colorTexture, 6), w.setUniform1i("u_texture", 6), p.setBlendFunction(1, 1), F.draw(), F.unbind(), p.setBlendFunction(1, 771), p.setStencilTestEnabled(true);
  }
  _createOrResizeResources(i, e2, s2) {
    const { context: r2 } = i;
    if (this._compositeFBO && this._size[0] === e2 && this._size[1] === s2)
      return;
    this._size[0] = e2, this._size[1] = s2;
    const o2 = [Math.round(e2 / 2), Math.round(s2 / 2)];
    this._compositeFBO ? this._compositeFBO.resize(e2, s2) : this._compositeFBO = new r$2(r2, { colorTarget: 0, depthStencilTarget: 0, width: e2, height: s2 }), this._intensityFBO ? this._intensityFBO.resize(o2[0], o2[1]) : this._intensityFBO = new r$2(r2, { colorTarget: 0, depthStencilTarget: 0, width: o2[0], height: o2[1] }, { target: 3553, pixelFormat: 6408, internalFormat: 6408, dataType: 5121, wrapMode: 33071, samplingMode: 9729, flipped: false, width: o2[0], height: o2[1] });
    for (let n2 = 0; n2 < this._nMips; n2++)
      this._mipsFBOs[n2] ? (this._mipsFBOs[n2].horizontal.resize(o2[0], o2[1]), this._mipsFBOs[n2].vertical.resize(o2[0], o2[1])) : this._mipsFBOs[n2] = { horizontal: new r$2(r2, { colorTarget: 0, depthStencilTarget: 0, width: o2[0], height: o2[1] }, { target: 3553, pixelFormat: 6408, internalFormat: 6408, dataType: 5121, wrapMode: 33071, samplingMode: 9729, flipped: false, width: o2[0], height: o2[1] }), vertical: new r$2(r2, { colorTarget: 0, depthStencilTarget: 0, width: o2[0], height: o2[1] }, { target: 3553, pixelFormat: 6408, internalFormat: 6408, dataType: 5121, wrapMode: 33071, samplingMode: 9729, flipped: false, width: o2[0], height: o2[1] }) }, o2[0] = Math.round(o2[0] / 2), o2[1] = Math.round(o2[1] / 2);
  }
}
export { a as Bloom };
