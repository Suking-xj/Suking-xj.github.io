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
import { b6 as i$2, b7 as S, b8 as r$5, b9 as l$2, ba as s$4, bb as u$1, bc as y$2, bd as f$2, be as c$1, bf as y$3, bg as s$5, bh as i$3, a5 as r$8, bi as d$5, bj as Q, a0 as t$5, bk as e$5, bl as L, bm as d$6, bn as U, bo as le, bp as ce, bq as A$1, br as t$6, ai as t$7, bs as s$8, bt as H$1, bu as k, bv as f$3, bw as v$1, bx as u$2, by as F, a9 as u$3, bz as e$6, bA as a$2, ae as e$7, af as y$4, ag as i$5, bB as r$a, ab as a$3, ac as u$4, bC as r$b, aO as c$3, bD as x$1, bE as M$1, bF as k$2, aq as a$4, bG as x$2, bH as u$6, bI as h$2, an as g$2, bJ as O$2, bK as j$2, bL as N } from "./vendor.74d5941c.js";
import { P as P$1 } from "./definitions.6737c10c.js";
import { H, C as C$1, A, K, G as G$1, D, J, W, P, a as W$1, T as T$1, S as S$1, n as n$3, z as z$1 } from "./schemaUtils.ab77d03d.js";
import { a as r$7, r as r$9, s as s$9, k as k$1, i as i$6, b as i$7, E as E$1 } from "./WGLMeshFactory.8977e3d9.js";
import { p as p$2, y as y$5 } from "./projectionSupport.62084d5a.js";
import { q, R, C, Z, _, a as O, I as I$2, E, T, t as te } from "./Utils.3f1577e5.js";
import "./FramebufferObject.18518335.js";
import { a as s$6, s as s$7 } from "./VertexArrayObject.67803418.js";
import { r as r$6, o as o$4 } from "./FeatureContainer.3e3899c9.js";
import { c as c$2, i as i$4, u as u$5, l as l$3, O as O$1 } from "./ComputedAttributeStorage.2a55b702.js";
import { d as d$4 } from "./FeatureSetReader.a91e3e2d.js";
function l$1(r2) {
  if (!r2)
    return null;
  if (r2.type === "mesh")
    return r2.toJSON();
  let f2 = null;
  const l2 = r2.spatialReference, h2 = S(l2);
  if (!h2)
    return r2.toJSON();
  const d2 = l2.isWebMercator ? 102100 : 4326, I2 = r$5[d2].maxX, g2 = r$5[d2].minX, b2 = r$5[d2].plus180Line, v2 = r$5[d2].minus180Line;
  let J2;
  const N2 = r2.toJSON();
  if (l$2(N2))
    J2 = y$1(N2, I2, g2);
  else if (s$4(N2))
    N2.points = N2.points.map((n2) => y$1(n2, I2, g2)), J2 = N2;
  else if (u$1(N2))
    J2 = p$1(N2, h2);
  else if (y$2(N2) || f$2(N2)) {
    const n2 = M;
    c$1(n2, N2);
    const m2 = { xmin: n2[0], ymin: n2[1], xmax: n2[2], ymax: n2[3] }, s2 = i$3(m2.xmin, g2) * (2 * I2), e2 = s2 === 0 ? N2 : u(N2, s2);
    m2.xmin += s2, m2.xmax += s2, y$3(m2, b2) && m2.xmax !== I2 || y$3(m2, v2) && m2.xmin !== g2 ? f2 = e2 : J2 = e2;
  } else
    J2 = r2.toJSON();
  if (f2 !== null) {
    return new j$1().cut(f2, I2);
  }
  return J2;
}
function u(n2, t2) {
  const i2 = s$5(n2);
  for (const m2 of i2)
    for (const n3 of m2)
      n3[0] += t2;
  return n2;
}
function p$1(n2, t2) {
  if (!t2)
    return n2;
  const i2 = h$1(n2, t2).map((n3) => n3.extent);
  return i2.length < 2 ? i2[0] || n2 : i2.length > 2 ? (n2.xmin = t2.valid[0], n2.xmax = t2.valid[1], n2) : { rings: i2.map((n3) => [[n3.xmin, n3.ymin], [n3.xmin, n3.ymax], [n3.xmax, n3.ymax], [n3.xmax, n3.ymin], [n3.xmin, n3.ymin]]) };
}
function y$1(n2, t2, i2) {
  if (Array.isArray(n2)) {
    const m2 = n2[0];
    if (m2 > t2) {
      const i3 = i$3(m2, t2);
      n2[0] = m2 + i3 * (-2 * t2);
    } else if (m2 < i2) {
      const t3 = i$3(m2, i2);
      n2[0] = m2 + t3 * (-2 * i2);
    }
  } else {
    const m2 = n2.x;
    if (m2 > t2) {
      const i3 = i$3(m2, t2);
      n2.x += i3 * (-2 * t2);
    } else if (m2 < i2) {
      const t3 = i$3(m2, i2);
      n2.x += t3 * (-2 * i2);
    }
  }
  return n2;
}
function h$1(n2, t2) {
  const i2 = [], { ymin: m2, ymax: s2 } = n2, e2 = n2.xmax - n2.xmin, x2 = n2.xmin, o2 = n2.xmax;
  let r2;
  const [a2, f2] = t2.valid;
  r2 = d$3(n2.xmin, t2);
  const c2 = r2.x, l2 = r2.frameId;
  r2 = d$3(n2.xmax, t2);
  const u2 = r2.x, p2 = r2.frameId, y2 = c2 === u2 && e2 > 0;
  if (e2 > 2 * f2) {
    const n3 = { xmin: x2 < o2 ? c2 : u2, ymin: m2, xmax: f2, ymax: s2 }, t3 = { xmin: a2, ymin: m2, xmax: x2 < o2 ? u2 : c2, ymax: s2 }, e3 = { xmin: 0, ymin: m2, xmax: f2, ymax: s2 }, r3 = { xmin: a2, ymin: m2, xmax: 0, ymax: s2 }, y3 = [], h2 = [];
    I$1(n3, e3) && y3.push(l2), I$1(n3, r3) && h2.push(l2), I$1(t3, e3) && y3.push(p2), I$1(t3, r3) && h2.push(p2);
    for (let i3 = l2 + 1; i3 < p2; i3++)
      y3.push(i3), h2.push(i3);
    i2.push({ extent: n3, frameIds: [l2] }, { extent: t3, frameIds: [p2] }, { extent: e3, frameIds: y3 }, { extent: r3, frameIds: h2 });
  } else
    c2 > u2 || y2 ? i2.push({ extent: { xmin: c2, ymin: m2, xmax: f2, ymax: s2 }, frameIds: [l2] }, { extent: { xmin: a2, ymin: m2, xmax: u2, ymax: s2 }, frameIds: [p2] }) : i2.push({ extent: { xmin: c2, ymin: m2, xmax: u2, ymax: s2 }, frameIds: [l2] });
  return i2;
}
function d$3(n2, t2) {
  const [i2, m2] = t2.valid, s2 = 2 * m2;
  let e2, x2 = 0;
  return n2 > m2 ? (e2 = Math.ceil(Math.abs(n2 - m2) / s2), n2 -= e2 * s2, x2 = e2) : n2 < i2 && (e2 = Math.ceil(Math.abs(n2 - i2) / s2), n2 += e2 * s2, x2 = -e2), { x: n2, frameId: x2 };
}
function I$1(n2, t2) {
  const { xmin: i2, ymin: m2, xmax: s2, ymax: e2 } = t2;
  return g$1(n2, i2, m2) && g$1(n2, i2, e2) && g$1(n2, s2, e2) && g$1(n2, s2, m2);
}
function g$1(n2, t2, i2) {
  return t2 >= n2.xmin && t2 <= n2.xmax && i2 >= n2.ymin && i2 <= n2.ymax;
}
class j$1 {
  cut(n2, t2) {
    let i2;
    if (n2.rings)
      this.closed = true, i2 = n2.rings, this.minPts = 4;
    else {
      if (!n2.paths)
        return null;
      this.closed = false, i2 = n2.paths, this.minPts = 2;
    }
    const m2 = i2.length, s2 = -2 * t2;
    for (let e2 = 0; e2 < m2; e2++) {
      const n3 = i2[e2];
      if (n3 && n3.length >= this.minPts) {
        const t3 = [];
        for (const i3 of n3)
          t3.push([i3[0] + s2, i3[1]]);
        i2.push(t3);
      }
    }
    return this.closed ? n2.rings = i2 : n2.paths = i2, n2;
  }
}
const M = i$2();
function i$1(t2, i2, r2) {
  if (!t2.allDirty)
    if (t2.from != null && t2.count != null) {
      const s2 = Math.min(t2.from, i2), l2 = Math.max(t2.from + t2.count, i2 + r2) - s2;
      t2.from = s2, t2.count = l2;
    } else
      t2.from = i2, t2.count = r2;
}
class r$4 {
  constructor() {
    this._dirties = q(() => ({ indices: { from: null, count: null, allDirty: false } }), () => ({ vertices: { from: null, count: null, allDirty: false } }));
  }
  hasDirty() {
    for (const t2 of this._dirties)
      if (t2.data.indices.count !== null || t2.data.indices.allDirty)
        return true;
    return false;
  }
  markAllClean() {
    for (const t2 of this._dirties) {
      t2.data.indices.from = null, t2.data.indices.count = null, t2.data.indices.allDirty = false;
      for (const i2 in t2.buffers)
        t2.buffers[i2].data.vertices.from = null, t2.buffers[i2].data.vertices.count = null, t2.buffers[i2].data.vertices.allDirty = false;
    }
  }
  markAllDirty() {
    for (const t2 of this._dirties) {
      t2.data.indices.allDirty = true;
      for (const i2 in t2.buffers)
        t2.buffers[i2].data.vertices.allDirty = true;
    }
  }
  forEach(t2) {
    for (let i2 = 0; i2 < this._dirties.length; ++i2) {
      const r2 = this._dirties[i2], s2 = {};
      for (const t3 in r2.buffers) {
        const i3 = r2.buffers[t3].data.vertices;
        (i3.allDirty || i3.from != null && i3.count != null && i3.count > 0) && (s2[t3] = i3);
      }
      const l2 = r2.data.indices;
      let n2;
      n2 = l2.allDirty || l2.from != null && l2.count != null && l2.count > 0 ? { indices: l2, vertices: s2 } : { indices: null, vertices: s2 }, (n2.indices || Object.keys(n2).length > 0) && t2(n2, i2);
    }
  }
  markDirtyIndices(t2, r2, s2) {
    i$1(this._dirties[t2].data.indices, r2, s2);
  }
  markDirtyVertices(t2, r2, s2, l2) {
    i$1(this._dirties[t2].buffers[r2].data.vertices, s2, l2);
  }
}
class e$4 {
  constructor(e2) {
    this._largestRange = null, this._parent = e2, this._updateLargestRange();
  }
  get largestRange() {
    return this._largestRange;
  }
  rangeCreated(e2) {
    (!this._largestRange || e2.count > this._largestRange.count) && (this._largestRange = e2);
  }
  rangeResized(e2, t2) {
    e2 === this._largestRange ? e2.count < t2 && this._updateLargestRange() : (!this._largestRange || e2.count > this._largestRange.count) && (this._largestRange = e2);
  }
  findBestRange(e2) {
    let t2 = this._parent._freeHead, n2 = null;
    for (; t2 !== null; )
      t2.count >= e2 && (!n2 || t2.count - e2 < n2.count - e2) && (n2 = t2), t2 = t2.next;
    return n2;
  }
  findAdjacentRanges(e2, t2) {
    let n2 = true, r2 = false, s2 = null, o2 = this._parent._freeHead;
    for (; n2 && !r2; ) {
      const a2 = s2 !== null ? s2.from + s2.count : 0, l2 = o2 !== null ? o2.from : this._parent._size;
      e2 >= a2 && e2 + t2 <= l2 ? (n2 = false, r2 = true) : o2 !== null ? (s2 = o2, o2 = o2.next) : n2 = false;
    }
    return [s2, o2];
  }
  _updateLargestRange() {
    let e2 = null, t2 = this._parent._freeHead;
    for (; t2 !== null; )
      (!e2 || t2.count > e2.count) && (e2 = t2), t2 = t2.next;
    this._largestRange = e2;
  }
}
class t$4 {
  constructor(t2, n2) {
    this._allocated = 0, this._size = t2, this._freeHead = t2 > 0 ? { from: 0, count: t2, prev: null, next: null } : null, this._bookKeeper = n2 || new e$4(this), this._freeHead && this._bookKeeper.rangeCreated(this._freeHead);
  }
  allocate(e2) {
    const n2 = this._bookKeeper.findBestRange(e2);
    if (n2 === null)
      return -1;
    const r2 = n2.from, s2 = n2.count;
    if (n2.from += e2, n2.count -= e2, this._bookKeeper.rangeResized(n2, r2, s2), this._allocated += e2, n2.count === 0) {
      const e3 = n2.prev !== null ? this._freeHead : n2.next;
      t$4._removeRange(n2), this._freeHead = e3;
    }
    return r2;
  }
  free(e2, n2) {
    const [r2, s2] = this._bookKeeper.findAdjacentRanges(e2, n2), o2 = { from: e2, count: n2, prev: r2, next: s2 };
    if (r2 !== null && (r2.next = o2), s2 !== null && (s2.prev = o2), this._bookKeeper.rangeCreated(o2), this._allocated -= n2, s2 !== null && o2.from + o2.count === s2.from) {
      const e3 = o2.from, n3 = o2.count;
      t$4._fuse(o2, s2), t$4._removeRange(s2), this._bookKeeper.rangeResized(o2, e3, n3), this._bookKeeper.rangeResized(s2, void 0, 0);
    }
    if (r2 !== null && r2.from + r2.count === o2.from) {
      const e3 = r2.from, n3 = r2.count;
      t$4._fuse(r2, o2), t$4._removeRange(o2), this._bookKeeper.rangeResized(r2, e3, n3), this._bookKeeper.rangeResized(o2, void 0, 0);
    }
    this._freeHead = o2.prev !== null ? this._freeHead : o2;
  }
  get fragmentation() {
    const e2 = this._size - this._allocated;
    if (e2 === 0)
      return 0;
    return 1 - this._bookKeeper.largestRange.count / e2;
  }
  static _removeRange(e2) {
    e2.prev !== null ? e2.next !== null ? (e2.prev.next = e2.next, e2.next.prev = e2.prev) : e2.prev.next = null : e2.next !== null && (e2.next.prev = null);
  }
  static _fuse(e2, t2) {
    e2.count += t2.count, e2.next = t2.next, t2.from += t2.count, t2.count = 0, t2.next !== null && (t2.next.prev = e2);
  }
}
const s$3 = ["FILL", "LINE", "MARKER", "TEXT", "LABEL"];
function o$3(e2) {
  const t2 = e2.getStrides(), r2 = {};
  for (let i2 = 0; i2 < t2.length; i2++)
    r2[s$3[i2]] = t2[i2];
  return r2;
}
const n$2 = 0.5;
class d$2 {
  constructor(t2, r2, s2, o2) {
    this._strides = t2, this._displayList = r2, this._freeListsAndStorage = {}, this._dirtyMap = null, this._dirtyMap = s2;
    for (const n2 in t2) {
      this._freeListsAndStorage[n2] = { vtxFreeList: o2 ? new t$4(o2) : null, idxFreeList: o2 ? new t$4(o2) : null, vertexBuffers: {}, indexBuffer: o2 ? new Uint32Array(o2) : null };
      for (const r3 in t2[n2])
        this._freeListsAndStorage[n2].vertexBuffers[r3] = { data: o2 ? R(o2, t2[n2][r3]) : null, stride: t2[n2][r3] };
    }
  }
  static fromTileData(e2, r2) {
    const n2 = o$3(e2), a2 = [0, 0, 0, 0, 0], x2 = [0, 0, 0, 0, 0], u2 = e2.tileDisplayData.displayObjects;
    for (const t2 of u2)
      for (const e3 of t2.displayRecords)
        a2[e3.geometryType] = Math.max(a2[e3.geometryType], e3.vertexFrom + e3.vertexCount), x2[e3.geometryType] = Math.max(x2[e3.geometryType], e3.indexFrom + e3.indexCount);
    const f2 = new d$2(n2, e2.tileDisplayData.displayList, r2, null);
    for (let o2 = 0; o2 < e2.tileBufferData.geometries.length; ++o2) {
      const r3 = a2[o2], n3 = x2[o2], d2 = e2.tileBufferData.geometries[o2], u3 = s$3[o2], l2 = f2._storageFor(u3), c2 = e2.tileBufferData.geometries[o2].indexBuffer;
      let m2;
      l2.indexBuffer = c2, l2.idxFreeList = new t$4(c2.length), l2.idxFreeList.allocate(n3);
      for (const i2 in d2.vertexBuffer) {
        const r4 = e2.tileBufferData.geometries[o2].vertexBuffer[i2];
        l2.vertexBuffers[i2].data = r4.data, l2.vertexBuffers[i2].stride = r4.stride;
        const s2 = C(r4.stride), n4 = r4.data.length * s2 / r4.stride;
        m2 || (m2 = n4);
      }
      l2.vtxFreeList = new t$4(m2), l2.vtxFreeList.allocate(r3);
    }
    return f2;
  }
  delete(e2) {
    const t2 = s$3[e2.geometryType];
    this._freeVertices(t2, e2.vertexFrom, e2.vertexCount), this._freeIndices(t2, e2.indexFrom, e2.indexCount), this._displayList.removeFromList(e2), e2.vertexFrom = void 0, e2.indexFrom = void 0;
  }
  setMeshData(e2, t2, i2, o2, n2) {
    const d2 = s$3[e2.geometryType];
    let a2, x2;
    e2.meshData = null, e2.vertexFrom === void 0 ? (x2 = t2.vertexCount, a2 = this._allocateVertices(d2, x2)) : t2.vertexCount > e2.vertexCount ? (this._freeVertices(d2, e2.vertexFrom, e2.vertexCount), x2 = t2.vertexCount, a2 = this._allocateVertices(d2, x2)) : t2.vertexCount === e2.vertexCount ? (a2 = e2.vertexFrom, x2 = e2.vertexCount) : (this._freeVertices(d2, e2.vertexFrom + t2.vertexCount, e2.vertexCount - t2.vertexCount), a2 = e2.vertexFrom, x2 = t2.vertexCount);
    let u2, f2, l2, c2 = true;
    if (e2.indexFrom === void 0 ? (u2 = n2, l2 = t2.indexCount, f2 = this._allocateIndices(d2, l2)) : t2.indexCount > e2.indexCount ? (u2 = this._displayList.removeFromList(e2), this._freeIndices(d2, e2.indexFrom, e2.indexCount), l2 = t2.indexCount, f2 = this._allocateIndices(d2, l2)) : t2.indexCount === e2.indexCount ? (c2 = false, f2 = e2.indexFrom, l2 = e2.indexCount) : (u2 = this._displayList.removeFromList(e2), this._freeIndices(d2, e2.indexFrom + t2.indexCount, e2.indexCount - t2.indexCount), f2 = e2.indexFrom, l2 = t2.indexCount), a2 !== -1 && f2 !== -1) {
      const s2 = this._storageFor(d2);
      if (Z(a2, f2, s2.vertexBuffers, s2.indexBuffer, t2, i2, o2), e2.vertexFrom = a2, e2.indexFrom = f2, e2.vertexCount = t2.vertexCount, e2.indexCount = t2.indexCount, this._dirtyMap) {
        this._dirtyMap.markDirtyIndices(e2.geometryType, e2.indexFrom, e2.indexCount);
        for (const t3 in i2)
          this._dirtyMap.markDirtyVertices(e2.geometryType, t3, e2.vertexFrom, e2.vertexCount);
      }
      return c2 && this._displayList.addToList(e2, u2), true;
    }
    return a2 !== -1 && this._freeVertices(d2, a2, x2), f2 !== -1 && this._freeIndices(d2, f2, l2), e2.setMeshDataFromBuffers(t2, i2, o2), e2.vertexFrom = void 0, e2.vertexCount = 0, e2.indexFrom = void 0, e2.indexCount = 0, false;
  }
  tryAddMeshData(e2, t2) {
    const i2 = t2.vertexBuffer, o2 = t2.indexBuffer, n2 = s$3[e2.geometryType], d2 = this._allocateVertices(n2, e2.vertexCount);
    if (d2 === -1)
      return this._freeVertices(n2, d2, e2.vertexCount), false;
    const a2 = this._allocateIndices(n2, e2.indexCount);
    if (a2 === -1)
      return this._freeVertices(n2, d2, e2.vertexCount), this._freeIndices(n2, a2, e2.indexCount), false;
    const x2 = this._storageFor(n2);
    if (Z(d2, a2, x2.vertexBuffers, x2.indexBuffer, e2, i2, o2), e2.vertexFrom = d2, e2.indexFrom = a2, this._dirtyMap) {
      this._dirtyMap.markDirtyIndices(e2.geometryType, e2.indexFrom, e2.indexCount);
      for (const t3 in i2)
        this._dirtyMap.markDirtyVertices(e2.geometryType, t3, d2, e2.vertexCount);
    }
    return this._displayList.addToList(e2), true;
  }
  _allocateVertices(e2, t2) {
    const r2 = this._storageFor(e2), i2 = r2.vtxFreeList.allocate(t2);
    if (i2 === -1)
      return -1;
    return r2.vtxFreeList.fragmentation > n$2 ? -1 : i2;
  }
  _freeVertices(e2, t2, r2) {
    this._storageFor(e2).vtxFreeList.free(t2, r2);
  }
  _freeIndices(e2, t2, r2) {
    this._storageFor(e2).idxFreeList.free(t2, r2);
  }
  _allocateIndices(e2, t2) {
    const r2 = this._storageFor(e2), i2 = r2.idxFreeList.allocate(t2);
    if (i2 === -1)
      return -1;
    return r2.idxFreeList.fragmentation > n$2 ? -1 : i2;
  }
  _storageFor(e2) {
    return this._freeListsAndStorage[e2];
  }
  _stridesFor(e2, t2) {
    return this._strides[e2][t2];
  }
}
class a$1 {
  constructor(t2) {
    this.geometryMap = q(() => ({ indexBuffer: s$7.createIndex(t2, 35044), vao: null }), (r2, a2) => ({ vertexBuffer: s$7.createVertex(t2, _[a2]) }));
  }
  dispose() {
    for (let e2 = 0; e2 < 5; e2++) {
      const t2 = this.geometryMap[e2];
      if (t2) {
        t2.data.vao && t2.data.vao.dispose(false), t2.data.indexBuffer && t2.data.indexBuffer.dispose();
        for (const e3 in t2.buffers)
          t2.buffers[e3] && t2.buffers[e3].data.vertexBuffer.dispose();
      }
    }
  }
  get(e2) {
    const r2 = this.geometryMap[e2];
    return { draw(e3, s2, a2, f2, i2) {
      if (!r2.data.vao) {
        const f3 = {};
        for (const e4 in r2.buffers)
          f3[e4] = r2.buffers[e4].data.vertexBuffer;
        r2.data.vao = new s$6(e3, a2, s2, f3, r2.data.indexBuffer);
      }
      const o2 = r2.data.vao;
      e3.bindVAO(o2), e3.drawElements(4, i2, 5125, Uint32Array.BYTES_PER_ELEMENT * f2), e3.bindVAO(null);
    } };
  }
  has(e2) {
    return this.geometryMap[e2] != null;
  }
  upload(e2, t2) {
    t2.forEach((t3, r2) => {
      this._upload(t3, r2, e2);
    });
  }
  _upload(e2, t2, r2) {
    if (e2.indices && (e2.indices.allDirty ? this._uploadIndices(r2, t2) : e2.indices.from != null && e2.indices.count != null && this._uploadIndices(r2, t2, e2.indices.from, e2.indices.count)), e2.vertices) {
      const s2 = e2.vertices;
      for (const e3 in s2) {
        const a2 = s2[e3];
        a2.allDirty ? this._uploadVertices(r2, t2, e3) : a2.from != null && a2.count != null && this._uploadVertices(r2, t2, e3, a2.from, a2.count);
      }
    }
  }
  _uploadVertices(e2, t2, r2, s2, a2) {
    const f2 = this.geometryMap[t2];
    if (!f2)
      return;
    const i2 = e2.geometries[t2].vertexBuffer[r2];
    if (!i2)
      return;
    const o2 = i2.stride, n2 = i2.data.buffer;
    f2.buffers[r2] && n2.byteLength > 0 && (s2 != null && a2 != null ? f2.buffers[r2].data.vertexBuffer.setSubData(n2, s2 * o2, s2 * o2, (s2 + a2) * o2) : f2.buffers[r2].data.vertexBuffer.setData(n2));
  }
  _uploadIndices(e2, t2, r2, s2) {
    const a2 = this.geometryMap[t2];
    if (!a2)
      return;
    const f2 = 4, i2 = e2.geometries[t2].indexBuffer.buffer;
    a2.data.indexBuffer && i2.byteLength > 0 && (r2 != null && s2 != null ? a2.data.indexBuffer.setSubData(i2, r2 * f2, r2 * f2, (r2 + s2) * f2) : a2.data.indexBuffer.setData(i2));
  }
}
class a extends r$6 {
  constructor() {
    super(...arguments), this._data = null, this._displayList = null, this._lastCommitTime = 0, this._hasData = false, this._invalidated = false, this._wglBuffers = null, this._dirtyMap = new r$4();
  }
  destroy() {
    super.destroy(), this.clear();
  }
  get hasData() {
    return !!this._hasData;
  }
  get displayObjects() {
    var t2;
    return (t2 = this._displayObjects) != null ? t2 : [];
  }
  getGeometry(t2) {
    return this._wglBuffers && this._wglBuffers.has(t2) ? this._wglBuffers.get(t2) : null;
  }
  getDisplayList() {
    return this._displayList;
  }
  patch(e2) {
    if (e2.clear === true)
      return this.clear(), void (this._hasData = false);
    const i2 = e2.addOrUpdate, a2 = e2.remove;
    !this._data && i2 && i2.tileDisplayData.displayObjects.length ? (i2.tileDisplayData.computeDisplayList(), this._dirtyMap = new r$4(), this._dispRecStore = d$2.fromTileData(i2, this._dirtyMap), this._data = i2, this._dirtyMap.markAllDirty(), this._hasData = true, e2.end && this.ready()) : this._data && (i2 && i2.tileDisplayData.displayObjects.length || a2.length) ? this._doPatchData(e2) : e2.end && this.ready(), e2.end && !this._data && this.clear(), this.requestRender(), this.emit("change");
  }
  commit(t2) {
    t2.time && t2.time === this._lastCommitTime || (this._lastCommitTime = t2.time, this.visible && this._data && (this._wglBuffers || (this._wglBuffers = new a$1(t2.context)), (this._dirtyMap.hasDirty() || this._invalidated) && (this._invalidated = false, this._wglBuffers.upload(this._data.tileBufferData, this._dirtyMap), this._displayList = this._data.tileDisplayData.displayList.clone(), this._displayObjects = this._data.tileDisplayData.displayObjects.slice(), this._dirtyMap.markAllClean())));
  }
  clear() {
    this._data = null, this._displayList = null, this._dispRecStore = null, this._wglBuffers && (this._wglBuffers.dispose(), this._wglBuffers = null);
  }
  _doPatchData(t2) {
    this._invalidated = true, this._patchData(t2) || (this._dirtyMap.markAllDirty(), this._data.reshuffle(), this._dispRecStore = d$2.fromTileData(this._data, this._dirtyMap)), this.requestRender();
  }
  _patchData(t2) {
    let s2 = true;
    const e2 = t2.addOrUpdate && t2.addOrUpdate.tileDisplayData && t2.addOrUpdate.tileDisplayData.displayObjects || [], i2 = (t2.remove || []).slice();
    for (const a2 of e2)
      a2.insertAfter != null && i2.push(a2.id);
    for (const a2 of i2) {
      const t3 = this._data.tileDisplayData.displayObjectRegistry.get(a2);
      if (t3) {
        this._data.tileDisplayData.displayList.removeFromList(t3.displayRecords);
        for (const e3 of t3.displayRecords)
          this._dispRecStore.delete(e3);
        this._data.tileDisplayData.displayObjectRegistry.delete(a2);
        const s3 = this._data.tileDisplayData.displayObjects.indexOf(t3);
        this._data.tileDisplayData.displayObjects.splice(s3, 1);
      }
    }
    for (const a2 of e2) {
      let e3, i3 = this._data.tileDisplayData.displayObjectRegistry.get(a2.id);
      if (i3) {
        const t3 = i3.displayRecords;
        i3.set(a2), i3.displayRecords = t3;
        const s3 = i3.displayRecords.length;
        for (let e4 = 0; e4 < s3; ++e4) {
          const t4 = i3.displayRecords[e4], s4 = a2.displayRecords[e4];
          (e4 >= a2.displayRecords.length || t4.geometryType !== s4.geometryType || t4.symbolLevel !== s4.symbolLevel || t4.zOrder !== s4.zOrder || t4.materialKey !== s4.materialKey) && (this._dispRecStore.delete(i3.displayRecords[e4]), e4 < a2.displayRecords.length && (i3.displayRecords[e4] = void 0));
        }
        i3.displayRecords.length = a2.displayRecords.length;
      } else {
        let t3;
        i3 = a2.copy(), i3.displayRecords = [], this._data.tileDisplayData.displayObjectRegistry.set(a2.id, i3);
        const s3 = this._data.tileDisplayData.displayObjects;
        if (i3.insertAfter != null)
          if (e3 = {}, i3.insertAfter >= 0) {
            const e4 = this._data.tileDisplayData.displayObjectRegistry.get(i3.insertAfter);
            e4 ? (t3 = s3.indexOf(e4) + 1, t3 < s3.length ? s3.splice(t3, 0, i3) : (s3.push(i3), t3 = s3.length)) : (s3.push(i3), t3 = s3.length);
          } else
            s3.unshift(i3), t3 = 0;
        else
          s3.push(i3), t3 = s3.length;
        if (e3) {
          const i4 = a2.displayRecords.length > 0 ? 1 : 0;
          let l3 = 0;
          for (let a3 = t3 - 1; a3 >= 0 && l3 < i4; --a3)
            for (let t4 = s3[a3].displayRecords.length - 1; t4 >= 0 && l3 < i4; --t4) {
              const i5 = s3[a3].displayRecords[t4], d2 = this._data.tileDisplayData.displayList.getDPInfoType();
              e3[d2] || (e3[d2] = i5, ++l3);
            }
        }
      }
      const l2 = a2.displayRecords.length;
      for (let d2 = 0; d2 < l2; ++d2) {
        const l3 = a2.displayRecords[d2];
        let r2 = i3.displayRecords[d2];
        r2 ? (r2.meshData = l3.meshData, r2.materialKey = l3.materialKey) : (r2 = l3.copy(), r2.vertexFrom = void 0, r2.indexFrom = void 0, i3.displayRecords[d2] = r2);
        const p2 = l3.geometryType, h2 = this._data.tileDisplayData.displayList.getDPInfoType(), o2 = t2.addOrUpdate.tileBufferData.geometries[p2], y2 = o2.vertexBuffer, c2 = o2.indexBuffer;
        let n2;
        e3 && (n2 = e3[h2] ? this._data.tileDisplayData.displayList.splitAfter(e3[h2]) : -1), s2 = this._dispRecStore.setMeshData(r2, l3, y2, c2, n2) && s2, e3 && r2.indexFrom != null && r2.indexFrom != null && (e3[h2] = r2);
      }
    }
    return s2;
  }
}
class e$3 {
  constructor() {
    this._byGeometryType = null;
  }
  get satisfied() {
    return !this._byGeometryType;
  }
  reset() {
    this._byGeometryType = null;
  }
  verticesFor(e2) {
    return this._byGeometryType ? this._byGeometryType[e2].vertices : 0;
  }
  indicesFor(e2) {
    return this._byGeometryType ? this._byGeometryType[e2].indices : 0;
  }
  needMore(e2, t2, i2) {
    if (!t2 && !i2)
      return;
    this._byGeometryType || (this._byGeometryType = [{ vertices: 0, indices: 0 }, { vertices: 0, indices: 0 }, { vertices: 0, indices: 0 }, { vertices: 0, indices: 0 }, { vertices: 0, indices: 0 }]);
    const r2 = this._byGeometryType[e2];
    r2.vertices += t2, r2.indices += i2;
  }
}
const r$3 = 5;
class f$1 {
  constructor() {
    this.geometries = [{ indexBuffer: void 0, vertexBuffer: {} }, { indexBuffer: void 0, vertexBuffer: {} }, { indexBuffer: void 0, vertexBuffer: {} }, { indexBuffer: void 0, vertexBuffer: {} }, { indexBuffer: void 0, vertexBuffer: {} }];
  }
  clone() {
    const e2 = new f$1();
    for (let r2 = 0; r2 < this.geometries.length; r2++) {
      const f2 = this.geometries[r2], t2 = e2.geometries[r2];
      t2.indexBuffer = f2.indexBuffer.slice(), t2.vertexBuffer = {};
      for (const e3 in f2.vertexBuffer) {
        const { data: r3, stride: i2 } = f2.vertexBuffer[e3];
        t2.vertexBuffer[e3] = { data: r3.slice(), stride: i2 };
      }
    }
    return e2;
  }
  static deserialize(t2) {
    const i2 = new f$1();
    for (let f2 = 0; f2 < r$3; ++f2) {
      i2.geometries[f2].indexBuffer = new Uint32Array(t2.geometries[f2].indexBuffer), i2.geometries[f2].vertexBuffer = {};
      for (const r2 in t2.geometries[f2].vertexBuffer)
        i2.geometries[f2].vertexBuffer[r2] = { data: O(t2.geometries[f2].vertexBuffer[r2].data, t2.geometries[f2].vertexBuffer[r2].stride), stride: t2.geometries[f2].vertexBuffer[r2].stride };
    }
    return i2;
  }
  serialize() {
    const e2 = { geometries: [{ indexBuffer: this.geometries[0].indexBuffer.buffer, vertexBuffer: {} }, { indexBuffer: this.geometries[1].indexBuffer.buffer, vertexBuffer: {} }, { indexBuffer: this.geometries[2].indexBuffer.buffer, vertexBuffer: {} }, { indexBuffer: this.geometries[3].indexBuffer.buffer, vertexBuffer: {} }, { indexBuffer: this.geometries[4].indexBuffer.buffer, vertexBuffer: {} }] };
    for (let f2 = 0; f2 < r$3; ++f2)
      for (const r2 in this.geometries[f2].vertexBuffer)
        e2.geometries[f2].vertexBuffer[r2] = { data: this.geometries[f2].vertexBuffer[r2].data.buffer, stride: this.geometries[f2].vertexBuffer[r2].stride };
    return e2;
  }
  getBuffers() {
    const e2 = [];
    for (let f2 = 0; f2 < r$3; ++f2) {
      e2.push(this.geometries[f2].indexBuffer.buffer);
      for (const r2 in this.geometries[f2].vertexBuffer)
        e2.push(this.geometries[f2].vertexBuffer[r2].data.buffer);
    }
    return e2;
  }
}
class t$3 {
  constructor() {
    this.vertexData = new Map(), this.vertexCount = 0, this.indexData = [];
  }
  clear() {
    this.vertexData.clear(), this.vertexCount = 0, this.indexData = [];
  }
  update(t2, e2, a2) {
    for (const s2 in t2)
      this.vertexData.set(s2, t2[s2]);
    for (const s2 in this.vertexData)
      t2[s2] === null && this.vertexData.delete(s2);
    this.vertexCount = e2, this.indexData = a2;
  }
}
class s$2 {
  constructor(t2, e2, s2, r2 = 0, i2 = 0) {
    this.id = t2, this.geometryType = e2, this.materialKey = s2, this.minZoom = r2, this.maxZoom = i2, this.meshData = null, this.symbolLevel = 0, this.zOrder = 0, this.vertexFrom = 0, this.vertexCount = 0, this.indexFrom = 0, this.indexCount = 0;
  }
  get sortKey() {
    return this._sortKey === void 0 && this._computeSortKey(), this._sortKey;
  }
  clone() {
    return this.copy();
  }
  copy() {
    const t2 = new s$2(this.id, this.geometryType, this.materialKey);
    return t2.vertexFrom = this.vertexFrom, t2.vertexCount = this.vertexCount, t2.indexFrom = this.indexFrom, t2.indexCount = this.indexCount, t2.zOrder = this.zOrder, t2.symbolLevel = this.symbolLevel, t2.meshData = this.meshData, t2.minZoom = this.minZoom, t2.maxZoom = this.maxZoom, t2;
  }
  setMeshDataFromBuffers(s2, r2, i2) {
    const o2 = new t$3();
    for (const e2 in r2) {
      const i3 = r2[e2].stride, a2 = r2[e2].data, h2 = [], n2 = C(i3);
      for (let t2 = 0; t2 < i3 * s2.vertexCount / n2; ++t2)
        h2[t2] = a2[t2 + i3 * s2.vertexFrom / n2];
      o2.vertexData.set(e2, h2);
    }
    o2.indexData.length = 0;
    for (let t2 = 0; t2 < s2.indexCount; ++t2)
      o2.indexData[t2] = i2[t2 + s2.indexFrom] - s2.vertexFrom;
    o2.vertexCount = s2.vertexCount, this.meshData = o2;
  }
  readMeshDataFromBuffers(s2, r2) {
    this.meshData ? this.meshData.clear() : this.meshData = new t$3();
    for (const e2 in s2) {
      const r3 = s2[e2].stride, i2 = s2[e2].data, o2 = [], a2 = C(r3);
      for (let t2 = 0; t2 < r3 * this.vertexCount / a2; ++t2)
        o2[t2] = i2[t2 + r3 * this.vertexFrom / a2];
      this.meshData.vertexData.set(e2, o2);
    }
    this.meshData.indexData.length = 0;
    for (let t2 = 0; t2 < this.indexCount; ++t2)
      this.meshData.indexData[t2] = r2[t2 + this.indexFrom] - this.vertexFrom;
    this.meshData.vertexCount = this.vertexCount;
  }
  writeMeshDataToBuffers(e2, s2, r2, i2) {
    for (const o2 in s2) {
      const r3 = s2[o2].stride, i3 = this.meshData.vertexData.get(o2), a2 = s2[o2].data, h2 = C(r3);
      for (let t2 = 0; t2 < r3 * this.meshData.vertexCount / h2; ++t2)
        a2[t2 + r3 * e2 / h2] = i3[t2];
    }
    for (let t2 = 0; t2 < this.meshData.indexData.length; ++t2)
      i2[t2 + r2] = this.meshData.indexData[t2] + e2;
    this.vertexFrom = e2, this.vertexCount = this.meshData.vertexCount, this.indexFrom = r2, this.indexCount = this.meshData.indexData.length;
  }
  static writeAllMeshDataToBuffers(t2, e2, s2) {
    let r2 = 0, i2 = 0;
    for (const o2 of t2)
      o2.writeMeshDataToBuffers(r2, e2, i2, s2), r2 += o2.vertexCount, i2 += o2.indexCount;
  }
  _computeSortKey() {
    this._sortKey = (31 & this.symbolLevel) << 12 | (127 & this.zOrder) << 4 | 7 & this.geometryType;
  }
  serialize(t2) {
    return t2.push(this.geometryType), t2.push(this.materialKey), t2.push(this.vertexFrom), t2.push(this.vertexCount), t2.push(this.indexFrom), t2.push(this.indexCount), t2.push(this.minZoom), t2.push(this.maxZoom), t2;
  }
  static deserialize(t2, e2) {
    const r2 = t2.readInt32(), i2 = t2.readInt32(), o2 = new s$2(e2.id, r2, i2);
    return o2.vertexFrom = t2.readInt32(), o2.vertexCount = t2.readInt32(), o2.indexFrom = t2.readInt32(), o2.indexCount = t2.readInt32(), o2.minZoom = t2.readInt32(), o2.maxZoom = t2.readInt32(), o2;
  }
}
function e$2(e2, n2) {
  if (n2 !== null) {
    e2.push(n2.length);
    for (const r2 of n2)
      r2.serialize(e2);
    return e2;
  }
  e2.push(0);
}
function n$1(e2, n2, r2) {
  const t2 = e2.readInt32(), o2 = new Array(t2);
  for (let i2 = 0; i2 < o2.length; i2++)
    o2[i2] = n2.deserialize(e2, r2);
  return o2;
}
class e$1 {
  constructor(s2) {
    this.insertAfter = null, this.id = s2, this.displayRecords = [];
  }
  copy() {
    const s2 = new e$1(this.id);
    return s2.set(this), s2;
  }
  clone() {
    const s2 = new e$1(this.id);
    return s2.displayRecords = this.displayRecords.map((s3) => s3.clone()), s2.insertAfter = this.insertAfter, s2;
  }
  set(s2) {
    this.id = s2.id, this.displayRecords = s2.displayRecords, this.insertAfter = s2.insertAfter;
  }
  serialize(s2) {
    return s2.push(this.id), e$2(s2, this.displayRecords), s2;
  }
  static deserialize(i2) {
    const r2 = i2.readInt32(), d2 = new e$1(r2), o2 = { id: r2 };
    return d2.displayRecords = n$1(i2, s$2, o2), d2;
  }
}
function n(e2, t2, n2, ...o2) {
  t2 < e2.length ? e2.splice(t2, n2, ...o2) : e2.push(...o2);
}
const o$2 = new Map();
o$2.set(I$2.MAP, [E.FILL, E.LINE, E.MARKER, E.TEXT]), o$2.set(I$2.LABEL, [E.LABEL]), o$2.set(I$2.LABEL_ALPHA, [E.LABEL]);
class i {
  constructor() {
    this.symbolLevels = [];
  }
  replay(e2, t2, n2) {
    for (const o2 of this.symbolLevels)
      for (const i2 of o2.zLevels) {
        const o3 = i2.geometryDPInfo.unified;
        if (o3)
          for (const i3 of o3) {
            const o4 = e2.painter.getGeometryBrush(i3.geometryType), r2 = t2.getGeometry(i3.geometryType), s2 = { geometryType: i3.geometryType, materialKey: i3.materialKey, indexFrom: i3.indexFrom, indexCount: i3.indexCount, draw: (e3, t3, n3) => {
              r2.draw(e3, t3, n3, i3.indexFrom, i3.indexCount);
            } };
            o4.prepareState(e2, t2), o4.drawGeometry(e2, t2, s2, n2);
          }
      }
  }
  get empty() {
    return !this.symbolLevels || this.symbolLevels.length === 0;
  }
  clear() {
    this.symbolLevels.length = 0;
  }
  addToList(e2, t2) {
    if (Array.isArray(e2))
      for (const n2 of e2)
        this._addToList(n2, t2);
    else
      this._addToList(e2, t2);
  }
  removeFromList(e2) {
    Array.isArray(e2) || (e2 = [e2]);
    let t2 = null;
    for (const n2 of e2)
      t2 = this._removeFromList(n2);
    return t2;
  }
  clone() {
    const e2 = new i();
    for (const t2 of this.symbolLevels)
      e2.symbolLevels.push(t2.clone());
    return e2;
  }
  splitAfter(e2) {
    const t2 = this._getDisplayList(e2.symbolLevel, e2.zOrder), n2 = t2.length, o2 = e2.indexFrom + e2.indexCount;
    for (let i2 = 0; i2 < n2; ++i2) {
      const n3 = t2[i2];
      if (n3.geometryType === e2.geometryType && o2 > n3.indexFrom && o2 <= n3.indexFrom + n3.indexCount) {
        if (o2 < n3.indexFrom + n3.indexCount) {
          const e3 = new r$2();
          e3.geometryType = n3.geometryType, e3.materialKey = n3.materialKey, e3.indexFrom = o2, e3.indexCount = n3.indexFrom + n3.indexCount - o2, t2.splice(i2 + 1, 0, e3), n3.indexCount = o2 - n3.indexFrom;
        }
        return i2;
      }
    }
  }
  _addToList(e2, t2) {
    const o2 = e2.symbolLevel, i2 = e2.zOrder, s2 = this._getDisplayList(o2, i2), l2 = t2 != null ? t2 : s2.length - 1, m2 = l2 >= 0 && l2 < s2.length ? s2[l2] : null;
    if (m2 !== null && m2.materialKey === e2.materialKey && m2.indexFrom + m2.indexCount === e2.indexFrom && m2.geometryType === e2.geometryType)
      m2.indexCount += e2.indexCount;
    else {
      const t3 = new r$2();
      t3.indexFrom = e2.indexFrom, t3.indexCount = e2.indexCount, t3.materialKey = e2.materialKey, t3.geometryType = e2.geometryType, n(s2, l2 + 1, 0, t3);
    }
  }
  _removeFromList(e2) {
    const t2 = e2.symbolLevel, o2 = e2.zOrder, i2 = this._getDisplayList(t2, o2), s2 = i2.length;
    let l2;
    for (let n2 = 0; n2 < s2; ++n2) {
      const t3 = i2[n2];
      if (e2.indexFrom + e2.indexCount > t3.indexFrom && e2.indexFrom < t3.indexFrom + t3.indexCount && t3.geometryType === e2.geometryType) {
        l2 = n2;
        break;
      }
    }
    if (l2 !== void 0) {
      const t3 = i2[l2];
      if (e2.indexFrom === t3.indexFrom)
        return t3.indexCount -= e2.indexCount, t3.indexFrom += e2.indexCount, t3.indexCount === 0 && n(i2, l2, 1), l2 - 1;
      if (e2.indexFrom + e2.indexCount === t3.indexFrom + t3.indexCount)
        return t3.indexCount -= e2.indexCount, t3.indexCount === 0 ? (n(i2, l2, 1), l2 - 1) : l2;
      {
        const o3 = t3.indexFrom, s3 = e2.indexFrom - t3.indexFrom, m2 = e2.indexCount, d2 = t3.indexFrom + t3.indexCount - (e2.indexFrom + e2.indexCount);
        t3.indexCount = s3;
        const y2 = new r$2();
        return y2.geometryType = t3.geometryType, y2.materialKey = t3.materialKey, y2.indexFrom = o3 + s3 + m2, y2.indexCount = d2, n(i2, l2 + 1, 0, y2), l2;
      }
    }
    return null;
  }
  _getDisplayList(e2, t2) {
    let n2;
    const o2 = this.symbolLevels.length;
    for (let s2 = 0; s2 < o2; s2++)
      if (this.symbolLevels[s2].symbolLevel === e2) {
        n2 = this.symbolLevels[s2];
        break;
      }
    let i2;
    n2 || (n2 = new m(), n2.symbolLevel = e2, this.symbolLevels.push(n2));
    const r2 = n2.zLevels.length;
    for (let s2 = 0; s2 < r2; s2++)
      if (n2.zLevels[s2].zLevel === t2) {
        i2 = n2.zLevels[s2];
        break;
      }
    return i2 || (i2 = new l(), i2.geometryDPInfo = new s$1(), i2.zLevel = t2, n2.zLevels.push(i2)), i2.geometryDPInfo.unified || (i2.geometryDPInfo.unified = []), i2.geometryDPInfo.unified;
  }
  getDPInfoType() {
    return "unified";
  }
}
class r$2 {
  constructor() {
    this.materialKey = null, this.indexFrom = 0, this.indexCount = 0;
  }
  clone() {
    const e2 = new r$2();
    return e2.geometryType = this.geometryType, e2.materialKey = this.materialKey, e2.indexFrom = this.indexFrom, e2.indexCount = this.indexCount, e2;
  }
}
class s$1 {
  constructor() {
    this.fill = null, this.line = null, this.marker = null, this.text = null, this.label = null, this.unified = null;
  }
  clone() {
    const e2 = new s$1();
    return e2.fill = this.fill && this.fill.map((e3) => e3.clone()), e2.line = this.line && this.line.map((e3) => e3.clone()), e2.marker = this.marker && this.marker.map((e3) => e3.clone()), e2.text = this.text && this.text.map((e3) => e3.clone()), e2.label = this.label && this.label.map((e3) => e3.clone()), e2.unified = this.unified && this.unified.map((e3) => e3.clone()), e2;
  }
}
class l {
  constructor() {
    this.geometryDPInfo = new s$1();
  }
  clone() {
    const e2 = new l();
    return e2.zLevel = this.zLevel, e2.geometryDPInfo = this.geometryDPInfo.clone(), e2;
  }
}
class m {
  constructor() {
    this.zLevels = [];
  }
  clone() {
    const e2 = new m();
    e2.symbolLevel = this.symbolLevel;
    for (const t2 of this.zLevels)
      e2.zLevels.push(t2.clone());
    return e2;
  }
}
function e(s2) {
  const t2 = [[], [], [], [], []], i2 = s2;
  for (const e2 of i2)
    for (const s3 of e2.displayRecords)
      t2[s3.geometryType].push(s3);
  return t2;
}
class r$1 {
  constructor() {
  }
  get displayObjectRegistry() {
    if (!this._displayObjectRegistry) {
      this._displayObjectRegistry = new Map();
      for (const s2 of this.displayObjects)
        this._displayObjectRegistry.set(s2.id, s2);
    }
    return this._displayObjectRegistry;
  }
  get displayList() {
    return this._displayList;
  }
  computeDisplayList() {
    this._displayList = new i();
    for (const s2 of this.displayObjects)
      for (const t2 of s2.displayRecords)
        this._displayList.addToList(t2);
  }
  clone() {
    const s2 = new r$1();
    return this.displayObjects && (s2.displayObjects = this.displayObjects.map((s3) => s3.clone())), s2;
  }
  serialize(s2) {
    return e$2(s2, this.displayObjects), s2;
  }
  _deserializeObjects(s2) {
    const t2 = s2.readInt32(), e2 = new Array(t2), r2 = new Map();
    for (let a2 = 0; a2 < e2.length; ++a2) {
      const t3 = e$1.deserialize(s2);
      e2[a2] = t3, r2.set(t3.id, t3);
    }
    this.displayObjects = e2, this._displayList = null, this._displayObjectRegistry = r2;
  }
  static deserialize(s2) {
    const t2 = new r$1();
    return t2._deserializeObjects(s2), t2;
  }
}
class t$2 {
  constructor(e2, t2) {
    this.data = e2, this.stride = t2;
  }
  static decode(r2) {
    const s2 = O(r2.data, r2.stride), o2 = r2.stride;
    return new t$2(s2, o2);
  }
  static fromVertexVector(r2) {
    const s2 = O(r2.data.buffer(), r2.stride), o2 = r2.stride;
    return new t$2(s2, o2);
  }
}
class r {
  constructor(e2, t2, r2) {
    this.geometryType = e2, this.indexBuffer = new Uint32Array(t2), this.namedBuffers = r2;
  }
  static decode(e2) {
    const s2 = e2.geometryType, o2 = e2.indexBuffer, n2 = {};
    for (const r2 in e2.namedBuffers)
      n2[r2] = t$2.decode(e2.namedBuffers[r2]);
    return new r(s2, o2, n2);
  }
  static fromVertexData(s2, o2) {
    const n2 = s2.indices, c2 = O(s2.vertices, s2.stride), i2 = s2.stride, d2 = { geometry: new t$2(c2, i2) };
    return new r(o2, n2, d2);
  }
  static fromVertexVectors(e2) {
    const s2 = e2.geometryType, o2 = e2.indexVector.buffer(), n2 = {};
    for (const r2 in e2.namedVectors)
      n2[r2] = t$2.fromVertexVector(e2.namedVectors[r2]);
    return new r(s2, o2, n2);
  }
}
class s {
  constructor(t2, e2) {
    this.data = t2, this.stride = e2;
  }
  get vertexCount() {
    const t2 = this.stride / 4, e2 = this.data.length / t2;
    return e2 !== (0 | e2) && console.debug("Corrupted stride"), e2;
  }
  transfer(t2, e2) {
    const r2 = this.data.buffer();
    t2.vertexCount = this.vertexCount, t2.data = r2, t2.stride = this.stride, e2.push(r2);
  }
}
class o$1 {
  constructor(e2, o2, n2 = false) {
    this.geometryType = e2, this.indexVector = new r$7(Uint32Array, 6 * o2), this.namedVectors = {};
    const i2 = T(e2, n2);
    for (const t2 in i2) {
      const e3 = i2[t2];
      let n3;
      switch (e3 % 4) {
        case 0:
        case 2:
          n3 = new r$7(Uint32Array, e3 * o2);
          break;
        case 1:
        case 3:
          n3 = new r$7(Uint8Array, e3 * o2);
      }
      this.namedVectors[t2] = new s(n3, e3);
    }
  }
  get(t2) {
    return this.namedVectors[t2].data;
  }
  getVector(t2) {
    return this.namedVectors[t2];
  }
  transfer(t2, e2) {
    const r2 = this.indexVector.buffer(), s2 = {};
    e2.push(r2);
    for (const o2 in this.namedVectors) {
      const t3 = this.namedVectors[o2];
      s2[o2] = {}, t3.transfer(s2[o2], e2);
    }
    t2.geometryType = this.geometryType, t2.indexBuffer = r2, t2.namedBuffers = s2, this.destroy();
  }
  intoBuffers() {
    const t2 = r.fromVertexVectors(this);
    return this.destroy(), t2;
  }
  destroy() {
    this.indexVector = null, this.namedVectors = null;
  }
}
const d$1 = new e$3(), p = new e$3(), h = 1.5, x = 5;
function B$1(e2, r2) {
  const s2 = {};
  for (const i2 in e2) {
    const a2 = { data: R(r2, e2[i2]), stride: e2[i2] };
    s2[i2] = a2;
  }
  return s2;
}
function y(e2) {
  return [e2.fill || {}, e2.line || {}, e2.icon || {}, e2.text || {}, e2.label || {}];
}
class g {
  constructor() {
    this.tileDisplayData = null, this.tileBufferData = null;
  }
  reshuffle() {
    d$1.reset();
    const e$12 = e(this.tileDisplayData.displayObjects);
    for (const t2 of e$12)
      for (const e2 of t2)
        e2 && d$1.needMore(e2.geometryType, e2.meshData ? e2.meshData.vertexCount : e2.vertexCount, e2.meshData ? e2.meshData.indexData.length : e2.indexCount);
    const s2 = e$12.length, i2 = new f$1();
    for (let r2 = 0; r2 < s2; ++r2) {
      i2.geometries[r2].indexBuffer = new Uint32Array(Math.round(h * d$1.indicesFor(r2)));
      const e2 = [];
      for (const t2 in this.tileBufferData.geometries[r2].vertexBuffer)
        e2.push(this.tileBufferData.geometries[r2].vertexBuffer[t2].stride);
      const s3 = g._computeVertexAlignment(e2), a2 = Math.round(h * d$1.verticesFor(r2)), o2 = g._align(a2, s3);
      for (const f2 in this.tileBufferData.geometries[r2].vertexBuffer) {
        const e3 = this.tileBufferData.geometries[r2].vertexBuffer[f2].stride;
        i2.geometries[r2].vertexBuffer[f2] = { stride: e3, data: R(o2, e3) };
      }
    }
    p.reset(), this.tileDisplayData.displayList.clear();
    for (let t2 = 0; t2 < s2; ++t2) {
      const s3 = e$12[t2];
      for (const e2 of s3) {
        if (e2.meshData)
          e2.writeMeshDataToBuffers(p.verticesFor(t2), i2.geometries[t2].vertexBuffer, p.indicesFor(t2), i2.geometries[t2].indexBuffer), e2.meshData = null;
        else {
          const s4 = this.tileBufferData.geometries[t2].vertexBuffer, a2 = this.tileBufferData.geometries[t2].indexBuffer, o2 = i2.geometries[t2].vertexBuffer, f2 = i2.geometries[t2].indexBuffer, n2 = p.verticesFor(t2), l2 = p.indicesFor(t2);
          Z(n2, l2, o2, f2, e2, s4, a2), e2.vertexFrom = n2, e2.indexFrom = l2;
        }
        p.needMore(t2, e2.vertexCount, e2.indexCount);
      }
    }
    for (const t2 of this.tileDisplayData.displayObjects)
      this.tileDisplayData.displayList.addToList(t2.displayRecords);
    this.tileBufferData = i2;
  }
  getStrides() {
    const e2 = [];
    for (let t2 = 0; t2 < this.tileBufferData.geometries.length; ++t2) {
      const r2 = this.tileBufferData.geometries[t2];
      e2[t2] = {};
      for (const s2 in r2.vertexBuffer)
        e2[t2][s2] = r2.vertexBuffer[s2].stride;
    }
    return e2;
  }
  clone() {
    const e2 = new g();
    return e2.tileBufferData = this.tileBufferData.clone(), e2.tileDisplayData = this.tileDisplayData.clone(), e2;
  }
  _guessSize() {
    const { displayObjects: e2 } = this.tileDisplayData, t2 = Math.min(e2.length, 4), r2 = 12, s2 = 40;
    let i2 = 0;
    for (let a2 = 0; a2 < t2; a2++)
      i2 = Math.max(i2, e2[a2].displayRecords.length);
    return 2 * (e2.length * r2 + e2.length * i2 * s2);
  }
  serialize() {
    const e2 = this.tileBufferData.serialize(), t2 = this.tileBufferData.getBuffers(), r2 = this.tileDisplayData.serialize(new r$7(Int32Array, this._guessSize())).buffer();
    return t2.push(r2), { result: { displayData: r2, bufferData: e2 }, transferList: t2 };
  }
  static fromVertexData(t2) {
    const r$12 = [], a2 = {}, o2 = new Map();
    return te((s2) => {
      const l2 = t2.data[s2];
      if (r$8(l2)) {
        const e2 = r$9.from(l2.records).getCursor();
        for (; e2.next(); ) {
          const t3 = e2.id, i2 = e2.materialKey, a3 = e2.insertAfter, l3 = e2.indexFrom, u2 = e2.indexCount, c2 = e2.vertexFrom, m2 = e2.vertexCount;
          if (!o2.has(t3)) {
            const e3 = new e$1(t3);
            e3.insertAfter = a3, o2.set(t3, e3), r$12.push(e3);
          }
          const D2 = o2.get(t3), d2 = new s$2(t3, s2, i2);
          d2.indexFrom = l3, d2.indexCount = u2, d2.vertexFrom = c2, d2.vertexCount = m2, D2.displayRecords.push(d2);
        }
        a2[s2] = r.fromVertexData(l2, s2);
      } else
        a2[s2] = new o$1(s2, 0).intoBuffers();
    }), r$12.sort((e2, t3) => e2.id - t3.id), g.fromMeshData({ displayObjects: r$12, vertexBuffersMap: a2 });
  }
  static fromMeshData(e2) {
    const t2 = new g(), r2 = new r$1(), s2 = new f$1();
    r2.displayObjects = e2.displayObjects;
    for (const i2 in e2.vertexBuffersMap) {
      const t3 = e2.vertexBuffersMap[i2];
      s2.geometries[i2].indexBuffer = t3.indexBuffer, s2.geometries[i2].vertexBuffer = t3.namedBuffers;
    }
    return t2.tileDisplayData = r2, t2.tileBufferData = s2, t2;
  }
  static bind(e2, t2) {
    const r2 = new g();
    return r2.tileDisplayData = e2, r2.tileBufferData = t2, r2;
  }
  static create(e2, t2) {
    const r2 = new g();
    r2.tileDisplayData = new r$1(), r2.tileDisplayData.displayObjects = e2;
    const s2 = [0, 0, 0, 0, 0], i2 = [0, 0, 0, 0, 0], a2 = [[], [], [], [], []];
    for (const o2 of e2)
      for (const e3 of o2.displayRecords)
        a2[e3.geometryType].push(e3), s2[e3.geometryType] += e3.meshData.vertexCount, i2[e3.geometryType] += e3.meshData.indexData.length;
    const n2 = new f$1(), u2 = y(t2);
    for (let o2 = 0; o2 < x; o2++) {
      const e3 = new Uint32Array(i2[o2]), t3 = B$1(u2[o2], s2[o2]);
      s$2.writeAllMeshDataToBuffers(a2[o2], t3, e3), n2.geometries[o2] = { indexBuffer: e3, vertexBuffer: t3 };
    }
    return r2.tileBufferData = n2, r2;
  }
  static _align(e2, t2) {
    const r2 = e2 % t2;
    return r2 === 0 ? e2 : e2 + (t2 - r2);
  }
  static _computeVertexAlignment(e2) {
    let t2 = false, r2 = false;
    for (const s2 of e2)
      s2 % 4 == 2 ? t2 = true : s2 % 4 != 0 && (r2 = true);
    return r2 ? 4 : t2 ? 2 : 1;
  }
}
class o extends c$2 {
  constructor(r2, t2) {
    super(r2, t2, null);
  }
  static from(s2) {
    const n2 = d$4.createInstance(), i2 = [], c2 = s2.filter((r2) => !!r2.geometry);
    for (const e2 of c2) {
      const s3 = d$5(e2.geometry);
      Q(i2, [e2], s3, false, false, "uid");
    }
    return new o(n2, i2);
  }
  get geometryType() {
    const r2 = this._current;
    return r2 ? r2.geometryType : null;
  }
  get insertAfter() {
    return this._current.insertAfter;
  }
  readGraphic() {
    return this._current;
  }
  getCursor() {
    return this.copy();
  }
  copy() {
    const r2 = new o(this.instance, this._features);
    return this.copyInto(r2), r2;
  }
}
const c = new t$6(), d = new t$6(), f = "esriGeometryPolyline";
function b(t2) {
  t2.coords.length = 0, t2.lengths.length = 0;
}
class j {
  constructor() {
    this.bounds = i$2(), this.graphic = null, this.size = [0, 0, 0, 0];
  }
  static acquire(t2 = null, e2, s2, r2, o2, i2) {
    let h2;
    return j._pool.length === 0 ? h2 = new j() : (h2 = j._pool.pop(), this._set.delete(h2)), h2.acquire(t2, e2, s2, r2, o2, i2), h2;
  }
  static release(t2) {
    t2 && !this._set.has(t2) && (t2.release(), this._pool.push(t2), this._set.add(t2));
  }
  static getCentroidQuantized(r2, o2) {
    if (y$2(r2.geometry)) {
      const s2 = r2.symbol;
      if (t$5(s2))
        return null;
      if (H(s2.type) || C$1(s2.type)) {
        const t2 = e$5(r2.geometry);
        return L(o2, {}, { x: t2[0], y: t2[1] }, false, false);
      }
    }
    return null;
  }
  acquire(t2 = null, e2, s2, r2, o2, i2) {
    t2 && this.set(t2, e2, s2, r2, o2, i2);
  }
  release() {
    this.graphic = null, this.symbolResource = null, this.geometry = null;
  }
  get symbol() {
    return this.symbolResource.symbol;
  }
  set(t2, e2, s2, r2, o2, i2) {
    this.graphic = t2, this.geometry = s2, this.symbolResource = e2, this.updateBounds(r2, o2, i2);
  }
  updateBounds(t2, e2, s2) {
    A(this.bounds, this.size, this.symbolResource, this.geometry, t2, e2, s2);
  }
  getGeometryQuantized(t2) {
    if (y$2(this.geometry)) {
      const e2 = this.geometry.rings;
      if (e2.length === 1 && e2[0].length === 2)
        return d$6(t2, { paths: [[e2[0][0], e2[0][1]]] });
    } else if (f$2(this.geometry))
      return b(c), b(d), U(c, this.geometry), le(d, c, this.geometry.hasZ, this.geometry.hasM, f, t2.scale[0]), ce(c, d, this.geometry.hasZ, this.geometry.hasM, f, t2), A$1(c, this.geometry.hasZ, this.geometry.hasM);
    return d$6(t2, this.geometry);
  }
}
j._pool = [], j._set = new Set();
const G = { minX: 0, minY: 0, maxX: 0, maxY: 0 }, z = i$2(), I = [], B = 1e-5;
function v(e2, t2, i2, r2, s2) {
  return G.minX = t2, G.minY = i2, G.maxX = r2, G.maxY = s2, e2.search(G);
}
class w {
  constructor(i2, r2, s2, o2, a2, h2) {
    this._graphics = o2, this._onAdd = a2, this._onRemove = h2, this._index = i$4(9, t$7("csp-restrictions") ? (e2) => ({ minX: e2.bounds[0], minY: e2.bounds[1], maxX: e2.bounds[2], maxY: e2.bounds[3] }) : [".bounds[0]", ".bounds[1]", ".bounds[2]", ".bounds[3]"]), this._itemByGraphic = new Map(), this._currentLevel = -1 / 0, this._tileInfoView = i2, this._uidFieldName = s2;
    const u2 = i2.getClosestInfoForScale(r2);
    u2 && (this._currentLevel = u2.level, this._resolution = this._tileInfoView.getTileResolution(u2.level));
    const c2 = i2.spatialReference;
    this._metersPerUnit = s$8(c2) ? H$1(i2.spatialReference) : 1;
  }
  hitTest(e2, t2, n2, u2, c2) {
    e2 = k(e2, this._tileInfoView.spatialReference);
    const l2 = 0.5 * u2 * n2;
    z[0] = e2 - l2, z[1] = t2 - l2, z[2] = e2 + l2, z[3] = t2 + l2;
    const b2 = 0.5 * u2 * (n2 + P), x2 = v(this._index, e2 - b2, t2 - b2, e2 + b2, t2 + b2);
    if (!x2 || x2.length === 0)
      return [];
    const G2 = { x: e2, y: t2 }, I2 = [];
    let B2;
    for (const m2 of x2)
      if (m2.graphic.visible)
        switch (d$5(m2.geometry)) {
          case "esriGeometryPoint":
            {
              const e3 = m2.symbol;
              if (!e3)
                continue;
              const t3 = m2.geometry, { x: r2, y: s2 } = t3, o2 = u2 * this._metersPerUnit;
              let n3;
              switch (e3.type) {
                case "esriTS":
                  n3 = K(r2, s2, e3, m2.size, u2, c2);
                  break;
                case "expanded-cim":
                  n3 = J(r2, s2, e3, u2, o2, c2);
                  break;
                case "esriSMS":
                case "esriPMS":
                  n3 = G$1(r2, s2, e3, u2, o2, c2);
              }
              f$3(n3, G2) && I2.push(m2);
            }
            break;
          case "esriGeometryPolyline":
            {
              const i2 = m2.symbol;
              if (!i2 || !i2.layers.length)
                continue;
              const r2 = i2.layers[0];
              B2 = 1.5 * u2 * window.devicePixelRatio * u$3(r2.width), D(m2.geometry, e2, t2, B2) && I2.push(m2);
            }
            break;
          case "esriGeometryEnvelope": {
            const e3 = m2.geometry, t3 = u$2(e3.xmin, e3.ymin, e3.xmax, e3.ymax);
            F(t3, z) && I2.push(m2);
            break;
          }
          case "esriGeometryPolygon": {
            if (f$3(m2.geometry, G2)) {
              I2.push(m2);
              break;
            }
            const e3 = v$1(m2.geometry);
            if (Math.abs(e3.ymax - e3.ymin) < 5 * u2 || Math.abs(e3.xmax - e3.xmin) < 5 * u2) {
              const t3 = u$2(e3.xmin, e3.ymin, e3.xmax, e3.ymax);
              F(t3, z) && I2.push(m2);
            }
            break;
          }
          case "esriGeometryMultipoint": {
            const e3 = m2.symbol;
            if (!e3)
              continue;
            const t3 = m2.geometry.points;
            let r2;
            for (let s2 = 0; s2 < t3.length; s2++)
              if (r2 = e3.type === "esriTS" ? K(t3[s2][0], t3[s2][1], e3, m2.size, u2, c2) : G$1(t3[s2][0], t3[s2][1], e3, u2, u2 * this._metersPerUnit, c2), f$3(r2, G2)) {
                I2.push(m2);
                break;
              }
            break;
          }
        }
    return I2.sort((e3, t3) => {
      const i2 = W(e3.graphic), r2 = W(t3.graphic);
      return i2 === r2 ? t3.zorder - e3.zorder : i2 - r2;
    }), I2.map((e3) => e3.graphic);
  }
  getGraphicsData(e2, t2, i2) {
    const r2 = this._searchForItems(t2);
    if (r2.length === 0 || i2.length === 0)
      return [];
    r2.sort((e3, t3) => e3.zorder - t3.zorder), r2[0].insertAfter = -1;
    for (let u2 = 1; u2 < r2.length; u2++)
      r2[u2].insertAfter = r2[u2 - 1].graphic.uid;
    r2.sort((e3, t3) => e3.graphic.uid - t3.graphic.uid), i2.sort((e3, t3) => e3.uid - t3.uid);
    let s2, o2 = 0, n2 = 0;
    const a2 = [], h2 = { originPosition: "upperLeft", scale: [t2.resolution, t2.resolution], translate: [t2.bounds[0], t2.bounds[3]] };
    for (const u2 of i2) {
      for (n2 = -2; o2 < r2.length; )
        if (s2 = r2[o2], o2++, u2.uid === s2.graphic.uid) {
          n2 = s2.insertAfter;
          break;
        }
      if (!s2.geometry || n2 === -2)
        continue;
      const t3 = s2.getGeometryQuantized(h2), i3 = __spreadValues({}, s2.graphic.attributes);
      i3[this._uidFieldName] = u2.uid, s2.groupId == null && (s2.groupId = e2.createTemplateGroup(s2.symbol, null)), a2.push({ centroid: j.getCentroidQuantized(s2, h2), geometry: t3, attributes: i3, symbol: s2.symbol, groupId: s2.groupId, insertAfter: n2, zorder: s2.zorder });
    }
    return a2.sort((e3, t3) => e3.zorder - t3.zorder), a2;
  }
  queryTileData(e2, t2) {
    const { bounds: i2, resolution: r2 } = t2, s2 = this._searchForItems(t2), o2 = [];
    return this._createTileGraphics(o2, e2, s2, { originPosition: "upperLeft", scale: [r2, r2], translate: [i2[0], i2[3]] }), o2;
  }
  has(e2) {
    return this._itemByGraphic.has(e2);
  }
  getBounds(e2) {
    return this._itemByGraphic.has(e2) ? this._itemByGraphic.get(e2).bounds : null;
  }
  addOrModify(e2, t2, i2) {
    if (!e2)
      return;
    this.has(e2) && this.remove(e2), this._onAdd(e2);
    const r2 = j.acquire(e2, t2, i2, this._resolution, this._resolution * this._metersPerUnit, this._tileInfoView.spatialReference);
    return this._itemByGraphic.set(e2, r2), i2 && this._index.insert(r2), r2.bounds;
  }
  remove(e2) {
    if (!this._itemByGraphic.has(e2))
      return;
    this._onRemove(e2);
    const t2 = this._itemByGraphic.get(e2);
    this._index.remove(t2), this._itemByGraphic.delete(e2);
  }
  updateZ() {
    const e2 = this._graphics.items;
    let t2, i2;
    for (let r2 = 0; r2 < e2.length; r2++)
      i2 = e2[r2], t2 = this._itemByGraphic.get(i2), t2 && (t2.zorder = r2);
  }
  update(e2, t2, i2) {
    const r2 = this._itemByGraphic.get(e2);
    r2.groupId = null;
    const s2 = e$6(r2.bounds);
    return r2.size[0] = r2.size[1] = 0, this._index.remove(r2), r2.set(e2, t2, i2, this._resolution, this._resolution * this._metersPerUnit, this._tileInfoView.spatialReference), i2 && this._index.insert(r2), { oldBounds: s2, newBounds: r2.bounds };
  }
  updateLevel(e2) {
    if (this._currentLevel === e2)
      return;
    this._currentLevel = e2;
    const t2 = this._tileInfoView.getTileResolution(e2);
    this._resolution = t2, this._index.clear(), I.length = 0, this._itemByGraphic.forEach((e3) => {
      e3.updateBounds(this._resolution, this._resolution * this._metersPerUnit, this._tileInfoView.spatialReference), e3.geometry && I.push(e3);
    }), this._index.load(I);
  }
  clear() {
    this._itemByGraphic.clear(), this._index.clear();
  }
  _createTileGraphics(e2, t2, i2, r2) {
    const s2 = this._uidFieldName;
    let o2, n2, a2, h2;
    i2.sort((e3, t3) => e3.zorder - t3.zorder);
    for (let u2 = 0; u2 < i2.length; u2++) {
      a2 = i2[u2], o2 = a2.graphic, n2 = a2.getGeometryQuantized(r2), h2 = u2 === 0 ? -1 : i2[u2 - 1].graphic.uid;
      const c2 = __spreadValues({}, a2.graphic.attributes);
      c2[s2] = o2.uid, a2.groupId == null && (a2.groupId = t2.createTemplateGroup(a2.symbol, null)), e2.push({ centroid: j.getCentroidQuantized(a2, r2), geometry: n2, attributes: c2, symbol: a2.symbol, groupId: a2.groupId, insertAfter: h2, zorder: a2.zorder });
    }
  }
  _searchForItems(e2) {
    const t2 = this._tileInfoView.spatialReference, i2 = e2.bounds;
    if (t2.isWrappable) {
      const [r2, s2] = a$2(t2), o2 = Math.abs(i2[2] - s2) < B, n2 = Math.abs(i2[0] - r2) < B;
      if ((!o2 || !n2) && (o2 || n2)) {
        const t3 = e2.resolution;
        let n3;
        n3 = i$2(o2 ? [r2, i2[1], r2 + t3 * P, i2[3]] : [s2 - t3 * P, i2[1], s2, i2[3]]);
        const a2 = v(this._index, i2[0], i2[1], i2[2], i2[3]), h2 = v(this._index, n3[0], n3[1], n3[2], n3[3]);
        return [...new Set([...a2, ...h2])];
      }
    }
    return v(this._index, i2[0], i2[1], i2[2], i2[3]);
  }
}
const t$1 = (t2) => {
  let p2 = class extends r$a(t2) {
    constructor() {
      super(...arguments), this.graphics = null, this.renderer = null, this.view = null;
    }
  };
  return e$7([y$4()], p2.prototype, "graphics", void 0), e$7([y$4()], p2.prototype, "renderer", void 0), e$7([y$4()], p2.prototype, "updating", void 0), e$7([y$4()], p2.prototype, "view", void 0), p2 = e$7([i$5("esri.views.layers.GraphicsView")], p2), p2;
};
function $(t2, e2, i2) {
  if (i2.has(t2))
    return i2.get(t2);
  const s2 = { tile: e2, addedOrModified: [], removed: [] };
  return i2.set(t2, s2), s2;
}
let tt = class extends t$1(a$3(u$4)) {
  constructor(t2) {
    super(t2), this._storage = new u$5(), this._displayIds = new Map(), this._tiles = new Map(), this._graphicStoreUpdate = false, this._graphicsSet = new Set(), this._matcher = Promise.resolve(null), this._tileUpdateSet = new Set(), this._tilesToUpdate = new Map(), this._graphicIdToAbortController = new Map(), this._attached = false, this._highlightIds = new Map(), this._updatingGraphicsTimer = null, this._hashToExpandedSymbol = new Map(), this._hashTpExpandedSymbolPromise = new Map(), this._processing = false, this._needsProcessing = false, this._pendingUpdate = { added: new Set(), updated: new Set(), removed: new Set() }, this.lastUpdateId = -1, this.updateRequested = false, this.graphicUpdateHandler = this.graphicUpdateHandler.bind(this);
  }
  _createMatcher(t2, e2) {
    if (t2) {
      const i2 = W$1({ indexCount: 0, fields: {} }, "feature", t2);
      this._matcher = s$9(i2, e2, null);
    }
  }
  _createDisplayId(t2) {
    return this._displayIds.has(t2) || this._displayIds.set(t2, this._storage.createDisplayId()), this._displayIds.get(t2);
  }
  initialize() {
    this._tileStore = new l$3(this.view.featuresTilingScheme), this._attributeStore = new O$1({ type: "local", initialize: (t3) => Promise.resolve(this.container.attributeView.initialize(t3)), update: (t3) => this.container.attributeView.requestUpdate(t3), render: () => this.container.requestRender() }, r$b());
    const t2 = (t3) => {
      this._createDisplayId(t3.uid), this._setFilterState(t3.uid, t3.visible);
    }, e2 = (t3) => {
      const e3 = this._displayIds.get(t3.uid);
      this._displayIds.delete(t3.uid), this._storage.releaseDisplayId(e3);
    };
    this._graphicStore = new w(this.view.featuresTilingScheme, this.view.state.scale, this.uid, this.graphics, t2, e2);
    const i2 = new k$1(this.container.getMaterialItems.bind(this.container), true);
    this._createMatcher(this.renderer, i2), this._meshFactory = new i$6(null, this.uid, i2), this._templateStore = i2, this.watch("renderer", (t3) => {
      this._createMatcher(t3, i2);
      for (const e3 of this.graphics)
        this._pendingUpdate.updated.add(e3);
      this.requestUpdate();
    }), this._tileStore.on("update", this._onTileUpdate.bind(this)), this.container.on("attach", () => {
      this.graphics.items.length > 0 && this._graphicsChangeHandler({ target: this.graphics, added: this.graphics.items, removed: [], moved: [] }), this.handles.add(this.graphics.on("change", (t3) => this._graphicsChangeHandler(t3)), "graphics"), this._attached = true, this.notifyChange("updating");
    });
  }
  destroy() {
    this._updatingGraphicsTimer && (clearTimeout(this._updatingGraphicsTimer), this._updatingGraphicsTimer = null, this.notifyChange("updating")), this.container.destroy(), this._set("graphics", null), this._graphicStore.clear(), this._tileStore.destroy(), this._attributeStore = null, this._hashToExpandedSymbol.clear(), this.view = null, this.renderer = null;
  }
  get updating() {
    return !this._attached || this._updatingGraphicsTimer !== null || this._tileUpdateSet.size > 0 || this._tilesToUpdate.size > 0;
  }
  hitTest(t2, e2) {
    if (!this.view || !this.view.position)
      return Promise.resolve(null);
    const i2 = this.view.toMap(c$3(t2, e2));
    return this.searchFeatures(i2).then((t3) => t3 && t3.length ? t3[0] : null);
  }
  searchFeatures(t2, e2 = 2) {
    return __async(this, null, function* () {
      return this._graphicStore.hitTest(t2.x, t2.y, e2, this.view.state.resolution, this.view.state.rotation);
    });
  }
  update(t2) {
    const e2 = t2.state, i2 = this.view.featuresTilingScheme.getClosestInfoForScale(e2.scale).level;
    if (this._graphicStore.updateLevel(i2), this._tileStore.setViewState(e2), this._graphicStoreUpdate = true, this.updateRequested = false, this._pendingUpdate.updated.size > 0) {
      if (!this._processing)
        return void this._updateGraphics();
      this._needsProcessing = true;
    }
  }
  viewChange() {
    this.requestUpdate();
  }
  requestUpdate() {
    this.updateRequested || (this.updateRequested = true, this.requestUpdateCallback());
  }
  processUpdate(t2) {
    this.updateRequested && (this.updateRequested = false, this.update(t2));
  }
  graphicUpdateHandler(t2) {
    const { graphic: e2, property: i2, newValue: s2 } = t2;
    switch (i2) {
      case "attributes":
        break;
      case "geometry":
      case "symbol":
        this._pendingUpdate.updated.add(e2), this.requestUpdate();
        break;
      case "visible":
        this._setFilterState(e2.uid, s2), this._attributeStore.sendUpdates();
    }
  }
  addHighlight(t2) {
    for (const e2 of t2)
      if (this._highlightIds.has(e2)) {
        const t3 = this._highlightIds.get(e2);
        this._highlightIds.set(e2, t3 + 1);
      } else
        this._highlightIds.set(e2, 1);
    this._updateHighlight();
  }
  removeHighlight(t2) {
    for (const e2 of t2)
      if (this._highlightIds.has(e2)) {
        const t3 = this._highlightIds.get(e2) - 1;
        t3 === 0 ? this._highlightIds.delete(e2) : this._highlightIds.set(e2, t3);
      }
    this._updateHighlight();
  }
  _updateHighlight() {
    const t2 = Array.from(this._highlightIds.keys()), e2 = t2.map((t3) => this._displayIds.get(t3));
    this._attributeStore.setHighlight(t2, e2);
  }
  _getIntersectingTiles(t2) {
    const i2 = this._graphicStore.getBounds(t2);
    if (!i2 || x$1(i2) === 0 || M$1(i2) === 0)
      return [];
    const s2 = T$1(i2, this.view.spatialReference);
    return r$8(s2) ? [...this._tileStore.boundsIntersections(s2[0]), ...this._tileStore.boundsIntersections(s2[1])] : this._tileStore.boundsIntersections(i2);
  }
  _updateTile(t2) {
    return __async(this, null, function* () {
      const e2 = t2.tile, i2 = this._getGraphicsData(this._templateStore, e2, t2.addedOrModified), s2 = yield this._processGraphics(e2, i2);
      return this._patchTile(e2.key, { type: "update", addOrUpdate: s2, remove: t2.removed, end: true, clear: false }), s2;
    });
  }
  _patchTile(t2, e2) {
    if (!this._tiles.has(t2))
      return;
    const i2 = this._tiles.get(t2);
    this.container.onTileData(i2, e2), this.container.requestRender();
  }
  _graphicsChangeHandler(t2) {
    for (const e2 of t2.added)
      this._pendingUpdate.added.add(e2);
    for (const e2 of t2.moved)
      this._pendingUpdate.added.add(e2);
    for (const e2 of t2.removed)
      this._pendingUpdate.added.has(e2) ? this._pendingUpdate.added.delete(e2) : this._pendingUpdate.removed.add(e2);
    this._processing ? this._needsProcessing = true : this._updateGraphics();
  }
  _getGraphicsToUpdate() {
    const t2 = { added: [], removed: [], updated: [] };
    if (!this.graphics)
      return t2;
    const e2 = this._pendingUpdate;
    for (const i2 of this.graphics.items)
      e2.added.has(i2) ? t2.added.push(i2) : e2.updated.has(i2) && t2.updated.push(i2);
    for (const i2 of e2.removed)
      this._graphicStore.has(i2) && t2.removed.push(i2);
    return e2.added.clear(), e2.removed.clear(), e2.updated.clear(), t2;
  }
  _updateGraphics() {
    return __async(this, null, function* () {
      this._processing = true;
      const { added: t2, removed: e2, updated: i2 } = this._getGraphicsToUpdate(), s2 = this._tilesToUpdate;
      let r2;
      try {
        if (!this._graphicStoreUpdate) {
          const t3 = this.view.state, e3 = this.view.featuresTilingScheme.getClosestInfoForScale(t3.scale).level;
          this._graphicStore.updateLevel(e3), this._tileStore.setViewState(t3);
        }
        const a2 = [], o2 = new Array(t2.length + e2.length);
        for (let t3 = 0; t3 < i2.length; t3++) {
          const e3 = i2[t3], h3 = this._getIntersectingTiles(e3);
          for (const t4 of h3) {
            r2 = t4.id;
            $(r2, t4, s2).removed.push(this._displayIds.get(e3.uid));
          }
          a2.push(this._updateGraphic(e3, null)), o2[t3] = e3;
        }
        const h2 = i2.length;
        for (let e3 = 0; e3 < t2.length; e3++) {
          const i3 = t2[e3];
          o2[h2 + e3] = i3, this._graphicsSet.add(i3), a2.push(this._addGraphic(i3));
        }
        for (const t3 of e2) {
          this._abortProcessingGraphic(t3.uid);
          const e3 = this._getIntersectingTiles(t3);
          for (const i3 of e3) {
            r2 = i3.id;
            $(r2, i3, s2).removed.push(this._displayIds.get(t3.uid));
          }
          this._graphicsSet.delete(t3), this._graphicStore.remove(t3);
        }
        let n2;
        this._flipUpdatingGraphics(), yield Promise.all(a2);
        for (let t3 = 0; t3 < o2.length; t3++) {
          n2 = o2[t3];
          const e3 = this._getIntersectingTiles(n2);
          for (const t4 of e3) {
            r2 = t4.id;
            $(r2, t4, s2).addedOrModified.push(n2);
          }
        }
        this._graphicStore.updateZ();
        const d2 = [];
        for (const [t3, e3] of s2)
          d2.push(this._updateTile(e3));
        yield Promise.all(d2);
      } catch (a2) {
      }
      for (const o2 of e2) {
        const t3 = yield this._getSymbolForGraphic(o2, {});
        t3 && this._hashToExpandedSymbol.delete(t3.hash());
      }
      s2.clear(), this.notifyChange("updating"), this._processing = false, this._needsProcessing && (this._needsProcessing = false, this._updateGraphics());
    });
  }
  _getArcadeInfo(t2) {
    const e2 = (t2.attributes ? Object.keys(t2.attributes) : []).map((e3) => ({ name: e3, alias: e3, type: typeof t2.attributes[e3] == "string" ? "esriFieldTypeString" : "esriFieldTypeDouble" }));
    return t$5(t2.geometry) ? null : { geometryType: d$5(t2.geometry), spatialReference: k$2.fromJSON(t2.geometry.spatialReference), fields: e2 };
  }
  _getSymbolForGraphic(t2, i2) {
    return __async(this, null, function* () {
      return r$8(t2.symbol) ? t2.symbol : r$8(this.renderer) ? this.renderer.getSymbolAsync(t2, { scale: this.view.scale, abortOptions: i2 }) : this._getNullSymbol(t2);
    });
  }
  _getSymbolResources(t2, e2) {
    return __async(this, null, function* () {
      if (!this.container.stage)
        return Promise.resolve(null);
      const i2 = yield this._getSymbolForGraphic(t2, e2), s2 = i2.hash();
      let r2 = this._hashToExpandedSymbol.get(s2);
      if (!r2) {
        let h2 = this._hashTpExpandedSymbolPromise.get(s2);
        if (h2)
          r2 = yield h2;
        else {
          const n2 = this._getArcadeInfo(t2), d2 = S$1(i2);
          h2 = i$7(d2, n2, e2), this._hashTpExpandedSymbolPromise.set(s2, h2);
          try {
            r2 = yield h2, this._hashTpExpandedSymbolPromise.delete(s2), this._hashToExpandedSymbol.set(s2, r2);
          } catch (o2) {
            this._hashTpExpandedSymbolPromise.delete(s2), a$4(o2);
          }
        }
      }
      if (r2.type === "esriTS") {
        const t3 = [], [e3] = n$3(r2.text);
        for (let r3 = 0; r3 < e3.length; r3++)
          t3.push(e3.charCodeAt(r3));
        const i3 = { symbol: r2, id: 0, glyphIds: t3 }, [{ mosaicItem: s3 }] = yield this.container.getMaterialItems([i3]);
        return { symbol: r2, mosaicItem: s3 };
      }
      return { symbol: r2, mosaicItem: null };
    });
  }
  _projectAndNormalizeGeometry(t2, e2) {
    return __async(this, null, function* () {
      if (t$5(t2.geometry) || t2.geometry.type === "mesh")
        return Promise.resolve(null);
      let s2 = t2.geometry;
      if (y$2(s2)) {
        const t3 = s2.rings;
        s2.rings = t3;
      } else if (f$2(s2)) {
        const t3 = s2.paths;
        s2.paths = t3;
      } else if (u$1(s2)) {
        const i2 = yield this._getSymbolForGraphic(t2, e2);
        if (H(i2.type) || C$1(i2.type)) {
          s2 = s2.center;
        } else
          s2 = x$2.fromExtent(s2);
      }
      yield p$2(s2.spatialReference, this.view.spatialReference);
      const r2 = l$1(s2), a2 = y$5(r2, s2.spatialReference, this.view.spatialReference);
      return u$6(a2), a2;
    });
  }
  _onTileUpdate(t2) {
    const e2 = S(this.view.spatialReference);
    if (t2.added && t2.added.length > 0)
      for (const i2 of t2.added)
        this._addNewTile(i2, e2);
    if (t2.removed && t2.removed.length > 0)
      for (const i2 of t2.removed)
        this._removeTile(i2.key);
  }
  _addGraphic(t2) {
    return __async(this, null, function* () {
      this._abortProcessingGraphic(t2.uid);
      const e2 = h$2();
      this._graphicIdToAbortController.set(t2.uid, e2);
      const i2 = { signal: e2.signal };
      try {
        yield this._addOrUpdateGraphic(t2, i2), this._graphicIdToAbortController.delete(t2.uid);
      } catch (s2) {
        if (this._graphicIdToAbortController.delete(t2.uid), !g$2(s2))
          throw s2;
      }
    });
  }
  _updateGraphic(t2, e2) {
    return __async(this, null, function* () {
      const i2 = this._projectAndNormalizeGeometry(t2, e2), s2 = this._getSymbolResources(t2, e2), [r2, a2] = yield Promise.all([i2, s2]);
      this._graphicStore.addOrModify(t2, a2, r2);
    });
  }
  _addOrUpdateGraphic(t2, e2) {
    return __async(this, null, function* () {
      const i2 = this._projectAndNormalizeGeometry(t2, e2), s2 = this._getSymbolResources(t2, e2);
      try {
        const [e3, r2] = yield Promise.all([i2, s2]);
        this._addProjectedGraphic(t2, r2, e3);
      } catch (r2) {
        if (!g$2(r2))
          throw r2;
      }
    });
  }
  _addProjectedGraphic(t2, e2, i2) {
    this._graphicsSet.has(t2) && this._graphicStore.addOrModify(t2, e2, i2);
  }
  _addTile(t2) {
    const e2 = this.view.featuresTilingScheme.getTileBounds(i$2(), t2), i2 = new a(t2, e2);
    return this._tiles.set(t2, i2), this.container.addChild(i2), i2;
  }
  _addNewTile(t2, e2) {
    const i2 = this._addTile(t2.key), s2 = this._graphicStore.queryTileData(this._templateStore, t2);
    if (e2) {
      const i3 = Math.round((e2.valid[1] - e2.valid[0]) / t2.resolution);
      for (const t3 of s2)
        t3.geometry && (l$2(t3.geometry) || s$4(t3.geometry)) && this._wrapPoints(t3, i3);
    }
    const r2 = t2.key;
    this._tileUpdateSet.add(t2.key), this.notifyChange("updating"), this._processGraphics(t2, s2).then((t3) => {
      const e3 = { type: "update", clear: false, addOrUpdate: t3, remove: [], end: true };
      i2.patch(e3), this._tileUpdateSet.delete(r2), this.notifyChange("updating");
    }).catch((t3) => {
      if (this._tileUpdateSet.delete(r2), this.notifyChange("updating"), !g$2(t3))
        throw t3;
    });
  }
  _removeTile(t2) {
    if (!this._tiles.has(t2))
      return;
    const e2 = this._tiles.get(t2);
    this.container.removeChild(e2), e2.destroy(), this._tiles.delete(t2);
  }
  _setFilterState(t2, e2) {
    const i2 = this._displayIds.get(t2), s2 = this._attributeStore.getHighlightFlag(t2);
    this._attributeStore.setData(i2, 0, 0, s2 | (e2 ? P$1 : 0));
  }
  _getGraphicsData(t2, e2, i2) {
    const s2 = S(this.view.spatialReference), r2 = this._graphicStore.getGraphicsData(t2, e2, i2);
    if (s2) {
      const t3 = Math.round((s2.valid[1] - s2.valid[0]) / e2.resolution);
      for (const e3 of r2)
        e3.geometry && (l$2(e3.geometry) || s$4(e3.geometry)) && this._wrapPoints(e3, t3);
    }
    return r2;
  }
  _wrapPoints(t2, e2) {
    const i2 = t2.geometry;
    s$4(i2) ? this._wrapMultipoint(i2, e2) : this._wrapPoint(t2, e2);
  }
  _wrapMultipoint(t2, e2) {
    const i2 = t2.points, s2 = [];
    let r2 = 0, a2 = 0;
    for (const [o2, h2] of i2) {
      if (s2.push([o2 + r2, h2]), r2 = 0, e2 === z$1) {
        const t3 = 5 * P;
        o2 + a2 < t3 ? (s2.push([e2, 0]), r2 = -e2) : o2 + a2 > z$1 - t3 && (s2.push([-e2, 0]), r2 = e2);
      } else
        o2 + a2 < -P ? (s2.push([e2, 0]), r2 = -e2) : o2 + a2 > z$1 + P && (s2.push([-e2, 0]), r2 = e2);
      a2 += o2;
    }
    t2.points = s2;
  }
  _wrapPoint(t2, e2) {
    const i2 = t2.geometry;
    if (e2 === z$1) {
      const s2 = 5 * P;
      i2.x < s2 ? t2.geometry = { points: [[i2.x, i2.y], [e2, 0]] } : i2.x > z$1 - s2 && (t2.geometry = { points: [[i2.x, i2.y], [-e2, 0]] });
    } else
      i2.x < -P ? t2.geometry = { points: [[i2.x, i2.y], [e2, 0]] } : i2.x > z$1 + P && (t2.geometry = { points: [[i2.x, i2.y], [-e2, 0]] });
  }
  _processGraphics(t2, e2, i2) {
    return __async(this, null, function* () {
      if (!(e2 && e2.length) || !this._meshFactory)
        return null;
      const s2 = o.from(e2), r2 = this._meshFactory, a2 = yield this._matcher;
      return yield r2.analyzeGraphics(s2, a2, null, null, i2), this._attributeStore.sendUpdates(), this._processAnalyzedGraphics(t2, s2);
    });
  }
  _processAnalyzedGraphics(t2, e2) {
    const i2 = this._meshFactory, s2 = e2.getApproximateSize(), r2 = e2.getCursor(), a2 = { features: s2, records: s2, metrics: 0 }, o2 = new E$1(t2.key.id, a2, false, false, false);
    for (; r2.next(); ) {
      const t3 = r2.readGraphic();
      t3.insertAfter = t3.insertAfter === -1 ? -1 : this._displayIds.get(t3.insertAfter), t3.displayId = this._displayIds.get(t3.attributes[this.uid]), i2.writeGraphic(o2, r2);
    }
    const h2 = t2.tileInfoView.tileInfo.isWrappable, n2 = o2.serialize(h2);
    if (n2.length !== 1)
      return new g();
    const d2 = n2[0].message;
    return g.fromVertexData(d2);
  }
  _abortProcessingGraphic(t2) {
    if (this._graphicIdToAbortController.has(t2)) {
      this._graphicIdToAbortController.get(t2).abort();
    }
  }
  _getNullSymbol(t2) {
    const e2 = t2.geometry;
    return f$2(e2) ? O$2 : y$2(e2) || u$1(e2) ? j$2 : N;
  }
  _flipUpdatingGraphics() {
    this._updatingGraphicsTimer && clearTimeout(this._updatingGraphicsTimer), this._updatingGraphicsTimer = setTimeout(() => {
      this._updatingGraphicsTimer = null, this.notifyChange("updating");
    }, 160), this.notifyChange("updating");
  }
};
e$7([y$4({ constructOnly: true })], tt.prototype, "requestUpdateCallback", void 0), e$7([y$4()], tt.prototype, "container", void 0), e$7([y$4({ constructOnly: true })], tt.prototype, "graphics", void 0), e$7([y$4()], tt.prototype, "updating", null), e$7([y$4()], tt.prototype, "view", void 0), e$7([y$4()], tt.prototype, "updateRequested", void 0), tt = e$7([i$5("esri.views.2d.layers.support.GraphicsView2D")], tt);
var et = tt;
class t extends o$4 {
  constructor(e2) {
    super(e2);
  }
  get hasLabels() {
    return false;
  }
  get labelsVisible() {
    return false;
  }
  onTileData(e2, t2) {
    e2.patch(t2), this.contains(e2) || this.addChild(e2), this.requestRender();
  }
  onTileError(e2) {
    e2.clear(), this.contains(e2) || this.addChild(e2);
  }
  _renderChildren(e2, t2) {
    for (const i2 of this.children)
      i2.isReady && i2.hasData && (i2.commit(e2), e2.context.setStencilFunction(514, i2.stencilRef, 255), i2._displayList.replay(e2, i2, t2));
  }
}
export { et as e, t };
