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
import { a4 as n, _ as j, df as o, b6 as i, cn as x$2, dg as g$2, cT as G, dh as t$1, ay as c$1, aa as s, cq as en, di as H, dj as a$1, dk as d$1, dl as w$1, a5 as r, dd as A, dm as o$1, dn as m$1, dp as m$2, dq as q } from "./vendor.74d5941c.js";
const c = n.getLogger("esri.layers.support.ElevationSampler");
class m {
  queryElevation(e2) {
    return h(e2.clone(), this);
  }
  on() {
    return g$1;
  }
  projectIfRequired(e2, t2) {
    return f(e2, t2);
  }
}
class p extends m {
  constructor(e2, t2, n2) {
    super(), this.tile = e2, this.noDataValue = n2, this.extent = o(e2.tile.extent, t2.spatialReference);
    const s2 = G(t2.spatialReference), i2 = t2.lodAt(e2.tile.level).resolution * s2;
    this.demResolution = { min: i2, max: i2 };
  }
  get spatialReference() {
    return this.extent.spatialReference;
  }
  contains(e2) {
    const t2 = this.projectIfRequired(e2, this.spatialReference);
    return t$1(this.extent, t2);
  }
  elevationAt(e2) {
    const t2 = this.projectIfRequired(e2, this.spatialReference);
    if (!t2)
      return null;
    if (!this.contains(e2)) {
      const t3 = this.extent, n2 = `${t3.xmin}, ${t3.ymin}, ${t3.xmax}, ${t3.ymax}`;
      c.warn("#elevationAt()", `Point used to sample elevation (${e2.x}, ${e2.y}) is outside of the sampler extent (${n2})`);
    }
    return this.tile.sample(t2.x, t2.y);
  }
}
class u extends m {
  constructor(e2, t2, n2) {
    let s2;
    super(), typeof t2 == "number" ? (this.noDataValue = t2, s2 = null) : (s2 = t2, this.noDataValue = n2), this.samplers = s2 ? e2.map((e3) => new p(e3, s2, this.noDataValue)) : e2;
    const i$1 = this.samplers[0];
    if (i$1) {
      this.extent = i$1.extent.clone();
      const { min: e3, max: t3 } = i$1.demResolution;
      this.demResolution = { min: e3, max: t3 };
      for (let n3 = 1; n3 < this.samplers.length; n3++) {
        const e4 = this.samplers[n3];
        this.extent.union(e4.extent), this.demResolution.min = Math.min(this.demResolution.min, e4.demResolution.min), this.demResolution.max = Math.max(this.demResolution.max, e4.demResolution.max);
      }
    } else
      this.extent = o(i(), s2.spatialReference), this.demResolution = { min: 0, max: 0 };
  }
  get spatialReference() {
    return this.extent.spatialReference;
  }
  elevationAt(e2) {
    const t2 = this.projectIfRequired(e2, this.spatialReference);
    if (!t2)
      return null;
    for (const n2 of this.samplers)
      if (n2.contains(t2))
        return n2.elevationAt(t2);
    return c.warn("#elevationAt()", `Point used to sample elevation (${e2.x}, ${e2.y}) is outside of the sampler`), null;
  }
}
function h(e2, t2) {
  const n2 = f(e2, t2.spatialReference);
  if (!n2)
    return null;
  switch (e2.type) {
    case "point":
      x$1(e2, n2, t2);
      break;
    case "polyline":
      R(e2, n2, t2);
      break;
    case "multipoint":
      d(e2, n2, t2);
  }
  return e2;
}
function f(e2, t2) {
  const i2 = e2.spatialReference;
  return i2.equals(t2) ? e2 : x$2(i2, t2) ? g$2(e2, t2) : (c.error(`Cannot project geometry spatial reference (wkid:${i2.wkid}) to elevation sampler spatial reference (wkid:${t2.wkid})`), null);
}
function x$1(t2, n2, s2) {
  t2.z = c$1(s2.elevationAt(n2), 0);
}
function R(t2, n2, s2) {
  y.spatialReference = n2.spatialReference;
  const i2 = t2.hasM && !t2.hasZ;
  for (let o2 = 0; o2 < t2.paths.length; o2++) {
    const r2 = t2.paths[o2], a2 = n2.paths[o2];
    for (let t3 = 0; t3 < r2.length; t3++) {
      const n3 = r2[t3], o3 = a2[t3];
      y.x = o3[0], y.y = o3[1], i2 && (n3[3] = n3[2]), n3[2] = c$1(s2.elevationAt(y), 0);
    }
  }
  t2.hasZ = true;
}
function d(t2, n2, s2) {
  y.spatialReference = n2.spatialReference;
  const i2 = t2.hasM && !t2.hasZ;
  for (let o2 = 0; o2 < t2.points.length; o2++) {
    const r2 = t2.points[o2], a2 = n2.points[o2];
    y.x = a2[0], y.y = a2[1], i2 && (r2[3] = r2[2]), r2[2] = c$1(s2.elevationAt(y), 0);
  }
  t2.hasZ = true;
}
const y = new j(), g$1 = { remove() {
} };
class t {
  constructor(t2, a2) {
    if (this.tile = t2, !a2)
      return void (this.samplerData = null);
    const e2 = this.tile.extent;
    this.samplerData = { pixelData: a2.values, width: a2.width, height: a2.height, safeWidth: 0.99999999 * (a2.width - 1), noDataValue: a2.noDataValue, dx: (a2.width - 1) / (e2[2] - e2[0]), dy: (a2.width - 1) / (e2[3] - e2[1]), x0: e2[0], y1: e2[3] };
  }
  sample(t2, e2) {
    if (this.samplerData)
      return a(this.samplerData, t2, e2);
  }
}
function a(t2, a2, i2) {
  const { safeWidth: h2, width: s2, pixelData: l, noDataValue: r2 } = t2, n2 = e(t2.dy * (t2.y1 - i2), 0, h2), o2 = e(t2.dx * (a2 - t2.x0), 0, h2), d2 = Math.floor(n2), u2 = Math.floor(o2), f2 = d2 * s2 + u2, p2 = f2 + s2, x2 = l[f2], D = l[p2], c2 = l[f2 + 1], w2 = l[p2 + 1];
  if (x2 !== r2 && D !== r2 && c2 !== r2 && w2 !== r2) {
    const t3 = o2 - u2, a3 = x2 + (c2 - x2) * t3;
    return a3 + (D + (w2 - D) * t3 - a3) * (n2 - d2);
  }
}
function e(t2, a2, e2) {
  return t2 < a2 ? a2 : t2 > e2 ? e2 : t2;
}
class T {
  queryAll(e2, i2, o2) {
    return __async(this, null, function* () {
      if (!(e2 = o2 && o2.ignoreInvisibleLayers ? e2.filter((e3) => e3.visible) : e2.slice()).length)
        throw new s("elevation-query:invalid-layer", "Elevation queries require at least one elevation layer to fetch tiles from");
      const s$1 = v.fromGeometry(i2);
      let l = false;
      o2 && o2.returnSampleInfo || (l = true);
      const n2 = __spreadProps(__spreadValues(__spreadValues({}, E), o2), { returnSampleInfo: true }), a2 = yield this.query(e2[e2.length - 1], s$1, n2), r2 = yield this._queryAllContinue(e2, a2, n2);
      return r2.geometry = r2.geometry.export(), l && delete r2.sampleInfo, r2;
    });
  }
  query(e2, i2, o2) {
    return __async(this, null, function* () {
      if (!e2)
        throw new s("elevation-query:invalid-layer", "Elevation queries require an elevation layer to fetch tiles from");
      if (!i2 || !(i2 instanceof v) && i2.type !== "point" && i2.type !== "multipoint" && i2.type !== "polyline")
        throw new s("elevation-query:invalid-geometry", "Only point, polyline and multipoint geometries can be used to query elevation");
      const s$1 = __spreadValues(__spreadValues({}, E), o2), l = new g(e2, i2.spatialReference, s$1), n2 = s$1.signal;
      return yield e2.load({ signal: n2 }), yield this._createGeometryDescriptor(l, i2, n2), yield this._selectTiles(l, n2), yield this._populateElevationTiles(l, n2), this._sampleGeometryWithElevation(l), this._createQueryResult(l, n2);
    });
  }
  createSampler(e2, i2, o2) {
    return __async(this, null, function* () {
      if (!e2)
        throw new s("elevation-query:invalid-layer", "Elevation queries require an elevation layer to fetch tiles from");
      if (!i2 || i2.type !== "extent")
        throw new s("elevation-query:invalid-extent", "Invalid or undefined extent");
      const s$1 = __spreadValues(__spreadValues({}, E), o2);
      return this._createSampler(e2, i2, s$1);
    });
  }
  createSamplerAll(e2, i2, o2) {
    return __async(this, null, function* () {
      if (!(e2 = o2 && o2.ignoreInvisibleLayers ? e2.filter((e3) => e3.visible) : e2.slice()).length)
        throw new s("elevation-query:invalid-layer", "Elevation queries require at least one elevation layer to fetch tiles from");
      if (!i2 || i2.type !== "extent")
        throw new s("elevation-query:invalid-extent", "Invalid or undefined extent");
      const s$1 = __spreadProps(__spreadValues(__spreadValues({}, E), o2), { returnSampleInfo: true }), l = yield this._createSampler(e2[e2.length - 1], i2, s$1);
      return this._createSamplerAllContinue(e2, i2, l, s$1);
    });
  }
  _createSampler(e2, t2, i2, o2) {
    return __async(this, null, function* () {
      const s2 = i2.signal;
      yield e2.load({ signal: s2 });
      const l = t2.spatialReference, n2 = e2.tileInfo.spatialReference;
      l.equals(n2) || (yield en([{ source: l, dest: n2 }], { signal: s2 }), t2 = H(t2, n2));
      const a2 = new w(e2, t2, i2, o2);
      return yield this._selectTiles(a2, s2), yield this._populateElevationTiles(a2, s2), new u(a2.elevationTiles, a2.layer.tileInfo, a2.options.noDataValue);
    });
  }
  _createSamplerAllContinue(e2, t2, i2, o2) {
    return __async(this, null, function* () {
      if (e2.pop(), !e2.length)
        return i2;
      const s2 = i2.samplers.map((e3) => a$1(e3.extent)), l = yield this._createSampler(e2[e2.length - 1], t2, o2, s2);
      if (l.samplers.length === 0)
        return i2;
      const n2 = i2.samplers.concat(l.samplers), a2 = new u(n2, o2.noDataValue);
      return this._createSamplerAllContinue(e2, t2, a2, o2);
    });
  }
  _queryAllContinue(e2, t2, i2) {
    return __async(this, null, function* () {
      const o2 = e2.pop(), s2 = t2.geometry.coordinates, l = [], n2 = [];
      for (let c2 = 0; c2 < s2.length; c2++) {
        const i3 = t2.sampleInfo[c2];
        i3.demResolution >= 0 ? i3.source || (i3.source = o2) : e2.length && (l.push(s2[c2]), n2.push(c2));
      }
      if (!e2.length || l.length === 0)
        return t2;
      const a2 = t2.geometry.clone(l), r2 = yield this.query(e2[e2.length - 1], a2, i2);
      return n2.forEach((e3, i3) => {
        s2[e3].z = r2.geometry.coordinates[i3].z, t2.sampleInfo[e3].demResolution = r2.sampleInfo[i3].demResolution;
      }), this._queryAllContinue(e2, t2, i2);
    });
  }
  _createQueryResult(e2, t2) {
    return __async(this, null, function* () {
      const i2 = { geometry: (yield e2.geometry.project(e2.outSpatialReference, t2)).export(), noDataValue: e2.options.noDataValue };
      return e2.options.returnSampleInfo && (i2.sampleInfo = this._extractSampleInfo(e2)), e2.geometry.coordinates.forEach((e3) => {
        e3.tile = null, e3.elevationTile = null;
      }), i2;
    });
  }
  _createGeometryDescriptor(e2, i2, o2) {
    return __async(this, null, function* () {
      let s$1;
      const l = e2.layer.tileInfo.spatialReference;
      if (i2 instanceof v ? s$1 = yield i2.project(l, o2) : (yield en([{ source: i2.spatialReference, dest: l }], { signal: o2 }), s$1 = H(i2, l)), !s$1)
        throw new s("elevation-query:spatial-reference-mismatch", `Cannot query elevation in '${i2.spatialReference.wkid}' on an elevation service in '${l.wkid}'`);
      e2.geometry = v.fromGeometry(s$1);
    });
  }
  _selectTiles(e2, i2) {
    return __async(this, null, function* () {
      const o2 = e2.options.demResolution;
      if (e2.type === "geometry" && this._preselectOutsideLayerExtent(e2), typeof o2 == "number")
        this._selectTilesClosestResolution(e2);
      else if (o2 === "finest-contiguous")
        yield this._selectTilesFinestContiguous(e2, i2);
      else {
        if (o2 !== "auto")
          throw new s("elevation-query:invalid-dem-resolution", `Invalid dem resolution value '${o2}', expected a number, "finest-contiguous" or "auto"`);
        yield this._selectTilesAuto(e2, i2);
      }
    });
  }
  _preselectOutsideLayerExtent(e2) {
    const t$12 = new t(null);
    t$12.sample = () => e2.options.noDataValue, e2.outsideExtentTile = t$12;
    const i2 = e2.layer.fullExtent;
    e2.geometry.coordinates.forEach((e3) => {
      const o2 = e3.x, s2 = e3.y;
      (o2 < i2.xmin || o2 > i2.xmax || s2 < i2.ymin || s2 > i2.ymax) && (e3.elevationTile = t$12);
    });
  }
  _selectTilesClosestResolution(e2) {
    const t2 = e2.layer.tileInfo, i2 = this._findNearestDemResolutionLODIndex(t2, e2.options.demResolution);
    e2.selectTilesAtLOD(i2);
  }
  _findNearestDemResolutionLODIndex(e2, t2) {
    const i2 = t2 / G(e2.spatialReference);
    let o2 = e2.lods[0], s2 = 0;
    for (let l = 1; l < e2.lods.length; l++) {
      const t3 = e2.lods[l];
      Math.abs(t3.resolution - i2) < Math.abs(o2.resolution - i2) && (o2 = t3, s2 = l);
    }
    return s2;
  }
  _selectTilesFinestContiguous(e2, t2) {
    return __async(this, null, function* () {
      const i2 = _(e2.layer.tileInfo, e2.options.minDemResolution);
      yield this._selectTilesFinestContiguousAt(e2, i2, t2);
    });
  }
  _selectTilesFinestContiguousAt(e2, s$1, l) {
    return __async(this, null, function* () {
      const n2 = e2.layer;
      if (e2.selectTilesAtLOD(s$1), s$1 < 0)
        return;
      const a2 = n2.tilemapCache, r2 = e2.getTilesToFetch();
      try {
        if (a2)
          yield d$1(Promise.all(r2.map((e3) => a2.fetchAvailability(e3.level, e3.row, e3.col, { signal: l }))), l);
        else if (yield this._populateElevationTiles(e2, l), !e2.allElevationTilesFetched())
          throw e2.clearElevationTiles(), new s("elevation-query:has-unavailable-tiles");
      } catch (c2) {
        w$1(c2), yield this._selectTilesFinestContiguousAt(e2, s$1 - 1, l);
      }
    });
  }
  _populateElevationTiles(t$12, o2) {
    return __async(this, null, function* () {
      const l = t$12.getTilesToFetch(), n2 = {}, a2 = t$12.options.cache, r$1 = t$12.options.noDataValue, c2 = l.map((i2) => __async(this, null, function* () {
        const s2 = `${t$12.layer.uid}:${i2.id}:${r$1}`, l2 = r(a2) ? a2.get(s2) : null, c3 = r(l2) ? l2 : yield t$12.layer.fetchTile(i2.level, i2.row, i2.col, { noDataValue: r$1, signal: o2 });
        r(a2) && a2.put(s2, c3), n2[i2.id] = new t(i2, c3);
      }));
      yield d$1(A(c2), o2), t$12.populateElevationTiles(n2);
    });
  }
  _selectTilesAuto(e2, t2) {
    return __async(this, null, function* () {
      this._selectTilesAutoFinest(e2), this._reduceTilesForMaximumRequests(e2);
      const s2 = e2.layer.tilemapCache;
      if (!s2)
        return this._selectTilesAutoPrefetchUpsample(e2, t2);
      const l = e2.getTilesToFetch(), n2 = {}, a2 = l.map((e3) => __async(this, null, function* () {
        const i$1 = { id: null, level: 0, row: 0, col: 0, extent: i() }, l2 = yield o$1(s2.fetchAvailabilityUpsample(e3.level, e3.row, e3.col, i$1, { signal: t2 }));
        l2.ok === false ? w$1(l2.error) : n2[e3.id] = i$1;
      }));
      yield d$1(Promise.all(a2), t2), e2.remapTiles(n2);
    });
  }
  _reduceTilesForMaximumRequests(e2) {
    const t2 = e2.layer.tileInfo;
    let i2 = 0;
    const o2 = {}, s2 = (e3) => {
      e3.id in o2 ? o2[e3.id]++ : (o2[e3.id] = 1, i2++);
    }, l = (e3) => {
      const t3 = o2[e3.id];
      t3 === 1 ? (delete o2[e3.id], i2--) : o2[e3.id] = t3 - 1;
    };
    e2.forEachTileToFetch(s2, l);
    let n2 = true;
    for (; n2 && (n2 = false, e2.forEachTileToFetch((o3) => {
      i2 <= e2.options.maximumAutoTileRequests || (l(o3), t2.upsampleTile(o3) && (n2 = true), s2(o3));
    }, l), n2); )
      ;
  }
  _selectTilesAutoFinest(e2) {
    const t2 = _(e2.layer.tileInfo, e2.options.minDemResolution);
    e2.selectTilesAtLOD(t2, e2.options.maximumAutoTileRequests);
  }
  _selectTilesAutoPrefetchUpsample(e2, t2) {
    return __async(this, null, function* () {
      const i2 = e2.layer.tileInfo;
      yield this._populateElevationTiles(e2, t2);
      let o2 = false;
      e2.forEachTileToFetch((e3, t3) => {
        i2.upsampleTile(e3) ? o2 = true : t3();
      }), o2 && (yield this._selectTilesAutoPrefetchUpsample(e2, t2));
    });
  }
  _sampleGeometryWithElevation(e2) {
    e2.geometry.coordinates.forEach((t2) => {
      const i2 = t2.elevationTile;
      let o2 = e2.options.noDataValue;
      if (i2) {
        const e3 = i2.sample(t2.x, t2.y);
        e3 !== void 0 ? o2 = e3 : t2.elevationTile = null;
      }
      t2.z = o2;
    });
  }
  _extractSampleInfo(e2) {
    const t2 = e2.layer.tileInfo, i2 = G(t2.spatialReference);
    return e2.geometry.coordinates.map((o2) => {
      let s2 = -1;
      if (o2.elevationTile && o2.elevationTile !== e2.outsideExtentTile) {
        s2 = t2.lodAt(o2.elevationTile.tile.level).resolution * i2;
      }
      return { demResolution: s2 };
    });
  }
}
class v {
  export() {
    return this._exporter(this.coordinates, this.spatialReference);
  }
  clone(e2) {
    const t2 = new v();
    return t2.geometry = this.geometry, t2.spatialReference = this.spatialReference, t2.coordinates = e2 || this.coordinates.map((e3) => this._cloneCoordinate(e3)), t2._exporter = this._exporter, t2;
  }
  project(e2, t2) {
    return __async(this, null, function* () {
      if (this.spatialReference.equals(e2))
        return this.clone();
      yield en([{ source: this.spatialReference, dest: e2 }], { signal: t2 });
      const i2 = new m$1({ spatialReference: this.spatialReference, points: this.coordinates.map((e3) => [e3.x, e3.y]) }), o2 = H(i2, e2);
      if (!o2)
        return null;
      const s2 = this.coordinates.map((e3, t3) => {
        const i3 = this._cloneCoordinate(e3), s3 = o2.points[t3];
        return i3.x = s3[0], i3.y = s3[1], i3;
      }), l = this.clone(s2);
      return l.spatialReference = e2, l;
    });
  }
  _cloneCoordinate(e2) {
    return { x: e2.x, y: e2.y, z: e2.z, m: e2.m, tile: null, elevationTile: null };
  }
  static fromGeometry(e2) {
    const t2 = new v();
    if (t2.geometry = e2, t2.spatialReference = e2.spatialReference, e2 instanceof v)
      t2.coordinates = e2.coordinates.map((e3) => t2._cloneCoordinate(e3)), t2._exporter = (t3, i2) => {
        const o2 = e2.clone(t3);
        return o2.spatialReference = i2, o2;
      };
    else
      switch (e2.type) {
        case "point": {
          const i2 = e2, { hasZ: o2, hasM: s2 } = i2;
          t2.coordinates = o2 && s2 ? [{ x: i2.x, y: i2.y, z: i2.z, m: i2.m }] : o2 ? [{ x: i2.x, y: i2.y, z: i2.z }] : s2 ? [{ x: i2.x, y: i2.y, m: i2.m }] : [{ x: i2.x, y: i2.y }], t2._exporter = (t3, i3) => e2.hasM ? new j(t3[0].x, t3[0].y, t3[0].z, t3[0].m, i3) : new j(t3[0].x, t3[0].y, t3[0].z, i3);
          break;
        }
        case "multipoint": {
          const i2 = e2, { hasZ: o2, hasM: s2 } = i2;
          t2.coordinates = o2 && s2 ? i2.points.map((e3) => ({ x: e3[0], y: e3[1], z: e3[2], m: e3[3] })) : o2 ? i2.points.map((e3) => ({ x: e3[0], y: e3[1], z: e3[2] })) : s2 ? i2.points.map((e3) => ({ x: e3[0], y: e3[1], m: e3[2] })) : i2.points.map((e3) => ({ x: e3[0], y: e3[1] })), t2._exporter = (t3, i3) => e2.hasM ? new m$1({ points: t3.map((e3) => [e3.x, e3.y, e3.z, e3.m]), hasZ: true, hasM: true, spatiaReference: i3 }) : new m$1(t3.map((e3) => [e3.x, e3.y, e3.z]), i3);
          break;
        }
        case "polyline": {
          const i2 = e2, o2 = [], s2 = [], { hasZ: l, hasM: n2 } = e2;
          let r2 = 0;
          for (const e3 of i2.paths)
            if (s2.push([r2, r2 + e3.length]), r2 += e3.length, l && n2)
              for (const t3 of e3)
                o2.push({ x: t3[0], y: t3[1], z: t3[2], m: t3[3] });
            else if (l)
              for (const t3 of e3)
                o2.push({ x: t3[0], y: t3[1], z: t3[2] });
            else if (n2)
              for (const t3 of e3)
                o2.push({ x: t3[0], y: t3[1], m: t3[2] });
            else
              for (const t3 of e3)
                o2.push({ x: t3[0], y: t3[1] });
          t2.coordinates = o2, t2._exporter = (t3, i3) => {
            const o3 = e2.hasM ? t3.map((e3) => [e3.x, e3.y, e3.z, e3.m]) : t3.map((e3) => [e3.x, e3.y, e3.z]), l2 = s2.map((e3) => o3.slice(e3[0], e3[1]));
            return new m$2({ paths: l2, hasM: e2.hasM, hasZ: true, spatialReference: i3 });
          };
          break;
        }
      }
    return t2;
  }
}
class x {
  constructor(e2, t2) {
    this.layer = e2, this.options = t2;
  }
}
class g extends x {
  constructor(e2, t2, i2) {
    super(e2, i2), this.outSpatialReference = t2, this.type = "geometry";
  }
  selectTilesAtLOD(e2) {
    if (e2 < 0)
      this.geometry.coordinates.forEach((e3) => e3.tile = null);
    else {
      const t2 = this.layer.tileInfo, i2 = t2.lods[e2].level;
      this.geometry.coordinates.forEach((e3) => {
        e3.tile = t2.tileAt(i2, e3.x, e3.y);
      });
    }
  }
  allElevationTilesFetched() {
    return !this.geometry.coordinates.some((e2) => !e2.elevationTile);
  }
  clearElevationTiles() {
    for (const e2 of this.geometry.coordinates)
      e2.elevationTile !== this.outsideExtentTile && (e2.elevationTile = null);
  }
  populateElevationTiles(e2) {
    for (const t2 of this.geometry.coordinates)
      !t2.elevationTile && t2.tile && (t2.elevationTile = e2[t2.tile.id]);
  }
  remapTiles(e2) {
    for (const t2 of this.geometry.coordinates)
      t2.tile = e2[t2.tile.id];
  }
  getTilesToFetch() {
    const e2 = {}, t2 = [];
    for (const i2 of this.geometry.coordinates) {
      const o2 = i2.tile;
      i2.elevationTile || !i2.tile || e2[o2.id] || (e2[o2.id] = o2, t2.push(o2));
    }
    return t2;
  }
  forEachTileToFetch(e2) {
    for (const t2 of this.geometry.coordinates)
      t2.tile && !t2.elevationTile && e2(t2.tile, () => t2.tile = null);
  }
}
class w extends x {
  constructor(e2, t2, i2, o2) {
    super(e2, i2), this.type = "extent", this.elevationTiles = [], this.candidateTiles = [], this.fetchedCandidates = new Set(), this.extent = t2.intersection(e2.fullExtent), this.maskExtents = o2;
  }
  selectTilesAtLOD(e2, t2) {
    const i2 = this._maximumLodForRequests(t2), o2 = Math.min(i2, e2);
    o2 < 0 ? this.candidateTiles.length = 0 : this._selectCandidateTilesCoveringExtentAt(o2);
  }
  _maximumLodForRequests(e2) {
    const t2 = this.layer.tileInfo;
    if (!e2)
      return t2.lods.length - 1;
    const i2 = this.extent;
    for (let o2 = t2.lods.length - 1; o2 >= 0; o2--) {
      const s2 = t2.lods[o2], l = s2.resolution * t2.size[0], n2 = s2.resolution * t2.size[1];
      if (Math.ceil(i2.width / l) * Math.ceil(i2.height / n2) <= e2)
        return o2;
    }
    return -1;
  }
  allElevationTilesFetched() {
    return this.candidateTiles.length === this.elevationTiles.length;
  }
  clearElevationTiles() {
    this.elevationTiles.length = 0, this.fetchedCandidates.clear();
  }
  populateElevationTiles(e2) {
    for (const t2 of this.candidateTiles) {
      const i2 = e2[t2.id];
      i2 && (this.fetchedCandidates.add(t2), this.elevationTiles.push(i2));
    }
  }
  remapTiles(e2) {
    this.candidateTiles = this._uniqueNonOverlappingTiles(this.candidateTiles.map((t2) => e2[t2.id]));
  }
  getTilesToFetch() {
    return this.candidateTiles;
  }
  forEachTileToFetch(e2, t2) {
    const i2 = this.candidateTiles;
    this.candidateTiles = [], i2.forEach((i3) => {
      if (this.fetchedCandidates.has(i3))
        return void (t2 && t2(i3));
      let o2 = false;
      e2(i3, () => o2 = true), o2 ? t2 && t2(i3) : this.candidateTiles.push(i3);
    }), this.candidateTiles = this._uniqueNonOverlappingTiles(this.candidateTiles, t2);
  }
  _uniqueNonOverlappingTiles(e2, t2) {
    const i2 = {}, o2 = [];
    for (const l of e2)
      i2[l.id] ? t2 && t2(l) : (i2[l.id] = l, o2.push(l));
    const s2 = o2.sort((e3, t3) => e3.level - t3.level);
    return s2.filter((e3, i3) => {
      for (let o3 = 0; o3 < i3; o3++)
        if (q(s2[o3].extent, e3.extent))
          return t2 && t2(e3), false;
      return true;
    });
  }
  _selectCandidateTilesCoveringExtentAt(e2) {
    this.candidateTiles.length = 0;
    const t2 = this.layer.tileInfo, i2 = t2.lods[e2], o2 = this.extent, s2 = t2.tileAt(i2.level, o2.xmin, o2.ymin), l = i2.resolution * t2.size[0], n2 = i2.resolution * t2.size[1], a2 = Math.ceil((o2.xmax - s2.extent[0]) / l), r2 = Math.ceil((o2.ymax - s2.extent[1]) / n2);
    for (let c2 = 0; c2 < r2; c2++)
      for (let e3 = 0; e3 < a2; e3++) {
        const i3 = { id: null, level: s2.level, row: s2.row - c2, col: s2.col + e3 };
        t2.updateTileInfo(i3), this._tileIsMasked(i3) || this.candidateTiles.push(i3);
      }
  }
  _tileIsMasked(e2) {
    return !!this.maskExtents && this.maskExtents.some((t2) => q(t2, e2.extent));
  }
}
function _(e2, t2) {
  let i2 = e2.lods.length - 1;
  if (t2 > 0) {
    const o2 = e2.lods.findIndex((e3) => e3.resolution < t2);
    o2 === 0 ? i2 = 0 : o2 > 0 && (i2 = o2 - 1);
  }
  return i2;
}
const E = { maximumAutoTileRequests: 20, noDataValue: 0, returnSampleInfo: false, demResolution: "auto", minDemResolution: 0 };
export default T;
export { T as ElevationQuery, v as GeometryDescriptor, _ as getFinestLodIndex };
