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
import { ae as e, af as y, _ as j, dQ as e$1, dp as m, bG as x, d1 as n, ag as i$1, dA as a, cW as p, bF as k, b$ as e$2, dS as r, d0 as L, aj as U, dT as p$1 } from "./vendor.74d5941c.js";
import { a as c$1, l as l$1, u as u$1, d as d$1, n as n$1, o, b as u$2 } from "./NAServiceDescription.7a69545e.js";
import "./GPMessage.8bfedb6d.js";
function u(r2) {
  return r2.features.map((o2) => {
    const t = k.fromJSON(r2.spatialReference), s = n.fromJSON(o2);
    return e$2(s.geometry).spatialReference = t, s;
  });
}
function d(r2) {
  return r2.features.map((e2) => (e2.geometry.spatialReference = r2.spatialReference, p(e2.geometry)));
}
let f$1 = class extends a {
  constructor(r2) {
    super(r2), this.facilities = null, this.messages = null, this.pointBarriers = null, this.polylineBarriers = null, this.polygonBarriers = null, this.serviceAreaPolylines = null, this.serviceAreaPolygons = null;
  }
  readFacilities(r2) {
    return d(r2);
  }
  readPointBarriers(r2, e2) {
    return d(e2.barriers);
  }
  readPolylineBarriers(r2) {
    return d(r2);
  }
  readPolygonBarriers(r2) {
    return d(r2);
  }
  readIncidents(r2, e2) {
    return u(e2.saPolylines);
  }
  readServiceAreaPolygons(r2, e2) {
    return u(e2.saPolygons);
  }
};
e([y({ type: [j] })], f$1.prototype, "facilities", void 0), e([e$1("facilities")], f$1.prototype, "readFacilities", null), e([y({ type: [c$1] })], f$1.prototype, "messages", void 0), e([y({ type: [j] })], f$1.prototype, "pointBarriers", void 0), e([e$1("pointBarriers", ["barriers"])], f$1.prototype, "readPointBarriers", null), e([y({ type: [m] })], f$1.prototype, "polylineBarriers", void 0), e([e$1("polylineBarriers")], f$1.prototype, "readPolylineBarriers", null), e([y({ type: [x] })], f$1.prototype, "polygonBarriers", void 0), e([e$1("polygonBarriers")], f$1.prototype, "readPolygonBarriers", null), e([y({ type: [n] })], f$1.prototype, "serviceAreaPolylines", void 0), e([e$1("serviceAreaPolylines", ["saPolylines"])], f$1.prototype, "readIncidents", null), e([y({ type: [n] })], f$1.prototype, "serviceAreaPolygons", void 0), e([e$1("serviceAreaPolygons", ["saPolygons"])], f$1.prototype, "readServiceAreaPolygons", null), f$1 = e([i$1("esri.tasks.support.ServiceAreaSolveResult")], f$1);
var g = f$1;
const l = o({ accumulateAttributes: { name: "accumulateAttributeNames" }, attributeParameterValues: true, defaultBreaks: true, facilities: true, outSpatialReference: { name: "outSR", getter: (r2) => r2.outSpatialReference.wkid }, pointBarriers: { name: "barriers" }, polylineBarriers: true, polygonBarriers: true, restrictionAttributes: { name: "restrictionAttributeNames" }, returnPointBarriers: { name: "returnBarriers" }, travelMode: true });
function f(i2, f2, c2) {
  return __async(this, null, function* () {
    const p2 = [], m2 = [], B = {}, y2 = {}, h = r(i2);
    return f2.facilities && f2.facilities.features && l$1(f2.facilities.features, m2, "facilities.features", B), f2.pointBarriers && f2.pointBarriers.features && l$1(f2.pointBarriers.features, m2, "pointBarriers.features", B), f2.polylineBarriers && f2.polylineBarriers.features && l$1(f2.polylineBarriers.features, m2, "polylineBarriers.features", B), f2.polygonBarriers && f2.polygonBarriers.features && l$1(f2.polygonBarriers.features, m2, "polygonBarriers.features", B), L(m2).then((r2) => {
      for (const e2 in B) {
        const t = B[e2];
        p2.push(e2), y2[e2] = r2.slice(t[0], t[1]);
      }
      return u$1(y2, p2) ? d$1(h.path).catch(() => ({ dontCheck: true })) : Promise.resolve({ dontCheck: true });
    }).then((e2) => {
      ("dontCheck" in e2 ? e2.dontCheck : e2.hasZ) || n$1(y2, p2);
      for (const r2 in y2)
        y2[r2].forEach((e3, t2) => {
          f2.get(r2)[t2].geometry = e3;
        });
      let t = { query: __spreadValues(__spreadProps(__spreadValues({}, h.query), { f: "json" }), l.toQueryParams(f2)) };
      return c2 && (t = __spreadValues(__spreadValues({}, c2), t)), U(`${h.path}/solveServiceArea`, t);
    }).then((r2) => g.fromJSON(r2.data));
  });
}
let i = class extends u$2(p$1) {
  constructor(r2) {
    super(r2), this.url = null;
  }
  solve(r2, s) {
    return f(this.url, r2, s);
  }
};
e([y()], i.prototype, "url", void 0), i = e([i$1("esri.tasks.ServiceAreaTask")], i);
var c = i;
export default c;
