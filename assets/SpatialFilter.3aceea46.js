var __pow = Math.pow;
import { ff as l$1, fg as x$1, fh as L$1, bF as k, cE as e, fj as U$1, fk as s$2 } from "./vendor.74d5941c.js";
import { a4 as o$2, a8 as de, a9 as c$1, aa as u$1, ab as f$3, a2 as he, a0 as I, a1 as l$2, ac as g$3, ad as G, ae as y$1, af as b, ag as F$1 } from "./arcadeUtils.f4f7c393.js";
import { k as k$1, K, W, M as M$1, F, h as h$2, w as w$2, A, x as x$2, O, p as p$2, g as g$4 } from "./geometryEngineAsync.6e91af62.js";
import { WhereClause as f$2 } from "./WhereClause.f27c6004.js";
class a$1 {
  constructor() {
    this._databaseTypeMetaData = {}, this._layerInfo = {};
  }
  clearDatabaseType(a2) {
    this._databaseTypeMetaData[a2] === void 0 && delete this._databaseTypeMetaData[a2];
  }
  getDatabaseType(a2) {
    return a2 === "MUSTBESET" || this._databaseTypeMetaData[a2] === void 0 ? null : this._databaseTypeMetaData[a2];
  }
  setDatabaseType(a2, e2) {
    this._databaseTypeMetaData[a2] = e2;
  }
  getLayerInfo(a2) {
    return this._layerInfo[a2] === void 0 ? null : this._layerInfo[a2];
  }
  setLayerInfo(a2, e2) {
    this._layerInfo[a2] = e2;
  }
  clearLayerInfo(a2) {
    this._layerInfo[a2] !== void 0 && delete this._layerInfo[a2];
  }
}
a$1.applicationCache = null;
class t {
  constructor(t2, i2, s2, e2) {
    this._candidates = null, this._known = null, this._lastFetchedIndex = 0, this._ordered = false, this.pagesDefinition = null, this._candidates = t2, this._known = i2, this._ordered = s2, this.pagesDefinition = e2;
  }
}
function n$2(e2, r) {
  return c(e2.parseTree, r, e2.parameters);
}
function a(e2, r, t2) {
  return c(e2, r, t2);
}
function s$1(e2, n2, a2, s2) {
  return f$2.create(c(e2.parseTree, o$2.Standardised, e2.parameters, n2, a2), s2);
}
function o$1(e2, a2, s2 = "AND") {
  return f$2.create("((" + n$2(e2, o$2.Standardised) + ")" + s2 + "(" + n$2(a2, o$2.Standardised) + "))", e2.fieldsIndex);
}
function c(e2, r, t2, n2 = null, a2 = null) {
  let s2, o2, f2, g2;
  switch (e2.type) {
    case "interval":
      return w$1(c(e2.value, r, t2, n2, a2), e2.qualifier, e2.op);
    case "case_expression": {
      let s3 = " CASE ";
      e2.format === "simple" && (s3 += c(e2.operand, r, t2, n2, a2));
      for (let o3 = 0; o3 < e2.clauses.length; o3++)
        s3 += " WHEN " + c(e2.clauses[o3].operand, r, t2, n2, a2) + " THEN " + c(e2.clauses[o3].value, r, t2, n2, a2);
      return e2.else !== null && (s3 += " ELSE " + c(e2.else, r, t2, n2, a2)), s3 += " END ", s3;
    }
    case "param": {
      const n3 = t2[e2.value.toLowerCase()];
      if (typeof n3 == "string") {
        return "'" + t2[e2.value.toLowerCase()].toString().replace(/'/g, "''") + "'";
      }
      if (n3 instanceof Date)
        return u(n3, r);
      if (n3 instanceof Array) {
        const e3 = [];
        for (let t3 = 0; t3 < n3.length; t3++)
          typeof n3[t3] == "string" ? e3.push("'" + n3[t3].toString().replace(/'/g, "''") + "'") : n3[t3] instanceof Date ? e3.push(u(n3[t3], r)) : e3.push(n3[t3].toString());
        return e3;
      }
      return n3.toString();
    }
    case "expr_list":
      o2 = [];
      for (const s3 of e2.value)
        o2.push(c(s3, r, t2, n2, a2));
      return o2;
    case "unary_expr":
      return " ( NOT " + c(e2.expr, r, t2, n2, a2) + " ) ";
    case "binary_expr":
      switch (e2.operator) {
        case "AND":
          return " (" + c(e2.left, r, t2, n2, a2) + " AND " + c(e2.right, r, t2, n2, a2) + ") ";
        case "OR":
          return " (" + c(e2.left, r, t2, n2, a2) + " OR " + c(e2.right, r, t2, n2, a2) + ") ";
        case "IS":
          if (e2.right.type !== "null")
            throw new Error("Unsupported RHS for IS");
          return " (" + c(e2.left, r, t2, n2, a2) + " IS NULL )";
        case "ISNOT":
          if (e2.right.type !== "null")
            throw new Error("Unsupported RHS for IS");
          return " (" + c(e2.left, r, t2, n2, a2) + " IS NOT NULL )";
        case "IN":
          return s2 = [], e2.right.type === "expr_list" ? (s2 = c(e2.right, r, t2, n2, a2), " (" + c(e2.left, r, t2, n2, a2) + " IN (" + s2.join(",") + ")) ") : (g2 = c(e2.right, r, t2, n2, a2), g2 instanceof Array ? " (" + c(e2.left, r, t2, n2, a2) + " IN (" + g2.join(",") + ")) " : " (" + c(e2.left, r, t2, n2, a2) + " IN (" + g2 + ")) ");
        case "NOT IN":
          return s2 = [], e2.right.type === "expr_list" ? (s2 = c(e2.right, r, t2, n2, a2), " (" + c(e2.left, r, t2, n2, a2) + " NOT IN (" + s2.join(",") + ")) ") : (g2 = c(e2.right, r, t2, n2, a2), g2 instanceof Array ? " (" + c(e2.left, r, t2, n2, a2) + " NOT IN (" + g2.join(",") + ")) " : " (" + c(e2.left, r, t2, n2, a2) + " NOT IN (" + g2 + ")) ");
        case "BETWEEN":
          return f2 = c(e2.right, r, t2, n2, a2), " (" + c(e2.left, r, t2, n2, a2) + " BETWEEN " + f2[0] + " AND " + f2[1] + " ) ";
        case "NOTBETWEEN":
          return f2 = c(e2.right, r, t2, n2, a2), " (" + c(e2.left, r, t2, n2, a2) + " NOT BETWEEN " + f2[0] + " AND " + f2[1] + " ) ";
        case "LIKE":
          return e2.escape !== "" ? " (" + c(e2.left, r, t2, n2, a2) + " LIKE " + c(e2.right, r, t2, n2, a2) + " ESCAPE '" + e2.escape + "') " : " (" + c(e2.left, r, t2, n2, a2) + " LIKE " + c(e2.right, r, t2, n2, a2) + ") ";
        case "NOT LIKE":
          return e2.escape !== "" ? " (" + c(e2.left, r, t2, n2, a2) + " NOT LIKE " + c(e2.right, r, t2, n2, a2) + " ESCAPE '" + e2.escape + "') " : " (" + c(e2.left, r, t2, n2, a2) + " NOT LIKE " + c(e2.right, r, t2, n2, a2) + ") ";
        case "<>":
        case "<":
        case ">":
        case ">=":
        case "<=":
        case "=":
        case "*":
        case "-":
        case "+":
        case "/":
          return " (" + c(e2.left, r, t2, n2, a2) + " " + e2.operator + " " + c(e2.right, r, t2, n2, a2) + ") ";
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
      return u(e2.value, r);
    case "number":
      return e2.value.toString();
    case "current_time":
      return i$1(e2.mode === "date", r);
    case "column_ref":
      return n2 && n2.toLowerCase() === e2.column.toLowerCase() ? "(" + a2 + ")" : e2.column;
    case "function": {
      const s3 = c(e2.args, r, t2, n2, a2);
      return l(e2.name, s3, r);
    }
  }
  throw new Error("Unsupported sql syntax " + e2.type);
}
function l(e2, t2, n2) {
  switch (e2.toLowerCase().trim()) {
    case "abs":
      if (t2.length !== 1)
        throw new Error("Invalid Parameter for call to ABS");
      return "abs(" + t2[0] + ")";
    case "ceiling":
    case "ceil":
      if (t2.length !== 1)
        throw new Error("Invalid Parameter for call to CEILING");
      switch (n2) {
        case o$2.Standardised:
        case o$2.StandardisedNoInterval:
        default:
          return "CEILING(" + t2[0] + ")";
      }
    case "floor":
      if (t2.length !== 1)
        throw new Error("Invalid Parameter for call to Floor");
      return "FLOOR(" + t2[0] + ")";
    case "log":
      if (t2.length !== 1)
        throw new Error("Invalid Parameter for call to LOG");
      return "LOG(" + t2[0] + ")";
    case "log10":
      if (t2.length !== 1)
        throw new Error("Invalid Parameter for call to LOG10");
      return "LOG10(" + t2[0] + ")";
    case "power":
      if (t2.length !== 2)
        throw new Error("Invalid Parameter for call to POWER");
      return "POWER(" + t2[0] + "," + t2[1] + ")";
    case "round":
      if (t2.length === 2)
        return "ROUND(" + t2[0] + "," + t2[1] + ")";
      if (t2.length === 1)
        return "ROUND(" + t2[0] + ")";
      throw new Error("Invalid Parameter for call to ROUND");
    case "truncate":
      if (t2.length < 1 || t2.length > 2)
        throw new Error("Invalid Parameter for TRUNCATE function");
      switch (n2) {
        case o$2.SqlServer:
          return "ROUND(" + t2[0] + (t2.length === 1 ? "0" : "," + t2[1]) + ",1)";
        default:
          return "TRUNCATE(" + t2[0] + (t2.length === 1 ? ")" : "," + t2[1] + ")");
      }
    case "char_length":
    case "len":
      if (t2.length !== 1)
        throw new Error("Invalid Parameter for CHAR_LENGTH function");
      switch (n2) {
        case o$2.SqlServer:
          return "LEN(" + t2[0] + ")";
        case o$2.Oracle:
          return "LENGTH(" + t2[0] + ")";
        default:
          return "CHAR_LENGTH(" + t2[0] + ")";
      }
    case "concat":
      if (t2.length < 1)
        throw new Error("Invalid Parameter for CONCAT function");
      {
        let e3 = "CONCAT(";
        for (let r = 0; r < t2.length; r++)
          r !== 0 && (e3 += ","), e3 += t2[r];
        return e3 += ")", e3;
      }
    case "lower":
    case "lcase":
      if (t2.length !== 1)
        throw new Error("Invalid Parameter for Lower function");
      return "LOWER(" + t2[0] + ")";
    case "upper":
    case "ucase":
      if (t2.length !== 1)
        throw new Error("Invalid Parameter for Upper function");
      return "UPPER(" + t2[0] + ")";
    case "substring": {
      let e3 = "";
      switch (n2) {
        case o$2.Oracle:
          return e3 = "SUBSTR(" + t2[0] + "," + t2[1], t2.length === 3 && (e3 += "," + t2[2]), e3 += ")", e3;
        case o$2.SqlServer:
          return e3 = t2.length === 3 ? "SUBSTRING(" + t2[0] + "," + t2[1] + "," + t2[2] + ")" : "SUBSTRING(" + t2[0] + ",  " + t2[1] + ", LEN(" + t2[0] + ") - " + t2[1] + ")", e3;
        default:
          return e3 = "SUBSTRING(" + t2[0] + " FROM " + t2[1], t2.length === 3 && (e3 += " FOR " + t2[2]), e3 += ")", e3;
      }
    }
    case "extract":
      return "EXTRACT(" + t2[0].replace(/\'/g, "") + " FROM " + t2[1] + ")";
  }
  throw new Error("Function Not Recognised");
}
function u(t2, n2) {
  const a2 = de.Moment(t2), s2 = a2.minute() === 0 && a2.hour() === 0 && a2.second() === 0 && a2.millisecond() === 0;
  switch (n2) {
    case o$2.FILEGDB:
    case o$2.Standardised:
    case o$2.StandardisedNoInterval:
      return s2 ? "date '" + a2.format("YYYY-MM-DD") + "'" : "date '" + a2.format("YYYY-MM-DD HH:mm:ss") + "'";
    case o$2.Oracle:
      return s2 ? "TO_DATE('" + a2.format("YYYY-MM-DD") + "','YYYY-MM-DD')" : "TO_DATE('" + a2.format("YYYY-MM-DD HH:mm:ss") + "','YYYY-MM-DD HH24:MI:SS')";
    case o$2.SqlServer:
      return "'" + a2.format(s2 ? "YYYY-MM-DD" : "YYYY-MM-DD HH:mm:ss") + "'";
    case o$2.PGDB:
      return "#" + a2.format(s2 ? "MM-DD-YYYY" : "MM-DD-YYYY HH:mm:ss") + "#";
    case o$2.Postgres:
      return "TIMESTAMP '" + a2.format(s2 ? "YYYY-MM-DD" : "YYYY-MM-DD HH:mm:ss") + "'";
    default:
      return "date '" + a2.format("YYYY-MM-DD HH:mm:ss") + "'";
  }
}
function i$1(e2, t2) {
  switch (t2) {
    case o$2.FILEGDB:
    case o$2.Standardised:
    case o$2.StandardisedNoInterval:
    case o$2.Oracle:
      return e2 ? "CURRENT_DATE" : "CURRENT_TIMESTAMP";
    case o$2.SqlServer:
      return e2 ? "CAST(GETDATE() AS DATE)" : "GETDATE()";
    case o$2.PGDB:
    case o$2.Postgres:
    default:
      return e2 ? "CURRENT_DATE" : "CURRENT_TIMESTAMP";
  }
}
function f$1(e2, r, t2 = {}) {
  const n2 = {}, a2 = {}, s2 = { esriFieldTypeSmallInteger: "integer", esriFieldTypeInteger: "integer", esriFieldTypeSingle: "double", esriFieldTypeDouble: "double", esriFieldTypeString: "string", esriFieldTypeDate: "date", esriFieldTypeOID: "integer", oid: "integer", long: "integer", "small-integer": "integer", integer: "integer", single: "double", double: "double", date: "date", string: "string" };
  for (const o2 of r) {
    const e3 = s2[o2.type];
    n2[o2.name.toLowerCase()] = e3 === void 0 ? "" : e3;
  }
  for (const o2 in t2) {
    const e3 = s2[t2[o2]];
    a2[o2.toLowerCase()] = e3 === void 0 ? "" : e3;
  }
  switch (g$2(n2, e2.parseTree, e2.parameters, a2)) {
    case "double":
      return "double";
    case "integer":
      return "integer";
    case "double":
      return "double";
    case "date":
      return "date";
    case "string":
      return "string";
  }
  return "";
}
function g$2(e2, r, t2, n2) {
  let a2;
  switch (r.type) {
    case "interval":
      return "integer";
    case "case_expression": {
      const a3 = [];
      if (r.format === "simple") {
        for (let s2 = 0; s2 < r.clauses.length; s2++)
          a3.push(g$2(e2, r.clauses[s2].value, t2, n2));
        r.else !== null && a3.push(g$2(e2, r.else, t2, n2));
      } else {
        for (let s2 = 0; s2 < r.clauses.length; s2++)
          a3.push(g$2(e2, r.else, t2, n2));
        r.else !== null && a3.push(g$2(e2, r.else, t2, n2));
      }
      return d$1(a3);
    }
    case "param": {
      const e3 = n2[r.value.toLowerCase()];
      if (e3 === void 0 && t2) {
        const e4 = t2[r.value.toLowerCase()];
        if (e4 === void 0)
          return "";
        if (e4 === null)
          return "";
        if (typeof e4 == "string" || e4 instanceof String)
          return "string";
        if (typeof e4 == "boolean")
          return "boolean";
        if (e4 instanceof Date)
          return "date";
        if (typeof e4 == "number")
          return e4 % 1 == 0 ? "integer" : "double";
      }
      return e3 === void 0 ? "" : e3;
    }
    case "expr_list": {
      const a3 = [];
      for (const s2 of r.value)
        a3.push(g$2(e2, s2, t2, n2));
      return a3;
    }
    case "unary_expr":
      return "boolean";
    case "binary_expr":
      switch (r.operator) {
        case "AND":
        case "OR":
          return "boolean";
        case "IS":
        case "ISNOT":
          if (r.right.type !== "null")
            throw new Error("Unsupported RHS for IS");
          return "boolean";
        case "IN":
        case "NOT IN":
        case "BETWEEN":
        case "NOTBETWEEN":
        case "LIKE":
        case "NOT LIKE":
          return "boolean";
        case "<>":
        case "<":
        case ">":
        case ">=":
        case "<=":
        case "=":
          return "boolean";
        case "*":
        case "-":
        case "+":
        case "/":
          return d$1([g$2(e2, r.left, t2, n2), g$2(e2, r.right, t2, n2)]);
        default:
          throw new Error("Not Supported Operator " + r.operator);
      }
    case "null":
      return "";
    case "bool":
      return "boolean";
    case "string":
      return "string";
    case "number":
      return r.value === null ? "" : r.value % 1 == 0 ? "integer" : "double";
    case "date":
    case "timestamp":
    case "current_time":
      return "date";
    case "column_ref": {
      const t3 = e2[r.column.toLowerCase()];
      return t3 === void 0 ? "" : t3;
    }
    case "function":
      switch (r.name.toLowerCase()) {
        case "position":
        case "extract":
        case "char_length":
          return "integer";
        case "round":
          return a2 = g$2(e2, r.args, t2, n2), a2 instanceof Array ? a2.length > 0 ? a2[0] : "" : a2;
        case "sign":
          return a2 = g$2(e2, r.args, t2, n2), a2 instanceof Array && (a2 = d$1(a2)), a2 === "integer" || a2 === "double" ? a2 : "double";
        case "ceiling":
        case "floor":
        case "abs": {
          const a3 = g$2(e2, r.args, t2, n2);
          return a3 instanceof Array ? d$1(a3) : a3;
        }
        case "area":
        case "length":
        case "log":
        case "log10":
        case "sin":
        case "cos":
        case "tan":
        case "asin":
        case "acos":
        case "atan":
        case "power":
          return "double";
        case "substring":
        case "trim":
        case "concat":
        case "lower":
        case "upper":
          return "string";
        case "truncate":
          return "double";
        case "round":
          return a2 = g$2(e2, r.args, t2, n2), a2 instanceof Array ? a2.length > 0 ? a2[0] : "" : a2;
      }
      return "";
  }
  throw new Error("Unsupported sql syntax " + r.type);
}
const p$1 = { boolean: 1, string: 2, integer: 3, double: 4, date: 5 };
function d$1(e2) {
  if (e2) {
    let r = "";
    for (const t2 of e2)
      t2 !== "" && (r = r === "" || p$1[r] < p$1[t2] ? t2 : r);
    return r;
  }
  return "";
}
function h$1(e2, r) {
  return m$1(e2.parseTree, r);
}
function E(e2) {
  return e2.parseTree.type === "column_ref";
}
function m$1(e2, r) {
  if (e2 == null)
    return false;
  switch (e2.type) {
    case "when_clause":
      return m$1(e2.operand, r) || m$1(e2.value, r);
    case "case_expression":
      for (const t2 of e2.clauses)
        if (m$1(t2, r))
          return true;
      return !(e2.format !== "simple" || !m$1(e2.operand, r)) || !(e2.else === null || !m$1(e2.else, r));
    case "param":
      return false;
    case "expr_list":
      for (const t2 of e2.value)
        if (m$1(t2, r))
          return true;
      return false;
    case "unary_expr":
      return m$1(e2.expr, r);
    case "binary_expr":
      return m$1(e2.left, r) || m$1(e2.right, r);
    case "null":
    case "bool":
    case "date":
    case "timestamp":
    case "string":
    case "number":
      return false;
    case "column_ref":
      return r.toLowerCase() === e2.column.toLowerCase();
    case "function":
      return m$1(e2.args, r);
  }
  return false;
}
function T(e2) {
  let r = "";
  return r += e2.period.toUpperCase(), r;
}
function w$1(e2, r, t2) {
  let n2 = "";
  return n2 = r.type === "interval-period" ? T(r) : T(r.start) + " TO " + T(r.end), "INTERVAL " + t2 + " " + e2 + " " + n2;
}
class n$1 {
  constructor(t2, e2) {
    this._lastId = -1, this._progress = e2, this._parent = t2;
  }
  reset() {
    this._lastId = -1;
  }
  nextBatch(e2) {
    if (this._parent._mainSetInUse !== null)
      return this._parent._mainSetInUse.then((t2) => this.nextBatch(e2), (t2) => this.nextBatch(e2));
    const n2 = { returnpromise: null, hasset: false }, s2 = [];
    return n2.returnpromise = l$1((t2, a2) => {
      this._parent._getSet(this._progress).then((h2) => {
        let _ = h2._known.length - 1;
        if (h2._known[h2._known.length - 1] === "GETPAGES" && (_ -= 1), this._lastId + e2 > _ && h2._known.length > 0 && h2._known[h2._known.length - 1] === "GETPAGES")
          this._parent._expandPagedSet(h2, this._parent._maxQueryRate(), 0, 0, this._progress).then((s3) => {
            n2.hasset = true, this._parent._mainSetInUse = null, this.nextBatch(e2).then(t2, a2);
          }, (t3) => {
            n2.hasset = true, this._parent._mainSetInUse = null, a2(t3);
          });
        else {
          if (_ >= this._lastId + e2 || h2._candidates.length === 0) {
            for (let t3 = 0; t3 < e2; t3++) {
              const e3 = t3 + this._lastId + 1;
              if (e3 >= h2._known.length)
                break;
              s2[t3] = h2._known[e3];
            }
            return this._lastId += s2.length, s2.length === 0 && (n2.hasset = true, this._parent._mainSetInUse = null, t2([])), void this._parent._getFeatureBatch(s2, this._progress).then((e3) => {
              n2.hasset = true, this._parent._mainSetInUse = null, t2(e3);
            }, (t3) => {
              n2.hasset = true, this._parent._mainSetInUse = null, a2(t3);
            });
          }
          this._parent._refineSetBlock(h2, this._parent._maxProcessingRate(), this._progress).then(() => {
            n2.hasset = true, this._parent._mainSetInUse = null, this.nextBatch(e2).then(t2, a2);
          }, (t3) => {
            n2.hasset = true, this._parent._mainSetInUse = null, a2(t3);
          });
        }
      }, (t3) => {
        n2.hasset = true, this._parent._mainSetInUse = null, a2(t3);
      });
    }), n2.hasset === false && (this._parent._mainSetInUse = n2.returnpromise, n2.hasset = true), n2.returnpromise;
  }
  next() {
    if (this._parent._mainSetInUse !== null)
      return this._parent._mainSetInUse.then((t2) => this.next(), (t2) => this.next());
    const e2 = { returnpromise: null, hasset: false };
    return e2.returnpromise = l$1((t2, n2) => {
      this._parent._getSet(this._progress).then((s2) => {
        this._lastId < s2._known.length - 1 ? s2._known[this._lastId + 1] === "GETPAGES" ? this._parent._expandPagedSet(s2, this._parent._maxQueryRate(), 0, 0, this._progress).then((t3) => (e2.hasset = true, this._parent._mainSetInUse = null, this.next())).then(t2, n2) : (this._lastId += 1, this._parent._getFeature(s2, s2._known[this._lastId], this._progress).then((n3) => {
          e2.hasset = true, this._parent._mainSetInUse = null, t2(n3);
        }, (t3) => {
          e2.hasset = true, this._parent._mainSetInUse = null, n2(t3);
        })) : s2._candidates.length > 0 ? this._parent._refineSetBlock(s2, this._parent._maxProcessingRate(), this._progress).then(() => {
          e2.hasset = true, this._parent._mainSetInUse = null, this.next().then(t2, n2);
        }, (t3) => {
          e2.hasset = true, this._parent._mainSetInUse = null, n2(t3);
        }) : (e2.hasset = true, this._parent._mainSetInUse = null, t2(null));
      }, (t3) => {
        e2.hasset = true, this._parent._mainSetInUse = null, n2(t3);
      });
    }), e2.hasset === false && (this._parent._mainSetInUse = e2.returnpromise, e2.hasset = true), e2.returnpromise;
  }
  count() {
    return this._parent._totalCount !== -1 ? x$1(this._parent._totalCount) : this._parent._getSet(this._progress).then((t2) => this._refineAllSets(t2)).then((t2) => (this._parent._totalCount = t2._known.length, x$1(this._parent._totalCount)));
  }
  _refineAllSets(t2) {
    return t2._known.length > 0 && t2._known[t2._known.length - 1] === "GETPAGES" ? this._parent._expandPagedSet(t2, this._parent._maxQueryRate(), 0, 1, this._progress).then((e2) => this._refineAllSets(t2)).then((t3) => x$1(t3)) : t2._candidates.length > 0 ? t2._known[t2._candidates.length - 1] === "GETPAGES" ? this._parent._expandPagedSet(t2, this._parent._maxQueryRate(), 0, 2, this._progress).then((e2) => this._refineAllSets(t2)).then((t3) => x$1(t3)) : this._parent._refineSetBlock(t2, this._parent._maxProcessingRate(), this._progress).then((t3) => t3._candidates.length > 0 ? this._refineAllSets(t3) : x$1(t3)) : x$1(t2);
  }
}
function s(t2) {
  return t2 = +t2, isFinite(t2) ? t2 - t2 % 1 || (t2 < 0 ? -0 : t2 === 0 ? t2 : 0) : t2;
}
function i(t2) {
  let n2 = 0;
  for (let e2 = 0; e2 < t2.length; e2++)
    n2 += t2[e2];
  return n2 / t2.length;
}
function o(t2) {
  const n2 = i(t2);
  let e2 = 0;
  for (let r = 0; r < t2.length; r++)
    e2 += __pow(n2 - t2[r], 2);
  return e2 / t2.length;
}
function h(t2) {
  const n2 = i(t2);
  let e2 = 0;
  for (let r = 0; r < t2.length; r++)
    e2 += __pow(n2 - t2[r], 2);
  return e2 / (t2.length - 1);
}
function f(t2) {
  let n2 = 0;
  for (let e2 = 0; e2 < t2.length; e2++)
    n2 += t2[e2];
  return n2;
}
function g$1(t2, n2) {
  const e2 = [], c2 = {}, a2 = [];
  for (let s2 = 0; s2 < t2.length; s2++) {
    if (t2[s2] !== void 0 && t2[s2] !== null) {
      const n3 = t2[s2];
      if (c$1(n3) || u$1(n3))
        c2[n3] === void 0 && (e2.push(n3), c2[n3] = 1);
      else {
        let t3 = false;
        for (let e3 = 0; e3 < a2.length; e3++)
          f$3(a2[e3], n3) === true && (t3 = true);
        t3 === false && (a2.push(n3), e2.push(n3));
      }
    }
    if (e2.length >= n2 && n2 !== -1)
      return e2;
  }
  return e2;
}
function m(t2) {
  switch (t2.toLowerCase()) {
    case "distinct":
      return "distinct";
    case "avg":
    case "mean":
      return "avg";
    case "min":
      return "min";
    case "sum":
      return "sum";
    case "max":
      return "max";
    case "stdev":
    case "stddev":
      return "stddev";
    case "var":
    case "variance":
      return "var";
    case "count":
      return "count";
  }
  return "";
}
function p(t2, n2, e2 = 1e3) {
  switch (t2.toLowerCase()) {
    case "distinct":
      return g$1(n2, e2);
    case "avg":
    case "mean":
      return i(n2);
    case "min":
      return Math.min.apply(Math, n2);
    case "sum":
      return f(n2);
    case "max":
      return Math.max.apply(Math, n2);
    case "stdev":
    case "stddev":
      return Math.sqrt(o(n2));
    case "var":
    case "variance":
      return o(n2);
    case "count":
      return n2.length;
  }
  return 0;
}
function d(t2, n2, e2) {
  return q(t2, n2, e2, true).then((t3) => t3.length === 0 ? null : Math.min.apply(Math, t3));
}
function v$1(t2, n2, e2) {
  return q(t2, n2, e2, true).then((t3) => t3.length === 0 ? null : Math.max.apply(Math, t3));
}
function M(t2, n2, e2) {
  let r = "";
  return E(n2) === false && (r = f$1(n2, t2.fields, null)), q(t2, n2, e2, true).then((t3) => {
    if (t3.length === 0)
      return null;
    const n3 = i(t3);
    return n3 === null ? n3 : r === "integer" ? s(n3) : n3;
  });
}
function x(t2, n2, e2) {
  return q(t2, n2, e2, true).then((t3) => t3.length === 0 ? null : h(t3));
}
function y(t2, n2, e2) {
  return q(t2, n2, e2, true).then((t3) => t3.length === 0 ? null : Math.sqrt(h(t3)));
}
function j(t2, n2, e2) {
  return q(t2, n2, e2, true).then((t3) => t3.length === 0 ? null : f(t3));
}
function w(n2, e2) {
  try {
    return n2.iterator(e2).count();
  } catch (r) {
    return L$1(r);
  }
}
function q(e2, r, u2, l2 = false) {
  try {
    const t2 = e2.iterator(u2);
    return l$1((n2, e3) => {
      U(t2, [], r, l2, n2, e3);
    });
  } catch (c2) {
    return L$1(c2);
  }
}
function U(t2, n2, r, u2, l2, c2) {
  he(t2.next().then((e2) => {
    try {
      if (e2 !== null) {
        const a2 = r.calculateValue(e2);
        return a2 === null ? u2 === false && (n2[n2.length] = a2) : n2[n2.length] = a2, U(t2, n2, r, u2, l2, c2);
      }
      l2(n2);
    } catch (a2) {
      c2(a2);
    }
  }, c2));
}
function C(t2, n2, e2 = 1e3, r = null) {
  return L(t2, n2, e2, r);
}
function L(n2, e2, r, u2) {
  try {
    return V(n2.iterator(u2), {}, [], e2, r);
  } catch (l2) {
    return L$1(l2);
  }
}
function V(t2, n2, e2, r, u2) {
  return t2.next().then((l2) => {
    if (l2 !== null) {
      const c2 = r.calculateValue(l2);
      return c2 != null && n2[c2] === void 0 && (e2.push(c2), n2[c2] = 1), e2.length >= u2 && u2 !== -1 ? e2 : V(t2, n2, e2, r, u2);
    }
    return e2;
  });
}
class v {
  constructor(e2) {
    this.recentlyUsedQueries = null, this.featureSetQueryInterceptor = null, this._idstates = [], this._parent = null, this._wset = null, this._mainSetInUse = null, this._maxProcessing = 200, this._maxQuery = 500, this._totalCount = -1, this._databaseType = o$2.NotEvaluated, this._databaseTypeProbed = null, this.declaredRootClass = "esri.arcade.featureset.support.FeatureSet", this._featureCache = [], this.types = null, this.fields = null, this.geometryType = "", this.objectIdField = "", this.globalIdField = "", this.spatialReference = null, this.hasM = false, this.hasZ = false, this._transparent = false, this.loaded = false, this._loadPromise = null, this._fieldsIndex = null, e2 && e2.lrucache && (this.recentlyUsedQueries = e2.lrucache), e2 && e2.interceptor && (this.featureSetQueryInterceptor = e2.interceptor);
  }
  optimisePagingFeatureQueries(e2) {
    this._parent && this._parent.optimisePagingFeatureQueries(e2);
  }
  _hasMemorySource() {
    return true;
  }
  prop(e2, t2) {
    return t2 === void 0 ? this[e2] : (this[e2] !== void 0 && (this[e2] = t2), this);
  }
  end() {
    return this._parent !== null && this._parent._transparent === true ? this._parent.end() : this._parent;
  }
  _ensureLoaded() {
    return this.load();
  }
  load() {
    return this._loadPromise === null && (this._loadPromise = l$1((e2, t2) => {
      if (this._parent.loaded === true)
        return this._initialiseFeatureSet(), void e2(this);
      this._parent.load().then(() => {
        try {
          this._initialiseFeatureSet(), e2(this);
        } catch (r) {
          t2(r);
        }
      }, t2);
    })), this._loadPromise;
  }
  _initialiseFeatureSet() {
    this._parent !== null ? (this.fields = this._parent.fields.slice(0), this.geometryType = this._parent.geometryType, this.objectIdField = this._parent.objectIdField, this.globalIdField = this._parent.globalIdField, this.spatialReference = this._parent.spatialReference, this.hasM = this._parent.hasM, this.hasZ = this._parent.hasZ, this.typeIdField = this._parent.typeIdField, this.types = this._parent.types) : (this.fields = [], this.typeIdField = "", this.objectIdField = "", this.globalIdField = "", this.spatialReference = new k({ wkid: 4326 }), this.geometryType = I.point);
  }
  getField(e2, t2) {
    let r;
    return (t2 = t2 || this.fields) && (e2 = e2.toLowerCase(), t2.some((t3) => (t3 && t3.name.toLowerCase() === e2 && (r = t3), !!r))), r;
  }
  getFieldsIndex() {
    return this._fieldsIndex === null && (this._fieldsIndex = new e(this.fields)), this._fieldsIndex;
  }
  _maxProcessingRate() {
    return this._parent !== null ? Math.min(this._maxProcessing, this._parent._maxProcessingRate()) : Math.min(this._maxProcessing, this._maxQueryRate());
  }
  _maxQueryRate() {
    return this._parent !== null ? Math.max(this._maxQuery, this._parent._maxQueryRate()) : this._maxQuery;
  }
  _checkCancelled(e2) {
    if (e2 !== null && e2.aborted)
      throw new Error("Operation has been cancelled.");
  }
  nativeCapabilities() {
    return this._parent.nativeCapabilities();
  }
  _canDoAggregates(e2, r, n2, s2, i2) {
    return this._parent === null ? x$1(false) : this._parent._canDoAggregates(e2, r, n2, s2, i2);
  }
  _getAggregatePagesDataSourceDefinition(e2, t2, n2, s2, i2, a2, h2) {
    return this._parent === null ? L$1(new Error("Should never be called")) : this._parent._getAggregatePagesDataSourceDefinition(e2, t2, n2, s2, i2, a2, h2);
  }
  _getAgregagtePhysicalPage(e2, t2, n2) {
    return this._parent === null ? L$1(new Error("Should never be called")) : this._parent._getAgregagtePhysicalPage(e2, t2, n2);
  }
  databaseType() {
    if (this._databaseType === o$2.NotEvaluated) {
      if (a$1.applicationCache !== null) {
        const e2 = a$1.applicationCache.getDatabaseType(this._cacheableFeatureSetSourceKey());
        if (e2 !== null)
          return e2;
      }
      if (this._databaseTypeProbed !== null)
        return this._databaseTypeProbed;
      const t2 = [{ thetype: o$2.SqlServer, testwhere: "(CAST( '2015-01-01' as DATETIME) = CAST( '2015-01-01' as DATETIME)) AND OBJECTID<0" }, { thetype: o$2.Oracle, testwhere: "(TO_DATE('2003-11-18','YYYY-MM-DD') = TO_DATE('2003-11-18','YYYY-MM-DD')) AND OBJECTID<0" }, { thetype: o$2.StandardisedNoInterval, testwhere: "(date '2015-01-01 10:10:10' = date '2015-01-01 10:10:10') AND OBJECTID<0" }];
      let r = l$1((e2, r2) => {
        this._getDatabaseTypeImpl(t2, 0).then((t3) => {
          this._databaseType = t3, e2(this._databaseType);
        }, (e3) => {
          r2(e3);
        });
      });
      return a$1.applicationCache !== null && (a$1.applicationCache.setDatabaseType(this._cacheableFeatureSetSourceKey(), r), r = r.catch((e2) => {
        throw a$1.applicationCache.clearDatabaseType(this._cacheableFeatureSetSourceKey()), e2;
      })), this._databaseTypeProbed = r, this._databaseTypeProbed;
    }
    return x$1(this._databaseType);
  }
  _cacheableFeatureSetSourceKey() {
    return "MUSTBESET";
  }
  _getDatabaseTypeImpl(e2, r) {
    return r >= e2.length ? x$1(o$2.StandardisedNoInterval) : this._runDatabaseProbe(e2[r].testwhere).then((t2) => t2 === true ? e2[r].thetype : this._getDatabaseTypeImpl(e2, r + 1));
  }
  _runDatabaseProbe(e2) {
    return this._parent !== null ? this._parent._runDatabaseProbe(e2) : L$1(new Error("Not Implemented"));
  }
  isTable() {
    return this._parent.isTable();
  }
  _featureFromCache(e2) {
    if (this._featureCache[e2] !== void 0)
      return this._featureCache[e2];
  }
  _isInFeatureSet(e2) {
    return l$2.Unknown;
  }
  _getSet(e2) {
    throw new Error("Not implemented in abstract class");
  }
  _getFeature(e2, n2, s2) {
    try {
      return this._checkCancelled(s2), this._featureFromCache(n2) !== void 0 ? x$1(this._featureFromCache(n2)) : this._getFeatures(e2, n2, this._maxProcessingRate(), s2).then(() => (this._checkCancelled(s2), this._featureFromCache(n2) !== void 0 ? this._featureFromCache(n2) : L$1(new Error("Feature Not Found"))));
    } catch (i2) {
      return L$1(i2);
    }
  }
  _getFeatureBatch(e2, t$1) {
    try {
      this._checkCancelled(t$1);
      const r = new t([], e2, false, null), n2 = [];
      return this._getFeatures(r, -1, e2.length, t$1).then(() => {
        this._checkCancelled(t$1);
        for (const t2 of e2)
          this._featureFromCache(t2) !== void 0 && n2.push(this._featureFromCache(t2));
        return n2;
      });
    } catch (n2) {
      return L$1(n2);
    }
  }
  _getFeatures(e2, r, n2, s2) {
    return x$1("success");
  }
  _getFilteredSet(e2, t2, r, n2, s2) {
    throw new Error("Not implemented in abstract class");
  }
  _refineSetBlock(e2, n2, s2) {
    try {
      if (this._checkIfNeedToExpandCandidatePage(e2, this._maxQueryRate()) === true)
        return this._expandPagedSet(e2, this._maxQueryRate(), 0, 0, s2).then(() => this._refineSetBlock(e2, n2, s2));
      this._checkCancelled(s2);
      const r = e2._candidates.length;
      this._refineKnowns(e2, n2);
      let i2 = r - e2._candidates.length;
      return e2._candidates.length === 0 || i2 >= n2 ? x$1(e2) : this._refineIfParentKnown(e2, n2 - i2, s2).then(() => {
        if (this._checkCancelled(s2), this._refineKnowns(e2, n2 - i2), i2 = r - e2._candidates.length, i2 < n2 && e2._candidates.length > 0) {
          const t2 = n2 - i2, r2 = this._prepareFetchAndRefineSet(e2._candidates);
          return this._fetchAndRefineFeatures(r2, r2.length > t2 ? t2 : e2._candidates.length, s2).then(() => (this._checkCancelled(s2), this._refineKnowns(e2, n2 - i2), e2));
        }
        return e2;
      });
    } catch (i2) {
      return L$1(i2);
    }
  }
  _fetchAndRefineFeatures(e2, t2, r) {
    return null;
  }
  _prepareFetchAndRefineSet(e2) {
    const t2 = [];
    for (let r = 0; r < e2.length; r++)
      this._isPhysicalFeature(e2[r]) && t2.push(e2[r]);
    return t2;
  }
  _isPhysicalFeature(e2) {
    return this._parent === null || this._parent._isPhysicalFeature(e2);
  }
  _refineKnowns(e2, t2) {
    let r = 0, n2 = null;
    const s2 = [];
    t2 = this._maxQueryRate();
    for (let i2 = 0; i2 < e2._candidates.length && e2._candidates[i2] !== "GETPAGES"; i2++) {
      let a2 = false;
      const l2 = this._candidateIdTransform(e2._candidates[i2]);
      l2 !== e2._candidates[i2] && (a2 = true);
      const u2 = this._isInFeatureSet(l2);
      if (u2 === l$2.InFeatureSet)
        a2 === true ? e2._known.indexOf(l2) < 0 && (e2._known.push(l2), r += 1) : (e2._known.push(e2._candidates[i2]), r += 1), n2 === null ? n2 = { start: i2, end: i2 } : n2.end === i2 - 1 ? n2.end = i2 : (s2.push(n2), n2 = { start: i2, end: i2 });
      else if (u2 === l$2.NotInFeatureSet)
        n2 === null ? n2 = { start: i2, end: i2 } : n2.end === i2 - 1 ? n2.end = i2 : (s2.push(n2), n2 = { start: i2, end: i2 }), r += 1;
      else if (u2 === l$2.Unknown && (r += 1, e2._ordered === true))
        break;
      if (r >= t2)
        break;
    }
    n2 !== null && s2.push(n2);
    for (let i2 = s2.length - 1; i2 >= 0; i2--)
      e2._candidates.splice(s2[i2].start, s2[i2].end - s2[i2].start + 1);
  }
  _refineIfParentKnown(e2, t$1, r) {
    const n2 = new t([], [], e2._ordered, null);
    return n2._candidates = e2._candidates.slice(0), this._parent._refineSetBlock(n2, t$1, r);
  }
  _candidateIdTransform(e2) {
    return this._parent._candidateIdTransform(e2);
  }
  _checkIfNeedToExpandKnownPage(e2, t2) {
    if (e2.pagesDefinition === null)
      return false;
    let r = 0;
    for (let n2 = e2._lastFetchedIndex; n2 < e2._known.length; n2++) {
      if (e2._known[n2] === "GETPAGES")
        return true;
      if (this._featureCache[e2._known[n2]] === void 0 && (r += 1, r >= t2))
        break;
    }
    return false;
  }
  _checkIfNeedToExpandCandidatePage(e2, t2) {
    if (e2.pagesDefinition === null)
      return false;
    let r = 0;
    for (let n2 = 0; n2 < e2._candidates.length; n2++) {
      if (e2._candidates[n2] === "GETPAGES")
        return true;
      if (r += 1, r >= t2)
        break;
    }
    return false;
  }
  _expandPagedSet(e2, t2, n2, s2, i2) {
    return this._parent === null ? L$1(new Error("Parent Paging not implemented")) : this._parent._expandPagedSet(e2, t2, n2, s2, i2);
  }
  _expandPagedSetFeatureSet(e2, r, n2, s2, i2) {
    return e2._known.length > 0 && e2._known[e2._known.length - 1] === "GETPAGES" && (s2 = 1), s2 === 0 && e2._candidates.length > 0 && e2._candidates[e2._candidates.length - 1] === "GETPAGES" && (s2 = 2), s2 === 0 ? x$1("finished") : this._getPage(e2, s2, i2).then((t2) => n2 + t2 < r ? this._expandPagedSet(e2, r, n2 + t2, 0, i2) : "success");
  }
  _getPage(e2, r, n2) {
    const s2 = r === 1 ? e2._known : e2._candidates;
    if (e2.pagesDefinition.internal.set.length > e2.pagesDefinition.resultOffset || e2.pagesDefinition.internal.fullyResolved === true) {
      s2.length = s2.length - 1;
      let r2 = 0;
      for (let t2 = 0; t2 < e2.pagesDefinition.resultRecordCount && !(e2.pagesDefinition.resultOffset + t2 >= e2.pagesDefinition.internal.set.length); t2++)
        s2[s2.length] = e2.pagesDefinition.internal.set[e2.pagesDefinition.resultOffset + t2], r2++;
      e2.pagesDefinition.resultOffset += r2;
      let n3 = false;
      return e2.pagesDefinition.internal.fullyResolved === true && e2.pagesDefinition.internal.set.length <= e2.pagesDefinition.resultOffset && (n3 = true), n3 === false && s2.push("GETPAGES"), x$1(r2);
    }
    return this._getPhysicalPage(e2, r, n2).then(() => this._getPage(e2, r, n2));
  }
  _getPhysicalPage(e2, t2, r) {
    return null;
  }
  _clonePageDefinition(e2) {
    return this._parent === null ? null : this._parent._clonePageDefinition(e2);
  }
  _first(e2) {
    return this.iterator(e2).next();
  }
  first(e2) {
    return this._first(e2);
  }
  calculateStatistic(e2, t2, r, n2) {
    return this._ensureLoaded().then(() => this._stat(e2, t2, "", null, null, r, n2).then((s2) => s2.calculated === false ? this._manualStat(e2, t2, r, n2).then((e3) => e3.result) : s2.result));
  }
  _manualStat(e2, r, n2, s2) {
    switch (e2.toLowerCase()) {
      case "count":
        return w(this, s2).then((e3) => ({ calculated: true, result: e3 }));
      case "distinct":
        return C(this, r, n2).then((e3) => ({ calculated: true, result: e3 }));
      case "avg":
      case "mean":
        return M(this, r, s2).then((e3) => ({ calculated: true, result: e3 }));
      case "stdev":
        return y(this, r, s2).then((e3) => ({ calculated: true, result: e3 }));
      case "variance":
        return x(this, r, s2).then((e3) => ({ calculated: true, result: e3 }));
      case "sum":
        return j(this, r, s2).then((e3) => ({ calculated: true, result: e3 }));
      case "min":
        return d(this, r, s2).then((e3) => ({ calculated: true, result: e3 }));
      case "max":
        return v$1(this, r, s2).then((e3) => ({ calculated: true, result: e3 }));
      default:
        return x$1({ calculated: true, result: 0 });
    }
  }
  _stat(e2, t2, r, n2, s2, i2, a2) {
    return this._parent._stat(e2, t2, r, n2, s2, i2, a2).then((h2) => h2.calculated === false ? s2 === null && r === "" && n2 === null ? this._manualStat(e2, t2, i2, a2) : { calculated: false } : h2);
  }
  _unionAllGeomSelf(t2) {
    const r = this.iterator(this._defaultTracker(t2)), n2 = [];
    return l$1((e2, t3) => {
      this._unionShapeInBatches(n2, r, e2, t3);
    });
  }
  _unionAllGeom(t2) {
    return l$1((e2, r) => {
      const n2 = this.iterator(this._defaultTracker(t2)), s2 = [];
      this._unionShapeInBatches(s2, n2, e2, r);
    });
  }
  _unionShapeInBatches(e2, t2, r, n2) {
    t2.next().then((s2) => {
      try {
        s2 !== null && s2.geometry !== null && e2.push(s2.geometry), e2.length > 30 || s2 === null && e2.length > 1 ? k$1(e2).then((i2) => {
          try {
            s2 === null ? r(i2) : (e2 = [i2], this._unionShapeInBatches(e2, t2, r, n2));
          } catch (a2) {
            n2(a2);
          }
        }, n2) : s2 === null ? e2.length === 1 ? r(e2[0]) : r(null) : this._unionShapeInBatches(e2, t2, r, n2);
      } catch (i2) {
        n2(i2);
      }
    }, n2);
  }
  iterator(e2) {
    return new n$1(this, e2);
  }
  intersection(e2, t2 = false) {
    return v._featuresetFunctions.intersection.bind(this)(e2, t2);
  }
  difference(e2, t2 = false, r = true) {
    return v._featuresetFunctions.difference.bind(this)(e2, t2, r);
  }
  symmetricDifference(e2, t2 = false, r = true) {
    return v._featuresetFunctions.symmetricDifference.bind(this)(e2, t2, r);
  }
  morphShape(e2, t2, r = "unknown", n2 = null) {
    return v._featuresetFunctions.morphShape.bind(this)(e2, t2, r, n2);
  }
  morphShapeAndAttributes(e2, t2, r = "unknown") {
    return v._featuresetFunctions.morphShapeAndAttributes.bind(this)(e2, t2, r);
  }
  union(e2, t2 = false) {
    return v._featuresetFunctions.union.bind(this)(e2, t2);
  }
  intersects(e2) {
    return v._featuresetFunctions.intersects.bind(this)(e2);
  }
  envelopeIntersects(e2) {
    return v._featuresetFunctions.envelopeIntersects.bind(this)(e2);
  }
  contains(e2) {
    return v._featuresetFunctions.contains.bind(this)(e2);
  }
  overlaps(e2) {
    return v._featuresetFunctions.overlaps.bind(this)(e2);
  }
  relate(e2, t2) {
    return v._featuresetFunctions.relate.bind(this)(e2, t2);
  }
  within(e2) {
    return v._featuresetFunctions.within.bind(this)(e2);
  }
  touches(e2) {
    return v._featuresetFunctions.touches.bind(this)(e2);
  }
  top(e2) {
    return v._featuresetFunctions.top.bind(this)(e2);
  }
  crosses(e2) {
    return v._featuresetFunctions.crosses.bind(this)(e2);
  }
  buffer(e2, t2, r, n2 = true) {
    return v._featuresetFunctions.buffer.bind(this)(e2, t2, r, n2);
  }
  filter(e2, t2 = null) {
    return v._featuresetFunctions.filter.bind(this)(e2, t2);
  }
  orderBy(e2) {
    return v._featuresetFunctions.orderBy.bind(this)(e2);
  }
  dissolve(e2, t2) {
    return v._featuresetFunctions.dissolve.bind(this)(e2, t2);
  }
  groupby(e2, t2) {
    return v._featuresetFunctions.groupby.bind(this)(e2, t2);
  }
  reduce(t2, r = null, n2) {
    return l$1((e2, s2) => {
      this._reduceImpl(this.iterator(this._defaultTracker(n2)), t2, r, 0, e2, s2, 0);
    });
  }
  _reduceImpl(e2, t2, r, s2, i2, a2, h2) {
    try {
      if (++h2 > 1e3)
        return void setTimeout(() => {
          h2 = 0, this._reduceImpl(e2, t2, r, s2, i2, a2, h2);
        });
      e2.next().then((l2) => {
        try {
          if (l2 === null)
            i2(r);
          else {
            const u2 = t2(r, l2, s2, this);
            U$1(u2) ? u2.then((r2) => {
              this._reduceImpl(e2, t2, r2, s2 + 1, i2, a2, h2);
            }, a2) : this._reduceImpl(e2, t2, u2, s2 + 1, i2, a2, h2);
          }
        } catch (u2) {
          a2(u2);
        }
      }, a2);
    } catch (l2) {
      a2(l2);
    }
  }
  removeField(e2) {
    return v._featuresetFunctions.removeField.bind(this)(e2);
  }
  addField(e2, t2, r = null) {
    return v._featuresetFunctions.addField.bind(this)(e2, t2, r);
  }
  sumArea(e2, t2 = false, r) {
    const n2 = g$3(e2);
    return this.reduce((e3, r2) => r2.geometry === null ? 0 : t2 ? K(r2.geometry, n2).then((t3) => e3 + t3) : W(r2.geometry, n2).then((t3) => e3 + t3), 0, r);
  }
  sumLength(e2, t2 = false, r) {
    const n2 = G(e2);
    return this.reduce((e3, r2) => r2.geometry === null ? 0 : t2 ? M$1(r2.geometry, n2).then((t3) => e3 + t3) : F(r2.geometry, n2).then((t3) => e3 + t3), 0, r);
  }
  _substituteVars(e2, t2) {
    if (t2 !== null) {
      const r = {};
      for (const e3 in t2)
        r[e3.toLowerCase()] = t2[e3];
      e2.parameters = r;
    }
  }
  distinct(e2, t2 = 1e3, r = null, n2) {
    return this.load().then(() => {
      const s2 = f$2.create(e2, this.getFieldsIndex());
      return this._substituteVars(s2, r), this.calculateStatistic("distinct", s2, t2, this._defaultTracker(n2));
    });
  }
  min(e2, t2 = null, r) {
    return this.load().then(() => {
      const n2 = f$2.create(e2, this.getFieldsIndex());
      return this._substituteVars(n2, t2), this.calculateStatistic("min", n2, -1, this._defaultTracker(r));
    });
  }
  max(e2, t2 = null, r) {
    return this.load().then(() => {
      const n2 = f$2.create(e2, this.getFieldsIndex());
      return this._substituteVars(n2, t2), this.calculateStatistic("max", n2, -1, this._defaultTracker(r));
    });
  }
  avg(e2, t2 = null, r) {
    return this.load().then(() => {
      const n2 = f$2.create(e2, this.getFieldsIndex());
      return this._substituteVars(n2, t2), this.calculateStatistic("avg", n2, -1, this._defaultTracker(r));
    });
  }
  sum(e2, t2 = null, r) {
    return this.load().then(() => {
      const n2 = f$2.create(e2, this.getFieldsIndex());
      return this._substituteVars(n2, t2), this.calculateStatistic("sum", n2, -1, this._defaultTracker(r));
    });
  }
  stdev(e2, t2 = null, r) {
    return this.load().then(() => {
      const n2 = f$2.create(e2, this.getFieldsIndex());
      return this._substituteVars(n2, t2), this.calculateStatistic("stdev", n2, -1, this._defaultTracker(r));
    });
  }
  variance(e2, t2 = null, r) {
    return this.load().then(() => {
      const n2 = f$2.create(e2, this.getFieldsIndex());
      return this._substituteVars(n2, t2), this.calculateStatistic("variance", n2, -1, this._defaultTracker(r));
    });
  }
  count(e2) {
    return this.load().then(() => this.calculateStatistic("count", f$2.create("1", this.getFieldsIndex()), -1, this._defaultTracker(e2)));
  }
  _defaultTracker(e2) {
    return e2 || { aborted: false };
  }
  forEach(t2, r) {
    return l$1((e2, n2) => {
      this._forEachImpl(this.iterator(this._defaultTracker(r)), t2, this, e2, n2, 0);
    });
  }
  _forEachImpl(e2, t2, r, s2, i2, a2) {
    try {
      if (++a2 > 1e3)
        return void setTimeout(() => {
          a2 = 0, this._forEachImpl(e2, t2, r, s2, i2, a2);
        }, 0);
      e2.next().then((h2) => {
        try {
          if (h2 === null)
            s2(r);
          else {
            const l2 = t2(h2);
            l2 == null ? this._forEachImpl(e2, t2, r, s2, i2, a2) : U$1(l2) ? l2.then(() => {
              try {
                this._forEachImpl(e2, t2, r, s2, i2, a2);
              } catch (n2) {
                i2(n2);
              }
            }, i2) : this._forEachImpl(e2, t2, r, s2, i2, a2);
          }
        } catch (l2) {
          i2(l2);
        }
      }, i2);
    } catch (h2) {
      i2(h2);
    }
  }
  convertToJSON(e2) {
    const t2 = { layerDefinition: { geometryType: this.geometryType, fields: [] }, featureSet: { features: [], geometryType: this.geometryType } };
    for (let r = 0; r < this.fields.length; r++)
      t2.layerDefinition.fields.push(y$1(this.fields[r]));
    return this.reduce((e3, r) => {
      const n2 = { geometry: r.geometry && r.geometry.toJSON(), attributes: {} };
      for (const t3 in r.attributes)
        n2.attributes[t3] = r.attributes[t3];
      return t2.featureSet.features.push(n2), 1;
    }, 0, e2).then(() => t2);
  }
  castToText() {
    return "object, FeatureSet";
  }
  queryAttachments(e2, t2, r, n2) {
    return this._parent.queryAttachments(e2, t2, r, n2);
  }
  serviceUrl() {
    return this._parent.serviceUrl();
  }
  subtypes() {
    return this.typeIdField ? { subtypeField: this.typeIdField, subtypes: this.types ? this.types.map((e2) => ({ name: e2.name, code: e2.id })) : [] } : null;
  }
  relationshipMetaData() {
    return this._parent.relationshipMetaData();
  }
  get gdbVersion() {
    return this._parent ? this._parent.gdbVersion : "";
  }
  schema() {
    const e2 = [];
    for (const t2 of this.fields)
      e2.push(y$1(t2));
    return { objectIdField: this.objectIdField, globalIdField: this.globalIdField, geometryType: b[this.geometryType] === void 0 ? "" : b[this.geometryType], fields: e2 };
  }
  convertToText(e2, r) {
    return e2 === "schema" ? this._ensureLoaded().then(() => JSON.stringify(this.schema())) : e2 === "featureset" ? this._ensureLoaded().then(() => {
      const e3 = [];
      return this.reduce((t2, r2) => {
        const n2 = { geometry: r2.geometry ? r2.geometry.toJSON() : null, attributes: r2.attributes };
        return n2.geometry !== null && n2.geometry.spatialReference && delete n2.geometry.spatialReference, e3.push(n2), 1;
      }, 0, r).then(() => {
        const t2 = this.schema();
        return t2.features = e3, t2.spatialReference = this.spatialReference.toJSON(), JSON.stringify(t2);
      });
    }) : x$1(this.castToText());
  }
  getFeatureByObjectId(e2, t2) {
    return this._parent.getFeatureByObjectId(e2, t2);
  }
  getOwningSystemUrl() {
    return this._parent.getOwningSystemUrl();
  }
  getIdentityUser() {
    return this._parent.getIdentityUser();
  }
}
v._featuresetFunctions = {};
class n extends v {
  constructor(e2) {
    super(e2), this.declaredClass = "esri.layers.featureset.sources.Empty", this._maxProcessing = 1e3, this._wset = new t([], [], false, null), this._parent = e2.parentfeatureset, this._databaseType = o$2.Standardised;
  }
  _getSet() {
    return x$1(this._wset);
  }
  optimisePagingFeatureQueries() {
  }
  _isInFeatureSet() {
    return l$2.NotInFeatureSet;
  }
  _getFeature() {
    return L$1(new Error("No Feature Found in EmptySet"));
  }
  queryAttachments() {
    return x$1([]);
  }
  _getFeatures() {
    return x$1("success");
  }
  _featureFromCache() {
    return null;
  }
  _fetchAndRefineFeatures() {
    return L$1(new Error("Fetch and Refine should not be called in this featureset"));
  }
  _getFilteredSet() {
    return x$1(new t([], [], false, null));
  }
  _stat(e2, t2, r, s2, u2, a2, n2) {
    return this._manualStat(e2, t2, a2, n2);
  }
  _canDoAggregates() {
    return x$1(false);
  }
}
class g extends v {
  constructor(e2) {
    super(e2), this._relation = "", this._relationGeom = null, this._relationString = "", this.declaredClass = "esri.arcade.featureset.actions.SpatialFilter", this._relationString = e2.relationString, this._parent = e2.parentfeatureset, this._maxProcessing = 40, this._relation = e2.relation, this._relationGeom = e2.relationGeom;
  }
  _getSet(t$1) {
    return this._wset === null ? this._ensureLoaded().then(() => this._parent._getFilteredSet(this._relation !== "esriSpatialRelRelation" ? this._relation : this._relation + ":" + this._relationString, this._relationGeom, null, null, t$1)).then((e2) => (this._checkCancelled(t$1), this._wset = new t(e2._candidates.slice(0), e2._known.slice(0), e2._ordered, this._clonePageDefinition(e2.pagesDefinition)), this._wset)) : x$1(this._wset);
  }
  _isInFeatureSet(e2) {
    let t2 = this._parent._isInFeatureSet(e2);
    return t2 === l$2.NotInFeatureSet ? t2 : (t2 = this._idstates[e2], t2 === void 0 ? l$2.Unknown : t2);
  }
  _getFeature(e2, t2, r) {
    return this._parent._getFeature(e2, t2, r);
  }
  _getFeatures(e2, t2, r, i2) {
    return this._parent._getFeatures(e2, t2, r, i2);
  }
  _featureFromCache(e2) {
    return this._parent._featureFromCache(e2);
  }
  executeSpatialRelationTest(t2) {
    if (t2.geometry === null)
      return x$1(false);
    switch (this._relation) {
      case "esriSpatialRelEnvelopeIntersects": {
        const e2 = F$1(this._relationGeom), r = F$1(t2.geometry);
        return g$4(e2, r);
      }
      case "esriSpatialRelIntersects":
        return g$4(this._relationGeom, t2.geometry);
      case "esriSpatialRelContains":
        return p$2(this._relationGeom, t2.geometry);
      case "esriSpatialRelOverlaps":
        return O(this._relationGeom, t2.geometry);
      case "esriSpatialRelWithin":
        return x$2(this._relationGeom, t2.geometry);
      case "esriSpatialRelTouches":
        return A(this._relationGeom, t2.geometry);
      case "esriSpatialRelCrosses":
        return w$2(this._relationGeom, t2.geometry);
      case "esriSpatialRelRelation":
        return h$2(this._relationGeom, t2.geometry, this._relationString);
    }
  }
  _fetchAndRefineFeatures(e2, r, n2) {
    const a2 = new t([], e2, false, null), s2 = Math.min(r, e2.length);
    return this._parent._getFeatures(a2, -1, s2, n2).then(() => {
      this._checkCancelled(n2);
      const r2 = [];
      for (let t2 = 0; t2 < s2; t2++) {
        const i2 = this._parent._featureFromCache(e2[t2]);
        r2.push(this.executeSpatialRelationTest(i2));
      }
      return s$2(r2);
    }).then((t2) => {
      for (let n3 = 0; n3 < r; n3++)
        t2[n3] === true ? this._idstates[e2[n3]] = l$2.InFeatureSet : this._idstates[e2[n3]] = l$2.NotInFeatureSet;
      return "success";
    });
  }
  _getFilteredSet(e2, t$1, r, i2, n2) {
    return this._ensureLoaded().then(() => this._parent._getFilteredSet(this._relation !== "esriSpatialRelRelation" ? this._relation : this._relation + ":" + this._relationString, this._relationGeom, r, i2, n2)).then((e3) => {
      let r2;
      return this._checkCancelled(n2), r2 = t$1 !== null ? new t(e3._candidates.slice(0).concat(e3._known.slice(0)), [], e3._ordered, this._clonePageDefinition(e3.pagesDefinition)) : new t(e3._candidates.slice(0), e3._known.slice(0), e3._ordered, this._clonePageDefinition(e3.pagesDefinition)), r2;
    });
  }
  _stat(t2, r, i2, n2, a2, s2, l2) {
    return i2 !== "" ? x$1({ calculated: false }) : this._parent._stat(t2, r, this._relation !== "esriSpatialRelRelation" ? this._relation : this._relation + ":" + this._relationString, this._relationGeom, a2, s2, l2).then((e2) => e2.calculated === false ? a2 === null && i2 === "" && n2 === null ? this._manualStat(t2, r, s2, l2) : { calculated: false } : e2);
  }
  _canDoAggregates(t2, r, i2, n2, a2) {
    return i2 !== "" || n2 !== null || this._parent === null ? x$1(false) : this._parent._canDoAggregates(t2, r, this._relation !== "esriSpatialRelRelation" ? this._relation : this._relation + ":" + this._relationString, this._relationGeom, a2);
  }
  _getAggregatePagesDataSourceDefinition(e2, t2, i2, n2, a2, s2, l2) {
    return this._parent === null ? L$1(new Error("Should never be called")) : this._parent._getAggregatePagesDataSourceDefinition(e2, t2, this._relation !== "esriSpatialRelRelation" ? this._relation : this._relation + ":" + this._relationString, this._relationGeom, a2, s2, l2);
  }
  static registerAction() {
    v._featuresetFunctions.intersects = function(e2) {
      return e2 == null ? new n({ parentfeatureset: this }) : new g({ parentfeatureset: this, relation: "esriSpatialRelIntersects", relationGeom: e2 });
    }, v._featuresetFunctions.envelopeIntersects = function(e2) {
      return e2 == null ? new n({ parentfeatureset: this }) : new g({ parentfeatureset: this, relation: "esriSpatialRelEnvelopeIntersects", relationGeom: e2 });
    }, v._featuresetFunctions.contains = function(e2) {
      return e2 == null ? new n({ parentfeatureset: this }) : new g({ parentfeatureset: this, relation: "esriSpatialRelContains", relationGeom: e2 });
    }, v._featuresetFunctions.overlaps = function(e2) {
      return e2 == null ? new n({ parentfeatureset: this }) : new g({ parentfeatureset: this, relation: "esriSpatialRelOverlaps", relationGeom: e2 });
    }, v._featuresetFunctions.within = function(e2) {
      return e2 == null ? new n({ parentfeatureset: this }) : new g({ parentfeatureset: this, relation: "esriSpatialRelWithin", relationGeom: e2 });
    }, v._featuresetFunctions.touches = function(e2) {
      return e2 == null ? new n({ parentfeatureset: this }) : new g({ parentfeatureset: this, relation: "esriSpatialRelTouches", relationGeom: e2 });
    }, v._featuresetFunctions.crosses = function(e2) {
      return e2 == null ? new n({ parentfeatureset: this }) : new g({ parentfeatureset: this, relation: "esriSpatialRelCrosses", relationGeom: e2 });
    }, v._featuresetFunctions.relate = function(e2, t2) {
      return e2 == null ? new n({ parentfeatureset: this }) : new g({ parentfeatureset: this, relation: "esriSpatialRelRelation", relationGeom: e2, relationString: t2 });
    };
  }
}
export { E, a, a$1 as b, n as c, f$1 as f, g, h$1 as h, i$1 as i, l, m, n$2 as n, o$1 as o, p, s$1 as s, t, u, v, w$1 as w };
