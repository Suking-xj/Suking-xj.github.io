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
import { ee as D, ef as g, aa as s, a5 as r, a0 as t, eg as qt, aj as U } from "./vendor.74d5941c.js";
function c(_0) {
  return __async(this, arguments, function* (t2, r2 = {}, a) {
    yield t2.load(a);
    const s2 = D(t2.itemUrl, "resources"), { start: n = 1, num: c2 = 10, sortOrder: u2 = "asc", sortField: l2 = "created" } = r2, i2 = { query: { start: n, num: c2, sortOrder: u2, sortField: l2 }, signal: g(a, "signal") }, p2 = yield t2.portal._request(s2, i2);
    return { total: p2.total, nextStart: p2.nextStart, resources: p2.resources.map(({ created: e, size: r3, resource: a2 }) => ({ created: new Date(e), size: r3, resource: t2.resourceFromPath(a2) })) };
  });
}
function u(r$1, s$1, n, c2) {
  return __async(this, null, function* () {
    if (!r$1.hasPath())
      throw new s(`portal-item-resource-${s$1}:invalid-path`, "Resource does not have a valid path");
    yield r$1.portalItem.load(c2);
    const u2 = D(r$1.portalItem.userItemUrl, s$1 === "add" ? "addResources" : "updateResources"), [l2, i2] = p(r$1.path), m2 = yield h(n), d2 = new FormData();
    return l2 && l2 !== "." && d2.append("resourcesPrefix", l2), d2.append("fileName", i2), d2.append("file", m2, i2), d2.append("f", "json"), r(c2) && c2.access && d2.append("access", c2.access), yield r$1.portalItem.portal._request(u2, { method: "post", body: d2, signal: g(c2, "signal") }), r$1;
  });
}
function l(t2, r2, s$1) {
  return __async(this, null, function* () {
    if (!r2.hasPath())
      throw new s("portal-item-resources-remove:invalid-path", "Resource does not have a valid path");
    yield t2.load(s$1);
    const n = D(t2.userItemUrl, "removeResources");
    yield t2.portal._request(n, { method: "post", query: { resource: r2.path }, signal: g(s$1, "signal") }), r2.portalItem = null;
  });
}
function i(t2, r2) {
  return __async(this, null, function* () {
    yield t2.load(r2);
    const a = D(t2.userItemUrl, "removeResources");
    return t2.portal._request(a, { method: "post", query: { deleteAll: true }, signal: g(r2, "signal") });
  });
}
function p(e) {
  const t2 = e.lastIndexOf("/");
  return t2 === -1 ? [".", e] : [e.slice(0, t2), e.slice(t2 + 1)];
}
function m(e) {
  const [t2, r2] = d(e), [a, o] = p(t2);
  return [a, o, r2];
}
function d(e) {
  const t$1 = qt(e);
  return t(t$1) ? [e, ""] : [e.slice(0, e.length - t$1.length - 1), `.${t$1}`];
}
function h(e) {
  return __async(this, null, function* () {
    if (e instanceof Blob)
      return e;
    return (yield U(e.url, { responseType: "blob" })).data;
  });
}
function f(e, t2) {
  if (!e.hasPath())
    return null;
  const [r2, , a] = m(e.path);
  return e.portalItem.resourceFromPath(D(r2, t2 + a));
}
function w(e, t2) {
  if (!e.hasPath())
    return null;
  const [r2, , a] = m(e.path);
  return e.portalItem.resourceFromPath(D(r2, t2 + a));
}
export { u as addOrUpdateResource, h as contentToBlob, c as fetchResources, f as getSiblingOfSameType, w as getSiblingOfSameTypeI, i as removeAllResources, l as removeResource, m as splitPrefixFileNameAndExtension };
