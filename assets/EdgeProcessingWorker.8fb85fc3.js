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
import { cj as u$3, cG as t$2, fJ as u$4, fK as j, aP as n$2, fL as m$2, fM as m$3, fN as n$3, aQ as o$3, fO as r$2, fP as z$2, fQ as _, fR as N, fS as w$3, fT as c$3, fU as q$1 } from "./vendor.74d5941c.js";
import { A as A$1, f as f$2, u as u$5, a as a$3, p as p$2, c as c$2, o as o$2, i as i$1, m as m$1, T, d as d$3, b, l as l$3, h as h$2, e as A$2, O as O$1, x, g as g$2, w as w$2, E, L, F as F$1, I as I$1, U, j as j$1, V as V$1, M, S, k, q, v as v$2, z as z$1, B, C, D, G, H as H$1 } from "./InterleavedLayout.07204280.js";
import "./vec4.44fdb266.js";
function n$1(n2, f2, i2) {
  var u2;
  const c2 = n2.byteLength / (4 * f2), s2 = new Uint32Array(n2, 0, c2 * f2);
  let a2 = new Uint32Array(c2);
  const h2 = (u2 = i2 == null ? void 0 : i2.minReduction) != null ? u2 : 0, d2 = (i2 == null ? void 0 : i2.originalIndices) || null, g2 = d2 ? d2.length : 0, y2 = (i2 == null ? void 0 : i2.componentOffsets) || null;
  let U2 = 0;
  if (y2)
    for (let t2 = 0; t2 < y2.length - 1; t2++) {
      const n3 = y2[t2 + 1] - y2[t2];
      n3 > U2 && (U2 = n3);
    }
  else
    U2 = c2;
  const w2 = Math.floor(1.1 * U2) + 1;
  (o$1 == null || o$1.length < 2 * w2) && (o$1 = new Uint32Array(u$3(2 * w2)));
  for (let t2 = 0; t2 < 2 * w2; t2++)
    o$1[t2] = 0;
  let A2 = 0;
  const m2 = !!y2 && !!d2, b2 = m2 ? g2 : c2, p2 = m2 ? new Uint32Array(g2) : null, v2 = 1.96;
  let M2 = h2 !== 0 ? Math.ceil(4 * v2 * v2 / (h2 * h2) * h2 * (1 - h2)) : b2, q2 = 1, x2 = y2 ? y2[1] : b2;
  for (let t2 = 0; t2 < b2; t2++) {
    if (t2 === M2) {
      const n4 = 1 - A2 / t2;
      if (n4 + v2 * Math.sqrt(n4 * (1 - n4) / t2) < h2)
        return null;
      M2 *= 2;
    }
    if (t2 === x2) {
      for (let t3 = 0; t3 < 2 * w2; t3++)
        o$1[t3] = 0;
      if (d2)
        for (let t3 = y2[q2 - 1]; t3 < y2[q2]; t3++)
          p2[t3] = a2[d2[t3]];
      x2 = y2[++q2];
    }
    const n3 = m2 ? d2[t2] : t2, l2 = n3 * f2, i3 = r$1(s2, l2, f2);
    let u3 = i3 % w2, c3 = A2;
    for (; o$1[2 * u3 + 1] !== 0; ) {
      if (o$1[2 * u3] === i3) {
        const t3 = o$1[2 * u3 + 1] - 1;
        if (e$2(s2, l2, t3 * f2, f2)) {
          c3 = a2[t3];
          break;
        }
      }
      u3++, u3 >= w2 && (u3 -= w2);
    }
    c3 === A2 && (o$1[2 * u3] = i3, o$1[2 * u3 + 1] = n3 + 1, A2++), a2[n3] = c3;
  }
  if (h2 !== 0 && 1 - A2 / c2 < h2)
    return null;
  if (m2) {
    for (let t2 = y2[q2 - 1]; t2 < p2.length; t2++)
      p2[t2] = a2[d2[t2]];
    a2 = p2;
  }
  const j2 = new Uint32Array(f2 * A2);
  A2 = 0;
  for (let t2 = 0; t2 < b2; t2++)
    if (a2[t2] === A2) {
      l$2(s2, (m2 ? d2[t2] : t2) * f2, j2, A2 * f2, f2), A2++;
    }
  if (d2 && !m2) {
    const t2 = new Uint32Array(g2);
    for (let n3 = 0; n3 < t2.length; n3++)
      t2[n3] = a2[d2[n3]];
    a2 = t2;
  }
  return { buffer: j2.buffer, indices: a2, uniqueCount: A2 };
}
function e$2(t2, n2, e2, l2) {
  for (let r2 = 0; r2 < l2; r2++)
    if (t2[n2 + r2] !== t2[e2 + r2])
      return false;
  return true;
}
function l$2(t2, n2, e2, l2, r2) {
  for (let o2 = 0; o2 < r2; o2++)
    e2[l2 + o2] = t2[n2 + o2];
}
function r$1(t2, n2, e2) {
  let l2 = 0;
  for (let r2 = 0; r2 < e2; r2++)
    l2 = t2[n2 + r2] + l2 | 0, l2 = l2 + (l2 << 11) + (l2 >>> 2) | 0;
  return l2 >>> 0;
}
let o$1 = null;
const t$1 = { divisor: 0 };
function o(o2, n2 = {}) {
  n2 = __spreadValues(__spreadValues({}, t$1), n2);
  const r2 = o2.stride;
  return o2.fieldNames.filter((t2) => {
    const e2 = o2.fields.get(t2).optional;
    return !(e2 && e2.glPadding);
  }).map((t2) => {
    const i2 = o2.fields.get(t2), s2 = i2.constructor.ElementCount, u2 = e$1(i2.constructor.ElementType), f2 = i2.offset, c2 = !(!i2.optional || !i2.optional.glNormalized);
    return { name: t2, stride: r2, count: s2, type: u2, offset: f2, normalized: c2, divisor: n2.divisor };
  });
}
function e$1(t2) {
  const o2 = n[t2];
  if (o2)
    return o2;
  throw new Error("BufferType not supported in WebGL");
}
const n = { u8: 5121, u16: 5123, u32: 5125, i8: 5120, i16: 5122, i32: 5124, f32: 5126 };
const e = A$1().vec3f("position").u16("componentIndex").u16("u16padding"), i = A$1().vec2u8("sideness");
o(i);
const a$2 = A$1().vec3f("position0").vec3f("position1").u16("componentIndex").u8("variantOffset", { glNormalized: true }).u8("variantStroke").u8("variantExtension", { glNormalized: true }).u8("u8padding", { glPadding: true }).u16("u16padding", { glPadding: true }), r = a$2.clone().vec3f("normal"), s = a$2.clone().vec3f("normalA").vec3f("normalB");
class a$1 {
  updateSettings(t2) {
    this.settings = t2, this.edgeHashFunction = t2.reducedPrecision ? f$1 : p$1;
  }
  write(t2, o2, e2) {
    const n2 = this.edgeHashFunction(e2);
    y$1.seed = n2;
    const i2 = y$1.getIntRange(0, 255), r2 = y$1.getIntRange(0, this.settings.variants - 1), s2 = 0.7, a2 = y$1.getFloat(), c2 = 255 * (0.5 * g$1(-(1 - Math.min(a2 / s2, 1)) + Math.max(0, a2 - s2) / (1 - s2), 1.2) + 0.5);
    t2.position0.setVec(o2, e2.position0), t2.position1.setVec(o2, e2.position1), t2.componentIndex.set(o2, e2.componentIndex), t2.variantOffset.set(o2, i2), t2.variantStroke.set(o2, r2), t2.variantExtension.set(o2, c2);
  }
  trim(t2, o2) {
    return t2.slice(0, o2);
  }
}
const c$1 = new Float32Array(6), m = new Uint32Array(c$1.buffer), u$2 = new Uint32Array(1);
function p$1(t2) {
  const o2 = c$1;
  o2[0] = t2.position0[0], o2[1] = t2.position0[1], o2[2] = t2.position0[2], o2[3] = t2.position1[0], o2[4] = t2.position1[1], o2[5] = t2.position1[2], u$2[0] = 5381;
  for (let e2 = 0; e2 < m.length; e2++)
    u$2[0] = 31 * u$2[0] + m[e2];
  return u$2[0];
}
function f$1(t2) {
  const o2 = c$1;
  o2[0] = h$1(t2.position0[0]), o2[1] = h$1(t2.position0[1]), o2[2] = h$1(t2.position0[2]), o2[3] = h$1(t2.position1[0]), o2[4] = h$1(t2.position1[1]), o2[5] = h$1(t2.position1[2]), u$2[0] = 5381;
  for (let e2 = 0; e2 < m.length; e2++)
    u$2[0] = 31 * u$2[0] + m[e2];
  return u$2[0];
}
const l$1 = 1e4;
function h$1(t2) {
  return Math.round(t2 * l$1) / l$1;
}
function g$1(t2, o2) {
  const e2 = t2 < 0 ? -1 : 1;
  return __pow(Math.abs(t2), o2) * e2;
}
class d$2 {
  constructor() {
    this.commonWriter = new a$1();
  }
  updateSettings(t2) {
    this.commonWriter.updateSettings(t2);
  }
  allocate(t2) {
    return r.createBuffer(t2);
  }
  write(t2, o2, i2) {
    this.commonWriter.write(t2, o2, i2), u$4(v$1, i2.faceNormal0, i2.faceNormal1), j(v$1, v$1), t2.normal.setVec(o2, v$1);
  }
  trim(t2, o2) {
    return this.commonWriter.trim(t2, o2);
  }
}
d$2.Layout = r, d$2.glLayout = o(r, { divisor: 1 });
class w$1 {
  constructor() {
    this.commonWriter = new a$1();
  }
  updateSettings(t2) {
    this.commonWriter.updateSettings(t2);
  }
  allocate(t2) {
    return s.createBuffer(t2);
  }
  write(t2, o2, e2) {
    this.commonWriter.write(t2, o2, e2), t2.normalA.setVec(o2, e2.faceNormal0), t2.normalB.setVec(o2, e2.faceNormal1);
  }
  trim(t2, o2) {
    return this.commonWriter.trim(t2, o2);
  }
}
w$1.Layout = s, w$1.glLayout = o(s, { divisor: 1 });
const v$1 = n$2(), y$1 = new t$2();
function z(e2, t2) {
  return t2.push(e2.buffer), { buffer: e2.buffer, layout: F(e2.layout) };
}
function F(e2) {
  const t2 = new Array();
  return e2.fields.forEach((e3, r2) => {
    const n2 = __spreadProps(__spreadValues({}, e3), { constructor: J(e3.constructor) });
    t2.push([r2, n2]);
  }), { stride: e2.stride, fields: t2, fieldNames: e2.fieldNames };
}
const H = [f$2, u$5, a$3, p$2, c$2, o$2, i$1, m$1, T, d$3, b, l$3, h$2, A$2, O$1, x, g$2, w$2, E, L, F$1, I$1, U, j$1, V$1, M, S, k, q, v$2, z$1, B, C, D, G, H$1];
function J(e2) {
  return `${e2.ElementType}_${e2.ElementCount}`;
}
const O = new Map();
H.forEach((e2) => O.set(J(e2), e2));
function t(t2, o2, n2) {
  const r2 = o2 / 3, c2 = new Uint32Array(n2 + 1), e2 = new Uint32Array(n2 + 1), s2 = (t3, o3) => {
    t3 < o3 ? c2[t3 + 1]++ : e2[o3 + 1]++;
  };
  for (let x2 = 0; x2 < r2; x2++) {
    const o3 = t2[3 * x2], n3 = t2[3 * x2 + 1], r3 = t2[3 * x2 + 2];
    s2(o3, n3), s2(n3, r3), s2(r3, o3);
  }
  let f2 = 0, l2 = 0;
  for (let x2 = 0; x2 < n2; x2++) {
    const t3 = c2[x2 + 1], o3 = e2[x2 + 1];
    c2[x2 + 1] = f2, e2[x2 + 1] = l2, f2 += t3, l2 += o3;
  }
  const i2 = new Uint32Array(6 * r2), a2 = c2[n2], w2 = (t3, o3, n3) => {
    if (t3 < o3) {
      const r3 = c2[t3 + 1]++;
      i2[2 * r3] = o3, i2[2 * r3 + 1] = n3;
    } else {
      const r3 = e2[o3 + 1]++;
      i2[2 * a2 + 2 * r3] = t3, i2[2 * a2 + 2 * r3 + 1] = n3;
    }
  };
  for (let x2 = 0; x2 < r2; x2++) {
    const o3 = t2[3 * x2], n3 = t2[3 * x2 + 1], r3 = t2[3 * x2 + 2];
    w2(o3, n3, x2), w2(n3, r3, x2), w2(r3, o3, x2);
  }
  const y2 = (t3, o3) => {
    const n3 = 2 * t3, r3 = o3 - t3;
    for (let c3 = 1; c3 < r3; c3++) {
      const t4 = i2[n3 + 2 * c3], o4 = i2[n3 + 2 * c3 + 1];
      let r4 = c3 - 1;
      for (; r4 >= 0 && i2[n3 + 2 * r4] > t4; r4--)
        i2[n3 + 2 * r4 + 2] = i2[n3 + 2 * r4], i2[n3 + 2 * r4 + 3] = i2[n3 + 2 * r4 + 1];
      i2[n3 + 2 * r4 + 2] = t4, i2[n3 + 2 * r4 + 3] = o4;
    }
  };
  for (let x2 = 0; x2 < n2; x2++)
    y2(c2[x2], c2[x2 + 1]), y2(a2 + e2[x2], a2 + e2[x2 + 1]);
  const A2 = new Int32Array(3 * r2), U2 = (o3, n3) => o3 === t2[3 * n3] ? 0 : o3 === t2[3 * n3 + 1] ? 1 : o3 === t2[3 * n3 + 2] ? 2 : -1, u2 = (t3, o3) => {
    const n3 = U2(t3, o3);
    A2[3 * o3 + n3] = -1;
  }, p2 = (t3, o3, n3, r3) => {
    const c3 = U2(t3, o3);
    A2[3 * o3 + c3] = r3;
    const e3 = U2(n3, r3);
    A2[3 * r3 + e3] = o3;
  };
  for (let x2 = 0; x2 < n2; x2++) {
    let t3 = c2[x2];
    const o3 = c2[x2 + 1];
    let n3 = e2[x2];
    const r3 = e2[x2 + 1];
    for (; t3 < o3 && n3 < r3; ) {
      const o4 = i2[2 * t3], r4 = i2[2 * a2 + 2 * n3];
      o4 === r4 ? (p2(x2, i2[2 * t3 + 1], r4, i2[2 * a2 + 2 * n3 + 1]), t3++, n3++) : o4 < r4 ? (u2(x2, i2[2 * t3 + 1]), t3++) : (u2(r4, i2[2 * a2 + 2 * n3 + 1]), n3++);
    }
    for (; t3 < o3; )
      u2(x2, i2[2 * t3 + 1]), t3++;
    for (; n3 < r3; ) {
      u2(i2[2 * a2 + 2 * n3], i2[2 * a2 + 2 * n3 + 1]), n3++;
    }
  }
  return A2;
}
const p = -1;
function u$1(n2, r2, l2, g2 = V) {
  const f2 = n2.vertices.position, m2 = n2.vertices.componentIndex, u2 = m$2(g2.anglePlanar), I2 = m$2(g2.angleSignificantEdge), j2 = Math.cos(I2), N2 = Math.cos(u2), x2 = y.edge, F2 = x2.position0, U2 = x2.position1, k2 = x2.faceNormal0, E2 = x2.faceNormal1, D2 = w(n2), M2 = v(n2), P = M2.length / 4, S2 = r2.allocate(P);
  let b2 = 0;
  const L2 = P, q2 = l2.allocate(L2);
  let z2 = 0, B2 = 0, C2 = 0;
  const G2 = m$3(0, P), H2 = new Float32Array(P);
  n$3(H2, (e2, t2, o2) => {
    f2.getVec(M2[4 * t2 + 0], F2), f2.getVec(M2[4 * t2 + 1], U2), o2[t2] = q$1(F2, U2);
  }), G2.sort((e2, t2) => H2[t2] - H2[e2]);
  const J2 = new Array(), K = new Array();
  for (let e2 = 0; e2 < P; e2++) {
    const t2 = G2[e2], o2 = H2[t2], n3 = M2[4 * t2 + 0], s2 = M2[4 * t2 + 1], g3 = M2[4 * t2 + 2], v2 = M2[4 * t2 + 3], w2 = v2 === p;
    if (f2.getVec(n3, F2), f2.getVec(s2, U2), w2)
      o$3(k2, D2[3 * g3 + 0], D2[3 * g3 + 1], D2[3 * g3 + 2]), r$2(E2, k2), x2.componentIndex = m2.get(n3), x2.cosAngle = z$2(k2, E2);
    else {
      if (o$3(k2, D2[3 * g3 + 0], D2[3 * g3 + 1], D2[3 * g3 + 2]), o$3(E2, D2[3 * v2 + 0], D2[3 * v2 + 1], D2[3 * v2 + 2]), x2.componentIndex = m2.get(n3), x2.cosAngle = z$2(k2, E2), d$1(x2, N2))
        continue;
      x2.cosAngle < -0.9999 && r$2(E2, k2);
    }
    B2 += o2, C2++, w2 || h(x2, j2) ? (r2.write(S2, b2++, x2), J2.push(o2)) : A(x2, u2) && (l2.write(q2, z2++, x2), K.push(o2));
  }
  const O2 = new Float32Array(J2.reverse()), Q = new Float32Array(K.reverse());
  return { regular: { instancesData: r2.trim(S2, b2), lodInfo: { lengths: O2 } }, silhouette: { instancesData: l2.trim(q2, z2), lodInfo: { lengths: Q } }, averageEdgeLength: B2 / C2 };
}
function h(e2, t2) {
  return e2.cosAngle < t2;
}
function d$1(e2, t2) {
  return e2.cosAngle > t2;
}
function A(e2, t2) {
  const o2 = N(e2.cosAngle), r2 = y.fwd, s2 = y.ortho;
  w$3(r2, e2.position1, e2.position0);
  return o2 * (z$2(_(s2, e2.faceNormal0, e2.faceNormal1), r2) > 0 ? -1 : 1) > t2;
}
function v(e2) {
  const t2 = e2.faces.length / 3, o2 = e2.faces, n2 = e2.neighbors;
  let r2 = 0;
  for (let a2 = 0; a2 < t2; a2++) {
    const e3 = n2[3 * a2 + 0], t3 = n2[3 * a2 + 1], s3 = n2[3 * a2 + 2], c3 = o2[3 * a2 + 0], i2 = o2[3 * a2 + 1], l2 = o2[3 * a2 + 2];
    r2 += e3 === p || c3 < i2 ? 1 : 0, r2 += t3 === p || i2 < l2 ? 1 : 0, r2 += s3 === p || l2 < c3 ? 1 : 0;
  }
  const s2 = new Int32Array(4 * r2);
  let c2 = 0;
  for (let a2 = 0; a2 < t2; a2++) {
    const e3 = n2[3 * a2 + 0], t3 = n2[3 * a2 + 1], r3 = n2[3 * a2 + 2], i2 = o2[3 * a2 + 0], l2 = o2[3 * a2 + 1], g2 = o2[3 * a2 + 2];
    (e3 === p || i2 < l2) && (s2[c2++] = i2, s2[c2++] = l2, s2[c2++] = a2, s2[c2++] = e3), (t3 === p || l2 < g2) && (s2[c2++] = l2, s2[c2++] = g2, s2[c2++] = a2, s2[c2++] = t3), (r3 === p || g2 < i2) && (s2[c2++] = g2, s2[c2++] = i2, s2[c2++] = a2, s2[c2++] = r3);
  }
  return s2;
}
function w(e2) {
  const t2 = e2.faces.length / 3, o2 = e2.vertices.position, n2 = e2.faces, r2 = I.v0, s2 = I.v1, c2 = I.v2, a2 = new Float32Array(3 * t2);
  for (let i2 = 0; i2 < t2; i2++) {
    const e3 = n2[3 * i2 + 0], t3 = n2[3 * i2 + 1], m2 = n2[3 * i2 + 2];
    o2.getVec(e3, r2), o2.getVec(t3, s2), o2.getVec(m2, c2), c$3(s2, s2, r2), c$3(c2, c2, r2), _(r2, s2, c2), j(r2, r2), a2[3 * i2 + 0] = r2[0], a2[3 * i2 + 1] = r2[1], a2[3 * i2 + 2] = r2[2];
  }
  return a2;
}
const y = { edge: { position0: n$2(), position1: n$2(), faceNormal0: n$2(), faceNormal1: n$2(), componentIndex: 0, cosAngle: 0 }, ortho: n$2(), fwd: n$2() }, I = { v0: n$2(), v1: n$2(), v2: n$2() }, V = { anglePlanar: 4, angleSignificantEdge: 35 };
function a(e2) {
  return __async(this, null, function* () {
    const t2 = u(e2), n2 = f(t2), r2 = [t2.data.buffer];
    return { result: c(n2, r2), transferList: r2 };
  });
}
function f(e2) {
  const t2 = g(e2.data, e2.skipDeduplicate, e2.indices, e2.indicesLength);
  return d.updateSettings(e2.writerSettings), l.updateSettings(e2.writerSettings), u$1(t2, d, l);
}
function u(e$12) {
  return { data: e.createView(e$12.dataBuffer), indices: e$12.indicesType === "Uint32Array" ? new Uint32Array(e$12.indicesBuffer) : e$12.indicesType === "Uint16Array" ? new Uint16Array(e$12.indicesBuffer) : void 0, indicesLength: e$12.indicesLength, writerSettings: e$12.writerSettings, skipDeduplicate: e$12.skipDeduplicate };
}
function c(e2, t2) {
  t2.push(e2.regular.lodInfo.lengths.buffer), t2.push(e2.silhouette.lodInfo.lengths.buffer);
  return { regular: { instancesData: z(e2.regular.instancesData, t2), lodInfo: { lengths: e2.regular.lodInfo.lengths.buffer } }, silhouette: { instancesData: z(e2.silhouette.instancesData, t2), lodInfo: { lengths: e2.silhouette.lodInfo.lengths.buffer } }, averageEdgeLength: e2.averageEdgeLength };
}
function g(n2, r2, i2, o2) {
  if (r2) {
    return { faces: i2, facesLength: o2, neighbors: t(i2, o2, n2.count), vertices: n2 };
  }
  const a2 = n$1(n2.buffer, n2.stride / 4, { originalIndices: i2, originalIndicesLength: o2 }), f2 = t(a2.indices, o2, a2.uniqueCount);
  return { faces: a2.indices, facesLength: a2.indices.length, neighbors: f2, vertices: e.createView(a2.buffer) };
}
const d = new d$2(), l = new w$1();
export { f as work, a as wrappedWork };
