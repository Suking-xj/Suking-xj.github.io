import { as as r$1, aQ as o$1 } from "./vendor.74d5941c.js";
import { r as r$2 } from "./vec4.44fdb266.js";
class t$2 {
  constructor(t2, e2, r2 = 0, f2, s) {
    this.TypedArrayConstructor = t2, this.elementCount = 9;
    const i2 = this.TypedArrayConstructor;
    f2 === void 0 && (f2 = 9 * i2.BYTES_PER_ELEMENT);
    const d2 = e2.byteLength === 0 ? 0 : r2;
    this.typedBuffer = s == null ? new i2(e2, d2) : new i2(e2, d2, (s - r2) / i2.BYTES_PER_ELEMENT), this.typedBufferStride = f2 / i2.BYTES_PER_ELEMENT, this.count = Math.ceil(this.typedBuffer.length / this.typedBufferStride), this.stride = this.typedBufferStride * this.TypedArrayConstructor.BYTES_PER_ELEMENT;
  }
  getMat(t2, e2) {
    const r2 = t2 * this.typedBufferStride;
    for (let f2 = 0; f2 < 9; f2++)
      e2[f2] = this.typedBuffer[r2 + f2];
    return e2;
  }
  setMat(t2, e2) {
    const r2 = t2 * this.typedBufferStride;
    for (let f2 = 0; f2 < 9; f2++)
      this.typedBuffer[r2 + f2] = e2[f2];
  }
  get(t2, e2) {
    return this.typedBuffer[t2 * this.typedBufferStride + e2];
  }
  set(t2, e2, r2) {
    this.typedBuffer[t2 * this.typedBufferStride + e2] = r2;
  }
  copyFrom(t2, e2, r2) {
    const f2 = this.typedBuffer, s = e2.typedBuffer, i2 = t2 * this.typedBufferStride, d2 = r2 * e2.typedBufferStride;
    for (let u2 = 0; u2 < 9; ++u2)
      f2[i2 + u2] = s[d2 + u2];
  }
  get buffer() {
    return this.typedBuffer.buffer;
  }
}
t$2.ElementCount = 9;
class t$1 {
  constructor(t2, e2, r2 = 0, f2, s) {
    this.TypedArrayConstructor = t2, this.elementCount = 16;
    const i2 = this.TypedArrayConstructor;
    f2 === void 0 && (f2 = 16 * i2.BYTES_PER_ELEMENT);
    const d2 = e2.byteLength === 0 ? 0 : r2;
    this.typedBuffer = s == null ? new i2(e2, d2) : new i2(e2, d2, (s - r2) / i2.BYTES_PER_ELEMENT), this.typedBufferStride = f2 / i2.BYTES_PER_ELEMENT, this.count = Math.ceil(this.typedBuffer.length / this.typedBufferStride), this.stride = this.typedBufferStride * this.TypedArrayConstructor.BYTES_PER_ELEMENT;
  }
  getMat(t2, e2) {
    const r2 = t2 * this.typedBufferStride;
    for (let f2 = 0; f2 < 16; f2++)
      e2[f2] = this.typedBuffer[r2 + f2];
    return e2;
  }
  setMat(t2, e2) {
    const r2 = t2 * this.typedBufferStride;
    for (let f2 = 0; f2 < 16; f2++)
      this.typedBuffer[r2 + f2] = e2[f2];
  }
  get(t2, e2) {
    return this.typedBuffer[t2 * this.typedBufferStride + e2];
  }
  set(t2, e2, r2) {
    this.typedBuffer[t2 * this.typedBufferStride + e2] = r2;
  }
  copyFrom(t2, e2, r2) {
    const f2 = this.typedBuffer, s = e2.typedBuffer, i2 = t2 * this.typedBufferStride, d2 = r2 * e2.typedBufferStride;
    for (let u2 = 0; u2 < 16; ++u2)
      f2[i2 + u2] = s[d2 + u2];
  }
  get buffer() {
    return this.typedBuffer.buffer;
  }
}
t$1.ElementCount = 16;
class t {
  constructor(t2, e2, r2 = 0, s, f2) {
    this.TypedArrayConstructor = t2, this.elementCount = 1;
    const i2 = this.TypedArrayConstructor;
    s === void 0 && (s = i2.BYTES_PER_ELEMENT);
    const u2 = e2.byteLength === 0 ? 0 : r2;
    this.typedBuffer = f2 == null ? new i2(e2, u2) : new i2(e2, u2, (f2 - r2) / i2.BYTES_PER_ELEMENT), this.typedBufferStride = s / i2.BYTES_PER_ELEMENT, this.count = Math.ceil(this.typedBuffer.length / this.typedBufferStride), this.stride = this.typedBufferStride * this.TypedArrayConstructor.BYTES_PER_ELEMENT;
  }
  get(t2) {
    return this.typedBuffer[t2 * this.typedBufferStride];
  }
  set(t2, e2) {
    this.typedBuffer[t2 * this.typedBufferStride] = e2;
  }
  get buffer() {
    return this.typedBuffer.buffer;
  }
}
t.ElementCount = 1;
class e$3 {
  constructor(t2, e2, r2 = 0, f2, s) {
    this.TypedArrayConstructor = t2, this.elementCount = 2;
    const i2 = this.TypedArrayConstructor;
    f2 === void 0 && (f2 = 2 * i2.BYTES_PER_ELEMENT);
    const d2 = e2.byteLength === 0 ? 0 : r2;
    this.typedBuffer = s == null ? new i2(e2, d2) : new i2(e2, d2, (s - r2) / i2.BYTES_PER_ELEMENT), this.typedBufferStride = f2 / i2.BYTES_PER_ELEMENT, this.count = Math.ceil(this.typedBuffer.length / this.typedBufferStride), this.stride = this.typedBufferStride * this.TypedArrayConstructor.BYTES_PER_ELEMENT;
  }
  getVec(e2, r2) {
    return r$1(r2, this.typedBuffer[e2 * this.typedBufferStride], this.typedBuffer[e2 * this.typedBufferStride + 1]);
  }
  setVec(t2, e2) {
    this.typedBuffer[t2 * this.typedBufferStride] = e2[0], this.typedBuffer[t2 * this.typedBufferStride + 1] = e2[1];
  }
  get(t2, e2) {
    return this.typedBuffer[t2 * this.typedBufferStride + e2];
  }
  set(t2, e2, r2) {
    this.typedBuffer[t2 * this.typedBufferStride + e2] = r2;
  }
  setValues(t2, e2, r2) {
    this.typedBuffer[t2 * this.typedBufferStride] = e2, this.typedBuffer[t2 * this.typedBufferStride + 1] = r2;
  }
  copyFrom(t2, e2, r2) {
    const f2 = this.typedBuffer, s = e2.typedBuffer, i2 = t2 * this.typedBufferStride, d2 = r2 * e2.typedBufferStride;
    f2[i2] = s[d2], f2[i2 + 1] = s[d2 + 1];
  }
  get buffer() {
    return this.typedBuffer.buffer;
  }
}
e$3.ElementCount = 2;
class e$2 {
  constructor(t2, e2, r2 = 0, f2, i2) {
    this.TypedArrayConstructor = t2, this.elementCount = 3;
    const s = this.TypedArrayConstructor;
    f2 === void 0 && (f2 = 3 * s.BYTES_PER_ELEMENT);
    const d2 = e2.byteLength === 0 ? 0 : r2;
    this.typedBuffer = i2 == null ? new s(e2, d2) : new s(e2, d2, (i2 - r2) / s.BYTES_PER_ELEMENT), this.typedBufferStride = f2 / s.BYTES_PER_ELEMENT, this.count = Math.ceil(this.typedBuffer.length / this.typedBufferStride), this.stride = this.typedBufferStride * this.TypedArrayConstructor.BYTES_PER_ELEMENT;
  }
  getVec(e2, r2) {
    return o$1(r2, this.typedBuffer[e2 * this.typedBufferStride], this.typedBuffer[e2 * this.typedBufferStride + 1], this.typedBuffer[e2 * this.typedBufferStride + 2]);
  }
  setVec(t2, e2) {
    this.typedBuffer[t2 * this.typedBufferStride] = e2[0], this.typedBuffer[t2 * this.typedBufferStride + 1] = e2[1], this.typedBuffer[t2 * this.typedBufferStride + 2] = e2[2];
  }
  get(t2, e2) {
    return this.typedBuffer[t2 * this.typedBufferStride + e2];
  }
  set(t2, e2, r2) {
    this.typedBuffer[t2 * this.typedBufferStride + e2] = r2;
  }
  setValues(t2, e2, r2, f2) {
    this.typedBuffer[t2 * this.typedBufferStride] = e2, this.typedBuffer[t2 * this.typedBufferStride + 1] = r2, this.typedBuffer[t2 * this.typedBufferStride + 2] = f2;
  }
  copyFrom(t2, e2, r2) {
    const f2 = this.typedBuffer, i2 = e2.typedBuffer, s = t2 * this.typedBufferStride, d2 = r2 * e2.typedBufferStride;
    f2[s] = i2[d2], f2[s + 1] = i2[d2 + 1], f2[s + 2] = i2[d2 + 2];
  }
  get buffer() {
    return this.typedBuffer.buffer;
  }
}
e$2.ElementCount = 3;
class e$1 {
  constructor(t2, e2, r2 = 0, f2, i2) {
    this.TypedArrayConstructor = t2, this.elementCount = 4;
    const d2 = this.TypedArrayConstructor;
    f2 === void 0 && (f2 = 4 * d2.BYTES_PER_ELEMENT);
    const s = e2.byteLength === 0 ? 0 : r2;
    this.typedBuffer = i2 == null ? new d2(e2, s) : new d2(e2, s, (i2 - r2) / d2.BYTES_PER_ELEMENT), this.typedBufferStride = f2 / d2.BYTES_PER_ELEMENT, this.count = Math.ceil(this.typedBuffer.length / this.typedBufferStride), this.stride = this.typedBufferStride * this.TypedArrayConstructor.BYTES_PER_ELEMENT;
  }
  getVec(e2, r2) {
    return r$2(r2, this.typedBuffer[e2 * this.typedBufferStride], this.typedBuffer[e2 * this.typedBufferStride + 1], this.typedBuffer[e2 * this.typedBufferStride + 2], this.typedBuffer[e2 * this.typedBufferStride + 3]);
  }
  setVec(t2, e2) {
    this.typedBuffer[t2 * this.typedBufferStride] = e2[0], this.typedBuffer[t2 * this.typedBufferStride + 1] = e2[1], this.typedBuffer[t2 * this.typedBufferStride + 2] = e2[2], this.typedBuffer[t2 * this.typedBufferStride + 3] = e2[3];
  }
  get(t2, e2) {
    return this.typedBuffer[t2 * this.typedBufferStride + e2];
  }
  set(t2, e2, r2) {
    this.typedBuffer[t2 * this.typedBufferStride + e2] = r2;
  }
  setValues(t2, e2, r2, f2, i2) {
    this.typedBuffer[t2 * this.typedBufferStride] = e2, this.typedBuffer[t2 * this.typedBufferStride + 1] = r2, this.typedBuffer[t2 * this.typedBufferStride + 2] = f2, this.typedBuffer[t2 * this.typedBufferStride + 3] = i2;
  }
  copyFrom(t2, e2, r2) {
    const f2 = this.typedBuffer, i2 = e2.typedBuffer, d2 = t2 * this.typedBufferStride, s = r2 * e2.typedBufferStride;
    f2[d2] = i2[s], f2[d2 + 1] = i2[s + 1], f2[d2 + 2] = i2[s + 2], f2[d2 + 3] = i2[s + 3];
  }
  get buffer() {
    return this.typedBuffer.buffer;
  }
}
e$1.ElementCount = 4;
class f extends t {
  constructor(e2, t2 = 0, r2, s) {
    super(Float32Array, e2, t2, r2, s), this.elementType = "f32";
  }
  static fromTypedArray(e2, t2) {
    return new f(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
f.ElementType = "f32";
class u$1 extends e$3 {
  constructor(e2, t2 = 0, r2, s) {
    super(Float32Array, e2, t2, r2, s), this.elementType = "f32";
  }
  static fromTypedArray(e2, t2) {
    return new u$1(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
u$1.ElementType = "f32";
class a extends e$2 {
  constructor(e2, t2 = 0, r2, s) {
    super(Float32Array, e2, t2, r2, s), this.elementType = "f32";
  }
  static fromTypedArray(e2, t2) {
    return new a(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
a.ElementType = "f32";
class p extends e$1 {
  constructor(e2, t2 = 0, r2, s) {
    super(Float32Array, e2, t2, r2, s), this.elementType = "f32";
  }
  static fromTypedArray(e2, t2) {
    return new p(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
p.ElementType = "f32";
class c$1 extends t$2 {
  constructor(e2, t2 = 0, r2, s) {
    super(Float32Array, e2, t2, r2, s), this.elementType = "f32";
  }
  static fromTypedArray(e2, t2) {
    return new c$1(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
c$1.ElementType = "f32";
class b extends t$2 {
  constructor(e2, t2 = 0, r2, s) {
    super(Float64Array, e2, t2, r2, s), this.elementType = "f64";
  }
  static fromTypedArray(e2, t2) {
    return new b(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
b.ElementType = "f64";
class o extends t$1 {
  constructor(e2, t2 = 0, r2, s) {
    super(Float32Array, e2, t2, r2, s), this.elementType = "f32";
  }
  static fromTypedArray(e2, t2) {
    return new o(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
o.ElementType = "f32";
class l extends t$1 {
  constructor(e2, t2 = 0, r2, s) {
    super(Float64Array, e2, t2, r2, s), this.elementType = "f64";
  }
  static fromTypedArray(e2, t2) {
    return new l(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
l.ElementType = "f64";
class i extends t {
  constructor(e2, t2 = 0, r2, s) {
    super(Float64Array, e2, t2, r2, s), this.elementType = "f64";
  }
  static fromTypedArray(e2, t2) {
    return new i(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
i.ElementType = "f64";
class m extends e$3 {
  constructor(e2, t2 = 0, r2, s) {
    super(Float64Array, e2, t2, r2, s), this.elementType = "f64";
  }
  static fromTypedArray(e2, t2) {
    return new m(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
m.ElementType = "f64";
class T$1 extends e$2 {
  constructor(e2, t2 = 0, r2, s) {
    super(Float64Array, e2, t2, r2, s), this.elementType = "f64";
  }
  static fromTypedArray(e2, t2) {
    return new T$1(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
T$1.ElementType = "f64";
class d extends e$1 {
  constructor(e2, t2 = 0, r2, s) {
    super(Float64Array, e2, t2, r2, s), this.elementType = "f64";
  }
  static fromTypedArray(e2, t2) {
    return new d(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
d.ElementType = "f64";
class h extends t {
  constructor(e2, t2 = 0, r2, s) {
    super(Uint8Array, e2, t2, r2, s), this.elementType = "u8";
  }
  static fromTypedArray(e2, t2) {
    return new h(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
h.ElementType = "u8";
class A$1 extends e$3 {
  constructor(e2, t2 = 0, r2, s) {
    super(Uint8Array, e2, t2, r2, s), this.elementType = "u8";
  }
  static fromTypedArray(e2, t2) {
    return new A$1(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
A$1.ElementType = "u8";
class O extends e$2 {
  constructor(e2, t2 = 0, r2, s) {
    super(Uint8Array, e2, t2, r2, s), this.elementType = "u8";
  }
  static fromTypedArray(e2, t2) {
    return new O(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
O.ElementType = "u8";
class x extends e$1 {
  constructor(e2, t2 = 0, r2, s) {
    super(Uint8Array, e2, t2, r2, s), this.elementType = "u8";
  }
  static fromTypedArray(e2, t2) {
    return new x(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
x.ElementType = "u8";
class g extends t {
  constructor(e2, t2 = 0, r2, s) {
    super(Uint16Array, e2, t2, r2, s), this.elementType = "u16";
  }
  static fromTypedArray(e2, t2) {
    return new g(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
g.ElementType = "u16";
class w extends e$3 {
  constructor(e2, t2 = 0, r2, s) {
    super(Uint16Array, e2, t2, r2, s), this.elementType = "u16";
  }
  static fromTypedArray(e2, t2) {
    return new w(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
w.ElementType = "u16";
class E extends e$2 {
  constructor(e2, t2 = 0, r2, s) {
    super(Uint16Array, e2, t2, r2, s), this.elementType = "u16";
  }
  static fromTypedArray(e2, t2) {
    return new E(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
E.ElementType = "u16";
class L extends e$1 {
  constructor(e2, t2 = 0, r2, s) {
    super(Uint16Array, e2, t2, r2, s), this.elementType = "u16";
  }
  static fromTypedArray(e2, t2) {
    return new L(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
L.ElementType = "u16";
class F extends t {
  constructor(e2, t2 = 0, r2, s) {
    super(Uint32Array, e2, t2, r2, s), this.elementType = "u32";
  }
  static fromTypedArray(e2, t2) {
    return new F(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
F.ElementType = "u32";
class I extends e$3 {
  constructor(e2, t2 = 0, r2, s) {
    super(Uint32Array, e2, t2, r2, s), this.elementType = "u32";
  }
  static fromTypedArray(e2, t2) {
    return new I(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
I.ElementType = "u32";
class U extends e$2 {
  constructor(e2, t2 = 0, r2, s) {
    super(Uint32Array, e2, t2, r2, s), this.elementType = "u32";
  }
  static fromTypedArray(e2, t2) {
    return new U(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
U.ElementType = "u32";
class j extends e$1 {
  constructor(e2, t2 = 0, r2, s) {
    super(Uint32Array, e2, t2, r2, s), this.elementType = "u32";
  }
  static fromTypedArray(e2, t2) {
    return new j(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
j.ElementType = "u32";
class V extends t {
  constructor(e2, t2 = 0, r2, s) {
    super(Int8Array, e2, t2, r2, s), this.elementType = "i8";
  }
  static fromTypedArray(e2, t2) {
    return new V(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
V.ElementType = "i8";
class M extends e$3 {
  constructor(e2, t2 = 0, r2, s) {
    super(Int8Array, e2, t2, r2, s), this.elementType = "i8";
  }
  static fromTypedArray(e2, t2) {
    return new M(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
M.ElementType = "i8";
class S extends e$2 {
  constructor(e2, t2 = 0, r2, s) {
    super(Int8Array, e2, t2, r2, s), this.elementType = "i8";
  }
  static fromTypedArray(e2, t2) {
    return new S(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
S.ElementType = "i8";
class k extends e$1 {
  constructor(e2, t2 = 0, r2, s) {
    super(Int8Array, e2, t2, r2, s), this.elementType = "i8";
  }
  static fromTypedArray(e2, t2) {
    return new k(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
k.ElementType = "i8";
class q extends t {
  constructor(e2, t2 = 0, r2, s) {
    super(Int16Array, e2, t2, r2, s), this.elementType = "i16";
  }
  static fromTypedArray(e2, t2) {
    return new q(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
q.ElementType = "i16";
class v extends e$3 {
  constructor(e2, t2 = 0, r2, s) {
    super(Int16Array, e2, t2, r2, s), this.elementType = "i16";
  }
  static fromTypedArray(e2, t2) {
    return new v(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
v.ElementType = "i16";
class z extends e$2 {
  constructor(e2, t2 = 0, r2, s) {
    super(Int16Array, e2, t2, r2, s), this.elementType = "i16";
  }
  static fromTypedArray(e2, t2) {
    return new z(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
z.ElementType = "i16";
class B extends e$1 {
  constructor(e2, t2 = 0, r2, s) {
    super(Int16Array, e2, t2, r2, s), this.elementType = "i16";
  }
  static fromTypedArray(e2, t2) {
    return new B(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
B.ElementType = "i16";
class C extends t {
  constructor(e2, t2 = 0, r2, s) {
    super(Int32Array, e2, t2, r2, s), this.elementType = "i32";
  }
  static fromTypedArray(e2, t2) {
    return new C(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
C.ElementType = "i32";
class D extends e$3 {
  constructor(e2, t2 = 0, r2, s) {
    super(Int32Array, e2, t2, r2, s), this.elementType = "i32";
  }
  static fromTypedArray(e2, t2) {
    return new D(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
D.ElementType = "i32";
class G extends e$2 {
  constructor(e2, t2 = 0, r2, s) {
    super(Int32Array, e2, t2, r2, s), this.elementType = "i32";
  }
  static fromTypedArray(e2, t2) {
    return new G(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
G.ElementType = "i32";
class H extends e$1 {
  constructor(e2, t2 = 0, r2, s) {
    super(Int32Array, e2, t2, r2, s), this.elementType = "i32";
  }
  static fromTypedArray(e2, t2) {
    return new H(e2.buffer, e2.byteOffset, t2, e2.byteOffset + e2.byteLength);
  }
}
H.ElementType = "i32";
function e(e2) {
  switch (e2) {
    case "u8":
      return 1;
    case "u16":
      return 2;
    case "u32":
      return 4;
    case "i8":
      return 1;
    case "i16":
      return 2;
    case "i32":
    case "f32":
      return 4;
    case "f64":
      return 8;
    default:
      return;
  }
}
function r(e2) {
  switch (e2) {
    case "u8":
    case "u16":
    case "u32":
      return false;
    case "i8":
    case "i16":
    case "i32":
    case "f32":
    case "f64":
      return true;
    default:
      return;
  }
}
function u(e2) {
  switch (e2) {
    case "u8":
    case "u16":
    case "u32":
    case "i8":
    case "i16":
    case "i32":
      return true;
    case "f32":
    case "f64":
      return false;
    default:
      return;
  }
}
function c(e2) {
  switch (e2) {
    case "u8":
      return 255;
    case "u16":
      return 65535;
    case "u32":
      return 4294967295;
    case "i8":
      return 127;
    case "i16":
      return 32767;
    case "i32":
      return 2147483647;
    case "f32":
      return 3402823e32;
    case "f64":
      return 179769e303;
    default:
      return;
  }
}
class N {
  constructor(e2, t2) {
    this.layout = e2, this.buffer = typeof t2 == "number" ? new ArrayBuffer(t2 * e2.stride) : t2;
    for (const i2 of e2.fieldNames) {
      const t3 = e2.fields.get(i2);
      this[i2] = new t3.constructor(this.buffer, t3.offset, this.stride);
    }
  }
  get stride() {
    return this.layout.stride;
  }
  get count() {
    return this.buffer.byteLength / this.stride;
  }
  get byteLength() {
    return this.buffer.byteLength;
  }
  getField(e2, t2) {
    const i2 = this[e2];
    return i2 && i2.elementCount === t2.ElementCount && i2.elementType === t2.ElementType ? i2 : null;
  }
  slice(e2, t2) {
    return new N(this.layout, this.buffer.slice(e2 * this.stride, t2 * this.stride));
  }
  copyFrom(e2, t2, i2, s) {
    const r2 = this.stride;
    if (r2 % 4 == 0) {
      const n = new Uint32Array(e2.buffer, t2 * r2, s * r2 / 4);
      new Uint32Array(this.buffer, i2 * r2, s * r2 / 4).set(n);
    } else {
      const n = new Uint8Array(e2.buffer, t2 * r2, s * r2);
      new Uint8Array(this.buffer, i2 * r2, s * r2).set(n);
    }
  }
}
class T {
  constructor() {
    this.stride = 0, this.fields = new Map(), this.fieldNames = [];
  }
  vec2f(t2, i2) {
    return this.appendField(t2, u$1, i2), this;
  }
  vec2f64(e2, i2) {
    return this.appendField(e2, m, i2), this;
  }
  vec3f(e2, t2) {
    return this.appendField(e2, a, t2), this;
  }
  vec3f64(e2, t2) {
    return this.appendField(e2, T$1, t2), this;
  }
  vec4f(e2, t2) {
    return this.appendField(e2, p, t2), this;
  }
  vec4f64(e2, t2) {
    return this.appendField(e2, d, t2), this;
  }
  mat3f(e2, t2) {
    return this.appendField(e2, c$1, t2), this;
  }
  mat3f64(e2, t2) {
    return this.appendField(e2, b, t2), this;
  }
  mat4f(e2, t2) {
    return this.appendField(e2, o, t2), this;
  }
  mat4f64(e2, t2) {
    return this.appendField(e2, l, t2), this;
  }
  vec4u8(e2, t2) {
    return this.appendField(e2, x, t2), this;
  }
  f32(e2, t2) {
    return this.appendField(e2, f, t2), this;
  }
  f64(e2, t2) {
    return this.appendField(e2, i, t2), this;
  }
  u8(e2, t2) {
    return this.appendField(e2, h, t2), this;
  }
  u16(e2, t2) {
    return this.appendField(e2, g, t2), this;
  }
  i8(e2, t2) {
    return this.appendField(e2, V, t2), this;
  }
  vec2i8(e2, t2) {
    return this.appendField(e2, M, t2), this;
  }
  vec2i16(e2, t2) {
    return this.appendField(e2, v, t2), this;
  }
  vec2u8(e2, t2) {
    return this.appendField(e2, A$1, t2), this;
  }
  vec4u16(e2, t2) {
    return this.appendField(e2, L, t2), this;
  }
  u32(e2, t2) {
    return this.appendField(e2, F, t2), this;
  }
  appendField(e$12, t2, i2) {
    const s = t2.ElementCount * e(t2.ElementType), r2 = this.stride;
    this.fields.set(e$12, { size: s, constructor: t2, offset: r2, optional: i2 }), this.stride += s, this.fieldNames.push(e$12);
  }
  alignTo(e2) {
    return this.stride = Math.floor((this.stride + e2 - 1) / e2) * e2, this;
  }
  hasField(e2) {
    return this.fieldNames.indexOf(e2) >= 0;
  }
  createBuffer(e2) {
    return new N(this, e2);
  }
  createView(e2) {
    return new N(this, e2);
  }
  clone() {
    const e2 = new T();
    return e2.stride = this.stride, e2.fields = new Map(), this.fields.forEach((t2, i2) => e2.fields.set(i2, t2)), e2.fieldNames = this.fieldNames.slice(), e2.BufferType = this.BufferType, e2;
  }
}
function A() {
  return new T();
}
export { A, B, C, D, E, F, G, H, I, L, M, O, S, T$1 as T, U, V, a, b, c$1 as c, d, A$1 as e, f, g, h, i, j, k, l, m, u as n, o, p, q, c as r, r as s, e as t, u$1 as u, v, w, x, z };
