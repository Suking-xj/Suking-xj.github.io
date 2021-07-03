var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a2, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a2, prop, b[prop]);
    }
  return a2;
};
import { o as o$3 } from "./_commonjsHelpers.f2a458db.js";
import { a4 as n$1, a5 as r$3, a6 as o$4 } from "./vendor.74d5941c.js";
var r$2 = o$3(function(e) {
  var r2;
  (r2 = ["precision", "highp", "mediump", "lowp", "attribute", "const", "uniform", "varying", "break", "continue", "do", "for", "while", "if", "else", "in", "out", "inout", "float", "int", "void", "bool", "true", "false", "discard", "return", "mat2", "mat3", "mat4", "vec2", "vec3", "vec4", "ivec2", "ivec3", "ivec4", "bvec2", "bvec3", "bvec4", "sampler1D", "sampler2D", "sampler3D", "samplerCube", "sampler1DShadow", "sampler2DShadow", "struct", "asm", "class", "union", "enum", "typedef", "template", "this", "packed", "goto", "switch", "default", "inline", "noinline", "volatile", "public", "static", "extern", "external", "interface", "long", "short", "double", "half", "fixed", "unsigned", "input", "output", "hvec2", "hvec3", "hvec4", "dvec2", "dvec3", "dvec4", "fvec2", "fvec3", "fvec4", "sampler2DRect", "sampler3DRect", "sampler2DRectShadow", "sizeof", "cast", "namespace", "using"]) !== void 0 && (e.exports = r2);
}), t$1 = o$3(function(e) {
  var r2;
  (r2 = ["<<=", ">>=", "++", "--", "<<", ">>", "<=", ">=", "==", "!=", "&&", "||", "+=", "-=", "*=", "/=", "%=", "&=", "^^", "^=", "|=", "(", ")", "[", "]", ".", "!", "~", "*", "/", "%", "+", "-", "<", ">", "&", "^", "|", "?", ":", "=", ",", ";", "{", "}"]) !== void 0 && (e.exports = r2);
}), o$2 = o$3(function(e) {
  var r2;
  (r2 = ["abs", "acos", "all", "any", "asin", "atan", "ceil", "clamp", "cos", "cross", "dFdx", "dFdy", "degrees", "distance", "dot", "equal", "exp", "exp2", "faceforward", "floor", "fract", "gl_BackColor", "gl_BackLightModelProduct", "gl_BackLightProduct", "gl_BackMaterial", "gl_BackSecondaryColor", "gl_ClipPlane", "gl_ClipVertex", "gl_Color", "gl_DepthRange", "gl_DepthRangeParameters", "gl_EyePlaneQ", "gl_EyePlaneR", "gl_EyePlaneS", "gl_EyePlaneT", "gl_Fog", "gl_FogCoord", "gl_FogFragCoord", "gl_FogParameters", "gl_FragColor", "gl_FragCoord", "gl_FragData", "gl_FragDepth", "gl_FragDepthEXT", "gl_FrontColor", "gl_FrontFacing", "gl_FrontLightModelProduct", "gl_FrontLightProduct", "gl_FrontMaterial", "gl_FrontSecondaryColor", "gl_LightModel", "gl_LightModelParameters", "gl_LightModelProducts", "gl_LightProducts", "gl_LightSource", "gl_LightSourceParameters", "gl_MaterialParameters", "gl_MaxClipPlanes", "gl_MaxCombinedTextureImageUnits", "gl_MaxDrawBuffers", "gl_MaxFragmentUniformComponents", "gl_MaxLights", "gl_MaxTextureCoords", "gl_MaxTextureImageUnits", "gl_MaxTextureUnits", "gl_MaxVaryingFloats", "gl_MaxVertexAttribs", "gl_MaxVertexTextureImageUnits", "gl_MaxVertexUniformComponents", "gl_ModelViewMatrix", "gl_ModelViewMatrixInverse", "gl_ModelViewMatrixInverseTranspose", "gl_ModelViewMatrixTranspose", "gl_ModelViewProjectionMatrix", "gl_ModelViewProjectionMatrixInverse", "gl_ModelViewProjectionMatrixInverseTranspose", "gl_ModelViewProjectionMatrixTranspose", "gl_MultiTexCoord0", "gl_MultiTexCoord1", "gl_MultiTexCoord2", "gl_MultiTexCoord3", "gl_MultiTexCoord4", "gl_MultiTexCoord5", "gl_MultiTexCoord6", "gl_MultiTexCoord7", "gl_Normal", "gl_NormalMatrix", "gl_NormalScale", "gl_ObjectPlaneQ", "gl_ObjectPlaneR", "gl_ObjectPlaneS", "gl_ObjectPlaneT", "gl_Point", "gl_PointCoord", "gl_PointParameters", "gl_PointSize", "gl_Position", "gl_ProjectionMatrix", "gl_ProjectionMatrixInverse", "gl_ProjectionMatrixInverseTranspose", "gl_ProjectionMatrixTranspose", "gl_SecondaryColor", "gl_TexCoord", "gl_TextureEnvColor", "gl_TextureMatrix", "gl_TextureMatrixInverse", "gl_TextureMatrixInverseTranspose", "gl_TextureMatrixTranspose", "gl_Vertex", "greaterThan", "greaterThanEqual", "inversesqrt", "length", "lessThan", "lessThanEqual", "log", "log2", "matrixCompMult", "max", "min", "mix", "mod", "normalize", "not", "notEqual", "pow", "radians", "reflect", "refract", "sign", "sin", "smoothstep", "sqrt", "step", "tan", "texture2D", "texture2DLod", "texture2DProj", "texture2DProjLod", "textureCube", "textureCubeLod", "texture2DLodEXT", "texture2DProjLodEXT", "textureCubeLodEXT", "texture2DGradEXT", "texture2DProjGradEXT", "textureCubeGradEXT"]) !== void 0 && (e.exports = r2);
});
n$1.getLogger("esri/views/webgl");
function o$1(r2) {
}
function n(n2) {
  return window.WebGL2RenderingContext && n2 instanceof window.WebGL2RenderingContext;
}
const a = 4, s$1 = 0;
class o {
  constructor(t2, e, i = null) {
    this._context = null, this._glName = null, this._descriptor = void 0, this._samplingModeDirty = false, this._wrapModeDirty = false, t2.instanceCounter.increment(0, this), this._context = t2, this._descriptor = __spreadValues({ target: 3553, samplingMode: 9729, wrapMode: 10497, flipped: false, hasMipmap: false, isOpaque: false, unpackAlignment: 4, preMultiplyAlpha: false }, e), this.setData(i);
  }
  get glName() {
    return this._glName;
  }
  get descriptor() {
    return this._descriptor;
  }
  dispose() {
    if (this._context && this._context.gl) {
      if (this._glName) {
        const t2 = this._context.gl;
        this._context.unbindTextureAllUnits(this), t2.deleteTexture(this._glName), this._glName = null;
      }
      this._context.instanceCounter.decrement(0, this), this._context = null;
    }
  }
  release() {
    this.dispose();
  }
  resize(t2, e) {
    const i = this._descriptor;
    i.width === t2 && i.height === e || (i.width = t2, i.height = e, this.setData(null));
  }
  setData(e) {
    if (!this._context || !this._context.gl)
      return;
    const i = this._context.gl;
    this._glName || (this._glName = i.createTexture()), e === void 0 && (e = null), e === null && (this._descriptor.width = this._descriptor.width || a, this._descriptor.height = this._descriptor.height || a);
    const n2 = this._context.getBoundTexture(s$1);
    this._context.bindTexture(this, s$1);
    const p = this._descriptor;
    o._validateTexture(this._context, p), i.pixelStorei(i.UNPACK_ALIGNMENT, p.unpackAlignment), i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, p.flipped ? 1 : 0), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, p.preMultiplyAlpha ? 1 : 0);
    const h2 = p.pixelFormat;
    let l = p.internalFormat ? p.internalFormat : h2;
    if (e instanceof ImageData || e instanceof HTMLImageElement || e instanceof HTMLCanvasElement || e instanceof HTMLVideoElement) {
      let t2 = e.width, a2 = e.height;
      e instanceof HTMLVideoElement && (t2 = e.videoWidth, a2 = e.videoHeight), p.width && p.height && console.assert(t2 === p.width && a2 === p.height), i.texImage2D(i.TEXTURE_2D, 0, l, h2, p.dataType, e), p.hasMipmap && this.generateMipmap(), p.width === void 0 && (p.width = t2), p.height === void 0 && (p.height = a2);
    } else {
      p.width != null && p.height != null || console.error("Width and height must be specified!"), i.DEPTH24_STENCIL8 && l === i.DEPTH_STENCIL && (l = i.DEPTH24_STENCIL8);
      let a2 = p.width, s2 = p.height;
      if (r$1(e)) {
        const t2 = Math.round(Math.log(Math.max(a2, s2)) / Math.LN2) + 1;
        p.hasMipmap = p.hasMipmap && t2 === e.levels.length;
        for (let o2 = 0; ; ++o2) {
          const t3 = e.levels[Math.min(o2, e.levels.length - 1)];
          if (i.compressedTexImage2D(i.TEXTURE_2D, o2, l, a2, s2, 0, t3), a2 === 1 && s2 === 1 || !p.hasMipmap)
            break;
          a2 = Math.max(1, a2 >> 1), s2 = Math.max(1, s2 >> 1);
        }
      } else if (r$3(e))
        i.texImage2D(i.TEXTURE_2D, 0, l, a2, s2, 0, h2, p.dataType, e), p.hasMipmap && this.generateMipmap();
      else
        for (let t2 = 0; i.texImage2D(i.TEXTURE_2D, t2, l, a2, s2, 0, h2, p.dataType, null), (a2 !== 1 || s2 !== 1) && p.hasMipmap; ++t2)
          a2 = Math.max(1, a2 >> 1), s2 = Math.max(1, s2 >> 1);
    }
    o._applySamplingMode(i, this._descriptor), o._applyWrapMode(i, this._descriptor), o._applyAnisotropicFilteringParameters(this._context, this._descriptor), n2 && this._context.bindTexture(n2, s$1);
  }
  updateData(t2, e, i, a2, o2, r2) {
    r2 || console.error("An attempt to use uninitialized data!"), this._glName || console.error("An attempt to update uninitialized texture!");
    const n2 = this._context.gl, p = this._descriptor, h2 = this._context.getBoundTexture(s$1);
    this._context.bindTexture(this, s$1), (e < 0 || i < 0 || a2 > p.width || o2 > p.height || e + a2 > p.width || i + o2 > p.height) && console.error("An attempt to update out of bounds of the texture!"), n2.pixelStorei(n2.UNPACK_ALIGNMENT, p.unpackAlignment), n2.pixelStorei(n2.UNPACK_FLIP_Y_WEBGL, p.flipped ? 1 : 0), n2.pixelStorei(n2.UNPACK_PREMULTIPLY_ALPHA_WEBGL, p.preMultiplyAlpha ? 1 : 0), r2 instanceof ImageData || r2 instanceof HTMLImageElement || r2 instanceof HTMLCanvasElement || r2 instanceof HTMLVideoElement ? n2.texSubImage2D(n2.TEXTURE_2D, t2, e, i, p.pixelFormat, p.dataType, r2) : n2.texSubImage2D(n2.TEXTURE_2D, t2, e, i, a2, o2, p.pixelFormat, p.dataType, r2), this._context.bindTexture(h2, s$1);
  }
  generateMipmap() {
    const t2 = this._descriptor;
    t2.hasMipmap || (t2.hasMipmap = true, this._samplingModeDirty = true, o._validateTexture(this._context, t2)), t2.samplingMode === 9729 ? (this._samplingModeDirty = true, t2.samplingMode = 9985) : t2.samplingMode === 9728 && (this._samplingModeDirty = true, t2.samplingMode = 9984);
    const e = this._context.getBoundTexture(s$1);
    this._context.bindTexture(this, s$1);
    const i = this._context.gl;
    i.generateMipmap(i.TEXTURE_2D), this._context.bindTexture(e, s$1);
  }
  setSamplingMode(t2) {
    t2 !== this._descriptor.samplingMode && (this._descriptor.samplingMode = t2, o._validateTexture(this._context, this._descriptor), this._samplingModeDirty = true);
  }
  setWrapMode(t2) {
    t2 !== this._descriptor.wrapMode && (this._descriptor.wrapMode = t2, o._validateTexture(this._context, this._descriptor), this._wrapModeDirty = true);
  }
  applyChanges() {
    const t2 = this._context.gl, e = this._descriptor;
    this._samplingModeDirty && (o._applySamplingMode(t2, e), this._samplingModeDirty = false), this._wrapModeDirty && (o._applyWrapMode(t2, e), this._wrapModeDirty = false);
  }
  static _validateTexture(t2, a2) {
    (a2.width < 0 || a2.height < 0) && console.error("Negative dimension parameters are not allowed!");
    const s2 = o$4(a2.width) && o$4(a2.height);
    n(t2.gl) || s2 || (typeof a2.wrapMode == "number" ? a2.wrapMode !== 33071 && console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!") : a2.wrapMode.s === 33071 && a2.wrapMode.t === 33071 || console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"), a2.hasMipmap && console.error("Mipmapping requires power-of-two textures!"));
  }
  static _applySamplingMode(t2, e) {
    let i = e.samplingMode, a2 = e.samplingMode;
    i === 9985 || i === 9987 ? (i = 9729, e.hasMipmap || (a2 = 9729)) : i !== 9984 && i !== 9986 || (i = 9728, e.hasMipmap || (a2 = 9728)), t2.texParameteri(t2.TEXTURE_2D, t2.TEXTURE_MAG_FILTER, i), t2.texParameteri(t2.TEXTURE_2D, t2.TEXTURE_MIN_FILTER, a2);
  }
  static _applyWrapMode(t2, e) {
    typeof e.wrapMode == "number" ? (t2.texParameteri(t2.TEXTURE_2D, t2.TEXTURE_WRAP_S, e.wrapMode), t2.texParameteri(t2.TEXTURE_2D, t2.TEXTURE_WRAP_T, e.wrapMode)) : (t2.texParameteri(t2.TEXTURE_2D, t2.TEXTURE_WRAP_S, e.wrapMode.s), t2.texParameteri(t2.TEXTURE_2D, t2.TEXTURE_WRAP_T, e.wrapMode.t));
  }
  static _applyAnisotropicFilteringParameters(t2, e) {
    if (e.maxAnisotropy == null)
      return;
    const i = t2.capabilities.textureFilterAnisotropic;
    if (!i)
      return;
    const a2 = t2.gl;
    a2.texParameterf(a2.TEXTURE_2D, i.TEXTURE_MAX_ANISOTROPY, e.maxAnisotropy);
  }
}
function r$1(e) {
  return r$3(e) && "type" in e && e.type === "compressed";
}
class t {
  constructor(t2, e) {
    this._context = t2, this._desc = e, this._context.instanceCounter.increment(5, this);
    const i = this._context.gl;
    this.glName = i.createRenderbuffer(), this._context.bindRenderbuffer(this), i.renderbufferStorage(i.RENDERBUFFER, e.internalFormat, e.width, e.height);
  }
  get descriptor() {
    return this._desc;
  }
  resize(t2, e) {
    const i = this._desc;
    if (i.width === t2 && i.height === e)
      return;
    i.width = t2, i.height = e;
    const n2 = this._context.gl;
    this._context.bindRenderbuffer(this), n2.renderbufferStorage(n2.RENDERBUFFER, i.internalFormat, i.width, i.height);
  }
  dispose() {
    this._context && (this._context.gl.deleteRenderbuffer(this.glName), this._context.instanceCounter.decrement(5, this), this._context = null);
  }
}
const s = n$1.getLogger("esri.views.webgl.FrameBufferObject");
class r {
  constructor(t$12, s2, h2, n2) {
    if (this._context = t$12, this._glName = null, this._depthAttachment = null, this._stencilAttachment = null, this._colorAttachments = new Map(), this._initialized = false, this._desc = __spreadValues({}, s2), t$12.instanceCounter.increment(4, this), h2) {
      let i;
      var o$12;
      if (Array.isArray(h2))
        for (const s3 of h2) {
          const { attachmentPoint: r2, texture: h3 } = s3, n3 = h3 instanceof o ? h3 : new o(t$12, h3);
          i = n3.descriptor, this._colorAttachments.set(r2, n3), this._validateColorAttachmentPoint(r2), this._validateTextureDimensions(i, this._desc);
        }
      else
        h2 instanceof o ? (i = h2.descriptor, this._colorAttachments.set(36064, h2)) : (i = h2, this._colorAttachments.set(36064, new o(t$12, h2))), ((o$12 = this._desc) == null ? void 0 : o$12.colorTarget) !== 0 && console.error("Framebuffer is initialized with a texture however the descriptor indicates using a renderbuffer color attachment!"), this._validateTextureDimensions(i, this._desc);
    }
    if (n2 instanceof t) {
      var c;
      const t2 = (c = this._desc.depthStencilTarget) != null ? c : 3;
      t2 === 2 ? this._stencilAttachment = n2 : t2 === 1 || t2 === 3 ? this._depthAttachment = n2 : console.error('If a Renderbuffer is provided, "depthStencilTarget" must be one of STENCIL_RENDER_BUFFER, DEPTH_RENDER_BUFFER or DEPTH_STENCIL_RENDER_BUFFER'), r._validateBufferDimensions(n2.descriptor, this._desc);
    } else if (n2) {
      let t2;
      this._context.capabilities.depthTexture || console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture as an attachment!"), n2 instanceof o ? (this._depthStencilTexture = n2, t2 = this._depthStencilTexture.descriptor) : (t2 = n2, this._depthStencilTexture = new o(this._context, t2)), this._validateTextureDimensions(t2, this._desc);
    }
  }
  dispose() {
    if (!this._desc)
      return;
    const t2 = this._context.getBoundFramebufferObject();
    if (this._disposeColorAttachments(), this._disposeDepthStencilAttachments(), this._glName) {
      this._context.gl.deleteFramebuffer(this._glName), this._glName = null;
    }
    this._context.bindFramebuffer(t2), this._context.instanceCounter.decrement(4, this), this._desc = null;
  }
  get glName() {
    return this._glName;
  }
  get descriptor() {
    return this._desc;
  }
  get colorTexture() {
    const t2 = this._colorAttachments.get(36064);
    return t2 && t2 instanceof o ? t2 : null;
  }
  get colorAttachment() {
    return this._colorAttachments.get(36064);
  }
  get depthStencilAttachment() {
    return this._depthStencilTexture || this._depthAttachment || this._stencilAttachment;
  }
  get depthStencilTexture() {
    return this._depthStencilTexture;
  }
  get width() {
    return this._desc.width;
  }
  get height() {
    return this._desc.height;
  }
  getColorTexture(t2) {
    const i = this._colorAttachments.get(t2);
    return i && i instanceof o ? i : null;
  }
  attachColorTexture(t2, e = 36064) {
    if (!t2)
      return;
    this._validateColorAttachmentPoint(e);
    const i = t2.descriptor;
    if (this._validateTextureDimensions(i, this._desc), this._disposeColorAttachments(), this._initialized) {
      this._context.bindFramebuffer(this);
      const i2 = this._context.gl;
      i2.framebufferTexture2D(i2.FRAMEBUFFER, e, i2.TEXTURE_2D, t2.glName, 0);
    }
    this._colorAttachments.set(e, t2);
  }
  detachColorTexture(t2 = 36064) {
    const i = this._colorAttachments.get(t2);
    if (i instanceof o) {
      const e = i;
      if (this._initialized) {
        this._context.bindFramebuffer(this);
        const e2 = this._context.gl;
        e2.framebufferTexture2D(e2.FRAMEBUFFER, t2, e2.TEXTURE_2D, null, 0);
      }
      return this._colorAttachments.delete(t2), e;
    }
  }
  attachDepthStencilTexture(t2) {
    if (!t2)
      return;
    const e = t2.descriptor;
    if (e.pixelFormat !== 34041 && console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"), e.dataType !== 34042 && console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"), this._context.capabilities.depthTexture || console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture!"), this._validateTextureDimensions(e, this._desc), this._desc.depthStencilTarget && this._desc.depthStencilTarget !== 4 && (this._desc.depthStencilTarget = 4), this._disposeDepthStencilAttachments(), this._initialized) {
      this._context.bindFramebuffer(this);
      const e2 = this._context.gl;
      e2.framebufferTexture2D(e2.FRAMEBUFFER, e2.DEPTH_STENCIL_ATTACHMENT, e2.TEXTURE_2D, t2.glName, 0);
    }
    this._depthStencilTexture = t2;
  }
  detachDepthStencilTexture() {
    const t2 = this._depthStencilTexture;
    if (t2 && this._initialized) {
      this._context.bindFramebuffer(this);
      const t3 = this._context.gl;
      this._context.gl.framebufferTexture2D(t3.FRAMEBUFFER, t3.DEPTH_STENCIL_ATTACHMENT, t3.TEXTURE_2D, null, 0);
    }
    return this._depthStencilTexture = null, t2;
  }
  attachDepthStencilBuffer(t2) {
    if (!t2)
      return;
    const e = t2.descriptor;
    if (e.internalFormat !== 34041 && e.internalFormat !== 33189 && console.error("Depth/Stencil buffer must have correct internalFormat"), r._validateBufferDimensions(e, this._desc), this._disposeDepthStencilAttachments(), this._desc.depthStencilTarget = e.internalFormat === 34041 ? 3 : 1, this._initialized) {
      this._context.bindFramebuffer(this);
      const e2 = this._context.gl, i = this._desc.depthStencilTarget === 1 ? e2.DEPTH_ATTACHMENT : e2.DEPTH_STENCIL_ATTACHMENT;
      e2.framebufferRenderbuffer(e2.FRAMEBUFFER, i, e2.RENDERBUFFER, t2.glName);
    }
    this._depthAttachment = t2;
  }
  detachDepthStencilBuffer() {
    const t2 = this._context.gl, e = this._depthAttachment;
    if (e && this._initialized) {
      this._context.bindFramebuffer(this);
      const e2 = this._desc.depthStencilTarget === 1 ? t2.DEPTH_ATTACHMENT : t2.DEPTH_STENCIL_ATTACHMENT;
      t2.framebufferRenderbuffer(t2.FRAMEBUFFER, e2, t2.RENDERBUFFER, null);
    }
    return this._depthAttachment = null, e;
  }
  copyToTexture(t2, e, i, s2, r2, h2, n2) {
    (t2 < 0 || e < 0 || r2 < 0 || h2 < 0) && console.error("Offsets cannot be negative!"), (i <= 0 || s2 <= 0) && console.error("Copy width and height must be greater than zero!");
    const o2 = this._desc, c = n2.descriptor;
    n2.descriptor.target !== 3553 && console.error("Texture target must be TEXTURE_2D!"), (t2 + i > o2.width || e + s2 > o2.height || r2 + i > c.width || h2 + s2 > c.height) && console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");
    const a2 = this._context;
    a2.bindTexture(n2, 0), a2.bindFramebuffer(this), a2.gl.copyTexSubImage2D(3553, 0, r2, h2, t2, e, i, s2);
  }
  readPixels(t2, e, i, s2, r2, h2, n2) {
    (i <= 0 || s2 <= 0) && console.error("Copy width and height must be greater than zero!"), n2 || console.error("Target memory is not initialized!"), this._context.bindFramebuffer(this);
    this._context.gl.readPixels(t2, e, i, s2, r2, h2, n2);
  }
  resize(t2, e) {
    const i = this._desc;
    if (i.width !== t2 || i.height !== e) {
      if (!this._initialized)
        return i.width = t2, i.height = e, this._colorAttachments.forEach((i2) => {
          i2 && i2.resize(t2, e);
        }), void (this._depthStencilTexture && this._depthStencilTexture.resize(t2, e));
      i.width = t2, i.height = e, this._colorAttachments.forEach((i2) => {
        i2 && i2.resize(t2, e);
      }), this._depthStencilTexture != null ? this._depthStencilTexture.resize(t2, e) : (this._depthAttachment || this._stencilAttachment) && (this._depthAttachment && this._depthAttachment.resize(t2, e), this._stencilAttachment && this._stencilAttachment.resize(t2, e)), this._context.getBoundFramebufferObject() === this && this._context.bindFramebuffer(null), this._initialized = false;
    }
  }
  initializeAndBind() {
    var t$12, s2, r2, n2;
    const o$12 = this._context.gl;
    if (this._initialized)
      return void o$12.bindFramebuffer(o$12.FRAMEBUFFER, this.glName);
    this._glName && o$12.deleteFramebuffer(this._glName);
    const c = this._context, a2 = o$12.createFramebuffer(), l = this._desc, _ = (t$12 = l.colorTarget) != null ? t$12 : 1, d = (s2 = l.width) != null ? s2 : 1, f = (r2 = l.height) != null ? r2 : 1;
    if (o$12.bindFramebuffer(o$12.FRAMEBUFFER, a2), this._colorAttachments.size === 0)
      if (_ === 0)
        this._colorAttachments.set(36064, h(c, l));
      else {
        const t$13 = new t(c, { internalFormat: 32854, width: d, height: f });
        this._colorAttachments.set(36064, t$13);
      }
    this._colorAttachments.forEach((t2, i) => {
      t2 && (t2 instanceof o ? o$12.framebufferTexture2D(o$12.FRAMEBUFFER, i, o$12.TEXTURE_2D, t2.glName, 0) : o$12.framebufferRenderbuffer(o$12.FRAMEBUFFER, o$12.COLOR_ATTACHMENT0, o$12.RENDERBUFFER, t2.glName));
    });
    const u = (n2 = l.depthStencilTarget) != null ? n2 : 0;
    switch (u) {
      case 1:
      case 3: {
        this._depthAttachment || (this._depthAttachment = new t(c, { internalFormat: l.depthStencilTarget === 1 ? 33189 : 34041, width: d, height: f }));
        const t$13 = u === 1 ? o$12.DEPTH_ATTACHMENT : o$12.DEPTH_STENCIL_ATTACHMENT;
        o$12.framebufferRenderbuffer(o$12.FRAMEBUFFER, t$13, o$12.RENDERBUFFER, this._depthAttachment.glName);
        break;
      }
      case 2:
        this._stencilAttachment || (this._stencilAttachment = new t(c, { internalFormat: 36168, width: d, height: f })), o$12.framebufferRenderbuffer(o$12.FRAMEBUFFER, o$12.STENCIL_ATTACHMENT, o$12.RENDERBUFFER, this._stencilAttachment.glName);
        break;
      case 4:
        if (!this._depthStencilTexture) {
          c.capabilities.depthTexture || console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture as an attachment!");
          const t2 = { target: 3553, pixelFormat: 34041, dataType: 34042, samplingMode: 9728, wrapMode: 33071, width: d, height: f };
          this._depthStencilTexture = new o(c, t2);
        }
        o$12.framebufferTexture2D(o$12.FRAMEBUFFER, o$12.DEPTH_STENCIL_ATTACHMENT, o$12.TEXTURE_2D, this._depthStencilTexture.glName, 0);
    }
    this._glName = a2, this._initialized = true;
  }
  _disposeColorAttachments() {
    this._colorAttachments.forEach((t2, i) => {
      if (t2 instanceof o) {
        if (this._initialized) {
          this._context.bindFramebuffer(this);
          const t3 = this._context.gl;
          t3.framebufferTexture2D(t3.FRAMEBUFFER, i, t3.TEXTURE_2D, null, 0);
        }
        t2.dispose();
      } else if (t2 instanceof WebGLRenderbuffer) {
        const e = this._context.gl;
        this._initialized && (this._context.bindFramebuffer(this), e.framebufferRenderbuffer(e.FRAMEBUFFER, i, e.RENDERBUFFER, null)), this._context.gl.deleteRenderbuffer(t2);
      }
    }), this._colorAttachments.clear();
  }
  _disposeDepthStencilAttachments() {
    const t2 = this._context.gl;
    if (this._depthAttachment) {
      if (this._initialized) {
        this._context.bindFramebuffer(this);
        const e = this._desc.depthStencilTarget === 1 ? t2.DEPTH_ATTACHMENT : t2.DEPTH_STENCIL_ATTACHMENT;
        t2.framebufferRenderbuffer(t2.FRAMEBUFFER, e, t2.RENDERBUFFER, null);
      }
      this._depthAttachment.dispose(), this._depthAttachment = null;
    }
    this._stencilAttachment && (this._initialized && (this._context.bindFramebuffer(this), t2.framebufferRenderbuffer(t2.FRAMEBUFFER, t2.STENCIL_ATTACHMENT, t2.RENDERBUFFER, null)), this._stencilAttachment.dispose(), this._stencilAttachment = null), this._depthStencilTexture && (this._initialized && (this._context.bindFramebuffer(this), t2.framebufferTexture2D(t2.FRAMEBUFFER, t2.DEPTH_STENCIL_ATTACHMENT, t2.TEXTURE_2D, null, 0)), this._depthStencilTexture.dispose(), this._depthStencilTexture = null);
  }
  static _validateBufferDimensions(t2, e) {
    console.assert(t2.width >= 0 && t2.height >= 0), e.width !== void 0 && e.width >= 0 && e.height !== void 0 && e.height >= 0 ? e.width === t2.width && e.height === t2.height || console.error("Renderbuffer dimensions must match the framebuffer's!") : (e.width = t2.width, e.height = t2.height);
  }
  _validateTextureDimensions(t2, e) {
    console.assert(t2.width >= 0 && t2.height >= 0), t2.target !== 3553 && console.error("Texture type must be TEXTURE_2D!"), e.width !== void 0 && e.width >= 0 && e.height !== void 0 && e.height >= 0 ? e.width === t2.width && e.height === t2.height || console.error("Color attachment texture must match the framebuffer's!") : (e.width = t2.width, e.height = t2.height);
  }
  _validateColorAttachmentPoint(t2) {
    if (r._MAX_COLOR_ATTACHMENTS === -1) {
      const t3 = this._context.capabilities.drawBuffers;
      if (t3) {
        const e2 = this._context.gl;
        r._MAX_COLOR_ATTACHMENTS = e2.getParameter(t3.MAX_COLOR_ATTACHMENTS);
      } else
        r._MAX_COLOR_ATTACHMENTS = 1;
    }
    const e = t2 - 36064;
    e + 1 > r._MAX_COLOR_ATTACHMENTS && s.error("esri.FrameBufferObject", `illegal attachment point for color attachment: ${e + 1}. Implementation supports up to ${r._MAX_COLOR_ATTACHMENTS} color attachments`);
  }
}
r._MAX_COLOR_ATTACHMENTS = -1;
const h = (t2, i) => new o(t2, { target: 3553, pixelFormat: 6408, dataType: 5121, samplingMode: 9728, wrapMode: 33071, width: i.width, height: i.height });
export { t$1 as a, r$2 as b, o$2 as c, o$1 as d, n, o, r, t };
