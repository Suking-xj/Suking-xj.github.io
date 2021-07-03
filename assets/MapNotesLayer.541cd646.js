var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a, prop, b2[prop]);
    }
  return a;
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
import { gR as t, gS as s, e1 as b, eT as m, ae as e, af as y, gY as x, i7 as u, ag as i, e6 as y$1, ho as u$1, hl as d, hn as y$2, i8 as y$3, dY as l, dZ as u$2, d_ as l$1, bF as k$1, c_ as L, v as ke, bT as y$4, cr as M, d1 as n$1, a0 as t$1, aa as s$1, a5 as r, d7 as o, d0 as L$1, h0 as t$2, dQ as e$1, c4 as o$1, cm as d$1, hW as nn, eV as V, eX as D, di as H } from "./vendor.74d5941c.js";
import { n as n$2 } from "./objectIdUtils.8e3fb893.js";
let n = class extends t(s(b)) {
  constructor(r2) {
    super(r2), this.elevationInfo = null, this.graphics = new m(), this.screenSizePerspectiveEnabled = true, this.type = "graphics", this.internal = false;
  }
  destroy() {
    this.removeAll(), this.graphics.destroy();
  }
  add(r2) {
    return this.graphics.add(r2), this;
  }
  addMany(r2) {
    return this.graphics.addMany(r2), this;
  }
  removeAll() {
    return this.graphics.removeAll(), this;
  }
  remove(r2) {
    this.graphics.remove(r2);
  }
  removeMany(r2) {
    this.graphics.removeMany(r2);
  }
  on(r2, e2) {
    return super.on(r2, e2);
  }
  graphicChanged(r2) {
    this.emit("graphic-update", r2);
  }
};
e([y({ type: x })], n.prototype, "elevationInfo", void 0), e([y(u())], n.prototype, "graphics", void 0), e([y({ type: ["show", "hide"] })], n.prototype, "listMode", void 0), e([y()], n.prototype, "screenSizePerspectiveEnabled", void 0), e([y({ readOnly: true })], n.prototype, "type", void 0), e([y({ constructOnly: true })], n.prototype, "internal", void 0), n = e([i("esri.layers.GraphicsLayer")], n);
var h = n;
function F(e2) {
  return e2.layers.some((e3) => e3.layerDefinition.visibilityField != null);
}
const G = new y$1({ name: "OBJECTID", alias: "OBJECTID", type: "oid", nullable: false, editable: false }), _ = new y$1({ name: "title", alias: "Title", type: "string", nullable: true, editable: true });
let P = class extends h {
  constructor() {
    super(...arguments), this.visibilityMode = "inherited";
  }
  initialize() {
    for (const e2 of this.graphics)
      e2.sourceLayer = this.layer;
    this.graphics.on("after-add", (e2) => {
      e2.item.sourceLayer = this.layer;
    }), this.graphics.on("after-remove", (e2) => {
      e2.item.sourceLayer = null;
    });
  }
  get sublayers() {
    return this.graphics;
  }
};
e([y({ readOnly: true })], P.prototype, "sublayers", null), e([y()], P.prototype, "layer", void 0), e([y({ readOnly: true })], P.prototype, "visibilityMode", void 0), P = e([i("esri.layers.MapNotesLayer.MapNotesSublayer")], P);
const k = [{ geometryType: "polygon", geometryTypeJSON: "esriGeometryPolygon", layerId: "polygonLayer", title: "Polygons", identifyingSymbol: new u$1().toJSON() }, { geometryType: "polyline", geometryTypeJSON: "esriGeometryPolyline", layerId: "polylineLayer", title: "Polylines", identifyingSymbol: new d().toJSON() }, { geometryType: "multipoint", geometryTypeJSON: "esriGeometryMultipoint", layerId: "multipointLayer", title: "Multipoints", identifyingSymbol: new y$2().toJSON() }, { geometryType: "point", geometryTypeJSON: "esriGeometryPoint", layerId: "pointLayer", title: "Points", identifyingSymbol: new y$2().toJSON() }, { geometryType: "point", geometryTypeJSON: "esriGeometryPoint", layerId: "textLayer", title: "Text", identifyingSymbol: new y$3().toJSON() }];
let z = class extends t(s(l(u$2(l$1(b))))) {
  constructor(e2) {
    super(e2), this.capabilities = { operations: { supportsMapNotesEditing: true } }, this.featureCollections = null, this.featureCollectionJSON = null, this.featureCollectionType = "notes", this.legendEnabled = false, this.minScale = 0, this.maxScale = 0, this.spatialReference = k$1.WGS84, this.sublayers = new L(k.map((e3) => new P({ id: e3.layerId, title: e3.title, layer: this }))), this.title = "Map Notes", this.type = "map-notes", this.visibilityMode = "inherited";
  }
  readCapabilities(e2, t2, r2) {
    return { operations: { supportsMapNotesEditing: !F(t2) && (r2 == null ? void 0 : r2.origin) !== "portal-item" } };
  }
  readFeatureCollections(e2, t2, r2) {
    if (!F(t2))
      return null;
    const o2 = t2.layers.map((e3) => {
      const t3 = new ke();
      return t3.read(e3, r2), t3;
    });
    return new L({ items: o2 });
  }
  readLegacyfeatureCollectionJSON(e2, r2) {
    return F(r2) ? y$4(r2.featureCollection) : null;
  }
  readFullExtent(e2, t2) {
    if (!t2.layers.length)
      return new M({ xmin: -180, ymin: -90, xmax: 180, ymax: 90, spatialReference: k$1.WGS84 });
    const r2 = k$1.fromJSON(t2.layers[0].layerDefinition.spatialReference);
    return t2.layers.reduce((e3, t3) => {
      const r3 = t3.layerDefinition.extent;
      return r3 ? M.fromJSON(r3).union(e3) : e3;
    }, new M({ spatialReference: r2 }));
  }
  readMinScale(e2, t2) {
    for (const r2 of t2.layers)
      if (r2.layerDefinition.minScale != null)
        return r2.layerDefinition.minScale;
    return 0;
  }
  readMaxScale(e2, t2) {
    for (const r2 of t2.layers)
      if (r2.layerDefinition.maxScale != null)
        return r2.layerDefinition.maxScale;
    return 0;
  }
  get multipointLayer() {
    return this._findSublayer("multipointLayer");
  }
  get pointLayer() {
    return this._findSublayer("pointLayer");
  }
  get polygonLayer() {
    return this._findSublayer("polygonLayer");
  }
  get polylineLayer() {
    return this._findSublayer("polylineLayer");
  }
  readSpatialReference(e2, t2) {
    return t2.layers.length ? k$1.fromJSON(t2.layers[0].layerDefinition.spatialReference) : k$1.WGS84;
  }
  readSublayers(e2, t2, r2) {
    if (F(t2))
      return null;
    const o2 = [];
    for (let l2 = 0; l2 < t2.layers.length; l2++) {
      var i2;
      const { layerDefinition: e3, featureSet: r3 } = t2.layers[l2], a = (i2 = e3.geometryType) != null ? i2 : r3.geometryType, n2 = k.find((t3) => {
        var r4, o3, i3;
        return a === t3.geometryTypeJSON && ((r4 = e3.drawingInfo) == null || (o3 = r4.renderer) == null || (i3 = o3.symbol) == null ? void 0 : i3.type) === t3.identifyingSymbol.type;
      });
      if (n2) {
        const t3 = new P({ id: n2.layerId, title: e3.name, layer: this, graphics: r3.features.map(({ geometry: e4, symbol: t4, attributes: r4, popupInfo: o3 }) => n$1.fromJSON({ attributes: r4, geometry: e4, symbol: t4, popupTemplate: o3 })) });
        o2.push(t3);
      }
    }
    return new L(o2);
  }
  writeSublayers(e2, t2, l2, a) {
    const { minScale: n2, maxScale: s2 } = this;
    if (t$1(e2))
      return;
    const p = e2.some((e3) => e3.graphics.length > 0);
    if (!this.capabilities.operations.supportsMapNotesEditing) {
      var m2;
      if (p)
        a == null || (m2 = a.messages) == null || m2.push(new s$1("map-notes-layer:editing-not-supported", "New map notes cannot be added to this layer"));
      return;
    }
    const u2 = [];
    let c = this.spatialReference.toJSON();
    e:
      for (const r$1 of e2)
        for (const e3 of r$1.graphics)
          if (r(e3.geometry)) {
            c = e3.geometry.spatialReference.toJSON();
            break e;
          }
    for (const r2 of k) {
      const t3 = e2.find((e3) => r2.layerId === e3.id);
      this._writeMapNoteSublayer(u2, t3, r2, n2, s2, c, a);
    }
    o("featureCollection.layers", u2, t2);
  }
  get textLayer() {
    return this._findSublayer("textLayer");
  }
  load(e2) {
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Feature Collection"] }, e2)), Promise.resolve(this);
  }
  read(e2, r2) {
    "featureCollection" in e2 && (e2 = y$4(e2), Object.assign(e2, e2.featureCollection)), super.read(e2, r2);
  }
  beforeSave() {
    return __async(this, null, function* () {
      if (t$1(this.sublayers))
        return;
      let e2 = null;
      const t2 = [];
      for (const o2 of this.sublayers)
        for (const r$12 of o2.graphics)
          if (r(r$12.geometry)) {
            const o3 = r$12.geometry;
            e2 ? d$1(o3.spatialReference, e2) || (nn(o3.spatialReference, e2) || V() || (yield D()), r$12.geometry = H(o3, e2)) : e2 = o3.spatialReference, t2.push(r$12);
          }
      const r$1 = yield L$1(t2.map((e3) => e3.geometry));
      t2.forEach((e3, t3) => e3.geometry = r$1[t3]);
    });
  }
  _findSublayer(e2) {
    var t2, r2;
    return t$1(this.sublayers) ? null : (t2 = (r2 = this.sublayers) == null ? void 0 : r2.find((t3) => t3.id === e2)) != null ? t2 : null;
  }
  _writeMapNoteSublayer(e2, r2, i2, l2, a, n2, s2) {
    const p = [];
    if (!t$1(r2)) {
      for (const e3 of r2.graphics)
        this._writeMapNote(p, e3, i2.geometryType, s2);
      this._normalizeObjectIds(p, G), e2.push({ layerDefinition: { name: r2.title, drawingInfo: { renderer: { type: "simple", symbol: y$4(i2.identifyingSymbol) } }, geometryType: i2.geometryTypeJSON, minScale: l2, maxScale: a, objectIdField: "OBJECTID", fields: [G.toJSON(), _.toJSON()], spatialReference: n2 }, featureSet: { features: p, geometryType: i2.geometryTypeJSON } });
    }
  }
  _writeMapNote(e2, t2, r$1, l2) {
    if (t$1(t2))
      return;
    const { geometry: a, symbol: s2, popupTemplate: p } = t2;
    if (t$1(a))
      return;
    var y2, m2;
    if (a.type !== r$1)
      return void (l2 == null || (y2 = l2.messages) == null || y2.push(new t$2("map-notes-layer:invalid-geometry-type", `Geometry "${a.type}" cannot be saved in "${r$1}" layer`, { graphic: t2 })));
    if (t$1(s2))
      return void (l2 == null || (m2 = l2.messages) == null || m2.push(new t$2("map-notes-layer:no-symbol", "Skipping map notes with no symbol", { graphic: t2 })));
    const u2 = { attributes: __spreadValues({}, t2.attributes), geometry: a.toJSON(), symbol: s2.toJSON() };
    r(p) && (u2.popupInfo = p.toJSON()), e2.push(u2);
  }
  _normalizeObjectIds(e2, t2) {
    const r2 = t2.name;
    let o2 = n$2(r2, e2) + 1;
    const i2 = new Set();
    for (const l2 of e2) {
      l2.attributes || (l2.attributes = {});
      const { attributes: e3 } = l2;
      (e3[r2] == null || i2.has(e3[r2])) && (e3[r2] = o2++), i2.add(e3[r2]);
    }
  }
};
e([y({ readOnly: true })], z.prototype, "capabilities", void 0), e([e$1(["portal-item", "web-map"], "capabilities", ["layers"])], z.prototype, "readCapabilities", null), e([y({ readOnly: true })], z.prototype, "featureCollections", void 0), e([e$1(["web-map", "portal-item"], "featureCollections", ["layers"])], z.prototype, "readFeatureCollections", null), e([y({ readOnly: true, json: { origins: { "web-map": { write: { enabled: true, target: "featureCollection" } } } } })], z.prototype, "featureCollectionJSON", void 0), e([e$1(["web-map", "portal-item"], "featureCollectionJSON", ["featureCollection"])], z.prototype, "readLegacyfeatureCollectionJSON", null), e([y({ readOnly: true, json: { read: false, write: { enabled: true, ignoreOrigin: true } } })], z.prototype, "featureCollectionType", void 0), e([y({ json: { write: false } })], z.prototype, "fullExtent", void 0), e([e$1(["web-map", "portal-item"], "fullExtent", ["layers"])], z.prototype, "readFullExtent", null), e([y({ readOnly: true, json: { origins: { "web-map": { write: { target: "featureCollection.showLegend", overridePolicy() {
  return { enabled: this.featureCollectionJSON != null };
} } } } } })], z.prototype, "legendEnabled", void 0), e([y({ type: ["show", "hide"] })], z.prototype, "listMode", void 0), e([y({ type: Number, nonNullable: true, json: { write: false } })], z.prototype, "minScale", void 0), e([e$1(["web-map", "portal-item"], "minScale", ["layers"])], z.prototype, "readMinScale", null), e([y({ type: Number, nonNullable: true, json: { write: false } })], z.prototype, "maxScale", void 0), e([e$1(["web-map", "portal-item"], "maxScale", ["layers"])], z.prototype, "readMaxScale", null), e([y({ readOnly: true })], z.prototype, "multipointLayer", null), e([y({ value: "ArcGISFeatureLayer", type: ["ArcGISFeatureLayer"] })], z.prototype, "operationalLayerType", void 0), e([y({ readOnly: true })], z.prototype, "pointLayer", null), e([y({ readOnly: true })], z.prototype, "polygonLayer", null), e([y({ readOnly: true })], z.prototype, "polylineLayer", null), e([y({ type: k$1 })], z.prototype, "spatialReference", void 0), e([e$1(["web-map", "portal-item"], "spatialReference", ["layers"])], z.prototype, "readSpatialReference", null), e([y({ readOnly: true, json: { origins: { "web-map": { write: { ignoreOrigin: true } } } } })], z.prototype, "sublayers", void 0), e([e$1("web-map", "sublayers", ["layers"])], z.prototype, "readSublayers", null), e([o$1("web-map", "sublayers")], z.prototype, "writeSublayers", null), e([y({ readOnly: true })], z.prototype, "textLayer", null), e([y()], z.prototype, "title", void 0), e([y({ readOnly: true, json: { read: false } })], z.prototype, "type", void 0), z = e([i("esri.layers.MapNotesLayer")], z);
var B = z;
export default B;
