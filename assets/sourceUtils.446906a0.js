var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import { f_ as X, f$ as B, g0 as ee, g1 as ne, g2 as fe, bs as s } from "./vendor.74d5941c.js";
class o {
  constructor() {
    this.code = null, this.description = null;
  }
}
class l {
  constructor(t) {
    this.error = new o(), this.globalId = null, this.objectId = null, this.success = false, this.uniqueId = null, this.error.description = t;
  }
}
function u(t) {
  return new l(t);
}
class a {
  constructor(t) {
    this.globalId = null, this.success = true, this.objectId = this.uniqueId = t;
  }
}
function c(t) {
  return new a(t);
}
const f = new Set();
function d(t, e, r, s2, o2 = false, l2) {
  f.clear();
  for (const a2 in s2) {
    const e2 = t.get(a2);
    if (!e2)
      continue;
    const c2 = s2[a2], d2 = m(e2, c2);
    if (d2 !== c2 && l2 && l2.push({ name: "invalid-value-type", message: "attribute value was converted to match the field type", details: { field: e2, originalValue: c2, sanitizedValue: d2 } }), f.add(e2.name), e2 && (o2 || e2.editable)) {
      const t2 = ne(e2, d2);
      if (t2)
        return u(fe(t2, e2, d2));
      r[e2.name] = d2;
    }
  }
  for (const n of e)
    if (!f.has(n.name))
      return u(`missing required field "${n.name}"`);
  return null;
}
function m(t, n) {
  let i = n;
  return typeof n == "string" && X(t) ? i = parseFloat(n) : n != null && B(t) && typeof n != "string" && (i = String(n)), ee(i);
}
let p;
function h(e, n) {
  if (!e || !s(n))
    return e;
  if ("rings" in e || "paths" in e) {
    if (!p)
      throw new TypeError("geometry engine not loaded");
    return p.simplify(n, e);
  }
  return e;
}
function g() {
  return __async(this, null, function* () {
    return p || (p = yield import("./geometryEngineJSON.100cb9da.js"), p);
  });
}
function y(e, n) {
  return __async(this, null, function* () {
    !s(e) || n !== "esriGeometryPolygon" && n !== "esriGeometryPolyline" || (yield g());
  });
}
export { c, d, h, u, y };
