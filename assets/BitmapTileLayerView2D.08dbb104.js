import { ae as e, ag as i$1 } from "./vendor.74d5941c.js";
import { n } from "./BitmapTileContainer.2514059d.js";
const i = (i2) => {
  let s = class extends i2 {
    attach() {
      this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`), this._bitmapView = new n(this._tileInfoView), this.container.addChild(this._bitmapView);
    }
    detach() {
      this.container.removeChild(this._bitmapView), this._bitmapView.removeAllChildren();
    }
  };
  return s = e([i$1("esri.views.2d.layers.BitmapTileLayerView2D")], s), s;
};
export { i };
