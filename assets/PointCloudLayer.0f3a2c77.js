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
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import { ae as e$1, af as y, ag as i$1, dA as a, gV as N$1, eS as r, bT as y$1, ic as a$1, gl as c, id as n$1, gk as c$1, gj as a$2, a4 as n$2, dX as p$4, dY as l$1, dZ as u$3, gS as s, d_ as l$2, e1 as b, cE as e$2, e6 as y$2, d7 as o, a5 as r$1, dl as w, gX as a$3, ie as i$2, aa as s$1, ee as D, aj as U, g_ as c$2, M, dQ as e$3, h7 as m, hj as d$1, c4 as o$1, g$ as l$3 } from "./vendor.74d5941c.js";
import { R as R$1 } from "./SceneService.00767b42.js";
import "./resourceUtils.a485eb9e.js";
let t = class extends a {
  constructor(r2) {
    super(r2), this.field = null, this.type = null;
  }
  clone() {
    return console.warn(".clone() is not implemented for " + this.declaredClass), null;
  }
};
e$1([y({ type: String, json: { write: { enabled: true, isRequired: true } } })], t.prototype, "field", void 0), e$1([y({ readOnly: true, nonNullable: true, json: { read: false } })], t.prototype, "type", void 0), t = e$1([i$1("esri.layers.pointCloudFilters.PointCloudFilter")], t);
var p$3 = t;
var p$2;
let d = p$2 = class extends p$3 {
  constructor(r2) {
    super(r2), this.requiredClearBits = null, this.requiredSetBits = null, this.type = "bitfield";
  }
  clone() {
    return new p$2({ field: this.field, requiredClearBits: y$1(this.requiredClearBits), requiredSetBits: y$1(this.requiredSetBits) });
  }
};
e$1([y({ type: [N$1], json: { write: { enabled: true, overridePolicy() {
  return { enabled: true, isRequired: !this.requiredSetBits };
} } } })], d.prototype, "requiredClearBits", void 0), e$1([y({ type: [N$1], json: { write: { enabled: true, overridePolicy() {
  return { enabled: true, isRequired: !this.requiredClearBits };
} } } })], d.prototype, "requiredSetBits", void 0), e$1([r({ pointCloudBitfieldFilter: "bitfield" })], d.prototype, "type", void 0), d = p$2 = e$1([i$1("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")], d);
var u$2 = d;
var p$1;
let u$1 = p$1 = class extends p$3 {
  constructor(r2) {
    super(r2), this.includedReturns = [], this.type = "return";
  }
  clone() {
    return new p$1({ field: this.field, includedReturns: y$1(this.includedReturns) });
  }
};
e$1([y({ type: [["firstOfMany", "last", "lastOfMany", "single"]], json: { write: { enabled: true, isRequired: true } } })], u$1.prototype, "includedReturns", void 0), e$1([r({ pointCloudReturnFilter: "return" })], u$1.prototype, "type", void 0), u$1 = p$1 = e$1([i$1("esri.layers.pointCloudFilters.PointCloudReturnFilter")], u$1);
var n = u$1;
var p;
let u = p = class extends p$3 {
  constructor(e2) {
    super(e2), this.mode = "exclude", this.type = "value", this.values = [];
  }
  clone() {
    return new p({ field: this.field, mode: this.mode, values: y$1(this.values) });
  }
};
e$1([y({ type: ["exclude", "include"], json: { write: { enabled: true, isRequired: true } } })], u.prototype, "mode", void 0), e$1([r({ pointCloudValueFilter: "value" })], u.prototype, "type", void 0), e$1([y({ type: [Number], json: { write: { enabled: true, isRequired: true } } })], u.prototype, "values", void 0), u = p = e$1([i$1("esri.layers.pointCloudFilters.PointCloudValueFilter")], u);
var l = u;
const e = { key: "type", base: p$3, typeMap: { value: l, bitfield: u$2, return: n } };
const i = { key: "type", base: a$1, typeMap: { "point-cloud-class-breaks": c, "point-cloud-rgb": n$1, "point-cloud-stretch": c$1, "point-cloud-unique-value": a$2 }, errorContext: "renderer" };
const N = n$2.getLogger("esri.layers.PointCloudLayer"), O = l$3();
let R = class extends R$1(p$4(l$1(u$3(s(l$2(b)))))) {
  constructor(...e2) {
    super(...e2), this.operationalLayerType = "PointCloudLayer", this.popupEnabled = true, this.popupTemplate = null, this.opacity = 1, this.filters = [], this.fields = null, this.outFields = null, this.path = null, this.legendEnabled = true, this.renderer = null, this.type = "point-cloud";
  }
  normalizeCtorArgs(e2, r2) {
    return typeof e2 == "string" ? __spreadValues({ url: e2 }, r2) : e2;
  }
  get defaultPopupTemplate() {
    return this.attributeStorageInfo ? this.createPopupTemplate() : null;
  }
  get fieldsIndex() {
    return new e$2(this.fields);
  }
  getFieldDomain(e2) {
    const r2 = this.fieldsIndex.get(e2);
    return r2 && r2.domain ? r2.domain : null;
  }
  readServiceFields(e2, t2, o2) {
    return Array.isArray(e2) ? e2.map((e3) => {
      const t3 = new y$2();
      return e3.type === "FieldTypeInteger" && ((e3 = y$1(e3)).type = "esriFieldTypeInteger"), t3.read(e3, o2), t3;
    }) : Array.isArray(t2.attributeStorageInfo) ? t2.attributeStorageInfo.map((e3) => new y$2({ name: e3.name, type: e3.name === "ELEVATION" ? "double" : "integer" })) : null;
  }
  set elevationInfo(e2) {
    this._set("elevationInfo", e2), this._validateElevationInfo();
  }
  writeRenderer(e2, r2, o$12, i2) {
    o("layerDefinition.drawingInfo.renderer", e2.write(null, i2), r2);
  }
  load(e2) {
    const r2 = r$1(e2) ? e2.signal : null, t2 = this.loadFromPortal({ supportedTypes: ["Scene Service"] }, e2).catch(w).then(() => this._fetchService(r2));
    return this.addResolvingPromise(t2), Promise.resolve(this);
  }
  createPopupTemplate(e2) {
    const r2 = a$3(this, e2);
    return this.formatPopupTemplateReturnsField(r2), this.formatPopupTemplateRGBField(r2), r2;
  }
  formatPopupTemplateReturnsField(e2) {
    const r2 = this.fieldsIndex.get("RETURNS");
    if (!r2)
      return;
    const t2 = e2.fieldInfos.find((e3) => e3.fieldName === r2.name);
    if (!t2)
      return;
    const o2 = new i$2({ name: "pcl-returns-decoded", title: r2.alias || r2.name, expression: `
        var returnValue = $feature.${r2.name};
        return (returnValue % 16) + " / " + Floor(returnValue / 16);
      ` });
    e2.expressionInfos = [...e2.expressionInfos || [], o2], t2.fieldName = "expression/pcl-returns-decoded";
  }
  formatPopupTemplateRGBField(e2) {
    const r2 = this.fieldsIndex.get("RGB");
    if (!r2)
      return;
    const t2 = e2.fieldInfos.find((e3) => e3.fieldName === r2.name);
    if (!t2)
      return;
    const o2 = new i$2({ name: "pcl-rgb-decoded", title: r2.alias || r2.name, expression: `
        var rgb = $feature.${r2.name};
        var red = Floor(rgb / 65536, 0);
        var green = Floor((rgb - (red * 65536)) / 256,0);
        var blue = rgb - (red * 65536) - (green * 256);

        return "rgb(" + red + "," + green + "," + blue + ")";
      ` });
    e2.expressionInfos = [...e2.expressionInfos || [], o2], t2.fieldName = "expression/pcl-rgb-decoded";
  }
  queryCachedStatistics(e2, r2) {
    return __async(this, null, function* () {
      if (yield this.load(r2), !this.attributeStorageInfo)
        throw new s$1("scenelayer:no-cached-statistics", "Cached statistics are not available for this layer");
      const t2 = this.fieldsIndex.get(e2);
      if (!t2)
        throw new s$1("pointcloudlayer:field-unexisting", `Field '${e2}' does not exist on the layer`);
      for (const o2 of this.attributeStorageInfo)
        if (o2.name === t2.name) {
          const e3 = D(this.parsedUrl.path, `./statistics/${o2.key}`);
          return U(e3, { query: { f: "json" }, responseType: "json", signal: r2 ? r2.signal : null }).then((e4) => e4.data);
        }
      throw new s$1("pointcloudlayer:no-cached-statistics", "Cached statistics for this attribute are not available");
    });
  }
  saveAs(e2, r2) {
    return __async(this, null, function* () {
      return this._debouncedSaveOperations(1, __spreadProps(__spreadValues({}, r2), { getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "point-cloud" }), e2);
    });
  }
  save() {
    return __async(this, null, function* () {
      const e2 = { getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "point-cloud" };
      return this._debouncedSaveOperations(0, e2);
    });
  }
  validateLayer(e2) {
    if (e2.layerType && e2.layerType !== "PointCloud")
      throw new s$1("pointcloudlayer:layer-type-not-supported", "PointCloudLayer does not support this layer type", { layerType: e2.layerType });
    if (isNaN(this.version.major) || isNaN(this.version.minor))
      throw new s$1("layer:service-version-not-supported", "Service version is not supported.", { serviceVersion: this.version.versionString, supportedVersions: "1.x-2.x" });
    if (this.version.major > 2)
      throw new s$1("layer:service-version-too-new", "Service version is too new.", { serviceVersion: this.version.versionString, supportedVersions: "1.x-2.x" });
  }
  hasCachedStatistics(e2) {
    return this.attributeStorageInfo != null && this.attributeStorageInfo.some((r2) => r2.name === e2);
  }
  _getTypeKeywords() {
    return ["PointCloud"];
  }
  _validateElevationInfo() {
    const e2 = this.elevationInfo;
    e2 && (e2.mode !== "absolute-height" && N.warn(".elevationInfo=", "Point cloud layers only support absolute-height elevation mode"), e2.featureExpressionInfo && e2.featureExpressionInfo.expression !== "0" && N.warn(".elevationInfo=", "Point cloud layers do not support featureExpressionInfo"));
  }
};
e$1([y({ type: ["PointCloudLayer"] })], R.prototype, "operationalLayerType", void 0), e$1([y(c$2)], R.prototype, "popupEnabled", void 0), e$1([y({ type: M, json: { name: "popupInfo", write: true } })], R.prototype, "popupTemplate", void 0), e$1([y({ readOnly: true, json: { read: false } })], R.prototype, "defaultPopupTemplate", null), e$1([y({ readOnly: true, json: { write: false, read: false, origins: { "web-document": { write: false, read: false } } } })], R.prototype, "opacity", void 0), e$1([y({ type: ["show", "hide"] })], R.prototype, "listMode", void 0), e$1([y({ types: [e], json: { origins: { service: { read: { source: "filters" } } }, name: "layerDefinition.filters", write: true } })], R.prototype, "filters", void 0), e$1([y({ type: [y$2] })], R.prototype, "fields", void 0), e$1([y({ readOnly: true })], R.prototype, "fieldsIndex", null), e$1([e$3("service", "fields", ["fields", "attributeStorageInfo"])], R.prototype, "readServiceFields", null), e$1([y(O.outFields)], R.prototype, "outFields", void 0), e$1([y({ readOnly: true })], R.prototype, "attributeStorageInfo", void 0), e$1([y(m)], R.prototype, "elevationInfo", null), e$1([y({ type: String, json: { origins: { "web-scene": { read: true, write: true }, "portal-item": { read: true, write: true } }, read: false } })], R.prototype, "path", void 0), e$1([y(d$1)], R.prototype, "legendEnabled", void 0), e$1([y({ types: i, json: { origins: { service: { read: { source: "drawingInfo.renderer" } } }, name: "layerDefinition.drawingInfo.renderer", write: { target: { "layerDefinition.drawingInfo.renderer": { types: i }, "layerDefinition.drawingInfo.transparency": { type: Number } } } } })], R.prototype, "renderer", void 0), e$1([o$1("renderer")], R.prototype, "writeRenderer", null), e$1([y({ json: { read: false }, readOnly: true })], R.prototype, "type", void 0), R = e$1([i$1("esri.layers.PointCloudLayer")], R);
var _ = R;
export default _;
