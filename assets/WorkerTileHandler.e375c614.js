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
import { cs as o$4, cO as c$2, ak as n$3, ao as b$2, a5 as r$5, an as g$1 } from "./vendor.74d5941c.js";
import { f as f$4, t as t$5, n as n$1, b as a$4, r as r$3, h as h$2, c as t$6, d as d$3, e as f$5, P, g as b$1, a as a$5 } from "./StyleRepository.bb6fee73.js";
import { o as o$3, a as e$2, s as s$3 } from "./earcut.0e5467f0.js";
import { t as t$4, i, e as n$2, u as u$3, b as i$1, a as r$4, n as n$4, f as e$3 } from "./TurboLine.ecd76861.js";
import { t as t$3 } from "./Rect.b51904ac.js";
import { C } from "./BidiEngine.9b392b22.js";
import "./vec4f32.6de15d07.js";
import "./definitions.6737c10c.js";
import "./GeometryUtils.9c8423f5.js";
import "./_commonjsHelpers.f2a458db.js";
var I;
!function(I2) {
  I2[I2.INITIALIZED = 0] = "INITIALIZED", I2[I2.NO_DATA = 1] = "NO_DATA", I2[I2.READY = 2] = "READY", I2[I2.MODIFIED = 3] = "MODIFIED", I2[I2.INVALID = 4] = "INVALID";
}(I || (I = {}));
function e$1(e2) {
  return e2 === 746 || e2 === 747 || !(e2 < 4352) && (e2 >= 12704 && e2 <= 12735 || (e2 >= 12544 && e2 <= 12591 || (e2 >= 65072 && e2 <= 65103 && !(e2 >= 65097 && e2 <= 65103) || (e2 >= 63744 && e2 <= 64255 || (e2 >= 13056 && e2 <= 13311 || (e2 >= 11904 && e2 <= 12031 || (e2 >= 12736 && e2 <= 12783 || (e2 >= 12288 && e2 <= 12351 && !(e2 >= 12296 && e2 <= 12305 || e2 >= 12308 && e2 <= 12319 || e2 === 12336) || (e2 >= 13312 && e2 <= 19903 || (e2 >= 19968 && e2 <= 40959 || (e2 >= 12800 && e2 <= 13055 || (e2 >= 12592 && e2 <= 12687 || (e2 >= 43360 && e2 <= 43391 || (e2 >= 55216 && e2 <= 55295 || (e2 >= 4352 && e2 <= 4607 || (e2 >= 44032 && e2 <= 55215 || (e2 >= 12352 && e2 <= 12447 || (e2 >= 12272 && e2 <= 12287 || (e2 >= 12688 && e2 <= 12703 || (e2 >= 12032 && e2 <= 12255 || (e2 >= 12784 && e2 <= 12799 || (e2 >= 12448 && e2 <= 12543 && e2 !== 12540 || (e2 >= 65280 && e2 <= 65519 && !(e2 === 65288 || e2 === 65289 || e2 === 65293 || e2 >= 65306 && e2 <= 65310 || e2 === 65339 || e2 === 65341 || e2 === 65343 || e2 >= 65371 && e2 <= 65503 || e2 === 65507 || e2 >= 65512 && e2 <= 65519) || (e2 >= 65104 && e2 <= 65135 && !(e2 >= 65112 && e2 <= 65118 || e2 >= 65123 && e2 <= 65126) || (e2 >= 5120 && e2 <= 5759 || (e2 >= 6320 && e2 <= 6399 || (e2 >= 65040 && e2 <= 65055 || (e2 >= 19904 && e2 <= 19967 || (e2 >= 40960 && e2 <= 42127 || e2 >= 42128 && e2 <= 42191)))))))))))))))))))))))))))));
}
function c$1(e2) {
  return !(e2 < 11904) && (e2 >= 12704 && e2 <= 12735 || (e2 >= 12544 && e2 <= 12591 || (e2 >= 65072 && e2 <= 65103 || (e2 >= 63744 && e2 <= 64255 || (e2 >= 13056 && e2 <= 13311 || (e2 >= 11904 && e2 <= 12031 || (e2 >= 12736 && e2 <= 12783 || (e2 >= 12288 && e2 <= 12351 || (e2 >= 13312 && e2 <= 19903 || (e2 >= 19968 && e2 <= 40959 || (e2 >= 12800 && e2 <= 13055 || (e2 >= 65280 && e2 <= 65519 || (e2 >= 12352 && e2 <= 12447 || (e2 >= 12272 && e2 <= 12287 || (e2 >= 12032 && e2 <= 12255 || (e2 >= 12784 && e2 <= 12799 || (e2 >= 12448 && e2 <= 12543 || (e2 >= 65040 && e2 <= 65055 || (e2 >= 42128 && e2 <= 42191 || e2 >= 40960 && e2 <= 42127)))))))))))))))))));
}
function s$2(e2) {
  switch (e2) {
    case 10:
    case 32:
    case 38:
    case 40:
    case 41:
    case 43:
    case 45:
    case 47:
    case 173:
    case 183:
    case 8203:
    case 8208:
    case 8211:
    case 8231:
      return true;
  }
  return false;
}
function a$3(e2) {
  switch (e2) {
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 32:
      return true;
  }
  return false;
}
const c = 24, h$1 = 17;
class a$2 {
  constructor(t2, e2, i2, s2, o2, c2, h2) {
    this._glyphItems = t2, this._maxWidth = e2, this._lineHeight = i2, this._letterSpacing = s2, this._hAnchor = o2, this._vAnchor = c2, this._justify = h2;
  }
  getShaping(t2, c2, h2) {
    const a2 = this._letterSpacing, l2 = this._lineHeight, r2 = this._justify, n2 = this._maxWidth, m2 = [];
    let f2 = 0, p2 = 0;
    const g2 = t2.length;
    for (let e2 = 0; e2 < g2; e2++) {
      const i2 = t2.charCodeAt(e2), s2 = h2 && e$1(i2);
      let c3;
      for (const t3 of this._glyphItems)
        if (c3 = t3[i2], c3)
          break;
      m2.push({ codePoint: i2, x: f2, y: p2, vertical: s2, glyphMosaicItem: c3 }), c3 && (f2 += c3.metrics.advance + a2);
    }
    let y2 = f2;
    if (n2 > 0) {
      y2 = f2 / Math.max(1, Math.ceil(f2 / n2));
    }
    const d2 = t2.indexOf("\u200B") >= 0, x2 = [];
    for (let i2 = 0; i2 < g2 - 1; i2++) {
      const t3 = m2[i2].codePoint, o2 = c$1(t3);
      if (s$2(t3) || o2) {
        let e2 = 0;
        if (t3 === 10)
          e2 -= 1e4;
        else if (o2 && d2)
          e2 += 150;
        else {
          t3 !== 40 && t3 !== 65288 || (e2 += 50);
          const s2 = m2[i2 + 1].codePoint;
          s2 !== 41 && s2 !== 65289 || (e2 += 50);
        }
        x2.push(this._buildBreak(i2 + 1, m2[i2].x, y2, x2, e2, false));
      }
    }
    const M = this._optimalBreaks(this._buildBreak(g2, f2, y2, x2, 0, true));
    let u2 = 0;
    const _ = c2 ? -l2 : l2;
    let I2 = 0;
    for (let e2 = 0; e2 < M.length; e2++) {
      const t3 = M[e2];
      let s2 = I2;
      for (; s2 < t3 && a$3(m2[s2].codePoint); )
        m2[s2].glyphMosaicItem = null, ++s2;
      let o2 = t3 - 1;
      for (; o2 > s2 && a$3(m2[o2].codePoint); )
        m2[o2].glyphMosaicItem = null, --o2;
      if (s2 <= o2) {
        const t4 = m2[s2].x;
        for (let i2 = s2; i2 <= o2; i2++)
          m2[i2].x -= t4, m2[i2].y = p2;
        let e3 = m2[o2].x;
        m2[o2].glyphMosaicItem && (e3 += m2[o2].glyphMosaicItem.metrics.advance), u2 = Math.max(e3, u2), r2 && this._applyJustification(m2, s2, o2);
      }
      I2 = t3, p2 += _;
    }
    if (m2.length > 0) {
      const t3 = M.length - 1, e2 = (r2 - this._hAnchor) * u2;
      let i2 = (-this._vAnchor * (t3 + 1) + 0.5) * l2;
      c2 && t3 && (i2 += t3 * l2);
      for (const s2 of m2)
        s2.x += e2, s2.y += i2;
    }
    return m2.filter((t3) => t3.glyphMosaicItem);
  }
  static getTextBox(t2, e2) {
    if (!t2.length)
      return null;
    let i2 = 1 / 0, s2 = 1 / 0, o2 = 0, c2 = 0;
    for (const a2 of t2) {
      const t3 = a2.glyphMosaicItem.metrics.advance, l2 = a2.x, r2 = a2.y - h$1, n2 = l2 + t3, m2 = r2 + e2;
      i2 = Math.min(i2, l2), o2 = Math.max(o2, n2), s2 = Math.min(s2, r2), c2 = Math.max(c2, m2);
    }
    return { x: i2, y: s2, width: o2 - i2, height: c2 - s2 };
  }
  static getBox(t2) {
    if (!t2.length)
      return null;
    let e2 = 1 / 0, i2 = 1 / 0, s2 = 0, o2 = 0;
    for (const c2 of t2) {
      const { height: t3, left: h2, top: a2, width: l2 } = c2.glyphMosaicItem.metrics, r2 = c2.x, n2 = c2.y - (t3 - Math.abs(a2)), m2 = r2 + l2 + h2, f2 = n2 + t3;
      e2 = Math.min(e2, r2), s2 = Math.max(s2, m2), i2 = Math.min(i2, n2), o2 = Math.max(o2, f2);
    }
    return { x: e2, y: i2, width: s2 - e2, height: o2 - i2 };
  }
  static addDecoration(e2, i2) {
    const s2 = e2.length;
    if (s2 === 0)
      return;
    const o2 = 3;
    let c2 = e2[0].x + e2[0].glyphMosaicItem.metrics.left, h2 = e2[0].y;
    for (let l2 = 1; l2 < s2; l2++) {
      const s3 = e2[l2];
      if (s3.y !== h2) {
        const a3 = e2[l2 - 1].x + e2[l2 - 1].glyphMosaicItem.metrics.left + e2[l2 - 1].glyphMosaicItem.metrics.width;
        e2.push({ codePoint: 0, x: c2, y: h2 + i2 - o2, vertical: false, glyphMosaicItem: { sdf: true, rect: new t$3(4, 0, 4, 8), metrics: { width: a3 - c2, height: 2 + 2 * o2, left: 0, top: 0, advance: 0 }, page: 0, code: 0 } }), h2 = s3.y, c2 = s3.x + s3.glyphMosaicItem.metrics.left;
      }
    }
    const a2 = e2[s2 - 1].x + e2[s2 - 1].glyphMosaicItem.metrics.left + e2[s2 - 1].glyphMosaicItem.metrics.width;
    e2.push({ codePoint: 0, x: c2, y: h2 + i2 - o2, vertical: false, glyphMosaicItem: { sdf: true, rect: new t$3(4, 0, 4, 8), metrics: { width: a2 - c2, height: 2 + 2 * o2, left: 0, top: 0, advance: 0 }, page: 0, code: 0 } });
  }
  _breakScore(t2, e2, i2, s2) {
    const o2 = (t2 - e2) * (t2 - e2);
    return s2 ? t2 < e2 ? o2 / 2 : 2 * o2 : o2 + Math.abs(i2) * i2;
  }
  _buildBreak(t2, e2, i2, s2, o2, c2) {
    let h2 = null, a2 = this._breakScore(e2, i2, o2, c2);
    for (const l2 of s2) {
      const t3 = e2 - l2.x, s3 = this._breakScore(t3, i2, o2, c2) + l2.score;
      s3 <= a2 && (h2 = l2, a2 = s3);
    }
    return { index: t2, x: e2, score: a2, previousBreak: h2 };
  }
  _optimalBreaks(t2) {
    return t2 ? this._optimalBreaks(t2.previousBreak).concat(t2.index) : [];
  }
  _applyJustification(t2, e2, i2) {
    const s2 = t2[i2], o2 = s2.vertical ? c : s2.glyphMosaicItem ? s2.glyphMosaicItem.metrics.advance : 0, h2 = (s2.x + o2) * this._justify;
    for (let c2 = e2; c2 <= i2; c2++)
      t2[c2].x -= h2;
  }
}
const g = 4096, x$1 = 8, d$2 = 0.5, w = 2;
class p {
  constructor(e2, t2, i2 = 0, n2 = -1, s2 = d$2) {
    this.x = e2, this.y = t2, this.angle = i2, this.segment = n2, this.minzoom = s2;
  }
}
class y$1 {
  constructor(e2, t2, n2, s2, a2, o2 = d$2, l2 = n$1) {
    this.anchor = e2, this.labelAngle = t2, this.glyphAngle = n2, this.page = s2, this.alternateVerticalGlyph = a2, this.minzoom = o2, this.maxzoom = l2;
  }
}
class f$3 {
  constructor(e2, t2, i2, n2, s2, a2, o2, l2, h2, r2, c2, g2) {
    this.tl = e2, this.tr = t2, this.bl = i2, this.br = n2, this.mosaicRect = s2, this.labelAngle = a2, this.minAngle = o2, this.maxAngle = l2, this.anchor = h2, this.minzoom = r2, this.maxzoom = c2, this.page = g2;
  }
}
class b {
  constructor(e2) {
    this.shapes = e2;
  }
}
class u$2 {
  getIconPlacement(i2, n2, s2) {
    const a2 = new t$4(i2.x, i2.y), h2 = s2.rotationAlignment === 0, r2 = s2.keepUpright;
    let c2 = s2.rotate * f$4;
    h2 && (c2 += i2.angle);
    const g2 = new b([]);
    return s2.allowOverlap && s2.ignorePlacement || !o$3 || (g2.iconColliders = []), this._addIconPlacement(g2, a2, n2, s2, c2), h2 && r2 && this._addIconPlacement(g2, a2, n2, s2, c2 + t$5), g2;
  }
  _addIconPlacement(e2, t2, n2, s2, a2) {
    const h2 = n2.pixelRatio, r2 = n2.width / h2, c2 = n2.height / h2, g2 = s2.offset;
    let m2 = g2[0], x2 = g2[1];
    switch (s2.anchor) {
      case 0:
        m2 -= r2 / 2, x2 -= c2 / 2;
        break;
      case 1:
        x2 -= c2 / 2;
        break;
      case 2:
        m2 -= r2, x2 -= c2 / 2;
        break;
      case 3:
        m2 -= r2 / 2;
        break;
      case 4:
        m2 -= r2 / 2, x2 -= c2;
        break;
      case 5:
        break;
      case 7:
        x2 -= c2;
        break;
      case 6:
        m2 -= r2;
        break;
      case 8:
        m2 -= r2, x2 -= c2;
    }
    const w2 = n2.rect, p2 = 2 / h2, y2 = m2 - p2, b2 = x2 - p2, u2 = y2 + w2.width / h2, I2 = b2 + w2.height / h2, k2 = new t$4(y2, b2), T = new t$4(u2, I2), P2 = new t$4(y2, I2), N = new t$4(u2, b2);
    if (a2 !== 0) {
      const e3 = Math.cos(a2), t3 = Math.sin(a2);
      k2.rotate(e3, t3), T.rotate(e3, t3), P2.rotate(e3, t3), N.rotate(e3, t3);
    }
    const z = new f$3(k2, N, P2, T, w2, a2, 0, 256, t2, d$2, n$1, 0);
    if (e2.shapes.push(z), (!s2.allowOverlap || !s2.ignorePlacement) && o$3) {
      const n3 = s2.size, o2 = s2.padding, l2 = { xTile: t2.x, yTile: t2.y, dxPixels: m2 * n3 - o2, dyPixels: x2 * n3 - o2, hard: !s2.optional, partIndex: 0, width: r2 * n3 + 2 * o2, height: c2 * n3 + 2 * o2, angle: a2, minLod: d$2, maxLod: n$1 };
      e2.iconColliders.push(l2);
    }
  }
  getTextPlacement(n2, s2, a2, o2) {
    const g2 = new t$4(n2.x, n2.y), m2 = o2.rotate * f$4, p2 = o2.rotationAlignment === 0, u2 = o2.keepUpright, I2 = o2.padding;
    let k2 = d$2;
    const T = !p2 ? 0 : n2.angle, P2 = n2.segment >= 0 && p2, N = o2.allowOverlap && o2.ignorePlacement ? null : [], z = [], A = 4, _ = !P2;
    let G = Number.POSITIVE_INFINITY, v = Number.NEGATIVE_INFINITY, M = G, E = v;
    const L = (P2 || p2) && u2, V2 = o2.size / c;
    let O = false;
    for (const e2 of s2)
      if (e2.vertical) {
        O = true;
        break;
      }
    let j, F = 0, Y = 0;
    if (!P2 && O) {
      const e2 = a$2.getTextBox(s2, o2.lineHeight * c);
      switch (o2.anchor) {
        case 1:
          F = e2.height / 2, Y = -e2.width / 2;
          break;
        case 2:
          F = -e2.height / 2, Y = e2.width / 2;
          break;
        case 3:
          F = e2.height / 2, Y = e2.width / 2;
          break;
        case 4:
          F = -e2.height / 2, Y = -e2.width / 2;
          break;
        case 5:
          F = e2.height;
          break;
        case 7:
          Y = -e2.width;
          break;
        case 6:
          Y = e2.width;
          break;
        case 8:
          F = -e2.height;
      }
    }
    F += o2.offset[0] * c, Y += o2.offset[1] * c;
    for (const e2 of s2) {
      const s3 = e2.glyphMosaicItem;
      if (!s3 || s3.rect.isEmpty)
        continue;
      const h2 = s3.rect, r2 = s3.metrics, b2 = s3.page;
      if (N && _) {
        if (j !== void 0 && j !== e2.y) {
          let e3, t2, s4, a3;
          O ? (e3 = -E + F, t2 = G + Y, s4 = E - M, a3 = v - G) : (e3 = G + F, t2 = M + Y, s4 = v - G, a3 = E - M);
          const l2 = { xTile: n2.x, yTile: n2.y, dxPixels: e3 * V2 - I2, dyPixels: t2 * V2 - I2, hard: !o2.optional, partIndex: 1, width: s4 * V2 + 2 * I2, height: a3 * V2 + 2 * I2, angle: m2, minLod: d$2, maxLod: n$1 };
          N.push(l2), G = Number.POSITIVE_INFINITY, v = Number.NEGATIVE_INFINITY, M = G, E = v;
        }
        j = e2.y;
      }
      const q2 = [];
      if (P2) {
        const t2 = 0.5 * s3.metrics.width, i2 = (e2.x + r2.left - A + t2) * V2 * x$1;
        if (k2 = this._placeGlyph(n2, k2, i2, a2, n2.segment, 1, e2.vertical, b2, q2), u2 && (k2 = this._placeGlyph(n2, k2, i2, a2, n2.segment, -1, e2.vertical, b2, q2)), k2 >= w)
          break;
      } else
        q2.push(new y$1(g2, T, T, b2, false)), p2 && u2 && q2.push(new y$1(g2, T + t$5, T + t$5, b2, false));
      const C2 = e2.x + r2.left, S = e2.y - h$1 - r2.top, U = C2 + r2.width, R = S + r2.height;
      let B, H, D, J, K, Q, W, X;
      if (!P2 && O)
        if (e2.vertical) {
          const e3 = (C2 + U) / 2 - r2.height / 2, t2 = (S + R) / 2 + r2.width / 2;
          B = new t$4(-t2 - A + F, e3 - A + Y), H = new t$4(B.x + h2.width, B.y + h2.height), D = new t$4(B.x, H.y), J = new t$4(H.x, B.y);
        } else
          B = new t$4(-S + A + F, C2 - A + Y), H = new t$4(B.x - h2.height, B.y + h2.width), D = new t$4(H.x, B.y), J = new t$4(B.x, H.y);
      else
        B = new t$4(C2 - A + F, S - A + Y), H = new t$4(B.x + h2.width, B.y + h2.height), D = new t$4(B.x, H.y), J = new t$4(H.x, B.y);
      for (const t2 of q2) {
        let i2, s4, a3, c2;
        if (t2.alternateVerticalGlyph) {
          if (!K) {
            const e3 = (S + R) / 2 + Y;
            K = new t$4((C2 + U) / 2 + F - r2.height / 2 - A, e3 + r2.width / 2 + A), Q = new t$4(K.x + h2.height, K.y - h2.width), W = new t$4(Q.x, K.y), X = new t$4(K.x, Q.y);
          }
          i2 = K, s4 = W, a3 = X, c2 = Q;
        } else
          i2 = B, s4 = D, a3 = J, c2 = H;
        const g3 = S, x2 = R, d2 = t2.glyphAngle + m2;
        if (d2 !== 0) {
          const e3 = Math.cos(d2), t3 = Math.sin(d2);
          i2 = i2.clone(), s4 = s4.clone(), a3 = a3.clone(), c2 = c2.clone(), i2.rotate(e3, t3), c2.rotate(e3, t3), s4.rotate(e3, t3), a3.rotate(e3, t3);
        }
        let p3 = 0, y2 = 256;
        if (P2 && O ? e2.vertical ? t2.alternateVerticalGlyph ? (p3 = 32, y2 = 96) : (p3 = 224, y2 = 32) : (p3 = 224, y2 = 96) : (p3 = 192, y2 = 64), z.push(new f$3(i2, a3, s4, c2, h2, t2.labelAngle, p3, y2, t2.anchor, t2.minzoom, t2.maxzoom, t2.page)), N && (!L || this._legible(t2.labelAngle))) {
          if (_)
            C2 < G && (G = C2), g3 < M && (M = g3), U > v && (v = U), x2 > E && (E = x2);
          else if (t2.minzoom < w) {
            const e3 = { xTile: n2.x, yTile: n2.y, dxPixels: (C2 + F) * V2 - I2, dyPixels: (g3 + F) * V2 - I2, hard: !o2.optional, partIndex: 1, width: (U - C2) * V2 + 2 * I2, height: (x2 - g3) * V2 + 2 * I2, angle: d2, minLod: t2.minzoom, maxLod: t2.maxzoom };
            N.push(e3);
          }
        }
      }
    }
    if (k2 >= w)
      return null;
    if (N && _) {
      let e2, t2, s3, a3;
      O ? (e2 = -E + F, t2 = G + Y, s3 = E - M, a3 = v - G) : (e2 = G + F, t2 = M + Y, s3 = v - G, a3 = E - M);
      const l2 = { xTile: n2.x, yTile: n2.y, dxPixels: e2 * V2 - I2, dyPixels: t2 * V2 - I2, hard: !o2.optional, partIndex: 1, width: s3 * V2 + 2 * I2, height: a3 * V2 + 2 * I2, angle: m2, minLod: d$2, maxLod: n$1 };
      N.push(l2);
    }
    const q = new b(z);
    return N && N.length > 0 && (q.textColliders = N), q;
  }
  _legible(e2) {
    const t2 = h$2(e2);
    return t2 < 65 || t2 >= 193;
  }
  _placeGlyph(e2, n2, o2, h2, r2, c2, g2, m2, x2) {
    let d2 = c2;
    const w2 = d2 < 0 ? a$4(e2.angle + t$5, r$3) : e2.angle;
    let p2 = 0;
    o2 < 0 && (d2 *= -1, o2 *= -1, p2 = t$5), d2 > 0 && ++r2;
    let f2 = new t$4(e2.x, e2.y), b2 = h2[r2], u2 = n$1;
    if (h2.length <= r2)
      return u2;
    for (; ; ) {
      const e3 = b2.x - f2.x, t2 = b2.y - f2.y, i2 = Math.sqrt(e3 * e3 + t2 * t2), l2 = Math.max(o2 / i2, n2), c3 = e3 / i2, I2 = t2 / i2, k2 = a$4(Math.atan2(I2, c3) + p2, r$3);
      if (x2.push(new y$1(f2, w2, k2, m2, false, l2, u2)), g2 && x2.push(new y$1(f2, w2, k2, m2, true, l2, u2)), l2 <= n2)
        return l2;
      f2 = b2.clone();
      do {
        if (r2 += d2, h2.length <= r2 || r2 < 0)
          return l2;
        b2 = h2[r2];
      } while (f2.isEqual(b2));
      let T = b2.x - f2.x, P2 = b2.y - f2.y;
      const N = Math.sqrt(T * T + P2 * P2);
      T *= i2 / N, P2 *= i2 / N, f2.x -= T, f2.y -= P2, u2 = l2;
    }
  }
}
class t$2 {
  constructor(e2, t2) {
    this.values = {};
    const s2 = t2.keys, r2 = t2.values;
    for (; e2.next(); )
      switch (e2.tag()) {
        case 1:
          this.id = e2.getUInt64();
          break;
        case 2: {
          const t3 = e2.getMessage(), o2 = this.values;
          for (; !t3.empty(); ) {
            const e3 = t3.getUInt32(), a2 = t3.getUInt32();
            o2[s2[e3]] = r2[a2];
          }
          t3.release();
          break;
        }
        case 3:
          this.type = e2.getUInt32();
          break;
        case 4:
          this._pbfGeometry = e2.getMessage();
          break;
        default:
          e2.skip();
      }
  }
  getGeometry(t2) {
    if (this._geometry !== void 0)
      return this._geometry;
    if (!this._pbfGeometry)
      return null;
    const s2 = this._pbfGeometry;
    let r2, o2;
    this._pbfGeometry = null, t2 ? t2.reset(this.type) : r2 = [];
    let a2, n2 = 1, i2 = 0, l2 = 0, h2 = 0;
    for (; !s2.empty(); ) {
      if (i2 === 0) {
        const e2 = s2.getUInt32();
        n2 = 7 & e2, i2 = e2 >> 3;
      }
      switch (i2--, n2) {
        case 1:
          l2 += s2.getSInt32(), h2 += s2.getSInt32(), t2 ? t2.moveTo(l2, h2) : (o2 && r2.push(o2), o2 = [], o2.push(new t$4(l2, h2)));
          break;
        case 2:
          l2 += s2.getSInt32(), h2 += s2.getSInt32(), t2 ? t2.lineTo(l2, h2) : o2.push(new t$4(l2, h2));
          break;
        case 7:
          t2 ? t2.close() : o2 && !o2[0].equals(l2, h2) && o2.push(o2[0].clone());
          break;
        default:
          throw s2.release(), new Error("Invalid path operation");
      }
    }
    return t2 ? a2 = t2.result() : (o2 && r2.push(o2), a2 = r2), s2.release(), this._geometry = a2, a2;
  }
}
class r$2 extends t$6 {
  constructor() {
    super(12);
  }
  add(s2, r2, t2) {
    const e2 = this.array;
    e2.push(s2), e2.push(r2), e2.push(t2);
  }
}
class e {
  constructor(t2) {
    for (this.extent = 4096, this.keys = [], this.values = [], this._pbfLayer = t2.clone(); t2.next(); )
      switch (t2.tag()) {
        case 1:
          this.name = t2.getString();
          break;
        case 3:
          this.keys.push(t2.getString());
          break;
        case 4:
          this.values.push(t2.processMessage(e._parseValue));
          break;
        case 5:
          this.extent = t2.getUInt32();
          break;
        default:
          t2.skip();
      }
  }
  getData() {
    return this._pbfLayer;
  }
  static _parseValue(e2) {
    for (; e2.next(); )
      switch (e2.tag()) {
        case 1:
          return e2.getString();
        case 2:
          return e2.getFloat();
        case 3:
          return e2.getDouble();
        case 4:
          return e2.getInt64();
        case 5:
          return e2.getUInt64();
        case 6:
          return e2.getSInt64();
        case 7:
          return e2.getBool();
        default:
          e2.skip();
      }
    return null;
  }
}
class o$2 extends t$6 {
  constructor(s2) {
    super(s2);
  }
  add(t2, o2, r2, u2, h2, a2, n2, e2) {
    const d2 = this.array;
    let p2 = t$6.i1616to32(t2, o2);
    d2.push(p2);
    const c2 = 31;
    p2 = t$6.i8888to32(Math.round(c2 * r2), Math.round(c2 * u2), Math.round(c2 * h2), Math.round(c2 * a2)), d2.push(p2), p2 = t$6.i1616to32(n2, 0), d2.push(p2), e2 && d2.push(...e2);
  }
}
class r$1 extends t$6 {
  constructor(s2) {
    super(s2);
  }
  add(t2, o2, r2) {
    const u2 = this.array;
    u2.push(t$6.i1616to32(t2, o2)), r2 && u2.push(...r2);
  }
}
class u$1 extends t$6 {
  constructor(s2) {
    super(s2);
  }
  add(t2, o2, r2, u2, h2, a2, n2) {
    const e2 = this.array, d2 = this.index;
    let p2 = t$6.i1616to32(t2, o2);
    e2.push(p2);
    const c2 = 15;
    return p2 = t$6.i8888to32(Math.round(c2 * r2), Math.round(c2 * u2), h2, a2), e2.push(p2), n2 && e2.push(...n2), d2;
  }
}
class h extends t$6 {
  constructor(s2) {
    super(s2);
  }
  add(o2, r2, u2, h2, a2, n2, e2, d2, p2, c2, i2, M) {
    const l2 = this.array;
    let m2 = t$6.i1616to32(o2, r2);
    l2.push(m2), m2 = t$6.i1616to32(Math.round(8 * u2), Math.round(8 * h2)), l2.push(m2), m2 = t$6.i8888to32(a2 / 4, n2 / 4, d2, p2), l2.push(m2), m2 = t$6.i8888to32(0, h$2(e2), 10 * c2, Math.min(10 * i2, 255)), l2.push(m2), M && l2.push(...M);
  }
}
class a$1 extends t$6 {
  constructor(s2) {
    super(s2);
  }
  add(t2, o2, r2, u2, h2) {
    const a2 = this.array, n2 = t$6.i1616to32(2 * t2 + r2, 2 * o2 + u2);
    a2.push(n2), h2 && a2.push(...h2);
  }
}
class t$1 {
  constructor(t2, e2) {
    this.layerExtent = 4096, this._features = [], this.layer = t2, this.zoom = e2, this._filter = t2.getFeatureFilter();
  }
  pushFeature(t2) {
    this._filter && !this._filter.filter(t2, this.zoom) || this._features.push(t2);
  }
  hasFeatures() {
    return this._features.length > 0;
  }
}
class t extends t$1 {
  constructor(e2, t2, r2, i2) {
    super(e2, t2), this.type = 4, this._circleVertexBuffer = r2, this._circleIndexBuffer = i2;
  }
  get circleIndexStart() {
    return this._circleIndexStart;
  }
  get circleIndexCount() {
    return this._circleIndexCount;
  }
  processFeatures(e2) {
    const t2 = this._circleVertexBuffer, r2 = this._circleIndexBuffer;
    this._circleIndexStart = 3 * r2.index, this._circleIndexCount = 0;
    const i2 = this.layer, c2 = this.zoom;
    e2 && e2.setExtent(this.layerExtent);
    for (const s2 of this._features) {
      const n2 = s2.getGeometry(e2);
      if (!n2)
        continue;
      const l2 = i2.circleMaterial.encodeAttributes(s2, c2, i2);
      for (const e3 of n2)
        if (e3)
          for (const i3 of e3) {
            const e4 = t2.index;
            t2.add(i3.x, i3.y, 0, 0, l2), t2.add(i3.x, i3.y, 0, 1, l2), t2.add(i3.x, i3.y, 1, 0, l2), t2.add(i3.x, i3.y, 1, 1, l2), r2.add(e4 + 0, e4 + 1, e4 + 2), r2.add(e4 + 1, e4 + 2, e4 + 3), this._circleIndexCount += 6;
          }
    }
  }
  serialize() {
    let e2 = 6;
    e2 += this.layerUIDs.length, e2 += this._circleVertexBuffer.array.length, e2 += this._circleIndexBuffer.array.length;
    const t2 = new Uint32Array(e2), r2 = new Int32Array(t2.buffer);
    let i2 = 0;
    t2[i2++] = this.type, t2[i2++] = this.layerUIDs.length;
    for (let c2 = 0; c2 < this.layerUIDs.length; c2++)
      t2[i2++] = this.layerUIDs[c2];
    t2[i2++] = this._circleIndexStart, t2[i2++] = this._circleIndexCount, t2[i2++] = this._circleVertexBuffer.array.length;
    for (let c2 = 0; c2 < this._circleVertexBuffer.array.length; c2++)
      r2[i2++] = this._circleVertexBuffer.array[c2];
    t2[i2++] = this._circleIndexBuffer.array.length;
    for (let c2 = 0; c2 < this._circleIndexBuffer.array.length; c2++)
      t2[i2++] = this._circleIndexBuffer.array[c2];
    return t2.buffer;
  }
}
const s$1 = new i();
class o$1 extends t$1 {
  constructor(e2, t2, l2, i2, r2, n2) {
    super(e2, t2), this.type = 1, this._fillVertexBuffer = l2, this._fillIndexBuffer = i2, this._outlineVertexBuffer = r2, this._outlineIndexBuffer = n2;
  }
  get fillIndexStart() {
    return this._fillIndexStart;
  }
  get fillIndexCount() {
    return this._fillIndexCount;
  }
  get outlineIndexStart() {
    return this._outlineIndexStart;
  }
  get outlineIndexCount() {
    return this._outlineIndexCount;
  }
  processFeatures(e2) {
    this._fillIndexStart = 3 * this._fillIndexBuffer.index, this._fillIndexCount = 0, this._outlineIndexStart = 3 * this._outlineIndexBuffer.index, this._outlineIndexCount = 0;
    const t2 = this.layer, l2 = this.zoom;
    e2 && e2.setExtent(this.layerExtent);
    let i2 = t2.getPaintValue("fill-pattern", l2) === void 0 && t2.getPaintValue("fill-antialias", l2);
    if (t2.outlineUsesFillColor) {
      if (i2 && !t2.hasDataDrivenOpacity) {
        const e3 = t2.getPaintValue("fill-opacity", l2), r3 = t2.getPaintValue("fill-opacity", l2 + 1);
        e3 < 1 && r3 < 1 && (i2 = false);
      }
      if (i2 && !t2.hasDataDrivenColor) {
        const e3 = t2.getPaintValue("fill-color", l2), r3 = t2.getPaintValue("fill-color", l2 + 1);
        e3[3] < 1 && r3[3] < 1 && (i2 = false);
      }
    }
    const { fillMaterial: r2, outlineMaterial: n2, hasDataDrivenFill: s2, hasDataDrivenOutline: o2 } = t2;
    for (const f2 of this._features) {
      const a2 = s2 ? r2.encodeAttributes(f2, l2, t2) : null, u2 = i2 && o2 ? n2.encodeAttributes(f2, l2, t2) : null, d2 = f2.getGeometry(e2), h2 = e2 == null ? void 0 : e2.validateTessellation;
      this._processFeature(d2, i2, t2.outlineUsesFillColor, a2, u2, h2);
    }
  }
  serialize() {
    let e2 = 10;
    e2 += this.layerUIDs.length, e2 += this._fillVertexBuffer.array.length, e2 += this._fillIndexBuffer.array.length, e2 += this._outlineVertexBuffer.array.length, e2 += this._outlineIndexBuffer.array.length;
    const t2 = new Uint32Array(e2), l2 = new Int32Array(t2.buffer);
    let i2 = 0;
    t2[i2++] = this.type, t2[i2++] = this.layerUIDs.length;
    for (let r2 = 0; r2 < this.layerUIDs.length; r2++)
      t2[i2++] = this.layerUIDs[r2];
    t2[i2++] = this._fillIndexStart, t2[i2++] = this._fillIndexCount, t2[i2++] = this._outlineIndexStart, t2[i2++] = this._outlineIndexCount, t2[i2++] = this._fillVertexBuffer.array.length;
    for (let r2 = 0; r2 < this._fillVertexBuffer.array.length; r2++)
      l2[i2++] = this._fillVertexBuffer.array[r2];
    t2[i2++] = this._fillIndexBuffer.array.length;
    for (let r2 = 0; r2 < this._fillIndexBuffer.array.length; r2++)
      t2[i2++] = this._fillIndexBuffer.array[r2];
    t2[i2++] = this._outlineVertexBuffer.array.length;
    for (let r2 = 0; r2 < this._outlineVertexBuffer.array.length; r2++)
      l2[i2++] = this._outlineVertexBuffer.array[r2];
    t2[i2++] = this._outlineIndexBuffer.array.length;
    for (let r2 = 0; r2 < this._outlineIndexBuffer.array.length; r2++)
      t2[i2++] = this._outlineIndexBuffer.array[r2];
    return t2.buffer;
  }
  _processFeature(e2, t2, l2, i2, r2, n2) {
    if (!e2)
      return;
    const s2 = e2.length, f2 = !r2 || r2.length === 0;
    if (t2 && (!l2 || f2))
      for (let o2 = 0; o2 < s2; o2++)
        this._processOutline(e2[o2], r2);
    const a2 = 128;
    let u2;
    for (let d2 = 0; d2 < s2; d2++) {
      const t3 = o$1._area(e2[d2]);
      t3 > a2 ? (u2 !== void 0 && this._processFill(e2, u2, i2, n2), u2 = [d2]) : t3 < -a2 && u2 !== void 0 && u2.push(d2);
    }
    u2 !== void 0 && this._processFill(e2, u2, i2, n2);
  }
  _processOutline(e2, t2) {
    const l2 = this._outlineVertexBuffer, r2 = this._outlineIndexBuffer, n2 = r2.index;
    let s2, o2, f2;
    const a2 = new t$4(0, 0), u2 = new t$4(0, 0), d2 = new t$4(0, 0);
    let h2 = -1, x2 = -1, y2 = -1, c2 = -1, _ = -1, g2 = false;
    const I2 = 0;
    let B = e2.length;
    if (B < 2)
      return;
    const p2 = e2[I2];
    let V2 = e2[B - 1];
    for (; B && V2.isEqual(p2); )
      --B, V2 = e2[B - 1];
    if (!(B - I2 < 2)) {
      for (let i2 = I2; i2 < B; ++i2) {
        i2 === I2 ? (s2 = e2[B - 1], o2 = e2[I2], f2 = e2[I2 + 1], a2.assignSub(o2, s2), a2.normalize(), a2.rightPerpendicular()) : (s2 = o2, o2 = f2, f2 = i2 !== B - 1 ? e2[i2 + 1] : e2[I2], a2.assign(u2));
        const n3 = this._isClipEdge(s2, o2);
        c2 === -1 && (g2 = n3), u2.assignSub(f2, o2), u2.normalize(), u2.rightPerpendicular();
        const p3 = a2.x * u2.y - a2.y * u2.x;
        d2.assignAdd(a2, u2), d2.normalize();
        const V3 = -d2.x * -a2.x + -d2.y * -a2.y;
        let C2 = Math.abs(V3 !== 0 ? 1 / V3 : 1);
        C2 > 8 && (C2 = 8), p3 >= 0 ? (y2 = l2.add(o2.x, o2.y, a2.x, a2.y, 0, 1, t2), c2 === -1 && (c2 = y2), h2 >= 0 && x2 >= 0 && y2 >= 0 && !n3 && r2.add(h2, x2, y2), x2 = l2.add(o2.x, o2.y, C2 * -d2.x, C2 * -d2.y, 0, -1, t2), _ === -1 && (_ = x2), h2 >= 0 && x2 >= 0 && y2 >= 0 && !n3 && r2.add(h2, x2, y2), h2 = x2, x2 = y2, y2 = l2.add(o2.x, o2.y, d2.x, d2.y, 0, 1, t2), h2 >= 0 && x2 >= 0 && y2 >= 0 && !n3 && r2.add(h2, x2, y2), x2 = l2.add(o2.x, o2.y, u2.x, u2.y, 0, 1, t2), h2 >= 0 && x2 >= 0 && y2 >= 0 && !n3 && r2.add(h2, x2, y2)) : (y2 = l2.add(o2.x, o2.y, C2 * d2.x, C2 * d2.y, 0, 1, t2), c2 === -1 && (c2 = y2), h2 >= 0 && x2 >= 0 && y2 >= 0 && !n3 && r2.add(h2, x2, y2), x2 = l2.add(o2.x, o2.y, -a2.x, -a2.y, 0, -1, t2), _ === -1 && (_ = x2), h2 >= 0 && x2 >= 0 && y2 >= 0 && !n3 && r2.add(h2, x2, y2), h2 = x2, x2 = y2, y2 = l2.add(o2.x, o2.y, -d2.x, -d2.y, 0, -1, t2), h2 >= 0 && x2 >= 0 && y2 >= 0 && !n3 && r2.add(h2, x2, y2), h2 = l2.add(o2.x, o2.y, -u2.x, -u2.y, 0, -1, t2), h2 >= 0 && x2 >= 0 && y2 >= 0 && !n3 && r2.add(h2, x2, y2));
      }
      h2 >= 0 && x2 >= 0 && c2 >= 0 && !g2 && r2.add(h2, x2, c2), h2 >= 0 && c2 >= 0 && _ >= 0 && !g2 && r2.add(h2, _, c2), this._outlineIndexCount += 3 * (r2.index - n2);
    }
  }
  _processFill(i2, r2, n2, s2) {
    let o2;
    r2.length > 1 && (o2 = []);
    let a2 = 0;
    for (const e2 of r2)
      a2 !== 0 && o2.push(a2), a2 += i2[e2].length;
    const u2 = 2 * a2, d2 = o$4.acquire();
    for (const e2 of r2) {
      const t2 = i2[e2], l2 = t2.length;
      for (let e3 = 0; e3 < l2; ++e3)
        d2.push(t2[e3].x, t2[e3].y);
    }
    const h2 = e$2(d2, o2, 2);
    if (s2 && s$3(d2, o2, 2, h2) > 0) {
      const e2 = [], t2 = [];
      if (f$2(e2, t2, i2, r2), t2.length > 0) {
        const l2 = this._fillVertexBuffer.index;
        let i3 = 0;
        for (; i3 < e2.length; )
          this._fillVertexBuffer.add(e2[i3++], e2[i3++], n2);
        let r3 = 0;
        for (; r3 < t2.length; )
          this._fillIndexBuffer.add(l2 + t2[r3 + 0], l2 + t2[r3 + 1], l2 + t2[r3 + 2]), r3 += 3;
        this._fillIndexCount += t2.length;
      }
    } else {
      const e2 = h2.length;
      if (e2 > 0) {
        const t2 = this._fillVertexBuffer.index;
        let l2 = 0;
        for (; l2 < u2; )
          this._fillVertexBuffer.add(d2[l2++], d2[l2++], n2);
        let i3 = 0;
        for (; i3 < e2; )
          this._fillIndexBuffer.add(t2 + h2[i3++], t2 + h2[i3++], t2 + h2[i3++]);
        this._fillIndexCount += e2;
      }
    }
    o$4.release(d2);
  }
  _isClipEdge(e2, t2) {
    return e2.x === t2.x ? e2.x <= -64 || e2.x >= 4160 : e2.y === t2.y && (e2.y <= -64 || e2.y >= 4160);
  }
  static _area(e2) {
    let t2 = 0;
    const l2 = e2.length - 1;
    for (let i2 = 0; i2 < l2; i2++)
      t2 += (e2[i2].x - e2[i2 + 1].x) * (e2[i2].y + e2[i2 + 1].y);
    return t2 += (e2[l2].x - e2[0].x) * (e2[l2].y + e2[0].y), 0.5 * t2;
  }
}
function f$2(e2, t2, l2, i2) {
  let r2, n2;
  s$1.beginPolygon(e2, t2);
  for (const o2 of i2) {
    const e3 = l2[o2];
    if (!(e3.length < 3)) {
      s$1.beginContour();
      for (let t3 = 0; t3 < e3.length; ++t3) {
        r2 = e3[t3].x, n2 = e3[t3].y;
        const l3 = [r2, n2, 0];
        s$1.addVertex(l3, l3);
      }
      s$1.endContour();
    }
  }
  s$1.endPolygon();
}
const l = 65535, s = 1 / 3.8, x = 0.97, d$1 = 0.8;
class a extends t$1 {
  constructor(e2, t2, r2, n2) {
    super(e2, t2), this.type = 2, this._tessellationOptions = {}, this.tessellationProperties = { _lineVertexBuffer: null, _lineIndexBuffer: null, _hasPattern: null, _ddValues: null, _capType: null, _joinType: null, _miterLimitCosine: null, _roundLimitCosine: null }, this.tessellationProperties._lineVertexBuffer = r2, this.tessellationProperties._lineIndexBuffer = n2, this.tessellationProperties._hasPattern = e2.getPaintValue("line-pattern", this.zoom) || e2.getPaintValue("line-dasharray", this.zoom).length > 0, this._isThinLine = e2.isThinLine, this._isThinLine ? this._tessellationCallbacks = { vertex: u(this.tessellationProperties), bridge: f$1(this.tessellationProperties) } : this._tessellationCallbacks = { vertex: o(this.tessellationProperties), bridge: V(this.tessellationProperties) };
  }
  get lineIndexStart() {
    return this._lineIndexStart;
  }
  get lineIndexCount() {
    return this._lineIndexCount;
  }
  processFeatures(t2) {
    this._lineIndexStart = 3 * this.tessellationProperties._lineIndexBuffer.index, this._lineIndexCount = 0;
    const n2 = this.layer, i2 = this.zoom;
    t2 && t2.setExtent(this.layerExtent);
    for (const r2 of this._features) {
      const l2 = n2.hasDataDrivenLine ? n2.lineMaterial.encodeAttributes(r2, i2, n2) : null;
      this.tessellationProperties._capType = n2.getLayoutValue("line-cap", i2, r2), this.tessellationProperties._joinType = n2.getLayoutValue("line-join", i2, r2), this.tessellationProperties._miterLimitCosine = u$3(n2.getLayoutValue("line-miter-limit", i2, r2)), this.tessellationProperties._roundLimitCosine = u$3(n2.getLayoutValue("line-round-limit", i2, r2));
      const s2 = r2.getGeometry(t2);
      this._processFeature(s2, l2);
    }
    i$1();
  }
  serialize() {
    let e2 = 6;
    e2 += this.layerUIDs.length, e2 += this.tessellationProperties._lineVertexBuffer.array.length, e2 += this.tessellationProperties._lineIndexBuffer.array.length;
    const t2 = new Uint32Array(e2), r2 = new Int32Array(t2.buffer);
    let n2 = 0;
    t2[n2++] = this.type, t2[n2++] = this.layerUIDs.length;
    for (let i2 = 0; i2 < this.layerUIDs.length; i2++)
      t2[n2++] = this.layerUIDs[i2];
    t2[n2++] = this._lineIndexStart, t2[n2++] = this._lineIndexCount, t2[n2++] = this.tessellationProperties._lineVertexBuffer.array.length;
    for (let i2 = 0; i2 < this.tessellationProperties._lineVertexBuffer.array.length; i2++)
      r2[n2++] = this.tessellationProperties._lineVertexBuffer.array[i2];
    t2[n2++] = this.tessellationProperties._lineIndexBuffer.array.length;
    for (let i2 = 0; i2 < this.tessellationProperties._lineIndexBuffer.array.length; i2++)
      t2[n2++] = this.tessellationProperties._lineIndexBuffer.array[i2];
    return t2.buffer;
  }
  _processFeature(e2, t2) {
    if (!e2)
      return;
    const r2 = e2.length;
    for (let n2 = 0; n2 < r2; n2++)
      this._processGeometry(e2[n2], t2);
  }
  _processGeometry(e2, t2) {
    if (e2.length < 2)
      return;
    const r2 = 1e-3;
    let i2, x2, d2 = e2[0], a2 = 1;
    for (; a2 < e2.length; )
      i2 = e2[a2].x - d2.x, x2 = e2[a2].y - d2.y, i2 * i2 + x2 * x2 < r2 * r2 ? e2.splice(a2, 1) : (d2 = e2[a2], ++a2);
    if (e2.length < 2)
      return;
    const u2 = 3 * this.tessellationProperties._lineIndexBuffer.index;
    this._tessellationOptions.trackDistance = this.tessellationProperties._hasPattern, this._tessellationOptions.initialDistance = 0, this._tessellationOptions.thin = this._isThinLine, this._tessellationOptions.wrapDistance = l, this._tessellationOptions.outerBisectorAutoSplitThreshold = s, this._tessellationOptions.enableOuterBisectorSplit = this.tessellationProperties._hasPattern, this._tessellationOptions.innerBisectorAutoSplitThreshold = s, this._tessellationOptions.enableInnerBisectorSplit = this.tessellationProperties._hasPattern, this.tessellationProperties._ddValues = t2, r$4(e2, this._tessellationOptions, this._tessellationCallbacks), this._lineIndexCount += 3 * this.tessellationProperties._lineIndexBuffer.index - u2;
  }
}
const u = (e2) => (t2) => {
  t2.entry0 = e2._lineVertexBuffer.index, e2._lineVertexBuffer.add(t2.currentVertex.x, t2.currentVertex.y, t2.prevNormal.x, t2.prevNormal.y, 0, -1, t2.distance, e2._ddValues), t2.entry2 = e2._lineVertexBuffer.index, e2._lineVertexBuffer.add(t2.currentVertex.x, t2.currentVertex.y, -t2.prevNormal.x, -t2.prevNormal.y, 0, 1, t2.distance, e2._ddValues), t2.exit0 = e2._lineVertexBuffer.index, e2._lineVertexBuffer.add(t2.currentVertex.x, t2.currentVertex.y, t2.nextNormal.x, t2.nextNormal.y, 0, -1, t2.distance, e2._ddValues), t2.exit2 = e2._lineVertexBuffer.index, e2._lineVertexBuffer.add(t2.currentVertex.x, t2.currentVertex.y, -t2.nextNormal.x, -t2.nextNormal.y, 0, 1, t2.distance, e2._ddValues);
}, f$1 = (e2) => (t2) => {
  e2._lineIndexBuffer.add(t2.leftExit0, t2.rightEntry0, t2.leftExit2), e2._lineIndexBuffer.add(t2.rightEntry0, t2.rightEntry2, t2.leftExit2);
}, o = (e2) => (r2) => {
  const n2 = e2._joinType === 2 ? e2._miterLimitCosine : e2._roundLimitCosine, i2 = r2.isCap && e2._capType !== 0;
  let l2 = false;
  r2.cosine > x ? (r2.exit0 = r2.entry0 = e2._lineVertexBuffer.index, e2._lineVertexBuffer.add(r2.currentVertex.x, r2.currentVertex.y, r2.bisector.x / r2.cosine, r2.bisector.y / r2.cosine, 0, -1, r2.distance, e2._ddValues), r2.exit2 = r2.entry2 = e2._lineVertexBuffer.index, e2._lineVertexBuffer.add(r2.currentVertex.x, r2.currentVertex.y, -r2.bisector.x / r2.cosine, -r2.bisector.y / r2.cosine, 0, 1, r2.distance, e2._ddValues)) : r2.cosine < 1 - x ? (r2.entry0 = e2._lineVertexBuffer.index, e2._lineVertexBuffer.add(r2.currentVertex.x, r2.currentVertex.y, r2.prevNormal.x, r2.prevNormal.y, 0, -1, r2.distance, e2._ddValues), r2.entry2 = e2._lineVertexBuffer.index, e2._lineVertexBuffer.add(r2.currentVertex.x, r2.currentVertex.y, -r2.prevNormal.x, -r2.prevNormal.y, 0, 1, r2.distance, e2._ddValues), r2.exit0 = e2._lineVertexBuffer.index, e2._lineVertexBuffer.add(r2.currentVertex.x, r2.currentVertex.y, r2.nextNormal.x, r2.nextNormal.y, 0, -1, r2.distance, e2._ddValues), r2.exit2 = e2._lineVertexBuffer.index, e2._lineVertexBuffer.add(r2.currentVertex.x, r2.currentVertex.y, -r2.nextNormal.x, -r2.nextNormal.y, 0, 1, r2.distance, e2._ddValues)) : r2.canSplit ? (n$2(), r2.sign > 0 ? (r2.splitInner ? (r2.exit0 = e2._lineVertexBuffer.index, e2._lineVertexBuffer.add(r2.currentVertex.x, r2.currentVertex.y, r2.leftInner.x, r2.leftInner.y, 0, -1, r2.distance, e2._ddValues), r2.entry0 = e2._lineVertexBuffer.index, e2._lineVertexBuffer.add(r2.currentVertex.x, r2.currentVertex.y, r2.rightInner.x, r2.rightInner.y, 0, -1, r2.distance, e2._ddValues)) : (r2.exit0 = r2.entry0 = e2._lineVertexBuffer.index, e2._lineVertexBuffer.add(r2.currentVertex.x, r2.currentVertex.y, r2.bisector.x / r2.cosine, r2.bisector.y / r2.cosine, 0, -1, r2.distance, e2._ddValues)), r2.cosine < n2 ? (l2 = !r2.isCap, r2.entry2 = e2._lineVertexBuffer.index, e2._lineVertexBuffer.add(r2.currentVertex.x, r2.currentVertex.y, -r2.prevNormal.x, -r2.prevNormal.y, 0, 1, r2.distance, e2._ddValues), r2.exit2 = e2._lineVertexBuffer.index, e2._lineVertexBuffer.add(r2.currentVertex.x, r2.currentVertex.y, -r2.nextNormal.x, -r2.nextNormal.y, 0, 1, r2.distance, e2._ddValues)) : r2.splitOuter ? (l2 = l2 || r2.gapOuter, r2.entry2 = e2._lineVertexBuffer.index, e2._lineVertexBuffer.add(r2.currentVertex.x, r2.currentVertex.y, -r2.leftOuter.x, -r2.leftOuter.y, 0, 1, r2.distance, e2._ddValues), r2.exit2 = e2._lineVertexBuffer.index, e2._lineVertexBuffer.add(r2.currentVertex.x, r2.currentVertex.y, -r2.rightOuter.x, -r2.rightOuter.y, 0, 1, r2.distance, e2._ddValues)) : (r2.entry2 = r2.exit2 = e2._lineVertexBuffer.index, e2._lineVertexBuffer.add(r2.currentVertex.x, r2.currentVertex.y, -r2.bisector.x / r2.cosine, -r2.bisector.y / r2.cosine, 0, 1, r2.distance, e2._ddValues))) : (r2.splitInner ? (r2.exit2 = e2._lineVertexBuffer.index, e2._lineVertexBuffer.add(r2.currentVertex.x, r2.currentVertex.y, -r2.leftInner.x, -r2.leftInner.y, 0, 1, r2.distance, e2._ddValues), r2.entry2 = e2._lineVertexBuffer.index, e2._lineVertexBuffer.add(r2.currentVertex.x, r2.currentVertex.y, -r2.rightInner.x, -r2.rightInner.y, 0, 1, r2.distance, e2._ddValues)) : (r2.exit2 = r2.entry2 = e2._lineVertexBuffer.index, e2._lineVertexBuffer.add(r2.currentVertex.x, r2.currentVertex.y, -r2.bisector.x / r2.cosine, -r2.bisector.y / r2.cosine, 0, 1, r2.distance, e2._ddValues)), r2.cosine < n2 ? (l2 = !r2.isCap, r2.entry0 = e2._lineVertexBuffer.index, e2._lineVertexBuffer.add(r2.currentVertex.x, r2.currentVertex.y, r2.prevNormal.x, r2.prevNormal.y, 0, -1, r2.distance, e2._ddValues), r2.exit0 = e2._lineVertexBuffer.index, e2._lineVertexBuffer.add(r2.currentVertex.x, r2.currentVertex.y, r2.nextNormal.x, r2.nextNormal.y, 0, -1, r2.distance, e2._ddValues)) : r2.splitOuter ? (l2 = l2 || r2.gapOuter, r2.entry0 = e2._lineVertexBuffer.index, e2._lineVertexBuffer.add(r2.currentVertex.x, r2.currentVertex.y, r2.leftOuter.x, r2.leftOuter.y, 0, -1, r2.distance, e2._ddValues), r2.exit0 = e2._lineVertexBuffer.index, e2._lineVertexBuffer.add(r2.currentVertex.x, r2.currentVertex.y, r2.rightOuter.x, r2.rightOuter.y, 0, -1, r2.distance, e2._ddValues)) : (r2.exit0 = r2.entry0 = e2._lineVertexBuffer.index, e2._lineVertexBuffer.add(r2.currentVertex.x, r2.currentVertex.y, r2.bisector.x / r2.cosine, r2.bisector.y / r2.cosine, 0, -1, r2.distance, e2._ddValues)))) : r2.sign > 0 ? (r2.exit0 = r2.entry0 = e2._lineVertexBuffer.index, e2._lineVertexBuffer.add(r2.currentVertex.x, r2.currentVertex.y, r2.bisector.x / r2.cosine, r2.bisector.y / r2.cosine, 0, -1, r2.distance, e2._ddValues), r2.cosine < n2 ? (l2 = !r2.isCap, r2.entry2 = e2._lineVertexBuffer.index, e2._lineVertexBuffer.add(r2.currentVertex.x, r2.currentVertex.y, -r2.prevNormal.x, -r2.prevNormal.y, 0, 1, r2.distance, e2._ddValues), r2.exit2 = e2._lineVertexBuffer.index, e2._lineVertexBuffer.add(r2.currentVertex.x, r2.currentVertex.y, -r2.nextNormal.x, -r2.nextNormal.y, 0, 1, r2.distance, e2._ddValues)) : (r2.entry2 = r2.exit2 = e2._lineVertexBuffer.index, e2._lineVertexBuffer.add(r2.currentVertex.x, r2.currentVertex.y, -r2.bisector.x / r2.cosine, -r2.bisector.y / r2.cosine, 0, 1, r2.distance, e2._ddValues))) : (r2.exit2 = r2.entry2 = e2._lineVertexBuffer.index, e2._lineVertexBuffer.add(r2.currentVertex.x, r2.currentVertex.y, -r2.bisector.x / r2.cosine, -r2.bisector.y / r2.cosine, 0, 1, r2.distance, e2._ddValues), r2.cosine < n2 ? (l2 = !r2.isCap, r2.entry0 = e2._lineVertexBuffer.index, e2._lineVertexBuffer.add(r2.currentVertex.x, r2.currentVertex.y, r2.prevNormal.x, r2.prevNormal.y, 0, -1, r2.distance, e2._ddValues), r2.exit0 = e2._lineVertexBuffer.index, e2._lineVertexBuffer.add(r2.currentVertex.x, r2.currentVertex.y, r2.nextNormal.x, r2.nextNormal.y, 0, -1, r2.distance, e2._ddValues)) : (r2.exit0 = r2.entry0 = e2._lineVertexBuffer.index, e2._lineVertexBuffer.add(r2.currentVertex.x, r2.currentVertex.y, r2.bisector.x / r2.cosine, r2.bisector.y / r2.cosine, 0, -1, r2.distance, e2._ddValues)));
  let s2;
  if (r2.canSplit && (r2.splitInner || r2.splitOuter) || l2 || i2 ? (s2 = r2.entry1 = r2.exit1 = e2._lineVertexBuffer.index, e2._lineVertexBuffer.add(r2.currentVertex.x, r2.currentVertex.y, 0, 0, 0, 0, r2.distance, e2._ddValues)) : s2 = r2.entry1 = r2.exit1 = null, l2 && e2._joinType !== 1)
    e2._lineIndexBuffer.add(s2, r2.sign > 0 ? r2.exit2 : r2.entry0, r2.sign > 0 ? r2.entry2 : r2.exit0);
  else if (i2 && e2._capType === 1 || l2 && e2._joinType === 1) {
    let t2, n3, i3, l3, x2, a2;
    if (r2.isCap) {
      const e3 = Math.PI;
      x2 = Math.ceil(e3 / d$1), a2 = e3 / x2, r2.isFirstVertex ? (t2 = r2.prevNormal.x, n3 = r2.prevNormal.y, i3 = r2.entry0, l3 = r2.entry2) : r2.isLastVertex && (t2 = -r2.nextNormal.x, n3 = -r2.nextNormal.y, i3 = r2.exit2, l3 = r2.exit0);
    } else {
      const e3 = 2 * Math.acos(r2.cosine);
      x2 = Math.ceil(e3 / d$1), a2 = e3 / x2, t2 = r2.sign > 0 ? -r2.prevNormal.x : r2.nextNormal.x, n3 = r2.sign > 0 ? -r2.prevNormal.y : r2.nextNormal.y, i3 = r2.sign > 0 ? r2.entry2 : r2.exit0, l3 = r2.sign > 0 ? r2.exit2 : r2.entry0;
    }
    const u2 = Math.cos(a2), f2 = Math.sin(a2), o2 = f2 * t2 + u2 * n3;
    let V2, c2;
    t2 = u2 * t2 - f2 * n3, n3 = o2;
    for (let d2 = 0; d2 < x2; ++d2) {
      if (V2 = c2, d2 < x2 - 1)
        if (r2.isCap) {
          const i4 = r2.isFirstVertex ? -1 : 1;
          c2 = e2._lineVertexBuffer.index, e2._lineVertexBuffer.add(r2.currentVertex.x, r2.currentVertex.y, t2, n3, i4, 0, r2.distance, e2._ddValues);
        } else
          c2 = e2._lineVertexBuffer.index, e2._lineVertexBuffer.add(r2.currentVertex.x, r2.currentVertex.y, t2, n3, 0, r2.sign, r2.distance, e2._ddValues);
      e2._lineIndexBuffer.add(d2 === 0 ? i3 : V2, s2, d2 === x2 - 1 ? l3 : c2);
      const a3 = f2 * t2 + u2 * n3;
      t2 = u2 * t2 - f2 * n3, n3 = a3;
    }
  } else if (i2 && e2._capType === 2) {
    const t2 = r2.isFirstVertex ? 1 : -1;
    let n3, i3;
    e2._hasPattern ? (n3 = e2._lineVertexBuffer.index, e2._lineVertexBuffer.add(r2.currentVertex.x, r2.currentVertex.y, r2.prevNormal.x - t2 * r2.inbound.x, r2.prevNormal.y - t2 * r2.inbound.y, -t2, -1, r2.distance, e2._ddValues), i3 = e2._lineVertexBuffer.index, e2._lineVertexBuffer.add(r2.currentVertex.x, r2.currentVertex.y, -r2.prevNormal.x - t2 * r2.inbound.x, -r2.prevNormal.y - t2 * r2.inbound.y, -t2, 1, r2.distance, e2._ddValues)) : (n3 = e2._lineVertexBuffer.index, e2._lineVertexBuffer.add(r2.currentVertex.x, r2.currentVertex.y, r2.prevNormal.x - t2 * r2.inbound.x, r2.prevNormal.y - t2 * r2.inbound.y, 0, -1, r2.distance, e2._ddValues), i3 = e2._lineVertexBuffer.index, e2._lineVertexBuffer.add(r2.currentVertex.x, r2.currentVertex.y, -r2.prevNormal.x - t2 * r2.inbound.x, -r2.prevNormal.y - t2 * r2.inbound.y, 0, 1, r2.distance, e2._ddValues)), t2 > 0 ? (e2._lineIndexBuffer.add(s2, r2.entry2, i3), e2._lineIndexBuffer.add(s2, i3, n3), e2._lineIndexBuffer.add(s2, n3, r2.entry0)) : (e2._lineIndexBuffer.add(s2, i3, r2.exit2), e2._lineIndexBuffer.add(s2, n3, i3), e2._lineIndexBuffer.add(s2, r2.exit0, n3));
  }
}, V = (e2) => (t2) => {
  e2._lineIndexBuffer.add(t2.leftExit0, t2.rightEntry0, t2.leftExit1 != null ? t2.leftExit1 : t2.leftExit2), e2._lineIndexBuffer.add(t2.rightEntry0, t2.rightEntry1 != null ? t2.rightEntry1 : t2.rightEntry2, t2.leftExit1 != null ? t2.leftExit1 : t2.leftExit2), t2.leftExit1 != null && t2.rightEntry1 != null ? (e2._lineIndexBuffer.add(t2.leftExit1, t2.rightEntry1, t2.leftExit2), e2._lineIndexBuffer.add(t2.rightEntry1, t2.rightEntry2, t2.leftExit2)) : t2.leftExit1 != null ? e2._lineIndexBuffer.add(t2.leftExit1, t2.rightEntry2, t2.leftExit2) : t2.rightEntry1 != null && e2._lineIndexBuffer.add(t2.rightEntry1, t2.rightEntry2, t2.leftExit2);
};
const f = 10;
function y(e2, t2) {
  return e2.iconMosaicItem && t2.iconMosaicItem ? e2.iconMosaicItem.page === t2.iconMosaicItem.page ? 0 : e2.iconMosaicItem.page - t2.iconMosaicItem.page : e2.iconMosaicItem && !t2.iconMosaicItem ? 1 : !e2.iconMosaicItem && t2.iconMosaicItem ? -1 : 0;
}
class m extends t$1 {
  constructor(e2, t2, n2, i2, s2, a2, o2, r2) {
    super(e2, t2), this.type = 3, this._markerMap = new Map(), this._glyphMap = new Map(), this._glyphBufferDataStorage = new Map(), this._isIconSDF = false, this._iconVertexBuffer = n2, this._iconIndexBuffer = i2, this._textVertexBuffer = s2, this._textIndexBuffer = a2, this._placementEngine = o2, this._workerTileHandler = r2;
  }
  get markerPageMap() {
    return this._markerMap;
  }
  get glyphsPageMap() {
    return this._glyphMap;
  }
  get symbolInstances() {
    return this._symbolInstances;
  }
  getResources(t2, n2, i2) {
    const s2 = this.layer, a2 = this.zoom;
    t2 && t2.setExtent(this.layerExtent);
    const o2 = s2.getLayoutProperty("icon-image"), r2 = s2.getLayoutProperty("text-field");
    let l2 = s2.getLayoutProperty("text-transform"), h2 = s2.getLayoutProperty("text-font");
    const x2 = [];
    let c2, d2, g2, f2;
    o2 && !o2.isDataDriven && (c2 = o2.getValue(a2)), r2 && !r2.isDataDriven && (d2 = r2.getValue(a2)), l2 && l2.isDataDriven || (g2 = s2.getLayoutValue("text-transform", a2), l2 = null), h2 && h2.isDataDriven || (f2 = s2.getLayoutValue("text-font", a2), h2 = null);
    for (const y2 of this._features) {
      const u2 = y2.getGeometry(t2);
      if (!u2 || u2.length === 0)
        continue;
      let p2, _;
      o2 && (p2 = o2.isDataDriven ? o2.getValue(a2, y2) : this._replaceKeys(c2, y2.values), p2 && n2.add(p2));
      let M = false;
      if (r2 && (_ = r2.isDataDriven ? r2.getValue(a2, y2) : this._replaceKeys(d2, y2.values), _)) {
        switch (_ = _.replace(/\\n/g, "\n"), l2 && (g2 = l2.getValue(a2, y2)), g2) {
          case 2:
            _ = _.toLowerCase();
            break;
          case 1:
            _ = _.toUpperCase();
        }
        if (m._bidiEngine.hasBidiChar(_)) {
          let e3;
          e3 = m._bidiEngine.checkContextual(_) === "rtl" ? "IDNNN" : "ICNNN", _ = m._bidiEngine.bidiTransform(_, e3, "VLYSN"), M = true;
        }
        const e2 = _.length;
        if (e2 > 0) {
          h2 && (f2 = h2.getValue(a2, y2));
          for (const t3 of f2) {
            let n3 = i2[t3];
            n3 || (n3 = i2[t3] = new Set());
            for (let t4 = 0; t4 < e2; t4++) {
              const e3 = _.charCodeAt(t4);
              n3.add(e3);
            }
          }
        }
      }
      if (!p2 && !_)
        continue;
      const b2 = s2.getLayoutValue("symbol-sort-key", a2, y2), P2 = { feature: y2, sprite: p2, label: _, rtl: M, geometry: u2, hash: (_ ? c$2(_) : 0) ^ (p2 ? c$2(p2) : 0), priority: b2, textFont: f2 };
      x2.push(P2);
    }
    this._symbolFeatures = x2;
  }
  processFeatures(e2) {
    e2 && e2.setExtent(this.layerExtent);
    const t2 = this.layer, i2 = this.zoom, s2 = t2.getLayoutValue("symbol-placement", i2), r2 = s2 !== 0, g$12 = t2.getLayoutValue("symbol-spacing", i2) * x$1, f2 = t2.getLayoutProperty("icon-image"), u2 = t2.getLayoutProperty("text-field"), p$1 = f2 ? new d$3(t2, i2, r2) : null, _ = u2 ? new f$5(t2, i2, r2) : null, M = this._workerTileHandler;
    let b2;
    f2 && (b2 = M.getSpriteItems()), this._iconIndexStart = 3 * this._iconIndexBuffer.index, this._textIndexStart = 3 * this._textIndexBuffer.index, this._iconIndexCount = 0, this._textIndexCount = 0, this._markerMap.clear(), this._glyphMap.clear();
    const P2 = [];
    let I2 = 1;
    _ && _.size && (I2 = _.size / c);
    const A = _ ? _.maxAngle * f$4 : 0, V2 = _ ? _.size * x$1 : 0;
    for (const n2 of this._symbolFeatures) {
      let e3;
      p$1 && b2 && n2.sprite && (e3 = b2[n2.sprite], e3 && e3.sdf && (this._isIconSDF = true));
      let t3;
      !!e3 && p$1.update(i2, n2.feature);
      let a2 = 0;
      const o2 = n2.label;
      if (o2) {
        _.update(i2, n2.feature);
        const e4 = r2 ? _.keepUpright : _.writingMode && _.writingMode.indexOf(1) >= 0;
        let s3 = 0.5;
        switch (_.anchor) {
          case 5:
          case 1:
          case 7:
            s3 = 0;
            break;
          case 6:
          case 2:
          case 8:
            s3 = 1;
        }
        let c$12 = 0.5;
        switch (_.anchor) {
          case 5:
          case 3:
          case 6:
            c$12 = 0;
            break;
          case 7:
          case 4:
          case 8:
            c$12 = 1;
        }
        let d2 = 0.5;
        switch (_.justify) {
          case 0:
            d2 = s3;
            break;
          case 1:
            d2 = 0;
            break;
          case 3:
            d2 = 1;
        }
        const g2 = _.letterSpacing * c, f3 = r2 ? 0 : _.maxWidth * c, y2 = _.lineHeight * c, m2 = n2.textFont.map((e5) => M.getGlyphItems(e5));
        if (t3 = new a$2(m2, f3, y2, g2, s3, c$12, d2).getShaping(o2, n2.rtl, e4), t3 && t3.length > 0) {
          let e5 = 1e30, n3 = -1e30;
          for (const i3 of t3)
            e5 = Math.min(e5, i3.x), n3 = Math.max(n3, i3.x);
          a2 = (n3 - e5 + 2 * c) * I2 * x$1;
        }
      }
      for (let i3 of n2.geometry) {
        const o3 = [];
        if (s2 === 1) {
          if (t3 && t3.length > 0 && _ && _.size) {
            const e4 = _.size * x$1 * (2 + Math.min(2, 4 * Math.abs(_.offset[1])));
            i3 = m._smoothVertices(i3, e4);
          }
          m._pushAnchors(o3, i3, g$12, a2);
        } else
          s2 === 2 ? m._pushCenterAnchor(o3, i3) : n2.feature.type === 3 ? m._pushCentroid(o3, i3) : o3.push(new p(i3[0].x, i3[0].y));
        for (const s3 of o3) {
          if (s3.x < 0 || s3.x > g || s3.y < 0 || s3.y > g)
            continue;
          if (r2 && a2 > 0 && _.rotationAlignment === 0 && !m._honorsTextMaxAngle(i3, s3, a2, A, V2))
            continue;
          const o4 = { shaping: t3, line: i3, iconMosaicItem: e3, anchor: s3, symbolFeature: n2, textColliders: [], iconColliders: [], textVertexRanges: [], iconVertexRanges: [] };
          P2.push(o4), this._processFeature(o4, p$1, _);
        }
      }
    }
    P2.sort(y), this._addPlacedGlyphs(), this._symbolInstances = P2;
  }
  serialize() {
    let e2 = 11;
    e2 += this.layerUIDs.length, e2 += 3 * this.markerPageMap.size, e2 += 3 * this.glyphsPageMap.size, e2 += m.symbolsSerializationLength(this._symbolInstances), e2 += this._iconVertexBuffer.array.length, e2 += this._iconIndexBuffer.array.length, e2 += this._textVertexBuffer.array.length, e2 += this._textIndexBuffer.array.length;
    const t2 = new Uint32Array(e2), n2 = new Int32Array(t2.buffer), i2 = new Float32Array(t2.buffer);
    let s2 = 0;
    t2[s2++] = this.type, t2[s2++] = this.layerUIDs.length;
    for (let a2 = 0; a2 < this.layerUIDs.length; a2++)
      t2[s2++] = this.layerUIDs[a2];
    t2[s2++] = this._isIconSDF ? 1 : 0, t2[s2++] = this.markerPageMap.size;
    for (const [a2, [o2, r2]] of this.markerPageMap)
      t2[s2++] = a2, t2[s2++] = o2, t2[s2++] = r2;
    t2[s2++] = this.glyphsPageMap.size;
    for (const [a2, [o2, r2]] of this.glyphsPageMap)
      t2[s2++] = a2, t2[s2++] = o2, t2[s2++] = r2;
    t2[s2++] = this._iconVertexBuffer.index / 4, t2[s2++] = this._textVertexBuffer.index / 4, s2 = m.serializeSymbols(t2, n2, i2, s2, this._symbolInstances), t2[s2++] = this._iconVertexBuffer.array.length;
    for (let a2 = 0; a2 < this._iconVertexBuffer.array.length; a2++)
      n2[s2++] = this._iconVertexBuffer.array[a2];
    t2[s2++] = this._iconIndexBuffer.array.length;
    for (let a2 = 0; a2 < this._iconIndexBuffer.array.length; a2++)
      t2[s2++] = this._iconIndexBuffer.array[a2];
    t2[s2++] = this._textVertexBuffer.array.length;
    for (let a2 = 0; a2 < this._textVertexBuffer.array.length; a2++)
      n2[s2++] = this._textVertexBuffer.array[a2];
    t2[s2++] = this._textIndexBuffer.array.length;
    for (let a2 = 0; a2 < this._textIndexBuffer.array.length; a2++)
      t2[s2++] = this._textIndexBuffer.array[a2];
    return t2.buffer;
  }
  static symbolsSerializationLength(e2) {
    let t2 = 0;
    t2 += 1;
    for (const n2 of e2 || []) {
      t2 += 4, t2 += 1;
      for (const e3 of n2.textColliders)
        t2 += f;
      for (const e3 of n2.iconColliders)
        t2 += f;
      t2 += 1, t2 += 2 * n2.textVertexRanges.length, t2 += 1, t2 += 2 * n2.iconVertexRanges.length;
    }
    return t2;
  }
  static serializeSymbols(e2, t2, n2, i2, s2) {
    s2 = s2 || [], t2[i2++] = s2.length;
    for (const a2 of s2) {
      t2[i2++] = a2.anchor.x, t2[i2++] = a2.anchor.y, t2[i2++] = a2.symbolFeature.hash, t2[i2++] = a2.symbolFeature.priority, t2[i2++] = a2.textColliders.length + a2.iconColliders.length;
      for (const e3 of a2.textColliders)
        t2[i2++] = e3.xTile, t2[i2++] = e3.yTile, t2[i2++] = e3.dxPixels, t2[i2++] = e3.dyPixels, t2[i2++] = e3.hard ? 1 : 0, t2[i2++] = e3.partIndex, n2[i2++] = e3.minLod, n2[i2++] = e3.maxLod, t2[i2++] = e3.width, t2[i2++] = e3.height;
      for (const e3 of a2.iconColliders)
        t2[i2++] = e3.xTile, t2[i2++] = e3.yTile, t2[i2++] = e3.dxPixels, t2[i2++] = e3.dyPixels, t2[i2++] = e3.hard ? 1 : 0, t2[i2++] = e3.partIndex, n2[i2++] = e3.minLod, n2[i2++] = e3.maxLod, t2[i2++] = e3.width, t2[i2++] = e3.height;
      t2[i2++] = a2.textVertexRanges.length;
      for (const [e3, n3] of a2.textVertexRanges)
        t2[i2++] = e3, t2[i2++] = n3;
      t2[i2++] = a2.iconVertexRanges.length;
      for (const [e3, n3] of a2.iconVertexRanges)
        t2[i2++] = e3, t2[i2++] = n3;
    }
    return i2;
  }
  _replaceKeys(e2, t2) {
    return e2.replace(/{([^{}]+)}/g, function(e3, n2) {
      return n2 in t2 ? t2[n2] : "";
    });
  }
  _processFeature(e2, t2, n2) {
    const { line: s2, iconMosaicItem: a2, shaping: o2, anchor: r2 } = e2, l2 = this.zoom, h2 = this.layer, x2 = !!a2;
    let c2 = true;
    x2 && (c2 = t2.optional || !a2);
    const d2 = o2 && o2.length > 0;
    let g2, f2, y2 = true;
    if (d2 && (y2 = n2.optional), x2 && (g2 = this._placementEngine.getIconPlacement(r2, a2, t2)), (g2 || c2) && (d2 && (f2 = this._placementEngine.getTextPlacement(r2, o2, s2, n2)), f2 || y2)) {
      if (g2 && f2 || (y2 || c2 ? y2 || f2 ? c2 || g2 || (f2 = null) : g2 = null : (g2 = null, f2 = null)), f2) {
        const t3 = h2.hasDataDrivenText ? h2.textMaterial.encodeAttributes(e2.symbolFeature.feature, l2, h2) : null;
        if (this._storePlacedGlyphs(e2, f2.shapes, l2, n2.rotationAlignment, t3), f2.textColliders) {
          e2.textColliders = f2.textColliders;
          for (const e3 of f2.textColliders) {
            e3.minLod = Math.max(l2 + P(e3.minLod), 0), e3.maxLod = Math.min(l2 + P(e3.maxLod), 25);
            const t4 = e3.angle;
            if (t4) {
              const n3 = Math.cos(t4), i2 = Math.sin(t4), s3 = e3.dxPixels * n3 - e3.dyPixels * i2, a3 = e3.dxPixels * i2 + e3.dyPixels * n3, o3 = (e3.dxPixels + e3.width) * n3 - e3.dyPixels * i2, r3 = (e3.dxPixels + e3.width) * i2 + e3.dyPixels * n3, l3 = e3.dxPixels * n3 - (e3.dyPixels + e3.height) * i2, h3 = e3.dxPixels * i2 + (e3.dyPixels + e3.height) * n3, x3 = (e3.dxPixels + e3.width) * n3 - (e3.dyPixels + e3.height) * i2, c3 = (e3.dxPixels + e3.width) * i2 + (e3.dyPixels + e3.height) * n3, d3 = Math.min(s3, o3, l3, x3), g3 = Math.max(s3, o3, l3, x3), f3 = Math.min(a3, r3, h3, c3), y3 = Math.max(a3, r3, h3, c3);
              e3.dxPixels = d3, e3.dyPixels = f3, e3.width = g3 - d3, e3.height = y3 - f3;
            }
          }
        }
      }
      if (g2) {
        const n3 = h2.hasDataDrivenIcon ? h2.iconMaterial.encodeAttributes(e2.symbolFeature.feature, l2, h2) : null;
        if (this._addPlacedIcons(e2, g2.shapes, l2, a2.page, t2.rotationAlignment === 1, n3), g2.iconColliders) {
          e2.iconColliders = g2.iconColliders;
          for (const e3 of g2.iconColliders) {
            e3.minLod = Math.max(l2 + P(e3.minLod), 0), e3.maxLod = Math.min(l2 + P(e3.maxLod), 25);
            const t3 = e3.angle;
            if (t3) {
              const n4 = Math.cos(t3), i2 = Math.sin(t3), s3 = e3.dxPixels * n4 - e3.dyPixels * i2, a3 = e3.dxPixels * i2 + e3.dyPixels * n4, o3 = (e3.dxPixels + e3.width) * n4 - e3.dyPixels * i2, r3 = (e3.dxPixels + e3.width) * i2 + e3.dyPixels * n4, l3 = e3.dxPixels * n4 - (e3.dyPixels + e3.height) * i2, h3 = e3.dxPixels * i2 + (e3.dyPixels + e3.height) * n4, x3 = (e3.dxPixels + e3.width) * n4 - (e3.dyPixels + e3.height) * i2, c3 = (e3.dxPixels + e3.width) * i2 + (e3.dyPixels + e3.height) * n4, d3 = Math.min(s3, o3, l3, x3), g3 = Math.max(s3, o3, l3, x3), f3 = Math.min(a3, r3, h3, c3), y3 = Math.max(a3, r3, h3, c3);
              e3.dxPixels = d3, e3.dyPixels = f3, e3.width = g3 - d3, e3.height = y3 - f3;
            }
          }
        }
      }
    }
  }
  _addPlacedIcons(e2, t2, n2, s2, a2, o2) {
    const r2 = Math.max(n2 - 1, 0), l2 = this._iconVertexBuffer, h2 = this._iconIndexBuffer, x2 = this._markerMap;
    for (const c2 of t2) {
      const t3 = a2 ? 0 : Math.max(n2 + P(c2.minzoom), r2), d2 = a2 ? 25 : Math.min(n2 + P(c2.maxzoom), 25);
      if (d2 <= t3)
        continue;
      const g2 = c2.tl, f2 = c2.tr, y2 = c2.bl, m2 = c2.br, u2 = c2.mosaicRect, p2 = c2.labelAngle, _ = c2.minAngle, M = c2.maxAngle, b2 = c2.anchor, P$1 = l2.index, I2 = u2.x, A = u2.y, V2 = I2 + u2.width, w2 = A + u2.height, L = l2.index;
      l2.add(b2.x, b2.y, g2.x, g2.y, I2, A, p2, _, M, t3, d2, o2), l2.add(b2.x, b2.y, f2.x, f2.y, V2, A, p2, _, M, t3, d2, o2), l2.add(b2.x, b2.y, y2.x, y2.y, I2, w2, p2, _, M, t3, d2, o2), l2.add(b2.x, b2.y, m2.x, m2.y, V2, w2, p2, _, M, t3, d2, o2), e2.iconVertexRanges.length > 0 && e2.iconVertexRanges[0][0] + e2.iconVertexRanges[0][1] === L ? e2.iconVertexRanges[0][1] += 4 : e2.iconVertexRanges.push([L, 4]), h2.add(P$1 + 0, P$1 + 1, P$1 + 2), h2.add(P$1 + 1, P$1 + 2, P$1 + 3), x2.has(s2) ? x2.get(s2)[1] += 6 : x2.set(s2, [this._iconIndexStart + this._iconIndexCount, 6]), this._iconIndexCount += 6;
    }
  }
  _addPlacedGlyphs() {
    const e2 = this._textVertexBuffer, t2 = this._textIndexBuffer, n2 = this._glyphMap;
    for (const [i2, s2] of this._glyphBufferDataStorage)
      for (const a2 of s2) {
        const s3 = e2.index, o2 = a2.symbolInstance, r2 = a2.ddAttributes, l2 = e2.index;
        e2.add(a2.glyphAnchor[0], a2.glyphAnchor[1], a2.tl[0], a2.tl[1], a2.xmin, a2.ymin, a2.labelAngle, a2.minAngle, a2.maxAngle, a2.minLod, a2.maxLod, r2), e2.add(a2.glyphAnchor[0], a2.glyphAnchor[1], a2.tr[0], a2.tr[1], a2.xmax, a2.ymin, a2.labelAngle, a2.minAngle, a2.maxAngle, a2.minLod, a2.maxLod, r2), e2.add(a2.glyphAnchor[0], a2.glyphAnchor[1], a2.bl[0], a2.bl[1], a2.xmin, a2.ymax, a2.labelAngle, a2.minAngle, a2.maxAngle, a2.minLod, a2.maxLod, r2), e2.add(a2.glyphAnchor[0], a2.glyphAnchor[1], a2.br[0], a2.br[1], a2.xmax, a2.ymax, a2.labelAngle, a2.minAngle, a2.maxAngle, a2.minLod, a2.maxLod, r2), o2.textVertexRanges.length > 0 && o2.textVertexRanges[0][0] + o2.textVertexRanges[0][1] === l2 ? o2.textVertexRanges[0][1] += 4 : o2.textVertexRanges.push([l2, 4]), t2.add(s3 + 0, s3 + 1, s3 + 2), t2.add(s3 + 1, s3 + 2, s3 + 3), n2.has(i2) ? n2.get(i2)[1] += 6 : n2.set(i2, [this._textIndexStart + this._textIndexCount, 6]), this._textIndexCount += 6;
      }
    this._glyphBufferDataStorage.clear();
  }
  _storePlacedGlyphs(e2, t2, n2, s2, a2) {
    const o2 = Math.max(n2 - 1, 0), r2 = s2 === 1;
    let l2, h2, x2, c2, d2, g2, f2, y2, m2, u2, p2;
    for (const _ of t2) {
      if (l2 = r2 ? 0 : Math.max(n2 + P(_.minzoom), o2), h2 = r2 ? 25 : Math.min(n2 + P(_.maxzoom), 25), h2 <= l2)
        continue;
      x2 = _.tl, c2 = _.tr, d2 = _.bl, g2 = _.br, f2 = _.labelAngle, y2 = _.minAngle, m2 = _.maxAngle, u2 = _.anchor, p2 = _.mosaicRect, this._glyphBufferDataStorage.has(_.page) || this._glyphBufferDataStorage.set(_.page, []);
      this._glyphBufferDataStorage.get(_.page).push({ glyphAnchor: [u2.x, u2.y], tl: [x2.x, x2.y], tr: [c2.x, c2.y], bl: [d2.x, d2.y], br: [g2.x, g2.y], xmin: p2.x, ymin: p2.y, xmax: p2.x + p2.width, ymax: p2.y + p2.height, labelAngle: f2, minAngle: y2, maxAngle: m2, minLod: l2, maxLod: h2, placementLod: o2, symbolInstance: e2, ddAttributes: a2 });
    }
  }
  static _pushAnchors(e2, t2, n2, i2) {
    n2 += i2;
    let a2 = 0;
    const o2 = t2.length - 1;
    for (let s2 = 0; s2 < o2; s2++)
      a2 += t$4.distance(t2[s2], t2[s2 + 1]);
    let l2 = i2 || n2;
    if (l2 *= 0.5, a2 <= l2)
      return;
    const h2 = l2 / a2;
    let x2 = 0, d2 = -(n2 = a2 / Math.max(Math.round(a2 / n2), 1)) / 2;
    const g2 = t2.length - 1;
    for (let r2 = 0; r2 < g2; r2++) {
      const i3 = t2[r2], a3 = t2[r2 + 1], o3 = a3.x - i3.x, l3 = a3.y - i3.y, g3 = Math.sqrt(o3 * o3 + l3 * l3);
      let f2;
      for (; d2 + n2 < x2 + g3; ) {
        d2 += n2;
        const t3 = (d2 - x2) / g3, y2 = b$1(i3.x, a3.x, t3), m2 = b$1(i3.y, a3.y, t3);
        f2 === void 0 && (f2 = Math.atan2(l3, o3)), e2.push(new p(y2, m2, f2, r2, h2));
      }
      x2 += g3;
    }
  }
  static _pushCenterAnchor(e2, t2) {
    let n2 = 0;
    const i2 = t2.length - 1;
    for (let s2 = 0; s2 < i2; s2++)
      n2 += t$4.distance(t2[s2], t2[s2 + 1]);
    const a2 = n2 / 2;
    let o2 = 0;
    const l2 = t2.length - 1;
    for (let r2 = 0; r2 < l2; r2++) {
      const n3 = t2[r2], i3 = t2[r2 + 1], l3 = i3.x - n3.x, h2 = i3.y - n3.y, x2 = Math.sqrt(l3 * l3 + h2 * h2);
      if (a2 < o2 + x2) {
        const t3 = (a2 - o2) / x2, d2 = b$1(n3.x, i3.x, t3), g2 = b$1(n3.y, i3.y, t3), f2 = Math.atan2(h2, l3);
        return void e2.push(new p(d2, g2, f2, r2, 0));
      }
      o2 += x2;
    }
  }
  static _deviation(e2, t2, n2) {
    const i2 = (t2.x - e2.x) * (n2.x - t2.x) + (t2.y - e2.y) * (n2.y - t2.y), s2 = (t2.x - e2.x) * (n2.y - t2.y) - (t2.y - e2.y) * (n2.x - t2.x);
    return Math.atan2(s2, i2);
  }
  static _honorsTextMaxAngle(e2, t2, n2, i2, s2) {
    let a2 = 0;
    const o2 = n2 / 2;
    let l2 = new t$4(t2.x, t2.y), h2 = t2.segment + 1;
    for (; a2 > -o2; ) {
      if (--h2, h2 < 0)
        return false;
      a2 -= t$4.distance(e2[h2], l2), l2 = e2[h2];
    }
    a2 += t$4.distance(e2[h2], e2[h2 + 1]);
    const x2 = [];
    let c2 = 0;
    const d2 = e2.length;
    for (; a2 < o2; ) {
      const t3 = e2[h2];
      let n3, o3 = h2;
      do {
        if (++o3, o3 === d2)
          return false;
        n3 = e2[o3];
      } while (n3.isEqual(t3));
      let l3, g2 = o3;
      do {
        if (++g2, g2 === d2)
          return false;
        l3 = e2[g2];
      } while (l3.isEqual(n3));
      const f2 = this._deviation(t3, n3, l3);
      for (x2.push({ deviation: f2, distToAnchor: a2 }), c2 += f2; a2 - x2[0].distToAnchor > s2; )
        c2 -= x2.shift().deviation;
      if (Math.abs(c2) > i2)
        return false;
      a2 += t$4.distance(n3, l3), h2 = o3;
    }
    return true;
  }
  static _smoothVertices(e2, t2) {
    if (t2 <= 0)
      return e2;
    let n2 = e2.length;
    if (n2 < 3)
      return e2;
    const i2 = [];
    let s2 = 0, a2 = 0;
    i2.push(0);
    for (let y2 = 1; y2 < n2; y2++) {
      const t3 = t$4.distance(e2[y2], e2[y2 - 1]);
      t3 > 0 && (s2 += t3, i2.push(s2), a2++, a2 !== y2 && (e2[a2] = e2[y2]));
    }
    if (n2 = a2 + 1, n2 < 3)
      return e2;
    t2 = Math.min(t2, 0.2 * s2);
    const o2 = e2[0].x, l2 = e2[0].y, h2 = e2[n2 - 1].x, x2 = e2[n2 - 1].y, c2 = t$4.sub(e2[0], e2[1]);
    c2.normalize(), e2[0].x += t2 * c2.x, e2[0].y += t2 * c2.y, c2.assignSub(e2[n2 - 1], e2[n2 - 2]), c2.normalize(), e2[n2 - 1].x += t2 * c2.x, e2[n2 - 1].y += t2 * c2.y, i2[0] -= t2, i2[n2 - 1] += t2;
    const d2 = [];
    d2.push(new t$4(o2, l2));
    const g2 = 1e-6, f2 = 0.5 * t2;
    for (let y2 = 1; y2 < n2 - 1; y2++) {
      let s3 = 0, a3 = 0, o3 = 0;
      for (let n3 = y2 - 1; n3 >= 0; n3--) {
        const r2 = f2 + i2[n3 + 1] - i2[y2];
        if (r2 < 0)
          break;
        const l3 = i2[n3 + 1] - i2[n3], h3 = i2[y2] - i2[n3] < f2 ? 1 : r2 / l3;
        if (h3 < g2)
          break;
        const x3 = h3 * h3, c3 = h3 * r2 - 0.5 * x3 * l3, d3 = h3 * l3 / t2, m2 = e2[n3 + 1], u2 = e2[n3].x - m2.x, p2 = e2[n3].y - m2.y;
        s3 += d3 / c3 * (m2.x * h3 * r2 + 0.5 * x3 * (r2 * u2 - l3 * m2.x) - x3 * h3 * l3 * u2 / 3), a3 += d3 / c3 * (m2.y * h3 * r2 + 0.5 * x3 * (r2 * p2 - l3 * m2.y) - x3 * h3 * l3 * p2 / 3), o3 += d3;
      }
      for (let r2 = y2 + 1; r2 < n2; r2++) {
        const n3 = f2 - i2[r2 - 1] + i2[y2];
        if (n3 < 0)
          break;
        const l3 = i2[r2] - i2[r2 - 1], h3 = i2[r2] - i2[y2] < f2 ? 1 : n3 / l3;
        if (h3 < g2)
          break;
        const x3 = h3 * h3, c3 = h3 * n3 - 0.5 * x3 * l3, d3 = h3 * l3 / t2, m2 = e2[r2 - 1], u2 = e2[r2].x - m2.x, p2 = e2[r2].y - m2.y;
        s3 += d3 / c3 * (m2.x * h3 * n3 + 0.5 * x3 * (n3 * u2 - l3 * m2.x) - x3 * h3 * l3 * u2 / 3), a3 += d3 / c3 * (m2.y * h3 * n3 + 0.5 * x3 * (n3 * p2 - l3 * m2.y) - x3 * h3 * l3 * p2 / 3), o3 += d3;
      }
      d2.push(new t$4(s3 / o3, a3 / o3));
    }
    return d2.push(new t$4(h2, x2)), e2[0].x = o2, e2[0].y = l2, e2[n2 - 1].x = h2, e2[n2 - 1].y = x2, d2;
  }
  static _pushCentroid(e2, t2) {
    const n2 = 0, i2 = 0, s2 = 4096, a2 = 4096, o2 = t2.length - 1;
    let r2 = 0, l2 = 0, h2 = 0, x2 = t2[0].x, d2 = t2[0].y;
    x2 > s2 && (x2 = s2), x2 < n2 && (x2 = n2), d2 > a2 && (d2 = a2), d2 < i2 && (d2 = i2);
    for (let c2 = 1; c2 < o2; c2++) {
      let e3 = t2[c2].x, o3 = t2[c2].y, g2 = t2[c2 + 1].x, f2 = t2[c2 + 1].y;
      e3 > s2 && (e3 = s2), e3 < n2 && (e3 = n2), o3 > a2 && (o3 = a2), o3 < i2 && (o3 = i2), g2 > s2 && (g2 = s2), g2 < n2 && (g2 = n2), f2 > a2 && (f2 = a2), f2 < i2 && (f2 = i2);
      const y2 = (e3 - x2) * (f2 - d2) - (g2 - x2) * (o3 - d2);
      r2 += y2 * (x2 + e3 + g2), l2 += y2 * (d2 + o3 + f2), h2 += y2;
    }
    r2 /= 3 * h2, l2 /= 3 * h2, isNaN(r2) || isNaN(l2) || e2.push(new p(r2, l2));
  }
}
m._bidiEngine = new C();
const k = 1;
class d {
  constructor(e2, i2, o2, c2, n2) {
    if (this._pbfTiles = {}, this._tileClippers = {}, this._client = o2, this._tile = i2, n2) {
      this._styleLayerUIDs = new Set();
      for (const e3 of n2)
        this._styleLayerUIDs.add(e3);
    }
    this._styleRepository = c2, this._layers = this._styleRepository.layers;
    const [a2, l2, u2] = i2.tileKey.split("/").map(parseFloat);
    this._level = a2;
    const f2 = Math.max(8, Math.round(k * this._level) - 8);
    for (const p2 of Object.keys(e2)) {
      const i3 = e2[p2];
      this._pbfTiles[p2] = new n$3(new Uint8Array(i3.protobuff), new DataView(i3.protobuff));
      if (i3.refKey) {
        const [e3] = i3.refKey.split("/").map(parseFloat), t2 = a2 - e3;
        if (t2 > 0) {
          const e4 = (1 << t2) - 1, s2 = l2 & e4, i4 = u2 & e4;
          this._tileClippers[p2] = new n$4(t2, s2, i4, 8, f2);
        }
      }
      this._tileClippers[p2] || (this._tileClippers[p2] = new e$3());
    }
  }
  _canParseStyleLayer(e2) {
    return !this._styleLayerUIDs || this._styleLayerUIDs.has(e2);
  }
  parse(e2) {
    return __async(this, null, function* () {
      const t2 = this._initialize(e2), { returnedBuckets: r2 } = t2;
      this._processLayers(t2), this._linkReferences(t2), this._filterFeatures(t2);
      const s2 = new Set(), o2 = {};
      for (const i2 of r2)
        i2.type === 3 && i2.getResources(i2.tileClipper, s2, o2);
      if (this._tile.status === I.INVALID)
        return Promise.resolve([]);
      const c2 = this._fetchResources(s2, o2, e2);
      return Promise.all(c2).then(() => this._processFeatures(t2.returnedBuckets));
    });
  }
  _initialize(e2) {
    return { signal: e2 && e2.signal, sourceNameToTileData: this._parseTileData(this._pbfTiles), layers: this._layers, zoom: this._level, sourceNameToTileClipper: this._tileClippers, sourceNameToUniqueSourceLayerBuckets: {}, sourceNameToUniqueSourceLayers: {}, returnedBuckets: [], layerIdToBucket: {}, referencerUIDToReferencedId: new Map() };
  }
  _processLayers(e2) {
    const { sourceNameToTileData: t2, layers: r2, zoom: s2, sourceNameToTileClipper: i2, sourceNameToUniqueSourceLayerBuckets: o2, sourceNameToUniqueSourceLayers: c2, returnedBuckets: n2, layerIdToBucket: a2, referencerUIDToReferencedId: l2 } = e2;
    for (let u2 = r2.length - 1; u2 >= 0; u2--) {
      const e3 = r2[u2];
      if (!this._canParseStyleLayer(e3.uid) || e3.minzoom && s2 < Math.floor(e3.minzoom) || e3.maxzoom && s2 >= e3.maxzoom || e3.type === 0)
        continue;
      if (!t2[e3.source] || !i2[e3.source])
        continue;
      const f2 = t2[e3.source], p2 = i2[e3.source], h2 = e3.sourceLayer, m2 = f2[h2];
      if (m2) {
        let t3 = c2[e3.source];
        if (t3 || (t3 = c2[e3.source] = new Set()), t3.add(e3.sourceLayer), e3.refLayerId)
          l2.set(e3.uid, e3.refLayerId);
        else {
          const t4 = this._createBucket(e3);
          if (t4) {
            t4.layerUIDs = [e3.uid], t4.layerExtent = m2.extent, t4.tileClipper = p2;
            let r3 = o2[e3.source];
            r3 || (r3 = o2[e3.source] = {});
            let s3 = r3[h2];
            s3 || (s3 = r3[h2] = []), s3.push(t4), n2.push(t4), a2[e3.id.toLowerCase()] = t4;
          }
        }
      }
    }
  }
  _linkReferences(e2) {
    const { layerIdToBucket: t2, referencerUIDToReferencedId: r2 } = e2;
    r2.forEach((e3, r3) => {
      e3 = e3.toLowerCase(), t2[e3] && t2[e3].layerUIDs.push(r3);
    });
  }
  _filterFeatures(t2) {
    const { signal: r2, sourceNameToTileData: s2, sourceNameToUniqueSourceLayerBuckets: i2, sourceNameToUniqueSourceLayers: c2 } = t2, n2 = 10 * this._level, a2 = 10 * (this._level + 1), l2 = [], u2 = [];
    for (const e2 of Object.keys(c2)) {
      c2[e2].forEach((t3) => {
        l2.push(t3), u2.push(e2);
      });
    }
    for (let f2 = 0; f2 < l2.length; f2++) {
      const t3 = u2[f2], c3 = l2[f2];
      if (!s2[t3] || !i2[t3])
        continue;
      const p2 = s2[t3][c3], h2 = i2[t3][c3];
      if (!h2 || h2.length === 0)
        continue;
      if (b$2(r2))
        return;
      const m2 = p2.getData();
      for (; m2.nextTag(2); ) {
        const e2 = m2.getMessage(), t4 = new t$2(e2, p2);
        e2.release();
        const r3 = t4.values;
        if (r3) {
          const e3 = r3._minzoom;
          if (e3 && e3 >= a2)
            continue;
          const t5 = r3._maxzoom;
          if (t5 && t5 <= n2)
            continue;
        }
        for (const s3 of h2)
          s3.pushFeature(t4);
      }
    }
  }
  _fetchResources(e2, t2, r2) {
    const s2 = [], i2 = this._tile.getWorkerTileHandler();
    let o2, c2;
    e2.size > 0 && (o2 = i2.fetchSprites(e2, this._client, r2), s2.push(o2));
    for (const n2 in t2) {
      const e3 = t2[n2];
      e3.size > 0 && (c2 = i2.fetchGlyphs(this._tile.tileKey, n2, e3, this._client, r2), s2.push(c2));
    }
    return s2;
  }
  _processFeatures(e2) {
    const t2 = e2.filter((e3) => e3.hasFeatures() || this._canParseStyleLayer(e3.layer.uid));
    for (const r2 of t2)
      r2.processFeatures(r2.tileClipper);
    return t2;
  }
  _parseTileData(e$12) {
    const t2 = {};
    for (const r2 of Object.keys(e$12)) {
      const s2 = e$12[r2], i2 = {};
      for (; s2.next(); )
        switch (s2.tag()) {
          case 3: {
            const e$13 = s2.getMessage(), t3 = new e(e$13);
            e$13.release(), i2[t3.name] = t3;
            break;
          }
          default:
            s2.skip();
        }
      t2[r2] = i2;
    }
    return t2;
  }
  _createBucket(e2) {
    switch (e2.type) {
      case 0:
        return null;
      case 1:
        return this._createFillBucket(e2);
      case 2:
        return this._createLineBucket(e2);
      case 4:
        return this._createCircleBucket(e2);
      case 3:
        return this._createSymbolBucket(e2);
    }
  }
  _createFillBucket(e2) {
    return new o$1(e2, this._level, new r$1(e2.fillMaterial.getStride()), new r$2(), new u$1(e2.outlineMaterial.getStride()), new r$2());
  }
  _createLineBucket(e2) {
    return new a(e2, this._level, new o$2(e2.lineMaterial.getStride()), new r$2());
  }
  _createCircleBucket(e2) {
    return new t(e2, this._level, new a$1(e2.circleMaterial.getStride()), new r$2());
  }
  _createSymbolBucket(e2) {
    const t2 = this._tile;
    return new m(e2, this._level, new h(e2.iconMaterial.getStride()), new r$2(), new h(e2.textMaterial.getStride()), new r$2(), t2.placementEngine, t2.getWorkerTileHandler());
  }
}
class n {
  constructor(e2, t2, i2, n2) {
    this.status = I.INITIALIZED, this.placementEngine = new u$2(), this.tileKey = e2, this.refKeys = t2, this._workerTileHandler = i2, this._styleRepository = n2;
  }
  release() {
    this.tileKey = "", this.refKeys = null, this.status = I.INITIALIZED, this._workerTileHandler = null;
  }
  parse(r2, i2, n2) {
    return __async(this, null, function* () {
      const a2 = n2 && n2.signal;
      if (r$5(a2)) {
        const e2 = () => {
          a2.removeEventListener("abort", e2), this.status = I.INVALID;
        };
        a2.addEventListener("abort", e2);
      }
      let o2;
      try {
        o2 = yield this._parse(r2, n2);
      } catch (h2) {
        if (g$1(h2))
          throw h2;
        return { result: [], transferList: [] };
      }
      this.status = I.READY;
      const l2 = [];
      for (const e2 of o2) {
        const t2 = e2.serialize();
        l2.push(t2);
      }
      return { result: l2, transferList: l2.length <= i2 && l2 };
    });
  }
  setObsolete() {
    this.status = I.INVALID;
  }
  getLayers() {
    return this._workerTileHandler.getLayers();
  }
  getWorkerTileHandler() {
    return this._workerTileHandler;
  }
  _parse(e2, t2) {
    return __async(this, null, function* () {
      const r2 = e2.sourceName2DataAndRefKey;
      if (Object.keys(r2).length === 0)
        return [];
      this.status = I.MODIFIED;
      return new d(r2, this, t2.client, this._styleRepository, e2.styleLayerUIDs).parse(t2);
    });
  }
}
class r {
  constructor() {
    this._spriteInfo = {}, this._glyphInfo = {};
  }
  reset() {
    return this._spriteInfo = {}, this._glyphInfo = {}, Promise.resolve();
  }
  getLayers() {
    var e2;
    return (e2 = this._styleRepository) == null ? void 0 : e2.layers;
  }
  createTileAndParse(t2, r2) {
    return __async(this, null, function* () {
      const { key: o2 } = t2, i2 = {};
      for (const e2 of Object.keys(t2.sourceName2DataAndRefKey)) {
        const s2 = t2.sourceName2DataAndRefKey[e2];
        i2[e2] = s2.refKey;
      }
      const n$12 = new n(o2, i2, this, this._styleRepository);
      try {
        return yield n$12.parse(t2, this._vectorTileLayerMaxBuffers, r2);
      } catch (l2) {
        if (n$12.setObsolete(), n$12.release(), !g$1(l2))
          throw l2;
        return null;
      }
    });
  }
  updateStyle(e2) {
    if (!e2 || e2.length === 0 || !this._styleRepository)
      return;
    const t2 = this._styleRepository;
    for (const s2 of e2) {
      const e3 = s2.type, r2 = s2.data;
      switch (e3) {
        case 0:
          t2.setPaintProperties(r2.layerName, r2.paint);
          break;
        case 1:
          t2.setLayoutProperties(r2.layerName, r2.layout);
          break;
        case 3:
          t2.deleteStyleLayer(r2.layerName);
          break;
        case 2:
          t2.setStyleLayer(r2.layer, r2.index);
      }
    }
  }
  setStyle(e2) {
    this._styleRepository = new a$5(e2.style), this._spriteInfo = {}, this._glyphInfo = {}, this._vectorTileLayerMaxBuffers = e2.vectorTileLayerMaxBuffers;
  }
  fetchSprites(e2, t2, s2) {
    const r2 = [], o2 = this._spriteInfo;
    return e2.forEach((e3) => {
      o2[e3] === void 0 && r2.push(e3);
    }), r2.length === 0 ? Promise.resolve() : t2.invoke("getSprites", r2, { signal: s2 && s2.signal }).then((e3) => {
      for (const t3 in e3) {
        const s3 = e3[t3];
        o2[t3] = s3;
      }
    });
  }
  getSpriteItems() {
    return this._spriteInfo;
  }
  fetchGlyphs(e2, t2, s2, r2, o2) {
    const i2 = [];
    let n2 = this._glyphInfo[t2];
    return n2 ? s2.forEach((e3) => {
      n2[e3] || i2.push(e3);
    }) : (n2 = this._glyphInfo[t2] = [], s2.forEach((e3) => i2.push(e3))), i2.length === 0 ? Promise.resolve() : r2.invoke("getGlyphs", { tileID: e2, font: t2, codePoints: i2 }, o2).then((e3) => {
      for (let t3 = 0; t3 < e3.length; t3++)
        e3[t3] && (n2[t3] = e3[t3]);
    });
  }
  getGlyphItems(e2) {
    return this._glyphInfo[e2];
  }
}
export default r;
