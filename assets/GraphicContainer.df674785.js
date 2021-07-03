import { I } from "./Utils.3f1577e5.js";
import { t } from "./BaseGraphicContainer.437a7535.js";
class i extends t {
  renderChildren(r) {
    this.attributeView.bindTextures(r.context), this.children.some((e) => e.hasData) && (super.renderChildren(r), r.drawPhase === I.MAP && this._renderChildren(r), r.drawPhase === I.HIGHLIGHT && this._renderHighlight(r));
  }
  _renderHighlight(e) {
    const { painter: r } = e, i2 = r.effects.highlight;
    i2.bind(e), this._renderChildren(e, i2.defines), i2.draw(e), i2.unbind();
  }
}
export { i };
