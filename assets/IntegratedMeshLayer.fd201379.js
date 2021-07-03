var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
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
import { hN as h, a5 as r, hd as m$1, hO as i, a0 as t, hP as t$1, hQ as Q, hR as v$1, hS as F, hT as s, h3 as o, ee as D, ef as g$1, hU as p, eg as qt, hV as R$1, ae as e, af as y$1, bG as x, c4 as o$1, ag as i$2, dA as a, hW as nn, h0 as t$2, hX as fn, bT as y$2, hY as i$3, c_ as L, dD as U$1, aj as U$2, dX as p$1, dY as l$1, dZ as u$1, gS as s$1, d_ as l$2, e1 as b$1, b3 as u$2, eu as C, hZ as c, dl as w$1, aa as s$2, dQ as e$1, h7 as m$3 } from "./vendor.74d5941c.js";
import { i as i$1, R as R$2 } from "./SceneService.00767b42.js";
import { s as s$3, l as l$3, u as u$3, m as m$2 } from "./I3SLayerDefinitions.faeba957.js";
import "./resourceUtils.a485eb9e.js";
function g(r$1) {
  const e2 = r(r$1) && r$1.origins ? r$1.origins : [void 0];
  return (t2, o2) => {
    const n2 = w(r$1, t2, o2);
    for (const r2 of e2) {
      const e3 = h(t2, r2, o2);
      for (const t3 in n2)
        e3[t3] = n2[t3];
    }
  };
}
function w(r$1, e2, o2) {
  if (r(r$1) && r$1.type === "resource")
    return v(r$1, e2, o2);
  switch (r(r$1) && r$1.type ? r$1.type : "other") {
    case "other":
      return { read: true, write: true };
    case "url": {
      const { read: t2, write: r2 } = R$1;
      return { read: t2, write: r2 };
    }
  }
}
function v(e2, i$22, p2) {
  const a2 = s(i$22, p2);
  return { type: String, read: (t2, r2, e3) => {
    const o2 = m$1(t2, r2, e3);
    return a2.type === String ? o2 : typeof a2.type == "function" ? new a2.type({ url: o2 }) : void 0;
  }, write: { writer(o2, i$23, c2, f2) {
    if (!f2 || !f2.resources)
      return typeof o2 == "string" ? void (i$23[c2] = i(o2, f2)) : void (i$23[c2] = o2.write({}, f2));
    const m2 = P(o2), d = m2 ? i(m2, __spreadProps(__spreadValues({}, f2), { verifyItemRelativeUrls: f2 && f2.verifyItemRelativeUrls ? { writtenUrls: f2.verifyItemRelativeUrls.writtenUrls, rootPath: null } : null }), 1) : null, g2 = a2.type !== String && (!i$1(this) || f2 && f2.origin && this.originIdOf(p2) > t$1(f2.origin));
    f2 && f2.portalItem && r(d) && !Q(d) ? g2 ? j(this, p2, o2, d, i$23, c2, f2, e2) : I$1(d, i$23, c2, f2) : f2 && f2.portalItem && (t(d) || r(v$1(d)) || F(d) || g2) ? U(this, p2, o2, d, i$23, c2, f2, e2) : i$23[c2] = d;
  } } };
}
function U(t2, r2, o$12, i2, n2, s2, a2, l2) {
  const m2 = o(), y2 = S(o$12, i2, a2), h2 = D(g$1(l2, "prefix"), m2), d = `${h2}.${p(y2)}`, g2 = a2.portalItem.resourceFromPath(d);
  F(i2) && a2.resources.pendingOperations.push(b(i2).then((t3) => {
    g2.path = `${h2}.${p(t3)}`, n2[s2] = g2.itemRelativeUrl;
  }).catch(() => {
  })), O$1(t2, r2, g2, y2, a2.resources.toAdd), n2[s2] = g2.itemRelativeUrl;
}
function j(t2, r2, e2, o2, i2, n2, s2, u2) {
  const p$12 = s2.portalItem.resourceFromPath(o2), c2 = S(e2, o2, s2);
  p(c2) === qt(p$12.path) ? (O$1(t2, r2, p$12, c2, s2.resources.toUpdate), i2[n2] = o2) : U(t2, r2, e2, o2, i2, n2, s2, u2);
}
function I$1(t2, r2, e2, o2) {
  o2.resources.toKeep.push({ resource: o2.portalItem.resourceFromPath(t2) }), r2[e2] = t2;
}
function O$1(t2, r2, e2, o2, i2) {
  i2.push({ resource: e2, content: o2, finish: (e3) => {
    R(t2, r2, e3);
  } });
}
function S(t2, r2, e2) {
  return typeof t2 == "string" ? { url: r2 } : new Blob([JSON.stringify(t2.toJSON(e2))], { type: "application/json" });
}
function b(t2) {
  return __async(this, null, function* () {
    const r2 = (yield import("./vendor.74d5941c.js").then(function(n2) {
      return n2.ju;
    })).default, { data: e2 } = yield r2(t2, { responseType: "blob" });
    return e2;
  });
}
function P(t$12) {
  return t(t$12) ? null : typeof t$12 == "string" ? t$12 : t$12.url;
}
function R(t2, r2, e2) {
  typeof t2[r2] == "string" ? t2[r2] = e2.url : t2[r2].url = e2.url;
}
var l;
let y = l = class extends a {
  constructor(e2) {
    super(e2), this.geometry = null, this.type = "clip";
  }
  writeGeometry(e2, r2, o2, s2) {
    if (s2.layer && s2.layer.spatialReference && !s2.layer.spatialReference.equals(this.geometry.spatialReference)) {
      if (!nn(e2.spatialReference, s2.layer.spatialReference))
        return void (s2 && s2.messages && s2.messages.push(new t$2("scenemodification:unsupported", "Scene modifications with incompatible spatial references are not supported", { modification: this, spatialReference: s2.layer.spatialReference, context: s2 })));
      const p2 = new x();
      fn(e2, p2, s2.layer.spatialReference), r2[o2] = p2.toJSON(s2);
    } else
      r2[o2] = e2.toJSON(s2);
    delete r2[o2].spatialReference;
  }
  clone() {
    return new l({ geometry: y$2(this.geometry), type: this.type });
  }
};
e([y$1({ type: x }), g()], y.prototype, "geometry", void 0), e([o$1(["web-scene", "portal-item"], "geometry")], y.prototype, "writeGeometry", null), e([y$1({ type: ["clip", "mask", "replace"], nonNullable: true }), g()], y.prototype, "type", void 0), y = l = e([i$2("esri.layers.support.SceneModification")], y);
var f = y;
var m;
let n = m = class extends i$3(L.ofType(f)) {
  constructor(r2) {
    super(r2), this.url = null;
  }
  toJSON(r2) {
    return this.toArray().map((o2) => o2.toJSON(r2)).filter((r3) => !!r3.geometry);
  }
  clone() {
    return new m({ url: this.url, items: this.items.map((r2) => r2.clone()) });
  }
  _readModifications(r2, o2) {
    for (const t2 of r2)
      this.add(f.fromJSON(t2, o2));
  }
  static fromJSON(r2, o2) {
    const t2 = new m();
    return t2._readModifications(r2, o2), t2;
  }
  static fromUrl(r2, t2, e2) {
    return __async(this, null, function* () {
      const i2 = { url: U$1(r2), origin: "service" }, c2 = yield U$2(r2, { responseType: "json", signal: g$1(e2, "signal") }), n2 = t2.toJSON(), u2 = [];
      for (const o2 of c2.data)
        u2.push(f.fromJSON(__spreadProps(__spreadValues({}, o2), { geometry: __spreadProps(__spreadValues({}, o2.geometry), { spatialReference: n2 }) }), i2));
      return new m({ url: r2, items: u2 });
    });
  }
};
e([y$1({ type: String })], n.prototype, "url", void 0), n = m = e([i$2("esri.layers.support.SceneModifications")], n);
var u = n;
let I = class extends R$2(p$1(l$1(u$1(s$1(l$2(b$1)))))) {
  constructor(...e2) {
    super(...e2), this.handles = new u$2(), this.geometryType = "mesh", this.operationalLayerType = "IntegratedMeshLayer", this.type = "integrated-mesh", this.nodePages = null, this.materialDefinitions = null, this.textureSetDefinitions = null, this.geometryDefinitions = null, this.serviceUpdateTimeStamp = null, this.profile = "mesh-pyramids", this.modifications = null, this._modificationsSource = null, this.elevationInfo = null, this.path = null;
  }
  destroy() {
    this.handles.destroy();
  }
  initialize() {
    this.handles.add(C(this, "modifications", "after-changes", () => this.modifications = this.modifications, null, null, true));
  }
  normalizeCtorArgs(e2, t2) {
    return typeof e2 == "string" ? __spreadValues({ url: e2 }, t2) : e2;
  }
  readModifications(e2, t2, r2) {
    this._modificationsSource = { url: c(e2, r2), context: r2 };
  }
  load(e2) {
    return __async(this, null, function* () {
      return this.addResolvingPromise(this._doLoad(e2)), this;
    });
  }
  _doLoad(e2) {
    return __async(this, null, function* () {
      const o2 = g$1(e2, "signal");
      try {
        yield this.loadFromPortal({ supportedTypes: ["Scene Service"] }, e2);
      } catch (i2) {
        w$1(i2);
      }
      if (yield this._fetchService(o2), r(this._modificationsSource)) {
        const t2 = yield u.fromUrl(this._modificationsSource.url, this.spatialReference, e2);
        this.setAtOrigin("modifications", t2, this._modificationsSource.context.origin), this._modificationsSource = null;
      }
      yield this._fetchIndexAndUpdateExtent(this.nodePages, o2);
    });
  }
  beforeSave() {
    if (!t(this._modificationsSource))
      return this.load().then(() => {
      }, () => {
      });
  }
  saveAs(e2, t2) {
    return __async(this, null, function* () {
      return this._debouncedSaveOperations(1, __spreadProps(__spreadValues({}, t2), { getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "integrated-mesh" }), e2);
    });
  }
  save() {
    return __async(this, null, function* () {
      const e2 = { getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "integrated-mesh" };
      return this._debouncedSaveOperations(0, e2);
    });
  }
  validateLayer(e2) {
    if (e2.layerType && e2.layerType !== "IntegratedMesh")
      throw new s$2("integrated-mesh-layer:layer-type-not-supported", "IntegratedMeshLayer does not support this layer type", { layerType: e2.layerType });
    if (isNaN(this.version.major) || isNaN(this.version.minor))
      throw new s$2("layer:service-version-not-supported", "Service version is not supported.", { serviceVersion: this.version.versionString, supportedVersions: "1.x" });
    if (this.version.major > 1)
      throw new s$2("layer:service-version-too-new", "Service version is too new.", { serviceVersion: this.version.versionString, supportedVersions: "1.x" });
  }
  _getTypeKeywords() {
    return ["IntegratedMeshLayer"];
  }
};
e([y$1({ type: String, readOnly: true })], I.prototype, "geometryType", void 0), e([y$1({ type: ["show", "hide"] })], I.prototype, "listMode", void 0), e([y$1({ type: ["IntegratedMeshLayer"] })], I.prototype, "operationalLayerType", void 0), e([y$1({ json: { read: false }, readOnly: true })], I.prototype, "type", void 0), e([y$1({ type: s$3, readOnly: true })], I.prototype, "nodePages", void 0), e([y$1({ type: [l$3], readOnly: true })], I.prototype, "materialDefinitions", void 0), e([y$1({ type: [u$3], readOnly: true })], I.prototype, "textureSetDefinitions", void 0), e([y$1({ type: [m$2], readOnly: true })], I.prototype, "geometryDefinitions", void 0), e([y$1({ readOnly: true })], I.prototype, "serviceUpdateTimeStamp", void 0), e([y$1({ type: u }), g({ origins: ["web-scene", "portal-item"], type: "resource", prefix: "modifications" })], I.prototype, "modifications", void 0), e([e$1(["web-scene", "portal-item"], "modifications")], I.prototype, "readModifications", null), e([y$1(m$3)], I.prototype, "elevationInfo", void 0), e([y$1({ type: String, json: { origins: { "web-scene": { read: true, write: true }, "portal-item": { read: true, write: true } }, read: false } })], I.prototype, "path", void 0), I = e([i$2("esri.layers.IntegratedMeshLayer")], I);
var O = I;
export default O;
