var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
import { d9 as l, da as o, db as S, bT as y, ai as t } from "./vendor.74d5941c.js";
function i(t2) {
  return { renderer: { type: "simple", symbol: t2 === "esriGeometryPoint" || t2 === "esriGeometryMultipoint" ? l : t2 === "esriGeometryPolyline" ? o : S } };
}
function s(r, e) {
  if (t("csp-restrictions"))
    return () => __spreadValues({ [e]: null }, r);
  try {
    let t2 = `this.${e} = null;`;
    for (const e2 in r) {
      t2 += `this${e2.indexOf(".") ? `["${e2}"]` : `.${e2}`} = ${JSON.stringify(r[e2])};`;
    }
    const n = new Function(t2);
    return () => new n();
  } catch (n) {
    return () => __spreadValues({ [e]: null }, r);
  }
}
function u(t2 = {}) {
  return [{ name: "New Feature", description: "", prototype: { attributes: y(t2) } }];
}
export { i, s, u };
