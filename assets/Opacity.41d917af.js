import "./vendor.74d5941c.js";
import { o } from "./FramebufferObject.18518335.js";
import "./_commonjsHelpers.f2a458db.js";
class t {
  constructor() {
    this._size = [0, 0];
  }
  dispose() {
    this._layerFBOTexture && (this._layerFBOTexture.dispose(), this._layerFBOTexture = null);
  }
  draw(e, t2, r) {
    const { width: s, height: i } = t2;
    this._createOrResizeResources(e, s, i);
    const { context: a, painter: l } = e, { amount: o2 } = r, h = a.gl, n = this._layerFBOTexture;
    a.bindFramebuffer(t2), t2.copyToTexture(0, 0, s, i, 0, 0, n), a.setBlendingEnabled(true), a.setStencilTestEnabled(false), a.setDepthTestEnabled(false), a.setClearColor(0, 0, 0, 0), a.clear(h.COLOR_BUFFER_BIT), l.blitTexture(a, n, 9728, o2);
  }
  _createOrResizeResources(t2, r, s) {
    const { context: i } = t2;
    this._layerFBOTexture && this._size[0] === r && this._size[1] === s || (this._size[0] = r, this._size[1] = s, this._layerFBOTexture ? this._layerFBOTexture.resize(r, s) : this._layerFBOTexture = new o(i, { target: 3553, pixelFormat: 6408, internalFormat: 6408, dataType: 5121, wrapMode: 33071, samplingMode: 9728, flipped: false, width: r, height: s }));
  }
}
export { t as Opacity };
