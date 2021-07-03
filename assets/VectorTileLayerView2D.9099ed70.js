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
import { a5 as r$4, b$ as e$2, a0 as t$4, cF as r$6, eo as r$7, ep as M, eq as h$3, f4 as f$2, aj as U, ak as n$5, f5 as e$4, dU as p$2, ai as t$6, cd as e$5, an as g, dd as A, ce as e$6, cu as l$4, f6 as n$6, av as n$7, bN as B, b6 as i$3, ei as h$4, eP as x, a4 as n$8, b3 as u$2, aa as s$7, d1 as n$9, cB as m$2, f7 as a$5, ej as p$3, bI as h$5, ae as e$7, af as y$1, ag as i$4 } from "./vendor.74d5941c.js";
import { a as a$4 } from "./StyleRepository.bb6fee73.js";
import { e as e$3, t as t$7, c as c$1 } from "./earcut.0e5467f0.js";
import { o as o$5 } from "./FramebufferObject.18518335.js";
import { s as s$5, a as s$6 } from "./VertexArrayObject.67803418.js";
import { r as r$5, i as i$2 } from "./TileContainer.763b6c09.js";
import { l as l$5, d as d$1 } from "./LayerView2D.06dde519.js";
import { r as r$8 } from "./TileIndex.ec5f806e.js";
import { t as t$5 } from "./Rect.b51904ac.js";
import { I } from "./Utils.3f1577e5.js";
import "./vec4f32.6de15d07.js";
import "./definitions.6737c10c.js";
import "./_commonjsHelpers.f2a458db.js";
import "./Container.d2c27c9d.js";
import "./mat4f32.a5cabe00.js";
import "./WGLContainer.74815466.js";
import "./ShaderCompiler.b19da10d.js";
import "./GeometryUtils.9c8423f5.js";
import "./MaterialKey.3bc4aaea.js";
class t$3 {
  constructor(t2) {
    this.xTile = 0, this.yTile = 0, this.hash = 0, this.priority = 1, this.colliders = [], this.textVertexRanges = [], this.iconVertexRanges = [], this.tile = t2;
  }
}
class s$4 {
  constructor() {
    this.tileSymbols = [], this.parts = [{ startTime: 0, startOpacity: 0, targetOpacity: 0, show: false }, { startTime: 0, startOpacity: 0, targetOpacity: 0, show: false }], this.show = false;
  }
}
function l$3(t2, e2, r2, s2, i2, l2) {
  const o2 = r2 - i2;
  if (o2 >= 0)
    return (e2 >> o2) + (s2 - (l2 << o2)) * (t2 >> o2);
  const n2 = -o2;
  return e2 - (l2 - (s2 << n2)) * (t2 >> n2) << n2;
}
class o$4 {
  constructor(t2, e2, r2) {
    this._rows = Math.ceil(e2 / r2), this._columns = Math.ceil(t2 / r2), this._cellSize = r2, this.cells = new Array(this._rows);
    for (let s2 = 0; s2 < this._rows; s2++) {
      this.cells[s2] = new Array(this._columns);
      for (let t3 = 0; t3 < this._columns; t3++)
        this.cells[s2][t3] = [];
    }
  }
  getCell(t2, e2) {
    const r2 = Math.min(Math.max(Math.floor(e2 / this._cellSize), 0), this._rows - 1), s2 = Math.min(Math.max(Math.floor(t2 / this._cellSize), 0), this._columns - 1);
    return this.cells[r2] && this.cells[r2][s2] || null;
  }
  getCellSpan(t2, e2, r2, s2) {
    return [Math.min(Math.max(Math.floor(t2 / this._cellSize), 0), this.columns - 1), Math.min(Math.max(Math.floor(e2 / this._cellSize), 0), this.rows - 1), Math.min(Math.max(Math.floor(r2 / this._cellSize), 0), this.columns - 1), Math.min(Math.max(Math.floor(s2 / this._cellSize), 0), this.rows - 1)];
  }
  get cellSize() {
    return this._cellSize;
  }
  get columns() {
    return this._columns;
  }
  get rows() {
    return this._rows;
  }
}
function n$4(t2, r2, s2, i2, l2, o2) {
  const n2 = r2[i2++];
  for (let h2 = 0; h2 < n2; h2++) {
    const n3 = new t$3(o2);
    n3.xTile = r2[i2++], n3.yTile = r2[i2++], n3.hash = r2[i2++], n3.priority = r2[i2++];
    const h3 = r2[i2++];
    for (let t3 = 0; t3 < h3; t3++) {
      const t4 = r2[i2++], e2 = r2[i2++], l3 = r2[i2++], o3 = r2[i2++], h4 = !!r2[i2++], a3 = r2[i2++], c3 = s2[i2++], d2 = s2[i2++], p2 = r2[i2++], u2 = r2[i2++];
      n3.colliders.push({ xTile: t4, yTile: e2, dxPixels: l3, dyPixels: o3, hard: h4, partIndex: a3, width: p2, height: u2, minLod: c3, maxLod: d2 });
    }
    const a2 = t2[i2++];
    for (let e2 = 0; e2 < a2; e2++)
      n3.textVertexRanges.push([t2[i2++], t2[i2++]]);
    const c2 = t2[i2++];
    for (let e2 = 0; e2 < c2; e2++)
      n3.iconVertexRanges.push([t2[i2++], t2[i2++]]);
    l2.push(n3);
  }
  return i2;
}
function h$2(t2, e2, r2) {
  for (const [s2, i2] of t2.symbols)
    a$3(t2, e2, r2, i2, s2);
}
function a$3(t2, e2, r2, s2, i2) {
  const l2 = t2.layerData.get(i2);
  if (l2.type === 3) {
    for (const e3 of s2) {
      const s3 = e3.unique;
      let i3;
      if (e3.selectedForRendering) {
        const e4 = s3.parts[0], l3 = e4.startOpacity, o2 = e4.targetOpacity;
        t2.allSymbolsFadingOut = t2.allSymbolsFadingOut && o2 === 0;
        const n2 = r2 ? Math.floor(127 * l3) | o2 << 7 : o2 ? 255 : 0;
        i3 = n2 << 24 | n2 << 16 | n2 << 8 | n2;
      } else
        i3 = 0;
      for (const [t3, r3] of e3.iconVertexRanges)
        for (let e4 = t3; e4 < t3 + r3; e4 += 4)
          l2.iconOpacity[e4 / 4] = i3;
      if (e3.selectedForRendering) {
        const e4 = s3.parts[1], l3 = e4.startOpacity, o2 = e4.targetOpacity;
        t2.allSymbolsFadingOut = t2.allSymbolsFadingOut && o2 === 0;
        const n2 = r2 ? Math.floor(127 * l3) | o2 << 7 : o2 ? 255 : 0;
        i3 = n2 << 24 | n2 << 16 | n2 << 8 | n2;
      } else
        i3 = 0;
      for (const [t3, r3] of e3.textVertexRanges)
        for (let e4 = t3; e4 < t3 + r3; e4 += 4)
          l2.textOpacity[e4 / 4] = i3;
    }
    l2.lastOpacityUpdate = e2, l2.opacityChanged = true;
  }
}
class f$1 {
  constructor(e2, t2) {
    this.layerUIDs = [], this.isDestroyed = false, this.data = e2, this.memoryUsed = e2.byteLength;
    let r2 = 1;
    const i2 = new Uint32Array(e2);
    this.layerUIDs = [];
    const s2 = i2[r2++];
    for (let n2 = 0; n2 < s2; n2++)
      this.layerUIDs[n2] = i2[r2++];
    this.bufferDataOffset = r2, t2 && (this.layer = t2.getStyleLayerByUID(this.layerUIDs[0]));
  }
  get isPreparedForRendering() {
    return t$4(this.data);
  }
  get offset() {
    return this.bufferDataOffset;
  }
  destroy() {
    this.isDestroyed || (this.doDestroy(), this.isDestroyed = true);
  }
  prepareForRendering(t2) {
    t$4(this.data) || (this.doPrepareForRendering(t2, this.data, this.bufferDataOffset), this.data = null);
  }
}
class a$2 extends f$1 {
  constructor(e2, t2) {
    super(e2, t2), this.type = 2, this.lineIndexStart = 0, this.lineIndexCount = 0;
    const r2 = new Uint32Array(e2);
    let i2 = this.bufferDataOffset;
    this.lineIndexStart = r2[i2++], this.lineIndexCount = r2[i2++], this.bufferDataOffset = i2;
  }
  hasData() {
    return this.lineIndexCount > 0;
  }
  triangleCount() {
    return this.lineIndexCount / 3;
  }
  doDestroy() {
    r$4(this.lineVertexArrayObject) && this.lineVertexArrayObject.dispose(), r$4(this.lineVertexBuffer) && this.lineVertexBuffer.dispose(), r$4(this.lineIndexBuffer) && this.lineIndexBuffer.dispose(), this.lineVertexArrayObject = null, this.lineVertexBuffer = null, this.lineIndexBuffer = null, this.memoryUsed = 0;
  }
  doPrepareForRendering(e2, t2, r2) {
    const n2 = new Uint32Array(t2), f2 = new Int32Array(n2.buffer), a2 = n2[r2++];
    this.lineVertexBuffer = s$5.createVertex(e2, 35044, new Int32Array(f2.buffer, 4 * r2, a2)), r2 += a2;
    const o2 = n2[r2++];
    this.lineIndexBuffer = s$5.createIndex(e2, 35044, new Uint32Array(n2.buffer, 4 * r2, o2)), r2 += o2;
    const l2 = this.layer.lineMaterial;
    this.lineVertexArrayObject = new s$6(e2, l2.getAttributeLocations(), l2.getLayoutInfo(), { geometry: this.lineVertexBuffer }, this.lineIndexBuffer);
  }
}
class o$3 extends f$1 {
  constructor(e2, t2) {
    super(e2, t2), this.type = 1, this.fillIndexStart = 0, this.fillIndexCount = 0, this.outlineIndexStart = 0, this.outlineIndexCount = 0;
    const r2 = new Uint32Array(e2);
    let i2 = this.bufferDataOffset;
    this.fillIndexStart = r2[i2++], this.fillIndexCount = r2[i2++], this.outlineIndexStart = r2[i2++], this.outlineIndexCount = r2[i2++], this.bufferDataOffset = i2;
  }
  hasData() {
    return this.fillIndexCount > 0 || this.outlineIndexCount > 0;
  }
  triangleCount() {
    return (this.fillIndexCount + this.outlineIndexCount) / 3;
  }
  doDestroy() {
    r$4(this.fillVertexArrayObject) && this.fillVertexArrayObject.dispose(), r$4(this.fillVertexBuffer) && this.fillVertexBuffer.dispose(), r$4(this.fillIndexBuffer) && this.fillIndexBuffer.dispose(), this.fillVertexArrayObject = null, this.fillVertexBuffer = null, this.fillIndexBuffer = null, r$4(this.outlineVertexArrayObject) && this.outlineVertexArrayObject.dispose(), r$4(this.outlineVertexBuffer) && this.outlineVertexBuffer.dispose(), r$4(this.outlineIndexBuffer) && this.outlineIndexBuffer.dispose(), this.outlineVertexArrayObject = null, this.outlineVertexBuffer = null, this.outlineIndexBuffer = null, this.memoryUsed = 0;
  }
  doPrepareForRendering(e2, t2, r2) {
    const n2 = new Uint32Array(t2), f2 = new Int32Array(n2.buffer), a2 = n2[r2++];
    this.fillVertexBuffer = s$5.createVertex(e2, 35044, new Int32Array(f2.buffer, 4 * r2, a2)), r2 += a2;
    const o2 = n2[r2++];
    this.fillIndexBuffer = s$5.createIndex(e2, 35044, new Uint32Array(n2.buffer, 4 * r2, o2)), r2 += o2;
    const l2 = n2[r2++];
    this.outlineVertexBuffer = s$5.createVertex(e2, 35044, new Int32Array(f2.buffer, 4 * r2, l2)), r2 += l2;
    const u2 = n2[r2++];
    this.outlineIndexBuffer = s$5.createIndex(e2, 35044, new Uint32Array(n2.buffer, 4 * r2, u2)), r2 += u2;
    const h2 = this.layer, c2 = h2.fillMaterial, x2 = h2.outlineMaterial;
    this.fillVertexArrayObject = new s$6(e2, c2.getAttributeLocations(), c2.getLayoutInfo(), { geometry: this.fillVertexBuffer }, this.fillIndexBuffer), this.outlineVertexArrayObject = new s$6(e2, x2.getAttributeLocations(), x2.getLayoutInfo(), { geometry: this.outlineVertexBuffer }, this.outlineIndexBuffer);
  }
}
class l$2 extends f$1 {
  constructor(e2, t2, r2) {
    super(e2, t2), this.type = 3, this.iconPerPageElementsMap = new Map(), this.glyphPerPageElementsMap = new Map(), this.symbolInstances = [], this.isIconSDF = false, this.opacityChanged = false, this.lastOpacityUpdate = 0, this.symbols = [];
    const i2 = new Uint32Array(e2), s2 = new Int32Array(e2), f2 = new Float32Array(e2);
    let a2 = this.bufferDataOffset;
    this.isIconSDF = !!i2[a2++];
    const o2 = i2[a2++];
    for (let n2 = 0; n2 < o2; n2++) {
      const e3 = i2[a2++], t3 = i2[a2++], r3 = i2[a2++];
      this.iconPerPageElementsMap.set(e3, [t3, r3]);
    }
    const l2 = i2[a2++];
    for (let n2 = 0; n2 < l2; n2++) {
      const e3 = i2[a2++], t3 = i2[a2++], r3 = i2[a2++];
      this.glyphPerPageElementsMap.set(e3, [t3, r3]);
    }
    const u2 = i2[a2++], h2 = i2[a2++];
    this.iconOpacity = new Int32Array(u2), this.textOpacity = new Int32Array(h2), a2 = n$4(i2, s2, f2, a2, this.symbols, r2), this.bufferDataOffset = a2;
  }
  hasData() {
    return this.iconPerPageElementsMap.size > 0 || this.glyphPerPageElementsMap.size > 0;
  }
  triangleCount() {
    let e2 = 0;
    for (const [t2, r2] of this.iconPerPageElementsMap)
      e2 += r2[1];
    for (const [t2, r2] of this.glyphPerPageElementsMap)
      e2 += r2[1];
    return e2 / 3;
  }
  doDestroy() {
    r$4(this.iconVertexArrayObject) && this.iconVertexArrayObject.dispose(), r$4(this.iconVertexBuffer) && this.iconVertexBuffer.dispose(), r$4(this.iconOpacityBuffer) && this.iconOpacityBuffer.dispose(), r$4(this.iconIndexBuffer) && this.iconIndexBuffer.dispose(), this.iconVertexArrayObject = null, this.iconVertexBuffer = null, this.iconOpacityBuffer = null, this.iconIndexBuffer = null, r$4(this.textVertexArrayObject) && this.textVertexArrayObject.dispose(), r$4(this.textVertexBuffer) && this.textVertexBuffer.dispose(), r$4(this.textOpacityBuffer) && this.textOpacityBuffer.dispose(), r$4(this.textIndexBuffer) && this.textIndexBuffer.dispose(), this.textVertexArrayObject = null, this.textVertexBuffer = null, this.textOpacityBuffer = null, this.textIndexBuffer = null, this.memoryUsed = 0;
  }
  updateOpacityInfo() {
    if (!this.opacityChanged)
      return;
    this.opacityChanged = false;
    const e2 = e$2(this.iconOpacity), t2 = e$2(this.iconOpacityBuffer);
    e2.length > 0 && e2.byteLength === t2.size && t2.setSubData(e2);
    const i2 = e$2(this.textOpacity), s2 = e$2(this.textOpacityBuffer);
    i2.length > 0 && i2.byteLength === s2.size && s2.setSubData(i2);
  }
  doPrepareForRendering(e2, t2, n2) {
    const f2 = new Uint32Array(t2), a2 = new Int32Array(f2.buffer), o2 = f2[n2++];
    this.iconVertexBuffer = s$5.createVertex(e2, 35044, new Int32Array(a2.buffer, 4 * n2, o2)), n2 += o2;
    const l2 = f2[n2++];
    this.iconIndexBuffer = s$5.createIndex(e2, 35044, new Uint32Array(f2.buffer, 4 * n2, l2)), n2 += l2;
    const u2 = f2[n2++];
    this.textVertexBuffer = s$5.createVertex(e2, 35044, new Int32Array(a2.buffer, 4 * n2, u2)), n2 += u2;
    const h2 = f2[n2++];
    this.textIndexBuffer = s$5.createIndex(e2, 35044, new Uint32Array(f2.buffer, 4 * n2, h2)), n2 += h2, this.iconOpacityBuffer = s$5.createVertex(e2, 35044, e$2(this.iconOpacity).buffer), this.textOpacityBuffer = s$5.createVertex(e2, 35044, e$2(this.textOpacity).buffer);
    const c2 = this.layer, x2 = c2.iconMaterial, y2 = c2.textMaterial;
    this.iconVertexArrayObject = new s$6(e2, x2.getAttributeLocations(), x2.getLayoutInfo(), { geometry: this.iconVertexBuffer, opacity: this.iconOpacityBuffer }, this.iconIndexBuffer), this.textVertexArrayObject = new s$6(e2, y2.getAttributeLocations(), y2.getLayoutInfo(), { geometry: this.textVertexBuffer, opacity: this.textOpacityBuffer }, this.textIndexBuffer);
  }
}
class u$1 extends f$1 {
  constructor(e2, t2) {
    super(e2, t2), this.type = 4, this.circleIndexStart = 0, this.circleIndexCount = 0;
    const r2 = new Uint32Array(e2);
    let i2 = this.bufferDataOffset;
    this.circleIndexStart = r2[i2++], this.circleIndexCount = r2[i2++], this.bufferDataOffset = i2;
  }
  hasData() {
    return this.circleIndexCount > 0;
  }
  triangleCount() {
    return this.circleIndexCount / 3;
  }
  doDestroy() {
    r$4(this.circleVertexArrayObject) && this.circleVertexArrayObject.dispose(), r$4(this.circleVertexBuffer) && this.circleVertexBuffer.dispose(), r$4(this.circleIndexBuffer) && this.circleIndexBuffer.dispose(), this.circleVertexArrayObject = null, this.circleVertexBuffer = null, this.circleIndexBuffer = null, this.memoryUsed = 0;
  }
  doPrepareForRendering(e2, t2, r2) {
    const n2 = new Uint32Array(t2), f2 = new Int32Array(n2.buffer), a2 = n2[r2++];
    this.circleVertexBuffer = s$5.createVertex(e2, 35044, new Int32Array(f2.buffer, 4 * r2, a2)), r2 += a2;
    const o2 = n2[r2++];
    this.circleIndexBuffer = s$5.createIndex(e2, 35044, new Uint32Array(n2.buffer, 4 * r2, o2)), r2 += o2;
    const l2 = this.layer.circleMaterial;
    this.circleVertexArrayObject = new s$6(e2, l2.getAttributeLocations(), l2.getLayoutInfo(), { geometry: this.circleVertexBuffer }, this.circleIndexBuffer);
  }
}
class d extends r$5 {
  constructor(e2, t2, s2, a2, r2 = null) {
    super(e2, s2, a2, [4096, 4096]), this._memCache = r2, this._referenced = 0, this._hasSymbolBuckets = false, this._memoryUsedByLayerData = 0, this.layerData = new Map(), this.layerCount = 0, this.status = "loading", this.allSymbolsFadingOut = false, this.lastOpacityUpdate = 0, this.symbols = new Map(), this.isCoverage = false, this.neededForCoverage = false, this.decluttered = false, this.invalidating = false, this.parentTile = null, this.childrenTiles = new Set(), this._processed = false, this._referenced = 1, this.styleRepository = t2, this.id = e2.id, this.transforms.tileUnitsToPixels = r$6();
  }
  get hasSymbolBuckets() {
    return this._hasSymbolBuckets;
  }
  get isFading() {
    return this._hasSymbolBuckets && performance.now() - this.lastOpacityUpdate < e$3;
  }
  get isHoldingForFade() {
    return this._hasSymbolBuckets && (!this.allSymbolsFadingOut || performance.now() - this.lastOpacityUpdate < e$3);
  }
  get wasRequested() {
    return this.status === "errored" || this.status === "loaded" || this.status === "reloading";
  }
  setData(e2) {
    this.changeDataImpl(e2), this.requestRender(), this.ready(), this.invalidating = false, this._processed = true;
  }
  deleteLayerData(t2) {
    let s2 = false;
    for (const e2 of t2)
      if (this.layerData.has(e2)) {
        const t3 = this.layerData.get(e2);
        this._memoryUsedByLayerData -= t3.memoryUsed, t3.type === 3 && this.symbols.has(e2) && (this.symbols.delete(e2), s2 = true), t3.destroy(), this.layerData.delete(e2), this.layerCount--;
      }
    r$4(this._memCache) && this._memCache.updateSize(this.key.id, this, this._memoryUsedByLayerData), s2 && this.emit("symbols-changed"), this.requestRender();
  }
  processed() {
    return this._processed;
  }
  hasData() {
    return this.layerCount > 0;
  }
  dispose() {
    this.status !== "unloaded" && (m$1.delete(this), d._destroyRenderBuckets(this.layerData), this.layerData = null, this.layerCount = 0, this._memoryUsedByLayerData = 0, this.destroy(), this.status = "unloaded");
  }
  release() {
    return --this._referenced == 0 && (this.dispose(), this.stage = null, true);
  }
  retain() {
    ++this._referenced;
  }
  get referenced() {
    return this._referenced;
  }
  getMemoryUsage() {
    return (this._memoryUsedByLayerData + 256) / (this._referenced || 1);
  }
  changeDataImpl(t2) {
    let s2 = false;
    if (t2) {
      const a2 = this._createRenderBuckets(t2);
      for (const [e2, t3] of a2) {
        if (this.layerData.has(e2)) {
          const s3 = this.layerData.get(e2);
          this._memoryUsedByLayerData -= t3.memoryUsed, s3.destroy(), this.layerData.delete(e2), this.layerCount--;
        }
        t3.type === 3 && (this.symbols.set(e2, t3.symbols), s2 = true), this._memoryUsedByLayerData += t3.memoryUsed, this.layerData.set(e2, t3), this.layerCount++;
      }
      r$4(this._memCache) && this._memCache.updateSize(this.key.id, this, this._memoryUsedByLayerData);
    }
    this._hasSymbolBuckets = false;
    for (const [e2, a2] of this.layerData)
      a2.type === 3 && (this._hasSymbolBuckets = true);
    s2 && this.emit("symbols-changed");
  }
  attachWithContext(e2) {
    this.stage = { context: e2, trashDisplayObject(e3) {
      e3.processDetach();
    }, untrashDisplayObject: () => false };
  }
  setTransform(e2, i2) {
    super.setTransform(e2, i2);
    const o2 = i2 / (e2.resolution * e2.pixelRatio), h2 = this.size[0] / this.coordRange[0] * o2, n2 = this.size[1] / this.coordRange[1] * o2, l2 = [0, 0];
    e2.toScreen(l2, this.coords);
    const c2 = this.transforms.tileUnitsToPixels;
    r$7(c2), M(c2, c2, l2), h$3(c2, c2, Math.PI * e2.rotation / 180), f$2(c2, c2, [h2, n2, 1]);
  }
  static _destroyRenderBuckets(e2) {
    if (!e2)
      return;
    const t2 = new Set();
    e2.forEach((e3) => {
      t2.has(e3) || (e3.destroy(), t2.add(e3));
    }), e2.clear();
  }
  _createRenderBuckets(e2) {
    const t2 = new Map(), s2 = new Map();
    for (const a2 of e2) {
      const e3 = this._deserializeBucket(a2, s2);
      for (const s3 of e3.layerUIDs)
        t2.set(s3, e3);
    }
    return t2;
  }
  _deserializeBucket(e2, t2) {
    let s2 = t2.get(e2);
    if (s2)
      return s2;
    switch (new Uint32Array(e2)[0]) {
      case 1:
        s2 = new o$3(e2, this.styleRepository);
        break;
      case 2:
        s2 = new a$2(e2, this.styleRepository);
        break;
      case 3:
        s2 = new l$2(e2, this.styleRepository, this);
        break;
      case 4:
        s2 = new u$1(e2, this.styleRepository);
    }
    return t2.set(e2, s2), s2;
  }
}
const m$1 = new Map();
class e$1 {
  constructor(e2, t2) {
    this._width = 0, this._height = 0, this._free = [], this._width = e2, this._height = t2, this._free.push(new t$5(0, 0, e2, t2));
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  allocate(e2, t2) {
    if (e2 > this._width || t2 > this._height)
      return new t$5();
    let i2 = null, s2 = -1;
    for (let h2 = 0; h2 < this._free.length; ++h2) {
      const w2 = this._free[h2];
      e2 <= w2.width && t2 <= w2.height && (i2 === null || w2.y <= i2.y && w2.x <= i2.x) && (i2 = w2, s2 = h2);
    }
    return i2 === null ? new t$5() : (this._free.splice(s2, 1), i2.width < i2.height ? (i2.width > e2 && this._free.push(new t$5(i2.x + e2, i2.y, i2.width - e2, t2)), i2.height > t2 && this._free.push(new t$5(i2.x, i2.y + t2, i2.width, i2.height - t2))) : (i2.width > e2 && this._free.push(new t$5(i2.x + e2, i2.y, i2.width - e2, i2.height)), i2.height > t2 && this._free.push(new t$5(i2.x, i2.y + t2, e2, i2.height - t2))), new t$5(i2.x, i2.y, e2, t2));
  }
  release(h2) {
    for (let e2 = 0; e2 < this._free.length; ++e2) {
      const t2 = this._free[e2];
      if (t2.y === h2.y && t2.height === h2.height && t2.x + t2.width === h2.x)
        t2.width += h2.width;
      else if (t2.x === h2.x && t2.width === h2.width && t2.y + t2.height === h2.y)
        t2.height += h2.height;
      else if (h2.y === t2.y && h2.height === t2.height && h2.x + h2.width === t2.x)
        t2.x = h2.x, t2.width += h2.width;
      else {
        if (h2.x !== t2.x || h2.width !== t2.width || h2.y + h2.height !== t2.y)
          continue;
        t2.y = h2.y, t2.height += h2.height;
      }
      this._free.splice(e2, 1), this.release(h2);
    }
    this._free.push(h2);
  }
}
class s$3 {
  constructor(t2, e2, s2) {
    this.width = 0, this.height = 0, this._dirties = [], this._glyphData = [], this._currentPage = 0, this._glyphIndex = {}, this._textures = [], this._rangePromises = new Map(), this.width = t2, this.height = e2, this._glyphSource = s2, this._binPack = new e$1(t2 - 4, e2 - 4), this._glyphData.push(new Uint8Array(t2 * e2)), this._dirties.push(true), this._textures.push(void 0);
  }
  getGlyphItems(t2, s2) {
    const h2 = [], r2 = this._glyphSource, n2 = new Set(), o2 = 1 / 256;
    for (const e2 of s2) {
      const t3 = Math.floor(e2 * o2);
      n2.add(t3);
    }
    const a2 = [];
    return n2.forEach((e2) => {
      if (e2 <= 256) {
        const i2 = t2 + e2;
        if (this._rangePromises.has(i2))
          a2.push(this._rangePromises.get(i2));
        else {
          const s3 = r2.getRange(t2, e2).then(() => {
            this._rangePromises.delete(i2);
          }, () => {
            this._rangePromises.delete(i2);
          });
          this._rangePromises.set(i2, s3), a2.push(s3);
        }
      }
    }), Promise.all(a2).then(() => {
      let n3 = this._glyphIndex[t2];
      n3 || (n3 = {}, this._glyphIndex[t2] = n3);
      for (const o3 of s2) {
        const s3 = n3[o3];
        if (s3) {
          h2[o3] = { sdf: true, rect: s3.rect, metrics: s3.metrics, page: s3.page, code: o3 };
          continue;
        }
        const a3 = r2.getGlyph(t2, o3);
        if (!a3 || !a3.metrics)
          continue;
        const c2 = a3.metrics;
        let l2;
        if (c2.width === 0)
          l2 = new t$5(0, 0, 0, 0);
        else {
          const t3 = 3, e2 = c2.width + 2 * t3, s4 = c2.height + 2 * t3;
          let h3 = e2 % 4 ? 4 - e2 % 4 : 4, r3 = s4 % 4 ? 4 - s4 % 4 : 4;
          h3 === 1 && (h3 = 5), r3 === 1 && (r3 = 5), l2 = this._binPack.allocate(e2 + h3, s4 + r3), l2.isEmpty && (this._dirties[this._currentPage] || (this._glyphData[this._currentPage] = null), this._currentPage = this._glyphData.length, this._glyphData.push(new Uint8Array(this.width * this.height)), this._dirties.push(true), this._textures.push(void 0), this._binPack = new e$1(this.width - 4, this.height - 4), l2 = this._binPack.allocate(e2 + h3, s4 + r3));
          const n4 = this._glyphData[this._currentPage], o4 = a3.bitmap;
          let g2, _;
          if (o4)
            for (let i2 = 0; i2 < s4; i2++) {
              g2 = e2 * i2, _ = this.width * (l2.y + i2 + 1) + l2.x;
              for (let t4 = 0; t4 < e2; t4++)
                n4[_ + t4 + 1] = o4[g2 + t4];
            }
        }
        n3[o3] = { rect: l2, metrics: c2, tileIDs: null, page: this._currentPage }, h2[o3] = { sdf: true, rect: l2, metrics: c2, page: this._currentPage, code: o3 }, this._dirties[this._currentPage] = true;
      }
      return h2;
    });
  }
  removeGlyphs(t2) {
    for (const e2 in this._glyphIndex) {
      const i2 = this._glyphIndex[e2];
      if (!i2)
        continue;
      let s2;
      for (const e3 in i2)
        if (s2 = i2[e3], s2.tileIDs.delete(t2), s2.tileIDs.size === 0) {
          const t3 = this._glyphData[s2.page], h2 = s2.rect;
          let r2, n2;
          for (let e4 = 0; e4 < h2.height; e4++)
            for (r2 = this.width * (h2.y + e4) + h2.x, n2 = 0; n2 < h2.width; n2++)
              t3[r2 + n2] = 0;
          delete i2[e3], this._dirties[s2.page] = true;
        }
    }
  }
  bind(e2, i2, s2, h2 = 0) {
    this._textures[s2] || (this._textures[s2] = new o$5(e2, { pixelFormat: 6406, dataType: 5121, width: this.width, height: this.height }, new Uint8Array(this.width * this.height)));
    const r2 = this._textures[s2];
    r2.setSamplingMode(i2), this._dirties[s2] && r2.setData(this._glyphData[s2]), e2.bindTexture(r2, h2), this._dirties[s2] = false;
  }
  dispose() {
    this._binPack = null;
    for (const t2 of this._textures)
      t2 && t2.dispose();
    this._textures.length = 0;
  }
}
class s$2 {
  constructor(t2) {
    if (this._metrics = [], this._bitmaps = [], t2)
      for (; t2.next(); )
        switch (t2.tag()) {
          case 1: {
            const e2 = t2.getMessage();
            for (; e2.next(); )
              switch (e2.tag()) {
                case 3: {
                  const t3 = e2.getMessage();
                  let s2, a2, r2, n2, i2, c2, g2;
                  for (; t3.next(); )
                    switch (t3.tag()) {
                      case 1:
                        s2 = t3.getUInt32();
                        break;
                      case 2:
                        a2 = t3.getBytes();
                        break;
                      case 3:
                        r2 = t3.getUInt32();
                        break;
                      case 4:
                        n2 = t3.getUInt32();
                        break;
                      case 5:
                        i2 = t3.getSInt32();
                        break;
                      case 6:
                        c2 = t3.getSInt32();
                        break;
                      case 7:
                        g2 = t3.getUInt32();
                        break;
                      default:
                        t3.skip();
                    }
                  t3.release(), s2 && (this._metrics[s2] = { width: r2, height: n2, left: i2, top: c2, advance: g2 }, this._bitmaps[s2] = a2);
                  break;
                }
                default:
                  e2.skip();
              }
            e2.release();
            break;
          }
          default:
            t2.skip();
        }
  }
  getMetrics(t2) {
    return this._metrics[t2];
  }
  getBitmap(t2) {
    return this._bitmaps[t2];
  }
}
class a$1 {
  constructor() {
    this._ranges = [];
  }
  getRange(t2) {
    return this._ranges[t2];
  }
  addRange(t2, e2) {
    this._ranges[t2] = e2;
  }
}
class r$3 {
  constructor(t2) {
    this._glyphInfo = {}, this._baseURL = t2;
  }
  getRange(a2, r2) {
    const n2 = this._getFontStack(a2);
    if (n2.getRange(r2))
      return Promise.resolve();
    const i2 = 256 * r2, c2 = i2 + 255, g2 = this._baseURL.replace("{fontstack}", a2).replace("{range}", i2 + "-" + c2);
    return U(g2, { responseType: "array-buffer" }).then((t2) => {
      n2.addRange(r2, new s$2(new n$5(new Uint8Array(t2.data), new DataView(t2.data))));
    }).catch(() => {
      n2.addRange(r2, new s$2());
    });
  }
  getGlyph(t2, e2) {
    const s2 = this._getFontStack(t2);
    if (!s2)
      return;
    const a2 = Math.floor(e2 / 256);
    if (a2 > 256)
      return;
    const r2 = s2.getRange(a2);
    return r2 ? { metrics: r2.getMetrics(e2), bitmap: r2.getBitmap(e2) } : void 0;
  }
  _getFontStack(t2) {
    let e2 = this._glyphInfo[t2];
    return e2 || (e2 = this._glyphInfo[t2] = new a$1()), e2;
  }
}
class s$1 {
  constructor(t2, i2, s2 = 0) {
    this._size = [], this._mosaicsData = [], this._textures = [], this._dirties = [], this._maxItemSize = 0, this._currentPage = 0, this._pageWidth = 0, this._pageHeight = 0, this._mosaicRects = {}, this.pixelRatio = 1, (t2 <= 0 || i2 <= 0) && console.error("Sprites mosaic defaultWidth and defaultHeight must be greater than zero!"), this._pageWidth = t2, this._pageHeight = i2, s2 > 0 && (this._maxItemSize = s2), this._binPack = new e$1(t2 - 4, i2 - 4);
  }
  getWidth(t2) {
    return t2 >= this._size.length ? -1 : this._size[t2][0];
  }
  getHeight(t2) {
    return t2 >= this._size.length ? -1 : this._size[t2][1];
  }
  setSpriteSource(t2) {
    if (this.dispose(), this.pixelRatio = t2.devicePixelRatio, this._mosaicsData.length === 0) {
      this._binPack = new e$1(this._pageWidth - 4, this._pageHeight - 4);
      const t3 = Math.floor(this._pageWidth), i2 = Math.floor(this._pageHeight), s2 = new Uint32Array(t3 * i2);
      this._mosaicsData[0] = s2, this._dirties.push(true), this._size.push([this._pageWidth, this._pageHeight]), this._textures.push(void 0);
    }
    this._sprites = t2;
  }
  getSpriteItem(t2, i2 = false) {
    let e2 = this._mosaicRects[t2];
    if (e2)
      return e2;
    if (!this._sprites || this._sprites.loadStatus !== "loaded")
      return null;
    const s2 = this._sprites.getSpriteInfo(t2);
    if (!s2 || !s2.width || !s2.height || s2.width < 0 || s2.height < 0)
      return null;
    const h2 = s2.width, a2 = s2.height, [r2, o2, _] = this._allocateImage(h2, a2);
    return r2.width <= 0 ? null : (this._copy(r2, s2, o2, _, i2), e2 = { rect: r2, width: h2, height: a2, sdf: s2.sdf, simplePattern: false, pixelRatio: s2.pixelRatio, page: o2 }, this._mosaicRects[t2] = e2, e2);
  }
  getSpriteItems(t2) {
    const i2 = {};
    for (const e2 of t2)
      i2[e2] = this.getSpriteItem(e2);
    return i2;
  }
  getMosaicItemPosition(t2, i2) {
    const e2 = this.getSpriteItem(t2, i2), s2 = e2 && e2.rect;
    if (!s2)
      return null;
    s2.width = e2.width, s2.height = e2.height;
    const h2 = e2.width, a2 = e2.height, r2 = 2, o2 = this._size[e2.page];
    return { size: [e2.width, e2.height], tl: [(s2.x + r2) / o2[0], (s2.y + r2) / o2[1]], br: [(s2.x + r2 + h2) / o2[0], (s2.y + r2 + a2) / o2[1]], page: e2.page };
  }
  bind(i2, e2, s2 = 0, h2 = 0) {
    this._textures[s2] || (this._textures[s2] = new o$5(i2, { pixelFormat: 6408, dataType: 5121, wrapMode: 33071, width: this._size[s2][0], height: this._size[s2][1] }, new Uint8Array(this._mosaicsData[s2].buffer)));
    const a2 = this._textures[s2];
    a2.setSamplingMode(e2), this._dirties[s2] && a2.setData(new Uint8Array(this._mosaicsData[s2].buffer)), i2.bindTexture(a2, h2), this._dirties[s2] = false;
  }
  static _copyBits(t2, i2, e2, s2, h2, a2, r2, o2, _, n2, g2) {
    let c2 = s2 * i2 + e2, p2 = o2 * a2 + r2;
    if (g2) {
      p2 -= a2;
      for (let r3 = -1; r3 <= n2; r3++, c2 = ((r3 + n2) % n2 + s2) * i2 + e2, p2 += a2)
        for (let i3 = -1; i3 <= _; i3++)
          h2[p2 + i3] = t2[c2 + (i3 + _) % _];
    } else
      for (let l2 = 0; l2 < n2; l2++) {
        for (let i3 = 0; i3 < _; i3++)
          h2[p2 + i3] = t2[c2 + i3];
        c2 += i2, p2 += a2;
      }
  }
  _copy(t2, i2, e2, h2, a2, r2) {
    if (!this._sprites || this._sprites.loadStatus !== "loaded" || e2 >= this._mosaicsData.length)
      return;
    const o2 = new Uint32Array(r2 ? r2.buffer : this._sprites.image.buffer), _ = this._mosaicsData[e2];
    _ && o2 || console.error("Source or target images are uninitialized!");
    const n2 = 2, g2 = r2 ? i2.width : this._sprites.width;
    s$1._copyBits(o2, g2, i2.x, i2.y, _, h2[0], t2.x + n2, t2.y + n2, i2.width, i2.height, a2), this._dirties[e2] = true;
  }
  _allocateImage(t2, s2) {
    t2 += 2, s2 += 2;
    const h2 = Math.max(t2, s2);
    if (this._maxItemSize && this._maxItemSize < h2) {
      const e2 = new t$5(0, 0, t2, s2);
      return this._mosaicsData.push(new Uint32Array(t2 * s2)), this._dirties.push(true), this._size.push([t2, s2]), this._textures.push(void 0), [e2, this._mosaicsData.length - 1, [t2, s2]];
    }
    let a2 = t2 % 4 ? 4 - t2 % 4 : 4, r2 = s2 % 4 ? 4 - s2 % 4 : 4;
    a2 === 1 && (a2 = 5), r2 === 1 && (r2 = 5);
    const o2 = this._binPack.allocate(t2 + a2, s2 + r2);
    return o2.width <= 0 ? (this._dirties[this._currentPage] || (this._mosaicsData[this._currentPage] = null), this._currentPage = this._mosaicsData.length, this._mosaicsData.push(new Uint32Array(this._pageWidth * this._pageHeight)), this._dirties.push(true), this._size.push([this._pageWidth, this._pageHeight]), this._textures.push(void 0), this._binPack = new e$1(this._pageWidth - 4, this._pageHeight - 4), this._allocateImage(t2, s2)) : [o2, this._currentPage, [this._pageWidth, this._pageHeight]];
  }
  dispose() {
    this._binPack = null, this._mosaicRects = {};
    for (const t2 of this._textures)
      t2 && t2.dispose();
    this._textures.length = 0;
  }
}
function t$2(t2, e2, n2, o2, l2, i2) {
  t2.fillStyle = e2, t2.fillRect(n2, o2, l2, i2);
}
function e(t2, e2, n2, o2, l2, i2) {
  t2.strokeStyle = e2, t2.strokeRect(n2, o2, l2, i2);
}
function n$3(t2, e2) {
  t2.strokeStyle = "black";
  const n2 = e2.cellSize, o2 = e2.rows, l2 = e2.columns;
  for (let i2 = 0; i2 < o2; i2++) {
    const o3 = e2.cells[i2], r2 = i2 * n2, s2 = (i2 + 1) * n2;
    for (let e3 = 0; e3 < l2; e3++) {
      const l3 = o3[e3], i3 = e3 * n2, d2 = (e3 + 1) * n2;
      t2.strokeRect(i3, r2, d2 - i3, s2 - r2), t2.fillText(`cells:${l3.length}`, i3 + 4, r2 + 12);
    }
  }
}
function o$2(n2, o2) {
  const l2 = window.COLLISION_XRAY;
  for (let i2 = 0; i2 < o2.length; ++i2) {
    const r2 = !o2[i2].unique.show;
    if (l2 || !r2)
      for (const s2 of o2[i2].colliders) {
        if (!s2.enabled)
          continue;
        const d2 = !o2[i2].unique.parts[s2.partIndex].show;
        if (!l2 && d2)
          continue;
        const a2 = s2.xScreen, c2 = s2.yScreen, m2 = s2.dxScreen, h2 = s2.dyScreen;
        n2.globalAlpha = r2 || d2 ? 0.2 : 1, t$2(n2, "green", a2 - 1, c2 - 1, 3, 3), e(n2, "red", a2 + m2, c2 + h2, s2.width, s2.height), t$2(n2, "blue", a2 + m2 - 1, c2 + h2 - 1, 3, 3), n2.globalAlpha = 1;
      }
  }
}
function l$1(t2, e2, n2) {
  if (!window.PERFORMANCE_RECORDING_STORAGE)
    return;
  const o2 = window.PERFORMANCE_RECORDING_STORAGE;
  o2.perf = o2.perf || {};
  const l2 = o2.perf;
  l2[t2] = l2[t2] || { start: null, time: 0, min: void 0, max: void 0, samples: [], unit: n2 }, l2[t2].time += e2, l2[t2].samples.push(e2), (l2[t2].min == null || e2 < l2[t2].min) && (l2[t2].min = e2), (l2[t2].max == null || e2 > l2[t2].max) && (l2[t2].max = e2);
}
const p$1 = new e$4(10), y = new Map();
class f {
  constructor(e2, t2, s2) {
    this._vectorTileLayer = e2, this._styleRepository = t2, this.devicePixelRatio = s2, this._spriteMosaic = null, this._glyphMosaic = null, this._connection = null;
  }
  destroy() {
    this._connection && (this._connection.close(), this._connection = null), this._styleRepository = null, this._vectorTileLayer = null, this._spriteMosaic && (this._spriteMosaic = null), this._glyphMosaic && (this._glyphMosaic = null);
  }
  get spriteMosaic() {
    return this._spriteSourcePromise.then(() => this._spriteMosaic);
  }
  get glyphMosaic() {
    return this._glyphMosaic;
  }
  start(t2) {
    return __async(this, null, function* () {
      const s2 = this._vectorTileLayer, r2 = s2.sourceNameToSource, i2 = [];
      for (const e2 in r2)
        i2.push(this._fetchTileMap(r2[e2], t2));
      this._spriteSourcePromise = this._vectorTileLayer.loadSpriteSource(this.devicePixelRatio, t2), this._spriteSourcePromise.then((e2) => {
        this._spriteMosaic = new s$1(1024, 1024, 250), this._spriteMosaic.setSpriteSource(e2);
      });
      const a2 = this._styleRepository, l2 = new r$3(a2.glyphs);
      return this._glyphMosaic = new s$3(1024, 1024, l2), this._broadcastPromise = p$2("WorkerTileHandler", { client: this, scheduler: t2.scheduler, signal: t2.signal }).then((r3) => (this._connection = r3, Promise.all(this._connection.broadcast("setStyle", { style: s2.currentStyleInfo.style, vectorTileLayerMaxBuffers: t$6("vectortilelayer-max-buffers") }, t2)))), Promise.all(i2);
    });
  }
  updateStyle(e2) {
    return __async(this, null, function* () {
      return yield this._broadcastPromise, this._broadcastPromise = new Promise((t2, s2) => {
        Promise.all(this._connection.broadcast("updateStyle", e2)).then(t2, s2);
      }), this._broadcastPromise;
    });
  }
  setStyle(t2, s2) {
    return __async(this, null, function* () {
      yield this._broadcastPromise, this._styleRepository = t2;
      const r2 = this._vectorTileLayer.sourceNameToSource, i2 = [];
      for (const e2 in r2)
        i2.push(this._fetchTileMap(r2[e2], null));
      this._spriteSourcePromise = this._vectorTileLayer.loadSpriteSource(this.devicePixelRatio, null), this._spriteSourcePromise.then((e2) => {
        this._spriteMosaic = new s$1(1024, 1024, 250), this._spriteMosaic.setSpriteSource(e2);
      });
      const o2 = new r$3(t2.glyphs);
      return this._glyphMosaic = new s$3(1024, 1024, o2), this._broadcastPromise = new Promise((t3, r3) => {
        Promise.all(this._connection.broadcast("setStyle", { style: s2, vectorTileLayerMaxBuffers: t$6("vectortilelayer-max-buffers") })).then(t3, r3);
      }), i2.push(this._broadcastPromise), Promise.all(i2);
    });
  }
  fetchTileData(e2, t2) {
    return this._getRefKeys(e2, t2).then((e3) => {
      const s2 = this._vectorTileLayer.sourceNameToSource, r2 = [];
      for (const t3 in s2)
        r2.push(t3);
      return this._getSourcesData(r2, e3, t2);
    });
  }
  parseTileData(e2, t2) {
    const s2 = e2 && e2.data;
    if (!s2)
      return Promise.resolve(null);
    const { sourceName2DataAndRefKey: r2, transferList: i2 } = s2;
    return Object.keys(r2).length === 0 ? Promise.resolve(null) : this._broadcastPromise.then(() => this._connection.getAvailableClient().then((s3) => s3.invoke("createTileAndParse", { key: e2.key.id, sourceName2DataAndRefKey: r2, styleLayerUIDs: e2.styleLayerUIDs }, __spreadProps(__spreadValues({}, t2), { transferList: i2 })).then((e3) => ({ tileData: e3 }))));
  }
  getSprites(e2) {
    return __async(this, null, function* () {
      return yield this._spriteSourcePromise, this._spriteMosaic.getSpriteItems(e2);
    });
  }
  getGlyphs(e2) {
    return this._glyphMosaic.getGlyphItems(e2.font, e2.codePoints);
  }
  perfReport({ key: e2, milliseconds: t2 }) {
    l$1(e2, t2, "ms");
  }
  _getTilePayload(e2, s2, r2) {
    return __async(this, null, function* () {
      const i2 = e$5.pool.acquire(e2.id), o2 = this._vectorTileLayer.sourceNameToSource[s2].getSourceTileUrl(i2.level, i2.row, i2.col);
      e$5.pool.release(i2);
      try {
        return { protobuff: yield this.request(o2, r2), sourceName: s2 };
      } catch (l2) {
        if (g(l2))
          throw l2;
        return { protobuff: null, sourceName: s2 };
      }
    });
  }
  request(e2, t2) {
    return U(e2, __spreadValues({ responseType: "array-buffer" }, t2)).then(({ data: e3 }) => e3);
  }
  _fetchTileMap(e2, s2) {
    return __async(this, null, function* () {
      if (e2.capabilities.operations.supportsTileMap && e2.tileIndex)
        return Promise.resolve();
      if (!e2.tileMapURL)
        return;
      const i2 = p$1.get(e2.tileMapURL);
      if (i2)
        return void (e2.tileIndex = i2);
      let o2;
      if (y.has(e2.tileMapURL)) {
        try {
          o2 = yield y.get(e2.tileMapURL), e2.tileIndex = new r$8(o2.data);
        } catch (n2) {
          if (g(n2))
            throw n2;
        }
        return;
      }
      const a2 = U(e2.tileMapURL, s2);
      y.set(e2.tileMapURL, a2);
      try {
        o2 = yield a2, y.delete(e2.tileMapURL), p$1.put(e2.tileMapURL, e2.tileIndex), e2.tileIndex = new r$8(o2.data);
      } catch (n2) {
        if (y.delete(e2.tileMapURL), g(n2))
          throw n2;
      }
    });
  }
  _getRefKeys(e2, t2) {
    const r2 = this._vectorTileLayer.sourceNameToSource, i2 = new Array();
    for (const s2 in r2) {
      const o2 = r2[s2].getRefKey(e2, t2);
      i2.push(o2);
    }
    return A(i2);
  }
  _getSourcesData(e2, t2, r2) {
    const i2 = [];
    for (let s2 = 0; s2 < t2.length; s2++)
      if (t2[s2].value == null || e2[s2] == null)
        i2.push(null);
      else {
        const o2 = this._getTilePayload(t2[s2].value, e2[s2], r2);
        i2.push(o2);
      }
    return A(i2).then((e3) => {
      const s2 = {}, r3 = [];
      for (let i3 = 0; i3 < e3.length; i3++)
        if (e3[i3].value && e3[i3].value && e3[i3].value.protobuff && e3[i3].value.protobuff.byteLength > 0) {
          const o2 = t2[i3].value.id;
          s2[e3[i3].value.sourceName] = { refKey: o2, protobuff: e3[i3].value.protobuff }, r3.push(e3[i3].value.protobuff);
        }
      return { sourceName2DataAndRefKey: s2, transferList: r3 };
    });
  }
}
const r$2 = 512, o$1 = 1e-6, n$2 = (e2, i2) => e2 + 1 / (1 << 2 * i2);
class a {
  constructor(e2, i2) {
    this._tiles = new Map(), this._tileCache = new e$6(40, (e3) => e3.dispose()), this._viewSize = [0, 0], this._visibleTiles = new Map(), this.acquireTile = e2.acquireTile, this.releaseTile = e2.releaseTile, this.tileInfoView = e2.tileInfoView, this._container = i2;
  }
  destroy() {
    for (const [e2, i2] of this._tiles)
      i2.dispose();
    this._tiles = null, this._tileCache.clear(), this._tileCache = null;
  }
  update(e2) {
    this._updateCacheSize(e2);
    const i2 = this.tileInfoView, t2 = i2.getTileCoverage(e2.state, 0, "smallest"), { spans: r2, lodInfo: o2 } = t2, { level: n2 } = o2, a2 = new Set(), h2 = new Set();
    for (const { row: l2, colFrom: d2, colTo: _ } of r2)
      for (let e3 = d2; e3 <= _; e3++) {
        const i3 = e$5.getId(n2, l2, o2.normalizeCol(e3), o2.getWorldForColumn(e3)), t3 = this._getOrAcquireTile(i3);
        a2.add(i3), t3.processed() ? this._addToContainer(t3) : h2.add(new e$5(i3));
      }
    for (const [s2, l2] of this._tiles)
      l2.isCoverage = a2.has(s2);
    for (const s2 of h2)
      this._findPlaceholdersForMissingTiles(s2, a2);
    let c2 = false;
    for (const [s2, l2] of this._tiles)
      l2.neededForCoverage = a2.has(s2), l2.neededForCoverage || l2.isHoldingForFade && i2.intersects(t2, l2.key) && a2.add(s2), l2.isFading && (c2 = true);
    for (const [s2, l2] of this._tiles)
      a2.has(s2) || this._releaseTile(s2);
    return l$4.pool.release(t2), !c2;
  }
  clear() {
    this._tiles.clear(), this._tileCache.clear(), this._visibleTiles.clear();
  }
  clearCache() {
    this._tileCache.clear();
  }
  _findPlaceholdersForMissingTiles(e2, i2) {
    const t2 = [];
    for (const [l2, r2] of this._tiles)
      this._addPlaceholderChild(t2, r2, e2, i2);
    const s2 = t2.reduce(n$2, 0);
    Math.abs(1 - s2) < o$1 || this._addPlaceholderParent(e2.id, i2);
  }
  _addPlaceholderChild(e2, i2, t2, s2) {
    i2.key.level <= t2.level || !i2.hasData() || c(t2, i2.key) && (this._addToContainer(i2), s2.add(i2.id), e2.push(i2.key.level - t2.level));
  }
  _addPlaceholderParent(e2, i2) {
    let t2 = e2;
    for (; ; ) {
      if (t2 = h$1(t2), !t2 || i2.has(t2))
        return;
      const e3 = this._getTile(t2);
      if (e3 && e3.hasData())
        return this._addToContainer(e3), void i2.add(e3.id);
    }
  }
  _getOrAcquireTile(e2) {
    let i2 = this._tiles.get(e2);
    return i2 || (i2 = this._tileCache.pop(e2), i2 || (i2 = this.acquireTile(new e$5(e2))), this._tiles.set(e2, i2), i2);
  }
  _getTile(e2) {
    let i2 = this._tiles.get(e2);
    return i2 || (i2 = this._tileCache.pop(e2), i2 && this._tiles.set(e2, i2), i2);
  }
  _releaseTile(e2) {
    const i2 = this._tiles.get(e2);
    this.releaseTile(i2), this._removeFromContainer(i2), this._tiles.delete(e2), i2.hasData() ? this._tileCache.put(e2, i2, 1) : i2.dispose();
  }
  _addToContainer(t2) {
    let s2;
    const l2 = [], r2 = this._container;
    if (r2.contains(t2))
      return;
    const o2 = this._visibleTiles;
    for (const [i2, n2] of o2)
      this._canConnectDirectly(t2, n2) && l2.push(n2), t$4(s2) && this._canConnectDirectly(n2, t2) && (s2 = n2);
    if (r$4(s2)) {
      for (const e2 of l2)
        s2.childrenTiles.delete(e2), t2.childrenTiles.add(e2), e2.parentTile = t2;
      s2.childrenTiles.add(t2), t2.parentTile = s2;
    } else
      for (const e2 of l2)
        t2.childrenTiles.add(e2), e2.parentTile = t2;
    o2.set(t2.id, t2), r2.addChild(t2);
  }
  _removeFromContainer(e2) {
    if (this._visibleTiles.delete(e2.id), this._container.removeChild(e2), r$4(e2.parentTile)) {
      e2.parentTile.childrenTiles.delete(e2);
      for (const t2 of e2.childrenTiles)
        r$4(e2.parentTile) && e2.parentTile.childrenTiles.add(t2);
    }
    for (const i2 of e2.childrenTiles)
      i2.parentTile = e2.parentTile;
    e2.parentTile = null, e2.childrenTiles.clear();
  }
  _canConnectDirectly(e2, i2) {
    const t2 = e2.key;
    let { level: s2, row: l2, col: r2, world: o2 } = i2.key;
    const n2 = this._visibleTiles;
    for (; s2 > 0; ) {
      if (s2--, l2 >>= 1, r2 >>= 1, t2.level === s2 && t2.row === l2 && t2.col === r2 && t2.world === o2)
        return true;
      if (n2.has(`${s2}/${l2}/${r2}/${o2}`))
        return false;
    }
    return false;
  }
  _updateCacheSize(e2) {
    const i2 = e2.state.size;
    if (i2[0] === this._viewSize[0] && i2[1] === this._viewSize[1])
      return;
    const t2 = Math.ceil(i2[0] / r$2) + 1, s2 = Math.ceil(i2[1] / r$2) + 1;
    this._viewSize[0] = i2[0], this._viewSize[1] = i2[1], this._tileCache.maxSize = 5 * t2 * s2;
  }
}
function h$1(e2) {
  const [i2, t2, s2, l2] = e2.split("/"), r2 = parseInt(i2, 10);
  return r2 === 0 ? null : `${r2 - 1}/${parseInt(t2, 10) >> 1}/${parseInt(s2, 10) >> 1}/${parseInt(l2, 10)}`;
}
function c(e2, i2) {
  const t2 = i2.level - e2.level;
  return e2.row === i2.row >> t2 && e2.col === i2.col >> t2 && e2.world === i2.world;
}
function o(e2, t2, n2, o2, r2, s2) {
  const { iconRotationAlignment: i2, textRotationAlignment: l2, iconTranslate: a2, iconTranslateAnchor: c2, textTranslate: h2, textTranslateAnchor: u2 } = o2;
  let d2 = 0;
  for (const y2 of e2.colliders) {
    const [e3, o3] = y2.partIndex === 0 ? a2 : h2, x2 = y2.partIndex === 0 ? c2 : u2, g2 = y2.minLod <= s2 && s2 <= y2.maxLod;
    d2 += g2 ? 0 : 1, y2.enabled = g2, y2.xScreen = y2.xTile * r2[0] + y2.yTile * r2[3] + r2[6], y2.yScreen = y2.xTile * r2[1] + y2.yTile * r2[4] + r2[7], x2 === 0 ? (y2.xScreen += n2 * e3 - t2 * o3, y2.yScreen += t2 * e3 + n2 * o3) : (y2.xScreen += e3, y2.yScreen += o3), (y2.partIndex === 0 ? i2 : l2) === 1 ? (y2.dxScreen = y2.dxPixels, y2.dyScreen = y2.dyPixels) : (y2.dxScreen = n2 * (y2.dxPixels + y2.width / 2) - t2 * (y2.dyPixels + y2.height / 2) - y2.width / 2, y2.dyScreen = t2 * (y2.dxPixels + y2.width / 2) + n2 * (y2.dyPixels + y2.height / 2) - y2.height / 2);
  }
  e2.colliders.length > 0 && d2 === e2.colliders.length && (e2.unique.show = false);
}
class r$1 {
  constructor(o2, r2, s2, i2, l2, a2) {
    this._symbols = o2, this._styleRepository = i2, this._zoom = l2, this._currentLayerCursor = 0, this._currentSymbolCursor = 0, this._styleProps = new Map(), this._allNeededMatrices = new Map(), this._gridIndex = new o$4(r2, s2, t$7), this._si = Math.sin(Math.PI * a2 / 180), this._co = Math.cos(Math.PI * a2 / 180);
    for (const t2 of o2)
      for (const n2 of t2.symbols)
        this._allNeededMatrices.has(n2.tile) || this._allNeededMatrices.set(n2.tile, n$6(n2.tile.transforms.tileUnitsToPixels));
  }
  work(e2) {
    const t2 = this._gridIndex;
    function n2(e3) {
      const n3 = e3.xScreen + e3.dxScreen, o2 = e3.yScreen + e3.dyScreen, r3 = n3 + e3.width, s2 = o2 + e3.height, [i2, l2, a2, c2] = t2.getCellSpan(n3, o2, r3, s2);
      for (let h2 = l2; h2 <= c2; h2++)
        for (let e4 = i2; e4 <= a2; e4++) {
          const i3 = t2.cells[h2][e4];
          for (const e5 of i3) {
            const t3 = e5.xScreen + e5.dxScreen, i4 = e5.yScreen + e5.dyScreen, l3 = t3 + e5.width, a3 = i4 + e5.height;
            if (!(r3 < t3 || n3 > l3 || s2 < i4 || o2 > a3))
              return true;
          }
        }
      return false;
    }
    const r2 = performance.now();
    for (; this._currentLayerCursor < this._symbols.length; this._currentLayerCursor++, this._currentSymbolCursor = 0) {
      const t3 = this._symbols[this._currentLayerCursor], s2 = this._getProperties(t3.styleLayerUID);
      for (; this._currentSymbolCursor < t3.symbols.length; this._currentSymbolCursor++) {
        if (this._currentSymbolCursor % 100 == 99 && performance.now() - r2 > e2)
          return false;
        const i2 = t3.symbols[this._currentSymbolCursor];
        if (!i2.unique.show)
          continue;
        o(i2, this._si, this._co, s2, this._allNeededMatrices.get(i2.tile), this._zoom);
        const l2 = i2.unique;
        if (!l2.show)
          continue;
        const { iconAllowOverlap: a2, iconIgnorePlacement: c2, textAllowOverlap: h2, textIgnorePlacement: u2 } = s2;
        for (const e3 of i2.colliders) {
          if (!e3.enabled)
            continue;
          const t4 = l2.parts[e3.partIndex];
          if (!t4.show)
            continue;
          !(e3.partIndex ? h2 : a2) && n2(e3) && (e3.hard ? l2.show = false : t4.show = false);
        }
        if (l2.show)
          for (const e3 of i2.colliders) {
            if (!e3.enabled)
              continue;
            if (e3.partIndex ? u2 : c2)
              continue;
            if (!l2.parts[e3.partIndex].show)
              continue;
            const t4 = e3.xScreen + e3.dxScreen, n3 = e3.yScreen + e3.dyScreen, o2 = t4 + e3.width, r3 = n3 + e3.height, [s3, i3, a3, h3] = this._gridIndex.getCellSpan(t4, n3, o2, r3);
            for (let l3 = i3; l3 <= h3; l3++)
              for (let t5 = s3; t5 <= a3; t5++) {
                this._gridIndex.cells[l3][t5].push(e3);
              }
          }
      }
    }
    return true;
  }
  _getProperties(e2) {
    const t2 = this._styleProps.get(e2);
    if (t2)
      return t2;
    const n2 = this._zoom, o2 = this._styleRepository.getStyleLayerByUID(e2), r2 = o2.getLayoutValue("symbol-placement", n2) !== 0;
    let s2 = o2.getLayoutValue("icon-rotation-alignment", n2);
    s2 === 2 && (s2 = r2 ? 0 : 1);
    let i2 = o2.getLayoutValue("text-rotation-alignment", n2);
    i2 === 2 && (i2 = r2 ? 0 : 1);
    const l2 = o2.getPaintValue("icon-translate", n2), a2 = o2.getPaintValue("icon-translate-anchor", n2), c2 = o2.getPaintValue("text-translate", n2), h2 = o2.getPaintValue("text-translate-anchor", n2), u2 = { iconAllowOverlap: o2.getLayoutValue("icon-allow-overlap", n2), iconIgnorePlacement: o2.getLayoutValue("icon-ignore-placement", n2), textAllowOverlap: o2.getLayoutValue("text-allow-overlap", n2), textIgnorePlacement: o2.getLayoutValue("text-ignore-placement", n2), iconRotationAlignment: s2, textRotationAlignment: i2, iconTranslateAnchor: a2, iconTranslate: l2, textTranslateAnchor: h2, textTranslate: c2 };
    return this._styleProps.set(e2, u2), u2;
  }
}
function t$1(o2, e2) {
  if (o2.priority - e2.priority)
    return o2.priority - e2.priority;
  const t2 = o2.tile.key, i2 = e2.tile.key;
  return t2.world - i2.world ? t2.world - i2.world : t2.level - i2.level ? t2.level - i2.level : t2.row - i2.row ? t2.row - i2.row : t2.col - i2.col ? t2.col - i2.col : o2.xTile - e2.xTile ? o2.xTile - e2.xTile : o2.yTile - e2.yTile;
}
class i$1 {
  constructor(o2, e2, t2, i2, s2, r2) {
    this._visibleTiles = o2, this._symbolRepository = e2, this._createCollisionJob = t2, this._assignTileSymbolsOpacity = i2, this._symbolLayerSorter = s2, this._isLayerVisible = r2, this._selectionJob = null, this._selectionJobCompleted = false, this._collisionJob = null, this._collisionJobCompleted = false, this._opacityJob = null, this._opacityJobCompleted = false, this._running = true;
  }
  get running() {
    return this._running;
  }
  setScreenSize(o2, e2) {
    this._screenWidth === o2 && this._screenHeight === e2 || this.restart(), this._screenWidth = o2, this._screenHeight = e2;
  }
  restart() {
    this._selectionJob = null, this._selectionJobCompleted = false, this._collisionJob = null, this._collisionJobCompleted = false, this._opacityJob = null, this._opacityJobCompleted = false, this._running = true;
  }
  continue(o2) {
    if (this._selectionJob || (this._selectionJob = this._createSelectionJob()), !this._selectionJobCompleted) {
      const e2 = performance.now();
      if (!this._selectionJob.work(o2))
        return false;
      if (this._selectionJobCompleted = true, (o2 = Math.max(0, o2 - (performance.now() - e2))) === 0)
        return false;
    }
    if (this._collisionJob || (this._collisionJob = this._createCollisionJob(this._selectionJob.sortedSymbols, this._screenWidth, this._screenHeight)), !this._collisionJobCompleted) {
      const e2 = performance.now();
      if (!this._collisionJob.work(o2))
        return false;
      if (this._collisionJobCompleted = true, (o2 = Math.max(0, o2 - (performance.now() - e2))) === 0)
        return false;
    }
    if (this._opacityJob || (this._opacityJob = this._createOpacityJob()), !this._opacityJobCompleted) {
      const e2 = performance.now();
      if (!this._opacityJob.work(o2))
        return false;
      if (this._opacityJobCompleted = true, (o2 = Math.max(0, o2 - (performance.now() - e2))) === 0)
        return false;
    }
    return this._running = false, true;
  }
  _createSelectionJob() {
    const o2 = this._symbolRepository.uniqueSymbols, e2 = [];
    let i2 = 0, s2 = 0;
    const r2 = this._isLayerVisible;
    function n2(n3) {
      let l3;
      const c2 = performance.now();
      for (; s2 < o2.length; s2++, i2 = 0) {
        const t2 = o2[s2], h2 = t2.styleLayerUID;
        if (!r2(h2)) {
          e2[s2] || (e2[s2] = { styleLayerUID: h2, symbols: [] });
          continue;
        }
        e2[s2] = e2[s2] || { styleLayerUID: h2, symbols: [] };
        const a2 = e2[s2];
        for (; i2 < t2.uniqueSymbols.length; i2++) {
          if (l3 = t2.uniqueSymbols[i2], i2 % 100 == 99 && performance.now() - c2 > n3)
            return false;
          let o3 = null, e3 = false, s3 = false;
          for (const t3 of l3.tileSymbols)
            if (t3.selectedForRendering = false, !s3 || !e3) {
              const i3 = t3.tile;
              (!o3 || i3.isCoverage || i3.neededForCoverage && !e3) && (o3 = t3, (i3.neededForCoverage || i3.isCoverage) && (s3 = true), i3.isCoverage && (e3 = true));
            }
          if (o3.selectedForRendering = true, s3) {
            a2.symbols.push(o3), l3.show = true;
            for (const o4 of l3.parts)
              o4.show = true;
          } else
            l3.show = false;
        }
      }
      for (const o3 of e2)
        o3.symbols.sort(t$1);
      return true;
    }
    const l2 = this._symbolLayerSorter;
    return { work: n2, get sortedSymbols() {
      return e2.sort(l2);
    } };
  }
  _createOpacityJob() {
    const e2 = this._assignTileSymbolsOpacity, t2 = this._visibleTiles;
    let i2 = 0;
    function r2(o2, t3) {
      const i3 = o2.symbols;
      for (const [e3, r3] of i3)
        s(r3, t3);
      e2(o2, t3);
      for (const e3 of o2.childrenTiles)
        r2(e3, t3);
    }
    return { work(e3) {
      const s2 = performance.now();
      for (; i2 < t2.length; i2++) {
        if (performance.now() - s2 > e3)
          return false;
        const n2 = t2[i2];
        if (r$4(n2.parentTile))
          continue;
        r2(n2, performance.now());
      }
      return true;
    } };
  }
}
function s(o2, t2) {
  for (const i2 of o2) {
    const o3 = i2.unique;
    for (const i3 of o3.parts) {
      const s2 = i3.targetOpacity > 0.5 ? 1 : -1;
      i3.startOpacity += s2 * ((t2 - i3.startTime) / e$3), i3.startOpacity = Math.min(Math.max(i3.startOpacity, 0), 1), i3.startTime = t2, i3.targetOpacity = o3.show && i3.show ? 1 : 0;
    }
  }
}
const l = 32, i = 8, n$1 = 64;
class r {
  constructor(e2, s2, o2) {
    this.tileCoordRange = e2, this._visibleTiles = s2, this._createUnique = o2, this._tiles = new Map(), this._uniqueSymbolsReferences = new Map();
  }
  get uniqueSymbols() {
    return t$4(this._uniqueSymbolLayerArray) && (this._uniqueSymbolLayerArray = this._createUniqueSymbolLayerArray()), this._uniqueSymbolLayerArray;
  }
  add(e2, s2) {
    this._uniqueSymbolLayerArray = null;
    let t2 = this._tiles.get(e2.id);
    t2 || (t2 = { symbols: new Map() }, this._tiles.set(e2.id, t2));
    const r2 = new Map();
    if (s2)
      for (const o2 of s2)
        t2.symbols.has(o2) && (r2.set(o2, t2.symbols.get(o2)), t2.symbols.delete(o2));
    else
      for (const [o2, l2] of e2.layerData)
        t2.symbols.has(o2) && (r2.set(o2, t2.symbols.get(o2)), t2.symbols.delete(o2));
    this._removeSymbols(r2);
    const y2 = e2.symbols, a2 = new Map();
    for (const [f2, c2] of y2) {
      let e3 = c2.length;
      if (e3 >= l) {
        let s3 = this.tileCoordRange;
        do {
          s3 /= 2, e3 /= 4;
        } while (e3 > i && s3 > n$1);
        const l2 = new o$4(this.tileCoordRange, this.tileCoordRange, s3);
        a2.set(f2, { flat: c2, index: l2 }), t2.symbols.set(f2, { flat: c2, index: l2 });
        for (const e4 of c2)
          l2.getCell(e4.xTile, e4.yTile).push(e4);
      } else
        a2.set(f2, { flat: c2 }), t2.symbols.set(f2, { flat: c2 });
    }
    this._addSymbols(e2.key, y2);
  }
  deleteStyleLayers(e2) {
    this._uniqueSymbolLayerArray = null;
    for (const [s2, o2] of this._tiles) {
      const t2 = new Map();
      for (const s3 of e2)
        o2.symbols.has(s3) && (t2.set(s3, o2.symbols.get(s3)), o2.symbols.delete(s3));
      this._removeSymbols(t2), o2.symbols.size === 0 && this._tiles.delete(s2);
    }
  }
  removeTile(e2) {
    this._uniqueSymbolLayerArray = null;
    const s2 = this._tiles.get(e2.id);
    if (!s2)
      return;
    const o2 = new Map();
    for (const [t2, l2] of e2.symbols)
      s2.symbols.has(t2) && (o2.set(t2, s2.symbols.get(t2)), s2.symbols.delete(t2));
    this._removeSymbols(o2), s2.symbols.size === 0 && this._tiles.delete(e2.id);
  }
  _removeSymbols(e2) {
    for (const [s2, { flat: o2 }] of e2)
      for (const e3 of o2) {
        const o3 = e3.unique, t2 = o3.tileSymbols, l2 = t2.length - 1;
        for (let s3 = 0; s3 < l2; s3++)
          if (t2[s3] === e3) {
            t2[s3] = t2[l2];
            break;
          }
        if (t2.length = l2, l2 === 0) {
          const e4 = this._uniqueSymbolsReferences.get(s2);
          e4.delete(o3), e4.size === 0 && this._uniqueSymbolsReferences.delete(s2);
        }
        e3.unique = null;
      }
  }
  _addSymbols(s2, o2) {
    if (o2.size === 0)
      return;
    const t2 = this._visibleTiles;
    for (const e2 of t2)
      e2.parentTile || e2.key.world !== s2.world || e2.key.level === s2.level && !e2.key.equals(s2) || this._matchSymbols(e2, s2, o2);
    for (const [l2, i2] of o2)
      for (const s3 of i2)
        if (t$4(s3.unique)) {
          const e2 = this._createUnique();
          s3.unique = e2, e2.tileSymbols.push(s3);
          let o3 = this._uniqueSymbolsReferences.get(l2);
          o3 || (o3 = new Set(), this._uniqueSymbolsReferences.set(l2, o3)), o3.add(e2);
        }
  }
  _matchSymbols(e2, o2, l2) {
    if (e2.key.level > o2.level) {
      const s2 = e2.key.level - o2.level;
      if (e2.key.row >> s2 !== o2.row || e2.key.col >> s2 !== o2.col)
        return;
    }
    if (o2.level > e2.key.level) {
      const s2 = o2.level - e2.key.level;
      if (o2.row >> s2 !== e2.key.row || o2.col >> s2 !== e2.key.col)
        return;
    }
    if (o2.equals(e2.key)) {
      for (const s2 of e2.childrenTiles)
        this._matchSymbols(s2, o2, l2);
      return;
    }
    const i2 = new Map();
    for (const [n2, r2] of l2) {
      const l3 = [];
      for (const s2 of r2) {
        const i3 = l$3(this.tileCoordRange, s2.xTile, o2.level, o2.col, e2.key.level, e2.key.col), n3 = l$3(this.tileCoordRange, s2.yTile, o2.level, o2.row, e2.key.level, e2.key.row);
        i3 >= 0 && i3 < this.tileCoordRange && n3 >= 0 && n3 < this.tileCoordRange && l3.push({ symbol: s2, xTransformed: i3, yTransformed: n3 });
      }
      const y2 = [], a2 = e2.key.level < o2.level ? 1 : 1 << e2.key.level - o2.level, f2 = this._tiles.get(e2.id).symbols.get(n2);
      if (f2) {
        const e3 = f2.flat;
        for (const o3 of l3) {
          let t2, l4 = false;
          const i3 = o3.xTransformed, n3 = o3.yTransformed;
          t2 = r$4(f2.index) ? f2.index.getCell(i3, n3) : e3;
          const r3 = o3.symbol, c2 = r3.hash;
          for (const e4 of t2)
            if (c2 === e4.hash && Math.abs(i3 - e4.xTile) <= a2 && Math.abs(n3 - e4.yTile) <= a2) {
              const s2 = e4.unique;
              r3.unique = s2, s2.tileSymbols.push(r3), l4 = true;
              break;
            }
          l4 || y2.push(r3);
        }
      }
      y2.length > 0 && i2.set(n2, y2);
    }
    for (const s2 of e2.childrenTiles)
      this._matchSymbols(s2, o2, i2);
  }
  _createUniqueSymbolLayerArray() {
    const e2 = this._uniqueSymbolsReferences, s2 = new Array(e2.size);
    let o2, t2 = 0;
    for (const [l2, i2] of e2) {
      const e3 = new Array(i2.size);
      o2 = 0;
      for (const s3 of i2)
        e3[o2++] = s3;
      s2[t2] = { styleLayerUID: l2, uniqueSymbols: e3 }, t2++;
    }
    return s2;
  }
}
const h = 0.5;
class n extends n$7 {
  constructor(t2, e2) {
    super(), this.styleRepository = t2, this._tileToHandle = new Map(), this._viewState = { scale: 0, rotation: 0, center: [0, 0], size: [0, 0] }, this._declutterViewState = { scale: 0, rotation: 0, center: [0, 0], size: [0, 0] }, this._completed = false, this._symbolRepository = new r(4096, e2, () => new s$4()), this._symbolDeclutterer = new i$1(e2, this._symbolRepository, (t3, e3, i2) => new r$1(t3, e3, i2, this.styleRepository, this._zoom, this._viewState.rotation), (t3, e3) => {
      t3.allSymbolsFadingOut = true, t3.lastOpacityUpdate = e3, h$2(t3, e3, true), t3.decluttered = true, t3.requestRender();
    }, (t3, e3) => this.styleRepository.getStyleLayerByUID(t3.styleLayerUID).z - this.styleRepository.getStyleLayerByUID(e3.styleLayerUID).z, (t3) => {
      const e3 = this.styleRepository.getStyleLayerByUID(t3).getLayoutProperty("visibility");
      return !e3 || e3.getValue() !== 1;
    });
  }
  addTile(t2) {
    t2.decluttered = false, this._tileToHandle.set(t2, t2.on("symbols-changed", () => {
      this._symbolRepository.add(t2), this.restartDeclutter();
    })), this._symbolRepository.add(t2), this.restartDeclutter();
  }
  removeTile(t2) {
    const e2 = this._tileToHandle.get(t2);
    e2 && (this._symbolRepository.removeTile(t2), this.restartDeclutter(), e2.remove(), this._tileToHandle.delete(t2));
  }
  update(t2, e2) {
    return this._zoom = t2, this._viewState = { scale: e2.scale, rotation: e2.rotation, center: [e2.center[0], e2.center[1]], size: [e2.size[0], e2.size[1]] }, this._continueDeclutter(), this._completed;
  }
  restartDeclutter() {
    this._completed = false, this._symbolDeclutterer.restart(), this._notifyUnstable();
  }
  clear() {
    this._completed = false, this._symbolRepository = null, this._symbolDeclutterer.restart(), this._tileToHandle.forEach((t2) => t2.remove()), this._tileToHandle.clear();
  }
  get stale() {
    return this._zoom !== this._declutterZoom || this._viewState.size[0] !== this._declutterViewState.size[0] || this._viewState.size[1] !== this._declutterViewState.size[1] || this._viewState.scale !== this._declutterViewState.scale || this._viewState.rotation !== this._declutterViewState.rotation;
  }
  deleteStyleLayers(t2) {
    this._symbolRepository.deleteStyleLayers(t2);
  }
  _continueDeclutter() {
    this._completed && !this.stale || (this._symbolDeclutterer.running || (this._declutterZoom = this._zoom, this._declutterViewState.center[0] = this._viewState.center[0], this._declutterViewState.center[1] = this._viewState.center[1], this._declutterViewState.rotation = this._viewState.rotation, this._declutterViewState.scale = this._viewState.scale, this._declutterViewState.size[0] = this._viewState.size[0], this._declutterViewState.size[1] = this._viewState.size[1], this._symbolDeclutterer.restart()), this._symbolDeclutterer.setScreenSize(this._viewState.size[0], this._viewState.size[1]), this._completed = this._symbolDeclutterer.continue(c$1), this._completed && this._scheduleNotifyStable());
  }
  _scheduleNotifyStable() {
    r$4(this._stableNotificationHandle) && clearTimeout(this._stableNotificationHandle), this._stableNotificationHandle = setTimeout(() => {
      this._stableNotificationHandle = null, this.emit("fade-complete");
    }, (1 + h) * e$3);
  }
  _notifyUnstable() {
    r$4(this._stableNotificationHandle) && (clearTimeout(this._stableNotificationHandle), this._stableNotificationHandle = null), this.emit("fade-start");
  }
}
const u = 1e-6;
function p(e2, t2) {
  if (e2) {
    const s2 = e2.getLayoutProperty("visibility");
    if (!s2 || s2.getValue() !== 1 && (e2.minzoom === void 0 || e2.minzoom < t2 + u) && (e2.maxzoom === void 0 || e2.maxzoom >= t2 - u))
      return true;
  }
  return false;
}
class m extends i$2 {
  constructor(e2) {
    super(e2), this._backgroundTiles = [], this._pointToCallbacks = new Map(), this._fading = false;
  }
  destroy() {
    this.removeAllChildren(), this._spriteMosaic && (this._spriteMosaic.dispose(), this._spriteMosaic = null), this._glyphMosaic && (this._glyphMosaic.dispose(), this._glyphMosaic = null), r$4(this._symbolFader) && (this._symbolFader.clear(), this._symbolFader = null), this._styleRepository = null, this._backgroundTiles = [], this._pointToCallbacks.clear();
  }
  setStyleResources(e2, r2, i2) {
    if (this._spriteMosaic = e2, this._glyphMosaic = r2, this._styleRepository = i2, t$4(this._symbolFader)) {
      const e3 = new n(this._styleRepository, this.children);
      e3.on("fade-start", () => {
        this.emit("fade-start"), this._fading = true, this.requestRender();
      }), e3.on("fade-complete", () => {
        this.emit("fade-complete"), this._fading = false, this.requestRender();
      }), this._symbolFader = e3;
    }
    e$2(this._symbolFader).styleRepository = i2;
  }
  deleteStyleLayers(t2) {
    r$4(this._symbolFader) && this._symbolFader.deleteStyleLayers(t2);
  }
  hitTest(e2, t2) {
    return __async(this, null, function* () {
      const s2 = [e2, t2], i2 = B();
      return this._pointToCallbacks.set(s2, i2), this.requestRender(), i2.promise;
    });
  }
  enterTileInvalidation() {
    for (const e2 of this.children)
      e2.invalidating = true;
  }
  createRenderParams(e2) {
    return __spreadProps(__spreadValues({}, super.createRenderParams(e2)), { renderPass: null, styleLayer: null, styleLayerUID: -1, glyphMosaic: this._glyphMosaic, spriteMosaic: this._spriteMosaic, hasClipping: !!this._clippingInfos });
  }
  doRender(e2) {
    !this.visible || e2.drawPhase !== I.MAP && e2.drawPhase !== I.DEBUG || this._spriteMosaic === void 0 || super.doRender(e2);
  }
  addChild(t2) {
    return super.addChild(t2), r$4(this._symbolFader) ? this._symbolFader.addTile(t2) : t2.decluttered = true, this.requestRender(), t2;
  }
  removeChild(t2) {
    return r$4(this._symbolFader) && this._symbolFader.removeTile(t2), this.requestRender(), super.removeChild(t2);
  }
  renderChildren(e2) {
    if (e2.drawPhase !== I.DEBUG) {
      if (this._doRender(e2), this._pointToCallbacks.size > 0) {
        const { context: t2 } = e2, s2 = t2.getBoundFramebufferObject();
        e2.drawPhase = I.HITTEST;
        const r2 = e2.painter.effects.hittest;
        r2.bind(e2), this._doRender(e2), r2.draw(e2, this._pointToCallbacks), t2.bindFramebuffer(s2);
      }
    } else
      super.renderChildren(e2);
  }
  removeAllChildren() {
    for (let t2 = 0; t2 < this.children.length; t2++) {
      const s2 = this.children[t2];
      r$4(this._symbolFader) && this._symbolFader.removeTile(s2), s2.dispose();
    }
    super.removeAllChildren();
  }
  getStencilTarget() {
    return this.children.filter((e2) => e2.neededForCoverage && e2.hasData());
  }
  restartDeclutter() {
    r$4(this._symbolFader) && this._symbolFader.restartDeclutter();
  }
  _doRender(t2) {
    const { context: s2 } = t2, r2 = this._styleRepository;
    if (!r2)
      return;
    const i2 = r2.layers;
    let o2 = true;
    t2.drawPhase === I.HITTEST && (o2 = false), r2.backgroundBucketIds.length > 0 && (t2.renderPass = "background", this._renderBackgroundLayers(t2, r2.backgroundBucketIds)), super.renderChildren(t2), t2.drawPhase === I.MAP && this._fade(t2.displayLevel, t2.state);
    const l2 = this.children.filter((e2) => e2.visible && e2.hasData());
    if (l2 && l2.length !== 0) {
      for (const e2 of l2)
        e2.triangleCount = 0;
      s2.setStencilWriteMask(0), s2.setColorMask(true, true, true, true), s2.setStencilOp(7680, 7680, 7681), s2.setStencilTestEnabled(true), s2.setBlendingEnabled(false), s2.setDepthTestEnabled(true), s2.setDepthWriteEnabled(true), s2.setDepthFunction(515), s2.setClearDepth(1), s2.clear(s2.gl.DEPTH_BUFFER_BIT), t2.renderPass = "opaque";
      for (let e2 = i2.length - 1; e2 >= 0; e2--)
        this._renderStyleLayer(i2[e2], t2, l2);
      s2.setDepthWriteEnabled(false), s2.setBlendingEnabled(o2), s2.setBlendFunctionSeparate(1, 771, 1, 771), t2.renderPass = "translucent";
      for (let e2 = 0; e2 < i2.length; e2++)
        this._renderStyleLayer(i2[e2], t2, l2);
      s2.setDepthTestEnabled(false), t2.renderPass = "symbol";
      for (let e2 = 0; e2 < i2.length; e2++)
        this._renderStyleLayer(i2[e2], t2, l2);
      if (s2.bindVAO(), s2.setStencilTestEnabled(true), s2.setBlendingEnabled(true), t2.drawPhase === I.MAP) {
        const t3 = window.COLLISION_DEBUG_CTX;
        if (t3 && r$4(this._symbolFader) && (t3.clearRect(0, 0, t3.canvas.width, t3.canvas.height), !this._fading || window.COLLISION_XRAY)) {
          for (const e2 of this.children)
            if (e2.symbols) {
              const s3 = [];
              if (e2.symbols.forEach((e3) => {
                s3.push(...e3);
              }), window.COLLISION_SHOW_GRID) {
                var n2, d2, y2;
                const e3 = (n2 = this._symbolFader) == null || (d2 = n2._symbolDeclutterer) == null || (y2 = d2._collisionJob) == null ? void 0 : y2._gridIndex;
                e3 && n$3(t3, e3);
              }
              o$2(t3, s3);
            }
        }
      }
    }
  }
  _fade(t2, s2) {
    r$4(this._symbolFader) && (this._symbolFader.update(t2, s2) || this.requestRender());
  }
  _renderStyleLayer(e2, t2, s2) {
    const { painter: r2, renderPass: i2 } = t2;
    if (e2 === void 0)
      return;
    const o2 = e2.getLayoutProperty("visibility");
    if (o2 && o2.getValue() === 1)
      return;
    let l2;
    switch (e2.type) {
      case 0:
        return;
      case 1:
        if (i2 !== "opaque" && t2.renderPass !== "translucent")
          return;
        l2 = "vtlFill";
        break;
      case 2:
        if (i2 !== "translucent")
          return;
        l2 = "vtlLine";
        break;
      case 4:
        if (i2 !== "symbol")
          return;
        l2 = "vtlCircle";
        break;
      case 3:
        if (i2 !== "symbol")
          return;
        l2 = "vtlSymbol";
    }
    if (s2 = e2.type === 3 ? s2.filter((e3) => e3.decluttered) : s2.filter((e3) => e3.neededForCoverage), l2 !== "vtlSymbol") {
      const r3 = t2.displayLevel;
      if (s2.length === 0 || e2.minzoom !== void 0 && e2.minzoom >= r3 + u || e2.maxzoom !== void 0 && e2.maxzoom < r3 - u)
        return;
    }
    const n2 = e2.uid;
    t2.styleLayerUID = n2, t2.styleLayer = e2;
    for (const a2 of s2)
      if (a2.layerData.has(n2)) {
        r2.renderObjects(t2, s2, l2);
        break;
      }
  }
  _renderBackgroundLayers(t2, s2) {
    const { context: r2, displayLevel: d2, painter: h2, state: c2 } = t2, y2 = this._styleRepository;
    let u2 = false;
    for (const e2 of s2)
      if (p(y2.getLayerById(e2), d2)) {
        u2 = true;
        break;
      }
    if (!u2)
      return;
    const m2 = this._tileInfoView.getTileCoverage(t2.state, 0, "smallest"), { spans: f2, lodInfo: _ } = m2, { level: b } = _, g2 = i$3(), T = [];
    if (this._renderPasses) {
      const s3 = this._renderPasses[0];
      r$4(this._clippingInfos) && (s3.brushes[0].prepareState(t2, this._clippingInfos[0]), s3.brushes[0].drawMany(t2, this._clippingInfos));
    }
    const v = this._backgroundTiles;
    let C, F = 0;
    for (const { row: e2, colFrom: l2, colTo: a2 } of f2)
      for (let t3 = l2; t3 <= a2; t3++) {
        if (F < v.length)
          C = v[F], C.key.set(b, e2, _.normalizeCol(t3), _.getWorldForColumn(t3)), this._tileInfoView.getTileBounds(g2, C.key, false), C.bounds = g2, C.coords[0] = g2[0], C.coords[1] = g2[3];
        else {
          const s3 = new e$5(b, e2, _.normalizeCol(t3), _.getWorldForColumn(t3));
          C = new r$5(s3, this._tileInfoView.getTileBounds(i$3(), s3), [512, 512], [4096, 4096]), v.push(C);
        }
        C.setTransform(c2, this._tileInfoView.getTileResolution(C.key)), T.push(C), F++;
      }
    r2.setStencilWriteMask(0), r2.setColorMask(true, true, true, true), r2.setStencilOp(7680, 7680, 7681), r2.setStencilFunction(514, 0, 255);
    let w2 = true;
    t2.drawPhase === I.HITTEST && (w2 = false), r2.setStencilTestEnabled(w2);
    for (const e2 of s2) {
      const s3 = y2.getLayerById(e2);
      p(s3, d2) && (t2.styleLayerUID = s3.uid, t2.styleLayer = s3, h2.renderObjects(t2, T, "vtlBackground"));
    }
    l$4.pool.release(m2);
  }
}
class t extends h$4 {
  constructor() {
    super(...arguments), this._fullCacheLodInfos = null, this._levelByScale = {};
  }
  getTileParentId(e2) {
    const s2 = e$5.pool.acquire(e2), t2 = s2.level === 0 ? null : e$5.getId(s2.level - 1, s2.row >> 1, s2.col >> 1, s2.world);
    return e$5.pool.release(s2), t2;
  }
  getTileCoverage(e2, l2, s2) {
    const t2 = super.getTileCoverage(e2, l2, s2);
    if (!t2)
      return t2;
    const o2 = 1 << t2.lodInfo.level;
    return t2.spans = t2.spans.filter((e3) => e3.row >= 0 && e3.row < o2), t2;
  }
  scaleToLevel(e2) {
    if (this._fullCacheLodInfos || this._initializeFullCacheLODs(this._lodInfos), this._levelByScale[e2])
      return this._levelByScale[e2];
    {
      const l2 = this._fullCacheLodInfos;
      if (e2 > l2[0].scale)
        return l2[0].level;
      let s2, t2;
      for (let o2 = 0; o2 < l2.length - 1; o2++)
        if (t2 = l2[o2 + 1], e2 > t2.scale)
          return s2 = l2[o2], s2.level + (s2.scale - e2) / (s2.scale - t2.scale);
      return l2[l2.length - 1].level;
    }
  }
  _initializeFullCacheLODs(l2) {
    let s2;
    if (l2[0].level === 0)
      s2 = l2.map((e2) => ({ level: e2.level, resolution: e2.resolution, scale: e2.scale }));
    else {
      const l3 = this.tileInfo.size[0], t2 = this.tileInfo.spatialReference;
      s2 = x.create({ size: l3, spatialReference: t2 }).lods.map((e2) => ({ level: e2.level, resolution: e2.resolution, scale: e2.scale }));
    }
    for (let e2 = 0; e2 < s2.length; e2++)
      this._levelByScale[s2[e2].scale] = s2[e2].level;
    this._fullCacheLodInfos = s2;
  }
}
const w = n$8.getLogger("esri.views.2d.layers.VectorTileLayerView2D");
let Q = class extends l$5(d$1) {
  constructor() {
    super(...arguments), this._styleChanges = [], this._handles = new u$2(), this._fetchQueue = null, this._parseQueue = null, this._isTileHandlerReady = false, this.fading = false;
  }
  initialize() {
    const e2 = this.layer.tileInfo;
    if (!(e2 && e2.spatialReference).equals(this.view.spatialReference))
      return void this.addResolvingPromise(Promise.reject(new s$7("layerview:spatial-reference-incompatible", "The spatial reference of this layer does not meet the requirements of the view", { layer: this.layer })));
    const { style: t$12, spriteUrl: i2, glyphsUrl: s2 } = this.layer.currentStyleInfo;
    this._styleRepository = new a$4(t$12, { spriteUrl: i2, glyphsUrl: s2 }), this._tileInfoView = new t(this.layer.tileInfo, this.layer.fullExtent), this._vectorTileContainer = new m(this._tileInfoView), this._tileHandler = new f(this.layer, this._styleRepository, window.devicePixelRatio || 1), this.container.addChild(this._vectorTileContainer), this.handles.add([this._vectorTileContainer.on("fade-start", () => {
      this.fading = true, this.notifyChange("updating"), this.requestUpdate();
    }), this._vectorTileContainer.on("fade-complete", () => {
      this.fading = false, this.notifyChange("updating"), this.requestUpdate();
    })]);
  }
  destroy() {
    var e2;
    this._stop(), this.container.removeAllChildren(), this._vectorTileContainer && (this._vectorTileContainer.destroy(), this._vectorTileContainer = null), (e2 = this._tileHandler) == null || e2.destroy(), this._tileHandler = null;
  }
  hitTest(e2, t2) {
    return __async(this, null, function* () {
      if (this.suspended || !this._tileHandlerPromise)
        return null;
      yield this._tileHandlerPromise;
      const i2 = yield this._vectorTileContainer.hitTest(e2, t2);
      if (!i2 || i2.length === 0)
        return null;
      const s2 = i2[0] - 1, r2 = this._styleRepository, a2 = r2.getStyleLayerByUID(s2);
      if (!a2)
        return null;
      const l2 = r2.getStyleLayerIndex(a2.id), n2 = new n$9({ attributes: { layerId: l2, layerName: a2.id, layerUID: s2 } });
      return n2.layer = this.layer, n2.sourceLayer = this.layer, n2;
    });
  }
  update(e2) {
    if (this._tileHandlerPromise && this._isTileHandlerReady)
      return e2.pixelRatio !== this._tileHandler.devicePixelRatio ? (this._start(), void (this._tileHandler.devicePixelRatio = e2.pixelRatio)) : void (this._styleChanges.length > 0 ? this._tileHandlerPromise = this._applyStyleChanges() : (this._fetchQueue.pause(), this._parseQueue.pause(), this._fetchQueue.state = e2.state, this._parseQueue.state = e2.state, this._tileManager.update(e2) || this.requestUpdate(), this._parseQueue.resume(), this._fetchQueue.resume()));
  }
  attach() {
    this._start(), this._handles.add([this.layer.on("paint-change", (e2) => {
      if (e2.isDataDriven)
        this._styleChanges.push({ type: 0, data: e2 }), this.notifyChange("updating"), this.requestUpdate();
      else {
        const t2 = this._styleRepository, i2 = t2.getLayerById(e2.layerName);
        if (!i2)
          return;
        const s2 = i2.type === 3;
        t2.setPaintProperties(e2.layerName, e2.paint), s2 && this._vectorTileContainer.restartDeclutter(), this._vectorTileContainer.requestRender();
      }
    }), this.layer.on("layout-change", (e2) => {
      const i2 = this._styleRepository, s2 = i2.getLayerById(e2.layer);
      if (!s2)
        return;
      const r2 = m$2(s2.layout, e2.layout);
      if (!t$4(r2)) {
        if (a$5(r2, "visibility") && H(r2) === 1)
          return i2.setLayoutProperties(e2.layer, e2.layout), s2.type === 3 && this._vectorTileContainer.restartDeclutter(), void this._vectorTileContainer.requestRender();
        this._styleChanges.push({ type: 1, data: e2 }), this.notifyChange("updating"), this.requestUpdate();
      }
    }), this.layer.on("style-layer-visibility-change", (e2) => {
      const t2 = this._styleRepository, i2 = t2.getLayerById(e2.layer);
      i2 && (t2.setStyleLayerVisibility(e2.layer, e2.visibility), i2.type === 3 && this._vectorTileContainer.restartDeclutter(), this._vectorTileContainer.requestRender());
    }), this.layer.on("style-layer-change", (e2) => {
      this._styleChanges.push({ type: 2, data: e2 }), this.notifyChange("updating"), this.requestUpdate();
    }), this.layer.on("delete-style-layer", (e2) => {
      this._styleChanges.push({ type: 3, data: e2 }), this.notifyChange("updating"), this.requestUpdate();
    }), this.layer.on("load-style", () => this._loadStyle())]);
  }
  detach() {
    this._stop(), this._handles.removeAll();
  }
  moveStart() {
    this.requestUpdate();
  }
  viewChange() {
    this.requestUpdate();
  }
  moveEnd() {
    this.requestUpdate();
  }
  canResume() {
    let e2 = super.canResume();
    const t2 = this.layer;
    if (e2 && t2.currentStyleInfo) {
      const i2 = this.view.scale, s2 = t2.currentStyleInfo;
      if (s2 && s2.layerDefinition) {
        const t3 = s2.layerDefinition;
        t3.minScale && t3.minScale < i2 && (e2 = false), t3.maxScale && t3.maxScale > i2 && (e2 = false);
      }
    }
    return e2;
  }
  isUpdating() {
    const e2 = this._vectorTileContainer.children;
    return !this._isTileHandlerReady || !this._fetchQueue || !this._parseQueue || this._fetchQueue.updating || this._parseQueue.updating || e2.length > 0 && e2.filter((e3) => e3.invalidating).length > 0 || this.fading;
  }
  acquireTile(e2) {
    const t2 = this._createVectorTile(e2);
    return this._tileHandlerPromise.then(() => {
      this._fetchQueue.push(t2.key).then((e3) => this._parseQueue.push({ key: t2.key, data: e3 })).then((e3) => {
        t2.once("attach", () => this.requestUpdate()), e3 && (t2.setData(e3.tileData), this.requestUpdate(), this.notifyChange("updating"));
      }).catch((e3) => {
        this.notifyChange("updating"), g(e3) || w.error(e3);
      });
    }), t2;
  }
  releaseTile(e2) {
    const t2 = e2.key.id;
    this._fetchQueue.abort(t2), this._parseQueue.abort(t2), this.requestUpdate();
  }
  _start() {
    if (this._stop(), this._tileManager = new a({ acquireTile: (e3) => this.acquireTile(e3), releaseTile: (e3) => this.releaseTile(e3), tileInfoView: this._tileInfoView }, this._vectorTileContainer), !this.layer.currentStyleInfo)
      return;
    const e2 = new AbortController(), t2 = this._tileHandler.start({ signal: e2.signal }).then(() => {
      this._fetchQueue = new p$3({ tileInfoView: this._tileInfoView, process: (e3, t3) => this._getTileData(e3, t3), concurrency: 15 }), this._parseQueue = new p$3({ tileInfoView: this._tileInfoView, process: (e3, t3) => this._parseTileData(e3, t3), concurrency: 8 }), this.requestUpdate(), this._isTileHandlerReady = true;
    });
    this._tileHandler.spriteMosaic.then((e3) => {
      this._vectorTileContainer.setStyleResources(e3, this._tileHandler.glyphMosaic, this._styleRepository), this.requestUpdate();
    }), this._tileHandlerAbortController = e2, this._tileHandlerPromise = t2;
  }
  _stop() {
    if (!this._tileHandlerAbortController || !this._vectorTileContainer)
      return;
    const e2 = this._tileHandlerAbortController;
    e2 && e2.abort(), this._tileHandlerPromise = null, this._isTileHandlerReady = false, this._fetchQueue && (this._fetchQueue.destroy(), this._fetchQueue = null), this._parseQueue && (this._parseQueue.destroy(), this._parseQueue = null), this._tileManager && (this._tileManager.destroy(), this._tileManager = null), this._vectorTileContainer.removeAllChildren();
  }
  _getTileData(e2, t2) {
    return __async(this, null, function* () {
      const i2 = yield this._tileHandler.fetchTileData(e2, t2);
      return this.notifyChange("updating"), i2;
    });
  }
  _parseTileData(e2, t2) {
    return __async(this, null, function* () {
      return this._tileHandler.parseTileData(e2, t2);
    });
  }
  _applyStyleChanges() {
    return __async(this, null, function* () {
      this._isTileHandlerReady = false, this._fetchQueue.pause(), this._parseQueue.pause(), this._fetchQueue.clear(), this._parseQueue.clear(), this._tileManager.clearCache();
      const e2 = this._styleChanges;
      try {
        yield this._tileHandler.updateStyle(e2);
      } catch (l2) {
        w.error("error applying vector-tiles style update", l2.message), this._fetchQueue.resume(), this._parseQueue.resume(), this._isTileHandlerReady = true;
      }
      const t2 = this._styleRepository, i2 = [];
      e2.forEach((e3) => {
        if (e3.type !== 3)
          return;
        const s3 = e3.data, r3 = t2.getLayerById(s3.layerName);
        r3 && i2.push(r3.uid);
      });
      const s2 = [];
      let r2;
      e2.forEach((e3) => {
        const i3 = e3.type, a3 = e3.data;
        switch (i3) {
          case 0:
            t2.setPaintProperties(a3.layerName, a3.paint), r2 = a3.layerName;
            break;
          case 1:
            t2.setLayoutProperties(a3.layerName, a3.layout), r2 = a3.layerName;
            break;
          case 3:
            return void t2.deleteStyleLayer(a3.layerName);
          case 2:
            t2.setStyleLayer(a3.layer, a3.index), r2 = a3.layer.id;
        }
        const l2 = t2.getLayerById(r2);
        l2 && s2.push(l2.uid);
      });
      const a2 = this._vectorTileContainer.children;
      if (i2.length > 0) {
        this._vectorTileContainer.deleteStyleLayers(i2);
        for (const e3 of a2)
          e3.deleteLayerData(i2);
      }
      if (this._fetchQueue.resume(), this._parseQueue.resume(), s2.length > 0) {
        const e3 = [];
        for (const t3 of a2) {
          const i3 = this._fetchQueue.push(t3.key).then((e4) => this._parseQueue.push({ key: t3.key, data: e4, styleLayerUIDs: s2 })).then((e4) => t3.setData(e4.tileData));
          e3.push(i3);
        }
        yield Promise.all(e3);
      }
      this._styleChanges = [], this._isTileHandlerReady = true, this.notifyChange("updating"), this.requestUpdate();
    });
  }
  _loadStyle() {
    return __async(this, null, function* () {
      const { style: e2, spriteUrl: t2, glyphsUrl: i2 } = this.layer.currentStyleInfo;
      this._isTileHandlerReady = false, this._fetchQueue.pause(), this._parseQueue.pause(), this._fetchQueue.clear(), this._parseQueue.clear(), this.notifyChange("updating"), this._styleRepository = new a$4(e2, { spriteUrl: t2, glyphsUrl: i2 }), this._vectorTileContainer.destroy(), this._tileManager.clear(), this._tileHandlerAbortController.abort(), this._tileHandlerAbortController = h$5();
      const { signal: s2 } = this._tileHandlerAbortController;
      try {
        this._tileHandlerPromise = this._tileHandler.setStyle(this._styleRepository, e2), yield this._tileHandlerPromise;
      } catch (a2) {
        if (!g(a2))
          throw a2;
      }
      if (s2.aborted)
        return this._fetchQueue.resume(), this._parseQueue.resume(), this._isTileHandlerReady = true, this.notifyChange("updating"), void this.requestUpdate();
      const r2 = yield this._tileHandler.spriteMosaic;
      this._vectorTileContainer.setStyleResources(r2, this._tileHandler.glyphMosaic, this._styleRepository), this._fetchQueue.resume(), this._parseQueue.resume(), this._isTileHandlerReady = true, this.notifyChange("updating"), this.requestUpdate();
    });
  }
  _createVectorTile(e2) {
    const t2 = this._tileInfoView.getTileBounds(i$3(), e2);
    return new d(e2, this._styleRepository, t2, [512, 512]);
  }
};
function H(e2) {
  if (t$4(e2))
    return 0;
  switch (e2.type) {
    case "partial":
      return Object.keys(e2.diff).length;
    case "complete":
      return Math.max(Object.keys(e2.oldValue).length, Object.keys(e2.newValue).length);
    case "collection":
      return Object.keys(e2.added).length + Object.keys(e2.changed).length + Object.keys(e2.removed).length;
  }
}
e$7([y$1()], Q.prototype, "_fetchQueue", void 0), e$7([y$1()], Q.prototype, "_parseQueue", void 0), e$7([y$1()], Q.prototype, "_isTileHandlerReady", void 0), e$7([y$1()], Q.prototype, "suspended", void 0), e$7([y$1()], Q.prototype, "fading", void 0), e$7([y$1()], Q.prototype, "updating", void 0), Q = e$7([i$4("esri.views.2d.layers.VectorTileLayerView2D")], Q);
var R = Q;
export default R;
