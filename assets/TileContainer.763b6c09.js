var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a2, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a2, prop, b[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b) => __defProps(a2, __getOwnPropDescs(b));
import { cF as r$1, cd as e, cY as s, cZ as i$1 } from "./vendor.74d5941c.js";
import { a } from "./Container.d2c27c9d.js";
import { I } from "./Utils.3f1577e5.js";
import { o, a as a$1, m } from "./WGLContainer.74815466.js";
class r extends a {
  constructor(s2, t, e$1, r2 = e$1) {
    super(), this.triangleCountReportedInDebug = 0, this.transforms = { dvs: r$1(), tileMat3: r$1() }, this.triangleCount = 0, this.key = new e(s2), this.bounds = t, this.size = e$1, this.coordRange = r2;
  }
  destroy() {
    this.texture && (this.texture.dispose(), this.texture = null);
  }
  get coords() {
    return this._coords;
  }
  get bounds() {
    return this._bounds;
  }
  set bounds(s2) {
    this._coords = [s2[0], s2[3]], this._bounds = s2;
  }
  setTransform(o2, i2) {
    const e2 = i2 / (o2.resolution * o2.pixelRatio), r2 = this.transforms.tileMat3, [n2, h] = o2.toScreenNoRotation([0, 0], this.coords), a2 = this.size[0] / this.coordRange[0] * e2, d = this.size[1] / this.coordRange[1] * e2;
    s(r2, a2, 0, 0, 0, d, 0, n2, h, 1), i$1(this.transforms.dvs, o2.displayViewMat3, r2);
  }
}
const n = (e2, r2) => e2.key.level - r2.key.level != 0 ? e2.key.level - r2.key.level : e2.key.row - r2.key.row != 0 ? e2.key.row - r2.key.row : e2.key.col - r2.key.col;
class i extends o {
  constructor(e2) {
    super(), this._tileInfoView = e2;
  }
  get requiresDedicatedFBO() {
    return false;
  }
  renderChildren(e2) {
    this.sortChildren(n), this.setStencilReference(), super.renderChildren(e2);
  }
  createRenderParams(e2) {
    const { state: r2 } = e2;
    return __spreadProps(__spreadValues({}, super.createRenderParams(e2)), { requiredLevel: this._tileInfoView.getClosestInfoForScale(r2.scale).level, displayLevel: this._tileInfoView.tileInfo.scaleToZoom(r2.scale) });
  }
  prepareRenderPasses(t) {
    const n2 = t.registerRenderPass({ name: "stencil", brushes: [a$1], drawPhase: I.DEBUG | I.MAP | I.HIGHLIGHT, target: () => this.getStencilTarget() }), i2 = t.registerRenderPass({ name: "tileInfo", brushes: [m], drawPhase: I.DEBUG, target: () => this.children, has: "esri-tiles-debug" });
    return [...super.prepareRenderPasses(t), n2, i2];
  }
  getStencilTarget() {
    return this.children;
  }
  updateTransforms(e2) {
    for (const r2 of this.children) {
      const s2 = this._tileInfoView.getTileResolution(r2.key);
      r2.setTransform(e2, s2);
    }
  }
  setStencilReference() {
    let e2 = 1;
    for (const r2 of this.children)
      r2.stencilRef = e2++;
  }
}
export { i, r };
