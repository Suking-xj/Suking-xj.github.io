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
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import { a4 as n, cB as m, a0 as t, f7 as a, ai as t$1, cg as i, av as n$1, a5 as r$2, b$ as e } from "./vendor.74d5941c.js";
import { s } from "./CircularArray.2e27cf26.js";
import { O } from "./aaBoundingBox.b76947f8.js";
import { i as i$1 } from "./ComputedAttributeStorage.2a55b702.js";
import { d } from "./FeatureSetReader.a91e3e2d.js";
function r$1(r2, a2, t2) {
  r2.referencesGeometry();
  const n$12 = a2.readArcadeFeature();
  try {
    return r2.evaluate(__spreadProps(__spreadValues({}, t2), { $feature: n$12 }));
  } catch (o2) {
    return n.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:", o2), null;
  }
}
const c$1 = import("./labelFormatUtils.902ee8a1.js");
class o {
  constructor(e2, s2) {
    this._canCacheExpressionValue = false, this._sourceInfo = e2, this._bitsets = { computed: s2.getBitset(s2.createBitset()) };
  }
  invalidate() {
    this._bitsets.computed.clear();
  }
  updateSchema(t$2, r2) {
    return __async(this, null, function* () {
      const c2 = m(this._schema, r2);
      if (this._schema = r2, !r2 || t(c2) || !a(c2, "attributes"))
        return;
      t$1("esri-2d-update-debug") && console.debug("Applying Update - Store:", c2), this._bitsets.computed.clear(), t$2.targets[r2.name] = true;
      const o2 = r2.attributes, n2 = [], p = [];
      for (const e2 in o2) {
        const s2 = o2[e2];
        switch (s2.type) {
          case "field":
            break;
          case "expression":
            n2.push(this._createArcadeComputedField(s2));
            break;
          case "label-expression":
            n2.push(this._createLabelArcadeComputedField(s2));
            break;
          case "statistic":
            p.push(s2);
        }
      }
      this._computedFields = yield Promise.all(n2), this._canCacheExpressionValue = !this._computedFields.some((e2) => e2.type === "expression" && e2.expression.referencesScale()), this._statisticFields = p;
    });
  }
  setComputedAttributes(e2, s2, t2, i2) {
    const a2 = this._bitsets.computed;
    if (!this._canCacheExpressionValue || !a2.has(t2)) {
      a2.set(t2);
      for (const a3 of this._computedFields) {
        const r2 = this._evaluateField(s2, a3, i2);
        switch (a3.resultType) {
          case "numeric":
            e2.setComputedNumericAtIndex(t2, a3.fieldIndex, r2);
            break;
          case "string":
            e2.setComputedStringAtIndex(t2, a3.fieldIndex, r2);
        }
      }
    }
  }
  _createArcadeComputedField(e2) {
    return __async(this, null, function* () {
      const s2 = this._sourceInfo.spatialReference, i$12 = this._sourceInfo.fieldsIndex;
      return __spreadProps(__spreadValues({}, e2), { expression: yield i(e2.valueExpression, s2, i$12) });
    });
  }
  _createLabelArcadeComputedField(e2) {
    return __async(this, null, function* () {
      const s2 = this._sourceInfo.spatialReference, t2 = this._sourceInfo.fields, { createLabelFunction: i2 } = yield c$1, a2 = yield i2(e2.label, t2, s2);
      return __spreadProps(__spreadValues({}, e2), { builder: a2 });
    });
  }
  _evaluateField(e2, s2, t2) {
    switch (s2.type) {
      case "label-expression": {
        const t3 = e2.readArcadeFeature();
        return s2.builder.evaluate(t3) || "";
      }
      case "expression": {
        const { expression: i2 } = s2;
        return r$1(i2, e2, { $view: { scale: t2 } });
      }
    }
  }
}
class r extends d {
  constructor(r2, t2) {
    super(d.createInstance()), this._currentIndex = -1, this._reader = r2, this._indices = t2;
  }
  static from(e2, t2) {
    return new r(e2.copy(), t2);
  }
  get hasNext() {
    return this._currentIndex + 1 < this._indices.length;
  }
  getApproximateSize() {
    return this._indices.length;
  }
  getCursor() {
    return this.copy();
  }
  copy() {
    const e2 = new r(this._reader.copy(), this._indices);
    return e2._currentIndex = this._currentIndex, e2;
  }
  next() {
    for (; this._nextIndex() && !this._reader._passesFilter() && !this._reader._getExists(); )
      ;
    return this._currentIndex < this._indices.length;
  }
  _nextIndex() {
    return ++this._currentIndex < this._indices.length && (this._reader.setIndex(this._indices[this._currentIndex]), true);
  }
  setArcadeSpatialReference(e2) {
    this._reader.setArcadeSpatialReference(e2);
  }
  attachStorage(e2) {
    this._reader.attachStorage(e2);
  }
  get geometryType() {
    return this._reader.geometryType;
  }
  get hasFeatures() {
    return this._reader.hasFeatures;
  }
  get exceededTransferLimit() {
    return this._reader.exceededTransferLimit;
  }
  get hasZ() {
    return this._reader.hasZ;
  }
  get hasM() {
    return this._reader.hasM;
  }
  getStorage() {
    return this._reader.getStorage();
  }
  getComputedNumeric(e2) {
    return this._reader.getComputedNumericAtIndex(0);
  }
  setComputedNumeric(e2, r2) {
    return this._reader.setComputedNumericAtIndex(r2, 0);
  }
  getComputedString(e2) {
    return this._reader.getComputedStringAtIndex(0);
  }
  setComputedString(e2, r2) {
    return this._reader.setComputedStringAtIndex(0, r2);
  }
  getComputedNumericAtIndex(e2) {
    return this._reader.getComputedNumericAtIndex(e2);
  }
  setComputedNumericAtIndex(e2, r2) {
    this._reader.setComputedNumericAtIndex(e2, r2);
  }
  getComputedStringAtIndex(e2) {
    return this._reader.getComputedStringAtIndex(e2);
  }
  setComputedStringAtIndex(e2, r2) {
    return this._reader.setComputedStringAtIndex(e2, r2);
  }
  transform(e2, r2, t2, d2) {
    const a2 = this.copy();
    return a2._reader = this._reader.transform(e2, r2, t2, d2), a2;
  }
  extent(e2, r2, t2, d2) {
    const a2 = this.copy();
    return a2._reader = this._reader.extent(e2, r2, t2, d2), a2;
  }
  hasFilter() {
    return this._reader.hasFilter();
  }
  readAttribute(e2, r2 = false) {
    return this._reader.readAttribute(e2, r2);
  }
  readAttributes() {
    return this._reader.readAttributes();
  }
  joinAttributes(e2) {
    return this._reader.joinAttributes(e2);
  }
  readArcadeFeature() {
    return this._reader.readArcadeFeature();
  }
  geometry() {
    return this._reader.geometry();
  }
  field(e2) {
    return this.readAttribute(e2, true);
  }
  hasField(e2) {
    return this._reader.hasField(e2);
  }
  setField(e2, r2) {
    return this._reader.setField(e2, r2);
  }
  keys() {
    return this._reader.keys();
  }
  castToText() {
    return this._reader.castToText();
  }
  getQuantizationTransform() {
    return this._reader.getQuantizationTransform();
  }
  getAttributeHash() {
    return this._reader.getAttributeHash();
  }
  getObjectId() {
    return this._reader.getObjectId();
  }
  getDisplayId() {
    return this._reader.getDisplayId();
  }
  setDisplayId(e2) {
    return this._reader.setDisplayId(e2);
  }
  getGroupId() {
    return this._reader.getGroupId();
  }
  setGroupId(e2) {
    return this._reader.setGroupId(e2);
  }
  getXHydrate() {
    return this._reader.getXHydrate();
  }
  getYHydrate() {
    return this._reader.getYHydrate();
  }
  getX() {
    return this._reader.getX();
  }
  getY() {
    return this._reader.getY();
  }
  setIndex(e2) {
    return this._reader.setIndex(e2);
  }
  getIndex() {
    return this._reader.getIndex();
  }
  readLegacyFeature() {
    return this._reader.readLegacyFeature();
  }
  readOptimizedFeature() {
    return this._reader.readOptimizedFeature();
  }
  readLegacyPointGeometry() {
    return this._reader.readLegacyPointGeometry();
  }
  readLegacyGeometry() {
    return this._reader.readLegacyGeometry();
  }
  readLegacyCentroid() {
    return this._reader.readLegacyCentroid();
  }
  readGeometryArea() {
    return this._reader.readGeometryArea();
  }
  readUnquantizedGeometry() {
    return this._reader.readUnquantizedGeometry();
  }
  readHydratedGeometry() {
    return this._reader.readHydratedGeometry();
  }
  readGeometry() {
    return this._reader.readGeometry();
  }
  readCentroid() {
    return this._reader.readCentroid();
  }
  _passesFilter() {
    return this._reader._passesFilter();
  }
  _readAttribute(e2, r2) {
    throw new Error("Error: Should not be called. Underlying _reader should be used instead");
  }
  _readAttributes() {
    throw new Error("Error: Should not be called. Underlying _reader should be used instead");
  }
}
function h(t2, e2) {
  return t2 << 16 | e2;
}
function c(t2) {
  return (4294901760 & t2) >>> 16;
}
function I(t2) {
  return 65535 & t2;
}
const u = { getObjectId: (t2) => t2.getObjectId(), getAttributes: (t2) => t2.readAttributes(), getAttribute: (t2, e2) => t2.readAttribute(e2), cloneWithGeometry: (t2, e2) => t2, getGeometry: (t2) => t2.readHydratedGeometry(), getCentroid: (t2, e2) => t2.readCentroid() };
class l extends o {
  constructor(t2, e2, s$1) {
    super(t2, e2), this.featureAdapter = u, this.events = new n$1(), this._featureSetsByInstance = new Map(), this._objectIdToDisplayId = new Map(), this._spatialIndexInvalid = true, this._indexSearchCache = new s(50), this._index = i$1(9, (t3) => ({ minX: this._storage.getXMin(t3), minY: this._storage.getYMin(t3), maxX: this._storage.getXMax(t3), maxY: this._storage.getYMax(t3) })), this._storage = e2, this.mode = s$1;
  }
  get storage() {
    return this._storage;
  }
  get storeStatistics() {
    return { featureCount: 0, vertexCount: 0 };
  }
  hasInstance(t2) {
    return this._featureSetsByInstance.has(t2);
  }
  onTileData(e2, s2) {
    if (t(s2.addOrUpdate))
      return s2;
    if (s2.addOrUpdate.attachStorage(this._storage), this.mode === "snapshot") {
      const t2 = s2.addOrUpdate.getCursor();
      for (; t2.next(); ) {
        const s3 = t2.getDisplayId();
        this.setComputedAttributes(this._storage, t2, s3, e2.scale);
      }
      return s2;
    }
    this._featureSetsByInstance.set(s2.addOrUpdate.instance, s2.addOrUpdate);
    const a2 = s2.addOrUpdate.getCursor();
    for (; a2.next(); )
      this._insertFeature(a2, e2.scale);
    return this._spatialIndexInvalid = true, this.events.emit("changed"), s2;
  }
  search(t2) {
    this._rebuildIndex();
    const s2 = t2.id, a2 = this._indexSearchCache.find((t3) => t3.tileId === s2);
    if (r$2(a2))
      return a2.readers;
    const r$12 = new Map(), n2 = this._searchIndex(t2.bounds), i2 = [];
    for (const e2 of n2) {
      const t3 = this._storage.getInstanceId(e2), s3 = c(t3), a3 = I(t3);
      r$12.has(s3) || r$12.set(s3, []);
      r$12.get(s3).push(a3);
    }
    return r$12.forEach((t3, e2) => {
      const s3 = this._featureSetsByInstance.get(e2);
      i2.push(r.from(s3, t3));
    }), this._indexSearchCache.enqueue({ tileId: s2, readers: i2 }), i2;
  }
  insert(t2) {
    const e2 = t2.getCursor(), s2 = this._storage;
    for (; e2.next(); ) {
      var a2;
      const t3 = h(e2.instance, e2.getIndex()), r2 = e2.getObjectId(), n2 = (a2 = this._objectIdToDisplayId.get(r2)) != null ? a2 : this._storage.createDisplayId();
      e2.setDisplayId(n2), s2.setInstanceId(n2, t3), this._objectIdToDisplayId.set(r2, n2);
    }
    this._featureSetsByInstance.set(t2.instance, t2), this._spatialIndexInvalid = true;
  }
  remove(t2) {
    const e2 = this._objectIdToDisplayId.get(t2);
    if (!e2)
      return;
    const s2 = this._storage.getInstanceId(e2), a2 = I(s2), r2 = c(s2), n2 = this._featureSetsByInstance.get(r2);
    this._objectIdToDisplayId.delete(t2), this._storage.releaseDisplayId(e2), n2.removeAtIndex(a2), n2.isEmpty && this._featureSetsByInstance.delete(r2), this._spatialIndexInvalid = true;
  }
  forEach(t2) {
    this._objectIdToDisplayId.forEach((e2) => {
      const s2 = this._storage.getInstanceId(e2), a2 = this._lookupFeature(s2);
      t2(a2);
    });
  }
  forEachUnsafe(t2) {
    this._objectIdToDisplayId.forEach((e2) => {
      const s2 = this._storage.getInstanceId(e2), a2 = c(s2), r2 = I(s2), n2 = this._getFeatureSet(a2);
      n2.setIndex(r2), t2(n2);
    });
  }
  forEachInBounds(t2, e$1) {
    const a2 = this._searchIndex(t2);
    for (const r2 of a2) {
      const t3 = this.lookupFeatureByDisplayId(r2, this._storage);
      e$1(e(t3));
    }
  }
  forEachBounds(t2, e2, s2) {
    this._rebuildIndex();
    const a2 = [0, 0, 0, 0];
    for (const r2 of t2) {
      if (!r2.readGeometry())
        continue;
      const t3 = r2.getDisplayId();
      a2[0] = this._storage.getXMin(t3), a2[1] = this._storage.getYMin(t3), a2[2] = this._storage.getXMax(t3), a2[3] = this._storage.getYMax(t3), e2(O(s2, a2));
    }
  }
  sweepFeatures(t2, e2, s2) {
    this._spatialIndexInvalid = true, this._objectIdToDisplayId.forEach((a2, r2) => {
      t2.has(a2) || (e2.releaseDisplayId(a2), s2 && s2.unsetAttributeData(a2), this._objectIdToDisplayId.delete(r2));
    }), this.events.emit("changed");
  }
  sweepFeatureSets(t2) {
    this._spatialIndexInvalid = true, this._featureSetsByInstance.forEach((e2, s2) => {
      t2.has(s2) || this._featureSetsByInstance.delete(s2);
    });
  }
  lookupObjectId(e2, s2) {
    const a2 = this.lookupFeatureByDisplayId(e2, s2);
    return t(a2) ? null : a2.getObjectId();
  }
  lookupDisplayId(t2) {
    return this._objectIdToDisplayId.get(t2);
  }
  lookupFeatureByDisplayId(t2, e2) {
    const s2 = e2.getInstanceId(t2);
    return this._lookupFeature(s2);
  }
  lookupByDisplayIdUnsafe(t2) {
    const e2 = this._storage.getInstanceId(t2), s2 = c(e2), a2 = I(e2), r2 = this._getFeatureSet(s2);
    return r2 ? (r2.setIndex(a2), r2) : null;
  }
  _insertFeature(t2, e2) {
    const s2 = this._storage, a2 = t2.getObjectId(), r2 = h(t2.instance, t2.getIndex());
    s2.getInstanceId(t2.getDisplayId());
    let n2 = this._objectIdToDisplayId.get(a2);
    n2 || (n2 = s2.createDisplayId(), this._objectIdToDisplayId.set(a2, n2), this._spatialIndexInvalid = true), t2.setDisplayId(n2), s2.setInstanceId(n2, r2), this.setComputedAttributes(s2, t2, n2, e2);
  }
  _searchIndex(t2) {
    this._rebuildIndex();
    const e2 = { minX: t2[0], minY: t2[1], maxX: t2[2], maxY: t2[3] };
    return this._index.search(e2);
  }
  _rebuildIndex() {
    if (!this._spatialIndexInvalid)
      return;
    const t2 = [];
    this.mode === "snapshot" ? this._featureSetsByInstance.forEach((e2) => {
      const s2 = e2.getCursor();
      for (; s2.next(); ) {
        const e3 = s2.getDisplayId();
        this._storage.setBounds(e3, s2) && t2.push(e3);
      }
    }) : this._objectIdToDisplayId.forEach((e2) => {
      const s2 = this._storage.getInstanceId(e2);
      this._storage.setBounds(e2, this._lookupFeature(s2)) && t2.push(e2);
    }), this._index.clear(), this._index.load(t2), this._indexSearchCache.clear(), this._spatialIndexInvalid = false;
  }
  _lookupFeature(t2) {
    const e2 = c(t2), s2 = I(t2), a2 = this._getFeatureSet(e2);
    if (!a2)
      return null;
    const r2 = a2.getCursor();
    return r2.setIndex(s2), r2;
  }
  _getFeatureSet(t2) {
    return this._featureSetsByInstance.get(t2);
  }
}
export { l, o, r, u };
