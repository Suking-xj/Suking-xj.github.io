var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
import { fg as x, bF as k$1, fj as U, fh as L, fk as s, d1 as n$2, cE as e$1, e6 as y$1, ff as l$2, ec as R, gw as c$1, gx as n$4, dR as g$1, iN as ne, d3 as x$2, iO as m$1, v as ke, aj as U$1, cW as p$1, dB as s$3, iP as u$2, em as c$2, iQ as l$3, dP as w$3, dc as b$1 } from "./vendor.74d5941c.js";
import { a0 as I, a1 as l, a2 as he, a3 as s$1, a4 as o$1, H as c, a5 as S$1, a6 as E$3, a7 as N$1, n as e$2 } from "./arcadeUtils.f4f7c393.js";
import { v as v$2, t as t$1, o, s as s$2, n as n$1, l as l$1, i, u as u$1, w as w$2, h, a as a$3, E as E$2, f as f$1, p, m as m$2, g as g$2, b as a$4 } from "./SpatialFilter.3aceea46.js";
import { WhereClause as f } from "./WhereClause.f27c6004.js";
import { x as x$1, n as n$3 } from "./MD5.1ef35834.js";
class r {
  constructor() {
    this.declaredRootClass = "esri.arcade.featureSetCollection", this._layerById = {}, this._layerByName = {};
  }
  add(e2, r2, t2) {
    this._layerById[r2] = t2, this._layerByName[e2] = t2;
  }
  featureSetByName(e2, r2 = true, t2 = ["*"]) {
    return this._layerByName[e2] === void 0 ? this.resolvePromise(null) : this.resolvePromise(this._layerByName[e2]);
  }
  featureSetById(e2, r2 = true, t2 = ["*"]) {
    return this._layerById[e2] === void 0 ? this.resolvePromise(null) : this.resolvePromise(this._layerById[e2]);
  }
  castToText() {
    return "object, FeatureSetCollection";
  }
  resolvePromise(r2) {
    return x(r2);
  }
}
class _ extends v$2 {
  constructor(e2) {
    super(e2), this.declaredClass = "esri.arcade.featureset.actions.AttributeFilter", this._maxProcessing = 1e3, this._parent = e2.parentfeatureset, e2.whereclause instanceof f ? (this._whereclause = e2.whereclause, this._whereClauseFunction = null) : (this._whereClauseFunction = e2.whereclause, this._whereclause = null);
  }
  _initialiseFeatureSet() {
    this._parent !== null ? (this.fields = this._parent.fields.slice(0), this.geometryType = this._parent.geometryType, this.objectIdField = this._parent.objectIdField, this.globalIdField = this._parent.globalIdField, this.spatialReference = this._parent.spatialReference, this.hasM = this._parent.hasM, this.hasZ = this._parent.hasZ, this.typeIdField = this._parent.typeIdField, this.types = this._parent.types) : (this.fields = [], this.typeIdField = "", this.objectIdField = "", this.globalIdField = "", this.spatialReference = new k$1({ wkid: 4326 }), this.geometryType = I.point);
  }
  _getSet(t2) {
    return this._wset === null ? this._ensureLoaded().then(() => this._parent._getFilteredSet("", null, this._whereclause, null, t2)).then((e2) => (this._checkCancelled(t2), this._whereClauseFunction !== null ? this._wset = new t$1(e2._candidates.slice(0).concat(e2._known.slice(0)), [], e2._ordered, this._clonePageDefinition(e2.pagesDefinition)) : this._wset = new t$1(e2._candidates.slice(0), e2._known.slice(0), e2._ordered, this._clonePageDefinition(e2.pagesDefinition)), this._wset)) : x(this._wset);
  }
  _isInFeatureSet(e2) {
    let t2 = this._parent._isInFeatureSet(e2);
    return t2 === l.NotInFeatureSet ? t2 : (t2 = this._idstates[e2], t2 === void 0 ? l.Unknown : t2);
  }
  _getFeature(e2, t2, s2) {
    return this._parent._getFeature(e2, t2, s2);
  }
  _getFeatures(e2, t2, s2, i2) {
    return this._parent._getFeatures(e2, t2, s2, i2);
  }
  _featureFromCache(e2) {
    return this._parent._featureFromCache(e2);
  }
  executeWhereClause(e2) {
    return this._whereclause.testFeature(e2);
  }
  executeWhereClauseDeferred(i2) {
    if (this._whereClauseFunction !== null)
      try {
        const s2 = this._whereClauseFunction(i2);
        return U(s2) ? s2 : x(s2);
      } catch (r2) {
        return L(r2);
      }
    return x(this.executeWhereClause(i2));
  }
  _fetchAndRefineFeatures(e2, t2, s$12) {
    const r2 = new t$1([], e2, false, null), n2 = Math.min(t2, e2.length);
    return this._parent._getFeatures(r2, -1, n2, s$12).then(() => {
      if (this._checkCancelled(s$12), this._whereClauseFunction == null) {
        for (let t3 = 0; t3 < n2; t3++) {
          const s2 = this._parent._featureFromCache(e2[t3]);
          this.executeWhereClause(s2) === true ? this._idstates[e2[t3]] = l.InFeatureSet : this._idstates[e2[t3]] = l.NotInFeatureSet;
        }
        return "success";
      }
      const r3 = [];
      for (let t3 = 0; t3 < n2; t3++) {
        const s2 = this._parent._featureFromCache(e2[t3]);
        r3.push(this.executeWhereClauseDeferred(s2));
      }
      return s(r3).then((s2) => {
        for (let i2 = 0; i2 < t2; i2++)
          s2[i2] === true ? this._idstates[e2[i2]] = l.InFeatureSet : this._idstates[e2[i2]] = l.NotInFeatureSet;
        return "success";
      });
    });
  }
  _getFilteredSet(e2, t2, s2, i2, r2) {
    return this._whereClauseFunction !== null || (s2 !== null ? this._whereclause !== null && (s2 = o(this._whereclause, s2)) : s2 = this._whereclause), this._ensureLoaded().then(() => this._parent._getFilteredSet(e2, t2, s2, i2, r2)).then((e3) => {
      let t3;
      return this._checkCancelled(r2), t3 = this._whereClauseFunction !== null ? new t$1(e3._candidates.slice(0).concat(e3._known.slice(0)), [], e3._ordered, this._clonePageDefinition(e3.pagesDefinition)) : new t$1(e3._candidates.slice(0), e3._known.slice(0), e3._ordered, this._clonePageDefinition(e3.pagesDefinition)), t3;
    });
  }
  _stat(t2, s2, i2, r2, n2, a2, l2) {
    if (this._whereClauseFunction !== null)
      return n2 === null && i2 === "" && r2 === null ? this._manualStat(t2, s2, a2, l2) : x({ calculated: false });
    let h2 = this._whereclause;
    return n2 !== null && this._whereclause !== null && (h2 = o(this._whereclause, n2)), this._parent._stat(t2, s2, i2, r2, h2, a2, l2).then((e2) => e2.calculated === false ? n2 === null && i2 === "" && r2 === null ? this._manualStat(t2, s2, a2, l2) : { calculated: false } : e2);
  }
  _canDoAggregates(t2, s2, i2, r2, n2) {
    return this._whereClauseFunction !== null ? x(false) : (n2 !== null ? this._whereclause !== null && (n2 = o(this._whereclause, n2)) : n2 = this._whereclause, this._parent === null ? x(false) : this._parent._canDoAggregates(t2, s2, i2, r2, n2));
  }
  _getAggregatePagesDataSourceDefinition(e2, t2, i2, r2, n2, a2, l2) {
    return this._parent === null ? L(new Error("Should never be called")) : (n2 !== null ? this._whereclause !== null && (n2 = o(this._whereclause, n2)) : n2 = this._whereclause, this._parent._getAggregatePagesDataSourceDefinition(e2, t2, i2, r2, n2, a2, l2));
  }
  static registerAction() {
    v$2._featuresetFunctions.filter = function(e2) {
      if (typeof e2 == "function")
        return new _({ parentfeatureset: this, whereclause: e2 });
      let t2 = null;
      return e2 instanceof f && (t2 = e2), new _({ parentfeatureset: this, whereclause: t2 });
    };
  }
}
function t(t2, e2) {
  return t2 === e2 ? 0 : t2 === null ? -1 : e2 === null ? 1 : t2 < e2 ? -1 : 1;
}
class e {
  constructor(t2) {
    const e2 = t2.split(",");
    this._fields = [], this._directions = [];
    for (let s2 = 0; s2 < e2.length; s2++) {
      const t3 = e2[s2].match(/\S+/g);
      this._fields.push(t3[0]), t3.length === 2 ? t3[1].toLowerCase() === "asc" ? this._directions.push(1) : this._directions.push(0) : this._directions.push(1);
    }
  }
  constructClause() {
    let t2 = "";
    for (let e2 = 0; e2 < this._fields.length; e2++)
      e2 !== 0 && (t2 += ","), t2 += this._fields[e2], this._directions[e2] === 1 ? t2 += " ASC" : t2 += " DESC";
    return t2;
  }
  order(e2) {
    e2.sort((e3, s2) => {
      for (let i2 = 0; i2 < this._fields.length; i2++) {
        const r2 = this.featureValue(e3.feature, this._fields[i2], i2), l2 = this.featureValue(s2.feature, this._fields[i2], i2);
        let o2 = 0;
        if (o2 = this._directions[i2] === 1 ? t(r2, l2) : -1 * t(r2, l2), o2 !== 0)
          return o2;
      }
      return 0;
    });
  }
  scanForField(t2) {
    for (let e2 = 0; e2 < this._fields.length; e2++)
      if (this._fields[e2].toLowerCase().trim() === t2.toLowerCase().trim())
        return true;
    return false;
  }
  replaceFields(t2) {
    let s2 = "";
    for (let e2 = 0; e2 < this._fields.length; e2++) {
      e2 !== 0 && (s2 += ",");
      let i2 = this._fields[e2];
      for (const e3 of t2)
        if (i2.toLowerCase() === e3.field.toLowerCase()) {
          i2 = e3.newfield;
          break;
        }
      s2 += i2, this._directions[e2] === 1 ? s2 += " ASC" : s2 += " DESC";
    }
    return new e(s2);
  }
  featureValue(t2, e2, s2) {
    const i2 = t2.attributes[e2];
    if (i2 !== void 0)
      return i2;
    for (const r2 in t2.attributes)
      if (e2.toLowerCase() === r2.toLowerCase())
        return this._fields[s2] = r2, t2.attributes[r2];
    return null;
  }
}
class a$2 extends v$2 {
  constructor(e2) {
    super(e2), this._orderbyclause = null, this.declaredClass = "esri.arcade.featureset.actions.OrderBy", this._maxProcessing = 100, this._orderbyclause = e2.orderbyclause, this._parent = e2.parentfeatureset;
  }
  _getSet(t2) {
    return this._wset === null ? this._ensureLoaded().then(() => this._getFilteredSet("", null, null, this._orderbyclause, t2)).then((e2) => (this._checkCancelled(t2), this._wset = e2, this._wset)) : x(this._wset);
  }
  manualOrderSet(e2, t2) {
    return this.getIdColumnDictionary(e2, [], -1, t2).then((e3) => {
      this._orderbyclause.order(e3);
      const t3 = new t$1([], [], true, null);
      for (let r2 = 0; r2 < e3.length; r2++)
        t3._known.push(e3[r2].id);
      return t3;
    });
  }
  getIdColumnDictionary(t2, n2, s2, i2) {
    if (s2 < t2._known.length - 1) {
      const e2 = this._maxQueryRate();
      if (t2._known[s2 + 1] === "GETPAGES")
        return he(this._parent._expandPagedSet(t2, e2, 0, 0, i2)).then(() => this.getIdColumnDictionary(t2, n2, s2, i2));
      let a2 = s2 + 1;
      const o2 = [];
      for (; a2 < t2._known.length && t2._known[a2] !== "GETPAGES"; )
        o2.push(t2._known[a2]), a2++;
      return s2 += o2.length, he(this._parent._getFeatureBatch(o2, i2)).then((e3) => {
        this._checkCancelled(i2);
        for (const t3 of e3)
          n2.push({ id: t3.attributes[this.objectIdField], feature: t3 });
        return this.getIdColumnDictionary(t2, n2, s2, i2);
      });
    }
    return t2._candidates.length > 0 ? he(this._refineSetBlock(t2, this._maxProcessingRate(), i2)).then(() => (this._checkCancelled(i2), this.getIdColumnDictionary(t2, n2, s2, i2))) : x(n2);
  }
  _isInFeatureSet(e2) {
    return this._parent._isInFeatureSet(e2);
  }
  _getFeatures(e2, t2, r2, n2) {
    return this._parent._getFeatures(e2, t2, r2, n2);
  }
  _featureFromCache(e2) {
    if (this._featureCache[e2] === void 0) {
      const t2 = this._parent._featureFromCache(e2);
      if (t2 === void 0)
        return;
      return t2 === null ? null : (this._featureCache[e2] = t2, t2);
    }
    return this._featureCache[e2];
  }
  _fetchAndRefineFeatures() {
    return L(new Error("Fetch and Refine should not be called in this featureset"));
  }
  _getFilteredSet(e2, t2, r2, s2, i2) {
    return this._ensureLoaded().then(() => this._parent._getFilteredSet(e2, t2, r2, s2 === null ? this._orderbyclause : s2, i2)).then((e3) => {
      this._checkCancelled(i2);
      const s3 = new t$1(e3._candidates.slice(0), e3._known.slice(0), e3._ordered, this._clonePageDefinition(e3.pagesDefinition));
      let a2 = true;
      return e3._candidates.length > 0 && (a2 = false), s3._ordered === false ? this.manualOrderSet(s3, i2).then((e4) => (a2 === false && (t2 === null && r2 === null || (e4 = new t$1(e4._candidates.slice(0).concat(e4._known.slice(0)), [], e4._ordered, this._clonePageDefinition(e4.pagesDefinition)))), e4)) : s3;
    });
  }
  static registerAction() {
    v$2._featuresetFunctions.orderBy = function(e$12) {
      return e$12 === "" ? this : new a$2({ parentfeatureset: this, orderbyclause: new e(e$12) });
    };
  }
}
class m {
  constructor() {
    this.sqlRewritable = false;
  }
  postInitialization(e2, t2) {
  }
}
class w$1 extends m {
  constructor(e2) {
    super(), this.field = e2, this.sqlRewritable = true;
  }
  extractValue(e2) {
    return e2.attributes[this.field.name];
  }
  rewriteSql(e2) {
    return { rewritten: this.sqlRewritable, where: e2 };
  }
}
class v$1 extends m {
  constructor(e2, t2, r2) {
    super(), this.originalField = e2, this.sqlRewritable = true, this.field = s$1(e2), this.field.name = t2, this.field.alias = r2;
  }
  rewriteSql(e2, t2) {
    return { rewritten: this.sqlRewritable, where: s$2(e2, this.field.name, this.originalField.name, t2.getFieldsIndex()) };
  }
  extractValue(e2) {
    return e2.attributes[this.originalField.name];
  }
}
class C$2 extends m {
  constructor(e2, t2, r2) {
    super(), this.field = e2, this.codefield = t2, this.lkp = r2, this.reverseLkp = {};
    for (const s2 in r2)
      this.reverseLkp[r2[s2]] = s2;
    this.sqlRewritable = true;
  }
  rewriteSql(e2, t2) {
    const r2 = this.evaluateNodeToWhereClause(e2.parseTree, o$1.Standardised, this.field.name, this.codefield instanceof f ? n$1(this.codefield, o$1.Standardised) : this.codefield, e2.parameters);
    return r2.indexOf(C$2.BADNESS) >= 0 ? { rewritten: false, where: e2 } : { rewritten: this.sqlRewritable, where: f.create(r2, t2._parent.getFieldsIndex()) };
  }
  evaluateNodeToWhereClause(e2, t2, r2 = null, s2 = null, i$1) {
    let a2, l2, n2, o2;
    switch (e2.type) {
      case "interval":
        return w$2(this.evaluateNodeToWhereClause(e2.value, t2, r2, s2, i$1), e2.qualifier, e2.op);
      case "case_expression": {
        let s3 = " CASE ";
        e2.format === "simple" && (s3 += this.evaluateNodeToWhereClause(e2.operand, t2, r2, C$2.BADNESS, i$1));
        for (let a3 = 0; a3 < e2.clauses.length; a3++)
          s3 += " WHEN " + this.evaluateNodeToWhereClause(e2.clauses[a3].operand, t2, r2, C$2.BADNESS, i$1) + " THEN " + this.evaluateNodeToWhereClause(e2.clauses[a3].value, t2, r2, C$2.BADNESS, i$1);
        return e2.else !== null && (s3 += " ELSE " + this.evaluateNodeToWhereClause(e2.else, t2, r2, C$2.BADNESS, i$1)), s3 += " END ", s3;
      }
      case "param": {
        const r3 = i$1[e2.value.toLowerCase()];
        if (typeof r3 == "string") {
          return "'" + i$1[e2.value.toLowerCase()].toString().replace(/'/g, "''") + "'";
        }
        if (r3 instanceof Date)
          return u$1(r3, t2);
        if (r3 instanceof Array) {
          const e3 = [];
          for (let s3 = 0; s3 < r3.length; s3++)
            typeof r3[s3] == "string" ? e3.push("'" + r3[s3].toString().replace(/'/g, "''") + "'") : r3[s3] instanceof Date ? e3.push(u$1(r3[s3], t2)) : e3.push(r3[s3].toString());
          return e3;
        }
        return r3.toString();
      }
      case "expr_list":
        l2 = [];
        for (const a3 of e2.value)
          l2.push(this.evaluateNodeToWhereClause(a3, t2, r2, s2, i$1));
        return l2;
      case "unary_expr":
        return " ( NOT " + this.evaluateNodeToWhereClause(e2.expr, t2, r2, C$2.BADNESS, i$1) + " ) ";
      case "binary_expr":
        switch (e2.operator) {
          case "AND":
            return " (" + this.evaluateNodeToWhereClause(e2.left, t2, r2, s2, i$1) + " AND " + this.evaluateNodeToWhereClause(e2.right, t2, r2, s2, i$1) + ") ";
          case "OR":
            return " (" + this.evaluateNodeToWhereClause(e2.left, t2, r2, s2, i$1) + " OR " + this.evaluateNodeToWhereClause(e2.right, t2, r2, s2, i$1) + ") ";
          case "IS":
            if (e2.right.type !== "null")
              throw new Error("Unsupported RHS for IS");
            return " (" + this.evaluateNodeToWhereClause(e2.left, t2, r2, s2, i$1) + " IS NULL )";
          case "ISNOT":
            if (e2.right.type !== "null")
              throw new Error("Unsupported RHS for IS");
            return " (" + this.evaluateNodeToWhereClause(e2.left, t2, r2, s2, i$1) + " IS NOT NULL )";
          case "IN":
            if (a2 = [], e2.right.type === "expr_list") {
              if (e2.left.type === "column_ref" && e2.left.column.toUpperCase() === this.field.name.toUpperCase()) {
                const a3 = [];
                let l3 = true;
                for (const t3 of e2.right.value) {
                  if (t3.type !== "string") {
                    l3 = false;
                    break;
                  }
                  if (this.lkp[t3.value] === void 0) {
                    l3 = false;
                    break;
                  }
                  a3.push(this.lkp[t3.value].toString());
                }
                if (l3)
                  return " (" + this.evaluateNodeToWhereClause(e2.left, t2, r2, s2, i$1) + " IN (" + a3.join(",") + ")) ";
              }
              return a2 = this.evaluateNodeToWhereClause(e2.right, t2, r2, s2, i$1), " (" + this.evaluateNodeToWhereClause(e2.left, t2, r2, s2, i$1) + " IN (" + a2.join(",") + ")) ";
            }
            return o2 = this.evaluateNodeToWhereClause(e2.right, t2, r2, s2, i$1), o2 instanceof Array ? " (" + this.evaluateNodeToWhereClause(e2.left, t2, r2, s2, i$1) + " IN (" + o2.join(",") + ")) " : " (" + this.evaluateNodeToWhereClause(e2.left, t2, r2, s2, i$1) + " IN (" + o2 + ")) ";
          case "NOT IN":
            if (a2 = [], e2.right.type === "expr_list") {
              if (e2.left.type === "column_ref" && e2.left.column.toUpperCase() === this.field.name.toUpperCase()) {
                const a3 = [];
                let l3 = true;
                for (const t3 of e2.right.value) {
                  if (t3.type !== "string") {
                    l3 = false;
                    break;
                  }
                  if (this.lkp[t3.value] === void 0) {
                    l3 = false;
                    break;
                  }
                  a3.push(this.lkp[t3.value].toString());
                }
                if (l3)
                  return " (" + this.evaluateNodeToWhereClause(e2.left, t2, r2, s2, i$1) + " NOT IN (" + a3.join(",") + ")) ";
              }
              return a2 = this.evaluateNodeToWhereClause(e2.right, t2, r2, s2, i$1), " (" + this.evaluateNodeToWhereClause(e2.left, t2, r2, s2, i$1) + " NOT IN (" + a2.join(",") + ")) ";
            }
            return o2 = this.evaluateNodeToWhereClause(e2.right, t2, r2, s2, i$1), o2 instanceof Array ? " (" + this.evaluateNodeToWhereClause(e2.left, t2, r2, s2, i$1) + " NOT IN (" + o2.join(",") + ")) " : " (" + this.evaluateNodeToWhereClause(e2.left, t2, r2, s2, i$1) + " NOT IN (" + o2 + ")) ";
          case "BETWEEN":
            return n2 = this.evaluateNodeToWhereClause(e2.right, t2, r2, C$2.BADNESS, i$1), " (" + this.evaluateNodeToWhereClause(e2.left, t2, r2, C$2.BADNESS, i$1) + " BETWEEN " + n2[0] + " AND " + n2[1] + " ) ";
          case "NOTBETWEEN":
            return n2 = this.evaluateNodeToWhereClause(e2.right, t2, r2, C$2.BADNESS, i$1), " (" + this.evaluateNodeToWhereClause(e2.left, t2, r2, C$2.BADNESS, i$1) + " NOT BETWEEN " + n2[0] + " AND " + n2[1] + " ) ";
          case "LIKE":
            return e2.escape !== "" ? " (" + this.evaluateNodeToWhereClause(e2.left, t2, r2, C$2.BADNESS, i$1) + " LIKE " + this.evaluateNodeToWhereClause(e2.right, t2, r2, C$2.BADNESS, i$1) + " ESCAPE '" + e2.escape + "') " : " (" + this.evaluateNodeToWhereClause(e2.left, t2, r2, C$2.BADNESS, i$1) + " LIKE " + this.evaluateNodeToWhereClause(e2.right, t2, r2, C$2.BADNESS, i$1) + ") ";
          case "NOT LIKE":
            return e2.escape !== "" ? " (" + this.evaluateNodeToWhereClause(e2.left, t2, r2, C$2.BADNESS, i$1) + " NOT LIKE " + this.evaluateNodeToWhereClause(e2.right, t2, r2, C$2.BADNESS, i$1) + " ESCAPE '" + e2.escape + "') " : " (" + this.evaluateNodeToWhereClause(e2.left, t2, r2, C$2.BADNESS, i$1) + " NOT LIKE " + this.evaluateNodeToWhereClause(e2.right, t2, r2, C$2.BADNESS, i$1) + ") ";
          case "<>":
          case "=":
            if (e2.left.type === "column_ref" && e2.right.type === "string") {
              if (e2.left.column.toUpperCase() === this.field.name.toUpperCase() && this.lkp[e2.right.value.toString()] !== void 0)
                return " (" + s2 + " " + e2.operator + " " + this.lkp[e2.right.value.toString()].toString() + ") ";
            } else if (e2.right.type === "column_ref" && e2.left.type === "string" && e2.right.column.toUpperCase() === this.field.name.toUpperCase())
              return " (" + this.lkp[e2.right.value.toString()].toString() + " " + e2.operator + " " + s2 + ") ";
            return " (" + this.evaluateNodeToWhereClause(e2.left, t2, r2, C$2.BADNESS, i$1) + " " + e2.operator + " " + this.evaluateNodeToWhereClause(e2.right, t2, r2, C$2.BADNESS, i$1) + ") ";
          case "<":
          case ">":
          case ">=":
          case "<=":
          case "*":
          case "-":
          case "+":
          case "/":
            return " (" + this.evaluateNodeToWhereClause(e2.left, t2, r2, C$2.BADNESS, i$1) + " " + e2.operator + " " + this.evaluateNodeToWhereClause(e2.right, t2, r2, C$2.BADNESS, i$1) + ") ";
        }
        throw new Error("Not Supported Operator " + e2.operator);
      case "null":
        return "null";
      case "bool":
        return e2.value === true ? "1" : "0";
      case "string":
        return "'" + e2.value.toString().replace(/'/g, "''") + "'";
      case "timestamp":
      case "date":
        return u$1(e2.value, t2);
      case "number":
        return e2.value.toString();
      case "current_time":
        return i(e2.mode === "date", t2);
      case "column_ref":
        return r2 && r2.toLowerCase() === e2.column.toLowerCase() ? "(" + s2 + ")" : e2.column;
      case "function": {
        const s3 = this.evaluateNodeToWhereClause(e2.args, t2, r2, C$2.BADNESS, i$1);
        return l$1(e2.name, s3, t2);
      }
    }
    throw new Error("Unsupported sql syntax " + e2.type);
  }
  extractValue(e2) {
    return this.codefield instanceof f ? this.reverseLkp[this.codefield.calculateValueCompiled(e2)] : this.reverseLkp[e2.attributes[this.codefield]];
  }
}
C$2.BADNESS = "_!!!_BAD_LKP_!!!!";
class T$1 extends m {
  constructor(e2, t2) {
    super(), this.field = e2, this.sql = t2;
  }
  rewriteSql(e2, t2) {
    return { rewritten: true, where: s$2(e2, this.field.name, n$1(this.sql, o$1.Standardised), t2.getFieldsIndex()) };
  }
  extractValue(e2) {
    return this.sql.calculateValueCompiled(e2);
  }
}
class E$1 extends v$2 {
  constructor(e2) {
    super(e2), this._calcFunc = null, this.declaredClass = "esri.arcade.featureset.actions.Adapted", this.adaptedFields = null, this._extraFilter = null, this._extraFilter = e2.extraFilter, this._parent = e2.parentfeatureset, this._maxProcessing = 30, this.adaptedFields = e2.adaptedFields;
  }
  static findField(e2, t2) {
    for (const r2 of e2)
      if (r2.name.toLowerCase() === t2.toString().toLowerCase())
        return r2;
    return null;
  }
  _initialiseFeatureSet() {
    this._parent !== null ? (this.geometryType = this._parent.geometryType, this.objectIdField = this._parent.objectIdField, this.globalIdField = this._parent.globalIdField, this.spatialReference = this._parent.spatialReference, this.hasM = this._parent.hasM, this.hasZ = this._parent.hasZ, this.typeIdField = this._parent.typeIdField, this.types = this._parent.types) : (this.spatialReference = new k$1({ wkid: 4326 }), this.objectIdField = "", this.globalIdField = "", this.geometryType = I.point, this.typeIdField = "", this.types = null), this.fields = [];
    for (const e2 of this.adaptedFields)
      e2.postInitialization(this, this._parent), this.fields.push(e2.field);
  }
  _getSet(t2) {
    return this._wset === null ? this._ensureLoaded().then(() => this._extraFilter ? this._getFilteredSet("", null, null, null, t2) : this._parent._getSet(t2)).then((e2) => (this._checkCancelled(t2), this._wset = new t$1(e2._candidates.slice(0), e2._known.slice(0), e2._ordered, this._clonePageDefinition(e2.pagesDefinition)), this._wset)) : x(this._wset);
  }
  _isInFeatureSet(e2) {
    return this._parent._isInFeatureSet(e2);
  }
  _getFeatures(t2, r2, i2, a2) {
    const l2 = [];
    r2 !== -1 && this._featureCache[r2] === void 0 && l2.push(r2);
    const h2 = this._maxQueryRate();
    if (this._checkIfNeedToExpandKnownPage(t2, h2) === true)
      return this._expandPagedSet(t2, h2, 0, 0, a2).then(() => this._getFeatures(t2, r2, i2, a2));
    let u2 = 0;
    for (let e2 = t2._lastFetchedIndex; e2 < t2._known.length && (u2++, u2 <= i2 && (t2._lastFetchedIndex += 1), !(this._featureCache[t2._known[e2]] === void 0 && (t2._known[e2] !== r2 && l2.push(t2._known[e2]), l2.length >= h2 - 1))); e2++)
      ;
    if (l2.length === 0)
      return x("success");
    t2 = new t$1([], l2, t2._ordered, null);
    const d = Math.min(l2.length, i2);
    return this._parent._getFeatures(t2, -1, d, a2).then(() => {
      this._checkCancelled(a2);
      const e2 = [];
      for (let t3 = 0; t3 < d; t3++) {
        const r3 = this._parent._featureFromCache(l2[t3]);
        r3 !== void 0 && e2.push({ geometry: r3.geometry, attributes: r3.attributes, id: l2[t3] });
      }
      for (const t3 of e2) {
        const e3 = [];
        for (const r3 of this.adaptedFields)
          e3[r3.field.name] = r3.extractValue(t3);
        this._featureCache[t3.id] = new n$2({ attributes: e3, geometry: c(t3.geometry) });
      }
      return "success";
    });
  }
  _fetchAndRefineFeatures() {
    return L(new Error("Fetch and Refine should not be called in this featureset"));
  }
  _getFilteredSet(e2, t2, r2, s2, i2) {
    let a2 = false;
    const l2 = this.reformulateWithoutAdaptions(r2);
    a2 = l2.cannot, r2 = l2.where;
    let n2 = false;
    if (s2 !== null) {
      n2 = true;
      const e3 = [];
      for (const t3 of this.adaptedFields)
        if (!(t3 instanceof w$1) && s2.scanForField(t3.field.name) === true) {
          if (!(t3 instanceof v$1)) {
            s2 = null, n2 = false;
            break;
          }
          e3.push({ field: t3.field.name, newfield: t3.originalField.name });
        }
      s2 && e3.length > 0 && (s2 = s2.replaceFields(e3));
    }
    return r2 !== null ? this._extraFilter !== null && (r2 = o(this._extraFilter, r2)) : r2 = this._extraFilter, this._ensureLoaded().then(() => this._parent._getFilteredSet(e2, t2, r2, s2, i2)).then((e3) => {
      let t3;
      return this._checkCancelled(i2), t3 = a2 === true ? new t$1(e3._candidates.slice(0).concat(e3._known.slice(0)), [], n2 === true && e3._ordered, this._clonePageDefinition(e3.pagesDefinition)) : new t$1(e3._candidates.slice(0), e3._known.slice(0), n2 === true && e3._ordered, this._clonePageDefinition(e3.pagesDefinition)), t3;
    });
  }
  reformulateWithoutAdaptions(e2) {
    const t2 = { cannot: false, where: e2 };
    if (e2 !== null) {
      for (const r2 of this.adaptedFields)
        if (h(e2, r2.field.name) === true) {
          const s2 = r2.rewriteSql(e2, this);
          if (s2.rewritten !== true) {
            t2.cannot = true, t2.where = null;
            break;
          }
          t2.where = s2.where;
        }
    }
    return t2;
  }
  _stat(t2, r2, s2, i2, a2, l2, n2) {
    let o$12 = false, h2 = this.reformulateWithoutAdaptions(r2);
    return o$12 = h2.cannot, r2 = h2.where, h2 = this.reformulateWithoutAdaptions(a2), o$12 = o$12 || h2.cannot, (a2 = h2.where) !== null ? this._extraFilter !== null && (a2 = o(this._extraFilter, a2)) : a2 = this._extraFilter, o$12 === true ? a2 === null && s2 === "" && i2 === null ? this._manualStat(t2, r2, l2, n2) : x({ calculated: false }) : this._parent._stat(t2, r2, s2, i2, a2, l2, n2).then((e2) => e2.calculated === false ? a2 === null && s2 === "" && i2 === null ? this._manualStat(t2, r2, l2, n2) : { calculated: false } : e2);
  }
  _canDoAggregates(t2, r2, s2, i2, a2) {
    if (this._parent === null)
      return x(false);
    for (let o2 = 0; o2 < t2.length; o2++)
      for (const r3 of this.adaptedFields)
        if (t2[o2].toLowerCase() === r3.field.name.toLowerCase() && !(r3 instanceof w$1))
          return x(false);
    const l2 = [];
    for (let o2 = 0; o2 < r2.length; o2++) {
      const t3 = r2[o2];
      if (t3.workingexpr !== null) {
        const r3 = this.reformulateWithoutAdaptions(t3.workingexpr);
        if (r3.cannot)
          return x(false);
        const s3 = t3.clone();
        s3.workingexpr = r3.where, l2.push(s3);
      } else
        l2.push(t3);
    }
    const n2 = this.reformulateWithoutAdaptions(a2);
    return n2.cannot ? x(false) : ((a2 = n2.where) !== null ? this._extraFilter !== null && (a2 = o(this._extraFilter, a2)) : a2 = this._extraFilter, this._parent._canDoAggregates(t2, l2, s2, i2, a2));
  }
  _getAggregatePagesDataSourceDefinition(e2, r2, s2, i2, a2, l2, n2) {
    if (this._parent === null)
      return L(new Error("Should never be called"));
    const o$12 = [];
    for (let u2 = 0; u2 < r2.length; u2++) {
      const e3 = r2[u2];
      if (e3.workingexpr !== null) {
        const r3 = this.reformulateWithoutAdaptions(e3.workingexpr);
        if (r3.cannot)
          return L(new Error("Should never be called"));
        const s3 = e3.clone();
        s3.workingexpr = r3.where, o$12.push(s3);
      } else
        o$12.push(e3);
    }
    const h2 = this.reformulateWithoutAdaptions(a2);
    return h2.cannot ? L(new Error("Should never be called")) : ((a2 = h2.where) !== null ? this._extraFilter !== null && (a2 = o(this._extraFilter, a2)) : a2 = this._extraFilter, this._parent._getAggregatePagesDataSourceDefinition(e2, o$12, s2, i2, a2, l2, n2));
  }
}
function n(n2) {
  if (n2.parseTree.type === "function") {
    if (n2.parseTree.args.value.length === 0)
      return { name: n2.parseTree.name, expr: null };
    if (n2.parseTree.args.value.length > 1)
      throw new Error("Statistic does not have 1 or 0 Parameters");
    const a2 = f.create(a$3(n2.parseTree.args.value[0], o$1.Standardised, n2.parameters), n2.fieldsIndex);
    return { name: n2.parseTree.name, expr: a2 };
  }
  return null;
}
class a$1 {
  clone() {
    const e2 = new a$1();
    return e2.field = this.field, e2.tofieldname = this.tofieldname, e2.typeofstat = this.typeofstat, e2.workingexpr = this.workingexpr, e2;
  }
  static parseStatField(e2, t2, i2) {
    const s2 = new a$1();
    s2.field = e2;
    const o2 = f.create(t2, i2), l2 = n(o2);
    if (l2 === null)
      throw new Error("Invalid Statistic Function");
    const p2 = l2.name.toUpperCase().trim();
    if (p2 === "MIN") {
      if (s2.typeofstat = "MIN", s2.workingexpr = l2.expr, o2 === null)
        throw new Error("Invalid Statistic Function Parameters");
    } else if (p2 === "MAX") {
      if (s2.typeofstat = "MAX", s2.workingexpr = l2.expr, o2 === null)
        throw new Error("Invalid Statistic Function Parameters");
    } else if (p2 === "COUNT")
      s2.typeofstat = "COUNT", s2.workingexpr = l2.expr;
    else if (p2 === "STDEV") {
      if (s2.typeofstat = "STDDEV", s2.workingexpr = l2.expr, o2 === null)
        throw new Error("Invalid Statistic Function Parameters");
    } else if (p2 === "SUM") {
      if (s2.typeofstat = "SUM", s2.workingexpr = l2.expr, o2 === null)
        throw new Error("Invalid Statistic Function Parameters");
    } else if (p2 === "MEAN") {
      if (s2.typeofstat = "AVG", s2.workingexpr = l2.expr, o2 === null)
        throw new Error("Invalid Statistic Function Parameters");
    } else if (p2 === "AVG") {
      if (s2.typeofstat = "AVG", s2.workingexpr = l2.expr, o2 === null)
        throw new Error("Invalid Statistic Function Parameters");
    } else {
      if (p2 !== "VAR")
        throw new Error("Invalid Statistic Function");
      if (s2.typeofstat = "VAR", s2.workingexpr = l2.expr, o2 === null)
        throw new Error("Invalid Statistic Function Parameters");
    }
    return s2;
  }
  toStatisticsName() {
    switch (this.typeofstat.toUpperCase()) {
      case "MIN":
        return "min";
      case "MAX":
        return "max";
      case "SUM":
        return "sum";
      case "COUNT":
        return "count";
      case "VAR":
        return "var";
      case "STDDEV":
        return "stddev";
      case "AVG":
        return "avg";
      default:
        return "count";
    }
  }
}
function C$1(e2) {
  if (!e2)
    return "COUNT";
  switch (e2.toLowerCase()) {
    case "max":
      return "MAX";
    case "var":
    case "variance":
      return "VAR";
    case "avg":
    case "average":
    case "mean":
      return "AVG";
    case "min":
      return "MIN";
    case "sum":
      return "SUM";
    case "stdev":
    case "stddev":
      return "STDDEV";
    case "count":
      return "COUNT";
  }
  return "COUNT";
}
class G extends v$2 {
  constructor(e2) {
    super(e2), this._decodedStatsfield = [], this._decodedGroupbyfield = [], this._candosimplegroupby = true, this.phsyicalgroupbyfields = [], this.objectIdField = "ROW__ID", this._internalObjectIdField = "ROW__ID", this._adaptedFields = [], this.declaredClass = "esri.arcade.featureset.actions.Aggregate", this._uniqueIds = 1, this._maxQuery = 10, this._maxProcessing = 10, this._parent = e2.parentfeatureset, this._config = e2;
  }
  isTable() {
    return true;
  }
  _getSet(t2) {
    return this._wset === null ? this._getFilteredSet("", null, null, null, t2).then((e2) => (this._wset = e2, this._wset)) : x(this._wset);
  }
  _isInFeatureSet() {
    return l.InFeatureSet;
  }
  nextUniqueName(e2) {
    for (; e2["T" + this._uniqueIds.toString()] === 1; )
      this._uniqueIds++;
    const t2 = "T" + this._uniqueIds.toString();
    return e2[t2] = 1, t2;
  }
  convertToEsriFieldType(e2) {
    return e2;
  }
  _initialiseFeatureSet() {
    const e2 = {};
    let t2 = false, i2 = 1;
    const n2 = this._parent ? this._parent.getFieldsIndex() : new e$1([]);
    for (this.objectIdField = "ROW__ID", this.globalIdField = ""; t2 === false; ) {
      let e3 = false;
      for (let t3 = 0; t3 < this._config.groupbyfields.length; t3++)
        if (this._config.groupbyfields[t3].name.toLowerCase() === this.objectIdField.toLowerCase()) {
          e3 = true;
          break;
        }
      if (e3 === false) {
        for (let t3 = 0; t3 < this._config.statsfields.length; t3++)
          if (this._config.statsfields[t3].name.toLowerCase() === this.objectIdField.toLowerCase()) {
            e3 = true;
            break;
          }
      }
      e3 === false ? t2 = true : (this.objectIdField = "ROW__ID" + i2.toString(), i2++);
    }
    for (const s2 of this._config.statsfields) {
      const e3 = new a$1();
      e3.field = s2.name, e3.tofieldname = s2.name, e3.workingexpr = s2.expression instanceof f ? s2.expression : f.create(s2.expression, n2), e3.typeofstat = C$1(s2.statistic), this._decodedStatsfield.push(e3);
    }
    this._decodedGroupbyfield = [];
    for (const s2 of this._config.groupbyfields) {
      const e3 = { name: s2.name, singlefield: null, tofieldname: s2.name, expression: s2.expression instanceof f ? s2.expression : f.create(s2.expression, n2) };
      this._decodedGroupbyfield.push(e3);
    }
    if (this._parent !== null) {
      this.geometryType = this._parent.geometryType, this.spatialReference = this._parent.spatialReference, this.hasM = this._parent.hasM, this.hasZ = this._parent.hasZ, this.typeIdField = "";
      for (const t3 of this._parent.fields)
        e2[t3.name.toUpperCase()] = 1;
      this.types = null;
    } else
      this.geometryType = I.point, this.typeIdField = "", this.types = null, this.spatialReference = new k$1({ wkid: 4326 });
    this.fields = [];
    const r2 = new a$1();
    r2.field = this.nextUniqueName(e2), r2.tofieldname = this.objectIdField, r2.workingexpr = f.create(this._parent.objectIdField, this._parent.getFieldsIndex()), r2.typeofstat = "MIN", this._decodedStatsfield.push(r2);
    for (const s2 of this._decodedGroupbyfield) {
      const t3 = new y$1();
      if (s2.name = this.nextUniqueName(e2), t3.name = s2.tofieldname, t3.alias = t3.name, E$2(s2.expression)) {
        const e3 = this._parent.getField(n$1(s2.expression, o$1.Standardised));
        if (!e3)
          throw new Error("Field is not present for Aggregation");
        s2.name = e3.name, s2.singlefield = e3.name, this.phsyicalgroupbyfields.push(e3.name), t3.type = e3.type;
      } else {
        t3.type = this.convertToEsriFieldType(f$1(s2.expression, this._parent.fields));
        const e3 = new y$1();
        e3.name = s2.name, e3.alias = e3.name, this.phsyicalgroupbyfields.push(s2.name), this._adaptedFields.push(new T$1(e3, s2.expression)), this._candosimplegroupby = false;
      }
      this.fields.push(t3);
    }
    if (this._adaptedFields.length > 0)
      for (const s2 of this._parent.fields)
        this._adaptedFields.push(new w$1(s2));
    for (let s2 = 0; s2 < this._decodedStatsfield.length; s2++) {
      const t3 = new y$1();
      let i3 = null;
      const n3 = this._decodedStatsfield[s2];
      n3.field = this.nextUniqueName(e2), n3.tofieldname === this.objectIdField && (this._internalObjectIdField = n3.field), t3.name = n3.tofieldname, t3.alias = t3.name;
      const r3 = n3.workingexpr !== null && E$2(n3.workingexpr) ? n$1(n3.workingexpr, o$1.Standardised) : "";
      switch (this._decodedStatsfield[s2].typeofstat) {
        case "SUM":
          if (r3 !== "") {
            if (i3 = this._parent.getField(r3), !i3)
              throw new Error("Field is not present for Aggregation");
            t3.type = i3.type;
          } else
            t3.type = "double";
          break;
        case "MIN":
        case "MAX":
          if (r3 !== "") {
            if (i3 = this._parent.getField(r3), !i3)
              throw new Error("Field is not present for Aggregation");
            t3.type = i3.type;
          } else
            t3.type = "double";
          break;
        case "COUNT":
          t3.type = "integer";
          break;
        case "STDDEV":
        case "VAR":
        case "AVG":
          if (r3 !== "" && (i3 = this._parent.getField(r3), !i3))
            throw new Error("Field is not present for Aggregation");
          t3.type = "double";
      }
      this.fields.push(t3);
    }
  }
  _canDoAggregates() {
    return x(false);
  }
  _getFeatures(t2, i2, s2, n2) {
    i2 !== -1 && this._featureCache[i2];
    const r2 = this._maxQuery;
    return this._checkIfNeedToExpandKnownPage(t2, r2) === true ? this._expandPagedSet(t2, r2, 0, 0, n2).then(() => this._getFeatures(t2, i2, s2, n2)) : x("success");
  }
  _getFilteredSet(t2, i2, s2, n2, r2) {
    if (t2 !== "")
      return x(new t$1([], [], true, null));
    let a2 = null;
    const l2 = { ordered: false, nowhereclause: false };
    return this._ensureLoaded().then(() => {
      if (s2 !== null) {
        for (let e2 = 0; e2 < this._decodedStatsfield.length; e2++)
          if (h(s2, this._decodedStatsfield[e2].tofieldname) === true) {
            l2.nowhereclause = true, s2 = null;
            break;
          }
      }
      if (n2 !== null) {
        l2.ordered = true;
        for (let e2 = 0; e2 < this._decodedStatsfield.length; e2++)
          if (n2.scanForField(this._decodedStatsfield[e2].tofieldname) === true) {
            n2 = null, l2.ordered = false;
            break;
          }
        if (n2 !== null) {
          for (const e2 of this._decodedGroupbyfield)
            if (e2.singlefield === null && n2.scanForField(e2.tofieldname) === true) {
              n2 = null, l2.ordered = false;
              break;
            }
        }
      }
      return this._candosimplegroupby === false ? x(false) : this._parent._canDoAggregates(this.phsyicalgroupbyfields, this._decodedStatsfield, "", null, null);
    }).then((e$12) => {
      if (e$12) {
        let e2 = null;
        s2 && (e2 = this._reformulateWhereClauseWithoutGroupByFields(s2));
        let t4 = null;
        return n2 && (t4 = this._reformulateOrderClauseWithoutGroupByFields(n2)), this._parent._getAggregatePagesDataSourceDefinition(this.phsyicalgroupbyfields, this._decodedStatsfield, "", null, e2, t4, this._internalObjectIdField).then((e3) => (this._checkCancelled(r2), a2 = l2.nowhereclause === true ? new t$1(e3._candidates.slice(0).concat(e3._known.slice(0)), [], l2.ordered === true && e3._ordered, this._clonePageDefinition(e3.pagesDefinition)) : new t$1(e3._candidates.slice(0), e3._known.slice(0), l2.ordered === true && e3._ordered, this._clonePageDefinition(e3.pagesDefinition)), a2));
      }
      let t3 = this._parent;
      if (this._adaptedFields.length > 0 && (t3 = new E$1({ parentfeatureset: this._parent, adaptedFields: this._adaptedFields, extraFilter: null })), l2.nowhereclause === true)
        a2 = new t$1(["GETPAGES"], [], false, { aggregatefeaturesetpagedefinition: true, resultOffset: 0, resultRecordCount: this._maxQuery, internal: { fullyResolved: false, workingItem: null, type: "manual", iterator: null, set: [], subfeatureset: new a$2({ parentfeatureset: t3, orderbyclause: new e(this.phsyicalgroupbyfields.join(",") + "," + this._parent.objectIdField + " ASC") }) } });
      else {
        let e$13 = t3;
        if (s2 !== null) {
          let t4 = null;
          s2 && (t4 = this._reformulateWhereClauseWithoutGroupByFields(s2)), e$13 = new _({ parentfeatureset: e$13, whereclause: t4 });
        }
        a2 = new t$1(["GETPAGES"], [], false, { aggregatefeaturesetpagedefinition: true, resultOffset: 0, resultRecordCount: this._maxQuery, internal: { fullyResolved: false, workingItem: null, type: "manual", iterator: null, set: [], subfeatureset: new a$2({ parentfeatureset: e$13, orderbyclause: new e(this.phsyicalgroupbyfields.join(",") + "," + this._parent.objectIdField + " ASC") }) } });
      }
      return a2;
    });
  }
  _reformulateWhereClauseWithoutStatsFields(e2) {
    for (const t2 of this._decodedStatsfield)
      e2 = s$2(e2, t2.tofieldname, n$1(t2.workingexpr, o$1.Standardised), this._parent.getFieldsIndex());
    return e2;
  }
  _reformulateWhereClauseWithoutGroupByFields(e2) {
    for (const t2 of this._decodedGroupbyfield)
      t2.tofieldname !== t2.name && (e2 = s$2(e2, t2.tofieldname, n$1(t2.expression, o$1.Standardised), this._parent.getFieldsIndex()));
    return e2;
  }
  _reformulateOrderClauseWithoutGroupByFields(e2) {
    const t2 = [];
    for (const i2 of this._decodedGroupbyfield)
      i2.tofieldname !== i2.name && t2.push({ field: i2.tofieldname, newfield: i2.name });
    return t2.length > 0 ? e2.replaceFields(t2) : e2;
  }
  _clonePageDefinition(e2) {
    return e2 === null ? null : e2.aggregatefeaturesetpagedefinition === true ? { aggregatefeaturesetpagedefinition: true, resultRecordCount: e2.resultRecordCount, resultOffset: e2.resultOffset, internal: e2.internal } : this._parent._clonePageDefinition(e2);
  }
  _refineSetBlock(i2, s2, n2) {
    try {
      if (this._checkIfNeedToExpandCandidatePage(i2, this._maxQuery) === true)
        return this._expandPagedSet(i2, this._maxQuery, 0, 0, n2).then(() => this._refineSetBlock(i2, s2, n2));
      this._checkCancelled(n2);
      const t2 = i2._candidates.length;
      this._refineKnowns(i2, s2);
      i2._candidates.length;
      return i2._candidates.length, x(i2);
    } catch (r2) {
      return L(r2);
    }
  }
  _expandPagedSet(e2, t2, i2, s2, n2) {
    return this._expandPagedSetFeatureSet(e2, t2, i2, s2, n2);
  }
  _getPhysicalPage(e2, t2, s2) {
    return e2.pagesDefinition.aggregatefeaturesetpagedefinition === true ? l$2((t3, i2) => {
      this._sequentialGetPhysicalItem(e2, e2.pagesDefinition.resultRecordCount, s2, []).then((e3) => {
        t3(e3);
      }, i2);
    }) : this._getAgregagtePhysicalPage(e2, t2, s2).then((e3) => {
      for (const t3 of e3) {
        const e4 = { geometry: t3.geometry, attributes: {} };
        for (const i2 of this._decodedGroupbyfield)
          e4.attributes[i2.tofieldname] = t3.attributes[i2.name];
        for (const i2 of this._decodedStatsfield)
          e4.attributes[i2.tofieldname] = t3.attributes[i2.field];
        this._featureCache[e4.attributes[this.objectIdField]] = new n$2(e4);
      }
      return e3.length;
    });
  }
  _sequentialGetPhysicalItem(e2, t2, s2, n2) {
    return l$2((i2, r2) => {
      e2.pagesDefinition.internal.iterator === null && (e2.pagesDefinition.internal.iterator = e2.pagesDefinition.internal.subfeatureset.iterator(s2)), e2.pagesDefinition.internal.fullyResolved === true || t2 === 0 ? i2(n2.length) : this._nextAggregateItem(e2, t2, s2, n2, (r3) => {
        r3 === null ? i2(n2.length) : (t2 -= 1, i2(this._sequentialGetPhysicalItem(e2, t2, s2, n2)));
      }, r2);
    });
  }
  _nextAggregateItem(e2, t2, i2, s2, n2, a2) {
    try {
      he(e2.pagesDefinition.internal.iterator.next()).then((r2) => {
        if (r2 === null)
          if (e2.pagesDefinition.internal.workingItem !== null) {
            const t3 = this._calculateAndAppendAggregateItem(e2.pagesDefinition.internal.workingItem);
            s2.push(t3), e2.pagesDefinition.internal.workingItem = null, e2.pagesDefinition.internal.set.push(t3.attributes[this.objectIdField]), e2.pagesDefinition.internal.fullyResolved = true, n2(null);
          } else
            e2.pagesDefinition.internal.fullyResolved = true, n2(null);
        else {
          const l2 = this._generateAggregateHash(r2);
          if (e2.pagesDefinition.internal.workingItem === null)
            e2.pagesDefinition.internal.workingItem = { features: [r2], id: l2 };
          else {
            if (l2 !== e2.pagesDefinition.internal.workingItem.id) {
              const i3 = this._calculateAndAppendAggregateItem(e2.pagesDefinition.internal.workingItem);
              return s2.push(i3), e2.pagesDefinition.internal.workingItem = null, e2.pagesDefinition.internal.set.push(i3.attributes[this.objectIdField]), t2 -= 1, e2.pagesDefinition.internal.workingItem = { features: [r2], id: l2 }, void n2(i3);
            }
            e2.pagesDefinition.internal.workingItem.features.push(r2);
          }
          this._nextAggregateItem(e2, t2, i2, s2, n2, a2);
        }
      }, a2);
    } catch (l2) {
      a2(l2);
    }
  }
  _calculateFieldStat(e2, t2, i2) {
    const s2 = [];
    for (let n2 = 0; n2 < e2.features.length; n2++)
      if (t2.workingexpr !== null) {
        const i3 = t2.workingexpr.calculateValue(e2.features[n2]);
        i3 !== null && s2.push(i3);
      } else
        s2.push(null);
    switch (t2.typeofstat) {
      case "MIN":
        i2.attributes[t2.tofieldname] = p("min", s2, -1);
        break;
      case "MAX":
        i2.attributes[t2.tofieldname] = p("max", s2, -1);
        break;
      case "SUM":
        i2.attributes[t2.tofieldname] = p("sum", s2, -1);
        break;
      case "COUNT":
        i2.attributes[t2.tofieldname] = s2.length;
        break;
      case "VAR":
        i2.attributes[t2.tofieldname] = p("var", s2, -1);
        break;
      case "STDDEV":
        i2.attributes[t2.tofieldname] = p("stddev", s2, -1);
        break;
      case "AVG":
        i2.attributes[t2.tofieldname] = p("avg", s2, -1);
    }
    return true;
  }
  _calculateAndAppendAggregateItem(e2) {
    const t2 = { attributes: {}, geometry: null };
    for (const s2 of this._decodedGroupbyfield) {
      const i3 = s2.singlefield ? e2.features[0].attributes[s2.singlefield] : s2.expression.calculateValue(e2.features[0]);
      t2.attributes[s2.tofieldname] = i3;
    }
    for (const s2 of this._decodedStatsfield)
      this._calculateFieldStat(e2, s2, t2);
    const i2 = [];
    for (let s2 = 0; s2 < this._decodedStatsfield.length; s2++)
      i2.push(this._calculateFieldStat(e2, this._decodedStatsfield[s2], t2));
    return this._featureCache[t2.attributes[this.objectIdField]] = new n$2({ attributes: t2.attributes, geometry: t2.geometry }), t2;
  }
  _generateAggregateHash(e2) {
    let t2 = "";
    for (const i2 of this._decodedGroupbyfield) {
      const s2 = i2.singlefield ? e2.attributes[i2.singlefield] : i2.expression.calculateValue(e2);
      t2 += s2 == null ? ":" : ":" + s2.toString();
    }
    return x$1(t2, n$3.String);
  }
  _stat() {
    return x({ calculated: false });
  }
  getFeatureByObjectId() {
    return x(null);
  }
  static registerAction() {
    v$2._featuresetFunctions.groupby = function(e2, t2) {
      return new G({ parentfeatureset: this, groupbyfields: e2, statsfields: t2 });
    };
  }
}
class a extends v$2 {
  constructor(t2) {
    super(t2), this._topnum = 0, this.declaredClass = "esri.arcade.featureset.actions.Top", this._countedin = 0, this._maxProcessing = 100, this._topnum = t2.topnum, this._parent = t2.parentfeatureset;
  }
  _getSet(e2) {
    return this._wset === null ? this._ensureLoaded().then(() => this._parent._getSet(e2)).then((t2) => (this._wset = new t$1(t2._candidates.slice(0), t2._known.slice(0), false, this._clonePageDefinition(t2.pagesDefinition)), this._setKnownLength(this._wset) > this._topnum && (this._wset._known = this._wset._known.slice(0, this._topnum)), this._setKnownLength(this._wset) >= this._topnum && (this._wset._candidates = []), this._wset)) : x(this._wset);
  }
  _setKnownLength(t2) {
    return t2._known.length > 0 && t2._known[t2._known.length - 1] === "GETPAGES" ? t2._known.length - 1 : t2._known.length;
  }
  _isInFeatureSet(t2) {
    const e2 = this._parent._isInFeatureSet(t2);
    if (e2 === l.NotInFeatureSet)
      return e2;
    const s2 = this._idstates[t2];
    return s2 === l.InFeatureSet || s2 === l.NotInFeatureSet ? s2 : e2 === l.InFeatureSet && s2 === void 0 ? this._countedin < this._topnum ? (this._idstates[t2] = l.InFeatureSet, this._countedin++, l.InFeatureSet) : (this._idstates[t2] = l.NotInFeatureSet, l.NotInFeatureSet) : l.Unknown;
  }
  _expandPagedSet(n2, s2, i2, a2, r2) {
    if (this._parent === null)
      return L(new Error("Parent Paging not implemented"));
    if (s2 > this._topnum && (s2 = this._topnum), this._countedin >= this._topnum && n2.pagesDefinition.internal.set.length <= n2.pagesDefinition.resultOffset) {
      let e2 = n2._known.length;
      return e2 > 0 && n2._known[e2 - 1] === "GETPAGES" && (n2._known.length = e2 - 1), e2 = n2._candidates.length, e2 > 0 && n2._candidates[e2 - 1] === "GETPAGES" && (n2._candidates.length = e2 - 1), x("success");
    }
    return this._parent._expandPagedSet(n2, s2, i2, a2, r2).then((t2) => (this._setKnownLength(n2) > this._topnum && (n2._known.length = this._topnum), this._setKnownLength(n2) >= this._topnum && (n2._candidates.length = 0), t2));
  }
  _getFeatures(e2, n2, i2, a2) {
    const r2 = [], o2 = this._maxQueryRate();
    if (this._checkIfNeedToExpandKnownPage(e2, o2) === true)
      return this._expandPagedSet(e2, o2, 0, 0, a2).then(() => this._getFeatures(e2, n2, i2, a2));
    n2 !== -1 && this._featureCache[n2] === void 0 && r2.push(n2);
    let _2 = 0;
    for (let t2 = e2._lastFetchedIndex; t2 < e2._known.length && (_2++, _2 <= i2 && (e2._lastFetchedIndex += 1), !(this._featureCache[e2._known[t2]] === void 0 && (e2._known[t2] !== n2 && r2.push(e2._known[t2]), r2.length > o2 - 1))); t2++)
      ;
    if (r2.length === 0)
      return x("success");
    const h2 = new t$1([], r2, false, null), u2 = Math.min(r2.length, i2);
    return this._parent._getFeatures(h2, -1, u2, a2).then(() => {
      for (let t2 = 0; t2 < u2; t2++) {
        const e3 = this._parent._featureFromCache(r2[t2]);
        e3 !== void 0 && (this._featureCache[r2[t2]] = e3);
      }
      return "success";
    });
  }
  _getFilteredSet(t2, e2, n2, i2, a2) {
    return this._ensureLoaded().then(() => this._getSet(a2)).then((t3) => new t$1(t3._candidates.slice(0).concat(t3._known.slice(0)), [], false, this._clonePageDefinition(t3.pagesDefinition)));
  }
  _refineKnowns(t2, e2) {
    let s2 = 0, i2 = null;
    const a2 = [];
    for (let r2 = 0; r2 < t2._candidates.length; r2++) {
      const o2 = this._isInFeatureSet(t2._candidates[r2]);
      if (o2 === l.InFeatureSet) {
        if (t2._known.push(t2._candidates[r2]), s2 += 1, i2 === null ? i2 = { start: r2, end: r2 } : i2.end === r2 - 1 ? i2.end = r2 : (a2.push(i2), i2 = { start: r2, end: r2 }), t2._known.length >= this._topnum)
          break;
      } else if (o2 === l.NotInFeatureSet)
        i2 === null ? i2 = { start: r2, end: r2 } : i2.end === r2 - 1 ? i2.end = r2 : (a2.push(i2), i2 = { start: r2, end: r2 }), s2 += 1;
      else if (o2 === l.Unknown)
        break;
      if (s2 >= e2)
        break;
    }
    i2 !== null && a2.push(i2);
    for (let n2 = a2.length - 1; n2 >= 0; n2--)
      t2._candidates.splice(a2[n2].start, a2[n2].end - a2[n2].start + 1);
    this._setKnownLength(t2) > this._topnum && (t2._known = t2._known.slice(0, this._topnum)), this._setKnownLength(t2) >= this._topnum && (t2._candidates = []);
  }
  _stat() {
    return x({ calculated: false });
  }
  _canDoAggregates() {
    return x(false);
  }
  static registerAction() {
    v$2._featuresetFunctions.top = function(t2) {
      return new a({ parentfeatureset: this, topnum: t2 });
    };
  }
}
class q$1 extends v$2 {
  constructor(e2) {
    super(e2), this.declaredClass = "esri.arcade.featureset.sources.FeatureLayerDynamic", this._removeGeometry = false, this._overrideFields = null, this.formulaCredential = null, this._pageJustIds = false, this._requestStandardised = false, e2.spatialReference && (this.spatialReference = e2.spatialReference), this._transparent = true, this._maxProcessing = 1e3, this._layer = e2.layer, this._wset = null, e2.outFields !== void 0 && (this._overrideFields = e2.outFields), e2.includeGeometry !== void 0 && (this._removeGeometry = e2.includeGeometry === false);
  }
  _maxQueryRate() {
    return S$1;
  }
  end() {
    return this._layer;
  }
  optimisePagingFeatureQueries(e2) {
    this._pageJustIds = e2;
  }
  convertQueryToLruCacheKey(e2) {
    const t2 = E$3(e2.toJSON());
    return x$1(t2, n$3.String);
  }
  load() {
    return this._loadPromise === null && (this._loadPromise = l$2((e2, t2) => {
      try {
        if (this._layer.loaded === true)
          return this._initialiseFeatureSet(), void e2(this);
        this._layer.when().then(() => {
          try {
            this._initialiseFeatureSet(), e2(this);
          } catch (r2) {
            t2(r2);
          }
        }, t2), this._layer.load();
      } catch (r2) {
        t2(r2);
      }
    })), this._loadPromise;
  }
  _initialiseFeatureSet() {
    if (this.spatialReference == null && (this.spatialReference = this._layer.spatialReference), this.geometryType = this._layer.geometryType, this.fields = this._layer.fields.slice(0), this._layer.outFields)
      if (this._layer.outFields.length === 1 && this._layer.outFields[0] === "*")
        ;
      else {
        const e2 = [];
        for (const t2 of this.fields)
          if (t2.type === "oid")
            e2.push(t2);
          else
            for (const r2 of this._layer.outFields)
              if (r2.toLowerCase() === t2.name.toLowerCase()) {
                e2.push(t2);
                break;
              }
        this.fields = e2;
      }
    if (this._overrideFields !== null)
      if (this._overrideFields.length === 1 && this._overrideFields[0] === "*")
        this._overrideFields = null;
      else {
        const e2 = [], t2 = [];
        for (const r2 of this.fields)
          if (r2.type === "oid")
            e2.push(r2), t2.push(r2.name);
          else
            for (const i2 of this._overrideFields)
              if (i2.toLowerCase() === r2.name.toLowerCase()) {
                e2.push(r2), t2.push(r2.name);
                break;
              }
        this.fields = e2, this._overrideFields = t2;
      }
    if (this._layer.source && this._layer.source.sourceJSON) {
      const e2 = this._layer.source.sourceJSON.currentVersion;
      this._layer.source.sourceJSON.useStandardizedQueries === true ? (this._databaseType = o$1.StandardisedNoInterval, e2 != null && e2 >= 10.61 && (this._databaseType = o$1.Standardised)) : e2 != null && (e2 >= 10.5 && (this._databaseType = o$1.StandardisedNoInterval, this._requestStandardised = true), e2 >= 10.61 && (this._databaseType = o$1.Standardised));
    }
    this.objectIdField = this._layer.objectIdField;
    for (const e2 of this.fields)
      e2.type === "global-id" && (this.globalIdField = e2.name);
    this.hasM = this._layer.supportsM, this.hasZ = this._layer.supportsZ, this.typeIdField = this._layer.typeIdField, this.types = this._layer.types;
  }
  _isInFeatureSet() {
    return l.InFeatureSet;
  }
  _refineSetBlock(e2) {
    return x(e2);
  }
  _candidateIdTransform(e2) {
    return e2;
  }
  _getSet(e2) {
    return this._wset === null ? this._ensureLoaded().then(() => this._getFilteredSet("", null, null, null, e2)).then((e3) => (this._wset = e3, e3)) : x(this._wset);
  }
  _runDatabaseProbe(t2) {
    return l$2((e2, r2) => {
      try {
        this._ensureLoaded().then(() => {
          try {
            const i2 = new R();
            i2.where = t2.replace("OBJECTID", this._layer.objectIdField), this._layer.queryObjectIds(i2).then(() => {
              e2(true);
            }, () => {
              try {
                e2(false);
              } catch (t3) {
                r2(t3);
              }
            });
          } catch (i2) {
            r2(i2);
          }
        });
      } catch (i2) {
        r2(i2);
      }
    });
  }
  _canUsePagination() {
    return !(!this._layer.capabilities || !this._layer.capabilities.query || this._layer.capabilities.query.supportsPagination !== true);
  }
  _cacheableFeatureSetSourceKey() {
    return this._layer.url;
  }
  pbfSupportedForQuery(e2) {
    return !e2.outStatistics && this._layer && this._layer.capabilities && this._layer.capabilities.query && this._layer.capabilities.query.supportsFormatPBF === true && this._layer.capabilities.query.supportsQuantizationEditMode === true;
  }
  queryPBF(e2) {
    return e2.quantizationParameters = { mode: "edit" }, c$1(this._layer.parsedUrl, e2, new n$4({})).then((e3) => g$1.fromJSON(ne(e3.data)).unquantize());
  }
  get gdbVersion() {
    return this._layer && this._layer.capabilities && this._layer.capabilities.data && this._layer.capabilities.data.isVersioned ? this._layer.gdbVersion ? this._layer.gdbVersion : "SDE.DEFAULT" : "";
  }
  nativeCapabilities() {
    return { title: this._layer.title, source: this, canQueryRelated: true, capabilities: this._layer.capabilities, databaseType: this._databaseType, requestStandardised: this._requestStandardised };
  }
  executeQuery(e2, t2) {
    const r2 = new x$2({ url: this._layer.parsedUrl.path }), i2 = t2 === "execute" && this.pbfSupportedForQuery(e2);
    let s2 = null;
    if (this.recentlyUsedQueries) {
      const a2 = this.convertQueryToLruCacheKey(e2);
      s2 = this.recentlyUsedQueries.getFromCache(a2), s2 === null && (s2 = i2 !== true ? r2[t2](e2) : this.queryPBF(e2), this.recentlyUsedQueries.addToCache(a2, s2), s2 = s2.catch((e3) => {
        throw this.recentlyUsedQueries.removeFromCache(a2), e3;
      }));
    }
    return this.featureSetQueryInterceptor && this.featureSetQueryInterceptor.preLayerQueryCallback({ layer: this._layer, query: e2, method: t2 }), s2 === null && (s2 = i2 !== true ? r2[t2](e2) : this.queryPBF(e2)), s2;
  }
  _getFilteredSet(e2, t2, r2, i2, s2) {
    return this.databaseType().then((a2) => {
      if (this.isTable() && t2 && e2 !== null && e2 !== "") {
        return new t$1([], [], true, null);
      }
      if (this._canUsePagination())
        return this._getFilteredSetUsingPaging(e2, t2, r2, i2, s2);
      let n2 = "", l2 = false;
      i2 !== null && this._layer.capabilities && this._layer.capabilities.query && this._layer.capabilities.query.supportsOrderBy === true && (n2 = i2.constructClause(), l2 = true);
      const o2 = new R();
      return o2.where = r2 === null ? t2 === null ? "1=1" : "" : n$1(r2, a2), this._requestStandardised && (o2.sqlFormat = "standard"), o2.spatialRelationship = this._makeRelationshipEnum(e2), o2.outSpatialReference = this.spatialReference, o2.orderByFields = n2 !== "" ? n2.split(",") : null, o2.geometry = t2 === null ? null : t2, o2.relationParameter = this._makeRelationshipParam(e2), this.executeQuery(o2, "executeForIds").then((e3) => {
        e3 === null && (e3 = []), this._checkCancelled(s2);
        return new t$1([], e3, l2, null);
      });
    });
  }
  _expandPagedSet(e2, t2, r2, i2, s2) {
    return this._expandPagedSetFeatureSet(e2, t2, r2, i2, s2);
  }
  _getFilteredSetUsingPaging(e2, t2, i2, s2, a2) {
    try {
      let r2 = "", n2 = false;
      return s2 !== null && this._layer.capabilities && this._layer.capabilities.query && this._layer.capabilities.query.supportsOrderBy === true && (r2 = s2.constructClause(), n2 = true), this.databaseType().then((s3) => {
        let l2 = i2 === null ? t2 === null ? "1=1" : "" : n$1(i2, s3);
        this._layer.definitionExpression && (l2 = l2 !== "" ? "((" + this._layer.definitionExpression + ") AND (" + l2 + "))" : this._layer.definitionExpression);
        let o2 = this._maxQueryRate();
        const u2 = this._layer.capabilities.query.maxRecordCount;
        u2 !== void 0 && u2 < o2 && (o2 = u2);
        let d = null;
        if (this._pageJustIds === true)
          d = new t$1([], ["GETPAGES"], n2, { spatialRel: this._makeRelationshipEnum(e2), relationParam: this._makeRelationshipParam(e2), outFields: this._layer.objectIdField, resultRecordCount: o2, resultOffset: 0, geometry: t2 === null ? null : t2, where: l2, orderByFields: r2, returnGeometry: false, returnIdsOnly: "false", internal: { set: [], lastRetrieved: 0, lastPage: 0, fullyResolved: false } });
        else {
          let i3 = true;
          this._removeGeometry === true && (i3 = false);
          const s4 = this._overrideFields !== null ? this._overrideFields : this._fieldsIncludingObjectId(this._layer.outFields ? this._layer.outFields : ["*"]);
          d = new t$1([], ["GETPAGES"], n2, { spatialRel: this._makeRelationshipEnum(e2), relationParam: this._makeRelationshipParam(e2), outFields: s4.join(","), resultRecordCount: o2, resultOffset: 0, geometry: t2 === null ? null : t2, where: l2, orderByFields: r2, returnGeometry: i3, returnIdsOnly: "false", internal: { set: [], lastRetrieved: 0, lastPage: 0, fullyResolved: false } });
        }
        return this._expandPagedSet(d, o2, 0, 1, a2).then(() => d);
      });
    } catch (n2) {
      return L(n2);
    }
  }
  _clonePageDefinition(e2) {
    return e2 === null ? null : e2.groupbypage !== true ? { groupbypage: false, spatialRel: e2.spatialRel, relationParam: e2.relationParam, outFields: e2.outFields, resultRecordCount: e2.resultRecordCount, resultOffset: e2.resultOffset, geometry: e2.geometry, where: e2.where, orderByFields: e2.orderByFields, returnGeometry: e2.returnGeometry, returnIdsOnly: e2.returnIdsOnly, internal: e2.internal } : { groupbypage: true, spatialRel: e2.spatialRel, relationParam: e2.relationParam, outFields: e2.outFields, resultRecordCount: e2.resultRecordCount, useOIDpagination: e2.useOIDpagination, generatedOid: e2.generatedOid, groupByFieldsForStatistics: e2.groupByFieldsForStatistics, resultOffset: e2.resultOffset, outStatistics: e2.outStatistics, geometry: e2.geometry, where: e2.where, orderByFields: e2.orderByFields, returnGeometry: e2.returnGeometry, returnIdsOnly: e2.returnIdsOnly, internal: e2.internal };
  }
  _getPhysicalPage(e2, t2, i2) {
    try {
      const t3 = e2.pagesDefinition.internal.lastRetrieved, r2 = t3, s2 = e2.pagesDefinition.internal.lastPage, a2 = new R();
      return this._requestStandardised && (a2.sqlFormat = "standard"), a2.spatialRelationship = e2.pagesDefinition.spatialRel, a2.relationParameter = e2.pagesDefinition.relationParam, a2.outFields = e2.pagesDefinition.outFields.split(","), a2.num = e2.pagesDefinition.resultRecordCount, a2.start = e2.pagesDefinition.internal.lastPage, a2.geometry = e2.pagesDefinition.geometry, a2.where = e2.pagesDefinition.where, a2.orderByFields = e2.pagesDefinition.orderByFields !== "" ? e2.pagesDefinition.orderByFields.split(",") : null, a2.returnGeometry = e2.pagesDefinition.returnGeometry, a2.outSpatialReference = this.spatialReference, this.executeQuery(a2, "execute").then((a3) => {
        if (this._checkCancelled(i2), e2.pagesDefinition.internal.lastPage !== s2)
          return "done";
        for (let t4 = 0; t4 < a3.features.length; t4++)
          e2.pagesDefinition.internal.set[r2 + t4] = a3.features[t4].attributes[this._layer.objectIdField];
        if (this._pageJustIds === false)
          for (let e3 = 0; e3 < a3.features.length; e3++)
            this._featureCache[a3.features[e3].attributes[this._layer.objectIdField]] = a3.features[e3];
        return (a3.exceededTransferLimit === void 0 && a3.features.length !== e2.pagesDefinition.resultRecordCount || a3.exceededTransferLimit === false) && (e2.pagesDefinition.internal.fullyResolved = true), e2.pagesDefinition.internal.lastRetrieved = t3 + a3.features.length, e2.pagesDefinition.internal.lastPage += e2.pagesDefinition.resultRecordCount, "done";
      });
    } catch (s2) {
      return L(s2);
    }
  }
  _fieldsIncludingObjectId(e2) {
    if (e2 === null)
      return [this.objectIdField];
    const t2 = e2.slice(0);
    if (t2.indexOf("*") > -1)
      return t2;
    let r2 = false;
    for (const i2 of t2)
      if (i2.toUpperCase() === this.objectIdField.toUpperCase()) {
        r2 = true;
        break;
      }
    return r2 === false && t2.push(this.objectIdField), t2;
  }
  _getFeatures(e2, i2, s2, a2) {
    const n2 = [];
    try {
      if (i2 !== -1 && this._featureCache[i2] === void 0 && n2.push(i2), this._checkIfNeedToExpandKnownPage(e2, this._maxProcessingRate()) === true)
        return this._expandPagedSet(e2, this._maxProcessingRate(), 0, 0, a2).then(() => this._getFeatures(e2, i2, s2, a2));
      let o2 = 0;
      for (let t2 = e2._lastFetchedIndex; t2 < e2._known.length; t2++) {
        if (e2._lastFetchedIndex += 1, o2++, this._featureCache[e2._known[t2]] === void 0) {
          let r2 = false;
          if (this._layer._mode !== null && this._layer._mode !== void 0) {
            const i3 = this._layer._mode;
            if (i3._featureMap[e2._known[t2]] !== void 0) {
              const s3 = i3._featureMap[e2._known[t2]];
              s3 !== null && (r2 = true, this._featureCache[e2._known[t2]] = s3);
            }
          }
          if (r2 === false && (e2._known[t2] !== i2 && n2.push(e2._known[t2]), n2.length >= this._maxProcessingRate() - 1))
            break;
        }
        if (o2 >= s2 && n2.length === 0)
          break;
      }
      if (n2.length === 0)
        return x("success");
      try {
        const e3 = new R();
        return this._requestStandardised && (e3.sqlFormat = "standard"), e3.objectIds = n2, e3.outFields = this._overrideFields !== null ? this._overrideFields : this._fieldsIncludingObjectId(this._layer.outFields ? this._layer.outFields : ["*"]), e3.returnGeometry = true, this._removeGeometry === true && (e3.returnGeometry = false), e3.outSpatialReference = this.spatialReference, this.executeQuery(e3, "execute").then((e4) => {
          if (this._checkCancelled(a2), e4.error !== void 0)
            return L(new Error(e4.error));
          for (let t2 = 0; t2 < e4.features.length; t2++)
            this._featureCache[e4.features[t2].attributes[this._layer.objectIdField]] = e4.features[t2];
          return "success";
        });
      } catch (l2) {
        return L(l2);
      }
    } catch (l2) {
      return L(l2);
    }
  }
  _getDistinctPages(e2, t2, i2, s2, a2, n2, l2, o2, u2) {
    return this._ensureLoaded().then(() => this.databaseType()).then((d) => {
      let h2 = i2.parseTree.column;
      for (let e3 = 0; e3 < this._layer.fields.length; e3++)
        if (this._layer.fields[e3].name.toLowerCase() === h2.toLowerCase()) {
          h2 = this._layer.fields[e3].name;
          break;
        }
      const c2 = new R();
      this._requestStandardised && (c2.sqlFormat = "standard");
      let p2 = n2 === null ? a2 === null ? "1=1" : "" : n$1(n2, d);
      return this._layer.definitionExpression && (p2 = p2 !== "" ? "((" + this._layer.definitionExpression + ") AND (" + p2 + "))" : this._layer.definitionExpression), c2.where = p2, c2.spatialRelationship = this._makeRelationshipEnum(s2), c2.relationParameter = this._makeRelationshipParam(s2), c2.geometry = a2 === null ? null : a2, c2.returnDistinctValues = true, c2.returnGeometry = false, c2.outFields = [h2], this.executeQuery(c2, "execute").then((d2) => {
        if (this._checkCancelled(u2), !d2.hasOwnProperty("features"))
          return L(new Error("Unnexected Result querying statistics from layer"));
        let c3 = false;
        for (let e3 = 0; e3 < this._layer.fields.length; e3++)
          if (this._layer.fields[e3].name === h2) {
            this._layer.fields[e3].type === "date" && (c3 = true);
            break;
          }
        for (let e3 = 0; e3 < d2.features.length; e3++) {
          if (c3) {
            const t3 = d2.features[e3].attributes[h2];
            t3 !== null ? o2.push(new Date(t3)) : o2.push(t3);
          } else
            o2.push(d2.features[e3].attributes[h2]);
          if (o2.length >= l2)
            break;
        }
        return d2.features.length === 0 ? o2 : d2.features.length === this._layer.capabilities.query.maxRecordCount && o2.length < l2 ? this._getDistinctPages(e2 + d2.features.length, t2, i2, s2, a2, n2, l2, o2, u2).then((e3) => ({ calculated: true, result: e3 })) : o2;
      });
    });
  }
  _distinctStat(e2, t2, r2, i2, s2, a2, n2) {
    return this._getDistinctPages(0, e2, t2, r2, i2, s2, a2, [], n2).then((e3) => ({ calculated: true, result: e3 }));
  }
  isTable() {
    return this._layer.isTable || this._layer.geometryType === null || this._layer.type === "table" || this._layer.geometryType === "";
  }
  _countstat(e2, t2, r2, i2) {
    return this.databaseType().then((e3) => {
      const s2 = new R();
      if (this._requestStandardised && (s2.sqlFormat = "standard"), this.isTable() && r2 && t2 !== null && t2 !== "")
        return { calculated: true, result: 0 };
      let a2 = i2 === null ? r2 === null ? "1=1" : "" : n$1(i2, e3);
      return this._layer.definitionExpression && (a2 = a2 !== "" ? "((" + this._layer.definitionExpression + ") AND (" + a2 + "))" : this._layer.definitionExpression), s2.where = a2, s2.where = a2, s2.spatialRelationship = this._makeRelationshipEnum(t2), s2.relationParameter = this._makeRelationshipParam(t2), s2.geometry = r2 === null ? null : r2, s2.returnGeometry = false, this.executeQuery(s2, "executeForCount").then((e4) => ({ calculated: true, result: e4 }));
    });
  }
  _stats(e2, t2, i2, s2, a2, n2, l2) {
    return this._ensureLoaded().then(() => {
      const o2 = this._layer.capabilities && this._layer.capabilities.query && this._layer.capabilities.query.supportsSqlExpression === true, u2 = this._layer.capabilities && this._layer.capabilities.query && this._layer.capabilities.query.supportsStatistics === true, d = this._layer.capabilities && this._layer.capabilities.query && this._layer.capabilities.query.supportsDistinct === true;
      return e2 === "count" ? d ? this._countstat(e2, i2, s2, a2) : { calculated: false } : u2 === false || E$2(t2) === false && o2 === false || t2.isStandardized === false ? i2 !== "" || a2 !== null ? { calculated: false } : this._manualStat(e2, t2, n2, l2) : e2 === "distinct" ? d === false ? i2 !== "" || a2 !== null ? { calculated: false } : this._manualStat(e2, t2, n2, l2) : this._distinctStat(e2, t2, i2, s2, a2, n2, l2) : this.databaseType().then((n3) => {
        if (this.isTable() && s2 && i2 !== null && i2 !== "")
          return { calculated: true, result: null };
        const l3 = new R();
        this._requestStandardised && (l3.sqlFormat = "standard");
        let o3 = a2 === null ? s2 === null ? "1=1" : "" : n$1(a2, n3);
        this._layer.definitionExpression && (o3 = o3 !== "" ? "((" + this._layer.definitionExpression + ") AND (" + o3 + "))" : this._layer.definitionExpression), l3.where = o3, l3.spatialRelationship = this._makeRelationshipEnum(i2), l3.relationParameter = this._makeRelationshipParam(i2), l3.geometry = s2 === null ? null : s2;
        const u3 = new m$1();
        u3.statisticType = m$2(e2), u3.onStatisticField = n$1(t2, n3), u3.outStatisticFieldName = "ARCADE_STAT_RESULT", l3.returnGeometry = false;
        let d2 = "ARCADE_STAT_RESULT";
        return l3.outStatistics = [u3], this.executeQuery(l3, "execute").then((e3) => {
          if (!e3.hasOwnProperty("features") || e3.features.length === 0)
            return L(new Error("Unnexected Result querying statistics from layer"));
          let t3 = false;
          for (let r2 = 0; r2 < e3.fields.length; r2++)
            if (e3.fields[r2].name.toUpperCase() === "ARCADE_STAT_RESULT") {
              d2 = e3.fields[r2].name, e3.fields[r2].type === "date" && (t3 = true);
              break;
            }
          if (t3) {
            let t4 = e3.features[0].attributes[d2];
            return t4 !== null && (t4 = new Date(e3.features[0].attributes[d2])), { calculated: true, result: t4 };
          }
          return { calculated: true, result: e3.features[0].attributes[d2] };
        });
      });
    });
  }
  _stat(e2, t2, r2, i2, s2, a2, n2) {
    return this._stats(e2, t2, r2, i2, s2, a2, n2);
  }
  _canDoAggregates(e2, t2) {
    return this._ensureLoaded().then(() => {
      let e3 = false;
      const r2 = this._layer.capabilities && this._layer.capabilities.query && this._layer.capabilities.query.supportsSqlExpression === true;
      if (this._layer.capabilities !== void 0 && this._layer.capabilities.query !== null && this._layer.capabilities.query.supportsStatistics === true && this._layer.capabilities.query.supportsOrderBy === true && (e3 = true), e3)
        for (let i2 = 0; i2 < t2.length - 1; i2++)
          t2[i2].workingexpr !== null && (t2[i2].workingexpr.isStandardized === false || E$2(t2[i2].workingexpr) === false && r2 === false) && (e3 = false);
      return e3 !== false;
    });
  }
  _makeRelationshipEnum(e2) {
    if (e2.indexOf("esriSpatialRelRelation") >= 0)
      return "relation";
    switch (e2) {
      case "esriSpatialRelRelation":
        return "relation";
      case "esriSpatialRelIntersects":
        return "intersects";
      case "esriSpatialRelContains":
        return "contains";
      case "esriSpatialRelOverlaps":
        return "overlaps";
      case "esriSpatialRelWithin":
        return "within";
      case "esriSpatialRelTouches":
        return "touches";
      case "esriSpatialRelCrosses":
        return "crosses";
      case "esriSpatialRelEnvelopeIntersects":
        return "envelope-intersects";
    }
    return e2;
  }
  _makeRelationshipParam(e2) {
    return e2.indexOf("esriSpatialRelRelation") >= 0 ? e2.split(":")[1] : "";
  }
  _getAggregatePagesDataSourceDefinition(e2, t2, r2, i2, s2, a2, n2) {
    return this._ensureLoaded().then(() => this.databaseType()).then((l2) => {
      let o2 = "", u2 = false, d = false;
      a2 !== null && this._layer.capabilities && this._layer.capabilities.query && this._layer.capabilities.query.supportsOrderBy === true && (o2 = a2.constructClause(), d = true), this._layer.capabilities && this._layer.capabilities.query && this._layer.capabilities.query.supportsPagination === false && (d = false, u2 = true, o2 = this._layer.objectIdField);
      const h2 = [];
      for (let e3 = 0; e3 < t2.length; e3++) {
        const r3 = new m$1();
        r3.onStatisticField = t2[e3].workingexpr !== null ? n$1(t2[e3].workingexpr, l2) : "", r3.outStatisticFieldName = t2[e3].field, r3.statisticType = t2[e3].toStatisticsName(), h2.push(r3);
      }
      o2 === "" && (o2 = e2.join(","));
      let c2 = this._maxQueryRate();
      const p2 = this._layer.capabilities.query.maxRecordCount;
      p2 !== void 0 && p2 < c2 && (c2 = p2);
      let _2 = s2 === null ? i2 === null ? "1=1" : "" : n$1(s2, l2);
      this._layer.definitionExpression && (_2 = _2 !== "" ? "((" + this._layer.definitionExpression + ") AND (" + _2 + "))" : this._layer.definitionExpression);
      return new t$1([], ["GETPAGES"], d, { groupbypage: true, spatialRel: this._makeRelationshipEnum(r2), relationParam: this._makeRelationshipParam(r2), outFields: ["*"], useOIDpagination: u2, generatedOid: n2, resultRecordCount: c2, resultOffset: 0, groupByFieldsForStatistics: e2, outStatistics: h2, geometry: i2 === null ? null : i2, where: _2, orderByFields: o2, returnGeometry: false, returnIdsOnly: false, internal: { lastMaxId: -1, set: [], lastRetrieved: 0, lastPage: 0, fullyResolved: false } });
    });
  }
  _getAgregagtePhysicalPage(e2, i2, s2) {
    try {
      let i3 = e2.pagesDefinition.where;
      e2.pagesDefinition.useOIDpagination === true && (i3 = i3 !== "" ? "(" + i3 + ") AND (" + e2.pagesDefinition.generatedOid + ">" + e2.pagesDefinition.internal.lastMaxId.toString() + ")" : e2.pagesDefinition.generatedOid + ">" + e2.pagesDefinition.internal.lastMaxId.toString());
      const a2 = e2.pagesDefinition.internal.lastRetrieved, l2 = a2, o2 = e2.pagesDefinition.internal.lastPage, u2 = new R();
      return this._requestStandardised && (u2.sqlFormat = "standard"), u2.where = i3, u2.spatialRelationship = e2.pagesDefinition.spatialRel, u2.relationParameter = e2.pagesDefinition.relationParam, u2.outFields = e2.pagesDefinition.outFields, u2.outStatistics = e2.pagesDefinition.outStatistics, u2.geometry = e2.pagesDefinition.geometry, u2.groupByFieldsForStatistics = e2.pagesDefinition.groupByFieldsForStatistics, u2.num = e2.pagesDefinition.resultRecordCount, u2.start = e2.pagesDefinition.internal.lastPage, u2.returnGeometry = e2.pagesDefinition.returnGeometry, u2.orderByFields = e2.pagesDefinition.orderByFields !== "" ? e2.pagesDefinition.orderByFields.split(",") : null, this.isTable() && u2.geometry && u2.spatialRelationship ? x([]) : this.executeQuery(u2, "execute").then((t2) => {
        if (this._checkCancelled(s2), !t2.hasOwnProperty("features"))
          return L(new Error("Unnexected Result querying aggregates from layer"));
        const i4 = [];
        if (e2.pagesDefinition.internal.lastPage !== o2)
          return [];
        for (let r2 = 0; r2 < t2.features.length; r2++)
          e2.pagesDefinition.internal.set[l2 + r2] = t2.features[r2].attributes[e2.pagesDefinition.generatedOid];
        for (let e3 = 0; e3 < t2.features.length; e3++)
          i4.push(new n$2({ attributes: t2.features[e3].attributes, geometry: null }));
        return e2.pagesDefinition.useOIDpagination === true ? t2.features.length === 0 ? e2.pagesDefinition.internal.fullyResolved = true : e2.pagesDefinition.internal.lastMaxId = t2.features[t2.features.length - 1].attributes[e2.pagesDefinition.generatedOid] : (t2.exceededTransferLimit === void 0 && t2.features.length !== e2.pagesDefinition.resultRecordCount || t2.exceededTransferLimit === false) && (e2.pagesDefinition.internal.fullyResolved = true), e2.pagesDefinition.internal.lastRetrieved = a2 + t2.features.length, e2.pagesDefinition.internal.lastPage += e2.pagesDefinition.resultRecordCount, i4;
      });
    } catch (a2) {
      return L(a2);
    }
  }
  static create(e2, t2, r2, i2, s2) {
    const a2 = new ke({ url: e2, outFields: t2 === null ? ["*"] : t2 });
    return new q$1({ layer: a2, spatialReference: r2, lrucache: i2, interceptor: s2 });
  }
  relationshipMetaData() {
    return this._layer && this._layer.source && this._layer.source.sourceJSON && this._layer.source.sourceJSON.relationships ? this._layer.source.sourceJSON.relationships : [];
  }
  serviceUrl() {
    return N$1(this._layer.parsedUrl.path);
  }
  queryAttachments(e2, r2, i2, s2) {
    if (this._layer.capabilities.data.supportsAttachment && this._layer.capabilities.operations.supportsQueryAttachments) {
      const t2 = { objectIds: [e2] };
      return (r2 && r2 > 0 || i2 && i2 > 0) && (t2.size = [r2 && r2 > 0 ? r2 : 0, i2 && i2 > 0 ? i2 : r2 + 1]), s2 && s2.length > 0 && (t2.attachmentTypes = s2), this.featureSetQueryInterceptor && this.featureSetQueryInterceptor.preLayerQueryCallback({ layer: this._layer, query: t2, method: "attachments" }), this._layer.queryAttachments(t2).then((t3) => {
        const r3 = [];
        return t3 && t3[e2] && t3[e2].forEach((t4) => {
          const i3 = this._layer.parsedUrl.path + "/" + e2.toString() + "/attachments/" + t4.id.toString();
          r3.push(new e$2(t4.id, t4.name, t4.contentType, t4.size, i3));
        }), r3;
      });
    }
    return x([]);
  }
  queryRelatedFeatures(e2) {
    const t2 = { f: "json", relationshipId: e2.relationshipId.toString(), definitionExpression: e2.where, outFields: e2.outFields.join(","), returnGeometry: e2.returnGeometry.toString() };
    return e2.resultOffset !== void 0 && e2.resultOffset !== null && (t2.resultOffset = e2.resultOffset.toString()), e2.resultRecordCount !== void 0 && e2.resultRecordCount !== null && (t2.resultRecordCount = e2.resultRecordCount.toString()), e2.orderByFields && (t2.orderByFields = e2.orderByFields.join(",")), e2.objectIds.length > 0 && (t2.objectIds = e2.objectIds.join(",")), e2.outSpatialReference && (t2.outSR = JSON.stringify(e2.outSpatialReference.toJSON())), this.featureSetQueryInterceptor && this.featureSetQueryInterceptor.preRequestCallback({ layer: this._layer, queryPayload: t2, method: "relatedrecords", url: this._layer.parsedUrl.path + "/queryRelatedRecords" }), U$1(this._layer.parsedUrl.path + "/queryRelatedRecords", { responseType: "json", query: t2 }).then((e3) => {
      if (e3.data) {
        const t3 = {}, r2 = e3.data;
        if (r2 && r2.relatedRecordGroups) {
          const e4 = r2.spatialReference;
          for (const s2 of r2.relatedRecordGroups) {
            const a2 = s2.objectId, l2 = [];
            for (const t4 of s2.relatedRecords) {
              t4.geometry && (t4.geometry.spatialReference = e4);
              const r3 = new n$2({ geometry: t4.geometry ? p$1(t4.geometry) : null, attributes: t4.attributes });
              l2.push(r3);
            }
            t3[a2] = { features: l2, exceededTransferLimit: r2.exceededTransferLimit === true };
          }
        }
        return t3;
      }
      return L("Invalid Request");
    });
  }
  getFeatureByObjectId(e2, t2) {
    const r2 = new x$2({ url: this._layer.parsedUrl.path }), i2 = new R();
    return i2.outFields = t2, i2.returnGeometry = false, i2.outSpatialReference = this.spatialReference, i2.where = this.objectIdField + "=" + e2.toString(), this.featureSetQueryInterceptor && this.featureSetQueryInterceptor.preLayerQueryCallback({ layer: this._layer, query: i2, method: "execute" }), r2.execute(i2).then((e3) => e3.features.length === 1 ? e3.features[0] : null);
  }
  getIdentityUser() {
    return this.load().then(() => {
      var e2;
      const t2 = (e2 = s$3) == null ? void 0 : e2.findCredential(this._layer.url);
      return t2 ? t2.userId : null;
    });
  }
  getOwningSystemUrl() {
    return this.load().then(() => {
      var r2;
      const i2 = (r2 = s$3) == null ? void 0 : r2.findServerInfo(this._layer.url);
      if (i2)
        return x(i2.owningSystemUrl);
      let n2 = this._layer.url;
      const l2 = n2.toLowerCase().indexOf("/rest/services");
      return n2 = l2 > -1 ? n2.substring(0, l2) : n2, n2 ? (n2 += "/rest/info", l$2((e2, t2) => {
        U$1(n2, { query: { f: "json" } }).then((t3) => {
          let r3 = "";
          t3.data && t3.data.owningSystemUrl && (r3 = t3.data.owningSystemUrl), e2(r3);
        }, (t3) => {
          e2("");
        });
      })) : x("");
    });
  }
}
class y extends v$2 {
  constructor(e2) {
    super(e2), this.declaredClass = "esri.arcade.featureset.sources.FeatureLayerMemory", this._removeGeometry = false, this._overrideFields = null, this._forceIsTable = false, e2.spatialReference && (this.spatialReference = e2.spatialReference), this._transparent = true, this._maxProcessing = 1e3, this._layer = e2.layer, this._wset = null, e2.isTable === true && (this._forceIsTable = true), e2.outFields !== void 0 && (this._overrideFields = e2.outFields), e2.includeGeometry !== void 0 && (this._removeGeometry = e2.includeGeometry === false);
  }
  _maxQueryRate() {
    return S$1;
  }
  end() {
    return this._layer;
  }
  optimisePagingFeatureQueries() {
  }
  load() {
    return this._loadPromise === null && (this._loadPromise = l$2((e2, t2) => {
      if (this._layer.loaded === true)
        return this._initialiseFeatureSet(), void e2(this);
      this._layer.when().then(() => {
        try {
          this._initialiseFeatureSet(), e2(this);
        } catch (r2) {
          t2(r2);
        }
      }, t2), this._layer.load();
    })), this._loadPromise;
  }
  get gdbVersion() {
    return "";
  }
  _initialiseFeatureSet() {
    if (this.spatialReference == null && (this.spatialReference = this._layer.spatialReference), this.geometryType = this._layer.geometryType, this.fields = this._layer.fields.slice(0), this._layer.outFields)
      if (this._layer.outFields.length === 1 && this._layer.outFields[0] === "*")
        ;
      else {
        const e2 = [];
        for (const t2 of this.fields)
          if (t2.type === "oid")
            e2.push(t2);
          else
            for (const r2 of this._layer.outFields)
              if (r2.toLowerCase() === t2.name.toLowerCase()) {
                e2.push(t2);
                break;
              }
        this.fields = e2;
      }
    if (this._overrideFields !== null)
      if (this._overrideFields.length === 1 && this._overrideFields[0] === "*")
        this._overrideFields = null;
      else {
        const e2 = [], t2 = [];
        for (const r2 of this.fields)
          if (r2.type === "oid")
            e2.push(r2), t2.push(r2.name);
          else
            for (const s2 of this._overrideFields)
              if (s2.toLowerCase() === r2.name.toLowerCase()) {
                e2.push(r2), t2.push(r2.name);
                break;
              }
        this.fields = e2, this._overrideFields = t2;
      }
    this.objectIdField = this._layer.objectIdField;
    for (const e2 of this.fields)
      e2.type === "global-id" && (this.globalIdField = e2.name);
    this.hasM = this._layer.supportsM, this.hasZ = this._layer.supportsZ, this._databaseType = o$1.Standardised, this.typeIdField = this._layer.typeIdField, this.types = this._layer.types;
  }
  isTable() {
    return this._forceIsTable || this._layer.isTable || this._layer.type === "table" || !this._layer.geometryType;
  }
  _isInFeatureSet() {
    return l.InFeatureSet;
  }
  _candidateIdTransform(e2) {
    return e2;
  }
  _getSet(e2) {
    return this._wset === null ? this._ensureLoaded().then(() => this._getFilteredSet("", null, null, null, e2)).then((e3) => (this._wset = e3, e3)) : x(this._wset);
  }
  _changeFeature(e2) {
    const t2 = {};
    for (const r2 of this.fields)
      t2[r2.name] = e2.attributes[r2.name];
    return new n$2({ geometry: this._removeGeometry === true ? null : e2.geometry, attributes: t2 });
  }
  _getFilteredSet(e2, r2, s2, i2, a2) {
    let l2 = "", o2 = false;
    if (i2 !== null && (l2 = i2.constructClause(), o2 = true), this.isTable() && r2 && e2 !== null && e2 !== "") {
      const e3 = new t$1([], [], true, null);
      return x(e3);
    }
    const c2 = new R();
    return c2.where = s2 === null ? r2 === null ? "1=1" : "" : n$1(s2, o$1.Standardised), c2.spatialRelationship = this._makeRelationshipEnum(e2), c2.outSpatialReference = this.spatialReference, c2.orderByFields = l2 !== "" ? l2.split(",") : null, c2.geometry = r2 === null ? null : r2, c2.returnGeometry = true, c2.relationParameter = this._makeRelationshipParam(e2), this._layer.queryFeatures(c2).then((e3) => {
      if (e3 === null)
        return new t$1([], [], o2, null);
      this._checkCancelled(a2);
      const t2 = [];
      e3.features.forEach((e4) => {
        const r3 = e4.attributes[this._layer.objectIdField];
        t2.push(r3), this._featureCache[r3] = this._changeFeature(e4);
      });
      return new t$1([], t2, o2, null);
    });
  }
  _makeRelationshipEnum(e2) {
    if (e2.indexOf("esriSpatialRelRelation") >= 0)
      return "relation";
    switch (e2) {
      case "esriSpatialRelRelation":
        return "relation";
      case "esriSpatialRelIntersects":
        return "intersects";
      case "esriSpatialRelContains":
        return "contains";
      case "esriSpatialRelOverlaps":
        return "overlaps";
      case "esriSpatialRelWithin":
        return "within";
      case "esriSpatialRelTouches":
        return "touches";
      case "esriSpatialRelCrosses":
        return "crosses";
      case "esriSpatialRelEnvelopeIntersects":
        return "envelope-intersects";
    }
    return e2;
  }
  _makeRelationshipParam(e2) {
    return e2.indexOf("esriSpatialRelRelation") >= 0 ? e2.split(":")[1] : "";
  }
  _queryAllFeatures() {
    if (this._wset)
      return x(this._wset);
    const e2 = new R();
    return e2.where = "1=1", this._ensureLoaded().then(() => {
      if (this._layer.source && this._layer.source.items) {
        const e3 = [];
        return this._layer.source.items.forEach((t2) => {
          const r2 = t2.attributes[this._layer.objectIdField];
          e3.push(r2), this._featureCache[r2] = this._changeFeature(t2);
        }), this._wset = new t$1([], e3, false, null), this._wset;
      }
      return this._layer.queryFeatures(e2).then((e3) => {
        const t2 = [];
        return e3.features.forEach((e4) => {
          const r2 = e4.attributes[this._layer.objectIdField];
          t2.push(r2), this._featureCache[r2] = this._changeFeature(e4);
        }), this._wset = new t$1([], t2, false, null), this._wset;
      });
    });
  }
  _getFeatures(e2, s2, i2) {
    const a2 = [];
    s2 !== -1 && this._featureCache[s2] === void 0 && a2.push(s2);
    for (let t2 = e2._lastFetchedIndex; t2 < e2._known.length && (e2._lastFetchedIndex += 1, !(this._featureCache[e2._known[t2]] === void 0 && (e2._known[t2] !== s2 && a2.push(e2._known[t2]), a2.length > i2))); t2++)
      ;
    return a2.length === 0 ? x("success") : L(new Error("Unaccounted for Features. Not in Feature Collection"));
  }
  _refineSetBlock(e2) {
    return x(e2);
  }
  _stat() {
    return x({ calculated: false });
  }
  _canDoAggregates() {
    return x(false);
  }
  relationshipMetaData() {
    return [];
  }
  static _cloneAttr(e2) {
    const t2 = {};
    for (const r2 in e2)
      t2[r2] = e2[r2];
    return t2;
  }
  nativeCapabilities() {
    return { title: this._layer.title, canQueryRelated: false, source: this, capabilities: this._layer.capabilities, databaseType: this._databaseType, requestStandardised: true };
  }
  static create(e2, t2) {
    let r2 = e2.layerDefinition.objectIdField;
    const i2 = e2.layerDefinition.typeIdField ? e2.layerDefinition.typeIdField : "", l2 = [];
    if (e2.layerDefinition.types)
      for (const s2 of e2.layerDefinition.types)
        l2.push(u$2.fromJSON(s2));
    let n2 = e2.layerDefinition.geometryType;
    n2 === void 0 && (n2 = e2.featureSet.geometryType || "");
    let o2 = e2.featureSet.features;
    const u2 = t2.toJSON();
    if (r2 === "" || r2 === void 0) {
      let t3 = false;
      for (const s2 of e2.layerDefinition.fields)
        if (s2.type === "oid" || s2.type === "esriFieldTypeOID") {
          r2 = s2.name, t3 = true;
          break;
        }
      if (t3 === false) {
        let t4 = "FID", s2 = true, i3 = 0;
        for (; s2; ) {
          let r3 = true;
          for (const s3 of e2.layerDefinition.fields)
            if (s3.name === t4) {
              r3 = false;
              break;
            }
          r3 === true ? s2 = false : (i3++, t4 = "FID" + i3.toString());
        }
        e2.layerDefinition.fields.push({ type: "esriFieldTypeOID", name: t4, alias: t4 });
        const a2 = [];
        for (let r3 = 0; r3 < o2.length; r3++)
          a2.push({ geometry: e2.featureSet.features[r3].geometry, attributes: e2.featureSet.features[r3].attributes ? this._cloneAttr(e2.featureSet.features[r3].attributes) : {} }), a2[r3].attributes[t4] = r3;
        o2 = a2, r2 = t4;
      }
    }
    const h2 = [];
    for (const s2 of e2.layerDefinition.fields)
      s2 instanceof y$1 ? h2.push(s2) : h2.push(y$1.fromJSON(s2));
    let c2 = n2;
    switch (c2) {
      case "esriGeometryPoint":
        c2 = "point";
        break;
      case "esriGeometryPolyline":
        c2 = "polyline";
        break;
      case "esriGeometryPolygon":
        c2 = "polygon";
        break;
      case "esriGeometryExtent":
        c2 = "extent";
        break;
      case "esriGeometryMultipoint":
        c2 = "multipoint";
    }
    for (const a2 of o2)
      a2.geometry && a2.geometry instanceof c$2 == false && (a2.geometry.type = c2, a2.geometry.spatialReference === void 0 && (a2.geometry.spatialReference = u2));
    const f2 = { outFields: ["*"], source: o2, fields: h2, types: l2, typeIdField: i2, objectIdField: r2, spatialReference: t2 };
    f2.geometryType = c2 || "point";
    const _2 = new ke(f2);
    return new y({ layer: _2, spatialReference: t2, isTable: c2 === null || c2 === "" });
  }
  queryAttachments() {
    return x([]);
  }
  getFeatureByObjectId(e2) {
    const t2 = new R();
    return t2.where = this.objectIdField + "=" + e2.toString(), this._layer.queryFeatures(t2).then((e3) => e3.features.length === 1 ? e3.features[0] : null);
  }
  getOwningSystemUrl() {
    return x("");
  }
  getIdentityUser() {
    return x("");
  }
}
class u extends v$2 {
  constructor(e2) {
    super(e2), this.declaredClass = "esri.arcade.featureset.sources.FeatureLayerRelated", this._findObjectId = -1, this._requestStandardised = false, this._removeGeometry = false, this._overrideFields = null, this.featureObjectId = null, this.relatedLayer = null, this.relationship = null, e2.spatialReference && (this.spatialReference = e2.spatialReference), this._transparent = true, this._maxProcessing = 1e3, this._layer = e2.layer, this._wset = null, this._findObjectId = e2.objectId, this.featureObjectId = e2.objectId, this.relationship = e2.relationship, this.relatedLayer = e2.relatedLayer, e2.outFields !== void 0 && (this._overrideFields = e2.outFields), e2.includeGeometry !== void 0 && (this._removeGeometry = e2.includeGeometry === false);
  }
  _maxQueryRate() {
    return S$1;
  }
  end() {
    return this._layer;
  }
  optimisePagingFeatureQueries() {
  }
  load() {
    return this._loadPromise === null && (this._loadPromise = l$2((e2, i2) => {
      s([this._layer.load(), this.relatedLayer.load()]).then(() => {
        this._initialiseFeatureSet(), e2(this);
      }, i2);
    })), this._loadPromise;
  }
  nativeCapabilities() {
    return this.relatedLayer.nativeCapabilities();
  }
  _initialiseFeatureSet() {
    if (this.spatialReference == null && (this.spatialReference = this._layer.spatialReference), this.geometryType = this.relatedLayer.geometryType, this.fields = this.relatedLayer.fields.slice(0), this._overrideFields !== null)
      if (this._overrideFields.length === 1 && this._overrideFields[0] === "*")
        this._overrideFields = null;
      else {
        const e3 = [], t2 = [];
        for (const i2 of this.fields)
          if (i2.type === "oid")
            e3.push(i2), t2.push(i2.name);
          else
            for (const r2 of this._overrideFields)
              if (r2.toLowerCase() === i2.name.toLowerCase()) {
                e3.push(i2), t2.push(i2.name);
                break;
              }
        this.fields = e3, this._overrideFields = t2;
      }
    const e2 = this._layer.nativeCapabilities();
    e2 && (this._databaseType = e2.databaseType, this._requestStandardised = e2.requestStandardised), this.objectIdField = this.relatedLayer.objectIdField, this.globalIdField = this.relatedLayer.globalIdField, this.hasM = this.relatedLayer.supportsM, this.hasZ = this.relatedLayer.supportsZ, this.typeIdField = this.relatedLayer.typeIdField, this.types = this.relatedLayer.types;
  }
  databaseType() {
    return this.relatedLayer.databaseType().then(() => (this._databaseType = this.relatedLayer._databaseType, this._databaseType));
  }
  isTable() {
    return this.relatedLayer.isTable();
  }
  _isInFeatureSet() {
    return l.InFeatureSet;
  }
  _candidateIdTransform(e2) {
    return e2;
  }
  _getSet(e2) {
    return this._wset === null ? this._ensureLoaded().then(() => this._getFilteredSet("", null, null, null, e2)).then((e3) => (this._wset = e3, e3)) : x(this._wset);
  }
  _changeFeature(e2) {
    const t2 = {};
    for (const i2 of this.fields)
      t2[i2.name] = e2.attributes[i2.name];
    return new n$2({ geometry: this._removeGeometry === true ? null : e2.geometry, attributes: t2 });
  }
  _getFilteredSet(e2, t2, i2, r2, s2) {
    return this.databaseType().then(() => {
      if (this.isTable() && t2 && e2 !== null && e2 !== "") {
        return new t$1([], [], true, null);
      }
      const a2 = this._layer.nativeCapabilities();
      if (a2.canQueryRelated === false) {
        return new t$1([], [], true, null);
      }
      if (a2.capabilities.queryRelated && a2.capabilities.queryRelated.supportsPagination)
        return this._getFilteredSetUsingPaging(e2, t2, i2, r2, s2);
      let n2 = "", d = false;
      r2 !== null && a2.capabilities && a2.capabilities.queryRelated && a2.capabilities.queryRelated.supportsOrderBy === true && (n2 = r2.constructClause(), d = true);
      const u2 = new l$3();
      u2.objectIds = [this._findObjectId];
      const h2 = this._overrideFields !== null ? this._overrideFields : this._fieldsIncludingObjectId(this.relatedLayer.fields ? this.relatedLayer.fields.map((e3) => e3.name) : ["*"]);
      u2.outFields = h2, u2.relationshipId = this.relationship.id, u2.where = "1=1";
      let c2 = true;
      return this._removeGeometry === true && (c2 = false), u2.returnGeometry = c2, this._requestStandardised && (u2.sqlFormat = "standard"), u2.outSpatialReference = this.spatialReference, u2.orderByFields = n2 !== "" ? n2.split(",") : null, a2.source.queryRelatedFeatures(u2).then((r3) => {
        this._checkCancelled(s2);
        const a3 = r3[this._findObjectId] ? r3[this._findObjectId].features : [], n3 = [];
        for (let e3 = 0; e3 < a3.length; e3++)
          this._featureCache[a3[e3].attributes[this._layer.objectIdField]] = a3[e3], n3.push(a3[e3].attributes[this._layer.objectIdField]);
        const o2 = t2 && e2 !== null && e2 !== "", u3 = i2 != null;
        return new t$1(o2 || u3 ? n3 : [], o2 || u3 ? [] : n3, d, null);
      });
    });
  }
  _fieldsIncludingObjectId(e2) {
    if (e2 === null)
      return [this.objectIdField];
    const t2 = e2.slice(0);
    if (t2.indexOf("*") > -1)
      return t2;
    let i2 = false;
    for (const r2 of t2)
      if (r2.toUpperCase() === this.objectIdField.toUpperCase()) {
        i2 = true;
        break;
      }
    return i2 === false && t2.push(this.objectIdField), t2;
  }
  _getFilteredSetUsingPaging(e2, t2, i2, s2, a2) {
    try {
      let r2 = "", n2 = false;
      const d = this._layer.nativeCapabilities();
      return s2 !== null && d && d.capabilities.queryRelated && d.capabilities.queryRelated.supportsOrderBy === true && (r2 = s2.constructClause(), n2 = true), this.databaseType().then(() => {
        const s3 = "1=1";
        let o2 = this._maxQueryRate();
        const u2 = d.capabilities.query.maxRecordCount;
        u2 !== void 0 && u2 < o2 && (o2 = u2);
        const h2 = t2 && e2 !== null && e2 !== "", c2 = i2 != null;
        let p2 = null, y2 = true;
        this._removeGeometry === true && (y2 = false);
        const f2 = this._overrideFields !== null ? this._overrideFields : this._fieldsIncludingObjectId(this.relatedLayer.fields ? this.relatedLayer.fields.map((e3) => e3.name) : ["*"]);
        return p2 = new t$1(h2 || c2 ? ["GETPAGES"] : [], h2 || c2 ? [] : ["GETPAGES"], n2, { outFields: f2.join(","), resultRecordCount: o2, resultOffset: 0, objectIds: [this._findObjectId], where: s3, orderByFields: r2, returnGeometry: y2, returnIdsOnly: "false", internal: { set: [], lastRetrieved: 0, lastPage: 0, fullyResolved: false } }), this._expandPagedSet(p2, o2, 0, 0, a2).then(() => p2);
      });
    } catch (n2) {
      return L(n2);
    }
  }
  _expandPagedSet(e2, t2, i2, r2, s2) {
    return this._expandPagedSetFeatureSet(e2, t2, i2, r2, s2);
  }
  _clonePageDefinition(e2) {
    return e2 === null ? null : e2.groupbypage !== true ? { groupbypage: false, outFields: e2.outFields, resultRecordCount: e2.resultRecordCount, resultOffset: e2.resultOffset, where: e2.where, objectIds: e2.objectIds, orderByFields: e2.orderByFields, returnGeometry: e2.returnGeometry, returnIdsOnly: e2.returnIdsOnly, internal: e2.internal } : { groupbypage: true, outFields: e2.outFields, resultRecordCount: e2.resultRecordCount, useOIDpagination: e2.useOIDpagination, generatedOid: e2.generatedOid, groupByFieldsForStatistics: e2.groupByFieldsForStatistics, resultOffset: e2.resultOffset, outStatistics: e2.outStatistics, geometry: e2.geometry, where: e2.where, objectIds: e2.objectIds, orderByFields: e2.orderByFields, returnGeometry: e2.returnGeometry, returnIdsOnly: e2.returnIdsOnly, internal: e2.internal };
  }
  _getPhysicalPage(e2, t2, i2) {
    try {
      const t3 = e2.pagesDefinition.internal.lastRetrieved, r2 = t3, s2 = e2.pagesDefinition.internal.lastPage, a2 = this._layer.nativeCapabilities(), n2 = new l$3();
      return this._requestStandardised === true && (n2.sqlFormat = "standard"), n2.relationshipId = this.relationship.id, n2.objectIds = e2.pagesDefinition.objectIds, n2.resultOffset = e2.pagesDefinition.internal.lastPage, n2.resultRecordCount = e2.pagesDefinition.resultRecordCount, n2.outFields = e2.pagesDefinition.outFields.split(","), n2.where = e2.pagesDefinition.where, n2.orderByFields = e2.pagesDefinition.orderByFields !== "" ? e2.pagesDefinition.orderByFields.split(",") : null, n2.returnGeometry = e2.pagesDefinition.returnGeometry, n2.outSpatialReference = this.spatialReference, a2.source.queryRelatedFeatures(n2).then((a3) => {
        if (this._checkCancelled(i2), e2.pagesDefinition.internal.lastPage !== s2)
          return 0;
        const n3 = a3[this._findObjectId] ? a3[this._findObjectId].features : [];
        for (let t4 = 0; t4 < n3.length; t4++)
          e2.pagesDefinition.internal.set[r2 + t4] = n3[t4].attributes[this._layer.objectIdField];
        for (let e3 = 0; e3 < n3.length; e3++)
          this._featureCache[n3[e3].attributes[this._layer.objectIdField]] = n3[e3];
        const l2 = !a3[this._findObjectId] || a3[this._findObjectId].exceededTransferLimit === false;
        return n3.length !== e2.pagesDefinition.resultRecordCount && l2 && (e2.pagesDefinition.internal.fullyResolved = true), e2.pagesDefinition.internal.lastRetrieved = t3 + n3.length, e2.pagesDefinition.internal.lastPage += e2.pagesDefinition.resultRecordCount, n3.length;
      });
    } catch (s2) {
      return L(s2);
    }
  }
  _getFeatures(e2, t2, s2, a2) {
    const n2 = [];
    t2 !== -1 && this._featureCache[t2] === void 0 && n2.push(t2);
    const l2 = this._maxQueryRate();
    if (this._checkIfNeedToExpandKnownPage(e2, l2) === true)
      return this._expandPagedSet(e2, l2, 0, 0, a2).then(() => this._getFeatures(e2, t2, s2, a2));
    let d = 0;
    for (let i2 = e2._lastFetchedIndex; i2 < e2._known.length && (d++, d <= s2 && (e2._lastFetchedIndex += 1), !(e2._known[i2] !== "GETPAGES" && this._featureCache[e2._known[i2]] === void 0 && (e2._known[i2] !== t2 && n2.push(e2._known[i2]), n2.length > s2))) && !(d >= s2 && n2.length === 0); i2++)
      ;
    return n2.length === 0 ? x("success") : L(new Error("Unaccounted for Features. Not in Feature Collection"));
  }
  _refineSetBlock(e2, t2, r2) {
    return x(e2);
  }
  _stat(e2, t2, r2, s2, a2, n2, l2) {
    return x({ calculated: false });
  }
  get gdbVersion() {
    return this.relatedLayer.gdbVersion;
  }
  _canDoAggregates(e2, t2, r2, s2, a2) {
    return x(false);
  }
  relationshipMetaData() {
    return this.relatedLayer.relationshipMetaData();
  }
  serviceUrl() {
    return this.relatedLayer.serviceUrl();
  }
  queryAttachments(e2, t2, i2, r2) {
    return this.relatedLayer.queryAttachments(e2, t2, i2, r2);
  }
  getFeatureByObjectId(e2, t2) {
    return this.relatedLayer.getFeatureByObjectId(e2, t2);
  }
  getOwningSystemUrl() {
    return this.relatedLayer.getOwningSystemUrl();
  }
  getIdentityUser() {
    return this.relatedLayer.getIdentityUser();
  }
}
function S() {
  a$4.applicationCache === null && (a$4.applicationCache = new a$4());
}
function N(t2, n2) {
  if (a$4.applicationCache) {
    const a2 = a$4.applicationCache.getLayerInfo(t2);
    if (a2)
      return a2.then((r2) => x(new ke({ url: t2, outFields: n2, sourceJSON: r2 })));
    const s2 = new ke({ url: t2, outFields: n2 });
    let i2 = l$2((e2, t3) => {
      s2.load().then(() => {
        e2(s2.sourceJSON);
      }, (e3) => {
        t3(e3);
      });
    });
    return a$4.applicationCache && (a$4.applicationCache.setLayerInfo(t2, i2), i2 = i2.catch((e2) => {
      throw a$4.applicationCache.clearLayerInfo(t2), e2;
    })), i2.then(() => x(s2));
  }
  return x(new ke({ url: t2, outFields: n2 }));
}
function T(t2, r2, n2, a2, s2, i2 = null) {
  return N(t2, ["*"]).then((t3) => x(A(t3, r2, n2, a2, s2, i2)));
}
function A(e2, t2 = null, r2 = null, n2 = true, a2 = null, s2 = null) {
  return e2._hasMemorySource() === true ? new y({ layer: e2, spatialReference: t2, outFields: r2, includeGeometry: n2, lrucache: a2, interceptor: s2 }) : new q$1({ layer: e2, spatialReference: t2, outFields: r2, includeGeometry: n2, lrucache: a2, interceptor: s2 });
}
function C(t2) {
  if (a$4.applicationCache !== null) {
    const e2 = a$4.applicationCache.getLayerInfo(t2);
    if (e2 !== null)
      return e2;
  }
  let r2 = U$1(t2, { responseType: "json", query: { f: "json" } }).then((t3) => {
    if (t3.data) {
      const r3 = t3.data;
      return x(r3);
    }
    return x(null);
  });
  return a$4.applicationCache !== null && (a$4.applicationCache.setLayerInfo(t2, r2), r2 = r2.catch((e2) => {
    throw a$4.applicationCache.clearLayerInfo(t2), e2;
  })), r2;
}
function F(e2, t2) {
  const r2 = "QUERYDATAELEMTS:" + t2.toString() + ":" + e2;
  if (a$4.applicationCache !== null) {
    const e3 = a$4.applicationCache.getLayerInfo(r2);
    if (e3 !== null)
      return e3;
  }
  let n2 = U$1(e2 + "/queryDataElements", { method: "post", responseType: "json", query: { layers: JSON.stringify([t2.toString()]), f: "json" } }).then((e3) => {
    if (e3.data) {
      const t3 = e3.data;
      if (t3.layerDataElements && t3.layerDataElements[0])
        return t3.layerDataElements[0];
    }
    throw new Error("Not Found");
  });
  return a$4.applicationCache !== null && (a$4.applicationCache.setLayerInfo(r2, n2), n2 = n2.catch((e3) => {
    throw a$4.applicationCache.clearLayerInfo(r2), e3;
  })), n2;
}
function g(t2) {
  if (a$4.applicationCache !== null) {
    const e2 = a$4.applicationCache.getLayerInfo(t2);
    if (e2 !== null)
      return e2;
  }
  let r2 = U$1(t2, { responseType: "json", query: { f: "json" } }).then((t3) => {
    if (t3.data) {
      const r3 = t3.data;
      return r3.layers || (r3.layers = []), r3.tables || (r3.tables = []), x(r3);
    }
    return x({ layers: [], tables: [] });
  });
  return a$4.applicationCache !== null && (a$4.applicationCache.setLayerInfo(t2, r2), r2 = r2.catch((e2) => {
    throw a$4.applicationCache.clearLayerInfo(t2), e2;
  })), r2;
}
function k(e2, t2) {
  const r2 = { metadata: null, networkId: -1, unVersion: 3, terminals: [], queryelem: null, layerNameLkp: {}, lkp: null };
  return g(e2).then((n2) => {
    if (r2.metadata = n2, n2.controllerDatasetLayers && n2.controllerDatasetLayers.utilityNetworkLayerId !== void 0 && n2.controllerDatasetLayers.utilityNetworkLayerId !== null) {
      if (n2.layers)
        for (const e3 of n2.layers)
          r2.layerNameLkp[e3.id] = e3.name;
      if (n2.tables)
        for (const e3 of n2.tables)
          r2.layerNameLkp[e3.id] = e3.name;
      const a2 = n2.controllerDatasetLayers.utilityNetworkLayerId;
      return r2.networkId = a2, F(e2, a2).then((n3) => {
        if (n3) {
          r2.queryelem = n3, r2.queryelem && r2.queryelem.dataElement && r2.queryelem.dataElement.schemaGeneration !== void 0 && (r2.unVersion = r2.queryelem.dataElement.schemaGeneration), r2.lkp = {}, r2.queryelem.dataElement.domainNetworks || (r2.queryelem.dataElement.domainNetworks = []);
          for (const e3 of r2.queryelem.dataElement.domainNetworks) {
            for (const t3 of e3.edgeSources ? e3.edgeSources : []) {
              const e4 = { layerId: t3.layerId, sourceId: t3.sourceId, className: r2.layerNameLkp[t3.layerId] ? r2.layerNameLkp[t3.layerId] : null };
              e4.className && (r2.lkp[e4.className] = e4);
            }
            for (const t3 of e3.junctionSources ? e3.junctionSources : []) {
              const e4 = { layerId: t3.layerId, sourceId: t3.sourceId, className: r2.layerNameLkp[t3.layerId] ? r2.layerNameLkp[t3.layerId] : null };
              e4.className && (r2.lkp[e4.className] = e4);
            }
          }
          if (r2.queryelem.dataElement.terminalConfigurations)
            for (const e3 of r2.queryelem.dataElement.terminalConfigurations)
              for (const t3 of e3.terminals)
                r2.terminals.push({ terminalId: t3.terminalId, terminalName: t3.terminalName });
          return C(e2 + "/" + a2).then((n4) => {
            if (n4.systemLayers && n4.systemLayers.associationsTableId !== void 0 && n4.systemLayers.associationsTableId !== null) {
              const a3 = [];
              return r2.unVersion >= 4 && (a3.push("STATUS"), a3.push("PERCENTALONG")), T(e2 + "/" + n4.systemLayers.associationsTableId.toString(), t2, ["OBJECTID", "FROMNETWORKSOURCEID", "TONETWORKSOURCEID", "FROMGLOBALID", "TOGLOBALID", "TOTERMINALID", "FROMTERMINALID", "ASSOCIATIONTYPE", "ISCONTENTVISIBLE", "GLOBALID", ...a3], false, null, null).then((e3) => e3.load()).then((e3) => r2.unVersion >= 4 ? (e3 = e3.filter(f.create("STATUS NOT IN (1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 23, 25, 26, 27, 28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 39, 41, 42, 43, 44, 45, 46, 47, 49, 50, 51, 52, 53, 54, 55, 57, 58, 59, 60, 61, 62,63)", e3.getFieldsIndex()))).load() : e3).then((e3) => ({ lkp: r2.lkp, associations: e3, unVersion: r2.unVersion, terminals: r2.terminals }));
            }
            return { associations: null, unVersion: r2.unVersion, lkp: null, terminals: [] };
          });
        }
        return { associations: null, unVersion: r2.unVersion, lkp: null, terminals: [] };
      });
    }
    return { associations: null, unVersion: r2.unVersion, lkp: null, terminals: [] };
  });
}
function j(e2, t2, r2, n2 = null, a2 = null, s2 = true, i2 = null, l2 = null) {
  let o2 = e2.serviceUrl();
  return o2 ? (o2 = o2.charAt(o2.length - 1) === "/" ? o2 + t2.relatedTableId.toString() : o2 + "/" + t2.relatedTableId.toString(), T(o2, n2, a2, s2, i2, l2).then((o3) => new u({ layer: e2, relatedLayer: o3, relationship: t2, objectId: r2, spatialReference: n2, outFields: a2, includeGeometry: s2, lrucache: i2, interceptor: l2 }))) : null;
}
_.registerAction(), G.registerAction(), a$2.registerAction(), g$2.registerAction(), a.registerAction();
class O extends r {
  constructor(e2, t2 = null, r2 = null, n2 = null) {
    super(), this._map = e2, this._overridespref = t2, this.lrucache = r2, this.interceptor = n2, this._instantLayers = [];
  }
  makeAndAddFeatureSet(e2, t2 = true, r2 = null) {
    const n2 = A(e2, this._overridespref, r2 === null ? ["*"] : r2, t2, this.lrucache, this.interceptor);
    return this._instantLayers.push({ featureset: n2, opitem: e2, includeGeometry: t2, outFields: JSON.stringify(r2) }), n2;
  }
  featureSetByName(e2, r2 = true, n2 = null) {
    if (this._map.loaded !== void 0 && this._map.load !== void 0 && this._map.loaded === false)
      return this._map.load().then(() => {
        try {
          return this.featureSetByName(e2, r2, n2);
        } catch (a3) {
          return L(a3);
        }
      });
    n2 === null && (n2 = ["*"]), n2 = (n2 = n2.slice(0)).sort();
    const a2 = JSON.stringify(n2);
    for (let t2 = 0; t2 < this._instantLayers.length; t2++) {
      const n3 = this._instantLayers[t2];
      if (n3.opitem.title === e2 && n3.includeGeometry === r2 && n3.outFields === a2)
        return this.resolvePromise(this._instantLayers[t2].featureset);
    }
    const s2 = this._map.layers.find((t2) => t2 instanceof ke && t2.title === e2);
    if (s2)
      return this.resolvePromise(this.makeAndAddFeatureSet(s2, r2, n2));
    if (this._map.tables) {
      const t2 = this._map.tables.find((t3) => !!(t3.title && t3.title === e2 || t3.title && t3.title === e2));
      if (t2) {
        if (t2 instanceof ke)
          return this.resolvePromise(this.makeAndAddFeatureSet(t2, r2, n2));
        if (t2._materializedTable)
          ;
        else {
          const e3 = t2.outFields ? t2 : __spreadProps(__spreadValues({}, t2), { outFields: ["*"] });
          t2._materializedTable = new ke(e3);
        }
        return t2._materializedTable.load().then(() => this.resolvePromise(this.makeAndAddFeatureSet(t2._materializedTable, r2, n2)));
      }
    }
    return this.resolvePromise(null);
  }
  featureSetById(e2, r2 = true, n2 = ["*"]) {
    if (this._map.loaded !== void 0 && this._map.load !== void 0 && this._map.loaded === false)
      return this._map.load().then(() => {
        try {
          return this.featureSetById(e2, r2, n2);
        } catch (a3) {
          return L(a3);
        }
      });
    n2 === null && (n2 = ["*"]), n2 = (n2 = n2.slice(0)).sort();
    const a2 = JSON.stringify(n2);
    for (let t2 = 0; t2 < this._instantLayers.length; t2++) {
      const n3 = this._instantLayers[t2];
      if (n3.opitem.id === e2 && n3.includeGeometry === r2 && n3.outFields === a2)
        return this.resolvePromise(this._instantLayers[t2].featureset);
    }
    const s2 = this._map.layers.find((t2) => t2 instanceof ke && t2.id === e2);
    if (s2)
      return this.resolvePromise(this.makeAndAddFeatureSet(s2, r2, n2));
    if (this._map.tables) {
      const t2 = this._map.tables.find((t3) => t3.id === e2);
      if (t2) {
        if (t2 instanceof ke)
          return this.resolvePromise(this.makeAndAddFeatureSet(t2, r2, n2));
        if (t2._materializedTable)
          ;
        else {
          const e3 = __spreadProps(__spreadValues({}, t2), { outFields: ["*"] });
          t2._materializedTable = new ke(e3);
        }
        return t2._materializedTable.load().then(() => this.resolvePromise(this.makeAndAddFeatureSet(t2._materializedTable, r2, n2)));
      }
    }
    return this.resolvePromise(null);
  }
}
class w extends r {
  constructor(e2, t2 = null, r2 = null, n2 = null) {
    super(), this._url = e2, this._overridespref = t2, this.lrucache = r2, this.interceptor = n2, this.metadata = null, this._instantLayers = [];
  }
  get url() {
    return this._url;
  }
  makeAndAddFeatureSet(e2, t2 = true, r2 = null) {
    const n2 = A(e2, this._overridespref, r2 === null ? ["*"] : r2, t2, this.lrucache);
    return this._instantLayers.push({ featureset: n2, opitem: e2, includeGeometry: t2, outFields: JSON.stringify(r2) }), n2;
  }
  _loadMetaData() {
    return g(this._url).then((e2) => (this.metadata = e2, e2));
  }
  load() {
    return this._loadMetaData();
  }
  clone() {
    return new w(this._url, this._overridespref, this.lrucache, this.interceptor);
  }
  featureSetByName(e2, t2 = true, r2 = null) {
    r2 === null && (r2 = ["*"]), r2 = (r2 = r2.slice(0)).sort();
    const n2 = JSON.stringify(r2);
    for (let a2 = 0; a2 < this._instantLayers.length; a2++) {
      const r3 = this._instantLayers[a2];
      if (r3.opitem.title === e2 && r3.includeGeometry === t2 && r3.outFields === n2)
        return this.resolvePromise(this._instantLayers[a2].featureset);
    }
    return this._loadMetaData().then((n3) => {
      let a2 = null;
      for (const t3 of n3.layers ? n3.layers : [])
        t3.name === e2 && (a2 = t3);
      if (!a2)
        for (const t3 of n3.tables ? n3.tables : [])
          t3.name === e2 && (a2 = t3);
      return a2 ? N(this._url + "/" + a2.id, ["*"]).then((e3) => this.makeAndAddFeatureSet(e3, t2, r2)) : this.resolvePromise(null);
    });
  }
  featureSetById(e2, t2 = true, r2 = ["*"]) {
    r2 === null && (r2 = ["*"]), r2 = (r2 = r2.slice(0)).sort();
    const n2 = JSON.stringify(r2);
    e2 = e2 != null ? e2.toString() : "";
    for (let a2 = 0; a2 < this._instantLayers.length; a2++) {
      const r3 = this._instantLayers[a2];
      if (r3.opitem.id === e2 && r3.includeGeometry === t2 && r3.outFields === n2)
        return this.resolvePromise(this._instantLayers[a2].featureset);
    }
    return this._loadMetaData().then((n3) => {
      let a2 = null;
      for (const t3 of n3.layers ? n3.layers : [])
        t3.id !== null && t3.id !== void 0 && t3.id.toString() === e2 && (a2 = t3);
      if (!a2)
        for (const t3 of n3.tables ? n3.tables : [])
          t3.id !== null && t3.id !== void 0 && t3.id.toString() === e2 && (a2 = t3);
      return a2 ? N(this._url + "/" + a2.id, ["*"]).then((e3) => this.makeAndAddFeatureSet(e3, t2, r2)) : this.resolvePromise(null);
    });
  }
}
function v(e2, t2, r2 = null, n2 = null) {
  return new O(e2, t2, r2, n2);
}
function E(e2, t2, r2 = null, n2 = null) {
  return new w(e2, t2, r2, n2);
}
function b(e2, t2) {
  if (e2 === null)
    return t2;
  return new w$3({ url: e2.field("url") });
}
function D(t2, r2, s2) {
  return s$3.findCredential(t2.restUrl) ? t2.loadStatus === "loaded" && r2 === "" && t2.user && t2.user.sourceJSON && s2 === false ? x(t2.user.sourceJSON) : r2 === "" ? U$1(t2.restUrl + "/community/self", { responseType: "json", query: __spreadValues({ f: "json" }, s2 === false ? {} : { returnUserLicenseTypeExtensions: true }) }).then((t3) => {
    if (t3.data) {
      const r3 = t3.data;
      if (r3 && r3.username)
        return x(r3);
    }
    return x(null);
  }) : U$1(t2.restUrl + "/community/users/" + r2, { responseType: "json", query: { f: "json" } }).then((t3) => {
    if (t3.data) {
      const r3 = t3.data;
      return r3.error ? null : x(r3);
    }
    return x(null);
  }) : x(null);
}
function q(n2, a2, s2, o2, c2, d, m2, h2 = null) {
  if (a$4.applicationCache) {
    const r2 = a$4.applicationCache.getLayerInfo(n2 + ":" + d.url);
    if (r2)
      return r2.then((r3) => {
        try {
          const t2 = new ke({ url: N$1(r3.url) + "/" + a2, outFields: ["*"] });
          return x(A(t2, s2, o2, c2, m2, h2));
        } catch (n3) {
          return L(n3);
        }
      }, (e2) => L(e2));
  }
  return l$2((e2, t2) => {
    const r2 = new b$1({ id: n2, portal: d }).load();
    a$4.applicationCache && a$4.applicationCache.setLayerInfo(n2 + ":" + d.url, r2), r2.then((r3) => {
      try {
        const t3 = new ke({ url: N$1(r3.url) + "/" + a2, outFields: ["*"] });
        e2(A(t3, s2, o2, c2, m2, h2));
      } catch (n3) {
        t2(n3);
      }
    }, (e3) => {
      a$4.applicationCache && a$4.applicationCache.clearLayerInfo(n2 + ":" + d.url), t2(e3);
    });
  });
}
var featureSetUtils = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  constructAssociationMetaDataFeatureSetFromUrl: k,
  constructFeatureSet: A,
  constructFeatureSetFromPortalItem: q,
  constructFeatureSetFromRelationship: j,
  constructFeatureSetFromUrl: T,
  createFeatureSetCollectionFromMap: v,
  createFeatureSetCollectionFromService: E,
  getPortal: b,
  initialiseMetaDataCache: S,
  lookupUser: D
});
export { A, C$2 as C, D, E$1 as E, T, _, a$2 as a, b, a as c, T$1 as d, e, featureSetUtils as f, j, k, q, r, v$1 as v, w$1 as w, y };
