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
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var step = (x2) => x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import { a4 as n$e, fF as n$f, aP as n$g, aW as t$q, iZ as r$p, i_ as y$8, i$ as x$7, g5 as e$j, j0 as f$g, j1 as p$8, j2 as a$i, j3 as u$f, fO as r$q, fT as c$g, fP as z$6, aS as d$b, a7 as e$k, fJ as u$g, j4 as p$9, fQ as _$9, j5 as d$c, aR as s$b, aQ as o$m, a0 as t$t, fR as N$3, fK as j$9, j6 as p$a, b1 as a$j, j7 as r$r, j8 as f$h, j9 as I$7, fU as q$5, ja as q$6, jb as F$5, a5 as r$s, fS as w$9, jc as h$b, bO as o$n, jd as e$l, bM as e$m, je as M$6, jf as i$h, bW as h$c, jg as c$h, jh as f$i, ai as t$v, ae as e$p, ji as L$5, gr as a$n, a6 as o$q, av as n$j, hS as F$6, jj as G$4, gm as t$x, jk as c$i, bI as h$d, jl as t$z, al as v$7, am as m$8, cj as u$j, g4 as n$l, aa as s$f, aq as a$o, jm as H$5, aj as U$6, dm as o$r, dl as w$b, jn as r$x, jo as g$7, c$ as V$4, jp as i$i, dJ as T$4, a1 as u$l, b$ as e$s, jq as e$t, jr as t$A, ef as g$9, js as j$a, jt as i$j } from "./vendor.74d5941c.js";
import { a as t$r, b as t$s, t as t$w, e as e$o, I as I$8, c as e$r } from "./vec3f32.9abda27a.js";
import { p as p$b, x as x$8, u as u$h, a as a$m, A as A$9, n as u$k, r as c$j, s as r$w, t as e$q, F as F$7, g as g$8, h as h$e, L as L$6, O as O$6, E as E$9, I as I$9, w as w$c, v as v$8, e as A$a, M as M$7 } from "./InterleavedLayout.07204280.js";
import { a as a$l, q as q$7, w as w$a, h as h$f, B as B$6 } from "./aaBoundingBox.b76947f8.js";
import { a as a$k, y as y$9 } from "./vec4.44fdb266.js";
import { e as e$n, t as t$u, u as u$i, n as n$i, s as s$e } from "./renderState.cca58848.js";
import { s as s$c, a as s$d, o as o$o, l as l$f, r as r$v } from "./VertexArrayObject.67803418.js";
import { r as r$t } from "./mat4f32.a5cabe00.js";
import { r as r$u, o as o$p, n as n$k } from "./FramebufferObject.18518335.js";
import { n as n$h, t as t$y } from "./requestImageUtils.21efc020.js";
function e$i() {
  return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
}
function r$o(e2) {
  return [e2[0], e2[1], e2[2], e2[3], e2[4], e2[5], e2[6], e2[7], e2[8], e2[9], e2[10], e2[11], e2[12], e2[13], e2[14], e2[15]];
}
function n$d(e2, r2, n2, t2, a2, o2, c2, u2, s2, f2, i2, l2, _2, I2, b2, m2) {
  return [e2, r2, n2, t2, a2, o2, c2, u2, s2, f2, i2, l2, _2, I2, b2, m2];
}
function t$p(e2, r2) {
  return new Float64Array(e2, r2, 16);
}
const a$h = e$i();
Object.freeze({ __proto__: null, create: e$i, clone: r$o, fromValues: n$d, createView: t$p, IDENTITY: a$h });
const e$h = n$e.getLogger("esri.views.3d.support.buffer.math");
function t$o(t2, r2, f2) {
  if (t2.count !== r2.count)
    return void e$h.error("source and destination buffers need to have the same number of elements");
  const o2 = t2.count, n2 = f2[0], u2 = f2[1], d2 = f2[2], s2 = f2[4], c2 = f2[5], i2 = f2[6], a2 = f2[8], p2 = f2[9], y2 = f2[10], B2 = f2[12], m2 = f2[13], h2 = f2[14], l2 = t2.typedBuffer, S2 = t2.typedBufferStride, b2 = r2.typedBuffer, v2 = r2.typedBufferStride;
  for (let e2 = 0; e2 < o2; e2++) {
    const t3 = e2 * S2, r3 = e2 * v2, f3 = b2[r3], o3 = b2[r3 + 1], M2 = b2[r3 + 2];
    l2[t3] = n2 * f3 + s2 * o3 + a2 * M2 + B2, l2[t3 + 1] = u2 * f3 + c2 * o3 + p2 * M2 + m2, l2[t3 + 2] = d2 * f3 + i2 * o3 + y2 * M2 + h2;
  }
}
function r$n(t2, r2, f2) {
  if (t2.count !== r2.count)
    return void e$h.error("source and destination buffers need to have the same number of elements");
  const o2 = t2.count, n2 = f2[0], u2 = f2[1], d2 = f2[2], s2 = f2[3], c2 = f2[4], i2 = f2[5], a2 = f2[6], p2 = f2[7], y2 = f2[8], B2 = t2.typedBuffer, m2 = t2.typedBufferStride, h2 = r2.typedBuffer, l2 = r2.typedBufferStride;
  for (let e2 = 0; e2 < o2; e2++) {
    const t3 = e2 * m2, r3 = e2 * l2, f3 = h2[r3], o3 = h2[r3 + 1], S2 = h2[r3 + 2];
    B2[t3] = n2 * f3 + s2 * o3 + a2 * S2, B2[t3 + 1] = u2 * f3 + c2 * o3 + p2 * S2, B2[t3 + 2] = d2 * f3 + i2 * o3 + y2 * S2;
  }
}
function f$f(e2, t2, r2) {
  const f2 = Math.min(e2.count, t2.count), o2 = e2.typedBuffer, n2 = e2.typedBufferStride, u2 = t2.typedBuffer, d2 = t2.typedBufferStride;
  for (let s2 = 0; s2 < f2; s2++) {
    const e3 = s2 * n2, t3 = s2 * d2;
    o2[e3] = r2 * u2[t3], o2[e3 + 1] = r2 * u2[t3 + 1], o2[e3 + 2] = r2 * u2[t3 + 2];
  }
}
function o$l(e2, t2, r2) {
  const f2 = Math.min(e2.count, t2.count), o2 = e2.typedBuffer, n2 = e2.typedBufferStride, u2 = t2.typedBuffer, d2 = t2.typedBufferStride;
  for (let s2 = 0; s2 < f2; s2++) {
    const e3 = s2 * n2, t3 = s2 * d2;
    o2[e3] = u2[t3] >> r2, o2[e3 + 1] = u2[t3 + 1] >> r2, o2[e3 + 2] = u2[t3 + 2] >> r2;
  }
}
Object.freeze({ __proto__: null, transformMat4: t$o, transformMat3: r$n, scale: f$f, shiftRight: o$l });
function n$c() {
  return [0, 0, 0, 0];
}
function t$n(n2) {
  return [n2[0], n2[1], n2[2], n2[3]];
}
function r$m(n2, t2, r2, e2) {
  return [n2, t2, r2, e2];
}
function e$g(t2) {
  const r2 = n$c(), e2 = Math.min(4, t2.length);
  for (let n2 = 0; n2 < e2; ++n2)
    r2[n2] = t2[n2];
  return r2;
}
function u$e(n2, t2) {
  return new Float64Array(n2, t2, 4);
}
function a$g() {
  return n$c();
}
function o$k() {
  return r$m(1, 1, 1, 1);
}
function s$a() {
  return r$m(1, 0, 0, 0);
}
function c$f() {
  return r$m(0, 1, 0, 0);
}
function i$g() {
  return r$m(0, 0, 1, 0);
}
function f$e() {
  return r$m(0, 0, 0, 1);
}
const _$8 = a$g(), l$e = o$k(), N$2 = s$a(), U$5 = c$f(), I$6 = i$g(), O$5 = f$e();
Object.freeze({ __proto__: null, create: n$c, clone: t$n, fromValues: r$m, fromArray: e$g, createView: u$e, zeros: a$g, ones: o$k, unitX: s$a, unitY: c$f, unitZ: i$g, unitW: f$e, ZEROS: _$8, ONES: l$e, UNIT_X: N$2, UNIT_Y: U$5, UNIT_Z: I$6, UNIT_W: O$5 });
class e$f {
  constructor(t2) {
    this.message = t2;
  }
  toString() {
    return `AssertException: ${this.message}`;
  }
}
function i$f(t2, n2) {
  if (!t2) {
    n2 = n2 || "assert";
    const t3 = new Error(n2);
    throw t3.stack && console.log(t3.stack), new e$f(n2);
  }
}
function F$4(t2, n2 = 0) {
  let r2 = 0;
  for (let o2 = 0; o2 < 4; o2++)
    r2 += t2[n2 + o2] * H$4[o2];
  return r2;
}
const H$4 = [1 / 256, 1 / 65536, 1 / 16777216, 1 / 4294967296];
F$4(new Uint8ClampedArray([255, 255, 255, 255]));
class a$f {
  constructor(i2, r2, a2, c2) {
    this.primitiveIndices = i2, this._numIndexPerPrimitive = r2, this.indices = a2, this.position = c2, this.center = n$g(), i$f(i2.length >= 1), i$f(a2.length % this._numIndexPerPrimitive == 0), i$f(a2.length >= i2.length * this._numIndexPerPrimitive), i$f(c2.size === 3 || c2.size === 4);
    const { data: o2, size: M2 } = c2, d2 = i2.length;
    let l2 = M2 * a2[this._numIndexPerPrimitive * i2[0]];
    b$8.clear(), b$8.push(l2), this.bbMin = t$q(o2[l2], o2[l2 + 1], o2[l2 + 2]), this.bbMax = r$p(this.bbMin);
    for (let t2 = 0; t2 < d2; ++t2) {
      const s2 = this._numIndexPerPrimitive * i2[t2];
      for (let i3 = 0; i3 < this._numIndexPerPrimitive; ++i3) {
        l2 = M2 * a2[s2 + i3], b$8.push(l2);
        let t3 = o2[l2];
        this.bbMin[0] = Math.min(t3, this.bbMin[0]), this.bbMax[0] = Math.max(t3, this.bbMax[0]), t3 = o2[l2 + 1], this.bbMin[1] = Math.min(t3, this.bbMin[1]), this.bbMax[1] = Math.max(t3, this.bbMax[1]), t3 = o2[l2 + 2], this.bbMin[2] = Math.min(t3, this.bbMin[2]), this.bbMax[2] = Math.max(t3, this.bbMax[2]);
      }
    }
    y$8(this.center, this.bbMin, this.bbMax, 0.5), this.radius = 0.5 * Math.max(Math.max(this.bbMax[0] - this.bbMin[0], this.bbMax[1] - this.bbMin[1]), this.bbMax[2] - this.bbMin[2]);
    let m2 = this.radius * this.radius;
    for (let t2 = 0; t2 < b$8.length; ++t2) {
      l2 = b$8.getItemAt(t2);
      const i3 = o2[l2] - this.center[0], s2 = o2[l2 + 1] - this.center[1], e2 = o2[l2 + 2] - this.center[2], n2 = i3 * i3 + s2 * s2 + e2 * e2;
      if (n2 <= m2)
        continue;
      const r3 = Math.sqrt(n2), h2 = 0.5 * (r3 - this.radius);
      this.radius = this.radius + h2, m2 = this.radius * this.radius;
      const a3 = h2 / r3;
      this.center[0] += i3 * a3, this.center[1] += s2 * a3, this.center[2] += e2 * a3;
    }
    b$8.clear();
  }
  getCenter() {
    return this.center;
  }
  getBSRadius() {
    return this.radius;
  }
  getBBMin() {
    return this.bbMin;
  }
  getBBMax() {
    return this.bbMax;
  }
  getChildren() {
    if (this._children)
      return this._children;
    if (x$7(this.bbMin, this.bbMax) > 1) {
      const i2 = y$8(n$g(), this.bbMin, this.bbMax, 0.5), s2 = this.primitiveIndices.length, e2 = new Uint8Array(s2), r2 = new Array(8);
      for (let t2 = 0; t2 < 8; ++t2)
        r2[t2] = 0;
      const { data: h2, size: b2 } = this.position;
      for (let t2 = 0; t2 < s2; ++t2) {
        let s3 = 0;
        const n2 = this._numIndexPerPrimitive * this.primitiveIndices[t2];
        let a2 = b2 * this.indices[n2], c3 = h2[a2], o3 = h2[a2 + 1], M2 = h2[a2 + 2];
        for (let i3 = 1; i3 < this._numIndexPerPrimitive; ++i3) {
          a2 = b2 * this.indices[n2 + i3];
          const t3 = h2[a2], s4 = h2[a2 + 1], e3 = h2[a2 + 2];
          t3 < c3 && (c3 = t3), s4 < o3 && (o3 = s4), e3 < M2 && (M2 = e3);
        }
        c3 < i2[0] && (s3 |= 1), o3 < i2[1] && (s3 |= 2), M2 < i2[2] && (s3 |= 4), e2[t2] = s3, ++r2[s3];
      }
      let c2 = 0;
      for (let t2 = 0; t2 < 8; ++t2)
        r2[t2] > 0 && ++c2;
      if (c2 < 2)
        return;
      const o2 = new Array(8);
      for (let t2 = 0; t2 < 8; ++t2)
        o2[t2] = r2[t2] > 0 ? new Uint32Array(r2[t2]) : void 0;
      for (let t2 = 0; t2 < 8; ++t2)
        r2[t2] = 0;
      for (let t2 = 0; t2 < s2; ++t2) {
        const i3 = e2[t2];
        o2[i3][r2[i3]++] = this.primitiveIndices[t2];
      }
      this._children = new Array(8);
      for (let t2 = 0; t2 < 8; ++t2)
        o2[t2] !== void 0 && (this._children[t2] = new a$f(o2[t2], this._numIndexPerPrimitive, this.indices, this.position));
    }
    return this._children;
  }
  static prune() {
    b$8.prune();
  }
}
const b$8 = new n$f({ deallocator: null });
class r$l {
  constructor() {
    this.id = e$j();
  }
  unload() {
  }
}
class s$9 {
  constructor(t2) {
    this.allocator = t2, this.items = [], this.itemsPtr = 0, this.tickHandle = f$g.before(() => this.reset()), this.grow();
  }
  destroy() {
    this.tickHandle && (this.tickHandle.remove(), this.tickHandle = p$8(this.tickHandle)), this.items = p$8(this.items);
  }
  get() {
    return this.itemsPtr === 0 && f$g(() => {
    }), this.itemsPtr === this.items.length && this.grow(), this.items[this.itemsPtr++];
  }
  reset() {
    const t2 = Math.min(3 * Math.max(8, this.itemsPtr), this.itemsPtr + 3 * e$e);
    this.items.length = Math.min(t2, this.items.length), this.itemsPtr = 0;
  }
  grow() {
    for (let t2 = 0; t2 < Math.max(8, Math.min(this.items.length, e$e)); t2++)
      this.items.push(this.allocator());
  }
}
const e$e = 1024;
class c$e {
  constructor(t2, s2, i2) {
    this.itemByteSize = t2, this.itemCreate = s2, this.buffers = [], this.items = [], this.itemsPerBuffer = 0, this.itemsPtr = 0, this.itemsPerBuffer = Math.ceil(i2 / this.itemByteSize), this.tickHandle = f$g.before(() => this.reset());
  }
  destroy() {
    this.tickHandle && (this.tickHandle.remove(), this.tickHandle = p$8(this.tickHandle)), this.itemsPtr = 0, this.items = p$8(this.items), this.buffers = p$8(this.buffers);
  }
  get() {
    this.itemsPtr === 0 && f$g(() => {
    });
    const t2 = Math.floor(this.itemsPtr / this.itemsPerBuffer);
    for (; this.buffers.length <= t2; ) {
      const t3 = new ArrayBuffer(this.itemsPerBuffer * this.itemByteSize);
      for (let e2 = 0; e2 < this.itemsPerBuffer; ++e2)
        this.items.push(this.itemCreate(t3, e2 * this.itemByteSize));
      this.buffers.push(t3);
    }
    return this.items[this.itemsPtr++];
  }
  reset() {
    const t2 = 2 * (Math.floor(this.itemsPtr / this.itemsPerBuffer) + 1);
    for (; this.buffers.length > t2; )
      this.buffers.pop(), this.items.length = this.buffers.length * this.itemsPerBuffer;
    this.itemsPtr = 0;
  }
  static createVec2f64(t2 = a$e) {
    return new c$e(16, a$i, t2);
  }
  static createVec3f64(t2 = a$e) {
    return new c$e(24, u$f, t2);
  }
  static createVec4f64(t2 = a$e) {
    return new c$e(32, u$e, t2);
  }
  static createMat3f64(t2 = a$e) {
    return new c$e(72, t$r, t2);
  }
  static createMat4f64(t2 = a$e) {
    return new c$e(128, t$p, t2);
  }
  static createQuatf64(t2 = a$e) {
    return new c$e(32, t$s, t2);
  }
  get test() {
    return { size: this.buffers.length * this.itemsPerBuffer * this.itemByteSize };
  }
}
const a$e = 4096;
c$e.createVec2f64();
const c$d = c$e.createVec3f64(), r$k = c$e.createVec4f64();
c$e.createMat3f64();
const f$d = c$e.createMat4f64();
c$e.createQuatf64();
function p$7(t2) {
  return t2 ? { origin: r$p(t2.origin), vector: r$p(t2.vector) } : { origin: n$g(), vector: n$g() };
}
function v$6(t2, r2) {
  const n2 = S$7.get();
  return n2.origin = t2, n2.vector = r2, n2;
}
function l$d(t2, r2 = p$7()) {
  return m$7(t2.origin, t2.vector, r2);
}
function m$7(t2, r2, n2 = p$7()) {
  return r$q(n2.origin, t2), r$q(n2.vector, r2), n2;
}
function b$7(t2, r2, n2 = p$7()) {
  return r$q(n2.origin, t2), c$g(n2.vector, r2, t2), n2;
}
function h$a(r2, n2) {
  const e2 = c$g(c$d.get(), n2, r2.origin), s2 = z$6(r2.vector, e2), a2 = z$6(r2.vector, r2.vector), u2 = e$k(s2 / a2, 0, 1), g2 = c$g(c$d.get(), d$b(c$d.get(), r2.vector, u2), e2);
  return z$6(g2, g2);
}
function d$a(t2, r2) {
  return Math.sqrt(h$a(t2, r2));
}
function j$8(t2, r2, n2) {
  return A$8(t2, r2, 0, 1, n2);
}
function M$5(t2, r2, n2) {
  return u$g(n2, t2.origin, d$b(n2, t2.vector, r2));
}
function A$8(r2, n2, e2, u2, g2) {
  const { vector: p2, origin: v2 } = r2, l2 = c$g(c$d.get(), n2, v2), m2 = z$6(p2, l2) / p$9(p2);
  return d$b(g2, p2, e$k(m2, e2, u2)), u$g(g2, g2, r2.origin);
}
function B$5(t2, r2) {
  if (_$7(t2, v$6(r2.origin, r2.direction), false, k$5)) {
    const { tA: r3, pB: n2, distance2: e2 } = k$5;
    if (r3 >= 0 && r3 <= 1)
      return e2;
    if (r3 < 0)
      return x$7(t2.origin, n2);
    if (r3 > 1)
      return x$7(u$g(c$d.get(), t2.origin, t2.vector), n2);
  }
  return null;
}
function w$8(t2, r2, n2) {
  return !!_$7(t2, r2, true, k$5) && (r$q(n2, k$5.pA), true);
}
function P$8(t2, r2) {
  return _$7(t2, r2, true, k$5) ? k$5.distance2 : null;
}
function _$7(r2, n2, e2, o2) {
  const i2 = 1e-6, c2 = r2.origin, a2 = u$g(c$d.get(), c2, r2.vector), g2 = n2.origin, p2 = u$g(c$d.get(), g2, n2.vector), v2 = c$d.get(), l2 = c$d.get();
  if (v2[0] = c2[0] - g2[0], v2[1] = c2[1] - g2[1], v2[2] = c2[2] - g2[2], l2[0] = p2[0] - g2[0], l2[1] = p2[1] - g2[1], l2[2] = p2[2] - g2[2], Math.abs(l2[0]) < i2 && Math.abs(l2[1]) < i2 && Math.abs(l2[2]) < i2)
    return false;
  const m2 = c$d.get();
  if (m2[0] = a2[0] - c2[0], m2[1] = a2[1] - c2[1], m2[2] = a2[2] - c2[2], Math.abs(m2[0]) < i2 && Math.abs(m2[1]) < i2 && Math.abs(m2[2]) < i2)
    return false;
  const b2 = v2[0] * l2[0] + v2[1] * l2[1] + v2[2] * l2[2], h2 = l2[0] * m2[0] + l2[1] * m2[1] + l2[2] * m2[2], d2 = v2[0] * m2[0] + v2[1] * m2[1] + v2[2] * m2[2], j2 = l2[0] * l2[0] + l2[1] * l2[1] + l2[2] * l2[2], M2 = (m2[0] * m2[0] + m2[1] * m2[1] + m2[2] * m2[2]) * j2 - h2 * h2;
  if (Math.abs(M2) < i2)
    return false;
  let A2 = (b2 * h2 - d2 * j2) / M2, B2 = (b2 + h2 * A2) / j2;
  e2 && (A2 = e$k(A2, 0, 1), B2 = e$k(B2, 0, 1));
  const w2 = c$d.get(), P2 = c$d.get();
  return w2[0] = c2[0] + A2 * m2[0], w2[1] = c2[1] + A2 * m2[1], w2[2] = c2[2] + A2 * m2[2], P2[0] = g2[0] + B2 * l2[0], P2[1] = g2[1] + B2 * l2[1], P2[2] = g2[2] + B2 * l2[2], o2.tA = A2, o2.tB = B2, o2.pA = w2, o2.pB = P2, o2.distance2 = x$7(w2, P2), true;
}
const k$5 = { tA: 0, tB: 0, pA: n$g(), pB: n$g(), distance2: 0 }, S$7 = new s$9(() => ({ origin: null, vector: null }));
Object.freeze({ __proto__: null, create: p$7, wrap: v$6, copy: l$d, fromValues: m$7, fromPoints: b$7, distance2: h$a, distance: d$a, projectPoint: j$8, pointAt: M$5, projectPointClamp: A$8, closestRayDistance2: B$5, closestLineSegmentPoint: w$8, closestLineSegmentDistance2: P$8 });
function d$9(e2) {
  return e2 ? { p0: r$p(e2.p0), p1: r$p(e2.p1), p2: r$p(e2.p2) } : { p0: n$g(), p1: n$g(), p2: n$g() };
}
function j$7(t2, n2, e2) {
  const r2 = O$4.get();
  return r2.p0 = t2, r2.p1 = n2, r2.p2 = e2, r2;
}
function b$6(t2, n2 = d$9()) {
  return v$5(t2.p0, t2.p1, t2.p2, n2);
}
function v$5(t2, n2, r2, s2 = d$9()) {
  return r$q(s2.p0, t2), r$q(s2.p1, n2), r$q(s2.p2, r2), s2;
}
function w$7(t2, n2) {
  const e2 = t2.p0, a2 = t2.p1, o2 = t2.p2, c2 = c$g(c$d.get(), a2, e2), i2 = c$g(c$d.get(), o2, a2), u2 = c$g(c$d.get(), e2, o2), l2 = c$g(c$d.get(), n2, e2), d2 = c$g(c$d.get(), n2, a2), j2 = c$g(c$d.get(), n2, o2), b2 = _$9(c2, c2, u2), v2 = z$6(_$9(c$d.get(), c2, b2), l2), w2 = z$6(_$9(c$d.get(), i2, b2), d2), _2 = z$6(_$9(c$d.get(), u2, b2), j2);
  if (v2 > 0 && w2 > 0 && _2 > 0) {
    const t3 = z$6(b2, l2);
    return t3 * t3 / z$6(b2, b2);
  }
  const h2 = h$a(m$7(e2, c2, M$4.get()), n2), k2 = h$a(m$7(a2, i2, M$4.get()), n2), y2 = h$a(m$7(o2, u2, M$4.get()), n2);
  return Math.min(h2, k2, y2);
}
function _$6(t2, n2, e2) {
  const r2 = 1e-5, { direction: s2, origin: p2 } = n2, { p0: c2, p1: i2, p2: u2 } = t2, f2 = i2[0] - c2[0], g2 = i2[1] - c2[1], m2 = i2[2] - c2[2], l2 = u2[0] - c2[0], d2 = u2[1] - c2[1], j2 = u2[2] - c2[2], b2 = s2[1] * j2 - d2 * s2[2], v2 = s2[2] * l2 - j2 * s2[0], w2 = s2[0] * d2 - l2 * s2[1], _2 = f2 * b2 + g2 * v2 + m2 * w2;
  if (_2 > -r2 && _2 < r2)
    return false;
  const h2 = 1 / _2, k2 = p2[0] - c2[0], y2 = p2[1] - c2[1], M2 = p2[2] - c2[2], O2 = h2 * (k2 * b2 + y2 * v2 + M2 * w2);
  if (O2 < 0 || O2 > 1)
    return false;
  const P2 = y2 * m2 - g2 * M2, S2 = M2 * f2 - m2 * k2, q2 = k2 * g2 - f2 * y2, x2 = h2 * (s2[0] * P2 + s2[1] * S2 + s2[2] * q2);
  if (x2 < 0 || O2 + x2 > 1)
    return false;
  if (e2) {
    d$b(e2, s2, h2 * (l2 * P2 + d2 * S2 + j2 * q2)), u$g(e2, p2, e2);
  }
  return true;
}
function h$9(t2, n2, e2) {
  const r2 = d$c(t2, n2), s2 = d$c(n2, e2), p2 = d$c(e2, t2), a2 = (r2 + s2 + p2) / 2, o2 = a2 * (a2 - r2) * (a2 - s2) * (a2 - p2);
  return o2 <= 0 ? 0 : Math.sqrt(o2);
}
function k$4(t2) {
  return h$9(t2.p0, t2.p1, t2.p2);
}
function y$7(t2, n2, e2) {
  return c$g(P$7, n2, t2), c$g(S$6, e2, t2), s$b(_$9(P$7, P$7, S$6)) / 2;
}
const M$4 = new s$9(p$7), O$4 = new s$9(() => ({ p0: null, p1: null, p2: null })), P$7 = n$g(), S$6 = n$g();
Object.freeze({ __proto__: null, create: d$9, wrap: j$7, copy: b$6, fromValues: v$5, distance2: w$7, intersectRay: _$6, areaPoints2d: h$9, area2d: k$4, areaPoints3d: y$7 });
let c$c = (() => {
  const t2 = new Uint32Array(131072);
  for (let n2 = 0; n2 < t2.length; ++n2)
    t2[n2] = n2;
  return t2;
})();
const f$c = new Uint16Array([0]), a$d = (() => {
  const t2 = new Uint16Array(65536);
  for (let n2 = 0; n2 < t2.length; ++n2)
    t2[n2] = n2;
  return t2;
})();
function i$e(t2) {
  if (t2 === 1)
    return f$c;
  if (t2 < a$d.length)
    return new Uint16Array(a$d.buffer, 0, t2);
  if (t2 > c$c.length) {
    const n2 = Math.max(2 * c$c.length, t2);
    c$c = new Uint32Array(n2);
    for (let t3 = 0; t3 < c$c.length; t3++)
      c$c[t3] = t3;
  }
  return new Uint32Array(c$c.buffer, 0, t2);
}
function l$c(t2, o2, c2) {
  if (!t2)
    return false;
  const { size: f2, data: a2 } = t2;
  o$m(c2, 0, 0, 0), o$m(y$6, 0, 0, 0);
  let i2 = 0, l2 = 0;
  for (let u2 = 0; u2 < o2.length - 2; u2 += 3) {
    const t3 = o2[u2 + 0] * f2, h2 = o2[u2 + 1] * f2, A2 = o2[u2 + 2] * f2;
    o$m(g$6, a2[t3 + 0], a2[t3 + 1], a2[t3 + 2]), o$m(m$6, a2[h2 + 0], a2[h2 + 1], a2[h2 + 2]), o$m(w$6, a2[A2 + 0], a2[A2 + 1], a2[A2 + 2]);
    const U2 = y$7(g$6, m$6, w$6);
    U2 ? (u$g(g$6, g$6, m$6), u$g(g$6, g$6, w$6), d$b(g$6, g$6, 1 / 3 * U2), u$g(c2, c2, g$6), i2 += U2) : (u$g(y$6, y$6, g$6), u$g(y$6, y$6, m$6), u$g(y$6, y$6, w$6), l2 += 3);
  }
  return (l2 !== 0 || i2 !== 0) && (i2 !== 0 ? (d$b(c2, c2, 1 / i2), true) : l2 !== 0 && (d$b(c2, y$6, 1 / l2), true));
}
function u$d(t2, r2, o2) {
  if (!t2 || !r2)
    return false;
  const { size: s2, data: c2 } = t2;
  o$m(o2, 0, 0, 0);
  let f2 = -1, a2 = 0;
  for (let n2 = 0; n2 < r2.length; n2++) {
    const t3 = r2[n2] * s2;
    f2 !== t3 && (o2[0] += c2[t3 + 0], o2[1] += c2[t3 + 1], o2[2] += c2[t3 + 2], a2++), f2 = t3;
  }
  return a2 > 1 && d$b(o2, o2, 1 / a2), a2 > 0;
}
const g$6 = n$g(), m$6 = n$g(), w$6 = n$g(), y$6 = n$g();
class u$c extends r$l {
  constructor(t2, e2 = [], i2 = 0, n2 = -1) {
    super(), this._primitiveType = i2, this.edgeIndicesLength = n2, this.type = 2, this._vertexAttributes = new Map(), this._indices = new Map(), this._boundingInfo = null;
    for (const [s2, r2] of t2)
      r2 && this._vertexAttributes.set(s2, __spreadValues({}, r2));
    if (e2 == null || e2.length === 0) {
      const t3 = h$8(this._vertexAttributes), e3 = i$e(t3);
      this.edgeIndicesLength = this.edgeIndicesLength < 0 ? t3 : this.edgeIndicesLength;
      for (const i3 of this._vertexAttributes.keys())
        this._indices.set(i3, e3);
    } else
      for (const [s2, r2] of e2)
        r2 && (this._indices.set(s2, g$5(r2)), s2 === "position" && (this.edgeIndicesLength = this.edgeIndicesLength < 0 ? this._indices.get(s2).length : this.edgeIndicesLength));
  }
  get vertexAttributes() {
    return this._vertexAttributes;
  }
  getMutableAttribute(t2) {
    const e2 = this._vertexAttributes.get(t2);
    return e2 && !e2.exclusive && (e2.data = Array.from(e2.data), e2.exclusive = true), e2;
  }
  get indices() {
    return this._indices;
  }
  get indexCount() {
    const t2 = this._indices.values().next().value;
    return t2 ? t2.length : 0;
  }
  get primitiveType() {
    return this._primitiveType;
  }
  get faceCount() {
    return this.indexCount / 3;
  }
  get boundingInfo() {
    return t$t(this._boundingInfo) && (this._boundingInfo = this._calculateBoundingInfo()), this._boundingInfo;
  }
  computeAttachmentOrigin(t2) {
    return this.primitiveType === 0 ? this.computeAttachmentOriginTriangles(t2) : this.computeAttachmentOriginPoints(t2);
  }
  computeAttachmentOriginTriangles(t2) {
    const e2 = this.indices.get("position"), i2 = this.vertexAttributes.get("position");
    return l$c(i2, e2, t2);
  }
  computeAttachmentOriginPoints(t2) {
    const e2 = this.indices.get("position"), i2 = this.vertexAttributes.get("position");
    return u$d(i2, e2, t2);
  }
  invalidateBoundingInfo() {
    this._boundingInfo = null;
  }
  _calculateBoundingInfo() {
    const t2 = this.indices.get("position");
    if (t2.length === 0)
      return null;
    const n2 = this.primitiveType === 0 ? 3 : 1;
    i$f(t2.length % n2 == 0, "Indexing error: " + t2.length + " not divisible by " + n2);
    const r2 = i$e(t2.length / n2), o2 = this.vertexAttributes.get("position");
    return new a$f(r2, n2, t2, o2);
  }
}
function h$8(t2) {
  const e2 = t2.values().next().value;
  return e2 == null ? 0 : e2.data.length / e2.size;
}
function g$5(t2) {
  if (t2.BYTES_PER_ELEMENT === Uint16Array.BYTES_PER_ELEMENT)
    return t2;
  for (const e2 of t2)
    if (e2 >= 65536)
      return t2;
  return new Uint16Array(t2);
}
function c$b(t2, n2, r2) {
  const a2 = z$6(t2, n2) / z$6(t2, t2);
  return d$b(r2, t2, a2);
}
function i$d(t2, n2) {
  return z$6(t2, n2) / s$b(t2);
}
function u$b(n2, s2) {
  const a2 = z$6(n2, s2) / (s$b(n2) * s$b(s2));
  return -N$3(a2);
}
function f$b(n2, r2, s2) {
  j$9(p$6, n2), j$9(m$5, r2);
  const c2 = z$6(p$6, m$5), i2 = N$3(c2), u2 = _$9(p$6, p$6, m$5);
  return z$6(u2, s2) < 0 ? 2 * Math.PI - i2 : i2;
}
const p$6 = n$g(), m$5 = n$g();
Object.freeze({ __proto__: null, projectPoint: c$b, projectPointSignedLength: i$d, angle: u$b, angleAroundAxis: f$b });
function l$b(r2) {
  return r2 ? { origin: r$p(r2.origin), direction: r$p(r2.direction) } : { origin: n$g(), direction: n$g() };
}
function j$6(r2, n2) {
  const e2 = E$8.get();
  return e2.origin = r2, e2.direction = n2, e2;
}
function R$5(r2, n2 = l$b()) {
  return S$5(r2.origin, r2.direction, n2);
}
function b$5(r2, n2, e2 = l$b()) {
  return r$q(e2.origin, r2), c$g(e2.direction, n2, r2), e2;
}
function S$5(r2, n2, e2 = l$b()) {
  return r$q(e2.origin, r2), r$q(e2.direction, n2), e2;
}
function v$4(r2, e2, o2 = l$b()) {
  return y$5(r2, r2.screenToRender(e2, p$a(c$d.get())), o2);
}
function y$5(e2, o2, t2 = l$b()) {
  const c2 = p$a(a$j(c$d.get(), o2));
  if (c2[2] = 0, !e2.unprojectFromRenderScreen(c2, t2.origin))
    return null;
  const s2 = p$a(a$j(c$d.get(), o2));
  s2[2] = 1;
  const a2 = e2.unprojectFromRenderScreen(s2, c$d.get());
  return t$t(a2) ? null : (c$g(t2.direction, a2, t2.origin), t2);
}
function w$5(r2, e2, o2 = l$b()) {
  return _$5(r2, r2.screenToRender(e2, p$a(c$d.get())), o2);
}
function _$5(n2, e2, o2 = l$b()) {
  r$q(o2.origin, n2.eye);
  const s2 = o$m(c$d.get(), e2[0], e2[1], 1), a2 = n2.unprojectFromRenderScreen(s2, c$d.get());
  return t$t(a2) ? null : (c$g(o2.direction, a2, o2.origin), o2);
}
function k$3(r2, n2) {
  const e2 = _$9(c$d.get(), j$9(c$d.get(), r2.direction), c$g(c$d.get(), n2, r2.origin));
  return z$6(e2, e2);
}
function F$3(r2, n2) {
  return Math.sqrt(k$3(r2, n2));
}
function h$7(r2, n2, e2) {
  const o2 = z$6(r2.direction, c$g(e2, n2, r2.origin));
  return u$g(e2, r2.origin, d$b(e2, r2.direction, o2)), e2;
}
function A$7() {
  return { origin: null, direction: null };
}
const E$8 = new s$9(A$7);
Object.freeze({ __proto__: null, create: l$b, wrap: j$6, copy: R$5, fromPoints: b$5, fromValues: S$5, fromScreen: v$4, fromRender: y$5, fromScreenAtEye: w$5, fromRenderAtEye: _$5, distance2: k$3, distance: F$3, closestPoint: h$7, createWrapper: A$7 });
const k$2 = n$e.getLogger("esri.views.3d.support.geometryUtils.sphere");
function q$4() {
  return n$c();
}
function C$4(t2, r2 = q$4()) {
  return a$k(r2, t2);
}
function O$3(t2, r2) {
  return r$m(t2[0], t2[1], t2[2], r2);
}
function P$6(t2) {
  return t2;
}
function U$4(t2) {
  t2[0] = t2[1] = t2[2] = t2[3] = 0;
}
function z$5(t2) {
  return t2;
}
function E$7(t2) {
  return Array.isArray(t2) ? t2[3] : t2;
}
function L$4(t2) {
  return Array.isArray(t2) ? t2 : tt;
}
function T$3(t2, r2, n2, s2) {
  return r$m(t2, r2, n2, s2);
}
function V$3(t2, r2, n2) {
  return t2 !== n2 && r$q(n2, t2), n2[3] = t2[3] + r2, n2;
}
function B$4(t2, r2, n2) {
  return k$2.error("sphere.setExtent is not yet supported"), t2 === n2 ? n2 : C$4(t2, n2);
}
function D$6(r2, n2, s2) {
  if (t$t(n2))
    return false;
  const e2 = c$g(c$d.get(), n2.origin, L$4(r2)), u2 = z$6(n2.direction, n2.direction), f2 = 2 * z$6(n2.direction, e2), m2 = f2 * f2 - 4 * u2 * (z$6(e2, e2) - r2[3] * r2[3]);
  if (m2 < 0)
    return false;
  const g2 = Math.sqrt(m2);
  let p2 = (-f2 - g2) / (2 * u2);
  const l2 = (-f2 + g2) / (2 * u2);
  return (p2 < 0 || l2 < p2 && l2 > 0) && (p2 = l2), !(p2 < 0) && (s2 && u$g(s2, n2.origin, d$b(c$d.get(), n2.direction, p2)), true);
}
function F$2(t2, r2, n2, s2) {
  return D$6(t2, w$5(r2, n2, $$2), s2);
}
function G$3(t2, r2) {
  return D$6(t2, r2, null);
}
function H$3(t2, r2, n2) {
  if (D$6(t2, r2, n2))
    return n2;
  const s2 = I$5(t2, r2, c$d.get());
  return u$g(n2, r2.origin, d$b(c$d.get(), r2.direction, q$5(r2.origin, s2) / s$b(r2.direction))), n2;
}
function I$5(t2, r2, n2) {
  const s2 = c$d.get(), e2 = f$d.get();
  _$9(s2, r2.origin, r2.direction);
  const o2 = E$7(t2);
  _$9(n2, s2, r2.origin), d$b(n2, n2, 1 / s$b(n2) * o2);
  const i2 = Q$3(t2, r2.origin), a2 = u$b(r2.origin, n2);
  return r$r(e2), f$h(e2, e2, a2 + i2, s2), I$7(n2, n2, e2), n2;
}
function J$4(t2, r2, n2) {
  return D$6(t2, r2, n2) ? n2 : (h$7(r2, L$4(t2), n2), K$3(t2, n2, n2));
}
function K$3(t2, r2, n2) {
  const s2 = c$g(c$d.get(), r2, L$4(t2)), e2 = d$b(c$d.get(), s2, t2[3] / s$b(s2));
  return u$g(n2, e2, L$4(t2));
}
function N$1(t2, r2) {
  const n2 = c$g(c$d.get(), r2, L$4(t2)), s2 = p$9(n2), e2 = t2[3] * t2[3];
  return Math.sqrt(Math.abs(s2 - e2));
}
function Q$3(t2, r2) {
  const s2 = c$g(c$d.get(), r2, L$4(t2)), e2 = s$b(s2), i2 = E$7(t2), a2 = i2 + Math.abs(i2 - e2);
  return N$3(i2 / a2);
}
const W$1 = n$g();
function X$2(t2, r2, n2, s2) {
  const e2 = c$g(W$1, r2, L$4(t2));
  switch (n2) {
    case 0: {
      const t3 = q$6(e2, W$1)[2];
      return o$m(s2, -Math.sin(t3), Math.cos(t3), 0);
    }
    case 1: {
      const t3 = q$6(e2, W$1), r3 = t3[1], n3 = t3[2], o2 = Math.sin(r3);
      return o$m(s2, -o2 * Math.cos(n3), -o2 * Math.sin(n3), Math.cos(r3));
    }
    case 2:
      return j$9(s2, e2);
    default:
      return;
  }
}
function Y(t2, r2) {
  const n2 = c$g(rt, r2, L$4(t2));
  return s$b(n2) - t2[3];
}
function Z$1(t2, r2, n2, s2) {
  const e2 = Y(t2, r2), o2 = X$2(t2, r2, 2, rt), i2 = d$b(rt, o2, n2 - e2);
  return u$g(s2, r2, i2), s2;
}
const $$2 = l$b(), tt = n$g(), rt = n$g();
Object.freeze(tt);
Object.freeze({ __proto__: null, create: q$4, copy: C$4, fromCenterAndRadius: O$3, wrap: P$6, clear: U$4, fromRadius: z$5, getRadius: E$7, getCenter: L$4, fromValues: T$3, elevate: V$3, setExtent: B$4, intersectRay: D$6, intersectScreen: F$2, intersectsRay: G$3, intersectRayClosestSilhouette: H$3, closestPointOnSilhouette: I$5, closestPoint: J$4, projectPoint: K$3, distanceToSilhouette: N$1, angleToSilhouette: Q$3, axisAt: X$2, altitudeAt: Y, setAltitudeAt: Z$1 });
function l$a(t2 = T$2) {
  return [t2[0], t2[1], t2[2], t2[3]];
}
function d$8(t2, n2, r2, e2) {
  return h$6(t2, n2, r2, e2, r$k.get());
}
function y$4(t2, n2 = l$a()) {
  return h$6(t2[0], t2[1], t2[2], t2[3], n2);
}
function h$6(t2, n2, r2, e2, o2 = l$a()) {
  return o2[0] = t2, o2[1] = n2, o2[2] = r2, o2[3] = e2, o2;
}
function j$5(t2, n2, r2 = l$a()) {
  return r$q(r2, t2), r2[3] = n2, r2;
}
function P$5(t2, n2, r2 = l$a()) {
  r$q(r2, n2);
  const s2 = z$6(n2, n2);
  return Math.abs(s2 - 1) > 1e-5 && s2 > 1e-12 && d$b(r2, r2, 1 / Math.sqrt(s2)), I$4(r2, t2, r2), r2;
}
function M$3(t2, n2, r2, e2 = l$a()) {
  return w$4(c$g(c$d.get(), t2, n2), c$g(c$d.get(), r2, n2), t2, e2);
}
function b$4(t2, n2) {
  return v$3(t2, n2, 0, 1, 2);
}
function v$3(t2, n2, r2, e2, i2) {
  if (t2.count < 3)
    return false;
  t2.getVec(r2, V$2);
  let a2 = e2, f2 = false;
  for (; a2 < t2.count - 1 && !f2; )
    t2.getVec(a2, O$2), a2++, f2 = !F$5(V$2, O$2);
  if (!f2)
    return false;
  for (a2 = Math.max(a2, i2), f2 = false; a2 < t2.count && !f2; )
    t2.getVec(a2, S$4), a2++, c$g(x$6, V$2, O$2), j$9(x$6, x$6), c$g(F$1, O$2, S$4), j$9(F$1, F$1), f2 = !F$5(V$2, S$4) && !F$5(O$2, S$4) && Math.abs(z$6(x$6, F$1)) < A$6;
  return f2 ? (M$3(V$2, O$2, S$4, n2), true) : (r2 !== 0 || e2 !== 1 || i2 !== 2) && v$3(t2, n2, 0, 1, 2);
}
const A$6 = 0.99619469809, V$2 = n$g(), O$2 = n$g(), S$4 = n$g(), x$6 = n$g(), F$1 = n$g();
function I$4(t2, n2, r2) {
  return t2 !== r2 && y$4(t2, r2), r2[3] = -z$6(Q$2(r2), n2), r2;
}
function _$4(t2, n2) {
  return n2[0] = -t2[0], n2[1] = -t2[1], n2[2] = -t2[2], n2[3] = -t2[3], n2;
}
function w$4(t2, n2, r2, e2 = l$a()) {
  return P$5(r2, _$9(c$d.get(), n2, t2), e2);
}
function B$3(n2, r2, e2) {
  return !!r$s(r2) && K$2(n2, r2.origin, r2.direction, true, false, e2);
}
function U$3(t2, n2, r2) {
  return K$2(t2, n2.origin, n2.vector, false, false, r2);
}
function k$1(t2, n2, r2) {
  return K$2(t2, n2.origin, n2.vector, false, true, r2);
}
function q$3(t2, n2) {
  return J$3(t2, L$4(n2)) - n2[3] >= 0;
}
function z$4(t2, n2) {
  return J$3(t2, L$4(n2)) + n2[3] < 0;
}
function L$3(t2, n2) {
  return J$3(t2, n2) >= 0;
}
function N(t2, n2) {
  return J$3(t2, n2) < 0;
}
function C$3(t2, n2) {
  const r2 = n2[0], e2 = n2[1], o2 = n2[2], i2 = n2[3], s2 = n2[4], c2 = n2[5];
  return t2[0] * (t2[0] > 0 ? r2 : i2) + t2[1] * (t2[1] > 0 ? e2 : s2) + t2[2] * (t2[2] > 0 ? o2 : c2) + t2[3] >= 0;
}
function D$5(t2, n2) {
  const r2 = z$6(Q$2(t2), n2.ray.direction), e2 = -J$3(t2, n2.ray.origin);
  if (e2 < 0 && r2 >= 0)
    return false;
  if (r2 > -1e-6 && r2 < 1e-6)
    return e2 > 0;
  if ((e2 < 0 || r2 < 0) && !(e2 < 0 && r2 < 0))
    return true;
  const i2 = e2 / r2;
  return r2 > 0 ? i2 < n2.c1 && (n2.c1 = i2) : i2 > n2.c0 && (n2.c0 = i2), n2.c0 <= n2.c1;
}
function R$4(t2, n2) {
  const r2 = z$6(Q$2(t2), n2.ray.direction), e2 = -J$3(t2, n2.ray.origin);
  if (r2 > -1e-6 && r2 < 1e-6)
    return e2 > 0;
  const i2 = e2 / r2;
  return r2 > 0 ? i2 < n2.c1 && (n2.c1 = i2) : i2 > n2.c0 && (n2.c0 = i2), n2.c0 <= n2.c1;
}
function E$6(t2, n2, r2) {
  const e2 = d$b(c$d.get(), Q$2(t2), -t2[3]), o2 = G$2(t2, c$g(c$d.get(), n2, e2), c$d.get());
  return u$g(r2, o2, e2), r2;
}
function G$2(t2, n2, r2) {
  const e2 = d$b(c$d.get(), Q$2(t2), z$6(Q$2(t2), n2));
  return c$g(r2, n2, e2), r2;
}
function H$2(t2, n2) {
  return Math.abs(J$3(t2, n2));
}
function J$3(t2, n2) {
  return z$6(Q$2(t2), n2) + t2[3];
}
function K$2(t2, r2, e2, s2, c2, u2) {
  const a2 = z$6(Q$2(t2), e2);
  if (a2 === 0)
    return false;
  let m2 = -(z$6(Q$2(t2), r2) + t2[3]) / a2;
  return c2 && (m2 = s2 ? Math.max(0, m2) : e$k(m2, 0, 1)), !(m2 < 0 || !s2 && m2 > 1) && (u$g(u2, r2, d$b(u2, e2, m2)), true);
}
function Q$2(t2) {
  return t2;
}
const T$2 = [0, 0, 1, 0];
Object.freeze({ __proto__: null, create: l$a, wrap: d$8, copy: y$4, fromValues: h$6, fromNormalAndOffset: j$5, fromPositionAndNormal: P$5, fromPoints: M$3, fromManyPoints: b$4, fromManyPointsSampleAt: v$3, setOffsetFromPoint: I$4, negate: _$4, fromVectorsAndPoint: w$4, intersectRay: B$3, intersectLineSegment: U$3, intersectLineSegmentClamp: k$1, isSphereFullyInside: q$3, isSphereFullyOutside: z$4, isPointInside: L$3, isPointOutside: N, isAABBFullyInside: C$3, clip: D$5, clipInfinite: R$4, projectPoint: E$6, projectVector: G$2, distance: H$2, signedDistance: J$3, normal: Q$2, UP: T$2 });
const R$3 = n$e.getLogger("esri.views.3d.support.geometryUtils.boundedPlane");
class z$3 {
  constructor() {
    this.plane = l$a(), this.origin = n$g(), this.basis1 = n$g(), this.basis2 = n$g();
  }
}
function G$1(s2 = Ps) {
  return { plane: l$a(s2.plane), origin: r$p(s2.origin), basis1: r$p(s2.basis1), basis2: r$p(s2.basis2) };
}
function W(s2, i2, n2) {
  const t2 = ys.get();
  return t2.origin = s2, t2.basis1 = i2, t2.basis2 = n2, t2.plane = d$8(0, 0, 0, 0), K$1(t2), t2;
}
function D$4(s2, i2 = G$1()) {
  return J$2(s2.origin, s2.basis1, s2.basis2, i2);
}
function H$1(s2, i2) {
  r$q(i2.origin, s2.origin), r$q(i2.basis1, s2.basis1), r$q(i2.basis2, s2.basis2), y$4(s2.plane, i2.plane);
}
function J$2(s2, i2, n2, t2 = G$1()) {
  return r$q(t2.origin, s2), r$q(t2.basis1, i2), r$q(t2.basis2, n2), K$1(t2), vs(t2, "fromValues()"), t2;
}
function K$1(s2) {
  w$4(s2.basis2, s2.basis1, s2.origin, s2.plane);
}
function Q$1(s2, i2, n2) {
  s2 !== n2 && D$4(s2, n2);
  const t2 = d$b(c$d.get(), ms(s2), i2);
  return u$g(n2.origin, n2.origin, t2), n2.plane[3] -= i2, n2;
}
function X$1(s2, i2, n2) {
  return Z(i2, n2), Q$1(n2, gs(s2, s2.origin), n2), n2;
}
function Z(s2, i2 = G$1()) {
  const n2 = (s2[2] - s2[0]) / 2, t2 = (s2[3] - s2[1]) / 2;
  return o$m(i2.origin, s2[0] + n2, s2[1] + t2, 0), o$m(i2.basis1, n2, 0, 0), o$m(i2.basis2, 0, t2, 0), h$6(0, 0, 1, 0, i2.plane), i2;
}
function $$1(s2, i2, n2) {
  return !!B$3(s2.plane, i2, n2) && hs(s2, n2);
}
function ss(s2, i2, n2) {
  if ($$1(s2, i2, n2))
    return n2;
  const t2 = is(s2, i2, c$d.get());
  return u$g(n2, i2.origin, d$b(c$d.get(), i2.direction, q$5(i2.origin, t2) / s$b(i2.direction))), n2;
}
function is(s2, n2, t2) {
  const a2 = Ns.get();
  ws(s2, n2, a2, Ns.get());
  let r2 = Number.POSITIVE_INFINITY;
  for (const e2 of As) {
    const c2 = Is(s2, e2, Ms.get()), u2 = c$d.get();
    if (U$3(a2, c2, u2)) {
      const s3 = w$9(c$d.get(), n2.origin, u2), a3 = Math.abs(N$3(z$6(n2.direction, s3)));
      a3 < r2 && (r2 = a3, r$q(t2, u2));
    }
  }
  return r2 === Number.POSITIVE_INFINITY ? ns(s2, n2, t2) : t2;
}
function ns(s2, i2, n2) {
  if ($$1(s2, i2, n2))
    return n2;
  const t2 = Ns.get(), a2 = Ns.get();
  ws(s2, i2, t2, a2);
  let r2 = Number.POSITIVE_INFINITY;
  for (const e2 of As) {
    const c2 = Is(s2, e2, Ms.get()), u2 = c$d.get();
    if (k$1(t2, c2, u2)) {
      const s3 = k$3(i2, u2);
      if (!L$3(a2, u2))
        continue;
      s3 < r2 && (r2 = s3, r$q(n2, u2));
    }
  }
  return os(s2, i2.origin) < r2 && ts(s2, i2.origin, n2), n2;
}
function ts(s2, i2, n2) {
  const t2 = E$6(s2.plane, i2, c$d.get()), a2 = A$8(js(s2, s2.basis1), t2, -1, 1, c$d.get()), o2 = A$8(js(s2, s2.basis2), t2, -1, 1, c$d.get());
  return c$g(n2, u$g(c$d.get(), a2, o2), s2.origin), n2;
}
function as(s2, i2, n2) {
  const { origin: t2, basis1: a2, basis2: o2 } = s2, r2 = c$g(c$d.get(), i2, t2), e2 = i$d(a2, r2), u2 = i$d(o2, r2), g2 = i$d(ms(s2), r2);
  return o$m(n2, e2, u2, g2);
}
function os(s2, i2) {
  const n2 = as(s2, i2, c$d.get()), { basis1: t2, basis2: a2 } = s2, o2 = s$b(t2), r2 = s$b(a2), e2 = Math.max(Math.abs(n2[0]) - o2, 0), c2 = Math.max(Math.abs(n2[1]) - r2, 0), u2 = n2[2];
  return e2 * e2 + c2 * c2 + u2 * u2;
}
function rs(s2, i2) {
  return Math.sqrt(os(s2, i2));
}
function es(s2, i2) {
  let n2 = Number.NEGATIVE_INFINITY;
  for (const t2 of As) {
    const a2 = Is(s2, t2, Ms.get()), o2 = h$a(a2, i2);
    o2 > n2 && (n2 = o2);
  }
  return Math.sqrt(n2);
}
function cs(s2, i2) {
  return L$3(s2.plane, i2) && hs(s2, i2);
}
function us(s2, i2, n2, t2) {
  return ds(s2, n2, t2);
}
function gs(s2, i2) {
  const n2 = -s2.plane[3];
  return i$d(ms(s2), i2) - n2;
}
function bs(s2, i2, n2, t2) {
  const a2 = gs(s2, i2), o2 = d$b(Ts, ms(s2), n2 - a2);
  return u$g(t2, i2, o2), t2;
}
function fs(s2, i2) {
  return F$5(s2.basis1, i2.basis1) && F$5(s2.basis2, i2.basis2) && F$5(s2.origin, i2.origin);
}
function ls(s2, i2, n2) {
  return s2 !== n2 && D$4(s2, n2), h$b(Ss, i2), o$n(Ss, Ss), I$7(n2.basis1, s2.basis1, Ss), I$7(n2.basis2, s2.basis2, Ss), I$7(Q$2(n2.plane), Q$2(s2.plane), Ss), I$7(n2.origin, s2.origin, i2), I$4(n2.plane, n2.origin, n2.plane), n2;
}
function ps(s2, i2, n2, t2) {
  return s2 !== t2 && D$4(s2, t2), f$h(_s, r$r(_s), i2, n2), I$7(t2.basis1, s2.basis1, _s), I$7(t2.basis2, s2.basis2, _s), K$1(t2), t2;
}
function ms(s2) {
  return Q$2(s2.plane);
}
function ds(s2, i2, n2) {
  switch (i2) {
    case 0:
      r$q(n2, s2.basis1), j$9(n2, n2);
      break;
    case 1:
      r$q(n2, s2.basis2), j$9(n2, n2);
      break;
    case 2:
      r$q(n2, ms(s2));
  }
  return n2;
}
function hs(s2, i2) {
  const n2 = c$g(c$d.get(), i2, s2.origin), t2 = p$9(s2.basis1), a2 = p$9(s2.basis2), o2 = z$6(s2.basis1, n2), r2 = z$6(s2.basis2, n2);
  return -o2 - t2 < 0 && o2 - t2 < 0 && -r2 - a2 < 0 && r2 - a2 < 0;
}
function js(s2, i2) {
  const n2 = Ms.get();
  return r$q(n2.origin, s2.origin), r$q(n2.vector, i2), n2;
}
function Is(s2, i2, n2) {
  const { basis1: t2, basis2: a2, origin: o2 } = s2, c2 = d$b(c$d.get(), t2, i2.origin[0]), u2 = d$b(c$d.get(), a2, i2.origin[1]);
  u$g(n2.origin, c2, u2), u$g(n2.origin, n2.origin, o2);
  const g2 = d$b(c$d.get(), t2, i2.direction[0]), b2 = d$b(c$d.get(), a2, i2.direction[1]);
  return d$b(n2.vector, u$g(g2, g2, b2), 2), n2;
}
function vs(s2, i2) {
  Math.abs(z$6(s2.basis1, s2.basis2) / (s$b(s2.basis1) * s$b(s2.basis2))) > 1e-6 && R$3.warn(i2, "Provided basis vectors are not perpendicular"), Math.abs(z$6(s2.basis1, ms(s2))) > 1e-6 && R$3.warn(i2, "Basis vectors and plane normal are not perpendicular"), Math.abs(-z$6(ms(s2), s2.origin) - s2.plane[3]) > 1e-6 && R$3.warn(i2, "Plane offset is not consistent with plane origin");
}
function ws(s2, i2, n2, t2) {
  const a2 = ms(s2);
  w$4(a2, i2.direction, i2.origin, n2), w$4(Q$2(n2), a2, i2.origin, t2);
}
const Ps = { plane: l$a(), origin: t$q(0, 0, 0), basis1: t$q(1, 0, 0), basis2: t$q(0, 1, 0) }, Ns = new s$9(l$a), Ms = new s$9(p$7), Ts = n$g(), ys = new s$9(() => ({ origin: null, basis1: null, basis2: null, plane: null })), As = [{ origin: [-1, -1], direction: [1, 0] }, { origin: [1, -1], direction: [0, 1] }, { origin: [1, 1], direction: [-1, 0] }, { origin: [-1, 1], direction: [0, -1] }], Ss = e$i(), _s = e$i();
Object.freeze({ __proto__: null, BoundedPlaneClass: z$3, create: G$1, wrap: W, copy: D$4, copyWithoutVerify: H$1, fromValues: J$2, updateUnboundedPlane: K$1, elevate: Q$1, setExtent: X$1, fromAABoundingRect: Z, intersectRay: $$1, intersectRayClosestSilhouette: ss, closestPointOnSilhouette: is, closestPoint: ns, projectPoint: ts, projectPointLocal: as, distance2: os, distance: rs, distanceToSilhouette: es, extrusionContainsPoint: cs, axisAt: us, altitudeAt: gs, setAltitudeAt: bs, equals: fs, transform: ls, rotate: ps, normal: ms, UP: Ps });
function e$d(r2 = g$4) {
  return [r2[0], r2[1], r2[2], r2[3]];
}
function a$c(r2, n2, t2, o2) {
  return f$a(r2, n2, t2, o2, r$k.get());
}
function u$a(r2, n2) {
  return f$a(r2[0], r2[1], r2[2], n2, r$k.get());
}
function c$a(r2, n2 = e$d()) {
  return f$a(r2[0], r2[1], r2[2], r2[3], n2);
}
function f$a(r2, n2, t2, s2, o2 = e$d()) {
  return o2[0] = r2, o2[1] = n2, o2[2] = t2, o2[3] = s2, o2;
}
function i$c(n2, t2, s2 = e$d()) {
  return r$q(s2, n2), s2[3] = t2, s2;
}
function p$5(r2, s2, a2 = e$d()) {
  return _$9(a2, r2, s2), j$9(a2, a2), a2[3] = u$b(r2, s2), a2;
}
function m$4(r2) {
  return r2;
}
const g$4 = [0, 0, 1, 0];
Object.freeze({ __proto__: null, create: e$d, wrap: a$c, wrapAxisAngle: u$a, copy: c$a, fromValues: f$a, fromAxisAndAngle: i$c, fromPoints: p$5, axis: m$4, UP: g$4 });
function u$9(r2) {
  return r2 ? { ray: l$b(r2.ray), c0: r2.c0, c1: r2.c1 } : { ray: l$b(), c0: 0, c1: Number.MAX_VALUE };
}
function f$9(r2, t2, c2) {
  const n2 = _$3.get();
  return n2.ray = r2, n2.c0 = t2, n2.c1 = c2, n2;
}
function m$3(r2, t2 = u$9()) {
  return y$3(r2.ray, r2.c0, r2.c1, t2);
}
function y$3(r2, t2, c2, n2 = u$9()) {
  return R$5(r2, n2.ray), n2.c0 = t2, n2.c1 = c2, n2;
}
function g$3(r2, t2 = u$9()) {
  return R$5(r2, t2.ray), t2.c0 = 0, t2.c1 = Number.MAX_VALUE, t2;
}
function p$4(t2, c2 = u$9()) {
  return b$3(t2, j$9(c$d.get(), t2.vector), c2);
}
function b$3(r2, c2, n2 = u$9()) {
  const e2 = s$b(r2.vector);
  return S$5(r2.origin, c2, n2.ray), n2.c0 = 0, n2.c1 = e2, n2;
}
function j$4(r2, t2) {
  return A$5(r2, r2.c0, t2);
}
function l$9(r2, t2) {
  return A$5(r2, r2.c1, t2);
}
function A$5(r2, t2, e2) {
  return u$g(e2, r2.ray.origin, d$b(e2, r2.ray.direction, t2));
}
const _$3 = new s$9(() => ({ c0: 0, c1: 0, ray: null }));
Object.freeze({ __proto__: null, create: u$9, wrap: f$9, copy: m$3, fromValues: y$3, fromRay: g$3, fromLineSegment: p$4, fromLineSegmentAndDirection: b$3, getStart: j$4, getEnd: l$9, getAt: A$5 });
function P$4(t2) {
  return t2 ? [l$a(t2[0]), l$a(t2[1]), l$a(t2[2]), l$a(t2[3]), l$a(t2[4]), l$a(t2[5])] : [l$a(), l$a(), l$a(), l$a(), l$a(), l$a()];
}
function _$2() {
  return [n$g(), n$g(), n$g(), n$g(), n$g(), n$g(), n$g(), n$g()];
}
function d$7(t2, r2 = P$4()) {
  for (let e2 = 0; e2 < 6; e2++)
    y$4(t2[e2], r2[e2]);
}
function h$5(t2, n2, o2, c2 = L$2) {
  const u2 = e$l(f$d.get(), n2, t2);
  h$b(u2, u2);
  for (let e2 = 0; e2 < 8; ++e2) {
    const t3 = y$9(r$k.get(), C$2[e2], u2);
    o$m(c2[e2], t3[0] / t3[3], t3[1] / t3[3], t3[2] / t3[3]);
  }
  R$2(o2, c2);
}
function R$2(t2, r2) {
  M$3(r2[4], r2[0], r2[3], t2[0]), M$3(r2[1], r2[5], r2[6], t2[1]), M$3(r2[4], r2[5], r2[1], t2[2]), M$3(r2[3], r2[2], r2[6], t2[3]), M$3(r2[0], r2[1], r2[2], t2[4]), M$3(r2[5], r2[4], r2[7], t2[5]);
}
function S$3(t2, r2) {
  for (let e2 = 0; e2 < 6; e2++)
    if (q$3(t2[e2], r2))
      return false;
  return true;
}
function w$3(t2, r2) {
  return q$2(t2, g$3(r2, I$3.get()));
}
function x$5(t2, r2) {
  for (let e2 = 0; e2 < 6; e2++) {
    const s2 = t2[e2];
    if (!R$4(s2, r2))
      return false;
  }
  return true;
}
function A$4(t2, r2, e2) {
  return q$2(t2, b$3(r2, e2, I$3.get()));
}
function B$2(t2, r2) {
  for (let e2 = 0; e2 < 6; e2++) {
    if (J$3(t2[e2], r2) > 0)
      return false;
  }
  return true;
}
function O$1(t2, r2) {
  for (let e2 = 0; e2 < 6; e2++)
    if (C$3(t2[e2], r2))
      return false;
  return true;
}
function q$2(t2, r2) {
  for (let e2 = 0; e2 < 6; e2++)
    if (!D$5(t2[e2], r2))
      return false;
  return true;
}
const z$2 = { bottom: [5, 1, 0, 4], near: [0, 1, 2, 3], far: [5, 4, 7, 6], right: [1, 5, 6, 2], left: [4, 0, 3, 7], top: [7, 3, 2, 6] }, C$2 = [r$m(-1, -1, -1, 1), r$m(1, -1, -1, 1), r$m(1, 1, -1, 1), r$m(-1, 1, -1, 1), r$m(-1, -1, 1, 1), r$m(1, -1, 1, 1), r$m(1, 1, 1, 1), r$m(-1, 1, 1, 1)], I$3 = new s$9(u$9), L$2 = _$2();
Object.freeze({ __proto__: null, create: P$4, createPoints: _$2, copy: d$7, fromMatrix: h$5, computePlanes: R$2, intersectsSphere: S$3, intersectsRay: w$3, intersectClipRay: x$5, intersectsLineSegment: A$4, intersectsPoint: B$2, intersectsAABB: O$1, planePointIndices: z$2 });
class o$j {
  constructor() {
    this._disposed = false;
  }
  get disposed() {
    return this._disposed;
  }
  get shaderTransformation() {
    return this._shaderTransformation;
  }
  acquire(t2, r2, s2, o2, e2, a2) {
    this.id = e$j(), this.geometry = t2, this.material = r2, this.transformation = s2, this.instanceParameters = o2, this.origin = e2, this._shaderTransformation = a2, this._disposed = false;
  }
  release() {
    this._disposed = false;
  }
  dispose() {
    this._disposed = true;
  }
  getStaticTransformation() {
    return this.transformation;
  }
  getShaderTransformation() {
    return r$s(this._shaderTransformation) ? this._shaderTransformation(this.transformation) : this.transformation;
  }
  computeAttachmentOrigin(t2) {
    return !!(this.material.computeAttachmentOrigin ? this.material.computeAttachmentOrigin(this.geometry, t2) : this.geometry.computeAttachmentOrigin(t2)) && (I$7(t2, t2, this.getStaticTransformation()), true);
  }
}
o$j.pool = new e$m(o$j);
function o$i(n2, o2, t2) {
  for (let r2 = 0; r2 < t2; ++r2)
    o2[2 * r2] = n2[r2], o2[2 * r2 + 1] = n2[r2] - o2[2 * r2];
}
function r$j(n2, t2, r2, c2) {
  for (let l2 = 0; l2 < c2; ++l2)
    f$8[0] = n2[l2], o$i(f$8, e$c, 1), t2[l2] = e$c[0], r2[l2] = e$c[1];
}
const f$8 = new Float64Array(1), e$c = new Float32Array(2);
function f$7(e2) {
  return !!r$s(e2) && !e2.visible;
}
class D$3 {
  constructor(t2 = 0) {
    this.offset = t2, this.sphere = q$4(), this.tmpVertex = n$g();
  }
  applyToVertex(t2, s2, r2) {
    const e2 = this.objectTransform.transform;
    let i2 = e2[0] * t2 + e2[4] * s2 + e2[8] * r2 + e2[12], a2 = e2[1] * t2 + e2[5] * s2 + e2[9] * r2 + e2[13], n2 = e2[2] * t2 + e2[6] * s2 + e2[10] * r2 + e2[14];
    const h2 = this.offset / Math.sqrt(i2 * i2 + a2 * a2 + n2 * n2);
    i2 += i2 * h2, a2 += a2 * h2, n2 += n2 * h2;
    const o2 = this.objectTransform.inverse;
    return this.tmpVertex[0] = o2[0] * i2 + o2[4] * a2 + o2[8] * n2 + o2[12], this.tmpVertex[1] = o2[1] * i2 + o2[5] * a2 + o2[9] * n2 + o2[13], this.tmpVertex[2] = o2[2] * i2 + o2[6] * a2 + o2[10] * n2 + o2[14], this.tmpVertex;
  }
  applyToMinMax(t2, s2) {
    const r2 = this.offset / Math.sqrt(t2[0] * t2[0] + t2[1] * t2[1] + t2[2] * t2[2]);
    t2[0] += t2[0] * r2, t2[1] += t2[1] * r2, t2[2] += t2[2] * r2;
    const e2 = this.offset / Math.sqrt(s2[0] * s2[0] + s2[1] * s2[1] + s2[2] * s2[2]);
    s2[0] += s2[0] * e2, s2[1] += s2[1] * e2, s2[2] += s2[2] * e2;
  }
  applyToAabb(t2) {
    const s2 = this.offset / Math.sqrt(t2[0] * t2[0] + t2[1] * t2[1] + t2[2] * t2[2]);
    t2[0] += t2[0] * s2, t2[1] += t2[1] * s2, t2[2] += t2[2] * s2;
    const r2 = this.offset / Math.sqrt(t2[3] * t2[3] + t2[4] * t2[4] + t2[5] * t2[5]);
    return t2[3] += t2[3] * r2, t2[4] += t2[4] * r2, t2[5] += t2[5] * r2, t2;
  }
  applyToBoundingSphere(t2) {
    const s2 = Math.sqrt(t2[0] * t2[0] + t2[1] * t2[1] + t2[2] * t2[2]), r2 = this.offset / s2;
    return this.sphere[0] = t2[0] + t2[0] * r2, this.sphere[1] = t2[1] + t2[1] * r2, this.sphere[2] = t2[2] + t2[2] * r2, this.sphere[3] = t2[3] + t2[3] * this.offset / s2, this.sphere;
  }
}
const C$1 = new D$3();
function E$5(t2) {
  return r$s(t2) ? (C$1.offset = t2, C$1) : null;
}
const S$2 = { DIFFUSE: 0, NORMAL: 1, EMISSION: 2, OCCLUSION: 3, METALLIC_ROUGHNESS: 4, SSAO: 6, SHADOW_MAP: 7 };
const s$8 = (s2) => {
  class e2 extends s2 {
    constructor() {
      super(...arguments), this._isDisposed = false;
    }
    dispose() {
      for (const e3 of (s3 = this._managedDisposables) != null ? s3 : []) {
        var s3;
        const i2 = this[e3];
        this[e3] = null, i2 && typeof i2.dispose == "function" && i2.dispose();
      }
      this._isDisposed = true;
    }
    get isDisposed() {
      return this._isDisposed;
    }
  }
  return e2;
};
class e$b extends s$8(class {
}) {
}
class t$m extends e$b {
  constructor(e2) {
    super(), this.material = e2.material, this.techniqueRep = e2.techniqueRep, this.output = e2.output;
  }
  getTechnique() {
    return this.technique;
  }
  getPipelineState(e2, t2) {
    return this.getTechnique().pipeline;
  }
  ensureResources(e2) {
    return 2;
  }
  ensureParameters(e2) {
  }
}
class s$7 extends t$m {
  constructor(e2) {
    super(e2), this._textureIDs = new Set(), this._textureRepository = e2.textureRep, this._textureId = e2.textureId, this._initTransparent = !!e2.initTextureTransparent, this._texture = this._acquireIfNotUndefined(this._textureId), this._textureNormal = this._acquireIfNotUndefined(e2.normalTextureId), this._textureEmissive = this._acquireIfNotUndefined(e2.emissiveTextureId), this._textureOcclusion = this._acquireIfNotUndefined(e2.occlusionTextureId), this._textureMetallicRoughness = this._acquireIfNotUndefined(e2.metallicRoughnessTextureId);
  }
  dispose() {
    this._textureIDs.forEach((e2) => this._textureRepository.release(e2)), this._textureIDs.clear();
  }
  updateTexture(e2) {
    e2 !== this._textureId && (this._releaseIfNotUndefined(this._textureId), this._textureId = e2, this._texture = this._acquireIfNotUndefined(this._textureId));
  }
  bindTexture(t2, i2) {
    r$s(this._texture) && (i2.setUniform1i("tex", S$2.DIFFUSE), t2.bindTexture(this._texture.glTexture, S$2.DIFFUSE)), r$s(this._textureNormal) && (i2.setUniform1i("normalTexture", S$2.NORMAL), t2.bindTexture(this._textureNormal.glTexture, S$2.NORMAL)), r$s(this._textureEmissive) && (i2.setUniform1i("texEmission", S$2.EMISSION), t2.bindTexture(this._textureEmissive.glTexture, S$2.EMISSION)), r$s(this._textureOcclusion) && (i2.setUniform1i("texOcclusion", S$2.OCCLUSION), t2.bindTexture(this._textureOcclusion.glTexture, S$2.OCCLUSION)), r$s(this._textureMetallicRoughness) && (i2.setUniform1i("texMetallicRoughness", S$2.METALLIC_ROUGHNESS), t2.bindTexture(this._textureMetallicRoughness.glTexture, S$2.METALLIC_ROUGHNESS));
  }
  bindTextureScale(t2, r2) {
    const i2 = r$s(this._texture) && this._texture.glTexture;
    i2 && i2.descriptor.textureCoordinateScaleFactor ? r2.setUniform2fv("textureCoordinateScaleFactor", i2.descriptor.textureCoordinateScaleFactor) : r2.setUniform2f("textureCoordinateScaleFactor", 1, 1);
  }
  _acquireIfNotUndefined(e2) {
    if (!t$t(e2))
      return this._textureIDs.add(e2), this._textureRepository.acquire(e2, this._initTransparent);
  }
  _releaseIfNotUndefined(e2) {
    t$t(e2) || (this._textureIDs.delete(e2), this._textureRepository.release(e2));
  }
}
function n$b(e2) {
  return Math.abs(e2 * e2 * e2);
}
function l$8(e2, t2, a2) {
  const i2 = a2.parameters, r2 = a2.paddingPixelsOverride;
  return x$4.scale = Math.min(i2.divisor / (t2 - i2.offset), 1), x$4.factor = n$b(e2), x$4.minPixelSize = i2.minPixelSize, x$4.paddingPixels = r2, x$4;
}
function s$6(e2, t2) {
  return e2 === 0 ? t2.minPixelSize : t2.minPixelSize * (1 + 2 * t2.paddingPixels / e2);
}
function c$9(t2, a2) {
  return Math.max(M$6(t2 * a2.scale, t2, a2.factor), s$6(t2, a2));
}
function m$2(e2, t2, a2, i2) {
  return c$9(e2, l$8(t2, a2, i2));
}
const x$4 = { scale: 0, factor: 0, minPixelSize: 0, paddingPixels: 0 };
const h$4 = a$l();
function d$6(t2, n2, e2, i2, o2, r2, s2) {
  const c2 = f$7(n2), f2 = e2.tolerance;
  if (!c2)
    if (t2.boundingInfo)
      i$f(t2.primitiveType === 0), x$3(t2.boundingInfo, i2, o2, f2, r2, s2);
    else {
      const n3 = t2.indices.get("position"), e3 = t2.vertexAttributes.get("position");
      b$2(i2, o2, 0, n3.length / 3, n3, e3, void 0, r2, s2);
    }
}
const g$2 = n$g();
function x$3(e2, i2, o2, r2, s2, c2) {
  if (t$t(e2))
    return;
  const f2 = A$3(i2, o2, g$2);
  if (q$7(h$4, e2.getBBMin()), w$a(h$4, e2.getBBMax()), r$s(s2) && s2.applyToAabb(h$4), L$1(h$4, i2, f2, r2)) {
    const { primitiveIndices: t2, indices: n2, position: f3 } = e2, a2 = t2 ? t2.length : n2.length / 3;
    if (a2 > S$1) {
      const t3 = e2.getChildren();
      if (t3 !== void 0) {
        for (let n3 = 0; n3 < 8; ++n3)
          t3[n3] !== void 0 && x$3(t3[n3], i2, o2, r2, s2, c2);
        return;
      }
    }
    b$2(i2, o2, 0, a2, n2, f3, t2, s2, c2);
  }
}
const M$2 = n$g();
function b$2(t2, e2, i2, o2, r2, s2, c2, f2, a2) {
  if (c2)
    return v$2(t2, e2, i2, o2, r2, s2, c2, f2, a2);
  const l2 = s2.data, u2 = s2.stride || s2.size, m2 = t2[0], p2 = t2[1], h2 = t2[2], d2 = e2[0] - m2, g2 = e2[1] - p2, x2 = e2[2] - h2;
  for (let b2 = i2, v2 = 3 * i2; b2 < o2; ++b2) {
    let t3 = u2 * r2[v2++], e3 = l2[t3++], i3 = l2[t3++], o3 = l2[t3];
    t3 = u2 * r2[v2++];
    let s3 = l2[t3++], c3 = l2[t3++], y2 = l2[t3];
    t3 = u2 * r2[v2++];
    let T2 = l2[t3++], A2 = l2[t3++], L2 = l2[t3];
    r$s(f2) && ([e3, i3, o3] = f2.applyToVertex(e3, i3, o3, b2), [s3, c3, y2] = f2.applyToVertex(s3, c3, y2, b2), [T2, A2, L2] = f2.applyToVertex(T2, A2, L2, b2));
    const V2 = s3 - e3, B2 = c3 - i3, z2 = y2 - o3, E2 = T2 - e3, I2 = A2 - i3, N2 = L2 - o3, P2 = g2 * N2 - I2 * x2, U2 = x2 * E2 - N2 * d2, S2 = d2 * I2 - E2 * g2, W2 = V2 * P2 + B2 * U2 + z2 * S2;
    if (Math.abs(W2) <= Number.EPSILON)
      continue;
    const O2 = m2 - e3, k2 = p2 - i3, R2 = h2 - o3, C2 = O2 * P2 + k2 * U2 + R2 * S2;
    if (W2 > 0) {
      if (C2 < 0 || C2 > W2)
        continue;
    } else if (C2 > 0 || C2 < W2)
      continue;
    const H2 = k2 * z2 - B2 * R2, X2 = R2 * V2 - z2 * O2, Y2 = O2 * B2 - V2 * k2, _2 = d2 * H2 + g2 * X2 + x2 * Y2;
    if (W2 > 0) {
      if (_2 < 0 || C2 + _2 > W2)
        continue;
    } else if (_2 > 0 || C2 + _2 < W2)
      continue;
    const q2 = (E2 * H2 + I2 * X2 + N2 * Y2) / W2;
    if (q2 >= 0) {
      a2(q2, j$3(V2, B2, z2, E2, I2, N2, M$2), b2);
    }
  }
}
function v$2(t2, e2, i2, o2, r2, s2, c2, f2, a2) {
  const l2 = s2.data, u2 = s2.stride || s2.size, m2 = t2[0], p2 = t2[1], h2 = t2[2], d2 = e2[0] - m2, g2 = e2[1] - p2, x2 = e2[2] - h2;
  for (let b2 = i2; b2 < o2; ++b2) {
    const t3 = c2[b2];
    let e3 = 3 * t3, i3 = u2 * r2[e3++], o3 = l2[i3++], s3 = l2[i3++], v2 = l2[i3];
    i3 = u2 * r2[e3++];
    let y2 = l2[i3++], T2 = l2[i3++], A2 = l2[i3];
    i3 = u2 * r2[e3];
    let L2 = l2[i3++], V2 = l2[i3++], B2 = l2[i3];
    r$s(f2) && ([o3, s3, v2] = f2.applyToVertex(o3, s3, v2, b2), [y2, T2, A2] = f2.applyToVertex(y2, T2, A2, b2), [L2, V2, B2] = f2.applyToVertex(L2, V2, B2, b2));
    const z2 = y2 - o3, E2 = T2 - s3, I2 = A2 - v2, N2 = L2 - o3, P2 = V2 - s3, U2 = B2 - v2, S2 = g2 * U2 - P2 * x2, W2 = x2 * N2 - U2 * d2, O2 = d2 * P2 - N2 * g2, k2 = z2 * S2 + E2 * W2 + I2 * O2;
    if (Math.abs(k2) <= Number.EPSILON)
      continue;
    const R2 = m2 - o3, C2 = p2 - s3, H2 = h2 - v2, X2 = R2 * S2 + C2 * W2 + H2 * O2;
    if (k2 > 0) {
      if (X2 < 0 || X2 > k2)
        continue;
    } else if (X2 > 0 || X2 < k2)
      continue;
    const Y2 = C2 * I2 - E2 * H2, _2 = H2 * z2 - I2 * R2, q2 = R2 * E2 - z2 * C2, w2 = d2 * Y2 + g2 * _2 + x2 * q2;
    if (k2 > 0) {
      if (w2 < 0 || X2 + w2 > k2)
        continue;
    } else if (w2 > 0 || X2 + w2 < k2)
      continue;
    const D2 = (N2 * Y2 + P2 * _2 + U2 * q2) / k2;
    if (D2 >= 0) {
      a2(D2, j$3(z2, E2, I2, N2, P2, U2, M$2), t3);
    }
  }
}
const y$2 = n$g(), T$1 = n$g();
function j$3(t2, n2, e2, i2, o2, f2, a2) {
  return o$m(y$2, t2, n2, e2), o$m(T$1, i2, o2, f2), _$9(a2, y$2, T$1), j$9(a2, a2), a2;
}
function A$3(t2, n2, e2) {
  return o$m(e2, 1 / (n2[0] - t2[0]), 1 / (n2[1] - t2[1]), 1 / (n2[2] - t2[2]));
}
function L$1(t2, n2, e2, i2) {
  return V$1(t2, n2, e2, i2, 1 / 0);
}
function V$1(t2, n2, e2, i2, o2) {
  const r2 = (t2[0] - i2 - n2[0]) * e2[0], s2 = (t2[3] + i2 - n2[0]) * e2[0];
  let c2 = Math.min(r2, s2), f2 = Math.max(r2, s2);
  const a2 = (t2[1] - i2 - n2[1]) * e2[1], l2 = (t2[4] + i2 - n2[1]) * e2[1];
  if (f2 = Math.min(f2, Math.max(a2, l2)), f2 < 0)
    return false;
  if (c2 = Math.max(c2, Math.min(a2, l2)), c2 > f2)
    return false;
  const u2 = (t2[2] - i2 - n2[2]) * e2[2], m2 = (t2[5] + i2 - n2[2]) * e2[2];
  return f2 = Math.min(f2, Math.max(u2, m2)), !(f2 < 0) && (c2 = Math.max(c2, Math.min(u2, m2)), !(c2 > f2) && c2 < o2);
}
function B$1(t2, n2, i2, o2, r2) {
  let s2 = (i2.screenLength || 0) * t2.pixelRatio;
  r2 && (s2 = m$2(s2, o2, n2, r2));
  const c2 = s2 * Math.tan(0.5 * t2.fovY) / (0.5 * t2.fullHeight);
  return i$h(c2 * n2, i2.minWorldLength || 0, i2.maxWorldLength != null ? i2.maxWorldLength : 1 / 0);
}
function z$1(t2, n2, e2) {
  if (!t2)
    return;
  const i2 = t2.parameters, o2 = t2.paddingPixelsOverride;
  n2.setUniform4f(e2, i2.divisor, i2.offset, i2.minPixelSize, o2);
}
function E$4(t2, n2) {
  const e2 = n2 ? E$4(n2) : {};
  for (const i2 in t2) {
    let n3 = t2[i2];
    n3 && n3.forEach && (n3 = P$3(n3)), n3 == null && i2 in e2 || (e2[i2] = n3);
  }
  return e2;
}
function I$2(t2, n2) {
  let e2 = false;
  for (const i2 in n2) {
    const o2 = n2[i2];
    o2 !== void 0 && (e2 = true, Array.isArray(o2) ? t2[i2] = o2.slice() : t2[i2] = o2);
  }
  return e2;
}
function P$3(t2) {
  const n2 = [];
  return t2.forEach((t3) => n2.push(t3)), n2;
}
const U$2 = { multiply: 1, ignore: 2, replace: 3, tint: 4 }, S$1 = 1e3;
const o$h = { position: 0, normal: 1, uv0: 2, color: 3, size: 4, tangent: 4, auxpos1: 5, symbolColor: 5, auxpos2: 6, featureAttribute: 6, instanceFeatureAttribute: 6, instanceColor: 7, model: 8, modelNormal: 12, modelOriginHi: 11, modelOriginLo: 15 };
class a$b extends r$l {
  constructor(e2, t2) {
    super(), this.type = 3, this.supportsEdges = false, this._visible = true, this._renderPriority = 0, this._insertOrder = 0, this._vertexAttributeLocations = o$h, this._params = E$4(e2, t2), this.validateParameterValues(this._params);
  }
  dispose() {
  }
  get params() {
    return this._params;
  }
  update(e2) {
    return false;
  }
  setParameterValues(e2) {
    I$2(this._params, e2) && (this.validateParameterValues(this._params), this.parametersChanged());
  }
  validateParameterValues(e2) {
  }
  get visible() {
    return this._visible;
  }
  set visible(e2) {
    e2 !== this._visible && (this._visible = e2, this.parametersChanged());
  }
  isVisibleInPass(e2) {
    return true;
  }
  get renderOccluded() {
    return this.params.renderOccluded;
  }
  get renderPriority() {
    return this._renderPriority;
  }
  set renderPriority(e2) {
    e2 !== this._renderPriority && (this._renderPriority = e2, this.parametersChanged());
  }
  get insertOrder() {
    return this._insertOrder;
  }
  set insertOrder(e2) {
    e2 !== this._insertOrder && (this._insertOrder = e2, this.parametersChanged());
  }
  get vertexAttributeLocations() {
    return this._vertexAttributeLocations;
  }
  isVisible() {
    return this._visible;
  }
  parametersChanged() {
    r$s(this.materialRepository) && this.materialRepository.materialChanged(this);
  }
}
const d$5 = { renderOccluded: 1 };
function r$i(e2, t2, f2, o2) {
  const s2 = f2.typedBuffer, r2 = f2.typedBufferStride, n2 = e2.length;
  o2 *= r2;
  for (let i2 = 0; i2 < n2; ++i2) {
    const f3 = 2 * e2[i2];
    s2[o2] = t2[f3], s2[o2 + 1] = t2[f3 + 1], o2 += r2;
  }
}
function n$a(e2, t2, f2, o2, s2) {
  const r2 = f2.typedBuffer, n2 = f2.typedBufferStride, i2 = e2.length;
  if (o2 *= n2, s2 == null || s2 === 1)
    for (let l2 = 0; l2 < i2; ++l2) {
      const f3 = 3 * e2[l2];
      r2[o2] = t2[f3], r2[o2 + 1] = t2[f3 + 1], r2[o2 + 2] = t2[f3 + 2], o2 += n2;
    }
  else
    for (let l2 = 0; l2 < i2; ++l2) {
      const f3 = 3 * e2[l2];
      for (let e3 = 0; e3 < s2; ++e3)
        r2[o2] = t2[f3], r2[o2 + 1] = t2[f3 + 1], r2[o2 + 2] = t2[f3 + 2], o2 += n2;
    }
}
function i$b(e2, t2, f2, o2, s2 = 1) {
  const r2 = f2.typedBuffer, n2 = f2.typedBufferStride, i2 = e2.length;
  if (o2 *= n2, s2 === 1)
    for (let l2 = 0; l2 < i2; ++l2) {
      const f3 = 4 * e2[l2];
      r2[o2] = t2[f3], r2[o2 + 1] = t2[f3 + 1], r2[o2 + 2] = t2[f3 + 2], r2[o2 + 3] = t2[f3 + 3], o2 += n2;
    }
  else
    for (let l2 = 0; l2 < i2; ++l2) {
      const f3 = 4 * e2[l2];
      for (let e3 = 0; e3 < s2; ++e3)
        r2[o2] = t2[f3], r2[o2 + 1] = t2[f3 + 1], r2[o2 + 2] = t2[f3 + 2], r2[o2 + 3] = t2[f3 + 3], o2 += n2;
    }
}
function d$4(e2, t2, f2, o2, s2, r2 = 1) {
  if (f2) {
    const n2 = o2.typedBuffer, i2 = o2.typedBufferStride, l2 = e2.length, c2 = f2[0], d2 = f2[1], a2 = f2[2], u2 = f2[4], p2 = f2[5], g2 = f2[6], y2 = f2[8], B2 = f2[9], h2 = f2[10], b2 = f2[12], z2 = f2[13], S2 = f2[14];
    if (s2 *= i2, r2 === 1)
      for (let f3 = 0; f3 < l2; ++f3) {
        const o3 = 3 * e2[f3], r3 = t2[o3], l3 = t2[o3 + 1], m2 = t2[o3 + 2];
        n2[s2] = c2 * r3 + u2 * l3 + y2 * m2 + b2, n2[s2 + 1] = d2 * r3 + p2 * l3 + B2 * m2 + z2, n2[s2 + 2] = a2 * r3 + g2 * l3 + h2 * m2 + S2, s2 += i2;
      }
    else
      for (let f3 = 0; f3 < l2; ++f3) {
        const o3 = 3 * e2[f3], l3 = t2[o3], m2 = t2[o3 + 1], k2 = t2[o3 + 2], F2 = c2 * l3 + u2 * m2 + y2 * k2 + b2, M2 = d2 * l3 + p2 * m2 + B2 * k2 + z2, j2 = a2 * l3 + g2 * m2 + h2 * k2 + S2;
        for (let e3 = 0; e3 < r2; ++e3)
          n2[s2] = F2, n2[s2 + 1] = M2, n2[s2 + 2] = j2, s2 += i2;
      }
  } else
    n$a(e2, t2, o2, s2, r2);
}
function a$a(e2, t2, f2, o2, s2, r2) {
  if (f2) {
    const n2 = f2, i2 = o2.typedBuffer, l2 = o2.typedBufferStride, c2 = e2.length, d2 = n2[0], a2 = n2[1], u2 = n2[2], p2 = n2[4], g2 = n2[5], y2 = n2[6], B2 = n2[8], h2 = n2[9], b2 = n2[10], z2 = Math.abs(1 - d2 * d2 + p2 * p2 + B2 * B2) > 1e-5 || Math.abs(1 - a2 * a2 + g2 * g2 + h2 * h2) > 1e-5 || Math.abs(1 - u2 * u2 + y2 * y2 + b2 * b2) > 1e-5, S2 = 1e-6, m2 = 1 - S2;
    if (s2 *= l2, r2 === 1)
      for (let f3 = 0; f3 < c2; ++f3) {
        const o3 = 3 * e2[f3], r3 = t2[o3], n3 = t2[o3 + 1], c3 = t2[o3 + 2];
        let k2 = d2 * r3 + p2 * n3 + B2 * c3, F2 = a2 * r3 + g2 * n3 + h2 * c3, M2 = u2 * r3 + y2 * n3 + b2 * c3;
        if (z2) {
          const e3 = k2 * k2 + F2 * F2 + M2 * M2;
          if (e3 < m2 && e3 > S2) {
            const t3 = Math.sqrt(e3);
            k2 /= t3, F2 /= t3, M2 /= t3;
          }
        }
        i2[s2 + 0] = k2, i2[s2 + 1] = F2, i2[s2 + 2] = M2, s2 += l2;
      }
    else
      for (let f3 = 0; f3 < c2; ++f3) {
        const o3 = 3 * e2[f3], n3 = t2[o3], c3 = t2[o3 + 1], k2 = t2[o3 + 2];
        let F2 = d2 * n3 + p2 * c3 + B2 * k2, M2 = a2 * n3 + g2 * c3 + h2 * k2, j2 = u2 * n3 + y2 * c3 + b2 * k2;
        if (z2) {
          const e3 = F2 * F2 + M2 * M2 + j2 * j2;
          if (e3 < m2 && e3 > S2) {
            const t3 = Math.sqrt(e3);
            F2 /= t3, M2 /= t3, j2 /= t3;
          }
        }
        for (let e3 = 0; e3 < r2; ++e3)
          i2[s2 + 0] = F2, i2[s2 + 1] = M2, i2[s2 + 2] = j2, s2 += l2;
      }
  } else
    n$a(e2, t2, o2, s2, r2);
}
function u$8(e2, t2, f2, o2, s2, r2 = 1) {
  const n2 = o2.typedBuffer, i2 = o2.typedBufferStride, l2 = e2.length;
  if (s2 *= i2, r2 === 1) {
    if (f2 === 4)
      for (let c2 = 0; c2 < l2; ++c2) {
        const f3 = 4 * e2[c2];
        n2[s2] = t2[f3], n2[s2 + 1] = t2[f3 + 1], n2[s2 + 2] = t2[f3 + 2], n2[s2 + 3] = t2[f3 + 3], s2 += i2;
      }
    else if (f2 === 3)
      for (let c2 = 0; c2 < l2; ++c2) {
        const f3 = 3 * e2[c2];
        n2[s2] = t2[f3], n2[s2 + 1] = t2[f3 + 1], n2[s2 + 2] = t2[f3 + 2], n2[s2 + 3] = 255, s2 += i2;
      }
  } else if (f2 === 4)
    for (let c2 = 0; c2 < l2; ++c2) {
      const f3 = 4 * e2[c2];
      for (let e3 = 0; e3 < r2; ++e3)
        n2[s2] = t2[f3], n2[s2 + 1] = t2[f3 + 1], n2[s2 + 2] = t2[f3 + 2], n2[s2 + 3] = t2[f3 + 3], s2 += i2;
    }
  else if (f2 === 3)
    for (let c2 = 0; c2 < l2; ++c2) {
      const f3 = 3 * e2[c2];
      for (let e3 = 0; e3 < r2; ++e3)
        n2[s2] = t2[f3], n2[s2 + 1] = t2[f3 + 1], n2[s2 + 2] = t2[f3 + 2], n2[s2 + 3] = 255, s2 += i2;
    }
}
function p$3(n2, l2, c2, p2, g2, y2) {
  for (const B2 of l2.fieldNames) {
    const l3 = n2.vertexAttributes.get(B2), h2 = n2.indices.get(B2);
    if (l3 && h2)
      switch (B2) {
        case "position": {
          i$f(l3.size === 3);
          const e2 = g2.getField(B2, a$m);
          e2 && d$4(h2, l3.data, c2, e2, y2);
          break;
        }
        case "normal": {
          i$f(l3.size === 3);
          const e2 = g2.getField(B2, a$m);
          e2 && a$a(h2, l3.data, p2, e2, y2, 1);
          break;
        }
        case "uv0": {
          i$f(l3.size === 2);
          const e2 = g2.getField(B2, u$h);
          e2 && r$i(h2, l3.data, e2, y2);
          break;
        }
        case "color": {
          i$f(l3.size === 3 || l3.size === 4);
          const e2 = g2.getField(B2, x$8);
          e2 && u$8(h2, l3.data, l3.size, e2, y2);
          break;
        }
        case "symbolColor": {
          i$f(l3.size === 3 || l3.size === 4);
          const e2 = g2.getField(B2, x$8);
          e2 && u$8(h2, l3.data, l3.size, e2, y2);
          break;
        }
        case "tangent": {
          i$f(l3.size === 4);
          const t2 = g2.getField(B2, p$b);
          t2 && i$b(h2, l3.data, t2, y2);
          break;
        }
      }
  }
}
function t$l(t2, ...n2) {
  let o2 = "";
  for (let r2 = 0; r2 < n2.length; r2++)
    o2 += t2[r2] + n2[r2];
  return o2 += t2[t2.length - 1], o2;
}
!function(t2) {
  function n2(t3) {
    return Math.round(t3).toString();
  }
  function o2(t3) {
    return t3.toPrecision(8);
  }
  t2.int = n2, t2.float = o2;
}(t$l || (t$l = {}));
const d$3 = 0.1, o$g = 1e-3;
function r$h(d2, r2) {
  const e2 = d2.fragment;
  switch (r2.alphaDiscardMode) {
    case 0:
      e2.code.add(t$l`
        #define discardOrAdjustAlpha(color) { if (color.a < ${t$l.float(o$g)}) { discard; } }
      `);
      break;
    case 1:
      e2.code.add(t$l`
        void discardOrAdjustAlpha(inout vec4 color) {
          color.a = 1.0;
        }
      `);
      break;
    case 2:
      e2.uniforms.add("textureAlphaCutoff", "float"), e2.code.add(t$l`
        #define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }
      `);
      break;
    case 3:
      d2.fragment.uniforms.add("textureAlphaCutoff", "float"), d2.fragment.code.add(t$l`
        #define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }
      `);
  }
}
const u$7 = e$n(770, 1, 771, 771), e$a = t$u(1, 1), o$f = t$u(0, 771);
function c$8(n2) {
  return n2 === 2 ? null : n2 === 1 ? o$f : e$a;
}
const f$6 = 5e5, i$a = { factor: -1, units: -2 };
function s$5(n2) {
  return n2 ? i$a : null;
}
function a$9(n2) {
  return n2 === 3 || n2 === 2 ? 513 : 515;
}
class t$k {
  constructor(t2, o2) {
    this._module = t2, this._loadModule = o2;
  }
  get() {
    return this._module;
  }
  reload() {
    return __async(this, null, function* () {
      return this._module = yield this._loadModule(), this._module;
    });
  }
}
class i$9 {
  constructor(i2, r2) {
    r2 && (this._config = r2.snapshot()), this._program = this.initializeProgram(i2), i2.commonUniformStore && (this._commonUniformStore = i2.commonUniformStore, this._commonUniformStore.subscribeProgram(this._program)), this._pipeline = this.initializePipeline(i2);
  }
  dispose() {
    this._program && (this._commonUniformStore && this._commonUniformStore.unsubscribeProgram(this._program), this._program.dispose(), this._program = null);
  }
  reload(i2) {
    this._program && (this._commonUniformStore && this._commonUniformStore.unsubscribeProgram(this._program), this._program.dispose()), this._program = this.initializeProgram(i2), this._commonUniformStore && this._commonUniformStore.subscribeProgram(this._program);
  }
  get program() {
    return this._program;
  }
  get pipeline() {
    return this._pipeline;
  }
  get key() {
    return this._config.key;
  }
  get configuration() {
    return this._config;
  }
  bindPass(i2, r2, o2) {
  }
  bindMaterial(i2, r2, o2) {
  }
  bindDraw(i2, r2, o2) {
  }
  bindPipelineState(i2) {
    i2.setPipelineState(this.pipeline);
  }
  ensureAttributeLocations(i2) {
    this.program.assertCompatibleVertexAttributeLocations(i2);
  }
  get primitiveType() {
    return 4;
  }
}
class e$9 {
  constructor() {
    this._key = "", this._keyDirty = false, this._parameterBits = this._parameterBits.map(() => 0);
  }
  get key() {
    return this._keyDirty && (this._keyDirty = false, this._key = String.fromCharCode.apply(String, this._parameterBits)), this._key;
  }
  snapshot() {
    const t2 = this._parameterNames, e2 = { key: this.key };
    for (const r2 of t2)
      e2[r2] = this[r2];
    return e2;
  }
}
function r$g(e2 = {}) {
  return (r2, s2) => {
    var a2, i2;
    r2._parameterNames = (a2 = r2._parameterNames) != null ? a2 : [], r2._parameterNames.push(s2);
    const o2 = r2._parameterNames.length - 1, h2 = e2.count || 2, n2 = Math.ceil(h$c(h2)), m2 = (i2 = r2._parameterBits) != null ? i2 : [0];
    let p2 = 0;
    for (; m2[p2] + n2 > 16; )
      p2++, p2 >= m2.length && m2.push(0);
    r2._parameterBits = m2;
    const y2 = m2[p2], _2 = (1 << n2) - 1 << y2;
    m2[p2] += n2, Object.defineProperty(r2, s2, { get() {
      return this[o2];
    }, set(t2) {
      if (this[o2] !== t2 && (this[o2] = t2, this._keyDirty = true, this._parameterBits[p2] = this._parameterBits[p2] & ~_2 | +t2 << y2 & _2, typeof t2 != "number" && typeof t2 != "boolean"))
        throw "Configuration value for " + s2 + " must be boolean or number, got " + typeof t2;
    } });
  };
}
var o$e;
!function(n2) {
  function o2(i2, n3, o3) {
    i2.setUniform3f("camPos", o3[3] - n3[0], o3[7] - n3[1], o3[11] - n3[2]);
  }
  function t2(i2, n3) {
    i2.setUniformMatrix4fv("proj", n3);
  }
  function f2(i2, n3) {
    i2.setUniform2fv("nearFar", n3);
  }
  function a2(n3, o3, t3) {
    c$h(r$f, t3, o3), n3.setUniform3fv("localOrigin", o3), n3.setUniformMatrix4fv("view", r$f);
  }
  function e2(i2, n3) {
    a2(i2, n3.origin, n3.camera.viewMatrix);
  }
  function m2(i2, n3) {
    i2.setUniform4fv("viewport", n3.camera.fullViewport);
  }
  n2.bindCamPosition = o2, n2.bindProjectionMatrix = t2, n2.bindNearFar = f2, n2.bindViewCustomOrigin = a2, n2.bindView = e2, n2.bindViewport = m2;
}(o$e || (o$e = {}));
const r$f = r$t();
function l$7(e2, s2) {
  if (s2.slicePlaneEnabled) {
    e2.extensions.add("GL_OES_standard_derivatives"), s2.sliceEnabledForVertexPrograms && (e2.vertex.uniforms.add("slicePlaneOrigin", "vec3"), e2.vertex.uniforms.add("slicePlaneBasis1", "vec3"), e2.vertex.uniforms.add("slicePlaneBasis2", "vec3")), e2.fragment.uniforms.add("slicePlaneOrigin", "vec3"), e2.fragment.uniforms.add("slicePlaneBasis1", "vec3"), e2.fragment.uniforms.add("slicePlaneBasis2", "vec3");
    const i2 = t$l`
      struct SliceFactors {
        float front;
        float side0;
        float side1;
        float side2;
        float side3;
      };

      SliceFactors calculateSliceFactors(vec3 pos) {
        vec3 rel = pos - slicePlaneOrigin;

        vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
        float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);

        float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
        float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);

        float basis1Dot = dot(slicePlaneBasis1, rel);
        float basis2Dot = dot(slicePlaneBasis2, rel);

        return SliceFactors(
          dot(slicePlaneNormal, pos) + slicePlaneW,
          -basis1Dot - basis1Len2,
          basis1Dot - basis1Len2,
          -basis2Dot - basis2Len2,
          basis2Dot - basis2Len2
        );
      }

      bool sliceByFactors(SliceFactors factors) {
        return factors.front < 0.0
          && factors.side0 < 0.0
          && factors.side1 < 0.0
          && factors.side2 < 0.0
          && factors.side3 < 0.0;
      }

      bool sliceEnabled() {
        // a slicePlaneBasis1 vector of zero length is used to disable slicing in the shader during draped rendering.
        return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
      }

      bool sliceByPlane(vec3 pos) {
        return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
      }

      #define rejectBySlice(_pos_) sliceByPlane(_pos_)
      #define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }
    `, a2 = t$l`
      vec4 applySliceHighlight(vec4 color, vec3 pos) {
        SliceFactors factors = calculateSliceFactors(pos);

        if (sliceByFactors(factors)) {
          return color;
        }

        const float HIGHLIGHT_WIDTH = 1.0;
        const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);

        factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
        factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
        factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
        factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
        factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);

        float highlightFactor = (1.0 - step(0.5, factors.front))
          * (1.0 - step(0.5, factors.side0))
          * (1.0 - step(0.5, factors.side1))
          * (1.0 - step(0.5, factors.side2))
          * (1.0 - step(0.5, factors.side3));

        return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
      }
    `, l2 = s2.sliceHighlightDisabled ? t$l`#define highlightSlice(_color_, _pos_) (_color_)` : t$l`
        ${a2}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `;
    s2.sliceEnabledForVertexPrograms && e2.vertex.code.add(i2), e2.fragment.code.add(i2), e2.fragment.code.add(l2);
  } else {
    const i2 = t$l`
      #define rejectBySlice(_pos_) false
      #define discardBySlice(_pos_) {}
      #define highlightSlice(_color_, _pos_) (_color_)
    `;
    s2.sliceEnabledForVertexPrograms && e2.vertex.code.add(i2), e2.fragment.code.add(i2);
  }
}
!function(i2) {
  function o2(e2, s2, a2) {
    i2.bindUniforms(e2, s2, a2.slicePlane, a2.origin);
  }
  function l2(i3, o3, l3, r2) {
    o3.slicePlaneEnabled && (r$s(l3) ? (r2 ? (c$g(c$7, l3.origin, r2), i3.setUniform3fv("slicePlaneOrigin", c$7)) : i3.setUniform3fv("slicePlaneOrigin", l3.origin), i3.setUniform3fv("slicePlaneBasis1", l3.basis1), i3.setUniform3fv("slicePlaneBasis2", l3.basis2)) : (i3.setUniform3fv("slicePlaneBasis1", f$i), i3.setUniform3fv("slicePlaneBasis2", f$i), i3.setUniform3fv("slicePlaneOrigin", f$i)));
  }
  i2.bindUniformsWithOrigin = o2, i2.bindUniforms = l2;
}(l$7 || (l$7 = {}));
const c$7 = n$g();
const t$j = r$m(1, 1, 0, 1), o$d = r$m(1, 0, 1, 1);
function r$e(e2) {
  e2.fragment.uniforms.add("depthTex", "sampler2D"), e2.fragment.uniforms.add("highlightViewportPixelSz", "vec4"), e2.fragment.constants.add("occludedHighlightFlag", "vec4", t$j).add("unoccludedHighlightFlag", "vec4", o$d), e2.fragment.code.add(t$l`
    void outputHighlight() {
      vec4 fragCoord = gl_FragCoord;

      float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
      if (fragCoord.z > sceneDepth + 5e-7) {
        gl_FragColor = occludedHighlightFlag;
      }
      else {
        gl_FragColor = unoccludedHighlightFlag;
      }
    }
  `);
}
!function(e2) {
  function i2(e3, i3, t2) {
    e3.bindTexture(t2.highlightDepthTexture, 5), i3.setUniform1i("depthTex", 5), i3.setUniform4f("highlightViewportPixelSz", 0, 0, t2.inverseViewport[0], t2.inverseViewport[1]);
  }
  e2.bindOutputHighlight = i2;
}(r$e || (r$e = {}));
function e$8(e2, o2) {
  o2.vvInstancingEnabled && (o2.vvSize || o2.vvColor) && e2.attributes.add("instanceFeatureAttribute", "vec4"), o2.vvSize ? (e2.vertex.uniforms.add("vvSizeMinSize", "vec3"), e2.vertex.uniforms.add("vvSizeMaxSize", "vec3"), e2.vertex.uniforms.add("vvSizeOffset", "vec3"), e2.vertex.uniforms.add("vvSizeFactor", "vec3"), e2.vertex.uniforms.add("vvSymbolRotationMatrix", "mat3"), e2.vertex.uniforms.add("vvSymbolAnchor", "vec3"), e2.vertex.code.add(t$l`
      vec3 vvScale(vec4 _featureAttribute) {
        return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
      }

      vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
        return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
      }
    `), e2.vertex.code.add(t$l`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${o2.vvInstancingEnabled ? t$l`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }` : ""}
    `)) : e2.vertex.code.add(t$l`
      vec4 localPosition() { return vec4(position, 1.0); }

      vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }
    `), o2.vvColor ? (e2.vertex.constants.add("vvColorNumber", "int", 8), e2.vertex.code.add(t$l`
      uniform float vvColorValues[vvColorNumber];
      uniform vec4 vvColorColors[vvColorNumber];

      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${o2.vvInstancingEnabled ? t$l`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }` : ""}
    `)) : e2.vertex.code.add(t$l`
      vec4 vvColor() { return vec4(1.0); }
    `);
}
!function(v2) {
  function e2(v3, e3) {
    e3.vvSizeEnabled && (v3.setUniform3fv("vvSizeMinSize", e3.vvSizeMinSize), v3.setUniform3fv("vvSizeMaxSize", e3.vvSizeMaxSize), v3.setUniform3fv("vvSizeOffset", e3.vvSizeOffset), v3.setUniform3fv("vvSizeFactor", e3.vvSizeFactor)), e3.vvColorEnabled && (v3.setUniform1fv("vvColorValues", e3.vvColorValues), v3.setUniform4fv("vvColorColors", e3.vvColorColors));
  }
  function o2(v3, o3) {
    e2(v3, o3), o3.vvOpacityEnabled && (v3.setUniform1fv("vvOpacityValues", o3.vvOpacityValues), v3.setUniform1fv("vvOpacityOpacities", o3.vvOpacityOpacities));
  }
  function r2(v3, o3) {
    e2(v3, o3), o3.vvSizeEnabled && (v3.setUniform3fv("vvSymbolAnchor", o3.vvSymbolAnchor), v3.setUniformMatrix3fv("vvSymbolRotationMatrix", o3.vvSymbolRotationMatrix));
  }
  v2.bindUniforms = e2, v2.bindUniformsWithOpacity = o2, v2.bindUniformsForSymbols = r2;
}(e$8 || (e$8 = {}));
function a$8(r2) {
  r2.vertex.code.add(t$l`
    float screenSizePerspectiveMinSize(float size, vec4 factor) {
      float nonZeroSize = 1.0 - step(size, 0.0);

      return (
        factor.z * (
          1.0 +
          // Multiply by nzs ensures if size is 0, then we ignore proportionally scaled padding
          nonZeroSize *
          2.0 * factor.w / (
            size + (1.0 - nonZeroSize) // Adding 1 - nzs ensures we divide either by size, or by 1
          )
        )
      );
    }
  `), r2.vertex.code.add(t$l`
    float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
      return absCosAngle * absCosAngle * absCosAngle;
    }
  `), r2.vertex.code.add(t$l`
    vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
      return vec4(
        min(params.x / (distanceToCamera - params.y), 1.0),
        screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
        params.z,
        params.w
      );
    }
  `), r2.vertex.code.add(t$l`
    float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
      return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
    }
  `), r2.vertex.code.add(t$l`
    float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
      return applyScreenSizePerspectiveScaleFactorFloat(
        size,
        screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
      );
    }
  `), r2.vertex.code.add(t$l`
    vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
      return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / size.y, 1.0), size, factor.y);
    }
  `), r2.vertex.code.add(t$l`
    vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
      return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
    }
  `);
}
!function(e2) {
  function a2(e3, a3) {
    if (a3.screenSizePerspective) {
      z$1(a3.screenSizePerspective, e3, "screenSizePerspective");
      const s2 = a3.screenSizePerspectiveAlignment || a3.screenSizePerspective;
      z$1(s2, e3, "screenSizePerspectiveAlignment");
    }
  }
  e2.bindUniforms = a2;
}(a$8 || (a$8 = {}));
function t$i(t2, l2) {
  const c2 = t2.vertex.code;
  l2.verticalOffsetEnabled ? (t2.vertex.uniforms.add("verticalOffset", "vec4"), l2.screenSizePerspectiveEnabled && (t2.include(a$8), t2.vertex.uniforms.add("screenSizePerspectiveAlignment", "vec4")), c2.add(t$l`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${l2.viewingMode === 1 ? t$l`vec3 worldNormal = normalize(worldPos + localOrigin);` : t$l`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${l2.screenSizePerspectiveEnabled ? t$l`
          float cosAngle = dot(worldNormal, normalize(worldPos - camPos));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);` : t$l`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)) : c2.add(t$l`
    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }
    `);
}
function l$6(e2, r2, t2, l2 = c$6) {
  return l2.screenLength = e2.screenLength, l2.perDistance = Math.tan(0.5 * r2) / (0.5 * t2), l2.minWorldLength = e2.minWorldLength, l2.maxWorldLength = e2.maxWorldLength, l2;
}
!function(e2) {
  function r2(e3, r3, t2) {
    if (!r3.verticalOffset)
      return;
    const c2 = l$6(r3.verticalOffset, t2.camera.fovY, t2.camera.fullViewport[3]), i2 = t2.camera.pixelRatio || 1;
    e3.setUniform4f("verticalOffset", c2.screenLength * i2, c2.perDistance, c2.minWorldLength, c2.maxWorldLength);
  }
  e2.bindUniforms = r2;
}(t$i || (t$i = {}));
const c$6 = { screenLength: 0, perDistance: 0, minWorldLength: 0, maxWorldLength: 0 };
function r$d(r2, t2) {
  r2.fragment.uniforms.add("terrainDepthTexture", "sampler2D"), r2.fragment.uniforms.add("cameraNearFar", "vec2"), r2.fragment.uniforms.add("inverseViewport", "vec2"), r2.fragment.code.add(t$l`
    //Compare the linearized depths of the fragment and the terrain. If fragment is on the wrong side of the terrain, discard it.
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){

      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, cameraNearFar);
      if(fragmentDepth ${t2.cullAboveGround ? ">" : "<="} terrainDepth){
        discard;
      }
    }
  `);
}
function t$h(e2, r2, t2) {
  t2.multipassTerrainEnabled && t2.terrainLinearDepthTexture && (e2.setUniform1i("terrainDepthTexture", 10), r2.bindTexture(t2.terrainLinearDepthTexture, 10));
}
const f$5 = { mask: 255 }, c$5 = { function: { func: 519, ref: 2, mask: 2 }, operation: { fail: 7680, zFail: 7680, zPass: 0 } }, t$g = { function: { func: 519, ref: 2, mask: 2 }, operation: { fail: 7680, zFail: 7680, zPass: 7681 } };
function e$7(e2) {
  e2.code.add(t$l`
    // This is the maximum float value representable as 32bit fixed point,
    // it is rgba2float(vec4(1)) inlined.
    const float MAX_RGBA_FLOAT =
      255.0 / 256.0 +
      255.0 / 256.0 / 256.0 +
      255.0 / 256.0 / 256.0 / 256.0 +
      255.0 / 256.0 / 256.0 / 256.0 / 256.0;

    // Factors to convert to fixed point, i.e. factors (256^0, 256^1, 256^2, 256^3)
    const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);

    vec4 float2rgba(const float value) {
      // Make sure value is in the domain we can represent
      float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);

      // Decompose value in 32bit fixed point parts represented as
      // uint8 rgba components. Decomposition uses the fractional part after multiplying
      // by a power of 256 (this removes the bits that are represented in the previous
      // component) and then converts the fractional part to 8bits.
      vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);

      // Convert uint8 values (from 0 to 255) to floating point representation for
      // the shader
      const float toU8AsFloat = 1.0 / 255.0;

      return fixedPointU8 * toU8AsFloat;
    }

    // Factors to convert rgba back to float
    const vec4 RGBA_2_FLOAT_FACTORS = vec4(
      255.0 / (256.0),
      255.0 / (256.0 * 256.0),
      255.0 / (256.0 * 256.0 * 256.0),
      255.0 / (256.0 * 256.0 * 256.0 * 256.0)
    );

    float rgba2float(vec4 rgba) {
      // Convert components from 0->1 back to 0->255 and then
      // add the components together with their corresponding
      // fixed point factors, i.e. (256^1, 256^2, 256^3, 256^4)
      return dot(rgba, RGBA_2_FLOAT_FACTORS);
    }
  `);
}
function t$f(t2) {
  t2.fragment.include(e$7), t2.fragment.uniforms.add("uShadowMapTex", "sampler2D"), t2.fragment.uniforms.add("uShadowMapNum", "int"), t2.fragment.uniforms.add("uShadowMapDistance", "vec4"), t2.fragment.uniforms.add("uShadowMapMatrix", "mat4", 4), t2.fragment.uniforms.add("uDepthHalfPixelSz", "float"), t2.fragment.code.add(t$l`
    int chooseCascade(float _linearDepth, out mat4 mat) {
      vec4 distance = uShadowMapDistance;
      float depth = _linearDepth;

      //choose correct cascade
      int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;

      mat = i == 0 ? uShadowMapMatrix[0] : i == 1 ? uShadowMapMatrix[1] : i == 2 ? uShadowMapMatrix[2] : uShadowMapMatrix[3];

      return i;
    }

    vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
      vec4 lv = mat * vec4(_vpos, 1.0);
      lv.xy /= lv.w;
      return 0.5 * lv.xyz + vec3(0.5);
    }

    vec2 cascadeCoordinates(int i, vec3 lvpos) {
      return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
    }

    float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
      return rgba2float(texture2D(_depthTex, uv));
    }

    float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
      return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
    }

    float filterShadow(vec2 uv, vec3 lvpos, float halfPixelSize, sampler2D _depthTex) {
      float texSize = 0.5 / halfPixelSize;

      // filter, offset by half pixels
      vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);

      float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
      float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);

      return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
    }

    float readShadowMap(const in vec3 _vpos, float _linearDepth) {
      mat4 mat;
      int i = chooseCascade(_linearDepth, mat);

      if (i >= uShadowMapNum) { return 0.0; }

      vec3 lvpos = lightSpacePosition(_vpos, mat);

      // vertex completely outside? -> no shadow
      if (lvpos.z >= 1.0) { return 0.0; }
      if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }

      // calc coord in cascade texture
      vec2 uv = cascadeCoordinates(i, lvpos);

      return filterShadow(uv, lvpos, uDepthHalfPixelSz, uShadowMapTex);
    }
  `);
}
!function(e2) {
  function a2(e3, a3, t3) {
    a3.shadowMappingEnabled && (a3.shadowMap.bind(e3, t3), a3.shadowMap.bindView(e3, a3.origin));
  }
  function t2(e3, a3, t3) {
    a3.shadowMappingEnabled && a3.shadowMap.bindView(e3, t3);
  }
  function o2(e3, a3) {
    a3.shadowMappingEnabled && a3.shadowMap.bindView(e3, a3.origin);
  }
  e2.bindUniforms = a2, e2.bindViewCustomOrigin = t2, e2.bindView = o2;
}(t$f || (t$f = {}));
class u$6 {
  constructor(e2) {
    this.context = e2, this.svgAlwaysPremultipliesAlpha = false, this._doublePrecisionRequiresObfuscation = null, n$h(e2).then((e3) => {
      this.svgAlwaysPremultipliesAlpha = !e3;
    });
  }
  get doublePrecisionRequiresObfuscation() {
    if (t$t(this._doublePrecisionRequiresObfuscation)) {
      const e2 = v$1(this.context, false), n2 = v$1(this.context, true);
      this._doublePrecisionRequiresObfuscation = e2 !== 0 && (n2 === 0 || e2 / n2 > 5);
    }
    return this._doublePrecisionRequiresObfuscation;
  }
}
let f$4 = null;
function p$2(n2) {
  return (t$t(f$4) || f$4.context !== n2) && (f$4 = new u$6(n2)), f$4;
}
function v$1(e2, n2) {
  const l2 = new r$u(e2, { colorTarget: 0, depthStencilTarget: 0 }, { target: 3553, wrapMode: 33071, pixelFormat: 6408, dataType: 5121, samplingMode: 9728, width: 1, height: 1 });
  function u2(t2, i2) {
    const r2 = new o$o(e2, `

  precision highp float;

  attribute vec2 a_pos;

  uniform vec3 u_highA;
  uniform vec3 u_lowA;
  uniform vec3 u_highB;
  uniform vec3 u_lowB;

  varying vec4 v_color;

  ${n2 ? "#define DOUBLE_PRECISION_REQUIRES_OBFUSCATION" : ""}

  #ifdef DOUBLE_PRECISION_REQUIRES_OBFUSCATION

  vec3 dpPlusFrc(vec3 a, vec3 b) {
    return mix(a, a + b, vec3(notEqual(b, vec3(0))));
  }

  vec3 dpMinusFrc(vec3 a, vec3 b) {
    return mix(vec3(0), a - b, vec3(notEqual(a, b)));
  }

  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
    vec3 t1 = dpPlusFrc(hiA, hiB);
    vec3 e = dpMinusFrc(t1, hiA);
    vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
    return t1 + t2;
  }

  #else

  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
    vec3 t1 = hiA + hiB;
    vec3 e = t1 - hiA;
    vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
    return t1 + t2;
  }

  #endif

  const float MAX_RGBA_FLOAT =
    255.0 / 256.0 +
    255.0 / 256.0 / 256.0 +
    255.0 / 256.0 / 256.0 / 256.0 +
    255.0 / 256.0 / 256.0 / 256.0 / 256.0;

  const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);

  vec4 float2rgba(const float value) {
    // Make sure value is in the domain we can represent
    float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);

    // Decompose value in 32bit fixed point parts represented as
    // uint8 rgba components. Decomposition uses the fractional part after multiplying
    // by a power of 256 (this removes the bits that are represented in the previous
    // component) and then converts the fractional part to 8bits.
    vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);

    // Convert uint8 values (from 0 to 255) to floating point representation for
    // the shader
    const float toU8AsFloat = 1.0 / 255.0;

    return fixedPointU8 * toU8AsFloat;
  }

  void main() {
    vec3 val = dpAdd(u_highA, u_lowA, -u_highB, -u_lowB);

    v_color = float2rgba(val.z / 25.0);

    gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);
  }
  `, "\n  precision highp float;\n\n  varying vec4 v_color;\n\n  void main() {\n    gl_FragColor = v_color;\n  }\n  ", { a_pos: 0 }), s2 = new Float32Array(6);
    o$i(t2, s2, 3);
    const c2 = new Float32Array(6);
    return o$i(i2, c2, 3), e2.bindProgram(r2), r2.setUniform3f("u_highA", s2[0], s2[2], s2[4]), r2.setUniform3f("u_lowA", s2[1], s2[3], s2[5]), r2.setUniform3f("u_highB", c2[0], c2[2], c2[4]), r2.setUniform3f("u_lowB", c2[1], c2[3], c2[5]), r2;
  }
  const f2 = s$c.createVertex(e2, 35044, new Uint16Array([0, 0, 1, 0, 0, 1, 1, 1])), p2 = new s$d(e2, { a_pos: 0 }, { geometry: [{ name: "a_pos", count: 2, type: 5123, offset: 0, stride: 4, normalized: false }] }, { geometry: f2 }), h2 = t$q(5633261287538229e-9, 2626832878767164e-9, 1.4349880495278358e6), v2 = t$q(563327146742708e-8, 2.6268736381334523e6, 1434963231608387e-9), m2 = u2(h2, v2), d2 = e2.getBoundFramebufferObject(), { x: A2, y: b2, width: _2, height: g2 } = e2.getViewport();
  e2.bindFramebuffer(l2), e2.setViewport(0, 0, 1, 1), e2.bindVAO(p2), e2.drawArrays(5, 0, 4);
  const w2 = new Uint8Array(4);
  l2.readPixels(0, 0, 1, 1, 6408, 5121, w2), m2.dispose(), p2.dispose(false), f2.dispose(), l2.dispose(), e2.setViewport(A2, b2, _2, g2), e2.bindFramebuffer(d2);
  const F2 = (h2[2] - v2[2]) / 25, B2 = F$4(w2);
  return Math.abs(F2 - B2);
}
function o$c({ code: e2 }, i2) {
  i2.doublePrecisionRequiresObfuscation ? e2.add(t$l`
      vec3 dpPlusFrc(vec3 a, vec3 b) {
        return mix(a, a + b, vec3(notEqual(b, vec3(0))));
      }

      vec3 dpMinusFrc(vec3 a, vec3 b) {
        return mix(vec3(0), a - b, vec3(notEqual(a, b)));
      }

      // based on https://www.thasler.com/blog/blog/glsl-part2-emu
      vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
        vec3 t1 = dpPlusFrc(hiA, hiB);
        vec3 e = dpMinusFrc(t1, hiA);
        vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
        return t1 + t2;
      }
    `) : e2.add(t$l`
      vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
        vec3 t1 = hiA + hiB;
        vec3 e = t1 - hiA;
        vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
        return t1 + t2;
      }
    `);
}
function r$c(c2) {
  return !!t$v("force-double-precision-obfuscation") || p$2(c2).doublePrecisionRequiresObfuscation;
}
function n$9(e2, r2) {
  r2.instanced && r2.instancedDoublePrecision && (e2.attributes.add("modelOriginHi", "vec3"), e2.attributes.add("modelOriginLo", "vec3"), e2.attributes.add("model", "mat3"), e2.attributes.add("modelNormal", "mat3")), r2.instancedDoublePrecision && (e2.vertex.include(o$c, r2), e2.vertex.uniforms.add("viewOriginHi", "vec3"), e2.vertex.uniforms.add("viewOriginLo", "vec3"));
  const n2 = [t$l`
    vec3 calculateVPos() {
      ${r2.instancedDoublePrecision ? "return model * localPosition().xyz;" : "return localPosition().xyz;"}
    }
    `, t$l`
    vec3 subtractOrigin(vec3 _pos) {
      ${r2.instancedDoublePrecision ? t$l`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;` : "return vpos;"}
    }
    `, t$l`
    vec3 dpNormal(vec4 _normal) {
      ${r2.instancedDoublePrecision ? "return normalize(modelNormal * _normal.xyz);" : "return normalize(_normal.xyz);"}
    }
    `, t$l`
    vec3 dpNormalView(vec4 _normal) {
      ${r2.instancedDoublePrecision ? "return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);" : "return normalize((viewNormal * _normal).xyz);"}
    }
    `, r2.vertexTangets ? t$l`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${r2.instancedDoublePrecision ? "return vec4(modelNormal * _tangent.xyz, _tangent.w);" : "return _tangent;"}

    }
    ` : t$l``];
  e2.vertex.code.add(n2[0]), e2.vertex.code.add(n2[1]), e2.vertex.code.add(n2[2]), r2.output === 2 && e2.vertex.code.add(n2[3]), e2.vertex.code.add(n2[4]);
}
!function(e2) {
  class i2 {
  }
  function o2(e3, i3) {
    r$j(i3, t$e, a$7, 3), e3.setUniform3fv("viewOriginHi", t$e), e3.setUniform3fv("viewOriginLo", a$7);
  }
  e2.Uniforms = i2, e2.bindCustomOrigin = o2;
}(n$9 || (n$9 = {}));
const t$e = n$g(), a$7 = n$g();
function t$d(t2, d2) {
  d2.attributeTextureCoordinates === 1 && (t2.attributes.add("uv0", "vec2"), t2.varyings.add("vuv0", "vec2"), t2.vertex.code.add(t$l`
      void forwardTextureCoordinates() {
        vuv0 = uv0;
      }
    `)), d2.attributeTextureCoordinates === 2 && (t2.attributes.add("uv0", "vec2"), t2.varyings.add("vuv0", "vec2"), t2.attributes.add("uvRegion", "vec4"), t2.varyings.add("vuvRegion", "vec4"), t2.vertex.code.add(t$l`
      void forwardTextureCoordinates() {
        vuv0 = uv0;
        vuvRegion = uvRegion;
      }
    `)), d2.attributeTextureCoordinates === 0 && t2.vertex.code.add(t$l`
      void forwardTextureCoordinates() {}
    `);
}
function t$c(t2) {
  t2.extensions.add("GL_EXT_shader_texture_lod"), t2.extensions.add("GL_OES_standard_derivatives"), t2.fragment.code.add(t$l`
    #ifndef GL_EXT_shader_texture_lod
      float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
        float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
        return max(0.0, 0.5 * log2(deltaMaxSqr));
      }
    #endif

    vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
      //[umin, vmin, umax, vmax]
      vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
      vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;

      // calculate derivative of continuous texture coordinate
      // to avoid mipmapping artifacts caused by manual wrapping in shader
      // clamp the derivatives to avoid discoloring when zooming out.
      float maxdUV = 0.125; // Emprirically tuned compromise between discoloring and aliasing noise.
      vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
      vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;

      #ifdef GL_EXT_shader_texture_lod
        return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
      #else
        // use bias to compensate for difference in automatic vs desired mipmap level
        vec2 dUVdxAuto = dFdx(uvAtlas);
        vec2 dUVdyAuto = dFdy(uvAtlas);
        float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
        float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);

        return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
      #endif
    }
  `);
}
function u$5(u2, a2) {
  u2.include(t$d, a2), u2.fragment.code.add(t$l`
  struct TextureLookupParameter {
    vec2 uv;
    ${a2.supportsTextureAtlas ? "vec2 size;" : ""}
  } vtc;
  `), a2.attributeTextureCoordinates === 1 && u2.fragment.code.add(t$l`
      vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
        return texture2D(tex, params.uv);
      }
    `), a2.attributeTextureCoordinates === 2 && (u2.include(t$c), u2.fragment.code.add(t$l`
    vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
        return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
      }
    `));
}
t$w(0, 0.6, 0.2);
function r$b(s2, t2) {
  const r2 = s2.fragment, a2 = t2.hasMetalnessAndRoughnessTexture || t2.hasEmissionTexture || t2.hasOcclusionTexture;
  t2.pbrMode === 1 && a2 && s2.include(u$5, t2), t2.pbrMode !== 2 ? (t2.pbrMode === 0 && r2.code.add(t$l`
      float getBakedOcclusion() { return 1.0; }
  `), t2.pbrMode === 1 && (r2.uniforms.add("emissionFactor", "vec3"), r2.uniforms.add("mrrFactors", "vec3"), r2.code.add(t$l`
      vec3 mrr;
      vec3 emission;
      float occlusion;
    `), t2.hasMetalnessAndRoughnessTexture && (r2.uniforms.add("texMetallicRoughness", "sampler2D"), t2.supportsTextureAtlas && r2.uniforms.add("texMetallicRoughnessSize", "vec2"), r2.code.add(t$l`
      void applyMetallnessAndRoughness(TextureLookupParameter params) {
        vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;

        mrr[0] *= metallicRoughness.b;
        mrr[1] *= metallicRoughness.g;
      }`)), t2.hasEmissionTexture && (r2.uniforms.add("texEmission", "sampler2D"), t2.supportsTextureAtlas && r2.uniforms.add("texEmissionSize", "vec2"), r2.code.add(t$l`
      void applyEmission(TextureLookupParameter params) {
        emission *= textureLookup(texEmission, params).rgb;
      }`)), t2.hasOcclusionTexture ? (r2.uniforms.add("texOcclusion", "sampler2D"), t2.supportsTextureAtlas && r2.uniforms.add("texOcclusionSize", "vec2"), r2.code.add(t$l`
      void applyOcclusion(TextureLookupParameter params) {
        occlusion *= textureLookup(texOcclusion, params).r;
      }

      float getBakedOcclusion() {
        return occlusion;
      }
      `)) : r2.code.add(t$l`
      float getBakedOcclusion() { return 1.0; }
      `), r2.code.add(t$l`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${a2 ? "vtc.uv = vuv0;" : ""}
      ${t2.hasMetalnessAndRoughnessTexture ? t2.supportsTextureAtlas ? "vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);" : "applyMetallnessAndRoughness(vtc);" : ""}
      ${t2.hasEmissionTexture ? t2.supportsTextureAtlas ? "vtc.size = texEmissionSize; applyEmission(vtc);" : "applyEmission(vtc);" : ""}
      ${t2.hasOcclusionTexture ? t2.supportsTextureAtlas ? "vtc.size = texOcclusionSize; applyOcclusion(vtc);" : "applyOcclusion(vtc);" : ""}
    }
  `))) : r2.code.add(t$l`
      const vec3 mrr = vec3(0.0, 0.6, 0.2);
      const vec3 emission = vec3(0.0);
      float occlusion = 1.0;

      void applyPBRFactors() {}

      float getBakedOcclusion() { return 1.0; }
    `);
}
!function(e2) {
  function s2(e3, s3, o2 = false) {
    o2 || (e3.setUniform3fv("mrrFactors", s3.mrrFactors), e3.setUniform3fv("emissionFactor", s3.emissiveFactor));
  }
  e2.bindUniforms = s2;
}(r$b || (r$b = {}));
function r$a(r2, o2) {
  o2.linearDepth ? r2.vertex.code.add(t$l`
    vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
      vec4 eye = view * vec4(pos, 1.0);
      depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
      return proj * eye;
    }
    `) : r2.vertex.code.add(t$l`
    vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
      // Make sure the order of operations is the same as in transformPositionWithDepth.
      return proj * (view * vec4(pos, 1.0));
    }
    `);
}
const t$b = n$e.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");
class r$9 {
  constructor() {
    this.includedModules = new Map();
  }
  include(e2, r2) {
    this.includedModules.has(e2) ? this.includedModules.get(e2) !== r2 && t$b.error("Trying to include shader module multiple times with different sets of options.") : (this.includedModules.set(e2, r2), e2(this.builder, r2));
  }
}
class n$8 extends r$9 {
  constructor() {
    super(...arguments), this.vertex = new o$b(), this.fragment = new o$b(), this.attributes = new a$6(), this.varyings = new c$4(), this.extensions = new u$4(), this.constants = new h$3();
  }
  get builder() {
    return this;
  }
  generateSource(e2) {
    const t2 = this.extensions.generateSource(e2), r2 = this.attributes.generateSource(e2), n2 = this.varyings.generateSource(), s2 = e2 === "vertex" ? this.vertex : this.fragment, i2 = s2.uniforms.generateSource(), o2 = s2.code.generateSource(), a2 = e2 === "vertex" ? d$2 : S, c2 = this.constants.generateSource().concat(s2.constants.generateSource());
    return `
