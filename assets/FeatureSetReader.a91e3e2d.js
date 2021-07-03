import { a5 as r, cy as ee, cW as p, a0 as t$1, ay as c, br as t$3 } from "./vendor.74d5941c.js";
import { t as t$2 } from "./centroid.93c1b848.js";
class t {
  constructor(t2, e) {
    this._mask = 0, this._buf = t2, this._mask = e;
  }
  static fromBuffer(e, s) {
    return new t(e, s);
  }
  static create(e, s = 4294967295) {
    const r2 = new Uint32Array(Math.ceil(e / 32));
    return new t(r2, s);
  }
  _getIndex(t2) {
    return Math.floor(t2 / 32);
  }
  has(t2) {
    const e = this._mask & t2;
    return !!(this._buf[this._getIndex(e)] & 1 << e % 32);
  }
  hasRange(t2, e) {
    let s = t2, r2 = e;
    for (; s % 32 && s !== r2; ) {
      if (this.has(s))
        return true;
      s++;
    }
    for (; r2 % 32 && s !== r2; ) {
      if (this.has(s))
        return true;
      r2--;
    }
    if (s === r2)
      return false;
    for (let h2 = s / 32; h2 !== r2 / 32; h2++) {
      if (this._buf[h2])
        return true;
    }
    return false;
  }
  set(t2) {
    const e = this._mask & t2, s = this._getIndex(e), r2 = 1 << e % 32;
    this._buf[s] |= r2;
  }
  setRange(t2, e) {
    let s = t2, r2 = e;
    for (; s % 32 && s !== r2; )
      this.set(s++);
    for (; r2 % 32 && s !== r2; )
      this.set(r2--);
    if (s !== r2)
      for (let h2 = s / 32; h2 !== r2 / 32; h2++)
        this._buf[h2] = 4294967295;
  }
  unset(t2) {
    const e = this._mask & t2, s = this._getIndex(e), r2 = 1 << e % 32;
    this._buf[s] &= 4294967295 ^ r2;
  }
  resize(t2) {
    const e = this._buf, s = new Uint32Array(Math.ceil(t2 / 32));
    s.set(e), this._buf = s;
  }
  or(t2) {
    for (let e = 0; e < this._buf.length; e++)
      this._buf[e] |= t2._buf[e];
    return this;
  }
  and(t2) {
    for (let e = 0; e < this._buf.length; e++)
      this._buf[e] &= t2._buf[e];
    return this;
  }
  xor(t2) {
    for (let e = 0; e < this._buf.length; e++)
      this._buf[e] ^= t2._buf[e];
    return this;
  }
  ior(t2) {
    for (let e = 0; e < this._buf.length; e++)
      this._buf[e] |= ~t2._buf[e];
    return this;
  }
  iand(t2) {
    for (let e = 0; e < this._buf.length; e++)
      this._buf[e] &= ~t2._buf[e];
    return this;
  }
  ixor(t2) {
    for (let e = 0; e < this._buf.length; e++)
      this._buf[e] ^= ~t2._buf[e];
    return this;
  }
  any() {
    for (let t2 = 0; t2 < this._buf.length; t2++)
      if (this._buf[t2])
        return true;
    return false;
  }
  copy(t2) {
    for (let e = 0; e < this._buf.length; e++)
      this._buf[e] = t2._buf[e];
    return this;
  }
  clone() {
    return new t(this._buf.slice(), this._mask);
  }
  clear() {
    for (let t2 = 0; t2 < this._buf.length; t2++)
      this._buf[t2] = 0;
  }
  forEachSet(t2) {
    for (let e = 0; e < this._buf.length; e++) {
      let s = this._buf[e], r2 = 32 * e;
      if (s)
        for (; s; ) {
          1 & s && t2(r2), s >>>= 1, r2++;
        }
    }
  }
  countSet() {
    let t2 = 0;
    return this.forEachSet((e) => {
      t2++;
    }), t2;
  }
}
let h = 0;
class d {
  constructor(t2) {
    this.type = "FeatureSetReader", this.seen = false, this.instance = 0, this._tx = 0, this._ty = 0, this._sx = 1, this._sy = 1, this._xmin = -1, this._xmax = 0, this._ymin = 0, this._ymax = 0, this._deleted = null, this._joined = [], this.instance = t2;
  }
  static createInstance() {
    return h++, h = h > 65535 ? 0 : h, h;
  }
  get isEmpty() {
    return r(this._deleted) && this._deleted.countSet() === this.getApproximateSize();
  }
  get _hasFilter() {
    return this._xmin !== -1;
  }
  setArcadeSpatialReference(t2) {
    this._arcadeSpatialReference = t2;
  }
  attachStorage(t2) {
    this._storage = t2;
  }
  getQuantizationTransform() {
    throw new Error("Unable to find transform for featureSet");
  }
  getStorage() {
    return this._storage;
  }
  getComputedNumeric(t2) {
    return this.getComputedNumericAtIndex(0);
  }
  setComputedNumeric(t2, e) {
    return this.setComputedNumericAtIndex(e, 0);
  }
  getComputedString(t2) {
    return this.getComputedStringAtIndex(0);
  }
  setComputedString(t2, e) {
    return this.setComputedStringAtIndex(0, e);
  }
  getComputedNumericAtIndex(t2) {
    return this._storage.getComputedNumericAtIndex(this.getDisplayId(), t2);
  }
  setComputedNumericAtIndex(t2, e) {
    this._storage.setComputedNumericAtIndex(this.getDisplayId(), t2, e);
  }
  getComputedStringAtIndex(t2) {
    return this._storage.getComputedStringAtIndex(this.getDisplayId(), t2);
  }
  setComputedStringAtIndex(t2, e) {
    return this._storage.setComputedStringAtIndex(this.getDisplayId(), t2, e);
  }
  transform(t2, e, r2, i) {
    const s = this.copy();
    return s._tx += t2, s._ty += e, s._sx *= r2, s._sy *= i, s;
  }
  extent(t2, e, r2, i) {
    const s = this.copy();
    return s._xmin = t2, s._xmax = r2, s._ymin = e, s._ymax = i, s;
  }
  hasFilter() {
    return this._hasFilter;
  }
  readAttribute(t2, e = false) {
    const r2 = this._readAttribute(t2, e);
    if (r2 !== void 0)
      return r2;
    for (const i of this._joined) {
      i.setIndex(this.getIndex());
      const r3 = i._readAttribute(t2, e);
      if (r3 !== void 0)
        return r3;
    }
  }
  readAttributes() {
    return this._readAttributes();
  }
  joinAttributes(t2) {
    this._joined.push(t2);
  }
  readArcadeFeature() {
    return this;
  }
  geometry() {
    const t2 = this.readHydratedGeometry(), e = ee(t2, this.geometryType, this.hasZ, this.hasM), r2 = p(e);
    return r2.spatialReference = this._arcadeSpatialReference, r2;
  }
  field(t2) {
    return this.readAttribute(t2, true);
  }
  hasField(t2) {
    return true;
  }
  setField(t2, e) {
  }
  keys() {
    return [];
  }
  castToText() {
    return "";
  }
  removeAtIndex(t$22) {
    t$1(this._deleted) && (this._deleted = t.create(this.getApproximateSize())), this._deleted.set(t$22);
  }
  _getExists() {
    return t$1(this._deleted) || !this._deleted.has(this.getIndex());
  }
  _computeCentroid() {
    if (this.geometryType !== "esriGeometryPolygon")
      return null;
    const t2 = this.readUnquantizedGeometry();
    if (!t2 || t2.hasIndeterminateRingOrder)
      return null;
    const e = c(this.getQuantizationTransform(), null);
    return t$2(new t$3(), t2, this.hasM, this.hasZ, e);
  }
  copyInto(t2) {
    t2.seen = this.seen, t2._storage = this._storage, t2._arcadeSpatialReference = this._arcadeSpatialReference, t2._joined = this._joined, t2._tx = this._tx, t2._ty = this._ty, t2._sx = this._sx, t2._sy = this._sy, t2._xmin = this._xmin, t2._xmax = this._xmax, t2._ymin = this._ymin, t2._ymax = this._ymax;
  }
}
export { d, t };
