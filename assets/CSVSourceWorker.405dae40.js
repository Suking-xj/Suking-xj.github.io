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
import { aa as s$1, dD as U, aj as U$1, dO as pt, cE as e$1, ai as t$1, cm as d, co as u$1, ck as M, cp as J, bF as k, fm as t$3, br as t$4, fn as I } from "./vendor.74d5941c.js";
import { a } from "./number.c0719e5d.js";
import { t as t$2 } from "./json.7989af9b.js";
import { i as i$1 } from "./clientSideDefaults.2ad4eec3.js";
import { p } from "./projectionSupport.62084d5a.js";
import { u as u$2 } from "./FeatureStore.2d2de89b.js";
import { Z } from "./QueryEngine.202b3395.js";
import "./aaBoundingBox.b76947f8.js";
import "./PooledRBush.257a80e4.js";
import "./quickselect.e4940b29.js";
import "./_commonjsHelpers.f2a458db.js";
import "./centroid.93c1b848.js";
import "./WhereClause.f27c6004.js";
import "./timeSupport.2cea3b6f.js";
const n = /^\s*"([\S\s]*)"\s*$/, t = /""/g, e = "\n", o = [",", " ", ";", "|", "	"];
function r(n2, t2) {
  const e2 = {}, o2 = n2.length;
  for (let r2 = 0; r2 < o2; r2++)
    e2[n2[r2]] = t2[r2];
  return e2;
}
function* i(n2, t2, e2) {
  let o2 = 0;
  for (; o2 <= n2.length; ) {
    const r2 = n2.indexOf(t2, o2), i2 = n2.substring(o2, r2 > -1 ? r2 : void 0);
    o2 += i2.length + 1, e2 && !i2.trim() || (yield i2);
  }
}
function c(n2) {
  const t2 = n2.includes("\r\n") ? "\r\n" : e;
  return i(n2, t2, true);
}
function f(n2, t2) {
  return i(n2, t2, false);
}
function s(n2) {
  const t2 = n2.trim();
  let e2 = 0, r2 = "";
  for (const i2 of o) {
    const n3 = t2.split(i2).length;
    n3 > e2 && (e2 = n3, r2 = i2);
  }
  return r2 === "" ? null : r2;
}
function* u(o2, i2, c2) {
  let s2 = "", u2 = "", d2 = 0, x = [];
  n:
    for (; ; ) {
      const { value: g, done: h } = o2.next();
      if (h)
        return;
      const p2 = f(g, c2);
      t:
        for (; ; ) {
          const { value: e2, done: o3 } = p2.next();
          if (o3)
            break t;
          if (s2 += u2 + e2, u2 = "", d2 += l(e2), d2 % 2 == 0) {
            if (d2 > 0) {
              const e3 = n.exec(s2);
              if (!e3) {
                x = [], s2 = "", d2 = 0;
                continue n;
              }
              x.push(e3[1].replace(t, '"'));
            } else
              x.push(s2);
            s2 = "", d2 = 0;
          } else
            u2 = c2;
        }
      d2 === 0 ? (yield r(i2, x), x = []) : u2 = e;
    }
}
function l(n2) {
  let t2 = 0, e2 = 0;
  for (e2 = n2.indexOf('"', e2); e2 >= 0; )
    t2++, e2 = n2.indexOf('"', e2 + 1);
  return t2;
}
const b = i$1("esriGeometryPoint"), T = ["esriFieldTypeSmallInteger", "esriFieldTypeInteger", "esriFieldTypeSingle", "esriFieldTypeDouble", "esriFieldTypeLong"], j = ["lat", "latitude", "latitude83", "latdecdeg", "lat_dd", "y", "ycenter", "point-y"], w = ["lon", "lng", "long", "longitude", "longitude83", "longdecdeg", "long_dd", "x", "xcenter", "point-x"], E = /^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i, D = ["csv"], q = [0, 0];
class S {
  constructor(e2, t2) {
    this.x = e2, this.y = t2;
  }
}
const v = function() {
  const e2 = a(), t2 = new RegExp("^" + e2.regexp + "$"), i2 = new RegExp("[" + e2.group + "\\s\\xa0]", "g"), n2 = e2.factor;
  return function(r2) {
    const o2 = t2.exec(r2);
    if (e2.factor = n2, !o2)
      return NaN;
    let l2 = o2[1];
    if (!o2[1]) {
      if (!o2[2])
        return NaN;
      l2 = o2[2], e2.factor *= -1;
    }
    return l2 = l2.replace(i2, "").replace(e2.decimal, "."), +l2 * e2.factor;
  };
}(), C = "isInteger" in Number ? Number.isInteger : (e2) => typeof e2 == "number" && isFinite(e2) && Math.floor(e2) === e2;
class O {
  constructor() {
    this._fieldsIndex = null, this._queryEngine = null;
  }
  destroy() {
    this._queryEngine && this._queryEngine && this._queryEngine.destroy(), this._queryEngine = null, this._fieldsIndex = null;
  }
  load(_0) {
    return __async(this, arguments, function* (e2, t2 = {}) {
      const [i2] = yield Promise.all([this._fetch(e2.url, t2), this._checkProjection(t2 && e2.parsing && e2.parsing.spatialReference)]), n2 = this._parse(i2, e2);
      if (this._queryEngine = this._createQueryEngine(i2, n2), n2.layerDefinition.extent = this._queryEngine.fullExtent, n2.layerDefinition.timeInfo) {
        const { start: e3, end: t3 } = this._queryEngine.timeExtent;
        n2.layerDefinition.timeInfo.timeExtent = [e3, t3];
      }
      return n2;
    });
  }
  applyEdits() {
    return __async(this, null, function* () {
      throw new s$1("csv-source:editing-not-supported", "applyEdits() is not supported on CSVLayer");
    });
  }
  queryFeatures(e2 = {}, t2 = {}) {
    return this._queryEngine.executeQuery(e2, t2.signal);
  }
  queryFeatureCount(e2 = {}, t2 = {}) {
    return this._queryEngine.executeQueryForCount(e2, t2.signal);
  }
  queryObjectIds(e2 = {}, t2 = {}) {
    return this._queryEngine.executeQueryForIds(e2, t2.signal);
  }
  queryExtent(e2 = {}, t2 = {}) {
    return this._queryEngine.executeQueryForExtent(e2, t2.signal);
  }
  querySnapping(e2, t2 = {}) {
    return this._queryEngine.executeQueryForSnapping(e2, t2.signal);
  }
  _fetch(e2, n2) {
    return __async(this, null, function* () {
      if (!e2)
        throw new s$1("csv-source:invalid-source", "url not defined");
      const r2 = U(e2);
      return (yield U$1(r2.path, { query: r2.query, responseType: "text", signal: n2.signal })).data;
    });
  }
  _parse(e2, i2) {
    const r2 = i2.parsing || {}, o2 = { columnDelimiter: r2.columnDelimiter, layerDefinition: null, locationInfo: { latitudeFieldName: r2.latitudeField, longitudeFieldName: r2.longitudeField } }, l2 = c(e2);
    let { value: s$2 } = l2.next();
    if (!s$2)
      throw new s$1("csv", "CSV is empty", { csv: e2 });
    if (s$2 = s$2.trim(), !r2.columnDelimiter) {
      const e3 = s(s$2);
      if (!e3)
        throw new s$1("csv-source:invalid-delimiter", "Unable to detect the delimiter from CSV");
      o2.columnDelimiter = e3;
    }
    const a2 = s$2.split(o2.columnDelimiter), d2 = o2.layerDefinition = { name: pt(i2.url, D) || "csv", drawingInfo: b, geometryType: "esriGeometryPoint", objectIdField: null, fields: [], timeInfo: r2.timeInfo, extent: { xmin: Number.POSITIVE_INFINITY, ymin: Number.POSITIVE_INFINITY, xmax: Number.NEGATIVE_INFINITY, ymax: Number.NEGATIVE_INFINITY, spatialReference: r2.spatialReference || { wkid: 102100 } } };
    if (!r2.latitudeField || !r2.longitudeField) {
      const e3 = this._inferLocationInfo(a2);
      if (!r2.longitudeField && !e3.longitudeFieldName || !r2.latitudeField && !e3.latitudeFieldName)
        throw new s$1("csv", "Unable to identify latitudeField and/or longitudeField from CSV");
      o2.locationInfo = { longitudeFieldName: r2.longitudeField || e3.longitudeFieldName, latitudeFieldName: r2.latitudeField || e3.latitudeFieldName };
    }
    const u2 = this._inferFields(l2, o2.columnDelimiter, a2, o2.locationInfo);
    if (r2.fields && r2.fields.length) {
      const e3 = new Map();
      for (const t2 of r2.fields)
        e3.set(t2.name.toLowerCase(), t2);
      for (const t2 of u2) {
        const i3 = e3.get(t2.name.toLowerCase());
        if (i3) {
          const e4 = t2.name;
          Object.assign(t2, i3), t2.name = e4;
        }
      }
    }
    d2.fields = u2;
    if (!d2.fields.some((e3) => e3.type === "esriFieldTypeOID" && (d2.objectIdField = e3.name, true))) {
      const e3 = { name: "__OBJECTID", alias: "__OBJECTID", type: "esriFieldTypeOID", editable: false, nullable: false };
      d2.objectIdField = e3.name, d2.fields.unshift(e3);
    }
    if (this._fieldsIndex = new e$1(d2.fields), d2.timeInfo) {
      const e3 = d2.timeInfo;
      if (e3.startTimeField) {
        const t2 = this._fieldsIndex.get(e3.startTimeField);
        t2 ? (e3.startTimeField = t2.name, t2.type = "esriFieldTypeDate") : e3.startTimeField = null;
      }
      if (e3.endTimeField) {
        const t2 = this._fieldsIndex.get(e3.endTimeField);
        t2 ? (e3.endTimeField = t2.name, t2.type = "esriFieldTypeDate") : e3.endTimeField = null;
      }
      if (e3.trackIdField) {
        const t2 = this._fieldsIndex.get(e3.trackIdField);
        e3.trackIdField = t2 ? t2.name : null;
      }
      e3.startTimeField || e3.endTimeField || (d2.timeInfo = null);
    }
    return o2;
  }
  _inferLocationInfo(e2) {
    let t2 = null, i2 = null;
    const n2 = (t3) => e2.find((e3) => e3.toLowerCase() === t3);
    return w.some((e3) => (t2 = n2(e3), !!t2)), j.some((e3) => (i2 = n2(e3), !!i2)), { longitudeFieldName: t2, latitudeFieldName: i2 };
  }
  _inferFields(e2, t2, i2, n2) {
    const r2 = [], o2 = u(e2, i2, t2), l2 = [];
    e:
      for (; l2.length < 10; ) {
        const { value: e3, done: t3 } = o2.next();
        if (t3)
          break e;
        l2.push(e3);
      }
    for (const s2 of i2)
      if (s2 === n2.longitudeFieldName || s2 === n2.latitudeFieldName)
        r2.push({ name: s2, type: "esriFieldTypeDouble", alias: s2 });
      else {
        const e3 = l2.map((e4) => e4[s2]), t3 = this._inferFieldType(e3), i3 = { name: s2, type: null, alias: s2 };
        switch (t3) {
          case "integer":
            i3.type = "esriFieldTypeInteger";
            break;
          case "double":
            i3.type = "esriFieldTypeDouble";
            break;
          case "date":
            i3.type = "esriFieldTypeDate", i3.length = 36;
            break;
          default:
            i3.type = "esriFieldTypeString", i3.length = 255;
        }
        r2.push(i3);
      }
    return r2;
  }
  _inferFieldType(e2) {
    if (!e2.length)
      return "string";
    const t2 = /[^+-.,0-9]/;
    return e2.map((e3) => {
      let i2 = false;
      if (e3 !== "") {
        if (t2.test(e3))
          i2 = true;
        else {
          let t3 = v(e3);
          if (!isNaN(t3))
            return /[.,]/.test(e3) || !C(t3) || t3 > 214783647 || t3 < -214783648 ? "double" : "integer";
          if (e3.indexOf("E") === -1)
            i2 = true;
          else {
            if (t3 = Number(e3), !isNaN(t3))
              return "double";
            if (e3.indexOf(",") === -1)
              i2 = true;
            else {
              if (e3 = e3.replace(",", "."), t3 = Number(e3), !isNaN(t3))
                return "double";
              i2 = true;
            }
          }
        }
        if (i2) {
          if (!/^[-]?\d*[.,]?\d*$/.test(e3)) {
            const t3 = new Date(e3);
            return this._isValidDate(t3, e3) ? "date" : "string";
          }
          return "string";
        }
        return "string";
      }
    }).reduce((e3, t3) => e3 === void 0 || e3 === t3 ? t3 : e3 === "string" || t3 === "string" ? "string" : e3 === "double" || t3 === "double" ? "double" : void 0);
  }
  _isValidDate(t2, i2) {
    if (!t2 || Object.prototype.toString.call(t2) !== "[object Date]" || isNaN(t2.getTime()))
      return false;
    let n2 = true;
    if (t$1("chrome") && /\d+\W*$/.test(i2)) {
      const e2 = i2.match(/[a-zA-Z]{2,}/);
      if (e2) {
        let t3 = false, i3 = 0;
        for (; !t3 && i3 <= e2.length; )
          t3 = !E.test(e2[i3]), i3++;
        n2 = !t3;
      }
    }
    return n2;
  }
  _createQueryEngine(e2, t2) {
    const { latitudeFieldName: i2, longitudeFieldName: n2 } = t2.locationInfo, { objectIdField: l2, fields: d$1, extent: c$1, timeInfo: p2 } = t2.layerDefinition;
    let g = [];
    const F = [], _ = new Set(), b2 = new Set(), j2 = [];
    for (const { name: r2, type: o2 } of d$1)
      o2 === "esriFieldTypeDate" ? _.add(r2) : T.indexOf(o2) > -1 && b2.add(r2), r2 !== l2 && j2.push(r2);
    let w2 = 0;
    const E2 = c(e2);
    E2.next();
    const D2 = u(E2, j2, t2.columnDelimiter);
    e:
      for (; ; ) {
        const { value: e3, done: t3 } = D2.next();
        if (t3)
          break e;
        const r2 = this._parseCoordinateValue(e3[i2]), o2 = this._parseCoordinateValue(e3[n2]);
        if (o2 != null && r2 != null && !isNaN(r2) && !isNaN(o2)) {
          e3[i2] = r2, e3[n2] = o2;
          for (const t4 in e3)
            if (t4 !== i2 && t4 !== n2) {
              if (_.has(t4)) {
                const i3 = new Date(e3[t4]);
                e3[t4] = this._isValidDate(i3, e3[t4]) ? i3.getTime() : null;
              } else if (b2.has(t4)) {
                const i3 = v(e3[t4]);
                isNaN(i3) ? e3[t4] = null : e3[t4] = i3;
              }
            }
          e3[l2] = w2, w2++, g.push(new S(o2, r2)), F.push(e3);
        }
      }
    if (!d({ wkid: 4326 }, c$1.spatialReference))
      if (u$1(c$1.spatialReference))
        for (const r2 of g)
          [r2.x, r2.y] = M(r2.x, r2.y, q);
      else
        g = J(t$2, g, k.WGS84, c$1.spatialReference, null);
    const C2 = new u$2({ geometryType: "esriGeometryPoint", hasM: false, hasZ: false }), O2 = new Z({ fields: t2.layerDefinition.fields, geometryType: "esriGeometryPoint", hasM: false, hasZ: false, timeInfo: p2, objectIdField: l2, spatialReference: c$1.spatialReference || { wkid: 4326 }, cacheSpatialQueries: true, featureStore: C2 }), V = [];
    for (let r2 = 0; r2 < g.length; r2++) {
      const { x: e3, y: t3 } = g[r2], i3 = F[r2];
      i3[l2] = r2 + 1, V.push(new t$3(new t$4([], [e3, t3]), i3, null, i3[l2]));
    }
    return C2.addMany(V), O2;
  }
  _parseCoordinateValue(e2) {
    if (e2 == null || e2 === "")
      return null;
    let t2 = v(e2);
    return (isNaN(t2) || Math.abs(t2) > 181) && (t2 = parseFloat(e2)), t2;
  }
  _checkProjection(e2) {
    return __async(this, null, function* () {
      try {
        yield p(I, e2);
      } catch (e3) {
        throw new s$1("csv-layer", "Projection not supported");
      }
    });
  }
}
export default O;
export { j as csvLatitudeFieldNames, w as csvLongitudeFieldNames };
