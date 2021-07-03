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
import { dc as b, dd as A, de as t$1, c_ as L } from "./vendor.74d5941c.js";
import { a } from "./lazyLayerLoader.9af2c0cd.js";
import { t, u as u$1 } from "./portalLayers.43e87d22.js";
function r(e, t2) {
  return n$1(e, t2, "notes", "Map Notes");
}
function o(e, t2) {
  return n$1(e, t2, "route", "Route Layer");
}
function n$1(r2, o2, n2, i) {
  return __async(this, null, function* () {
    if (!r2.layerType || r2.layerType !== "ArcGISFeatureLayer")
      return false;
    if (r2.url)
      return false;
    if (r2.featureCollectionType && r2.featureCollectionType === n2)
      return true;
    if (r2.itemId) {
      const n3 = new b({ id: r2.itemId, portal: o2 });
      return yield n3.load(), n3.type === "Feature Collection" && t(n3, i);
    }
    return false;
  });
}
function n(r2, a2, t2) {
  return __async(this, null, function* () {
    if (!a2)
      return;
    const y = [];
    for (const e of a2) {
      const r3 = I(e, t2);
      e.layerType === "GroupLayer" ? y.push(M(r3, e, t2)) : y.push(r3);
    }
    const i = yield A(y);
    for (const e of i)
      !e.value || t2.filter && !t2.filter(e.value) || r2.add(e.value);
  });
}
const l = { ArcGISFeatureLayer: "FeatureLayer", ArcGISImageServiceLayer: "ImageryLayer", ArcGISMapServiceLayer: "MapImageLayer", PointCloudLayer: "PointCloudLayer", ArcGISSceneServiceLayer: "SceneLayer", IntegratedMeshLayer: "IntegratedMeshLayer", BuildingSceneLayer: "BuildingSceneLayer", ArcGISTiledElevationServiceLayer: "ElevationLayer", ArcGISTiledImageServiceLayer: "ImageryTileLayer", ArcGISTiledMapServiceLayer: "TileLayer", GroupLayer: "GroupLayer", WebTiledLayer: "WebTileLayer", CSV: "CSVLayer", VectorTileLayer: "VectorTileLayer", WMS: "WMSLayer", DefaultTileLayer: "TileLayer", KML: "KMLLayer", RasterDataLayer: "UnsupportedLayer" }, c = { ArcGISTiledElevationServiceLayer: "ElevationLayer", DefaultTileLayer: "ElevationLayer", RasterDataElevationLayer: "UnsupportedLayer" }, s = { ArcGISTiledMapServiceLayer: "TileLayer", ArcGISTiledImageServiceLayer: "ImageryTileLayer", OpenStreetMap: "OpenStreetMapLayer", WebTiledLayer: "WebTileLayer", VectorTileLayer: "VectorTileLayer", ArcGISImageServiceLayer: "UnsupportedLayer", WMS: "UnsupportedLayer", ArcGISMapServiceLayer: "UnsupportedLayer", DefaultTileLayer: "TileLayer" }, p = { ArcGISFeatureLayer: "FeatureLayer", ArcGISImageServiceLayer: "ImageryLayer", ArcGISImageServiceVectorLayer: "ImageryLayer", ArcGISMapServiceLayer: "MapImageLayer", ArcGISStreamLayer: "StreamLayer", ArcGISTiledImageServiceLayer: "ImageryTileLayer", ArcGISTiledMapServiceLayer: "TileLayer", VectorTileLayer: "VectorTileLayer", GroupLayer: "GroupLayer", WebTiledLayer: "WebTileLayer", CSV: "CSVLayer", GeoRSS: "GeoRSSLayer", KML: "KMLLayer", WFS: "UnsupportedLayer", SubtypeGroupLayer: "UnsupportedLayer", WMS: "WMSLayer", BingMapsAerial: "BingMapsLayer", BingMapsRoad: "BingMapsLayer", BingMapsHybrid: "BingMapsLayer", DefaultTileLayer: "TileLayer" }, S = { ArcGISFeatureLayer: "FeatureLayer" }, u = { ArcGISImageServiceLayer: "ImageryLayer", ArcGISImageServiceVectorLayer: "ImageryLayer", ArcGISMapServiceLayer: "MapImageLayer", ArcGISTiledImageServiceLayer: "ImageryTileLayer", ArcGISTiledMapServiceLayer: "TileLayer", OpenStreetMap: "OpenStreetMapLayer", VectorTileLayer: "VectorTileLayer", WebTiledLayer: "WebTileLayer", BingMapsAerial: "BingMapsLayer", BingMapsRoad: "BingMapsLayer", BingMapsHybrid: "BingMapsLayer", WMS: "WMSLayer", DefaultTileLayer: "TileLayer" };
function I(e, r2) {
  return __async(this, null, function* () {
    return d(yield T(e, r2), e, r2);
  });
}
function d(e, r2, a2) {
  return __async(this, null, function* () {
    const y = new e();
    return y.read(r2, a2.context), y.type === "group" && m(r2) && (yield G(y, r2, a2.context)), yield t$1(y, a2.context), y;
  });
}
function T(e, r$1) {
  return __async(this, null, function* () {
    const t2 = r$1.context, n2 = f(t2);
    let l2 = e.layerType || e.type;
    !l2 && r$1 && r$1.defaultLayerType && (l2 = r$1.defaultLayerType);
    const c2 = n2[l2];
    let s2 = c2 ? a[c2] : a.UnknownLayer;
    const p2 = t2 && t2.portal;
    if (g(e)) {
      if (e.itemId) {
        const r2 = new b({ id: e.itemId, portal: p2 });
        yield r2.load();
        const t3 = (yield u$1(r2)).className || "UnknownLayer";
        s2 = a[t3];
      }
    } else
      l2 === "ArcGISFeatureLayer" && ((yield r(e, p2)) ? s2 = a.MapNotesLayer : (yield o(e, p2)) ? s2 = a.RouteLayer : m(e) && (s2 = a.GroupLayer));
    return e.wmtsInfo && e.wmtsInfo.url && e.wmtsInfo.layerIdentifier && (s2 = a.WMTSLayer), s2();
  });
}
function m(e) {
  if (e.layerType !== "ArcGISFeatureLayer" || g(e))
    return false;
  const r2 = e.featureCollection;
  return !!(r2 && r2.layers && r2.layers.length > 1);
}
function g(e) {
  return e.type === "Feature Collection";
}
function f(e) {
  let r2;
  switch (e.origin) {
    case "web-scene":
      switch (e.layerContainerType) {
        case "basemap":
          r2 = s;
          break;
        case "ground":
          r2 = c;
          break;
        default:
          r2 = l;
      }
      break;
    default:
      switch (e.layerContainerType) {
        case "basemap":
          r2 = u;
          break;
        case "tables":
          r2 = S;
          break;
        default:
          r2 = p;
      }
  }
  return r2;
}
function M(e, a2, t2) {
  return __async(this, null, function* () {
    const y = new L(), i = n(y, Array.isArray(a2.layers) ? a2.layers : [], t2), L$1 = yield e;
    if (yield i, L$1.type === "group")
      return L$1.layers.addMany(y), L$1;
  });
}
function G(e, r2, a$1) {
  return __async(this, null, function* () {
    const t2 = a.FeatureLayer, i = yield t2(), L2 = r2.featureCollection, o2 = L2.showLegend, n2 = L2.layers.map((e2) => {
      const r3 = new i();
      return r3.read(e2, a$1), o2 != null && r3.read({ showLegend: o2 }, a$1), r3;
    });
    e.layers.addMany(n2);
  });
}
export { n as populateOperationalLayers };
