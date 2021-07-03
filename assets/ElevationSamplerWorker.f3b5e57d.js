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
import { a5 as r, ai as t } from "./vendor.74d5941c.js";
import { h } from "./PooledRBush.257a80e4.js";
import "./quickselect.e4940b29.js";
import "./_commonjsHelpers.f2a458db.js";
class n {
  createIndex(e, n2) {
    return __async(this, null, function* () {
      const o2 = new Array();
      if (!e.vertexAttributes || !e.vertexAttributes.position)
        return new h();
      const s = this.createMeshData(e), a = r(n2) ? yield n2.invoke("createIndexThread", s, { transferList: o2 }) : this.createIndexThread(s).result;
      return this.createPooledRBush().fromJSON(a);
    });
  }
  createIndexThread(e) {
    const t2 = new Float64Array(e.position), r2 = this.createPooledRBush();
    return e.components ? this.createIndexComponentsThread(r2, t2, e.components.map((e2) => new Uint32Array(e2))) : this.createIndexAllThread(r2, t2);
  }
  createIndexAllThread(e, t2) {
    const r2 = new Array(t2.length / 9);
    let n2 = 0;
    for (let s = 0; s < t2.length; s += 9)
      r2[n2++] = o(t2, s + 0, s + 3, s + 6);
    return e.load(r2), { result: e.toJSON() };
  }
  createIndexComponentsThread(e, t2, r2) {
    let n2 = 0;
    for (const o2 of r2)
      n2 += o2.length / 3;
    const s = new Array(n2);
    let a = 0;
    for (const c of r2)
      for (let e2 = 0; e2 < c.length; e2 += 3)
        s[a++] = o(t2, 3 * c[e2 + 0], 3 * c[e2 + 1], 3 * c[e2 + 2]);
    return e.load(s), { result: e.toJSON() };
  }
  createMeshData(e) {
    const t2 = e.vertexAttributes.position.buffer;
    return !e.components || e.components.some((e2) => !e2.faces) ? { position: t2 } : { position: t2, components: e.components.map((e2) => e2.faces) };
  }
  createPooledRBush() {
    return new h(9, t("csp-restrictions") ? (e) => e : [".minX", ".minY", ".maxX", ".maxY"]);
  }
}
function o(e, t2, r2, n2) {
  return { minX: Math.min(e[t2 + 0], e[r2 + 0], e[n2 + 0]), maxX: Math.max(e[t2 + 0], e[r2 + 0], e[n2 + 0]), minY: Math.min(e[t2 + 1], e[r2 + 1], e[n2 + 1]), maxY: Math.max(e[t2 + 1], e[r2 + 1], e[n2 + 1]), p0: [e[t2 + 0], e[t2 + 1], e[t2 + 2]], p1: [e[r2 + 0], e[r2 + 1], e[r2 + 2]], p2: [e[n2 + 0], e[n2 + 1], e[n2 + 2]] };
}
export default n;
export { n as ElevationSamplerWorker };
