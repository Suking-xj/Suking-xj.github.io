var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a, prop, b2[prop]);
    }
  return a;
};
var __spreadProps = (a, b2) => __defProps(a, __getOwnPropDescs(b2));
import { a9 as u$1, gF as b$1, gG as j$1, gH as t, aa as s, gI as h$1, gJ as h$2, cR as o, gK as w$1, e8 as e } from "./vendor.74d5941c.js";
const m = "picture-fill", u = "picture-marker", p = "simple-fill", h = "simple-line", d = "simple-marker", f = "text", v = "Aa", y = 22, g = 120, w = 80, M = 40, b = document.createElement("canvas");
function x(e2, t2) {
  const a = b.getContext("2d"), l = [];
  return t2 && (t2.weight && l.push(t2.weight), t2.size && l.push(t2.size + "px"), t2.family && l.push(t2.family)), a.font = l.join(" "), a.measureText(e2).width;
}
const k = 7.2 / 2.54, L = 72 / 2.54;
function z(e$1) {
  if (e$1.length === 0)
    return 0;
  if (e$1.length > 2) {
    const t2 = e(1), a = parseFloat(e$1);
    switch (e$1.slice(-2)) {
      case "px":
        return a;
      case "pt":
        return a * t2;
      case "in":
        return 72 * a * t2;
      case "pc":
        return 12 * a * t2;
      case "mm":
        return a * k * t2;
      case "cm":
        return a * L * t2;
    }
  }
  return parseFloat(e$1);
}
function j(l, b2) {
  var k2, L2;
  const j2 = (b2 == null ? void 0 : b2.size) != null ? u$1(b2.size) : null, C = (b2 == null ? void 0 : b2.maxSize) != null ? u$1(b2.maxSize) : null, F = (b2 == null ? void 0 : b2.opacity) != null ? b2.opacity : null, S = (b2 == null ? void 0 : b2.rotation) != null ? b2.rotation : "angle" in l ? l.angle : null, E = b$1(l);
  let P = j$1(l);
  if (E && !P) {
    const e2 = "type" in E ? null : new o(E);
    (e2 ? e2.toHex() : null) === "#ffffff" && (P = { color: "#bdc3c7", width: 0.75 });
  }
  const U = { shape: null, fill: null, stroke: P, offset: [0, 0] };
  (k2 = P) != null && k2.width && (P.width = Math.min(P.width, w));
  const q = ((L2 = P) == null ? void 0 : L2.width) || 0;
  let Z = j2 != null && ((b2 == null ? void 0 : b2.scale) == null || (b2 == null ? void 0 : b2.scale)), H = 0, T = 0, A = false;
  switch (l.type) {
    case d: {
      const e2 = l.style, t2 = Math.min(j2 != null ? j2 : u$1(l.size), C || g);
      switch (H = t2, T = t2, e2) {
        case "circle":
          U.shape = { type: "circle", cx: 0, cy: 0, r: 0.5 * t2 }, Z || (H += q, T += q);
          break;
        case "cross":
          U.shape = { type: "path", path: [{ command: "M", values: [0, 0.5 * T] }, { command: "L", values: [H, 0.5 * T] }, { command: "M", values: [0.5 * H, 0] }, { command: "L", values: [0.5 * H, T] }] };
          break;
        case "diamond":
          U.shape = { type: "path", path: [{ command: "M", values: [0, 0.5 * T] }, { command: "L", values: [0.5 * H, 0] }, { command: "L", values: [H, 0.5 * T] }, { command: "L", values: [0.5 * H, T] }, { command: "Z", values: [] }] }, Z || (H += q, T += q);
          break;
        case "square":
          U.shape = { type: "path", path: [{ command: "M", values: [0, 0] }, { command: "L", values: [H, 0] }, { command: "L", values: [H, T] }, { command: "L", values: [0, T] }, { command: "Z", values: [] }] }, Z || (H += q, T += q), S && (A = true);
          break;
        case "triangle":
          U.shape = { type: "path", path: [{ command: "M", values: [0.5 * H, 0] }, { command: "L", values: [H, T] }, { command: "L", values: [0, T] }, { command: "Z", values: [] }] }, Z || (H += q, T += q), S && (A = true);
          break;
        case "x":
          U.shape = { type: "path", path: [{ command: "M", values: [0, 0] }, { command: "L", values: [H, T] }, { command: "M", values: [H, 0] }, { command: "L", values: [0, T] }] }, S && (A = true);
          break;
        case "path":
          U.shape = { type: "path", path: l.path || "" }, Z || (H += q, T += q), S && (A = true), Z = true;
      }
      break;
    }
    case h: {
      const e2 = Math.min(j2 != null ? j2 : q, C || w), t2 = e2 > y ? 2 * e2 : M;
      P.width = e2, H = t2, T = e2, U.shape = { type: "path", path: [{ command: "M", values: [0, T] }, { command: "L", values: [H, T] }] };
      break;
    }
    case m:
    case p:
      H = Math.min(j2 != null ? j2 : y, C || g) + q, T = H, Z = true, U.shape = typeof (b2 == null ? void 0 : b2.symbolConfig) == "object" && b2 != null && b2.symbolConfig.isSquareFill ? t.squareFill[0] : t.fill[0];
      break;
    case u: {
      let e2 = u$1(l.width), t2 = u$1(l.height);
      const n = Math.max(e2, t2), o2 = e2 / t2;
      e2 = o2 <= 1 ? Math.ceil(n * o2) : n, t2 = o2 <= 1 ? n : Math.ceil(n / o2), H = Math.min(j2 != null ? j2 : e2, C || g), T = Math.min(j2 != null ? j2 : t2, C || g), U.shape = { type: "image", x: -Math.round(H / 2), y: -Math.round(T / 2), width: H, height: T, src: l.url || "" }, S && (A = true);
      break;
    }
    case f: {
      const e2 = l, t2 = e2.text || v, n = e2.font, o2 = Math.min(j2 != null ? j2 : u$1(n.size), C || g), s2 = x(t2, { weight: n.weight, size: o2, family: n.family }), i = /[\uE600-\uE6FF]/.test(t2);
      H = i ? o2 : s2, T = o2;
      let r = 0.25 * z((n ? o2 : 0).toString());
      i && (r += 5), U.shape = { type: "text", text: t2, x: 0, y: r, align: "middle", decoration: n && n.decoration, rotated: e2.rotated, kerning: e2.kerning }, U.font = n && { size: o2, style: n.style, decoration: n.decoration, weight: n.weight, family: n.family };
      break;
    }
  }
  if (!U.shape)
    return Promise.reject(new s("symbolPreview: renderPreviewHTML2D", "symbol not supported."));
  const D = E, R = l.color;
  let B = null;
  return D && D.type === "pattern" && R && l.type !== m ? B = w$1(D.src, R.toCss(true)).then((e2) => (D.src = e2, U.fill = D, U)) : (U.fill = E, B = Promise.resolve(U)), B.then((e2) => {
    const t2 = [[e2]];
    if (typeof (b2 == null ? void 0 : b2.symbolConfig) == "object" && b2 != null && b2.symbolConfig.applyColorModulation) {
      const a = 0.6 * H;
      t2.unshift([__spreadProps(__spreadValues({}, e2), { offset: [-a, 0], fill: h$1(E, -0.3) })]), t2.push([__spreadProps(__spreadValues({}, e2), { offset: [a, 0], fill: h$1(E, 0.3) })]), H += 2 * a;
    }
    return h$2(t2, [H, T], { node: b2 && b2.node, scale: Z, opacity: F, rotation: S, useRotationSize: A });
  });
}
export { j as previewSymbol2D };
