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
import { a4 as n, aa as s$2, cJ as U, cK as v$1, cL as q, cM as k$1, bb as u$3, cg as i$2, cN as l, cO as c$2, cP as a$1, a9 as u$4, cQ as o, cR as o$1 } from "./vendor.74d5941c.js";
import { t, a as r$1, h as h$1, S as S$1 } from "./CIMSymbolHelper.6546a069.js";
function s$1(r2, t2, o2, n$1, a2) {
  const s2 = r2.referencesGeometry() && a2 ? u$2(t2, n$1, a2) : t2, i2 = r2.repurposeFeature(s2);
  try {
    return r2.evaluate(__spreadProps(__spreadValues({}, o2), { $feature: i2 }));
  } catch (c2) {
    return n.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:", c2), null;
  }
}
const i$1 = new Map();
function u$2(e2, r2, t2) {
  const { transform: o2, hasZ: n2, hasM: a2 } = t2;
  i$1.has(r2) || i$1.set(r2, c$1(r2));
  const s2 = i$1.get(r2)(e2.geometry, o2, n2, a2);
  return __spreadProps(__spreadValues({}, e2), { geometry: s2 });
}
function c$1(s2) {
  const i2 = {};
  switch (s2) {
    case "esriGeometryPoint":
      return (e2, r2, t2, o2) => k$1(r2, i2, e2, t2, o2);
    case "esriGeometryPolygon":
      return (e2, r2, t2, o2) => q(r2, i2, e2, t2, o2);
    case "esriGeometryPolyline":
      return (e2, r2, t2, n2) => v$1(r2, i2, e2, t2, n2);
    case "esriGeometryMultipoint":
      return (e2, r2, o2, n2) => U(r2, i2, e2, o2, n2);
    default:
      return n.getLogger("esri.views.2d.support.arcadeOnDemand").error(new s$2("mapview-arcade", `Unable to handle geometryType: ${s2}`)), (e2) => e2;
  }
}
function r(t2) {
  if (!t2)
    return null;
  switch (t2.type) {
    case "CIMPointSymbol": {
      const n2 = t2.symbolLayers;
      return n2 && n2.length === 1 ? r(n2[0]) : null;
    }
    case "CIMVectorMarker": {
      const n2 = t2.markerGraphics;
      if (!n2 || n2.length !== 1)
        return null;
      const o2 = n2[0];
      if (!o2)
        return null;
      const r2 = o2.geometry;
      if (!r2)
        return null;
      const l2 = o2.symbol;
      return !l2 || l2.type !== "CIMPolygonSymbol" && l2.type !== "CIMLineSymbol" ? null : { geom: r2, asFill: l2.type === "CIMPolygonSymbol" };
    }
    case "sdf":
      return { geom: t2.geom, asFill: t2.asFill };
  }
  return null;
}
function e(t2) {
  return t2 ? t2.rings ? t2.rings : t2.paths ? t2.paths : t2.xmin !== void 0 && t2.ymin !== void 0 && t2.xmax !== void 0 && t2.ymax !== void 0 ? [[[t2.xmin, t2.ymin], [t2.xmin, t2.ymax], [t2.xmax, t2.ymax], [t2.xmax, t2.ymin], [t2.xmin, t2.ymin]]] : null : null;
}
function i(t$1) {
  let o2 = 1 / 0, r2 = -1 / 0, l2 = 1 / 0, e2 = -1 / 0;
  for (const n2 of t$1)
    for (const t2 of n2)
      t2[0] < o2 && (o2 = t2[0]), t2[0] > r2 && (r2 = t2[0]), t2[1] < l2 && (l2 = t2[1]), t2[1] > e2 && (e2 = t2[1]);
  return new t(o2, l2, r2 - o2, e2 - l2);
}
function s(t2) {
  let n2 = 1 / 0, o2 = -1 / 0, r2 = 1 / 0, l2 = -1 / 0;
  for (const e2 of t2)
    for (const t3 of e2)
      t3[0] < n2 && (n2 = t3[0]), t3[0] > o2 && (o2 = t3[0]), t3[1] < r2 && (r2 = t3[1]), t3[1] > l2 && (l2 = t3[1]);
  return [n2, r2, o2, l2];
}
function f(n2) {
  return n2 ? n2.rings ? s(n2.rings) : n2.paths ? s(n2.paths) : u$3(n2) ? [n2.xmin, n2.ymin, n2.xmax, n2.ymax] : null : null;
}
function m(t2, n2, o2, r2, l2) {
  const [e2, i2, s2, f2] = t2;
  if (s2 < e2 || f2 < i2)
    return [0, 0, 0];
  const m2 = s2 - e2, a2 = f2 - i2, c2 = 128, u2 = 1, y2 = Math.floor(0.5 * (0.5 * c2 - u2)), h2 = (c2 - 2 * (y2 + u2)) / Math.max(m2, a2), x2 = Math.round(m2 * h2) + 2 * y2, M2 = Math.round(a2 * h2) + 2 * y2;
  let g2 = 1;
  if (n2) {
    g2 = M2 / h2 / (n2.ymax - n2.ymin);
  }
  let p = 0, d2 = 0;
  if (r2)
    if (l2) {
      if (n2 && o2 && n2.ymax - n2.ymin > 0) {
        const t3 = (n2.xmax - n2.xmin) / (n2.ymax - n2.ymin);
        p = r2.x / (o2 * t3), d2 = r2.y / o2;
      }
    } else
      p = r2.x, d2 = r2.y;
  p = 0.5 * (n2.xmax + n2.xmin) + p * (n2.xmax - n2.xmin), d2 = 0.5 * (n2.ymax + n2.ymin) + d2 * (n2.ymax - n2.ymin), p -= e2, d2 -= i2, p *= h2, d2 *= h2, p += y2, d2 += y2;
  return [g2, p / x2 - 0.5, -(d2 / M2 - 0.5)];
}
function a(t2) {
  const n2 = e(t2.geom), o2 = i(n2), r2 = 128, l2 = 1, s2 = Math.floor(0.5 * (0.5 * r2 - l2)), f2 = (r2 - 2 * (s2 + l2)) / Math.max(o2.width, o2.height), m2 = Math.round(o2.width * f2) + 2 * s2, a2 = Math.round(o2.height * f2) + 2 * s2, h2 = [];
  for (const e2 of n2)
    if (e2 && e2.length > 1) {
      const n3 = [];
      for (const t3 of e2) {
        let [r3, l3] = t3;
        r3 -= o2.x, l3 -= o2.y, r3 *= f2, l3 *= f2, r3 += s2 - 0.5, l3 += s2 - 0.5, n3.push([r3, l3]);
      }
      if (t2.asFill) {
        const t3 = n3.length - 1;
        n3[0][0] === n3[t3][0] && n3[0][1] === n3[t3][1] || n3.push(n3[0]);
      }
      h2.push(n3);
    }
  const x2 = c(h2, m2, a2, s2);
  return t2.asFill && u$1(h2, m2, a2, s2, x2), [y$1(x2, s2), m2, a2];
}
function c(t2, n2, o2, r2) {
  const l2 = n2 * o2, e2 = new Array(l2), i2 = r2 * r2 + 1;
  for (let s2 = 0; s2 < l2; ++s2)
    e2[s2] = i2;
  for (const s2 of t2) {
    const t3 = s2.length;
    for (let l3 = 1; l3 < t3; ++l3) {
      const t4 = s2[l3 - 1], i3 = s2[l3];
      let f2, m2, a2, c2;
      t4[0] < i3[0] ? (f2 = t4[0], m2 = i3[0]) : (f2 = i3[0], m2 = t4[0]), t4[1] < i3[1] ? (a2 = t4[1], c2 = i3[1]) : (a2 = i3[1], c2 = t4[1]);
      let u2 = Math.floor(f2) - r2, y2 = Math.floor(m2) + r2, h2 = Math.floor(a2) - r2, x2 = Math.floor(c2) + r2;
      u2 < 0 && (u2 = 0), y2 > n2 && (y2 = n2), h2 < 0 && (h2 = 0), x2 > o2 && (x2 = o2);
      const M2 = i3[0] - t4[0], g2 = i3[1] - t4[1], p = M2 * M2 + g2 * g2;
      for (let r3 = u2; r3 < y2; r3++)
        for (let l4 = h2; l4 < x2; l4++) {
          let s3, f3, m3 = (r3 - t4[0]) * M2 + (l4 - t4[1]) * g2;
          m3 < 0 ? (s3 = t4[0], f3 = t4[1]) : m3 > p ? (s3 = i3[0], f3 = i3[1]) : (m3 /= p, s3 = t4[0] + m3 * M2, f3 = t4[1] + m3 * g2);
          const a3 = (r3 - s3) * (r3 - s3) + (l4 - f3) * (l4 - f3), c3 = (o2 - l4 - 1) * n2 + r3;
          a3 < e2[c3] && (e2[c3] = a3);
        }
    }
  }
  for (let s2 = 0; s2 < l2; ++s2)
    e2[s2] = Math.sqrt(e2[s2]);
  return e2;
}
function u$1(t2, n2, o2, r2, l2) {
  for (const e2 of t2) {
    const t3 = e2.length;
    for (let i2 = 1; i2 < t3; ++i2) {
      const t4 = e2[i2 - 1], s2 = e2[i2];
      let f2, m2, a2, c2;
      t4[0] < s2[0] ? (f2 = t4[0], m2 = s2[0]) : (f2 = s2[0], m2 = t4[0]), t4[1] < s2[1] ? (a2 = t4[1], c2 = s2[1]) : (a2 = s2[1], c2 = t4[1]);
      let u2 = Math.floor(f2), y2 = Math.floor(m2) + 1, h2 = Math.floor(a2), x2 = Math.floor(c2) + 1;
      u2 < r2 && (u2 = r2), y2 > n2 - r2 && (y2 = n2 - r2), h2 < r2 && (h2 = r2), x2 > o2 - r2 && (x2 = o2 - r2);
      for (let e3 = h2; e3 < x2; ++e3) {
        if (t4[1] > e3 == s2[1] > e3)
          continue;
        const i3 = (o2 - e3 - 1) * n2;
        for (let n3 = u2; n3 < y2; ++n3)
          n3 < (s2[0] - t4[0]) * (e3 - t4[1]) / (s2[1] - t4[1]) + t4[0] && (l2[i3 + n3] = -l2[i3 + n3]);
        for (let t5 = r2; t5 < u2; ++t5)
          l2[i3 + t5] = -l2[i3 + t5];
      }
    }
  }
}
function y$1(t2, n2) {
  const r2 = 2 * n2, l2 = t2.length, e2 = new Uint8Array(4 * l2);
  for (let i2 = 0; i2 < l2; ++i2) {
    const n3 = 0.5 - t2[i2] / r2;
    r$1(n3, e2, 4 * i2);
  }
  return e2;
}
const u = n.getLogger("esri.symbols.cim.cimAnalyzer");
function y(e2) {
  switch (e2) {
    case "Butt":
      return 0;
    case "Square":
      return 2;
    case "Round":
    default:
      return 1;
  }
}
function h(e2) {
  switch (e2) {
    case "Bevel":
      return 0;
    case "Miter":
      return 2;
    case "Round":
    default:
      return 1;
  }
}
function g(e2) {
  switch (e2) {
    case "Left":
    default:
      return "left";
    case "Right":
      return "right";
    case "Center":
      return "center";
    case "Justify":
      return "justify";
  }
}
function d(e2) {
  switch (e2) {
    case "Top":
    default:
      return "top";
    case "Center":
      return "middle";
    case "Baseline":
      return "baseline";
    case "Bottom":
      return "bottom";
  }
}
function S(e2) {
  let t2 = "normal", i2 = "normal";
  if (e2) {
    const o2 = e2.toLowerCase();
    o2.indexOf("italic") !== -1 ? t2 = "italic" : o2.indexOf("oblique") !== -1 && (t2 = "oblique"), o2.indexOf("bold") !== -1 ? i2 = "bold" : o2.indexOf("light") !== -1 && (i2 = "lighter");
  }
  return { style: t2, weight: i2 };
}
function v(e2) {
  return e2.underline ? "underline" : e2.strikethrough ? "line-through" : "none";
}
function b(e2, t2, i2, o2) {
  let r2;
  e2[t2] ? r2 = e2[t2] : (r2 = {}, e2[t2] = r2), r2[i2] = o2;
}
function N(e2) {
  const t2 = e2.markerPlacement;
  return t2 && t2.angleToLine ? 1 : 0;
}
function k(e2, t2, o2, r2) {
  return __async(this, null, function* () {
    const n2 = o2 || [];
    if (!e2)
      return n2;
    let a2, l2;
    const s2 = {};
    if (e2.type !== "CIMSymbolReference")
      return u.error("Expect cim type to be 'CIMSymbolReference'"), n2;
    if (a2 = e2.symbol, l2 = e2.primitiveOverrides, l2) {
      const e3 = [];
      for (const o3 of l2) {
        const r3 = o3.valueExpressionInfo;
        if (r3 && t2) {
          const n3 = r3.expression, a3 = i$2(n3, t2.spatialReference, t2.fields).then((e4) => {
            e4 && b(s2, o3.primitiveName, o3.propertyName, e4);
          });
          e3.push(a3);
        } else
          o3.value != null && b(s2, o3.primitiveName, o3.propertyName, o3.value);
      }
      yield Promise.all(e3);
    }
    switch (a2.type) {
      case "CIMPointSymbol":
      case "CIMLineSymbol":
      case "CIMPolygonSymbol":
        O(a2, l2, s2, t2, n2, r2);
    }
    return n2;
  });
}
function O(e2, t2, i2, o2, r2, n2) {
  if (!e2)
    return;
  const a2 = e2.symbolLayers;
  if (!a2)
    return;
  let l2;
  const s2 = h$1.getSize(e2);
  e2.type === "CIMPointSymbol" && e2.angleAlignment === "Map" && (l2 = 1);
  let m2 = a2.length;
  for (; m2--; ) {
    const c2 = a2[m2];
    if (!c2 || c2.enable === false)
      continue;
    const p = [];
    switch (S$1.findApplicableOverrides(c2, t2, p), c2.type) {
      case "CIMSolidFill":
        C(c2, i2, p, o2, r2);
        break;
      case "CIMPictureFill":
        P(c2, i2, p, o2, r2);
        break;
      case "CIMHatchFill":
        L(c2, i2, p, o2, r2);
        break;
      case "CIMGradientFill":
        M(c2, i2, p, o2, r2);
        break;
      case "CIMSolidStroke":
        X(c2, i2, p, o2, r2, e2.type === "CIMPolygonSymbol", s2);
        break;
      case "CIMPictureStroke":
        I(c2, i2, p, o2, r2, e2.type === "CIMPolygonSymbol", s2);
        break;
      case "CIMGradientStroke":
        x(c2, i2, p, o2, r2, e2.type === "CIMPolygonSymbol", s2);
        break;
      case "CIMCharacterMarker":
        if (w(c2, i2, p, o2, r2))
          break;
        break;
      case "CIMPictureMarker":
        if (w(c2, i2, p, o2, r2))
          break;
        e2.type === "CIMLineSymbol" && (l2 = N(c2)), z(c2, i2, p, o2, r2, l2, s2);
        break;
      case "CIMVectorMarker":
        if (w(c2, i2, p, o2, r2))
          break;
        e2.type === "CIMLineSymbol" && (l2 = N(c2)), J(c2, i2, p, o2, r2, l2, s2, n2);
        break;
      default:
        u.error("Cannot analyze CIM layer", c2.type);
    }
  }
}
function C(t2, i2, o2, r2, n2) {
  const l$1 = t2.primitiveName, s2 = l(t2.color), c2 = c$2(JSON.stringify(t2)).toString();
  n2.push({ type: "fill", templateHash: c2, materialHash: o2.length === 0 ? c2 : () => c2, cim: t2, materialOverrides: null, colorLocked: t2.colorLocked, color: F(l$1, i2, "Color", r2, s2, j), height: 0, angle: 0, offsetX: 0, offsetY: 0, scaleX: 1, effects: t2.effects });
}
function P(t2, i2, o2, r2, n2) {
  const l$1 = t2.primitiveName, s2 = t2.tintColor ? l(t2.tintColor) : { r: 255, g: 255, b: 255, a: 1 }, c2 = c$2(JSON.stringify(t2)).toString(), f2 = c$2(`${t2.url}${JSON.stringify(t2.colorSubstitutions)}`).toString();
  n2.push({ type: "fill", templateHash: c2, materialHash: o2.length === 0 ? f2 : () => f2, cim: t2, materialOverrides: null, colorLocked: t2.colorLocked, effects: t2.effects, color: F(l$1, i2, "TintColor", r2, s2, j), height: F(l$1, i2, "Height", r2, t2.height), scaleX: F(l$1, i2, "ScaleX", r2, t2.scaleX), angle: F(l$1, i2, "Rotation", r2, t2.rotation), offsetX: F(l$1, i2, "OffsetX", r2, t2.offsetX), offsetY: F(l$1, i2, "OffsetY", r2, t2.offsetY) });
}
function L(t2, i2, o2, r2, n2) {
  const a2 = ["Rotation", "OffsetX", "OffsetY"], l2 = o2.filter((e2) => e2.primitiveName !== t2.primitiveName && a2.indexOf(e2.propertyName) === -1), s2 = t2.primitiveName, c2 = c$2(JSON.stringify(t2)).toString(), f2 = c$2(`${t2.separation}${JSON.stringify(t2.lineSymbol)}`).toString();
  n2.push({ type: "fill", templateHash: c2, materialHash: o2.length === 0 ? f2 : W(f2, i2, l2, r2), cim: t2, materialOverrides: l2, colorLocked: t2.colorLocked, effects: t2.effects, color: { r: 255, g: 255, b: 255, a: 1 }, height: F(s2, i2, "Separation", r2, t2.separation), scaleX: 1, angle: F(s2, i2, "Rotation", r2, t2.rotation), offsetX: F(s2, i2, "OffsetX", r2, t2.offsetX), offsetY: F(s2, i2, "OffsetY", r2, t2.offsetY) });
}
function M(t2, i2, o2, r2, n2) {
  const a2 = c$2(JSON.stringify(t2)).toString();
  n2.push({ type: "fill", templateHash: a2, materialHash: o2.length === 0 ? a2 : W(a2, i2, o2, r2), cim: t2, materialOverrides: null, colorLocked: t2.colorLocked, effects: t2.effects, color: { r: 128, g: 128, b: 128, a: 1 }, height: 0, angle: 0, offsetX: 0, offsetY: 0, scaleX: 1 });
}
function X(t2, i2, o2, r2, n2, l$1, s2) {
  const c2 = c$2(JSON.stringify(t2)).toString(), f2 = t2.primitiveName, m2 = l(t2.color), p = t2.width !== void 0 ? t2.width : 4, u2 = y(t2.capStyle), g2 = h(t2.joinStyle), d2 = t2.miterLimit;
  n2.push({ type: "line", templateHash: c2, materialHash: o2.length === 0 ? c2 : () => c2, cim: t2, materialOverrides: null, isOutline: l$1, colorLocked: t2.colorLocked, effects: t2.effects, color: F(f2, i2, "Color", r2, m2, j), width: F(f2, i2, "Width", r2, p), cap: F(f2, i2, "CapStyle", r2, u2), join: F(f2, i2, "JoinStyle", r2, g2), miterLimit: F(f2, i2, "MiterLimit", r2, d2), referenceWidth: s2, zOrder: A(t2.name), isDashed: false });
}
function I(t2, i2, o2, r2, n2, l$1, s2) {
  const c2 = c$2(`${t2.url}${JSON.stringify(t2.colorSubstitutions)}`).toString(), f2 = t2.primitiveName, m2 = l(t2.tintColor), p = t2.width !== void 0 ? t2.width : 4, u2 = y(t2.capStyle), g2 = h(t2.joinStyle), d2 = t2.miterLimit, S2 = c$2(JSON.stringify(t2)).toString();
  n2.push({ type: "line", templateHash: S2, materialHash: o2.length === 0 ? c2 : () => c2, cim: t2, materialOverrides: null, isOutline: l$1, colorLocked: t2.colorLocked, effects: t2.effects, color: F(f2, i2, "TintColor", r2, m2, j), width: F(f2, i2, "Width", r2, p), cap: F(f2, i2, "CapStyle", r2, u2), join: F(f2, i2, "JoinStyle", r2, g2), miterLimit: F(f2, i2, "MiterLimit", r2, d2), referenceWidth: s2, zOrder: A(t2.name), isDashed: false });
}
function x(t2, i2, o2, r2, n2, a2, l2) {
  const s2 = t2.primitiveName, c2 = t2.width !== void 0 ? t2.width : 4, f2 = y(t2.capStyle), m2 = h(t2.joinStyle), p = t2.miterLimit, u2 = c$2(JSON.stringify(t2)).toString();
  n2.push({ type: "line", templateHash: u2, materialHash: o2.length === 0 ? u2 : W(u2, i2, o2, r2), cim: t2, materialOverrides: null, isOutline: a2, colorLocked: t2.colorLocked, effects: t2.effects, color: { r: 128, g: 128, b: 128, a: 1 }, width: F(s2, i2, "Width", r2, c2), cap: F(s2, i2, "CapStyle", r2, f2), join: F(s2, i2, "JoinStyle", r2, m2), miterLimit: F(s2, i2, "MiterLimit", r2, p), referenceWidth: l2, zOrder: A(t2.name), isDashed: false });
}
function w(t2, i2, o2, r2, n2) {
  const a2 = t2.markerPlacement;
  if (!a2 || a2.type !== "CIMMarkerPlacementInsidePolygon")
    return false;
  const l2 = a2, s2 = ["Rotation", "OffsetX", "OffsetY"], c2 = o2.filter((e2) => e2.primitiveName !== t2.primitiveName && s2.indexOf(e2.propertyName) === -1), f2 = c$2(JSON.stringify(t2)).toString();
  return n2.push({ type: "fill", templateHash: f2, materialHash: o2.length === 0 ? f2 : W(f2, i2, c2, r2), cim: t2, materialOverrides: c2, colorLocked: t2.colorLocked, effects: t2.effects, color: { r: 255, g: 255, b: 255, a: 1 }, height: F(l2.primitiveName, i2, "StepY", r2, l2.stepY), scaleX: 1, angle: F(l2.primitiveName, i2, "GridAngle", r2, l2.gridAngle), offsetX: F(l2.primitiveName, i2, "OffsetX", r2, l2.offsetX), offsetY: F(l2.primitiveName, i2, "OffsetY", r2, l2.offsetY) }), true;
}
function z(t2, i2, o2, r2, n2, l$1, s2) {
  const c2 = t2.primitiveName, f2 = t2.size, m2 = t2.scaleX, p = t2.rotation, u2 = t2.offsetX, y2 = t2.offsetY, h2 = l(t2.tintColor), g2 = c$2(`${t2.url}${JSON.stringify(t2.colorSubstitutions)}`).toString();
  let d2 = false, S2 = "";
  for (const e2 of o2)
    e2.primitiveName === c2 && (e2.value !== void 0 ? S2 += `-${e2.primitiveName}-${e2.propertyName}-${JSON.stringify(e2.value)}` : e2.valueExpressionInfo && (d2 = true));
  n2.push({ type: "marker", templateHash: c$2(JSON.stringify(t2) + S2).toString(), materialHash: d2 ? () => g2 : g2, cim: t2, materialOverrides: null, colorLocked: t2.colorLocked, effects: t2.effects, scaleSymbolsProportionally: false, alignment: l$1, size: F(c2, i2, "Size", r2, f2), scaleX: F(c2, i2, "ScaleX", r2, m2), rotation: F(c2, i2, "Rotation", r2, p), offsetX: F(c2, i2, "OffsetX", r2, u2), offsetY: F(c2, i2, "OffsetY", r2, y2), color: F(c2, i2, "TintColor", r2, h2, j), anchorPoint: t2.anchorPoint, isAbsoluteAnchorPoint: t2.anchorPointUnits !== "Relative", outlineColor: { r: 0, g: 0, b: 0, a: 0 }, outlineWidth: 0, frameHeight: 0, rotateClockwise: t2.rotateClockwise, referenceSize: s2, sizeRatio: 1, markerPlacement: t2.markerPlacement });
}
function J(e2, t2, i2, o2, r2, n2, a2, l2) {
  const s2 = e2.markerGraphics;
  if (!s2)
    return;
  let c2 = 0;
  if (e2.scaleSymbolsProportionally) {
    const t3 = e2.frame;
    t3 && (c2 = t3.ymax - t3.ymin);
  }
  for (const f2 of s2)
    if (f2) {
      const s3 = f2.symbol;
      if (!s3)
        continue;
      switch (s3.type) {
        case "CIMPointSymbol":
        case "CIMLineSymbol":
        case "CIMPolygonSymbol":
          Y(e2, f2, i2, t2, o2, r2, n2, a2, c2, l2);
          break;
        case "CIMTextSymbol":
          H(e2, f2, t2, i2, o2, r2, n2, a2, c2);
      }
    }
}
function H(t2, i2, o2, r2, n2, s2, m2, p, u2) {
  const y2 = [];
  S$1.findApplicableOverrides(i2, r2, y2);
  const h2 = i2.geometry;
  if (!("x" in h2) || !("y" in h2))
    return;
  const b2 = i2.symbol, N2 = v(b2), k2 = S(b2.fontStyleName);
  b2.font = __spreadValues({ family: b2.fontFamilyName, decoration: N2 }, k2);
  const O2 = t2.frame, C2 = h2.x - 0.5 * (O2.xmin + O2.xmax), P2 = h2.y - 0.5 * (O2.ymin + O2.ymax), L2 = t2.size / u2, M2 = t2.primitiveName, X2 = (b2.height || 0) * L2, I2 = b2.angle || 0, x2 = ((b2.offsetX || 0) + C2) * L2, w2 = ((b2.offsetY || 0) + P2) * L2, z2 = l(h$1.getFillColor(b2));
  let J2 = l(h$1.getStrokeColor(b2)), H2 = h$1.getStrokeWidth(b2);
  H2 || (J2 = l(h$1.getFillColor(b2.haloSymbol)), H2 = b2.haloSize * L2);
  let Y2 = "";
  for (const e2 of r2)
    e2.primitiveName === M2 && e2.value !== void 0 && (Y2 += `-${e2.primitiveName}-${e2.propertyName}-${JSON.stringify(e2.value)}`);
  const R2 = JSON.stringify(t2.effects) + Number(t2.colorLocked) + JSON.stringify(t2.anchorPoint) + t2.anchorPointUnits + JSON.stringify(t2.markerPlacement), $2 = c$2(JSON.stringify(i2) + R2 + Y2).toString();
  s2.push({ type: "text", templateHash: $2, materialHash: () => c$2(JSON.stringify(b2.font)).toString(), cim: b2, materialOverrides: null, colorLocked: t2.colorLocked, effects: t2.effects, alignment: m2, anchorPoint: { x: t2.anchorPoint ? t2.anchorPoint.x : 0, y: t2.anchorPoint ? t2.anchorPoint.y : 0 }, isAbsoluteAnchorPoint: t2.anchorPointUnits !== "Relative", fontName: b2.fontFamilyName, decoration: "none", weight: "normal", style: "normal", size: F(M2, o2, "Size", n2, X2), angle: F(M2, o2, "Rotation", n2, I2), offsetX: F(M2, o2, "OffsetX", n2, x2), offsetY: F(M2, o2, "OffsetY", n2, w2), horizontalAlignment: g(b2.horizontalAlignment), verticalAlignment: d(b2.verticalAlignment), text: F(i2.primitiveName, o2, "TextString", n2, i2.textString, a$1, b2.textCase), color: z2, outlineColor: J2, outlineSize: H2, referenceSize: p, sizeRatio: 1, markerPlacement: t2.markerPlacement });
}
function Y(t2, i2, o2, r2, n2, l$1, s2, f$1, u2, y2) {
  const h2 = i2.symbol, g2 = i2.geometry;
  if (!g2)
    return;
  const d2 = h2.symbolLayers;
  if (!d2)
    return;
  if (y2)
    return void R(t2, i2, r2, o2, n2, l$1, s2, f$1, u2);
  let S2 = d2.length;
  for (; S2--; ) {
    const y3 = d2[S2];
    if (y3 && y3.enable !== false)
      switch (y3.type) {
        case "CIMSolidFill":
        case "CIMSolidStroke": {
          const h3 = f(g2);
          if (!h3)
            continue;
          const [d3, S3, v2] = m(h3, t2.frame, t2.size, t2.anchorPoint, t2.anchorPointUnits !== "Relative"), b2 = y3.type === "CIMSolidFill", N2 = { type: "sdf", geom: g2, asFill: b2 }, k2 = t2.primitiveName, O2 = t2.size, C2 = t2.rotation || 0, P2 = t2.offsetX, L2 = t2.offsetY, M2 = y3.primitiveName, X2 = l(b2 ? h$1.getFillColor(y3) : h$1.getStrokeColor(y3)), I2 = b2 ? { r: 0, g: 0, b: 0, a: 0 } : l(h$1.getStrokeColor(y3)), x2 = h$1.getStrokeWidth(y3);
          if (!b2 && !x2)
            break;
          let w2 = false, z2 = "";
          for (const e2 of o2)
            e2.primitiveName !== M2 && e2.primitiveName !== k2 || (e2.value !== void 0 ? z2 += `-${e2.primitiveName}-${e2.propertyName}-${JSON.stringify(e2.value)}` : e2.valueExpressionInfo && (w2 = true));
          const J2 = JSON.stringify(__spreadProps(__spreadValues({}, t2), { markerGraphics: null })), H2 = c$2(JSON.stringify(N2)).toString(), Y2 = { type: "marker", templateHash: c$2(JSON.stringify(i2) + JSON.stringify(y3) + J2 + z2).toString(), materialHash: w2 ? () => H2 : H2, cim: N2, materialOverrides: null, colorLocked: t2.colorLocked, effects: t2.effects, scaleSymbolsProportionally: t2.scaleSymbolsProportionally, alignment: s2, anchorPoint: { x: S3, y: v2 }, isAbsoluteAnchorPoint: false, size: F(t2.primitiveName, r2, "Size", n2, O2), rotation: F(t2.primitiveName, r2, "Rotation", n2, C2), offsetX: F(t2.primitiveName, r2, "OffsetX", n2, P2), offsetY: F(t2.primitiveName, r2, "OffsetY", n2, L2), scaleX: 1, frameHeight: u2, rotateClockwise: t2.rotateClockwise, referenceSize: f$1, sizeRatio: d3, color: F(M2, r2, "Color", n2, X2, j), outlineColor: F(M2, r2, "Color", n2, I2, j), outlineWidth: F(M2, r2, "Width", n2, x2), markerPlacement: t2.markerPlacement };
          l$1.push(Y2);
          break;
        }
        default:
          R(t2, i2, r2, o2, n2, l$1, s2, f$1, u2);
      }
  }
}
function R(t2, i2, o2, r2, a2, l2, s2, f2, m2) {
  const p = $(t2, i2);
  let u2 = [];
  const y2 = ["Rotation", "OffsetX", "OffsetY"];
  u2 = r2.filter((e2) => e2.primitiveName !== t2.primitiveName || y2.indexOf(e2.propertyName) === -1);
  let h2 = "";
  for (const e2 of r2)
    e2.value !== void 0 && (h2 += `-${e2.primitiveName}-${e2.propertyName}-${JSON.stringify(e2.value)}`);
  const [g2, d2, S2] = h$1.getTextureAnchor(p), v2 = t2.primitiveName, b2 = t2.rotation || 0, N2 = t2.offsetX || 0, k2 = t2.offsetY || 0, O2 = c$2(JSON.stringify(p) + h2).toString(), C2 = { type: "marker", templateHash: O2, materialHash: u2.length === 0 ? O2 : W(O2, o2, u2, a2), cim: p, materialOverrides: u2, colorLocked: t2.colorLocked, effects: t2.effects, scaleSymbolsProportionally: t2.scaleSymbolsProportionally, alignment: s2, anchorPoint: { x: g2, y: d2 }, isAbsoluteAnchorPoint: false, size: t2.size, rotation: F(v2, o2, "Rotation", a2, b2), offsetX: F(v2, o2, "OffsetX", a2, N2), offsetY: F(v2, o2, "OffsetY", a2, k2), color: { r: 0, g: 0, b: 0, a: 0 }, outlineColor: { r: 0, g: 0, b: 0, a: 0 }, outlineWidth: 0, scaleX: 1, frameHeight: m2, rotateClockwise: t2.rotateClockwise, referenceSize: f2, sizeRatio: S2 / u$4(t2.size), markerPlacement: t2.markerPlacement };
  l2.push(C2);
}
function $(e2, t2) {
  return { type: e2.type, enable: true, name: e2.name, colorLocked: e2.colorLocked, primitiveName: e2.primitiveName, anchorPoint: e2.anchorPoint, anchorPointUnits: e2.anchorPointUnits, offsetX: 0, offsetY: 0, rotateClockwise: e2.rotateClockwise, rotation: 0, size: e2.size, billboardMode3D: e2.billboardMode3D, depth3D: e2.depth3D, frame: e2.frame, markerGraphics: [t2], scaleSymbolsProportionally: e2.scaleSymbolsProportionally, respectFrame: e2.respectFrame, clippingPath: e2.clippingPath, effects: e2.effects };
}
function A(e2) {
  if (e2 && e2.indexOf("Level_") === 0) {
    const t2 = parseInt(e2.substr(6), 10);
    if (t2 !== NaN)
      return t2;
  }
  return 0;
}
function j(e2) {
  if (!e2 || e2.length === 0)
    return null;
  const t2 = new o$1(e2).toRgba();
  return { r: t2[0], g: t2[1], b: t2[2], a: t2[3] };
}
function F(e2, t2, i2, r2, n2, a2, l2) {
  const c2 = t2[e2];
  if (c2) {
    const e3 = c2[i2];
    if (typeof e3 == "string" || typeof e3 == "number" || e3 instanceof Array)
      return a2 ? a2.call(null, e3, l2) : e3;
    if (e3 != null && e3 instanceof o)
      return (t3, i3, o2) => {
        let c3 = s$1(e3, t3, { $view: o2 }, r2.geometryType, i3);
        return c3 !== null && a2 && (c3 = a2.call(null, c3, l2)), c3 !== null ? c3 : n2;
      };
  }
  return n2;
}
function W(t2, i2, r2, n2) {
  for (const e2 of r2) {
    if (e2.valueExpressionInfo) {
      const t3 = i2[e2.primitiveName] && i2[e2.primitiveName][e2.propertyName];
      t3 instanceof o && (e2.fn = (e3, i3, o2) => s$1(t3, e3, { $view: o2 }, n2.geometryType, i3));
    }
  }
  return (i3, o2, n3) => {
    for (const e2 of r2)
      e2.fn && (e2.value = e2.fn(i3, o2, n3));
    return c$2(t2 + S$1.buildOverrideKey(r2)).toString();
  };
}
function T(e2, t2) {
  if (!t2 || t2.length === 0)
    return e2;
  const i2 = JSON.parse(JSON.stringify(e2));
  return S$1.applyOverrides(i2, t2), i2;
}
export { T, a, k, r, s$1 as s };
