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
import { a5 as r, eN as D, ev as y, eO as h } from "./vendor.74d5941c.js";
function i(_0) {
  return __async(this, arguments, function* (i2, d2 = i2.popupTemplate) {
    if (!r(d2))
      return [];
    const o = yield d2.getRequiredFields(i2.fields), { lastEditInfoEnabled: s } = d2, { objectIdField: u, typeIdField: a, globalIdField: n, relationships: f } = i2;
    if (o.includes("*"))
      return ["*"];
    const r$1 = s ? yield D(i2) : [], m = y(i2.fields, [...o, ...r$1]);
    return a && m.push(a), m && u && h(i2.fields, u) && m.indexOf(u) === -1 && m.push(u), m && n && h(i2.fields, n) && m.indexOf(n) === -1 && m.push(n), f && f.forEach((e) => {
      const { keyField: p } = e;
      m && p && h(i2.fields, p) && m.indexOf(p) === -1 && m.push(p);
    }), m;
  });
}
function d(p, l) {
  return p.popupTemplate ? p.popupTemplate : r(l) && l.defaultPopupTemplateEnabled && r(p.defaultPopupTemplate) ? p.defaultPopupTemplate : null;
}
export { d, i };
