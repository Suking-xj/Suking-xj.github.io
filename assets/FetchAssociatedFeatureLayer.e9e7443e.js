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
import { a0 as t, a5 as r, aj as U, dB as s$1, dl as w, v as ke, dc as b, dP as w$1 } from "./vendor.74d5941c.js";
const s = { attachment: { supportsContentType: false, supportsExifInfo: false, supportsKeywords: false, supportsName: false, supportsSize: false }, data: { isVersioned: false, supportsAttachment: false, supportsM: false, supportsZ: false }, editing: { supportsDeleteByAnonymous: false, supportsDeleteByOthers: false, supportsGeometryUpdate: false, supportsGlobalId: false, supportsRollbackOnFailure: false, supportsUpdateByAnonymous: false, supportsUpdateByOthers: false, supportsUpdateWithoutM: false, supportsUploadWithItemId: false }, metadata: { supportsAdvancedFieldProperties: false }, operations: { supportsCalculate: false, supportsTruncate: false, supportsValidateSql: false, supportsAdd: false, supportsDelete: false, supportsEditing: false, supportsChangeTracking: false, supportsQuery: false, supportsQueryAttachments: false, supportsResizeAttachments: false, supportsSync: false, supportsUpdate: false, supportsExceedsLimitStatistics: false }, queryRelated: { supportsCount: false, supportsOrderBy: false, supportsPagination: false }, query: { maxRecordCount: 0, maxRecordCountFactor: 0, standardMaxRecordCount: 0, supportsCacheHint: false, supportsCentroid: false, supportsDisjointSpatialRelationship: false, supportsDistance: false, supportsDistinct: false, supportsExtent: false, supportsFormatPBF: false, supportsGeometryProperties: false, supportsHavingClause: false, supportsHistoricMoment: false, supportsMaxRecordCountFactor: false, supportsOrderBy: false, supportsPagination: false, supportsPercentileStatistics: false, supportsQuantization: false, supportsQuantizationEditMode: false, supportsQueryByOthers: false, supportsQueryGeometry: false, supportsResultType: false, supportsSqlExpression: false, supportsStandardizedQueriesOnly: false, supportsStatistics: false, tileMaxRecordCount: 0 } };
class l {
  constructor(t2, r2, e) {
    this.parsedUrl = t2, this.portalItem = r2, this.signal = e, this.rootDocument = null;
    const a = this.parsedUrl.path.match(/^(.*)\/SceneServer\/layers\/([\d]*)\/?$/i);
    a && (this.urlParts = { root: a[1], layerId: parseInt(a[2], 10) });
  }
  fetch() {
    return __async(this, null, function* () {
      var r2;
      if (!this.urlParts)
        return null;
      const e = (r2 = this.portalItem) != null ? r2 : yield this.portalItemFromServiceItemId();
      if (t(e))
        return this.loadFromUrl();
      const a = yield this.findAndLoadRelatedPortalItem(e);
      return t(a) ? null : this.loadFeatureLayerFromPortalItem(a);
    });
  }
  fetchPortalItem() {
    return __async(this, null, function* () {
      var r2;
      if (!this.urlParts)
        return null;
      const e = (r2 = this.portalItem) != null ? r2 : yield this.portalItemFromServiceItemId();
      return t(e) ? null : this.findAndLoadRelatedPortalItem(e);
    });
  }
  fetchRootDocument() {
    return __async(this, null, function* () {
      if (r(this.rootDocument))
        return this.rootDocument;
      if (t(this.urlParts))
        return this.rootDocument = {}, {};
      const e = { query: { f: "json" }, responseType: "json", signal: this.signal }, a = `${this.urlParts.root}/SceneServer`;
      try {
        const t2 = yield U(a, e);
        this.rootDocument = t2.data;
      } catch (e2) {
        this.rootDocument = {};
      }
      return this.rootDocument;
    });
  }
  fetchServiceOwningPortalUrl() {
    return __async(this, null, function* () {
      var t2;
      const r2 = (t2 = s$1) == null ? void 0 : t2.findServerInfo(this.parsedUrl.path);
      if (r2 != null && r2.owningSystemUrl)
        return r2.owningSystemUrl;
      const n = this.parsedUrl.path.replace(/(.*\/rest)\/.*/i, "$1") + "/info";
      try {
        const t3 = (yield U(n, { query: { f: "json" }, responseType: "json", signal: this.signal })).data.owningSystemUrl;
        if (t3)
          return t3;
      } catch (o) {
        w(o);
      }
      return null;
    });
  }
  findAndLoadRelatedPortalItem(t2) {
    return __async(this, null, function* () {
      try {
        return (yield t2.fetchRelatedItems({ relationshipType: "Service2Service", direction: "reverse" }, { signal: this.signal })).find((t3) => t3.type === "Feature Service") || null;
      } catch (r2) {
        return w(r2), null;
      }
    });
  }
  loadFeatureLayerFromPortalItem(t2) {
    return __async(this, null, function* () {
      yield t2.load({ signal: this.signal });
      const r2 = yield this.findMatchingAssociatedSublayerUrl(t2.url);
      return new ke({ url: r2, portalItem: t2 }).load({ signal: this.signal });
    });
  }
  loadFromUrl() {
    return __async(this, null, function* () {
      const t2 = yield this.findMatchingAssociatedSublayerUrl(`${this.urlParts.root}/FeatureServer`);
      return new ke({ url: t2 }).load({ signal: this.signal });
    });
  }
  findMatchingAssociatedSublayerUrl(t2) {
    return __async(this, null, function* () {
      const r2 = t2.replace(/^(.*FeatureServer)(\/[\d]*\/?)?$/i, "$1"), e = { query: { f: "json" }, responseType: "json", authMode: "no-prompt", signal: this.signal }, a = this.urlParts.layerId, n = this.fetchRootDocument(), o = U(r2, e), [i, l2] = yield Promise.all([o, n]), c = l2 && l2.layers, u = i.data && i.data.layers;
      if (!Array.isArray(u))
        throw new Error("expected layers array");
      if (Array.isArray(c))
        for (let s2 = 0; s2 < Math.min(c.length, u.length); s2++) {
          if (c[s2].id === a)
            return `${r2}/${u[s2].id}`;
        }
      else if (a < u.length)
        return `${r2}/${u[a].id}`;
      throw new Error("could not find matching associated sublayer");
    });
  }
  portalItemFromServiceItemId() {
    return __async(this, null, function* () {
      const t2 = (yield this.fetchRootDocument()).serviceItemId;
      if (!t2)
        return null;
      const a = new b({ id: t2 }), s2 = yield this.fetchServiceOwningPortalUrl();
      r(s2) && (a.portal = new w$1({ url: s2 }));
      try {
        return a.load({ signal: this.signal });
      } catch (i) {
        return w(i), null;
      }
    });
  }
}
export { l, s };
