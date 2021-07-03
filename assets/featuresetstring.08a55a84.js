import { J, k as g, K, X, i as h, al as D, l as k, am as oe, an as re, ao as ie, ap as H, M as O } from "./arcadeUtils.f4f7c393.js";
import "./vendor.74d5941c.js";
import "./number.c0719e5d.js";
import "./FeatureSetReader.a91e3e2d.js";
import "./centroid.93c1b848.js";
function f(n) {
  return n && n.domain ? n.domain.type === "coded-value" || n.domain.type === "codedValue" ? h.convertObjectToArcadeDictionary({ type: "codedValue", name: n.domain.name, dataType: D[n.field.type], codedValues: n.domain.codedValues.map((n2) => ({ name: n2.name, code: n2.code })) }) : h.convertObjectToArcadeDictionary({ type: "range", name: n.domain.name, dataType: D[n.field.type], min: n.domain.min, max: n.domain.max }) : null;
}
function l(s) {
  s.mode === "async" && (s.functions.domain = function(a, i) {
    return s.standardFunctionAsync(a, i, function(a2, i2, c) {
      if (J(c, 2, 3), c[0] instanceof g) {
        return f(c[0].fullDomain(K(c[1]), c[2] === void 0 ? void 0 : X(c[2])));
      }
      if (k(c[0]))
        return c[0]._ensureLoaded().then(() => f(oe(K(c[1]), c[0], null, c[2] === void 0 ? void 0 : X(c[2]))));
      throw new Error("Invalid Parameter");
    });
  }, s.functions.subtypes = function(e, t) {
    return s.standardFunctionAsync(e, t, function(e2, t2, o) {
      if (J(o, 1, 1), o[0] instanceof g) {
        const n = o[0].subtypes();
        return n ? h.convertObjectToArcadeDictionary(n) : null;
      }
      if (k(o[0]))
        return o[0]._ensureLoaded().then(() => {
          const n = o[0].subtypes();
          return n ? h.convertObjectToArcadeDictionary(n) : null;
        });
      throw new Error("Invalid Parameter");
    });
  }, s.functions.domainname = function(i, c) {
    return s.standardFunctionAsync(i, c, function(i2, c2, u) {
      if (J(u, 2, 4), u[0] instanceof g)
        return u[0].domainValueLookup(K(u[1]), u[2], u[3] === void 0 ? void 0 : X(u[3]));
      if (k(u[0]))
        return u[0]._ensureLoaded().then(() => {
          const n = oe(K(u[1]), u[0], null, u[3] === void 0 ? void 0 : X(u[3]));
          return re(n, u[2]);
        });
      throw new Error("Invalid Parameter");
    });
  }, s.signatures.push({ name: "domainname", min: "2", max: "4" }), s.functions.domaincode = function(a, c) {
    return s.standardFunctionAsync(a, c, function(a2, c2, u) {
      if (J(u, 2, 4), u[0] instanceof g)
        return u[0].domainCodeLookup(K(u[1]), u[2], u[3] === void 0 ? void 0 : X(u[3]));
      if (k(u[0]))
        return u[0]._ensureLoaded().then(() => {
          const n = oe(K(u[1]), u[0], null, u[3] === void 0 ? void 0 : X(u[3]));
          return ie(n, u[2]);
        });
      throw new Error("Invalid Parameter");
    });
  }, s.signatures.push({ name: "domaincode", min: "2", max: "4" })), s.functions.text = function(e, t) {
    return s.standardFunctionAsync(e, t, function(e2, t2, o) {
      if (J(o, 1, 2), !k(o[0]))
        return H(o[0], o[1]);
      {
        const n = O(o[1], "");
        if (n === "")
          return o[0].castToText();
        if (n.toLowerCase() === "schema")
          return o[0].convertToText("schema", e2.abortSignal);
        if (n.toLowerCase() === "featureset")
          return o[0].convertToText("featureset", e2.abortSignal);
      }
    });
  }, s.functions.gdbversion = function(e, t) {
    return s.standardFunctionAsync(e, t, function(e2, t2, o) {
      if (J(o, 1, 1), o[0] instanceof g)
        return o[0].gdbVersion();
      if (k(o[0]))
        return o[0].load().then((n) => n.gdbVersion);
      throw new Error("Invalid Parameter");
    });
  }, s.functions.schema = function(e, t) {
    return s.standardFunctionAsync(e, t, function(e2, t2, o) {
      if (J(o, 1, 1), k(o[0]))
        return o[0].load().then(() => h.convertObjectToArcadeDictionary(o[0].schema()));
      if (o[0] instanceof g) {
        const n = o[0].schema();
        return n ? h.convertObjectToArcadeDictionary(n) : null;
      }
      throw new Error("Invalid Parameter");
    });
  };
}
export { l as registerFunctions };
