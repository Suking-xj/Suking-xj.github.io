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
import { aa as s$1, de as t, aj as U, dP as w } from "./vendor.74d5941c.js";
import { o } from "./jsonContext.70bfdc66.js";
import { a as a$1 } from "./lazyLayerLoader.9af2c0cd.js";
function a(e, t2) {
  return __async(this, null, function* () {
    const r = e.instance.portalItem;
    return r && r.id ? (yield r.load(t2), s(e), i(e, t2)) : Promise.resolve();
  });
}
function s(t2) {
  const r = t2.instance.portalItem;
  if (t2.supportedTypes.indexOf(r.type) === -1)
    throw new s$1("portal:invalid-layer-item-type", "Invalid layer item type '${type}', expected '${expectedType}'", { type: r.type, expectedType: t2.supportedTypes.join(", ") });
}
function i(e, t$1) {
  return __async(this, null, function* () {
    const r = e.instance, o$1 = r.portalItem, { url: a2, title: s2 } = o$1, i2 = o(o$1);
    if (r.type === "group")
      return r.read({ title: s2 }, i2), u(r, e);
    a2 && r.read({ url: a2 }, i2);
    const p2 = yield y(e, t$1);
    return p2 && r.read(p2, i2), r.resourceReferences = { portalItem: o$1, paths: i2.readResourcePaths }, r.read({ title: s2 }, i2), t(r, i2);
  });
}
function u(t2, r) {
  let n;
  const l = t2.portalItem.type;
  switch (l) {
    case "Feature Service":
      n = a$1.FeatureLayer;
      break;
    case "Stream Service":
      n = a$1.StreamLayer;
      break;
    case "Scene Service":
      n = a$1.SceneLayer;
      break;
    case "Feature Collection":
      n = a$1.FeatureLayer;
      break;
    default:
      throw new s$1("portal:unsupported-item-type-as-group", `The item type '${l}' is not supported as a 'GroupLayer'`);
  }
  let a2;
  return n().then((e) => (a2 = e, y(r))).then((e) => h(e) > 0 ? c(t2, a2, e) : p(t2, a2));
}
function p(e, r) {
  if (!e.portalItem.url)
    return Promise.resolve();
  const n = { responseType: "json", query: { f: "json" } };
  return U(e.portalItem.url, n).then((t2) => {
    var n2, l;
    const o2 = t2.data;
    function a2(e2) {
      return { id: e2.id, name: e2.name };
    }
    o2 && c(e, r, { layers: (n2 = o2.layers) == null ? void 0 : n2.map(a2), tables: (l = o2.tables) == null ? void 0 : l.map(a2) });
  });
}
function c(e, t2, r) {
  let n = r.layers || [];
  const l = r.tables || [];
  e.portalItem.type === "Feature Collection" && (n.forEach((e2) => {
    var t3;
    (e2 == null || (t3 = e2.layerDefinition) == null ? void 0 : t3.type) === "Table" && l.push(e2);
  }), n = n.filter((e2) => {
    var t3;
    return (e2 == null || (t3 = e2.layerDefinition) == null ? void 0 : t3.type) !== "Table";
  })), n.reverse().forEach((n2) => {
    const l2 = d(e, t2, r, n2);
    e.add(l2);
  }), l.reverse().forEach((n2) => {
    const l2 = d(e, t2, r, n2);
    e.tables.add(l2);
  });
}
function d(e, t2, n, l) {
  const o2 = new t2({ portalItem: e.portalItem.clone(), layerId: l.id, sublayerTitleMode: "service-name" });
  if (e.portalItem.type === "Feature Collection") {
    const t3 = { origin: "portal-item", portal: e.portalItem.portal || w.getDefault() };
    o2.read(l, t3);
    const a2 = n.showLegend;
    a2 != null && o2.read({ showLegend: a2 }, t3);
  }
  return o2;
}
function y(e, t2) {
  if (e.supportsData === false)
    return Promise.resolve(void 0);
  const r = e.instance;
  return r.portalItem.fetchData("json", t2).catch(() => null).then((e2) => {
    const t3 = e2;
    let n;
    if (v(r)) {
      let l = true;
      return e2 && h(t3) > 0 && (r.layerId == null && (r.layerId = f(t3)), n = m(t3, r.layerId), n && (h(t3) === 1 && (l = false), e2.showLegend != null && (n.showLegend = e2.showLegend))), l && r.sublayerTitleMode !== "service-name" && (r.sublayerTitleMode = "item-title-and-service-name"), n;
    }
    return e2;
  });
}
function f(e) {
  const t2 = e.layers;
  if (t2 && t2.length)
    return t2[0].id;
  const r = e.tables;
  return r && r.length ? r[0].id : null;
}
function m(e, t2) {
  const r = e.layers;
  if (r) {
    for (let l = 0; l < r.length; l++)
      if (r[l].id === t2)
        return r[l];
  }
  const n = e.tables;
  if (n) {
    for (let l = 0; l < n.length; l++)
      if (n[l].id === t2)
        return n[l];
  }
  return null;
}
function h(e) {
  var t2, r, n, l;
  return ((t2 = e == null || (r = e.layers) == null ? void 0 : r.length) != null ? t2 : 0) + ((n = e == null || (l = e.tables) == null ? void 0 : l.length) != null ? n : 0);
}
function v(e) {
  return e.type !== "stream" && "layerId" in e;
}
export { a as load };
