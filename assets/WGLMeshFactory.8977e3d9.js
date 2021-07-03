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
import { aa as s$7, a5 as r$8, a0 as t$4, cc as b$3, cd as e$3, a4 as n$1, ce as e$4, cf as n$2, cg as i$6, aw as A$4, ch as Ie, ci as X, b$ as e$5, a9 as u$7, c8 as o$5, bY as n$5, aF as n$6, aG as i$8, bV as t$5, aH as c$c, as as r$b, aI as D$1, at as n$7, ay as c$d, br as t$6, cj as u$8, bN as B$1, bK as j$2, bL as N, bJ as O$1, an as g$4, a7 as e$7, bW as h$8, ao as b$5 } from "./vendor.74d5941c.js";
import { Z as Z$2, $, o as o$3, s as s$9, Y, i as i$9, S as S$3, j as j$3 } from "./definitions.6737c10c.js";
import { E as E$1, T, w as w$4, m as m$8, K, P as P$1 } from "./Utils.3f1577e5.js";
import { M as M$3, v as v$5 } from "./ComputedAttributeStorage.2a55b702.js";
import { l as l$5 } from "./tileUtils.7f9c3912.js";
import { k as k$2, s as s$8, T as T$1 } from "./cimAnalyzer.0b895c7f.js";
import { A as A$2, _ as _$6, w as w$5, C as C$1, b as b$4, F, e as e$6, N as N$1 } from "./MaterialKey.3bc4aaea.js";
import { S as S$2, b as A$5, s as s$a, c as n$3, r as r$a, n as n$4, d as a$4, e as c$e, o as o$7 } from "./schemaUtils.ab77d03d.js";
import { f as f$8, i as i$7 } from "./visualVariablesUtils.bb9f81fa.js";
import { i as i$a, n as n$8, r as r$c, w as w$6, a as r$d, b as i$b, u as u$9, o as o$6, c as n$9, d as i$c } from "./TurboLine.ecd76861.js";
import { A as A$3, o as o$4, p as p$5, r as r$9, G as G$1 } from "./CIMSymbolHelper.6546a069.js";
import { h as h$7, M as M$4 } from "./GeometryUtils.9c8423f5.js";
function e$2(e2, n2) {
  if (e2 && "name" in e2) {
    const o2 = e2;
    return n2 && n2.error(new s$7(o2.name, o2.message, o2.details)), false;
  }
  return true;
}
const s$6 = 2147483647;
class r$7 {
  constructor(t2) {
    this._head = t2, this._cursor = t2;
  }
  static from(t2, e2 = 0, i2 = t2.byteLength / _$5.BYTES_PER_RECORD - e2) {
    const s2 = new _$5(new Int32Array(t2, e2 * _$5.BYTES_PER_RECORD, i2 * _$5.ELEMENTS_PER_RECORD));
    return new r$7(s2);
  }
  size() {
    var t2, e2;
    return (t2 = (e2 = this._cursor) == null ? void 0 : e2.size()) != null ? t2 : 0;
  }
  get id() {
    return this._cursor.id;
  }
  set id(t2) {
    this._cursor.id = t2;
  }
  get materialKey() {
    return this._cursor.materialKey;
  }
  set materialKey(t2) {
    this._cursor.materialKey = t2;
  }
  get insertAfter() {
    return this._cursor.insertAfter;
  }
  get indexFrom() {
    return this._cursor.indexFrom;
  }
  set indexFrom(t2) {
    this._cursor.indexFrom = t2;
  }
  get indexCount() {
    return this._cursor.indexCount;
  }
  set indexCount(t2) {
    this._cursor.indexCount = t2;
  }
  get vertexFrom() {
    return this._cursor.vertexFrom;
  }
  set vertexFrom(t2) {
    this._cursor.vertexFrom = t2;
  }
  get vertexCount() {
    return this._cursor.vertexCount;
  }
  set vertexCount(t2) {
    this._cursor.vertexCount = t2;
  }
  get index() {
    return this._cursor._index;
  }
  link(t2) {
    if (!this._head)
      return void (this._head = t2._head);
    let e2 = this._head;
    for (; e2._link; )
      e2 = e2._link;
    e2._link = t2._head;
  }
  getCursor() {
    return this.copy();
  }
  lookup(t2) {
    for (this._cursor = this._head; this._cursor && !this._cursor.lookup(t2); ) {
      if (!this._cursor._link)
        return false;
      this._cursor = this._cursor._link;
    }
    return !!this._cursor;
  }
  copy() {
    var t2;
    const e2 = new r$7((t2 = this._head) == null ? void 0 : t2.copy());
    if (!e2._head)
      return e2;
    let i2 = e2._head, s2 = e2._head._link;
    for (; s2; )
      i2._link = s2.copy(), i2 = s2, s2 = i2._link;
    return e2;
  }
  next() {
    return !!this._cursor && (!!this._cursor.next() || !!this._cursor._link && (this._cursor = this._cursor._link, this.next()));
  }
  peekId() {
    var t2;
    return (t2 = this._cursor.peekId()) != null ? t2 : this._cursor._link.peekId();
  }
  delete(e2) {
    let i2 = this._head, s2 = null;
    for (; i2; ) {
      if (i2.delete(e2))
        return i2.isEmpty() && (r$8(s2) && (s2._link = i2._link), i2 === this._head && (this._head = i2._link), i2 === this._cursor && (this._cursor = i2._link)), true;
      s2 = i2, i2 = i2._link;
    }
    return false;
  }
}
r$7.ELEMENTS_PER_RECORD = Z$2, r$7.BYTES_PER_RECORD = r$7.ELEMENTS_PER_RECORD * Int32Array.BYTES_PER_ELEMENT;
class _$5 {
  constructor(t2) {
    this._link = null, this._index = -1, this._deletedCount = 0, this._offsets = { instance: null }, this._packedRecords = t2;
  }
  static from(t2, e2 = 0, i2 = t2.byteLength / this.BYTES_PER_RECORD - e2) {
    return new _$5(new Int32Array(t2, e2 * this.BYTES_PER_RECORD, i2 * this.ELEMENTS_PER_RECORD));
  }
  delete(t2) {
    const e2 = this._index, i2 = this.lookup(t2);
    if (i2)
      for (this.id = s$6, ++this._deletedCount; this.next() && this.id === t2; )
        this.id = s$6, ++this._deletedCount;
    return this._index = e2, i2;
  }
  isEmpty() {
    return this._deletedCount === this.size();
  }
  link(t2) {
    this._link ? this._link.link(t2) : this._link = t2;
  }
  lookup(t2) {
    if (t$4(this._offsets.instance)) {
      this._offsets.instance = new Map();
      const t3 = this.copy();
      t3._index = -1;
      let e2 = 0;
      for (; t3.next(); )
        t3.id !== e2 && (this._offsets.instance.set(t3.id, t3._index), e2 = t3.id);
    }
    if (!this._offsets.instance.has(t2))
      return false;
    const i2 = this._index;
    return this._index = this._offsets.instance.get(t2), this.id !== s$6 || (this._index = i2, false);
  }
  get id() {
    return this._packedRecords[this._index * _$5.ELEMENTS_PER_RECORD];
  }
  set id(t2) {
    this._packedRecords[this._index * _$5.ELEMENTS_PER_RECORD] = t2;
  }
  get materialKey() {
    return this._packedRecords[this._index * _$5.ELEMENTS_PER_RECORD + 1];
  }
  set materialKey(t2) {
    this._packedRecords[this._index * _$5.ELEMENTS_PER_RECORD + 1] = t2;
  }
  get insertAfter() {
    return this._packedRecords[this._index * _$5.ELEMENTS_PER_RECORD + 2];
  }
  get indexFrom() {
    return this._packedRecords[this._index * _$5.ELEMENTS_PER_RECORD + 3];
  }
  set indexFrom(t2) {
    this._packedRecords[this._index * _$5.ELEMENTS_PER_RECORD + 3] = t2;
  }
  get indexCount() {
    return this._packedRecords[this._index * _$5.ELEMENTS_PER_RECORD + 4];
  }
  set indexCount(t2) {
    this._packedRecords[this._index * _$5.ELEMENTS_PER_RECORD + 4] = t2;
  }
  get vertexFrom() {
    return this._packedRecords[this._index * _$5.ELEMENTS_PER_RECORD + 5];
  }
  set vertexFrom(t2) {
    this._packedRecords[this._index * _$5.ELEMENTS_PER_RECORD + 5] = t2;
  }
  get vertexCount() {
    return this._packedRecords[this._index * _$5.ELEMENTS_PER_RECORD + 6];
  }
  set vertexCount(t2) {
    this._packedRecords[this._index * _$5.ELEMENTS_PER_RECORD + 6] = t2;
  }
  get index() {
    return this._index;
  }
  size() {
    return this._packedRecords.length / _$5.ELEMENTS_PER_RECORD;
  }
  next() {
    for (; ++this._index < this.size() && this.id === s$6; )
      ;
    return this._index < this.size();
  }
  peekId() {
    const t2 = (this._index + 1) * _$5.ELEMENTS_PER_RECORD;
    return t2 >= this._packedRecords.length ? 0 : this._packedRecords[t2];
  }
  getCursor() {
    return this.copy();
  }
  copy() {
    const t2 = new _$5(this._packedRecords);
    return t2._link = this._link, t2._index = this._index, t2._offsets = this._offsets, t2._deletedCount = this._deletedCount, t2;
  }
}
_$5.ELEMENTS_PER_RECORD = Z$2, _$5.BYTES_PER_RECORD = _$5.ELEMENTS_PER_RECORD * Int32Array.BYTES_PER_ELEMENT;
const i$5 = new Map();
function t$3(e2) {
  return i$5.get(e2);
}
function c$b(r2, t2, c2) {
  const { indicesPerRecord: s2, multiplier: o2, verticesPerRecord: d2 } = i$5.get(r2);
  return { recordBytes: c2 * Z$2 * Uint32Array.BYTES_PER_ELEMENT, indexBytes: o2 * s2 * c2 * Uint32Array.BYTES_PER_ELEMENT, vertexBytes: o2 * d2 * c2 * t2 };
}
i$5.set(E$1.MARKER, { multiplier: 1, indicesPerRecord: 6, verticesPerRecord: 4 }), i$5.set(E$1.LINE, { multiplier: 1, indicesPerRecord: 24, verticesPerRecord: 8 }), i$5.set(E$1.FILL, { multiplier: 1, indicesPerRecord: 10, verticesPerRecord: 10 }), i$5.set(E$1.TEXT, { multiplier: 8, indicesPerRecord: 6, verticesPerRecord: 4 }), i$5.set(E$1.LABEL, { multiplier: 8, indicesPerRecord: 6, verticesPerRecord: 4 });
const r$6 = { marker: E$1.MARKER, fill: E$1.FILL, line: E$1.LINE, text: E$1.TEXT };
class s$5 {
  constructor(e2, s2, a2, i2) {
    this.layers = e2, this.data = s2, this.hash = this._createHash(), this.rendererKey = a2;
    for (const n2 of e2) {
      const e3 = r$6[n2.type];
      n2.materialKey = A$2(e3, this.rendererKey, false, false), n2.maxVVSize = i2;
    }
  }
  get type() {
    return "expanded-cim";
  }
  _createHash() {
    let e2 = "";
    for (const t2 of this.layers)
      e2 += t2.templateHash;
    return e2;
  }
}
const m$7 = (e2, a2) => __async(this, null, function* () {
  return new s$5(yield k$2(e2.data, a2), e2.data, e2.rendererKey, e2.maxVVSize);
}), i$4 = (r2, t2, a2) => __async(this, null, function* () {
  if (!r2)
    return null;
  if (r2.type === "cim")
    return m$7(r2, t2);
  if (r2.type === "web-style") {
    const i2 = b$3.fromJSON(r2), n2 = { type: "cim", data: (yield i2.fetchCIMSymbol(a2)).data, rendererKey: r2.rendererKey, maxVVSize: r2.maxVVSize };
    return m$7(n2, t2);
  }
  return r2;
});
const t$2 = 1.5;
class r$5 {
  constructor(t2, r2) {
    this._pos = 0;
    const e2 = r2 ? this._roundToNearest(r2, t2.BYTES_PER_ELEMENT) : 40;
    this._array = new ArrayBuffer(e2), this._buffer = new t2(this._array), this._ctor = t2, this._i16View = new Int16Array(this._array);
  }
  get length() {
    return this._pos;
  }
  _roundToNearest(t2, r2) {
    const e2 = Math.round(t2);
    return e2 + (r2 - e2 % r2);
  }
  _ensureSize(r2) {
    if (this._pos + r2 >= this._buffer.length) {
      const e2 = this._roundToNearest((this._array.byteLength + r2 * this._buffer.BYTES_PER_ELEMENT) * t$2, this._buffer.BYTES_PER_ELEMENT), s2 = new ArrayBuffer(e2), i2 = new this._ctor(s2);
      i2.set(this._buffer, 0), this._array = s2, this._buffer = i2, this._i16View = new Int16Array(this._array);
    }
  }
  writeF32(t2) {
    this._ensureSize(1);
    const r2 = this._pos;
    return new Float32Array(this._array, 4 * this._pos, 1)[0] = t2, this._pos++, r2;
  }
  push(t2) {
    this._ensureSize(1);
    const r2 = this._pos;
    return this._buffer[this._pos++] = t2, r2;
  }
  writeFixed(t2) {
    this._buffer[this._pos++] = t2;
  }
  setValue(t2, r2) {
    this._buffer[t2] = r2;
  }
  i1616Add(t2, r2, e2) {
    this._i16View[2 * t2] += r2, this._i16View[2 * t2 + 1] += e2;
  }
  getValue(t2) {
    return this._buffer[t2];
  }
  incr(t2) {
    if (this._buffer.length < t2)
      throw new Error("Increment index overflows the target buffer");
    this._buffer[t2]++;
  }
  decr(t2) {
    this._buffer[t2]--;
  }
  writeRegion(t2) {
    this._ensureSize(t2.length);
    const r2 = this._pos;
    return this._buffer.set(t2, this._pos), this._pos += t2.length, r2;
  }
  writeManyFrom(t2, r2, e2) {
    this._ensureSize(e2 - r2);
    for (let s2 = r2; s2 !== e2; s2++)
      this.writeFixed(t2._buffer[s2]);
  }
  buffer() {
    const t2 = this._array.slice(0, 4 * this._pos);
    return this.destroy(), t2;
  }
  toArray() {
    const t2 = this._array, r2 = [];
    for (let e2 = 0; e2 < t2.byteLength / 4; e2++)
      r2.push(t2[e2]);
    return r2;
  }
  seek(t2) {
    this._pos = t2;
  }
  destroy() {
    this._array = null, this._buffer = null;
  }
}
class r$4 {
  constructor(t2, r2, i2) {
    this._start = { index: 0, vertex: 0 };
    const h2 = c$b(t2, r2, i2), c2 = r2 / 4;
    this.geometryType = t2, this._records = new r$5(Int32Array, h2.recordBytes), this._indices = new r$5(Uint32Array, h2.indexBytes), this._vertices = new r$5(Uint32Array, h2.vertexBytes), this._metrics = new r$5(Float32Array, 0), this._strideInt = c2;
  }
  serialize(t2) {
    const e2 = this._records.buffer(), s2 = this._indices.buffer(), r2 = this._vertices.buffer(), i2 = this._metrics.length ? this._metrics.buffer() : null, h2 = 4 * this._strideInt;
    return t2.push(e2, s2, r2), { stride: h2, records: e2, indices: s2, vertices: r2, metrics: i2 };
  }
  get strideInt() {
    return this._strideInt;
  }
  get recordCount() {
    return this._records.length / Z$2;
  }
  get vertexCount() {
    return this._vertices.length / this._strideInt;
  }
  get indexCount() {
    return this._indices.length;
  }
  get indexWriter() {
    return this._indices;
  }
  get vertexWriter() {
    return this._vertices;
  }
  get metricWriter() {
    return this._metrics;
  }
  recordStart() {
    this._start.index = this._indices.length, this._start.vertex = this._vertices.length;
  }
  recordEnd(t2, e2, s2, r2, i2, h2, c2) {
    this._records.push(t2), this._records.push(e2), this._records.push(s2), this._records.push(r2), this._records.push(i2), this._records.push(h2), this._records.push(c2);
  }
  writeIndex(t2) {
    this._indices.push(t2);
  }
  writeVertex(t2) {
    this._vertices.push(t2);
  }
  writeVertexF32(t2) {
    this._vertices.writeF32(t2);
  }
  copyLastFrom(t2, e2, s2) {
    const r2 = t2._records.length - 7, i2 = t2._records.getValue(r2), h2 = t2._records.getValue(r2 + 1), c2 = t2._records.getValue(r2 + 2), n2 = t2._records.getValue(r2 + 4), _2 = t2._records.getValue(r2 + 6), d2 = this._vertices.length, o2 = (t2._start.vertex - this._vertices.length) / this._strideInt, u2 = this._indices.length, l2 = this.vertexCount;
    for (let g2 = t2._start.index; g2 !== t2._indices.length; g2++) {
      const e3 = t2._indices.getValue(g2);
      this._indices.push(e3 - o2);
    }
    for (let g2 = t2._start.vertex; g2 !== t2._vertices.length; g2++) {
      const e3 = t2._vertices.getValue(g2);
      this._vertices.push(e3);
    }
    for (let g2 = d2; g2 <= this._vertices.length; g2 += this._strideInt)
      this._vertices.i1616Add(g2, e2, s2);
    this._records.push(i2), this._records.push(h2), this._records.push(c2), this._records.push(u2), this._records.push(n2), this._records.push(l2), this._records.push(_2);
  }
}
const h$6 = 1, c$a = 2, o$2 = 4, _$4 = 8, l$4 = 16, d$9 = 32, g$3 = 64, p$4 = 128;
function f$7(t2) {
  switch (t2) {
    case h$6:
    case _$4:
    case d$9:
      return -1;
    case c$a:
    case g$3:
      return 0;
    case o$2:
    case l$4:
    case p$4:
      return 1;
  }
}
function m$6(t2) {
  switch (t2) {
    case h$6:
    case c$a:
    case o$2:
      return -1;
    case _$4:
    case l$4:
      return 0;
    case d$9:
    case g$3:
    case p$4:
      return 1;
  }
}
const x$2 = h$6 | _$4 | d$9, w$3 = o$2 | l$4 | p$4, y$4 = h$6 | c$a | o$2, v$4 = d$9 | g$3 | p$4;
class E {
  constructor(t2, e2, r2, i2, s2) {
    this._hasDotDensity = false, this._hasAggregate = false, this.hasRecords = false, this._data = { self: new Map(), neighbors: new Array() }, this._current = { geometryType: 0, writer: null, overlaps: 0, start: 0, insertAfter: 0, id: 0, materialKey: 0, indexStart: 0, vertStart: 0, isDotDensity: false, bufferingEnabled: false, metricBoxLenPointer: 0 }, this.hint = e2, this.tileKey = t2, this._hasDotDensity = r2, this._hasAggregate = i2, this._pixelBufferEnabled = s2;
  }
  get hasAggregates() {
    return this._hasAggregate;
  }
  get hasPixelBufferEnabled() {
    return this._pixelBufferEnabled;
  }
  serialize(e2) {
    const r2 = [];
    return r2.push(this._serializeTileVertexData(this.tileKey, this._data.self)), this._data.neighbors.forEach((i2, s2) => {
      const n2 = 1 << s2, u2 = f$7(n2), h2 = m$6(n2), c2 = l$5(new e$3(this.tileKey), u2, h2, e2);
      r2.push(this._serializeTileVertexData(c2.id, i2));
    }), r2;
  }
  _serializeTileVertexData(t2, e2) {
    var r2, s2, n2, u2, a2;
    const h2 = new Array();
    return { message: { tileKey: t2, data: { [E$1.MARKER]: (r2 = e2.get(E$1.MARKER)) == null ? void 0 : r2.serialize(h2), [E$1.FILL]: (s2 = e2.get(E$1.FILL)) == null ? void 0 : s2.serialize(h2), [E$1.LINE]: (n2 = e2.get(E$1.LINE)) == null ? void 0 : n2.serialize(h2), [E$1.TEXT]: (u2 = e2.get(E$1.TEXT)) == null ? void 0 : u2.serialize(h2), [E$1.LABEL]: (a2 = e2.get(E$1.LABEL)) == null ? void 0 : a2.serialize(h2) } }, transferList: h2 };
  }
  featureStart(t2 = 0) {
    this._current.insertAfter = t2;
  }
  featureEnd() {
  }
  recordStart(t2, e2, r2, i2, s2) {
    this._current.writer = this._getVertexWriter(r2, i2), this._current.overlaps = 0, this._current.indexStart = this._current.writer.indexCount, this._current.vertStart = this._current.writer.vertexCount, this._current.bufferingEnabled = s2, this._current.id = t2, this._current.materialKey = e2, this._current.geometryType = r2, this._current.isDotDensity = false, this._current.writer.recordStart();
  }
  recordCount() {
    return this._current.writer.recordCount;
  }
  vertexCount() {
    return this._current.writer.vertexCount;
  }
  indexCount() {
    return this._current.writer.indexCount;
  }
  vertexBounds(t2, e2, r2, i2) {
    this._current.bufferingEnabled && this._addOverlap(t2, e2, r2, i2);
  }
  vertexWrite(t2) {
    this._current.writer.writeVertex(t2);
  }
  vertexWriteF32(t2) {
    this._current.writer.writeVertexF32(t2);
  }
  vertexEnd() {
  }
  vertexWriter() {
    return this._current.writer.vertexWriter;
  }
  indexWrite(t2) {
    this._current.writer.writeIndex(t2);
  }
  indexWriter() {
    return this._current.writer.indexWriter;
  }
  metricWriter() {
    return this._current.writer.metricWriter;
  }
  metricStart(t2, e2, r2, s2, n2, a2, h2, c2) {
    this._current.writer = this._getVertexWriter(E$1.LABEL, false);
    const o2 = this._current.writer.metricWriter;
    o2.push(M$3(t2)), o2.push(e2), o2.push(r2), o2.push(s2), o2.push(n2), o2.push(a2), o2.push(h2), o2.push(c2), o2.push(255), this._current.metricBoxLenPointer = o2.push(0);
  }
  metricEnd() {
    const t2 = this._current.writer.metricWriter;
    t2.getValue(this._current.metricBoxLenPointer) === 0 && t2.seek(t2.length - 10);
  }
  metricBoxWrite(t2, e2, r2, i2) {
    const s2 = this._current.writer.metricWriter;
    s2.incr(this._current.metricBoxLenPointer), s2.push(0), s2.push(0), s2.push(t2), s2.push(e2), s2.push(r2), s2.push(i2);
  }
  recordEnd() {
    const t2 = this._current.indexStart, r2 = this._current.writer.indexCount;
    if (t2 === r2)
      return false;
    this.hasRecords = true;
    const u2 = r2 - t2, a2 = this._current.vertStart, h2 = this._current.writer.vertexCount - a2;
    if (this._current.writer.recordEnd(this._current.id, this._current.materialKey, this._current.insertAfter, t2, u2, a2, h2), !this._pixelBufferEnabled || this._hasAggregate || this._current.overlaps === 0 || this._current.geometryType === E$1.LABEL)
      return true;
    const c2 = this._current.writer;
    for (let i2 = 0; i2 < 8; i2++) {
      const t3 = 1 << i2;
      if (!!(this._current.overlaps & t3)) {
        if (!this._data.neighbors[i2]) {
          const t4 = new Map();
          this._data.neighbors[i2] = t4;
        }
        const r3 = this._data.neighbors[i2], u3 = this._current.geometryType;
        if (!r3.has(u3)) {
          const t4 = T(u3, this._current.isDotDensity).geometry;
          r3.set(u3, new r$4(u3, t4, $));
        }
        const a3 = r3.get(this._current.geometryType), h3 = 8, o2 = 512 * -f$7(t3) * h3, _2 = 512 * -m$6(t3) * h3;
        a3.copyLastFrom(c2, o2, _2);
      }
    }
    return true;
  }
  _addOverlap(t2, e2, i2, s2) {
    const n2 = 255 ^ ((t2 < 0 + i2 ? w$3 : t2 >= o$3 - i2 ? x$2 : w$3 | x$2) | (e2 < 0 + s2 ? v$4 : e2 >= o$3 - s2 ? y$4 : v$4 | y$4));
    this._current.overlaps |= n2;
  }
  _getVertexWriter(t2, e2) {
    if (!this._data.self.has(t2)) {
      const e3 = this._data.self, r2 = T(t2, this._hasDotDensity).geometry;
      e3.set(t2, new r$4(t2, r2, 8e3));
    }
    return this._data.self.get(t2);
  }
}
const o$1 = n$1.getLogger("esri/views/2d/engine/webgl/util/Matcher");
class u$6 {
  constructor() {
    this.type = "feature", this._defaultResult = null;
  }
  static fromBasicRenderer(e2, t2, i2) {
    return __async(this, null, function* () {
      const s2 = new u$6();
      if (e2.symbol) {
        const r2 = yield i$4(e2.symbol, i2), a2 = t2.createTemplateGroup(r2, null);
        s2.setDefault(a2);
      }
      return s2;
    });
  }
  size() {
    return 1;
  }
  getDefault() {
    return this._defaultResult;
  }
  setDefault(e2) {
    this._defaultResult = e2;
  }
  match(e2, t2, i2, s2, r2) {
    return this.getDefault();
  }
  analyze(e2, t2, i2, s2, r2) {
    return __async(this, null, function* () {
      return null;
    });
  }
}
class c$9 extends u$6 {
  constructor(e2, t2, i2, s2) {
    super(), this.type = "interval", this._intervals = [], this._isMaxInclusive = t2, this._fieldIndex = s2, this._field = e2, this._normalizationInfo = i2;
  }
  static fromCBRenderer(e2, t2, i2) {
    return __async(this, null, function* () {
      const { isMaxInclusive: s2, normalizationField: r2, normalizationTotal: a2, normalizationType: l2 } = e2, o2 = e2.field, u2 = new c$9(o2, s2, { normalizationField: r2, normalizationTotal: a2, normalizationType: l2 }, e2.fieldIndex), d2 = yield i$4(e2.backgroundFillSymbol, i2);
      yield Promise.all(e2.intervals.map((e3) => __async(this, null, function* () {
        const s3 = yield i$4(e3.symbol, i2), r3 = yield t2.createTemplateGroup(s3, d2), a3 = { min: e3.min, max: e3.max };
        u2.add(a3, r3);
      })));
      const f2 = yield i$4(e2.defaultSymbol, i2);
      if (f2) {
        const e3 = yield t2.createTemplateGroup(f2, d2);
        u2.setDefault(e3);
      }
      return u2;
    });
  }
  add(e2, t2) {
    this._intervals.push({ interval: e2, result: t2 }), this._intervals.sort((e3, t3) => e3.interval.min - t3.interval.min);
  }
  size() {
    return super.size() + this._intervals.length;
  }
  match(e2, t2, i2, s2, r2) {
    if (this._fieldIndex == null && !this._field)
      return this.getDefault();
    const a2 = this._fieldIndex != null ? t2.getComputedNumericAtIndex(this._fieldIndex) : this._getValueFromField(t2);
    if (!a2 && (a2 == null || isNaN(a2)))
      return this.getDefault();
    for (let n2 = 0; n2 < this._intervals.length; n2++) {
      const { interval: e3, result: t3 } = this._intervals[n2], i3 = a2 >= e3.min, s3 = this._isMaxInclusive ? a2 <= e3.max : a2 < e3.max;
      if (i3 && s3)
        return t3;
    }
    return this.getDefault();
  }
  _needsNormalization() {
    const e2 = this._normalizationInfo;
    return e2 && (e2.normalizationField || e2.normalizationTotal || e2.normalizationType);
  }
  _getValueFromField(e2) {
    const t2 = e2.readAttribute(this._field);
    if (!this._needsNormalization() || t2 == null)
      return t2;
    const { normalizationField: i2, normalizationTotal: s2, normalizationType: r2 } = this._normalizationInfo, a2 = !!i2 && e2.readAttribute(i2);
    if (r2)
      switch (r2) {
        case "esriNormalizeByField":
          return a2 ? t2 / a2 : void 0;
        case "esriNormalizeByLog":
          return Math.log(t2) * Math.LOG10E;
        case "esriNormalizeByPercentOfTotal":
          return t2 / s2 * 100;
        default:
          return void o$1.error(`Found unknown normalization type: ${r2}`);
      }
    else
      o$1.error("Normalization is required, but no type was set!");
  }
}
class d$8 extends u$6 {
  constructor(e2, t2, i2) {
    super(), this.type = "map", this._nullResult = null, this._resultsMap = new Map(), this._fieldsIndex = i2, this._fields = e2, this._seperator = t2 || "";
  }
  static fromUVRenderer(e2, t2, i2) {
    return __async(this, null, function* () {
      const s2 = e2.fieldDelimiter, r2 = [e2.field];
      e2.field2 && r2.push(e2.field2), e2.field3 && r2.push(e2.field3);
      const a2 = yield i$4(e2.backgroundFillSymbol, i2), l2 = new d$8(r2, s2, e2.fieldIndex);
      yield Promise.all(e2.map.map((e3) => __async(this, null, function* () {
        const s3 = yield i$4(e3.symbol, i2), r3 = yield t2.createTemplateGroup(s3, a2);
        e3.value === "<Null>" ? l2.setNullResult(r3) : l2.add(e3.value, r3);
      })));
      const o2 = yield i$4(e2.defaultSymbol, i2);
      if (o2) {
        const e3 = yield t2.createTemplateGroup(o2, a2);
        l2.setDefault(e3);
      }
      return l2;
    });
  }
  setNullResult(e2) {
    this._nullResult = e2;
  }
  add(e2, t2) {
    this._resultsMap.set(e2.toString(), t2);
  }
  size() {
    return super.size() + this._resultsMap.size;
  }
  match(e2, t2, i2, s2, r2) {
    if (this._fieldsIndex == null && !this._fields)
      return this.getDefault();
    const a2 = this._fieldsIndex != null ? t2.getComputedStringAtIndex(this._fieldsIndex) : this._getValueFromFields(t2);
    if (this._nullResult !== null && (a2 == null || a2 === "" || a2 === "<Null>"))
      return this._nullResult;
    if (!a2 && a2 == null)
      return this.getDefault();
    const n2 = a2.toString();
    return this._resultsMap.has(n2) ? this._resultsMap.get(n2) : this.getDefault();
  }
  _getValueFromFields(e2) {
    const t2 = [];
    for (const i2 of this._fields) {
      const s2 = e2.readAttribute(i2);
      t2.push(s2);
    }
    return t2.join(this._seperator);
  }
}
function f$6(e2, t2) {
  return __async(this, null, function* () {
    const s2 = e2 || 1;
    if (typeof s2 == "number")
      return (e3, t3, i2) => s2;
    const r2 = yield i$6(s2, t2.spatialReference, t2.fields);
    return (e3, i2, s3) => s$8(r2, e3, { $view: s3 }, t2.geometryType, i2) || 1;
  });
}
class m$5 extends u$6 {
  constructor(e2, t2, i2, s2) {
    super(), this.type = "dictionary", this._groupIdCache = new e$4(100), this._renderer = e2, this._fieldMap = e2.fieldMap, this._symbolFields = e2.getSymbolFields(), this._templates = t2, this._info = i2, this._scaleFn = s2;
  }
  static fromDictionaryRenderer(e2, t2, i2) {
    return __async(this, null, function* () {
      const s2 = (yield import("./vendor.74d5941c.js").then(function(n2) {
        return n2.jv;
      })).default.fromJSON(e2.renderer);
      yield s2.fetchResources({ spatialReference: i2.spatialReference, fields: i2.fields });
      const r2 = yield f$6(s2.scaleExpression, i2);
      return new m$5(s2, t2, i2, r2);
    });
  }
  _analyzeFeature(e2, i2, r2, a2) {
    return __async(this, null, function* () {
      const u2 = e2.readLegacyFeature(), c2 = this._scaleFn(u2, i2, r2), d2 = this._attributeHash(u2) + "-" + c2, f2 = this._groupIdCache.get(d2);
      if (f2)
        return f2;
      const m2 = __spreadProps(__spreadValues({}, r2), { spatialReference: this._info.spatialReference, abortOptions: a2, fields: this._info.fields }), h2 = yield this._renderer.getSymbolAsync(u2, m2), p2 = S$2(h2, this._renderer), _2 = i$4(p2, this._info, a2).then((e3) => {
        if (e3.type !== "expanded-cim")
          return o$1.error(new s$7("mapview-bad-type", `Found unexpected type ${e3.type} in dictionary response`)), null;
        e3.hash += "-" + c2;
        for (const t2 of e3.layers)
          t2.scaleFactor = c2, t2.templateHash += "-" + c2, t2.type === "text" && typeof t2.text == "string" && t2.text.indexOf("[") > -1 && (t2.text = n$2(this._fieldMap, t2.text, t2.cim.textCase));
        return this._templates.createTemplateGroup(e3, null);
      });
      return this._groupIdCache.put(d2, _2, 1), _2;
    });
  }
  analyze(e2, t2, i2, s2, r2) {
    return __async(this, null, function* () {
      const a2 = t2.getCursor(), n2 = [];
      for (; a2.next(); )
        n2.push(this._analyzeFeature(a2, i2, s2, r2));
      return Promise.all(n2);
    });
  }
  match(e2, t2, i2, s2, r2) {
    return null;
  }
  _attributeHash(e2) {
    let t2 = "";
    for (const i2 of this._symbolFields) {
      const s2 = this._fieldMap[i2];
      s2 && (t2 += e2.attributes[s2] + "-");
    }
    return t2;
  }
}
const a$3 = n$1.getLogger("esri/views/2d/engine/webgl/mesh/factories/matcherUtils");
function s$4(e2, s2, c2) {
  return __async(this, null, function* () {
    switch (e2.type) {
      case "simple":
        return u$6.fromBasicRenderer(e2, s2, c2);
      case "map":
        return d$8.fromUVRenderer(e2, s2, c2);
      case "interval":
        return c$9.fromCBRenderer(e2, s2, c2);
      case "dictionary":
        return m$5.fromDictionaryRenderer(e2, s2, c2);
      default:
        return a$3.error(new s$7("mapview-mesh:invalid-renderer", "Unable to handle unknown renderer type")), null;
    }
  });
}
class e$1 {
  static getPlacement(e2, o2, s2) {
    const c2 = A$3(o2);
    if (!c2)
      return null;
    const n2 = o$4(e2);
    return c2.execute(n2, o2, s2);
  }
}
const _$3 = 8, f$5 = (f2) => class extends f2 {
  constructor(...e2) {
    super(...e2), this._isCIM = false, this._vertexBoundsScale = 1, this.geometryType = E$1.TEXT, this._aux = w$4(0, 0, this._referenceSize, this._bitset);
  }
  bindTextInfo(t2, i2) {
    t2 && t2.length ? this._shapingInfo = A$4(t2, (e2) => A$5(e2, i2, { scale: this._scale, angle: this._angle, xOffset: this._xOffset, yOffset: this._yOffset, hAlign: this._xAlignD, vAlign: this._yAlignD, maxLineWidth: Math.max(32, Math.min(this._lineWidth, 512)), lineHeight: s$9 * Math.max(0.25, Math.min(this._lineHeight, 4)), decoration: this._decoration, isCIM: this._isCIM })) : this._shapingInfo = null;
  }
  _write(e2, t2, i2) {
    const r2 = t2.getDisplayId();
    this._writeGeometry(e2, t2, r2, i2);
  }
  _writeGeometry(e2, r2, s2, h2) {
    const x2 = this._shapingInfo;
    if (t$4(x2))
      return;
    if (r$8(this._textPlacement)) {
      const t2 = h2 != null ? h2 : r2.readLegacyGeometry();
      return this._writePlacedText(e2, s2, t2, x2);
    }
    const a2 = h2 ? Ie(X(h2), 2) : r2.geometryType === "esriGeometryPolygon" ? r2.readCentroid() : r2.readUnquantizedGeometry();
    if (a2) {
      if (a2.isPoint) {
        const [t2, i2] = a2.coords;
        return this._writeGlyphs(e2, s2, { x: t2, y: i2 }, x2);
      }
      a2.forEachVertex((t2, i2) => this._writeGlyphs(e2, s2, { x: t2, y: i2 }, x2));
    }
  }
  _writePlacedText(e2, t2, i2, o2) {
    const n2 = e$5(this._textPlacement), h2 = e$1.getPlacement(i2, n2, u$7(1));
    if (!h2)
      return;
    let x2 = h2.next();
    for (; x2 != null; ) {
      const i3 = x2.getAngle();
      o2.setRotation(i3), this._writeGlyphs(e2, t2, { x: x2.tx, y: x2.ty }, o2), o2.setRotation(-i3), x2 = h2.next();
    }
  }
  _writeGlyphs(e2, t2, i2, r2) {
    const s2 = _$6.load(this._materialKey), o2 = m$8(Math.round(_$3 * i2.x), Math.round(_$3 * i2.y));
    for (const n2 of r2.glyphs) {
      s2.textureBinding = n2.textureBinding, e2.recordStart(t2, s2.data, this.geometryType, false, true);
      const i3 = n2.bounds, r3 = this._vertexBoundsScale;
      e2.vertexBounds(i3.x * r3, i3.y * r3, i3.width * r3, i3.height * r3), this._writeVertices(e2, t2, o2, n2), e2.recordEnd();
    }
  }
  _writeGlyph(e2, t2, i2, r2, s2) {
    const o2 = _$6.load(this._materialKey), n2 = m$8(Math.round(_$3 * i2), Math.round(_$3 * r2));
    o2.textureBinding = s2.textureBinding, e2.recordStart(t2, o2.data, this.geometryType, false, true);
    const h2 = s2.bounds, x2 = this._vertexBoundsScale;
    e2.vertexBounds(h2.x * x2, h2.y * x2, h2.width * x2, h2.height * x2), this._writeVertices(e2, t2, n2, s2), e2.recordEnd();
  }
  _writeVertices(e2, t2, i2, r2) {
    const s2 = e2.vertexCount();
    this._writeVertexCommon(e2, t2, i2, r2), e2.vertexWrite(r2.offsets.upperLeft), e2.vertexWrite(r2.texcoords.upperLeft), e2.vertexEnd(), this._writeVertexCommon(e2, t2, i2, r2), e2.vertexWrite(r2.offsets.upperRight), e2.vertexWrite(r2.texcoords.upperRight), e2.vertexEnd(), this._writeVertexCommon(e2, t2, i2, r2), e2.vertexWrite(r2.offsets.lowerLeft), e2.vertexWrite(r2.texcoords.lowerLeft), e2.vertexEnd(), this._writeVertexCommon(e2, t2, i2, r2), e2.vertexWrite(r2.offsets.lowerRight), e2.vertexWrite(r2.texcoords.lowerRight), e2.vertexEnd(), e2.indexWrite(s2 + 0), e2.indexWrite(s2 + 1), e2.indexWrite(s2 + 2), e2.indexWrite(s2 + 1), e2.indexWrite(s2 + 3), e2.indexWrite(s2 + 2);
  }
  _writeVertexCommon(e2, t2, i2, r2) {
    const s2 = this._color, o2 = this._haloColor, n2 = w$4(0, 0, this._referenceSize, this._bitset), h2 = w$4(0, 0, this._size, this._haloSize);
    e2.vertexWrite(i2), e2.vertexWrite(t2), e2.vertexWrite(s2), e2.vertexWrite(o2), e2.vertexWrite(h2), e2.vertexWrite(n2);
  }
};
const s$3 = 96 / 72;
class c$8 {
  static executeEffects(e2, c2) {
    const n2 = o$4(c2), f2 = s$3;
    let m2 = new r$9(n2);
    for (const t2 of e2) {
      const e3 = G$1(t2);
      e3 && (m2 = e3.execute(m2, t2, f2));
    }
    return m2;
  }
  static next(t2) {
    const o2 = t2.next();
    return p$5(o2), o2;
  }
}
class r$3 {
  bindFeature(e2, t2, r2) {
  }
  write(r2, f2) {
    if (t$4(this._effects))
      return this._write(r2, f2);
    const s2 = c$8.executeEffects(this._effects, f2.readLegacyGeometry());
    let i2 = c$8.next(s2);
    for (; i2; )
      this._write(r2, f2, i2), i2 = c$8.next(s2);
  }
  _write(e2, t2, r2) {
  }
}
const c$7 = 5, f$4 = 24;
class _$2 extends f$5(r$3) {
  constructor(n2, l2, r2, h2, m2, _2, x2, d2, z2, u2, g2, M2, p2, S2, y2, j2, T2, V = false) {
    super(), this._xOffset = u$7(M2), this._yOffset = u$7(p2), this._decoration = z2 || "none", this._color = h2, this._haloColor = m2, this._haloSize = Math.min(Math.floor(c$7 * u$7(o$5(r2))), 127), this._size = Math.min(Math.round(u$7(l2)), 127);
    const b2 = Math.min(Math.round(u$7(l2)), 127);
    this._referenceSize = Math.round(Math.sqrt(256 * b2)), this._scale = this._size / f$4, this._angle = g2, this._justify = s$a(_2 || "center"), this._xAlignD = n$3(_2 || "center"), this._yAlignD = r$a(x2 || "baseline"), this._baseline = (x2 || "baseline") === "baseline", this._bitset = (d2 === 1 ? 1 : 0) | (u2 ? 1 : 0) << 1;
    const A2 = _$6.load(n2);
    A2.sdf = true, this._materialKey = A2.data, this._lineWidth = u$7(S2) || 512, this._lineHeight = y2 || 1, this._textPlacement = j2, this._effects = T2, this._isCIM = V;
  }
  static fromText(t2, e2) {
    const i2 = new _$2(t2.materialKey, t2.font.size, t2.haloSize || 0, t2.color && f$8(t2.color) || 0, t2.haloColor && f$8(t2.haloColor) || 0, t2.horizontalAlignment, t2.verticalAlignment, 0, t2.font.decoration, false, t2.angle || 0, t2.xoffset, t2.yoffset, t2.lineWidth, t2.lineHeight, null, null, false), [, o2] = n$4(t2.text);
    return i2.bindTextInfo(e2, o2), i2._vertexBoundsScale = t2.maxVVSize ? t2.maxVVSize / t2.font.size : 1, i2;
  }
  static fromCIMText(t2, e2) {
    const i2 = t2.scaleFactor || 1, o2 = t2.size * t2.sizeRatio * i2, s2 = new _$2(t2.materialKey, o2, t2.outlineSize * t2.sizeRatio, i$7(t2.color), i$7(t2.outlineColor), t2.horizontalAlignment, t2.verticalAlignment, t2.alignment, t2.decoration, t2.colorLocked, t2.angle, t2.offsetX * t2.sizeRatio * i2, t2.offsetY * t2.sizeRatio * i2, 512, 1, t2.markerPlacement, t2.effects, true), [, a2] = n$4(t2.text);
    return s2.bindTextInfo(e2, a2), s2._vertexBoundsScale = t2.maxVVSize ? t2.maxVVSize / o2 : 1, s2;
  }
}
const d$7 = 3.14159265359 / 180, v$3 = 8, W$1 = (W2) => class extends W2 {
  constructor(...t2) {
    super(...t2), this.angle = 0, this.xOffset = 0, this.yOffset = 0, this.width = 0, this.height = 0, this.boundsType = "square", this._anchorX = 0, this._anchorY = 0, this._computedWidth = 0, this._computedHeight = 0, this._vertexBoundsScaleX = 1, this._vertexBoundsScaleY = 1, this._offsets = { xUpperLeft: 0, yUpperLeft: 0, xUpperRight: 0, yUpperRight: 0, xBottomLeft: 0, yBottomLeft: 0, xBottomRight: 0, yBottomRight: 0 }, this.geometryType = E$1.MARKER;
  }
  _write(t2, e2, i2) {
    const r2 = e2.getDisplayId();
    t2.recordStart(r2, this._materialKey, this.geometryType, false, true), this._writeGeometry(t2, e2, r2, i2), t2.recordEnd();
  }
  _writeGeometry(e2, i2, o2, h2) {
    if (r$8(this._markerPlacement))
      return this._writePlacedMarkers(e2, i2, h2);
    const f2 = h2 ? Ie(X(h2), 2) : i2.geometryType === "esriGeometryPolygon" ? i2.readCentroid() : i2.readUnquantizedGeometry();
    if (f2) {
      if (f2.isPoint) {
        const [t2, i3] = f2.coords;
        if (!e2.hasAggregates && e2.hasPixelBufferEnabled && (t2 < -1 || t2 >= 513 || i3 < -1 || i3 >= 513))
          return;
        return this._writeVertices(e2, o2, this._getPos(t2, i3), t2, i3);
      }
      f2.forEachVertex((t2, i3) => this._writeVertices(e2, o2, this._getPos(t2, i3), t2, i3));
    }
  }
  _writePlacedMarkers(t2, r2, s2) {
    const o2 = s2 != null ? s2 : r2.readLegacyGeometry(), h2 = e$1.getPlacement(o2, e$5(this._markerPlacement), u$7(1));
    if (!h2)
      return;
    const f2 = r2.getDisplayId(), n2 = n$7(), x2 = n$5(), a2 = -128, l2 = 640;
    let p2 = h2.next();
    for (; p2 != null; ) {
      const { tx: e2, ty: i2 } = p2;
      e2 >= a2 && e2 <= l2 && i2 >= a2 && i2 <= l2 && (this._applyTransformation(x2, n2, p2.getAngle() / d$7), this._writeVertices(t2, f2, this._getPos(e2, i2), e2, i2)), p2 = h2.next();
    }
  }
  _writeVertices(t2, e2, i2, r2, s2) {
    const o2 = t2.vertexCount();
    t2.vertexBounds(r2 + this.xOffset, s2 - this.yOffset, this._computedWidth * this._vertexBoundsScaleX, this._computedHeight * this._vertexBoundsScaleY), t2.vertexWrite(i2), t2.vertexWrite(this._offsetUpperLeft), t2.vertexWrite(this._texUpperLeft), t2.vertexWrite(this._bitestAndDistRatio), t2.vertexWrite(e2), t2.vertexWrite(this._fillColor), t2.vertexWrite(this._outlineColor), t2.vertexWrite(this._sizeOutlineWidth), t2.vertexEnd(), t2.vertexWrite(i2), t2.vertexWrite(this._offsetUpperRight), t2.vertexWrite(this._texUpperRight), t2.vertexWrite(this._bitestAndDistRatio), t2.vertexWrite(e2), t2.vertexWrite(this._fillColor), t2.vertexWrite(this._outlineColor), t2.vertexWrite(this._sizeOutlineWidth), t2.vertexEnd(), t2.vertexWrite(i2), t2.vertexWrite(this._offsetBottomLeft), t2.vertexWrite(this._texBottomLeft), t2.vertexWrite(this._bitestAndDistRatio), t2.vertexWrite(e2), t2.vertexWrite(this._fillColor), t2.vertexWrite(this._outlineColor), t2.vertexWrite(this._sizeOutlineWidth), t2.vertexEnd(), t2.vertexWrite(i2), t2.vertexWrite(this._offsetBottomRight), t2.vertexWrite(this._texBottomRight), t2.vertexWrite(this._bitestAndDistRatio), t2.vertexWrite(e2), t2.vertexWrite(this._fillColor), t2.vertexWrite(this._outlineColor), t2.vertexWrite(this._sizeOutlineWidth), t2.vertexEnd(), t2.indexWrite(o2 + 0), t2.indexWrite(o2 + 1), t2.indexWrite(o2 + 2), t2.indexWrite(o2 + 1), t2.indexWrite(o2 + 3), t2.indexWrite(o2 + 2);
  }
  _applyTransformation(t2, e2, i2 = 0) {
    n$6(t2), i$8(t2, t2, t$5(this.xOffset, -this.yOffset)), this.angle + i2 !== 0 && c$c(t2, t2, d$7 * (this.angle + i2));
    const r2 = this._computedWidth, s2 = this._computedHeight, _2 = (this._anchorX - 0.5) * r2, m2 = (this._anchorY - 0.5) * s2;
    r$b(e2, _2, m2), D$1(e2, e2, t2), this._offsetUpperLeft = m$8(16 * e2[0], 16 * e2[1]), this._offsets.xUpperLeft = e2[0], this._offsets.yUpperLeft = e2[1], r$b(e2, _2 + r2, m2), D$1(e2, e2, t2), this._offsetUpperRight = m$8(16 * e2[0], 16 * e2[1]), this._offsets.xUpperRight = e2[0], this._offsets.yUpperRight = e2[1], r$b(e2, _2, m2 + s2), D$1(e2, e2, t2), this._offsetBottomLeft = m$8(16 * e2[0], 16 * e2[1]), this._offsets.xBottomLeft = e2[0], this._offsets.yBottomLeft = e2[1], r$b(e2, _2 + r2, m2 + s2), D$1(e2, e2, t2), this._offsetBottomRight = m$8(16 * e2[0], 16 * e2[1]), this._offsets.xBottomRight = e2[0], this._offsets.yBottomRight = e2[1];
  }
  _getPos(t2, e2) {
    return m$8(Math.round(v$3 * t2), Math.round(v$3 * e2));
  }
};
class d$6 extends W$1(r$3) {
  constructor(t2, e2, o2, l2, m2, c2, f2, d2, u2, x2, p2, M2, y2, _2, S2, g2, V, z2, B2, k2, w2) {
    super(), this.angle = l2, this.height = f2, this.width = c2, this.xOffset = e2 * B2, this.yOffset = o2 * B2, this._markerPlacement = k2, this._effects = w2, this._anchorX = 0.5 - (0.5 + g2) * S2.width / S2.width, this._anchorY = 0.5 - (0.5 + V) * S2.height / S2.height;
    const b2 = (_2 === 1 ? 1 : 0) | (p2 ? 1 : 0) << 1 | (y2 ? 1 : 0) << 2 | (M2 ? 1 : 0) << 3, L2 = S2 && S2.sdf, j2 = w$5.load(t2);
    j2.sdf = L2, j2.pattern = true, j2.textureBinding = S2.textureBinding, this._materialKey = j2.data, this._fillColor = m2, this._outlineColor = u2, this._sizeOutlineWidth = w$4(Math.round(Math.min(Math.sqrt(128 * c2), 255)), Math.round(Math.min(Math.sqrt(128 * f2), 255)), Math.round(Math.min(Math.sqrt(128 * x2), 255)), Math.round(Math.min(Math.sqrt(128 * d2), 255)));
    const P2 = S2.rect.x + Y, C2 = S2.rect.y + Y, R = P2 + S2.width, v2 = C2 + S2.height;
    this._offsets.xUpperLeft = P2, this._offsets.yUpperLeft = C2, this._offsets.xUpperRight = R, this._offsets.yUpperRight = C2, this._offsets.xBottomLeft = P2, this._offsets.yBottomLeft = v2, this._offsets.xBottomRight = R, this._offsets.yBottomRight = v2, this._texUpperLeft = m$8(P2, C2), this._texUpperRight = m$8(R, C2), this._texBottomLeft = m$8(P2, v2), this._texBottomRight = m$8(R, v2), c2 *= z2, f2 *= z2, c2 *= B2, f2 *= B2;
    const K2 = Math.round(64 * z2);
    this._bitestAndDistRatio = m$8(b2, K2), this._computedWidth = c2, this._computedHeight = f2;
    const U = n$7(), W2 = n$5();
    this._applyTransformation(W2, U);
  }
  static fromCIMMarker(i2, o2) {
    const s2 = o2 && o2.width || 1, r2 = o2 && o2.height || 1, a2 = i2.size, n2 = s2 / r2 * i2.scaleX, h2 = i2.scaleSymbolsProportionally && i2.frameHeight ? a2 / i2.frameHeight : 1, m2 = i$7(i2.color), c2 = i$7(i2.outlineColor), f2 = u$7(a2), u2 = f2 * n2, x2 = u$7(i2.offsetX || 0), p2 = u$7(i2.offsetY || 0), M2 = u$7(i2.outlineWidth || 0) * h2, y2 = i2.alignment || 0, _2 = u$7(i2.referenceSize);
    let S2 = i2.rotation || 0;
    i2.rotateClockwise || (S2 = -S2);
    let g2 = 0, V = 0;
    const z2 = i2.anchorPoint;
    z2 && (i2.isAbsoluteAnchorPoint ? a2 && (g2 = -z2.x / (a2 * n2), V = z2.y / a2) : (g2 = z2.x, V = z2.y));
    const B2 = new d$6(i2.materialKey, x2, p2, S2, m2, u2, f2, _2, c2, M2, i2.colorLocked, i2.scaleSymbolsProportionally, false, y2, o2, g2, V, i2.sizeRatio, c$d(i2.scaleFactor, 1), i2.markerPlacement, i2.effects);
    return B2._vertexBoundsScaleX = i2.maxVVSize ? i2.maxVVSize / u2 : 1, B2._vertexBoundsScaleY = i2.maxVVSize ? i2.maxVVSize / f2 : 1, B2;
  }
  static fromPictureMarker(t2, i2) {
    const s2 = Math.round(u$7(t2.width)), r2 = Math.round(u$7(t2.height)), a2 = i$9, n2 = Math.round(u$7(t2.xoffset || 0)), h2 = Math.round(u$7(t2.yoffset || 0)), l2 = new d$6(t2.materialKey, n2, h2, t2.angle, a2, s2, r2, r2, 0, 0, false, false, false, 0, i2, 0, 0, 1, 1, null, null);
    return l2._vertexBoundsScaleX = t2.maxVVSize ? t2.maxVVSize / t2.width : 1, l2._vertexBoundsScaleY = t2.maxVVSize ? t2.maxVVSize / t2.height : 1, l2;
  }
  static fromSimpleMarker(t2, i2) {
    const o2 = f$8(t2.color), s2 = Math.round(u$7(t2.size)), r2 = s2, a2 = Math.round(u$7(t2.xoffset || 0)), n2 = Math.round(u$7(t2.yoffset || 0)), h2 = t2.style, l2 = t2.outline, c2 = 0 | (l2 && l2.color && f$8(l2.color)), f2 = 0 | (l2 && l2.width && Math.round(u$7(l2.width))), u2 = new d$6(t2.materialKey, a2, n2, t2.angle, o2, s2, r2, r2, c2, f2, false, false, h2 === "esriSMSCross" || h2 === "esriSMSX", 0, i2, 0, 0, 126 / 64, 1, null, null);
    return u2.boundsType = h2 === "esriSMSCircle" ? "circle" : "square", u2._vertexBoundsScaleX = t2.maxVVSize ? t2.maxVVSize / t2.size : 1, u2._vertexBoundsScaleY = t2.maxVVSize ? t2.maxVVSize / t2.size : 1, u2;
  }
  static fromLineSymbolMarker(t2, i2) {
    const o2 = f$8(t2.color), s2 = 6, r2 = Math.round(u$7(s2 * t2.lineWidth)), a2 = r2, n2 = t2.style === "cross" || t2.style === "x";
    let h2;
    switch (t2.placement) {
      case "begin-end":
        h2 = "Both";
        break;
      case "begin":
        h2 = "JustBegin";
        break;
      case "end":
        h2 = "JustEnd";
        break;
      default:
        h2 = "None";
    }
    const l2 = { type: "CIMMarkerPlacementAtExtremities", angleToLine: true, offset: 0, extremityPlacement: h2, offsetAlongLine: 0 }, c2 = new d$6(t2.materialKey, 0, 0, 0, o2, r2, a2, a2 / s2, o2, n2 ? Math.round(u$7(t2.lineWidth)) : 0, false, false, n2, 1, i2, 0, 0, 126 / 64, 1, l2, null);
    return c2.boundsType = t2.style === "circle" ? "circle" : "square", c2;
  }
}
function e(e2, t2, r2, i2, u2, l2, o2) {
  D = 0;
  const f2 = (i2 - r2) * l2, p2 = u2 && u2.length, c2 = p2 ? (u2[0] - r2) * l2 : f2;
  let v2, s2, h2, d2, Z2, a2 = n(t2, r2, i2, 0, c2, l2, true);
  if (a2 && a2.next !== a2.prev) {
    if (p2 && (a2 = y$3(t2, r2, i2, u2, a2, l2)), f2 > 80 * l2) {
      v2 = h2 = t2[0 + r2 * l2], s2 = d2 = t2[1 + r2 * l2];
      for (let e3 = l2; e3 < c2; e3 += l2) {
        const n2 = t2[e3 + r2 * l2], x2 = t2[e3 + 1 + r2 * l2];
        v2 = Math.min(v2, n2), s2 = Math.min(s2, x2), h2 = Math.max(h2, n2), d2 = Math.max(d2, x2);
      }
      Z2 = Math.max(h2 - v2, d2 - s2), Z2 = Z2 !== 0 ? 1 / Z2 : 0;
    }
    x$1(a2, e2, l2, v2, s2, Z2, o2, 0);
  }
}
function n(e2, n2, t2, x2, r2, i2, o2) {
  let y2;
  if (o2 === Z$1(e2, n2, t2, x2, r2, i2) > 0)
    for (let l2 = x2; l2 < r2; l2 += i2)
      y2 = u$5(l2 + n2 * i2, e2[l2 + n2 * i2], e2[l2 + 1 + n2 * i2], y2);
  else
    for (let l2 = r2 - i2; l2 >= x2; l2 -= i2)
      y2 = u$5(l2 + n2 * i2, e2[l2 + n2 * i2], e2[l2 + 1 + n2 * i2], y2);
  return y2 && M$2(y2, y2.next) && (l$3(y2), y2 = y2.next), y2;
}
function t$1(e2, n2 = e2) {
  if (!e2)
    return e2;
  let t2, x2 = e2;
  do {
    if (t2 = false, x2.steiner || !M$2(x2, x2.next) && s$2(x2.prev, x2, x2.next) !== 0)
      x2 = x2.next;
    else {
      if (l$3(x2), x2 = n2 = x2.prev, x2 === x2.next)
        break;
      t2 = true;
    }
  } while (t2 || x2 !== n2);
  return n2;
}
function x$1(e2, n2, u2, o2, y2, f2, p2, v2) {
  if (!e2)
    return;
  !v2 && f2 && (e2 = c$6(e2, o2, y2, f2));
  let s2 = e2;
  for (; e2.prev !== e2.next; ) {
    const c2 = e2.prev, h2 = e2.next;
    if (f2 ? i$3(e2, o2, y2, f2) : r$2(e2))
      n2.push(c2.index / u2 + p2), n2.push(e2.index / u2 + p2), n2.push(h2.index / u2 + p2), l$3(e2), e2 = h2.next, s2 = h2.next;
    else if ((e2 = h2) === s2) {
      v2 ? v2 === 1 ? x$1(e2 = b$2(e2, n2, u2, p2), n2, u2, o2, y2, f2, p2, 2) : v2 === 2 && g$2(e2, n2, u2, o2, y2, f2, p2) : x$1(t$1(e2), n2, u2, o2, y2, f2, p2, 1);
      break;
    }
  }
}
function r$2(e2) {
  const n2 = e2.prev, t2 = e2, x2 = e2.next;
  if (s$2(n2, t2, x2) >= 0)
    return false;
  let r2 = e2.next.next;
  const i2 = r2;
  let u2 = 0;
  for (; r2 !== e2.prev && (u2 === 0 || r2 !== i2); ) {
    if (u2++, a$2(n2.x, n2.y, t2.x, t2.y, x2.x, x2.y, r2.x, r2.y) && s$2(r2.prev, r2, r2.next) >= 0)
      return false;
    r2 = r2.next;
  }
  return true;
}
function i$3(e2, n2, t2, x2) {
  const r2 = e2.prev, i2 = e2, u2 = e2.next;
  if (s$2(r2, i2, u2) >= 0)
    return false;
  const l2 = r2.x < i2.x ? r2.x < u2.x ? r2.x : u2.x : i2.x < u2.x ? i2.x : u2.x, o2 = r2.y < i2.y ? r2.y < u2.y ? r2.y : u2.y : i2.y < u2.y ? i2.y : u2.y, y2 = r2.x > i2.x ? r2.x > u2.x ? r2.x : u2.x : i2.x > u2.x ? i2.x : u2.x, f2 = r2.y > i2.y ? r2.y > u2.y ? r2.y : u2.y : i2.y > u2.y ? i2.y : u2.y, p2 = z$1(l2, o2, n2, t2, x2), c2 = z$1(y2, f2, n2, t2, x2);
  let v2 = e2.prevZ, h2 = e2.nextZ;
  for (; v2 && v2.z >= p2 && h2 && h2.z <= c2; ) {
    if (v2 !== e2.prev && v2 !== e2.next && a$2(r2.x, r2.y, i2.x, i2.y, u2.x, u2.y, v2.x, v2.y) && s$2(v2.prev, v2, v2.next) >= 0)
      return false;
    if (v2 = v2.prevZ, h2 !== e2.prev && h2 !== e2.next && a$2(r2.x, r2.y, i2.x, i2.y, u2.x, u2.y, h2.x, h2.y) && s$2(h2.prev, h2, h2.next) >= 0)
      return false;
    h2 = h2.nextZ;
  }
  for (; v2 && v2.z >= p2; ) {
    if (v2 !== e2.prev && v2 !== e2.next && a$2(r2.x, r2.y, i2.x, i2.y, u2.x, u2.y, v2.x, v2.y) && s$2(v2.prev, v2, v2.next) >= 0)
      return false;
    v2 = v2.prevZ;
  }
  for (; h2 && h2.z <= c2; ) {
    if (h2 !== e2.prev && h2 !== e2.next && a$2(r2.x, r2.y, i2.x, i2.y, u2.x, u2.y, h2.x, h2.y) && s$2(h2.prev, h2, h2.next) >= 0)
      return false;
    h2 = h2.nextZ;
  }
  return true;
}
function u$5(e2, n2, t2, x2) {
  const r2 = q.create(e2, n2, t2);
  return x2 ? (r2.next = x2.next, r2.prev = x2, x2.next.prev = r2, x2.next = r2) : (r2.prev = r2, r2.next = r2), r2;
}
function l$3(e2) {
  e2.next.prev = e2.prev, e2.prev.next = e2.next, e2.prevZ && (e2.prevZ.nextZ = e2.nextZ), e2.nextZ && (e2.nextZ.prevZ = e2.prevZ);
}
function o(e2) {
  let n2 = e2, t2 = e2;
  do {
    (n2.x < t2.x || n2.x === t2.x && n2.y < t2.y) && (t2 = n2), n2 = n2.next;
  } while (n2 !== e2);
  return t2;
}
function y$3(e2, x2, r2, i2, u2, l2) {
  const y2 = new Array();
  for (let t2 = 0, f2 = i2.length; t2 < f2; t2++) {
    const u3 = n(e2, x2, r2, i2[t2] * l2, t2 < f2 - 1 ? i2[t2 + 1] * l2 : r2 * l2, l2, false);
    u3 === u3.next && (u3.steiner = true), y2.push(o(u3));
  }
  y2.sort(m$4);
  for (const n2 of y2)
    f$3(n2, u2), u2 = t$1(u2, u2.next);
  return u2;
}
function f$3(e2, n2) {
  if (n2 = p$3(e2, n2)) {
    const x2 = j$1(n2, e2);
    t$1(x2, x2.next);
  }
}
function p$3(e2, n2) {
  let t2 = n2;
  const x2 = e2.x, r2 = e2.y;
  let i2, u2 = -1 / 0;
  do {
    if (r2 <= t2.y && r2 >= t2.next.y && t2.next.y !== t2.y) {
      const e3 = t2.x + (r2 - t2.y) * (t2.next.x - t2.x) / (t2.next.y - t2.y);
      if (e3 <= x2 && e3 > u2) {
        if (u2 = e3, e3 === x2) {
          if (r2 === t2.y)
            return t2;
          if (r2 === t2.next.y)
            return t2.next;
        }
        i2 = t2.x < t2.next.x ? t2 : t2.next;
      }
    }
    t2 = t2.next;
  } while (t2 !== n2);
  if (!i2)
    return null;
  if (x2 === u2)
    return i2.prev;
  const l2 = i2, o2 = i2.x, y2 = i2.y;
  let f2, p2 = 1 / 0;
  for (t2 = i2.next; t2 !== l2; )
    x2 >= t2.x && t2.x >= o2 && x2 !== t2.x && a$2(r2 < y2 ? x2 : u2, r2, o2, y2, r2 < y2 ? u2 : x2, r2, t2.x, t2.y) && (f2 = Math.abs(r2 - t2.y) / (x2 - t2.x), (f2 < p2 || f2 === p2 && t2.x > i2.x) && w$2(t2, e2) && (i2 = t2, p2 = f2)), t2 = t2.next;
  return i2;
}
function c$6(e2, n2, t2, x2) {
  for (let r2; r2 !== e2; r2 = r2.next) {
    if (r2 = r2 || e2, r2.z === null && (r2.z = z$1(r2.x, r2.y, n2, t2, x2)), r2.prev.next !== r2 || r2.next.prev !== r2)
      return r2.prev.next = r2, r2.next.prev = r2, c$6(e2, n2, t2, x2);
    r2.prevZ = r2.prev, r2.nextZ = r2.next;
  }
  return e2.prevZ.nextZ = null, e2.prevZ = null, v$2(e2);
}
function v$2(e2) {
  let n2, t2 = 1;
  for (; ; ) {
    let x2, r2 = e2;
    e2 = null, n2 = null;
    let i2 = 0;
    for (; r2; ) {
      i2++, x2 = r2;
      let u2 = 0;
      for (; u2 < t2 && x2; u2++)
        x2 = x2.nextZ;
      let l2 = t2;
      for (; u2 > 0 || l2 > 0 && x2; ) {
        let t3;
        u2 === 0 ? (t3 = x2, x2 = x2.nextZ, l2--) : l2 !== 0 && x2 ? r2.z <= x2.z ? (t3 = r2, r2 = r2.nextZ, u2--) : (t3 = x2, x2 = x2.nextZ, l2--) : (t3 = r2, r2 = r2.nextZ, u2--), n2 ? n2.nextZ = t3 : e2 = t3, t3.prevZ = n2, n2 = t3;
      }
      r2 = x2;
    }
    if (n2.nextZ = null, t2 *= 2, i2 < 2)
      return e2;
  }
}
function s$2(e2, n2, t2) {
  return (n2.y - e2.y) * (t2.x - n2.x) - (n2.x - e2.x) * (t2.y - n2.y);
}
function h$5(e2, n2, t2, x2) {
  return !!(M$2(e2, n2) && M$2(t2, x2) || M$2(e2, x2) && M$2(t2, n2)) || s$2(e2, n2, t2) > 0 != s$2(e2, n2, x2) > 0 && s$2(t2, x2, e2) > 0 != s$2(t2, x2, n2) > 0;
}
function d$5(e2, n2) {
  let t2 = e2;
  do {
    if (t2.index !== e2.index && t2.next.index !== e2.index && t2.index !== n2.index && t2.next.index !== n2.index && h$5(t2, t2.next, e2, n2))
      return true;
    t2 = t2.next;
  } while (t2 !== e2);
  return false;
}
function Z$1(e2, n2, t2, x2, r2, i2) {
  let u2 = 0;
  for (let l2 = x2, o2 = r2 - i2; l2 < r2; l2 += i2)
    u2 += (e2[o2 + n2 * i2] - e2[l2 + n2 * i2]) * (e2[l2 + 1 + n2 * i2] + e2[o2 + 1 + n2 * i2]), o2 = l2;
  return u2;
}
function a$2(e2, n2, t2, x2, r2, i2, u2, l2) {
  return (r2 - u2) * (n2 - l2) - (e2 - u2) * (i2 - l2) >= 0 && (e2 - u2) * (x2 - l2) - (t2 - u2) * (n2 - l2) >= 0 && (t2 - u2) * (i2 - l2) - (r2 - u2) * (x2 - l2) >= 0;
}
function w$2(e2, n2) {
  return s$2(e2.prev, e2, e2.next) < 0 ? s$2(e2, n2, e2.next) >= 0 && s$2(e2, e2.prev, n2) >= 0 : s$2(e2, n2, e2.prev) < 0 || s$2(e2, e2.next, n2) < 0;
}
function z$1(e2, n2, t2, x2, r2) {
  return (e2 = 1431655765 & ((e2 = 858993459 & ((e2 = 252645135 & ((e2 = 16711935 & ((e2 = 32767 * (e2 - t2) * r2) | e2 << 8)) | e2 << 4)) | e2 << 2)) | e2 << 1)) | (n2 = 1431655765 & ((n2 = 858993459 & ((n2 = 252645135 & ((n2 = 16711935 & ((n2 = 32767 * (n2 - x2) * r2) | n2 << 8)) | n2 << 4)) | n2 << 2)) | n2 << 1)) << 1;
}
function M$2(e2, n2) {
  return e2.x === n2.x && e2.y === n2.y;
}
function m$4(e2, n2) {
  return e2.x - n2.x;
}
function b$2(e2, n2, t2, x2) {
  let r2 = e2;
  do {
    const i2 = r2.prev, u2 = r2.next.next;
    !M$2(i2, u2) && h$5(i2, r2, r2.next, u2) && w$2(i2, u2) && w$2(u2, i2) && (n2.push(i2.index / t2 + x2), n2.push(r2.index / t2 + x2), n2.push(u2.index / t2 + x2), l$3(r2), l$3(r2.next), r2 = e2 = u2), r2 = r2.next;
  } while (r2 !== e2);
  return r2;
}
function g$2(e2, n2, r2, i2, u2, l2, o2) {
  let y2 = e2;
  do {
    let e3 = y2.next.next;
    for (; e3 !== y2.prev; ) {
      if (y2.index !== e3.index && k$1(y2, e3)) {
        let f2 = j$1(y2, e3);
        return y2 = t$1(y2, y2.next), f2 = t$1(f2, f2.next), x$1(y2, n2, r2, i2, u2, l2, o2, 0), void x$1(f2, n2, r2, i2, u2, l2, o2, 0);
      }
      e3 = e3.next;
    }
    y2 = y2.next;
  } while (y2 !== e2);
}
function k$1(e2, n2) {
  return e2.next.index !== n2.index && e2.prev.index !== n2.index && !d$5(e2, n2) && w$2(e2, n2) && w$2(n2, e2) && A$1(e2, n2);
}
function A$1(e2, n2) {
  let t2 = e2, x2 = false;
  const r2 = (e2.x + n2.x) / 2, i2 = (e2.y + n2.y) / 2;
  do {
    t2.y > i2 != t2.next.y > i2 && t2.next.y !== t2.y && r2 < (t2.next.x - t2.x) * (i2 - t2.y) / (t2.next.y - t2.y) + t2.x && (x2 = !x2), t2 = t2.next;
  } while (t2 !== e2);
  return x2;
}
function j$1(e2, n2) {
  const t2 = q.create(e2.index, e2.x, e2.y), x2 = q.create(n2.index, n2.x, n2.y), r2 = e2.next, i2 = n2.prev;
  return e2.next = n2, n2.prev = e2, t2.next = r2, r2.prev = t2, x2.next = t2, t2.prev = x2, i2.next = x2, x2.prev = i2, x2;
}
class q {
  constructor() {
    this.index = 0, this.x = 0, this.y = 0, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = false;
  }
  static create(e2, n2, t2) {
    const x2 = D < B.length ? B[D++] : new q();
    return x2.index = e2, x2.x = n2, x2.y = t2, x2.prev = null, x2.next = null, x2.z = null, x2.prevZ = null, x2.nextZ = null, x2.steiner = false, x2;
  }
}
const B = new Array(), C = 8096;
let D = 0;
for (let E2 = 0; E2 < C; E2++)
  B.push(new q());
