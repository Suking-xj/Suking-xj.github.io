var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __pow = Math.pow;
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
import { o as o$1, K, A as A$1, B as B$1, C, D as D$1, r as r$5 } from "./definitions.6737c10c.js";
import { r as r$1, i } from "./TileContainer.763b6c09.js";
import { a4 as n, a0 as t, cC as y, a5 as r$2, aw as A, b$ as e, aa as s, bN as B, cD as d, cS as v, ay as c$1, ai as t$1, bC as r$4, a9 as u, cT as G, a8 as m, cR as o$3, cU as t$2 } from "./vendor.74d5941c.js";
import { o as o$2, r as r$3 } from "./FramebufferObject.18518335.js";
import { Y, W, N, k as k$1 } from "./Utils.3f1577e5.js";
import { n as n$1, l } from "./visualVariablesUtils.bb9f81fa.js";
class r extends r$1 {
  constructor(o2, r2) {
    super(o2, r2, [o$1, o$1]);
  }
}
const z = n.getLogger("esri.views.2d.engine.webgl.AttributeStoreView"), U = n$1(l, z), D = 2147483647, S = (t2) => t2 & D;
class k {
  constructor(t2, e$1, i2) {
    this._texture = null, this._lastTexture = null, this._fbos = {}, this.texelSize = 4;
    const { buffer: s2, pixelType: r2, textureOnly: h2 } = t2, o2 = Y(r2);
    this.shared = i2, this.pixelType = r2, this.size = e$1, this.textureOnly = h2, h2 || (this.data = new o2(e(s2))), this._resetRange();
  }
  destroy() {
    A(this._texture, (t2) => t2.dispose());
    for (const t2 in this._fbos)
      A(this._fbos[t2], (e2) => {
        t2 === "0" && e2.detachColorTexture(), e2.dispose();
      }), this._fbos[t2] = null;
    this._texture = null;
  }
  get _textureDesc() {
    return { target: 3553, wrapMode: 33071, pixelFormat: 6408, dataType: this.pixelType, samplingMode: 9728, width: this.size, height: this.size };
  }
  setData(t2, e$1, i2) {
    const s2 = S(t2), r2 = e(this.data), h2 = s2 * this.texelSize + e$1;
    !r2 || h2 >= r2.length || (r2[h2] = i2, this.dirtyStart = Math.min(this.dirtyStart, s2), this.dirtyEnd = Math.max(this.dirtyEnd, s2));
  }
  getData(t$12, i2) {
    if (t(this.data))
      return null;
    const s2 = S(t$12) * this.texelSize + i2;
    return !this.data || s2 >= this.data.length ? null : this.data[s2];
  }
  getTexture(t2) {
    return c$1(this._texture, () => this._initTexture(t2));
  }
  getFBO(t$12, i2 = 0) {
    if (t(this._fbos[i2])) {
      const e2 = { colorTarget: 0, depthStencilTarget: 0 }, s2 = i2 === 0 ? this.getTexture(t$12) : this._textureDesc;
      this._fbos[i2] = new r$3(t$12, e2, s2);
    }
    return this._fbos[i2];
  }
  get locked() {
    return !(this.pixelType !== 5121 || !this.shared || this.textureOnly || !t$1("esri-atomics") || !this.data) && Atomics.load(this.data, 0) === 1;
  }
  updateTexture(t2) {
    if (!this.locked)
      try {
        const i2 = this.dirtyStart, s$1 = this.dirtyEnd;
        if (i2 > s$1)
          return;
        this._resetRange();
        const r2 = e(this.data).buffer, h2 = this.getTexture(t2), o2 = 4, d2 = (i2 - i2 % this.size) / this.size, n2 = (s$1 - s$1 % this.size) / this.size, l2 = d2, p2 = this.size, c2 = n2, x = d2 * this.size * o2, _ = (p2 + c2 * this.size) * o2 - x, f = Y(this.pixelType), g = f.BYTES_PER_ELEMENT;
        try {
          new f(r2, x * g, _);
        } catch (e2) {
          0;
        }
        const b = new f(r2, x * g, _), m2 = this.size, y2 = c2 - l2 + 1;
        if (y2 > this.size)
          return void z.error(new s("mapview-webgl", "Out-of-bounds index when updating AttributeData"));
        h2.updateData(0, 0, l2, m2, y2, b);
      } catch (e2) {
      }
  }
  update(t2) {
    const { data: e2, start: i2, end: r2 } = t2;
    if (r$2(e2)) {
      const s2 = this.data, r3 = i2 * this.texelSize;
      for (let i3 = 0; i3 < e2.length; i3++) {
        const a = 1 << i3 % this.texelSize;
        t2.layout & a && (s2[r3 + i3] = e2[i3]);
      }
    }
    this.dirtyStart = Math.min(this.dirtyStart, i2), this.dirtyEnd = Math.max(this.dirtyEnd, r2);
  }
  resize(t2, e$1) {
    const i2 = this.size;
    if (this.size = e$1, this.textureOnly)
      return void (i2 !== this.size && (this._lastTexture = this._texture, this._texture = null));
    const s2 = Y(this.pixelType);
    this.destroy(), this.data = new s2(e(t2.buffer));
  }
  _resetRange() {
    this.dirtyStart = 2147483647, this.dirtyEnd = 0;
  }
  _initTexture(t2) {
    const e2 = new o$2(t2, this._textureDesc, c$1(this.data, void 0));
    if (r$2(this._lastTexture) && this._fbos[0]) {
      const i2 = this._lastTexture.descriptor.width, s2 = this._lastTexture.descriptor.height, r2 = this._lastTexture.descriptor.dataType, a = this._lastTexture.descriptor.pixelFormat, h2 = this.getFBO(t2), o2 = W(r2), d2 = new (Y(r2))(new ArrayBuffer(i2 * s2 * o2 * this.texelSize)), n2 = t2.getBoundFramebufferObject(), { x: u2, y: l2, width: p2, height: c2 } = t2.getViewport();
      t2.bindFramebuffer(h2), h2.readPixels(0, 0, i2, s2, a, r2, d2), e2.updateData(0, 0, 0, 2 * i2, s2 / 2, d2), t2.setViewport(u2, l2, p2, c2), t2.bindFramebuffer(n2);
    }
    return this.destroy(), this._texture = e2, this._texture;
  }
}
class j {
  constructor(t2) {
    this._onUpdate = t2, this._initialized = false, this._forceNextUpload = false, this._locked = false;
  }
  initialize(t$12) {
    const { blocks: r2, shared: a, size: h2 } = t$12;
    if (this.shared = a, this.size = h2, U("Initializing AttributeStoreView", t$12), t(this._data))
      this._data = y(r2, (t2) => new k(t2, h2, a));
    else
      for (let i2 = 0; i2 < this._data.length; i2++) {
        const t$13 = this._data[i2], o2 = r2[i2];
        r$2(o2) && (t(t$13) ? this._data[i2] = new k(o2, h2, a) : t$13.resize(o2, h2));
      }
    this._initialized = true;
  }
  destroy() {
    A(this._data, (t2) => y(t2, (t3) => t3.destroy())), A(this._defaultTexture, (t2) => t2.dispose());
  }
  getBlock(t$12) {
    if (t(this._data))
      return null;
    return this._data[t$12];
  }
  setLabelMinZoom(t2, e2) {
    this.setData(t2, 0, 1, e2);
  }
  getLabelMinZoom(t2) {
    return this.getData(t2, 0, 1, 255);
  }
  getFilterFlags(t2) {
    return this.getData(t2, 0, 0, 0);
  }
  getVVSize(t2) {
    return this.getData(t2, K, 0, 0);
  }
  getData(t$12, i2, r2, h2) {
    if (!this._data)
      return 0;
    const o2 = e(this._data)[i2];
    if (t(o2))
      return 0;
    const d2 = o2.getData(t$12, r2);
    return r$2(d2) ? d2 : h2;
  }
  setData(t2, e$1, i2, s2) {
    const r2 = e(this._data)[e$1];
    e(r2).setData(t2, i2, s2);
  }
  lockTextureUpload() {
    this._locked = true;
  }
  unlockTextureUpload() {
    this._locked = false;
  }
  forceTextureUpload() {
    this._forceNextUpload = true;
  }
  requestUpdate(t2) {
    return __async(this, null, function* () {
      if (this._pendingAttributeUpdate)
        return void z.error(new s("mapview-webgl", "Tried to update attribute data with a pending update"));
      const e2 = B();
      return U("AttributeStoreView Update Requested", t2), this._pendingAttributeUpdate = { data: t2, resolver: e2 }, e2.promise;
    });
  }
  update() {
    if (this._initialized && (this._onUpdate(), r$2(this._pendingAttributeUpdate))) {
      const { data: t2, resolver: e$1 } = this._pendingAttributeUpdate, i2 = e(this._data);
      for (let s2 = 0; s2 < t2.blocks.length; s2++) {
        const e2 = t2.blocks[s2], a = i2[s2];
        A(a, (t3) => A(e2, (e3) => {
          U(`Updating block ${s2}`, e3), t3.update(e3);
        }));
      }
      this._pendingAttributeUpdate = null, e$1();
    }
  }
  bindTextures(t2) {
    this.update();
    const e$1 = this._getDefaultTexture(t2);
    if (!this._initialized)
      return t2.bindTexture(e$1, A$1), t2.bindTexture(e$1, B$1), t2.bindTexture(e$1, C), void t2.bindTexture(e$1, D$1);
    const i2 = e(this._data);
    this._locked && !this._forceNextUpload || (d(i2, (e2) => e2.updateTexture(t2)), this._forceNextUpload = false), t2.bindTexture(v(i2[0], e$1, (e2) => e2.getTexture(t2)), A$1), t2.bindTexture(v(i2[1], e$1, (e2) => e2.getTexture(t2)), B$1), t2.bindTexture(v(i2[2], e$1, (e2) => e2.getTexture(t2)), C), t2.bindTexture(v(i2[3], e$1, (e2) => e2.getTexture(t2)), D$1);
  }
  _getDefaultTexture(t$12) {
    if (t(this._defaultTexture)) {
      const e2 = { wrapMode: 33071, pixelFormat: 6408, dataType: 5121, samplingMode: 9728, width: 1, height: 1 };
      this._defaultTexture = new o$2(t$12, e2, new Uint8Array(4));
    }
    return this._defaultTexture;
  }
}
function c(e2, t2) {
  const i2 = t2.length;
  if (e2 < t2[0].value || i2 === 1)
    return t2[0].size;
  for (let s2 = 1; s2 < i2; s2++)
    if (e2 < t2[s2].value) {
      const i3 = (e2 - t2[s2 - 1].value) / (t2[s2].value - t2[s2 - 1].value);
      return t2[s2 - 1].size + i3 * (t2[s2].size - t2[s2 - 1].size);
    }
  return t2[i2 - 1].size;
}
function h(e2, t$12, i2 = 0) {
  if (t(t$12))
    return e2[i2 + 0] = 0, e2[i2 + 1] = 0, e2[i2 + 2] = 0, void (e2[i2 + 3] = 0);
  const { r: a, g: o2, b: l2, a: r2 } = t$12;
  e2[i2 + 0] = a * r2 / 255, e2[i2 + 1] = o2 * r2 / 255, e2[i2 + 2] = l2 * r2 / 255, e2[i2 + 3] = r2;
}
class p {
  constructor() {
    this.symbolLevels = [], this.vvColorValues = new Float32Array(8), this.vvColors = new Float32Array(32), this.vvOpacityValues = new Float32Array(8), this.vvOpacities = new Float32Array(8), this.vvSizeMinMaxValue = new Float32Array(4), this.ddColors = new Float32Array(32), this.ddBackgroundColor = new Float32Array(4), this.ddActiveDots = new Float32Array(8), this._vvMaterialParameters = { vvSizeEnabled: false, vvColorEnabled: false, vvRotationEnabled: false, vvRotationType: "geographic", vvOpacityEnabled: false };
  }
  getSizeVVFieldStops(i2) {
    const s2 = this._vvSizeFieldStops;
    switch (s2.type) {
      case "static":
        return s2;
      case "level-dependent":
        return c$1(s2.levels[i2], () => {
          let e$1 = 1 / 0, a = 0;
          for (const t2 in s2.levels) {
            const s3 = parseFloat(t2), o3 = Math.abs(i2 - s3);
            o3 < e$1 && (e$1 = o3, a = s3);
          }
          if (e$1 === 1 / 0)
            return { sizes: new Float32Array([0, 0, 0, 0, 0, 0]), values: new Float32Array([0, 0, 0, 0, 0, 0]) };
          const o2 = __pow(2, (i2 - a) / 2), l2 = e(s2.levels[a]), r2 = new Float32Array(l2.values);
          return r2[2] *= o2, r2[3] *= o2, { sizes: e(l2.sizes), values: r2 };
        });
    }
  }
  get vvMaterialParameters() {
    return this._vvMaterialParameters;
  }
  update(e2) {
    r$2(this._vvInfo) && this._updateVisualVariables(this._vvInfo.vvRanges, e2);
  }
  setInfo(e2, t2, s2) {
    switch (r$2(s2) && s2.forEach((e3) => this._updateEffects(e3)), this._vvInfo = t2, e2.type) {
      case "dot-density":
        this._updateDotDensityInfo(e2);
    }
  }
  getVariation() {
    return { ddDotBlending: this.ddDotBlending, outsideLabelsVisible: this.outsideLabelsVisible, oesTextureFloat: r$4().supportsTextureFloat };
  }
  getVariationHash() {
    return (this.ddDotBlending ? 1 : 0) | (this.outsideLabelsVisible ? 1 : 0) << 1;
  }
  _updateEffects(e2) {
    r$2(e2) && e2.filter && e2.filter.enabled && (this.outsideLabelsVisible = e2.excludedLabelsVisible);
  }
  _updateVisualVariables(e2, t2) {
    const i2 = this._vvMaterialParameters;
    if (i2.vvOpacityEnabled = false, i2.vvSizeEnabled = false, i2.vvColorEnabled = false, i2.vvRotationEnabled = false, !e2)
      return;
    const s2 = e2.size;
    if (s2) {
      if (i2.vvSizeEnabled = true, s2.minMaxValue) {
        const e3 = s2.minMaxValue;
        let i3, a2;
        if (N(e3.minSize) && N(e3.maxSize))
          if (k$1(e3.minSize) && k$1(e3.maxSize))
            i3 = u(e3.minSize), a2 = u(e3.maxSize);
          else {
            const s3 = t2.scale;
            i3 = u(c(s3, e3.minSize.stops)), a2 = u(c(s3, e3.maxSize.stops));
          }
        this.vvSizeMinMaxValue.set([e3.minDataValue, e3.maxDataValue, i3, a2]);
      }
      if (s2.scaleStops && (this.vvSizeScaleStopsValue = u(c(t2.scale, s2.scaleStops.stops))), s2.unitValue) {
        const e3 = G(t2.spatialReference) / m[s2.unitValue.unit];
        this.vvSizeUnitValueToPixelsRatio = e3 / t2.resolution;
      }
      s2.fieldStops && (this._vvSizeFieldStops = s2.fieldStops);
    }
    const a = e2.color;
    a && (i2.vvColorEnabled = true, this.vvColorValues.set(a.values), this.vvColors.set(a.colors));
    const n2 = e2.opacity;
    n2 && (i2.vvOpacityEnabled = true, this.vvOpacityValues.set(n2.values), this.vvOpacities.set(n2.opacities));
    const v2 = e2.rotation;
    v2 && (i2.vvRotationEnabled = true, i2.vvRotationType = v2.type);
  }
  _updateDotDensityInfo(e2) {
    const t2 = e2.attributes;
    this.ddDotValue = e2.dotValue, this.ddDotScale = e2.referenceScale, this.ddDotSize = e2.dotSize, this.ddDotBlending = e2.dotBlendingEnabled, this.ddSeed = e2.seed;
    for (let i2 = 0; i2 < r$5; i2++) {
      const e3 = i2 >= t2.length ? new o$3([0, 0, 0, 0]) : t2[i2].color;
      h(this.ddColors, e3, 4 * i2);
    }
    for (let i2 = 0; i2 < 8; i2++)
      this.ddActiveDots[i2] = i2 < e2.attributes.length ? 1 : 0;
    h(this.ddBackgroundColor, e2.backgroundColor);
  }
}
class o extends i {
  constructor(e2) {
    super(e2), this._rendererInfo = new p(), this._materialItemsRequestQueue = new t$2(), this.attributeView = new j(() => this.onAttributeStoreUpdate());
  }
  destroy() {
    this.removeAllChildren(), this.children.forEach((e2) => e2.destroy()), this.attributeView.destroy(), this._materialItemsRequestQueue.clear();
  }
  setRendererInfo(e2, t2, r2) {
    this._rendererInfo.setInfo(e2, t2, r2), this.requestRender();
  }
  getMaterialItems(t2, r2) {
    return __async(this, null, function* () {
      if (!t2 || t2.length === 0)
        return null;
      const s2 = B();
      return this._materialItemsRequestQueue.push({ items: t2, abortOptions: r2, resolver: s2 }), this.requestRender(), s2.promise;
    });
  }
  doRender(e2) {
    if (e2.context.capabilities.enable("textureFloat"), e2.context.capabilities.enable("vao"), this._materialItemsRequestQueue.length > 0) {
      let t2 = this._materialItemsRequestQueue.pop();
      for (; t2; )
        this._processMaterialItemRequest(e2, t2), t2 = this._materialItemsRequestQueue.pop();
    }
    super.doRender(e2);
  }
  renderChildren(e2) {
    for (const t2 of this.children)
      t2.commit(e2);
    this._rendererInfo.update(e2.state), super.renderChildren(e2);
  }
  createRenderParams(e2) {
    return __spreadProps(__spreadValues({}, super.createRenderParams(e2)), { rendererInfo: this._rendererInfo, attributeView: this.attributeView });
  }
  onAttributeStoreUpdate() {
  }
  _processMaterialItemRequest(e2, { items: t2, abortOptions: r2, resolver: s2 }) {
    const { painter: i2, pixelRatio: o2 } = e2, n2 = t2.map((e3) => i2.textureManager.rasterizeItem(e3.symbol, o2, e3.glyphIds, r2));
    Promise.all(n2).then((e3) => {
      if (!this.stage)
        return void s2.reject();
      const r3 = e3.map((e4, r4) => ({ id: t2[r4].id, mosaicItem: e4 }));
      s2.resolve(r3);
    }, s2.reject);
  }
}
export { o, r };
