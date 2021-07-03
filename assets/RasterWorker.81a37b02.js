var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import { cr as M } from "./vendor.74d5941c.js";
import { u, r, U, p, C } from "./pixelUtils.5399eb4b.js";
import { T, N } from "./RasterSymbolizer.07b5503f.js";
import "./_commonjsHelpers.f2a458db.js";
import "./LercCodec.7b2d60e1.js";
class n {
  decode(e) {
    return __async(this, null, function* () {
      const r2 = yield T(e.data, e.options);
      return r2 && r2.toJSON();
    });
  }
  symbolize(s) {
    s.pixelBlock = u.fromJSON(s.pixelBlock), s.extent = s.extent ? M.fromJSON(s.extent) : null;
    const o = this.symbolizer.symbolize(s);
    return Promise.resolve(o && o.toJSON());
  }
  updateSymbolizer(e) {
    return __async(this, null, function* () {
      var r2;
      this.symbolizer = N.fromJSON(e.symbolizerJSON), e.histograms && ((r2 = this.symbolizer) == null ? void 0 : r2.rendererJSON.type) === "rasterStretch" && (this.symbolizer.rendererJSON.histograms = e.histograms);
    });
  }
  stretch(e) {
    const s = this.symbolizer.simpleStretch(u.fromJSON(e.srcPixelBlock), e.stretchParams);
    return Promise.resolve(s && s.toJSON());
  }
  estimateStatisticsHistograms(e) {
    const s = r(u.fromJSON(e.srcPixelBlock));
    return Promise.resolve(s);
  }
  split(e) {
    const s = U(u.fromJSON(e.srcPixelBlock), e.tileSize, e.maximumPyramidLevel);
    return s && s.forEach((e2, r2) => {
      s.set(r2, e2 == null ? void 0 : e2.toJSON());
    }), Promise.resolve(s);
  }
  mosaicAndTransform(e) {
    return __async(this, null, function* () {
      const s = e.srcPixelBlocks.map((e2) => e2 ? new u(e2) : null), o = p(s, e.srcMosaicSize);
      if (!e.coefs)
        return o && o.toJSON();
      const t = C(o, e.destDimension, e.coefs, e.sampleSpacing, e.interpolation);
      return t && t.toJSON();
    });
  }
}
export default n;
