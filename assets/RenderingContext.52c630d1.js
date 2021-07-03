import { t as t$3 } from "./ShaderCompiler.b19da10d.js";
import { a0 as t$4 } from "./vendor.74d5941c.js";
import { B } from "./renderState.cca58848.js";
import { n } from "./FramebufferObject.18518335.js";
class t$2 {
  constructor(r2) {
    this._programCacheByTemplate = new Map(), this._rctx = r2;
  }
  dispose() {
    this._programCacheByTemplate.forEach((r2) => {
      r2.programs.forEach((r3) => {
        r3.dispose();
      });
    }), this._programCacheByTemplate = null;
  }
  getProgram(t2, a2) {
    return this._programCacheByTemplate.has(t2) || this.addProgramTemplate(t2, (a3) => t$3(this._rctx, t2, a3)), this.getProgramTemplateInstance(t2, a2);
  }
  addProgramTemplate(r2, t2) {
    this._programCacheByTemplate.set(r2, { constructor: t2, programs: new Map() });
  }
  getProgramTemplateInstance(r2, t2) {
    const a2 = this._programCacheByTemplate.get(r2);
    if (a2) {
      const r3 = t2 ? JSON.stringify(t2) : "default";
      if (!a2.programs.has(r3)) {
        const e2 = a2.constructor(t2);
        a2.programs.set(r3, e2);
      }
      return a2.programs.get(r3);
    }
    return null;
  }
}
const o$1 = 33984;
class t$1 {
  constructor() {
    for (this._current = new Array(), this._max = new Array(), this._allocations = new Map(); this._current.length < 6; )
      this._current.push(0), this._max.push(0);
  }
  resetMax() {
    for (this._max.length = 0; this._max.length < this._current.length; )
      this._max.push(0);
  }
  increment(t2, e2) {
    const s = ++this._current[t2];
    this._max[t2] = Math.max(s, this._max[t2]);
  }
  decrement(t2, e2) {
    --this._current[t2];
  }
  get max() {
    return this._max;
  }
  get current() {
    return this._current;
  }
  printResourceCount() {
    if (console.log("Live objects:"), console.log(`Textures: ${this._current[0]}`), console.log(`Buffers: ${this._current[1]}`), console.log(`VAOs: ${this._current[2]}`), console.log(`Programs: ${this._current[3]}`), console.log(`Framebuffers: ${this._current[4]}`), console.log(`Renderbuffers: ${this._current[5]}`), this._allocations.size > 0) {
      console.log(`${this._allocations.size} live object allocations:`);
      const t2 = new Map();
      this._allocations.forEach((e2) => {
        var s;
        t2.set(e2, ((s = t2.get(e2)) != null ? s : 0) + 1);
      }), t2.forEach((t3, e2) => console.log(t3, " : ", e2));
    }
  }
}
class E {
  constructor(e2, E2, t2, T, r2, _, i2, u2) {
    this.createQuery = e2, this.resultAvailable = E2, this.getResult = t2, this.disjoint = T, this.beginTimeElapsed = r2, this.endTimeElapsed = _, this.createTimestamp = i2, this.timestampBits = u2;
  }
}
function t(t2, T) {
  if (T.disjointTimerQuery)
    return null;
  let r2 = t2.getExtension("EXT_disjoint_timer_query_webgl2");
  return r2 && n(t2) ? new E(() => t2.createQuery(), (e2) => t2.getQueryParameter(e2, t2.QUERY_RESULT_AVAILABLE), (e2) => t2.getQueryParameter(e2, t2.QUERY_RESULT), () => t2.getParameter(r2.GPU_DISJOINT_EXT), (e2) => t2.beginQuery(r2.TIME_ELAPSED_EXT, e2), () => t2.endQuery(r2.TIME_ELAPSED_EXT), (e2) => r2.queryCounterEXT(e2, r2.TIMESTAMP_EXT), () => t2.getQuery(r2.TIMESTAMP_EXT, r2.QUERY_COUNTER_BITS_EXT)) : (r2 = t2.getExtension("EXT_disjoint_timer_query"), r2 ? new E(() => r2.createQueryEXT(), (e2) => r2.getQueryObjectEXT(e2, r2.QUERY_RESULT_AVAILABLE_EXT), (e2) => r2.getQueryObjectEXT(e2, r2.QUERY_RESULT_EXT), () => t2.getParameter(r2.GPU_DISJOINT_EXT), (e2) => r2.beginQueryEXT(r2.TIME_ELAPSED_EXT, e2), () => r2.endQueryEXT(r2.TIME_ELAPSED_EXT), (e2) => r2.queryCounterEXT(e2, r2.TIMESTAMP_EXT), () => r2.getQueryEXT(r2.TIMESTAMP_EXT, r2.QUERY_COUNTER_BITS_EXT)) : null);
}
function A(A2, _) {
  if (_.disjointTimerQuery)
    return null;
  if (n(A2))
    return { drawBuffers: A2.drawBuffers.bind(A2), MAX_DRAW_BUFFERS: A2.MAX_DRAW_BUFFERS, MAX_COLOR_ATTACHMENTS: A2.MAX_COLOR_ATTACHMENTS };
  if (_.drawBuffers)
    return null;
  const e2 = A2.getExtension("WEBGL_draw_buffers");
  return e2 ? { drawBuffers: e2.drawBuffersWEBGL.bind(e2), MAX_DRAW_BUFFERS: e2.MAX_DRAW_BUFFERS_WEBGL, MAX_COLOR_ATTACHMENTS: e2.MAX_COLOR_ATTACHMENTS_WEBGL } : null;
}
function r$2(r2) {
  if (n(r2))
    return { drawArraysInstanced: r2.drawArraysInstanced.bind(r2), drawElementsInstanced: r2.drawElementsInstanced.bind(r2), vertexAttribDivisor: r2.vertexAttribDivisor.bind(r2) };
  const t2 = r2.getExtension("ANGLE_instanced_arrays");
  return t2 ? { drawArraysInstanced: t2.drawArraysInstancedANGLE.bind(t2), drawElementsInstanced: t2.drawElementsInstancedANGLE.bind(t2), vertexAttribDivisor: t2.vertexAttribDivisorANGLE.bind(t2) } : null;
}
function e(e2, t2) {
  const n2 = t2.loseContext && e2.getExtension("WEBGL_lose_context");
  return n2 ? { loseRenderingContext: () => n2.loseContext() } : null;
}
function r$1(r2, t2) {
  if (n(r2))
    return { createVertexArray: r2.createVertexArray.bind(r2), deleteVertexArray: r2.deleteVertexArray.bind(r2), bindVertexArray: r2.bindVertexArray.bind(r2) };
  if (t2.vao)
    return null;
  const n$1 = r2.getExtension("OES_vertex_array_object") || r2.getExtension("MOZ_OES_vertex_array_object") || r2.getExtension("WEBKIT_OES_vertex_array_object");
  return n$1 ? { createVertexArray: n$1.createVertexArrayOES.bind(n$1), deleteVertexArray: n$1.deleteVertexArrayOES.bind(n$1), bindVertexArray: n$1.bindVertexArrayOES.bind(n$1) } : null;
}
function o(t$12, o2) {
  const T = o2 && o2.disabledExtensions || {}, s = o2 && o2.debugWebGLExtensions || {};
  let x, C, A$1, F, G, O, B2, D, M, c, X, d = null, g = null, P = null, L = null;
  return { get drawBuffers() {
    return X || (X = A(t$12, T)), X;
  }, get instancing() {
    return x || (x = r$2(t$12)), x;
  }, get vao() {
    return C || (C = r$1(t$12, T)), C;
  }, get compressedTextureETC() {
    return A$1 || (A$1 = l$1(t$12, T)), A$1;
  }, get compressedTextureS3TC() {
    return F || (F = u(t$12, T)), F;
  }, get textureFilterAnisotropic() {
    return G || (G = a(t$12, T)), G;
  }, get disjointTimerQuery() {
    return O || (O = t(t$12, T)), O;
  }, get textureFloat() {
    return B2 || (B2 = R(t$12, T)), B2;
  }, get colorBufferFloat() {
    return D || (D = f(t$12, T)), D;
  }, get blendMinMax() {
    return M || (M = i(t$12, T)), M;
  }, get depthTexture() {
    return d === null && (d = S(t$12, T, "depthTexture", true, ["WEBGL_depth_texture", "MOZ_WEBGL_depth_texture", "WEBKIT_WEBGL_depth_texture"])), d;
  }, get standardDerivatives() {
    return g === null && (g = S(t$12, T, "standardDerivatives", true, ["OES_standard_derivatives"])), g;
  }, get shaderTextureLOD() {
    return P === null && (P = S(t$12, T, "shaderTextureLOD", true, ["EXT_shader_texture_lod"])), P;
  }, get fragDepth() {
    return L === null && (L = S(t$12, T, "fragDepth", true, ["EXT_frag_depth"])), L;
  }, get loseContext() {
    return c || (c = e(t$12, s)), c;
  }, enable(t2) {
    return this[t2];
  } };
}
function l$1(t2, e2) {
  if (e2.compressedTextureETC)
    return null;
  const r2 = t2.getExtension("WEBGL_compressed_texture_etc");
  return r2 ? { COMPRESSED_R11_EAC: r2.COMPRESSED_R11_EAC, COMPRESSED_SIGNED_R11_EAC: r2.COMPRESSED_SIGNED_R11_EAC, COMPRESSED_RG11_EAC: r2.COMPRESSED_RG11_EAC, COMPRESSED_SIGNED_RG11_EAC: r2.COMPRESSED_SIGNED_RG11_EAC, COMPRESSED_RGB8_ETC2: r2.COMPRESSED_RGB8_ETC2, COMPRESSED_SRGB8_ETC2: r2.COMPRESSED_SRGB8_ETC2, COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2: r2.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2, COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2: r2.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2, COMPRESSED_RGBA8_ETC2_EAC: r2.COMPRESSED_RGBA8_ETC2_EAC, COMPRESSED_SRGB8_ALPHA8_ETC2_EAC: r2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC } : null;
}
function u(t2, e2) {
  if (e2.compressedTextureS3TC)
    return null;
  const r2 = t2.getExtension("WEBGL_compressed_texture_s3tc");
  return r2 ? { COMPRESSED_RGB_S3TC_DXT1: r2.COMPRESSED_RGB_S3TC_DXT1_EXT, COMPRESSED_RGBA_S3TC_DXT1: r2.COMPRESSED_RGBA_S3TC_DXT1_EXT, COMPRESSED_RGBA_S3TC_DXT3: r2.COMPRESSED_RGBA_S3TC_DXT3_EXT, COMPRESSED_RGBA_S3TC_DXT5: r2.COMPRESSED_RGBA_S3TC_DXT5_EXT } : null;
}
function i(e2, r2) {
  if (n(e2))
    return { MIN: e2.MIN, MAX: e2.MAX };
  if (r2.blendMinMax)
    return null;
  {
    const t2 = e2.getExtension("EXT_blend_minmax");
    return t2 ? { MIN: t2.MIN_EXT, MAX: t2.MAX_EXT } : null;
  }
}
function a(t2, e2) {
  if (e2.textureFilterAnisotropic)
    return null;
  const r2 = t2.getExtension("EXT_texture_filter_anisotropic") || t2.getExtension("MOZ_EXT_texture_filter_anisotropic") || t2.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
  return r2 ? { MAX_TEXTURE_MAX_ANISOTROPY: r2.MAX_TEXTURE_MAX_ANISOTROPY_EXT, TEXTURE_MAX_ANISOTROPY: r2.TEXTURE_MAX_ANISOTROPY_EXT } : null;
}
function R(e2, r2) {
  if (n(e2))
    return { textureFloat: true, textureFloatLinear: !r2.textureFloatLinear && !!e2.getExtension("OES_texture_float_linear"), textureHalfFloat: true, textureHalfFloatLinear: !r2.textureHalfFloatLinear && !!e2.getExtension("OES_texture_half_float_linear"), HALF_FLOAT: e2.HALF_FLOAT };
  if (e2 instanceof WebGLRenderingContext) {
    const t2 = !r2.textureHalfFloat && e2.getExtension("OES_texture_half_float");
    return { textureFloat: !r2.textureFloat && !!e2.getExtension("OES_texture_float"), textureFloatLinear: !r2.textureFloatLinear && !!e2.getExtension("OES_texture_float_linear"), textureHalfFloat: !!t2, textureHalfFloatLinear: !r2.textureHalfFloatLinear && !!e2.getExtension("OES_texture_half_float_linear"), HALF_FLOAT: t2 ? t2.HALF_FLOAT_OES : void 0 };
  }
  return null;
}
function f(e2, r2) {
  if (n(e2)) {
    const t2 = !r2.colorBufferFloat && e2.getExtension("EXT_color_buffer_half_float"), _ = !r2.colorBufferFloat && e2.getExtension("EXT_color_buffer_float"), n2 = !r2.colorBufferFloat && e2.getExtension("EXT_float_blend");
    return t2 || _ || n2 ? { textureFloat: !!_, textureHalfFloat: !!t2, R16F: e2.R16F, RG16F: e2.RG16F, RGBA16F: e2.RGBA16F, R32F: e2.R32F, RG32F: e2.RG32F, RGBA32F: e2.RGBA32F, R11F_G11F_B10F: e2.R11F_G11F_B10F, RGB16F: e2.RGB16F } : null;
  }
  if (e2 instanceof WebGLRenderingContext) {
    const t2 = !r2.colorBufferFloat && e2.getExtension("EXT_color_buffer_half_float"), _ = !r2.colorBufferFloat && e2.getExtension("WEBGL_color_buffer_float"), n2 = !r2.colorBufferFloat && e2.getExtension("EXT_float_blend");
    return t2 || _ || n2 ? { textureFloat: !!_, textureHalfFloat: !!t2, RGBA16F: t2 ? t2.RGBA16F_EXT : void 0, RGB16F: t2 ? t2.RGB16F_EXT : void 0, RGBA32F: _ ? _.RGBA32F_EXT : void 0 } : null;
  }
  return null;
}
function S(e2, r2, _, n$1, E2) {
  if (n$1 && n(e2))
    return true;
  if (r2[_])
    return false;
  for (const t2 of E2)
    if (e2.getExtension(t2))
      return true;
  return false;
}
class l {
  constructor(t2, s) {
    this.gl = null, this.instanceCounter = new t$1(), this._blendEnabled = false, this._blendColorState = { r: 0, g: 0, b: 0, a: 0 }, this._blendFunctionState = { srcRGB: 1, dstRGB: 0, srcAlpha: 1, dstAlpha: 0 }, this._blendEquationState = { mode: 32774, modeAlpha: 32774 }, this._colorMaskState = { r: true, g: true, b: true, a: true }, this._polygonCullingEnabled = false, this._cullFace = 1029, this._frontFace = 2305, this._scissorTestEnabled = false, this._scissorRect = { x: 0, y: 0, width: 0, height: 0 }, this._depthTestEnabled = false, this._depthFunction = 513, this._clearDepth = 1, this._depthWriteEnabled = true, this._depthRange = { zNear: 0, zFar: 1 }, this._viewport = null, this._stencilTestEnabled = false, this._polygonOffsetFillEnabled = false, this._polygonOffset = [0, 0], this._stencilFunction = { face: 1032, func: 519, ref: 0, mask: 1 }, this._clearStencil = 0, this._stencilWriteMask = 1, this._stencilOperation = { face: 1032, fail: 7680, zFail: 7680, zPass: 7680 }, this._clearColor = { r: 0, g: 0, b: 0, a: 0 }, this._activeShaderProgram = null, this._activeVertexBuffer = null, this._activeIndexBuffer = null, this._activeFramebuffer = null, this._activeRenderbuffer = null, this._activeTextureUnit = 0, this._textureUnitMap = [], this._numOfDrawCalls = 0, this._numOfTriangles = 0, this.contextVersion = n(t2) ? "webgl2" : "webgl", this.gl = t2, t2 instanceof WebGLRenderingContext && this.gl.getExtension("OES_element_index_uint"), this._capabilities = o(t2, s);
    const l2 = this.gl.getParameter(this.gl.VIEWPORT);
    this._viewport = { x: l2[0], y: l2[1], width: l2[2], height: l2[3] }, this._stateTracker = new B({ setBlending: (t3) => {
      if (t3) {
        this.setBlendingEnabled(true), this.setBlendEquationSeparate(t3.opRgb, t3.opAlpha), this.setBlendFunctionSeparate(t3.srcRgb, t3.dstRgb, t3.srcAlpha, t3.dstAlpha);
        const e2 = t3.color;
        this.setBlendColor(e2.r, e2.g, e2.b, e2.a);
      } else
        this.setBlendingEnabled(false);
    }, setCulling: (t3) => {
      t3 ? (this.setFaceCullingEnabled(true), this.setCullFace(t3.face), this.setFrontFace(t3.mode)) : this.setFaceCullingEnabled(false);
    }, setPolygonOffset: (t3) => {
      t3 ? (this.setPolygonOffsetFillEnabled(true), this.setPolygonOffset(t3.factor, t3.units)) : this.setPolygonOffsetFillEnabled(false);
    }, setDepthTest: (t3) => {
      t3 ? (this.setDepthTestEnabled(true), this.setDepthFunction(t3.func)) : this.setDepthTestEnabled(false);
    }, setStencilTest: (t3) => {
      if (t3) {
        this.setStencilTestEnabled(true);
        const e2 = t3.function;
        this.setStencilFunction(e2.func, e2.ref, e2.mask);
        const i2 = t3.operation;
        this.setStencilOp(i2.fail, i2.zFail, i2.zPass);
      } else
        this.setStencilTestEnabled(false);
    }, setDepthWrite: (t3) => {
      t3 ? (this.setDepthWriteEnabled(true), this.setDepthRange(t3.zNear, t3.zFar)) : this.setDepthWriteEnabled(false);
    }, setColorWrite: (t3) => {
      t3 ? this.setColorMask(t3.r, t3.g, t3.b, t3.a) : this.setColorMask(false, false, false, false);
    }, setStencilWrite: (t3) => {
      t3 ? this.setStencilWriteMask(t3.mask) : this.setStencilWriteMask(0);
    } }), this.enforceState();
  }
  isWebGL2Context() {
    return this.contextVersion === "webgl2";
  }
  get contextAttributes() {
    return this.gl.getContextAttributes();
  }
  get parameters() {
    if (!this._parameters) {
      const t2 = this.capabilities.textureFilterAnisotropic;
      this._parameters = { versionString: this.gl.getParameter(this.gl.VERSION), maxVertexTextureImageUnits: this.gl.getParameter(this.gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS), maxVertexAttributes: this.gl.getParameter(this.gl.MAX_VERTEX_ATTRIBS), maxMaxAnisotropy: t2 ? this.gl.getParameter(t2.MAX_TEXTURE_MAX_ANISOTROPY) : void 0, maxTextureImageUnits: this.gl.getParameter(this.gl.MAX_TEXTURE_IMAGE_UNITS), maxTextureSize: this.gl.getParameter(this.gl.MAX_TEXTURE_SIZE) };
    }
    return this._parameters;
  }
  dispose() {
    this.bindVAO(null), this.unbindBuffer(34962), this.unbindBuffer(34963), this._textureUnitMap = [], this.gl = null, this._capabilities = null;
  }
  setPipelineState(t2) {
    this._stateTracker.setPipeline(t2);
  }
  setBlendingEnabled(t2) {
    this._blendEnabled !== t2 && (t2 === true ? this.gl.enable(this.gl.BLEND) : this.gl.disable(this.gl.BLEND), this._blendEnabled = t2, this._stateTracker.invalidateBlending());
  }
  setBlendColor(t2, e2, i2, s) {
    t2 === this._blendColorState.r && e2 === this._blendColorState.g && i2 === this._blendColorState.b && s === this._blendColorState.a || (this.gl.blendColor(t2, e2, i2, s), this._blendColorState.r = t2, this._blendColorState.g = e2, this._blendColorState.b = i2, this._blendColorState.a = s, this._stateTracker.invalidateBlending());
  }
  setBlendFunction(t2, e2) {
    t2 === this._blendFunctionState.srcRGB && e2 === this._blendFunctionState.dstRGB || (this.gl.blendFunc(t2, e2), this._blendFunctionState.srcRGB = t2, this._blendFunctionState.srcAlpha = t2, this._blendFunctionState.dstRGB = e2, this._blendFunctionState.dstAlpha = e2, this._stateTracker.invalidateBlending());
  }
  setBlendFunctionSeparate(t2, e2, i2, s) {
    this._blendFunctionState.srcRGB === t2 && this._blendFunctionState.srcAlpha === i2 && this._blendFunctionState.dstRGB === e2 && this._blendFunctionState.dstAlpha === s || (this.gl.blendFuncSeparate(t2, e2, i2, s), this._blendFunctionState.srcRGB = t2, this._blendFunctionState.srcAlpha = i2, this._blendFunctionState.dstRGB = e2, this._blendFunctionState.dstAlpha = s, this._stateTracker.invalidateBlending());
  }
  setBlendEquation(t2) {
    this._blendEquationState.mode !== t2 && (this.gl.blendEquation(t2), this._blendEquationState.mode = t2, this._blendEquationState.modeAlpha = t2, this._stateTracker.invalidateBlending());
  }
  setBlendEquationSeparate(t2, e2) {
    this._blendEquationState.mode === t2 && this._blendEquationState.modeAlpha === e2 || (this.gl.blendEquationSeparate(t2, e2), this._blendEquationState.mode = t2, this._blendEquationState.modeAlpha = e2, this._stateTracker.invalidateBlending());
  }
  setColorMask(t2, e2, i2, s) {
    this._colorMaskState.r === t2 && this._colorMaskState.g === e2 && this._colorMaskState.b === i2 && this._colorMaskState.a === s || (this.gl.colorMask(t2, e2, i2, s), this._colorMaskState.r = t2, this._colorMaskState.g = e2, this._colorMaskState.b = i2, this._colorMaskState.a = s, this._stateTracker.invalidateColorWrite());
  }
  setClearColor(t2, e2, i2, s) {
    this._clearColor.r === t2 && this._clearColor.g === e2 && this._clearColor.b === i2 && this._clearColor.a === s || (this.gl.clearColor(t2, e2, i2, s), this._clearColor.r = t2, this._clearColor.g = e2, this._clearColor.b = i2, this._clearColor.a = s);
  }
  setFaceCullingEnabled(t2) {
    this._polygonCullingEnabled !== t2 && (t2 === true ? this.gl.enable(this.gl.CULL_FACE) : this.gl.disable(this.gl.CULL_FACE), this._polygonCullingEnabled = t2, this._stateTracker.invalidateCulling());
  }
  setPolygonOffsetFillEnabled(t2) {
    this._polygonOffsetFillEnabled !== t2 && (t2 === true ? this.gl.enable(this.gl.POLYGON_OFFSET_FILL) : this.gl.disable(this.gl.POLYGON_OFFSET_FILL), this._polygonOffsetFillEnabled = t2, this._stateTracker.invalidatePolygonOffset());
  }
  setPolygonOffset(t2, e2) {
    this._polygonOffset[0] === t2 && this._polygonOffset[1] === e2 || (this._polygonOffset[0] = t2, this._polygonOffset[1] = e2, this.gl.polygonOffset(t2, e2), this._stateTracker.invalidatePolygonOffset());
  }
  setCullFace(t2) {
    this._cullFace !== t2 && (this.gl.cullFace(t2), this._cullFace = t2, this._stateTracker.invalidateCulling());
  }
  setFrontFace(t2) {
    this._frontFace !== t2 && (this.gl.frontFace(t2), this._frontFace = t2, this._stateTracker.invalidateCulling());
  }
  setScissorTestEnabled(t2) {
    this._scissorTestEnabled !== t2 && (t2 === true ? this.gl.enable(this.gl.SCISSOR_TEST) : this.gl.disable(this.gl.SCISSOR_TEST), this._scissorTestEnabled = t2);
  }
  setScissorRect(t2, e2, i2, s) {
    this._scissorRect.x === t2 && this._scissorRect.y === e2 && this._scissorRect.width === i2 && this._scissorRect.height === s || (this.gl.scissor(t2, e2, i2, s), this._scissorRect.x = t2, this._scissorRect.y = e2, this._scissorRect.width = i2, this._scissorRect.height = s);
  }
  setDepthTestEnabled(t2) {
    this._depthTestEnabled !== t2 && (t2 === true ? this.gl.enable(this.gl.DEPTH_TEST) : this.gl.disable(this.gl.DEPTH_TEST), this._depthTestEnabled = t2, this._stateTracker.invalidateDepthTest());
  }
  setClearDepth(t2) {
    this._clearDepth !== t2 && (this.gl.clearDepth(t2), this._clearDepth = t2);
  }
  setDepthFunction(t2) {
    this._depthFunction !== t2 && (this.gl.depthFunc(t2), this._depthFunction = t2, this._stateTracker.invalidateDepthTest());
  }
  setDepthWriteEnabled(t2) {
    this._depthWriteEnabled !== t2 && (this.gl.depthMask(t2), this._depthWriteEnabled = t2, this._stateTracker.invalidateDepthWrite());
  }
  setDepthRange(t2, e2) {
    this._depthRange.zNear === t2 && this._depthRange.zFar === e2 || (this.gl.depthRange(t2, e2), this._depthRange.zNear = t2, this._depthRange.zFar = e2, this._stateTracker.invalidateDepthWrite());
  }
  setStencilTestEnabled(t2) {
    this._stencilTestEnabled !== t2 && (t2 === true ? this.gl.enable(this.gl.STENCIL_TEST) : this.gl.disable(this.gl.STENCIL_TEST), this._stencilTestEnabled = t2, this._stateTracker.invalidateStencilTest());
  }
  setClearStencil(t2) {
    t2 !== this._clearStencil && (this.gl.clearStencil(t2), this._clearStencil = t2);
  }
  setStencilFunction(t2, e2, i2) {
    this._stencilFunction.func === t2 && this._stencilFunction.ref === e2 && this._stencilFunction.mask === i2 || (this.gl.stencilFunc(t2, e2, i2), this._stencilFunction.face = 1032, this._stencilFunction.func = t2, this._stencilFunction.ref = e2, this._stencilFunction.mask = i2, this._stateTracker.invalidateStencilTest());
  }
  setStencilFunctionSeparate(t2, e2, i2, s) {
    this._stencilFunction.face === t2 && this._stencilFunction.func === e2 && this._stencilFunction.ref === i2 && this._stencilFunction.mask === s || (this.gl.stencilFuncSeparate(t2, e2, i2, s), this._stencilFunction.face = t2, this._stencilFunction.func = e2, this._stencilFunction.ref = i2, this._stencilFunction.mask = s, this._stateTracker.invalidateStencilTest());
  }
  setStencilWriteMask(t2) {
    this._stencilWriteMask !== t2 && (this.gl.stencilMask(t2), this._stencilWriteMask = t2, this._stateTracker.invalidateStencilWrite());
  }
  setStencilOp(t2, e2, i2) {
    this._stencilOperation.fail === t2 && this._stencilOperation.zFail === e2 && this._stencilOperation.zPass === i2 || (this.gl.stencilOp(t2, e2, i2), this._stencilOperation.face = 1032, this._stencilOperation.fail = t2, this._stencilOperation.zFail = e2, this._stencilOperation.zPass = i2, this._stateTracker.invalidateStencilTest());
  }
  setStencilOpSeparate(t2, e2, i2, s) {
    this._stencilOperation.face === t2 && this._stencilOperation.fail === e2 && this._stencilOperation.zFail === i2 && this._stencilOperation.zPass === s || (this.gl.stencilOpSeparate(t2, e2, i2, s), this._stencilOperation.face = t2, this._stencilOperation.face = t2, this._stencilOperation.fail = e2, this._stencilOperation.zFail = i2, this._stencilOperation.zPass = s, this._stateTracker.invalidateStencilTest());
  }
  setActiveTexture(t2) {
    const e2 = this._activeTextureUnit;
    return t2 >= 0 && t2 !== this._activeTextureUnit && (this.gl.activeTexture(o$1 + t2), this._activeTextureUnit = t2), e2;
  }
  clear(t2) {
    t2 && this.gl.clear(t2);
  }
  clearSafe(t2, e2 = 255) {
    t2 && (16384 & t2 && this.setColorMask(true, true, true, true), 256 & t2 && this.setDepthWriteEnabled(true), 1024 & t2 && this.setStencilWriteMask(e2), this.gl.clear(t2));
  }
  drawArrays(t2, e2, i2) {
    this.gl.drawArrays(t2, e2, i2);
  }
  drawElements(t2, e2, i2, s) {
    i2 !== 5123 ? i2 === 5125 && this.gl.drawElements(t2, e2, i2, s) : this.gl.drawElements(t2, e2, i2, s);
  }
  logIno() {
  }
  get capabilities() {
    return this._capabilities;
  }
  setViewport(t2, e2, i2, s) {
    const a2 = this._viewport;
    a2.x === t2 && a2.y === e2 && a2.width === i2 && a2.height === s || (a2.x = t2, a2.y = e2, a2.width = i2, a2.height = s, this.gl.viewport(t2, e2, i2, s));
  }
  getViewport() {
    return { x: this._viewport.x, y: this._viewport.y, width: this._viewport.width, height: this._viewport.height };
  }
  bindProgram(t2) {
    if (!t2)
      return this.gl.useProgram(null), void (this._activeShaderProgram = null);
    this._activeShaderProgram !== t2 && (t2.initialize(), this.gl.useProgram(t2.glName), this._activeShaderProgram = t2);
  }
  bindTexture(t2, e2) {
    (e2 >= this.parameters.maxTextureImageUnits || e2 < 0) && console.error("Input texture unit is out of range of available units!");
    const i2 = this._textureUnitMap[e2];
    if (this.setActiveTexture(e2), t2 == null || t2.glName == null)
      return i2 != null && this.gl.bindTexture(i2.descriptor.target, null), void (this._textureUnitMap[e2] = null);
    i2 !== t2 ? (this.gl.bindTexture(t2.descriptor.target, t2.glName), t2.applyChanges(), this._textureUnitMap[e2] = t2) : t2.applyChanges();
  }
  unbindTextureAllUnits(t2) {
    for (let e2 = 0; e2 < this.parameters.maxTextureImageUnits; e2++)
      this._textureUnitMap[e2] === t2 && this.bindTexture(null, e2);
  }
  bindFramebuffer(e2) {
    if (t$4(e2))
      return this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null), void (this._activeFramebuffer = null);
    this._activeFramebuffer !== e2 && (e2.initializeAndBind(), this._activeFramebuffer = e2);
  }
  bindBuffer(t2) {
    t2 && (t2.bufferType === 34962 ? this._activeVertexBuffer = r(this.gl, t2, t2.bufferType, this._activeVertexBuffer) : this._activeIndexBuffer = r(this.gl, t2, t2.bufferType, this._activeIndexBuffer));
  }
  bindRenderbuffer(t2) {
    const e2 = this.gl;
    t2 || (e2.bindRenderbuffer(e2.RENDERBUFFER, null), this._activeRenderbuffer = null), this._activeRenderbuffer !== t2 && (e2.bindRenderbuffer(e2.RENDERBUFFER, t2.glName), this._activeRenderbuffer = t2);
  }
  unbindBuffer(t2) {
    t2 === 34962 ? this._activeVertexBuffer = r(this.gl, null, t2, this._activeVertexBuffer) : this._activeIndexBuffer = r(this.gl, null, t2, this._activeIndexBuffer);
  }
  bindVAO(t2) {
    t2 ? this._activeVertexArrayObject && this._activeVertexArrayObject === t2 || (t2.bind(), this._activeVertexArrayObject = t2) : this._activeVertexArrayObject && (this._activeVertexArrayObject.unbind(), this._activeVertexArrayObject = null);
  }
  getBoundTexture(t2) {
    return this._textureUnitMap[t2];
  }
  getBoundFramebufferObject() {
    return this._activeFramebuffer;
  }
  getBoundVAO() {
    return this._activeVertexArrayObject;
  }
  resetState() {
    this.bindProgram(null), this.bindVAO(null), this.bindFramebuffer(null), this.unbindBuffer(34962), this.unbindBuffer(34963);
    for (let t2 = 0; t2 < this.parameters.maxTextureImageUnits; t2++)
      this.bindTexture(null, t2);
    this.setBlendingEnabled(false), this.setBlendFunction(1, 0), this.setBlendEquation(32774), this.setBlendColor(0, 0, 0, 0), this.setFaceCullingEnabled(false), this.setCullFace(1029), this.setFrontFace(2305), this.setPolygonOffsetFillEnabled(false), this.setPolygonOffset(0, 0), this.setScissorTestEnabled(false), this.setScissorRect(0, 0, this.gl.canvas.width, this.gl.canvas.height), this.setDepthTestEnabled(false), this.setDepthFunction(513), this.setDepthRange(0, 1), this.setStencilTestEnabled(false), this.setStencilFunction(519, 0, 0), this.setStencilOp(7680, 7680, 7680), this.setClearColor(0, 0, 0, 0), this.setClearDepth(1), this.setClearStencil(0), this.setColorMask(true, true, true, true), this.setStencilWriteMask(4294967295), this.setDepthWriteEnabled(true), this.setViewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
  }
  enforceState() {
    const t2 = this.gl, e2 = this.capabilities.vao;
    e2 && e2.bindVertexArray(null);
    for (let i2 = 0; i2 < this.parameters.maxVertexAttributes; i2++)
      t2.disableVertexAttribArray(i2);
    if (this._activeVertexBuffer ? t2.bindBuffer(this._activeVertexBuffer.bufferType, this._activeVertexBuffer.glName) : t2.bindBuffer(34962, null), this._activeIndexBuffer ? t2.bindBuffer(this._activeIndexBuffer.bufferType, this._activeIndexBuffer.glName) : t2.bindBuffer(34963, null), e2 && this._activeVertexArrayObject) {
      const t3 = this._activeVertexArrayObject;
      this._activeVertexArrayObject && (this._activeVertexArrayObject.unbind(), this._activeVertexArrayObject = null), this.bindVAO(t3);
    }
    t2.bindFramebuffer(t2.FRAMEBUFFER, this._activeFramebuffer ? this._activeFramebuffer.glName : null), t2.useProgram(this._activeShaderProgram ? this._activeShaderProgram.glName : null), t2.blendColor(this._blendColorState.r, this._blendColorState.g, this._blendColorState.b, this._blendColorState.a), t2.bindRenderbuffer(t2.RENDERBUFFER, this._activeRenderbuffer ? this._activeRenderbuffer.glName : null), this._blendEnabled === true ? t2.enable(this.gl.BLEND) : t2.disable(this.gl.BLEND), t2.blendEquationSeparate(this._blendEquationState.mode, this._blendEquationState.modeAlpha), t2.blendFuncSeparate(this._blendFunctionState.srcRGB, this._blendFunctionState.dstRGB, this._blendFunctionState.srcAlpha, this._blendFunctionState.dstAlpha), t2.clearColor(this._clearColor.r, this._clearColor.g, this._clearColor.b, this._clearColor.a), t2.clearDepth(this._clearDepth), t2.clearStencil(this._clearStencil), t2.colorMask(this._colorMaskState.r, this._colorMaskState.g, this._colorMaskState.b, this._colorMaskState.a), t2.cullFace(this._cullFace), t2.depthFunc(this._depthFunction), t2.depthRange(this._depthRange.zNear, this._depthRange.zFar), this._depthTestEnabled === true ? t2.enable(t2.DEPTH_TEST) : t2.disable(t2.DEPTH_TEST), t2.depthMask(this._depthWriteEnabled), t2.frontFace(this._frontFace), t2.lineWidth(1), this._polygonCullingEnabled === true ? t2.enable(t2.CULL_FACE) : t2.disable(t2.CULL_FACE), t2.polygonOffset(this._polygonOffset[0], this._polygonOffset[1]), this._polygonOffsetFillEnabled === true ? t2.enable(t2.POLYGON_OFFSET_FILL) : t2.disable(t2.POLYGON_OFFSET_FILL), t2.scissor(this._scissorRect.x, this._scissorRect.y, this._scissorRect.width, this._scissorRect.height), this._scissorTestEnabled === true ? t2.enable(t2.SCISSOR_TEST) : t2.disable(t2.SCISSOR_TEST), t2.stencilFunc(this._stencilFunction.func, this._stencilFunction.ref, this._stencilFunction.mask), t2.stencilOpSeparate(this._stencilOperation.face, this._stencilOperation.fail, this._stencilOperation.zFail, this._stencilOperation.zPass), this._stencilTestEnabled === true ? t2.enable(t2.STENCIL_TEST) : t2.disable(t2.STENCIL_TEST), t2.stencilMask(this._stencilWriteMask);
    for (let i2 = 0; i2 < this.parameters.maxTextureImageUnits; i2++) {
      t2.activeTexture(o$1 + i2), t2.bindTexture(3553, null);
      const e3 = this._textureUnitMap[i2];
      e3 && t2.bindTexture(e3.descriptor.target, e3.glName);
    }
    t2.activeTexture(o$1 + this._activeTextureUnit), t2.viewport(this._viewport.x, this._viewport.y, this._viewport.width, this._viewport.height);
  }
}
function r(t2, e2, i2, s) {
  return e2 ? s !== e2 && t2.bindBuffer(i2, e2.glName) : t2.bindBuffer(i2, null), e2;
}
export { t as a, l, t$2 as t };
