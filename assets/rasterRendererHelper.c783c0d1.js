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
import { ae as e, af as y$1, cR as o, gV as N$1, ag as i$2, dA as a$3, eS as r, hx as m$2, dQ as e$1, hy as p$2, bT as y$2, c9 as t, c4 as o$1, hz as m$3, c5 as j$1, hA as a$4, _ as j$2, d0 as L, d1 as n$3, hn as y$3, hl as d$2, hB as M$1, hC as N$2, hD as q$1, eb as b$1, hE as N$3, hm as n$4, hF as u$1, hG as P$1, h0 as t$1, hH as S$2, dU as p$3, aa as s, hI as m$4, a5 as r$1, b$ as e$2, e6 as y$4, hJ as g, hK as u$3 } from "./vendor.74d5941c.js";
import { u as u$2 } from "./pixelUtils.5399eb4b.js";
import { f as f$1, l as l$4, p as p$4 } from "./RasterSymbolizer.07b5503f.js";
import { a as a$5, l as l$3, c as c$2 } from "./vectorFieldUtils.cdd2fa8a.js";
let i$1 = class extends a$3 {
  constructor() {
    super(...arguments), this.value = null, this.label = null, this.color = null;
  }
};
e([y$1({ type: Number, json: { write: true } })], i$1.prototype, "value", void 0), e([y$1({ type: String, json: { write: true } })], i$1.prototype, "label", void 0), e([y$1({ type: o, json: { type: [N$1], write: true } })], i$1.prototype, "color", void 0), i$1 = e([i$2("esri.renderers.support.ColormapInfo")], i$1);
var c$1 = i$1;
var a$2;
let l$2 = a$2 = class extends a$3 {
  constructor(o2) {
    super(o2), this.colormapInfos = null, this.type = "raster-colormap";
  }
  static createFromColormap(o2, r2) {
    if (!o2)
      return null;
    function t2(o3) {
      return r2 ? r2[o3] || "" : String(o3[0]);
    }
    const e2 = o2[0].length === 5, s2 = o2.sort((o3) => o3[0][0] - o3[1][0]), c2 = e2 ? s2.map((o3) => c$1.fromJSON({ value: o3[0], color: o3.slice(1, 5), label: t2(o3[0]) })) : s2.map((o3) => c$1.fromJSON({ value: o3[0], color: o3.slice(1, 4).concat([255]), label: t2(o3[0]) }));
    return new a$2({ colormapInfos: c2 });
  }
  static createFromColorramp(o2) {
    const r2 = f$1(o2, 256);
    return a$2.createFromColormap(r2);
  }
  clone() {
    return new a$2({ colormapInfos: this.colormapInfos.map((o2) => o2.toJSON()) });
  }
  extractColormap() {
    return this.colormapInfos.map((o2) => [o2.value, o2.color.r, o2.color.g, o2.color.b, o2.color.a > 1 ? o2.color.a : 255 * o2.color.a & 255]).sort((o2, r2) => o2[0] - r2[0]);
  }
};
e([y$1({ type: [c$1], json: { write: true } })], l$2.prototype, "colormapInfos", void 0), e([r({ rasterColormap: "raster-colormap" })], l$2.prototype, "type", void 0), l$2 = a$2 = e([i$2("esri.renderers.RasterColormapRenderer")], l$2);
var m$1 = l$2;
var c;
let d$1 = c = class extends a$3 {
  constructor(e2) {
    super(e2), this.altitude = 45, this.azimuth = 315, this.colorRamp = null, this.hillshadeType = "multi-directional", this.pixelSizePower = 0.664, this.pixelSizeFactor = 0.024, this.scalingType = "none", this.type = "raster-shaded-relief", this.zFactor = 1;
  }
  readColorRamp(e2) {
    return p$2(e2);
  }
  clone() {
    return new c({ hillshadeType: this.hillshadeType, altitude: this.altitude, azimuth: this.azimuth, zFactor: this.zFactor, scalingType: this.scalingType, pixelSizeFactor: this.pixelSizeFactor, pixelSizePower: this.pixelSizePower, colorRamp: y$2(this.colorRamp) });
  }
};
e([y$1({ type: Number, json: { write: true } })], d$1.prototype, "altitude", void 0), e([y$1({ type: Number, json: { write: true } })], d$1.prototype, "azimuth", void 0), e([y$1({ types: m$2, json: { write: true } })], d$1.prototype, "colorRamp", void 0), e([e$1("colorRamp")], d$1.prototype, "readColorRamp", null), e([y$1({ type: ["traditional", "multi-directional"], json: { write: true } })], d$1.prototype, "hillshadeType", void 0), e([y$1({ type: Number, json: { write: true } })], d$1.prototype, "pixelSizePower", void 0), e([y$1({ type: Number, json: { write: true } })], d$1.prototype, "pixelSizeFactor", void 0), e([y$1({ type: ["none", "adjusted"], json: { write: true } })], d$1.prototype, "scalingType", void 0), e([r({ rasterShadedRelief: "raster-shaded-relief" })], d$1.prototype, "type", void 0), e([y$1({ type: Number, json: { write: true } })], d$1.prototype, "zFactor", void 0), d$1 = c = e([i$2("esri.renderers.RasterShadedReliefRenderer")], d$1);
var m = d$1;
const n$2 = new t({ none: "none", standardDeviation: "standard-deviation", histogramEqualization: "histogram-equalization", minMax: "min-max", percentClip: "percent-clip", sigmoid: "sigmoid" }), a$1 = { 0: "none", 3: "standardDeviation", 4: "histogramEqualization", 5: "minMax", 6: "percentClip", 9: "sigmoid" };
var h$1;
let l$1 = h$1 = class extends a$3 {
  constructor(t2) {
    super(t2), this.colorRamp = null, this.computeGamma = false, this.dynamicRangeAdjustment = false, this.gamma = [], this.maxPercent = null, this.minPercent = null, this.numberOfStandardDeviations = null, this.outputMax = null, this.outputMin = null, this.sigmoidStrengthLevel = null, this.statistics = [], this.histograms = null, this.useGamma = false, this.stretchType = "none", this.type = "raster-stretch";
  }
  readColorRamp(t2) {
    if (t2)
      return p$2(t2);
  }
  writeStatistics(t2, e2, r2) {
    var o2;
    (o2 = t2) != null && o2.length && (Array.isArray(t2[0]) || (t2 = t2.map((t3) => [t3.min, t3.max, t3.avg, t3.stddev])), e2[r2] = t2);
  }
  readStretchType(t2, e2) {
    let r2 = e2.stretchType;
    return typeof r2 == "number" && (r2 = a$1[r2]), n$2.read(r2);
  }
  clone() {
    return new h$1({ stretchType: this.stretchType, outputMin: this.outputMin, outputMax: this.outputMax, useGamma: this.useGamma, computeGamma: this.computeGamma, statistics: y$2(this.statistics), gamma: y$2(this.gamma), sigmoidStrengthLevel: this.sigmoidStrengthLevel, numberOfStandardDeviations: this.numberOfStandardDeviations, minPercent: this.minPercent, maxPercent: this.maxPercent, colorRamp: y$2(this.colorRamp), histograms: y$2(this.histograms), dynamicRangeAdjustment: this.dynamicRangeAdjustment });
  }
};
e([y$1({ types: m$2, json: { write: true } })], l$1.prototype, "colorRamp", void 0), e([e$1("colorRamp")], l$1.prototype, "readColorRamp", null), e([y$1({ type: Boolean, json: { write: true } })], l$1.prototype, "computeGamma", void 0), e([y$1({ type: Boolean, json: { write: { target: "dra" }, read: { source: "dra" } } })], l$1.prototype, "dynamicRangeAdjustment", void 0), e([y$1({ type: [Number], json: { write: true } })], l$1.prototype, "gamma", void 0), e([y$1({ type: Number, json: { write: true } })], l$1.prototype, "maxPercent", void 0), e([y$1({ type: Number, json: { write: true } })], l$1.prototype, "minPercent", void 0), e([y$1({ type: N$1, json: { write: true } })], l$1.prototype, "numberOfStandardDeviations", void 0), e([y$1({ type: Number, json: { read: { source: "max" }, write: { target: "max" } } })], l$1.prototype, "outputMax", void 0), e([y$1({ type: Number, json: { read: { source: "min" }, write: { target: "min" } } })], l$1.prototype, "outputMin", void 0), e([y$1({ type: Number, json: { write: true } })], l$1.prototype, "sigmoidStrengthLevel", void 0), e([y$1({ json: { type: [[Number]], write: true } })], l$1.prototype, "statistics", void 0), e([y$1()], l$1.prototype, "histograms", void 0), e([o$1("statistics")], l$1.prototype, "writeStatistics", null), e([y$1({ type: Boolean, json: { write: true } })], l$1.prototype, "useGamma", void 0), e([y$1({ type: n$2.apiValues, json: { type: n$2.jsonValues, write: n$2.write } })], l$1.prototype, "stretchType", void 0), e([e$1("stretchType", ["stretchType"])], l$1.prototype, "readStretchType", null), e([r({ rasterStretch: "raster-stretch" })], l$1.prototype, "type", void 0), l$1 = h$1 = e([i$2("esri.renderers.RasterStretchRenderer")], l$1);
var y = l$1;
var B$1;
const S$1 = new Set(["esriMetersPerSecond", "esriKilometersPerHour", "esriKnots", "esriFeetPerSecond", "esriMilesPerHour"]), u = new t({ esriMetersPerSecond: "meter-per-second", esriKilometersPerHour: "kilometer-per-hour", esriKnots: "knots", esriFeetPerSecond: "feet-per-second", esriMilesPerHour: "mile-per-hour" }), z$1 = new t({ beaufort_ft: "beaufort-ft", beaufort_km: "beaufort-km", beaufort_kn: "beaufort-kn", beaufort_m: "beaufort-m", beaufort_mi: "beaufort-mi", classified_arrow: "classified-arrow", ocean_current_kn: "ocean-current-kn", ocean_current_m: "ocean-current-m", simple_scalar: "simple-scalar", single_arrow: "single-arrow", wind_speed: "wind-barb" }), Z = new t({ flow_from: "flow-from", flow_to: "flow-to" });
let b = B$1 = class extends m$3(a$3) {
  constructor(e2) {
    super(e2), this.attributeField = "Magnitude", this.flowRepresentation = "flow-from", this.rotationType = "arithmetic", this.style = "single-arrow", this.symbolTileSize = 50, this.type = "vector-field";
  }
  readInputUnit(e2, M2) {
    return S$1.has(e2) ? u.fromJSON(e2) : null;
  }
  readOutputUnit(e2, M2) {
    return S$1.has(e2) ? u.fromJSON(e2) : null;
  }
  get styleRenderer() {
    const e2 = this.style, M2 = this.attributeField, i2 = this._createStyleRenderer(e2);
    return i2.field = M2, i2;
  }
  get sizeVariables() {
    const e2 = [];
    if (this.visualVariables)
      for (const M2 of this.visualVariables)
        M2.type === "size" && e2.push(M2);
    if (e2.length === 0) {
      const M2 = new j$1({ minSize: 0.2 * this.symbolTileSize, maxSize: 0.8 * this.symbolTileSize });
      this.visualVariables ? this.visualVariables.push(M2) : this._set("visualVariables", [M2]), e2.push(M2);
    }
    return e2;
  }
  get rotationVariables() {
    const e2 = [];
    if (this.visualVariables)
      for (const M2 of this.visualVariables)
        M2.type === "rotation" && e2.push(M2);
    if (e2.length === 0) {
      const M2 = new a$4({ field: "Direction", rotationType: this.rotationType });
      this.visualVariables ? this.visualVariables.push(M2) : this._set("visualVariables", [M2]), e2.push(M2);
    }
    return e2;
  }
  clone() {
    return new B$1({ attributeField: this.attributeField, flowRepresentation: this.flowRepresentation, rotationType: this.rotationType, style: this.style, visualVariables: y$2(this.visualVariables), inputUnit: this.inputUnit, outputUnit: this.outputUnit });
  }
  getGraphicsFromPixelData(e2, M2 = false) {
    return __async(this, null, function* () {
      const i2 = [], t2 = a$5(this.inputUnit, this.outputUnit), a2 = M2 ? l$3(e2.pixelBlock, "vector-uv", this.rotationType, t2) : c$2(e2.pixelBlock, "vector-magdir", t2), I2 = e2.extent, r2 = a2.mask && a2.mask.length > 0;
      let g2, s2 = 0;
      const A2 = (I2.xmax - I2.xmin) / a2.width, d2 = (I2.ymax - I2.ymin) / a2.height;
      for (let l2 = 0; l2 < a2.height; l2++)
        for (let e3 = 0; e3 < a2.width; e3++, s2++)
          if (g2 = [I2.xmin + e3 * A2 + A2 / 2, I2.ymax - l2 * d2 - d2 / 2], (!r2 || a2.mask[s2]) && g2 && g2.length === 2) {
            const e4 = { Magnitude: a2.pixels[0][s2], Direction: a2.pixels[1][s2] };
            let M3 = new j$2({ x: g2[0], y: g2[1], spatialReference: I2.spatialReference });
            M3 = (yield L(M3))[0];
            const t3 = new n$3({ geometry: { type: "point", x: M3.x, y: M3.y, spatialReference: I2.spatialReference }, attributes: e4 });
            t3.symbol = this._getVisualVariablesAppliedSymbol(t3), i2.push(t3);
          }
      return i2;
    });
  }
  getSymbol(e2, M2) {
  }
  getSymbolAsync(e2, M2) {
    return __async(this, null, function* () {
    });
  }
  getSymbols() {
    return [];
  }
  getClassBreakInfos() {
    var e2;
    return (e2 = this.styleRenderer) == null ? void 0 : e2.classBreakInfos;
  }
  getDefaultSymbol() {
    var e2;
    return (e2 = this.styleRenderer) == null ? void 0 : e2.defaultSymbol;
  }
  _getDefaultSymbol(e2) {
    return new y$3({ path: "M14,32 14,18 9,23 16,3 22,23 17,18 17,32 z", outline: new d$2({ width: 0 }), size: 20, color: e2 || new o([0, 92, 230]) });
  }
  _getVisualVariablesAppliedSymbol(e2) {
    if (!e2)
      return;
    let M2 = this.styleRenderer && this.styleRenderer.getSymbol(e2);
    M2 = M2.clone();
    const i2 = this.sizeVariables, t2 = this.rotationVariables;
    if (i2 && i2.length && this.sizeVariables.forEach((i3) => M$1(M2, N$2([i3], e2))), t2 && t2.length) {
      const i3 = e2.attributes.Direction;
      e2.attributes.Direction = this.flowRepresentation === "flow-from" ? i3 : i3 + 180, this.rotationVariables.forEach((i4) => q$1(M2, b$1(i4, e2), i4.axis));
    }
    return M2;
  }
  _createStyleRenderer(e2) {
    let M2 = { defaultSymbol: this._getDefaultSymbol(), classBreakInfos: [] };
    switch (e2) {
      case "single-arrow":
        M2 = this._createSingleArrowRenderer();
        break;
      case "beaufort-kn":
        M2 = this._createBeaufortKnotsRenderer();
        break;
      case "beaufort-m":
        M2 = this._createBeaufortMeterRenderer();
        break;
      case "beaufort-ft":
        M2 = this._createBeaufortFeetRenderer();
        break;
      case "beaufort-mi":
        M2 = this._createBeaufortMilesRenderer();
        break;
      case "beaufort-km":
        M2 = this._createBeaufortKilometersRenderer();
        break;
      case "ocean-current-m":
        M2 = this._createCurrentMeterRenderer();
        break;
      case "ocean-current-kn":
        M2 = this._createCurrentKnotsRenderer();
        break;
      case "simple-scalar":
        M2 = this._createSimpleScalarRenderer();
        break;
      case "wind-barb":
        M2 = this._createWindBarbsRenderer();
        break;
      case "classified-arrow":
        M2 = this._createClassifiedArrowRenderer();
    }
    return new N$3(M2);
  }
  _createSingleArrowRenderer() {
    return { defaultSymbol: this._getDefaultSymbol() };
  }
  _createBeaufortKnotsRenderer() {
    const e2 = [0, 1, 3, 6, 10, 16, 21, 27, 33, 40, 47, 55, 63], M2 = [[40, 146, 199], [89, 162, 186], [129, 179, 171], [160, 194, 155], [191, 212, 138], [218, 230, 119], [250, 250, 100], [252, 213, 83], [252, 179, 102], [250, 141, 52], [247, 110, 42], [240, 71, 29]];
    return { defaultSymbol: this._getDefaultSymbol(new o([214, 47, 39])), classBreakInfos: this._getClassBreaks(e2, M2) };
  }
  _createBeaufortMeterRenderer() {
    const e2 = [0, 0.2, 1.8, 3.3, 5.4, 8.5, 11, 14.1, 17.2, 20.8, 24.4, 28.6, 32.7], M2 = [[69, 117, 181], [101, 137, 184], [132, 158, 186], [162, 180, 189], [192, 204, 190], [222, 227, 191], [255, 255, 191], [255, 220, 161], [250, 185, 132], [245, 152, 105], [237, 117, 81], [232, 21, 21]];
    return { defaultSymbol: this._getDefaultSymbol(new o([214, 47, 39])), classBreakInfos: this._getClassBreaks(e2, M2) };
  }
  _createBeaufortFeetRenderer() {
    const e2 = this._getDefaultSymbol(new o([214, 47, 39]));
    let M2 = [0, 0.2, 1.8, 3.3, 5.4, 8.5, 11, 14.1, 17.2, 20.8, 24.4, 28.6, 32.7];
    const i2 = [[69, 117, 181], [101, 137, 184], [132, 158, 186], [162, 180, 189], [192, 204, 190], [222, 227, 191], [255, 255, 191], [255, 220, 161], [250, 185, 132], [245, 152, 105], [237, 117, 81], [232, 21, 21]], t2 = 3.28084;
    M2 = M2.map((e3) => e3 * t2);
    return { defaultSymbol: e2, classBreakInfos: this._getClassBreaks(M2, i2) };
  }
  _createBeaufortMilesRenderer() {
    const e2 = this._getDefaultSymbol(new o([214, 47, 39]));
    let M2 = [0, 0.2, 1.8, 3.3, 5.4, 8.5, 11, 14.1, 17.2, 20.8, 24.4, 28.6, 32.7];
    const i2 = [[69, 117, 181], [101, 137, 184], [132, 158, 186], [162, 180, 189], [192, 204, 190], [222, 227, 191], [255, 255, 191], [255, 220, 161], [250, 185, 132], [245, 152, 105], [237, 117, 81], [232, 21, 21]], t2 = 2.23694;
    M2 = M2.map((e3) => e3 * t2);
    return { defaultSymbol: e2, classBreakInfos: this._getClassBreaks(M2, i2) };
  }
  _createBeaufortKilometersRenderer() {
    const e2 = this._getDefaultSymbol(new o([214, 47, 39]));
    let M2 = [0, 0.2, 1.8, 3.3, 5.4, 8.5, 11, 14.1, 17.2, 20.8, 24.4, 28.6, 32.7];
    const i2 = [[69, 117, 181], [101, 137, 184], [132, 158, 186], [162, 180, 189], [192, 204, 190], [222, 227, 191], [255, 255, 191], [255, 220, 161], [250, 185, 132], [245, 152, 105], [237, 117, 81], [232, 21, 21]], t2 = 3.6;
    M2 = M2.map((e3) => e3 * t2);
    return { defaultSymbol: e2, classBreakInfos: this._getClassBreaks(M2, i2) };
  }
  _createCurrentMeterRenderer() {
    const e2 = [0, 0.5, 1, 1.5, 2], M2 = [[78, 26, 153], [179, 27, 26], [202, 128, 26], [177, 177, 177]];
    return { defaultSymbol: this._getDefaultSymbol(new o([177, 177, 177])), classBreakInfos: this._getClassBreaks(e2, M2) };
  }
  _createCurrentKnotsRenderer() {
    const e2 = [0, 0.25, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4], M2 = [[0, 0, 0], [0, 37, 100], [78, 26, 153], [151, 0, 100], [179, 27, 26], [177, 78, 26], [202, 128, 26], [177, 179, 52], [177, 177, 177]];
    return { defaultSymbol: this._getDefaultSymbol(new o([177, 177, 177])), classBreakInfos: this._getClassBreaks(e2, M2) };
  }
  _createClassifiedArrowRenderer() {
    var e2;
    const M2 = this._getDefaultSymbol(new o([56, 168, 0]));
    let i2 = [0, 1e-6, 3.5, 7, 10.5, 14];
    if ((e2 = this.sizeVariables) != null && e2.length) {
      const e3 = this.sizeVariables[0].minDataValue, M3 = this.sizeVariables[0].maxDataValue;
      if (e3 && M3) {
        const t3 = (M3 - e3) / 5;
        i2 = Array.from(Array(6).keys()).map((M4) => e3 + t3 * M4);
      }
    }
    const t2 = [[56, 168, 0], [139, 309, 0], [255, 255, 0], [255, 128, 0], [255, 0, 0]];
    return { defaultSymbol: M2, classBreakInfos: this._getClassBreaks(i2, t2) };
  }
  _createSimpleScalarRenderer() {
    return { defaultSymbol: n$4.fromJSON({ imageData: "iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAQAAABLVLlLAAAABGdBTUEAAYagMeiWXwAAAAJiS0dEAACqjSMyAAAACXBIWXMAAABIAAAASABGyWs+AAAC3ElEQVRIx9XXvW4cVRQH8N982btpsIREJECyiCXsxX4DKh6AliqGKCBBE2SlwlHgAbBD/AKmyEYUeQ1KahPZSZQvBCkQLTHZ7KGY8Xodz4w3a1NwbzVzz/znfJ//zbStVC5q3icKak9GAs2QIdDx3PtW/S011NW3p+M5Eomh11ipTIKe6+4LQzHaQ+G+63pIZNJJQXMpljwTwj1brpgx5w1zZlyx5Z4QnllEIm2xeeSUHBf0hV0bejo1Uh09G3aFvgXk7cCJFBc9EdaRVuHJJaOdKyTV2TVhYLMduNR0Q9gxL5GaaTDw8GzejrDRBpxWoGsySRW0dttKuattwNkIlFw2YXgzOdYq4Ox49PlM+JrKd5OusjTWhBuVxUfMX/KXXZ3WEmkuqa67wspR4BTbwtKr/5u4fFgStse/T7EifFPnnYl9zPq4vmUOPrRndgoHjDti1gOPqlyXoifcRNGQzUd31lDyfHmob1Gp35vSr+P6vilcQ5Egtyd8YF/ySg9NhPM+9M/IOaHwp5+PSZayXTvCogEUwlatC3J8LLwYtcWB8EuDXQVuCkV5/B4eNHb7wGBs87LBDS+xjdVSn09wq1G8dFM+9tSUhIGneLvUdniKxKpTYljCpu3j7rVWlHj/P23v4NPGUEyeCQnexe9lJjzEQqMjJs+EzNAX6B98dBZVRmroJx95x/A/6gln18EyfCUsl+qdXb/tjvfbw+mwforpUOBz4XLVoBwAn3aWnfeH246NyBXhrq7TTN5lNSP9RkU+puUJm3W2Tsdq0nZWM07srk7MwQrZSRysjjGWBLRJNsNbfj2JMR4AbxpU1XLAb9Mxfpsq5EjMuuiR8L0JiHOOBX3hiUvOmavN0nMueSzcceFk0BK4pMqLo7vDD1Z0qrtDx7Itt4Xwm9UqbMmk8S0Dtuzb2pvOU99Z1nLTOfleNmvfZfP2pYZmPfajwosKdDBNpacNpVGGsWX9CyDI8Xq/Sj6QAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE0LTExLTEwVDAzOjE3OjU4LTA1OjAwF+tHyQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNC0xMS0xMFQwMzoxNzo1OC0wNTowMGa2/3UAAAAASUVORK5CYII=", height: 20, width: 20, type: "esriPMS", angle: 0 }) };
  }
  _createWindBarbsRenderer() {
    const e2 = Array.from(Array(31).keys()).map((e3) => 5 * e3), M2 = [{ range: "0-5", path: "M20 20 M5 20 A15 15 0 1 0 35 20 A15 15 0 1 0 5 20 M20 20 M10 20 A10 10 0 1 0 30 20 A10 10 0 1 0 10 20", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTIwIDIwIE01IDIwIEExNSAxNSAwIDEgMCAzNSAyMCBBMTUgMTUgMCAxIDAgNSAyMCBNMjAgMjAgTTEwIDIwIEExMCAxMCAwIDEgMCAzMCAyMCBBMTAgMTAgMCAxIDAgMTAgMjAiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }, { range: "5-10", path: "M25 0 L25 40 M25 35 L17.5 37.5", imageData: "PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjkgMCAyNyA0NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMjUgMCBMMjUgNDAgTTI1IDM1IEwxNy41IDM3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }, { range: "10-15", path: "M25 0 L25 40 L10 45 L25 40", imageData: "PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjkgMCAyNyA0NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMjUgMCBMMjUgNDAgTDEwIDQ1IEwyNSA0MCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "15-20", path: "M25 0 L25 40 L10 45 L25 40 M25 35 L17.5 37.5", imageData: "PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjEyIDAgMTUgNDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxNy41IDM3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }, { range: "20-25", path: "M25 0 L25 40 L10 45 L25 40 M25 35 L10 40", imageData: "PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjkgMCAyNiA0NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMjUgMCBMMjUgNDAgTDEwIDQ1IEwyNSA0MCBNMjUgMzUgTDEwIDQwIiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+" }, { range: "25-30", path: "M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L17.5 32.5", imageData: "PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjkgMCAyNiA0NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMjUgMCBMMjUgNDAgTDEwIDQ1IEwyNSA0MCBNMjUgMzUgTDEwIDQwIEwyNSAzNSBNMjUgMzAgTDE3LjUgMzIuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "30-35", path: "M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L10 35", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0NiI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "35-40", path: "M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L17.5 27.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0NiI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxNy41IDI3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }, { range: "40-45", path: "M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0NiI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "45-50", path: "M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L17.5 22.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0NiI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxNy41IDIyLjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }, { range: "50-55", path: "M25 0 L25 40 L10 40 L25 35", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }, { range: "55-60", path: "M25 0 L25 40 L10 40 L25 35 M25 30 L17.5 32.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxNy41IDMyLjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }, { range: "60-65", path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "65-70", path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L17.5 27.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxNy41IDI3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }, { range: "70-75", path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "75-80", path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L17.5 22.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxNy41IDIyLjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }, { range: "80-85", path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L10 25", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxMCAyNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "85-90", path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L10 25 L25 20 M25 15 L17.5 17.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxMCAyNSBMMjUgMjAgTTI1IDE1IEwxNy41IDE3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }, { range: "90-95", path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L10 25 L25 20 M25 15 L10 20", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxMCAyNSBMMjUgMjAgTTI1IDE1IEwxMCAyMCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "95-100", path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L10 25 L25 20 M25 15 L10 20 L25 15 M25 10 L17.5 12.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxMCAyNSBMMjUgMjAgTTI1IDE1IEwxMCAyMCBMMjUgMTUgTTI1IDEwIEwxNy41IDEyLjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }, { range: "100-105", path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "105-110", path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L17.5 27.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDE3LjUgMjcuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "110-115", path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+" }, { range: "115-120", path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L17.5 22.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDE3LjUgMjIuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "120-125", path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+" }, { range: "125-130", path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L17.5 17.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDE3LjUgMTcuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "130-135", path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L10 20", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDEwIDIwIiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+" }, { range: "135-140", path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L10 20 M25 15 M25 10 L17.5 12.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDEwIDIwIE0yNSAxNSBNMjUgMTAgTDE3LjUgMTIuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==" }, { range: "140-145", path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L10 20 M25 15 M25 10 L17.5 12.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDEwIDIwIE0yNSAxNSBNMjUgMTAgTDEwIDE1IiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+" }, { range: "145-150", path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L10 20 M25 15 M25 10 L17.5 12.5", imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDEwIDIwIE0yNSAxNSBNMjUgMTAgTDEwIDE1IE0yNSAxMCBNMjUgNSBMMTcuNSA3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=" }], i2 = n$4.fromJSON({ imageData: "iVBORw0KGgoAAAANSUhEUgAAACgAAAApCAQAAADtq6NDAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAJiS0dEAP+Hj8y/AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAEY0lEQVRIx5XXWWxWRRQH8N+d+31tUdGAVjGglYJABFEBY91jfDAg7piYaFTccA++uMQEFRcSXlATtxiXqMQt4G4iisYl0ai4sIQYtVFZ1KIFKdTS0l4f7vRCS5fPebozc+bM/2z/Mzcx0AgSiUxXnKfIdMn875FIhX53U2n/B/s+kKM4UINTjTBZImixxnrv+9a2iL6zEoUBXcoudrWj/OtHm3wt02lfU9Qao9OnHvIhgmww84MEl1qnxfNmGrqHxAizLdPpC6chGcAxKGGcL+30gOERf1BSpUqVslQSV8d5ReZFe8VQ9avufJn31cWwlJV7iafKStGOE/1qvfH9qUxxu8ydUdmuSKbGO8YUdT2inKLG69pM70tliktl5qIkCAJGmusDG7Vqsc0WjZa4UBlBiA5YZIcjYzB7qDtH5kaUJFLs7RGZTZ42W4PRRmtwvbdt1+wGiaS4drEtDttdZYIDNVuAclR3vA3+dI3qHqmVSy7U6Tv1MScCPvPR7nIpFlsdCy3FdTLPGhK92e2CUITjMJ9ocwKxnsZqc3O3JwMma3d6UVLnyVxB4aXemZqvPqLdpJhW3KVVbY4yYImPo6M5Urv50fj+0z/FG9YaEiENs8UtMfXUaTeTePNHlhXfA1UU+2lyD1Il3Gtt9+adfpNG7dNlpg2U/T3KYLZ2dUWFdTgp3/rQ4sK973qnInV5TIf40x3dhvrJPBiqyWUo4wAtLqhQYS71qK+QKOFRywmGK/kpikzV6WMKhh58vGWs4TIJNjiEYLIuP8Tt4/zmLyqk+AyrJSbF+Qq1DgqRUPMxyl+9q3IQhX/rMCJ6tEunriDs1oSyQZKlr9AkhT2ZIARbJfaJS1vtVbHB+Rgi0RK/y1q1BWsEEyLoz40xtGKcARPVWB1BTPO7f4LNtpkUl1aoMbViLyZo0GRjPD3BxnxjqXeLYlvhqYrzMMG3HoyJXa3JjfnGlbYYFlP7Jh3qKsKY4hQ7TY0nG+xwRL61n63mxHtqNHosigyMLmClNwvuecFnOZB88nNBDzNkzhxEZaKMBVoKapggMzvHHXBEpNSSFAvtcFRsVn0bW8LlMmcXs+c0Kne3gRR32+zg4uXwjC6zit6Wt4a8LXVfcp/MtQXHn2ynGbuCmb8GvvFeJLEE82ReU9/n6+dkq2x3buG9Wn94smcgAw631RPR7BTH+kbmHReZoEpOdEe7zWqZl40s0JWs9Hmv7hjBHqPDwsjGKVJnWWqjbdZp1KhJi0aPmxYZsIRhlttgeF+Jlke41QcOQKoqilSb6HJzSvNG3G/UoWnxwsmt+sVaYwd63dRbqdnMyCPVeyRPvpYgdavM22oGKoMUVRbJfOWMwidJ8Zzb1UvmWK/VVUXzHaTjjrVYh1897HT7xxYEVUaa5SWb/WO+YUWa9SrwvigzM8YlzlYv2GSdVCYxxlBtVnnFq5olwp5/BEk/OLsf5LUmG2+inRJdVvjZ97ZH9/zP34ug1O91pf4p+D+JYBpvrKxfbwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNC0xMS0xMFQwMzoxMjowOS0wNTowMB9ViV0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTQtMTEtMTBUMDM6MTI6MDktMDU6MDBuCDHhAAAAAElFTkSuQmCC", height: 20, width: 20, type: "esriPMS", angle: 0 }), t2 = e2.map((t3, a2) => {
      let I2;
      if (a2 !== e2.length - 1)
        if (a2 === 0)
          I2 = { minValue: t3, maxValue: e2[a2 + 1], symbol: i2 };
        else {
          const i3 = n$4.fromJSON({ type: "esriPMS", imageData: M2[a2].imageData, contentType: "image/svg+xml", height: 32, width: 32, angle: 0 });
          I2 = { minValue: t3, maxValue: e2[a2 + 1], symbol: i3 };
        }
      return new u$1(I2);
    });
    return { defaultSymbol: i2, classBreakInfos: t2 };
  }
  _getClassBreaks(e2, M2) {
    return M2.map((M3, i2) => new u$1({ minValue: e2[i2], maxValue: e2[i2 + 1], symbol: this._getDefaultSymbol(new o(M3)) }));
  }
};
e([y$1({ type: String, json: { write: true } })], b.prototype, "attributeField", void 0), e([y$1({ type: Z.apiValues, json: { type: Z.jsonValues, read: { reader: Z.read }, write: { writer: Z.write } } })], b.prototype, "flowRepresentation", void 0), e([y$1({ type: ["geographic", "arithmetic"], json: { write: true } })], b.prototype, "rotationType", void 0), e([y$1({ type: z$1.apiValues, json: { type: z$1.jsonValues, read: { reader: z$1.read }, write: { writer: z$1.write } } })], b.prototype, "style", void 0), e([y$1({ json: { write: true } })], b.prototype, "symbolTileSize", void 0), e([y$1({ type: u.apiValues, json: { type: u.jsonValues, write: { writer: u.write } } })], b.prototype, "inputUnit", void 0), e([e$1("inputUnit")], b.prototype, "readInputUnit", null), e([y$1({ type: u.apiValues, json: { type: u.jsonValues, read: { reader: u.read }, write: { writer: u.write } } })], b.prototype, "outputUnit", void 0), e([e$1("outputUnit")], b.prototype, "readOutputUnit", null), e([r({ vectorField: "vector-field" })], b.prototype, "type", void 0), e([y$1({ type: N$3 })], b.prototype, "styleRenderer", null), e([y$1({ type: j$1 })], b.prototype, "sizeVariables", null), e([y$1({ type: a$4 })], b.prototype, "rotationVariables", null), b = B$1 = e([i$2("esri.renderers.VectorFieldRenderer")], b);
var h = b;
const d = { key: "type", base: null, typeMap: { "unique-value": P$1, "class-breaks": N$3, "raster-colormap": m$1, "raster-stretch": y, "vector-field": h, "raster-shaded-relief": m } }, i = __spreadProps(__spreadValues({}, d), { typeMap: __spreadValues({}, d.typeMap) });
delete i.typeMap["vector-field"];
const l = { uniqueValue: P$1, classBreaks: N$3, rasterStretch: y, rasterColormap: m$1, vectorField: h, rasterShadedRelief: m };
function f(e2) {
  return e2 && l[e2.type] || null;
}
function p$1(r2, s2) {
  if (!r2)
    return null;
  if (r2.type === "classBreaks" && r2.classificationMethod) {
    const e2 = r2.authoringInfo || { classificationMethod: "" };
    e2.classificationMethod = r2.classificationMethod, r2.authoringInfo = e2;
  }
  const t2 = f(r2);
  if (t2) {
    const e2 = new t2();
    return e2.read(r2, s2), e2;
  }
  return s2 && s2.messages && r2 && s2.messages.push(new t$1("renderer:unsupported", "Renderers of type '" + (r2.type || "unknown") + "' are not supported", { definition: r2, context: s2 })), null;
}
var a;
let p = a = class extends a$3 {
  constructor(e2) {
    super(e2), this.variableName = null, this.dimensionName = null, this.values = [], this.isSlice = false;
  }
  clone() {
    return new a({ variableName: this.variableName, dimensionName: this.dimensionName, values: y$2(this.values), isSlice: this.isSlice });
  }
};
e([y$1({ type: String, json: { write: true } })], p.prototype, "variableName", void 0), e([y$1({ type: String, json: { write: true } })], p.prototype, "dimensionName", void 0), e([y$1({ type: S$2.array(S$2.oneOf([S$2.native(Number), S$2.array(S$2.native(Number))])), json: { write: true } })], p.prototype, "values", void 0), e([y$1({ type: Boolean, json: { write: true } })], p.prototype, "isSlice", void 0), p = a = e([i$2("esri.layers.support.DimensionalDefinition")], p);
var n$1 = p;
class n {
  constructor() {
    this._workerThread = null, this._destroyed = false;
  }
  initialize() {
    return __async(this, null, function* () {
      const e2 = yield p$3("RasterWorker");
      this._destroyed ? e2.close() : this._workerThread = e2;
    });
  }
  destroy() {
    this._destroyed = true, this._workerThread && (this._workerThread.close(), this._workerThread = null);
  }
  decode(o2, n2) {
    return __async(this, null, function* () {
      if (!this._workerThread)
        throw new s("raster-jobhandler:no-connection", "no available worker connection");
      const t2 = yield this._workerThread.invoke("decode", o2, n2);
      return t2 ? new u$2(t2) : null;
    });
  }
  symbolize(o2, n2) {
    return __async(this, null, function* () {
      if (!this._workerThread)
        throw new s("raster-jobhandler:no-connection", "no available worker connection");
      const t2 = { extent: o2.extent && o2.extent.toJSON(), pixelBlock: o2.pixelBlock.toJSON(), simpleStretchParams: o2.simpleStretchParams, bandIds: o2.bandIds }, i2 = yield this._workerThread.invoke("symbolize", t2, n2);
      return i2 ? new u$2(i2) : null;
    });
  }
  updateSymbolizer(r2, o2) {
    return __async(this, null, function* () {
      var n2;
      if (!this._workerThread)
        throw new s("raster-jobhandler:no-connection", "no available worker connection");
      const t2 = r2 == null || (n2 = r2.rendererJSON) == null ? void 0 : n2.histograms;
      yield Promise.all(this._workerThread.broadcast("updateSymbolizer", { symbolizerJSON: r2.toJSON(), histograms: t2 }, o2));
    });
  }
  stretch(o2, n2) {
    return __async(this, null, function* () {
      if (!this._workerThread)
        throw new s("raster-jobhandler:no-connection", "no available worker connection");
      if (o2 == null || !o2.pixelBlock)
        return null;
      const t2 = { srcPixelBlock: o2.pixelBlock.toJSON(), stretchParams: o2.stretchParams }, i2 = yield this._workerThread.invoke("stretch", t2, n2);
      return i2 ? new u$2(i2) : null;
    });
  }
  split(o2, n2) {
    return __async(this, null, function* () {
      if (!this._workerThread)
        throw new s("raster-jobhandler:no-connection", "no available worker connection");
      if (o2 == null || !o2.pixelBlock)
        return null;
      const t2 = { srcPixelBlock: o2.pixelBlock.toJSON(), tileSize: o2.tileSize, maximumPyramidLevel: o2.maximumPyramidLevel }, i2 = yield this._workerThread.invoke("split", t2, n2);
      return i2 && i2.forEach((e2, o3) => {
        i2.set(o3, e2 ? u$2.fromJSON(e2) : null);
      }), Promise.resolve(i2);
    });
  }
  estimateStatisticsHistograms(r2, o2) {
    return __async(this, null, function* () {
      if (!this._workerThread)
        throw new s("raster-jobhandler:no-connection", "no available worker connection");
      if (r2 == null || !r2.pixelBlock)
        return null;
      const n2 = { srcPixelBlock: r2.pixelBlock.toJSON() }, t2 = yield this._workerThread.invoke("estimateStatisticsHistograms", n2, o2);
      return Promise.resolve(t2);
    });
  }
  mosaicAndTransform(o2, n2) {
    return __async(this, null, function* () {
      var t2;
      if (!this._workerThread)
        throw new s("raster-jobhandler:no-connection", "no available worker connection");
      if (o2 == null || (t2 = o2.srcPixelBlocks) == null || !t2.length)
        return null;
      const i2 = __spreadProps(__spreadValues({}, o2), { srcPixelBlocks: o2.srcPixelBlocks.map((e2) => e2 ? e2.toJSON() : null) }), a2 = yield this._workerThread.invoke("mosaicAndTransform", i2, n2);
      return a2 ? new u$2(a2) : null;
    });
  }
}
const w = 0.25, x = m$4.fromJSON({ type: "multipart", colorRamps: [{ fromColor: [0, 0, 255], toColor: [0, 255, 255] }, { fromColor: [0, 255, 255], toColor: [255, 255, 0] }, { fromColor: [255, 255, 0], toColor: [255, 0, 0] }] }), R = m$4.fromJSON(l$4[0]);
function j(t2, n2) {
  const { attributeTable: r2, colormap: l2, dataType: o2 } = t2;
  if (o2 === "vector-uv" || o2 === "vector-magdir") {
    const n3 = G(t2);
    if (r$1(n3))
      return n3;
  }
  if (r$1(l2)) {
    const n3 = F(t2);
    if (r$1(n3))
      return n3;
  }
  if (r$1(r2)) {
    const n3 = O(t2);
    if (r$1(n3))
      return n3;
  }
  return T(t2, n2);
}
function k(e2) {
  const t2 = ["raster-stretch"];
  return P(e2) && t2.push("raster-colormap"), N(e2) && t2.push("unique-value"), J(e2) && t2.push("class-breaks"), A(e2) && t2.push("raster-shaded-relief"), _(e2) && t2.push("vector-field"), t2;
}
function M(e2, t2, n2) {
  const r2 = ["nearest", "bilinear", "cubic", "majority"].find((e3) => e3 === (n2 == null ? void 0 : n2.toLowerCase()));
  if (t2 === "Map")
    return r2 != null ? r2 : "bilinear";
  return e2.dataType === "thematic" || e2.attributeTable || e2.colormap ? r2 === "nearest" || r2 === "majority" ? r2 : "nearest" : r2 != null ? r2 : "bilinear";
}
function T(e2, n2) {
  var r2, l2, o2, a2;
  e2 = I(e2, n2 == null ? void 0 : n2.variableName);
  const { bandCount: s2 } = e2;
  let { bandIds: i2, stretchType: u2 } = n2 || {};
  (r2 = i2) != null && r2.some((e3) => e3 >= s2) && (i2 = null);
  let c2 = e$2(e2.statistics), m2 = e$2(e2.histograms);
  var f2;
  s2 > 1 ? (i2 = (f2 = i2) != null && f2.length ? i2 : V(e2), c2 = c2 == null ? null : i2.map((e3) => c2[e3]), m2 = m2 == null ? null : i2.map((e3) => m2[e3])) : i2 = [0];
  u2 == null && (u2 = B(e2));
  let d2 = false;
  switch (u2) {
    case "none":
      d2 = false;
      break;
    case "percent-clip":
      d2 = !((l2 = m2) != null && l2.length);
      break;
    default:
      d2 = !((o2 = c2) != null && o2.length);
  }
  const b2 = ((a2 = i2) == null ? void 0 : a2.length) === 1 && e2.dataType === "scientific" ? x : null, h2 = new y({ stretchType: u2, dynamicRangeAdjustment: d2, colorRamp: b2, outputMin: 0, outputMax: 255, gamma: i2.length === 1 ? [1] : [1, 1, 1], useGamma: false });
  return u2 === "percent-clip" ? h2.maxPercent = h2.minPercent = w : u2 === "standard-deviation" && (h2.numberOfStandardDeviations = 2), d2 || (u2 === "percent-clip" ? h2.histograms = m2 : u2 !== "min-max" && u2 !== "standard-deviation" || (h2.statistics = c2)), h2;
}
function I(n2, r2) {
  if (r2 == null)
    return n2;
  let l2 = e$2(n2.statistics), o2 = e$2(n2.histograms);
  const { multidimensionalInfo: a2 } = n2;
  if (r2 && r$1(a2)) {
    const { statistics: e2, histograms: t2 } = a2.variables.find((e3) => e3.name === r2);
    e2 != null && e2.length && (l2 = e2), t2 != null && t2.length && (o2 = t2);
  }
  return p$4.fromJSON(__spreadProps(__spreadValues({}, n2.toJSON()), { statistics: l2, histograms: o2 }));
}
function V(e2) {
  const t2 = e2.bandCount;
  if (t2 === 1)
    return null;
  if (t2 === 2)
    return [0];
  const n2 = e2.keyProperties && e2.keyProperties.BandProperties;
  let r2;
  if (n2 && n2.length === t2) {
    const { red: e3, green: t3, blue: l2, nir: o2 } = S(n2);
    e3 != null && t3 != null && l2 != null ? r2 = [e3, t3, l2] : o2 != null && e3 != null && t3 != null && (r2 = [o2, e3, t3]);
  }
  return !r2 && t2 >= 3 && (r2 = [0, 1, 2]), r2;
}
function S(e2) {
  const t2 = {};
  for (let r2 = 0; r2 < e2.length; r2++) {
    var n2;
    const l2 = e2[r2], o2 = (n2 = l2.BandName) == null ? void 0 : n2.toLowerCase();
    if (o2 === "red")
      t2.red = r2;
    else if (o2 === "green")
      t2.green = r2;
    else if (o2 === "blue")
      t2.blue = r2;
    else if (o2 === "nearinfrared" || o2 === "nearinfrared_1" || o2 === "nir")
      t2.nir = r2;
    else if (l2.WavelengthMax && l2.WavelengthMin) {
      const e3 = l2.WavelengthMin, n3 = l2.WavelengthMax;
      t2.blue == null && e3 >= 410 && e3 <= 480 && n3 >= 480 && n3 <= 540 ? t2.blue = r2 : t2.green == null && e3 >= 490 && e3 <= 560 && n3 >= 560 && n3 <= 610 ? t2.green = r2 : t2.red == null && e3 >= 595 && e3 <= 670 && n3 >= 660 && n3 <= 730 ? t2.red = r2 : t2.nir == null && e3 >= 700 && e3 <= 860 && n3 >= 800 && n3 <= 950 && (t2.nir = r2);
    }
  }
  return t2;
}
function B(t2) {
  let n2 = "percent-clip";
  const { pixelType: r2, dataType: l2, histograms: o2, statistics: a2 } = t2;
  return r2 !== "u8" || l2 !== "processed" && r$1(o2) && r$1(a2) ? r2 === "u8" || l2 === "elevation" || l2 === "scientific" ? n2 = "min-max" : r$1(o2) ? n2 = "percent-clip" : r$1(a2) && (n2 = "min-max", n2 = "min-max") : n2 = "none", n2;
}
function O(t2, r2, l2, o$12) {
  if (!N(t2, r2))
    return null;
  const { attributeTable: s2, statistics: i2 } = t2, u2 = q(s2, r2), m2 = E(s2, "red"), f2 = E(s2, "green"), p2 = E(s2, "blue"), h2 = new g(), v = [], y2 = new Set(), g$1 = !!(m2 && f2 && p2);
  if (r$1(s2))
    s2.features.forEach((e2) => {
      const t3 = e2.attributes[u2.name];
      y2.has(e2.attributes[u2.name]) || t3 == null || (y2.add(t3), v.push(new u$3({ value: e2.attributes[u2.name], label: e2.attributes[u2.name] + "", symbol: { type: "simple-fill", style: "solid", outline: null, color: new o(g$1 ? [e2.attributes[m2.name], e2.attributes[f2.name], e2.attributes[p2.name], 1] : [0, 0, 0, 0]) } })));
    });
  else if (i2 != null && i2[0])
    for (let e2 = i2[0].min; e2 <= i2[0].max; e2++)
      v.push(new u$3({ value: e2, label: e2.toString(), symbol: { type: "simple-fill", style: "solid", outline: null, color: new o([0, 0, 0, 0]) } }));
  if (v.sort((e2, t3) => e2.value && typeof e2.value.valueOf() == "string" ? 0 : e2.value > t3.value ? 1 : -1), !g$1) {
    const e2 = f$1(R, v.length);
    v.forEach((t3, r3) => t3.symbol.color = new o(e2[r3].slice(1, 4))), h2.colorRamp = R;
  }
  if (l2 || o$12) {
    const e2 = l2 || f$1(o$12, v.length).map((e3) => e3.slice(1));
    v.forEach((t3, r3) => t3.symbol.color = new o(e2[r3])), h2.colorRamp = o$12;
  }
  return new P$1({ field: u2.name, uniqueValueInfos: v, authoringInfo: h2 });
}
function q(t2, n2) {
  let r2;
  return r$1(t2) ? (r2 = n2 ? t2.fields.find((e2) => n2.toLowerCase() === e2.name.toLowerCase()) : t2.fields.find((e2) => e2.type === "string" && e2.name.toLowerCase().indexOf("class") > -1), r2 || (r2 = t2.fields.find((e2) => e2.type === "string"), r2 || (r2 = E(t2, "value")))) : r2 = new y$4({ name: "value" }), r2;
}
function E(t2, n2) {
  return r$1(t2) ? t2.fields.find((e2) => e2.name.toLowerCase() === n2) : null;
}
function N(t2, n2) {
  const { attributeTable: r2, bandCount: l2 } = t2;
  if (!r$1(r2) && z(t2))
    return true;
  if (!r$1(r2) || l2 > 1)
    return false;
  if (n2) {
    if (r2.fields.find((e2) => e2.name.toLowerCase() === n2.toLowerCase()) == null)
      return false;
  }
  return true;
}
function P(t2) {
  const { bandCount: n2, colormap: r2 } = t2;
  return r$1(r2) && r2.length && n2 === 1;
}
function F(n2) {
  if (!P(n2))
    return null;
  let r2;
  const { attributeTable: l2, colormap: o2 } = n2;
  if (r$1(l2)) {
    const e2 = E(l2, "value"), t2 = q(l2);
    t2.type === "string" && (r2 = {}, l2.features.forEach((n3) => {
      const l3 = n3.attributes;
      r2[l3[e2.name]] = t2 ? l3[t2.name] : l3[e2.name];
    }));
  }
  return m$1.createFromColormap(e$2(o2), r2);
}
function A(e2) {
  return e2.dataType === "elevation";
}
function J(t2) {
  const { attributeTable: n2, bandCount: r2 } = t2;
  return r2 === 1 && (r$1(n2) || r$1(t2.histograms));
}
function z(e2) {
  var t2, n2, r2;
  return ["u8", "s8"].indexOf(e2.pixelType) > -1 && ((t2 = e2.statistics) == null || (n2 = t2[0]) == null ? void 0 : n2.min) != null && ((r2 = e2.statistics[0]) == null ? void 0 : r2.max) != null && e2.bandCount === 1;
}
function _(e2) {
  const { dataType: t2 } = e2;
  return t2 === "vector-uv" || t2 === "vector-magdir";
}
function G(e2) {
  return _(e2) ? new h() : null;
}
function H(e2) {
  var t2;
  return { color: (t2 = e2.symbolLayers[0].material) == null ? void 0 : t2.color, type: "esriSFS", style: "esriSFSSolid" };
}
function K(e2) {
  if (e2.type === "uniqueValue") {
    var t2;
    const n3 = e2.uniqueValueInfos, r2 = n3[0].symbol;
    return r2 != null && (t2 = r2.symbolLayers) != null && t2.length && (e2.uniqueValueInfos = n3.map((e3) => ({ value: e3.value, label: e3.label, symbol: e3.symbol ? H(e3.symbol) : null }))), e2;
  }
  if (e2.type === "classBreaks") {
    var n2;
    const t3 = e2.classBreakInfos, r2 = t3[0].symbol;
    return r2 != null && (n2 = r2.symbolLayers) != null && n2.length && (e2.classBreakInfos = t3.map((e3) => ({ classMinValue: e3.classMinValue, classMaxValue: e3.classMaxValue, label: e3.label, symbol: e3.symbol ? H(e3.symbol) : null }))), e2;
  }
  return e2;
}
export { K, M, V, n$1 as a, n as b, d, i, j, k, n$2 as n, p$1 as p };
