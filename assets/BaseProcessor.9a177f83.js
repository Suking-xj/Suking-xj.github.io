import { ae as e, af as y, ag as i, gf as d } from "./vendor.74d5941c.js";
let s = class extends d {
  initialize() {
  }
  destroy() {
  }
  get supportsTileUpdates() {
    return false;
  }
  get spatialReference() {
    const e2 = this.get("tileStore.tileScheme.spatialReference");
    return e2 && e2.toJSON() || null;
  }
};
e([y({ readOnly: true })], s.prototype, "supportsTileUpdates", null), e([y({ constructOnly: true })], s.prototype, "remoteClient", void 0), e([y({ constructOnly: true })], s.prototype, "service", void 0), e([y()], s.prototype, "spatialReference", null), e([y({ constructOnly: true })], s.prototype, "tileInfo", void 0), e([y({ constructOnly: true })], s.prototype, "tileStore", void 0), s = e([i("esri.views.2d.layers.features.processors.BaseProcessor")], s);
var p = s;
export { p };
