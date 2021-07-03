import { iL as a$1, ae as e, ag as i$1, iM as n$1 } from "./vendor.74d5941c.js";
import { n } from "./BitmapTileContainer.2514059d.js";
import { o as o$1 } from "./BaseTileRenderer.e65ebe3a.js";
import "./Utils.3f1577e5.js";
import "./FramebufferObject.18518335.js";
import "./_commonjsHelpers.f2a458db.js";
import "./WGLContainer.74815466.js";
import "./Container.d2c27c9d.js";
import "./mat4f32.a5cabe00.js";
import "./definitions.6737c10c.js";
import "./VertexArrayObject.67803418.js";
import "./vec4f32.6de15d07.js";
import "./ShaderCompiler.b19da10d.js";
import "./earcut.0e5467f0.js";
import "./GeometryUtils.9c8423f5.js";
import "./MaterialKey.3bc4aaea.js";
import "./TileContainer.763b6c09.js";
import "./Bitmap.0855f65e.js";
class i {
  constructor() {
    this.gradient = null, this.height = 512, this.width = 512;
  }
  render(i2) {
    a$1(i2, 512, this.intensities, this.gradient, this.minPixelIntensity, this.maxPixelIntensity);
  }
}
let o = class extends o$1 {
  constructor(e2) {
    super(e2), this._intensityInfo = { minPixelIntensity: 0, maxPixelIntensity: 0 }, this.featuresView = { attributeView: { initialize: () => {
    }, requestUpdate: () => {
    } }, requestRender: () => {
    } }, this._container = new n(e2.tileInfoView);
  }
  createTile(e2) {
    const t = this._container.createTile(e2);
    return this.tileInfoView.getTileCoords(t.bitmap, e2), t.bitmap.resolution = this.tileInfoView.getTileResolution(e2), t;
  }
  onConfigUpdate() {
    const e2 = this.layer.renderer;
    if (e2.type === "heatmap") {
      const { minPixelIntensity: t, maxPixelIntensity: r } = e2;
      this._intensityInfo.minPixelIntensity = t, this._intensityInfo.maxPixelIntensity = r, this._gradient = n$1(e2.toJSON()), this.tiles.forEach((e3) => {
        const i2 = e3.bitmap.source;
        i2 && (i2.minPixelIntensity = t, i2.maxPixelIntensity = r, i2.gradient = this._gradient, e3.bitmap.invalidateTexture());
      });
    }
  }
  hitTest() {
    return Promise.resolve([]);
  }
  install(e2) {
    e2.addChild(this._container);
  }
  uninstall(e2) {
    this._container.removeAllChildren(), e2.removeChild(this._container);
  }
  disposeTile(e2) {
    this._container.removeChild(e2), e2.destroy();
  }
  supportsRenderer(e2) {
    return e2 && e2.type === "heatmap";
  }
  onTileData(e2) {
    const t = this.tiles.get(e2.tileKey);
    if (!t)
      return;
    const i$12 = e2.intensityInfo, { minPixelIntensity: r, maxPixelIntensity: s } = this._intensityInfo, o2 = t.bitmap.source || new i();
    o2.intensities = i$12 && i$12.matrix || null, o2.minPixelIntensity = r, o2.maxPixelIntensity = s, o2.gradient = this._gradient, t.bitmap.source = o2, this._container.addChild(t), this.requestUpdate();
  }
  onTileError(e2) {
    console.error(e2);
  }
  lockGPUUploads() {
  }
  unlockGPUUploads() {
  }
};
o = e([i$1("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")], o);
var a = o;
export default a;
