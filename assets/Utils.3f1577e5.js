var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a, prop, b2[prop]);
    }
  return a;
};
var __spreadProps = (a, b2) => __defProps(a, __getOwnPropDescs(b2));
import { bM as e, a4 as n$1, aa as s } from "./vendor.74d5941c.js";
import "./FramebufferObject.18518335.js";
var E$1, T$1, I$1, L$1, A$1, _$1, O$1;
!function(E2) {
  E2[E2.FILL = 0] = "FILL", E2[E2.LINE = 1] = "LINE", E2[E2.MARKER = 2] = "MARKER", E2[E2.TEXT = 3] = "TEXT", E2[E2.LABEL = 4] = "LABEL";
}(E$1 || (E$1 = {})), function(E2) {
  E2[E2.SUCCEEDED = 0] = "SUCCEEDED", E2[E2.FAILED_OUT_OF_MEMORY = 1] = "FAILED_OUT_OF_MEMORY";
}(T$1 || (T$1 = {})), function(E2) {
  E2[E2.NONE = 0] = "NONE", E2[E2.MAP = 1] = "MAP", E2[E2.LABEL = 2] = "LABEL", E2[E2.LABEL_ALPHA = 4] = "LABEL_ALPHA", E2[E2.HITTEST = 8] = "HITTEST", E2[E2.HIGHLIGHT = 16] = "HIGHLIGHT", E2[E2.CLIP = 32] = "CLIP", E2[E2.DEBUG = 64] = "DEBUG", E2[E2.NUM_DRAW_PHASES = 9] = "NUM_DRAW_PHASES";
}(I$1 || (I$1 = {})), function(E2) {
  E2[E2.SIZE = 0] = "SIZE", E2[E2.COLOR = 1] = "COLOR", E2[E2.OPACITY = 2] = "OPACITY", E2[E2.ROTATION = 3] = "ROTATION";
}(L$1 || (L$1 = {})), function(E2) {
  E2[E2.NONE = 0] = "NONE", E2[E2.OPACITY = 1] = "OPACITY", E2[E2.COLOR = 2] = "COLOR", E2[E2.ROTATION = 4] = "ROTATION", E2[E2.SIZE_MINMAX_VALUE = 8] = "SIZE_MINMAX_VALUE", E2[E2.SIZE_SCALE_STOPS = 16] = "SIZE_SCALE_STOPS", E2[E2.SIZE_FIELD_STOPS = 32] = "SIZE_FIELD_STOPS", E2[E2.SIZE_UNIT_VALUE = 64] = "SIZE_UNIT_VALUE";
}(A$1 || (A$1 = {})), function(E2) {
  E2[E2.MINMAX_TARGETS_OUTLINE = 128] = "MINMAX_TARGETS_OUTLINE", E2[E2.SCALE_TARGETS_OUTLINE = 256] = "SCALE_TARGETS_OUTLINE", E2[E2.FIELD_TARGETS_OUTLINE = 512] = "FIELD_TARGETS_OUTLINE", E2[E2.UNIT_TARGETS_OUTLINE = 1024] = "UNIT_TARGETS_OUTLINE";
}(_$1 || (_$1 = {})), function(E2) {
  E2[E2.SPRITE = 0] = "SPRITE", E2[E2.GLYPH = 1] = "GLYPH";
}(O$1 || (O$1 = {}));
const n = new Float32Array(1);
new Uint32Array(n.buffer);
function M$1(n2) {
  return [255 & n2, (65280 & n2) >>> 8, (16711680 & n2) >>> 16, (4278190080 & n2) >>> 24];
}
function m(n2, r) {
  return 65535 & n2 | r << 16;
}
function w$1(n2, r, t, u2) {
  return 255 & n2 | (255 & r) << 8 | (255 & t) << 16 | u2 << 24;
}
class h$1 {
  constructor() {
    this.color = [0, 0, 0, 0], this.haloColor = [0, 0, 0, 0], this.haloSize = 0, this.size = 12, this.angle = 0, this.offsetX = 0, this.offsetY = 0, this.hAnchor = 0, this.vAnchor = 0;
  }
  acquire(o, h2, s2, t, i, l, r, e2, c) {
    this.color = o, this.haloColor = h2, this.haloSize = s2, this.size = t, this.angle = i, this.offsetX = l, this.offsetY = r, this.hAnchor = e2, this.vAnchor = c;
  }
  release() {
    this.color[0] = this.color[1] = this.color[2] = this.color[3] = 0, this.haloColor[0] = this.haloColor[1] = this.haloColor[2] = this.haloColor[3] = 0, this.haloSize = 0, this.size = 0, this.angle = 0, this.offsetX = 0, this.offsetY = 0, this.hAnchor = 0, this.vAnchor = 0;
  }
}
h$1.pool = new e(h$1);
const u = n$1.getLogger("esri.views.2d.engine.webgl.Utils"), f = "geometry", d = [{ name: f, strideInBytes: 32, divisor: 0 }], p = [{ name: f, strideInBytes: 32, divisor: 0 }], h = [{ name: f, strideInBytes: 12, divisor: 0 }], w = [{ name: f, strideInBytes: 36, divisor: 0 }], v = [{ name: f, strideInBytes: 32, divisor: 0 }], y = [{ name: f, strideInBytes: 36, divisor: 0 }];
function g(e2) {
  const r = {};
  for (const t of e2)
    r[t.name] = t.strideInBytes;
  return r;
}
const b = g(d), L = g(p), A = g(h), I = g(w), E = g(v), j = g(y);
function T(e2, r) {
  switch (e2) {
    case E$1.MARKER:
      return b;
    case E$1.FILL:
      return r ? A : L;
    case E$1.LINE:
      return I;
    case E$1.TEXT:
      return E;
    case E$1.LABEL:
      return j;
  }
}
const x = [f], F = [f], M = [f], U = [f], B = [f];
function z(e2) {
  switch (e2) {
    case E$1.MARKER:
      return x;
    case E$1.FILL:
      return F;
    case E$1.LINE:
      return M;
    case E$1.TEXT:
      return U;
    case E$1.LABEL:
      return B;
  }
}
function C(e2) {
  switch (e2 % 4) {
    case 0:
    case 2:
      return 4;
    case 1:
    case 3:
      return 1;
  }
}
function R(e2, r) {
  switch (r % 4) {
    case 0:
    case 2:
      return new Uint32Array(Math.floor(e2 * r / 4));
    case 1:
    case 3:
      return new Uint8Array(e2 * r);
  }
}
function O(e2, r) {
  switch (r % 4) {
    case 0:
    case 2:
      return new Uint32Array(e2);
    case 1:
    case 3:
      return new Uint8Array(e2);
  }
}
function N(e2) {
  return e2 != null;
}
function k(e2) {
  return typeof e2 == "number";
}
function K(e2, t) {
  switch (e2) {
    case "butt":
      return 0;
    case "round":
      return t ? 2 : 1;
    case "square":
      return 2;
    default:
      return u.error(new s("mapview-invalid-type", `Cap type ${e2} is not a valid option. Defaulting to round`)), 1;
  }
}
function P(e2) {
  switch (e2) {
    case "miter":
      return 2;
    case "bevel":
      return 0;
    case "round":
      return 1;
    default:
      return u.error(new s("mapview-invalid-type", `Join type ${e2} is not a valid option. Defaulting to round`)), 1;
  }
}
function S(e2) {
  switch (e2) {
    case "opacity":
      return L$1.OPACITY;
    case "color":
      return L$1.COLOR;
    case "rotation":
      return L$1.ROTATION;
    case "size":
      return L$1.SIZE;
    default:
      return u.error(`Cannot interpret unknown vv: ${e2}`), null;
  }
}
function Z(e2, r, t, n2, o, s2, i) {
  for (const c in s2) {
    const r2 = s2[c].stride, n3 = C(r2), i2 = s2[c].data, a2 = t[c].data, u2 = r2 * o.vertexCount / n3, f2 = r2 * e2 / n3, l = r2 * o.vertexFrom / n3;
    for (let e3 = 0; e3 < u2; ++e3)
      a2[e3 + f2] = i2[e3 + l];
  }
  const a = o.indexCount;
  for (let c = 0; c < a; ++c)
    n2[c + r] = i[c + o.indexFrom] - o.vertexFrom + e2;
}
const _ = { [f]: 35044 };
function q(e2, r) {
  const t = [];
  for (let n2 = 0; n2 < 5; ++n2) {
    const o = z(n2), s2 = {};
    for (const e3 of o)
      s2[e3] = { data: r(n2, e3) };
    t.push({ data: e2(n2), buffers: s2 });
  }
  return t;
}
function J(e2) {
  switch (e2) {
    case 5120:
    case 5121:
      return 1;
    case 5122:
    case 5123:
      return 2;
    case 5126:
    case 5124:
    case 5125:
      return 4;
  }
}
function W(e2) {
  switch (e2) {
    case 5121:
      return 1;
    case 32819:
      return 2;
    case 5126:
      return 4;
    default:
      return void u.error(new s("webgl-utils", `Unable to handle type ${e2}`));
  }
}
function Y(e2) {
  switch (e2) {
    case 5121:
      return Uint8Array;
    case 32819:
      return Uint16Array;
    case 5126:
      return Float32Array;
    default:
      return void u.error(new s("webgl-utils", `Unable to handle type ${e2}`));
  }
}
function H(e2) {
  const r = {};
  for (const t in e2) {
    const n2 = e2[t];
    let o = 0;
    r[t] = n2.map((e3) => {
      const r2 = __spreadProps(__spreadValues({}, e3), { normalized: e3.normalized || false, divisor: e3.divisor || 0, offset: o, stride: 0 });
      return o += e3.count * J(e3.type), r2;
    }), r[t].forEach((e3) => e3.stride = o);
  }
  return r;
}
const Q = (e2) => {
  const r = {};
  for (const t in e2)
    for (const n2 of e2[t])
      r[n2.name] = n2.location;
  return r;
}, V = (e2) => {
  const r = {};
  for (const t in e2) {
    const n2 = e2[t];
    r[t] = n2.length ? n2[0].stride : 0;
  }
  return r;
}, ee = new Map(), re = (e2, r) => {
  if (!ee.has(e2)) {
    const t = H(r), n2 = { strides: V(t), bufferLayouts: t, attributes: Q(r) };
    ee.set(e2, n2);
  }
  return ee.get(e2);
};
function te(e2) {
  e2(E$1.MARKER), e2(E$1.FILL), e2(E$1.LINE), e2(E$1.TEXT), e2(E$1.LABEL);
}
export { A$1 as A, C, E$1 as E, I$1 as I, K, M$1 as M, N, O$1 as O, P, R, S, T, W, Y, Z, _, O as a, _$1 as b, k, m, q, re as r, te as t, w$1 as w };
