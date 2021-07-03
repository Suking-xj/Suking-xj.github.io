var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
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
function t(t2, e2, i = 32774, n2 = [0, 0, 0, 0]) {
  return { srcRgb: t2, srcAlpha: t2, dstRgb: e2, dstAlpha: e2, opRgb: i, opAlpha: i, color: { r: n2[0], g: n2[1], b: n2[2], a: n2[3] } };
}
function e(t2, e2, i, n2, s2 = 32774, l2 = 32774, r2 = [0, 0, 0, 0]) {
  return { srcRgb: t2, srcAlpha: e2, dstRgb: i, dstAlpha: n2, opRgb: s2, opAlpha: l2, color: { r: r2[0], g: r2[1], b: r2[2], a: r2[3] } };
}
const n = { zNear: 0, zFar: 1 }, s = { r: true, g: true, b: true, a: true };
function l(t2) {
  return f.intern(t2);
}
function r(t2) {
  return I.intern(t2);
}
function h(t2) {
  return S.intern(t2);
}
function o(t2) {
  return T.intern(t2);
}
function a(t2) {
  return O.intern(t2);
}
function c(t2) {
  return w.intern(t2);
}
function d(t2) {
  return D.intern(t2);
}
function p(t2) {
  return m.intern(t2);
}
function u(t2) {
  return k.intern(t2);
}
class _ {
  constructor(t2, e2) {
    this.makeKey = t2, this.makeRef = e2, this.interns = new Map();
  }
  intern(t2) {
    if (!t2)
      return null;
    const e2 = this.makeKey(t2), i = this.interns;
    return i.has(e2) || i.set(e2, this.makeRef(t2)), i.get(e2);
  }
}
function g(t2) {
  return "[" + t2.join(",") + "]";
}
const f = new _(v, (t2) => __spreadValues({ __tag: "Blending" }, t2));
function v(t2) {
  return t2 ? g([t2.srcRgb, t2.srcAlpha, t2.dstRgb, t2.dstAlpha, t2.opRgb, t2.opAlpha, t2.color.r, t2.color.g, t2.color.b, t2.color.a]) : null;
}
const I = new _(W, (t2) => __spreadValues({ __tag: "Culling" }, t2));
function W(t2) {
  return t2 ? g([t2.face, t2.mode]) : null;
}
const S = new _(b, (t2) => __spreadValues({ __tag: "PolygonOffset" }, t2));
function b(t2) {
  return t2 ? g([t2.factor, t2.units]) : null;
}
const T = new _(y, (t2) => __spreadValues({ __tag: "DepthTest" }, t2));
function y(t2) {
  return t2 ? g([t2.func]) : null;
}
const O = new _(R, (t2) => __spreadValues({ __tag: "StencilTest" }, t2));
function R(t2) {
  return t2 ? g([t2.function.func, t2.function.ref, t2.function.mask, t2.operation.fail, t2.operation.zFail, t2.operation.zPass]) : null;
}
const w = new _(C, (t2) => __spreadValues({ __tag: "DepthWrite" }, t2));
function C(t2) {
  return t2 ? g([t2.zNear, t2.zFar]) : null;
}
const D = new _(A, (t2) => __spreadValues({ __tag: "ColorWrite" }, t2));
function A(t2) {
  return t2 ? g([t2.r, t2.g, t2.b, t2.a]) : null;
}
const m = new _(P, (t2) => __spreadValues({ __tag: "StencilWrite" }, t2));
function P(t2) {
  return t2 ? g([t2.mask]) : null;
}
const k = new _(z, (t2) => ({ blending: l(t2.blending), culling: r(t2.culling), polygonOffset: h(t2.polygonOffset), depthTest: o(t2.depthTest), stencilTest: a(t2.stencilTest), depthWrite: c(t2.depthWrite), colorWrite: d(t2.colorWrite), stencilWrite: p(t2.stencilWrite) }));
function z(t2) {
  return t2 ? g([v(t2.blending), W(t2.culling), b(t2.polygonOffset), y(t2.depthTest), R(t2.stencilTest), C(t2.depthWrite), A(t2.colorWrite), P(t2.stencilWrite)]) : null;
}
class B {
  constructor(t2) {
    this._pipelineInvalid = true, this._blendingInvalid = true, this._cullingInvalid = true, this._polygonOffsetInvalid = true, this._depthTestInvalid = true, this._stencilTestInvalid = true, this._depthWriteInvalid = true, this._colorWriteInvalid = true, this._stencilWriteInvalid = true, this._stateSetters = t2;
  }
  setPipeline(t2) {
    (this._pipelineInvalid || t2 !== this._pipeline) && (this.setBlending(t2.blending), this.setCulling(t2.culling), this.setPolygonOffset(t2.polygonOffset), this.setDepthTest(t2.depthTest), this.setStencilTest(t2.stencilTest), this.setDepthWrite(t2.depthWrite), this.setColorWrite(t2.colorWrite), this.setStencilWrite(t2.stencilWrite), this._pipeline = t2), this._pipelineInvalid = false;
  }
  invalidateBlending() {
    this._blendingInvalid = true, this._pipelineInvalid = true;
  }
  invalidateCulling() {
    this._cullingInvalid = true, this._pipelineInvalid = true;
  }
  invalidatePolygonOffset() {
    this._polygonOffsetInvalid = true, this._pipelineInvalid = true;
  }
  invalidateDepthTest() {
    this._depthTestInvalid = true, this._pipelineInvalid = true;
  }
  invalidateStencilTest() {
    this._stencilTestInvalid = true, this._pipelineInvalid = true;
  }
  invalidateDepthWrite() {
    this._depthWriteInvalid = true, this._pipelineInvalid = true;
  }
  invalidateColorWrite() {
    this._colorWriteInvalid = true, this._pipelineInvalid = true;
  }
  invalidateStencilWrite() {
    this._stencilTestInvalid = true, this._pipelineInvalid = true;
  }
  setBlending(t2) {
    this._blending = this.setSubState(t2, this._blending, this._blendingInvalid, this._stateSetters.setBlending), this._blendingInvalid = false;
  }
  setCulling(t2) {
    this._culling = this.setSubState(t2, this._culling, this._cullingInvalid, this._stateSetters.setCulling), this._cullingInvalid = false;
  }
  setPolygonOffset(t2) {
    this._polygonOffset = this.setSubState(t2, this._polygonOffset, this._polygonOffsetInvalid, this._stateSetters.setPolygonOffset), this._polygonOffsetInvalid = false;
  }
  setDepthTest(t2) {
    this._depthTest = this.setSubState(t2, this._depthTest, this._depthTestInvalid, this._stateSetters.setDepthTest), this._depthTestInvalid = false;
  }
  setStencilTest(t2) {
    this._stencilTest = this.setSubState(t2, this._stencilTest, this._stencilTestInvalid, this._stateSetters.setStencilTest), this._stencilTestInvalid = false;
  }
  setDepthWrite(t2) {
    this._depthWrite = this.setSubState(t2, this._depthWrite, this._depthWriteInvalid, this._stateSetters.setDepthWrite), this._depthWriteInvalid = false;
  }
  setColorWrite(t2) {
    this._colorWrite = this.setSubState(t2, this._colorWrite, this._colorWriteInvalid, this._stateSetters.setColorWrite), this._colorWriteInvalid = false;
  }
  setStencilWrite(t2) {
    this._stencilWrite = this.setSubState(t2, this._stencilWrite, this._stencilWriteInvalid, this._stateSetters.setStencilWrite), this._stencilTestInvalid = false;
  }
  setSubState(t2, e2, i, n2) {
    return (i || t2 !== e2) && (n2(t2), this._pipelineInvalid = true), t2;
  }
}
export { B, e, n, s, t, u };
