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
import { ae as e, af as y$1, cr as M$1, eP as x$2, ag as i$1, dA as a$1, dQ as e$1, c_ as L, iJ as r, iK as u$1, aa as s$1, _ as j, bF as k, gR as t$1, gT as o, gS as s$2, dY as l$1, dZ as u$2, d_ as l$2, e1 as b$1, b3 as u$3, dI as t$2, aj as U, bT as y$2, dD as U$1, c4 as o$1 } from "./vendor.74d5941c.js";
import { a as a$2, x as x$3 } from "./WebTileLayer.0a77deda.js";
var p$2;
let l = p$2 = class extends a$1 {
  constructor(t2) {
    super(t2), this.fullExtent = null, this.id = null, this.tileInfo = null;
  }
  clone() {
    const t2 = new p$2();
    return this.hasOwnProperty("fullExtent") && (t2.fullExtent = this.fullExtent && this.fullExtent.clone()), this.hasOwnProperty("id") && (t2.id = this.id), this.hasOwnProperty("tileInfo") && (t2.tileInfo = this.tileInfo && this.tileInfo.clone()), t2;
  }
};
e([y$1({ type: M$1, json: { read: { source: "fullExtent" } } })], l.prototype, "fullExtent", void 0), e([y$1({ type: String, json: { read: { source: "id" } } })], l.prototype, "id", void 0), e([y$1({ type: x$2, json: { read: { source: "tileInfo" } } })], l.prototype, "tileInfo", void 0), l = p$2 = e([i$1("esri.layer.support.TileMatrixSet")], l);
var n$1 = l;
var t;
let i = t = class extends a$1 {
  constructor(r2) {
    super(r2), this.id = null, this.title = null, this.description = null, this.legendUrl = null;
  }
  clone() {
    const r2 = new t();
    return this.hasOwnProperty("description") && (r2.description = this.description), this.hasOwnProperty("id") && (r2.id = this.id), this.hasOwnProperty("isDefault") && (r2.isDefault = this.isDefault), this.hasOwnProperty("keywords") && (r2.keywords = this.keywords && this.keywords.slice()), this.hasOwnProperty("legendUrl") && (r2.legendUrl = this.legendUrl), this.hasOwnProperty("title") && (r2.title = this.title), r2;
  }
};
e([y$1({ json: { read: { source: "id" } } })], i.prototype, "id", void 0), e([y$1({ json: { read: { source: "title" } } })], i.prototype, "title", void 0), e([y$1({ json: { read: { source: "abstract" } } })], i.prototype, "description", void 0), e([y$1({ json: { read: { source: "legendUrl" } } })], i.prototype, "legendUrl", void 0), e([y$1({ json: { read: { source: "isDefault" } } })], i.prototype, "isDefault", void 0), e([y$1({ json: { read: { source: "keywords" } } })], i.prototype, "keywords", void 0), i = t = e([i$1("esri.layer.support.WMTSStyle")], i);
var p$1 = i;
var n;
let m$1 = n = class extends a$1 {
  constructor(t2) {
    super(t2), this.fullExtent = null, this.imageFormats = null, this.id = null, this.layer = null, this.styles = null, this.tileMatrixSetId = null, this.tileMatrixSets = null;
  }
  get description() {
    return this._get("description");
  }
  set description(t2) {
    this._set("description", t2);
  }
  readFullExtent(t2, e2) {
    return (t2 = e2.fullExtent) ? M$1.fromJSON(t2) : null;
  }
  get imageFormat() {
    let t2 = this._get("imageFormat");
    return t2 || (t2 = this.imageFormats && this.imageFormats.length ? this.imageFormats[0] : ""), t2;
  }
  set imageFormat(t2) {
    const e2 = this.imageFormats;
    t2 && (t2.indexOf("image/") > -1 || e2 && e2.indexOf(t2) === -1) && (t2.indexOf("image/") === -1 && (t2 = "image/" + t2), e2 && e2.indexOf(t2) === -1) ? console.error("The layer doesn't support the format of " + t2) : this._set("imageFormat", t2);
  }
  get styleId() {
    let t2 = this._get("styleId");
    return t2 || (t2 = this.styles && this.styles.length ? this.styles.getItemAt(0).id : ""), t2;
  }
  set styleId(t2) {
    this._set("styleId", t2);
  }
  get title() {
    return this._get("title");
  }
  set title(t2) {
    this._set("title", t2);
  }
  get tileMatrixSet() {
    return this.tileMatrixSets ? this.tileMatrixSets.find((t2) => t2.id === this.tileMatrixSetId) : null;
  }
  clone() {
    const t2 = new n();
    return this.hasOwnProperty("description") && (t2.description = this.description), this.hasOwnProperty("imageFormats") && (t2.imageFormats = this.imageFormats && this.imageFormats.slice()), this.hasOwnProperty("imageFormat") && (t2.imageFormat = this.imageFormat), this.hasOwnProperty("fullExtent") && (t2.fullExtent = this.fullExtent && this.fullExtent.clone()), this.hasOwnProperty("id") && (t2.id = this.id), this.hasOwnProperty("layer") && (t2.layer = this.layer), this.hasOwnProperty("styleId") && (t2.styleId = this.styleId), this.hasOwnProperty("styles") && (t2.styles = this.styles && this.styles.clone()), this.hasOwnProperty("tileMatrixSetId") && (t2.tileMatrixSetId = this.tileMatrixSetId), this.hasOwnProperty("tileMatrixSets") && (t2.tileMatrixSets = this.tileMatrixSets.clone()), this.hasOwnProperty("title") && (t2.title = this.title), t2;
  }
};
e([y$1()], m$1.prototype, "description", null), e([y$1()], m$1.prototype, "fullExtent", void 0), e([e$1("fullExtent", ["fullExtent"])], m$1.prototype, "readFullExtent", null), e([y$1()], m$1.prototype, "imageFormat", null), e([y$1({ json: { read: { source: "formats" } } })], m$1.prototype, "imageFormats", void 0), e([y$1()], m$1.prototype, "id", void 0), e([y$1()], m$1.prototype, "layer", void 0), e([y$1()], m$1.prototype, "styleId", null), e([y$1({ type: L.ofType(p$1), json: { read: { source: "styles" } } })], m$1.prototype, "styles", void 0), e([y$1({ value: null, json: { write: { ignoreOrigin: true } } })], m$1.prototype, "title", null), e([y$1()], m$1.prototype, "tileMatrixSetId", void 0), e([y$1({ readOnly: true })], m$1.prototype, "tileMatrixSet", null), e([y$1({ type: L.ofType(n$1), json: { read: { source: "tileMatrixSets" } } })], m$1.prototype, "tileMatrixSets", void 0), m$1 = n = e([i$1("esri.layers.support.WMTSSublayer")], m$1);
var h$1 = m$1;
const s = 90.71428571428571, a = [[3819, 3819], [3821, 3824], [3889, 3889], [3906, 3906], [4001, 4025], [4027, 4036], [4039, 4047], [4052, 4055], [4074, 4075], [4080, 4081], [4120, 4176], [4178, 4185], [4188, 4216], [4218, 4289], [4291, 4304], [4306, 4319], [4322, 4326], [4463, 4463], [4470, 4470], [4475, 4475], [4483, 4483], [4490, 4490], [4555, 4558], [4600, 4646], [4657, 4765], [4801, 4811], [4813, 4821], [4823, 4824], [4901, 4904], [5013, 5013], [5132, 5132], [5228, 5229], [5233, 5233], [5246, 5246], [5252, 5252], [5264, 5264], [5324, 5340], [5354, 5354], [5360, 5360], [5365, 5365], [5370, 5373], [5381, 5381], [5393, 5393], [5451, 5451], [5464, 5464], [5467, 5467], [5489, 5489], [5524, 5524], [5527, 5527], [5546, 5546], [2044, 2045], [2081, 2083], [2085, 2086], [2093, 2093], [2096, 2098], [2105, 2132], [2169, 2170], [2176, 2180], [2193, 2193], [2200, 2200], [2206, 2212], [2319, 2319], [2320, 2462], [2523, 2549], [2551, 2735], [2738, 2758], [2935, 2941], [2953, 2953], [3006, 3030], [3034, 3035], [3038, 3051], [3058, 3059], [3068, 3068], [3114, 3118], [3126, 3138], [3150, 3151], [3300, 3301], [3328, 3335], [3346, 3346], [3350, 3352], [3366, 3366], [3389, 3390], [3416, 3417], [3833, 3841], [3844, 3850], [3854, 3854], [3873, 3885], [3907, 3910], [4026, 4026], [4037, 4038], [4417, 4417], [4434, 4434], [4491, 4554], [4839, 4839], [5048, 5048], [5105, 5130], [5253, 5259], [5269, 5275], [5343, 5349], [5479, 5482], [5518, 5519], [5520, 5520], [20004, 20032], [20064, 20092], [21413, 21423], [21473, 21483], [21896, 21899], [22171, 22177], [22181, 22187], [22191, 22197], [25884, 25884], [27205, 27232], [27391, 27398], [27492, 27492], [28402, 28432], [28462, 28492], [30161, 30179], [30800, 30800], [31251, 31259], [31275, 31279], [31281, 31290], [31466, 31700]];
function c(t2, i2) {
  var n2, r2;
  t2 = t2.replace(/ows:/gi, "");
  const l2 = new DOMParser().parseFromString(t2, "text/xml").documentElement, o2 = new Map(), s2 = new Map(), a2 = d("Contents", l2);
  if (!a2)
    throw new s$1("wmtslayer:wmts-capabilities-xml-is-not-valid");
  const c2 = d("OperationsMetadata", l2), u2 = c2 == null ? void 0 : c2.querySelector("[name='GetTile']"), p2 = u2 == null ? void 0 : u2.getElementsByTagName("Get"), m2 = p2 && Array.prototype.slice.call(p2), w2 = (n2 = (i2 == null || (r2 = i2.url) == null ? void 0 : r2.indexOf("https")) > -1) != null && n2;
  let T2, M2, y2 = i2.serviceMode, S2 = i2 && i2.url;
  if (m2 && m2.length && m2.some((e2) => {
    const t3 = d("Constraint", e2);
    return !t3 || x$1("AllowedValues", "Value", y2, t3) ? (S2 = e2.attributes[0].nodeValue, true) : (!t3 || x$1("AllowedValues", "Value", "RESTful", t3) || x$1("AllowedValues", "Value", "REST", t3) ? M2 = e2.attributes[0].nodeValue : t3 && !x$1("AllowedValues", "Value", "KVP", t3) || (T2 = e2.attributes[0].nodeValue), false);
  }), !S2)
    if (M2)
      S2 = M2, y2 = "RESTful";
    else if (T2)
      S2 = T2, y2 = "KVP";
    else {
      const e2 = d("ServiceMetadataURL", l2);
      S2 = e2 && e2.getAttribute("xlink:href");
    }
  const E2 = S2.indexOf("1.0.0/");
  E2 === -1 && y2 === "RESTful" ? S2 += "/" : E2 > -1 && (S2 = S2.substring(0, E2)), y2 === "KVP" && (S2 += E2 > -1 ? "" : "?"), w2 && (S2 = S2.replace(/^http:/i, "https:"));
  const V2 = g("ServiceIdentification>AccessConstraints", l2), b2 = f("Layer", a2), C2 = f("TileMatrixSet", a2);
  return { copyright: V2, layers: b2.map((e2) => {
    const t3 = g("Identifier", e2);
    return o2.set(t3, e2), h(t3, e2, C2, w2);
  }), tileUrl: S2, serviceMode: y2, layerMap: o2, dimensionMap: s2 };
}
function u(e2) {
  return e2.layers.forEach((e3) => {
    e3.tileMatrixSets.forEach((e4) => {
      const t2 = e4.tileInfo;
      t2.dpi !== 96 && (t2.lods.forEach((i2) => {
        i2.scale = 96 * i2.scale / t2.dpi, i2.resolution = O(t2.spatialReference.wkid, i2.scale * s / 96, e4.id);
      }), t2.dpi = 96);
    });
  }), e2;
}
function p(e2) {
  return e2.nodeType === Node.ELEMENT_NODE;
}
function d(e2, t2) {
  for (let i2 = 0; i2 < t2.childNodes.length; i2++) {
    const n2 = t2.childNodes[i2];
    if (p(n2) && n2.nodeName === e2)
      return n2;
  }
  return null;
}
function f(e2, t2) {
  const i2 = [];
  for (let n2 = 0; n2 < t2.childNodes.length; n2++) {
    const r2 = t2.childNodes[n2];
    p(r2) && r2.nodeName === e2 && i2.push(r2);
  }
  return i2;
}
function m(e2, t2) {
  const i2 = [];
  for (let n2 = 0; n2 < t2.childNodes.length; n2++) {
    const r2 = t2.childNodes[n2];
    p(r2) && r2.nodeName === e2 && i2.push(r2);
  }
  return i2.map((e3) => e3.textContent);
}
function g(e2, t2) {
  return e2.split(">").forEach((e3) => {
    t2 && (t2 = d(e3, t2));
  }), t2 && t2.textContent;
}
function x$1(e2, t2, i2, n2) {
  let r2;
  return Array.prototype.slice.call(n2.childNodes).some((n3) => {
    if (n3.nodeName.indexOf(e2) > -1) {
      const e3 = d(t2, n3), l2 = e3 && e3.textContent;
      if (l2 === i2 || i2.split(":") && i2.split(":")[1] === l2)
        return r2 = n3, true;
    }
    return false;
  }), r2;
}
function h(e2, t2, i2, n2) {
  const r2 = g("Abstract", t2), l2 = m("Format", t2);
  return { id: e2, fullExtent: y(t2), description: r2, formats: l2, styles: S(t2, n2), title: g("Title", t2), tileMatrixSets: E$1(t2, i2) };
}
function w(e2, t2) {
  const i2 = [], n2 = e2.layerMap.get(t2);
  if (!n2)
    return;
  const r2 = f("ResourceURL", n2), l2 = f("Dimension", n2);
  let o2, s2, a2, c2;
  return l2.length && (o2 = g("Identifier", l2[0]), s2 = m("Default", l2[0]) || m("Value", l2[0])), l2.length > 1 && (a2 = g("Identifier", l2[1]), c2 = m("Default", l2[1]) || m("Value", l2[1])), e2.dimensionMap.set(t2, { dimensions: s2, dimensions2: c2 }), r2.forEach((e3) => {
    let t3 = e3.getAttribute("template");
    if (e3.getAttribute("resourceType") === "tile") {
      if (o2 && s2.length)
        if (t3.indexOf("{" + o2 + "}") > -1)
          t3 = t3.replace("{" + o2 + "}", "{dimensionValue}");
        else {
          const e4 = t3.toLowerCase().indexOf("{" + o2.toLowerCase() + "}");
          e4 > -1 && (t3 = t3.substring(0, e4) + "{dimensionValue}" + t3.substring(e4 + o2.length + 2));
        }
      if (a2 && c2.length)
        if (t3.indexOf("{" + a2 + "}") > -1)
          t3 = t3.replace("{" + a2 + "}", "{dimensionValue2}");
        else {
          const e4 = t3.toLowerCase().indexOf("{" + a2.toLowerCase() + "}");
          e4 > -1 && (t3 = t3.substring(0, e4) + "{dimensionValue2}" + t3.substring(e4 + a2.length + 2));
        }
      i2.push({ template: t3, format: e3.getAttribute("format"), resourceType: "tile" });
    }
  }), i2;
}
function T(e2, t2, i2, n2, r2, l2, o2, s2) {
  const { dimensionMap: a2 } = e2, c2 = w(e2, t2), u2 = a2.get(t2).dimensions && a2.get(t2).dimensions[0], p2 = a2.get(t2).dimensions2 && a2.get(t2).dimensions2[0];
  let d2 = "";
  if (c2 && c2.length > 0) {
    let e3 = null;
    c2.some((t3) => t3.format === n2 && (e3 = t3, true)), e3 || (e3 = c2[o2 % c2.length]), d2 = e3.template.replace(/\{Style\}/gi, r2).replace(/\{TileMatrixSet\}/gi, i2).replace(/\{TileMatrix\}/gi, l2).replace(/\{TileRow\}/gi, "" + o2).replace(/\{TileCol\}/gi, "" + s2).replace(/\{dimensionValue\}/gi, u2).replace(/\{dimensionValue2\}/gi, p2);
  }
  return d2;
}
function M(e2, t2, i2, n2) {
  const { dimensionMap: r2 } = e2, l2 = w(e2, t2);
  let o2 = "";
  if (l2 && l2.length > 0) {
    const e3 = r2.get(t2).dimensions && r2.get(t2).dimensions[0], s2 = r2.get(t2).dimensions2 && r2.get(t2).dimensions2[0];
    o2 = l2[0].template, o2.indexOf(".xxx") === o2.length - 4 && (o2 = o2.slice(0, o2.length - 4)), o2 = o2.replace(/\{Style\}/gi, n2), o2 = o2.replace(/\{TileMatrixSet\}/gi, i2), o2 = o2.replace(/\{TileMatrix\}/gi, "{level}"), o2 = o2.replace(/\{TileRow\}/gi, "{row}"), o2 = o2.replace(/\{TileCol\}/gi, "{col}"), o2 = o2.replace(/\{dimensionValue\}/gi, e3), o2 = o2.replace(/\{dimensionValue2\}/gi, s2);
  }
  return o2;
}
function y(e2) {
  const t2 = d("WGS84BoundingBox", e2), i2 = t2 ? g("LowerCorner", t2).split(" ") : ["-180", "-90"], n2 = t2 ? g("UpperCorner", t2).split(" ") : ["180", "90"];
  return { xmin: parseFloat(i2[0]), ymin: parseFloat(i2[1]), xmax: parseFloat(n2[0]), ymax: parseFloat(n2[1]), spatialReference: { wkid: 4326 } };
}
function S(e2, t2) {
  return f("Style", e2).map((e3) => {
    const i2 = d("LegendURL", e3), n2 = d("Keywords", e3), r2 = n2 && m("Keyword", n2);
    let l2 = i2 && i2.getAttribute("xlink:href");
    t2 && (l2 = l2 && l2.replace(/^http:/i, "https:"));
    return { abstract: g("Abstract", e3), id: g("Identifier", e3), isDefault: e3.getAttribute("isDefault") === "true", keywords: r2, legendUrl: l2, title: g("Title", e3) };
  });
}
function E$1(e2, t2) {
  return f("TileMatrixSetLink", e2).map((e3) => d("TileMatrixSet", e3).textContent).map((i2) => V(i2, e2, t2));
}
function V(e2, t2, i2) {
  const n2 = m("TileMatrix", x$1("TileMatrixSetLink", "TileMatrixSet", e2, t2)), r2 = i2.find((t3) => {
    const i3 = d("Identifier", t3), n3 = i3 && i3.textContent;
    return !!(n3 === e2 || e2.split(":") && e2.split(":")[1] === n3);
  }), l2 = b(r2), s2 = l2.spatialReference, a2 = s2.wkid, c2 = d("TileMatrix", r2), u2 = [parseInt(g("TileWidth", c2), 10), parseInt(g("TileHeight", c2), 10)], p2 = [];
  if (n2.length)
    n2.forEach((t3, i3) => {
      const n3 = x$1("TileMatrix", "Identifier", t3, r2);
      p2.push(N(n3, a2, i3, e2));
    });
  else {
    f("TileMatrix", r2).forEach((t3, i3) => {
      p2.push(N(t3, a2, i3, e2));
    });
  }
  const h2 = C$1(r2, l2, u2, p2[0]);
  return { id: e2, fullExtent: h2.toJSON(), tileInfo: new x$2({ dpi: 96, spatialReference: s2, size: u2, origin: l2, lods: p2 }).toJSON() };
}
function b(e2) {
  let t2 = g("SupportedCRS", e2);
  t2 && (t2 = t2.toLowerCase());
  let r2 = parseInt(t2.split(":").pop(), 10);
  r2 !== 900913 && r2 !== 3857 || (r2 = 102100);
  let l2 = false;
  t2.indexOf("crs84") > -1 || t2.indexOf("crs:84") > -1 ? (r2 = 4326, l2 = true) : t2.indexOf("crs83") > -1 || t2.indexOf("crs:83") > -1 ? (r2 = 4269, l2 = true) : (t2.indexOf("crs27") > -1 || t2.indexOf("crs:27") > -1) && (r2 = 4267, l2 = true);
  const o2 = new k({ wkid: r2 }), s2 = g("TopLeftCorner", d("TileMatrix", e2)).split(" "), c2 = s2[0].split("E").map((e3) => Number(e3)), u2 = s2[1].split("E").map((e3) => Number(e3));
  let p2, f2 = c2[0], m2 = u2[0];
  c2.length > 1 && (f2 = c2[0] * __pow(10, c2[1])), u2.length > 1 && (m2 = u2[0] * __pow(10, u2[1]));
  const x2 = l2 && r2 === 4326 && f2 === 90 && m2 === -180;
  return a.some((e3, i2) => {
    const s3 = Number(t2.split(":").pop());
    return s3 >= e3[0] && s3 <= e3[1] || r2 === 4326 && (!l2 || x2) ? (p2 = new j(m2, f2, o2), true) : (i2 === a.length - 1 && (p2 = new j(f2, m2, o2)), false);
  }), p2;
}
function C$1(e2, t2, i2, n2) {
  const l2 = d("BoundingBox", e2);
  let o2, s2, a2, c2, u2, p2;
  if (l2 && (o2 = g("LowerCorner", l2).split(" "), s2 = g("UpperCorner", l2).split(" ")), o2 && o2.length > 1 && s2 && s2.length > 1)
    a2 = parseFloat(o2[0]), u2 = parseFloat(o2[1]), c2 = parseFloat(s2[0]), p2 = parseFloat(s2[1]);
  else {
    const r2 = d("TileMatrix", e2), l3 = parseFloat(g("MatrixWidth", r2)), o3 = parseFloat(g("MatrixHeight", r2));
    a2 = t2.x, p2 = t2.y, c2 = a2 + l3 * i2[0] * n2.resolution, u2 = p2 - o3 * i2[1] * n2.resolution;
  }
  return new M$1(a2, u2, c2, p2, t2.spatialReference);
}
function N(e2, t2, i2, n2) {
  const r2 = g("Identifier", e2), l2 = g("ScaleDenominator", e2).split("E").map((e3) => Number(e3));
  let o2;
  o2 = l2.length > 1 ? l2[0] * __pow(10, l2[1]) : l2[0];
  const a2 = O(t2, o2, n2);
  return o2 *= 96 / s, { level: i2, levelValue: r2, scale: o2, resolution: a2 };
}
function O(e2, i2, n2) {
  let r$1;
  return r$1 = r.hasOwnProperty(String(e2)) ? r.values[r[e2]] : n2 === "default028mm" ? 6370997 * Math.PI / 180 : u$1(e2).metersPerDegree, 7 * i2 / 25e3 / r$1;
}
const x = { "image/png": ".png", "image/png8": ".png", "image/png24": ".png", "image/png32": ".png", "image/jpg": ".jpg", "image/jpeg": ".jpeg", "image/gif": ".gif", "image/bmp": ".bmp", "image/tiff": ".tif", "image/jpgpng": "", "image/jpegpng": "", "image/unknown": "" }, E = new Set(["version", "service", "request", "layer", "style", "format", "tilematrixset", "tilematrix", "tilerow", "tilecol"]);
let _ = class extends t$1(o(s$2(l$1(u$2(l$2(b$1)))))) {
  constructor(...e2) {
    super(...e2), this._sublayersHandles = new u$3(), this.copyright = "", this.customParameters = null, this.customLayerParameters = null, this.fullExtent = null, this.operationalLayerType = "WebTiledLayer", this.resourceInfo = null, this.serviceMode = "RESTful", this.sublayers = null, this.type = "wmts", this.version = "1.0.0", this.watch("activeLayer", (e3, t2) => {
      t2 && (t2.layer = null), e3 && (e3.layer = this);
    }, true), this.watch("sublayers", (e3, t2) => {
      t2 && (t2.forEach((e4) => {
        e4.layer = null;
      }), this._sublayersHandles.removeAll(), this._sublayersHandles = null), e3 && (e3.forEach((e4) => {
        e4.layer = this;
      }), this._sublayersHandles || (this._sublayersHandles = new u$3()), this._sublayersHandles.add([e3.on("after-add", ({ item: e4 }) => {
        e4.layer = this;
      }), e3.on("after-remove", ({ item: e4 }) => {
        e4.layer = null;
      })]));
    }, true);
  }
  normalizeCtorArgs(e2, t2) {
    return typeof e2 == "string" ? __spreadValues({ url: e2 }, t2) : e2;
  }
  load(e2) {
    if (this.serviceMode === "KVP" || this.serviceMode === "RESTful")
      return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["WMTS"] }, e2).then(() => this._fetchService(e2)).catch((e3) => {
        throw new s$1("wmtslayer:unsupported-service-data", "Invalid response from the WMTS service.", { error: e3 });
      })), Promise.resolve(this);
    console.error("WMTS mode could only be 'KVP' or 'RESTful'");
  }
  get activeLayer() {
    return this._get("activeLayer");
  }
  set activeLayer(e2) {
    this._set("activeLayer", e2);
  }
  readActiveLayerFromService(e2, t2, r2) {
    let s2;
    return this.activeLayer ? t2.layers.some((e3) => e3.id === this.activeLayer.id && (s2 = e3, true)) : (this.activeLayer = new h$1(), s2 = t2.layers[0]), this.activeLayer.read(s2, r2), this.activeLayer;
  }
  readActiveLayerFromItemOrWebDoc(e2, t2) {
    const { templateUrl: r2, wmtsInfo: s2 } = t2, i2 = r2 ? this._getLowerCasedUrlParams(r2) : null, a2 = s2 && s2.layerIdentifier;
    let o2 = null;
    const l2 = s2 && s2.tileMatrixSet;
    l2 && (Array.isArray(l2) ? l2.length && (o2 = l2[0]) : o2 = l2);
    const n2 = i2 && i2.format, m2 = i2 && i2.style;
    return new h$1({ id: a2, imageFormat: n2, styleId: m2, tileMatrixSetId: o2 });
  }
  writeActiveLayer(e2, t2, s2, i2) {
    const a2 = this.activeLayer;
    t2.templateUrl = this.getUrlTemplate(a2.id, a2.tileMatrixSetId, a2.imageFormat, a2.styleId);
    const o2 = t$2("tileMatrixSet.tileInfo", a2);
    t2.tileInfo = o2 ? o2.toJSON(i2) : null, t2.wmtsInfo = __spreadProps(__spreadValues({}, t2.wmtsInfo), { layerIdentifier: a2.id, tileMatrixSet: a2.tileMatrixSetId });
  }
  readCustomParameters(e2, t2) {
    const r2 = t2.wmtsInfo;
    return r2 ? this._mergeParams(r2.customParameters, r2.url) : null;
  }
  get fullExtents() {
    const e2 = [];
    return this.activeLayer.tileMatrixSets.forEach((t2) => {
      t2.fullExtent && e2.push(t2.fullExtent);
    }), e2;
  }
  readServiceMode(e2, t2) {
    return t2.templateUrl.indexOf("?") > -1 ? "KVP" : "RESTful";
  }
  readSublayersFromService(e2, t2, r2) {
    return C(t2.layers, r2);
  }
  get supportedSpatialReferences() {
    return this.activeLayer.tileMatrixSets.map((e2) => e2.tileInfo.spatialReference).toArray();
  }
  get title() {
    var e2, t2;
    return (e2 = (t2 = this.activeLayer) == null ? void 0 : t2.title) != null ? e2 : "Layer";
  }
  set title(e2) {
    e2 ? this._override("title", e2) : this._clearOverride("title");
  }
  get url() {
    return this._get("url");
  }
  set url(e2) {
    e2 && e2.substr(-1) === "/" ? this._set("url", e2.slice(0, -1)) : this._set("url", e2);
  }
  createWebTileLayer(e2) {
    const t2 = this.getUrlTemplate(this.activeLayer.id, this.activeLayer.tileMatrixSetId, this.activeLayer.imageFormat, this.activeLayer.styleId), r2 = this._getTileMatrixSetById(e2.tileMatrixSetId).tileInfo, s2 = e2.fullExtent, i2 = new a$2({ layerIdentifier: e2.id, tileMatrixSet: e2.tileMatrixSetId, url: this.url });
    return this.customLayerParameters && (i2.customLayerParameters = this.customLayerParameters), this.customParameters && (i2.customParameters = this.customParameters), new x$3({ fullExtent: s2, urlTemplate: t2, tileInfo: r2, wmtsInfo: i2 });
  }
  fetchTile(e2, t2, r2) {
    const s2 = this.getTileUrl(e2, t2, r2);
    return U(s2, { responseType: "image" }).then((e3) => e3.data);
  }
  findSublayerById(e2) {
    return this.sublayers.find((t2) => t2.id === e2);
  }
  getTileUrl(e2, t2, r2) {
    const s2 = this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId).tileInfo.lods[e2], i2 = s2 ? s2.levelValue ? s2.levelValue : `${s2.level}` : `${e2}`;
    let a2 = this.resourceInfo ? "" : T({ dimensionMap: this.dimensionMap, layerMap: this.layerMap }, this.activeLayer.id, this.activeLayer.tileMatrixSetId, this.activeLayer.imageFormat, this.activeLayer.styleId, i2, t2, r2);
    if (!a2) {
      a2 = this.getUrlTemplate(this.activeLayer.id, this.activeLayer.tileMatrixSetId, this.activeLayer.imageFormat, this.activeLayer.styleId).replace(/\{level\}/gi, i2).replace(/\{row\}/gi, `${t2}`).replace(/\{col\}/gi, `${r2}`);
    }
    return a2 = this._appendCustomLayerParameters(a2), a2;
  }
  getUrlTemplate(e2, t2, r2, s2) {
    if (!this.resourceInfo) {
      const r3 = M({ dimensionMap: this.dimensionMap, layerMap: this.layerMap }, e2, t2, s2);
      if (r3)
        return r3;
    }
    if (this.serviceMode === "KVP")
      return this.url + "?SERVICE=WMTS&VERSION=" + this.version + "&REQUEST=GetTile&LAYER=" + e2 + "&STYLE=" + s2 + "&FORMAT=" + r2 + "&TILEMATRIXSET=" + t2 + "&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";
    if (this.serviceMode === "RESTful") {
      let i2 = "";
      return x[r2.toLowerCase()] && (i2 = x[r2.toLowerCase()]), this.url + e2 + "/" + s2 + "/" + t2 + "/{level}/{row}/{col}" + i2;
    }
    return "";
  }
  _fetchService(e2) {
    return __async(this, null, function* () {
      let t2;
      if (this.resourceInfo)
        this.resourceInfo.serviceMode === "KVP" && (this.url += this.url.indexOf("?") > -1 ? "" : "?"), t2 = { ssl: false, data: this.resourceInfo };
      else
        try {
          t2 = yield this._getCapabilities(this.serviceMode, e2);
        } catch (e3) {
          const s2 = this.serviceMode === "KVP" ? "RESTful" : "KVP";
          try {
            t2 = yield this._getCapabilities(s2, e2), this.serviceMode = s2;
          } catch (r2) {
            throw new s$1("wmtslayer:unsupported-service-data", "Services does not support RESTful or KVP service modes.", { error: r2 });
          }
        }
      this.resourceInfo ? t2.data = u(t2.data) : t2.data = c(t2.data, { serviceMode: this.serviceMode, url: this.url }), t2.data && this.read(t2.data, { origin: "service" });
    });
  }
  _getCapabilities(e2, t2) {
    return __async(this, null, function* () {
      const r2 = this._getCapabilitiesUrl(e2);
      return yield U(r2, __spreadProps(__spreadValues({}, t2), { responseType: "text" }));
    });
  }
  _getTileMatrixSetById(e2) {
    return this.findSublayerById(this.activeLayer.id).tileMatrixSets.find((t2) => t2.id === e2);
  }
  _appendCustomParameters(e2) {
    if (this.customParameters)
      for (const t2 in this.customParameters)
        e2 += (e2.indexOf("?") === -1 ? "?" : "&") + t2 + "=" + encodeURIComponent(this.customParameters[t2]);
    return e2;
  }
  _appendCustomLayerParameters(e2) {
    if (this.customLayerParameters || this.customParameters) {
      const r2 = __spreadValues(__spreadValues({}, y$2(this.customParameters)), this.customLayerParameters);
      for (const t2 in r2)
        e2 += (e2.indexOf("?") === -1 ? "?" : "&") + t2 + "=" + encodeURIComponent(r2[t2]);
    }
    return e2;
  }
  _getCapabilitiesUrl(e2) {
    let t2;
    return this.url = this.url.split("?")[0], e2 === "KVP" ? t2 = this.url + "?request=GetCapabilities&service=WMTS&version=" + this.version : e2 === "RESTful" && (t2 = this.url + "/" + this.version + "/WMTSCapabilities.xml"), t2 = this._appendCustomParameters(t2), t2;
  }
  _getLowerCasedUrlParams(e2) {
    if (!e2)
      return null;
    const t2 = U$1(e2).query;
    if (!t2)
      return null;
    const r2 = {};
    return Object.keys(t2).forEach((e3) => {
      r2[e3.toLowerCase()] = t2[e3];
    }), r2;
  }
  _mergeParams(e2, r2) {
    const s2 = this._getLowerCasedUrlParams(r2);
    if (s2) {
      const r3 = Object.keys(s2);
      r3.length && (e2 = e2 ? y$2(e2) : {}, r3.forEach((t2) => {
        e2.hasOwnProperty(t2) || E.has(t2) || (e2[t2] = s2[t2]);
      }));
    }
    return e2;
  }
};
function C(e2, t2) {
  return e2.map((e3) => {
    const r2 = new h$1();
    return r2.read(e3, t2), r2;
  });
}
e([y$1()], _.prototype, "dimensionMap", void 0), e([y$1()], _.prototype, "layerMap", void 0), e([y$1({ type: h$1, json: { origins: { "web-document": { write: { ignoreOrigin: true } } } } })], _.prototype, "activeLayer", null), e([e$1("service", "activeLayer", ["layers"])], _.prototype, "readActiveLayerFromService", null), e([e$1(["web-document", "portal-item"], "activeLayer", ["wmtsInfo"])], _.prototype, "readActiveLayerFromItemOrWebDoc", null), e([o$1(["web-document", "portal-item"], "activeLayer", { templateUrl: { type: String }, tileInfo: { type: x$2 }, "wmtsInfo.layerIdentifier": { type: String }, "wmtsInfo.tileMatrixSet": { type: String } })], _.prototype, "writeActiveLayer", null), e([y$1({ type: String, value: "", json: { write: true } })], _.prototype, "copyright", void 0), e([y$1({ type: ["show", "hide"] })], _.prototype, "listMode", void 0), e([y$1({ json: { origins: { "web-document": { read: { source: ["wmtsInfo.customParameters", "wmtsInfo.url"] }, write: { target: "wmtsInfo.customParameters" } }, "portal-item": { read: { source: ["wmtsInfo.customParameters", "wmtsInfo.url"] }, write: { target: "wmtsInfo.customParameters" } } } } })], _.prototype, "customParameters", void 0), e([e$1("web-document", "customParameters"), e$1("portal-item", "customParameters")], _.prototype, "readCustomParameters", null), e([y$1({ json: { origins: { "web-document": { read: { source: "wmtsInfo.customLayerParameters" }, write: { target: "wmtsInfo.customLayerParameters" } }, "portal-item": { read: { source: "wmtsInfo.customLayerParameters" }, write: { target: "wmtsInfo.customLayerParameters" } } } } })], _.prototype, "customLayerParameters", void 0), e([y$1({ type: M$1, json: { write: { ignoreOrigin: true }, origins: { "web-document": { read: { source: "fullExtent" } }, "portal-item": { read: { source: "fullExtent" } } } } })], _.prototype, "fullExtent", void 0), e([y$1({ readOnly: true })], _.prototype, "fullExtents", null), e([y$1({ type: ["WebTiledLayer"] })], _.prototype, "operationalLayerType", void 0), e([y$1()], _.prototype, "resourceInfo", void 0), e([y$1()], _.prototype, "serviceMode", void 0), e([e$1(["portal-item", "web-document"], "serviceMode", ["templateUrl"])], _.prototype, "readServiceMode", null), e([y$1({ type: L.ofType(h$1) })], _.prototype, "sublayers", void 0), e([e$1("service", "sublayers", ["layers"])], _.prototype, "readSublayersFromService", null), e([y$1({ readOnly: true })], _.prototype, "supportedSpatialReferences", null), e([y$1({ json: { read: { source: "title" } } })], _.prototype, "title", null), e([y$1({ json: { read: false }, readOnly: true, value: "wmts" })], _.prototype, "type", void 0), e([y$1({ json: { origins: { service: { read: { source: "tileUrl" } }, "web-document": { read: { source: "wmtsInfo.url" }, write: { target: "wmtsInfo.url" } }, "portal-item": { read: { source: "wmtsInfo.url" }, write: { target: "wmtsInfo.url" } } } } })], _.prototype, "url", null), e([y$1()], _.prototype, "version", void 0), _ = e([i$1("esri.layers.WMTSLayer")], _);
var R = _;
export default R;
