import { a0 as t$2, a1 as u$1, a2 as f$2, a3 as i$1 } from "./vendor.74d5941c.js";
import { a as t$1, b as r$2, c as o$2, d as o$3 } from "./FramebufferObject.18518335.js";
var e$1 = ["layout", "centroid", "smooth", "case", "mat2x2", "mat2x3", "mat2x4", "mat3x2", "mat3x3", "mat3x4", "mat4x2", "mat4x3", "mat4x4", "uint", "uvec2", "uvec3", "uvec4", "samplerCubeShadow", "sampler2DArray", "sampler2DArrayShadow", "isampler2D", "isampler3D", "isamplerCube", "isampler2DArray", "usampler2D", "usampler3D", "usamplerCube", "usampler2DArray", "coherent", "restrict", "readonly", "writeonly", "resource", "atomic_uint", "noperspective", "patch", "sample", "subroutine", "common", "partition", "active", "filter", "image1D", "image2D", "image3D", "imageCube", "iimage1D", "iimage2D", "iimage3D", "iimageCube", "uimage1D", "uimage2D", "uimage3D", "uimageCube", "image1DArray", "image2DArray", "iimage1DArray", "iimage2DArray", "uimage1DArray", "uimage2DArray", "image1DShadow", "image2DShadow", "image1DArrayShadow", "image2DArrayShadow", "imageBuffer", "iimageBuffer", "uimageBuffer", "sampler1DArray", "sampler1DArrayShadow", "isampler1D", "isampler1DArray", "usampler1D", "usampler1DArray", "isampler2DRect", "usampler2DRect", "samplerBuffer", "isamplerBuffer", "usamplerBuffer", "sampler2DMS", "isampler2DMS", "usampler2DMS", "sampler2DMSArray", "isampler2DMSArray", "usampler2DMSArray", "trunc", "round", "roundEven", "isnan", "isinf", "floatBitsToInt", "floatBitsToUint", "intBitsToFloat", "uintBitsToFloat", "packSnorm2x16", "unpackSnorm2x16", "packUnorm2x16", "unpackUnorm2x16", "packHalf2x16", "unpackHalf2x16", "outerProduct", "transpose", "determinant", "inverse", "texture", "textureSize", "textureProj", "textureLod", "textureOffset", "texelFetch", "texelFetchOffset", "textureProjOffset", "textureLodOffset", "textureProjLod", "textureProjLodOffset", "textureGrad", "textureGradOffset", "textureProjGrad", "textureProjGradOffset"];
var n$1 = 999, o$1 = 9999, i = 0, s$2 = 1, c = 2, d$1 = 3, f$1 = 4, p = 5, u = 6, l$1 = 7, h = 8, y = 9, g = 10, w = 11, m = ["block-comment", "line-comment", "preprocessor", "operator", "integer", "float", "ident", "builtin", "keyword", "whitespace", "eof", "integer"];
function k() {
  var t2, k2, b2, v2 = 0, _2 = 0, x2 = n$1, j2 = [], E2 = [], O2 = 1, L2 = 0, D2 = 0, G2 = false, T2 = false, X2 = "";
  return function(t3) {
    return E2 = [], t3 !== null ? P(t3.replace ? t3.replace(/\r\n/g, "\n") : t3) : C();
  };
  function F(t3) {
    t3.length && E2.push({ type: m[x2], data: t3, position: D2, line: O2, column: L2 });
  }
  function P(e2) {
    var a;
    for (v2 = 0, b2 = (X2 += e2).length; t2 = X2[v2], v2 < b2; ) {
      switch (a = v2, x2) {
        case i:
          v2 = $();
          break;
        case s$2:
          v2 = V();
          break;
        case c:
          v2 = M();
          break;
        case d$1:
          v2 = z();
          break;
        case f$1:
          v2 = Z();
          break;
        case w:
          v2 = W();
          break;
        case p:
          v2 = q();
          break;
        case o$1:
          v2 = B();
          break;
        case y:
          v2 = A();
          break;
        case n$1:
          v2 = S();
      }
      if (a !== v2)
        switch (X2[a]) {
          case "\n":
            L2 = 0, ++O2;
            break;
          default:
            ++L2;
        }
    }
    return _2 += v2, X2 = X2.slice(v2), E2;
  }
  function C(t3) {
    return j2.length && F(j2.join("")), x2 = g, F("(eof)"), E2;
  }
  function S() {
    return j2 = j2.length ? [] : j2, k2 === "/" && t2 === "*" ? (D2 = _2 + v2 - 1, x2 = i, k2 = t2, v2 + 1) : k2 === "/" && t2 === "/" ? (D2 = _2 + v2 - 1, x2 = s$2, k2 = t2, v2 + 1) : t2 === "#" ? (x2 = c, D2 = _2 + v2, v2) : /\s/.test(t2) ? (x2 = y, D2 = _2 + v2, v2) : (G2 = /\d/.test(t2), T2 = /[^\w_]/.test(t2), D2 = _2 + v2, x2 = G2 ? f$1 : T2 ? d$1 : o$1, v2);
  }
  function A() {
    return /[^\s]/g.test(t2) ? (F(j2.join("")), x2 = n$1, v2) : (j2.push(t2), k2 = t2, v2 + 1);
  }
  function M() {
    return t2 !== "\r" && t2 !== "\n" || k2 === "\\" ? (j2.push(t2), k2 = t2, v2 + 1) : (F(j2.join("")), x2 = n$1, v2);
  }
  function V() {
    return M();
  }
  function $() {
    return t2 === "/" && k2 === "*" ? (j2.push(t2), F(j2.join("")), x2 = n$1, v2 + 1) : (j2.push(t2), k2 = t2, v2 + 1);
  }
  function z() {
    if (k2 === "." && /\d/.test(t2))
      return x2 = p, v2;
    if (k2 === "/" && t2 === "*")
      return x2 = i, v2;
    if (k2 === "/" && t2 === "/")
      return x2 = s$2, v2;
    if (t2 === "." && j2.length) {
      for (; I(j2); )
        ;
      return x2 = p, v2;
    }
    if (t2 === ";" || t2 === ")" || t2 === "(") {
      if (j2.length)
        for (; I(j2); )
          ;
      return F(t2), x2 = n$1, v2 + 1;
    }
    var e2 = j2.length === 2 && t2 !== "=";
    if (/[\w_\d\s]/.test(t2) || e2) {
      for (; I(j2); )
        ;
      return x2 = n$1, v2;
    }
    return j2.push(t2), k2 = t2, v2 + 1;
  }
  function I(t3) {
    for (var a, r2, n2 = 0; ; ) {
      if (a = t$1.indexOf(t3.slice(0, t3.length + n2).join("")), r2 = t$1[a], a === -1) {
        if (n2-- + t3.length > 0)
          continue;
        r2 = t3.slice(0, 1).join("");
      }
      return F(r2), D2 += r2.length, (j2 = j2.slice(r2.length)).length;
    }
  }
  function W() {
    return /[^a-fA-F0-9]/.test(t2) ? (F(j2.join("")), x2 = n$1, v2) : (j2.push(t2), k2 = t2, v2 + 1);
  }
  function Z() {
    return t2 === "." || /[eE]/.test(t2) ? (j2.push(t2), x2 = p, k2 = t2, v2 + 1) : t2 === "x" && j2.length === 1 && j2[0] === "0" ? (x2 = w, j2.push(t2), k2 = t2, v2 + 1) : /[^\d]/.test(t2) ? (F(j2.join("")), x2 = n$1, v2) : (j2.push(t2), k2 = t2, v2 + 1);
  }
  function q() {
    return t2 === "f" && (j2.push(t2), k2 = t2, v2 += 1), /[eE]/.test(t2) || t2 === "-" && /[eE]/.test(k2) ? (j2.push(t2), k2 = t2, v2 + 1) : /[^\d]/.test(t2) ? (F(j2.join("")), x2 = n$1, v2) : (j2.push(t2), k2 = t2, v2 + 1);
  }
  function B() {
    if (/[^\d\w_]/.test(t2)) {
      var e2 = j2.join("");
      return x2 = r$2.indexOf(e2) > -1 ? h : o$2.indexOf(e2) > -1 ? l$1 : u, F(j2.join("")), x2 = n$1, v2;
    }
    return j2.push(t2), k2 = t2, v2 + 1;
  }
}
function b(t2) {
  var e2 = k(), a = [];
  return a = (a = a.concat(e2(t2))).concat(e2(null));
}
function v(t2) {
  return b(t2);
}
function _(t2) {
  return t2.map((t3) => t3.type !== "eof" ? t3.data : "").join("");
}
const x = ["GL_OES_standard_derivatives", "GL_EXT_frag_depth", "GL_EXT_draw_buffers", "GL_EXT_shader_texture_lod"];
function j(t2, e2 = "100", a = "300 es") {
  const r2 = /^\s*\#version\s+([0-9]+(\s+[a-zA-Z]+)?)\s*/;
  for (const n2 of t2)
    if (n2.type === "preprocessor") {
      const t3 = r2.exec(n2.data);
      if (t3) {
        const r3 = t3[1].replace(/\s\s+/g, " ");
        if (r3 === a)
          return r3;
        if (r3 === e2)
          return n2.data = "#version " + a, e2;
        throw new Error("unknown glsl version: " + r3);
      }
    }
  return t2.splice(0, 0, { type: "preprocessor", data: "#version " + a }, { type: "whitespace", data: "\n" }), null;
}
function E(t2, e2) {
  for (let a = e2 - 1; a >= 0; a--) {
    const e3 = t2[a];
    if (e3.type !== "whitespace" && e3.type !== "block-comment") {
      if (e3.type !== "keyword")
        break;
      if (e3.data === "attribute" || e3.data === "in")
        return true;
    }
  }
  return false;
}
function O(t2, e2, a, r2) {
  r2 = r2 || a;
  for (const n2 of t2)
    if (n2.type === "ident" && n2.data === a) {
      r2 in e2 ? e2[r2]++ : e2[r2] = 0;
      return O(t2, e2, r2 + "_" + e2[r2], r2);
    }
  return a;
}
function L(t2, e2, a = "afterVersion") {
  function r2(t3, e3) {
    for (let a2 = e3; a2 < t3.length; a2++) {
      const e4 = t3[a2];
      if (e4.type === "operator" && e4.data === ";")
        return a2;
    }
    return null;
  }
  function n2(t3) {
    let e3 = -1, n3 = 0, o3 = -1;
    for (let i3 = 0; i3 < t3.length; i3++) {
      const s3 = t3[i3];
      if (s3.type === "preprocessor" && (s3.data.match(/\#(if|ifdef|ifndef)\s+.+/) ? ++n3 : s3.data.match(/\#endif\s*.*/) && --n3), a !== "afterVersion" && a !== "afterPrecision" || s3.type === "preprocessor" && /^#version/.test(s3.data) && (o3 = Math.max(o3, i3)), a === "afterPrecision" && s3.type === "keyword" && s3.data === "precision") {
        const e4 = r2(t3, i3);
        if (e4 === null)
          throw new Error("precision statement not followed by any semicolons!");
        o3 = Math.max(o3, e4);
      }
      e3 < o3 && n3 === 0 && (e3 = i3);
    }
    return e3 + 1;
  }
  const o2 = { data: "\n", type: "whitespace" }, i2 = (e3) => e3 < t2.length && /[^\r\n]$/.test(t2[e3].data);
  let s2 = n2(t2);
  i2(s2 - 1) && t2.splice(s2++, 0, o2);
  for (const c2 of e2)
    t2.splice(s2++, 0, c2);
  i2(s2 - 1) && i2(s2) && t2.splice(s2, 0, o2);
}
function D(t2, e2, a, r2 = "lowp") {
  L(t2, [{ type: "keyword", data: "out" }, { type: "whitespace", data: " " }, { type: "keyword", data: r2 }, { type: "whitespace", data: " " }, { type: "keyword", data: a }, { type: "whitespace", data: " " }, { type: "ident", data: e2 }, { type: "operator", data: ";" }], "afterPrecision");
}
function G(t2, e2, a, r2, n2 = "lowp") {
  L(t2, [{ type: "keyword", data: "layout" }, { type: "operator", data: "(" }, { type: "keyword", data: "location" }, { type: "whitespace", data: " " }, { type: "operator", data: "=" }, { type: "whitespace", data: " " }, { type: "integer", data: r2.toString() }, { type: "operator", data: ")" }, { type: "whitespace", data: " " }, { type: "keyword", data: "out" }, { type: "whitespace", data: " " }, { type: "keyword", data: n2 }, { type: "whitespace", data: " " }, { type: "keyword", data: a }, { type: "whitespace", data: " " }, { type: "ident", data: e2 }, { type: "operator", data: ";" }], "afterPrecision");
}
function T(t2, e2) {
  let a, r2, n2 = -1;
  for (let o2 = e2; o2 < t2.length; o2++) {
    const e3 = t2[o2];
    if (e3.type === "operator" && (e3.data === "[" && (a = o2), e3.data === "]")) {
      r2 = o2;
      break;
    }
    e3.type === "integer" && (n2 = parseInt(e3.data, 10));
  }
  return a && r2 && t2.splice(a, r2 - a + 1), n2;
}
function X(e2, a) {
  const r2 = v(e2);
  if (j(r2, "100", "300 es") === "300 es")
    throw new Error("shader is already glsl 300 es");
  let n2 = null, o2 = null;
  const i2 = {}, s2 = {};
  for (let c2 = 0; c2 < r2.length; ++c2) {
    const e3 = r2[c2];
    switch (e3.type) {
      case "keyword":
        a === "vertex" && e3.data === "attribute" ? e3.data = "in" : e3.data === "varying" && (e3.data = a === "vertex" ? "out" : "in");
        break;
      case "builtin":
        if (/^texture(2D|Cube)(Proj)?(Lod|Grad)?(EXT)?$/.test(e3.data.trim()) && (e3.data = e3.data.replace(/(2D|Cube|EXT)/g, "")), a === "fragment" && e3.data === "gl_FragColor" && (n2 || (n2 = O(r2, i2, "fragColor"), D(r2, n2, "vec4")), e3.data = n2), a === "fragment" && e3.data === "gl_FragData") {
          const t2 = T(r2, c2 + 1), a2 = O(r2, i2, "fragData");
          G(r2, a2, "vec4", t2, "mediump"), e3.data = a2;
        } else
          a === "fragment" && e3.data === "gl_FragDepthEXT" && (o2 || (o2 = O(r2, i2, "gl_FragDepth")), e3.data = o2);
        break;
      case "ident":
        if (e$1.indexOf(e3.data) >= 0) {
          if (a === "vertex" && E(r2, c2))
            throw new Error("attribute in vertex shader uses a name that is a reserved word in glsl 300 es");
          e3.data in s2 || (s2[e3.data] = O(r2, i2, e3.data)), e3.data = s2[e3.data];
        }
    }
  }
  for (let t2 = r2.length - 1; t2 >= 0; --t2) {
    const e3 = r2[t2];
    if (e3.type === "preprocessor") {
      const a2 = e3.data.match(/\#extension\s+(.*)\:/);
      if (a2 && a2[1] && x.indexOf(a2[1].trim()) >= 0) {
        const e4 = r2[t2 + 1];
        r2.splice(t2, e4 && e4.type === "whitespace" ? 2 : 1);
      }
      const n3 = e3.data.match(/\#ifdef\s+(.*)/);
      n3 && n3[1] && x.indexOf(n3[1].trim()) >= 0 && (e3.data = "#if 1");
      const o3 = e3.data.match(/\#ifndef\s+(.*)/);
      o3 && o3[1] && x.indexOf(o3[1].trim()) >= 0 && (e3.data = "#if 0");
    }
  }
  return _(r2);
}
class o {
  constructor(t2, i2, o2, n2, r2 = {}) {
    if (this._context = null, this._glName = null, this._locations = {}, this._initialized = false, this._vShader = null, this._fShader = null, this._defines = {}, this._nameToUniformLocation = {}, this._nameToAttribLocation = {}, this._nameToUniform1 = {}, this._nameToUniform1v = {}, this._nameToUniform2 = {}, this._nameToUniform3 = {}, this._nameToUniform4 = {}, this._nameToUniformMatrix3 = {}, this._nameToUniformMatrix4 = {}, t2 || console.error("RenderingContext isn't initialized!"), i2.length === 0 && console.error("Shaders source should not be empty!"), t2.instanceCounter.increment(3, this), this._context = t2, this._vertexShaderSource = i2, this._fragmentShaderSource = o2, Array.isArray(r2))
      for (const e2 of r2)
        this._defines[e2] = "1";
    else
      this._defines = r2;
    this._locations = n2;
  }
  get glName() {
    return this._glName;
  }
  get locations() {
    return this._locations;
  }
  getDefine(t2) {
    return this._defines[t2];
  }
  dispose() {
    if (!this._context)
      return;
    const t2 = this._context.gl;
    if (this._vShader) {
      const i2 = this._vShader;
      t2.deleteShader(i2), this._vShader = null;
    }
    if (this._fShader) {
      const i2 = this._fShader;
      t2.deleteShader(i2), this._fShader = null;
    }
    this._glName && (t2.deleteProgram(this._glName), this._glName = null), this._context.instanceCounter.decrement(3, this), this._context = null;
  }
  initialize() {
    if (this._initialized)
      return;
    this._vShader = this._loadShader(35633), this._fShader = this._loadShader(35632), this._vShader && this._fShader || console.error("Error loading shaders!");
    const t2 = this._context.gl, i2 = t2.createProgram();
    t2.attachShader(i2, this._vShader), t2.attachShader(i2, this._fShader);
    for (const o2 in this._locations) {
      const n2 = this._locations[o2];
      t2.bindAttribLocation(i2, n2, o2);
    }
    t2.linkProgram(i2), this._glName = i2, this._initialized = true;
  }
  getUniformLocation(t2) {
    return this.initialize(), this._nameToUniformLocation[t2] === void 0 && (this._nameToUniformLocation[t2] = this._context.gl.getUniformLocation(this._glName, t2)), this._nameToUniformLocation[t2];
  }
  hasUniform(t2) {
    return this.getUniformLocation(t2) !== null;
  }
  getAttribLocation(t2) {
    return this.initialize(), this._nameToAttribLocation[t2] === void 0 && (this._nameToAttribLocation[t2] = this._context.gl.getAttribLocation(this._glName, t2)), this._nameToAttribLocation[t2];
  }
  setUniform1i(t2, i2) {
    const o2 = this._nameToUniform1[t2];
    if (o2 === void 0 || i2 !== o2) {
      this._context.bindProgram(this);
      this._context.gl.uniform1i(this.getUniformLocation(t2), i2), this._nameToUniform1[t2] = i2;
    }
  }
  setUniform1iv(t2, i2) {
    const r2 = this._nameToUniform1v[t2];
    if (n(r2, i2)) {
      this._context.bindProgram(this);
      this._context.gl.uniform1iv(this.getUniformLocation(t2), i2), r2 === void 0 ? this._nameToUniform1v[t2] = o._arrayCopy(i2) : o._arrayAssign(i2, r2);
    }
  }
  setUniform2iv(t2, i2) {
    const r2 = this._nameToUniform2[t2];
    if (n(r2, i2)) {
      this._context.bindProgram(this);
      this._context.gl.uniform2iv(this.getUniformLocation(t2), i2), r2 === void 0 ? this._nameToUniform2[t2] = o._arrayCopy(i2) : o._arrayAssign(i2, r2);
    }
  }
  setUniform3iv(t2, i2) {
    const r2 = this._nameToUniform3[t2];
    if (n(r2, i2)) {
      this._context.bindProgram(this);
      this._context.gl.uniform3iv(this.getUniformLocation(t2), i2), r2 === void 0 ? this._nameToUniform3[t2] = o._arrayCopy(i2) : o._arrayAssign(i2, r2);
    }
  }
  setUniform4iv(t2, i2) {
    const r2 = this._nameToUniform4[t2];
    if (n(r2, i2)) {
      this._context.bindProgram(this);
      this._context.gl.uniform4iv(this.getUniformLocation(t2), i2), r2 === void 0 ? this._nameToUniform4[t2] = o._arrayCopy(i2) : o._arrayAssign(i2, r2);
    }
  }
  setUniform1f(t2, i2) {
    const o2 = this._nameToUniform1[t2];
    if (o2 === void 0 || i2 !== o2) {
      this._context.bindProgram(this);
      this._context.gl.uniform1f(this.getUniformLocation(t2), i2), this._nameToUniform1[t2] = i2;
    }
  }
  setUniform1fv(t2, i2) {
    const r2 = this._nameToUniform1v[t2];
    if (n(r2, i2)) {
      this._context.bindProgram(this);
      this._context.gl.uniform1fv(this.getUniformLocation(t2), i2), r2 === void 0 ? this._nameToUniform1v[t2] = o._arrayCopy(i2) : o._arrayAssign(i2, r2);
    }
  }
  setUniform2f(t2, i2, o2) {
    const n2 = this._nameToUniform2[t2];
    if (n2 === void 0 || i2 !== n2[0] || o2 !== n2[1]) {
      this._context.bindProgram(this);
      this._context.gl.uniform2f(this.getUniformLocation(t2), i2, o2), n2 === void 0 ? this._nameToUniform2[t2] = [i2, o2] : (n2[0] = i2, n2[1] = o2);
    }
  }
  setUniform2fv(t2, i2) {
    const r2 = this._nameToUniform2[t2];
    if (n(r2, i2)) {
      this._context.bindProgram(this);
      this._context.gl.uniform2fv(this.getUniformLocation(t2), i2), r2 === void 0 ? this._nameToUniform2[t2] = o._arrayCopy(i2) : o._arrayAssign(i2, r2);
    }
  }
  setUniform3f(t2, i2, o2, n2) {
    const r2 = this._nameToUniform3[t2];
    if (r2 === void 0 || i2 !== r2[0] || o2 !== r2[1] || n2 !== r2[2]) {
      this._context.bindProgram(this);
      this._context.gl.uniform3f(this.getUniformLocation(t2), i2, o2, n2), r2 === void 0 ? this._nameToUniform3[t2] = [i2, o2, n2] : (r2[0] = i2, r2[1] = o2, r2[2] = n2);
    }
  }
  setUniform3fv(t2, i2) {
    const r2 = this._nameToUniform3[t2];
    if (n(r2, i2)) {
      this._context.bindProgram(this);
      this._context.gl.uniform3fv(this.getUniformLocation(t2), i2), r2 === void 0 ? this._nameToUniform3[t2] = o._arrayCopy(i2) : o._arrayAssign(i2, r2);
    }
  }
  setUniform4f(t2, i2, o2, n2, r2) {
    const e2 = this._nameToUniform4[t2];
    if (e2 === void 0 || i2 !== e2[0] || o2 !== e2[1] || n2 !== e2[2] || r2 !== e2[3]) {
      this._context.bindProgram(this);
      this._context.gl.uniform4f(this.getUniformLocation(t2), i2, o2, n2, r2), e2 === void 0 ? this._nameToUniform4[t2] = [i2, o2, n2, r2] : (e2[0] = i2, e2[1] = o2, e2[2] = n2, e2[3] = r2);
    }
  }
  setUniform4fv(t2, i2) {
    const r2 = this._nameToUniform4[t2];
    if (n(r2, i2)) {
      this._context.bindProgram(this);
      this._context.gl.uniform4fv(this.getUniformLocation(t2), i2), r2 === void 0 ? this._nameToUniform4[t2] = o._arrayCopy(i2) : o._arrayAssign(i2, r2);
    }
  }
  setUniformMatrix3fv(t2, i2, n2 = false) {
    const e2 = this._nameToUniformMatrix3[t2];
    if (r$1(e2, i2)) {
      this._context.bindProgram(this);
      this._context.gl.uniformMatrix3fv(this.getUniformLocation(t2), n2, i2), e2 === void 0 ? this._nameToUniformMatrix3[t2] = o._arrayCopy(i2) : o._arrayAssign(i2, e2);
    }
  }
  setUniformMatrix4fv(t2, i2, n2 = false) {
    const r2 = this._nameToUniformMatrix4[t2];
    if (e(r2, i2)) {
      this._context.bindProgram(this);
      this._context.gl.uniformMatrix4fv(this.getUniformLocation(t2), n2, i2), r2 === void 0 ? this._nameToUniformMatrix4[t2] = o._arrayCopy(i2) : o._arrayAssign(i2, r2);
    }
  }
  assertCompatibleVertexAttributeLocations(t2) {
    const i2 = t2.locations === this.locations;
    return i2 || console.error("VertexAttributeLocations are incompatible"), i2;
  }
  static _padToThree(t2) {
    let i2 = t2.toString();
    return t2 < 1e3 && (i2 = ("  " + t2).slice(-3)), i2;
  }
  _addLineNumbers(t2) {
    let i2 = 2;
    return t2.replace(/\n/g, () => "\n" + o._padToThree(i2++) + ":");
  }
  _loadShader(t2) {
    const o2 = t2 === 35633;
    let n2 = o2 ? this._vertexShaderSource : this._fragmentShaderSource, r2 = "";
    for (const i2 in this._defines)
      r2 += `#define ${i2} ${this._defines[i2]}
`;
    n2 = r2 + n2, this._context.contextVersion === "webgl2" && (n2 = X(n2, o2 ? "vertex" : "fragment"));
    const e2 = this._context.gl, s2 = e2.createShader(t2);
    return e2.shaderSource(s2, n2), e2.compileShader(s2), s2;
  }
  static _arrayCopy(t2) {
    const i2 = [];
    for (let o2 = 0; o2 < t2.length; ++o2)
      i2.push(t2[o2]);
    return i2;
  }
  static _arrayAssign(t2, i2) {
    for (let o2 = 0; o2 < t2.length; ++o2)
      i2[o2] = t2[o2];
  }
}
function n(i2, o2) {
  if (t$2(i2) || i2.length !== o2.length)
    return true;
  for (let t2 = 0; t2 < i2.length; ++t2)
    if (i2[t2] !== o2[t2])
      return true;
  return false;
}
function r$1(i2, o2) {
  return !!t$2(i2) || (i2.length !== 9 ? n(i2, o2) : i2.length !== 9 || i2[0] !== o2[0] || i2[1] !== o2[1] || i2[2] !== o2[2] || i2[3] !== o2[3] || i2[4] !== o2[4] || i2[5] !== o2[5] || i2[6] !== o2[6] || i2[7] !== o2[7] || i2[8] !== o2[8]);
}
function e(i2, o2) {
  return !!t$2(i2) || (i2.length !== 16 ? n(i2, o2) : i2.length !== 16 || i2[0] !== o2[0] || i2[1] !== o2[1] || i2[2] !== o2[2] || i2[3] !== o2[3] || i2[4] !== o2[4] || i2[5] !== o2[5] || i2[6] !== o2[6] || i2[7] !== o2[7] || i2[8] !== o2[8] || i2[9] !== o2[9] || i2[10] !== o2[10] || i2[11] !== o2[11] || i2[12] !== o2[12] || i2[13] !== o2[13] || i2[14] !== o2[14] || i2[15] !== o2[15]);
}
class s$1 {
  constructor(e2, t2, s2, n2, r2) {
    this._context = e2, this.bufferType = t2, this.usage = s2, this._glName = null, this._size = -1, this._indexType = void 0, e2.instanceCounter.increment(1, this), this._glName = this._context.gl.createBuffer(), o$3(this._context.gl), n2 && this.setData(n2, r2);
  }
  static createIndex(e2, t2, i2, n2) {
    return new s$1(e2, 34963, t2, i2, n2);
  }
  static createVertex(e2, t2, i2) {
    return new s$1(e2, 34962, t2, i2);
  }
  get glName() {
    return this._glName;
  }
  get size() {
    return this._size;
  }
  get indexType() {
    return this._indexType;
  }
  get byteSize() {
    return this.bufferType === 34962 ? this._size : this._indexType === 5125 ? 4 * this._size : 2 * this._size;
  }
  dispose() {
    if (this._context) {
      if (this._glName) {
        this._context.gl.deleteBuffer(this._glName), this._glName = null;
      }
      this._context.instanceCounter.decrement(1, this), this._context = null;
    }
  }
  setData(i2, s2) {
    if (!i2)
      return;
    if (typeof i2 == "number") {
      if (i2 < 0 && console.error("Buffer size cannot be negative!"), this.bufferType === 34963 && s2)
        switch (this._indexType = s2, this._size = i2, s2) {
          case 5123:
            i2 *= 2;
            break;
          case 5125:
            i2 *= 4;
        }
    } else {
      let s3 = i2.byteLength;
      u$1(i2) && (s3 /= 2, this._indexType = 5123), f$2(i2) && (s3 /= 4, this._indexType = 5125), this._size = s3;
    }
    const n2 = this._context.getBoundVAO();
    this._context.bindVAO(null), this._context.bindBuffer(this);
    this._context.gl.bufferData(this.bufferType, i2, this.usage), this._context.bindVAO(n2);
  }
  setSubData(i2, s2 = 0, n2 = 0, r2 = i2.byteLength) {
    if (!i2)
      return;
    (s2 < 0 || s2 >= this._size) && console.error("offset is out of range!");
    let h2 = s2, o2 = n2, c2 = r2, f2 = i2.byteLength;
    u$1(i2) && (f2 /= 2, h2 *= 2, o2 *= 2, c2 *= 2), f$2(i2) && (f2 /= 4, h2 *= 4, o2 *= 4, c2 *= 4), r2 === void 0 && (r2 = f2 - 1), n2 >= r2 && console.error("end must be bigger than start!"), s2 + n2 - r2 > this._size && console.error("An attempt to write beyond the end of the buffer!");
    const u2 = this._context.getBoundVAO();
    this._context.bindVAO(null), this._context.bindBuffer(this);
    const a = this._context.gl, _2 = ArrayBuffer.isView(i2) ? i2.buffer : i2, l2 = o2 === 0 && c2 === i2.byteLength ? _2 : _2.slice(o2, c2);
    a.bufferSubData(this.bufferType, h2, l2), this._context.bindVAO(u2);
  }
}
function r(e2, r2) {
  return e2.vertexBuffers[r2].size / t(e2.layout[r2]);
}
function t(e2) {
  return e2[0].stride;
}
function f(e2, r2, t2, n2, i2) {
  const s2 = e2.gl, o2 = e2.capabilities.instancing;
  e2.bindBuffer(t2);
  for (const a of n2) {
    const e3 = r2[a.name], t3 = (i2 || (0 + a.baseInstance ? a.baseInstance : 0)) * a.stride;
    if (e3 === void 0 && console.error(`There is no location for vertex attribute '${a.name}' defined.`), a.baseInstance && !a.divisor && console.error(`Vertex attribute '${a.name}' uses baseInstanceOffset without divisor.`), a.count <= 4)
      s2.vertexAttribPointer(e3, a.count, a.type, a.normalized, a.stride, a.offset + t3), s2.enableVertexAttribArray(e3), a.divisor && a.divisor > 0 && o2 && o2.vertexAttribDivisor(e3, a.divisor);
    else if (a.count === 9)
      for (let r3 = 0; r3 < 3; r3++)
        s2.vertexAttribPointer(e3 + r3, 3, a.type, a.normalized, a.stride, a.offset + 12 * r3 + t3), s2.enableVertexAttribArray(e3 + r3), a.divisor && a.divisor > 0 && o2 && o2.vertexAttribDivisor(e3 + r3, a.divisor);
    else if (a.count === 16)
      for (let r3 = 0; r3 < 4; r3++)
        s2.vertexAttribPointer(e3 + r3, 4, a.type, a.normalized, a.stride, a.offset + 16 * r3 + t3), s2.enableVertexAttribArray(e3 + r3), a.divisor && a.divisor > 0 && o2 && o2.vertexAttribDivisor(e3 + r3, a.divisor);
    else
      console.error("Unsupported vertex attribute element count: " + a.count);
  }
}
function d(e2, r2, t2, n2) {
  const i2 = e2.gl, s2 = e2.capabilities.instancing;
  e2.bindBuffer(t2);
  for (const o2 of n2) {
    const e3 = r2[o2.name];
    if (o2.count <= 4)
      i2.disableVertexAttribArray(e3), o2.divisor && o2.divisor > 0 && s2 && s2.vertexAttribDivisor(e3, 0);
    else if (o2.count === 9)
      for (let r3 = 0; r3 < 3; r3++)
        i2.disableVertexAttribArray(e3 + r3), o2.divisor && o2.divisor > 0 && s2 && s2.vertexAttribDivisor(e3 + r3, 0);
    else if (o2.count === 16)
      for (let r3 = 0; r3 < 4; r3++)
        i2.disableVertexAttribArray(e3 + r3), o2.divisor && o2.divisor > 0 && s2 && s2.vertexAttribDivisor(e3 + r3, 0);
    else
      console.error("Unsupported vertex attribute element count: " + o2.count);
  }
  e2.unbindBuffer(34962);
}
function l(e2) {
  switch (e2) {
    case 6406:
    case 6409:
    case 36168:
      return 1;
    case 6410:
    case 32854:
    case 33325:
    case 32854:
    case 33189:
      return 2;
    case 6407:
    case 6402:
      return 3;
    case 6408:
    case 34041:
    case 33326:
    case 35898:
    case 33327:
    case 34041:
      return 4;
    case 33328:
    case 34842:
      return 8;
    case 34836:
      return 16;
    case 33776:
    case 33777:
      return 0.5;
    case 33778:
    case 33779:
      return 1;
    case 37488:
    case 37489:
    case 37492:
    case 37493:
    case 37494:
    case 37495:
      return 0.5;
    case 37490:
    case 37491:
    case 37496:
    case 37497:
      return 1;
  }
  return 0;
}
class s {
  constructor(t2, i2, e2, s2, n2) {
    this._context = t2, this._locations = i2, this._layout = e2, this._buffers = s2, this._indexBuffer = n2, this._glName = null, this._initialized = false, t2.instanceCounter.increment(2, this);
  }
  get glName() {
    return this._glName;
  }
  get vertexBuffers() {
    return this._buffers;
  }
  get indexBuffer() {
    return this._indexBuffer;
  }
  get size() {
    return Object.keys(this._buffers).reduce((t2, i2) => t2 + this._buffers[i2].size, this._indexBuffer ? this._indexBuffer.size : 0);
  }
  get layout() {
    return this._layout;
  }
  get locations() {
    return this._locations;
  }
  dispose(i2 = true) {
    if (!this._context)
      return;
    const e2 = this._context.capabilities.vao;
    e2 && this._glName && (e2.deleteVertexArray(this._glName), this._glName = null);
    if (this._context.getBoundVAO() === this && this._context.bindVAO(null), i2) {
      for (const t2 in this._buffers)
        this._buffers[t2].dispose(), delete this._buffers[t2];
      this._indexBuffer = i$1(this._indexBuffer);
    }
    this._context.instanceCounter.decrement(2, this), this._context = null;
  }
  initialize() {
    if (this._initialized)
      return;
    const t2 = this._context.capabilities.vao;
    if (t2) {
      const i2 = t2.createVertexArray();
      t2.bindVertexArray(i2), this._bindLayout(), t2.bindVertexArray(null), this._glName = i2;
    }
    this._initialized = true;
  }
  bind() {
    this.initialize();
    const t2 = this._context.capabilities.vao;
    t2 ? t2.bindVertexArray(this.glName) : (this._context.bindVAO(null), this._bindLayout());
  }
  _bindLayout() {
    const t2 = this._buffers, e2 = !!this._context.capabilities.vao, s2 = this._layout, n2 = this._indexBuffer;
    t2 || console.error("Vertex buffer dictionary is empty!");
    const r2 = this._context.gl;
    for (const o2 in t2) {
      const e3 = t2[o2];
      e3 || console.error("Vertex buffer is uninitialized!");
      const n3 = s2[o2];
      n3 || console.error("Vertex element descriptor is empty!"), f(this._context, this._locations, e3, n3);
    }
    n2 && (e2 ? r2.bindBuffer(r2.ELEMENT_ARRAY_BUFFER, n2.glName) : this._context.bindBuffer(n2));
  }
  unbind() {
    this.initialize();
    const t2 = this._context.capabilities.vao;
    t2 ? t2.bindVertexArray(null) : this._unbindLayout();
  }
  _unbindLayout() {
    const t2 = this._buffers, i2 = this._layout;
    t2 || console.error("Vertex buffer dictionary is empty!");
    for (const s2 in t2) {
      const n2 = t2[s2];
      n2 || console.error("Vertex buffer is uninitialized!");
      const r2 = i2[s2];
      d(this._context, this._locations, n2, r2);
    }
    this._indexBuffer && this._context.unbindBuffer(this._indexBuffer.bufferType);
  }
}
export { s as a, l, o, r, s$1 as s };
