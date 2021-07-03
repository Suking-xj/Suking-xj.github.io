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
    var step = (x2) => x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import { b6 as i, cd as e, ae as e$1, af as y$1, ag as i$1, ac as u$2, eH as z, b7 as S$1, cr as M, eP as x$1, ei as h } from "./vendor.74d5941c.js";
import { _ } from "./Bitmap.0855f65e.js";
const t = Math.PI / 180;
function n(n2) {
  return n2 * t;
}
function r(t2, o) {
  const r2 = n(o.rotation), u2 = Math.abs(Math.cos(r2)), a = Math.abs(Math.sin(r2)), [s, c] = o.size;
  return t2[0] = Math.round(c * a + s * u2), t2[1] = Math.round(c * u2 + s * a), t2;
}
function u$1(t2, n2, o, r2) {
  const [u2, a] = n2, [s, c] = r2, i2 = 0.5 * o;
  return t2[0] = u2 - i2 * s, t2[1] = a - i2 * c, t2[2] = u2 + i2 * s, t2[3] = a + i2 * c, t2;
}
const u = i(), g = [0, 0], f = new e(0, 0, 0, 0), x = { container: null, fetchSource: null, requestUpdate: null, imageMaxWidth: 2048, imageMaxHeight: 2048, imageRotationSupported: false, imageNormalizationSupported: false, hidpi: false };
let y = class extends u$2 {
  constructor(t2) {
    super(t2), this._imagePromise = null, this.hidpi = x.hidpi, this.imageMaxWidth = x.imageMaxWidth, this.imageMaxHeight = x.imageMaxHeight, this.imageRotationSupported = x.imageRotationSupported, this.imageNormalizationSupported = x.imageNormalizationSupported, this.update = z((t3, e2) => __async(this, null, function* () {
      const i2 = t3.state, o = S$1(i2.spatialReference), r$1 = this.hidpi ? t3.pixelRatio : 1;
      if (!t3.stationary || this.destroyed)
        return null;
      this.imageRotationSupported ? (g[0] = i2.size[0], g[1] = i2.size[1]) : r(g, i2);
      const a = Math.floor(g[0] * r$1) > this.imageMaxWidth || Math.floor(g[1] * r$1) > this.imageMaxHeight, p = o && (i2.extent.xmin < o.valid[0] || i2.extent.xmax > o.valid[1]), n2 = !this.imageNormalizationSupported && p, m = !a && !n2, l = this.imageRotationSupported ? i2.rotation : 0;
      if (m)
        this._imagePromise = this._singleExport(i2, g, l, r$1, e2);
      else {
        let t4 = Math.min(this.imageMaxWidth, this.imageMaxHeight);
        n2 && (t4 = Math.min(i2.worldScreenWidth, t4)), this._imagePromise = this._tiledExport(i2, t4, l, r$1, e2);
      }
      return this._imagePromise.then((t4) => __async(this, null, function* () {
        if (this._imagePromise = null, !this.destroyed) {
          for (const e3 of this.container.children)
            t4.includes(e3) || e3.fadeOut().then(() => {
              e3.remove();
            });
          for (const e3 of t4)
            this.container.addChild(e3), e3.fadeIn();
        }
      })).catch((t4) => {
        throw this._imagePromise = null, t4;
      });
    }), 5e3);
  }
  destroy() {
  }
  get updating() {
    return this._imagePromise !== null;
  }
  updateExports(t2) {
    for (const e2 of this.container.children) {
      if (!e2.visible || !e2.stage)
        return;
      t2(e2) ? console.error("ExportStrategy.updateExports doesn't support promise yet") : (e2.invalidateTexture(), e2.requestRender());
    }
  }
  _export(t2, e2, i2, o, r2, s) {
    return Promise.resolve().then(() => this.fetchSource(t2, Math.floor(e2 * r2), Math.floor(i2 * r2), { rotation: o, pixelRatio: r2, signal: s })).then((i3) => {
      const s2 = new _(i3, "additive");
      return s2.x = t2.xmin, s2.y = t2.ymax, s2.resolution = t2.width / e2, s2.rotation = o, s2.pixelRatio = r2, s2;
    });
  }
  _singleExport(t2, e2, i2, o, r2) {
    u$1(u, t2.center, t2.resolution, e2);
    const s = new M(u[0], u[1], u[2], u[3], t2.spatialReference);
    return this._export(s, e2[0], e2[1], i2, o, r2).then((t3) => [t3]);
  }
  _tiledExport(t2, e2, i2, o, r2) {
    const s = x$1.create({ size: e2, spatialReference: t2.spatialReference, scales: [t2.scale] }), p = new h(s), m = p.getTileCoverage(t2);
    if (!m)
      return null;
    const h$1 = [];
    return m.forEach((s2, n2, m2, l) => {
      f.set(s2, n2, m2, l), p.getTileBounds(u, f);
      const d = new M(u[0], u[1], u[2], u[3], t2.spatialReference);
      h$1.push(this._export(d, e2, e2, i2, o, r2));
    }), Promise.all(h$1);
  }
};
e$1([y$1()], y.prototype, "_imagePromise", void 0), e$1([y$1()], y.prototype, "container", void 0), e$1([y$1()], y.prototype, "fetchSource", void 0), e$1([y$1()], y.prototype, "hidpi", void 0), e$1([y$1()], y.prototype, "imageMaxWidth", void 0), e$1([y$1()], y.prototype, "imageMaxHeight", void 0), e$1([y$1()], y.prototype, "imageRotationSupported", void 0), e$1([y$1()], y.prototype, "imageNormalizationSupported", void 0), e$1([y$1()], y.prototype, "requestUpdate", void 0), e$1([y$1()], y.prototype, "updating", null), y = e$1([i$1("esri.views.2d.layers.support.ExportStrategy")], y);
var S = y;
export { S };
