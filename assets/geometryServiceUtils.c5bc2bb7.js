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
import { ar as s, aa as s$1, dP as w } from "./vendor.74d5941c.js";
import { a } from "./ProjectParameters.7956a902.js";
function i(o = null, i2) {
  return __async(this, null, function* () {
    if (s.geometryServiceUrl) {
      return new (yield import("./GeometryService.c3ce0eba.js")).default({ url: s.geometryServiceUrl });
    }
    if (!o)
      throw new s$1("internal:geometry-service-url-not-configured");
    let n2;
    if (n2 = "portal" in o ? o.portal || w.getDefault() : o, yield n2.load({ signal: i2 }), n2.helperServices && n2.helperServices.geometry && n2.helperServices.geometry.url) {
      return new (yield import("./GeometryService.c3ce0eba.js")).default({ url: n2.helperServices.geometry.url });
    }
    throw new s$1("internal:geometry-service-url-not-configured");
  });
}
function n(e, t, n2 = null, a$1) {
  return __async(this, null, function* () {
    const l = yield i(n2, a$1), s2 = new a();
    s2.geometries = [e], s2.outSpatialReference = t;
    const c = yield l.project(s2, { signal: a$1 });
    if (c && Array.isArray(c) && c.length === 1)
      return c[0];
    throw new s$1("internal:geometry-service-projection-failed");
  });
}
export { i as create, n as projectGeometry };
