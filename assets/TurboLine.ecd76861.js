import { o as o$2 } from "./definitions.6737c10c.js";
import { g as g$1 } from "./GeometryUtils.9c8423f5.js";
import { a4 as n$3 } from "./vendor.74d5941c.js";
import { o as o$3 } from "./_commonjsHelpers.f2a458db.js";
class t$1 {
  constructor(t2, s2) {
    this.x = t2, this.y = s2;
  }
  clone() {
    return new t$1(this.x, this.y);
  }
  equals(t2, s2) {
    return t2 === this.x && s2 === this.y;
  }
  isEqual(t2) {
    return t2.x === this.x && t2.y === this.y;
  }
  setCoords(t2, s2) {
    this.x = t2, this.y = s2;
  }
  normalize() {
    const t2 = this.x, s2 = this.y, i2 = Math.sqrt(t2 * t2 + s2 * s2);
    this.x /= i2, this.y /= i2;
  }
  rightPerpendicular() {
    const t2 = this.x;
    this.x = this.y, this.y = -t2;
  }
  move(t2, s2) {
    this.x += t2, this.y += s2;
  }
  assign(t2) {
    this.x = t2.x, this.y = t2.y;
  }
  assignAdd(t2, s2) {
    this.x = t2.x + s2.x, this.y = t2.y + s2.y;
  }
  assignSub(t2, s2) {
    this.x = t2.x - s2.x, this.y = t2.y - s2.y;
  }
  rotate(t2, s2) {
    const i2 = this.x, h2 = this.y;
    this.x = i2 * t2 - h2 * s2, this.y = i2 * s2 + h2 * t2;
  }
  scale(t2) {
    this.x *= t2, this.y *= t2;
  }
  length() {
    const t2 = this.x, s2 = this.y;
    return Math.sqrt(t2 * t2 + s2 * s2);
  }
  static distance(t2, s2) {
    const i2 = s2.x - t2.x, h2 = s2.y - t2.y;
    return Math.sqrt(i2 * i2 + h2 * h2);
  }
  static add(s2, i2) {
    return new t$1(s2.x + i2.x, s2.y + i2.y);
  }
  static sub(s2, i2) {
    return new t$1(s2.x - i2.x, s2.y - i2.y);
  }
}
class h$1 {
  constructor(i2, t2, s2) {
    this.ratio = i2, this.x = t2, this.y = s2;
  }
}
class n$2 {
  constructor(t2, s2, h2, n2 = 8, e2 = 8) {
    this.lines = [], this.starts = [], this.validateTessellation = true, this.pixelRatio = n2, this.pixelMargin = e2, this.tileSize = o$2 * n2, this.dz = t2, this.yPos = s2, this.xPos = h2;
  }
  setPixelMargin(i2) {
    i2 !== this.pixelMargin && (this.pixelMargin = i2, this.setExtent(this._extent));
  }
  setExtent(i2) {
    this._extent = i2, this.finalRatio = this.tileSize / i2 * (1 << this.dz);
    let t2 = this.pixelRatio * this.pixelMargin;
    t2 /= this.finalRatio;
    const s2 = i2 >> this.dz;
    t2 > s2 && (t2 = s2), this.margin = t2, this.xmin = s2 * this.xPos - t2, this.ymin = s2 * this.yPos - t2, this.xmax = this.xmin + s2 + 2 * t2, this.ymax = this.ymin + s2 + 2 * t2;
  }
  reset(i2) {
    this.type = i2, this.lines = [], this.starts = [], this.line = null, this.start = 0;
  }
  moveTo(i2, t2) {
    this._pushLine(), this._prevIsIn = this._isIn(i2, t2), this._moveTo(i2, t2, this._prevIsIn), this._prevPt = new t$1(i2, t2), this._firstPt = new t$1(i2, t2), this._dist = 0;
  }
  lineTo(i2, t2) {
    const n2 = this._isIn(i2, t2), e2 = new t$1(i2, t2), l2 = t$1.distance(this._prevPt, e2);
    let x2, a2, y2, r2, o2, m2, p2, u2;
    if (n2)
      this._prevIsIn ? this._lineTo(i2, t2, true) : (x2 = this._prevPt, a2 = e2, y2 = this._intersect(a2, x2), this.start = this._dist + l2 * (1 - this._r), this._lineTo(y2.x, y2.y, true), this._lineTo(a2.x, a2.y, true));
    else if (this._prevIsIn)
      a2 = this._prevPt, x2 = e2, y2 = this._intersect(a2, x2), this._lineTo(y2.x, y2.y, true), this._lineTo(x2.x, x2.y, false);
    else {
      const i3 = this._prevPt, t3 = e2;
      if (i3.x <= this.xmin && t3.x <= this.xmin || i3.x >= this.xmax && t3.x >= this.xmax || i3.y <= this.ymin && t3.y <= this.ymin || i3.y >= this.ymax && t3.y >= this.ymax)
        this._lineTo(t3.x, t3.y, false);
      else {
        const s2 = [];
        if ((i3.x < this.xmin && t3.x > this.xmin || i3.x > this.xmin && t3.x < this.xmin) && (r2 = (this.xmin - i3.x) / (t3.x - i3.x), u2 = i3.y + r2 * (t3.y - i3.y), u2 <= this.ymin ? m2 = false : u2 >= this.ymax ? m2 = true : s2.push(new h$1(r2, this.xmin, u2))), (i3.x < this.xmax && t3.x > this.xmax || i3.x > this.xmax && t3.x < this.xmax) && (r2 = (this.xmax - i3.x) / (t3.x - i3.x), u2 = i3.y + r2 * (t3.y - i3.y), u2 <= this.ymin ? m2 = false : u2 >= this.ymax ? m2 = true : s2.push(new h$1(r2, this.xmax, u2))), (i3.y < this.ymin && t3.y > this.ymin || i3.y > this.ymin && t3.y < this.ymin) && (r2 = (this.ymin - i3.y) / (t3.y - i3.y), p2 = i3.x + r2 * (t3.x - i3.x), p2 <= this.xmin ? o2 = false : p2 >= this.xmax ? o2 = true : s2.push(new h$1(r2, p2, this.ymin))), (i3.y < this.ymax && t3.y > this.ymax || i3.y > this.ymax && t3.y < this.ymax) && (r2 = (this.ymax - i3.y) / (t3.y - i3.y), p2 = i3.x + r2 * (t3.x - i3.x), p2 <= this.xmin ? o2 = false : p2 >= this.xmax ? o2 = true : s2.push(new h$1(r2, p2, this.ymax))), s2.length === 0)
          o2 ? m2 ? this._lineTo(this.xmax, this.ymax, true) : this._lineTo(this.xmax, this.ymin, true) : m2 ? this._lineTo(this.xmin, this.ymax, true) : this._lineTo(this.xmin, this.ymin, true);
        else if (s2.length > 1 && s2[0].ratio > s2[1].ratio)
          this.start = this._dist + l2 * s2[1].ratio, this._lineTo(s2[1].x, s2[1].y, true), this._lineTo(s2[0].x, s2[0].y, true);
        else {
          this.start = this._dist + l2 * s2[0].ratio;
          for (let i4 = 0; i4 < s2.length; i4++)
            this._lineTo(s2[i4].x, s2[i4].y, true);
        }
        this._lineTo(t3.x, t3.y, false);
      }
    }
    this._dist += l2, this._prevIsIn = n2, this._prevPt = e2;
  }
  close() {
    if (this.line.length > 2) {
      const i2 = this._firstPt, t2 = this._prevPt;
      i2.x === t2.x && i2.y === t2.y || this.lineTo(i2.x, i2.y);
      const s2 = this.line;
      let h2 = s2.length;
      for (; h2 >= 4 && (s2[0].x === s2[1].x && s2[0].x === s2[h2 - 2].x || s2[0].y === s2[1].y && s2[0].y === s2[h2 - 2].y); )
        s2.pop(), s2[0].x = s2[h2 - 2].x, s2[0].y = s2[h2 - 2].y, --h2;
    }
  }
  result(i2 = true) {
    return this._pushLine(), this.lines.length === 0 ? null : (this.type === 3 && i2 && l$1.simplify(this.tileSize, this.margin * this.finalRatio, this.lines), this.lines);
  }
  resultWithStarts() {
    if (this.type !== 2)
      throw new Error("Only valid for lines");
    this._pushLine();
    const i2 = this.lines, t2 = i2.length;
    if (t2 === 0)
      return null;
    const s2 = [];
    for (let h2 = 0; h2 < t2; h2++)
      s2.push({ line: i2[h2], start: this.starts[h2] || 0 });
    return s2;
  }
  _isIn(i2, t2) {
    return i2 >= this.xmin && i2 <= this.xmax && t2 >= this.ymin && t2 <= this.ymax;
  }
  _intersect(i2, t2) {
    let h2, n2, e2;
    if (t2.x >= this.xmin && t2.x <= this.xmax)
      n2 = t2.y <= this.ymin ? this.ymin : this.ymax, e2 = (n2 - i2.y) / (t2.y - i2.y), h2 = i2.x + e2 * (t2.x - i2.x);
    else if (t2.y >= this.ymin && t2.y <= this.ymax)
      h2 = t2.x <= this.xmin ? this.xmin : this.xmax, e2 = (h2 - i2.x) / (t2.x - i2.x), n2 = i2.y + e2 * (t2.y - i2.y);
    else {
      n2 = t2.y <= this.ymin ? this.ymin : this.ymax, h2 = t2.x <= this.xmin ? this.xmin : this.xmax;
      const s2 = (h2 - i2.x) / (t2.x - i2.x), l2 = (n2 - i2.y) / (t2.y - i2.y);
      s2 < l2 ? (e2 = s2, n2 = i2.y + s2 * (t2.y - i2.y)) : (e2 = l2, h2 = i2.x + l2 * (t2.x - i2.x));
    }
    return this._r = e2, new t$1(h2, n2);
  }
  _pushLine() {
    this.line && (this.type === 1 ? this.line.length > 0 && (this.lines.push(this.line), this.starts.push(this.start)) : this.type === 2 ? this.line.length > 1 && (this.lines.push(this.line), this.starts.push(this.start)) : this.type === 3 && this.line.length > 3 && (this.lines.push(this.line), this.starts.push(this.start))), this.line = [], this.start = 0;
  }
  _moveTo(i2, t2, h2) {
    this.type !== 3 ? h2 && (i2 = Math.round((i2 - (this.xmin + this.margin)) * this.finalRatio), t2 = Math.round((t2 - (this.ymin + this.margin)) * this.finalRatio), this.line.push(new t$1(i2, t2))) : (h2 || (i2 < this.xmin && (i2 = this.xmin), i2 > this.xmax && (i2 = this.xmax), t2 < this.ymin && (t2 = this.ymin), t2 > this.ymax && (t2 = this.ymax)), i2 = Math.round((i2 - (this.xmin + this.margin)) * this.finalRatio), t2 = Math.round((t2 - (this.ymin + this.margin)) * this.finalRatio), this.line.push(new t$1(i2, t2)), this._is_h = false, this._is_v = false);
  }
  _lineTo(i2, t2, h2) {
    let n2, e2;
    if (this.type !== 3)
      if (h2) {
        if (i2 = Math.round((i2 - (this.xmin + this.margin)) * this.finalRatio), t2 = Math.round((t2 - (this.ymin + this.margin)) * this.finalRatio), this.line.length > 0 && (n2 = this.line[this.line.length - 1], n2.equals(i2, t2)))
          return;
        this.line.push(new t$1(i2, t2));
      } else
        this.line && this.line.length > 0 && this._pushLine();
    else if (h2 || (i2 < this.xmin && (i2 = this.xmin), i2 > this.xmax && (i2 = this.xmax), t2 < this.ymin && (t2 = this.ymin), t2 > this.ymax && (t2 = this.ymax)), i2 = Math.round((i2 - (this.xmin + this.margin)) * this.finalRatio), t2 = Math.round((t2 - (this.ymin + this.margin)) * this.finalRatio), this.line && this.line.length > 0) {
      n2 = this.line[this.line.length - 1];
      const h3 = n2.x === i2, l2 = n2.y === t2;
      if (h3 && l2)
        return;
      this._is_h && h3 || this._is_v && l2 ? (n2.x = i2, n2.y = t2, e2 = this.line[this.line.length - 2], e2.x === i2 && e2.y === t2 ? (this.line.pop(), this.line.length <= 1 ? (this._is_h = false, this._is_v = false) : (e2 = this.line[this.line.length - 2], this._is_h = e2.x === i2, this._is_v = e2.y === t2)) : (this._is_h = e2.x === i2, this._is_v = e2.y === t2)) : (this.line.push(new t$1(i2, t2)), this._is_h = h3, this._is_v = l2);
    } else
      this.line.push(new t$1(i2, t2));
  }
}
class e$1 {
  setExtent(i2) {
    this._ratio = i2 === 4096 ? 1 : 4096 / i2;
  }
  get validateTessellation() {
    return this._ratio < 1;
  }
  reset(i2) {
    this.lines = [], this.line = null;
  }
  moveTo(i2, t2) {
    this.line && this.lines.push(this.line), this.line = [];
    const h2 = this._ratio;
    this.line.push(new t$1(i2 * h2, t2 * h2));
  }
  lineTo(i2, t2) {
    const h2 = this._ratio;
    this.line.push(new t$1(i2 * h2, t2 * h2));
  }
  close() {
    const i2 = this.line;
    i2 && !i2[0].isEqual(i2[i2.length - 1]) && i2.push(i2[0]);
  }
  result() {
    return this.line && this.lines.push(this.line), this.lines.length === 0 ? null : this.lines;
  }
}
class l$1 {
  static simplify(i2, t2, s2) {
    if (!s2)
      return;
    const h2 = -t2, n2 = i2 + t2, e2 = -t2, x2 = i2 + t2, a2 = [], y2 = [], r2 = s2.length;
    for (let l2 = 0; l2 < r2; ++l2) {
      const i3 = s2[l2];
      if (!i3 || i3.length < 2)
        continue;
      let t3, r3 = i3[0];
      const o3 = i3.length;
      for (let s3 = 1; s3 < o3; ++s3)
        t3 = i3[s3], r3.x === t3.x && (r3.x <= h2 && (r3.y > t3.y ? (a2.push(l2), a2.push(s3), a2.push(0), a2.push(-1)) : (y2.push(l2), y2.push(s3), y2.push(0), y2.push(-1))), r3.x >= n2 && (r3.y < t3.y ? (a2.push(l2), a2.push(s3), a2.push(1), a2.push(-1)) : (y2.push(l2), y2.push(s3), y2.push(1), y2.push(-1)))), r3.y === t3.y && (r3.y <= e2 && (r3.x < t3.x ? (a2.push(l2), a2.push(s3), a2.push(2), a2.push(-1)) : (y2.push(l2), y2.push(s3), y2.push(2), y2.push(-1))), r3.y >= x2 && (r3.x > t3.x ? (a2.push(l2), a2.push(s3), a2.push(3), a2.push(-1)) : (y2.push(l2), y2.push(s3), y2.push(3), y2.push(-1)))), r3 = t3;
    }
    if (a2.length === 0 || y2.length === 0)
      return;
    l$1.fillParent(s2, y2, a2), l$1.fillParent(s2, a2, y2);
    const o2 = [];
    l$1.calcDeltas(o2, y2, a2), l$1.calcDeltas(o2, a2, y2), l$1.addDeltas(o2, s2);
  }
  static fillParent(i2, s2, h2) {
    const n2 = h2.length, e2 = s2.length;
    for (let l2 = 0; l2 < e2; l2 += 4) {
      const e3 = s2[l2], x2 = s2[l2 + 1], a2 = s2[l2 + 2], y2 = i2[e3][x2 - 1], r2 = i2[e3][x2];
      let o2 = 8092, m2 = -1;
      for (let s3 = 0; s3 < n2; s3 += 4) {
        if (h2[s3 + 2] !== a2)
          continue;
        const n3 = h2[s3], e4 = h2[s3 + 1], l3 = i2[n3][e4 - 1], x3 = i2[n3][e4];
        switch (a2) {
          case 0:
          case 1:
            if (g$1(y2.y, l3.y, x3.y) && g$1(r2.y, l3.y, x3.y)) {
              const i3 = Math.abs(x3.y - l3.y);
              i3 < o2 && (o2 = i3, m2 = s3);
            }
            break;
          case 2:
          case 3:
            if (g$1(y2.x, l3.x, x3.x) && g$1(r2.x, l3.x, x3.x)) {
              const i3 = Math.abs(x3.x - l3.x);
              i3 < o2 && (o2 = i3, m2 = s3);
            }
        }
      }
      s2[l2 + 3] = m2;
    }
  }
  static calcDeltas(i2, t2, s2) {
    const h2 = t2.length;
    for (let n2 = 0; n2 < h2; n2 += 4) {
      const h3 = [], e2 = l$1.calcDelta(n2, t2, s2, h3);
      i2.push(t2[n2]), i2.push(t2[n2 + 1]), i2.push(t2[n2 + 2]), i2.push(e2);
    }
  }
  static calcDelta(i2, t2, s2, h2) {
    const n2 = t2[i2 + 3];
    if (n2 === -1)
      return 0;
    const e2 = h2.length;
    return e2 > 1 && h2[e2 - 2] === n2 ? 0 : (h2.push(n2), l$1.calcDelta(n2, s2, t2, h2) + 1);
  }
  static addDeltas(i2, t2) {
    const s2 = i2.length;
    let h2 = 0;
    for (let n2 = 0; n2 < s2; n2 += 4) {
      const t3 = i2[n2 + 3];
      t3 > h2 && (h2 = t3);
    }
    for (let n2 = 0; n2 < s2; n2 += 4) {
      const s3 = t2[i2[n2]], e2 = i2[n2 + 1], l2 = h2 - i2[n2 + 3];
      switch (i2[n2 + 2]) {
        case 0:
          s3[e2 - 1].x -= l2, s3[e2].x -= l2, e2 === 1 && (s3[s3.length - 1].x -= l2), e2 === s3.length - 1 && (s3[0].x -= l2);
          break;
        case 1:
          s3[e2 - 1].x += l2, s3[e2].x += l2, e2 === 1 && (s3[s3.length - 1].x += l2), e2 === s3.length - 1 && (s3[0].x += l2);
          break;
        case 2:
          s3[e2 - 1].y -= l2, s3[e2].y -= l2, e2 === 1 && (s3[s3.length - 1].y -= l2), e2 === s3.length - 1 && (s3[0].y -= l2);
          break;
        case 3:
          s3[e2 - 1].y += l2, s3[e2].y += l2, e2 === 1 && (s3[s3.length - 1].y += l2), e2 === s3.length - 1 && (s3[0].y += l2);
      }
    }
  }
}
var s$1 = o$3(function(e2) {
  var t2, s2;
  t2 = function() {
    var e3 = { DEBUG: false, assert: function(t3, s3) {
      if (e3.DEBUG && !t3)
        throw new Error("Assertion failed" + (s3 ? ": " + s3 : ""));
    }, GLU_TESS_MAX_COORD: 1e150, TRUE_PROJECT: false, GLU_TESS_DEFAULT_TOLERANCE: 0, windingRule: { GLU_TESS_WINDING_ODD: 100130, GLU_TESS_WINDING_NONZERO: 100131, GLU_TESS_WINDING_POSITIVE: 100132, GLU_TESS_WINDING_NEGATIVE: 100133, GLU_TESS_WINDING_ABS_GEQ_TWO: 100134 }, primitiveType: { GL_LINE_LOOP: 2, GL_TRIANGLES: 4, GL_TRIANGLE_STRIP: 5, GL_TRIANGLE_FAN: 6 }, errorType: { GLU_TESS_MISSING_BEGIN_POLYGON: 100151, GLU_TESS_MISSING_END_POLYGON: 100153, GLU_TESS_MISSING_BEGIN_CONTOUR: 100152, GLU_TESS_MISSING_END_CONTOUR: 100154, GLU_TESS_COORD_TOO_LARGE: 100155, GLU_TESS_NEED_COMBINE_CALLBACK: 100156 }, gluEnum: { GLU_TESS_BEGIN: 100100, GLU_TESS_VERTEX: 100101, GLU_TESS_END: 100102, GLU_TESS_ERROR: 100103, GLU_TESS_EDGE_FLAG: 100104, GLU_TESS_COMBINE: 100105, GLU_TESS_BEGIN_DATA: 100106, GLU_TESS_VERTEX_DATA: 100107, GLU_TESS_END_DATA: 100108, GLU_TESS_ERROR_DATA: 100109, GLU_TESS_EDGE_FLAG_DATA: 100110, GLU_TESS_COMBINE_DATA: 100111, GLU_TESS_MESH: 100112, GLU_TESS_TOLERANCE: 100142, GLU_TESS_WINDING_RULE: 100140, GLU_TESS_BOUNDARY_ONLY: 100141, GLU_INVALID_ENUM: 100900, GLU_INVALID_VALUE: 100901 }, geom: {} };
    return e3.geom.vertEq = function(e4, t3) {
      return e4.s === t3.s && e4.t === t3.t;
    }, e3.geom.vertLeq = function(e4, t3) {
      return e4.s < t3.s || e4.s === t3.s && e4.t <= t3.t;
    }, e3.geom.edgeEval = function(t3, s3, r2) {
      e3.assert(e3.geom.vertLeq(t3, s3) && e3.geom.vertLeq(s3, r2));
      var i2 = s3.s - t3.s, n2 = r2.s - s3.s;
      return i2 + n2 > 0 ? i2 < n2 ? s3.t - t3.t + (t3.t - r2.t) * (i2 / (i2 + n2)) : s3.t - r2.t + (r2.t - t3.t) * (n2 / (i2 + n2)) : 0;
    }, e3.geom.edgeSign = function(t3, s3, r2) {
      e3.assert(e3.geom.vertLeq(t3, s3) && e3.geom.vertLeq(s3, r2));
      var i2 = s3.s - t3.s, n2 = r2.s - s3.s;
      return i2 + n2 > 0 ? (s3.t - r2.t) * i2 + (s3.t - t3.t) * n2 : 0;
    }, e3.geom.transLeq = function(e4, t3) {
      return e4.t < t3.t || e4.t === t3.t && e4.s <= t3.s;
    }, e3.geom.transEval = function(t3, s3, r2) {
      e3.assert(e3.geom.transLeq(t3, s3) && e3.geom.transLeq(s3, r2));
      var i2 = s3.t - t3.t, n2 = r2.t - s3.t;
      return i2 + n2 > 0 ? i2 < n2 ? s3.s - t3.s + (t3.s - r2.s) * (i2 / (i2 + n2)) : s3.s - r2.s + (r2.s - t3.s) * (n2 / (i2 + n2)) : 0;
    }, e3.geom.transSign = function(t3, s3, r2) {
      e3.assert(e3.geom.transLeq(t3, s3) && e3.geom.transLeq(s3, r2));
      var i2 = s3.t - t3.t, n2 = r2.t - s3.t;
      return i2 + n2 > 0 ? (s3.s - r2.s) * i2 + (s3.s - t3.s) * n2 : 0;
    }, e3.geom.edgeGoesLeft = function(t3) {
      return e3.geom.vertLeq(t3.dst(), t3.org);
    }, e3.geom.edgeGoesRight = function(t3) {
      return e3.geom.vertLeq(t3.org, t3.dst());
    }, e3.geom.vertL1dist = function(e4, t3) {
      return Math.abs(e4.s - t3.s) + Math.abs(e4.t - t3.t);
    }, e3.geom.vertCCW = function(e4, t3, s3) {
      return e4.s * (t3.t - s3.t) + t3.s * (s3.t - e4.t) + s3.s * (e4.t - t3.t) >= 0;
    }, e3.geom.interpolate_ = function(e4, t3, s3, r2) {
      return (e4 = e4 < 0 ? 0 : e4) <= (s3 = s3 < 0 ? 0 : s3) ? s3 === 0 ? (t3 + r2) / 2 : t3 + e4 / (e4 + s3) * (r2 - t3) : r2 + s3 / (e4 + s3) * (t3 - r2);
    }, e3.geom.edgeIntersect = function(t3, s3, r2, i2, n2) {
      var o2, l2, a2;
      e3.geom.vertLeq(t3, s3) || (a2 = t3, t3 = s3, s3 = a2), e3.geom.vertLeq(r2, i2) || (a2 = r2, r2 = i2, i2 = a2), e3.geom.vertLeq(t3, r2) || (a2 = t3, t3 = r2, r2 = a2, a2 = s3, s3 = i2, i2 = a2), e3.geom.vertLeq(r2, s3) ? e3.geom.vertLeq(s3, i2) ? ((o2 = e3.geom.edgeEval(t3, r2, s3)) + (l2 = e3.geom.edgeEval(r2, s3, i2)) < 0 && (o2 = -o2, l2 = -l2), n2.s = e3.geom.interpolate_(o2, r2.s, l2, s3.s)) : ((o2 = e3.geom.edgeSign(t3, r2, s3)) + (l2 = -e3.geom.edgeSign(t3, i2, s3)) < 0 && (o2 = -o2, l2 = -l2), n2.s = e3.geom.interpolate_(o2, r2.s, l2, i2.s)) : n2.s = (r2.s + s3.s) / 2, e3.geom.transLeq(t3, s3) || (a2 = t3, t3 = s3, s3 = a2), e3.geom.transLeq(r2, i2) || (a2 = r2, r2 = i2, i2 = a2), e3.geom.transLeq(t3, r2) || (a2 = t3, t3 = r2, r2 = a2, a2 = s3, s3 = i2, i2 = a2), e3.geom.transLeq(r2, s3) ? e3.geom.transLeq(s3, i2) ? ((o2 = e3.geom.transEval(t3, r2, s3)) + (l2 = e3.geom.transEval(r2, s3, i2)) < 0 && (o2 = -o2, l2 = -l2), n2.t = e3.geom.interpolate_(o2, r2.t, l2, s3.t)) : ((o2 = e3.geom.transSign(t3, r2, s3)) + (l2 = -e3.geom.transSign(t3, i2, s3)) < 0 && (o2 = -o2, l2 = -l2), n2.t = e3.geom.interpolate_(o2, r2.t, l2, i2.t)) : n2.t = (r2.t + s3.t) / 2;
    }, e3.mesh = {}, e3.mesh.makeEdge = function(t3) {
      var s3 = e3.mesh.makeEdgePair_(t3.eHead);
      return e3.mesh.makeVertex_(s3, t3.vHead), e3.mesh.makeVertex_(s3.sym, t3.vHead), e3.mesh.makeFace_(s3, t3.fHead), s3;
    }, e3.mesh.meshSplice = function(t3, s3) {
      var r2 = false, i2 = false;
      t3 !== s3 && (s3.org !== t3.org && (i2 = true, e3.mesh.killVertex_(s3.org, t3.org)), s3.lFace !== t3.lFace && (r2 = true, e3.mesh.killFace_(s3.lFace, t3.lFace)), e3.mesh.splice_(s3, t3), i2 || (e3.mesh.makeVertex_(s3, t3.org), t3.org.anEdge = t3), r2 || (e3.mesh.makeFace_(s3, t3.lFace), t3.lFace.anEdge = t3));
    }, e3.mesh.deleteEdge = function(t3) {
      var s3 = t3.sym, r2 = false;
      t3.lFace !== t3.rFace() && (r2 = true, e3.mesh.killFace_(t3.lFace, t3.rFace())), t3.oNext === t3 ? e3.mesh.killVertex_(t3.org, null) : (t3.rFace().anEdge = t3.oPrev(), t3.org.anEdge = t3.oNext, e3.mesh.splice_(t3, t3.oPrev()), r2 || e3.mesh.makeFace_(t3, t3.lFace)), s3.oNext === s3 ? (e3.mesh.killVertex_(s3.org, null), e3.mesh.killFace_(s3.lFace, null)) : (t3.lFace.anEdge = s3.oPrev(), s3.org.anEdge = s3.oNext, e3.mesh.splice_(s3, s3.oPrev())), e3.mesh.killEdge_(t3);
    }, e3.mesh.addEdgeVertex = function(t3) {
      var s3 = e3.mesh.makeEdgePair_(t3), r2 = s3.sym;
      return e3.mesh.splice_(s3, t3.lNext), s3.org = t3.dst(), e3.mesh.makeVertex_(r2, s3.org), s3.lFace = r2.lFace = t3.lFace, s3;
    }, e3.mesh.splitEdge = function(t3) {
      var s3 = e3.mesh.addEdgeVertex(t3).sym;
      return e3.mesh.splice_(t3.sym, t3.sym.oPrev()), e3.mesh.splice_(t3.sym, s3), t3.sym.org = s3.org, s3.dst().anEdge = s3.sym, s3.sym.lFace = t3.rFace(), s3.winding = t3.winding, s3.sym.winding = t3.sym.winding, s3;
    }, e3.mesh.connect = function(t3, s3) {
      var r2 = false, i2 = e3.mesh.makeEdgePair_(t3), n2 = i2.sym;
      return s3.lFace !== t3.lFace && (r2 = true, e3.mesh.killFace_(s3.lFace, t3.lFace)), e3.mesh.splice_(i2, t3.lNext), e3.mesh.splice_(n2, s3), i2.org = t3.dst(), n2.org = s3.org, i2.lFace = n2.lFace = t3.lFace, t3.lFace.anEdge = n2, r2 || e3.mesh.makeFace_(i2, t3.lFace), i2;
    }, e3.mesh.zapFace = function(t3) {
      var s3, r2 = t3.anEdge, i2 = r2.lNext;
      do {
        if (i2 = (s3 = i2).lNext, s3.lFace = null, s3.rFace() === null) {
          s3.oNext === s3 ? e3.mesh.killVertex_(s3.org, null) : (s3.org.anEdge = s3.oNext, e3.mesh.splice_(s3, s3.oPrev()));
          var n2 = s3.sym;
          n2.oNext === n2 ? e3.mesh.killVertex_(n2.org, null) : (n2.org.anEdge = n2.oNext, e3.mesh.splice_(n2, n2.oPrev())), e3.mesh.killEdge_(s3);
        }
      } while (s3 !== r2);
      var o2 = t3.prev, l2 = t3.next;
      l2.prev = o2, o2.next = l2;
    }, e3.mesh.meshUnion = function(e4, t3) {
      var s3 = e4.fHead, r2 = e4.vHead, i2 = e4.eHead, n2 = t3.fHead, o2 = t3.vHead, l2 = t3.eHead;
      return n2.next !== n2 && (s3.prev.next = n2.next, n2.next.prev = s3.prev, n2.prev.next = s3, s3.prev = n2.prev), o2.next !== o2 && (r2.prev.next = o2.next, o2.next.prev = r2.prev, o2.prev.next = r2, r2.prev = o2.prev), l2.next !== l2 && (i2.sym.next.sym.next = l2.next, l2.next.sym.next = i2.sym.next, l2.sym.next.sym.next = i2, i2.sym.next = l2.sym.next), e4;
    }, e3.mesh.deleteMesh = function(e4) {
    }, e3.mesh.makeEdgePair_ = function(t3) {
      var s3 = new e3.GluHalfEdge(), r2 = new e3.GluHalfEdge(), i2 = t3.sym.next;
      return r2.next = i2, i2.sym.next = s3, s3.next = t3, t3.sym.next = r2, s3.sym = r2, s3.oNext = s3, s3.lNext = r2, r2.sym = s3, r2.oNext = r2, r2.lNext = s3, s3;
    }, e3.mesh.splice_ = function(e4, t3) {
      var s3 = e4.oNext, r2 = t3.oNext;
      s3.sym.lNext = t3, r2.sym.lNext = e4, e4.oNext = r2, t3.oNext = s3;
    }, e3.mesh.makeVertex_ = function(t3, s3) {
      var r2 = s3.prev, i2 = new e3.GluVertex(s3, r2);
      r2.next = i2, s3.prev = i2, i2.anEdge = t3;
      var n2 = t3;
      do {
        n2.org = i2, n2 = n2.oNext;
      } while (n2 !== t3);
    }, e3.mesh.makeFace_ = function(t3, s3) {
      var r2 = s3.prev, i2 = new e3.GluFace(s3, r2);
      r2.next = i2, s3.prev = i2, i2.anEdge = t3, i2.inside = s3.inside;
      var n2 = t3;
      do {
        n2.lFace = i2, n2 = n2.lNext;
      } while (n2 !== t3);
    }, e3.mesh.killEdge_ = function(e4) {
      var t3 = e4.next, s3 = e4.sym.next;
      t3.sym.next = s3, s3.sym.next = t3;
    }, e3.mesh.killVertex_ = function(e4, t3) {
      var s3 = e4.anEdge, r2 = s3;
      do {
        r2.org = t3, r2 = r2.oNext;
      } while (r2 !== s3);
      var i2 = e4.prev, n2 = e4.next;
      n2.prev = i2, i2.next = n2;
    }, e3.mesh.killFace_ = function(e4, t3) {
      var s3 = e4.anEdge, r2 = s3;
      do {
        r2.lFace = t3, r2 = r2.lNext;
      } while (r2 !== s3);
      var i2 = e4.prev, n2 = e4.next;
      n2.prev = i2, i2.next = n2;
    }, e3.normal = {}, e3.normal.S_UNIT_X_ = 1, e3.normal.S_UNIT_Y_ = 0, e3.normal.projectPolygon = function(t3, s3, r2, i2) {
      var n2 = false, o2 = [s3, r2, i2];
      s3 === 0 && r2 === 0 && i2 === 0 && (e3.normal.computeNormal_(t3, o2), n2 = true);
      var l2, a2 = e3.normal.longAxis_(o2), _ = t3.mesh.vHead;
      if (e3.TRUE_PROJECT) {
        e3.normal.normalize_(o2);
        var g2 = [0, 0, 0], d2 = [0, 0, 0];
        g2[a2] = 0, g2[(a2 + 1) % 3] = e3.normal.S_UNIT_X_, g2[(a2 + 2) % 3] = e3.normal.S_UNIT_Y_;
        var h2 = e3.normal.dot_(g2, o2);
        for (g2[0] -= h2 * o2[0], g2[1] -= h2 * o2[1], g2[2] -= h2 * o2[2], e3.normal.normalize_(g2), d2[0] = o2[1] * g2[2] - o2[2] * g2[1], d2[1] = o2[2] * g2[0] - o2[0] * g2[2], d2[2] = o2[0] * g2[1] - o2[1] * g2[0], e3.normal.normalize_(d2), l2 = _.next; l2 !== _; l2 = l2.next)
          l2.s = e3.normal.dot_(l2.coords, g2), l2.t = e3.normal.dot_(l2.coords, d2);
      } else {
        var c2 = (a2 + 1) % 3, u2 = (a2 + 2) % 3, m2 = o2[a2] > 0 ? 1 : -1;
        for (l2 = _.next; l2 !== _; l2 = l2.next)
          l2.s = l2.coords[c2], l2.t = m2 * l2.coords[u2];
      }
      n2 && e3.normal.checkOrientation_(t3);
    }, e3.normal.dot_ = function(e4, t3) {
      return e4[0] * t3[0] + e4[1] * t3[1] + e4[2] * t3[2];
    }, e3.normal.normalize_ = function(t3) {
      var s3 = t3[0] * t3[0] + t3[1] * t3[1] + t3[2] * t3[2];
      e3.assert(s3 > 0), s3 = Math.sqrt(s3), t3[0] /= s3, t3[1] /= s3, t3[2] /= s3;
    }, e3.normal.longAxis_ = function(e4) {
      var t3 = 0;
      return Math.abs(e4[1]) > Math.abs(e4[0]) && (t3 = 1), Math.abs(e4[2]) > Math.abs(e4[t3]) && (t3 = 2), t3;
    }, e3.normal.computeNormal_ = function(t3, s3) {
      var r2, i2 = [-2 * e3.GLU_TESS_MAX_COORD, -2 * e3.GLU_TESS_MAX_COORD, -2 * e3.GLU_TESS_MAX_COORD], n2 = [2 * e3.GLU_TESS_MAX_COORD, 2 * e3.GLU_TESS_MAX_COORD, 2 * e3.GLU_TESS_MAX_COORD], o2 = [], l2 = [], a2 = t3.mesh.vHead;
      for (r2 = a2.next; r2 !== a2; r2 = r2.next)
        for (var _ = 0; _ < 3; ++_) {
          var g2 = r2.coords[_];
          g2 < n2[_] && (n2[_] = g2, l2[_] = r2), g2 > i2[_] && (i2[_] = g2, o2[_] = r2);
        }
      var d2 = 0;
      if (i2[1] - n2[1] > i2[0] - n2[0] && (d2 = 1), i2[2] - n2[2] > i2[d2] - n2[d2] && (d2 = 2), n2[d2] >= i2[d2])
        return s3[0] = 0, s3[1] = 0, void (s3[2] = 1);
      var h2 = 0, c2 = l2[d2], u2 = o2[d2], m2 = [0, 0, 0], p2 = [c2.coords[0] - u2.coords[0], c2.coords[1] - u2.coords[1], c2.coords[2] - u2.coords[2]], E2 = [0, 0, 0];
      for (r2 = a2.next; r2 !== a2; r2 = r2.next) {
        E2[0] = r2.coords[0] - u2.coords[0], E2[1] = r2.coords[1] - u2.coords[1], E2[2] = r2.coords[2] - u2.coords[2], m2[0] = p2[1] * E2[2] - p2[2] * E2[1], m2[1] = p2[2] * E2[0] - p2[0] * E2[2], m2[2] = p2[0] * E2[1] - p2[1] * E2[0];
        var v2 = m2[0] * m2[0] + m2[1] * m2[1] + m2[2] * m2[2];
        v2 > h2 && (h2 = v2, s3[0] = m2[0], s3[1] = m2[1], s3[2] = m2[2]);
      }
      h2 <= 0 && (s3[0] = s3[1] = s3[2] = 0, s3[e3.normal.longAxis_(p2)] = 1);
    }, e3.normal.checkOrientation_ = function(e4) {
      for (var t3 = 0, s3 = e4.mesh.fHead, r2 = s3.next; r2 !== s3; r2 = r2.next) {
        var i2 = r2.anEdge;
        if (!(i2.winding <= 0))
          do {
            t3 += (i2.org.s - i2.dst().s) * (i2.org.t + i2.dst().t), i2 = i2.lNext;
          } while (i2 !== r2.anEdge);
      }
      if (t3 < 0)
        for (var n2 = e4.mesh.vHead, o2 = n2.next; o2 !== n2; o2 = o2.next)
          o2.t = -o2.t;
    }, e3.render = {}, e3.render.renderMesh = function(t3, s3, r2) {
      for (var i2 = false, n2 = -1, o2 = s3.fHead.prev; o2 !== s3.fHead; o2 = o2.prev)
        if (o2.inside) {
          i2 || (t3.callBeginCallback(e3.primitiveType.GL_TRIANGLES), i2 = true);
          var l2 = o2.anEdge;
          e3.assert(l2.lNext.lNext.lNext === l2, "renderMesh called with non-triangulated mesh");
          do {
            if (r2) {
              var a2 = l2.rFace().inside ? 0 : 1;
              n2 !== a2 && (n2 = a2, t3.callEdgeFlagCallback(!!n2));
            }
            t3.callVertexCallback(l2.org.data), l2 = l2.lNext;
          } while (l2 !== o2.anEdge);
        }
      i2 && t3.callEndCallback();
    }, e3.render.renderBoundary = function(t3, s3) {
      for (var r2 = s3.fHead.next; r2 !== s3.fHead; r2 = r2.next)
        if (r2.inside) {
          t3.callBeginCallback(e3.primitiveType.GL_LINE_LOOP);
          var i2 = r2.anEdge;
          do {
            t3.callVertexCallback(i2.org.data), i2 = i2.lNext;
          } while (i2 !== r2.anEdge);
          t3.callEndCallback();
        }
    }, e3.sweep = {}, e3.sweep.SENTINEL_COORD_ = 4 * e3.GLU_TESS_MAX_COORD, e3.sweep.TOLERANCE_NONZERO_ = false, e3.sweep.computeInterior = function(t3) {
      var s3;
      for (t3.fatalError = false, e3.sweep.removeDegenerateEdges_(t3), e3.sweep.initPriorityQ_(t3), e3.sweep.initEdgeDict_(t3); (s3 = t3.pq.extractMin()) !== null; ) {
        for (; ; ) {
          var r2 = t3.pq.minimum();
          if (r2 === null || !e3.geom.vertEq(r2, s3))
            break;
          r2 = t3.pq.extractMin(), e3.sweep.spliceMergeVertices_(t3, s3.anEdge, r2.anEdge);
        }
        e3.sweep.sweepEvent_(t3, s3);
      }
      var i2 = t3.dict.getMin().getKey();
      t3.event = i2.eUp.org, e3.sweep.doneEdgeDict_(t3), e3.sweep.donePriorityQ_(t3), e3.sweep.removeDegenerateFaces_(t3.mesh), t3.mesh.checkMesh();
    }, e3.sweep.addWinding_ = function(e4, t3) {
      e4.winding += t3.winding, e4.sym.winding += t3.sym.winding;
    }, e3.sweep.edgeLeq_ = function(t3, s3, r2) {
      var i2 = t3.event, n2 = s3.eUp, o2 = r2.eUp;
      return n2.dst() === i2 ? o2.dst() === i2 ? e3.geom.vertLeq(n2.org, o2.org) ? e3.geom.edgeSign(o2.dst(), n2.org, o2.org) <= 0 : e3.geom.edgeSign(n2.dst(), o2.org, n2.org) >= 0 : e3.geom.edgeSign(o2.dst(), i2, o2.org) <= 0 : o2.dst() === i2 ? e3.geom.edgeSign(n2.dst(), i2, n2.org) >= 0 : e3.geom.edgeEval(n2.dst(), i2, n2.org) >= e3.geom.edgeEval(o2.dst(), i2, o2.org);
    }, e3.sweep.deleteRegion_ = function(t3, s3) {
      s3.fixUpperEdge && e3.assert(s3.eUp.winding === 0), s3.eUp.activeRegion = null, t3.dict.deleteNode(s3.nodeUp), s3.nodeUp = null;
    }, e3.sweep.fixUpperEdge_ = function(t3, s3) {
      e3.assert(t3.fixUpperEdge), e3.mesh.deleteEdge(t3.eUp), t3.fixUpperEdge = false, t3.eUp = s3, s3.activeRegion = t3;
    }, e3.sweep.topLeftRegion_ = function(t3) {
      var s3 = t3.eUp.org;
      do {
        t3 = t3.regionAbove();
      } while (t3.eUp.org === s3);
      if (t3.fixUpperEdge) {
        var r2 = e3.mesh.connect(t3.regionBelow().eUp.sym, t3.eUp.lNext);
        e3.sweep.fixUpperEdge_(t3, r2), t3 = t3.regionAbove();
      }
      return t3;
    }, e3.sweep.topRightRegion_ = function(e4) {
      var t3 = e4.eUp.dst();
      do {
        e4 = e4.regionAbove();
      } while (e4.eUp.dst() === t3);
      return e4;
    }, e3.sweep.addRegionBelow_ = function(t3, s3, r2) {
      var i2 = new e3.ActiveRegion();
      return i2.eUp = r2, i2.nodeUp = t3.dict.insertBefore(s3.nodeUp, i2), r2.activeRegion = i2, i2;
    }, e3.sweep.isWindingInside_ = function(t3, s3) {
      switch (t3.windingRule) {
        case e3.windingRule.GLU_TESS_WINDING_ODD:
          return (1 & s3) != 0;
        case e3.windingRule.GLU_TESS_WINDING_NONZERO:
          return s3 !== 0;
        case e3.windingRule.GLU_TESS_WINDING_POSITIVE:
          return s3 > 0;
        case e3.windingRule.GLU_TESS_WINDING_NEGATIVE:
          return s3 < 0;
        case e3.windingRule.GLU_TESS_WINDING_ABS_GEQ_TWO:
          return s3 >= 2 || s3 <= -2;
      }
      return e3.assert(false), false;
    }, e3.sweep.computeWinding_ = function(t3, s3) {
      s3.windingNumber = s3.regionAbove().windingNumber + s3.eUp.winding, s3.inside = e3.sweep.isWindingInside_(t3, s3.windingNumber);
    }, e3.sweep.finishRegion_ = function(t3, s3) {
      var r2 = s3.eUp, i2 = r2.lFace;
      i2.inside = s3.inside, i2.anEdge = r2, e3.sweep.deleteRegion_(t3, s3);
    }, e3.sweep.finishLeftRegions_ = function(t3, s3, r2) {
      for (var i2 = s3, n2 = s3.eUp; i2 !== r2; ) {
        i2.fixUpperEdge = false;
        var o2 = i2.regionBelow(), l2 = o2.eUp;
        if (l2.org !== n2.org) {
          if (!o2.fixUpperEdge) {
            e3.sweep.finishRegion_(t3, i2);
            break;
          }
          l2 = e3.mesh.connect(n2.lPrev(), l2.sym), e3.sweep.fixUpperEdge_(o2, l2);
        }
        n2.oNext !== l2 && (e3.mesh.meshSplice(l2.oPrev(), l2), e3.mesh.meshSplice(n2, l2)), e3.sweep.finishRegion_(t3, i2), n2 = o2.eUp, i2 = o2;
      }
      return n2;
    }, e3.sweep.addRightEdges_ = function(t3, s3, r2, i2, n2, o2) {
      var l2 = true, a2 = r2;
      do {
        e3.assert(e3.geom.vertLeq(a2.org, a2.dst())), e3.sweep.addRegionBelow_(t3, s3, a2.sym), a2 = a2.oNext;
      } while (a2 !== i2);
      n2 === null && (n2 = s3.regionBelow().eUp.rPrev());
      for (var _, g2 = s3, d2 = n2; (a2 = (_ = g2.regionBelow()).eUp.sym).org === d2.org; )
        a2.oNext !== d2 && (e3.mesh.meshSplice(a2.oPrev(), a2), e3.mesh.meshSplice(d2.oPrev(), a2)), _.windingNumber = g2.windingNumber - a2.winding, _.inside = e3.sweep.isWindingInside_(t3, _.windingNumber), g2.dirty = true, !l2 && e3.sweep.checkForRightSplice_(t3, g2) && (e3.sweep.addWinding_(a2, d2), e3.sweep.deleteRegion_(t3, g2), e3.mesh.deleteEdge(d2)), l2 = false, g2 = _, d2 = a2;
      g2.dirty = true, e3.assert(g2.windingNumber - a2.winding === _.windingNumber), o2 && e3.sweep.walkDirtyRegions_(t3, g2);
    }, e3.sweep.callCombine_ = function(t3, s3, r2, i2, n2) {
      var o2 = [s3.coords[0], s3.coords[1], s3.coords[2]];
      s3.data = null, s3.data = t3.callCombineCallback(o2, r2, i2), s3.data === null && (n2 ? t3.fatalError || (t3.callErrorCallback(e3.errorType.GLU_TESS_NEED_COMBINE_CALLBACK), t3.fatalError = true) : s3.data = r2[0]);
    }, e3.sweep.spliceMergeVertices_ = function(t3, s3, r2) {
      var i2 = [null, null, null, null], n2 = [0.5, 0.5, 0, 0];
      i2[0] = s3.org.data, i2[1] = r2.org.data, e3.sweep.callCombine_(t3, s3.org, i2, n2, false), e3.mesh.meshSplice(s3, r2);
    }, e3.sweep.vertexWeights_ = function(t3, s3, r2, i2, n2) {
      var o2 = e3.geom.vertL1dist(s3, t3), l2 = e3.geom.vertL1dist(r2, t3), a2 = n2, _ = n2 + 1;
      i2[a2] = 0.5 * l2 / (o2 + l2), i2[_] = 0.5 * o2 / (o2 + l2), t3.coords[0] += i2[a2] * s3.coords[0] + i2[_] * r2.coords[0], t3.coords[1] += i2[a2] * s3.coords[1] + i2[_] * r2.coords[1], t3.coords[2] += i2[a2] * s3.coords[2] + i2[_] * r2.coords[2];
    }, e3.sweep.getIntersectData_ = function(t3, s3, r2, i2, n2, o2) {
      var l2 = [0, 0, 0, 0], a2 = [r2.data, i2.data, n2.data, o2.data];
      s3.coords[0] = s3.coords[1] = s3.coords[2] = 0, e3.sweep.vertexWeights_(s3, r2, i2, l2, 0), e3.sweep.vertexWeights_(s3, n2, o2, l2, 2), e3.sweep.callCombine_(t3, s3, a2, l2, true);
    }, e3.sweep.checkForRightSplice_ = function(t3, s3) {
      var r2 = s3.regionBelow(), i2 = s3.eUp, n2 = r2.eUp;
      if (e3.geom.vertLeq(i2.org, n2.org)) {
        if (e3.geom.edgeSign(n2.dst(), i2.org, n2.org) > 0)
          return false;
        e3.geom.vertEq(i2.org, n2.org) ? i2.org !== n2.org && (t3.pq.remove(i2.org.pqHandle), e3.sweep.spliceMergeVertices_(t3, n2.oPrev(), i2)) : (e3.mesh.splitEdge(n2.sym), e3.mesh.meshSplice(i2, n2.oPrev()), s3.dirty = r2.dirty = true);
      } else {
        if (e3.geom.edgeSign(i2.dst(), n2.org, i2.org) < 0)
          return false;
        s3.regionAbove().dirty = s3.dirty = true, e3.mesh.splitEdge(i2.sym), e3.mesh.meshSplice(n2.oPrev(), i2);
      }
      return true;
    }, e3.sweep.checkForLeftSplice_ = function(t3, s3) {
      var r2, i2 = s3.regionBelow(), n2 = s3.eUp, o2 = i2.eUp;
      if (e3.assert(!e3.geom.vertEq(n2.dst(), o2.dst())), e3.geom.vertLeq(n2.dst(), o2.dst())) {
        if (e3.geom.edgeSign(n2.dst(), o2.dst(), n2.org) < 0)
          return false;
        s3.regionAbove().dirty = s3.dirty = true, r2 = e3.mesh.splitEdge(n2), e3.mesh.meshSplice(o2.sym, r2), r2.lFace.inside = s3.inside;
      } else {
        if (e3.geom.edgeSign(o2.dst(), n2.dst(), o2.org) > 0)
          return false;
        s3.dirty = i2.dirty = true, r2 = e3.mesh.splitEdge(o2), e3.mesh.meshSplice(n2.lNext, o2.sym), r2.rFace().inside = s3.inside;
      }
      return true;
    }, e3.sweep.checkForIntersect_ = function(t3, s3) {
      var r2 = s3.regionBelow(), i2 = s3.eUp, n2 = r2.eUp, o2 = i2.org, l2 = n2.org, a2 = i2.dst(), _ = n2.dst(), g2 = new e3.GluVertex();
      if (e3.assert(!e3.geom.vertEq(_, a2)), e3.assert(e3.geom.edgeSign(a2, t3.event, o2) <= 0), e3.assert(e3.geom.edgeSign(_, t3.event, l2) >= 0), e3.assert(o2 !== t3.event && l2 !== t3.event), e3.assert(!s3.fixUpperEdge && !r2.fixUpperEdge), o2 === l2)
        return false;
      if (Math.min(o2.t, a2.t) > Math.max(l2.t, _.t))
        return false;
      if (e3.geom.vertLeq(o2, l2)) {
        if (e3.geom.edgeSign(_, o2, l2) > 0)
          return false;
      } else if (e3.geom.edgeSign(a2, l2, o2) < 0)
        return false;
      e3.geom.edgeIntersect(a2, o2, _, l2, g2), e3.assert(Math.min(o2.t, a2.t) <= g2.t), e3.assert(g2.t <= Math.max(l2.t, _.t)), e3.assert(Math.min(_.s, a2.s) <= g2.s), e3.assert(g2.s <= Math.max(l2.s, o2.s)), e3.geom.vertLeq(g2, t3.event) && (g2.s = t3.event.s, g2.t = t3.event.t);
      var d2 = e3.geom.vertLeq(o2, l2) ? o2 : l2;
      if (e3.geom.vertLeq(d2, g2) && (g2.s = d2.s, g2.t = d2.t), e3.geom.vertEq(g2, o2) || e3.geom.vertEq(g2, l2))
        return e3.sweep.checkForRightSplice_(t3, s3), false;
      if (!e3.geom.vertEq(a2, t3.event) && e3.geom.edgeSign(a2, t3.event, g2) >= 0 || !e3.geom.vertEq(_, t3.event) && e3.geom.edgeSign(_, t3.event, g2) <= 0) {
        if (_ === t3.event)
          return e3.mesh.splitEdge(i2.sym), e3.mesh.meshSplice(n2.sym, i2), i2 = (s3 = e3.sweep.topLeftRegion_(s3)).regionBelow().eUp, e3.sweep.finishLeftRegions_(t3, s3.regionBelow(), r2), e3.sweep.addRightEdges_(t3, s3, i2.oPrev(), i2, i2, true), true;
        if (a2 === t3.event) {
          e3.mesh.splitEdge(n2.sym), e3.mesh.meshSplice(i2.lNext, n2.oPrev()), r2 = s3;
          var h2 = (s3 = e3.sweep.topRightRegion_(s3)).regionBelow().eUp.rPrev();
          return r2.eUp = n2.oPrev(), n2 = e3.sweep.finishLeftRegions_(t3, r2, null), e3.sweep.addRightEdges_(t3, s3, n2.oNext, i2.rPrev(), h2, true), true;
        }
        return e3.geom.edgeSign(a2, t3.event, g2) >= 0 && (s3.regionAbove().dirty = s3.dirty = true, e3.mesh.splitEdge(i2.sym), i2.org.s = t3.event.s, i2.org.t = t3.event.t), e3.geom.edgeSign(_, t3.event, g2) <= 0 && (s3.dirty = r2.dirty = true, e3.mesh.splitEdge(n2.sym), n2.org.s = t3.event.s, n2.org.t = t3.event.t), false;
      }
      return e3.mesh.splitEdge(i2.sym), e3.mesh.splitEdge(n2.sym), e3.mesh.meshSplice(n2.oPrev(), i2), i2.org.s = g2.s, i2.org.t = g2.t, i2.org.pqHandle = t3.pq.insert(i2.org), e3.sweep.getIntersectData_(t3, i2.org, o2, a2, l2, _), s3.regionAbove().dirty = s3.dirty = r2.dirty = true, false;
    }, e3.sweep.walkDirtyRegions_ = function(t3, s3) {
      for (var r2 = s3.regionBelow(); ; ) {
        for (; r2.dirty; )
          s3 = r2, r2 = r2.regionBelow();
        if (!s3.dirty && (r2 = s3, (s3 = s3.regionAbove()) === null || !s3.dirty))
          return;
        s3.dirty = false;
        var i2 = s3.eUp, n2 = r2.eUp;
        if (i2.dst() !== n2.dst() && e3.sweep.checkForLeftSplice_(t3, s3) && (r2.fixUpperEdge ? (e3.sweep.deleteRegion_(t3, r2), e3.mesh.deleteEdge(n2), n2 = (r2 = s3.regionBelow()).eUp) : s3.fixUpperEdge && (e3.sweep.deleteRegion_(t3, s3), e3.mesh.deleteEdge(i2), i2 = (s3 = r2.regionAbove()).eUp)), i2.org !== n2.org) {
          if (i2.dst() === n2.dst() || s3.fixUpperEdge || r2.fixUpperEdge || i2.dst() !== t3.event && n2.dst() !== t3.event)
            e3.sweep.checkForRightSplice_(t3, s3);
          else if (e3.sweep.checkForIntersect_(t3, s3))
            return;
        }
        i2.org === n2.org && i2.dst() === n2.dst() && (e3.sweep.addWinding_(n2, i2), e3.sweep.deleteRegion_(t3, s3), e3.mesh.deleteEdge(i2), s3 = r2.regionAbove());
      }
    }, e3.sweep.connectRightVertex_ = function(t3, s3, r2) {
      var i2, n2 = r2.oNext, o2 = s3.regionBelow(), l2 = s3.eUp, a2 = o2.eUp, _ = false;
      l2.dst() !== a2.dst() && e3.sweep.checkForIntersect_(t3, s3), e3.geom.vertEq(l2.org, t3.event) && (e3.mesh.meshSplice(n2.oPrev(), l2), n2 = (s3 = e3.sweep.topLeftRegion_(s3)).regionBelow().eUp, e3.sweep.finishLeftRegions_(t3, s3.regionBelow(), o2), _ = true), e3.geom.vertEq(a2.org, t3.event) && (e3.mesh.meshSplice(r2, a2.oPrev()), r2 = e3.sweep.finishLeftRegions_(t3, o2, null), _ = true), _ ? e3.sweep.addRightEdges_(t3, s3, r2.oNext, n2, n2, true) : (i2 = e3.geom.vertLeq(a2.org, l2.org) ? a2.oPrev() : l2, i2 = e3.mesh.connect(r2.lPrev(), i2), e3.sweep.addRightEdges_(t3, s3, i2, i2.oNext, i2.oNext, false), i2.sym.activeRegion.fixUpperEdge = true, e3.sweep.walkDirtyRegions_(t3, s3));
    }, e3.sweep.connectLeftDegenerate_ = function(t3, s3, r2) {
      var i2 = s3.eUp;
      if (e3.geom.vertEq(i2.org, r2))
        return e3.assert(e3.sweep.TOLERANCE_NONZERO_), void (e3.sweep.TOLERANCE_NONZERO_ && e3.sweep.spliceMergeVertices_(t3, i2, r2.anEdge));
      if (!e3.geom.vertEq(i2.dst(), r2))
        return e3.mesh.splitEdge(i2.sym), s3.fixUpperEdge && (e3.mesh.deleteEdge(i2.oNext), s3.fixUpperEdge = false), e3.mesh.meshSplice(r2.anEdge, i2), void e3.sweep.sweepEvent_(t3, r2);
      if (e3.assert(e3.sweep.TOLERANCE_NONZERO_), e3.sweep.TOLERANCE_NONZERO_) {
        var n2 = (s3 = e3.sweep.topRightRegion_(s3)).regionBelow(), o2 = n2.eUp.sym, l2 = o2.oNext, a2 = l2;
        n2.fixUpperEdge && (e3.assert(l2 !== o2), e3.sweep.deleteRegion_(t3, n2), e3.mesh.deleteEdge(o2), o2 = l2.oPrev()), e3.mesh.meshSplice(r2.anEdge, o2), e3.geom.edgeGoesLeft(l2) || (l2 = null), e3.sweep.addRightEdges_(t3, s3, o2.oNext, a2, l2, true);
      }
    }, e3.sweep.connectLeftVertex_ = function(t3, s3) {
      var r2 = new e3.ActiveRegion();
      r2.eUp = s3.anEdge.sym;
      var i2 = t3.dict.search(r2).getKey(), n2 = i2.regionBelow(), o2 = i2.eUp, l2 = n2.eUp;
      if (e3.geom.edgeSign(o2.dst(), s3, o2.org) !== 0) {
        var a2, _ = e3.geom.vertLeq(l2.dst(), o2.dst()) ? i2 : n2;
        i2.inside || _.fixUpperEdge ? (a2 = _ === i2 ? e3.mesh.connect(s3.anEdge.sym, o2.lNext) : e3.mesh.connect(l2.dNext(), s3.anEdge).sym, _.fixUpperEdge ? e3.sweep.fixUpperEdge_(_, a2) : e3.sweep.computeWinding_(t3, e3.sweep.addRegionBelow_(t3, i2, a2)), e3.sweep.sweepEvent_(t3, s3)) : e3.sweep.addRightEdges_(t3, i2, s3.anEdge, s3.anEdge, null, true);
      } else
        e3.sweep.connectLeftDegenerate_(t3, i2, s3);
    }, e3.sweep.sweepEvent_ = function(t3, s3) {
      t3.event = s3;
      for (var r2 = s3.anEdge; r2.activeRegion === null; )
        if ((r2 = r2.oNext) === s3.anEdge)
          return void e3.sweep.connectLeftVertex_(t3, s3);
      var i2 = e3.sweep.topLeftRegion_(r2.activeRegion), n2 = i2.regionBelow(), o2 = n2.eUp, l2 = e3.sweep.finishLeftRegions_(t3, n2, null);
      l2.oNext === o2 ? e3.sweep.connectRightVertex_(t3, i2, l2) : e3.sweep.addRightEdges_(t3, i2, l2.oNext, o2, o2, true);
    }, e3.sweep.addSentinel_ = function(t3, s3) {
      var r2 = new e3.ActiveRegion(), i2 = e3.mesh.makeEdge(t3.mesh);
      i2.org.s = e3.sweep.SENTINEL_COORD_, i2.org.t = s3, i2.dst().s = -e3.sweep.SENTINEL_COORD_, i2.dst().t = s3, t3.event = i2.dst(), r2.eUp = i2, r2.windingNumber = 0, r2.inside = false, r2.fixUpperEdge = false, r2.sentinel = true, r2.dirty = false, r2.nodeUp = t3.dict.insert(r2);
    }, e3.sweep.initEdgeDict_ = function(t3) {
      t3.dict = new e3.Dict(t3, e3.sweep.edgeLeq_), e3.sweep.addSentinel_(t3, -e3.sweep.SENTINEL_COORD_), e3.sweep.addSentinel_(t3, e3.sweep.SENTINEL_COORD_);
    }, e3.sweep.doneEdgeDict_ = function(t3) {
      for (var s3, r2 = 0; (s3 = t3.dict.getMin().getKey()) !== null; )
        s3.sentinel || (e3.assert(s3.fixUpperEdge), e3.assert(++r2 == 1)), e3.assert(s3.windingNumber === 0), e3.sweep.deleteRegion_(t3, s3);
      t3.dict = null;
    }, e3.sweep.removeDegenerateEdges_ = function(t3) {
      for (var s3, r2 = t3.mesh.eHead, i2 = r2.next; i2 !== r2; i2 = s3) {
        s3 = i2.next;
        var n2 = i2.lNext;
        e3.geom.vertEq(i2.org, i2.dst()) && i2.lNext.lNext !== i2 && (e3.sweep.spliceMergeVertices_(t3, n2, i2), e3.mesh.deleteEdge(i2), n2 = (i2 = n2).lNext), n2.lNext === i2 && (n2 !== i2 && (n2 !== s3 && n2 !== s3.sym || (s3 = s3.next), e3.mesh.deleteEdge(n2)), i2 !== s3 && i2 !== s3.sym || (s3 = s3.next), e3.mesh.deleteEdge(i2));
      }
    }, e3.sweep.initPriorityQ_ = function(t3) {
      var s3 = new e3.PriorityQ();
      t3.pq = s3;
      var r2, i2 = t3.mesh.vHead;
      for (r2 = i2.next; r2 !== i2; r2 = r2.next)
        r2.pqHandle = s3.insert(r2);
      s3.init();
    }, e3.sweep.donePriorityQ_ = function(e4) {
      e4.pq.deleteQ(), e4.pq = null;
    }, e3.sweep.removeDegenerateFaces_ = function(t3) {
      for (var s3, r2 = t3.fHead.next; r2 !== t3.fHead; r2 = s3) {
        s3 = r2.next;
        var i2 = r2.anEdge;
        e3.assert(i2.lNext !== i2), i2.lNext.lNext === i2 && (e3.sweep.addWinding_(i2.oNext, i2), e3.mesh.deleteEdge(i2));
      }
    }, e3.tessmono = {}, e3.tessmono.tessellateMonoRegion_ = function(t3) {
      var s3 = t3.anEdge;
      for (e3.assert(s3.lNext !== s3 && s3.lNext.lNext !== s3); e3.geom.vertLeq(s3.dst(), s3.org); s3 = s3.lPrev())
        ;
      for (; e3.geom.vertLeq(s3.org, s3.dst()); s3 = s3.lNext)
        ;
      for (var r2, i2 = s3.lPrev(); s3.lNext !== i2; )
        if (e3.geom.vertLeq(s3.dst(), i2.org)) {
          for (; i2.lNext !== s3 && (e3.geom.edgeGoesLeft(i2.lNext) || e3.geom.edgeSign(i2.org, i2.dst(), i2.lNext.dst()) <= 0); )
            i2 = (r2 = e3.mesh.connect(i2.lNext, i2)).sym;
          i2 = i2.lPrev();
        } else {
          for (; i2.lNext !== s3 && (e3.geom.edgeGoesRight(s3.lPrev()) || e3.geom.edgeSign(s3.dst(), s3.org, s3.lPrev().org) >= 0); )
            r2 = e3.mesh.connect(s3, s3.lPrev()), s3 = r2.sym;
          s3 = s3.lNext;
        }
      for (e3.assert(i2.lNext !== s3); i2.lNext.lNext !== s3; )
        i2 = (r2 = e3.mesh.connect(i2.lNext, i2)).sym;
    }, e3.tessmono.tessellateInterior = function(t3) {
      for (var s3, r2 = t3.fHead.next; r2 !== t3.fHead; r2 = s3)
        s3 = r2.next, r2.inside && e3.tessmono.tessellateMonoRegion_(r2);
    }, e3.tessmono.discardExterior = function(t3) {
      for (var s3, r2 = t3.fHead.next; r2 !== t3.fHead; r2 = s3)
        s3 = r2.next, r2.inside || e3.mesh.zapFace(r2);
    }, e3.tessmono.setWindingNumber = function(t3, s3, r2) {
      for (var i2, n2 = t3.eHead.next; n2 !== t3.eHead; n2 = i2)
        i2 = n2.next, n2.rFace().inside !== n2.lFace.inside ? n2.winding = n2.lFace.inside ? s3 : -s3 : r2 ? e3.mesh.deleteEdge(n2) : n2.winding = 0;
    }, e3.Dict = function(t3, s3) {
      this.head_ = new e3.DictNode(), this.frame_ = t3, this.leq_ = s3;
    }, e3.Dict.prototype.deleteDict_ = function() {
    }, e3.Dict.prototype.insertBefore = function(t3, s3) {
      do {
        t3 = t3.prev;
      } while (t3.key !== null && !this.leq_(this.frame_, t3.key, s3));
      var r2 = new e3.DictNode(s3, t3.next, t3);
      return t3.next.prev = r2, t3.next = r2, r2;
    }, e3.Dict.prototype.insert = function(e4) {
      return this.insertBefore(this.head_, e4);
    }, e3.Dict.prototype.deleteNode = function(e4) {
      e4.next.prev = e4.prev, e4.prev.next = e4.next;
    }, e3.Dict.prototype.search = function(e4) {
      var t3 = this.head_;
      do {
        t3 = t3.next;
      } while (t3.key !== null && !this.leq_(this.frame_, e4, t3.key));
      return t3;
    }, e3.Dict.prototype.getMin = function() {
      return this.head_.next;
    }, e3.Dict.prototype.getMax = function() {
      return this.head_.prev;
    }, e3.DictNode = function(e4, t3, s3) {
      this.key = e4 || null, this.next = t3 || this, this.prev = s3 || this;
    }, e3.DictNode.prototype.getKey = function() {
      return this.key;
    }, e3.DictNode.prototype.getSuccessor = function() {
      return this.next;
    }, e3.DictNode.prototype.getPredecessor = function() {
      return this.prev;
    }, e3.GluTesselator = function() {
      this.state_ = e3.GluTesselator.tessState_.T_DORMANT, this.lastEdge_ = null, this.mesh = null, this.errorCallback_ = null, this.normal_ = [0, 0, 0], this.windingRule = e3.windingRule.GLU_TESS_WINDING_ODD, this.fatalError = false, this.dict = null, this.pq = null, this.event = null, this.combineCallback_ = null, this.boundaryOnly_ = false, this.beginCallback_ = null, this.edgeFlagCallback_ = null, this.vertexCallback_ = null, this.endCallback_ = null, this.meshCallback_ = null, this.polygonData_ = null;
    }, e3.GluTesselator.tessState_ = { T_DORMANT: 0, T_IN_POLYGON: 1, T_IN_CONTOUR: 2 }, e3.GluTesselator.prototype.gluDeleteTess = function() {
      this.requireState_(e3.GluTesselator.tessState_.T_DORMANT);
    }, e3.GluTesselator.prototype.gluTessProperty = function(t3, s3) {
      switch (t3) {
        case e3.gluEnum.GLU_TESS_TOLERANCE:
          return;
        case e3.gluEnum.GLU_TESS_WINDING_RULE:
          var r2 = s3;
          switch (r2) {
            case e3.windingRule.GLU_TESS_WINDING_ODD:
            case e3.windingRule.GLU_TESS_WINDING_NONZERO:
            case e3.windingRule.GLU_TESS_WINDING_POSITIVE:
            case e3.windingRule.GLU_TESS_WINDING_NEGATIVE:
            case e3.windingRule.GLU_TESS_WINDING_ABS_GEQ_TWO:
              return void (this.windingRule = r2);
          }
          break;
        case e3.gluEnum.GLU_TESS_BOUNDARY_ONLY:
          return void (this.boundaryOnly_ = !!s3);
        default:
          return void this.callErrorCallback(e3.gluEnum.GLU_INVALID_ENUM);
      }
      this.callErrorCallback(e3.gluEnum.GLU_INVALID_VALUE);
    }, e3.GluTesselator.prototype.gluGetTessProperty = function(t3) {
      switch (t3) {
        case e3.gluEnum.GLU_TESS_TOLERANCE:
          return 0;
        case e3.gluEnum.GLU_TESS_WINDING_RULE:
          var s3 = this.windingRule;
          return e3.assert(s3 === e3.windingRule.GLU_TESS_WINDING_ODD || s3 === e3.windingRule.GLU_TESS_WINDING_NONZERO || s3 === e3.windingRule.GLU_TESS_WINDING_POSITIVE || s3 === e3.windingRule.GLU_TESS_WINDING_NEGATIVE || s3 === e3.windingRule.GLU_TESS_WINDING_ABS_GEQ_TWO), s3;
        case e3.gluEnum.GLU_TESS_BOUNDARY_ONLY:
          return e3.assert(this.boundaryOnly_ === true || this.boundaryOnly_ === false), this.boundaryOnly_;
        default:
          this.callErrorCallback(e3.gluEnum.GLU_INVALID_ENUM);
      }
      return false;
    }, e3.GluTesselator.prototype.gluTessNormal = function(e4, t3, s3) {
      this.normal_[0] = e4, this.normal_[1] = t3, this.normal_[2] = s3;
    }, e3.GluTesselator.prototype.gluTessCallback = function(t3, s3) {
      var r2 = s3 || null;
      switch (t3) {
        case e3.gluEnum.GLU_TESS_BEGIN:
        case e3.gluEnum.GLU_TESS_BEGIN_DATA:
          return void (this.beginCallback_ = r2);
        case e3.gluEnum.GLU_TESS_EDGE_FLAG:
        case e3.gluEnum.GLU_TESS_EDGE_FLAG_DATA:
          return void (this.edgeFlagCallback_ = r2);
        case e3.gluEnum.GLU_TESS_VERTEX:
        case e3.gluEnum.GLU_TESS_VERTEX_DATA:
          return void (this.vertexCallback_ = r2);
        case e3.gluEnum.GLU_TESS_END:
        case e3.gluEnum.GLU_TESS_END_DATA:
          return void (this.endCallback_ = r2);
        case e3.gluEnum.GLU_TESS_ERROR:
        case e3.gluEnum.GLU_TESS_ERROR_DATA:
          return void (this.errorCallback_ = r2);
        case e3.gluEnum.GLU_TESS_COMBINE:
        case e3.gluEnum.GLU_TESS_COMBINE_DATA:
          return void (this.combineCallback_ = r2);
        case e3.gluEnum.GLU_TESS_MESH:
          return void (this.meshCallback_ = r2);
        default:
          return void this.callErrorCallback(e3.gluEnum.GLU_INVALID_ENUM);
      }
    }, e3.GluTesselator.prototype.gluTessVertex = function(t3, s3) {
      var r2 = false, i2 = [0, 0, 0];
      this.requireState_(e3.GluTesselator.tessState_.T_IN_CONTOUR);
      for (var n2 = 0; n2 < 3; ++n2) {
        var o2 = t3[n2];
        o2 < -e3.GLU_TESS_MAX_COORD && (o2 = -e3.GLU_TESS_MAX_COORD, r2 = true), o2 > e3.GLU_TESS_MAX_COORD && (o2 = e3.GLU_TESS_MAX_COORD, r2 = true), i2[n2] = o2;
      }
      r2 && this.callErrorCallback(e3.errorType.GLU_TESS_COORD_TOO_LARGE), this.addVertex_(i2, s3);
    }, e3.GluTesselator.prototype.gluTessBeginPolygon = function(t3) {
      this.requireState_(e3.GluTesselator.tessState_.T_DORMANT), this.state_ = e3.GluTesselator.tessState_.T_IN_POLYGON, this.mesh = new e3.GluMesh(), this.polygonData_ = t3;
    }, e3.GluTesselator.prototype.gluTessBeginContour = function() {
      this.requireState_(e3.GluTesselator.tessState_.T_IN_POLYGON), this.state_ = e3.GluTesselator.tessState_.T_IN_CONTOUR, this.lastEdge_ = null;
    }, e3.GluTesselator.prototype.gluTessEndContour = function() {
      this.requireState_(e3.GluTesselator.tessState_.T_IN_CONTOUR), this.state_ = e3.GluTesselator.tessState_.T_IN_POLYGON;
    }, e3.GluTesselator.prototype.gluTessEndPolygon = function() {
      if (this.requireState_(e3.GluTesselator.tessState_.T_IN_POLYGON), this.state_ = e3.GluTesselator.tessState_.T_DORMANT, e3.normal.projectPolygon(this, this.normal_[0], this.normal_[1], this.normal_[2]), e3.sweep.computeInterior(this), !this.fatalError) {
        var t3 = this.mesh;
        if (this.boundaryOnly_ ? e3.tessmono.setWindingNumber(t3, 1, true) : e3.tessmono.tessellateInterior(t3), this.mesh.checkMesh(), this.beginCallback_ || this.endCallback_ || this.vertexCallback_ || this.edgeFlagCallback_)
          if (this.boundaryOnly_)
            e3.render.renderBoundary(this, this.mesh);
          else {
            var s3 = !!this.edgeFlagCallback_;
            e3.render.renderMesh(this, this.mesh, s3);
          }
        if (this.meshCallback_)
          return e3.tessmono.discardExterior(this.mesh), this.meshCallback_(this.mesh), this.mesh = null, void (this.polygonData_ = null);
      }
      e3.mesh.deleteMesh(this.mesh), this.polygonData_ = null, this.mesh = null;
    }, e3.GluTesselator.prototype.requireState_ = function(e4) {
      this.state_ !== e4 && this.gotoState_(e4);
    }, e3.GluTesselator.prototype.gotoState_ = function(t3) {
      for (; this.state_ !== t3; )
        if (this.state_ < t3)
          switch (this.state_) {
            case e3.GluTesselator.tessState_.T_DORMANT:
              this.callErrorCallback(e3.errorType.GLU_TESS_MISSING_BEGIN_POLYGON), this.gluTessBeginPolygon(null);
              break;
            case e3.GluTesselator.tessState_.T_IN_POLYGON:
              this.callErrorCallback(e3.errorType.GLU_TESS_MISSING_BEGIN_CONTOUR), this.gluTessBeginContour();
          }
        else
          switch (this.state_) {
            case e3.GluTesselator.tessState_.T_IN_CONTOUR:
              this.callErrorCallback(e3.errorType.GLU_TESS_MISSING_END_CONTOUR), this.gluTessEndContour();
              break;
            case e3.GluTesselator.tessState_.T_IN_POLYGON:
              this.callErrorCallback(e3.errorType.GLU_TESS_MISSING_END_POLYGON), this.gluTessEndPolygon();
          }
    }, e3.GluTesselator.prototype.addVertex_ = function(t3, s3) {
      var r2 = this.lastEdge_;
      r2 === null ? (r2 = e3.mesh.makeEdge(this.mesh), e3.mesh.meshSplice(r2, r2.sym)) : (e3.mesh.splitEdge(r2), r2 = r2.lNext), r2.org.data = s3, r2.org.coords[0] = t3[0], r2.org.coords[1] = t3[1], r2.org.coords[2] = t3[2], r2.winding = 1, r2.sym.winding = -1, this.lastEdge_ = r2;
    }, e3.GluTesselator.prototype.callBeginCallback = function(e4) {
      this.beginCallback_ && this.beginCallback_(e4, this.polygonData_);
    }, e3.GluTesselator.prototype.callVertexCallback = function(e4) {
      this.vertexCallback_ && this.vertexCallback_(e4, this.polygonData_);
    }, e3.GluTesselator.prototype.callEdgeFlagCallback = function(e4) {
      this.edgeFlagCallback_ && this.edgeFlagCallback_(e4, this.polygonData_);
    }, e3.GluTesselator.prototype.callEndCallback = function() {
      this.endCallback_ && this.endCallback_(this.polygonData_);
    }, e3.GluTesselator.prototype.callCombineCallback = function(e4, t3, s3) {
      return this.combineCallback_ && this.combineCallback_(e4, t3, s3, this.polygonData_) || null;
    }, e3.GluTesselator.prototype.callErrorCallback = function(e4) {
      this.errorCallback_ && this.errorCallback_(e4, this.polygonData_);
    }, e3.GluFace = function(e4, t3) {
      this.next = e4 || this, this.prev = t3 || this, this.anEdge = null, this.inside = false;
    }, e3.GluHalfEdge = function(e4) {
      this.next = e4 || this, this.sym = null, this.oNext = null, this.lNext = null, this.org = null, this.lFace = null, this.activeRegion = null, this.winding = 0;
    }, e3.GluHalfEdge.prototype.rFace = function() {
      return this.sym.lFace;
    }, e3.GluHalfEdge.prototype.dst = function() {
      return this.sym.org;
    }, e3.GluHalfEdge.prototype.oPrev = function() {
      return this.sym.lNext;
    }, e3.GluHalfEdge.prototype.lPrev = function() {
      return this.oNext.sym;
    }, e3.GluHalfEdge.prototype.dPrev = function() {
      return this.lNext.sym;
    }, e3.GluHalfEdge.prototype.rPrev = function() {
      return this.sym.oNext;
    }, e3.GluHalfEdge.prototype.dNext = function() {
      return this.rPrev().sym;
    }, e3.GluHalfEdge.prototype.rNext = function() {
      return this.oPrev().sym;
    }, e3.GluMesh = function() {
      this.vHead = new e3.GluVertex(), this.fHead = new e3.GluFace(), this.eHead = new e3.GluHalfEdge(), this.eHeadSym = new e3.GluHalfEdge(), this.eHead.sym = this.eHeadSym, this.eHeadSym.sym = this.eHead;
    }, e3.GluMesh.prototype.checkMesh = function() {
      if (e3.DEBUG) {
        var t3, s3, r2, i2 = this.fHead, n2 = this.vHead, o2 = this.eHead, l2 = i2;
        for (l2 = i2; (s3 = l2.next) !== i2; l2 = s3) {
          e3.assert(s3.prev === l2), t3 = s3.anEdge;
          do {
            e3.assert(t3.sym !== t3), e3.assert(t3.sym.sym === t3), e3.assert(t3.lNext.oNext.sym === t3), e3.assert(t3.oNext.sym.lNext === t3), e3.assert(t3.lFace === s3), t3 = t3.lNext;
          } while (t3 !== s3.anEdge);
        }
        e3.assert(s3.prev === l2 && s3.anEdge === null);
        var a2 = n2;
        for (a2 = n2; (r2 = a2.next) !== n2; a2 = r2) {
          e3.assert(r2.prev === a2), t3 = r2.anEdge;
          do {
            e3.assert(t3.sym !== t3), e3.assert(t3.sym.sym === t3), e3.assert(t3.lNext.oNext.sym === t3), e3.assert(t3.oNext.sym.lNext === t3), e3.assert(t3.org === r2), t3 = t3.oNext;
          } while (t3 !== r2.anEdge);
        }
        e3.assert(r2.prev === a2 && r2.anEdge === null && r2.data === null);
        var _ = o2;
        for (_ = o2; (t3 = _.next) !== o2; _ = t3)
          e3.assert(t3.sym.next === _.sym), e3.assert(t3.sym !== t3), e3.assert(t3.sym.sym === t3), e3.assert(t3.org !== null), e3.assert(t3.dst() !== null), e3.assert(t3.lNext.oNext.sym === t3), e3.assert(t3.oNext.sym.lNext === t3);
        e3.assert(t3.sym.next === _.sym && t3.sym === this.eHeadSym && t3.sym.sym === t3 && t3.org === null && t3.dst() === null && t3.lFace === null && t3.rFace() === null);
      }
    }, e3.GluVertex = function(e4, t3) {
      this.next = e4 || this, this.prev = t3 || this, this.anEdge = null, this.data = null, this.coords = [0, 0, 0], this.s = 0, this.t = 0, this.pqHandle = 0;
    }, e3.PriorityQ = function() {
      this.verts_ = [], this.order_ = null, this.size_ = 0, this.initialized_ = false, this.heap_ = new e3.PriorityQHeap();
    }, e3.PriorityQ.prototype.deleteQ = function() {
      this.heap_ = null, this.order_ = null, this.verts_ = null;
    }, e3.PriorityQ.prototype.init = function() {
      this.order_ = [];
      for (var t3 = 0; t3 < this.size_; t3++)
        this.order_[t3] = t3;
      var s3, r2 = (s3 = this.verts_, function(t4, r3) {
        return e3.geom.vertLeq(s3[t4], s3[r3]) ? 1 : -1;
      });
      if (this.order_.sort(r2), this.initialized_ = true, this.heap_.init(), e3.DEBUG) {
        var i2 = 0, n2 = i2 + this.size_ - 1;
        for (t3 = i2; t3 < n2; ++t3)
          e3.assert(e3.geom.vertLeq(this.verts_[this.order_[t3 + 1]], this.verts_[this.order_[t3]]));
      }
    }, e3.PriorityQ.prototype.insert = function(e4) {
      if (this.initialized_)
        return this.heap_.insert(e4);
      var t3 = this.size_++;
      return this.verts_[t3] = e4, -(t3 + 1);
    }, e3.PriorityQ.prototype.extractMin = function() {
      if (this.size_ === 0)
        return this.heap_.extractMin();
      var t3 = this.verts_[this.order_[this.size_ - 1]];
      if (!this.heap_.isEmpty()) {
        var s3 = this.heap_.minimum();
        if (e3.geom.vertLeq(s3, t3))
          return this.heap_.extractMin();
      }
      do {
        --this.size_;
      } while (this.size_ > 0 && this.verts_[this.order_[this.size_ - 1]] === null);
      return t3;
    }, e3.PriorityQ.prototype.minimum = function() {
      if (this.size_ === 0)
        return this.heap_.minimum();
      var t3 = this.verts_[this.order_[this.size_ - 1]];
      if (!this.heap_.isEmpty()) {
        var s3 = this.heap_.minimum();
        if (e3.geom.vertLeq(s3, t3))
          return s3;
      }
      return t3;
    }, e3.PriorityQ.prototype.remove = function(t3) {
      if (t3 >= 0)
        this.heap_.remove(t3);
      else
        for (t3 = -(t3 + 1), e3.assert(t3 < this.verts_.length && this.verts_[t3] !== null), this.verts_[t3] = null; this.size_ > 0 && this.verts_[this.order_[this.size_ - 1]] === null; )
          --this.size_;
    }, e3.PriorityQHeap = function() {
      this.heap_ = e3.PriorityQHeap.reallocNumeric_([0], e3.PriorityQHeap.INIT_SIZE_ + 1), this.verts_ = [null, null], this.handles_ = [0, 0], this.size_ = 0, this.max_ = e3.PriorityQHeap.INIT_SIZE_, this.freeList_ = 0, this.initialized_ = false, this.heap_[1] = 1;
    }, e3.PriorityQHeap.INIT_SIZE_ = 32, e3.PriorityQHeap.reallocNumeric_ = function(e4, t3) {
      for (var s3 = new Array(t3), r2 = 0; r2 < e4.length; r2++)
        s3[r2] = e4[r2];
      for (; r2 < t3; r2++)
        s3[r2] = 0;
      return s3;
    }, e3.PriorityQHeap.prototype.init = function() {
      for (var e4 = this.size_; e4 >= 1; --e4)
        this.floatDown_(e4);
      this.initialized_ = true;
    }, e3.PriorityQHeap.prototype.insert = function(t3) {
      var s3, r2 = ++this.size_;
      return 2 * r2 > this.max_ && (this.max_ *= 2, this.handles_ = e3.PriorityQHeap.reallocNumeric_(this.handles_, this.max_ + 1)), this.freeList_ === 0 ? s3 = r2 : (s3 = this.freeList_, this.freeList_ = this.handles_[this.freeList_]), this.verts_[s3] = t3, this.handles_[s3] = r2, this.heap_[r2] = s3, this.initialized_ && this.floatUp_(r2), s3;
    }, e3.PriorityQHeap.prototype.isEmpty = function() {
      return this.size_ === 0;
    }, e3.PriorityQHeap.prototype.minimum = function() {
      return this.verts_[this.heap_[1]];
    }, e3.PriorityQHeap.prototype.extractMin = function() {
      var e4 = this.heap_, t3 = this.verts_, s3 = this.handles_, r2 = e4[1], i2 = t3[r2];
      return this.size_ > 0 && (e4[1] = e4[this.size_], s3[e4[1]] = 1, t3[r2] = null, s3[r2] = this.freeList_, this.freeList_ = r2, --this.size_ > 0 && this.floatDown_(1)), i2;
    }, e3.PriorityQHeap.prototype.remove = function(t3) {
      var s3 = this.heap_, r2 = this.verts_, i2 = this.handles_;
      e3.assert(t3 >= 1 && t3 <= this.max_ && r2[t3] !== null);
      var n2 = i2[t3];
      if (s3[n2] = s3[this.size_], i2[s3[n2]] = n2, n2 <= --this.size_)
        if (n2 <= 1)
          this.floatDown_(n2);
        else {
          var o2 = r2[s3[n2]], l2 = r2[s3[n2 >> 1]];
          e3.geom.vertLeq(l2, o2) ? this.floatDown_(n2) : this.floatUp_(n2);
        }
      r2[t3] = null, i2[t3] = this.freeList_, this.freeList_ = t3;
    }, e3.PriorityQHeap.prototype.floatDown_ = function(t3) {
      for (var s3 = this.heap_, r2 = this.verts_, i2 = this.handles_, n2 = t3, o2 = s3[n2]; ; ) {
        var l2 = n2 << 1;
        l2 < this.size_ && e3.geom.vertLeq(r2[s3[l2 + 1]], r2[s3[l2]]) && (l2 += 1), e3.assert(l2 <= this.max_);
        var a2 = s3[l2];
        if (l2 > this.size_ || e3.geom.vertLeq(r2[o2], r2[a2]))
          return s3[n2] = o2, void (i2[o2] = n2);
        s3[n2] = a2, i2[a2] = n2, n2 = l2;
      }
    }, e3.PriorityQHeap.prototype.floatUp_ = function(t3) {
      for (var s3 = this.heap_, r2 = this.verts_, i2 = this.handles_, n2 = t3, o2 = s3[n2]; ; ) {
        var l2 = n2 >> 1, a2 = s3[l2];
        if (l2 === 0 || e3.geom.vertLeq(r2[a2], r2[o2]))
          return s3[n2] = o2, void (i2[o2] = n2);
        s3[n2] = a2, i2[a2] = n2, n2 = l2;
      }
    }, e3.ActiveRegion = function() {
      this.eUp = null, this.nodeUp = null, this.windingNumber = 0, this.inside = false, this.sentinel = false, this.dirty = false, this.fixUpperEdge = false;
    }, e3.ActiveRegion.prototype.regionBelow = function() {
      return this.nodeUp.getPredecessor().getKey();
    }, e3.ActiveRegion.prototype.regionAbove = function() {
      return this.nodeUp.getSuccessor().getKey();
    }, e3;
  }, (s2 = t2()) !== void 0 && (e2.exports = s2);
});
const r$2 = n$3.getLogger("esri.views.2d.engine.webgl.mesh.templates.Tesselator");
class i$2 {
  constructor() {
    this._currentVertexIndex = 0, this._indexCounter = 0, this._triangleIndices = [-1, -1, -1], this.glu = new s$1.GluTesselator(), this.glu.gluTessCallback(s$1.gluEnum.GLU_TESS_BEGIN, this._begincallback.bind(this)), this.glu.gluTessCallback(s$1.gluEnum.GLU_TESS_VERTEX_DATA, this._vertexCallback.bind(this)), this.glu.gluTessCallback(s$1.gluEnum.GLU_TESS_END, this._endcallback.bind(this)), this.glu.gluTessCallback(s$1.gluEnum.GLU_TESS_COMBINE, this._combinecallback.bind(this)), this.glu.gluTessCallback(s$1.gluEnum.GLU_TESS_ERROR, this._errorcallback.bind(this)), this.glu.gluTessCallback(s$1.gluEnum.GLU_TESS_EDGE_FLAG, this._edgeCallback.bind(this)), this.glu.gluTessProperty(s$1.gluEnum.GLU_TESS_WINDING_RULE, s$1.windingRule.GLU_TESS_WINDING_ODD);
  }
  beginPolygon(e2, t2) {
    this._triangleIndices[0] = -1, this._triangleIndices[1] = -1, this._triangleIndices[2] = -1, this._currentVertexIndex = 0, this._indexCounter = 0, this.glu.gluTessBeginPolygon(e2), this._indices = t2;
  }
  endPolygon() {
    this.glu.gluTessEndPolygon();
  }
  beginContour() {
    this.glu.gluTessBeginContour();
  }
  endContour() {
    this.glu.gluTessEndContour();
  }
  addVertex(e2, t2) {
    this.glu.gluTessVertex(e2, t2);
  }
  _vertexCallback(e2, t2) {
    if (t2[t2.length] = e2[0], t2[t2.length] = e2[1], this._triangleIndices[this._currentVertexIndex] = -1, this._currentVertexIndex >= 2) {
      for (let e3 = 0; e3 < 3; e3++)
        this._triangleIndices[e3] === -1 && (this._triangleIndices[e3] = this._indexCounter++), this._indices[this._indices.length] = this._triangleIndices[e3];
      this._currentVertexIndex = 0;
    } else
      this._currentVertexIndex++;
  }
  _begincallback() {
    this._triangleIndices[0] = -1, this._triangleIndices[1] = -1, this._triangleIndices[2] = -1, this._currentVertexIndex = 0;
  }
  _endcallback() {
    this._currentVertexIndex = 0;
  }
  _errorcallback(e2) {
    r$2.error(`Encountered error during tesselation: ${e2}`);
  }
  _combinecallback(e2) {
    return [e2[0], e2[1], e2[2]];
  }
  _edgeCallback() {
  }
}
function n$1(n2, t2, i2) {
  return n2[0] = t2[0] - i2[0], n2[1] = t2[1] - i2[1], n2;
}
function t(n2, t2) {
  return Math.sqrt(n2 * n2 + t2 * t2);
}
function i$1(n2) {
  const i2 = t(n2[0], n2[1]);
  n2[0] /= i2, n2[1] /= i2;
}
function o$1(n2, i2) {
  return t(n2[0] - i2[0], n2[1] - i2[1]);
}
function r$1(n2) {
  return typeof n2 == "function";
}
function u$1(n2) {
  return 1 / Math.max(n2, 1);
}
class e {
  constructor() {
    this.closed = void 0, this.isFirstVertex = void 0, this.isLastVertex = void 0, this.isCap = void 0, this.currentVertex = { x: void 0, y: void 0 }, this.inbound = { x: void 0, y: void 0 }, this.outbound = { x: void 0, y: void 0 }, this.prevNormal = { x: void 0, y: void 0 }, this.nextNormal = { x: void 0, y: void 0 }, this.bisector = { x: void 0, y: void 0 }, this.leftInner = { x: void 0, y: void 0 }, this.rightInner = { x: void 0, y: void 0 }, this.leftOuter = { x: void 0, y: void 0 }, this.rightOuter = { x: void 0, y: void 0 };
  }
}
function r(t2, e2, r2) {
  o.trackDistance = e2.trackDistance != null && e2.trackDistance, o.wrapDistance = e2.wrapDistance != null ? e2.wrapDistance : 65535, o.thin = e2.thin != null && e2.thin, o.initialDistance = e2.initialDistance != null ? e2.initialDistance : 0, o.enableOuterBisectorSplit = e2.enableOuterBisectorSplit != null && e2.enableOuterBisectorSplit, o.outerBisectorAutoSplitThreshold = e2.outerBisectorAutoSplitThreshold != null ? e2.outerBisectorAutoSplitThreshold : 0, o.enableInnerBisectorSplit = e2.enableOuterBisectorSplit != null && e2.enableOuterBisectorSplit, o.innerBisectorAutoSplitThreshold = e2.innerBisectorAutoSplitThreshold != null ? e2.innerBisectorAutoSplitThreshold : 0, x = t2, s = r2, u = 0, l = 0, c = 0, y = false, a = null, h = null, d.currentVertex.x = null, d.currentVertex.y = null, d.distance = o.initialDistance;
  const i2 = x[0], n2 = x[x.length - 1];
  d.canSplit = false, d.closed = i2.x === n2.x && i2.y === n2.y, x.length < 2 || x.length === 2 && d.closed || (o.thin ? o.trackDistance ? g() : p() : o.enableOuterBisectorSplit || o.outerBisectorAutoSplitThreshold > 0 || o.enableInnerBisectorSplit || o.innerBisectorAutoSplitThreshold > 0 ? (d.canSplit = true, V()) : b());
}
function i() {
  x = null, s = null;
}
function n() {
  if (d.cosine < o.innerBisectorAutoSplitThreshold) {
    d.splitInner = true, d.gapInner = true;
    const t2 = Math.max(o.innerBisectorAutoSplitThreshold, d.cosine), e2 = Math.sqrt(1 - t2 * t2) / t2;
    d.leftInner.x = d.nextNormal.x + d.sign * e2 * d.outbound.x, d.leftInner.y = d.nextNormal.y + d.sign * e2 * d.outbound.y, d.rightInner.x = d.prevNormal.x - d.sign * e2 * d.inbound.x, d.rightInner.y = d.prevNormal.y - d.sign * e2 * d.inbound.y;
  } else
    o.enableInnerBisectorSplit && (d.splitInner = true, d.gapInner = false, d.leftInner.x = d.rightInner.x = d.bisector.x / d.cosine, d.leftInner.y = d.rightInner.y = d.bisector.y / d.cosine);
  if (d.cosine < o.outerBisectorAutoSplitThreshold) {
    d.splitOuter = true, d.gapOuter = true;
    const t2 = Math.max(o.outerBisectorAutoSplitThreshold, d.cosine), e2 = Math.sqrt(1 - t2 * t2) / t2;
    d.leftOuter.x = d.prevNormal.x - d.sign * e2 * d.inbound.x, d.leftOuter.y = d.prevNormal.y - d.sign * e2 * d.inbound.y, d.rightOuter.x = d.nextNormal.x + d.sign * e2 * d.outbound.x, d.rightOuter.y = d.nextNormal.y + d.sign * e2 * d.outbound.y;
  } else
    o.enableOuterBisectorSplit && (d.splitOuter = true, d.gapOuter = false, d.leftOuter.x = d.rightOuter.x = d.bisector.x / d.cosine, d.leftOuter.y = d.rightOuter.y = d.bisector.y / d.cosine);
}
let x;
const o = {};
let s, u, l, c, y, a, h;
const d = new e();
function b() {
  for (f(), m(), v(1), d.closure0 = d.leftEntry0, d.closure1 = d.leftEntry1, d.closure2 = d.leftEntry2; l - c > o.wrapDistance || u < x.length - 1 || u < x.length && (!d.closed || o.trackDistance); )
    f(), m(), v(2), s.bridge(d), d.leftExit0 = d.rightExit0, d.leftExit1 = d.rightExit1, d.leftExit2 = d.rightExit2;
  d.closed && !o.trackDistance && (d.rightEntry0 = d.closure0, d.rightEntry1 = d.closure1, d.rightEntry2 = d.closure2, s.bridge(d), d.leftExit0 = d.rightExit0, d.leftExit1 = d.rightExit1, d.leftExit2 = d.rightExit2);
}
function V() {
  for (f(), m(), d.splitInner = d.gapInner = d.splitOuter = d.gapOuter = false, v(1), d.closure0 = d.leftEntry0, d.closure1 = d.leftEntry1, d.closure2 = d.leftEntry2; l - c > o.wrapDistance || u < x.length - 1 || u < x.length && (!d.closed || o.trackDistance); )
    f(), m(), d.splitInner = d.gapInner = d.splitOuter = d.gapOuter = false, v(2), s.bridge(d), d.leftExit0 = d.rightExit0, d.leftExit1 = d.rightExit1, d.leftExit2 = d.rightExit2;
  d.closed && !o.trackDistance && (d.rightEntry0 = d.closure0, d.rightEntry1 = d.closure1, d.rightEntry2 = d.closure2, s.bridge(d), d.leftExit0 = d.rightExit0, d.leftExit1 = d.rightExit1, d.leftExit2 = d.rightExit2);
}
function g() {
  for (f(), E(), N(1); l - c > o.wrapDistance || u < x.length; )
    f(), E(), N(2), s.bridge(d), d.leftExit0 = d.rightExit0, d.leftExit2 = d.rightExit2;
}
function p() {
  for (; u < x.length; ) {
    if (u > 0 && (d.inbound.x = d.outbound.x, d.inbound.y = d.outbound.y), u < x.length - 1) {
      d.outbound.x = x[u + 1].x - x[u].x, d.outbound.y = x[u + 1].y - x[u].y;
      const t2 = Math.sqrt(d.outbound.x * d.outbound.x + d.outbound.y * d.outbound.y);
      d.distance += t2, d.outbound.x /= t2, d.outbound.y /= t2;
    } else
      d.outbound.x = d.inbound.x, d.outbound.y = d.inbound.y;
    u === 0 && (d.inbound.x = d.outbound.x, d.inbound.y = d.outbound.y), d.currentVertex.x = x[u].x, d.currentVertex.y = x[u].y, d.prevNormal.x = -d.inbound.y, d.prevNormal.y = d.inbound.x, d.nextNormal.x = -d.outbound.y, d.nextNormal.y = d.outbound.x, u === 0 ? (s.vertex(d), d.leftEntry0 = d.entry0, d.leftEntry2 = d.entry2, d.leftExit0 = d.exit0, d.leftExit2 = d.exit2) : (s.vertex(d), d.rightEntry0 = d.entry0, d.rightEntry2 = d.entry2, d.rightExit0 = d.exit0, d.rightExit2 = d.exit2, s.bridge(d), d.leftExit0 = d.rightExit0, d.leftExit2 = d.rightExit2), ++u;
  }
}
function f() {
  if (y)
    return d.distance = 0, d.isCap = d.isFirstVertex = d.isLastVertex = false, void (y = false);
  if (l === 0)
    if (d.isFirstVertex = u === 0, h = x[u], u === 0) {
      if (l = 0, d.closed) {
        d.inbound.x = h.x - x[x.length - 2].x, d.inbound.y = h.y - x[x.length - 2].y;
        const t3 = Math.sqrt(d.inbound.x * d.inbound.x + d.inbound.y * d.inbound.y);
        d.inbound.x /= t3, d.inbound.y /= t3;
      }
    } else
      d.inbound.x = h.x - a.x, d.inbound.y = h.y - a.y, l = Math.sqrt(d.inbound.x * d.inbound.x + d.inbound.y * d.inbound.y), d.inbound.x /= l, d.inbound.y /= l;
  if (d.distance + l - c <= o.wrapDistance) {
    if (u < x.length - 1) {
      d.outbound.x = x[u + 1].x - h.x, d.outbound.y = x[u + 1].y - h.y;
      const t3 = Math.sqrt(d.outbound.x * d.outbound.x + d.outbound.y * d.outbound.y);
      d.outbound.x /= t3, d.outbound.y /= t3;
    } else if (d.closed) {
      d.outbound.x = x[1].x - h.x, d.outbound.y = x[1].y - h.y;
      const t3 = Math.sqrt(d.outbound.x * d.outbound.x + d.outbound.y * d.outbound.y);
      d.outbound.x /= t3, d.outbound.y /= t3;
    } else
      d.outbound.x = d.inbound.x, d.outbound.y = d.inbound.y;
    return u !== 0 || d.closed || (d.inbound.x = d.outbound.x, d.inbound.y = d.outbound.y), ++u, d.isLastVertex = u === x.length, d.isCap = !d.closed && (d.isFirstVertex || d.isLastVertex), d.distance += l - c, l = 0, c = 0, y = d.distance + l - c === o.wrapDistance, d.currentVertex.x = h.x, d.currentVertex.y = h.y, a = h, void (h = null);
  }
  d.outbound.x = d.inbound.x, d.outbound.y = d.inbound.y, c += o.wrapDistance - d.distance, d.distance = o.wrapDistance, y = true;
  const t2 = c / l;
  d.currentVertex.x = (1 - t2) * a.x + t2 * h.x, d.currentVertex.y = (1 - t2) * a.y + t2 * h.y;
}
function E() {
  d.prevNormal.x = -d.inbound.y, d.prevNormal.y = d.inbound.x, d.nextNormal.x = -d.outbound.y, d.nextNormal.y = d.outbound.x;
}
function m() {
  E(), d.bisector.x = d.prevNormal.x + d.nextNormal.x, d.bisector.y = d.prevNormal.y + d.nextNormal.y;
  const t2 = Math.sqrt(d.bisector.x * d.bisector.x + d.bisector.y * d.bisector.y);
  if (t2 < 1e-3)
    return d.bisector.x = void 0, d.bisector.y = void 0, d.cosine = 0, void (d.sign = void 0);
  d.bisector.x /= t2, d.bisector.y /= t2, d.cosine = d.bisector.x * d.nextNormal.x + d.bisector.y * d.nextNormal.y, d.sign = d.prevNormal.x * d.nextNormal.y - d.prevNormal.y * d.nextNormal.x >= 0 ? 1 : -1;
}
function v(t2) {
  s.vertex(d), t2 === 1 ? (d.leftEntry0 = d.entry0, d.leftEntry1 = d.entry1, d.leftEntry2 = d.entry2, d.leftExit0 = d.exit0, d.leftExit1 = d.exit1, d.leftExit2 = d.exit2) : t2 === 2 && (d.rightEntry0 = d.entry0, d.rightEntry1 = d.entry1, d.rightEntry2 = d.entry2, d.rightExit0 = d.exit0, d.rightExit1 = d.exit1, d.rightExit2 = d.exit2);
}
function N(t2) {
  s.vertex(d), t2 === 1 ? (d.leftEntry0 = d.entry0, d.leftEntry2 = d.entry2, d.leftExit0 = d.exit0, d.leftExit2 = d.exit2) : t2 === 2 && (d.rightEntry0 = d.entry0, d.rightEntry2 = d.entry2, d.rightExit0 = d.exit0, d.rightExit2 = d.exit2);
}
class w {
  constructor(e2, r2) {
    this.writeVertex = e2, this.writeTriangle = r2, this.capType = 0, this.joinType = 2, this.miterLimitCosine = u$1(2), this.roundLimitCosine = Math.cos(23 * Math.PI / 180), this.almostParallelCosine = 0.97, this.radsPerSlice = 0.8, this.textured = false, this.joinOnUTurn = false;
  }
  vertex(t2) {
    const e2 = this.joinType === 2 ? this.miterLimitCosine : this.roundLimitCosine, r2 = t2.isCap && this.capType !== 0;
    let i2 = false;
    t2.cosine > this.almostParallelCosine ? (t2.exit0 = t2.entry0 = this.writeVertex(t2.currentVertex.x, t2.currentVertex.y, 0, 0, t2.bisector.x / t2.cosine, t2.bisector.y / t2.cosine, 0, -1, t2.distance), t2.exit2 = t2.entry2 = this.writeVertex(t2.currentVertex.x, t2.currentVertex.y, 0, 0, -t2.bisector.x / t2.cosine, -t2.bisector.y / t2.cosine, 0, 1, t2.distance)) : t2.cosine < 1 - this.almostParallelCosine ? (i2 = !t2.isCap && this.joinOnUTurn, t2.entry0 = this.writeVertex(t2.currentVertex.x, t2.currentVertex.y, 0, 0, t2.prevNormal.x, t2.prevNormal.y, 0, -1, t2.distance), t2.entry2 = this.writeVertex(t2.currentVertex.x, t2.currentVertex.y, 0, 0, -t2.prevNormal.x, -t2.prevNormal.y, 0, 1, t2.distance), t2.exit0 = this.writeVertex(t2.currentVertex.x, t2.currentVertex.y, 0, 0, t2.nextNormal.x, t2.nextNormal.y, 0, -1, t2.distance), t2.exit2 = this.writeVertex(t2.currentVertex.x, t2.currentVertex.y, 0, 0, -t2.nextNormal.x, -t2.nextNormal.y, 0, 1, t2.distance)) : t2.canSplit ? (n(), t2.sign > 0 ? (t2.splitInner ? (t2.exit0 = this.writeVertex(t2.currentVertex.x, t2.currentVertex.y, t2.outbound.x, t2.outbound.y, t2.leftInner.x, t2.leftInner.y, 0, -1, t2.distance), t2.entry0 = this.writeVertex(t2.currentVertex.x, t2.currentVertex.y, t2.inbound.x, t2.inbound.y, t2.rightInner.x, t2.rightInner.y, 0, -1, t2.distance)) : t2.exit0 = t2.entry0 = this.writeVertex(t2.currentVertex.x, t2.currentVertex.y, t2.inbound.x, t2.inbound.y, t2.bisector.x / t2.cosine, t2.bisector.y / t2.cosine, 0, -1, t2.distance), t2.cosine < e2 ? (i2 = !t2.isCap, t2.entry2 = this.writeVertex(t2.currentVertex.x, t2.currentVertex.y, 0, 0, -t2.prevNormal.x, -t2.prevNormal.y, 0, 1, t2.distance), t2.exit2 = this.writeVertex(t2.currentVertex.x, t2.currentVertex.y, 0, 0, -t2.nextNormal.x, -t2.nextNormal.y, 0, 1, t2.distance)) : t2.splitOuter ? (i2 = i2 || t2.gapOuter, t2.entry2 = this.writeVertex(t2.currentVertex.x, t2.currentVertex.y, t2.inbound.x, t2.inbound.y, -t2.leftOuter.x, -t2.leftOuter.y, 0, 1, t2.distance), t2.exit2 = this.writeVertex(t2.currentVertex.x, t2.currentVertex.y, t2.outbound.x, t2.outbound.y, -t2.rightOuter.x, -t2.rightOuter.y, 0, 1, t2.distance)) : t2.entry2 = t2.exit2 = this.writeVertex(t2.currentVertex.x, t2.currentVertex.y, 0, 0, -t2.bisector.x / t2.cosine, -t2.bisector.y / t2.cosine, 0, 1, t2.distance)) : (t2.splitInner ? (t2.exit2 = this.writeVertex(t2.currentVertex.x, t2.currentVertex.y, t2.outbound.x, t2.outbound.y, -t2.leftInner.x, -t2.leftInner.y, 0, 1, t2.distance), t2.entry2 = this.writeVertex(t2.currentVertex.x, t2.currentVertex.y, t2.inbound.x, t2.inbound.y, -t2.rightInner.x, -t2.rightInner.y, 0, 1, t2.distance)) : t2.exit2 = t2.entry2 = this.writeVertex(t2.currentVertex.x, t2.currentVertex.y, 0, 0, -t2.bisector.x / t2.cosine, -t2.bisector.y / t2.cosine, 0, 1, t2.distance), t2.cosine < e2 ? (i2 = !t2.isCap, t2.entry0 = this.writeVertex(t2.currentVertex.x, t2.currentVertex.y, 0, 0, t2.prevNormal.x, t2.prevNormal.y, 0, -1, t2.distance), t2.exit0 = this.writeVertex(t2.currentVertex.x, t2.currentVertex.y, 0, 0, t2.nextNormal.x, t2.nextNormal.y, 0, -1, t2.distance)) : t2.splitOuter ? (i2 = i2 || t2.gapOuter, t2.entry0 = this.writeVertex(t2.currentVertex.x, t2.currentVertex.y, t2.inbound.x, t2.inbound.y, t2.leftOuter.x, t2.leftOuter.y, 0, -1, t2.distance), t2.exit0 = this.writeVertex(t2.currentVertex.x, t2.currentVertex.y, t2.outbound.x, t2.outbound.y, t2.rightOuter.x, t2.rightOuter.y, 0, -1, t2.distance)) : t2.exit0 = t2.entry0 = this.writeVertex(t2.currentVertex.x, t2.currentVertex.y, 0, 0, t2.bisector.x / t2.cosine, t2.bisector.y / t2.cosine, 0, -1, t2.distance))) : t2.sign > 0 ? (t2.exit0 = t2.entry0 = this.writeVertex(t2.currentVertex.x, t2.currentVertex.y, t2.inbound.x, t2.inbound.y, t2.bisector.x / t2.cosine, t2.bisector.y / t2.cosine, 0, -1, t2.distance), t2.cosine < e2 ? (i2 = !t2.isCap, t2.entry2 = this.writeVertex(t2.currentVertex.x, t2.currentVertex.y, 0, 0, -t2.prevNormal.x, -t2.prevNormal.y, 0, 1, t2.distance), t2.exit2 = this.writeVertex(t2.currentVertex.x, t2.currentVertex.y, 0, 0, -t2.nextNormal.x, -t2.nextNormal.y, 0, 1, t2.distance)) : t2.entry2 = t2.exit2 = this.writeVertex(t2.currentVertex.x, t2.currentVertex.y, 0, 0, -t2.bisector.x / t2.cosine, -t2.bisector.y / t2.cosine, 0, 1, t2.distance)) : (t2.exit2 = t2.entry2 = this.writeVertex(t2.currentVertex.x, t2.currentVertex.y, 0, 0, -t2.bisector.x / t2.cosine, -t2.bisector.y / t2.cosine, 0, 1, t2.distance), t2.cosine < e2 ? (i2 = !t2.isCap, t2.entry0 = this.writeVertex(t2.currentVertex.x, t2.currentVertex.y, 0, 0, t2.prevNormal.x, t2.prevNormal.y, 0, -1, t2.distance), t2.exit0 = this.writeVertex(t2.currentVertex.x, t2.currentVertex.y, 0, 0, t2.nextNormal.x, t2.nextNormal.y, 0, -1, t2.distance)) : t2.exit0 = t2.entry0 = this.writeVertex(t2.currentVertex.x, t2.currentVertex.y, 0, 0, t2.bisector.x / t2.cosine, t2.bisector.y / t2.cosine, 0, -1, t2.distance));
    const x2 = t2.canSplit && (t2.splitInner || t2.splitOuter);
    let o2;
    if (o2 = t2.entry1 = t2.exit1 = x2 || i2 || r2 ? this.writeVertex(t2.currentVertex.x, t2.currentVertex.y, 0, 0, 0, 0, 0, 0, t2.distance) : null, i2 && this.joinType !== 1)
      this.writeTriangle(o2, t2.sign > 0 ? t2.exit2 : t2.entry0, t2.sign > 0 ? t2.entry2 : t2.exit0);
    else if (r2 && this.capType === 1 || i2 && this.joinType === 1) {
      let e3, r3, i3, n2, x3, s2;
      if (t2.isCap) {
        const o3 = Math.PI;
        x3 = Math.ceil(o3 / this.radsPerSlice), s2 = o3 / x3, t2.isFirstVertex ? (e3 = t2.prevNormal.x, r3 = t2.prevNormal.y, i3 = t2.entry0, n2 = t2.entry2) : t2.isLastVertex && (e3 = -t2.nextNormal.x, r3 = -t2.nextNormal.y, i3 = t2.exit2, n2 = t2.exit0);
      } else {
        const o3 = 2 * Math.acos(t2.cosine);
        x3 = Math.ceil(o3 / this.radsPerSlice), s2 = o3 / x3, e3 = t2.sign > 0 ? -t2.prevNormal.x : t2.nextNormal.x, r3 = t2.sign > 0 ? -t2.prevNormal.y : t2.nextNormal.y, i3 = t2.sign > 0 ? t2.entry2 : t2.exit0, n2 = t2.sign > 0 ? t2.exit2 : t2.entry0;
      }
      const u2 = Math.cos(s2), l2 = Math.sin(s2), c2 = l2 * e3 + u2 * r3;
      let y2, a2;
      e3 = u2 * e3 - l2 * r3, r3 = c2;
      for (let h2 = 0; h2 < x3; ++h2) {
        if (y2 = a2, h2 < x3 - 1)
          if (t2.isCap) {
            const i4 = t2.isFirstVertex ? -1 : 1;
            a2 = this.writeVertex(t2.currentVertex.x, t2.currentVertex.y, 0, 0, e3, r3, i4, 0, t2.distance);
          } else
            a2 = this.writeVertex(t2.currentVertex.x, t2.currentVertex.y, 0, 0, e3, r3, 0, t2.sign, t2.distance);
        this.writeTriangle(h2 === 0 ? i3 : y2, o2, h2 === x3 - 1 ? n2 : a2);
        const s3 = l2 * e3 + u2 * r3;
        e3 = u2 * e3 - l2 * r3, r3 = s3;
      }
    } else if (r2 && this.capType === 2) {
      const e3 = t2.isFirstVertex ? 1 : -1;
      let r3, i3;
      this.textured ? (r3 = this.writeVertex(t2.currentVertex.x, t2.currentVertex.y, 0, 0, t2.prevNormal.x - e3 * t2.inbound.x, t2.prevNormal.y - e3 * t2.inbound.y, -e3, -1, t2.distance), i3 = this.writeVertex(t2.currentVertex.x, t2.currentVertex.y, 0, 0, -t2.prevNormal.x - e3 * t2.inbound.x, -t2.prevNormal.y - e3 * t2.inbound.y, -e3, 1, t2.distance)) : (r3 = this.writeVertex(t2.currentVertex.x, t2.currentVertex.y, 0, 0, t2.prevNormal.x - e3 * t2.inbound.x, t2.prevNormal.y - e3 * t2.inbound.y, 0, -1, t2.distance), i3 = this.writeVertex(t2.currentVertex.x, t2.currentVertex.y, 0, 0, -t2.prevNormal.x - e3 * t2.inbound.x, -t2.prevNormal.y - e3 * t2.inbound.y, 0, 1, t2.distance)), e3 > 0 ? (this.writeTriangle(o2, t2.entry2, i3), this.writeTriangle(o2, i3, r3), this.writeTriangle(o2, r3, t2.entry0)) : (this.writeTriangle(o2, i3, t2.exit2), this.writeTriangle(o2, r3, i3), this.writeTriangle(o2, t2.exit0, r3));
    }
  }
  bridge(t2) {
    this.writeTriangle(t2.leftExit0, t2.rightEntry0, t2.leftExit1 != null ? t2.leftExit1 : t2.leftExit2), this.writeTriangle(t2.rightEntry0, t2.rightEntry1 != null ? t2.rightEntry1 : t2.rightEntry2, t2.leftExit1 != null ? t2.leftExit1 : t2.leftExit2), t2.leftExit1 != null && t2.rightEntry1 != null ? (this.writeTriangle(t2.leftExit1, t2.rightEntry1, t2.leftExit2), this.writeTriangle(t2.rightEntry1, t2.rightEntry2, t2.leftExit2)) : t2.leftExit1 != null ? this.writeTriangle(t2.leftExit1, t2.rightEntry2, t2.leftExit2) : t2.rightEntry1 != null && this.writeTriangle(t2.rightEntry1, t2.rightEntry2, t2.leftExit2);
  }
}
export { r as a, i as b, n$1 as c, i$1 as d, n as e, e$1 as f, i$2 as i, n$2 as n, o$1 as o, r$1 as r, t$1 as t, u$1 as u, w };
