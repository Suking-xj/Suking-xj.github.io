import { ae as e, af as y, dc as b, eP as x, ag as i, cr as M, bF as k } from "./vendor.74d5941c.js";
import { x as x$1 } from "./WebTileLayer.0a77deda.js";
let n = class extends x$1 {
  constructor(...e2) {
    super(...e2), this.portalItem = null, this.isReference = null, this.subDomains = ["a", "b", "c"], this.fullExtent = new M(-20037508342787e-6, -2003750834278e-5, 2003750834278e-5, 20037508342787e-6, k.WebMercator), this.urlTemplate = "https://{subDomain}.tile.openstreetmap.org/{level}/{col}/{row}.png", this.operationalLayerType = "OpenStreetMap", this.type = "open-street-map", this.copyright = "Map data &copy; OpenStreetMap contributors, CC-BY-SA";
  }
  get refreshInterval() {
    return 0;
  }
};
e([y({ type: b, json: { read: false, write: false, origins: { "web-document": { read: false, write: false } } } })], n.prototype, "portalItem", void 0), e([y({ type: Boolean, json: { read: false, write: false } })], n.prototype, "isReference", void 0), e([y({ type: Number, readOnly: true, json: { read: false, write: false, origins: { "web-document": { read: false, write: false } } } })], n.prototype, "refreshInterval", null), e([y({ type: x, json: { write: false } })], n.prototype, "tileInfo", void 0), e([y({ type: ["show", "hide"] })], n.prototype, "listMode", void 0), e([y({ readOnly: true, json: { read: false, write: false } })], n.prototype, "subDomains", void 0), e([y({ readOnly: true, json: { read: false, write: false } })], n.prototype, "fullExtent", void 0), e([y({ readOnly: true, json: { read: false, write: false } })], n.prototype, "urlTemplate", void 0), e([y({ type: ["OpenStreetMap"] })], n.prototype, "operationalLayerType", void 0), e([y({ json: { read: false } })], n.prototype, "type", void 0), e([y({ json: { read: false, write: false } })], n.prototype, "copyright", void 0), e([y({ json: { read: false, write: false } })], n.prototype, "wmtsInfo", void 0), n = e([i("esri.layers.OpenStreetMapLayer")], n);
var l = n;
export default l;
