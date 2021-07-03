import { ab as a$1, ac as u, ae as e, af as y, ag as i } from "./vendor.74d5941c.js";
const a = { visible: "visibleSublayers" };
let l = class extends a$1(u) {
  constructor(e2) {
    super(e2), this.scale = 0;
  }
  set layer(e2) {
    this._get("layer") !== e2 && (this._set("layer", e2), this.handles.remove("layer"), e2 && this.handles.add([e2.sublayers.on("change", () => this.notifyChange("visibleSublayers")), e2.on("wms-sublayer-update", (e3) => this.notifyChange(a[e3.propertyName]))], "layer"));
  }
  get layers() {
    const { visibleSublayers: e2 } = this;
    return e2.filter((e3) => e3.name).map((e3) => e3.name).join(",");
  }
  get version() {
    this.commitProperty("layers");
    const e2 = this.layer;
    return e2 && e2.commitProperty("imageTransparency"), (this._get("version") || 0) + 1;
  }
  get visibleSublayers() {
    const { layer: e2, scale: r } = this, s = e2 == null ? void 0 : e2.sublayers, t = [], o = (e3) => {
      const { minScale: s2, maxScale: a2, sublayers: l2, visible: i2 } = e3;
      i2 && (r === 0 || (s2 === 0 || r <= s2) && (a2 === 0 || r >= a2)) && (l2 ? l2.forEach(o) : t.unshift(e3));
    };
    return s == null || s.forEach(o), t;
  }
  toJSON() {
    const { layer: e2, layers: r } = this, { imageFormat: s, imageTransparency: t, version: o } = e2;
    return { format: s, request: "GetMap", service: "WMS", styles: "", transparent: t, version: o, layers: r };
  }
};
e([y()], l.prototype, "layer", null), e([y({ readOnly: true })], l.prototype, "layers", null), e([y({ type: Number })], l.prototype, "scale", void 0), e([y({ readOnly: true })], l.prototype, "version", null), e([y({ readOnly: true })], l.prototype, "visibleSublayers", null), l = e([i("esri.layers.support.ExportWMSImageParameters")], l);
export { l };
