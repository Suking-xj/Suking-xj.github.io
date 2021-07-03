var __pow = Math.pow;
import { a4 as n$2, ae as e$1, af as y$1, eZ as c$2, ag as i$1, dA as a$1, aa as s$1, a0 as t, bT as y$2 } from "./vendor.74d5941c.js";
var n$1;
const p$1 = n$2.getLogger("esri.layers.support.PixelBlock");
let c$1 = n$1 = class extends a$1 {
  constructor(t2) {
    super(t2), this.width = null, this.height = null, this.pixelType = "f32", this.validPixelCount = null, this.mask = null, this.maskIsAlpha = false, this.pixels = null, this.statistics = null;
  }
  static createEmptyBand(t2, e2) {
    return new (n$1.getPixelArrayConstructor(t2))(e2);
  }
  static getPixelArrayConstructor(t2) {
    let e2;
    switch (t2) {
      case "u1":
      case "u2":
      case "u4":
      case "u8":
        e2 = Uint8Array;
        break;
      case "u16":
        e2 = Uint16Array;
        break;
      case "u32":
        e2 = Uint32Array;
        break;
      case "s8":
        e2 = Int8Array;
        break;
      case "s16":
        e2 = Int16Array;
        break;
      case "s32":
        e2 = Int32Array;
        break;
      case "u32":
        e2 = Uint32Array;
        break;
      case "f32":
        e2 = Float32Array;
        break;
      case "f64":
        e2 = Float64Array;
        break;
      case "c64":
      case "c128":
      case "unknown":
        e2 = Float32Array;
    }
    return e2;
  }
  castPixelType(t2) {
    if (!t2)
      return "f32";
    let e2 = t2.toLowerCase();
    return ["u1", "u2", "u4"].indexOf(e2) > -1 ? e2 = "u8" : ["unknown", "u8", "s8", "u16", "s16", "u32", "s32", "f32", "f64"].indexOf(e2) === -1 && (e2 = "f32"), e2;
  }
  getPlaneCount() {
    return this.pixels && this.pixels.length;
  }
  addData(t2) {
    if (!t2.pixels || t2.pixels.length !== this.width * this.height)
      throw new s$1("pixelblock:invalid-or-missing-pixels", "add data requires valid pixels array that has same length defined by pixel block width * height");
    this.pixels || (this.pixels = []), this.statistics || (this.statistics = []), this.pixels.push(t2.pixels), this.statistics.push(t2.statistics || { minValue: null, maxValue: null });
  }
  getAsRGBA() {
    const t2 = new ArrayBuffer(this.width * this.height * 4);
    switch (this.pixelType) {
      case "s8":
      case "s16":
      case "u16":
      case "s32":
      case "u32":
      case "f32":
      case "f64":
        this._fillFromNon8Bit(t2);
        break;
      default:
        this._fillFrom8Bit(t2);
    }
    return new Uint8ClampedArray(t2);
  }
  getAsRGBAFloat() {
    const t2 = new Float32Array(this.width * this.height * 4);
    return this._fillFrom32Bit(t2), t2;
  }
  updateStatistics() {
    this.statistics = this.pixels.map((t3) => this._calculateBandStatistics(t3, this.mask));
    const t2 = this.mask;
    let e2 = 0;
    if (t2)
      for (let s2 = 0; s2 < t2.length; s2++)
        t2[s2] && e2++;
    else
      e2 = this.width * this.height;
    this.validPixelCount = e2;
  }
  clamp(t2) {
    if (!t2 || t2 === "f64" || t2 === "f32")
      return;
    let e2;
    switch (t2) {
      case "u8":
        e2 = [0, 255];
        break;
      case "u16":
        e2 = [0, 65535];
        break;
      case "u32":
        e2 = [0, 4294967295];
        break;
      case "s8":
        e2 = [-128, 127];
        break;
      case "s16":
        e2 = [-32768, 32767];
        break;
      case "s32":
        e2 = [-2147483648, 2147483647];
        break;
      default:
        e2 = [-34e38, 34e38];
    }
    const [s2, i2] = e2, r2 = this.pixels, l2 = this.width * this.height, a2 = r2.length;
    let o2, h2, p2;
    const c2 = [];
    for (let u2 = 0; u2 < a2; u2++) {
      p2 = n$1.createEmptyBand(t2, l2), o2 = r2[u2];
      for (let t3 = 0; t3 < l2; t3++)
        h2 = o2[t3], p2[t3] = h2 > i2 ? i2 : h2 < s2 ? s2 : h2;
      c2.push(p2);
    }
    this.pixels = c2, this.pixelType = t2;
  }
  extractBands(t$1) {
    if (t(t$1) || t$1.length === 0 || this.pixels == null || this.pixels.length === 0)
      return this;
    const e2 = this.pixels.length, i2 = t$1.some((t2) => t2 >= this.pixels.length), r2 = e2 === t$1.length && !t$1.some((t2, e3) => t2 !== e3);
    return i2 || r2 ? this : new n$1({ pixelType: this.pixelType, width: this.width, height: this.height, mask: this.mask, validPixelCount: this.validPixelCount, maskIsAlpha: this.maskIsAlpha, pixels: t$1.map((t2) => this.pixels[t2]), statistics: this.statistics && t$1.map((t2) => this.statistics[t2]) });
  }
  clone() {
    const t2 = new n$1({ width: this.width, height: this.height, pixelType: this.pixelType, maskIsAlpha: this.maskIsAlpha, validPixelCount: this.validPixelCount });
    let s2;
    this.mask && (this.mask instanceof Uint8Array ? t2.mask = new Uint8Array(this.mask) : t2.mask = this.mask.slice(0));
    const i2 = n$1.getPixelArrayConstructor(this.pixelType);
    if (this.pixels && this.pixels.length > 0) {
      t2.pixels = [];
      const e2 = this.pixels[0].slice;
      for (s2 = 0; s2 < this.pixels.length; s2++)
        t2.pixels[s2] = e2 ? this.pixels[s2].slice(0, this.pixels[s2].length) : new i2(this.pixels[s2]);
    }
    if (this.statistics)
      for (t2.statistics = [], s2 = 0; s2 < this.statistics.length; s2++)
        t2.statistics[s2] = y$2(this.statistics[s2]);
    return t2;
  }
  _fillFrom8Bit(t2) {
    const { mask: e2, maskIsAlpha: s2, pixels: i2 } = this;
    if (!t2 || !i2 || !i2.length)
      return void p$1.error("getAsRGBA()", "Unable to convert to RGBA. The input pixel block is empty.");
    let r2, l2, a2, o2;
    r2 = l2 = a2 = i2[0], i2.length >= 3 ? (l2 = i2[1], a2 = i2[2]) : i2.length === 2 && (l2 = i2[1]);
    const h2 = new Uint32Array(t2), n2 = this.width * this.height;
    if (r2.length === n2)
      if (e2 && e2.length === n2)
        if (s2)
          for (o2 = 0; o2 < n2; o2++)
            e2[o2] && (h2[o2] = e2[o2] << 24 | a2[o2] << 16 | l2[o2] << 8 | r2[o2]);
        else
          for (o2 = 0; o2 < n2; o2++)
            e2[o2] && (h2[o2] = 255 << 24 | a2[o2] << 16 | l2[o2] << 8 | r2[o2]);
      else
        for (o2 = 0; o2 < n2; o2++)
          h2[o2] = 255 << 24 | a2[o2] << 16 | l2[o2] << 8 | r2[o2];
    else
      p$1.error("getAsRGBA()", "Unable to convert to RGBA. The pixelblock is invalid.");
  }
  _fillFromNon8Bit(t2) {
    const { pixels: e2, mask: s2, statistics: i2 } = this;
    if (!t2 || !e2 || !e2.length)
      return void p$1.error("getAsRGBA()", "Unable to convert to RGBA. The input pixel block is empty.");
    const r2 = this.pixelType;
    let l2 = 1, a2 = 0, o2 = 1;
    if (i2 && i2.length > 0)
      a2 = i2.map((t3) => t3.minValue).reduce((t3, e3) => Math.min(t3, e3)), o2 = i2.map((t3) => t3.maxValue - t3.minValue).reduce((t3, e3) => Math.max(t3, e3)), l2 = 255 / o2;
    else {
      let t3 = 255;
      r2 === "s8" ? (a2 = -128, t3 = 127) : r2 === "u16" ? t3 = 65535 : r2 === "s16" ? (a2 = -32768, t3 = 32767) : r2 === "u32" ? t3 = 4294967295 : r2 === "s32" ? (a2 = -2147483648, t3 = 2147483647) : r2 === "f32" ? (a2 = -34e38, t3 = 34e38) : r2 === "f64" && (a2 = -Number.MAX_VALUE, t3 = Number.MAX_VALUE), l2 = 255 / (t3 - a2);
    }
    const h2 = new Uint32Array(t2), n2 = this.width * this.height;
    let c2, u2, m2, x2, f2;
    if (c2 = u2 = m2 = e2[0], c2.length !== n2)
      return p$1.error("getAsRGBA()", "Unable to convert to RGBA. The pixelblock is invalid.");
    if (e2.length >= 2)
      if (u2 = e2[1], e2.length >= 3 && (m2 = e2[2]), s2 && s2.length === n2)
        for (x2 = 0; x2 < n2; x2++)
          s2[x2] && (h2[x2] = 255 << 24 | (m2[x2] - a2) * l2 << 16 | (u2[x2] - a2) * l2 << 8 | (c2[x2] - a2) * l2);
      else
        for (x2 = 0; x2 < n2; x2++)
          h2[x2] = 255 << 24 | (m2[x2] - a2) * l2 << 16 | (u2[x2] - a2) * l2 << 8 | (c2[x2] - a2) * l2;
    else if (s2 && s2.length === n2)
      for (x2 = 0; x2 < n2; x2++)
        f2 = (c2[x2] - a2) * l2, s2[x2] && (h2[x2] = 255 << 24 | f2 << 16 | f2 << 8 | f2);
    else
      for (x2 = 0; x2 < n2; x2++)
        f2 = (c2[x2] - a2) * l2, h2[x2] = 255 << 24 | f2 << 16 | f2 << 8 | f2;
  }
  _fillFrom32Bit(t2) {
    const { pixels: e2, mask: s2 } = this;
    if (!t2 || !e2 || !e2.length)
      return p$1.error("getAsRGBAFloat()", "Unable to convert to RGBA. The input pixel block is empty.");
    let i2, r2, l2, a2;
    i2 = r2 = l2 = e2[0], e2.length >= 3 ? (r2 = e2[1], l2 = e2[2]) : e2.length === 2 && (r2 = e2[1]);
    const o2 = this.width * this.height;
    if (i2.length !== o2)
      return p$1.error("getAsRGBAFloat()", "Unable to convert to RGBA. The pixelblock is invalid.");
    let h2 = 0;
    if (s2 && s2.length === o2)
      for (a2 = 0; a2 < o2; a2++)
        t2[h2++] = i2[a2], t2[h2++] = r2[a2], t2[h2++] = l2[a2], t2[h2++] = 1 & s2[a2];
    else
      for (a2 = 0; a2 < o2; a2++)
        t2[h2++] = i2[a2], t2[h2++] = r2[a2], t2[h2++] = l2[a2], t2[h2++] = 1;
  }
  _calculateBandStatistics(t2, e2) {
    let s2 = 1 / 0, i2 = -1 / 0;
    const r2 = t2.length;
    let l2, a2 = 0;
    if (e2)
      for (l2 = 0; l2 < r2; l2++)
        e2[l2] && (a2 = t2[l2], s2 = a2 < s2 ? a2 : s2, i2 = a2 > i2 ? a2 : i2);
    else
      for (l2 = 0; l2 < r2; l2++)
        a2 = t2[l2], s2 = a2 < s2 ? a2 : s2, i2 = a2 > i2 ? a2 : i2;
    return { minValue: s2, maxValue: i2 };
  }
};
e$1([y$1({ json: { write: true } })], c$1.prototype, "width", void 0), e$1([y$1({ json: { write: true } })], c$1.prototype, "height", void 0), e$1([y$1({ json: { write: true } })], c$1.prototype, "pixelType", void 0), e$1([c$2("pixelType")], c$1.prototype, "castPixelType", null), e$1([y$1({ json: { write: true } })], c$1.prototype, "validPixelCount", void 0), e$1([y$1({ json: { write: true } })], c$1.prototype, "mask", void 0), e$1([y$1({ json: { write: true } })], c$1.prototype, "maskIsAlpha", void 0), e$1([y$1({ json: { write: true } })], c$1.prototype, "pixels", void 0), e$1([y$1({ json: { write: true } })], c$1.prototype, "statistics", void 0), c$1 = n$1 = e$1([i$1("esri.layers.support.PixelBlock")], c$1);
var u$1 = c$1;
const e = function(t2) {
  return t2 && t2.declaredClass === "esri.layers.support.PixelBlock" && t2.pixels && t2.pixels.length > 0;
};
function n(n2, i2) {
  if (i2 == null || !i2.length || !e(n2))
    return n2;
  const l2 = n2.pixels.length;
  return i2 && i2.some((t2) => t2 >= l2) || l2 === 1 && i2.length === 1 && i2[0] === 0 ? n2 : l2 !== i2.length || i2.some((t2, e2) => t2 !== e2) ? new u$1({ pixelType: n2.pixelType, width: n2.width, height: n2.height, mask: n2.mask, validPixelCount: n2.validPixelCount, maskIsAlpha: n2.maskIsAlpha, pixels: i2.map((t2) => n2.pixels[t2]), statistics: n2.statistics && i2.map((t2) => n2.statistics[t2]) }) : n2;
}
function i(t2) {
  if (!t2)
    return;
  const e2 = t2.colormap;
  if (!e2 || e2.length === 0)
    return;
  const n2 = e2.sort((t3, e3) => t3[0] - e3[0]);
  let i2 = 0;
  n2[0][0] < 0 && (i2 = n2[0][0]);
  const l2 = Math.max(256, n2[n2.length - 1][0] - i2 + 1), r2 = new Uint8Array(4 * l2), o2 = [];
  let s2, a2 = 0, f2 = 0;
  const h2 = n2[0].length === 5;
  if (l2 > 65536)
    return n2.forEach((t3) => {
      o2[t3[0] - i2] = h2 ? t3.slice(1) : t3.slice(1).concat([255]);
    }), { indexed2DColormap: o2, offset: i2, alphaSpecified: h2 };
  if (t2.fillUnspecified)
    for (s2 = n2[f2], a2 = s2[0] - i2; a2 < l2; a2++)
      r2[4 * a2] = s2[1], r2[4 * a2 + 1] = s2[2], r2[4 * a2 + 2] = s2[3], r2[4 * a2 + 3] = h2 ? s2[4] : 255, a2 === s2[0] - i2 && (s2 = f2 === n2.length - 1 ? s2 : n2[++f2]);
  else
    for (a2 = 0; a2 < n2.length; a2++)
      s2 = n2[a2], f2 = 4 * (s2[0] - i2), r2[f2] = s2[1], r2[f2 + 1] = s2[2], r2[f2 + 2] = s2[3], r2[f2 + 3] = h2 ? s2[4] : 255;
  return { indexedColormap: r2, offset: i2, alphaSpecified: h2 };
}
function l(t2, n2) {
  if (!e(t2))
    return t2;
  if (!n2 && (n2.indexedColormap || n2.indexed2DColormap))
    return t2;
  const i2 = t2.clone(), l2 = i2.pixels;
  let r2 = i2.mask;
  const o2 = i2.width * i2.height;
  if (l2.length !== 1)
    return t2;
  const { indexedColormap: s2, indexed2DColormap: a2, offset: f2, alphaSpecified: h2 } = n2, u2 = s2.length - 1;
  let c2 = 0;
  const x2 = l2[0], m2 = new Uint8Array(x2.length), p2 = new Uint8Array(x2.length), d2 = new Uint8Array(x2.length);
  let y2, g2 = 0;
  if (s2)
    if (r2)
      for (c2 = 0; c2 < o2; c2++)
        r2[c2] && (g2 = 4 * (x2[c2] - f2), g2 < f2 || g2 > u2 ? r2[c2] = 0 : (m2[c2] = s2[g2], p2[c2] = s2[g2 + 1], d2[c2] = s2[g2 + 2], r2[c2] = s2[g2 + 3]));
    else {
      for (r2 = new Uint8Array(o2), c2 = 0; c2 < o2; c2++)
        g2 = 4 * (x2[c2] - f2), g2 < f2 || g2 > u2 ? r2[c2] = 0 : (m2[c2] = s2[g2], p2[c2] = s2[g2 + 1], d2[c2] = s2[g2 + 2], r2[c2] = s2[g2 + 3]);
      i2.mask = r2;
    }
  else if (r2)
    for (c2 = 0; c2 < o2; c2++)
      r2[c2] && (y2 = a2[x2[c2]], m2[c2] = y2[0], p2[c2] = y2[1], d2[c2] = y2[2], r2[c2] = y2[3]);
  else {
    for (r2 = new Uint8Array(o2), c2 = 0; c2 < o2; c2++)
      y2 = a2[x2[c2]], m2[c2] = y2[0], p2[c2] = y2[1], d2[c2] = y2[2], r2[c2] = y2[3];
    i2.mask = r2;
  }
  return i2.pixels = [m2, p2, d2], i2.statistics = null, i2.pixelType = "u8", i2.maskIsAlpha = h2, i2;
}
function r(t2) {
  if (!e(t2))
    return null;
  t2.statistics || t2.updateStatistics();
  const { pixels: n2, mask: i2, pixelType: l2, statistics: r2 } = t2, o2 = t2.width * t2.height, s2 = n2.length;
  let a2, f2, h2, u2, c2;
  const x2 = [], m2 = [];
  let p2, d2, y2, g2, w2, M2, k2, A2, U2, C2;
  const T = 256;
  for (u2 = 0; u2 < s2; u2++) {
    if (p2 = new Uint32Array(T), y2 = n2[u2], l2 === "u8")
      if (a2 = -0.5, f2 = 255.5, i2)
        for (c2 = 0; c2 < o2; c2++)
          i2[c2] && p2[y2[c2]]++;
      else
        for (c2 = 0; c2 < o2; c2++)
          p2[y2[c2]]++;
    else {
      if (a2 = r2[u2].minValue, f2 = r2[u2].maxValue, h2 = (f2 - a2) / T, d2 = new Uint32Array(T + 1), i2)
        for (c2 = 0; c2 < o2; c2++)
          i2[c2] && d2[Math.floor((y2[c2] - a2) / h2)]++;
      else
        for (c2 = 0; c2 < o2; c2++)
          d2[Math.floor((y2[c2] - a2) / h2)]++;
      for (c2 = 0; c2 < 255; c2++)
        p2[c2] = d2[c2];
      p2[255] = d2[255] + d2[256];
    }
    for (x2.push({ min: a2, max: f2, size: T, counts: p2 }), g2 = 0, w2 = 0, A2 = 0, c2 = 0; c2 < T; c2++)
      g2 += p2[c2], w2 += c2 * p2[c2];
    for (U2 = w2 / g2, c2 = 0; c2 < T; c2++)
      A2 += p2[c2] * __pow(c2 - U2, 2);
    C2 = Math.sqrt(A2 / (g2 - 1)), h2 = (f2 - a2) / T, M2 = (U2 + 0.5) * h2 + a2, k2 = C2 * h2, m2.push({ min: a2, max: f2, avg: M2, stddev: k2 });
  }
  return { statistics: m2, histograms: x2 };
}
function o(t2) {
  const e2 = [];
  for (let n2 = 0; n2 < t2.length; n2++) {
    const { min: i2, max: l2, size: r2, counts: o2 } = t2[n2];
    let s2 = 0, a2 = 0;
    for (let t3 = 0; t3 < r2; t3++)
      s2 += o2[t3], a2 += t3 * o2[t3];
    const f2 = a2 / s2;
    let h2 = 0;
    for (let t3 = 0; t3 < r2; t3++)
      h2 += o2[t3] * __pow(t3 - f2, 2);
    const u2 = (l2 - i2) / r2, c2 = (f2 + 0.5) * u2 + i2, x2 = Math.sqrt(h2 / (s2 - 1)) * u2;
    e2.push({ min: i2, max: l2, avg: c2, stddev: x2 });
  }
  return e2;
}
function s(t2) {
  const { minCutOff: e2, maxCutOff: n2, gamma: i2, pixelType: l2 } = t2, r2 = t2.outMin || 0, o2 = t2.outMax || 255;
  if (["u8", "u16", "s8", "s16"].indexOf(l2) === -1)
    return null;
  const s2 = e2.length;
  let f2, h2, u2 = 0;
  l2 === "s8" ? u2 = -127 : l2 === "s16" && (u2 = -32767);
  let c2 = 256;
  ["u16", "s16"].indexOf(l2) > -1 && (c2 = 65536);
  const x2 = [], m2 = [], p2 = o2 - r2;
  for (f2 = 0; f2 < s2; f2++)
    m2[f2] = n2[f2] - e2[f2], x2[f2] = p2 / (n2[f2] - e2[f2]);
  const d2 = i2 && i2.length >= s2, y2 = [];
  if (d2)
    for (f2 = 0; f2 < s2; f2++)
      i2[f2] > 1 ? i2[f2] > 2 ? y2[f2] = 6.5 + __pow(i2[f2] - 2, 2.5) : y2[f2] = 6.5 + 100 * __pow(2 - i2[f2], 4) : y2[f2] = 1;
  let g2;
  const w2 = [];
  let M2, k2, A2;
  if (d2)
    for (f2 = 0; f2 < s2; f2++) {
      for (A2 = [], h2 = 0; h2 < c2; h2++)
        M2 = h2 + u2, g2 = (M2 - e2[f2]) / m2[f2], k2 = 1, i2[f2] > 1 && (k2 -= __pow(1 / p2, g2 * y2[f2])), M2 < n2[f2] && M2 > e2[f2] ? A2[h2] = Math.floor(k2 * p2 * __pow(g2, 1 / i2[f2])) + r2 : M2 >= n2[f2] ? A2[h2] = o2 : A2[h2] = r2;
      w2[f2] = A2;
    }
  else
    for (f2 = 0; f2 < s2; f2++) {
      for (A2 = [], h2 = 0; h2 < c2; h2++)
        M2 = h2 + u2, M2 <= e2[f2] ? A2[h2] = r2 : M2 >= n2[f2] ? A2[h2] = o2 : A2[h2] = Math.floor((M2 - e2[f2]) / m2[f2] * p2) + r2;
      w2[f2] = A2;
    }
  if (t2.contrastOffset != null) {
    const e3 = a(t2.contrastOffset, t2.brightnessOffset);
    for (f2 = 0; f2 < s2; f2++)
      for (A2 = w2[f2], h2 = 0; h2 < c2; h2++)
        A2[h2] = e3[A2[h2]];
  }
  return { lut: w2, offset: u2 };
}
function a(t2, e2) {
  const n2 = Math.min(Math.max(t2, -100), 100), i2 = Math.min(Math.max(e2, -100), 100), l2 = 255, r2 = 128;
  let o2, s2;
  const a2 = new Uint8Array(256);
  for (o2 = 0; o2 < 256; o2++)
    n2 > 0 && n2 < 100 ? s2 = (200 * o2 - 100 * l2 + 2 * l2 * i2) / (2 * (100 - n2)) + r2 : n2 <= 0 && n2 > -100 ? s2 = (200 * o2 - 100 * l2 + 2 * l2 * i2) * (100 + n2) / 2e4 + r2 : n2 === 100 ? (s2 = 200 * o2 - 100 * l2 + (l2 + 1) * (100 - n2) + 2 * l2 * i2, s2 = s2 > 0 ? l2 : 0) : n2 === -100 && (s2 = r2), a2[o2] = s2 > l2 ? l2 : s2 < 0 ? 0 : s2;
  return a2;
}
function f(t2, e2 = 256) {
  e2 = Math.min(e2, 256);
  const { size: n2, counts: i2 } = t2, l2 = new Uint8Array(n2), r2 = i2.reduce((t3, n3) => t3 + n3 / e2, 0);
  let o2 = 0, s2 = 0, a2 = 0, f2 = r2;
  for (let h2 = 0; h2 < n2; h2++)
    if (a2 += i2[h2], !(h2 < n2 - 1 && a2 + i2[h2 + 1] < f2)) {
      for (; o2 < e2 - 1 && f2 < a2; )
        o2++, f2 += r2;
      for (let t3 = s2; t3 <= h2; t3++)
        l2[t3] = o2;
      s2 = h2 + 1;
    }
  for (let h2 = s2; h2 < n2; h2++)
    l2[h2] = e2 - 1;
  return l2;
}
function h(t2, n2) {
  if (!e(t2))
    return null;
  const i2 = t2.clone(), { pixels: l2, mask: r2 } = i2, { minCutOff: o2, maxCutOff: s2, gamma: a2 } = n2, f2 = n2.outMin || 0, h2 = n2.outMax || 255, u2 = i2.width * i2.height, c2 = l2.length;
  let x2, m2, p2, d2, y2;
  const g2 = h2 - f2, w2 = [], M2 = [];
  for (x2 = 0; x2 < c2; x2++)
    M2[x2] = s2[x2] - o2[x2], w2[x2] = g2 / (s2[x2] - o2[x2]);
  const k2 = a2 && a2.length >= c2, A2 = [];
  if (k2)
    for (x2 = 0; x2 < c2; x2++)
      a2[x2] > 1 ? a2[x2] > 2 ? A2[x2] = 6.5 + __pow(a2[x2] - 2, 2.5) : A2[x2] = 6.5 + 100 * __pow(2 - a2[x2], 4) : A2[x2] = 1;
  if (k2)
    if (r2 != null) {
      for (m2 = 0; m2 < u2; m2++)
        if (r2[m2])
          for (x2 = 0; x2 < c2; x2++)
            p2 = l2[x2][m2], y2 = (p2 - o2[x2]) / M2[x2], d2 = 1, a2[x2] > 1 && (d2 -= __pow(1 / g2, y2 * A2[x2])), p2 < s2[x2] && p2 > o2[x2] ? l2[x2][m2] = Math.floor(d2 * g2 * __pow(y2, 1 / a2[x2])) + f2 : p2 >= s2[x2] ? l2[x2][m2] = h2 : l2[x2][m2] = f2;
    } else
      for (m2 = 0; m2 < u2; m2++)
        for (x2 = 0; x2 < c2; x2++)
          p2 = l2[x2][m2], y2 = (p2 - o2[x2]) / M2[x2], d2 = 1, a2[x2] > 1 && (d2 -= __pow(1 / g2, y2 * A2[x2])), p2 < s2[x2] && p2 > o2[x2] ? l2[x2][m2] = Math.floor(d2 * g2 * __pow(y2, 1 / a2[x2])) + f2 : p2 >= s2[x2] ? l2[x2][m2] = h2 : l2[x2][m2] = f2;
  else if (r2 != null) {
    for (m2 = 0; m2 < u2; m2++)
      if (r2[m2])
        for (x2 = 0; x2 < c2; x2++)
          p2 = l2[x2][m2], p2 < s2[x2] && p2 > o2[x2] ? l2[x2][m2] = Math.floor((p2 - o2[x2]) / M2[x2] * g2) + f2 : p2 >= s2[x2] ? l2[x2][m2] = h2 : l2[x2][m2] = f2;
  } else
    for (m2 = 0; m2 < u2; m2++)
      for (x2 = 0; x2 < c2; x2++)
        p2 = l2[x2][m2], p2 < s2[x2] && p2 > o2[x2] ? l2[x2][m2] = Math.floor((p2 - o2[x2]) / M2[x2] * g2) + f2 : p2 >= s2[x2] ? l2[x2][m2] = h2 : l2[x2][m2] = f2;
  return i2.pixelType = "u8", i2.updateStatistics(), i2;
}
function u(n2, i2) {
  if (!e(n2))
    return null;
  const { pixels: l2, mask: r2 } = n2, o2 = n2.width * n2.height, s2 = l2.length;
  let a2 = i2.lut;
  const { offset: f2 } = i2;
  let h2, u2;
  a2 && a2[0].length === 1 && (a2 = l2.map(() => a2));
  const c2 = [];
  let x2, m2, p2;
  if (f2)
    if (r2 == null)
      for (h2 = 0; h2 < s2; h2++) {
        for (x2 = l2[h2], m2 = a2[h2], p2 = new Uint8Array(o2), u2 = 0; u2 < o2; u2++)
          p2[u2] = m2[x2[u2] - f2];
        c2.push(p2);
      }
    else
      for (h2 = 0; h2 < s2; h2++) {
        for (x2 = l2[h2], m2 = a2[h2], p2 = new Uint8Array(o2), u2 = 0; u2 < o2; u2++)
          r2[u2] && (p2[u2] = m2[x2[u2] - f2]);
        c2.push(p2);
      }
  else if (r2 == null)
    for (h2 = 0; h2 < s2; h2++) {
      for (x2 = l2[h2], m2 = a2[h2], p2 = new Uint8Array(o2), u2 = 0; u2 < o2; u2++)
        p2[u2] = m2[x2[u2]];
      c2.push(p2);
    }
  else
    for (h2 = 0; h2 < s2; h2++) {
      for (x2 = l2[h2], m2 = a2[h2], p2 = new Uint8Array(o2), u2 = 0; u2 < o2; u2++)
        r2[u2] && (p2[u2] = m2[x2[u2]]);
      c2.push(p2);
    }
  const d2 = new u$1({ width: n2.width, height: n2.height, pixels: c2, mask: r2, pixelType: "u8" });
  return d2.updateStatistics(), d2;
}
function c(t2, n2) {
  if (!e(t2))
    return null;
  const i2 = t2.clone(), { pixels: l2 } = i2, r2 = i2.width * i2.height, o2 = n2.length, s2 = Math.floor(o2 / 2), a2 = n2[Math.floor(s2)], f2 = l2[0];
  let h2, u2, c2, x2, m2, p2, d2 = false;
  const y2 = new Uint8Array(r2), g2 = new Uint8Array(r2), w2 = new Uint8Array(r2);
  let M2 = i2.mask;
  const k2 = n2[0].mappedColor.length === 4;
  for (M2 || (M2 = new Uint8Array(r2), M2.fill(k2 ? 255 : 1), i2.mask = M2), m2 = 0; m2 < r2; m2++)
    if (M2[m2]) {
      for (h2 = f2[m2], d2 = false, p2 = s2, u2 = a2, c2 = 0, x2 = o2 - 1; x2 - c2 > 1; ) {
        if (h2 === u2.value) {
          d2 = true;
          break;
        }
        h2 > u2.value ? c2 = p2 : x2 = p2, p2 = Math.floor((c2 + x2) / 2), u2 = n2[Math.floor(p2)];
      }
      d2 || (h2 === n2[c2].value ? (u2 = n2[c2], d2 = true) : h2 === n2[x2].value ? (u2 = n2[x2], d2 = true) : h2 < n2[c2].value ? (d2 = false, u2 = null) : h2 > n2[c2].value && (h2 < n2[x2].value ? (u2 = n2[c2], d2 = true) : x2 === o2 - 1 ? (d2 = false, u2 = null) : (u2 = n2[x2], d2 = true))), d2 ? (y2[m2] = u2.mappedColor[0], g2[m2] = u2.mappedColor[1], w2[m2] = u2.mappedColor[2], M2[m2] = u2.mappedColor[3]) : y2[m2] = g2[m2] = w2[m2] = M2[m2] = 0;
    }
  return i2.pixels = [y2, g2, w2], i2.mask = M2, i2.pixelType = "u8", i2.maskIsAlpha = k2, i2;
}
function x(t2, e2, n2, i2, l2, r2, o2, s2) {
  return { xmin: l2 <= n2 * t2 ? 0 : l2 < n2 * t2 + t2 ? l2 - n2 * t2 : t2, ymin: r2 <= i2 * e2 ? 0 : r2 < i2 * e2 + e2 ? r2 - i2 * e2 : e2, xmax: l2 + o2 <= n2 * t2 ? 0 : l2 + o2 < n2 * t2 + t2 ? l2 + o2 - n2 * t2 : t2, ymax: r2 + s2 <= i2 * e2 ? 0 : r2 + s2 < i2 * e2 + e2 ? r2 + s2 - i2 * e2 : e2 };
}
function m(t2, e2) {
  if (!t2 || t2.length === 0)
    return null;
  const n2 = t2.filter((t3) => t3.pixelBlock)[0];
  if (!n2)
    return null;
  const i2 = (n2.extent.xmax - n2.extent.xmin) / n2.pixelBlock.width, l2 = (n2.extent.ymax - n2.extent.ymin) / n2.pixelBlock.height, r2 = 0.01 * Math.min(i2, l2), o2 = t2.sort((t3, e3) => Math.abs(t3.extent.ymax - e3.extent.ymax) > r2 ? e3.extent.ymax - t3.extent.ymax : Math.abs(t3.extent.xmin - e3.extent.xmin) > r2 ? t3.extent.xmin - e3.extent.xmin : 0), s2 = Math.min.apply(null, o2.map((t3) => t3.extent.xmin)), a2 = Math.min.apply(null, o2.map((t3) => t3.extent.ymin)), f2 = Math.max.apply(null, o2.map((t3) => t3.extent.xmax)), h2 = Math.max.apply(null, o2.map((t3) => t3.extent.ymax)), u2 = { x: Math.round((e2.xmin - s2) / i2), y: Math.round((h2 - e2.ymax) / l2) }, c2 = { width: Math.round((f2 - s2) / i2), height: Math.round((h2 - a2) / l2) }, x2 = { width: Math.round((e2.xmax - e2.xmin) / i2), height: Math.round((e2.ymax - e2.ymin) / l2) };
  if (Math.round(c2.width / n2.pixelBlock.width) * Math.round(c2.height / n2.pixelBlock.height) !== o2.length || u2.x < 0 || u2.y < 0 || c2.width < x2.width || c2.height < x2.height)
    return null;
  return { extent: e2, pixelBlock: p(o2.map((t3) => t3.pixelBlock), c2, u2, x2) };
}
function p(n2, i2, l2, r2) {
  const o2 = n2.filter((t2) => e(t2))[0];
  if (o2 == null)
    return null;
  const s2 = r2 ? r2.width : i2.width, a2 = r2 ? r2.height : i2.height, f2 = o2.width, h2 = o2.height, u2 = i2.width / f2, c2 = i2.height / h2, m2 = l2 ? l2.x : 0, p2 = l2 ? l2.y : 0, d2 = o2.pixelType, y2 = u$1.getPixelArrayConstructor(d2), g2 = o2.pixels.length, w2 = [];
  let M2, k2, A2, U2, C2, T, v, B, S, O, P;
  for (T = 0; T < g2; T++) {
    for (k2 = new y2(s2 * a2), v = 0; v < c2; v++)
      for (B = 0; B < u2; B++)
        if (A2 = n2[v * u2 + B], e(A2))
          for (M2 = A2.pixels[T], P = x(f2, h2, B, v, m2, p2, s2, a2), S = P.ymin; S < P.ymax; S++)
            for (U2 = (v * h2 + S - p2) * s2 + (B * f2 - m2), C2 = S * f2, O = P.xmin; O < P.xmax; O++)
              k2[U2 + O] = M2[C2 + O];
    w2.push(k2);
  }
  let b, z;
  if (n2.some((t2) => t2 == null || t2.mask && t2.mask.length > 0))
    for (b = new Uint8Array(s2 * a2), v = 0; v < c2; v++)
      for (B = 0; B < u2; B++)
        if (A2 = n2[v * u2 + B], z = A2 ? A2.mask : null, P = x(f2, h2, B, v, m2, p2, s2, a2), z)
          for (S = P.ymin; S < P.ymax; S++)
            for (U2 = (v * h2 + S - p2) * s2 + (B * f2 - m2), C2 = S * f2, O = P.xmin; O < P.xmax; O++)
              b[U2 + O] = z[C2 + O];
        else if (A2)
          for (S = P.ymin; S < P.ymax; S++)
            for (U2 = (v * h2 + S - p2) * s2 + (B * f2 - m2), C2 = S * f2, O = P.xmin; O < P.xmax; O++)
              b[U2 + O] = 1;
        else
          for (S = P.ymin; S < P.ymax; S++)
            for (U2 = (v * h2 + S - p2) * s2 + (B * f2 - m2), C2 = S * f2, O = P.xmin; O < P.xmax; O++)
              b[U2 + O] = 0;
  const I = new u$1({ width: s2, height: a2, pixels: w2, pixelType: d2, mask: b });
  return I.updateStatistics(), I;
}
function d(t2, n2, i2) {
  if (!e(t2))
    return null;
  const { width: l2, height: r2 } = t2, o2 = n2.x, s2 = n2.y, a2 = i2.width + o2, f2 = i2.height + s2;
  if (o2 < 0 || s2 < 0 || a2 > l2 || f2 > r2)
    return t2;
  if (o2 === 0 && s2 === 0 && a2 === l2 && f2 === r2)
    return t2;
  t2.mask || (t2.mask = new Uint8Array(l2 * r2));
  const h2 = t2.mask;
  for (let e2 = 0; e2 < r2; e2++) {
    const t3 = e2 * l2;
    for (let n3 = 0; n3 < l2; n3++)
      h2[t3 + n3] = e2 < s2 || e2 >= f2 || n3 < o2 || n3 >= a2 ? 0 : 1;
  }
  return t2.updateStatistics(), t2;
}
function y(t2) {
  if (!e(t2))
    return null;
  const n2 = t2.clone(), { width: i2, height: l2, pixels: r2, mask: o2 } = t2, s2 = r2[0], a2 = n2.pixels[0];
  for (let e2 = 2; e2 < l2 - 1; e2++) {
    const t3 = new Map();
    for (let l3 = e2 - 2; l3 < e2 + 2; l3++)
      for (let e3 = 0; e3 < 4; e3++) {
        const n4 = l3 * i2 + e3;
        M(t3, s2[n4], o2 ? o2[n4] : 1);
      }
    a2[e2 * i2] = g(t3), a2[e2 * i2 + 1] = a2[e2 * i2 + 2] = a2[e2 * i2];
    let n3 = 3;
    for (; n3 < i2 - 1; n3++) {
      let l3 = (e2 - 2) * i2 + n3 + 1;
      M(t3, s2[l3], o2 ? o2[l3] : 1), l3 = (e2 - 1) * i2 + n3 + 1, M(t3, s2[l3], o2 ? o2[l3] : 1), l3 = e2 * i2 + n3 + 1, M(t3, s2[l3], o2 ? o2[l3] : 1), l3 = (e2 + 1) * i2 + n3 + 1, M(t3, s2[l3], o2 ? o2[l3] : 1), l3 = (e2 - 2) * i2 + n3 - 3, w(t3, s2[l3], o2 ? o2[l3] : 1), l3 = (e2 - 1) * i2 + n3 - 3, w(t3, s2[l3], o2 ? o2[l3] : 1), l3 = e2 * i2 + n3 - 3, w(t3, s2[l3], o2 ? o2[l3] : 1), l3 = (e2 + 1) * i2 + n3 - 3, w(t3, s2[l3], o2 ? o2[l3] : 1), a2[e2 * i2 + n3] = g(t3);
    }
    a2[e2 * i2 + n3 + 1] = a2[e2 * i2 + n3];
  }
  for (let e2 = 0; e2 < i2; e2++)
    a2[e2] = a2[i2 + e2] = a2[2 * i2 + e2], a2[(l2 - 1) * i2 + e2] = a2[(l2 - 2) * i2 + e2];
  return n2.updateStatistics(), n2;
}
function g(t2) {
  if (t2.size === 0)
    return 0;
  let e2 = 0, n2 = -1, i2 = 0;
  const l2 = t2.keys();
  let r2 = l2.next();
  for (; !r2.done; )
    i2 = t2.get(r2.value), i2 > e2 && (n2 = r2.value, e2 = i2), r2 = l2.next();
  return n2;
}
function w(t2, e2, n2) {
  if (n2 === 0)
    return;
  const i2 = t2.get(e2);
  i2 === 1 ? t2.delete(e2) : t2.set(e2, i2 - 1);
}
function M(t2, e2, n2) {
  n2 !== 0 && t2.set(e2, t2.has(e2) ? t2.get(e2) + 1 : 1);
}
function k(n2, i2, l2) {
  let { x: r2, y: o2 } = i2;
  const { width: s2, height: a2 } = l2;
  if (r2 === 0 && o2 === 0 && a2 === n2.height && s2 === n2.width)
    return n2;
  const { width: f2, height: h2 } = n2, u2 = Math.max(0, o2), c2 = Math.max(0, r2), x2 = Math.min(r2 + s2, f2), m2 = Math.min(o2 + a2, h2);
  if (x2 < 0 || m2 < 0 || !e(n2))
    return null;
  r2 = Math.max(0, -r2), o2 = Math.max(0, -o2);
  const { pixels: p2, mask: d2 } = n2, y2 = s2 * a2, g2 = p2.length, w2 = [];
  for (let e2 = 0; e2 < g2; e2++) {
    const i3 = p2[e2], l3 = u$1.createEmptyBand(n2.pixelType, y2);
    for (let t2 = u2; t2 < m2; t2++) {
      const e3 = t2 * f2;
      let n3 = (t2 + o2 - u2) * s2 + r2;
      for (let t3 = c2; t3 < x2; t3++)
        l3[n3++] = i3[e3 + t3];
    }
    w2.push(l3);
  }
  const M2 = new Uint8Array(y2);
  for (let t2 = u2; t2 < m2; t2++) {
    const e2 = t2 * f2;
    let n3 = (t2 + o2 - u2) * s2 + r2;
    for (let t3 = c2; t3 < x2; t3++)
      M2[n3++] = d2 ? d2[e2 + t3] : 1;
  }
  const k2 = new u$1({ width: l2.width, height: l2.height, pixelType: n2.pixelType, pixels: w2, mask: M2 });
  return k2.updateStatistics(), k2;
}
function A(n2, i2 = true) {
  if (!e(n2))
    return null;
  const { pixels: l2, width: r2, height: o2, mask: s2, pixelType: a2 } = n2, f2 = [], h2 = Math.round(r2 / 2), u2 = Math.round(o2 / 2), c2 = o2 - 1, x2 = r2 - 1;
  for (let e2 = 0; e2 < l2.length; e2++) {
    const n3 = l2[e2], s3 = u$1.createEmptyBand(a2, h2 * u2);
    let m3 = 0;
    for (let t2 = 0; t2 < o2; t2 += 2)
      for (let e3 = 0; e3 < r2; e3 += 2) {
        const l3 = n3[t2 * r2 + e3];
        if (i2) {
          const i3 = e3 === x2 ? l3 : n3[t2 * r2 + e3 + 1], o3 = t2 === c2 ? l3 : n3[t2 * r2 + e3 + r2], a3 = e3 === x2 ? o3 : t2 === c2 ? i3 : n3[t2 * r2 + e3 + r2 + 1];
          s3[m3++] = (l3 + i3 + o3 + a3) / 4;
        } else
          s3[m3++] = l3;
      }
    f2.push(s3);
  }
  let m2 = null;
  if (s2) {
    m2 = new Uint8Array(h2 * u2);
    let t2 = 0;
    for (let e2 = 0; e2 < o2; e2 += 2)
      for (let n3 = 0; n3 < r2; n3 += 2) {
        const l3 = s2[e2 * r2 + n3];
        if (i2) {
          const i3 = n3 === x2 ? l3 : s2[e2 * r2 + n3 + 1], o3 = e2 === c2 ? l3 : s2[e2 * r2 + n3 + r2], a3 = n3 === x2 ? o3 : e2 === c2 ? i3 : s2[e2 * r2 + n3 + r2 + 1];
          m2[t2++] = l3 * i3 * o3 * a3 ? 1 : 0;
        } else
          m2[t2++] = l3;
      }
  }
  return new u$1({ width: h2, height: u2, pixelType: a2, pixels: f2, mask: m2 });
}
function U(t2, n2, i2) {
  if (!e(t2))
    return null;
  const { width: l2, height: r2 } = n2;
  let { width: o2, height: s2 } = t2;
  const a2 = new Map(), f2 = { x: 0, y: 0 }, h2 = i2 == null ? 1 : 1 + i2;
  let u2 = t2;
  for (let e2 = 0; e2 < h2; e2++) {
    const t3 = Math.ceil(o2 / l2), i3 = Math.ceil(s2 / r2);
    for (let o3 = 0; o3 < i3; o3++) {
      f2.y = o3 * r2;
      for (let i4 = 0; i4 < t3; i4++) {
        f2.x = i4 * l2;
        const t4 = k(u2, f2, n2);
        a2.set(`${e2}/${o3}/${i4}`, t4);
      }
    }
    e2 < h2 - 1 && (u2 = A(u2)), o2 = Math.round(o2 / 2), s2 = Math.round(s2 / 2);
  }
  return a2;
}
function C(n2, i2, l2, r2, o2 = "nearest") {
  if (!e(n2))
    return null;
  o2 === "majority" && (n2 = y(n2));
  const { pixels: s2, mask: a2, pixelType: f2 } = n2, h2 = n2.width, u2 = n2.height, c2 = u$1.getPixelArrayConstructor(f2), x2 = s2.length, { width: m2, height: p2 } = i2, d2 = r2.cols, g2 = r2.rows, w2 = Math.ceil(m2 / d2), M2 = Math.ceil(p2 / g2);
  let k2, A2, U2, C2, T, v, B, S = false;
  for (let t2 = 0; t2 < l2.length; t2 += 3)
    l2[t2] === -1 && l2[t2 + 1] === -1 && l2[t2 + 2] === -1 && (S = true);
  const O = new Float32Array(m2 * p2), P = new Float32Array(m2 * p2);
  let b, z, I = 0;
  const j = o2 === "majority" ? 0 : 0.5;
  for (let t2 = 0; t2 < M2; t2++)
    for (let e2 = 0; e2 < w2; e2++) {
      k2 = 12 * (t2 * w2 + e2), A2 = l2[k2], U2 = l2[k2 + 1], C2 = l2[k2 + 2], T = l2[k2 + 3], v = l2[k2 + 4], B = l2[k2 + 5];
      for (let n3 = 0; n3 < g2; n3++) {
        I = (t2 * g2 + n3) * m2 + e2 * d2, z = (n3 + 0.5) / g2;
        for (let t3 = 0; t3 < n3; t3++)
          b = (t3 + 0.5) / d2, O[I + t3] = Math.round((A2 * b + U2 * z + C2) * h2 - j), P[I + t3] = Math.round((T * b + v * z + B) * u2 - j);
      }
      k2 += 6, A2 = l2[k2], U2 = l2[k2 + 1], C2 = l2[k2 + 2], T = l2[k2 + 3], v = l2[k2 + 4], B = l2[k2 + 5];
      for (let n3 = 0; n3 < g2; n3++) {
        I = (t2 * g2 + n3) * m2 + e2 * d2, z = (n3 + 0.5) / g2;
        for (let t3 = n3; t3 < d2; t3++)
          b = (t3 + 0.5) / d2, O[I + t3] = Math.round((A2 * b + U2 * z + C2) * h2 - j), P[I + t3] = Math.round((T * b + v * z + B) * u2 - j);
      }
    }
  const D = (t2, e2) => {
    for (let n3 = 0; n3 < p2; n3++) {
      k2 = n3 * m2;
      for (let n4 = 0; n4 < m2; n4++)
        O[k2] < 0 || P[k2] < 0 ? t2[k2] = 0 : t2[k2] = e2[O[k2] + P[k2] * h2], k2++;
    }
  }, E = [];
  let $;
  for (let t2 = 0; t2 < x2; t2++)
    $ = new c2(m2 * p2), D($, s2[t2]), E.push($);
  const q = new u$1({ width: m2, height: p2, pixelType: f2, pixels: E });
  if (a2)
    q.mask = new Uint8Array(m2 * p2), D(q.mask, a2);
  else if (S) {
    q.mask = new Uint8Array(m2 * p2);
    for (let t2 = 0; t2 < m2 * p2; t2++)
      q.mask[t2] = O[t2] < 0 || P[t2] < 0 ? 0 : 1;
  }
  return q.updateStatistics(), q;
}
export { C, U, u as a, c, d, f, h, i, l, m, n, o, p, r, s, u$1 as u };
