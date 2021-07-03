import { a7 as e } from "./vendor.74d5941c.js";
import { t } from "./FeatureSetReader.a91e3e2d.js";
import { o as o$1 } from "./definitions.6737c10c.js";
const i = 2, o = 1, h = 0, r = 1, n = 2;
class c {
  constructor(t$1, e2) {
    this.width = t$1, this.height = e2;
    const i2 = Math.ceil(t$1 / o), h2 = Math.ceil(e2 / o);
    this._cols = i2, this._rows = h2, this._cells = t.create(i2 * h2);
  }
  insertMetrics(t2) {
    const s = this._hasCollision(t2);
    return s === h && this._markMetrics(t2), s;
  }
  getCellId(t2, s) {
    return t2 + s * this._cols;
  }
  has(t2) {
    return this._cells.has(t2);
  }
  hasRange(t2, s) {
    return this._cells.hasRange(t2, s);
  }
  set(t2) {
    this._cells.set(t2);
  }
  setRange(t2, s) {
    this._cells.setRange(t2, s);
  }
  _hasCollision(t2) {
    const s = t2.id;
    let e2 = 0, o2 = 0;
    t2.save();
    do {
      const s2 = t2.boundsCount;
      e2 += s2;
      for (let e3 = 0; e3 < s2; e3++) {
        const s3 = t2.boundsComputedAnchorX(e3), h2 = t2.boundsComputedAnchorY(e3), c2 = t2.boundsWidth(e3) + i, l2 = t2.boundsHeight(e3) + i;
        switch (this._collide(s3, h2, c2, l2)) {
          case n:
            return n;
          case r:
            o2++;
        }
      }
    } while (t2.peekId() === s && t2.next());
    return t2.restore(), e2 === o2 ? r : h;
  }
  _collide(s, e$1, i2, c2) {
    const l2 = s - i2 / 2, _ = s + i2 / 2, a = e$1 - c2 / 2, u = e$1 + c2 / 2;
    if (_ < 0 || u < 0 || l2 > this.width || a > this.height)
      return r;
    const d = e(Math.floor(l2 / o), 0, this._cols), g = e(Math.floor(a / o), 0, this._rows), f = e(Math.ceil(_ / o), 0, this._cols), m = e(Math.ceil(u / o), 0, this._rows);
    for (let t2 = g; t2 <= m; t2++)
      for (let s2 = d; s2 <= f; s2++) {
        const e2 = this.getCellId(s2, t2);
        if (this.has(e2))
          return n;
      }
    return h;
  }
  _mark(s, e$1, i2, h2) {
    const r2 = s - i2 / 2, n2 = s + i2 / 2, c2 = e$1 - h2 / 2, l2 = e$1 + h2 / 2, _ = e(Math.floor(r2 / o), 0, this._cols), a = e(Math.floor(c2 / o), 0, this._rows), u = e(Math.ceil(n2 / o), 0, this._cols), d = e(Math.ceil(l2 / o), 0, this._rows);
    for (let t2 = a; t2 <= d; t2++)
      for (let s2 = _; s2 <= u; s2++) {
        const e2 = this.getCellId(s2, t2);
        this.set(e2);
      }
    return false;
  }
  _markMetrics(t2) {
    const s = t2.id;
    do {
      const s2 = t2.boundsCount;
      for (let e2 = 0; e2 < s2; e2++) {
        const s3 = t2.boundsComputedAnchorX(e2), o2 = t2.boundsComputedAnchorY(e2), h2 = t2.boundsWidth(e2) + i, r2 = t2.boundsHeight(e2) + i;
        this._mark(s3, o2, h2, r2);
      }
    } while (t2.peekId() === s && t2.next());
  }
}
class l {
  constructor(t2, s = 2) {
    this._bucketSize = t2, this._rowsLength = o$1 / t2, this._colsLength = o$1 / t2, this._elementsPerBucket = s, this._grid = this._initGrid();
  }
  checkOverlap(t2, s) {
    const e2 = Math.floor(t2 / this._bucketSize), i2 = Math.floor(s / this._bucketSize);
    return e2 < 0 || e2 >= this._rowsLength || i2 < 0 || i2 >= this._colsLength || this._grid[i2 * this._colsLength + e2] >= this._elementsPerBucket;
  }
  markUsed(t2, s) {
    const e2 = Math.floor(t2 / this._bucketSize), i2 = Math.floor(s / this._bucketSize);
    this._grid[i2 * this._colsLength + e2] += 1;
  }
  reset() {
    this._grid = this._initGrid();
  }
  _initGrid() {
    return new Uint8Array(this._rowsLength * this._colsLength);
  }
}
export { c, h, l, n, r };
