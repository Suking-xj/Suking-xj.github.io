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
const a = { BingMapsLayer: () => __async(this, null, function* () {
  return (yield import("./BingMapsLayer.27830592.js")).default;
}), BuildingSceneLayer: () => __async(this, null, function* () {
  return (yield import("./BuildingSceneLayer.d0b55b56.js")).default;
}), CSVLayer: () => __async(this, null, function* () {
  return (yield import("./CSVLayer.cca23010.js")).default;
}), ElevationLayer: () => __async(this, null, function* () {
  return (yield import("./ElevationLayer.f8e7973b.js")).default;
}), FeatureLayer: () => __async(this, null, function* () {
  return (yield import("./vendor.74d5941c.js").then(function(n) {
    return n.jw;
  })).default;
}), GroupLayer: () => __async(this, null, function* () {
  return (yield import("./GroupLayer.b1aa1d68.js")).default;
}), GeoRSSLayer: () => __async(this, null, function* () {
  return (yield import("./GeoRSSLayer.46839892.js")).default;
}), ImageryLayer: () => __async(this, null, function* () {
  return (yield import("./ImageryLayer.926efa77.js")).default;
}), ImageryTileLayer: () => __async(this, null, function* () {
  return (yield import("./ImageryTileLayer.278404b7.js")).default;
}), IntegratedMeshLayer: () => __async(this, null, function* () {
  return (yield import("./IntegratedMeshLayer.fd201379.js")).default;
}), KMLLayer: () => __async(this, null, function* () {
  return (yield import("./KMLLayer.e12a9977.js")).default;
}), MapImageLayer: () => __async(this, null, function* () {
  return (yield import("./MapImageLayer.df410532.js")).default;
}), MapNotesLayer: () => __async(this, null, function* () {
  return (yield import("./MapNotesLayer.541cd646.js")).default;
}), OpenStreetMapLayer: () => __async(this, null, function* () {
  return (yield import("./OpenStreetMapLayer.cd879717.js")).default;
}), PointCloudLayer: () => __async(this, null, function* () {
  return (yield import("./PointCloudLayer.0f3a2c77.js")).default;
}), RouteLayer: () => __async(this, null, function* () {
  return (yield import("./RouteLayer.fdad90d3.js")).default;
}), SceneLayer: () => __async(this, null, function* () {
  return (yield import("./SceneLayer.16ed4b16.js")).default;
}), StreamLayer: () => __async(this, null, function* () {
  return (yield import("./StreamLayer.e52bdef1.js")).default;
}), TileLayer: () => __async(this, null, function* () {
  return (yield import("./vendor.74d5941c.js").then(function(n) {
    return n.jx;
  })).default;
}), UnknownLayer: () => __async(this, null, function* () {
  return (yield import("./UnknownLayer.62c31510.js")).default;
}), UnsupportedLayer: () => __async(this, null, function* () {
  return (yield import("./UnsupportedLayer.a40fae6b.js")).default;
}), VectorTileLayer: () => __async(this, null, function* () {
  return (yield import("./VectorTileLayer.8905e93b.js")).default;
}), WebTileLayer: () => __async(this, null, function* () {
  return (yield import("./WebTileLayer.0a77deda.js").then(function(n) {
    return n.W;
  })).default;
}), WMSLayer: () => __async(this, null, function* () {
  return (yield import("./WMSLayer.dc5ae5bf.js")).default;
}), WMTSLayer: () => __async(this, null, function* () {
  return (yield import("./WMTSLayer.9ba03614.js")).default;
}) };
export { a };
