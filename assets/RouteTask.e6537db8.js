var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
import { dS as r, d0 as L, aj as U, ae as e, ag as i$1, dT as p$2 } from "./vendor.74d5941c.js";
import { l, u, d, n, i, o, b as u$1 } from "./NAServiceDescription.7a69545e.js";
import "./GPMessage.8bfedb6d.js";
const p$1 = o({ accumulateAttributes: { name: "accumulateAttributeNames" }, attributeParameterValues: true, directionsTimeAttribute: { name: "directionsTimeAttributeName" }, impedanceAttribute: { name: "impedanceAttributeName" }, outSpatialReference: { name: "outSR", getter: (e2) => e2.outSpatialReference.wkid }, pointBarriers: { name: "barriers" }, polylineBarriers: true, polygonBarriers: true, restrictionAttributes: { name: "restrictionAttributeNames" }, stops: true, travelMode: true });
function m(s, m2, l$1) {
  return __async(this, null, function* () {
    const c2 = [], f = [], y = {}, B = {}, h = r(s);
    return m2.stops && m2.stops.features && l(m2.stops.features, f, "stops.features", y), m2.pointBarriers && m2.pointBarriers.features && l(m2.pointBarriers.features, f, "pointBarriers.features", y), m2.polylineBarriers && m2.polylineBarriers.features && l(m2.polylineBarriers.features, f, "polylineBarriers.features", y), m2.polygonBarriers && m2.polygonBarriers.features && l(m2.polygonBarriers.features, f, "polygonBarriers.features", y), L(f).then((e2) => {
      for (const r2 in y) {
        const t = y[r2];
        c2.push(r2), B[r2] = e2.slice(t[0], t[1]);
      }
      return u(B, c2) ? d(h.path) : Promise.resolve({ dontCheck: true });
    }).then((r2) => {
      ("dontCheck" in r2 ? r2.dontCheck : r2.hasZ) || n(B, c2);
      for (const e2 in B)
        B[e2].forEach((r3, t2) => {
          m2.get(e2)[t2].geometry = r3;
        });
      const t = __spreadProps(__spreadValues({}, l$1), { query: __spreadProps(__spreadValues(__spreadValues({}, h.query), p$1.toQueryParams(m2)), { f: "json" }) }), { path: s2 } = h, o2 = "/solve", i2 = s2.endsWith(o2) ? s2 : s2 + o2;
      return U(i2, t);
    }).then((e2) => i(e2));
  });
}
let p = class extends u$1(p$2) {
  constructor(r2) {
    super(r2);
  }
  solve(r2, s) {
    return m(this.url, r2, s);
  }
};
p = e([i$1("esri.tasks.RouteTask")], p);
var c = p;
export default c;
