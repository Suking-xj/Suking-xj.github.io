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
import { dM as d$1, a0 as t, aa as s, dN as m$1, a5 as r, dO as pt, dD as U, aj as U$1 } from "./vendor.74d5941c.js";
import { a } from "./lazyLayerLoader.9af2c0cd.js";
function i(e) {
  return __async(this, null, function* () {
    var r2;
    const a2 = (r2 = e.properties) == null ? void 0 : r2.customParameters, t2 = yield d(e.url, a2), l = __spreadProps(__spreadValues({}, e.properties), { url: e.url });
    if (!t2.sublayerIds)
      return t2.layerOrTableId != null && (l.layerId = t2.layerOrTableId, l.sourceJSON = t2.sourceJSON), new t2.Constructor(l);
    const n = new (yield import("./GroupLayer.b1aa1d68.js")).default({ title: t2.parsedUrl.title });
    return c(n, t2, l), n;
  });
}
function y(e, r2) {
  return e ? e.find((e2) => e2.id === r2) : null;
}
function c(e, a2, t2) {
  function l(e2, l2) {
    const n = __spreadProps(__spreadValues({}, t2), { layerId: e2, sublayerTitleMode: "service-name" });
    return r(l2) && (n.sourceJSON = l2), new a2.Constructor(n);
  }
  a2.sublayerIds.forEach((r2) => {
    const t3 = l(r2, y(a2.sublayerInfos, r2));
    e.add(t3);
  }), a2.tableIds.forEach((r2) => {
    const t3 = l(r2, y(a2.tableInfos, r2));
    e.tables.add(t3);
  });
}
function d(r2, t$1) {
  return __async(this, null, function* () {
    let l = d$1(r2);
    if (t(l) && (l = yield f(r2, t$1)), t(l))
      throw new s("arcgis-layers:url-mismatch", "The url '${url}' is not a valid arcgis resource", { url: r2 });
    const { serverType: n, sublayer: o } = l;
    let u;
    const i2 = { FeatureServer: "FeatureLayer", StreamServer: "StreamLayer", VectorTileServer: "VectorTileLayer" };
    switch (n) {
      case "MapServer":
        u = o != null ? "FeatureLayer" : m(r2, t$1).then((e) => e ? "TileLayer" : "MapImageLayer");
        break;
      case "ImageServer":
        u = S(r2, t$1).then((e) => {
          const r3 = e.tileInfo && e.tileInfo.format;
          return e.tileInfo ? !r3 || r3.toUpperCase() !== "LERC" || e.cacheType && e.cacheType.toLowerCase() !== "elevation" ? "ImageryTileLayer" : "ElevationLayer" : "ImageryLayer";
        });
        break;
      case "SceneServer":
        u = S(l.url.path, t$1).then((e) => {
          const r3 = { Point: "SceneLayer", "3DObject": "SceneLayer", IntegratedMesh: "IntegratedMeshLayer", PointCloud: "PointCloudLayer", Building: "BuildingSceneLayer" };
          if (e && Array.isArray(e.layers) && e.layers.length > 0) {
            const a2 = e.layers[0].layerType;
            if (r3[a2] != null)
              return r3[a2];
          }
          return "SceneLayer";
        });
        break;
      default:
        u = i2[n];
    }
    const y2 = { FeatureLayer: true, SceneLayer: true }, c2 = n === "FeatureServer", d2 = { parsedUrl: l, Constructor: null, layerOrTableId: c2 ? o : null, sublayerIds: null, tableIds: null }, I2 = yield u;
    if (y2[I2] && o == null) {
      const e = yield p(r2, n, t$1);
      c2 && (d2.sublayerInfos = e.layerInfos, d2.tableInfos = e.tableInfos);
      if (e.layerIds.length + e.tableIds.length !== 1)
        d2.sublayerIds = e.layerIds, d2.tableIds = e.tableIds;
      else if (c2) {
        var v2, w;
        d2.layerOrTableId = (v2 = e.layerIds[0]) != null ? v2 : e.tableIds[0], d2.sourceJSON = (w = e.layerInfos[0]) != null ? w : e.tableInfos[0];
      }
    }
    return d2.Constructor = yield b(I2), d2;
  });
}
function f(e, a2) {
  return __async(this, null, function* () {
    const n = yield S(e, a2);
    let s2 = null, u = null;
    const i2 = n.type;
    if (i2 === "Feature Layer" || i2 === "Table" ? (s2 = "FeatureServer", u = n.id) : i2 === "indexedVector" ? s2 = "VectorTileServer" : n.hasOwnProperty("mapName") ? s2 = "MapServer" : n.hasOwnProperty("bandCount") && n.hasOwnProperty("pixelSizeX") ? s2 = "ImageServer" : n.hasOwnProperty("maxRecordCount") && n.hasOwnProperty("allowGeometryUpdates") ? s2 = "FeatureServer" : n.hasOwnProperty("streamUrls") && (s2 = "StreamServer"), !s2)
      return null;
    const y2 = u != null ? m$1(e) : null;
    return { title: r(y2) && n.name || pt(e), serverType: s2, sublayer: u, url: { path: r(y2) ? y2.serviceUrl : U(e).path } };
  });
}
function p(e, r2, a2) {
  return __async(this, null, function* () {
    var t2, l;
    let n, s2 = false;
    if (r2 === "FeatureServer") {
      const r3 = yield v(e, a2);
      s2 = !!r3.layersJSON, n = r3.layersJSON || r3.serviceJSON;
    } else
      n = yield S(e, a2);
    const o = (t2 = n) == null ? void 0 : t2.layers, u = (l = n) == null ? void 0 : l.tables;
    return { layerIds: (o == null ? void 0 : o.map((e2) => e2.id).reverse()) || [], tableIds: (u == null ? void 0 : u.map((e2) => e2.id).reverse()) || [], layerInfos: s2 ? o : [], tableInfos: s2 ? u : [] };
  });
}
function I(e) {
  return !e.type || e.type === "Feature Layer";
}
function v(e, r2) {
  return __async(this, null, function* () {
    var a2, t2;
    let l = yield S(e, r2);
    l = l || {}, l.layers = ((a2 = l.layers) == null ? void 0 : a2.filter(I)) || [];
    const n = { serviceJSON: l };
    if (l.currentVersion < 10.5)
      return n;
    const s2 = yield S(e + "/layers", r2);
    return n.layersJSON = { layers: (s2 == null || (t2 = s2.layers) == null ? void 0 : t2.filter(I)) || [], tables: (s2 == null ? void 0 : s2.tables) || [] }, n;
  });
}
function b(e) {
  return __async(this, null, function* () {
    return (0, a[e])();
  });
}
function m(e, r2) {
  return __async(this, null, function* () {
    return (yield S(e, r2)).tileInfo;
  });
}
function S(e, r2) {
  return __async(this, null, function* () {
    return (yield U$1(e, { responseType: "json", query: __spreadValues({ f: "json" }, r2) })).data;
  });
}
export { i as fromUrl };
