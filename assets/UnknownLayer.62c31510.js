import { dZ as u$1, d_ as l, e1 as b, iC as k, aa as s, ae as e, af as y, ag as i } from "./vendor.74d5941c.js";
let c = class extends u$1(l(b)) {
  constructor(r) {
    super(r), this.resourceInfo = null, this.type = "unknown";
  }
  initialize() {
    this.addResolvingPromise(new Promise((r, o) => {
      k(() => {
        const r2 = this.resourceInfo && (this.resourceInfo.layerType || this.resourceInfo.type);
        let e2 = "Unknown layer type";
        r2 && (e2 += " " + r2), o(new s("layer:unknown-layer-type", e2, { layerType: r2 }));
      });
    }));
  }
  read(r, o) {
    super.read({ resourceInfo: r }, o);
  }
  write() {
    return null;
  }
};
e([y({ readOnly: true })], c.prototype, "resourceInfo", void 0), e([y({ type: ["show", "hide"] })], c.prototype, "listMode", void 0), e([y({ json: { read: false }, readOnly: true, value: "unknown" })], c.prototype, "type", void 0), c = e([i("esri.layers.UnknownLayer")], c);
var u = c;
export default u;
