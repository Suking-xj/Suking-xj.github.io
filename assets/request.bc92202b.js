var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { ds as e, aa as s$1 } from "./vendor.74d5941c.js";
let t;
function s(s2, o = {}) {
  let n = o.responseType;
  n ? n !== "json" && n !== "text" && n !== "blob" && n !== "array-buffer" && (n = "text") : n = "json";
  const a = o && o.signal;
  return delete o.signal, e.invokeStaticMessage("request", { url: s2, options: o }, { signal: a }).then((e2) => {
    const a2 = e2.data;
    let l, i, u, c;
    if (a2 && !(n !== "json" && n !== "text" && n !== "blob" || (l = new Blob([a2]), n !== "json" && n !== "text" || (t || (t = new FileReaderSync()), i = t.readAsText(l), n !== "json")))) {
      try {
        u = JSON.parse(i || null);
      } catch (b) {
        const e3 = __spreadProps(__spreadValues({}, b), { url: s2, requestOptions: o });
        throw new s$1("request:server", b.message, e3);
      }
      if (u.error) {
        const e3 = __spreadProps(__spreadValues({}, u.error), { url: s2, requestOptions: o });
        throw new s$1("request:server", u.error.message, e3);
      }
    }
    switch (n) {
      case "json":
        c = u;
        break;
      case "text":
        c = i;
        break;
      case "blob":
        c = l;
        break;
      default:
        c = a2;
    }
    return { data: c, requestOptions: o, ssl: e2.ssl, url: s2 };
  });
}
export { s as execute };