const l$2 = 1e-5, c$5 = new i$a(), i$2 = new n$8(0, 0, 0, 1, 0), f$2 = new n$8(0, 0, 0, 1, 0);
function u$4(t2, o2, e2) {
  let n2 = 0;
  for (let r2 = 1; r2 < e2; r2++) {
    const e3 = t2[2 * (o2 + r2 - 1)], s2 = t2[2 * (o2 + r2 - 1) + 1];
    n2 += (t2[2 * (o2 + r2)] - e3) * (t2[2 * (o2 + r2) + 1] + s2);
  }
  return n2;
}
function h$4(t2, o2, e2, n2, r2) {
  let s2 = 0;
  const l2 = 2;
  for (let c2 = e2; c2 < n2; c2 += 3) {
    const e3 = (t2.getValue(c2) - r2) * l2, n3 = (t2.getValue(c2 + 1) - r2) * l2, i2 = (t2.getValue(c2 + 2) - r2) * l2;
    s2 += Math.abs((o2[e3] - o2[i2]) * (o2[n3 + 1] - o2[e3 + 1]) - (o2[e3] - o2[n3]) * (o2[i2 + 1] - o2[e3 + 1]));
  }
  return s2;
}
function d$4(t2, o2) {
  const { coords: e$12, lengths: n2, hasIndeterminateRingOrder: s2 } = o2, c2 = t2.indexWriter(), i2 = t2.vertexCount();
  if (s2)
    return false;
  const f2 = c2.length;
  let d2 = 0;
  for (let g2 = 0; g2 < n2.length; ) {
    let t3 = g2, o3 = n2[g2], s3 = u$4(e$12, d2, o3);
    const a2 = [];
    for (; ++t3 < n2.length; ) {
      const r2 = n2[t3], l2 = u$4(e$12, d2 + o3, r2);
      if (!(l2 > 0))
        break;
      s3 += l2, a2.push(d2 + o3), o3 += r2;
    }
    const p2 = c2.length;
    e(c2, e$12, d2, d2 + o3, a2, 2, i2);
    const m2 = h$4(c2, e$12, p2, c2.length, i2), x2 = Math.abs(s3);
    if (Math.abs((m2 - x2) / Math.max(1e-7, x2)) > l$2)
      return c2.seek(f2), false;
    g2 = t3, d2 += o3;
  }
  return true;
}
function a$1(t2, o2) {
  const e2 = [], n2 = [], r2 = t2.indexWriter(), s2 = t2.vertexCount(), { coords: l2, lengths: i2 } = o2;
  c$5.beginPolygon(e2, n2);
  let f2 = 0;
  for (let u2 = 0; u2 < i2.length; u2++) {
    const t3 = o2.lengths[u2];
    c$5.beginContour();
    for (let o3 = 0; o3 < t3; o3++) {
      const t4 = [l2[2 * (f2 + o3)], l2[2 * (f2 + o3) + 1], 0];
      c$5.addVertex(t4, t4);
    }
    c$5.endContour(), f2 += t3;
  }
  c$5.endPolygon();
  for (let c2 = 0; c2 < n2.length; c2++)
    r2.push(n2[c2] + s2);
  return e2;
}
function m$3(t2, o2, e2) {
  let n2 = 0;
  for (let r2 = 0; r2 < t2.lengths.length; r2++) {
    const s2 = t2.lengths[r2];
    for (let r3 = 0; r3 < s2; r3++) {
      const s3 = t2.coords[2 * (r3 + n2)], l2 = t2.coords[2 * (r3 + n2) + 1];
      if (s3 < o2 || s3 > e2 || l2 < o2 || l2 > e2)
        return true;
    }
    n2 += s2;
  }
  return false;
}
function x(o2, n2) {
  if (!m$3(o2, -128, o$3 + 128))
    return o2;
  i$2.setPixelMargin(n2), i$2.reset(3);
  let r2 = 0;
  for (let t2 = 0; t2 < o2.lengths.length; t2++) {
    const e2 = o2.lengths[t2];
    let n3 = o2.coords[2 * (0 + r2)], s3 = o2.coords[2 * (0 + r2) + 1];
    i$2.moveTo(n3, s3);
    for (let t3 = 1; t3 < e2; t3++)
      n3 = o2.coords[2 * (t3 + r2)], s3 = o2.coords[2 * (t3 + r2) + 1], i$2.lineTo(n3, s3);
    i$2.close(), r2 += e2;
  }
  const s2 = i$2.result(false);
  if (!s2)
    return null;
  const l2 = [], c2 = [];
  for (const t2 of s2) {
    let o3 = 0;
    for (const e2 of t2)
      c2.push(e2.x), c2.push(e2.y), o3++;
    l2.push(o3);
  }
  return new t$6(l2, c2);
}
function b$1(t2, o2) {
  f$2.setPixelMargin(o2);
  const n2 = f$2, r2 = -o2, s2 = o$3 + o2;
  let l2 = [], c2 = false, i2 = 0;
  for (; i2 < t2.length; ) {
    const o3 = [], e2 = t2[i2];
    n2.reset(2);
    let [f2, u2] = e2[0];
    if (c2)
      n2.moveTo(f2, u2);
    else {
      if (f2 < r2 || f2 > s2 || u2 < r2 || u2 > s2) {
        c2 = true;
        continue;
      }
      o3.push({ x: f2, y: u2 });
    }
    let h2 = false;
    const d2 = e2.length;
    for (let t3 = 1; t3 < d2; ++t3)
      if (f2 += e2[t3][0], u2 += e2[t3][1], c2)
        n2.lineTo(f2, u2);
      else {
        if (f2 < r2 || f2 > s2 || u2 < r2 || u2 > s2) {
          h2 = true;
          break;
        }
        o3.push({ x: f2, y: u2 });
      }
    if (h2)
      c2 = true;
    else {
      if (c2) {
        const t3 = n2.resultWithStarts();
        if (t3)
          for (const o4 of t3)
            l2.push(o4);
      } else
        l2.push({ line: o3, start: 0 });
      i2++, c2 = false;
    }
  }
  return l2 = l2.filter((t3) => t3.line.length > 1), l2.length === 0 ? null : l2;
}
i$2.setExtent(o$3), f$2.setExtent(o$3);
const l$1 = 1e3, c$4 = 1, y$2 = (y2) => class extends y2 {
  constructor(...e2) {
    super(...e2), this.forceLibtess = false, this.geometryType = E$1.FILL;
  }
  _write(e2, t2, r2) {
    const i2 = t2.geometryType === "esriGeometryPoint", s2 = C$1.load(this._materialKey);
    e2.recordStart(t2.getDisplayId(), this._materialKey, this.geometryType, s2.dotDensity, i2), this._writeGeometry(e2, t2, s2, r2, i2), e2.recordEnd();
  }
  _writeGeometry(t2, r2, i2, s2, o2) {
    const a2 = this._getGeometry(r2, s2, o2);
    if (t$4(a2))
      return;
    const c2 = t2.indexCount();
    if (!(a2.lengths[0] > l$1) && !this.forceLibtess && d$4(t2, a2)) {
      return void (!(c2 === t2.indexCount()) && this._writeVertices(t2, r2, a2.coords, a2.lengths, i2));
    }
    const y3 = a$1(t2, a2);
    !(c2 === t2.indexCount()) && this._writeVertices(t2, r2, y3, [y3.length / 2], i2);
  }
  _writeVertices(e2, t2, r2, s2, o2) {
    const n2 = t2.getDisplayId();
    let m2 = 0;
    for (const a2 of s2) {
      const s3 = a2 + m2;
      for (let a3 = m2; a3 < s3; a3++) {
        const s4 = r2[2 * a3], m3 = r2[2 * a3 + 1], l2 = m$8(c$4 * s4, c$4 * m3);
        e2.vertexBounds(s4, m3, 0, 0), e2.vertexWrite(l2), e2.vertexWrite(n2), o2.dotDensity ? e2.vertexWriteF32(1 / Math.abs(t2.readGeometryArea())) : (e2.vertexWrite(this.fillColor), e2.vertexWrite(this.tl), e2.vertexWrite(this.br), e2.vertexWrite(this.aux1), e2.vertexWrite(this.aux2), e2.vertexWrite(this.aux3));
      }
      m2 += a2;
    }
  }
  _getGeometry(e2, i2, s2) {
    const o2 = i2 ? Ie(X(i2), 2) : e2.readUnquantizedGeometry();
    if (!o2)
      return null;
    return x(o2, s2 ? 256 : 128);
  }
};
const i$1 = n$1.getLogger("esri.views.2d.engine.webgl.WGLDynamicMeshTemplate");
class s$1 extends r$3 {
  constructor(e2) {
    super(), this._ongoingMaterialRequestMap = new Map(), this._materialCache = new Map(), this._dynamicPropertyMap = new Map(), this._cimLayer = e2;
  }
  analyze(e2, a2, s2, r2) {
    const o2 = a2.readLegacyFeature(), n2 = this._materialCache, m2 = this._cimLayer.materialHash;
    if (!m2)
      return i$1.error("A Dynamic mesh template must have a material hash value or function!"), Promise.reject(null);
    const c2 = typeof m2 == "function" ? m2(o2, s2, r2) : m2;
    if (n2.has(c2)) {
      const e3 = n2.get(c2);
      return Promise.resolve(e3);
    }
    if (this._ongoingMaterialRequestMap.has(c2))
      return this._ongoingMaterialRequestMap.get(c2);
    const l2 = T$1(this._cimLayer.cim, this._cimLayer.materialOverrides);
    l2.mosaicHash = c2;
    const h2 = e2.getMosaicItem(l2).then((e3) => (this._ongoingMaterialRequestMap.delete(c2), n2.set(c2, e3), e3)).catch((e3) => (this._ongoingMaterialRequestMap.delete(c2), i$1.error(".analyze()", e3.message), null));
    return this._ongoingMaterialRequestMap.set(c2, h2), h2;
  }
}
const m$2 = 128;
class p$2 extends y$2(s$1) {
  constructor(t2) {
    var s2;
    if (super(t2), r$c(t2.color)) {
      const e2 = (e3, s3, i3) => {
        const r3 = t2.color(e3, s3, i3);
        return r3 && i$7(r3) || 0;
      };
      this._dynamicPropertyMap.set("_fillColor", e2);
    } else {
      const e2 = t2.color;
      this.fillColor = e2 && i$7(e2) || 0;
    }
    let i2 = 0;
    r$c(t2.height) || (i2 = t2.height || 0);
    const r2 = ((s2 = t2.cim.placement) == null ? void 0 : s2.type) === "CIMMarkerPlacementInsidePolygon" && t2.cim.placement.shiftOddRows ? 2 : 1, n2 = (e2, s3, o2) => r$c(t2.height) ? t2.height(e2, s3, o2) * r2 : i2 * r2;
    this._dynamicPropertyMap.set("_height", n2);
    let f2 = 0;
    r$c(t2.offsetX) || (f2 = u$7(t2.offsetX || 0) + m$2, f2 > 255 && (f2 = 255));
    const h2 = (s3, i3, r3) => {
      if (r$c(t2.offsetX)) {
        let o2 = u$7(t2.offsetX(s3, i3, r3)) + m$2;
        return o2 > 255 && (o2 = 255), o2;
      }
      return f2;
    };
    this._dynamicPropertyMap.set("_offsetX", h2);
    let p2 = 1;
    r$c(t2.scaleX) || (p2 = t2.scaleX || 1);
    const y2 = (e2, s3, i3) => r$c(t2.scaleX) ? t2.scaleX(e2, s3, i3) : p2;
    this._dynamicPropertyMap.set("_scaleX", y2);
    let d2 = 0;
    r$c(t2.offsetY) || (d2 = u$7(-t2.offsetY || 0) + m$2, d2 > 255 && (d2 = 255));
    const _2 = (s3, i3, r3) => {
      if (r$c(t2.offsetY)) {
        let o2 = u$7(-t2.offsetY(s3, i3, r3)) + m$2;
        return o2 > 255 && (o2 = 255), o2;
      }
      return d2;
    };
    this._dynamicPropertyMap.set("_offsetY", _2);
    let u2 = 0;
    r$c(t2.angle) || (u2 = h$7(t2.angle) || 0);
    const g2 = (e2, s3, i3) => r$c(t2.angle) ? h$7(t2.angle(e2, s3, i3)) : u2;
    this._dynamicPropertyMap.set("_angle", g2), this._effects = t2.effects, this._cimFillLayer = t2, this._fillMaterialKey = C$1.load(t2.materialKey);
  }
  static fromCIMFill(t2) {
    return new p$2(t2);
  }
  bindFeature(o2, a2, l2) {
    const c2 = o2.readLegacyFeature();
    this._dynamicPropertyMap.forEach((t2, e2) => {
      this[e2] = t2(c2, a2, l2);
    });
    const f2 = this._fillMaterialKey, h2 = this._materialCache, p2 = this._cimFillLayer;
    this.aux3 = w$4(0, 0, this._angle, p2.colorLocked ? 1 : 0);
    const y2 = (0, p2.materialHash)(c2, a2, l2), d2 = h2.get(y2);
    let _2 = null;
    if (d2 && e$2(d2.spriteMosaicItem) && (_2 = d2.spriteMosaicItem), _2) {
      const { rect: o3, width: a3, height: l3 } = _2, n2 = o3.x + Y, c3 = o3.y + Y, h3 = n2 + a3, p3 = c3 + l3;
      let y3 = u$8(u$7(this._height));
      y3 > 255 ? y3 = 255 : y3 <= 0 && (y3 = u$8(p3 - c3));
      let d3 = u$8(u$7(this._height / l3 * a3 || 0));
      d3 > 255 ? d3 = 255 : d3 <= 0 && (d3 = u$8(h3 - n2));
      const u2 = this._scaleX, g2 = 1;
      this.tl = m$8(n2, c3), this.br = m$8(h3, p3), this.aux1 = w$4(d3, y3, this._offsetX, this._offsetY), this.aux2 = m$8(m$2 * u2, m$2 * g2), f2.sdf = _2.sdf, f2.pattern = true, f2.textureBinding = _2.textureBinding;
    } else
      this.tl = 0, this.br = 0, this.aux1 = 0, this.aux2 = 0, f2.sdf = false, f2.pattern = false, f2.textureBinding = 0;
    this._materialKey = f2.data;
  }
}
const h$3 = 8, u$3 = 31, d$3 = 1024, v$1 = 65535, c$3 = 1 / 3.8, W = (r2) => class extends r2 {
  constructor(...e2) {
    super(...e2), this.tessellationProperties = {}, this._tessellationOptions = {}, this.geometryType = E$1.LINE;
  }
  _initializeTessellator(e2) {
    const r3 = b$4.load(this._materialKey), i2 = this._tessellationOptions, s2 = r3.vvSizeFieldStops || r3.vvSizeMinMaxValue || r3.vvSizeScaleStops || r3.vvSizeUnitValue, o2 = this.tessellationProperties._halfWidth < S$3 / 2;
    if (i2.thin = o2 && !e2 && !s2, i2.trackDistance = this._isDashed || this._hasPattern, i2.wrapDistance = v$1, i2.innerBisectorAutoSplitThreshold = c$3, i2.outerBisectorAutoSplitThreshold = c$3, i2.enableInnerBisectorSplit = this._isDashed || this._hasPattern, i2.enableOuterBisectorSplit = this._isDashed || this._hasPattern, i2.thin)
      return void (this._tessellationCallbacks = { vertex: _$1(this.tessellationProperties), bridge: p$1(this.tessellationProperties) });
    const a2 = new w$6(f$1(this.tessellationProperties), m$1(this.tessellationProperties));
    a2.miterLimitCosine = this._miterLimitCosine, a2.textured = this._isDashed || this._hasPattern, a2.joinOnUTurn = this._joinOnUTurn, this._tessellationCallbacks = a2;
  }
  _write(e2, t2, r3) {
    const i2 = t2.geometryType === "esriGeometryPoint";
    e2.recordStart(t2.getDisplayId(), this._materialKey, this.geometryType, false, i2), this._writeGeometry(e2, t2, r3, i2), e2.recordEnd();
  }
  _writeGeometry(t2, r3, i2, s2) {
    const n2 = i2 != null ? i2 : r3.readLegacyGeometry(), o2 = this._getLines(n2, s2);
    t$4(o2) || this._writeVertices(t2, r3, o2);
  }
  _getLines(t2, r3) {
    if (t$4(t2))
      return null;
    const i2 = t2.paths || t2.rings;
    if (t$4(i2))
      return null;
    return b$1(i2, r3 ? 256 : 16);
  }
  _writeVertices(e2, t2, r3) {
    const i2 = t2.getDisplayId(), s2 = e2.vertexCount(), n2 = this.tessellationProperties;
    n2.out = e2, n2.id = i2, n2.indexCount = 0, n2.vertexCount = 0, n2.offset = s2;
    for (const { line: o2, start: h2 } of r3)
      this._tessellationOptions.initialDistance = h2 % v$1, this._tessellationCallbacks instanceof w$6 && (this._tessellationCallbacks.capType = this._capType, this._tessellationCallbacks.joinType = this._joinType), r$d(o2, this._tessellationOptions, this._tessellationCallbacks), i$b();
  }
}, _$1 = (e2) => (t2) => {
  const s2 = e2.out, n2 = Math.ceil(d$3 * e2._halfWidth), o2 = Math.ceil(d$3 * e2._halfReferenceWidth);
  t2.entry0 = e2.offset + e2.vertexCount++;
  {
    const l2 = m$8(t2.distance, n2), a2 = w$4(Math.round(u$3 * t2.prevNormal.x), Math.round(u$3 * t2.prevNormal.y), Math.round(0 * u$3), Math.round(-1 * u$3)), x2 = w$4(0, 0, 0, e2._bitset);
    s2.vertexBounds(t2.currentVertex.x, t2.currentVertex.y, 0, 0), s2.vertexWrite(m$8(h$3 * t2.currentVertex.x, h$3 * t2.currentVertex.y)), s2.vertexWrite(e2.id), s2.vertexWrite(e2._fillColor), s2.vertexWrite(a2), s2.vertexWrite(l2), s2.vertexWrite(e2._tl), s2.vertexWrite(e2._br), s2.vertexWrite(x2), s2.vertexWrite(m$8(o2, 0)), s2.vertexEnd();
  }
  t2.entry2 = e2.offset + e2.vertexCount++;
  {
    const l2 = m$8(t2.distance, n2), a2 = w$4(Math.round(u$3 * -t2.prevNormal.x), Math.round(u$3 * -t2.prevNormal.y), Math.round(0 * u$3), Math.round(1 * u$3)), x2 = w$4(0, 0, 0, e2._bitset);
    s2.vertexBounds(t2.currentVertex.x, t2.currentVertex.y, 0, 0), s2.vertexWrite(m$8(h$3 * t2.currentVertex.x, h$3 * t2.currentVertex.y)), s2.vertexWrite(e2.id), s2.vertexWrite(e2._fillColor), s2.vertexWrite(a2), s2.vertexWrite(l2), s2.vertexWrite(e2._tl), s2.vertexWrite(e2._br), s2.vertexWrite(x2), s2.vertexWrite(m$8(o2, 0)), s2.vertexEnd();
  }
  t2.exit0 = e2.offset + e2.vertexCount++;
  {
    const l2 = m$8(t2.distance, n2), a2 = w$4(Math.round(u$3 * t2.nextNormal.x), Math.round(u$3 * t2.nextNormal.y), Math.round(0 * u$3), Math.round(-1 * u$3)), x2 = w$4(0, 0, 0, e2._bitset);
    s2.vertexBounds(t2.currentVertex.x, t2.currentVertex.y, 0, 0), s2.vertexWrite(m$8(h$3 * t2.currentVertex.x, h$3 * t2.currentVertex.y)), s2.vertexWrite(e2.id), s2.vertexWrite(e2._fillColor), s2.vertexWrite(a2), s2.vertexWrite(l2), s2.vertexWrite(e2._tl), s2.vertexWrite(e2._br), s2.vertexWrite(x2), s2.vertexWrite(m$8(o2, 0)), s2.vertexEnd();
  }
  t2.exit2 = e2.offset + e2.vertexCount++;
  {
    const l2 = m$8(t2.distance, n2), a2 = w$4(Math.round(u$3 * -t2.nextNormal.x), Math.round(u$3 * -t2.nextNormal.y), Math.round(0 * u$3), Math.round(1 * u$3)), x2 = w$4(0, 0, 0, e2._bitset);
    s2.vertexBounds(t2.currentVertex.x, t2.currentVertex.y, 0, 0), s2.vertexWrite(m$8(h$3 * t2.currentVertex.x, h$3 * t2.currentVertex.y)), s2.vertexWrite(e2.id), s2.vertexWrite(e2._fillColor), s2.vertexWrite(a2), s2.vertexWrite(l2), s2.vertexWrite(e2._tl), s2.vertexWrite(e2._br), s2.vertexWrite(x2), s2.vertexWrite(m$8(o2, 0)), s2.vertexEnd();
  }
}, p$1 = (e2) => (t2) => {
  const r2 = e2.out;
  r2.indexWrite(t2.leftExit0), r2.indexWrite(t2.rightEntry0), r2.indexWrite(t2.leftExit2), r2.indexWrite(t2.rightEntry0), r2.indexWrite(t2.rightEntry2), r2.indexWrite(t2.leftExit2), e2.indexCount += 6;
}, f$1 = (e2) => (t2, s2, n2, o2, l2, a2, x2, v2, c2) => {
  const W2 = m$8(c2, Math.ceil(d$3 * e2._halfWidth)), _2 = w$4(Math.round(u$3 * l2), Math.round(u$3 * a2), Math.round(u$3 * x2), Math.round(u$3 * v2)), p2 = w$4(u$3 * n2, u$3 * o2, 0, e2._bitset), f2 = e2.out;
  return f2.vertexBounds(t2, s2, 1, 1), f2.vertexWrite(m$8(h$3 * t2, h$3 * s2)), f2.vertexWrite(e2.id), f2.vertexWrite(e2._fillColor), f2.vertexWrite(_2), f2.vertexWrite(W2), f2.vertexWrite(e2._tl), f2.vertexWrite(e2._br), f2.vertexWrite(p2), f2.vertexWrite(m$8(Math.ceil(d$3 * e2._halfReferenceWidth), 0)), f2.vertexEnd(), e2.offset + e2.vertexCount++;
}, m$1 = (e2) => (t2, r2, i2) => {
  const s2 = e2.out;
  s2.indexWrite(t2), s2.indexWrite(r2), s2.indexWrite(i2), e2.indexCount += 3;
};
class c$2 extends W(s$1) {
  constructor(i2) {
    super(i2), this._cimLineLayer = i2;
    let e2 = 0;
    r$c(i2.width) || (e2 = 0.5 * u$7(i2.width));
    const s2 = (s3, r2, o2) => r$c(i2.width) ? 0.5 * u$7(i2.width(s3, r2, o2)) : e2;
    if (this._dynamicPropertyMap.set("_halfWidth", s2), r$c(i2.cap) ? this._dynamicPropertyMap.set("_capType", i2.cap) : this._capType = i2.cap, r$c(i2.join) ? this._dynamicPropertyMap.set("_joinType", i2.join) : this._joinType = i2.join, r$c(i2.color)) {
      const t2 = (t3, e3, s3) => {
        const o2 = i2.color(t3, e3, s3);
        return o2 && i$7(o2) || 0;
      };
      this._dynamicPropertyMap.set("_fillColor", t2);
    } else {
      const t2 = i2.color;
      this._fillColor = t2 && i$7(t2) || 0;
    }
    if (r$c(i2.miterLimit)) {
      const t2 = (t3, e3, s3) => u$9(i2.miterLimit(t3, e3, s3));
      this._dynamicPropertyMap.set("_miterLimitCosine", t2);
    } else
      this._miterLimitCosine = u$9(i2.miterLimit);
    this._scaleFactor = i2.scaleFactor || 1, this._isDashed = i2.isDashed, this._effects = i2.effects, this.tessellationProperties._bitset = i2.colorLocked ? 1 : 0, this._materialKey = i2.materialKey, this._initializeTessellator(true);
  }
  static fromCIMLine(t2) {
    return new c$2(t2);
  }
  bindFeature(t2, r2, a2) {
    const l2 = t2.readLegacyFeature();
    this._dynamicPropertyMap.forEach((t3, i2) => {
      this[i2] = t3(l2, r2, a2);
    }), this._halfWidth *= this._scaleFactor;
    const h2 = this._materialCache, n2 = (0, this._cimLineLayer.materialHash)(l2, r2, a2), c2 = h2.get(n2);
    let m2 = null;
    if (c2 && e$2(c2.spriteMosaicItem) && (m2 = c2.spriteMosaicItem), m2) {
      this._hasPattern = true;
      const { rect: t3, width: s2, height: r3 } = m2, o2 = t3.x + Y, a3 = t3.y + Y, l3 = o2 + s2, h3 = a3 + r3;
      this.tessellationProperties._tl = m$8(o2, a3), this.tessellationProperties._br = m$8(l3, h3);
    } else
      this._hasPattern = false, this.tessellationProperties._tl = 0, this.tessellationProperties._br = 0;
    this.tessellationProperties._fillColor = this._fillColor, this.tessellationProperties._halfWidth = this._halfWidth, this.tessellationProperties._halfReferenceWidth = this.tessellationProperties._halfWidth;
    const p2 = b$4.load(this._materialKey);
    m2 && (p2.sdf = m2.sdf, p2.pattern = true, p2.textureBinding = m2.textureBinding), this._materialKey = p2.data;
  }
}
const y$1 = n$7(), d$2 = n$5(), M$1 = n$1.getLogger("esri.views.2d.engine.webgl.WGLDynamicMarkerTemplate");
class u$2 extends W$1(s$1) {
  constructor(e2) {
    if (super(e2), this._cimMarkerLayer = e2, r$c(e2.color)) {
      const t2 = (t3, i2, s2) => i$7(e2.color(t3, i2, s2));
      this._dynamicPropertyMap.set("_fillColor", t2);
    } else
      this._fillColor = i$7(e2.color);
    if (r$c(e2.outlineColor)) {
      const t2 = (t3, i2, s2) => i$7(e2.outlineColor(t3, i2, s2));
      this._dynamicPropertyMap.set("_outlineColor", t2);
    } else
      this._outlineColor = i$7(e2.outlineColor);
    if (r$c(e2.size)) {
      const t2 = (t3, i2, r2) => u$7(e2.size(t3, i2, r2));
      this._dynamicPropertyMap.set("_size", t2);
    } else
      this._size = u$7(e2.size);
    if (r$c(e2.scaleX) ? this._dynamicPropertyMap.set("_scaleX", e2.scaleX) : this._scaleX = e2.scaleX, r$c(e2.offsetX)) {
      const t2 = (t3, i2, r2) => u$7(e2.offsetX(t3, i2, r2));
      this._dynamicPropertyMap.set("xOffset", t2);
    } else
      this.xOffset = u$7(e2.offsetX);
    if (r$c(e2.offsetY)) {
      const t2 = (t3, i2, r2) => u$7(e2.offsetY(t3, i2, r2));
      this._dynamicPropertyMap.set("yOffset", t2);
    } else
      this.yOffset = u$7(e2.offsetY);
    if (r$c(e2.outlineWidth)) {
      const t2 = (t3, i2, r2) => u$7(e2.outlineWidth(t3, i2, r2));
      this._dynamicPropertyMap.set("_outlineWidth", t2);
    } else
      this._outlineWidth = u$7(e2.outlineWidth);
    r$c(e2.rotation) ? this._dynamicPropertyMap.set("_angle", e2.rotation) : this._angle = e2.rotation, this._scaleFactor = c$d(e2.scaleFactor, 1), this._markerPlacement = e2.markerPlacement, this._effects = e2.effects, this._bitSet = (e2.alignment === 1 ? 1 : 0) | (e2.colorLocked ? 1 : 0) << 1 | (e2.scaleSymbolsProportionally ? 1 : 0) << 3, this._materialKey = e2.materialKey;
  }
  static fromCIMMarker(t2) {
    return new u$2(t2);
  }
  bindFeature(t2, e2, o2) {
    const a2 = t2.readLegacyFeature();
    this._dynamicPropertyMap.forEach((t3, i2) => {
      this[i2] = t3(a2, e2, o2);
    });
    const l2 = this._cimMarkerLayer.materialHash, f2 = typeof l2 == "function" ? l2(a2, e2, o2) : l2, _2 = this._materialCache.get(f2);
    if (!_2 || !e$2(_2.spriteMosaicItem) || !_2.spriteMosaicItem)
      return void M$1.error(new s$7("mapview-cim", "Encountered an error when binding feature"));
    const p2 = _2.spriteMosaicItem, u2 = this._cimMarkerLayer.sizeRatio, g2 = p2.width / p2.height * this._scaleX, k2 = this._cimMarkerLayer.rotateClockwise ? this._angle : -this._angle;
    let L2 = this._size, x2 = L2 * g2;
    const P2 = this.xOffset, j2 = this.yOffset;
    this.xOffset *= this._scaleFactor, this.yOffset *= this._scaleFactor;
    const w2 = this._cimMarkerLayer.scaleSymbolsProportionally && this._cimMarkerLayer.frameHeight ? this._size / u$7(this._cimMarkerLayer.frameHeight) : 1, z2 = this._outlineWidth * w2, b2 = u$7(this._cimMarkerLayer.referenceSize);
    let O2 = 0, W2 = 0;
    const C2 = this._cimMarkerLayer.anchorPoint;
    C2 && (this._cimMarkerLayer.isAbsoluteAnchorPoint ? this._size && (O2 = -C2.x / (this._size * g2), W2 = C2.y / this._size) : (O2 = C2.x, W2 = C2.y)), this._sizeOutlineWidth = w$4(Math.round(Math.min(Math.sqrt(128 * x2), 255)), Math.round(Math.min(Math.sqrt(128 * L2), 255)), Math.round(Math.min(Math.sqrt(128 * z2), 255)), Math.round(Math.min(Math.sqrt(128 * b2), 255))), this.angle = k2;
    const X2 = Math.round(64 * u2);
    this._bitestAndDistRatio = m$8(this._bitSet, X2);
    const F2 = p2.rect.x + Y, K2 = p2.rect.y + Y, B2 = F2 + p2.width, R = K2 + p2.height;
    this._texUpperLeft = m$8(F2, K2), this._texUpperRight = m$8(B2, K2), this._texBottomLeft = m$8(F2, R), this._texBottomRight = m$8(B2, R);
    const S2 = w$5.load(this._materialKey);
    S2.sdf = p2.sdf, S2.pattern = true, S2.textureBinding = p2.textureBinding, this._materialKey = S2.data, this._anchorX = 0.5 - (0.5 + O2) * p2.width / p2.width, this._anchorY = 0.5 - (0.5 + W2) * p2.height / p2.height, x2 *= u2, L2 *= u2, x2 *= this._scaleFactor, L2 *= this._scaleFactor, x2 *= p2.rect.width / p2.width, L2 *= p2.rect.height / p2.height, this._computedWidth = x2, this._computedHeight = L2, this._applyTransformation(d$2, y$1), this.xOffset = P2, this.yOffset = j2;
  }
}
function t(t2) {
  const e2 = new Array(t2.length);
  for (let n2 = 0; n2 < t2.length; n2++)
    e2[n2] = t2.charCodeAt(n2);
  return e2;
}
const h$2 = 5, c$1 = 24;
function m(t2, e2, i2, s2) {
  return typeof t2.text == "string" ? t2.text : typeof t2.text == "function" ? t2.text(e2, i2, s2) : "";
}
class _ extends f$5(s$1) {
  constructor(e2) {
    super(e2), this._horizontalAlignment = "center", this._verticalAlignment = "middle", this._textToGlyphs = new Map();
    const i2 = e2.scaleFactor || 1;
    if (this._cimTextLayer = e2, r$c(e2.color)) {
      const t2 = (t3, i3, s2) => i$7(e2.color(t3, i3, s2));
      this._dynamicPropertyMap.set("_color", t2);
    } else
      this._color = i$7(e2.color);
    if (r$c(e2.color)) {
      const t2 = (t3, i3, s2) => i$7(e2.outlineColor(t3, i3, s2));
      this._dynamicPropertyMap.set("_haloColor", t2);
    } else
      this._haloColor = i$7(e2.outlineColor);
    let n2;
    r$c(e2.size) || (n2 = Math.min(Math.round(u$7(e2.size * e2.sizeRatio)), 127));
    const r2 = (i3, s2, o2) => r$c(e2.size) ? Math.min(Math.round(u$7(e2.size(i3, s2, o2) * e2.sizeRatio)), 127) : n2;
    if (this._dynamicPropertyMap.set("_size", r2), r$c(e2.outlineSize)) {
      const i3 = (i4, s2, o2) => Math.min(Math.floor(h$2 * u$7(e2.outlineSize(i4, s2, o2) * e2.sizeRatio)), 127);
      this._dynamicPropertyMap.set("_haloSize", i3);
    } else
      this._haloSize = Math.min(Math.floor(h$2 * u$7(e2.outlineSize * e2.sizeRatio)), 127);
    let l2;
    r$c(e2.offsetX) || (l2 = Math.round(u$7(e2.offsetX * e2.sizeRatio)));
    const c2 = (i3, s2, o2) => r$c(e2.offsetX) ? Math.round(u$7(e2.offsetX(i3, s2, o2) * e2.sizeRatio)) : l2;
    let m2;
    this._dynamicPropertyMap.set("_xOffset", c2), r$c(e2.offsetY) || (m2 = Math.round(u$7(e2.offsetY * e2.sizeRatio)));
    const _2 = (i3, s2, o2) => r$c(e2.offsetY) ? Math.round(u$7(e2.offsetY(i3, s2, o2) * e2.sizeRatio)) : m2;
    this._dynamicPropertyMap.set("_yOffset", _2), r$c(e2.angle) ? this._dynamicPropertyMap.set("_angle", e2.angle) : this._angle = e2.angle, r$c(e2.horizontalAlignment) ? this._dynamicPropertyMap.set("_horizontalAlignment", e2.horizontalAlignment) : this._horizontalAlignment = e2.horizontalAlignment, r$c(e2.verticalAlignment) ? this._dynamicPropertyMap.set("_verticalAlignment", e2.verticalAlignment) : this._verticalAlignment = e2.verticalAlignment, this._scaleFactor = i2, r$c(e2.text) ? this._dynamicPropertyMap.set("_text", e2.text) : this._text = e2.text;
    const f2 = Math.min(Math.round(u$7(e2.referenceSize * e2.sizeRatio)), 127);
    this._referenceSize = Math.round(Math.sqrt(256 * f2)), this._materialKey = e2.materialKey;
    const y2 = F.load(this._materialKey);
    y2.sdf = true, this._bitset = (e2.alignment === 1 ? 1 : 0) | (e2.colorLocked ? 1 : 0) << 1, this._materialKey = y2.data, this._decoration = "none", this._lineHeight = 1, this._lineWidth = 512, this._textPlacement = e2.markerPlacement, this._effects = e2.effects, this._isCIM = true;
  }
  static fromCIMText(t2) {
    return new _(t2);
  }
  analyze(t$12, e2, i2, s2) {
    return __async(this, null, function* () {
      const o2 = e2.readLegacyFeature(), a2 = m(this._cimTextLayer, o2, i2, s2), n2 = yield t$12.getMosaicItem(this._cimTextLayer.cim, t(a2));
      return this._textToGlyphs.set(a2, n2.glyphMosaicItems), n2;
    });
  }
  bindFeature(t2, s2, o2) {
    const a2 = t2.readLegacyFeature();
    if (this._dynamicPropertyMap.forEach((t3, e2) => {
      this[e2] = t3(a2, s2, o2);
    }), !this._text || this._text.length === 0)
      return void (this._shapingInfo = null);
    this._size *= this._scaleFactor, this._scale = this._size / c$1, this._xOffset *= this._scaleFactor, this._yOffset *= this._scaleFactor, this._xAlignD = n$3(this._horizontalAlignment || "center"), this._yAlignD = r$a(this._verticalAlignment || "baseline");
    const n2 = this._textToGlyphs.get(this._text);
    this.bindTextInfo(n2, false);
  }
}
const h$1 = 128;
class u$1 extends y$2(r$3) {
  constructor(t2, e2, r2, l2, o2, s2, n2, c2, f2) {
    super(), this._effects = f2;
    const a2 = C$1.load(t2);
    e2 && (a2.sdf = e2.sdf, a2.pattern = true, a2.textureBinding = e2.textureBinding), this.fillColor = r2, this.tl = l2, this.br = o2, this.aux1 = s2, this.aux2 = n2, this.aux3 = c2, this._materialKey = a2.data;
  }
  static fromCIMFill(l2, i2) {
    const n2 = l2.color, a2 = n2 && i$7(n2) || 0, m2 = l2.materialKey;
    if (!i2) {
      const t2 = w$4(0, 0, 0, l2.colorLocked ? 1 : 0);
      return new u$1(m2, null, a2, 0, 0, 0, 0, t2, l2.effects);
    }
    const { rect: d2, width: p2, height: y2 } = i2, x2 = d2.x + Y, j2 = d2.y + Y, w2 = x2 + p2, g2 = j2 + y2;
    let K2 = u$8(y2);
    K2 > 255 ? K2 = 255 : K2 <= 0 && (K2 = u$8(g2 - j2));
    let F2 = u$8(p2 || 0);
    F2 > 255 ? F2 = 255 : F2 <= 0 && (F2 = u$8(w2 - x2));
    let L2 = u$7(l2.offsetX || 0) + h$1;
    L2 > 255 && (L2 = 255);
    let B2 = u$7(-l2.offsetY || 0) + h$1;
    B2 > 255 && (B2 = 255);
    const G2 = l2.scaleX || 1, M2 = 1, S2 = m$8(x2, j2), U = m$8(w2, g2), b2 = w$4(F2, K2, L2, B2), k2 = m$8(h$1 * G2, h$1 * M2), C2 = w$4(0, 0, M$4(l2.angle), l2.colorLocked ? 1 : 0);
    return new u$1(m2, i2, a2, S2, U, b2, k2, C2, l2.effects);
  }
  static fromSimpleFill(e2, l2, i2 = false) {
    const { color: c2 } = e2, f2 = c2 && e2.style !== "esriSFSNull" && f$8(c2) || 0, a2 = w$4(0, 0, 0, i2 ? 255 : 0), m2 = e2.materialKey;
    if (!l2)
      return new u$1(m2, null, f2, 0, 0, 0, 0, a2, null);
    const { rect: d2, width: p2, height: y2 } = l2, x2 = d2.x + Y, j2 = d2.y + Y, w2 = x2 + p2, g2 = j2 + y2, K2 = m$8(x2, j2), F2 = m$8(w2, g2), L2 = w$4(u$8(w2 - x2), u$8(g2 - j2), 0, 0), B2 = m$8(h$1, h$1);
    return new u$1(m2, l2, f2, K2, F2, L2, B2, a2, null);
  }
  static fromPictureFill(i2, n2, c2 = false) {
    const f2 = i$9, { rect: a2, width: m2, height: d2 } = n2, p2 = a2.x + Y, y2 = a2.y + Y, x2 = p2 + m2, j2 = y2 + d2, w2 = m$8(p2, y2), g2 = m$8(x2, j2);
    let K2 = u$8(u$7(i2.width));
    K2 > 255 && (K2 = 255);
    let F2 = u$8(u$7(i2.height));
    F2 > 255 && (F2 = 255);
    let L2 = u$7(i2.xoffset) + h$1;
    L2 > 255 && (L2 = 255);
    let B2 = u$7(-i2.yoffset) + h$1;
    B2 > 255 && (B2 = 255);
    const G2 = w$4(K2, F2, L2, B2), M2 = m$8(h$1 * i2.xscale, h$1 * i2.yscale), S2 = w$4(0, 0, 0, c2 ? 255 : 0), U = i2.materialKey;
    return new u$1(U, n2, f2, w2, g2, G2, M2, S2, null);
  }
}
const f = n$1.getLogger("esri.views.2d.engine.webgl.WGLLineTemplate");
class p extends W(r$3) {
  constructor(e2, t2, i2, r2, o2, l2, n2, a2, c2, h2, f2, p2, d2, u2, L2, y2) {
    super();
    const _2 = b$4.load(e2);
    t2 && (_2.sdf = t2.sdf, _2.pattern = true, _2.textureBinding = t2.textureBinding), this._capType = r2, this._joinType = o2, this._miterLimitCosine = u$9(l2), this.tessellationProperties._fillColor = n2, this.tessellationProperties._tl = a2, this.tessellationProperties._br = c2, this._hasPattern = h2, this._isDashed = f2, this._joinOnUTurn = L2, this._isColorLocked = p2, this._zOrder = u2, this._effects = y2, this._materialKey = _2.data, this.tessellationProperties._bitset = p2 ? 1 : 0, this.tessellationProperties._halfWidth = 0.5 * i2, this.tessellationProperties._halfReferenceWidth = 0.5 * d2, this._initializeTessellator(false);
  }
  static fromCIMLine(e2, s2, o2) {
    const n2 = e2.color, a2 = e2.scaleFactor || 1, m2 = e2.isDashed;
    let c2 = e2.cap;
    m2 && c2 === 1 && (c2 = 2);
    const h2 = e2.join, f2 = u$7(e2.width) * a2, d2 = u$7(e2.referenceWidth), u2 = u$7(e2.miterLimit), L2 = n2 && i$7(n2) || 0;
    if (!s2)
      return new p(e2.materialKey, s2, f2, c2, h2, u2, L2, 0, 0, false, m2, e2.colorLocked, d2, e2.zOrder, o2, e2.effects);
    const { rect: y2, width: _2, height: j2 } = s2, S2 = y2.x + Y, g2 = y2.y + Y, w2 = S2 + _2, P2 = g2 + j2, x2 = m$8(S2, g2), K2 = m$8(w2, P2);
    return new p(e2.materialKey, s2, f2, c2, h2, u2, L2, x2, K2, true, m2, e2.colorLocked, d2, e2.zOrder, o2, e2.effects);
  }
  static fromSimpleLine(e2, s2, l2) {
    const { color: m2 } = e2, c2 = e2.style !== "esriSLSSolid" && e2.style !== "esriSLSNull", h2 = K(e2.cap || "round", c2), f2 = P$1(e2.join || "round");
    let d2 = m2 && e2.style !== "esriSLSNull" && f$8(m2) || 0;
    e2.style === "esriSLSNull" && (d2 = 0);
    const u2 = u$7(e2.width), L2 = e2.miterLimit;
    if (!s2)
      return new p(e2.materialKey, s2, u2, h2, f2, L2, d2, 0, 0, false, c2, false, u2, 0, l2, null);
    const { rect: y2, width: _2, height: j2 } = s2, S2 = y2.x + Y, g2 = y2.y + Y, w2 = S2 + _2, P2 = g2 + j2, x2 = m$8(S2, g2), K$1 = m$8(w2, P2);
    return new p(e2.materialKey, s2, u2, h2, f2, L2, d2, x2, K$1, true, c2, false, u2, 0, l2, null);
  }
  static fromPictureLineSymbol(e2, t2, i2, r2) {
    return f.error("PictureLineSymbol support does not exist!"), null;
  }
}
class r$1 {
  constructor() {
    this._resolver = null;
  }
  isHeld() {
    return !!this._resolver;
  }
  acquire() {
    return __async(this, null, function* () {
      if (!this._resolver)
        return this._resolver = B$1(), Promise.resolve();
      yield this._resolver.promise, yield this.acquire();
    });
  }
  release() {
    const e2 = this._resolver;
    this._resolver = null, e2.resolve();
  }
}
function s(e2, r2, s2) {
  return __async(this, null, function* () {
    try {
      yield e2.acquire(), yield r2(s2), e2.release();
    } catch (t2) {
      throw e2.release(), t2;
    }
  });
}
const I$1 = n$1.getLogger("esri.views.2d.engine.webgl.mesh.templates.WGLTemplateStore"), d$1 = new Array();
function g$1(e2, t2) {
  const r2 = e2.length;
  return e2.push(null), t2.then((t3) => e2[r2] = t3), e2;
}
function S$1(e2) {
  return !!(1 & e2);
}
function w$1(e2) {
  return e2.name === "worker:port-closed";
}
class k {
  constructor(e2, t2) {
    this._idCounter = 1, this._templateIdCounter = 1, this._idToTemplateGroup = new Map(), this._symbolToTemplate = new Map(), this._fetchQueue = [], this._idToResolver = new Map(), this._cimTemplateCache = new Map(), this._cimAnalyses = [], this._lock = new r$1(), this._fetchResource = e2, this._joinOnUTurn = t2;
  }
  get _markerError() {
    return this._errorTemplates.marker[0];
  }
  get _fillError() {
    return this._errorTemplates.fill[0];
  }
  get _lineError() {
    return this._errorTemplates.line[0];
  }
  get _textError() {
    return this._errorTemplates.line[0];
  }
  createTemplateGroup(e2, t2) {
    this._initErrorTemplates();
    const r2 = e2.hash;
    if (this._symbolToTemplate.has(r2))
      return this._symbolToTemplate.get(r2);
    const s2 = new Array();
    t2 && this._createMeshTemplates(s2, t2, true), this._createMeshTemplates(s2, e2, false);
    const i2 = this._createGroupId(e2.type === "expanded-cim");
    return this._idToTemplateGroup.set(i2, s2), this._symbolToTemplate.set(r2, i2), i2;
  }
  getTemplateGroup(e2) {
    return this._idToTemplateGroup.has(e2) ? this._idToTemplateGroup.get(e2) : d$1;
  }
  getDynamicTemplateGroup(e2) {
    return this._idToTemplateGroup.has(e2) ? (S$1(e2) || I$1.error("mapview-template-store", `Id ${e2} does not refer to a dynamic template`), this._idToTemplateGroup.get(e2)) : d$1;
  }
  getMosaicItem(e2, t2) {
    const r2 = this._createTemplateId(), s2 = new Promise((e3) => this._idToResolver.set(r2, e3));
    return this._fetchQueue.push({ symbol: e2, id: r2, glyphIds: t2 }), s2;
  }
  finalize(e2) {
    return this._fetchQueue.length || this._lock.isHeld() ? s(this._lock, this._fetchAllQueuedResources.bind(this), e2) : Promise.resolve();
  }
  _initErrorTemplates() {
    this._errorTemplates || (this._errorTemplates = { fill: this._createMeshTemplates([], S$2(j$2), false), marker: this._createMeshTemplates([], S$2(N), false), line: this._createMeshTemplates([], S$2(O$1), false) });
  }
  _fetchAllQueuedResources(e2) {
    if (!this._fetchQueue.length)
      return Promise.resolve();
    const s2 = this._fetchQueue, i2 = this._cimAnalyses;
    return this._fetchQueue = [], this._cimAnalyses = [], Promise.all(i2).then(() => this._fetchResource(s2, e2).then((e3) => {
      for (const { id: t2, mosaicItem: r2 } of e3) {
        this._idToResolver.get(t2)(r2), this._idToResolver.delete(t2);
      }
    })).catch((e3) => {
      g$4(e3) ? this._fetchQueue = this._fetchQueue.concat(s2) : w$1(e3) || I$1.error(new s$7("mapview-template-store", "Unable to fetch requested texture resources", e3));
    });
  }
  _createGroupId(e2) {
    return this._idCounter++ << 1 | (e2 ? 1 : 0);
  }
  _createTemplateId() {
    return this._templateIdCounter++;
  }
  _createSMS(e2) {
    return __async(this, null, function* () {
      const { spriteMosaicItem: t2 } = yield this.getMosaicItem(e2);
      return e$2(t2, I$1) ? d$6.fromSimpleMarker(e2, t2) : this._markerError;
    });
  }
  _createPMS(e2) {
    return __async(this, null, function* () {
      const { spriteMosaicItem: t2 } = yield this.getMosaicItem(e2);
      return e$2(t2, I$1) ? d$6.fromPictureMarker(e2, t2) : this._markerError;
    });
  }
  _createSFS(e2, t2) {
    return __async(this, null, function* () {
      const { spriteMosaicItem: r2 } = yield this.getMosaicItem(e2);
      return e$2(r2, I$1) ? u$1.fromSimpleFill(e2, r2, t2) : this._fillError;
    });
  }
  _createPFS(e2, t2) {
    return __async(this, null, function* () {
      const { spriteMosaicItem: r2 } = yield this.getMosaicItem(e2);
      return e$2(r2, I$1) ? u$1.fromPictureFill(e2, r2, t2) : this._fillError;
    });
  }
  _createSLS(e2, t2) {
    return __async(this, null, function* () {
      const { spriteMosaicItem: r2 } = yield this.getMosaicItem(e2);
      return e$2(r2, I$1) ? p.fromSimpleLine(e2, r2, this._joinOnUTurn) : this._lineError;
    });
  }
  _createLMS(e2) {
    return __async(this, null, function* () {
      const { spriteMosaicItem: t2 } = yield this.getMosaicItem(e2);
      return e$2(t2, I$1) ? d$6.fromLineSymbolMarker(e2, t2) : this._markerError;
    });
  }
  _createTS(e2) {
    return __async(this, null, function* () {
      const { glyphMosaicItems: t2 } = yield this.getMosaicItem(e2);
      return _$2.fromText(e2, t2);
    });
  }
  _createCIMText(e2) {
    return __async(this, null, function* () {
      const { glyphMosaicItems: t$12 } = yield this.getMosaicItem(e2.cim, t(e2.text));
      return e$2(t$12, I$1) ? _$2.fromCIMText(e2, t$12) : this._textError;
    });
  }
  _createCIMFill(e2) {
    return __async(this, null, function* () {
      const { spriteMosaicItem: t2 } = yield this.getMosaicItem(e2.cim);
      return e$2(t2, I$1) ? u$1.fromCIMFill(e2, t2) : this._fillError;
    });
  }
  _createCIMLine(e2) {
    return __async(this, null, function* () {
      const { spriteMosaicItem: t2 } = yield this.getMosaicItem(e2.cim);
      return e$2(t2, I$1) ? p.fromCIMLine(e2, t2, this._joinOnUTurn) : this._lineError;
    });
  }
  _createCIMMarker(e2) {
    return __async(this, null, function* () {
      const { spriteMosaicItem: t2 } = yield this.getMosaicItem(e2.cim);
      return e$2(t2, I$1) ? d$6.fromCIMMarker(e2, t2) : this._markerError;
    });
  }
  _createCIM(e2) {
    return __async(this, null, function* () {
      const t2 = e2.templateHash;
      if (this._cimTemplateCache.has(t2))
        return this._cimTemplateCache.get(t2);
      const r2 = __spreadProps(__spreadValues({}, e2), { cim: __spreadProps(__spreadValues({}, e2.cim), { mosaicHash: e2.materialHash }) });
      let s2;
      switch (r2.type) {
        case "marker":
          s2 = this._createCIMMarker(r2);
          break;
        case "line":
          s2 = this._createCIMLine(r2);
          break;
        case "fill":
          s2 = this._createCIMFill(r2);
          break;
        case "text":
          s2 = this._createCIMText(r2);
      }
      return s2.then((e3) => this._cimTemplateCache.set(t2, e3)), s2;
    });
  }
  _createDynamicCIM(e2) {
    const t2 = e2.templateHash;
    if (this._cimTemplateCache.has(t2))
      return this._cimTemplateCache.get(t2);
    let r2;
    switch (e2.type) {
      case "marker":
        r2 = u$2.fromCIMMarker(e2);
        break;
      case "line":
        r2 = c$2.fromCIMLine(e2);
        break;
      case "fill":
        r2 = p$2.fromCIMFill(e2);
        break;
      case "text":
        r2 = _.fromCIMText(e2);
    }
    return this._cimTemplateCache.set(t2, r2), r2;
  }
  _createPrimitiveMeshTemplates(e2, t2, r2) {
    switch (t2.type) {
      case "esriSMS":
        return g$1(e2, this._createSMS(t2));
      case "esriPMS":
        return g$1(e2, this._createPMS(t2));
      case "esriSFS":
        return g$1(e2, this._createSFS(t2, r2));
      case "line-marker":
        return g$1(e2, this._createLMS(t2));
      case "esriPFS":
        return g$1(e2, this._createPFS(t2, r2));
      case "esriSLS":
        return g$1(e2, this._createSLS(t2, false));
      case "esriTS":
        return g$1(e2, this._createTS(t2));
      default:
        return I$1.error("Unable to create mesh template for unknown symbol type {: $ }{symbol.type}"), e2;
    }
  }
  _createMeshTemplates(e2, t2, r2) {
    if (t2.type.indexOf("3d") !== -1)
      return I$1.error("3D symbols are not supported with MapView"), e2;
    if (t2.type === "expanded-cim") {
      for (const r3 of t2.layers)
        typeof r3.materialHash == "function" ? e2.push(this._createDynamicCIM(r3)) : g$1(e2, this._createCIM(r3));
      return e2;
    }
    if (t2.type === "composite-symbol") {
      for (const s2 of t2.layers)
        this._createPrimitiveMeshTemplates(e2, s2, r2);
      return e2;
    }
    return t2.type === "cim" || t2.type === "label" || t2.type === "web-style" ? e2 : this._createPrimitiveMeshTemplates(e2, t2, r2);
  }
}
function r(t2, e2) {
  return t2[e2 + 1];
}
function h(t2) {
  return t2.length - 1;
}
function a(t2) {
  let e2 = 0;
  for (let s2 = 0; s2 < h(t2); s2++)
    e2 += d(t2, s2);
  return e2;
}
function d(t2, e2, s2 = 1) {
  const [n2, i2] = r(t2, e2);
  return Math.sqrt(n2 * n2 + i2 * i2) * s2;
}
class c {
  constructor(t2, e2, s2, n2, i2) {
    this._segments = t2, this._index = e2, this._distance = s2, this._xStart = n2, this._yStart = i2, this._done = false;
  }
  static create(t2) {
    return new c(t2, 0, 0, t2[0][0], t2[0][1]);
  }
  clone() {
    return new c(this._segments, this._index, this._distance, this.xStart, this.yStart);
  }
  equals(t2) {
    return this._index === t2._index || t2._index === this._index - 1 && (this._distance === 0 || t2._distance === 1) || t2._index === this._index + 1 && (this._distance === 1 || t2._distance === 0);
  }
  leq(t2) {
    return this._index < t2._index || this._index === t2._index && this._distance <= t2._distance;
  }
  geq(t2) {
    return this._index > t2._index || this._index === t2._index && this._distance >= t2._distance;
  }
  get _segment() {
    return this._segments[this._index + 1];
  }
  get angle() {
    const t2 = this.dy, e2 = (0 * t2 + -1 * -this.dx) / (1 * this.length);
    let s2 = Math.acos(e2);
    return t2 > 0 && (s2 = 2 * Math.PI - s2), s2;
  }
  get xStart() {
    return this._xStart;
  }
  get yStart() {
    return this._yStart;
  }
  get x() {
    return this.xStart + this.distance * this.dx;
  }
  get y() {
    return this.yStart + this.distance * this.dy;
  }
  get dx() {
    return this._segment[0];
  }
  get dy() {
    return this._segment[1];
  }
  get xMidpoint() {
    return this.xStart + 0.5 * this.dx;
  }
  get yMidpoint() {
    return this.yStart + 0.5 * this.dy;
  }
  get xEnd() {
    return this.xStart + this.dx;
  }
  get yEnd() {
    return this.yStart + this.dy;
  }
  get length() {
    const { dx: t2, dy: e2 } = this;
    return Math.sqrt(t2 * t2 + e2 * e2);
  }
  get remainingLength() {
    return this.length * (1 - this._distance);
  }
  get backwardLength() {
    return this.length * this._distance;
  }
  get distance() {
    return this._distance;
  }
  get done() {
    return this._done;
  }
  hasPrev() {
    return this._index - 1 >= 0;
  }
  hasNext() {
    return this._index + 1 < h(this._segments);
  }
  next() {
    return this.hasNext() ? (this._xStart += this.dx, this._yStart += this.dy, this._distance = 0, this._index += 1, this) : null;
  }
  prev() {
    return this.hasPrev() ? (this._index -= 1, this._xStart -= this.dx, this._yStart -= this.dy, this._distance = 1, this) : (this._done = true, null);
  }
  _seekBackwards(t2, e2) {
    const s2 = this.backwardLength;
    if (t2 <= s2)
      return this._distance = (s2 - t2) / this.length, this;
    let n2 = this.backwardLength;
    for (; this.prev(); ) {
      if (n2 + this.length > t2)
        return this._seekBackwards(t2 - n2);
      n2 += this.length;
    }
    return this._distance = 0, e2 ? this : null;
  }
  seek(t2, e2 = false) {
    if (t2 < 0)
      return this._seekBackwards(Math.abs(t2), e2);
    if (t2 <= this.remainingLength)
      return this._distance = (this.backwardLength + t2) / this.length, this;
    let s2 = this.remainingLength;
    for (; this.next(); ) {
      if (s2 + this.length > t2)
        return this.seek(t2 - s2, e2);
      s2 += this.length;
    }
    return this._distance = 1, e2 ? this : null;
  }
}
function u(t2, e2, s2) {
  const n2 = a(t2), i2 = c.create(t2), r2 = n2 / 2, h2 = (n2 - e2) / 2, d2 = Math.floor(h2 / e2), u2 = r2 - d2 * e2;
  i2.seek(u2);
  for (let a2 = -d2; a2 <= d2; a2++)
    i2.x < 512 && i2.x >= 0 && i2.y < 512 && i2.y >= 0 && s2(i2.clone(), a2, r2 + a2 * e2, n2), i2.seek(e2);
}
function l(t2, e2) {
  const s2 = e2;
  for (let n2 = 0; n2 < t2.length; n2++) {
    let e3 = t2[n2];
    const i2 = [];
    i2.push(e3[0]);
    for (let t3 = 1; t3 < e3.length; t3++) {
      let [s3, n3] = i2[t3 - 1];
      s3 += e3[t3][0], n3 += e3[t3][1], i2.push([s3, n3]);
    }
    g(i2, s2);
    const r2 = [];
    r2.push(i2[0]);
    for (let t3 = 1; t3 < i2.length; t3++) {
      const [e4, s3] = i2[t3 - 1], [n3, h2] = i2[t3], a2 = Math.round(n3 - e4), d2 = Math.round(h2 - s3);
      r2.push([a2, d2]);
    }
    t2[n2] = r2, e3 = r2;
  }
  return t2;
}
function g(t2, e2) {
  const r2 = 1e-6;
  if (e2 <= 0)
    return;
  const h2 = t2.length;
  if (h2 < 3)
    return;
  const a2 = [];
  let d2 = 0;
  a2.push(0);
  for (let n2 = 1; n2 < h2; n2++)
    d2 += o$6(t2[n2], t2[n2 - 1]), a2.push(d2);
  e2 = Math.min(e2, 0.2 * d2);
  const c2 = [];
  c2.push(t2[0][0]), c2.push(t2[0][1]);
  const u2 = t2[h2 - 1][0], o2 = t2[h2 - 1][1], _2 = n$9([0, 0], t2[0], t2[1]);
  i$c(_2), t2[0][0] += e2 * _2[0], t2[0][1] += e2 * _2[1], n$9(_2, t2[h2 - 1], t2[h2 - 2]), i$c(_2), t2[h2 - 1][0] += e2 * _2[0], t2[h2 - 1][1] += e2 * _2[1];
  for (let s2 = 1; s2 < h2; s2++)
    a2[s2] += e2;
  a2[h2 - 1] += e2;
  const l2 = 0.5 * e2;
  for (let s2 = 1; s2 < h2 - 1; s2++) {
    let n2 = 0, i2 = 0, d3 = 0;
    for (let h3 = s2 - 1; h3 >= 0 && !(a2[h3 + 1] < a2[s2] - l2); h3--) {
      const c3 = l2 + a2[h3 + 1] - a2[s2], u3 = a2[h3 + 1] - a2[h3], o3 = a2[s2] - a2[h3] < l2 ? 1 : c3 / u3;
      if (Math.abs(o3) < r2)
        break;
      const _3 = o3 * o3, g2 = o3 * c3 - 0.5 * _3 * u3, x2 = o3 * u3 / e2, f2 = t2[h3 + 1], y2 = t2[h3][0] - f2[0], p2 = t2[h3][1] - f2[1];
      n2 += x2 / g2 * (f2[0] * o3 * c3 + 0.5 * _3 * (c3 * y2 - u3 * f2[0]) - _3 * o3 * u3 * y2 / 3), i2 += x2 / g2 * (f2[1] * o3 * c3 + 0.5 * _3 * (c3 * p2 - u3 * f2[1]) - _3 * o3 * u3 * p2 / 3), d3 += x2;
    }
    for (let c3 = s2 + 1; c3 < h2 && !(a2[c3 - 1] > a2[s2] + l2); c3++) {
      const h3 = l2 - a2[c3 - 1] + a2[s2], u3 = a2[c3] - a2[c3 - 1], o3 = a2[c3] - a2[s2] < l2 ? 1 : h3 / u3;
      if (Math.abs(o3) < r2)
        break;
      const _3 = o3 * o3, g2 = o3 * h3 - 0.5 * _3 * u3, x2 = o3 * u3 / e2, f2 = t2[c3 - 1], y2 = t2[c3][0] - f2[0], p2 = t2[c3][1] - f2[1];
      n2 += x2 / g2 * (f2[0] * o3 * h3 + 0.5 * _3 * (h3 * y2 - u3 * f2[0]) - _3 * o3 * u3 * y2 / 3), i2 += x2 / g2 * (f2[1] * o3 * h3 + 0.5 * _3 * (h3 * p2 - u3 * f2[1]) - _3 * o3 * u3 * p2 / 3), d3 += x2;
    }
    c2.push(n2 / d3), c2.push(i2 / d3);
  }
  c2.push(u2), c2.push(o2);
  for (let s2 = 0, n2 = 0; s2 < h2; s2++)
    t2[s2][0] = c2[n2++], t2[s2][1] = c2[n2++];
}
const y = n$1.getLogger("esri.views.2d.engine.webgl.WGLLabelTemplate"), b = (e2, t2 = "mapview-labeling") => y.error(new s$7(t2, e2)), L = 1, S = 128, v = 0, w = 16, P = 4;
function M(e2, t2) {
  const i2 = !!e2.minScale && t2.scaleToZoom(e2.minScale) || 0;
  return e$7(i2, 0, 25.5);
}
function Z(e2, t2) {
  const i2 = !!e2.maxScale && t2.scaleToZoom(e2.maxScale) || 255;
  return e$7(i2, 0, 25.5);
}
function z(e2) {
  const t2 = new Map();
  return (i2) => (t2.has(i2) || t2.set(i2, e2(i2)), t2.get(i2));
}
const G = z((e2) => {
  let t2 = 0;
  if (e2 === 0)
    return 1 / 0;
  for (; !(e2 % 2); )
    t2++, e2 /= 2;
  return t2;
}), O = (e2) => Math.floor(127 * e2 + 127), j = (e2) => Math.floor(10 * e2), A = (e2) => Math.round(e2 * (254 / 360));
class I extends _$2 {
  constructor(e2, t2, i2, o2) {
    super(e2, i2.font.size, i2.haloSize || 0, i2.color && f$8(i2.color) || 0, i2.haloColor && f$8(i2.haloColor) || 0, i2.horizontalAlignment, i2.verticalAlignment, e$6(t2.labelPlacement) ? 1 : 0, i2.font.decoration, false, i2.angle || 0, i2.xoffset, i2.yoffset, i2.lineWidth, i2.lineHeight, null, null), this._outLineLabelAngle = 0, this._refPlacementPadding = 0, this._refPlacementDirX = 0, this._refPlacementDirY = 0, this._refOffsetX = 0, this._refOffsetY = 0, this._zoomLevel = 0, this.geometryType = E$1.LABEL;
    const n2 = M(t2, o2), r2 = Z(t2, o2), l2 = t2.labelPlacement, [m2, c2] = a$4(l2);
    this._xAlignD = m2, this._yAlignD = c2, this._minZoom = n2, this._maxZoom = r2, this._refPlacementPadding = u$7(i2.haloSize) + j$3;
    const d2 = N$1.load(e2);
    d2.sdf = true, this._materialKey = d2.data;
  }
  static fromLabelClass(e2, t2) {
    if (e2.labelPlacement === "center-along") {
      const t3 = e2.symbol;
      t3.xoffset = 0, t3.yoffset = 0, t3.angle = 0, t3.font.decoration = "none";
    }
    return new I(e2.materialKey, e2, e2.symbol, t2);
  }
  get _shapedBox() {
    return e$5(this._shapingInfo).bounds;
  }
  setZoomLevel(e2) {
    this._zoomLevel = e2;
  }
  bindReferenceTemplate(e2) {
    let i2 = c$e(this._xAlignD), o2 = o$7(this._yAlignD);
    if (this._refOffsetX = 0, this._refOffsetY = 0, t$4(e2))
      return void (this._refSymbolAndPlacementOffset = w$4(0, 0, O(i2), O(o2)));
    if (e2.boundsType === "circle" && (i2 || o2)) {
      const e3 = Math.sqrt(i2 * i2 + o2 * o2);
      i2 /= e3, o2 /= e3;
    }
    const n2 = Math.max(e2.height, e2.width), r2 = this._refPlacementPadding * P;
    this._refSymbolAndPlacementOffset = w$4(r2, n2, O(i2), O(o2)), this._referenceSize = n2, this._refPlacementDirX = i2, this._refPlacementDirY = o2, this._refOffsetX = e2.xOffset, this._refOffsetY = e2.yOffset;
  }
  _write(e2, i2) {
    if (t$4(this._shapingInfo))
      return;
    const o2 = this._shapingInfo, n2 = i2.getDisplayId(), r2 = i2.geometryType === "esriGeometryPolygon" ? i2.readLegacyCentroid() : i2.readLegacyGeometry();
    if (r2)
      switch (this.current = { out: e2, inId: n2, inShaping: o2, zoomLevel: this._zoomLevel }, i2.geometryType) {
        case "esriGeometryPolyline":
          this._placeLineLabels(r2);
          break;
        case "esriGeometryPoint":
        case "esriGeometryPolygon":
          this._placePointLabels(r2);
          break;
        default:
          b("mapview-labeling", `Geometry of type ${i2.geometryType} is not supported`);
      }
  }
  _isVisible(e2, t2) {
    const i2 = j(this.current.zoomLevel);
    return j(e2) <= i2 && i2 <= j(t2);
  }
  _placePointLabels(e2) {
    const { out: t2, inId: i2, inShaping: o2 } = this.current;
    this._writeGlyphs(t2, i2, e2, o2);
  }
  _placeLineLabels(e2) {
    const t2 = l(e2.paths, this.current.inShaping.bounds.width), i2 = this._placeSubdivGlyphs.bind(this), o2 = (this._shapedBox.width + S) / (1 << L);
    for (const n2 of t2)
      u(n2, o2, i2);
  }
  _placeSubdivGlyphs(e2, t2, i2, o2) {
    const n2 = G(t2), s2 = this._shapedBox.width / (1 << L), a2 = w / (1 << L), h2 = Math.min(i2, o2 - i2), l2 = h$8(h2 / (a2 + s2 / 2)), m2 = t2 === 0 ? l2 : Math.min(n2, l2), c2 = Math.max(this._minZoom, this.current.zoomLevel + L - m2), f2 = this.current.zoomLevel - c2, _2 = this._shapedBox.width / 2 * __pow(2, f2);
    this.current.inShaping.isMultiline ? t2 === 0 && this._placeStraight(e2, c2) : this._placeCurved(e2, c2, _2);
  }
  _placeStraight(e2, t2) {
    const { out: i2, inId: o2, inShaping: n2 } = this.current;
    this._writeGlyphs(i2, o2, e2, n2, t2);
  }
  _placeCurved(e2, t2, i2) {
    const { out: o2, inId: n2 } = this.current;
    o2.metricStart(n2, t2, e2.x, e2.y, 0, 0, 0, 0);
    const r2 = e2.clone(), s2 = e2.angle * (180 / Math.PI) % 360, a2 = (e2.angle * (180 / Math.PI) + 180) % 360;
    this._outLineLabelAngle = A(s2), this._placeFirst(r2, t2, 1), this._placeBack(e2, r2, t2, i2, 1), this._placeForward(e2, r2, t2, i2, 1), this._outLineLabelAngle = A(a2), this._placeFirst(r2, t2, 0), this._placeBack(e2, r2, t2, i2, 0), this._placeForward(e2, r2, t2, i2, 0), o2.metricEnd();
  }
  _placeBack(e2, t2, i2, o2, n2) {
    const r2 = e2.clone();
    let s2 = e2.backwardLength + v;
    for (; r2.prev() && !(s2 >= o2); )
      this._placeOnSegment(r2, t2, s2, i2, -1, n2), s2 += r2.length + v;
  }
  _placeForward(e2, t2, i2, o2, n2) {
    const r2 = e2.clone();
    let s2 = e2.remainingLength + v;
    for (; r2.next() && !(s2 >= o2); )
      this._placeOnSegment(r2, t2, s2, i2, 1, n2), s2 += r2.length + v;
  }
  _placeFirst(e2, t2, i2) {
    const o2 = e2, n2 = this.current.inShaping, s2 = n2.glyphs, a2 = this.current.zoomLevel, { out: h2, inId: l2 } = this.current;
    for (const m2 of s2) {
      const s3 = m2.x > n2.bounds.x ? i2 : 1 - i2, c2 = s3 * e2.remainingLength + (1 - s3) * e2.backwardLength, f2 = Math.abs(m2.x + m2.width / 2 - n2.bounds.x), _2 = Math.max(0, a2 + h$8(f2 / (c2 + v))), p2 = Math.max(t2, _2);
      if (m2.maxZoom = 25, m2.angle = e2.angle + (1 - i2) * Math.PI, m2.minZoom = p2, !(o2.x < 0 || o2.x >= 512 || o2.y < 0 || o2.y >= 512) && (this._writeGlyph(h2, l2, o2.x, o2.y, m2), i2 && this._isVisible(m2.minZoom, m2.maxZoom))) {
        const e3 = m2.bounds;
        h2.metricBoxWrite(e3.center[0], e3.center[1], e3.width, e3.height);
      }
    }
  }
  _placeOnSegment(e2, t2, i2, o2, n2, s2) {
    const a2 = this.current.inShaping.glyphs, { out: h2, inId: l2 } = this.current, m2 = this.current.inShaping, c2 = this.current.zoomLevel, f2 = e2.dx / e2.length, _2 = e2.dy / e2.length, p2 = { x: e2.x + i2 * -n2 * f2, y: e2.y + i2 * -n2 * _2 };
    for (const g2 of a2) {
      const a3 = g2.x > m2.bounds.x ? s2 : 1 - s2;
      if (!(a3 && n2 === 1 || !a3 && n2 === -1))
        continue;
      const f3 = Math.abs(g2.x + g2.width / 2 - m2.bounds.x), _3 = Math.max(0, c2 + h$8(f3 / i2) - 0.1), d2 = Math.max(o2, c2 + h$8(f3 / (i2 + e2.length + v)));
      if (_3 !== 0 && (g2.angle = e2.angle + (1 - s2) * Math.PI, g2.minZoom = d2, g2.maxZoom = _3, !(p2.x < 0 || p2.x >= 512 || p2.y < 0 || p2.y >= 512) && (this._writeGlyph(h2, l2, p2.x, p2.y, g2), s2 && this._isVisible(g2.minZoom, g2.maxZoom)))) {
        const i3 = g2.bounds, o3 = e2.x - t2.x, n3 = e2.y - t2.y;
        h2.metricBoxWrite(i3.center[0] + o3, i3.center[1] + n3, i3.width, i3.height);
      }
    }
  }
  _writeGlyphs(e2, t2, i2, o2, n2 = this._minZoom) {
    if (i2.x < 0 || i2.x >= 512 || i2.y < 0 || i2.y >= 512)
      return;
    const r2 = i2.x + this._refOffsetX, s2 = i2.y - this._refOffsetY;
    for (const f2 of o2.glyphs)
      f2.minZoom = n2, f2.maxZoom = this._maxZoom, this._writeGlyph(e2, t2, r2, s2, f2);
    const a2 = N$1.load(this._materialKey), h2 = this._refPlacementDirX, l2 = this._refPlacementDirY, m2 = a2.vvSizeFieldStops || a2.vvSizeMinMaxValue || a2.vvSizeScaleStops || a2.vvSizeUnitValue, c2 = o2.boundsT;
    e2.metricStart(t2, n2, r2, s2, h2, l2, this._referenceSize, m2 ? 1 : 0), e2.metricBoxWrite(c2.center[0], c2.center[1], c2.width, c2.height), e2.metricEnd();
  }
  _writeVertexCommon(e2, t2, i2, o2) {
    const n2 = this._color, r2 = this._haloColor, s2 = w$4(0, 0, this._size, this._haloSize), a2 = Math.max(o2.minZoom, this._minZoom), h2 = Math.min(o2.maxZoom, this._maxZoom), l2 = w$4(j(a2), j(h2), this._outLineLabelAngle, 0);
    e2.vertexWrite(i2), e2.vertexWrite(t2), e2.vertexWrite(n2), e2.vertexWrite(r2), e2.vertexWrite(s2), e2.vertexWrite(this._refSymbolAndPlacementOffset), e2.vertexWrite(l2);
  }
}
class i {
  constructor(e2, t2, r2) {
    this._geometryType = e2, this._idField = t2, this._templateStore = r2;
  }
  update(t2, r2) {
    r$8(t2.mesh.labels) && this._setLabelTemplates(t2.mesh.labels, r2);
  }
  _setLabelTemplates(e2, t2) {
    this._labelTemplates = e2.map((e3) => I.fromLabelClass(e3, t2));
  }
  get templates() {
    return this._templateStore;
  }
  analyze(o2, s2, i2, l2, p2, n2) {
    return __async(this, null, function* () {
      if (b$5(n2))
        return;
      let m2;
      s2.type === "dictionary" && (m2 = yield s2.analyze(this._idField, o2.copy(), l2, p2, n2));
      let f2 = 0;
      for (; o2.next(); ) {
        let t2;
        if (t2 = m2 ? m2[f2++] : r$8(i2) && v$5(o2.getDisplayId()) && o2.readAttribute("cluster_count") !== 1 ? i2.match(this._idField, o2, this._geometryType, l2, p2) : s2.match(this._idField, o2, this._geometryType, l2, p2), o2.setGroupId(t2), S$1(t2)) {
          const e2 = this._templateStore.getDynamicTemplateGroup(t2);
          for (const t3 of e2)
            t3 && t3.analyze && t3.analyze(this._templateStore, o2, l2, p2);
        }
      }
      return this._templateStore.finalize(n2);
    });
  }
  analyzeGraphics(e2, r2, o2, s2, i2) {
    return __async(this, null, function* () {
      if (b$5(i2))
        return;
      const l2 = e2.getCursor();
      for (r2 && (yield r2.analyze(this._idField, l2.copy(), o2, s2, i2)); l2.next(); ) {
        let e3 = l2.getGroupId();
        if (e3 != null && e3 !== -1 || (e3 = r2.match(this._idField, l2, l2.geometryType, o2, s2), l2.setGroupId(e3)), S$1(e3)) {
          const t2 = this._templateStore.getDynamicTemplateGroup(e3);
          for (const e4 of t2)
            e4 && e4.analyze && e4.analyze(this._templateStore, l2, o2, s2);
        }
        l2.setGroupId(e3);
      }
      return this._templateStore.finalize(i2);
    });
  }
  writeGraphic(e2, t2) {
    const r2 = t2.getGroupId(), o2 = t2.getDisplayId(), s2 = this._templateStore.getTemplateGroup(r2);
    if (e2.featureStart(t2.insertAfter), o2 != null) {
      if (S$1(r2))
        for (const e3 of s2)
          e3.bindFeature(t2, null, null);
      if (s2) {
        for (const r3 of s2)
          r3 && r3.write(e2, t2);
        e2.featureEnd();
      }
    }
  }
  writeCursor(t2, r2, o2, s2, i2, l2) {
    const p2 = r2.getGroupId(), n2 = r2.getDisplayId(), m2 = this._templateStore.getTemplateGroup(p2);
    if (r2.getObjectId(), n2 != null && m2) {
      if (S$1(p2))
        for (const e2 of m2)
          e2.bindFeature(r2, o2, s2);
      for (const e2 of m2)
        e2.write(t2, r2);
      if (r$8(l2) && t2.hasRecords) {
        const e2 = l2 && this._findLabelRef(m2);
        this._writeLabels(t2, r2, l2, e2, i2);
      }
    }
  }
  _findLabelRef(e2) {
    for (const t2 of e2)
      if (t2 instanceof d$6)
        return t2;
    return null;
  }
  _writeLabels(t2, r2, o2, s2, a2) {
    for (const i2 of o2)
      if (r$8(i2) && i2) {
        const { glyphs: e2, rtl: o3, index: l2 } = i2, p2 = this._labelTemplates[l2];
        p2.setZoomLevel(a2), p2.bindReferenceTemplate(s2), p2.bindTextInfo(e2, o3), p2.write(t2, r2);
      }
  }
}
export { E, r$5 as a, i$4 as b, t as c, e$2 as e, i, k, r$7 as r, s$4 as s, t$3 as t };
