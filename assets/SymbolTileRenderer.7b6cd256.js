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
import { a5 as r$1, a0 as t, bY as n$1, aI as D, aF as n$2, aG as i$1, bZ as o$1, ay as c, at as n$3, bN as B, ae as e$2, ag as i$2, b6 as i$3 } from "./vendor.74d5941c.js";
import { m } from "./visualVariablesUtils.bb9f81fa.js";
import { j as s$1 } from "./schemaUtils.ab77d03d.js";
import { s } from "./CircularArray.2e27cf26.js";
import { t as te, E, I } from "./Utils.3f1577e5.js";
import { r as r$2, o as o$2 } from "./FeatureContainer.3e3899c9.js";
import { o as o$3 } from "./BaseTileRenderer.e65ebe3a.js";
import { g as g$1 } from "./WGLContainer.74815466.js";
import "./definitions.6737c10c.js";
import "./visualVariablesUtils.cb58e4df.js";
import "./MD5.1ef35834.js";
import "./MaterialKey.3bc4aaea.js";
import "./CIMSymbolHelper.6546a069.js";
import "./Rect.b51904ac.js";
import "./BidiEngine.9b392b22.js";
import "./FramebufferObject.18518335.js";
import "./_commonjsHelpers.f2a458db.js";
import "./TileContainer.763b6c09.js";
import "./Container.d2c27c9d.js";
import "./mat4f32.a5cabe00.js";
import "./VertexArrayObject.67803418.js";
import "./vec4f32.6de15d07.js";
import "./ShaderCompiler.b19da10d.js";
import "./earcut.0e5467f0.js";
import "./GeometryUtils.9c8423f5.js";
const e$1 = 6, r = 4294967296;
class o {
  constructor(t2) {
    this._head = t2, this._cursor = t2;
  }
  static from(t2) {
    const s2 = i.from(new Float32Array(t2));
    return new o(s2);
  }
  get id() {
    return this._cursor.id;
  }
  get baseZoom() {
    return this._cursor.baseZoom;
  }
  get anchorX() {
    return this._cursor.anchorX;
  }
  get anchorY() {
    return this._cursor.anchorY;
  }
  get directionX() {
    return this._cursor.directionX;
  }
  get directionY() {
    return this._cursor.directionY;
  }
  get size() {
    return this._cursor.size;
  }
  get hasVV() {
    return this._cursor.hasVV;
  }
  get boundsCount() {
    return this._cursor.boundsCount;
  }
  computedMinZoom() {
    return this._cursor.computedMinZoom();
  }
  setComputedMinZoom(t2) {
    return this._cursor.setComputedMinZoom(t2);
  }
  boundsComputedAnchorX(t2) {
    return this._cursor.boundsComputedAnchorX(t2);
  }
  boundsComputedAnchorY(t2) {
    return this._cursor.boundsComputedAnchorY(t2);
  }
  setBoundsComputedAnchorX(t2, s2) {
    return this._cursor.setBoundsComputedAnchorX(t2, s2);
  }
  setBoundsComputedAnchorY(t2, s2) {
    return this._cursor.setBoundsComputedAnchorY(t2, s2);
  }
  boundsCenterX(t2) {
    return this._cursor.boundsCenterX(t2);
  }
  boundsCenterY(t2) {
    return this._cursor.boundsCenterY(t2);
  }
  boundsWidth(t2) {
    return this._cursor.boundsWidth(t2);
  }
  boundsHeight(t2) {
    return this._cursor.boundsHeight(t2);
  }
  link(s2) {
    if (r$1(s2._head))
      return this._cursor.link(s2._head);
  }
  getCursor() {
    return this.copy();
  }
  copy() {
    var t2;
    const s2 = new o((t2 = this._head) == null ? void 0 : t2.copy());
    if (!s2._head)
      return s2;
    let e2 = s2._head, r2 = s2._head._link;
    for (; r2; )
      e2._link = r2.copy(), e2 = r2, r2 = e2._link;
    return s2;
  }
  peekId() {
    var t2;
    return (t2 = this._cursor.peekId()) != null ? t2 : this._cursor._link.peekId();
  }
  nextId() {
    const t2 = this.id;
    for (; t2 === this.id; )
      if (!this.next())
        return false;
    return true;
  }
  save() {
    this._savedCursor = this._cursor, this._savedOffset = this._cursor._offset;
  }
  restore() {
    this._cursor = this._savedCursor, this._cursor._offset = this._savedOffset;
  }
  next() {
    if (!this._cursor)
      return false;
    if (!this._cursor.next()) {
      if (!this._cursor._link)
        return false;
      this._cursor = this._cursor._link, this._cursor._offset = 0;
    }
    return true;
  }
  lookup(t2) {
    for (this._cursor = this._head; this._cursor && !this._cursor.lookup(t2); ) {
      if (!this._cursor._link)
        return false;
      this._cursor = this._cursor._link;
    }
    return !!this._cursor;
  }
  delete(s2) {
    let e2 = this._head, r2 = null;
    for (; e2; ) {
      if (e2.delete(s2))
        return e2.isEmpty() && r$1(r2) && (r2._link = e2._link), true;
      r2 = e2, e2 = e2._link;
    }
    return false;
  }
}
class i {
  constructor(t2) {
    this._offset = -1, this._link = null, this._count = 0, this._deletedCount = 0, this._offsets = { instance: null }, this._buffer = t2;
  }
  static from(t2) {
    return new i(new Float32Array(t2));
  }
  isEmpty() {
    return this._deletedCount === this.count;
  }
  get count() {
    return this._count || (this._count = this._computeCount()), this._count;
  }
  get id() {
    return this._buffer[this._offset + 0];
  }
  set id(t2) {
    this._buffer[this._offset + 0] = t2;
  }
  get baseZoom() {
    return this._buffer[this._offset + 1];
  }
  get anchorX() {
    return this._buffer[this._offset + 2];
  }
  get anchorY() {
    return this._buffer[this._offset + 3];
  }
  get directionX() {
    return this._buffer[this._offset + 4];
  }
  get directionY() {
    return this._buffer[this._offset + 5];
  }
  get size() {
    return this._buffer[this._offset + 6];
  }
  get hasVV() {
    return this._buffer[this._offset + 7];
  }
  computedMinZoom() {
    return this._buffer[this._offset + 8];
  }
  setComputedMinZoom(t2) {
    this._buffer[this._offset + 8] = t2;
  }
  get boundsCount() {
    return this._buffer[this._offset + 9];
  }
  boundsComputedAnchorX(t2) {
    return this._buffer[this._offset + 10 + t2 * e$1 + 0];
  }
  boundsComputedAnchorY(t2) {
    return this._buffer[this._offset + 10 + t2 * e$1 + 1];
  }
  setBoundsComputedAnchorX(t2, s2) {
    this._buffer[this._offset + 10 + t2 * e$1 + 0] = s2;
  }
  setBoundsComputedAnchorY(t2, s2) {
    this._buffer[this._offset + 10 + t2 * e$1 + 1] = s2;
  }
  boundsCenterX(t2) {
    return this._buffer[this._offset + 10 + t2 * e$1 + 2];
  }
  boundsCenterY(t2) {
    return this._buffer[this._offset + 10 + t2 * e$1 + 3];
  }
  boundsWidth(t2) {
    return this._buffer[this._offset + 10 + t2 * e$1 + 4];
  }
  boundsHeight(t2) {
    return this._buffer[this._offset + 10 + t2 * e$1 + 5];
  }
  link(t2) {
    let s2 = this;
    for (; s2._link; )
      s2 = s2._link;
    s2._link = t2;
  }
  getCursor() {
    return this.copy();
  }
  copy() {
    const t2 = new i(this._buffer);
    return t2._link = this._link, t2._offset = this._offset, t2._deletedCount = this._deletedCount, t2._offsets = this._offsets, t2._count = this._count, t2;
  }
  peekId() {
    const t2 = this._offset + 10 + this.boundsCount * e$1 + 0;
    return t2 >= this._buffer.length ? 0 : this._buffer[t2];
  }
  next() {
    let t2 = 0;
    for (; this._offset < this._buffer.length && t2++ < 100 && (this._offset === -1 ? this._offset = 0 : this._offset += 10 + this.boundsCount * e$1, this.id === r); )
      ;
    return this.id !== r && this._offset < this._buffer.length;
  }
  delete(t2) {
    const s2 = this._offset, e2 = this.lookup(t2);
    if (e2)
      for (this.id = 4294967295, ++this._deletedCount; this.next() && this.id === t2; )
        this.id = 4294967295, ++this._deletedCount;
    return this._offset = s2, e2;
  }
  lookup(t$1) {
    const e2 = this._offset;
    if (t(this._offsets.instance)) {
      this._offsets.instance = new Map();
      const t2 = this.copy();
      t2._offset = -1;
      let s2 = 0;
      for (; t2.next(); )
        t2.id !== s2 && (this._offsets.instance.set(t2.id, t2._offset), s2 = t2.id);
    }
    return !!this._offsets.instance.has(t$1) && (this._offset = this._offsets.instance.get(t$1), this.id !== r || (this._offset = e2, false));
  }
  _computeCount() {
    const t2 = this._offset;
    let s2 = 0;
    for (this._offset = -1; this.next(); )
      s2++;
    return this._offset = t2, s2;
  }
}
class e {
  constructor(e2, s2) {
    this._buffers = [], this.geometryType = e2, this._stage = s2;
  }
  destroy() {
    this._buffers.forEach((e2) => e2.release());
  }
  insert(e2, s2) {
    if (!s2.records.byteLength)
      return;
    e2 === "update" && this._buffers.forEach((e3) => e3.free(s2));
    const r2 = { done: false, offset: 0, vertexData: s2 };
    this._buffers.forEach((e3) => e3.insert(r2));
    let t2 = 1e3;
    for (; !r2.done && --t2; ) {
      const e3 = this._stage.pools.bufferData.acquire(s2, this.geometryType, r2.offset);
      e3.insert(r2), this._buffers.push(e3);
    }
  }
  remove(e2) {
    this._buffers.forEach((s2) => s2.freeIds(e2));
  }
  upload(e2) {
    this._buffers.forEach((s2) => s2.upload(e2));
  }
  forEachCommand(e2) {
    this._buffers.forEach((s2) => s2.displayList.forEach(e2));
  }
}
const u$1 = 50, f = 4, S = 8;
let w = 0;
class g extends r$2 {
  constructor(e2, t2, r2) {
    super(e2, t2), this.instanceId = w++, this.patchCount = 0, this._renderState = { current: { geometry: new Map(), metrics: null }, next: null, swap: false, swapFrames: 0, locked: false }, this._patches = new s(100), this._lastCommitTime = 0, this._lastMessageWasClear = false, this.transforms.labelMat2d = n$1(), this._store = r2;
  }
  destroy() {
    super.destroy(), this._renderState.current.geometry.forEach((e2) => e2.destroy());
  }
  get labelMetrics() {
    return this._renderState.current.metrics;
  }
  get hasData() {
    return !!this._renderState.current.geometry.size;
  }
  getGeometry(e2) {
    return this._renderState.current.geometry.get(e2);
  }
  setTransform(e2, t2) {
    super.setTransform(e2, t2);
    const r2 = this.transforms.labelMat2d, s2 = e2.getScreenTransform(r2, t2), o2 = n$3();
    D(o2, this.coords, s2), n$2(r2), i$1(r2, r2, o2), o$1(r2, e2.viewMat2d, r2);
  }
  patch(e2) {
    this.patchCount++, e2.clear && this._lastMessageWasClear || (this._lastMessageWasClear = e2.clear, e2.clear && this._patches.size >= u$1 && this._dropPatches(), this._patches.enqueue(e2), this.requestRender());
  }
  commit(e2) {
    if (this._lastCommitTime !== e2.time) {
      this._lastCommitTime = e2.time;
      for (let e3 = 0; e3 < f; e3++)
        this._updateMesh();
      this._renderState.swap && (this._swapRenderStates(), this.requestRender());
    }
  }
  lock() {
    this._renderState.locked = true;
  }
  unlock() {
    this._renderState.locked = false, this._flushUpdates(), this._swap();
  }
  _swapRenderStates() {
    if (this._renderState.next) {
      if (this._renderState.locked)
        return this._renderState.swap = true, void this.requestRender();
      if (this._renderState.swap = true, this._renderState.swapFrames === 0)
        return this._renderState.swapFrames = S, void this.requestRender();
      this._renderState.swapFrames-- == 1 ? this._swap() : this.requestRender();
    }
  }
  _swap() {
    this._renderState.swap && (this._renderState.swap = false, r$1(this._renderState.next) && (this._renderState.current.geometry.forEach((e2) => e2.destroy()), this._renderState.current = this._renderState.next, this._renderState.next = null));
  }
  _flushUpdates() {
    let e2 = this._patches.maxSize;
    for (; this._patches.size && e2--; )
      this._updateMesh(), this._swap();
  }
  _updateMesh() {
    const t2 = this._patches.peek();
    if (r$1(t2) && t2.clear && this._renderState.next !== null)
      return;
    const r2 = this._patches.dequeue();
    if (r$1(r2)) {
      if (r2.clear === true) {
        if (!this.isReady)
          return;
        return this._renderState.next, void (this._renderState.next = { geometry: new Map(), metrics: null });
      }
      this.requestRender(), this._patch(r2), r2.end && (this.ready(), this._swapRenderStates());
    }
  }
  _patch(e2) {
    te((t2) => {
      this._remove(t2, e2.remove), this._insert(e2.type, t2, e2.addOrUpdate, e2.clear);
    });
  }
  _insert(e$12, s2, i2, a2) {
    try {
      const n2 = c(this._renderState.next, this._renderState.current), h = i2 == null ? void 0 : i2.data[s2], o2 = n2.geometry;
      if (t(h))
        return;
      o2.has(s2) || o2.set(s2, new e(s2, this.stage)), o2.get(s2).insert(e$12, h), s2 === E.LABEL && this._insertLabelMetrics(e$12, h.metrics, a2);
    } catch (n2) {
    }
  }
  _insertLabelMetrics(e2, s2, i2) {
    const a2 = c(this._renderState.next, this._renderState.current);
    if (t(s2))
      return;
    const n2 = o.from(s2);
    if (t(a2.metrics))
      a2.metrics = n2;
    else {
      if (e2 === "update") {
        const e3 = n2.getCursor();
        for (; e3.next(); )
          a2.metrics.delete(e3.id);
      }
      a2.metrics.link(n2);
    }
  }
  _remove(e2, r2) {
    const s2 = c(this._renderState.next, this._renderState.current).geometry.get(e2);
    r2 && r2.length && s2 && (s2.remove(r2), this._removeLabelMetrics(r2));
  }
  _removeLabelMetrics(e2) {
    const { metrics: s2 } = c(this._renderState.next, this._renderState.current);
    if (!t(s2) && e2.length)
      for (const t2 of e2)
        for (; s2.delete(t2); )
          ;
  }
  _dropPatches() {
    const e2 = new Array();
    let t$1 = false;
    for (; this._patches.size; ) {
      const s2 = this._patches.dequeue();
      if (t(s2))
        break;
      if (s2.clear) {
        if (t$1)
          break;
        t$1 = true;
      }
      e2.push(s2);
    }
    this._patches.clear(), e2.forEach((e3) => this._patches.enqueue(e3));
  }
}
class a extends o$2 {
  constructor(e2, s2, t2) {
    super(e2), this._pointToCallbacks = new Map(), this._layer = t2, this._layerView = s2;
  }
  renderChildren(e2) {
    if (this.attributeView.update(), this.hasAnimation) {
      e2.painter.effects.integrate.draw(e2, e2.attributeView);
    }
    super.renderChildren(e2);
  }
  hitTest(s2, t2) {
    const i2 = [s2, t2], a2 = B();
    return this._pointToCallbacks.set(i2, a2), this.requestRender(), a2.promise;
  }
  onTileData(e2, s2) {
    e2.patch(s2), this.contains(e2) || this.addChild(e2), this.requestRender();
  }
  onTileError(e2) {
    this.contains(e2) || this.addChild(e2);
  }
  doRender(e2) {
    const { minScale: s2, maxScale: t2 } = this._layer, i2 = e2.state.scale;
    i2 <= (s2 || 1 / 0) && i2 >= t2 && super.doRender(e2);
  }
  onAttributeStoreUpdate() {
    this.hasLabels && this._layerView.view.labelManager.requestUpdate();
  }
  get hasAnimation() {
    return this.hasLabels;
  }
  get hasLabels() {
    const e2 = this._layer.featureReduction, s2 = e2 && e2.type === "cluster" && e2.labelsVisible && e2.labelingInfo && e2.labelingInfo.length;
    return this._layer.labelingInfo && this._layer.labelingInfo.length && this._layer.labelsVisible || !!s2;
  }
  get labelsVisible() {
    return this._layer.labelsVisible;
  }
  prepareRenderPasses(e2) {
    const i2 = e2.registerRenderPass({ name: "label", brushes: [g$1.label], target: () => this.hasLabels ? this.children : null, drawPhase: I.LABEL | I.LABEL_ALPHA }), a2 = e2.registerRenderPass({ name: "geometry", brushes: [g$1.fill, g$1.line, g$1.marker, g$1.text], target: () => this.children, enableDefaultDraw: () => !this._layerView.hasEffects, effects: [{ apply: e2.effects.outsideEffect, enable: () => this._layerView.hasEffects, args: () => this._layerView.effectLists.excluded }, { apply: e2.effects.insideEffect, enable: () => this._layerView.hasEffects, args: () => this._layerView.effectLists.included }, { apply: e2.effects.hittest, enable: () => !!this._pointToCallbacks.size, args: () => this._pointToCallbacks }] }), r2 = e2.registerRenderPass({ name: "highlight", brushes: [g$1.fill, g$1.line, g$1.marker, g$1.text], target: () => this.children, drawPhase: I.HIGHLIGHT, enableDefaultDraw: () => false, effects: [{ apply: e2.effects.highlight, enable: () => !!this._layerView.hasHighlight() }] });
    return [...super.prepareRenderPasses(e2), a2, r2, i2];
  }
}
let u = class extends o$3 {
  install(e2) {
    const t2 = new a(this.tileInfoView, this.layerView, this.layer);
    this.featuresView = t2, e2.addChild(t2);
  }
  uninstall(e2) {
    e2.removeChild(this.featuresView), this.featuresView.destroy();
  }
  hitTest(e2, t2) {
    return this.featuresView.hitTest(e2, t2);
  }
  supportsRenderer(e2) {
    return e2 != null && ["simple", "class-breaks", "unique-value", "dot-density", "dictionary"].indexOf(e2.type) !== -1;
  }
  onConfigUpdate(e2) {
    let t2 = null;
    if ("visualVariables" in e2) {
      const r2 = (s$1(e2).visualVariables || []).map((e3) => {
        const t3 = e3.clone();
        return "normalizationField" in e3 && (t3.normalizationField = null), e3.valueExpression && e3.valueExpression !== "$view.scale" && (t3.valueExpression = null, t3.field = "nop"), t3;
      });
      t2 = m(r2);
    }
    this.featuresView.setRendererInfo(e2, t2, this.layerView.effects);
  }
  onTileData(e2) {
    const t2 = this.tiles.get(e2.tileKey);
    t2 && e2.data && this.featuresView.onTileData(t2, e2.data), this.layerView.view.labelManager.requestUpdate();
  }
  onTileError(e2) {
    const t2 = this.tiles.get(e2.tileKey);
    t2 && this.featuresView.onTileError(t2);
  }
  forceAttributeTextureUpload() {
    this.featuresView.attributeView.forceTextureUpload();
  }
  lockGPUUploads() {
    this.featuresView.attributeView.lockTextureUpload(), this.tiles.forEach((e2) => e2.lock());
  }
  unlockGPUUploads() {
    this.featuresView.attributeView.unlockTextureUpload(), this.tiles.forEach((e2) => e2.unlock());
  }
  getMaterialItems(e2) {
    return __async(this, null, function* () {
      return this.featuresView.getMaterialItems(e2);
    });
  }
  invalidateLabels() {
    this.featuresView.hasLabels && this.layerView.view.labelManager.requestUpdate();
  }
  createTile(e2) {
    const t2 = this.tileInfoView.getTileBounds(i$3(), e2);
    return new g(e2, t2, this.featuresView.attributeView);
  }
  disposeTile(e2) {
    this.featuresView.removeChild(e2), e2.destroy(), this.layerView.view.labelManager.requestUpdate();
  }
};
u = e$2([i$2("esri.views.2d.layers.features.tileRenderers.SymbolTileRenderer")], u);
var n = u;
export default n;
