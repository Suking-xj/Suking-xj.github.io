var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import { ae as e, ag as i, cB as m, a5 as r, aw as A, iR as o } from "./vendor.74d5941c.js";
import { o as o$1 } from "./definitions.6737c10c.js";
import { l as l$1 } from "./tileUtils.7f9c3912.js";
import { p } from "./BaseProcessor.9a177f83.js";
class d {
  constructor(e2, t) {
    this.offset = e2, this.extent = t;
  }
}
function c(e2) {
  const t = e2.key, s = new Map(), r2 = 256, i2 = o$1, a = e2.tileInfoView.tileInfo.isWrappable;
  return s.set(l$1(t, -1, -1, a).id, new d([-i2, -i2], [i2 - r2, i2 - r2, i2, i2])), s.set(l$1(t, 0, -1, a).id, new d([0, -i2], [0, i2 - r2, i2, i2])), s.set(l$1(t, 1, -1, a).id, new d([i2, -i2], [0, i2 - r2, r2, i2])), s.set(l$1(t, -1, 0, a).id, new d([-i2, 0], [i2 - r2, 0, i2, i2])), s.set(l$1(t, 1, 0, a).id, new d([i2, 0], [0, 0, r2, i2])), s.set(l$1(t, -1, 1, a).id, new d([-i2, i2], [i2 - r2, 0, i2, r2])), s.set(l$1(t, 0, 1, a).id, new d([0, i2], [0, 0, i2, r2])), s.set(l$1(t, 1, 1, a).id, new d([i2, i2], [0, 0, r2, r2])), s;
}
let l = class extends p {
  constructor() {
    super(...arguments), this.type = "heatmap", this._tileKeyToFeatureSets = new Map();
  }
  initialize() {
    this.handles.add([this.tileStore.on("update", this.onTileUpdate.bind(this))]);
  }
  update(e2, t) {
    return __async(this, null, function* () {
      const s = t.schema.processors[0];
      if (s.type !== "heatmap")
        return;
      m(this._schema, s) && (e2.mesh = true, this._schema = s);
    });
  }
  onTileUpdate(e2) {
    for (const t of e2.removed)
      this._tileKeyToFeatureSets.delete(t.key.id);
  }
  onTileClear(e2) {
    const t = { clear: true };
    return this._tileKeyToFeatureSets.delete(e2.key.id), this.remoteClient.invoke("tileRenderer.onTileData", { tileKey: e2.id, data: t });
  }
  onTileMessage(e2, r$1, i2) {
    return __async(this, null, function* () {
      this._tileKeyToFeatureSets.has(e2.key.id) || this._tileKeyToFeatureSets.set(e2.key.id, new Map());
      const o$12 = this._tileKeyToFeatureSets.get(e2.key.id);
      if (r(r$1.addOrUpdate) && r$1.addOrUpdate.hasFeatures && o$12.set(r$1.addOrUpdate.instance, r$1), r$1.end) {
        const t = [], r2 = c(e2);
        this._tileKeyToFeatureSets.forEach((i3, o2) => {
          if (o2 === e2.key.id)
            i3.forEach((e3) => A(e3.addOrUpdate, (e4) => t.push(e4)));
          else if (r2.has(o2)) {
            const e3 = r2.get(o2), [a, n2] = e3.offset;
            i3.forEach((e4) => A(e4.addOrUpdate, (e5) => {
              const s = e5.transform(a, n2, 1, 1);
              t.push(s);
            }));
          }
        });
        const o$13 = o(t, this._schema.mesh, 512, 512), n = { tileKey: e2.key.id, intensityInfo: o$13 }, p2 = [o$13.matrix];
        return this.remoteClient.invoke("tileRenderer.onTileData", n, __spreadProps(__spreadValues({}, i2), { transferList: p2 }));
      }
    });
  }
  onTileError(e2, t, s) {
    return this.remoteClient.invoke("tileRenderer.onTileError", { tileKey: e2.id, error: t }, s);
  }
};
l = e([i("esri.views.2d.layers.features.processors.HeatmapProcessor")], l);
var h = l;
export default h;
