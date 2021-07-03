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
import { a4 as n, ae as e, ag as i, cB as m, f7 as a, ai as t, aq as a$1, a5 as r, bF as k$1, aw as A, a0 as t$1, fk as s$1, an as g, b$ as e$1 } from "./vendor.74d5941c.js";
import { g as g$1 } from "./definitions.6737c10c.js";
import { n as n$1 } from "./schemaUtils.ab77d03d.js";
import { l } from "./CollisionGrid.398b2c81.js";
import { t as te } from "./Utils.3f1577e5.js";
import { r as r$1, k as k$2, s, i as i$1, E, c as t$2 } from "./WGLMeshFactory.8977e3d9.js";
import { v } from "./ComputedAttributeStorage.2a55b702.js";
import { p } from "./BaseProcessor.9a177f83.js";
import "./MD5.1ef35834.js";
import "./MaterialKey.3bc4aaea.js";
import "./visualVariablesUtils.cb58e4df.js";
import "./CIMSymbolHelper.6546a069.js";
import "./Rect.b51904ac.js";
import "./BidiEngine.9b392b22.js";
import "./FeatureSetReader.a91e3e2d.js";
import "./centroid.93c1b848.js";
import "./FramebufferObject.18518335.js";
import "./_commonjsHelpers.f2a458db.js";
import "./tileUtils.7f9c3912.js";
import "./cimAnalyzer.0b895c7f.js";
import "./visualVariablesUtils.bb9f81fa.js";
import "./TurboLine.ecd76861.js";
import "./GeometryUtils.9c8423f5.js";
import "./quickselect.e4940b29.js";
n.getLogger("esri.views.2d.layers.features.processors.SymbolProcessor");
function k(e2, t2) {
  return (!e2.minScale || e2.minScale >= t2) && (!e2.maxScale || e2.maxScale <= t2);
}
function x(e2) {
  const t2 = e2.message, i2 = { message: { data: {}, tileKey: t2.tileKey }, transferList: new Array() };
  for (const o in t2.data) {
    const e3 = t2.data[o];
    if (i2.message.data[o] = null, r(e3)) {
      const t3 = e3.stride, r2 = e3.indices.slice(0), a2 = e3.vertices.slice(0), n2 = e3.records.slice(0), c = { stride: t3, indices: r2, vertices: a2, records: n2, metrics: A(e3.metrics, (e4) => e4.slice(0)) };
      i2.transferList.push(r2, a2, n2), i2.message.data[o] = c;
    }
  }
  return i2;
}
let C = class extends p {
  constructor() {
    super(...arguments), this.type = "symbol", this._matchers = { feature: null, aggregate: null }, this._bufferData = new Map();
  }
  initialize() {
    this.handles.add([this.tileStore.on("update", this.onTileUpdate.bind(this))]);
  }
  destroy() {
  }
  get supportsTileUpdates() {
    return true;
  }
  update(e2, r2) {
    return __async(this, null, function* () {
      const s2 = r2.schema.processors[0];
      if (s2.type !== "symbol")
        return;
      const i2 = m(this._schema, s2);
      a(i2, "mesh") && (t("esri-2d-update-debug") && console.debug("Applying Update - Processor:", i2), e2.mesh = true, e2.why.mesh.push("Symbology changed"), this._schema = s2, this._factory = this._createFactory(s2), this._factory.update(s2, this.tileStore.tileScheme.tileInfo));
    });
  }
  onTileMessage(e2, t2, r2, s2) {
    return a$1(s2), this._onTileData(e2, t2, r2, s2);
  }
  onTileClear(e2) {
    const t2 = { clear: true };
    return this._bufferData.delete(e2.key.id), this.remoteClient.invoke("tileRenderer.onTileData", { tileKey: e2.id, data: t2 });
  }
  onTileError(e2, t2, r2) {
    const s2 = r2.signal, i2 = { tileKey: e2.id, error: t2 };
    return this.remoteClient.invoke("tileRenderer.onTileError", i2, { signal: s2 });
  }
  onTileUpdate(e2) {
    for (const t2 of e2.removed) {
      if (!this._bufferData.has(t2.key.id))
        continue;
      this._bufferData.get(t2.key.id).forEach((e3) => {
        const t3 = new Set();
        te((s3) => {
          const i3 = e3.message.data[s3];
          if (r(i3)) {
            const e4 = r$1.from(i3.records).getCursor();
            for (; e4.next(); )
              t3.add(e4.id);
          }
        });
        const s2 = e3.message.tileKey, i2 = { type: "update", addOrUpdate: null };
        return this.remoteClient.invoke("tileRenderer.onTileData", { tileKey: s2, data: i2 });
      }), this._bufferData.delete(t2.key.id);
    }
    for (const t2 of e2.added)
      this._bufferData.forEach((e3) => {
        for (const r2 of e3)
          r2.message.tileKey === t2.id && this._updateTileMesh("append", t2, x(r2), [], false, false, null);
      });
  }
  _addBufferData(e2, t2) {
    this._bufferData.has(e2) || this._bufferData.set(e2, []), this._bufferData.get(e2).push(x(t2));
  }
  _createFactory(e2) {
    const { geometryType: t2, objectIdField: r2, fields: i2 } = this.service, o = (e3, t3) => this.remoteClient.invoke("tileRenderer.getMaterialItems", e3, t3), a2 = { geometryType: t2, fields: i2, spatialReference: k$1.fromJSON(this.spatialReference) }, n2 = new k$2(o, false), { matcher: c, aggregateMatcher: l2 } = e2.mesh;
    return this._store = n2, this._matchers.feature = s(c, n2, a2), this._matchers.aggregate = A(l2, (e3) => s(e3, n2, a2)), new i$1(t2, r2, n2);
  }
  _onTileData(e2, t2, r2, s2) {
    return __async(this, null, function* () {
      const { type: o, addOrUpdate: a2, remove: n2 } = t2, c = t2.end;
      if (!a2) {
        const t3 = { type: o, addOrUpdate: null, remove: n2, clear: false, end: c };
        return this.remoteClient.invoke("tileRenderer.onTileData", { tileKey: e2.id, data: t3 }, s2);
      }
      const d = this._processFeatures(e2, a2, r2, s2);
      try {
        const r3 = yield d;
        if (t$1(r3)) {
          const t3 = { type: o, addOrUpdate: null, remove: n2, clear: false, end: c };
          return this.remoteClient.invoke("tileRenderer.onTileData", { tileKey: e2.id, data: t3 }, s2);
        }
        for (const t3 of r3)
          e2.key.id !== t3.message.tileKey && this._addBufferData(e2.key.id, t3);
        yield s$1(r3.map((r4) => {
          const i2 = e2.key.id === r4.message.tileKey, a3 = i2 ? t2.remove : [], n3 = i2 && t2.end;
          return this._updateTileMesh(o, e2, r4, a3, n3, t2.clear, s2.signal);
        }));
      } catch (m2) {
        this._handleError(e2, m2, s2);
      }
    });
  }
  _updateTileMesh(e2, t2, r2, i2, a2, n2, l2) {
    return __async(this, null, function* () {
      const d = e2, m2 = r2.message.tileKey;
      m2 !== t2.key.id && (a2 = false);
      const p2 = A(r2, (e3) => e3.message), h = A(r2, (e3) => e3.transferList) || [], f = { type: d, addOrUpdate: p2, remove: i2, clear: false, end: a2 }, u = { transferList: e$1(h) || [], signal: l2 };
      return a$1(u), this.remoteClient.invoke("tileRenderer.onTileData", { tileKey: m2, data: f }, u);
    });
  }
  _processFeatures(e2, t2, r2, s2) {
    return __async(this, null, function* () {
      if (t$1(t2) || !t2.hasFeatures)
        return null;
      const o = { transform: e2.transform, hasZ: false, hasM: false }, a2 = this._factory, n2 = { viewingMode: "", scale: e2.scale }, l2 = yield this._matchers.feature, d = yield this._matchers.aggregate;
      a$1(s2);
      const m2 = this._getLabelInfos(e2, t2);
      return yield a2.analyze(t2.getCursor(), l2, d, o, n2), a$1(s2), this._writeFeatureSet(e2, t2, o, m2, a2, r2);
    });
  }
  _writeFeatureSet(e2, t2, s2, i2, o, a2) {
    const n2 = t2.getApproximateSize(), c = this._schema.mesh.matcher.type === "simple" && this._schema.mesh.matcher.isDotDensity, l2 = new E(e2.key.id, { features: n2, records: n2, metrics: 0 }, c, a2, true), d = { viewingMode: "", scale: e2.scale }, m2 = t2.getCursor();
    for (; m2.next(); )
      try {
        const t3 = m2.getDisplayId(), a3 = r(i2) ? i2.get(t3) : null;
        o.writeCursor(l2, m2, s2, d, e2.level, a3);
      } catch (h) {
      }
    const p2 = e2.tileInfoView.tileInfo.isWrappable;
    return l2.serialize(p2);
  }
  _handleError(e2, t2, r2) {
    if (!g(t2)) {
      const s2 = { tileKey: e2.id, error: t2.message };
      return this.remoteClient.invoke("tileRenderer.onTileError", s2, { signal: r2.signal });
    }
  }
  _getLabelInfos(e2, t2) {
    const r2 = this._schema.mesh.labels, o = A(r2, (t3) => t3.filter((t4) => k(t4, e2.scale)));
    if (t$1(o) || o.length === 0)
      return null;
    const a2 = new Map(), n2 = (new l(g$1), t2.getCursor());
    for (; n2.next(); ) {
      const e3 = n2.getDisplayId(), t3 = [], r3 = v(e3), s2 = r3 && n2.readAttribute("cluster_count") !== 1 ? "aggregate" : "feature";
      for (const i2 of o) {
        if (i2.target !== s2)
          continue;
        const o2 = n2.getStorage(), a3 = r3 && s2 === "feature" ? o2.getComputedStringAtIndex(n2.readAttribute("referenceId"), i2.fieldIndex) : o2.getComputedStringAtIndex(e3, i2.fieldIndex);
        if (!a3)
          continue;
        const c = n$1(a3.toString()), l2 = c[0], d = c[1];
        this._store.getMosaicItem(i2.symbol, t$2(l2)).then((e4) => {
          t3[i2.index] = { glyphs: e4.glyphMosaicItems, rtl: d, index: i2.index };
        });
      }
      a2.set(e3, t3);
    }
    return a2;
  }
  _shouldDiscard(e2, t2) {
    switch (this.service.geometryType) {
      case "esriGeometryPoint": {
        const r2 = t2.readLegacyPointGeometry();
        return !r2 || e2.checkOverlap(r2.x, r2.y);
      }
      case "esriGeometryPolygon": {
        const r2 = t2.readLegacyCentroid();
        return !r2 || e2.checkOverlap(r2.x, r2.y);
      }
      default:
        return false;
    }
  }
  _markUsed(e2, t2) {
    switch (this.service.geometryType) {
      case "esriGeometryPoint": {
        const { x: r2, y: s2 } = t2.readLegacyPointGeometry();
        return e2.markUsed(r2, s2);
      }
      case "esriGeometryPolygon": {
        const { x: r2, y: s2 } = t2.readLegacyCentroid();
        return e2.markUsed(r2, s2);
      }
    }
  }
};
C = e([i("esri.views.2d.layers.features.processors.SymbolProcessor")], C);
var U = C;
export default U;
