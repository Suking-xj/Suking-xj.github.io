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
import { bV as t$2, at as n$4, bW as h$2, bX as h$3, bY as n$5, bZ as o$5, as as r$2, aI as D$2, aG as i$2, aH as c$4, aF as n$6, b_ as e$4, bA as a$3, b6 as i$3, b$ as e$5, c0 as o$6, c1 as l$2, c2 as _$1, a9 as u$4, c3 as e$6, b9 as l$3, be as c$5, bu as k$2, b7 as S$2, ae as e$7, af as y$3, c4 as o$7, ag as i$4, c5 as j$2, c6 as n$7, bT as y$4, a4 as n$8, ai as t$4, a0 as t$5, c7 as l$4, aa as s$3, c8 as o$9, c9 as t$7, a5 as r$3, ca as m$3, ay as c$6, cb as i$5 } from "./vendor.74d5941c.js";
import { x as x$4 } from "./MD5.1ef35834.js";
import { m as m$2, A as A$3, E as E$2, S as S$3 } from "./Utils.3f1577e5.js";
import { f as f$2, A as A$4 } from "./MaterialKey.3bc4aaea.js";
import { o as o$8 } from "./visualVariablesUtils.cb58e4df.js";
import { k as k$3 } from "./definitions.6737c10c.js";
import { h as h$4, t as t$6 } from "./CIMSymbolHelper.6546a069.js";
import { t as t$3 } from "./Rect.b51904ac.js";
import { C as C$2 } from "./BidiEngine.9b392b22.js";
const i$1 = new C$2();
function n$3(r2) {
  if (!i$1.hasBidiChar(r2))
    return [r2, false];
  let n2;
  return n2 = i$1.checkContextual(r2) === "rtl" ? "IDNNN" : "ICNNN", [i$1.bidiTransform(r2, n2, "VLYSN"), true];
}
var e$3, t$1;
function n$2(t2) {
  switch (t2) {
    case "left":
      return e$3.Left;
    case "right":
      return e$3.Right;
    case "center":
    case "justify":
      return e$3.Center;
  }
}
function r$1(e2) {
  switch (e2) {
    case "top":
      return t$1.Top;
    case "middle":
      return t$1.Center;
    case "baseline":
      return t$1.Baseline;
    case "bottom":
      return t$1.Bottom;
  }
}
function a$2(n2) {
  switch (n2) {
    case "above-left":
      return [e$3.Right, t$1.Bottom];
    case "above-center":
    case "above-along":
      return [e$3.Center, t$1.Bottom];
    case "above-right":
      return [e$3.Left, t$1.Bottom];
    case "center-left":
      return [e$3.Right, t$1.Center];
    case "center-center":
    case "center-along":
      return [e$3.Center, t$1.Center];
    case "center-right":
      return [e$3.Left, t$1.Center];
    case "below-left":
      return [e$3.Right, t$1.Top];
    case "below-center":
    case "below-along":
      return [e$3.Center, t$1.Top];
    case "below-right":
      return [e$3.Left, t$1.Top];
    case "always-horizontal":
      return [e$3.Center, t$1.Baseline];
    default:
      return console.debug(`Found invalid placement type ${n2}`), [e$3.Center, t$1.Center];
  }
}
function c$3(t2) {
  switch (t2) {
    case e$3.Right:
      return -1;
    case e$3.Center:
      return 0;
    case e$3.Left:
      return 1;
    default:
      return console.debug(`Found invalid horizontal alignment ${t2}`), 0;
  }
}
function o$4(e2) {
  switch (e2) {
    case t$1.Top:
      return 1;
    case t$1.Center:
      return 0;
    case t$1.Bottom:
    case t$1.Baseline:
      return -1;
    default:
      return console.debug(`Found invalid vertical alignment ${e2}`), 0;
  }
}
function s$2(t2) {
  switch (t2) {
    case "left":
      return e$3.Left;
    case "right":
      return e$3.Right;
    case "center":
    case "justify":
      return e$3.Center;
  }
}
!function(e2) {
  e2[e2.Left = -1] = "Left", e2[e2.Center = 0] = "Center", e2[e2.Right = 1] = "Right";
}(e$3 || (e$3 = {})), function(e2) {
  e2[e2.Top = 1] = "Top", e2[e2.Center = 0] = "Center", e2[e2.Bottom = -1] = "Bottom", e2[e2.Baseline = 2] = "Baseline";
}(t$1 || (t$1 = {}));
class e$2 {
  constructor(t2, e2, s2, r2) {
    this.center = t$2(t2, e2), this.centerT = n$4(), this.halfWidth = s2 / 2, this.halfHeight = r2 / 2, this.width = s2, this.height = r2;
  }
  get x() {
    return this.center[0];
  }
  get y() {
    return this.center[1];
  }
  get blX() {
    return this.center[0] + this.halfWidth;
  }
  get blY() {
    return this.center[1] + this.halfHeight;
  }
  get trX() {
    return this.center[0] - this.halfWidth;
  }
  get trY() {
    return this.center[1] - this.halfHeight;
  }
  get xmin() {
    return this.x - this.halfWidth;
  }
  get xmax() {
    return this.x + this.halfWidth;
  }
  get ymin() {
    return this.y - this.halfHeight;
  }
  get ymax() {
    return this.y + this.halfHeight;
  }
  set x(t2) {
    this.center[0] = t2;
  }
  set y(t2) {
    this.center[1] = t2;
  }
  clone() {
    return new e$2(this.x, this.y, this.width, this.height);
  }
  serialize(t2) {
    return t2.writeF32(this.center[0]), t2.writeF32(this.center[1]), t2.push(this.width), t2.push(this.height), t2;
  }
  findCollisionDelta(h2, i2 = 4) {
    const e2 = Math.abs(h2.centerT[0] - this.centerT[0]), s2 = Math.abs(h2.centerT[1] - this.centerT[1]), r2 = (h2.halfWidth + this.halfWidth + i2) / e2, n2 = (h2.halfHeight + this.halfHeight + i2) / s2, a2 = Math.min(r2, n2);
    return h$2(a2);
  }
  extend(t2) {
    const h2 = Math.min(this.xmin, t2.xmin), i2 = Math.min(this.ymin, t2.ymin), e2 = Math.max(this.xmax, t2.xmax) - h2, s2 = Math.max(this.ymax, t2.ymax) - i2, r2 = h2 + e2 / 2, n2 = i2 + s2 / 2;
    this.width = e2, this.height = s2, this.halfWidth = e2 / 2, this.halfHeight = s2 / 2, this.x = r2, this.y = n2;
  }
  static deserialize(t2) {
    const h2 = t2.readF32(), i2 = t2.readF32(), s2 = t2.readInt32(), r2 = t2.readInt32();
    return new e$2(h2, i2, s2, r2);
  }
}
const u$3 = 26, g = 4, _ = u$3 + g, p$3 = u$3 - 6, x$3 = 3, w$1 = 8, y$2 = Math.PI / 180;
class T$2 {
  constructor(t2, s2, e2, i2) {
    this._rotationT = n$5(), this._xBounds = 0, this._yBounds = 0, this.minZoom = 0, this.maxZoom = 255, this._bounds = null;
    const h2 = e2.rect, n2 = new Float32Array(8);
    t2 *= i2, s2 *= i2;
    const o2 = e2.code ? h2.width * i2 : e2.metrics.width, a2 = e2.code ? h2.height * i2 : e2.metrics.height;
    n2[0] = t2, n2[1] = s2, n2[2] = t2 + o2, n2[3] = s2, n2[4] = t2, n2[5] = s2 + a2, n2[6] = t2 + o2, n2[7] = s2 + a2, this._data = n2, this._setTextureCoords(h2), this._scale = i2, this._mosaic = e2, this.x = t2, this.y = s2, this.maxOffset = Math.max(t2 + o2, s2 + a2);
  }
  get width() {
    return this._mosaic.metrics.width * this._scale;
  }
  get mosaic() {
    return this._mosaic;
  }
  set angle(t2) {
    this._angle = t2, n$6(this._rotationT), c$4(this._rotationT, this._rotationT, -t2), this._setOffsets(this._data);
  }
  get angle() {
    return this._angle;
  }
  get xTopLeft() {
    return this._data[0];
  }
  get yTopLeft() {
    return this._data[1];
  }
  get xBottomRight() {
    return this._data[6];
  }
  get yBottomRight() {
    return this._data[7];
  }
  get texcoords() {
    return this._texcoords;
  }
  get textureBinding() {
    return this._mosaic.textureBinding;
  }
  get offsets() {
    return this._offsets || this._setOffsets(this._data), this._offsets;
  }
  get char() {
    return String.fromCharCode(this._mosaic.code);
  }
  get code() {
    return this._mosaic.code;
  }
  get bounds() {
    if (!this._bounds) {
      const { height: t2, width: s2 } = this._mosaic.metrics, e2 = s2 * this._scale, i2 = Math.abs(t2) * this._scale, n2 = new Float32Array(8);
      n2[0] = this.x, n2[1] = this.y, n2[2] = this.x + e2, n2[3] = this.y, n2[4] = this.x, n2[5] = this.y + i2, n2[6] = this.x + e2, n2[7] = this.y + i2;
      const o2 = o$5(n$5(), this._rotationT, this._T);
      e$4(n2, n2, o2);
      let c2 = 1 / 0, d2 = 1 / 0, f2 = 0, l2 = 0;
      for (let h2 = 0; h2 < 4; h2++) {
        const t3 = n2[2 * h2], s3 = n2[2 * h2 + 1];
        c2 = Math.min(c2, t3), d2 = Math.min(d2, s3), f2 = Math.max(f2, t3), l2 = Math.max(l2, s3);
      }
      const u2 = f2 - c2, g2 = l2 - d2, _2 = c2 + u2 / 2, p2 = d2 + g2 / 2;
      this._bounds = new e$2(_2, p2, u2, g2);
    }
    return this._bounds;
  }
  setTransform(t2) {
    this._T = t2, this._offsets = null;
  }
  _setOffsets(t2) {
    this._offsets || (this._offsets = { upperLeft: 0, upperRight: 0, lowerLeft: 0, lowerRight: 0 });
    const s2 = this._offsets, e2 = new Float32Array(8), i2 = o$5(n$5(), this._rotationT, this._T);
    e$4(e2, t2, i2), s2.upperLeft = m$2(e2[0] * w$1, e2[1] * w$1), s2.upperRight = m$2(e2[2] * w$1, e2[3] * w$1), s2.lowerLeft = m$2(e2[4] * w$1, e2[5] * w$1), s2.lowerRight = m$2(e2[6] * w$1, e2[7] * w$1);
  }
  _setTextureCoords({ x: t2, y: s2, width: e2, height: i2 }) {
    this._texcoords = { upperLeft: m$2(t2, s2), upperRight: m$2(t2 + e2, s2), lowerLeft: m$2(t2, s2 + i2), lowerRight: m$2(t2 + e2, s2 + i2) };
  }
}
const M$2 = (t2, s2) => ({ code: 0, page: 0, sdf: true, rect: new t$3(0, 0, 11, 8), textureBinding: s2, metrics: { advance: 0, height: 4, width: t2, left: 0, top: 0 } });
class B$2 {
  constructor(t2, s2, e2) {
    this._rotation = 0, this._decorate(t2, s2, e2), this.glyphs = t2, this.bounds = this._createBounds(t2), this.isMultiline = s2.length > 1, this._hasRotation = e2.angle !== 0, this._T = this._createGlyphTransform(this.bounds, e2);
    for (const i2 of t2)
      i2.setTransform(this._T);
  }
  setRotation(t2) {
    if (t2 === 0 && this._rotation === 0)
      return;
    this._rotation = t2;
    const s2 = this._T, e2 = h$3(n$5(), t2);
    o$5(s2, e2, s2);
    for (const i2 of this.glyphs)
      i2.setTransform(this._T);
  }
  _decorate(t2, s2, e2) {
    if (!e2.decoration || e2.decoration === "none" || !t2.length)
      return;
    const i2 = e2.scale, h2 = e2.decoration === "underline" ? _ : p$3, n2 = t2[0].textureBinding;
    for (const o2 of s2) {
      const s3 = o2.startX * i2, e3 = o2.startY * i2, r2 = (o2.width + o2.glyphWidthEnd) * i2;
      t2.push(new T$2(s3, e3 + h2 * i2, M$2(r2, n2), 1));
    }
  }
  get boundsT() {
    const e2 = this.bounds, i2 = r$2(n$4(), e2.x, e2.y);
    if (D$2(i2, i2, this._T), this._hasRotation) {
      const t2 = Math.max(e2.width, e2.height);
      return new e$2(i2[0], i2[1], t2, t2);
    }
    return new e$2(i2[0], i2[1], e2.width, e2.height);
  }
  _createBounds(t2) {
    let s2 = 1 / 0, e2 = 1 / 0, i2 = 0, h2 = 0;
    for (const r2 of t2)
      s2 = Math.min(s2, r2.xTopLeft), e2 = Math.min(e2, r2.yTopLeft), i2 = Math.max(i2, r2.xTopLeft + r2.width), h2 = Math.max(h2, r2.yBottomRight);
    const n2 = i2 - s2, o2 = h2 - e2;
    return new e$2(s2 + n2 / 2, e2 + o2 / 2, n2, o2);
  }
  _createGlyphTransform(s2, e2) {
    const h2 = y$2 * e2.angle, n2 = n$5(), a2 = n$4();
    return i$2(n2, n2, r$2(a2, e2.xOffset, -e2.yOffset)), e2.isCIM ? c$4(n2, n2, h2) : (i$2(n2, n2, r$2(a2, s2.x, s2.y)), c$4(n2, n2, h2), i$2(n2, n2, r$2(a2, -s2.x, -s2.y))), n2;
  }
}
class b$1 {
  constructor(t2, s2, e2, i2, h2, n2) {
    this.glyphWidthEnd = 0, this.startX = 0, this.startY = 0, this.start = Math.max(0, Math.min(s2, e2)), this.end = Math.max(0, Math.max(s2, e2)), this.end < t2.length && (this.glyphWidthEnd = t2[this.end].metrics.width), this.width = i2, this.yMin = h2, this.yMax = n2;
  }
}
const R$2 = (t2) => t2 === 10, L$2 = (t2) => t2 === 32;
function v$3(t2, s2, e2) {
  const i2 = new Array(), h2 = 1 / e2.scale, n2 = e2.maxLineWidth * h2, o2 = s2 ? t2.length - 1 : 0, r2 = s2 ? -1 : t2.length, a2 = s2 ? -1 : 1;
  let c2 = o2, d2 = 0, f2 = 0, l2 = c2, m2 = l2, u2 = 0, g2 = 1 / 0, _2 = 0;
  for (; c2 !== r2; ) {
    const { code: s3, metrics: e3 } = t2[c2], h3 = Math.abs(e3.top);
    if (R$2(s3) || L$2(s3) || (g2 = Math.min(g2, h3), _2 = Math.max(_2, h3 + e3.height)), R$2(s3))
      c2 !== o2 && (i2.push(new b$1(t2, l2, c2 - a2, d2, g2, _2)), g2 = 1 / 0, _2 = 0), d2 = 0, l2 = c2 + a2, m2 = c2 + a2, f2 = 0;
    else if (L$2(s3))
      m2 = c2 + a2, f2 = 0, u2 = e3.advance, d2 += e3.advance;
    else if (d2 > n2) {
      if (m2 !== l2) {
        const s4 = m2 - 2 * a2;
        d2 -= u2, i2.push(new b$1(t2, l2, s4, d2 - f2, g2, _2)), g2 = 1 / 0, _2 = 0, l2 = m2, d2 = f2;
      } else
        i2.push(new b$1(t2, l2, c2 - a2, d2, g2, _2)), g2 = 1 / 0, _2 = 0, l2 = c2, m2 = c2, d2 = 0;
      d2 += e3.advance, f2 += e3.advance;
    } else
      d2 += e3.advance, f2 += e3.advance;
    c2 += a2;
  }
  const p2 = new b$1(t2, l2, c2 - a2, d2, g2, _2);
  return p2.start >= 0 && p2.end < t2.length && i2.push(p2), i2;
}
function j$1(t2, s2) {
  let e2 = 0;
  for (let n2 = 0; n2 < t2.length; n2++) {
    const { width: s3 } = t2[n2];
    e2 = Math.max(s3, e2);
  }
  const i2 = s2.decoration === "underline" ? g : 0, h2 = t2[0].yMin;
  return { x: 0, y: h2, height: t2[t2.length - 1].yMax + s2.lineHeight * (t2.length - 1) + i2 - h2, width: e2 };
}
function A$2(t2, s2, e2) {
  const i2 = e2.scale, h2 = new Array(), n2 = v$3(t2, s2, e2), o2 = j$1(n2, e2), { vAlign: r2, hAlign: a2 } = e2, c2 = r2 === t$1.Baseline ? 1 : 0, f2 = c2 ? 0 : r2 - 1, l2 = (1 - c2) * -o2.y + f2 * (o2.height / 2) + (c2 ? 1 : 0) * -u$3;
  for (let d2 = 0; d2 < n2.length; d2++) {
    const { start: s3, end: o3, width: r3 } = n2[d2];
    let c3 = -1 * (a2 + 1) * (r3 / 2) - x$3;
    const f3 = d2 * e2.lineHeight + l2 - x$3;
    n2[d2].startX = c3, n2[d2].startY = f3;
    for (let e3 = s3; e3 <= o3; e3++) {
      const s4 = t2[e3];
      if (R$2(s4.code))
        continue;
      const n3 = new T$2(c3 + s4.metrics.left, f3 - s4.metrics.top, s4, i2);
      c3 += s4.metrics.advance, h2.push(n3);
    }
  }
  return new B$2(h2, n2, e2);
}
const k$1 = Math.PI / 180, I$1 = 0.04, U$1 = n$5(), v$2 = n$4(), z$1 = 512, P$1 = 50;
function T$1(t2, e2) {
  if (!e2.isWrappable)
    return null;
  const [s2, n2] = a$3(e2);
  return t2[2] > n2 ? [i$3([t2[0], t2[1], n2, t2[3]]), i$3([s2, t2[1], s2 + t2[2] - n2, t2[3]])] : t2[0] < s2 ? [i$3([s2, t2[1], t2[2], t2[3]]), i$3([n2 - (s2 - t2[0]), t2[1], n2, t2[3]])] : null;
}
function A$1(t2, e2, o2, r2, i2, a2, c2) {
  if (!r2 || !o2.symbol)
    return t2[0] = t2[1] = t2[2] = t2[3] = 0, e2[0] = e2[1] = e2[2] = e2[3] = 0, t2;
  const m2 = r2;
  if (!l$3(m2)) {
    c$5(t2, m2);
    let n2 = e2[0];
    n2 === 0 && (n2 = N$1(o2), e2[0] = n2);
    const r3 = i2 * n2 / 2;
    return t2[0] -= r3, t2[1] -= r3, t2[2] += r3, t2[3] += r3, t2;
  }
  {
    const s2 = m2.x, n2 = m2.y;
    o2.symbol.type === "esriTS" && e2[2] === 0 && e2[3] === 0 && Q$1(e2, o2.symbol, o2.mosaicItem), V$1(t2, s2, n2, o2.symbol, e2, i2, a2, c2);
  }
  return t2;
}
function C$1(t2) {
  return t2 === "text" || t2 === "esriTS";
}
function H$1(t2) {
  return t2 === "simple-marker" || t2 === "picture-marker" || t2 === "esriSMS" || t2 === "esriPMS";
}
function W$1(e2) {
  switch (e$5(e2.geometry).type) {
    case "point":
    case "multipoint":
      return 0;
    case "polyline":
      return 1;
    case "polygon":
    case "extent":
      return 2;
  }
  return 0;
}
const q$1 = n$4(), R$1 = n$4(), B$1 = n$4(), E$1 = n$4(), F$1 = n$4(), L$1 = n$4(), O$1 = n$4();
function D$1(t2, e2, s2, n2) {
  r$2(B$1, e2, s2);
  const o2 = t2.paths;
  let r2, i2, a2, f2, u2, p2, g2, y2, b2, M2 = 1 / 0;
  for (let d2 = 0; d2 < o2.length; d2++) {
    const t3 = o2[d2];
    if (!(t3.length < 2))
      for (let o3 = 1; o3 < t3.length; o3++)
        r2 = t3[o3 - 1][0], a2 = t3[o3 - 1][1], i2 = t3[o3][0], f2 = t3[o3][1], u2 = Math.min(r2, i2) - n2, p2 = Math.min(a2, f2) - n2, g2 = Math.max(r2, i2) + n2, y2 = Math.max(a2, f2) + n2, e2 < u2 || e2 > g2 || s2 < p2 || s2 > y2 || (r$2(q$1, r2, a2), r$2(R$1, i2, f2), o$6(E$1, R$1, q$1), o$6(F$1, q$1, B$1), l$2(L$1, E$1, _$1(E$1, F$1) / _$1(E$1, E$1)), o$6(O$1, F$1, L$1), b2 = _$1(O$1, O$1), M2 > b2 && (M2 = b2));
  }
  return Math.sqrt(M2) <= n2;
}
function G$1(t2, e2, s2, n2, r2, i2) {
  let a2, m2;
  const l2 = u$4(s2.xoffset), h2 = u$4(s2.yoffset), b2 = k$1 * s2.angle, M2 = k$1 * i2;
  switch (s2.type) {
    case "esriSMS":
      a2 = m2 = u$4(s2.size);
      break;
    case "esriPMS":
      a2 = u$4(s2.width), m2 = u$4(s2.height);
  }
  r2 < I$1 && (n2 = I$1 * n2 / r2);
  const d2 = n$6(U$1);
  i$2(d2, d2, r$2(v$2, t2, e2)), c$4(d2, d2, M2 - b2), e$6(d2, d2, r$2(v$2, n2, -n2)), i$2(d2, d2, r$2(v$2, l2, -h2));
  const x2 = [0, 0];
  D$2(x2, r$2(v$2, -0.5 * a2, -0.5 * m2), d2);
  const S2 = [0, 0];
  D$2(S2, r$2(v$2, -0.5 * a2, 0.5 * m2), d2);
  const j2 = [0, 0];
  D$2(j2, r$2(v$2, 0.5 * a2, -0.5 * m2), d2);
  const w2 = [0, 0];
  return D$2(w2, r$2(v$2, 0.5 * a2, 0.5 * m2), d2), { rings: [[x2, j2, w2, S2, x2]] };
}
function J$1(t2, e2, s2, n2, r2, i2) {
  const a2 = h$4.getEnvelope(s2.data);
  if (!a2)
    return null;
  r2 < I$1 && (n2 = I$1 * n2 / r2);
  const m2 = u$4(a2.width), l2 = u$4(a2.height), h2 = u$4(a2.x), b2 = u$4(a2.y), M2 = 0 * k$1, d2 = k$1 * i2, x2 = n$6(U$1);
  i$2(x2, x2, r$2(v$2, t2, e2)), c$4(x2, x2, d2 - M2), e$6(x2, x2, r$2(v$2, n2, n2));
  const S2 = [0, 0];
  D$2(S2, r$2(v$2, h2, b2 + l2), x2);
  const j2 = [0, 0];
  D$2(j2, r$2(v$2, h2, b2), x2);
  const z2 = [0, 0];
  D$2(z2, r$2(v$2, h2 + m2, b2 + l2), x2);
  const P2 = [0, 0];
  return D$2(P2, r$2(v$2, h2 + m2, b2), x2), { rings: [[S2, z2, P2, j2, S2]] };
}
function K$1(t2, e2, s2, n2, r2, i2) {
  const a2 = u$4(s2.xoffset), m2 = u$4(s2.yoffset), l2 = k$1 * s2.angle, h2 = k$1 * i2, b2 = n$6(U$1);
  i$2(b2, b2, r$2(v$2, t2, e2)), c$4(b2, b2, h2), e$6(b2, b2, r$2(v$2, r2, -r2));
  const M2 = n2[0] + n2[2] / 2, d2 = n2[1] + n2[3] / 2;
  i$2(b2, b2, r$2(v$2, a2, -m2)), i$2(b2, b2, r$2(v$2, M2, d2)), c$4(b2, b2, l2), i$2(b2, b2, r$2(v$2, -M2, -d2));
  const x2 = [0, 0];
  D$2(x2, r$2(v$2, n2[0], n2[1]), b2);
  const S2 = [0, 0];
  D$2(S2, r$2(v$2, n2[0], n2[1] + n2[3]), b2);
  const j2 = [0, 0];
  D$2(j2, r$2(v$2, n2[0] + n2[2], n2[1]), b2);
  const w2 = [0, 0];
  return D$2(w2, r$2(v$2, n2[0] + n2[2], n2[1] + n2[3]), b2), { rings: [[x2, j2, w2, S2, x2]] };
}
function N$1(t2) {
  switch (t2.symbol.type) {
    case "esriSFS":
    case "esriPFS": {
      const e2 = t2.symbol.outline;
      return e2 ? e2.width : 0;
    }
    case "esriSLS":
      return u$4(t2.symbol.width);
    case "esriSMS":
      return u$4(t2.symbol.size);
    case "esriPMS":
      return u$4(Math.max(t2.symbol.width, t2.symbol.height));
    case "esriTS": {
      const e2 = [0, 0, 0, 0];
      Q$1(e2, t2.symbol, t2.mosaicItem);
      const s2 = Math.max(Math.abs(e2[0]), Math.abs(e2[1]));
      return Math.max(e2[2], e2[3]) + s2;
    }
    case "expanded-cim": {
      const e2 = h$4.getEnvelope(t2.symbol.data);
      return e2.width !== -1 / 0 && e2.height !== -1 / 0 || (e2.width = 10, e2.height = 10, e2.x = 0, e2.y = 0), u$4(Math.sqrt(e2.width * e2.width + e2.height * e2.height));
    }
    case "composite-symbol": {
      if (!t2.symbol.layers.length)
        return 0;
      const e2 = t2.symbol.layers.length - 1;
      return N$1({ symbol: t2.symbol.layers[e2], mosaicItem: null });
    }
    case "label":
    default:
      return 0;
  }
}
function Q$1(t2, e2, s2) {
  if (!s2 || s2.glyphMosaicItems.length === 0)
    return t2;
  const n2 = n$3(e2.text)[1], r2 = s2.glyphMosaicItems, i2 = A$2(r2, n2, { scale: u$4(e2.font.size) / 24, angle: e2.angle, xOffset: e2.xoffset, yOffset: e2.yoffset, hAlign: n$2(e2.horizontalAlignment || "center"), vAlign: r$1(e2.verticalAlignment || "baseline"), maxLineWidth: Math.max(32, Math.min(e2.lineWidth || 512, 512)), lineHeight: 30 * Math.max(0.25, Math.min(e2.lineHeight || 1, 4)), decoration: e2.font.decoration || "none", isCIM: false }).bounds;
  return t2[0] = u$4(i2.x - i2.halfWidth), t2[1] = u$4(i2.y - i2.halfHeight), t2[2] = u$4(i2.width), t2[3] = u$4(i2.height), t2;
}
function V$1(t2, s2, n2, o2, r2, i2, c2, m2) {
  let l2;
  switch (o2.type) {
    case "esriSMS":
    case "esriPMS":
      l2 = G$1(s2, n2, o2, i2, c2, 0);
      break;
    case "esriTS":
      l2 = K$1(s2, n2, o2, r2, i2, 0);
      break;
    case "cim":
    case "CIMSymbolReference":
    case "expanded-cim":
      l2 = J$1(s2, n2, o2, i2, c2, 0);
  }
  let h2, f2, u2 = 0;
  for (let e2 = 0; e2 < l2.rings[0].length - 1; e2++)
    f2 = l2.rings[0][e2], h2 = (s2 - f2[0]) * (s2 - f2[0]) + (n2 - f2[1]) * (n2 - f2[1]), u2 = Math.max(u2, h2);
  u2 = Math.sqrt(u2);
  let p2 = k$2(s2 - u2, m2), g2 = k$2(s2 + u2, m2);
  if (p2 > g2) {
    const t3 = S$2(m2);
    if (t3) {
      const [e2, s3] = t3.valid;
      p2 = e2, g2 = s3;
    }
  }
  return t2[0] = p2, t2[1] = n2 - u2, t2[2] = g2, t2[3] = n2 + u2, t2;
}
var l$1;
let n$1 = l$1 = class extends j$2 {
  writeLevels(e2, s2, i2) {
    for (const t2 in e2) {
      const e3 = this.levels[t2];
      return void (s2.stops = e3);
    }
  }
  clone() {
    return new l$1({ axis: this.axis, field: this.field, valueExpression: this.valueExpression, valueExpressionTitle: this.valueExpressionTitle, maxDataValue: this.maxDataValue, maxSize: n$7(this.maxSize) ? this.maxSize.clone() : this.maxSize, minDataValue: this.minDataValue, minSize: n$7(this.minSize) ? this.minSize.clone() : this.minSize, normalizationField: this.normalizationField, stops: this.stops && this.stops.map((e2) => e2.clone()), target: this.target, useSymbolValue: this.useSymbolValue, valueRepresentation: this.valueRepresentation, valueUnit: this.valueUnit, legendOptions: this.legendOptions && this.legendOptions.clone(), levels: y$4(this.levels) });
  }
};
e$7([y$3()], n$1.prototype, "levels", void 0), e$7([o$7("levels")], n$1.prototype, "writeLevels", null), n$1 = l$1 = e$7([i$4("esri.views.2d.engine.LevelDependentSizeVariable")], n$1);
const o$3 = n$8.getLogger("esri.views.2d.layers.support.clusterUtils");
t$4.add("esri-cluster-arcade-enabled", 1);
const u$2 = t$4("esri-cluster-arcade-enabled"), c$2 = (e2, t2, r2, s2) => {
  const a2 = t2.clone();
  if (!m$1(a2))
    return a2;
  if (r2.fields)
    for (const i2 of r2.fields)
      x$2(e2, i2);
  if ("visualVariables" in a2) {
    const t3 = (a2.visualVariables || []).filter((e3) => e3.valueExpression !== "$view.scale"), n2 = d$1(t3);
    t3.forEach((i2) => {
      i2.type === "rotation" ? i2.field ? i2.field = y$1(e2, i2.field, "avg_angle") : i2.valueExpression && (i2.field = S$1(e2, i2.valueExpression, "avg_angle"), i2.valueExpression = null) : i2.normalizationField ? (i2.field = y$1(e2, i2.field, "norm", i2.normalizationField), i2.normalizationField = null) : i2.field ? i2.field = y$1(e2, i2.field, "avg") : (i2.field = S$1(e2, i2.valueExpression, "avg"), i2.valueExpression = null);
    }), t$5(n2) && !p$2(t3) && (t3.push(f$1(r2, s2)), a2.dynamicClusterSize = true), a2.visualVariables = t3;
  }
  switch (a2.type) {
    case "simple":
      break;
    case "unique-value":
      a2.field ? a2.field = y$1(e2, a2.field, "mode") : a2.valueExpression && (a2.field = S$1(e2, a2.valueExpression, "mode"), a2.valueExpression = null);
      break;
    case "class-breaks":
      a2.normalizationField ? (a2.field = y$1(e2, a2.field, "norm", a2.normalizationField), a2.normalizationField = null) : a2.field ? a2.field = y$1(e2, a2.field, "avg") : (a2.field = S$1(e2, a2.valueExpression, "avg"), a2.valueExpression = null);
  }
  return a2;
}, d$1 = (e2) => {
  for (const i2 of e2)
    if (i2.type === "size")
      return i2;
  return null;
}, p$2 = (e2) => {
  for (const i2 of e2)
    if (i2.field === "cluster_count")
      return true;
  return false;
}, f$1 = (e2, t2) => {
  const r2 = [new l$4({ value: 0, size: 0 }), new l$4({ value: 1 })];
  if (t$5(t2))
    return new j$2({ field: "cluster_count", stops: [...r2, new l$4({ value: 2, size: 0 })] });
  const n2 = Object.keys(t2).reduce((i2, a2) => __spreadProps(__spreadValues({}, i2), { [a2]: [...r2, new l$4({ value: Math.max(2, t2[a2].minValue), size: e2.clusterMinSize }), new l$4({ value: Math.max(3, t2[a2].maxValue), size: e2.clusterMaxSize })] }), {});
  return new n$1({ field: "cluster_count", levels: n2 });
}, m$1 = (e2) => {
  const i2 = (i3) => o$3.error(new s$3("Unsupported-renderer", i3, { renderer: e2 }));
  if (e2.type === "unique-value") {
    if (e2.field2 || e2.field3)
      return i2("FeatureReductionCluster does not support multi-field UniqueValueRenderers"), false;
  } else if (e2.type === "class-breaks") {
    if (e2.normalizationField) {
      const t2 = e2.normalizationType;
      if (t2 !== "field")
        return i2(`FeatureReductionCluster does not support a normalizationType of ${t2}`), false;
    }
  } else if (e2.type !== "simple")
    return i2(`FeatureReductionCluster does not support renderers of type ${e2.type}`), false;
  if (!u$2) {
    if ("valueExpression" in e2 && e2.valueExpression)
      return i2("FeatureReductionCluster does not currently support renderer.valueExpression. Support will be added in a future release"), false;
    if (("visualVariables" in e2 && e2.visualVariables || []).some((e3) => !(!("valueExpression" in e3) || !e3.valueExpression)))
      return i2("FeatureReductionCluster does not currently support visualVariables with a valueExpression. Support will be added in a future release"), false;
  }
  return true;
};
function v$1(e2, i2, t2) {
  switch (e2) {
    case "avg":
    case "avg_angle":
      return `cluster_avg_${i2}`;
    case "mode":
      return `cluster_type_${i2}`;
    case "norm": {
      const e3 = t2, r2 = "field", s2 = i2.toLowerCase() + ",norm:" + r2 + "," + e3.toLowerCase();
      return "cluster_avg_" + x$4(s2);
    }
  }
}
function x$2(e2, i2) {
  const { name: t2, outStatistic: s2 } = i2, { onStatisticField: a2, onStatisticValueExpression: l2, statisticType: u2 } = s2;
  if (l2) {
    const i3 = x$4(l2.toLowerCase());
    e2.push({ name: t2, outStatistic: { onStatisticField: i3, onStatisticValueExpression: l2, statisticType: u2 } });
  } else
    a2 ? e2.push({ name: t2, outStatistic: { onStatisticField: a2, statisticType: u2 } }) : o$3.error(new s$3("mapview-unsupported-field", "Unable to handle field", { field: i2 }));
}
function S$1(e2, i2, t2) {
  const r2 = x$4(i2), s2 = t2 === "mode" ? `cluster_type_${r2}` : `cluster_avg_${r2}`;
  return e2.some((e3) => e3.name === s2) || e2.push({ name: s2, outStatistic: { onStatisticField: r2, onStatisticValueExpression: i2, statisticType: t2 } }), s2;
}
function y$1(e2, i2, t2, r2) {
  if (i2 === "cluster_count" || e2.some((e3) => e3.name === i2))
    return i2;
  const s2 = v$1(t2, i2, r2);
  return e2.some((e3) => e3.name === s2) || (t2 === "norm" ? e2.push({ name: s2, outStatistic: { onStatisticField: i2, onStatisticNormalizationField: r2, statisticType: t2 } }) : e2.push({ name: s2, outStatistic: { onStatisticField: i2, statisticType: t2 } })), s2;
}
function e$1(e2) {
  if (!e2)
    return A$3.NONE;
  let r2 = 0;
  for (const i2 of e2)
    if (i2.type === "size") {
      const t2 = o$8(i2);
      r2 |= t2, i2.target === "outline" && (r2 |= t2 << 4);
    } else
      i2.type === "color" ? r2 |= A$3.COLOR : i2.type === "opacity" ? r2 |= A$3.OPACITY : i2.type === "rotation" && (r2 |= A$3.ROTATION);
  return r2;
}
const s$1 = { "simple-marker": 1, "picture-marker": 1, text: 0, "simple-line": 0, "simple-fill": 0, "picture-fill": 0, cim: 1, "web-style": 1 }, o$2 = 0.707;
function a$1(t2) {
  if (!("visualVariables" in t2))
    return 0;
  if (!t2.hasVisualVariables("size"))
    return 0;
  const e2 = t2.getVisualVariablesForType("size");
  if (!e2[0])
    return 0;
  const i2 = e2[0];
  if (i2.transformationType === "stops")
    return i2.stops.map((t3) => t3.size).reduce(x$1, 0);
  if (i2.transformationType === "clamped-linear") {
    let t3 = -1 / 0, e3 = -1 / 0;
    return t3 = typeof i2.maxSize == "number" ? i2.maxSize : i2.maxSize.stops.map((t4) => t4.size).reduce(x$1, 0), e3 = typeof i2.minSize == "number" ? i2.minSize : i2.minSize.stops.map((t4) => t4.size).reduce(x$1, 0), Math.max(t3, e3);
  }
  return i2.transformationType === "real-world-size" ? 30 : void 0;
}
function m(t2) {
  return t2.type in s$1;
}
function u$1(e2, i2, r2) {
  return __async(this, null, function* () {
    if (!e2 || r2 && r2.type === "cluster")
      return 0;
    if (e2.type === "heatmap")
      return Math.round(3 * e2.blurRadius);
    if (e2.type === "dot-density")
      return 0;
    if (e2.type === "dictionary")
      return i2 === "esriGeometryPoint" || i2 === "esriGeometryMultipoint" ? 100 : 200;
    const n2 = e2.getSymbols(), s2 = a$1(e2), o2 = [];
    for (const t2 of n2)
      o2.push(d(t2, s2));
    const m2 = yield Promise.all(o2);
    return u$4(m2.reduce(x$1, 0));
  });
}
const c$1 = [0, 0, 0, 0];
function l(t2, e2) {
  return t2 == null ? e2 : t2;
}
function p$1(t2, e2) {
  return t2.outline == null ? e2 : l(t2.outline.width, e2);
}
const f = { sdf: true, code: 99, metrics: k$3.metrics, rect: new t$6(0, 0, 24, 24), page: 0, textureBinding: 2 };
function h$1(t2) {
  const e2 = t2.text && t2.text.length;
  if (!e2)
    return { glyphMosaicItems: [f] };
  const i2 = [];
  for (let r2 = 0; r2 < e2; r2++)
    i2.push(__spreadProps(__spreadValues({}, f), { code: t2.text.charCodeAt(r2) }));
  return { glyphMosaicItems: i2 };
}
function y(t2, e2) {
  return __async(this, null, function* () {
    if (t2.type === "simple-marker") {
      const i2 = Math.max(l(t2.size, 12), e2);
      return M$1(t2) + i2 * o$2;
    }
    if (t2.type === "picture-marker") {
      const i2 = Math.max(l(t2.height, 12), e2), r2 = l(t2.width, 12) * (i2 / l(t2.height, 12)) / 2, n2 = i2 / 2;
      return M$1(t2) + Math.sqrt(r2 * r2 + n2 * n2);
    }
    if (t2.type === "text") {
      const e3 = h$1(t2);
      Q$1(c$1, t2.toJSON(), e3);
      const i2 = Math.abs(c$1[0]), r2 = Math.abs(c$1[1]), s2 = c$1[2], o2 = c$1[3];
      return Math.max(i2, r2) + Math.max(s2, o2);
    }
    if (t2.type === "simple-line") {
      const i2 = t2, r2 = Math.max(l(i2.width, 0.75), e2) / 2;
      return i2.marker ? Math.max(6 * i2.width, 2 * e2) : r2;
    }
    if (t2.type === "simple-fill" || t2.type === "picture-fill")
      return Math.max(p$1(t2, 0), e2) / 2;
    if (t2.type === "cim") {
      const e3 = h$4.getEnvelope(t2.data);
      return e3 ? Math.sqrt(e3.width * e3.width + e3.height * e3.height) : 0;
    }
    return t2.type === "web-style" ? y(yield t2.fetchCIMSymbol(), e2) : 0;
  });
}
function d(t2, e2) {
  return __async(this, null, function* () {
    return m(t2) ? Math.min(yield y(t2, e2), 75) : 0;
  });
}
function M$1(t2) {
  const e2 = l(t2.xoffset, 0), i2 = l(t2.yoffset, 0);
  return Math.sqrt(e2 * e2 + i2 * i2);
}
function x$1(t2, e2) {
  return Math.max(t2, e2);
}
const o$1 = 8, t = o$1 - 2, r = n$8.getLogger("esri.renderers.visualVariables.support.utils"), s = (e2) => {
  if (!("visualVariables" in e2) || !e2.visualVariables || !e2.visualVariables.length)
    return e2;
  const l2 = e2.clone(), o2 = l2.visualVariables.map((e3) => n(e3) ? i(e3) : e3);
  return l2.visualVariables = o2, l2;
};
function a(e2) {
  return e2.map((e3) => n(e3) ? i(e3.clone()) : e3);
}
function n(e2) {
  return (e2.type === "size" || e2.type === "color" || e2.type === "opacity") && e2.stops != null;
}
function i(e2) {
  return e2.stops = b(e2.type, e2.stops), e2;
}
function u(e2, l2, o2) {
  return (1 - o2) * e2 + o2 * l2;
}
function c(e2, o2) {
  const [r2, ...s2] = o2, a2 = s2.pop(), n2 = s2[0].value, i2 = s2[s2.length - 1].value, c2 = (i2 - n2) / t, p2 = [];
  for (let t2 = n2; t2 < i2; t2 += c2) {
    let r3 = 0;
    for (; t2 >= s2[r3].value; )
      r3++;
    const a3 = s2[r3], n3 = o2[r3 - 1], i3 = t2 - n3.value, c3 = a3.value === n3.value ? 1 : i3 / (a3.value - n3.value);
    if (e2 === "color") {
      const e3 = s2[r3], l2 = o2[r3 - 1], a4 = e3.color.clone();
      a4.r = u(l2.color.r, a4.r, c3), a4.g = u(l2.color.g, a4.g, c3), a4.b = u(l2.color.b, a4.b, c3), a4.a = u(l2.color.a, a4.a, c3), p2.push({ value: t2, color: a4, label: e3.label });
    } else if (e2 === "size") {
      const e3 = s2[r3], a4 = o2[r3 - 1], n4 = o$9(e3.size), i4 = u(o$9(a4.size), n4, c3);
      p2.push({ value: t2, size: i4, label: e3.label });
    } else {
      const e3 = s2[r3], l2 = u(o2[r3 - 1].opacity, e3.opacity, c3);
      p2.push({ value: t2, opacity: l2, label: e3.label });
    }
  }
  return [r2, ...p2, a2];
}
function p(e2) {
  const [l2, ...o2] = e2, r2 = o2.pop();
  for (; o2.length > t; ) {
    let e3 = 0, l3 = 0;
    for (let t2 = 1; t2 < o2.length; t2++) {
      const r3 = o2[t2 - 1], s2 = o2[t2], a2 = Math.abs(s2.value - r3.value);
      a2 > l3 && (l3 = a2, e3 = t2);
    }
    o2.splice(e3, 1);
  }
  return [l2, ...o2, r2];
}
function b(e2, l2) {
  return l2.length <= o$1 ? l2 : (r.warn(`Found ${l2.length} Visual Variable stops, but MapView only supports ${o$1}. Displayed stops will be simplified.`), l2.length > 2 * o$1 ? c(e2, l2) : p(l2));
}
const o = new t$7({ esriGeometryPoint: "point", esriGeometryMultipoint: "multipoint", esriGeometryPolyline: "polyline", esriGeometryPolygon: "polygon", esriGeometryMultiPatch: "multipatch", mesh: "mesh" });
function e(t2) {
  return o.toJSON(t2);
}
const h = n$8.getLogger("esri.views.2d.layers.features.schemaUtils"), x = "ValidationError", v = { esriGeometryPoint: ["above-right", "above-center", "above-left", "center-center", "center-left", "center-right", "below-center", "below-left", "below-right"], esriGeometryPolygon: ["always-horizontal"], esriGeometryPolyline: ["center-along"], esriGeometryMultipoint: null };
function w(e2) {
  return f$2(e2);
}
function E(e2) {
  return e2;
}
function I(e2) {
  switch (e2.type) {
    case "line-marker":
      var t2;
      return { type: "line-marker", color: (t2 = e2.color) == null ? void 0 : t2.toJSON(), placement: e2.placement, style: e2.style };
    default:
      return i$5(e2.toJSON()).toJSON();
  }
}
function S(e2, t2, i2) {
  if (!e2)
    return null;
  let n2 = 0, l2 = false, s2 = 0;
  switch (r$3(t2) && (s2 = a$1(t2), "visualVariables" in t2 && (n2 = e$1(t2.visualVariables || []), l2 = t2.type === "dot-density")), e2.type) {
    case "simple-fill":
    case "picture-fill":
      return F(e2, n2, l2, i2);
    case "simple-marker":
    case "picture-marker":
      return j(e2, n2, s2, i2);
    case "simple-line":
      return z(e2, n2, i2);
    case "text":
      return V(e2, n2, s2, i2);
    case "label":
      return N(e2, n2, i2);
    case "cim":
      return { type: "cim", rendererKey: n2, data: e2.data, maxVVSize: s2 };
    case "web-style":
      return __spreadProps(__spreadValues({}, I(e2)), { type: "web-style", hash: e2.hash(), rendererKey: n2, maxVVSize: s2 });
    default:
      throw new Error(`symbol not supported ${e2.type}`);
  }
}
function F(e2, t2, r2, i2) {
  const n2 = A$4(E$2.FILL, t2, false, r2), l2 = i2 ? w(n2) : n2, s2 = e2.clone(), a2 = s2.outline;
  s2.outline = null;
  const o2 = [], u2 = __spreadValues({ materialKey: l2, hash: s2.hash() }, I(s2));
  if (o2.push(u2), a2) {
    const e3 = A$4(E$2.LINE, t2, true, false), r3 = __spreadValues({ materialKey: i2 ? w(e3) : e3, hash: a2.hash() }, I(a2));
    o2.push(r3);
  }
  return { type: "composite-symbol", layers: o2, hash: o2.reduce((e3, t3) => t3.hash + e3, "") };
}
function z(e2, t2, r2) {
  const i2 = A$4(E$2.LINE, t2, false, false), n2 = r2 ? w(i2) : i2, l2 = e2.clone(), s2 = l2.marker;
  l2.marker = null;
  const a2 = [];
  if (a2.push(__spreadValues({ materialKey: n2, hash: l2.hash() }, I(l2))), s2) {
    var o2;
    const e3 = A$4(E$2.MARKER, t2, false, false), i3 = r2 ? w(e3) : e3;
    s2.color = (o2 = s2.color) != null ? o2 : l2.color, a2.push(__spreadValues({ materialKey: i3, hash: s2.hash(), lineWidth: l2.width }, I(s2)));
  }
  return { type: "composite-symbol", layers: a2, hash: a2.reduce((e3, t3) => t3.hash + e3, "") };
}
function j(e2, t2, r2, i2) {
  const n2 = A$4(E$2.MARKER, t2, false, false), l2 = i2 ? w(n2) : n2, s2 = I(e2);
  return __spreadProps(__spreadValues({ materialKey: l2, hash: e2.hash() }, s2), { angle: e2.angle, maxVVSize: r2 });
}
function V(e2, t2, r2, i2) {
  const n2 = A$4(E$2.TEXT, t2, false, false), l2 = i2 ? w(n2) : n2, s2 = I(e2);
  return __spreadProps(__spreadValues({ materialKey: l2, hash: e2.hash() }, s2), { angle: e2.angle, maxVVSize: r2 });
}
function T(e2, t2) {
  const r2 = e2.labelPlacement, i2 = v[t2];
  if (!e2.symbol)
    return h.warn("No LabelClass symbol specified."), true;
  if (!i2)
    return h.error(new s$3("mapview-labeling:unsupported-geometry-type", `Unable to create labels for Feature Layer, ${t2} is not supported`)), true;
  if (!i2.some((e3) => e3 === r2)) {
    const n2 = i2[0];
    r2 && h.warn(`Found invalid label placement type ${r2} for ${t2}. Defaulting to ${n2}`), e2.labelPlacement = n2;
  }
  return false;
}
function R(e2, r2) {
  const i2 = y$4(e2);
  return i2.some((e3) => T(e3, r2)) ? [] : i2;
}
function N(e2, t2, r2) {
  const i2 = A$4(E$2.LABEL, t2, false, false, e2.labelPlacement);
  return __spreadProps(__spreadValues({ materialKey: r2 ? w(i2) : i2, hash: e2.hash() }, e2.toJSON()), { labelPlacement: e2.labelPlacement });
}
function k(t2) {
  return t$4("esri-2d-update-debug") && console.debug("Created new schema", K(t2, true)), K(t2);
}
function K(e2, t2 = false) {
  try {
    var r2, i2;
    const n2 = C(e2, t2), l2 = {};
    n2.map((t3) => M(l2, e2, t3));
    return { source: { definitionExpression: e2.definitionExpression, fields: e2.fields.map((e3) => e3.toJSON()), gdbVersion: e2.gdbVersion, historicMoment: (r2 = e2.historicMoment) == null ? void 0 : r2.getTime(), outFields: e2.availableFields, pixelBuffer: e2.pixelBuffer, spatialReference: e2.spatialReference.toJSON(), timeExtent: (i2 = e2.timeExtent) == null ? void 0 : i2.toJSON() }, attributes: { fields: {}, indexCount: 0 }, processors: n2, targets: l2 };
  } catch (n2) {
    if (n2.fieldName === x)
      return h.error(n2), null;
    throw n2;
  }
}
function M(e2, t2, r2) {
  switch (r2.target) {
    case "feature":
      return void L(e2, J(t2), r2);
    case "aggregate": {
      const i2 = t2.featureReduction;
      if (i2.type === "selection")
        throw new s$3(x, "Mapview does not support `selection` reduction type", i2);
      return L(e2, J(t2), r2), void B(e2, i2, r2);
    }
  }
}
function O(e2, t2) {
  for (const r2 in t2) {
    const i2 = t2[r2];
    if (i2.target !== e2.name)
      continue;
    const n2 = e2.attributes[r2];
    n2 ? (n2.context.mesh = n2.context.mesh || i2.context.mesh, n2.context.storage = n2.context.storage || i2.context.storage) : e2.attributes[r2] = i2;
  }
  return e2;
}
function J(e2) {
  var t2, r2, i2, n2, l2;
  return [(t2 = (r2 = e2.filter) == null ? void 0 : r2.toJSON()) != null ? t2 : null, (i2 = (n2 = e2.effect) == null || (l2 = n2.filter) == null ? void 0 : l2.toJSON()) != null ? i2 : null];
}
function L(e2, t2, r2) {
  return e2.feature || (e2.feature = { name: "feature", input: "source", filters: t2, attributes: {} }), O(e2.feature, r2.attributes.fields), e2;
}
function B(e2, t2, r2) {
  return e2.aggregate || (e2.aggregate = { name: "aggregate", input: "feature", filters: null, attributes: {}, params: { clusterRadius: u$4(t2.clusterRadius / 2), clusterPixelBuffer: 64 * Math.ceil(u$4(t2.clusterMaxSize) / 64), fields: r2.aggregateFields } }), O(e2.aggregate, r2.attributes.fields), e2;
}
function P(e2, t2) {
  return t2.field ? U(e2, __spreadProps(__spreadValues({}, t2), { type: "field", field: t2.field })) : t2.valueExpression ? U(e2, __spreadProps(__spreadValues({}, t2), { type: "expression", valueExpression: t2.valueExpression })) : { field: null, fieldIndex: null };
}
function U(e2, t2) {
  switch (t2.type) {
    case "expression": {
      const r2 = E(t2.valueExpression);
      if (!e2.fields[r2]) {
        const i2 = e2.indexCount++;
        e2.fields[r2] = __spreadProps(__spreadValues({}, t2), { name: r2, fieldIndex: i2 });
      }
      return { fieldIndex: e2.fields[r2].fieldIndex };
    }
    case "label-expression": {
      const r2 = E(JSON.stringify(t2.label));
      if (!e2.fields[r2]) {
        const i2 = e2.indexCount++;
        e2.fields[r2] = __spreadProps(__spreadValues({}, t2), { name: r2, fieldIndex: i2 });
      }
      return { fieldIndex: e2.fields[r2].fieldIndex };
    }
    case "field": {
      const r2 = t2.field;
      return t2.target === "aggregate" && e2.fields[r2] || (e2.fields[r2] = __spreadProps(__spreadValues({}, t2), { name: r2 })), { field: r2 };
    }
    case "statistic":
      return e2.fields[t2.name] = __spreadValues({}, t2), { field: t2.name };
  }
}
function C(e2, t2 = false) {
  const r2 = new Array();
  let i2 = 0;
  return r2.push($(e2, i2++, t2)), r2;
}
function D(e2, t2, r2, i2, n2, l2 = false) {
  const s2 = U(t2, { type: "label-expression", target: i2, context: { mesh: true }, resultType: "string", label: { labelExpression: r2.labelExpression, labelExpressionInfo: r2.labelExpressionInfo ? { expression: r2.labelExpressionInfo.expression } : null, symbol: !!r2.symbol, where: r2.where } }), { fieldIndex: a2 } = s2;
  return __spreadProps(__spreadValues({}, S(r2, e2, l2)), { fieldIndex: a2, target: i2, index: n2 });
}
function $(e$12, t2, r2 = false) {
  const i2 = { indexCount: 0, fields: {} }, n2 = "featureReduction" in e$12 && e$12.featureReduction, s2 = n2 ? "aggregate" : "feature";
  switch (e$12.renderer.type) {
    case "heatmap": {
      const { blurRadius: t3, fieldOffset: r3, field: n3 } = e$12.renderer;
      return { type: "heatmap", aggregateFields: [], attributes: i2, target: s2, storage: null, mesh: { blurRadius: t3, fieldOffset: r3, field: P(i2, { target: s2, field: n3, resultType: "numeric" }).field } };
    }
    default: {
      const t3 = [], a2 = s2 === "aggregate" ? c$2(t3, e$12.renderer, n2, null) : e$12.renderer;
      q(i2, t3);
      const d2 = W(i2, s2, a2, r2);
      let c2 = null;
      const f2 = A(i2, s2, a2), p2 = e(e$12.geometryType);
      let m2 = e$12.labelsVisible && e$12.labelingInfo || [], y2 = [];
      if (n2) {
        if (n2.type === "selection")
          throw new s$3(x, "Mapview does not support `selection` reduction type", n2);
        if (n2.symbol) {
          const e2 = new m$3({ symbol: n2.symbol, visualVariables: "visualVariables" in a2 ? a2.visualVariables : null });
          c2 = W(i2, s2, e2, r2);
        }
        y2 = n2 && n2.labelsVisible && n2.labelingInfo || [];
      }
      m2 = R(m2, p2), y2 = R(y2, p2);
      let g2 = 0;
      const h2 = [...m2.map((e2) => D(a2, i2, e2, "feature", g2++, r2)), ...y2.map((e2) => D(a2, i2, e2, "aggregate", g2++, r2))];
      return { type: "symbol", target: s2, attributes: i2, aggregateFields: t3, storage: f2, mesh: { matcher: d2, labels: h2, aggregateMatcher: c2 } };
    }
  }
}
function q(e2, t2) {
  const r2 = { mesh: true, storage: true };
  for (const i2 of t2) {
    const { name: t3, outStatistic: n2 } = i2, { statisticType: l2, onStatisticField: s2 } = n2;
    let a2 = null, o2 = null, u2 = null;
    const d2 = "numeric", c2 = "feature";
    if ("onStatisticValueExpression" in n2) {
      o2 = U(e2, { type: "expression", target: c2, valueExpression: n2.onStatisticValueExpression, resultType: d2 }).fieldIndex;
    } else if ("onStatisticNormalizationField" in n2) {
      a2 = U(e2, { type: "field", target: c2, field: s2, resultType: d2 }).field, u2 = n2.onStatisticNormalizationField;
    } else {
      a2 = U(e2, { type: "field", target: c2, field: s2, resultType: d2 }).field;
    }
    U(e2, { type: "statistic", target: "aggregate", name: t3, context: r2, inField: a2, inNormalizationField: u2, inFieldIndex: o2, statisticType: l2 });
  }
}
function A(e2, t2, r2) {
  switch (r2.type) {
    case "dot-density":
      return G(e2, t2, r2.attributes);
    case "simple":
    case "class-breaks":
    case "unique-value":
      return H(e2, t2, r2.visualVariables);
    case "heatmap":
    case "dictionary":
      return null;
  }
}
function G(e2, t2, r2) {
  if (!r2 || !r2.length)
    return { type: "dot-density", mapping: [], target: t2 };
  return { type: "dot-density", mapping: r2.map((r3, i2) => {
    const { field: n2, fieldIndex: l2 } = P(e2, { valueExpression: r3.valueExpression, field: r3.field, resultType: "numeric", target: t2 });
    return { binding: i2, field: n2, fieldIndex: l2 };
  }), target: t2 };
}
function H(e2, t2, r2) {
  if (!r2 || !r2.length)
    return { type: "visual-variable", mapping: [], target: t2 };
  const i2 = { storage: true }, n2 = "numeric";
  return { type: "visual-variable", mapping: a(r2).map((r3) => {
    var l2;
    const s2 = S$3(r3.type), { field: a2, fieldIndex: o2 } = P(e2, { target: t2, valueExpression: r3.valueExpression, field: r3.field, context: i2, resultType: n2 });
    switch (r3.type) {
      case "size":
        return r3.valueExpression === "$view.scale" ? null : { type: "size", binding: s2, field: a2, fieldIndex: o2, normalizationField: P(e2, { target: t2, field: r3.normalizationField, context: i2, resultType: n2 }).field, valueRepresentation: (l2 = r3.valueRepresentation) != null ? l2 : null };
      case "color":
        return { type: "color", binding: s2, field: a2, fieldIndex: o2, normalizationField: P(e2, { target: t2, field: r3.normalizationField, context: i2, resultType: n2 }).field };
      case "opacity":
        return { type: "opacity", binding: s2, field: a2, fieldIndex: o2, normalizationField: P(e2, { target: t2, field: r3.normalizationField, context: i2, resultType: n2 }).field };
      case "rotation":
        return { type: "rotation", binding: s2, field: a2, fieldIndex: o2 };
    }
  }).filter((e3) => e3), target: t2 };
}
function W(e2, t2, r2, n2 = false) {
  const l2 = c$6(e2, { indexCount: 0, fields: {} });
  switch (r2.type) {
    case "simple":
    case "dot-density":
      return X(l2, r2, r2.type === "dot-density", n2);
    case "class-breaks":
      return Q(l2, t2, r2, n2);
    case "unique-value":
      return Y(l2, t2, r2, n2);
    case "dictionary":
      return Z(l2, r2, n2);
  }
}
function X(e2, t2, r2, i2 = false) {
  const n2 = t2.getSymbols();
  return { type: "simple", symbol: S(n2.length ? n2[0] : null, t2, i2), isDotDensity: r2 };
}
function Q(e2, t2, r2, i2 = false) {
  const n2 = { mesh: true, use: "renderer.field" }, l2 = r2.backgroundFillSymbol, { field: s2, fieldIndex: a2 } = P(e2, { target: t2, field: r2.field, valueExpression: r2.valueExpression, resultType: "numeric", context: n2 }), o2 = r2.normalizationType, u2 = o2 === "log" ? "esriNormalizeByLog" : o2 === "percent-of-total" ? "esriNormalizeByPercentOfTotal" : o2 === "field" ? "esriNormalizeByField" : null, d2 = r2.classBreakInfos.map((e3) => ({ symbol: S(e3.symbol, r2, i2), min: e3.minValue, max: e3.maxValue })).sort((e3, t3) => e3.min - t3.min);
  return { type: "interval", attributes: e2.fields, field: s2, fieldIndex: a2, backgroundFillSymbol: S(l2, r2, i2), defaultSymbol: S(r2.defaultSymbol, r2, i2), intervals: d2, normalizationField: r2.normalizationField, normalizationTotal: r2.normalizationTotal, normalizationType: u2, isMaxInclusive: r2.isMaxInclusive };
}
function Y(e2, t2, r2, i2 = false) {
  const n2 = [], s2 = r2.backgroundFillSymbol, a2 = { target: t2, context: { mesh: true }, resultType: "string" };
  if (r2.field && typeof r2.field != "string")
    throw new s$3(x, "Expected renderer.field to be a string", r2);
  const { field: o2, fieldIndex: u2 } = P(e2, __spreadProps(__spreadValues({}, a2), { field: r2.field, valueExpression: r2.valueExpression }));
  for (const l2 of r2.uniqueValueInfos)
    n2.push({ value: "" + l2.value, symbol: S(l2.symbol, r2, i2) });
  return { type: "map", attributes: e2.fields, field: o2, fieldIndex: u2, field2: P(e2, __spreadProps(__spreadValues({}, a2), { field: r2.field2 })).field, field3: P(e2, __spreadProps(__spreadValues({}, a2), { field: r2.field3 })).field, fieldDelimiter: r2.fieldDelimiter, backgroundFillSymbol: S(s2, r2), defaultSymbol: S(r2.defaultSymbol, r2), map: n2 };
}
function Z(e2, t2, r2 = false) {
  return { type: "dictionary", renderer: t2.toJSON() };
}
export { A$1 as A, C$1 as C, D$1 as D, G$1 as G, H$1 as H, J$1 as J, K$1 as K, P$1 as P, S, T$1 as T, W$1 as W, W as a, A$2 as b, n$2 as c, a$2 as d, c$3 as e, e as f, d$1 as g, f$1 as h, c$2 as i, s as j, k, m$1 as m, n$3 as n, o$4 as o, r$1 as r, s$2 as s, u$1 as u, z$1 as z };
