import { em as c, cr as M, dp as m, _ as j$1, bG as x$1, f0 as t, dn as m$2, cW as p$1 } from "./vendor.74d5941c.js";
import { G as se, J, P, K, Z, E, x as te, H as c$1, l as k$1, L as r, M as O$1, Q as fe, R as a, U as ce, V as me, X, W as ee, Y as a$1, $ as f } from "./arcadeUtils.f4f7c393.js";
import { S, g, A, w, x, p, O, d, h, j, k, R, E as E$1, l, y, W, K as K$1, F, M as M$1, m as m$1, P as P$1, U, G, V, b, I, q, J as J$1, v } from "./geometryEngineAsync.6e91af62.js";
import "./number.c0719e5d.js";
import "./FeatureSetReader.a91e3e2d.js";
import "./centroid.93c1b848.js";
function tn(n) {
  return t.indexOf("4.") === 0 ? x$1.fromExtent(n) : new x$1({ spatialReference: n.spatialReference, rings: [[[n.xmin, n.ymin], [n.xmin, n.ymax], [n.xmax, n.ymax], [n.xmax, n.ymin], [n.xmin, n.ymin]]] });
}
function en(r2) {
  if (J(r2, 2, 2), r2[0] instanceof c && r2[1] instanceof c)
    ;
  else if (r2[0] instanceof c && r2[1] === null)
    ;
  else if (r2[1] instanceof c && r2[0] === null)
    ;
  else if (r2[0] !== null || r2[1] !== null)
    throw new Error("Illegal Argument");
}
function on(l$1) {
  l$1.mode === "async" && (l$1.functions.disjoint = function(n, r2) {
    return l$1.standardFunctionAsync(n, r2, function(n2, r3, t2) {
      return en(t2 = se(t2)), t2[0] === null || t2[1] === null || S(t2[0], t2[1]);
    });
  }, l$1.functions.intersects = function(n, r2) {
    return l$1.standardFunctionAsync(n, r2, function(n2, r3, t2) {
      return en(t2 = se(t2)), t2[0] !== null && t2[1] !== null && g(t2[0], t2[1]);
    });
  }, l$1.functions.touches = function(n, r2) {
    return l$1.standardFunctionAsync(n, r2, function(n2, r3, t2) {
      return en(t2 = se(t2)), t2[0] !== null && t2[1] !== null && A(t2[0], t2[1]);
    });
  }, l$1.functions.crosses = function(n, r2) {
    return l$1.standardFunctionAsync(n, r2, function(n2, r3, t2) {
      return en(t2 = se(t2)), t2[0] !== null && t2[1] !== null && w(t2[0], t2[1]);
    });
  }, l$1.functions.within = function(n, r2) {
    return l$1.standardFunctionAsync(n, r2, function(n2, r3, t2) {
      return en(t2 = se(t2)), t2[0] !== null && t2[1] !== null && x(t2[0], t2[1]);
    });
  }, l$1.functions.contains = function(n, r2) {
    return l$1.standardFunctionAsync(n, r2, function(n2, r3, t2) {
      return en(t2 = se(t2)), t2[0] !== null && t2[1] !== null && p(t2[0], t2[1]);
    });
  }, l$1.functions.overlaps = function(n, r2) {
    return l$1.standardFunctionAsync(n, r2, function(n2, r3, t2) {
      return en(t2 = se(t2)), t2[0] !== null && t2[1] !== null && O(t2[0], t2[1]);
    });
  }, l$1.functions.equals = function(r2, t2) {
    return l$1.standardFunctionAsync(r2, t2, function(r3, t3, e) {
      return J(e, 2, 2), e[0] === e[1] || (e[0] instanceof c && e[1] instanceof c ? d(e[0], e[1]) : !(!P(e[0]) || !P(e[1])) && e[0].getTime() === e[1].getTime());
    });
  }, l$1.functions.relate = function(r2, t2) {
    return l$1.standardFunctionAsync(r2, t2, function(r3, t3, e) {
      if (e = se(e), J(e, 3, 3), e[0] instanceof c && e[1] instanceof c)
        return h(e[0], e[1], K(e[2]));
      if (e[0] instanceof c && e[1] === null)
        return false;
      if (e[1] instanceof c && e[0] === null)
        return false;
      if (e[0] === null && e[1] === null)
        return false;
      throw new Error("Illegal Argument");
    });
  }, l$1.functions.intersection = function(n, r2) {
    return l$1.standardFunctionAsync(n, r2, function(n2, r3, t2) {
      return en(t2 = se(t2)), t2[0] === null || t2[1] === null ? null : j(t2[0], t2[1]);
    });
  }, l$1.functions.union = function(r2, t2) {
    return l$1.standardFunctionAsync(r2, t2, function(t3, e, o) {
      const i = [];
      if ((o = se(o)).length === 0)
        throw new Error("Function called with wrong number of Parameters");
      if (o.length === 1)
        if (Z(o[0])) {
          const r3 = se(o[0]);
          for (let t4 = 0; t4 < r3.length; t4++)
            if (r3[t4] !== null) {
              if (!(r3[t4] instanceof c))
                throw new Error("Illegal Argument");
              i.push(r3[t4]);
            }
        } else {
          if (!E(o[0])) {
            if (o[0] instanceof c)
              return te(c$1(o[0]), r2.spatialReference);
            if (o[0] === null)
              return null;
            throw new Error("Illegal Argument");
          }
          {
            const r3 = se(o[0].toArray());
            for (let t4 = 0; t4 < r3.length; t4++)
              if (r3[t4] !== null) {
                if (!(r3[t4] instanceof c))
                  throw new Error("Illegal Argument");
                i.push(r3[t4]);
              }
          }
        }
      else
        for (let r3 = 0; r3 < o.length; r3++)
          if (o[r3] !== null) {
            if (!(o[r3] instanceof c))
              throw new Error("Illegal Argument");
            i.push(o[r3]);
          }
      return i.length === 0 ? null : k(i);
    });
  }, l$1.functions.difference = function(n, r2) {
    return l$1.standardFunctionAsync(n, r2, function(n2, r3, t2) {
      return en(t2 = se(t2)), t2[0] !== null && t2[1] === null ? c$1(t2[0]) : t2[0] === null ? null : R(t2[0], t2[1]);
    });
  }, l$1.functions.symmetricdifference = function(n, r2) {
    return l$1.standardFunctionAsync(n, r2, function(n2, r3, t2) {
      return en(t2 = se(t2)), t2[0] === null && t2[1] === null ? null : t2[0] === null ? c$1(t2[1]) : t2[1] === null ? c$1(t2[0]) : E$1(t2[0], t2[1]);
    });
  }, l$1.functions.clip = function(r2, e) {
    return l$1.standardFunctionAsync(r2, e, function(r3, e2, o) {
      if (o = se(o), J(o, 2, 2), !(o[1] instanceof M) && o[1] !== null)
        throw new Error("Illegal Argument");
      if (o[0] === null)
        return null;
      if (!(o[0] instanceof c))
        throw new Error("Illegal Argument");
      return o[1] === null ? null : l(o[0], o[1]);
    });
  }, l$1.functions.cut = function(r2, t2) {
    return l$1.standardFunctionAsync(r2, t2, function(r3, t3, e) {
      if (e = se(e), J(e, 2, 2), !(e[1] instanceof m) && e[1] !== null)
        throw new Error("Illegal Argument");
      if (e[0] === null)
        return [];
      if (!(e[0] instanceof c))
        throw new Error("Illegal Argument");
      return e[1] === null ? [c$1(e[0])] : y(e[0], e[1]);
    });
  }, l$1.functions.area = function(r$1, t2) {
    return l$1.standardFunctionAsync(r$1, t2, function(t3, e, o) {
      if (J(o, 1, 2), (o = se(o))[0] === null)
        return 0;
      if (k$1(o[0]))
        return o[0].sumArea(r(O$1(o[1], -1)), false, r$1.abortSignal).then((n) => {
          if (r$1.abortSignal.aborted)
            throw new Error("Operation has been cancelled.");
          return n;
        });
      if (Z(o[0]) || E(o[0])) {
        const n = fe(o[0], r$1.spatialReference);
        return n === null ? 0 : W(n, r(O$1(o[1], -1)));
      }
      if (!(o[0] instanceof c))
        throw new Error("Illegal Argument");
      return W(o[0], r(O$1(o[1], -1)));
    });
  }, l$1.functions.areageodetic = function(r$1, t2) {
    return l$1.standardFunctionAsync(r$1, t2, function(t3, e, o) {
      if (J(o, 1, 2), (o = se(o))[0] === null)
        return 0;
      if (k$1(o[0]))
        return o[0].sumArea(r(O$1(o[1], -1)), true, r$1.abortSignal).then((n) => {
          if (r$1.abortSignal.aborted)
            throw new Error("Operation has been cancelled.");
          return n;
        });
      if (Z(o[0]) || E(o[0])) {
        const n = fe(o[0], r$1.spatialReference);
        return n === null ? 0 : K$1(n, r(O$1(o[1], -1)));
      }
      if (!(o[0] instanceof c))
        throw new Error("Illegal Argument");
      return K$1(o[0], r(O$1(o[1], -1)));
    });
  }, l$1.functions.length = function(r2, t2) {
    return l$1.standardFunctionAsync(r2, t2, function(t3, e, o) {
      if (J(o, 1, 2), (o = se(o))[0] === null)
        return 0;
      if (k$1(o[0]))
        return o[0].sumLength(a(O$1(o[1], -1)), false, r2.abortSignal).then((n) => {
          if (r2.abortSignal.aborted)
            throw new Error("Operation has been cancelled.");
          return n;
        });
      if (Z(o[0]) || E(o[0])) {
        const n = ce(o[0], r2.spatialReference);
        return n === null ? 0 : F(n, a(O$1(o[1], -1)));
      }
      if (!(o[0] instanceof c))
        throw new Error("Illegal Argument");
      return F(o[0], a(O$1(o[1], -1)));
    });
  }, l$1.functions.lengthgeodetic = function(r2, t2) {
    return l$1.standardFunctionAsync(r2, t2, function(t3, e, o) {
      if (J(o, 1, 2), (o = se(o))[0] === null)
        return 0;
      if (k$1(o[0]))
        return o[0].sumLength(a(O$1(o[1], -1)), true, r2.abortSignal).then((n) => {
          if (r2.abortSignal.aborted)
            throw new Error("Operation has been cancelled.");
          return n;
        });
      if (Z(o[0]) || E(o[0])) {
        const n = ce(o[0], r2.spatialReference);
        return n === null ? 0 : M$1(n, a(O$1(o[1], -1)));
      }
      if (!(o[0] instanceof c))
        throw new Error("Illegal Argument");
      return M$1(o[0], a(O$1(o[1], -1)));
    });
  }, l$1.functions.distance = function(r2, t2) {
    return l$1.standardFunctionAsync(r2, t2, function(t3, e, o) {
      o = se(o), J(o, 2, 3);
      let i = o[0];
      (Z(o[0]) || E(o[0])) && (i = me(o[0], r2.spatialReference));
      let u = o[1];
      if ((Z(o[1]) || E(o[1])) && (u = me(o[1], r2.spatialReference)), !(i instanceof c))
        throw new Error("Illegal Argument");
      if (!(u instanceof c))
        throw new Error("Illegal Argument");
      return m$1(i, u, a(O$1(o[2], -1)));
    });
  }, l$1.functions.distancegeodetic = function(n, t2) {
    return l$1.standardFunctionAsync(n, t2, function(n2, t3, e) {
      e = se(e), J(e, 2, 3);
      const o = e[0], u = e[1];
      if (!(o instanceof j$1))
        throw new Error("Illegal Argument");
      if (!(u instanceof j$1))
        throw new Error("Illegal Argument");
      const l2 = new m({ paths: [], spatialReference: o.spatialReference });
      return l2.addPath([o, u]), M$1(l2, a(O$1(e[2], -1)));
    });
  }, l$1.functions.densify = function(r2, e) {
    return l$1.standardFunctionAsync(r2, e, function(r3, e2, u) {
      if (u = se(u), J(u, 2, 3), u[0] === null)
        return null;
      if (!(u[0] instanceof c))
        throw new Error("Illegal Argument");
      const l2 = X(u[1]);
      if (isNaN(l2))
        throw new Error("Illegal Argument");
      if (l2 <= 0)
        throw new Error("Illegal Argument");
      return u[0] instanceof x$1 || u[0] instanceof m ? P$1(u[0], l2, a(O$1(u[2], -1))) : u[0] instanceof M ? P$1(tn(u[0]), l2, a(O$1(u[2], -1))) : u[0];
    });
  }, l$1.functions.densifygeodetic = function(r2, e) {
    return l$1.standardFunctionAsync(r2, e, function(r3, e2, u) {
      if (u = se(u), J(u, 2, 3), u[0] === null)
        return null;
      if (!(u[0] instanceof c))
        throw new Error("Illegal Argument");
      const l2 = X(u[1]);
      if (isNaN(l2))
        throw new Error("Illegal Argument");
      if (l2 <= 0)
        throw new Error("Illegal Argument");
      return u[0] instanceof x$1 || u[0] instanceof m ? U(u[0], l2, a(O$1(u[2], -1))) : u[0] instanceof M ? U(tn(u[0]), l2, a(O$1(u[2], -1))) : u[0];
    });
  }, l$1.functions.generalize = function(r2, t2) {
    return l$1.standardFunctionAsync(r2, t2, function(r3, t3, e) {
      if (e = se(e), J(e, 2, 4), e[0] === null)
        return null;
      if (!(e[0] instanceof c))
        throw new Error("Illegal Argument");
      const o = X(e[1]);
      if (isNaN(o))
        throw new Error("Illegal Argument");
      return G(e[0], o, ee(O$1(e[2], true)), a(O$1(e[3], -1)));
    });
  }, l$1.functions.buffer = function(r2, t2) {
    return l$1.standardFunctionAsync(r2, t2, function(r3, t3, e) {
      if (e = se(e), J(e, 2, 3), e[0] === null)
        return null;
      if (!(e[0] instanceof c))
        throw new Error("Illegal Argument");
      const o = X(e[1]);
      if (isNaN(o))
        throw new Error("Illegal Argument");
      return o === 0 ? c$1(e[0]) : V(e[0], o, a(O$1(e[2], -1)));
    });
  }, l$1.functions.buffergeodetic = function(r2, t2) {
    return l$1.standardFunctionAsync(r2, t2, function(r3, t3, e) {
      if (e = se(e), J(e, 2, 3), e[0] === null)
        return null;
      if (!(e[0] instanceof c))
        throw new Error("Illegal Argument");
      const o = X(e[1]);
      if (isNaN(o))
        throw new Error("Illegal Argument");
      return o === 0 ? c$1(e[0]) : b(e[0], o, a(O$1(e[2], -1)));
    });
  }, l$1.functions.offset = function(n, r2) {
    return l$1.standardFunctionAsync(n, r2, function(n2, r3, t2) {
      if (t2 = se(t2), J(t2, 2, 6), t2[0] === null)
        return null;
      if (!(t2[0] instanceof x$1 || t2[0] instanceof m))
        throw new Error("Illegal Argument");
      const e = X(t2[1]);
      if (isNaN(e))
        throw new Error("Illegal Argument");
      const u = X(O$1(t2[4], 10));
      if (isNaN(u))
        throw new Error("Illegal Argument");
      const l2 = X(O$1(t2[5], 0));
      if (isNaN(l2))
        throw new Error("Illegal Argument");
      return I(t2[0], e, a(O$1(t2[2], -1)), K(O$1(t2[3], "round")).toLowerCase(), u, l2);
    });
  }, l$1.functions.rotate = function(e, i) {
    return l$1.standardFunctionAsync(e, i, function(e2, i2, u) {
      u = se(u), J(u, 2, 3);
      let l2 = u[0];
      if (l2 === null)
        return null;
      if (!(l2 instanceof c))
        throw new Error("Illegal Argument");
      l2 instanceof M && (l2 = x$1.fromExtent(l2));
      const a2 = X(u[1]);
      if (isNaN(a2))
        throw new Error("Illegal Argument");
      const c$12 = O$1(u[2], null);
      if (c$12 === null)
        return q(l2, a2);
      if (c$12 instanceof j$1)
        return q(l2, a2, c$12);
      throw new Error("Illegal Argument");
    });
  }, l$1.functions.centroid = function(u, a2) {
    return l$1.standardFunctionAsync(u, a2, function(l2, a3, c$2) {
      if (c$2 = se(c$2), J(c$2, 1, 1), c$2[0] === null)
        return null;
      let d2 = c$2[0];
      if ((Z(c$2[0]) || E(c$2[0])) && (d2 = me(c$2[0], u.spatialReference)), d2 === null)
        return null;
      if (!(d2 instanceof c))
        throw new Error("Illegal Argument");
      return d2 instanceof j$1 ? te(c$1(c$2[0]), u.spatialReference) : d2 instanceof x$1 ? d2.centroid : d2 instanceof m ? a$1(d2) : d2 instanceof m$2 ? f(d2) : d2 instanceof M ? d2.center : null;
    });
  }, l$1.functions.multiparttosinglepart = function(a2, c$2) {
    return l$1.standardFunctionAsync(a2, c$2, function(l2, c$22, g2) {
      g2 = se(g2), J(g2, 1, 1);
      const m$12 = [];
      if (g2[0] === null)
        return null;
      if (!(g2[0] instanceof c))
        throw new Error("Illegal Argument");
      if (g2[0] instanceof j$1)
        return [te(c$1(g2[0]), a2.spatialReference)];
      if (g2[0] instanceof M)
        return [te(c$1(g2[0]), a2.spatialReference)];
      return J$1(g2[0]).then((n) => {
        if (n instanceof x$1) {
          const r2 = [], t2 = [];
          for (let e = 0; e < n.rings.length; e++)
            if (n.isClockwise(n.rings[e])) {
              const t3 = p$1({ rings: [n.rings[e]], hasZ: n.hasZ === true, hazM: n.hasM === true, spatialReference: n.spatialReference.toJSON() });
              r2.push(t3);
            } else
              t2.push({ ring: n.rings[e], pt: n.getPoint(e, 0) });
          for (let n2 = 0; n2 < t2.length; n2++)
            for (let e = 0; e < r2.length; e++)
              if (r2[e].contains(t2[n2].pt)) {
                r2[e].addRing(t2[n2].ring);
                break;
              }
          return r2;
        }
        if (n instanceof m) {
          const r2 = [];
          for (let t2 = 0; t2 < n.paths.length; t2++) {
            const e = p$1({ paths: [n.paths[t2]], hasZ: n.hasZ === true, hazM: n.hasM === true, spatialReference: n.spatialReference.toJSON() });
            r2.push(e);
          }
          return r2;
        }
        if (g2[0] instanceof m$2) {
          const n2 = te(c$1(g2[0]), a2.spatialReference);
          for (let r2 = 0; r2 < n2.points.length; r2++)
            m$12.push(n2.getPoint(r2));
          return m$12;
        }
        return null;
      });
    });
  }, l$1.functions.issimple = function(r2, t2) {
    return l$1.standardFunctionAsync(r2, t2, function(r3, t3, e) {
      if (e = se(e), J(e, 1, 1), e[0] === null)
        return true;
      if (!(e[0] instanceof c))
        throw new Error("Illegal Argument");
      return v(e[0]);
    });
  }, l$1.functions.simplify = function(r2, t2) {
    return l$1.standardFunctionAsync(r2, t2, function(r3, t3, e) {
      if (e = se(e), J(e, 1, 1), e[0] === null)
        return null;
      if (!(e[0] instanceof c))
        throw new Error("Illegal Argument");
      return J$1(e[0]);
    });
  });
}
export { on as registerFunctions };
