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
import { a0 as t, aa as s$1, cr as M$1, bF as k$1, dD as U$1, ae as e, af as y$2, dQ as e$1, eZ as c$1, ag as i, gU as O$1, b3 as u$2, e4 as d$2, c_ as L$1, c9 as t$1, ab as a$1, gR as t$2, hw as f$1, gT as o$1, gS as s$2, dY as l$1, dZ as u$3, d_ as l$2, e1 as b$1, h4 as l$3, a5 as r, i5 as r$1, aj as U$2, f1 as Rt, M as M$2, d1 as n, iH as S, cm as d$3, dC as $, ar as s$3, bT as y$3, c4 as o$2, hj as d$4, gV as N$1, iI as p$1, e0 as f$2 } from "./vendor.74d5941c.js";
import { l as l$4 } from "./ExportWMSImageParameters.371f2196.js";
const a = [[4001, 4999], [2044, 2045], [2081, 2083], [2085, 2086], [2093, 2093], [2096, 2098], [2105, 2132], [2169, 2170], [2176, 2180], [2193, 2193], [2200, 2200], [2206, 2212], [2319, 2319], [2320, 2462], [2523, 2549], [2551, 2735], [2738, 2758], [2935, 2941], [2953, 2953], [3006, 3030], [3034, 3035], [3058, 3059], [3068, 3068], [3114, 3118], [3126, 3138], [3300, 3301], [3328, 3335], [3346, 3346], [3350, 3352], [3366, 3366], [3416, 3416], [20004, 20032], [20064, 20092], [21413, 21423], [21473, 21483], [21896, 21899], [22171, 22177], [22181, 22187], [22191, 22197], [25884, 25884], [27205, 27232], [27391, 27398], [27492, 27492], [28402, 28432], [28462, 28492], [30161, 30179], [30800, 30800], [31251, 31259], [31275, 31279], [31281, 31290], [31466, 31700]], s = { 84: 4326, 83: 4269, 27: 4267 };
function o(e2) {
  if (!e2)
    return null;
  const n2 = { idCounter: -1 };
  if (typeof e2 == "string") {
    e2 = new DOMParser().parseFromString(e2, "text/xml");
  }
  const r2 = e2.documentElement;
  if (r2.nodeName === "ServiceExceptionReport") {
    const e3 = Array.prototype.slice.call(r2.childNodes).map((e4) => e4.textContent).join("\r\n");
    throw new s$1("wmslayer:wms-capabilities-xml-is-not-valid", "The server returned errors when the WMS capabilities were requested.", e3);
  }
  const a2 = d$1("Capability", r2), s2 = d$1("Service", r2), o2 = d$1("Request", a2);
  if (!a2 || !s2 || !o2)
    return null;
  const l2 = d$1("Layer", a2);
  if (!l2)
    return null;
  const u2 = r2.nodeName === "WMS_Capabilities" || r2.nodeName === "WMT_MS_Capabilities" ? r2.getAttribute("version") : "1.3.0", m2 = h$1("Title", s2, "") || h$1("Name", s2, ""), f2 = h$1("AccessConstraints", s2, ""), p2 = h$1("Abstract", s2, ""), x2 = parseInt(h$1("MaxWidth", s2, "5000"), 10), b2 = parseInt(h$1("MaxHeight", s2, "5000"), 10), E2 = g(o2, "GetMap"), S2 = N(o2, "GetMap"), I = y$1(l2, u2, n2);
  let w, F2 = 0;
  if (Array.prototype.slice.call(a2.childNodes).forEach((e3) => {
    e3.nodeName === "Layer" && (F2 === 0 ? w = e3 : F2 === 1 ? (I.name && (I.name = "", I.sublayers.push(y$1(w, u2, n2))), I.sublayers.push(y$1(e3, u2, n2))) : I.sublayers.push(y$1(e3, u2, n2)), F2++);
  }), !I)
    return null;
  let M2, O2, C2;
  const T2 = I.fullExtents;
  if (M2 = I.sublayers, M2 || (M2 = []), M2.length === 0 && M2.push(I), O2 = I.extent, !O2) {
    const e3 = new M$1(M2[0].extent);
    I.extent = e3.toJSON(), O2 = I.extent;
  }
  if (C2 = I.spatialReferences, !C2.length && M2.length > 0) {
    const e3 = (t2) => {
      let n3 = [];
      return t2.sublayers.forEach((t3) => {
        !n3.length && t3.spatialReferences.length && (n3 = t3.spatialReferences || e3(t3));
      }), n3;
    };
    M2.forEach((t2) => {
      C2.length || (C2 = t2.spatialReferences || e3(t2));
    });
  }
  const v2 = N(o2, "GetFeatureInfo");
  let R2;
  if (v2) {
    const e3 = g(o2, "GetFeatureInfo");
    e3.indexOf("text/html") > -1 ? R2 = "text/html" : e3.indexOf("text/plain") > -1 && (R2 = "text/plain");
  }
  if (!R2) {
    const e3 = function(t2) {
      t2 && (t2.queryable = false, t2.sublayers && t2.sublayers.forEach((t3) => {
        e3(t3);
      }));
    };
    e3(I);
  }
  const V2 = c(M2), _2 = I.minScale || 0, U2 = I.maxScale || 0, q = I.dimensions, B2 = V2.reduce((e3, t2) => e3.concat(t2.dimensions), []), D2 = q.concat(B2).filter(L);
  let k2 = null;
  if (D2.length > 0) {
    let e3 = Number.POSITIVE_INFINITY, t2 = Number.NEGATIVE_INFINITY;
    D2.forEach((n3) => {
      const { extent: r3 } = n3;
      A$1(r3) ? r3.forEach((n4) => {
        e3 = Math.min(e3, n4.getTime()), t2 = Math.max(t2, n4.getTime());
      }) : r3.forEach((n4) => {
        e3 = Math.min(e3, n4.min.getTime()), t2 = Math.max(t2, n4.max.getTime());
      });
    }), k2 = { startTimeField: null, endTimeField: null, trackIdField: null, timeExtent: [e3, t2] };
  }
  return { copyright: f2, description: p2, dimensions: q, extent: O2, fullExtents: T2, featureInfoFormat: R2, featureInfoUrl: v2, mapUrl: S2, maxWidth: x2, maxHeight: b2, maxScale: U2, minScale: _2, layers: V2, spatialReferences: C2, supportedImageFormatTypes: E2, timeInfo: k2, title: m2, version: u2 };
}
function l(e2) {
  return a.some(([t2, n2]) => e2 >= t2 && e2 <= n2);
}
function u$1(e2) {
  return e2.length ? e2.filter((e3) => e3.popupEnabled && e3.name && e3.queryable).map((e3) => e3.name).join(",") : "";
}
function c(e2) {
  let t2 = [];
  return e2.forEach((e3) => {
    t2.push(e3), e3.sublayers && e3.sublayers.length && (t2 = t2.concat(c(e3.sublayers)), delete e3.sublayers);
  }), t2;
}
function m(e2, t2, n2) {
  var r2;
  return (r2 = t2.getAttribute(e2)) != null ? r2 : n2;
}
function f(e2, t2, n2, r2) {
  const i2 = d$1(e2, n2);
  return i2 ? m(t2, i2, r2) : r2;
}
function d$1(e2, t2) {
  for (let n2 = 0; n2 < t2.childNodes.length; n2++) {
    const r2 = t2.childNodes[n2];
    if (E(r2) && r2.nodeName === e2)
      return r2;
  }
  return null;
}
function p(e2, t2) {
  const n2 = [];
  for (let r2 = 0; r2 < t2.childNodes.length; r2++) {
    const i2 = t2.childNodes[r2];
    E(i2) && i2.nodeName === e2 && n2.push(i2);
  }
  return n2;
}
function h$1(e2, t2, n2) {
  const r2 = d$1(e2, t2);
  return r2 ? r2.textContent : n2;
}
function x(e2, t2, n2) {
  if (!e2)
    return null;
  const a2 = parseFloat(e2.getAttribute("minx")), s2 = parseFloat(e2.getAttribute("miny")), o2 = parseFloat(e2.getAttribute("maxx")), l2 = parseFloat(e2.getAttribute("maxy"));
  let u2, c2, m2, f2;
  n2 ? (u2 = isNaN(s2) ? -Number.MAX_VALUE : s2, c2 = isNaN(a2) ? -Number.MAX_VALUE : a2, m2 = isNaN(l2) ? Number.MAX_VALUE : l2, f2 = isNaN(o2) ? Number.MAX_VALUE : o2) : (u2 = isNaN(a2) ? -Number.MAX_VALUE : a2, c2 = isNaN(s2) ? -Number.MAX_VALUE : s2, m2 = isNaN(o2) ? Number.MAX_VALUE : o2, f2 = isNaN(l2) ? Number.MAX_VALUE : l2);
  const d2 = new k$1({ wkid: t2 });
  return new M$1({ xmin: u2, ymin: c2, xmax: m2, ymax: f2, spatialReference: d2 });
}
function N(e2, t2) {
  const n2 = d$1(t2, e2);
  if (n2) {
    const e3 = d$1("DCPType", n2);
    if (e3) {
      const t3 = d$1("HTTP", e3);
      if (t3) {
        const e4 = d$1("Get", t3);
        if (e4) {
          let t4 = f("OnlineResource", "xlink:href", e4, null);
          if (t4)
            return t4.indexOf("&") === t4.length - 1 && (t4 = t4.substring(0, t4.length - 1)), F(t4, ["service", "request"]);
        }
      }
    }
  }
  return null;
}
function g(e2, t2) {
  const n2 = p("Operation", e2);
  if (n2.length === 0) {
    return p("Format", d$1(t2, e2)).map((e3) => e3.textContent);
  }
  const r2 = [];
  return n2.forEach((e3) => {
    if (e3.getAttribute("name") === t2) {
      p("Format", e3).forEach((e4) => {
        r2.push(e4.textContent);
      });
    }
  }), r2;
}
function b(e2, t2, n2) {
  const r2 = d$1(t2, e2);
  if (!r2)
    return n2;
  const { textContent: i2 } = r2;
  if (i2 == null || i2 === "")
    return n2;
  const a2 = Number(i2);
  return isNaN(a2) ? n2 : a2;
}
function y$1(e2, t2, n2) {
  var a2;
  if (!e2)
    return null;
  const o2 = { id: n2.idCounter++, fullExtents: [], parentLayerId: null, queryable: e2.getAttribute("queryable") === "1", spatialReferences: [], sublayers: null }, u2 = d$1("LatLonBoundingBox", e2), c2 = d$1("EX_GeographicBoundingBox", e2);
  let f2 = null;
  u2 && (f2 = x(u2, 4326)), c2 && (f2 = new M$1(0, 0, 0, 0, new k$1({ wkid: 4326 })), f2.xmin = parseFloat(h$1("westBoundLongitude", c2, "0")), f2.ymin = parseFloat(h$1("southBoundLatitude", c2, "0")), f2.xmax = parseFloat(h$1("eastBoundLongitude", c2, "0")), f2.ymax = parseFloat(h$1("northBoundLatitude", c2, "0"))), u2 || c2 || (f2 = new M$1(-180, -90, 180, 90, new k$1({ wkid: 4326 }))), o2.minScale = b(e2, "MaxScaleDenominator", 0), o2.maxScale = b(e2, "MinScaleDenominator", 0);
  const N2 = ["1.0.0", "1.1.0", "1.1.1"].indexOf(t2) > -1 ? "SRS" : "CRS";
  return Array.prototype.slice.call(e2.childNodes).forEach((e3) => {
    if (e3.nodeName === "Name")
      o2.name = e3.textContent || "";
    else if (e3.nodeName === "Title")
      o2.title = e3.textContent || "";
    else if (e3.nodeName === "Abstract")
      o2.description = e3.textContent || "";
    else if (e3.nodeName === "BoundingBox") {
      const n3 = e3.getAttribute(N2);
      if (n3 && n3.indexOf("EPSG:") === 0) {
        const r3 = parseInt(n3.substring(5), 10);
        r3 === 0 || isNaN(r3) || f2 || (f2 = t2 === "1.3.0" ? x(e3, r3, l(r3)) : x(e3, r3));
      }
      const r2 = n3 && n3.indexOf(":");
      if (r2 && r2 > -1) {
        let i2 = parseInt(n3.substring(r2 + 1, n3.length), 10);
        i2 === 0 || isNaN(i2) || (i2 = s[i2] ? s[i2] : i2);
        const a3 = t2 === "1.3.0" ? x(e3, i2, l(i2)) : x(e3, i2);
        o2.fullExtents.push(a3);
      }
    } else if (e3.nodeName === N2) {
      e3.textContent.split(" ").forEach((e4) => {
        (e4 = e4.indexOf(":") > -1 ? parseInt(e4.split(":")[1], 10) : parseInt(e4, 10)) === 0 || isNaN(e4) || (s[e4] && (e4 = s[e4]), o2.spatialReferences.indexOf(e4) === -1 && o2.spatialReferences.push(e4));
      });
    } else if (e3.nodeName !== "Style" || o2.legendURL) {
      if (e3.nodeName === "Layer") {
        const r2 = y$1(e3, t2, n2);
        r2 && (r2.parentLayerId = o2.id, o2.sublayers || (o2.sublayers = []), o2.sublayers.push(r2));
      }
    } else {
      const t3 = d$1("LegendURL", e3);
      if (t3) {
        const e4 = d$1("OnlineResource", t3);
        e4 && (o2.legendURL = e4.getAttribute("xlink:href"));
      }
    }
  }), o2.extent = (a2 = f2) == null ? void 0 : a2.toJSON(), o2.dimensions = p("Dimension", e2).filter((e3) => e3.getAttribute("name") && e3.getAttribute("units") && e3.textContent).map((e3) => {
    const t3 = e3.getAttribute("name"), n3 = e3.getAttribute("units"), r2 = e3.textContent, i2 = e3.getAttribute("unitSymbol"), a3 = e3.getAttribute("default"), s2 = m("default", e3, "0") !== "0", o3 = m("nearestValue", e3, "0") !== "0", l2 = m("current", e3, "0") !== "0";
    if (/^time$/i.test(t3) && /^ISO8601$/i.test(n3)) {
      return { name: "time", units: "ISO8601", extent: C(r2), default: C(a3), multipleValues: s2, nearestValue: o3, current: l2 };
    }
    if (/^elevation$/i.test(t3)) {
      return { name: "elevation", units: n3, extent: M(r2), unitSymbol: i2, default: M(a3), multipleValues: s2, nearestValue: o3 };
    }
    return { name: t3, units: n3, extent: O(r2), unitSymbol: i2, default: O(a3), multipleValues: s2, nearestValue: o3 };
  }), o2;
}
function A$1(e2) {
  return Array.isArray(e2) && e2.length > 0 && e2[0] instanceof Date;
}
function E(e2) {
  return e2.nodeType === Node.ELEMENT_NODE;
}
function L(e2) {
  return e2.name === "time";
}
function F(e2, t2) {
  const r2 = [], i2 = U$1(e2);
  for (const n2 in i2.query)
    i2.query.hasOwnProperty(n2) && t2.indexOf(n2.toLowerCase()) === -1 && r2.push(n2 + "=" + i2.query[n2]);
  return i2.path + (r2.length ? "?" + r2.join("&") : "");
}
function M(e2) {
  if (!e2)
    return null;
  const t2 = e2.indexOf("/") !== -1, n2 = e2.split(",");
  return t2 ? n2.map((e3) => {
    const t3 = e3.split("/");
    if (t3.length < 2)
      return null;
    return { min: parseFloat(t3[0]), max: parseFloat(t3[1]), resolution: t3.length >= 3 && t3[2] !== "0" ? parseFloat(t3[2]) : void 0 };
  }).filter((e3) => e3) : n2.map((e3) => parseFloat(e3));
}
function O(e2) {
  if (!e2)
    return null;
  const t2 = e2.indexOf("/") !== -1, n2 = e2.split(",");
  return t2 ? n2.map((e3) => {
    const t3 = e3.split("/");
    if (t3.length < 2)
      return null;
    return { min: t3[0], max: t3[1], resolution: t3.length >= 3 && t3[2] !== "0" ? t3[2] : void 0 };
  }).filter((e3) => e3) : n2;
}
function C(e2) {
  if (!e2)
    return null;
  const t2 = e2.indexOf("/") !== -1, n2 = e2.split(",");
  return t2 ? n2.map((e3) => {
    const t3 = e3.split("/");
    if (t3.length < 2)
      return null;
    return { min: new Date(t3[0]), max: new Date(t3[1]), resolution: t3.length >= 3 && t3[2] !== "0" ? T(t3[2]) : void 0 };
  }).filter((e3) => e3) : n2.map((e3) => new Date(e3));
}
function T(e2) {
  const t2 = /(?:p(\d+y|\d+(?:.|,)\d+y)?(\d+m|\d+(?:.|,)\d+m)?(\d+d|\d+(?:.|,)\d+d)?)?(?:t(\d+h|\d+(?:.|,)\d+h)?(\d+m|\d+(?:.|,)\d+m)?(\d+s|\d+(?:.|,)\d+s)?)?/i, n2 = e2.match(t2);
  if (!n2)
    return null;
  return { years: v(n2[1]), months: v(n2[2]), days: v(n2[3]), hours: v(n2[4]), minutes: v(n2[5]), seconds: v(n2[6]) };
}
function v(e2) {
  if (!e2)
    return 0;
  const t2 = /(?:\d+(?:.|,)\d+|\d+)/, n2 = e2.match(t2);
  if (!n2)
    return 0;
  const r2 = n2[0].replace(",", ".");
  return Number(r2);
}
function R(e2) {
  return e2.toISOString().replace(/\.[0-9]{3}/, "");
}
const V = new Set([102100, 3857, 102113, 900913]), _ = new Set([3395, 54004]);
function U(t$12, n2) {
  let r2 = t$12.wkid;
  return t(n2) ? r2 : (!n2.includes(r2) && t$12.latestWkid && (r2 = t$12.latestWkid), V.has(r2) ? n2.find((e2) => V.has(e2)) || n2.find((e2) => _.has(e2)) || 102100 : r2);
}
var u;
let y = 0, d = u = class extends O$1 {
  constructor(e2) {
    super(e2), this._sublayersHandles = new u$2(), this.dimensions = null, this.fullExtents = null, this.featureInfoFormat = null, this.featureInfoUrl = null, this.legendUrl = null, this.legendEnabled = true, this.maxScale = 0, this.minScale = 0, this.popupEnabled = false, this.queryable = false, this.spatialReferences = null;
  }
  get description() {
    return this._get("description");
  }
  set description(e2) {
    this._set("description", e2);
  }
  get fullExtent() {
    return this._get("fullExtent");
  }
  set fullExtent(e2) {
    this._set("fullExtent", e2);
  }
  readExtent(e2, t2) {
    return (e2 = t2.extent) ? M$1.fromJSON(e2) : null;
  }
  get id() {
    const e2 = this._get("id");
    return e2 == null ? y++ : e2;
  }
  set id(e2) {
    this._set("id", e2);
  }
  readLegendUrl(e2, t2) {
    return t2 ? t2.legendUrl || t2.legendURL : null;
  }
  set layer(e2) {
    this._set("layer", e2), this.sublayers && this.sublayers.forEach((t2) => t2.layer = e2);
  }
  get name() {
    return this._get("name");
  }
  set name(e2) {
    this._set("name", e2);
  }
  set sublayers(e2) {
    const t2 = this._get("sublayers");
    t2 && (t2.forEach((e3) => {
      e3.layer = null;
    }), this._sublayersHandles.removeAll(), this._sublayersHandles = null), e2 && (e2.forEach((e3) => {
      e3.parent = this, e3.layer = this.layer;
    }), this._sublayersHandles.add([e2.on("after-add", ({ item: e3 }) => {
      e3.parent = this, e3.layer = this.layer;
    }), e2.on("after-remove", ({ item: e3 }) => {
      e3.parent = null, e3.layer = null;
    })])), this._set("sublayers", e2);
  }
  castSublayers(e2) {
    return d$2(L$1.ofType(u), e2);
  }
  get title() {
    return this._get("title");
  }
  set title(e2) {
    this._set("title", e2);
  }
  get visible() {
    return this._get("visible");
  }
  set visible(e2) {
    this._setAndNotifyLayer("visible", e2);
  }
  clone() {
    const e2 = new u();
    return this.hasOwnProperty("description") && (e2.description = this.description), this.hasOwnProperty("fullExtent") && (e2.fullExtent = this.fullExtent.clone()), this.hasOwnProperty("fullExtents") && (e2.fullExtents = this.fullExtents.map((e3) => e3.clone())), this.hasOwnProperty("featureInfoFormat") && (e2.featureInfoFormat = this.featureInfoFormat), this.hasOwnProperty("featureInfoUrl") && (e2.featureInfoUrl = this.featureInfoUrl), this.hasOwnProperty("legendUrl") && (e2.legendUrl = this.legendUrl), this.hasOwnProperty("legendEnabled") && (e2.legendEnabled = this.legendEnabled), this.hasOwnProperty("layer") && (e2.layer = this.layer), this.hasOwnProperty("name") && (e2.name = this.name), this.hasOwnProperty("parent") && (e2.parent = this.parent), this.hasOwnProperty("queryable") && (e2.queryable = this.queryable), this.hasOwnProperty("sublayers") && (e2.sublayers = this.sublayers && this.sublayers.map((e3) => e3.clone())), this.hasOwnProperty("spatialReferences") && (e2.spatialReferences = this.spatialReferences.map((e3) => e3)), this.hasOwnProperty("visible") && (e2.visible = this.visible), this.hasOwnProperty("title") && (e2.title = this.title), e2;
  }
  _setAndNotifyLayer(e2, t2) {
    const r2 = this.layer;
    this._get(e2) !== t2 && (this._set(e2, t2), r2 && r2.emit("wms-sublayer-update", { propertyName: e2, id: this.id }));
  }
};
e([y$2()], d.prototype, "description", null), e([y$2({ readOnly: true })], d.prototype, "dimensions", void 0), e([y$2({ value: null })], d.prototype, "fullExtent", null), e([e$1("fullExtent", ["extent"])], d.prototype, "readExtent", null), e([y$2()], d.prototype, "fullExtents", void 0), e([y$2()], d.prototype, "featureInfoFormat", void 0), e([y$2()], d.prototype, "featureInfoUrl", void 0), e([y$2({ type: Number, json: { write: { enabled: false, overridePolicy: () => ({ ignoreOrigin: true, enabled: true }) } } })], d.prototype, "id", null), e([y$2({ type: String, json: { origins: { "web-document": { read: { source: ["legendUrl", "legendURL"] }, write: { target: "legendUrl", ignoreOrigin: true } } }, read: { source: "legendURL" }, write: { ignoreOrigin: true } } })], d.prototype, "legendUrl", void 0), e([e$1(["web-document"], "legendUrl")], d.prototype, "readLegendUrl", null), e([y$2({ value: true, type: Boolean, json: { read: { source: "showLegend" }, write: { target: "showLegend" }, origins: { "web-map": { read: false, write: false }, "web-scene": { read: false, write: false } } } })], d.prototype, "legendEnabled", void 0), e([y$2({ value: null })], d.prototype, "layer", null), e([y$2()], d.prototype, "maxScale", void 0), e([y$2()], d.prototype, "minScale", void 0), e([y$2({ type: String, value: null, json: { read: { source: "name" }, write: { ignoreOrigin: true } } })], d.prototype, "name", null), e([y$2()], d.prototype, "parent", void 0), e([y$2({ type: Boolean, json: { read: { source: "showPopup" }, write: { ignoreOrigin: true, target: "showPopup" } } })], d.prototype, "popupEnabled", void 0), e([y$2({ type: Boolean, json: { write: { ignoreOrigin: true } } })], d.prototype, "queryable", void 0), e([y$2()], d.prototype, "sublayers", null), e([c$1("sublayers")], d.prototype, "castSublayers", null), e([y$2({ type: [Number], json: { read: { source: "spatialReferences" } } })], d.prototype, "spatialReferences", void 0), e([y$2({ type: String, value: null, json: { write: { ignoreOrigin: true } } })], d.prototype, "title", null), e([y$2({ type: Boolean, value: true, json: { read: { source: "defaultVisibility" } } })], d.prototype, "visible", null), d = u = e([i("esri.layers.support.WMSSublayer")], d);
var h = d;
const B = new t$1({ bmp: "image/bmp", gif: "image/gif", jpg: "image/jpeg", png: "image/png", svg: "image/svg+xml" }, { ignoreUnknown: false });
let k = class extends a$1(t$2(f$1(o$1(s$2(l$1(u$3(l$2(b$1)))))))) {
  constructor(...e2) {
    super(...e2), this.allSublayers = new l$3({ root: this, rootCollectionNames: ["sublayers"], getChildrenFunction: (e3) => e3.sublayers }), this.customParameters = null, this.customLayerParameters = null, this.copyright = null, this.description = null, this.dimensions = null, this.fullExtent = null, this.fullExtents = null, this.featureInfoFormat = null, this.featureInfoUrl = null, this.imageFormat = null, this.imageMaxHeight = 2048, this.imageMaxWidth = 2048, this.imageTransparency = true, this.legendEnabled = true, this.mapUrl = null, this.isReference = null, this.operationalLayerType = "WMS", this.spatialReference = null, this.spatialReferences = null, this.sublayers = null, this.type = "wms", this.url = null, this.version = null, this.watch("sublayers", (e3, r2) => {
      if (r2) {
        for (const e4 of r2)
          e4.layer = null;
        this.handles.remove("wms-sublayer");
      }
      if (e3) {
        for (const r3 of e3)
          r3.parent = this, r3.layer = this;
        this.handles.add([e3.on("after-add", ({ item: e4 }) => {
          e4.parent = this, e4.layer = this;
        }), e3.on("after-remove", ({ item: e4 }) => {
          e4.parent = null, e4.layer = null;
        })], "wms-sublayer");
      }
    }, true);
  }
  normalizeCtorArgs(e2, r2) {
    return typeof e2 == "string" ? __spreadValues({ url: e2 }, r2) : e2;
  }
  load(e2) {
    const r$12 = r(e2) ? e2.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["WMS"] }, e2).then(() => this._fetchService(r$12), () => this._fetchService(r$12))), Promise.resolve(this);
  }
  readFullExtentFromItemOrMap(e2, r2) {
    const t2 = r2.extent;
    return new M$1({ xmin: t2[0][0], ymin: t2[0][1], xmax: t2[1][0], ymax: t2[1][1] });
  }
  writeFullExtent(e2, r2) {
    r2.extent = [[e2.xmin, e2.ymin], [e2.xmax, e2.ymax]];
  }
  readImageFormat(e2, r2) {
    const t2 = r2.supportedImageFormatTypes;
    return t2 && t2.indexOf("image/png") > -1 ? "image/png" : t2 && t2[0];
  }
  readSpatialReferenceFromItemOrDocument(e2, r2) {
    return new k$1(r2.spatialReferences[0]);
  }
  writeSpatialReferences(e2, r2) {
    const t2 = this.spatialReference && this.spatialReference.wkid;
    e2 && t2 ? (r2.spatialReferences = e2.filter((e3) => e3 !== t2), r2.spatialReferences.unshift(t2)) : r2.spatialReferences = e2;
  }
  readSublayersFromItemOrMap(e2, r2, t2) {
    return D(r2.layers, t2, r2.visibleLayers);
  }
  readSublayers(e2, r2, t2) {
    return D(r2.layers, t2);
  }
  writeSublayers(e2, r2, t2, s2) {
    r2.layers = [];
    const o2 = new Map(), i2 = e2.flatten(({ sublayers: e3 }) => e3 && e3.toArray()).toArray();
    i2.forEach((e3) => {
      typeof e3.parent.id == "number" && (o2.has(e3.parent.id) ? o2.get(e3.parent.id).push(e3.id) : o2.set(e3.parent.id, [e3.id]));
    }), i2.forEach((e3) => {
      const t3 = __spreadValues({ sublayer: e3 }, s2), i3 = e3.write({ parentLayerId: typeof e3.parent.id == "number" ? e3.parent.id : -1 }, t3);
      if (o2.has(e3.id) && (i3.sublayerIds = o2.get(e3.id)), !e3.sublayers && e3.name) {
        const s3 = e3.write({}, t3);
        delete s3.id, r2.layers.push(s3);
      }
    }), r2.visibleLayers = i2.filter((e3) => e3.visible && !e3.sublayers).map((e3) => e3.name);
  }
  createExportImageParameters(e2, r2, t2, s2) {
    const o2 = s2 && s2.pixelRatio || 1, i2 = r$1({ extent: e2, width: r2 }) * o2, a2 = new l$4({ layer: this, scale: i2 }), { xmin: n2, ymin: l$12, xmax: p2, ymax: m2, spatialReference: u2 } = e2, y2 = U(u2, this.spatialReferences), c2 = this.version === "1.3.0" && l(y2) ? `${l$12},${n2},${m2},${p2}` : `${n2},${l$12},${p2},${m2}`, d2 = a2.toJSON();
    return __spreadValues({ bbox: c2, [this.version === "1.3.0" ? "crs" : "srs"]: isNaN(y2) ? void 0 : "EPSG:" + y2 }, d2);
  }
  fetchImage(e2, r2, t2, s2) {
    return __async(this, null, function* () {
      var o2, i2;
      const a2 = this.mapUrl, n2 = this.createExportImageParameters(e2, r2, t2, s2);
      if (!n2.layers) {
        const e3 = document.createElement("canvas");
        return e3.width = r2, e3.height = t2, e3;
      }
      const l2 = s2 == null || (o2 = s2.timeExtent) == null ? void 0 : o2.start, p2 = s2 == null || (i2 = s2.timeExtent) == null ? void 0 : i2.end, m2 = l2 && p2 ? l2.getTime() === p2.getTime() ? R(l2) : `${R(l2)}/${R(p2)}` : void 0, u2 = { responseType: "image", query: this._mixCustomParameters(__spreadProps(__spreadValues({ width: r2, height: t2 }, n2), { time: m2 })), signal: s2 == null ? void 0 : s2.signal };
      return s2 != null && s2.timestamp && (u2.query = __spreadValues({ _ts: s2.timestamp }, u2.query)), U$2(a2, u2).then((e3) => e3.data);
    });
  }
  fetchFeatureInfo(e2, r2, t2, s2, o2) {
    const i2 = r$1({ extent: e2, width: r2 }), a2 = new l$4({ layer: this, scale: i2 }), n$1 = u$1(a2.visibleSublayers);
    if (!this.featureInfoUrl || !n$1)
      return null;
    const l2 = this.version === "1.3.0" ? { I: s2, J: o2 } : { x: s2, y: o2 }, p2 = __spreadValues({ query_layers: n$1, request: "GetFeatureInfo", info_format: this.featureInfoFormat, feature_count: 25, width: r2, height: t2 }, l2), u2 = __spreadValues(__spreadValues({}, this.createExportImageParameters(e2, r2, t2)), p2), y2 = this._mixCustomParameters(u2), c2 = Rt(this.featureInfoUrl, y2), d2 = document.createElement("iframe");
    d2.src = c2, d2.frameBorder = "0", d2.marginHeight = "0", d2.marginWidth = "0", d2.style.width = "100%", d2.setAttribute("sandbox", "");
    const f2 = new M$2({ title: this.title, content: d2 });
    return new n({ sourceLayer: this, popupTemplate: f2 });
  }
  findSublayerById(e2) {
    return this.allSublayers.find((r2) => r2.id === e2);
  }
  findSublayerByName(e2) {
    return this.allSublayers.find((r2) => r2.name === e2);
  }
  supportsSpatialReference(e2) {
    return S(this.url) || this.spatialReferences.some((r2) => {
      const t2 = r2 === 900913 ? k$1.WebMercator : new k$1({ wkid: r2 });
      return d$3(t2, e2);
    });
  }
  _fetchService(e2) {
    return __async(this, null, function* () {
      if (!this.resourceInfo) {
        this.parsedUrl.query && this.parsedUrl.query.service && (this.parsedUrl.query.SERVICE = this.parsedUrl.query.service, delete this.parsedUrl.query.service), this.parsedUrl.query && this.parsedUrl.query.request && (this.parsedUrl.query.REQUEST = this.parsedUrl.query.request, delete this.parsedUrl.query.request);
        const r2 = yield U$2(this.parsedUrl.path, { query: __spreadValues(__spreadValues({ SERVICE: "WMS", REQUEST: "GetCapabilities" }, this.parsedUrl.query), this.customParameters), responseType: "xml", signal: e2 });
        this.resourceInfo = o(r2.data);
      }
      if (this.parsedUrl) {
        const e3 = new $(this.parsedUrl.path);
        e3.scheme !== "https" || e3.port && e3.port !== "443" || s$3.request.httpsDomains.indexOf(e3.host) !== -1 || s$3.request.httpsDomains.push(e3.host);
      }
      this.read(this.resourceInfo, { origin: "service" });
    });
  }
  _mixCustomParameters(e2) {
    if (!this.customLayerParameters && !this.customParameters)
      return e2;
    const r2 = __spreadValues(__spreadValues({}, this.customParameters), this.customLayerParameters);
    for (const t2 in r2)
      e2[t2.toLowerCase()] = r2[t2];
    return e2;
  }
};
function A(e2, r2) {
  return e2.some((e3) => {
    for (const t2 in e3)
      if (p$1(e3, t2, null, r2))
        return true;
    return false;
  });
}
function D(e2, t2, s2) {
  const o2 = new Map();
  e2.every((e3) => e3.id == null) && (e2 = y$3(e2)).forEach((e3, r2) => e3.id = r2);
  for (const r2 of e2) {
    const e3 = new h();
    e3.read(r2, t2), (s2 == null ? void 0 : s2.indexOf(e3.name)) === -1 && (e3.visible = false), o2.set(e3.id, e3);
  }
  const i2 = [];
  for (const r2 of e2) {
    const e3 = o2.get(r2.id);
    if (r2.parentLayerId != null && r2.parentLayerId >= 0) {
      const t3 = o2.get(r2.parentLayerId);
      t3.sublayers || (t3.sublayers = new L$1()), t3.sublayers.unshift(e3);
    } else
      i2.unshift(e3);
  }
  return i2;
}
e([y$2({ readOnly: true })], k.prototype, "allSublayers", void 0), e([y$2({ json: { type: Object, write: true } })], k.prototype, "customParameters", void 0), e([y$2({ json: { type: Object, write: true } })], k.prototype, "customLayerParameters", void 0), e([y$2({ type: String, json: { write: true } })], k.prototype, "copyright", void 0), e([y$2()], k.prototype, "description", void 0), e([y$2({ readOnly: true })], k.prototype, "dimensions", void 0), e([y$2({ json: { type: [[Number]], read: { source: "extent" }, write: { target: "extent" }, origins: { service: { read: { source: "extent" } } } } })], k.prototype, "fullExtent", void 0), e([e$1(["web-document", "portal-item"], "fullExtent", ["extent"])], k.prototype, "readFullExtentFromItemOrMap", null), e([o$2(["web-document", "portal-item"], "fullExtent", { extent: { type: [[Number]] } })], k.prototype, "writeFullExtent", null), e([y$2()], k.prototype, "fullExtents", void 0), e([y$2({ type: String, json: { write: { ignoreOrigin: true } } })], k.prototype, "featureInfoFormat", void 0), e([y$2({ type: String, json: { write: { ignoreOrigin: true } } })], k.prototype, "featureInfoUrl", void 0), e([y$2({ type: String, json: { origins: { "web-document": { default: "image/png", type: B.jsonValues, read: { reader: B.read, source: "format" }, write: { writer: B.write, target: "format" } } } } })], k.prototype, "imageFormat", void 0), e([e$1("imageFormat", ["supportedImageFormatTypes"])], k.prototype, "readImageFormat", null), e([y$2({ type: Number, json: { read: { source: "maxHeight" }, write: { target: "maxHeight" } } })], k.prototype, "imageMaxHeight", void 0), e([y$2({ type: Number, json: { read: { source: "maxWidth" }, write: { target: "maxWidth" } } })], k.prototype, "imageMaxWidth", void 0), e([y$2()], k.prototype, "imageTransparency", void 0), e([y$2(d$4)], k.prototype, "legendEnabled", void 0), e([y$2({ type: ["show", "hide", "hide-children"] })], k.prototype, "listMode", void 0), e([y$2({ type: String, json: { write: { ignoreOrigin: true } } })], k.prototype, "mapUrl", void 0), e([y$2({ type: Boolean, json: { read: false, write: { enabled: true, overridePolicy: () => ({ enabled: false }) } } })], k.prototype, "isReference", void 0), e([y$2({ type: ["WMS"] })], k.prototype, "operationalLayerType", void 0), e([y$2({ type: k$1, json: { origins: { service: { read: { source: "extent.spatialReference" } } }, write: false } })], k.prototype, "spatialReference", void 0), e([e$1(["web-document", "portal-item"], "spatialReference", ["spatialReferences"])], k.prototype, "readSpatialReferenceFromItemOrDocument", null), e([y$2({ type: [N$1], json: { read: { source: "spatialReferences" }, write: { ignoreOrigin: true } } })], k.prototype, "spatialReferences", void 0), e([o$2(["web-document", "portal-item"], "spatialReferences")], k.prototype, "writeSpatialReferences", null), e([y$2({ type: L$1.ofType(h), json: { write: { target: "layers", overridePolicy(e2, r2, t2) {
  if (A(this.allSublayers, t2))
    return { ignoreOrigin: true };
} } } })], k.prototype, "sublayers", void 0), e([e$1(["web-document", "portal-item"], "sublayers", ["layers", "visibleLayers"])], k.prototype, "readSublayersFromItemOrMap", null), e([e$1("service", "sublayers", ["layers"])], k.prototype, "readSublayers", null), e([o$2("sublayers", { layers: { type: [h] }, visibleLayers: { type: [String] } })], k.prototype, "writeSublayers", null), e([y$2({ json: { read: false }, readOnly: true, value: "wms" })], k.prototype, "type", void 0), e([y$2(f$2)], k.prototype, "url", void 0), e([y$2({ type: String, json: { write: { ignoreOrigin: true } } })], k.prototype, "version", void 0), k = e([i("esri.layers.WMSLayer")], k);
var G = k;
export default G;
