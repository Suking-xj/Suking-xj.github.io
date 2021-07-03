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
import { aW as t$1, f5 as e, aa as s$1, aj as U, a5 as r } from "./vendor.74d5941c.js";
import { u, F, a as a$1 } from "./aaBoundingBox.b76947f8.js";
function t(r2, { isPrimitive: t2, width: n2, depth: o2, height: c2 }) {
  const s2 = t2 ? 10 : 1;
  if (n2 == null && c2 == null && o2 == null)
    return [s2 * r2[0], s2 * r2[1], s2 * r2[2]];
  const i = t$1(n2, o2, c2);
  let u2;
  for (let e2 = 0; e2 < 3; e2++) {
    const t3 = i[e2];
    if (t3 != null) {
      u2 = t3 / r2[e2];
      break;
    }
  }
  for (let e2 = 0; e2 < 3; e2++)
    i[e2] == null && (i[e2] = r2[e2] * u2);
  return i;
}
const n = u(-0.5, -0.5, -0.5, 0.5, 0.5, 0.5), o = u(-0.5, -0.5, 0, 0.5, 0.5, 1), c$1 = u(-0.5, -0.5, 0, 0.5, 0.5, 0.5);
function s(e2) {
  switch (e2) {
    case "sphere":
    case "cube":
    case "diamond":
      return n;
    case "cylinder":
    case "cone":
    case "inverted-cone":
      return o;
    case "tetrahedron":
      return c$1;
    default:
      return;
  }
}
let c = m();
function m() {
  return new e(50);
}
function a() {
  c = m();
}
function y(e2, o2) {
  if (e2.type === "icon")
    return l(e2, o2);
  if (e2.type === "object")
    return b(e2, o2);
  throw new s$1("symbol3d:unsupported-symbol-layer", "computeLayerSize only works with symbol layers of type Icon and Object");
}
function f(e2, o2) {
  return __async(this, null, function* () {
    if (e2.type === "icon")
      return p(e2, o2);
    if (e2.type === "object")
      return d(e2, o2);
    throw new s$1("symbol3d:unsupported-symbol-layer", "computeLayerSize only works with symbol layers of type Icon and Object");
  });
}
function l(o2, t2) {
  return __async(this, null, function* () {
    if (o2.resource.href)
      return h(o2.resource.href).then((e2) => [e2.width, e2.height]);
    if (o2.resource.primitive)
      return r(t2) ? [t2, t2] : [256, 256];
    throw new s$1("symbol3d:invalid-symbol-layer", "symbol layers of type Icon must have either an href or a primitive resource");
  });
}
function p(e2, r2) {
  return l(e2, r2).then((r3) => {
    if (e2.size == null)
      return r3;
    const o2 = r3[0] / r3[1];
    return o2 > 1 ? [e2.size, e2.size / o2] : [e2.size * o2, e2.size];
  });
}
function h(e2) {
  return U(e2, { responseType: "image" }).then((e3) => e3.data);
}
function b(e2, r2) {
  return w(e2, r2).then((e3) => F(e3));
}
function d(e2, r2) {
  return __async(this, null, function* () {
    const o2 = yield b(e2, r2);
    return t(o2, e2);
  });
}
function w(o2, t2) {
  return __async(this, null, function* () {
    if (!o2.isPrimitive) {
      const e2 = o2.resource.href, r2 = c.get(e2);
      if (r2 !== void 0)
        return Promise.resolve(r2);
      const t3 = yield import("./objectResourceUtils.a7f0af27.js").then(function(n4) {
        return n4.o;
      }), n3 = yield t3.fetch(e2, { disableTextures: true });
      return c.put(e2, n3.referenceBoundingBox), n3.referenceBoundingBox;
    }
    let n2 = null;
    if (o2.resource && o2.resource.primitive && (n2 = a$1(s(o2.resource.primitive)), r(t2)))
      for (let e2 = 0; e2 < n2.length; e2++)
        n2[e2] *= t2;
    return n2 ? Promise.resolve(n2) : Promise.reject(new s$1("symbol:invalid-resource", "The symbol does not have a valid resource"));
  });
}
export { a as clearBoundingBoxCache, l as computeIconLayerResourceSize, y as computeLayerResourceSize, f as computeLayerSize, b as computeObjectLayerResourceSize };
