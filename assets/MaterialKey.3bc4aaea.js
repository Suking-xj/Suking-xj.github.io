var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
import { aa as s } from "./vendor.74d5941c.js";
import { E as E$1, A as A$1, b as _$1 } from "./Utils.3f1577e5.js";
function e(e2) {
  switch (e2) {
    case "above-along":
    case "below-along":
    case "center-along":
      return 1;
    default:
      return 0;
  }
}
function a(t, s2 = false) {
  const r = A$1.SIZE_FIELD_STOPS | A$1.SIZE_MINMAX_VALUE | A$1.SIZE_SCALE_STOPS | A$1.SIZE_UNIT_VALUE, a2 = (t & (_$1.FIELD_TARGETS_OUTLINE | _$1.MINMAX_TARGETS_OUTLINE | _$1.SCALE_TARGETS_OUTLINE | _$1.UNIT_TARGETS_OUTLINE)) >>> 4;
  return s2 ? r & a2 : r & ~a2;
}
const S = 0, l = 8, c = 7, d = 8, V = 11, p = 11, g = 12, z = 13, T = 14, y = 15, E = 15, m = 16, L = 17, O = 18, I = 19, M = 20;
function A(t, e2, i, r, a2) {
  switch (t) {
    case E$1.FILL:
      return C.from(e2, r);
    case E$1.LINE:
      return b.from(e2, i);
    case E$1.MARKER:
      return w.from(e2);
    case E$1.TEXT:
      return F.from(e2);
    case E$1.LABEL:
      return N.from(e2, a2);
    default:
      throw new Error(`Unable to createMaterialKey for unknown geometryType ${t}`);
  }
}
function f(t) {
  switch (_.load(t).geometryType) {
    case E$1.MARKER:
      return new w(t);
    case E$1.FILL:
      return new C(t);
    case E$1.LINE:
      return new b(t);
    case E$1.TEXT:
      return new F(t);
    case E$1.LABEL:
      return new N(t);
  }
}
class _ {
  constructor(t) {
    this._data = 0, this._data = t;
  }
  static load(t) {
    const e2 = this.shared;
    return e2.data = t, e2;
  }
  set data(t) {
    this._data = t;
  }
  get data() {
    return this._data;
  }
  get geometryType() {
    return this.bits(d, V);
  }
  set geometryType(t) {
    this.setBits(t, d, V);
  }
  get mapAligned() {
    return !!this.bit(M);
  }
  set mapAligned(t) {
    this.setBit(M, t);
  }
  get sdf() {
    return !!this.bit(p);
  }
  set sdf(t) {
    this.setBit(p, t);
  }
  get pattern() {
    return !!this.bit(g);
  }
  set pattern(t) {
    this.setBit(g, t);
  }
  get textureBinding() {
    return this.bits(S, l);
  }
  set textureBinding(t) {
    this.setBits(t, S, l);
  }
  get geometryTypeString() {
    switch (this.geometryType) {
      case E$1.FILL:
        return "fill";
      case E$1.MARKER:
        return "marker";
      case E$1.LINE:
        return "line";
      case E$1.TEXT:
        return "text";
      case E$1.LABEL:
        return "label";
      default:
        throw new s(`Unable to handle unknown geometryType: ${this.geometryType}`);
    }
  }
  setBit(t, e2) {
    const i = 1 << t;
    e2 ? this._data |= i : this._data &= ~i;
  }
  bit(t) {
    return (this._data & 1 << t) >> t;
  }
  setBits(t, e2, i) {
    for (let s2 = e2, r = 0; s2 < i; s2++, r++)
      this.setBit(s2, (t & 1 << r) != 0);
  }
  bits(t, e2) {
    let i = 0;
    for (let s2 = t, r = 0; s2 < e2; s2++, r++)
      i |= this.bit(s2) << r;
    return i;
  }
  hasVV() {
    return false;
  }
  setVV(t, e2) {
  }
  getVariation() {
    return { mapAligned: this.mapAligned, pattern: this.pattern, sdf: this.sdf };
  }
  getVariationHash() {
    return this._data & ~(c & this.textureBinding);
  }
}
_.shared = new _(0);
const x = (t) => class extends t {
  get vvSizeMinMaxValue() {
    return this.bit(m) !== 0;
  }
  set vvSizeMinMaxValue(t2) {
    this.setBit(m, t2);
  }
  get vvSizeScaleStops() {
    return this.bit(L) !== 0;
  }
  set vvSizeScaleStops(t2) {
    this.setBit(L, t2);
  }
  get vvSizeFieldStops() {
    return this.bit(O) !== 0;
  }
  set vvSizeFieldStops(t2) {
    this.setBit(O, t2);
  }
  get vvSizeUnitValue() {
    return this.bit(I) !== 0;
  }
  set vvSizeUnitValue(t2) {
    this.setBit(I, t2);
  }
  hasVV() {
    return super.hasVV() || this.vvSizeMinMaxValue || this.vvSizeScaleStops || this.vvSizeFieldStops || this.vvSizeUnitValue;
  }
  setVV(t2, i) {
    super.setVV(t2, i);
    const s2 = a(t2, i) & t2;
    this.vvSizeMinMaxValue = !!(s2 & A$1.SIZE_MINMAX_VALUE), this.vvSizeFieldStops = !!(s2 & A$1.SIZE_FIELD_STOPS), this.vvSizeUnitValue = !!(s2 & A$1.SIZE_UNIT_VALUE), this.vvSizeScaleStops = !!(s2 & A$1.SIZE_SCALE_STOPS);
  }
}, R = (t) => class extends t {
  get vvRotation() {
    return this.bit(y) !== 0;
  }
  set vvRotation(t2) {
    this.setBit(y, t2);
  }
  hasVV() {
    return super.hasVV() || this.vvRotation;
  }
  setVV(t2, i) {
    super.setVV(t2, i), this.vvRotation = !i && !!(t2 & A$1.ROTATION);
  }
}, U = (t) => class extends t {
  get vvColor() {
    return this.bit(z) !== 0;
  }
  set vvColor(t2) {
    this.setBit(z, t2);
  }
  hasVV() {
    return super.hasVV() || this.vvColor;
  }
  setVV(t2, i) {
    super.setVV(t2, i), this.vvColor = !i && !!(t2 & A$1.COLOR);
  }
}, B = (t) => class extends t {
  get vvOpacity() {
    return this.bit(T) !== 0;
  }
  set vvOpacity(t2) {
    this.setBit(T, t2);
  }
  hasVV() {
    return super.hasVV() || this.vvOpacity;
  }
  setVV(t2, i) {
    super.setVV(t2, i), this.vvOpacity = !i && !!(t2 & A$1.OPACITY);
  }
};
class C extends U(B(_)) {
  static load(t) {
    const e2 = this.shared;
    return e2.data = t, e2;
  }
  static from(t, e2) {
    const i = this.load(0);
    return i.geometryType = E$1.FILL, e2 ? i.dotDensity = true : i.setVV(t, false), i.data;
  }
  getVariation() {
    return __spreadProps(__spreadValues({}, super.getVariation()), { dotDensity: this.dotDensity, vvColor: this.vvColor, vvOpacity: this.vvOpacity });
  }
  get dotDensity() {
    return !!this.bit(E);
  }
  set dotDensity(t) {
    this.setBit(E, t);
  }
}
C.shared = new C(0);
class w extends U(B(R(x(_)))) {
  static load(t) {
    const e2 = this.shared;
    return e2.data = t, e2;
  }
  static from(t) {
    const e2 = this.load(0);
    return e2.geometryType = E$1.MARKER, e2.setVV(t, false), e2.data;
  }
  getVariation() {
    return __spreadProps(__spreadValues({}, super.getVariation()), { vvColor: this.vvColor, vvRotation: this.vvRotation, vvOpacity: this.vvOpacity, vvSizeFieldStops: this.vvSizeFieldStops, vvSizeMinMaxValue: this.vvSizeMinMaxValue, vvSizeScaleStops: this.vvSizeScaleStops, vvSizeUnitValue: this.vvSizeUnitValue });
  }
}
w.shared = new w(0);
class b extends U(B(x(_))) {
  static load(t) {
    const e2 = this.shared;
    return e2.data = t, e2;
  }
  static from(t, e2) {
    const i = this.load(0);
    return i.geometryType = E$1.LINE, i.setVV(t, e2), i.data;
  }
  getVariation() {
    return __spreadProps(__spreadValues({}, super.getVariation()), { vvColor: this.vvColor, vvOpacity: this.vvOpacity, vvSizeFieldStops: this.vvSizeFieldStops, vvSizeMinMaxValue: this.vvSizeMinMaxValue, vvSizeScaleStops: this.vvSizeScaleStops, vvSizeUnitValue: this.vvSizeUnitValue });
  }
}
b.shared = new b(0);
class F extends U(B(R(x(_)))) {
  static load(t) {
    const e2 = this.shared;
    return e2.data = t, e2;
  }
  static from(t) {
    const e2 = this.load(t);
    return e2.geometryType = E$1.TEXT, e2.setVV(t, false), e2.data;
  }
  getVariation() {
    return __spreadProps(__spreadValues({}, super.getVariation()), { vvColor: this.vvColor, vvOpacity: this.vvOpacity, vvRotation: this.vvRotation, vvSizeFieldStops: this.vvSizeFieldStops, vvSizeMinMaxValue: this.vvSizeMinMaxValue, vvSizeScaleStops: this.vvSizeScaleStops, vvSizeUnitValue: this.vvSizeUnitValue });
  }
}
F.shared = new F(0);
class N extends x(_) {
  static load(t) {
    const e2 = this.shared;
    return e2.data = t, e2;
  }
  static from(t, e$1) {
    const i = this.load(0);
    return i.geometryType = E$1.LABEL, i.setVV(t, false), i.mapAligned = !!e(e$1), i.data;
  }
  getVariation() {
    return __spreadProps(__spreadValues({}, super.getVariation()), { vvSizeFieldStops: this.vvSizeFieldStops, vvSizeMinMaxValue: this.vvSizeMinMaxValue, vvSizeScaleStops: this.vvSizeScaleStops, vvSizeUnitValue: this.vvSizeUnitValue });
  }
}
N.shared = new N(0);
export { A, C, F, N, _, b, e, f, w };
