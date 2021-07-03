var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a2, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a2, prop, b[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b) => __defProps(a2, __getOwnPropDescs(b));
import { b6 as i, g3 as t$1, bF as k, e6 as y$1, cA as ae, cy as ee, g4 as n, g5 as e, g6 as t$2 } from "./vendor.74d5941c.js";
import { a } from "./aaBoundingBox.b76947f8.js";
class j {
  constructor(e2, t2, s2) {
    this.uid = e2, this.geometry = t2, this.attributes = s2, this.visible = true, this.objectId = null, this.centroid = null;
  }
}
class N {
  constructor() {
    this.exceededTransferLimit = false, this.features = [], this.fields = [], this.hasM = false, this.hasZ = false, this.geometryType = null, this.objectIdFieldName = null, this.globalIdFieldName = null, this.geometryProperties = null, this.geohashFieldName = null, this.spatialReference = null, this.transform = null;
  }
}
a();
i();
function u(t2, e2) {
  return e2;
}
function l(t2, e2, r, s2) {
  switch (r) {
    case 0:
      return f(t2, e2 + s2, 0);
    case 1:
      return t2.originPosition === "lowerLeft" ? f(t2, e2 + s2, 1) : y(t2, e2 + s2, 1);
  }
}
function c(t2, e2, r, s2) {
  switch (r) {
    case 2:
      return f(t2, e2, 2);
    default:
      return l(t2, e2, r, s2);
  }
}
function d(t2, e2, r, s2) {
  switch (r) {
    case 2:
      return f(t2, e2, 3);
    default:
      return l(t2, e2, r, s2);
  }
}
function p(t2, e2, r, s2) {
  switch (r) {
    case 3:
      return f(t2, e2, 3);
    default:
      return c(t2, e2, r, s2);
  }
}
function f({ translate: t2, scale: e2 }, r, s2) {
  return t2[s2] + r * e2[s2];
}
function y({ translate: t2, scale: e2 }, r, s2) {
  return t2[s2] - r * e2[s2];
}
class m {
  constructor(t2) {
    this.options = t2, this.geometryTypes = ["point", "multipoint", "polyline", "polygon"], this.previousCoordinate = [0, 0], this.transform = null, this.applyTransform = u, this.lengths = [], this.currentLengthIndex = 0, this.toAddInCurrentPath = 0, this.vertexDimension = 0, this.coordinateBuffer = null, this.coordinateBufferPtr = 0, this.AttributesConstructor = function() {
    };
  }
  createFeatureResult() {
    return new N();
  }
  finishFeatureResult(t2) {
    if (this.options.applyTransform && (t2.transform = null), this.AttributesConstructor = function() {
    }, this.coordinateBuffer = null, this.lengths.length = 0, !t2.hasZ)
      return;
    const e2 = t$1(t2.geometryType, this.options.sourceSpatialReference, t2.spatialReference);
    if (e2)
      for (const r of t2.features)
        e2(r.geometry);
  }
  createSpatialReference() {
    return new k();
  }
  addField(t2, e2) {
    t2.fields.push(y$1.fromJSON(e2));
    const r = t2.fields.map((t3) => t3.name);
    this.AttributesConstructor = function() {
      for (const t3 of r)
        this[t3] = null;
    };
  }
  addFeature(t2, e2) {
    const r = this.options.maxStringAttributeLength ? this.options.maxStringAttributeLength : 0;
    if (r > 0)
      for (const s2 in e2.attributes) {
        const t3 = e2.attributes[s2];
        typeof t3 == "string" && t3.length > r && (e2.attributes[s2] = "");
      }
    t2.features.push(e2);
  }
  addQueryGeometry(t2, e2) {
    const { queryGeometry: r, queryGeometryType: s2 } = e2, n2 = ae(r.clone(), r, false, false, this.transform), a2 = ee(n2, s2, false, false);
    let h = null;
    switch (s2) {
      case "esriGeometryPoint":
        h = "point";
        break;
      case "esriGeometryPolygon":
        h = "polygon";
        break;
      case "esriGeometryPolyline":
        h = "polyline";
        break;
      case "esriGeometryMultipoint":
        h = "multipoint";
    }
    a2.type = h, t2.queryGeometryType = s2, t2.queryGeometry = a2;
  }
  prepareFeatures(e2) {
    switch (this.transform = e2.transform, this.options.applyTransform && e2.transform && (this.applyTransform = this.deriveApplyTransform(e2)), this.vertexDimension = 2, e2.hasZ && this.vertexDimension++, e2.hasM && this.vertexDimension++, e2.geometryType) {
      case "point":
        this.addCoordinate = (t2, e3, r) => this.addCoordinatePoint(t2, e3, r), this.createGeometry = (t2) => this.createPointGeometry(t2);
        break;
      case "polygon":
        this.addCoordinate = (t2, e3, r) => this.addCoordinatePolygon(t2, e3, r), this.createGeometry = (t2) => this.createPolygonGeometry(t2);
        break;
      case "polyline":
        this.addCoordinate = (t2, e3, r) => this.addCoordinatePolyline(t2, e3, r), this.createGeometry = (t2) => this.createPolylineGeometry(t2);
        break;
      case "multipoint":
        this.addCoordinate = (t2, e3, r) => this.addCoordinateMultipoint(t2, e3, r), this.createGeometry = (t2) => this.createMultipointGeometry(t2);
        break;
      default:
        n(e2.geometryType);
    }
  }
  createFeature() {
    return this.lengths.length = 0, this.currentLengthIndex = 0, this.previousCoordinate[0] = 0, this.previousCoordinate[1] = 0, new j(e(), null, new this.AttributesConstructor());
  }
  allocateCoordinates() {
    const t2 = this.lengths.reduce((t3, e2) => t3 + e2, 0);
    this.coordinateBuffer = new Float64Array(t2 * this.vertexDimension), this.coordinateBufferPtr = 0;
  }
  addLength(t2, e2, r) {
    this.lengths.length === 0 && (this.toAddInCurrentPath = e2), this.lengths.push(e2);
  }
  createPointGeometry(t2) {
    const e2 = { type: "point", x: 0, y: 0, spatialReference: t2.spatialReference, hasZ: !!t2.hasZ, hasM: !!t2.hasM };
    return e2.hasZ && (e2.z = 0), e2.hasM && (e2.m = 0), e2;
  }
  addCoordinatePoint(t2, e2, r) {
    switch (e2 = this.applyTransform(this.transform, e2, r, 0), r) {
      case 0:
        t2.x = e2;
        break;
      case 1:
        t2.y = e2;
        break;
      case 2:
        t2.hasZ ? t2.z = e2 : t2.m = e2;
        break;
      case 3:
        t2.m = e2;
    }
  }
  transformPathLikeValue(t2, e2) {
    let r = 0;
    return e2 <= 1 && (r = this.previousCoordinate[e2], this.previousCoordinate[e2] += t2), this.applyTransform(this.transform, t2, e2, r);
  }
  addCoordinatePolyline(t2, e2, r) {
    this.dehydratedAddPointsCoordinate(t2.paths, e2, r);
  }
  addCoordinatePolygon(t2, e2, r) {
    this.dehydratedAddPointsCoordinate(t2.rings, e2, r);
  }
  addCoordinateMultipoint(t2, e2, r) {
    r === 0 && t2.points.push([]);
    const s2 = this.transformPathLikeValue(e2, r);
    t2.points[t2.points.length - 1].push(s2);
  }
  createPolygonGeometry(t2) {
    return { type: "polygon", rings: [[]], spatialReference: t2.spatialReference, hasZ: !!t2.hasZ, hasM: !!t2.hasM };
  }
  createPolylineGeometry(t2) {
    return { type: "polyline", paths: [[]], spatialReference: t2.spatialReference, hasZ: !!t2.hasZ, hasM: !!t2.hasM };
  }
  createMultipointGeometry(t2) {
    return { type: "multipoint", points: [], spatialReference: t2.spatialReference, hasZ: !!t2.hasZ, hasM: !!t2.hasM };
  }
  dehydratedAddPointsCoordinate(t2, e2, r) {
    r === 0 && this.toAddInCurrentPath-- == 0 && (t2.push([]), this.toAddInCurrentPath = this.lengths[++this.currentLengthIndex] - 1, this.previousCoordinate[0] = 0, this.previousCoordinate[1] = 0);
    const s2 = this.transformPathLikeValue(e2, r), o = t2[t2.length - 1];
    r === 0 && o.push(new Float64Array(this.coordinateBuffer.buffer, this.coordinateBufferPtr * Float64Array.BYTES_PER_ELEMENT, this.vertexDimension)), this.coordinateBuffer[this.coordinateBufferPtr++] = s2;
  }
  deriveApplyTransform(t2) {
    const { hasZ: e2, hasM: r } = t2;
    return e2 && r ? p : e2 ? c : r ? d : l;
  }
}
class t {
  _parseFeatureQuery(t2) {
    const s2 = t$2(t2.buffer, new m(t2.options)), o = __spreadProps(__spreadValues({}, s2), { spatialReference: s2.spatialReference.toJSON(), fields: s2.fields ? s2.fields.map((e2) => e2.toJSON()) : void 0 });
    return Promise.resolve(o);
  }
}
function s() {
  return new t();
}
export default s;
