var __defProp = Object.defineProperty;
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
import { a5 as r$1, aj as U$1, aa as s, h3 as o, dd as A, aq as a$1, dm as o$1, a4 as n$2, ae as e, af as y, h8 as b, bF as k, dQ as e$1, cr as M, d$ as v, e0 as f, c4 as o$2, ag as i$1, eH as z, h9 as h, dM as d, ha as v$1, hb as g, hc as O$1, dD as U$2, dc as b$1, dP as w$1 } from "./vendor.74d5941c.js";
import { getSiblingOfSameTypeI as w } from "./resourceUtils.a485eb9e.js";
function n$1(n2, t, s$1, a2, i2) {
  return __async(this, null, function* () {
    let d2 = null;
    if (r$1(s$1)) {
      const o2 = `${n2}/nodepages/`, t2 = o2 + Math.floor(s$1.rootIndex / s$1.nodesPerPage);
      try {
        return { type: "page", rootPage: (yield U$1(t2, { query: { f: "json" }, responseType: "json", signal: i2 })).data, rootIndex: s$1.rootIndex, pageSize: s$1.nodesPerPage, lodMetric: s$1.lodSelectionMetricType, urlPrefix: o2 };
      } catch (c) {
        r$1(a2) && a2.warn("#fetchIndexInfo()", "Failed to load root node page. Falling back to node documents.", t2, c), d2 = c;
      }
    }
    if (!t)
      return null;
    const l = `${n2}/nodes/`, p2 = l + (t && t.split("/").pop());
    try {
      return { type: "node", rootNode: (yield U$1(p2, { query: { f: "json" }, responseType: "json", signal: i2 })).data, urlPrefix: l };
    } catch (c) {
      throw new s("sceneservice:root-node-missing", "Root node missing.", { pageError: d2, nodeError: c, url: p2 });
    }
  });
}
function i(i2) {
  return i2 && "getAtOrigin" in i2 && "originOf" in i2;
}
function r(r2) {
  r2 && r2.writtenProperties && r2.writtenProperties.forEach((r3) => {
    const t = r3.target;
    r3.newOrigin && r3.oldOrigin !== r3.newOrigin && i(t) && t.updateOrigin(r3.propName, r3.newOrigin);
  });
}
function a(s$1, a2, u) {
  return __async(this, null, function* () {
    if (!a2 || !a2.resources)
      return;
    const h2 = a2.portalItem === s$1.portalItem ? new Set(s$1.paths) : new Set();
    s$1.paths.length = 0, s$1.portalItem = a2.portalItem;
    const i2 = new Set(a2.resources.toKeep.map((r2) => r2.resource.path)), f2 = new Set(), m = [];
    i2.forEach((r2) => {
      h2.delete(r2), s$1.paths.push(r2);
    });
    for (const r2 of a2.resources.toUpdate)
      if (h2.delete(r2.resource.path), i2.has(r2.resource.path) || f2.has(r2.resource.path)) {
        const { resource: o$12, content: t, finish: a3, error: p2 } = r2, h3 = w(o$12, o());
        s$1.paths.push(h3.path), m.push(n({ resource: h3, content: t, finish: a3, error: p2 }, u));
      } else
        s$1.paths.push(r2.resource.path), m.push(p(r2, u)), f2.add(r2.resource.path);
    for (const r2 of a2.resources.toAdd)
      m.push(n(r2, u)), s$1.paths.push(r2.resource.path);
    if (h2.forEach((r2) => {
      const e2 = a2.portalItem.resourceFromPath(r2);
      m.push(e2.portalItem.removeResource(e2).catch(() => {
      }));
    }), m.length === 0)
      return;
    const l = yield A(m);
    a$1(u);
    const d2 = l.filter((r2) => "error" in r2).map((r2) => r2.error);
    if (d2.length > 0)
      throw new s("save:resources", "Failed to save one or more resources", { errors: d2 });
  });
}
function n(r2, e2) {
  return __async(this, null, function* () {
    const o2 = yield o$1(r2.resource.portalItem.addResource(r2.resource, r2.content, e2));
    if (o2.ok !== true)
      throw r2.error && r2.error(o2.error), o2.error;
    r2.finish && r2.finish(r2.resource);
  });
}
function p(r2, e2) {
  return __async(this, null, function* () {
    const o2 = yield o$1(r2.resource.update(r2.content, e2));
    if (o2.ok !== true)
      throw r2.error(o2.error), o2.error;
    r2.finish(r2.resource);
  });
}
const N = n$2.getLogger("esri.layers.mixins.SceneService"), R = (r$2) => {
  let R2 = class extends r$2 {
    constructor() {
      super(...arguments), this.spatialReference = null, this.fullExtent = null, this.heightModelInfo = null, this.minScale = 0, this.maxScale = 0, this.version = { major: Number.NaN, minor: Number.NaN, versionString: "" }, this.copyright = null, this.sublayerTitleMode = "item-title", this.title = null, this.layerId = null, this.indexInfo = null, this._debouncedSaveOperations = z((e2, t, r2) => __async(this, null, function* () {
        switch (e2) {
          case 0:
            return this._save(t);
          case 1:
            return this._saveAs(r2, t);
        }
      }));
    }
    readSpatialReference(e2, t) {
      return this._readSpatialReference(t);
    }
    _readSpatialReference(e2) {
      if (e2.spatialReference != null)
        return k.fromJSON(e2.spatialReference);
      {
        const t = e2.store, r2 = t.indexCRS || t.geographicCRS, o2 = r2 && parseInt(r2.substring(r2.lastIndexOf("/") + 1, r2.length), 10);
        return o2 != null ? new k(o2) : null;
      }
    }
    readFullExtent(e2, t, r2) {
      if (e2 != null && typeof e2 == "object")
        return M.fromJSON(e2, r2);
      const o2 = t.store, i2 = this._readSpatialReference(t);
      return i2 == null || o2 == null || o2.extent == null || !Array.isArray(o2.extent) || o2.extent.some((e3) => e3 < O) ? null : new M({ xmin: o2.extent[0], ymin: o2.extent[1], xmax: o2.extent[2], ymax: o2.extent[3], spatialReference: i2 });
    }
    readVersion(e2, t) {
      const r2 = t.store, o2 = r2.version != null ? r2.version.toString() : "", i2 = { major: Number.NaN, minor: Number.NaN, versionString: o2 }, s2 = o2.split(".");
      return s2.length >= 2 && (i2.major = parseInt(s2[0], 10), i2.minor = parseInt(s2[1], 10)), i2;
    }
    readTitlePortalItem(e2) {
      return this.sublayerTitleMode !== "item-title" ? void 0 : e2;
    }
    readTitleService(e2, r2) {
      const o2 = this.portalItem && this.portalItem.title;
      if (this.sublayerTitleMode === "item-title")
        return h(this.url, r2.name);
      let i2 = r2.name;
      if (!i2 && this.url) {
        const e3 = d(this.url);
        r$1(e3) && (i2 = e3.title);
      }
      return this.sublayerTitleMode === "item-title-and-service-name" && o2 && (i2 = o2 + " - " + i2), v$1(i2);
    }
    set url(e2) {
      const t = g({ layer: this, url: e2, nonStandardUrlAllowed: false, logger: N });
      this._set("url", t.url), t.layerId != null && this._set("layerId", t.layerId);
    }
    writeUrl(e2, t, r2, o2) {
      O$1(this, e2, "layers", t, o2);
    }
    get parsedUrl() {
      const e2 = this._get("url");
      if (!e2)
        return null;
      const t = U$2(e2);
      return this.layerId != null && (t.path = `${t.path}/layers/${this.layerId}`), t;
    }
    _fetchIndexAndUpdateExtent(e2, t) {
      return __async(this, null, function* () {
        this.indexInfo = n$1(this.parsedUrl.path, this.rootNode, e2, N, t), this.fullExtent == null || this.fullExtent.hasZ || this._updateExtent(yield this.indexInfo);
      });
    }
    _updateExtent(e2) {
      if ((e2 == null ? void 0 : e2.type) === "page") {
        var t, r2;
        const o3 = e2.rootIndex % e2.pageSize, i2 = (t = e2.rootPage) == null || (r2 = t.nodes) == null ? void 0 : r2[o3];
        if (i2 == null || i2.obb == null || i2.obb.center == null || i2.obb.halfSize == null)
          throw new s("sceneservice:invalid-node-page", "Invalid node page.");
        if (i2.obb.center[0] < O || this.fullExtent == null || this.fullExtent.hasZ)
          return;
        const s$1 = i2.obb.halfSize, a2 = i2.obb.center[2], n2 = Math.sqrt(s$1[0] * s$1[0] + s$1[1] * s$1[1] + s$1[2] * s$1[2]);
        this.fullExtent.zmin = a2 - n2, this.fullExtent.zmax = a2 + n2;
      } else if ((e2 == null ? void 0 : e2.type) === "node") {
        var o2;
        const t2 = (o2 = e2.rootNode) == null ? void 0 : o2.mbs;
        if (!Array.isArray(t2) || t2.length !== 4 || t2[0] < O)
          return;
        const r3 = t2[2], i2 = t2[3];
        this.fullExtent.zmin = r3 - i2, this.fullExtent.zmax = r3 + i2;
      }
    }
    _fetchService(e2) {
      return __async(this, null, function* () {
        if (this.url == null)
          throw new s("sceneservice:url-not-set", "Scene service can not be loaded without valid portal item or url");
        if (this.layerId == null && /SceneServer\/*$/i.test(this.url)) {
          const t = yield this._fetchFirstLayerId(e2);
          t != null && (this.layerId = t);
        }
        return this._fetchServiceLayer(e2);
      });
    }
    _fetchFirstLayerId(e2) {
      return __async(this, null, function* () {
        const t = yield U$1(this.url, { query: { f: "json" }, responseType: "json", signal: e2 });
        if (t.data && Array.isArray(t.data.layers) && t.data.layers.length > 0)
          return t.data.layers[0].id;
      });
    }
    _fetchServiceLayer(e2) {
      return __async(this, null, function* () {
        const t = yield U$1(this.parsedUrl.path, { query: { f: "json" }, responseType: "json", signal: e2 });
        t.ssl && (this.url = this.url.replace(/^http:/i, "https:"));
        const r2 = t.data;
        this.read(r2, { origin: "service", url: this.parsedUrl }), this.validateLayer(r2);
      });
    }
    _ensureLoadBeforeSave() {
      return __async(this, null, function* () {
        yield this.load(), "beforeSave" in this && typeof this.beforeSave == "function" && (yield this.beforeSave());
      });
    }
    validateLayer(e2) {
    }
    _updateTypeKeywords(e2, t, r2) {
      e2.typeKeywords || (e2.typeKeywords = []);
      const o2 = t.getTypeKeywords();
      for (const i2 of o2)
        e2.typeKeywords.push(i2);
      e2.typeKeywords && (e2.typeKeywords = e2.typeKeywords.filter((e3, t2, r3) => r3.indexOf(e3) === t2), r2 === 1 && (e2.typeKeywords = e2.typeKeywords.filter((e3) => e3 !== "Hosted Service")));
    }
    _saveAs(e2, t) {
      return __async(this, null, function* () {
        const r$12 = __spreadValues(__spreadValues({}, T), t);
        let o2 = b$1.from(e2);
        o2 || (N.error("_saveAs(): requires a portal item parameter"), yield Promise.reject(new s("sceneservice:portal-item-required", "_saveAs() requires a portal item to save to"))), o2.id && (o2 = o2.clone(), o2.id = null);
        const i2 = o2.portal || w$1.getDefault();
        yield this._ensureLoadBeforeSave(), o2.type = E, o2.portal = i2;
        const s$1 = { origin: "portal-item", url: null, messages: [], portal: i2, portalItem: o2, writtenProperties: [], blockedRelativeUrls: [], resources: { toAdd: [], toUpdate: [], toKeep: [], pendingOperations: [] } }, a$12 = { layers: [this.write(null, s$1)] };
        return yield Promise.all(s$1.resources.pendingOperations), yield this._validateAgainstJSONSchema(a$12, s$1, r$12), o2.url = this.url, o2.title || (o2.title = this.title), this._updateTypeKeywords(o2, r$12, 1), yield i2._signIn(), yield i2.user.addItem({ item: o2, folder: r$12 && r$12.folder, data: a$12 }), yield a(this.resourceReferences, s$1, null), this.portalItem = o2, r(s$1), s$1.portalItem = o2, o2;
      });
    }
    _save(e2) {
      return __async(this, null, function* () {
        const t = __spreadValues(__spreadValues({}, T), e2);
        this.portalItem || (N.error("_save(): requires the .portalItem property to be set"), yield Promise.reject(new s("sceneservice:portal-item-not-set", "Portal item to save to has not been set on this SceneService"))), this.portalItem.type !== E && (N.error("_save(): Non-matching portal item type. Got " + this.portalItem.type + ", expected " + E), yield Promise.reject(new s("sceneservice:portal-item-wrong-type", `Portal item needs to have type "${E}"`))), yield this._ensureLoadBeforeSave();
        const r$12 = { origin: "portal-item", url: this.portalItem.itemUrl && U$2(this.portalItem.itemUrl), messages: [], portal: this.portalItem.portal || w$1.getDefault(), portalItem: this.portalItem, writtenProperties: [], blockedRelativeUrls: [], resources: { toAdd: [], toUpdate: [], toKeep: [], pendingOperations: [] } }, o2 = { layers: [this.write(null, r$12)] };
        return yield Promise.all(r$12.resources.pendingOperations), yield this._validateAgainstJSONSchema(o2, r$12, t), this.portalItem.url = this.url, this.portalItem.title || (this.portalItem.title = this.title), this._updateTypeKeywords(this.portalItem, t, 0), yield this.portalItem.update({ data: o2 }), yield a(this.resourceReferences, r$12, null), r(r$12), this.portalItem;
      });
    }
    _validateAgainstJSONSchema(e2, t, r2) {
      return __async(this, null, function* () {
        let o2 = t.messages.filter((e3) => e3.type === "error").map((e3) => new s(e3.name, e3.message, e3.details));
        if (r2 && r2.validationOptions.ignoreUnsupported && (o2 = o2.filter((e3) => e3.name !== "layer:unsupported" && e3.name !== "symbol:unsupported" && e3.name !== "symbol-layer:unsupported" && e3.name !== "property:unsupported" && e3.name !== "url:unsupported" && e3.name !== "scenemodification:unsupported")), r2.validationOptions.enabled || U) {
          const t2 = (yield import("./schemaValidator.deaef628.js")).validate(e2, r2.portalItemLayerType);
          if (t2.length > 0) {
            const e3 = `Layer item did not validate:
${t2.join("\n")}`;
            if (N.error(`_validateAgainstJSONSchema(): ${e3}`), r2.validationOptions.failPolicy === "throw") {
              const e4 = t2.map((e5) => new s("sceneservice:schema-validation", e5)).concat(o2);
              throw new s("sceneservice-validate:error", "Failed to save layer item due to schema validation, see `details.errors`.", { combined: e4 });
            }
          }
        }
        if (o2.length > 0)
          throw new s("sceneservice:save", "Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information", { errors: o2 });
      });
    }
  };
  return e([y(b)], R2.prototype, "id", void 0), e([y({ type: k })], R2.prototype, "spatialReference", void 0), e([e$1("spatialReference", ["spatialReference", "store.indexCRS", "store.geographicCRS"])], R2.prototype, "readSpatialReference", null), e([y({ type: M })], R2.prototype, "fullExtent", void 0), e([e$1("fullExtent", ["fullExtent", "store.extent", "spatialReference", "store.indexCRS", "store.geographicCRS"])], R2.prototype, "readFullExtent", null), e([y({ readOnly: true, type: v })], R2.prototype, "heightModelInfo", void 0), e([y({ type: Number, json: { name: "layerDefinition.minScale", write: true, origins: { service: { read: { source: "minScale" }, write: false } } } })], R2.prototype, "minScale", void 0), e([y({ type: Number, json: { name: "layerDefinition.maxScale", write: true, origins: { service: { read: { source: "maxScale" }, write: false } } } })], R2.prototype, "maxScale", void 0), e([y({ readOnly: true })], R2.prototype, "version", void 0), e([e$1("version", ["store.version"])], R2.prototype, "readVersion", null), e([y({ type: String, json: { read: { source: "copyrightText" } } })], R2.prototype, "copyright", void 0), e([y({ type: String, json: { read: false } })], R2.prototype, "sublayerTitleMode", void 0), e([y({ type: String })], R2.prototype, "title", void 0), e([e$1("portal-item", "title")], R2.prototype, "readTitlePortalItem", null), e([e$1("service", "title", ["name"])], R2.prototype, "readTitleService", null), e([y({ type: Number, json: { origins: { service: { read: { source: "id" } }, "portal-item": { write: { target: "id", isRequired: true, ignoreOrigin: true }, read: false } } } })], R2.prototype, "layerId", void 0), e([y(f)], R2.prototype, "url", null), e([o$2("url")], R2.prototype, "writeUrl", null), e([y()], R2.prototype, "parsedUrl", null), e([y({ readOnly: true })], R2.prototype, "store", void 0), e([y({ type: String, readOnly: true, json: { read: { source: "store.rootNode" } } })], R2.prototype, "rootNode", void 0), R2 = e([i$1("esri.layers.mixins.SceneService")], R2), R2;
}, O = -1e38, U = false, E = "Scene Service", T = { getTypeKeywords: () => [], portalItemLayerType: "unknown", validationOptions: { enabled: true, ignoreUnsupported: false, failPolicy: "throw" } };
export { R, i, n$1 as n };
