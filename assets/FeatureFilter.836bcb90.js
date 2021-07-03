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
import { a4 as n, aa as s$1, b6 as i, ec as R, be as c, a5 as r } from "./vendor.74d5941c.js";
import { a as v, v as v$1, n as n$1 } from "./timeSupport.2cea3b6f.js";
import { u as u$1 } from "./FeatureStore2D.8e44e1d6.js";
import "./projectionSupport.62084d5a.js";
import "./json.7989af9b.js";
import "./CircularArray.2e27cf26.js";
import "./aaBoundingBox.b76947f8.js";
import "./ComputedAttributeStorage.2a55b702.js";
import "./quickselect.e4940b29.js";
import "./_commonjsHelpers.f2a458db.js";
import "./FeatureSetReader.a91e3e2d.js";
import "./centroid.93c1b848.js";
import "./definitions.6737c10c.js";
import "./Utils.3f1577e5.js";
import "./FramebufferObject.18518335.js";
import "./visualVariablesUtils.bb9f81fa.js";
import "./visualVariablesUtils.cb58e4df.js";
const t = n.getLogger("esri.views.2d.layers.features.support.whereUtils"), a = { getAttribute: (e, r2) => e.field(r2) };
function s(e, s2) {
  return __async(this, null, function* () {
    const n2 = yield import("./WhereClause.f27c6004.js");
    try {
      const o = n2.WhereClause.create(e, s2);
      if (!o.isStandardized) {
        const e2 = new s$1("mapview - bad input", "Unable to apply filter's definition expression, as expression is not standardized.", o);
        t.error(e2);
      }
      return (e2) => {
        const r2 = e2.readArcadeFeature();
        return o.testFeature(r2, a);
      };
    } catch (o) {
      return t.warn("mapview-bad-where-clause", "Encountered an error when evaluating where clause", e), (e2) => true;
    }
  });
}
const m = n.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter"), _ = 1, u = 2;
class p {
  constructor(t2) {
    this._geometryBounds = i(), this._idToVisibility = new Map(), this._serviceInfo = t2;
  }
  get hash() {
    return this._hash;
  }
  check(t2) {
    return this._applyFilter(t2);
  }
  clear() {
    const t2 = this._resetAllHiddenIds();
    return this.update(), { show: t2, hide: [] };
  }
  invalidate() {
    this._idToVisibility.forEach((t2, e) => {
      this._idToVisibility.set(e, 0);
    });
  }
  setKnownIds(t2) {
    for (const e of t2)
      this._idToVisibility.set(e, _);
  }
  setTrue(t2) {
    const e = [], i2 = [], s2 = new Set(t2);
    return this._idToVisibility.forEach((t3, r2) => {
      const o = !!(this._idToVisibility.get(r2) & _), h = s2.has(r2);
      !o && h ? e.push(r2) : o && !h && i2.push(r2), this._idToVisibility.set(r2, h ? _ | u : 0);
    }), { show: e, hide: i2 };
  }
  createQuery() {
    const { geometry: t2, spatialRel: e, where: i2, timeExtent: s2, objectIds: r2 } = this;
    return R.fromJSON({ geometry: t2, spatialRel: e, where: i2, timeExtent: s2, objectIds: r2 });
  }
  update(t2, e) {
    return __async(this, null, function* () {
      this._hash = JSON.stringify(t2);
      const i2 = yield v(t2, null, e);
      yield Promise.all([this._setGeometryFilter(i2), this._setIdFilter(i2), this._setAttributeFilter(i2), this._setTimeFilter(i2)]);
    });
  }
  _setAttributeFilter(t2) {
    return __async(this, null, function* () {
      if (!t2 || !t2.where)
        return this._clause = null, void (this.where = null);
      this._clause = yield s(t2.where, this._serviceInfo.fieldsIndex), this.where = t2.where;
    });
  }
  _setIdFilter(t2) {
    this._idsToShow = t2 && t2.objectIds && new Set(t2.objectIds), this._idsToHide = t2 && t2.hiddenIds && new Set(t2.hiddenIds), this.objectIds = t2 && t2.objectIds;
  }
  _setGeometryFilter(t2) {
    return __async(this, null, function* () {
      if (!t2 || !t2.geometry)
        return this._spatialQueryOperator = null, this.geometry = null, void (this.spatialRel = null);
      const e = t2.geometry, i2 = t2.spatialRel || "esriSpatialRelIntersects", r2 = yield v$1(i2, e, this._serviceInfo.geometryType, this._serviceInfo.hasZ, this._serviceInfo.hasM);
      c(this._geometryBounds, e), this._spatialQueryOperator = r2, this.geometry = e, this.spatialRel = i2;
    });
  }
  _setTimeFilter(t2) {
    if (this.timeExtent = this._timeOperator = null, t2 && t2.timeExtent)
      if (this._serviceInfo.timeInfo)
        this.timeExtent = t2.timeExtent, this._timeOperator = n$1(this._serviceInfo.timeInfo, t2.timeExtent, u$1);
      else {
        const e = new s$1("feature-layer-view:time-filter-not-available", "Unable to apply time filter, as layer doesn't have time metadata.", t2.timeExtent);
        m.error(e);
      }
  }
  _applyFilter(t2) {
    return this._filterByGeometry(t2) && this._filterById(t2) && this._filterByTime(t2) && this._filterByExpression(t2);
  }
  _filterByExpression(t2) {
    return !this.where || this._clause(t2);
  }
  _filterById(t2) {
    return (!this._idsToHide || !this._idsToHide.size || !this._idsToHide.has(t2.getObjectId())) && (!this._idsToShow || !this._idsToShow.size || this._idsToShow.has(t2.getObjectId()));
  }
  _filterByGeometry(t2) {
    if (!this.geometry)
      return true;
    const e = t2.readHydratedGeometry();
    return !!e && this._spatialQueryOperator(e);
  }
  _filterByTime(e) {
    return !r(this._timeOperator) || this._timeOperator(e);
  }
  _resetAllHiddenIds() {
    const t2 = [];
    return this._idToVisibility.forEach((e, i2) => {
      e & _ || (this._idToVisibility.set(i2, _), t2.push(i2));
    }), t2;
  }
}
export default p;
