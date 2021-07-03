import { fg as x, fk as s, fh as L } from "./vendor.74d5941c.js";
import { J, l as k, Z, F, E, aj as l$1, M as O } from "./arcadeUtils.f4f7c393.js";
import { WhereClause as f } from "./WhereClause.f27c6004.js";
import "./number.c0719e5d.js";
import "./FeatureSetReader.a91e3e2d.js";
import "./centroid.93c1b848.js";
import "./_commonjsHelpers.f2a458db.js";
function l(t, r, e, o, l2, m2) {
  if (o.length === 1) {
    if (Z(o[0]))
      return x(l$1(t, o[0], O(o[1], -1)));
    if (E(o[0]))
      return x(l$1(t, o[0].toArray(), O(o[1], -1)));
  } else if (o.length === 2) {
    if (Z(o[0]))
      return x(l$1(t, o[0], O(o[1], -1)));
    if (E(o[0]))
      return x(l$1(t, o[0].toArray(), O(o[1], -1)));
    if (k(o[0]))
      return o[0].load().then((n) => d(f.create(o[1], n.getFieldsIndex()), m2, l2).then((n2) => o[0].calculateStatistic(t, n2, O(o[2], 1e3), r.abortSignal)));
  } else if (o.length === 3 && k(o[0]))
    return o[0].load().then((n) => d(f.create(o[1], n.getFieldsIndex()), m2, l2).then((n2) => o[0].calculateStatistic(t, n2, O(o[2], 1e3), r.abortSignal)));
  return x(l$1(t, o, -1));
}
function d(e, u, i) {
  try {
    const r = e.getVariables();
    if (r.length > 0) {
      const n = [];
      for (let t = 0; t < r.length; t++) {
        const e2 = { name: r[t] };
        n.push(u.evaluateIdentifier(i, e2));
      }
      return s(n).then((n2) => {
        const t = {};
        for (let e2 = 0; e2 < r.length; e2++)
          t[r[e2]] = n2[e2];
        return e.parameters = t, e;
      });
    }
    return x(e);
  } catch (o) {
    return L(o);
  }
}
function m(n) {
  n.mode === "async" && (n.functions.stdev = function(t, r) {
    return n.standardFunctionAsync(t, r, function(r2, e, u) {
      return l("stdev", r2, e, u, t, n);
    });
  }, n.functions.variance = function(t, r) {
    return n.standardFunctionAsync(t, r, function(r2, e, u) {
      return l("variance", r2, e, u, t, n);
    });
  }, n.functions.average = function(t, r) {
    return n.standardFunctionAsync(t, r, function(r2, e, u) {
      return l("mean", r2, e, u, t, n);
    });
  }, n.functions.mean = function(t, r) {
    return n.standardFunctionAsync(t, r, function(r2, e, u) {
      return l("mean", r2, e, u, t, n);
    });
  }, n.functions.sum = function(t, r) {
    return n.standardFunctionAsync(t, r, function(r2, e, u) {
      return l("sum", r2, e, u, t, n);
    });
  }, n.functions.min = function(t, r) {
    return n.standardFunctionAsync(t, r, function(r2, e, u) {
      return l("min", r2, e, u, t, n);
    });
  }, n.functions.max = function(t, r) {
    return n.standardFunctionAsync(t, r, function(r2, e, u) {
      return l("max", r2, e, u, t, n);
    });
  }, n.functions.count = function(t, r) {
    return n.standardFunctionAsync(t, r, function(n2, t2, r2) {
      if (J(r2, 1, 1), k(r2[0]))
        return r2[0].count(n2.abortSignal);
      if (Z(r2[0]) || F(r2[0]))
        return r2[0].length;
      if (E(r2[0]))
        return r2[0].length();
      throw new Error("Invalid Parameters for Count");
    });
  });
}
export { m as registerFunctions };
