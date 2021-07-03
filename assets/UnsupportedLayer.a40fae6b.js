import { dZ as u, d_ as l, e1 as b, iC as k, aa as s, ae as e, af as y, ag as i } from "./vendor.74d5941c.js";
let c = class extends u(l(b)) {
  constructor(r) {
    super(r), this.resourceInfo = null, this.type = "unsupported";
  }
  initialize() {
    this.addResolvingPromise(new Promise((r, e2) => {
      k(() => {
        const r2 = this.resourceInfo && (this.resourceInfo.layerType || this.resourceInfo.type);
        let o = "Unsupported layer type";
        r2 && (o += " " + r2), e2(new s("layer:unsupported-layer-type", o, { layerType: r2 }));
      });
    }));
  }
  read(r, e2) {
    const o = { resourceInfo: r };
    r.id != null && (o.id = r.id), r.title != null && (o.title = r.title), super.read(o, e2);
  }
  write(r) {
    return Object.assign(r || {}, this.resourceInfo, { id: this.id });
  }
};
e([y({ readOnly: true })], c.prototype, "resourceInfo", void 0), e([y({ type: ["show", "hide"] })], c.prototype, "listMode", void 0), e([y({ json: { read: false }, readOnly: true, value: "unsupported" })], c.prototype, "type", void 0), c = e([i("esri.layers.UnsupportedLayer")], c);
var n = c;
export default n;
