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
    var step = (x2) => x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import { ck as M, cl as y$1, bs as s, cm as d, cn as x$1, co as u$1, cp as J, cq as en } from "./vendor.74d5941c.js";
import { t } from "./json.7989af9b.js";
const h = [0, 0];
function u(s2, t2) {
  if (!t2)
    return null;
  if ("x" in t2) {
    const n = { x: 0, y: 0 };
    return [n.x, n.y] = s2(t2.x, t2.y, h), t2.z != null && (n.z = t2.z), t2.m != null && (n.m = t2.m), n;
  }
  if ("xmin" in t2) {
    const n = { xmin: 0, ymin: 0, xmax: 0, ymax: 0 };
    return [n.xmin, n.ymin] = s2(t2.xmin, t2.ymin, h), [n.xmax, n.ymax] = s2(t2.xmax, t2.ymax, h), t2.hasZ && (n.zmin = t2.zmin, n.zmax = t2.zmax, n.hasZ = true), t2.hasM && (n.mmin = t2.mmin, n.mmax = t2.mmax, n.hasM = true), n;
  }
  return "rings" in t2 ? { rings: c(t2.rings, s2), hasM: t2.hasM, hasZ: t2.hasZ } : "paths" in t2 ? { paths: c(t2.paths, s2), hasM: t2.hasM, hasZ: t2.hasZ } : "points" in t2 ? { points: l(t2.points, s2), hasM: t2.hasM, hasZ: t2.hasZ } : void 0;
}
function c(s2, t2) {
  const n = [];
  for (const e of s2)
    n.push(l(e, t2));
  return n;
}
function l(s2, t2) {
  const n = [];
  for (const e of s2) {
    const s3 = t2(e[0], e[1], [0, 0]);
    n.push(s3), e.length > 2 && s3.push(e[2]), e.length > 3 && s3.push(e[3]);
  }
  return n;
}
function p(s2, t2) {
  return __async(this, null, function* () {
    if (!t2)
      return;
    const n = Array.isArray(s2) ? s2.map((s3) => {
      var t3;
      return (t3 = s3.geometry) == null ? void 0 : t3.spatialReference;
    }) : [s2];
    yield en(n.map((s3) => ({ source: s3, dest: t2 })));
  });
}
const f = u.bind(null, M), x = u.bind(null, y$1);
function y(e, r, o) {
  return e ? (o || (o = r, r = e.spatialReference), s(r) && s(o) && !d(r, o) ? x$1(r, o) ? u$1(o) ? f(e) : x(e) : J(t, [e], r, o, null)[0] : e) : e;
}
class g {
  constructor() {
    this._jobs = [], this._timer = null, this._process = this._process.bind(this);
  }
  push(s2, n, e) {
    return __async(this, null, function* () {
      !s2 || !s2.length || !n || !e || d(n, e);
      const r = { geometries: s2, inSpatialReference: n, outSpatialReference: e, resolve: null };
      return this._jobs.push(r), new Promise((s3) => {
        r.resolve = s3, this._timer === null && (this._timer = setTimeout(this._process, 10));
      });
    });
  }
  _process() {
    this._timer = null;
    const s2 = this._jobs.shift();
    if (!s2)
      return;
    const { geometries: t$1, inSpatialReference: e, outSpatialReference: r, resolve: o } = s2;
    x$1(e, r) ? u$1(r) ? o(t$1.map(f)) : o(t$1.map(x)) : o(J(t, t$1, e, r, null)), this._jobs.length > 0 && (this._timer = setTimeout(this._process, 10));
  }
}
const _ = new g();
function j(s2, t2, n) {
  return __async(this, null, function* () {
    return _.push(s2, t2, n);
  });
}
export { j, p, y };
