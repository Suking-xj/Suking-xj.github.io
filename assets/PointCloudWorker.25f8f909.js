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
import { aa as s$2, a4 as n$2, bT as y$1, a5 as r$2, gj as a$3, gk as c$4, gl as c$5, a0 as t$2, gm as t$3, bF as k, gn as xn, go as P } from "./vendor.74d5941c.js";
import { t as t$4, w as w$1, n as n$3 } from "./vec3f32.9abda27a.js";
import "./vec4.44fdb266.js";
function r$1() {
  const r2 = new Float32Array(4);
  return r2[3] = 1, r2;
}
function n$1(r2) {
  const n2 = new Float32Array(4);
  return n2[0] = r2[0], n2[1] = r2[1], n2[2] = r2[2], n2[3] = r2[3], n2;
}
function e(r2, n2, e2, t2) {
  const a2 = new Float32Array(4);
  return a2[0] = r2, a2[1] = n2, a2[2] = e2, a2[3] = t2, a2;
}
function t$1(r2, n2) {
  return new Float32Array(r2, n2, 4);
}
Object.freeze({ __proto__: null, create: r$1, clone: n$1, fromValues: e, createView: t$1 });
const t = true, o = { identifierOffset: 0, identifierLength: 10, versionOffset: 10, checksumOffset: 12, byteCount: 16 };
function r(e2, r2, n2) {
  return { identifier: String.fromCharCode.apply(null, new Uint8Array(e2, n2 + o.identifierOffset, o.identifierLength)), version: r2.getUint16(n2 + o.versionOffset, t), checksum: r2.getUint32(n2 + o.checksumOffset, t) };
}
const n = { sizeLo: 0, sizeHi: 4, minX: 8, minY: 16, minZ: 24, maxX: 32, maxY: 40, maxZ: 48, errorX: 56, errorY: 64, errorZ: 72, count: 80, reserved: 84, byteCount: 88 };
function i$1(e2, o2) {
  return { sizeLo: e2.getUint32(o2 + n.sizeLo, t), sizeHi: e2.getUint32(o2 + n.sizeHi, t), minX: e2.getFloat64(o2 + n.minX, t), minY: e2.getFloat64(o2 + n.minY, t), minZ: e2.getFloat64(o2 + n.minZ, t), maxX: e2.getFloat64(o2 + n.maxX, t), maxY: e2.getFloat64(o2 + n.maxY, t), maxZ: e2.getFloat64(o2 + n.maxZ, t), errorX: e2.getFloat64(o2 + n.errorX, t), errorY: e2.getFloat64(o2 + n.errorY, t), errorZ: e2.getFloat64(o2 + n.errorZ, t), count: e2.getUint32(o2 + n.count, t), reserved: e2.getUint32(o2 + n.reserved, t) };
}
function c$3(t2) {
  const c2 = new DataView(t2, 0);
  let d2 = 0;
  const { identifier: l2, version: a2 } = r(t2, c2, d2);
  if (d2 += o.byteCount, l2 !== "LEPCC     ")
    throw new s$2("lepcc-decode-error", "Bad identifier");
  if (a2 > 1)
    throw new s$2("lepcc-decode-error", "Unknown version");
  const u2 = i$1(c2, d2);
  d2 += n.byteCount;
  if (u2.sizeHi * __pow(2, 32) + u2.sizeLo !== t2.byteLength)
    throw new s$2("lepcc-decode-error", "Bad size");
  const f2 = new Float64Array(3 * u2.count), h2 = [], w2 = [], g = [], p2 = [];
  if (d2 = s$1(t2, d2, h2), d2 = s$1(t2, d2, w2), d2 = s$1(t2, d2, g), d2 = s$1(t2, d2, p2), d2 !== t2.byteLength)
    throw new s$2("lepcc-decode-error", "Bad length");
  let m2 = 0, U = 0;
  for (let e2 = 0; e2 < h2.length; e2++) {
    U += h2[e2];
    let t3 = 0;
    for (let o2 = 0; o2 < w2[e2]; o2++) {
      t3 += g[m2];
      const e3 = p2[m2];
      f2[3 * m2] = Math.min(u2.maxX, u2.minX + 2 * u2.errorX * t3), f2[3 * m2 + 1] = Math.min(u2.maxY, u2.minY + 2 * u2.errorY * U), f2[3 * m2 + 2] = Math.min(u2.maxZ, u2.minZ + 2 * u2.errorZ * e3), m2++;
    }
  }
  return { errorX: u2.errorX, errorY: u2.errorY, errorZ: u2.errorZ, result: f2 };
}
function s$1(e2, t2, o2) {
  const r2 = [];
  t2 = d$1(e2, t2, r2);
  const n2 = [];
  for (let i2 = 0; i2 < r2.length; i2++) {
    n2.length = 0, t2 = d$1(e2, t2, n2);
    for (let e3 = 0; e3 < n2.length; e3++)
      o2.push(n2[e3] + r2[i2]);
  }
  return t2;
}
function d$1(o2, r2, n2) {
  const i2 = new DataView(o2, r2), c2 = i2.getUint8(0), s2 = 31 & c2, d2 = !!(32 & c2), l2 = (192 & c2) >> 6;
  let a2 = 0;
  if (l2 === 0)
    a2 = i2.getUint32(1, t), r2 += 5;
  else if (l2 === 1)
    a2 = i2.getUint16(1, t), r2 += 3;
  else {
    if (l2 !== 2)
      throw new s$2("lepcc-decode-error", "Bad count type");
    a2 = i2.getUint8(1), r2 += 2;
  }
  if (d2)
    throw new s$2("lepcc-decode-error", "LUT not implemented");
  const u2 = Math.ceil(a2 * s2 / 8), f2 = new Uint8Array(o2, r2, u2);
  let h2 = 0, w2 = 0, g = 0;
  const p2 = -1 >>> 32 - s2;
  for (let e2 = 0; e2 < a2; e2++) {
    for (; w2 < s2; )
      h2 |= f2[g] << w2, w2 += 8, g += 1;
    n2[e2] = h2 & p2, h2 >>>= s2, w2 -= s2, w2 + s2 > 32 && (h2 |= f2[g - 1] >> 8 - w2);
  }
  return r2 + g;
}
const l$1 = { sizeLo: 0, sizeHi: 4, count: 8, colorMapCount: 12, lookupMethod: 14, compressionMethod: 15, byteCount: 16 };
function a$2(e2, o2) {
  return { sizeLo: e2.getUint32(o2 + l$1.sizeLo, t), sizeHi: e2.getUint32(o2 + l$1.sizeHi, t), count: e2.getUint32(o2 + l$1.count, t), colorMapCount: e2.getUint16(o2 + l$1.colorMapCount, t), lookupMethod: e2.getUint8(o2 + l$1.lookupMethod), compressionMethod: e2.getUint8(o2 + l$1.compressionMethod) };
}
function u$2(t2) {
  const n2 = new DataView(t2, 0);
  let i2 = 0;
  const { identifier: c2, version: s2 } = r(t2, n2, i2);
  if (i2 += o.byteCount, c2 !== "ClusterRGB")
    throw new s$2("lepcc-decode-error", "Bad identifier");
  if (s2 > 1)
    throw new s$2("lepcc-decode-error", "Unknown version");
  const d2 = a$2(n2, i2);
  i2 += l$1.byteCount;
  if (d2.sizeHi * __pow(2, 32) + d2.sizeLo !== t2.byteLength)
    throw new s$2("lepcc-decode-error", "Bad size");
  if ((d2.lookupMethod === 2 || d2.lookupMethod === 1) && d2.compressionMethod === 0) {
    if (3 * d2.colorMapCount + d2.count + i2 !== t2.byteLength || d2.colorMapCount > 256)
      throw new s$2("lepcc-decode-error", "Bad count");
    const o2 = new Uint8Array(t2, i2, 3 * d2.colorMapCount), r2 = new Uint8Array(t2, i2 + 3 * d2.colorMapCount, d2.count), n3 = new Uint8Array(3 * d2.count);
    for (let e2 = 0; e2 < d2.count; e2++) {
      const t3 = r2[e2];
      n3[3 * e2] = o2[3 * t3], n3[3 * e2 + 1] = o2[3 * t3 + 1], n3[3 * e2 + 2] = o2[3 * t3 + 2];
    }
    return n3;
  }
  if (d2.lookupMethod === 0 && d2.compressionMethod === 0) {
    if (3 * d2.count + i2 !== t2.byteLength || d2.colorMapCount !== 0)
      throw new s$2("lepcc-decode-error", "Bad count");
    return new Uint8Array(t2, i2).slice();
  }
  if (d2.lookupMethod <= 2 && d2.compressionMethod === 1) {
    if (i2 + 3 !== t2.byteLength || d2.colorMapCount !== 1)
      throw new s$2("lepcc-decode-error", "Bad count");
    const o2 = n2.getUint8(i2), r2 = n2.getUint8(i2 + 1), c3 = n2.getUint8(i2 + 2), s3 = new Uint8Array(3 * d2.count);
    for (let e2 = 0; e2 < d2.count; e2++)
      s3[3 * e2] = o2, s3[3 * e2 + 1] = r2, s3[3 * e2 + 2] = c3;
    return s3;
  }
  throw new s$2("lepcc-decode-error", "Bad method " + d2.lookupMethod + "," + d2.compressionMethod);
}
const f$1 = { sizeLo: 0, sizeHi: 4, count: 8, scaleFactor: 12, bitsPerPoint: 14, reserved: 15, byteCount: 16 };
function h$2(e2, o2) {
  return { sizeLo: e2.getUint32(o2 + f$1.sizeLo, t), sizeHi: e2.getUint32(o2 + f$1.sizeHi, t), count: e2.getUint32(o2 + f$1.count, t), scaleFactor: e2.getUint16(o2 + f$1.scaleFactor, t), bitsPerPoint: e2.getUint8(o2 + f$1.bitsPerPoint), reserved: e2.getUint8(o2 + f$1.reserved) };
}
function w(t2) {
  const n2 = new DataView(t2, 0);
  let i2 = 0;
  const { identifier: c2, version: s2 } = r(t2, n2, i2);
  if (i2 += o.byteCount, c2 !== "Intensity ")
    throw new s$2("lepcc-decode-error", "Bad identifier");
  if (s2 > 1)
    throw new s$2("lepcc-decode-error", "Unknown version");
  const l2 = h$2(n2, i2);
  i2 += f$1.byteCount;
  if (l2.sizeHi * __pow(2, 32) + l2.sizeLo !== t2.byteLength)
    throw new s$2("lepcc-decode-error", "Bad size");
  const a2 = new Uint16Array(l2.count);
  if (l2.bitsPerPoint === 8) {
    if (l2.count + i2 !== t2.byteLength)
      throw new s$2("lepcc-decode-error", "Bad size");
    const o2 = new Uint8Array(t2, i2, l2.count);
    for (let e2 = 0; e2 < l2.count; e2++)
      a2[e2] = o2[e2] * l2.scaleFactor;
  } else if (l2.bitsPerPoint === 16) {
    if (2 * l2.count + i2 !== t2.byteLength)
      throw new s$2("lepcc-decode-error", "Bad size");
    const o2 = new Uint16Array(t2, i2, l2.count);
    for (let e2 = 0; e2 < l2.count; e2++)
      a2[e2] = o2[e2] * l2.scaleFactor;
  } else {
    const o2 = [];
    if (d$1(t2, i2, o2) !== t2.byteLength)
      throw new s$2("lepcc-decode-error", "Bad size");
    for (let e2 = 0; e2 < l2.count; e2++)
      a2[e2] = o2[e2] * l2.scaleFactor;
  }
  return a2;
}
const i = n$2.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");
function u$1(e2, t2, r2) {
  let o2 = "", i2 = 0;
  for (; i2 < r2; ) {
    const u2 = e2[t2 + i2];
    if (u2 < 128)
      o2 += String.fromCharCode(u2), i2++;
    else if (u2 >= 192 && u2 < 224) {
      if (i2 + 1 >= r2)
        throw new s$2("utf8-decode-error", "UTF-8 Decode failed. Two byte character was truncated.");
      const a2 = (31 & u2) << 6 | 63 & e2[t2 + i2 + 1];
      o2 += String.fromCharCode(a2), i2 += 2;
    } else if (u2 >= 224 && u2 < 240) {
      if (i2 + 2 >= r2)
        throw new s$2("utf8-decode-error", "UTF-8 Decode failed. Multi byte character was truncated.");
      const a2 = (15 & u2) << 12 | (63 & e2[t2 + i2 + 1]) << 6 | 63 & e2[t2 + i2 + 2];
      o2 += String.fromCharCode(a2), i2 += 3;
    } else {
      if (!(u2 >= 240 && u2 < 248))
        throw new s$2("utf8-decode-error", "UTF-8 Decode failed. Invalid multi byte sequence.");
      {
        if (i2 + 3 >= r2)
          throw new s$2("utf8-decode-error", "UTF-8 Decode failed. Multi byte character was truncated.");
        const a2 = (7 & u2) << 18 | (63 & e2[t2 + i2 + 1]) << 12 | (63 & e2[t2 + i2 + 2]) << 6 | 63 & e2[t2 + i2 + 3];
        if (a2 >= 65536) {
          const e3 = 55296 + (a2 - 65536 >> 10), t3 = 56320 + (1023 & a2);
          o2 += String.fromCharCode(e3, t3);
        } else
          o2 += String.fromCharCode(a2);
        i2 += 4;
      }
    }
  }
  return o2;
}
function a$1(e2, t2) {
  const n2 = { byteOffset: 0, byteCount: 0, fields: Object.create(null) };
  let r2 = 0;
  for (let o2 = 0; o2 < t2.length; o2++) {
    const i2 = t2[o2], u2 = i2.valueType || i2.type, a2 = I[u2];
    n2.fields[i2.property] = a2(e2, r2), r2 += m$1[u2].BYTES_PER_ELEMENT;
  }
  return n2.byteCount = r2, n2;
}
function s(e2, t2, r2) {
  const o2 = [];
  let i2, a2, s2 = 0;
  for (a2 = 0; a2 < e2; a2 += 1) {
    if (i2 = t2[a2], i2 > 0) {
      if (o2.push(u$1(r2, s2, i2 - 1)), r2[s2 + i2 - 1] !== 0)
        throw new s$2("string-array-error", "Invalid string array: missing null termination.");
    } else
      o2.push(null);
    s2 += i2;
  }
  return o2;
}
function c$2(e2, t2) {
  return new m$1[t2.valueType](e2, t2.byteOffset, t2.count * t2.valuesPerElement);
}
function f(e2, t2) {
  return new Uint8Array(e2, t2.byteOffset, t2.byteCount);
}
function l(t2, r2, o2) {
  const i2 = r2.header != null ? a$1(t2, r2.header) : { byteOffset: 0, byteCount: 0, fields: { count: o2 } }, u2 = { header: i2, byteOffset: i2.byteCount, byteCount: 0, entries: Object.create(null) };
  let s2 = i2.byteCount;
  for (let a2 = 0; a2 < r2.ordering.length; a2++) {
    const t3 = r2.ordering[a2], o3 = y$1(r2[t3]);
    if (o3.count = i2.fields.count, o3.valueType === "String") {
      if (o3.byteOffset = s2, o3.byteCount = i2.fields[t3 + "ByteCount"], o3.encoding !== "UTF-8")
        throw new s$2("unsupported-encoding", "Unsupported String encoding.", { encoding: o3.encoding });
    } else {
      if (!h$1(o3.valueType))
        throw new s$2("unsupported-value-type", "Unsupported binary valueType", { valueType: o3.valueType });
      {
        const e2 = A(o3.valueType);
        s2 += s2 % e2 != 0 ? e2 - s2 % e2 : 0, o3.byteOffset = s2, o3.byteCount = e2 * o3.valuesPerElement * o3.count;
      }
    }
    s2 += o3.byteCount, u2.entries[t3] = o3;
  }
  return u2.byteCount = s2 - u2.byteOffset, u2;
}
function b$1(e2, t2, r2) {
  if (t2 !== e2 && i.error(`Invalid ${r2} buffer size
 expected: ${e2}, actual: ${t2})`), t2 < e2)
    throw new s$2("buffer-too-small", "Binary buffer is too small", { expectedSize: e2, actualSize: t2 });
}
function y(e2, t2) {
  const n2 = a$1(e2, t2 && t2.header);
  let r2 = n2.byteCount;
  const o2 = { isDraco: false, header: n2, byteOffset: n2.byteCount, byteCount: 0, vertexAttributes: {} }, i2 = n2.fields, u2 = i2.vertexCount != null ? i2.vertexCount : i2.count;
  for (const a2 of t2.ordering) {
    if (!t2.vertexAttributes[a2])
      continue;
    const e3 = __spreadProps(__spreadValues({}, t2.vertexAttributes[a2]), { byteOffset: r2, count: u2 }), n3 = p$2[a2] ? p$2[a2] : "_" + a2;
    o2.vertexAttributes[n3] = e3, r2 += A(e3.valueType) * e3.valuesPerElement * u2;
  }
  const s2 = i2.faceCount;
  if (t2.faces && s2) {
    o2.faces = {};
    for (const e3 of t2.ordering) {
      if (!t2.faces[e3])
        continue;
      const n3 = __spreadProps(__spreadValues({}, t2.faces[e3]), { byteOffset: r2, count: s2 });
      o2.faces[e3] = n3, r2 += A(n3.valueType) * n3.valuesPerElement * s2;
    }
  }
  const c2 = i2.featureCount;
  if (t2.featureAttributes && t2.featureAttributeOrder && c2) {
    o2.featureAttributes = {};
    for (const e3 of t2.featureAttributeOrder) {
      if (!t2.featureAttributes[e3])
        continue;
      const n3 = __spreadProps(__spreadValues({}, t2.featureAttributes[e3]), { byteOffset: r2, count: c2 });
      o2.featureAttributes[e3] = n3;
      r2 += (n3.valueType === "UInt64" ? 8 : A(n3.valueType)) * n3.valuesPerElement * c2;
    }
  }
  return b$1(r2, e2.byteLength, "geometry"), o2.byteCount = r2 - o2.byteOffset, o2;
}
const p$2 = { position: "position", normal: "normal", color: "color", uv0: "uv0", region: "uvRegion" };
function C(e2, t2, u2) {
  if (e2.encoding === "lepcc-rgb")
    return u$2(t2);
  if (e2.encoding === "lepcc-intensity")
    return w(t2);
  if (e2.encoding != null && e2.encoding !== "")
    throw new s$2("unknown-attribute-storage-info-encoding", "Unknown Attribute Storage Info Encoding");
  e2["attributeByteCounts "] && !e2.attributeByteCounts && (i.warn("Warning: Trailing space in 'attributeByteCounts '."), e2.attributeByteCounts = e2["attributeByteCounts "]), e2.ordering[0] === "ObjectIds" && e2.hasOwnProperty("objectIds") && (i.warn("Warning: Case error in objectIds"), e2.ordering[0] = "objectIds");
  const a2 = l(t2, e2, u2);
  b$1(a2.byteOffset + a2.byteCount, t2.byteLength, "attribute");
  const d2 = a2.entries.attributeValues || a2.entries.objectIds;
  if (d2) {
    if (d2.valueType === "String") {
      const e3 = a2.entries.attributeByteCounts, n2 = c$2(t2, e3), r2 = f(t2, d2);
      return s(e3.count, n2, r2);
    }
    return c$2(t2, d2);
  }
  throw new s$2("bad-attribute-storage-info", "Bad attributeStorageInfo specification.");
}
const m$1 = { Float32: Float32Array, Float64: Float64Array, UInt8: Uint8Array, Int8: Int8Array, UInt16: Uint16Array, Int16: Int16Array, UInt32: Uint32Array, Int32: Int32Array }, I = { Float32: (e2, t2) => new DataView(e2, 0).getFloat32(t2, true), Float64: (e2, t2) => new DataView(e2, 0).getFloat64(t2, true), UInt8: (e2, t2) => new DataView(e2, 0).getUint8(t2), Int8: (e2, t2) => new DataView(e2, 0).getInt8(t2), UInt16: (e2, t2) => new DataView(e2, 0).getUint16(t2, true), Int16: (e2, t2) => new DataView(e2, 0).getInt16(t2, true), UInt32: (e2, t2) => new DataView(e2, 0).getUint32(t2, true), Int32: (e2, t2) => new DataView(e2, 0).getInt32(t2, true) };
function h$1(e2) {
  return m$1.hasOwnProperty(e2);
}
function A(e2) {
  return h$1(e2) ? m$1[e2].BYTES_PER_ELEMENT : 0;
}
function u(e2, o2, l2, i2) {
  const { rendererJSON: s2, isRGBRenderer: f2 } = e2;
  let u2 = null, c2 = null;
  if (o2 && f2)
    u2 = o2;
  else if (o2 && s2.type === "pointCloudUniqueValueRenderer") {
    c2 = a$3.fromJSON(s2);
    const e3 = c2.colorUniqueValueInfos;
    u2 = new Uint8Array(3 * i2);
    const r2 = p$1(c2.fieldTransformType);
    for (let t2 = 0; t2 < i2; t2++) {
      const n2 = (r2 ? r2(o2[t2]) : o2[t2]) + "";
      for (let o3 = 0; o3 < e3.length; o3++)
        if (e3[o3].values.indexOf(n2) >= 0) {
          u2[3 * t2] = e3[o3].color.r, u2[3 * t2 + 1] = e3[o3].color.g, u2[3 * t2 + 2] = e3[o3].color.b;
          break;
        }
    }
  } else if (o2 && s2.type === "pointCloudStretchRenderer") {
    c2 = c$4.fromJSON(s2);
    const e3 = c2.stops;
    u2 = new Uint8Array(3 * i2);
    const r2 = p$1(c2.fieldTransformType);
    for (let t2 = 0; t2 < i2; t2++) {
      const n2 = r2 ? r2(o2[t2]) : o2[t2], l3 = e3.length - 1;
      if (n2 < e3[0].value)
        u2[3 * t2] = e3[0].color.r, u2[3 * t2 + 1] = e3[0].color.g, u2[3 * t2 + 2] = e3[0].color.b;
      else if (n2 >= e3[l3].value)
        u2[3 * t2] = e3[l3].color.r, u2[3 * t2 + 1] = e3[l3].color.g, u2[3 * t2 + 2] = e3[l3].color.b;
      else
        for (let o3 = 1; o3 < e3.length; o3++)
          if (n2 < e3[o3].value) {
            const r3 = (n2 - e3[o3 - 1].value) / (e3[o3].value - e3[o3 - 1].value);
            u2[3 * t2] = e3[o3].color.r * r3 + e3[o3 - 1].color.r * (1 - r3), u2[3 * t2 + 1] = e3[o3].color.g * r3 + e3[o3 - 1].color.g * (1 - r3), u2[3 * t2 + 2] = e3[o3].color.b * r3 + e3[o3 - 1].color.b * (1 - r3);
            break;
          }
    }
  } else if (o2 && s2.type === "pointCloudClassBreaksRenderer") {
    c2 = c$5.fromJSON(s2);
    const e3 = c2.colorClassBreakInfos;
    u2 = new Uint8Array(3 * i2);
    const t2 = p$1(c2.fieldTransformType);
    for (let r2 = 0; r2 < i2; r2++) {
      const n2 = t2 ? t2(o2[r2]) : o2[r2];
      for (let o3 = 0; o3 < e3.length; o3++)
        if (n2 >= e3[o3].minValue && n2 <= e3[o3].maxValue) {
          u2[3 * r2] = e3[o3].color.r, u2[3 * r2 + 1] = e3[o3].color.g, u2[3 * r2 + 2] = e3[o3].color.b;
          break;
        }
    }
  } else {
    u2 = new Uint8Array(3 * i2);
    for (let e3 = 0; e3 < u2.length; e3++)
      u2[e3] = 255;
  }
  if (l2 && c2 && c2.colorModulation) {
    const e3 = c2.colorModulation.minValue, o3 = c2.colorModulation.maxValue, r2 = 0.3;
    for (let t2 = 0; t2 < i2; t2++) {
      const n2 = l2[t2], i3 = n2 >= o3 ? 1 : n2 <= e3 ? r2 : r2 + (1 - r2) * (n2 - e3) / (o3 - e3);
      u2[3 * t2] = i3 * u2[3 * t2], u2[3 * t2 + 1] = i3 * u2[3 * t2 + 1], u2[3 * t2 + 2] = i3 * u2[3 * t2 + 2];
    }
  }
  return u2;
}
function c$1(o2, r2) {
  if (o2.encoding == null || o2.encoding === "") {
    const t2 = y(r2, o2);
    if (t$2(t2.vertexAttributes.position))
      return;
    const n2 = c$2(r2, t2.vertexAttributes.position), l2 = t2.header.fields, f2 = [l2.offsetX, l2.offsetY, l2.offsetZ], u2 = [l2.scaleX, l2.scaleY, l2.scaleZ], c2 = n2.length / 3, a2 = new Float64Array(3 * c2);
    for (let e2 = 0; e2 < c2; e2++)
      a2[3 * e2] = n2[3 * e2] * u2[0] + f2[0], a2[3 * e2 + 1] = n2[3 * e2 + 1] * u2[1] + f2[1], a2[3 * e2 + 2] = n2[3 * e2 + 2] * u2[2] + f2[2];
    return a2;
  }
  if (o2.encoding === "lepcc-xyz")
    return c$3(r2).result;
}
function a(e2, r2, t2) {
  return r$2(e2) && e2.attributeInfo.useElevation ? d(r2, t2) : r$2(e2) ? C(e2.attributeInfo.storageInfo, e2.buffer, t2) : null;
}
function d(e2, o2) {
  const r2 = new Float64Array(o2);
  for (let t2 = 0; t2 < o2; t2++)
    r2[t2] = e2[3 * t2 + 2];
  return r2;
}
function m(e2, o2, r2, t2, n2) {
  const l2 = e2.length / 3;
  let i2 = 0;
  for (let s2 = 0; s2 < l2; s2++) {
    let l3 = true;
    for (let e3 = 0; e3 < t2.length && l3; e3++) {
      const { filterJSON: o3 } = t2[e3], r3 = n2[e3].values[s2];
      switch (o3.type) {
        case "pointCloudValueFilter": {
          const e4 = o3.mode === "exclude";
          o3.values.indexOf(r3) !== -1 === e4 && (l3 = false);
          break;
        }
        case "pointCloudBitfieldFilter": {
          const e4 = b(o3.requiredSetBits), t3 = b(o3.requiredClearBits);
          (r3 & e4) === e4 && (r3 & t3) == 0 || (l3 = false);
          break;
        }
        case "pointCloudReturnFilter": {
          const e4 = 15 & r3, t3 = r3 >>> 4 & 15, n3 = t3 > 1, i3 = e4 === 1, s3 = e4 === t3;
          let f2 = false;
          for (const r4 of o3.includedReturns)
            if (r4 === "last" && s3 || r4 === "firstOfMany" && i3 && n3 || r4 === "lastOfMany" && s3 && n3 || r4 === "single" && !n3) {
              f2 = true;
              break;
            }
          f2 || (l3 = false);
          break;
        }
      }
    }
    l3 && (r2[i2] = s2, e2[3 * i2] = e2[3 * s2], e2[3 * i2 + 1] = e2[3 * s2 + 1], e2[3 * i2 + 2] = e2[3 * s2 + 2], o2[3 * i2] = o2[3 * s2], o2[3 * i2 + 1] = o2[3 * s2 + 1], o2[3 * i2 + 2] = o2[3 * s2 + 2], i2++);
  }
  return i2;
}
function p$1(e2) {
  return e2 == null || e2 === "none" ? null : e2 === "low-four-bit" ? (e3) => 15 & e3 : e2 === "high-four-bit" ? (e3) => (240 & e3) >> 4 : e2 === "absolute-value" ? (e3) => Math.abs(e3) : e2 === "modulo-ten" ? (e3) => e3 % 10 : null;
}
function b(e2) {
  let o2 = 0;
  for (const r2 of e2 || [])
    o2 |= 1 << r2;
  return o2;
}
class p {
  transform(e2) {
    const a2 = this._transform(e2), o2 = [a2.points.buffer, a2.rgb.buffer];
    r$2(a2.pointIdFilterMap) && o2.push(a2.pointIdFilterMap.buffer);
    for (const r2 of a2.attributes)
      "buffer" in r2.values && t$3(r2.values.buffer) && r2.values.buffer !== a2.rgb.buffer && o2.push(r2.values.buffer);
    return Promise.resolve({ result: a2, transferList: o2 });
  }
  _transform(t2) {
    const a$12 = c$1(t2.schema, t2.geometryBuffer);
    let o2 = a$12.length / 3, f2 = null;
    const i2 = [], n2 = a(t2.primaryAttributeData, a$12, o2);
    r$2(t2.primaryAttributeData) && n2 && i2.push({ attributeInfo: t2.primaryAttributeData.attributeInfo, values: n2 });
    const s2 = a(t2.modulationAttributeData, a$12, o2);
    r$2(t2.modulationAttributeData) && s2 && i2.push({ attributeInfo: t2.modulationAttributeData.attributeInfo, values: s2 });
    let p2 = u(t2.rendererInfo, n2, s2, o2);
    if (t2.filterInfo && t2.filterInfo.length > 0 && r$2(t2.filterAttributesData)) {
      const r2 = t2.filterAttributesData.map((t3) => {
        const r3 = a(t3, a$12, o2), e2 = { attributeInfo: t3.attributeInfo, values: r3 };
        return i2.push(e2), e2;
      });
      f2 = new Uint32Array(o2), o2 = m(a$12, p2, f2, t2.filterInfo, r2);
    }
    for (const r2 of t2.userAttributesData) {
      const t3 = a(r2, a$12, o2);
      i2.push({ attributeInfo: r2.attributeInfo, values: t3 });
    }
    3 * o2 < p2.length && (p2 = new Uint8Array(p2.buffer.slice(0, 3 * o2))), this._applyElevationOffsetInPlace(a$12, o2, t2.elevationOffset);
    const c2 = this._transformCoordinates(a$12, o2, t2.obb, k.fromJSON(t2.inSR), k.fromJSON(t2.outSR));
    return { obb: t2.obb, points: c2, rgb: p2, attributes: i2, pointIdFilterMap: f2 };
  }
  _transformCoordinates(t2, r2, e2, s2, u2) {
    if (!xn(t2, s2, 0, t2, u2, 0, r2))
      throw Error("Can't reproject");
    const l2 = t$4(e2.center[0], e2.center[1], e2.center[2]), b2 = n$3(), m2 = n$3();
    w$1(c, e2.quaternion);
    const p2 = new Float32Array(3 * r2);
    for (let o2 = 0; o2 < r2; o2++)
      b2[0] = t2[3 * o2] - l2[0], b2[1] = t2[3 * o2 + 1] - l2[1], b2[2] = t2[3 * o2 + 2] - l2[2], P(m2, b2, c), e2.halfSize[0] = Math.max(e2.halfSize[0], Math.abs(m2[0])), e2.halfSize[1] = Math.max(e2.halfSize[1], Math.abs(m2[1])), e2.halfSize[2] = Math.max(e2.halfSize[2], Math.abs(m2[2])), p2[3 * o2] = b2[0], p2[3 * o2 + 1] = b2[1], p2[3 * o2 + 2] = b2[2];
    return p2;
  }
  _applyElevationOffsetInPlace(t2, r2, e2) {
    if (e2 !== 0)
      for (let a2 = 0; a2 < r2; a2++)
        t2[3 * a2 + 2] += e2;
  }
}
const c = r$1();
function h() {
  return new p();
}
export default h;
