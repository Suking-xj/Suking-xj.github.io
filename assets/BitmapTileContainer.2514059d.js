import { b6 as i$1 } from "./vendor.74d5941c.js";
import { I } from "./Utils.3f1577e5.js";
import { g } from "./WGLContainer.74815466.js";
import { r, i } from "./TileContainer.763b6c09.js";
import { _ } from "./Bitmap.0855f65e.js";
class s extends r {
  constructor(t, s2, r2, i2 = null) {
    super(t, s2, r2, r2), this.bitmap = new _(i2, "standard", false), this.bitmap.coordScale = r2, this.bitmap.once("isReady", () => this.ready());
  }
  destroy() {
    super.destroy(), this.bitmap.destroy();
  }
  beforeRender(t) {
    super.beforeRender(t), this.bitmap.beforeRender(t);
  }
  afterRender(t) {
    super.afterRender(t), this.bitmap.afterRender(t);
  }
  set stencilRef(t) {
    this.bitmap.stencilRef = t;
  }
  get stencilRef() {
    return this.bitmap.stencilRef;
  }
  setTransform(t, e) {
    super.setTransform(t, e), this.bitmap.transforms.dvs = this.transforms.dvs;
  }
  onAttach() {
    this.bitmap.stage = this.stage;
  }
  onDetach() {
    this.bitmap && (this.bitmap.stage = null);
  }
}
class n extends i {
  get requiresDedicatedFBO() {
    return this.children.some((e) => e.bitmap.blendFunction === "additive");
  }
  createTile(r2) {
    const s$1 = this._tileInfoView.getTileBounds(i$1(), r2);
    return new s(r2, s$1, this._tileInfoView.tileInfo.size);
  }
  destroyTile() {
  }
  prepareRenderPasses(e) {
    const t = e.registerRenderPass({ name: "bitmap (tile)", brushes: [g.bitmap], target: () => this.children.map((e2) => e2.bitmap), drawPhase: I.MAP });
    return [...super.prepareRenderPasses(e), t];
  }
  doRender(e) {
    this.visible && e.drawPhase === I.MAP && super.doRender(e);
  }
}
export { n };
