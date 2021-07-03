import { cF as r, eo as r$1, ep as M, bV as t, eq as h, er as b, cZ as i } from "./vendor.74d5941c.js";
import { o } from "./FramebufferObject.18518335.js";
import { a } from "./Container.d2c27c9d.js";
class e {
  constructor(e2, t2, i2) {
    this.pixelBlock = e2, this.extent = t2, this.originalPixelBlock = i2;
  }
  get width() {
    return this.pixelBlock ? this.pixelBlock.width : 0;
  }
  get height() {
    return this.pixelBlock ? this.pixelBlock.height : 0;
  }
  render(e2) {
    const t2 = this.pixelBlock;
    if (!t2)
      return;
    const i2 = this.filter({ pixelBlock: t2 }), l2 = i2.pixelBlock.getAsRGBA(), h2 = e2.createImageData(i2.pixelBlock.width, i2.pixelBlock.height);
    h2.data.set(l2), e2.putImageData(h2, 0, 0);
  }
  getRenderedRasterPixels() {
    const e2 = this.filter({ pixelBlock: this.pixelBlock });
    return { width: e2.pixelBlock.width, height: e2.pixelBlock.height, renderedRasterPixels: new Uint8Array(e2.pixelBlock.getAsRGBA().buffer) };
  }
}
function d(t2) {
  return t2 && "render" in t2;
}
function c(t2) {
  return t2 && !("render" in t2);
}
function l(t2) {
  const e2 = document.createElement("canvas");
  return e2.width = t2.width, e2.height = t2.height, t2.render(e2.getContext("2d")), e2;
}
function x(t2, e2, i2) {
  const s = { target: 3553, pixelFormat: 6408, internalFormat: 6408, dataType: 5121, wrapMode: 33071 };
  return e2 && i2 && (s.width = e2, s.height = i2), new o(t2, s);
}
class _ extends a {
  constructor(t2 = null, e2, i2 = true) {
    super(), this.requestRenderOnSourceChangedEnabled = i2, this._textureInvalidated = true, this.stencilRef = 0, this.coordScale = [1, 1], this._height = void 0, this.pixelRatio = 1, this.resolution = 0, this.rotation = 0, this._source = null, this._width = void 0, this.x = 0, this.y = 0, this.transforms = { dvs: r() }, this.blendFunction = e2, this.source = t2, this.requestRender = this.requestRender.bind(this);
  }
  destroy() {
    this._texture && (this._texture.dispose(), this._texture = null);
  }
  get isSourceScaled() {
    return this.width !== this.sourceWidth || this.height !== this.sourceHeight;
  }
  get height() {
    return this._height !== void 0 ? this._height : this.sourceHeight;
  }
  set height(t2) {
    this._height = t2;
  }
  get source() {
    return this._source;
  }
  set source(t2) {
    this._source = t2, this.invalidateTexture();
  }
  get sourceHeight() {
    return this._source instanceof HTMLImageElement ? this._source.naturalHeight : this._source.height;
  }
  get sourceWidth() {
    return this._source instanceof HTMLImageElement ? this._source.naturalWidth : this._source.width;
  }
  get width() {
    return this._width !== void 0 ? this._width : this.sourceWidth;
  }
  set width(t2) {
    this._width = t2;
  }
  beforeRender(t2) {
    super.beforeRender(t2), this.updateTexture(t2);
  }
  invalidateTexture() {
    this._textureInvalidated || (this._textureInvalidated = true, this.requestRenderOnSourceChangedEnabled && this.requestRender());
  }
  setTransform(h$1) {
    const o2 = r$1(this.transforms.dvs), [u, a2] = h$1.toScreenNoRotation([0, 0], this.x, this.y), d2 = this.resolution / this.pixelRatio / h$1.resolution, c2 = d2 * this.width, l2 = d2 * this.height, x2 = Math.PI * this.rotation / 180;
    M(o2, o2, t(u, a2)), M(o2, o2, t(c2 / 2, l2 / 2)), h(o2, o2, -x2), M(o2, o2, t(-c2 / 2, -l2 / 2)), b(o2, o2, t(c2, l2)), i(this.transforms.dvs, h$1.displayViewMat3, o2);
  }
  setSamplingProfile(t2) {
    this._texture && (t2.mips && !this._texture.descriptor.hasMipmap && this._texture.generateMipmap(), this._texture.setSamplingMode(t2.samplingMode));
  }
  bind({ context: t2 }, e2) {
    this._texture && t2.bindTexture(this._texture, e2);
  }
  updateTexture({ context: t2 }) {
    var e$1;
    if (!this.stage)
      return (e$1 = this._texture) == null || e$1.dispose(), void (this._texture = null);
    if (!this._textureInvalidated)
      return;
    this._textureInvalidated = false, this._texture || (this.source ? this._texture = x(t2, this.sourceWidth, this.sourceHeight) : this._texture = x(t2));
    const i2 = this.source;
    if (i2) {
      if (this._texture.resize(this.sourceWidth, this.sourceHeight), d(i2))
        if (i2 instanceof e) {
          const t3 = i2.getRenderedRasterPixels();
          this._texture.setData(t3.renderedRasterPixels);
        } else
          this._texture.setData(l(i2));
      else
        c(i2) && this._texture.setData(i2);
      this.ready();
    } else
      this._texture.setData(null);
  }
  onAttach() {
    this.invalidateTexture();
  }
  onDetach() {
    this.invalidateTexture();
  }
}
export { _, e };