${t2.join("\n")}

${a2}

${c2.join("\n")}

${i2.join("\n")}

${r2.join("\n")}

${n2.join("\n")}

${o2.join("\n")}`;
  }
}
class s$4 {
  constructor() {
    this._entries = new Array(), this._set = new Set();
  }
  add(e2, t2, r2) {
    const n2 = `${e2}_${t2}_${r2}`;
    return this._set.has(n2) || (this._entries.push([e2, t2, r2]), this._set.add(n2)), this;
  }
  generateSource() {
    const e2 = (e3) => e3 ? `[${e3}]` : "";
    return this._entries.map((t2) => `uniform ${t2[1]} ${t2[0]}${e2(t2[2])};`);
  }
}
class i$8 {
  constructor() {
    this._entries = new Array();
  }
  add(e2) {
    this._entries.push(e2);
  }
  generateSource() {
    return this._entries;
  }
}
class o$b extends r$9 {
  constructor() {
    super(...arguments), this.uniforms = new s$4(), this.code = new i$8(), this.constants = new h$3();
  }
  get builder() {
    return this;
  }
}
class a$6 {
  constructor() {
    this._entries = new Array();
  }
  add(e2, t2) {
    this._entries.push([e2, t2]);
  }
  generateSource(e2) {
    return e2 === "fragment" ? [] : this._entries.map((e3) => `attribute ${e3[1]} ${e3[0]};`);
  }
}
class c$4 {
  constructor() {
    this._entries = new Array();
  }
  add(e2, t2) {
    this._entries.push([e2, t2]);
  }
  generateSource() {
    return this._entries.map((e2) => `varying ${e2[1]} ${e2[0]};`);
  }
}
class u$4 {
  constructor() {
    this._entries = new Set();
  }
  add(e2) {
    this._entries.add(e2);
  }
  generateSource(e2) {
    const t2 = e2 === "vertex" ? u$4.ALLOWLIST_VERTEX : u$4.ALLOWLIST_FRAGMENT;
    return Array.from(this._entries).filter((e3) => t2.includes(e3)).map((e3) => `#extension ${e3} : enable`);
  }
}
u$4.ALLOWLIST_FRAGMENT = ["GL_EXT_shader_texture_lod", "GL_OES_standard_derivatives"], u$4.ALLOWLIST_VERTEX = [];
class h$3 {
  constructor() {
    this._entries = [];
  }
  add(e2, t2, r2) {
    let n2 = "ERROR_CONSTRUCTOR_STRING";
    switch (t2) {
      case "float":
        n2 = h$3.numberToFloatStr(r2);
        break;
      case "int":
        n2 = h$3.numberToIntStr(r2);
        break;
      case "bool":
        n2 = r2.toString();
        break;
      case "vec2":
        n2 = `vec2(${h$3.numberToFloatStr(r2[0])},                            ${h$3.numberToFloatStr(r2[1])})`;
        break;
      case "vec3":
        n2 = `vec3(${h$3.numberToFloatStr(r2[0])},                            ${h$3.numberToFloatStr(r2[1])},                            ${h$3.numberToFloatStr(r2[2])})`;
        break;
      case "vec4":
        n2 = `vec4(${h$3.numberToFloatStr(r2[0])},                            ${h$3.numberToFloatStr(r2[1])},                            ${h$3.numberToFloatStr(r2[2])},                            ${h$3.numberToFloatStr(r2[3])})`;
        break;
      case "ivec2":
        n2 = `ivec2(${h$3.numberToIntStr(r2[0])},                             ${h$3.numberToIntStr(r2[1])})`;
        break;
      case "ivec3":
        n2 = `ivec3(${h$3.numberToIntStr(r2[0])},                             ${h$3.numberToIntStr(r2[1])},                             ${h$3.numberToIntStr(r2[2])})`;
        break;
      case "ivec4":
        n2 = `ivec4(${h$3.numberToIntStr(r2[0])},                             ${h$3.numberToIntStr(r2[1])},                             ${h$3.numberToIntStr(r2[2])},                             ${h$3.numberToIntStr(r2[3])})`;
        break;
      case "bvec2":
        n2 = `bvec2(${r2[0].toString()},                             ${r2[1].toString()})`;
        break;
      case "bvec3":
        n2 = `bvec3(${r2[0].toString()},                             ${r2[1].toString()},                             ${r2[2].toString()})`;
        break;
      case "bvec4":
        n2 = `bvec4(${r2[0].toString()},                             ${r2[1].toString()},                             ${r2[2].toString()},                             ${r2[3].toString()})`;
        break;
      case "mat2":
      case "mat3":
      case "mat4":
        n2 = `${t2}(${Array.prototype.map.call(r2, (e3) => h$3.numberToFloatStr(e3)).join(", ")})`;
    }
    return this._entries.push(`const ${t2} ${e2} = ${n2};`), this;
  }
  static numberToIntStr(e2) {
    return e2.toFixed(0);
  }
  static numberToFloatStr(e2) {
    return Number.isInteger(e2) ? e2.toFixed(1) : e2.toString();
  }
  generateSource() {
    return Array.from(this._entries);
  }
}
const S = "#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif", d$2 = "precision highp float;\nprecision highp sampler2D;";
function a$5(a2) {
  a2.include(e$7), a2.code.add(t$l`
    float linearDepthFromFloat(float depth, vec2 nearFar) {
      return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
    }

    float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
      return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
    }
  `);
}
function a$4(a2, r2) {
  r2.output === 0 && r2.receiveShadows ? (a2.varyings.add("linearDepth", "float"), a2.vertex.code.add(t$l`
      void forwardLinearDepth() { linearDepth = gl_Position.w; }
    `)) : r2.output === 1 || r2.output === 3 ? (a2.varyings.add("linearDepth", "float"), a2.vertex.uniforms.add("cameraNearFar", "vec2"), a2.vertex.code.add(t$l`
      void forwardLinearDepth() {
        linearDepth = (-position_view().z - cameraNearFar[0]) / (cameraNearFar[1] - cameraNearFar[0]);
      }
    `)) : a2.vertex.code.add(t$l`
      void forwardLinearDepth() {}
    `);
}
function t$a(t2) {
  t2.vertex.code.add(t$l`
    const float PI = 3.141592653589793;
  `), t2.fragment.code.add(t$l`
    const float PI = 3.141592653589793;
    const float LIGHT_NORMALIZATION = 1.0 / PI;
    const float INV_PI = 0.3183098861837907;
    const float HALF_PI = 1.570796326794897;
    `);
}
function t$9(t2) {
  const a2 = t2.fragment.code;
  a2.add(t$l`
    vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
    {
      return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
    }
    `), a2.add(t$l`
    float integratedRadiance(float cosTheta2, float roughness)
    {
      return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
    }
    `), a2.add(t$l`
    vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
    {
      float cosTheta2 = 1.0 - RdotNG * RdotNG;
      float intRadTheta = integratedRadiance(cosTheta2, roughness);

      // Calculate the integrated directional radiance of the ground and the sky
      float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
      float sky = 2.0 - ground;
      return (ground * ambientGround + sky * ambientSky) * 0.5;
    }
    `);
}
function n$7(n2, a2) {
  const r2 = n2.fragment.code;
  n2.include(t$a), a2.pbrMode === 3 || a2.pbrMode === 4 ? (r2.add(t$l`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${a2.useCustomDTRExponentForWater ? "2.2" : "2.0"};
    `), r2.add(t$l`
    vec3 fresnelReflection(float angle, vec3 f0, float f90) {
      return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
    }
    `), r2.add(t$l`
    float normalDistributionWater(float NdotH, float roughness)
    {
      float r2 = roughness * roughness;
      float NdotH2 = NdotH * NdotH;
      float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
      return r2 / denom;
    }
    `), r2.add(t$l`
    float geometricOcclusionKelemen(float LoH)
    {
        return 0.25 / (LoH * LoH);
    }
    `), r2.add(t$l`
    vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
    {
      vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
      float dSun = normalDistributionWater(props.NdotH, roughness);
      float V = geometricOcclusionKelemen(props.LdotH);

      float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
      float strengthSunHaze  = 1.2;
      float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;

      return ((dSun + dSunHaze) * V) * F;
    }

    vec3 tonemapACES(const vec3 x) {
      return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
    }
    `)) : a2.pbrMode !== 1 && a2.pbrMode !== 2 || (n2.include(t$9), r2.add(t$l`
    struct PBRShadingInfo
    {
        float NdotL;                  // cos angle between normal and light direction
        float NdotV;                  // cos angle between normal and view direction
        float NdotH;                  // cos angle between normal and half vector
        float VdotH;                  // cos angle between view direction and half vector
        float LdotH;                  // cos angle between view light direction and half vector
        float NdotNG;                 // cos angle between normal and normal of the ground
        float RdotNG;                 // cos angle between view direction reflected of the normal and normal of the ground
        float NdotAmbDir;             // cos angle between view direction and the fill light in ambient illumination
        float NdotH_Horizon;          // cos angle between normal and half vector defined with horizon illumination
        vec3 skyRadianceToSurface;         // integrated radiance of the sky based on the surface roughness (used for specular reflection)
        vec3 groundRadianceToSurface;      // integrated radiance of the ground based on the surface roughness (used for specular reflection)
        vec3 skyIrradianceToSurface;       // irradiance of the sky (used for diffuse reflection)
        vec3 groundIrradianceToSurface;    // irradiance of the ground (used for diffuse reflection)

        float averageAmbientRadiance;      // average ambient radiance used to deduce black level in gamut mapping
        float ssao;                   // ssao coefficient
        vec3 albedoLinear;            // linear color of the albedo
        vec3 f0;                      // fresnel value at normal incident light
        vec3 f90;                     // fresnel value at 90o of incident light

        vec3 diffuseColor;            // diffuse color of the material used in environment illumination
        float metalness;              // metalness of the material
        float roughness;              // roughness of the material
    };
    `), r2.add(t$l`
    float normalDistribution(float NdotH, float roughness)
    {
        float a = NdotH * roughness;
        float b = roughness / (1.0 - NdotH * NdotH + a * a);
        return b * b * INV_PI;
    }
    `), r2.add(t$l`
    const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
    const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
    const vec2 c2 = vec2(-1.04, 1.04);

    vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
        vec4 r = roughness * c0 + c1;
        float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
        return c2 * a004 + r.zw;
    }
    `), r2.add(t$l`
    vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
      vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
      vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);

      // From diffuse illumination calculate reflected color
      vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;

      // From specular illumination calculate reflected color
      vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
      vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
      vec3 specularComponent = specularColor * indirectSpecular;

      return (diffuseComponent + specularComponent);
    }
    `), r2.add(t$l`
    float gamutMapChanel(float x, vec2 p){
      return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
    }`), r2.add(t$l`
    vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
      vec3 outColor;
      vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
      outColor.x = gamutMapChanel(inColor.x, p) ;
      outColor.y = gamutMapChanel(inColor.y, p) ;
      outColor.z = gamutMapChanel(inColor.z, p) ;
      return outColor;
    }
    `));
}
function e$6(e2) {
  e2.vertex.code.add(t$l`
    vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
      vec3 camToVert = posWorld - camPosWorld;

      bool isBackface = dot(camToVert, normalWorld) > 0.0;
      if (isBackface) {
        posClip.z += 0.0000003 * posClip.w;
      }
      return posClip;
    }
  `);
}
function o$a(o2) {
  const d2 = t$l`
    vec3 decodeNormal(vec2 f) {
      float z = 1.0 - abs(f.x) - abs(f.y);
      return vec3(f + sign(f) * min(z, 0.0), z);
    }
  `;
  o2.fragment.code.add(d2), o2.vertex.code.add(d2);
}
function o$9(o2, d2) {
  d2.normalType === 0 && (o2.attributes.add("normal", "vec3"), o2.vertex.code.add(t$l`
      vec3 normalModel() {
        return normal;
      }
    `)), d2.normalType === 1 && (o2.include(o$a), o2.attributes.add("normalCompressed", "vec2"), o2.vertex.code.add(t$l`
      vec3 normalModel() {
        return decodeNormal(normalCompressed);
      }
    `)), d2.normalType === 3 && (o2.extensions.add("GL_OES_standard_derivatives"), o2.fragment.code.add(t$l`
      vec3 screenDerivativeNormal(vec3 positionView) {
        return normalize(cross(dFdx(positionView), dFdy(positionView)));
      }
    `));
}
function o$8(o2) {
  o2.attributes.add("position", "vec3"), o2.vertex.code.add(t$l`
    vec3 positionModel() { return position; }
  `);
}
function l$5(l2) {
  l2.vertex.code.add(t$l`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${t$l.int(1)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${t$l.int(3)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${t$l.int(4)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${t$l.int(1)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `);
}
function r$8(r2, l2) {
  l2.symbolColor ? (r2.include(l$5), r2.attributes.add("symbolColor", "vec4"), r2.varyings.add("colorMixMode", "mediump float")) : r2.fragment.uniforms.add("colorMixMode", "int"), l2.symbolColor ? r2.vertex.code.add(t$l`
    int symbolColorMixMode;

    vec4 getSymbolColor() {
      return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
    }

    void forwardColorMixMode() {
      colorMixMode = float(symbolColorMixMode) + 0.5;
    }
  `) : r2.vertex.code.add(t$l`
    vec4 getSymbolColor() { return vec4(1.0); }
    void forwardColorMixMode() {}
    `);
}
function r$7(r2, e2) {
  e2.attributeColor ? (r2.attributes.add("color", "vec4"), r2.varyings.add("vColor", "vec4"), r2.vertex.code.add(t$l`
      void forwardVertexColor() { vColor = color; }
    `), r2.vertex.code.add(t$l`
      void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }
    `)) : r2.vertex.code.add(t$l`
      void forwardVertexColor() {}
      void forwardNormalizedVertexColor() {}
    `);
}
function t$8(o2, r2) {
  o2.include(o$8), o2.vertex.include(o$c, r2), o2.varyings.add("vPositionWorldCameraRelative", "vec3"), o2.varyings.add("vPosition_view", "vec3"), o2.vertex.uniforms.add("uTransform_WorldFromModel_RS", "mat3"), o2.vertex.uniforms.add("uTransform_WorldFromModel_TH", "vec3"), o2.vertex.uniforms.add("uTransform_WorldFromModel_TL", "vec3"), o2.vertex.uniforms.add("uTransform_WorldFromView_TH", "vec3"), o2.vertex.uniforms.add("uTransform_WorldFromView_TL", "vec3"), o2.vertex.uniforms.add("uTransform_ViewFromCameraRelative_RS", "mat3"), o2.vertex.uniforms.add("uTransform_ProjFromView", "mat4"), o2.vertex.code.add(t$l`
    // compute position in world space orientation, but relative to the camera position
    vec3 positionWorldCameraRelative() {
      vec3 rotatedModelPosition = uTransform_WorldFromModel_RS * positionModel();

      vec3 transform_CameraRelativeFromModel = dpAdd(
        uTransform_WorldFromModel_TL,
        uTransform_WorldFromModel_TH,
        -uTransform_WorldFromView_TL,
        -uTransform_WorldFromView_TH
      );

      return transform_CameraRelativeFromModel + rotatedModelPosition;
    }

    // position in view space, that is relative to the camera position and orientation
    vec3 position_view() {
      return uTransform_ViewFromCameraRelative_RS * positionWorldCameraRelative();
    }

    // compute gl_Position and forward related varyings to fragment shader
    void forwardPosition() {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      vPosition_view = position_view();
      gl_Position = uTransform_ProjFromView * vec4(vPosition_view, 1.0);
    }

    vec3 positionWorld() {
      return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
    }
  `), o2.fragment.uniforms.add("uTransform_WorldFromView_TL", "vec3"), o2.fragment.code.add(t$l`
    vec3 positionWorld() {
      return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
    }
  `);
}
!function(i2) {
  class a2 {
    constructor() {
      this.worldFromModel_RS = e$o(), this.worldFromModel_TH = n$g(), this.worldFromModel_TL = n$g();
    }
  }
  i2.ModelTransform = a2;
  class m2 {
    constructor() {
      this.worldFromView_TH = n$g(), this.worldFromView_TL = n$g(), this.viewFromCameraRelative_RS = e$o(), this.projFromView = e$i();
    }
  }
  function t2(o2, r2) {
    o2.setUniformMatrix3fv("uTransform_WorldFromModel_RS", r2.worldFromModel_RS), o2.setUniform3fv("uTransform_WorldFromModel_TH", r2.worldFromModel_TH), o2.setUniform3fv("uTransform_WorldFromModel_TL", r2.worldFromModel_TL);
  }
  function n2(o2, r2) {
    o2.setUniform3fv("uTransform_WorldFromView_TH", r2.worldFromView_TH), o2.setUniform3fv("uTransform_WorldFromView_TL", r2.worldFromView_TL), o2.setUniformMatrix4fv("uTransform_ProjFromView", r2.projFromView), o2.setUniformMatrix3fv("uTransform_ViewFromCameraRelative_RS", r2.viewFromCameraRelative_RS);
  }
  i2.ViewProjectionTransform = m2, i2.bindModelTransform = t2, i2.bindViewProjTransform = n2;
}(t$8 || (t$8 = {}));
function l$4(l2, e2) {
  e2.normalType === 0 || e2.normalType === 1 ? (l2.include(o$9, e2), l2.varyings.add("vNormalWorld", "vec3"), l2.varyings.add("vNormalView", "vec3"), l2.vertex.uniforms.add("uTransformNormal_GlobalFromModel", "mat3"), l2.vertex.uniforms.add("uTransformNormal_ViewFromGlobal", "mat3"), l2.vertex.code.add(t$l`
      void forwardNormal() {
        vNormalWorld = uTransformNormal_GlobalFromModel * normalModel();
        vNormalView = uTransformNormal_ViewFromGlobal * vNormalWorld;
      }
    `)) : e2.normalType === 2 ? (l2.include(t$8, e2), l2.varyings.add("vNormalWorld", "vec3"), l2.vertex.code.add(t$l`
    void forwardNormal() {
      vNormalWorld = ${e2.viewingMode === 1 ? t$l`normalize(vPositionWorldCameraRelative);` : t$l`vec3(0.0, 0.0, 1.0);`}
    }
    `)) : l2.vertex.code.add(t$l`
      void forwardNormal() {}
    `);
}
!function(o2) {
  function r2(o3, r3) {
    o3.setUniformMatrix4fv("viewNormal", r3);
  }
  o2.bindUniforms = r2;
}(l$4 || (l$4 = {}));
function o$7(o2, e2) {
  o2.fragment.include(e$7), e2.output === 3 ? (o2.extensions.add("GL_OES_standard_derivatives"), o2.fragment.code.add(t$l`
      float _calculateFragDepth(const in float depth) {
        // calc polygon offset
        const float SLOPE_SCALE = 2.0;
        const float BIAS = 2.0 * .000015259;    // 1 / (2^16 - 1)
        float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
        float result = depth + SLOPE_SCALE * m + BIAS;
        return clamp(result, .0, .999999);
      }

      void outputDepth(float _linearDepth) {
        gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
      }
    `)) : e2.output === 1 && o2.fragment.code.add(t$l`
      void outputDepth(float _linearDepth) {
        gl_FragColor = float2rgba(_linearDepth);
      }
    `);
}
function u$3(u2, c2) {
  const p2 = u2.vertex.code, v2 = u2.fragment.code;
  c2.output !== 1 && c2.output !== 3 || (u2.include(r$a, { linearDepth: true }), u2.include(t$d, c2), u2.include(e$8, c2), u2.include(o$7, c2), u2.include(l$7, c2), u2.vertex.uniforms.add("cameraNearFar", "vec2"), u2.varyings.add("depth", "float"), c2.hasColorTexture && u2.fragment.uniforms.add("tex", "sampler2D"), p2.add(t$l`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPositionWithDepth(proj, view, vpos, cameraNearFar, depth);
        forwardTextureCoordinates();
      }
    `), u2.include(r$h, c2), v2.add(t$l`
      void main(void) {
        discardBySlice(vpos);
        ${c2.hasColorTexture ? t$l`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);` : ""}
        outputDepth(depth);
      }
    `)), c2.output === 2 && (u2.include(r$a, { linearDepth: false }), u2.include(o$9, c2), u2.include(l$4, c2), u2.include(t$d, c2), u2.include(e$8, c2), c2.hasColorTexture && u2.fragment.uniforms.add("tex", "sampler2D"), u2.vertex.uniforms.add("viewNormal", "mat4"), u2.varyings.add("vPositionView", "vec3"), p2.add(t$l`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${c2.normalType === 0 ? t$l`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));` : ""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `), u2.include(l$7, c2), u2.include(r$h, c2), v2.add(t$l`
      void main() {
        discardBySlice(vpos);
        ${c2.hasColorTexture ? t$l`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);` : ""}

        ${c2.normalType === 3 ? t$l`
            vec3 normal = screenDerivativeNormal(vPositionView);` : t$l`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)), c2.output === 4 && (u2.include(r$a, { linearDepth: false }), u2.include(t$d, c2), u2.include(e$8, c2), c2.hasColorTexture && u2.fragment.uniforms.add("tex", "sampler2D"), p2.add(t$l`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `), u2.include(l$7, c2), u2.include(r$h, c2), u2.include(r$e), v2.add(t$l`
      void main() {
        discardBySlice(vpos);
        ${c2.hasColorTexture ? t$l`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);` : ""}
        outputHighlight();
      }
    `));
}
function n$6(n2, a2) {
  const o2 = n2.fragment;
  o2.uniforms.add("normalTexture", "sampler2D"), o2.uniforms.add("normalTextureSize", "vec2"), a2.vertexTangets ? (n2.attributes.add("tangent", "vec4"), n2.varyings.add("vTangent", "vec4"), a2.doubleSidedMode === 2 ? o2.code.add(t$l`
      mat3 computeTangentSpace(vec3 normal) {
        float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
        vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
        vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
        return mat3(tangent, bitangent, normal);
      }
    `) : o2.code.add(t$l`
      mat3 computeTangentSpace(vec3 normal) {
        float tangentHeadedness = vTangent.w;
        vec3 tangent = normalize(vTangent.xyz);
        vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
        return mat3(tangent, bitangent, normal);
      }
    `)) : (n2.extensions.add("GL_OES_standard_derivatives"), o2.code.add(t$l`
    mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {

      vec3 Q1 = dFdx(pos);
      vec3 Q2 = dFdy(pos);

      vec2 stx = dFdx(st);
      vec2 sty = dFdy(st);

      float det = stx.t * sty.s - sty.t * stx.s;

      vec3 T = stx.t * Q2 - sty.t * Q1; // compute tangent
      T = T - normal * dot(normal, T); // orthogonalize tangent
      T *= inversesqrt(max(dot(T,T), 1.e-10)); // "soft" normalize - goes to 0 when T goes to 0
      vec3 B = sign(det) * cross(normal, T); // assume normal is normalized, B has the same lenght as B
      return mat3(T, B, normal); // T and B go to 0 when the tangent space is not well defined by the uv coordinates
    }
  `)), a2.attributeTextureCoordinates !== 0 && (n2.include(u$5, a2), o2.code.add(t$l`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${a2.supportsTextureAtlas ? "vtc.size = normalTextureSize;" : ""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `));
}
function o$6(o2, t2) {
  const r2 = o2.fragment;
  t2.receiveAmbientOcclusion ? (r2.uniforms.add("ssaoTex", "sampler2D"), r2.uniforms.add("viewportPixelSz", "vec4"), r2.code.add(t$l`
      float evaluateAmbientOcclusion() {
        return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
      }

      float evaluateAmbientOcclusionInverse() {
        float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
        return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
      }
    `)) : r2.code.add(t$l`
      float evaluateAmbientOcclusion() { return 0.0; } // no occlusion
      float evaluateAmbientOcclusionInverse() { return 1.0; }
    `);
}
function n$5(n2, t2) {
  const e2 = n2.fragment, a2 = t2.lightingSphericalHarmonicsOrder !== void 0 ? t2.lightingSphericalHarmonicsOrder : 2;
  a2 === 0 ? (e2.uniforms.add("lightingAmbientSH0", "vec3"), e2.code.add(t$l`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
        vec3 ambientLight = 0.282095 * lightingAmbientSH0;
        return ambientLight * (1.0 - ambientOcclusion);
      }
    `)) : a2 === 1 ? (e2.uniforms.add("lightingAmbientSH_R", "vec4"), e2.uniforms.add("lightingAmbientSH_G", "vec4"), e2.uniforms.add("lightingAmbientSH_B", "vec4"), e2.code.add(t$l`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
        vec4 sh0 = vec4(
          0.282095,
          0.488603 * normal.x,
          0.488603 * normal.z,
          0.488603 * normal.y
        );
        vec3 ambientLight = vec3(
          dot(lightingAmbientSH_R, sh0),
          dot(lightingAmbientSH_G, sh0),
          dot(lightingAmbientSH_B, sh0)
        );
        return ambientLight * (1.0 - ambientOcclusion);
      }
    `)) : a2 === 2 && (e2.uniforms.add("lightingAmbientSH0", "vec3"), e2.uniforms.add("lightingAmbientSH_R1", "vec4"), e2.uniforms.add("lightingAmbientSH_G1", "vec4"), e2.uniforms.add("lightingAmbientSH_B1", "vec4"), e2.uniforms.add("lightingAmbientSH_R2", "vec4"), e2.uniforms.add("lightingAmbientSH_G2", "vec4"), e2.uniforms.add("lightingAmbientSH_B2", "vec4"), e2.code.add(t$l`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
        vec3 ambientLight = 0.282095 * lightingAmbientSH0;

        vec4 sh1 = vec4(
          0.488603 * normal.x,
          0.488603 * normal.z,
          0.488603 * normal.y,
          1.092548 * normal.x * normal.y
        );
        vec4 sh2 = vec4(
          1.092548 * normal.y * normal.z,
          0.315392 * (3.0 * normal.z * normal.z - 1.0),
          1.092548 * normal.x * normal.z,
          0.546274 * (normal.x * normal.x - normal.y * normal.y)
        );
        ambientLight += vec3(
          dot(lightingAmbientSH_R1, sh1),
          dot(lightingAmbientSH_G1, sh1),
          dot(lightingAmbientSH_B1, sh1)
        );
        ambientLight += vec3(
          dot(lightingAmbientSH_R2, sh2),
          dot(lightingAmbientSH_G2, sh2),
          dot(lightingAmbientSH_B2, sh2)
        );
        return ambientLight * (1.0 - ambientOcclusion);
      }
    `), t2.pbrMode !== 1 && t2.pbrMode !== 2 || e2.code.add(t$l`
        const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);

        vec3 calculateAmbientRadiance(float ambientOcclusion)
        {
          vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
          return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
        }
      `));
}
function t$7(t2) {
  const n2 = t2.fragment;
  n2.uniforms.add("lightingMainDirection", "vec3"), n2.uniforms.add("lightingMainIntensity", "vec3"), n2.uniforms.add("lightingFixedFactor", "float"), n2.code.add(t$l`
    vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
      float dotVal = clamp(-dot(normal_global, lightingMainDirection), 0.0, 1.0);

      // move lighting towards (1.0, 1.0, 1.0) if requested
      dotVal = mix(dotVal, 1.0, lightingFixedFactor);

      return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
    }
  `);
}
function r$6(r2, c2) {
  const d2 = r2.fragment;
  r2.include(t$7), r2.include(o$6, c2), c2.pbrMode !== 0 && r2.include(n$7, c2), r2.include(n$5, c2), c2.receiveShadows && r2.include(t$f, c2), d2.uniforms.add("lightingGlobalFactor", "float"), d2.uniforms.add("ambientBoostFactor", "float"), r2.include(t$a), d2.code.add(t$l`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${c2.pbrMode === 0 ? "" : "const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `), c2.useOldSceneLightInterface ? d2.code.add(t$l`
    vec3 evaluateSceneLightingExt(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
      // evaluate the main light
      #if defined(TREE_RENDERING)
        // Special case for tree rendering:
        // We shift the Lambert lobe to the back, allowing it to reach part of the hemisphere
        // facing away from the light. The idea is to get an effect where light is transmitted
        // through the tree.
        float minDot = -0.5;
        float dotRange = 1.0 - minDot;
        float dotNormalization = 0.66; // guessed & hand tweaked value, for an exact value we could precompute an integral over the sphere

        float dotVal = dotNormalization * (clamp(-dot(normal, lightingMainDirection), 1.0 - dotRange, 1.0) - minDot) * (1.0 / dotRange);
      #else
        float dotVal = clamp(-dot(normal, lightingMainDirection), 0.0, 1.0);
      #endif

      // move lighting towards (1.0, 1.0, 1.0) if requested
      dotVal = mix(dotVal, 1.0, lightingFixedFactor);

      vec3 mainLight = (1.0 - shadow) * lightingMainIntensity * dotVal;
      vec3 ambientLight = calculateAmbientIrradiance(normal, ssao);

      // inverse gamma correction on the albedo color
      vec3 albedoGammaC = pow(albedo, vec3(GAMMA_SRGB));

      // physically correct BRDF normalizes by PI
      vec3 totalLight = mainLight + ambientLight + additionalLight;
      totalLight = min(totalLight, vec3(PI));
      vec3 outColor = vec3((albedoGammaC / PI) * (totalLight));

      // apply gamma correction to the computed color
      outColor = pow(outColor, vec3(INV_GAMMA_SRGB));

      return outColor;
    }
  `) : (c2.viewingMode === 1 ? d2.code.add(t$l`
      float _oldHeuristicLighting(vec3 vPosWorld) {
        vec3 shadingNormalWorld = normalize(vPosWorld);
        float vndl = -dot(shadingNormalWorld, lightingMainDirection);

        return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
      }
    `) : d2.code.add(t$l`
      float _oldHeuristicLighting(vec3 vPosWorld) {
        float vndl = -dot(vec3(0.0, 0.0, 1.0), lightingMainDirection);
        return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
      }
    `), d2.code.add(t$l`
      vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
        float additionalAmbientScale = _oldHeuristicLighting(vPosWorld);
        return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
      }
    `), c2.pbrMode === 0 || c2.pbrMode === 4 ? d2.code.add(t$l`
      vec3 evaluateSceneLighting(vec3 normalWorld, vec3 baseColor, float mainLightShadow, float ambientOcclusion, vec3 additionalLight)
      {
        vec3 mainLighting = evaluateMainLighting(normalWorld, mainLightShadow);
        vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ambientOcclusion);
        // inverse gamma correction on the base color
        vec3 baseColorLinear = pow(baseColor, vec3(GAMMA_SRGB));

        // physically correct BRDF normalizes by PI
        vec3 totalLight = mainLighting + ambientLighting + additionalLight;
        totalLight = min(totalLight, vec3(PI));
        vec3 outColor = vec3((baseColorLinear / PI) * totalLight);

        // apply gamma correction to the computed color
        outColor = pow(outColor, vec3(INV_GAMMA_SRGB));

        return outColor;
      }
      `) : c2.pbrMode !== 1 && c2.pbrMode !== 2 || (d2.code.add(t$l`
      const float fillLightIntensity = 0.25;
      const float horizonLightDiffusion = 0.4;
      const float additionalAmbientIrradianceFactor = 0.02;

      vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
      {
        // Calculate half vector between view and light direction
        vec3 viewDirection = -viewDir;
        vec3 mainLightDirection = -lightingMainDirection;
        vec3 h = normalize(viewDirection + mainLightDirection);

        PBRShadingInfo inputs;
        inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
        inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
        inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
        inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
        inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
        vec3 reflectedView = normalize(reflect(viewDirection, normal));
        inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);

        inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
        inputs.ssao = ssao;

        inputs.metalness = mrr[0];
        inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);
      `), d2.code.add(t$l`
        inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
        inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0)); // more accurate then using  f90 = 1.0
        inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);
      `), d2.code.add(t$l`
        vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
        ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));

        inputs.NdotAmbDir = abs(dot(normal, ambientDir));

        // Calculate the irradiance components: sun, fill lights and the sky.
        vec3 mainLightIrradianceComponent  = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
        vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
        // calculateAmbientIrradiance for localView and additionalLight for gloabalView
        vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;

        // Assemble the overall irradiance of the sky that illuminates the surface
        inputs.skyIrradianceToSurface    = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
        // Assemble the overall irradiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky irradiance by the groundReflectance
        inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
      `), d2.code.add(t$l`
        vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
        vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
        inputs.NdotH_Horizon = dot(normal, horizonRingH);

        vec3 mainLightRadianceComponent  = normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
        vec3 horizonLightRadianceComponent = normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
        vec3 ambientLightRadianceComponent = calculateAmbientRadiance(ssao) + additionalLight; // calculateAmbientRadiance for localView and additionalLight for gloabalView

        // Assemble the overall radiance of the sky that illuminates the surface
        inputs.skyRadianceToSurface    =  ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
        // Assemble the overall radiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky radince by the groundReflectance
        inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;

        // Calculate average ambient radiance - this is used int the gamut mapping part to deduce the black level that is soft compressed
        inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);
        `), d2.code.add(t$l`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${c2.pbrMode === 2 ? t$l`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));` : t$l`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `)));
}
function r$5(r2, e2) {
  const m2 = r2.fragment;
  m2.code.add(t$l`
    struct ShadingNormalParameters {
      vec3 normalView;
      vec3 viewDirection;
    } shadingParams;
    `), e2.doubleSidedMode === 1 ? m2.code.add(t$l`
      vec3 shadingNormal(ShadingNormalParameters params) {
        return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
      }
    `) : e2.doubleSidedMode === 2 ? m2.code.add(t$l`
      vec3 shadingNormal(ShadingNormalParameters params) {
        return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
      }
    `) : m2.code.add(t$l`
      vec3 shadingNormal(ShadingNormalParameters params) {
        return normalize(params.normalView);
      }
    `);
}
function u$2(u2, e2) {
  t$l`
  /*
  *  ${e2.name}
  *  ${e2.output === 0 ? "RenderOutput: Color" : e2.output === 1 ? "RenderOutput: Depth" : e2.output === 3 ? "RenderOutput: Shadow" : e2.output === 2 ? "RenderOutput: Normal" : e2.output === 4 ? "RenderOutput: Highlight" : ""}
  */
  `;
}
function c$3(c2) {
  c2.code.add(t$l`
    vec4 premultiplyAlpha(vec4 v) {
      return vec4(v.rgb * v.a, v.a);
    }

    // Note: the min in the last line has been added to fix an instability in chrome.
    // See https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/23911
    // With proper floating point handling, the value could never be >1.
    vec3 rgb2hsv(vec3 c) {
      vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
      vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
      vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);

      float d = q.x - min(q.w, q.y);
      float e = 1.0e-10;
      return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
    }

    vec3 hsv2rgb(vec3 c) {
      vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
      vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
      return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
    }

    float rgb2v(vec3 c) {
      return max(c.x, max(c.y, c.z));
    }
  `);
}
function i$7(i2) {
  i2.include(c$3), i2.code.add(t$l`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${t$l.int(1)}) {
        return allMixed;
      }
      else if (mode == ${t$l.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${t$l.int(3)}) {
        return externalColor;
      }
      else {
        // tint (or something invalid)
        float vIn = rgb2v(internalMixed);
        vec3 hsvTint = rgb2hsv(externalColor);
        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
        return hsv2rgb(hsvOut);
      }
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${t$l.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${t$l.int(3)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `);
}
function P$2(P2) {
  const _2 = new n$8(), S2 = _2.vertex.code, $2 = _2.fragment.code;
  return _2.include(u$2, { name: "Default Material Shader", output: P2.output }), _2.vertex.uniforms.add("proj", "mat4").add("view", "mat4").add("camPos", "vec3").add("localOrigin", "vec3"), _2.include(o$8), _2.varyings.add("vpos", "vec3"), _2.include(e$8, P2), _2.include(n$9, P2), _2.include(t$i, P2), P2.output !== 0 && P2.output !== 7 || (_2.include(o$9, P2), _2.include(r$a, { linearDepth: false }), P2.normalType === 0 && P2.offsetBackfaces && _2.include(e$6), _2.include(n$6, P2), _2.include(l$4, P2), P2.instancedColor && _2.attributes.add("instanceColor", "vec4"), _2.varyings.add("localvpos", "vec3"), _2.include(t$d, P2), _2.include(a$4, P2), _2.include(r$8, P2), _2.include(r$7, P2), _2.vertex.uniforms.add("externalColor", "vec4"), _2.varyings.add("vcolorExt", "vec4"), P2.multipassTerrainEnabled && _2.varyings.add("depth", "float"), S2.add(t$l`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${P2.instancedColor ? "vcolorExt *= instanceColor;" : ""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${t$l.float(o$g)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${P2.normalType === 0 ? t$l`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));` : ""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${P2.vertexTangets ? "vTangent = dpTransformVertexTangent(tangent);" : ""}
          gl_Position = transformPosition(proj, view, vpos);
          ${P2.normalType === 0 && P2.offsetBackfaces ? "gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);" : ""}
        }

        ${P2.multipassTerrainEnabled ? "depth = (view * vec4(vpos, 1.0)).z;" : ""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)), P2.output === 7 && (_2.include(l$7, P2), _2.include(r$h, P2), P2.multipassTerrainEnabled && (_2.fragment.include(a$5), _2.include(r$d, P2)), _2.fragment.uniforms.add("camPos", "vec3").add("localOrigin", "vec3").add("opacity", "float").add("layerOpacity", "float"), P2.hasColorTexture && _2.fragment.uniforms.add("tex", "sampler2D"), _2.fragment.include(i$7), $2.add(t$l`
      void main() {
        discardBySlice(vpos);
        ${P2.multipassTerrainEnabled ? "terrainDepthTest(gl_FragCoord, depth);" : ""}
        ${P2.hasColorTexture ? t$l`
        vec4 texColor = texture2D(tex, vuv0);
        ${P2.textureAlphaPremultiplied ? "texColor.rgb /= texColor.a;" : ""}
        discardOrAdjustAlpha(texColor);` : t$l`vec4 texColor = vec4(1.0);`}
        ${P2.attributeColor ? t$l`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));` : t$l`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)), P2.output === 0 && (_2.include(l$7, P2), _2.include(r$6, P2), _2.include(o$6, P2), _2.include(r$h, P2), P2.receiveShadows && _2.include(t$f, P2), P2.multipassTerrainEnabled && (_2.fragment.include(a$5), _2.include(r$d, P2)), _2.fragment.uniforms.add("camPos", "vec3").add("localOrigin", "vec3").add("ambient", "vec3").add("diffuse", "vec3").add("opacity", "float").add("layerOpacity", "float"), P2.hasColorTexture && _2.fragment.uniforms.add("tex", "sampler2D"), _2.include(r$b, P2), _2.include(n$7, P2), _2.fragment.include(i$7), _2.include(r$5, P2), $2.add(t$l`
      void main() {
        discardBySlice(vpos);
        ${P2.multipassTerrainEnabled ? "terrainDepthTest(gl_FragCoord, depth);" : ""}
        ${P2.hasColorTexture ? t$l`
        vec4 texColor = texture2D(tex, vuv0);
        ${P2.textureAlphaPremultiplied ? "texColor.rgb /= texColor.a;" : ""}
        discardOrAdjustAlpha(texColor);` : t$l`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - camPos);
        ${P2.normalType === 3 ? t$l`
        vec3 normal = screenDerivativeNormal(localvpos);` : t$l`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${P2.pbrMode === 1 ? "applyPBRFactors();" : ""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = _oldHeuristicLighting(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${P2.receiveShadows ? "float shadow = readShadowMap(vpos, linearDepth);" : P2.viewingMode === 1 ? "float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);" : "float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${P2.attributeColor ? t$l`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));` : t$l`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${P2.hasNormalTexture ? t$l`
              mat3 tangentSpace = ${P2.vertexTangets ? "computeTangentSpace(normal);" : "computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);` : "vec3 shadedNormal = normal;"}
        ${P2.pbrMode === 1 || P2.pbrMode === 2 ? P2.viewingMode === 1 ? t$l`vec3 normalGround = normalize(vpos + localOrigin);` : t$l`vec3 normalGround = vec3(0.0, 0.0, 1.0);` : t$l``}
        ${P2.pbrMode === 1 || P2.pbrMode === 2 ? t$l`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);` : "vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${P2.OITEnabled ? "gl_FragColor = premultiplyAlpha(gl_FragColor);" : ""}
      }
    `)), _2.include(u$3, P2), _2;
}
var _$1 = Object.freeze({ __proto__: null, build: P$2 });
class E$3 extends i$9 {
  initializeProgram(e2) {
    const t2 = E$3.shader.get(), i2 = this.configuration, r2 = t2.build({ OITEnabled: i2.transparencyPassType === 0, output: i2.output, viewingMode: e2.viewingMode, receiveShadows: i2.receiveShadows, slicePlaneEnabled: i2.slicePlaneEnabled, sliceHighlightDisabled: i2.sliceHighlightDisabled, sliceEnabledForVertexPrograms: false, symbolColor: i2.symbolColors, vvSize: i2.vvSize, vvColor: i2.vvColor, vvInstancingEnabled: true, instanced: i2.instanced, instancedColor: i2.instancedColor, instancedDoublePrecision: i2.instancedDoublePrecision, useOldSceneLightInterface: false, pbrMode: i2.usePBR ? i2.isSchematic ? 2 : 1 : 0, hasMetalnessAndRoughnessTexture: i2.hasMetalnessAndRoughnessTexture, hasEmissionTexture: i2.hasEmissionTexture, hasOcclusionTexture: i2.hasOcclusionTexture, hasNormalTexture: i2.hasNormalTexture, hasColorTexture: i2.hasColorTexture, receiveAmbientOcclusion: i2.receiveAmbientOcclusion, useCustomDTRExponentForWater: false, normalType: i2.normalsTypeDerivate ? 3 : 0, doubleSidedMode: i2.doubleSidedMode, vertexTangets: i2.vertexTangents, attributeTextureCoordinates: i2.hasMetalnessAndRoughnessTexture || i2.hasEmissionTexture || i2.hasOcclusionTexture || i2.hasNormalTexture || i2.hasColorTexture ? 1 : 0, textureAlphaPremultiplied: i2.textureAlphaPremultiplied, attributeColor: i2.vertexColors, screenSizePerspectiveEnabled: i2.screenSizePerspective, verticalOffsetEnabled: i2.verticalOffset, offsetBackfaces: i2.offsetBackfaces, doublePrecisionRequiresObfuscation: r$c(e2.rctx), alphaDiscardMode: i2.alphaDiscardMode, supportsTextureAtlas: false, multipassTerrainEnabled: i2.multipassTerrainEnabled, cullAboveGround: i2.cullAboveGround });
    return new o$o(e2.rctx, r2.generateSource("vertex"), r2.generateSource("fragment"), o$h);
  }
  bindPass(e2, t2, i2) {
    o$e.bindProjectionMatrix(this.program, i2.camera.projectionMatrix);
    const r2 = this.configuration.output;
    (this.configuration.output === 1 || i2.multipassTerrainEnabled || r2 === 3) && this.program.setUniform2fv("cameraNearFar", i2.camera.nearFar), i2.multipassTerrainEnabled && (this.program.setUniform2fv("inverseViewport", i2.inverseViewport), t$h(this.program, e2, i2)), r2 === 7 && (this.program.setUniform1f("opacity", t2.opacity), this.program.setUniform1f("layerOpacity", t2.layerOpacity), this.program.setUniform4fv("externalColor", t2.externalColor), this.program.setUniform1i("colorMixMode", U$2[t2.colorMixMode])), r2 === 0 ? (i2.lighting.setUniforms(this.program, false), this.program.setUniform3fv("ambient", t2.ambient), this.program.setUniform3fv("diffuse", t2.diffuse), this.program.setUniform4fv("externalColor", t2.externalColor), this.program.setUniform1i("colorMixMode", U$2[t2.colorMixMode]), this.program.setUniform1f("opacity", t2.opacity), this.program.setUniform1f("layerOpacity", t2.layerOpacity), this.configuration.usePBR && r$b.bindUniforms(this.program, t2, this.configuration.isSchematic)) : r2 === 4 && r$e.bindOutputHighlight(e2, this.program, i2), e$8.bindUniformsForSymbols(this.program, t2), t$i.bindUniforms(this.program, t2, i2), z$1(t2.screenSizePerspective, this.program, "screenSizePerspectiveAlignment"), t2.textureAlphaMode !== 2 && t2.textureAlphaMode !== 3 || this.program.setUniform1f("textureAlphaCutoff", t2.textureAlphaCutoff);
  }
  bindDraw(e2) {
    const i2 = this.configuration.instancedDoublePrecision ? t$q(e2.camera.viewInverseTransposeMatrix[3], e2.camera.viewInverseTransposeMatrix[7], e2.camera.viewInverseTransposeMatrix[11]) : e2.origin;
    o$e.bindViewCustomOrigin(this.program, i2, e2.camera.viewMatrix), (this.configuration.output === 0 || this.configuration.output === 7 || this.configuration.output === 1 && this.configuration.screenSizePerspective || this.configuration.output === 2 && this.configuration.screenSizePerspective || this.configuration.output === 4 && this.configuration.screenSizePerspective) && o$e.bindCamPosition(this.program, i2, e2.camera.viewInverseTransposeMatrix), this.configuration.output === 2 && this.program.setUniformMatrix4fv("viewNormal", e2.camera.viewInverseTransposeMatrix), this.configuration.instancedDoublePrecision && n$9.bindCustomOrigin(this.program, i2), l$7.bindUniforms(this.program, this.configuration, e2.slicePlane, i2), this.configuration.output === 0 && t$f.bindViewCustomOrigin(this.program, e2, i2);
  }
  setPipeline(e2, t2) {
    const i2 = this.configuration, r2 = e2 === 3, o2 = e2 === 2;
    return u$i({ blending: i2.output !== 0 && i2.output !== 7 || !i2.transparent ? null : r2 ? u$7 : c$8(e2), culling: z(i2), depthTest: { func: a$9(e2) }, depthWrite: r2 || o2 ? i2.writeDepth && n$i : null, colorWrite: s$e, stencilWrite: i2.sceneHasOcludees ? f$5 : null, stencilTest: i2.sceneHasOcludees ? t2 ? t$g : c$5 : null, polygonOffset: r2 || o2 ? null : s$5(i2.enableOffset) });
  }
  initializePipeline() {
    return this._occludeePipelineState = this.setPipeline(this.configuration.transparencyPassType, true), this.setPipeline(this.configuration.transparencyPassType, false);
  }
  getPipelineState(e2) {
    return e2 ? this._occludeePipelineState : this.pipeline;
  }
}
function U$1(e2) {
  return e2.cullFace ? e2.cullFace !== 0 : !e2.slicePlaneEnabled && (!e2.transparent && !e2.doubleSidedMode);
}
E$3.shader = new t$k(_$1, () => import("./DefaultMaterial.glsl.598650f2.js"));
const z = (e2) => U$1(e2) && { face: e2.cullFace === 1 ? 1028 : 1029, mode: 2305 };
class R$1 extends e$9 {
  constructor() {
    super(...arguments), this.output = 0, this.alphaDiscardMode = 1, this.doubleSidedMode = 0, this.isSchematic = false, this.vertexColors = false, this.offsetBackfaces = false, this.symbolColors = false, this.vvSize = false, this.vvColor = false, this.verticalOffset = false, this.receiveShadows = false, this.slicePlaneEnabled = false, this.sliceHighlightDisabled = false, this.receiveAmbientOcclusion = false, this.screenSizePerspective = false, this.textureAlphaPremultiplied = false, this.hasColorTexture = false, this.usePBR = false, this.hasMetalnessAndRoughnessTexture = false, this.hasEmissionTexture = false, this.hasOcclusionTexture = false, this.hasNormalTexture = false, this.instanced = false, this.instancedColor = false, this.instancedDoublePrecision = false, this.vertexTangents = false, this.normalsTypeDerivate = false, this.writeDepth = true, this.sceneHasOcludees = false, this.transparent = false, this.enableOffset = true, this.cullFace = 0, this.transparencyPassType = 3, this.multipassTerrainEnabled = false, this.cullAboveGround = true;
  }
}
e$p([r$g({ count: 8 })], R$1.prototype, "output", void 0), e$p([r$g({ count: 4 })], R$1.prototype, "alphaDiscardMode", void 0), e$p([r$g({ count: 3 })], R$1.prototype, "doubleSidedMode", void 0), e$p([r$g()], R$1.prototype, "isSchematic", void 0), e$p([r$g()], R$1.prototype, "vertexColors", void 0), e$p([r$g()], R$1.prototype, "offsetBackfaces", void 0), e$p([r$g()], R$1.prototype, "symbolColors", void 0), e$p([r$g()], R$1.prototype, "vvSize", void 0), e$p([r$g()], R$1.prototype, "vvColor", void 0), e$p([r$g()], R$1.prototype, "verticalOffset", void 0), e$p([r$g()], R$1.prototype, "receiveShadows", void 0), e$p([r$g()], R$1.prototype, "slicePlaneEnabled", void 0), e$p([r$g()], R$1.prototype, "sliceHighlightDisabled", void 0), e$p([r$g()], R$1.prototype, "receiveAmbientOcclusion", void 0), e$p([r$g()], R$1.prototype, "screenSizePerspective", void 0), e$p([r$g()], R$1.prototype, "textureAlphaPremultiplied", void 0), e$p([r$g()], R$1.prototype, "hasColorTexture", void 0), e$p([r$g()], R$1.prototype, "usePBR", void 0), e$p([r$g()], R$1.prototype, "hasMetalnessAndRoughnessTexture", void 0), e$p([r$g()], R$1.prototype, "hasEmissionTexture", void 0), e$p([r$g()], R$1.prototype, "hasOcclusionTexture", void 0), e$p([r$g()], R$1.prototype, "hasNormalTexture", void 0), e$p([r$g()], R$1.prototype, "instanced", void 0), e$p([r$g()], R$1.prototype, "instancedColor", void 0), e$p([r$g()], R$1.prototype, "instancedDoublePrecision", void 0), e$p([r$g()], R$1.prototype, "vertexTangents", void 0), e$p([r$g()], R$1.prototype, "normalsTypeDerivate", void 0), e$p([r$g()], R$1.prototype, "writeDepth", void 0), e$p([r$g()], R$1.prototype, "sceneHasOcludees", void 0), e$p([r$g()], R$1.prototype, "transparent", void 0), e$p([r$g()], R$1.prototype, "enableOffset", void 0), e$p([r$g({ count: 3 })], R$1.prototype, "cullFace", void 0), e$p([r$g({ count: 4 })], R$1.prototype, "transparencyPassType", void 0), e$p([r$g()], R$1.prototype, "multipassTerrainEnabled", void 0), e$p([r$g()], R$1.prototype, "cullAboveGround", void 0);
function j$2(j2) {
  const E2 = new n$8(), O2 = E2.vertex.code, _2 = E2.fragment.code;
  return E2.vertex.uniforms.add("proj", "mat4").add("view", "mat4").add("camPos", "vec3").add("localOrigin", "vec3"), E2.include(o$8), E2.varyings.add("vpos", "vec3"), E2.include(e$8, j2), E2.include(n$9, j2), E2.include(t$i, j2), j2.output !== 0 && j2.output !== 7 || (E2.include(o$9, j2), E2.include(r$a, { linearDepth: false }), j2.offsetBackfaces && E2.include(e$6), j2.instancedColor && E2.attributes.add("instanceColor", "vec4"), E2.varyings.add("vNormalWorld", "vec3"), E2.varyings.add("localvpos", "vec3"), j2.multipassTerrainEnabled && E2.varyings.add("depth", "float"), E2.include(t$d, j2), E2.include(a$4, j2), E2.include(r$8, j2), E2.include(r$7, j2), E2.vertex.uniforms.add("externalColor", "vec4"), E2.varyings.add("vcolorExt", "vec4"), O2.add(t$l`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${j2.instancedColor ? "vcolorExt *= instanceColor;" : ""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${t$l.float(o$g)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${j2.offsetBackfaces ? "gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);" : ""}
          }
          ${j2.multipassTerrainEnabled ? t$l`depth = (view * vec4(vpos, 1.0)).z;` : ""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)), j2.output === 7 && (E2.include(l$7, j2), E2.include(r$h, j2), j2.multipassTerrainEnabled && (E2.fragment.include(a$5), E2.include(r$d, j2)), E2.fragment.uniforms.add("camPos", "vec3").add("localOrigin", "vec3").add("opacity", "float").add("layerOpacity", "float"), E2.fragment.uniforms.add("view", "mat4"), j2.hasColorTexture && E2.fragment.uniforms.add("tex", "sampler2D"), E2.fragment.include(i$7), _2.add(t$l`
      void main() {
        discardBySlice(vpos);
        ${j2.multipassTerrainEnabled ? t$l`terrainDepthTest(gl_FragCoord, depth);` : ""}
        ${j2.hasColorTexture ? t$l`
        vec4 texColor = texture2D(tex, vuv0);
        ${j2.textureAlphaPremultiplied ? "texColor.rgb /= texColor.a;" : ""}
        discardOrAdjustAlpha(texColor);` : t$l`vec4 texColor = vec4(1.0);`}
        ${j2.attributeColor ? t$l`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));` : t$l`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)), j2.output === 0 && (E2.include(l$7, j2), E2.include(r$6, j2), E2.include(o$6, j2), E2.include(r$h, j2), j2.receiveShadows && E2.include(t$f, j2), j2.multipassTerrainEnabled && (E2.fragment.include(a$5), E2.include(r$d, j2)), E2.fragment.uniforms.add("camPos", "vec3").add("localOrigin", "vec3").add("ambient", "vec3").add("diffuse", "vec3").add("opacity", "float").add("layerOpacity", "float"), E2.fragment.uniforms.add("view", "mat4"), j2.hasColorTexture && E2.fragment.uniforms.add("tex", "sampler2D"), E2.include(r$b, j2), E2.include(n$7, j2), E2.fragment.include(i$7), _2.add(t$l`
      void main() {
        discardBySlice(vpos);
        ${j2.multipassTerrainEnabled ? t$l`terrainDepthTest(gl_FragCoord, depth);` : ""}
        ${j2.hasColorTexture ? t$l`
        vec4 texColor = texture2D(tex, vuv0);
        ${j2.textureAlphaPremultiplied ? "texColor.rgb /= texColor.a;" : ""}
        discardOrAdjustAlpha(texColor);` : t$l`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - camPos);
        ${j2.pbrMode === 1 ? "applyPBRFactors();" : ""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = _oldHeuristicLighting(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${j2.receiveShadows ? "float shadow = readShadowMap(vpos, linearDepth);" : j2.viewingMode === 1 ? "float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);" : "float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${j2.attributeColor ? t$l`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));` : t$l`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${t$l`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(-viewForward, lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(-viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${j2.pbrMode === 1 || j2.pbrMode === 2 ? j2.viewingMode === 1 ? t$l`vec3 normalGround = normalize(vpos + localOrigin);` : t$l`vec3 normalGround = vec3(0.0, 0.0, 1.0);` : t$l``}
        ${j2.pbrMode === 1 || j2.pbrMode === 2 ? t$l`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);` : "vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${j2.OITEnabled ? "gl_FragColor = premultiplyAlpha(gl_FragColor);" : ""}
      }
    `)), E2.include(u$3, j2), E2;
}
var E$2 = Object.freeze({ __proto__: null, build: j$2 });
class a$3 extends E$3 {
  initializeProgram(e2) {
    const t2 = a$3.shader.get(), o2 = this.configuration, l2 = t2.build({ OITEnabled: o2.transparencyPassType === 0, output: o2.output, viewingMode: e2.viewingMode, receiveShadows: o2.receiveShadows, slicePlaneEnabled: o2.slicePlaneEnabled, sliceHighlightDisabled: o2.sliceHighlightDisabled, sliceEnabledForVertexPrograms: false, symbolColor: o2.symbolColors, vvSize: o2.vvSize, vvColor: o2.vvColor, vvInstancingEnabled: true, instanced: o2.instanced, instancedColor: o2.instancedColor, instancedDoublePrecision: o2.instancedDoublePrecision, useOldSceneLightInterface: false, pbrMode: o2.usePBR ? 1 : 0, hasMetalnessAndRoughnessTexture: false, hasEmissionTexture: false, hasOcclusionTexture: false, hasNormalTexture: false, hasColorTexture: o2.hasColorTexture, receiveAmbientOcclusion: o2.receiveAmbientOcclusion, useCustomDTRExponentForWater: false, normalType: 0, doubleSidedMode: 2, vertexTangets: false, attributeTextureCoordinates: o2.hasColorTexture ? 1 : 0, textureAlphaPremultiplied: o2.textureAlphaPremultiplied, attributeColor: o2.vertexColors, screenSizePerspectiveEnabled: o2.screenSizePerspective, verticalOffsetEnabled: o2.verticalOffset, offsetBackfaces: o2.offsetBackfaces, doublePrecisionRequiresObfuscation: r$c(e2.rctx), alphaDiscardMode: o2.alphaDiscardMode, supportsTextureAtlas: false, multipassTerrainEnabled: o2.multipassTerrainEnabled, cullAboveGround: o2.cullAboveGround });
    return new o$o(e2.rctx, l2.generateSource("vertex"), l2.generateSource("fragment"), o$h);
  }
}
a$3.shader = new t$k(E$2, () => import("./RealisticTree.glsl.45f4e0f3.js"));
class y$1 extends a$b {
  constructor(e2) {
    super(e2, M$1), this.supportsEdges = true, this.techniqueConfig = new R$1(), this.vertexBufferLayout = y$1.getVertexBufferLayout(this.params), this.instanceBufferLayout = e2.instanced ? y$1.getInstanceBufferLayout(this.params) : null;
  }
  isVisibleInPass(e2) {
    return e2 !== 4 && e2 !== 6 && e2 !== 7 || this.params.castShadows;
  }
  isVisible() {
    const e2 = this.params;
    if (!super.isVisible() || e2.layerOpacity === 0)
      return false;
    const t2 = e2.instanced, i2 = e2.vertexColors, s2 = e2.symbolColors, a2 = !!t2 && t2.indexOf("color") > -1, r2 = e2.vvColorEnabled, n2 = e2.colorMixMode === "replace", o2 = e2.opacity > 0, l2 = e2.externalColor && e2.externalColor[3] > 0;
    return i2 && (a2 || r2 || s2) ? !!n2 || o2 : i2 ? n2 ? l2 : o2 : a2 || r2 || s2 ? !!n2 || o2 : n2 ? l2 : o2;
  }
  getTechniqueConfig(e2, t2) {
    return this.techniqueConfig.output = e2, this.techniqueConfig.hasNormalTexture = !!this.params.normalTextureId, this.techniqueConfig.hasColorTexture = !!this.params.textureId, this.techniqueConfig.vertexTangents = this.params.vertexTangents, this.techniqueConfig.instanced = !!this.params.instanced, this.techniqueConfig.instancedDoublePrecision = this.params.instancedDoublePrecision, this.techniqueConfig.vvSize = this.params.vvSizeEnabled, this.techniqueConfig.verticalOffset = this.params.verticalOffset !== null, this.techniqueConfig.screenSizePerspective = this.params.screenSizePerspective !== null, this.techniqueConfig.slicePlaneEnabled = this.params.slicePlaneEnabled, this.techniqueConfig.sliceHighlightDisabled = this.params.sliceHighlightDisabled, this.techniqueConfig.alphaDiscardMode = this.params.textureAlphaMode, this.techniqueConfig.normalsTypeDerivate = this.params.normals === "screenDerivative", this.techniqueConfig.transparent = this.params.transparent, this.techniqueConfig.writeDepth = this.params.writeDepth, this.techniqueConfig.sceneHasOcludees = this.params.sceneHasOcludees, this.techniqueConfig.cullFace = this.params.cullFace != null ? this.params.cullFace : 0, this.techniqueConfig.multipassTerrainEnabled = !!t2 && t2.multipassTerrainEnabled, this.techniqueConfig.cullAboveGround = !t2 || t2.cullAboveGround, e2 !== 0 && e2 !== 7 || (this.techniqueConfig.vertexColors = this.params.vertexColors, this.techniqueConfig.symbolColors = this.params.symbolColors, this.params.treeRendering ? this.techniqueConfig.doubleSidedMode = 2 : this.techniqueConfig.doubleSidedMode = this.params.doubleSided && this.params.doubleSidedType === "normal" ? 1 : this.params.doubleSided && this.params.doubleSidedType === "winding-order" ? 2 : 0, this.techniqueConfig.instancedColor = !!this.params.instanced && this.params.instanced.indexOf("color") > -1, this.techniqueConfig.receiveShadows = this.params.receiveShadows && this.params.shadowMappingEnabled, this.techniqueConfig.receiveAmbientOcclusion = !(!t2 || !t2.ssaoEnabled) && this.params.receiveSSAO, this.techniqueConfig.vvColor = this.params.vvColorEnabled, this.techniqueConfig.textureAlphaPremultiplied = !!this.params.textureAlphaPremultiplied, this.techniqueConfig.usePBR = this.params.usePBR, this.techniqueConfig.hasMetalnessAndRoughnessTexture = !!this.params.metallicRoughnessTextureId, this.techniqueConfig.hasEmissionTexture = !!this.params.emissiveTextureId, this.techniqueConfig.hasOcclusionTexture = !!this.params.occlusionTextureId, this.techniqueConfig.offsetBackfaces = !(!this.params.transparent || !this.params.offsetTransparentBackfaces), this.techniqueConfig.isSchematic = this.params.usePBR && this.params.isSchematic, this.techniqueConfig.transparencyPassType = t2 ? t2.transparencyPassType : 3, this.techniqueConfig.enableOffset = !t2 || t2.camera.relativeElevation < f$6), this.techniqueConfig;
  }
  intersect(e2, t2, c2, h2, p2, v2, g2) {
    if (this.params.verticalOffset !== null) {
      const e3 = h2.camera;
      o$m(R, c2[12], c2[13], c2[14]);
      let t3 = null;
      switch (h2.viewingMode) {
        case 1:
          t3 = j$9(A$2, R);
          break;
        case 2:
          t3 = r$q(A$2, I$1);
      }
      let d2 = 0;
      if (this.params.verticalOffset !== null) {
        const i2 = c$g(D$2, R, e3.eye), s2 = s$b(i2), a2 = d$b(i2, i2, 1 / s2);
        let u2 = null;
        this.params.screenSizePerspective && (u2 = z$6(t3, a2)), d2 += B$1(e3, s2, this.params.verticalOffset, u2, this.params.screenSizePerspective);
      }
      d$b(t3, t3, d2), L$5(L, t3, h2.transform.inverseRotation), p2 = c$g(E$1, p2, L), v2 = c$g(B, v2, L);
    }
    d$6(e2, t2, h2, p2, v2, E$5(h2.verticalOffset), g2);
  }
  getGLMaterial(e2) {
    if (e2.output === 0 || e2.output === 7 || e2.output === 1 || e2.output === 2 || e2.output === 3 || e2.output === 4)
      return new P$1(e2);
  }
  createBufferWriter() {
    return new w$2(this.vertexBufferLayout, this.instanceBufferLayout);
  }
  static getVertexBufferLayout(e2) {
    const t2 = e2.textureId || e2.normalTextureId || e2.metallicRoughnessTextureId || e2.emissiveTextureId || e2.occlusionTextureId, i2 = A$9().vec3f("position").vec3f("normal");
    return e2.vertexTangents && i2.vec4f("tangent"), t2 && i2.vec2f("uv0"), e2.vertexColors && i2.vec4u8("color"), e2.symbolColors && i2.vec4u8("symbolColor"), i2;
  }
  static getInstanceBufferLayout(e2) {
    let t2 = A$9();
    return t2 = e2.instancedDoublePrecision ? t2.vec3f("modelOriginHi").vec3f("modelOriginLo").mat3f("model").mat3f("modelNormal") : t2.mat4f("model").mat4f("modelNormal"), e2.instanced && e2.instanced.indexOf("color") > -1 && (t2 = t2.vec4f("instanceColor")), e2.instanced && e2.instanced.indexOf("featureAttribute") > -1 && (t2 = t2.vec4f("instanceFeatureAttribute")), t2;
  }
}
class P$1 extends s$7 {
  constructor(e2) {
    const t2 = e2.material;
    super(__spreadValues(__spreadValues({}, e2), t2.params)), this.updateParameters();
  }
  updateParameters(e2) {
    const t2 = this.material.params;
    this.updateTexture(t2.textureId), this.technique = t2.treeRendering ? this.techniqueRep.acquireAndReleaseExisting(a$3, this.material.getTechniqueConfig(this.output, e2), this.technique) : this.techniqueRep.acquireAndReleaseExisting(E$3, this.material.getTechniqueConfig(this.output, e2), this.technique);
  }
  selectPipelines() {
  }
  _updateShadowState(e2) {
    e2.shadowMappingEnabled !== this.material.params.shadowMappingEnabled && this.material.setParameterValues({ shadowMappingEnabled: e2.shadowMappingEnabled });
  }
  _updateOccludeeState(e2) {
    e2.hasOccludees !== this.material.params.sceneHasOcludees && this.material.setParameterValues({ sceneHasOcludees: e2.hasOccludees });
  }
  ensureParameters(e2) {
    this.output !== 0 && this.output !== 7 || (this._updateShadowState(e2), this._updateOccludeeState(e2)), this.updateParameters(e2);
  }
  bind(e2, t2) {
    e2.bindProgram(this.technique.program), this.technique.bindPass(e2, this.material.params, t2), this.bindTexture(e2, this.technique.program);
  }
  beginSlot(e2) {
    return e2 === (this.material.params.transparent ? this.material.params.writeDepth ? 5 : 8 : 3);
  }
  getPipelineState(e2, t2) {
    return this.technique.getPipelineState(t2);
  }
}
const O = 2.1, M$1 = __spreadValues({ textureId: void 0, initTextureTransparent: false, isSchematic: false, usePBR: false, normalTextureId: void 0, vertexTangents: false, occlusionTextureId: void 0, emissiveTextureId: void 0, metallicRoughnessTextureId: void 0, emissiveFactor: [0, 0, 0], mrrFactors: [0, 1, 0.5], ambient: [0.2, 0.2, 0.2], diffuse: [0.8, 0.8, 0.8], externalColor: [1, 1, 1, 1], colorMixMode: "multiply", opacity: 1, layerOpacity: 1, vertexColors: false, symbolColors: false, doubleSided: false, doubleSidedType: "normal", cullFace: void 0, instanced: void 0, instancedDoublePrecision: false, normals: "default", receiveSSAO: true, receiveShadows: true, castShadows: true, shadowMappingEnabled: false, verticalOffset: null, screenSizePerspective: null, slicePlaneEnabled: false, sliceHighlightDisabled: false, offsetTransparentBackfaces: false, vvSizeEnabled: false, vvSizeMinSize: [1, 1, 1], vvSizeMaxSize: [100, 100, 100], vvSizeOffset: [0, 0, 0], vvSizeFactor: [1, 1, 1], vvSizeValue: [1, 1, 1], vvColorEnabled: false, vvColorValues: [0, 0, 0, 0, 0, 0, 0, 0], vvColorColors: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0], vvSymbolAnchor: [0, 0, 0], vvSymbolRotationMatrix: e$o(), transparent: false, writeDepth: true, textureAlphaMode: 0, textureAlphaCutoff: d$3, textureAlphaPremultiplied: false, sceneHasOcludees: false }, d$5);
class w$2 {
  constructor(e2, t2) {
    this.vertexBufferLayout = e2, this.instanceBufferLayout = t2;
  }
  allocate(e2) {
    return this.vertexBufferLayout.createBuffer(e2);
  }
  elementCount(e2) {
    return e2.indices.get("position").length;
  }
  write(e2, t2, i2, s2) {
    p$3(t2, this.vertexBufferLayout, e2.transformation, e2.invTranspTransformation, i2, s2);
  }
}
const E$1 = n$g(), B = n$g(), I$1 = t$q(0, 0, 1), A$2 = n$g(), L = n$g(), R = n$g(), D$2 = n$g();
const i$6 = [{ name: "position", count: 2, type: 5126, offset: 0, stride: 8, normalized: false }], s$3 = [{ name: "position", count: 2, type: 5126, offset: 0, stride: 16, normalized: false }, { name: "uv0", count: 2, type: 5126, offset: 8, stride: 16, normalized: false }];
function i$5(r2, i2 = i$6, l2 = o$h, m2 = -1, f2 = 1) {
  let u2 = null;
  switch (i2) {
    case s$3:
      u2 = new Float32Array([m2, m2, 0, 0, f2, m2, 1, 0, m2, f2, 0, 1, f2, f2, 1, 1]);
      break;
    case i$6:
    default:
      u2 = new Float32Array([m2, m2, f2, m2, m2, f2, f2, f2]);
  }
  return new s$d(r2, l2, { geometry: i2 }, { geometry: s$c.createVertex(r2, 35044, u2) });
}
function s$2() {
  if (t$t(i$4)) {
    const e2 = (e3) => a$n(`esri/libs/basisu/${e3}`);
    i$4 = import("./basis_transcoder.6cda9d06.js").then(function(e3) {
      return e3.b;
    }).then(({ default: t2 }) => t2({ locateFile: e2 }).then((e3) => (e3.initializeBasis(), delete e3.then, e3)));
  }
  return i$4;
}
let i$4;
let r$4 = null, a$2 = null;
function i$3() {
  return __async(this, null, function* () {
    return t$t(a$2) && (a$2 = s$2(), r$4 = yield a$2), a$2;
  });
}
function o$5(t2) {
  if (t$t(r$4))
    return t2.byteLength;
  const n2 = new r$4.BasisFile(new Uint8Array(t2));
  if (n2.getNumImages() < 1)
    return 0;
  const a2 = n2.getNumLevels(0), i2 = n2.getHasAlpha(), o2 = n2.getImageWidth(0, 0), l2 = n2.getImageHeight(0, 0);
  n2.close(), n2.delete();
  const g2 = l$f(i2 ? 37496 : 37492), m2 = (__pow(4, a2) - 1) / (3 * __pow(4, a2 - 1));
  return Math.ceil(o2 * l2 * g2 * m2);
}
function l$3(s2, n2, a2) {
  return __async(this, null, function* () {
    t$t(r$4) && (r$4 = yield i$3());
    const o2 = new r$4.BasisFile(new Uint8Array(a2));
    if (o2.getNumImages() < 1)
      return null;
    const l2 = o2.getNumLevels(0), g2 = o2.getHasAlpha(), m2 = o2.getImageWidth(0, 0), c2 = o2.getImageHeight(0, 0), { compressedTextureETC: u2, compressedTextureS3TC: p2 } = s2.capabilities, [d2, h2] = u2 ? g2 ? [1, 37496] : [0, 37492] : p2 ? g2 ? [3, 33779] : [2, 33776] : [13, 6408];
    o2.startTranscoding();
    const f2 = [];
    for (let e2 = 0; e2 < l2; e2++)
      f2.push(new Uint8Array(o2.getImageTranscodedSizeInBytes(0, e2, d2))), o2.transcodeImage(f2[e2], 0, e2, d2, 0, 0);
    o2.close(), o2.delete();
    const w2 = __spreadProps(__spreadValues({}, n2), { samplingMode: l2 > 1 ? 9987 : 9729, hasMipmap: l2 > 1, internalFormat: h2, width: m2, height: c2 });
    return new o$p(s2, w2, { type: "compressed", levels: f2 });
  });
}
const n$4 = n$e.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"), o$4 = 542327876, a$1 = 131072, i$2 = 4;
function s$1(e2) {
  return e2.charCodeAt(0) + (e2.charCodeAt(1) << 8) + (e2.charCodeAt(2) << 16) + (e2.charCodeAt(3) << 24);
}
function l$2(e2) {
  return String.fromCharCode(255 & e2, e2 >> 8 & 255, e2 >> 16 & 255, e2 >> 24 & 255);
}
const u$1 = s$1("DXT1"), c$2 = s$1("DXT3"), m$1 = s$1("DXT5"), h$2 = 31, d$1 = 0, p$1 = 1, g$1 = 2, f$3 = 3, w$1 = 4, x$2 = 7, C = 20, D$1 = 21;
function b$1(e2, t2, n2, o2) {
  const { textureData: a2, internalFormat: i2, width: s2, height: l2 } = A$1(n2, o2);
  t2.samplingMode = a2.levels.length > 1 ? 9987 : 9729, t2.hasMipmap = a2.levels.length > 1, t2.internalFormat = i2, t2.width = s2, t2.height = l2;
  const u2 = new o$p(e2, t2, a2);
  return e2.bindTexture(u2, 0), u2;
}
function A$1(e2, r2) {
  const s2 = new Int32Array(e2, 0, h$2);
  if (s2[d$1] !== o$4)
    return n$4.error("Invalid magic number in DDS header"), null;
  if (!(s2[C] & i$2))
    return n$4.error("Unsupported format, must contain a FourCC code"), null;
  const b2 = s2[D$1];
  let A2, v2;
  switch (b2) {
    case u$1:
      A2 = 8, v2 = 33776;
      break;
    case c$2:
      A2 = 16, v2 = 33778;
      break;
    case m$1:
      A2 = 16, v2 = 33779;
      break;
    default:
      return n$4.error("Unsupported FourCC code:", l$2(b2)), null;
  }
  let F2 = 1, M2 = s2[w$1], T2 = s2[f$3];
  (3 & M2) == 0 && (3 & T2) == 0 || (n$4.warn("Rounding up compressed texture size to nearest multiple of 4."), M2 = M2 + 3 & -4, T2 = T2 + 3 & -4);
  const U2 = M2, j2 = T2;
  let k2, y2;
  s2[g$1] & a$1 && r2 !== false && (F2 = Math.max(1, s2[x$2])), F2 === 1 || o$q(M2) && o$q(T2) || (n$4.warn("Ignoring mipmaps of non power of two sized compressed texture."), F2 = 1);
  let I2 = s2[p$1] + 4;
  const S2 = [];
  for (let t2 = 0; t2 < F2; ++t2)
    y2 = (M2 + 3 >> 2) * (T2 + 3 >> 2) * A2, k2 = new Uint8Array(e2, I2, y2), S2.push(k2), I2 += y2, M2 = Math.max(1, M2 >> 1), T2 = Math.max(1, T2 >> 1);
  return { textureData: { type: "compressed", levels: S2 }, internalFormat: v2, width: U2, height: j2 };
}
class E extends r$l {
  constructor(e2, t2) {
    super(), this.data = e2, this.type = 4, this.glTexture = null, this.powerOfTwoStretchInfo = null, this.loadingPromise = null, this.loadingController = null, this.events = new n$j(), this.params = t2 || {}, this.params.mipmap = this.params.mipmap !== false, this.params.noUnpackFlip = this.params.noUnpackFlip || false, this.params.preMultiplyAlpha = this.params.preMultiplyAlpha || false, this.params.wrap = this.params.wrap || { s: 10497, t: 10497 }, this.params.powerOfTwoResizeMode = this.params.powerOfTwoResizeMode || 1, this.estimatedTexMemRequired = E.estimateTexMemRequired(this.data, this.params), this.startPreload();
  }
  startPreload() {
    const e2 = this.data;
    t$t(e2) || (e2 instanceof HTMLVideoElement ? this.startPreloadVideoElement(e2) : e2 instanceof HTMLImageElement && this.startPreloadImageElement(e2));
  }
  startPreloadVideoElement(e2) {
    F$6(e2.src) || e2.preload === "auto" && e2.crossOrigin || (e2.preload = "auto", e2.crossOrigin = "anonymous", e2.src = e2.src);
  }
  startPreloadImageElement(e2) {
    G$4(e2.src) || F$6(e2.src) || e2.crossOrigin || (e2.crossOrigin = "anonymous", e2.src = e2.src);
  }
  static getDataDimensions(e2) {
    return e2 instanceof HTMLVideoElement ? { width: e2.videoWidth, height: e2.videoHeight } : e2;
  }
  static estimateTexMemRequired(e2, s2) {
    if (t$t(e2))
      return 0;
    if (t$x(e2) || c$i(e2))
      return s2.encoding === E.BASIS_ENCODING ? o$5(e2) : e2.byteLength;
    const { width: a2, height: o2 } = e2 instanceof Image || e2 instanceof ImageData || e2 instanceof HTMLCanvasElement || e2 instanceof HTMLVideoElement ? E.getDataDimensions(e2) : s2;
    return (s2.mipmap ? 4 / 3 : 1) * a2 * o2 * (s2.components || 4) || 0;
  }
  dispose() {
    this.data = void 0;
  }
  get width() {
    return this.params.width;
  }
  get height() {
    return this.params.height;
  }
  createDescriptor(e2) {
    const t2 = this.params.mipmap && !this.params.disableAnisotropy;
    return { target: 3553, pixelFormat: 6408, dataType: 5121, wrapMode: this.params.wrap, flipped: !this.params.noUnpackFlip, samplingMode: this.params.mipmap ? 9987 : 9729, hasMipmap: this.params.mipmap, preMultiplyAlpha: this.params.preMultiplyAlpha, maxAnisotropy: t2 ? e2.parameters.maxMaxAnisotropy : void 0 };
  }
  load(e2, a2) {
    if (r$s(this.glTexture))
      return this.glTexture;
    if (r$s(this.loadingPromise))
      return this.loadingPromise;
    const o2 = this.data;
    return t$t(o2) ? (this.glTexture = new o$p(e2, this.createDescriptor(e2), null), e2.bindTexture(this.glTexture, 0), this.glTexture) : typeof o2 == "string" ? this.loadFromURL(e2, a2, o2) : o2 instanceof Image ? this.loadFromImageElement(e2, a2, o2) : o2 instanceof HTMLVideoElement ? this.loadFromVideoElement(e2, a2, o2) : o2 instanceof ImageData || o2 instanceof HTMLCanvasElement ? this.loadFromImage(e2, o2, a2) : (t$x(o2) || c$i(o2)) && this.params.encoding === E.DDS_ENCODING ? this.loadFromDDSData(e2, o2) : (t$x(o2) || c$i(o2)) && this.params.encoding === E.BASIS_ENCODING ? this.loadFromBasis(e2, o2) : c$i(o2) ? this.loadFromPixelData(e2, o2) : t$x(o2) ? this.loadFromPixelData(e2, new Uint8Array(o2)) : null;
  }
  get requiresFrameUpdates() {
    return this.data instanceof HTMLVideoElement;
  }
  frameUpdate(e2, t2, r2) {
    if (!(this.data instanceof HTMLVideoElement) || t$t(this.glTexture))
      return r2;
    if (this.data.readyState < 2 || r2 === this.data.currentTime)
      return r2;
    if (r$s(this.powerOfTwoStretchInfo)) {
      const { framebuffer: r3, vao: i2, sourceTexture: s2 } = this.powerOfTwoStretchInfo;
      s2.setData(this.data), this.drawStretchedTexture(e2, t2, r3, i2, s2, this.glTexture);
    } else {
      const { width: e3, height: t3 } = this.data, { width: r3, height: i2 } = this.glTexture.descriptor;
      e3 !== r3 || t3 !== i2 ? this.glTexture.updateData(0, 0, 0, Math.min(e3, r3), Math.min(t3, i2), this.data) : this.glTexture.setData(this.data);
    }
    return this.glTexture.descriptor.hasMipmap && this.glTexture.generateMipmap(), this.data.currentTime;
  }
  loadFromDDSData(e2, t2) {
    return this.glTexture = b$1(e2, this.createDescriptor(e2), t2, this.params.mipmap), e2.bindTexture(this.glTexture, 0), this.glTexture;
  }
  loadFromBasis(e2, t2) {
    return this.loadAsync(() => l$3(e2, this.createDescriptor(e2), t2).then((e3) => (this.glTexture = e3, e3)));
  }
  loadFromPixelData(e2, t2) {
    i$f(this.params.width > 0 && this.params.height > 0);
    const r2 = this.createDescriptor(e2);
    return r2.pixelFormat = this.params.components === 1 ? 6409 : this.params.components === 3 ? 6407 : 6408, r2.width = this.params.width, r2.height = this.params.height, this.glTexture = new o$p(e2, r2, t2), e2.bindTexture(this.glTexture, 0), this.glTexture;
  }
  loadAsync(e2) {
    return __async(this, null, function* () {
      const t2 = h$d();
      this.loadingController = t2;
      const r2 = e2(t2.signal);
      this.loadingPromise = r2;
      const i2 = () => {
        this.loadingController === t2 && (this.loadingController = null), this.loadingPromise === r2 && (this.loadingPromise = null);
      };
      return r2.then(i2, i2), r2;
    });
  }
  loadFromURL(e2, t2, r2) {
    return this.loadAsync((i2) => __async(this, null, function* () {
      const s2 = yield t$y(r2, { signal: i2 });
      return this.loadFromImage(e2, s2, t2);
    }));
  }
  loadFromImageElement(e2, t2, r2) {
    return r2.complete ? this.loadFromImage(e2, r2, t2) : this.loadAsync((i2) => __async(this, null, function* () {
      const s2 = yield t$z(r2, r2.src, false, i2);
      return this.loadFromImage(e2, s2, t2);
    }));
  }
  loadFromVideoElement(e2, t2, r2) {
    return r2.readyState >= 2 ? this.loadFromImage(e2, r2, t2) : this.loadFromVideoElementAsync(e2, t2, r2);
  }
  loadFromVideoElementAsync(e2, t2, r2) {
    return this.loadAsync((i2) => new Promise((o2, n2) => {
      const h2 = () => {
        r2.removeEventListener("loadeddata", p2), r2.removeEventListener("error", d2), r$s(u2) && u2.remove();
      }, p2 = () => {
        r2.readyState >= 2 && (h2(), o2(this.loadFromImage(e2, r2, t2)));
      }, d2 = (e3) => {
        h2(), n2(e3 || new s$f("Failed to load video"));
      };
      r2.addEventListener("loadeddata", p2), r2.addEventListener("error", d2);
      const u2 = v$7(i2, () => d2(m$8()));
    }));
  }
  loadFromImage(e2, t2, r2) {
    const i2 = E.getDataDimensions(t2);
    this.params.width = i2.width, this.params.height = i2.height;
    const s2 = this.createDescriptor(e2);
    return s2.pixelFormat = this.params.components === 3 ? 6407 : 6408, !this.requiresPowerOfTwo(e2, s2) || o$q(i2.width) && o$q(i2.height) ? (s2.width = i2.width, s2.height = i2.height, this.glTexture = new o$p(e2, s2, t2), e2.bindTexture(this.glTexture, 0), this.glTexture) : (this.glTexture = this.makePowerOfTwoTexture(e2, t2, i2, s2, r2), e2.bindTexture(this.glTexture, 0), this.glTexture);
  }
  requiresPowerOfTwo(e2, t2) {
    const r2 = 33071, i2 = typeof t2.wrapMode == "number" ? t2.wrapMode === r2 : t2.wrapMode.s === r2 && t2.wrapMode.t === r2;
    return !n$k(e2.gl) && (t2.hasMipmap || !i2);
  }
  makePowerOfTwoTexture(t2, r2, i2, s2, a2) {
    const { width: o2, height: n2 } = i2, h2 = u$j(o2), l2 = u$j(n2);
    let m2;
    switch (s2.width = h2, s2.height = l2, this.params.powerOfTwoResizeMode) {
      case 2:
        s2.textureCoordinateScaleFactor = [o2 / h2, n2 / l2], m2 = new o$p(t2, s2), m2.updateData(0, 0, 0, o2, n2, r2);
        break;
      case 1:
      case null:
      case void 0:
        m2 = this.stretchToPowerOfTwo(t2, r2, s2, a2);
        break;
      default:
        n$l(this.params.powerOfTwoResizeMode);
    }
    return s2.hasMipmap && m2.generateMipmap(), m2;
  }
  stretchToPowerOfTwo(e2, t2, r2, i2) {
    const s2 = new o$p(e2, r2), a2 = new r$u(e2, { colorTarget: 0, depthStencilTarget: 0 }, s2), o2 = new o$p(e2, { target: 3553, pixelFormat: r2.pixelFormat, dataType: 5121, wrapMode: 33071, samplingMode: 9729, flipped: !!r2.flipped, maxAnisotropy: 8, preMultiplyAlpha: r2.preMultiplyAlpha }, t2), n2 = i$5(e2);
    return this.drawStretchedTexture(e2, i2, a2, n2, o2, s2), this.requiresFrameUpdates ? this.powerOfTwoStretchInfo = { vao: n2, sourceTexture: o2, framebuffer: a2 } : (n2.dispose(true), o2.dispose(), a2.detachColorTexture(), e2.bindFramebuffer(null), a2.dispose()), s2;
  }
  drawStretchedTexture(e2, t2, r2, i2, s2, a2) {
    e2.bindFramebuffer(r2);
    const o2 = e2.getViewport();
    e2.setViewport(0, 0, a2.descriptor.width, a2.descriptor.height);
    const n2 = t2.program;
    e2.bindProgram(n2), n2.setUniform4f("color", 1, 1, 1, 1), n2.setUniform1i("tex", 0), e2.bindTexture(s2, 0), e2.bindVAO(i2), e2.setPipelineState(t2.pipeline), e2.drawArrays(5, 0, r$v(i2, "geometry")), e2.bindFramebuffer(null), e2.setViewport(o2.x, o2.y, o2.width, o2.height);
  }
  unload() {
    if (r$s(this.powerOfTwoStretchInfo)) {
      const { framebuffer: e2, vao: t2, sourceTexture: r2 } = this.powerOfTwoStretchInfo;
      t2.dispose(true), r2.dispose(), e2.dispose(), this.glTexture = null, this.powerOfTwoStretchInfo = null;
    }
    if (r$s(this.glTexture) && (this.glTexture.dispose(), this.glTexture = null), r$s(this.loadingController)) {
      const e2 = this.loadingController;
      this.loadingController = null, this.loadingPromise = null, e2.abort();
    }
    this.events.emit("unloaded");
  }
}
E.DDS_ENCODING = "image/vnd-ms.dds", E.BASIS_ENCODING = "image/x.basis";
class n$3 {
  constructor(r2) {
    this.streamDataRequester = r2;
  }
  loadJSON(r2, e2) {
    return __async(this, null, function* () {
      return this.load("json", r2, e2);
    });
  }
  loadBinary(r2, e2) {
    return __async(this, null, function* () {
      return G$4(r2) ? (a$o(e2), H$5(r2)) : this.load("binary", r2, e2);
    });
  }
  loadImage(r2, e2) {
    return __async(this, null, function* () {
      return this.load("image", r2, e2);
    });
  }
  load(o2, s2, t2) {
    return __async(this, null, function* () {
      if (t$t(this.streamDataRequester))
        return (yield U$6(s2, { responseType: c$1[o2] })).data;
      const n2 = yield o$r(this.streamDataRequester.request(s2, o2, t2));
      if (n2.ok === true)
        return n2.value;
      throw w$b(n2.error), new s$f("", `Request for resource failed: ${n2.error}`);
    });
  }
}
const c$1 = { image: "image", binary: "array-buffer", json: "json" };
function f$2(e2, t2, r2) {
  const f2 = e2.typedBuffer, n2 = e2.typedBufferStride, d2 = t2.typedBuffer, o2 = t2.typedBufferStride, s2 = r2 ? r2.count : t2.count;
  let u2 = (r2 && r2.dstIndex ? r2.dstIndex : 0) * n2, p2 = (r2 && r2.srcIndex ? r2.srcIndex : 0) * o2;
  for (let c2 = 0; c2 < s2; ++c2)
    f2[u2] = d2[p2], f2[u2 + 1] = d2[p2 + 1], u2 += n2, p2 += o2;
}
function n$2(n2, d2, o2) {
  const s2 = n2.typedBuffer, u2 = n2.typedBufferStride, p2 = d2.typedBuffer, c2 = d2.typedBufferStride, l2 = o2 ? o2.count : d2.count;
  let y2 = (o2 && o2.dstIndex ? o2.dstIndex : 0) * u2, i2 = (o2 && o2.srcIndex ? o2.srcIndex : 0) * c2;
  if (u$k(d2.elementType)) {
    const e2 = c$j(d2.elementType);
    if (r$w(d2.elementType))
      for (let t2 = 0; t2 < l2; ++t2)
        s2[y2] = Math.max(p2[i2] / e2, -1), s2[y2 + 1] = Math.max(p2[i2 + 1] / e2, -1), y2 += u2, i2 += c2;
    else
      for (let t2 = 0; t2 < l2; ++t2)
        s2[y2] = p2[i2] / e2, s2[y2 + 1] = p2[i2 + 1] / e2, y2 += u2, i2 += c2;
  } else
    f$2(n2, d2, o2);
  return n2;
}
Object.freeze({ __proto__: null, copy: f$2, normalizeIntegerBuffer: n$2 });
function e$5(e2, t2, r2) {
  const d2 = e2.typedBuffer, f2 = e2.typedBufferStride, n2 = t2.typedBuffer, c2 = t2.typedBufferStride, o2 = r2 ? r2.count : t2.count;
  let u2 = (r2 && r2.dstIndex ? r2.dstIndex : 0) * f2, p2 = (r2 && r2.srcIndex ? r2.srcIndex : 0) * c2;
  for (let s2 = 0; s2 < o2; ++s2)
    d2[u2] = n2[p2], d2[u2 + 1] = n2[p2 + 1], d2[u2 + 2] = n2[p2 + 2], u2 += f2, p2 += c2;
}
Object.freeze({ __proto__: null, copy: e$5 });
function e$4(e2, t2, d2) {
  const f2 = e2.typedBuffer, n2 = e2.typedBufferStride, r2 = t2.typedBuffer, o2 = t2.typedBufferStride, c2 = d2 ? d2.count : t2.count;
  let u2 = (d2 && d2.dstIndex ? d2.dstIndex : 0) * n2, s2 = (d2 && d2.srcIndex ? d2.srcIndex : 0) * o2;
  for (let p2 = 0; p2 < c2; ++p2)
    f2[u2] = r2[s2], f2[u2 + 1] = r2[s2 + 1], f2[u2 + 2] = r2[s2 + 2], f2[u2 + 3] = r2[s2 + 3], u2 += n2, s2 += o2;
}
function t$6(e2, t2, d2, f2, n2, r2) {
  const o2 = e2.typedBuffer, c2 = e2.typedBufferStride, u2 = r2 ? r2.count : e2.count;
  let s2 = (r2 && r2.dstIndex ? r2.dstIndex : 0) * c2;
  for (let p2 = 0; p2 < u2; ++p2)
    o2[s2] = t2, o2[s2 + 1] = d2, o2[s2 + 2] = f2, o2[s2 + 3] = n2, s2 += c2;
}
Object.freeze({ __proto__: null, copy: e$4, fill: t$6 });
function e$3(e2, t2, r2) {
  const d2 = e2.typedBuffer, f2 = e2.typedBufferStride, n2 = t2.typedBuffer, o2 = t2.typedBufferStride, c2 = r2 ? r2.count : t2.count;
  let u2 = (r2 && r2.dstIndex ? r2.dstIndex : 0) * f2, p2 = (r2 && r2.srcIndex ? r2.srcIndex : 0) * o2;
  for (let s2 = 0; s2 < c2; ++s2) {
    for (let e3 = 0; e3 < 9; ++e3)
      d2[u2 + e3] = n2[p2 + e3];
    u2 += f2, p2 += o2;
  }
}
Object.freeze({ __proto__: null, copy: e$3 });
function e$2(e2, t2, r2) {
  const d2 = e2.typedBuffer, f2 = e2.typedBufferStride, n2 = t2.typedBuffer, o2 = t2.typedBufferStride, c2 = r2 ? r2.count : t2.count;
  let u2 = (r2 && r2.dstIndex ? r2.dstIndex : 0) * f2, p2 = (r2 && r2.srcIndex ? r2.srcIndex : 0) * o2;
  for (let s2 = 0; s2 < c2; ++s2) {
    for (let e3 = 0; e3 < 16; ++e3)
      d2[u2 + e3] = n2[p2 + e3];
    u2 += f2, p2 += o2;
  }
}
Object.freeze({ __proto__: null, copy: e$2 });
function e$1(e2, t2, r2) {
  const n2 = e2.typedBuffer, o2 = e2.typedBufferStride, c2 = t2.typedBuffer, d2 = t2.typedBufferStride, f2 = r2 ? r2.count : t2.count;
  let s2 = (r2 && r2.dstIndex ? r2.dstIndex : 0) * o2, u2 = (r2 && r2.srcIndex ? r2.srcIndex : 0) * d2;
  for (let p2 = 0; p2 < f2; ++p2)
    n2[s2] = c2[u2], s2 += o2, u2 += d2;
}
function t$5(e2, t2) {
  const r2 = e2.count;
  t2 || (t2 = new e2.TypedArrayConstructor(r2));
  for (let n2 = 0; n2 < r2; n2++)
    t2[n2] = e2.get(n2);
  return t2;
}
Object.freeze({ __proto__: null, copy: e$1, makeDense: t$5 });
function r$3(s2, r2) {
  return new s2(new ArrayBuffer(r2 * s2.ElementCount * e$q(s2.ElementType)));
}
const o$3 = n$e.getLogger("esri.views.3d.glTF");
class t$4 {
  error(r2) {
    throw new s$f("gltf-loader-error", r2);
  }
  errorUnsupported(r2) {
    throw new s$f("gltf-loader-unsupported-feature", r2);
  }
  errorUnsupportedIf(r2, e2) {
    r2 && this.errorUnsupported(e2);
  }
  assert(r2, e2) {
    r2 || this.error(e2);
  }
  warn(r2) {
    o$3.warn(r2);
  }
  warnUnsupported(r2) {
    this.warn("[Unsupported Feature] " + r2);
  }
  warnUnsupportedIf(r2, e2) {
    r2 && this.warnUnsupported(e2);
  }
}
function e(e2 = {}) {
  return __spreadValues({ color: [1, 1, 1], opacity: 1, alphaMode: "OPAQUE", alphaCutoff: 0.5, doubleSided: false, castShadows: true, receiveShadows: true, receiveAmbientOcclustion: true, textureColor: null, textureNormal: null, textureOcclusion: null, textureEmissive: null, textureMetallicRoughness: null, emissiveFactor: [0, 0, 0], metallicFactor: 1, roughnessFactor: 1, colorMixMode: "multiply" }, e2);
}
function t$3(e2, t2 = {}) {
  return { data: e2, parameters: __spreadValues({ wrap: __spreadValues({ s: 10497, t: 10497 }, t2.wrap), noUnpackFlip: true, mipmap: false }, t2) };
}
class t$2 {
  constructor(t2) {
    this.data = t2, this.offset4 = 0, this.dataUint32 = new Uint32Array(this.data, 0, Math.floor(this.data.byteLength / 4));
  }
  readUint32() {
    const t2 = this.offset4;
    return this.offset4 += 1, this.dataUint32[t2];
  }
  readUint8Array(t2) {
    const s2 = 4 * this.offset4;
    return this.offset4 += t2 / 4, new Uint8Array(this.data, s2, t2);
  }
  remainingBytes() {
    return this.data.byteLength - 4 * this.offset4;
  }
}
const o$2 = { baseColorFactor: [1, 1, 1, 1], metallicFactor: 1, roughnessFactor: 1 }, r$2 = { pbrMetallicRoughness: o$2, emissiveFactor: [0, 0, 0], alphaMode: "OPAQUE", alphaCutoff: 0.5, doubleSided: false }, t$1 = { ESRI_externalColorMixMode: "tint" }, a = (e2 = {}) => {
  const a2 = __spreadValues(__spreadValues({}, o$2), e2.pbrMetallicRoughness), i2 = l$1(__spreadValues(__spreadValues({}, t$1), e2.extras));
  return __spreadProps(__spreadValues(__spreadValues({}, r$2), e2), { pbrMetallicRoughness: a2, extras: i2 });
};
function l$1(o2) {
  switch (o2.ESRI_externalColorMixMode) {
    case "multiply":
    case "tint":
    case "ignore":
    case "replace":
      break;
    default:
      n$l(o2.ESRI_externalColorMixMode), o2.ESRI_externalColorMixMode = "tint";
  }
  return o2;
}
const i$1 = { magFilter: 9729, minFilter: 9987, wrapS: 10497, wrapT: 10497 }, s = (e2) => __spreadValues(__spreadValues({}, i$1), e2);
function r$1(r2) {
  let e2, t2;
  return r2.replace(/^(.*\/)?([^/]*)$/, (r3, a2, i2) => (e2 = a2 || "", t2 = i2 || "", "")), { dirPart: e2, filePart: t2 };
}
const D = { MAGIC: 1179937895, CHUNK_TYPE_JSON: 1313821514, CHUNK_TYPE_BIN: 5130562, MIN_HEADER_LENGTH: 20 };
class j$1 {
  constructor(e2, t2, r2, n2, o2) {
    this.context = e2, this.errorContext = t2, this.uri = r2, this.json = n2, this.glbBuffer = o2, this.bufferCache = new Map(), this.textureCache = new Map(), this.materialCache = new Map(), this.nodeParentMap = new Map(), this.nodeTransformCache = new Map(), this.baseUri = r$1(this.uri).dirPart, this.checkVersionSupported(), this.checkRequiredExtensionsSupported(), t2.errorUnsupportedIf(n2.scenes == null, "Scenes must be defined."), t2.errorUnsupportedIf(n2.meshes == null, "Meshes must be defined"), t2.errorUnsupportedIf(n2.nodes == null, "Nodes must be defined."), this.computeNodeParents();
  }
  static load(e2, o2, s2, a2) {
    return __async(this, null, function* () {
      if (G$4(s2)) {
        const t2 = V$4(s2);
        if (t2.mediaType !== "model/gltf-binary")
          try {
            const r2 = JSON.parse(t2.isBase64 ? atob(t2.data) : t2.data);
            return new j$1(e2, o2, s2, r2);
          } catch (e3) {
          }
        const a3 = H$5(s2);
        if (j$1.isGLBData(a3))
          return this.fromGLBData(e2, o2, s2, a3);
      }
      if (s2.endsWith(".gltf")) {
        const t2 = yield e2.loadJSON(s2, a2);
        return new j$1(e2, o2, s2, t2);
      }
      const i2 = yield e2.loadBinary(s2, a2);
      if (j$1.isGLBData(i2))
        return this.fromGLBData(e2, o2, s2, i2);
      const u2 = yield e2.loadJSON(s2, a2);
      return new j$1(e2, o2, s2, u2);
    });
  }
  static isGLBData(e2) {
    const t2 = new t$2(e2);
    return t2.remainingBytes() >= 4 && t2.readUint32() === D.MAGIC;
  }
  static fromGLBData(e2, t2, r2, n2) {
    return __async(this, null, function* () {
      const o2 = yield j$1.parseGLBData(t2, n2);
      return new j$1(e2, t2, r2, o2.json, o2.binaryData);
    });
  }
  static parseGLBData(e2, t2) {
    return __async(this, null, function* () {
      const r2 = new t$2(t2);
      e2.assert(r2.remainingBytes() >= 12, "GLB binary data is insufficiently large.");
      const n2 = r2.readUint32(), o2 = r2.readUint32(), s2 = r2.readUint32();
      e2.assert(n2 === D.MAGIC, "Magic first 4 bytes do not fit to expected GLB value."), e2.assert(t2.byteLength >= s2, "GLB binary data is smaller than header specifies."), e2.errorUnsupportedIf(o2 !== 2, "An unsupported GLB container version was detected. Only version 2 is supported.");
      let a2, i2, u2 = 0;
      for (; r2.remainingBytes() >= 8; ) {
        const t3 = r2.readUint32(), n3 = r2.readUint32();
        u2 === 0 ? (e2.assert(n3 === D.CHUNK_TYPE_JSON, "First GLB chunk must be JSON."), e2.assert(t3 >= 0, "No JSON data found."), a2 = yield X(r2.readUint8Array(t3))) : u2 === 1 ? (e2.errorUnsupportedIf(n3 !== D.CHUNK_TYPE_BIN, "Second GLB chunk expected to be BIN."), i2 = r2.readUint8Array(t3)) : e2.warnUnsupported("More than 2 GLB chunks detected. Skipping."), u2 += 1;
      }
      return a2 || e2.error("No GLB JSON chunk detected."), { json: a2, binaryData: i2 };
    });
  }
  getBuffer(e2, t2) {
    return __async(this, null, function* () {
      const r2 = this.json.buffers[e2], n2 = this.errorContext;
      if (r2.uri == null)
        return n2.assert(this.glbBuffer != null, "GLB buffer not present"), this.glbBuffer;
      let o2 = this.bufferCache.get(e2);
      if (!o2) {
        const s2 = yield this.context.loadBinary(this.resolveUri(r2.uri), t2);
        o2 = new Uint8Array(s2), this.bufferCache.set(e2, o2), n2.assert(o2.byteLength === r2.byteLength, "Buffer byte lengths should match.");
      }
      return o2;
    });
  }
  getAccessor(e2, t2) {
    return __async(this, null, function* () {
      const r2 = this.json.accessors[e2], n2 = this.errorContext;
      n2.errorUnsupportedIf(r2.bufferView == null, "Some accessor does not specify a bufferView."), n2.errorUnsupportedIf(r2.type in ["MAT2", "MAT3", "MAT4"], `AttributeType ${r2.type} is not supported`);
      const o2 = this.json.bufferViews[r2.bufferView], s2 = yield this.getBuffer(o2.buffer, t2), a2 = F[r2.type], i2 = k[r2.componentType], u2 = a2 * i2, c2 = o2.byteStride || u2;
      return { raw: s2.buffer, byteStride: c2, byteOffset: s2.byteOffset + (o2.byteOffset || 0) + (r2.byteOffset || 0), entryCount: r2.count, isDenselyPacked: c2 === u2, componentCount: a2, componentByteSize: i2, componentType: r2.componentType, min: r2.min, max: r2.max, normalized: !!r2.normalized };
    });
  }
  getIndexData(e2, t2) {
    return __async(this, null, function* () {
      if (e2.indices == null)
        return null;
      const r2 = yield this.getAccessor(e2.indices, t2);
      if (r2.isDenselyPacked)
        switch (r2.componentType) {
          case 5121:
            return new Uint8Array(r2.raw, r2.byteOffset, r2.entryCount);
          case 5123:
            return new Uint16Array(r2.raw, r2.byteOffset, r2.entryCount);
          case 5125:
            return new Uint32Array(r2.raw, r2.byteOffset, r2.entryCount);
        }
      else
        switch (r2.componentType) {
          case 5121:
            return t$5(this.wrapAccessor(h$e, r2));
          case 5123:
            return t$5(this.wrapAccessor(g$8, r2));
          case 5125:
            return t$5(this.wrapAccessor(F$7, r2));
        }
    });
  }
  getPositionData(e2, t2) {
    return __async(this, null, function* () {
      const r2 = this.errorContext;
      r2.errorUnsupportedIf(e2.attributes.POSITION == null, "No POSITION vertex data found.");
      const n2 = yield this.getAccessor(e2.attributes.POSITION, t2);
      return r2.errorUnsupportedIf(n2.componentType !== 5126, "Expected type FLOAT for POSITION vertex attribute, but found " + q$1[n2.componentType]), r2.errorUnsupportedIf(n2.componentCount !== 3, "POSITION vertex attribute must have 3 components, but found " + n2.componentCount.toFixed()), this.wrapAccessor(a$m, n2);
    });
  }
  getNormalData(e2, t2) {
    return __async(this, null, function* () {
      const r2 = this.errorContext;
      r2.assert(e2.attributes.NORMAL != null, "No NORMAL vertex data found.");
      const n2 = yield this.getAccessor(e2.attributes.NORMAL, t2);
      return r2.errorUnsupportedIf(n2.componentType !== 5126, "Expected type FLOAT for NORMAL vertex attribute, but found " + q$1[n2.componentType]), r2.errorUnsupportedIf(n2.componentCount !== 3, "NORMAL vertex attribute must have 3 components, but found " + n2.componentCount.toFixed()), this.wrapAccessor(a$m, n2);
    });
  }
  getTangentData(e2, t2) {
    return __async(this, null, function* () {
      const r2 = this.errorContext;
      r2.assert(e2.attributes.TANGENT != null, "No TANGENT vertex data found.");
      const n2 = yield this.getAccessor(e2.attributes.TANGENT, t2);
      return r2.errorUnsupportedIf(n2.componentType !== 5126, "Expected type FLOAT for TANGENT vertex attribute, but found " + q$1[n2.componentType]), r2.errorUnsupportedIf(n2.componentCount !== 4, "TANGENT vertex attribute must have 4 components, but found " + n2.componentCount.toFixed()), new p$b(n2.raw, n2.byteOffset, n2.byteStride, n2.byteOffset + n2.byteStride * n2.entryCount);
    });
  }
  getTextureCoordinates(e2, t2) {
    return __async(this, null, function* () {
      const r2 = this.errorContext;
      r2.assert(e2.attributes.TEXCOORD_0 != null, "No TEXCOORD_0 vertex data found.");
      const n2 = yield this.getAccessor(e2.attributes.TEXCOORD_0, t2);
      return r2.errorUnsupportedIf(n2.componentCount !== 2, "TEXCOORD_0 vertex attribute must have 2 components, but found " + n2.componentCount.toFixed()), n2.componentType === 5126 ? this.wrapAccessor(u$h, n2) : (r2.errorUnsupportedIf(!n2.normalized, "Integer component types are only supported for a normalized accessor for TEXCOORD_0."), V(n2));
    });
  }
  getVertexColors(e2, t2) {
    return __async(this, null, function* () {
      const r2 = this.errorContext;
      r2.assert(e2.attributes.COLOR_0 != null, "No COLOR_0 vertex data found.");
      const n2 = yield this.getAccessor(e2.attributes.COLOR_0, t2);
      if (r2.errorUnsupportedIf(n2.componentCount !== 4 && n2.componentCount !== 3, "COLOR_0 attribute must have 3 or 4 components, but found " + n2.componentCount.toFixed()), n2.componentCount === 4) {
        if (n2.componentType === 5126)
          return this.wrapAccessor(p$b, n2);
        if (n2.componentType === 5121)
          return this.wrapAccessor(x$8, n2);
        if (n2.componentType === 5123)
          return this.wrapAccessor(L$6, n2);
      } else if (n2.componentCount === 3) {
        if (n2.componentType === 5126)
          return this.wrapAccessor(a$m, n2);
        if (n2.componentType === 5121)
          return this.wrapAccessor(O$6, n2);
        if (n2.componentType === 5123)
          return this.wrapAccessor(E$9, n2);
      }
      r2.errorUnsupported("Unsupported component type for COLOR_0 attribute: " + q$1[n2.componentType]);
    });
  }
  hasPositions(e2) {
    return e2.attributes.POSITION !== void 0;
  }
  hasNormals(e2) {
    return e2.attributes.NORMAL !== void 0;
  }
  hasVertexColors(e2) {
    return e2.attributes.COLOR_0 !== void 0;
  }
  hasTextureCoordinates(e2) {
    return e2.attributes.TEXCOORD_0 !== void 0;
  }
  hasTangents(e2) {
    return e2.attributes.TANGENT !== void 0;
  }
  getMaterial(e2, t2, r2) {
    return __async(this, null, function* () {
      const n2 = this.errorContext;
      let o2 = this.materialCache.get(e2.material);
      if (!o2) {
        const s2 = e2.material != null ? a(this.json.materials[e2.material]) : a(), a$12 = s2.pbrMetallicRoughness, i2 = this.hasVertexColors(e2);
        let u2, c2, p2, d2, f2;
        a$12.baseColorTexture && (n2.errorUnsupportedIf((a$12.baseColorTexture.texCoord || 0) !== 0, "Only TEXCOORD with index 0 is supported."), u2 = yield this.getTexture(a$12.baseColorTexture.index, t2)), s2.normalTexture && ((s2.normalTexture.texCoord || 0) !== 0 ? n2.warnUnsupported("Only TEXCOORD with index 0 is supported for the normal map texture.") : c2 = yield this.getTexture(s2.normalTexture.index, t2)), s2.occlusionTexture && r2 && ((s2.occlusionTexture.texCoord || 0) !== 0 ? n2.warnUnsupported("Only TEXCOORD with index 0 is supported for the occlusion texture.") : p2 = yield this.getTexture(s2.occlusionTexture.index, t2)), s2.emissiveTexture && r2 && ((s2.emissiveTexture.texCoord || 0) !== 0 ? n2.warnUnsupported("Only TEXCOORD with index 0 is supported for the emissive texture.") : d2 = yield this.getTexture(s2.emissiveTexture.index, t2)), a$12.metallicRoughnessTexture && r2 && ((a$12.metallicRoughnessTexture.texCoord || 0) !== 0 ? n2.warnUnsupported("Only TEXCOORD with index 0 is supported for the metallicRoughness texture.") : f2 = yield this.getTexture(a$12.metallicRoughnessTexture.index, t2));
        const l2 = e2.material != null ? e2.material : -1;
        o2 = { alphaMode: s2.alphaMode, alphaCutoff: s2.alphaCutoff, color: a$12.baseColorFactor, doubleSided: !!s2.doubleSided, colorTexture: u2, normalTexture: c2, name: s2.name, id: l2, occlusionTexture: p2, emissiveTexture: d2, emissiveFactor: s2.emissiveFactor, metallicFactor: a$12.metallicFactor, roughnessFactor: a$12.roughnessFactor, metallicRoughnessTexture: f2, vertexColors: i2, ESRI_externalColorMixMode: s2.extras.ESRI_externalColorMixMode };
      }
      return o2;
    });
  }
  getTexture(e2, t2) {
    return __async(this, null, function* () {
      const r2 = this.errorContext, n2 = this.json.textures[e2], o2 = s(n2.sampler != null ? this.json.samplers[n2.sampler] : {});
      r2.errorUnsupportedIf(n2.source == null, "Source is expected to be defined for a texture.");
      const s$12 = this.json.images[n2.source];
      let a2 = this.textureCache.get(e2);
      if (!a2) {
        let n3;
        if (s$12.uri)
          n3 = yield this.context.loadImage(this.resolveUri(s$12.uri), t2);
        else {
          r2.errorUnsupportedIf(s$12.bufferView == null, "Image bufferView must be defined."), r2.errorUnsupportedIf(s$12.mimeType == null, "Image mimeType must be defined.");
          const e3 = this.json.bufferViews[s$12.bufferView], o3 = yield this.getBuffer(e3.buffer, t2);
          r2.errorUnsupportedIf(e3.byteStride != null, "byteStride not supported for image buffer"), n3 = yield J$1(new Uint8Array(o3.buffer, o3.byteOffset + (e3.byteOffset || 0), e3.byteLength), s$12.mimeType);
        }
        a2 = { data: n3, wrapS: o2.wrapS, wrapT: o2.wrapT, minFilter: o2.minFilter, name: s$12.name, id: e2 }, this.textureCache.set(e2, a2);
      }
      return a2;
    });
  }
  getNodeTransform(e2) {
    if (e2 === void 0)
      return _;
    let t2 = this.nodeTransformCache.get(e2);
    if (!t2) {
      const r2 = this.getNodeTransform(this.getNodeParent(e2)), n2 = this.json.nodes[e2];
      n2.matrix ? t2 = e$l(e$i(), r2, n2.matrix) : n2.translation || n2.rotation || n2.scale ? (t2 = r$o(r2), n2.translation && c$h(t2, t2, n2.translation), n2.rotation && (P[3] = I$8(P, n2.rotation), f$h(t2, t2, P[3], P)), n2.scale && i$i(t2, t2, n2.scale)) : t2 = r2, this.nodeTransformCache.set(e2, t2);
    }
    return t2;
  }
  wrapAccessor(e2, t2) {
    return new e2(t2.raw, t2.byteOffset, t2.byteStride, t2.byteOffset + t2.byteStride * (t2.entryCount - 1) + t2.componentByteSize * t2.componentCount);
  }
  resolveUri(e2) {
    return T$4(e2, this.baseUri);
  }
  getNodeParent(e2) {
    return this.nodeParentMap.get(e2);
  }
  checkVersionSupported() {
    const e2 = r$x.parse(this.json.asset.version, "glTF");
    G.validate(e2);
  }
  checkRequiredExtensionsSupported() {
    const e2 = this.json, t2 = this.errorContext;
    e2.extensionsRequired && e2.extensionsRequired.length !== 0 && t2.errorUnsupported("gltf loader was not able to load unsupported feature. Required extensions: " + e2.extensionsRequired.join(", "));
  }
  computeNodeParents() {
    this.json.nodes.forEach((e2, t2) => {
      e2.children && e2.children.forEach((e3) => {
        this.nodeParentMap.set(e3, t2);
      });
    });
  }
}
const G = new r$x(2, 0, "glTF"), _ = g$7(e$i(), Math.PI / 2), P = e$r(), F = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4 }, k = { 5120: 1, 5121: 1, 5122: 2, 5123: 2, 5126: 4, 5125: 4 };
function V(t2) {
  switch (t2.componentType) {
    case 5120:
      return new M$7(t2.raw, t2.byteOffset, t2.byteStride, t2.byteOffset + t2.byteStride * t2.entryCount);
    case 5121:
      return new A$a(t2.raw, t2.byteOffset, t2.byteStride, t2.byteOffset + t2.byteStride * t2.entryCount);
    case 5122:
      return new v$8(t2.raw, t2.byteOffset, t2.byteStride, t2.byteOffset + t2.byteStride * t2.entryCount);
    case 5123:
      return new w$c(t2.raw, t2.byteOffset, t2.byteStride, t2.byteOffset + t2.byteStride * t2.entryCount);
    case 5125:
      return new I$9(t2.raw, t2.byteOffset, t2.byteStride, t2.byteOffset + t2.byteStride * t2.entryCount);
    case 5126:
      return new u$h(t2.raw, t2.byteOffset, t2.byteStride, t2.byteOffset + t2.byteStride * t2.entryCount);
    default:
      return void n$l(t2.componentType);
  }
}
function X(e2) {
  return __async(this, null, function* () {
    return new Promise((t2, r2) => {
      const n2 = new Blob([e2]), o2 = new FileReader();
      o2.onload = () => {
        const e3 = o2.result;
        t2(JSON.parse(e3));
      }, o2.onerror = (e3) => {
        r2(e3);
      }, o2.readAsText(n2);
    });
  });
}
function J$1(e2, t2) {
  return __async(this, null, function* () {
    return new Promise((r2, n2) => {
      const o2 = new Blob([e2], { type: t2 }), s2 = URL.createObjectURL(o2), a2 = new Image();
      a2.addEventListener("load", () => {
        URL.revokeObjectURL(s2), "decode" in a2 ? a2.decode().then(() => r2(a2), () => r2(a2)) : r2(a2);
      }), a2.addEventListener("error", (e3) => {
        URL.revokeObjectURL(s2), n2(e3);
      }), a2.src = s2;
    });
  });
}
const q$1 = { 5120: "BYTE", 5121: "UNSIGNED_BYTE", 5122: "SHORT", 5123: "UNSIGNED_SHORT", 5125: "UNSIGNED_INT", 5126: "FLOAT" };
let n$1 = 0;
function l(_0, _1) {
  return __async(this, arguments, function* (r2, s2, a2 = {}, l2 = true) {
    const d2 = yield j$1.load(r2, f$1, s2, a2), x2 = "gltf_" + n$1++, h2 = { lods: [], materials: new Map(), textures: new Map(), meta: c(d2) }, w2 = !(!d2.json.asset.extras || d2.json.asset.extras.ESRI_type !== "symbolResource");
    return yield m(d2, (r3, s3, i2, n2) => __async(this, null, function* () {
      const c2 = r3.mode !== void 0 ? r3.mode : 4, m2 = u(c2);
      if (t$t(m2))
        return void f$1.warnUnsupported("Unsupported primitive mode (" + T[c2] + "). Skipping primitive.");
      if (!d2.hasPositions(r3))
        return void f$1.warn("Skipping primitive without POSITION vertex attribute.");
      const w3 = yield d2.getMaterial(r3, a2, l2), S2 = { transform: r$o(s3), attributes: { position: yield d2.getPositionData(r3, a2), normal: null, texCoord0: null, color: null, tangent: null }, indices: yield d2.getIndexData(r3, a2), primitiveType: m2, material: p(h2, w3, x2) };
      d2.hasNormals(r3) && (S2.attributes.normal = yield d2.getNormalData(r3, a2)), d2.hasTangents(r3) && (S2.attributes.tangent = yield d2.getTangentData(r3, a2)), d2.hasTextureCoordinates(r3) && (S2.attributes.texCoord0 = yield d2.getTextureCoordinates(r3, a2)), d2.hasVertexColors(r3) && (S2.attributes.color = yield d2.getVertexColors(r3, a2));
      let g2 = null;
      r$s(h2.meta) && r$s(h2.meta.ESRI_lod) && h2.meta.ESRI_lod.metric === "screenSpaceRadius" && (g2 = h2.meta.ESRI_lod.thresholds[i2]), h2.lods[i2] = h2.lods[i2] || { parts: [], name: n2, lodThreshold: g2 }, h2.lods[i2].parts.push(S2);
    })), { model: h2, meta: { isEsriSymbolResource: w2, uri: d2.uri }, customMeta: {} };
  });
}
function u(e2) {
  switch (e2) {
    case 4:
    case 5:
    case 6:
      return e2;
    default:
      return null;
  }
}
function c(t2) {
  const o2 = t2.json;
  let r2 = null;
  return o2.nodes.forEach((t3) => {
    const o3 = t3.extras;
    r$s(o3) && (o3.ESRI_proxyEllipsoid || o3.ESRI_lod) && (r2 = o3);
  }), r2;
}
function m(e2, t2) {
  return __async(this, null, function* () {
    const o2 = e2.json, r2 = o2.scenes[o2.scene || 0].nodes, s2 = r2.length > 1;
    for (const i2 of r2) {
      const e3 = o2.nodes[i2], t3 = [a2(i2, 0)];
      if (d(e3) && !s2) {
        const o3 = e3.extensions.MSFT_lod.ids;
        t3.push(...o3.map((e4, t4) => a2(e4, t4 + 1)));
      }
      yield Promise.all(t3);
    }
    function a2(r3, s3) {
      return __async(this, null, function* () {
        const i2 = o2.nodes[r3], n2 = e2.getNodeTransform(r3);
        if (f$1.warnUnsupportedIf(i2.weights != null, "Morph targets are not supported."), i2.mesh != null) {
          const e3 = o2.meshes[i2.mesh];
          for (const o3 of e3.primitives)
            yield t2(o3, n2, s3, e3.name);
        }
        for (const e3 of i2.children || [])
          yield a2(e3, s3);
      });
    }
  });
}
function d(e2) {
  return e2.extensions && e2.extensions.MSFT_lod && Array.isArray(e2.extensions.MSFT_lod.ids);
}
function p(e$12, t2, o2) {
  const r2 = (t3) => {
    const r3 = `${o2}_tex_${t3 && t3.id}${t3 && t3.name ? "_" + t3.name : ""}`;
    if (t3 && !e$12.textures.has(r3)) {
      const o3 = t$3(t3.data, { wrap: { s: x$1(t3.wrapS), t: x$1(t3.wrapT) }, mipmap: h$1.some((e2) => e2 === t3.minFilter), noUnpackFlip: true });
      e$12.textures.set(r3, o3);
    }
    return r3;
  }, i2 = `${o2}_mat_${t2.id}_${t2.name}`;
  if (!e$12.materials.has(i2)) {
    const o3 = e({ color: [t2.color[0], t2.color[1], t2.color[2]], opacity: t2.color[3], alphaMode: t2.alphaMode, alphaCutoff: t2.alphaCutoff, doubleSided: t2.doubleSided, colorMixMode: t2.ESRI_externalColorMixMode, textureColor: t2.colorTexture ? r2(t2.colorTexture) : void 0, textureNormal: t2.normalTexture ? r2(t2.normalTexture) : void 0, textureOcclusion: t2.occlusionTexture ? r2(t2.occlusionTexture) : void 0, textureEmissive: t2.emissiveTexture ? r2(t2.emissiveTexture) : void 0, textureMetallicRoughness: t2.metallicRoughnessTexture ? r2(t2.metallicRoughnessTexture) : void 0, emissiveFactor: [t2.emissiveFactor[0], t2.emissiveFactor[1], t2.emissiveFactor[2]], metallicFactor: t2.metallicFactor, roughnessFactor: t2.roughnessFactor });
    e$12.materials.set(i2, o3);
  }
  return i2;
}
function x$1(e2) {
  if (e2 === 33071 || e2 === 33648 || e2 === 10497)
    return e2;
  f$1.error(`Unexpected TextureSampler WrapMode: ${e2}`);
}
const f$1 = new t$4(), h$1 = [9987, 9985], T = ["POINTS", "LINES", "LINE_LOOP", "LINE_STRIP", "TRIANGLES", "TRIANGLE_STRIP", "TRIANGLE_FAN"];
function n(n2) {
  return typeof n2 == "number" ? i$e(n2) : u$l(n2) || c$i(n2) ? new Uint32Array(n2) : n2;
}
function o$1(t2) {
  const e2 = typeof t2 == "number" ? t2 : t2.length;
  if (e2 < 3)
    return new Uint16Array(0);
  const r2 = e2 - 2, n2 = r2 <= 65536 ? new Uint16Array(3 * r2) : new Uint32Array(3 * r2);
  if (typeof t2 == "number") {
    let t3 = 0;
    for (let e3 = 0; e3 < r2; e3 += 1)
      e3 % 2 == 0 ? (n2[t3++] = e3, n2[t3++] = e3 + 1, n2[t3++] = e3 + 2) : (n2[t3++] = e3 + 1, n2[t3++] = e3, n2[t3++] = e3 + 2);
  } else {
    let e3 = 0;
    for (let o2 = 0; o2 < r2; o2 += 1)
      if (o2 % 2 == 0) {
        const r3 = t2[o2], i2 = t2[o2 + 1], f2 = t2[o2 + 2];
        n2[e3++] = r3, n2[e3++] = i2, n2[e3++] = f2;
      } else {
        const r3 = t2[o2 + 1], i2 = t2[o2], f2 = t2[o2 + 2];
        n2[e3++] = r3, n2[e3++] = i2, n2[e3++] = f2;
      }
  }
  return n2;
}
function i(t2) {
  const e2 = typeof t2 == "number" ? t2 : t2.length;
  if (e2 < 3)
    return new Uint16Array(0);
  const r2 = e2 - 2, n2 = r2 <= 65536 ? new Uint16Array(3 * r2) : new Uint32Array(3 * r2);
  if (typeof t2 == "number") {
    let t3 = 0;
    for (let e3 = 0; e3 < r2; ++e3)
      n2[t3++] = 0, n2[t3++] = e3 + 1, n2[t3++] = e3 + 2;
    return n2;
  }
  {
    const e3 = t2[0];
    let o2 = t2[1], i2 = 0;
    for (let f2 = 0; f2 < r2; ++f2) {
      const r3 = t2[f2 + 2];
      n2[i2++] = e3, n2[i2++] = o2, n2[i2++] = r3, o2 = r3;
    }
    return n2;
  }
}
const y = n$e.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");
function x(e2, t2) {
  return __async(this, null, function* () {
    const r2 = yield g(e2, t2);
    return { resource: r2, textures: yield A(r2.textureDefinitions, t2) };
  });
}
function g(r2, n2) {
  return __async(this, null, function* () {
    const i2 = r$s(n2) && n2.streamDataRequester;
    if (i2)
      return h(r2, i2, n2);
    const u2 = yield o$r(U$6(r2, e$s(n2)));
    if (u2.ok === true)
      return u2.value.data;
    w$b(u2.error), w(u2.error);
  });
}
function h(e2, t2, r2) {
  return __async(this, null, function* () {
    const n2 = yield o$r(t2.request(e2, "json", r2));
    if (n2.ok === true)
      return n2.value;
    w$b(n2.error), w(n2.error.details.url);
  });
}
function w(e2) {
  throw new s$f("", `Request for object resource failed: ${e2}`);
}
function v(e2) {
  const t2 = e2.params, r2 = t2.topology;
  let n2 = true;
  switch (t2.vertexAttributes || (y.warn("Geometry must specify vertex attributes"), n2 = false), t2.topology) {
    case "PerAttributeArray":
      break;
    case "Indexed":
    case null:
    case void 0: {
      const e3 = t2.faces;
      if (e3) {
        if (t2.vertexAttributes)
          for (const r3 in t2.vertexAttributes) {
            const t3 = e3[r3];
            t3 && t3.values ? (t3.valueType != null && t3.valueType !== "UInt32" && (y.warn(`Unsupported indexed geometry indices type '${t3.valueType}', only UInt32 is currently supported`), n2 = false), t3.valuesPerElement != null && t3.valuesPerElement !== 1 && (y.warn(`Unsupported indexed geometry values per element '${t3.valuesPerElement}', only 1 is currently supported`), n2 = false)) : (y.warn(`Indexed geometry does not specify face indices for '${r3}' attribute`), n2 = false);
          }
      } else
        y.warn("Indexed geometries must specify faces"), n2 = false;
      break;
    }
    default:
      y.warn(`Unsupported topology '${r2}'`), n2 = false;
  }
  e2.params.material || (y.warn("Geometry requires material"), n2 = false);
  const a2 = e2.params.vertexAttributes;
  for (const s2 in a2) {
    a2[s2].values || (y.warn("Geometries with externally defined attributes are not yet supported"), n2 = false);
  }
  return n2;
}
function b(t2, r2) {
  const n2 = [], a2 = [], s2 = [], o2 = [], l2 = t2.resource, c2 = r$x.parse(l2.version || "1.0", "wosr");
  I.validate(c2);
  const p2 = l2.model.name, y2 = l2.model.geometries, x2 = l2.materialDefinitions, g2 = t2.textures;
  let h2 = 0;
  const w2 = new Map();
  for (let u2 = 0; u2 < y2.length; u2++) {
    const t3 = y2[u2];
    if (!v(t3))
      continue;
    const l3 = M(t3), c3 = t3.params.vertexAttributes, p3 = [];
    for (const e2 in c3) {
      const t4 = c3[e2], r3 = t4.values;
      p3.push([e2, { data: r3, size: t4.valuesPerElement, exclusive: true }]);
    }
    const b2 = [];
    if (t3.params.topology !== "PerAttributeArray") {
      const e2 = t3.params.faces;
      for (const t4 in e2)
        b2.push([t4, new Uint32Array(e2[t4].values)]);
    }
    const j2 = g2 && g2[l3.texture];
    if (j2 && !w2.has(l3.texture)) {
      const { image: e2, params: t4 } = j2, r3 = new E(e2, t4);
      o2.push(r3), w2.set(l3.texture, r3);
    }
    const A2 = w2.get(l3.texture), I2 = A2 ? A2.id : void 0;
    let P2 = s2[l3.material] ? s2[l3.material][l3.texture] : null;
    if (!P2) {
      const t4 = x2[l3.material.substring(l3.material.lastIndexOf("/") + 1)].params;
      t4.transparency === 1 && (t4.transparency = 0);
      const n3 = j2 && j2.alphaChannelUsage, a3 = t4.transparency > 0 || n3 === "transparency" || n3 === "maskAndTransparency", o3 = { ambient: e$t(t4.diffuse), diffuse: e$t(t4.diffuse), opacity: 1 - (t4.transparency || 0), transparent: a3, textureAlphaMode: j2 ? U(j2.alphaChannelUsage) : void 0, textureAlphaCutoff: 0.33, textureId: I2, initTextureTransparent: true, doubleSided: true, cullFace: 0, colorMixMode: t4.externalColorMixMode || "tint", textureAlphaPremultiplied: true };
      r$s(r2) && r2.materialParamsMixin && Object.assign(o3, r2.materialParamsMixin), P2 = new y$1(o3), s2[l3.material] || (s2[l3.material] = {}), s2[l3.material][l3.texture] = P2;
    }
    a2.push(P2);
    const T2 = new u$c(p3, b2);
    h2 += b2.position ? b2.position.length : 0, n2.push(T2);
  }
  return { name: p2, stageResources: { textures: o2, materials: a2, geometries: n2 }, pivotOffset: l2.model.pivotOffset, boundingBox: j(n2), numberOfVertices: h2, lodThreshold: null };
}
function j(t2) {
  const r2 = B$6();
  return t2.forEach((t3) => {
    const n2 = t3.boundingInfo;
    r$s(n2) && (h$f(r2, n2.getBBMin()), h$f(r2, n2.getBBMax()));
  }), r2;
}
function A(t2, r2) {
  return __async(this, null, function* () {
    const n2 = [];
    for (const o2 in t2) {
      const a3 = t2[o2], s3 = a3.images[0].data;
      if (!s3) {
        y.warn("Externally referenced texture data is not yet supported");
        continue;
      }
      const i2 = a3.encoding + ";base64," + s3, u2 = "/textureDefinitions/" + o2, l2 = { noUnpackFlip: true, wrap: { s: 10497, t: 10497 }, preMultiplyAlpha: true }, c2 = r$s(r2) && r2.disableTextures ? Promise.resolve(null) : t$y(i2, r2);
      n2.push(c2.then((e2) => ({ refId: u2, image: e2, params: l2, alphaChannelUsage: a3.channels === "rgba" ? a3.alphaChannelUsage || "transparency" : "none" })));
    }
    const a2 = yield Promise.all(n2), s2 = {};
    for (const e2 of a2)
      s2[e2.refId] = e2;
    return s2;
  });
}
function U(e2) {
  switch (e2) {
    case "mask":
      return 2;
    case "maskAndTransparency":
      return 3;
    case "none":
      return 1;
    case "transparency":
    default:
      return 0;
  }
}
function M(e2) {
  const t2 = e2.params;
  return { id: 1, material: t2.material, texture: t2.texture, region: t2.texture };
}
const I = new r$x(1, 2, "wosr");
function t(t2, r2, f2) {
  if (t2.count !== r2.count)
    return void e$h.error("source and destination buffers need to have the same number of elements");
  const o2 = t2.count, n2 = f2[0], u2 = f2[1], d2 = f2[2], s2 = f2[3], c2 = f2[4], i2 = f2[5], a2 = f2[6], p2 = f2[7], y2 = f2[8], B2 = f2[9], m2 = f2[10], h2 = f2[11], l2 = f2[12], S2 = f2[13], b2 = f2[14], v2 = f2[15], M2 = t2.typedBuffer, _2 = t2.typedBufferStride, j2 = r2.typedBuffer, g2 = r2.typedBufferStride;
  for (let e2 = 0; e2 < o2; e2++) {
    const t3 = e2 * _2, r3 = e2 * g2, f3 = j2[r3], o3 = j2[r3 + 1], w2 = j2[r3 + 2], x2 = j2[r3 + 3];
    M2[t3] = n2 * f3 + c2 * o3 + y2 * w2 + l2 * x2, M2[t3 + 1] = u2 * f3 + i2 * o3 + B2 * w2 + S2 * x2, M2[t3 + 2] = d2 * f3 + a2 * o3 + m2 * w2 + b2 * x2, M2[t3 + 3] = s2 * f3 + p2 * o3 + h2 * w2 + v2 * x2;
  }
}
function r(t2, r2, f2) {
  if (t2.count !== r2.count)
    return void e$h.error("source and destination buffers need to have the same number of elements");
  const o2 = t2.count, n2 = f2[0], u2 = f2[1], d2 = f2[2], s2 = f2[3], c2 = f2[4], i2 = f2[5], a2 = f2[6], p2 = f2[7], y2 = f2[8], B2 = t2.typedBuffer, m2 = t2.typedBufferStride, h2 = r2.typedBuffer, l2 = r2.typedBufferStride;
  for (let e2 = 0; e2 < o2; e2++) {
    const t3 = e2 * m2, r3 = e2 * l2, f3 = h2[r3], o3 = h2[r3 + 1], S2 = h2[r3 + 2], b2 = h2[r3 + 3];
    B2[t3] = n2 * f3 + s2 * o3 + a2 * S2, B2[t3 + 1] = u2 * f3 + c2 * o3 + p2 * S2, B2[t3 + 2] = d2 * f3 + i2 * o3 + y2 * S2, B2[t3 + 3] = b2;
  }
}
function f(e2, t2, r2) {
  const f2 = Math.min(e2.count, t2.count), o2 = e2.typedBuffer, n2 = e2.typedBufferStride, u2 = t2.typedBuffer, d2 = t2.typedBufferStride;
  for (let s2 = 0; s2 < f2; s2++) {
    const e3 = s2 * n2, t3 = s2 * d2;
    o2[e3] = r2 * u2[t3], o2[e3 + 1] = r2 * u2[t3 + 1], o2[e3 + 2] = r2 * u2[t3 + 2], o2[e3 + 3] = r2 * u2[t3 + 3];
  }
}
function o(e2, t2, r2) {
  const f2 = Math.min(e2.count, t2.count), o2 = e2.typedBuffer, n2 = e2.typedBufferStride, u2 = t2.typedBuffer, d2 = t2.typedBufferStride;
  for (let s2 = 0; s2 < f2; s2++) {
    const e3 = s2 * n2, t3 = s2 * d2;
    o2[e3] = u2[t3] >> r2, o2[e3 + 1] = u2[t3 + 1] >> r2, o2[e3 + 2] = u2[t3 + 2] >> r2, o2[e3 + 3] = u2[t3 + 3] >> r2;
  }
}
Object.freeze({ __proto__: null, transformMat4: t, transformMat3: r, scale: f, shiftRight: o });
function $(r2, s2) {
  return __async(this, null, function* () {
    const o2 = q(t$A(r2));
    if (o2.fileType === "wosr") {
      const e2 = yield s2.cache ? s2.cache.loadWOSR(o2.url, s2) : x(o2.url, s2), t2 = b(e2, s2);
      return { lods: [t2], referenceBoundingBox: t2.boundingBox, isEsriSymbolResource: false, isWosr: true, remove: e2.remove };
    }
    const i2 = yield s2.cache ? s2.cache.loadGLTF(o2.url, s2, s2.usePBR) : l(new n$3(s2.streamDataRequester), o2.url, s2, s2.usePBR), a2 = g$9(i2.model.meta, "ESRI_proxyEllipsoid");
    i2.meta.isEsriSymbolResource && r$s(a2) && i2.meta.uri.indexOf("/RealisticTrees/") !== -1 && J(i2, a2);
    const u2 = i2.meta.isEsriSymbolResource ? { usePBR: s2.usePBR, isSchematic: false, treeRendering: i2.customMeta.esriTreeRendering, mrrFactors: [0, 1, 0.2] } : { usePBR: s2.usePBR, isSchematic: false, mrrFactors: [0, 1, 0.5] }, n2 = __spreadProps(__spreadValues({}, s2.materialParamsMixin), { treeRendering: i2.customMeta.esriTreeRendering });
    if (o2.specifiedLodIndex != null) {
      const e2 = K(i2, u2, n2, o2.specifiedLodIndex);
      let t2 = e2[0].boundingBox;
      if (o2.specifiedLodIndex !== 0) {
        t2 = K(i2, u2, n2, 0)[0].boundingBox;
      }
      return { lods: e2, referenceBoundingBox: t2, isEsriSymbolResource: i2.meta.isEsriSymbolResource, isWosr: false, remove: i2.remove };
    }
    const l$12 = K(i2, u2, n2);
    return { lods: l$12, referenceBoundingBox: l$12[0].boundingBox, isEsriSymbolResource: i2.meta.isEsriSymbolResource, isWosr: false, remove: i2.remove };
  });
}
function q(e2) {
  const t2 = e2.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);
  if (t2)
    return { fileType: "gltf", url: t2[1], specifiedLodIndex: t2[4] != null ? Number(t2[4]) : null };
  return e2.match(/(.*\.(json|json\.gz))$/) ? { fileType: "wosr", url: e2, specifiedLodIndex: null } : { fileType: "unknown", url: e2, specifiedLodIndex: null };
}
function K(e2, r$12, s2, o2) {
  const i2 = e2.model, a2 = e$o(), u2 = new Array(), n2 = new Map(), l2 = new Map();
  return i2.lods.forEach((e3, c2) => {
    if (o2 !== void 0 && c2 !== o2)
      return;
    const m2 = { name: e3.name, stageResources: { textures: new Array(), materials: new Array(), geometries: new Array() }, lodThreshold: r$s(e3.lodThreshold) ? e3.lodThreshold : null, pivotOffset: [0, 0, 0], numberOfVertices: 0, boundingBox: B$6() };
    u2.push(m2), e3.parts.forEach((e4) => {
      const o3 = e4.material + (e4.attributes.normal ? "_normal" : "") + (e4.attributes.color ? "_color" : "") + (e4.attributes.texCoord0 ? "_texCoord0" : "") + (e4.attributes.tangent ? "_tangent" : ""), u3 = i2.materials.get(e4.material), c3 = r$s(e4.attributes.texCoord0), d2 = r$s(e4.attributes.normal);
      if (!n2.has(o3)) {
        if (c3) {
          if (r$s(u3.textureColor) && !l2.has(u3.textureColor)) {
            const e5 = i2.textures.get(u3.textureColor), t2 = __spreadProps(__spreadValues({}, e5.parameters), { preMultiplyAlpha: true });
            l2.set(u3.textureColor, new E(e5.data, t2));
          }
          if (r$s(u3.textureNormal) && !l2.has(u3.textureNormal)) {
            const e5 = i2.textures.get(u3.textureNormal), t2 = __spreadProps(__spreadValues({}, e5.parameters), { preMultiplyAlpha: true });
            l2.set(u3.textureNormal, new E(e5.data, t2));
          }
          if (r$s(u3.textureOcclusion) && !l2.has(u3.textureOcclusion)) {
            const e5 = i2.textures.get(u3.textureOcclusion), t2 = __spreadProps(__spreadValues({}, e5.parameters), { preMultiplyAlpha: true });
            l2.set(u3.textureOcclusion, new E(e5.data, t2));
          }
          if (r$s(u3.textureEmissive) && !l2.has(u3.textureEmissive)) {
            const e5 = i2.textures.get(u3.textureEmissive), t2 = __spreadProps(__spreadValues({}, e5.parameters), { preMultiplyAlpha: true });
            l2.set(u3.textureEmissive, new E(e5.data, t2));
          }
          if (r$s(u3.textureMetallicRoughness) && !l2.has(u3.textureMetallicRoughness)) {
            const e5 = i2.textures.get(u3.textureMetallicRoughness), t2 = __spreadProps(__spreadValues({}, e5.parameters), { preMultiplyAlpha: true });
            l2.set(u3.textureMetallicRoughness, new E(e5.data, t2));
          }
        }
        const a3 = __pow(u3.color[0], 1 / O), m3 = __pow(u3.color[1], 1 / O), f2 = __pow(u3.color[2], 1 / O), p2 = __pow(u3.emissiveFactor[0], 1 / O), x2 = __pow(u3.emissiveFactor[1], 1 / O), g2 = __pow(u3.emissiveFactor[2], 1 / O);
        n2.set(o3, new y$1(__spreadValues(__spreadProps(__spreadValues({}, r$12), { transparent: u3.alphaMode === "BLEND", textureAlphaMode: Q(u3.alphaMode), textureAlphaCutoff: u3.alphaCutoff, diffuse: [a3, m3, f2], ambient: [a3, m3, f2], opacity: u3.opacity, doubleSided: u3.doubleSided, doubleSidedType: "winding-order", cullFace: u3.doubleSided ? 0 : 2, vertexColors: !!e4.attributes.color, vertexTangents: !!e4.attributes.tangent, normals: d2 ? "default" : "screenDerivative", castShadows: true, receiveSSAO: true, textureId: r$s(u3.textureColor) && c3 ? l2.get(u3.textureColor).id : void 0, colorMixMode: u3.colorMixMode, normalTextureId: r$s(u3.textureNormal) && c3 ? l2.get(u3.textureNormal).id : void 0, textureAlphaPremultiplied: true, occlusionTextureId: r$s(u3.textureOcclusion) && c3 ? l2.get(u3.textureOcclusion).id : void 0, emissiveTextureId: r$s(u3.textureEmissive) && c3 ? l2.get(u3.textureEmissive).id : void 0, metallicRoughnessTextureId: r$s(u3.textureMetallicRoughness) && c3 ? l2.get(u3.textureMetallicRoughness).id : void 0, emissiveFactor: [p2, x2, g2], mrrFactors: [u3.metallicFactor, u3.roughnessFactor, r$12.mrrFactors[2]], isSchematic: false }), s2)));
      }
      const f$12 = H(e4.indices || e4.attributes.position.count, e4.primitiveType), j2 = e4.attributes.position.count, F2 = r$3(a$m, j2);
      t$o(F2, e4.attributes.position, e4.transform);
      const P2 = [["position", { data: F2.typedBuffer, size: F2.elementCount, exclusive: true }]], z2 = [["position", f$12]];
      if (r$s(e4.attributes.normal)) {
        const t2 = r$3(a$m, j2);
        j$a(a2, e4.transform), r$n(t2, e4.attributes.normal, a2), P2.push(["normal", { data: t2.typedBuffer, size: t2.elementCount, exclusive: true }]), z2.push(["normal", f$12]);
      }
      if (r$s(e4.attributes.tangent)) {
        const t2 = r$3(p$b, j2);
        j$a(a2, e4.transform), r(t2, e4.attributes.tangent, a2), P2.push(["tangent", { data: t2.typedBuffer, size: t2.elementCount, exclusive: true }]), z2.push(["tangent", f$12]);
      }
      if (r$s(e4.attributes.texCoord0)) {
        const t2 = r$3(u$h, j2);
        n$2(t2, e4.attributes.texCoord0), P2.push(["uv0", { data: t2.typedBuffer, size: t2.elementCount, exclusive: true }]), z2.push(["uv0", f$12]);
      }
      if (r$s(e4.attributes.color)) {
        const t2 = r$3(x$8, j2);
        if (e4.attributes.color.elementCount === 4)
          e4.attributes.color instanceof p$b ? f(t2, e4.attributes.color, 255) : e4.attributes.color instanceof x$8 ? e$4(t2, e4.attributes.color) : e4.attributes.color instanceof L$6 && f(t2, e4.attributes.color, 1 / 256);
        else {
          t$6(t2, 255, 255, 255, 255);
          const r2 = new O$6(t2.buffer, 0, 4);
          e4.attributes.color instanceof a$m ? f$f(r2, e4.attributes.color, 255) : e4.attributes.color instanceof O$6 ? e$5(r2, e4.attributes.color) : e4.attributes.color instanceof E$9 && f$f(r2, e4.attributes.color, 1 / 256);
        }
        P2.push(["color", { data: t2.typedBuffer, size: t2.elementCount, exclusive: true }]), z2.push(["color", f$12]);
      }
      const D2 = new u$c(P2, z2);
      m2.stageResources.geometries.push(D2), m2.stageResources.materials.push(n2.get(o3)), c3 && (r$s(u3.textureColor) && m2.stageResources.textures.push(l2.get(u3.textureColor)), r$s(u3.textureNormal) && m2.stageResources.textures.push(l2.get(u3.textureNormal)), r$s(u3.textureOcclusion) && m2.stageResources.textures.push(l2.get(u3.textureOcclusion)), r$s(u3.textureEmissive) && m2.stageResources.textures.push(l2.get(u3.textureEmissive)), r$s(u3.textureMetallicRoughness) && m2.stageResources.textures.push(l2.get(u3.textureMetallicRoughness))), m2.numberOfVertices += j2;
      const V2 = D2.boundingInfo;
      r$s(V2) && (h$f(m2.boundingBox, V2.getBBMin()), h$f(m2.boundingBox, V2.getBBMax()));
    });
  }), u2;
}
function Q(e2) {
  switch (e2) {
    case "BLEND":
      return 0;
    case "MASK":
      return 2;
    case "OPAQUE":
      return 1;
    default:
      return 0;
  }
}
function H(e2, t2) {
  switch (t2) {
    case 4:
      return n(e2);
    case 5:
      return o$1(e2);
    case 6:
      return i(e2);
  }
}
function J(e2, t2) {
  for (let m2 = 0; m2 < e2.model.lods.length; ++m2) {
    const d2 = e2.model.lods[m2];
    e2.customMeta.esriTreeRendering = true;
    for (const p2 of d2.parts) {
      const d3 = p2.attributes.normal;
      if (t$t(d3))
        return;
      const g2 = p2.attributes.position, h2 = g2.count, v2 = n$g(), R2 = n$g(), y2 = n$g(), B2 = r$3(x$8, h2), M2 = r$3(a$m, h2), w2 = h$b(e$i(), p2.transform);
      for (let r2 = 0; r2 < h2; r2++) {
        g2.getVec(r2, R2), d3.getVec(r2, v2), I$7(R2, R2, p2.transform), c$g(y2, R2, t2.center), i$j(y2, y2, t2.radius);
        const s2 = y2[2], c2 = s$b(y2), f2 = Math.min(0.45 + 0.55 * c2 * c2, 1);
        i$j(y2, y2, t2.radius), I$7(y2, y2, w2), j$9(y2, y2), m2 + 1 !== e2.model.lods.length && e2.model.lods.length > 1 && y$8(y2, y2, v2, s2 > -1 ? 0.2 : Math.min(-4 * s2 - 3.8, 1)), M2.setVec(r2, y2), B2.set(r2, 0, 255 * f2), B2.set(r2, 1, 255 * f2), B2.set(r2, 2, 255 * f2), B2.set(r2, 3, 255);
      }
      p2.attributes.normal = M2, p2.attributes.color = B2;
    }
  }
}
var objectResourceUtils = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  fetch: $,
  gltfToEngineResources: K,
  parseUrl: q
});
export { P$2 as P, j$2 as j, objectResourceUtils as o };
