import { gR as t, gS as s, dY as l, dZ as u, hf as c, hg as p, d_ as l$1, hh as f, a5 as r, h5 as n, hi as e, ae as e$1, af as y, c4 as o, ag as i, e1 as b$1 } from "./vendor.74d5941c.js";
let v = class extends t(s(l(u(c(p(l$1(b$1))))))) {
  constructor(i2) {
    super(i2), this._visibilityHandles = {}, this.fullExtent = void 0, this.operationalLayerType = "GroupLayer", this.spatialReference = void 0, this.type = "group", this._visibilityWatcher = this._visibilityWatcher.bind(this);
  }
  initialize() {
    this._enforceVisibility(this.visibilityMode, this.visible), this.watch("visible", this._visibleWatcher.bind(this), true);
  }
  _writeLayers(i2, t2, s2, r$1) {
    const o2 = [];
    if (!i2)
      return o2;
    i2.forEach((i3) => {
      const t3 = f(i3, r$1.webmap ? r$1.webmap.getLayerJSONFromResourceInfo(i3) : null, r$1);
      r(t3) && t3.layerType && o2.push(t3);
    }), t2.layers = o2;
  }
  set portalItem(i2) {
    this._set("portalItem", i2);
  }
  set visibilityMode(i2) {
    const e2 = this._get("visibilityMode") !== i2;
    this._set("visibilityMode", i2), e2 && this._enforceVisibility(i2, this.visible);
  }
  load(i2) {
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Feature Service", "Feature Collection", "Scene Service"] }, i2)), Promise.resolve(this);
  }
  loadAll() {
    return n(this, (i2) => {
      i2(this.layers);
    });
  }
  layerAdded(i2) {
    i2.visible && this.visibilityMode === "exclusive" ? this._turnOffOtherLayers(i2) : this.visibilityMode === "inherited" && (i2.visible = this.visible), this._visibilityHandles[i2.uid] = i2.watch("visible", this._visibilityWatcher, true);
  }
  layerRemoved(i2) {
    const e2 = this._visibilityHandles[i2.uid];
    e2 && (e2.remove(), delete this._visibilityHandles[i2.uid]), this._enforceVisibility(this.visibilityMode, this.visible);
  }
  _turnOffOtherLayers(i2) {
    this.layers.forEach((e2) => {
      e2 !== i2 && (e2.visible = false);
    });
  }
  _enforceVisibility(i2, e$12) {
    if (!e(this).initialized)
      return;
    const s2 = this.layers;
    let r2 = s2.find((i3) => i3.visible);
    switch (i2) {
      case "exclusive":
        s2.length && !r2 && (r2 = s2.getItemAt(0), r2.visible = true), this._turnOffOtherLayers(r2);
        break;
      case "inherited":
        s2.forEach((i3) => {
          i3.visible = e$12;
        });
    }
  }
  _visibleWatcher(i2) {
    this.visibilityMode === "inherited" && this.layers.forEach((e2) => {
      e2.visible = i2;
    });
  }
  _visibilityWatcher(i2, e2, t2, s2) {
    const r2 = s2;
    switch (this.visibilityMode) {
      case "exclusive":
        i2 ? this._turnOffOtherLayers(r2) : this._isAnyLayerVisible() || (r2.visible = true);
        break;
      case "inherited":
        r2.visible = this.visible;
    }
  }
  _isAnyLayerVisible() {
    return this.layers.some((i2) => i2.visible);
  }
};
e$1([y()], v.prototype, "fullExtent", void 0), e$1([y({ json: { read: false, write: { ignoreOrigin: true } } })], v.prototype, "layers", void 0), e$1([o("layers")], v.prototype, "_writeLayers", null), e$1([y({ type: ["GroupLayer"] })], v.prototype, "operationalLayerType", void 0), e$1([y({ json: { origins: { "web-document": { read: false, write: false } } } })], v.prototype, "portalItem", null), e$1([y()], v.prototype, "spatialReference", void 0), e$1([y({ json: { read: false }, readOnly: true, value: "group" })], v.prototype, "type", void 0), e$1([y({ type: ["independent", "inherited", "exclusive"], value: "independent", json: { write: true, origins: { "web-map": { read: false, write: false } } } })], v.prototype, "visibilityMode", null), v = e$1([i("esri.layers.GroupLayer")], v);
var b = v;
export default b;
