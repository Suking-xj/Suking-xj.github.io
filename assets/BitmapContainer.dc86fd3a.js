import { I } from "./Utils.3f1577e5.js";
import { o, g } from "./WGLContainer.74815466.js";
class t extends o {
  get requiresDedicatedFBO() {
    return this.children.some((e) => e.blendFunction === "additive");
  }
  prepareRenderPasses(s) {
    const t2 = s.registerRenderPass({ name: "bitmap", brushes: [g.bitmap], target: () => this.children, drawPhase: I.MAP });
    return [...super.prepareRenderPasses(s), t2];
  }
}
export { t };
