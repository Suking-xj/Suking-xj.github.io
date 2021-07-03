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
import { cW as p$1, dU as p$2 } from "./vendor.74d5941c.js";
function e(n) {
  var t;
  return Array.isArray(n) ? (t = n[0]) == null ? void 0 : t.spatialReference : n == null ? void 0 : n.spatialReference;
}
function i(n) {
  return n ? Array.isArray(n) ? n.map(i) : n.toJSON ? n.toJSON() : n : n;
}
function a(n) {
  return Array.isArray(n) ? n.map((n2) => p$1(n2)) : p$1(n);
}
function o(n, t) {
  let r;
  return Array.isArray(n) ? r = n : (r = [], r.push(n), t != null && r.push(t)), r;
}
let c;
function u() {
  return __async(this, null, function* () {
    return c || (c = p$2("geometryEngineWorker", { strategy: "distributed" })), c;
  });
}
function s(n, t) {
  return __async(this, null, function* () {
    return (yield u()).invoke("executeGEOperation", { operation: n, parameters: i(t) });
  });
}
function l(n, t) {
  return __async(this, null, function* () {
    return a(yield s("clip", [e(n), n, t]));
  });
}
function y(n, t) {
  return __async(this, null, function* () {
    return a(yield s("cut", [e(n), n, t]));
  });
}
function p(n, t) {
  return s("contains", [e(n), n, t]);
}
function w(n, t) {
  return s("crosses", [e(n), n, t]);
}
function m(n, t, r) {
  return s("distance", [e(n), n, t, r]);
}
function d(n, t) {
  return s("equals", [e(n), n, t]);
}
function g(n, t) {
  return s("intersects", [e(n), n, t]);
}
function A(n, t) {
  return s("touches", [e(n), n, t]);
}
function x(n, t) {
  return s("within", [e(n), n, t]);
}
function S(n, t) {
  return s("disjoint", [e(n), n, t]);
}
function O(n, t) {
  return s("overlaps", [e(n), n, t]);
}
function h(n, t, r) {
  return s("relate", [e(n), n, t, r]);
}
function v(n) {
  return s("isSimple", [e(n), n]);
}
function J(n) {
  return __async(this, null, function* () {
    return a(yield s("simplify", [e(n), n]));
  });
}
function R(n, t) {
  return __async(this, null, function* () {
    return a(yield s("difference", [e(n), n, t]));
  });
}
function E(n, t) {
  return __async(this, null, function* () {
    return a(yield s("symmetricDifference", [e(n), n, t]));
  });
}
function j(n, t) {
  return __async(this, null, function* () {
    return a(yield s("intersect", [e(n), n, t]));
  });
}
function k(n, t = null) {
  return __async(this, null, function* () {
    const r = o(n, t);
    return a(yield s("union", [e(r), r]));
  });
}
function I(n, t, r, i2, o2, c2) {
  return __async(this, null, function* () {
    return a(yield s("offset", [e(n), n, t, r, i2, o2, c2]));
  });
}
function V(n, t, r, i2 = false) {
  return __async(this, null, function* () {
    const o2 = [e(n), n, t, r, i2];
    return a(yield s("buffer", o2));
  });
}
function b(n, t, r, i2, o2, c2) {
  return __async(this, null, function* () {
    const u2 = [e(n), n, t, r, i2, o2, c2];
    return a(yield s("geodesicBuffer", u2));
  });
}
function L(n) {
  return "xmin" in n ? n.center : "x" in n ? n : n.extent.center;
}
function q(n, t, r) {
  return __async(this, null, function* () {
    var e2;
    if (n == null)
      throw new Error("Illegal Argument Exception");
    const i2 = n.spatialReference;
    r = (e2 = r) != null ? e2 : L(n);
    const a2 = n.constructor.fromJSON(yield s("rotate", [i2, n, t, r]));
    return a2.spatialReference = i2, a2;
  });
}
function G(n, t, r, i2) {
  return __async(this, null, function* () {
    return a(yield s("generalize", [e(n), n, t, r, i2]));
  });
}
function P(n, t, r) {
  return __async(this, null, function* () {
    return a(yield s("densify", [e(n), n, t, r]));
  });
}
function U(n, t, r, i2 = 0) {
  return __async(this, null, function* () {
    return a(yield s("geodesicDensify", [e(n), n, t, r, i2]));
  });
}
function W(n, t) {
  return s("planarArea", [e(n), n, t]);
}
function F(n, t) {
  return s("planarLength", [e(n), n, t]);
}
function K(n, t, r) {
  return s("geodesicArea", [e(n), n, t, r]);
}
function M(n, t, r) {
  return s("geodesicLength", [e(n), n, t, r]);
}
export { A, E, F, G, I, J, K, M, O, P, R, S, U, V, W, b, d, g, h, j, k, l, m, p, q, v, w, x, y };
