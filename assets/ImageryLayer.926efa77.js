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
import { ae as e, af as y$6, dQ as e$1, c4 as o, eS as r, ag as i$2, dA as a$2, bT as y$7, c5 as j$2, hp as o$1, gV as N, eZ as c$4, _ as j$3, c9 as t$1, hq as o$2, dR as g$2, dS as r$1, aj as U, d0 as L, a5 as r$2, e5 as n$3, e2 as e$2, dT as p$4, es as i$3, cW as p$5, d5 as d$4, bi as d$5, a4 as n$4, e6 as y$8, cr as M$1, hr as y$9, bF as k, e0 as f$4, d3 as x, cE as e$3, dD as U$1, a0 as t$2, aa as s$1, hs as y$a, ht as q, ec as R$1, bG as x$1, d1 as n$5, hu as j$5, hv as u$5, gR as t$3, hw as f$5, gT as o$3, gS as s$2, dY as l$3, dZ as u$6, dX as p$8, d_ as l$4, e1 as b$1, gX as a$3, hj as d$7, g_ as c$5, M as M$2 } from "./vendor.74d5941c.js";
import { u as u$4 } from "./pixelUtils.5399eb4b.js";
import { n, a as n$2, d as d$6, i as i$4, p as p$7, k as k$1, V, j as j$4, K, b as n$6 } from "./rasterRendererHelper.c783c0d1.js";
import { f as f$3, n as n$1, p as p$6, N as N$1, T, D } from "./RasterSymbolizer.07b5503f.js";
import "./vectorFieldUtils.cdd2fa8a.js";
import "./_commonjsHelpers.f2a458db.js";
import "./LercCodec.7b2d60e1.js";
var a$1;
const c$3 = new Set(["raster", "raster2", "dem", "fillraster"]), p$3 = new Set(["rasters"]), m$3 = (t2) => t2 && t2.rasterFunction ? g$1.fromJSON(t2) : t2, f$2 = (t2) => t2 && t2 instanceof g$1 ? t2.toJSON() : t2, l$2 = (t2) => (t2 == null ? void 0 : t2.functionName) && !t2.declaredClass, y$5 = (t2) => l$2(t2) ? new g$1(t2) : t2;
var d$3;
!function(t2) {
  t2[t2.MOSAIC = 0] = "MOSAIC", t2[t2.GROUP = 1] = "GROUP", t2[t2.ITEM = 2] = "ITEM";
}(d$3 || (d$3 = {}));
const w$1 = (t2) => {
  if (t2 == null)
    return null;
  t2 = y$7(t2);
  const o2 = {};
  for (const e2 of Object.keys(t2))
    c$3.has(e2.toLowerCase()) ? o2[e2] = m$3(t2[e2]) : p$3.has(e2.toLowerCase()) && Array.isArray(t2[e2]) ? o2[e2] = t2[e2].map(m$3) : o2[e2] = t2[e2];
  return o2;
};
let g$1 = a$1 = class extends a$2 {
  constructor(t2) {
    super(t2), this.functionName = null, this.outputPixelType = "unknown", this.variableName = null, this.description = null, this.functionDefinition = null, this.thumbnail = null;
  }
  set functionArguments(t2) {
    if (t2) {
      const o2 = Object.keys(t2);
      if (o2.some((e2) => c$3.has(e2.toLowerCase()) && l$2(t2[e2])) || o2.some((e2) => p$3.has(e2.toLowerCase()) && Array.isArray(t2[e2]) && t2[e2].some((t3) => l$2(t3)))) {
        t2 = y$7(t2);
        for (const e2 of o2)
          c$3.has(e2.toLowerCase()) ? t2[e2] = y$5(t2[e2]) : p$3.has(e2.toLowerCase()) && Array.isArray(t2[e2]) && (t2[e2] = t2[e2].map((t3) => y$5(t3)));
      }
    }
    this._set("functionArguments", t2);
  }
  readFunctionArguments(t2, e2) {
    return t2 = e2.arguments || e2.rasterFunctionArguments, w$1(t2);
  }
  writeFunctionArguments(t2, e2, o2) {
    const r2 = {};
    for (const n2 of Object.keys(t2))
      c$3.has(n2.toLowerCase()) ? r2[n2] = f$2(t2[n2]) : p$3.has(n2.toLowerCase()) && Array.isArray(t2[n2]) ? r2[n2] = t2[n2].map(f$2) : r2[n2] = f$2(t2[n2]);
    this.functionDefinition ? e2.arguments = r2 : e2[o2] = r2;
  }
  readFunctionName(t2, e2) {
    const o2 = e2.rasterFunctionInfos, r2 = e2.name;
    return r2 || (o2 && o2.length && o2[0].name !== "None" ? o2[0].name : e2.rasterFunction);
  }
  writeFunctionName(t2, e2, o2) {
    this.functionDefinition ? e2.name = t2 : e2[o2] = t2;
  }
  readFunctionType(t2) {
    return d$3[t2];
  }
  writeFunctionType(t2, e2, o2) {
    e2[o2] = d$3[t2];
  }
  clone() {
    return new a$1({ functionName: this.functionName, functionArguments: y$7(this.functionArguments), outputPixelType: this.outputPixelType, variableName: this.variableName, description: this.description, functionType: this.functionType, functionDefinition: this.functionDefinition, thumbnail: this.thumbnail });
  }
};
e([y$6({ json: { type: Object, write: { target: "rasterFunctionArguments" } } })], g$1.prototype, "functionArguments", null), e([e$1("functionArguments", ["rasterFunctionArguments", "arguments"])], g$1.prototype, "readFunctionArguments", null), e([o("functionArguments")], g$1.prototype, "writeFunctionArguments", null), e([y$6({ json: { type: String, write: { target: "rasterFunction" } } })], g$1.prototype, "functionName", void 0), e([e$1("functionName", ["rasterFunction", "rasterFunctionInfos", "name"])], g$1.prototype, "readFunctionName", null), e([o("functionName")], g$1.prototype, "writeFunctionName", null), e([r({ C128: "c128", C64: "c64", F32: "f32", F64: "f64", S16: "s16", S32: "s32", S8: "s8", U1: "u1", U16: "u16", U2: "u2", U32: "u32", U4: "u4", U8: "u8", UNKNOWN: "unknown" }, { ignoreUnknown: false }), y$6({ json: { default: "unknown" } })], g$1.prototype, "outputPixelType", void 0), e([y$6({ type: String, json: { read: true, write: true } })], g$1.prototype, "variableName", void 0), e([y$6({ type: String, json: { read: true, write: true, origins: { "web-document": { read: false, write: false } } } })], g$1.prototype, "description", void 0), e([y$6({ json: { origins: { "web-document": { read: false, write: false } } } })], g$1.prototype, "functionType", void 0), e([e$1("functionType")], g$1.prototype, "readFunctionType", null), e([o("functionType")], g$1.prototype, "writeFunctionType", null), e([y$6({ type: Object, json: { read: { source: "function" }, write: { target: "function" }, origins: { "web-document": { read: false, write: false } } } })], g$1.prototype, "functionDefinition", void 0), e([y$6({ type: String, json: { read: true, write: true, origins: { "web-document": { read: false, write: false } } } })], g$1.prototype, "thumbnail", void 0), g$1 = a$1 = e([i$2("esri.layers.support.RasterFunction")], g$1);
var h$2 = g$1;
const i$1 = { u1: [0, 1], u2: [0, 3], u4: [0, 15], u8: [0, 255], s8: [-128, 127], u16: [0, 65535], s16: [-32768, 32767] }, s = { simple_scalar: "Simple Scalar", wind_barb: "Wind Barb", single_arrow: "Single Arrow", beaufort_kn: "Beaufort Wind (Knots)", beaufort_m: "Beaufort Wind (MetersPerSecond)", ocean_current_m: "Ocean Current (MetersPerSecond)", ocean_current_kn: "Ocean Current (Knots)" }, u$3 = new Set(["raster-stretch", "unique-value", "class-breaks", "raster-shaded-relief", "vector-field", "raster-colormap"]);
function l$1(e2) {
  return u$3.has(e2.type);
}
function m$2(t2, n2) {
  if (!t2 || !n2)
    return y$7(t2 || n2);
  const r2 = y$7(t2);
  if (n2.functionName.toLowerCase() !== "none") {
    p$2(r2.functionArguments).Raster = n2;
  }
  return r2;
}
function c$2(e2, t2) {
  switch (t2 = t2 || {}, e2.type) {
    case "raster-stretch":
      return h$1(e2, t2);
    case "class-breaks":
      return b(e2, t2);
    case "unique-value":
      return R(e2, t2);
    case "raster-colormap":
      return v(e2, t2);
    case "vector-field":
      return d$2(e2, t2);
    case "raster-shaded-relief":
      return g(e2, t2);
  }
}
function p$2(e2) {
  const t2 = e2.Raster;
  return t2 && t2.declaredClass === "esri.layers.support.RasterFunction" ? p$2(t2.functionArguments) : e2;
}
const f$1 = { none: 0, standardDeviation: 3, histogramEqualization: 4, minMax: 5, percentClip: 6, sigmoid: 9 };
function d$2(e2, n2) {
  const r2 = new h$2();
  r2.functionName = "VectorFieldRenderer";
  const { dataType: a2, bandProperties: i2 } = n2, u2 = a2 === "vector-uv";
  let l2, m2;
  i2 && i2.length === 2 && (l2 = i2.map((e3) => e3.BandName.toLowerCase()).indexOf("magnitude"), m2 = i2.map((e3) => e3.BandName.toLowerCase()).indexOf("direction")), l2 !== -1 && l2 !== null || (l2 = 0, m2 = 1);
  const c2 = e2.rotationType === "arithmetic" ? 1 : 2, p2 = e2.flowRepresentation === "flow-from" ? 0 : 1, f2 = e2.visualVariables ? e2.visualVariables.filter((e3) => e3.field === "Magnitude")[0] : new j$2(), d2 = { magnitudeBandID: l2, directionBandID: m2, isUVComponents: u2, referenceSystem: c2, massFlowAngleRepresentation: p2, symbolTileSize: 50, symbolTileSizeUnits: 100, calculationMethod: "Vector Average", symbologyName: s[e2.style.toLowerCase().replace("-", "_")], minimumMagnitude: f2.minDataValue, maximumMagnitude: f2.maxDataValue, minimumSymbolSize: f2.minSize, maximumSymbolSize: f2.maxSize };
  return r2.functionArguments = d2, r2;
}
function g(e2, t2) {
  if (t2.dataType !== "elevation")
    return new h$2();
  const r2 = new h$2();
  r2.functionName = "Hillshade";
  const a2 = e2.hillshadeType === "traditional" ? 0 : 1, i2 = e2.scalingType === "none" ? 1 : 3, s2 = { HillshadeType: a2, SlopeType: i2, ZFactor: e2.zFactor };
  return a2 === 0 && (s2.Azimuth = e2.azimuth, s2.Altitude = e2.altitude), i2 === 3 && (s2.PSPower = e2.pixelSizePower, s2.PSZFactor = e2.pixelSizeFactor), r2.functionArguments = s2, r2.variableName = "Raster", e2.colorRamp && (r2.functionName = "ShadedRelief", s2.Colormap = f$3(e2.colorRamp, 256)), r2;
}
function h$1(e2, t2) {
  const i2 = new h$2();
  i2.functionName = "Stretch";
  const s2 = f$1[n.toJSON(e2.stretchType)], u2 = "u8", l2 = { StretchType: s2, Statistics: A(e2.statistics), DRA: e2.dynamicRangeAdjustment, UseGamma: e2.useGamma, Gamma: e2.gamma, ComputeGamma: e2.computeGamma };
  if (e2.outputMin != null && (l2.Min = e2.outputMin), e2.outputMax != null && (l2.Max = e2.outputMax), s2 === f$1.standardDeviation ? (l2.NumberOfStandardDeviations = e2.numberOfStandardDeviations, i2.outputPixelType = u2) : s2 === f$1.percentClip ? (l2.MinPercent = e2.minPercent, l2.MaxPercent = e2.maxPercent, i2.outputPixelType = u2) : s2 === f$1.minMax ? i2.outputPixelType = u2 : s2 === f$1.sigmoid && (l2.SigmoidStrengthLevel = e2.sigmoidStrengthLevel), i2.functionArguments = l2, i2.variableName = "Raster", e2.colorRamp) {
    const a2 = e2.colorRamp, s3 = new h$2(), u3 = n$1(a2);
    return u3 ? s3.functionArguments = { colorRamp: u3 } : !t2.convertColorRampToColormap || a2.type !== "algorithmic" && a2.type !== "multipart" ? s3.functionArguments = { colorRamp: e2.colorRamp.toJSON() } : s3.functionArguments = { Colormap: f$3(a2, 256) }, s3.variableName = "Raster", s3.functionName = "Colormap", s3.functionArguments.Raster = i2, s3;
  }
  return i2;
}
function b(e2, t2) {
  const n2 = [], r2 = [], a2 = [], i2 = [], s2 = 1e-6, { pixelType: u2, rasterAttributeTable: l2 } = t2, m2 = l2 && l2.features, c2 = S$1(l2);
  if (m2 && Array.isArray(m2) && e2.classBreakInfos) {
    e2.classBreakInfos.forEach((t4, n4) => {
      const r3 = t4.symbol.color;
      let a3;
      r3.a && m2.forEach((o2) => {
        a3 = o2.attributes[e2.field], (a3 >= t4.minValue && a3 < t4.maxValue || n4 === e2.classBreakInfos.length - 1 && a3 >= t4.minValue) && i2.push([o2.attributes[c2], r3.r, r3.g, r3.b]);
      });
    });
    const t3 = u2 ? y$4(i2, u2) : i2, n3 = new h$2();
    return n3.functionName = "Colormap", n3.functionArguments = {}, n3.functionArguments.Colormap = t3, n3.variableName = "Raster", n3;
  }
  e2.classBreakInfos.forEach((e3, t3) => {
    const o2 = e3.symbol && e3.symbol.color;
    o2.a ? (t3 === 0 ? n2.push(e3.minValue, e3.maxValue + s2) : n2.push(e3.minValue + s2, e3.maxValue + s2), r2.push(t3), i2.push([t3, o2.r, o2.g, o2.b])) : a2.push(e3.minValue, e3.maxValue);
  });
  const p2 = u2 ? y$4(i2, u2) : i2, f2 = new h$2();
  f2.functionName = "Remap", f2.functionArguments = { InputRanges: n2, OutputValues: r2, NoDataRanges: a2 }, f2.variableName = "Raster";
  const d2 = new h$2();
  return d2.functionName = "Colormap", d2.functionArguments = { Colormap: p2, Raster: f2 }, d2;
}
function y$4(e2, t2) {
  const n2 = i$1[String(t2).toLowerCase()];
  return n2 && e2.push([Math.floor(n2[0] - 1), 0, 0, 0], [Math.ceil(n2[1] + 1), 0, 0, 0]), e2;
}
function S$1(e2) {
  if (!e2)
    return;
  const { fields: t2 } = e2, n2 = t2 && t2.find((e3) => e3 && e3.name && e3.name.toLowerCase() === "value");
  return n2 && n2.name;
}
function R(e2, t2) {
  const n2 = [], { pixelType: r2, rasterAttributeTable: a2 } = t2, i2 = a2 && a2.features, s2 = S$1(a2);
  let u2 = false;
  if (e2.uniqueValueInfos && e2.uniqueValueInfos.forEach((t3) => {
    const r3 = t3.symbol.color;
    r3.a && (e2.field !== s2 && i2 ? i2 && i2.forEach((a3) => {
      String(a3.attributes[e2.field]) === String(t3.value) && n2.push([a3.attributes[s2], r3.r, r3.g, r3.b]);
    }) : isNaN(+t3.value) ? u2 = true : n2.push([+t3.value, r3.r, r3.g, r3.b]));
  }), u2)
    return null;
  const l2 = r2 && n2.length > 0 ? y$4(n2, r2) : n2, m2 = new h$2();
  return m2.functionName = "Colormap", m2.functionArguments = {}, m2.functionArguments.Colormap = l2, m2.variableName = "Raster", m2;
}
function v(e2, t2) {
  const n2 = e2.extractColormap();
  if (!n2 || n2.length === 0)
    return;
  const { pixelType: r2 } = t2, a2 = r2 ? y$4(n2, r2) : n2, i2 = new h$2();
  return i2.functionName = "Colormap", i2.functionArguments = {}, i2.functionArguments.Colormap = a2, i2;
}
function A(e2) {
  const t2 = [];
  return e2.forEach((e3) => {
    const n2 = e3;
    if (Array.isArray(n2))
      t2.push(n2);
    else {
      if (n2.min == null || n2.max == null)
        return;
      const e4 = [n2.min, n2.max, n2.avg || 0, n2.stddev || 0];
      t2.push(e4);
    }
  }), t2;
}
var u$2;
const m$1 = o$1()({ MT_FIRST: "first", MT_LAST: "last", MT_MIN: "min", MT_MAX: "max", MT_MEAN: "mean", MT_BLEND: "blend", MT_SUM: "sum" }), h = o$1()({ esriMosaicNone: "none", esriMosaicCenter: "center", esriMosaicNadir: "nadir", esriMosaicViewpoint: "viewpoint", esriMosaicAttribute: "attribute", esriMosaicLockRaster: "lock-raster", esriMosaicNorthwest: "northwest", esriMosaicSeamline: "seamline" });
function M(e2) {
  let t2;
  switch (e2 ? e2.toLowerCase().replace("esrimosaic", "") : "") {
    case "byattribute":
    case "attribute":
      t2 = "esriMosaicAttribute";
      break;
    case "lockraster":
      t2 = "esriMosaicLockRaster";
      break;
    case "center":
      t2 = "esriMosaicCenter";
      break;
    case "northwest":
      t2 = "esriMosaicNorthwest";
      break;
    case "nadir":
      t2 = "esriMosaicNadir";
      break;
    case "viewpoint":
      t2 = "esriMosaicViewpoint";
      break;
    case "seamline":
      t2 = "esriMosaicSeamline";
      break;
    case "none":
    default:
      t2 = "esriMosaicNone";
  }
  return h.fromJSON(t2);
}
let w = u$2 = class extends a$2 {
  constructor(e2) {
    super(e2), this.ascending = true, this.itemRenderingRule = null, this.lockRasterIds = null, this.method = null, this.multidimensionalDefinition = null, this.objectIds = null, this.operation = null, this.sortField = null, this.sortValue = null, this.viewpoint = null, this.where = null;
  }
  readAscending(e2, t2) {
    return t2.ascending != null ? t2.ascending : t2.sortAscending == null || t2.sortAscending;
  }
  readMethod(e2, t2) {
    return M(t2.mosaicMethod || t2.defaultMosaicMethod);
  }
  readOperation(e2, t2) {
    const o2 = t2.mosaicOperation, r2 = t2.mosaicOperator && t2.mosaicOperator.toLowerCase(), i2 = o2 || (r2 ? m$1.toJSON(r2) : null);
    return m$1.fromJSON(i2) || "first";
  }
  castSortValue(e2) {
    return e2 == null || typeof e2 == "string" || typeof e2 == "number" ? e2 : `${e2}`;
  }
  clone() {
    return new u$2({ ascending: this.ascending, itemRenderingRule: y$7(this.itemRenderingRule), lockRasterIds: y$7(this.lockRasterIds), method: this.method, multidimensionalDefinition: y$7(this.multidimensionalDefinition), objectIds: y$7(this.objectIds), operation: this.operation, sortField: this.sortField, sortValue: this.sortValue, viewpoint: y$7(this.viewpoint), where: this.where });
  }
};
e([y$6({ type: Boolean, json: { write: true } })], w.prototype, "ascending", void 0), e([e$1("ascending", ["ascending", "sortAscending"])], w.prototype, "readAscending", null), e([y$6({ type: h$2, json: { write: true } })], w.prototype, "itemRenderingRule", void 0), e([y$6({ type: [N], json: { write: { overridePolicy() {
  return { enabled: this.method === "lock-raster" };
} } } })], w.prototype, "lockRasterIds", void 0), e([y$6({ type: String, json: { type: h.jsonValues, write: { target: "mosaicMethod", writer: h.write } } })], w.prototype, "method", void 0), e([e$1("method", ["mosaicMethod", "defaultMosaicMethod"])], w.prototype, "readMethod", null), e([y$6({ type: [n$2], json: { write: true } })], w.prototype, "multidimensionalDefinition", void 0), e([y$6({ type: [N], json: { name: "fids", write: true } })], w.prototype, "objectIds", void 0), e([y$6({ json: { type: m$1.jsonValues, read: { reader: m$1.read }, write: { target: "mosaicOperation", writer: m$1.write } } })], w.prototype, "operation", void 0), e([e$1("operation", ["mosaicOperation", "mosaicOperator"])], w.prototype, "readOperation", null), e([y$6({ type: String, json: { write: { overridePolicy() {
  return { enabled: this.method === "attribute" };
} } } })], w.prototype, "sortField", void 0), e([y$6({ type: [String, Number], json: { write: { allowNull: true, overridePolicy() {
  return { enabled: this.method === "attribute", allowNull: true };
} } } })], w.prototype, "sortValue", void 0), e([c$4("sortValue")], w.prototype, "castSortValue", null), e([y$6({ type: j$3, json: { write: true } })], w.prototype, "viewpoint", void 0), e([y$6({ type: String, json: { write: true } })], w.prototype, "where", void 0), w = u$2 = e([i$2("esri.layers.support.MosaicRule")], w);
var y$3 = w;
const y$2 = new t$1({ RSP_NearestNeighbor: "nearest", RSP_BilinearInterpolation: "bilinear", RSP_CubicConvolution: "cubic", RSP_Majority: "majority" }), u$1 = new t$1({ esriNoDataMatchAny: "any", esriNoDataMatchAll: "all" });
let d$1 = class extends a$2 {
  constructor() {
    super(...arguments), this.layer = null, this.adjustAspectRatio = void 0, this.bandIds = void 0, this.compression = void 0, this.compressionQuality = void 0, this.compressionTolerance = 0.01, this.format = null, this.interpolation = null, this.noData = null, this.noDataInterpretation = void 0, this.pixelType = void 0, this.lercVersion = 2;
  }
  writeAdjustAspectRatio(e2, r2, o2) {
    this.layer.version < 10.3 || (r2[o2] = e2);
  }
  writeCompressionQuality(e2, r2, o2) {
    this.format && this.format.toLowerCase().indexOf("jpg") > -1 && e2 != null && (r2[o2] = e2);
  }
  writeCompressionTolerance(e2, r2, o2) {
    this.format === "lerc" && e2 != null && (r2[o2] = e2);
  }
  writeLercVersion(e2, r2, o2) {
    this.format === "lerc" && this.layer.version >= 10.5 && (r2[o2] = e2);
  }
  get version() {
    const e2 = this.layer;
    return e2.commitProperty("bandIds"), e2.commitProperty("format"), e2.commitProperty("compressionQuality"), e2.commitProperty("compressionTolerance"), e2.commitProperty("interpolation"), e2.commitProperty("noData"), e2.commitProperty("noDataInterpretation"), e2.commitProperty("mosaicRule"), e2.commitProperty("renderingRule"), e2.commitProperty("adjustAspectRatio"), e2.commitProperty("pixelFilter"), e2.commitProperty("renderer"), e2.commitProperty("definitionExpression"), (this._get("version") || 0) + 1;
  }
  set version(e2) {
    this._set("version", e2);
  }
  get mosaicRule() {
    const e2 = this.layer;
    let r2 = e2.mosaicRule;
    const o2 = e2.definitionExpression;
    return r2 ? o2 && o2 !== r2.where && (r2 = r2.clone(), r2.where = o2) : o2 && (r2 = new y$3({ where: o2 })), r2;
  }
  get renderingRule() {
    const e2 = this.layer;
    let r2 = e2.renderingRule;
    const o2 = e2.pixelFilter, t2 = !e2.format || e2.format.indexOf("jpg") > -1 || e2.format.indexOf("png") > -1;
    return r2 = this._addResampleRasterFunction(r2), t2 && !o2 && (r2 = this.combineRendererWithRenderingRule()), r2;
  }
  combineRendererWithRenderingRule() {
    var e2;
    const r2 = this.layer, { rasterInfo: o2, renderingRule: t2, renderer: i2 } = r2;
    if (!i2 || !l$1(i2))
      return t2;
    return m$2(c$2(i2, { rasterAttributeTable: o2.attributeTable, pixelType: o2.pixelType, dataType: o2.dataType, bandProperties: (e2 = o2.keyProperties) == null ? void 0 : e2.BandProperties, convertColorRampToColormap: r2.version < 10.6 }), t2);
  }
  _addResampleRasterFunction(e2) {
    var r2;
    if (!(((r2 = this.layer.renderer) == null ? void 0 : r2.type) === "vector-field") || (e2 == null ? void 0 : e2.functionName) === "Resample")
      return e2;
    const o2 = this.layer.serviceDataType === "esriImageServiceDataTypeVector-UV" ? 7 : 10, t2 = new h$2({ functionName: "Resample", functionArguments: { ResamplingType: o2, InputCellSize: { x: this.layer.pixelSizeX, y: this.layer.pixelSizeY } } });
    return m$2(t2, e2);
  }
};
e([y$6()], d$1.prototype, "layer", void 0), e([y$6({ json: { write: true } })], d$1.prototype, "adjustAspectRatio", void 0), e([o("adjustAspectRatio")], d$1.prototype, "writeAdjustAspectRatio", null), e([y$6({ json: { write: true } }), o$2("layer.bandIds")], d$1.prototype, "bandIds", void 0), e([y$6({ json: { write: true } })], d$1.prototype, "compression", void 0), e([y$6({ json: { write: true } }), o$2("layer.compressionQuality")], d$1.prototype, "compressionQuality", void 0), e([o("compressionQuality")], d$1.prototype, "writeCompressionQuality", null), e([y$6({ json: { write: true } }), o$2("layer.compressionTolerance")], d$1.prototype, "compressionTolerance", void 0), e([o("compressionTolerance")], d$1.prototype, "writeCompressionTolerance", null), e([y$6({ json: { write: true } }), o$2("layer.format")], d$1.prototype, "format", void 0), e([y$6({ type: String, json: { read: { reader: y$2.read }, write: { writer: y$2.write } } }), o$2("layer.interpolation")], d$1.prototype, "interpolation", void 0), e([y$6({ json: { write: true } }), o$2("layer.noData")], d$1.prototype, "noData", void 0), e([y$6({ type: String, json: { read: { reader: u$1.read }, write: { writer: u$1.write } } }), o$2("layer.noDataInterpretation")], d$1.prototype, "noDataInterpretation", void 0), e([y$6({ json: { write: true } })], d$1.prototype, "pixelType", void 0), e([y$6({ json: { write: true } })], d$1.prototype, "lercVersion", void 0), e([o("lercVersion")], d$1.prototype, "writeLercVersion", null), e([y$6({ type: Number })], d$1.prototype, "version", null), e([y$6({ json: { write: true } })], d$1.prototype, "mosaicRule", null), e([y$6({ json: { write: true } })], d$1.prototype, "renderingRule", null), d$1 = e([i$2("esri.layers.mixins.ExportImageServiceParameters")], d$1);
let p$1 = class extends a$2 {
  constructor() {
    super(...arguments), this.catalogItemVisibilities = null, this.catalogItems = null, this.location = null, this.name = null, this.objectId = null, this.processedValues = null, this.properties = null, this.value = null;
  }
};
e([y$6({ json: { write: true } })], p$1.prototype, "catalogItemVisibilities", void 0), e([y$6({ type: g$2, json: { write: true } })], p$1.prototype, "catalogItems", void 0), e([y$6({ type: j$3, json: { write: true } })], p$1.prototype, "location", void 0), e([y$6({ json: { write: true } })], p$1.prototype, "name", void 0), e([y$6({ json: { write: true } })], p$1.prototype, "objectId", void 0), e([y$6({ json: { write: true } })], p$1.prototype, "processedValues", void 0), e([y$6({ json: { write: true } })], p$1.prototype, "properties", void 0), e([y$6({ json: { write: true } })], p$1.prototype, "value", void 0), p$1 = e([i$2("esri.tasks.support.ImageIdentifyResult")], p$1);
var l = p$1;
function i(t2) {
  const s2 = t2 == null ? void 0 : t2.time;
  if (s2 && (s2.start != null || s2.end != null)) {
    const o2 = [];
    s2.start != null && o2.push(s2.start), s2.end != null && o2.indexOf(s2.end) === -1 && o2.push(s2.end), t2.time = o2.join(",");
  }
}
function m(s2, a2, m2) {
  return __async(this, null, function* () {
    const u2 = r$1(s2), c2 = a2.geometry ? [a2.geometry] : [], f2 = yield L(c2), g2 = a2.toJSON();
    i(g2);
    const l2 = f2 && f2[0];
    r$2(l2) && (g2.geometry = l2.toJSON());
    const p2 = n$3(__spreadValues(__spreadProps(__spreadValues({}, u2.query), { f: "json" }), g2));
    return e$2(p2, m2);
  });
}
function u(t2, o2, r2) {
  return __async(this, null, function* () {
    const e2 = yield m(t2, o2, r2), a2 = r$1(t2), { data: i2 } = yield U(`${a2.path}/computeStatisticsHistograms`, e2), { statistics: u2 } = i2;
    return u2 != null && u2.length && u2.forEach((t3) => {
      t3.avg = t3.mean, t3.stddev = t3.standardDeviation;
    }), { statistics: u2, histograms: i2.histograms };
  });
}
function c$1(t2, o2, r2) {
  return __async(this, null, function* () {
    const e2 = yield m(t2, o2, r2), a2 = r$1(t2), { data: i2 } = yield U(`${a2.path}/computeHistograms`, e2);
    return { histograms: i2.histograms };
  });
}
function f(i2, m2, u2) {
  return __async(this, null, function* () {
    const c2 = r$1(i2), f2 = m2.geometry ? [m2.geometry] : [];
    return L(f2).then((o2) => {
      const n2 = m2.toJSON(), a2 = o2 && o2[0];
      r$2(a2) && (n2.geometry = JSON.stringify(a2.toJSON()));
      const i3 = n$3(__spreadValues(__spreadProps(__spreadValues({}, c2.query), { f: "json" }), n2)), f3 = e$2(i3, u2);
      return U(c2.path + "/identify", f3);
    }).then((t2) => l.fromJSON(t2.data));
  });
}
let t = class extends p$4 {
  execute(r2, s2) {
    return f(this.url, r2, s2);
  }
};
t = e([i$2("esri.tasks.ImageIdentifyTask")], t);
var p = t;
var y$1;
let j$1 = y$1 = class extends a$2 {
  constructor() {
    super(...arguments), this.geometry = null, this.mosaicRule = null, this.renderingRule = null, this.pixelSize = null, this.raster = void 0, this.timeExtent = null;
  }
  writeGeometry(e2, r2, t2) {
    e2 != null && (r2.geometryType = d$5(e2), r2[t2] = e2.toJSON());
  }
  clone() {
    return new y$1(y$7({ geometry: this.geometry, mosaicRule: this.mosaicRule, renderingRule: this.renderingRule, pixelSize: this.pixelSize, raster: this.raster, timeExtent: this.timeExtent }));
  }
};
e([y$6({ types: i$3, json: { read: p$5 } })], j$1.prototype, "geometry", void 0), e([o("geometry")], j$1.prototype, "writeGeometry", null), e([y$6({ type: y$3, json: { write: true } })], j$1.prototype, "mosaicRule", void 0), e([y$6({ type: h$2, json: { write: true } })], j$1.prototype, "renderingRule", void 0), e([y$6({ type: j$3, json: { write: true } })], j$1.prototype, "pixelSize", void 0), e([y$6({ json: { write: true } })], j$1.prototype, "raster", void 0), e([y$6({ type: d$4, json: { read: { source: "time" }, write: { target: "time" } } })], j$1.prototype, "timeExtent", void 0), j$1 = y$1 = e([i$2("esri.tasks.support.ImageHistogramParameters")], j$1);
var d = j$1;
var a;
let y = a = class extends a$2 {
  constructor() {
    super(...arguments), this.geometry = null, this.renderingRules = null, this.pixelSize = null, this.returnGeometry = true, this.returnCatalogItems = true, this.returnPixelValues = true, this.maxItemCount = null, this.timeExtent = null, this.raster = void 0, this.viewId = void 0;
  }
  writeGeometry(e2, t2, r2) {
    e2 != null && (t2.geometryType = d$5(e2), t2[r2] = JSON.stringify(e2.toJSON()));
  }
  set mosaicRule(e2) {
    let t2 = e2;
    t2 && t2.mosaicMethod && (t2 = y$3.fromJSON(__spreadProps(__spreadValues({}, t2.toJSON()), { mosaicMethod: t2.mosaicMethod, mosaicOperation: t2.mosaicOperation }))), this._set("mosaicRule", t2);
  }
  writeMosaicRule(e2, t2, r2) {
    e2 != null && (t2[r2] = JSON.stringify(e2.toJSON()));
  }
  set renderingRule(e2) {
    let t2 = e2;
    t2 && t2.rasterFunction && (t2 = h$2.fromJSON(__spreadProps(__spreadValues({}, t2.toJSON()), { rasterFunction: t2.rasterFunction, rasterFunctionArguments: t2.rasterFunctionArguments }))), this._set("renderingRule", t2);
  }
  writeRenderingRule(e2, t2, r2) {
    e2 != null && (t2[r2] = JSON.stringify(e2.toJSON()));
  }
  writeRenderingRules(e2, t2, r2) {
    e2 != null && (t2[r2] = JSON.stringify(e2.map((e3) => e3.toJSON())));
  }
  writePixelSize(e2, t2, r2) {
    e2 != null && (t2[r2] = JSON.stringify(e2));
  }
  writeTimeExtent(e2, t2, r2) {
    if (e2 != null) {
      const o2 = e2.start ? e2.start.getTime() : null, i2 = e2.end ? e2.end.getTime() : null;
      t2[r2] = o2 != null ? i2 != null ? `${o2},${i2}` : `${o2}` : null;
    }
  }
  clone() {
    return new a(y$7({ geometry: this.geometry, mosaicRule: this.mosaicRule, renderingRule: this.renderingRule, pixelSize: this.pixelSize, returnGeometry: this.returnGeometry, returnCatalogItems: this.returnCatalogItems, returnPixelValues: this.returnPixelValues, maxItemCount: this.maxItemCount, raster: this.raster, viewId: this.viewId, timeExtent: this.timeExtent }));
  }
};
e([y$6({ json: { write: true } })], y.prototype, "geometry", void 0), e([o("geometry")], y.prototype, "writeGeometry", null), e([y$6({ type: y$3, json: { write: true } })], y.prototype, "mosaicRule", null), e([o("mosaicRule")], y.prototype, "writeMosaicRule", null), e([y$6({ type: h$2, json: { write: true } })], y.prototype, "renderingRule", null), e([o("renderingRule")], y.prototype, "writeRenderingRule", null), e([y$6({ type: [h$2], json: { write: true } })], y.prototype, "renderingRules", void 0), e([o("renderingRules")], y.prototype, "writeRenderingRules", null), e([y$6({ type: j$3, json: { write: true } })], y.prototype, "pixelSize", void 0), e([o("pixelSize")], y.prototype, "writePixelSize", null), e([y$6({ type: Boolean, json: { write: true } })], y.prototype, "returnGeometry", void 0), e([y$6({ type: Boolean, json: { write: true } })], y.prototype, "returnCatalogItems", void 0), e([y$6({ type: Boolean, json: { write: true } })], y.prototype, "returnPixelValues", void 0), e([y$6({ type: Number, json: { write: true } })], y.prototype, "maxItemCount", void 0), e([y$6({ type: d$4, json: { write: { target: "time" } } })], y.prototype, "timeExtent", void 0), e([o("timeExtent")], y.prototype, "writeTimeExtent", null), e([y$6({ json: { write: true } })], y.prototype, "raster", void 0), e([y$6({ json: { write: true } })], y.prototype, "viewId", void 0), y = a = e([i$2("esri.tasks.support.ImageIdentifyParameters")], y);
var c = y;
const ee = n$4.getLogger("esri.layers.mixins.ArcGISImageService"), te = o$1()({ RSP_NearestNeighbor: "nearest", RSP_BilinearInterpolation: "bilinear", RSP_CubicConvolution: "cubic", RSP_Majority: "majority" }), re = o$1()({ esriNoDataMatchAny: "any", esriNoDataMatchAll: "all" }), ie = o$1()({ U1: "u1", U2: "u2", U4: "u4", U8: "u8", S8: "s8", U16: "u16", S16: "s16", U32: "u32", S32: "s32", F32: "f32", F64: "f64", C64: "c64", C128: "c128", UNKNOWN: "unknown" }), se = new Set(["png", "png8", "png24", "png32", "jpg", "bmp", "gif", "jpgpng", "lerc", "tiff"]), ne = j$5(u$5, { min: 0, max: 255 });
function ae(e2) {
  if (!e2)
    return null;
  const t2 = JSON.stringify(e2).match(/"rasterFunction":"(.*?")/gi), r2 = t2 == null ? void 0 : t2.map((e3) => e3.replace('"rasterFunction":"', "").replace('"', ""));
  return r2 ? r2.join("/") : null;
}
const oe = (s2) => {
  let o$12 = class extends s2 {
    constructor() {
      super(...arguments), this._functionRasterInfos = {}, this._rasterJobHandler = { instance: null, refCount: 0, connectionPromise: null }, this._symbolizer = null, this._defaultServiceMosaicRule = null, this.rasterAttributeTableFieldPrefix = "Raster.", this.adjustAspectRatio = null, this.bandCount = null, this.bandIds = void 0, this.capabilities = null, this.compressionQuality = void 0, this.compressionTolerance = 0.01, this.copyright = null, this.definitionExpression = null, this.exportImageServiceParameters = null, this.rasterInfo = null, this.fields = null, this.fullExtent = null, this.hasMultidimensions = false, this.imageMaxHeight = 4100, this.imageMaxWidth = 4100, this.interpolation = void 0, this.minScale = 0, this.maxScale = 0, this.multidimensionalInfo = null, this.noData = null, this.noDataInterpretation = void 0, this.objectIdField = null, this.pixelSizeX = null, this.pixelSizeY = null, this.pixelFilter = null, this.raster = void 0, this.viewId = void 0, this.renderer = null, this.rasterAttributeTable = null, this.rasterFunctionInfos = null, this.serviceDataType = null, this.spatialReference = null, this.pixelType = null, this.serviceRasterInfo = null, this.sourceJSON = null, this.url = null, this.version = null;
    }
    initialize() {
      this._set("exportImageServiceParameters", new d$1({ layer: this }));
    }
    readDefaultServiceMosaicRule(e2, t2) {
      return y$3.fromJSON(t2);
    }
    get rasterFunctionNamesIndex() {
      const e2 = new Map();
      return !this.rasterFunctionInfos || this.rasterFunctionInfos.length < 1 || this.rasterFunctionInfos.forEach((t2) => {
        e2.set(t2.name.toLowerCase().replace(/ /gi, "_"), t2.name);
      }), e2;
    }
    get queryTask() {
      return new x({ url: this.url });
    }
    readBandIds(e2, t2) {
      if (Array.isArray(e2) && e2.length > 0 && e2.every((e3) => typeof e3 == "number"))
        return e2;
    }
    readCapabilities(e2, t2) {
      return this._readCapabilities(t2);
    }
    writeCompressionQuality(e2, t2, r2) {
      e2 != null && this.format !== "lerc" && (t2[r2] = e2);
    }
    writeCompressionTolerance(e2, t2, r2) {
      this.format === "lerc" && e2 != null && (t2[r2] = e2);
    }
    get fieldsIndex() {
      return this.fields ? new e$3(this.fields) : null;
    }
    set format(e2) {
      e2 && se.has(e2.toLowerCase()) && this._set("format", e2.toLowerCase());
    }
    readFormat(e2, t2) {
      return t2.serviceDataType === "esriImageServiceDataTypeVector-UV" || t2.serviceDataType === "esriImageServiceDataTypeVector-MagDir" || this.pixelFilter != null ? "lerc" : "jpgpng";
    }
    readMinScale(e2, t2) {
      return t2.minLOD != null && t2.maxLOD != null ? e2 : 0;
    }
    readMaxScale(e2, t2) {
      return t2.minLOD != null && t2.maxLOD != null ? e2 : 0;
    }
    set mosaicRule(e2) {
      let t2 = e2;
      t2 && t2.mosaicMethod && (t2 = y$3.fromJSON(__spreadProps(__spreadValues({}, t2.toJSON()), { mosaicMethod: t2.mosaicMethod, mosaicOperation: t2.mosaicOperation }))), this._set("mosaicRule", t2);
    }
    readMosaicRule(e2, t2) {
      return y$3.fromJSON(e2 || t2.mosaicRule || t2);
    }
    writeMosaicRule(e2, t2, r2) {
      let i2 = this.mosaicRule;
      const s3 = this.definitionExpression;
      i2 ? s3 && s3 !== i2.where && (i2 = i2.clone(), i2.where = s3) : s3 && (i2 = new y$3({ where: s3 })), this._isValidCustomizedMosaicRule(i2) && (t2[r2] = i2.toJSON());
    }
    writeNoData(e2, t2, r2) {
      e2 != null && typeof e2 == "number" && (t2[r2] = ne(e2));
    }
    readObjectIdField(e2, t2) {
      if (!e2) {
        const r2 = t2.fields.filter((e3) => e3.type === "esriFieldTypeOID" || e3.type === "oid");
        e2 = r2 && r2[0] && r2[0].name;
      }
      return e2;
    }
    get parsedUrl() {
      return this.url ? U$1(this.url) : null;
    }
    readRenderer(e2, t2, r2) {
      var i2, s3;
      const n2 = t2 == null || (i2 = t2.layerDefinition) == null || (s3 = i2.drawingInfo) == null ? void 0 : s3.renderer, a2 = p$7(n2, r2);
      return a2 == null ? null : (a2.type === "vector-field" && t2.symbolTileSize && !n2.symbolTileSize && (a2.symbolTileSize = t2.symbolTileSize), l$1(a2) || ee.warn("ArcGISImageService", "Imagery layer doesn't support given renderer type."), a2);
    }
    writeRenderer(e2, t2, r2) {
      t2.layerDefinition = t2.layerDefinition || {}, t2.layerDefinition.drawingInfo = t2.layerDefinition.drawingInfo || {}, t2.layerDefinition.drawingInfo.renderer = e2.toJSON(), e2.type === "vector-field" && (t2.symbolTileSize = e2.symbolTileSize);
    }
    get rasterFields() {
      const e2 = this.rasterAttributeTableFieldPrefix || "Raster.", r2 = new y$8({ name: "Raster.ItemPixelValue", alias: "Item Pixel Value", domain: null, editable: false, length: 50, type: "string" }), i2 = new y$8({ name: "Raster.ServicePixelValue", alias: "Service Pixel Value", domain: null, editable: false, length: 50, type: "string" }), s3 = new y$8({ name: "Raster.ServicePixelValue.Raw", alias: "Raw Service Pixel Value", domain: null, editable: false, length: 50, type: "string" });
      let n2 = this.fields ? y$7(this.fields) : [];
      n2.push(i2), this.capabilities.operations.supportsQuery && this.fields && this.fields.length > 0 && n2.push(r2), this.version >= 10.4 && this.rasterFunctionInfos && this.rasterFunctionInfos.some((e3) => e3.name.toLowerCase() === "none") && n2.push(s3), this.rasterFunctionInfos && this.rasterFunctionInfos.filter((e3) => e3.name.toLowerCase() !== "none").forEach((e3) => {
        n2.push(new y$8({ name: "Raster.ServicePixelValue." + e3.name, alias: e3.name, domain: null, editable: false, length: 50, type: "string" }));
      }), this.pixelFilter == null || this.serviceDataType !== "esriImageServiceDataTypeVector-UV" && this.serviceDataType !== "esriImageServiceDataTypeVector-MagDir" || (n2.push(new y$8({ name: "Raster.Magnitude", alias: "Magnitude", domain: null, editable: false, type: "double" })), n2.push(new y$8({ name: "Raster.Direction", alias: "Direction", domain: null, editable: false, type: "double" })));
      const a2 = this.rasterInfo.attributeTable && this.rasterInfo.attributeTable.fields || null;
      if (a2 && a2.length > 0) {
        const r3 = a2.filter((e3) => e3.type !== "esriFieldTypeOID" && e3.name.toLowerCase() !== "value").map((r4) => {
          const i3 = y$7(r4);
          return i3.name = e2 + r4.name, i3;
        });
        n2 = n2.concat(r3);
      }
      return n2;
    }
    set renderingRule(e2) {
      let t2 = e2;
      t2 && t2.rasterFunction && (t2 = h$2.fromJSON(__spreadProps(__spreadValues({}, t2.toJSON()), { rasterFunction: t2.rasterFunction, rasterFunctionArguments: t2.rasterFunctionArguments }))), this._set("renderingRule", t2);
    }
    readRenderingRule(e2, t2) {
      const r2 = t2.rasterFunctionInfos;
      return t2.renderingRule || r2 && r2.length && r2[0].name !== "None" ? h$2.fromJSON(t2.renderingRule || { rasterFunctionInfos: t2.rasterFunctionInfos }) : null;
    }
    writeRenderingRule(e2, t2, r2) {
      this._isRFTJson(e2) || (t2[r2] = e2.toJSON());
    }
    readSpatialReference(e2, t2) {
      const r2 = e2 || t2.extent.spatialReference;
      return r2 ? k.fromJSON(r2) : null;
    }
    readPixelType(e2) {
      return ie.fromJSON(e2) || e2;
    }
    writePixelType(e2, t2, i2) {
      (t$2(this.serviceRasterInfo) || this.pixelType !== this.serviceRasterInfo.pixelType) && (t2[i2] = ie.toJSON(e2));
    }
    readVersion(e2, t2) {
      let r2 = t2.currentVersion;
      return r2 || (r2 = t2.hasOwnProperty("fields") || t2.hasOwnProperty("timeInfo") ? 10 : 9.3), r2;
    }
    applyFilter(e2) {
      let t2 = e2;
      return this.pixelFilter && (t2 = this._clonePixelData(e2), this.pixelFilter(t2)), t2;
    }
    applyRenderer(e2, t2) {
      return __async(this, null, function* () {
        let r2 = e2;
        if (!this._isPicture() && this.renderer && this._symbolizer && !this.pixelFilter) {
          const i2 = JSON.stringify(this._cachedRendererJson) !== JSON.stringify(this.renderer.toJSON()), s3 = this._rasterJobHandler.instance, { bandIds: n2 } = this;
          if (s3) {
            i2 && (this._symbolizer.bind(), yield s3.updateSymbolizer(this._symbolizer, t2), this._cachedRendererJson = this.renderer.toJSON());
            const a2 = yield s3.symbolize(__spreadValues({ bandIds: n2 }, e2), t2);
            r2 = { extent: e2.extent, pixelBlock: a2 };
          } else
            r2 = { extent: e2.extent, pixelBlock: this._symbolizer.symbolize(__spreadValues({ bandIds: n2 }, e2)) };
        }
        return r2;
      });
    }
    destroy() {
      this._shutdownJobHandler();
    }
    increaseRasterJobHandlerUsage() {
      this._rasterJobHandler.refCount++;
    }
    decreaseRasterJobHandlerUsage() {
      this._rasterJobHandler.refCount--, this._rasterJobHandler.refCount <= 0 && this._shutdownJobHandler();
    }
    computeHistograms(e2, t2) {
      return __async(this, null, function* () {
        const r2 = t2 == null ? void 0 : t2.signal;
        if (yield this._fetchCapabilities(r2), !this.capabilities.operations.supportsComputeHistograms)
          throw new s$1("imagery-layer:compute-histograms", "this operation is not supported on the input image service");
        e2 = y$a(d, e2).clone();
        const { raster: i2, mosaicRule: s3, renderingRule: n2 } = this;
        return n2 && e2.renderingRule == null && (e2.renderingRule = n2), s3 && e2.mosaicRule == null && (e2.mosaicRule = s3), i2 && e2.raster == null && (e2.raster = i2), c$1(this.url, e2, { signal: r2 });
      });
    }
    computeStatisticsHistograms(e2, t2) {
      return __async(this, null, function* () {
        const r2 = t2 == null ? void 0 : t2.signal;
        if (yield this._fetchCapabilities(r2), !this.capabilities.operations.supportsComputeStatisticsHistograms)
          throw new s$1("imagery-layer:compute-statistics-histograms", "this operation is not supported on the input image service");
        e2 = y$a(d, e2).clone();
        const { raster: i2, mosaicRule: s3, renderingRule: n2 } = this;
        return n2 && e2.renderingRule == null && (e2.renderingRule = n2), s3 && e2.mosaicRule == null && (e2.mosaicRule = s3), i2 && e2.raster == null && (e2.raster = i2), u(this.url, e2, { signal: r2 });
      });
    }
    fetchImage(e2, t2, r2, i2 = {}) {
      if (e2 == null || t2 == null || r2 == null)
        return Promise.reject(new s$1("imagery-layer:fetch-image", "Insufficient parameters for requesting an image. A valid extent, width and height values are required."));
      const s3 = this.renderer || this._symbolizer ? this.generateRasterInfo(this.renderingRule, { signal: i2.signal }) : null;
      return q(s3).then((s4) => {
        s4 && (this.rasterInfo = s4);
        const n2 = { imageServiceParameters: this.getExportImageServiceParameters(e2, t2, r2, i2.timeExtent), imageProps: { extent: e2, width: t2, height: r2, format: this.format }, requestAsImageElement: i2.requestAsImageElement && !this.pixelFilter || false, signal: i2.signal };
        return this._requestArrayBuffer(n2);
      });
    }
    fetchKeyProperties(e2) {
      const t2 = e2 && e2.renderingRule && e2.renderingRule.toJSON();
      return U(this.parsedUrl.path + "/keyProperties", { query: this._getQueryParams({ renderingRule: this.version >= 10.3 && t2 ? JSON.stringify(t2) : null }) }).then((e3) => e3.data);
    }
    fetchRasterAttributeTable(e2) {
      const t2 = e2 && e2.renderingRule && e2.renderingRule.toJSON();
      return this.version < 10.1 ? Promise.reject(new s$1("#fetchRasterAttributeTable()", "Failed to get rasterAttributeTable")) : U(this.parsedUrl.path + "/rasterAttributeTable", { query: this._getQueryParams({ renderingRule: this.version >= 10.3 && t2 ? JSON.stringify(t2) : null }) }).then((e3) => g$2.fromJSON(e3.data));
    }
    getCatalogItemRasterInfo(e2, t2) {
      return __async(this, null, function* () {
        const r2 = U(this.parsedUrl.path + "/" + e2 + "/info", __spreadValues({ query: this._getQueryParams() }, t2)).then((e3) => e3.data), i2 = U(this.parsedUrl.path + "/" + e2 + "/info/keyProperties", __spreadValues({ query: this._getQueryParams() }, t2)).then((e3) => e3.data).catch(() => {
        }), s3 = yield Promise.all([r2, i2]);
        if (!s3[0])
          return;
        const n2 = M$1.fromJSON(s3[0].extent), a2 = s3[0].statistics ? s3[0].statistics.map((e3) => ({ min: e3[0], max: e3[1], avg: e3[2], stddev: e3[3] })) : null;
        return new p$6({ bandCount: s3[0].bandCount, extent: n2, spatialReference: n2.sr, pixelSize: new j$3({ x: s3[0].pixelSizeX, y: s3[0].pixelSizeY, spatialReference: n2.sr }), pixelType: s3[0].pixelType.toLowerCase(), statistics: a2, histograms: s3[0].histograms, keyProperties: s3[1] || {} });
      });
    }
    getCatalogItemICSInfo(e2, t2) {
      return __async(this, null, function* () {
        const { data: r2 } = yield U(this.parsedUrl.path + "/" + e2 + "/info/ics", __spreadValues({ query: this._getQueryParams() }, t2)), i2 = r2 && r2.ics;
        if (!i2)
          return;
        let s3 = null;
        try {
          s3 = (yield U(this.parsedUrl.path + "/" + e2 + "/info", __spreadValues({ query: this._getQueryParams() }, t2))).data.extent;
        } catch (e3) {
        }
        if (!s3 || !s3.spatialReference)
          return { ics: i2, icsToPixelTransform: null, icsExtent: null, northDirection: null };
        const n2 = this.version >= 10.7 ? U(this.parsedUrl.path + "/" + e2 + "/info/icstopixel", __spreadValues({ query: this._getQueryParams() }, t2)).then((e3) => e3.data).catch(() => ({})) : {}, a2 = s3.spatialReference, o2 = { geometries: JSON.stringify({ geometryType: "esriGeometryEnvelope", geometries: [s3] }), inSR: a2.wkid || JSON.stringify(a2), outSR: "0:" + e2 }, l2 = U(this.parsedUrl.path + "/project", __spreadValues({ query: this._getQueryParams(o2) }, t2)).then((e3) => e3.data).catch(() => ({})), u2 = 5, p2 = (s3.xmin + s3.xmax) / 2, c2 = (s3.ymax - s3.ymin) / (u2 + 1), m2 = s3.ymin + c2, d2 = [];
        for (let R2 = 0; R2 < u2; R2++)
          d2.push({ x: p2, y: m2 + c2 * R2 });
        const h2 = { geometries: JSON.stringify({ geometryType: "esriGeometryPoint", geometries: d2 }), inSR: a2.wkid || JSON.stringify(a2), outSR: "0:" + e2 }, f2 = U(this.parsedUrl.path + "/project", __spreadValues({ query: this._getQueryParams(h2) }, t2)).then((e3) => e3.data).catch(() => ({})), y2 = yield Promise.all([n2, l2, f2]);
        let g2 = y2[0].ipxf;
        if (g2 == null) {
          var v2, b2, S2;
          const e3 = (v2 = i2.geodataXform) == null ? void 0 : v2.xf_0;
          (e3 == null || (b2 = e3.name) == null ? void 0 : b2.toLowerCase()) === "topup" && (e3 == null || (S2 = e3.coefficients) == null ? void 0 : S2.length) === 6 && (g2 = { affine: { name: "ics [sensor: Frame] to pixel (column, row) transformation", coefficients: e3.coefficients, cellsizeRatio: 0, type: "GeometricXform" } });
        }
        const w2 = M$1.fromJSON(y2[1] && y2[1].geometries && y2[1].geometries[0]);
        w2 && (w2.spatialReference = new k({ wkid: 0, imageCoordinateSystem: i2 }));
        const _ = y2[2].geometries ? y2[2].geometries.filter((e3) => e3 != null && e3.x != null && e3.y != null && e3.x !== "NaN" && e3.y !== "NaN") : [], O = _.length;
        if (O < 3)
          return { ics: i2, icsToPixelTransform: g2, icsExtent: w2, northDirection: null };
        let N2 = 0, P = 0, F = 0, T2 = 0;
        for (let R2 = 0; R2 < O; R2++)
          N2 += _[R2].x, P += _[R2].y, F += _[R2].x * _[R2].x, T2 += _[R2].x * _[R2].y;
        const j2 = (O * T2 - N2 * P) / (O * F - N2 * N2);
        let D2 = 0;
        const C = _[u2 - 1].x > _[0].x, J = _[u2 - 1].y > _[0].y;
        return j2 === 1 / 0 ? D2 = J ? 90 : 270 : j2 === 0 ? D2 = C ? 0 : 180 : j2 > 0 ? D2 = C ? 180 * Math.atan(j2) / Math.PI : 180 * Math.atan(j2) / Math.PI + 180 : j2 < 0 && (D2 = J ? 180 + 180 * Math.atan(j2) / Math.PI : 360 + 180 * Math.atan(j2) / Math.PI), { ics: i2, icsToPixelTransform: g2, icsExtent: w2, northDirection: D2 };
      });
    }
    generateRasterInfo(e2, t2) {
      return __async(this, null, function* () {
        if ((!e2 || e2.functionName.toLowerCase() === "none" || this._isVectorFieldResampleFunction(e2)) && r$2(this.serviceRasterInfo))
          return this.serviceRasterInfo;
        const r2 = ae(e2);
        if (this._functionRasterInfos[r2])
          return this._functionRasterInfos[r2];
        const s3 = this._generateRasterInfo(e2, t2);
        this._functionRasterInfos[r2] = s3;
        try {
          return yield s3;
        } catch (e3) {
          return this._functionRasterInfos[r2] = null, null;
        }
      });
    }
    getExportImageServiceParameters(e2, t2, r2, s3) {
      const n2 = (e2 = e2.clone().shiftCentralMeridian()).spatialReference;
      let a2;
      if (n2.imageCoordinateSystem) {
        const { id: e3, referenceServiceName: t3 } = n2.imageCoordinateSystem;
        a2 = e3 != null ? t3 ? this.parsedUrl.path.toLowerCase().indexOf("/" + t3.toLowerCase() + "/") > -1 ? "0:" + e3 : JSON.stringify({ icsid: e3, icsns: t3 }) : "0:" + e3 : JSON.stringify({ ics: n2.imageCoordinateSystem });
      } else
        a2 = n2.wkid || JSON.stringify(n2.toJSON());
      r$2(this.serviceRasterInfo) && this.pixelType !== this.serviceRasterInfo.pixelType && (this.exportImageServiceParameters.pixelType = this.pixelType);
      const o2 = this.exportImageServiceParameters.toJSON(), { bandIds: l2, noData: u2, mosaicRule: p2 } = o2;
      let { renderingRule: c2 } = o2;
      if (l2 instanceof Array && l2.length > 0 && !this.renderingRule ? o2.bandIds = l2.join(",") : o2.bandIds = void 0, l2 != null && l2.length && this.renderingRule)
        if (c2.rasterFunction === "Colormap") {
          const e3 = new h$2({ functionName: "ExtractBand", functionArguments: { BandIds: l2, raster: c2.rasterFunctionArguments.Raster } });
          c2.rasterFunctionArguments.Raster = e3;
        } else {
          c2 = new h$2({ functionName: "ExtractBand", functionArguments: { BandIds: l2, raster: c2 } });
        }
      u2 instanceof Array && u2.length > 0 && (o2.noData = u2.join(","));
      const m2 = this.timeInfo;
      p2 && p2.multidimensionalDefinition && s3 && m2 && m2.startField && (p2.multidimensionalDefinition = p2.multidimensionalDefinition.filter((e3) => e3.dimensionName !== m2.startField)), o2.mosaicRule = p2 && JSON.stringify(p2), o2.renderingRule = c2 && JSON.stringify(c2);
      const d2 = {};
      if (s3) {
        const { start: e3, end: t3 } = s3.toJSON();
        e3 && t3 && e3 === t3 ? d2.time = "" + e3 : e3 == null && t3 == null || (d2.time = `${e3 == null ? "null" : e3},${t3 == null ? "null" : t3}`);
      }
      return __spreadValues(__spreadValues({ bbox: e2.xmin + "," + e2.ymin + "," + e2.xmax + "," + e2.ymax, bboxSR: a2, imageSR: a2, size: t2 + "," + r2 }, o2), d2);
    }
    identify(e2, t2) {
      return __async(this, null, function* () {
        if (yield this._fetchCapabilities(t2 == null ? void 0 : t2.signal), !this.capabilities.operations.supportsIdentify)
          throw new s$1("imagery-layer:query-rasters", "query operation is not supported on the input image service");
        e2 = y$a(c, e2).clone();
        const { raster: r2, mosaicRule: i2, renderingRule: s3 } = this;
        s3 && e2.renderingRule == null && (e2.renderingRule = s3), i2 && e2.mosaicRule == null && (e2.mosaicRule = i2), r2 && e2.raster == null && (e2.raster = r2);
        return new p({ url: this.url }).execute(e2, t2);
      });
    }
    queryRasters(e2, t2) {
      return __async(this, null, function* () {
        if (yield this._fetchCapabilities(t2 == null ? void 0 : t2.signal), !this.capabilities.operations.supportsQuery)
          throw new s$1("imagery-layer:query-rasters", "query operation is not supported on the input image service");
        return e2 = y$a(R$1, e2), this.queryTask.execute(e2, t2);
      });
    }
    queryVisibleRasters(e2, t2) {
      if (!e2)
        return Promise.reject(new s$1("imagery-layer: query-visible-rasters", "missing query parameter"));
      const { pixelSize: s3, returnDomainValues: n2, returnTopmostRaster: a2, showNoDataRecords: o2 } = t2 || { pixelSize: null, returnDomainValues: false, returnTopmostRaster: false, showNoDataRecords: false };
      let l2 = false, u2 = null, p$12 = null;
      const c$12 = "raster.servicepixelvalue", m2 = this.rasterFunctionNamesIndex;
      if (r$2(e2.outFields) && (l2 = e2.outFields.some((e3) => e3.toLowerCase().indexOf(c$12) === -1), this.version >= 10.4)) {
        const t3 = e2.outFields.filter((e3) => e3.toLowerCase().indexOf(c$12) > -1 && e3.length > c$12.length).map((e3) => {
          const t4 = e3.slice(c$12.length + 1);
          return [this._updateRenderingRulesFunctionName(t4, m2), t4];
        });
        u2 = t3.map((e3) => new h$2({ functionName: e3[0] })), p$12 = t3.map((e3) => e3[1]), u2.length === 0 ? this.renderingRule ? (u2.push(this.renderingRule), p$12.push(this.renderingRule.functionName)) : u2 = null : this.renderingRule && !u2.some((e3) => e3.functionName === this.renderingRule.functionName) && (u2.push(this.renderingRule), p$12.push(this.renderingRule.functionName));
      }
      const d2 = t$2(e2.outSpatialReference) || e2.outSpatialReference.equals(this.spatialReference), h2 = this._getQueryParams({ geometry: e2.geometry, timeExtent: e2.timeExtent, mosaicRule: this.exportImageServiceParameters.mosaicRule, renderingRule: this.version < 10.4 ? this.renderingRule : null, renderingRules: u2, pixelSize: s3, returnCatalogItems: l2, returnGeometry: d2, maxItemCount: a2 ? 1 : null });
      delete h2.f;
      const y2 = new c(h2), g2 = new p({ url: this.url }), R2 = this.generateRasterInfo(this.renderingRule);
      return new Promise((t3) => {
        R2.then(() => {
          g2.execute(y2).then((r2) => {
            const i2 = e2.outFields;
            if (l2 && !d2 && r2.catalogItems && r2.catalogItems.features && r2.catalogItems.features.length > 0) {
              const s4 = this.objectIdField || "ObjectId", a3 = r2.catalogItems.features, l3 = a3.map((e3) => e3.attributes && e3.attributes[s4]), u3 = new R$1({ objectIds: l3, returnGeometry: true, outSpatialReference: e2.outSpatialReference, outFields: [s4] });
              return this.queryRasters(u3).then((l4) => {
                l4 && l4.features && l4.features.length > 0 && l4.features.forEach((t4) => {
                  a3.forEach((r3) => {
                    r3.attributes[s4] === t4.attributes[s4] && (r3.geometry = new x$1(t4.geometry), r3.geometry.spatialReference = e2.outSpatialReference);
                  });
                }), t3(this._processVisibleRastersResponse(r2, { returnDomainValues: n2, templateRRFunctionNames: p$12, showNoDataRecords: o2, templateFields: i2 }));
              }).catch(() => {
                throw new s$1("imagery-layer:query-visible-rasters", "encountered error when querying visible rasters geometry");
              });
            }
            t3(this._processVisibleRastersResponse(r2, { returnDomainValues: n2, templateRRFunctionNames: p$12, showNoDataRecords: o2, templateFields: i2 }));
          }).catch(() => {
            throw new s$1("imagery-layer:query-visible-rasters", "encountered error when querying visible rasters");
          });
        });
      });
    }
    fetchVariableStatisticsHistograms(e2, t2) {
      return __async(this, null, function* () {
        const r2 = U(this.parsedUrl.path + "/statistics", { query: this._getQueryParams({ variable: e2 }), signal: t2 }).then((e3) => {
          var t3;
          return (t3 = e3.data) == null ? void 0 : t3.statistics;
        }), i2 = U(this.parsedUrl.path + "/histograms", { query: this._getQueryParams({ variable: e2 }), signal: t2 }).then((e3) => {
          var t3;
          return (t3 = e3.data) == null ? void 0 : t3.histograms;
        }), s3 = yield Promise.all([r2, i2]);
        return s3[0] && s3[0].forEach((e3) => {
          e3.avg = e3.mean, e3.stddev = e3.standardDeviation;
        }), { statistics: s3[0] || null, histograms: s3[1] || null };
      });
    }
    _fetchService(e2) {
      return __async(this, null, function* () {
        yield this._fetchServiceInfo(e2), r$2(this.serviceRasterInfo) && !this.rasterInfo && (this.rasterInfo = this.serviceRasterInfo);
        const t2 = this.sourceJSON, r2 = r$2(this.serviceRasterInfo) ? Promise.resolve(this.serviceRasterInfo) : this._fetchAuxiliaryRasterInfo({ serviceInfo: t2, signal: e2 }).then((e3) => (this._set("serviceRasterInfo", e3), e3)), s3 = this.renderingRule && this.renderingRule.functionName.toLowerCase() !== "none" ? this.generateRasterInfo(this.renderingRule, { signal: e2 }) : null;
        return Promise.all([r2, s3]).then((e3) => {
          e3[1] ? this._set("rasterInfo", e3[1]) : this._set("rasterInfo", e3[0]), this.renderer && k$1(this.rasterInfo).indexOf(this.renderer.type) < 0 && (this.renderer = null, ee.warn("ArcGISImageService", "Switching to the default renderer. Renderer applied is not valid for this Imagery Layer")), this._configDefaultRenderer(), this.watch("renderer", () => this._configDefaultRenderer()), this.watch("renderingRule", (e4) => {
            (this.renderer || this._symbolizer || this.popupEnabled && this.popupTemplate) && this.generateRasterInfo(e4).then((e5) => {
              e5 && (this.rasterInfo = e5);
            });
          });
          const t3 = r$2(this.serviceRasterInfo) && this.serviceRasterInfo.multidimensionalInfo;
          t3 && this._updateMultidimensionalDefinition(t3);
        });
      });
    }
    _initJobHandler() {
      return __async(this, null, function* () {
        if (this._rasterJobHandler.connectionPromise != null)
          return this._rasterJobHandler.connectionPromise;
        const e2 = new n$6();
        this._rasterJobHandler.connectionPromise = e2.initialize().then(() => {
          this._rasterJobHandler.instance = e2;
        }, () => null), yield this._rasterJobHandler.connectionPromise;
      });
    }
    _shutdownJobHandler() {
      this._rasterJobHandler.instance && this._rasterJobHandler.instance.destroy(), this._rasterJobHandler.instance = null, this._rasterJobHandler.connectionPromise = null, this._rasterJobHandler.refCount = 0;
    }
    _fetchCapabilities(e2) {
      return __async(this, null, function* () {
        return this.capabilities || (yield this._fetchServiceInfo(e2)), this.capabilities;
      });
    }
    _fetchServiceInfo(e2) {
      return __async(this, null, function* () {
        var t2;
        let r2 = this.sourceJSON;
        if (!r2) {
          const { data: t3, ssl: i2 } = yield U(this.parsedUrl.path, { query: this._getQueryParams(), signal: e2 });
          r2 = t3, this.sourceJSON = r2, i2 && (this.url = this.url.replace(/^http:/i, "https:"));
        }
        if (((t2 = r2.capabilities) == null ? void 0 : t2.toLowerCase().split(",").map((e3) => e3.trim()).indexOf("tilesonly")) > -1)
          throw new s$1("imagery-layer:fetch-service-info", "use ImageryTileLayer to open tiles-only image services");
        this.read(r2, { origin: "service", url: this.parsedUrl });
      });
    }
    _isVectorFieldResampleFunction(e2) {
      if (!r$2(e2))
        return false;
      const { functionName: t2, functionArguments: r2 } = e2, s3 = t2.toLowerCase() === "resample", n2 = (r2 == null ? void 0 : r2.ResampleType) || (r2 == null ? void 0 : r2.resampleType);
      return s3 && (n2 === 7 || n2 === 10);
    }
    _isPicture() {
      return !this.format || this.format.indexOf("jpg") > -1 || this.format.indexOf("png") > -1;
    }
    _configDefaultRenderer() {
      if (!this._isPicture() && !this.pixelFilter) {
        if (!this.bandIds && this.rasterInfo.bandCount >= 3) {
          const e3 = V(this.rasterInfo);
          !e3 || this.rasterInfo.bandCount === 3 && e3[0] === 0 && e3[1] === 1 && e3[2] === 2 || (this.bandIds = e3);
        }
        var e2, t2;
        if (!this.renderer)
          this.renderer = j$4(this.rasterInfo, { bandIds: this.bandIds, variableName: this.renderingRule ? null : (e2 = this.mosaicRule) == null || (t2 = e2.multidimensionalDefinition) == null ? void 0 : t2[0].variableName });
        this._symbolizer ? (this._symbolizer.rendererJSON = K(this.renderer.toJSON()), this._symbolizer.rasterInfo = this.rasterInfo) : this._symbolizer = new N$1({ rendererJSON: this.renderer.toJSON(), rasterInfo: this.rasterInfo }), this._symbolizer.bind() || (this._symbolizer = null);
      }
    }
    _clonePixelData(e2) {
      return e2 == null ? e2 : { extent: e2.extent && e2.extent.clone(), pixelBlock: e2.pixelBlock && e2.pixelBlock.clone() };
    }
    _getQueryParams(e2) {
      const { raster: t2, viewId: r2 } = this;
      return __spreadValues({ raster: t2, viewId: r2, f: "json" }, e2);
    }
    _decodePixelBlock(e2, t2, r2) {
      return this._rasterJobHandler.instance ? this._rasterJobHandler.instance.decode({ data: e2, options: t2 }) : T(e2, t2, r2);
    }
    _fetchMultidimensionalInfo(e2) {
      return __async(this, null, function* () {
        var t2;
        const r2 = yield U(this.parsedUrl.path + "/multidimensionalInfo", { query: this._getQueryParams(), signal: e2 }).then((e3) => {
          var t3;
          return (t3 = e3.data) == null ? void 0 : t3.multidimensionalInfo;
        });
        return (t2 = r2.variables) != null && t2.length && r2.variables.forEach((e3) => {
          var t3;
          (t3 = e3.statistics) != null && t3.length && e3.statistics.forEach((e4) => {
            e4.avg = e4.mean, e4.stddev = e4.standardDeviation;
          });
        }), r2;
      });
    }
    _fetchAuxiliaryRasterInfo(e2) {
      const t2 = e2 && e2.serviceInfo;
      if (!t2)
        return Promise.reject(new s$1("imagery-layer:fetch-metadata", "valid serviceInfo is required"));
      const r2 = e2.renderingRule ? JSON.stringify(e2.renderingRule.toJSON()) : null, i2 = e2.signal, s3 = !!(t2.hasRasterAttributeTable && this.version >= 10.1) && U(this.parsedUrl.path + "/rasterAttributeTable", { query: this._getQueryParams({ renderingRule: this.version >= 10.1 ? r2 : null }), signal: i2 }).then((e3) => g$2.fromJSON(e3.data)).catch(() => null), n2 = !!(t2.hasColormap && this.version >= 10.1) && U(this.parsedUrl.path + "/colormap", { query: this._getQueryParams({ renderingRule: this.version >= 10.6 ? r2 : null }), signal: i2 }).then((e3) => {
        var t3;
        return (t3 = e3.data) == null ? void 0 : t3.colormap;
      }), a2 = !!(t2.hasHistograms && this.version >= 10.1) && U(this.parsedUrl.path + "/histograms", { query: this._getQueryParams({ renderingRule: this.version >= 10.1 ? r2 : null }), signal: i2 }).then((e3) => {
        var t3;
        return (t3 = e3.data) == null ? void 0 : t3.histograms;
      }), o2 = this.version >= 10.3 && U(this.parsedUrl.path + "/keyProperties", { query: this._getQueryParams({ renderingRule: r2 }), signal: i2 }).then((e3) => e3.data).catch(() => {
      }), l2 = !!(t2.hasMultidimensions && this.version >= 10.3) && this._fetchMultidimensionalInfo();
      return Promise.all([s3, n2, a2, o2, l2]).then((e3) => {
        let r3 = null;
        if (t2.minValues && t2.minValues.length === t2.bandCount) {
          r3 = [];
          for (let e4 = 0; e4 < t2.minValues.length; e4++)
            r3.push({ min: t2.minValues[e4], max: t2.maxValues[e4], avg: t2.meanValues[e4], stddev: t2.stdvValues[e4] });
        }
        const i3 = Math.ceil((t2.extent.xmax - t2.extent.xmin) / t2.pixelSizeX - 0.1), s4 = Math.ceil((t2.extent.ymax - t2.extent.ymin) / t2.pixelSizeY - 0.1), n3 = k.fromJSON(t2.spatialReference || t2.extent.spatialReference);
        return new p$6({ width: i3, height: s4, bandCount: t2.bandCount, extent: M$1.fromJSON(t2.extent), spatialReference: n3, pixelSize: new j$3({ x: t2.pixelSizeX, y: t2.pixelSizeY, spatialReference: n3 }), pixelType: t2.pixelType.toLowerCase(), statistics: r3, attributeTable: e3[0] || null, colormap: e3[1] || null, histograms: e3[2] || null, keyProperties: e3[3] || {}, multidimensionalInfo: e3[4] || null });
      });
    }
    _requestArrayBuffer(e2) {
      const { imageProps: t2, requestAsImageElement: r2, signal: i2 } = e2;
      if (r2 && !this.pixelFilter && t2.format && t2.format.indexOf("png") > -1)
        return U(this.parsedUrl.path + "/exportImage", { responseType: "image", query: this._getQueryParams(__spreadValues({ f: "image" }, e2.imageServiceParameters)), signal: i2 }).then((e3) => ({ imageElement: e3.data, params: t2 }));
      const s3 = this._initJobHandler(), n2 = U(this.parsedUrl.path + "/exportImage", { responseType: "array-buffer", query: this._getQueryParams(__spreadValues({ f: "image" }, e2.imageServiceParameters)), signal: i2 });
      return Promise.all([n2, s3]).then((e3) => {
        const r3 = e3[0].data, s4 = t2.format || "jpgpng";
        let n3 = s4;
        if (n3 !== "bsq" && n3 !== "bip" && (n3 = D(r3)), !n3) {
          throw new s$1("imagery-layer:fetch-image", "unsupported format signature " + String.fromCharCode.apply(null, new Uint8Array(r3)));
        }
        const a2 = s4 === "gif" || s4 === "bmp" || s4.indexOf("png") > -1 && (n3 === "png" || n3 === "jpg"), o2 = { signal: i2 };
        return a2 ? T(r3, __spreadValues({ useCanvas: true }, t2), o2).then((e4) => ({ pixelData: { pixelBlock: e4, extent: t2.extent }, params: t2 })) : this._decodePixelBlock(r3, { width: t2.width, height: t2.height, planes: null, pixelType: null, noDataValue: null, format: s4 }, o2).then((e4) => ({ pixelData: { pixelBlock: e4, extent: t2.extent }, params: t2 }));
      });
    }
    _generateRasterInfo(e2, t2) {
      return __async(this, null, function* () {
        const { data: r2 } = yield U(this.parsedUrl.path, __spreadValues({ query: this._getQueryParams({ renderingRule: e2 }) }, t2));
        return yield this._fetchAuxiliaryRasterInfo(__spreadValues({ serviceInfo: r2, renderingRule: e2 }, t2));
      });
    }
    _isValidCustomizedMosaicRule(e2) {
      return e2 && JSON.stringify(e2.toJSON()) !== JSON.stringify(this._defaultServiceMosaicRule && this._defaultServiceMosaicRule.toJSON());
    }
    _updateMultidimensionalDefinition(e2) {
      if (this._isValidCustomizedMosaicRule(this.mosaicRule))
        return;
      const t2 = e2.variables[0].dimensions, r2 = "", i2 = [];
      for (const s3 in t2)
        if (t2.hasOwnProperty(s3)) {
          const e3 = t2[s3], n2 = e3.extent;
          let a2 = true, o2 = [n2[0]];
          e3.hasRanges && e3.hasRanges === true ? (a2 = false, o2 = [e3.values[0]]) : e3.name.toLowerCase() === "stdz" && Math.abs(n2[1]) <= Math.abs(n2[0]) && (o2 = [n2[1]]), i2.push(new n$2({ variableName: r2, dimensionName: t2[s3].name, isSlice: a2, values: o2 }));
        }
      if (i2.length > 0) {
        this.mosaicRule = this.mosaicRule || new y$3();
        const e3 = this.mosaicRule.multidimensionalDefinition;
        (!e3 || e3 && e3.length <= 0) && (this.mosaicRule.multidimensionalDefinition = i2);
      }
    }
    _formatAttributeValue(e2, t2) {
      if (typeof e2 == "string") {
        const r2 = this.popupTemplate && this.popupTemplate.fieldInfos, i2 = this._getFieldInfo(r2, t2), s3 = i2 && i2.format;
        if (s3) {
          let t3, r3;
          return e2.trim().indexOf(",") > -1 ? (t3 = ",", r3 = t3 + " ", this._formatDelimitedString(e2, t3, r3, s3)) : e2.trim().indexOf(" ") > -1 ? (t3 = r3 = " ", this._formatDelimitedString(e2, t3, r3, s3)) : this._formatNumberFromString(e2, s3);
        }
      }
      return e2;
    }
    _getFieldInfo(e2, t2) {
      if (!e2 || !e2.length || !t2)
        return;
      const r2 = t2.toLowerCase();
      let i2;
      return e2.some((e3) => !(!e3.fieldName || e3.fieldName.toLowerCase() !== r2 && e3.fieldName.toLowerCase() !== r2.replace(/ /g, "_")) && (i2 = e3, true)), i2;
    }
    _formatDelimitedString(e2, t2, r2, i2) {
      return e2 && t2 && r2 && i2 ? e2.trim().split(t2).map((e3) => this._formatNumberFromString(e3, i2)).join(r2) : e2;
    }
    _formatNumberFromString(e2, t2) {
      if (!e2 || !t2)
        return e2;
      const r2 = Number(e2);
      return isNaN(r2) ? e2 : t2.format(r2);
    }
    _processVisibleRastersResponse(e2, t2) {
      t2 = t2 || {};
      const r2 = e2.value, { templateRRFunctionNames: s3, showNoDataRecords: n2, returnDomainValues: a2, templateFields: o2 } = t2, l2 = e2.processedValues;
      let u2 = e2.catalogItems && e2.catalogItems.features, p2 = e2.properties && e2.properties.Values && e2.properties.Values.map((e3) => e3.replace(/ /gi, ", ")) || [];
      const c2 = this.objectIdField || "ObjectId", m2 = typeof r2 == "string" && r2.toLowerCase().indexOf("nodata") > -1, d2 = [];
      if (r2 && !u2 && !m2) {
        const e3 = {};
        e3[c2] = 0;
        p2 = [r2], u2 = [new n$5(this.fullExtent, null, e3)];
      }
      if (!u2)
        return [];
      let h2, f2, y2;
      this._updateResponseFieldNames(u2, o2);
      for (let g2 = 0; g2 < u2.length; g2++) {
        if (h2 = u2[g2], r2 != null && !m2) {
          if (f2 = p2[g2], y2 = this.renderingRule && l2 && l2.length > 0 && s3 && s3.length > 0 && s3.indexOf(this.renderingRule.functionName) > -1 ? l2[s3.indexOf(this.renderingRule.functionName)] : r2, f2.toLowerCase() === "nodata" && !n2)
            continue;
          const e3 = "Raster.ItemPixelValue", t3 = "Raster.ServicePixelValue";
          h2.attributes[e3] = this._formatAttributeValue(f2, e3), h2.attributes[t3] = this._formatAttributeValue(y2, t3), this._updateFeatureWithMagDirValues(h2, f2);
          const a3 = this.fields && this.fields.length > 0;
          let o3 = this.renderingRule && r$2(this.serviceRasterInfo) && this.serviceRasterInfo.attributeTable ? a3 ? f2 : r2 : y2;
          this.renderingRule || (o3 = a3 ? f2 : r2), this._updateFeatureWithRasterAttributeTableValues(h2, o3);
        }
        if (h2.sourceLayer = this, a2 && this._updateFeatureWithDomainValues(h2), s3 && l2 && s3.length === l2.length)
          for (let e3 = 0; e3 < s3.length; e3++) {
            const t3 = "Raster.ServicePixelValue." + s3[e3];
            h2.attributes[t3] = this._formatAttributeValue(l2[e3], t3);
          }
        d2.push(u2[g2]);
      }
      return d2;
    }
    _updateFeatureWithRasterAttributeTableValues(e2, t2) {
      const r2 = this.rasterInfo && this.rasterInfo.attributeTable || r$2(this.serviceRasterInfo) && this.serviceRasterInfo.attributeTable, s3 = r2 && r2.features;
      if (!s3)
        return;
      const n2 = r2.fields, a2 = n2.map((e3) => e3.name).filter((e3) => e3.toLowerCase() === "value"), o2 = a2 && a2[0];
      if (!o2)
        return;
      const l2 = s3.filter((e3) => e3.attributes[o2] === (t2 != null ? parseInt(t2, 10) : null));
      l2 && l2[0] && n2.forEach((t3) => {
        const r3 = this.rasterAttributeTableFieldPrefix + t3.name;
        e2.attributes[r3] = this._formatAttributeValue(l2[0].attributes[t3.name], r3);
      });
    }
    _updateFeatureWithMagDirValues(e2, t2) {
      if (!this.pixelFilter || this.serviceDataType !== "esriImageServiceDataTypeVector-UV" && this.serviceDataType !== "esriImageServiceDataTypeVector-MagDir")
        return;
      const r2 = t2.replace(" ", ",").split(",").map((e3) => parseFloat(e3)), i2 = r2.map((e3) => [e3]), s3 = r2.map((e3) => ({ minValue: e3, maxValue: e3, noDataValue: null })), n2 = new u$4({ height: 1, width: 1, pixelType: "f32", pixels: i2, statistics: s3 });
      this.pixelFilter({ pixelBlock: n2, extent: new M$1(0, 0, 0, 0, this.spatialReference) }), e2.attributes["Raster.Magnitude"] = n2.pixels[0][0], e2.attributes["Raster.Direction"] = n2.pixels[1][0];
    }
    _updateFeatureWithDomainValues(e2) {
      const t2 = this.fields && this.fields.filter((e3) => e3.domain && e3.domain.type === "coded-value");
      t2 != null && t2.forEach((t3) => {
        const r2 = e2.attributes[t3.name];
        if (r2 != null) {
          const i2 = t3.domain.codedValues.filter((e3) => e3.code === r2)[0];
          i2 && (e2.attributes[t3.name] = i2.name);
        }
      });
    }
    _updateResponseFieldNames(e2, t2) {
      if (!t2 || t2.length < 1)
        return;
      const r2 = this.fieldsIndex;
      r2 && e2.forEach((e3) => {
        if (e3 && e3.attributes) {
          for (const i2 of t2)
            if (r2.has(i2)) {
              const t3 = r2.get(i2).name;
              t3 !== i2 && (e3.attributes[i2] = e3.attributes[t3], delete e3.attributes[t3]);
            }
        }
      });
    }
    _updateRenderingRulesFunctionName(e2, t2) {
      if (!e2 || e2.length < 1)
        return;
      if (e2 === "Raw")
        return e2.replace("Raw", "None");
      const r2 = e2.toLowerCase().replace(/ /gi, "_");
      return t2.has(r2) ? t2.get(r2) : e2;
    }
    _isRFTJson(e2) {
      return e2.name && e2.arguments && e2.function && e2.hasOwnProperty("functionType");
    }
    _readCapabilities(e2) {
      const t2 = e2.capabilities ? e2.capabilities.toLowerCase().split(",").map((e3) => e3.trim()) : ["image", "catalog"], { currentVersion: r2, advancedQueryCapabilities: i2, maxRecordCount: s3 } = e2, n2 = t2.indexOf("image") > -1, a2 = e2.serviceDataType === "esriImageServiceDataTypeElevation", o2 = !!(e2.spatialReference || e2.extent && e2.extent.spatialReference);
      return { operations: { supportsComputeHistograms: n2, supportsExportImage: n2, supportsIdentify: n2, supportsMeasure: t2.indexOf("mensuration") > -1 && o2, supportsDownload: t2.indexOf("download") > -1, supportsQuery: t2.indexOf("catalog") > -1 && e2.fields && e2.fields.length > 0, supportsGetSamples: r2 >= 10.2 && n2, supportsProject: r2 >= 10.3 && n2, supportsComputeStatisticsHistograms: r2 >= 10.4 && n2, supportsQueryBoundary: r2 >= 10.6 && n2, supportsCalculateVolume: r2 >= 10.7 && a2, supportsComputePixelLocation: r2 >= 10.7 && t2.indexOf("catalog") > -1 }, query: { supportsStatistics: !(!i2 || !i2.supportsStatistics), supportsOrderBy: !(!i2 || !i2.supportsOrderBy), supportsDistinct: !(!i2 || !i2.supportsDistinct), supportsPagination: !(!i2 || !i2.supportsPagination), supportsStandardizedQueriesOnly: !(!i2 || !i2.useStandardizedQueries), maxRecordCount: s3 } };
    }
  };
  return e([y$6()], o$12.prototype, "_functionRasterInfos", void 0), e([y$6()], o$12.prototype, "_rasterJobHandler", void 0), e([y$6()], o$12.prototype, "_symbolizer", void 0), e([y$6()], o$12.prototype, "_defaultServiceMosaicRule", void 0), e([e$1("_defaultServiceMosaicRule", ["defaultMosaicMethod"])], o$12.prototype, "readDefaultServiceMosaicRule", null), e([y$6()], o$12.prototype, "_cachedRendererJson", void 0), e([y$6()], o$12.prototype, "rasterAttributeTableFieldPrefix", void 0), e([y$6({ readOnly: true })], o$12.prototype, "rasterFunctionNamesIndex", null), e([y$6({ readOnly: true })], o$12.prototype, "queryTask", null), e([y$6()], o$12.prototype, "adjustAspectRatio", void 0), e([y$6({ readOnly: true }), o$2("serviceRasterInfo.bandCount")], o$12.prototype, "bandCount", void 0), e([y$6({ type: [N], json: { write: true } })], o$12.prototype, "bandIds", void 0), e([e$1("bandIds")], o$12.prototype, "readBandIds", null), e([y$6({ readOnly: true, json: { read: false } })], o$12.prototype, "capabilities", void 0), e([e$1("service", "capabilities", ["capabilities", "currentVersion", "serviceDataType"])], o$12.prototype, "readCapabilities", null), e([y$6({ type: Number })], o$12.prototype, "compressionQuality", void 0), e([o("compressionQuality")], o$12.prototype, "writeCompressionQuality", null), e([y$6({ type: Number })], o$12.prototype, "compressionTolerance", void 0), e([o("compressionTolerance")], o$12.prototype, "writeCompressionTolerance", null), e([y$6({ json: { read: { source: "copyrightText" } } })], o$12.prototype, "copyright", void 0), e([y$6({ type: String, json: { read: { source: "layerDefinition.definitionExpression" }, write: { target: "layerDefinition.definitionExpression" } } })], o$12.prototype, "definitionExpression", void 0), e([y$6({ readOnly: true, constructOnly: true })], o$12.prototype, "exportImageServiceParameters", void 0), e([y$6()], o$12.prototype, "rasterInfo", void 0), e([y$6({ readOnly: true, type: [y$8] })], o$12.prototype, "fields", void 0), e([y$6({ readOnly: true })], o$12.prototype, "fieldsIndex", null), e([y$6({ type: ["png", "png8", "png24", "png32", "jpg", "bmp", "gif", "jpgpng", "lerc", "tiff"], json: { write: true } })], o$12.prototype, "format", null), e([e$1("service", "format", ["serviceDataType"])], o$12.prototype, "readFormat", null), e([y$6({ type: M$1 })], o$12.prototype, "fullExtent", void 0), e([y$6({ readOnly: true })], o$12.prototype, "hasMultidimensions", void 0), e([y$6({ json: { read: { source: "maxImageHeight" } } })], o$12.prototype, "imageMaxHeight", void 0), e([y$6({ json: { read: { source: "maxImageWidth" } } })], o$12.prototype, "imageMaxWidth", void 0), e([y$6({ type: String, json: { type: te.jsonValues, read: te.read, write: te.write } })], o$12.prototype, "interpolation", void 0), e([y$6()], o$12.prototype, "minScale", void 0), e([e$1("service", "minScale")], o$12.prototype, "readMinScale", null), e([y$6()], o$12.prototype, "maxScale", void 0), e([e$1("service", "maxScale")], o$12.prototype, "readMaxScale", null), e([y$6({ type: y$3 })], o$12.prototype, "mosaicRule", null), e([e$1("mosaicRule", ["mosaicRule", "defaultMosaicMethod"])], o$12.prototype, "readMosaicRule", null), e([o("mosaicRule")], o$12.prototype, "writeMosaicRule", null), e([y$6({ readOnly: true }), o$2("serviceRasterInfo.multidimensionalInfo")], o$12.prototype, "multidimensionalInfo", void 0), e([y$6({ json: { type: N } })], o$12.prototype, "noData", void 0), e([o("noData")], o$12.prototype, "writeNoData", null), e([y$6({ type: String, json: { type: re.jsonValues, read: re.read, write: re.write } })], o$12.prototype, "noDataInterpretation", void 0), e([y$6({ type: String, readOnly: true, json: { read: { source: ["fields"] } } })], o$12.prototype, "objectIdField", void 0), e([e$1("objectIdField")], o$12.prototype, "readObjectIdField", null), e([y$6({ readOnly: true })], o$12.prototype, "parsedUrl", null), e([y$6({ readOnly: true }), o$2("serviceRasterInfo.pixelSize.x")], o$12.prototype, "pixelSizeX", void 0), e([y$6({ readOnly: true }), o$2("serviceRasterInfo.pixelSize.y")], o$12.prototype, "pixelSizeY", void 0), e([y$6({ type: Function })], o$12.prototype, "pixelFilter", void 0), e([y$6()], o$12.prototype, "raster", void 0), e([y$6()], o$12.prototype, "viewId", void 0), e([y$6({ types: d$6, json: { name: "layerDefinition.drawingInfo.renderer", origins: { "web-scene": { types: i$4, name: "layerDefinition.drawingInfo.renderer", write: { overridePolicy: (e2) => ({ enabled: e2 && e2.type !== "vector-field" }) } } } } })], o$12.prototype, "renderer", void 0), e([e$1("renderer")], o$12.prototype, "readRenderer", null), e([o("renderer")], o$12.prototype, "writeRenderer", null), e([y$6(y$9)], o$12.prototype, "opacity", void 0), e([y$6({ readOnly: true }), o$2("serviceRasterInfo.attributeTable")], o$12.prototype, "rasterAttributeTable", void 0), e([y$6({ readOnly: true })], o$12.prototype, "rasterFields", null), e([y$6({ readOnly: true })], o$12.prototype, "rasterFunctionInfos", void 0), e([y$6({ type: h$2 })], o$12.prototype, "renderingRule", null), e([e$1("renderingRule", ["renderingRule", "rasterFunctionInfos"])], o$12.prototype, "readRenderingRule", null), e([o("renderingRule")], o$12.prototype, "writeRenderingRule", null), e([y$6()], o$12.prototype, "serviceDataType", void 0), e([y$6({ readOnly: true, type: k })], o$12.prototype, "spatialReference", void 0), e([e$1("spatialReference", ["spatialReference", "extent"])], o$12.prototype, "readSpatialReference", null), e([y$6({ json: { type: ie.jsonValues } })], o$12.prototype, "pixelType", void 0), e([e$1("pixelType")], o$12.prototype, "readPixelType", null), e([o("pixelType")], o$12.prototype, "writePixelType", null), e([y$6({ constructOnly: true, type: p$6 })], o$12.prototype, "serviceRasterInfo", void 0), e([y$6()], o$12.prototype, "sourceJSON", void 0), e([y$6(f$4)], o$12.prototype, "url", void 0), e([y$6({ readOnly: true })], o$12.prototype, "version", void 0), e([e$1("version", ["currentVersion", "fields", "timeInfo"])], o$12.prototype, "readVersion", null), o$12 = e([i$2("esri.layers.mixins.ArcGISImageService")], o$12), o$12;
};
let S = class extends t$3(f$5(o$3(s$2(l$3(u$6(oe(p$8(l$4(b$1))))))))) {
  constructor(...e2) {
    super(...e2), this.legendEnabled = true, this.isReference = null, this.operationalLayerType = "ArcGISImageServiceLayer", this.popupEnabled = true, this.popupTemplate = null, this.type = "imagery";
  }
  normalizeCtorArgs(e2, r2) {
    return typeof e2 == "string" ? __spreadValues({ url: e2 }, r2) : e2;
  }
  load(e2) {
    const o2 = r$2(e2) ? e2.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Image Service"] }, e2).then(() => this._fetchService(o2), () => this._fetchService(o2))), Promise.resolve(this);
  }
  writeOperationalLayerType(e2, r2, o2) {
    var t2;
    const i2 = ((t2 = this.renderer) == null ? void 0 : t2.type) === "vector-field";
    r2[o2] = i2 ? "ArcGISImageServiceVectorLayer" : "ArcGISImageServiceLayer";
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  createPopupTemplate(e2) {
    const r2 = this.rasterFields, o2 = this.title, t2 = new Set();
    let i2 = false, p2 = false;
    this.capabilities && (i2 = this.capabilities.operations.supportsQuery && this.fields && this.fields.length > 0, p2 = i2 && (this.serviceDataType === "esriImageServiceDataTypeVector-UV" || this.serviceDataType === "esriImageServiceDataTypeVector-MagDir"));
    const s2 = new Set();
    i2 && (s2.add("raster.itempixelvalue"), p2 && s2.add("raster.magnitude").add("raster.direction"));
    for (const a2 of r2) {
      const e3 = a2.name.toLowerCase();
      s2.has(e3) || e3.indexOf("raster.servicepixelvalue.") > -1 || t2.add(a2.name);
    }
    return a$3({ fields: r2, title: o2 }, __spreadProps(__spreadValues({}, e2), { visibleFieldNames: t2 }));
  }
  redraw() {
    this.emit("redraw");
  }
};
e([y$6(d$7)], S.prototype, "legendEnabled", void 0), e([y$6({ type: ["show", "hide"] })], S.prototype, "listMode", void 0), e([y$6({ type: Boolean, json: { read: false, write: { enabled: true, overridePolicy: () => ({ enabled: false }) } } })], S.prototype, "isReference", void 0), e([y$6({ type: ["ArcGISImageServiceLayer"], json: { origins: { "web-map": { type: ["ArcGISImageServiceLayer", "ArcGISImageServiceVectorLayer"], read: false, write: { target: "layerType", ignoreOrigin: true } } } } })], S.prototype, "operationalLayerType", void 0), e([o("web-map", "operationalLayerType")], S.prototype, "writeOperationalLayerType", null), e([y$6(c$5)], S.prototype, "popupEnabled", void 0), e([y$6({ type: M$2, json: { read: { source: "popupInfo" }, write: { target: "popupInfo" } } })], S.prototype, "popupTemplate", void 0), e([y$6({ readOnly: true })], S.prototype, "defaultPopupTemplate", null), e([y$6({ readOnly: true, json: { read: false } })], S.prototype, "type", void 0), S = e([i$2("esri.layers.ImageryLayer")], S);
var j = S;
export default j;
