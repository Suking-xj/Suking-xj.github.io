var __defProp = Object.defineProperty;
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
import { n as n$2 } from "./vec4f32.6de15d07.js";
import { cR as o$3, f8 as v$1, f9 as p$1, fa as z$1, fb as e$5 } from "./vendor.74d5941c.js";
import { S as S$1 } from "./definitions.6737c10c.js";
class t$6 {
  constructor(t2) {
    this._array = [], t2 <= 0 && console.error("strideInBytes must be positive!"), this._stride = t2;
  }
  get array() {
    return this._array;
  }
  get index() {
    return 4 * this._array.length / this._stride;
  }
  get itemSize() {
    return this._stride;
  }
  get sizeInBytes() {
    return 4 * this._array.length;
  }
  reset() {
    this.array.length = 0;
  }
  toBuffer() {
    return new Uint32Array(this._array).buffer;
  }
  static i1616to32(t2, r2) {
    return 65535 & t2 | r2 << 16;
  }
  static i8888to32(t2, r2, e2, i2) {
    return 255 & t2 | (255 & r2) << 8 | (255 & e2) << 16 | i2 << 24;
  }
  static i8816to32(t2, r2, e2) {
    return 255 & t2 | (255 & r2) << 8 | e2 << 16;
  }
}
class o$2 {
  constructor(e2) {
    this._color = n$2(), this._key = e2;
  }
  get key() {
    return this._key;
  }
  get type() {
    return 7 & this._key;
  }
  defines() {
    return [];
  }
  getStride() {
    return this._layoutInfo || this._buildAttributesInfo(), this._stride;
  }
  getAttributeLocations() {
    return this._locations || this._buildAttributesInfo(), this._locations;
  }
  getLayoutInfo() {
    return this._layoutInfo || this._buildAttributesInfo(), this._layoutInfo;
  }
  getEncodingInfos() {
    return this._propertyEncodingInfo || this._buildAttributesInfo(), this._propertyEncodingInfo;
  }
  getUniforms() {
    return this._uniforms || this._buildAttributesInfo(), this._uniforms;
  }
  getShaderHeader() {
    return this._shaderHeader || this._buildAttributesInfo(), this._shaderHeader;
  }
  getShaderMain() {
    return this._shaderMain || this._buildAttributesInfo(), this._shaderMain;
  }
  setDataUniforms(t2, e2, o2, n2) {
    const s = this.getUniforms();
    for (const r2 in s) {
      const i2 = s[r2];
      switch (i2.type) {
        case "float":
          t2.setUniform1f(i2.name, i2.getValue(o2, e2, n2));
          break;
        case "vec2":
          t2.setUniform2fv(i2.name, i2.getValue(o2, e2, n2));
          break;
        case "vec4": {
          const s2 = i2.getValue(o2, e2, n2), r3 = s2[3];
          this._color[0] = r3 * s2[0], this._color[1] = r3 * s2[1], this._color[2] = r3 * s2[2], this._color[3] = r3, t2.setUniform4fv(i2.name, this._color);
        }
      }
    }
  }
  encodeAttributes(t2, e2, o2) {
    const n2 = this.attributesInfo(), s = this.getEncodingInfos(), r2 = [];
    for (const a2 of Object.keys(s)) {
      var i2;
      const c2 = s[a2], { type: u2, precisionFactor: f2, isLayout: h2 } = n2[a2], d2 = h2 ? o2.getLayoutProperty(a2) : o2.getPaintProperty(a2), l2 = (i2 = d2.interpolator) == null ? void 0 : i2.getInterpolationRange(e2);
      let _2 = 0;
      for (const o3 of c2) {
        o3.dataIndex >= r2.length && r2.push(0);
        const n3 = d2.getValue(l2 ? l2[_2] : e2, t2);
        switch (u2) {
          case 0:
            r2[o3.dataIndex] |= this._encodeByte(n3 * (f2 || 1), 8 * o3.offset);
            break;
          case 1:
            r2[o3.dataIndex] |= this._encodeByte(n3 * (f2 || 1) + 128, 8 * o3.offset);
            break;
          case 2:
            r2[o3.dataIndex] = this._encodeColor(n3);
            break;
          default:
            throw new Error("Unsupported encoding type");
        }
        ++_2;
      }
    }
    return r2;
  }
  getAtributeState(t2) {
    let e2 = 0;
    const o2 = 3 + 2 * t2;
    return e2 |= this._bit(o2), e2 |= this._bit(o2 + 1) << 1, e2;
  }
  _buildAttributesInfo() {
    const t2 = [], e2 = {}, n2 = {};
    let s = -1;
    const r2 = this.attributesInfo(), i2 = this.attributes();
    let a2 = -1;
    for (const d2 of i2) {
      ++a2;
      const i3 = this.getAtributeState(a2);
      if (i3 === 0)
        continue;
      const c3 = r2[d2], u3 = [];
      e2[d2] = u3;
      const f3 = c3.type;
      for (let e3 = 0; e3 < i3; ++e3) {
        const { dataType: e4, bytesPerElement: r3, count: i4, normalized: a3 } = o$2._encodingInfo[f3], c4 = e4 << 2 | i4;
        let h3 = n2[c4];
        h3 && h3.offset !== 4 || (++s, n2[c4] = h3 = { dataIndex: s, offset: 0 }, t2.push({ location: -1, name: "a_data_" + s, count: 4 / r3, type: e4, normalized: a3 })), u3.push({ dataIndex: h3.dataIndex, offset: h3.offset }), h3.offset += r3 * i4;
      }
    }
    this._buildVertexBufferLayout(t2);
    const c2 = {};
    let u2 = 0;
    const f2 = this._layoutInfo.geometry;
    for (const o2 of f2)
      c2[o2.name] = u2++;
    const h2 = this._layoutInfo.opacity;
    if (h2)
      for (const o2 of h2)
        c2[o2.name] = u2++;
    this._buildShaderInfo(t2, e2), this._propertyEncodingInfo = e2, this._locations = c2;
  }
  _buildVertexBufferLayout(t2) {
    const e2 = {}, o2 = this.geometryInfo();
    let s = o2[0].stride;
    if (t2.length === 0)
      e2.geometry = o2;
    else {
      const r2 = [];
      let i2 = s;
      s += 4 * t2.length;
      for (const t3 of o2) {
        const e3 = __spreadValues({}, t3);
        e3.stride = s, r2.push(e3);
      }
      for (const e3 of t2)
        r2.push({ name: e3.name, count: e3.count, type: e3.type, offset: i2, stride: s, normalized: e3.normalized || false, divisor: 0 }), i2 += n$1(e3.type) * e3.count;
      e2.geometry = r2;
    }
    this.opacityInfo() && (e2.opacity = this.opacityInfo()), this._layoutInfo = e2, this._stride = s;
  }
  _buildShaderInfo(t2, e2) {
    let n2 = "\n", s = "\n";
    const r2 = [];
    for (const o2 of t2)
      n2 += `attribute ${this._getType(o2.count)} ${o2.name};
`;
    const i2 = this.attributes(), a2 = this.attributesInfo();
    let c2 = -1;
    for (const u2 of i2) {
      ++c2;
      const { name: t3, type: i3, precisionFactor: f2, isLayout: h2 } = a2[u2], d2 = f2 && f2 !== 1 ? " * " + 1 / f2 : "", { bytesPerElement: l2, count: _2 } = o$2._encodingInfo[i3], y2 = (t4) => {
        const e3 = i3 === 2 ? "" : `[${t4.offset / l2}]`;
        return `a_data_${t4.dataIndex}${e3}`;
      };
      switch (this.getAtributeState(c2)) {
        case 0:
          {
            const e3 = this._getType(_2), o2 = `u_${t3}`;
            r2.push({ name: o2, type: e3, getValue: (t4, e4) => h2 ? t4.getLayoutValue(u2, e4) : t4.getPaintValue(u2, e4) }), n2 += `uniform ${e3} ${o2};
`, s += `${e3} ${t3} = ${o2};
`;
          }
          break;
        case 1:
          {
            const o2 = y2(e2[u2][0]);
            s += `${this._getType(_2)} ${t3} = ${o2}${d2};
`;
          }
          break;
        case 2: {
          const o2 = `u_t_${t3}`;
          r2.push({ name: o2, type: "float", getValue: (t4, e3, o3) => (h2 ? t4.getLayoutProperty(u2) : t4.getPaintProperty(u2)).interpolator.interpolationUniformValue(o3, e3) }), n2 += `uniform float ${o2};
`;
          const i4 = y2(e2[u2][0]), a3 = y2(e2[u2][1]);
          s += `${this._getType(_2)} ${t3} = mix(${i4}${d2}, ${a3}${d2}, ${o2});
`;
        }
      }
    }
    this._shaderHeader = n2, this._shaderMain = s, this._uniforms = r2;
  }
  _bit(t2) {
    return (this._key & 1 << t2) >> t2;
  }
  _getType(t2) {
    switch (t2) {
      case 1:
        return "float";
      case 2:
        return "vec2";
      case 4:
        return "vec4";
    }
    throw new Error("Invalid count");
  }
  _encodeColor(t2) {
    const o2 = 255 * t2[3];
    return t$6.i8888to32(t2[0] * o2, t2[1] * o2, t2[2] * o2, o2);
  }
  _encodeByte(t2, e2) {
    return (255 & t2) << e2;
  }
}
o$2._encodingInfo = [{ dataType: 5121, bytesPerElement: 1, count: 1, normalized: false }, { dataType: 5121, bytesPerElement: 1, count: 1, normalized: false }, { dataType: 5121, bytesPerElement: 1, count: 4, normalized: true }];
const n$1 = (t2) => {
  switch (t2) {
    case 5126:
    case 5124:
    case 5125:
      return 4;
    case 5122:
    case 5123:
      return 2;
    case 5120:
    case 5121:
      return 1;
  }
};
class r$3 extends o$2 {
  constructor(t2) {
    super(t2);
  }
  geometryInfo() {
    return r$3.GEOMETRY_LAYOUT;
  }
  opacityInfo() {
    return null;
  }
  attributes() {
    return r$3.ATTRIBUTES;
  }
  attributesInfo() {
    return r$3.ATTRIBUTES_INFO;
  }
}
r$3.ATTRIBUTES = [], r$3.GEOMETRY_LAYOUT = [{ name: "a_pos", count: 2, type: 5120, offset: 0, stride: 2, normalized: false, divisor: 0 }], r$3.ATTRIBUTES_INFO = {};
class e$4 extends o$2 {
  constructor(r2) {
    super(r2);
  }
  geometryInfo() {
    return e$4.GEOMETRY_LAYOUT;
  }
  opacityInfo() {
    return null;
  }
  attributes() {
    return e$4.ATTRIBUTES;
  }
  attributesInfo() {
    return e$4.ATTRIBUTES_INFO;
  }
}
e$4.ATTRIBUTES = ["circle-radius", "circle-color", "circle-opacity", "circle-stroke-width", "circle-stroke-color", "circle-stroke-opacity", "circle-blur"], e$4.GEOMETRY_LAYOUT = [{ name: "a_pos", count: 2, type: 5122, offset: 0, stride: 4, normalized: false, divisor: 0 }], e$4.ATTRIBUTES_INFO = { "circle-radius": { name: "radius", type: 0 }, "circle-color": { name: "color", type: 2 }, "circle-opacity": { name: "opacity", type: 0, precisionFactor: 100 }, "circle-stroke-width": { name: "stroke_width", type: 0, precisionFactor: 4 }, "circle-stroke-color": { name: "stroke_color", type: 2 }, "circle-stroke-opacity": { name: "stroke_opacity", type: 0, precisionFactor: 100 }, "circle-blur": { name: "blur", type: 0, precisionFactor: 32 } };
class t$5 extends o$2 {
  constructor(o2) {
    super(o2);
  }
  geometryInfo() {
    return t$5.GEOMETRY_LAYOUT;
  }
  opacityInfo() {
    return null;
  }
  attributes() {
    return t$5.ATTRIBUTES;
  }
  attributesInfo() {
    return t$5.ATTRIBUTES_INFO;
  }
}
t$5.ATTRIBUTES = ["fill-color", "fill-opacity"], t$5.GEOMETRY_LAYOUT = [{ name: "a_pos", count: 2, type: 5122, offset: 0, stride: 4, normalized: false, divisor: 0 }], t$5.ATTRIBUTES_INFO = { "fill-color": { name: "color", type: 2 }, "fill-opacity": { name: "opacity", type: 0, precisionFactor: 100 } };
class e$3 extends o$2 {
  constructor(o2, t2) {
    super(o2), this.usefillColor = t2;
  }
  geometryInfo() {
    return e$3.GEOMETRY_LAYOUT;
  }
  opacityInfo() {
    return null;
  }
  attributes() {
    return this.usefillColor ? e$3.ATTRIBUTES_FILL : e$3.ATTRIBUTES_OUTLINE;
  }
  attributesInfo() {
    return this.usefillColor ? e$3.ATTRIBUTES_INFO_FILL : e$3.ATTRIBUTES_INFO_OUTLINE;
  }
}
e$3.ATTRIBUTES_OUTLINE = ["fill-outline-color", "fill-opacity"], e$3.ATTRIBUTES_FILL = ["fill-color", "fill-opacity"], e$3.GEOMETRY_LAYOUT = [{ name: "a_pos", count: 2, type: 5122, offset: 0, stride: 8, normalized: false, divisor: 0 }, { name: "a_offset", count: 2, type: 5120, offset: 4, stride: 8, normalized: false, divisor: 0 }, { name: "a_xnormal", count: 2, type: 5120, offset: 6, stride: 8, normalized: false, divisor: 0 }], e$3.ATTRIBUTES_INFO_OUTLINE = { "fill-outline-color": { name: "color", type: 2 }, "fill-opacity": { name: "opacity", type: 0, precisionFactor: 100 } }, e$3.ATTRIBUTES_INFO_FILL = { "fill-color": { name: "color", type: 2 }, "fill-opacity": { name: "opacity", type: 0, precisionFactor: 100 } };
class t$4 extends o$2 {
  constructor(e2) {
    super(e2);
  }
  geometryInfo() {
    return t$4.GEOMETRY_LAYOUT;
  }
  opacityInfo() {
    return null;
  }
  attributes() {
    return t$4.ATTRIBUTES;
  }
  attributesInfo() {
    return t$4.ATTRIBUTES_INFO;
  }
}
t$4.ATTRIBUTES = ["line-blur", "line-color", "line-gap-width", "line-offset", "line-opacity", "line-width"], t$4.GEOMETRY_LAYOUT = [{ name: "a_pos", count: 2, type: 5122, offset: 0, stride: 12, normalized: false, divisor: 0 }, { name: "a_offsetAndNormal", count: 4, type: 5120, offset: 4, stride: 12, normalized: false, divisor: 0 }, { name: "a_accumulatedDistance", count: 2, type: 5123, offset: 8, stride: 12, normalized: false, divisor: 0 }], t$4.ATTRIBUTES_INFO = { "line-width": { name: "width", type: 0, precisionFactor: 2 }, "line-gap-width": { name: "gap_width", type: 0, precisionFactor: 2 }, "line-offset": { name: "offset", type: 1, precisionFactor: 2 }, "line-color": { name: "color", type: 2 }, "line-opacity": { name: "opacity", type: 0, precisionFactor: 100 }, "line-blur": { name: "blur", type: 0, precisionFactor: 4 } };
const t$3 = [{ name: "a_pos", count: 2, type: 5122, offset: 0, stride: 16, normalized: false, divisor: 0 }, { name: "a_vertexOffset", count: 2, type: 5122, offset: 4, stride: 16, normalized: false, divisor: 0 }, { name: "a_texAngleRange", count: 4, type: 5121, offset: 8, stride: 16, normalized: false, divisor: 0 }, { name: "a_levelInfo", count: 4, type: 5121, offset: 12, stride: 16, normalized: false, divisor: 0 }], e$2 = [{ name: "a_opacityInfo", count: 1, type: 5121, offset: 0, stride: 1, normalized: false, divisor: 0 }];
class r$2 extends o$2 {
  constructor(o2) {
    super(o2);
  }
  geometryInfo() {
    return t$3;
  }
  opacityInfo() {
    return e$2;
  }
  attributes() {
    return r$2.ATTRIBUTES;
  }
  attributesInfo() {
    return r$2.ATTRIBUTES_INFO;
  }
}
r$2.ATTRIBUTES = ["icon-color", "icon-opacity", "icon-halo-blur", "icon-halo-color", "icon-halo-width", "icon-size"], r$2.ATTRIBUTES_INFO = { "icon-color": { name: "color", type: 2 }, "icon-opacity": { name: "opacity", type: 0, precisionFactor: 100 }, "icon-halo-color": { name: "halo_color", type: 2 }, "icon-halo-width": { name: "halo_width", type: 0, precisionFactor: 4 }, "icon-halo-blur": { name: "halo_blur", type: 0, precisionFactor: 4 }, "icon-size": { name: "size", type: 0, precisionFactor: 32, isLayout: true } };
class i$1 extends o$2 {
  constructor(o2) {
    super(o2);
  }
  geometryInfo() {
    return t$3;
  }
  opacityInfo() {
    return e$2;
  }
  attributes() {
    return i$1.ATTRIBUTES;
  }
  attributesInfo() {
    return i$1.ATTRIBUTES_INFO;
  }
}
i$1.ATTRIBUTES = ["text-color", "text-opacity", "text-halo-blur", "text-halo-color", "text-halo-width", "text-size"], i$1.ATTRIBUTES_INFO = { "text-color": { name: "color", type: 2 }, "text-opacity": { name: "opacity", type: 0, precisionFactor: 100 }, "text-halo-color": { name: "halo_color", type: 2 }, "text-halo-width": { name: "halo_width", type: 0, precisionFactor: 4 }, "text-halo-blur": { name: "halo_blur", type: 0, precisionFactor: 4 }, "text-size": { name: "size", type: 0, isLayout: true } };
const r$1 = { kind: "null" }, e$1 = { kind: "number" }, t$2 = { kind: "string" }, i = { kind: "boolean" }, o$1 = { kind: "color" }, f$2 = { kind: "object" }, u = { kind: "value" };
function a$2(n2, r2) {
  return { kind: "array", itemType: n2, n: r2 };
}
const y$2 = [r$1, e$1, t$2, i, o$1, f$2, a$2(u)];
function k$1(n2) {
  if (n2.kind === "array") {
    const r2 = k$1(n2.itemType);
    return typeof n2.n == "number" ? `array<${r2}, ${n2.n}>` : n2.itemType.kind === "value" ? "array" : `array<${r2}>`;
  }
  return n2.kind;
}
function l(y2) {
  if (y2 === null)
    return r$1;
  if (typeof y2 == "string")
    return t$2;
  if (typeof y2 == "boolean")
    return i;
  if (typeof y2 == "number")
    return e$1;
  if (y2 instanceof o$3)
    return o$1;
  if (Array.isArray(y2)) {
    let n2;
    for (const r2 of y2) {
      const e2 = l(r2);
      if (n2) {
        if (n2 !== e2) {
          n2 = u;
          break;
        }
      } else
        n2 = e2;
    }
    return a$2(n2 || u, y2.length);
  }
  return typeof y2 == "object" ? f$2 : u;
}
function c$1(n2, r2) {
  if (r2.kind === "array")
    return n2.kind === "array" && (n2.n === 0 && n2.itemType.kind === "value" || c$1(n2.itemType, r2.itemType)) && (typeof r2.n != "number" || r2.n === n2.n);
  if (r2.kind === "value") {
    for (const e2 of y$2)
      if (c$1(n2, e2))
        return true;
  }
  return r2.kind === n2.kind;
}
function d$2(r2) {
  if (r2 === null)
    return "";
  const e2 = typeof r2;
  return e2 === "string" ? r2 : e2 === "number" || e2 === "boolean" ? String(r2) : r2 instanceof o$3 ? r2.toString() : JSON.stringify(r2);
}
const n = Number.POSITIVE_INFINITY, t$1 = Math.PI, r = 2 * t$1, o = 128 / t$1, f$1 = t$1 / 180, N$1 = 1 / Math.LN2;
function a$1(n2, t2) {
  return (n2 %= t2) >= 0 ? n2 : n2 + t2;
}
function h$1(n2) {
  return a$1(n2 * o, 256);
}
function P$2(n2) {
  return Math.log(n2) * N$1;
}
function b$1(n2, t2, r2) {
  return n2 * (1 - r2) + t2 * r2;
}
class y$1 {
  constructor(t2) {
    this.parent = t2, this.vars = {};
  }
  add(t2, e2) {
    this.vars[t2] = e2;
  }
  get(t2) {
    return this.vars[t2] ? this.vars[t2] : this.parent ? this.parent.get(t2) : null;
  }
}
class v {
  constructor() {
    this.type = u;
  }
  static parse(t2) {
    if (t2.length > 1)
      throw new Error('"id" does not expect arguments');
    return new v();
  }
  evaluate(t2, e2) {
    return t2.id || null;
  }
}
class b {
  constructor() {
    this.type = t$2;
  }
  static parse(t2) {
    if (t2.length > 1)
      throw new Error('"geometry-type" does not expect arguments');
    return new b();
  }
  evaluate(t2, e2) {
    switch (t2.type) {
      case 1:
        return "Point";
      case 2:
        return "LineString";
      case 3:
        return "Polygon";
      default:
        return null;
    }
  }
}
class d$1 {
  constructor() {
    this.type = f$2;
  }
  static parse(t2) {
    if (t2.length > 1)
      throw new Error('"properties" does not expect arguments');
    return new d$1();
  }
  evaluate(t2, e2) {
    return t2.values;
  }
}
class x {
  constructor() {
    this.type = e$1;
  }
  static parse(t2) {
    if (t2.length > 1)
      throw new Error('"zoom" does not expect arguments');
    return new x();
  }
  evaluate(t2, e2) {
    return e2;
  }
}
class E {
  constructor(t2, e2, r2) {
    this.lhs = t2, this.rhs = e2, this.compare = r2, this.type = i;
  }
  static parse(t2, e2, r2) {
    if (t2.length !== 3 && t2.length !== 4)
      throw new Error(`"${t2[0]}" expects 2 or 3 arguments`);
    if (t2.length === 4)
      throw new Error(`"${t2[0]}" collator not supported`);
    return new E(ht(t2[1], e2), ht(t2[2], e2), r2);
  }
  evaluate(t2, e2) {
    return this.compare(this.lhs.evaluate(t2, e2), this.rhs.evaluate(t2, e2));
  }
}
class $ extends E {
  static parse(t2, e2) {
    return E.parse(t2, e2, (t3, e3) => t3 === e3);
  }
}
class M extends E {
  static parse(t2, e2) {
    return E.parse(t2, e2, (t3, e3) => t3 !== e3);
  }
}
class k extends E {
  static parse(t2, e2) {
    return E.parse(t2, e2, (t3, e3) => t3 < e3);
  }
}
class A extends E {
  static parse(t2, e2) {
    return E.parse(t2, e2, (t3, e3) => t3 <= e3);
  }
}
class j extends E {
  static parse(t2, e2) {
    return E.parse(t2, e2, (t3, e3) => t3 > e3);
  }
}
class q extends E {
  static parse(t2, e2) {
    return E.parse(t2, e2, (t3, e3) => t3 >= e3);
  }
}
class N {
  constructor(t2) {
    this.arg = t2, this.type = i;
  }
  static parse(t2, e2) {
    if (t2.length !== 2)
      throw new Error('"!" expects 1 argument');
    return new N(ht(t2[1], e2));
  }
  evaluate(t2, e2) {
    return !this.arg.evaluate(t2, e2);
  }
}
class _ {
  constructor(t2) {
    this.args = t2, this.type = i;
  }
  static parse(t2, e2) {
    const r2 = [];
    for (let s = 1; s < t2.length; s++)
      r2.push(ht(t2[s], e2));
    return new _(r2);
  }
  evaluate(t2, e2) {
    for (const r2 of this.args)
      if (!r2.evaluate(t2, e2))
        return false;
    return true;
  }
}
class R {
  constructor(t2) {
    this.args = t2, this.type = i;
  }
  static parse(t2, e2) {
    const r2 = [];
    for (let s = 1; s < t2.length; s++)
      r2.push(ht(t2[s], e2));
    return new R(r2);
  }
  evaluate(t2, e2) {
    for (const r2 of this.args)
      if (r2.evaluate(t2, e2))
        return true;
    return false;
  }
}
class C {
  constructor(t2) {
    this.args = t2, this.type = i;
  }
  static parse(t2, e2) {
    const r2 = [];
    for (let s = 1; s < t2.length; s++)
      r2.push(ht(t2[s], e2));
    return new C(r2);
  }
  evaluate(t2, e2) {
    for (const r2 of this.args)
      if (r2.evaluate(t2, e2))
        return false;
    return true;
  }
}
class z {
  constructor(t2, e2, r2) {
    this.type = t2, this.args = e2, this.fallback = r2;
  }
  static parse(t2, e2, r2) {
    if (t2.length < 4)
      throw new Error('"case" expects at least 3 arguments');
    if (t2.length % 2 == 1)
      throw new Error('"case" expects an odd number of arguments');
    let s;
    const n2 = [];
    for (let o2 = 1; o2 < t2.length - 1; o2 += 2) {
      const a3 = ht(t2[o2], e2), i2 = ht(t2[o2 + 1], e2, r2);
      s || (s = i2.type), n2.push({ condition: a3, output: i2 });
    }
    const a2 = ht(t2[t2.length - 1], e2, r2);
    return s || (s = a2.type), new z(s, n2, a2);
  }
  evaluate(t2, e2) {
    for (const r2 of this.args)
      if (r2.condition.evaluate(t2, e2))
        return r2.output.evaluate(t2, e2);
    return this.fallback.evaluate(t2, e2);
  }
}
class I {
  constructor(t2, e2) {
    this.type = t2, this.args = e2;
  }
  static parse(t2, e2) {
    if (t2.length < 2)
      throw new Error('"coalesce" expects at least 1 argument');
    let r2;
    const s = [];
    for (let n2 = 1; n2 < t2.length; n2++) {
      const a2 = ht(t2[n2], e2);
      r2 || (r2 = a2.type), s.push(a2);
    }
    return new I(r2, s);
  }
  evaluate(t2, e2) {
    for (const r2 of this.args) {
      const s = r2.evaluate(t2, e2);
      if (s !== null)
        return s;
    }
    return null;
  }
}
class L {
  constructor(t2, e2, r2, s, n2) {
    this.type = t2, this.input = e2, this.labels = r2, this.outputs = s, this.fallback = n2;
  }
  static parse(t2, e2) {
    if (t2.length < 3)
      throw new Error('"match" expects at least 3 arguments');
    if (t2.length % 2 == 0)
      throw new Error('"case" expects an even number of arguments');
    let r2;
    const s = ht(t2[1], e2), n2 = [], a2 = {};
    let o2;
    for (let i2 = 2; i2 < t2.length - 1; i2 += 2) {
      let s2 = t2[i2];
      Array.isArray(s2) || (s2 = [s2]);
      for (const t3 of s2) {
        const e3 = typeof t3;
        if (e3 !== "string" && e3 !== "number")
          throw new Error('"match" requires string or number literal as labels');
        if (o2) {
          if (e3 !== o2)
            throw new Error('"match" requires labels to have the same type');
        } else
          o2 = e3;
        a2[t3] = n2.length;
      }
      const l2 = ht(t2[i2 + 1], e2);
      r2 || (r2 = l2.type), n2.push(l2);
    }
    return new L(r2, s, a2, n2, ht(t2[t2.length - 1], e2));
  }
  evaluate(t2, e2) {
    const r2 = this.input.evaluate(t2, e2);
    return (this.outputs[this.labels[r2]] || this.fallback).evaluate(t2, e2);
  }
}
class U {
  constructor(t2, e2, r2, s, n2) {
    this.operator = t2, this.type = e2, this.interpolation = r2, this.input = s, this.stops = n2;
  }
  static parse(t2, e2, r2) {
    const s = t2[0];
    if (t2.length < 5)
      throw new Error(`"${s}" expects at least 4 arguments`);
    const n2 = t2[1];
    if (!Array.isArray(n2) || n2.length === 0)
      throw new Error(`"${n2}" is not a valid interpolation`);
    switch (n2[0]) {
      case "linear":
        if (n2.length !== 1)
          throw new Error("Linear interpolation cannot have parameters");
        break;
      case "exponential":
        if (n2.length !== 2 || typeof n2[1] != "number")
          throw new Error("Exponential interpolation requires one numeric argument");
        break;
      case "cubic-bezier":
        if (n2.length !== 5)
          throw new Error("Cubic bezier interpolation requires four numeric arguments with values between 0 and 1");
        for (let t3 = 1; t3 < 5; t3++) {
          const e3 = n2[t3];
          if (typeof e3 != "number" || e3 < 0 || e3 > 1)
            throw new Error("Cubic bezier interpolation requires four numeric arguments with values between 0 and 1");
        }
        break;
      default:
        throw new Error(`"${t2[0]}" unknown interpolation type "${n2[0]}"`);
    }
    if (t2.length % 2 != 1)
      throw new Error(`"${s}" expects an even number of arguments`);
    const a2 = ht(t2[2], e2, e$1);
    let o2;
    s === "interpolate-hcl" || s === "interpolate-lab" ? o2 = o$1 : r2 && r2.kind !== "value" && (o2 = r2);
    const i2 = [];
    for (let l2 = 3; l2 < t2.length; l2 += 2) {
      const r3 = t2[l2];
      if (typeof r3 != "number")
        throw new Error(`"${s}" requires stop inputs as literal numbers`);
      if (i2.length && i2[i2.length - 1][0] >= r3)
        throw new Error(`"${s}" requires strictly ascending stop inputs`);
      const n3 = ht(t2[l2 + 1], e2, o2);
      o2 || (o2 = n3.type), i2.push([r3, n3]);
    }
    if (o2 && o2 !== o$1 && o2 !== e$1 && (o2.kind !== "array" || o2.itemType !== e$1))
      throw new Error(`"${s}" cannot interpolate type ${k$1(o2)}`);
    return new U(s, o2, n2, a2, i2);
  }
  evaluate(n2, o2) {
    const i2 = this.stops;
    if (i2.length === 1)
      return i2[0][1].evaluate(n2, o2);
    const l2 = this.input.evaluate(n2, o2);
    if (l2 <= i2[0][0])
      return i2[0][1].evaluate(n2, o2);
    if (l2 >= i2[i2.length - 1][0])
      return i2[i2.length - 1][1].evaluate(n2, o2);
    let u2 = 0;
    for (; ++u2 < i2.length && !(l2 < i2[u2][0]); )
      ;
    const c2 = i2[u2 - 1][0], h2 = i2[u2][0], g2 = U.interpolationRatio(this.interpolation, l2, c2, h2), f2 = i2[u2 - 1][1].evaluate(n2, o2), w = i2[u2][1].evaluate(n2, o2);
    if (this.operator === "interpolate") {
      if (this.type.kind === "array" && Array.isArray(f2) && Array.isArray(w))
        return f2.map((t2, e2) => b$1(t2, w[e2], g2));
      if (this.type.kind === "color" && f2 instanceof o$3 && w instanceof o$3) {
        const e2 = new o$3(f2), r2 = new o$3(w);
        return new o$3([b$1(e2.r, r2.r, g2), b$1(e2.g, r2.g, g2), b$1(e2.b, r2.b, g2), b$1(e2.a, r2.a, g2)]);
      }
      if (this.type.kind === "number" && typeof f2 == "number" && typeof w == "number")
        return b$1(f2, w, g2);
      throw new Error(`"${this.operator}" cannot interpolate type ${k$1(this.type)}`);
    }
    if (this.operator === "interpolate-hcl") {
      const s = v$1(f2), n3 = v$1(w), o3 = n3.h - s.h, i3 = p$1({ h: s.h + g2 * (o3 > 180 || o3 < -180 ? o3 - 360 * Math.round(o3 / 360) : o3), c: b$1(s.c, n3.c, g2), l: b$1(s.l, n3.l, g2) });
      return new o$3(__spreadValues({ a: b$1(f2.a, w.a, g2) }, i3));
    }
    if (this.operator === "interpolate-lab") {
      const e2 = z$1(f2), n3 = z$1(w), o3 = p$1({ l: b$1(e2.l, n3.l, g2), a: b$1(e2.a, n3.a, g2), b: b$1(e2.b, n3.b, g2) });
      return new o$3(__spreadValues({ a: b$1(f2.a, w.a, g2) }, o3));
    }
    throw new Error(`Unexpected operator "${this.operator}"`);
  }
  interpolationUniformValue(t2, e2) {
    const r2 = this.stops;
    if (r2.length === 1)
      return 0;
    if (t2 >= r2[r2.length - 1][0])
      return 0;
    let s = 0;
    for (; ++s < r2.length && !(t2 < r2[s][0]); )
      ;
    const n2 = r2[s - 1][0], a2 = r2[s][0];
    return U.interpolationRatio(this.interpolation, e2, n2, a2);
  }
  getInterpolationRange(t2) {
    const e2 = this.stops;
    if (e2.length === 1) {
      const t3 = e2[0][0];
      return [t3, t3];
    }
    const r2 = e2[e2.length - 1][0];
    if (t2 >= r2)
      return [r2, r2];
    let s = 0;
    for (; ++s < e2.length && !(t2 < e2[s][0]); )
      ;
    return [e2[s - 1][0], e2[s][0]];
  }
  static interpolationRatio(t2, e2, r2, s) {
    let a2 = 0;
    if (t2[0] === "linear")
      a2 = U.exponentialInterpolationRatio(e2, 1, r2, s);
    else if (t2[0] === "exponential")
      a2 = U.exponentialInterpolationRatio(e2, t2[1], r2, s);
    else if (t2[0] === "cubic-bezier") {
      a2 = e$5(t2[1], t2[2], t2[3], t2[4])(U.exponentialInterpolationRatio(e2, 1, r2, s), 1e-5);
    }
    return a2 < 0 ? a2 = 0 : a2 > 1 && (a2 = 1), a2;
  }
  static exponentialInterpolationRatio(t2, e2, r2, s) {
    const n2 = s - r2;
    if (n2 === 0)
      return 0;
    const a2 = t2 - r2;
    return e2 === 1 ? a2 / n2 : (__pow(e2, a2) - 1) / (__pow(e2, n2) - 1);
  }
}
class B {
  constructor(t2, e2, r2) {
    this.type = t2, this.input = e2, this.stops = r2;
  }
  static parse(t2, e2) {
    if (t2.length < 5)
      throw new Error('"step" expects at least 4 arguments');
    if (t2.length % 2 != 1)
      throw new Error('"step" expects an even number of arguments');
    const r2 = ht(t2[1], e2, e$1);
    let s;
    const n2 = [];
    n2.push([-1 / 0, ht(t2[2], e2)]);
    for (let a2 = 3; a2 < t2.length; a2 += 2) {
      const r3 = t2[a2];
      if (typeof r3 != "number")
        throw new Error('"step" requires stop inputs as literal numbers');
      if (n2.length && n2[n2.length - 1][0] >= r3)
        throw new Error('"step" requires strictly ascending stop inputs');
      const o2 = ht(t2[a2 + 1], e2);
      s || (s = o2.type), n2.push([r3, o2]);
    }
    return new B(s, r2, n2);
  }
  evaluate(t2, e2) {
    const r2 = this.stops;
    if (r2.length === 1)
      return r2[0][1].evaluate(t2, e2);
    const s = this.input.evaluate(t2, e2);
    let n2 = 0;
    for (; ++n2 < r2.length && !(s < r2[n2][0]); )
      ;
    return this.stops[n2 - 1][1].evaluate(t2, e2);
  }
}
class S {
  constructor(t2, e2) {
    this.type = t2, this.output = e2;
  }
  static parse(t2, e2, r2) {
    if (t2.length < 4)
      throw new Error('"let" expects at least 3 arguments');
    if (t2.length % 2 == 1)
      throw new Error('"let" expects an odd number of arguments');
    const s = new y$1(e2);
    for (let a2 = 1; a2 < t2.length - 1; a2 += 2) {
      const r3 = t2[a2];
      if (typeof r3 != "string")
        throw new Error(`"let" requires a string to define variable names - found ${r3}`);
      s.add(r3, ht(t2[a2 + 1], e2));
    }
    const n2 = ht(t2[t2.length - 1], s, r2);
    return new S(n2.type, n2);
  }
  evaluate(t2, e2) {
    return this.output.evaluate(t2, e2);
  }
}
class O {
  constructor(t2, e2) {
    this.type = t2, this.output = e2;
  }
  static parse(t2, e2, r2) {
    if (t2.length !== 2 || typeof t2[1] != "string")
      throw new Error('"var" requires just one literal string argument');
    const s = e2.get(t2[1]);
    if (!s)
      throw new Error(`${t2[1]} must be defined before being used in a "var" expression`);
    return new O(r2 || u, s);
  }
  evaluate(t2, e2) {
    return this.output.evaluate(t2, e2);
  }
}
class P$1 {
  constructor(t2, e2, r2) {
    this.type = t2, this.index = e2, this.array = r2;
  }
  static parse(t2, e2) {
    if (t2.length !== 3)
      throw new Error('"at" expects 2 arguments');
    const r2 = ht(t2[1], e2, e$1), s = ht(t2[2], e2);
    return new P$1(s.type.itemType, r2, s);
  }
  evaluate(t2, e2) {
    const r2 = this.index.evaluate(t2, e2), s = this.array.evaluate(t2, e2);
    if (r2 < 0 || r2 >= s.length)
      throw new Error('"at" index out of bounds');
    if (r2 !== Math.floor(r2))
      throw new Error('"at" index must be an integer');
    return s[r2];
  }
}
class T {
  constructor(t2, e2) {
    this.key = t2, this.obj = e2, this.type = u;
  }
  static parse(t2, e2) {
    let r2, s;
    switch (t2.length) {
      case 2:
        return r2 = ht(t2[1], e2), new T(r2);
      case 3:
        return r2 = ht(t2[1], e2), s = ht(t2[2], e2), new T(r2, s);
      default:
        throw new Error('"get" expects 1 or 2 arguments');
    }
  }
  evaluate(t2, e2) {
    const r2 = this.key.evaluate(t2, e2);
    if (this.obj) {
      return this.obj.evaluate(t2, e2)[r2];
    }
    return t2.values[r2];
  }
}
class F {
  constructor(t2, e2) {
    this.key = t2, this.obj = e2, this.type = i;
  }
  static parse(t2, e2) {
    let r2, s;
    switch (t2.length) {
      case 2:
        return r2 = ht(t2[1], e2), new F(r2);
      case 3:
        return r2 = ht(t2[1], e2), s = ht(t2[2], e2), new F(r2, s);
      default:
        throw new Error('"has" expects 1 or 2 arguments');
    }
  }
  evaluate(t2, e2) {
    const r2 = this.key.evaluate(t2, e2);
    if (this.obj) {
      return r2 in this.obj.evaluate(t2, e2);
    }
    return t2.values[r2] !== void 0;
  }
}
class G {
  constructor(t2, e2) {
    this.key = t2, this.vals = e2, this.type = i;
  }
  static parse(t2, e2) {
    if (t2.length !== 3)
      throw new Error('"in" expects 2 arguments');
    return new G(ht(t2[1], e2), ht(t2[2], e2));
  }
  evaluate(t2, e2) {
    const r2 = this.key.evaluate(t2, e2);
    return this.vals.evaluate(t2, e2).indexOf(r2) !== -1;
  }
}
class V {
  constructor(t2, e2, r2) {
    this.item = t2, this.array = e2, this.from = r2, this.type = e$1;
  }
  static parse(t2, e2) {
    if (t2.length < 3 || t2.length > 4)
      throw new Error('"index-of" expects 3 or 4 arguments');
    const r2 = ht(t2[1], e2), s = ht(t2[2], e2);
    if (t2.length === 4) {
      const n2 = ht(t2[3], e2, e$1);
      return new V(r2, s, n2);
    }
    return new V(r2, s);
  }
  evaluate(t2, e2) {
    const r2 = this.item.evaluate(t2, e2), s = this.array.evaluate(t2, e2);
    if (this.from) {
      const n2 = this.from.evaluate(t2, e2);
      if (n2 !== Math.floor(n2))
        throw new Error('"index-of" index must be an integer');
      return s.indexOf(r2, n2);
    }
    return s.indexOf(r2);
  }
}
class D$1 {
  constructor(t2) {
    this.arg = t2, this.type = e$1;
  }
  static parse(t2, e2) {
    if (t2.length !== 2)
      throw new Error('"length" expects 2 arguments');
    const r2 = ht(t2[1], e2);
    return new D$1(r2);
  }
  evaluate(t2, e2) {
    const r2 = this.arg.evaluate(t2, e2);
    if (typeof r2 == "string")
      return r2.length;
    if (Array.isArray(r2))
      return r2.length;
    throw new Error('"length" expects string or array');
  }
}
class H {
  constructor(t2, e2, r2, s) {
    this.type = t2, this.array = e2, this.from = r2, this.to = s;
  }
  static parse(t2, e2) {
    if (t2.length < 3 || t2.length > 4)
      throw new Error('"slice" expects 2 or 3 arguments');
    const r2 = ht(t2[1], e2), s = ht(t2[2], e2, e$1);
    if (s.type !== e$1)
      throw new Error('"slice" index must return a number');
    if (t2.length === 4) {
      const n2 = ht(t2[3], e2, e$1);
      if (n2.type !== e$1)
        throw new Error('"slice" index must return a number');
      return new H(r2.type, r2, s, n2);
    }
    return new H(r2.type, r2, s);
  }
  evaluate(t2, e2) {
    const r2 = this.array.evaluate(t2, e2);
    if (!Array.isArray(r2) && typeof r2 != "string")
      throw new Error('"slice" input must be an array or a string');
    const s = this.from.evaluate(t2, e2);
    if (s < 0 || s >= r2.length)
      throw new Error('"slice" index out of bounds');
    if (s !== Math.floor(s))
      throw new Error('"slice" index must be an integer');
    if (this.to) {
      const n2 = this.to.evaluate(t2, e2);
      if (n2 < 0 || n2 >= r2.length)
        throw new Error('"slice" index out of bounds');
      if (n2 !== Math.floor(n2))
        throw new Error('"slice" index must be an integer');
      return r2.slice(s, n2);
    }
    return r2.slice(s);
  }
}
class J {
  constructor() {
    this.type = i;
  }
  static parse(t2) {
    if (t2.length !== 1)
      throw new Error('"has-id" expects no arguments');
    return new J();
  }
  evaluate(t2, e2) {
    return t2.id !== void 0;
  }
}
class K {
  constructor(t2, e2) {
    this.args = t2, this.calculate = e2, this.type = e$1;
  }
  static parse(t2, e2, r2) {
    const s = t2.slice(1).map((t3) => ht(t3, e2));
    return new K(s, r2);
  }
  evaluate(t2, e2) {
    let r2;
    return this.args && (r2 = this.args.map((r3) => r3.evaluate(t2, e2))), this.calculate(r2);
  }
}
class Q extends K {
  static parse(t2, e2) {
    switch (t2.length) {
      case 2:
        return K.parse(t2, e2, (t3) => -t3[0]);
      case 3:
        return K.parse(t2, e2, (t3) => t3[0] - t3[1]);
      default:
        throw new Error('"-" expects 1 or 2 arguments');
    }
  }
}
class W extends K {
  static parse(t2, e2) {
    return K.parse(t2, e2, (t3) => {
      let e3 = 1;
      for (const r2 of t3)
        e3 *= r2;
      return e3;
    });
  }
}
class X extends K {
  static parse(t2, e2) {
    if (t2.length === 3)
      return K.parse(t2, e2, (t3) => t3[0] / t3[1]);
    throw new Error('"/" expects 2 arguments');
  }
}
class Y extends K {
  static parse(t2, e2) {
    if (t2.length === 3)
      return K.parse(t2, e2, (t3) => t3[0] % t3[1]);
    throw new Error('"%" expects 2 arguments');
  }
}
class Z extends K {
  static parse(t2, e2) {
    if (t2.length === 3)
      return K.parse(t2, e2, (t3) => __pow(t3[0], t3[1]));
    throw new Error('"^" expects 1 or 2 arguments');
  }
}
class tt extends K {
  static parse(t2, e2) {
    return K.parse(t2, e2, (t3) => {
      let e3 = 0;
      for (const r2 of t3)
        e3 += r2;
      return e3;
    });
  }
}
class et {
  constructor(t2, e2) {
    this.args = t2, this.calculate = e2, this.type = e$1;
  }
  static parse(t2, e2) {
    const r2 = t2.slice(1).map((t3) => ht(t3, e2));
    return new et(r2, et.ops[t2[0]]);
  }
  evaluate(t2, e2) {
    let r2;
    return this.args && (r2 = this.args.map((r3) => r3.evaluate(t2, e2))), this.calculate(r2);
  }
}
et.ops = { abs: (t2) => Math.abs(t2[0]), acos: (t2) => Math.acos(t2[0]), asin: (t2) => Math.asin(t2[0]), atan: (t2) => Math.atan(t2[0]), ceil: (t2) => Math.ceil(t2[0]), cos: (t2) => Math.cos(t2[0]), e: () => Math.E, floor: (t2) => Math.floor(t2[0]), ln: (t2) => Math.log(t2[0]), ln2: () => Math.LN2, log10: (t2) => Math.log(t2[0]) / Math.LN10, log2: (t2) => Math.log(t2[0]) / Math.LN2, max: (t2) => Math.max(...t2), min: (t2) => Math.min(...t2), pi: () => Math.PI, round: (t2) => Math.round(t2[0]), sin: (t2) => Math.sin(t2[0]), sqrt: (t2) => Math.sqrt(t2[0]), tan: (t2) => Math.tan(t2[0]) };
class rt {
  constructor(t2) {
    this.args = t2, this.type = t$2;
  }
  static parse(t2, e2) {
    return new rt(t2.slice(1).map((t3) => ht(t3, e2)));
  }
  evaluate(t2, e2) {
    return this.args.map((r2) => r2.evaluate(t2, e2)).join("");
  }
}
class st {
  constructor(t2, e2) {
    this.arg = t2, this.calculate = e2, this.type = t$2;
  }
  static parse(t2, e2) {
    if (t2.length !== 2)
      throw new Error(`${t2[0]} expects 1 argument`);
    const r2 = ht(t2[1], e2);
    return new st(r2, st.ops[t2[0]]);
  }
  evaluate(t2, e2) {
    return this.calculate(this.arg.evaluate(t2, e2));
  }
}
st.ops = { downcase: (t2) => t2.toLowerCase(), upcase: (t2) => t2.toUpperCase() };
class nt {
  constructor(t2) {
    this.args = t2, this.type = o$1;
  }
  static parse(t2, e2) {
    if (t2.length !== 4)
      throw new Error('"rgb" expects 3 arguments');
    const r2 = t2.slice(1).map((t3) => ht(t3, e2));
    return new nt(r2);
  }
  evaluate(e2, r2) {
    const s = this._validate(this.args[0].evaluate(e2, r2)), n2 = this._validate(this.args[1].evaluate(e2, r2)), a2 = this._validate(this.args[2].evaluate(e2, r2));
    return new o$3({ r: s, g: n2, b: a2 });
  }
  _validate(t2) {
    if (typeof t2 != "number" || t2 < 0 || t2 > 255)
      throw new Error(`${t2}: invalid color component`);
    return Math.round(t2);
  }
}
class at {
  constructor(t2) {
    this.args = t2, this.type = o$1;
  }
  static parse(t2, e2) {
    if (t2.length !== 5)
      throw new Error('"rgba" expects 4 arguments');
    const r2 = t2.slice(1).map((t3) => ht(t3, e2));
    return new at(r2);
  }
  evaluate(e2, r2) {
    const s = this._validate(this.args[0].evaluate(e2, r2)), n2 = this._validate(this.args[1].evaluate(e2, r2)), a2 = this._validate(this.args[2].evaluate(e2, r2)), o2 = this._validateAlpha(this.args[3].evaluate(e2, r2));
    return new o$3({ r: s, g: n2, b: a2, a: o2 });
  }
  _validate(t2) {
    if (typeof t2 != "number" || t2 < 0 || t2 > 255)
      throw new Error(`${t2}: invalid color component`);
    return Math.round(t2);
  }
  _validateAlpha(t2) {
    if (typeof t2 != "number" || t2 < 0 || t2 > 1)
      throw new Error(`${t2}: invalid alpha color component`);
    return t2;
  }
}
class ot {
  constructor(t2) {
    this.color = t2, this.type = a$2(e$1, 4);
  }
  static parse(t2, e2) {
    if (t2.length !== 2)
      throw new Error('"to-rgba" expects 1 argument');
    const r2 = ht(t2[1], e2);
    return new ot(r2);
  }
  evaluate(e2, r2) {
    return new o$3(this.color.evaluate(e2, r2)).toRgba();
  }
}
class it {
  constructor(t2, e2) {
    this.type = t2, this.args = e2;
  }
  static parse(t2, e2) {
    const r2 = t2[0];
    if (t2.length < 2)
      throw new Error(`${r2} expects at least one argument`);
    let s, n2 = 1;
    if (r2 === "array") {
      if (t2.length > 2) {
        switch (t2[1]) {
          case "string":
            s = t$2;
            break;
          case "number":
            s = e$1;
            break;
          case "boolean":
            s = i;
            break;
          default:
            throw new Error('"array" type argument must be string, number or boolean');
        }
        n2++;
      } else
        s = u;
      let e3;
      if (t2.length > 3) {
        if (e3 = t2[2], e3 !== null && (typeof e3 != "number" || e3 < 0 || e3 !== Math.floor(e3)))
          throw new Error('"array" length argument must be a positive integer literal');
        n2++;
      }
      s = a$2(s, e3);
    } else
      switch (r2) {
        case "string":
          s = t$2;
          break;
        case "number":
          s = e$1;
          break;
        case "boolean":
          s = i;
          break;
        case "object":
          s = f$2;
      }
    const a2 = [];
    for (; n2 < t2.length; n2++) {
      const r3 = ht(t2[n2], e2);
      a2.push(r3);
    }
    return new it(s, a2);
  }
  evaluate(t2, e2) {
    let r2;
    for (const s of this.args) {
      const n2 = s.evaluate(t2, e2);
      if (r2 = l(n2), c$1(r2, this.type))
        return n2;
    }
    throw new Error(`Expected ${k$1(this.type)} but got ${k$1(r2)}`);
  }
}
class lt {
  constructor(t2, e2) {
    this.type = t2, this.args = e2;
  }
  static parse(t2, e2) {
    const r2 = t2[0], s = lt.types[r2];
    if (s === i || s === t$2) {
      if (t2.length !== 2)
        throw new Error(`${r2} expects one argument`);
    } else if (t2.length < 2)
      throw new Error(`${r2} expects at least one argument`);
    const n2 = [];
    for (let a2 = 1; a2 < t2.length; a2++) {
      const r3 = ht(t2[a2], e2);
      n2.push(r3);
    }
    return new lt(s, n2);
  }
  evaluate(e2, r2) {
    if (this.type === i)
      return Boolean(this.args[0].evaluate(e2, r2));
    if (this.type === t$2)
      return d$2(this.args[0].evaluate(e2, r2));
    if (this.type === e$1) {
      for (const t2 of this.args) {
        const s = Number(t2.evaluate(e2, r2));
        if (!isNaN(s))
          return s;
      }
      return null;
    }
    if (this.type === o$1) {
      for (const s of this.args)
        try {
          const n2 = lt.toColor(s.evaluate(e2, r2));
          if (n2 instanceof o$3)
            return n2;
        } catch (e3) {
        }
      return null;
    }
  }
  static toBoolean(t2) {
    return Boolean(t2);
  }
  static toString(t2) {
    return d$2(t2);
  }
  static toNumber(t2) {
    const e2 = Number(t2);
    if (isNaN(e2))
      throw new Error(`"${t2}" is not a number`);
    return e2;
  }
  static toColor(e2) {
    if (e2 instanceof o$3)
      return e2;
    if (typeof e2 == "string") {
      const r2 = o$3.fromString(e2);
      if (r2)
        return r2;
      throw new Error(`"${e2}" is not a color`);
    }
    if (Array.isArray(e2))
      return o$3.fromArray(e2);
    throw new Error(`"${e2}" is not a color`);
  }
}
lt.types = { "to-boolean": i, "to-color": o$1, "to-number": e$1, "to-string": t$2 };
class ut {
  constructor(t2) {
    this.val = t2, this.type = l(t2);
  }
  static parse(t2) {
    if (t2.length !== 2)
      throw new Error('"literal" expects 1 argument');
    return new ut(t2[1]);
  }
  evaluate(t2, e2) {
    return this.val;
  }
}
class ct {
  constructor(t2) {
    this.arg = t2, this.type = t$2;
  }
  static parse(t2, e2) {
    if (t2.length !== 2)
      throw new Error('"typeof" expects 1 argument');
    return new ct(ht(t2[1], e2));
  }
  evaluate(t2, e2) {
    return k$1(l(this.arg.evaluate(t2, e2)));
  }
}
function ht(t2, e2, r2) {
  const s = typeof t2;
  if (s === "string" || s === "boolean" || s === "number" || t2 === null) {
    if (r2)
      switch (r2.kind) {
        case "string":
          s !== "string" && (t2 = lt.toString(t2));
          break;
        case "number":
          s !== "number" && (t2 = lt.toNumber(t2));
          break;
        case "color":
          t2 = lt.toColor(t2);
      }
    t2 = ["literal", t2];
  }
  if (!Array.isArray(t2) || t2.length === 0)
    throw new Error("Expression must be a non empty array");
  const n2 = t2[0];
  if (typeof n2 != "string")
    throw new Error("First element of expression must be a string");
  const a2 = pt[n2];
  if (a2 === void 0)
    throw new Error(`Invalid expression operator "${n2}"`);
  if (!a2)
    throw new Error(`Unimplemented expression operator "${n2}"`);
  return a2.parse(t2, e2, r2);
}
const pt = { array: it, boolean: it, collator: null, format: null, image: null, literal: ut, number: it, "number-format": null, object: it, string: it, "to-boolean": lt, "to-color": lt, "to-number": lt, "to-string": lt, typeof: ct, accumulated: null, "feature-state": null, "geometry-type": b, id: v, "line-progress": null, properties: d$1, at: P$1, get: T, has: F, in: G, "index-of": V, length: D$1, slice: H, "!": N, "!=": M, "<": k, "<=": A, "==": $, ">": j, ">=": q, all: _, any: R, case: z, coalesce: I, match: L, within: null, interpolate: U, "interpolate-hcl": U, "interpolate-lab": U, step: B, let: S, var: O, concat: rt, downcase: st, "is-supported-script": null, "resolved-locale": null, upcase: st, rgb: nt, rgba: at, "to-rgba": ot, "-": Q, "*": W, "/": X, "%": Y, "^": Z, "+": tt, abs: et, acos: et, asin: et, atan: et, ceil: et, cos: et, e: et, floor: et, ln: et, ln2: et, log10: et, log2: et, max: et, min: et, pi: et, round: et, sin: et, sqrt: et, tan: et, zoom: x, "heatmap-density": null, "has-id": J, none: C };
class t {
  constructor(e2) {
    this._expression = e2;
  }
  filter(e2, r2) {
    if (!this._expression)
      return true;
    try {
      return this._expression.evaluate(e2, r2);
    } catch (t2) {
      return console.log(t2.message), true;
    }
  }
  static createFilter(n2) {
    if (!n2)
      return null;
    this.isLegacyFilter(n2) && (n2 = this.convertLegacyFilter(n2));
    try {
      const s = ht(n2, null, i);
      return new t(s);
    } catch (s) {
      return console.log(s.message), null;
    }
  }
  static isLegacyFilter(e2) {
    if (!Array.isArray(e2))
      return true;
    if (e2.length === 0)
      return true;
    switch (e2[0]) {
      case "==":
      case "!=":
      case ">":
      case "<":
      case ">=":
      case "<=":
        return e2.length === 3 && typeof e2[1] == "string" && !Array.isArray(e2[2]);
      case "in":
        return e2.length >= 3 && typeof e2[1] == "string" && !Array.isArray(e2[2]);
      case "!in":
        return true;
      case "any":
      case "all":
        for (let r2 = 1; r2 < e2.length; r2++)
          if (!this.isLegacyFilter(e2[1]))
            return false;
        return true;
      case "none":
        return true;
      case "has":
        return e2.length === 2 && (e2[1] === "$id" || e2[1] === "$type");
      case "!has":
        return true;
      default:
        return false;
    }
  }
  static convertLegacyFilter(e2) {
    if (!Array.isArray(e2) || e2.length === 0)
      return true;
    const r2 = e2[0];
    if (e2.length === 1)
      return r2 !== "any";
    switch (r2) {
      case "==":
        return t.convertComparison("==", e2[1], e2[2]);
      case "!=":
        return t.negate(t.convertComparison("==", e2[1], e2[2]));
      case ">":
      case "<":
      case ">=":
      case "<=":
        return t.convertComparison(r2, e2[1], e2[2]);
      case "in":
        return t.convertIn(e2[1], e2.slice(2));
      case "!in":
        return t.negate(t.convertIn(e2[1], e2.slice(2)));
      case "any":
      case "all":
      case "none":
        return t.convertCombining(r2, e2.slice(1));
      case "has":
        return t.convertHas(e2[1]);
      case "!has":
        return t.negate(t.convertHas(e2[1]));
      default:
        throw new Error("Unexpected legacy filter.");
    }
  }
  static convertComparison(e2, r2, t2) {
    switch (r2) {
      case "$type":
        return [e2, ["geometry-type"], t2];
      case "$id":
        return [e2, ["id"], t2];
      default:
        return [e2, ["get", r2], t2];
    }
  }
  static convertIn(e2, r2) {
    switch (e2) {
      case "$type":
        return ["in", ["geometry-type"], ["literal", r2]];
      case "$id":
        return ["in", ["id"], ["literal", r2]];
      default:
        return ["in", ["get", e2], ["literal", r2]];
    }
  }
  static convertHas(e2) {
    switch (e2) {
      case "$type":
        return true;
      case "$id":
        return ["has-id"];
      default:
        return ["has", e2];
    }
  }
  static convertCombining(e2, r2) {
    return [e2].concat(r2.map(this.convertLegacyFilter));
  }
  static negate(e2) {
    return ["!", e2];
  }
}
class e {
}
e.backgroundLayoutDefinition = { visibility: { type: "enum", values: ["visible", "none"], default: 0 } }, e.fillLayoutDefinition = { visibility: { type: "enum", values: ["visible", "none"], default: 0 } }, e.lineLayoutDefinition = { visibility: { type: "enum", values: ["visible", "none"], default: 0 }, "line-cap": { type: "enum", values: ["butt", "round", "square"], default: 0 }, "line-join": { type: "enum", values: ["bevel", "round", "miter"], default: 2 }, "line-miter-limit": { type: "number", default: 2 }, "line-round-limit": { type: "number", default: 1.05 } }, e.symbolLayoutDefinition = { visibility: { type: "enum", values: ["visible", "none"], default: 0 }, "symbol-avoid-edges": { type: "boolean", default: false }, "symbol-placement": { type: "enum", values: ["point", "line", "line-center"], default: 0 }, "symbol-sort-key": { type: "number", default: -1 }, "symbol-spacing": { type: "number", minimum: 1, default: 250 }, "icon-allow-overlap": { type: "boolean", default: false }, "icon-anchor": { type: "enum", values: ["center", "left", "right", "top", "bottom", "top-left", "top-right", "bottom-left", "bottom-right"], default: 0 }, "icon-ignore-placement": { type: "boolean", default: false }, "icon-image": { type: "string" }, "icon-keep-upright": { type: "boolean", default: false }, "icon-offset": { type: "array", value: "number", length: 2, default: [0, 0] }, "icon-optional": { type: "boolean", default: false }, "icon-padding": { type: "number", minimum: 0, default: 2 }, "icon-rotate": { type: "number", default: 0 }, "icon-rotation-alignment": { type: "enum", values: ["map", "viewport", "auto"], default: 2 }, "icon-size": { type: "number", minimum: 0, default: 1 }, "text-allow-overlap": { type: "boolean", default: false }, "text-anchor": { type: "enum", values: ["center", "left", "right", "top", "bottom", "top-left", "top-right", "bottom-left", "bottom-right"], default: 0 }, "text-field": { type: "string" }, "text-font": { type: "array", value: "string", default: ["Open Sans Regular", "Arial Unicode MS Regular"] }, "text-ignore-placement": { type: "boolean", default: false }, "text-justify": { type: "enum", values: ["auto", "left", "center", "right"], default: 2 }, "text-keep-upright": { type: "boolean", default: true }, "text-letter-spacing": { type: "number", default: 0 }, "text-line-height": { type: "number", default: 1.2 }, "text-max-angle": { type: "number", minimum: 0, default: 45 }, "text-max-width": { type: "number", minimum: 0, default: 10 }, "text-offset": { type: "array", value: "number", length: 2, default: [0, 0] }, "text-optional": { type: "boolean", default: false }, "text-padding": { type: "number", minimum: 0, default: 2 }, "text-rotate": { type: "number", default: 0 }, "text-rotation-alignment": { type: "enum", values: ["map", "viewport", "auto"], default: 2 }, "text-size": { type: "number", minimum: 0, default: 16 }, "text-transform": { type: "enum", values: ["none", "uppercase", "lowercase"], default: 0 }, "text-writing-mode": { type: "array", value: "enum", values: ["horizontal", "vertical"], default: [0] } }, e.circleLayoutDefinition = { visibility: { type: "enum", values: ["visible", "none"], default: 0 } }, e.backgroundPaintDefinition = { "background-color": { type: "color", default: [0, 0, 0, 1] }, "background-opacity": { type: "number", minimum: 0, maximum: 1, default: 1 }, "background-pattern": { type: "string" } }, e.fillPaintDefinition = { "fill-antialias": { type: "boolean", default: true }, "fill-color": { type: "color", default: [0, 0, 0, 1] }, "fill-opacity": { type: "number", minimum: 0, maximum: 1, default: 1 }, "fill-outline-color": { type: "color", default: [0, 0, 0, 0] }, "fill-pattern": { type: "string" }, "fill-translate": { type: "array", value: "number", length: 2, default: [0, 0] }, "fill-translate-anchor": { type: "enum", values: ["map", "viewport"], default: 0 } }, e.linePaintDefinition = { "line-blur": { type: "number", minimum: 0, default: 0 }, "line-color": { type: "color", default: [0, 0, 0, 1] }, "line-dasharray": { type: "array", value: "number", default: [] }, "line-gap-width": { type: "number", minimum: 0, default: 0 }, "line-offset": { type: "number", default: 0 }, "line-opacity": { type: "number", minimum: 0, maximum: 1, default: 1 }, "line-pattern": { type: "string" }, "line-translate": { type: "array", value: "number", length: 2, default: [0, 0] }, "line-translate-anchor": { type: "enum", values: ["map", "viewport"], default: 0 }, "line-width": { type: "number", minimum: 0, default: 1 } }, e.symbolPaintDefinition = { "icon-color": { type: "color", default: [0, 0, 0, 1] }, "icon-halo-blur": { type: "number", minimum: 0, default: 0 }, "icon-halo-color": { type: "color", default: [0, 0, 0, 0] }, "icon-halo-width": { type: "number", minimum: 0, default: 0 }, "icon-opacity": { type: "number", minimum: 0, maximum: 1, default: 1 }, "icon-translate": { type: "array", value: "number", length: 2, default: [0, 0] }, "icon-translate-anchor": { type: "enum", values: ["map", "viewport"], default: 0 }, "text-color": { type: "color", default: [0, 0, 0, 1] }, "text-halo-blur": { type: "number", minimum: 0, default: 0 }, "text-halo-color": { type: "color", default: [0, 0, 0, 0] }, "text-halo-width": { type: "number", minimum: 0, default: 0 }, "text-opacity": { type: "number", minimum: 0, maximum: 1, default: 1 }, "text-translate": { type: "array", value: "number", length: 2, default: [0, 0] }, "text-translate-anchor": { type: "enum", values: ["map", "viewport"], default: 0 } }, e.rasterPaintDefinition = { "raster-opacity": { type: "number", minimum: 0, maximum: 1, default: 1 }, "raster-hue-rotate": { type: "number", default: 0 }, "raster-brightness-min": { type: "number", minimum: 0, maximum: 1, default: 0 }, "raster-brightness-max": { type: "number", minimum: 0, maximum: 1, default: 1 }, "raster-saturation": { type: "number", minimum: -1, maximum: 1, default: 0 }, "raster-contrast": { type: "number", minimum: -1, maximum: 1, default: 0 }, "raster-fade-duration": { type: "number", minimum: 0, default: 300 } }, e.circlePaintDefinition = { "circle-blur": { type: "number", minimum: 0, default: 0 }, "circle-color": { type: "color", default: [0, 0, 0, 1] }, "circle-opacity": { type: "number", minimum: 0, maximum: 1, default: 1 }, "circle-radius": { type: "number", minimum: 0, default: 5 }, "circle-stroke-color": { type: "color", default: [0, 0, 0, 1] }, "circle-stroke-opacity": { type: "number", minimum: 0, maximum: 1, default: 1 }, "circle-stroke-width": { type: "number", minimum: 0, default: 0 }, "circle-translate": { type: "array", value: "number", length: 2, default: [0, 0] }, "circle-translate-anchor": { type: "enum", values: ["map", "viewport"], default: 0 } };
class h {
  constructor(t2, e2) {
    let a2;
    switch (this.isDataDriven = false, this.interpolator = null, t2.type) {
      case "number":
      case "color":
        a2 = true;
        break;
      case "array":
        a2 = t2.value === "number";
        break;
      default:
        a2 = false;
    }
    if (e2 == null && (e2 = t2.default), Array.isArray(e2) && e2.length > 0 && pt[e2[0]]) {
      const a3 = { number: e$1, color: o$1, string: t$2, boolean: i, enum: t$2 };
      try {
        const l2 = t2.type === "array" ? a$2(a3[t2.value] || u, t2.length) : a3[t2.type], s = ht(e2, null, l2);
        this.getValue = this._buildExpression(s, t2), this.isDataDriven = true, s instanceof U && s.input instanceof x && (this.interpolator = s);
      } catch (c2) {
        console.log(c2.message), this.getValue = this._buildSimple(t2.default);
      }
      return;
    }
    a2 && e2.type === "interval" && (a2 = false);
    const h2 = e2 && e2.stops && e2.stops.length > 0;
    if (h2)
      for (const r2 of e2.stops)
        r2[1] = this._validate(r2[1], t2);
    if (this.isDataDriven = !!e2 && !!e2.property, this.isDataDriven)
      if (e2.default !== void 0 && (e2.default = this._validate(e2.default, t2)), h2)
        switch (e2.type) {
          case "identity":
            this.getValue = this._buildIdentity(e2, t2);
            break;
          case "categorical":
            this.getValue = this._buildCategorical(e2, t2);
            break;
          default:
            this.getValue = a2 ? this._buildInterpolate(e2, t2) : this._buildInterval(e2, t2);
        }
      else
        this.getValue = this._buildIdentity(e2, t2);
    else
      h2 ? this.getValue = a2 ? this._buildZoomInterpolate(e2) : this._buildZoomInterval(e2) : (e2 = this._validate(e2, t2), this.getValue = this._buildSimple(e2));
  }
  _validate(t2, e2) {
    if (e2.type === "number") {
      if (t2 < e2.minimum)
        return e2.minimum;
      if (t2 > e2.maximum)
        return e2.maximum;
    } else
      e2.type === "color" ? t2 = h._parseColor(t2) : e2.type === "enum" ? typeof t2 == "string" && (t2 = e2.values.indexOf(t2)) : e2.type === "array" && e2.value === "enum" ? t2 = t2.map((r2) => typeof t2 == "string" ? e2.values.indexOf(r2) : r2) : e2.type === "string" && (t2 = d$2(t2));
    return t2;
  }
  _buildSimple(t2) {
    return () => t2;
  }
  _buildExpression(t2, e2) {
    return (r2, i2) => {
      try {
        const a2 = t2.evaluate(i2, r2);
        return a2 === void 0 ? e2.default : this._validate(a2, e2);
      } catch (a2) {
        return console.log(a2.message), e2.default;
      }
    };
  }
  _buildIdentity(t2, e2) {
    return (r2, i2) => {
      let a2;
      return i2 && (a2 = i2.values[t2.property]), a2 !== void 0 ? this._validate(a2, e2) : t2.default !== void 0 ? t2.default : e2.default;
    };
  }
  _buildCategorical(t2, e2) {
    return (r2, i2) => {
      let a2;
      return i2 && (a2 = i2.values[t2.property]), a2 = this._categorical(a2, t2.stops), a2 !== void 0 ? a2 : t2.default !== void 0 ? t2.default : e2.default;
    };
  }
  _buildInterval(t2, e2) {
    return (r2, i2) => {
      let a2;
      return i2 && (a2 = i2.values[t2.property]), typeof a2 == "number" ? this._interval(a2, t2.stops) : t2.default !== void 0 ? t2.default : e2.default;
    };
  }
  _buildInterpolate(t2, e2) {
    return (r2, i2) => {
      let a2;
      return i2 && (a2 = i2.values[t2.property]), typeof a2 == "number" ? this._interpolate(a2, t2.stops, t2.base || 1) : t2.default !== void 0 ? t2.default : e2.default;
    };
  }
  _buildZoomInterpolate(t2) {
    return (e2) => this._interpolate(e2, t2.stops, t2.base || 1);
  }
  _buildZoomInterval(t2) {
    return (e2) => this._interval(e2, t2.stops);
  }
  _categorical(t2, e2) {
    const r2 = e2.length;
    for (let i2 = 0; i2 < r2; i2++)
      if (e2[i2][0] === t2)
        return e2[i2][1];
  }
  _interval(t2, e2) {
    const r2 = e2.length;
    let i2 = 0;
    for (let a2 = 0; a2 < r2 && e2[a2][0] <= t2; a2++)
      i2 = a2;
    return e2[i2][1];
  }
  _interpolate(t2, r2, i2) {
    let a2, l2;
    const s = r2.length;
    for (let e2 = 0; e2 < s; e2++) {
      const i3 = r2[e2];
      if (!(i3[0] <= t2)) {
        l2 = i3;
        break;
      }
      a2 = i3;
    }
    if (a2 && l2) {
      const r3 = l2[0] - a2[0], s2 = t2 - a2[0], o2 = i2 === 1 ? s2 / r3 : (__pow(i2, s2) - 1) / (__pow(i2, r3) - 1);
      if (Array.isArray(a2[1])) {
        const t3 = a2[1], r4 = l2[1], i3 = [];
        for (let a3 = 0; a3 < t3.length; a3++)
          i3.push(b$1(t3[a3], r4[a3], o2));
        return i3;
      }
      return b$1(a2[1], l2[1], o2);
    }
    return a2 ? a2[1] : l2 ? l2[1] : void 0;
  }
  static _isEmpty(t2) {
    for (const e2 in t2)
      if (t2.hasOwnProperty(e2))
        return false;
    return true;
  }
  static _parseColor(e2) {
    return Array.isArray(e2) ? e2 : (typeof e2 == "string" && (e2 = new o$3(e2)), e2 instanceof o$3 ? this._isEmpty(e2) ? void 0 : o$3.toUnitRGBA(e2) : e2);
  }
}
class p {
  constructor(t2, i2, e$12, a2) {
    switch (this.type = t2, this.typeName = i2.type, this.id = i2.id, this.source = i2.source, this.sourceLayer = i2["source-layer"], this.minzoom = i2.minzoom, this.maxzoom = i2.maxzoom, this.filter = i2.filter, this.layout = i2.layout, this.paint = i2.paint, this.z = e$12, this.uid = a2, t2) {
      case 0:
        this._layoutDefinition = e.backgroundLayoutDefinition, this._paintDefinition = e.backgroundPaintDefinition;
        break;
      case 1:
        this._layoutDefinition = e.fillLayoutDefinition, this._paintDefinition = e.fillPaintDefinition;
        break;
      case 2:
        this._layoutDefinition = e.lineLayoutDefinition, this._paintDefinition = e.linePaintDefinition;
        break;
      case 3:
        this._layoutDefinition = e.symbolLayoutDefinition, this._paintDefinition = e.symbolPaintDefinition;
        break;
      case 4:
        this._layoutDefinition = e.circleLayoutDefinition, this._paintDefinition = e.circlePaintDefinition;
    }
    this._layoutProperties = this._parseLayout(this.layout), this._paintProperties = this._parsePaint(this.paint);
  }
  getFeatureFilter() {
    return this._featureFilter !== void 0 ? this._featureFilter : this._featureFilter = t.createFilter(this.filter);
  }
  getLayoutProperty(t2) {
    return this._layoutProperties[t2];
  }
  getPaintProperty(t2) {
    return this._paintProperties[t2];
  }
  getLayoutValue(t2, i2, e2) {
    let a2;
    const o2 = this._layoutProperties[t2];
    return o2 && (a2 = o2.getValue(i2, e2)), a2 === void 0 && (a2 = this._layoutDefinition[t2].default), a2;
  }
  getPaintValue(t2, i2, e2) {
    let a2;
    const o2 = this._paintProperties[t2];
    return o2 && (a2 = o2.getValue(i2, e2)), a2 === void 0 && (a2 = this._paintDefinition[t2].default), a2;
  }
  isPainterDataDriven() {
    const t2 = this._paintProperties;
    if (t2) {
      for (const i2 in t2)
        if (t2[i2].isDataDriven)
          return true;
    }
    return false;
  }
  _parseLayout(t2) {
    const i2 = {};
    for (const e2 in t2) {
      const a2 = this._layoutDefinition[e2];
      a2 && (i2[e2] = new h(a2, t2[e2]));
    }
    return i2;
  }
  _parsePaint(t2) {
    const i2 = {};
    for (const e2 in t2) {
      const a2 = this._paintDefinition[e2];
      a2 && (i2[e2] = new h(a2, t2[e2]));
    }
    return i2;
  }
  computeAttributesKey(t2, i2) {
    let e2 = 0, a2 = 0;
    for (const o2 of i2) {
      const t3 = o2 === "icon-size" || o2 === "text-size" ? this.getLayoutProperty(o2) : this.getPaintProperty(o2);
      a2 |= (t3 != null && t3.interpolator ? 2 : t3 != null && t3.isDataDriven ? 1 : 0) << e2, e2 += 2;
    }
    return a2 << 3 | t2;
  }
}
class g extends p {
  constructor(i2, e2, a2, o2) {
    super(i2, e2, a2, o2), this.backgroundMaterial = new r$3(this.computeAttributesKey(0, r$3.ATTRIBUTES));
  }
}
class y extends p {
  constructor(t2, i2, o2, r2) {
    super(t2, i2, o2, r2);
    const n2 = this.getPaintProperty("fill-color"), s = this.getPaintProperty("fill-opacity"), l2 = this.getPaintProperty("fill-pattern");
    this.hasDataDrivenColor = n2 == null ? void 0 : n2.isDataDriven, this.hasDataDrivenOpacity = s == null ? void 0 : s.isDataDriven, this.hasDataDrivenFill = this.hasDataDrivenColor || this.hasDataDrivenOpacity || (l2 == null ? void 0 : l2.isDataDriven);
    const h2 = this.getPaintProperty("fill-outline-color");
    this.outlineUsesFillColor = !h2, this.hasDataDrivenOutlineColor = h2 == null ? void 0 : h2.isDataDriven, this.hasDataDrivenOutline = h2 ? h2.isDataDriven : !!n2 && n2.isDataDriven, this.hasDataDrivenOutline = (h2 ? this.hasDataDrivenOutlineColor : this.hasDataDrivenColor) || this.hasDataDrivenOpacity, this.fillMaterial = new t$5(this.computeAttributesKey(1, t$5.ATTRIBUTES)), this.outlineMaterial = new e$3(this.computeAttributesKey(2, this.outlineUsesFillColor ? e$3.ATTRIBUTES_FILL : e$3.ATTRIBUTES_OUTLINE), this.outlineUsesFillColor);
  }
}
class D extends p {
  constructor(t2, i2, e$12, a2) {
    var r2, n2, s, h2, p2, g2, y2;
    super(t2, i2, e$12, a2), this.lineMaterial = new t$4(this.computeAttributesKey(3, t$4.ATTRIBUTES)), this.hasDataDrivenLine = ((r2 = this.getPaintProperty("line-blur")) == null ? void 0 : r2.isDataDriven) || ((n2 = this.getPaintProperty("line-color")) == null ? void 0 : n2.isDataDriven) || ((s = this.getPaintProperty("line-gap-width")) == null ? void 0 : s.isDataDriven) || ((h2 = this.getPaintProperty("line-offset")) == null ? void 0 : h2.isDataDriven) || ((p2 = this.getPaintProperty("line-opacity")) == null ? void 0 : p2.isDataDriven) || ((g2 = this.getPaintProperty("line-pattern")) == null ? void 0 : g2.isDataDriven) || ((y2 = this.getPaintProperty("line-width")) == null ? void 0 : y2.isDataDriven);
    let D2 = i2.paint["line-width"];
    D2 || (D2 = e.linePaintDefinition["line-width"].default);
    const P2 = this.getPaintProperty("line-width");
    this.isThinLine = !(P2 != null && P2.isDataDriven) && typeof D2 == "number" && D2 < S$1;
  }
}
class P extends p {
  constructor(t2, i2, e2, a2) {
    var o2, s, l2, h2, u2, p2, g2, y2, D2, P2, c2, d2;
    super(t2, i2, e2, a2), this.iconMaterial = new r$2(this.computeAttributesKey(4, r$2.ATTRIBUTES)), this.textMaterial = new i$1(this.computeAttributesKey(6, i$1.ATTRIBUTES)), this.hasDataDrivenIcon = ((o2 = this.getPaintProperty("icon-color")) == null ? void 0 : o2.isDataDriven) || ((s = this.getPaintProperty("icon-halo-blur")) == null ? void 0 : s.isDataDriven) || ((l2 = this.getPaintProperty("icon-halo-color")) == null ? void 0 : l2.isDataDriven) || ((h2 = this.getPaintProperty("icon-halo-width")) == null ? void 0 : h2.isDataDriven) || ((u2 = this.getPaintProperty("icon-opacity")) == null ? void 0 : u2.isDataDriven) || ((p2 = this.getLayoutProperty("icon-size")) == null ? void 0 : p2.isDataDriven), this.hasDataDrivenText = ((g2 = this.getPaintProperty("text-color")) == null ? void 0 : g2.isDataDriven) || ((y2 = this.getPaintProperty("text-halo-blur")) == null ? void 0 : y2.isDataDriven) || ((D2 = this.getPaintProperty("text-halo-color")) == null ? void 0 : D2.isDataDriven) || ((P2 = this.getPaintProperty("text-halo-width")) == null ? void 0 : P2.isDataDriven) || ((c2 = this.getPaintProperty("text-opacity")) == null ? void 0 : c2.isDataDriven) || ((d2 = this.getLayoutProperty("text-size")) == null ? void 0 : d2.isDataDriven);
  }
}
class c extends p {
  constructor(t2, e2, a2, o2) {
    super(t2, e2, a2, o2), this.circleMaterial = new e$4(this.computeAttributesKey(5, e$4.ATTRIBUTES));
  }
}
class d {
  constructor(t2, i2, e2) {
    var a2, o2, r2, n2, s;
    let l2;
    this.allowOverlap = t2.getLayoutValue("icon-allow-overlap", i2), this.ignorePlacement = t2.getLayoutValue("icon-ignore-placement", i2), this.keepUpright = t2.getLayoutValue("icon-keep-upright", i2), this.optional = t2.getLayoutValue("icon-optional", i2), this.rotationAlignment = t2.getLayoutValue("icon-rotation-alignment", i2), this.rotationAlignment === 2 && (this.rotationAlignment = e2 ? 0 : 1), l2 = t2.getLayoutProperty("icon-anchor"), (a2 = l2) != null && a2.isDataDriven ? this._anchorProp = l2 : this.anchor = t2.getLayoutValue("icon-anchor", i2), l2 = t2.getLayoutProperty("icon-offset"), (o2 = l2) != null && o2.isDataDriven ? this._offsetProp = l2 : this.offset = t2.getLayoutValue("icon-offset", i2), l2 = t2.getLayoutProperty("icon-padding"), (r2 = l2) != null && r2.isDataDriven ? this._paddingProp = l2 : this.padding = t2.getLayoutValue("icon-padding", i2), l2 = t2.getLayoutProperty("icon-rotate"), (n2 = l2) != null && n2.isDataDriven ? this._rotateProp = l2 : this.rotate = t2.getLayoutValue("icon-rotate", i2), l2 = t2.getLayoutProperty("icon-size"), (s = l2) != null && s.isDataDriven ? this._sizeProp = l2 : this.size = t2.getLayoutValue("icon-size", i2);
  }
  update(t2, i2) {
    this._anchorProp && (this.anchor = this._anchorProp.getValue(t2, i2)), this._offsetProp && (this.offset = this._offsetProp.getValue(t2, i2)), this._paddingProp && (this.padding = this._paddingProp.getValue(t2, i2)), this._rotateProp && (this.rotate = this._rotateProp.getValue(t2, i2)), this._sizeProp && (this.size = this._sizeProp.getValue(t2, i2));
  }
}
class f {
  constructor(t2, i2, e2) {
    var a2, o2, r2, n2, s, l2, h2, u2, p2, g2, y2;
    let D2;
    this.allowOverlap = t2.getLayoutValue("text-allow-overlap", i2), this.ignorePlacement = t2.getLayoutValue("text-ignore-placement", i2), this.keepUpright = t2.getLayoutValue("text-keep-upright", i2), this.optional = t2.getLayoutValue("text-optional", i2), this.rotationAlignment = t2.getLayoutValue("text-rotation-alignment", i2), this.rotationAlignment === 2 && (this.rotationAlignment = e2 ? 0 : 1), D2 = t2.getLayoutProperty("text-anchor"), (a2 = D2) != null && a2.isDataDriven ? this._anchorProp = D2 : this.anchor = t2.getLayoutValue("text-anchor", i2), D2 = t2.getLayoutProperty("text-justify"), (o2 = D2) != null && o2.isDataDriven ? this._justifyProp = D2 : this.justify = t2.getLayoutValue("text-justify", i2), D2 = t2.getLayoutProperty("text-letter-spacing"), (r2 = D2) != null && r2.isDataDriven ? this._letterSpacingProp = D2 : this.letterSpacing = t2.getLayoutValue("text-letter-spacing", i2), D2 = t2.getLayoutProperty("text-line-height"), (n2 = D2) != null && n2.isDataDriven ? this._lineHeightProp = D2 : this.lineHeight = t2.getLayoutValue("text-line-height", i2), D2 = t2.getLayoutProperty("text-max-angle"), (s = D2) != null && s.isDataDriven ? this._maxAngleProp = D2 : this.maxAngle = t2.getLayoutValue("text-max-angle", i2), D2 = t2.getLayoutProperty("text-max-width"), (l2 = D2) != null && l2.isDataDriven ? this._maxWidthProp = D2 : this.maxWidth = t2.getLayoutValue("text-max-width", i2), D2 = t2.getLayoutProperty("text-offset"), (h2 = D2) != null && h2.isDataDriven ? this._offsetProp = D2 : this.offset = t2.getLayoutValue("text-offset", i2), D2 = t2.getLayoutProperty("text-padding"), (u2 = D2) != null && u2.isDataDriven ? this._paddingProp = D2 : this.padding = t2.getLayoutValue("text-padding", i2), D2 = t2.getLayoutProperty("text-rotate"), (p2 = D2) != null && p2.isDataDriven ? this._rotateProp = D2 : this.rotate = t2.getLayoutValue("text-rotate", i2), D2 = t2.getLayoutProperty("text-size"), (g2 = D2) != null && g2.isDataDriven ? this._sizeProp = D2 : this.size = t2.getLayoutValue("text-size", i2), D2 = t2.getLayoutProperty("text-writing-mode"), (y2 = D2) != null && y2.isDataDriven ? this._writingModeProp = D2 : this.writingMode = t2.getLayoutValue("text-writing-mode", i2);
  }
  update(t2, i2) {
    this._anchorProp && (this.anchor = this._anchorProp.getValue(t2, i2)), this._justifyProp && (this.justify = this._justifyProp.getValue(t2, i2)), this._letterSpacingProp && (this.letterSpacing = this._letterSpacingProp.getValue(t2, i2)), this._lineHeightProp && (this.lineHeight = this._lineHeightProp.getValue(t2, i2)), this._maxAngleProp && (this.maxAngle = this._maxAngleProp.getValue(t2, i2)), this._maxWidthProp && (this.maxWidth = this._maxWidthProp.getValue(t2, i2)), this._offsetProp && (this.offset = this._offsetProp.getValue(t2, i2)), this._paddingProp && (this.padding = this._paddingProp.getValue(t2, i2)), this._rotateProp && (this.rotate = this._rotateProp.getValue(t2, i2)), this._sizeProp && (this.size = this._sizeProp.getValue(t2, i2)), this._writingModeProp && (this.writingMode = this._writingModeProp.getValue(t2, i2));
  }
}
class a {
  constructor(e2, t2) {
    if (this.backgroundBucketIds = [], this._uidToLayer = new Map(), this._layerByName = {}, this._runningId = 0, e2.layers || (e2.layers = []), this.version = parseFloat(e2.version), this.sprite = t2 ? t2.spriteUrl : e2.sprite, this.glyphs = t2 ? t2.glyphsUrl : e2.glyphs, this.layers = e2.layers.map((e3, t3, r2) => this._create(e3, t3, r2)), this.layers) {
      let e3;
      for (let t3 = 0; t3 < this.layers.length; t3++)
        e3 = this.layers[t3], this._layerByName[e3.id.toLowerCase()] = e3, this._uidToLayer.set(e3.uid, e3), e3.type === 0 && this.backgroundBucketIds.push(e3.id);
    }
    this._identifyRefLayers();
  }
  isPainterDataDriven(e2) {
    const t2 = this._layerByName[e2.toLowerCase()];
    return !!t2 && t2.isPainterDataDriven();
  }
  getStyleLayerId(e2) {
    return e2 >= this.layers.length ? null : this.layers[e2].id;
  }
  getStyleLayerByUID(e2) {
    const t2 = this._uidToLayer.get(e2);
    return t2 != null ? t2 : null;
  }
  getStyleLayerIndex(e2) {
    const t2 = this._layerByName[e2.toLowerCase()];
    return t2 ? this.layers.indexOf(t2) : -1;
  }
  setStyleLayer(e2, t2) {
    if (!e2 || !e2.id)
      return;
    t2 && t2 >= this.layers.length && (t2 = this.layers.length - 1);
    let r2, i2 = true;
    const s = this._layerByName[e2.id.toLowerCase()];
    if (s) {
      const y2 = this.layers.indexOf(s);
      t2 || (t2 = y2), t2 === y2 ? (i2 = false, r2 = a._recreateLayer(e2, s), this.layers[t2] = r2) : (this.layers.splice(y2, 1), r2 = this._create(e2, t2, this.layers), this.layers.splice(t2, 0, r2));
    } else
      r2 = this._create(e2, t2, this.layers), !t2 || t2 >= this.layers.length ? this.layers.push(r2) : this.layers.splice(t2, 0, r2);
    this._layerByName[e2.id.toLowerCase()] = r2, this._uidToLayer.set(r2.uid, r2), i2 && this._recomputeZValues(), this._identifyRefLayers();
  }
  getStyleLayer(e2) {
    const t2 = this._layerByName[e2.toLowerCase()];
    return t2 ? { type: t2.typeName, id: t2.id, source: t2.source, "source-layer": t2.sourceLayer, minzoom: t2.minzoom, maxzoom: t2.maxzoom, filter: t2.filter, layout: t2.layout, paint: t2.paint } : null;
  }
  deleteStyleLayer(e2) {
    const t2 = this._layerByName[e2.toLowerCase()];
    if (t2) {
      delete this._layerByName[e2.toLowerCase()], this._uidToLayer.delete(t2.uid);
      const r2 = this.layers.indexOf(t2);
      this.layers.splice(r2, 1), this._recomputeZValues(), this._identifyRefLayers();
    }
  }
  getLayerById(e2) {
    return this._layerByName[e2.toLowerCase()];
  }
  getLayoutProperties(e2) {
    const t2 = this._layerByName[e2.toLowerCase()];
    return t2 ? t2.layout : null;
  }
  getPaintProperties(e2) {
    const t2 = this._layerByName[e2.toLowerCase()];
    return t2 ? t2.paint : null;
  }
  setPaintProperties(e2, t2) {
    const r2 = this._layerByName[e2.toLowerCase()];
    if (!r2)
      return "";
    const i2 = { type: r2.typeName, id: r2.id, source: r2.source, "source-layer": r2.sourceLayer, minzoom: r2.minzoom, maxzoom: r2.maxzoom, filter: r2.filter, layout: r2.layout, paint: t2 }, s = a._recreateLayer(i2, r2), y2 = this.layers.indexOf(r2);
    return this.layers[y2] = s, this._layerByName[r2.id.toLowerCase()] = s, this._uidToLayer.set(r2.uid, s), r2.id;
  }
  setLayoutProperties(e2, t2) {
    const r2 = this._layerByName[e2.toLowerCase()];
    if (!r2)
      return "";
    const i2 = { type: r2.typeName, id: r2.id, source: r2.source, "source-layer": r2.sourceLayer, minzoom: r2.minzoom, maxzoom: r2.maxzoom, filter: r2.filter, layout: t2, paint: r2.paint }, s = a._recreateLayer(i2, r2), y2 = this.layers.indexOf(r2);
    return this.layers[y2] = s, this._layerByName[r2.id.toLowerCase()] = s, this._uidToLayer.set(r2.uid, s), r2.id;
  }
  setStyleLayerVisibility(e2, t2) {
    const r2 = this._layerByName[e2.toLowerCase()];
    if (!r2)
      return;
    const i2 = r2.layout || {};
    i2.visibility = t2;
    const s = { type: r2.typeName, id: r2.id, source: r2.source, "source-layer": r2.sourceLayer, minzoom: r2.minzoom, maxzoom: r2.maxzoom, filter: r2.filter, layout: i2, paint: r2.paint }, y2 = a._recreateLayer(s, r2), o2 = this.layers.indexOf(r2);
    this.layers[o2] = y2, this._layerByName[r2.id.toLowerCase()] = y2, this._uidToLayer.set(r2.uid, y2);
  }
  getStyleLayerVisibility(e2) {
    var t2;
    const r2 = this._layerByName[e2.toLowerCase()];
    if (!r2)
      return "none";
    const i2 = r2.layout;
    return (t2 = i2 == null ? void 0 : i2.visibility) != null ? t2 : "visible";
  }
  _recomputeZValues() {
    const e2 = this.layers, t2 = 1 / (e2.length + 1);
    for (let r2 = 0; r2 < e2.length; r2++)
      e2[r2].z = 1 - (1 + r2) * t2;
  }
  _identifyRefLayers() {
    const e2 = [], t2 = [];
    let r2 = 0;
    for (const i2 of this.layers) {
      if (i2.type === 1) {
        const t3 = i2;
        let s = i2.source + "|" + i2.sourceLayer;
        s += "|" + JSON.stringify(i2.layout && i2.layout.visibility), s += "|" + JSON.stringify(i2.minzoom), s += "|" + JSON.stringify(i2.maxzoom), s += "|" + JSON.stringify(i2.filter), (t3.hasDataDrivenFill || t3.hasDataDrivenOutline) && (s += "|" + JSON.stringify(r2)), e2.push({ key: s, layer: i2 });
      }
      if (i2.type === 2) {
        const e3 = i2;
        let s = i2.source + "|" + i2.sourceLayer;
        s += "|" + JSON.stringify(i2.layout && i2.layout.visibility), s += "|" + JSON.stringify(i2.minzoom), s += "|" + JSON.stringify(i2.maxzoom), s += "|" + JSON.stringify(i2.filter), s += "|" + JSON.stringify(i2.layout && i2.layout["line-cap"]), s += "|" + JSON.stringify(i2.layout && i2.layout["line-join"]), e3.hasDataDrivenLine && (s += "|" + JSON.stringify(r2)), t2.push({ key: s, layer: i2 });
      }
      ++r2;
    }
    this._assignRefLayers(e2), this._assignRefLayers(t2);
  }
  _assignRefLayers(e2) {
    let t2, r2;
    e2.sort((e3, t3) => e3.key < t3.key ? -1 : e3.key > t3.key ? 1 : 0);
    const i2 = e2.length;
    for (let s = 0; s < i2; s++) {
      const a2 = e2[s];
      if (a2.key === t2)
        a2.layer.refLayerId = r2;
      else if (t2 = a2.key, r2 = a2.layer.id, a2.layer.type === 1 && !a2.layer.getPaintProperty("fill-outline-color"))
        for (let y2 = s + 1; y2 < i2; y2++) {
          const i3 = e2[y2];
          if (i3.key !== t2)
            break;
          if (i3.layer.getPaintProperty("fill-outline-color")) {
            e2[s] = i3, e2[y2] = a2, r2 = i3.layer.id;
            break;
          }
        }
    }
  }
  _create(a2, y$12, o2) {
    const l2 = 1 - (1 + y$12) * (1 / (o2.length + 1)), n2 = this._runningId++;
    switch (a2.type) {
      case "background":
        return new g(0, a2, l2, n2);
      case "fill":
        return new y(1, a2, l2, n2);
      case "line":
        return new D(2, a2, l2, n2);
      case "symbol":
        return new P(3, a2, l2, n2);
      case "raster":
        throw new Error("Unsupported vector tile raster layer");
      case "circle":
        return new c(4, a2, l2, n2);
    }
    throw new Error("Unknown vector tile layer");
  }
  static _recreateLayer(a2, y$12) {
    switch (a2.type) {
      case "background":
        return new g(0, a2, y$12.z, y$12.uid);
      case "fill":
        return new y(1, a2, y$12.z, y$12.uid);
      case "line":
        return new D(2, a2, y$12.z, y$12.uid);
      case "symbol":
        return new P(3, a2, y$12.z, y$12.uid);
      case "raster":
        throw new Error("Unsupported vector tile raster layer");
      case "circle":
        return new c(4, a2, y$12.z, y$12.uid);
    }
  }
}
export { P$2 as P, a, a$1 as b, t$6 as c, d, f as e, f$1 as f, b$1 as g, h$1 as h, n, r, t$1 as t };
