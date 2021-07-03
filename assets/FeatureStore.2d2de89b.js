import { ai as t$1, fm as t$2, br as t$4, av as n$1, b6 as i, fo as J, a4 as n$2, aa as s, a5 as r, fp as fe } from "./vendor.74d5941c.js";
import { O } from "./aaBoundingBox.b76947f8.js";
import { h } from "./PooledRBush.257a80e4.js";
import { t as t$3 } from "./centroid.93c1b848.js";
const d = 5e4, n = { minX: 0, minY: 0, maxX: 0, maxY: 0 };
function t(i2, s2, d2) {
  n.minX = s2[0], n.minY = s2[1], n.maxX = s2[2], n.maxY = s2[3], i2.search(n, d2);
}
class e {
  constructor() {
    this._indexInvalid = false, this._boundsToLoad = [], this._boundsById = new Map(), this._idByBounds = new Map(), this._index = new h(9, t$1("csp-restrictions") ? (i2) => ({ minX: i2[0], minY: i2[1], maxX: i2[2], maxY: i2[3] }) : ["[0]", "[1]", "[2]", "[3]"]), this._loadIndex = () => {
      if (this._indexInvalid) {
        const i2 = new Array(this._idByBounds.size);
        let s2 = 0;
        this._idByBounds.forEach((d2, n2) => {
          i2[s2++] = n2;
        }), this._indexInvalid = false, this._index.clear(), this._index.load(i2);
      } else
        this._boundsToLoad.length && (this._index.load(this._boundsToLoad.filter((i2) => this._idByBounds.has(i2))), this._boundsToLoad.length = 0);
    };
  }
  clear() {
    this._indexInvalid = false, this._boundsToLoad.length = 0, this._boundsById.clear(), this._idByBounds.clear(), this._index.clear();
  }
  delete(i2) {
    const s2 = this._boundsById.get(i2);
    this._boundsById.delete(i2), s2 && (this._idByBounds.delete(s2), this._indexInvalid || this._index.remove(s2));
  }
  forEachInBounds(i2, s2) {
    this._loadIndex(), t(this._index, i2, (i3) => s2(this._idByBounds.get(i3)));
  }
  get(i2) {
    return this._boundsById.get(i2);
  }
  has(i2) {
    return this._boundsById.has(i2);
  }
  invalidateIndex() {
    this._indexInvalid || (this._indexInvalid = true, this._boundsToLoad.length = 0);
  }
  set(i2, s2) {
    if (!this._indexInvalid) {
      const s3 = this._boundsById.get(i2);
      s3 && (this._index.remove(s3), this._idByBounds.delete(s3));
    }
    this._boundsById.set(i2, s2), s2 && (this._idByBounds.set(s2, i2), this._indexInvalid || (this._boundsToLoad.push(s2), this._boundsToLoad.length > d && this._loadIndex()));
  }
}
const o = { getObjectId: (t2) => t2.objectId, getAttributes: (t2) => t2.attributes, getAttribute: (t2, e2) => t2.attributes[e2], cloneWithGeometry: (e2, r2) => new t$2(r2, e2.attributes, null, e2.objectId), getGeometry: (t2) => t2.geometry, getCentroid: (t2, o2) => (t2.centroid || (t2.centroid = t$3(new t$4(), t2.geometry, o2.hasZ, o2.hasM)), t2.centroid) };
class u {
  constructor(e$1) {
    this.geometryInfo = e$1, this._boundsStore = new e(), this._featuresById = new Map(), this._markedIds = new Set(), this.events = new n$1(), this.featureAdapter = o;
  }
  get geometryType() {
    return this.geometryInfo.geometryType;
  }
  get hasM() {
    return this.geometryInfo.hasM;
  }
  get hasZ() {
    return this.geometryInfo.hasZ;
  }
  get numFeatures() {
    return this._featuresById.size;
  }
  get fullBounds() {
    if (!this.numFeatures)
      return null;
    const e2 = i(J);
    return this._featuresById.forEach((t2) => {
      const r2 = this._boundsStore.get(t2.objectId);
      r2 && (e2[0] = Math.min(r2[0], e2[0]), e2[1] = Math.min(r2[1], e2[1]), e2[2] = Math.max(r2[2], e2[2]), e2[3] = Math.max(r2[3], e2[3]));
    }), e2;
  }
  get storeStatistics() {
    let e2 = 0;
    return this._featuresById.forEach((t2) => {
      t2.geometry && t2.geometry.coords && (e2 += t2.geometry.coords.length);
    }), { featureCount: this._featuresById.size, vertexCount: e2 / (this.hasZ ? this.hasM ? 4 : 3 : this.hasM ? 3 : 2) };
  }
  add(e2) {
    this._add(e2), this._emitChanged();
  }
  addMany(e2) {
    for (const t2 of e2)
      this._add(t2);
    this._emitChanged();
  }
  clear() {
    this._featuresById.clear(), this._boundsStore.clear(), this._emitChanged();
  }
  removeById(e2) {
    const t2 = this._featuresById.get(e2);
    return t2 ? (this._remove(t2), this._emitChanged(), t2) : null;
  }
  removeManyById(e2) {
    this._boundsStore.invalidateIndex();
    for (const t2 of e2) {
      const e3 = this._featuresById.get(t2);
      e3 && this._remove(e3);
    }
    this._emitChanged();
  }
  forEachBounds(e2, t2, r2) {
    for (const s2 of e2) {
      const e3 = this._boundsStore.get(s2.objectId);
      e3 && t2(O(r2, e3));
    }
  }
  getFeature(e2) {
    return this._featuresById.get(e2);
  }
  has(e2) {
    return this._featuresById.has(e2);
  }
  forEach(e2) {
    this._featuresById.forEach((t2) => e2(t2));
  }
  forEachInBounds(e2, t2) {
    this._boundsStore.forEachInBounds(e2, (e3) => {
      t2(this._featuresById.get(e3));
    });
  }
  startMarkingUsedFeatures() {
    this._boundsStore.invalidateIndex(), this._markedIds.clear();
  }
  sweep() {
    let e2 = false;
    this._featuresById.forEach((t2, r2) => {
      this._markedIds.has(r2) || (e2 = true, this._remove(t2));
    }), this._markedIds.clear(), e2 && this._emitChanged();
  }
  _emitChanged() {
    this.events.emit("changed", void 0);
  }
  _add(s$1) {
    if (!s$1)
      return;
    const i$1 = s$1.objectId;
    if (i$1 == null)
      return void n$2.getLogger("esri.layers.graphics.data.FeatureStore").error(new s("featurestore:invalid-feature", "feature id is missing", { feature: s$1 }));
    const d2 = this._featuresById.get(i$1);
    let n2;
    if (this._markedIds.add(i$1), d2 ? (s$1.displayId = d2.displayId, n2 = this._boundsStore.get(i$1), this._boundsStore.delete(i$1)) : r(this.onFeatureAdd) && this.onFeatureAdd(s$1), !s$1.geometry || !s$1.geometry.coords || !s$1.geometry.coords.length)
      return this._boundsStore.set(i$1, null), void this._featuresById.set(i$1, s$1);
    n2 = fe(n2 || i(), s$1.geometry, this.geometryInfo.hasZ, this.geometryInfo.hasM), this._boundsStore.set(i$1, n2), this._featuresById.set(i$1, s$1);
  }
  _remove(t2) {
    return r(this.onFeatureRemove) && this.onFeatureRemove(t2), this._markedIds.delete(t2.objectId), this._boundsStore.delete(t2.objectId), this._featuresById.delete(t2.objectId), t2;
  }
}
export { e, u };
