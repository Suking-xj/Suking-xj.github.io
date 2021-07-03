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
import { cd as e$1, b6 as i$2, cr as M$1, cs as o$1, ct as a$1, av as n$2, ai as t$1, cu as l$3, cv as K, cw as oe, cx as W, cy as ee, cz as ye, a5 as r$4, cA as ae, a0 as t$2, a4 as n$3, bI as h$3, cB as m$1, bN as B$1, an as g, aa as s$2, cC as y, cD as d$4, cE as e$2, aw as A$1, b$ as e$3, a7 as e$4 } from "./vendor.74d5941c.js";
import { r as r$3 } from "./quickselect.e4940b29.js";
import { d as d$3, t as t$3 } from "./FeatureSetReader.a91e3e2d.js";
import { N, O as O$1, K as K$1, c as c$2, J } from "./definitions.6737c10c.js";
import { Y } from "./Utils.3f1577e5.js";
import { n as n$4, l as l$4, r as r$5 } from "./visualVariablesUtils.bb9f81fa.js";
class l$2 {
  constructor(e2, t2) {
    this.key = new e$1(0, 0, 0, 0), this.bounds = i$2(), this.objectIds = new Set(), this.key.set(t2);
    const s2 = e2.getLODInfoAt(this.key);
    this.tileInfoView = e2, this.tileInfoView.getTileBounds(this.bounds, this.key, true), this.resolution = s2.resolution, this.scale = s2.scale, this.level = s2.level, this.needsClear = true;
  }
  get id() {
    return this.key.id;
  }
  get extent() {
    return M$1.fromBounds(this.bounds, this.tileInfoView.tileInfo.spatialReference);
  }
  get transform() {
    return { originPosition: "upperLeft", scale: [this.resolution, this.resolution], translate: [this.bounds[0], this.bounds[3]] };
  }
  get bbox() {
    const e2 = this.bounds;
    return { minX: e2[0], minY: e2[1], maxX: e2[2], maxY: e2[3] };
  }
  clone() {
    return new l$2(this.tileInfoView, this.key);
  }
  createChildTiles() {
    const t2 = this.key.getChildKeys(), i2 = o$1.acquire();
    for (let e2 = 0; e2 < t2.length; e2++)
      i2[e2] = new l$2(this.tileInfoView, t2[e2]);
    return i2;
  }
  getQuantizationParameters() {
    return a$1.fromJSON({ mode: "view", originPosition: "upperLeft", tolerance: this.resolution, extent: { xmin: this.bounds[0], ymin: this.bounds[1], xmax: this.bounds[2], ymax: this.bounds[3], spatialReference: this.tileInfoView.tileInfo.spatialReference } });
  }
}
function i$1(t2, n2) {
  if (!(this instanceof i$1))
    return new i$1(t2, n2);
  this._maxEntries = Math.max(4, t2 || 9), this._minEntries = Math.max(2, Math.ceil(0.4 * this._maxEntries)), n2 && (typeof n2 == "function" ? this.toBBox = n2 : this._initFormat(n2)), this.clear();
}
function n$1(t2, i2, n2) {
  if (!n2)
    return i2.indexOf(t2);
  for (var h2 = 0; h2 < i2.length; h2++)
    if (n2(t2, i2[h2]))
      return h2;
  return -1;
}
function h$2(t2, i2) {
  a(t2, 0, t2.children.length, i2, t2);
}
function a(t2, i2, n2, h2, a2) {
  a2 || (a2 = x(null)), a2.minX = 1 / 0, a2.minY = 1 / 0, a2.maxX = -1 / 0, a2.maxY = -1 / 0;
  for (var e2, o2 = i2; o2 < n2; o2++)
    e2 = t2.children[o2], r$2(a2, t2.leaf ? h2(e2) : e2);
  return a2;
}
function r$2(t2, i2) {
  return t2.minX = Math.min(t2.minX, i2.minX), t2.minY = Math.min(t2.minY, i2.minY), t2.maxX = Math.max(t2.maxX, i2.maxX), t2.maxY = Math.max(t2.maxY, i2.maxY), t2;
}
function e(t2, i2) {
  return t2.minX - i2.minX;
}
function o(t2, i2) {
  return t2.minY - i2.minY;
}
function s$1(t2) {
  return (t2.maxX - t2.minX) * (t2.maxY - t2.minY);
}
function l$1(t2) {
  return t2.maxX - t2.minX + (t2.maxY - t2.minY);
}
function m(t2, i2) {
  return (Math.max(i2.maxX, t2.maxX) - Math.min(i2.minX, t2.minX)) * (Math.max(i2.maxY, t2.maxY) - Math.min(i2.minY, t2.minY));
}
function c$1(t2, i2) {
  var n2 = Math.max(t2.minX, i2.minX), h2 = Math.max(t2.minY, i2.minY), a2 = Math.min(t2.maxX, i2.maxX), r2 = Math.min(t2.maxY, i2.maxY);
  return Math.max(0, a2 - n2) * Math.max(0, r2 - h2);
}
function u$2(t2, i2) {
  return t2.minX <= i2.minX && t2.minY <= i2.minY && i2.maxX <= t2.maxX && i2.maxY <= t2.maxY;
}
function f(t2, i2) {
  return i2.minX <= t2.maxX && i2.minY <= t2.maxY && i2.maxX >= t2.minX && i2.maxY >= t2.minY;
}
function x(t2) {
  return { children: t2, height: 1, leaf: true, minX: 1 / 0, minY: 1 / 0, maxX: -1 / 0, maxY: -1 / 0 };
}
function d$2(i2, n2, h2, a2, r2) {
  for (var e2, o2 = [n2, h2]; o2.length; )
    (h2 = o2.pop()) - (n2 = o2.pop()) <= a2 || (e2 = n2 + Math.ceil((h2 - n2) / a2 / 2) * a2, r$3(i2, e2, n2, h2, r2), o2.push(n2, e2, e2, h2));
}
i$1.prototype = { all: function() {
  return this._all(this.data, []);
}, search: function(t2) {
  var i2 = this.data, n2 = [], h2 = this.toBBox;
  if (!f(t2, i2))
    return n2;
  for (var a2, r2, e2, o2, s2 = []; i2; ) {
    for (a2 = 0, r2 = i2.children.length; a2 < r2; a2++)
      e2 = i2.children[a2], f(t2, o2 = i2.leaf ? h2(e2) : e2) && (i2.leaf ? n2.push(e2) : u$2(t2, o2) ? this._all(e2, n2) : s2.push(e2));
    i2 = s2.pop();
  }
  return n2;
}, collides: function(t2) {
  var i2 = this.data, n2 = this.toBBox;
  if (!f(t2, i2))
    return false;
  for (var h2, a2, r2, e2, o2 = []; i2; ) {
    for (h2 = 0, a2 = i2.children.length; h2 < a2; h2++)
      if (r2 = i2.children[h2], f(t2, e2 = i2.leaf ? n2(r2) : r2)) {
        if (i2.leaf || u$2(t2, e2))
          return true;
        o2.push(r2);
      }
    i2 = o2.pop();
  }
  return false;
}, load: function(t2) {
  if (!t2 || !t2.length)
    return this;
  if (t2.length < this._minEntries) {
    for (var i2 = 0, n2 = t2.length; i2 < n2; i2++)
      this.insert(t2[i2]);
    return this;
  }
  var h2 = this._build(t2.slice(), 0, t2.length - 1, 0);
  if (this.data.children.length)
    if (this.data.height === h2.height)
      this._splitRoot(this.data, h2);
    else {
      if (this.data.height < h2.height) {
        var a2 = this.data;
        this.data = h2, h2 = a2;
      }
      this._insert(h2, this.data.height - h2.height - 1, true);
    }
  else
    this.data = h2;
  return this;
}, insert: function(t2) {
  return t2 && this._insert(t2, this.data.height - 1), this;
}, clear: function() {
  return this.data = x([]), this;
}, remove: function(t2, i2) {
  if (!t2)
    return this;
  for (var h2, a2, r2, e2, o2 = this.data, s2 = this.toBBox(t2), l2 = [], m2 = []; o2 || l2.length; ) {
    if (o2 || (o2 = l2.pop(), a2 = l2[l2.length - 1], h2 = m2.pop(), e2 = true), o2.leaf && (r2 = n$1(t2, o2.children, i2)) !== -1)
      return o2.children.splice(r2, 1), l2.push(o2), this._condense(l2), this;
    e2 || o2.leaf || !u$2(o2, s2) ? a2 ? (h2++, o2 = a2.children[h2], e2 = false) : o2 = null : (l2.push(o2), m2.push(h2), h2 = 0, a2 = o2, o2 = o2.children[0]);
  }
  return this;
}, toBBox: function(t2) {
  return t2;
}, compareMinX: e, compareMinY: o, toJSON: function() {
  return this.data;
}, fromJSON: function(t2) {
  return this.data = t2, this;
}, _all: function(t2, i2) {
  for (var n2 = []; t2; )
    t2.leaf ? i2.push.apply(i2, t2.children) : n2.push.apply(n2, t2.children), t2 = n2.pop();
  return i2;
}, _build: function(t2, i2, n2, a2) {
  var r2, e2 = n2 - i2 + 1, o2 = this._maxEntries;
  if (e2 <= o2)
    return h$2(r2 = x(t2.slice(i2, n2 + 1)), this.toBBox), r2;
  a2 || (a2 = Math.ceil(Math.log(e2) / Math.log(o2)), o2 = Math.ceil(e2 / Math.pow(o2, a2 - 1))), (r2 = x([])).leaf = false, r2.height = a2;
  var s2, l2, m2, c2, u2 = Math.ceil(e2 / o2), f2 = u2 * Math.ceil(Math.sqrt(o2));
  for (d$2(t2, i2, n2, f2, this.compareMinX), s2 = i2; s2 <= n2; s2 += f2)
    for (d$2(t2, s2, m2 = Math.min(s2 + f2 - 1, n2), u2, this.compareMinY), l2 = s2; l2 <= m2; l2 += u2)
      c2 = Math.min(l2 + u2 - 1, m2), r2.children.push(this._build(t2, l2, c2, a2 - 1));
  return h$2(r2, this.toBBox), r2;
}, _chooseSubtree: function(t2, i2, n2, h2) {
  for (var a2, r2, e2, o2, l2, c2, u2, f2; h2.push(i2), !i2.leaf && h2.length - 1 !== n2; ) {
    for (u2 = f2 = 1 / 0, a2 = 0, r2 = i2.children.length; a2 < r2; a2++)
      l2 = s$1(e2 = i2.children[a2]), (c2 = m(t2, e2) - l2) < f2 ? (f2 = c2, u2 = l2 < u2 ? l2 : u2, o2 = e2) : c2 === f2 && l2 < u2 && (u2 = l2, o2 = e2);
    i2 = o2 || i2.children[0];
  }
  return i2;
}, _insert: function(t2, i2, n2) {
  var h2 = this.toBBox, a2 = n2 ? t2 : h2(t2), e2 = [], o2 = this._chooseSubtree(a2, this.data, i2, e2);
  for (o2.children.push(t2), r$2(o2, a2); i2 >= 0 && e2[i2].children.length > this._maxEntries; )
    this._split(e2, i2), i2--;
  this._adjustParentBBoxes(a2, e2, i2);
}, _split: function(t2, i2) {
  var n2 = t2[i2], a2 = n2.children.length, r2 = this._minEntries;
  this._chooseSplitAxis(n2, r2, a2);
  var e2 = this._chooseSplitIndex(n2, r2, a2), o2 = x(n2.children.splice(e2, n2.children.length - e2));
  o2.height = n2.height, o2.leaf = n2.leaf, h$2(n2, this.toBBox), h$2(o2, this.toBBox), i2 ? t2[i2 - 1].children.push(o2) : this._splitRoot(n2, o2);
}, _splitRoot: function(t2, i2) {
  this.data = x([t2, i2]), this.data.height = t2.height + 1, this.data.leaf = false, h$2(this.data, this.toBBox);
}, _chooseSplitIndex: function(t2, i2, n2) {
  var h2, r2, e2, o2, l2, m2, u2, f2;
  for (m2 = u2 = 1 / 0, h2 = i2; h2 <= n2 - i2; h2++)
    o2 = c$1(r2 = a(t2, 0, h2, this.toBBox), e2 = a(t2, h2, n2, this.toBBox)), l2 = s$1(r2) + s$1(e2), o2 < m2 ? (m2 = o2, f2 = h2, u2 = l2 < u2 ? l2 : u2) : o2 === m2 && l2 < u2 && (u2 = l2, f2 = h2);
  return f2;
}, _chooseSplitAxis: function(t2, i2, n2) {
  var h2 = t2.leaf ? this.compareMinX : e, a2 = t2.leaf ? this.compareMinY : o;
  this._allDistMargin(t2, i2, n2, h2) < this._allDistMargin(t2, i2, n2, a2) && t2.children.sort(h2);
}, _allDistMargin: function(t2, i2, n2, h2) {
  t2.children.sort(h2);
  var e2, o2, s2 = this.toBBox, m2 = a(t2, 0, i2, s2), c2 = a(t2, n2 - i2, n2, s2), u2 = l$1(m2) + l$1(c2);
  for (e2 = i2; e2 < n2 - i2; e2++)
    o2 = t2.children[e2], r$2(m2, t2.leaf ? s2(o2) : o2), u2 += l$1(m2);
  for (e2 = n2 - i2 - 1; e2 >= i2; e2--)
    o2 = t2.children[e2], r$2(c2, t2.leaf ? s2(o2) : o2), u2 += l$1(c2);
  return u2;
}, _adjustParentBBoxes: function(t2, i2, n2) {
  for (var h2 = n2; h2 >= 0; h2--)
    r$2(i2[h2], t2);
}, _condense: function(t2) {
  for (var i2, n2 = t2.length - 1; n2 >= 0; n2--)
    t2[n2].children.length === 0 ? n2 > 0 ? (i2 = t2[n2 - 1].children).splice(i2.indexOf(t2[n2]), 1) : this.clear() : h$2(t2[n2], this.toBBox);
}, _initFormat: function(t2) {
  var i2 = ["return a", " - b", ";"];
  this.compareMinX = new Function("a", "b", i2.join(t2[0])), this.compareMinY = new Function("a", "b", i2.join(t2[1])), this.toBBox = new Function("a", "return {minX: a" + t2[0] + ", minY: a" + t2[1] + ", maxX: a" + t2[2] + ", maxY: a" + t2[3] + "};");
} };
const h$1 = { added: [], removed: [] }, r$1 = new Set(), d$1 = new e$1(0, 0, 0, 0);
class l extends n$2 {
  constructor(t2) {
    super(), this._tiles = new Map(), this._index = i$1(9, t$1("csp-restrictions") ? (e2) => ({ minX: e2.bounds[0], minY: e2.bounds[1], maxX: e2.bounds[2], maxY: e2.bounds[3] }) : [".bounds[0]", ".bounds[1]", ".bounds[2]", ".bounds[3]"]), this.tiles = [], this.tileScheme = t2;
  }
  destroy() {
    this.clear();
  }
  clear() {
    this.tiles.length = 0, this._tiles.clear(), this._index.clear();
  }
  has(e2) {
    return this._tiles.has(e2);
  }
  get(e2) {
    return this._tiles.get(e2);
  }
  findByKey(e2) {
    return this._tiles.get(e2.id);
  }
  minLOD() {
    return Math.min(...this.tiles.map((e2) => e2.level));
  }
  intersections(e2, t2) {
    const s2 = typeof e2 == "string" ? this.get(e2) : e2;
    if (!s2)
      return [];
    const i2 = t2 * s2.resolution, n2 = s2.bounds[0] - i2, o2 = s2.bounds[1] - i2, h2 = s2.bounds[2] + i2, r2 = s2.bounds[3] + i2, d2 = [];
    for (const l2 of this._index.search({ minX: n2, minY: o2, maxX: h2, maxY: r2 })) {
      const e3 = l2.bounds.slice();
      e3[0] = Math.max(e3[0], n2), e3[1] = Math.max(e3[1], o2), e3[2] = Math.min(e3[2], h2), e3[3] = Math.min(e3[3], r2), e3[2] - e3[0] > 0 && e3[3] - e3[1] > 0 && d2.push({ bounds: e3, tile: l2 });
    }
    return d2;
  }
  boundsIntersections(e2) {
    return this._index.search({ minX: e2[0], minY: e2[1], maxX: e2[2], maxY: e2[3] });
  }
  updateTiles(e2) {
    const t2 = { added: [], removed: [] };
    for (const s2 of e2.added)
      if (!this.has(s2)) {
        const e3 = new l$2(this.tileScheme, s2);
        this._tiles.set(s2, e3), this._index.insert(e3), t2.added.push(e3);
      }
    for (const s2 of e2.removed)
      if (this.has(s2)) {
        const e3 = this.get(s2);
        this._tiles.delete(s2), this._index.remove(e3), t2.removed.push(e3);
      }
    this.tiles.length = 0, this._tiles.forEach((e3) => this.tiles.push(e3)), (t2.added.length || t2.removed.length) && this.emit("update", t2);
  }
  setViewState(e2) {
    const t2 = this.tileScheme.getTileCoverage(e2, 0);
    if (!t2)
      return;
    const { spans: s2, lodInfo: o2 } = t2, { level: l2 } = o2;
    if (s2.length > 0)
      for (const { row: i2, colFrom: a2, colTo: m2 } of s2)
        for (let e3 = a2; e3 <= m2; e3++) {
          const t3 = d$1.set(l2, i2, o2.normalizeCol(e3), o2.getWorldForColumn(e3)).id;
          if (r$1.add(t3), !this.has(t3)) {
            const e4 = new l$2(this.tileScheme, t3);
            this._tiles.set(t3, e4), this._index.insert(e4), this.tiles.push(e4), h$1.added.push(e4);
          }
        }
    for (let i2 = this.tiles.length - 1; i2 >= 0; i2--) {
      const e3 = this.tiles[i2];
      r$1.has(e3.id) || (this._tiles.delete(e3.id), this.tiles.splice(i2, 1), this._index.remove(e3), h$1.removed.push(e3));
    }
    (h$1.added.length || h$1.removed.length) && this.emit("update", h$1), l$3.pool.release(t2), r$1.clear(), h$1.added.length = 0, h$1.removed.length = 0;
  }
}
function h({ coords: t2, lengths: e2 }) {
  let r2 = 0;
  for (const s2 of e2) {
    for (let e3 = 1; e3 < s2; e3++)
      t2[2 * (r2 + e3)] += t2[2 * (r2 + e3) - 2], t2[2 * (r2 + e3) + 1] += t2[2 * (r2 + e3) - 1];
    r2 += s2;
  }
}
class c extends d$3 {
  constructor(t2, e2, r2) {
    super(t2), this._featureIndex = -1, this._dateFields = new Set(), this._geometryType = r2, this._features = e2;
  }
  static fromFeatures(t2, e2, s2) {
    const i2 = K([], t2, e2, false, false, s2);
    for (let r2 = 0; r2 < i2.length; r2++)
      i2[r2].displayId = t2[r2].displayId;
    return c.fromOptimizedFeatures(i2, e2);
  }
  static fromFeatureSet(t2, e2) {
    const r2 = oe(t2, e2);
    return c.fromOptimizedFeatureSet(r2);
  }
  static fromOptimizedFeatureSet(t2) {
    const { features: e2, geometryType: r2 } = t2, s2 = c.fromOptimizedFeatures(e2, r2);
    s2._exceededTransferLimit = t2.exceededTransferLimit, s2._transform = t2.transform;
    for (const i2 of t2.fields)
      i2.type === "esriFieldTypeDate" && s2._dateFields.add(i2.name);
    return s2;
  }
  static fromOptimizedFeatures(t2, e2, r2) {
    const s2 = d$3.createInstance(), i2 = new c(s2, t2, e2);
    return i2._transform = r2, i2;
  }
  get _current() {
    return this._features[this._featureIndex];
  }
  get geometryType() {
    return this._geometryType;
  }
  get hasFeatures() {
    return !!this._features.length;
  }
  get hasNext() {
    return this._featureIndex + 1 < this._features.length;
  }
  get exceededTransferLimit() {
    return this._exceededTransferLimit;
  }
  get hasZ() {
    return false;
  }
  get hasM() {
    return false;
  }
  getApproximateSize() {
    return this._features.length;
  }
  getCursor() {
    return this.copy();
  }
  getQuantizationTransform() {
    return this._transform;
  }
  getAttributeHash() {
    let t2 = "";
    for (const e2 in this._current.attributes)
      t2 += this._current.attributes[e2];
    return t2;
  }
  getIndex() {
    return this._featureIndex;
  }
  setIndex(t2) {
    this._featureIndex = t2;
  }
  getObjectId() {
    return this._current.objectId;
  }
  getDisplayId() {
    return this._current.displayId;
  }
  setDisplayId(t2) {
    this._current.displayId = t2;
  }
  getGroupId() {
    return this._current.groupId;
  }
  setGroupId(t2) {
    this._current.groupId = t2;
  }
  copy() {
    const t2 = new c(this.instance, this._features, this.geometryType);
    return this.copyInto(t2), t2;
  }
  next() {
    for (; ++this._featureIndex < this._features.length && !this._passesFilter() && !this._getExists(); )
      ;
    return this._featureIndex < this._features.length;
  }
  readLegacyFeature() {
    return W(this._current, this.geometryType, this.hasZ, this.hasM);
  }
  readOptimizedFeature() {
    return this._current;
  }
  readLegacyPointGeometry() {
    return this.readGeometry() ? { x: this.getX(), y: this.getY() } : null;
  }
  readLegacyGeometry() {
    const t2 = this.readGeometry();
    return ee(t2, this.geometryType, this.hasZ, this.hasM);
  }
  readLegacyCentroid() {
    const t2 = this.readCentroid();
    return t2 ? { x: t2.coords[0] * this._sx + this._tx, y: t2.coords[1] * this._sy + this._ty } : null;
  }
  readGeometryArea() {
    return ye(this._current.geometry, 2);
  }
  readUnquantizedGeometry() {
    const t2 = this.readGeometry();
    if (this.geometryType === "esriGeometryPoint" || !t2)
      return t2;
    const e2 = t2.clone();
    return h(e2), e2;
  }
  readHydratedGeometry() {
    const e2 = this._current.geometry;
    if (!e2)
      return null;
    const r2 = e2.clone();
    return r$4(this._transform) && ae(r2, r2, this.hasZ, this.hasM, this._transform), r2;
  }
  getXHydrate() {
    const t2 = this._current.geometry.coords[0], r2 = this.getQuantizationTransform();
    return t$2(r2) ? t2 : t2 * r2.scale[0] + r2.translate[0];
  }
  getYHydrate() {
    const t2 = this._current.geometry.coords[1], r2 = this.getQuantizationTransform();
    return t$2(r2) ? t2 : r2.translate[1] - t2 * r2.scale[1];
  }
  getX() {
    return this._current.geometry.coords[0] * this._sx + this._tx;
  }
  getY() {
    return this._current.geometry.coords[1] * this._sy + this._ty;
  }
  readGeometry() {
    if (!this._current.hasGeometry)
      return null;
    const t2 = this._current.geometry.clone();
    if (t2.isPoint)
      return t2.coords[0] = t2.coords[0] * this._sx + this._tx, t2.coords[1] = t2.coords[1] * this._sy + this._ty, t2;
    let e2 = 0;
    for (const r2 of t2.lengths)
      t2.coords[2 * e2] = t2.coords[2 * e2] * this._sx + this._tx, t2.coords[2 * e2 + 1] = t2.coords[2 * e2 + 1] * this._sy + this._ty, e2 += r2;
    return t2;
  }
  readCentroid() {
    if (!this._current.hasGeometry)
      return null;
    if (!this._current.centroid) {
      const t3 = this._computeCentroid();
      if (!t3)
        return null;
      t3.coords[0] = (t3.coords[0] - this._tx) / this._sx, t3.coords[1] = (t3.coords[1] - this._ty) / this._sy, this._current.centroid = t3;
    }
    const t2 = this._current.centroid.clone();
    return t2.coords[0] = t2.coords[0] * this._sx + this._tx, t2.coords[1] = t2.coords[1] * this._sx + this._ty, t2;
  }
  _readAttribute(t2, e2) {
    const r2 = this._current.attributes[t2];
    if (r2 !== void 0)
      return r2 != null && e2 && this._dateFields.has(t2) ? new Date(r2) : r2;
    const s2 = this.readAttributes(), i2 = t2.toLocaleLowerCase().trim();
    for (const n2 in s2)
      if (n2.toLocaleLowerCase().trim() === i2) {
        const t3 = this._current.attributes[n2];
        return t3 != null && e2 && this._dateFields.has(n2) ? new Date(t3) : t3;
      }
  }
  copyInto(t2) {
    super.copyInto(t2), t2._featureIndex = this._featureIndex, t2._transform = this._transform, t2._dateFields = this._dateFields;
  }
  _readAttributes() {
    return this._current.attributes;
  }
  _passesFilter() {
    if (!this._hasFilter)
      return true;
    let t2 = 0, e2 = 0;
    switch (this.geometryType) {
      case "esriGeometryPoint": {
        const r2 = this._current.geometry;
        if (!r2)
          return false;
        [t2, e2] = r2.coords;
        break;
      }
      case "esriGeometryPolygon": {
        const r2 = this.readCentroid();
        if (!r2)
          return false;
        [t2, e2] = r2.coords, t2 -= this._tx, e2 -= this._ty;
        break;
      }
      default:
        return false;
    }
    return t2 >= this._xmin && t2 <= this._xmax && e2 >= this._ymin && e2 <= this._ymax;
  }
}
const w = n$3.getLogger("esri.views.layers.2d.features.support.AttributeStore"), A = n$4(l$4, w), k = 2147483647, D = 2147483648, E = 254, F = 255, U = 0, R = 1, C = (t2) => (t2 & D) >>> 31, M = (t2) => t2 & k, B = (t2) => C(t2) === R ? E : F;
function v(t2) {
  return C(t2) === R;
}
const j = { sharedArrayBuffer: t$1("esri-shared-array-buffer"), atomics: t$1("esri-atomics") };
function I(t2, e2) {
  return (i2) => e2(t2(i2));
}
class P {
  constructor(t2, e2, i2, s2) {
    this.size = 0, this.texelSize = 4;
    const { pixelType: r2, layout: a2, textureOnly: o2 } = s2;
    this.textureOnly = o2 || false, this.pixelType = r2, this._ctype = e2, this.layout = a2, this._resetRange(), this._shared = t2, this.size = i2, o2 || (this.data = this._initData(r2, i2, t2, e2));
  }
  get buffer() {
    return A$1(this.data, (t2) => t2.buffer);
  }
  unsetComponentAllTexels(t2, e2) {
    const i2 = e$3(this.data);
    for (let s2 = 0; s2 < this.size * this.size; s2++)
      i2[s2 * this.texelSize + t2] &= ~e2;
    this.dirtyStart = 0, this.dirtyEnd = this.size * this.size - 1;
  }
  setComponentAllTexels(t2, e2) {
    const i2 = e$3(this.data);
    for (let s2 = 0; s2 < this.size * this.size; s2++)
      i2[s2 * this.texelSize + t2] |= 255 & e2;
    this.dirtyStart = 0, this.dirtyEnd = this.size * this.size - 1;
  }
  setComponent(t2, e2, i2) {
    const s2 = e$3(this.data);
    for (const r2 of i2)
      s2[r2 * this.texelSize + t2] |= e2, this.dirtyStart = Math.min(this.dirtyStart, r2), this.dirtyEnd = Math.max(this.dirtyEnd, r2);
  }
  setComponentTexel(t2, e2, i2) {
    e$3(this.data)[i2 * this.texelSize + t2] |= e2, this.dirtyStart = Math.min(this.dirtyStart, i2), this.dirtyEnd = Math.max(this.dirtyEnd, i2);
  }
  unsetComponentTexel(t2, e2, i2) {
    e$3(this.data)[i2 * this.texelSize + t2] &= ~e2, this.dirtyStart = Math.min(this.dirtyStart, i2), this.dirtyEnd = Math.max(this.dirtyEnd, i2);
  }
  getData(t2, e2) {
    const i2 = M(t2);
    return e$3(this.data)[i2 * this.texelSize + e2];
  }
  setData(t2, e2, i2) {
    const s2 = M(t2), r2 = 1 << e2;
    (this.layout & r2) != 0 ? (this.data[s2 * this.texelSize + e2] = i2, this.dirtyStart = Math.min(this.dirtyStart, s2), this.dirtyEnd = Math.max(this.dirtyEnd, s2)) : w.error("mapview-attributes-store", "Tried to set a value for a texel's readonly component");
  }
  lock() {
    this.pixelType === 5121 && this._shared && j.atomics && this._ctype !== "local" && Atomics.store(this.data, 0, 1);
  }
  unlock() {
    this.pixelType === 5121 && this._shared && j.atomics && this._ctype !== "local" && Atomics.store(this.data, 0, 0);
  }
  expand(t2) {
    if (this.size = t2, !this.textureOnly) {
      const e2 = this._initData(this.pixelType, t2, this._shared, this._ctype), i2 = e$3(this.data);
      e2.set(i2), this.data = e2;
    }
  }
  toMessage() {
    const t2 = this.dirtyStart, e2 = this.dirtyEnd, i2 = this.texelSize;
    if (t2 > e2)
      return null;
    this._resetRange();
    const s2 = !(this._shared || this._ctype === "local"), r2 = this.pixelType, a2 = this.layout, n2 = e$3(this.data);
    if (!n2.slice) {
      if (!s2)
        return { start: t2, end: e2, data: null, pixelType: r2, layout: a2 };
      return { start: t2, end: e2, data: new (Y(this.pixelType))(Array.prototype.slice.call(this.data, t2 * i2, (e2 + 1) * i2)), pixelType: r2, layout: a2 };
    }
    return { start: t2, end: e2, data: s2 && n2.slice(t2 * i2, (e2 + 1) * i2) || null, pixelType: r2, layout: a2 };
  }
  _initData(t2, e2, i2, s2) {
    const r2 = i2 && s2 !== "local" ? SharedArrayBuffer : ArrayBuffer, a2 = Y(t2), o2 = new a2(new r2(e2 * e2 * 4 * a2.BYTES_PER_ELEMENT));
    for (let n2 = 0; n2 < o2.length; n2 += 4)
      o2[n2 + 1] = 255;
    return o2;
  }
  _resetRange() {
    this.dirtyStart = 2147483647, this.dirtyEnd = 0;
  }
}
class O {
  constructor(t2, e2) {
    this._client = t2, this.config = e2, this._attributeComputeMap = new Map(), this._blocks = new Array(), this._filters = new Array(N), this._targetType = 0, this._abortController = h$3(), this._hasScaleExpr = false, this._size = 32, this._idsToHighlight = new Set();
    const i2 = e2.supportsTextureFloat ? 5126 : 5121;
    A(`Creating AttributeStore ${j.sharedArrayBuffer ? "with" : "without"} shared memory`), this._blockDescriptors = [{ pixelType: 5121, layout: 1 }, { pixelType: 5121, layout: 15, textureOnly: true }, { pixelType: i2, layout: 15 }, { pixelType: i2, layout: 15 }], this._blocks = this._blockDescriptors.map(() => null);
  }
  destroy() {
    this._abortController.abort();
  }
  get hasScaleExpr() {
    return this._hasScaleExpr;
  }
  get _signal() {
    return this._abortController.signal;
  }
  update(i2, s2) {
    this.config = s2;
    const r2 = s2.schema.processors[0].storage, a2 = m$1(this._schema, r2);
    if ((i2.targets.feature || i2.targets.aggregate) && (i2.storage.data = true), a2 && (t$1("esri-2d-update-debug") && console.debug("Applying Update - AttributeStore:", a2), i2.storage.data = true, this._schema = r2, this._attributeComputeMap.clear(), !t$2(r2))) {
      switch (r2.target) {
        case "feature":
          this._targetType = U;
          break;
        case "aggregate":
          this._targetType = R;
      }
      for (const t2 of r2.mapping)
        this._bindAttribute(t2);
    }
  }
  onTileData(t2, i2) {
    if (t$2(i2.addOrUpdate))
      return;
    const s2 = i2.addOrUpdate.getCursor();
    for (; s2.next(); ) {
      const t3 = s2.getDisplayId();
      this.setAttributeData(t3, s2);
    }
  }
  invalidateResources() {
    this._createResourcesPromise = null, this._abortController.abort(), this._abortController = h$3();
  }
  setHighlight(t2, e2) {
    return __async(this, null, function* () {
      const i2 = 1, s2 = this._getBlock(0), r2 = e2.map((t3) => M(t3));
      s2.lock(), s2.unsetComponentAllTexels(0, i2), s2.setComponent(0, i2, r2), s2.unlock(), this._idsToHighlight.clear();
      for (const a2 of t2)
        this._idsToHighlight.add(a2);
      yield this.sendUpdates();
    });
  }
  updateFilters(e2, i2) {
    return __async(this, null, function* () {
      const { config: s2, service: r2, spatialReference: a2 } = i2, { filters: o2 } = s2, n2 = o2.map((t2, e3) => this._updateFilter(t2, e3, r2, a2));
      (yield Promise.all(n2)).some((t2) => t2) && (e2.storage.filters = true, t$1("esri-2d-update-debug") && console.debug("Applying Update - AttributeStore:", "Filters changed"));
    });
  }
  setData(t2, e2, i2, s2) {
    const r2 = M(t2);
    this._ensureSizeForTexel(r2), this._getBlock(e2).setData(t2, i2, s2);
  }
  getData(t2, e2, i2) {
    return this._getBlock(e2).getData(t2, i2);
  }
  getHighlightFlag(t2) {
    return this._idsToHighlight.has(t2) ? O$1 : 0;
  }
  unsetAttributeData(t2) {
    const e2 = M(t2);
    this._getBlock(0).setData(e2, 0, 0);
  }
  setAttributeData(t2, e2) {
    const i2 = M(t2);
    if (this._ensureSizeForTexel(i2), this._getBlock(0).setData(i2, 0, this.getFilterFlags(e2)), this._targetType !== C(t2))
      return;
    const s2 = this._attributeComputeMap, r2 = this.config.supportsTextureFloat ? 1 : 2, a2 = 4;
    s2.size && s2.forEach((t3, s3) => {
      const o2 = s3 * r2 % a2, n2 = Math.floor(s3 * r2 / a2), l2 = this._getBlock(n2 + K$1), h2 = t3(e2);
      if (this.config.supportsTextureFloat)
        l2.setData(i2, o2, h2);
      else if (h2 === c$2)
        l2.setData(i2, o2, 255), l2.setData(i2, o2 + 1, 255);
      else {
        const t4 = e$4(Math.round(h2), -32767, 32766) + 32768, e3 = 255 & t4, s4 = (65280 & t4) >> 8;
        l2.setData(i2, o2, e3), l2.setData(i2, o2 + 1, s4);
      }
    });
  }
  sendUpdates() {
    if (this._nextUpdate)
      return this._nextUpdate.promise;
    if (this._currUpdate)
      return this._nextUpdate = B$1(), this._nextUpdate.promise;
    const t2 = { blocks: this._blocks.map((t3) => r$4(t3) ? t3.toMessage() : null) };
    return this._currUpdate = this._createResources().then(() => {
      const e2 = () => {
        if (this._currUpdate = null, this._nextUpdate) {
          const t3 = this._nextUpdate;
          this._nextUpdate = null, this.sendUpdates().then(() => t3.resolve());
        }
      }, i2 = this._client.update(t2, this._signal).then(e2).catch(e2);
      return this._client.render(this._signal), i2;
    }).catch((t3) => g(t3) ? (this._createResourcesPromise = null, this._createResources()) : (w.error(new s$2("mapview-attribute-store", "Encountered an error during client update", t3)), Promise.resolve())), this._currUpdate;
  }
  _ensureSizeForTexel(t2) {
    for (; t2 >= this._size * this._size; )
      if (this._expand())
        return;
  }
  _bindAttribute(t2) {
    function e2() {
      return t2.normalizationField ? (e3) => {
        const i3 = e3.readAttribute(t2.normalizationField);
        if (!i3)
          return null;
        return e3.readAttribute(t2.field) / i3;
      } : (e3) => e3.readAttribute(t2.field);
    }
    function i2() {
      return t2.normalizationField && w.warn("mapview-arcade", "Ignoring normalizationField specified with an arcade expression which is not supported."), (e3) => e3.getComputedNumericAtIndex(t2.fieldIndex);
    }
    let s2;
    if (t2.fieldIndex != null)
      s2 = i2();
    else {
      if (!t2.field)
        return;
      s2 = e2();
    }
    if (t2.valueRepresentation) {
      s2 = I(s2, (e3) => r$5(e3, t2.valueRepresentation));
    }
    const r2 = (t3) => t3 === null || isNaN(t3) || t3 === 1 / 0 ? c$2 : t3;
    this._attributeComputeMap.set(t2.binding, I(s2, r2));
  }
  _createResources() {
    if (r$4(this._createResourcesPromise))
      return this._createResourcesPromise;
    this._getBlock(J), A("Initializing AttributeStore");
    const t2 = { shared: j.sharedArrayBuffer && !(this._client.type === "local"), size: this._size, blocks: y(this._blocks, (t3) => ({ textureOnly: t3.textureOnly, buffer: t3.buffer, pixelType: t3.pixelType })) }, r2 = this._client.initialize(t2, this._signal).catch((t3) => {
      g(t3) ? this._createResourcesPromise = null : w.error(new s$2("mapview-attribute-store", "Encountered an error during client initialization", t3));
    });
    return this._createResourcesPromise = r2, r2.then(() => t$2(this._createResourcesPromise) ? this._createResources() : void 0), r2;
  }
  _getBlock(t2) {
    const e2 = this._blocks[t2];
    if (r$4(e2))
      return e2;
    A(`Initializing AttributeBlock at index ${t2}`);
    const s2 = j.sharedArrayBuffer, r2 = this._client.type, a2 = new P(s2, r2, this._size, this._blockDescriptors[t2]);
    return this._blocks[t2] = a2, this._createResourcesPromise = null, a2;
  }
  _expand() {
    if (this._size < this.config.maxTextureSize) {
      const t2 = this._size <<= 1;
      return A("Expanding block size to", t2, this._blocks), d$4(this._blocks, (e2) => e2.expand(t2)), this._createResourcesPromise = null, this._size = t2, 0;
    }
    return w.error(new s$2("mapview-limitations", "Maximum number of onscreen features exceeded.")), -1;
  }
  _updateFilter(t2, s2, r2, a2) {
    return __async(this, null, function* () {
      const o2 = this._filters[s2], n2 = r$4(o2) && o2.hash;
      if (!o2 && !t2)
        return false;
      if (n2 === JSON.stringify(t2))
        return false;
      if (t$2(t2)) {
        const t3 = 1 << s2 + 1, e2 = this._getBlock(0);
        return this._filters[s2] = null, e2.setComponentAllTexels(0, t3), this.sendUpdates(), true;
      }
      const l2 = yield this._getFilter(s2, r2);
      return yield l2.update(t2, a2), true;
    });
  }
  _getFilter(t2, e2) {
    return __async(this, null, function* () {
      const s2 = this._filters[t2];
      if (r$4(s2))
        return s2;
      const { default: r2 } = yield import("./FeatureFilter.836bcb90.js"), a2 = new r2({ geometryType: e2.geometryType, hasM: false, hasZ: false, timeInfo: e2.timeInfo, fieldsIndex: new e$2(e2.fields) });
      return this._filters[t2] = a2, a2;
    });
  }
  isVisible(t2) {
    return !!(2 & this._getBlock(0).getData(t2, 0));
  }
  getFilterFlags(t2) {
    let i2 = 0;
    const s2 = B(t2.getDisplayId());
    for (let a2 = 0; a2 < this._filters.length; a2++) {
      const r3 = !!(s2 & 1 << a2), o2 = this._filters[a2];
      i2 |= (!r3 || t$2(o2) || o2.check(t2) ? 1 : 0) << a2;
    }
    let r2 = 0;
    if (this._idsToHighlight.size) {
      const e2 = t2.getObjectId();
      r2 = this.getHighlightFlag(e2);
    }
    return i2 << 1 | r2;
  }
}
const t = 2147483648;
function u$1(e2, r2) {
  return ((r2 ? t : 0) | e2) >>> 0;
}
class d {
  constructor() {
    this._freeIds = [], this._idCounter = 1;
  }
  createId(e2 = false) {
    return u$1(this._getFreeId(), e2);
  }
  releaseId(e2) {
    this._freeIds.push(e2);
  }
  _getFreeId() {
    return this._freeIds.length ? this._freeIds.pop() : this._idCounter++;
  }
}
function s(t2, e2, s2) {
  if (!(t2.length > e2))
    for (; t2.length <= e2; )
      t2.push(s2);
}
const i = 2147483647, n = 2147483648, r = (t2, e2) => ((e2 ? n : 0) | t2) >>> 0;
class u {
  constructor() {
    this._numerics = [], this._strings = [], this._idGenerator = new d(), this._allocatedSize = 256, this._bitsets = [], this._instanceIds = [], this._bounds = [];
  }
  createBitset() {
    const e2 = this._bitsets.length;
    return this._bitsets.push(t$3.create(this._allocatedSize, i)), e2 + 1;
  }
  getBitset(t2) {
    return this._bitsets[t2 - 1];
  }
  _expand() {
    this._allocatedSize <<= 1;
    for (const t2 of this._bitsets)
      t2.resize(this._allocatedSize);
  }
  _ensureNumeric(t2, e2) {
    this._numerics[t2] || (this._numerics[t2] = []);
    s(this._numerics[t2], e2, 0);
  }
  _ensureInstanceId(t2) {
    s(this._instanceIds, t2, 0);
  }
  _ensureString(t2, e2) {
    this._strings[t2] || (this._strings[t2] = []);
    s(this._strings[t2], e2, null);
  }
  createDisplayId(t2 = false) {
    const e2 = this._idGenerator.createId();
    return e2 > this._allocatedSize && this._expand(), r(e2, t2);
  }
  releaseDisplayId(t2) {
    for (const e2 of this._bitsets)
      e2.unset(t2);
    return this._idGenerator.releaseId(t2 & i);
  }
  getComputedNumeric(t2, e2) {
    return this.getComputedNumericAtIndex(t2 & i, 0);
  }
  setComputedNumeric(t2, e2, s2) {
    return this.setComputedNumericAtIndex(t2 & i, s2, 0);
  }
  getComputedString(t2, e2) {
    return this.getComputedStringAtIndex(t2 & i, 0);
  }
  setComputedString(t2, e2, s2) {
    return this.setComputedStringAtIndex(t2 & i, 0, s2);
  }
  getComputedNumericAtIndex(t2, e2) {
    const s2 = t2 & i;
    return this._ensureNumeric(e2, s2), this._numerics[e2][s2];
  }
  setComputedNumericAtIndex(t2, e2, s2) {
    const n2 = t2 & i;
    this._ensureNumeric(e2, n2), this._numerics[e2][n2] = s2;
  }
  getInstanceId(t2) {
    const e2 = t2 & i;
    return this._ensureInstanceId(e2), this._instanceIds[e2];
  }
  setInstanceId(t2, e2) {
    const s2 = t2 & i;
    this._ensureInstanceId(s2), this._instanceIds[s2] = e2;
  }
  getComputedStringAtIndex(t2, e2) {
    const s2 = t2 & i;
    return this._ensureString(e2, s2), this._strings[e2][s2];
  }
  setComputedStringAtIndex(t2, e2, s2) {
    const n2 = t2 & i;
    this._ensureString(e2, n2), this._strings[e2][n2] = s2;
  }
  getXMin(t2) {
    return this._bounds[4 * (t2 & i)];
  }
  getYMin(t2) {
    return this._bounds[4 * (t2 & i) + 1];
  }
  getXMax(t2) {
    return this._bounds[4 * (t2 & i) + 2];
  }
  getYMax(t2) {
    return this._bounds[4 * (t2 & i) + 3];
  }
  setBounds(t2, e2) {
    const n2 = e2.readHydratedGeometry();
    if (!n2 || !n2.coords.length)
      return false;
    let r2 = 1 / 0, u2 = 1 / 0, h2 = -1 / 0, o2 = -1 / 0;
    n2.forEachVertex((t3, e3) => {
      r2 = Math.min(r2, t3), u2 = Math.min(u2, e3), h2 = Math.max(h2, t3), o2 = Math.max(o2, e3);
    });
    const d2 = t2 & i;
    return s(this._bounds, 4 * d2 + 4, 0), this._bounds[4 * d2] = r2, this._bounds[4 * d2 + 1] = u2, this._bounds[4 * d2 + 2] = h2, this._bounds[4 * d2 + 3] = o2, true;
  }
}
export { M, O, c, i$1 as i, l, u, v };
