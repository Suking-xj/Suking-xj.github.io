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
import { a4 as n, iS as x, iT as s, cE as e, iU as L, iV as S, f_ as X, iW as m$1, aa as s$1, iX as _, iY as T } from "./vendor.74d5941c.js";
const c = n.getLogger("esri.layers.support.labelFormatUtils"), f = { type: "simple", evaluate: () => null }, m = { getAttribute: (e2, t) => e2.field(t) };
function d(e$1, a, o) {
  return __async(this, null, function* () {
    if (!e$1 || !e$1.symbol)
      return f;
    const i = e$1.where, l = x(e$1), d2 = i ? yield import("./WhereClause.f27c6004.js") : null;
    let g;
    if (l.type === "arcade") {
      const e2 = yield s(l.expression, o, a);
      g = { type: "arcade", evaluate(r) {
        try {
          const t = e2.evaluate({ $feature: "attributes" in r ? e2.repurposeFeature(r) : e2.repurposeAdapter(r) });
          if (t != null)
            return t.toString();
        } catch (a2) {
          c.error(new s$1("bad-arcade-expression", "Encountered an error when evaluating label expression for feature", { feature: r, expression: l }));
        }
        return null;
      }, needsHydrationToEvaluate: () => _(l.expression) == null };
    } else
      g = { type: "simple", evaluate: (e2) => l.expression.replace(/{[^}]*}/g, (t) => {
        const r = t.slice(1, -1), o2 = T(a, r);
        if (!o2)
          return t;
        let i2 = null;
        if ("attributes" in e2) {
          e2 && e2.attributes && (i2 = e2.attributes[o2.name]);
        } else
          i2 = e2.field(o2.name);
        return i2 == null ? "" : y(i2, o2);
      }) };
    if (i) {
      let e$12;
      try {
        e$12 = d2.WhereClause.create(i, new e(a));
      } catch (b) {
        return f;
      }
      const t = g.evaluate;
      g.evaluate = (r) => {
        const a2 = "attributes" in r ? void 0 : m;
        return e$12.testFeature(r, a2) ? t(r) : null;
      };
    }
    return g;
  });
}
function y(e2, t) {
  if (e2 == null)
    return "";
  const r = t.domain;
  if (r) {
    if (r.type === "codedValue" || r.type === "coded-value") {
      const t2 = e2;
      for (const e3 of r.codedValues)
        if (e3.code === t2)
          return e3.name;
    } else if (r.type === "range") {
      const t2 = +e2, a = "range" in r ? r.range[0] : r.minValue, n3 = "range" in r ? r.range[1] : r.maxValue;
      if (a <= t2 && t2 <= n3)
        return r.name;
    }
  }
  let n2 = e2;
  return t.type === "date" || t.type === "esriFieldTypeDate" ? n2 = L(n2, S("short-date")) : X(t) && (n2 = m$1(+n2)), n2 || "";
}
export { d as createLabelFunction, y as formatField };
