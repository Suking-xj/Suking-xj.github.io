var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a2, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a2, prop, b[prop]);
    }
  return a2;
};
import { bT as y$2, bc as y$3, bd as f$5, ba as s$8, bb as u$6, b9 as l$5, b6 as i$5, be as c$5, a4 as n$b, cR as o$6, cV as a$3 } from "./vendor.74d5941c.js";
class t$4 {
  constructor() {
    this.setIdentity();
  }
  getAngle() {
    return (this.rz == null || this.rz === 0 && this.rz_c !== 1 && this.rz_s !== 0) && (this.rz = Math.atan2(this.rz_s, this.rz_c)), this.rz;
  }
  setIdentity() {
    this.tx = 0, this.ty = 0, this.tz = 0, this.s = 1, this.rx = 0, this.ry = 0, this.rz = 0, this.rz_c = 1, this.rz_s = 0;
  }
  setTranslate(t2, s2) {
    this.tx = t2, this.ty = s2;
  }
  setTranslateZ(t2) {
    this.tz = t2;
  }
  setRotateCS(t2, s2) {
    this.rz = void 0, this.rz_c = t2, this.rz_s = s2;
  }
  setRotate(t2) {
    this.rz = t2, this.rz_c = void 0, this.rz_s = void 0;
  }
  setRotateY(t2) {
    this.ry = t2;
  }
  setScale(t2) {
    this.s = t2;
  }
  setMeasure(t2) {
    this.m = t2;
  }
}
class r$b {
  constructor(t2) {
    this._geometry = t2;
  }
  next() {
    const t2 = this._geometry;
    return this._geometry = null, t2;
  }
}
function o$5(i2) {
  const h2 = y$2(i2);
  return c$4(h2), h2;
}
function a$2(t2) {
  if (t2) {
    for (let i2 = t2.length - 1; i2 > 0; --i2)
      t2[i2][0] -= t2[i2 - 1][0], t2[i2][1] -= t2[i2 - 1][1];
  }
}
function r$a(t2) {
  if (t2)
    for (const i2 of t2)
      a$2(i2);
}
function l$4(t2) {
  if (t2) {
    const i2 = t2.length;
    for (let h2 = 1; h2 < i2; ++h2)
      t2[h2][0] += t2[h2 - 1][0], t2[h2][1] += t2[h2 - 1][1];
  }
}
function u$5(t2) {
  if (t2)
    for (const i2 of t2)
      l$4(i2);
}
function c$4(t2) {
  t2 && (y$3(t2) ? u$5(t2.rings) : f$5(t2) ? u$5(t2.paths) : s$8(t2) && l$4(t2.points));
}
function p$2(t2) {
  t2 && (y$3(t2) ? r$a(t2.rings) : f$5(t2) ? r$a(t2.paths) : s$8(t2) && a$2(t2.points));
}
function m$2(t2) {
  if (t2)
    for (const i2 of t2)
      f$4(i2);
}
function f$4(t2) {
  t2 && t2.reverse();
}
function P(t2, i2, h2) {
  return [t2[0] + (i2[0] - t2[0]) * h2, t2[1] + (i2[1] - t2[1]) * h2];
}
function x(t2) {
  return !(!t2 || t2.length === 0) && (t2[0][0] === t2[t2.length - 1][0] && t2[0][1] === t2[t2.length - 1][1]);
}
function g(t2) {
  return t2[4];
}
function d(t2, i2) {
  t2[4] = i2;
}
class C {
  constructor(t2, n2, o2, a2) {
    this.acceptPolygon = n2, this.acceptPolyline = o2, this.geomUnitsPerPoint = a2, this.pathCount = -1, this.pathIndex = -1, this.iteratePath = false, t2 && (y$3(t2) ? n2 && (this.multiPath = t2.rings, this.isClosed = true) : f$5(t2) ? o2 && (this.multiPath = t2.paths, this.isClosed = false) : u$6(t2) && n2 && (this.multiPath = I(t2).rings, this.isClosed = true), this.multiPath && (this.pathCount = this.multiPath.length)), this.internalPlacement = new t$4();
  }
  next() {
    if (!this.multiPath)
      return null;
    for (; this.iteratePath || this.pathIndex < this.pathCount - 1; ) {
      this.iteratePath || this.pathIndex++;
      const t2 = this.processPath(this.multiPath[this.pathIndex]);
      if (t2)
        return t2;
    }
    return this.pathCount = -1, this.pathIndex = -1, this.multiPath = null, null;
  }
}
class y$1 {
  constructor(t2, i2, h2, n2) {
    this.inputGeometries = t2, this.acceptPolygon = i2, this.acceptPolyline = h2, this.geomUnitsPerPoint = n2, this.pathCount = -1, this.pathIndex = -1, this.iteratePath = false;
  }
  next() {
    for (; ; ) {
      if (!this.multiPath) {
        let t2 = this.inputGeometries.next();
        for (; t2; ) {
          if (y$3(t2) ? this.acceptPolygon && (this.multiPath = t2.rings, this.isClosed = true) : f$5(t2) ? this.acceptPolyline && (this.multiPath = t2.paths, this.isClosed = false) : u$6(t2) && this.acceptPolygon && (this.multiPath = I(t2).rings, this.isClosed = true), this.multiPath) {
            this.pathCount = this.multiPath.length, this.pathIndex = -1;
            break;
          }
          t2 = this.inputGeometries.next();
        }
        if (!this.multiPath)
          return null;
      }
      for (; this.iteratePath || this.pathIndex < this.pathCount - 1; ) {
        this.iteratePath || this.pathIndex++;
        const t2 = this.processPath(this.multiPath[this.pathIndex]);
        if (t2)
          return t2;
      }
      this.pathCount = -1, this.pathIndex = -1, this.multiPath = null;
    }
  }
}
function I(t2) {
  return { rings: [[[t2.xmin, t2.ymin], [t2.xmin, t2.ymax], [t2.xmax, t2.ymax], [t2.xmax, t2.ymin], [t2.xmin, t2.ymin]]] };
}
class o$4 {
  static local() {
    return o$4.instance === null && (o$4.instance = new o$4()), o$4.instance;
  }
  execute(s2, t2, e2) {
    return new r$9(s2, t2, e2);
  }
}
o$4.instance = null;
class r$9 {
  constructor(s2, t2, e2) {
    this._inputGeometries = s2, this._angleTolerance = t2.angleTolerance !== void 0 ? t2.angleTolerance : 120, this._maxCosAngle = Math.cos((1 - Math.abs(this._angleTolerance) / 180) * Math.PI);
  }
  next() {
    let n2 = this._inputGeometries.next();
    for (; n2; ) {
      if (y$3(n2)) {
        this._isClosed = true;
        const t2 = y$2(n2);
        return this._processMultipath(t2.rings), t2;
      }
      if (f$5(n2)) {
        this._isClosed = false;
        const t2 = y$2(n2);
        return this._processMultipath(t2.paths), t2;
      }
      if (u$6(n2)) {
        if (this._maxCosAngle)
          return n2;
        this._isClosed = true;
        const s2 = [[n2.xmin, n2.ymin], [n2.xmin, n2.ymax], [n2.xmax, n2.ymax], [n2.xmax, n2.ymin], [n2.xmin, n2.ymin]];
        return this._processPath(s2), { rings: [s2] };
      }
      n2 = this._inputGeometries.next();
    }
    return null;
  }
  _processMultipath(s2) {
    if (s2)
      for (const t2 of s2)
        this._processPath(t2);
  }
  _processPath(s2) {
    if (s2) {
      let t2, e2, i2, o2, r2, l2, a2 = s2.length, h2 = s2[0];
      this._isClosed && ++a2;
      for (let c2 = 1; c2 < a2; ++c2) {
        let m2;
        m2 = this._isClosed && c2 === a2 - 1 ? s2[0] : s2[c2];
        const _2 = m2[0] - h2[0], u2 = m2[1] - h2[1], p2 = Math.sqrt(_2 * _2 + u2 * u2);
        if (c2 > 1 && p2 > 0 && i2 > 0) {
          (t2 * _2 + e2 * u2) / p2 / i2 <= this._maxCosAngle && d(h2, 1);
        }
        c2 === 1 && (o2 = _2, r2 = u2, l2 = p2), p2 > 0 && (h2 = m2, t2 = _2, e2 = u2, i2 = p2);
      }
      if (this._isClosed && i2 > 0 && l2 > 0) {
        (t2 * o2 + e2 * r2) / l2 / i2 <= this._maxCosAngle && d(s2[0], 1);
      }
    }
  }
}
const t$3 = 0.03;
class e$3 {
  constructor() {
    this._path = [];
  }
  path() {
    return this._path;
  }
  addPath(t2, e2) {
    e2 || t2.reverse(), Array.prototype.push.apply(this._path, t2), e2 || t2.reverse();
  }
  static mergePath(t2, e2) {
    e2 && Array.prototype.push.apply(t2, e2);
  }
  startPath(t2) {
    this._path.push(t2);
  }
  lineTo(t2) {
    this._path.push(t2);
  }
  close() {
    const t2 = this._path;
    t2.length > 1 && (t2[0][0] === t2[t2.length - 1][0] && t2[0][1] === t2[t2.length - 1][1] || t2.push([t2[0][0], t2[0][1]]));
  }
}
class s$7 {
  constructor(t2 = 0, e2 = false) {
  }
  normalize(t2) {
    const e2 = Math.sqrt(t2[0] * t2[0] + t2[1] * t2[1]);
    t2[0] /= e2, t2[1] /= e2;
  }
  calculateLength(t2, e2) {
    const s2 = e2[0] - t2[0], n2 = e2[1] - t2[1];
    return Math.sqrt(s2 * s2 + n2 * n2);
  }
  calculateSegLength(t2, e2) {
    return this.calculateLength(t2[e2], t2[e2 + 1]);
  }
  calculatePathLength(t2) {
    let e2 = 0;
    const s2 = t2 ? t2.length : 0;
    for (let n2 = 0; n2 < s2 - 1; ++n2)
      e2 += this.calculateSegLength(t2, n2);
    return e2;
  }
  calculatePathArea(t2) {
    let e2 = 0;
    const s2 = t2 ? t2.length : 0;
    for (let n2 = 0; n2 < s2 - 1; ++n2)
      e2 += (t2[n2 + 1][0] - t2[n2][0]) * (t2[n2 + 1][1] + t2[n2][1]);
    return e2 / 2;
  }
  getCoord2D(t2, e2, s2) {
    return [t2[0] + (e2[0] - t2[0]) * s2, t2[1] + (e2[1] - t2[1]) * s2];
  }
  getSegCoord2D(t2, e2, s2) {
    return this.getCoord2D(t2[e2], t2[e2 + 1], s2);
  }
  getAngle(t2, e2, s2) {
    const n2 = e2[0] - t2[0], r2 = e2[1] - t2[1];
    return Math.atan2(r2, n2);
  }
  getSegAngle(t2, e2, s2) {
    return this.getAngle(t2[e2], t2[e2 + 1], s2);
  }
  getAngleCS(t2, e2, s2) {
    const n2 = e2[0] - t2[0], r2 = e2[1] - t2[1], h2 = Math.sqrt(n2 * n2 + r2 * r2);
    return h2 > 0 ? [n2 / h2, r2 / h2] : [1, 0];
  }
  getSegAngleCS(t2, e2, s2) {
    return this.getAngleCS(t2[e2], t2[e2 + 1], s2);
  }
  cut(t2, e2, s2, n2) {
    return [s2 <= 0 ? t2[e2] : this.getSegCoord2D(t2, e2, s2), n2 >= 1 ? t2[e2 + 1] : this.getSegCoord2D(t2, e2, n2)];
  }
  addSegment(t2, e2, s2) {
    s2 && t2.push(e2[0]), t2.push(e2[1]);
  }
  getSubCurve(t2, e2, s2) {
    const n2 = [];
    return this.appendSubCurve(n2, t2, e2, s2) ? n2 : null;
  }
  appendSubCurve(t2, e2, s2, n2) {
    const r2 = e2 ? e2.length - 1 : 0;
    let h2 = 0, l2 = true, a2 = 0;
    for (; a2 < r2; ) {
      const r3 = this.calculateSegLength(e2, a2);
      if (r3 !== 0) {
        if (l2) {
          if (h2 + r3 > s2) {
            const o2 = (s2 - h2) / r3;
            let u2 = 1, c2 = false;
            h2 + r3 >= n2 && (u2 = (n2 - h2) / r3, c2 = true);
            const i2 = this.cut(e2, a2, o2, u2);
            if (i2 && this.addSegment(t2, i2, l2), c2)
              break;
            l2 = false;
          }
        } else {
          if (h2 + r3 > n2) {
            const s3 = this.cut(e2, a2, 0, (n2 - h2) / r3);
            s3 && this.addSegment(t2, s3, l2);
            break;
          }
          this.addSegment(t2, [e2[a2], e2[a2 + 1]], l2);
        }
        h2 += r3, ++a2;
      } else
        ++a2;
    }
    return true;
  }
  getCIMPointAlong(t2, e2) {
    const s2 = t2 ? t2.length - 1 : 0;
    let n2 = 0, r2 = -1;
    for (; r2 < s2; ) {
      ++r2;
      const s3 = this.calculateSegLength(t2, r2);
      if (s3 !== 0) {
        if (n2 + s3 > e2) {
          const h2 = (e2 - n2) / s3;
          return this.getCoord2D(t2[r2], t2[r2 + 1], h2);
        }
        n2 += s3;
      }
    }
    return null;
  }
  isEmpty(t2, e2) {
    if (!t2 || t2.length <= 1)
      return true;
    const s2 = t2 ? t2.length - 1 : 0;
    let n2 = -1;
    for (; n2 < s2; ) {
      if (++n2, t2[n2 + 1][0] !== t2[n2][0] || t2[n2 + 1][1] !== t2[n2][1])
        return false;
      if (e2 && t2[n2 + 1][2] !== t2[n2][2])
        return false;
    }
    return true;
  }
  offset(t2, e2, s2, n2, r2) {
    if (!t2 || t2.length < 2)
      return null;
    let h2 = t2.length;
    const l2 = t2[0][0] === t2[h2 - 1][0] && t2[0][1] === t2[h2 - 1][1];
    if (l2) {
      if (t2.length < 3)
        return null;
      --h2;
    }
    const a2 = [];
    let o2 = l2 ? t2[h2 - 1] : null, u2 = t2[0];
    for (let c2 = 0; c2 < h2; c2++) {
      const r3 = c2 === h2 - 1 ? l2 ? t2[0] : null : t2[c2 + 1];
      if (o2)
        if (r3) {
          const t3 = [r3[0] - u2[0], r3[1] - u2[1]];
          this.normalize(t3);
          const h3 = [u2[0] - o2[0], u2[1] - o2[1]];
          this.normalize(h3);
          const l3 = h3[0] * t3[1] - h3[1] * t3[0], c3 = h3[0] * t3[0] + h3[1] * t3[1];
          if (l3 >= 0 == e2 <= 0) {
            const s3 = [t3[0] - h3[0], t3[1] - h3[1]];
            this.normalize(s3);
            const n3 = Math.sqrt((1 + c3) / 2), r4 = -Math.abs(e2) / n3;
            a2.push([u2[0] - s3[0] * r4, u2[1] - s3[1] * r4]);
          } else
            switch (s2) {
              case "Mitered": {
                const s3 = Math.sqrt((1 + c3) / 2);
                if (s3 > 0 && 1 / s3 < n2) {
                  const n3 = [t3[0] - h3[0], t3[1] - h3[1]];
                  this.normalize(n3);
                  const r4 = Math.abs(e2) / s3;
                  a2.push([u2[0] - n3[0] * r4, u2[1] - n3[1] * r4]);
                  break;
                }
              }
              case "Bevelled":
                a2.push([u2[0] + h3[1] * e2, u2[1] - h3[0] * e2]), a2.push([u2[0] + t3[1] * e2, u2[1] - t3[0] * e2]);
                break;
              case "Rounded": {
                a2.push([u2[0] + h3[1] * e2, u2[1] - h3[0] * e2]);
                const s3 = 5, n3 = 1 / s3;
                let r4 = n3;
                for (let l4 = 1; l4 < s3; l4++, r4 += n3) {
                  const s4 = [h3[1] * (1 - r4) + t3[1] * r4, -h3[0] * (1 - r4) - t3[0] * r4];
                  this.normalize(s4), a2.push([u2[0] + s4[0] * e2, u2[1] + s4[1] * e2]);
                }
                a2.push([u2[0] + t3[1] * e2, u2[1] - t3[0] * e2]);
                break;
              }
              case "Square":
              default:
                if (l3 < 0)
                  a2.push([u2[0] + (h3[1] + h3[0]) * e2, u2[1] + (h3[1] - h3[0]) * e2]), a2.push([u2[0] + (t3[1] - t3[0]) * e2, u2[1] - (t3[0] + t3[1]) * e2]);
                else {
                  const s3 = Math.sqrt((1 + Math.abs(c3)) / 2), n3 = [t3[0] - h3[0], t3[1] - h3[1]];
                  this.normalize(n3);
                  const r4 = e2 / s3;
                  a2.push([u2[0] - n3[0] * r4, u2[1] - n3[1] * r4]);
                }
            }
        } else {
          const t3 = [u2[0] - o2[0], u2[1] - o2[1]];
          this.normalize(t3), a2.push([u2[0] + t3[1] * e2, u2[1] - t3[0] * e2]);
        }
      else {
        const t3 = [r3[0] - u2[0], r3[1] - u2[1]];
        this.normalize(t3), a2.push([u2[0] + t3[1] * e2, u2[1] - t3[0] * e2]);
      }
      o2 = u2, u2 = r3;
    }
    return l2 && a2.push([a2[0][0], a2[0][1]]), a2;
  }
}
const s$6 = 1.7320508075688772, i$4 = 5, l$3 = "OpenEnded";
class c$3 {
  static local() {
    return c$3.instance === null && (c$3.instance = new c$3()), c$3.instance;
  }
  execute(t2, e2, r2) {
    return new u$4(t2, e2, r2);
  }
}
c$3.instance = null;
class u$4 extends y$1 {
  constructor(t2, e2, o2) {
    super(t2, false, true), this._curveHelper = new s$7(), this._width = (e2.width !== void 0 ? e2.width : i$4) * o2, this._arrowType = e2.geometricEffectArrowType !== void 0 ? e2.geometricEffectArrowType : l$3, this._offsetFlattenError = t$3 * o2;
  }
  processPath(t2) {
    switch (this._arrowType) {
      case "OpenEnded":
      default:
        return this._constructSimpleArrow(t2, true);
      case "Block":
        return this._constructSimpleArrow(t2, false);
      case "Crossed":
        return this._constructCrossedArrow(t2);
    }
  }
  _constructSimpleArrow(t2, e2) {
    const r2 = this._curveHelper.calculatePathLength(t2);
    let n2 = this._width;
    r2 < 2 * n2 && (n2 = r2 / 2);
    const s2 = this._curveHelper.getSubCurve(t2, 0, r2 - n2);
    if (!s2)
      return null;
    const i2 = n2 / 2;
    if (this._curveHelper.isEmpty(s2, false))
      return null;
    const l2 = this._constructOffset(s2, -i2);
    if (!l2)
      return null;
    const c2 = this._constructOffset(s2, i2);
    if (!c2)
      return null;
    const u2 = this._constructArrowBasePoint(l2, -i2 / 2);
    if (!u2)
      return null;
    const h2 = this._constructArrowBasePoint(c2, i2 / 2);
    if (!h2)
      return null;
    const a2 = t2[t2.length - 1];
    e2 || (this._makeControlPoint(c2, true), this._makeControlPoint(l2, true));
    const _2 = new e$3();
    return _2.addPath(c2, true), _2.lineTo(h2), this._makeControlPoint(_2.path()), _2.lineTo(a2), this._makeControlPoint(_2.path()), _2.lineTo(u2), this._makeControlPoint(_2.path()), _2.addPath(l2, false), e2 ? { paths: [_2.path()] } : (_2.close(), { rings: [_2.path()] });
  }
  _constructCrossedArrow(t2) {
    const e2 = this._curveHelper.calculatePathLength(t2);
    let r2 = this._width;
    e2 < r2 * (1 + s$6 + 1) && (r2 = e2 / (1 + s$6 + 1));
    const n2 = this._curveHelper.getSubCurve(t2, 0, e2 - r2 * (1 + s$6));
    if (!n2)
      return null;
    const i2 = r2 / 2;
    if (this._curveHelper.isEmpty(n2, false))
      return null;
    const l2 = this._constructOffset(n2, i2);
    if (!l2)
      return null;
    const c2 = this._constructOffset(n2, -i2);
    if (!c2)
      return null;
    const u2 = this._curveHelper.getSubCurve(t2, 0, e2 - r2);
    if (!u2)
      return null;
    if (this._curveHelper.isEmpty(u2, false))
      return null;
    const h2 = this._constructOffset(u2, i2);
    if (!h2)
      return null;
    const a2 = this._constructOffset(u2, -i2);
    if (!a2)
      return null;
    const _2 = h2[h2.length - 1], f2 = this._constructArrowBasePoint(h2, i2 / 2);
    if (!f2)
      return null;
    const p2 = a2[a2.length - 1], d2 = this._constructArrowBasePoint(a2, -i2 / 2);
    if (!d2)
      return null;
    const m2 = t2[t2.length - 1];
    this._makeControlPoint(l2, false), this._makeControlPoint(c2, false);
    const w = new e$3();
    return w.addPath(l2, true), this._makeControlPoint(w.path()), w.lineTo(p2), w.lineTo(d2), this._makeControlPoint(w.path()), w.lineTo(m2), this._makeControlPoint(w.path()), w.lineTo(f2), this._makeControlPoint(w.path()), w.lineTo(_2), this._makeControlPoint(w.path()), w.addPath(c2, false), { paths: [w.path()] };
  }
  _constructOffset(t2, e2) {
    return this._curveHelper.offset(t2, e2, "Rounded", 4, this._offsetFlattenError);
  }
  _constructArrowBasePoint(t2, e2) {
    if (!t2 || t2.length < 2)
      return null;
    const r2 = t2[t2.length - 2], n2 = t2[t2.length - 1], o2 = [n2[0] - r2[0], n2[1] - r2[1]];
    return this._curveHelper.normalize(o2), [n2[0] + o2[1] * e2, n2[1] - o2[0] * e2];
  }
  _makeControlPoint(t2, r2 = false) {
    d(r2 ? t2[0] : t2[t2.length - 1], 1);
  }
}
class o$3 {
  static local() {
    return o$3.instance === null && (o$3.instance = new o$3()), o$3.instance;
  }
  execute(e2, t2, i2) {
    return new f$3(e2, t2, i2);
  }
}
o$3.instance = null;
class f$3 {
  constructor(e2, t2, i2) {
    this._inputGeometries = e2, this._curveHelper = new s$7(), this._size = (t2.size !== void 0 ? t2.size : 1) * i2, this._offsetFlattenError = t$3 * i2;
  }
  next() {
    let n2 = this._inputGeometries.next();
    for (; n2; ) {
      if (u$6(n2))
        if (this._size > 0) {
          const e2 = [[n2.xmin, n2.ymin], [n2.xmin, n2.ymax], [n2.xmax, n2.ymax], [n2.xmax, n2.ymin], [n2.xmin, n2.ymin]], t2 = this._curveHelper.offset(e2, this._size, "Rounded", 4, this._offsetFlattenError);
          if (t2)
            return { rings: [t2] };
        } else {
          if (!(this._size < 0))
            return n2;
          if (Math.min(n2.xmax - n2.xmin, n2.ymax - n2.ymin) + 2 * this._size > 0)
            return { xmin: n2.xmin - this._size, xmax: n2.xmax + this._size, ymin: n2.ymin - this._size, ymax: n2.ymax + this._size };
        }
      if (y$3(n2)) {
        if (this._size === 0)
          return n2;
        const e2 = [];
        for (const t2 of n2.rings) {
          const i2 = this._curveHelper.offset(t2, this._size, "Rounded", 4, this._offsetFlattenError);
          i2 && e2.push(i2);
        }
        if (e2.length)
          return { rings: e2 };
      }
      if (f$5(n2) && this._size > 0) {
        const e2 = [];
        for (const t2 of n2.paths)
          if (t2 && t2.length > 1) {
            const i2 = this._curveHelper.offset(t2, this._size, "Rounded", 4, this._offsetFlattenError), s2 = this._curveHelper.offset(t2, -this._size, "Rounded", 4, this._offsetFlattenError);
            if (i2 && s2) {
              for (let e3 = s2.length - 1; e3 >= 0; e3--)
                i2.push(s2[e3]);
              i2.push([i2[0][0], i2[0][1]]), e2.push(i2);
            }
          }
        if (e2.length)
          return { rings: e2 };
      }
      l$5(n2) && this._size, n2 = this._inputGeometries.next();
    }
    return null;
  }
}
class u$3 {
  static local() {
    return u$3.instance === null && (u$3.instance = new u$3()), u$3.instance;
  }
  execute(e2, t2, u2) {
    return new s$5(e2, t2, u2);
  }
}
u$3.instance = null;
class s$5 extends y$1 {
  constructor(e2, u2, s2) {
    super(e2, true, true), this._curveHelper = new s$7(), this._beginCut = (u2.beginCut !== void 0 ? u2.beginCut : 1) * s2, this._endCut = (u2.endCut !== void 0 ? u2.endCut : 1) * s2, this._middleCut = (u2.middleCut !== void 0 ? u2.middleCut : 0) * s2, this._invert = u2.invert !== void 0 && u2.invert, this._beginCut < 0 && (this._beginCut = 0), this._endCut < 0 && (this._endCut = 0), this._middleCut < 0 && (this._middleCut = 0);
  }
  processPath(e2) {
    const t2 = this._beginCut, u2 = this._endCut, s2 = this._middleCut, i2 = this._curveHelper.calculatePathLength(e2), r2 = [];
    if (this._invert)
      if (t2 === 0 && u2 === 0 && s2 === 0)
        ;
      else if (t2 + u2 + s2 >= i2)
        r2.push(e2);
      else {
        let n2 = this._curveHelper.getSubCurve(e2, 0, t2);
        n2 && r2.push(n2), n2 = this._curveHelper.getSubCurve(e2, 0.5 * (i2 - s2), 0.5 * (i2 + s2)), n2 && r2.push(n2), n2 = this._curveHelper.getSubCurve(e2, i2 - u2, u2), n2 && r2.push(n2);
      }
    else if (t2 === 0 && u2 === 0 && s2 === 0)
      r2.push(e2);
    else if (t2 + u2 + s2 >= i2)
      ;
    else if (s2 === 0) {
      const s3 = this._curveHelper.getSubCurve(e2, t2, i2 - u2);
      s3 && r2.push(s3);
    } else {
      let n2 = this._curveHelper.getSubCurve(e2, t2, 0.5 * (i2 - s2));
      n2 && r2.push(n2), n2 = this._curveHelper.getSubCurve(e2, 0.5 * (i2 + s2), i2 - u2), n2 && r2.push(n2);
    }
    return r2.length === 0 ? null : { paths: r2 };
  }
}
const i$3 = 1e-7;
class n$a {
  constructor() {
    this._values = [], this.extPtGap = 0, this.ctrlPtGap = 0, this._length = 0, this._currentValue = 0;
  }
  isEmpty() {
    return this._values.length === 0;
  }
  size() {
    return this._values.length;
  }
  init(t2, s2, e2 = true) {
    if (this._setEmpty(), !t2 || t2.length === 0)
      return false;
    for (let n2 = 0; n2 < t2.length; n2++) {
      let s3 = Math.abs(t2[n2]);
      e2 && s3 < i$3 && (s3 = i$3), this._values.push(s3), this._length += s3;
    }
    return s2 && 1 & t2.length && (this._length *= 2), this._length !== 0 && (this.ctrlPtGap = this.extPtGap = 0, this._currentValue = -1, true);
  }
  scale(t2) {
    const s2 = this._values ? this._values.length : 0;
    for (let e2 = 0; e2 < s2; ++e2)
      this._values[e2] *= t2;
    this._length *= t2, this.extPtGap *= t2, this.ctrlPtGap *= t2;
  }
  addValue(t2) {
    this._length += t2, this._values.push(t2);
  }
  firstValue() {
    return this._values[0];
  }
  lastValue() {
    return this._values[this._values.length - 1];
  }
  nextValue() {
    return this._currentValue++, this._currentValue === this._values.length && (this._currentValue = 0), this._values[this._currentValue];
  }
  reset() {
    this._currentValue = -1;
  }
  length() {
    return this._length;
  }
  _setEmpty() {
    this.extPtGap = this.ctrlPtGap = this._length = 0, this._currentValue = -1, this._values.length = 0;
  }
}
class h$4 {
  constructor() {
    this.reset();
  }
  reset() {
    this.segment = -1, this.segmentLength = 0, this.abscissa = 0, this.isPathEnd = false, this.isPartEnd = false;
  }
  isValid() {
    return this.segment !== -1;
  }
  copyTo(t2) {
    t2.segment = this.segment, t2.segmentLength = this.segmentLength, t2.abscissa = this.abscissa, t2.isPathEnd = this.isPathEnd, t2.isPartEnd = this.isPartEnd;
  }
}
class r$8 extends s$7 {
  constructor(t2 = 0, s2 = false) {
    super(t2, s2), this._tolerance = t$3, this._currentPosition = new h$4();
  }
  updateTolerance(t2) {
    this._tolerance = t$3 * t2;
  }
  init(t2, s2, e2 = true) {
    return e2 ? (this._patternLength = s2.length(), this._partExtPtGap = s2.extPtGap, this._partCtrlPtGap = s2.ctrlPtGap) : (this._patternLength = 0, this._partExtPtGap = 0, this._partCtrlPtGap = 0), this._currentPosition.reset(), this._partSegCount = 0, this._path = t2, this._seg = -1, this.setPosAtNextPart();
  }
  curPositionIsValid() {
    return this._currentPosition.isValid();
  }
  nextPosition(t2, s2 = 0) {
    const e2 = new h$4();
    return !!this._nextPosition(t2, e2, null, s2) && (e2.copyTo(this._currentPosition), true);
  }
  curPointAndAngle(t2) {
    t2.pt = this._getPoint(this._currentPosition);
    const [s2, e2] = this._getAngle(this._currentPosition);
    t2.ca = s2, t2.sa = e2;
  }
  nextPointAndAngle(t2, s2, e2 = 0) {
    const i2 = new h$4();
    if (!this._nextPosition(t2, i2, null, e2))
      return false;
    i2.copyTo(this._currentPosition), s2.pt = this._getPoint(i2);
    const [n2, r2] = this._getAngle(i2);
    return s2.ca = n2, s2.sa = r2, true;
  }
  nextCurve(t2) {
    if (t2 === 0)
      return null;
    const s2 = [], e2 = new h$4();
    return this._nextPosition(t2, e2, s2, 1) ? (e2.copyTo(this._currentPosition), s2) : null;
  }
  isPathEnd() {
    return this._currentPosition.isPathEnd;
  }
  getPathEnd() {
    if (this._currentPosition.segment === -1)
      throw new Error("missing segment");
    return this._path[this._currentPosition.segment + 1];
  }
  _nextPosition(t2, s2, e2, i2) {
    if (this._currentPosition.isPathEnd)
      return false;
    let n2 = this._currentPosition.abscissa;
    for (this._currentPosition.segmentLength > 0 && (n2 /= this._currentPosition.segmentLength), this._currentPosition.copyTo(s2); s2.abscissa + t2 * this._partLengthRatio > s2.segmentLength + this._tolerance; ) {
      if (e2) {
        if (e2.length === 0)
          if (n2 === 0) {
            const t4 = this._path[s2.segment];
            e2.push([t4[0], t4[1]]);
          } else
            e2.push(this.getSegCoord2D(this._path, s2.segment, n2));
        const t3 = this._path[s2.segment + 1];
        e2.push([t3[0], t3[1]]);
      }
      if (n2 = 0, t2 -= (s2.segmentLength - s2.abscissa) / this._partLengthRatio, this._partSegCount)
        s2.segment = this.nextSegment(), s2.segmentLength = this.calculateSegLength(this._path, s2.segment), s2.abscissa = 0, this._partSegCount--;
      else {
        if (!this.setPosAtNextPart())
          return i2 !== 0 && (s2.segmentLength = this.calculateSegLength(this._path, s2.segment), s2.isPartEnd = true, i2 === 1 ? (s2.abscissa = s2.segmentLength, s2.isPathEnd = true) : s2.abscissa = s2.segmentLength + t2, true);
        this._currentPosition.copyTo(s2);
      }
    }
    if (s2.abscissa += t2 * this._partLengthRatio, e2) {
      if (e2.length === 0)
        if (n2 === 0) {
          const t4 = this._path[s2.segment];
          e2.push([t4[0], t4[1]]);
        } else
          e2.push(this.getSegCoord2D(this._path, s2.segment, n2));
      const t3 = s2.abscissa / s2.segmentLength;
      if (t3 === 1) {
        const t4 = this._path[s2.segment + 1];
        e2.push([t4[0], t4[1]]);
      } else
        e2.push(this.getSegCoord2D(this._path, s2.segment, t3));
    }
    return this._partSegCount || Math.abs(s2.abscissa - s2.segmentLength) < this._tolerance && (s2.isPathEnd = this._partIsLast, s2.isPartEnd = true), true;
  }
  _getPoint(t2) {
    if (t2.segment === -1)
      throw new Error("missing segment");
    const s2 = t2.segmentLength <= 0 ? 0 : t2.abscissa / t2.segmentLength;
    return this.getSegCoord2D(this._path, t2.segment, s2);
  }
  _getAngle(t2) {
    if (t2.segment === -1)
      throw new Error("missing segment");
    const s2 = t2.segmentLength <= 0 ? 0 : t2.abscissa / t2.segmentLength;
    return this.getSegAngleCS(this._path, t2.segment, s2);
  }
  setPosAtNextPart() {
    for (; this._partSegCount; )
      this.hasNextSegment() && this.nextSegment(), this._partSegCount--;
    if (!this.hasNextSegment())
      return false;
    for (this._partLength = 0, this._partIsLast = true, this._partSegCount = 0; this.hasNextSegment(); )
      if (this._partLength += this.calculateSegLength(this._path, this.nextSegment()), this._partSegCount++, g(this._path[this.getEndPointIndex()]) === 1) {
        this._partIsLast = !this.hasNextSegment();
        break;
      }
    let s2 = this._partSegCount;
    for (; s2; )
      this.previousSegment(), --s2;
    this._currentPosition.segment = this.nextSegment(), this._currentPosition.segmentLength = this.calculateSegLength(this._path, this._currentPosition.segment), this._currentPosition.abscissa = 0, this._currentPosition.isPathEnd = this._currentPosition.isPartEnd = false, --this._partSegCount;
    const e2 = this.getStartPointIndex();
    this._ctrlPtBegin = g(this._path[e2]) === 1;
    let i2 = e2 + this._partSegCount + 1;
    if (i2 >= this._path.length && (i2 = 0), this._ctrlPtEnd = g(this._path[i2]) === 1, this._patternLength > 0) {
      const t2 = this._ctrlPtBegin ? this._partCtrlPtGap : this._partExtPtGap, s3 = this._ctrlPtEnd ? this._partCtrlPtGap : this._partExtPtGap;
      let e3 = Math.round((this._partLength - (t2 + s3)) / this._patternLength);
      e3 <= 0 && (e3 = t2 + s3 > 0 ? 0 : 1), this._partLengthRatio = this._partLength / (t2 + s3 + e3 * this._patternLength), this._partLengthRatio < 0.01 && (this._partLengthRatio = 1);
    } else
      this._partLengthRatio = 1;
    return true;
  }
  hasNextSegment() {
    return this._seg < this._path.length - 2;
  }
  previousSegment() {
    return --this._seg;
  }
  nextSegment() {
    return ++this._seg;
  }
  getStartPointIndex() {
    return this._seg;
  }
  getEndPointIndex() {
    return this._seg + 1;
  }
}
class i$2 {
  static local() {
    return i$2.instance === null && (i$2.instance = new i$2()), i$2.instance;
  }
  execute(t2, e2, s2) {
    return new r$7(t2, e2, s2);
  }
}
i$2.instance = null;
class r$7 extends y$1 {
  constructor(t2, e2, i2) {
    super(t2, true, true), this._walker = new r$8(), this._walker.updateTolerance(i2), this._endings = e2.lineDashEnding, this._customDashPos = e2.offsetAlongLine !== void 0 ? e2.offsetAlongLine * i2 : 0, this._offsetAtEnd = e2.customEndingOffset !== void 0 ? e2.customEndingOffset * i2 : 0, this._pattern = new n$a(), this._pattern.init(e2.dashTemplate, true), this._pattern.scale(i2);
  }
  processPath(t2) {
    if (this._pattern.length() === 0)
      return this.iteratePath = false, { paths: [t2] };
    if (!this.iteratePath) {
      let e2 = true;
      switch (this._endings) {
        case "HalfPattern":
        case "HalfGap":
        default:
          this._pattern.extPtGap = 0;
          break;
        case "FullPattern":
          this.isClosed || (this._pattern.extPtGap = 0.5 * this._pattern.firstValue());
          break;
        case "FullGap":
          this.isClosed || (this._pattern.extPtGap = 0.5 * this._pattern.lastValue());
          break;
        case "NoConstraint":
          this.isClosed || (e2 = false);
          break;
        case "Custom":
          this.isClosed || (this._pattern.extPtGap = 0.5 * this._offsetAtEnd);
      }
      const s3 = this._walker.calculatePathLength(t2);
      if (this._pattern.isEmpty() || s3 < 0.1 * this._pattern.length())
        return { paths: [t2] };
      if (!this._walker.init(t2, this._pattern, e2))
        return { paths: [t2] };
    }
    let s2;
    if (this.iteratePath)
      s2 = this._pattern.nextValue();
    else {
      let t3;
      switch (this._endings) {
        case "HalfPattern":
        default:
          t3 = 0.5 * this._pattern.firstValue();
          break;
        case "HalfGap":
          t3 = 0.5 * -this._pattern.lastValue();
          break;
        case "FullGap":
          t3 = -this._pattern.lastValue();
          break;
        case "FullPattern":
          t3 = 0;
          break;
        case "NoConstraint":
        case "Custom":
          t3 = -this._customDashPos;
      }
      let e2 = t3 / this._pattern.length();
      e2 -= Math.floor(e2), t3 = e2 * this._pattern.length(), this._pattern.reset(), s2 = this._pattern.nextValue();
      let a3 = false;
      for (; t3 >= s2; )
        t3 -= s2, s2 = this._pattern.nextValue(), a3 = !a3;
      s2 -= t3, a3 ? (this._walker.nextPosition(s2), s2 = this._pattern.nextValue()) : this.isClosed && (this._firstCurve = this._walker.nextCurve(s2), s2 = this._pattern.nextValue(), this._walker.nextPosition(s2), s2 = this._pattern.nextValue());
    }
    let a2 = this._walker.nextCurve(s2);
    return a2 ? this._walker.isPathEnd() ? (this.iteratePath = false, this._firstCurve && (this._firstCurve.splice(0, 1), e$3.mergePath(a2, this._firstCurve), this._firstCurve = null)) : (s2 = this._pattern.nextValue(), !this._walker.nextPosition(s2) || this._walker.isPathEnd() ? (this.iteratePath = false, this._firstCurve && (a2 = this._firstCurve, this._firstCurve = null)) : this.iteratePath = true) : (this.iteratePath = false, a2 = this._firstCurve, this._firstCurve = null), { paths: [a2] };
  }
}
class h$3 {
  static local() {
    return h$3.instance === null && (h$3.instance = new h$3()), h$3.instance;
  }
  execute(t2, i2, e2) {
    return new n$9(t2, i2, e2);
  }
}
h$3.instance = null;
class n$9 {
  constructor(t2, i2, h2) {
    switch (this._inputGeometries = t2, this._curveHelper = new s$7(), this._width = (i2.width !== void 0 ? i2.width : 2) * h2, i2.method) {
      case "Mitered":
      default:
        this._method = "Mitered";
        break;
      case "Bevelled":
        this._method = "Bevelled";
        break;
      case "Rounded":
      case "TrueBuffer":
        this._method = "Rounded";
        break;
      case "Square":
        this._method = "Square";
    }
    this._option = i2.option, this._offsetFlattenError = t$3 * h2;
  }
  next() {
    let e2 = this._inputGeometries.next();
    for (; e2; ) {
      if (u$6(e2) && this._width > 0) {
        if (Math.min(e2.xmax - e2.xmin, e2.ymax - e2.ymin) - 2 * this._width < 0)
          return e2;
        const t2 = [];
        return t2.push([[e2.xmin, e2.ymin], [e2.xmin, e2.ymax], [e2.xmax, e2.ymax], [e2.xmax, e2.ymin], [e2.xmin, e2.ymin]]), t2.push([[e2.xmin + this._width, e2.ymin + this._width], [e2.xmax - this._width, e2.ymin + this._width], [e2.xmax - this._width, e2.ymax - this._width], [e2.xmin + this._width, e2.ymax - this._width], [e2.xmin + this._width, e2.ymin + this._width]]), { rings: t2 };
      }
      if (y$3(e2) && this._width > 0) {
        const t2 = [];
        for (const i2 of e2.rings) {
          const e3 = this._curveHelper.calculatePathLength(i2), s2 = this._curveHelper.offset(i2, this._width, this._method, 4, this._offsetFlattenError);
          s2 && (e3 < 0 && s2.reverse(), t2.push(s2));
        }
        if (t2.length)
          return { rings: t2 };
      }
      e2 = this._inputGeometries.next();
    }
    return null;
  }
}
class s$4 {
  static local() {
    return s$4.instance === null && (s$4.instance = new s$4()), s$4.instance;
  }
  execute(t2, i2, s2) {
    return new e$2(t2, i2, s2);
  }
}
s$4.instance = null;
class e$2 extends y$1 {
  constructor(t2, s2, e2) {
    super(t2, false, true), this._curveHelper = new s$7(), this._length = (s2.length !== void 0 ? s2.length : 20) * e2, this._angle = s2.angle !== void 0 ? s2.angle : 225, this._position = s2.position !== void 0 ? s2.position : 50, this._length < 0 && (this._length = -this._length), this._position < 20 && (this._position = 20), this._position > 80 && (this._position = 80), this._mirror = false;
  }
  processPath(t2) {
    if (this._curveHelper.isEmpty(t2, false))
      return null;
    const i2 = t2[0], s2 = t2[t2.length - 1], e2 = [s2[0] - i2[0], s2[1] - i2[1]];
    this._curveHelper.normalize(e2);
    const n2 = [i2[0] + (s2[0] - i2[0]) * this._position / 100, i2[1] + (s2[1] - i2[1]) * this._position / 100], h2 = Math.cos((90 - this._angle) / 180 * Math.PI);
    let r2 = Math.sin((90 - this._angle) / 180 * Math.PI);
    this._mirror && (r2 = -r2), this._mirror = !this._mirror;
    return { paths: [[i2, [n2[0] - this._length / 2 * h2, n2[1] - this._length / 2 * r2], [n2[0] + this._length / 2 * h2, n2[1] + this._length / 2 * r2], s2]] };
  }
}
class n$8 {
  static local() {
    return n$8.instance === null && (n$8.instance = new n$8()), n$8.instance;
  }
  execute(t2, s2, e2) {
    return new r$6(t2, s2, e2);
  }
}
n$8.instance = null;
class r$6 {
  constructor(t2, s2, e2) {
    this._inputGeometries = t2, this._offsetX = s2.offsetX !== void 0 ? s2.offsetX * e2 : 0, this._offsetY = s2.offsetY !== void 0 ? -s2.offsetY * e2 : 0;
  }
  next() {
    let n2 = this._inputGeometries.next();
    for (; n2; ) {
      if (u$6(n2))
        return { xmin: n2.xmin + this._offsetX, xmax: n2.xmax + this._offsetX, ymin: n2.ymin + this._offsetY, ymax: n2.ymax + this._offsetY };
      if (y$3(n2)) {
        const s2 = y$2(n2);
        return this._moveMultipath(s2.rings, this._offsetX, this._offsetY), s2;
      }
      if (f$5(n2)) {
        const s2 = y$2(n2);
        return this._moveMultipath(s2.paths, this._offsetX, this._offsetY), s2;
      }
      if (s$8(n2)) {
        const s2 = y$2(n2);
        return this._movePath(s2.points, this._offsetX, this._offsetY), s2;
      }
      if (l$5(n2))
        return { x: n2.x + this._offsetX, y: n2.y + this._offsetY };
      n2 = this._inputGeometries.next();
    }
    return null;
  }
  _moveMultipath(t2, s2, e2) {
    if (t2)
      for (const i2 of t2)
        this._movePath(i2, s2, e2);
  }
  _movePath(t2, s2, e2) {
    if (t2)
      for (const i2 of t2)
        i2[0] += s2, i2[1] += e2;
  }
}
class o$2 {
  static local() {
    return o$2.instance === null && (o$2.instance = new o$2()), o$2.instance;
  }
  execute(t2, e2, s2) {
    return new r$5(t2, e2, s2);
  }
}
o$2.instance = null;
class r$5 {
  constructor(t2, e2, s2) {
    this._inputGeometries = t2, this._curveHelper = new s$7(), this._offset = (e2.offset !== void 0 ? e2.offset : 1) * s2, this._method = e2.method, this._option = e2.option, this._offsetFlattenError = t$3 * s2;
  }
  next() {
    let i2 = this._inputGeometries.next();
    for (; i2; ) {
      if (this._offset === 0)
        return i2;
      if (u$6(i2)) {
        if (this._method === "Rounded" && this._offset > 0) {
          const t2 = [[i2.xmin, i2.ymin], [i2.xmin, i2.ymax], [i2.xmax, i2.ymax], [i2.xmax, i2.ymin], [i2.xmin, i2.ymin]], e2 = this._curveHelper.offset(t2, this._offset, this._method, 4, this._offsetFlattenError);
          return e2 ? { rings: [e2] } : null;
        }
        if (Math.min(i2.xmax - i2.xmin, i2.ymax - i2.ymin) + 2 * this._offset > 0)
          return { xmin: i2.xmin - this._offset, xmax: i2.xmax + this._offset, ymin: i2.ymin - this._offset, ymax: i2.ymax + this._offset };
      }
      if (y$3(i2)) {
        const t2 = [];
        for (const e2 of i2.rings) {
          const s2 = this._curveHelper.offset(e2, this._offset, this._method, 4, this._offsetFlattenError);
          s2 && t2.push(s2);
        }
        if (t2.length)
          return { rings: t2 };
      }
      if (f$5(i2)) {
        const t2 = [];
        for (const e2 of i2.paths) {
          const s2 = this._curveHelper.offset(e2, this._offset, this._method, 4, this._offsetFlattenError);
          s2 && t2.push(s2);
        }
        if (t2.length)
          return { paths: t2 };
      }
      i2 = this._inputGeometries.next();
    }
    return null;
  }
}
class s$3 {
  static local() {
    return s$3.instance === null && (s$3.instance = new s$3()), s$3.instance;
  }
  execute(e2, t2, r2) {
    return new n$7(e2, t2, r2);
  }
}
s$3.instance = null;
class n$7 {
  constructor(e2, t2, r2) {
    this._inputGeometries = e2, this._reverse = t2.reverse === void 0 || t2.reverse;
  }
  next() {
    let s2 = this._inputGeometries.next();
    for (; s2; ) {
      if (!this._reverse)
        return s2;
      if (f$5(s2)) {
        const t2 = y$2(s2);
        return m$2(t2.paths), t2;
      }
      s2 = this._inputGeometries.next();
    }
    return null;
  }
}
class u$2 {
  static local() {
    return u$2.instance === null && (u$2.instance = new u$2()), u$2.instance;
  }
  execute(t2, n2, e2) {
    return new c$2(t2, n2, e2);
  }
}
u$2.instance = null;
class c$2 {
  constructor(t2, n2, e2) {
    this._inputGeometries = t2, this._rotateAngle = n2.angle !== void 0 ? -n2.angle * Math.PI / 180 : 0;
  }
  next() {
    let u2 = this._inputGeometries.next();
    for (; u2; ) {
      if (this._rotateAngle === 0)
        return u2;
      const c2 = i$5();
      c$5(c2, u2);
      const l2 = (c2[2] + c2[0]) / 2, m2 = (c2[3] + c2[1]) / 2;
      if (u$6(u2)) {
        const t2 = { rings: [[[u2.xmin, u2.ymin], [u2.xmin, u2.ymax], [u2.xmax, u2.ymax], [u2.xmax, u2.ymin], [u2.xmin, u2.ymin]]] };
        return this._rotateMultipath(t2.rings, l2, m2), t2;
      }
      if (y$3(u2)) {
        const n2 = y$2(u2);
        return this._rotateMultipath(n2.rings, l2, m2), n2;
      }
      if (f$5(u2)) {
        const n2 = y$2(u2);
        return this._rotateMultipath(n2.paths, l2, m2), n2;
      }
      if (s$8(u2)) {
        const n2 = y$2(u2);
        return this._rotatePath(n2.points, l2, m2), n2;
      }
      if (l$5(u2))
        return u2;
      u2 = this._inputGeometries.next();
    }
    return null;
  }
  _rotateMultipath(t2, n2, e2) {
    if (t2)
      for (const r2 of t2)
        this._rotatePath(r2, n2, e2);
  }
  _rotatePath(t2, n2, e2) {
    if (t2) {
      const r2 = Math.cos(this._rotateAngle), i2 = Math.sin(this._rotateAngle);
      for (const o2 of t2) {
        const t3 = o2[0] - n2, s2 = o2[1] - e2;
        o2[0] = n2 + t3 * r2 - s2 * i2, o2[1] = e2 + t3 * i2 + s2 * r2;
      }
    }
  }
}
class c$1 {
  static local() {
    return c$1.instance === null && (c$1.instance = new c$1()), c$1.instance;
  }
  execute(t2, s2, i2) {
    return new l$2(t2, s2, i2);
  }
}
c$1.instance = null;
class l$2 {
  constructor(t2, s2, i2) {
    this._inputGeometries = t2, this._xFactor = s2.xScaleFactor !== void 0 ? s2.xScaleFactor : 1.15, this._yFactor = s2.yScaleFactor !== void 0 ? s2.yScaleFactor : 1.15;
  }
  next() {
    let c2 = this._inputGeometries.next();
    for (; c2; ) {
      if (this._xFactor === 1 && this._yFactor === 1)
        return c2;
      const l2 = i$5();
      c$5(l2, c2);
      const u2 = (l2[2] + l2[0]) / 2, m2 = (l2[3] + l2[1]) / 2;
      if (u$6(c2)) {
        const t2 = { rings: [[[c2.xmin, c2.ymin], [c2.xmin, c2.ymax], [c2.xmax, c2.ymax], [c2.xmax, c2.ymin], [c2.xmin, c2.ymin]]] };
        return this._scaleMultipath(t2.rings, u2, m2), t2;
      }
      if (y$3(c2)) {
        const s2 = y$2(c2);
        return this._scaleMultipath(s2.rings, u2, m2), s2;
      }
      if (f$5(c2)) {
        const s2 = y$2(c2);
        return this._scaleMultipath(s2.paths, u2, m2), s2;
      }
      if (s$8(c2)) {
        const s2 = y$2(c2);
        return this._scalePath(s2.points, u2, m2), s2;
      }
      if (l$5(c2))
        return c2;
      c2 = this._inputGeometries.next();
    }
    return null;
  }
  _scaleMultipath(t2, s2, i2) {
    if (t2)
      for (const r2 of t2)
        this._scalePath(r2, s2, i2);
  }
  _scalePath(t2, s2, i2) {
    if (t2)
      for (const r2 of t2) {
        const t3 = (r2[0] - s2) * this._xFactor, n2 = (r2[1] - i2) * this._yFactor;
        r2[0] = s2 + t3, r2[1] = i2 + n2;
      }
  }
}
class n$6 {
  static local() {
    return n$6.instance === null && (n$6.instance = new n$6()), n$6.instance;
  }
  execute(t2, e2, i2) {
    return new r$4(t2, e2, i2);
  }
}
n$6.instance = null;
class r$4 {
  constructor(t2, e2, i2) {
    this._inputGeometries = t2, this._height = (e2.amplitude !== void 0 ? e2.amplitude : 2) * i2, this._period = (e2.period !== void 0 ? e2.period : 3) * i2, this._style = e2.waveform, this._height <= 0 && (this._height = Math.abs(this._height)), this._period <= 0 && (this._period = Math.abs(this._period)), this._pattern = new n$a(), this._pattern.addValue(this._period), this._pattern.addValue(this._period), this._walker = new r$8(), this._walker.updateTolerance(i2);
  }
  next() {
    let i2 = this._inputGeometries.next();
    for (; i2; ) {
      if (this._height === 0 || this._period === 0)
        return i2;
      if (f$5(i2)) {
        const t2 = this._processGeom(i2.paths);
        if (t2.length)
          return { paths: t2 };
      }
      if (y$3(i2)) {
        const t2 = this._processGeom(i2.rings);
        if (t2.length)
          return { rings: t2 };
      }
      i2 = this._inputGeometries.next();
    }
    return null;
  }
  _processGeom(t2) {
    const e2 = [];
    for (const i2 of t2)
      if (this._walker.init(i2, this._pattern))
        switch (this._style) {
          case "Sinus":
          default:
            e2.push(this._constructCurve(i2, false));
            break;
          case "Square":
            e2.push(this._constructSquare(i2));
            break;
          case "Triangle":
            e2.push(this._constructTriangle(i2));
            break;
          case "Random":
            e2.push(this._constructCurve(i2, true));
        }
      else
        e2.push(i2);
    return e2;
  }
  _constructCurve(t2, e2) {
    const s2 = new e$3(), h2 = this._walker.calculatePathLength(t2);
    let n2 = Math.round(h2 / this._period);
    n2 === 0 && (n2 = 1);
    const r2 = n2 * 16 + 1, a2 = h2 / n2, o2 = this._period / 16, l2 = 1 / r2, _2 = 2 * Math.PI * h2 / a2, c2 = 2 * Math.PI * Math.random(), p2 = 2 * Math.PI * Math.random(), u2 = 2 * Math.PI * Math.random(), d2 = 0.75 - Math.random() / 2, g2 = 0.75 - Math.random() / 2, w = {};
    this._walker.curPointAndAngle(w), s2.startPath(w.pt);
    let k = 0;
    for (; ; ) {
      if (!this._walker.nextPointAndAngle(o2, w)) {
        s2.lineTo(t2[t2.length - 1]);
        break;
      }
      {
        const t3 = k;
        let i2;
        if (k += l2, e2) {
          const e3 = this._height / 2 * (1 + 0.3 * Math.sin(d2 * _2 * t3 + c2));
          i2 = e3 * Math.sin(_2 * t3 + p2), i2 += e3 * Math.sin(g2 * _2 * t3 + u2), i2 /= 2;
        } else
          i2 = 0.5 * this._height * Math.sin(0.5 * _2 * t3);
        s2.lineTo([w.pt[0] - i2 * w.sa, w.pt[1] + i2 * w.ca]);
      }
    }
    return s2.path();
  }
  _constructSquare(t2) {
    const e2 = new e$3(), s2 = this._walker.calculatePathLength(t2);
    Math.round(s2 / this._period);
    let n2 = true;
    for (; ; ) {
      let t3 = false;
      if (this._walker.curPositionIsValid()) {
        const i2 = {};
        this._walker.curPointAndAngle(i2);
        const s3 = {};
        if (this._walker.nextPointAndAngle(this._period, s3)) {
          const h2 = {};
          this._walker.nextPointAndAngle(this._period, h2) && (n2 ? (e2.startPath(i2.pt), n2 = false) : e2.lineTo(i2.pt), e2.lineTo([i2.pt[0] - this._height / 2 * i2.sa, i2.pt[1] + this._height / 2 * i2.ca]), e2.lineTo([s3.pt[0] - this._height / 2 * s3.sa, s3.pt[1] + this._height / 2 * s3.ca]), e2.lineTo([s3.pt[0] + this._height / 2 * s3.sa, s3.pt[1] - this._height / 2 * s3.ca]), e2.lineTo([h2.pt[0] + this._height / 2 * h2.sa, h2.pt[1] - this._height / 2 * h2.ca]), t3 = true);
        }
      }
      if (!t3) {
        e2.lineTo(this._walker.getPathEnd());
        break;
      }
    }
    return e2.path();
  }
  _constructTriangle(t2) {
    const e2 = new e$3(), s2 = this._walker.calculatePathLength(t2);
    Math.round(s2 / this._period);
    let n2 = true;
    for (; ; ) {
      let t3 = false;
      if (this._walker.curPositionIsValid()) {
        const i2 = {};
        this._walker.curPointAndAngle(i2);
        const s3 = {};
        if (this._walker.nextPointAndAngle(this._period / 2, s3)) {
          const h2 = {};
          this._walker.nextPointAndAngle(this._period, h2) && (this._walker.nextPosition(this._period / 2) && (n2 ? (e2.startPath(i2.pt), n2 = false) : e2.lineTo(i2.pt), e2.lineTo([s3.pt[0] - this._height / 2 * s3.sa, s3.pt[1] + this._height / 2 * s3.ca]), e2.lineTo([h2.pt[0] + this._height / 2 * h2.sa, h2.pt[1] - this._height / 2 * h2.ca])), t3 = true);
        }
      }
      if (!t3) {
        e2.lineTo(this._walker.getPathEnd());
        break;
      }
    }
    return e2.path();
  }
}
var t$2;
!function(t2) {
  t2.NoConstraint = "NoConstraint", t2.WithMarkers = "WithMarkers", t2.WithFullGap = "WithFullGap", t2.WithHalfGap = "WithHalfGap", t2.Custom = "Custom";
}(t$2 || (t$2 = {}));
class n$5 {
  static local() {
    return n$5.instance === null && (n$5.instance = new n$5()), n$5.instance;
  }
  execute(t2, e2, s2) {
    return new a$1(t2, e2, s2);
  }
}
n$5.instance = null;
class a$1 extends C {
  constructor(t2, i2, n2) {
    super(t2, true, true), this._grometryWalker = new r$8(), this._grometryWalker.updateTolerance(n2), this._angleToLine = i2.angleToLine === void 0 || i2.angleToLine, this._offset = i2.offset !== void 0 ? i2.offset * n2 : 0, this._originalEndings = i2.endings, this._offsetAtEnd = i2.customEndingOffset !== void 0 ? i2.customEndingOffset * n2 : 0, this._position = i2.offsetAlongLine !== void 0 ? i2.offsetAlongLine * n2 : 0, this._pattern = new n$a(), this._pattern.init(i2.placementTemplate, false), this._pattern.scale(n2), this._endings = this._originalEndings;
  }
  processPath(t2) {
    if (this._pattern.isEmpty())
      return null;
    let e2;
    if (this.iteratePath)
      e2 = this._pattern.nextValue();
    else {
      this._originalEndings === t$2.WithFullGap && this.isClosed ? this._endings = t$2.WithMarkers : this._endings = this._originalEndings, this._pattern.extPtGap = 0;
      let s3, n2 = true;
      switch (this._endings) {
        case t$2.NoConstraint:
          s3 = -this._position, s3 = this._adjustPosition(s3), n2 = false;
          break;
        case t$2.WithHalfGap:
        default:
          s3 = -this._pattern.lastValue() / 2;
          break;
        case t$2.WithFullGap:
          s3 = -this._pattern.lastValue(), this._pattern.extPtGap = this._pattern.lastValue();
          break;
        case t$2.WithMarkers:
          s3 = 0;
          break;
        case t$2.Custom:
          s3 = -this._position, s3 = this._adjustPosition(s3), this._pattern.extPtGap = 0.5 * this._offsetAtEnd;
      }
      if (!this._grometryWalker.init(t2, this._pattern, n2))
        return null;
      this._pattern.reset();
      let a2 = 0;
      for (; s3 > a2; )
        s3 -= a2, a2 = this._pattern.nextValue();
      a2 -= s3, e2 = a2, this.iteratePath = true;
    }
    const s2 = {};
    return this._grometryWalker.nextPointAndAngle(e2, s2) ? this._endings === t$2.WithFullGap && this._grometryWalker.isPathEnd() ? (this.iteratePath = false, null) : this._endings === t$2.WithMarkers && this._grometryWalker.isPathEnd() && (this.iteratePath = false, this.isClosed) ? null : (this.internalPlacement.setTranslate(s2.pt[0] + this._offset * s2.sa, s2.pt[1] - this._offset * s2.ca), this._angleToLine && this.internalPlacement.setRotateCS(s2.ca, s2.sa), this.internalPlacement) : (this.iteratePath = false, null);
  }
  _adjustPosition(t2) {
    let e2 = t2 / this._pattern.length();
    return e2 -= Math.floor(e2), e2 * this._pattern.length();
  }
}
class i$1 {
  static local() {
    return i$1.instance === null && (i$1.instance = new i$1()), i$1.instance;
  }
  execute(e2, t2, s2) {
    return new n$4(e2, t2, s2);
  }
}
i$1.instance = null;
class n$4 extends C {
  constructor(e2, t2, i2) {
    super(e2, false, true), this._curveHelper = new s$7(), this._angleToLine = t2.angleToLine === void 0 || t2.angleToLine, this._offset = t2.offset !== void 0 ? t2.offset * i2 : 0, this._type = t2.extremityPlacement, this._position = t2.offsetAlongLine !== void 0 ? t2.offsetAlongLine * i2 : 0, this._beginProcessed = false;
  }
  processPath(e2) {
    let t2;
    switch (this._type) {
      case "Both":
      default:
        this._beginProcessed ? (t2 = this._atExtremities(e2, this._position, false), this._beginProcessed = false, this.iteratePath = false) : (t2 = this._atExtremities(e2, this._position, true), this._beginProcessed = true, this.iteratePath = true);
        break;
      case "JustBegin":
        t2 = this._atExtremities(e2, this._position, true);
        break;
      case "JustEnd":
        t2 = this._atExtremities(e2, this._position, false);
        break;
      case "None":
    }
    return t2;
  }
  _atExtremities(e2, s2, i2) {
    const n2 = e2.length;
    if (n2 < 2)
      return null;
    const r2 = i2 ? 1 : n2 - 2, o2 = i2 ? n2 : -1, a2 = i2 ? 1 : -1;
    let l2, h2 = 0, c2 = i2 ? e2[0] : e2[n2 - 1];
    for (let _2 = r2; _2 !== o2; _2 += a2) {
      l2 = c2, c2 = e2[_2];
      const i3 = this._curveHelper.calculateLength(l2, c2);
      if (h2 + i3 > s2) {
        const e3 = (s2 - h2) / i3, [n3, r3] = this._curveHelper.getAngleCS(l2, c2, e3), o3 = P(l2, c2, e3);
        return this.internalPlacement.setTranslate(o3[0] - this._offset * r3, o3[1] + this._offset * n3), this._angleToLine && this.internalPlacement.setRotateCS(-n3, -r3), this.internalPlacement;
      }
      h2 += i3;
    }
    return null;
  }
}
class e$1 {
  static local() {
    return e$1.instance === null && (e$1.instance = new e$1()), e$1.instance;
  }
  execute(t2, i2, s2) {
    return new n$3(t2, i2, s2);
  }
}
e$1.instance = null;
class n$3 extends C {
  constructor(t2, e2, n2) {
    super(t2, true, true), this._walker = new r$8(), this._walker.updateTolerance(n2), this._angleToLine = e2.angleToLine === void 0 || e2.angleToLine, this._offset = e2.offset !== void 0 ? e2.offset * n2 : 0, this._beginGap = e2.beginPosition !== void 0 ? e2.beginPosition * n2 : 0, this._endGap = e2.endPosition !== void 0 ? e2.endPosition * n2 : 0, this._flipFirst = e2.flipFirst === void 0 || e2.flipFirst, this._pattern = new n$a(), this._pattern.init(e2.positionArray, false, false), this._subPathLen = 0, this._posCount = this._pattern.size(), this._isFirst = true, this._prevPos = 0;
  }
  processPath(t2) {
    if (this._pattern.isEmpty())
      return null;
    let i2;
    if (this.iteratePath) {
      const t3 = this._pattern.nextValue() * this._subPathLen, s3 = this._beginGap + t3;
      i2 = s3 - this._prevPos, this._prevPos = s3;
    } else {
      if (this._posCount = this._pattern.size(), this._isFirst = true, this._prevPos = 0, this._subPathLen = this._walker.calculatePathLength(t2) - this._beginGap - this._endGap, this._subPathLen < 0)
        return this.iteratePath = false, null;
      if (!this._walker.init(t2, this._pattern, false))
        return null;
      this._pattern.reset();
      const s3 = this._pattern.nextValue() * this._subPathLen, e3 = this._beginGap + s3;
      i2 = e3 - this._prevPos, this._prevPos = e3, this.iteratePath = true;
    }
    const s2 = {};
    if (!this._walker.nextPointAndAngle(i2, s2, 1))
      return this.iteratePath = false, null;
    this.internalPlacement.setTranslate(s2.pt[0] + this._offset * s2.sa, s2.pt[1] - this._offset * s2.ca);
    const e2 = this._isFirst && this._flipFirst;
    let n2, a2;
    return this._angleToLine ? (n2 = s2.ca, a2 = s2.sa) : (n2 = 1, a2 = 0), e2 && (n2 = -n2, a2 = -a2), this.internalPlacement.setRotateCS(n2, a2), this._isFirst = false, this._posCount--, this._posCount === 0 && (this.iteratePath = false), this.internalPlacement;
  }
}
function s$2(t2) {
  return t2.rings !== void 0;
}
class i {
  static local() {
    return i.instance === null && (i.instance = new i()), i.instance;
  }
  execute(t2, s2, i2) {
    return new h$2(t2, s2, i2);
  }
}
i.instance = null;
class h$2 {
  constructor(i2, h2, e2) {
    if (this._xMin = 0, this._xMax = 0, this._yMin = 0, this._yMax = 0, this._currentX = 0, this._currentY = 0, this._stepX = (h2.stepX !== void 0 ? Math.abs(h2.stepX) : 16) * e2, this._stepY = (h2.stepY !== void 0 ? Math.abs(h2.stepY) : 16) * e2, this._stepX !== 0 && this._stepY !== 0 && i2 && s$2(i2) && i2.rings) {
      if (this._gridType = h2.gridType !== void 0 ? h2.gridType : "Fixed", this._gridType === "Random")
        this._randomness = h2.randomness !== void 0 ? h2.randomness / 100 : 1, this._gridAngle = 0, this._shiftOddRows = false, this._cosAngle = 1, this._sinAngle = 0, this._offsetX = 0, this._offsetY = 0;
      else {
        if (this._randomness = 0, this._gridAngle = h2.gridAngle !== void 0 ? h2.gridAngle : 0, this._shiftOddRows = h2.shiftOddRows !== void 0 && h2.shiftOddRows, this._offsetX = h2.offsetX !== void 0 ? h2.offsetX * e2 : 0, this._offsetY = h2.offsetY !== void 0 ? h2.offsetY * e2 : 0, this._cosAngle = Math.cos(this._gridAngle / 180 * Math.PI), this._sinAngle = -Math.sin(this._gridAngle / 180 * Math.PI), this._stepX)
          if (this._offsetX < 0)
            for (; this._offsetX < -0.5 * this._stepX; )
              this._offsetX += this._stepX;
          else
            for (; this._offsetX >= 0.5 * this._stepX; )
              this._offsetX -= this._stepX;
        if (this._stepY)
          if (this._offsetY < 0)
            for (; this._offsetY < -0.5 * this._stepY; )
              this._offsetY += this._stepY;
          else
            for (; this._offsetY >= 0.5 * this._stepY; )
              this._offsetY -= this._stepY;
      }
      this._graphicOriginX = 0, this._graphicOriginY = 0, this._internalPlacement = new t$4(), this._calculateMinMax(i2), this._geometry = i2;
    }
  }
  next() {
    return this._geometry ? this._nextInside() : null;
  }
  _calculateMinMax(t2) {
    let s2, i2, h2, e2, n2, _2, r2, o2;
    this._xMin = 0, this._xMax = 0, this._yMin = 0, this._yMax = 0, n2 = _2 = Number.MAX_VALUE, r2 = o2 = -Number.MAX_VALUE;
    for (const a2 of t2.rings) {
      const t3 = a2 ? a2.length : 0;
      for (let f2 = 0; f2 < t3; ++f2)
        s2 = a2[f2][0] - this._graphicOriginX - this._offsetX, i2 = a2[f2][1] - this._graphicOriginY - this._offsetY, h2 = this._cosAngle * s2 - this._sinAngle * i2, e2 = this._sinAngle * s2 + this._cosAngle * i2, n2 = Math.min(n2, h2), r2 = Math.max(r2, h2), _2 = Math.min(_2, e2), o2 = Math.max(o2, e2);
    }
    n2 += this._graphicOriginX, r2 += this._graphicOriginX, _2 += this._graphicOriginY, o2 += this._graphicOriginY, this._xMin = Math.round(n2 / this._stepX), this._xMax = Math.round(r2 / this._stepX), this._yMin = Math.round(_2 / this._stepY), this._yMax = Math.round(o2 / this._stepY), this._currentX = this._xMax + 1, this._currentY = this._yMin - 1;
  }
  _nextInside() {
    for (; ; ) {
      if (this._currentX > this._xMax) {
        if (this._currentY++, this._currentY > this._yMax)
          return null;
        this._currentX = this._xMin, this._shiftOddRows && this._currentY % 2 && this._currentX--;
      }
      let t2 = this._currentX * this._stepX + this._offsetX;
      this._shiftOddRows && this._currentY % 2 && (t2 += 0.5 * this._stepX);
      const s2 = this._currentY * this._stepY + this._offsetY;
      let i2, h2;
      return this._currentX++, this._gridType === "Random" ? (i2 = this._graphicOriginX + t2 + this._stepX * this._randomness * (0.5 - Math.random()) * 2 / 3, h2 = this._graphicOriginY + s2 + this._stepY * this._randomness * (0.5 - Math.random()) * 2 / 3) : (i2 = this._graphicOriginX + this._cosAngle * t2 + this._sinAngle * s2, h2 = this._graphicOriginY - this._sinAngle * t2 + this._cosAngle * s2), this._internalPlacement.setTranslate(i2, h2), this._internalPlacement;
    }
  }
}
const s$1 = 1e-3;
class r$3 {
  static local() {
    return r$3.instance === null && (r$3.instance = new r$3()), r$3.instance;
  }
  execute(e2, t2, n2) {
    return new l$1(e2, t2, n2);
  }
}
r$3.instance = null;
class l$1 extends C {
  constructor(e2, t2, n2) {
    super(e2, true, true), this._curveHelper = new s$7(), this._angleToLine = t2.angleToLine === void 0 || t2.angleToLine, this._offset = t2.offset !== void 0 ? t2.offset * n2 : 0, this._relativeTo = t2.relativeTo, this._position = t2.startPointOffset !== void 0 ? t2.startPointOffset * n2 : 0, this._epsilon = s$1 * n2;
  }
  processPath(e2) {
    const i2 = this._position;
    if (this._relativeTo === "SegmentMidpoint") {
      for (this.iteratePath || (this._segmentCount = e2.length, this._curSegment = 1, this.iteratePath = true); this._curSegment < this._segmentCount; ) {
        const n2 = this._curSegment;
        this._curSegment++;
        const i3 = e2[n2 - 1], s3 = e2[n2], r2 = this._curveHelper.calculateLength(i3, s3);
        if (r2 < this._epsilon)
          continue;
        const l2 = 0.5 + this._position / r2, [a2, o2] = this._curveHelper.getAngleCS(i3, s3, l2), h2 = P(i3, s3, l2);
        return this.internalPlacement.setTranslate(h2[0] - this._offset * o2, h2[1] + this._offset * a2), this._angleToLine && this.internalPlacement.setRotateCS(a2, o2), this.internalPlacement;
      }
      return this.iteratePath = false, null;
    }
    this._relativeTo === "LineEnd" && f$4(e2);
    const s2 = this.onLine(e2, i2);
    return this._relativeTo === "LineEnd" && f$4(e2), s2;
  }
  onLine(e2, n2) {
    let i2, s2 = false;
    switch (this._relativeTo) {
      case "LineMiddle":
      default:
        i2 = this._curveHelper.calculatePathLength(e2) / 2 + n2;
        break;
      case "LineBeginning":
        i2 = n2;
        break;
      case "LineEnd":
        i2 = n2, s2 = true;
    }
    const r2 = e2.length;
    let l2, a2 = 0, o2 = e2[0];
    for (let h2 = 1; h2 < r2; ++h2) {
      l2 = o2, o2 = e2[h2];
      const n3 = this._curveHelper.calculateLength(l2, o2);
      if (a2 + n3 > i2) {
        const e3 = (i2 - a2) / n3, [r3, h3] = this._curveHelper.getAngleCS(l2, o2, e3), c2 = P(l2, o2, e3), u2 = s2 ? this._offset : -this._offset;
        return this.internalPlacement.setTranslate(c2[0] - u2 * h3, c2[1] + u2 * r3), this._angleToLine && (s2 ? this.internalPlacement.setRotateCS(-r3, -h3) : this.internalPlacement.setRotateCS(r3, h3)), this.internalPlacement;
      }
      a2 += n3;
    }
    return null;
  }
}
class n$2 {
  static local() {
    return n$2.instance === null && (n$2.instance = new n$2()), n$2.instance;
  }
  execute(t2, e2, s2) {
    return new r$2(t2, e2, s2);
  }
}
n$2.instance = null;
const a = 1e-15;
class r$2 extends C {
  constructor(t2, e2, s2) {
    super(t2, true, true), this._curveHelper = new s$7(), this._angleToLine = e2.angleToLine === void 0 || e2.angleToLine, this._offset = e2.offset !== void 0 ? e2.offset * s2 : 0, this._endPoints = e2.placeOnEndPoints === void 0 || e2.placeOnEndPoints, this._controlPoints = e2.placeOnControlPoints === void 0 || e2.placeOnControlPoints, this._regularVertices = e2.placeOnRegularVertices === void 0 || e2.placeOnRegularVertices, this._tags = [], this._tagIterator = 0;
  }
  processPath(t2) {
    if (this.iteratePath || (this._preparePath(t2), this.iteratePath = true), this._tagIterator >= this._tags.length)
      return this._tags.length = 0, this._tagIterator = 0, this.iteratePath = false, null;
    const e2 = this._tags[this._tagIterator];
    this._angleToLine && this.internalPlacement.setRotate(e2[2]);
    let s2 = e2[0], i2 = e2[1];
    if (this._offset !== 0) {
      const t3 = Math.cos(e2[2]), n2 = Math.sin(e2[2]);
      s2 -= this._offset * n2, i2 += this._offset * t3;
    }
    return this.internalPlacement.setTranslate(s2, i2), this._tagIterator++, this.internalPlacement;
  }
  _preparePath(t2) {
    this._tags.length = 0, this._tagIterator = 0;
    const i2 = x(t2), n2 = t2.length - 1;
    let a2, r2, o2 = 0, l2 = 0, _2 = 0, c2 = 0, g$1 = 0;
    for (; o2 < n2; ) {
      o2++, a2 = t2[o2 - 1], r2 = t2[o2];
      const e2 = g(a2), u2 = g(r2);
      (this._angleToLine || this._offset !== 0) && (c2 = this._curveHelper.getAngle(a2, r2, 0)), o2 === 1 ? i2 ? (l2 = c2, _2 = e2) : this._endPoints && this._tags.push([a2[0], a2[1], c2]) : e2 === 1 ? this._controlPoints && this._tags.push([a2[0], a2[1], h$1(g$1, c2)]) : this._regularVertices && this._tags.push([a2[0], a2[1], h$1(g$1, c2)]), (this._angleToLine || this._offset !== 0) && (g$1 = this._curveHelper.getAngle(a2, r2, 1)), o2 === n2 && (i2 ? u2 === 1 || _2 === 1 ? this._controlPoints && this._tags.push([r2[0], r2[1], h$1(g$1, l2)]) : this._regularVertices && this._tags.push([r2[0], r2[1], h$1(g$1, l2)]) : this._endPoints && this._tags.push([r2[0], r2[1], g$1]));
    }
    this._tagIterator = 0;
  }
}
function h$1(t2, e2) {
  const s2 = Math.PI;
  for (; Math.abs(e2 - t2) > s2 + 2 * a; )
    e2 - t2 > s2 ? e2 -= 2 * s2 : e2 += 2 * s2;
  return (t2 + e2) / 2;
}
function s(t2) {
  return t2.rings !== void 0;
}
class o$1 {
  static local() {
    return o$1.instance === null && (o$1.instance = new o$1()), o$1.instance;
  }
  execute(t2, e2, n2) {
    return new r$1(t2, e2, n2);
  }
}
o$1.instance = null;
class r$1 {
  constructor(t2, e2, s2) {
    this._geometry = t2, this._offsetX = e2.offsetX !== void 0 ? e2.offsetX * s2 : 0, this._offsetY = e2.offsetY !== void 0 ? e2.offsetY * s2 : 0, this._method = e2.method !== void 0 ? e2.method : "OnPolygon", this._internalPlacement = new t$4();
  }
  next() {
    const t2 = this._geometry;
    return this._geometry = null, t2 && s(t2) ? this._polygonCenter(t2) : null;
  }
  _polygonCenter(n2) {
    let s2 = false;
    switch (this._method) {
      case "OnPolygon":
      default:
      case "CenterOfMass":
      case "BoundingBoxCenter": {
        const o2 = i$5();
        c$5(o2, n2), this._internalPlacement.setTranslate((o2[2] + o2[0]) / 2 + this._offsetX, (o2[3] + o2[1]) / 2 - this._offsetY), s2 = true;
        break;
      }
    }
    return s2 ? this._internalPlacement : null;
  }
}
function G(p2) {
  if (!p2)
    return null;
  switch (p2.type) {
    case "CIMGeometricEffectAddControlPoints":
      return o$4.local();
    case "CIMGeometricEffectArrow":
      return c$3.local();
    case "CIMGeometricEffectBuffer":
      return o$3.local();
    case "CIMGeometricEffectCut":
      return u$3.local();
    case "CIMGeometricEffectDashes":
      return i$2.local();
    case "CIMGeometricEffectDonut":
      return h$3.local();
    case "CIMGeometricEffectJog":
      return s$4.local();
    case "CIMGeometricEffectMove":
      return n$8.local();
    case "CIMGeometricEffectOffset":
      return o$2.local();
    case "CIMGeometricEffectReverse":
      return s$3.local();
    case "CIMGeometricEffectRotate":
      return u$2.local();
    case "CIMGeometricEffectScale":
      return c$1.local();
    case "CIMGeometricEffectWave":
      return n$6.local();
  }
  return null;
}
function A(e2) {
  if (!e2)
    return null;
  switch (e2.type) {
    case "CIMMarkerPlacementAlongLineSameSize":
      return n$5.local();
    case "CIMMarkerPlacementAtExtremities":
      return i$1.local();
    case "CIMMarkerPlacementAtRatioPositions":
      return e$1.local();
    case "CIMMarkerPlacementInsidePolygon":
      return i.local();
    case "CIMMarkerPlacementOnLine":
      return r$3.local();
    case "CIMMarkerPlacementOnVertices":
      return n$2.local();
    case "CIMMarkerPlacementPolygonCenter":
      return o$1.local();
  }
  return null;
}
class t$1 {
  constructor(t2 = 0, h2 = 0, i2 = 0, s2 = 0) {
    this.x = t2, this.y = h2, this.width = i2, this.height = s2;
  }
  get isEmpty() {
    return this.width <= 0 || this.height <= 0;
  }
  union(t2) {
    this.x = Math.min(this.x, t2.x), this.y = Math.min(this.y, t2.y), this.width = Math.max(this.width, t2.width), this.height = Math.max(this.height, t2.height);
  }
}
const c = Math.PI / 180, f$2 = n$b.getLogger("esri.symbols.cim.CIMSymbolDrawHelper");
class m$1 {
  constructor(t2) {
    this._t = t2;
  }
  static createIdentity() {
    return new m$1([1, 0, 0, 0, 1, 0]);
  }
  clone() {
    const t2 = this._t;
    return new m$1(t2.slice());
  }
  transform(t2) {
    const s2 = this._t;
    return [s2[0] * t2[0] + s2[1] * t2[1] + s2[2], s2[3] * t2[0] + s2[4] * t2[1] + s2[5]];
  }
  static createScale(t2, s2) {
    return new m$1([t2, 0, 0, 0, s2, 0]);
  }
  scale(t2, s2) {
    const e2 = this._t;
    return e2[0] *= t2, e2[1] *= t2, e2[2] *= t2, e2[3] *= s2, e2[4] *= s2, e2[5] *= s2, this;
  }
  scaleRatio() {
    return Math.sqrt(this._t[0] * this._t[0] + this._t[1] * this._t[1]);
  }
  static createTranslate(t2, s2) {
    return new m$1([0, 0, t2, 0, 0, s2]);
  }
  translate(t2, s2) {
    const e2 = this._t;
    return e2[2] += t2, e2[5] += s2, this;
  }
  static createRotate(t2) {
    const s2 = Math.cos(t2), e2 = Math.sin(t2);
    return new m$1([s2, -e2, 0, e2, s2, 0]);
  }
  rotate(t2) {
    return this.multiply(m$1.createRotate(t2));
  }
  multiply(t2) {
    const s2 = this._t, e2 = t2._t, r2 = s2[0] * e2[0] + s2[3] * e2[1], i2 = s2[1] * e2[0] + s2[4] * e2[1], o2 = s2[2] * e2[0] + s2[5] * e2[1] + e2[2], a2 = s2[0] * e2[3] + s2[3] * e2[4], n2 = s2[1] * e2[3] + s2[4] * e2[4], h2 = s2[2] * e2[3] + s2[5] * e2[4] + e2[5];
    return s2[0] = r2, s2[1] = i2, s2[2] = o2, s2[3] = a2, s2[4] = n2, s2[5] = h2, this;
  }
}
class u$1 {
  constructor(t2) {
    this._transfos = [], this._sizeTransfos = [], this._transfos.push(t2 || m$1.createIdentity()), this._sizeTransfos.push(t2 ? t2.scaleRatio() : 1);
  }
  transformPt(t2) {
    return this._transfos[this._transfos.length - 1].transform(t2);
  }
  transformSize(t2) {
    return t2 * this._sizeTransfos[this._sizeTransfos.length - 1];
  }
  back() {
    return this._transfos[this._transfos.length - 1];
  }
  push(t2, s2) {
    const e2 = s2 ? t2.scaleRatio() : 1;
    t2.multiply(this.back()), this._transfos.push(t2), this._sizeTransfos.push(this._sizeTransfos[this._sizeTransfos.length - 1] * e2);
  }
  pop() {
    this._transfos.splice(-1, 1), this._sizeTransfos.splice(-1, 1);
  }
  drawSymbol(t2, s2) {
    if (t2)
      switch (t2.type) {
        case "CIMPointSymbol":
        case "CIMLineSymbol":
        case "CIMPolygonSymbol":
          this.drawMultiLayerSymbol(t2, s2);
      }
  }
  drawMultiLayerSymbol(t2, s2) {
    if (!t2)
      return;
    const e2 = t2.symbolLayers;
    if (!e2)
      return;
    const r2 = t2.effects;
    if (r2) {
      const t3 = this.executeEffects(r2, s2);
      if (t3) {
        let s3 = t3.next();
        for (; s3; )
          this.drawSymbolLayers(e2, s3), s3 = t3.next();
      }
    } else
      this.drawSymbolLayers(e2, s2);
  }
  executeEffects(t2, s2) {
    const e2 = 1;
    let r2 = new r$b(s2);
    for (const i2 of t2) {
      const t3 = G(i2);
      t3 && (r2 = t3.execute(r2, i2, e2));
    }
    return r2;
  }
  drawSymbolLayers(t2, s2) {
    let e2 = t2.length;
    for (; e2--; ) {
      const r2 = t2[e2];
      if (!r2 || r2.enable === false)
        continue;
      const i2 = r2.effects;
      if (i2) {
        const t3 = this.executeEffects(i2, s2);
        if (t3) {
          let s3 = t3.next();
          for (; s3; )
            this.drawSymbolLayer(r2, s3), s3 = t3.next();
        }
      } else
        this.drawSymbolLayer(r2, s2);
    }
  }
  drawSymbolLayer(t2, s2) {
    switch (t2.type) {
      case "CIMSolidFill":
        this.drawSolidFill(s2, t2.color);
        break;
      case "CIMHatchFill":
        this.drawHatchFill(t2, s2);
        break;
      case "CIMSolidStroke":
        this.drawSolidStroke(s2, t2.color, t2.width, t2.capStyle, t2.joinStyle, t2.miterLimit);
        break;
      case "CIMCharacterMarker":
      case "CIMPictureMarker":
      case "CIMVectorMarker":
        this.drawMarkerLayer(t2, s2);
    }
  }
  drawHatchFill(t2, s2) {
    const e2 = 1, r2 = this._buildHatchPolyline(t2, s2, e2);
    r2 && (this.pushClipPath(s2), this.drawMultiLayerSymbol(t2.lineSymbol, r2), this.popClipPath());
  }
  drawMarkerLayer(t2, s2) {
    const e2 = t2.markerPlacement;
    if (e2) {
      const r2 = A(e2);
      if (r2) {
        const i2 = e2.type === "CIMMarkerPlacementInsidePolygon";
        i2 && this.pushClipPath(s2);
        const o2 = 1, a2 = r2.execute(s2, e2, o2);
        if (a2) {
          let s3 = a2.next();
          for (; s3; )
            this.drawMarker(t2, s3), s3 = a2.next();
        }
        i2 && this.popClipPath();
      }
    } else {
      const e3 = new t$4();
      e3.tx = s2.x, e3.ty = s2.y, this.drawMarker(t2, e3);
    }
  }
  drawMarker(t2, s2) {
    switch (t2.type) {
      case "CIMCharacterMarker":
      case "CIMPictureMarker":
        this.drawPictureMarker(t2, s2);
        break;
      case "CIMVectorMarker":
        this.drawVectorMarker(t2, s2);
    }
  }
  drawPictureMarker(t2, s2) {
    if (!t2)
      return;
    const e2 = t2.size || 10, r2 = m$1.createIdentity(), i2 = t2.anchorPoint;
    if (i2) {
      let s3 = i2.x, o2 = i2.y;
      t2.anchorPointUnits !== "Absolute" && (s3 *= e2, o2 *= e2), r2.translate(-s3, -o2);
    }
    t2.rotation && r2.rotate(t2.rotation * c), r2.translate(t2.offsetX || 0, t2.offsetY || 0), r2.translate(s2.tx, s2.ty), this.push(r2, false), this.drawImage(t2.url, e2, t2.scaleX), this.pop();
  }
  drawVectorMarker(t2, s2) {
    if (!t2)
      return;
    const e2 = t2.markerGraphics;
    if (!e2)
      return;
    const r2 = t2.size, i2 = t2.frame, o2 = i2 ? i2.ymax - i2.ymin : 0, a2 = r2 && o2 ? r2 / o2 : 1, n2 = m$1.createIdentity();
    i2 && n2.translate(0.5 * -(i2.xmax + i2.xmin), 0.5 * -(i2.ymax + i2.ymin));
    const h2 = t2.anchorPoint;
    if (h2) {
      let s3 = h2.x, e3 = h2.y;
      t2.anchorPointUnits !== "Absolute" && i2 && (s3 *= i2.xmax - i2.xmin, e3 *= i2.ymax - i2.ymin), n2.translate(-s3, -e3);
    }
    a2 !== 1 && n2.scale(a2, a2), t2.rotation && n2.rotate(t2.rotation * c), n2.translate(t2.offsetX || 0, t2.offsetY || 0), n2.translate(s2.tx, s2.ty), this.push(n2, t2.scaleSymbolsProportionally);
    for (const l2 of e2)
      l2 && l2.symbol && l2.geometry || f$2.error("Invalid marker graphic", l2), this.drawSymbol(l2.symbol, l2.geometry);
    this.pop();
  }
  _buildHatchPolyline(t2, e2, r2) {
    let o2 = (t2.separation !== void 0 ? t2.separation : 4) * r2, a2 = t2.rotation !== void 0 ? t2.rotation : 0;
    if (o2 === 0)
      return null;
    o2 < 0 && (o2 = -o2);
    let n2 = 0;
    const h2 = 0.5 * o2;
    for (; n2 > h2; )
      n2 -= o2;
    for (; n2 < -h2; )
      n2 += o2;
    const l2 = i$5();
    c$5(l2, e2), l2[0] -= h2, l2[1] -= h2, l2[2] += h2, l2[3] += h2;
    const f2 = [[l2[0], l2[1]], [l2[0], l2[3]], [l2[2], l2[3]], [l2[2], l2[1]]];
    for (; a2 > 180; )
      a2 -= 180;
    for (; a2 < 0; )
      a2 += 180;
    const m2 = Math.cos(a2 * c), u2 = Math.sin(a2 * c), p2 = -o2 * u2, _2 = o2 * m2;
    let y2, d2, x2, M;
    n2 = (t2.offsetX !== void 0 ? t2.offsetX * r2 : 0) * u2 - (t2.offsetY !== void 0 ? t2.offsetY * r2 : 0) * m2, y2 = x2 = Number.MAX_VALUE, d2 = M = -Number.MAX_VALUE;
    for (const s2 of f2) {
      const t3 = s2[0], e3 = s2[1], r3 = m2 * t3 + u2 * e3, i2 = -u2 * t3 + m2 * e3;
      y2 = Math.min(y2, r3), x2 = Math.min(x2, i2), d2 = Math.max(d2, r3), M = Math.max(M, i2);
    }
    x2 = Math.floor(x2 / o2) * o2;
    let b = m2 * y2 - u2 * x2 - p2 * n2 / o2, w = u2 * y2 + m2 * x2 - _2 * n2 / o2, P2 = m2 * d2 - u2 * x2 - p2 * n2 / o2, S2 = u2 * d2 + m2 * x2 - _2 * n2 / o2;
    const g2 = 1 + Math.round((M - x2) / o2), C2 = [];
    for (let s2 = 0; s2 < g2; s2++)
      b += p2, w += _2, P2 += p2, S2 += _2, C2.push([[b, w], [P2, S2]]);
    return { paths: C2 };
  }
}
class p$1 extends u$1 {
  constructor() {
    super(), this.reset();
  }
  reset() {
    this._xmin = this._ymin = 1 / 0, this._xmax = this._ymax = -1 / 0, this._clipCount = 0;
  }
  envelope() {
    return new t$1(this._xmin, this._ymin, this._xmax - this._xmin, this._ymax - this._ymin);
  }
  drawSolidFill(t2) {
    !t2 || this._clipCount > 0 || (y$3(t2) ? this._processPath(t2.rings, 0) : f$5(t2) && this._processPath(t2.paths, 0));
  }
  drawSolidStroke(t2, s2, i2) {
    if (!t2 || this._clipCount > 0)
      return;
    const o2 = 0.5 * this.transformSize(i2);
    y$3(t2) ? this._processPath(t2.rings, o2) : f$5(t2) && this._processPath(t2.paths, o2);
  }
  pushClipPath(t2) {
    this.drawSolidFill(t2), ++this._clipCount;
  }
  popClipPath() {
    --this._clipCount;
  }
  drawImage(t2, s2, e2) {
    const r2 = s2 / 2;
    this._merge(this.transformPt([0, 0]), r2);
  }
  _processPath(t2, s2) {
    if (t2)
      for (const e2 of t2) {
        const t3 = e2 ? e2.length : 0;
        if (t3 > 1) {
          this._merge(this.transformPt(e2[0]), s2);
          for (let r2 = 1; r2 < t3; ++r2)
            this._merge(this.transformPt(e2[r2]), s2);
        }
      }
  }
  _merge(t2, s2) {
    t2[0] - s2 < this._xmin && (this._xmin = t2[0] - s2), t2[0] + s2 > this._xmax && (this._xmax = t2[0] + s2), t2[1] - s2 < this._ymin && (this._ymin = t2[1] - s2), t2[1] + s2 > this._ymax && (this._ymax = t2[1] + s2);
  }
}
class _ extends u$1 {
  constructor(t2, s2) {
    super(s2), this._ctx = t2;
  }
  drawSolidFill(t2, s2) {
    if (!t2)
      return;
    if (y$3(t2))
      this._buildPath(t2.rings, true);
    else {
      if (!f$5(t2))
        return;
      this._buildPath(t2.paths, true);
    }
    const i2 = this._ctx;
    i2.fillStyle = typeof s2 == "string" ? s2 : "rgba(" + Math.round(s2[0]) + "," + Math.round(s2[1]) + "," + Math.round(s2[2]) + "," + s2[3] / 255 + ")", i2.fill("evenodd");
  }
  drawSolidStroke(t2, s2, i2, o2, a2, n2) {
    if (!t2 || !s2 || i2 === 0)
      return;
    if (y$3(t2))
      this._buildPath(t2.rings, true);
    else {
      if (!f$5(t2))
        return;
      this._buildPath(t2.paths, false);
    }
    const h2 = this._ctx;
    h2.strokeStyle = typeof s2 == "string" ? s2 : "rgba(" + Math.round(s2[0]) + "," + Math.round(s2[1]) + "," + Math.round(s2[2]) + "," + s2[3] / 255 + ")", h2.lineWidth = this.transformSize(i2) + 0.5, this._setCapStyle(o2), this._setJoinStyle(a2), h2.miterLimit = n2, h2.stroke();
  }
  pushClipPath(t2) {
    this._ctx.save(), y$3(t2) ? this._buildPath(t2.rings, true) : f$5(t2) && this._buildPath(t2.paths, true), this._ctx.clip("evenodd");
  }
  popClipPath() {
    this._ctx.restore();
  }
  drawImage(t2, s2, e2) {
  }
  _buildPath(t2, s2) {
    const e2 = this._ctx;
    if (e2.beginPath(), t2)
      for (const r2 of t2) {
        const t3 = r2 ? r2.length : 0;
        if (t3 > 1) {
          let i2 = this.transformPt(r2[0]);
          e2.moveTo(i2[0], i2[1]);
          for (let s3 = 1; s3 < t3; ++s3)
            i2 = this.transformPt(r2[s3]), e2.lineTo(i2[0], i2[1]);
          s2 && e2.closePath();
        }
      }
  }
  _setCapStyle(t2) {
    switch (t2) {
      case "Butt":
        this._ctx.lineCap = "butt";
        break;
      case "Round":
        this._ctx.lineCap = "round";
        break;
      case "Square":
        this._ctx.lineCap = "square";
    }
  }
  _setJoinStyle(t2) {
    switch (t2) {
      case "Bevel":
        this._ctx.lineJoin = "bevel";
        break;
      case "Round":
        this._ctx.lineJoin = "round";
        break;
      case "Miter":
        this._ctx.lineJoin = "miter";
    }
  }
}
const t = [1, 256, 65536, 16777216], n$1 = [1 / 256, 1 / 65536, 1 / 16777216, 1 / 4294967296], o = e(new Uint8ClampedArray([255, 255, 255, 255]));
function r(n2, r2, e2 = 0) {
  const c2 = f$1(n2, 0, o);
  for (let o2 = 0; o2 < 4; o2++)
    r2[e2 + o2] = Math.floor(256 * u(c2 * t[o2]));
}
function e(t2, o2 = 0) {
  let r2 = 0;
  for (let e2 = 0; e2 < 4; e2++)
    r2 += t2[o2 + e2] * n$1[e2];
  return r2;
}
function f$1(t2, n2, o2) {
  return t2 < n2 ? n2 : t2 > o2 ? o2 : t2;
}
function u(t2) {
  return t2 - Math.floor(t2);
}
const n = Math.PI, l = n / 2, m = 4, y = n$b.getLogger("esri.symbols.cim.CIMSymbolHelper");
function f(e2, t2) {
  switch (t2.type) {
    case "CIMSymbolReference": {
      const r2 = { type: "point", x: 0, y: 0 };
      e2.drawSymbol(t2.symbol, r2);
      break;
    }
    case "CIMPointSymbol": {
      const r2 = { type: "point", x: 0, y: 0 };
      e2.drawSymbol(t2, r2);
      break;
    }
    case "CIMTextSymbol":
      break;
    case "CIMVectorMarker": {
      const r2 = new t$4();
      e2.drawMarker(t2, r2);
      break;
    }
  }
  return e2.envelope();
}
class h {
  static getEnvelope(e2) {
    const t2 = new p$1();
    if (Array.isArray(e2)) {
      let r2;
      for (const o2 of e2)
        r2 ? r2.union(f(t2, o2)) : r2 = f(t2, o2);
      return r2;
    }
    return f(t2, e2);
  }
  static getTextureAnchor(e2) {
    const t2 = this.getEnvelope(e2);
    if (!t2 || t2.width <= 0 || t2.height <= 0)
      return [0, 0, 0];
    const r2 = 96 / 72, o2 = (t2.x + 0.5 * t2.width) * r2, s2 = -(t2.y + 0.5 * t2.height) * r2, a2 = t2.width * r2 + 2, i2 = t2.height * r2 + 2;
    return [o2 / a2, s2 / i2, i2];
  }
  static rasterize(e2, t2, r2, s2 = true) {
    const c2 = r2 || this.getEnvelope(t2);
    if (!c2 || c2.width <= 0 || c2.height <= 0)
      return [null, 0, 0, 0, 0];
    const n2 = 96 / 72, l2 = (c2.x + 0.5 * c2.width) * n2, m2 = (c2.y + 0.5 * c2.height) * n2;
    e2.width = c2.width * n2, e2.height = c2.height * n2, r2 || (e2.width += 2, e2.height += 2);
    const y2 = e2.getContext("2d"), f2 = m$1.createScale(n2, -n2);
    f2.translate(0.5 * e2.width - l2, 0.5 * e2.height + m2);
    const h2 = new _(y2, f2);
    switch (t2.type) {
      case "CIMPointSymbol": {
        const e3 = { type: "point", x: 0, y: 0 };
        h2.drawSymbol(t2, e3);
        break;
      }
      case "CIMVectorMarker": {
        const e3 = new t$4();
        h2.drawMarker(t2, e3);
        break;
      }
    }
    const p2 = y2.getImageData(0, 0, e2.width, e2.height), S2 = new Uint8Array(p2.data);
    if (s2) {
      let e3;
      for (let t3 = 0; t3 < S2.length; t3 += 4)
        e3 = S2[t3 + 3] / 255, S2[t3] = S2[t3] * e3, S2[t3 + 1] = S2[t3 + 1] * e3, S2[t3 + 2] = S2[t3 + 2] * e3;
    }
    return [S2, e2.width, e2.height, -l2 / e2.width, -m2 / e2.height];
  }
  static fromSimpleMarker(e2) {
    const t2 = 100, r2 = 50;
    let o2, s2;
    const a2 = e2.style;
    if (a2 === "circle" || a2 === "esriSMSCircle") {
      const e3 = 0.25;
      let t3 = Math.acos(1 - e3 / r2), a3 = Math.ceil(n / t3 / 4);
      a3 === 0 && (a3 = 1), t3 = l / a3, a3 *= 4;
      const i3 = [];
      i3.push([r2, 0]);
      for (let o3 = 1; o3 < a3; o3++)
        i3.push([r2 * Math.cos(o3 * t3), -r2 * Math.sin(o3 * t3)]);
      i3.push([r2, 0]), o2 = { rings: [i3] }, s2 = { xmin: -r2, ymin: -r2, xmax: r2, ymax: r2 };
    } else if (a2 === "cross" || a2 === "esriSMSCross") {
      const e3 = 0;
      o2 = { rings: [[[e3, r2], [e3, e3], [r2, e3], [r2, -e3], [e3, -e3], [e3, -r2], [-e3, -r2], [-e3, -e3], [-r2, -e3], [-r2, e3], [-e3, e3], [-e3, r2], [e3, r2]]] }, s2 = { xmin: -r2, ymin: -r2, xmax: r2, ymax: r2 };
    } else if (a2 === "diamond" || a2 === "esriSMSDiamond")
      o2 = { rings: [[[-r2, 0], [0, r2], [r2, 0], [0, -r2], [-r2, 0]]] }, s2 = { xmin: -r2, ymin: -r2, xmax: r2, ymax: r2 };
    else if (a2 === "square" || a2 === "esriSMSSquare")
      o2 = { rings: [[[-r2, -r2], [-r2, r2], [r2, r2], [r2, -r2], [-r2, -r2]]] }, s2 = { xmin: -r2, ymin: -r2, xmax: r2, ymax: r2 };
    else if (a2 === "x" || a2 === "esriSMSX") {
      const e3 = 0;
      o2 = { rings: [[[0, e3], [r2 - e3, r2], [r2, r2 - e3], [e3, 0], [r2, e3 - r2], [r2 - e3, -r2], [0, -e3], [e3 - r2, -r2], [-r2, e3 - r2], [-e3, 0], [-r2, r2 - e3], [e3 - r2, r2], [0, e3]]] }, s2 = { xmin: -r2, ymin: -r2, xmax: r2, ymax: r2 };
    } else if (a2 === "triangle" || a2 === "esriSMSTriangle") {
      const e3 = t2 * 0.5773502691896257, r3 = -e3, a3 = 2 / 3 * t2, i3 = a3 - t2;
      o2 = { rings: [[[r3, i3], [0, a3], [e3, i3], [r3, i3]]] }, s2 = { xmin: r3, ymin: i3, xmax: e3, ymax: a3 };
    } else
      a2 !== "arrow" && a2 !== "esriSMSArrow" || (o2 = { rings: [[[-50, 50], [50, 0], [-50, -50], [-33, -20], [-33, 20], [-50, 50]]] }, s2 = { xmin: -r2, ymin: -r2, xmax: r2, ymax: r2 });
    let i2;
    if (o2 && s2) {
      const t3 = [{ type: "CIMSolidFill", enable: true, color: e2.color }];
      e2.outline && t3.push({ type: "CIMSolidStroke", enable: true, width: e2.outline.width, color: e2.outline.color });
      const r3 = { type: "CIMPolygonSymbol", symbolLayers: t3 };
      i2 = { type: "CIMPointSymbol", symbolLayers: [{ type: "CIMVectorMarker", enable: true, rotation: e2.angle, size: e2.size, offsetX: e2.xoffset, offsetY: e2.yoffset, frame: s2, markerGraphics: [{ type: "CIMMarkerGraphic", geometry: o2, symbol: r3 }] }] };
    }
    return i2;
  }
  static fromCIMHatchFill(e2) {
    const t2 = e2.separation !== void 0 ? e2.separation : m, r2 = t2 / 2;
    let o2 = this._getLineSymbolPeriod(e2.lineSymbol) || m;
    for (; o2 < 4; )
      o2 *= 2;
    const s2 = o2 / 2;
    return { type: "CIMVectorMarker", frame: { xmin: -s2, xmax: s2, ymin: -r2, ymax: r2 }, markerGraphics: [{ type: "CIMMarkerGraphic", geometry: { paths: [[[-s2, 0], [s2, 0]]] }, symbol: e2.lineSymbol }], size: t2 };
  }
  static _getLineSymbolPeriod(e2) {
    if (e2) {
      const t2 = this._getEffectsRepeat(e2.effects);
      if (t2)
        return t2;
      if (e2.symbolLayers)
        for (const r2 of e2.symbolLayers) {
          const e3 = this._getEffectsRepeat(r2.effects);
          if (e3)
            return e3;
          if (r2) {
            const e4 = this._getPlacementRepeat(r2.markerPlacement);
            if (e4)
              return e4;
          }
        }
    }
    return 0;
  }
  static _getEffectsRepeat(e2) {
    if (e2) {
      for (const t2 of e2)
        if (t2)
          switch (t2.type) {
            case "CIMGeometricEffectDashes": {
              const e3 = t2.dashTemplate;
              if (e3 && e3.length) {
                let t3 = 0;
                for (const r2 of e3)
                  t3 += r2;
                return 1 & e3.length && (t3 *= 2), t3;
              }
              break;
            }
            case "CIMGeometricEffectWave":
              return t2.period;
            default:
              y.error(`unsupported geometric effect type ${t2.type}`);
          }
    }
    return 0;
  }
  static _getPlacementRepeat(e2) {
    if (e2)
      switch (e2.type) {
        case "CIMMarkerPlacementAlongLineSameSize":
        case "CIMMarkerPlacementAlongLineRandomSize":
        case "CIMMarkerPlacementAlongLineVariableSize": {
          const t2 = e2.placementTemplate;
          if (t2 && t2.length) {
            let e3 = 0;
            for (const r2 of t2)
              e3 += r2;
            return 1 & t2.length && (e3 *= 2), e3;
          }
          break;
        }
      }
    return 0;
  }
  static fromCIMInsidePolygon(e2) {
    const t2 = e2.markerPlacement, r2 = __spreadValues({ type: e2.type }, e2);
    let o2, s2, a2, i2;
    if (r2.markerPlacement = null, r2.anchorPoint = null, t2.shiftOddRows === true) {
      s2 = t2.stepX / 2, a2 = t2.stepY, i2 = 2 * t2.stepY;
      o2 = [{ x: -s2, y: 0 }, { x: s2, y: 0 }, { x: 0, y: a2 }, { x: 0, y: -a2 }].map((e3) => ({ type: "CIMMarkerGraphic", geometry: e3, symbol: { type: "CIMPointSymbol", symbolLayers: [r2] } }));
    } else
      s2 = t2.stepX / 2, a2 = t2.stepY / 2, i2 = t2.stepY, o2 = [{ type: "CIMMarkerGraphic", geometry: { x: 0, y: 0 }, symbol: { type: "CIMPointSymbol", symbolLayers: [r2] } }];
    return { type: "CIMVectorMarker", frame: { xmin: -s2, xmax: s2, ymin: -a2, ymax: a2 }, markerGraphics: o2, size: i2 };
  }
  static getFillColor(e2) {
    if (!e2)
      return null;
    switch (e2.type) {
      case "CIMPolygonSymbol":
        if (e2.symbolLayers)
          for (const t2 of e2.symbolLayers) {
            const e3 = h.getFillColor(t2);
            if (e3 != null)
              return e3;
          }
        break;
      case "CIMTextSymbol":
        return h.getFillColor(e2.symbol);
      case "CIMSolidFill":
        return e2.color;
    }
  }
  static getStrokeColor(e2) {
    if (e2)
      switch (e2.type) {
        case "CIMPolygonSymbol":
        case "CIMLineSymbol":
          if (e2.symbolLayers)
            for (const t2 of e2.symbolLayers) {
              const e3 = h.getStrokeColor(t2);
              if (e3 !== void 0)
                return e3;
            }
          break;
        case "CIMTextSymbol":
          return h.getStrokeColor(e2.symbol);
        case "CIMSolidStroke":
          return e2.color;
      }
  }
  static getStrokeWidth(e2) {
    if (e2)
      switch (e2.type) {
        case "CIMPolygonSymbol":
        case "CIMLineSymbol":
          if (e2.symbolLayers)
            for (const t2 of e2.symbolLayers) {
              const e3 = h.getStrokeWidth(t2);
              if (e3 !== void 0)
                return e3;
            }
          break;
        case "CIMTextSymbol":
          return h.getStrokeWidth(e2.symbol);
        case "CIMSolidStroke":
        case "CIMGradientStroke":
        case "CIMPictureStroke":
          return e2.width;
      }
  }
  static getSize(e2) {
    if (e2)
      switch (e2.type) {
        case "CIMPointSymbol":
        case "CIMLineSymbol":
        case "CIMPolygonSymbol": {
          let t2 = 0;
          if (e2.symbolLayers)
            for (const r2 of e2.symbolLayers) {
              const e3 = h.getSize(r2);
              e3 > t2 && (t2 = e3);
            }
          return t2;
        }
        case "CIMSolidStroke":
        case "CIMPictureStroke":
        case "CIMGradientStroke":
          return e2.width;
        case "CIMCharacterMarker":
        case "CIMPictureMarker":
        case "CIMVectorMarker":
          return e2.size;
      }
  }
  static getMarkerScaleRatio(e2) {
    if (e2)
      switch (e2.type) {
        case "CIMVectorMarker":
          if (e2.scaleSymbolsProportionally !== false && e2.frame) {
            const t2 = e2.frame.ymax - e2.frame.ymin;
            return e2.size / t2;
          }
      }
    return 1;
  }
}
class p {
  static rasterizeSimpleFill(e2, r2, o2) {
    r2 !== "solid" && r2 !== "none" && r2 !== "esriSFSSolid" && r2 !== "esriSFSNull" || console.error("Unexpected: style does not require rasterization");
    const s2 = a$3(Math.ceil(o2)), a2 = this._isHorizontalOrVertical(r2) ? 8 * s2 : 16 * s2, i2 = 2 * s2;
    e2.width = a2, e2.height = a2;
    const c2 = e2.getContext("2d");
    c2.strokeStyle = "#FFFFFF", c2.lineWidth = s2, c2.beginPath(), r2 !== "vertical" && r2 !== "cross" && r2 !== "esriSFSCross" && r2 !== "esriSFSVertical" || (c2.moveTo(a2 / 2, -i2), c2.lineTo(a2 / 2, a2 + i2)), r2 !== "horizontal" && r2 !== "cross" && r2 !== "esriSFSCross" && r2 !== "esriSFSHorizontal" || (c2.moveTo(-i2, a2 / 2), c2.lineTo(a2 + i2, a2 / 2)), r2 !== "forward-diagonal" && r2 !== "diagonal-cross" && r2 !== "esriSFSDiagonalCross" && r2 !== "esriSFSForwardDiagonal" || (c2.moveTo(-i2, -i2), c2.lineTo(a2 + i2, a2 + i2), c2.moveTo(a2 - i2, -i2), c2.lineTo(a2 + i2, i2), c2.moveTo(-i2, a2 - i2), c2.lineTo(i2, a2 + i2)), r2 !== "backward-diagonal" && r2 !== "diagonal-cross" && r2 !== "esriSFSBackwardDiagonal" && r2 !== "esriSFSDiagonalCross" || (c2.moveTo(a2 + i2, -i2), c2.lineTo(-i2, a2 + i2), c2.moveTo(i2, -i2), c2.lineTo(-i2, i2), c2.moveTo(a2 + i2, a2 - i2), c2.lineTo(a2 - i2, a2 + i2)), c2.stroke();
    const n2 = c2.getImageData(0, 0, e2.width, e2.height), l2 = new Uint8Array(n2.data);
    let m2;
    for (let t2 = 0; t2 < l2.length; t2 += 4)
      m2 = l2[t2 + 3] / 255, l2[t2] = l2[t2] * m2, l2[t2 + 1] = l2[t2 + 1] * m2, l2[t2 + 2] = l2[t2 + 2] * m2;
    return [l2, e2.width, e2.height];
  }
  static rasterizeSimpleLine(e2, t2) {
    let r2;
    switch (t2) {
      case "butt":
        r2 = "Butt";
        break;
      case "square":
        r2 = "Square";
        break;
      default:
        r2 = "Round";
    }
    const o2 = r2 === "Butt";
    let s2;
    switch (e2) {
      case "dash":
      case "esriSLSDash":
        s2 = o2 ? [4, 3] : [3, 4];
        break;
      case "dash-dot":
      case "esriSLSDashDot":
        s2 = o2 ? [4, 3, 1, 3] : [3, 4, 0, 4];
        break;
      case "dot":
      case "esriSLSDot":
        s2 = o2 ? [1, 3] : [0, 4];
        break;
      case "long-dash":
      case "esriSLSLongDash":
        s2 = o2 ? [8, 3] : [7, 4];
        break;
      case "long-dash-dot":
      case "esriSLSLongDashDot":
        s2 = o2 ? [8, 3, 1, 3] : [7, 4, 0, 4];
        break;
      case "long-dash-dot-dot":
      case "esriSLSDashDotDot":
        s2 = o2 ? [8, 3, 1, 3, 1, 3] : [7, 4, 0, 4, 0, 4];
        break;
      case "short-dash":
      case "esriSLSShortDash":
        s2 = o2 ? [4, 1] : [3, 2];
        break;
      case "short-dash-dot":
      case "esriSLSShortDashDot":
        s2 = o2 ? [4, 1, 1, 1] : [3, 2, 0, 2];
        break;
      case "short-dash-dot-dot":
      case "esriSLSShortDashDotDot":
        s2 = o2 ? [4, 1, 1, 1, 1, 1] : [3, 2, 0, 2, 0, 2];
        break;
      case "short-dot":
      case "esriSLSShortDot":
        s2 = o2 ? [1, 1] : [0, 2];
        break;
      case "solid":
      case "esriSLSSolid":
      case "none":
        y.error("Unexpected: style does not require rasterization"), s2 = [0, 0];
        break;
      default:
        y.error(`Tried to rasterize SLS, but found an unexpected style: ${e2}!`), s2 = [0, 0];
    }
    return this.rasterizeDash(s2, r2);
  }
  static rasterizeDash(e2, t2) {
    const r$12 = t2 === "Butt", o2 = t2 === "Square", s2 = !r$12 && !o2, a2 = 15, i2 = 2 * a2 + 1;
    let n2 = 0;
    for (const c2 of e2)
      n2 += c2;
    const l2 = n2 * a2, m2 = l2 * i2, y2 = new Float32Array(m2), f2 = s2 ? a2 * a2 : a2;
    for (let c2 = 0; c2 < m2; ++c2)
      y2[c2] = f2;
    const h2 = a2, p2 = 0.5 * a2;
    let S2 = 0, d2 = 0, M = true;
    for (const c2 of e2) {
      S2 = d2, d2 += c2 * a2;
      let e3 = S2;
      for (; e3 < d2; ) {
        let t3 = 0;
        for (; t3 < i2; ) {
          const a3 = t3 * l2 + e3, i3 = s2 ? (t3 - h2) * (t3 - h2) : Math.abs(t3 - h2);
          y2[a3] = M ? r$12 ? Math.max(Math.max(S2 + p2 - e3, i3), Math.max(e3 - d2 + p2, i3)) : i3 : s2 ? Math.min((e3 - S2) * (e3 - S2) + i3, (e3 - d2) * (e3 - d2) + i3) : o2 ? Math.min(Math.max(e3 - S2, i3), Math.max(d2 - e3, i3)) : Math.min(Math.max(e3 - S2 + p2, i3), Math.max(d2 + p2 - e3, i3)), t3++;
        }
        e3++;
      }
      M = !M;
    }
    const b = y2.length, g2 = new Uint8Array(4 * b);
    for (let u2 = 0; u2 < b; ++u2) {
      const e3 = (s2 ? Math.sqrt(y2[u2]) : y2[u2]) / a2;
      r(e3, g2, 4 * u2);
    }
    return [g2, l2, i2];
  }
  static _isHorizontalOrVertical(e2) {
    return e2 === "vertical" || e2 === "horizontal" || e2 === "cross" || e2 === "esriSFSCross" || e2 === "esriSFSVertical" || e2 === "esriSFSHorizontal";
  }
}
class S {
  static findApplicableOverrides(e2, t2, r2) {
    if (t2) {
      if (e2.primitiveName) {
        let o2 = false;
        for (const t3 of r2)
          if (t3.primitiveName === e2.primitiveName) {
            o2 = true;
            break;
          }
        if (!o2)
          for (const s2 of t2)
            s2.primitiveName === e2.primitiveName && r2.push(s2);
      }
      switch (e2.type) {
        case "CIMPointSymbol":
        case "CIMLineSymbol":
        case "CIMPolygonSymbol":
          if (e2.effects)
            for (const o2 of e2.effects)
              S.findApplicableOverrides(o2, t2, r2);
          if (e2.symbolLayers)
            for (const o2 of e2.symbolLayers)
              S.findApplicableOverrides(o2, t2, r2);
          break;
        case "CIMTextSymbol":
          break;
        case "CIMSolidStroke":
        case "CIMPictureStroke":
        case "CIMGradientStroke":
        case "CIMSolidFill":
        case "CIMPictureFill":
        case "CIMHatchFill":
        case "CIMGradientFill":
        case "CIMVectorMarker":
        case "CIMCharacterMarker":
        case "CIMPictureMarker":
          if (e2.effects)
            for (const o2 of e2.effects)
              S.findApplicableOverrides(o2, t2, r2);
          if (e2.markerPlacement && S.findApplicableOverrides(e2.markerPlacement, t2, r2), e2.type === "CIMVectorMarker") {
            if (e2.markerGraphics)
              for (const o2 of e2.markerGraphics)
                S.findApplicableOverrides(o2, t2, r2), S.findApplicableOverrides(o2.symbol, t2, r2);
          } else
            e2.type === "CIMCharacterMarker" ? S.findApplicableOverrides(e2.symbol, t2, r2) : e2.type === "CIMHatchFill" && S.findApplicableOverrides(e2.lineSymbol, t2, r2);
      }
    }
  }
  static applyOverrides(e2, t2, r2, o2) {
    if (!t2)
      return;
    const s2 = (e3) => e3 ? e3.charAt(0).toLowerCase() + e3.substr(1) : e3;
    if (e2.primitiveName) {
      for (const a2 of t2)
        if (a2.primitiveName === e2.primitiveName) {
          const t3 = s2(a2.propertyName);
          if (o2 && o2.push({ cim: e2, nocapPropertyName: t3, value: e2[t3] }), a2.expression && (a2.value = S.toValue(a2.propertyName, a2.expression)), r2) {
            let t4 = false;
            for (const o3 of r2)
              o3.primitiveName === e2.primitiveName && (t4 = true);
            t4 || r2.push(a2);
          }
          e2[t3] = a2.value;
        }
    }
    switch (e2.type) {
      case "CIMPointSymbol":
      case "CIMLineSymbol":
      case "CIMPolygonSymbol":
        if (e2.effects)
          for (const s3 of e2.effects)
            S.applyOverrides(s3, t2, r2, o2);
        if (e2.symbolLayers)
          for (const s3 of e2.symbolLayers)
            S.applyOverrides(s3, t2, r2, o2);
        break;
      case "CIMTextSymbol":
        break;
      case "CIMSolidStroke":
      case "CIMSolidFill":
      case "CIMVectorMarker":
        if (e2.effects)
          for (const s3 of e2.effects)
            S.applyOverrides(s3, t2, r2, o2);
        if (e2.type === "CIMVectorMarker" && e2.markerGraphics)
          for (const s3 of e2.markerGraphics)
            S.applyOverrides(s3, t2, r2, o2), S.applyOverrides(s3.symbol, t2, r2, o2);
    }
  }
  static restoreOverrides(e2) {
    for (const t2 of e2)
      t2.cim[t2.nocapPropertyName] = t2.value;
  }
  static buildOverrideKey(e2) {
    let t2 = "";
    for (const r2 of e2)
      r2.value !== void 0 && (t2 += `${r2.primitiveName}${r2.propertyName}${JSON.stringify(r2.value)}`);
    return t2;
  }
  static toValue(e2, t2) {
    if (e2 === "DashTemplate")
      return t2.split(" ").map((e3) => Number(e3));
    if (e2 === "Color") {
      const e3 = new o$6(t2).toRgba();
      return e3[3] *= 255, e3;
    }
    return t2;
  }
}
export { A, G, S, r as a, p as b, h, o$5 as o, p$2 as p, r$b as r, t$1 as t };
