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
import { cF as r$5, a0 as t$3, at as n$8, bV as t$4, cG as t$5, a4 as n$9, cH as B$1, br as t$6, aa as s$6, cI as C$2, as as r$6, a5 as r$7, az as n$a } from "./vendor.74d5941c.js";
import { r as re, I, M, E, m as m$3 } from "./Utils.3f1577e5.js";
import { a as a$4, r as r$8 } from "./Container.d2c27c9d.js";
import { z, U, W, V, A, B, C, D, G, H, o as o$5 } from "./definitions.6737c10c.js";
import { o as o$4 } from "./FramebufferObject.18518335.js";
import { s as s$4, a as s$5 } from "./VertexArrayObject.67803418.js";
import { t as t$1 } from "./vec4f32.6de15d07.js";
import { e as e$2, t as t$2 } from "./ShaderCompiler.b19da10d.js";
import { e as e$3, a as e$4 } from "./earcut.0e5467f0.js";
import { M as M$1 } from "./GeometryUtils.9c8423f5.js";
import { C as C$1, N, b, w, F } from "./MaterialKey.3bc4aaea.js";
class r$4 {
  constructor(r2, i2) {
    this.rctx = r2, this._vertexBuffer = s$4.createVertex(r2, 35044, new Uint16Array(i2)), this._vao = new s$5(r2, { a_position: 0 }, { geometry: [{ name: "a_position", count: 2, type: 5122, offset: 0, stride: 4, normalized: false }] }, { geometry: this._vertexBuffer });
  }
  bind() {
    this._vao.bind();
  }
  unbind() {
    this._vao.unbind();
  }
  dispose() {
    this._vao.dispose(false), this._vertexBuffer.dispose();
  }
  draw() {
    this.rctx.bindVAO(this._vao), this.rctx.drawArrays(5, 0, 4);
  }
}
class r$3 {
  constructor() {
    this.name = this.constructor.name || "UnnamedBrush";
  }
  prepareState(r2, t2, a2) {
  }
  draw(r2, t2, a2) {
  }
  drawMany(r2, t2, a2) {
    for (const s2 of t2)
      this.draw(r2, s2, a2);
  }
}
const s$3 = { nearest: { defines: [], samplingMode: 9728, mips: false }, bilinear: { defines: [], samplingMode: 9729, mips: false }, bicubic: { defines: ["bicubic"], samplingMode: 9729, mips: false }, trilinear: { defines: [], samplingMode: 9987, mips: true } }, n$7 = (e2, t2, i2) => {
  if (i2.samplingMode === "dynamic") {
    const { state: i3 } = e2, n2 = t2.resolution / t2.pixelRatio / i3.resolution, a2 = Math.round(e2.pixelRatio) !== e2.pixelRatio, r2 = n2 > 1.05 || n2 < 0.95;
    return i3.rotation || r2 || a2 || t2.isSourceScaled || t2.rotation ? s$3.bilinear : s$3.nearest;
  }
  return s$3[i2.samplingMode];
};
class a$3 extends r$3 {
  constructor() {
    super(...arguments), this._desc = { vsPath: "raster/bitmap", fsPath: "raster/bitmap", attributes: { a_position: 0, a_texcoord: 1 } };
  }
  dispose() {
    this._quad && this._quad.dispose();
  }
  prepareState({ context: e2 }, t2) {
    e2.setBlendingEnabled(true), t2.blendFunction === "additive" ? e2.setBlendFunctionSeparate(1, 1, 1, 1) : e2.setBlendFunctionSeparate(1, 771, 1, 771), e2.setColorMask(true, true, true, true), e2.setStencilWriteMask(0), e2.setStencilTestEnabled(true), e2.setStencilFunction(514, t2.stencilRef, 255);
  }
  draw(i2, s2) {
    const { context: a2, renderingOptions: r2, painter: o2 } = i2;
    if (!s2.source)
      return;
    i2.timeline.begin(this.name), this._quad || (this._quad = new r$4(a2, [0, 0, 1, 0, 0, 1, 1, 1]));
    const d2 = n$7(i2, s2, r2), c2 = o2.materialManager.getProgram(i2, this._desc, d2.defines), { coordScale: l2, computedOpacity: m2, transforms: p2 } = s2;
    s2.setSamplingProfile(d2), s2.bind(i2, z), a2.bindProgram(c2), c2.setUniformMatrix3fv("u_dvsMat3", p2.dvs), c2.setUniform1i("u_texture", z), c2.setUniform2fv("u_coordScale", l2), c2.setUniform1f("u_opacity", m2), this._quad.draw(), i2.timeline.end(this.name);
  }
}
var e$1 = { background: { "background.frag": "uniform lowp vec4 u_color;\nvoid main() {\n  gl_FragColor = u_color;\n}", "background.vert": "attribute vec2 a_pos;\nuniform highp mat3 u_dvsMat3;\nuniform mediump vec2 u_coord_range;\nuniform mediump float u_depth;\nvoid main() {\n  vec3 v_pos = u_dvsMat3 * vec3(u_coord_range * a_pos, 1.0);\n  gl_Position = vec4(v_pos.xy, 0.0, 1.0);\n}" }, bitBlit: { "bitBlit.frag": "uniform lowp sampler2D u_tex;\nuniform lowp float u_opacity;\nvarying mediump vec2 v_uv;\nvoid main() {\n  lowp vec4 color = texture2D(u_tex, v_uv);\n  gl_FragColor = color *  u_opacity;\n}", "bitBlit.vert": "attribute vec2 a_pos;\nattribute vec2 a_tex;\nvarying mediump vec2 v_uv;\nvoid main(void) {\n  gl_Position = vec4(a_pos, 0.0, 1.0);\n  v_uv = a_tex;\n}" }, blend: { "blend.frag": "precision mediump float;\nuniform sampler2D u_layerTexture;\nuniform lowp float u_opacity;\nuniform lowp float u_inFadeOpacity;\n#ifndef NORMAL\nuniform sampler2D u_backbufferTexture;\n#endif\nvarying mediump vec2 v_uv;\nfloat rgb2v(in vec3 c) {\n  return max(c.x, max(c.y, c.z));\n}\nvec3 rgb2hsv(in vec3 c) {\n  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\n  vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);\n  vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);\n  float d = q.x - min(q.w, q.y);\n  float e = 1.0e-10;\n  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);\n}\nvec3 hsv2rgb(in vec3 c) {\n  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n}\nvec3 tint(in vec3 Cb, in vec3 Cs) {\n  float vIn = rgb2v(Cb);\n  vec3 hsvTint = rgb2hsv(Cs);\n  vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);\n  return hsv2rgb(hsvOut);\n}\nfloat overlay(in float Cb, in float Cs) {\n  return (1.0 - step(0.5, Cs)) * (1.0 - 2.0 * (1.0 - Cs ) * (1.0 - Cb)) + step(0.5, Cs) * (2.0 * Cs * Cb);\n}\nfloat colorDodge(in float Cb, in float Cs) {\n  return (Cb == 0.0) ? 0.0 : (Cs == 1.0) ? 1.0 : min(1.0, Cb / (1.0 - Cs));\n}\nfloat colorBurn(in float Cb, in float Cs) {\n return (Cb == 1.0) ? 1.0 : (Cs == 0.0) ? 0.0 : 1.0 - min(1.0, (1.0 - Cb) / Cs);\n}\nfloat hardLight(in float Cb, in float Cs) {\n  return (1.0 - step(0.5, Cs)) * (2.0 * Cs * Cb) + step(0.5, Cs) * (1.0 - 2.0 * (1.0 - Cs) * (1.0 - Cb));\n}\nfloat reflectBlend(in float Cb, in float Cs) {\n	return (Cs == 1.0) ? Cs : min(Cb * Cb / (1.0 - Cs), 1.0);\n}\nfloat softLight(in float Cb, in float Cs) {\n  if (Cs <= 0.5) {\n    return Cb - (1.0 - 2.0 * Cs) * Cb * (1.0 - Cb);\n  }\n  if (Cb <= 0.25) {\n    return Cb + (2.0 * Cs - 1.0) * Cb * ((16.0 * Cb - 12.0) * Cb + 3.0);\n  }\n  return Cb + (2.0 * Cs - 1.0) * (sqrt(Cb) - Cb);\n}\nfloat vividLight(in float Cb, in float Cs) {\n  return (1.0 - step(0.5, Cs)) * colorBurn(Cb, 2.0 * Cs) + step(0.5, Cs) * colorDodge(Cb, (2.0 * (Cs - 0.5)));\n}\nfloat minv3(in vec3 c) {\n  return min(min(c.r, c.g), c.b);\n}\nfloat maxv3(in vec3 c) {\n  return max(max(c.r, c.g), c.b);\n}\nfloat lumv3(in vec3 c) {\n  return dot(c, vec3(0.3, 0.59, 0.11));\n}\nfloat satv3(vec3 c) {\n  return maxv3(c) - minv3(c);\n}\nvec3 clipColor(vec3 color) {\n  float lum = lumv3(color);\n  float mincol = minv3(color);\n  float maxcol = maxv3(color);\n  if (mincol < 0.0) {\n    color = lum + ((color - lum) * lum) / (lum - mincol);\n  }\n  if (maxcol > 1.0) {\n    color = lum + ((color - lum) * (1.0 - lum)) / (maxcol - lum);\n  }\n  return color;\n}\nvec3 setLum(vec3 cbase, vec3 clum) {\n  float lbase = lumv3(cbase);\n  float llum = lumv3(clum);\n  float ldiff = llum - lbase;\n  vec3 color = cbase + vec3(ldiff);\n  return clipColor(color);\n}\nvec3 setLumSat(vec3 cbase, vec3 csat, vec3 clum)\n{\n  float minbase = minv3(cbase);\n  float sbase = satv3(cbase);\n  float ssat = satv3(csat);\n  vec3 color;\n  if (sbase > 0.0) {\n    color = (cbase - minbase) * ssat / sbase;\n  } else {\n    color = vec3(0.0);\n  }\n  return setLum(color, clum);\n}\nvoid main() {\n  vec4 src = texture2D(u_layerTexture, v_uv);\n#ifdef NORMAL\n  gl_FragColor = src *  u_opacity;\n#else\n  vec4 dst = texture2D(u_backbufferTexture, v_uv);\n  vec3 Cs = src.a == 0.0 ? src.rgb : vec3(src.rgb / src.a);\n  vec3 Cb = dst.a == 0.0 ? dst.rgb : vec3(dst.rgb / dst.a);\n  float as = u_opacity * src.a;\n  float ab = dst.a;\n  #ifdef DESTINATION_OVER\n    gl_FragColor = vec4(as * Cs * (1.0 - ab) + ab * Cb, as + ab - as * ab);\n  #endif\n  #ifdef SOURCE_IN\n    vec4 color = vec4(as * Cs * ab, as * ab);\n    vec4 fadeColor = (1.0 - u_opacity) * u_inFadeOpacity * vec4(ab * Cb, ab);\n    gl_FragColor = color + fadeColor;\n  #endif\n  #ifdef DESTINATION_IN\n    vec4 color = vec4(ab * Cb * as, ab * as);\n    vec4 fadeColor = (1.0 - u_opacity) * u_inFadeOpacity * vec4(ab * Cb, ab);\n    gl_FragColor = color + fadeColor;\n  #endif\n  #ifdef SOURCE_OUT\n    gl_FragColor = vec4(as * Cs * (1.0 - ab), as * (1.0 - ab));\n  #endif\n  #ifdef DESTINATION_OUT\n    gl_FragColor = vec4(ab * Cb * (1.0 - as), ab * (1.0 - as));\n  #endif\n  #ifdef SOURCE_ATOP\n    gl_FragColor = vec4(as * Cs * ab + ab * Cb * (1.0 - as), ab);\n  #endif\n  #ifdef DESTINATION_ATOP\n    gl_FragColor = vec4(as * Cs * (1.0 - ab) + ab * Cb * as, as);\n  #endif\n  #ifdef XOR\n    gl_FragColor = vec4(as * Cs * (1.0 - ab) + ab * Cb * (1.0 - as),\n                        as * (1.0 - ab) + ab * (1.0 - as));\n  #endif\n  #ifdef MULTIPLY\n    gl_FragColor = vec4(as * Cs * ab * Cb + (1.0 - ab) * as * Cs + (1.0 - as) * ab * Cb,\n                        as + ab * (1.0 - as));\n  #endif\n  #ifdef SCREEN\n    gl_FragColor = vec4((Cs + Cb - Cs * Cb) * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\n                        as + ab * (1.0 - as));\n  #endif\n  #ifdef OVERLAY\n    vec3 f = vec3(overlay(Cb.r, Cs.r), overlay(Cb.g, Cs.g), overlay(Cb.b, Cs.b));\n    gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\n                        as + ab * (1.0 - as));\n  #endif\n  #ifdef DARKEN\n    gl_FragColor = vec4(min(Cs, Cb) * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\n                        as + ab * (1.0 - as));\n  #endif\n  #ifdef LIGHTER\n    gl_FragColor = vec4(as * Cs + ab * Cb, as + ab);\n  #endif\n  #ifdef LIGHTEN\n    gl_FragColor = vec4(max(Cs, Cb) * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\n                        as + ab * (1.0 - as));\n  #endif\n  #ifdef COLOR_DODGE\n    vec3 f = vec3(colorDodge(Cb.r, Cs.r), colorDodge(Cb.g, Cs.g), colorDodge(Cb.b, Cs.b));\n    gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\n                        as + ab * (1.0 - as));\n  #endif\n  #ifdef COLOR_BURN\n    vec3 f = vec3(colorBurn(Cb.r, Cs.r), colorBurn(Cb.g, Cs.g), colorBurn(Cb.b, Cs.b));\n    gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\n                        as + ab * (1.0 - as));\n  #endif\n  #ifdef HARD_LIGHT\n    vec3 f = vec3(hardLight(Cb.r, Cs.r), hardLight(Cb.g, Cs.g), hardLight(Cb.b, Cs.b));\n    gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\n                        as + ab * (1.0 - as));\n  #endif\n  #ifdef SOFT_LIGHT\n    vec3 f = vec3(softLight(Cb.r, Cs.r), softLight(Cb.g, Cs.g), softLight(Cb.b, Cs.b));\n    gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\n                        as + ab * (1.0 - as));\n  #endif\n  #ifdef DIFFERENCE\n    gl_FragColor = vec4(abs(Cb - Cs) * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\n                        as + ab * (1.0 - as));\n  #endif\n  #ifdef EXCLUSION\n     vec3 f = Cs + Cb - 2.0 * Cs * Cb;\n     gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\n                        as + ab * (1.0 - as));\n  #endif\n  #ifdef INVERT\n    gl_FragColor = vec4((1.0 - Cb) * as * ab + Cb * ab * (1.0 - as), ab);\n  #endif\n  #ifdef VIVID_LIGHT\n    vec3 f = vec3(vividLight(Cb.r, Cs.r),\n                  vividLight(Cb.g, Cs.g),\n                  vividLight(Cb.b, Cs.b));\n    gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\n                        as + ab * (1.0 - as));\n  #endif\n  #ifdef HUE\n    vec3 f = setLumSat(Cs,Cb,Cb);\n    gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\n                        as + ab * (1.0 - as));\n  #endif\n  #ifdef SATURATION\n    vec3 f = setLumSat(Cb,Cs,Cb);\n    gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\n                        as + ab * (1.0 - as));\n  #endif\n  #ifdef COLOR\n    vec3 f = setLum(Cs,Cb);\n    gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\n                        as + ab * (1.0 - as));\n  #endif\n  #ifdef LUMINOSITY\n    vec3 f = setLum(Cb,Cs);\n    gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\n                        as + ab * (1.0 - as));\n  #endif\n  #ifdef PLUS\n    gl_FragColor = clamp(vec4(src.r + Cb.r, src.g + Cb.g, src.b + Cb.b, as + ab), 0.0, 1.0);\n  #endif\n  #ifdef MINUS\n     gl_FragColor = vec4(clamp(vec3(Cb.r - src.r, Cb.g - src.g, Cb.b - src.b), 0.0, 1.0), ab * as);\n  #endif\n  #ifdef AVERAGE\n     vec3 f = (Cb + Cs) / 2.0;\n     gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\n                        as + ab * (1.0 - as));\n  #endif\n  #ifdef REFLECT\n    vec3 f = vec3(reflectBlend(Cb.r, Cs.r),\n                  reflectBlend(Cb.g, Cs.g),\n                  reflectBlend(Cb.b, Cs.b));\n    gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\n                        as + ab * (1.0 - as));\n  #endif\n#endif\n}", "blend.vert": "attribute vec2 a_position;\nvarying mediump vec2 v_uv;\nvoid main(void) {\n  gl_Position = vec4(a_position , 0.0, 1.0);\n  v_uv = (a_position + 1.0) / 2.0;\n}" }, filtering: { "bicubic.glsl": "vec4 computeWeights(float v) {\n  float b = 1.0 / 6.0;\n  float v2 = v * v;\n  float v3 = v2 * v;\n  float w0 = b * (-v3 + 3.0 * v2 - 3.0 * v + 1.0);\n  float w1 = b * (3.0 * v3  - 6.0 * v2 + 4.0);\n  float w2 = b * (-3.0 * v3 + 3.0 * v2 + 3.0 * v + 1.0);\n  float w3 = b * v3;\n  return vec4(w0, w1, w2, w3);\n}\nvec4 bicubicOffsetsAndWeights(float v) {\n  vec4 w = computeWeights(v);\n  float g0 = w.x + w.y;\n  float g1 = w.z + w.w;\n  float h0 = 1.0 - (w.y / g0) + v;\n  float h1 = 1.0 + (w.w / g1) - v;\n  return vec4(h0, h1, g0, g1);\n}\nvec4 sampleBicubicBSpline(sampler2D sampler, vec2 coords, vec2 texSize) {\n  vec2 eX = vec2(1.0 / texSize.x, 0.0);\n  vec2 eY = vec2(0.0, 1.0 / texSize.y);\n  vec2 texel = coords * texSize - 0.5;\n  vec3 hgX = bicubicOffsetsAndWeights(fract(texel).x).xyz;\n  vec3 hgY = bicubicOffsetsAndWeights(fract(texel).y).xyz;\n  vec2 coords10 = coords + hgX.x * eX;\n  vec2 coords00 = coords - hgX.y * eX;\n  vec2 coords11 = coords10 + hgY.x * eY;\n  vec2 coords01 = coords00 + hgY.x * eY;\n  coords10 = coords10 - hgY.y * eY;\n  coords00 = coords00 - hgY.y * eY;\n  vec4 color00 = texture2D(sampler, coords00);\n  vec4 color10 = texture2D(sampler, coords10);\n  vec4 color01 = texture2D(sampler, coords01);\n  vec4 color11 = texture2D(sampler, coords11);\n  color00 = mix(color00, color01, hgY.z);\n  color10 = mix(color10, color11, hgY.z);\n  color00 = mix(color00, color10, hgX.z);\n  return color00;\n}", "bilinear.glsl": "vec4 sampleBilinear(sampler2D sampler, vec2 coords, vec2 texSize) {\n  vec2 texelStart = floor(coords * texSize);\n  vec2 coord0 = texelStart / texSize;\n  vec2 coord1 = (texelStart +  vec2(1.0, 0.0)) / texSize;\n  vec2 coord2 = (texelStart +  vec2(0.0, 1.0)) / texSize;\n  vec2 coord3 = (texelStart +  vec2(1.0, 1.0)) / texSize;\n  vec4 color0 = texture2D(sampler, coord0);\n  vec4 color1 = texture2D(sampler, coord1);\n  vec4 color2 = texture2D(sampler, coord2);\n  vec4 color3 = texture2D(sampler, coord3);\n  vec2 blend = fract(coords * texSize);\n  vec4 color01 = mix(color0, color1, blend.x);\n  vec4 color23 = mix(color2, color3, blend.x);\n  return mix(color01, color23, blend.y);\n}", "epx.glsl": "vec4 sampleEPX(sampler2D sampler, float size, vec2 coords, vec2 texSize) {\n  vec2 invSize = 1.0 / texSize;\n  vec2 texel = coords * texSize;\n  vec2 texel_i = floor(texel);\n  vec2 texel_frac = fract(texel);\n  vec4 colorP = texture2D(sampler, texel_i * invSize);\n  vec4 colorP1 = vec4(colorP);\n  vec4 colorP2 = vec4(colorP);\n  vec4 colorP3 = vec4(colorP);\n  vec4 colorP4 = vec4(colorP);\n  vec4 colorA = texture2D(sampler, (texel_i - vec2(0.0, 1.0)) * invSize);\n  vec4 colorB = texture2D(sampler, (texel_i + vec2(1.0, 0.0)) * invSize);\n  vec4 colorC = texture2D(sampler, (texel_i - vec2(1.0, 0.0)) * invSize);\n  vec4 colorD = texture2D(sampler, (texel_i + vec2(0.0, 1.0)) * invSize);\n  if (colorC == colorA && colorC != colorD && colorA != colorB) {\n    colorP1 = colorA;\n  }\n  if (colorA == colorB && colorA != colorC && colorB != colorD) {\n    colorP2 = colorB;\n  }\n  if (colorD == colorC && colorD != colorB && colorC != colorA) {\n    colorP3 = colorC;\n  }\n  if (colorB == colorD && colorB != colorA && colorD != colorC) {\n    colorP4 = colorD;\n  }\n  vec4 colorP12 = mix(colorP1, colorP2, texel_frac.x);\n  vec4 colorP34 = mix(colorP1, colorP2, texel_frac.x);\n  return mix(colorP12, colorP34, texel_frac.y);\n}" }, fx: { integrate: { "integrate.frag": "precision mediump float;\nuniform lowp sampler2D u_sourceTexture;\nuniform lowp sampler2D u_maskTexture;\nuniform mediump float u_zoomLevel;\nuniform highp float u_timeDelta;\nuniform highp float u_animationTime;\nvarying highp vec2 v_texcoord;\n#include <materials/utils.glsl>\nvoid main()\n{\n#ifdef DELTA\n  vec4 texel = texture2D(u_sourceTexture, v_texcoord);\n  vec4 data0 = texture2D(u_maskTexture, v_texcoord);\n  float flags = data0.r * 255.0;\n  float groupMinZoom = data0.g * 255.0;\n  float isVisible = getFilterBit(flags, 0);\n  float wouldClip = step(groupMinZoom, u_zoomLevel);\n  float direction = wouldClip * 1.0 + (1.0 - wouldClip) * -1.0;\n  float dt = u_timeDelta / max(u_animationTime, 0.0001);\n  vec4 nextState = vec4(texel + direction * dt);\n  gl_FragColor =  vec4(nextState);\n#elif defined(UPDATE)\n  vec4 texel = texture2D(u_sourceTexture, v_texcoord);\n  gl_FragColor = texel;\n#endif\n}", "integrate.vert": "precision mediump float;\nattribute vec2 a_pos;\nvarying highp vec2 v_texcoord;\nvoid main()\n{\n  v_texcoord = a_pos;\n  gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n}" } }, highlight: { "blur.frag": "varying mediump vec2 v_texcoord;\nuniform mediump vec4 u_direction;\nuniform mediump mat4 u_channelSelector;\nuniform mediump vec4 u_sigmas;\nuniform sampler2D u_texture;\nmediump vec4 gauss4(mediump vec2 dir) {\n  return exp(-dot(dir, dir) / (2.0 * u_sigmas * u_sigmas));\n}\nmediump float gauss1(mediump vec2 dir) {\n  return exp(-dot(dir, dir) / (2.0 * u_sigmas[3] * u_sigmas[3]));\n}\nmediump vec4 selectChannel(mediump vec4 sample) {\n  return u_channelSelector * sample;\n}\nvoid accumGauss4(mediump float i, inout mediump vec4 tot, inout mediump vec4 weight) {\n  mediump vec4 w = gauss4(i * u_direction.xy);\n  tot += selectChannel(texture2D(u_texture, v_texcoord + i * u_direction.zw)) * w;\n  weight += w;\n}\nvoid accumGauss1(mediump float i, inout mediump float tot, inout mediump float weight) {\n  mediump float w = gauss1(i * u_direction.xy);\n  tot += selectChannel(texture2D(u_texture, v_texcoord + i * u_direction.zw))[3] * w;\n  weight += w;\n}\nvoid main(void) {\n  mediump float tot = 0.0;\n  mediump float weight = 0.0;\n  accumGauss1(-4.0, tot, weight);\n  accumGauss1(-3.0, tot, weight);\n  accumGauss1(-2.0, tot, weight);\n  accumGauss1(-1.0, tot, weight);\n  accumGauss1(0.0, tot, weight);\n  accumGauss1(1.0, tot, weight);\n  accumGauss1(2.0, tot, weight);\n  accumGauss1(3.0, tot, weight);\n  accumGauss1(4.0, tot, weight);\n  gl_FragColor = vec4(0.0, 0.0, 0.0, tot / weight);\n}", "highlight.frag": "varying mediump vec2 v_texcoord;\nuniform sampler2D u_texture;\nuniform mediump vec4 u_sigmas;\nuniform sampler2D u_shade;\nuniform mediump vec2 u_minMaxDistance;\nmediump float estimateDistance() {\n  mediump float sigma = u_sigmas[3];\n  mediump float y = texture2D(u_texture, v_texcoord)[3];\n  const mediump float y0 = 0.5;\n  mediump float m0 = 1.0 / (sqrt(2.0 * 3.1415) * sigma);\n  mediump float d = (y - y0) / m0;\n  return d;\n}\nmediump vec4 shade(mediump float d) {\n  mediump float mappedDistance = (d - u_minMaxDistance.x) / (u_minMaxDistance.y - u_minMaxDistance.x);\n  mappedDistance = clamp(mappedDistance, 0.0, 1.0);\n  return texture2D(u_shade, vec2(mappedDistance, 0.5));\n}\nvoid main(void) {\n  mediump float d = estimateDistance();\n  gl_FragColor = shade(d);\n}", "textured.vert": "attribute mediump vec2 a_position;\nattribute mediump vec2 a_texcoord;\nvarying mediump vec2 v_texcoord;\nvoid main(void) {\n  gl_Position = vec4(a_position, 0.0, 1.0);\n  v_texcoord = a_texcoord;\n}" }, magnifier: { "magnifier.frag": "uniform lowp vec4 u_background;\nuniform mediump sampler2D u_readbackTexture;\nuniform mediump sampler2D u_maskTexture;\nuniform mediump sampler2D u_overlayTexture;\nuniform bool u_maskEnabled;\nuniform bool u_overlayEnabled;\nvarying mediump vec2 v_texCoord;\nconst lowp float barrelFactor = 1.1;\nlowp vec2 barrel(lowp vec2 uv) {\n  lowp vec2 uvn = uv * 2.0 - 1.0;\n  if (uvn.x == 0.0 && uvn.y == 0.0) {\n    return vec2(0.5, 0.5);\n  }\n  lowp float theta = atan(uvn.y, uvn.x);\n  lowp float r = pow(length(uvn), barrelFactor);\n  return r * vec2(cos(theta), sin(theta)) * 0.5 + 0.5;\n}\nvoid main(void)\n{\n  lowp vec4 color = texture2D(u_readbackTexture, barrel(v_texCoord));\n  color = (color + (1.0 - color.a) * u_background);\n  lowp float mask = u_maskEnabled ? texture2D(u_maskTexture, v_texCoord).a : 1.0;\n  color *= mask;\n  lowp vec4 overlayColor = u_overlayEnabled ? texture2D(u_overlayTexture, v_texCoord) : vec4(0);\n  gl_FragColor = overlayColor + (1.0 - overlayColor.a) * color;\n}", "magnifier.vert": "precision mediump float;\nattribute mediump vec2 a_pos;\nuniform mediump vec4 u_drawPos;\nvarying mediump vec2 v_texCoord;\nvoid main(void)\n{\n  v_texCoord = a_pos;\n  gl_Position = vec4(u_drawPos.xy + vec2(a_pos - 0.5) * u_drawPos.zw, 0.0, 1.0);\n}" }, materials: { "attributeData.glsl": "uniform highp sampler2D u_attributeData0;\nuniform highp sampler2D u_attributeData1;\nuniform highp sampler2D u_attributeData2;\nuniform highp sampler2D u_attributeData3;\nuniform highp int u_attributeTextureSize;\nhighp vec2 getAttributeDataCoords(in highp vec4 id) {\n  highp vec4 texel = unpackDisplayIdTexel(id);\n  highp float size = float(u_attributeTextureSize);\n  highp float u32 = float(int(texel.r) + int(texel.g) * 256 + int(texel.b) * 256 * 256 + int(texel.a) * 256 * 256 * 256);\n  highp float col = mod(u32, size);\n  highp float row = (u32 - col) / size;\n  highp float u = col / size;\n  highp float v = row / size;\n  return vec2(u, v);\n}\nhighp vec4 getAttributeData0(in highp vec4 id) {\n  vec2 coords = getAttributeDataCoords(id);\n  return texture2D(u_attributeData0, coords);\n}\nhighp vec4 getAttributeData1(in highp vec4 id) {\n  highp vec2 coords = getAttributeDataCoords(id);\n  return texture2D(u_attributeData1, coords);\n}\nhighp vec4 getAttributeData2(in highp vec4 id) {\n  highp vec2 coords = getAttributeDataCoords(id);\n  return texture2D(u_attributeData2, coords);\n}\nhighp vec4 getAttributeData3(in highp vec4 id) {\n  highp vec2 coords = getAttributeDataCoords(id);\n  return texture2D(u_attributeData3, coords);\n}\nfloat u88VVToFloat(in vec2 v) {\n  bool isMagic = v.x == 255.0 && v.y == 255.0;\n  if (isMagic) {\n    return NAN_MAGIC_NUMBER;\n  }\n  return (v.x + v.y * float(0x100)) - 32768.0;\n}", "constants.glsl": "const float C_DEG_TO_RAD = 3.14159265359 / 180.0;\nconst float C_256_TO_RAD = 3.14159265359 / 128.0;\nconst float SIGNED_BYTE_TO_UNSIGNED = 128.0;\nconst float POSITION_PRECISION = 1.0 / 8.0;\nconst float FILL_POSITION_PRECISION = 1.0 / 1.0;\nconst float SOFT_EDGE_RATIO = 1.0;\nconst float THIN_LINE_WIDTH_FACTOR = 1.1;\nconst float THIN_LINE_HALF_WIDTH = 1.0;\nconst float EXTRUDE_SCALE_PLACEMENT_PADDING = 1.0 / 4.0;\nconst float OFFSET_PRECISION = 1.0 / 8.0;\nconst float OUTLINE_SCALE = 1.0 / 5.0;\nconst float SDF_FONT_SIZE = 24.0;\nconst float MAX_SDF_DISTANCE = 8.0;\nconst float PLACEMENT_PADDING = 8.0;\nconst float EPSILON = 0.0000001;\nconst int MAX_FILTER_COUNT = 2;\nconst int ATTR_VV_SIZE = 0;\nconst int ATTR_VV_COLOR = 1;\nconst int ATTR_VV_OPACITY = 2;\nconst int ATTR_VV_ROTATION = 3;\nconst highp float NAN_MAGIC_NUMBER = 1e-30;", fill: { "common.glsl": "#ifdef PATTERN\nuniform mediump vec2 u_mosaicSize;\n#endif\n#ifdef DOT_DENSITY\nuniform lowp vec4 u_isActive[ 2 ];\nuniform highp float u_dotValue;\nuniform highp float u_tileDotsOverArea;\nuniform highp float u_dotTextureDotCount;\nuniform mediump float u_tileZoomFactor;\n#endif\nvarying vec3 v_pos;\nvarying lowp float v_opacity;\nvarying lowp vec4 v_color;\nvarying highp vec4 v_id;\nvarying highp float v_flags;\n#ifdef PATTERN\nvarying mediump vec4 v_tlbr;\nvarying mediump vec2 v_tileTextureCoord;\n#endif\n#ifdef DOT_DENSITY\nvarying highp vec2 v_dotTextureCoords;\nvarying highp vec4 v_dotThresholds[ 2 ];\n#endif", "fill.frag": "precision highp float;\n#include <materials/constants.glsl>\n#include <materials/utils.glsl>\n#include <materials/fill/common.glsl>\n#ifdef PATTERN\nuniform lowp sampler2D u_texture;\n#endif\n#ifdef DOT_DENSITY\nuniform mediump mat4 u_dotColors[ 2 ];\nuniform sampler2D u_dotTextures[ 2 ];\nuniform vec4 u_dotBackgroundColor;\n#endif\nvoid main() {\n#ifdef ID\n  gl_FragColor = v_id;\n#elif defined(PATTERN)\n  mediump vec2 normalizedTextureCoord = mod(v_tileTextureCoord, 1.0);\n  mediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);\n  lowp vec4 color = texture2D(u_texture, samplePos);\n  gl_FragColor = v_opacity * v_color * color;\n#elif defined(DOT_DENSITY) && !defined(HIGHLIGHT)\n  vec4 textureThresholds0 = texture2D(u_dotTextures[0], v_dotTextureCoords);\n  vec4 textureThresholds1 = texture2D(u_dotTextures[1], v_dotTextureCoords);\n  vec4 difference0 = v_dotThresholds[0] - textureThresholds0;\n  vec4 difference1 = v_dotThresholds[1] - textureThresholds1;\n#ifdef DD_DOT_BLENDING\n  vec4 isPositive0 = step(0.0, difference0);\n  vec4 isPositive1 = step(0.0, difference1);\n  float weightSum = dot(isPositive0, difference0) + dot(isPositive1, difference1);\n  float lessThanEqZero = step(weightSum, 0.0);\n  float greaterThanZero = 1.0 - lessThanEqZero ;\n  float divisor = (weightSum + lessThanEqZero);\n  vec4 weights0 = difference0 * isPositive0 / divisor;\n  vec4 weights1 = difference1 * isPositive1 / divisor;\n  vec4 dotColor = u_dotColors[0] * weights0 + u_dotColors[1] * weights1;\n  vec4 preEffectColor = greaterThanZero * dotColor + lessThanEqZero * u_dotBackgroundColor;\n#else\n  float diffMax = max(max4(difference0), max4(difference1));\n  float lessThanZero = step(diffMax, 0.0);\n  float greaterOrEqZero = 1.0 - lessThanZero;\n  vec4 isMax0 = step(diffMax, difference0);\n  vec4 isMax1 = step(diffMax, difference1);\n  vec4 dotColor = u_dotColors[0] * isMax0 + u_dotColors[1] * isMax1;\n  vec4 preEffectColor = greaterOrEqZero * dotColor + lessThanZero * u_dotBackgroundColor;\n#endif\n  gl_FragColor = preEffectColor;\n#else\n  gl_FragColor = v_opacity * v_color;\n#endif\n#ifdef HIGHLIGHT\n  gl_FragColor.a = 1.0;\n#endif\n}", "fill.vert": "precision highp float;\n#ifdef DOT_DENSITY\nattribute float a_inverseArea;\nvec4 a_color = vec4(0.0, 0.0, 0.0, 1.0);\nvec4 a_aux3 = vec4(0.0);\n#else\nattribute vec4 a_color;\nattribute vec4 a_tlbr;\nattribute vec4 a_aux1;\nattribute vec2 a_aux2;\nattribute vec4 a_aux3;\n#endif\n#include <materials/vcommon.glsl>\n#include <materials/fill/common.glsl>\n#ifdef DOT_DENSITY\nvec4 dotThreshold(vec4 featureAttrOverFeatureArea, float dotValue, float tileDotsOverArea) {\n  return featureAttrOverFeatureArea * (1.0 / dotValue)  * (1.0 / tileDotsOverArea);\n}\n#endif\nvoid main()\n{\n  INIT;\n  float a_bitSet = a_aux3.a;\n  v_color     = getColor(a_color, a_bitSet, 0);\n  v_opacity   = getOpacity();\n  v_id        = norm(a_id);\n  v_pos       = u_dvsMat3 * vec3(a_pos * FILL_POSITION_PRECISION, 1.);\n  v_flags     = getFilterFlags();\n#ifdef PATTERN\n  vec2 aux2 = (1.0 / SIGNED_BYTE_TO_UNSIGNED) * a_aux2;\n  float width = u_zoomFactor * a_aux1.x * aux2.x;\n  float height = u_zoomFactor * a_aux1.y * aux2.y;\n  float angle = C_256_TO_RAD * a_aux3.z;\n  float sinA = sin(angle);\n  float cosA = cos(angle);\n  mat3 patternMatrix = mat3(cosA / width, sinA / height, 0,\n                           -sinA / width, cosA / height, 0,\n                            0,            0,             1);\n  vec2 symbolOffset = (a_aux1.zw - SIGNED_BYTE_TO_UNSIGNED) / vec2(width, height);\n  v_tileTextureCoord = (patternMatrix * vec3(a_pos * FILL_POSITION_PRECISION, 1.0)).xy - symbolOffset;\n  v_tlbr = a_tlbr / u_mosaicSize.xyxy;\n#elif defined(DOT_DENSITY)\n  vec4 ddAttributeData0 = getAttributeData2(a_id) * u_isActive[0] * a_inverseArea;\n  vec4 ddAttributeData1 = getAttributeData3(a_id) * u_isActive[1] * a_inverseArea;\n  float size = u_tileZoomFactor * 512.0 * 1.0 / u_pixelRatio;\n  v_dotThresholds[0] = dotThreshold(ddAttributeData0, u_dotValue, u_tileDotsOverArea);\n  v_dotThresholds[1] = dotThreshold(ddAttributeData1, u_dotValue, u_tileDotsOverArea);\n  v_dotTextureCoords = (a_pos * FILL_POSITION_PRECISION + 0.5) / size;\n#endif\n  gl_Position = vec4(applyFilter(v_color, v_pos, v_flags), 1.0);\n}" }, icon: { "common.glsl": "uniform lowp vec2 u_mosaicSize;\nvarying lowp vec4 v_color;\nvarying highp vec4 v_id;\nvarying highp vec4 v_sizeTex;\nvarying mediump vec3 v_pos;\nvarying highp float v_filters;\nvarying lowp float v_opacity;\n#ifdef SDF\nvarying lowp vec4 v_outlineColor;\nvarying mediump float v_outlineWidth;\nvarying mediump float v_distRatio;\nvarying mediump float v_overridingOutlineColor;\nvarying mediump float v_isThin;\n#endif", "icon.frag": "precision mediump float;\n#include <materials/constants.glsl>\n#include <materials/utils.glsl>\n#include <util/encoding.glsl>\n#include <materials/constants.glsl>\n#include <materials/icon/common.glsl>\nuniform lowp sampler2D u_texture;\nvoid main()\n{\n  vec2 v_size = v_sizeTex.xy;\n  vec2 v_tex  = v_sizeTex.zw;\n#ifdef SDF\n  lowp vec4 fillPixelColor = v_color;\n  float d = 0.5 - rgba2float(texture2D(u_texture, v_tex));\n  float size = max(v_size.x, v_size.y);\n  float dist = d * size * SOFT_EDGE_RATIO * v_distRatio;\n  fillPixelColor *= clamp(0.5 - dist, 0.0, 1.0);\n  float outlineWidth = v_outlineWidth;\n  #ifdef HIGHLIGHT\n    outlineWidth = max(outlineWidth, 4.0 * v_isThin);\n  #endif\n  if (outlineWidth > 0.25) {\n    lowp vec4 outlinePixelColor = v_overridingOutlineColor * v_color + (1.0 - v_overridingOutlineColor) * v_outlineColor;\n    float clampedOutlineSize = min(outlineWidth, size);\n    outlinePixelColor *= clamp(0.5 - abs(dist) + clampedOutlineSize * 0.5, 0.0, 1.0);\n    gl_FragColor = v_opacity * ((1.0 - outlinePixelColor.a) * fillPixelColor + outlinePixelColor);\n  }\n  else {\n    gl_FragColor = v_opacity * fillPixelColor;\n  }\n#else\n   lowp vec4 texColor = texture2D(u_texture, v_tex);\n   gl_FragColor = v_opacity * texColor;\n#endif\n#ifdef HIGHLIGHT\n  gl_FragColor.a = step(1.0 / 255.0, gl_FragColor.a);\n#endif\n#ifdef ID\n  if (gl_FragColor.a < 1.0 / 255.0) {\n    discard;\n  }\n  gl_FragColor = v_id;\n#endif\n}", "icon.vert": "precision highp float;\nattribute vec4 a_color;\nattribute vec4 a_outlineColor;\nattribute vec4 a_sizeAndOutlineWidth;\nattribute vec2 a_vertexOffset;\nattribute vec2 a_texCoords;\nattribute vec2 a_bitSetAndDistRatio;\n#include <materials/vcommon.glsl>\n#include <materials/icon/common.glsl>\nvec2 getMarkerSize(inout vec2 offset, inout vec2 baseSize, inout float outlineSize, in float referenceSize, in float bitSet) {\n#ifdef VV_SIZE\n  float r = getSize(baseSize.y) / referenceSize;\n  baseSize.xy *= r;\n  offset.xy *= r;\n  float scaleSymbolProportionally = getBit(bitSet, 3);\n  outlineSize *= scaleSymbolProportionally * (r - 1.0) + 1.0;\n#endif\n  return baseSize;\n}\nvec3 getOffset(in vec2 in_offset, float a_bitSet) {\n  float isMapAligned = getBit(a_bitSet, 0);\n  vec3  offset       = getRotation() * vec3(in_offset, 0.0);\n  return getMatrix(isMapAligned) * offset;\n}\nvoid main()\n{\n  INIT;\n  vec2  a_size   = a_sizeAndOutlineWidth.xy * a_sizeAndOutlineWidth.xy / 128.0;\n  vec2  a_offset = a_vertexOffset / 16.0;\n  float a_outlineSize = a_sizeAndOutlineWidth.z * a_sizeAndOutlineWidth.z / 128.0;\n  float a_bitSet = a_bitSetAndDistRatio.x;\n  vec2 v_size = getMarkerSize(a_offset, a_size, a_outlineSize, a_sizeAndOutlineWidth.w * a_sizeAndOutlineWidth.w / 128.0, a_bitSet);\n  vec2 v_tex      = a_texCoords / u_mosaicSize;\n  v_color    = getColor(a_color, a_bitSet, 1);\n  v_opacity  = getOpacity();\n  v_id       = norm(a_id);\n  v_filters  = getFilterFlags();\n  v_pos      = u_dvsMat3 * vec3(a_pos * POSITION_PRECISION, 1.0) + getOffset(a_offset, a_bitSet);\n  v_sizeTex  = vec4(v_size.xy, v_tex.xy);\n#ifdef SDF\n  v_isThin   = getBit(a_bitSet, 2);\n  #ifdef VV_COLOR\n    v_overridingOutlineColor = v_isThin;\n  #else\n    v_overridingOutlineColor = 0.0;\n  #endif\n  v_outlineWidth = min(a_outlineSize, max(max(v_size.x, v_size.y) - 0.99, 0.0));\n  v_outlineColor = a_outlineColor;\n  v_distRatio = a_bitSetAndDistRatio.y / 126.0;\n#endif\n  gl_Position = vec4(applyFilter(v_color, v_pos, v_filters), 1.0);\n}" }, label: { "common.glsl": "uniform mediump float u_zoomLevel;\nuniform mediump float u_mapRotation;\nuniform mediump float u_mapAligned;\nuniform mediump vec2 u_mosaicSize;\nvarying mediump float v_antialiasingWidth;\nvarying mediump float v_edgeDistanceOffset;\nvarying mediump vec2 v_tex;\nvarying mediump vec4 v_color;\nvarying lowp vec4 v_animation;", "label.frag": "#include <materials/text/text.frag>", "label.vert": "precision highp float;\n#include <materials/vcommon.glsl>\n#include <materials/text/common.glsl>\nattribute vec4 a_color;\nattribute vec4 a_haloColor;\nattribute vec4 a_texAndSize;\nattribute vec4 a_refSymbolAndPlacementOffset;\nattribute vec4 a_glyphData;\nattribute vec2 a_vertexOffset;\nattribute vec2 a_texCoords;\nuniform float u_isHalo;\nuniform float u_zoomLevel;\nuniform float u_mapRotation;\nuniform float u_mapAligned;\nfloat getZ(in float minZoom, in float maxZoom, in float angle) {\n  float glyphAngle = angle * 360.0 / 254.0;\n  float mapAngle = u_mapRotation * 360.0 / 254.0;\n  float diffAngle = min(360.0 - abs(mapAngle - glyphAngle), abs(mapAngle - glyphAngle));\n  float z = 0.0;\n  z += u_mapAligned * (2.0 * (1.0 - step(minZoom, u_zoomLevel)));\n  z += u_mapAligned * 2.0 * step(90.0, diffAngle);\n  z += 2.0 * (1.0 - step(u_zoomLevel, maxZoom));\n  return z;\n}\nvoid main()\n{\n  INIT;\n  float groupMinZoom    = getMinZoom();\n  float glyphMinZoom    = a_glyphData.x;\n  float glyphMaxZoom    = a_glyphData.y;\n  float glyphAngle      = a_glyphData.z;\n  float a_minZoom          = max(groupMinZoom, glyphMinZoom);\n  float a_placementPadding = a_refSymbolAndPlacementOffset.x * EXTRUDE_SCALE_PLACEMENT_PADDING;\n  vec2  a_placementDir     = unpack_u8_nf32(a_refSymbolAndPlacementOffset.zw);\n  float a_refSymbolSize    = a_refSymbolAndPlacementOffset.y;\n  float fontSize           = a_texAndSize.z;\n  float haloSize           = a_texAndSize.w * OUTLINE_SCALE;\n  vec2  vertexOffset = a_vertexOffset * OFFSET_PRECISION;\n  vec3  pos          = vec3(a_pos * POSITION_PRECISION, 1.0);\n  float z            = getZ(a_minZoom, glyphMaxZoom, glyphAngle);\n  float fontScale    = fontSize / SDF_FONT_SIZE;\n  float halfSize     = getSize(a_refSymbolSize) / 2.0;\n  float animation    = pow(getAnimationState(), vec4(2.0)).r;\n  v_color     = animation * ((1.0 - u_isHalo) * a_color + (u_isHalo * a_haloColor));\n  v_opacity   = 1.0;\n  v_tex       = a_texCoords / u_mosaicSize;\n  v_edgeDistanceOffset = u_isHalo * haloSize / fontScale / MAX_SDF_DISTANCE;\n  v_antialiasingWidth  = 0.105 * SDF_FONT_SIZE / fontSize / u_pixelRatio;\n  vec2 placementOffset = a_placementDir * (halfSize + a_placementPadding);\n  vec3 glyphOffset     = u_displayMat3 * vec3(vertexOffset + placementOffset, 0.0);\n  vec3 v_pos           = vec3((u_dvsMat3 * pos + glyphOffset).xy, z);\n  gl_Position = vec4(applyFilterLabels(v_color, v_pos, getFilterFlags()), 1.0);\n#ifdef DEBUG\n  v_color = vec4(a_color.rgb, z == 0.0 ? 1.0 : 0.645);\n#endif\n}" }, line: { "common.glsl": "varying lowp vec4 v_color;\nvarying highp vec4 v_id;\nvarying mediump vec2 v_normal;\nvarying mediump float v_lineHalfWidth;\nvarying lowp float v_opacity;\nvarying highp vec3 v_pos;\n#ifdef PATTERN\nuniform mediump vec2 u_mosaicSize;\nvarying mediump vec4 v_tlbr;\nvarying mediump vec2 v_patternSize;\n#endif\n#if defined(PATTERN) || defined(SDF)\nvarying highp float v_accumulatedDistance;\n#endif", "line.frag": "precision lowp float;\n#include <util/encoding.glsl>\n#include <materials/constants.glsl>\n#include <materials/line/common.glsl>\nuniform lowp float u_blur;\nuniform mediump float u_zoomFactor;\n#if defined(PATTERN) || defined(SDF)\nuniform sampler2D u_texture;\n#endif\n#ifdef SDF\nconst float sdfPatternHalfWidth = 15.5;\nconst float widthFactor = 2.0;\n#endif\nvoid main()\n{\n  mediump float thinLineFactor = max(THIN_LINE_WIDTH_FACTOR * step(v_lineHalfWidth, THIN_LINE_HALF_WIDTH), 1.0);\n  mediump float fragDist = length(v_normal) * v_lineHalfWidth;\n  lowp float alpha = clamp(thinLineFactor * (v_lineHalfWidth - fragDist) / (u_blur + thinLineFactor - 1.0), 0.0, 1.0);\n#if defined(SDF) && !defined(HIGHLIGHT)\n  mediump float lineHalfWidth = widthFactor * v_lineHalfWidth;\n  mediump float lineWidthRatio = lineHalfWidth / sdfPatternHalfWidth;\n  mediump float relativeTexX = mod((u_zoomFactor * v_accumulatedDistance + v_normal.x * lineHalfWidth) / (lineWidthRatio * v_patternSize.x), 1.0);\n  mediump float relativeTexY = 0.5 + 0.5 * v_normal.y;\n  mediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));\n  mediump float d = rgba2float(texture2D(u_texture, texCoord)) - 0.5;\n  float dist = d * lineHalfWidth;\n  lowp vec4 fillPixelColor = v_opacity * alpha * clamp(0.5 - dist, 0.0, 1.0) * v_color;\n  gl_FragColor = fillPixelColor;\n#elif defined(PATTERN) && !defined(HIGHLIGHT)\n  mediump float lineHalfWidth = v_lineHalfWidth;\n  mediump float adjustedPatternWidth = v_patternSize.x * 2.0 * lineHalfWidth / v_patternSize.y;\n  mediump float relativeTexX = mod((u_zoomFactor * v_accumulatedDistance + v_normal.x * lineHalfWidth) / adjustedPatternWidth, 1.0);\n  mediump float relativeTexY = 0.5 + 0.5 * v_normal.y;\n  mediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexY, relativeTexX));\n  lowp vec4 color = texture2D(u_texture, texCoord);\n  gl_FragColor = v_opacity * alpha * v_color * color;\n#else\n  gl_FragColor = v_opacity * alpha * v_color;\n#endif\n#ifdef HIGHLIGHT\n  gl_FragColor.a = step(1.0 / 255.0, gl_FragColor.a);\n#endif\n#ifdef ID\n  if (gl_FragColor.a < 1.0 / 255.0) {\n    discard;\n  }\n  gl_FragColor = v_id;\n#endif\n}", "line.vert": "precision highp float;\nattribute vec4 a_color;\nattribute vec4 a_offsetAndNormal;\nattribute vec2 a_accumulatedDistanceAndHalfWidth;\nattribute vec4 a_tlbr;\nattribute vec4 a_segmentDirection;\nattribute vec2 a_aux;\n#include <materials/vcommon.glsl>\n#include <materials/line/common.glsl>\nconst float SCALE = 1.0 / 31.0;\nconst float WIDTH_SCALE = 1.0 / 1024.0;\nfloat getBaseLineHalfWidth(in float in_lineHalfWidth) {\n#ifdef VV_SIZE\n  float referenceHalfWidth = a_aux.x * WIDTH_SCALE;\n  float lineWidth = 2.0 * in_lineHalfWidth;\n  return 0.5 * (in_lineHalfWidth / referenceHalfWidth) * getSize(lineWidth);\n#else\n  return in_lineHalfWidth;\n#endif\n}\nfloat getLineHalfWidth(in float baseWidth, in float aa) {\n  float halfWidth = max(baseWidth + aa, 0.45) + 0.1 * aa;\n#ifdef HIGHLIGHT\n  halfWidth = max(halfWidth, 2.0);\n#endif\n  return halfWidth;\n}\nvec2 getDist(in vec2 offset, in float halfWidth) {\n  float thinLineFactor = max(THIN_LINE_WIDTH_FACTOR * step(halfWidth, THIN_LINE_HALF_WIDTH), 1.0);\n#if defined(SDF) && !defined(HIGHLIGHT)\n  thinLineFactor *= 2.0;\n#endif\n  return thinLineFactor * halfWidth * offset * SCALE;\n}\nvoid main()\n{\n  INIT;\n  float a_bitSet          = a_segmentDirection.w;\n  float a_accumulatedDist = a_accumulatedDistanceAndHalfWidth.x;\n  float a_lineHalfWidth   = a_accumulatedDistanceAndHalfWidth.y * WIDTH_SCALE;\n  float aa                = 0.5 * u_antialiasing;\n  vec2  a_offset          = a_offsetAndNormal.xy;\n  float baseWidth = getBaseLineHalfWidth(a_lineHalfWidth);\n  float halfWidth = getLineHalfWidth(baseWidth, aa);\n  float z         = 2.0 * step(baseWidth, 0.0);\n  vec2  dist      = getDist(a_offset, halfWidth);\n  vec3  offset    = u_displayViewMat3 * vec3(dist, 0.0);\n  vec3  pos       = u_dvsMat3 * vec3(a_pos * POSITION_PRECISION, 1.0) + offset;\n  v_color         = getColor(a_color, a_bitSet, 0);\n  v_opacity       = getOpacity();\n  v_lineHalfWidth = halfWidth;\n  v_id            = norm(a_id);\n  v_normal        = a_offsetAndNormal.zw * SCALE;\n  v_pos           = vec3(pos.xy, z);\n#ifdef PATTERN\n  v_tlbr          = a_tlbr / u_mosaicSize.xyxy;\n  v_patternSize   = vec2(a_tlbr.z - a_tlbr.x, a_tlbr.w - a_tlbr.y);\n#endif\n#if defined(PATTERN) || defined(SDF)\n  v_accumulatedDistance = a_accumulatedDist + dot(SCALE * a_segmentDirection.xy, dist / u_zoomFactor);\n#endif\n  gl_Position = vec4(applyFilter(v_color, v_pos, getFilterFlags()), 1.0);\n}" }, text: { "common.glsl": "uniform highp vec2 u_mosaicSize;\nvarying highp vec4 v_id;\nvarying mediump vec3 v_pos;\nvarying lowp float v_opacity;\nvarying lowp vec4 v_color;\nvarying highp vec2 v_tex;\nvarying mediump float v_antialiasingWidth;\nvarying mediump float v_edgeDistanceOffset;\nvarying lowp float v_transparency;", "text.frag": "precision mediump float;\n#include <materials/text/common.glsl>\nuniform lowp sampler2D u_texture;\nvoid main()\n{\n  float SDF_CUTOFF = (2.0 / 8.0);\n  float SDF_BASE_EDGE_DIST = 1.0 - SDF_CUTOFF;\n  lowp float dist = texture2D(u_texture, v_tex).a;\n  mediump float edge = SDF_BASE_EDGE_DIST - v_edgeDistanceOffset;\n#ifdef HIGHLIGHT\n  edge /= 2.0;\n#endif\n  lowp float aa = v_antialiasingWidth;\n  lowp float alpha = smoothstep(edge - aa, edge + aa, dist);\n  gl_FragColor = alpha * v_color * v_opacity;\n#ifdef ID\n  if (gl_FragColor.a < 1.0 / 255.0) {\n    discard;\n  }\n  gl_FragColor = v_id;\n#endif\n}", "text.vert": "precision highp float;\n#include <materials/utils.glsl>\n#include <materials/vcommon.glsl>\n#include <materials/text/common.glsl>\nattribute vec4 a_color;\nattribute vec4 a_haloColor;\nattribute vec4 a_texFontSize;\nattribute vec4 a_aux;\nattribute vec2 a_vertexOffset;\nattribute vec2 a_texCoords;\nuniform float u_isHalo;\nfloat getTextSize(in float baseSize, in float referenceSize) {\n#ifdef VV_SIZE\n  return getSize(baseSize);\n#endif\n  return baseSize;\n}\nvoid main()\n{\n  INIT;\n  float a_referenceSize = a_aux.z * a_aux.z / 256.0;\n  float a_bitSet        = a_aux.w;\n  float a_fontSize      = a_texFontSize.z;\n  vec2  a_offset        = a_vertexOffset * OFFSET_PRECISION;\n  vec3  in_pos        = vec3(a_pos * POSITION_PRECISION, 1.0);\n  float fontSize      = getTextSize(a_fontSize, a_referenceSize);\n  float scaleFactor   = fontSize / a_fontSize;\n  float fontScale     = fontSize / SDF_FONT_SIZE;\n  vec3  offset        = getRotation() * vec3(scaleFactor * a_offset, 0.0);\n  mat3  extrudeMatrix = getBit(a_bitSet, 0) == 1.0 ? u_displayViewMat3 : u_displayMat3;\n  v_color   = u_isHalo * a_haloColor + (1.0 - u_isHalo) * getColor(a_color, a_bitSet, 1);\n  v_opacity = getOpacity();\n  v_id      = norm(a_id);\n  v_tex     = a_texCoords / u_mosaicSize;\n  v_pos     = u_dvsMat3 * in_pos + extrudeMatrix * offset;\n  v_edgeDistanceOffset = u_isHalo * OUTLINE_SCALE * a_texFontSize.w / fontScale / MAX_SDF_DISTANCE;\n  v_antialiasingWidth  = 0.105 * SDF_FONT_SIZE / fontSize / u_pixelRatio;\n  gl_Position =  vec4(applyFilter(v_color, v_pos, getFilterFlags()), 1.0);\n}" }, "utils.glsl": "float rshift(in float u32, in int amount) {\n  return floor(u32 / pow(2.0, float(amount)));\n}\nfloat getBit(in float bitset, in int bitIndex) {\n  float offset = pow(2.0, float(bitIndex));\n  return mod(floor(bitset / offset), 2.0);\n}\nfloat getFilterBit(in float bitset, in int bitIndex) {\n  return getBit(bitset, bitIndex + 1);\n}\nfloat getHighlightBit(in float bitset) {\n  return getBit(bitset, 0);\n}\nhighp vec4 unpackDisplayIdTexel(in highp vec4 bitset) {\n  float isAggregate = getBit(bitset.a, 7);\n  return (1.0 - isAggregate) * bitset + isAggregate * (vec4(bitset.rgba) - vec4(0.0, 0.0, 0.0, float(0x80)));\n}\nvec4 unpack(in float u32) {\n  float r = mod(rshift(u32, 0), 255.0);\n  float g = mod(rshift(u32, 8), 255.0);\n  float b = mod(rshift(u32, 16), 255.0);\n  float a = mod(rshift(u32, 24), 255.0);\n  return vec4(r, g, b, a);\n}\nvec4 norm(in vec4 v) {\n  return v /= 255.0;\n}\nfloat max4(vec4 target) {\n  return max(max(max(target.x, target.y), target.z), target.w);\n}\nvec2 unpack_u8_nf32(vec2 bytes) {\n  return (bytes - 127.0) / 127.0;\n}", "vcommon.glsl": "#include <materials/constants.glsl>\n#include <materials/utils.glsl>\n#include <materials/attributeData.glsl>\n#include <materials/vv.glsl>\nattribute vec2 a_pos;\nattribute highp vec4 a_id;\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform highp mat3 u_displayViewMat3;\nuniform highp float u_pixelRatio;\nuniform mediump float u_zoomFactor;\nuniform mediump float u_antialiasing;\nvec4 VV_ADATA = vec4(0.0);\nvoid loadVisualVariableData(inout vec4 target) {\n#ifdef OES_TEXTURE_FLOAT\n  target.rgba = getAttributeData2(a_id);\n#else\n  vec4 data0 = getAttributeData2(a_id);\n  vec4 data1 = getAttributeData3(a_id);\n  target.r = u88VVToFloat(data0.rg * 255.0);\n  target.g = u88VVToFloat(data0.ba * 255.0);\n  target.b = u88VVToFloat(data1.rg * 255.0);\n  target.a = u88VVToFloat(data1.ba * 255.0);\n#endif\n}\n#ifdef VV\n  #define INIT loadVisualVariableData(VV_ADATA)\n#else\n  #define INIT\n#endif\nvec4 getColor(in vec4 a_color, in float a_bitSet, int index) {\n#ifdef VV_COLOR\n  float isColorLocked   = getBit(a_bitSet, index);\n  return getVVColor(VV_ADATA[ATTR_VV_COLOR], a_color, isColorLocked);\n#else\n  return a_color;\n#endif\n}\nfloat getOpacity() {\n#ifdef VV_OPACITY\n  return getVVOpacity(VV_ADATA[ATTR_VV_OPACITY]);\n#else\n  return 1.0;\n#endif\n}\nfloat getSize(in float in_size) {\n#ifdef VV_SIZE\n  return getVVSize(in_size, VV_ADATA[ATTR_VV_SIZE]);\n#else\n  return in_size;\n#endif\n}\nmat3 getRotation() {\n#ifdef VV_ROTATION\n  return getVVRotationMat3(mod(VV_ADATA[ATTR_VV_ROTATION], 360.0));\n#else\n  return mat3(1.0);\n#endif\n}\nfloat getFilterFlags() {\n#ifdef IGNORES_SAMPLER_PRECISION\n  return ceil(getAttributeData0(a_id).x * 255.0);\n#else\n  return getAttributeData0(a_id).x * 255.0;\n#endif\n}\nvec4 getAnimationState() {\n  return getAttributeData1(a_id);\n}\nfloat getMinZoom() {\n  vec4 data0 = getAttributeData0(a_id) * 255.0;\n  return data0.g;\n}\nmat3 getMatrix(float isMapAligned) {\n  return isMapAligned * u_displayViewMat3 + (1.0 - isMapAligned) * u_displayMat3;\n}\nvec3 applyFilter(inout vec4 color, inout vec3 pos, in float filterFlags) {\n  pos.z += 2.0 * (1.0 - getFilterBit(filterFlags, 0));\n#ifdef INSIDE\n  pos.z += 2.0 * (1.0 - getFilterBit(filterFlags, 1));\n#elif defined(OUTSIDE)\n  pos.z += 2.0 * getFilterBit(filterFlags, 1);\n#elif defined(HIGHLIGHT)\n  #if !defined(HIGHLIGHT_ALL)\n    pos.z += 2.0 * (1.0 - getHighlightBit(filterFlags));\n  #endif\n#endif\n  return pos;\n}\nvec3 applyFilterLabels(inout vec4 color, inout vec3 pos, in float filterFlags) {\n  pos.z += 2.0 * (1.0 - getFilterBit(filterFlags, 0));\n#ifndef OUTSIDE_LABELS_VISIBLE\n  pos.z += 2.0 * (1.0 - getFilterBit(filterFlags, 1));\n#endif\n  return pos;\n}", "vv.glsl": "#if defined(VV_SIZE_MIN_MAX_VALUE) || defined(VV_SIZE_SCALE_STOPS) || defined(VV_SIZE_FIELD_STOPS) || defined(VV_SIZE_UNIT_VALUE)\n  #define VV_SIZE\n#endif\n#if defined(VV_COLOR) || defined(VV_SIZE) || defined(VV_OPACITY) || defined(VV_ROTATION)\n  #define VV\n#endif\n#ifdef VV_COLOR\nuniform highp float u_vvColorValues[8];\nuniform vec4 u_vvColors[8];\n#endif\n#ifdef VV_SIZE_MIN_MAX_VALUE\nuniform highp vec4 u_vvSizeMinMaxValue;\n#endif\n#ifdef VV_SIZE_SCALE_STOPS\nuniform highp float u_vvSizeScaleStopsValue;\n#endif\n#ifdef VV_SIZE_FIELD_STOPS\nuniform highp float u_vvSizeFieldStopsValues[6];\nuniform float u_vvSizeFieldStopsSizes[6];\n#endif\n#ifdef VV_SIZE_UNIT_VALUE\nuniform highp float u_vvSizeUnitValueWorldToPixelsRatio;\n#endif\n#ifdef VV_OPACITY\nuniform highp float u_vvOpacityValues[8];\nuniform float u_vvOpacities[8];\n#endif\n#ifdef VV_ROTATION\nuniform lowp float u_vvRotationType;\n#endif\nbool isNan(float val) {\n  return (val == NAN_MAGIC_NUMBER);\n}\n#ifdef VV_SIZE_MIN_MAX_VALUE\nfloat getVVMinMaxSize(float sizeValue, float fallback) {\n  if (isNan(sizeValue)) {\n    return fallback;\n  }\n  float interpolationRatio = (sizeValue  - u_vvSizeMinMaxValue.x) / (u_vvSizeMinMaxValue.y - u_vvSizeMinMaxValue.x);\n  interpolationRatio = clamp(interpolationRatio, 0.0, 1.0);\n  return u_vvSizeMinMaxValue.z + interpolationRatio * (u_vvSizeMinMaxValue.w - u_vvSizeMinMaxValue.z);\n}\n#endif\n#ifdef VV_SIZE_FIELD_STOPS\nconst int VV_SIZE_N = 6;\nfloat getVVStopsSize(float sizeValue, float fallback) {\n  if (isNan(sizeValue)) {\n    return fallback;\n  }\n  if (sizeValue <= u_vvSizeFieldStopsValues[0]) {\n    return u_vvSizeFieldStopsSizes[0];\n  }\n  for (int i = 1; i < VV_SIZE_N; ++i) {\n    if (u_vvSizeFieldStopsValues[i] >= sizeValue) {\n      float f = (sizeValue - u_vvSizeFieldStopsValues[i-1]) / (u_vvSizeFieldStopsValues[i] - u_vvSizeFieldStopsValues[i-1]);\n      return mix(u_vvSizeFieldStopsSizes[i-1], u_vvSizeFieldStopsSizes[i], f);\n    }\n  }\n  return u_vvSizeFieldStopsSizes[VV_SIZE_N - 1];\n}\n#endif\n#ifdef VV_SIZE_UNIT_VALUE\nfloat getVVUnitValue(float sizeValue, float fallback) {\n  if (isNan(sizeValue)) {\n    return fallback;\n  }\n  return u_vvSizeUnitValueWorldToPixelsRatio * sizeValue;\n}\n#endif\n#ifdef VV_OPACITY\nconst int VV_OPACITY_N = 8;\nfloat getVVOpacity(float opacityValue) {\n  if (isNan(opacityValue)) {\n    return 1.0;\n  }\n  if (opacityValue <= u_vvOpacityValues[0]) {\n    return u_vvOpacities[0];\n  }\n  for (int i = 1; i < VV_OPACITY_N; ++i) {\n    if (u_vvOpacityValues[i] >= opacityValue) {\n      float f = (opacityValue - u_vvOpacityValues[i-1]) / (u_vvOpacityValues[i] - u_vvOpacityValues[i-1]);\n      return mix(u_vvOpacities[i-1], u_vvOpacities[i], f);\n    }\n  }\n  return u_vvOpacities[VV_OPACITY_N - 1];\n}\n#endif\n#ifdef VV_ROTATION\nmat4 getVVRotation(float rotationValue) {\n  if (isNan(rotationValue)) {\n    return mat4(1, 0, 0, 0,\n                0, 1, 0, 0,\n                0, 0, 1, 0,\n                0, 0, 0, 1);\n  }\n  float rotation = rotationValue;\n  if (u_vvRotationType == 1.0) {\n    rotation = 90.0 - rotation;\n  }\n  float angle = C_DEG_TO_RAD * rotation;\n  float sinA = sin(angle);\n  float cosA = cos(angle);\n  return mat4(cosA, sinA, 0, 0,\n              -sinA,  cosA, 0, 0,\n              0,     0, 1, 0,\n              0,     0, 0, 1);\n}\nmat3 getVVRotationMat3(float rotationValue) {\n  if (isNan(rotationValue)) {\n    return mat3(1, 0, 0,\n                0, 1, 0,\n                0, 0, 1);\n  }\n  float rotation = rotationValue;\n  if (u_vvRotationType == 1.0) {\n    rotation = 90.0 - rotation;\n  }\n  float angle = C_DEG_TO_RAD * -rotation;\n  float sinA = sin(angle);\n  float cosA = cos(angle);\n  return mat3(cosA, -sinA, 0,\n             sinA, cosA, 0,\n              0,    0,    1);\n}\n#endif\n#ifdef VV_COLOR\nconst int VV_COLOR_N = 8;\nvec4 getVVColor(float colorValue, vec4 fallback, float isColorLocked) {\n  if (isNan(colorValue) || isColorLocked == 1.0) {\n    return fallback;\n  }\n  if (colorValue <= u_vvColorValues[0]) {\n    return u_vvColors[0];\n  }\n  for (int i = 1; i < VV_COLOR_N; ++i) {\n    if (u_vvColorValues[i] >= colorValue) {\n      float f = (colorValue - u_vvColorValues[i-1]) / (u_vvColorValues[i] - u_vvColorValues[i-1]);\n      return mix(u_vvColors[i-1], u_vvColors[i], f);\n    }\n  }\n  return u_vvColors[VV_COLOR_N - 1];\n}\n#endif\nfloat getVVSize(in float size, in float vvSize)  {\n#ifdef VV_SIZE_MIN_MAX_VALUE\n  return getVVMinMaxSize(vvSize, size);\n#elif defined(VV_SIZE_SCALE_STOPS)\n  return u_vvSizeScaleStopsValue;\n#elif defined(VV_SIZE_FIELD_STOPS)\n  float outSize = getVVStopsSize(vvSize, size);\n  return isNan(outSize) ? size : outSize;\n#elif defined(VV_SIZE_UNIT_VALUE)\n  return getVVUnitValue(vvSize, size);\n#else\n  return size;\n#endif\n}" }, "post-processing": { blit: { "blit.frag": "precision mediump float;\nuniform sampler2D u_texture;\nvarying vec2 v_uv;\nvoid main() {\n  gl_FragColor = texture2D(u_texture, v_uv);\n}" }, bloom: { composite: { "composite.frag": "precision mediump float;\nvarying vec2 v_uv;\nuniform sampler2D u_blurTexture1;\nuniform sampler2D u_blurTexture2;\nuniform sampler2D u_blurTexture3;\nuniform sampler2D u_blurTexture4;\nuniform sampler2D u_blurTexture5;\nuniform float u_bloomStrength;\nuniform float u_bloomRadius;\nuniform float u_bloomFactors[NUMMIPS];\nuniform vec3 u_bloomTintColors[NUMMIPS];\nfloat lerpBloomFactor(const in float factor) {\n  float mirrorFactor = 1.2 - factor;\n  return mix(factor, mirrorFactor, u_bloomRadius);\n}\nvoid main() {\n  gl_FragColor = u_bloomStrength * (\n    lerpBloomFactor(u_bloomFactors[0]) * vec4(u_bloomTintColors[0], 1.0) * texture2D(u_blurTexture1, v_uv) +\n    lerpBloomFactor(u_bloomFactors[1]) * vec4(u_bloomTintColors[1], 1.0) * texture2D(u_blurTexture2, v_uv) +\n    lerpBloomFactor(u_bloomFactors[2]) * vec4(u_bloomTintColors[2], 1.0) * texture2D(u_blurTexture3, v_uv) +\n    lerpBloomFactor(u_bloomFactors[3]) * vec4(u_bloomTintColors[3], 1.0) * texture2D(u_blurTexture4, v_uv) +\n    lerpBloomFactor(u_bloomFactors[4]) * vec4(u_bloomTintColors[4], 1.0) * texture2D(u_blurTexture5, v_uv)\n  );\n}" }, gaussianBlur: { "gaussianBlur.frag": "precision mediump float;\nuniform sampler2D u_colorTexture;\nuniform vec2 u_texSize;\nuniform vec2 u_direction;\nvarying vec2 v_uv;\n#define KERNEL_RADIUS RADIUS\n#define SIGMA RADIUS\nfloat gaussianPdf(in float x, in float sigma) {\n    return 0.39894 * exp(-0.5 * x * x / ( sigma * sigma)) / sigma;\n}\nvoid main() {\n  vec2 invSize = 1.0 / u_texSize;\n  float fSigma = float(SIGMA);\n  float weightSum = gaussianPdf(0.0, fSigma);\n  vec4 pixelColorSum = texture2D(u_colorTexture, v_uv) * weightSum;\n  for (int i = 1; i < KERNEL_RADIUS; i ++) {\n    float x = float(i);\n    float w = gaussianPdf(x, fSigma);\n    vec2 uvOffset = u_direction * invSize * x;\n    vec4 sample1 = texture2D(u_colorTexture, v_uv + uvOffset);\n    vec4 sample2 = texture2D(u_colorTexture, v_uv - uvOffset);\n    pixelColorSum += (sample1 + sample2) * w;\n    weightSum += 2.0 * w;\n  }\n  gl_FragColor = pixelColorSum /weightSum;\n}" }, luminosityHighPass: { "luminosityHighPass.frag": "precision mediump float;\nuniform sampler2D u_texture;\nuniform vec3 u_defaultColor;\nuniform float u_defaultOpacity;\nuniform float u_luminosityThreshold;\nuniform float u_smoothWidth;\nvarying vec2 v_uv;\nvoid main() {\n  vec4 texel = texture2D(u_texture, v_uv);\n  vec3 luma = vec3(0.299, 0.587, 0.114);\n  float v = dot(texel.xyz, luma);\n  vec4 outputColor = vec4(u_defaultColor.rgb, u_defaultOpacity);\n  float alpha = smoothstep(u_luminosityThreshold, u_luminosityThreshold + u_smoothWidth, v);\n  gl_FragColor = mix(outputColor, texel, alpha);\n}" } }, blur: { gaussianBlur: { "gaussianBlur.frag": "precision mediump float;\nuniform sampler2D u_colorTexture;\nuniform vec2 u_texSize;\nuniform vec2 u_direction;\nuniform float u_sigma;\nvarying vec2 v_uv;\n#define KERNEL_RADIUS RADIUS\nfloat gaussianPdf(in float x, in float sigma) {\n    return 0.39894 * exp(-0.5 * x * x / ( sigma * sigma)) / sigma;\n}\nvoid main() {\n  vec2 invSize = 1.0 / u_texSize;\n  float fSigma = u_sigma;\n  float weightSum = gaussianPdf(0.0, fSigma);\n  vec4 pixelColorSum = texture2D(u_colorTexture, v_uv) * weightSum;\n  for (int i = 1; i < KERNEL_RADIUS; i ++) {\n    float x = float(i);\n    float w = gaussianPdf(x, fSigma);\n    vec2 uvOffset = u_direction * invSize * x;\n    vec4 sample1 = texture2D(u_colorTexture, v_uv + uvOffset);\n    vec4 sample2 = texture2D(u_colorTexture, v_uv - uvOffset);\n    pixelColorSum += (sample1 + sample2) * w;\n    weightSum += 2.0 * w;\n  }\n  gl_FragColor = pixelColorSum /weightSum;\n}" }, "radial-blur": { "radial-blur.frag": "precision mediump float;\nuniform sampler2D u_colorTexture;\nvarying vec2 v_uv;\nconst float sampleDist = 1.0;\nconst float sampleStrength = 2.2;\nvoid main(void) {\n    float samples[10];\n    samples[0] = -0.08;\n    samples[1] = -0.05;\n    samples[2] = -0.03;\n    samples[3] = -0.02;\n    samples[4] = -0.01;\n    samples[5] =  0.01;\n    samples[6] =  0.02;\n    samples[7] =  0.03;\n    samples[8] =  0.05;\n    samples[9] =  0.08;\n    vec2 dir = 0.5 - v_uv;\n    float dist = sqrt(dir.x * dir.x + dir.y * dir.y);\n    dir = dir / dist;\n    vec4 color = texture2D(u_colorTexture,v_uv);\n    vec4 sum = color;\n    for (int i = 0; i < 10; i++) {\n      sum += texture2D(u_colorTexture, v_uv + dir * samples[i] * sampleDist);\n    }\n    sum *= 1.0 / 11.0;\n    float t = dist * sampleStrength;\n    t = clamp(t, 0.0, 1.0);\n    gl_FragColor = mix(color, sum, t);\n}" } }, dra: { "dra.frag": "precision mediump float;\nuniform sampler2D u_minColor;\nuniform sampler2D u_maxColor;\nuniform sampler2D u_texture;\nvarying vec2 v_uv;\nvoid main() {\n  vec4 minColor = texture2D(u_minColor, vec2(0.5));\n  vec4 maxColor = texture2D(u_maxColor, vec2(0.5));\n  vec4 color = texture2D(u_texture, v_uv);\n  vec3 minColorUnpremultiply = minColor.rgb / minColor.a;\n  vec3 maxColorUnpremultiply = maxColor.rgb / maxColor.a;\n  vec3 colorUnpremultiply = color.rgb / color.a;\n  vec3 range = maxColorUnpremultiply - minColorUnpremultiply;\n  gl_FragColor = vec4(color.a * (colorUnpremultiply - minColorUnpremultiply) / range, color.a);\n}", "min-max": { "min-max.frag": "#extension GL_EXT_draw_buffers : require\nprecision mediump float;\n#define CELL_SIZE 2\nuniform sampler2D u_minTexture;\nuniform sampler2D u_maxTexture;\nuniform vec2 u_srcResolution;\nuniform vec2 u_dstResolution;\nvarying vec2 v_uv;\nvoid main() {\n  vec2 srcPixel = floor(gl_FragCoord.xy) * float(CELL_SIZE);\n  vec2 onePixel = vec2(1.0) / u_srcResolution;\n  vec2 uv = (srcPixel + 0.5) / u_srcResolution;\n  vec4 minColor = vec4(1.0);\n  vec4 maxColor = vec4(0.0);\n  for (int y = 0; y < CELL_SIZE; ++y) {\n    for (int x = 0; x < CELL_SIZE; ++x) {\n      vec2 offset = uv + vec2(x, y) * onePixel;\n      minColor = min(minColor, texture2D(u_minTexture, offset));\n      maxColor = max(maxColor, texture2D(u_maxTexture, offset));\n    }\n  }\n  gl_FragData[0] = minColor;\n  gl_FragData[1] = maxColor;\n}" } }, "drop-shadow": { composite: { "composite.frag": "precision mediump float;\nuniform sampler2D u_layerFBOTexture;\nuniform sampler2D u_blurTexture;\nuniform vec4 u_shadowColor;\nvarying vec2 v_uv;\nvoid main() {\n  vec4 layerColor = texture2D(u_layerFBOTexture, v_uv);\n  vec4 blurColor = texture2D(u_blurTexture, v_uv);\n  gl_FragColor = ((1.0 - layerColor.a) * blurColor.a * u_shadowColor + layerColor);\n}" }, "drop-shadow.vert": "precision mediump float;\nattribute vec2 a_position;\nuniform highp mat3 u_displayViewMat3;\nuniform highp vec2 u_offset;\nvarying vec2 v_uv;\nvoid main() {\n  vec3 offset = u_displayViewMat3 * vec3(u_offset, 0.0);\n  gl_Position = vec4(a_position, 0.0, 1.0) + vec4(offset, 0.0);\n  v_uv = (a_position + 1.0) / 2.0;\n}" }, "edge-detect": { "frei-chen": { "frei-chen.frag": "precision mediump float;\nuniform sampler2D u_colorTexture;\nuniform vec2 u_texSize;\nvarying vec2 v_uv;\nvec2 texel = vec2(1.0 / u_texSize.x, 1.0 / u_texSize.y);\nmat3 G[9];\nconst mat3 g0 = mat3( 0.3535533845424652, 0, -0.3535533845424652, 0.5, 0, -0.5, 0.3535533845424652, 0, -0.3535533845424652 );\nconst mat3 g1 = mat3( 0.3535533845424652, 0.5, 0.3535533845424652, 0, 0, 0, -0.3535533845424652, -0.5, -0.3535533845424652 );\nconst mat3 g2 = mat3( 0, 0.3535533845424652, -0.5, -0.3535533845424652, 0, 0.3535533845424652, 0.5, -0.3535533845424652, 0 );\nconst mat3 g3 = mat3( 0.5, -0.3535533845424652, 0, -0.3535533845424652, 0, 0.3535533845424652, 0, 0.3535533845424652, -0.5 );\nconst mat3 g4 = mat3( 0, -0.5, 0, 0.5, 0, 0.5, 0, -0.5, 0 );\nconst mat3 g5 = mat3( -0.5, 0, 0.5, 0, 0, 0, 0.5, 0, -0.5 );\nconst mat3 g6 = mat3( 0.1666666716337204, -0.3333333432674408, 0.1666666716337204, -0.3333333432674408, 0.6666666865348816, -0.3333333432674408, 0.1666666716337204, -0.3333333432674408, 0.1666666716337204 );\nconst mat3 g7 = mat3( -0.3333333432674408, 0.1666666716337204, -0.3333333432674408, 0.1666666716337204, 0.6666666865348816, 0.1666666716337204, -0.3333333432674408, 0.1666666716337204, -0.3333333432674408 );\nconst mat3 g8 = mat3( 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408 );\nvoid main() {\n  G[0] = g0,\n  G[1] = g1,\n  G[2] = g2,\n  G[3] = g3,\n  G[4] = g4,\n  G[5] = g5,\n  G[6] = g6,\n  G[7] = g7,\n  G[8] = g8;\n  mat3 I;\n  float cnv[9];\n  vec3 sample;\n  for (float i = 0.0; i < 3.0; i++) {\n    for (float j = 0.0; j < 3.0; j++) {\n      sample = texture2D(u_colorTexture, v_uv + texel * vec2(i - 1.0,j - 1.0)).rgb;\n      I[int(i)][int(j)] = length(sample);\n    }\n  }\n  for (int i = 0; i < 9; i++) {\n    float dp3 = dot(G[i][0], I[0]) + dot(G[i][1], I[1]) + dot(G[i][2], I[2]);\n    cnv[i] = dp3 * dp3;\n  }\n  float M = (cnv[0] + cnv[1]) + (cnv[2] + cnv[3]);\n  float S = (cnv[4] + cnv[5]) + (cnv[6] + cnv[7]) + (cnv[8] + M);\n  gl_FragColor = vec4(vec3(sqrt(M / S)), texture2D(u_colorTexture, v_uv).a);\n}" }, sobel: { "sobel.frag": "precision mediump float;\nuniform sampler2D u_colorTexture;\nvarying vec2 v_uv;\nuniform vec2 u_texSize;\nvec2 texel = vec2(1.0 / u_texSize.x, 1.0 / u_texSize.y);\nmat3 G[2];\nconst mat3 g0 = mat3( 1.0, 2.0, 1.0, 0.0, 0.0, 0.0, -1.0, -2.0, -1.0 );\nconst mat3 g1 = mat3( 1.0, 0.0, -1.0, 2.0, 0.0, -2.0, 1.0, 0.0, -1.0 );\nvoid main() {\n  mat3 I;\n  float cnv[2];\n  vec3 sample;\n  G[0] = g0;\n  G[1] = g1;\n  for (float i = 0.0; i < 3.0; i++) {\n    for (float j = 0.0; j < 3.0; j++) {\n      sample = texture2D( u_colorTexture, v_uv + texel * vec2(i-1.0,j-1.0) ).rgb;\n      I[int(i)][int(j)] = length(sample);\n    }\n  }\n  for (int i = 0; i < 2; i++) {\n    float dp3 = dot(G[i][0], I[0]) + dot(G[i][1], I[1]) + dot(G[i][2], I[2]);\n    cnv[i] = dp3 * dp3;\n  }\n  gl_FragColor = vec4(vec3(0.5 * sqrt(cnv[0] * cnv[0] + cnv[1] * cnv[1])), texture2D(u_colorTexture, v_uv).a);\n}" } }, "edge-enhance": { "edge-enhance.frag": "precision mediump float;\nuniform sampler2D u_colorTexture;\nvarying vec2 v_uv;\nuniform vec2 u_texSize;\nvec2 texel = vec2(1.0 / u_texSize.x, 1.0 / u_texSize.y);\nmat3 G[2];\nconst mat3 g0 = mat3( 1.0, 0.0, -1.0, 1.0, 0.0, -1.0, 1.0, 0.0, -1.0 );\nconst mat3 g1 = mat3( 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, -1.0, -1.0, -1.0 );\nvoid main() {\n  mat3 I;\n  float cnv[2];\n  vec3 sample;\n  G[0] = g0;\n  G[1] = g1;\n  for (float i = 0.0; i < 3.0; i++) {\n    for (float j = 0.0; j < 3.0; j++) {\n      sample = texture2D( u_colorTexture, v_uv + texel * vec2(i-1.0,j-1.0) ).rgb;\n      I[int(i)][int(j)] = length(sample);\n    }\n  }\n  for (int i = 0; i < 2; i++) {\n    float dp3 = dot(G[i][0], I[0]) + dot(G[i][1], I[1]) + dot(G[i][2], I[2]);\n    cnv[i] = dp3 * dp3;\n  }\n  vec4 color = texture2D(u_colorTexture, v_uv);\n  gl_FragColor = vec4(0.5 * sqrt(cnv[0] * cnv[0] + cnv[1] * cnv[1]) * color);\n}" }, filterEffect: { "filterEffect.frag": "precision mediump float;\nuniform sampler2D u_colorTexture;\nuniform mat4 u_coefficients;\nvarying vec2 v_uv;\nvoid main() {\n  vec4 color = texture2D(u_colorTexture, v_uv);\n  vec4 rgbw = u_coefficients * vec4(color.a > 0.0 ? color.rgb / color.a : vec3(0.0), 1.0);\n  float a = color.a;\n  gl_FragColor = vec4(a * rgbw.rgb, a);\n}" }, pp: { "pp.vert": "precision mediump float;\nattribute vec2 a_position;\nvarying vec2 v_uv;\nvoid main() {\n  gl_Position = vec4(a_position, 0.0, 1.0);\n  v_uv = (a_position + 1.0) / 2.0;\n}" } }, raster: { bitmap: { "bitmap.frag": "precision mediump float;\nvarying highp vec2 v_texcoord;\nuniform sampler2D u_texture;\nuniform highp vec2 u_coordScale;\nuniform lowp float u_opacity;\n#include <filtering/bicubic.glsl>\nvoid main() {\n#ifdef BICUBIC\n  vec4 color = sampleBicubicBSpline(u_texture, v_texcoord, u_coordScale);\n#else\n  vec4 color = texture2D(u_texture, v_texcoord);\n#endif\n  float alpha = u_opacity * color.a;\n  gl_FragColor = vec4(alpha * color.rgb, alpha);\n}", "bitmap.vert": "precision mediump float;\nattribute vec2 a_pos;\nuniform highp mat3 u_dvsMat3;\nuniform highp vec2 u_coordScale;\nvarying highp vec2 v_texcoord;\nvoid main()\n{\n  v_texcoord = a_pos;\n  gl_Position = vec4(u_dvsMat3 * vec3(a_pos * u_coordScale, 1.0), 1.0);\n}" }, common: { "common.glsl": "uniform sampler2D u_image;\nuniform int u_bandCount;\nuniform bool u_isFloatTexture;\nuniform bool u_flipY;\nuniform float u_opacity;\nuniform int u_resampling;\nuniform vec2 u_srcImageSize;\n#ifdef APPLY_PROJECTION\n#include <raster/common/projection.glsl>\n#endif\n#ifdef BICUBIC\n#include <filtering/bicubic.glsl>\n#endif\n#ifdef BILINEAR\n#include <filtering/bilinear.glsl>\n#endif\nvec2 getPixelLocation(vec2 coords) {\n  vec2 targetLocation = u_flipY ? vec2(coords.s, 1.0 - coords.t) : coords;\n#ifdef APPLY_PROJECTION\n  targetLocation = projectPixelLocation(targetLocation);\n#endif\n  return targetLocation;\n}\nbool isOutside(vec2 coords){\n   if (coords.t>1.00001 ||coords.t<-0.00001 || coords.s>1.00001 ||coords.s<-0.00001) {\n     return true;\n   } else {\n     return false;\n   }\n}\nvec4 getPixel(vec2 pixelLocation) {\n#ifdef BICUBIC\n  vec4 color = sampleBicubicBSpline(u_image, pixelLocation, u_srcImageSize);\n#elif defined(BILINEAR)\n  vec4 color = sampleBilinear(u_image, pixelLocation, u_srcImageSize);\n#else\n  vec4 color = texture2D(u_image, pixelLocation);\n#endif\n  return color;\n}", "contrastBrightness.glsl": "uniform float u_contrastOffset;\nuniform float u_brightnessOffset;\nvec4 adjustContrastBrightness(vec4 currentPixel, bool isFloat) {\n  vec4 pixelValue = isFloat ? currentPixel * 255.0 : currentPixel;\n  float maxI = 255.0;\n  float mid = 128.0;\n  float c = u_contrastOffset;\n  float b = u_brightnessOffset;\n  vec4 v;\n  if (c > 0.0 && c < 100.0) {\n    v = (200.0 * pixelValue - 100.0 * maxI + 2.0 * maxI * b) / (2.0 * (100.0 - c)) + mid;\n  } else if (c <= 0.0 && c > -100.0) {\n    v = (200.0 * pixelValue - 100.0 * maxI + 2.0 * maxI * b) * (100.0 + c) / 20000.0 + mid;\n  } else if (c == 100.0) {\n    v = (200.0 * pixelValue - 100.0 * maxI + (maxI + 1.0) * (100.0 - c) + 2.0 * maxI * b);\n    v = (sign(v) + 1.0) / 2.0;\n  } else if (c == -100.0) {\n    v = vec4(mid, mid, mid, currentPixel.a);\n  }\n  return vec4(v.r / 255.0, v.g / 255.0, v.b / 255.0, currentPixel.a);\n}", "projection.glsl": "uniform sampler2D u_transformGrid;\nuniform vec2 u_transformSpacing;\nuniform vec2 u_transformGridSize;\nuniform vec2 u_targetImageSize;\nvec2 projectPixelLocation(vec2 coords) {\n  vec2 index_image = floor(coords * u_targetImageSize);\n  vec2 oneTransformPixel = vec2(0.25 / u_transformGridSize.s, 1.0 / u_transformGridSize.t);\n  vec2 index_transform = floor(index_image / u_transformSpacing) / u_transformGridSize;\n  vec2 pos = fract((index_image + vec2(0.5, 0.5)) / u_transformSpacing);\n  vec2 srcLocation;\n  vec2 transform_location = index_transform + oneTransformPixel * 0.5;\n  if (pos.s <= pos.t) {\n    vec4 ll_abc = texture2D(u_transformGrid, vec2(transform_location.s, transform_location.t));\n    vec4 ll_def = texture2D(u_transformGrid, vec2(transform_location.s + oneTransformPixel.s, transform_location.t));\n    srcLocation.s = dot(ll_abc.rgb, vec3(pos, 1.0));\n    srcLocation.t = dot(ll_def.rgb, vec3(pos, 1.0));\n  } else {\n    vec4 ur_abc = texture2D(u_transformGrid, vec2(transform_location.s + 2.0 * oneTransformPixel.s, transform_location.t));\n    vec4 ur_def = texture2D(u_transformGrid, vec2(transform_location.s + 3.0 * oneTransformPixel.s, transform_location.t));\n    srcLocation.s = dot(ur_abc.rgb, vec3(pos, 1.0));\n    srcLocation.t = dot(ur_def.rgb, vec3(pos, 1.0));\n  }\n  return srcLocation;\n}" }, hillshade: { "hillshade.frag": "precision mediump float;\nvarying highp vec2 v_texcoord;\n#include <raster/common/common.glsl>\nuniform int u_hillshadeType;\nuniform float u_sinZcosAs[6];\nuniform float u_sinZsinAs[6];\nuniform float u_cosZs[6];\nuniform float u_weights[6];\nuniform vec2 u_factor;\nuniform float u_minValue;\nuniform float u_maxValue;\n#include <raster/lut/colorize.glsl>\nfloat getNeighborHoodAlpha(float a, float b, float c, float d, float e, float f, float g, float h, float i){\n  if (a == 0.0 || a == 0.0 || a==0.0 || a == 0.0 || a == 0.0 || a==0.0 || a == 0.0 || a == 0.0 || a==0.0) {\n    return 0.0;\n  }\n  else {\n    return e;\n  }\n}\nvec3 rgb2hsv(vec3 c) {\n  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\n  vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);\n  vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);\n  float d = q.x - min(q.w, q.y);\n  float e = 1.0e-10;\n  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);\n}\nvec3 hsv2rgb(vec3 c) {\n  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n}\nvec4 overlay(float val, float minValue, float maxValue, float hillshade) {\n  val = clamp((val - minValue) / (maxValue - minValue), 0.0, 1.0);\n  vec4 rgb = colorize(vec4(val, val, val, 1.0), 255.0);\n  vec3 hsv = rgb2hsv(rgb.xyz);\n  hsv.z = hillshade;\n  return vec4(hsv2rgb(hsv), 1.0) * rgb.a;\n}\nvoid main() {\n  vec2 pixelLocation = getPixelLocation(v_texcoord);\n  if (isOutside(pixelLocation)) {\n     gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\n     return;\n  }\n  vec4 currentPixel = getPixel(pixelLocation);\n  if (currentPixel.a == 0.0) {\n    gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\n    return;\n  }\n  vec2 axy = vec2(-1.0, -1.0);\n  vec2 bxy = vec2(0.0, -1.0);\n  vec2 cxy = vec2(1.0, -1.0);\n  vec2 dxy = vec2(-1.0, 0.0);\n  vec2 fxy = vec2(1.0, 0.0);\n  vec2 gxy = vec2(-1.0, 1.0);\n  vec2 hxy = vec2(0.0, 1.0);\n  vec2 ixy = vec2(1.0, 1.0);\n  vec2 onePixel = 1.0 / u_srcImageSize;\n  if (pixelLocation.s < onePixel.s) {\n    axy[0] = 1.0;\n    dxy[0] = 1.0;\n    gxy[0] = 1.0;\n  }\n  if (pixelLocation.t < onePixel.t) {\n    axy[1] = 1.0;\n    bxy[1] = 1.0;\n    cxy[1] = 1.0;\n  }\n  if (pixelLocation.s > 1.0 - onePixel.s) {\n    cxy[0] = -1.0;\n    fxy[0] = -1.0;\n    ixy[0] = -1.0;\n  }\n  if (pixelLocation.t > 1.0 - onePixel.t) {\n    gxy[1] = -1.0;\n    hxy[1] = -1.0;\n    ixy[1] = -1.0;\n  }\n  vec4 va = texture2D(u_image, pixelLocation + onePixel * axy);\n  vec4 vb = texture2D(u_image, pixelLocation + onePixel * bxy);\n  vec4 vc = texture2D(u_image, pixelLocation + onePixel * cxy);\n  vec4 vd = texture2D(u_image, pixelLocation + onePixel * dxy);\n  vec4 ve = texture2D(u_image, pixelLocation);\n  vec4 vf = texture2D(u_image, pixelLocation + onePixel * fxy);\n  vec4 vg = texture2D(u_image, pixelLocation + onePixel * gxy);\n  vec4 vh = texture2D(u_image, pixelLocation + onePixel * hxy);\n  vec4 vi = texture2D(u_image, pixelLocation + onePixel * ixy);\n  float dzx = (vc + 2.0 * vf + vi - va - 2.0 * vd - vg).r * u_factor.s;\n  float dzy = (vg + 2.0 * vh + vi - va - 2.0 * vb - vc).r * u_factor.t;\n  float dzd = sqrt(1.0 + dzx * dzx + dzy * dzy);\n  float hillshade = 0.0;\n  if (u_hillshadeType == 0){\n	   float cosDelta = u_sinZsinAs[0] * dzy - u_sinZcosAs[0] * dzx;\n     float z = (u_cosZs[0] + cosDelta) / dzd;\n     if (z < 0.0)  z = 0.0;\n	   hillshade = z;\n  } else {\n	  for (int k = 0; k < 6; k++) {\n		 float cosDelta = u_sinZsinAs[k] * dzy - u_sinZcosAs[k] * dzx;\n		 float z = (u_cosZs[k] + cosDelta) / dzd;\n		 if (z < 0.0) z = 0.0;\n     hillshade = hillshade + z * u_weights[k];\n		 if (k == 5) break;\n    }\n  }\n  float alpha = getNeighborHoodAlpha(va.a, vb.a, vc.a, vd.a, ve.a, vf.a, vg.a, vh.a, vi.a);\n#ifdef APPLY_COLORMAP\n  gl_FragColor = overlay(ve.r, u_minValue, u_maxValue, hillshade) * alpha * u_opacity;\n#else\n  gl_FragColor = vec4(hillshade, hillshade, hillshade, 1.0) * alpha * u_opacity;\n#endif\n}", "hillshade.vert": "precision mediump float;\nattribute vec2 a_pos;\nuniform highp mat3 u_dvsMat3;\nuniform highp vec2 u_coordScale;\nvarying highp vec2 v_texcoord;\nvoid main()\n{\n  v_texcoord = a_pos;\n  gl_Position = vec4(u_dvsMat3 * vec3(a_pos * u_coordScale, 1.0), 1.0);\n}" }, lut: { "colorize.glsl": "uniform sampler2D u_colormap;\nuniform float u_colormapOffset;\nuniform float u_colormapMaxIndex;\nvec4 colorize(vec4 currentPixel, float scaleFactor) {\n  float clrIndex = clamp(currentPixel.r * scaleFactor - u_colormapOffset, 0.0, u_colormapMaxIndex);\n  vec2 clrPosition = vec2((clrIndex + 0.5) / (u_colormapMaxIndex + 1.0), 0.0);\n  vec4 color = texture2D(u_colormap, clrPosition);\n  vec4 result = vec4(color.rgb, color.a * currentPixel.a);\n  return result;\n}", "lut.frag": "precision mediump float;\nvarying highp vec2 v_texcoord;\n#include <raster/common/common.glsl>\n#include <raster/lut/colorize.glsl>\nvoid main() {\n  vec2 pixelLocation = getPixelLocation(v_texcoord);\n  if (isOutside(pixelLocation)) {\n     gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\n     return;\n  }\n  vec4 currentPixel = getPixel(pixelLocation);\n  vec4 result = colorize(currentPixel, 1.0);\n  gl_FragColor = vec4(result.xyz, 1.0) * result.a * u_opacity;\n}", "lut.vert": "precision mediump float;\nattribute vec2 a_pos;\nuniform highp mat3 u_dvsMat3;\nuniform highp vec2 u_coordScale;\nuniform highp float u_scale;\nuniform highp vec2 u_offset;\nvarying highp vec2 v_texcoord;\nvoid main()\n{\n  v_texcoord = a_pos * u_scale + u_offset;\n  gl_Position = vec4(u_dvsMat3 * vec3(a_pos * u_coordScale, 1.0), 1.0);\n}" }, stretch: { "stretch.frag": "precision mediump float;\nvarying highp vec2 v_texcoord;\n#include <raster/common/common.glsl>\nuniform float u_minCutOff[3];\nuniform float u_maxCutOff[3];\nuniform float u_minOutput;\nuniform float u_maxOutput;\nuniform float u_factor[3];\nuniform bool u_useGamma;\nuniform float u_gamma[3];\nuniform float u_gammaCorrection[3];\n#include <raster/lut/colorize.glsl>\nfloat stretchOneValue(float val, float minCutOff, float maxCutOff, float minOutput, float maxOutput, float factor, bool useGamma, float gamma, float gammaCorrection) {\n  if (val >= maxCutOff) {\n    return maxOutput;\n  } else if (val <= minCutOff) {\n    return minOutput;\n  }\n  float stretchedVal;\n  if (useGamma) {\n  	float tempf = 1.0;\n	  float outRange = maxOutput - minOutput;\n	  float relativeVal = (val - minCutOff) / (maxCutOff - minCutOff);\n	  if (gamma > 1.0) {\n      tempf -= pow(1.0 / outRange, relativeVal * gammaCorrection);\n    }\n    stretchedVal = (tempf * outRange * pow(relativeVal, 1.0 / gamma) + minOutput) / 255.0;\n  } else {\n    stretchedVal = minOutput + (val - minCutOff) * factor;\n  }\n  return stretchedVal;\n}\nvoid main() {\n  vec2 pixelLocation = getPixelLocation(v_texcoord);\n  if (isOutside(pixelLocation)) {\n     gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\n     return;\n  }\n  vec4 currentPixel = getPixel(pixelLocation);\n#ifdef NOOP\n  gl_FragColor = vec4(currentPixel.rgb, 1.0) * currentPixel.a * u_opacity;\n  return;\n#endif\n  if (u_bandCount == 1) {\n    float grayVal = stretchOneValue(currentPixel.r, u_minCutOff[0], u_maxCutOff[0], u_minOutput, u_maxOutput, u_factor[0], u_useGamma, u_gamma[0], u_gammaCorrection[0]);\n#ifdef APPLY_COLORMAP\n      vec4 result = colorize(vec4(grayVal, grayVal, grayVal, 1.0), u_useGamma ? 255.0 : 1.0);\n      gl_FragColor = vec4(result.xyz, 1.0) * result.a * currentPixel.a * u_opacity;\n#else\n      gl_FragColor = vec4(grayVal, grayVal, grayVal, 1.0) * currentPixel.a * u_opacity;\n#endif\n  } else {\n    float redVal = stretchOneValue(currentPixel.r, u_minCutOff[0], u_maxCutOff[0], u_minOutput, u_maxOutput, u_factor[0], u_useGamma, u_gamma[0], u_gammaCorrection[0]);\n    float greenVal = stretchOneValue(currentPixel.g, u_minCutOff[1], u_maxCutOff[1], u_minOutput, u_maxOutput, u_factor[1], u_useGamma, u_gamma[1], u_gammaCorrection[1]);\n    float blueVal = stretchOneValue(currentPixel.b, u_minCutOff[2], u_maxCutOff[2], u_minOutput, u_maxOutput, u_factor[2], u_useGamma, u_gamma[2], u_gammaCorrection[2]);\n    gl_FragColor = vec4(redVal, greenVal, blueVal, 1.0) * currentPixel.a * u_opacity;\n  }\n}", "stretch.vert": "precision mediump float;\nattribute vec2 a_pos;\nuniform highp mat3 u_dvsMat3;\nuniform highp vec2 u_coordScale;\nuniform highp float u_scale;\nuniform highp vec2 u_offset;\nvarying highp vec2 v_texcoord;\nvoid main()\n{\n  v_texcoord = a_pos * u_scale + u_offset;\n  gl_Position = vec4(u_dvsMat3 * vec3(a_pos * u_coordScale, 1.0), 1.0);\n}" } }, stencil: { "stencil.frag": "void main() {\n  gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n}", "stencil.vert": "attribute vec2 a_pos;\nvoid main() {\n  gl_Position = vec4(a_pos, 0.0, 1.0);\n}" }, tileInfo: { "tileInfo.frag": "uniform mediump sampler2D u_texture;\nvarying mediump vec2 v_tex;\nvoid main(void) {\n  lowp vec4 color = texture2D(u_texture, v_tex);\n  gl_FragColor = 0.75 * color;\n}", "tileInfo.vert": "attribute vec2 a_pos;\nuniform highp mat3 u_dvsMat3;\nuniform mediump float u_depth;\nuniform mediump vec2 u_coord_ratio;\nuniform mediump vec2 u_delta;\nuniform mediump vec2 u_dimensions;\nvarying mediump vec2 v_tex;\nvoid main() {\n  mediump vec2 offset = u_coord_ratio * vec2(u_delta + a_pos * u_dimensions);\n  vec3 v_pos = u_dvsMat3 * vec3(offset, 1.0);\n  gl_Position = vec4(v_pos.xy, 0.0, 1.0);\n  v_tex = a_pos;\n}" }, util: { "encoding.glsl": "const vec4 rgba2float_factors = vec4(\n    255.0 / (256.0),\n    255.0 / (256.0 * 256.0),\n    255.0 / (256.0 * 256.0 * 256.0),\n    255.0 / (256.0 * 256.0 * 256.0 * 256.0)\n  );\nfloat rgba2float(vec4 rgba) {\n  return dot(rgba, rgba2float_factors);\n}" } };
function o$3(r2) {
  let o2 = e$1;
  return r2.split("/").forEach((r3) => {
    o2 && (o2 = o2[r3]);
  }), o2;
}
const t = new e$2(o$3);
function s$2(r2) {
  return t.resolveIncludes(r2);
}
const e = { shaders: { vertexShader: s$2("background/background.vert"), fragmentShader: s$2("background/background.frag") }, attributes: { a_pos: 0 } };
const i$6 = () => re("clip", { geometry: [{ location: 0, name: "a_pos", count: 2, type: 5122 }] });
class a$2 extends r$3 {
  constructor() {
    super(...arguments), this._color = t$1(0, 1, 0, 1);
  }
  dispose() {
    this._program && this._program.dispose();
  }
  prepareState({ context: t2 }) {
    t2.setStencilTestEnabled(true), t2.setBlendingEnabled(false), t2.setFaceCullingEnabled(false), t2.setColorMask(false, false, false, false), t2.setStencilOp(7680, 7680, 7681), t2.setStencilWriteMask(255), t2.setStencilFunction(519, 0, 255);
  }
  draw(t2, s2) {
    const { context: e$12, state: a2 } = t2;
    this._program || (this._program = t$2(e$12, e));
    const n2 = this._program, m2 = i$6(), c2 = s2.getVAO(e$12, a2, m2.attributes, m2.bufferLayouts);
    e$12.bindProgram(this._program), n2.setUniform2fv("u_coord_range", [1, 1]), n2.setUniform4fv("u_color", this._color), n2.setUniformMatrix3fv("u_dvsMat3", a2.displayMat3), e$12.bindVAO(c2), e$12.drawElements(4, c2.indexBuffer.size, 5125, 0), e$12.bindVAO();
  }
}
const r$2 = { shaders: { vertexShader: s$2("tileInfo/tileInfo.vert"), fragmentShader: s$2("tileInfo/tileInfo.frag") }, attributes: { a_pos: 0 } };
const l$2 = 300, u$3 = 32;
class m$2 extends r$3 {
  constructor() {
    super(...arguments), this._color = t$1(1, 0, 0, 1);
  }
  dispose() {
    this._outlineProgram && (this._outlineProgram.dispose(), this._outlineProgram = null), this._tileInfoProgram && (this._tileInfoProgram.dispose(), this._tileInfoProgram = null), this._outlineVertexArrayObject && (this._outlineVertexArrayObject.dispose(), this._outlineVertexArrayObject = null), this._tileInfoVertexArrayObject && (this._tileInfoVertexArrayObject.dispose(), this._tileInfoVertexArrayObject = null), this._canvas = null;
  }
  prepareState({ context: t2 }) {
    t2.setBlendingEnabled(true), t2.setBlendFunctionSeparate(1, 771, 1, 771), t2.setColorMask(true, true, true, true), t2.setStencilWriteMask(0), t2.setStencilTestEnabled(false);
  }
  draw(t2, e2) {
    const { context: r2 } = t2;
    if (!e2.isReady)
      return;
    this._loadWGLResources(r2), r2.bindVAO(this._outlineVertexArrayObject), r2.bindProgram(this._outlineProgram), this._outlineProgram.setUniformMatrix3fv("u_dvsMat3", e2.transforms.dvs), this._outlineProgram.setUniform2f("u_coord_range", e2.coordRange[0], e2.coordRange[1]), this._outlineProgram.setUniform1f("u_depth", 0), this._outlineProgram.setUniform4fv("u_color", this._color), r2.drawArrays(3, 0, 4), r2.bindVAO();
    const i2 = this._getTexture(r2, e2);
    i2 && (r2.bindVAO(this._tileInfoVertexArrayObject), r2.bindProgram(this._tileInfoProgram), r2.bindTexture(i2, 0), this._tileInfoProgram.setUniformMatrix3fv("u_dvsMat3", e2.transforms.dvs), this._tileInfoProgram.setUniform1f("u_depth", 0), this._tileInfoProgram.setUniform2f("u_coord_ratio", e2.coordRange[0] / e2.size[0], e2.coordRange[1] / e2.size[1]), this._tileInfoProgram.setUniform2f("u_delta", 8, 8), this._tileInfoProgram.setUniform2f("u_dimensions", i2.descriptor.width, i2.descriptor.height), r2.drawArrays(5, 0, 4), r2.bindVAO());
  }
  _loadWGLResources(t2) {
    if (this._outlineProgram && this._tileInfoProgram)
      return;
    const r2 = t$2(t2, e), s2 = t$2(t2, r$2), l2 = { geometry: [{ name: "a_pos", count: 2, type: 5120, offset: 0, stride: 2, normalized: false, divisor: 0 }] }, u2 = new Int8Array([0, 0, 1, 0, 1, 1, 0, 1]), m2 = s$4.createVertex(t2, 35044, u2), c2 = new s$5(t2, e.attributes, l2, { geometry: m2 }), f2 = new Int8Array([0, 0, 1, 0, 0, 1, 1, 1]), d2 = s$4.createVertex(t2, 35044, f2), g2 = new s$5(t2, r$2.attributes, l2, { geometry: d2 });
    this._outlineProgram = r2, this._tileInfoProgram = s2, this._outlineVertexArrayObject = c2, this._tileInfoVertexArrayObject = g2;
  }
  _getTexture(t2, e2) {
    if (e2.texture && e2.triangleCountReportedInDebug === e2.triangleCount)
      return e2.texture;
    e2.triangleCountReportedInDebug = e2.triangleCount, this._canvas || (this._canvas = document.createElement("canvas"), this._canvas.setAttribute("id", "canvas2d"), this._canvas.setAttribute("width", `${l$2}`), this._canvas.setAttribute("height", `${u$3}`), this._canvas.setAttribute("style", "display:none"));
    const i2 = e2.triangleCount;
    let o2 = e2.key.id;
    e2.triangleCount > 0 && (o2 += `, ${i2}`);
    const s2 = this._canvas, n2 = s2.getContext("2d");
    return n2.font = "24px sans-serif", n2.textAlign = "left", n2.textBaseline = "top", n2.clearRect(0, 0, l$2, u$3), i2 > 1e5 ? (n2.fillStyle = "red", n2.fillRect(0, 0, l$2, u$3), n2.fillStyle = "black") : (n2.clearRect(0, 0, l$2, u$3), n2.fillStyle = "blue"), n2.fillText(o2, 0, 0), e2.texture = new o$4(t2, { target: 3553, pixelFormat: 6408, dataType: 5121, samplingMode: 9728, wrapMode: 33071 }, s2), e2.texture;
  }
}
class a$1 extends r$3 {
  constructor() {
    super(...arguments), this._color = t$1(1, 0, 0, 1), this._initialized = false;
  }
  dispose() {
    this._solidProgram && (this._solidProgram.dispose(), this._solidProgram = null), this._solidVertexArrayObject && (this._solidVertexArrayObject.dispose(), this._solidVertexArrayObject = null);
  }
  prepareState({ context: t2 }, r2) {
    t2.setDepthWriteEnabled(false), t2.setDepthTestEnabled(false), t2.setStencilTestEnabled(true), t2.setBlendingEnabled(false), t2.setColorMask(false, false, false, false), t2.setStencilOp(7680, 7680, 7681), t2.setStencilWriteMask(255), t2.setStencilFunctionSeparate(1032, 516, r2.stencilRef, 255);
  }
  draw(t2, r2) {
    const { context: e2 } = t2;
    this._initialized || this._initialize(e2), e2.bindVAO(this._solidVertexArrayObject), e2.bindProgram(this._solidProgram), this._solidProgram.setUniformMatrix3fv("u_dvsMat3", r2.transforms.dvs), this._solidProgram.setUniform2fv("u_coord_range", r2.coordRange), this._solidProgram.setUniform1f("u_depth", 0), this._solidProgram.setUniform4fv("u_color", this._color), e2.drawArrays(5, 0, 4), e2.bindVAO();
  }
  _initialize(t2) {
    if (this._initialized)
      return true;
    const s2 = t$2(t2, e);
    if (!s2)
      return false;
    const a2 = { geometry: [{ name: "a_pos", count: 2, type: 5120, offset: 0, stride: 2, normalized: false, divisor: 0 }] }, n2 = new Int8Array([0, 0, 1, 0, 0, 1, 1, 1]), l2 = s$4.createVertex(t2, 35044, n2), d2 = new s$5(t2, e.attributes, a2, { geometry: l2 });
    return this._solidProgram = s2, this._solidVertexArrayObject = d2, this._initialized = true, true;
  }
}
class f$1 extends r$3 {
  constructor() {
    super(...arguments), this._color = t$1(1, 0, 0, 1), this._patternMatrix = r$5(), this._programOptions = { id: false, pattern: false };
  }
  dispose() {
    this._vao && (this._vao.dispose(), this._vao = null);
  }
  drawMany(t2, o2) {
    const { context: i2, painter: s2, styleLayerUID: c2 } = t2;
    this._loadWGLResources(t2);
    const f2 = t2.displayLevel, m2 = t2.styleLayer, l2 = m2.backgroundMaterial, u2 = s2.vectorTilesMaterialManager, p2 = m2.getPaintValue("background-color", f2), _ = m2.getPaintValue("background-opacity", f2), d2 = m2.getPaintValue("background-pattern", f2), h = d2 !== void 0, g2 = p2[3] * _, b2 = 1 | window.devicePixelRatio, v = t2.spriteMosaic;
    let M$12;
    const x2 = b2 > W ? 2 : 1, y2 = t2.drawPhase === I.HITTEST, j = this._programOptions;
    j.id = y2, j.pattern = h;
    const U$1 = u2.getMaterialProgram(i2, l2, j);
    if (i2.bindVAO(this._vao), i2.bindProgram(U$1), h) {
      if (M$12 = v.getMosaicItemPosition(d2, true), !M$12)
        return;
      U$1.setUniform1f("u_opacity", _), U$1.setUniform2f("u_pattern_tl", M$12.tl[0], M$12.tl[1]), U$1.setUniform2f("u_pattern_br", M$12.br[0], M$12.br[1]), U$1.setUniform1i("u_texture", U), v.bind(i2, 9729, M$12.page, U);
    } else
      this._color[0] = g2 * p2[0], this._color[1] = g2 * p2[1], this._color[2] = g2 * p2[2], this._color[3] = g2, U$1.setUniform4fv("u_color", this._color);
    if (U$1.setUniform1f("u_depth", m2.z || 0), y2) {
      const t3 = M(c2 + 1);
      U$1.setUniform4fv("u_id", t3);
    }
    for (const r2 of o2) {
      if (U$1.setUniform1f("u_coord_range", r2.coordRange[0]), U$1.setUniformMatrix3fv("u_dvsMat3", r2.transforms.dvs), h) {
        const t3 = Math.max(__pow(2, Math.round(f2) - r2.key.level), 1), e2 = x2 * r2.size[0] * t3, o3 = e2 / M$12.size[0], i3 = e2 / M$12.size[1];
        this._patternMatrix[0] = o3, this._patternMatrix[4] = i3, U$1.setUniformMatrix3fv("u_pattern_matrix", this._patternMatrix);
      }
      i2.setStencilFunction(514, r2.stencilRef, 255), i2.drawArrays(5, 0, 4);
    }
  }
  _loadWGLResources(t2) {
    if (this._vao)
      return;
    const { context: r2, styleLayer: e2 } = t2, o2 = e2.backgroundMaterial, a2 = new Int8Array([0, 0, 1, 0, 0, 1, 1, 1]), n2 = s$4.createVertex(r2, 35044, a2), c2 = new s$5(r2, o2.getAttributeLocations(), o2.getLayoutInfo(), { geometry: n2 });
    this._vao = c2;
  }
}
class i$5 extends r$3 {
  constructor() {
    super(...arguments), this._programOptions = { id: false };
  }
  dispose() {
  }
  drawMany(a2, i2) {
    const { context: n2, displayLevel: s2, requiredLevel: o2, state: l2, drawPhase: c2, painter: m2, styleLayerUID: d2 } = a2, f2 = a2.styleLayer, u2 = f2.circleMaterial, p2 = m2.vectorTilesMaterialManager, y2 = 1.2, g2 = f2.getPaintValue("circle-translate", s2), v = f2.getPaintValue("circle-translate-anchor", s2), M$12 = c2 === I.HITTEST, _ = this._programOptions;
    _.id = M$12;
    const x2 = p2.getMaterialProgram(n2, u2, _);
    n2.bindProgram(x2), x2.setUniformMatrix3fv("u_displayMat3", v === 1 ? l2.displayMat3 : l2.displayViewMat3), x2.setUniform2fv("u_circleTranslation", g2), x2.setUniform1f("u_depth", f2.z), x2.setUniform1f("u_antialiasingWidth", y2);
    let U2 = -1;
    if (M$12) {
      const e2 = M(d2 + 1);
      x2.setUniform4fv("u_id", e2);
    }
    for (const t2 of i2) {
      if (!t2.layerData.has(d2))
        continue;
      t2.key.level !== U2 && (U2 = t2.key.level, u2.setDataUniforms(x2, s2, f2, U2));
      const r2 = t2.layerData.get(d2);
      r2.prepareForRendering(n2);
      const a3 = r2.circleVertexArrayObject;
      t$3(a3) || (n2.bindVAO(a3), x2.setUniformMatrix3fv("u_dvsMat3", t2.transforms.dvs), o2 !== t2.key.level ? n2.setStencilFunction(514, t2.stencilRef, 255) : n2.setStencilFunction(516, 255, 255), n2.drawElements(4, r2.circleIndexCount, 5125, Uint32Array.BYTES_PER_ELEMENT * r2.circleIndexStart), t2.triangleCount += r2.circleIndexCount / 3);
    }
  }
}
const o$2 = 1 / 65536;
class s$1 extends r$3 {
  constructor() {
    super(...arguments), this._fillProgramOptions = { id: false, pattern: false }, this._outlineProgramOptions = { id: false }, this._patternMatrix = r$5();
  }
  dispose() {
  }
  drawMany(t2, e2) {
    const { displayLevel: i2, drawPhase: a2, renderPass: l2, styleLayerUID: o2 } = t2, s2 = t2.styleLayer, f2 = s2.getPaintValue("fill-pattern", i2), u2 = f2 !== void 0, d2 = !u2 && s2.getPaintValue("fill-antialias", i2);
    let p2 = true, m2 = 1;
    if (!u2) {
      const t3 = s2.getPaintProperty("fill-color"), e3 = s2.getPaintProperty("fill-opacity");
      if (!(t3 != null && t3.isDataDriven || e3 != null && e3.isDataDriven)) {
        const t4 = s2.getPaintValue("fill-color", i2);
        m2 = s2.getPaintValue("fill-opacity", i2) * t4[3], m2 >= 1 && (p2 = false);
      }
    }
    if (p2 && l2 === "opaque")
      return;
    let c2;
    a2 === I.HITTEST && (c2 = M(o2 + 1));
    const _ = s2.getPaintValue("fill-translate", i2), y2 = s2.getPaintValue("fill-translate-anchor", i2);
    (p2 || l2 !== "translucent") && this._drawFill(t2, o2, s2, e2, _, y2, f2, c2);
    const M$12 = !s2.hasDataDrivenOutlineColor && s2.outlineUsesFillColor && m2 < 1;
    d2 && l2 !== "opaque" && !M$12 && this._drawOutline(t2, o2, s2, e2, _, y2, c2);
  }
  _drawFill(a2, r2, l2, s2, f2, u2, d2, p2) {
    const { context: m2, displayLevel: c2, state: _, drawPhase: y2, painter: M2, pixelRatio: g2, spriteMosaic: v } = a2, x2 = l2.fillMaterial, P = M2.vectorTilesMaterialManager, h = d2 !== void 0, U$1 = g2 > W ? 2 : 1;
    let T;
    const E2 = y2 === I.HITTEST, b2 = this._fillProgramOptions;
    b2.id = E2, b2.pattern = h;
    const w2 = P.getMaterialProgram(m2, x2, b2);
    if (m2.bindProgram(w2), h) {
      if (T = v.getMosaicItemPosition(d2, true), !T)
        return void m2.bindProgram();
      w2.setUniform2f("u_pattern_tl", T.tl[0], T.tl[1]), w2.setUniform2f("u_pattern_br", T.br[0], T.br[1]), w2.setUniform1i("u_texture", U), v.bind(m2, 9729, T.page, U);
    }
    w2.setUniformMatrix3fv("u_displayMat3", u2 === 1 ? _.displayMat3 : _.displayViewMat3), w2.setUniform2fv("u_fillTranslation", f2), w2.setUniform1f("u_depth", l2.z + o$2), E2 && w2.setUniform4fv("u_id", p2);
    let D2 = -1;
    for (const e2 of s2) {
      if (!e2.layerData.has(r2))
        continue;
      e2.key.level !== D2 && (D2 = e2.key.level, x2.setDataUniforms(w2, c2, l2, D2));
      const i2 = e2.layerData.get(r2);
      i2.prepareForRendering(m2);
      const a3 = i2.fillVertexArrayObject;
      if (!t$3(a3)) {
        if (m2.bindVAO(a3), w2.setUniformMatrix3fv("u_dvsMat3", e2.transforms.dvs), h) {
          const t2 = Math.max(__pow(2, Math.round(c2) - e2.key.level), 1), i3 = e2.coordRange[0] / (U$1 * e2.size[0] * t2), a4 = 1 / (T.size[0] * i3), r3 = 1 / (T.size[1] * i3);
          this._patternMatrix[0] = a4, this._patternMatrix[4] = r3, w2.setUniformMatrix3fv("u_pattern_matrix", this._patternMatrix);
        }
        m2.setStencilFunction(514, e2.stencilRef, 255), m2.drawElements(4, i2.fillIndexCount, 5125, Uint32Array.BYTES_PER_ELEMENT * i2.fillIndexStart), e2.triangleCount += i2.fillIndexCount / 3;
      }
    }
  }
  _drawOutline(e2, i2, a2, r2, l2, s2, f2) {
    const { context: u2, displayLevel: d2, state: p2, drawPhase: m2, painter: c2, pixelRatio: _ } = e2, y2 = a2.outlineMaterial, M2 = c2.vectorTilesMaterialManager, g2 = 0.75 / _, v = m2 === I.HITTEST, x2 = this._outlineProgramOptions;
    x2.id = v;
    const P = M2.getMaterialProgram(u2, y2, x2);
    u2.bindProgram(P), P.setUniformMatrix3fv("u_displayMat3", s2 === 1 ? p2.displayMat3 : p2.displayViewMat3), P.setUniform2fv("u_fillTranslation", l2), P.setUniform1f("u_depth", a2.z + o$2), P.setUniform1f("u_outline_width", g2), v && P.setUniform4fv("u_id", f2);
    let h = -1;
    for (const n2 of r2) {
      if (!n2.layerData.has(i2))
        continue;
      n2.key.level !== h && (h = n2.key.level, y2.setDataUniforms(P, d2, a2, h));
      const e3 = n2.layerData.get(i2);
      e3.prepareForRendering(u2);
      const r3 = e3.outlineVertexArrayObject;
      t$3(r3) || (u2.bindVAO(r3), P.setUniformMatrix3fv("u_dvsMat3", n2.transforms.dvs), u2.setStencilFunction(514, n2.stencilRef, 255), u2.drawElements(4, e3.outlineIndexCount, 5125, Uint32Array.BYTES_PER_ELEMENT * e3.outlineIndexStart), n2.triangleCount += e3.outlineIndexCount / 3);
    }
  }
}
class n$6 extends r$3 {
  constructor() {
    super(...arguments), this._dashArray = n$8(), this._programOptions = { id: false, pattern: false };
  }
  dispose() {
  }
  drawMany(r2, s2) {
    const { context: n2, displayLevel: o2, state: l2, drawPhase: f2, painter: m2, styleLayerUID: d2 } = r2, p2 = r2.styleLayer, u2 = p2.lineMaterial, c2 = m2.vectorTilesMaterialManager, y2 = p2.getPaintValue("line-translate", o2), _ = p2.getPaintValue("line-translate-anchor", o2), h = p2.getPaintValue("line-pattern", o2), g2 = h !== void 0, M$12 = 1 / r2.pixelRatio, U$1 = 8, v = f2 === I.HITTEST, x2 = this._programOptions;
    x2.id = v, x2.pattern = g2;
    const b2 = c2.getMaterialProgram(n2, u2, x2);
    if (n2.bindProgram(b2), b2.setUniformMatrix3fv("u_displayViewMat3", l2.displayViewMat3), b2.setUniformMatrix3fv("u_displayMat3", _ === 1 ? l2.displayMat3 : l2.displayViewMat3), b2.setUniform2fv("u_lineTranslation", y2), b2.setUniform1f("u_depth", p2.z), b2.setUniform1f("u_antialiasing", M$12), v) {
      const t2 = M(d2 + 1);
      b2.setUniform4fv("u_id", t2);
    }
    if (g2) {
      const t2 = r2.spriteMosaic, a2 = t2.getMosaicItemPosition(h, true);
      a2 && (t2.bind(n2, 9729, a2.page, U), b2.setUniform2f("u_pattern_tl", a2.tl[0], a2.br[1]), b2.setUniform2f("u_pattern_br", a2.br[0], a2.tl[1]), b2.setUniform2f("u_spriteSize", U$1 * a2.size[0], a2.size[1]), b2.setUniform1i("u_texture", U));
    } else {
      let t2 = p2.getPaintValue("line-dasharray", o2);
      t2.length < 2 && (t2 = [1, -1]);
      const e2 = U$1;
      this._dashArray[0] = e2 * t2[0], this._dashArray[1] = e2 * t2[1], b2.setUniform2fv("u_dasharray", this._dashArray);
    }
    let P = -1;
    for (const e2 of s2) {
      if (!e2.layerData.has(d2))
        continue;
      e2.key.level !== P && (P = e2.key.level, u2.setDataUniforms(b2, o2, p2, P));
      const r3 = e2.layerData.get(d2);
      r3.prepareForRendering(n2);
      const a2 = r3.lineVertexArrayObject;
      t$3(a2) || (n2.bindVAO(a2), b2.setUniformMatrix3fv("u_dvsMat3", e2.transforms.dvs), n2.setStencilFunction(514, e2.stencilRef, 255), n2.drawElements(4, r3.lineIndexCount, 5125, Uint32Array.BYTES_PER_ELEMENT * r3.lineIndexStart), e2.triangleCount += r3.lineIndexCount / 3);
    }
  }
}
const c$2 = 1 / 65536;
class p$1 extends r$3 {
  constructor() {
    super(...arguments), this._iconProgramOptions = { id: false, sdf: false }, this._sdfProgramOptions = { id: false }, this._spritesTextureSize = n$8();
  }
  dispose() {
  }
  drawMany(t2, e2) {
    const { drawPhase: a2, styleLayerUID: i2 } = t2, r2 = t2.styleLayer;
    let n2;
    a2 === I.HITTEST && (n2 = M(i2 + 1)), this._drawIcons(t2, r2, e2, n2), this._drawText(t2, r2, e2, n2);
  }
  _drawIcons(a2, i2, r2, s2) {
    const { context: l2, displayLevel: c2, drawPhase: p2, painter: u2, state: m2, styleLayerUID: d2 } = a2, g2 = i2.iconMaterial, y2 = u2.vectorTilesMaterialManager;
    let _, h = false;
    for (const t2 of r2)
      if (t2.layerData.has(d2) && (_ = t2.layerData.get(d2), _.iconPerPageElementsMap.size > 0)) {
        h = true;
        break;
      }
    if (!h)
      return;
    const M2 = i2.getPaintValue("icon-translate", c2), U$1 = i2.getPaintValue("icon-translate-anchor", c2);
    let P = i2.getLayoutValue("icon-rotation-alignment", c2);
    P === 2 && (P = i2.getLayoutValue("symbol-placement", c2) === 0 ? 1 : 0);
    const x2 = P === 0, v = i2.getLayoutValue("icon-keep-upright", c2) && x2, T = _.isIconSDF, E2 = p2 === I.HITTEST, D2 = this._iconProgramOptions;
    D2.id = E2, D2.sdf = T;
    const V2 = y2.getMaterialProgram(l2, g2, D2);
    l2.bindProgram(V2), V2.setUniformMatrix3fv("u_displayViewMat3", P === 0 ? m2.displayViewMat3 : m2.displayMat3), V2.setUniformMatrix3fv("u_displayMat3", U$1 === 1 ? m2.displayMat3 : m2.displayViewMat3), V2.setUniform2fv("u_iconTranslation", M2), V2.setUniform1f("u_depth", i2.z), V2.setUniform1f("u_mapRotation", M$1(m2.rotation)), V2.setUniform1f("u_keepUpright", v ? 1 : 0), V2.setUniform1f("u_level", 10 * c2), V2.setUniform1i("u_texture", U), V2.setUniform1f("u_fadeDuration", e$3 / 1e3), E2 && V2.setUniform4fv("u_id", s2);
    let S = -1;
    for (const e2 of r2) {
      if (!e2.layerData.has(d2))
        continue;
      if (e2.key.level !== S && (S = e2.key.level, g2.setDataUniforms(V2, c2, i2, S)), _ = e2.layerData.get(d2), _.iconPerPageElementsMap.size === 0)
        continue;
      _.prepareForRendering(l2), _.updateOpacityInfo();
      const r3 = _.iconVertexArrayObject;
      if (!t$3(r3)) {
        l2.bindVAO(r3), V2.setUniformMatrix3fv("u_dvsMat3", e2.transforms.dvs), V2.setUniform1f("u_time", (performance.now() - _.lastOpacityUpdate) / 1e3);
        for (const [t2, i3] of _.iconPerPageElementsMap)
          this._renderIconRange(a2, V2, i3, t2, e2);
      }
    }
  }
  _renderIconRange(t2, a2, i2, r2, n2) {
    const { context: s2, spriteMosaic: o2 } = t2;
    this._spritesTextureSize[0] = o2.getWidth(r2) / 4, this._spritesTextureSize[1] = o2.getHeight(r2) / 4, a2.setUniform2fv("u_mosaicSize", this._spritesTextureSize), o2.bind(s2, 9729, r2, U), s2.setStencilTestEnabled(true), s2.setStencilFunction(516, 255, 255), s2.setStencilWriteMask(0), s2.drawElements(4, i2[1], 5125, Uint32Array.BYTES_PER_ELEMENT * i2[0]), n2.triangleCount += i2[1] / 3;
  }
  _drawText(e2, i2, s2, l2) {
    const { context: p2, displayLevel: u2, drawPhase: m2, glyphMosaic: d2, painter: g2, pixelRatio: y2, state: _, styleLayerUID: h } = e2, M2 = i2.textMaterial, U2 = g2.vectorTilesMaterialManager;
    let P, x2 = false;
    for (const t2 of s2)
      if (t2.layerData.has(h) && (P = t2.layerData.get(h), P.glyphPerPageElementsMap.size > 0)) {
        x2 = true;
        break;
      }
    if (!x2)
      return;
    const v = i2.getPaintProperty("text-opacity");
    if (v && !v.isDataDriven && v.getValue(u2) === 0)
      return;
    const T = i2.getPaintProperty("text-color"), E2 = !T || T.isDataDriven || T.getValue(u2)[3] > 0, D2 = i2.getPaintProperty("text-halo-width"), V$1 = i2.getPaintProperty("text-halo-color"), S = (!D2 || D2.isDataDriven || D2.getValue(u2) > 0) && (!V$1 || V$1.isDataDriven || V$1.getValue(u2)[3] > 0);
    if (!E2 && !S)
      return;
    const w2 = 24 / 8;
    let b2 = i2.getLayoutValue("text-rotation-alignment", u2);
    b2 === 2 && (b2 = i2.getLayoutValue("symbol-placement", u2) === 0 ? 1 : 0);
    const L = b2 === 0, z2 = i2.getLayoutValue("text-keep-upright", u2) && L, k = m2 === I.HITTEST, I$1 = 0.8 * w2 / y2;
    this._glyphTextureSize || (this._glyphTextureSize = t$4(d2.width / 4, d2.height / 4));
    const O = i2.getPaintValue("text-translate", u2), R = i2.getPaintValue("text-translate-anchor", u2), j = this._sdfProgramOptions;
    j.id = k;
    const A2 = U2.getMaterialProgram(p2, M2, j);
    p2.bindProgram(A2), A2.setUniformMatrix3fv("u_displayViewMat3", b2 === 0 ? _.displayViewMat3 : _.displayMat3), A2.setUniformMatrix3fv("u_displayMat3", R === 1 ? _.displayMat3 : _.displayViewMat3), A2.setUniform2fv("u_textTranslation", O), A2.setUniform1f("u_depth", i2.z + c$2), A2.setUniform2fv("u_mosaicSize", this._glyphTextureSize), A2.setUniform1f("u_mapRotation", M$1(_.rotation)), A2.setUniform1f("u_keepUpright", z2 ? 1 : 0), A2.setUniform1f("u_level", 10 * u2), A2.setUniform1i("u_texture", V), A2.setUniform1f("u_antialiasingWidth", I$1), A2.setUniform1f("u_fadeDuration", e$3 / 1e3), k && A2.setUniform4fv("u_id", l2);
    let F2 = -1;
    for (const a2 of s2) {
      if (!a2.layerData.has(h))
        continue;
      if (a2.key.level !== F2 && (F2 = a2.key.level, M2.setDataUniforms(A2, u2, i2, F2)), P = a2.layerData.get(h), P.glyphPerPageElementsMap.size === 0)
        continue;
      P.prepareForRendering(p2), P.updateOpacityInfo();
      const e3 = P.textVertexArrayObject;
      if (t$3(e3))
        continue;
      p2.bindVAO(e3), A2.setUniformMatrix3fv("u_dvsMat3", a2.transforms.dvs), p2.setStencilTestEnabled(true), p2.setStencilFunction(516, 255, 255), p2.setStencilWriteMask(0);
      const r2 = (performance.now() - P.lastOpacityUpdate) / 1e3;
      A2.setUniform1f("u_time", r2), P.glyphPerPageElementsMap.forEach((t2, e4) => {
        this._renderGlyphRange(p2, t2, e4, d2, A2, S, E2, a2);
      });
    }
  }
  _renderGlyphRange(t2, e2, i2, r2, n2, s2, o2, l2) {
    r2.bind(t2, 9729, i2, V), s2 && (n2.setUniform1f("u_halo", 1), t2.drawElements(4, e2[1], 5125, Uint32Array.BYTES_PER_ELEMENT * e2[0]), l2.triangleCount += e2[1] / 3), o2 && (n2.setUniform1f("u_halo", 0), t2.drawElements(4, e2[1], 5125, Uint32Array.BYTES_PER_ELEMENT * e2[0]), l2.triangleCount += e2[1] / 3);
  }
}
class n$5 extends r$3 {
  prepareState({ context: t2 }, e2, i2) {
    const a2 = i2 && i2.indexOf("id") !== -1;
    t2.setBlendingEnabled(!a2), t2.setBlendFunctionSeparate(1, 771, 1, 771), t2.setColorMask(true, true, true, true), t2.setStencilWriteMask(0), t2.setStencilTestEnabled(true), t2.setStencilFunction(514, e2.stencilRef, 255);
  }
  draw(e2, i2, a2) {
    const r2 = this.getGeometryType();
    i2.commit(e2);
    const s2 = i2.getGeometry(r2);
    t$3(s2) || (e2.timeline.begin(this.name), e2.attributeView.bindTextures(e2.context), s2.forEachCommand((t2) => this.drawGeometry(e2, i2, t2, a2)));
  }
  _setSharedUniforms(t2, s2, n2) {
    t2.setUniform1f("u_pixelRatio", s2.pixelRatio), t2.setUniformMatrix3fv("u_dvsMat3", n2.transforms.dvs), t2.setUniformMatrix3fv("u_displayViewMat3", s2.state.displayViewMat3), t2.setUniform1i("u_attributeTextureSize", s2.attributeView.size), t2.setUniform1i("u_attributeData0", A), t2.setUniform1i("u_attributeData1", B), t2.setUniform1i("u_attributeData2", C), t2.setUniform1i("u_attributeData3", D);
  }
}
const d = (e2) => re(e2.data, { geometry: [{ location: 0, name: "a_pos", count: 2, type: 5122 }, { location: 1, name: "a_id", count: 4, type: 5121 }, ...e2.dotDensity ? [] : [{ location: 2, name: "a_color", count: 4, type: 5121, normalized: true }, { location: 3, name: "a_tlbr", count: 4, type: 5123 }, { location: 4, name: "a_aux1", count: 4, type: 5121 }, { location: 5, name: "a_aux2", count: 2, type: 5123 }, { location: 6, name: "a_aux3", count: 4, type: 5121 }], ...e2.dotDensity ? [{ location: 2, name: "a_inverseArea", count: 1, type: 5126 }] : []] });
class u$2 extends n$5 {
  constructor() {
    super(...arguments), this._dotTextureSize = 0, this._dotTextures = null, this._dotSamplers = new Int32Array([G, H]);
  }
  dispose() {
    this._disposeTextures();
  }
  getGeometryType() {
    return E.FILL;
  }
  drawGeometry(e2, t2, o2, r2) {
    const { context: s2, painter: n2, rendererInfo: l2, requiredLevel: u2 } = e2, m2 = C$1.load(o2.materialKey), { bufferLayouts: c2, attributes: _ } = d(m2), f2 = n2.materialManager.getMaterialProgram(e2, m2, "materials/fill", _, r2);
    if (s2.bindProgram(f2), this._setSharedUniforms(f2, e2, t2), m2.textureBinding) {
      n2.textureManager.bindTextures(s2, f2, m2);
      const o3 = 1 / __pow(2, u2 - t2.key.level) / e2.pixelRatio;
      f2.setUniform1f("u_zoomFactor", o3);
    }
    if (m2.vvColor && (f2.setUniform1fv("u_vvColorValues", l2.vvColorValues), f2.setUniform4fv("u_vvColors", l2.vvColors)), m2.vvOpacity && (f2.setUniform1fv("u_vvOpacityValues", l2.vvOpacityValues), f2.setUniform1fv("u_vvOpacities", l2.vvOpacities)), m2.dotDensity) {
      const o3 = o$5 / l2.ddDotSize, r3 = o3 * window.devicePixelRatio * o3 * window.devicePixelRatio, a2 = 1 / __pow(2, u2 - t2.key.level), n3 = 1 / a2 * (1 / a2), d2 = l2.ddDotScale ? e2.state.scale / l2.ddDotScale : 1;
      f2.setUniform1f("u_tileZoomFactor", a2), f2.setUniform1f("u_tileDotsOverArea", r3 / (o$5 * window.devicePixelRatio * o$5 * window.devicePixelRatio)), f2.setUniformMatrix4fv("u_dotColors", l2.ddColors), f2.setUniform4fv("u_isActive", l2.ddActiveDots), f2.setUniform4fv("u_dotBackgroundColor", l2.ddBackgroundColor), f2.setUniform1f("u_dotValue", Math.max(1, l2.ddDotValue * d2 * n3)), this._bindDotDensityTextures(s2, f2, l2, o3);
    }
    o2.draw(s2, c2, _);
  }
  _disposeTextures() {
    if (this._dotTextures) {
      for (let e2 = 0; e2 < this._dotTextures.length; e2++)
        this._dotTextures[e2].dispose();
      this._dotTextures = null;
    }
  }
  _bindDotDensityTextures(e2, t2, o2, i2) {
    const r2 = this._createDotDensityTextures(e2, i2, o2.ddSeed);
    t2.setUniform1iv("u_dotTextures", this._dotSamplers);
    for (let s2 = 0; s2 < r2.length; s2++)
      e2.bindTexture(r2[s2], this._dotSamplers[s2]);
  }
  _createDotDensityTextures(t2, o2, i2) {
    if (this._dotTextureSize === o2 && this._seed === i2 || (this._disposeTextures(), this._dotTextureSize = o2, this._seed = i2), this._dotTextures === null) {
      const r2 = new t$5(i2);
      this._dotTextures = [this._allocDotDensityTexture(t2, o2, r2), this._allocDotDensityTexture(t2, o2, r2)];
    }
    return this._dotTextures;
  }
  _allocDotDensityTexture(e2, t2, o2) {
    const i2 = new Float32Array(t2 * t2 * 4);
    for (let r2 = 0; r2 < i2.length; r2++)
      i2[r2] = o2.getFloat();
    return new o$4(e2, { wrapMode: 10497, pixelFormat: 6408, dataType: 5126, samplingMode: 9728, width: t2, height: t2 }, i2);
  }
}
const i$4 = (e2) => re(e2.data, { geometry: [{ location: 0, name: "a_pos", count: 2, type: 5122 }, { location: 1, name: "a_id", count: 4, type: 5121 }, { location: 2, name: "a_color", count: 4, type: 5121, normalized: true }, { location: 3, name: "a_haloColor", count: 4, type: 5121, normalized: true }, { location: 4, name: "a_texAndSize", count: 4, type: 5121 }, { location: 5, name: "a_refSymbolAndPlacementOffset", count: 4, type: 5121 }, { location: 6, name: "a_glyphData", count: 4, type: 5121 }, { location: 7, name: "a_vertexOffset", count: 2, type: 5122 }, { location: 8, name: "a_texCoords", count: 2, type: 5123 }] });
class n$4 extends n$5 {
  dispose() {
  }
  getGeometryType() {
    return E.LABEL;
  }
  drawGeometry(e2, a2, o2, n2) {
    const { context: l2, painter: s2, state: r2, rendererInfo: m2 } = e2, u2 = N.load(o2.materialKey), f2 = u2.mapAligned ? 1 : 0;
    if (!f2 && Math.abs(a2.key.level - Math.round(100 * e2.displayLevel) / 100) >= 1)
      return;
    const { bufferLayouts: c2, attributes: v } = i$4(u2), d2 = s2.materialManager.getMaterialProgram(e2, u2, "materials/label", v, n2);
    e2.context.setStencilFunction(514, 0, 255), l2.bindProgram(d2), this._setSharedUniforms(d2, e2, a2), s2.textureManager.bindTextures(l2, d2, u2);
    const p2 = f2 === 1 ? r2.displayViewMat3 : r2.displayMat3;
    if (u2.vvSizeMinMaxValue && d2.setUniform4fv("u_vvSizeMinMaxValue", m2.vvSizeMinMaxValue), u2.vvSizeScaleStops && d2.setUniform1f("u_vvSizeScaleStopsValue", m2.vvSizeScaleStopsValue), u2.vvSizeFieldStops) {
      const e3 = m2.getSizeVVFieldStops(a2.key.level);
      d2.setUniform1fv("u_vvSizeFieldStopsValues", e3.values), d2.setUniform1fv("u_vvSizeFieldStopsSizes", e3.sizes);
    }
    u2.vvSizeUnitValue && d2.setUniform1f("u_vvSizeUnitValueWorldToPixelsRatio", m2.vvSizeUnitValueToPixelsRatio), d2.setUniform1f("u_mapRotation", Math.floor(r2.rotation / 360 * 254)), d2.setUniform1f("u_mapAligned", f2), d2.setUniformMatrix3fv("u_displayMat3", p2), d2.setUniform1f("u_opacity", 1), d2.setUniform1f("u_zoomLevel", Math.round(10 * e2.displayLevel)), d2.setUniform2fv("u_screenSize", e2.state.size), d2.setUniform1f("u_isHalo", 1), o2.draw(l2, c2, v), d2.setUniform1f("u_isHalo", 0), o2.draw(l2, c2, v), l2.setStencilTestEnabled(true), l2.setBlendingEnabled(true);
  }
}
const i$3 = (e2) => re(e2.data, { geometry: [{ location: 0, name: "a_pos", count: 2, type: 5122 }, { location: 1, name: "a_id", count: 4, type: 5121 }, { location: 2, name: "a_color", count: 4, type: 5121, normalized: true }, { location: 3, name: "a_offsetAndNormal", count: 4, type: 5120 }, { location: 4, name: "a_accumulatedDistanceAndHalfWidth", count: 2, type: 5123 }, { location: 5, name: "a_tlbr", count: 4, type: 5123 }, { location: 6, name: "a_segmentDirection", count: 4, type: 5120 }, { location: 7, name: "a_aux", count: 2, type: 5123 }] });
class n$3 extends n$5 {
  dispose() {
  }
  getGeometryType() {
    return E.LINE;
  }
  drawGeometry(e2, a2, o2, n2) {
    const { context: l2, painter: r2, rendererInfo: s2, requiredLevel: v } = e2, u2 = b.load(o2.materialKey), { bufferLayouts: m2, attributes: c2 } = i$3(u2), f2 = r2.materialManager.getMaterialProgram(e2, u2, "materials/line", c2, n2), p2 = 1 / e2.pixelRatio, d2 = 0;
    l2.bindProgram(f2), this._setSharedUniforms(f2, e2, a2), u2.textureBinding && r2.textureManager.bindTextures(l2, f2, u2);
    const S = __pow(2, v - a2.key.level) / e2.pixelRatio;
    if (f2.setUniform1f("u_zoomFactor", S), f2.setUniform1f("u_blur", d2 + p2), f2.setUniform1f("u_antialiasing", p2), u2.vvSizeMinMaxValue && f2.setUniform4fv("u_vvSizeMinMaxValue", s2.vvSizeMinMaxValue), u2.vvSizeScaleStops && f2.setUniform1f("u_vvSizeScaleStopsValue", s2.vvSizeScaleStopsValue), u2.vvSizeFieldStops) {
      const e3 = s2.getSizeVVFieldStops(a2.key.level);
      f2.setUniform1fv("u_vvSizeFieldStopsValues", e3.values), f2.setUniform1fv("u_vvSizeFieldStopsSizes", e3.sizes);
    }
    u2.vvSizeUnitValue && f2.setUniform1f("u_vvSizeUnitValueWorldToPixelsRatio", s2.vvSizeUnitValueToPixelsRatio), u2.vvColor && (f2.setUniform1fv("u_vvColorValues", s2.vvColorValues), f2.setUniform4fv("u_vvColors", s2.vvColors)), u2.vvOpacity && (f2.setUniform1fv("u_vvOpacityValues", s2.vvOpacityValues), f2.setUniform1fv("u_vvOpacities", s2.vvOpacities)), l2.setFaceCullingEnabled(true), l2.setFrontFace(2305), l2.setCullFace(1029), o2.draw(l2, m2, c2), l2.setFaceCullingEnabled(false);
  }
}
const i$2 = (e2) => re(e2.data, { geometry: [{ location: 0, name: "a_pos", count: 2, type: 5122 }, { location: 1, name: "a_vertexOffset", count: 2, type: 5122 }, { location: 2, name: "a_texCoords", count: 2, type: 5123 }, { location: 3, name: "a_bitSetAndDistRatio", count: 2, type: 5123 }, { location: 4, name: "a_id", count: 4, type: 5121 }, { location: 5, name: "a_color", count: 4, type: 5121, normalized: true }, { location: 6, name: "a_outlineColor", count: 4, type: 5121, normalized: true }, { location: 7, name: "a_sizeAndOutlineWidth", count: 4, type: 5121 }] });
class n$2 extends n$5 {
  dispose() {
  }
  getGeometryType() {
    return E.MARKER;
  }
  drawGeometry(e2, o2, a2, n2) {
    const { context: r2, painter: s2, rendererInfo: v, state: l2 } = e2, u2 = w.load(a2.materialKey), { bufferLayouts: m2, attributes: p2 } = i$2(u2), f2 = s2.materialManager.getMaterialProgram(e2, u2, "materials/icon", p2, n2);
    r2.bindProgram(f2), u2.textureBinding && s2.textureManager.bindTextures(r2, f2, u2, true), this._setSharedUniforms(f2, e2, o2);
    const c2 = u2.vvRotation ? l2.displayViewMat3 : l2.displayMat3;
    if (f2.setUniformMatrix3fv("u_displayMat3", c2), u2.vvSizeMinMaxValue && f2.setUniform4fv("u_vvSizeMinMaxValue", v.vvSizeMinMaxValue), u2.vvSizeScaleStops && f2.setUniform1f("u_vvSizeScaleStopsValue", v.vvSizeScaleStopsValue), u2.vvSizeFieldStops) {
      const e3 = v.getSizeVVFieldStops(o2.key.level);
      f2.setUniform1fv("u_vvSizeFieldStopsValues", e3.values), f2.setUniform1fv("u_vvSizeFieldStopsSizes", e3.sizes);
    }
    u2.vvSizeUnitValue && f2.setUniform1f("u_vvSizeUnitValueWorldToPixelsRatio", v.vvSizeUnitValueToPixelsRatio), u2.vvColor && (f2.setUniform1fv("u_vvColorValues", v.vvColorValues), f2.setUniform4fv("u_vvColors", v.vvColors)), u2.vvOpacity && (f2.setUniform1fv("u_vvOpacityValues", v.vvOpacityValues), f2.setUniform1fv("u_vvOpacities", v.vvOpacities)), u2.vvRotation && f2.setUniform1f("u_vvRotationType", v.vvMaterialParameters.vvRotationType === "geographic" ? 0 : 1), a2.draw(r2, m2, p2);
  }
}
const i$1 = (e2) => re(e2.data, { geometry: [{ location: 0, name: "a_pos", count: 2, type: 5122 }, { location: 1, name: "a_id", count: 4, type: 5121 }, { location: 2, name: "a_color", count: 4, type: 5121, normalized: true }, { location: 3, name: "a_haloColor", count: 4, type: 5121, normalized: true }, { location: 4, name: "a_texFontSize", count: 4, type: 5121 }, { location: 5, name: "a_aux", count: 4, type: 5120 }, { location: 6, name: "a_vertexOffset", count: 2, type: 5122 }, { location: 7, name: "a_texCoords", count: 2, type: 5123 }] });
class r$1 extends n$5 {
  dispose() {
  }
  getGeometryType() {
    return E.TEXT;
  }
  drawGeometry(e2, a2, o2, r2) {
    const { context: s2, painter: n2, rendererInfo: v, state: l2 } = e2, u2 = F.load(o2.materialKey), { bufferLayouts: m2, attributes: f2 } = i$1(u2), p2 = n2.materialManager.getMaterialProgram(e2, u2, "materials/text", f2, r2);
    if (s2.bindProgram(p2), this._setSharedUniforms(p2, e2, a2), n2.textureManager.bindTextures(s2, p2, u2), p2.setUniformMatrix3fv("u_displayMat3", l2.displayMat3), p2.setUniformMatrix3fv("u_displayViewMat3", l2.displayViewMat3), u2.vvSizeMinMaxValue && p2.setUniform4fv("u_vvSizeMinMaxValue", v.vvSizeMinMaxValue), u2.vvSizeScaleStops && p2.setUniform1f("u_vvSizeScaleStopsValue", v.vvSizeScaleStopsValue), u2.vvSizeFieldStops) {
      const e3 = v.getSizeVVFieldStops(a2.key.level);
      p2.setUniform1fv("u_vvSizeFieldStopsValues", e3.values), p2.setUniform1fv("u_vvSizeFieldStopsSizes", e3.sizes);
    }
    u2.vvSizeUnitValue && p2.setUniform1f("u_vvSizeUnitValueWorldToPixelsRatio", v.vvSizeUnitValueToPixelsRatio), u2.vvColor && (p2.setUniform1fv("u_vvColorValues", v.vvColorValues), p2.setUniform4fv("u_vvColors", v.vvColors)), u2.vvOpacity && (p2.setUniform1fv("u_vvOpacityValues", v.vvOpacityValues), p2.setUniform1fv("u_vvOpacities", v.vvOpacities)), u2.vvRotation && p2.setUniform1f("u_vvRotationType", v.vvMaterialParameters.vvRotationType === "geographic" ? 0 : 1), p2.setUniform1f("u_isHalo", 1), o2.draw(s2, m2, f2), p2.setUniform1f("u_isHalo", 0), o2.draw(s2, m2, f2);
  }
}
function n$1(t2, n2, a2 = "nearest", i2 = false) {
  var r2;
  const o2 = !(i2 && n2.pixelType === "u8"), s2 = o2 ? 5126 : 5121, u2 = n2.pixels == null || n2.pixels.length === 0 ? null : o2 ? n2.getAsRGBAFloat() : n2.getAsRGBA(), f2 = (r2 = t2.capabilities.textureFloat) == null ? void 0 : r2.textureFloatLinear, l2 = { width: n2.width, height: n2.height, target: 3553, pixelFormat: 6408, internalFormat: t2.isWebGL2Context() ? 34836 : 6408, samplingMode: !f2 || a2 !== "bilinear" && a2 !== "cubic" ? 9728 : 9729, dataType: s2, wrapMode: 33071, flipped: false };
  return new o$4(t2, l2, u2);
}
function i(t2, n2) {
  const a2 = 4 * n2.size[0], i2 = n2.size[1], r2 = { width: a2, height: i2, target: 3553, pixelFormat: 6408, internalFormat: t2.isWebGL2Context() ? 34836 : 6408, dataType: 5126, samplingMode: 9728, wrapMode: 33071, flipped: false }, o2 = new Float32Array(a2 * i2 * 4);
  let s2 = 0;
  for (let e2 = 0; e2 < n2.coefficients.length; e2++)
    o2[s2++] = n2.coefficients[e2], e2 % 3 == 2 && (o2[s2++] = 1);
  return new o$4(t2, r2, o2);
}
function r(t2, n2) {
  const a2 = { width: n2.length / 4, height: 1, target: 3553, pixelFormat: 6408, internalFormat: 6408, dataType: 5121, samplingMode: 9728, wrapMode: 33071, flipped: false };
  return new o$4(t2, a2, n2);
}
function o$1(e2, t2, n2, a2 = 1, i2 = true, r2 = false) {
  return { u_flipY: i2, u_isFloatTexture: r2, u_applyTransform: !!e2, u_opacity: a2, u_transformSpacing: e2 ? e2.spacing : null, u_transformGridSize: e2 ? e2.size : null, u_targetImageSize: t2, u_srcImageSize: n2 };
}
function s(e2, t2) {
  return { u_colormapOffset: t2 || 0, u_colormapMaxIndex: e2 ? e2.length / 4 - 1 : null };
}
function u$1(e2, t2) {
  return { u_scale: e2, u_offset: t2 };
}
function f(e2) {
  return { u_bandCount: e2.bandCount, u_minOutput: e2.outMin, u_maxOutput: e2.outMax, u_minCutOff: e2.minCutOff, u_maxCutOff: e2.maxCutOff, u_factor: e2.factor, u_useGamma: e2.useGamma, u_gamma: e2.gamma, u_gammaCorrection: e2.gammaCorrection };
}
function l$1(e2) {
  return { u_hillshadeType: e2.hillshadeType, u_sinZcosAs: e2.sinZcosAs, u_sinZsinAs: e2.sinZsinAs, u_cosZs: e2.cosZs, u_weights: e2.weights, u_factor: e2.factor, u_minValue: e2.minValue, u_maxValue: e2.maxValue };
}
function c$1(e2, t2) {
  const n2 = e2.gl, a2 = t2.glName, i2 = n2.getProgramParameter(a2, n2.ACTIVE_UNIFORMS), r2 = new Map();
  let o2;
  for (let s2 = 0; s2 < i2; s2++)
    o2 = n2.getActiveUniform(a2, s2), o2 && r2.set(o2.name, { location: n2.getUniformLocation(a2, o2.name), info: o2 });
  return r2;
}
function m$1(e2, t2, n2) {
  Object.keys(n2).forEach((a2) => {
    const i2 = t2.get(a2) || t2.get(a2 + "[0]");
    i2 && g$2(e2, a2, n2[a2], i2);
  });
}
function p(e2, t2, n2, a2) {
  n2.length === a2.length && (a2.some((e3) => e3 == null) || n2.some((e3) => e3 == null) || n2.forEach((n3, i2) => {
    t2.setUniform1i(n3, i2), e2.bindTexture(a2[i2], i2);
  }));
}
function g$2(e2, t2, n2, a2) {
  if (a2 === null || n2 == null)
    return false;
  const { info: i2 } = a2;
  switch (i2.type) {
    case 5126:
      i2.size > 1 ? e2.setUniform1fv(t2, n2) : e2.setUniform1f(t2, n2);
      break;
    case 35664:
      e2.setUniform2fv(t2, n2);
      break;
    case 35665:
      e2.setUniform3fv(t2, n2);
      break;
    case 35666:
      e2.setUniform4fv(t2, n2);
      break;
    case 35675:
      e2.setUniformMatrix3fv(t2, n2);
      break;
    case 35676:
      e2.setUniformMatrix4fv(t2, n2);
      break;
    case 5124:
      i2.size > 1 ? e2.setUniform1iv(t2, n2) : e2.setUniform1i(t2, n2);
      break;
    case 35670:
      e2.setUniform1i(t2, n2 ? 1 : 0);
      break;
    case 35667:
    case 35671:
      e2.setUniform2iv(t2, n2);
      break;
    case 35668:
    case 35672:
      e2.setUniform3iv(t2, n2);
      break;
    case 35669:
    case 35673:
      e2.setUniform4iv(t2, n2);
      break;
    default:
      return false;
  }
  return true;
}
class l extends r$3 {
  constructor() {
    super(...arguments), this._desc = { lut: { vsPath: "raster/lut", fsPath: "raster/lut", attributes: { a_position: 0, a_texcoord: 1 } }, stretch: { vsPath: "raster/stretch", fsPath: "raster/stretch", attributes: { a_position: 0, a_texcoord: 1 } }, hillshade: { vsPath: "raster/hillshade", fsPath: "raster/hillshade", attributes: { a_position: 0, a_texcoord: 1 } } }, this._rendererUniformInfos = new Map();
  }
  dispose() {
    this._quad && this._quad.dispose();
  }
  prepareState({ context: t2 }, e2) {
    t2.setBlendingEnabled(true), t2.setBlendFunctionSeparate(1, 771, 1, 771), t2.setColorMask(true, true, true, true), t2.setStencilWriteMask(0), t2.setStencilTestEnabled(true), t2.setStencilFunction(514, e2.stencilRef, 255);
  }
  draw(t2, e2) {
    var r2;
    if (!e2.source)
      return;
    if (e2.suspended)
      return;
    t2.timeline.begin(this.name);
    const s2 = !((r2 = t2.context.capabilities.textureFloat) != null && r2.textureFloatLinear);
    e2.updateTexture(t2);
    const a2 = this.getShaderVariations(e2, s2), i2 = t2.painter.materialManager.getProgram(t2, this._desc[e2.symbolizerParameters.type], a2);
    this.drawWithProgram(t2.context, i2, e2), t2.timeline.end(this.name);
  }
  drawWithProgram(o2, c2, l2, d2 = 1, u2 = [0, 0], p$12 = false) {
    this._quad || (this._quad = new r$4(o2, [0, 0, 1, 0, 0, 1, 1, 1]));
    const { symbolizerParameters: m2, transformGrid: f$12, width: g2, height: _, opacity: b2 } = l2, x2 = m2.type;
    o2.bindProgram(c2);
    const P = this.getShaderVariations(l2), S = this.getUniformInfos(x2, o2, c2, P), { names: y2, textures: w2 } = l2.getTextures();
    p(o2, c2, y2, w2);
    const U2 = u$1(d2, u2), v = o$1(f$12, [g2, _], [l2.source.width, l2.source.height], b2, p$12);
    if (m$1(c2, S, __spreadValues(__spreadValues({ u_coordScale: l2.coordScale, u_dvsMat3: l2.transforms.dvs }, U2), v)), m2.colormap) {
      const { colormap: t2, colormapOffset: e2 } = m2, a2 = s(t2, e2);
      m$1(c2, S, a2);
    }
    if (m2.type === "stretch") {
      const t2 = f(m2);
      m$1(c2, S, t2);
    } else if (m2.type === "hillshade") {
      const t2 = l$1(m2);
      m$1(c2, S, t2);
    }
    this._quad.draw();
  }
  getUniformInfos(t2, e2, r2, s2) {
    const a2 = s2.length > 0 ? t2 + "-" + s2.join("-") : t2;
    if (this._rendererUniformInfos.has(a2))
      return this._rendererUniformInfos.get(a2);
    const i2 = c$1(e2, r2);
    return this._rendererUniformInfos.set(a2, i2), i2;
  }
  getShaderVariations(t2, e2 = false) {
    const r2 = [];
    return t2.interpolation === "cubic" ? r2.push("bicubic") : e2 && t2.interpolation === "bilinear" && r2.push("bilinear"), t2.isRendereredSource ? r2.push("noop") : t2.symbolizerParameters.colormap && r2.push("applyColormap"), t2.transformGrid && r2.push("applyProjection"), r2;
  }
}
const g$1 = { marker: n$2, line: n$3, fill: u$2, text: r$1, label: n$4, clip: a$2, stencil: a$1, bitmap: a$3, raster: l, tileInfo: m$2, vtlBackground: f$1, vtlFill: s$1, vtlLine: n$6, vtlCircle: i$5, vtlSymbol: p$1 };
const m = n$9.getLogger("esri.views.2d.engine.webgl.Mesh2D"), u = (e2) => {
  switch (e2.BYTES_PER_ELEMENT) {
    case 1:
      return 5121;
    case 2:
      return 5123;
    case 4:
      return 5125;
    default:
      throw new s$6("Cannot get DataType of array");
  }
}, y = (e2, t2, r2, o2) => {
  let n2 = 0;
  for (let s2 = 1; s2 < r2; s2++) {
    const r3 = e2[2 * (t2 + s2 - 1)], o3 = e2[2 * (t2 + s2 - 1) + 1];
    n2 += (e2[2 * (t2 + s2)] - r3) * (e2[2 * (t2 + s2) + 1] + o3);
  }
  return o2 ? n2 > 0 : n2 < 0;
}, x = ({ coords: e2, lengths: t2 }, r2) => {
  const o2 = [];
  for (let n2 = 0, s2 = 0; n2 < t2.length; s2 += t2[n2], n2 += 1) {
    const c2 = s2, a2 = [];
    for (; n2 < t2.length - 1 && y(e2, s2 + t2[n2], t2[n2 + 1], r2); n2 += 1, s2 += t2[n2])
      a2.push(s2 + t2[n2] - c2);
    const f2 = e2.slice(2 * c2, 2 * (s2 + t2[n2])), h = e$4(f2, a2, 2);
    for (const e3 of h)
      o2.push(e3 + c2);
  }
  return o2;
};
class g {
  constructor(e2, t2, r2, o2 = false) {
    this._cache = {}, this.vertices = e2, this.indices = t2, this.primitiveType = r2, this.isMapSpace = o2;
  }
  static fromRect({ x: e2, y: t2, width: r2, height: o2 }) {
    const n2 = e2, s2 = t2, c2 = n2 + r2, i2 = s2 + o2;
    return g.fromScreenExtent({ xmin: n2, ymin: s2, xmax: c2, ymax: i2 });
  }
  static fromPath(e2) {
    const t2 = B$1(new t$6(), e2.path, false, false), r2 = t2.coords, s2 = new Uint32Array(x(t2, true)), c2 = new Uint32Array(r2.length / 2);
    for (let o2 = 0; o2 < c2.length; o2++)
      c2[o2] = m$3(Math.floor(r2[2 * o2]), Math.floor(r2[2 * o2 + 1]));
    return new g({ geometry: c2 }, s2, 4);
  }
  static fromGeometry(e2, t2) {
    const o2 = t2.geometry.type;
    switch (o2) {
      case "polygon":
        return g.fromPolygon(e2, t2.geometry);
      case "extent":
        return g.fromMapExtent(e2, t2.geometry);
      default:
        return m.error(new s$6("mapview-bad-type", `Unable to create a mesh from type ${o2}`, t2)), g.fromRect({ x: 0, y: 0, width: 1, height: 1 });
    }
  }
  static fromPolygon(e2, t2) {
    const r2 = C$2(new t$6(), t2, false, false), n2 = r2.coords, i2 = new Uint32Array(x(r2, false)), f2 = new Uint32Array(n2.length / 2), m2 = n$a(), u2 = n$a();
    for (let o2 = 0; o2 < f2.length; o2++)
      r$6(m2, n2[2 * o2], n2[2 * o2 + 1]), e2.toScreen(u2, m2), f2[o2] = m$3(Math.floor(u2[0]), Math.floor(u2[1]));
    return new g({ geometry: f2 }, i2, 4, true);
  }
  static fromScreenExtent({ xmin: e2, xmax: t2, ymin: r2, ymax: o2 }) {
    const n2 = { geometry: new Uint32Array([m$3(e2, r2), m$3(t2, r2), m$3(e2, o2), m$3(e2, o2), m$3(t2, r2), m$3(t2, o2)]) }, s2 = new Uint32Array([0, 1, 2, 3, 4, 5]);
    return new g(n2, s2, 4);
  }
  static fromMapExtent(e2, t2) {
    const [r2, o2] = e2.toScreen([0, 0], [t2.xmin, t2.ymin]), [n2, s2] = e2.toScreen([0, 0], [t2.xmax, t2.ymax]), c2 = { geometry: new Uint32Array([m$3(r2, o2), m$3(n2, o2), m$3(r2, s2), m$3(r2, s2), m$3(n2, o2), m$3(n2, s2)]) }, i2 = new Uint32Array([0, 1, 2, 3, 4, 5]);
    return new g(c2, i2, 4);
  }
  destroy() {
    r$7(this._cache.indexBuffer) && this._cache.indexBuffer.dispose();
    for (const t2 in this._cache.vertexBuffers)
      r$7(this._cache.vertexBuffers[t2]) && this._cache.vertexBuffers[t2].dispose();
  }
  get elementType() {
    return u(this.indices);
  }
  getIndexBuffer(e2, t2 = 35044) {
    return this._cache.indexBuffer || (this._cache.indexBuffer = s$4.createIndex(e2, t2, this.indices)), this._cache.indexBuffer;
  }
  getVertexBuffers(e2, t2 = 35044) {
    return this._cache.vertexBuffers || (this._cache.vertexBuffers = Object.keys(this.vertices).reduce((r2, o2) => __spreadProps(__spreadValues({}, r2), { [o2]: s$4.createVertex(e2, t2, this.vertices[o2]) }), {})), this._cache.vertexBuffers;
  }
}
const a = n$9.getLogger("esri.views.2d.engine.webgl.ClippingInfo"), c = (t2) => parseFloat(t2) / 100;
class n extends a$4 {
  constructor(t2, e2) {
    super(), this._clip = e2, this._cache = {}, this.stage = t2, this._handle = e2.watch("version", () => this._invalidate()), this.ready();
  }
  static fromClipArea(t2, e2) {
    return new n(t2, e2);
  }
  _destroyGL() {
    r$7(this._cache.mesh) && (this._cache.mesh.destroy(), this._cache.mesh = null), r$7(this._cache.vao) && (this._cache.vao.dispose(), this._cache.vao = null);
  }
  destroy() {
    this._destroyGL(), this._handle.remove();
  }
  getVAO(t2, r2, s2, h) {
    const [o2, a2] = r2.size;
    if (this._clip.type !== "geometry" && this._lastWidth === o2 && this._lastHeight === a2 || (this._lastWidth = o2, this._lastHeight = a2, this._destroyGL()), t$3(this._cache.vao)) {
      const e2 = this._createMesh(r2, this._clip), o3 = e2.getIndexBuffer(t2), a3 = e2.getVertexBuffers(t2);
      this._cache.mesh = e2, this._cache.vao = new s$5(t2, s2, h, a3, o3);
    }
    return this._cache.vao;
  }
  _invalidate() {
    this._destroyGL(), this.requestRender();
  }
  _createScreenRect(t2, e2) {
    const [r2, s2] = t2.size, i2 = typeof e2.left == "string" ? c(e2.left) * r2 : e2.left, h = typeof e2.right == "string" ? c(e2.right) * r2 : e2.right, o2 = typeof e2.top == "string" ? c(e2.top) * s2 : e2.top, a2 = typeof e2.bottom == "string" ? c(e2.bottom) * s2 : e2.bottom, n2 = i2, p2 = o2;
    return { x: n2, y: p2, width: Math.max(r2 - h - n2, 0), height: Math.max(s2 - a2 - p2, 0) };
  }
  _createMesh(t2, e2) {
    switch (e2.type) {
      case "rect":
        return g.fromRect(this._createScreenRect(t2, e2));
      case "path":
        return g.fromPath(e2);
      case "geometry":
        return g.fromGeometry(t2, e2);
      default:
        return a.error(new s$6("mapview-bad-type", "Unable to create ClippingInfo mesh from clip of type: ${clip.type}")), g.fromRect({ x: 0, y: 0, width: 1, height: 1 });
    }
  }
}
class o extends r$8 {
  constructor() {
    super(...arguments), this.name = this.constructor.name;
  }
  set clips(e2) {
    this._clips = e2, this.children.forEach((r2) => r2.clips = e2), this._updateClippingInfo();
  }
  doRender(e2) {
    const r2 = this.createRenderParams(e2), { painter: t2, globalOpacity: i2, profiler: n2, drawPhase: o2 } = r2, a2 = o2 === I.LABEL ? 1 : i2 * this.computedOpacity;
    n2.recordContainerStart(this.name), t2.beforeRenderLayer(r2, this._clippingInfos ? 255 : 0, a2), this.updateTransforms(e2.state), this.renderChildren(r2), t2.compositeLayer(r2, a2), n2.recordContainerEnd();
  }
  renderChildren(r2) {
    t$3(this._renderPasses) && (this._renderPasses = this.prepareRenderPasses(r2.painter));
    for (const e2 of this.children)
      e2.beforeRender(r2);
    for (const e2 of this._renderPasses)
      try {
        e2.render(r2);
      } catch (s2) {
      }
    for (const e2 of this.children)
      e2.afterRender(r2);
  }
  createRenderParams(e2) {
    return __spreadProps(__spreadValues({}, e2), { requireFBO: this.requiresDedicatedFBO });
  }
  prepareRenderPasses(e2) {
    return [e2.registerRenderPass({ name: "clip", brushes: [g$1.clip], target: () => this._clippingInfos, drawPhase: I.MAP | I.LABEL | I.LABEL_ALPHA | I.DEBUG | I.HIGHLIGHT })];
  }
  updateTransforms(e2) {
    for (const r2 of this.children)
      r2.setTransform(e2);
  }
  onAttach() {
    super.onAttach(), this._updateClippingInfo();
  }
  onDetach() {
    super.onDetach(), this._updateClippingInfo();
  }
  _updateClippingInfo() {
    if (r$7(this._clippingInfos) && (this._clippingInfos.forEach((e3) => e3.destroy()), this._clippingInfos = null), !this.stage)
      return;
    const e2 = this._clips;
    r$7(e2) && e2.length && (this._clippingInfos = e2.items.map((e3) => n.fromClipArea(this.stage, e3))), this.requestRender();
  }
}
export { a$1 as a, r as b, g$1 as g, i, m$2 as m, n$1 as n, o, r$4 as r, s$2 as s };
