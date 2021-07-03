import { dY as l, dZ as u, d_ as l$1, e1 as b, v as ke, ae as e, af as y, c_ as L, dQ as e$1, ag as i } from "./vendor.74d5941c.js";
let p = class extends l(u(l$1(b))) {
  constructor(...e2) {
    super(...e2), this.type = "route";
  }
  get barrierLines() {
    return this._getNamedFeatureLayer("PolylineBarriers");
  }
  get barrierPoints() {
    return this._getNamedFeatureLayer("Barriers");
  }
  get barrierPolygons() {
    return this._getNamedFeatureLayer("PolygonBarriers");
  }
  get directionLines() {
    return this._getNamedFeatureLayer("DirectionLines");
  }
  get directionPoints() {
    return this._getNamedFeatureLayer("DirectionPoints");
  }
  readFeatureCollectionsFromItem(e2, t, r) {
    return this.revert("featureCollections", "portal-item"), t.layers.map((e3) => {
      const t2 = new ke();
      return t2.read(e3, r), t2;
    });
  }
  readFeatureCollectionsFromWebMap(e2, t, r) {
    return t.featureCollection.layers.map((e3) => {
      const t2 = new ke();
      return t2.read(e3, r), t2;
    });
  }
  get fullExtent() {
    const e2 = null;
    return this.featureCollections ? this.featureCollections.reduce((e3, t) => e3 ? e3.union(t.fullExtent) : t.fullExtent, e2) : e2;
  }
  get maxScale() {
    const e2 = null;
    return this.featureCollections ? this.featureCollections.reduce((e3, t) => e3 == null ? t.maxScale : Math.min(e3, t.maxScale), e2) : 0;
  }
  set maxScale(e2) {
    this.featureCollections.forEach((t) => {
      t.maxScale = e2;
    }), this._set("maxScale", e2);
  }
  get minScale() {
    const e2 = null;
    return this.featureCollections ? this.featureCollections.reduce((e3, t) => e3 == null ? t.minScale : Math.min(e3, t.minScale), e2) : 0;
  }
  set minScale(e2) {
    this.featureCollections.forEach((t) => {
      t.minScale = e2;
    }), this._set("minScale", e2);
  }
  get routeInfo() {
    return this._getNamedFeatureLayer("RouteInfo");
  }
  get stops() {
    return this._getNamedFeatureLayer("Stops");
  }
  load(e2) {
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Feature Collection"] }, e2)), Promise.resolve(this);
  }
  _getNamedFeatureLayer(e2) {
    if (this.featureCollections)
      return this.featureCollections.find((t) => t.title === e2);
  }
};
e([y()], p.prototype, "barrierLines", null), e([y()], p.prototype, "barrierPoints", null), e([y()], p.prototype, "barrierPolygons", null), e([y()], p.prototype, "directionLines", null), e([y()], p.prototype, "directionPoints", null), e([y({ type: L.ofType(ke) })], p.prototype, "featureCollections", void 0), e([e$1("portal-item", "featureCollections", ["layers"])], p.prototype, "readFeatureCollectionsFromItem", null), e([e$1("web-map", "featureCollections", ["featureCollection.layers"])], p.prototype, "readFeatureCollectionsFromWebMap", null), e([y({ readOnly: true })], p.prototype, "fullExtent", null), e([y({ type: ["show", "hide"] })], p.prototype, "listMode", void 0), e([y()], p.prototype, "maxScale", null), e([y()], p.prototype, "minScale", null), e([y()], p.prototype, "routeInfo", null), e([y()], p.prototype, "stops", null), e([y({ readOnly: true, json: { read: false } })], p.prototype, "type", void 0), p = e([i("esri.layers.RouteLayer")], p);
var c = p;
export default c;
