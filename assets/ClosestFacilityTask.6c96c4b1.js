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
import { ae as e, af as y, _ as j$1, dQ as e$1, dp as m, bG as x, d1 as n, ag as i, dA as a, dR as g$1, bF as k, a5 as r, dS as r$1, d0 as L, aj as U, dT as p$1 } from "./vendor.74d5941c.js";
import { c as c$2, a as c$3, l as l$1, u, d as d$1, n as n$1, o, b as u$1 } from "./NAServiceDescription.7a69545e.js";
import "./GPMessage.8bfedb6d.js";
function d(r$12) {
  return r$12.features.map((o2) => {
    const t = k.fromJSON(r$12.spatialReference), s = n.fromJSON(o2);
    return r(s.geometry) && (s.geometry.spatialReference = t), s;
  });
}
function f(r2) {
  return g$1.fromJSON(r2).features.map((r3) => r3.geometry);
}
let j = class extends a {
  constructor(r2) {
    super(r2), this.directions = null, this.facilities = null, this.incidents = null, this.messages = null, this.pointBarriers = null, this.polylineBarriers = null, this.polygonBarriers = null, this.routes = null;
  }
  readFacilities(r2) {
    return f(r2);
  }
  readIncidents(r2) {
    return f(r2);
  }
  readPointBarriers(r2, e2) {
    return f(e2.barriers);
  }
  readPolylineBarriers(r2) {
    return f(r2);
  }
  readPolygonBarriers(r2) {
    return f(r2);
  }
  readRoutes(r2) {
    return d(r2);
  }
};
e([y({ type: [c$2] })], j.prototype, "directions", void 0), e([y({ type: [j$1] })], j.prototype, "facilities", void 0), e([e$1("facilities")], j.prototype, "readFacilities", null), e([y({ type: [j$1] })], j.prototype, "incidents", void 0), e([e$1("incidents")], j.prototype, "readIncidents", null), e([y({ type: [c$3] })], j.prototype, "messages", void 0), e([y({ type: [j$1] })], j.prototype, "pointBarriers", void 0), e([e$1("pointBarriers", ["barriers"])], j.prototype, "readPointBarriers", null), e([y({ type: [m] })], j.prototype, "polylineBarriers", void 0), e([e$1("polylineBarriers")], j.prototype, "readPolylineBarriers", null), e([y({ type: [x] })], j.prototype, "polygonBarriers", void 0), e([e$1("polygonBarriers")], j.prototype, "readPolygonBarriers", null), e([y({ type: [n] })], j.prototype, "routes", void 0), e([e$1("routes")], j.prototype, "readRoutes", null), j = e([i("esri.tasks.support.ClosestFacilitySolveResult")], j);
var g = j;
const l = o({ accumulateAttributes: { name: "accumulateAttributeNames" }, attributeParameterValues: true, directionsTimeAttribute: { name: "directionsTimeAttributeName" }, impedanceAttribute: { name: "impedanceAttributeName" }, facilities: true, incidents: true, outSpatialReference: { name: "outSR", getter: (e2) => e2.outSpatialReference.wkid }, pointBarriers: { name: "barriers" }, polylineBarriers: true, polygonBarriers: true, restrictionAttributes: { name: "restrictionAttributeNames" }, returnPointBarriers: { name: "returnBarriers" }, returnRoutes: { name: "returnCFRoutes" }, travelMode: true });
function c$1(i2, c2, m2) {
  return __async(this, null, function* () {
    const f2 = [], p2 = [], y2 = {}, B = {}, d2 = r$1(i2);
    return c2.incidents && c2.incidents.features && l$1(c2.incidents.features, p2, "incidents.features", y2), c2.facilities && c2.facilities.features && l$1(c2.facilities.features, p2, "facilities.features", y2), c2.pointBarriers && c2.pointBarriers.features && l$1(c2.pointBarriers.features, p2, "pointBarriers.features", y2), c2.polylineBarriers && c2.polylineBarriers.features && l$1(c2.polylineBarriers.features, p2, "polylineBarriers.features", y2), c2.polygonBarriers && c2.polygonBarriers.features && l$1(c2.polygonBarriers.features, p2, "polygonBarriers.features", y2), L(p2).then((e2) => {
      for (const r2 in y2) {
        const t = y2[r2];
        f2.push(r2), B[r2] = e2.slice(t[0], t[1]);
      }
      return u(B, f2) ? d$1(d2.path) : Promise.resolve({ dontCheck: true });
    }).then((r2) => {
      ("dontCheck" in r2 ? r2.dontCheck : r2.hasZ) || n$1(B, f2);
      for (const e2 in B)
        B[e2].forEach((r3, t2) => {
          c2.get(e2)[t2].geometry = r3;
        });
      let t = { query: __spreadValues(__spreadProps(__spreadValues({}, d2.query), { f: "json" }), l.toQueryParams(c2)) };
      return m2 && (t = __spreadValues(__spreadValues({}, m2), t)), U(`${d2.path}/solveClosestFacility`, t);
    }).then((e2) => g.fromJSON(e2.data));
  });
}
let p = class extends u$1(p$1) {
  constructor(r2) {
    super(r2), this.url = null;
  }
  solve(r2, s) {
    return c$1(this.url, r2, s);
  }
};
e([y()], p.prototype, "url", void 0), p = e([i("esri.tasks.ClosestFacilityTask")], p);
var c = p;
export default c;
