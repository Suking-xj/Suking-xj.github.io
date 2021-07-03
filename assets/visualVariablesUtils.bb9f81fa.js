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
import { c8 as o$2, a0 as t, a9 as u$1 } from "./vendor.74d5941c.js";
import { c as c$1 } from "./definitions.6737c10c.js";
import { w, A } from "./Utils.3f1577e5.js";
import { o as o$1 } from "./visualVariablesUtils.cb58e4df.js";
function o(r2, n2 = 0, t2 = false) {
  const u2 = r2[n2 + 3];
  return r2[n2 + 0] *= u2, r2[n2 + 1] *= u2, r2[n2 + 2] *= u2, t2 || (r2[n2 + 3] *= 255), r2;
}
function i(n2) {
  if (!n2)
    return 0;
  const { r: t2, g: u2, b: o2, a: c2 } = n2;
  return w(t2 * c2, u2 * c2, o2 * c2, 255 * c2);
}
function f$1(n2) {
  if (!n2)
    return 0;
  const [t2, u2, o2, c2] = n2;
  return w(t2 * (c2 / 255), u2 * (c2 / 255), o2 * (c2 / 255), c2);
}
const n = (n2, l2) => n2 && ((...n3) => l2.warn("DEBUG:", ...n3)) || (() => null), l = false;
function r(e, t2) {
  if (!e || !t2)
    return e;
  switch (t2) {
    case "radius":
    case "distance":
      return 2 * e;
    case "diameter":
    case "width":
      return e;
    case "area":
      return Math.sqrt(e);
  }
  return e;
}
function a(e) {
  return { value: e.value, size: o$2(e.size) };
}
function u(e) {
  return e.map((e2) => a(e2));
}
function c(e) {
  if (typeof e == "string" || typeof e == "number")
    return o$2(e);
  const s = e;
  return { type: "size", expression: s.expression, stops: u(s.stops) };
}
const f = (e) => {
  const t2 = [], o2 = [], i2 = u(e), l2 = i2.length;
  for (let r2 = 0; r2 < 6; r2++) {
    const e2 = i2[Math.min(r2, l2 - 1)];
    t2.push(e2.value), o2.push(e2.size == null ? c$1 : u$1(e2.size));
  }
  return { values: new Float32Array(t2), sizes: new Float32Array(o2) };
};
function m(e) {
  const t2 = e && e.length > 0 ? {} : null, s = t2 ? {} : null;
  if (!t2)
    return { vvFields: t2, vvRanges: s };
  for (const n2 of e)
    if (n2.field && (t2[n2.type] = n2.field), n2.type === "size") {
      s.size || (s.size = {});
      const e2 = n2;
      switch (o$1(e2)) {
        case A.SIZE_MINMAX_VALUE:
          s.size.minMaxValue = { minDataValue: e2.minDataValue, maxDataValue: e2.maxDataValue, minSize: c(e2.minSize), maxSize: c(e2.maxSize) };
          break;
        case A.SIZE_SCALE_STOPS:
          s.size.scaleStops = { stops: u(e2.stops) };
          break;
        case A.SIZE_FIELD_STOPS:
          if (e2.levels) {
            const t3 = {};
            for (const s2 in e2.levels)
              t3[s2] = f(e2.levels[s2]);
            s.size.fieldStops = { type: "level-dependent", levels: t3 };
          } else
            s.size.fieldStops = __spreadValues({ type: "static" }, f(e2.stops));
          break;
        case A.SIZE_UNIT_VALUE:
          s.size.unitValue = { unit: e2.valueUnit, valueRepresentation: e2.valueRepresentation };
      }
    } else if (n2.type === "color")
      s.color = y(n2);
    else if (n2.type === "opacity")
      s.opacity = v(n2);
    else if (n2.type === "rotation") {
      const e2 = n2;
      s.rotation = { type: e2.rotationType };
    }
  return { vvFields: t2, vvRanges: s };
}
function v(e) {
  const t2 = { values: [0, 0, 0, 0, 0, 0, 0, 0], opacities: [0, 0, 0, 0, 0, 0, 0, 0] };
  if (typeof e.field == "string") {
    if (!e.stops)
      return null;
    {
      if (e.stops.length > 8)
        return null;
      const s = e.stops;
      for (let e2 = 0; e2 < 8; ++e2) {
        const n2 = s[Math.min(e2, s.length - 1)];
        t2.values[e2] = n2.value, t2.opacities[e2] = n2.opacity;
      }
    }
  } else {
    if (!(e.stops && e.stops.length >= 0))
      return null;
    {
      const s = e.stops && e.stops.length >= 0 && e.stops[0].opacity;
      for (let e2 = 0; e2 < 8; e2++)
        t2.values[e2] = 1 / 0, t2.opacities[e2] = s;
    }
  }
  return t2;
}
function g(e, t2, s) {
  e[4 * t2 + 0] = s.r / 255, e[4 * t2 + 1] = s.g / 255, e[4 * t2 + 2] = s.b / 255, e[4 * t2 + 3] = s.a;
}
function y(t$1) {
  if (t(t$1))
    return null;
  if (t$1.normalizationField)
    return null;
  const s = { field: null, values: [0, 0, 0, 0, 0, 0, 0, 0], colors: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] };
  if (typeof t$1.field == "string") {
    if (!t$1.stops)
      return null;
    {
      if (t$1.stops.length > 8)
        return null;
      s.field = t$1.field;
      const e = t$1.stops;
      for (let t2 = 0; t2 < 8; ++t2) {
        const n2 = e[Math.min(t2, e.length - 1)];
        s.values[t2] = n2.value, g(s.colors, t2, n2.color);
      }
    }
  } else {
    if (!(t$1.stops && t$1.stops.length >= 0))
      return null;
    {
      const e = t$1.stops && t$1.stops.length >= 0 && t$1.stops[0].color;
      for (let t2 = 0; t2 < 8; t2++)
        s.values[t2] = 1 / 0, g(s.colors, t2, e);
    }
  }
  for (let e = 0; e < 32; e += 4)
    o(s.colors, e, true);
  return s;
}
export { f$1 as f, i, l, m, n, r };
