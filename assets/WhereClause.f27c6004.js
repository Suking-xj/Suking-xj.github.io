var __pow = Math.pow;
import { dr as o$1, ai as t$2 } from "./vendor.74d5941c.js";
import { o as o$2 } from "./_commonjsHelpers.f2a458db.js";
function a(a2, n2) {
  const t2 = l$1[a2.toLowerCase()];
  if (t2 == null)
    throw new Error("Function Not Recognised");
  if (n2.length < t2.minParams || n2.length > t2.maxParams)
    throw new Error(`Invalid Parameter count for call to ${a2.toUpperCase()}`);
  return t2.evaluate(n2);
}
function n$2(a2, n2) {
  const t2 = l$1[a2.toLowerCase()];
  return t2 != null && n2 >= t2.minParams && n2 <= t2.maxParams;
}
const l$1 = { min: { minParams: 1, maxParams: 1, evaluate: (a2) => a2[0] == null ? null : Math.min.apply(Math, a2[0]) }, max: { minParams: 1, maxParams: 1, evaluate: (a2) => a2[0] == null ? null : Math.max.apply(Math, a2[0]) }, avg: { minParams: 1, maxParams: 1, evaluate: (a2) => a2[0] == null ? null : t$1(a2[0]) }, sum: { minParams: 1, maxParams: 1, evaluate: (a2) => a2[0] == null ? null : r$1(a2[0]) }, stddev: { minParams: 1, maxParams: 1, evaluate: (a2) => a2[0] == null ? null : Math.sqrt(e$2(a2[0])) }, count: { minParams: 1, maxParams: 1, evaluate: (a2) => a2[0] == null ? null : a2[0].length }, var: { minParams: 1, maxParams: 1, evaluate: (a2) => a2[0] == null ? null : e$2(a2[0]) } };
function t$1(a2) {
  let n2 = 0;
  for (let l2 = 0; l2 < a2.length; l2++)
    n2 += a2[l2];
  return n2 / a2.length;
}
function r$1(a2) {
  let n2 = 0;
  for (let l2 = 0; l2 < a2.length; l2++)
    n2 += a2[l2];
  return n2;
}
function e$2(a2) {
  const n2 = t$1(a2), l2 = a2.length;
  let r2 = 0;
  for (const t2 of a2)
    r2 += __pow(t2 - n2, 2);
  return l2 > 1 ? r2 / (l2 - 1) : 0;
}
class e$1 {
  constructor() {
    this.op = "+", this.day = 0, this.second = 0, this.hour = 0, this.month = 0, this.year = 0, this.minute = 0;
  }
  static fixDefaults(a2) {
    if (a2.precision !== null || a2.secondary !== null)
      throw new Error("Primary and Secondary SqlInterval qualifiers not supported");
  }
  static createFromMilliseconds(a2) {
    const t2 = new e$1();
    return t2.second = a2 / 1e3, t2;
  }
  static createFromValueAndQualifer(a2, t2, r2) {
    let n2 = null;
    const l2 = new e$1();
    if (l2.op = r2 === "-" ? "-" : "+", t2.type === "interval-period") {
      e$1.fixDefaults(t2);
      const r3 = new RegExp("^[0-9]{1,}$");
      if (t2.period === "year" || t2.period === "month")
        throw new Error("Year-Month Intervals not supported");
      if (!r3.test(a2))
        throw new Error("Illegal Interval");
      l2[t2.period] = parseFloat(a2);
    } else {
      if (e$1.fixDefaults(t2.start), e$1.fixDefaults(t2.end), t2.start.period === "year" || t2.start.period === "month")
        throw new Error("Year-Month Intervals not supported");
      if (t2.end.period === "year" || t2.end.period === "month")
        throw new Error("Year-Month Intervals not supported");
      switch (t2.start.period) {
        case "day":
          switch (t2.end.period) {
            case "hour":
              if (n2 = new RegExp("^[0-9]{1,} [0-9]{1,}$"), !n2.test(a2))
                throw new Error("Illegal Interval");
              l2[t2.start.period] = parseFloat(a2.split(" ")[0]), l2[t2.end.period] = parseFloat(a2.split(" ")[1]);
              break;
            case "minute":
              if (n2 = new RegExp("^[0-9]{1,} [0-9]{1,2}:[0-9]{1,}$"), !n2.test(a2))
                throw new Error("Illegal Interval");
              {
                l2[t2.start.period] = parseFloat(a2.split(" ")[0]);
                const e2 = a2.split(" ")[1].split(":");
                l2.hour = parseFloat(e2[0]), l2.minute = parseFloat(e2[1]);
              }
              break;
            case "second":
              if (n2 = new RegExp("^[0-9]{1,} [0-9]{1,2}:[0-9]{1,2}:[0-9]{1,}([.]{1}[0-9]{1,}){0,1}$"), !n2.test(a2))
                throw new Error("Illegal Interval");
              {
                l2[t2.start.period] = parseFloat(a2.split(" ")[0]);
                const e2 = a2.split(" ")[1].split(":");
                l2.hour = parseFloat(e2[0]), l2.minute = parseFloat(e2[1]), l2.second = parseFloat(e2[2]);
              }
              break;
            default:
              throw "Invalid Interval.";
          }
          break;
        case "hour":
          switch (t2.end.period) {
            case "minute":
              if (n2 = new RegExp("^[0-9]{1,}:[0-9]{1,}$"), !n2.test(a2))
                throw new Error("Illegal Interval");
              l2.hour = parseFloat(a2.split(":")[0]), l2.minute = parseFloat(a2.split(":")[1]);
              break;
            case "second":
              if (n2 = new RegExp("^[0-9]{1,}:[0-9]{1,2}:[0-9]{1,}([.]{1}[0-9]{1,}){0,1}$"), !n2.test(a2))
                throw new Error("Illegal Interval");
              {
                const e2 = a2.split(":");
                l2.hour = parseFloat(e2[0]), l2.minute = parseFloat(e2[1]), l2.second = parseFloat(e2[2]);
              }
              break;
            default:
              throw "Invalid Interval.";
          }
          break;
        case "minute":
          switch (t2.end.period) {
            case "second":
              if (n2 = new RegExp("^[0-9]{1,}:[0-9]{1,}([.]{1}[0-9]{1,}){0,1}$"), !n2.test(a2))
                throw new Error("Illegal Interval");
              {
                const e2 = a2.split(":");
                l2.minute = parseFloat(e2[0]), l2.second = parseFloat(e2[1]);
              }
              break;
            default:
              throw "Invalid Interval.";
          }
          break;
        default:
          throw "Invalid Interval.";
      }
    }
    return l2;
  }
  valueInMilliseconds() {
    return (this.op === "-" ? -1 : 1) * (1e3 * this.second + 60 * this.minute * 1e3 + 60 * this.hour * 60 * 1e3 + 24 * this.day * 60 * 60 * 1e3 + this.month * (365 / 12) * 24 * 60 * 60 * 1e3 + 365 * this.year * 24 * 60 * 60 * 1e3);
  }
}
function t(a2, e2) {
  const t2 = n$1[a2.toLowerCase()];
  if (t2 == null)
    throw new Error("Function Not Recognised");
  if (e2.length < t2.minParams || e2.length > t2.maxParams)
    throw new Error(`Invalid Parameter count for call to ${a2.toUpperCase()}`);
  return t2.evaluate(e2);
}
function r(a2, e2) {
  const t2 = n$1[a2.toLowerCase()];
  return t2 != null && e2 >= t2.minParams && e2 <= t2.maxParams;
}
const n$1 = { extract: { minParams: 2, maxParams: 2, evaluate: ([a2, e2]) => {
  if (e2 == null)
    return null;
  if (e2 instanceof Date)
    switch (a2.toUpperCase()) {
      case "SECOND":
        return e2.getSeconds();
      case "MINUTE":
        return e2.getMinutes();
      case "HOUR":
        return e2.getHours();
      case "DAY":
        return e2.getDate();
      case "MONTH":
        return e2.getMonth() + 1;
      case "YEAR":
        return e2.getFullYear();
    }
  throw new Error("Invalid Parameter for call to EXTRACT");
} }, substring: { minParams: 2, maxParams: 3, evaluate: (a2) => {
  if (a2.length === 2) {
    const [e2, t2] = a2;
    return e2 == null || t2 == null ? null : e2.toString().substring(t2 - 1);
  }
  if (a2.length === 3) {
    const [e2, t2, r2] = a2;
    return e2 == null || t2 == null || r2 == null ? null : r2 <= 0 ? "" : e2.toString().substring(t2 - 1, t2 + r2 - 1);
  }
} }, position: { minParams: 2, maxParams: 2, evaluate: ([a2, e2]) => a2 == null || e2 == null ? null : e2.indexOf(a2) + 1 }, trim: { minParams: 2, maxParams: 3, evaluate: (e2) => {
  const t2 = e2.length === 3, r2 = t2 ? e2[1] : " ", n2 = t2 ? e2[2] : e2[1];
  if (r2 == null || n2 == null)
    return null;
  const l2 = `(${o$1(r2)})`;
  switch (e2[0]) {
    case "BOTH":
      return n2.replace(new RegExp(`^${l2}*|${l2}*$`, "g"), "");
    case "LEADING":
      return n2.replace(new RegExp(`^${l2}*`, "g"), "");
    case "TRAILING":
      return n2.replace(new RegExp(`${l2}*$`, "g"), "");
  }
  throw new Error("Invalid Parameter for call to TRIM");
} }, abs: { minParams: 1, maxParams: 1, evaluate: (a2) => a2[0] == null ? null : Math.abs(a2[0]) }, ceiling: { minParams: 1, maxParams: 1, evaluate: (a2) => a2[0] == null ? null : Math.ceil(a2[0]) }, floor: { minParams: 1, maxParams: 1, evaluate: (a2) => a2[0] == null ? null : Math.floor(a2[0]) }, log: { minParams: 1, maxParams: 1, evaluate: (a2) => a2[0] == null ? null : Math.log(a2[0]) }, log10: { minParams: 1, maxParams: 1, evaluate: (a2) => a2[0] == null ? null : Math.log(a2[0]) * Math.LOG10E }, sin: { minParams: 1, maxParams: 1, evaluate: (a2) => a2[0] == null ? null : Math.sin(a2[0]) }, cos: { minParams: 1, maxParams: 1, evaluate: (a2) => a2[0] == null ? null : Math.cos(a2[0]) }, tan: { minParams: 1, maxParams: 1, evaluate: (a2) => a2[0] == null ? null : Math.tan(a2[0]) }, asin: { minParams: 1, maxParams: 1, evaluate: (a2) => a2[0] == null ? null : Math.asin(a2[0]) }, acos: { minParams: 1, maxParams: 1, evaluate: (a2) => a2[0] == null ? null : Math.acos(a2[0]) }, atan: { minParams: 1, maxParams: 1, evaluate: (a2) => a2[0] == null ? null : Math.atan(a2[0]) }, sign: { minParams: 1, maxParams: 1, evaluate: (a2) => a2[0] == null ? null : a2[0] > 0 ? 1 : a2[1] < 0 ? -1 : 0 }, power: { minParams: 2, maxParams: 2, evaluate: (a2) => a2[0] == null || a2[1] == null ? null : __pow(a2[0], a2[1]) }, mod: { minParams: 2, maxParams: 2, evaluate: (a2) => a2[0] == null || a2[1] == null ? null : a2[0] % a2[1] }, round: { minParams: 1, maxParams: 2, evaluate: (a2) => {
  const e2 = a2[0], t2 = a2.length === 2 ? __pow(10, a2[1]) : 1;
  return e2 == null ? null : Math.round(e2 * t2) / t2;
} }, truncate: { minParams: 1, maxParams: 2, evaluate: (a2) => a2[0] == null ? null : a2.length === 1 ? parseInt(a2[0].toFixed(0), 10) : parseFloat(a2[0].toFixed(a2[1])) }, char_length: { minParams: 1, maxParams: 1, evaluate: (a2) => typeof a2[0] == "string" || a2[0] instanceof String ? a2[0].length : 0 }, concat: { minParams: 1, maxParams: 1 / 0, evaluate: (a2) => {
  let e2 = "";
  for (let t2 = 0; t2 < a2.length; t2++) {
    if (a2[t2] == null)
      return null;
    e2 += a2[t2].toString();
  }
  return e2;
} }, lower: { minParams: 1, maxParams: 1, evaluate: (a2) => a2[0] == null ? null : a2[0].toString().toLowerCase() }, upper: { minParams: 1, maxParams: 1, evaluate: (a2) => a2[0] == null ? null : a2[0].toString().toUpperCase() } };
var n = o$2(function(r2) {
  var t2;
  t2 = function() {
    function r3(r4, t4) {
      function n3() {
        this.constructor = r4;
      }
      n3.prototype = t4.prototype, r4.prototype = new n3();
    }
    function t3(r4, n3, e2, u2) {
      this.message = r4, this.expected = n3, this.found = e2, this.location = u2, this.name = "SyntaxError", typeof Error.captureStackTrace == "function" && Error.captureStackTrace(this, t3);
    }
    function n2(r4, n3) {
      n3 = n3 !== void 0 ? n3 : {};
      var e2, u2 = {}, o2 = { start: He }, i = He, a2 = function(r5) {
        return r5;
      }, s = function(r5, t4) {
        var n4 = { type: "expr_list" }, e3 = Uo(r5, t4);
        return n4.value = e3, n4;
      }, c2 = function(r5, t4) {
        return Bo(r5, t4);
      }, f2 = "!", l2 = Re("!", false), v2 = "=", p2 = Re("=", false), d2 = function(r5) {
        return Mo("NOT", r5);
      }, h2 = function(r5, t4) {
        return t4 == "" || t4 == null || t4 == null ? r5 : t4.type == "arithmetic" ? Bo(r5, t4.tail) : Do(t4.op, r5, t4.right, t4.escape);
      }, b2 = function(r5) {
        return { type: "arithmetic", tail: r5 };
      }, y2 = ">=", A2 = Re(">=", false), C = ">", g2 = Re(">", false), E2 = "<=", m2 = Re("<=", false), L = "<>", T2 = Re("<>", false), x2 = "<", w2 = Re("<", false), N2 = "!=", _2 = Re("!=", false), R = function(r5, t4) {
        return { op: r5 + "NOT", right: t4 };
      }, I2 = function(r5, t4) {
        return { op: r5, right: t4 };
      }, O = function(r5, t4, n4) {
        return { op: "NOT" + r5, right: { type: "expr_list", value: [t4, n4] } };
      }, F = function(r5, t4, n4) {
        return { op: r5, right: { type: "expr_list", value: [t4, n4] } };
      }, S2 = function(r5) {
        return r5[0] + " " + r5[2];
      }, M2 = function(r5, t4, n4) {
        return { op: r5, right: t4, escape: n4.value };
      }, D2 = function(r5, t4) {
        return { op: r5, right: t4, escape: "" };
      }, H = function(r5, t4) {
        return { op: r5, right: t4 };
      }, U = function(r5) {
        return { op: r5, right: { type: "expr_list", value: [] } };
      }, B = function(r5, t4) {
        return { op: r5, right: t4 };
      }, j = "+", P = Re("+", false), z = "-", G = Re("-", false), Z = function(r5, t4) {
        return Bo(r5, t4);
      }, k = "*", W = Re("*", false), Y = "/", q = Re("/", false), K = function(r5) {
        return r5.paren = true, r5;
      }, V = function(r5) {
        return /^CURRENT_DATE$/i.test(r5) ? { type: "current_time", mode: "date" } : /^CURRENT_TIMESTAMP$/i.test(r5) ? { type: "current_time", mode: "timestamp" } : { type: "column_ref", table: "", column: r5 };
      }, X = function(r5) {
        return r5;
      }, $ = function(r5, t4) {
        return r5 + t4.join("");
      }, J2 = /^[A-Za-z_\x80-\uFFFF]/, Q = Ie([["A", "Z"], ["a", "z"], "_", ["\x80", "\uFFFF"]], false, false), rr = /^[A-Za-z0-9_]/, tr = Ie([["A", "Z"], ["a", "z"], ["0", "9"], "_"], false, false), nr = /^[A-Za-z0-9_.\x80-\uFFFF]/, er = Ie([["A", "Z"], ["a", "z"], ["0", "9"], "_", ".", ["\x80", "\uFFFF"]], false, false), ur = "@", or = Re("@", false), ir = function(r5) {
        return { type: "param", value: r5[1] };
      }, ar = function(r5, t4) {
        return { type: "function", name: "extract", args: { type: "expr_list", value: [{ type: "string", value: r5 }, t4] } };
      }, sr = function(r5, t4, n4) {
        return { type: "function", name: "substring", args: { type: "expr_list", value: n4 ? [r5, t4, n4[2]] : [r5, t4] } };
      }, cr = function(r5, t4, n4) {
        return { type: "function", name: "trim", args: { type: "expr_list", value: [{ type: "string", value: r5 == null ? "BOTH" : r5 }, t4, n4] } };
      }, fr = function(r5, t4) {
        return { type: "function", name: "trim", args: { type: "expr_list", value: [{ type: "string", value: r5 == null ? "BOTH" : r5 }, t4] } };
      }, lr = function(r5, t4) {
        return { type: "function", name: "position", args: { type: "expr_list", value: [r5, t4] } };
      }, vr = function(r5, t4) {
        return { type: "function", name: r5, args: t4 || { type: "expr_list", value: [] } };
      }, pr = function(r5) {
        return { type: "timestamp", value: r5.value };
      }, dr = function(r5, t4, n4) {
        return { type: "interval", value: t4, qualifier: n4, op: r5 };
      }, hr = function(r5, t4) {
        return { type: "interval", value: r5, qualifier: t4, op: "" };
      }, br = function(r5, t4) {
        return { type: "interval-qualifier", start: r5, end: t4 };
      }, yr = function(r5, t4) {
        return { type: "interval-period", period: r5.value, precision: t4, secondary: null };
      }, Ar = function(r5) {
        return { type: "interval-period", period: r5.value, precision: null, secondary: null };
      }, Cr = function(r5) {
        return { type: "interval-period", period: r5.value, precision: null, secondary: null };
      }, gr = function(r5, t4) {
        return { type: "interval-period", period: "second", precision: r5, secondary: t4 };
      }, Er = function(r5) {
        return { type: "interval-period", period: "second", precision: r5, secondary: null };
      }, mr = function() {
        return { type: "interval-period", period: "second", precision: null, secondary: null };
      }, Lr = function(r5, t4) {
        return { type: "interval-period", period: r5.value, precision: t4, secondary: null };
      }, Tr = function(r5) {
        return { type: "interval-period", period: "second", precision: r5, secondary: null };
      }, xr = function() {
        return { type: "interval-period", period: "second", precision: null, secondary: null };
      }, wr = function() {
        return { type: "string", value: "day" };
      }, Nr = function() {
        return { type: "string", value: "hour" };
      }, _r = function() {
        return { type: "string", value: "minute" };
      }, Rr = function() {
        return { type: "string", value: "month" };
      }, Ir = function() {
        return { type: "string", value: "year" };
      }, Or = function(r5) {
        return parseFloat(r5);
      }, Fr = function(r5) {
        return { type: "date", value: r5.value };
      }, Sr = function() {
        return { type: "null", value: null };
      }, Mr = function() {
        return { type: "bool", value: true };
      }, Dr = function() {
        return { type: "bool", value: false };
      }, Hr = "'", Ur = Re("'", false), Br = "N'", jr = Re("N'", false), Pr = "''", zr = Re("''", false), Gr = function() {
        return "'";
      }, Zr = /^[^']/, kr = Ie(["'"], true, false), Wr = function(r5) {
        return { type: "string", value: r5.join("") };
      }, Yr = function(r5, t4) {
        return { type: "case_expression", format: "simple", operand: r5, clauses: t4, else: null };
      }, qr = function(r5, t4, n4) {
        return { type: "case_expression", format: "simple", operand: r5, clauses: t4, else: n4.value };
      }, Kr = function(r5) {
        return { type: "case_expression", format: "searched", clauses: r5, else: null };
      }, Vr = function(r5, t4) {
        return { type: "case_expression", format: "searched", clauses: r5, else: t4.value };
      }, Xr = function(r5, t4) {
        return { type: "when_clause", operand: r5, value: t4 };
      }, $r = function(r5) {
        return { type: "else_clause", value: r5 };
      }, Jr = function(r5) {
        return { type: "number", value: r5 };
      }, Qr = function(r5, t4, n4) {
        return parseFloat(r5 + t4 + n4);
      }, rt = function(r5, t4) {
        return parseFloat(r5 + t4);
      }, tt = function(r5, t4) {
        return parseFloat(r5 + t4);
      }, nt = function(r5) {
        return parseFloat(r5);
      }, et = function(r5, t4) {
        return r5[0] + t4;
      }, ut = ".", ot = Re(".", false), it = function(r5) {
        return "." + (r5 != null ? r5 : "");
      }, at = function(r5, t4) {
        return r5 + t4;
      }, st = function(r5) {
        return r5.join("");
      }, ct = /^[0-9]/, ft = Ie([["0", "9"]], false, false), lt = /^[eE]/, vt = Ie(["e", "E"], false, false), pt = /^[+\-]/, dt = Ie(["+", "-"], false, false), ht = function(r5, t4) {
        return "e" + (t4 === null ? "" : t4);
      }, bt = "null", yt = Re("NULL", true), At = "true", Ct = Re("TRUE", true), gt = "false", Et = Re("FALSE", true), mt = "in", Lt = Re("IN", true), Tt = function() {
        return "IN";
      }, xt = "is", wt = Re("IS", true), Nt = function() {
        return "IS";
      }, _t = "like", Rt = Re("LIKE", true), It = function() {
        return "LIKE";
      }, Ot = "escape", Ft = Re("ESCAPE", true), St = function() {
        return "ESCAPE";
      }, Mt = "not", Dt = Re("NOT", true), Ht = function() {
        return "NOT";
      }, Ut = "and", Bt = Re("AND", true), jt = function() {
        return "AND";
      }, Pt = "or", zt = Re("OR", true), Gt = function() {
        return "OR";
      }, Zt = "between", kt = Re("BETWEEN", true), Wt = function() {
        return "BETWEEN";
      }, Yt = "from", qt = Re("FROM", true), Kt = function() {
        return "FROM";
      }, Vt = "for", Xt = Re("FOR", true), $t = function() {
        return "FOR";
      }, Jt = "substring", Qt = Re("SUBSTRING", true), rn = function() {
        return "SUBSTRING";
      }, tn = "extract", nn = Re("EXTRACT", true), en = function() {
        return "EXTRACT";
      }, un = "trim", on = Re("TRIM", true), an = function() {
        return "TRIM";
      }, sn = "position", cn = Re("POSITION", true), fn = function() {
        return "POSITION";
      }, ln = "timestamp", vn = Re("TIMESTAMP", true), pn = function() {
        return "TIMESTAMP";
      }, dn = "date", hn = Re("DATE", true), bn = function() {
        return "DATE";
      }, yn = "leading", An = Re("LEADING", true), Cn = function() {
        return "LEADING";
      }, gn = "trailing", En = Re("TRAILING", true), mn = function() {
        return "TRAILING";
      }, Ln = "both", Tn = Re("BOTH", true), xn = function() {
        return "BOTH";
      }, wn = "to", Nn = Re("TO", true), _n = function() {
        return "TO";
      }, Rn = "interval", In = Re("INTERVAL", true), On = function() {
        return "INTERVAL";
      }, Fn = "year", Sn = Re("YEAR", true), Mn = function() {
        return "YEAR";
      }, Dn = "month", Hn = Re("MONTH", true), Un = function() {
        return "MONTH";
      }, Bn = "day", jn = Re("DAY", true), Pn = function() {
        return "DAY";
      }, zn = "hour", Gn = Re("HOUR", true), Zn = function() {
        return "HOUR";
      }, kn = "minute", Wn = Re("MINUTE", true), Yn = function() {
        return "MINUTE";
      }, qn = "second", Kn = Re("SECOND", true), Vn = function() {
        return "SECOND";
      }, Xn = "case", $n = Re("CASE", true), Jn = function() {
        return "CASE";
      }, Qn = "end", re = Re("END", true), te = function() {
        return "END";
      }, ne = "when", ee = Re("WHEN", true), ue = function() {
        return "WHEN";
      }, oe = "then", ie = Re("THEN", true), ae = function() {
        return "THEN";
      }, se = "else", ce = Re("ELSE", true), fe = function() {
        return "ELSE";
      }, le = ",", ve = Re(",", false), pe = "(", de = Re("(", false), he = ")", be = Re(")", false), ye = /^[ \t\n\r]/, Ae = Ie([" ", "	", "\n", "\r"], false, false), Ce = "`", ge = Re("`", false), Ee = /^[^`]/, me = Ie(["`"], true, false), Le = function(r5) {
        return r5.join("");
      }, Te = 0, xe = [{ line: 1, column: 1 }], we = 0, Ne = [], _e = 0;
      if ("startRule" in n3) {
        if (!(n3.startRule in o2))
          throw new Error(`Can't start parsing from rule "` + n3.startRule + '".');
        i = o2[n3.startRule];
      }
      function Re(r5, t4) {
        return { type: "literal", text: r5, ignoreCase: t4 };
      }
      function Ie(r5, t4, n4) {
        return { type: "class", parts: r5, inverted: t4, ignoreCase: n4 };
      }
      function Oe() {
        return { type: "end" };
      }
      function Fe(t4) {
        var n4, e3 = xe[t4];
        if (e3)
          return e3;
        for (n4 = t4 - 1; !xe[n4]; )
          n4--;
        for (e3 = { line: (e3 = xe[n4]).line, column: e3.column }; n4 < t4; )
          r4.charCodeAt(n4) === 10 ? (e3.line++, e3.column = 1) : e3.column++, n4++;
        return xe[t4] = e3, e3;
      }
      function Se(r5, t4) {
        var n4 = Fe(r5), e3 = Fe(t4);
        return { start: { offset: r5, line: n4.line, column: n4.column }, end: { offset: t4, line: e3.line, column: e3.column } };
      }
      function Me(r5) {
        Te < we || (Te > we && (we = Te, Ne = []), Ne.push(r5));
      }
      function De(r5, n4, e3) {
        return new t3(t3.buildMessage(r5, n4), r5, n4, e3);
      }
      function He() {
        var r5, t4;
        return r5 = Te, Oo() !== u2 && (t4 = Be()) !== u2 && Oo() !== u2 ? r5 = a2(t4) : (Te = r5, r5 = u2), r5;
      }
      function Ue() {
        var r5, t4, n4, e3, o3, i2, a3, c3;
        if (r5 = Te, (t4 = Be()) !== u2) {
          for (n4 = [], e3 = Te, (o3 = Oo()) !== u2 && (i2 = _o()) !== u2 && (a3 = Oo()) !== u2 && (c3 = Be()) !== u2 ? e3 = o3 = [o3, i2, a3, c3] : (Te = e3, e3 = u2); e3 !== u2; )
            n4.push(e3), e3 = Te, (o3 = Oo()) !== u2 && (i2 = _o()) !== u2 && (a3 = Oo()) !== u2 && (c3 = Be()) !== u2 ? e3 = o3 = [o3, i2, a3, c3] : (Te = e3, e3 = u2);
          n4 !== u2 ? r5 = t4 = s(t4, n4) : (Te = r5, r5 = u2);
        } else
          Te = r5, r5 = u2;
        return r5;
      }
      function Be() {
        var r5, t4, n4, e3, o3, i2, a3, s2;
        if (r5 = Te, (t4 = je()) !== u2) {
          for (n4 = [], e3 = Te, (o3 = Oo()) !== u2 && (i2 = to()) !== u2 && (a3 = Oo()) !== u2 && (s2 = je()) !== u2 ? e3 = o3 = [o3, i2, a3, s2] : (Te = e3, e3 = u2); e3 !== u2; )
            n4.push(e3), e3 = Te, (o3 = Oo()) !== u2 && (i2 = to()) !== u2 && (a3 = Oo()) !== u2 && (s2 = je()) !== u2 ? e3 = o3 = [o3, i2, a3, s2] : (Te = e3, e3 = u2);
          n4 !== u2 ? r5 = t4 = c2(t4, n4) : (Te = r5, r5 = u2);
        } else
          Te = r5, r5 = u2;
        return r5;
      }
      function je() {
        var r5, t4, n4, e3, o3, i2, a3, s2;
        if (r5 = Te, (t4 = Pe()) !== u2) {
          for (n4 = [], e3 = Te, (o3 = Oo()) !== u2 && (i2 = ro()) !== u2 && (a3 = Oo()) !== u2 && (s2 = Pe()) !== u2 ? e3 = o3 = [o3, i2, a3, s2] : (Te = e3, e3 = u2); e3 !== u2; )
            n4.push(e3), e3 = Te, (o3 = Oo()) !== u2 && (i2 = ro()) !== u2 && (a3 = Oo()) !== u2 && (s2 = Pe()) !== u2 ? e3 = o3 = [o3, i2, a3, s2] : (Te = e3, e3 = u2);
          n4 !== u2 ? r5 = t4 = c2(t4, n4) : (Te = r5, r5 = u2);
        } else
          Te = r5, r5 = u2;
        return r5;
      }
      function Pe() {
        var t4, n4, e3, o3, i2;
        return t4 = Te, (n4 = Qu()) === u2 && (n4 = Te, r4.charCodeAt(Te) === 33 ? (e3 = f2, Te++) : (e3 = u2, _e === 0 && Me(l2)), e3 !== u2 ? (o3 = Te, _e++, r4.charCodeAt(Te) === 61 ? (i2 = v2, Te++) : (i2 = u2, _e === 0 && Me(p2)), _e--, i2 === u2 ? o3 = void 0 : (Te = o3, o3 = u2), o3 !== u2 ? n4 = e3 = [e3, o3] : (Te = n4, n4 = u2)) : (Te = n4, n4 = u2)), n4 !== u2 && (e3 = Oo()) !== u2 && (o3 = Pe()) !== u2 ? t4 = n4 = d2(o3) : (Te = t4, t4 = u2), t4 === u2 && (t4 = ze()), t4;
      }
      function ze() {
        var r5, t4, n4;
        return r5 = Te, (t4 = $e()) !== u2 && Oo() !== u2 ? ((n4 = Ge()) === u2 && (n4 = null), n4 !== u2 ? r5 = t4 = h2(t4, n4) : (Te = r5, r5 = u2)) : (Te = r5, r5 = u2), r5;
      }
      function Ge() {
        var r5;
        return (r5 = Ze()) === u2 && (r5 = Xe()) === u2 && (r5 = Ye()) === u2 && (r5 = We()) === u2 && (r5 = Ve()), r5;
      }
      function Ze() {
        var r5, t4, n4, e3, o3, i2;
        if (r5 = [], t4 = Te, (n4 = Oo()) !== u2 && (e3 = ke()) !== u2 && (o3 = Oo()) !== u2 && (i2 = $e()) !== u2 ? t4 = n4 = [n4, e3, o3, i2] : (Te = t4, t4 = u2), t4 !== u2)
          for (; t4 !== u2; )
            r5.push(t4), t4 = Te, (n4 = Oo()) !== u2 && (e3 = ke()) !== u2 && (o3 = Oo()) !== u2 && (i2 = $e()) !== u2 ? t4 = n4 = [n4, e3, o3, i2] : (Te = t4, t4 = u2);
        else
          r5 = u2;
        return r5 !== u2 && (r5 = b2(r5)), r5;
      }
      function ke() {
        var t4;
        return r4.substr(Te, 2) === y2 ? (t4 = y2, Te += 2) : (t4 = u2, _e === 0 && Me(A2)), t4 === u2 && (r4.charCodeAt(Te) === 62 ? (t4 = C, Te++) : (t4 = u2, _e === 0 && Me(g2)), t4 === u2 && (r4.substr(Te, 2) === E2 ? (t4 = E2, Te += 2) : (t4 = u2, _e === 0 && Me(m2)), t4 === u2 && (r4.substr(Te, 2) === L ? (t4 = L, Te += 2) : (t4 = u2, _e === 0 && Me(T2)), t4 === u2 && (r4.charCodeAt(Te) === 60 ? (t4 = x2, Te++) : (t4 = u2, _e === 0 && Me(w2)), t4 === u2 && (r4.charCodeAt(Te) === 61 ? (t4 = v2, Te++) : (t4 = u2, _e === 0 && Me(p2)), t4 === u2 && (r4.substr(Te, 2) === N2 ? (t4 = N2, Te += 2) : (t4 = u2, _e === 0 && Me(_2)))))))), t4;
      }
      function We() {
        var r5, t4, n4, e3;
        return r5 = Te, (t4 = Xu()) !== u2 && Oo() !== u2 && (n4 = Qu()) !== u2 && Oo() !== u2 && (e3 = $e()) !== u2 ? r5 = t4 = R(t4, e3) : (Te = r5, r5 = u2), r5 === u2 && (r5 = Te, (t4 = Xu()) !== u2 && Oo() !== u2 && (n4 = $e()) !== u2 ? r5 = t4 = I2(t4, n4) : (Te = r5, r5 = u2)), r5;
      }
      function Ye() {
        var r5, t4, n4, e3, o3, i2;
        return r5 = Te, (t4 = Qu()) !== u2 && Oo() !== u2 && (n4 = no()) !== u2 && Oo() !== u2 && (e3 = $e()) !== u2 && Oo() !== u2 && (o3 = ro()) !== u2 && Oo() !== u2 && (i2 = $e()) !== u2 ? r5 = t4 = O(n4, e3, i2) : (Te = r5, r5 = u2), r5 === u2 && (r5 = Te, (t4 = no()) !== u2 && Oo() !== u2 && (n4 = $e()) !== u2 && Oo() !== u2 && (e3 = ro()) !== u2 && Oo() !== u2 && (o3 = $e()) !== u2 ? r5 = t4 = F(t4, n4, o3) : (Te = r5, r5 = u2)), r5;
      }
      function qe() {
        var r5, t4, n4, e3, o3;
        return r5 = Te, t4 = Te, (n4 = Qu()) !== u2 && (e3 = Oo()) !== u2 && (o3 = $u()) !== u2 ? t4 = n4 = [n4, e3, o3] : (Te = t4, t4 = u2), t4 !== u2 && (t4 = S2(t4)), (r5 = t4) === u2 && (r5 = $u()), r5;
      }
      function Ke() {
        var r5, t4, n4, e3, o3;
        return r5 = Te, t4 = Te, (n4 = Qu()) !== u2 && (e3 = Oo()) !== u2 && (o3 = Vu()) !== u2 ? t4 = n4 = [n4, e3, o3] : (Te = t4, t4 = u2), t4 !== u2 && (t4 = S2(t4)), (r5 = t4) === u2 && (r5 = Vu()), r5;
      }
      function Ve() {
        var r5, t4, n4, e3;
        return r5 = Te, (t4 = qe()) !== u2 && Oo() !== u2 && (n4 = Iu()) !== u2 && Oo() !== u2 && Ju() !== u2 && Oo() !== u2 && (e3 = Ou()) !== u2 ? r5 = t4 = M2(t4, n4, e3) : (Te = r5, r5 = u2), r5 === u2 && (r5 = Te, (t4 = qe()) !== u2 && Oo() !== u2 && (n4 = Iu()) !== u2 ? r5 = t4 = D2(t4, n4) : (Te = r5, r5 = u2)), r5;
      }
      function Xe() {
        var r5, t4, n4, e3;
        return r5 = Te, (t4 = Ke()) !== u2 && Oo() !== u2 && (n4 = Ro()) !== u2 && Oo() !== u2 && (e3 = Ue()) !== u2 && Oo() !== u2 && Io() !== u2 ? r5 = t4 = H(t4, e3) : (Te = r5, r5 = u2), r5 === u2 && (r5 = Te, (t4 = Ke()) !== u2 && Oo() !== u2 && (n4 = Ro()) !== u2 && Oo() !== u2 && (e3 = Io()) !== u2 ? r5 = t4 = U(t4) : (Te = r5, r5 = u2), r5 === u2 && (r5 = Te, (t4 = Ke()) !== u2 && Oo() !== u2 && (n4 = cu()) !== u2 ? r5 = t4 = B(t4, n4) : (Te = r5, r5 = u2))), r5;
      }
      function $e() {
        var r5, t4, n4, e3, o3, i2, a3, s2;
        if (r5 = Te, (t4 = Qe()) !== u2) {
          for (n4 = [], e3 = Te, (o3 = Oo()) !== u2 && (i2 = Je()) !== u2 && (a3 = Oo()) !== u2 && (s2 = Qe()) !== u2 ? e3 = o3 = [o3, i2, a3, s2] : (Te = e3, e3 = u2); e3 !== u2; )
            n4.push(e3), e3 = Te, (o3 = Oo()) !== u2 && (i2 = Je()) !== u2 && (a3 = Oo()) !== u2 && (s2 = Qe()) !== u2 ? e3 = o3 = [o3, i2, a3, s2] : (Te = e3, e3 = u2);
          n4 !== u2 ? r5 = t4 = c2(t4, n4) : (Te = r5, r5 = u2);
        } else
          Te = r5, r5 = u2;
        return r5;
      }
      function Je() {
        var t4;
        return r4.charCodeAt(Te) === 43 ? (t4 = j, Te++) : (t4 = u2, _e === 0 && Me(P)), t4 === u2 && (r4.charCodeAt(Te) === 45 ? (t4 = z, Te++) : (t4 = u2, _e === 0 && Me(G))), t4;
      }
      function Qe() {
        var r5, t4, n4, e3, o3, i2, a3, s2;
        if (r5 = Te, (t4 = tu()) !== u2) {
          for (n4 = [], e3 = Te, (o3 = Oo()) !== u2 && (i2 = ru()) !== u2 && (a3 = Oo()) !== u2 && (s2 = tu()) !== u2 ? e3 = o3 = [o3, i2, a3, s2] : (Te = e3, e3 = u2); e3 !== u2; )
            n4.push(e3), e3 = Te, (o3 = Oo()) !== u2 && (i2 = ru()) !== u2 && (a3 = Oo()) !== u2 && (s2 = tu()) !== u2 ? e3 = o3 = [o3, i2, a3, s2] : (Te = e3, e3 = u2);
          n4 !== u2 ? r5 = t4 = Z(t4, n4) : (Te = r5, r5 = u2);
        } else
          Te = r5, r5 = u2;
        return r5;
      }
      function ru() {
        var t4;
        return r4.charCodeAt(Te) === 42 ? (t4 = k, Te++) : (t4 = u2, _e === 0 && Me(W)), t4 === u2 && (r4.charCodeAt(Te) === 47 ? (t4 = Y, Te++) : (t4 = u2, _e === 0 && Me(q))), t4;
      }
      function tu() {
        var r5, t4;
        return (r5 = yu()) === u2 && (r5 = fu()) === u2 && (r5 = lu()) === u2 && (r5 = vu()) === u2 && (r5 = du()) === u2 && (r5 = hu()) === u2 && (r5 = Fu()) === u2 && (r5 = nu()) === u2 && (r5 = cu()) === u2 && (r5 = Te, Ro() !== u2 && Oo() !== u2 && (t4 = Be()) !== u2 && Oo() !== u2 && Io() !== u2 ? r5 = K(t4) : (Te = r5, r5 = u2)), r5;
      }
      function nu() {
        var r5;
        return (r5 = eu()) !== u2 && (r5 = V(r5)), r5;
      }
      function eu() {
        var r5;
        return (r5 = uu()) !== u2 && (r5 = X(r5)), r5;
      }
      function uu() {
        var r5, t4, n4, e3;
        if (r5 = Te, (t4 = iu()) !== u2) {
          for (n4 = [], e3 = su(); e3 !== u2; )
            n4.push(e3), e3 = su();
          n4 !== u2 ? r5 = t4 = $(t4, n4) : (Te = r5, r5 = u2);
        } else
          Te = r5, r5 = u2;
        return r5;
      }
      function ou() {
        var r5, t4, n4, e3;
        if (r5 = Te, (t4 = iu()) !== u2) {
          for (n4 = [], e3 = au(); e3 !== u2; )
            n4.push(e3), e3 = au();
          n4 !== u2 ? r5 = t4 = $(t4, n4) : (Te = r5, r5 = u2);
        } else
          Te = r5, r5 = u2;
        return r5;
      }
      function iu() {
        var t4;
        return J2.test(r4.charAt(Te)) ? (t4 = r4.charAt(Te), Te++) : (t4 = u2, _e === 0 && Me(Q)), t4;
      }
      function au() {
        var t4;
        return rr.test(r4.charAt(Te)) ? (t4 = r4.charAt(Te), Te++) : (t4 = u2, _e === 0 && Me(tr)), t4;
      }
      function su() {
        var t4;
        return nr.test(r4.charAt(Te)) ? (t4 = r4.charAt(Te), Te++) : (t4 = u2, _e === 0 && Me(er)), t4;
      }
      function cu() {
        var t4, n4, e3;
        return t4 = Te, r4.charCodeAt(Te) === 64 ? (n4 = ur, Te++) : (n4 = u2, _e === 0 && Me(or)), n4 !== u2 && (e3 = ou()) !== u2 ? t4 = n4 = [n4, e3] : (Te = t4, t4 = u2), t4 !== u2 && (t4 = ir(t4)), t4;
      }
      function fu() {
        var r5, t4, n4;
        return r5 = Te, io() !== u2 && Oo() !== u2 && Ro() !== u2 && Oo() !== u2 && (t4 = bu()) !== u2 && Oo() !== u2 && eo() !== u2 && Oo() !== u2 && (n4 = Be()) !== u2 && Oo() !== u2 && Io() !== u2 ? r5 = ar(t4, n4) : (Te = r5, r5 = u2), r5;
      }
      function lu() {
        var r5, t4, n4, e3, o3, i2, a3, s2;
        return r5 = Te, oo() !== u2 && Oo() !== u2 && Ro() !== u2 && Oo() !== u2 && (t4 = Be()) !== u2 && Oo() !== u2 && eo() !== u2 && Oo() !== u2 && (n4 = Be()) !== u2 && Oo() !== u2 ? (e3 = Te, (o3 = uo()) !== u2 && (i2 = Oo()) !== u2 && (a3 = Be()) !== u2 && (s2 = Oo()) !== u2 ? e3 = o3 = [o3, i2, a3, s2] : (Te = e3, e3 = u2), e3 === u2 && (e3 = null), e3 !== u2 && (o3 = Io()) !== u2 ? r5 = sr(t4, n4, e3) : (Te = r5, r5 = u2)) : (Te = r5, r5 = u2), r5;
      }
      function vu() {
        var r5, t4, n4, e3;
        return r5 = Te, ao() !== u2 && Oo() !== u2 && Ro() !== u2 && Oo() !== u2 ? ((t4 = pu()) === u2 && (t4 = null), t4 !== u2 && Oo() !== u2 && (n4 = Be()) !== u2 && Oo() !== u2 && eo() !== u2 && Oo() !== u2 && (e3 = Be()) !== u2 && Oo() !== u2 && Io() !== u2 ? r5 = cr(t4, n4, e3) : (Te = r5, r5 = u2)) : (Te = r5, r5 = u2), r5 === u2 && (r5 = Te, ao() !== u2 && Oo() !== u2 && Ro() !== u2 && Oo() !== u2 ? ((t4 = pu()) === u2 && (t4 = null), t4 !== u2 && Oo() !== u2 && (n4 = Be()) !== u2 && Oo() !== u2 && Io() !== u2 ? r5 = fr(t4, n4) : (Te = r5, r5 = u2)) : (Te = r5, r5 = u2)), r5;
      }
      function pu() {
        var r5;
        return (r5 = lo()) === u2 && (r5 = vo()) === u2 && (r5 = po()), r5;
      }
      function du() {
        var r5, t4, n4;
        return r5 = Te, so() !== u2 && Oo() !== u2 && Ro() !== u2 && Oo() !== u2 && (t4 = Be()) !== u2 && Oo() !== u2 && Vu() !== u2 && Oo() !== u2 && (n4 = Be()) !== u2 && Oo() !== u2 && Io() !== u2 ? r5 = lr(t4, n4) : (Te = r5, r5 = u2), r5;
      }
      function hu() {
        var r5, t4, n4;
        return r5 = Te, (t4 = So()) !== u2 && Oo() !== u2 && Ro() !== u2 && Oo() !== u2 ? ((n4 = Ue()) === u2 && (n4 = null), n4 !== u2 && Oo() !== u2 && Io() !== u2 ? r5 = t4 = vr(t4, n4) : (Te = r5, r5 = u2)) : (Te = r5, r5 = u2), r5;
      }
      function bu() {
        var r5;
        return (r5 = yo()) === u2 && (r5 = Ao()) === u2 && (r5 = Co()) === u2 && (r5 = go()) === u2 && (r5 = Eo()) === u2 && (r5 = mo()), r5;
      }
      function yu() {
        var r5;
        return (r5 = Ou()) === u2 && (r5 = Bu()) === u2 && (r5 = Ru()) === u2 && (r5 = _u()) === u2 && (r5 = Nu()) === u2 && (r5 = Au()) === u2 && (r5 = Cu()), r5;
      }
      function Au() {
        var r5, t4;
        return r5 = Te, co() !== u2 && Oo() !== u2 && (t4 = Iu()) !== u2 ? r5 = pr(t4) : (Te = r5, r5 = u2), r5;
      }
      function Cu() {
        var t4, n4, e3, o3;
        return t4 = Te, bo() !== u2 && Oo() !== u2 ? (r4.charCodeAt(Te) === 45 ? (n4 = z, Te++) : (n4 = u2, _e === 0 && Me(G)), n4 === u2 && (r4.charCodeAt(Te) === 43 ? (n4 = j, Te++) : (n4 = u2, _e === 0 && Me(P))), n4 !== u2 && Oo() !== u2 && (e3 = Iu()) !== u2 && Oo() !== u2 && (o3 = gu()) !== u2 ? t4 = dr(n4, e3, o3) : (Te = t4, t4 = u2)) : (Te = t4, t4 = u2), t4 === u2 && (t4 = Te, bo() !== u2 && Oo() !== u2 && (n4 = Iu()) !== u2 && Oo() !== u2 && (e3 = gu()) !== u2 ? t4 = hr(n4, e3) : (Te = t4, t4 = u2)), t4;
      }
      function gu() {
        var r5, t4, n4;
        return r5 = Te, (t4 = Eu()) !== u2 && Oo() !== u2 && ho() !== u2 && Oo() !== u2 && (n4 = mu()) !== u2 ? r5 = t4 = br(t4, n4) : (Te = r5, r5 = u2), r5 === u2 && (r5 = Lu()), r5;
      }
      function Eu() {
        var r5, t4, n4;
        return r5 = Te, (t4 = Tu()) !== u2 && Oo() !== u2 && Ro() !== u2 && Oo() !== u2 && (n4 = wu()) !== u2 && Oo() !== u2 && Io() !== u2 ? r5 = t4 = yr(t4, n4) : (Te = r5, r5 = u2), r5 === u2 && (r5 = Te, (t4 = Tu()) !== u2 && (t4 = Ar(t4)), r5 = t4), r5;
      }
      function mu() {
        var r5, t4, n4, e3;
        return r5 = Te, (t4 = Tu()) !== u2 && (t4 = Cr(t4)), (r5 = t4) === u2 && (r5 = Te, (t4 = mo()) !== u2 && Oo() !== u2 && Ro() !== u2 && Oo() !== u2 && (n4 = wu()) !== u2 && Oo() !== u2 && _o() !== u2 && Oo() !== u2 && (e3 = xu()) !== u2 && Oo() !== u2 && Io() !== u2 ? r5 = t4 = gr(n4, e3) : (Te = r5, r5 = u2), r5 === u2 && (r5 = Te, (t4 = mo()) !== u2 && Oo() !== u2 && Ro() !== u2 && Oo() !== u2 && (n4 = wu()) !== u2 && Oo() !== u2 && Io() !== u2 ? r5 = t4 = Er(n4) : (Te = r5, r5 = u2), r5 === u2 && (r5 = Te, (t4 = mo()) !== u2 && (t4 = mr()), r5 = t4))), r5;
      }
      function Lu() {
        var r5, t4, n4, e3;
        return r5 = Te, (t4 = Tu()) !== u2 && Oo() !== u2 && Ro() !== u2 && Oo() !== u2 && (n4 = xu()) !== u2 && Oo() !== u2 && Io() !== u2 ? r5 = t4 = Lr(t4, n4) : (Te = r5, r5 = u2), r5 === u2 && (r5 = Te, (t4 = Tu()) !== u2 && (t4 = Ar(t4)), (r5 = t4) === u2 && (r5 = Te, (t4 = mo()) !== u2 && Oo() !== u2 && Ro() !== u2 && Oo() !== u2 && (n4 = wu()) !== u2 && Oo() !== u2 && _o() !== u2 && Oo() !== u2 && (e3 = xu()) !== u2 && Oo() !== u2 && Io() !== u2 ? r5 = t4 = gr(n4, e3) : (Te = r5, r5 = u2), r5 === u2 && (r5 = Te, (t4 = mo()) !== u2 && Oo() !== u2 && Ro() !== u2 && Oo() !== u2 && (n4 = xu()) !== u2 && Oo() !== u2 && Io() !== u2 ? r5 = t4 = Tr(n4) : (Te = r5, r5 = u2), r5 === u2 && (r5 = Te, (t4 = mo()) !== u2 && (t4 = xr()), r5 = t4)))), r5;
      }
      function Tu() {
        var r5, t4;
        return r5 = Te, (t4 = Co()) !== u2 && (t4 = wr()), (r5 = t4) === u2 && (r5 = Te, (t4 = go()) !== u2 && (t4 = Nr()), (r5 = t4) === u2 && (r5 = Te, (t4 = Eo()) !== u2 && (t4 = _r()), (r5 = t4) === u2 && (r5 = Te, (t4 = Ao()) !== u2 && (t4 = Rr()), (r5 = t4) === u2 && (r5 = Te, (t4 = yo()) !== u2 && (t4 = Ir()), r5 = t4)))), r5;
      }
      function xu() {
        var r5;
        return (r5 = Zu()) !== u2 && (r5 = Or(r5)), r5;
      }
      function wu() {
        var r5;
        return (r5 = Zu()) !== u2 && (r5 = Or(r5)), r5;
      }
      function Nu() {
        var r5, t4;
        return r5 = Te, fo() !== u2 && Oo() !== u2 && (t4 = Iu()) !== u2 ? r5 = Fr(t4) : (Te = r5, r5 = u2), r5;
      }
      function _u() {
        var r5;
        return (r5 = Yu()) !== u2 && (r5 = Sr()), r5;
      }
      function Ru() {
        var r5, t4;
        return r5 = Te, (t4 = qu()) !== u2 && (t4 = Mr()), (r5 = t4) === u2 && (r5 = Te, (t4 = Ku()) !== u2 && (t4 = Dr()), r5 = t4), r5;
      }
      function Iu() {
        var r5;
        return (r5 = Ou()) === u2 && (r5 = cu()), r5;
      }
      function Ou() {
        var t4, n4, e3, o3, i2;
        if (t4 = Te, r4.charCodeAt(Te) === 39 ? (n4 = Hr, Te++) : (n4 = u2, _e === 0 && Me(Ur)), n4 === u2 && (r4.substr(Te, 2) === Br ? (n4 = Br, Te += 2) : (n4 = u2, _e === 0 && Me(jr))), n4 !== u2) {
          for (e3 = [], o3 = Te, r4.substr(Te, 2) === Pr ? (i2 = Pr, Te += 2) : (i2 = u2, _e === 0 && Me(zr)), i2 !== u2 && (i2 = Gr()), (o3 = i2) === u2 && (Zr.test(r4.charAt(Te)) ? (o3 = r4.charAt(Te), Te++) : (o3 = u2, _e === 0 && Me(kr))); o3 !== u2; )
            e3.push(o3), o3 = Te, r4.substr(Te, 2) === Pr ? (i2 = Pr, Te += 2) : (i2 = u2, _e === 0 && Me(zr)), i2 !== u2 && (i2 = Gr()), (o3 = i2) === u2 && (Zr.test(r4.charAt(Te)) ? (o3 = r4.charAt(Te), Te++) : (o3 = u2, _e === 0 && Me(kr)));
          e3 !== u2 ? (r4.charCodeAt(Te) === 39 ? (o3 = Hr, Te++) : (o3 = u2, _e === 0 && Me(Ur)), o3 !== u2 ? t4 = n4 = Wr(e3) : (Te = t4, t4 = u2)) : (Te = t4, t4 = u2);
        } else
          Te = t4, t4 = u2;
        return t4;
      }
      function Fu() {
        var r5;
        return (r5 = Su()) === u2 && (r5 = Mu()), r5;
      }
      function Su() {
        var r5, t4, n4, e3, o3;
        if (r5 = Te, Lo() !== u2)
          if (Oo() !== u2)
            if ((t4 = Be()) !== u2)
              if (Oo() !== u2) {
                for (n4 = [], e3 = Hu(); e3 !== u2; )
                  n4.push(e3), e3 = Hu();
                n4 !== u2 && (e3 = Oo()) !== u2 && (o3 = To()) !== u2 ? r5 = Yr(t4, n4) : (Te = r5, r5 = u2);
              } else
                Te = r5, r5 = u2;
            else
              Te = r5, r5 = u2;
          else
            Te = r5, r5 = u2;
        else
          Te = r5, r5 = u2;
        if (r5 === u2)
          if (r5 = Te, Lo() !== u2)
            if (Oo() !== u2)
              if ((t4 = Be()) !== u2)
                if (Oo() !== u2) {
                  for (n4 = [], e3 = Hu(); e3 !== u2; )
                    n4.push(e3), e3 = Hu();
                  n4 !== u2 && (e3 = Oo()) !== u2 && (o3 = Uu()) !== u2 && Oo() !== u2 && To() !== u2 ? r5 = qr(t4, n4, o3) : (Te = r5, r5 = u2);
                } else
                  Te = r5, r5 = u2;
              else
                Te = r5, r5 = u2;
            else
              Te = r5, r5 = u2;
          else
            Te = r5, r5 = u2;
        return r5;
      }
      function Mu() {
        var r5, t4, n4, e3;
        if (r5 = Te, Lo() !== u2)
          if (Oo() !== u2) {
            for (t4 = [], n4 = Du(); n4 !== u2; )
              t4.push(n4), n4 = Du();
            t4 !== u2 && (n4 = Oo()) !== u2 && (e3 = To()) !== u2 ? r5 = Kr(t4) : (Te = r5, r5 = u2);
          } else
            Te = r5, r5 = u2;
        else
          Te = r5, r5 = u2;
        if (r5 === u2)
          if (r5 = Te, Lo() !== u2)
            if (Oo() !== u2) {
              for (t4 = [], n4 = Du(); n4 !== u2; )
                t4.push(n4), n4 = Du();
              t4 !== u2 && (n4 = Oo()) !== u2 && (e3 = Uu()) !== u2 && Oo() !== u2 && To() !== u2 ? r5 = Vr(t4, e3) : (Te = r5, r5 = u2);
            } else
              Te = r5, r5 = u2;
          else
            Te = r5, r5 = u2;
        return r5;
      }
      function Du() {
        var r5, t4, n4;
        return r5 = Te, xo() !== u2 && Oo() !== u2 && (t4 = Be()) !== u2 && Oo() !== u2 && wo() !== u2 && Oo() !== u2 && (n4 = Be()) !== u2 ? r5 = Xr(t4, n4) : (Te = r5, r5 = u2), r5;
      }
      function Hu() {
        var r5, t4, n4;
        return r5 = Te, xo() !== u2 && Oo() !== u2 && (t4 = Be()) !== u2 && Oo() !== u2 && wo() !== u2 && Oo() !== u2 && (n4 = Be()) !== u2 ? r5 = Xr(t4, n4) : (Te = r5, r5 = u2), r5;
      }
      function Uu() {
        var r5, t4;
        return r5 = Te, No() !== u2 && Oo() !== u2 && (t4 = Be()) !== u2 ? r5 = $r(t4) : (Te = r5, r5 = u2), r5;
      }
      function Bu() {
        var r5, t4, n4, e3;
        return r5 = Te, (t4 = ju()) !== u2 ? (n4 = Te, _e++, e3 = iu(), _e--, e3 === u2 ? n4 = void 0 : (Te = n4, n4 = u2), n4 !== u2 ? r5 = t4 = Jr(t4) : (Te = r5, r5 = u2)) : (Te = r5, r5 = u2), r5;
      }
      function ju() {
        var r5, t4, n4, e3;
        return r5 = Te, (t4 = Pu()) !== u2 && (n4 = zu()) !== u2 && (e3 = Gu()) !== u2 ? r5 = t4 = Qr(t4, n4, e3) : (Te = r5, r5 = u2), r5 === u2 && (r5 = Te, (t4 = Pu()) !== u2 && (n4 = zu()) !== u2 ? r5 = t4 = rt(t4, n4) : (Te = r5, r5 = u2), r5 === u2 && (r5 = Te, (t4 = Pu()) !== u2 && (n4 = Gu()) !== u2 ? r5 = t4 = tt(t4, n4) : (Te = r5, r5 = u2), r5 === u2 && (r5 = Te, (t4 = Pu()) !== u2 && (t4 = nt(t4)), r5 = t4))), r5;
      }
      function Pu() {
        var t4, n4, e3;
        return (t4 = Zu()) === u2 && (t4 = Te, r4.charCodeAt(Te) === 45 ? (n4 = z, Te++) : (n4 = u2, _e === 0 && Me(G)), n4 === u2 && (r4.charCodeAt(Te) === 43 ? (n4 = j, Te++) : (n4 = u2, _e === 0 && Me(P))), n4 !== u2 && (e3 = Zu()) !== u2 ? t4 = n4 = et(n4, e3) : (Te = t4, t4 = u2)), t4;
      }
      function zu() {
        var t4, n4, e3;
        return t4 = Te, r4.charCodeAt(Te) === 46 ? (n4 = ut, Te++) : (n4 = u2, _e === 0 && Me(ot)), n4 !== u2 ? ((e3 = Zu()) === u2 && (e3 = null), e3 !== u2 ? t4 = n4 = it(e3) : (Te = t4, t4 = u2)) : (Te = t4, t4 = u2), t4;
      }
      function Gu() {
        var r5, t4, n4;
        return r5 = Te, (t4 = Wu()) !== u2 && (n4 = Zu()) !== u2 ? r5 = t4 = at(t4, n4) : (Te = r5, r5 = u2), r5;
      }
      function Zu() {
        var r5, t4;
        if (r5 = [], (t4 = ku()) !== u2)
          for (; t4 !== u2; )
            r5.push(t4), t4 = ku();
        else
          r5 = u2;
        return r5 !== u2 && (r5 = st(r5)), r5;
      }
      function ku() {
        var t4;
        return ct.test(r4.charAt(Te)) ? (t4 = r4.charAt(Te), Te++) : (t4 = u2, _e === 0 && Me(ft)), t4;
      }
      function Wu() {
        var t4, n4, e3;
        return t4 = Te, lt.test(r4.charAt(Te)) ? (n4 = r4.charAt(Te), Te++) : (n4 = u2, _e === 0 && Me(vt)), n4 !== u2 ? (pt.test(r4.charAt(Te)) ? (e3 = r4.charAt(Te), Te++) : (e3 = u2, _e === 0 && Me(dt)), e3 === u2 && (e3 = null), e3 !== u2 ? t4 = n4 = ht(n4, e3) : (Te = t4, t4 = u2)) : (Te = t4, t4 = u2), t4;
      }
      function Yu() {
        var t4, n4, e3, o3;
        return t4 = Te, r4.substr(Te, 4).toLowerCase() === bt ? (n4 = r4.substr(Te, 4), Te += 4) : (n4 = u2, _e === 0 && Me(yt)), n4 !== u2 ? (e3 = Te, _e++, o3 = au(), _e--, o3 === u2 ? e3 = void 0 : (Te = e3, e3 = u2), e3 !== u2 ? t4 = n4 = [n4, e3] : (Te = t4, t4 = u2)) : (Te = t4, t4 = u2), t4;
      }
      function qu() {
        var t4, n4, e3, o3;
        return t4 = Te, r4.substr(Te, 4).toLowerCase() === At ? (n4 = r4.substr(Te, 4), Te += 4) : (n4 = u2, _e === 0 && Me(Ct)), n4 !== u2 ? (e3 = Te, _e++, o3 = au(), _e--, o3 === u2 ? e3 = void 0 : (Te = e3, e3 = u2), e3 !== u2 ? t4 = n4 = [n4, e3] : (Te = t4, t4 = u2)) : (Te = t4, t4 = u2), t4;
      }
      function Ku() {
        var t4, n4, e3, o3;
        return t4 = Te, r4.substr(Te, 5).toLowerCase() === gt ? (n4 = r4.substr(Te, 5), Te += 5) : (n4 = u2, _e === 0 && Me(Et)), n4 !== u2 ? (e3 = Te, _e++, o3 = au(), _e--, o3 === u2 ? e3 = void 0 : (Te = e3, e3 = u2), e3 !== u2 ? t4 = n4 = [n4, e3] : (Te = t4, t4 = u2)) : (Te = t4, t4 = u2), t4;
      }
      function Vu() {
        var t4, n4, e3, o3;
        return t4 = Te, r4.substr(Te, 2).toLowerCase() === mt ? (n4 = r4.substr(Te, 2), Te += 2) : (n4 = u2, _e === 0 && Me(Lt)), n4 !== u2 ? (e3 = Te, _e++, o3 = au(), _e--, o3 === u2 ? e3 = void 0 : (Te = e3, e3 = u2), e3 !== u2 ? t4 = n4 = Tt() : (Te = t4, t4 = u2)) : (Te = t4, t4 = u2), t4;
      }
      function Xu() {
        var t4, n4, e3, o3;
        return t4 = Te, r4.substr(Te, 2).toLowerCase() === xt ? (n4 = r4.substr(Te, 2), Te += 2) : (n4 = u2, _e === 0 && Me(wt)), n4 !== u2 ? (e3 = Te, _e++, o3 = au(), _e--, o3 === u2 ? e3 = void 0 : (Te = e3, e3 = u2), e3 !== u2 ? t4 = n4 = Nt() : (Te = t4, t4 = u2)) : (Te = t4, t4 = u2), t4;
      }
      function $u() {
        var t4, n4, e3, o3;
        return t4 = Te, r4.substr(Te, 4).toLowerCase() === _t ? (n4 = r4.substr(Te, 4), Te += 4) : (n4 = u2, _e === 0 && Me(Rt)), n4 !== u2 ? (e3 = Te, _e++, o3 = au(), _e--, o3 === u2 ? e3 = void 0 : (Te = e3, e3 = u2), e3 !== u2 ? t4 = n4 = It() : (Te = t4, t4 = u2)) : (Te = t4, t4 = u2), t4;
      }
      function Ju() {
        var t4, n4, e3, o3;
        return t4 = Te, r4.substr(Te, 6).toLowerCase() === Ot ? (n4 = r4.substr(Te, 6), Te += 6) : (n4 = u2, _e === 0 && Me(Ft)), n4 !== u2 ? (e3 = Te, _e++, o3 = au(), _e--, o3 === u2 ? e3 = void 0 : (Te = e3, e3 = u2), e3 !== u2 ? t4 = n4 = St() : (Te = t4, t4 = u2)) : (Te = t4, t4 = u2), t4;
      }
      function Qu() {
        var t4, n4, e3, o3;
        return t4 = Te, r4.substr(Te, 3).toLowerCase() === Mt ? (n4 = r4.substr(Te, 3), Te += 3) : (n4 = u2, _e === 0 && Me(Dt)), n4 !== u2 ? (e3 = Te, _e++, o3 = au(), _e--, o3 === u2 ? e3 = void 0 : (Te = e3, e3 = u2), e3 !== u2 ? t4 = n4 = Ht() : (Te = t4, t4 = u2)) : (Te = t4, t4 = u2), t4;
      }
      function ro() {
        var t4, n4, e3, o3;
        return t4 = Te, r4.substr(Te, 3).toLowerCase() === Ut ? (n4 = r4.substr(Te, 3), Te += 3) : (n4 = u2, _e === 0 && Me(Bt)), n4 !== u2 ? (e3 = Te, _e++, o3 = au(), _e--, o3 === u2 ? e3 = void 0 : (Te = e3, e3 = u2), e3 !== u2 ? t4 = n4 = jt() : (Te = t4, t4 = u2)) : (Te = t4, t4 = u2), t4;
      }
      function to() {
        var t4, n4, e3, o3;
        return t4 = Te, r4.substr(Te, 2).toLowerCase() === Pt ? (n4 = r4.substr(Te, 2), Te += 2) : (n4 = u2, _e === 0 && Me(zt)), n4 !== u2 ? (e3 = Te, _e++, o3 = au(), _e--, o3 === u2 ? e3 = void 0 : (Te = e3, e3 = u2), e3 !== u2 ? t4 = n4 = Gt() : (Te = t4, t4 = u2)) : (Te = t4, t4 = u2), t4;
      }
      function no() {
        var t4, n4, e3, o3;
        return t4 = Te, r4.substr(Te, 7).toLowerCase() === Zt ? (n4 = r4.substr(Te, 7), Te += 7) : (n4 = u2, _e === 0 && Me(kt)), n4 !== u2 ? (e3 = Te, _e++, o3 = au(), _e--, o3 === u2 ? e3 = void 0 : (Te = e3, e3 = u2), e3 !== u2 ? t4 = n4 = Wt() : (Te = t4, t4 = u2)) : (Te = t4, t4 = u2), t4;
      }
      function eo() {
        var t4, n4, e3, o3;
        return t4 = Te, r4.substr(Te, 4).toLowerCase() === Yt ? (n4 = r4.substr(Te, 4), Te += 4) : (n4 = u2, _e === 0 && Me(qt)), n4 !== u2 ? (e3 = Te, _e++, o3 = au(), _e--, o3 === u2 ? e3 = void 0 : (Te = e3, e3 = u2), e3 !== u2 ? t4 = n4 = Kt() : (Te = t4, t4 = u2)) : (Te = t4, t4 = u2), t4;
      }
      function uo() {
        var t4, n4, e3, o3;
        return t4 = Te, r4.substr(Te, 3).toLowerCase() === Vt ? (n4 = r4.substr(Te, 3), Te += 3) : (n4 = u2, _e === 0 && Me(Xt)), n4 !== u2 ? (e3 = Te, _e++, o3 = au(), _e--, o3 === u2 ? e3 = void 0 : (Te = e3, e3 = u2), e3 !== u2 ? t4 = n4 = $t() : (Te = t4, t4 = u2)) : (Te = t4, t4 = u2), t4;
      }
      function oo() {
        var t4, n4, e3, o3;
        return t4 = Te, r4.substr(Te, 9).toLowerCase() === Jt ? (n4 = r4.substr(Te, 9), Te += 9) : (n4 = u2, _e === 0 && Me(Qt)), n4 !== u2 ? (e3 = Te, _e++, o3 = au(), _e--, o3 === u2 ? e3 = void 0 : (Te = e3, e3 = u2), e3 !== u2 ? t4 = n4 = rn() : (Te = t4, t4 = u2)) : (Te = t4, t4 = u2), t4;
      }
      function io() {
        var t4, n4, e3, o3;
        return t4 = Te, r4.substr(Te, 7).toLowerCase() === tn ? (n4 = r4.substr(Te, 7), Te += 7) : (n4 = u2, _e === 0 && Me(nn)), n4 !== u2 ? (e3 = Te, _e++, o3 = au(), _e--, o3 === u2 ? e3 = void 0 : (Te = e3, e3 = u2), e3 !== u2 ? t4 = n4 = en() : (Te = t4, t4 = u2)) : (Te = t4, t4 = u2), t4;
      }
      function ao() {
        var t4, n4, e3, o3;
        return t4 = Te, r4.substr(Te, 4).toLowerCase() === un ? (n4 = r4.substr(Te, 4), Te += 4) : (n4 = u2, _e === 0 && Me(on)), n4 !== u2 ? (e3 = Te, _e++, o3 = au(), _e--, o3 === u2 ? e3 = void 0 : (Te = e3, e3 = u2), e3 !== u2 ? t4 = n4 = an() : (Te = t4, t4 = u2)) : (Te = t4, t4 = u2), t4;
      }
      function so() {
        var t4, n4, e3, o3;
        return t4 = Te, r4.substr(Te, 8).toLowerCase() === sn ? (n4 = r4.substr(Te, 8), Te += 8) : (n4 = u2, _e === 0 && Me(cn)), n4 !== u2 ? (e3 = Te, _e++, o3 = au(), _e--, o3 === u2 ? e3 = void 0 : (Te = e3, e3 = u2), e3 !== u2 ? t4 = n4 = fn() : (Te = t4, t4 = u2)) : (Te = t4, t4 = u2), t4;
      }
      function co() {
        var t4, n4, e3, o3;
        return t4 = Te, r4.substr(Te, 9).toLowerCase() === ln ? (n4 = r4.substr(Te, 9), Te += 9) : (n4 = u2, _e === 0 && Me(vn)), n4 !== u2 ? (e3 = Te, _e++, o3 = au(), _e--, o3 === u2 ? e3 = void 0 : (Te = e3, e3 = u2), e3 !== u2 ? t4 = n4 = pn() : (Te = t4, t4 = u2)) : (Te = t4, t4 = u2), t4;
      }
      function fo() {
        var t4, n4, e3, o3;
        return t4 = Te, r4.substr(Te, 4).toLowerCase() === dn ? (n4 = r4.substr(Te, 4), Te += 4) : (n4 = u2, _e === 0 && Me(hn)), n4 !== u2 ? (e3 = Te, _e++, o3 = au(), _e--, o3 === u2 ? e3 = void 0 : (Te = e3, e3 = u2), e3 !== u2 ? t4 = n4 = bn() : (Te = t4, t4 = u2)) : (Te = t4, t4 = u2), t4;
      }
      function lo() {
        var t4, n4, e3, o3;
        return t4 = Te, r4.substr(Te, 7).toLowerCase() === yn ? (n4 = r4.substr(Te, 7), Te += 7) : (n4 = u2, _e === 0 && Me(An)), n4 !== u2 ? (e3 = Te, _e++, o3 = au(), _e--, o3 === u2 ? e3 = void 0 : (Te = e3, e3 = u2), e3 !== u2 ? t4 = n4 = Cn() : (Te = t4, t4 = u2)) : (Te = t4, t4 = u2), t4;
      }
      function vo() {
        var t4, n4, e3, o3;
        return t4 = Te, r4.substr(Te, 8).toLowerCase() === gn ? (n4 = r4.substr(Te, 8), Te += 8) : (n4 = u2, _e === 0 && Me(En)), n4 !== u2 ? (e3 = Te, _e++, o3 = au(), _e--, o3 === u2 ? e3 = void 0 : (Te = e3, e3 = u2), e3 !== u2 ? t4 = n4 = mn() : (Te = t4, t4 = u2)) : (Te = t4, t4 = u2), t4;
      }
      function po() {
        var t4, n4, e3, o3;
        return t4 = Te, r4.substr(Te, 4).toLowerCase() === Ln ? (n4 = r4.substr(Te, 4), Te += 4) : (n4 = u2, _e === 0 && Me(Tn)), n4 !== u2 ? (e3 = Te, _e++, o3 = au(), _e--, o3 === u2 ? e3 = void 0 : (Te = e3, e3 = u2), e3 !== u2 ? t4 = n4 = xn() : (Te = t4, t4 = u2)) : (Te = t4, t4 = u2), t4;
      }
      function ho() {
        var t4, n4, e3, o3;
        return t4 = Te, r4.substr(Te, 2).toLowerCase() === wn ? (n4 = r4.substr(Te, 2), Te += 2) : (n4 = u2, _e === 0 && Me(Nn)), n4 !== u2 ? (e3 = Te, _e++, o3 = au(), _e--, o3 === u2 ? e3 = void 0 : (Te = e3, e3 = u2), e3 !== u2 ? t4 = n4 = _n() : (Te = t4, t4 = u2)) : (Te = t4, t4 = u2), t4;
      }
      function bo() {
        var t4, n4, e3, o3;
        return t4 = Te, r4.substr(Te, 8).toLowerCase() === Rn ? (n4 = r4.substr(Te, 8), Te += 8) : (n4 = u2, _e === 0 && Me(In)), n4 !== u2 ? (e3 = Te, _e++, o3 = au(), _e--, o3 === u2 ? e3 = void 0 : (Te = e3, e3 = u2), e3 !== u2 ? t4 = n4 = On() : (Te = t4, t4 = u2)) : (Te = t4, t4 = u2), t4;
      }
      function yo() {
        var t4, n4, e3, o3;
        return t4 = Te, r4.substr(Te, 4).toLowerCase() === Fn ? (n4 = r4.substr(Te, 4), Te += 4) : (n4 = u2, _e === 0 && Me(Sn)), n4 !== u2 ? (e3 = Te, _e++, o3 = au(), _e--, o3 === u2 ? e3 = void 0 : (Te = e3, e3 = u2), e3 !== u2 ? t4 = n4 = Mn() : (Te = t4, t4 = u2)) : (Te = t4, t4 = u2), t4;
      }
      function Ao() {
        var t4, n4, e3, o3;
        return t4 = Te, r4.substr(Te, 5).toLowerCase() === Dn ? (n4 = r4.substr(Te, 5), Te += 5) : (n4 = u2, _e === 0 && Me(Hn)), n4 !== u2 ? (e3 = Te, _e++, o3 = au(), _e--, o3 === u2 ? e3 = void 0 : (Te = e3, e3 = u2), e3 !== u2 ? t4 = n4 = Un() : (Te = t4, t4 = u2)) : (Te = t4, t4 = u2), t4;
      }
      function Co() {
        var t4, n4, e3, o3;
        return t4 = Te, r4.substr(Te, 3).toLowerCase() === Bn ? (n4 = r4.substr(Te, 3), Te += 3) : (n4 = u2, _e === 0 && Me(jn)), n4 !== u2 ? (e3 = Te, _e++, o3 = au(), _e--, o3 === u2 ? e3 = void 0 : (Te = e3, e3 = u2), e3 !== u2 ? t4 = n4 = Pn() : (Te = t4, t4 = u2)) : (Te = t4, t4 = u2), t4;
      }
      function go() {
        var t4, n4, e3, o3;
        return t4 = Te, r4.substr(Te, 4).toLowerCase() === zn ? (n4 = r4.substr(Te, 4), Te += 4) : (n4 = u2, _e === 0 && Me(Gn)), n4 !== u2 ? (e3 = Te, _e++, o3 = au(), _e--, o3 === u2 ? e3 = void 0 : (Te = e3, e3 = u2), e3 !== u2 ? t4 = n4 = Zn() : (Te = t4, t4 = u2)) : (Te = t4, t4 = u2), t4;
      }
      function Eo() {
        var t4, n4, e3, o3;
        return t4 = Te, r4.substr(Te, 6).toLowerCase() === kn ? (n4 = r4.substr(Te, 6), Te += 6) : (n4 = u2, _e === 0 && Me(Wn)), n4 !== u2 ? (e3 = Te, _e++, o3 = au(), _e--, o3 === u2 ? e3 = void 0 : (Te = e3, e3 = u2), e3 !== u2 ? t4 = n4 = Yn() : (Te = t4, t4 = u2)) : (Te = t4, t4 = u2), t4;
      }
      function mo() {
        var t4, n4, e3, o3;
        return t4 = Te, r4.substr(Te, 6).toLowerCase() === qn ? (n4 = r4.substr(Te, 6), Te += 6) : (n4 = u2, _e === 0 && Me(Kn)), n4 !== u2 ? (e3 = Te, _e++, o3 = au(), _e--, o3 === u2 ? e3 = void 0 : (Te = e3, e3 = u2), e3 !== u2 ? t4 = n4 = Vn() : (Te = t4, t4 = u2)) : (Te = t4, t4 = u2), t4;
      }
      function Lo() {
        var t4, n4, e3, o3;
        return t4 = Te, r4.substr(Te, 4).toLowerCase() === Xn ? (n4 = r4.substr(Te, 4), Te += 4) : (n4 = u2, _e === 0 && Me($n)), n4 !== u2 ? (e3 = Te, _e++, o3 = au(), _e--, o3 === u2 ? e3 = void 0 : (Te = e3, e3 = u2), e3 !== u2 ? t4 = n4 = Jn() : (Te = t4, t4 = u2)) : (Te = t4, t4 = u2), t4;
      }
      function To() {
        var t4, n4, e3, o3;
        return t4 = Te, r4.substr(Te, 3).toLowerCase() === Qn ? (n4 = r4.substr(Te, 3), Te += 3) : (n4 = u2, _e === 0 && Me(re)), n4 !== u2 ? (e3 = Te, _e++, o3 = au(), _e--, o3 === u2 ? e3 = void 0 : (Te = e3, e3 = u2), e3 !== u2 ? t4 = n4 = te() : (Te = t4, t4 = u2)) : (Te = t4, t4 = u2), t4;
      }
      function xo() {
        var t4, n4, e3, o3;
        return t4 = Te, r4.substr(Te, 4).toLowerCase() === ne ? (n4 = r4.substr(Te, 4), Te += 4) : (n4 = u2, _e === 0 && Me(ee)), n4 !== u2 ? (e3 = Te, _e++, o3 = au(), _e--, o3 === u2 ? e3 = void 0 : (Te = e3, e3 = u2), e3 !== u2 ? t4 = n4 = ue() : (Te = t4, t4 = u2)) : (Te = t4, t4 = u2), t4;
      }
      function wo() {
        var t4, n4, e3, o3;
        return t4 = Te, r4.substr(Te, 4).toLowerCase() === oe ? (n4 = r4.substr(Te, 4), Te += 4) : (n4 = u2, _e === 0 && Me(ie)), n4 !== u2 ? (e3 = Te, _e++, o3 = au(), _e--, o3 === u2 ? e3 = void 0 : (Te = e3, e3 = u2), e3 !== u2 ? t4 = n4 = ae() : (Te = t4, t4 = u2)) : (Te = t4, t4 = u2), t4;
      }
      function No() {
        var t4, n4, e3, o3;
        return t4 = Te, r4.substr(Te, 4).toLowerCase() === se ? (n4 = r4.substr(Te, 4), Te += 4) : (n4 = u2, _e === 0 && Me(ce)), n4 !== u2 ? (e3 = Te, _e++, o3 = au(), _e--, o3 === u2 ? e3 = void 0 : (Te = e3, e3 = u2), e3 !== u2 ? t4 = n4 = fe() : (Te = t4, t4 = u2)) : (Te = t4, t4 = u2), t4;
      }
      function _o() {
        var t4;
        return r4.charCodeAt(Te) === 44 ? (t4 = le, Te++) : (t4 = u2, _e === 0 && Me(ve)), t4;
      }
      function Ro() {
        var t4;
        return r4.charCodeAt(Te) === 40 ? (t4 = pe, Te++) : (t4 = u2, _e === 0 && Me(de)), t4;
      }
      function Io() {
        var t4;
        return r4.charCodeAt(Te) === 41 ? (t4 = he, Te++) : (t4 = u2, _e === 0 && Me(be)), t4;
      }
      function Oo() {
        var r5, t4;
        for (r5 = [], t4 = Fo(); t4 !== u2; )
          r5.push(t4), t4 = Fo();
        return r5;
      }
      function Fo() {
        var t4;
        return ye.test(r4.charAt(Te)) ? (t4 = r4.charAt(Te), Te++) : (t4 = u2, _e === 0 && Me(Ae)), t4;
      }
      function So() {
        var t4, n4, e3, o3;
        if (t4 = Te, (n4 = ou()) !== u2 && (n4 = X(n4)), (t4 = n4) === u2)
          if (t4 = Te, r4.charCodeAt(Te) === 96 ? (n4 = Ce, Te++) : (n4 = u2, _e === 0 && Me(ge)), n4 !== u2) {
            if (e3 = [], Ee.test(r4.charAt(Te)) ? (o3 = r4.charAt(Te), Te++) : (o3 = u2, _e === 0 && Me(me)), o3 !== u2)
              for (; o3 !== u2; )
                e3.push(o3), Ee.test(r4.charAt(Te)) ? (o3 = r4.charAt(Te), Te++) : (o3 = u2, _e === 0 && Me(me));
            else
              e3 = u2;
            e3 !== u2 ? (r4.charCodeAt(Te) === 96 ? (o3 = Ce, Te++) : (o3 = u2, _e === 0 && Me(ge)), o3 !== u2 ? t4 = n4 = Le(e3) : (Te = t4, t4 = u2)) : (Te = t4, t4 = u2);
          } else
            Te = t4, t4 = u2;
        return t4;
      }
      function Mo(r5, t4) {
        return { type: "unary_expr", operator: r5, expr: t4 };
      }
      function Do(r5, t4, n4, e3) {
        var u3 = { type: "binary_expr", operator: r5, left: t4, right: n4 };
        return e3 !== void 0 && (u3.escape = e3), u3;
      }
      function Ho(r5, t4) {
        for (var n4 = [r5], e3 = 0; e3 < t4.length; e3++)
          n4.push(t4[e3][3]);
        return n4;
      }
      function Uo(r5, t4, n4) {
        return Ho(r5, t4);
      }
      function Bo(r5, t4) {
        for (var n4 = r5, e3 = 0; e3 < t4.length; e3++)
          n4 = Do(t4[e3][1], n4, t4[e3][3]);
        return n4;
      }
      if ((e2 = i()) !== u2 && Te === r4.length)
        return e2;
      throw e2 !== u2 && Te < r4.length && Me(Oe()), De(Ne, we < r4.length ? r4.charAt(we) : null, we < r4.length ? Se(we, we + 1) : Se(we, we));
    }
    return r3(t3, Error), t3.buildMessage = function(r4, t4) {
      var n3 = { literal: function(r5) {
        return '"' + u2(r5.text) + '"';
      }, class: function(r5) {
        var t5, n4 = "";
        for (t5 = 0; t5 < r5.parts.length; t5++)
          n4 += r5.parts[t5] instanceof Array ? o2(r5.parts[t5][0]) + "-" + o2(r5.parts[t5][1]) : o2(r5.parts[t5]);
        return "[" + (r5.inverted ? "^" : "") + n4 + "]";
      }, any: function(r5) {
        return "any character";
      }, end: function(r5) {
        return "end of input";
      }, other: function(r5) {
        return r5.description;
      } };
      function e2(r5) {
        return r5.charCodeAt(0).toString(16).toUpperCase();
      }
      function u2(r5) {
        return r5.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(r6) {
          return "\\x0" + e2(r6);
        }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(r6) {
          return "\\x" + e2(r6);
        });
      }
      function o2(r5) {
        return r5.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(r6) {
          return "\\x0" + e2(r6);
        }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(r6) {
          return "\\x" + e2(r6);
        });
      }
      function i(r5) {
        return n3[r5.type](r5);
      }
      function a2(r5) {
        var t5, n4, e3 = new Array(r5.length);
        for (t5 = 0; t5 < r5.length; t5++)
          e3[t5] = i(r5[t5]);
        if (e3.sort(), e3.length > 0) {
          for (t5 = 1, n4 = 1; t5 < e3.length; t5++)
            e3[t5 - 1] !== e3[t5] && (e3[n4] = e3[t5], n4++);
          e3.length = n4;
        }
        switch (e3.length) {
          case 1:
            return e3[0];
          case 2:
            return e3[0] + " or " + e3[1];
          default:
            return e3.slice(0, -1).join(", ") + ", or " + e3[e3.length - 1];
        }
      }
      function s(r5) {
        return r5 ? '"' + u2(r5) + '"' : "end of input";
      }
      return "Expected " + a2(r4) + " but " + s(t4) + " found.";
    }, { SyntaxError: t3, parse: n2 };
  }, r2.exports && (r2.exports = t2());
});
class e {
  static parse(r2) {
    return n.parse(r2);
  }
}
const l = /^(\d{4})-(\d{1,2})-(\d{1,2})$/, u = /^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2}(\.[0-9]+)?)$/, o = /^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2}(\.[0-9]+)?)(\+|\-)(\d{1,2}):(\d{1,2})$/, c = /^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2})(\+|\-)(\d{1,2}):(\d{1,2})$/, h = /^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2})$/;
function p(e2, t2) {
  return (e2 += "").length >= t2 ? e2 : new Array(t2 - e2.length + 1).join("0") + e2;
}
function d(e2, t2, a2 = "0", r2 = "0", s = "0", n2 = "0", i = "", l2 = "0", u2 = "0") {
  if (i === "+" || i === "-") {
    const o2 = `${p(parseInt(e2, 10), 4)}-${p(parseInt(t2, 10), 2)}-${p(parseInt(a2, 10), 2)}`;
    let c2 = "";
    parseFloat(n2) < 10 && (c2 = "0");
    const h2 = `${p(parseInt(r2, 10), 2)}:${p(parseInt(s, 10), 2)}:${c2 + parseFloat(n2).toString()}`, d2 = `${i}${p(parseInt(l2, 10), 2)}:${p(parseInt(u2, 10), 2)}`;
    return new Date(o2 + "T" + h2 + d2);
  }
  return new Date(parseInt(e2, 10), parseInt(t2, 10) - 1, parseInt(a2, 10), parseInt(r2, 10), parseInt(s, 10), parseFloat(n2));
}
class v {
  static makeBool(e2) {
    return g(e2);
  }
  static featureValue(e2, t2, a2, r2) {
    return _(e2, t2, a2, r2);
  }
  static equalsNull(e2) {
    return e2 === null;
  }
  static applyLike(e2, t2, a2) {
    return J(e2, t2, a2);
  }
  static ensureArray(e2) {
    return T(e2);
  }
  static applyIn(e2, t2) {
    return y(e2, t2);
  }
  static currentDate() {
    const e2 = new Date();
    return e2.setHours(0, 0, 0, 0), e2;
  }
  static makeSqlInterval(e2, t2, a2) {
    return e$1.createFromValueAndQualifer(e2, t2, a2);
  }
  static convertInterval(e2) {
    return e2 instanceof e$1 ? e2.valueInMilliseconds() : e2;
  }
  static currentTimestamp() {
    return new Date();
  }
  static compare(e2, t2, a2) {
    return b(e2, t2, a2);
  }
  static calculate(e2, t2, a2) {
    return D(e2, t2, a2);
  }
  static makeComparable(e2) {
    return A(e2);
  }
  static evaluateFunction(e2, t$12) {
    return t(e2, t$12);
  }
  static lookup(e2, t2) {
    const a2 = t2[e2];
    return a2 === void 0 ? null : a2;
  }
  static between(e2, t2) {
    return e2 == null || t2[0] == null || t2[1] == null ? null : e2 >= t2[0] && e2 <= t2[1];
  }
  static notbetween(e2, t2) {
    return e2 == null || t2[0] == null || t2[1] == null ? null : e2 < t2[0] || e2 > t2[1];
  }
  static ternaryNot(e2) {
    return S(e2);
  }
  static ternaryAnd(e2, t2) {
    return w(e2, t2);
  }
  static ternaryOr(e2, t2) {
    return I(e2, t2);
  }
}
class f {
  constructor(e$12, t2) {
    this.fieldsIndex = t2, this.datefields = {}, this.parameters = {}, this.parseTree = e.parse(e$12);
    const { isStandardized: a2, isAggregate: r2, referencedFieldNames: s } = this.extractExpressionInfo(t2);
    this.referencedFieldNames = s, this.isStandardized = a2, this.isAggregate = r2;
  }
  static create(e2, t2) {
    return new f(e2, t2);
  }
  get fieldNames() {
    return this.referencedFieldNames;
  }
  testSet(e2, t2 = M) {
    const a2 = {};
    for (const r2 of this.fieldNames)
      a2[r2] = e2.map((e3) => t2.getAttribute(e3, r2));
    return !!this.evaluateNode(this.parseTree, { attributes: a2 }, M);
  }
  calculateValue(e2, t2 = M) {
    const a2 = this.evaluateNode(this.parseTree, e2, t2);
    return a2 instanceof e$1 ? a2.valueInMilliseconds() / 864e5 : a2;
  }
  calculateValueCompiled(t2, a2 = M) {
    return this.parseTree._compiledVersion != null ? this.parseTree._compiledVersion(t2, this.parameters, a2, this.datefields) : t$2("csp-restrictions") ? this.calculateValue(t2, a2) : (this.compileMe(), this.parseTree._compiledVersion(t2, this.parameters, a2, this.datefields));
  }
  testFeature(e2, t2 = M) {
    return !!this.evaluateNode(this.parseTree, e2, t2);
  }
  testFeatureCompiled(t2, a2 = M) {
    return this.parseTree._compiledVersion != null ? !!this.parseTree._compiledVersion(t2, this.parameters, a2, this.datefields) : t$2("csp-restrictions") ? this.testFeature(t2, a2) : (this.compileMe(), !!this.parseTree._compiledVersion(t2, this.parameters, a2, this.datefields));
  }
  getFunctions() {
    const e2 = [];
    return this.visitAll(this.parseTree, (t2) => {
      t2.type === "function" && e2.push(t2.name.toLowerCase());
    }), x(e2);
  }
  getExpressions() {
    const e2 = new Map();
    return this.visitAll(this.parseTree, (t2) => {
      if (t2.type === "function") {
        const a2 = t2.name.toLowerCase(), r2 = t2.args.value[0];
        if (r2.type === "column_ref") {
          const t3 = r2.column, s = `${a2}-${t3}`;
          e2.has(s) || e2.set(s, { aggregateType: a2, field: t3 });
        }
      }
    }), [...e2.values()];
  }
  getVariables() {
    const e2 = [];
    return this.visitAll(this.parseTree, (t2) => {
      t2.type === "param" && e2.push(t2.value.toLowerCase());
    }), x(e2);
  }
  compileMe() {
    const e2 = "return this.convertInterval(" + this.evaluateNodeToJavaScript(this.parseTree) + ")";
    this.parseTree._compiledVersion = new Function("feature", "lookups", "attributeAdapter", "datefields", e2).bind(v);
  }
  extractExpressionInfo(e2) {
    const a2 = [];
    let r$12 = true, n2 = true;
    return this.visitAll(this.parseTree, (i) => {
      switch (i.type) {
        case "column_ref": {
          const t2 = e2.get(i.column), r2 = t2 && t2.name;
          !t2 || t2.type !== "date" && t2.type !== "esriFieldTypeDate" || (this.datefields[t2.name] = 1), r2 !== void 0 ? (a2.push(r2), i.column = r2) : a2.push(i.column);
          break;
        }
        case "function": {
          const { name: e3, args: a3 } = i, l2 = a3.value.length;
          r$12 && (r$12 = r(e3, l2)), n2 && (n2 = n$2(e3, l2));
          break;
        }
      }
    }), { referencedFieldNames: x(a2), isStandardized: r$12, isAggregate: n2 };
  }
  visitAll(e2, t2) {
    if (e2 != null)
      switch (t2(e2), e2.type) {
        case "when_clause":
          this.visitAll(e2.operand, t2), this.visitAll(e2.value, t2);
          break;
        case "case_expression":
          for (const a2 of e2.clauses)
            this.visitAll(a2, t2);
          e2.format === "simple" && this.visitAll(e2.operand, t2), e2.else !== null && this.visitAll(e2.else, t2);
          break;
        case "expr_list":
          for (const a2 of e2.value)
            this.visitAll(a2, t2);
          break;
        case "unary_expr":
          this.visitAll(e2.expr, t2);
          break;
        case "binary_expr":
          this.visitAll(e2.left, t2), this.visitAll(e2.right, t2);
          break;
        case "function":
          this.visitAll(e2.args, t2);
      }
  }
  evaluateNodeToJavaScript(e2) {
    switch (e2.type) {
      case "interval":
        return "this.makeSqlInterval(" + this.evaluateNodeToJavaScript(e2.value) + ", " + JSON.stringify(e2.qualifier) + "," + JSON.stringify(e2.op) + ")";
      case "case_expression": {
        let t2 = "";
        if (e2.format === "simple") {
          const a2 = "this.makeComparable(" + this.evaluateNodeToJavaScript(e2.operand) + ")";
          t2 = "( ";
          for (let r2 = 0; r2 < e2.clauses.length; r2++)
            t2 += " (" + a2 + " === this.makeComparable(" + this.evaluateNodeToJavaScript(e2.clauses[r2].operand) + ")) ? (" + this.evaluateNodeToJavaScript(e2.clauses[r2].value) + ") : ";
          e2.else !== null ? t2 += this.evaluateNodeToJavaScript(e2.else) : t2 += "null", t2 += " )";
        } else {
          t2 = "( ";
          for (let a2 = 0; a2 < e2.clauses.length; a2++)
            t2 += " this.makeBool(" + this.evaluateNodeToJavaScript(e2.clauses[a2].operand) + ")===true ? (" + this.evaluateNodeToJavaScript(e2.clauses[a2].value) + ") : ";
          e2.else !== null ? t2 += this.evaluateNodeToJavaScript(e2.else) : t2 += "null", t2 += " )";
        }
        return t2;
      }
      case "param":
        return "this.lookup(" + JSON.stringify(e2.value.toLowerCase()) + ",lookups)";
      case "expr_list": {
        let t2 = "[";
        for (const a2 of e2.value)
          t2 !== "[" && (t2 += ","), t2 += this.evaluateNodeToJavaScript(a2);
        return t2 += "]", t2;
      }
      case "unary_expr":
        return "this.ternaryNot(" + this.evaluateNodeToJavaScript(e2.expr) + ")";
      case "binary_expr":
        switch (e2.operator) {
          case "AND":
            return "this.ternaryAnd(" + this.evaluateNodeToJavaScript(e2.left) + "," + this.evaluateNodeToJavaScript(e2.right) + " )";
          case "OR":
            return "this.ternaryOr(" + this.evaluateNodeToJavaScript(e2.left) + "," + this.evaluateNodeToJavaScript(e2.right) + " )";
          case "IS":
            if (e2.right.type !== "null")
              throw new Error("Unsupported RHS for IS");
            return "this.equalsNull(" + this.evaluateNodeToJavaScript(e2.left) + ")";
          case "ISNOT":
            if (e2.right.type !== "null")
              throw new Error("Unsupported RHS for IS");
            return "(!(this.equalsNull(" + this.evaluateNodeToJavaScript(e2.left) + ")))";
          case "IN":
            return "this.applyIn(" + this.evaluateNodeToJavaScript(e2.left) + ",this.ensureArray(" + this.evaluateNodeToJavaScript(e2.right) + "))";
          case "NOT IN":
            return "this.ternaryNot(this.applyIn(" + this.evaluateNodeToJavaScript(e2.left) + ",this.ensureArray(" + this.evaluateNodeToJavaScript(e2.right) + ")))";
          case "BETWEEN":
            return "this.between(" + this.evaluateNodeToJavaScript(e2.left) + "," + this.evaluateNodeToJavaScript(e2.right) + ")";
          case "NOTBETWEEN":
            return "this.notbetween(" + this.evaluateNodeToJavaScript(e2.left) + "," + this.evaluateNodeToJavaScript(e2.right) + ")";
          case "LIKE":
            return "this.applyLike(" + this.evaluateNodeToJavaScript(e2.left) + "," + this.evaluateNodeToJavaScript(e2.right) + "," + JSON.stringify(e2.escape) + ")";
          case "NOT LIKE":
            return "this.ternaryNot(this.applyLike(" + this.evaluateNodeToJavaScript(e2.left) + "," + this.evaluateNodeToJavaScript(e2.right) + "," + JSON.stringify(e2.escape) + "))";
          case "<>":
          case "<":
          case ">":
          case ">=":
          case "<=":
          case "=":
            return "this.compare(" + JSON.stringify(e2.operator) + "," + this.evaluateNodeToJavaScript(e2.left) + "," + this.evaluateNodeToJavaScript(e2.right) + ")";
          case "*":
          case "-":
          case "+":
          case "/":
            return "this.calculate(" + JSON.stringify(e2.operator) + "," + this.evaluateNodeToJavaScript(e2.left) + "," + this.evaluateNodeToJavaScript(e2.right) + ")";
        }
        throw new Error("Not Supported Operator " + e2.operator);
      case "null":
      case "bool":
      case "string":
      case "number":
        return JSON.stringify(e2.value);
      case "date":
        return "(new Date(" + m(e2.value).getTime().toString() + "))";
      case "timestamp":
        return "(new Date(" + N(e2.value).getTime().toString() + "))";
      case "current_time":
        return e2.mode === "date" ? "this.currentDate()" : "this.currentTimestamp()";
      case "column_ref":
        return "this.featureValue(feature," + JSON.stringify(e2.column) + ",datefields,attributeAdapter)";
      case "function":
        return "this.evaluateFunction(" + JSON.stringify(e2.name) + "," + this.evaluateNodeToJavaScript(e2.args) + ")";
    }
    throw new Error("Unsupported sql syntax " + e2.type);
  }
  evaluateNode(e2, t$12, s) {
    switch (e2.type) {
      case "interval": {
        const a2 = this.evaluateNode(e2.value, t$12, s);
        return e$1.createFromValueAndQualifer(a2, e2.qualifier, e2.op);
      }
      case "case_expression":
        if (e2.format === "simple") {
          const a2 = A(this.evaluateNode(e2.operand, t$12, s));
          for (let r2 = 0; r2 < e2.clauses.length; r2++)
            if (a2 === A(this.evaluateNode(e2.clauses[r2].operand, t$12, s)))
              return this.evaluateNode(e2.clauses[r2].value, t$12, s);
          if (e2.else !== null)
            return this.evaluateNode(e2.else, t$12, s);
        } else {
          for (let a2 = 0; a2 < e2.clauses.length; a2++)
            if (g(this.evaluateNode(e2.clauses[a2].operand, t$12, s)))
              return this.evaluateNode(e2.clauses[a2].value, t$12, s);
          if (e2.else !== null)
            return this.evaluateNode(e2.else, t$12, s);
        }
        return null;
      case "param":
        return this.parameters[e2.value.toLowerCase()];
      case "expr_list": {
        const a2 = [];
        for (const r2 of e2.value)
          a2.push(this.evaluateNode(r2, t$12, s));
        return a2;
      }
      case "unary_expr":
        return S(this.evaluateNode(e2.expr, t$12, s));
      case "binary_expr":
        switch (e2.operator) {
          case "AND":
            return w(this.evaluateNode(e2.left, t$12, s), this.evaluateNode(e2.right, t$12, s));
          case "OR":
            return I(this.evaluateNode(e2.left, t$12, s), this.evaluateNode(e2.right, t$12, s));
          case "IS":
            if (e2.right.type !== "null")
              throw new Error("Unsupported RHS for IS");
            return this.evaluateNode(e2.left, t$12, s) === null;
          case "ISNOT":
            if (e2.right.type !== "null")
              throw new Error("Unsupported RHS for IS");
            return this.evaluateNode(e2.left, t$12, s) !== null;
          case "IN": {
            const a2 = T(this.evaluateNode(e2.right, t$12, s));
            return y(this.evaluateNode(e2.left, t$12, s), a2);
          }
          case "NOT IN": {
            const a2 = T(this.evaluateNode(e2.right, t$12, s));
            return S(y(this.evaluateNode(e2.left, t$12, s), a2));
          }
          case "BETWEEN": {
            const a2 = this.evaluateNode(e2.left, t$12, s), r2 = this.evaluateNode(e2.right, t$12, s);
            return a2 == null || r2[0] == null || r2[1] == null ? null : a2 >= A(r2[0]) && a2 <= A(r2[1]);
          }
          case "NOTBETWEEN": {
            const a2 = this.evaluateNode(e2.left, t$12, s), r2 = this.evaluateNode(e2.right, t$12, s);
            return a2 == null || r2[0] == null || r2[1] == null ? null : a2 < A(r2[0]) || a2 > A(r2[1]);
          }
          case "LIKE":
            return J(this.evaluateNode(e2.left, t$12, s), this.evaluateNode(e2.right, t$12, s), e2.escape);
          case "NOT LIKE":
            return S(J(this.evaluateNode(e2.left, t$12, s), this.evaluateNode(e2.right, t$12, s), e2.escape));
          case "<>":
          case "<":
          case ">":
          case ">=":
          case "<=":
          case "=":
            return b(e2.operator, this.evaluateNode(e2.left, t$12, s), this.evaluateNode(e2.right, t$12, s));
          case "-":
          case "+":
          case "*":
          case "/":
            return D(e2.operator, this.evaluateNode(e2.left, t$12, s), this.evaluateNode(e2.right, t$12, s));
        }
      case "null":
      case "bool":
      case "string":
      case "number":
        return e2.value;
      case "date":
        return m(e2.value);
      case "timestamp":
        return N(e2.value);
      case "current_time": {
        const t2 = new Date();
        return e2.mode === "date" && t2.setHours(0, 0, 0, 0), t2;
      }
      case "column_ref":
        return _(t$12, e2.column, this.datefields, s);
      case "function": {
        const r2 = this.evaluateNode(e2.args, t$12, s);
        return this.isAggregate ? a(e2.name, r2) : t(e2.name, r2);
      }
    }
    throw new Error("Unsupported sql syntax " + e2.type);
  }
}
function N(e2) {
  let t2 = u.exec(e2);
  if (t2 !== null) {
    const [, e3, a2, r2, s, n2, i] = t2;
    return d(e3, a2, r2, s, n2, i);
  }
  if (t2 = o.exec(e2), t2 !== null) {
    const [, e3, a2, r2, s, n2, i, l2, u2, o2] = t2;
    return d(e3, a2, r2, s, n2, i, l2, u2, o2);
  }
  if (t2 = c.exec(e2), t2 !== null) {
    const [, e3, a2, r2, s, n2, i, l2, u2] = t2;
    return d(e3, a2, r2, s, n2, "0", i, l2, u2);
  }
  if (t2 = h.exec(e2), t2 !== null) {
    const [, e3, a2, r2, s, n2] = t2;
    return d(e3, a2, r2, s, n2);
  }
  if (t2 = l.exec(e2), t2 !== null) {
    const [, e3, a2, r2] = t2;
    return d(e3, a2, r2);
  }
  throw new Error("SQL Invalid Timestamp");
}
function m(e2) {
  const t2 = l.exec(e2);
  if (t2 === null)
    throw new Error("SQL Invalid Date");
  const [, a2, r2, s] = t2;
  return new Date(parseInt(a2, 10), parseInt(r2, 10) - 1, parseInt(s, 10));
}
function g(e2) {
  return e2 === true;
}
function T(e2) {
  return Array.isArray(e2) ? e2 : [e2];
}
function S(e2) {
  return e2 !== null ? e2 !== true : null;
}
function w(e2, t2) {
  return e2 != null && t2 != null ? e2 === true && t2 === true : e2 !== false && t2 !== false && null;
}
function I(e2, t2) {
  return e2 != null && t2 != null ? e2 === true || t2 === true : e2 === true || t2 === true || null;
}
function y(e2, t2) {
  if (e2 == null)
    return null;
  let a2 = false;
  for (const r2 of t2)
    if (r2 == null)
      a2 = null;
    else if (e2 === r2) {
      a2 = true;
      break;
    }
  return a2;
}
function J(e2, t2, a2) {
  if (e2 == null)
    return null;
  const r2 = t2, s = a2;
  let n2 = "";
  const i = "-[]/{}()*+?.\\^$|";
  let l2 = 0;
  for (let u2 = 0; u2 < r2.length; u2++) {
    const e3 = r2.charAt(u2);
    switch (l2) {
      case 0:
        e3 === s ? l2 = 1 : i.indexOf(e3) >= 0 ? n2 += "\\" + e3 : n2 += e3 === "%" ? ".*" : e3 === "_" ? "." : e3;
        break;
      case 1:
        i.indexOf(e3) >= 0 ? n2 += "\\" + e3 : n2 += e3, l2 = 0;
    }
  }
  return new RegExp("^" + n2 + "$").test(e2);
}
function A(e2) {
  return e2 instanceof Date ? e2.valueOf() : e2;
}
function b(e2, t2, a2) {
  if (t2 == null || a2 == null)
    return null;
  const r2 = A(t2), s = A(a2);
  switch (e2) {
    case "<>":
      return r2 !== s;
    case "=":
      return r2 === s;
    case ">":
      return r2 > s;
    case "<":
      return r2 < s;
    case ">=":
      return r2 >= s;
    case "<=":
      return r2 <= s;
  }
}
function x(e2) {
  const t2 = [], a2 = {};
  for (const r2 of e2) {
    const e3 = r2.toLowerCase();
    a2[e3] === void 0 && (t2.push(r2), a2[e3] = 1);
  }
  return t2;
}
function D(e2, t2, a2) {
  if (t2 instanceof e$1)
    if (a2 instanceof Date)
      switch (e2) {
        case "+":
          return new Date(t2.valueInMilliseconds() + a2.getTime());
        case "-":
          return t2.valueInMilliseconds() - a2.getTime();
        case "*":
          return t2.valueInMilliseconds() * a2.getTime();
        case "/":
          return t2.valueInMilliseconds() / a2.getTime();
      }
    else if (a2 instanceof e$1)
      switch (e2) {
        case "+":
          return e$1.createFromMilliseconds(t2.valueInMilliseconds() + a2.valueInMilliseconds());
        case "-":
          return e$1.createFromMilliseconds(t2.valueInMilliseconds() - a2.valueInMilliseconds());
        case "*":
          return t2.valueInMilliseconds() * a2.valueInMilliseconds();
        case "/":
          return t2.valueInMilliseconds() / a2.valueInMilliseconds();
      }
    else
      t2 = t2.valueInMilliseconds();
  else if (a2 instanceof e$1)
    if (t2 instanceof Date)
      switch (e2) {
        case "+":
          return new Date(a2.valueInMilliseconds() + t2.getTime());
        case "-":
          return new Date(t2.getTime() - a2.valueInMilliseconds());
        case "*":
          return t2.getTime() * a2.valueInMilliseconds();
        case "/":
          return t2.getTime() / a2.valueInMilliseconds();
      }
    else
      a2 = a2.valueInMilliseconds();
  else if (t2 instanceof Date && typeof a2 == "number")
    switch (a2 = 24 * a2 * 60 * 60 * 1e3, t2 = t2.getTime(), e2) {
      case "+":
        return new Date(t2 + a2);
      case "-":
        return new Date(t2 - a2);
      case "*":
        return new Date(t2 * a2);
      case "/":
        return new Date(t2 / a2);
    }
  else if (a2 instanceof Date && typeof t2 == "number")
    switch (t2 = 24 * t2 * 60 * 60 * 1e3, a2 = a2.getTime(), e2) {
      case "+":
        return new Date(t2 + a2);
      case "-":
        return new Date(t2 - a2);
      case "*":
        return new Date(t2 * a2);
      case "/":
        return new Date(t2 / a2);
    }
  switch (e2) {
    case "+":
      return t2 + a2;
    case "-":
      return t2 - a2;
    case "*":
      return t2 * a2;
    case "/":
      return t2 / a2;
  }
}
function E(e2) {
  return e2 && typeof e2.attributes == "object";
}
function _(e2, t2, a2, r2) {
  const s = r2.getAttribute(e2, t2);
  return s != null && a2[t2] === 1 ? new Date(s) : s;
}
const M = { getAttribute: (e2, t2) => (E(e2) ? e2.attributes : e2)[t2] };
export { f as WhereClause, M as defaultAttributeAdapter };
