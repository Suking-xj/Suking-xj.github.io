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
import { dr as o$1, fl as c } from "./vendor.74d5941c.js";
const t = { ar: [".", ","], bs: [",", "."], ca: [",", "."], cs: [",", "\xA0"], da: [",", "."], de: [",", "."], "de-ch": [".", "\u2019"], el: [",", "."], en: [".", ","], "en-au": [".", ","], es: [",", "."], "es-mx": [".", ","], et: [",", "\xA0"], fi: [",", "\xA0"], fr: [",", "\u202F"], "fr-ch": [",", "\u202F"], he: [".", ","], hi: [".", ",", "#,##,##0.###"], hr: [",", "."], hu: [",", "\xA0"], id: [",", "."], it: [",", "."], "it-ch": [".", "\u2019"], ja: [".", ","], ko: [".", ","], lt: [",", "\xA0"], lv: [",", "\xA0"], mk: [",", "."], nb: [",", "\xA0"], nl: [",", "."], pl: [",", "\xA0"], pt: [",", "."], "pt-pt": [",", "\xA0"], ro: [",", "."], ru: [",", "\xA0"], sk: [",", "\xA0"], sl: [",", "."], sr: [",", "."], sv: [",", "\xA0"], th: [".", ","], tr: [",", "."], uk: [",", "\xA0"], vi: [",", "."], zh: [".", ","] };
function r(e) {
  e || (e = c());
  let r2 = e in t;
  if (!r2) {
    const n = e.split("-");
    n.length > 1 && n[0] in t && (e = n[0], r2 = true), r2 || (e = "en");
  }
  const [o2, i2, s2 = "#,##0.###"] = t[e];
  return { decimal: o2, group: i2, pattern: s2 };
}
function o(e, n) {
  const t2 = r((n = __spreadValues({}, n)).locale);
  n.customs = t2;
  const o2 = n.pattern || t2.pattern;
  return isNaN(e) || Math.abs(e) === 1 / 0 ? null : s(e, o2, n);
}
const i = /[#0,]*[#0](?:\.0*#*)?/;
function s(e, n, t2) {
  const r2 = (t2 = t2 || {}).customs.group, o2 = t2.customs.decimal, s2 = n.split(";"), c2 = s2[0];
  if ((n = s2[e < 0 ? 1 : 0] || "-" + c2).indexOf("%") !== -1)
    e *= 100;
  else if (n.indexOf("\u2030") !== -1)
    e *= 1e3;
  else {
    if (n.indexOf("\xA4") !== -1)
      throw new Error("currency notation not supported");
    if (n.indexOf("E") !== -1)
      throw new Error("exponential notation not supported");
  }
  const a2 = i, p2 = c2.match(a2);
  if (!p2)
    throw new Error("unable to find a number expression in pattern: " + n);
  return t2.fractional === false && (t2.places = 0), n.replace(a2, l(e, p2[0], { decimal: o2, group: r2, places: t2.places, round: t2.round }));
}
function l(e, n, t2) {
  (t2 = t2 || {}).places === true && (t2.places = 0), t2.places === 1 / 0 && (t2.places = 6);
  const r2 = n.split("."), o2 = typeof t2.places == "string" && t2.places.indexOf(",");
  let i2 = t2.places;
  o2 ? i2 = t2.places.substring(o2 + 1) : i2 >= 0 || (i2 = (r2[1] || []).length), t2.round < 0 || (e = Number(e.toFixed(Number(i2))));
  const s2 = String(Math.abs(e)).split("."), l2 = s2[1] || "";
  if (r2[1] || t2.places) {
    o2 && (t2.places = t2.places.substring(0, o2));
    const e2 = t2.places !== void 0 ? t2.places : r2[1] && r2[1].lastIndexOf("0") + 1;
    e2 > l2.length && (s2[1] = l2.padEnd(Number(e2), "0")), i2 < l2.length && (s2[1] = l2.substr(0, Number(i2)));
  } else
    s2[1] && s2.pop();
  const c2 = r2[0].replace(",", "");
  let a2 = c2.indexOf("0");
  a2 !== -1 && (a2 = c2.length - a2, a2 > s2[0].length && (s2[0] = s2[0].padStart(a2, "0")), c2.indexOf("#") === -1 && (s2[0] = s2[0].substr(s2[0].length - a2)));
  let p2, u2, f2 = r2[0].lastIndexOf(",");
  if (f2 !== -1) {
    p2 = r2[0].length - f2 - 1;
    const e2 = r2[0].substr(0, f2);
    f2 = e2.lastIndexOf(","), f2 !== -1 && (u2 = e2.length - f2 - 1);
  }
  const d2 = [];
  for (let g2 = s2[0]; g2; ) {
    const e2 = g2.length - p2;
    d2.push(e2 > 0 ? g2.substr(e2) : g2), g2 = e2 > 0 ? g2.slice(0, e2) : "", u2 && (p2 = u2, u2 = void 0);
  }
  return s2[0] = d2.reverse().join(t2.group || ","), s2.join(t2.decimal || ".");
}
function a(n) {
  const t2 = r((n = n || {}).locale), o2 = n.pattern || t2.pattern, s2 = t2.group, l2 = t2.decimal;
  let c2 = 1;
  if (o2.indexOf("%") !== -1)
    c2 /= 100;
  else if (o2.indexOf("\u2030") !== -1)
    c2 /= 1e3;
  else if (o2.indexOf("\xA4") !== -1)
    throw new Error("currency notation not supported");
  const a2 = o2.split(";");
  a2.length === 1 && a2.push("-" + a2[0]);
  return { regexp: d(a2, function(t3) {
    return (t3 = "(?:" + o$1(t3, ".") + ")").replace(i, function(e) {
      const t4 = { signed: false, separator: n.strict ? s2 : [s2, ""], fractional: n.fractional, decimal: l2, exponent: false }, r2 = e.split(".");
      let o3 = n.places;
      r2.length === 1 && c2 !== 1 && (r2[1] = "###"), r2.length === 1 || o3 === 0 ? t4.fractional = false : (o3 === void 0 && (o3 = n.pattern ? r2[1].lastIndexOf("0") + 1 : 1 / 0), o3 && n.fractional == null && (t4.fractional = true), !n.places && o3 < r2[1].length && (o3 += "," + r2[1].length), t4.places = o3);
      const i2 = r2[0].split(",");
      return i2.length > 1 && (t4.groupSize = i2.pop().length, i2.length > 1 && (t4.groupSize2 = i2.pop().length)), "(" + u(t4) + ")";
    });
  }, true).replace(/[\xa0 ]/g, "[\\s\\xa0]"), group: s2, decimal: l2, factor: c2 };
}
function p(e, n) {
  const t2 = a(n), r2 = new RegExp("^" + t2.regexp + "$").exec(e);
  if (!r2)
    return NaN;
  let o2 = r2[1];
  if (!r2[1]) {
    if (!r2[2])
      return NaN;
    o2 = r2[2], t2.factor *= -1;
  }
  return o2 = o2.replace(new RegExp("[" + t2.group + "\\s\\xa0]", "g"), "").replace(t2.decimal, "."), Number(o2) * t2.factor;
}
function u(e) {
  "places" in (e = e || {}) || (e.places = 1 / 0), typeof e.decimal != "string" && (e.decimal = "."), "fractional" in e && !/^0/.test(String(e.places)) || (e.fractional = [true, false]), "exponent" in e || (e.exponent = [true, false]), "eSigned" in e || (e.eSigned = [true, false]);
  const n = f(e), t2 = d(e.fractional, function(n2) {
    let t3 = "";
    return n2 && e.places !== 0 && (t3 = "\\" + e.decimal, e.places === 1 / 0 ? t3 = "(?:" + t3 + "\\d+)?" : t3 += "\\d{" + e.places + "}"), t3;
  }, true);
  let r2 = n + t2;
  return t2 && (r2 = "(?:(?:" + r2 + ")|(?:" + t2 + "))"), r2 + d(e.exponent, function(n2) {
    return n2 ? "([eE]" + f({ signed: e.eSigned }) + ")" : "";
  });
}
function f(n) {
  "signed" in (n = n || {}) || (n.signed = [true, false]), "separator" in n ? "groupSize" in n || (n.groupSize = 3) : n.separator = "";
  return d(n.signed, function(e) {
    return e ? "[-+]" : "";
  }, true) + d(n.separator, function(t2) {
    if (!t2)
      return "(?:\\d+)";
    (t2 = o$1(t2)) === " " ? t2 = "\\s" : t2 === "\xA0" && (t2 = "\\s\\xa0");
    const r2 = n.groupSize, o2 = n.groupSize2;
    if (o2) {
      const e = "(?:0|[1-9]\\d{0," + (o2 - 1) + "}(?:[" + t2 + "]\\d{" + o2 + "})*[" + t2 + "]\\d{" + r2 + "})";
      return r2 - o2 > 0 ? "(?:" + e + "|(?:0|[1-9]\\d{0," + (r2 - 1) + "}))" : e;
    }
    return "(?:0|[1-9]\\d{0," + (r2 - 1) + "}(?:[" + t2 + "]\\d{" + r2 + "})*)";
  }, true);
}
const d = function(e, n, t2) {
  if (!(e instanceof Array))
    return n(e);
  const r2 = [];
  for (let o2 = 0; o2 < e.length; o2++)
    r2.push(n(e[o2]));
  return g(r2.join("|"), t2);
}, g = function(e, n) {
  return "(" + (n ? "?:" : "") + e + ")";
};
export { a, o, p };
