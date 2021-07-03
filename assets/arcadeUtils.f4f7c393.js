var __defProp = Object.defineProperty;
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
import { _ as j$6, a0 as t$4, em as c$7, cr as M$6, bG as x$7, dp as m$5, dn as m$6, fe as f$7, ff as l$8, e6 as y$7, fg as x$8, fh as L$7, a5 as r$9, b$ as e$a, cW as p$5, cy as ee$4, fi as z$5, f0 as t$5, bF as k$5, fj as U$3, fk as s$a, fl as c$8, ai as t$6, bT as y$8, c6 as n$4 } from "./vendor.74d5941c.js";
import { p as p$4, o as o$6 } from "./number.c0719e5d.js";
import { d as d$6 } from "./FeatureSetReader.a91e3e2d.js";
class t$3 {
  constructor(t2 = []) {
    this._elements = t2;
  }
  length() {
    return this._elements.length;
  }
  get(t2) {
    return this._elements[t2];
  }
  toArray() {
    const t2 = [];
    for (let e2 = 0; e2 < this.length(); e2++)
      t2.push(this.get(e2));
    return t2;
  }
}
class t$2 {
  constructor(t2, i2) {
    this.definition = null, this.context = null, this.definition = t2, this.context = i2;
  }
}
class i$7 extends t$3 {
  constructor(t2, s2, i2, e2, h2, a2) {
    super(t2), this._lazyPt = [], this._hasZ = false, this._hasM = false, this._spRef = s2, this._hasZ = i2, this._hasM = e2, this._cacheId = h2, this._partId = a2;
  }
  get(s2) {
    if (this._lazyPt[s2] === void 0) {
      const i2 = this._elements[s2];
      if (i2 === void 0)
        return;
      const e2 = this._hasZ, h2 = this._hasM;
      let a2 = null;
      a2 = e2 && !h2 ? new j$6(i2[0], i2[1], i2[2], void 0, this._spRef) : h2 && !e2 ? new j$6(i2[0], i2[1], void 0, i2[2], this._spRef) : e2 && h2 ? new j$6(i2[0], i2[1], i2[2], i2[3], this._spRef) : new j$6(i2[0], i2[1], this._spRef), a2.cache._arcadeCacheId = this._cacheId.toString() + "-" + this._partId.toString() + "-" + s2.toString(), this._lazyPt[s2] = a2;
    }
    return this._lazyPt[s2];
  }
  equalityTest(t2) {
    return t2 === this || t2 !== null && (t2 instanceof i$7 != false && t2.getUniqueHash() === this.getUniqueHash());
  }
  getUniqueHash() {
    return this._cacheId.toString() + "-" + this._partId.toString();
  }
}
class h$9 extends t$3 {
  constructor(t2, s2, h2, i2, e2) {
    super(t2), this._lazyPath = [], this._hasZ = false, this._hasM = false, this._hasZ = h2, this._hasM = i2, this._spRef = s2, this._cacheId = e2;
  }
  get(t2) {
    if (this._lazyPath[t2] === void 0) {
      const h2 = this._elements[t2];
      if (h2 === void 0)
        return;
      this._lazyPath[t2] = new i$7(h2, this._spRef, this._hasZ, this._hasM, this._cacheId, t2);
    }
    return this._lazyPath[t2];
  }
  equalityTest(t2) {
    return t2 === this || t2 !== null && (t2 instanceof h$9 != false && t2.getUniqueHash() === this.getUniqueHash());
  }
  getUniqueHash() {
    return this._cacheId.toString();
  }
}
class h$8 {
  constructor(e2) {
    this.value = e2;
  }
}
class d$5 {
  constructor(e2) {
    this.value = e2;
  }
}
class y$6 {
  constructor(e2) {
    this.fn = e2;
  }
}
class x$6 {
  constructor(e2) {
    this.fn = e2;
  }
}
const S$4 = y$6, T$4 = d$5, N$6 = h$8, R$3 = x$6, b$8 = { type: "VOID" }, _$2 = { type: "BREAK" }, j$5 = { type: "CONTINUE" };
function M$5(e2, t2, n2) {
  return t2 === "" || t2 == null || t2 === n2 || t2 === n2 ? e2 : e2 = e2.split(t2).join(n2);
}
function v$4(e2) {
  return e2 instanceof y$6 || e2 instanceof t$2 || e2 instanceof x$6;
}
function C$5(e2) {
  return !!F$5(e2) || (!!w$3(e2) || (!!P$5(e2) || (!!I$5(e2) || (e2 === null || (e2 === b$8 || typeof e2 == "number")))));
}
function O$5(e2, t2) {
  return e2 === void 0 ? t2 : e2;
}
function F$5(e2) {
  return typeof e2 == "string" || e2 instanceof String;
}
function I$5(e2) {
  return typeof e2 == "boolean";
}
function w$3(e2) {
  return typeof e2 == "number";
}
function A$5(e2) {
  return typeof e2 == "number" && isFinite(e2) && Math.floor(e2) === e2;
}
function Z$2(e2) {
  return e2 instanceof Array;
}
function k$4(e2) {
  return (e2 && e2.declaredRootClass && e2.declaredRootClass === "esri.arcade.featureset.support.FeatureSet") === true;
}
function D$7(e2) {
  return (e2 && e2.declaredRootClass && e2.declaredRootClass === "esri.arcade.featureSetCollection") === true;
}
function E$6(e2) {
  return e2 instanceof t$3;
}
function P$5(e2) {
  return e2 instanceof Date;
}
function J$3(e2, t2, n2) {
  if (e2.length < t2 || e2.length > n2)
    throw new Error("Function called with wrong number of Parameters");
}
function z$4() {
  let e2 = new Date().getTime();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t2) {
    const n2 = (e2 + 16 * Math.random()) % 16 | 0;
    return e2 = Math.floor(e2 / 16), (t2 === "x" ? n2 : 3 & n2 | 8).toString(16);
  });
}
function V$3(e2, t2) {
  return isNaN(e2) === false ? t2 == null || t2 === "" ? e2.toString() : (t2 = M$5(t2, "\u2030", ""), t2 = M$5(t2, "\xA4", ""), o$6(e2, { pattern: t2 })) : e2.toString();
}
function G$4(e2, t2) {
  const n2 = de$2.Moment(e2);
  return t2 == null || t2 === "" ? n2.format() : n2.format(L$6(t2));
}
function L$6(e2) {
  return e2.replace(/(LTS)|L|l/g, function(e3) {
    return "[" + e3 + "]";
  });
}
function U$2(e2, t2, n2) {
  switch (n2) {
    case ">":
      return e2 > t2;
    case "<":
      return e2 < t2;
    case ">=":
      return e2 >= t2;
    case "<=":
      return e2 <= t2;
  }
  return false;
}
function q$4(e2, t2, n2) {
  if (e2 === null) {
    if (t2 === null || t2 === b$8)
      return U$2(null, null, n2);
    if (w$3(t2))
      return U$2(0, t2, n2);
    if (F$5(t2))
      return U$2(0, X$3(t2), n2);
    if (I$5(t2))
      return U$2(0, X$3(t2), n2);
    if (P$5(t2))
      return U$2(0, t2.getTime(), n2);
  }
  if (e2 === b$8) {
    if (t2 === null || t2 === b$8)
      return U$2(null, null, n2);
    if (w$3(t2))
      return U$2(0, t2, n2);
    if (F$5(t2))
      return U$2(0, X$3(t2), n2);
    if (I$5(t2))
      return U$2(0, X$3(t2), n2);
    if (P$5(t2))
      return U$2(0, t2.getTime(), n2);
  } else if (w$3(e2)) {
    if (w$3(t2))
      return U$2(e2, t2, n2);
    if (I$5(t2))
      return U$2(e2, X$3(t2), n2);
    if (t2 === null || t2 === b$8)
      return U$2(e2, 0, n2);
    if (F$5(t2))
      return U$2(e2, X$3(t2), n2);
    if (P$5(t2))
      return U$2(e2, t2.getTime(), n2);
  } else if (F$5(e2)) {
    if (F$5(t2))
      return U$2(K$2(e2), K$2(t2), n2);
    if (P$5(t2))
      return U$2(X$3(e2), t2.getTime(), n2);
    if (w$3(t2))
      return U$2(X$3(e2), t2, n2);
    if (t2 === null || t2 === b$8)
      return U$2(X$3(e2), 0, n2);
    if (I$5(t2))
      return U$2(X$3(e2), X$3(t2), n2);
  } else if (P$5(e2)) {
    if (P$5(t2))
      return U$2(e2, t2, n2);
    if (t2 === null || t2 === b$8)
      return U$2(e2.getTime(), 0, n2);
    if (w$3(t2))
      return U$2(e2.getTime(), t2, n2);
    if (I$5(t2))
      return U$2(e2.getTime(), X$3(t2), n2);
    if (F$5(t2))
      return U$2(e2.getTime(), X$3(t2), n2);
  } else if (I$5(e2)) {
    if (I$5(t2))
      return U$2(e2, t2, n2);
    if (w$3(t2))
      return U$2(X$3(e2), X$3(t2), n2);
    if (P$5(t2))
      return U$2(X$3(e2), t2.getTime(), n2);
    if (t2 === null || t2 === b$8)
      return U$2(X$3(e2), 0, n2);
    if (F$5(t2))
      return U$2(X$3(e2), X$3(t2), n2);
  }
  return !!B$3(e2, t2) && (n2 === "<=" || n2 === ">=");
}
function B$3(e2, t2) {
  if (e2 === t2)
    return true;
  if (e2 === null && t2 === b$8 || t2 === null && e2 === b$8)
    return true;
  if (P$5(e2) && P$5(t2))
    return e2.getTime() === t2.getTime();
  if (e2 instanceof h$9)
    return e2.equalityTest(t2);
  if (e2 instanceof i$7)
    return e2.equalityTest(t2);
  if (e2 instanceof j$6 && t2 instanceof j$6) {
    const n2 = e2.cache._arcadeCacheId, r2 = t2.cache._arcadeCacheId;
    if (n2 != null)
      return n2 === r2;
  }
  if (e2 !== void 0 && t2 !== void 0 && e2 !== null && t2 !== null && typeof e2 == "object" && typeof t2 == "object") {
    if (e2._arcadeCacheId === t2._arcadeCacheId && e2._arcadeCacheId !== void 0 && e2._arcadeCacheId !== null)
      return true;
    if (e2._underlyingGraphic === t2._underlyingGraphic && e2._underlyingGraphic !== void 0 && e2._underlyingGraphic !== null)
      return true;
  }
  return false;
}
function K$2(e2, t2) {
  if (F$5(e2))
    return e2;
  if (e2 === null)
    return "";
  if (w$3(e2))
    return V$3(e2, t2);
  if (I$5(e2))
    return e2.toString();
  if (P$5(e2))
    return G$4(e2, t2);
  if (e2 instanceof c$7)
    return JSON.stringify(e2.toJSON());
  if (Z$2(e2)) {
    const t3 = [];
    for (let n2 = 0; n2 < e2.length; n2++)
      t3[n2] = Q$3(e2[n2]);
    return "[" + t3.join(",") + "]";
  }
  if (e2 instanceof t$3) {
    const t3 = [];
    for (let n2 = 0; n2 < e2.length(); n2++)
      t3[n2] = Q$3(e2.get(n2));
    return "[" + t3.join(",") + "]";
  }
  return e2 !== null && typeof e2 == "object" && e2.castToText !== void 0 ? e2.castToText() : v$4(e2) ? "object, Function" : "";
}
function W$2(e2) {
  const t2 = [];
  if (Z$2(e2) === false)
    return null;
  if (e2 instanceof t$3) {
    for (let n2 = 0; n2 < e2.length(); n2++)
      t2[n2] = X$3(e2.get(n2));
    return t2;
  }
  for (let n2 = 0; n2 < e2.length; n2++)
    t2[n2] = X$3(e2[n2]);
  return t2;
}
function H$2(e2, t2) {
  if (F$5(e2))
    return e2;
  if (e2 === null)
    return "";
  if (w$3(e2))
    return V$3(e2, t2);
  if (I$5(e2))
    return e2.toString();
  if (P$5(e2))
    return G$4(e2, t2);
  if (e2 instanceof c$7)
    return e2 instanceof M$6 ? '{"xmin":' + e2.xmin.toString() + ',"ymin":' + e2.ymin.toString() + "," + (e2.hasZ ? '"zmin":' + e2.zmin.toString() + "," : "") + (e2.hasM ? '"mmin":' + e2.mmin.toString() + "," : "") + '"xmax":' + e2.xmax.toString() + ',"ymax":' + e2.ymax.toString() + "," + (e2.hasZ ? '"zmax":' + e2.zmax.toString() + "," : "") + (e2.hasM ? '"mmax":' + e2.mmax.toString() + "," : "") + '"spatialReference":' + ue$2(e2.spatialReference) + "}" : ue$2(e2.toJSON(), (e3, t3) => e3.key === t3.key ? 0 : e3.key === "spatialReference" ? 1 : t3.key === "spatialReference" || e3.key < t3.key ? -1 : e3.key > t3.key ? 1 : 0);
  if (Z$2(e2)) {
    const t3 = [];
    for (let n2 = 0; n2 < e2.length; n2++)
      t3[n2] = Q$3(e2[n2]);
    return "[" + t3.join(",") + "]";
  }
  if (e2 instanceof t$3) {
    const t3 = [];
    for (let n2 = 0; n2 < e2.length(); n2++)
      t3[n2] = Q$3(e2.get(n2));
    return "[" + t3.join(",") + "]";
  }
  return e2 !== null && typeof e2 == "object" && e2.castToText !== void 0 ? e2.castToText() : v$4(e2) ? "object, Function" : "";
}
function Q$3(e2) {
  if (e2 === null)
    return "null";
  if (I$5(e2) || w$3(e2) || F$5(e2))
    return JSON.stringify(e2);
  if (e2 instanceof c$7)
    return H$2(e2);
  if (e2 instanceof t$3)
    return H$2(e2);
  if (e2 instanceof Array)
    return H$2(e2);
  if (e2 instanceof Date)
    return JSON.stringify(G$4(e2, ""));
  if (e2 !== null && typeof e2 == "object") {
    if (e2.castToText !== void 0)
      return e2.castToText();
  } else if (e2 === b$8)
    return "null";
  return "null";
}
function X$3(e2, t2) {
  return w$3(e2) ? e2 : e2 === null || e2 === "" ? 0 : P$5(e2) ? NaN : I$5(e2) ? e2 ? 1 : 0 : Z$2(e2) || e2 === "" || e2 === void 0 ? NaN : t2 !== void 0 && F$5(e2) ? (t2 = M$5(t2, "\u2030", ""), t2 = M$5(t2, "\xA4", ""), p$4(e2, { pattern: t2 })) : e2 === b$8 ? 0 : Number(e2);
}
function Y$2(e2, t2) {
  if (P$5(e2))
    return e2;
  if (F$5(e2)) {
    const n2 = de$2.Moment(e2, [t2 == null || t2 === "" ? de$2.Moment.ISO_8601 : t2]);
    if (n2.isValid())
      return n2.toDate();
  }
  return null;
}
function $$4(e2, t2) {
  if (P$5(e2))
    return de$2.Moment(e2);
  if (F$5(e2)) {
    const n2 = de$2.Moment(e2, [t2 == null || t2 === "" ? de$2.Moment.ISO_8601 : t2]);
    if (n2.isValid())
      return n2;
  }
  return null;
}
function ee$3(e2) {
  return I$5(e2) ? e2 : F$5(e2) ? (e2 = e2.toLowerCase()) === "true" : !!w$3(e2) && (e2 !== 0 && !isNaN(e2));
}
function te$2(t2, n2) {
  return t$4(t2) ? null : (t2.spatialReference !== null && t2.spatialReference !== void 0 || (t2.spatialReference = n2), t2);
}
function ne$2(e2) {
  if (e2 === null)
    return null;
  if (e2 instanceof j$6)
    return e2.x === "NaN" || e2.x === null || isNaN(e2.x) ? null : e2;
  if (e2 instanceof x$7) {
    if (e2.rings.length === 0)
      return null;
    for (const t2 of e2.rings)
      if (t2.length > 0)
        return e2;
    return null;
  }
  if (e2 instanceof m$5) {
    if (e2.paths.length === 0)
      return null;
    for (const t2 of e2.paths)
      if (t2.length > 0)
        return e2;
    return null;
  }
  return e2 instanceof m$6 ? e2.points.length === 0 ? null : e2 : e2 instanceof M$6 ? e2.xmin === "NaN" || e2.xmin === null || isNaN(e2.xmin) ? null : e2 : null;
}
function re$3(e2, t2) {
  if (!e2)
    return t2;
  if (!e2.domain)
    return t2;
  let n2 = null;
  if (e2.field.type === "string" || e2.field.type === "esriFieldTypeString")
    t2 = K$2(t2);
  else {
    if (t2 == null)
      return null;
    if (t2 === "")
      return t2;
    t2 = X$3(t2);
  }
  for (let r2 = 0; r2 < e2.domain.codedValues.length; r2++) {
    const i2 = e2.domain.codedValues[r2];
    i2.code === t2 && (n2 = i2);
  }
  return n2 === null ? t2 : n2.name;
}
function ie$3(e2, t2) {
  if (!e2)
    return t2;
  if (!e2.domain)
    return t2;
  let n2 = null;
  t2 = K$2(t2);
  for (let r2 = 0; r2 < e2.domain.codedValues.length; r2++) {
    const i2 = e2.domain.codedValues[r2];
    i2.name === t2 && (n2 = i2);
  }
  return n2 === null ? t2 : n2.code;
}
function oe$2(e2, t2, n2 = null, r2) {
  if (!t2)
    return null;
  if (!t2.fields)
    return null;
  let i2, o2, a2 = null;
  for (let u2 = 0; u2 < t2.fields.length; u2++) {
    const n3 = t2.fields[u2];
    n3.name.toLowerCase() === e2.toString().toLowerCase() && (a2 = n3);
  }
  if (a2 === null)
    throw new Error("Field not found");
  return r2 || (r2 = n2 && t2.typeIdField && n2._field(t2.typeIdField)), r2 != null && t2.types.some(function(e3) {
    return e3.id === r2 && (i2 = e3.domains && e3.domains[a2.name], i2 && i2.type === "inherited" && (i2 = ae$3(a2.name, t2), o2 = true), true);
  }), o2 || i2 || (i2 = ae$3(e2, t2)), { field: a2, domain: i2 };
}
function ae$3(e2, t2) {
  let n2;
  return t2.fields.some(function(t3) {
    return t3.name === e2 && (n2 = t3.domain), !!n2;
  }), n2;
}
function ue$2(e2, t2) {
  t2 || (t2 = {}), typeof t2 == "function" && (t2 = { cmp: t2 });
  const n2 = typeof t2.cycles == "boolean" && t2.cycles, r2 = t2.cmp && (i2 = t2.cmp, function(e3) {
    return function(t3, n3) {
      const r3 = { key: t3, value: e3[t3] }, o3 = { key: n3, value: e3[n3] };
      return i2(r3, o3);
    };
  });
  var i2;
  const o2 = [];
  return function e3(t3) {
    if (t3 && t3.toJSON && typeof t3.toJSON == "function" && (t3 = t3.toJSON()), t3 === void 0)
      return;
    if (typeof t3 == "number")
      return isFinite(t3) ? "" + t3 : "null";
    if (typeof t3 != "object")
      return JSON.stringify(t3);
    let i3, a2;
    if (Array.isArray(t3)) {
      for (a2 = "[", i3 = 0; i3 < t3.length; i3++)
        i3 && (a2 += ","), a2 += e3(t3[i3]) || "null";
      return a2 + "]";
    }
    if (t3 === null)
      return "null";
    if (o2.indexOf(t3) !== -1) {
      if (n2)
        return JSON.stringify("__cycle__");
      throw new TypeError("Converting circular structure to JSON");
    }
    const u2 = o2.push(t3) - 1, s2 = Object.keys(t3).sort(r2 && r2(t3));
    for (a2 = "", i3 = 0; i3 < s2.length; i3++) {
      const n3 = s2[i3], r3 = e3(t3[n3]);
      r3 && (a2 && (a2 += ","), a2 += JSON.stringify(n3) + ":" + r3);
    }
    return o2.splice(u2, 1), "{" + a2 + "}";
  }(e2);
}
function se$3(e2) {
  if (e2 === null)
    return null;
  const t2 = [];
  for (const n2 of e2)
    n2 && (n2.declaredClass && n2.declaredClass === "esri.arcade.Feature" || n2.type === "FeatureSetReader") ? t2.push(n2.geometry()) : t2.push(n2);
  return t2;
}
function le$2(e2, t2) {
  if (!(t2 instanceof j$6))
    throw new Error("Invalid Argument");
  e2.push(t2.hasZ ? t2.hasM ? [t2.x, t2.y, t2.z, t2.m] : [t2.x, t2.y, t2.z] : [t2.x, t2.y]);
}
function fe$2(e2, t2) {
  if (Z$2(e2) || E$6(e2)) {
    let n2 = false, r2 = false, i2 = [], o2 = t2;
    if (Z$2(e2)) {
      for (const t3 of e2)
        le$2(i2, t3);
      i2.length > 0 && (o2 = e2[0].spatialReference, n2 = e2[0].hasZ, r2 = e2[0].hasM);
    } else if (e2 instanceof i$7)
      i2 = e2._elements, i2.length > 0 && (n2 = e2._hasZ, r2 = e2._hasM, o2 = e2.get(0).spatialReference);
    else {
      if (!E$6(e2))
        throw new Error("Invalid Argument");
      for (const t3 of e2.toArray())
        le$2(i2, t3);
      i2.length > 0 && (o2 = e2.get(0).spatialReference, n2 = e2.get(0).hasZ === true, r2 = e2.get(0).hasM === true);
    }
    if (i2.length === 0)
      return null;
    return f$7(i2, r2, n2) === false && (i2 = i2.slice(0).reverse()), new x$7({ rings: [i2], spatialReference: o2, hasZ: n2, hasM: r2 });
  }
  return e2;
}
function ce$3(e2, t2) {
  if (Z$2(e2) || E$6(e2)) {
    let n2 = false, r2 = false, i2 = [], o2 = t2;
    if (Z$2(e2)) {
      for (const t3 of e2)
        le$2(i2, t3);
      i2.length > 0 && (o2 = e2[0].spatialReference, n2 = e2[0].hasZ === true, r2 = e2[0].hasM === true);
    } else if (e2 instanceof i$7)
      i2 = e2._elements, i2.length > 0 && (n2 = e2._hasZ, r2 = e2._hasM, o2 = e2.get(0).spatialReference);
    else if (E$6(e2)) {
      for (const t3 of e2.toArray())
        le$2(i2, t3);
      i2.length > 0 && (o2 = e2.get(0).spatialReference, n2 = e2.get(0).hasZ === true, r2 = e2.get(0).hasM === true);
    }
    return i2.length === 0 ? null : new m$5({ paths: [i2], spatialReference: o2, hasZ: n2, hasM: r2 });
  }
  return e2;
}
function me$2(e2, t2) {
  if (Z$2(e2) || E$6(e2)) {
    let n2 = false, r2 = false, i2 = [], a2 = t2;
    if (Z$2(e2)) {
      for (const t3 of e2)
        le$2(i2, t3);
      i2.length > 0 && (a2 = e2[0].spatialReference, n2 = e2[0].hasZ === true, r2 = e2[0].hasM === true);
    } else if (e2 instanceof i$7)
      i2 = e2._elements, i2.length > 0 && (n2 = e2._hasZ, r2 = e2._hasM, a2 = e2.get(0).spatialReference);
    else if (E$6(e2)) {
      for (const t3 of e2.toArray())
        le$2(i2, t3);
      i2.length > 0 && (a2 = e2.get(0).spatialReference, n2 = e2.get(0).hasZ === true, r2 = e2.get(0).hasM === true);
    }
    return i2.length === 0 ? null : new m$6({ points: i2, spatialReference: a2, hasZ: n2, hasM: r2 });
  }
  return e2;
}
function ge$2(e2, t2 = false) {
  const n2 = [];
  if (e2 === null)
    return n2;
  if (Z$2(e2) === true) {
    for (let r2 = 0; r2 < e2.length; r2++) {
      const i2 = K$2(e2[r2]);
      i2 === "" && t2 !== true || n2.push(i2);
    }
    return n2;
  }
  if (e2 instanceof t$3) {
    for (let r2 = 0; r2 < e2.length(); r2++) {
      const i2 = K$2(e2.get(r2));
      i2 === "" && t2 !== true || n2.push(i2);
    }
    return n2;
  }
  if (C$5(e2)) {
    const r2 = K$2(e2);
    return r2 === "" && t2 !== true || n2.push(r2), n2;
  }
  return [];
}
let pe$2 = 0;
function he$2(e2) {
  return pe$2++, pe$2 % 100 == 0 ? (pe$2 = 0, l$8((t2) => {
    setTimeout(() => {
      t2(e2);
    }, 0);
  })) : e2;
}
const de$2 = { Moment: null };
function ye$2(e2, t2, n2) {
  switch (n2) {
    case "&":
      return e2 & t2;
    case "|":
      return e2 | t2;
    case "^":
      return e2 ^ t2;
    case "<<":
      return e2 << t2;
    case ">>":
      return e2 >> t2;
    case ">>>":
      return e2 >>> t2;
  }
}
var xe$2 = Object.freeze({ __proto__: null, ReturnResultE: h$8, ImplicitResultE: d$5, NativeFunctionE: y$6, SizzleFunctionE: x$6, NativeFunction: S$4, ImplicitResult: T$4, ReturnResult: N$6, SizzleFunction: R$3, voidOperation: b$8, breakResult: _$2, continueResult: j$5, multiReplace: M$5, isFunctionParameter: v$4, isSimpleType: C$5, defaultUndefined: O$5, isString: F$5, isBoolean: I$5, isNumber: w$3, isInteger: A$5, isArray: Z$2, isFeatureSet: k$4, isFeatureSetCollection: D$7, isImmutableArray: E$6, isDate: P$5, pcCheck: J$3, generateUUID: z$4, formatNumber: V$3, formatDate: G$4, standardiseDateFormat: L$6, greaterThanLessThan: q$4, equalityTest: B$3, toString: K$2, toNumberArray: W$2, toStringExplicit: H$2, toNumber: X$3, toDate: Y$2, toDateM: $$4, toBoolean: ee$3, fixSpatialReference: te$2, fixNullGeometry: ne$2, getDomainValue: re$3, getDomainCode: ie$3, getDomain: oe$2, stableStringify: ue$2, autoCastFeatureToGeometry: se$3, autoCastArrayOfPointsToPolygon: fe$2, autoCastArrayOfPointsToPolyline: ce$3, autoCastArrayOfPointsToMultiPoint: me$2, toStringArray: ge$2, tick: he$2, MomentLibrary: de$2, binaryOperator: ye$2 });
function b$7(t2) {
  let s2 = null;
  if (t2 === null)
    ;
  else if (w$3(t2))
    s2 = X$3(t2);
  else if (I$5(t2))
    s2 = ee$3(t2);
  else if (F$5(t2))
    s2 = K$2(t2);
  else if (P$5(t2))
    s2 = Y$2(t2);
  else if (Z$2(t2)) {
    s2 = [];
    for (const i2 of t2)
      s2.push(b$7(i2));
  } else {
    if (Object.keys(t2).length === 0)
      return null;
    const i2 = new h$7();
    i2.immutable = false;
    for (const s3 of Object.keys(t2)) {
      const e2 = t2[s3];
      e2 !== void 0 && i2.setField(s3, b$7(e2));
    }
    i2.immutable = true, s2 = i2;
  }
  return s2;
}
class h$7 {
  constructor(t2) {
    this.declaredClass = "esri.arcade.Dictionary", this.attributes = null, this.plain = false, this.immutable = true, this.attributes = t2 instanceof h$7 ? t2.attributes : t2 == null ? {} : t2;
  }
  field(t2) {
    const s2 = t2.toLowerCase(), i2 = this.attributes[t2];
    if (i2 !== void 0)
      return i2;
    for (const e2 in this.attributes)
      if (e2.toLowerCase() === s2)
        return this.attributes[e2];
    throw new Error("Field not Found : " + t2);
  }
  setField(t2, s2) {
    if (this.immutable)
      throw new Error("Dictionary is Immutable");
    const i2 = t2.toLowerCase();
    if (this.attributes[t2] === void 0) {
      for (const t3 in this.attributes)
        if (t3.toLowerCase() === i2)
          return void (this.attributes[t3] = s2);
      this.attributes[t2] = s2;
    } else
      this.attributes[t2] = s2;
  }
  hasField(t2) {
    const s2 = t2.toLowerCase();
    if (this.attributes[t2] !== void 0)
      return true;
    for (const i2 in this.attributes)
      if (i2.toLowerCase() === s2)
        return true;
    return false;
  }
  keys() {
    let t2 = [];
    for (const s2 in this.attributes)
      t2.push(s2);
    return t2 = t2.sort(), t2;
  }
  castToText() {
    let n2 = "";
    for (const a2 in this.attributes) {
      n2 !== "" && (n2 += ",");
      const u2 = this.attributes[a2];
      u2 == null ? n2 += JSON.stringify(a2) + ":null" : I$5(u2) || w$3(u2) || F$5(u2) ? n2 += JSON.stringify(a2) + ":" + JSON.stringify(u2) : u2 instanceof c$7 || u2 instanceof t$3 || u2 instanceof Array ? n2 += JSON.stringify(a2) + ":" + H$2(u2) : u2 instanceof Date ? n2 += JSON.stringify(a2) + ":" + JSON.stringify(u2) : u2 !== null && typeof u2 == "object" && u2.castToText !== void 0 && (n2 += JSON.stringify(a2) + ":" + u2.castToText());
    }
    return "{" + n2 + "}";
  }
  static convertObjectToArcadeDictionary(t2) {
    const s2 = new h$7();
    s2.immutable = false;
    for (const i2 in t2) {
      const e2 = t2[i2];
      e2 !== void 0 && s2.setField(i2.toString(), b$7(e2));
    }
    return s2.immutable = true, s2;
  }
}
var o$5, l$7;
function s$9(e2) {
  return y$7.fromJSON(e2.toJSON());
}
function y$5(e2) {
  return e2.toJSON();
}
function u$6(e2) {
  return typeof e2 == "string" || e2 instanceof String;
}
function c$6(e2) {
  return typeof e2 == "number";
}
function m$4(e2) {
  return e2 instanceof Date;
}
function f$6(e2, r2) {
  return e2 === r2 || !(!m$4(e2) || !m$4(r2)) && e2.getTime() === r2.getTime();
}
function g$6(e2) {
  if (e2 === void 0)
    return null;
  if (typeof e2 == "number")
    return e2;
  switch (e2.toLowerCase()) {
    case "meters":
    case "meter":
      return 109404;
    case "miles":
    case "mile":
      return 109413;
    case "kilometers":
    case "kilometer":
    case "km":
      return 109414;
  }
  return null;
}
function F$4(e2) {
  if (e2 === null)
    return null;
  switch (e2.type) {
    case "polygon":
    case "multipoint":
    case "polyline":
      return e2.extent;
    case "point":
      return new M$6({ xmin: e2.x, ymin: e2.y, xmax: e2.x, ymax: e2.y, spatialReference: e2.spatialReference });
    case "extent":
      return e2;
  }
  return null;
}
function G$3(e2) {
  if (e2 === void 0)
    return null;
  if (typeof e2 == "number")
    return e2;
  if (typeof e2 == "number")
    return e2;
  switch (e2.toLowerCase()) {
    case "meters":
    case "meter":
      return 9001;
    case "miles":
    case "mile":
      return 9035;
    case "kilometers":
    case "kilometer":
    case "km":
      return 9036;
  }
  return null;
}
!function(e2) {
  e2[e2.Standardised = 0] = "Standardised", e2[e2.StandardisedNoInterval = 1] = "StandardisedNoInterval", e2[e2.SqlServer = 2] = "SqlServer", e2[e2.Oracle = 3] = "Oracle", e2[e2.Postgres = 4] = "Postgres", e2[e2.PGDB = 5] = "PGDB", e2[e2.FILEGDB = 6] = "FILEGDB", e2[e2.NotEvaluated = 7] = "NotEvaluated";
}(o$5 || (o$5 = {})), function(e2) {
  e2[e2.InFeatureSet = 0] = "InFeatureSet", e2[e2.NotInFeatureSet = 1] = "NotInFeatureSet", e2[e2.Unknown = 2] = "Unknown";
}(l$7 || (l$7 = {}));
const S$3 = 1e3;
const I$4 = { point: "point", polygon: "polygon", polyline: "polyline", multipoint: "multipoint", extent: "extent", esriGeometryPoint: "point", esriGeometryPolygon: "polygon", esriGeometryPolyline: "polyline", esriGeometryMultipoint: "multipoint", esriGeometryEnvelope: "extent", envelope: "extent" }, b$6 = { point: "esriGeometryPoint", polygon: "esriGeometryPolygon", polyline: "esriGeometryPolyline", multipoint: "esriGeometryMultipoint", extent: "esriGeometryEnvelope", esriGeometryPoint: "esriGeometryPoint", esriGeometryPolygon: "esriGeometryPolygon", esriGeometryPolyline: "esriGeometryPolyline", esriGeometryMultipoint: "esriGeometryMultipoint", esriGeometryEnvelope: "esriGeometryEnvelope", envelope: "esriGeometryEnvelope" }, D$6 = { "small-integer": "esriFieldTypeSmallInteger", integer: "esriFieldTypeInteger", long: "esriFieldTypeLong", single: "esriFieldTypeSingle", double: "esriFieldTypeDouble", string: "esriFieldTypeString", date: "esriFieldTypeDate", oid: "esriFieldTypeOID", geometry: "esriFieldTypeGeometry", blob: "esriFieldTypeBlob", raster: "esriFieldTypeRaster", guid: "esriFieldTypeGUID", "global-id": "esriFieldTypeGlobalID", xml: "eesriFieldTypeXML", esriFieldTypeSmallInteger: "esriFieldTypeSmallInteger", esriFieldTypeInteger: "esriFieldTypeInteger", esriFieldTypeLong: "esriFieldTypeLong", esriFieldTypeSingle: "esriFieldTypeSingle", esriFieldTypeDouble: "esriFieldTypeDouble", esriFieldTypeString: "esriFieldTypeString", esriFieldTypeDate: "esriFieldTypeDate", esriFieldTypeOID: "esriFieldTypeOID", esriFieldTypeGeometry: "esriFieldTypeGeometry", esriFieldTypeBlob: "esriFieldTypeBlob", esriFieldTypeRaster: "esriFieldTypeRaster", esriFieldTypeGUID: "esriFieldTypeGUID", esriFieldTypeGlobalID: "esriFieldTypeGlobalID", esriFieldTypeXML: "eesriFieldTypeXML" };
function O$4(i2, n2) {
  return l$8((e2, o2) => {
    const l2 = x$8(true);
    i2.reduce((e3, r2, i3, o3) => e3.then((e4) => {
      try {
        return n2(e4, r2, i3, o3);
      } catch (l3) {
        return L$7(l3);
      }
    }, (e4) => L$7(e4)), l2).then(e2, o2);
  });
}
function N$5(e2) {
  return e2 === void 0 ? "" : e2 = (e2 = (e2 = e2.replace(/\/featureserver\/[0-9]*/i, "/FeatureServer")).replace(/\/mapserver\/[0-9]*/i, "/MapServer")).split("?")[0];
}
function E$5(e2, r2) {
  r2 || (r2 = {}), typeof r2 == "function" && (r2 = { cmp: r2 });
  const t2 = typeof r2.cycles == "boolean" && r2.cycles, i2 = r2.cmp && (n2 = r2.cmp, function(e3) {
    return function(r3, t3) {
      const i3 = { key: r3, value: e3[r3] }, o3 = { key: t3, value: e3[t3] };
      return n2(i3, o3);
    };
  });
  var n2;
  const o2 = [];
  return function e3(r3) {
    if (r3 && r3.toJSON && typeof r3.toJSON == "function" && (r3 = r3.toJSON()), r3 === void 0)
      return;
    if (typeof r3 == "number")
      return isFinite(r3) ? "" + r3 : "null";
    if (typeof r3 != "object")
      return JSON.stringify(r3);
    let n3, l2;
    if (Array.isArray(r3)) {
      for (l2 = "[", n3 = 0; n3 < r3.length; n3++)
        n3 && (l2 += ","), l2 += e3(r3[n3]) || "null";
      return l2 + "]";
    }
    if (r3 === null)
      return "null";
    if (o2.indexOf(r3) !== -1) {
      if (t2)
        return JSON.stringify("__cycle__");
      throw new TypeError("Converting circular structure to JSON");
    }
    const s2 = o2.push(r3) - 1, y2 = Object.keys(r3).sort(i2 && i2(r3));
    for (l2 = "", n3 = 0; n3 < y2.length; n3++) {
      const t3 = y2[n3], i3 = e3(r3[t3]);
      i3 && (l2 && (l2 += ","), l2 += JSON.stringify(t3) + ":" + i3);
    }
    return o2.splice(s2, 1), "{" + l2 + "}";
  }(e2);
}
class g$5 {
  constructor() {
    this.declaredClass = "esri.arcade.Feature", this._optimizedGeomDefinition = null, this._geometry = null, this.attributes = null, this._layer = null, this._datesfixed = true, this.immutable = true, this._datefields = null, this.immutable = true;
  }
  static createFromGraphic(e2) {
    const i2 = new g$5();
    return i2._geometry = r$9(e2.geometry) ? e2.geometry : null, e2.attributes === void 0 || e2.attributes === null ? i2.attributes = {} : i2.attributes = e2.attributes, e2._sourceLayer ? (i2._layer = e2._sourceLayer, i2._datesfixed = false) : e2._layer ? (i2._layer = e2._layer, i2._datesfixed = false) : e2.layer ? (i2._layer = e2.layer, i2._datesfixed = false) : e2.sourceLayer && (i2._layer = e2.sourceLayer, i2._datesfixed = false), i2;
  }
  static createFromArcadeFeature(t2) {
    const e2 = new g$5();
    return e2._datesfixed = t2._datesfixed, e2.attributes = t2.attributes, e2._geometry = t2._geometry, e2._optimizedGeomDefinition = t2._optimizedGeomDefinition, t2._layer && (e2._layer = t2._layer), e2;
  }
  static createFromOptimisedFeature(t2, e2, i2) {
    const r2 = new g$5();
    return r2._geometry = t2.geometry ? { geometry: t2.geometry } : null, r2._optimizedGeomDefinition = i2, r2.attributes = t2.attributes || {}, r2._layer = e2, r2._datesfixed = false, r2;
  }
  static createFromArcadeDictionary(t2) {
    const e2 = new g$5();
    return e2.attributes = t2.field("attributes"), e2.attributes !== null && e2.attributes instanceof h$7 ? (e2.attributes = e2.attributes.attributes, e2.attributes === null && (e2.attributes = {})) : e2.attributes = {}, e2._geometry = t2.field("geometry"), e2._geometry !== null && (e2._geometry instanceof h$7 ? e2._geometry = g$5.parseGeometryFromDictionary(e2._geometry) : e2._geometry instanceof c$7 || (e2._geometry = null)), e2;
  }
  static createFromGraphicLikeObject(e2, i2, r2 = null) {
    const s2 = new g$5();
    return i2 === null && (i2 = {}), s2.attributes = i2, s2._geometry = r$9(e2) ? e2 : null, s2._layer = r2, s2._layer && (s2._datesfixed = false), s2._adapter = null, s2;
  }
  repurposeFromGraphicLikeObject(t2, e2, i2 = null) {
    e2 === null && (e2 = {}), this.attributes = e2, this._geometry = t2 || null, this._layer = i2, this._layer ? this._datesfixed = false : this._datesfixed = true;
  }
  repurposeFromAdapter(t2, e2 = null) {
    this._adapter = t2, this._layer = e2;
  }
  castToText() {
    if (this._adapter)
      return this._adapter.castToText();
    let t2 = "";
    this._datesfixed === false && this._fixDates();
    for (const e2 in this.attributes) {
      t2 !== "" && (t2 += ",");
      const r2 = this.attributes[e2];
      r2 == null ? t2 += JSON.stringify(e2) + ":null" : I$5(r2) || w$3(r2) || F$5(r2) ? t2 += JSON.stringify(e2) + ":" + JSON.stringify(r2) : r2 instanceof c$7 || r2 instanceof t$3 || r2 instanceof Array ? t2 += JSON.stringify(e2) + ":" + H$2(r2) : r2 instanceof Date ? t2 += JSON.stringify(e2) + ":" + JSON.stringify(r2) : r2 !== null && typeof r2 == "object" && r2.castToText !== void 0 && (t2 += JSON.stringify(e2) + ":" + r2.castToText());
    }
    return '{"geometry":' + (this.geometry() === null ? "null" : H$2(this.geometry())) + ',"attributes":{' + t2 + "}}";
  }
  _fixDates() {
    if (this._datefields !== null)
      return this._datefields.length > 0 && this._fixDateFields(this._datefields), void (this._datesfixed = true);
    const t2 = [];
    for (let e2 = 0; e2 < this._layer.fields.length; e2++) {
      const i2 = this._layer.fields[e2];
      i2.type !== "date" && i2.type !== "esriFieldTypeDate" || t2.push(i2.name);
    }
    this._datefields = t2, t2.length > 0 && this._fixDateFields(t2), this._datesfixed = true;
  }
  _fixDateFields(t2) {
    this.attributes = __spreadValues({}, this.attributes);
    for (let e2 = 0; e2 < t2.length; e2++) {
      let i2 = this.attributes[t2[e2]];
      if (i2 === null)
        ;
      else if (i2 === void 0) {
        for (const r2 in this.attributes)
          if (r2.toLowerCase() === t2[e2].toLowerCase()) {
            i2 = this.attributes[r2], i2 !== null && (i2 instanceof Date || (this.attributes[r2] = new Date(i2)));
            break;
          }
      } else
        i2 instanceof Date || (this.attributes[t2[e2]] = new Date(i2));
    }
  }
  geometry() {
    return this._adapter ? this._adapter.geometry() : (this._geometry === null || this._geometry instanceof c$7 || (this._optimizedGeomDefinition ? (this._geometry = e$a(p$5(ee$4(this._geometry, this._optimizedGeomDefinition.geometryType, this._optimizedGeomDefinition.hasZ, this._optimizedGeomDefinition.hasM))), this._geometry.spatialReference = this._optimizedGeomDefinition.spatialReference) : this._geometry = e$a(p$5(this._geometry))), this._geometry);
  }
  field(t2) {
    if (this._adapter)
      return this._adapter.field(t2);
    this._datesfixed === false && this._fixDates();
    const e2 = this.attributes[t2];
    if (e2 !== void 0)
      return e2;
    const i2 = t2.toLowerCase();
    for (const r2 in this.attributes)
      if (r2.toLowerCase() === i2)
        return this.attributes[r2];
    if (this._hasFieldDefinition(i2))
      return null;
    throw new Error("Field not Found : " + t2);
  }
  _hasFieldDefinition(t2) {
    if (this._layer === null)
      return false;
    for (let e2 = 0; e2 < this._layer.fields.length; e2++) {
      if (this._layer.fields[e2].name.toLowerCase() === t2)
        return true;
    }
    return false;
  }
  _field(t2) {
    var e2;
    if (this._adapter)
      return (e2 = this._adapter.field(t2)) != null ? e2 : null;
    this._datesfixed === false && this._fixDates();
    const i2 = t2.toLowerCase(), r2 = this.attributes[t2];
    if (r2 !== void 0)
      return r2;
    for (const s2 in this.attributes)
      if (s2.toLowerCase() === i2)
        return this.attributes[s2];
    return null;
  }
  setField(t2, e2) {
    if (this.immutable)
      throw new Error("Feature is Immutable");
    if (C$5(e2) === false)
      throw new Error("Illegal Value Assignment to Feature");
    if (this._adapter)
      return void this._adapter.setField(t2, e2);
    const i2 = t2.toLowerCase();
    if (this.attributes[t2] === void 0) {
      for (const t3 in this.attributes)
        if (t3.toLowerCase() === i2)
          return void (this.attributes[t3] = e2);
      this.attributes[t2] = e2;
    } else
      this.attributes[t2] = e2;
  }
  hasField(t2) {
    if (this._adapter)
      return this._adapter.hasField(t2);
    const e2 = t2.toLowerCase();
    if (this.attributes[t2] !== void 0)
      return true;
    for (const i2 in this.attributes)
      if (i2.toLowerCase() === e2)
        return true;
    return !!this._hasFieldDefinition(e2);
  }
  keys() {
    if (this._adapter)
      return this._adapter.keys();
    let t2 = [];
    const e2 = {};
    for (const i2 in this.attributes)
      t2.push(i2), e2[i2.toLowerCase()] = 1;
    if (this._layer !== null)
      for (let i2 = 0; i2 < this._layer.fields.length; i2++) {
        const r2 = this._layer.fields[i2];
        e2[r2.name.toLowerCase()] !== 1 && t2.push(r2.name);
      }
    return t2 = t2.sort(), t2;
  }
  static parseGeometryFromDictionary(t2) {
    const e2 = g$5.convertDictionaryToJson(t2, true);
    return e2.hasm !== void 0 && (e2.hasM = e2.hasm, delete e2.hasm), e2.hasz !== void 0 && (e2.hasZ = e2.hasz, delete e2.hasz), e2.spatialreference !== void 0 && (e2.spatialReference = e2.spatialreference, delete e2.spatialreference), e2.rings !== void 0 && (e2.rings = this.fixPathArrays(e2.rings, e2.hasZ === true, e2.hasZ === true)), e2.paths !== void 0 && (e2.paths = this.fixPathArrays(e2.paths, e2.hasZ === true, e2.hasM === true)), e2.points !== void 0 && (e2.points = this.fixPointArrays(e2.points, e2.hasZ === true, e2.hasM === true)), p$5(e2);
  }
  static fixPathArrays(t2, e2, i2) {
    const r2 = [];
    if (t2 instanceof Array)
      for (let s2 = 0; s2 < t2.length; s2++)
        r2.push(this.fixPointArrays(t2[s2], e2, i2));
    else if (t2 instanceof t$3)
      for (let s2 = 0; s2 < t2.length(); s2++)
        r2.push(this.fixPointArrays(t2.get(s2), e2, i2));
    return r2;
  }
  static fixPointArrays(t2, e2, i2) {
    const s2 = [];
    if (t2 instanceof Array)
      for (let o2 = 0; o2 < t2.length; o2++) {
        const n2 = t2[o2];
        n2 instanceof j$6 ? e2 && i2 ? s2.push([n2.x, n2.y, n2.z, n2.m]) : e2 ? s2.push([n2.x, n2.y, n2.z]) : i2 ? s2.push([n2.x, n2.y, n2.m]) : s2.push([n2.x, n2.y]) : n2 instanceof t$3 ? s2.push(n2.toArray()) : s2.push(n2);
      }
    else if (t2 instanceof t$3)
      for (let o2 = 0; o2 < t2.length(); o2++) {
        const n2 = t2.get(o2);
        n2 instanceof j$6 ? e2 && i2 ? s2.push([n2.x, n2.y, n2.z, n2.m]) : e2 ? s2.push([n2.x, n2.y, n2.z]) : i2 ? s2.push([n2.x, n2.y, n2.m]) : s2.push([n2.x, n2.y]) : n2 instanceof t$3 ? s2.push(n2.toArray()) : s2.push(n2);
      }
    return s2;
  }
  static convertDictionaryToJson(t2, e2 = false) {
    const i2 = {};
    for (const r2 in t2.attributes) {
      let s2 = t2.attributes[r2];
      s2 instanceof h$7 && (s2 = g$5.convertDictionaryToJson(s2)), e2 ? i2[r2.toLowerCase()] = s2 : i2[r2] = s2;
    }
    return i2;
  }
  static parseAttributesFromDictionary(t2) {
    const e2 = {};
    for (const i2 in t2.attributes) {
      const r2 = t2.attributes[i2];
      if (!C$5(r2))
        throw new Error("Illegal Argument");
      e2[i2] = r2;
    }
    return e2;
  }
  static fromJson(t2) {
    let e2 = null;
    t2.geometry !== null && t2.geometry !== void 0 && (e2 = p$5(t2.geometry));
    const i2 = {};
    if (t2.attributes !== null && t2.attributes !== void 0)
      for (const r2 in t2.attributes) {
        const e3 = t2.attributes[r2];
        if (e3 === null)
          i2[r2] = e3;
        else {
          if (!(F$5(e3) || w$3(e3) || I$5(e3) || P$5(e3)))
            throw new Error("Illegal Argument");
          i2[r2] = e3;
        }
      }
    return g$5.createFromGraphicLikeObject(e2, i2, null);
  }
  fullDomain(t2, e2) {
    if (this._layer === null)
      return null;
    if (!this._layer.fields)
      return null;
    return oe$2(t2, this._layer, this, e2);
  }
  subtypes() {
    return this._layer === null ? null : this._layer.fields && this._layer.typeIdField ? { subtypeField: this._layer.typeIdField, subtypes: this._layer.types ? this._layer.types.map((t2) => ({ name: t2.name, code: t2.id })) : [] } : null;
  }
  domainValueLookup(t2, e2, i2) {
    if (this._layer === null)
      return null;
    if (!this._layer.fields)
      return null;
    const r2 = oe$2(t2, this._layer, this, i2);
    if (e2 === void 0)
      try {
        e2 = this.field(t2);
      } catch (s2) {
        return null;
      }
    return re$3(r2, e2);
  }
  gdbVersion() {
    if (this._layer === null)
      return "";
    const t2 = this._layer.gdbVersion;
    return t2 === void 0 ? "" : t2 === "" && this._layer.capabilities && this._layer.capabilities.isVersioned ? "SDE.DEFAULT" : t2;
  }
  domainCodeLookup(t2, e2, i2) {
    if (this._layer === null)
      return null;
    if (!this._layer.fields)
      return null;
    if (e2 === void 0) {
      try {
        e2 = this.field(t2);
      } catch (s2) {
        return null;
      }
      return e2;
    }
    const r2 = oe$2(t2, this._layer, this, i2);
    return ie$3(r2, e2);
  }
  schema() {
    if (this._layer === null)
      return null;
    if (!this._layer.fields)
      return null;
    const t2 = [];
    for (const e2 of this._layer.fields)
      t2.push(y$5(e2));
    return { objectIdField: this._layer.objectIdField, globalIdField: this._layer.globalIdField, geometryType: b$6[this._layer.geometryType] === void 0 ? "" : b$6[this._layer.geometryType], fields: t2 };
  }
}
const e$9 = { concatenate: { min: "0", max: "*" }, tohex: { min: "1", max: "1" }, hash: { min: "1", max: "1" }, isoweek: { min: "1", max: "1" }, isoweekday: { min: "1", max: "1" }, isomonth: { min: "1", max: "1" }, isoyear: { min: "1", max: "1" }, resize: { min: "2", max: "3" }, slice: { min: "0", max: "*" }, splice: { min: "0", max: "*" }, push: { min: "2", max: "2" }, pop: { min: "1", max: "1" }, includes: { min: "2", max: "2" }, array: { min: "1", max: "2" }, front: { min: "1", max: "1" }, back: { min: "1", max: "1" }, insert: { min: "3", max: "3" }, erase: { min: "2", max: "2" }, split: { min: "2", max: "4" }, guid: { min: "0", max: "1" }, today: { min: "0", max: "0" }, angle: { min: "2", max: "3" }, bearing: { min: "2", max: "3" }, urlencode: { min: "1", max: "1" }, now: { min: "0", max: "0" }, timestamp: { min: "0", max: "0" }, day: { min: "1", max: "1" }, month: { min: "1", max: "1" }, year: { min: "1", max: "1" }, hour: { min: "1", max: "1" }, second: { min: "1", max: "1" }, millisecond: { min: "1", max: "1" }, minute: { min: "1", max: "1" }, weekday: { min: "1", max: "1" }, toutc: { min: "1", max: "1" }, tolocal: { min: "1", max: "1" }, date: { min: "0", max: "7" }, datediff: { min: "2", max: "3" }, dateadd: { min: "2", max: "3" }, trim: { min: "1", max: "1" }, text: { min: "1", max: "2" }, left: { min: "2", max: "2" }, right: { min: "2", max: "2" }, mid: { min: "2", max: "3" }, upper: { min: "1", max: "1" }, proper: { min: "1", max: "2" }, lower: { min: "1", max: "1" }, find: { min: "2", max: "3" }, iif: { min: "3", max: "3" }, decode: { min: "2", max: "*" }, when: { min: "2", max: "*" }, defaultvalue: { min: "2", max: "2" }, isempty: { min: "1", max: "1" }, domaincode: { min: "2", max: "4" }, domainname: { min: "2", max: "4" }, polygon: { min: "1", max: "1" }, point: { min: "1", max: "1" }, polyline: { min: "1", max: "1" }, extent: { min: "1", max: "1" }, multipoint: { min: "1", max: "1" }, ringisclockwise: { min: "1", max: "1" }, geometry: { min: "1", max: "1" }, count: { min: "0", max: "*" }, number: { min: "1", max: "2" }, acos: { min: "1", max: "1" }, asin: { min: "1", max: "1" }, atan: { min: "1", max: "1" }, atan2: { min: "2", max: "2" }, ceil: { min: "1", max: "2" }, floor: { min: "1", max: "2" }, round: { min: "1", max: "2" }, cos: { min: "1", max: "1" }, exp: { min: "1", max: "1" }, log: { min: "1", max: "1" }, min: { min: "0", max: "*" }, constrain: { min: "3", max: "3" }, console: { min: "0", max: "*" }, max: { min: "0", max: "*" }, pow: { min: "2", max: "2" }, random: { min: "0", max: "0" }, sqrt: { min: "1", max: "1" }, sin: { min: "1", max: "1" }, tan: { min: "1", max: "1" }, abs: { min: "1", max: "1" }, isnan: { min: "1", max: "1" }, stdev: { min: "0", max: "*" }, average: { min: "0", max: "*" }, mean: { min: "0", max: "*" }, sum: { min: "0", max: "*" }, variance: { min: "0", max: "*" }, distinct: { min: "0", max: "*" }, first: { min: "1", max: "1" }, top: { min: "2", max: "2" }, boolean: { min: "1", max: "1" }, dictionary: { min: "0", max: "*" }, typeof: { min: "1", max: "1" }, reverse: { min: "1", max: "1" }, replace: { min: "3", max: "4" }, sort: { min: "1", max: "2" }, feature: { min: "1", max: "*" }, haskey: { min: "2", max: "2" }, indexof: { min: "2", max: "2" }, disjoint: { min: "2", max: "2" }, intersects: { min: "2", max: "2" }, touches: { min: "2", max: "2" }, crosses: { min: "2", max: "2" }, within: { min: "2", max: "2" }, contains: { min: "2", max: "2" }, overlaps: { min: "2", max: "2" }, equals: { min: "2", max: "2" }, relate: { min: "3", max: "3" }, intersection: { min: "2", max: "2" }, union: { min: "1", max: "2" }, difference: { min: "2", max: "2" }, symmetricdifference: { min: "2", max: "2" }, clip: { min: "2", max: "2" }, cut: { min: "2", max: "2" }, area: { min: "1", max: "2" }, areageodetic: { min: "1", max: "2" }, length: { min: "1", max: "2" }, lengthgeodetic: { min: "1", max: "2" }, distancegeodetic: { min: "2", max: "3" }, distance: { min: "2", max: "3" }, densify: { min: "2", max: "3" }, densifygeodetic: { min: "2", max: "3" }, generalize: { min: "2", max: "4" }, buffer: { min: "2", max: "3" }, buffergeodetic: { min: "2", max: "3" }, offset: { min: "2", max: "6" }, rotate: { min: "2", max: "3" }, issimple: { min: "1", max: "1" }, simplify: { min: "1", max: "1" }, centroid: { min: "1", max: "1" }, isselfintersecting: { min: "1", max: "1" }, multiparttosinglepart: { min: "1", max: "1" }, setgeometry: { min: "2", max: "2" }, portal: { min: "1", max: "1" }, getuser: { min: "1", max: "2" }, subtypes: { min: "1", max: "1" }, subtypecode: { min: "1", max: "1" }, subtypename: { min: "1", max: "1" }, domain: { min: "2", max: "3" }, convertdirection: { min: "3", max: "3" }, schema: { min: "1", max: "1" } };
for (const L2 in e$9)
  e$9[L2].fmin = e$9[L2].min, e$9[L2].fmax = e$9[L2].max;
const t$1 = ["featureset", "getuser", "featuresetbyid", "featuresetbyname", "featuresetbyassociation", "featuresetbyrelationshipname", "featuresetbyurl", "attachments", "featuresetbyportalitem"], n$3 = ["disjoint", "intersects", "touches", "crosses", "within", "contains", "overlaps", "equals", "relate", "intersection", "union", "difference", "symmetricdifference", "clip", "cut", "area", "areageodetic", "length", "lengthgeodetic", "distance", "distancegeodetic", "densify", "densifygeodetic", "generalize", "buffer", "buffergeodetic", "offset", "rotate", "issimple", "simplify", "multiparttosinglepart"];
function a$5(t2, n2) {
  const a2 = e$9[t2.name.toLowerCase()];
  a2 === void 0 ? e$9[t2.name.toLowerCase()] = n2 === "sync" ? { min: t2.min, max: t2.max } : { fmin: t2.min, fmax: t2.max } : n2 === "sync" ? (a2.min = t2.min, a2.max = t2.max) : (a2.fmin = t2.min, a2.fmax = t2.max);
}
function r$8(e2, t2) {
  return e2.min !== "0" && t2.length < Number(e2.min) || e2.max !== "*" && t2.length > Number(e2.max) ? -2 : 1;
}
function i$6(e2, t2, n2) {
  if (n2.localScope !== null && n2.localScope[e2.toLowerCase()] !== void 0) {
    const a2 = n2.localScope[e2.toLowerCase()];
    if (a2.type === "FormulaFunction")
      return a2.signature === void 0 && (a2.signature = { min: "0", max: "*" }), r$8(a2.signature, t2);
    if (a2.type === "any")
      return a2.signature === void 0 && (a2.signature = { min: "0", max: "*" }), r$8(a2.signature, t2);
  }
  if (n2.globalScope[e2.toLowerCase()] !== void 0) {
    const a2 = n2.globalScope[e2.toLowerCase()];
    if (a2.type === "FormulaFunction")
      return a2.signature === void 0 && (a2.signature = { min: "0", max: "*" }), r$8(a2.signature, t2);
    if (a2.type === "any")
      return a2.signature === void 0 && (a2.signature = { min: "0", max: "*" }), r$8(a2.signature, t2);
  }
  return -1;
}
function s$8(e2, t2) {
  if (e2)
    for (const n2 of e2)
      o$4(n2, t2);
}
function o$4(e2, t2) {
  if (e2 && t2(e2) !== false)
    switch (e2.type) {
      case "ArrayExpression":
        s$8(e2.elements, t2);
        break;
      case "AssignmentExpression":
      case "BinaryExpression":
        o$4(e2.left, t2), o$4(e2.right, t2);
        break;
      case "BlockStatement":
        s$8(e2.body, t2);
        break;
      case "BreakStatement":
        break;
      case "CallExpression":
        o$4(e2.callee, t2), s$8(e2.arguments, t2);
        break;
      case "ConditionalExpression":
        o$4(e2.test, t2), o$4(e2.alternate, t2), o$4(e2.consequent, t2);
        break;
      case "ContinueStatement":
      case "EmptyStatement":
        break;
      case "ExpressionStatement":
        o$4(e2.expression, t2);
        break;
      case "ForInStatement":
        o$4(e2.left, t2), o$4(e2.right, t2), o$4(e2.body, t2);
        break;
      case "ForStatement":
        o$4(e2.init, t2), o$4(e2.test, t2), o$4(e2.update, t2), o$4(e2.body, t2);
        break;
      case "FunctionDeclaration":
      case "FunctionDeclaration":
      case "FunctionExpression":
        o$4(e2.id, t2), s$8(e2.params, t2), o$4(e2.body, t2);
        break;
      case "Identifier":
        break;
      case "IfStatement":
        o$4(e2.test, t2), o$4(e2.consequent, t2), o$4(e2.alternate, t2);
        break;
      case "Literal":
        break;
      case "LogicalExpression":
        o$4(e2.left, t2), o$4(e2.right, t2);
        break;
      case "MemberExpression":
        o$4(e2.object, t2), o$4(e2.property, t2);
        break;
      case "ObjectExpression":
        s$8(e2.properties, t2);
        break;
      case "Program":
        s$8(e2.body, t2);
        break;
      case "Property":
        o$4(e2.key, t2), o$4(e2.value, t2);
        break;
      case "ReturnStatement":
      case "UnaryExpression":
      case "UpdateExpression":
        o$4(e2.argument, t2);
        break;
      case "VariableDeclaration":
        s$8(e2.declarations, t2);
        break;
      case "VariableDeclarator":
        o$4(e2.id, t2), o$4(e2.init, t2);
        break;
      case "TemplateLiteral":
        s$8(e2.expressions, t2), s$8(e2.quasis, t2);
    }
}
function l$6(e2, t2 = true) {
  let n2 = S$2(e2, "SYNTAX", "UNREOGNISED");
  try {
    switch (e2.type) {
      case "VariableDeclarator":
        return e2.init !== null && e2.init.type === "FunctionExpression" ? S$2(e2, "SYNTAX", "FUNCTIONVARIABLEDECLARATOR") : e2.id.type !== "Identifier" ? S$2(e2, "SYNTAX", "VARIABLEMUSTHAVEIDENTIFIER") : e2.init !== null ? l$6(e2.init, false) : "";
      case "VariableDeclaration":
        for (let a2 = 0; a2 < e2.declarations.length; a2++)
          if (n2 = l$6(e2.declarations[a2], t2), n2 !== "")
            return n2;
        return "";
      case "ForInStatement":
        if (n2 = l$6(e2.left, t2), n2 !== "")
          return n2;
        if (e2.left.type === "VariableDeclaration") {
          if (e2.left.declarations.length > 1)
            return S$2(e2, "SYNTAX", "ONLY1VAR");
          if (e2.left.declarations[0].init !== null)
            return S$2(e2, "SYNTAX", "CANNOTDECLAREVAL");
        } else if (e2.left.type !== "Identifier")
          return S$2(e2, "SYNTAX", "LEFTNOTVAR");
        return n2 = l$6(e2.right, t2), n2 !== "" ? n2 : (n2 = l$6(e2.body, t2), n2 !== "" ? n2 : "");
      case "ForStatement":
        return e2.test !== null && (n2 = l$6(e2.test, t2), n2 !== "") || (e2.init !== null && (n2 = l$6(e2.init, t2), n2 !== "") || e2.update !== null && (n2 = l$6(e2.update, t2), n2 !== "") || e2.body !== null && (n2 = l$6(e2.body, t2), n2 !== "")) ? n2 : "";
      case "ContinueStatement":
      case "EmptyStatement":
      case "BreakStatement":
        return "";
      case "IfStatement":
        return n2 = l$6(e2.test, t2), n2 !== "" || e2.consequent !== null && (n2 = l$6(e2.consequent, false), n2 !== "") || e2.alternate !== null && (n2 = l$6(e2.alternate, false), n2 !== "") ? n2 : "";
      case "BlockStatement": {
        const a2 = [];
        for (let t3 = 0; t3 < e2.body.length; t3++)
          e2.body[t3].type !== "EmptyStatement" && a2.push(e2.body[t3]);
        e2.body = a2;
        for (let r2 = 0; r2 < e2.body.length; r2++)
          if (n2 = l$6(e2.body[r2], t2), n2 !== "")
            return n2;
        return "";
      }
      case "FunctionDeclaration":
        return t2 === false ? S$2(e2, "SYNTAX", "GLOBALFUNCTIONSONLY") : e2.id.type !== "Identifier" ? S$2(e2, "SYNTAX", "FUNCTIONMUSTHAVEIDENTIFIER") : l$6(e2.body, false);
      case "ReturnStatement":
        return e2.argument !== null ? l$6(e2.argument, t2) : "";
      case "UpdateExpression":
        return e2.argument.type !== "Identifier" && e2.argument.type !== "MemberExpression" ? S$2(e2, "SYNTAX", "ASSIGNMENTTOVARSONLY") : l$6(e2.argument, t2);
      case "AssignmentExpression":
        if (e2.left.type !== "Identifier" && e2.left.type !== "MemberExpression")
          return S$2(e2, "SYNTAX", "ASSIGNMENTTOVARSONLY");
        if (n2 = l$6(e2.left, t2), n2 !== "")
          return n2;
        switch (e2.operator) {
          case "=":
          case "/=":
          case "*=":
          case "%=":
          case "+=":
          case "-=":
            break;
          default:
            return S$2(e2, "SYNTAX", "OPERATORNOTRECOGNISED");
        }
        return l$6(e2.right, false);
      case "ExpressionStatement":
        return e2.expression.type === "AssignmentExpression" || e2.expression.type, l$6(e2.expression, false);
      case "Identifier":
        n2 = "";
        break;
      case "MemberExpression":
        return n2 = l$6(e2.object, t2), n2 !== "" ? n2 : e2.computed === true ? l$6(e2.property, t2) : "";
      case "Literal":
      case "TemplateElement":
        return "";
      case "CallExpression":
        if (e2.callee.type !== "Identifier")
          return S$2(e2, "SYNTAX", "ONLYNODESSUPPORTED");
        n2 = "";
        for (let a2 = 0; a2 < e2.arguments.length; a2++)
          if (n2 = l$6(e2.arguments[a2], t2), n2 !== "")
            return n2;
        return "";
      case "UnaryExpression":
        n2 = l$6(e2.argument, t2);
        break;
      case "BinaryExpression":
        if (n2 = l$6(e2.left, t2), n2 !== "")
          return n2;
        if (n2 = l$6(e2.right, t2), n2 !== "")
          return n2;
        switch (e2.operator) {
          case "|":
          case "&":
          case ">>":
          case "<<":
          case ">>":
          case ">>>":
          case "^":
          case "==":
          case "!=":
          case "<":
          case "<=":
          case ">":
          case ">=":
          case "+":
          case "-":
          case "*":
          case "/":
          case "%":
            break;
          default:
            return S$2(e2, "SYNTAX", "OPERATORNOTRECOGNISED");
        }
        return "";
      case "LogicalExpression":
        if (n2 = l$6(e2.left, t2), n2 !== "")
          return n2;
        if (n2 = l$6(e2.right), n2 !== "")
          return n2;
        switch (e2.operator) {
          case "&&":
          case "||":
            break;
          default:
            return S$2(e2, "SYNTAX", "OPERATORNOTRECOGNISED");
        }
        return "";
      case "ConditionalExpression":
        return S$2(e2, "SYNTAX", "NOTSUPPORTED");
      case "ArrayExpression":
        n2 = "";
        for (let a2 = 0; a2 < e2.elements.length; a2++)
          if (n2 = l$6(e2.elements[a2], t2), n2 !== "")
            return n2;
        return n2;
      case "TemplateLiteral":
        n2 = "";
        for (let a2 = 0; a2 < e2.quasis.length; a2++)
          if (n2 = l$6(e2.quasis[a2], t2), n2 !== "")
            return n2;
        for (let a2 = 0; a2 < e2.expressions.length; a2++)
          if (n2 = l$6(e2.expressions[a2], t2), n2 !== "")
            return n2;
        return n2;
      case "ObjectExpression":
        n2 = "";
        for (let a2 = 0; a2 < e2.properties.length; a2++) {
          if (n2 = "", e2.properties[a2].key !== null && (e2.properties[a2].key.type !== "Literal" && e2.properties[a2].key.type !== "Identifier" && (n2 = S$2(e2, "SYNTAX", "OBJECTPROPERTYMUSTBESTRING")), e2.properties[a2].key.type === "Literal")) {
            const t3 = e2.properties[a2].key, r2 = "value" in t3 ? t3.value : null;
            typeof r2 == "string" || r2 instanceof String || (n2 = S$2(e2, "SYNTAX", "OBJECTPROPERTYMUSTBESTRING"));
          }
          if (n2 === "" && (n2 = l$6(e2.properties[a2], t2)), n2 !== "")
            return n2;
        }
        return n2;
      case "Property":
        return e2.key.type !== "Literal" && e2.key.type !== "Identifier" ? S$2(e2, "SYNTAX", "ONLYLITERAL") : (e2.key.type !== "Identifier" && (n2 = l$6(e2.key, t2), n2 !== "") || (n2 = l$6(e2.value, t2)), n2);
      default:
        return n2;
    }
    return n2;
  } catch (a2) {
    throw a2;
  }
}
function c$5(e2, t2) {
  let n2 = S$2(e2, "SYNTAX", "UNREOGNISED"), a2 = null, r2 = "";
  try {
    switch (e2.type) {
      case "VariableDeclarator": {
        if (e2.init !== null && e2.init.type === "FunctionExpression")
          return S$2(e2, "SYNTAX", "FUNCTIONVARIABLEDECLARATOR");
        const n3 = e2.init === null ? "" : c$5(e2.init, t2);
        return n3 !== "" ? n3 : (e2.id.type === "Identifier" && (t2.localScope === null ? t2.globalScope[e2.id.name.toLowerCase()] = { type: "any" } : t2.localScope[e2.id.name.toLowerCase()] = { type: "any" }), "");
      }
      case "FunctionDeclaration":
        return a2 = d$4(e2.id.name.toLowerCase(), e2), r2 = f$5(e2, t2), r2 !== "" ? r2 : t2.localScope !== null ? S$2(e2, "SYNTAX", "GLOBALFUNCTIONSONLY") : (a2.isnative = false, t2.globalScope[e2.id.name.toLowerCase()] = { type: "FormulaFunction", signature: [a2] }, "");
      case "VariableDeclaration":
        n2 = "";
        for (let a3 = 0; a3 < e2.declarations.length; a3++)
          if (n2 = c$5(e2.declarations[a3], t2), n2 !== "")
            return n2;
        return n2;
      case "IfStatement":
        return n2 = c$5(e2.test, t2), n2 !== "" ? n2 : e2.test.type === "AssignmentExpression" || e2.test.type === "UpdateExpression" ? S$2(e2.test, "SYNTAX", "CANNOT_USE_ASSIGNMENT_IN_CONDITION") : e2.consequent !== null && (n2 = c$5(e2.consequent, t2), n2 !== "") || e2.alternate !== null && (n2 = c$5(e2.alternate, t2), n2 !== "") ? n2 : "";
      case "EmptyStatement":
        return "";
      case "BlockStatement":
        for (let a3 = 0; a3 < e2.body.length; a3++)
          if (n2 = c$5(e2.body[a3], t2), n2 !== "")
            return n2;
        return "";
      case "ReturnStatement":
        return e2.argument !== null ? c$5(e2.argument, t2) : "";
      case "ForInStatement":
        if (e2.left.type === "VariableDeclaration") {
          if (e2.left.declarations.length > 1)
            return S$2(e2, "SYNTAX", "ONLY1VAR");
          if (e2.left.declarations[0].init !== null)
            return S$2(e2, "SYNTAX", "CANNOTDECLAREVAL");
        } else if (e2.left.type !== "Identifier")
          return S$2(e2, "SYNTAX", "LEFTNOTVAR");
        return n2 = c$5(e2.left, t2), n2 !== "" ? n2 : (n2 = c$5(e2.right, t2), n2 !== "" ? n2 : (n2 = c$5(e2.body, t2), n2 !== "" ? n2 : ""));
      case "ForStatement":
        return e2.init !== null && (n2 = c$5(e2.init, t2), n2 !== "") || (e2.test !== null && (n2 = c$5(e2.test, t2), n2 !== "") || e2.body !== null && (n2 = c$5(e2.body, t2), n2 !== "") || e2.update !== null && (n2 = c$5(e2.update, t2), n2 !== "")) ? n2 : "";
      case "BreakStatement":
      case "ContinueStatement":
        return "";
      case "UpdateExpression": {
        if (e2.argument.type !== "Identifier" && e2.argument.type !== "MemberExpression")
          return S$2(e2, "SYNTAX", "ASSIGNMENTTOVARSONLY");
        let n3 = false;
        return e2.argument.type === "MemberExpression" ? c$5(e2.argument, t2) : (t2.localScope !== null && t2.localScope[e2.argument.name.toLowerCase()] !== void 0 && (n3 = true), t2.globalScope[e2.argument.name.toLowerCase()] !== void 0 && (n3 = true), n3 === false ? "Identifier " + e2.argument.name + " has not been declared." : "");
      }
      case "AssignmentExpression": {
        if (e2.left.type !== "Identifier" && e2.left.type !== "MemberExpression")
          return S$2(e2, "SYNTAX", "ASSIGNMENTTOVARSONLY");
        let n3 = c$5(e2.right, t2);
        if (n3 !== "")
          return n3;
        let a3 = false;
        return e2.left.type === "MemberExpression" ? (n3 = c$5(e2.left, t2), n3 !== "" ? n3 : "") : (t2.localScope !== null && t2.localScope[e2.left.name.toLowerCase()] !== void 0 && (a3 = true), t2.globalScope[e2.left.name.toLowerCase()] !== void 0 && (a3 = true), a3 === false ? "Identifier " + e2.left.name + " has not been declared." : "");
      }
      case "ExpressionStatement":
        return e2.expression.type === "AssignmentExpression" || e2.expression.type, c$5(e2.expression, t2);
      case "Identifier": {
        const a3 = e2.name.toLowerCase();
        if (t2.localScope !== null && t2.localScope[a3] !== void 0)
          return "";
        n2 = t2.globalScope[a3] !== void 0 ? "" : S$2(e2, "SYNTAX", "VARIABLENOTFOUND");
        break;
      }
      case "MemberExpression":
        return n2 = c$5(e2.object, t2), n2 !== "" ? n2 : e2.computed === true ? c$5(e2.property, t2) : "";
      case "Literal":
      case "TemplateElement":
        return "";
      case "CallExpression": {
        if (e2.callee.type !== "Identifier")
          return S$2(e2, "SYNTAX", "ONLYNODESSUPPORTED");
        n2 = "";
        for (let r3 = 0; r3 < e2.arguments.length; r3++)
          if (n2 = c$5(e2.arguments[r3], t2), n2 !== "")
            return n2;
        const a3 = i$6(e2.callee.name, e2.arguments, t2);
        a3 === -1 && (n2 = S$2(e2, "SYNTAX", "NOTFOUND")), a3 === -2 && (n2 = S$2(e2, "SYNTAX", "WRONGSIGNATURE"));
        break;
      }
      case "UnaryExpression":
        n2 = c$5(e2.argument, t2);
        break;
      case "BinaryExpression":
        return n2 = c$5(e2.left, t2), n2 !== "" ? n2 : (n2 = c$5(e2.right, t2), n2 !== "" ? n2 : "");
      case "LogicalExpression":
        return n2 = c$5(e2.left, t2), n2 !== "" ? n2 : e2.left.type === "AssignmentExpression" || e2.left.type === "UpdateExpression" ? S$2(e2.left, "SYNTAX", "CANNOT_USE_ASSIGNMENT_IN_CONDITION") : (n2 = c$5(e2.right, t2), n2 !== "" ? n2 : e2.right.type === "AssignmentExpression" || e2.right.type === "UpdateExpression" ? S$2(e2.right, "SYNTAX", "CANNOT_USE_ASSIGNMENT_IN_CONDITION") : "");
      case "ConditionalExpression":
        return S$2(e2, "SYNTAX", "NOTSUPPORTED");
      case "ArrayExpression":
        n2 = "";
        for (let a3 = 0; a3 < e2.elements.length; a3++)
          if (n2 = c$5(e2.elements[a3], t2), n2 !== "")
            return n2;
        return n2;
      case "TemplateLiteral":
        n2 = "";
        for (let a3 = 0; a3 < e2.quasis.length; a3++)
          if (n2 = c$5(e2.quasis[a3], t2), n2 !== "")
            return n2;
        for (let a3 = 0; a3 < e2.expressions.length; a3++)
          if (n2 = c$5(e2.expressions[a3], t2), n2 !== "")
            return n2;
        return n2;
      case "ObjectExpression":
        n2 = "";
        for (let a3 = 0; a3 < e2.properties.length; a3++) {
          if (n2 = "", e2.properties[a3].key !== null && (e2.properties[a3].key.type !== "Literal" && e2.properties[a3].key.type !== "Identifier" && (n2 = S$2(e2, "SYNTAX", "OBJECTPROPERTYMUSTBESTRING")), e2.properties[a3].key.type === "Literal")) {
            const t3 = e2.properties[a3].key, r3 = "value" in t3 ? t3.value : null;
            typeof r3 == "string" || r3 instanceof String || (n2 = S$2(e2, "SYNTAX", "OBJECTPROPERTYMUSTBESTRING"));
          }
          if (n2 === "" && (n2 = c$5(e2.properties[a3], t2)), n2 !== "")
            return n2;
        }
        return n2;
      case "Property":
        return e2.key.type !== "Literal" && e2.key.type !== "Identifier" ? S$2(e2, "SYNTAX", "ONLYLITERAL") : (e2.key.type !== "Identifier" && (n2 = c$5(e2.key, t2), n2 !== "") || (n2 = c$5(e2.value, t2)), n2);
      case "Program":
      case "FunctionExpression":
      case "NewExpression":
      case "DoWhileStatement":
      case "TemplateElement":
        return n2;
      default:
        return h$6(e2), n2;
    }
    return n2;
  } catch (s2) {
    throw s2;
  }
}
function m$3(e2, t2) {
  let n2 = false;
  const a2 = t2.toLowerCase();
  return o$4(e2, (e3) => !n2 && (e3.type === "Identifier" && e3.name && e3.name.toLowerCase() === a2 && (n2 = true), true)), n2;
}
function p$3(e2, t2) {
  let n2 = false;
  const a2 = t2.toLowerCase();
  return o$4(e2, (e3) => !n2 && (e3.type !== "CallExpression" || e3.callee.type !== "Identifier" || !e3.callee.name || e3.callee.name.toLowerCase() !== a2 || (n2 = true, false))), n2;
}
function u$5(e2) {
  const t2 = [];
  return o$4(e2, (e3) => e3.type !== "MemberExpression" || e3.object.type !== "Identifier" || (e3.computed === false && e3.object && e3.object.name && e3.property && e3.property.type === "Identifier" && e3.property.name ? t2.push(e3.object.name.toLowerCase() + "." + e3.property.name.toLowerCase()) : e3.object && e3.object.name && e3.property && e3.property.type === "Literal" && typeof e3.property.value == "string" && t2.push(e3.object.name.toLowerCase() + "." + e3.property.value.toString().toLowerCase()), false)), t2;
}
function d$4(e2, t2) {
  const n2 = [];
  if (t2.params !== void 0 && t2.params !== null)
    for (let a2 = 0; a2 < t2.params.length; a2++)
      n2.push("any");
  return { name: e2, return: "any", params: n2 };
}
function f$5(e2, t2) {
  const n2 = { globalScope: t2.globalScope, localScope: {} };
  for (let a2 = 0; a2 < e2.params.length; a2++) {
    const t3 = e2.params[a2].name;
    n2.localScope[t3.toLowerCase()] = { type: "any" };
  }
  return c$5(e2.body, n2);
}
function y$4(e2, t2, n2, a2) {
  const r2 = {};
  e2 == null && (e2 = {}), n2 == null && (n2 = {}), r2.infinity = { type: "any" }, r2.textformatting = { type: "any" }, r2.pi = { type: "any" };
  for (const i2 in t2)
    a2 === "sync" && t2[i2].min !== void 0 ? r2[i2] = { type: "FormulaFunction", signature: { min: t2[i2].min, max: t2[i2].max } } : a2 !== "sync" && t2[i2].fmin !== void 0 && (r2[i2] = { type: "FormulaFunction", signature: { min: t2[i2].fmin, max: t2[i2].fmax } });
  for (let i2 = 0; i2 < n2.length; i2++) {
    const e3 = n2[i2];
    r2[e3.name] = { type: "FormulaFunction", signature: e3 };
  }
  for (const i2 in e2)
    r2[i2] = e2[i2], r2[i2].type = "any";
  return r2;
}
function N$4(t2, n2, a2 = "async", r2 = e$9) {
  const i2 = { globalScope: y$4(n2.vars, r2, n2.customFunctions, a2), localScope: null };
  return c$5(t2.body[0].body, i2);
}
function x$5(e2) {
  return e2.body[0].body.type !== "BlockStatement" ? "Invalid formula content." : l$6(e2.body[0].body);
}
function S$2(e2, t2, n2) {
  let a2 = "";
  switch (t2) {
    case "SYNTAX":
      a2 = "Syntax Error: ";
      break;
    case "RUNTIME":
      a2 = "Runtime Error: ";
      break;
    default:
      a2 = "Syntax Error: ";
  }
  try {
    switch (e2.type) {
      case "IfStatement":
        switch (n2) {
          case "CANNOT_USE_ASSIGNMENT_IN_CONDITION":
            a2 += " Assignments not be made in logical tests";
            break;
          case "CANNOT_USE_NONBOOLEAN_IN_CONDITION":
            a2 += " Non Boolean used as Condition";
        }
        break;
      case "UpdateExpression":
      case "AssignmentExpression":
        switch (n2) {
          case "CANNOT_USE_ASSIGNMENT_IN_CONDITION":
            a2 += " Assignments not be made in logical tests";
            break;
          case "ASSIGNMENTTOVARSONLY":
            a2 += " Assignments can only be made to identifiers";
        }
        break;
      case "ExpressionStatement":
        a2 += " Assignments can only be made to identifiers";
        break;
      case "FunctionDeclaration":
        switch (n2) {
          case "GLOBALFUNCTIONSONLY":
            a2 += " Functions cannot be declared as variables";
            break;
          case "FUNCTIONMUSTHAVEIDENTIFIER":
            a2 += " Function Definition must have an identifier";
        }
        break;
      case "VariableDeclaration":
        a2 += " Only 1 variable can be declared at a time";
        break;
      case "VariableDeclarator":
        switch (n2) {
          case "FUNCTIONVARIABLEDECLARATOR":
            a2 += " Functions cannot be declared as variables";
            break;
          case "VARIABLEMUSTHAVEIDENTIFIER":
            a2 += " Variable Definition must have an identifier";
        }
        break;
      case "Identifier":
        a2 += " Identifier Not Found. ", a2 += e2.name;
        break;
      case "ObjectExpression":
        switch (n2) {
          case "OBJECTPROPERTYMUSTBESTRING":
            a2 += " Property name must be a string";
        }
        break;
      case "ForStatement":
        switch (n2) {
          case "CANNOT_USE_NONBOOLEAN_IN_CONDITION":
            a2 += " Non Boolean used as Condition";
        }
        break;
      case "ForInStatement":
        switch (n2) {
          case "ONLY1VAR":
            a2 += " Can only declare 1 var for use with IN";
            break;
          case "CANNOTDECLAREVAL":
            a2 += " Can only declare value for use with IN";
            break;
          case "LEFTNOVAR":
            a2 += "Must provide a variable to iterate with.";
            break;
          case "VARIABLENOTDECLARED":
            a2 += "Variable must be declared before it is used..";
            break;
          case "CANNOTITERATETHISTYPE":
            a2 += "This type cannot be used in an IN loop";
        }
        break;
      case "MemberExpression":
        switch (n2) {
          case "PROPERTYNOTFOUND":
            a2 += "Cannot find member property. ", a2 += e2.computed === false && e2.property.type === "Identifier" ? e2.property.name : "";
            break;
          case "OUTOFBOUNDS":
            a2 += "Out of Bounds. ", a2 += e2.computed === false && e2.property.type === "Identifier" ? e2.property.name : "";
            break;
          case "NOTFOUND":
            a2 += "Cannot call member method on null. ", a2 += e2.computed === false && e2.property.type === "Identifier" ? e2.property.name : "";
            break;
          case "INVALIDTYPE":
            a2 += "Cannot call member property on object of this type. ", a2 += e2.computed === false && e2.property.type === "Identifier" ? e2.property.name : "";
        }
        break;
      case "Property":
        switch (n2) {
          case "ONLYLITERAL":
            a2 += "Property names must be literals or identifiers";
        }
        break;
      case "Literal":
        break;
      case "CallExpression":
        switch (n2) {
          case "WRONGSIGNATURE":
            a2 += "Function signature does not match: ", a2 += e2.callee.type === "Identifier" ? e2.callee.name : "";
            break;
          case "ONLYNODESUPPORTED":
            a2 += "Functions must be declared.", a2 += e2.callee.type === "Identifier" ? e2.callee.name : "";
            break;
          case "NOTAFUNCTION":
            a2 += "Not a Function: ", a2 += e2.callee.type === "Identifier" ? e2.callee.name : "";
            break;
          case "NOTFOUND":
            a2 += "Function Not Found: " + (e2.callee.type === "Identifier" ? e2.callee.name : "");
        }
        break;
      case "UnaryExpression":
        switch (n2) {
          case "NOTSUPPORTEDUNARYOPERATOR":
            a2 += "Operator " + e2.operator + " not allowed in this context. Only ! can be used with boolean, and - with a number";
            break;
          case "NOTSUPPORTEDTYPE":
            a2 += "Unary operator " + e2.operator + " cannot be used with this argument.";
        }
      case "BinaryExpression":
        switch (n2) {
          case "OPERATORNOTRECOGNISED":
            a2 += "Binary Operator not recognised " + e2.operator;
        }
        break;
      case "LogicalExpression":
        switch (n2) {
          case "ONLYBOOLEAN":
            a2 += "Operator " + e2.operator + " cannot be used. Only || or && are allowed values";
            break;
          case "ONLYORORAND":
            a2 += "Logical Expression " + e2.operator + " being applied to parameters that are not boolean.";
        }
        break;
      case "ConditionalExpression":
        a2 += "Conditional statements not supported.";
        break;
      case "ArrayExpression":
        switch (n2) {
          case "FUNCTIONCONTEXTILLEGAL":
            a2 += " Cannot Put Function inside Array.";
        }
        break;
      default:
        a2 += "Expression contains unrecognised code structures.";
    }
  } catch (r2) {
    throw r2;
  }
  return a2;
}
function E$4(e2, t2, n2) {
  return { line: e2.loc.start.line, character: e2.loc.start.column, reason: S$2(e2, t2, n2) };
}
function T$3(e2, t2, n2, a2) {
  const r2 = { globalScope: t2.globalScope, localScope: {} };
  for (let i2 = 0; i2 < e2.params.length; i2++) {
    const t3 = e2.params[i2].name;
    r2.localScope[t3.toLowerCase()] = { type: "any" };
  }
  b$5(e2.body, r2, n2, a2, false);
}
function b$5(e2, t2, n2, a2, r2 = true) {
  if (e2 === null)
    throw new Error("Unnexpexted Expression Syntax");
  let s2 = null;
  try {
    switch (e2.type) {
      case "VariableDeclarator":
        return e2.init !== null && e2.init.type === "FunctionExpression" ? void a2.push(E$4(e2, "SYNTAX", "FUNCTIONVARIABLEDECLARATOR")) : (e2.id.type !== "Identifier" ? a2.push(E$4(e2, "SYNTAX", "VARIABLEMUSTHAVEIDENTIFIER")) : (t2.localScope !== null ? t2.localScope[e2.id.name.toLowerCase()] : t2.globalScope[e2.id.name.toLowerCase()], t2.localScope === null ? t2.globalScope[e2.id.name.toLowerCase()] = { type: "any" } : t2.localScope[e2.id.name.toLowerCase()] = { type: "any" }), void (e2.init !== null && b$5(e2.init, t2, n2, a2, r2)));
      case "FunctionDeclaration":
        return r2 === false && a2.push(E$4(e2, "SYNTAX", "GLOBALFUNCTIONSONLY")), e2.id.type !== "Identifier" && a2.push(E$4(e2, "SYNTAX", "FUNCTIONMUSTHAVEIDENTIFIER")), s2 = d$4("", e2), T$3(e2, t2, n2, a2), t2.localScope !== null && a2.push(E$4(e2, "SYNTAX", "GLOBALFUNCTIONSONLY")), s2.isnative = false, void (e2.id.type === "Identifier" && (t2.globalScope[e2.id.name.toLowerCase()] = { type: "FormulaFunction", signature: [s2] }));
      case "VariableDeclaration":
        for (let i2 = 0; i2 < e2.declarations.length; i2++)
          b$5(e2.declarations[i2], t2, n2, a2, r2);
        return;
      case "IfStatement":
        return e2.test !== null && (b$5(e2.test, t2, n2, a2, r2), e2.test.type !== "AssignmentExpression" && e2.test.type !== "UpdateExpression" || a2.push(E$4(e2.test, "SYNTAX", "CANNOT_USE_ASSIGNMENT_IN_CONDITION"))), e2.consequent !== null && b$5(e2.consequent, t2, n2, a2, r2), void (e2.alternate !== null && b$5(e2.alternate, t2, n2, a2, r2));
      case "EmptyStatement":
        return;
      case "BlockStatement":
        if (e2.body !== null)
          for (let i2 = 0; i2 < e2.body.length; i2++)
            b$5(e2.body[i2], t2, n2, a2, r2);
        return;
      case "ReturnStatement":
        return void (e2.argument !== null && b$5(e2.argument, t2, n2, a2, r2));
      case "ForInStatement":
        return e2.left.type === "VariableDeclaration" ? (e2.left.declarations.length > 1 && a2.push(E$4(e2, "SYNTAX", "ONLY1VAR")), e2.left.declarations[0].init !== null && a2.push(E$4(e2, "SYNTAX", "CANNOTDECLAREVAL"))) : e2.left.type !== "Identifier" && a2.push(E$4(e2, "SYNTAX", "LEFTNOTVAR")), b$5(e2.left, t2, n2, a2, r2), b$5(e2.right, t2, n2, a2, r2), void b$5(e2.body, t2, n2, a2, r2);
      case "ForStatement":
        return e2.init !== null && b$5(e2.init, t2, n2, a2, r2), e2.test !== null && b$5(e2.test, t2, n2, a2, r2), e2.body !== null && b$5(e2.body, t2, n2, a2, r2), void (e2.update !== null && b$5(e2.update, t2, n2, a2, r2));
      case "BreakStatement":
      case "ContinueStatement":
        return;
      case "UpdateExpression":
        if (e2.argument.type !== "Identifier" && e2.argument.type !== "MemberExpression")
          a2.push(E$4(e2, "SYNTAX", "ASSIGNMENTTOVARSONLY"));
        else {
          if (e2.argument.type === "Identifier") {
            let r3 = false;
            n2 === false && (t2.localScope !== null && t2.localScope[e2.argument.name.toLowerCase()] !== void 0 && (r3 = true), t2.globalScope[e2.argument.name.toLowerCase()] !== void 0 && (r3 = true), r3 === false && a2.push({ line: e2 === null ? 0 : e2.loc.start.line, character: e2 === null ? 0 : e2.loc.start.column, reason: "Identifier " + e2.argument.name + " has not been declared." }));
          }
          e2.argument.type === "MemberExpression" && b$5(e2.argument, t2, n2, a2, r2);
        }
        return;
      case "AssignmentExpression": {
        switch (e2.left.type !== "Identifier" && e2.left.type !== "MemberExpression" && a2.push(E$4(e2, "SYNTAX", "ASSIGNMENTTOVARSONLY")), e2.operator) {
          case "=":
          case "/=":
          case "*=":
          case "%=":
          case "+=":
          case "-=":
            break;
          default:
            a2.push(E$4(e2, "SYNTAX", "OPERATORNOTRECOGNISED"));
        }
        b$5(e2.right, t2, n2, a2, r2);
        let i2 = false;
        return e2.left.type === "Identifier" && (t2.localScope !== null && t2.localScope[e2.left.name.toLowerCase()] !== void 0 && (i2 = true), t2.globalScope[e2.left.name.toLowerCase()] !== void 0 && (i2 = true), n2 === false && i2 === false && a2.push({ line: e2 === null ? 0 : e2.loc.start.line, character: e2 === null ? 0 : e2.loc.start.column, reason: "Identifier " + e2.left.name + " has not been declared." })), void (e2.left.type === "MemberExpression" && b$5(e2.left, t2, n2, a2, r2));
      }
      case "ExpressionStatement":
        return e2.expression.type === "AssignmentExpression" || e2.expression.type, void b$5(e2.expression, t2, n2, a2, r2);
      case "Identifier": {
        const r3 = e2.name.toLowerCase();
        if (t2.localScope !== null && t2.localScope[r3] !== void 0)
          return;
        if (t2.globalScope[r3] !== void 0)
          return;
        n2 === false && a2.push(E$4(e2, "SYNTAX", "VARIABLENOTFOUND"));
        break;
      }
      case "MemberExpression":
        return b$5(e2.object, t2, n2, a2, r2), void (e2.computed === true && b$5(e2.property, t2, n2, a2, r2));
      case "Literal":
      case "TemplateElement":
        return;
      case "CallExpression":
        e2.callee.type !== "Identifier" && a2.push(E$4(e2, "SYNTAX", "ONLYNODESSUPPORTED"));
        for (let i2 = 0; i2 < e2.arguments.length; i2++)
          b$5(e2.arguments[i2], t2, n2, a2, r2);
        if (e2.callee.type === "Identifier") {
          const r3 = i$6(e2.callee.name, e2.arguments, t2);
          n2 === false && r3 === -1 && a2.push(E$4(e2, "SYNTAX", "NOTFOUND")), r3 === -2 && a2.push(E$4(e2, "SYNTAX", "WRONGSIGNATURE"));
        }
        return;
      case "UnaryExpression":
        return void b$5(e2.argument, t2, n2, a2, r2);
      case "BinaryExpression":
        switch (b$5(e2.left, t2, n2, a2, r2), b$5(e2.right, t2, n2, a2, r2), e2.operator) {
          case "==":
          case "!=":
          case "<":
          case "<=":
          case ">":
          case ">=":
          case "+":
          case "-":
          case "*":
          case "/":
          case "%":
          case "&":
          case "|":
          case "^":
          case "<<":
          case ">>":
          case ">>>":
            break;
          default:
            a2.push(E$4(e2, "SYNTAX", "OPERATORNOTRECOGNISED"));
        }
        return;
      case "LogicalExpression":
        switch (e2.operator) {
          case "&&":
          case "||":
            break;
          default:
            a2.push(E$4(e2, "SYNTAX", "OPERATORNOTRECOGNISED"));
        }
        return b$5(e2.left, t2, n2, a2, r2), e2.left.type !== "AssignmentExpression" && e2.left.type !== "UpdateExpression" || a2.push(E$4(e2, "SYNTAX", "CANNOT_USE_ASSIGNMENT_IN_CONDITION")), b$5(e2.right, t2, n2, a2, r2), void (e2.right.type !== "AssignmentExpression" && e2.right.type !== "UpdateExpression" || a2.push(E$4(e2, "SYNTAX", "CANNOT_USE_ASSIGNMENT_IN_CONDITION")));
      case "ConditionalExpression":
        a2.push(E$4(e2, "SYNTAX", "NOTSUPPORTED"));
        break;
      case "ArrayExpression":
        for (let i2 = 0; i2 < e2.elements.length; i2++)
          b$5(e2.elements[i2], t2, n2, a2, r2);
        return;
      case "TemplateLiteral":
        for (let i2 = 0; i2 < e2.quasis.length; i2++)
          b$5(e2.quasis[i2], t2, n2, a2, r2);
        for (let i2 = 0; i2 < e2.expressions.length; i2++)
          b$5(e2.expressions[i2], t2, n2, a2, r2);
        return;
      case "ObjectExpression":
        for (let i2 = 0; i2 < e2.properties.length; i2++)
          b$5(e2.properties[i2], t2, n2, a2, r2);
        return;
      case "Property":
        return e2.key.type !== "Literal" && e2.key.type !== "Identifier" && a2.push(E$4(e2, "SYNTAX", "ONLYLITERAL")), e2.key.type === "Literal" && b$5(e2.key, t2, n2, a2, r2), void b$5(e2.value, t2, n2, a2, r2);
      default:
        a2.push(E$4(e2, "SYNTAX", "UNRECOGNISED"));
    }
    return;
  } catch (o2) {
    a2.push({ line: e2 === null ? 0 : e2.loc.start.line, character: e2 === null ? 0 : e2.loc.start.column, reason: "Unnexpected Syntax" });
  }
}
function O$3(t2, n2, a2, r2 = "async", i2 = e$9) {
  const s2 = [];
  if (t2.body[0].body.type !== "BlockStatement")
    return [{ line: 0, character: 0, reason: "Invalid Body" }];
  n2 == null && (n2 = { vars: {}, customFunctions: [] });
  const o2 = { globalScope: y$4(n2.vars, i2, n2.customFunctions, r2), localScope: null };
  try {
    b$5(t2.body[0].body, o2, a2, s2);
  } catch (l2) {
  }
  return s2;
}
function A$4(e2) {
  const t2 = [];
  return o$4(e2, (e3) => (e3.type === "CallExpression" && e3.callee.type === "Identifier" && t2.push(e3.callee.name.toLowerCase()), true)), t2;
}
function g$4(e2, a2 = []) {
  let r2 = null;
  if (e2.usesFeatureSet === void 0) {
    r2 === null && (r2 = A$4(e2)), e2.usesFeatureSet = false;
    for (let n2 = 0; n2 < r2.length; n2++)
      t$1.indexOf(r2[n2]) > -1 && (e2.usesFeatureSet = true, e2.isAsync = true);
    if (e2.usesFeatureSet === false && a2 && a2.length > 0) {
      for (const t2 of a2)
        if (m$3(e2, t2)) {
          e2.usesFeatureSet = true, e2.isAsync = true;
          break;
        }
    }
  }
  if (e2.usesGeometry === void 0) {
    e2.usesGeometry = false, r2 === null && (r2 = A$4(e2));
    for (let t2 = 0; t2 < r2.length; t2++)
      n$3.indexOf(r2[t2]) > -1 && (e2.usesGeometry = true);
  }
}
function h$6(e2) {
}
class s$7 extends h$7 {
  constructor(t2) {
    super(), this.immutable = false, this.setField("url", t2), this.immutable = true;
  }
}
class e$8 extends h$7 {
  constructor(t2, e2, i2, s2, l2) {
    super(), this.attachmentUrl = l2, this.immutable = false, this.setField("id", t2), this.setField("name", e2), this.setField("contenttype", i2), this.setField("size", s2), this.immutable = true;
  }
}
function h$5(h2, l2) {
  h2.array = function(o2, i2) {
    return l2(o2, i2, function(o3, i3, a2) {
      J$3(a2, 1, 2);
      const f2 = X$3(a2[0]);
      if (isNaN(f2) || A$5(f2) === false)
        throw new Error("Invalid Parameter");
      const h3 = O$5(a2[1], null), l3 = new Array(f2);
      return l3.fill(h3), l3;
    });
  }, h2.front = function(n2, t2) {
    return l2(n2, t2, function(n3, t3, e2) {
      if (J$3(e2, 1, 1), E$6(e2[0])) {
        if (e2[0].length() <= 0)
          throw new Error("Array is empty");
        return e2[0].get(0);
      }
      if (Z$2(e2[0])) {
        if (e2[0].length <= 0)
          throw new Error("Array is empty");
        return e2[0][0];
      }
      throw new Error("Invalid Parameter");
    });
  }, h2.back = function(n2, t2) {
    return l2(n2, t2, function(n3, t3, e2) {
      if (J$3(e2, 1, 1), E$6(e2[0])) {
        if (e2[0].length() <= 0)
          throw new Error("Array is empty");
        return e2[0].get(e2[0].length() - 1);
      }
      if (Z$2(e2[0])) {
        if (e2[0].length <= 0)
          throw new Error("Array is empty");
        return e2[0][e2[0].length - 1];
      }
      throw new Error("Invalid Parameter");
    });
  }, h2.push = function(n2, t2) {
    return l2(n2, t2, function(n3, t3, e2) {
      if (J$3(e2, 1, 2), Z$2(e2[0]))
        return e2[0][e2[0].length] = e2[1], e2[0].length;
      throw new Error("Invalid Parameter");
    });
  }, h2.pop = function(n2, t2) {
    return l2(n2, t2, function(n3, t3, e2) {
      if (J$3(e2, 1, 1), Z$2(e2[0])) {
        if (e2[0].length <= 0)
          throw new Error("Array is empty");
        const r2 = e2[0][e2[0].length - 1];
        return e2[0].length = e2[0].length - 1, r2;
      }
      throw new Error("Invalid Parameter");
    });
  }, h2.erase = function(e2, o2) {
    return l2(e2, o2, function(e3, o3, f2) {
      if (J$3(f2, 2, 2), Z$2(f2[0])) {
        let r2 = X$3(f2[1]);
        if (isNaN(r2) || A$5(r2) === false)
          throw new Error("Invalid Parameter");
        const e4 = f2[0];
        if (e4.length <= 0)
          throw new Error("Array is empty");
        if (r2 < 0 && (r2 = e4.length + r2), r2 < 0)
          throw new Error("Element not found");
        if (r2 >= e4.length)
          throw new Error("Index is greater than array");
        return e4.splice(r2, 1), b$8;
      }
      throw new Error("Invalid Parameter");
    });
  }, h2.insert = function(e2, o2) {
    return l2(e2, o2, function(e3, o3, f2) {
      if (J$3(f2, 3, 3), Z$2(f2[0])) {
        const r2 = X$3(f2[1]);
        if (isNaN(r2) || A$5(r2) === false)
          throw new Error("Invalid Parameter");
        const e4 = f2[2], o4 = f2[0];
        if (r2 > o4.length)
          throw new Error("Index is greater than array");
        if (r2 < 0 && r2 < -1 * o4.length)
          throw new Error("Index is greater than array");
        return r2 === o4.length ? (o4[r2] = e4, b$8) : (o4.splice(r2, 0, e4), b$8);
      }
      throw new Error("Invalid Parameter");
    });
  }, h2.resize = function(o2, f2) {
    return l2(o2, f2, function(o3, f3, h3) {
      if (J$3(h3, 2, 3), Z$2(h3[0])) {
        const r2 = X$3(h3[1]);
        if (isNaN(r2) || A$5(r2) === false)
          throw new Error("Invalid Parameter");
        if (r2 < 0)
          throw new Error("Size cannot be negative");
        const o4 = O$5(h3[2], null), i2 = h3[0];
        if (i2.length >= r2)
          return i2.length = r2, b$8;
        const f4 = i2.length;
        i2.length = r2;
        for (let n2 = f4; n2 < i2.length; n2++)
          i2[n2] = o4;
        return b$8;
      }
      throw new Error("Invalid Parameter");
    });
  }, h2.includes = function(n2, t2) {
    return l2(n2, t2, function(n3, t3, e2) {
      if (J$3(e2, 2, 2), Z$2(e2[0])) {
        const r2 = e2[1];
        return e2[0].findIndex((n4) => B$3(n4, r2)) > -1;
      }
      if (E$6(e2[0])) {
        const r2 = e2[1];
        return e2[0].toArray().findIndex((n4) => B$3(n4, r2)) > -1;
      }
      throw new Error("Invalid Parameter");
    });
  }, h2.slice = function(a2, f2) {
    return l2(a2, f2, function(a3, f3, h3) {
      if (J$3(h3, 1, 3), Z$2(h3[0])) {
        const r2 = X$3(O$5(h3[1], 0)), o2 = X$3(O$5(h3[2], h3[0].length));
        if (isNaN(r2) || A$5(r2) === false)
          throw new Error("Invalid Parameter");
        if (isNaN(o2) || A$5(o2) === false)
          throw new Error("Invalid Parameter");
        return h3[0].slice(r2, o2);
      }
      if (E$6(h3[0])) {
        const r2 = h3[0], o2 = X$3(O$5(h3[1], 0)), i2 = X$3(O$5(h3[2], r2.length()));
        if (isNaN(o2) || A$5(o2) === false)
          throw new Error("Invalid Parameter");
        if (isNaN(i2) || A$5(i2) === false)
          throw new Error("Invalid Parameter");
        return r2.toArray().slice(o2, i2);
      }
      throw new Error("Invalid Parameter");
    });
  }, h2.splice = function(r2, n2) {
    return l2(r2, n2, function(r3, n3, t2) {
      const e2 = [];
      for (let a2 = 0; a2 < t2.length; a2++)
        Z$2(t2[a2]) ? e2.push(...t2[a2]) : E$6(t2[a2]) ? e2.push(...t2[a2].toArray()) : e2.push(t2[a2]);
      return e2;
    });
  };
}
function a$4(e2) {
  const n2 = new Date(e2.getTime()), t2 = n2.getFullYear(), u2 = new Date(0);
  u2.setFullYear(t2 + 1, 0, 4), u2.setHours(0, 0, 0, 0);
  const r2 = i$5(u2), s2 = new Date(0);
  s2.setFullYear(t2, 0, 4), s2.setHours(0, 0, 0, 0);
  const o2 = i$5(s2);
  return n2.getTime() >= r2.getTime() ? t2 + 1 : n2.getTime() >= o2.getTime() ? t2 : t2 - 1;
}
function i$5(e2) {
  const n2 = 1, t2 = new Date(e2.getTime()), u2 = t2.getDay(), r2 = (u2 < n2 ? 7 : 0) + u2 - n2;
  return t2.setDate(t2.getDate() - r2), t2.setHours(0, 0, 0, 0), t2;
}
function l$5(e2) {
  const n2 = a$4(e2), t2 = new Date(0);
  t2.setFullYear(n2, 0, 4), t2.setHours(0, 0, 0, 0);
  return i$5(t2);
}
function f$4(e2) {
  return e2 === null ? e2 : isNaN(e2.getTime()) ? null : e2;
}
function d$3(d2, g2) {
  d2.today = function(n2, t2) {
    return g2(n2, t2, function(n3, t3, u2) {
      J$3(u2, 0, 0);
      const r2 = new Date();
      return r2.setHours(0, 0, 0, 0), r2;
    });
  }, d2.now = function(n2, t2) {
    return g2(n2, t2, function(n3, t3, u2) {
      J$3(u2, 0, 0);
      return new Date();
    });
  }, d2.timestamp = function(n2, t2) {
    return g2(n2, t2, function(n3, t3, u2) {
      J$3(u2, 0, 0);
      let r2 = new Date();
      return r2 = new Date(r2.getUTCFullYear(), r2.getUTCMonth(), r2.getUTCDate(), r2.getUTCHours(), r2.getUTCMinutes(), r2.getUTCSeconds(), r2.getUTCMilliseconds()), r2;
    });
  }, d2.toutc = function(t2, u2) {
    return g2(t2, u2, function(t3, u3, r2) {
      J$3(r2, 1, 1);
      const s2 = Y$2(r2[0]);
      return s2 === null ? null : new Date(s2.getUTCFullYear(), s2.getUTCMonth(), s2.getUTCDate(), s2.getUTCHours(), s2.getUTCMinutes(), s2.getUTCSeconds(), s2.getUTCMilliseconds());
    });
  }, d2.tolocal = function(u2, r2) {
    return g2(u2, r2, function(u3, r3, s2) {
      J$3(s2, 1, 1);
      const o2 = Y$2(s2[0]);
      return o2 === null ? null : de$2.Moment.utc([o2.getFullYear(), o2.getMonth(), o2.getDate(), o2.getHours(), o2.getMinutes(), o2.getSeconds(), o2.getMilliseconds()]).toDate();
    });
  }, d2.day = function(t2, u2) {
    return g2(t2, u2, function(t3, u3, r2) {
      J$3(r2, 1, 1);
      const s2 = Y$2(r2[0]);
      return s2 === null ? NaN : s2.getDate();
    });
  }, d2.month = function(t2, u2) {
    return g2(t2, u2, function(t3, u3, r2) {
      J$3(r2, 1, 1);
      const s2 = Y$2(r2[0]);
      return s2 === null ? NaN : s2.getMonth();
    });
  }, d2.year = function(t2, u2) {
    return g2(t2, u2, function(t3, u3, r2) {
      J$3(r2, 1, 1);
      const s2 = Y$2(r2[0]);
      return s2 === null ? NaN : s2.getFullYear();
    });
  }, d2.hour = function(t2, u2) {
    return g2(t2, u2, function(t3, u3, r2) {
      J$3(r2, 1, 1);
      const s2 = Y$2(r2[0]);
      return s2 === null ? NaN : s2.getHours();
    });
  }, d2.second = function(t2, u2) {
    return g2(t2, u2, function(t3, u3, r2) {
      J$3(r2, 1, 1);
      const s2 = Y$2(r2[0]);
      return s2 === null ? NaN : s2.getSeconds();
    });
  }, d2.millisecond = function(t2, u2) {
    return g2(t2, u2, function(t3, u3, r2) {
      J$3(r2, 1, 1);
      const s2 = Y$2(r2[0]);
      return s2 === null ? NaN : s2.getMilliseconds();
    });
  }, d2.minute = function(t2, u2) {
    return g2(t2, u2, function(t3, u3, r2) {
      J$3(r2, 1, 1);
      const s2 = Y$2(r2[0]);
      return s2 === null ? NaN : s2.getMinutes();
    });
  }, d2.weekday = function(t2, u2) {
    return g2(t2, u2, function(t3, u3, r2) {
      J$3(r2, 1, 1);
      const s2 = Y$2(r2[0]);
      return s2 === null ? NaN : s2.getDay();
    });
  }, d2.isoweekday = function(t2, u2) {
    return g2(t2, u2, function(t3, u3, r2) {
      J$3(r2, 1, 1);
      const s2 = Y$2(r2[0]);
      if (s2 === null)
        return NaN;
      let o2 = s2.getDay();
      return o2 === 0 && (o2 = 7), o2;
    });
  }, d2.isomonth = function(t2, u2) {
    return g2(t2, u2, function(t3, u3, r2) {
      J$3(r2, 1, 1);
      const s2 = Y$2(r2[0]);
      return s2 === null ? NaN : s2.getMonth() + 1;
    });
  }, d2.isoweek = function(t2, u2) {
    return g2(t2, u2, function(t3, u3, r2) {
      J$3(r2, 1, 1);
      const s2 = Y$2(r2[0]);
      if (s2 === null)
        return NaN;
      const o2 = i$5(s2).getTime() - l$5(s2).getTime();
      return Math.round(o2 / 6048e5) + 1;
    });
  }, d2.isoyear = function(t2, u2) {
    return g2(t2, u2, function(t3, u3, r2) {
      J$3(r2, 1, 1);
      const s2 = Y$2(r2[0]);
      return s2 === null ? NaN : a$4(s2);
    });
  }, d2.date = function(c2, a2) {
    return g2(c2, a2, function(c3, a3, i2) {
      if (J$3(i2, 0, 7), i2.length === 3)
        return f$4(new Date(X$3(i2[0]), X$3(i2[1]), X$3(i2[2]), 0, 0, 0, 0));
      if (i2.length === 4)
        return f$4(new Date(X$3(i2[0]), X$3(i2[1]), X$3(i2[2]), X$3(i2[3]), 0, 0, 0));
      if (i2.length === 5)
        return f$4(new Date(X$3(i2[0]), X$3(i2[1]), X$3(i2[2]), X$3(i2[3]), X$3(i2[4]), 0, 0));
      if (i2.length === 6)
        return f$4(new Date(X$3(i2[0]), X$3(i2[1]), X$3(i2[2]), X$3(i2[3]), X$3(i2[4]), X$3(i2[5]), 0));
      if (i2.length === 7)
        return f$4(new Date(X$3(i2[0]), X$3(i2[1]), X$3(i2[2]), X$3(i2[3]), X$3(i2[4]), X$3(i2[5]), X$3(i2[6])));
      if (i2.length === 2) {
        let e2 = K$2(i2[1]);
        if (e2 === "")
          return null;
        e2 = L$6(e2);
        const n2 = de$2.Moment(K$2(i2[0]), e2, true);
        return n2.isValid() === true ? n2.toDate() : null;
      }
      if (i2.length === 1) {
        if (F$5(i2[0])) {
          if (i2[0].replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "") === "")
            return null;
          if (/^[0-9][0-9][0-9][0-9]$/.test(i2[0]) === true)
            return Y$2(i2[0] + "-01-01");
        }
        const e2 = X$3(i2[0]);
        if (isNaN(e2) === false)
          return f$4(new Date(e2));
        return Y$2(i2[0]);
      }
      return i2.length === 0 ? new Date() : void 0;
    });
  }, d2.datediff = function(n2, t2) {
    return g2(n2, t2, function(n3, t3, u2) {
      J$3(u2, 2, 3);
      const s2 = $$4(u2[0]), o2 = $$4(u2[1]);
      if (s2 === null || o2 === null)
        return NaN;
      switch (K$2(u2[2]).toLowerCase()) {
        case "days":
        case "day":
        case "d":
          return s2.diff(o2, "days", true);
        case "months":
        case "month":
          return s2.diff(o2, "months", true);
        case "minutes":
        case "minute":
        case "m":
          return u2[2] === "M" ? s2.diff(o2, "months", true) : s2.diff(o2, "minutes", true);
        case "seconds":
        case "second":
        case "s":
          return s2.diff(o2, "seconds", true);
        case "milliseconds":
        case "millisecond":
        case "ms":
          return s2.diff(o2);
        case "hours":
        case "hour":
        case "h":
          return s2.diff(o2, "hours", true);
        case "years":
        case "year":
        case "y":
          return s2.diff(o2, "years", true);
        default:
          return s2.diff(o2);
      }
    });
  }, d2.dateadd = function(n2, t2) {
    return g2(n2, t2, function(n3, t3, s2) {
      J$3(s2, 2, 3);
      const o2 = $$4(s2[0]);
      if (o2 === null)
        return null;
      let a2 = "milliseconds";
      switch (K$2(s2[2]).toLowerCase()) {
        case "days":
        case "day":
        case "d":
          a2 = "days";
          break;
        case "months":
        case "month":
          a2 = "months";
          break;
        case "minutes":
        case "minute":
        case "m":
          a2 = s2[2] === "M" ? "months" : "minutes";
          break;
        case "seconds":
        case "second":
        case "s":
          a2 = "seconds";
          break;
        case "milliseconds":
        case "millisecond":
        case "ms":
          a2 = "milliseconds";
          break;
        case "hours":
        case "hour":
        case "h":
          a2 = "hours";
          break;
        case "years":
        case "year":
        case "y":
          a2 = "years";
      }
      return o2.add(X$3(s2[1]), a2), o2.toDate();
    });
  };
}
function e$7(t2, n2, e2) {
  const o2 = { x: 0, y: 0 };
  n2 && (o2.z = 0), e2 && (o2.m = 0);
  let a2 = 0, f2 = t2[0];
  for (let l2 = 0; l2 < t2.length; l2++) {
    const c2 = t2[l2];
    if (h$4(c2, f2) === false) {
      const t3 = s$6(f2, c2, n2), h2 = r$7(f2, c2, n2, e2);
      h2.x *= t3, h2.y *= t3, o2.x += h2.x, o2.y += h2.y, n2 && (h2.z *= t3, o2.z += h2.z), e2 && (h2.m *= t3, o2.m += h2.m), a2 += t3, f2 = c2;
    }
  }
  return a2 > 0 ? (o2.x /= a2, o2.y /= a2, n2 && (o2.z /= a2), e2 && (o2.m /= a2)) : (o2.x = t2[0][0], o2.y = t2[0][1], n2 && (o2.z = t2[0][2]), e2 && n2 ? o2.m = t2[0][3] : e2 && (o2.m = t2[0][2])), o2;
}
function r$7(t2, n2, e2, r2) {
  const o2 = { x: (t2[0] + n2[0]) / 2, y: (t2[1] + n2[1]) / 2 };
  return e2 && (o2.z = (t2[2] + n2[2]) / 2), e2 && r2 ? o2.m = (t2[3] + n2[3]) / 2 : r2 && (o2.m = (t2[2] + n2[2]) / 2), o2;
}
function o$3(t2, n2) {
  if (t2.length <= 1)
    return 0;
  let e2 = 0;
  for (let r2 = 1; r2 < t2.length; r2++)
    e2 += s$6(t2[r2 - 1], t2[r2], n2);
  return e2;
}
function s$6(t2, n2, e2) {
  const r2 = n2[0] - t2[0], o2 = n2[1] - t2[1];
  if (e2) {
    const t3 = n2[2] - n2[2];
    return Math.sqrt(r2 * r2 + o2 * o2 + t3 * t3);
  }
  return Math.sqrt(r2 * r2 + o2 * o2);
}
function h$4(t2, n2) {
  if (t2.length !== n2.length)
    return false;
  for (let e2 = 0; e2 < t2.length; e2++)
    if (t2[e2] !== n2[e2])
      return false;
  return true;
}
function a$3(n2) {
  const r2 = { x: 0, y: 0, spatialReference: n2.spatialReference.toJSON() }, s2 = { x: 0, y: 0, spatialReference: n2.spatialReference.toJSON() };
  let h2 = 0, a2 = 0;
  for (let t2 = 0; t2 < n2.paths.length; t2++) {
    if (n2.paths[t2].length === 0)
      continue;
    const f2 = o$3(n2.paths[t2], n2.hasZ === true);
    if (f2 === 0) {
      const o2 = e$7(n2.paths[t2], n2.hasZ === true, n2.hasM === true);
      r2.x += o2.x, r2.y += o2.y, n2.hasZ === true && (r2.z += o2.z), n2.hasM === true && (r2.m += o2.m), ++h2;
    } else {
      const r3 = e$7(n2.paths[t2], n2.hasZ === true, n2.hasM === true);
      s2.x += r3.x * f2, s2.y += r3.y * f2, n2.hasZ === true && (s2.z += r3.z * f2), n2.hasM === true && (s2.m += r3.m * f2), a2 += f2;
    }
  }
  return a2 > 0 ? (s2.x /= a2, s2.y /= a2, n2.hasZ === true && (s2.z /= a2), n2.hasM === true && (s2.m /= a2), new j$6(s2)) : h2 > 0 ? (r2.x /= h2, r2.y /= h2, n2.hasZ === true && (s2.z /= h2), n2.hasM === true && (r2.m /= h2), new j$6(r2)) : null;
}
function f$3(n2) {
  if (n2.points.length === 0)
    return null;
  let e2 = 0, r2 = 0, o2 = 0, s2 = 0;
  for (let t2 = 0; t2 < n2.points.length; t2++) {
    const h3 = n2.getPoint(t2);
    h3.hasZ === true && (o2 += h3.z), h3.hasM === true && (s2 += h3.m), e2 += h3.x, r2 += h3.y, s2 += h3.m;
  }
  const h2 = { x: e2 / n2.points.length, y: r2 / n2.points.length, spatialReference: null };
  return h2.spatialReference = n2.spatialReference.toJSON(), n2.hasZ === true && (h2.z = o2 / n2.points.length), n2.hasM === true && (h2.m = s2 / n2.points.length), new j$6(h2);
}
function l$4(t2, n2) {
  return t2.x * n2.x + t2.y * n2.y;
}
function c$4(t2, n2) {
  return t2.x * n2.y - n2.x * t2.y;
}
function i$4(t2, n2, e2 = 0) {
  for (; t2 < e2; )
    t2 += n2;
  const r2 = e2 + n2;
  for (; t2 >= r2; )
    t2 -= n2;
  return t2;
}
function u$4(t2, n2) {
  return Math.atan2(n2.y - t2.y, n2.x - t2.x);
}
function y$3(t2, n2) {
  return i$4(u$4(t2, n2), 2 * Math.PI) * (180 / Math.PI);
}
function x$4(t2, n2) {
  return i$4(Math.PI / 2 - u$4(t2, n2), 2 * Math.PI) * (180 / Math.PI);
}
function m$2(t2, n2, e2) {
  const r2 = { x: t2.x - n2.x, y: t2.y - n2.y }, o2 = { x: e2.x - n2.x, y: e2.y - n2.y };
  return Math.atan2(c$4(r2, o2), l$4(r2, o2));
}
function p$2(t2, n2, e2) {
  return i$4(m$2(t2, n2, e2), 2 * Math.PI) * (180 / Math.PI);
}
function g$3(t2, n2, e2) {
  return i$4(-1 * m$2(t2, n2, e2), 2 * Math.PI) * (180 / Math.PI);
}
const M$4 = [0, 0];
function z$3(t2) {
  for (let e2 = 0; e2 < t2.length; e2++) {
    const r2 = t2[e2];
    for (let s2 = 0; s2 < r2.length - 1; s2++) {
      const o3 = r2[s2], h2 = r2[s2 + 1];
      for (let r3 = e2 + 1; r3 < t2.length; r3++)
        for (let e3 = 0; e3 < t2[r3].length - 1; e3++) {
          const s3 = t2[r3][e3], a2 = t2[r3][e3 + 1];
          if (z$5(o3, h2, s3, a2, M$4) && !(M$4[0] === o3[0] && M$4[1] === o3[1] || M$4[0] === s3[0] && M$4[1] === s3[1] || M$4[0] === h2[0] && M$4[1] === h2[1] || M$4[0] === a2[0] && M$4[1] === a2[1]))
            return true;
        }
    }
    const o2 = r2.length;
    if (!(o2 < 3))
      for (let t3 = 0; t3 <= o2 - 2; t3++) {
        const e3 = r2[t3], s2 = r2[t3 + 1];
        for (let h2 = t3 + 2; h2 <= o2 - 2; h2++) {
          const t4 = r2[h2], o3 = r2[h2 + 1];
          if (z$5(e3, s2, t4, o3, M$4) && !(M$4[0] === e3[0] && M$4[1] === e3[1] || M$4[0] === t4[0] && M$4[1] === t4[1] || M$4[0] === s2[0] && M$4[1] === s2[1] || M$4[0] === o3[0] && M$4[1] === o3[1]))
            return true;
        }
      }
  }
  return false;
}
function D$5(D2, P2) {
  D2.ringisclockwise = function(e2, n2) {
    return P2(e2, n2, function(e3, n3, t2) {
      J$3(t2, 1, 1);
      let o2 = [], a2 = false, l2 = false;
      if (t2[0] === null)
        return false;
      if (Z$2(t2[0])) {
        for (const e4 of t2[0]) {
          if (!(e4 instanceof j$6))
            throw new Error("Invalid Argument");
          o2.push(e4.hasZ ? e4.hasM ? [e4.x, e4.y, e4.z, e4.m] : [e4.x, e4.y, e4.z] : [e4.x, e4.y]);
        }
        o2.length > 0 && (a2 = t2[0][0].hasZ, l2 = t2[0][0].hasM);
      } else if (t2[0] instanceof i$7)
        o2 = t2[0]._elements, o2.length > 0 && (a2 = t2[0]._hasZ, l2 = t2[0]._hasM);
      else {
        if (!E$6(t2[0]))
          throw new Error("Invalid Argument");
        for (const e4 of t2[0].toArray()) {
          if (!(e4 instanceof j$6))
            throw new Error("Invalid Argument");
          o2.push(e4.hasZ ? e4.hasM ? [e4.x, e4.y, e4.z, e4.m] : [e4.x, e4.y, e4.z] : [e4.x, e4.y]);
        }
        o2.length > 0 && (a2 = t2[0].get(0).hasZ, l2 = t2[0].get(0).hasM);
      }
      return !(o2.length < 3) && f$7(o2, l2, a2);
    });
  }, D2.polygon = function(e2, r2) {
    return P2(e2, r2, function(r3, n2, t2) {
      J$3(t2, 1, 1);
      let i2 = null;
      if (t2[0] instanceof h$7) {
        if (i2 = te$2(g$5.parseGeometryFromDictionary(t2[0]), e2.spatialReference), i2 instanceof x$7 == false)
          throw new Error("Illegal Parameter");
      } else
        i2 = t2[0] instanceof x$7 ? p$5(t2[0].toJSON()) : te$2(new x$7(JSON.parse(t2[0])), e2.spatialReference);
      if (i2 !== null && i2.spatialReference.equals(e2.spatialReference) === false)
        throw new Error("Cannot create Geometry in this SpatialReference. Engine is using a different spatial reference.");
      return ne$2(i2);
    });
  }, D2.polyline = function(e2, r2) {
    return P2(e2, r2, function(r3, n2, t2) {
      J$3(t2, 1, 1);
      let i2 = null;
      if (t2[0] instanceof h$7) {
        if (i2 = te$2(g$5.parseGeometryFromDictionary(t2[0]), e2.spatialReference), i2 instanceof m$5 == false)
          throw new Error("Illegal Parameter");
      } else
        i2 = t2[0] instanceof m$5 ? p$5(t2[0].toJSON()) : te$2(new m$5(JSON.parse(t2[0])), e2.spatialReference);
      if (i2 !== null && i2.spatialReference.equals(e2.spatialReference) === false)
        throw new Error("Cannot create Geometry in this SpatialReference. Engine is using a different spatial reference.");
      return ne$2(i2);
    });
  }, D2.point = function(e2, n2) {
    return P2(e2, n2, function(n3, t2, i2) {
      J$3(i2, 1, 1);
      let o2 = null;
      if (i2[0] instanceof h$7) {
        if (o2 = te$2(g$5.parseGeometryFromDictionary(i2[0]), e2.spatialReference), o2 instanceof j$6 == false)
          throw new Error("Illegal Parameter");
      } else
        o2 = i2[0] instanceof j$6 ? p$5(i2[0].toJSON()) : te$2(new j$6(JSON.parse(i2[0])), e2.spatialReference);
      if (o2 !== null && o2.spatialReference.equals(e2.spatialReference) === false)
        throw new Error("Cannot create Geometry in this SpatialReference. Engine is using a different spatial reference.");
      return ne$2(o2);
    });
  }, D2.multipoint = function(e2, r2) {
    return P2(e2, r2, function(r3, n2, i2) {
      J$3(i2, 1, 1);
      let o2 = null;
      if (i2[0] instanceof h$7) {
        if (o2 = te$2(g$5.parseGeometryFromDictionary(i2[0]), e2.spatialReference), o2 instanceof m$6 == false)
          throw new Error("Illegal Parameter");
      } else
        o2 = i2[0] instanceof m$6 ? p$5(i2[0].toJSON()) : te$2(new m$6(JSON.parse(i2[0])), e2.spatialReference);
      if (o2 !== null && o2.spatialReference.equals(e2.spatialReference) === false)
        throw new Error("Cannot create Geometry in this SpatialReference. Engine is using a different spatial reference.");
      return ne$2(o2);
    });
  }, D2.extent = function(e2, i2) {
    return P2(e2, i2, function(i3, s2, c2) {
      c2 = se$3(c2), J$3(c2, 1, 1);
      let u2 = null;
      if (c2[0] instanceof h$7)
        u2 = te$2(g$5.parseGeometryFromDictionary(c2[0]), e2.spatialReference);
      else if (c2[0] instanceof j$6) {
        const e3 = { xmin: c2[0].x, ymin: c2[0].y, xmax: c2[0].x, ymax: c2[0].y, spatialReference: c2[0].spatialReference.toJSON() }, r2 = c2[0];
        r2.hasZ ? (e3.zmin = r2.z, e3.zmax = r2.z) : r2.hasM && (e3.mmin = r2.m, e3.mmax = r2.m), u2 = p$5(e3);
      } else
        u2 = c2[0] instanceof x$7 || c2[0] instanceof m$5 || c2[0] instanceof m$6 ? p$5(c2[0].extent.toJSON()) : c2[0] instanceof M$6 ? p$5(c2[0].toJSON()) : te$2(new M$6(JSON.parse(c2[0])), e2.spatialReference);
      if (u2 !== null && u2.spatialReference.equals(e2.spatialReference) === false)
        throw new Error("Cannot create Geometry in this SpatialReference. Engine is using a different spatial reference.");
      return ne$2(u2);
    });
  }, D2.geometry = function(e2, r2) {
    return P2(e2, r2, function(r3, n2, t2) {
      J$3(t2, 1, 1);
      let i2 = null;
      if (i2 = t2[0] instanceof g$5 ? te$2(t2[0].geometry(), e2.spatialReference) : t2[0] instanceof h$7 ? te$2(g$5.parseGeometryFromDictionary(t2[0]), e2.spatialReference) : te$2(p$5(JSON.parse(t2[0])), e2.spatialReference), i2 !== null && i2.spatialReference.equals(e2.spatialReference) === false)
        throw new Error("Cannot create Geometry in this SpatialReference. Engine is using a different spatial reference.");
      return ne$2(i2);
    });
  }, D2.setgeometry = function(r2, n2) {
    return P2(r2, n2, function(r3, n3, t2) {
      if (J$3(t2, 2, 2), !(t2[0] instanceof g$5))
        throw new Error("Illegal Argument");
      if (t2[0].immutable === true)
        throw new Error("Feature is Immutable");
      if (!(t2[1] instanceof c$7 || t2[1] === null))
        throw new Error("Illegal Argument");
      return t2[0]._geometry = t2[1], b$8;
    });
  }, D2.feature = function(r2, n2) {
    return P2(r2, n2, function(n3, t2, i2) {
      if (i2.length === 0)
        throw new Error("Missing Parameters");
      let o2 = null;
      if (i2.length === 1)
        if (F$5(i2[0]))
          o2 = g$5.fromJson(JSON.parse(i2[0]));
        else if (i2[0] instanceof g$5)
          o2 = g$5.createFromArcadeFeature(i2[0]);
        else if (i2[0] instanceof c$7)
          o2 = g$5.createFromGraphicLikeObject(i2[0], null, null);
        else {
          if (!(i2[0] instanceof h$7))
            throw new Error("Illegal Argument");
          {
            let e2 = i2[0].hasField("geometry") ? i2[0].field("geometry") : null, r3 = i2[0].hasField("attributes") ? i2[0].field("attributes") : null;
            e2 !== null && e2 instanceof h$7 && (e2 = g$5.parseGeometryFromDictionary(e2)), r3 !== null && (r3 = g$5.parseAttributesFromDictionary(r3)), o2 = g$5.createFromGraphicLikeObject(e2, r3, null);
          }
        }
      else if (i2.length === 2) {
        let r3 = null, n4 = null;
        if (i2[0] !== null)
          if (i2[0] instanceof c$7)
            r3 = i2[0];
          else {
            if (!(r3 instanceof h$7))
              throw new Error("Illegal Argument");
            r3 = g$5.parseGeometryFromDictionary(i2[0]);
          }
        if (i2[1] !== null) {
          if (!(i2[1] instanceof h$7))
            throw new Error("Illegal Argument");
          n4 = g$5.parseAttributesFromDictionary(i2[1]);
        }
        o2 = g$5.createFromGraphicLikeObject(r3, n4, null);
      } else {
        let r3 = null;
        const n4 = {};
        if (i2[0] !== null)
          if (i2[0] instanceof c$7)
            r3 = i2[0];
          else {
            if (!(r3 instanceof h$7))
              throw new Error("Illegal Argument");
            r3 = g$5.parseGeometryFromDictionary(i2[0]);
          }
        for (let e2 = 1; e2 < i2.length; e2 += 2) {
          const r4 = K$2(i2[e2]), t3 = i2[e2 + 1];
          if (!(t3 == null || F$5(t3) || isNaN(t3) || P$5(t3) || w$3(t3) || I$5(t3)))
            throw new Error("Illegal Argument");
          if (v$4(t3) || C$5(t3) === false)
            throw new Error("Illegal Argument");
          n4[r4] = t3 === b$8 ? null : t3;
        }
        o2 = g$5.createFromGraphicLikeObject(r3, n4, null);
      }
      return o2._geometry = te$2(o2.geometry(), r2.spatialReference), o2.immutable = false, o2;
    });
  }, D2.dictionary = function(e2, r2) {
    return P2(e2, r2, function(e3, r3, n2) {
      if (n2.length === 0) {
        const e4 = new h$7();
        return e4.immutable = false, e4;
      }
      if (n2.length === 1 && F$5(n2[0]))
        try {
          const e4 = JSON.parse(n2[0]), r4 = h$7.convertObjectToArcadeDictionary(e4);
          return r4.immutable = false, r4;
        } catch (o2) {
          throw new Error("Missing Parameters or Illegal Json");
        }
      if (n2.length % 2 != 0)
        throw new Error("Missing Parameters");
      const t2 = {};
      for (let a2 = 0; a2 < n2.length; a2 += 2) {
        const e4 = K$2(n2[a2]), r4 = n2[a2 + 1];
        if (!(r4 == null || F$5(r4) || isNaN(r4) || P$5(r4) || w$3(r4) || I$5(r4) || Z$2(r4) || E$6(r4)))
          throw new Error("Illegal Argument");
        if (v$4(r4))
          throw new Error("Illegal Argument");
        t2[e4] = r4 === b$8 ? null : r4;
      }
      const i2 = new h$7(t2);
      return i2.immutable = false, i2;
    });
  }, D2.haskey = function(e2, r2) {
    return P2(e2, r2, function(e3, r3, n2) {
      J$3(n2, 2, 2);
      const t2 = K$2(n2[1]);
      if (n2[0] instanceof g$5)
        return n2[0].hasField(t2);
      if (n2[0] instanceof h$7)
        return n2[0].hasField(t2);
      throw new Error("Illegal Argument");
    });
  }, D2.indexof = function(e2, r2) {
    return P2(e2, r2, function(e3, r3, n2) {
      J$3(n2, 2, 2);
      const t2 = n2[1];
      if (Z$2(n2[0])) {
        for (let e4 = 0; e4 < n2[0].length; e4++)
          if (B$3(t2, n2[0][e4]))
            return e4;
        return -1;
      }
      if (E$6(n2[0])) {
        const e4 = n2[0].length();
        for (let r4 = 0; r4 < e4; r4++)
          if (B$3(t2, n2[0].get(r4)))
            return r4;
        return -1;
      }
      throw new Error("Illegal Argument");
    });
  }, D2.angle = function(e2, n2) {
    return P2(e2, n2, function(e3, n3, t2) {
      if (t2 = se$3(t2), J$3(t2, 2, 3), !(t2[0] instanceof j$6))
        throw new Error("Illegal Argument");
      if (!(t2[1] instanceof j$6))
        throw new Error("Illegal Argument");
      if (t2.length > 2 && !(t2[2] instanceof j$6))
        throw new Error("Illegal Argument");
      return t2.length === 2 ? y$3(t2[0], t2[1]) : p$2(t2[0], t2[1], t2[2]);
    });
  }, D2.bearing = function(e2, n2) {
    return P2(e2, n2, function(e3, n3, t2) {
      if (t2 = se$3(t2), J$3(t2, 2, 3), !(t2[0] instanceof j$6))
        throw new Error("Illegal Argument");
      if (!(t2[1] instanceof j$6))
        throw new Error("Illegal Argument");
      if (t2.length > 2 && !(t2[2] instanceof j$6))
        throw new Error("Illegal Argument");
      return t2.length === 2 ? x$4(t2[0], t2[1]) : g$3(t2[0], t2[1], t2[2]);
    });
  }, D2.isselfintersecting = function(e2, r2) {
    return P2(e2, r2, function(r3, n2, i2) {
      i2 = se$3(i2), J$3(i2, 1, 1);
      let l2 = i2[0];
      if (l2 instanceof x$7)
        return l2.isSelfIntersecting;
      if (l2 instanceof m$5)
        return l2 = l2.paths, z$3(l2);
      if (l2 instanceof m$6) {
        const e3 = l2.points;
        for (let r4 = 0; r4 < e3.length; r4++)
          for (let n3 = 0; n3 < e3.length; n3++)
            if (n3 !== r4) {
              let t2 = true;
              for (let i3 = 0; i3 < e3[r4].length; i3++)
                if (e3[r4][i3] !== e3[n3][i3]) {
                  t2 = false;
                  break;
                }
              if (t2 === true)
                return true;
            }
      }
      return !(!Z$2(l2) && !E$6(l2)) && (l2 = ce$3(l2, e2.spatialReference), l2 !== null && (l2 = l2.paths), z$3(l2));
    });
  };
}
function r$6(e2) {
  if (e2 === void 0)
    return null;
  if (typeof e2 == "number")
    return e2;
  switch (e2.toLowerCase()) {
    case "meters":
    case "meter":
    case "m":
    case "squaremeters":
    case "squaremeter":
    case "square-meter":
    case "square-meters":
      return 109404;
    case "miles":
    case "mile":
    case "squaremile":
    case "squaremiles":
    case "square-miles":
    case "square-mile":
      return 109413;
    case "kilometers":
    case "kilometer":
    case "squarekilometers":
    case "squarekilometer":
    case "square-kilometers":
    case "square-kilometer":
    case "km":
      return 109414;
    case "acres":
    case "acre":
    case "ac":
      return 109402;
    case "hectares":
    case "hectare":
    case "ha":
      return 109401;
    case "yard":
    case "yd":
    case "yards":
    case "square-yards":
    case "square-yard":
    case "squareyards":
    case "squareyard":
      return 109442;
    case "feet":
    case "ft":
    case "foot":
    case "square-feet":
    case "square-foot":
    case "squarefeet":
    case "squarefoot":
      return 109405;
  }
  return null;
}
function s$5(r2) {
  if (r2 === null)
    return null;
  switch (r2.type) {
    case "polygon":
    case "multipoint":
    case "polyline":
      return r2.extent;
    case "point":
      return new M$6({ xmin: r2.x, ymin: r2.y, xmax: r2.x, ymax: r2.y, spatialReference: r2.spatialReference });
    case "extent":
      return r2;
  }
  return null;
}
function a$2(e2) {
  if (e2 === void 0)
    return null;
  if (typeof e2 == "number")
    return e2;
  if (typeof e2 == "number")
    return e2;
  switch (e2.toLowerCase()) {
    case "meters":
    case "meter":
    case "m":
    case "squaremeters":
    case "squaremeter":
    case "square-meter":
    case "square-meters":
      return 9001;
    case "miles":
    case "mile":
    case "squaremile":
    case "squaremiles":
    case "square-miles":
    case "square-mile":
      return 9035;
    case "kilometers":
    case "kilometer":
    case "squarekilometers":
    case "squarekilometer":
    case "square-kilometers":
    case "square-kilometer":
    case "km":
      return 9036;
    case "yard":
    case "yd":
    case "yards":
    case "square-yards":
    case "square-yard":
    case "squareyards":
    case "squareyard":
      return 9096;
    case "feet":
    case "ft":
    case "foot":
    case "square-feet":
    case "square-foot":
    case "squarefeet":
    case "squarefoot":
      return 9002;
  }
  return null;
}
function c$3(e2) {
  if (e2 === null)
    return null;
  const r2 = e2.clone();
  return e2.cache._geVersion !== void 0 && (r2.cache._geVersion = e2.cache._geVersion), r2;
}
let L$5 = null;
function P$4(n2) {
  return t$5.indexOf("4.") === 0 ? x$7.fromExtent(n2) : new x$7({ spatialReference: n2.spatialReference, rings: [[[n2.xmin, n2.ymin], [n2.xmin, n2.ymax], [n2.xmax, n2.ymax], [n2.xmax, n2.ymin], [n2.xmin, n2.ymin]]] });
}
function b$4(n2) {
  L$5 = n2;
}
function k$3(u2, b2) {
  function k2(e2) {
    if (J$3(e2, 2, 2), e2[0] instanceof c$7 && e2[1] instanceof c$7)
      ;
    else if (e2[0] instanceof c$7 && e2[1] === null)
      ;
    else if (e2[1] instanceof c$7 && e2[0] === null)
      ;
    else if (e2[0] !== null || e2[1] !== null)
      throw new Error("Illegal Argument");
  }
  u2.disjoint = function(n2, e2) {
    return b2(n2, e2, function(n3, e3, r2) {
      return k2(r2 = se$3(r2)), r2[0] === null || r2[1] === null || L$5.disjoint(r2[0], r2[1]);
    });
  }, u2.intersects = function(n2, e2) {
    return b2(n2, e2, function(n3, e3, r2) {
      return k2(r2 = se$3(r2)), r2[0] !== null && r2[1] !== null && L$5.intersects(r2[0], r2[1]);
    });
  }, u2.touches = function(n2, e2) {
    return b2(n2, e2, function(n3, e3, r2) {
      return k2(r2 = se$3(r2)), r2[0] !== null && r2[1] !== null && L$5.touches(r2[0], r2[1]);
    });
  }, u2.crosses = function(n2, e2) {
    return b2(n2, e2, function(n3, e3, r2) {
      return k2(r2 = se$3(r2)), r2[0] !== null && r2[1] !== null && L$5.crosses(r2[0], r2[1]);
    });
  }, u2.within = function(n2, e2) {
    return b2(n2, e2, function(n3, e3, r2) {
      return k2(r2 = se$3(r2)), r2[0] !== null && r2[1] !== null && L$5.within(r2[0], r2[1]);
    });
  }, u2.contains = function(n2, e2) {
    return b2(n2, e2, function(n3, e3, r2) {
      return k2(r2 = se$3(r2)), r2[0] !== null && r2[1] !== null && L$5.contains(r2[0], r2[1]);
    });
  }, u2.overlaps = function(n2, e2) {
    return b2(n2, e2, function(n3, e3, r2) {
      return k2(r2 = se$3(r2)), r2[0] !== null && r2[1] !== null && L$5.overlaps(r2[0], r2[1]);
    });
  }, u2.equals = function(e2, r2) {
    return b2(e2, r2, function(e3, r3, t2) {
      return J$3(t2, 2, 2), t2[0] === t2[1] || (t2[0] instanceof c$7 && t2[1] instanceof c$7 ? L$5.equals(t2[0], t2[1]) : !(!P$5(t2[0]) || !P$5(t2[1])) && t2[0].getTime() === t2[1].getTime());
    });
  }, u2.relate = function(e2, r2) {
    return b2(e2, r2, function(e3, r3, t2) {
      if (t2 = se$3(t2), J$3(t2, 3, 3), t2[0] instanceof c$7 && t2[1] instanceof c$7)
        return L$5.relate(t2[0], t2[1], K$2(t2[2]));
      if (t2[0] instanceof c$7 && t2[1] === null)
        return false;
      if (t2[1] instanceof c$7 && t2[0] === null)
        return false;
      if (t2[0] === null && t2[1] === null)
        return false;
      throw new Error("Illegal Argument");
    });
  }, u2.intersection = function(n2, e2) {
    return b2(n2, e2, function(n3, e3, r2) {
      return k2(r2 = se$3(r2)), r2[0] === null || r2[1] === null ? null : L$5.intersect(r2[0], r2[1]);
    });
  }, u2.union = function(e2, r2) {
    return b2(e2, r2, function(r3, t2, l2) {
      const i2 = [];
      if ((l2 = se$3(l2)).length === 0)
        throw new Error("Function called with wrong number of Parameters");
      if (l2.length === 1)
        if (Z$2(l2[0])) {
          const e3 = se$3(l2[0]);
          for (let r4 = 0; r4 < e3.length; r4++)
            if (e3[r4] !== null) {
              if (!(e3[r4] instanceof c$7))
                throw new Error("Illegal Argument");
              i2.push(e3[r4]);
            }
        } else {
          if (!E$6(l2[0])) {
            if (l2[0] instanceof c$7)
              return te$2(c$3(l2[0]), e2.spatialReference);
            if (l2[0] === null)
              return null;
            throw new Error("Illegal Argument");
          }
          {
            const e3 = se$3(l2[0].toArray());
            for (let r4 = 0; r4 < e3.length; r4++)
              if (e3[r4] !== null) {
                if (!(e3[r4] instanceof c$7))
                  throw new Error("Illegal Argument");
                i2.push(e3[r4]);
              }
          }
        }
      else
        for (let e3 = 0; e3 < l2.length; e3++)
          if (l2[e3] !== null) {
            if (!(l2[e3] instanceof c$7))
              throw new Error("Illegal Argument");
            i2.push(l2[e3]);
          }
      return i2.length === 0 ? null : L$5.union(i2);
    });
  }, u2.difference = function(n2, e2) {
    return b2(n2, e2, function(n3, e3, r2) {
      return k2(r2 = se$3(r2)), r2[0] !== null && r2[1] === null ? c$3(r2[0]) : r2[0] === null ? null : L$5.difference(r2[0], r2[1]);
    });
  }, u2.symmetricdifference = function(n2, e2) {
    return b2(n2, e2, function(n3, e3, r2) {
      return k2(r2 = se$3(r2)), r2[0] === null && r2[1] === null ? null : r2[0] === null ? c$3(r2[1]) : r2[1] === null ? c$3(r2[0]) : L$5.symmetricDifference(r2[0], r2[1]);
    });
  }, u2.clip = function(e2, t2) {
    return b2(e2, t2, function(e3, t3, l2) {
      if (l2 = se$3(l2), J$3(l2, 2, 2), !(l2[1] instanceof M$6) && l2[1] !== null)
        throw new Error("Illegal Argument");
      if (l2[0] === null)
        return null;
      if (!(l2[0] instanceof c$7))
        throw new Error("Illegal Argument");
      return l2[1] === null ? null : L$5.clip(l2[0], l2[1]);
    });
  }, u2.cut = function(e2, r2) {
    return b2(e2, r2, function(e3, r3, t2) {
      if (t2 = se$3(t2), J$3(t2, 2, 2), !(t2[1] instanceof m$5) && t2[1] !== null)
        throw new Error("Illegal Argument");
      if (t2[0] === null)
        return [];
      if (!(t2[0] instanceof c$7))
        throw new Error("Illegal Argument");
      return t2[1] === null ? [c$3(t2[0])] : L$5.cut(t2[0], t2[1]);
    });
  }, u2.area = function(e2, r2) {
    return b2(e2, r2, function(r3, t2, l2) {
      if (J$3(l2, 1, 2), (l2 = se$3(l2))[0] === null)
        return 0;
      if (Z$2(l2[0]) || E$6(l2[0])) {
        const n2 = fe$2(l2[0], e2.spatialReference);
        return n2 === null ? 0 : L$5.planarArea(n2, r$6(O$5(l2[1], -1)));
      }
      if (!(l2[0] instanceof c$7))
        throw new Error("Illegal Argument");
      return L$5.planarArea(l2[0], r$6(O$5(l2[1], -1)));
    });
  }, u2.areageodetic = function(e2, r2) {
    return b2(e2, r2, function(r3, t2, l2) {
      if (J$3(l2, 1, 2), (l2 = se$3(l2))[0] === null)
        return 0;
      if (Z$2(l2[0]) || E$6(l2[0])) {
        const n2 = fe$2(l2[0], e2.spatialReference);
        return n2 === null ? 0 : L$5.geodesicArea(n2, r$6(O$5(l2[1], -1)));
      }
      if (!(l2[0] instanceof c$7))
        throw new Error("Illegal Argument");
      return L$5.geodesicArea(l2[0], r$6(O$5(l2[1], -1)));
    });
  }, u2.length = function(e2, r2) {
    return b2(e2, r2, function(r3, t2, l2) {
      if (J$3(l2, 1, 2), (l2 = se$3(l2))[0] === null)
        return 0;
      if (Z$2(l2[0]) || E$6(l2[0])) {
        const n2 = ce$3(l2[0], e2.spatialReference);
        return n2 === null ? 0 : L$5.planarLength(n2, a$2(O$5(l2[1], -1)));
      }
      if (!(l2[0] instanceof c$7))
        throw new Error("Illegal Argument");
      return L$5.planarLength(l2[0], a$2(O$5(l2[1], -1)));
    });
  }, u2.lengthgeodetic = function(e2, r2) {
    return b2(e2, r2, function(r3, t2, l2) {
      if (J$3(l2, 1, 2), (l2 = se$3(l2))[0] === null)
        return 0;
      if (Z$2(l2[0]) || E$6(l2[0])) {
        const n2 = ce$3(l2[0], e2.spatialReference);
        return n2 === null ? 0 : L$5.geodesicLength(n2, a$2(O$5(l2[1], -1)));
      }
      if (!(l2[0] instanceof c$7))
        throw new Error("Illegal Argument");
      return L$5.geodesicLength(l2[0], a$2(O$5(l2[1], -1)));
    });
  }, u2.distance = function(e2, r2) {
    return b2(e2, r2, function(r3, t2, l2) {
      l2 = se$3(l2), J$3(l2, 2, 3);
      let i2 = l2[0];
      (Z$2(l2[0]) || E$6(l2[0])) && (i2 = me$2(l2[0], e2.spatialReference));
      let o2 = l2[1];
      if ((Z$2(l2[1]) || E$6(l2[1])) && (o2 = me$2(l2[1], e2.spatialReference)), !(i2 instanceof c$7))
        throw new Error("Illegal Argument");
      if (!(o2 instanceof c$7))
        throw new Error("Illegal Argument");
      return L$5.distance(i2, o2, a$2(O$5(l2[2], -1)));
    });
  }, u2.distancegeodetic = function(n2, r2) {
    return b2(n2, r2, function(n3, r3, t2) {
      t2 = se$3(t2), J$3(t2, 2, 3);
      const l2 = t2[0], o2 = t2[1];
      if (!(l2 instanceof j$6))
        throw new Error("Illegal Argument");
      if (!(o2 instanceof j$6))
        throw new Error("Illegal Argument");
      const u3 = new m$5({ paths: [], spatialReference: l2.spatialReference });
      return u3.addPath([l2, o2]), L$5.geodesicLength(u3, a$2(O$5(t2[2], -1)));
    });
  }, u2.densify = function(e2, t2) {
    return b2(e2, t2, function(e3, t3, o2) {
      if (o2 = se$3(o2), J$3(o2, 2, 3), o2[0] === null)
        return null;
      if (!(o2[0] instanceof c$7))
        throw new Error("Illegal Argument");
      const u3 = X$3(o2[1]);
      if (isNaN(u3))
        throw new Error("Illegal Argument");
      if (u3 <= 0)
        throw new Error("Illegal Argument");
      return o2[0] instanceof x$7 || o2[0] instanceof m$5 ? L$5.densify(o2[0], u3, a$2(O$5(o2[2], -1))) : o2[0] instanceof M$6 ? L$5.densify(P$4(o2[0]), u3, a$2(O$5(o2[2], -1))) : o2[0];
    });
  }, u2.densifygeodetic = function(e2, t2) {
    return b2(e2, t2, function(e3, t3, o2) {
      if (o2 = se$3(o2), J$3(o2, 2, 3), o2[0] === null)
        return null;
      if (!(o2[0] instanceof c$7))
        throw new Error("Illegal Argument");
      const u3 = X$3(o2[1]);
      if (isNaN(u3))
        throw new Error("Illegal Argument");
      if (u3 <= 0)
        throw new Error("Illegal Argument");
      return o2[0] instanceof x$7 || o2[0] instanceof m$5 ? L$5.geodesicDensify(o2[0], u3, a$2(O$5(o2[2], -1))) : o2[0] instanceof M$6 ? L$5.geodesicDensify(P$4(o2[0]), u3, a$2(O$5(o2[2], -1))) : o2[0];
    });
  }, u2.generalize = function(e2, r2) {
    return b2(e2, r2, function(e3, r3, t2) {
      if (t2 = se$3(t2), J$3(t2, 2, 4), t2[0] === null)
        return null;
      if (!(t2[0] instanceof c$7))
        throw new Error("Illegal Argument");
      const l2 = X$3(t2[1]);
      if (isNaN(l2))
        throw new Error("Illegal Argument");
      return L$5.generalize(t2[0], l2, ee$3(O$5(t2[2], true)), a$2(O$5(t2[3], -1)));
    });
  }, u2.buffer = function(e2, r2) {
    return b2(e2, r2, function(e3, r3, t2) {
      if (t2 = se$3(t2), J$3(t2, 2, 3), t2[0] === null)
        return null;
      if (!(t2[0] instanceof c$7))
        throw new Error("Illegal Argument");
      const l2 = X$3(t2[1]);
      if (isNaN(l2))
        throw new Error("Illegal Argument");
      return l2 === 0 ? c$3(t2[0]) : L$5.buffer(t2[0], l2, a$2(O$5(t2[2], -1)));
    });
  }, u2.buffergeodetic = function(e2, r2) {
    return b2(e2, r2, function(e3, r3, t2) {
      if (t2 = se$3(t2), J$3(t2, 2, 3), t2[0] === null)
        return null;
      if (!(t2[0] instanceof c$7))
        throw new Error("Illegal Argument");
      const l2 = X$3(t2[1]);
      if (isNaN(l2))
        throw new Error("Illegal Argument");
      return l2 === 0 ? c$3(t2[0]) : L$5.geodesicBuffer(t2[0], l2, a$2(O$5(t2[2], -1)));
    });
  }, u2.offset = function(n2, e2) {
    return b2(n2, e2, function(n3, e3, r2) {
      if (r2 = se$3(r2), J$3(r2, 2, 6), r2[0] === null)
        return null;
      if (!(r2[0] instanceof x$7 || r2[0] instanceof m$5))
        throw new Error("Illegal Argument");
      const t2 = X$3(r2[1]);
      if (isNaN(t2))
        throw new Error("Illegal Argument");
      const o2 = X$3(O$5(r2[4], 10));
      if (isNaN(o2))
        throw new Error("Illegal Argument");
      const u3 = X$3(O$5(r2[5], 0));
      if (isNaN(u3))
        throw new Error("Illegal Argument");
      return L$5.offset(r2[0], t2, a$2(O$5(r2[2], -1)), K$2(O$5(r2[3], "round")).toLowerCase(), o2, u3);
    });
  }, u2.rotate = function(t2, i2) {
    return b2(t2, i2, function(t3, i3, o2) {
      o2 = se$3(o2), J$3(o2, 2, 3);
      let u3 = o2[0];
      if (u3 === null)
        return null;
      if (!(u3 instanceof c$7))
        throw new Error("Illegal Argument");
      u3 instanceof M$6 && (u3 = x$7.fromExtent(u3));
      const a2 = X$3(o2[1]);
      if (isNaN(a2))
        throw new Error("Illegal Argument");
      const c2 = O$5(o2[2], null);
      if (c2 === null)
        return L$5.rotate(u3, a2);
      if (c2 instanceof j$6)
        return L$5.rotate(u3, a2, c2);
      throw new Error("Illegal Argument");
    });
  }, u2.centroid = function(o2, u3) {
    return b2(o2, u3, function(u4, a2, c2) {
      if (c2 = se$3(c2), J$3(c2, 1, 1), c2[0] === null)
        return null;
      let h2 = c2[0];
      if ((Z$2(c2[0]) || E$6(c2[0])) && (h2 = me$2(c2[0], o2.spatialReference)), h2 === null)
        return null;
      if (!(h2 instanceof c$7))
        throw new Error("Illegal Argument");
      return h2 instanceof j$6 ? te$2(c$3(c2[0]), o2.spatialReference) : h2 instanceof x$7 ? h2.centroid : h2 instanceof m$5 ? a$3(h2) : h2 instanceof m$6 ? f$3(h2) : h2 instanceof M$6 ? h2.center : null;
    });
  }, u2.multiparttosinglepart = function(u3, a2) {
    return b2(u3, a2, function(a3, c2, g2) {
      g2 = se$3(g2), J$3(g2, 1, 1);
      const m2 = [];
      if (g2[0] === null)
        return null;
      if (!(g2[0] instanceof c$7))
        throw new Error("Illegal Argument");
      if (g2[0] instanceof j$6)
        return [te$2(c$3(g2[0]), u3.spatialReference)];
      if (g2[0] instanceof M$6)
        return [te$2(c$3(g2[0]), u3.spatialReference)];
      const h2 = L$5.simplify(g2[0]);
      if (h2 instanceof x$7) {
        const n2 = [], e2 = [];
        for (let r2 = 0; r2 < h2.rings.length; r2++)
          if (h2.isClockwise(h2.rings[r2])) {
            const e3 = p$5({ rings: [h2.rings[r2]], hasZ: h2.hasZ === true, hasM: h2.hasM === true, spatialReference: h2.spatialReference.toJSON() });
            n2.push(e3);
          } else
            e2.push({ ring: h2.rings[r2], pt: h2.getPoint(r2, 0) });
        for (let r2 = 0; r2 < e2.length; r2++)
          for (let t2 = 0; t2 < n2.length; t2++)
            if (n2[t2].contains(e2[r2].pt)) {
              n2[t2].addRing(e2[r2].ring);
              break;
            }
        return n2;
      }
      if (h2 instanceof m$5) {
        const n2 = [];
        for (let e2 = 0; e2 < h2.paths.length; e2++) {
          const r2 = p$5({ paths: [h2.paths[e2]], hasZ: h2.hasZ === true, hasM: h2.hasM === true, spatialReference: h2.spatialReference.toJSON() });
          n2.push(r2);
        }
        return n2;
      }
      if (g2[0] instanceof m$6) {
        const n2 = te$2(c$3(g2[0]), u3.spatialReference);
        for (let e2 = 0; e2 < n2.points.length; e2++)
          m2.push(n2.getPoint(e2));
        return m2;
      }
      return null;
    });
  }, u2.issimple = function(e2, r2) {
    return b2(e2, r2, function(e3, r3, t2) {
      if (t2 = se$3(t2), J$3(t2, 1, 1), t2[0] === null)
        return true;
      if (!(t2[0] instanceof c$7))
        throw new Error("Illegal Argument");
      return L$5.isSimple(t2[0]);
    });
  }, u2.simplify = function(e2, r2) {
    return b2(e2, r2, function(e3, r3, t2) {
      if (t2 = se$3(t2), J$3(t2, 1, 1), t2[0] === null)
        return null;
      if (!(t2[0] instanceof c$7))
        throw new Error("Illegal Argument");
      return L$5.simplify(t2[0]);
    });
  };
}
var geomsync = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  registerFunctions: k$3,
  setGeometryEngine: b$4
});
function l$3(n2, t2, r2) {
  return r2 === void 0 || +r2 == 0 ? Math[n2](t2) : (t2 = +t2, r2 = +r2, isNaN(t2) || typeof r2 != "number" || r2 % 1 != 0 ? NaN : (t2 = t2.toString().split("e"), +((t2 = (t2 = Math[n2](+(t2[0] + "e" + (t2[1] ? +t2[1] - r2 : -r2)))).toString().split("e"))[0] + "e" + (t2[1] ? +t2[1] + r2 : r2))));
}
function N$3(N2, h2) {
  function m2(n2, t2, r2) {
    const u2 = X$3(n2);
    return isNaN(u2) ? u2 : isNaN(t2) || isNaN(r2) || t2 > r2 ? NaN : u2 < t2 ? t2 : u2 > r2 ? r2 : u2;
  }
  N2.number = function(a2, c2) {
    return h2(a2, c2, function(a3, c3, s2) {
      J$3(s2, 1, 2);
      const l2 = s2[0];
      if (w$3(l2))
        return l2;
      if (l2 === null)
        return 0;
      if (P$5(l2))
        return Number(l2);
      if (I$5(l2))
        return Number(l2);
      if (Z$2(l2))
        return NaN;
      if (l2 === "")
        return Number(l2);
      if (l2 === void 0)
        return Number(l2);
      if (F$5(l2)) {
        if (s2[1] !== void 0) {
          let t2 = M$5(s2[1], "\u2030", "");
          return t2 = M$5(t2, "\xA4", ""), p$4(l2, { pattern: t2 });
        }
        return Number(l2.trim());
      }
      return Number(l2);
    });
  }, N2.abs = function(n2, r2) {
    return h2(n2, r2, function(n3, r3, u2) {
      return J$3(u2, 1, 1), Math.abs(X$3(u2[0]));
    });
  }, N2.acos = function(n2, r2) {
    return h2(n2, r2, function(n3, r3, u2) {
      return J$3(u2, 1, 1), Math.acos(X$3(u2[0]));
    });
  }, N2.asin = function(n2, r2) {
    return h2(n2, r2, function(n3, r3, u2) {
      return J$3(u2, 1, 1), Math.asin(X$3(u2[0]));
    });
  }, N2.atan = function(n2, r2) {
    return h2(n2, r2, function(n3, r3, u2) {
      return J$3(u2, 1, 1), Math.atan(X$3(u2[0]));
    });
  }, N2.atan2 = function(n2, r2) {
    return h2(n2, r2, function(n3, r3, u2) {
      return J$3(u2, 2, 2), Math.atan2(X$3(u2[0]), X$3(u2[1]));
    });
  }, N2.ceil = function(n2, r2) {
    return h2(n2, r2, function(n3, r3, u2) {
      if (J$3(u2, 1, 2), u2.length === 2) {
        let n4 = X$3(u2[1]);
        return isNaN(n4) && (n4 = 0), l$3("ceil", X$3(u2[0]), -1 * n4);
      }
      return Math.ceil(X$3(u2[0]));
    });
  }, N2.round = function(n2, r2) {
    return h2(n2, r2, function(n3, r3, u2) {
      if (J$3(u2, 1, 2), u2.length === 2) {
        let n4 = X$3(u2[1]);
        return isNaN(n4) && (n4 = 0), l$3("round", X$3(u2[0]), -1 * n4);
      }
      return Math.round(X$3(u2[0]));
    });
  }, N2.floor = function(n2, r2) {
    return h2(n2, r2, function(n3, r3, u2) {
      if (J$3(u2, 1, 2), u2.length === 2) {
        let n4 = X$3(u2[1]);
        return isNaN(n4) && (n4 = 0), l$3("floor", X$3(u2[0]), -1 * n4);
      }
      return Math.floor(X$3(u2[0]));
    });
  }, N2.cos = function(n2, r2) {
    return h2(n2, r2, function(n3, r3, u2) {
      return J$3(u2, 1, 1), Math.cos(X$3(u2[0]));
    });
  }, N2.isnan = function(n2, r2) {
    return h2(n2, r2, function(n3, r3, u2) {
      return J$3(u2, 1, 1), typeof u2[0] == "number" && isNaN(u2[0]);
    });
  }, N2.exp = function(n2, r2) {
    return h2(n2, r2, function(n3, r3, u2) {
      return J$3(u2, 1, 1), Math.exp(X$3(u2[0]));
    });
  }, N2.log = function(n2, r2) {
    return h2(n2, r2, function(n3, r3, u2) {
      return J$3(u2, 1, 1), Math.log(X$3(u2[0]));
    });
  }, N2.pow = function(n2, r2) {
    return h2(n2, r2, function(n3, r3, u2) {
      return J$3(u2, 2, 2), __pow(X$3(u2[0]), X$3(u2[1]));
    });
  }, N2.random = function(n2, r2) {
    return h2(n2, r2, function(n3, r3, u2) {
      return J$3(u2, 0, 0), Math.random();
    });
  }, N2.sin = function(n2, r2) {
    return h2(n2, r2, function(n3, r3, u2) {
      return J$3(u2, 1, 1), Math.sin(X$3(u2[0]));
    });
  }, N2.sqrt = function(n2, r2) {
    return h2(n2, r2, function(n3, r3, u2) {
      return J$3(u2, 1, 1), Math.sqrt(X$3(u2[0]));
    });
  }, N2.tan = function(n2, r2) {
    return h2(n2, r2, function(n3, r3, u2) {
      return J$3(u2, 1, 1), Math.tan(X$3(u2[0]));
    });
  }, N2.defaultvalue = function(n2, r2) {
    return h2(n2, r2, function(n3, r3, u2) {
      return J$3(u2, 2, 2), u2[0] === null || u2[0] === "" || u2[0] === void 0 ? u2[1] : u2[0];
    });
  }, N2.isempty = function(n2, r2) {
    return h2(n2, r2, function(n3, r3, u2) {
      return J$3(u2, 1, 1), u2[0] === null || (u2[0] === "" || u2[0] === void 0);
    });
  }, N2.boolean = function(n2, r2) {
    return h2(n2, r2, function(n3, r3, u2) {
      J$3(u2, 1, 1);
      const e2 = u2[0];
      return ee$3(e2);
    });
  }, N2.constrain = function(n2, r2) {
    return h2(n2, r2, function(n3, r3, u2) {
      J$3(u2, 3, 3);
      const e2 = X$3(u2[1]), i2 = X$3(u2[2]);
      if (Z$2(u2[0])) {
        const n4 = [];
        for (const t2 of u2[0])
          n4.push(m2(t2, e2, i2));
        return n4;
      }
      if (E$6(u2[0])) {
        const n4 = [];
        for (let t2 = 0; t2 < u2[0].length(); t2++)
          n4.push(m2(u2[0].get(t2), e2, i2));
        return n4;
      }
      return m2(u2[0], e2, i2);
    });
  };
}
function s$4(e2) {
  let t2 = 0;
  for (let n2 = 0; n2 < e2.length; n2++)
    t2 += e2[n2];
  return t2 / e2.length;
}
function c$2(e2) {
  const t2 = s$4(e2);
  let n2 = 0;
  for (let r2 = 0; r2 < e2.length; r2++)
    n2 += __pow(t2 - e2[r2], 2);
  return n2 / e2.length;
}
function u$3(e2) {
  let t2 = 0;
  for (let n2 = 0; n2 < e2.length; n2++)
    t2 += e2[n2];
  return t2;
}
function i$3(e2, s2) {
  const c2 = [], u2 = {}, i2 = [];
  for (let o2 = 0; o2 < e2.length; o2++) {
    if (e2[o2] !== void 0 && e2[o2] !== null && e2[o2] !== b$8) {
      const t2 = e2[o2];
      if (w$3(t2) || F$5(t2))
        u2[t2] === void 0 && (c2.push(t2), u2[t2] = 1);
      else {
        let e3 = false;
        for (let n2 = 0; n2 < i2.length; n2++)
          B$3(i2[n2], t2) === true && (e3 = true);
        e3 === false && (i2.push(t2), c2.push(t2));
      }
    }
    if (c2.length >= s2 && s2 !== -1)
      return c2;
  }
  return c2;
}
function l$2(t2, n2, r2 = 1e3) {
  switch (t2.toLowerCase()) {
    case "distinct":
      return i$3(n2, r2);
    case "avg":
    case "mean":
      return s$4(W$2(n2));
    case "min":
      return Math.min.apply(Math, W$2(n2));
    case "sum":
      return u$3(W$2(n2));
    case "max":
      return Math.max.apply(Math, W$2(n2));
    case "stdev":
    case "stddev":
      return Math.sqrt(c$2(W$2(n2)));
    case "var":
    case "variance":
      return c$2(W$2(n2));
    case "count":
      return n2.length;
  }
  return 0;
}
function i$2(n2, r2, i2, o2) {
  if (o2.length === 1) {
    if (Z$2(o2[0]))
      return l$2(n2, o2[0], -1);
    if (E$6(o2[0]))
      return l$2(n2, o2[0].toArray(), -1);
  }
  return l$2(n2, o2, -1);
}
function o$2(e2, o2) {
  e2.stdev = function(n2, t2) {
    return o2(n2, t2, function(n3, t3, r2) {
      return i$2("stdev", n3, t3, r2);
    });
  }, e2.variance = function(n2, t2) {
    return o2(n2, t2, function(n3, t3, r2) {
      return i$2("variance", n3, t3, r2);
    });
  }, e2.average = function(n2, t2) {
    return o2(n2, t2, function(n3, t3, r2) {
      return i$2("mean", n3, t3, r2);
    });
  }, e2.mean = function(n2, t2) {
    return o2(n2, t2, function(n3, t3, r2) {
      return i$2("mean", n3, t3, r2);
    });
  }, e2.sum = function(n2, t2) {
    return o2(n2, t2, function(n3, t3, r2) {
      return i$2("sum", n3, t3, r2);
    });
  }, e2.min = function(n2, t2) {
    return o2(n2, t2, function(n3, t3, r2) {
      return i$2("min", n3, t3, r2);
    });
  }, e2.max = function(n2, t2) {
    return o2(n2, t2, function(n3, t3, r2) {
      return i$2("max", n3, t3, r2);
    });
  }, e2.distinct = function(n2, t2) {
    return o2(n2, t2, function(n3, t3, r2) {
      return i$2("distinct", n3, t3, r2);
    });
  }, e2.count = function(e3, i2) {
    return o2(e3, i2, function(e4, i3, o3) {
      if (J$3(o3, 1, 1), Z$2(o3[0]) || F$5(o3[0]))
        return o3[0].length;
      if (E$6(o3[0]))
        return o3[0].length();
      throw new Error("Invalid Parameters for Count");
    });
  };
}
const c$1 = (e2) => (t2, r2, n2) => (n2 = n2 || 14, +e2(t2, r2).toFixed(n2)), o$1 = (e2, t2) => e2 + t2, d$2 = (e2, t2) => e2 * t2, l$1 = (e2, t2) => e2 / t2, h$3 = (e2, t2, r2) => c$1(o$1)(e2, t2, r2), _$1 = (e2, t2, r2) => c$1(d$2)(e2, t2, r2), f$2 = (e2, t2, r2) => c$1(l$1)(e2, t2, r2), g$2 = 360, w$2 = 400, E$3 = 2 * Math.PI, D$4 = 3600, A$3 = 3240, p$1 = 60, S$1 = 60, R$2 = 180 * D$4 / Math.PI, T$2 = g$2 * p$1 * S$1, M$3 = 90 * D$4, v$3 = 180 * D$4, F$3 = 270 * D$4, I$3 = String.fromCharCode(7501), U$1 = "\xB0";
function x$3(e2) {
  if (F$5(e2) === false)
    throw new Error("Invalid Parameter");
  return e2;
}
function O$2(e2, t2) {
  const r2 = __pow(10, t2);
  return Math.round(e2 * r2) / r2;
}
function G$2(e2, t2) {
  return e2 % t2;
}
function N$2(e2) {
  const t2 = parseFloat(e2.toString().replace(Math.trunc(e2).toString(), "0")) * Math.sign(e2);
  if (e2 < 0) {
    return { fraction: t2, integer: Math.ceil(e2) };
  }
  return { fraction: t2, integer: Math.floor(e2) };
}
function b$3(e2, t2) {
  switch (e2) {
    case 0:
      return t2 === "SHORT" ? "N" : "North";
    case 1:
      return t2 === "SHORT" ? "E" : "East";
    case 2:
      return t2 === "SHORT" ? "S" : "South";
    case 3:
      return t2 === "SHORT" ? "W" : "West";
  }
}
function H$1(e2, t2, r2) {
  for (; e2.length < r2; )
    e2 = t2 + e2;
  return e2;
}
function C$4(e2, t2) {
  return e2 - Math.floor(e2 / t2) * t2;
}
function y$2(e2) {
  switch (e2) {
    case 6:
    case 1:
      return g$2;
    case 4:
      return E$3;
    case 5:
      return w$2;
    case 2:
      return T$2;
    case 7:
      return p$1;
    case 8:
      return S$1;
    default:
      throw new Error("Unnexpected evaluations");
  }
}
function P$3(e2) {
  switch (e2.toUpperCase().trim()) {
    case "NORTH":
    case "NORTHAZIMUTH":
    case "NORTH AZIMUTH":
      return 1;
    case "POLAR":
      return 2;
    case "QUADRANT":
      return 3;
    case "SOUTH":
    case "SOUTHAZIMUTH":
    case "SOUTH AZIMUTH":
      return 4;
  }
  throw new Error("Unsupported direction type");
}
function k$2(e2) {
  switch (e2.toUpperCase().trim()) {
    case "D":
    case "DD":
    case "DECIMALDEGREE":
    case "DECIMAL DEGREE":
    case "DEGREE":
    case "DECIMALDEGREES":
    case "DECIMAL DEGREES":
    case "DEGREES":
      return 1;
    case "DMS":
    case "DEGREESMINUTESSECONDS":
    case "DEGREES MINUTES SECONDS":
      return 3;
    case "R":
    case "RAD":
    case "RADS":
    case "RADIAN":
    case "RADIANS":
      return 4;
    case "G":
    case "GON":
    case "GONS":
    case "GRAD":
    case "GRADS":
    case "GRADIAN":
    case "GRADIANS":
      return 5;
  }
  throw new Error("Unsupported units");
}
class L$4 {
  constructor(e2, t2, r2) {
    this.m_degrees = e2, this.m_minutes = t2, this.m_seconds = r2;
  }
  get_field(e2) {
    switch (e2) {
      case 1:
      case 6:
        return this.m_degrees;
      case 7:
        return this.m_minutes;
      case 2:
      case 8:
        return this.m_seconds;
      default:
        throw new Error("Unnexpected evaluation");
    }
  }
  static seconds_to_DMS(e2) {
    const t2 = N$2(e2).fraction;
    let r2 = N$2(e2).integer;
    const n2 = Math.floor(r2 / D$4);
    r2 -= n2 * D$4;
    const s2 = Math.floor(r2 / S$1);
    return r2 -= s2 * S$1, new L$4(n2, s2, r2 + t2);
  }
  static number_to_dms(e2) {
    const t2 = N$2(e2).fraction, r2 = N$2(e2).integer, n2 = _$1(N$2(100 * t2).fraction, 100), s2 = N$2(100 * t2).integer;
    return new L$4(r2, s2, n2);
  }
  format(e2, t2) {
    let r2 = O$2(this.m_seconds, t2), n2 = this.m_minutes, s2 = this.m_degrees;
    if (e2 === 2 || e2 === 8)
      S$1 <= r2 && (r2 -= S$1, ++n2), p$1 <= n2 && (n2 = 0, ++s2), g$2 <= s2 && (s2 = 0);
    else if (e2 === 7)
      r2 = 0, n2 = 30 <= this.m_seconds ? this.m_minutes + 1 : this.m_minutes, s2 = this.m_degrees, p$1 <= n2 && (n2 = 0, ++s2), g$2 <= s2 && (s2 = 0);
    else if (e2 === 1 || e2 === 6) {
      const e3 = f$2(this.m_seconds, D$4), t3 = f$2(this.m_minutes, p$1);
      s2 = Math.round(this.m_degrees + t3 + e3), n2 = 0, r2 = 0;
    }
    return new L$4(s2, n2, r2);
  }
  static DMS_to_seconds(e2, t2, r2) {
    return e2 * D$4 + t2 * S$1 + r2;
  }
}
class z$2 {
  constructor(e2, t2, r2) {
    this.meridian = e2, this.angle = t2, this.direction = r2;
  }
  fetch_azimuth(e2) {
    return e2 === 0 ? this.meridian : this.direction;
  }
}
class q$3 {
  constructor(e2) {
    this.m_angle = e2;
  }
  static createFromAngleAndDirection(e2, t2) {
    return new q$3(new Z$1(q$3.convertDirectionFormat(e2.extract_angular_units(2), t2, 1)));
  }
  getAngle(e2) {
    const t2 = this.m_angle.extract_angular_units(2);
    switch (e2) {
      case 1:
      case 4:
      case 2:
        return new Z$1(q$3.convertDirectionFormat(t2, 1, e2));
      case 3: {
        const e3 = q$3.seconds_north_azimuth_to_quadrant(t2);
        return new Z$1(e3.angle);
      }
    }
  }
  getMeridian(e2) {
    const t2 = this.m_angle.extract_angular_units(2);
    switch (e2) {
      case 1:
        return 0;
      case 4:
        return 2;
      case 2:
        return 1;
      case 3:
        return q$3.seconds_north_azimuth_to_quadrant(t2).meridian;
    }
  }
  getDirection(e2) {
    const t2 = this.m_angle.extract_angular_units(2);
    switch (e2) {
      case 1:
        return 1;
      case 4:
        return 3;
      case 2:
        return 0;
      case 3:
        return q$3.seconds_north_azimuth_to_quadrant(t2).direction;
    }
  }
  static seconds_north_azimuth_to_quadrant(e2) {
    const t2 = e2 <= M$3 || e2 >= F$3 ? 0 : 2, r2 = t2 === 0 ? Math.min(T$2 - e2, e2) : Math.abs(e2 - v$3);
    return new z$2(t2, r2, e2 > v$3 ? 3 : 1);
  }
  static createFromAngleMeridianAndDirection(e2, t2, r2) {
    return new q$3(new Z$1(q$3.secondsQuadrantToNorthAzimuth(e2.extract_angular_units(2), t2, r2)));
  }
  static secondsQuadrantToNorthAzimuth(e2, t2, r2) {
    return t2 === 0 ? r2 === 1 ? e2 : T$2 - e2 : r2 === 1 ? v$3 - e2 : v$3 + e2;
  }
  static convertDirectionFormat(e2, t2, r2) {
    let n2 = 0;
    switch (t2) {
      case 1:
        n2 = e2;
        break;
      case 2:
        n2 = M$3 - e2;
        break;
      case 3:
        throw new Error("Unnexpected evaluation");
      case 4:
        n2 = e2 + v$3;
    }
    let s2 = 0;
    switch (r2) {
      case 1:
        s2 = n2;
        break;
      case 2:
        s2 = M$3 - n2;
        break;
      case 3:
        throw new Error("Unnexpected evaluation");
      case 4:
        s2 = n2 - v$3;
    }
    return s2 = G$2(s2, T$2), s2 < 0 ? T$2 + s2 : s2;
  }
}
function W$1(e2, t2, r2) {
  let n2 = null;
  switch (t2) {
    case 1:
      n2 = _$1(e2, D$4);
      break;
    case 2:
      n2 = e2;
      break;
    case 5:
      n2 = _$1(e2, A$3);
      break;
    case 4:
      n2 = _$1(e2, R$2);
      break;
    default:
      throw new Error("Unnexpected evaluation");
  }
  switch (r2) {
    case 1:
      return f$2(n2, D$4);
    case 2:
      return n2;
    case 5:
      return f$2(n2, A$3);
    case 4:
      return n2 / R$2;
    default:
      throw new Error("Unnexpected evaluation");
  }
}
class Z$1 {
  constructor(e2) {
    this.m_seconds = e2;
  }
  static createFromAngleAndUnits(e2, t2) {
    return new Z$1(W$1(e2, t2, 2));
  }
  extract_angular_units(e2) {
    return W$1(this.m_seconds, 2, B$2(e2));
  }
  static createFromDegreesMinutesSeconds(e2, t2, r2) {
    return new Z$1(h$3(h$3(_$1(e2, D$4), _$1(t2, S$1)), r2));
  }
}
function B$2(e2) {
  switch (e2) {
    case 1:
    case 6:
    case 3:
      return 1;
    case 5:
      return 5;
    case 7:
      return 7;
    case 4:
      return 4;
    case 2:
    case 8:
      return 2;
  }
}
class Q$2 {
  constructor(e2, t2, r2, n2) {
    this.m_view = e2, this.m_angle = t2, this.m_merdian = r2, this.m_direction = n2, this.m_dms = null, this.m_formatted_dms = null;
  }
  static createFromStringAndBearing(e2, t2, r2) {
    return new Q$2(e2, t2.getAngle(r2), t2.getMeridian(r2), t2.getDirection(r2));
  }
  fetch_angle() {
    return this.m_angle;
  }
  fetch_meridian() {
    return this.m_merdian;
  }
  fetch_direction() {
    return this.m_direction;
  }
  fetch_m_view() {
    return this.m_view;
  }
  fetch_dms() {
    return this.m_dms === null && this.calculate_dms(), this.m_dms;
  }
  fetch_formatted_dms() {
    return this.m_formatted_dms === null && this.calculate_dms(), this.m_formatted_dms;
  }
  calculate_dms() {
    let e2 = null, t2 = 6, r2 = 0;
    for (let n2 = 0; n2 < this.m_view.length; n2++) {
      const s2 = this.m_view[n2];
      switch (s2) {
        case "m":
          e2 = se$2(this.m_view, n2, s2), t2 = t2 === 6 ? 7 : t2, n2 = e2.newpos;
          continue;
        case "s":
          e2 = se$2(this.m_view, n2, s2), t2 = 8, r2 = r2 < e2.rounding ? e2.rounding : r2, n2 = e2.newpos;
          continue;
        default:
          continue;
      }
    }
    this.m_dms = L$4.seconds_to_DMS(this.m_angle.extract_angular_units(2)), this.m_formatted_dms = L$4.seconds_to_DMS(this.m_angle.extract_angular_units(2)).format(t2, r2);
  }
}
function j$4(e2, t2, r2, n2, s2) {
  let i2 = null;
  switch (t2) {
    case 1:
    case 4:
    case 5:
      return i2 = C$4(O$2(e2.extract_angular_units(t2), n2), y$2(t2)), H$1(i2.toFixed(n2), "0", r2 + n2 + (n2 > 0 ? 1 : 0));
    case 6:
    case 7:
      return i2 = C$4(s2.fetch_formatted_dms().get_field(t2), y$2(t2)), H$1(i2.toFixed(n2), "0", r2 + n2 + (n2 > 0 ? 1 : 0));
    case 8:
      return i2 = C$4(O$2(s2.fetch_dms().get_field(t2), n2), y$2(t2)), H$1(i2.toFixed(n2), "0", r2 + n2 + (n2 > 0 ? 1 : 0));
    default:
      throw new Error("Unnexepected evaluation");
  }
}
function X$2(e2, t2, r2) {
  if (r2 === 3)
    throw new Error("Conversion error");
  if (t2 === 3) {
    const t3 = L$4.number_to_dms(e2);
    return q$3.createFromAngleAndDirection(Z$1.createFromDegreesMinutesSeconds(t3.m_degrees, t3.m_minutes, t3.m_seconds), r2);
  }
  return q$3.createFromAngleAndDirection(Z$1.createFromAngleAndUnits(e2, B$2(t2)), r2);
}
function V$2(e2) {
  switch (X$3(e2)) {
    case 1:
      return { first: 0, second: 1 };
    case 2:
      return { first: 2, second: 1 };
    case 3:
      return { first: 2, second: 3 };
    case 4:
      return { first: 0, second: 3 };
  }
  return null;
}
function J$2(e2) {
  switch (e2.toUpperCase().trim()) {
    case "N":
    case "NORTH":
      return 0;
    case "E":
    case "EAST":
      return 1;
    case "S":
    case "SOUTH":
      return 2;
    case "W":
    case "WEST":
      return 3;
  }
  return null;
}
function K$1(e2) {
  const t2 = parseFloat(e2);
  if (w$3(t2)) {
    if (isNaN(t2))
      throw new Error("Invalid conversion");
    return t2;
  }
  throw new Error("Invalid conversion");
}
function Y$1(t2, r2, n2) {
  const s2 = n2 === 3;
  let i2 = null, a2 = null, c2 = 0, o2 = 0, u2 = 0;
  if (s2) {
    if (t2.length < 2)
      throw new Error("Conversion Error");
    u2 = 1;
    const r3 = V$2(K$2(t2[t2.length - 1]));
    if (r3 ? (i2 = r3.first, a2 = r3.second) : (c2 = 1, i2 = J$2(K$2(t2[0])), a2 = J$2(K$2(t2[t2.length - 1]))), i2 === null || a2 === null)
      throw new Error("Invalid Conversion");
  }
  switch (r2) {
    case 1:
    case 4:
    case 5:
      if (t2.length === 0)
        throw new Error("Invalid Conversion");
      return s2 ? q$3.createFromAngleMeridianAndDirection(Z$1.createFromAngleAndUnits(K$1(t2[c2]), B$2(r2)), i2, a2) : q$3.createFromAngleAndDirection(Z$1.createFromAngleAndUnits(K$1(t2[c2]), B$2(r2)), n2);
    case 3:
      if (o2 = t2.length - u2 - c2, o2 === 3) {
        const e2 = Z$1.createFromDegreesMinutesSeconds(K$1(t2[c2]), K$1(t2[c2 + 1]), K$1(t2[c2 + 2]));
        return s2 ? q$3.createFromAngleMeridianAndDirection(e2, i2, a2) : q$3.createFromAngleAndDirection(e2, n2);
      }
      if (o2 === 1) {
        const e2 = K$1(t2[c2]), r3 = L$4.number_to_dms(e2), o3 = Z$1.createFromDegreesMinutesSeconds(r3.m_degrees, r3.m_minutes, r3.m_seconds);
        return s2 ? q$3.createFromAngleMeridianAndDirection(o3, i2, a2) : q$3.createFromAngleAndDirection(o3, n2);
      }
  }
  throw new Error("Conversion Error");
}
function $$3(e2) {
  const t2 = [" ", "-", "/", "'", '"', "\\", "^", U$1, I$3, "	", "\r", "\n", "*"];
  let r2 = "";
  for (let n2 = 0; n2 < e2.length; n2++) {
    const s2 = e2.charAt(n2);
    t2.indexOf(s2) !== -1 ? r2 += "RRSPLITRRSPLITRR" : r2 += s2;
  }
  return r2.split("RRSPLITRRSPLITRR").filter((e3) => e3 !== "");
}
function ee$2(e2, a2, c2) {
  if (w$3(e2))
    return X$2(X$3(e2), a2, c2);
  if (F$5(e2))
    return Y$1($$3(e2), a2, c2);
  if (Z$2(e2))
    return Y$1(e2, a2, c2);
  if (E$6(e2))
    return Y$1(e2.toArray(), a2, c2);
  throw new Error("Conversion Error");
}
function te$1(e2, t2, r2) {
  const n2 = B$2(r2);
  if (n2 && r2 !== 3) {
    return e2.getAngle(t2).extract_angular_units(n2);
  }
  throw new Error("Conversion Error");
}
function re$2(e2, t2, r2) {
  const n2 = e2.getAngle(t2);
  if (t2 === 3 && r2 === 3) {
    const r3 = L$4.seconds_to_DMS(n2.extract_angular_units(2));
    return [b$3(e2.getMeridian(t2), "SHORT"), r3.m_degrees, r3.m_minutes, r3.m_seconds, b$3(e2.getDirection(t2), "SHORT")];
  }
  if (r2 === 3) {
    const e3 = L$4.seconds_to_DMS(n2.extract_angular_units(2));
    return [e3.m_degrees, e3.m_minutes, e3.m_seconds];
  }
  return t2 === 3 ? [b$3(e2.getMeridian(t2), "SHORT"), n2.extract_angular_units(r2), b$3(e2.getDirection(t2), "SHORT")] : [n2.extract_angular_units(r2)];
}
function ne$1(e2, t2) {
  let r2 = "";
  switch (e2) {
    case 1:
      r2 = t2 === 3 ? "DD.DD" + U$1 : "DDD.DD" + U$1;
      break;
    case 3:
      r2 = t2 === 3 ? "dd" + U$1 + ` mm' ss"` : "ddd" + U$1 + ` mm' ss.ss"`;
      break;
    case 4:
      r2 = "R.RR";
      break;
    case 5:
      r2 = "GGG.GG" + I$3;
      break;
    default:
      throw new Error("Conversion error");
  }
  return t2 === 3 && (r2 = "p " + r2 + " b"), r2;
}
function se$2(e2, t2, r2) {
  const n2 = { padding: 0, rounding: 0, newpos: t2 };
  let s2 = false;
  for (; t2 < e2.length; ) {
    const i2 = e2[t2];
    if (i2 === r2)
      s2 ? n2.rounding++ : n2.padding++, t2++;
    else {
      if (i2 !== ".")
        break;
      s2 = true, t2++;
    }
  }
  return n2.newpos = t2 - 1, n2;
}
function ie$2(e2, t2, r2) {
  const n2 = { escaped: "", newpos: t2 };
  for (t2++; t2 < e2.length; ) {
    const r3 = e2[t2];
    if (t2++, r3 === "]")
      break;
    n2.escaped += r3;
  }
  return n2.newpos = t2 - 1, n2;
}
function ae$2(e2, t2, r2) {
  let n2 = "", s2 = null, i2 = null;
  const a2 = Q$2.createFromStringAndBearing(t2, e2, r2), c2 = { D: 1, d: 6, m: 7, s: 8, R: 4, G: 5 };
  for (let o2 = 0; o2 < t2.length; o2++) {
    const u2 = t2[o2];
    switch (u2) {
      case "[":
        s2 = ie$2(t2, o2), n2 += s2.escaped, o2 = s2.newpos;
        continue;
      case "D":
      case "d":
      case "m":
      case "s":
      case "R":
      case "G":
        s2 = se$2(t2, o2, u2), i2 = e2.getAngle(r2), n2 += j$4(i2, c2[u2], s2.padding, s2.rounding, a2), o2 = s2.newpos;
        continue;
      case "P":
      case "p":
        n2 += b$3(a2.fetch_meridian(), u2 === "p" ? "SHORT" : "LONG");
        continue;
      case "B":
      case "b":
        n2 += b$3(a2.fetch_direction(), u2 === "b" ? "SHORT" : "LONG");
        continue;
      default:
        n2 += u2;
    }
  }
  return n2;
}
function ce$2(t2, r2, n2) {
  if (!(r2 instanceof h$7))
    throw new Error("Invalid Parameter");
  if (r2.hasField("directionType") === false)
    throw new Error("Invalid Parameter - Missing directionType");
  if (r2.hasField("angleType") === false)
    throw new Error("Invalid Parameter - Missing directionType");
  const s2 = P$3(x$3(r2.field("directiontype"))), i2 = ee$2(t2, k$2(x$3(r2.field("angletype"))), s2);
  if (!(n2 instanceof h$7))
    throw new Error("Invalid Parameter");
  if (n2.hasField("directionType") === false)
    throw new Error("Invalid Parameter - Missing directionType");
  if (n2.hasField("outputType") === false)
    throw new Error("Invalid Parameter - Missing directionType");
  const c2 = P$3(x$3(n2.field("directiontype"))), o2 = n2.hasField("angleType") ? k$2(x$3(n2.field("angletype"))) : null, u2 = x$3(n2.field("outputType")).toUpperCase().trim();
  if (!c2 || !u2)
    throw new Error("Conversion error");
  if (!(o2 || u2 === "TEXT" && n2.hasField("format")))
    throw new Error("Invalid unit");
  switch (u2) {
    case "VALUE":
      return c2 === 3 || o2 === 3 ? re$2(i2, c2, o2) : te$1(i2, c2, o2);
    case "TEXT": {
      let t3 = "";
      return n2.hasField("format") && (t3 = K$2(n2.field("format"))), t3 !== null && t3 !== "" || (t3 = ne$1(o2, c2)), ae$2(i2, t3, c2);
    }
    default:
      throw new Error("Invalid Parameter");
  }
}
const t = 2654435761, s$3 = 2246822519, n$2 = 3266489917, e$6 = 668265263, r$5 = 374761393;
function h$2(t2) {
  const s2 = [];
  for (let n2 = 0, e2 = t2.length; n2 < e2; n2++) {
    let e3 = t2.charCodeAt(n2);
    e3 < 128 ? s2.push(e3) : e3 < 2048 ? s2.push(192 | e3 >> 6, 128 | 63 & e3) : e3 < 55296 || e3 >= 57344 ? s2.push(224 | e3 >> 12, 128 | e3 >> 6 & 63, 128 | 63 & e3) : (n2++, e3 = 65536 + ((1023 & e3) << 10 | 1023 & t2.charCodeAt(n2)), s2.push(240 | e3 >> 18, 128 | e3 >> 12 & 63, 128 | e3 >> 6 & 63, 128 | 63 & e3));
  }
  return new Uint8Array(s2);
}
class i$1 {
  constructor(t2) {
    this.seed = t2, this.totallen = 0, this.bufs = [], this.init();
  }
  init() {
    return this.bufs = [], this.totallen = 0, this;
  }
  updateFloatArray(t2) {
    const s2 = [];
    for (const n2 of t2)
      isNaN(n2) ? s2.push("NaN") : n2 === 1 / 0 ? s2.push("Infinity") : n2 === -1 / 0 ? s2.push("-Infinity") : n2 === 0 ? s2.push("0") : s2.push(n2.toString(16));
    this.update(h$2(s2.join("")));
  }
  updateIntArray(t2) {
    const s2 = Int32Array.from(t2);
    this.update(new Uint8Array(s2.buffer));
  }
  updateUint8Array(t2) {
    this.update(Uint8Array.from(t2));
  }
  updateWithString(t2) {
    return this.update(h$2(t2));
  }
  update(t2) {
    return this.bufs.push(t2), this.totallen += t2.length, this;
  }
  digest() {
    const t2 = new Uint8Array(this.totallen);
    let s2 = 0;
    for (const n2 of this.bufs)
      t2.set(n2, s2), s2 += n2.length;
    return this.init(), this.xxHash32(t2, this.seed);
  }
  xxHash32(h2, i2 = 0) {
    const o2 = h2;
    let u2 = i2 + r$5 & 4294967295, a2 = 0;
    if (o2.length >= 16) {
      const n2 = [i2 + t + s$3 & 4294967295, i2 + s$3 & 4294967295, i2 + 0 & 4294967295, i2 - t & 4294967295], e2 = h2, r2 = e2.length - 16;
      let o3 = 0;
      for (a2 = 0; (4294967280 & a2) <= r2; a2 += 4) {
        const r3 = a2, h3 = e2[r3 + 0] + (e2[r3 + 1] << 8), i3 = e2[r3 + 2] + (e2[r3 + 3] << 8), u3 = h3 * s$3 + (i3 * s$3 << 16);
        let l3 = n2[o3] + u3 & 4294967295;
        l3 = l3 << 13 | l3 >>> 19;
        const f2 = 65535 & l3, p2 = l3 >>> 16;
        n2[o3] = f2 * t + (p2 * t << 16) & 4294967295, o3 = o3 + 1 & 3;
      }
      u2 = (n2[0] << 1 | n2[0] >>> 31) + (n2[1] << 7 | n2[1] >>> 25) + (n2[2] << 12 | n2[2] >>> 20) + (n2[3] << 18 | n2[3] >>> 14) & 4294967295;
    }
    u2 = u2 + h2.length & 4294967295;
    const l2 = h2.length - 4;
    for (; a2 <= l2; a2 += 4) {
      const t2 = a2, s2 = o2[t2 + 0] + (o2[t2 + 1] << 8), r2 = o2[t2 + 2] + (o2[t2 + 3] << 8);
      u2 = u2 + (s2 * n$2 + (r2 * n$2 << 16)) & 4294967295, u2 = u2 << 17 | u2 >>> 15, u2 = (65535 & u2) * e$6 + ((u2 >>> 16) * e$6 << 16) & 4294967295;
    }
    for (; a2 < o2.length; ++a2) {
      u2 += o2[a2] * r$5, u2 = u2 << 11 | u2 >>> 21, u2 = (65535 & u2) * t + ((u2 >>> 16) * t << 16) & 4294967295;
    }
    return u2 ^= u2 >>> 15, u2 = ((65535 & u2) * s$3 & 4294967295) + ((u2 >>> 16) * s$3 << 16), u2 ^= u2 >>> 13, u2 = ((65535 & u2) * n$2 & 4294967295) + ((u2 >>> 16) * n$2 << 16), u2 ^= u2 >>> 16, u2 < 0 ? u2 + 4294967296 : u2;
  }
}
function C$3(t2, e2) {
  if (t2.x === e2.x && t2.y === e2.y) {
    if (t2.hasZ) {
      if (t2.z !== e2.z)
        return false;
    } else if (e2.hasZ)
      return false;
    if (t2.hasM) {
      if (t2.m !== e2.m)
        return false;
    } else if (e2.hasM)
      return false;
    return true;
  }
  return false;
}
function L$3(i2, u2, s2) {
  if (i2 !== null)
    if (Z$2(i2)) {
      if (u2.updateUint8Array([61]), s2.map.has(i2)) {
        const t2 = s2.map.get(i2);
        u2.updateIntArray([61237541 ^ t2]);
      } else {
        s2.map.set(i2, s2.currentLength++);
        for (const t2 of i2)
          L$3(t2, u2, s2);
        s2.map.delete(i2), s2.currentLength--;
      }
      u2.updateUint8Array([199]);
    } else if (E$6(i2)) {
      if (u2.updateUint8Array([61]), s2.map.has(i2)) {
        const t2 = s2.map.get(i2);
        u2.updateIntArray([61237541 ^ t2]);
      } else {
        s2.map.set(i2, s2.currentLength++);
        for (const t2 of i2.toArray())
          L$3(t2, u2, s2);
        s2.map.delete(i2), s2.currentLength--;
      }
      u2.updateUint8Array([199]);
    } else {
      if (P$5(i2))
        return u2.updateIntArray([i2.getTime()]), void u2.updateUint8Array([241]);
      if (F$5(i2))
        return u2.updateIntArray([i2.length]), u2.updateWithString(i2), void u2.updateUint8Array([41]);
      if (I$5(i2))
        u2.updateUint8Array([i2 === true ? 1 : 0, 113]);
      else {
        if (w$3(i2))
          return u2.updateFloatArray([i2]), void u2.updateUint8Array([173]);
        if (i2 instanceof e$8)
          throw new Error("Type not supported in Hash");
        if (i2 instanceof s$7)
          throw new Error("Type not supported in Hash");
        if (!(i2 instanceof h$7)) {
          if (i2 instanceof g$5)
            throw new Error("Type not supported in Hash");
          if (i2 instanceof j$6)
            return u2.updateIntArray([3833836621]), u2.updateIntArray([0]), u2.updateFloatArray([i2.x]), u2.updateIntArray([1]), u2.updateFloatArray([i2.y]), i2.hasZ && (u2.updateIntArray([2]), u2.updateFloatArray([i2.z])), i2.hasM && (u2.updateIntArray([3]), u2.updateFloatArray([i2.m])), u2.updateIntArray([3765347959]), void L$3(i2.spatialReference.wkid, u2, s2);
          if (i2 instanceof x$7) {
            u2.updateIntArray([1266616829]);
            for (let t2 = 0; t2 < i2.rings.length; t2++) {
              const e2 = i2.rings[t2], r2 = [];
              let n2 = null, o2 = null;
              for (let a2 = 0; a2 < e2.length; a2++) {
                const u3 = i2.getPoint(t2, a2);
                if (a2 === 0)
                  n2 = u3;
                else if (C$3(o2, u3))
                  continue;
                o2 = u3, a2 === e2.length - 1 && C$3(n2, u3) || r2.push(u3);
              }
              u2.updateIntArray([1397116793, r2.length]);
              for (let t3 = 0; t3 < r2.length; t3++) {
                const e3 = r2[t3];
                u2.updateIntArray([3962308117, t3]), L$3(e3, u2, s2), u2.updateIntArray([2716288009]);
              }
              u2.updateIntArray([2278822459]);
            }
            return u2.updateIntArray([3878477243]), void L$3(i2.spatialReference.wkid, u2, s2);
          }
          if (i2 instanceof m$5) {
            u2.updateIntArray([4106883559]);
            for (let t2 = 0; t2 < i2.paths.length; t2++) {
              const e2 = i2.paths[t2];
              u2.updateIntArray([1397116793, e2.length]);
              for (let r2 = 0; r2 < e2.length; r2++)
                u2.updateIntArray([3962308117, r2]), L$3(i2.getPoint(t2, r2), u2, s2), u2.updateIntArray([2716288009]);
              u2.updateIntArray([2278822459]);
            }
            return u2.updateIntArray([2568784753]), void L$3(i2.spatialReference.wkid, u2, s2);
          }
          if (i2 instanceof m$6) {
            u2.updateIntArray([588535921, i2.points.length]);
            for (let t2 = 0; t2 < i2.points.length; t2++) {
              const e2 = i2.getPoint(t2);
              u2.updateIntArray([t2]), L$3(e2, u2, s2);
            }
            return u2.updateIntArray([1700171621]), void L$3(i2.spatialReference.wkid, u2, s2);
          }
          if (i2 instanceof M$6)
            return u2.updateIntArray([3483648373]), u2.updateIntArray([0]), u2.updateFloatArray([i2.xmax]), u2.updateIntArray([1]), u2.updateFloatArray([i2.xmin]), u2.updateIntArray([2]), u2.updateFloatArray([i2.ymax]), u2.updateIntArray([3]), u2.updateFloatArray([i2.ymin]), i2.hasZ && (u2.updateIntArray([4]), u2.updateFloatArray([i2.zmax]), u2.updateIntArray([5]), u2.updateFloatArray([i2.zmin])), i2.hasM && (u2.updateIntArray([6]), u2.updateFloatArray([i2.mmax]), u2.updateIntArray([7]), u2.updateFloatArray([i2.mmin])), u2.updateIntArray([3622027469]), void L$3(i2.spatialReference.wkid, u2, s2);
          if (i2 instanceof k$5)
            return u2.updateIntArray([14]), i2.wkid !== void 0 && i2.wkid !== null && u2.updateIntArray([i2.wkid]), void (i2.wkt && u2.updateWithString(i2.wkt));
          if (v$4(i2))
            throw new Error("Type not supported in Hash");
          if (k$4(i2))
            throw new Error("Type not supported in Hash");
          if (D$7(i2))
            throw new Error("Type not supported in Hash");
          if (i2 === b$8)
            throw new Error("Type not supported in Hash");
          throw new Error("Type not supported in Hash");
        }
        if (u2.updateUint8Array([223]), s2.map.has(i2)) {
          const t2 = s2.map.get(i2);
          u2.updateIntArray([61237541 ^ t2]);
        } else {
          s2.map.set(i2, s2.currentLength++);
          for (const t2 of i2.keys()) {
            u2.updateIntArray([t2.length]), u2.updateWithString(t2), u2.updateUint8Array([251]);
            L$3(i2.field(t2), u2, s2), u2.updateUint8Array([239]);
          }
          s2.map.delete(i2), s2.currentLength--;
        }
        u2.updateUint8Array([73]);
      }
    }
  else
    u2.updateUint8Array([0, 139]);
}
function N$1(t2, e2) {
  t2.portal = function(t3, r2) {
    return e2(t3, r2, function(t4, e3, r3) {
      return J$3(r3, 1, 1), new s$7(K$2(r3[0]));
    });
  }, t2.trim = function(t3, r2) {
    return e2(t3, r2, function(t4, e3, r3) {
      return J$3(r3, 1, 1), K$2(r3[0]).trim();
    });
  }, t2.tohex = function(t3, r2) {
    return e2(t3, r2, function(t4, e3, r3) {
      J$3(r3, 1, 1);
      const n2 = X$3(r3[0]);
      return isNaN(n2) ? n2 : n2.toString(16);
    });
  }, t2.upper = function(t3, r2) {
    return e2(t3, r2, function(t4, e3, r3) {
      return J$3(r3, 1, 1), K$2(r3[0]).toUpperCase();
    });
  }, t2.proper = function(t3, r2) {
    return e2(t3, r2, function(t4, e3, r3) {
      J$3(r3, 1, 2);
      let n2 = 1;
      r3.length === 2 && K$2(r3[1]).toLowerCase() === "firstword" && (n2 = 2);
      const o2 = /\s/, a2 = K$2(r3[0]);
      let s2 = "", f2 = true;
      for (let i2 = 0; i2 < a2.length; i2++) {
        let t5 = a2[i2];
        if (o2.test(t5))
          n2 === 1 && (f2 = true);
        else {
          t5.toUpperCase() !== t5.toLowerCase() && (f2 ? (t5 = t5.toUpperCase(), f2 = false) : t5 = t5.toLowerCase());
        }
        s2 += t5;
      }
      return s2;
    });
  }, t2.lower = function(t3, r2) {
    return e2(t3, r2, function(t4, e3, r3) {
      return J$3(r3, 1, 1), K$2(r3[0]).toLowerCase();
    });
  }, t2.guid = function(t3, r2) {
    return e2(t3, r2, function(t4, e3, r3) {
      if (J$3(r3, 0, 1), r3.length > 0)
        switch (K$2(r3[0]).toLowerCase()) {
          case "digits":
            return z$4().replace("-", "").replace("-", "").replace("-", "").replace("-", "");
          case "digits-hyphen":
            return z$4();
          case "digits-hyphen-braces":
            return "{" + z$4() + "}";
          case "digits-hyphen-parentheses":
            return "(" + z$4() + ")";
        }
      return "{" + z$4() + "}";
    });
  }, t2.console = function(t3, r2) {
    return e2(t3, r2, function(e3, r3, n2) {
      return n2.length === 0 || (n2.length === 1 ? t3.console(K$2(n2[0])) : t3.console(K$2(n2))), b$8;
    });
  }, t2.mid = function(t3, r2) {
    return e2(t3, r2, function(t4, e3, r3) {
      J$3(r3, 2, 3);
      let n2 = X$3(r3[1]);
      if (isNaN(n2))
        return "";
      if (n2 < 0 && (n2 = 0), r3.length === 2)
        return K$2(r3[0]).substr(n2);
      let o2 = X$3(r3[2]);
      return isNaN(o2) ? "" : (o2 < 0 && (o2 = 0), K$2(r3[0]).substr(n2, o2));
    });
  }, t2.find = function(t3, r2) {
    return e2(t3, r2, function(t4, e3, r3) {
      J$3(r3, 2, 3);
      let n2 = 0;
      if (r3.length > 2) {
        if (n2 = X$3(O$5(r3[2], 0)), isNaN(n2))
          return -1;
        n2 < 0 && (n2 = 0);
      }
      return K$2(r3[1]).indexOf(K$2(r3[0]), n2);
    });
  }, t2.left = function(t3, r2) {
    return e2(t3, r2, function(t4, e3, r3) {
      J$3(r3, 2, 2);
      let n2 = X$3(r3[1]);
      return isNaN(n2) ? "" : (n2 < 0 && (n2 = 0), K$2(r3[0]).substr(0, n2));
    });
  }, t2.right = function(t3, r2) {
    return e2(t3, r2, function(t4, e3, r3) {
      J$3(r3, 2, 2);
      let n2 = X$3(r3[1]);
      return isNaN(n2) ? "" : (n2 < 0 && (n2 = 0), K$2(r3[0]).substr(-1 * n2, n2));
    });
  }, t2.split = function(t3, r2) {
    return e2(t3, r2, function(t4, e3, r3) {
      let n2;
      J$3(r3, 2, 4);
      let o2 = X$3(O$5(r3[2], -1));
      const a2 = ee$3(O$5(r3[3], false));
      if (o2 === -1 || o2 === null || a2 === true ? n2 = K$2(r3[0]).split(K$2(r3[1])) : (isNaN(o2) && (o2 = -1), o2 < -1 && (o2 = -1), n2 = K$2(r3[0]).split(K$2(r3[1]), o2)), a2 === false)
        return n2;
      const f2 = [];
      for (let i2 = 0; i2 < n2.length && !(o2 !== -1 && f2.length >= o2); i2++)
        n2[i2] !== "" && n2[i2] !== void 0 && f2.push(n2[i2]);
      return f2;
    });
  }, t2.text = function(t3, r2) {
    return e2(t3, r2, function(t4, e3, r3) {
      return J$3(r3, 1, 2), H$2(r3[0], r3[1]);
    });
  }, t2.concatenate = function(t3, r2) {
    return e2(t3, r2, function(t4, e3, r3) {
      const n2 = [];
      if (r3.length < 1)
        return "";
      if (Z$2(r3[0])) {
        const t5 = O$5(r3[2], "");
        for (let e4 = 0; e4 < r3[0].length; e4++)
          n2[e4] = H$2(r3[0][e4], t5);
        return r3.length > 1 ? n2.join(r3[1]) : n2.join("");
      }
      if (E$6(r3[0])) {
        const t5 = O$5(r3[2], "");
        for (let e4 = 0; e4 < r3[0].length(); e4++)
          n2[e4] = H$2(r3[0].get(e4), t5);
        return r3.length > 1 ? n2.join(r3[1]) : n2.join("");
      }
      for (let o2 = 0; o2 < r3.length; o2++)
        n2[o2] = H$2(r3[o2]);
      return n2.join("");
    });
  }, t2.reverse = function(t3, r2) {
    return e2(t3, r2, function(t4, e3, r3) {
      if (J$3(r3, 1, 1), Z$2(r3[0])) {
        const t5 = r3[0].slice(0);
        return t5.reverse(), t5;
      }
      if (E$6(r3[0])) {
        const t5 = r3[0].toArray().slice(0);
        return t5.reverse(), t5;
      }
      throw new Error("Invalid Parameter");
    });
  }, t2.replace = function(t3, r2) {
    return e2(t3, r2, function(t4, e3, r3) {
      J$3(r3, 3, 4);
      const n2 = K$2(r3[0]), o2 = K$2(r3[1]), a2 = K$2(r3[2]);
      return r3.length !== 4 || ee$3(r3[3]) ? M$5(n2, o2, a2) : n2.replace(o2, a2);
    });
  }, t2.schema = function(t3, r2) {
    return e2(t3, r2, function(t4, e3, r3) {
      if (r3[0] instanceof g$5) {
        const t5 = r3[0].schema();
        return t5 ? h$7.convertObjectToArcadeDictionary(t5) : null;
      }
      throw new Error("Invalid Parameter");
    });
  }, t2.subtypes = function(t3, r2) {
    return e2(t3, r2, function(t4, e3, r3) {
      if (J$3(r3, 1, 1), r3[0] instanceof g$5) {
        const t5 = r3[0].subtypes();
        return t5 ? h$7.convertObjectToArcadeDictionary(t5) : null;
      }
      throw new Error("Invalid Parameter");
    });
  }, t2.subtypecode = function(t3, r2) {
    return e2(t3, r2, function(t4, e3, r3) {
      if (J$3(r3, 1, 1), r3[0] instanceof g$5) {
        const t5 = r3[0].subtypes();
        if (!t5)
          return null;
        if (t5.subtypeField && r3[0].hasField(t5.subtypeField)) {
          const e4 = r3[0].field(t5.subtypeField);
          for (const r4 of t5.subtypes)
            if (r4.code === e4)
              return r4.code;
          return null;
        }
        return null;
      }
      throw new Error("Invalid Parameter");
    });
  }, t2.subtypename = function(t3, r2) {
    return e2(t3, r2, function(t4, e3, r3) {
      if (J$3(r3, 1, 1), r3[0] instanceof g$5) {
        const t5 = r3[0].subtypes();
        if (!t5)
          return "";
        if (t5.subtypeField && r3[0].hasField(t5.subtypeField)) {
          const e4 = r3[0].field(t5.subtypeField);
          for (const r4 of t5.subtypes)
            if (r4.code === e4)
              return r4.name;
          return "";
        }
        return "";
      }
      throw new Error("Invalid Parameter");
    });
  }, t2.gdbversion = function(t3, r2) {
    return e2(t3, r2, function(t4, e3, r3) {
      if (J$3(r3, 1, 1), r3[0] instanceof g$5)
        return r3[0].gdbVersion();
      throw new Error("Invalid Parameter");
    });
  }, t2.domain = function(t3, r2) {
    return e2(t3, r2, function(t4, e3, r3) {
      if (J$3(r3, 2, 3), r3[0] instanceof g$5) {
        const t5 = r3[0].fullDomain(K$2(r3[1]), r3[2] === void 0 ? void 0 : X$3(r3[2]));
        return t5 && t5.domain ? t5.domain.type === "coded-value" || t5.domain.type === "codedValue" ? h$7.convertObjectToArcadeDictionary({ type: "codedValue", name: t5.domain.name, dataType: D$6[t5.field.type], codedValues: t5.domain.codedValues.map((t6) => ({ name: t6.name, code: t6.code })) }) : h$7.convertObjectToArcadeDictionary({ type: "range", name: t5.domain.name, dataType: D$6[t5.field.type], min: t5.domain.min, max: t5.domain.max }) : null;
      }
      throw new Error("Invalid Parameter");
    });
  }, t2.domainname = function(t3, r2) {
    return e2(t3, r2, function(t4, e3, r3) {
      if (J$3(r3, 2, 4), r3[0] instanceof g$5)
        return r3[0].domainValueLookup(K$2(r3[1]), r3[2], r3[3] === void 0 ? void 0 : X$3(r3[3]));
      throw new Error("Invalid Parameter");
    });
  }, t2.domaincode = function(t3, r2) {
    return e2(t3, r2, function(t4, e3, r3) {
      if (J$3(r3, 2, 4), r3[0] instanceof g$5)
        return r3[0].domainCodeLookup(K$2(r3[1]), r3[2], r3[3] === void 0 ? void 0 : X$3(r3[3]));
      throw new Error("Invalid Parameter");
    });
  }, t2.urlencode = function(t3, r2) {
    return e2(t3, r2, function(t4, e3, r3) {
      if (J$3(r3, 1, 1), r3[0] === null)
        return "";
      if (r3[0] instanceof h$7) {
        let t5 = "";
        for (const e4 of r3[0].keys()) {
          const n2 = r3[0].field(e4);
          t5 !== "" && (t5 += "&"), t5 += n2 === null ? encodeURIComponent(e4) + "=" : encodeURIComponent(e4) + "=" + encodeURIComponent(n2);
        }
        return t5;
      }
      return encodeURIComponent(K$2(r3[0]));
    });
  }, t2.hash = function(t3, r2) {
    return e2(t3, r2, function(t4, e3, r3) {
      J$3(r3, 1, 1);
      const n2 = new i$1(0);
      return L$3(r3[0], n2, { map: new Map(), currentLength: 0 }), n2.digest();
    });
  }, t2.convertdirection = function(t3, r2) {
    return e2(t3, r2, function(t4, e3, r3) {
      return J$3(r3, 3, 3), ce$2(r3[0], r3[1], r3[2]);
    });
  };
}
function re$1(e2, t2, n2) {
  try {
    return n2(e2, null, t2);
  } catch (r2) {
    throw r2;
  }
}
function oe$1(e2) {
  return e2 instanceof Error ? L$7(e2) : L$7(new Error(e2));
}
function ae$1(e2, t2) {
  try {
    switch (t2.type) {
      case "EmptyStatement":
        return "lc.voidOperation";
      case "VariableDeclarator":
        return we$1(e2, t2);
      case "VariableDeclaration":
        return Se$1(e2, t2);
      case "BlockStatement":
        return ge$1(e2, t2);
      case "FunctionDeclaration":
        return de$1(e2, t2);
      case "ReturnStatement":
        return ye$1(e2, t2);
      case "IfStatement":
        return he$1(e2, t2);
      case "ExpressionStatement":
        return fe$1(e2, t2);
      case "AssignmentExpression":
        return pe$1(e2, t2);
      case "UpdateExpression":
        return ue$1(e2, t2);
      case "BreakStatement":
        return "break";
      case "ContinueStatement":
        return "continue";
      case "TemplateLiteral":
        return Ie$1(e2, t2);
      case "TemplateElement":
        return JSON.stringify(t2.value ? t2.value.cooked : "");
      case "ForStatement":
        return ce$1(e2, t2);
      case "ForInStatement":
        return ie$1(e2, t2);
      case "Identifier":
        return Te$1(e2, t2);
      case "MemberExpression":
        return Ne$1(e2, t2);
      case "Literal":
        return t2.value === null || t2.value === void 0 ? "null" : JSON.stringify(t2.value);
      case "ThisExpression":
        throw new Error(S$2(t2, "RUNTIME", "NOTSUPPORTED"));
      case "CallExpression":
        return Re$1(e2, t2);
      case "UnaryExpression":
        return ve$1(e2, t2);
      case "BinaryExpression":
        return Oe$1(e2, t2);
      case "LogicalExpression":
        return xe$1(e2, t2);
      case "ConditionalExpression":
        throw new Error(S$2(t2, "RUNTIME", "NOTSUPPORTED"));
      case "ArrayExpression":
        return Me$1(e2, t2);
      case "ObjectExpression":
        return le$1(e2, t2);
      case "Property":
        return se$1(e2, t2);
      case "Array":
        throw new Error(S$2(t2, "RUNTIME", "NOTSUPPORTED"));
      default:
        throw new Error(S$2(t2, "RUNTIME", "UNREOGNISED"));
    }
  } catch (n2) {
    throw n2;
  }
}
function le$1(e2, t2) {
  let n2 = "lang.dictionary([";
  for (let r2 = 0; r2 < t2.properties.length; r2++) {
    const o2 = t2.properties[r2];
    r2 > 0 && (n2 += ","), n2 += "lang.strCheck(" + (o2.key.type === "Identifier" ? "'" + o2.key.name + "'" : ae$1(e2, o2.key)) + ",'ObjectExpression'),lang.aCheck(" + ae$1(e2, o2.value) + ", 'ObjectExpression')";
  }
  return n2 += "])", n2;
}
function se$1(e2, t2) {
  throw new Error("Should not get here");
}
function ie$1(e2, t2) {
  const n2 = Le(e2), r2 = Le(e2), o2 = Le(e2);
  let a2 = "var " + n2 + " = " + ae$1(e2, t2.right) + ";\n";
  t2.left.type === "VariableDeclaration" && (a2 += ae$1(e2, t2.left));
  let l2 = t2.left.type === "VariableDeclaration" ? t2.left.declarations[0].id.name : t2.left.name;
  l2 = l2.toLowerCase();
  let s2 = "";
  return e2.localScope !== null && (e2.localScope[l2] !== void 0 ? s2 = "lscope['" + l2 + "']" : e2.localScope._SymbolsMap[l2] !== void 0 && (s2 = "lscope['" + e2.localScope._SymbolsMap[l2] + "']")), s2 === "" && (e2.globalScope[l2] !== void 0 ? s2 = "gscope['" + l2 + "']" : e2.globalScope._SymbolsMap[l2] !== void 0 && (s2 = "gscope['" + e2.globalScope._SymbolsMap[l2] + "']")), a2 += "if (" + n2 + "===null) {  lastStatement = lc.voidOperation; }\n ", a2 += "else if (lc.isArray(" + n2 + ") || lc.isString(" + n2 + ")) {", a2 += "var " + r2 + "=" + n2 + ".length; \n", a2 += "for(var " + o2 + "=0; " + o2 + "<" + r2 + "; " + o2 + "++) {\n", a2 += s2 + "=" + o2 + ";\n", a2 += ae$1(e2, t2.body), a2 += "\n}\n", a2 += " lastStatement = lc.voidOperation; \n", a2 += " \n}\n", a2 += "else if (lc.isImmutableArray(" + n2 + ")) {", a2 += "var " + r2 + "=" + n2 + ".length(); \n", a2 += "for(var " + o2 + "=0; " + o2 + "<" + r2 + "; " + o2 + "++) {\n", a2 += s2 + "=" + o2 + ";\n", a2 += ae$1(e2, t2.body), a2 += "\n}\n", a2 += " lastStatement = lc.voidOperation; \n", a2 += " \n}\n", a2 += "else if (( " + n2 + " instanceof lang.Dictionary) || ( " + n2 + " instanceof lang.Feature)) {", a2 += "var " + r2 + "=" + n2 + ".keys(); \n", a2 += "for(var " + o2 + "=0; " + o2 + "<" + r2 + ".length; " + o2 + "++) {\n", a2 += s2 + "=" + r2 + "[" + o2 + "];\n", a2 += ae$1(e2, t2.body), a2 += "\n}\n", a2 += " lastStatement = lc.voidOperation; \n", a2 += " \n}\n", e2.isAsync && (a2 += "else if (lc.isFeatureSet(" + n2 + ")) {", a2 += "var " + r2 + "=" + n2 + ".iterator(runtimeCtx.abortSignal); \n", a2 += "for(var " + o2 + "=lang. graphicToFeature( yield " + r2 + ".next()," + n2 + "); " + o2 + "!=null; " + o2 + "=lang. graphicToFeature( yield " + r2 + ".next()," + n2 + ")) {\n", a2 += s2 + "=" + o2 + ";\n", a2 += ae$1(e2, t2.body), a2 += "\n}\n", a2 += " lastStatement = lc.voidOperation; \n", a2 += " \n}\n"), a2 += "else { lastStatement = lc.voidOperation; } \n", a2;
}
function ce$1(e2, t2) {
  let n2 = "lastStatement = lc.voidOperation; \n";
  t2.init !== null && (n2 += ae$1(e2, t2.init) + "; ");
  const r2 = Le(e2), o2 = Le(e2);
  return n2 += "var " + r2 + " = true; ", n2 += "\n do { ", t2.update !== null && (n2 += " if (" + r2 + "===false) {\n " + ae$1(e2, t2.update) + "  \n}\n " + r2 + "=false; \n"), t2.test !== null && (n2 += "var " + o2 + " = " + ae$1(e2, t2.test) + "; ", n2 += "if (" + o2 + "===false) { break; } else if (" + o2 + "!==true) { lang.error({type: '" + t2.type + "'},'RUNTIME','CANNOT_USE_NONBOOLEAN_IN_CONDITION');   }\n"), n2 += ae$1(e2, t2.body), t2.update !== null && (n2 += "\n " + ae$1(e2, t2.update)), n2 += "\n" + r2 + " = true; \n} while(true);  lastStatement = lc.voidOperation; ", n2;
}
function ue$1(e2, t2) {
  let n2 = null, r2 = "";
  if (t2.argument.type === "MemberExpression")
    return n2 = ae$1(e2, t2.argument.object), r2 = t2.argument.computed === true ? ae$1(e2, t2.argument.property) : "'" + t2.argument.property.name + "'", "lang.memberupdate(" + n2 + "," + r2 + ",'" + t2.operator + "'," + t2.prefix + ")";
  if (n2 = t2.argument.name.toLowerCase(), e2.localScope !== null) {
    if (e2.localScope[n2] !== void 0)
      return "lang.update(lscope, '" + n2 + "','" + t2.operator + "'," + t2.prefix + ")";
    if (e2.localScope._SymbolsMap[n2] !== void 0)
      return "lang.update(lscope, '" + e2.localScope._SymbolsMap[n2] + "','" + t2.operator + "'," + t2.prefix + ")";
  }
  if (e2.globalScope[n2] !== void 0)
    return "lang.update(gscope, '" + n2 + "','" + t2.operator + "'," + t2.prefix + ")";
  if (e2.globalScope._SymbolsMap[n2] !== void 0)
    return "lang.update(gscope, '" + e2.globalScope._SymbolsMap[n2] + "','" + t2.operator + "'," + t2.prefix + ")";
  throw new Error("Variable not recognised");
}
function pe$1(e2, t2) {
  const n2 = ae$1(e2, t2.right);
  let r2 = null, o2 = "";
  if (t2.left.type === "MemberExpression")
    return r2 = ae$1(e2, t2.left.object), o2 = t2.left.computed === true ? ae$1(e2, t2.left.property) : "'" + t2.left.property.name + "'", "lang.assignmember(" + r2 + "," + o2 + ",'" + t2.operator + "'," + n2 + ")";
  if (r2 = t2.left.name.toLowerCase(), e2.localScope !== null) {
    if (e2.localScope[r2] !== void 0)
      return "lscope['" + r2 + "']=lang.assign(" + n2 + ",'" + t2.operator + "', lscope['" + r2 + "'])";
    if (e2.localScope._SymbolsMap[r2] !== void 0)
      return "lscope['" + e2.localScope._SymbolsMap[r2] + "']=lang.assign(" + n2 + ",'" + t2.operator + "', lscope['" + e2.localScope._SymbolsMap[r2] + "'])";
  }
  if (e2.globalScope[r2] !== void 0)
    return "gscope['" + r2 + "']=lang.assign(" + n2 + ",'" + t2.operator + "', gscope['" + r2 + "'])";
  if (e2.globalScope._SymbolsMap[r2] !== void 0)
    return "gscope['" + e2.globalScope._SymbolsMap[r2] + "']=lang.assign(" + n2 + ",'" + t2.operator + "', gscope['" + e2.globalScope._SymbolsMap[r2] + "'])";
  throw new Error("Variable not recognised");
}
function fe$1(e2, t2) {
  return t2.expression.type === "AssignmentExpression" ? "lastStatement = lc.voidOperation; " + ae$1(e2, t2.expression) + "; \n " : (t2.expression.type, "lastStatement = " + ae$1(e2, t2.expression) + "; ");
}
function me$1(e2, t2) {
  return t2.type === "BlockStatement" ? ae$1(e2, t2) : t2.type === "ReturnStatement" || t2.type === "BreakStatement" || t2.type === "ContinueStatement" ? ae$1(e2, t2) + "; " : t2.type === "UpdateExpression" ? "lastStatement = " + ae$1(e2, t2) + "; " : t2.type === "ExpressionStatement" ? ae$1(e2, t2) : t2.type === "ObjectExpression" ? "lastStatement = " + ae$1(e2, t2) + "; " : ae$1(e2, t2) + "; ";
}
function he$1(e2, t2) {
  if (t2.test.type === "AssignmentExpression" || t2.test.type === "UpdateExpression")
    throw new Error(S$2(t2.test, "RUNTIME", "CANNOT_USE_ASSIGNMENT_IN_CONDITION"));
  const n2 = ae$1(e2, t2.test), r2 = Le(e2);
  let o2 = "var " + r2 + " = " + n2 + ";\n if (" + r2 + " === true) {\n" + me$1(e2, t2.consequent) + "\n }\n";
  return t2.alternate !== null ? o2 += "else if (" + r2 + "===false)   { \n" + me$1(e2, t2.alternate) + "}\n" : o2 += "else if (" + r2 + "===false) { \n lastStatement = lc.voidOperation;\n }\n", o2 += "else { lang.error({type: '" + t2.type + "'},'RUNTIME','CANNOT_USE_NONBOOLEAN_IN_CONDITION'); \n}\n", o2;
}
function ge$1(e2, t2) {
  let n2 = "";
  for (let r2 = 0; r2 < t2.body.length; r2++)
    t2.body[r2].type === "ReturnStatement" || t2.body[r2].type === "BreakStatement" || t2.body[r2].type === "ContinueStatement" ? n2 += ae$1(e2, t2.body[r2]) + "; \n" : t2.body[r2].type === "UpdateExpression" || t2.body[r2].type === "ObjectExpression" ? n2 += "lastStatement = " + ae$1(e2, t2.body[r2]) + "; \n" : n2 += ae$1(e2, t2.body[r2]) + " \n";
  return n2;
}
function ye$1(e2, t2) {
  if (t2.argument === null)
    return "return lc.voidOperation";
  return "return " + ae$1(e2, t2.argument);
}
function de$1(e2, t2) {
  const n2 = t2.id.name.toLowerCase(), r2 = { isAsync: e2.isAsync, spatialReference: e2.spatialReference, console: e2.console, lrucache: e2.lrucache, interceptor: e2.interceptor, services: e2.services, symbols: e2.symbols, mangleMap: e2.mangleMap, localScope: { _SymbolsMap: {} }, depthCounter: e2.depthCounter + 1, globalScope: e2.globalScope };
  if (r2.depthCounter > 64)
    throw new Error("Exceeded maximum function depth");
  let o2 = "new lc.SizzleFunction( lang.functionDepthchecker(function() { var lastStatement = lc.voidOperation; \n   var lscope = runtimeCtx.localStack[runtimeCtx.localStack.length-1];\n";
  for (let a2 = 0; a2 < t2.params.length; a2++) {
    const n3 = t2.params[a2].name.toLowerCase(), l2 = De$1(e2);
    r2.localScope._SymbolsMap[n3] = l2, r2.mangleMap[n3] = l2, o2 += "lscope['" + l2 + "']=arguments[" + a2.toString() + "];\n";
  }
  if (e2.isAsync === true ? (o2 += "return lang.__awaiter(this, void 0, void 0, function* () {\n", o2 += ge$1(r2, t2.body) + "\n return lastStatement; ", o2 += "});  }", o2 += ", runtimeCtx))", o2 += "\n lastStatement = lc.voidOperation; \n") : (o2 += ge$1(r2, t2.body) + "\n return lastStatement; }, runtimeCtx))", o2 += "\n lastStatement = lc.voidOperation; \n"), e2.globalScope[n2] !== void 0)
    return "gscope['" + n2 + "']=" + o2;
  if (e2.globalScope._SymbolsMap[n2] !== void 0)
    return "gscope['" + e2.globalScope._SymbolsMap[n2] + "']=" + o2;
  {
    const t3 = De$1(e2);
    return e2.globalScope._SymbolsMap[n2] = t3, e2.mangleMap[n2] = t3, "gscope['" + t3 + "']=" + o2;
  }
}
function Se$1(e2, t2) {
  const n2 = [];
  for (let r2 = 0; r2 < t2.declarations.length; r2++)
    n2.push(ae$1(e2, t2.declarations[r2]));
  return n2.join("\n") + " \n lastStatement=  lc.voidOperation; \n";
}
function we$1(e2, t2) {
  let n2 = t2.init === null ? null : ae$1(e2, t2.init);
  n2 === b$8 && (n2 = null);
  const r2 = t2.id.name.toLowerCase();
  if (e2.localScope !== null) {
    if (e2.localScope[r2] !== void 0)
      return "lscope['" + r2 + "']=" + n2 + "; ";
    if (e2.localScope._SymbolsMap[r2] !== void 0)
      return "lscope['" + e2.localScope._SymbolsMap[r2] + "']=" + n2 + "; ";
    {
      const t3 = De$1(e2);
      return e2.localScope._SymbolsMap[r2] = t3, e2.mangleMap[r2] = t3, "lscope['" + t3 + "']=" + n2 + "; ";
    }
  }
  if (e2.globalScope[r2] !== void 0)
    return "gscope['" + r2 + "']=" + n2 + "; ";
  if (e2.globalScope._SymbolsMap[r2] !== void 0)
    return "gscope['" + e2.globalScope._SymbolsMap[r2] + "']=" + n2 + "; ";
  {
    const t3 = De$1(e2);
    return e2.globalScope._SymbolsMap[r2] = t3, e2.mangleMap[r2] = t3, "gscope['" + t3 + "']=" + n2 + "; ";
  }
}
let Ee$1 = 0;
function be$1(e2, t2, n2) {
  let r2;
  switch (t2 = t2.toLowerCase()) {
    case "hasz": {
      const t3 = e2.hasZ;
      return t3 !== void 0 && t3;
    }
    case "hasm": {
      const t3 = e2.hasM;
      return t3 !== void 0 && t3;
    }
    case "spatialreference": {
      let t3 = e2.spatialReference._arcadeCacheId;
      if (t3 === void 0) {
        let n4 = true;
        Object.freeze && Object.isFrozen(e2.spatialReference) && (n4 = false), n4 && (Ee$1++, e2.spatialReference._arcadeCacheId = Ee$1, t3 = Ee$1);
      }
      const n3 = new h$7({ wkt: e2.spatialReference.wkt, wkid: e2.spatialReference.wkid });
      return t3 !== void 0 && (n3._arcadeCacheId = "SPREF" + t3.toString()), n3;
    }
  }
  switch (e2.type) {
    case "extent":
      switch (t2) {
        case "xmin":
        case "xmax":
        case "ymin":
        case "ymax":
        case "zmin":
        case "zmax":
        case "mmin":
        case "mmax": {
          const n3 = e2[t2];
          return n3 !== void 0 ? n3 : null;
        }
        case "type":
          return "Extent";
      }
      break;
    case "polygon":
      switch (t2) {
        case "rings":
          r2 = e2.cache._arcadeCacheId, r2 === void 0 && (Ee$1++, r2 = Ee$1, e2.cache._arcadeCacheId = r2);
          return new h$9(e2.rings, e2.spatialReference, e2.hasZ === true, e2.hasM === true, r2);
        case "type":
          return "Polygon";
      }
      break;
    case "point":
      switch (t2) {
        case "x":
        case "y":
        case "z":
        case "m":
          return e2[t2] !== void 0 ? e2[t2] : null;
        case "type":
          return "Point";
      }
      break;
    case "polyline":
      switch (t2) {
        case "paths":
          r2 = e2.cache._arcadeCacheId, r2 === void 0 && (Ee$1++, r2 = Ee$1, e2.cache._arcadeCacheId = r2);
          return new h$9(e2.paths, e2.spatialReference, e2.hasZ === true, e2.hasM === true, r2);
        case "type":
          return "Polyline";
      }
      break;
    case "multipoint":
      switch (t2) {
        case "points":
          r2 = e2.cache._arcadeCacheId, r2 === void 0 && (Ee$1++, r2 = Ee$1, e2.cache._arcadeCacheId = r2);
          return new i$7(e2.points, e2.spatialReference, e2.hasZ === true, e2.hasM === true, r2, 1);
        case "type":
          return "Multipoint";
      }
  }
  throw new Error(S$2(n2, "RUNTIME", "PROPERTYNOTFOUND"));
}
function Ne$1(e2, t2) {
  try {
    let n2;
    return n2 = t2.computed === true ? ae$1(e2, t2.property) : "'" + t2.property.name + "'", "lang.member(" + ae$1(e2, t2.object) + "," + n2 + ")";
  } catch (n2) {
    throw n2;
  }
}
function ve$1(e2, t2) {
  try {
    return "lang.unary(" + ae$1(e2, t2.argument) + ",'" + t2.operator + "')";
  } catch (n2) {
    throw n2;
  }
}
function Me$1(e2, t2) {
  try {
    const n2 = [];
    for (let r2 = 0; r2 < t2.elements.length; r2++)
      t2.elements[r2].type === "Literal" ? n2.push(ae$1(e2, t2.elements[r2])) : n2.push("lang.aCheck(" + ae$1(e2, t2.elements[r2]) + ",'ArrayExpression')");
    return "[" + n2.join(",") + "]";
  } catch (n2) {
    throw n2;
  }
}
function Ie$1(e2, t2) {
  try {
    const n2 = [];
    let r2 = 0;
    for (const o2 of t2.quasis)
      n2.push(o2.value ? JSON.stringify(o2.value.cooked) : JSON.stringify("")), o2.tail === false && (n2.push(t2.expressions[r2] ? "lang.castString(lang.aCheck(" + ae$1(e2, t2.expressions[r2]) + ", 'TemplateLiteral'))" : ""), r2++);
    return "([" + n2.join(",") + "]).join('')";
  } catch (n2) {
    throw n2;
  }
}
function Oe$1(e2, t2) {
  try {
    return "lang.binary(" + ae$1(e2, t2.left) + "," + ae$1(e2, t2.right) + ",'" + t2.operator + "')";
  } catch (n2) {
    throw n2;
  }
}
function xe$1(e2, t2) {
  try {
    if (t2.left.type === "AssignmentExpression" || t2.left.type === "UpdateExpression")
      throw new Error(S$2(t2.left, "RUNTIME", "CANNOT_USE_ASSIGNMENT_IN_CONDITION"));
    if (t2.right.type === "AssignmentExpression" || t2.right.type === "UpdateExpression")
      throw new Error(S$2(t2.right, "RUNTIME", "CANNOT_USE_ASSIGNMENT_IN_CONDITION"));
    if (t2.operator === "&&" || t2.operator === "||")
      return "(lang.logicalCheck(" + ae$1(e2, t2.left) + ") " + t2.operator + " lang.logicalCheck(" + ae$1(e2, t2.right) + "))";
    throw new Error(S$2(t2, "RUNTIME", "ONLYORORAND"));
  } catch (n2) {
    throw n2;
  }
}
function Te$1(e2, t2) {
  try {
    const n2 = t2.name.toLowerCase();
    if (e2.localScope !== null) {
      if (e2.localScope[n2] !== void 0)
        return "lscope['" + n2 + "']";
      if (e2.localScope._SymbolsMap[n2] !== void 0)
        return "lscope['" + e2.localScope._SymbolsMap[n2] + "']";
    }
    if (e2.globalScope[n2] !== void 0)
      return "gscope['" + n2 + "']";
    if (e2.globalScope._SymbolsMap[n2] !== void 0)
      return "gscope['" + e2.globalScope._SymbolsMap[n2] + "']";
    throw new Error(S$2(t2, "RUNTIME", "VARIABLENOTFOUND"));
  } catch (n2) {
    throw n2;
  }
}
function Re$1(e2, t2) {
  try {
    if (t2.callee.type !== "Identifier")
      throw new Error(S$2(t2, "RUNTIME", "ONLYNODESSUPPORTED"));
    const n2 = t2.callee.name.toLowerCase();
    let r2 = "";
    if (e2.localScope !== null && (e2.localScope[n2] !== void 0 ? r2 = "lscope['" + n2 + "']" : e2.localScope._SymbolsMap[n2] !== void 0 && (r2 = "lscope['" + e2.localScope._SymbolsMap[n2] + "']")), r2 === "" && (e2.globalScope[n2] !== void 0 ? r2 = "gscope['" + n2 + "']" : e2.globalScope._SymbolsMap[n2] !== void 0 && (r2 = "gscope['" + e2.globalScope._SymbolsMap[n2] + "']")), r2 !== "") {
      let n3 = "[";
      for (let r3 = 0; r3 < t2.arguments.length; r3++)
        r3 > 0 && (n3 += ", "), n3 += ae$1(e2, t2.arguments[r3]);
      return n3 += "]", e2.isAsync ? "(yield lang.callfunc(" + r2 + "," + n3 + ",runtimeCtx) )" : "lang.callfunc(" + r2 + "," + n3 + ",runtimeCtx)";
    }
    throw new Error(S$2(t2, "RUNTIME", "NOTFOUND"));
  } catch (n2) {
    throw n2;
  }
}
const _e$1 = {};
function Ce$1(e2) {
  return e2 === null ? "" : Z$2(e2) || E$6(e2) ? "Array" : P$5(e2) ? "Date" : F$5(e2) ? "String" : I$5(e2) ? "Boolean" : w$3(e2) ? "Number" : e2 instanceof e$8 ? "Attachment" : e2 instanceof s$7 ? "Portal" : e2 instanceof h$7 ? "Dictionary" : e2 instanceof g$5 ? "Feature" : e2 instanceof j$6 ? "Point" : e2 instanceof x$7 ? "Polygon" : e2 instanceof m$5 ? "Polyline" : e2 instanceof m$6 ? "Multipoint" : e2 instanceof M$6 ? "Extent" : v$4(e2) ? "Function" : k$4(e2) ? "FeatureSet" : D$7(e2) ? "FeatureSetCollection" : e2 === b$8 ? "" : typeof e2 == "number" && isNaN(e2) ? "Number" : "Unrecognised Type";
}
function Ue$1(e2, t2, n2, r2) {
  try {
    const o2 = t2[n2];
    if (B$3(o2, r2))
      return t2[n2 + 1];
    {
      const o3 = t2.length - n2;
      return o3 === 1 ? t2[n2] : o3 === 2 ? null : o3 === 3 ? t2[n2 + 2] : Ue$1(e2, t2, n2 + 2, r2);
    }
  } catch (o2) {
    throw o2;
  }
}
function Ae$1(e2, t2, n2, r2) {
  try {
    if (r2 === true)
      return t2[n2 + 1];
    if (t2.length - n2 === 3)
      return t2[n2 + 2];
    {
      const r3 = t2[n2 + 2];
      if (I$5(r3) === false)
        throw new Error("WHEN needs boolean test conditions");
      return Ae$1(e2, t2, n2 + 2, r3);
    }
  } catch (o2) {
    throw o2;
  }
}
function Fe$1(e2, t2) {
  const n2 = e2.length, r2 = Math.floor(n2 / 2);
  return n2 === 0 ? [] : n2 === 1 ? [e2[0]] : Pe$1(Fe$1(e2.slice(0, r2), t2), Fe$1(e2.slice(r2, n2), t2), t2);
}
function Pe$1(e2, t2, n2) {
  const r2 = [];
  for (; e2.length > 0 || t2.length > 0; )
    if (e2.length > 0 && t2.length > 0) {
      let o2 = n2(e2[0], t2[0]);
      isNaN(o2) && (o2 = 0), o2 <= 0 ? (r2.push(e2[0]), e2 = e2.slice(1)) : (r2.push(t2[0]), t2 = t2.slice(1));
    } else
      e2.length > 0 ? (r2.push(e2[0]), e2 = e2.slice(1)) : t2.length > 0 && (r2.push(t2[0]), t2 = t2.slice(1));
  return r2;
}
function ke$1(e2, t2) {
  try {
    const n2 = e2.length, a2 = Math.floor(n2 / 2);
    if (n2 === 0)
      return x$8([]);
    if (n2 === 1)
      return x$8([e2[0]]);
    const l2 = [ke$1(e2.slice(0, a2), t2), ke$1(e2.slice(a2, n2), t2)];
    return s$a(l2).then((e3) => je$1(e3[0], e3[1], t2, []));
  } catch (a2) {
    return L$7(a2);
  }
}
function je$1(t2, n2, r2, o2) {
  return l$8((e2, a2) => {
    const l2 = o2;
    t2.length > 0 || n2.length > 0 ? t2.length > 0 && n2.length > 0 ? r2(t2[0], n2[0]).then((s2) => {
      try {
        isNaN(s2) && (s2 = 1), s2 <= 0 ? (l2.push(t2[0]), t2 = t2.slice(1)) : (l2.push(n2[0]), n2 = n2.slice(1)), je$1(t2, n2, r2, o2).then((t3) => {
          e2(t3);
        }, a2);
      } catch (i2) {
        a2(i2);
      }
    }, a2) : t2.length > 0 ? (l2.push(t2[0]), je$1(t2 = t2.slice(1), n2, r2, o2).then((t3) => {
      e2(t3);
    }, a2)) : n2.length > 0 && (l2.push(n2[0]), n2 = n2.slice(1), je$1(t2, n2, r2, o2).then((t3) => {
      e2(t3);
    }, a2)) : e2(o2);
  });
}
function De$1(e2) {
  return e2.symbols.symbolCounter++, "_T" + e2.symbols.symbolCounter.toString();
}
function Le(e2) {
  return e2.symbols.symbolCounter++, "_Tvar" + e2.symbols.symbolCounter.toString();
}
h$5(_e$1, re$1), d$3(_e$1, re$1), N$1(_e$1, re$1), N$3(_e$1, re$1), D$5(_e$1, re$1), o$2(_e$1, re$1), _e$1.typeof = function(e2, t2) {
  return re$1(e2, t2, function(e3, t3, n2) {
    J$3(n2, 1, 1);
    const r2 = Ce$1(n2[0]);
    if (r2 === "Unrecognised Type")
      throw new Error("Unrecognised Type");
    return r2;
  });
}, _e$1.iif = function(e2, t2) {
  try {
    return re$1(e2, t2, function(e3, t3, n2) {
      if (J$3(n2, 3, 3), I$5(n2[0]) === false)
        throw new Error("IF Function must have a boolean test condition");
      return n2[0] ? n2[1] : n2[2];
    });
  } catch (n2) {
    throw n2;
  }
}, _e$1.decode = function(e2, t2) {
  try {
    return re$1(e2, t2, function(t3, n2, r2) {
      if (r2.length < 2)
        throw new Error("Missing Parameters");
      if (r2.length === 2)
        return r2[1];
      {
        if ((r2.length - 1) % 2 == 0)
          throw new Error("Must have a default value result.");
        const t4 = r2[0];
        return Ue$1(e2, r2, 1, t4);
      }
    });
  } catch (n2) {
    throw n2;
  }
}, _e$1.when = function(e2, t2) {
  try {
    return re$1(e2, t2, function(t3, n2, r2) {
      if (r2.length < 3)
        throw new Error("Missing Parameters");
      if (r2.length % 2 == 0)
        throw new Error("Must have a default value result.");
      const o2 = r2[0];
      if (I$5(o2) === false)
        throw new Error("WHEN needs boolean test conditions");
      return Ae$1(e2, r2, 0, o2);
    });
  } catch (n2) {
    throw n2;
  }
}, _e$1.top = function(e2, t2) {
  return re$1(e2, t2, function(e3, t3, n2) {
    if (J$3(n2, 2, 2), Z$2(n2[0]))
      return X$3(n2[1]) >= n2[0].length ? n2[0].slice(0) : n2[0].slice(0, X$3(n2[1]));
    if (E$6(n2[0]))
      return X$3(n2[1]) >= n2[0].length() ? n2[0].slice(0) : n2[0].slice(0, X$3(n2[1]));
    throw new Error("Top cannot accept this parameter type");
  });
}, _e$1.first = function(e2, t2) {
  return re$1(e2, t2, function(e3, t3, n2) {
    return J$3(n2, 1, 1), Z$2(n2[0]) ? n2[0].length === 0 ? null : n2[0][0] : E$6(n2[0]) ? n2[0].length() === 0 ? null : n2[0].get(0) : null;
  });
}, _e$1.sort = function(e2, t2) {
  return re$1(e2, t2, function(t3, n2, r2) {
    J$3(r2, 1, 2);
    let o2 = r2[0];
    if (E$6(o2) && (o2 = o2.toArray()), Z$2(o2) === false)
      throw new Error("Illegal Argument");
    if (r2.length > 1) {
      if (v$4(r2[1]) === false)
        throw new Error("Illegal Argument");
      let n3 = o2;
      const a2 = function(e3, n4) {
        return et.callfunc(r2[1], [e3, n4], t3);
      };
      return e2.isAsync ? ke$1(n3, a2) : (n3 = Fe$1(n3, function(e3, t4) {
        return a2(e3, t4);
      }), n3);
    }
    {
      let e3 = o2;
      if (e3.length === 0)
        return [];
      const t4 = {};
      for (let o3 = 0; o3 < e3.length; o3++) {
        const n4 = Ce$1(e3[o3]);
        n4 !== "" && (t4[n4] = true);
      }
      if (t4.Array === true || t4.Dictionary === true || t4.Feature === true || t4.Point === true || t4.Polygon === true || t4.Polyline === true || t4.Multipoint === true || t4.Extent === true || t4.Function === true)
        return e3.slice(0);
      let n3 = 0, r3 = "";
      for (const o3 in t4)
        n3++, r3 = o3;
      return e3 = n3 > 1 || r3 === "String" ? Fe$1(e3, function(e4, t5) {
        if (e4 == null || e4 === b$8)
          return t5 == null || t5 === b$8 ? 0 : 1;
        if (t5 == null || t5 === b$8)
          return -1;
        const n4 = K$2(e4), r4 = K$2(t5);
        return n4 < r4 ? -1 : n4 === r4 ? 0 : 1;
      }) : r3 === "Number" ? Fe$1(e3, function(e4, t5) {
        return e4 - t5;
      }) : r3 === "Boolean" ? Fe$1(e3, function(e4, t5) {
        return e4 === t5 ? 0 : t5 ? -1 : 1;
      }) : r3 === "Date" ? Fe$1(e3, function(e4, t5) {
        return t5 - e4;
      }) : e3.slice(0), e3;
    }
  });
};
const Be = {};
for (const ot in _e$1)
  Be[ot] = new S$4(_e$1[ot]);
k$3(_e$1, re$1);
for (const ot in _e$1)
  _e$1[ot] = new S$4(_e$1[ot]);
const Ye$1 = function() {
};
Ye$1.prototype = _e$1;
const Ve = function() {
};
function Ge$1(e2, t2, n2) {
  const r2 = {};
  e2 || (e2 = {}), n2 || (n2 = {}), r2._SymbolsMap = {}, r2.textformatting = 1, r2.infinity = 1, r2.pi = 1;
  for (const o2 in t2)
    r2[o2] = 1;
  for (const o2 in n2)
    r2[o2] = 1;
  for (const o2 in e2)
    r2[o2] = 1;
  return r2;
}
function ze(e2, t2, n2) {
  const r2 = n2 ? new Ve() : new Ye$1();
  e2 || (e2 = {}), t2 || (t2 = {});
  const o2 = new h$7({ newline: "\n", tab: "	", singlequote: "'", doublequote: '"', forwardslash: "/", backwardslash: "\\" });
  o2.immutable = false, r2._SymbolsMap = { textformatting: 1, infinity: 1, pi: 1 }, r2.textformatting = o2, r2.infinity = Number.POSITIVE_INFINITY, r2.pi = Math.PI;
  for (const a2 in t2)
    r2[a2] = t2[a2], r2._SymbolsMap[a2] = 1;
  for (const a2 in e2)
    r2._SymbolsMap[a2] = 1, e2[a2] && e2[a2].declaredClass === "esri.Graphic" ? r2[a2] = g$5.createFromGraphic(e2[a2]) : r2[a2] = e2[a2];
  return r2;
}
Ve.prototype = Be;
function Je(e2, t2) {
  const n2 = { mode: t2, compiled: true, functions: {}, signatures: [], failDefferred: oe$1, standardFunction: re$1, standardFunctionAsync: re$1, evaluateIdentifier: Qe };
  for (let r2 = 0; r2 < e2.length; r2++)
    e2[r2].registerFunctions(n2);
  if (t2 === "sync") {
    for (const e3 in n2.functions)
      _e$1[e3] = new S$4(n2.functions[e3]), Ye$1.prototype[e3] = _e$1[e3];
    for (let e3 = 0; e3 < n2.signatures.length; e3++)
      a$5(n2.signatures[e3], "sync");
  } else {
    for (const e3 in n2.functions)
      Be[e3] = new S$4(n2.functions[e3]), Ve.prototype[e3] = Be[e3];
    for (let e3 = 0; e3 < n2.signatures.length; e3++)
      a$5(n2.signatures[e3], "async");
  }
}
function Qe(e2, t2) {
  const n2 = t2.name;
  if (n2 === "_SymbolsMap")
    throw "Illegal";
  if (e2.localStack.length > 0) {
    if (n2.substr(0, 2).toLowerCase() !== "_t" && e2.localStack[e2.localStack.length - 1][n2] !== void 0)
      return e2.localStack[e2.localStack.length - 1][n2];
    const t3 = e2.mangleMap[n2];
    if (t3 !== void 0 && e2.localStack[e2.localStack.length - 1][t3] !== void 0)
      return e2.localStack[e2.localStack.length - 1][t3];
  }
  if (n2.substr(0, 2).toLowerCase() !== "_t" && e2.globalScope[n2] !== void 0)
    return e2.globalScope[n2];
  if (e2.globalScope._SymbolsMap[n2] === 1)
    return e2.globalScope[n2];
  const r2 = e2.mangleMap[n2];
  return r2 !== void 0 ? e2.globalScope[r2] : void 0;
}
let $e = 0;
const et = { error(e2, t2, n2) {
  throw new Error(S$2(e2, t2, n2));
}, __awaiter: (t2, n2, r2, o2) => l$8((e2, r3) => {
  function a2(e3) {
    try {
      s2(o2.next(e3));
    } catch (t3) {
      r3(t3);
    }
  }
  function l2(e3) {
    try {
      s2(o2.throw(e3));
    } catch (t3) {
      r3(t3);
    }
  }
  function s2(t3) {
    t3.done ? e2(t3.value) : t3.value && t3.value.then ? t3.value.then(a2, l2) : ($e++, $e % 100 == 0 ? setTimeout(() => {
      $e = 0, a2(t3.value);
    }, 0) : a2(t3.value));
  }
  s2((o2 = o2.apply(t2, n2 || [])).next());
}), functionDepthchecker: (e2, n2) => function() {
  if (n2.depthCounter++, n2.localStack.push([]), n2.depthCounter > 64)
    throw new Error("Exceeded maximum function depth");
  const r2 = e2.apply(this, arguments);
  return U$3(r2) ? r2.then((e3) => (n2.depthCounter--, n2.localStack.length = n2.localStack.length - 1, e3)) : (n2.depthCounter--, n2.localStack.length = n2.localStack.length - 1, r2);
}, castString: (e2) => K$2(e2), aCheck(e2, t2) {
  if (v$4(e2))
    throw new Error(S$2({ type: t2 }, "RUNTIME", "FUNCTIONCONTEXTILLEGAL"));
  return e2 === b$8 ? null : e2;
}, Dictionary: h$7, Feature: g$5, dictionary(e2) {
  const t2 = {};
  for (let r2 = 0; r2 < e2.length; r2 += 2) {
    if (v$4(e2[r2 + 1]))
      throw new Error("Illegal Argument");
    if (F$5(e2[r2]) === false)
      throw new Error("Illegal Argument");
    e2[r2 + 1] === b$8 ? t2[e2[r2].toString()] = null : t2[e2[r2].toString()] = e2[r2 + 1];
  }
  const n2 = new h$7(t2);
  return n2.immutable = false, n2;
}, strCheck(e2) {
  if (F$5(e2) === false)
    throw new Error("Illegal Argument");
  return e2;
}, unary(e2, t2) {
  if (I$5(e2)) {
    if (t2 === "!")
      return !e2;
    if (t2 === "-")
      return -1 * X$3(e2);
    if (t2 === "+")
      return 1 * X$3(e2);
    if (t2 === "~")
      return ~X$3(e2);
    throw new Error(S$2({ type: "UnaryExpression", operator: t2, prefix: null, argument: null }, "RUNTIME", "NOTSUPPORTEDUNARYOPERATOR"));
  }
  if (t2 === "-")
    return -1 * X$3(e2);
  if (t2 === "+")
    return 1 * X$3(e2);
  if (t2 === "~")
    return ~X$3(e2);
  throw new Error(S$2({ type: "UnaryExpression", operator: t2, prefix: null, argument: null }, "RUNTIME", "NOTSUPPORTEDUNARYOPERATOR"));
}, logicalCheck(e2) {
  if (I$5(e2) === false) {
    throw new Error(S$2({ type: "LogicalExpression", operator: null, left: null, right: null }, "RUNTIME", "ONLYORORAND"));
  }
  return e2;
}, logical(e2, t2, n2) {
  if (I$5(e2) && I$5(t2))
    switch (n2) {
      case "||":
        return e2 || t2;
      case "&&":
        return e2 && t2;
      default:
        throw new Error(S$2({ type: "LogicalExpression", operator: null, left: null, right: null }, "RUNTIME", "ONLYORORAND"));
    }
  throw new Error(S$2({ type: "LogicalExpression", operator: null, left: null, right: null }, "RUNTIME", "ONLYORORAND"));
}, binary(e2, t2, n2) {
  switch (n2) {
    case "|":
    case "<<":
    case ">>":
    case ">>>":
    case "^":
    case "&":
      return ye$2(X$3(e2), X$3(t2), n2);
    case "==":
    case "=":
      return B$3(e2, t2);
    case "!=":
      return !B$3(e2, t2);
    case "<":
    case ">":
    case "<=":
    case ">=":
      return q$4(e2, t2, n2);
    case "+":
      return F$5(e2) || F$5(t2) ? K$2(e2) + K$2(t2) : X$3(e2) + X$3(t2);
    case "-":
      return X$3(e2) - X$3(t2);
    case "*":
      return X$3(e2) * X$3(t2);
    case "/":
      return X$3(e2) / X$3(t2);
    case "%":
      return X$3(e2) % X$3(t2);
    default:
      throw new Error(S$2({ type: "BinaryExpression", operator: n2, left: e2, right: t2 }, "RUNTIME", "OPERATORNOTRECOGNISED"));
  }
}, assign(e2, t2, n2) {
  switch (t2) {
    case "=":
      return e2 === b$8 ? null : e2;
    case "/=":
      return X$3(n2) / X$3(e2);
    case "*=":
      return X$3(n2) * X$3(e2);
    case "-=":
      return X$3(n2) - X$3(e2);
    case "+=":
      return F$5(n2) || F$5(e2) ? K$2(n2) + K$2(e2) : X$3(n2) + X$3(e2);
    case "%=":
      return X$3(n2) % X$3(e2);
    default:
      throw new Error(S$2({ type: "AssignmentExpression", operator: t2, left: null, right: null }, "RUNTIME", "OPERATORNOTRECOGNISED"));
  }
}, update(e2, t2, n2, r2) {
  const o2 = X$3(e2[t2]);
  return e2[t2] = n2 === "++" ? o2 + 1 : o2 - 1, r2 === false ? o2 : n2 === "++" ? o2 + 1 : o2 - 1;
}, graphicToFeature: (e2, t2) => e2 === null ? null : g$5.createFromGraphicLikeObject(e2.geometry, e2.attributes, t2), memberupdate(e2, t2, n2, r2) {
  let o2;
  if (Z$2(e2)) {
    if (!w$3(t2))
      throw new Error("Invalid Parameter");
    if (t2 < 0 && (t2 = e2.length + t2), t2 < 0 || t2 >= e2.length)
      throw new Error("Assignment outside of array bounds");
    o2 = X$3(e2[t2]), e2[t2] = n2 === "++" ? o2 + 1 : o2 - 1;
  } else if (e2 instanceof h$7) {
    if (F$5(t2) === false)
      throw new Error("Dictionary accessor must be a string");
    if (e2.hasField(t2) !== true)
      throw new Error("Invalid Parameter");
    o2 = X$3(e2.field(t2)), e2.setField(t2, n2 === "++" ? o2 + 1 : o2 - 1);
  } else {
    if (!(e2 instanceof g$5))
      throw E$6(e2) ? new Error("Array is Immutable") : new Error("Invalid Parameter");
    if (F$5(t2) === false)
      throw new Error("Feature accessor must be a string");
    if (e2.hasField(t2) !== true)
      throw new Error("Invalid Parameter");
    o2 = X$3(e2.field(t2)), e2.setField(t2, n2 === "++" ? o2 + 1 : o2 - 1);
  }
  return r2 === false ? o2 : n2 === "++" ? o2 + 1 : o2 - 1;
}, assignmember(e2, t2, n2, r2) {
  if (Z$2(e2)) {
    if (!w$3(t2))
      throw new Error("Invalid Parameter");
    if (t2 < 0 && (t2 = e2.length + t2), t2 < 0 || t2 > e2.length)
      throw new Error("Assignment outside of array bounds");
    if (t2 === e2.length) {
      if (n2 !== "=")
        throw new Error("Invalid Parameter");
      e2[t2] = this.assign(r2, n2, e2[t2]);
    } else
      e2[t2] = this.assign(r2, n2, e2[t2]);
  } else if (e2 instanceof h$7) {
    if (F$5(t2) === false)
      throw new Error("Dictionary accessor must be a string");
    if (e2.hasField(t2) === true)
      e2.setField(t2, this.assign(r2, n2, e2.field(t2)));
    else {
      if (n2 !== "=")
        throw new Error("Invalid Parameter");
      e2.setField(t2, this.assign(r2, n2, null));
    }
  } else {
    if (!(e2 instanceof g$5))
      throw E$6(e2) ? new Error("Array is Immutable") : new Error("Invalid Parameter");
    if (F$5(t2) === false)
      throw new Error("Feature accessor must be a string");
    if (e2.hasField(t2) === true)
      e2.setField(t2, this.assign(r2, n2, e2.field(t2)));
    else {
      if (n2 !== "=")
        throw new Error("Invalid Parameter");
      e2.setField(t2, this.assign(r2, n2, null));
    }
  }
}, member(e2, t2) {
  if (e2 === null) {
    throw new Error(S$2({ type: "MemberExpression", object: null, property: null, computed: null }, "RUNTIME", "NOTFOUND"));
  }
  if (e2 instanceof d$6) {
    if (F$5(t2))
      return e2.field(t2);
    throw new Error(S$2({ type: "MemberExpression", object: null, property: null, computed: null }, "RUNTIME", "INVALIDTYPE"));
  }
  if (e2 instanceof h$7 || e2 instanceof g$5) {
    if (F$5(t2))
      return e2.field(t2);
    throw new Error(S$2({ type: "MemberExpression", object: null, property: null, computed: null }, "RUNTIME", "INVALIDTYPE"));
  }
  if (e2 instanceof c$7) {
    if (F$5(t2))
      return be$1(e2, t2, "MemberExpression");
    throw new Error(S$2({ type: "MemberExpression", object: null, property: null, computed: null }, "RUNTIME", "INVALIDTYPE"));
  }
  if (Z$2(e2)) {
    if (w$3(t2) && isFinite(t2) && Math.floor(t2) === t2) {
      if (t2 < 0 && (t2 = e2.length + t2), t2 >= e2.length || t2 < 0) {
        throw new Error(S$2({ type: "MemberExpression", object: null, property: null, computed: null }, "RUNTIME", "OUTOFBOUNDS"));
      }
      return e2[t2];
    }
    throw new Error(S$2({ type: "MemberExpression", object: null, property: null, computed: null }, "RUNTIME", "INVALIDTYPE"));
  }
  if (F$5(e2)) {
    if (w$3(t2) && isFinite(t2) && Math.floor(t2) === t2) {
      if (t2 < 0 && (t2 = e2.length + t2), t2 >= e2.length || t2 < 0) {
        throw new Error(S$2({ type: "MemberExpression", object: null, property: null, computed: null }, "RUNTIME", "OUTOFBOUNDS"));
      }
      return e2[t2];
    }
    throw new Error(S$2({ type: "MemberExpression", object: null, property: null, computed: null }, "RUNTIME", "INVALIDTYPE"));
  }
  if (E$6(e2)) {
    if (w$3(t2) && isFinite(t2) && Math.floor(t2) === t2) {
      if (t2 < 0 && (t2 = e2.length() + t2), t2 >= e2.length() || t2 < 0) {
        throw new Error(S$2({ type: "MemberExpression", object: null, property: null, computed: null }, "RUNTIME", "OUTOFBOUNDS"));
      }
      return e2.get(t2);
    }
    throw new Error(S$2({ type: "MemberExpression", object: null, property: null, computed: null }, "RUNTIME", "INVALIDTYPE"));
  }
  throw new Error(S$2({ type: "MemberExpression", object: null, property: null, computed: null }, "RUNTIME", "INVALIDTYPE"));
}, callfunc(e2, t2, n2) {
  return e2 instanceof S$4 ? e2.fn(n2, t2) : e2 instanceof R$3 ? e2.fn.apply(this, t2) : e2.apply(this, t2);
} };
function tt(e2) {
  console.log(e2);
}
function nt(e2, t2 = null, n2 = false) {
  t2 === null && (t2 = { vars: {}, customfunctions: {} });
  const r2 = { isAsync: n2, globalScope: Ge$1(t2.vars, n2 ? Be : _e$1, t2.customfunctions), localScope: null, mangleMap: {}, console: tt, lrucache: t2.lrucache, interceptor: t2.interceptor, services: t2.services, symbols: { symbolCounter: 0 } };
  let o2 = ae$1(r2, e2.body[0].body);
  o2 === "" && (o2 = "lc.voidOperation; ");
  let l2 = "";
  l2 = n2 ? "var runtimeCtx=this.prepare(context, true);\n var lc = this.lc;  var lang = this.lang; var gscope=runtimeCtx.globalScope; \nreturn lang.__awaiter(this, void 0, void 0, function* () {\n\n function mainBody() {\n var lastStatement=lc.voidOperation;\n return lang.__awaiter(this, void 0, void 0, function* () {\n" + o2 + "\n return lastStatement; }); } \n return this.postProcess(yield mainBody()); }); " : "var runtimeCtx=this.prepare(context, false);\n var lc = this.lc;  var lang = this.lang; var gscope=runtimeCtx.globalScope; \n function mainBody() {\n var lastStatement=lc.voidOperation;\n " + o2 + "\n return lastStatement; } \n return this.postProcess(mainBody()); ";
  const s2 = { lc: xe$2, lang: et, mangles: r2.mangleMap, postProcess(e3) {
    if (e3 instanceof N$6 && (e3 = e3.value), e3 instanceof T$4 && (e3 = e3.value), e3 === b$8 && (e3 = null), e3 === _$2)
      throw new Error("Cannot return BREAK");
    if (e3 === j$5)
      throw new Error("Cannot return CONTINUE");
    if (v$4(e3))
      throw new Error("Cannot return FUNCTION");
    return e3;
  }, prepare(e3, t3) {
    let n3 = e3.spatialReference;
    n3 == null && (n3 = new k$5({ wkid: 102100 }));
    const r3 = ze(e3.vars, e3.customfunctions, t3);
    return { localStack: [], isAsync: t3, mangleMap: this.mangles, spatialReference: n3, globalScope: r3, abortSignal: e3.abortSignal === void 0 || e3.abortSignal === null ? { aborted: false } : e3.abortSignal, localScope: null, services: e3.services, console: e3.console ? e3.console : tt, lrucache: e3.lrucache, interceptor: e3.interceptor, symbols: { symbolCounter: 0 }, depthCounter: 1 };
  } };
  return new Function("context", "spatialReference", l2).bind(s2);
}
function rt() {
  return import("./geomasync.c75fd02c.js").then((e2) => (Je([e2], "async"), true));
}
function X$1(e2, r2) {
  const t2 = [];
  for (let n2 = 0; n2 < r2.arguments.length; n2++)
    t2.push(Q$1(e2, r2.arguments[n2]));
  return t2;
}
function J$1(e2, r2, t2) {
  try {
    return t2(e2, r2, X$1(e2, r2));
  } catch (n2) {
    throw n2;
  }
}
function Q$1(e2, r2) {
  try {
    switch (r2.type) {
      case "EmptyStatement":
        return b$8;
      case "VariableDeclarator":
        return he(e2, r2);
      case "VariableDeclaration":
        return pe(e2, r2);
      case "BlockStatement":
        return ce(e2, r2);
      case "FunctionDeclaration":
        return fe(e2, r2);
      case "ReturnStatement":
        return ue(e2, r2);
      case "IfStatement":
        return le(e2, r2);
      case "ExpressionStatement":
        return se(e2, r2);
      case "AssignmentExpression":
        return ie(e2, r2);
      case "UpdateExpression":
        return oe(e2, r2);
      case "BreakStatement":
        return _$2;
      case "ContinueStatement":
        return j$5;
      case "TemplateElement":
        return ye(e2, r2);
      case "TemplateLiteral":
        return ve(e2, r2);
      case "ForStatement":
        return te(e2, r2);
      case "ForInStatement":
        return re(e2, r2);
      case "Identifier":
        return Te(e2, r2);
      case "MemberExpression":
        return Ee(e2, r2);
      case "Literal":
        return r2.value;
      case "CallExpression":
        return Re(e2, r2);
      case "UnaryExpression":
        return de(e2, r2);
      case "BinaryExpression":
        return Ne(e2, r2);
      case "LogicalExpression":
        return Ie(e2, r2);
      case "ConditionalExpression":
        throw new Error(S$2(r2, "RUNTIME", "NOTSUPPORTED"));
      case "ArrayExpression":
        return ge(e2, r2);
      case "ObjectExpression":
        return $$2(e2, r2);
      case "Property":
        return ee$1(e2, r2);
      default:
        throw new Error(S$2(r2, "RUNTIME", "UNREOGNISED"));
    }
  } catch (t2) {
    throw t2;
  }
}
function $$2(e2, r2) {
  const t2 = {};
  for (let o2 = 0; o2 < r2.properties.length; o2++) {
    const n3 = Q$1(e2, r2.properties[o2]);
    if (v$4(n3.value))
      throw new Error("Illegal Argument");
    if (F$5(n3.key) === false)
      throw new Error("Illegal Argument");
    n3.value === b$8 ? t2[n3.key.toString()] = null : t2[n3.key.toString()] = n3.value;
  }
  const n2 = new h$7(t2);
  return n2.immutable = false, n2;
}
function ee$1(e2, r2) {
  return { key: r2.key.type === "Identifier" ? r2.key.name : Q$1(e2, r2.key), value: Q$1(e2, r2.value) };
}
function re(e2, r2) {
  const t2 = Q$1(e2, r2.right);
  r2.left.type === "VariableDeclaration" && Q$1(e2, r2.left);
  let n2 = null, o2 = "";
  if (r2.left.type === "VariableDeclaration") {
    const e3 = r2.left.declarations[0].id;
    e3.type === "Identifier" && (o2 = e3.name);
  } else
    r2.left.type === "Identifier" && (o2 = r2.left.name);
  if (!o2)
    throw new Error(S$2(r2, "RUNTIME", "INVALIDVARIABLE"));
  if (o2 = o2.toLowerCase(), e2.localScope !== null && e2.localScope[o2] !== void 0 && (n2 = e2.localScope[o2]), n2 === null && e2.globalScope[o2] !== void 0 && (n2 = e2.globalScope[o2]), n2 === null)
    throw new Error(S$2(r2, "RUNTIME", "VARIABLENOTDECLARED"));
  if (Z$2(t2) || F$5(t2)) {
    const o3 = t2.length;
    for (let t3 = 0; t3 < o3; t3++) {
      n2.value = t3;
      const o4 = Q$1(e2, r2.body);
      if (o4 === _$2)
        break;
      if (o4 instanceof N$6)
        return o4;
    }
    return b$8;
  }
  if (E$6(t2)) {
    for (let o3 = 0; o3 < t2.length(); o3++) {
      n2.value = o3;
      const t3 = Q$1(e2, r2.body);
      if (t3 === _$2)
        break;
      if (t3 instanceof N$6)
        return t3;
    }
    return b$8;
  }
  if (!(t2 instanceof h$7 || t2 instanceof g$5))
    return b$8;
  {
    const o3 = t2.keys();
    for (let t3 = 0; t3 < o3.length; t3++) {
      n2.value = o3[t3];
      const a2 = Q$1(e2, r2.body);
      if (a2 === _$2)
        break;
      if (a2 instanceof N$6)
        return a2;
    }
  }
}
function te(e2, r2) {
  r2.init !== null && Q$1(e2, r2.init);
  const t2 = { testResult: true, lastAction: b$8 };
  do {
    ne(e2, r2, t2);
  } while (t2.testResult === true);
  return t2.lastAction instanceof N$6 ? t2.lastAction : b$8;
}
function ne(e2, r2, t2) {
  if (r2.test !== null) {
    if (t2.testResult = Q$1(e2, r2.test), t2.testResult === false)
      return;
    if (t2.testResult !== true)
      throw new Error(S$2(r2, "RUNTIME", "CANNOT_USE_NONBOOLEAN_IN_CONDITION"));
  }
  t2.lastAction = Q$1(e2, r2.body), t2.lastAction !== _$2 ? t2.lastAction instanceof N$6 ? t2.testResult = false : r2.update !== null && Q$1(e2, r2.update) : t2.testResult = false;
}
function oe(e2, r2) {
  let t2, n2 = null, o2 = "";
  if (r2.argument.type === "MemberExpression") {
    if (n2 = Q$1(e2, r2.argument.object), r2.argument.computed === true ? o2 = Q$1(e2, r2.argument.property) : r2.argument.property.type === "Identifier" && (o2 = r2.argument.property.name), Z$2(n2)) {
      if (!w$3(o2))
        throw new Error("Invalid Parameter");
      if (o2 < 0 && (o2 = n2.length + o2), o2 < 0 || o2 >= n2.length)
        throw new Error("Assignment outside of array bounds");
      t2 = X$3(n2[o2]), n2[o2] = r2.operator === "++" ? t2 + 1 : t2 - 1;
    } else if (n2 instanceof h$7) {
      if (F$5(o2) === false)
        throw new Error("Dictionary accessor must be a string");
      if (n2.hasField(o2) !== true)
        throw new Error("Invalid Parameter");
      t2 = X$3(n2.field(o2)), n2.setField(o2, r2.operator === "++" ? t2 + 1 : t2 - 1);
    } else {
      if (!(n2 instanceof g$5))
        throw E$6(n2) ? new Error("Array is Immutable") : new Error("Invalid Parameter");
      if (F$5(o2) === false)
        throw new Error("Feature accessor must be a string");
      if (n2.hasField(o2) !== true)
        throw new Error("Invalid Parameter");
      t2 = X$3(n2.field(o2)), n2.setField(o2, r2.operator === "++" ? t2 + 1 : t2 - 1);
    }
    return r2.prefix === false ? t2 : r2.operator === "++" ? t2 + 1 : t2 - 1;
  }
  if (n2 = r2.argument.type === "Identifier" ? r2.argument.name.toLowerCase() : "", !n2)
    throw new Error("Invalid identifier");
  if (e2.localScope !== null && e2.localScope[n2] !== void 0)
    return t2 = X$3(e2.localScope[n2].value), e2.localScope[n2] = { value: r2.operator === "++" ? t2 + 1 : t2 - 1, valueset: true, node: r2 }, r2.prefix === false ? t2 : r2.operator === "++" ? t2 + 1 : t2 - 1;
  if (e2.globalScope[n2] !== void 0)
    return t2 = X$3(e2.globalScope[n2].value), e2.globalScope[n2] = { value: r2.operator === "++" ? t2 + 1 : t2 - 1, valueset: true, node: r2 }, r2.prefix === false ? t2 : r2.operator === "++" ? t2 + 1 : t2 - 1;
  throw new Error("Variable not recognised");
}
function ae(e2, r2, t2, n2) {
  switch (r2) {
    case "=":
      return e2 === b$8 ? null : e2;
    case "/=":
      return X$3(t2) / X$3(e2);
    case "*=":
      return X$3(t2) * X$3(e2);
    case "-=":
      return X$3(t2) - X$3(e2);
    case "+=":
      return F$5(t2) || F$5(e2) ? K$2(t2) + K$2(e2) : X$3(t2) + X$3(e2);
    case "%=":
      return X$3(t2) % X$3(e2);
    default:
      throw new Error(S$2(n2, "RUNTIME", "OPERATORNOTRECOGNISED"));
  }
}
function ie(e2, r2) {
  const t2 = Q$1(e2, r2.right);
  let n2 = null, o2 = "";
  if (r2.left.type === "MemberExpression") {
    if (n2 = Q$1(e2, r2.left.object), r2.left.computed === true ? o2 = Q$1(e2, r2.left.property) : r2.left.property.type === "Identifier" && (o2 = r2.left.property.name), Z$2(n2)) {
      if (!w$3(o2))
        throw new Error("Invalid Parameter");
      if (o2 < 0 && (o2 = n2.length + o2), o2 < 0 || o2 > n2.length)
        throw new Error("Assignment outside of array bounds");
      if (o2 === n2.length) {
        if (r2.operator !== "=")
          throw new Error("Invalid Parameter");
        n2[o2] = ae(t2, r2.operator, n2[o2], r2);
      } else
        n2[o2] = ae(t2, r2.operator, n2[o2], r2);
    } else if (n2 instanceof h$7) {
      if (F$5(o2) === false)
        throw new Error("Dictionary accessor must be a string");
      if (n2.hasField(o2) === true)
        n2.setField(o2, ae(t2, r2.operator, n2.field(o2), r2));
      else {
        if (r2.operator !== "=")
          throw new Error("Invalid Parameter");
        n2.setField(o2, ae(t2, r2.operator, null, r2));
      }
    } else {
      if (!(n2 instanceof g$5))
        throw E$6(n2) ? new Error("Array is Immutable") : new Error("Invalid Parameter");
      if (F$5(o2) === false)
        throw new Error("Feature accessor must be a string");
      if (n2.hasField(o2) === true)
        n2.setField(o2, ae(t2, r2.operator, n2.field(o2), r2));
      else {
        if (r2.operator !== "=")
          throw new Error("Invalid Parameter");
        n2.setField(o2, ae(t2, r2.operator, null, r2));
      }
    }
    return b$8;
  }
  if (n2 = r2.left.name.toLowerCase(), e2.localScope !== null && e2.localScope[n2] !== void 0)
    return e2.localScope[n2] = { value: ae(t2, r2.operator, e2.localScope[n2].value, r2), valueset: true, node: r2.right }, b$8;
  if (e2.globalScope[n2] !== void 0)
    return e2.globalScope[n2] = { value: ae(t2, r2.operator, e2.globalScope[n2].value, r2), valueset: true, node: r2.right }, b$8;
  throw new Error("Variable not recognised");
}
function se(e2, r2) {
  if (r2.expression.type === "AssignmentExpression" || r2.expression.type === "UpdateExpression")
    return Q$1(e2, r2.expression);
  if (r2.expression.type === "CallExpression") {
    const t2 = Q$1(e2, r2.expression);
    return t2 === b$8 ? b$8 : new T$4(t2);
  }
  {
    const t2 = Q$1(e2, r2.expression);
    return t2 === b$8 ? b$8 : new T$4(t2);
  }
}
function le(e2, r2) {
  if (r2.test.type === "AssignmentExpression" || r2.test.type === "UpdateExpression")
    throw new Error(S$2(r2.test, "RUNTIME", "CANNOT_USE_ASSIGNMENT_IN_CONDITION"));
  const t2 = Q$1(e2, r2.test);
  if (t2 === true)
    return Q$1(e2, r2.consequent);
  if (t2 === false)
    return r2.alternate !== null ? Q$1(e2, r2.alternate) : b$8;
  throw new Error(S$2(r2, "RUNTIME", "CANNOT_USE_NONBOOLEAN_IN_CONDITION"));
}
function ce(e2, r2) {
  let t2 = b$8;
  for (let n2 = 0; n2 < r2.body.length; n2++)
    if (t2 = Q$1(e2, r2.body[n2]), t2 instanceof N$6 || t2 === _$2 || t2 === j$5)
      return t2;
  return t2;
}
function ue(e2, r2) {
  if (r2.argument === null)
    return new N$6(b$8);
  const t2 = Q$1(e2, r2.argument);
  return new N$6(t2);
}
function fe(e2, r2) {
  const t2 = r2.id.name.toLowerCase();
  return e2.globalScope[t2] = { valueset: true, node: null, value: new t$2(r2, e2) }, b$8;
}
function pe(e2, r2) {
  for (let t2 = 0; t2 < r2.declarations.length; t2++)
    Q$1(e2, r2.declarations[t2]);
  return b$8;
}
function he(e2, r2) {
  let t2 = r2.init === null ? null : Q$1(e2, r2.init);
  if (t2 === b$8 && (t2 = null), r2.id.type !== "Identifier")
    throw new Error("Can only assign a regular variable");
  const n2 = r2.id.name.toLowerCase();
  return e2.localScope !== null ? e2.localScope[n2] = { value: t2, valueset: true, node: r2.init } : e2.globalScope[n2] = { value: t2, valueset: true, node: r2.init }, b$8;
}
let we = 0;
function me(e2, r2, t2) {
  let n2;
  switch (r2 = r2.toLowerCase()) {
    case "hasz": {
      const r3 = e2.hasZ;
      return r3 !== void 0 && r3;
    }
    case "hasm": {
      const r3 = e2.hasM;
      return r3 !== void 0 && r3;
    }
    case "spatialreference": {
      let r3 = e2.spatialReference._arcadeCacheId;
      if (r3 === void 0) {
        let t4 = true;
        Object.freeze && Object.isFrozen(e2.spatialReference) && (t4 = false), t4 && (we++, e2.spatialReference._arcadeCacheId = we, r3 = we);
      }
      const t3 = new h$7({ wkt: e2.spatialReference.wkt, wkid: e2.spatialReference.wkid });
      return r3 !== void 0 && (t3._arcadeCacheId = "SPREF" + r3.toString()), t3;
    }
  }
  switch (e2.type) {
    case "extent":
      switch (r2) {
        case "xmin":
        case "xmax":
        case "ymin":
        case "ymax":
        case "zmin":
        case "zmax":
        case "mmin":
        case "mmax": {
          const t3 = e2[r2];
          return t3 !== void 0 ? t3 : null;
        }
        case "type":
          return "Extent";
      }
      break;
    case "polygon":
      switch (r2) {
        case "rings":
          n2 = e2.cache._arcadeCacheId, n2 === void 0 && (we++, n2 = we, e2.cache._arcadeCacheId = n2);
          return new h$9(e2.rings, e2.spatialReference, e2.hasZ === true, e2.hasM === true, n2);
        case "type":
          return "Polygon";
      }
      break;
    case "point":
      switch (r2) {
        case "x":
        case "y":
        case "z":
        case "m":
          return e2[r2] !== void 0 ? e2[r2] : null;
        case "type":
          return "Point";
      }
      break;
    case "polyline":
      switch (r2) {
        case "paths":
          n2 = e2.cache._arcadeCacheId, n2 === void 0 && (we++, n2 = we, e2.cache._arcadeCacheId = n2);
          return new h$9(e2.paths, e2.spatialReference, e2.hasZ === true, e2.hasM === true, n2);
        case "type":
          return "Polyline";
      }
      break;
    case "multipoint":
      switch (r2) {
        case "points":
          n2 = e2.cache._arcadeCacheId, n2 === void 0 && (we++, n2 = we, e2.cache._arcadeCacheId = n2);
          return new i$7(e2.points, e2.spatialReference, e2.hasZ === true, e2.hasM === true, n2, 1);
        case "type":
          return "Multipoint";
      }
  }
  throw new Error(S$2(t2, "RUNTIME", "PROPERTYNOTFOUND"));
}
function Ee(e2, t2) {
  try {
    const n2 = Q$1(e2, t2.object);
    if (n2 === null)
      throw new Error(S$2(t2, "RUNTIME", "NOTFOUND"));
    if (t2.computed === false) {
      if (t2.property.type === "Identifier") {
        if (n2 instanceof h$7 || n2 instanceof g$5)
          return n2.field(t2.property.name);
        if (n2 instanceof c$7)
          return me(n2, t2.property.name, t2);
      }
      throw new Error(S$2(t2, "RUNTIME", "INVALIDTYPE"));
    }
    {
      let o2 = Q$1(e2, t2.property);
      if (n2 instanceof h$7 || n2 instanceof g$5) {
        if (F$5(o2))
          return n2.field(o2);
        throw new Error(S$2(t2, "RUNTIME", "INVALIDTYPE"));
      }
      if (n2 instanceof c$7) {
        if (F$5(o2))
          return me(n2, o2, t2);
        throw new Error(S$2(t2, "RUNTIME", "INVALIDTYPE"));
      }
      if (Z$2(n2)) {
        if (w$3(o2) && isFinite(o2) && Math.floor(o2) === o2) {
          if (o2 < 0 && (o2 = n2.length + o2), o2 >= n2.length || o2 < 0)
            throw new Error(S$2(t2, "RUNTIME", "OUTOFBOUNDS"));
          return n2[o2];
        }
        throw new Error(S$2(t2, "RUNTIME", "INVALIDTYPE"));
      }
      if (F$5(n2)) {
        if (w$3(o2) && isFinite(o2) && Math.floor(o2) === o2) {
          if (o2 < 0 && (o2 = n2.length + o2), o2 >= n2.length || o2 < 0)
            throw new Error(S$2(t2, "RUNTIME", "OUTOFBOUNDS"));
          return n2[o2];
        }
        throw new Error(S$2(t2, "RUNTIME", "INVALIDTYPE"));
      }
      if (E$6(n2)) {
        if (w$3(o2) && isFinite(o2) && Math.floor(o2) === o2) {
          if (o2 < 0 && (o2 = n2.length() + o2), o2 >= n2.length() || o2 < 0)
            throw new Error(S$2(t2, "RUNTIME", "OUTOFBOUNDS"));
          return n2.get(o2);
        }
        throw new Error(S$2(t2, "RUNTIME", "INVALIDTYPE"));
      }
      throw new Error(S$2(t2, "RUNTIME", "INVALIDTYPE"));
    }
  } catch (n2) {
    throw n2;
  }
}
function de(e2, r2) {
  try {
    const t2 = Q$1(e2, r2.argument);
    if (I$5(t2)) {
      if (r2.operator === "!")
        return !t2;
      if (r2.operator === "-")
        return -1 * X$3(t2);
      if (r2.operator === "+")
        return 1 * X$3(t2);
      if (r2.operator === "~")
        return ~X$3(t2);
      throw new Error(S$2(r2, "RUNTIME", "NOTSUPPORTEDUNARYOPERATOR"));
    }
    if (r2.operator === "~")
      return ~X$3(t2);
    if (r2.operator === "-")
      return -1 * X$3(t2);
    if (r2.operator === "+")
      return 1 * X$3(t2);
    throw new Error(S$2(r2, "RUNTIME", "NOTSUPPORTEDUNARYOPERATOR"));
  } catch (t2) {
    throw t2;
  }
}
function ge(e2, r2) {
  try {
    const t2 = [];
    for (let n2 = 0; n2 < r2.elements.length; n2++) {
      const o2 = Q$1(e2, r2.elements[n2]);
      if (v$4(o2))
        throw new Error(S$2(r2, "RUNTIME", "FUNCTIONCONTEXTILLEGAL"));
      o2 === b$8 ? t2.push(null) : t2.push(o2);
    }
    return t2;
  } catch (t2) {
    throw t2;
  }
}
function Ne(e2, r2) {
  try {
    const t2 = [Q$1(e2, r2.left), Q$1(e2, r2.right)], n2 = t2[0], o2 = t2[1];
    switch (r2.operator) {
      case "|":
      case "<<":
      case ">>":
      case ">>>":
      case "^":
      case "&":
        return ye$2(X$3(n2), X$3(o2), r2.operator);
      case "==":
        return B$3(n2, o2);
      case "!=":
        return !B$3(n2, o2);
      case "<":
      case ">":
      case "<=":
      case ">=":
        return q$4(n2, o2, r2.operator);
      case "+":
        return F$5(n2) || F$5(o2) ? K$2(n2) + K$2(o2) : X$3(n2) + X$3(o2);
      case "-":
        return X$3(n2) - X$3(o2);
      case "*":
        return X$3(n2) * X$3(o2);
      case "/":
        return X$3(n2) / X$3(o2);
      case "%":
        return X$3(n2) % X$3(o2);
      default:
        throw new Error(S$2(r2, "RUNTIME", "OPERATORNOTRECOGNISED"));
    }
  } catch (t2) {
    throw t2;
  }
}
function Ie(e2, r2) {
  try {
    if (r2.left.type === "AssignmentExpression" || r2.left.type === "UpdateExpression")
      throw new Error(S$2(r2.left, "RUNTIME", "CANNOT_USE_ASSIGNMENT_IN_CONDITION"));
    if (r2.right.type === "AssignmentExpression" || r2.right.type === "UpdateExpression")
      throw new Error(S$2(r2.right, "RUNTIME", "CANNOT_USE_ASSIGNMENT_IN_CONDITION"));
    const t2 = Q$1(e2, r2.left);
    if (I$5(t2))
      switch (r2.operator) {
        case "||":
          if (t2 === true)
            return t2;
          {
            const t3 = Q$1(e2, r2.right);
            if (I$5(t3))
              return t3;
            throw new Error(S$2(r2, "RUNTIME", "ONLYORORAND"));
          }
        case "&&":
          if (t2 === false)
            return t2;
          {
            const t3 = Q$1(e2, r2.right);
            if (I$5(t3))
              return t3;
            throw new Error(S$2(r2, "RUNTIME", "ONLYORORAND"));
          }
        default:
          throw new Error(S$2(r2, "RUNTIME", "ONLYORORAND"));
      }
    throw new Error(S$2(r2, "RUNTIME", "ONLYBOOLEAN"));
  } catch (t2) {
    throw t2;
  }
}
function ye(e2, r2) {
  return r2.value ? r2.value.cooked : "";
}
function ve(e2, r2) {
  let t2 = "", n2 = 0;
  for (const o2 of r2.quasis)
    if (t2 += o2.value ? o2.value.cooked : "", o2.tail === false) {
      t2 += r2.expressions[n2] ? K$2(Q$1(e2, r2.expressions[n2])) : "", n2++;
    }
  return t2;
}
function Te(e2, r2) {
  let t2;
  try {
    const n2 = r2.name.toLowerCase();
    if (e2.localScope !== null && e2.localScope[n2] !== void 0)
      return t2 = e2.localScope[n2], t2.valueset === true || (t2.value = Q$1(e2, t2.node), t2.valueset = true), t2.value;
    if (e2.globalScope[n2] !== void 0)
      return t2 = e2.globalScope[n2], t2.valueset === true || (t2.value = Q$1(e2, t2.node), t2.valueset = true), t2.value;
    throw new Error(S$2(r2, "RUNTIME", "VARIABLENOTFOUND"));
  } catch (n2) {
    throw n2;
  }
}
function Re(e2, r2) {
  try {
    if (r2.callee.type !== "Identifier")
      throw new Error(S$2(r2, "RUNTIME", "ONLYNODESSUPPORTED"));
    if (e2.localScope !== null && e2.localScope[r2.callee.name.toLowerCase()] !== void 0) {
      const t2 = e2.localScope[r2.callee.name.toLowerCase()];
      if (t2.value instanceof S$4)
        return t2.value.fn(e2, r2);
      if (t2.value instanceof t$2)
        return Me(e2, r2, t2.value.definition);
      throw new Error(S$2(r2, "RUNTIME", "NOTAFUNCTION"));
    }
    if (e2.globalScope[r2.callee.name.toLowerCase()] !== void 0) {
      const t2 = e2.globalScope[r2.callee.name.toLowerCase()];
      if (t2.value instanceof S$4)
        return t2.value.fn(e2, r2);
      if (t2.value instanceof t$2)
        return Me(e2, r2, t2.value.definition);
      throw new Error(S$2(r2, "RUNTIME", "NOTAFUNCTION"));
    }
    throw new Error(S$2(r2, "RUNTIME", "NOTFOUND"));
  } catch (t2) {
    throw t2;
  }
}
const Oe = {};
function Se(e2) {
  return e2 == null ? "" : Z$2(e2) || E$6(e2) ? "Array" : P$5(e2) ? "Date" : F$5(e2) ? "String" : I$5(e2) ? "Boolean" : w$3(e2) ? "Number" : e2 instanceof e$8 ? "Attachment" : e2 instanceof s$7 ? "Portal" : e2 instanceof h$7 ? "Dictionary" : e2 instanceof g$5 ? "Feature" : e2 instanceof j$6 ? "Point" : e2 instanceof x$7 ? "Polygon" : e2 instanceof m$5 ? "Polyline" : e2 instanceof m$6 ? "Multipoint" : e2 instanceof M$6 ? "Extent" : v$4(e2) ? "Function" : k$4(e2) ? "FeatureSet" : D$7(e2) ? "FeatureSetCollection" : e2 === b$8 ? "" : typeof e2 == "number" && isNaN(e2) ? "Number" : "Unrecognised Type";
}
function be(e2, r2, t2, n2) {
  try {
    const o2 = Q$1(e2, r2.arguments[t2]);
    if (B$3(o2, n2))
      return Q$1(e2, r2.arguments[t2 + 1]);
    {
      const o3 = r2.arguments.length - t2;
      return o3 === 1 ? Q$1(e2, r2.arguments[t2]) : o3 === 2 ? null : o3 === 3 ? Q$1(e2, r2.arguments[t2 + 2]) : be(e2, r2, t2 + 2, n2);
    }
  } catch (o2) {
    throw o2;
  }
}
function Ue(e2, r2, t2, n2) {
  try {
    if (n2 === true)
      return Q$1(e2, r2.arguments[t2 + 1]);
    if (r2.arguments.length - t2 === 3)
      return Q$1(e2, r2.arguments[t2 + 2]);
    {
      const n3 = Q$1(e2, r2.arguments[t2 + 2]);
      if (I$5(n3) === false)
        throw new Error("WHEN needs boolean test conditions");
      return Ue(e2, r2, t2 + 2, n3);
    }
  } catch (o2) {
    throw o2;
  }
}
function Ae(e2, r2) {
  const t2 = e2.length, n2 = Math.floor(t2 / 2);
  return t2 === 0 ? [] : t2 === 1 ? [e2[0]] : Ce(Ae(e2.slice(0, n2), r2), Ae(e2.slice(n2, t2), r2), r2);
}
function Ce(e2, r2, t2) {
  const n2 = [];
  for (; e2.length > 0 || r2.length > 0; )
    if (e2.length > 0 && r2.length > 0) {
      let o2 = t2(e2[0], r2[0]);
      isNaN(o2) && (o2 = 0), o2 <= 0 ? (n2.push(e2[0]), e2 = e2.slice(1)) : (n2.push(r2[0]), r2 = r2.slice(1));
    } else
      e2.length > 0 ? (n2.push(e2[0]), e2 = e2.slice(1)) : r2.length > 0 && (n2.push(r2[0]), r2 = r2.slice(1));
  return n2;
}
function xe(e2, r2, t2) {
  try {
    const n2 = e2.body;
    if (t2.length !== e2.params.length)
      throw new Error("Invalid Parameter calls to function.");
    for (let a2 = 0; a2 < t2.length; a2++)
      r2.localScope[e2.params[a2].name.toLowerCase()] = { value: t2[a2], valueset: true, node: null };
    const o2 = Q$1(r2, n2);
    if (o2 instanceof N$6)
      return o2.value;
    if (o2 === _$2)
      throw new Error("Cannot Break from a Function");
    if (o2 === j$5)
      throw new Error("Cannot Continue from a Function");
    return o2 instanceof T$4 ? o2.value : o2;
  } catch (n2) {
    throw n2;
  }
}
function Me(e2, r2, t2) {
  return J$1(e2, r2, function(r3, n2, o2) {
    const a2 = { spatialReference: e2.spatialReference, globalScope: e2.globalScope, depthCounter: e2.depthCounter + 1, console: e2.console, lrucache: e2.lrucache, interceptor: e2.interceptor, localScope: {} };
    if (a2.depthCounter > 64)
      throw new Error("Exceeded maximum function depth");
    return xe(t2, a2, o2);
  });
}
function Fe(e2) {
  return function() {
    const r2 = { spatialReference: e2.context.spatialReference, console: e2.context.console, lrucache: e2.context.lrucache, interceptor: e2.context.interceptor, localScope: {}, depthCounter: e2.context.depthCounter + 1, globalScope: e2.context.globalScope };
    if (r2.depthCounter > 64)
      throw new Error("Exceeded maximum function depth");
    return xe(e2.definition, r2, arguments);
  };
}
h$5(Oe, J$1), d$3(Oe, J$1), N$1(Oe, J$1), N$3(Oe, J$1), D$5(Oe, J$1), o$2(Oe, J$1), k$3(Oe, J$1), Oe.typeof = function(e2, r2) {
  return J$1(e2, r2, function(e3, r3, t2) {
    J$3(t2, 1, 1);
    const n2 = Se(t2[0]);
    if (n2 === "Unrecognised Type")
      throw new Error("Unrecognised Type");
    return n2;
  });
}, Oe.iif = function(e2, r2) {
  try {
    J$3(r2.arguments === null ? [] : r2.arguments, 3, 3);
    const t2 = Q$1(e2, r2.arguments[0]);
    if (I$5(t2) === false)
      throw new Error("IF Function must have a boolean test condition");
    const n2 = Q$1(e2, r2.arguments[1]), o2 = Q$1(e2, r2.arguments[2]);
    return t2 === true ? n2 : o2;
  } catch (t2) {
    throw t2;
  }
}, Oe.decode = function(e2, r2) {
  try {
    if (r2.arguments.length < 2)
      throw new Error("Missing Parameters");
    if (r2.arguments.length === 2)
      return Q$1(e2, r2.arguments[1]);
    {
      if ((r2.arguments.length - 1) % 2 == 0)
        throw new Error("Must have a default value result.");
      const t2 = Q$1(e2, r2.arguments[0]);
      return be(e2, r2, 1, t2);
    }
  } catch (t2) {
    throw t2;
  }
}, Oe.when = function(e2, r2) {
  try {
    if (r2.arguments.length < 3)
      throw new Error("Missing Parameters");
    if (r2.arguments.length % 2 == 0)
      throw new Error("Must have a default value result.");
    const t2 = Q$1(e2, r2.arguments[0]);
    if (I$5(t2) === false)
      throw new Error("WHEN needs boolean test conditions");
    return Ue(e2, r2, 0, t2);
  } catch (t2) {
    throw t2;
  }
}, Oe.top = function(e2, r2) {
  return J$1(e2, r2, function(e3, r3, t2) {
    if (J$3(t2, 2, 2), Z$2(t2[0]))
      return X$3(t2[1]) >= t2[0].length ? t2[0].slice(0) : t2[0].slice(0, X$3(t2[1]));
    if (E$6(t2[0]))
      return X$3(t2[1]) >= t2[0].length() ? t2[0].slice(0) : t2[0].slice(0, X$3(t2[1]));
    throw new Error("Top cannot accept this parameter type");
  });
}, Oe.first = function(e2, r2) {
  return J$1(e2, r2, function(e3, r3, t2) {
    return J$3(t2, 1, 1), Z$2(t2[0]) ? t2[0].length === 0 ? null : t2[0][0] : E$6(t2[0]) ? t2[0].length() === 0 ? null : t2[0].get(0) : null;
  });
}, Oe.sort = function(e2, r2) {
  return J$1(e2, r2, function(e3, r3, t2) {
    J$3(t2, 1, 2);
    let n2 = t2[0];
    if (E$6(n2) && (n2 = n2.toArray()), Z$2(n2) === false)
      throw new Error("Illegal Argument");
    if (t2.length > 1) {
      if (v$4(t2[1]) === false)
        throw new Error("Illegal Argument");
      let e4 = n2;
      const r4 = Fe(t2[1]);
      return e4 = Ae(e4, function(e5, t3) {
        return r4(e5, t3);
      }), e4;
    }
    {
      let e4 = n2;
      if (e4.length === 0)
        return [];
      const r4 = {};
      for (let n3 = 0; n3 < e4.length; n3++) {
        const t4 = Se(e4[n3]);
        t4 !== "" && (r4[t4] = true);
      }
      if (r4.Array === true || r4.Dictionary === true || r4.Feature === true || r4.Point === true || r4.Polygon === true || r4.Polyline === true || r4.Multipoint === true || r4.Extent === true || r4.Function === true)
        return e4.slice(0);
      let t3 = 0, o2 = "";
      for (const n3 in r4)
        t3++, o2 = n3;
      return e4 = t3 > 1 || o2 === "String" ? Ae(e4, function(e5, r5) {
        if (e5 == null || e5 === b$8)
          return r5 == null || r5 === b$8 ? 0 : 1;
        if (r5 == null || r5 === b$8)
          return -1;
        const t4 = K$2(e5), n3 = K$2(r5);
        return t4 < n3 ? -1 : t4 === n3 ? 0 : 1;
      }) : o2 === "Number" ? Ae(e4, function(e5, r5) {
        return e5 - r5;
      }) : o2 === "Boolean" ? Ae(e4, function(e5, r5) {
        return e5 === r5 ? 0 : r5 ? -1 : 1;
      }) : o2 === "Date" ? Ae(e4, function(e5, r5) {
        return r5 - e5;
      }) : e4.slice(0), e4;
    }
  });
};
for (const qe in Oe)
  Oe[qe] = { value: new S$4(Oe[qe]), valueset: true, node: null };
const Pe = function() {
};
function De(e2, r2) {
  const t2 = new Pe();
  e2 || (e2 = {}), r2 || (r2 = {});
  const n2 = new h$7({ newline: "\n", tab: "	", singlequote: "'", doublequote: '"', forwardslash: "/", backwardslash: "\\" });
  n2.immutable = false, t2.textformatting = { value: n2, valueset: true, node: null };
  for (const o2 in r2)
    t2[o2] = { value: new S$4(r2[o2]), native: true, valueset: true, node: null };
  for (const o2 in e2)
    e2[o2] && e2[o2].declaredClass === "esri.Graphic" ? t2[o2] = { value: g$5.createFromGraphic(e2[o2]), valueset: true, node: null } : t2[o2] = { value: e2[o2], valueset: true, node: null };
  return t2;
}
Pe.prototype = Oe, Pe.prototype.infinity = { value: Number.POSITIVE_INFINITY, valueset: true, node: null }, Pe.prototype.pi = { value: Math.PI, valueset: true, node: null };
function _e(e2) {
  console.log(e2);
}
function je(e2) {
  const r2 = { mode: "sync", compiled: false, functions: {}, signatures: [], standardFunction: J$1, evaluateIdentifier: Te, arcadeCustomFunctionHandler: Fe };
  for (let t2 = 0; t2 < e2.length; t2++)
    e2[t2].registerFunctions(r2);
  for (const t2 in r2.functions)
    Oe[t2] = { value: new S$4(r2.functions[t2]), valueset: true, node: null }, Pe.prototype[t2] = Oe[t2];
  for (let t2 = 0; t2 < r2.signatures.length; t2++)
    a$5(r2.signatures[t2], "async");
}
function ke(r2, t2) {
  let n2 = t2.spatialReference;
  n2 == null && (n2 = new k$5({ wkid: 102100 }));
  let o2 = Q$1({ spatialReference: n2, globalScope: De(t2.vars, t2.customfunctions), localScope: null, console: t2.console ? t2.console : _e, lrucache: t2.lrucache, interceptor: t2.interceptor, depthCounter: 1 }, r2.body[0].body);
  if (o2 instanceof N$6 && (o2 = o2.value), o2 instanceof T$4 && (o2 = o2.value), o2 === b$8 && (o2 = null), o2 === _$2)
    throw new Error("Cannot return BREAK");
  if (o2 === j$5)
    throw new Error("Cannot return CONTINUE");
  if (o2 instanceof t$2)
    throw new Error("Cannot return FUNCTION");
  if (o2 instanceof S$4)
    throw new Error("Cannot return FUNCTION");
  return o2;
}
function Ye(e2, r2) {
  return m$3(e2, r2);
}
function Ge(e2, r2) {
  return p$3(e2, r2);
}
const e$5 = { AssignmentExpression: "AssignmentExpression", AssignmentPattern: "AssignmentPattern", ArrayExpression: "ArrayExpression", ArrayPattern: "ArrayPattern", BlockStatement: "BlockStatement", BinaryExpression: "BinaryExpression", BreakStatement: "BreakStatement", CallExpression: "CallExpression", ConditionalExpression: "ConditionalExpression", ContinueStatement: "ContinueStatement", EmptyStatement: "EmptyStatement", ExpressionStatement: "ExpressionStatement", ForStatement: "ForStatement", ForInStatement: "ForInStatement", FunctionDeclaration: "FunctionDeclaration", FunctionExpression: "FunctionExpression", Identifier: "Identifier", IfStatement: "IfStatement", Literal: "Literal", LogicalExpression: "LogicalExpression", MemberExpression: "MemberExpression", MethodDefinition: "MethodDefinition", ObjectExpression: "ObjectExpression", ObjectPattern: "ObjectPattern", Program: "Program", Property: "Property", ReturnStatement: "ReturnStatement", SequenceExpression: "SequenceExpression", TemplateElement: "TemplateElement", TemplateLiteral: "TemplateLiteral", UnaryExpression: "UnaryExpression", UpdateExpression: "UpdateExpression", VariableDeclaration: "VariableDeclaration", VariableDeclarator: "VariableDeclarator", WhileStatement: "WhileStatement" };
class e$4 {
  constructor() {
    this.attach = false, this.comments = [], this.stack = [], this.leading = [], this.trailing = [];
  }
  insertInnerComments(e2, n2) {
    if (e2.type === e$5.BlockStatement && e2.body.length === 0) {
      const t2 = [];
      for (let e3 = this.leading.length - 1; e3 >= 0; --e3) {
        const s2 = this.leading[e3];
        n2.end.offset >= s2.start && (t2.unshift(s2.comment), this.leading.splice(e3, 1), this.trailing.splice(e3, 1));
      }
      t2.length && (e2.innerComments = t2);
    }
  }
  findTrailingComments(t2) {
    let e2 = [];
    if (this.trailing.length > 0) {
      for (let n3 = this.trailing.length - 1; n3 >= 0; --n3) {
        const s2 = this.trailing[n3];
        s2.start >= t2.end.offset && e2.unshift(s2.comment);
      }
      return this.trailing.length = 0, e2;
    }
    const n2 = this.stack[this.stack.length - 1];
    if (n2 && n2.node.trailingComments) {
      const s2 = n2.node.trailingComments[0];
      s2 && s2.range[0] >= t2.end.offset && (e2 = n2.node.trailingComments, delete n2.node.trailingComments);
    }
    return e2;
  }
  findLeadingComments(t2) {
    const e2 = [];
    let n2;
    for (; this.stack.length > 0; ) {
      const e3 = this.stack[this.stack.length - 1];
      if (!(e3 && e3.start >= t2.start.offset))
        break;
      n2 = e3.node, this.stack.pop();
    }
    if (n2) {
      for (let s2 = (n2.leadingComments ? n2.leadingComments.length : 0) - 1; s2 >= 0; --s2) {
        const i2 = n2.leadingComments[s2];
        i2.range[1] <= t2.start.offset && (e2.unshift(i2), n2.leadingComments.splice(s2, 1));
      }
      return n2.leadingComments && n2.leadingComments.length === 0 && delete n2.leadingComments, e2;
    }
    for (let s2 = this.leading.length - 1; s2 >= 0; --s2) {
      const n3 = this.leading[s2];
      n3.start <= t2.start.offset && (e2.unshift(n3.comment), this.leading.splice(s2, 1));
    }
    return e2;
  }
  visitNode(e2, n2) {
    if (e2.type === e$5.Program && e2.body.length > 0)
      return;
    this.insertInnerComments(e2, n2);
    const s2 = this.findTrailingComments(n2), i2 = this.findLeadingComments(n2);
    i2.length > 0 && (e2.leadingComments = i2), s2.length > 0 && (e2.trailingComments = s2), this.stack.push({ node: e2, start: n2.start.offset });
  }
  visitComment(t2, e2) {
    const n2 = t2.type[0] === "L" ? "Line" : "Block", s2 = { type: n2, value: t2.value };
    if (t2.range && (s2.range = t2.range), t2.loc && (s2.loc = t2.loc), this.comments.push(s2), this.attach) {
      const s3 = { comment: { type: n2, value: t2.value, range: [e2.start.offset, e2.end.offset] }, start: e2.start.offset };
      t2.loc && (s3.comment.loc = t2.loc), t2.type = n2, this.leading.push(s3), this.trailing.push(s3);
    }
  }
  visit(t2, e2) {
    t2.type === "LineComment" || t2.type === "BlockComment" ? this.visitComment(t2, e2) : this.attach && this.visitNode(t2, e2);
  }
}
function r$4(r2, o2) {
  if (!r2)
    throw new Error("ASSERT: " + o2);
}
class r$3 {
  constructor() {
    this.errors = [], this.tolerant = false;
  }
  recordError(r2) {
    this.errors.push(r2);
  }
  tolerate(r2) {
    if (!this.tolerant)
      throw r2;
    this.recordError(r2);
  }
  constructError(r2, t2) {
    let e2 = new Error(r2);
    try {
      throw e2;
    } catch (o2) {
      Object.create && Object.defineProperty && (e2 = Object.create(o2), Object.defineProperty(e2, "column", { value: t2 }));
    }
    return e2;
  }
  createError(r2, t2, e2, o2) {
    const c2 = "Line " + t2 + ": " + o2, s2 = this.constructError(c2, e2);
    return s2.index = r2, s2.lineNumber = t2, s2.description = o2, s2;
  }
  throwError(r2, t2, e2, o2) {
    throw this.createError(r2, t2, e2, o2);
  }
  tolerateError(r2, t2, e2, o2) {
    const c2 = this.createError(r2, t2, e2, o2);
    if (!this.tolerant)
      throw c2;
    this.recordError(c2);
  }
}
const e$3 = { BadImportCallArity: "Unexpected token", BadGetterArity: "Getter must not have any formal parameters", BadSetterArity: "Setter must have exactly one formal parameter", BadSetterRestParameter: "Setter function argument must not be a rest parameter", ConstructorIsAsync: "Class constructor may not be an async method", ConstructorSpecialMethod: "Class constructor may not be an accessor", DeclarationMissingInitializer: "Missing initializer in %0 declaration", DefaultRestParameter: "Unexpected token =", DefaultRestProperty: "Unexpected token =", DuplicateBinding: "Duplicate binding %0", DuplicateConstructor: "A class may only have one constructor", DuplicateProtoProperty: "Duplicate __proto__ fields are not allowed in object literals", ForInOfLoopInitializer: "%0 loop variable declaration may not have an initializer", GeneratorInLegacyContext: "Generator declarations are not allowed in legacy contexts", IllegalBreak: "Illegal break statement", IllegalContinue: "Illegal continue statement", IllegalExportDeclaration: "Unexpected token", IllegalImportDeclaration: "Unexpected token", IllegalLanguageModeDirective: "Illegal 'use strict' directive in function with non-simple parameter list", IllegalReturn: "Illegal return statement", InvalidEscapedReservedWord: "Keyword must not contain escaped characters", InvalidHexEscapeSequence: "Invalid hexadecimal escape sequence", InvalidLHSInAssignment: "Invalid left-hand side in assignment", InvalidLHSInForIn: "Invalid left-hand side in for-in", InvalidLHSInForLoop: "Invalid left-hand side in for-loop", InvalidModuleSpecifier: "Unexpected token", InvalidRegExp: "Invalid regular expression", LetInLexicalBinding: "let is disallowed as a lexically bound name", MissingFromClause: "Unexpected token", MultipleDefaultsInSwitch: "More than one default clause in switch statement", NewlineAfterThrow: "Illegal newline after throw", NoAsAfterImportNamespace: "Unexpected token", NoCatchOrFinally: "Missing catch or finally after try", ParameterAfterRestParameter: "Rest parameter must be last formal parameter", PropertyAfterRestProperty: "Unexpected token", Redeclaration: "%0 '%1' has already been declared", StaticPrototype: "Classes may not have static property named prototype", StrictCatchVariable: "Catch variable may not be eval or arguments in strict mode", StrictDelete: "Delete of an unqualified identifier in strict mode.", StrictFunction: "In strict mode code, functions can only be declared at top level or inside a block", StrictFunctionName: "Function name may not be eval or arguments in strict mode", StrictLHSAssignment: "Assignment to eval or arguments is not allowed in strict mode", StrictLHSPostfix: "Postfix increment/decrement may not have eval or arguments operand in strict mode", StrictLHSPrefix: "Prefix increment/decrement may not have eval or arguments operand in strict mode", StrictModeWith: "Strict mode code may not include a with statement", StrictOctalLiteral: "Octal literals are not allowed in strict mode.", StrictParamDupe: "Strict mode function may not have duplicate parameter names", StrictParamName: "Parameter name eval or arguments is not allowed in strict mode", StrictReservedWord: "Use of future reserved word in strict mode", StrictVarName: "Variable name may not be eval or arguments in strict mode", TemplateOctalLiteral: "Octal literals are not allowed in template strings.", UnexpectedEOS: "Unexpected end of input", UnexpectedIdentifier: "Unexpected identifier", UnexpectedNumber: "Unexpected number", UnexpectedReserved: "Unexpected reserved word", UnexpectedString: "Unexpected string", UnexpectedTemplate: "Unexpected quasi %0", UnexpectedToken: "Unexpected token %0", UnexpectedTokenIllegal: "Unexpected token ILLEGAL", UnknownLabel: "Undefined label '%0'", UnterminatedRegExp: "Invalid regular expression: missing /" };
class s$2 {
  constructor(s2) {
    this.type = e$5.ArrayExpression, this.elements = s2;
  }
}
class i {
  constructor(s2) {
    this.type = e$5.ArrayPattern, this.elements = s2;
  }
}
class e$2 {
  constructor(s2, i2, e2) {
    this.type = e$5.AssignmentExpression, this.operator = s2, this.left = i2, this.right = e2;
  }
}
class r$2 {
  constructor(s2, i2) {
    this.type = e$5.AssignmentPattern, this.left = s2, this.right = i2;
  }
}
class o {
  constructor(s2, i2, e2) {
    const r2 = s2 === "||" || s2 === "&&";
    this.type = r2 ? e$5.LogicalExpression : e$5.BinaryExpression, this.operator = s2, this.left = i2, this.right = e2;
  }
}
class c {
  constructor(s2) {
    this.type = e$5.BlockStatement, this.body = s2;
  }
}
class h$1 {
  constructor(s2) {
    this.type = e$5.BreakStatement, this.label = s2;
  }
}
class n$1 {
  constructor(s2, i2) {
    this.type = e$5.CallExpression, this.callee = s2, this.arguments = i2;
  }
}
class a$1 {
  constructor(s2, i2) {
    this.type = e$5.MemberExpression, this.computed = true, this.object = s2, this.property = i2;
  }
}
class p {
  constructor(s2, i2, e2) {
    this.type = e$5.ConditionalExpression, this.test = s2, this.consequent = i2, this.alternate = e2;
  }
}
class l {
  constructor(s2) {
    this.type = e$5.ContinueStatement, this.label = s2;
  }
}
class u$2 {
  constructor() {
    this.type = e$5.EmptyStatement;
  }
}
class y$1 {
  constructor(s2) {
    this.type = e$5.ExpressionStatement, this.expression = s2;
  }
}
class m$1 {
  constructor(s2, i2, e2) {
    this.type = e$5.ForInStatement, this.left = s2, this.right = i2, this.body = e2, this.each = false;
  }
}
class d$1 {
  constructor(s2, i2, e2, r2) {
    this.type = e$5.ForStatement, this.init = s2, this.test = i2, this.update = e2, this.body = r2;
  }
}
class x$2 {
  constructor(s2, i2, e2, r2) {
    this.type = e$5.FunctionDeclaration, this.id = s2, this.params = i2, this.body = e2, this.generator = r2, this.expression = false, this.async = false;
  }
}
class b$2 {
  constructor(s2, i2, e2, r2) {
    this.type = e$5.FunctionExpression, this.id = s2, this.params = i2, this.body = e2, this.generator = r2, this.expression = false, this.async = false;
  }
}
class E$2 {
  constructor(s2) {
    this.type = e$5.Identifier, this.name = s2;
  }
}
class g$1 {
  constructor(s2, i2, e2) {
    this.type = e$5.IfStatement, this.test = s2, this.consequent = i2, this.alternate = e2;
  }
}
class f$1 {
  constructor(s2, i2) {
    this.type = e$5.Literal, this.value = s2, this.raw = i2;
  }
}
class P$2 {
  constructor(s2) {
    this.type = e$5.ObjectExpression, this.properties = s2;
  }
}
class j$3 {
  constructor(s2) {
    this.type = e$5.ObjectPattern, this.properties = s2;
  }
}
class q$2 {
  constructor(s2, i2, e2, r2, o2, c2) {
    this.type = e$5.Property, this.key = i2, this.computed = e2, this.value = r2, this.kind = s2, this.method = o2, this.shorthand = c2;
  }
}
class v$2 {
  constructor(s2) {
    this.type = e$5.ReturnStatement, this.argument = s2;
  }
}
class A$2 {
  constructor(s2) {
    this.type = e$5.Program, this.body = s2, this.sourceType = "script";
  }
}
class D$3 {
  constructor(s2) {
    this.type = e$5.SequenceExpression, this.expressions = s2;
  }
}
class F$2 {
  constructor(s2, i2) {
    this.type = e$5.MemberExpression, this.computed = false, this.object = s2, this.property = i2;
  }
}
class T$1 {
  constructor(s2, i2) {
    this.type = e$5.TemplateElement, this.value = s2, this.tail = i2;
  }
}
class B$1 {
  constructor(s2, i2) {
    this.type = e$5.TemplateLiteral, this.quasis = s2, this.expressions = i2;
  }
}
class C$2 {
  constructor(s2, i2) {
    this.type = e$5.UnaryExpression, this.operator = s2, this.argument = i2, this.prefix = true;
  }
}
class I$2 {
  constructor(s2, i2, e2) {
    this.type = e$5.UpdateExpression, this.operator = s2, this.argument = i2, this.prefix = e2;
  }
}
class L$2 {
  constructor(s2, i2) {
    this.type = e$5.VariableDeclaration, this.declarations = s2, this.kind = i2;
  }
}
class M$2 {
  constructor(s2, i2) {
    this.type = e$5.VariableDeclarator, this.id = s2, this.init = i2;
  }
}
const u$1 = { NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7C6\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB67\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDEC0-\uDEEB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/, NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u07FD\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D3-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u09FE\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CD0-\u1CD2\u1CD4-\u1CFA\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7C6\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB67\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD27\uDD30-\uDD39\uDF00-\uDF1C\uDF27\uDF30-\uDF50\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD44-\uDD46\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDC9-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3B-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC5E\uDC5F\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDC00-\uDC3A\uDCA0-\uDCE9\uDCFF\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE1\uDDE3\uDDE4\uDE00-\uDE3E\uDE47\uDE50-\uDE99\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4B\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/ }, D$2 = { fromCodePoint: (u2) => u2 < 65536 ? String.fromCharCode(u2) : String.fromCharCode(55296 + (u2 - 65536 >> 10)) + String.fromCharCode(56320 + (u2 - 65536 & 1023)), isWhiteSpace: (u2) => u2 === 32 || u2 === 9 || u2 === 11 || u2 === 12 || u2 === 160 || u2 >= 5760 && [5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279].indexOf(u2) >= 0, isLineTerminator: (u2) => u2 === 10 || u2 === 13 || u2 === 8232 || u2 === 8233, isIdentifierStart: (F2) => F2 === 36 || F2 === 95 || F2 >= 65 && F2 <= 90 || F2 >= 97 && F2 <= 122 || F2 === 92 || F2 >= 128 && u$1.NonAsciiIdentifierStart.test(D$2.fromCodePoint(F2)), isIdentifierPart: (F2) => F2 === 36 || F2 === 95 || F2 >= 65 && F2 <= 90 || F2 >= 97 && F2 <= 122 || F2 >= 48 && F2 <= 57 || F2 === 92 || F2 >= 128 && u$1.NonAsciiIdentifierPart.test(D$2.fromCodePoint(F2)), isDecimalDigit: (u2) => u2 >= 48 && u2 <= 57, isHexDigit: (u2) => u2 >= 48 && u2 <= 57 || u2 >= 65 && u2 <= 70 || u2 >= 97 && u2 <= 102, isOctalDigit: (u2) => u2 >= 48 && u2 <= 55 };
function s$1(e2) {
  return "0123456789abcdef".indexOf(e2.toLowerCase());
}
function n(e2) {
  return "01234567".indexOf(e2);
}
class r$1 {
  constructor(e2, t2) {
    this.source = e2, this.errorHandler = t2, this.trackComment = false, this.isModule = false, this.length = e2.length, this.index = 0, this.lineNumber = e2.length > 0 ? 1 : 0, this.lineStart = 0, this.curlyStack = [];
  }
  saveState() {
    return { index: this.index, lineNumber: this.lineNumber, lineStart: this.lineStart, curlyStack: this.curlyStack.slice() };
  }
  restoreState(e2) {
    this.index = e2.index, this.lineNumber = e2.lineNumber, this.lineStart = e2.lineStart, this.curlyStack = e2.curlyStack;
  }
  eof() {
    return this.index >= this.length;
  }
  throwUnexpectedToken(e2 = e$3.UnexpectedTokenIllegal) {
    return this.errorHandler.throwError(this.index, this.lineNumber, this.index - this.lineStart + 1, e2);
  }
  tolerateUnexpectedToken(e2 = e$3.UnexpectedTokenIllegal) {
    this.errorHandler.tolerateError(this.index, this.lineNumber, this.index - this.lineStart + 1, e2);
  }
  skipSingleLineComment(e2) {
    let t2, s2, n2 = [];
    for (this.trackComment && (n2 = [], t2 = this.index - e2, s2 = { start: { line: this.lineNumber, column: this.index - this.lineStart - e2 }, end: {} }); !this.eof(); ) {
      const r2 = this.source.charCodeAt(this.index);
      if (++this.index, D$2.isLineTerminator(r2)) {
        if (this.trackComment) {
          s2.end = { line: this.lineNumber, column: this.index - this.lineStart - 1 };
          const i2 = { multiLine: false, slice: [t2 + e2, this.index - 1], range: [t2, this.index - 1], loc: s2 };
          n2.push(i2);
        }
        return r2 === 13 && this.source.charCodeAt(this.index) === 10 && ++this.index, ++this.lineNumber, this.lineStart = this.index, n2;
      }
    }
    if (this.trackComment) {
      s2.end = { line: this.lineNumber, column: this.index - this.lineStart };
      const i2 = { multiLine: false, slice: [t2 + e2, this.index], range: [t2, this.index], loc: s2 };
      n2.push(i2);
    }
    return n2;
  }
  skipMultiLineComment() {
    let e2, t2, s2 = [];
    for (this.trackComment && (s2 = [], e2 = this.index - 2, t2 = { start: { line: this.lineNumber, column: this.index - this.lineStart - 2 }, end: {} }); !this.eof(); ) {
      const n2 = this.source.charCodeAt(this.index);
      if (D$2.isLineTerminator(n2))
        n2 === 13 && this.source.charCodeAt(this.index + 1) === 10 && ++this.index, ++this.lineNumber, ++this.index, this.lineStart = this.index;
      else if (n2 === 42) {
        if (this.source.charCodeAt(this.index + 1) === 47) {
          if (this.index += 2, this.trackComment) {
            t2.end = { line: this.lineNumber, column: this.index - this.lineStart };
            const i2 = { multiLine: true, slice: [e2 + 2, this.index - 2], range: [e2, this.index], loc: t2 };
            s2.push(i2);
          }
          return s2;
        }
        ++this.index;
      } else
        ++this.index;
    }
    if (this.trackComment) {
      t2.end = { line: this.lineNumber, column: this.index - this.lineStart };
      const i2 = { multiLine: true, slice: [e2 + 2, this.index], range: [e2, this.index], loc: t2 };
      s2.push(i2);
    }
    return this.tolerateUnexpectedToken(), s2;
  }
  scanComments() {
    let e2;
    this.trackComment && (e2 = []);
    let t2 = this.index === 0;
    for (; !this.eof(); ) {
      let s2 = this.source.charCodeAt(this.index);
      if (D$2.isWhiteSpace(s2))
        ++this.index;
      else if (D$2.isLineTerminator(s2))
        ++this.index, s2 === 13 && this.source.charCodeAt(this.index) === 10 && ++this.index, ++this.lineNumber, this.lineStart = this.index, t2 = true;
      else if (s2 === 47)
        if (s2 = this.source.charCodeAt(this.index + 1), s2 === 47) {
          this.index += 2;
          const i2 = this.skipSingleLineComment(2);
          this.trackComment && (e2 = e2.concat(i2)), t2 = true;
        } else {
          if (s2 !== 42)
            break;
          {
            this.index += 2;
            const t3 = this.skipMultiLineComment();
            this.trackComment && (e2 = e2.concat(t3));
          }
        }
      else if (t2 && s2 === 45) {
        if (this.source.charCodeAt(this.index + 1) !== 45 || this.source.charCodeAt(this.index + 2) !== 62)
          break;
        {
          this.index += 3;
          const t3 = this.skipSingleLineComment(3);
          this.trackComment && (e2 = e2.concat(t3));
        }
      } else {
        if (s2 !== 60 || this.isModule)
          break;
        if (this.source.slice(this.index + 1, this.index + 4) !== "!--")
          break;
        {
          this.index += 4;
          const t3 = this.skipSingleLineComment(4);
          this.trackComment && (e2 = e2.concat(t3));
        }
      }
    }
    return e2;
  }
  isFutureReservedWord(e2) {
    return false;
  }
  isStrictModeReservedWord(e2) {
    return false;
  }
  isRestrictedWord(e2) {
    return false;
  }
  isKeyword(e2) {
    switch ((e2 = e2.toLowerCase()).length) {
      case 2:
        return e2 === "if" || e2 === "in";
      case 3:
        return e2 === "var" || e2 === "for";
      case 4:
        return e2 === "else";
      case 5:
        return e2 === "break";
      case 6:
        return e2 === "return";
      case 8:
        return e2 === "function" || e2 === "continue";
      default:
        return false;
    }
  }
  codePointAt(e2) {
    let t2 = this.source.charCodeAt(e2);
    if (t2 >= 55296 && t2 <= 56319) {
      const i2 = this.source.charCodeAt(e2 + 1);
      if (i2 >= 56320 && i2 <= 57343) {
        t2 = 1024 * (t2 - 55296) + i2 - 56320 + 65536;
      }
    }
    return t2;
  }
  scanHexEscape(e2) {
    const t2 = e2 === "u" ? 4 : 2;
    let n2 = 0;
    for (let r2 = 0; r2 < t2; ++r2) {
      if (this.eof() || !D$2.isHexDigit(this.source.charCodeAt(this.index)))
        return null;
      n2 = 16 * n2 + s$1(this.source[this.index++]);
    }
    return String.fromCharCode(n2);
  }
  scanUnicodeCodePointEscape() {
    let e2 = this.source[this.index], t2 = 0;
    for (e2 === "}" && this.throwUnexpectedToken(); !this.eof() && (e2 = this.source[this.index++], D$2.isHexDigit(e2.charCodeAt(0))); )
      t2 = 16 * t2 + s$1(e2);
    return (t2 > 1114111 || e2 !== "}") && this.throwUnexpectedToken(), D$2.fromCodePoint(t2);
  }
  getIdentifier() {
    const e2 = this.index++;
    for (; !this.eof(); ) {
      const t2 = this.source.charCodeAt(this.index);
      if (t2 === 92)
        return this.index = e2, this.getComplexIdentifier();
      if (t2 >= 55296 && t2 < 57343)
        return this.index = e2, this.getComplexIdentifier();
      if (!D$2.isIdentifierPart(t2))
        break;
      ++this.index;
    }
    return this.source.slice(e2, this.index);
  }
  getComplexIdentifier() {
    let e2, t2 = this.codePointAt(this.index), s2 = D$2.fromCodePoint(t2);
    for (this.index += s2.length, t2 === 92 && (this.source.charCodeAt(this.index) !== 117 && this.throwUnexpectedToken(), ++this.index, this.source[this.index] === "{" ? (++this.index, e2 = this.scanUnicodeCodePointEscape()) : (e2 = this.scanHexEscape("u"), e2 !== null && e2 !== "\\" && D$2.isIdentifierStart(e2.charCodeAt(0)) || this.throwUnexpectedToken()), s2 = e2); !this.eof() && (t2 = this.codePointAt(this.index), D$2.isIdentifierPart(t2)); )
      e2 = D$2.fromCodePoint(t2), s2 += e2, this.index += e2.length, t2 === 92 && (s2 = s2.substr(0, s2.length - 1), this.source.charCodeAt(this.index) !== 117 && this.throwUnexpectedToken(), ++this.index, this.source[this.index] === "{" ? (++this.index, e2 = this.scanUnicodeCodePointEscape()) : (e2 = this.scanHexEscape("u"), e2 !== null && e2 !== "\\" && D$2.isIdentifierPart(e2.charCodeAt(0)) || this.throwUnexpectedToken()), s2 += e2);
    return s2;
  }
  octalToDecimal(e2) {
    let t2 = e2 !== "0", s2 = n(e2);
    return !this.eof() && D$2.isOctalDigit(this.source.charCodeAt(this.index)) && (t2 = true, s2 = 8 * s2 + n(this.source[this.index++]), "0123".indexOf(e2) >= 0 && !this.eof() && D$2.isOctalDigit(this.source.charCodeAt(this.index)) && (s2 = 8 * s2 + n(this.source[this.index++]))), { code: s2, octal: t2 };
  }
  scanIdentifier() {
    let e2;
    const i2 = this.index, s2 = this.source.charCodeAt(i2) === 92 ? this.getComplexIdentifier() : this.getIdentifier();
    if (e2 = s2.length === 1 ? 3 : this.isKeyword(s2) ? 4 : s2.toLowerCase() === "null" ? 5 : s2.toLowerCase() === "true" || s2.toLowerCase() === "false" ? 1 : 3, e2 !== 3 && i2 + s2.length !== this.index) {
      const e3 = this.index;
      this.index = i2, this.tolerateUnexpectedToken(e$3.InvalidEscapedReservedWord), this.index = e3;
    }
    return { type: e2, value: s2, lineNumber: this.lineNumber, lineStart: this.lineStart, start: i2, end: this.index };
  }
  scanPunctuator() {
    const e2 = this.index;
    let t2 = this.source[this.index];
    switch (t2) {
      case "(":
      case "{":
        t2 === "{" && this.curlyStack.push("{"), ++this.index;
        break;
      case ".":
        ++this.index, this.source[this.index] === "." && this.source[this.index + 1] === "." && (this.index += 2, t2 = "...");
        break;
      case "}":
        ++this.index, this.curlyStack.pop();
        break;
      case ")":
      case ";":
      case ",":
      case "[":
      case "]":
      case ":":
      case "?":
      case "~":
        ++this.index;
        break;
      default:
        t2 = this.source.substr(this.index, 4), t2 === ">>>=" ? this.index += 4 : (t2 = t2.substr(0, 3), t2 === "===" || t2 === "!==" || t2 === ">>>" || t2 === "<<=" || t2 === ">>=" || t2 === "**=" ? this.index += 3 : (t2 = t2.substr(0, 2), t2 === "&&" || t2 === "||" || t2 === "==" || t2 === "!=" || t2 === "+=" || t2 === "-=" || t2 === "*=" || t2 === "/=" || t2 === "++" || t2 === "--" || t2 === "<<" || t2 === ">>" || t2 === "&=" || t2 === "|=" || t2 === "^=" || t2 === "%=" || t2 === "<=" || t2 === ">=" || t2 === "=>" || t2 === "**" ? this.index += 2 : (t2 = this.source[this.index], "<>=!+-*%&|^/".indexOf(t2) >= 0 && ++this.index)));
    }
    return this.index === e2 && this.throwUnexpectedToken(), { type: 7, value: t2, lineNumber: this.lineNumber, lineStart: this.lineStart, start: e2, end: this.index };
  }
  scanHexLiteral(e2) {
    let t2 = "";
    for (; !this.eof() && D$2.isHexDigit(this.source.charCodeAt(this.index)); )
      t2 += this.source[this.index++];
    return t2.length === 0 && this.throwUnexpectedToken(), D$2.isIdentifierStart(this.source.charCodeAt(this.index)) && this.throwUnexpectedToken(), { type: 6, value: parseInt("0x" + t2, 16), lineNumber: this.lineNumber, lineStart: this.lineStart, start: e2, end: this.index };
  }
  scanBinaryLiteral(e2) {
    let t2, s2 = "";
    for (; !this.eof() && (t2 = this.source[this.index], t2 === "0" || t2 === "1"); )
      s2 += this.source[this.index++];
    return s2.length === 0 && this.throwUnexpectedToken(), this.eof() || (t2 = this.source.charCodeAt(this.index), (D$2.isIdentifierStart(t2) || D$2.isDecimalDigit(t2)) && this.throwUnexpectedToken()), { type: 6, value: parseInt(s2, 2), lineNumber: this.lineNumber, lineStart: this.lineStart, start: e2, end: this.index };
  }
  scanOctalLiteral(e2, t2) {
    let s2 = "", n2 = false;
    for (D$2.isOctalDigit(e2.charCodeAt(0)) ? (n2 = true, s2 = "0" + this.source[this.index++]) : ++this.index; !this.eof() && D$2.isOctalDigit(this.source.charCodeAt(this.index)); )
      s2 += this.source[this.index++];
    return n2 || s2.length !== 0 || this.throwUnexpectedToken(), (D$2.isIdentifierStart(this.source.charCodeAt(this.index)) || D$2.isDecimalDigit(this.source.charCodeAt(this.index))) && this.throwUnexpectedToken(), { type: 6, value: parseInt(s2, 8), octal: n2, lineNumber: this.lineNumber, lineStart: this.lineStart, start: t2, end: this.index };
  }
  scanNumericLiteral() {
    const t2 = this.index;
    let s2 = this.source[t2];
    r$4(D$2.isDecimalDigit(s2.charCodeAt(0)) || s2 === ".", "Numeric literal must start with a decimal digit or a decimal point");
    let n2 = "";
    if (s2 !== ".") {
      if (n2 = this.source[this.index++], s2 = this.source[this.index], n2 === "0") {
        if (s2 === "x" || s2 === "X")
          return ++this.index, this.scanHexLiteral(t2);
        if (s2 === "b" || s2 === "B")
          return ++this.index, this.scanBinaryLiteral(t2);
        if (s2 === "o" || s2 === "O")
          return this.scanOctalLiteral(s2, t2);
      }
      for (; D$2.isDecimalDigit(this.source.charCodeAt(this.index)); )
        n2 += this.source[this.index++];
      s2 = this.source[this.index];
    }
    if (s2 === ".") {
      for (n2 += this.source[this.index++]; D$2.isDecimalDigit(this.source.charCodeAt(this.index)); )
        n2 += this.source[this.index++];
      s2 = this.source[this.index];
    }
    if (s2 === "e" || s2 === "E")
      if (n2 += this.source[this.index++], s2 = this.source[this.index], s2 !== "+" && s2 !== "-" || (n2 += this.source[this.index++]), D$2.isDecimalDigit(this.source.charCodeAt(this.index)))
        for (; D$2.isDecimalDigit(this.source.charCodeAt(this.index)); )
          n2 += this.source[this.index++];
      else
        this.throwUnexpectedToken();
    return D$2.isIdentifierStart(this.source.charCodeAt(this.index)) && this.throwUnexpectedToken(), { type: 6, value: parseFloat(n2), lineNumber: this.lineNumber, lineStart: this.lineStart, start: t2, end: this.index };
  }
  scanStringLiteral() {
    const s2 = this.index;
    let n2 = this.source[s2];
    r$4(n2 === "'" || n2 === '"', "String literal must starts with a quote"), ++this.index;
    let r2 = false, h2 = "";
    for (; !this.eof(); ) {
      let e2 = this.source[this.index++];
      if (e2 === n2) {
        n2 = "";
        break;
      }
      if (e2 === "\\")
        if (e2 = this.source[this.index++], e2 && D$2.isLineTerminator(e2.charCodeAt(0)))
          ++this.lineNumber, e2 === "\r" && this.source[this.index] === "\n" && ++this.index, this.lineStart = this.index;
        else
          switch (e2) {
            case "u":
              if (this.source[this.index] === "{")
                ++this.index, h2 += this.scanUnicodeCodePointEscape();
              else {
                const t2 = this.scanHexEscape(e2);
                t2 === null && this.throwUnexpectedToken(), h2 += t2;
              }
              break;
            case "x": {
              const i2 = this.scanHexEscape(e2);
              i2 === null && this.throwUnexpectedToken(e$3.InvalidHexEscapeSequence), h2 += i2;
              break;
            }
            case "n":
              h2 += "\n";
              break;
            case "r":
              h2 += "\r";
              break;
            case "t":
              h2 += "	";
              break;
            case "b":
              h2 += "\b";
              break;
            case "f":
              h2 += "\f";
              break;
            case "v":
              h2 += "\v";
              break;
            case "8":
            case "9":
              h2 += e2, this.tolerateUnexpectedToken();
              break;
            default:
              if (e2 && D$2.isOctalDigit(e2.charCodeAt(0))) {
                const t2 = this.octalToDecimal(e2);
                r2 = t2.octal || r2, h2 += String.fromCharCode(t2.code);
              } else
                h2 += e2;
          }
      else {
        if (D$2.isLineTerminator(e2.charCodeAt(0)))
          break;
        h2 += e2;
      }
    }
    return n2 !== "" && (this.index = s2, this.throwUnexpectedToken()), { type: 8, value: h2, octal: r2, lineNumber: this.lineNumber, lineStart: this.lineStart, start: s2, end: this.index };
  }
  scanTemplate() {
    let e2 = "", s2 = false;
    const n2 = this.index, r2 = this.source[n2] === "`";
    let h2 = false, c2 = 2;
    for (++this.index; !this.eof(); ) {
      let n3 = this.source[this.index++];
      if (n3 === "`") {
        c2 = 1, h2 = true, s2 = true;
        break;
      }
      if (n3 === "$") {
        if (this.source[this.index] === "{") {
          this.curlyStack.push("${"), ++this.index, s2 = true;
          break;
        }
        e2 += n3;
      } else if (n3 === "\\")
        if (n3 = this.source[this.index++], D$2.isLineTerminator(n3.charCodeAt(0)))
          ++this.lineNumber, n3 === "\r" && this.source[this.index] === "\n" && ++this.index, this.lineStart = this.index;
        else
          switch (n3) {
            case "n":
              e2 += "\n";
              break;
            case "r":
              e2 += "\r";
              break;
            case "t":
              e2 += "	";
              break;
            case "u":
              if (this.source[this.index] === "{")
                ++this.index, e2 += this.scanUnicodeCodePointEscape();
              else {
                const t2 = this.index, i2 = this.scanHexEscape(n3);
                i2 !== null ? e2 += i2 : (this.index = t2, e2 += n3);
              }
              break;
            case "x": {
              const i2 = this.scanHexEscape(n3);
              i2 === null && this.throwUnexpectedToken(e$3.InvalidHexEscapeSequence), e2 += i2;
              break;
            }
            case "b":
              e2 += "\b";
              break;
            case "f":
              e2 += "\f";
              break;
            case "v":
              e2 += "\v";
              break;
            default:
              n3 === "0" ? (D$2.isDecimalDigit(this.source.charCodeAt(this.index)) && this.throwUnexpectedToken(e$3.TemplateOctalLiteral), e2 += "\0") : D$2.isOctalDigit(n3.charCodeAt(0)) ? this.throwUnexpectedToken(e$3.TemplateOctalLiteral) : e2 += n3;
          }
      else
        D$2.isLineTerminator(n3.charCodeAt(0)) ? (++this.lineNumber, n3 === "\r" && this.source[this.index] === "\n" && ++this.index, this.lineStart = this.index, e2 += "\n") : e2 += n3;
    }
    return s2 || this.throwUnexpectedToken(), r2 || this.curlyStack.pop(), { type: 10, value: this.source.slice(n2 + 1, this.index - c2), cooked: e2, head: r2, tail: h2, lineNumber: this.lineNumber, lineStart: this.lineStart, start: n2, end: this.index };
  }
  testRegExp(e2, i2) {
    const s2 = "\uFFFF";
    let n2 = e2;
    i2.indexOf("u") >= 0 && (n2 = n2.replace(/\\u\{([0-9a-fA-F]+)\}|\\u([a-fA-F0-9]{4})/g, (e3, i3, n3) => {
      const r2 = parseInt(i3 || n3, 16);
      return r2 > 1114111 && this.throwUnexpectedToken(e$3.InvalidRegExp), r2 <= 65535 ? String.fromCharCode(r2) : s2;
    }).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, s2));
    try {
      RegExp(n2);
    } catch (r2) {
      this.throwUnexpectedToken(e$3.InvalidRegExp);
    }
    try {
      return new RegExp(e2, i2);
    } catch (h2) {
      return null;
    }
  }
  scanRegExpBody() {
    let s2 = this.source[this.index];
    r$4(s2 === "/", "Regular expression literal must start with a slash");
    let n2 = this.source[this.index++], r2 = false, h2 = false;
    for (; !this.eof(); )
      if (s2 = this.source[this.index++], n2 += s2, s2 === "\\")
        s2 = this.source[this.index++], D$2.isLineTerminator(s2.charCodeAt(0)) && this.throwUnexpectedToken(e$3.UnterminatedRegExp), n2 += s2;
      else if (D$2.isLineTerminator(s2.charCodeAt(0)))
        this.throwUnexpectedToken(e$3.UnterminatedRegExp);
      else if (r2)
        s2 === "]" && (r2 = false);
      else {
        if (s2 === "/") {
          h2 = true;
          break;
        }
        s2 === "[" && (r2 = true);
      }
    return h2 || this.throwUnexpectedToken(e$3.UnterminatedRegExp), n2.substr(1, n2.length - 2);
  }
  scanRegExpFlags() {
    let e2 = "", t2 = "";
    for (; !this.eof(); ) {
      let s2 = this.source[this.index];
      if (!D$2.isIdentifierPart(s2.charCodeAt(0)))
        break;
      if (++this.index, s2 !== "\\" || this.eof())
        t2 += s2, e2 += s2;
      else if (s2 = this.source[this.index], s2 === "u") {
        ++this.index;
        let i2 = this.index;
        const s3 = this.scanHexEscape("u");
        if (s3 !== null)
          for (t2 += s3, e2 += "\\u"; i2 < this.index; ++i2)
            e2 += this.source[i2];
        else
          this.index = i2, t2 += "u", e2 += "\\u";
        this.tolerateUnexpectedToken();
      } else
        e2 += "\\", this.tolerateUnexpectedToken();
    }
    return t2;
  }
  scanRegExp() {
    const e2 = this.index, t2 = this.scanRegExpBody(), i2 = this.scanRegExpFlags();
    return { type: 9, value: "", pattern: t2, flags: i2, regex: this.testRegExp(t2, i2), lineNumber: this.lineNumber, lineStart: this.lineStart, start: e2, end: this.index };
  }
  lex() {
    if (this.eof())
      return { type: 2, value: "", lineNumber: this.lineNumber, lineStart: this.lineStart, start: this.index, end: this.index };
    const e2 = this.source.charCodeAt(this.index);
    return D$2.isIdentifierStart(e2) ? this.scanIdentifier() : e2 === 40 || e2 === 41 || e2 === 59 ? this.scanPunctuator() : e2 === 39 || e2 === 34 ? this.scanStringLiteral() : e2 === 46 ? D$2.isDecimalDigit(this.source.charCodeAt(this.index + 1)) ? this.scanNumericLiteral() : this.scanPunctuator() : D$2.isDecimalDigit(e2) ? this.scanNumericLiteral() : e2 === 96 || e2 === 125 && this.curlyStack[this.curlyStack.length - 1] === "${" ? this.scanTemplate() : e2 >= 55296 && e2 < 57343 && D$2.isIdentifierStart(this.codePointAt(this.index)) ? this.scanIdentifier() : this.scanPunctuator();
  }
}
const e$1 = { 1: "Boolean", 2: "<end>", 3: "Identifier", 4: "Keyword", 5: "Null", 6: "Numeric", 7: "Punctuator", 8: "String", 9: "RegularExpression", 10: "Template" };
const O$1 = "ArrowParameterPlaceHolder";
class j$2 {
  constructor(t2, e2 = {}, i2) {
    this.config = { range: typeof e2.range == "boolean" && e2.range, loc: typeof e2.loc == "boolean" && e2.loc, source: null, tokens: typeof e2.tokens == "boolean" && e2.tokens, comment: typeof e2.comment == "boolean" && e2.comment, tolerant: typeof e2.tolerant == "boolean" && e2.tolerant }, this.config.loc && e2.source && e2.source !== null && (this.config.source = String(e2.source)), this.delegate = i2, this.errorHandler = new r$3(), this.errorHandler.tolerant = this.config.tolerant, this.scanner = new r$1(t2, this.errorHandler), this.scanner.trackComment = this.config.comment, this.operatorPrecedence = { ")": 0, ";": 0, ",": 0, "=": 0, "]": 0, "||": 1, "&&": 2, "|": 3, "^": 4, "&": 5, "==": 6, "!=": 6, "===": 6, "!==": 6, "<": 7, ">": 7, "<=": 7, ">=": 7, "<<": 8, ">>": 8, ">>>": 8, "+": 9, "-": 9, "*": 11, "/": 11, "%": 11 }, this.lookahead = { type: 2, value: "", lineNumber: this.scanner.lineNumber, lineStart: 0, start: 0, end: 0 }, this.hasLineTerminator = false, this.context = { isModule: false, allowIn: true, allowStrictDirective: true, firstCoverInitializedNameError: null, isAssignmentTarget: false, isBindingElement: false, inFunctionBody: false, inIteration: false, inSwitch: false, labelSet: {}, strict: false }, this.tokens = [], this.startMarker = { index: 0, line: this.scanner.lineNumber, column: 0 }, this.lastMarker = { index: 0, line: this.scanner.lineNumber, column: 0 }, this.nextToken(), this.lastMarker = { index: this.scanner.index, line: this.scanner.lineNumber, column: this.scanner.index - this.scanner.lineStart };
  }
  throwError(t2, ...s2) {
    const i2 = s2.slice(), n2 = t2.replace(/%(\d)/g, (t3, s3) => (r$4(s3 < i2.length, "Message reference must be in range"), i2[s3])), r2 = this.lastMarker.index, a2 = this.lastMarker.line, o2 = this.lastMarker.column + 1;
    throw this.errorHandler.createError(r2, a2, o2, n2);
  }
  tolerateError(t2, ...s2) {
    const i2 = s2.slice(), n2 = t2.replace(/%(\d)/g, (t3, s3) => (r$4(s3 < i2.length, "Message reference must be in range"), i2[s3])), r2 = this.lastMarker.index, a2 = this.scanner.lineNumber, o2 = this.lastMarker.column + 1;
    this.errorHandler.tolerateError(r2, a2, o2, n2);
  }
  unexpectedTokenError(t2, e2) {
    let s2, n2 = e2 || e$3.UnexpectedToken;
    if (t2 ? (e2 || (n2 = t2.type === 2 ? e$3.UnexpectedEOS : t2.type === 3 ? e$3.UnexpectedIdentifier : t2.type === 6 ? e$3.UnexpectedNumber : t2.type === 8 ? e$3.UnexpectedString : t2.type === 10 ? e$3.UnexpectedTemplate : e$3.UnexpectedToken, t2.type === 4 && (this.scanner.isFutureReservedWord(t2.value) ? n2 = e$3.UnexpectedReserved : this.context.strict && this.scanner.isStrictModeReservedWord(t2.value) && (n2 = e$3.StrictReservedWord))), s2 = t2.value) : s2 = "ILLEGAL", n2 = n2.replace("%0", s2), t2 && typeof t2.lineNumber == "number") {
      const e3 = t2.start, s3 = t2.lineNumber, i2 = this.lastMarker.index - this.lastMarker.column, r2 = t2.start - i2 + 1;
      return this.errorHandler.createError(e3, s3, r2, n2);
    }
    {
      const t3 = this.lastMarker.index, e3 = this.lastMarker.line, s3 = this.lastMarker.column + 1;
      return this.errorHandler.createError(t3, e3, s3, n2);
    }
  }
  throwUnexpectedToken(t2, e2) {
    throw this.unexpectedTokenError(t2, e2);
  }
  tolerateUnexpectedToken(t2, e2) {
    this.errorHandler.tolerate(this.unexpectedTokenError(t2, e2));
  }
  collectComments() {
    if (this.config.comment) {
      const t2 = this.scanner.scanComments();
      if (t2.length > 0 && this.delegate)
        for (let e2 = 0; e2 < t2.length; ++e2) {
          const s2 = t2[e2], i2 = { type: s2.multiLine ? "BlockComment" : "LineComment", value: this.scanner.source.slice(s2.slice[0], s2.slice[1]) };
          this.config.range && (i2.range = s2.range), this.config.loc && (i2.loc = s2.loc);
          const n2 = { start: { line: s2.loc.start.line, column: s2.loc.start.column, offset: s2.range[0] }, end: { line: s2.loc.end.line, column: s2.loc.end.column, offset: s2.range[1] } };
          this.delegate(i2, n2);
        }
    } else
      this.scanner.scanComments();
  }
  getTokenRaw(t2) {
    return this.scanner.source.slice(t2.start, t2.end);
  }
  convertToken(t2) {
    const e2 = { type: e$1[t2.type], value: this.getTokenRaw(t2) };
    if (this.config.range && (e2.range = [t2.start, t2.end]), this.config.loc && (e2.loc = { start: { line: this.startMarker.line, column: this.startMarker.column }, end: { line: this.scanner.lineNumber, column: this.scanner.index - this.scanner.lineStart } }), t2.type === 9) {
      const s2 = t2.pattern, i2 = t2.flags;
      e2.regex = { pattern: s2, flags: i2 };
    }
    return e2;
  }
  nextToken() {
    const t2 = this.lookahead;
    this.lastMarker.index = this.scanner.index, this.lastMarker.line = this.scanner.lineNumber, this.lastMarker.column = this.scanner.index - this.scanner.lineStart, this.collectComments(), this.scanner.index !== this.startMarker.index && (this.startMarker.index = this.scanner.index, this.startMarker.line = this.scanner.lineNumber, this.startMarker.column = this.scanner.index - this.scanner.lineStart);
    const e2 = this.scanner.lex();
    return this.hasLineTerminator = t2.lineNumber !== e2.lineNumber, e2 && this.context.strict && e2.type === 3 && this.scanner.isStrictModeReservedWord(e2.value) && (e2.type = 4), this.lookahead = e2, this.config.tokens && e2.type !== 2 && this.tokens.push(this.convertToken(e2)), t2;
  }
  nextRegexToken() {
    this.collectComments();
    const t2 = this.scanner.scanRegExp();
    return this.config.tokens && (this.tokens.pop(), this.tokens.push(this.convertToken(t2))), this.lookahead = t2, this.nextToken(), t2;
  }
  createNode() {
    return { index: this.startMarker.index, line: this.startMarker.line, column: this.startMarker.column };
  }
  startNode(t2, e2 = 0) {
    let s2 = t2.start - t2.lineStart, i2 = t2.lineNumber;
    return s2 < 0 && (s2 += e2, i2--), { index: t2.start, line: i2, column: s2 };
  }
  finalize(t2, e2) {
    if (this.config.range && (e2.range = [t2.index, this.lastMarker.index]), this.config.loc && (e2.loc = { start: { line: t2.line, column: t2.column }, end: { line: this.lastMarker.line, column: this.lastMarker.column } }, this.config.source && (e2.loc.source = this.config.source)), this.delegate) {
      const s2 = { start: { line: t2.line, column: t2.column, offset: t2.index }, end: { line: this.lastMarker.line, column: this.lastMarker.column, offset: this.lastMarker.index } };
      this.delegate(e2, s2);
    }
    return e2;
  }
  expect(t2) {
    const e2 = this.nextToken();
    e2.type === 7 && e2.value === t2 || this.throwUnexpectedToken(e2);
  }
  expectCommaSeparator() {
    if (this.config.tolerant) {
      const t2 = this.lookahead;
      t2.type === 7 && t2.value === "," ? this.nextToken() : t2.type === 7 && t2.value === ";" ? (this.nextToken(), this.tolerateUnexpectedToken(t2)) : this.tolerateUnexpectedToken(t2, e$3.UnexpectedToken);
    } else
      this.expect(",");
  }
  expectKeyword(t2) {
    const e2 = this.nextToken();
    e2.type === 4 && e2.value.toLowerCase() === t2.toLowerCase() || this.throwUnexpectedToken(e2);
  }
  match(t2) {
    return this.lookahead.type === 7 && this.lookahead.value === t2;
  }
  matchKeyword(t2) {
    return this.lookahead.type === 4 && this.lookahead.value.toLowerCase() === t2.toLowerCase();
  }
  matchContextualKeyword(t2) {
    return this.lookahead.type === 3 && this.lookahead.value === t2;
  }
  matchAssign() {
    if (this.lookahead.type !== 7)
      return false;
    const t2 = this.lookahead.value;
    return t2 === "=" || t2 === "*=" || t2 === "**=" || t2 === "/=" || t2 === "%=" || t2 === "+=" || t2 === "-=" || t2 === "<<=" || t2 === ">>=" || t2 === ">>>=" || t2 === "&=" || t2 === "^=" || t2 === "|=";
  }
  isolateCoverGrammar(t2) {
    const e2 = this.context.isBindingElement, s2 = this.context.isAssignmentTarget, i2 = this.context.firstCoverInitializedNameError;
    this.context.isBindingElement = true, this.context.isAssignmentTarget = true, this.context.firstCoverInitializedNameError = null;
    const n2 = t2.call(this);
    return this.context.firstCoverInitializedNameError !== null && this.throwUnexpectedToken(this.context.firstCoverInitializedNameError), this.context.isBindingElement = e2, this.context.isAssignmentTarget = s2, this.context.firstCoverInitializedNameError = i2, n2;
  }
  inheritCoverGrammar(t2) {
    const e2 = this.context.isBindingElement, s2 = this.context.isAssignmentTarget, i2 = this.context.firstCoverInitializedNameError;
    this.context.isBindingElement = true, this.context.isAssignmentTarget = true, this.context.firstCoverInitializedNameError = null;
    const n2 = t2.call(this);
    return this.context.isBindingElement = this.context.isBindingElement && e2, this.context.isAssignmentTarget = this.context.isAssignmentTarget && s2, this.context.firstCoverInitializedNameError = i2 || this.context.firstCoverInitializedNameError, n2;
  }
  consumeSemicolon() {
    this.match(";") ? this.nextToken() : this.hasLineTerminator || (this.lookahead.type === 2 || this.match("}") || this.throwUnexpectedToken(this.lookahead), this.lastMarker.index = this.startMarker.index, this.lastMarker.line = this.startMarker.line, this.lastMarker.column = this.startMarker.column);
  }
  parsePrimaryExpression() {
    const t2 = this.createNode();
    let e2, s2, a2;
    switch (this.lookahead.type) {
      case 3:
        e2 = this.finalize(t2, new E$2(this.nextToken().value));
        break;
      case 6:
      case 8:
        this.context.strict && this.lookahead.octal && this.tolerateUnexpectedToken(this.lookahead, e$3.StrictOctalLiteral), this.context.isAssignmentTarget = false, this.context.isBindingElement = false, s2 = this.nextToken(), a2 = this.getTokenRaw(s2), e2 = this.finalize(t2, new f$1(s2.value, a2));
        break;
      case 1:
        this.context.isAssignmentTarget = false, this.context.isBindingElement = false, s2 = this.nextToken(), a2 = this.getTokenRaw(s2), e2 = this.finalize(t2, new f$1(s2.value.toLowerCase() === "true", a2));
        break;
      case 5:
        this.context.isAssignmentTarget = false, this.context.isBindingElement = false, s2 = this.nextToken(), a2 = this.getTokenRaw(s2), e2 = this.finalize(t2, new f$1(null, a2));
        break;
      case 10:
        e2 = this.parseTemplateLiteral();
        break;
      case 7:
        switch (this.lookahead.value) {
          case "(":
            this.context.isBindingElement = false, e2 = this.inheritCoverGrammar(this.parseGroupExpression);
            break;
          case "[":
            e2 = this.inheritCoverGrammar(this.parseArrayInitializer);
            break;
          case "{":
            e2 = this.inheritCoverGrammar(this.parseObjectInitializer);
            break;
          default:
            e2 = this.throwUnexpectedToken(this.nextToken());
        }
        break;
      case 4:
        this.context.isAssignmentTarget = false, this.context.isBindingElement = false, e2 = this.matchKeyword("function") ? this.parseFunctionExpression() : this.throwUnexpectedToken(this.nextToken());
        break;
      default:
        e2 = this.throwUnexpectedToken(this.nextToken());
    }
    return e2;
  }
  parseArrayInitializer() {
    const t2 = this.createNode(), e2 = [];
    for (this.expect("["); !this.match("]"); )
      this.match(",") ? (this.nextToken(), e2.push(null)) : (e2.push(this.inheritCoverGrammar(this.parseAssignmentExpression)), this.match("]") || this.expect(","));
    return this.expect("]"), this.finalize(t2, new s$2(e2));
  }
  parsePropertyMethod(t2) {
    this.context.isAssignmentTarget = false, this.context.isBindingElement = false;
    const e2 = this.context.strict, s2 = this.context.allowStrictDirective;
    this.context.allowStrictDirective = t2.simple;
    const i2 = this.isolateCoverGrammar(this.parseFunctionSourceElements);
    return this.context.strict && t2.firstRestricted && this.tolerateUnexpectedToken(t2.firstRestricted, t2.message), this.context.strict && t2.stricted && this.tolerateUnexpectedToken(t2.stricted, t2.message), this.context.strict = e2, this.context.allowStrictDirective = s2, i2;
  }
  parsePropertyMethodFunction() {
    const t2 = false, e2 = this.createNode(), s2 = this.parseFormalParameters(), i2 = this.parsePropertyMethod(s2);
    return this.finalize(e2, new b$2(null, s2.params, i2, t2));
  }
  parseObjectPropertyKey() {
    const t2 = this.createNode(), e2 = this.nextToken();
    let s2;
    switch (e2.type) {
      case 8:
      case 6: {
        this.context.strict && e2.octal && this.tolerateUnexpectedToken(e2, e$3.StrictOctalLiteral);
        const r2 = this.getTokenRaw(e2);
        s2 = this.finalize(t2, new f$1(e2.value, r2));
        break;
      }
      case 3:
      case 1:
      case 5:
      case 4:
        s2 = this.finalize(t2, new E$2(e2.value));
        break;
      case 7:
        e2.value === "[" ? (s2 = this.isolateCoverGrammar(this.parseAssignmentExpression), this.expect("]")) : s2 = this.throwUnexpectedToken(e2);
        break;
      default:
        s2 = this.throwUnexpectedToken(e2);
    }
    return s2;
  }
  isPropertyKey(e2, s2) {
    return e2.type === e$5.Identifier && e2.name === s2 || e2.type === e$5.Literal && e2.value === s2;
  }
  parseObjectProperty(t2) {
    const e2 = this.createNode(), s2 = this.lookahead;
    let n2, a2 = null, o2 = null, l2 = false, p2 = false, m2 = false, d2 = false;
    if (s2.type === 3) {
      const t3 = s2.value;
      this.nextToken(), l2 = this.match("["), d2 = !(this.hasLineTerminator || t3 !== "async" || this.match(":") || this.match("(") || this.match("*") || this.match(",")), a2 = d2 ? this.parseObjectPropertyKey() : this.finalize(e2, new E$2(t3));
    } else
      this.match("*") ? this.nextToken() : (l2 = this.match("["), a2 = this.parseObjectPropertyKey());
    if (a2 || this.throwUnexpectedToken(this.lookahead), n2 = "init", this.match(":") && !d2)
      !l2 && this.isPropertyKey(a2, "__proto__") && (t2.value && this.tolerateError(e$3.DuplicateProtoProperty), t2.value = true), this.nextToken(), o2 = this.inheritCoverGrammar(this.parseAssignmentExpression);
    else if (this.match("("))
      o2 = this.parsePropertyMethodFunction(), p2 = true;
    else if (s2.type === 3) {
      const t3 = this.finalize(e2, new E$2(s2.value));
      if (this.match("=")) {
        this.context.firstCoverInitializedNameError = this.lookahead, this.nextToken(), m2 = true;
        const s3 = this.isolateCoverGrammar(this.parseAssignmentExpression);
        o2 = this.finalize(e2, new r$2(t3, s3));
      } else
        m2 = true, o2 = t3;
    } else
      this.throwUnexpectedToken(this.nextToken());
    return this.finalize(e2, new q$2(n2, a2, l2, o2, p2, m2));
  }
  parseObjectInitializer() {
    const t2 = this.createNode();
    this.expect("{");
    const e2 = [], s2 = { value: false };
    for (; !this.match("}"); )
      e2.push(this.parseObjectProperty(s2)), this.match("}") || this.expectCommaSeparator();
    return this.expect("}"), this.finalize(t2, new P$2(e2));
  }
  parseTemplateHead() {
    r$4(this.lookahead.head, "Template literal must start with a template head");
    const t2 = this.createNode(), s2 = this.nextToken(), i2 = s2.value, n2 = s2.cooked;
    return this.finalize(t2, new T$1({ raw: i2, cooked: n2 }, s2.tail));
  }
  parseTemplateElement() {
    this.lookahead.type !== 10 && this.throwUnexpectedToken();
    const t2 = this.createNode(), e2 = this.nextToken(), s2 = e2.value, i2 = e2.cooked;
    return this.finalize(t2, new T$1({ raw: s2, cooked: i2 }, e2.tail));
  }
  parseTemplateLiteral() {
    const t2 = this.createNode(), e2 = [], s2 = [];
    let i2 = this.parseTemplateHead();
    for (s2.push(i2); !i2.tail; )
      e2.push(this.parseExpression()), i2 = this.parseTemplateElement(), s2.push(i2);
    return this.finalize(t2, new B$1(s2, e2));
  }
  reinterpretExpressionAsPattern(e2) {
    switch (e2.type) {
      case e$5.Identifier:
      case e$5.MemberExpression:
      case e$5.AssignmentPattern:
        break;
      case e$5.ArrayExpression:
        e2.type = e$5.ArrayPattern;
        for (let t2 = 0; t2 < e2.elements.length; t2++)
          e2.elements[t2] !== null && this.reinterpretExpressionAsPattern(e2.elements[t2]);
        break;
      case e$5.ObjectExpression:
        e2.type = e$5.ObjectPattern;
        for (let t2 = 0; t2 < e2.properties.length; t2++) {
          const s2 = e2.properties[t2];
          this.reinterpretExpressionAsPattern(s2.value);
        }
        break;
      case e$5.AssignmentExpression:
        e2.type = e$5.AssignmentPattern, delete e2.operator, this.reinterpretExpressionAsPattern(e2.left);
    }
  }
  parseGroupExpression() {
    let e2;
    if (this.expect("("), this.match(")"))
      this.nextToken(), this.match("=>") || this.expect("=>"), e2 = { type: O$1, params: [], async: false };
    else {
      const s2 = this.lookahead;
      let i2 = false;
      if (this.context.isBindingElement = true, e2 = this.inheritCoverGrammar(this.parseAssignmentExpression), this.match(",")) {
        const t2 = [];
        for (this.context.isAssignmentTarget = false, t2.push(e2); this.lookahead.type !== 2 && this.match(","); ) {
          if (this.nextToken(), this.match(")")) {
            this.nextToken();
            for (let e3 = 0; e3 < t2.length; e3++)
              this.reinterpretExpressionAsPattern(t2[e3]);
            i2 = true, e2 = { type: O$1, params: t2, async: false };
          } else
            t2.push(this.inheritCoverGrammar(this.parseAssignmentExpression));
          if (i2)
            break;
        }
        i2 || (e2 = this.finalize(this.startNode(s2), new D$3(t2)));
      }
      if (!i2) {
        if (this.expect(")"), this.match("=>") && (e2.type === e$5.Identifier && e2.name === "yield" && (i2 = true, e2 = { type: O$1, params: [e2], async: false }), !i2)) {
          if (this.context.isBindingElement || this.throwUnexpectedToken(this.lookahead), e2.type === e$5.SequenceExpression)
            for (let t2 = 0; t2 < e2.expressions.length; t2++)
              this.reinterpretExpressionAsPattern(e2.expressions[t2]);
          else
            this.reinterpretExpressionAsPattern(e2);
          const s3 = e2.type === e$5.SequenceExpression ? e2.expressions : [e2];
          e2 = { type: O$1, params: s3, async: false };
        }
        this.context.isBindingElement = false;
      }
    }
    return e2;
  }
  parseArguments() {
    this.expect("(");
    const t2 = [];
    if (!this.match(")"))
      for (; ; ) {
        const e2 = this.isolateCoverGrammar(this.parseAssignmentExpression);
        if (t2.push(e2), this.match(")"))
          break;
        if (this.expectCommaSeparator(), this.match(")"))
          break;
      }
    return this.expect(")"), t2;
  }
  isIdentifierName(t2) {
    return t2.type === 3 || t2.type === 4 || t2.type === 1 || t2.type === 5;
  }
  parseIdentifierName() {
    const t2 = this.createNode(), e2 = this.nextToken();
    return this.isIdentifierName(e2) || this.throwUnexpectedToken(e2), this.finalize(t2, new E$2(e2.value));
  }
  parseLeftHandSideExpressionAllowCall() {
    const t2 = this.lookahead, e2 = this.context.allowIn;
    let s2;
    for (this.context.allowIn = true, s2 = this.inheritCoverGrammar(this.parsePrimaryExpression); ; )
      if (this.match(".")) {
        this.context.isBindingElement = false, this.context.isAssignmentTarget = true, this.expect(".");
        const e3 = this.parseIdentifierName();
        s2 = this.finalize(this.startNode(t2), new F$2(s2, e3));
      } else if (this.match("(")) {
        this.context.isBindingElement = false, this.context.isAssignmentTarget = false;
        const e3 = this.parseArguments();
        s2 = this.finalize(this.startNode(t2), new n$1(s2, e3));
      } else {
        if (!this.match("["))
          break;
        {
          this.context.isBindingElement = false, this.context.isAssignmentTarget = true, this.expect("[");
          const e3 = this.isolateCoverGrammar(this.parseExpression);
          this.expect("]"), s2 = this.finalize(this.startNode(t2), new a$1(s2, e3));
        }
      }
    return this.context.allowIn = e2, s2;
  }
  parseLeftHandSideExpression() {
    r$4(this.context.allowIn, "callee of new expression always allow in keyword.");
    const t2 = this.startNode(this.lookahead);
    let s2 = this.inheritCoverGrammar(this.parsePrimaryExpression);
    for (; ; )
      if (this.match("[")) {
        this.context.isBindingElement = false, this.context.isAssignmentTarget = true, this.expect("[");
        const e2 = this.isolateCoverGrammar(this.parseExpression);
        this.expect("]"), s2 = this.finalize(t2, new a$1(s2, e2));
      } else {
        if (!this.match("."))
          break;
        {
          this.context.isBindingElement = false, this.context.isAssignmentTarget = true, this.expect(".");
          const e2 = this.parseIdentifierName();
          s2 = this.finalize(t2, new F$2(s2, e2));
        }
      }
    return s2;
  }
  parseUpdateExpression() {
    let e2;
    const s2 = this.lookahead;
    if (this.match("++") || this.match("--")) {
      const n2 = this.startNode(s2), r2 = this.nextToken();
      e2 = this.inheritCoverGrammar(this.parseUnaryExpression), this.context.strict && e2.type === e$5.Identifier && this.scanner.isRestrictedWord(e2.name) && this.tolerateError(e$3.StrictLHSPrefix), this.context.isAssignmentTarget || this.tolerateError(e$3.InvalidLHSInAssignment);
      const a2 = true;
      e2 = this.finalize(n2, new I$2(r2.value, e2, a2)), this.context.isAssignmentTarget = false, this.context.isBindingElement = false;
    } else if (e2 = this.inheritCoverGrammar(this.parseLeftHandSideExpressionAllowCall), !this.hasLineTerminator && this.lookahead.type === 7 && (this.match("++") || this.match("--"))) {
      this.context.strict && e2.type === e$5.Identifier && this.scanner.isRestrictedWord(e2.name) && this.tolerateError(e$3.StrictLHSPostfix), this.context.isAssignmentTarget || this.tolerateError(e$3.InvalidLHSInAssignment), this.context.isAssignmentTarget = false, this.context.isBindingElement = false;
      const n2 = this.nextToken().value, r2 = false;
      e2 = this.finalize(this.startNode(s2), new I$2(n2, e2, r2));
    }
    return e2;
  }
  parseUnaryExpression() {
    let e2;
    if (this.match("+") || this.match("-") || this.match("~") || this.match("!") || this.matchKeyword("delete") || this.matchKeyword("void") || this.matchKeyword("typeof")) {
      const s2 = this.startNode(this.lookahead), n2 = this.nextToken();
      e2 = this.inheritCoverGrammar(this.parseUnaryExpression), e2 = this.finalize(s2, new C$2(n2.value, e2)), this.context.strict && e2.operator === "delete" && e2.argument.type === e$5.Identifier && this.tolerateError(e$3.StrictDelete), this.context.isAssignmentTarget = false, this.context.isBindingElement = false;
    } else
      e2 = this.parseUpdateExpression();
    return e2;
  }
  parseExponentiationExpression() {
    const e2 = this.lookahead;
    let s2 = this.inheritCoverGrammar(this.parseUnaryExpression);
    if (s2.type !== e$5.UnaryExpression && this.match("**")) {
      this.nextToken(), this.context.isAssignmentTarget = false, this.context.isBindingElement = false;
      const t2 = s2, i2 = this.isolateCoverGrammar(this.parseExponentiationExpression);
      s2 = this.finalize(this.startNode(e2), new o("**", t2, i2));
    }
    return s2;
  }
  binaryPrecedence(t2) {
    const e2 = t2.value;
    let s2;
    return s2 = t2.type === 7 ? this.operatorPrecedence[e2] || 0 : t2.type === 4 && (e2 === "instanceof" || this.context.allowIn && e2 === "in") ? 7 : 0, s2;
  }
  parseBinaryExpression() {
    const t2 = this.lookahead;
    let e2 = this.inheritCoverGrammar(this.parseExponentiationExpression);
    const s2 = this.lookahead;
    let i2 = this.binaryPrecedence(s2);
    if (i2 > 0) {
      this.nextToken(), this.context.isAssignmentTarget = false, this.context.isBindingElement = false;
      const n2 = [t2, this.lookahead];
      let r2 = e2, a2 = this.isolateCoverGrammar(this.parseExponentiationExpression);
      const o$12 = [r2, s2.value, a2], h2 = [i2];
      for (; i2 = this.binaryPrecedence(this.lookahead), !(i2 <= 0); ) {
        for (; o$12.length > 2 && i2 <= h2[h2.length - 1]; ) {
          a2 = o$12.pop();
          const t3 = o$12.pop();
          h2.pop(), r2 = o$12.pop(), n2.pop();
          const e3 = n2[n2.length - 1], s3 = this.startNode(e3, e3.lineStart);
          o$12.push(this.finalize(s3, new o(t3, r2, a2)));
        }
        o$12.push(this.nextToken().value), h2.push(i2), n2.push(this.lookahead), o$12.push(this.isolateCoverGrammar(this.parseExponentiationExpression));
      }
      let c2 = o$12.length - 1;
      e2 = o$12[c2];
      let l2 = n2.pop();
      for (; c2 > 1; ) {
        const t3 = n2.pop(), s3 = l2 && l2.lineStart, i3 = this.startNode(t3, s3), r3 = o$12[c2 - 1];
        e2 = this.finalize(i3, new o(r3, o$12[c2 - 2], e2)), c2 -= 2, l2 = t3;
      }
    }
    return e2;
  }
  parseConditionalExpression() {
    const t2 = this.lookahead;
    let e2 = this.inheritCoverGrammar(this.parseBinaryExpression);
    if (this.match("?")) {
      this.nextToken();
      const s2 = this.context.allowIn;
      this.context.allowIn = true;
      const i2 = this.isolateCoverGrammar(this.parseAssignmentExpression);
      this.context.allowIn = s2, this.expect(":");
      const n2 = this.isolateCoverGrammar(this.parseAssignmentExpression);
      e2 = this.finalize(this.startNode(t2), new p(e2, i2, n2)), this.context.isAssignmentTarget = false, this.context.isBindingElement = false;
    }
    return e2;
  }
  checkPatternParam(e2, s2) {
    switch (s2.type) {
      case e$5.Identifier:
        this.validateParam(e2, s2, s2.name);
        break;
      case e$5.AssignmentPattern:
        this.checkPatternParam(e2, s2.left);
        break;
      case e$5.ArrayPattern:
        for (let t2 = 0; t2 < s2.elements.length; t2++)
          s2.elements[t2] !== null && this.checkPatternParam(e2, s2.elements[t2]);
        break;
      case e$5.ObjectPattern:
        for (let t2 = 0; t2 < s2.properties.length; t2++) {
          const i2 = s2.properties[t2];
          this.checkPatternParam(e2, i2.value);
        }
    }
    e2.simple = e2.simple && s2 instanceof E$2;
  }
  reinterpretAsCoverFormalsList(e2) {
    const s2 = [e2], n2 = { simple: true, paramSet: {} };
    switch (e2.type) {
      case e$5.Identifier:
        break;
      default:
        return null;
    }
    for (let t2 = 0; t2 < s2.length; ++t2) {
      const e3 = s2[t2];
      this.checkPatternParam(n2, e3), s2[t2] = e3;
    }
    if (n2.message === e$3.StrictParamDupe) {
      const t2 = this.context.strict ? n2.stricted : n2.firstRestricted;
      this.throwUnexpectedToken(t2, n2.message);
    }
    return { simple: n2.simple, params: s2, stricted: n2.stricted, firstRestricted: n2.firstRestricted, message: n2.message };
  }
  parseAssignmentExpression() {
    let e2;
    const s2 = this.lookahead;
    let n2 = s2;
    if (e2 = this.parseConditionalExpression(), this.matchAssign()) {
      if (this.context.isAssignmentTarget || this.tolerateError(e$3.InvalidLHSInAssignment), this.context.strict && e2.type === e$5.Identifier) {
        const t2 = e2;
        this.scanner.isRestrictedWord(t2.name) && this.tolerateUnexpectedToken(n2, e$3.StrictLHSAssignment), this.scanner.isStrictModeReservedWord(t2.name) && this.tolerateUnexpectedToken(n2, e$3.StrictReservedWord);
      }
      this.match("=") ? this.reinterpretExpressionAsPattern(e2) : (this.context.isAssignmentTarget = false, this.context.isBindingElement = false), n2 = this.nextToken();
      const r2 = n2.value, a2 = this.isolateCoverGrammar(this.parseAssignmentExpression);
      e2 = this.finalize(this.startNode(s2), new e$2(r2, e2, a2)), this.context.firstCoverInitializedNameError = null;
    }
    return e2;
  }
  parseExpression() {
    const t2 = this.lookahead;
    let e2 = this.isolateCoverGrammar(this.parseAssignmentExpression);
    if (this.match(",")) {
      const s2 = [];
      for (s2.push(e2); this.lookahead.type !== 2 && this.match(","); )
        this.nextToken(), s2.push(this.isolateCoverGrammar(this.parseAssignmentExpression));
      e2 = this.finalize(this.startNode(t2), new D$3(s2));
    }
    return e2;
  }
  parseStatementListItem() {
    let t2;
    if (this.context.isAssignmentTarget = true, this.context.isBindingElement = true, this.lookahead.type === 4)
      switch (this.lookahead.value) {
        case "function":
          t2 = this.parseFunctionDeclaration();
          break;
        default:
          t2 = this.parseStatement();
      }
    else
      t2 = this.parseStatement();
    return t2;
  }
  parseBlock() {
    const t2 = this.createNode();
    this.expect("{");
    const e2 = [];
    for (; !this.match("}"); )
      e2.push(this.parseStatementListItem());
    return this.expect("}"), this.finalize(t2, new c(e2));
  }
  parseBlockOrObjectInitialiser() {
    const t2 = this.createNode();
    if (this.expect("{"), this.lookahead.type === 3 || this.lookahead.type === 8) {
      const e3 = this.scanner.saveState();
      this.scanner.scanComments();
      const s2 = this.scanner.lex();
      if (this.scanner.restoreState(e3), s2.type === 7 && s2.value === ":") {
        const e4 = [], s3 = { value: false };
        for (; !this.match("}"); )
          e4.push(this.parseObjectProperty(s3)), this.match("}") || this.expectCommaSeparator();
        return this.expect("}"), this.finalize(t2, new P$2(e4));
      }
    }
    const e2 = [];
    for (; !this.match("}"); )
      e2.push(this.parseStatementListItem());
    return this.expect("}"), this.finalize(t2, new c(e2));
  }
  parseLexicalBinding(e2, s2) {
    const n2 = this.createNode(), r2 = [], a2 = this.parsePattern(r2, e2);
    this.context.strict && a2.type === e$5.Identifier && this.scanner.isRestrictedWord(a2.name) && this.tolerateError(e$3.StrictVarName);
    let o2 = null;
    return (!s2.inFor && a2.type !== e$5.Identifier || this.match("=")) && (this.expect("="), o2 = this.isolateCoverGrammar(this.parseAssignmentExpression)), this.finalize(n2, new M$2(a2, o2));
  }
  parseBindingList(t2, e2) {
    const s2 = [this.parseLexicalBinding(t2, e2)];
    for (; this.match(","); )
      this.nextToken(), s2.push(this.parseLexicalBinding(t2, e2));
    return s2;
  }
  parseArrayPattern(t2, e2) {
    const s2 = this.createNode();
    this.expect("[");
    const i$12 = [];
    for (; !this.match("]"); )
      this.match(",") ? (this.nextToken(), i$12.push(null)) : (i$12.push(this.parsePatternWithDefault(t2, e2)), this.match("]") || this.expect(","));
    return this.expect("]"), this.finalize(s2, new i(i$12));
  }
  parsePropertyPattern(t2, e2) {
    const s2 = this.createNode();
    let i2 = false, n2 = false;
    const a2 = false;
    let o2, l2;
    if (this.lookahead.type === 3) {
      const i3 = this.lookahead;
      o2 = this.parseVariableIdentifier();
      const a3 = this.finalize(s2, new E$2(i3.value));
      if (this.match("=")) {
        t2.push(i3), n2 = true, this.nextToken();
        const e3 = this.parseAssignmentExpression();
        l2 = this.finalize(this.startNode(i3), new r$2(a3, e3));
      } else
        this.match(":") ? (this.expect(":"), l2 = this.parsePatternWithDefault(t2, e2)) : (t2.push(i3), n2 = true, l2 = a3);
    } else
      i2 = this.match("["), o2 = this.parseObjectPropertyKey(), this.expect(":"), l2 = this.parsePatternWithDefault(t2, e2);
    return this.finalize(s2, new q$2("init", o2, i2, l2, a2, n2));
  }
  parseObjectPattern(t2, e2) {
    const s2 = this.createNode(), i2 = [];
    for (this.expect("{"); !this.match("}"); )
      i2.push(this.parsePropertyPattern(t2, e2)), this.match("}") || this.expect(",");
    return this.expect("}"), this.finalize(s2, new j$3(i2));
  }
  parsePattern(t2, e2) {
    let s2;
    return this.match("[") ? s2 = this.parseArrayPattern(t2, e2) : this.match("{") ? s2 = this.parseObjectPattern(t2, e2) : (!this.matchKeyword("let") || e2 !== "const" && e2 !== "let" || this.tolerateUnexpectedToken(this.lookahead, e$3.LetInLexicalBinding), t2.push(this.lookahead), s2 = this.parseVariableIdentifier(e2)), s2;
  }
  parsePatternWithDefault(t2, e2) {
    const s2 = this.lookahead;
    let i2 = this.parsePattern(t2, e2);
    if (this.match("=")) {
      this.nextToken();
      const t3 = this.isolateCoverGrammar(this.parseAssignmentExpression);
      i2 = this.finalize(this.startNode(s2), new r$2(i2, t3));
    }
    return i2;
  }
  parseVariableIdentifier(t2) {
    const e2 = this.createNode(), s2 = this.nextToken();
    return s2.type !== 3 && (this.context.strict && s2.type === 4 && this.scanner.isStrictModeReservedWord(s2.value) ? this.tolerateUnexpectedToken(s2, e$3.StrictReservedWord) : (this.context.strict || s2.value !== "let" || t2 !== "var") && this.throwUnexpectedToken(s2)), this.finalize(e2, new E$2(s2.value));
  }
  parseVariableDeclaration(e2) {
    const s2 = this.createNode(), n2 = [], r2 = this.parsePattern(n2, "var");
    this.context.strict && r2.type === e$5.Identifier && this.scanner.isRestrictedWord(r2.name) && this.tolerateError(e$3.StrictVarName);
    let a2 = null;
    return this.match("=") ? (this.nextToken(), a2 = this.isolateCoverGrammar(this.parseAssignmentExpression)) : r2.type === e$5.Identifier || e2.inFor || this.expect("="), this.finalize(s2, new M$2(r2, a2));
  }
  parseVariableDeclarationList(t2) {
    const e2 = { inFor: t2.inFor }, s2 = [];
    for (s2.push(this.parseVariableDeclaration(e2)); this.match(","); )
      this.nextToken(), s2.push(this.parseVariableDeclaration(e2));
    return s2;
  }
  parseVariableStatement() {
    const t2 = this.createNode();
    this.expectKeyword("var");
    const e2 = this.parseVariableDeclarationList({ inFor: false });
    return this.consumeSemicolon(), this.finalize(t2, new L$2(e2, "var"));
  }
  parseEmptyStatement() {
    const t2 = this.createNode();
    return this.expect(";"), this.finalize(t2, new u$2());
  }
  parseExpressionStatement() {
    const t2 = this.createNode(), e2 = this.parseExpression();
    return this.consumeSemicolon(), this.finalize(t2, new y$1(e2));
  }
  parseIfClause() {
    return this.context.strict && this.matchKeyword("function") && this.tolerateError(e$3.StrictFunction), this.parseStatement(true);
  }
  parseIfStatement() {
    const t2 = this.createNode();
    let e2, s2 = null;
    this.expectKeyword("if"), this.expect("(");
    const i2 = this.parseExpression();
    return !this.match(")") && this.config.tolerant ? (this.tolerateUnexpectedToken(this.nextToken()), e2 = this.finalize(this.createNode(), new u$2())) : (this.expect(")"), e2 = this.parseIfClause(), this.matchKeyword("else") && (this.nextToken(), s2 = this.parseIfClause())), this.finalize(t2, new g$1(i2, e2, s2));
  }
  parseForStatement() {
    let e2, s2, n2 = null, r2 = null, a2 = null;
    const o2 = this.createNode();
    if (this.expectKeyword("for"), this.expect("("), this.match(";"))
      this.nextToken();
    else if (this.matchKeyword("var")) {
      n2 = this.createNode(), this.nextToken();
      const r3 = this.context.allowIn;
      this.context.allowIn = false;
      const a3 = this.parseVariableDeclarationList({ inFor: true });
      if (this.context.allowIn = r3, a3.length === 1 && this.matchKeyword("in")) {
        const r4 = a3[0];
        r4.init && (r4.id.type === e$5.ArrayPattern || r4.id.type === e$5.ObjectPattern || this.context.strict) && this.tolerateError(e$3.ForInOfLoopInitializer, "for-in"), n2 = this.finalize(n2, new L$2(a3, "var")), this.nextToken(), e2 = n2, s2 = this.parseExpression(), n2 = null;
      } else
        a3.length === 1 && a3[0].init === null && this.matchContextualKeyword("of") ? (n2 = this.finalize(n2, new L$2(a3, "var")), this.nextToken(), e2 = n2, s2 = this.parseAssignmentExpression(), n2 = null) : (n2 = this.finalize(n2, new L$2(a3, "var")), this.expect(";"));
    } else {
      const r3 = this.lookahead, a3 = this.context.isBindingElement, o3 = this.context.isAssignmentTarget, h3 = this.context.firstCoverInitializedNameError, c2 = this.context.allowIn;
      if (this.context.allowIn = false, n2 = this.inheritCoverGrammar(this.parseAssignmentExpression), this.context.allowIn = c2, this.matchKeyword("in"))
        this.context.isAssignmentTarget && n2.type !== e$5.AssignmentExpression || this.tolerateError(e$3.InvalidLHSInForIn), this.nextToken(), this.reinterpretExpressionAsPattern(n2), e2 = n2, s2 = this.parseExpression(), n2 = null;
      else {
        if (this.context.isBindingElement = a3, this.context.isAssignmentTarget = o3, this.context.firstCoverInitializedNameError = h3, this.match(",")) {
          const t2 = [n2];
          for (; this.match(","); )
            this.nextToken(), t2.push(this.isolateCoverGrammar(this.parseAssignmentExpression));
          n2 = this.finalize(this.startNode(r3), new D$3(t2));
        }
        this.expect(";");
      }
    }
    let h2;
    if (e2 === void 0 && (this.match(";") || (r2 = this.isolateCoverGrammar(this.parseExpression)), this.expect(";"), this.match(")") || (a2 = this.isolateCoverGrammar(this.parseExpression))), !this.match(")") && this.config.tolerant)
      this.tolerateUnexpectedToken(this.nextToken()), h2 = this.finalize(this.createNode(), new u$2());
    else {
      this.expect(")");
      const t2 = this.context.inIteration;
      this.context.inIteration = true, h2 = this.isolateCoverGrammar(this.parseStatementBlockAllowed), this.context.inIteration = t2;
    }
    return e2 === void 0 ? this.finalize(o2, new d$1(n2, r2, a2, h2)) : this.finalize(o2, new m$1(e2, s2, h2));
  }
  parseContinueStatement() {
    const t2 = this.createNode();
    this.expectKeyword("continue");
    let e2 = null;
    if (this.lookahead.type === 3 && !this.hasLineTerminator) {
      const t3 = this.parseVariableIdentifier();
      e2 = t3;
      const s2 = "$" + t3.name;
      Object.prototype.hasOwnProperty.call(this.context.labelSet, s2) || this.throwError(e$3.UnknownLabel, t3.name);
    }
    return this.consumeSemicolon(), e2 !== null || this.context.inIteration || this.throwError(e$3.IllegalContinue), this.finalize(t2, new l(e2));
  }
  parseBreakStatement() {
    const t2 = this.createNode();
    this.expectKeyword("break");
    let e2 = null;
    if (this.lookahead.type === 3 && !this.hasLineTerminator) {
      const t3 = this.parseVariableIdentifier(), s2 = "$" + t3.name;
      Object.prototype.hasOwnProperty.call(this.context.labelSet, s2) || this.throwError(e$3.UnknownLabel, t3.name), e2 = t3;
    }
    return this.consumeSemicolon(), e2 !== null || this.context.inIteration || this.context.inSwitch || this.throwError(e$3.IllegalBreak), this.finalize(t2, new h$1(e2));
  }
  parseReturnStatement() {
    this.context.inFunctionBody || this.tolerateError(e$3.IllegalReturn);
    const t2 = this.createNode();
    this.expectKeyword("return");
    const e2 = !this.match(";") && !this.match("}") && !this.hasLineTerminator && this.lookahead.type !== 2 || this.lookahead.type === 8 || this.lookahead.type === 10 ? this.parseExpression() : null;
    return this.consumeSemicolon(), this.finalize(t2, new v$2(e2));
  }
  parseLabelledStatement() {
    const t2 = this.createNode(), e2 = this.parseExpression();
    let s2;
    return this.consumeSemicolon(), s2 = new y$1(e2), this.finalize(t2, s2);
  }
  parseStatementBlockAllowed() {
    return this.parseStatement(true);
  }
  parseStatement(t2 = false) {
    let e2;
    switch (this.lookahead.type) {
      case 1:
      case 5:
      case 6:
      case 8:
      case 10:
      case 9:
        e2 = this.parseExpressionStatement();
        break;
      case 7: {
        const s2 = this.lookahead.value;
        e2 = s2 === "{" ? t2 ? this.parseBlockOrObjectInitialiser() : this.parseObjectInitializer() : s2 === "(" ? this.parseExpressionStatement() : s2 === ";" ? this.parseEmptyStatement() : this.parseExpressionStatement();
        break;
      }
      case 3:
        e2 = this.parseLabelledStatement();
        break;
      case 4:
        switch (this.lookahead.value.toLowerCase()) {
          case "break":
            e2 = this.parseBreakStatement();
            break;
          case "continue":
            e2 = this.parseContinueStatement();
            break;
          case "for":
            e2 = this.parseForStatement();
            break;
          case "function":
            e2 = this.parseFunctionDeclaration();
            break;
          case "if":
            e2 = this.parseIfStatement();
            break;
          case "return":
            e2 = this.parseReturnStatement();
            break;
          case "var":
            e2 = this.parseVariableStatement();
            break;
          default:
            e2 = this.parseExpressionStatement();
        }
        break;
      default:
        e2 = this.throwUnexpectedToken(this.lookahead);
    }
    return e2;
  }
  parseFunctionSourceElements() {
    const t2 = this.createNode();
    this.expect("{");
    const e2 = [], s2 = this.context.labelSet, i2 = this.context.inIteration, n2 = this.context.inSwitch, r2 = this.context.inFunctionBody;
    for (this.context.labelSet = {}, this.context.inIteration = false, this.context.inSwitch = false, this.context.inFunctionBody = true; this.lookahead.type !== 2 && !this.match("}"); )
      e2.push(this.parseStatementListItem());
    return this.expect("}"), this.context.labelSet = s2, this.context.inIteration = i2, this.context.inSwitch = n2, this.context.inFunctionBody = r2, this.finalize(t2, new c(e2));
  }
  validateParam(t2, e2, s2) {
    const n2 = "$" + s2;
    this.context.strict ? (this.scanner.isRestrictedWord(s2) && (t2.stricted = e2, t2.message = e$3.StrictParamName), Object.prototype.hasOwnProperty.call(t2.paramSet, n2) && (t2.stricted = e2, t2.message = e$3.StrictParamDupe)) : t2.firstRestricted || (this.scanner.isRestrictedWord(s2) ? (t2.firstRestricted = e2, t2.message = e$3.StrictParamName) : this.scanner.isStrictModeReservedWord(s2) ? (t2.firstRestricted = e2, t2.message = e$3.StrictReservedWord) : Object.prototype.hasOwnProperty.call(t2.paramSet, n2) && (t2.stricted = e2, t2.message = e$3.StrictParamDupe)), typeof Object.defineProperty == "function" ? Object.defineProperty(t2.paramSet, n2, { value: true, enumerable: true, writable: true, configurable: true }) : t2.paramSet[n2] = true;
  }
  parseFormalParameter(t2) {
    const e2 = [], s2 = this.parsePatternWithDefault(e2);
    for (let i2 = 0; i2 < e2.length; i2++)
      this.validateParam(t2, e2[i2], e2[i2].value);
    t2.simple = t2.simple && s2 instanceof E$2, t2.params.push(s2);
  }
  parseFormalParameters(t2) {
    const e2 = { simple: true, params: [], firstRestricted: t2 };
    if (this.expect("("), !this.match(")"))
      for (e2.paramSet = {}; this.lookahead.type !== 2 && (this.parseFormalParameter(e2), !this.match(")")) && (this.expect(","), !this.match(")")); )
        ;
    return this.expect(")"), { simple: e2.simple, params: e2.params, stricted: e2.stricted, firstRestricted: e2.firstRestricted, message: e2.message };
  }
  parseFunctionDeclaration(t2) {
    const e2 = this.createNode();
    let s2;
    this.expectKeyword("function");
    let n2 = null, r2 = null;
    if (!t2 || !this.match("(")) {
      const t3 = this.lookahead;
      n2 = this.parseVariableIdentifier(), this.context.strict ? this.scanner.isRestrictedWord(t3.value) && this.tolerateUnexpectedToken(t3, e$3.StrictFunctionName) : this.scanner.isRestrictedWord(t3.value) ? (r2 = t3, s2 = e$3.StrictFunctionName) : this.scanner.isStrictModeReservedWord(t3.value) && (r2 = t3, s2 = e$3.StrictReservedWord);
    }
    const a2 = this.parseFormalParameters(r2), o2 = a2.params, h2 = a2.stricted;
    r2 = a2.firstRestricted, a2.message && (s2 = a2.message);
    const c2 = this.context.strict, l2 = this.context.allowStrictDirective;
    this.context.allowStrictDirective = a2.simple;
    const p2 = this.parseFunctionSourceElements();
    return this.context.strict && r2 && this.throwUnexpectedToken(r2, s2), this.context.strict && h2 && this.tolerateUnexpectedToken(h2, s2), this.context.strict = c2, this.context.allowStrictDirective = l2, this.finalize(e2, new x$2(n2, o2, p2, false));
  }
  parseFunctionExpression() {
    const t2 = this.createNode();
    let e2;
    this.expectKeyword("function");
    let s2, n2 = null;
    if (!this.match("(")) {
      const t3 = this.lookahead;
      n2 = this.parseVariableIdentifier(), this.context.strict ? this.scanner.isRestrictedWord(t3.value) && this.tolerateUnexpectedToken(t3, e$3.StrictFunctionName) : this.scanner.isRestrictedWord(t3.value) ? (s2 = t3, e2 = e$3.StrictFunctionName) : this.scanner.isStrictModeReservedWord(t3.value) && (s2 = t3, e2 = e$3.StrictReservedWord);
    }
    const r2 = this.parseFormalParameters(s2), a2 = r2.params, h2 = r2.stricted;
    s2 = r2.firstRestricted, r2.message && (e2 = r2.message);
    const c2 = this.context.strict, l2 = this.context.allowStrictDirective;
    this.context.allowStrictDirective = r2.simple;
    const p2 = this.parseFunctionSourceElements();
    return this.context.strict && s2 && this.throwUnexpectedToken(s2, e2), this.context.strict && h2 && this.tolerateUnexpectedToken(h2, e2), this.context.strict = c2, this.context.allowStrictDirective = l2, this.finalize(t2, new b$2(n2, a2, p2, false));
  }
  qualifiedPropertyName(t2) {
    switch (t2.type) {
      case 3:
      case 8:
      case 1:
      case 5:
      case 6:
      case 4:
        return true;
      case 7:
        return t2.value === "[";
    }
    return false;
  }
  isStartOfExpression() {
    let t2 = true;
    const e2 = this.lookahead.value;
    switch (this.lookahead.type) {
      case 7:
        t2 = e2 === "[" || e2 === "(" || e2 === "{" || e2 === "+" || e2 === "-" || e2 === "!" || e2 === "~" || e2 === "++" || e2 === "--" || e2 === "/" || e2 === "/=";
        break;
      case 4:
        t2 = e2 === "class" || e2 === "delete" || e2 === "function" || e2 === "let" || e2 === "new" || e2 === "super" || e2 === "this" || e2 === "typeof" || e2 === "void" || e2 === "yield";
    }
    return t2;
  }
  parseScript() {
    const t2 = this.createNode(), e2 = [];
    for (; this.lookahead.type !== 2; )
      e2.push(this.parseStatementListItem());
    return this.finalize(t2, new A$2(e2));
  }
}
function r(o2, r2, n2) {
  let c2 = null;
  const s2 = (t2, e2) => {
    n2 && n2(t2, e2), c2 && c2.visit(t2, e2);
  };
  let m2 = typeof n2 == "function" ? s2 : null, a2 = false;
  if (r2) {
    a2 = typeof r2.comment == "boolean" && r2.comment;
    const e2 = typeof r2.attachComment == "boolean" && r2.attachComment;
    (a2 || e2) && (c2 = new e$4(), c2.attach = e2, r2.comment = true, m2 = s2);
  }
  const f2 = new j$2(o2, r2, m2), i2 = f2.parseScript();
  return a2 && c2 && (i2.comments = c2.comments), f2.config.tokens && (i2.tokens = f2.tokens), f2.config.tolerant && (i2.errors = f2.errorHandler.errors), i2;
}
function s(r$12, o2 = []) {
  const t2 = r("function _() { " + r$12 + "\n}");
  if (t2.body === null || t2.body === void 0)
    throw new Error("No formula provided.");
  if (t2.body.length === 0)
    throw new Error("No formula provided.");
  if (t2.body.length === 0)
    throw new Error("No formula provided.");
  if (t2.body[0].body.type !== "BlockStatement")
    throw new Error("Invalid formula content.");
  const i2 = x$5(t2);
  if (i2 !== "")
    throw new Error(i2);
  return g$4(t2, o2), t2;
}
function u(n2, e2, o2, t2, i2) {
  const c2 = [], s2 = "function _() { \n".length - 1, u2 = "function _() { \n" + n2 + "\n}";
  try {
    const n3 = r(u2, { tolerant: true, loc: true, range: true }), a2 = n3.errors;
    if (a2.length > 0)
      for (let e3 = 0; e3 < a2.length; e3++)
        c2.push({ line: a2[e3].lineNumber - 2, character: a2[e3].column, reason: a2[e3].description });
    const f2 = O$3(n3, e2, o2, t2, i2);
    for (let e3 = 0; e3 < f2.length; e3++)
      f2[e3].line = f2[e3].line - 2, f2[e3].range && (f2[e3].range = [f2[e3][0] - s2, f2[e3][1] - s2]), f2[e3].loc && (f2[e3].loc.start.line = f2[e3].loc.start.line - 2, f2[e3].loc.end.line = f2[e3].loc.end.line - 2), c2.push(f2[e3]);
  } catch (a2) {
    try {
      if (a2.description === "Unexpected token }") {
        const n3 = u2.split("\n").length;
        a2.lineNumber === n3 ? (a2.index = u2.length - 1, c2.push({ line: a2.lineNumber - 4, character: a2.column, reason: "Unexpected end of script" })) : (a2.index = u2.length - 1, c2.push({ line: a2.lineNumber - 2, character: a2.column, reason: "Unexpected end of script" }));
      } else
        c2.push({ line: a2.lineNumber - 2, character: a2.column, reason: a2.description });
    } catch (f2) {
    }
  }
  return c2;
}
function a(n2, e2) {
  return u$5(n2);
}
function f(n2, e2, r2) {
  return N$4(n2, e2, r2);
}
const m = new Map([["ar", () => import("./ar.db16b7b3.js").then(function(n2) {
  return n2.a;
})], ["ar-dz", () => import("./ar-dz.ce0b453e.js").then(function(n2) {
  return n2.a;
})], ["ar-kw", () => import("./ar-kw.70dff6dc.js").then(function(n2) {
  return n2.a;
})], ["ar-ly", () => import("./ar-ly.6ab47e07.js").then(function(n2) {
  return n2.a;
})], ["ar-ma", () => import("./ar-ma.a71e3063.js").then(function(n2) {
  return n2.a;
})], ["ar-sa", () => import("./ar-sa.f72badd2.js").then(function(n2) {
  return n2.a;
})], ["ar-tn", () => import("./ar-tn.9afdc5e3.js").then(function(n2) {
  return n2.a;
})], ["bs", () => import("./bs.5076e154.js").then(function(n2) {
  return n2.b;
})], ["ca", () => import("./ca.25338e71.js").then(function(n2) {
  return n2.c;
})], ["cs", () => import("./cs.34bcd34e.js").then(function(n2) {
  return n2.c;
})], ["da", () => import("./da.580c3082.js").then(function(n2) {
  return n2.d;
})], ["de", () => import("./de.2f978287.js").then(function(n2) {
  return n2.d;
})], ["de-at", () => import("./de-at.514f05b2.js").then(function(n2) {
  return n2.d;
})], ["de-ch", () => import("./de-ch.00740c45.js").then(function(n2) {
  return n2.d;
})], ["el", () => import("./el.decfb93a.js").then(function(n2) {
  return n2.e;
})], ["en-au", () => import("./en-au.c383b3aa.js").then(function(n2) {
  return n2.e;
})], ["en-ca", () => import("./en-ca.e3f36531.js").then(function(n2) {
  return n2.e;
})], ["en-gb", () => import("./en-gb.49ef8774.js").then(function(n2) {
  return n2.e;
})], ["en-ie", () => import("./en-ie.2852c42e.js").then(function(n2) {
  return n2.e;
})], ["en-il", () => import("./en-il.ba8a6a13.js").then(function(n2) {
  return n2.e;
})], ["en-in", () => import("./en-in.a307c645.js").then(function(n2) {
  return n2.e;
})], ["en-nz", () => import("./en-nz.e48d5708.js").then(function(n2) {
  return n2.e;
})], ["en-sg", () => import("./en-sg.3ed5370e.js").then(function(n2) {
  return n2.e;
})], ["es", () => import("./es.17a1c253.js").then(function(n2) {
  return n2.e;
})], ["es-do", () => import("./es-do.63827bd1.js").then(function(n2) {
  return n2.e;
})], ["es-mx", () => import("./es-mx.c0165dbb.js").then(function(n2) {
  return n2.e;
})], ["es-us", () => import("./es-us.5e5b2225.js").then(function(n2) {
  return n2.e;
})], ["et", () => import("./et.44fd2ae9.js").then(function(n2) {
  return n2.e;
})], ["fi", () => import("./fi.be33b826.js").then(function(n2) {
  return n2.f;
})], ["fr", () => import("./fr.8deb7ca2.js").then(function(n2) {
  return n2.f;
})], ["fr-ca", () => import("./fr-ca.a4496ca8.js").then(function(n2) {
  return n2.f;
})], ["fr-ch", () => import("./fr-ch.cf62e44c.js").then(function(n2) {
  return n2.f;
})], ["he", () => import("./he.a3609eb5.js").then(function(n2) {
  return n2.h;
})], ["hr", () => import("./hr.2d466e72.js").then(function(n2) {
  return n2.h;
})], ["hu", () => import("./hu.f2e17540.js").then(function(n2) {
  return n2.h;
})], ["id", () => import("./id.9cf0b2a2.js").then(function(n2) {
  return n2.i;
})], ["it", () => import("./it.92a5394a.js").then(function(n2) {
  return n2.i;
})], ["it-ch", () => import("./it-ch.a641a601.js").then(function(n2) {
  return n2.i;
})], ["ja", () => import("./ja.85c51ded.js").then(function(n2) {
  return n2.j;
})], ["ko", () => import("./ko.09bcdb42.js").then(function(n2) {
  return n2.k;
})], ["lt", () => import("./lt.a16faafe.js").then(function(n2) {
  return n2.l;
})], ["lv", () => import("./lv.acd3c707.js").then(function(n2) {
  return n2.l;
})], ["nb", () => import("./nb.a1faa792.js").then(function(n2) {
  return n2.n;
})], ["nl", () => import("./nl.9b5627ba.js").then(function(n2) {
  return n2.n;
})], ["nl-be", () => import("./nl-be.6f7d5f5b.js").then(function(n2) {
  return n2.n;
})], ["pl", () => import("./pl.a5ca1726.js").then(function(n2) {
  return n2.p;
})], ["pt", () => import("./pt.75e9a0a7.js").then(function(n2) {
  return n2.p;
})], ["pt-br", () => import("./pt-br.ca88698b.js").then(function(n2) {
  return n2.p;
})], ["ro", () => import("./ro.011afcab.js").then(function(n2) {
  return n2.r;
})], ["ru", () => import("./ru.fdacd5f1.js").then(function(n2) {
  return n2.r;
})], ["sk", () => import("./sk.724e6f07.js").then(function(n2) {
  return n2.s;
})], ["sl", () => import("./sl.151c1887.js").then(function(n2) {
  return n2.s;
})], ["sr", () => import("./sr.a19f29e9.js").then(function(n2) {
  return n2.s;
})], ["sr-cyrl", () => import("./sr-cyrl.a2598dd0.js").then(function(n2) {
  return n2.s;
})], ["sv", () => import("./sv.24f9f119.js").then(function(n2) {
  return n2.s;
})], ["th", () => import("./th.320665d5.js").then(function(n2) {
  return n2.t;
})], ["tr", () => import("./tr.37d81743.js").then(function(n2) {
  return n2.t;
})], ["uk", () => import("./uk.48955033.js").then(function(n2) {
  return n2.u;
})], ["vi", () => import("./vi.8343966e.js").then(function(n2) {
  return n2.v;
})], ["zh-cn", () => import("./zh-cn.900fd536.js").then(function(n2) {
  return n2.z;
})], ["zh-hk", () => import("./zh-hk.2e33f553.js").then(function(n2) {
  return n2.z;
})], ["zh-mo", () => import("./zh-mo.551cff43.js").then(function(n2) {
  return n2.z;
})], ["zh-tw", () => import("./zh-tw.16876d85.js").then(function(n2) {
  return n2.z;
})]]);
function e() {
  return __async(this, arguments, function* (e2 = c$8()) {
    const t2 = (yield import("./moment.399d2139.js").then(function(n2) {
      return n2.m;
    })).default;
    let l2 = m.has(e2);
    if (!l2) {
      const o2 = e2.split("-");
      o2.length > 1 && m.has(o2[0]) && (e2 = o2[0], l2 = true);
    }
    return l2 ? yield m.get(e2)() : e2 = "en", e2 !== t2.locale() && t2.locale(e2), t2;
  });
}
function j$1() {
  if (t$6("csp-restrictions"))
    return false;
  try {
    return new Function("function* test() {}; return true")();
  } catch (t2) {
    return false;
  }
}
const A$1 = j$1();
let x$1 = false, b$1 = false, g = null, F$1 = [];
function E$1(t2, r2) {
  if (r2.useAsync === true || t2.isAsync === true)
    return v$1(t2, r2);
  if (t$6("csp-restrictions")) {
    return function(e2) {
      return ke(t2, e2);
    };
  }
  return nt(t2, r2);
}
function v$1(t2, r2) {
  if (g === null)
    throw new Error("Async Arcade must be enabled for this script");
  if (t$6("csp-restrictions") || A$1 === false) {
    return function(e2) {
      return g.executeScript(t2, e2);
    };
  }
  return nt(t2, r2, true);
}
function G$1(e2) {
  je(e2), Je(e2, "sync"), g === null ? F$1.push(e2) : (Je(e2, "async"), g.extend(e2));
}
function w$1(e2, t2 = []) {
  return s(e2, t2);
}
function U(e2, t2, r2 = "") {
  return f(e2, t2, r2);
}
function M$1(e2, t2, r2, n2 = "") {
  return u(e2, t2, r2, n2);
}
function _(e2, t2, r2 = []) {
  return k$1(s(e2, r2), t2);
}
function k$1(e2, t2) {
  if (t2.useAsync === true || e2.isAsync === true) {
    if (g === null)
      throw new Error("Async Arcade must be enabled for this script");
    return g.executeScript(e2, t2);
  }
  return ke(e2, t2);
}
function C$1(e2, t2) {
  return Ye(e2, t2);
}
function O(e2, t2) {
  return Ge(e2, t2);
}
function L$1(e2, t2 = false) {
  return a(e2);
}
function R$1(e2, t2 = []) {
  return e2.usesGeometry === void 0 && g$4(e2, t2), e2.usesGeometry === true;
}
let q$1 = null;
function z$1() {
  return q$1 || (q$1 = s$a([import("./geometryEngine.e19f37da.js"), Promise.resolve().then(function() {
    return geomsync;
  })]).then(([e2, t2]) => (b$1 = true, t2.setGeometryEngine(e2), true)), q$1);
}
let D$1 = null;
function I$1() {
  return D$1 !== null || (D$1 = rt().then(() => import("./arcadeAsyncRuntime.984ca9ee.js")).then((e2) => {
    g = e2;
    for (const t2 of F$1)
      g.extend(t2), Je(t2, "async");
    return F$1 = null, true;
  })), D$1;
}
function T() {
  return x$1;
}
function B() {
  return !!g;
}
function H() {
  return b$1;
}
let J = null;
function K() {
  return J || (J = I$1().then(() => s$a([import("./featureSetUtils.add30a90.js").then(function(n2) {
    return n2.f;
  }), import("./featuresetbase.4e131e79.js"), import("./featuresetgeom.969d3583.js"), import("./featuresetstats.1640b827.js"), import("./featuresetstring.08a55a84.js")]).then(([e2, t2, r2, n2, s2]) => (X = e2, g.extend([t2, r2, n2, s2]), Je([t2, r2, n2, s2], "async"), x$1 = true, true))), J);
}
function N(e2, t2 = []) {
  return e2.usesFeatureSet === void 0 && g$4(e2, t2), e2.usesFeatureSet === true;
}
function P$1(e2, t2 = []) {
  return e2.isAsync === void 0 && g$4(e2, t2), e2.isAsync === true;
}
function Q(e2, t2) {
  if (t2) {
    for (const r2 of t2)
      if (C$1(e2, r2))
        return true;
    return false;
  }
  return false;
}
function V$1(e2, n2, s2 = [], i2 = false) {
  return l$8((r2, u2) => {
    const c2 = typeof e2 == "string" ? w$1(e2) : e2, o2 = [];
    o2.push(Z()), c2 && (H() === false && (R$1(c2) || i2) && o2.push(z$1()), B() === false && (c2.isAsync === true || n2) && o2.push(I$1()), T() === false && (N(c2) || Q(c2, s2)) && o2.push(K())), o2 ? s$a(o2).then(() => {
      r2(true);
    }, u2) : r2(true);
  });
}
function W(e2) {
  if (R$1(e2))
    return true;
  const t2 = A$4(e2);
  return t2.indexOf("geometry") > -1 || t2.indexOf("feature") > -1;
}
let X = null;
function Y() {
  return X;
}
function Z() {
  return $$1 !== null || ($$1 = e().then((e2) => (de$2.Moment = e2, true))), $$1;
}
let $$1 = null;
var ee = Object.freeze({ __proto__: null, compileScript: E$1, extend: G$1, parseScript: w$1, validateScript: U, scriptCheck: M$1, parseAndExecuteScript: _, executeScript: k$1, referencesMember: C$1, referencesFunction: O, extractFieldLiterals: L$1, scriptUsesGeometryEngine: R$1, enableGeometrySupport: z$1, enableAsyncSupport: I$1, isFeatureSetSupportEnabled: T, isAsyncEnabled: B, isGeometryEnabled: H, enableFeatureSetSupport: K, scriptUsesFeatureSet: N, scriptIsAsync: P$1, loadScriptDependencies: V$1, scriptTouchesGeometry: W, featureSetUtils: Y, load: Z });
const d = /^\$feature\./i, y = { vars: { $feature: "any", $view: "any" }, spatialReference: null };
function v(e2) {
  if (!e2)
    return null;
  try {
    return w$1(e2);
  } catch (r2) {
  }
  return null;
}
function x(r2, n2) {
  const t2 = typeof r2 == "string" ? v(r2) : r2;
  if (!t2)
    return null;
  try {
    return n2 = n2 || y$8(y), E$1(t2, n2);
  } catch (s2) {
  }
  return null;
}
function w(e2, r2) {
  return { vars: { $feature: e2 == null ? new g$5() : g$5.createFromGraphic(e2), $view: r2 && r2.view }, spatialReference: r2 && r2.sr };
}
function h(e2, r2, n2) {
  return g$5.createFromGraphicLikeObject(r2, e2, n2);
}
function b(e2, r2) {
  e2.vars.$feature = r2;
}
function F(e2, r2) {
  let n2;
  try {
    n2 = k$1(e2, r2);
  } catch (t2) {
    n2 = null;
  }
  return n2;
}
function j(e2, r2) {
  let n2;
  try {
    n2 = e2 ? e2(r2) : null;
  } catch (t2) {
    n2 = null;
  }
  return n2;
}
function E(e2, r2) {
  try {
    return e2 ? e2(r2) : Promise.resolve(null);
  } catch (n2) {
    return Promise.resolve(null);
  }
}
function S(e2) {
  if (!e2)
    return [];
  const r2 = typeof e2 == "string" ? v(e2) : e2;
  if (!r2)
    return [];
  const n2 = L$1(r2), t2 = new Array();
  return n2.forEach((e3) => {
    d.test(e3) && (e3 = e3.replace(d, ""), t2.push(e3));
  }), t2.sort(), t2.filter((e3, r3) => r3 === 0 || t2[r3 - 1] !== e3);
}
function $(e2) {
  return C$1(e2, "$view");
}
function z(e2, r2) {
  return !!e2 && C$1(e2, r2);
}
function C(e2) {
  if (!e2 || e2.spatialReference == null && (e2.scale == null || e2.viewingMode == null))
    return;
  return { view: e2.viewingMode && e2.scale != null ? new h$7({ viewingMode: e2.viewingMode, scale: e2.scale }) : null, sr: e2.spatialReference };
}
function M(e2, r2) {
  const n2 = Y();
  return n2 ? n2.createFeatureSetCollectionFromService(e2, r2) : null;
}
function R(e2, r2) {
  if (e2 === null)
    return null;
  const n2 = Y();
  return n2 ? n2.constructFeatureSet(e2, r2) : null;
}
function k(e2) {
  if (e2 === null || e2.map === null)
    return null;
  const r2 = Y();
  return r2 ? r2.createFeatureSetCollectionFromMap(e2.map, e2.spatialReference) : null;
}
function I(e2, r2, n2 = []) {
  return V$1(e2, r2, n2);
}
function D() {
  return z$1();
}
function P() {
  return K();
}
function V(e2) {
  return e2.type === "simple" || e2.type === "class-breaks" || e2.type === "unique-value" || e2.type === "dot-density" || e2.type === "dictionary";
}
function G(e2) {
  return e2.declaredClass === "esri.layers.support.LabelClass";
}
function L(e2) {
  return e2.declaredClass === "esri.PopupTemplate";
}
function q(e2) {
  const r2 = v(e2);
  return !!r2 && R$1(r2);
}
function A(e2) {
  if (!e2)
    return false;
  if (typeof e2 == "string")
    return q(e2);
  const n2 = e2;
  if (V(n2)) {
    if (n2.type === "dot-density") {
      const e4 = n2.attributes.some((e5) => q(e5.valueExpression));
      if (e4)
        return e4;
    }
    const e3 = n2.visualVariables, t2 = !!e3 && e3.some((e4) => {
      let n3 = q(e4.valueExpression);
      return e4.type === "size" && (n$4(e4.minSize) && (n3 = n3 || q(e4.minSize.valueExpression)), n$4(e4.maxSize) && (n3 = n3 || q(e4.maxSize.valueExpression))), n3;
    });
    return !(!("valueExpression" in n2) || !q(n2.valueExpression)) || t2;
  }
  if (G(n2)) {
    const e3 = n2.labelExpressionInfo && n2.labelExpressionInfo.expression;
    return !(!e3 || !q(e3)) || false;
  }
  return !!L(n2) && (!!n2.expressionInfos && n2.expressionInfos.some((e3) => q(e3.expression)));
}
var arcadeUtils = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  convertFeatureLayerToFeatureSet: R,
  convertMapToFeatureSetCollection: k,
  convertServiceUrlToWorkspace: M,
  createExecContext: w,
  createFeature: h,
  createFunction: x,
  createSyntaxTree: v,
  dependsOnView: $,
  enableFeatureSetOperations: P,
  enableGeometryOperations: D,
  evalSyntaxTree: F,
  executeAsyncFunction: E,
  executeFunction: j,
  extractFieldNames: S,
  getViewInfo: C,
  hasGeometryOperations: A,
  hasVariable: z,
  loadScriptDependencies: I,
  updateExecContext: b,
  Dictionary: h$7,
  arcadeFeature: g$5,
  arcade: ee
});
export { f$3 as $, A$4 as A, B$3 as B, h$9 as C, D$5 as D, E$6 as E, F$5 as F, se$3 as G, c$3 as H, I$5 as I, J$3 as J, K$2 as K, r$6 as L, O$5 as M, N$1 as N, O$4 as O, P$5 as P, fe$2 as Q, a$2 as R, S$4 as S, T$4 as T, ce$3 as U, me$2 as V, ee$3 as W, X$3 as X, a$3 as Y, Z$2 as Z, _$2 as _, N$3 as a, I$4 as a0, l$7 as a1, he$2 as a2, s$9 as a3, o$5 as a4, S$3 as a5, E$5 as a6, N$5 as a7, de$2 as a8, c$6 as a9, u$6 as aa, f$6 as ab, g$6 as ac, G$3 as ad, y$5 as ae, b$6 as af, F$4 as ag, ge$2 as ah, M$5 as ai, l$2 as aj, s$5 as ak, D$6 as al, oe$2 as am, re$3 as an, ie$3 as ao, H$2 as ap, arcadeUtils as aq, a$5 as b, N$6 as c, d$3 as d, b$8 as e, N$4 as f, S$2 as g, h$5 as h, h$7 as i, j$5 as j, g$5 as k, k$4 as l, m$3 as m, e$8 as n, o$2 as o, p$3 as p, q$4 as q, D$7 as r, s$7 as s, t$2 as t, u$5 as u, v$4 as v, w$3 as w, te$2 as x, ye$2 as y, i$7 as z };
