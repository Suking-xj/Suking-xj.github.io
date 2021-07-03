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
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import { dc as b, aa as s$1, b$ as e, aj as U } from "./vendor.74d5941c.js";
import { a } from "./lazyLayerLoader.9af2c0cd.js";
function t(e2, t2) {
  return !!e2.typeKeywords && e2.typeKeywords.indexOf(t2) > -1;
}
function l(e2) {
  return !e2.portalItem || e2.portalItem instanceof b || (e2 = __spreadProps(__spreadValues({}, e2), { portalItem: new b(e2.portalItem) })), s(e2.portalItem).then((r) => {
    const t2 = __spreadValues({ portalItem: e2.portalItem }, r.properties), a2 = r.constructor;
    return Promise.resolve(new a2(t2));
  });
}
function s(e2) {
  return e2.load().then(u).then(i);
}
function u(e2) {
  switch (e2.type) {
    case "Map Service":
      return c(e2);
    case "Feature Service":
      return y(e2);
    case "Feature Collection":
      return p(e2);
    case "Scene Service":
      return m(e2);
    case "Image Service":
      return f(e2);
    case "Stream Service":
      return d();
    case "Vector Tile Service":
      return L();
    case "KML":
      return h();
    case "WMTS":
      return N();
    case "WMS":
      return I();
    default:
      return Promise.reject(new s$1("portal:unknown-item-type", "Unknown item type '${type}'", { type: e2.type }));
  }
}
function i(e2) {
  return (0, a[e2.className])().then((r) => ({ constructor: r, properties: e2.properties }));
}
function c(e2) {
  return S(e2).then((e3) => e3 ? { className: "TileLayer" } : { className: "MapImageLayer" });
}
function y(e2) {
  return g(e2).then((e3) => {
    if (typeof e3 == "object") {
      const r = {};
      return e3.id != null && (r.layerId = e3.id), { className: "FeatureLayer", properties: r };
    }
    return { className: "GroupLayer" };
  });
}
function m(e2) {
  return g(e2).then((r) => {
    if (typeof r == "object") {
      const t2 = {};
      let a2;
      if (r.id != null ? (t2.layerId = r.id, a2 = `${e2.url}/layers/${r.id}`) : a2 = e2.url, Array.isArray(e2.typeKeywords) && e2.typeKeywords.length > 0) {
        const r2 = { IntegratedMesh: "IntegratedMeshLayer", "3DObject": "SceneLayer", Point: "SceneLayer", PointCloud: "PointCloudLayer", Building: "BuildingSceneLayer" };
        for (const t3 of Object.keys(r2))
          if (e2.typeKeywords.indexOf(t3) !== -1)
            return { className: r2[t3] };
      }
      return j(a2).then((e3) => {
        let r2 = "SceneLayer";
        const a3 = { Point: "SceneLayer", "3DObject": "SceneLayer", IntegratedMesh: "IntegratedMeshLayer", PointCloud: "PointCloudLayer", Building: "BuildingSceneLayer" };
        return e3 && e3.layerType && a3[e3.layerType] && (r2 = a3[e3.layerType]), { className: r2, properties: t2 };
      });
    }
    return { className: "GroupLayer" };
  });
}
function p(e2) {
  return __async(this, null, function* () {
    yield e2.load();
    if (t(e2, "Map Notes"))
      return { className: "MapNotesLayer" };
    if (t(e2, "Route Layer"))
      return { className: "RouteLayer" };
    return T(yield e2.fetchData()) === 1 ? { className: "FeatureLayer" } : { className: "GroupLayer" };
  });
}
function f(e2) {
  return __async(this, null, function* () {
    var r, t2, a2;
    yield e2.load();
    const n = (r = (t2 = e2.typeKeywords) == null ? void 0 : t2.map((e3) => e3.toLowerCase())) != null ? r : [];
    if (n.indexOf("elevation 3d layer") > -1)
      return { className: "ElevationLayer" };
    if (n.indexOf("tiled imagery") > -1)
      return { className: "ImageryTileLayer" };
    const o = yield e2.fetchData(), l2 = o == null ? void 0 : o.layerType;
    if (l2 === "ArcGISTiledImageServiceLayer")
      return { className: "ImageryTileLayer" };
    if (l2 === "ArcGISImageServiceLayer")
      return { className: "ImageryLayer" };
    return ((a2 = (yield j(e2.url)).cacheType) == null ? void 0 : a2.toLowerCase()) === "map" ? { className: "ImageryTileLayer" } : { className: "ImageryLayer" };
  });
}
function d() {
  return { className: "StreamLayer" };
}
function L() {
  return { className: "VectorTileLayer" };
}
function h() {
  return { className: "KMLLayer" };
}
function I() {
  return { className: "WMSLayer" };
}
function N() {
  return { className: "WMTSLayer" };
}
function S(e2) {
  return j(e2.url).then((e3) => e3.tileInfo);
}
function g(e2) {
  return !e2.url || e2.url.match(/\/\d+$/) ? Promise.resolve({}) : e2.load().then(() => e2.fetchData()).then((r) => T(r) > 0 ? v(r) : j(e2.url).then(v));
}
function v(r) {
  return T(r) === 1 && { id: e(w(r)) };
}
function w(e2) {
  const r = e2.layers;
  if (r && r.length)
    return r[0].id;
  const t2 = e2.tables;
  return t2 && t2.length ? t2[0].id : null;
}
function T(e2) {
  var r, t2, a2, n;
  return ((r = e2 == null || (t2 = e2.layers) == null ? void 0 : t2.length) != null ? r : 0) + ((a2 = e2 == null || (n = e2.tables) == null ? void 0 : n.length) != null ? a2 : 0);
}
function j(e2) {
  return U(e2, { responseType: "json", query: { f: "json" } }).then((e3) => e3.data);
}
var portalLayers = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  fromItem: l,
  selectLayerClassPath: u
});
export { portalLayers as p, t, u };
