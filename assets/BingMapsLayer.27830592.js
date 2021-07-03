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
import { gR as t, gS as s, gT as o, e1 as b$1, eP as x, bF as k, cr as M, b6 as i, aj as U, aa as s$1, ae as e, af as y$2, ag as i$1, c9 as t$1, dY as l, d_ as l$1, a5 as r, a0 as t$2 } from "./vendor.74d5941c.js";
const f = { id: "0/0/0", level: 0, row: 0, col: 0, extent: null };
let y$1 = class extends t(s(o(b$1))) {
  constructor() {
    super(...arguments), this.tileInfo = x.create({ spatialReference: k.WebMercator, size: 256 }), this.type = "base-tile", this.fullExtent = new M(-20037508342787e-6, -2003750834278e-5, 2003750834278e-5, 20037508342787e-6, k.WebMercator), this.spatialReference = k.WebMercator;
  }
  getTileBounds(e2, t2, r2, o2) {
    const s2 = o2 || i();
    return f.level = e2, f.row = t2, f.col = r2, f.extent = s2, this.tileInfo.updateTileInfo(f), f.extent = null, s2;
  }
  fetchTile(e2, t2, r2, o2 = {}) {
    const { signal: s2, timestamp: i2 } = o2, l2 = this.getTileUrl(e2, t2, r2), a = { responseType: "image", signal: s2 };
    return i2 != null && (a.query = { _ts: o2.timestamp }), U(l2, a).then((e3) => e3.data);
  }
  getTileUrl() {
    throw new s$1("basetilelayer:gettileurl-not-implemented", "getTileUrl() is not implemented");
  }
};
e([y$2({ type: x })], y$1.prototype, "tileInfo", void 0), e([y$2({ type: ["show", "hide"] })], y$1.prototype, "listMode", void 0), e([y$2({ readOnly: true, value: "base-tile" })], y$1.prototype, "type", void 0), e([y$2()], y$1.prototype, "fullExtent", void 0), e([y$2()], y$1.prototype, "spatialReference", void 0), y$1 = e([i$1("esri.layers.BaseTileLayer")], y$1);
var d = y$1;
const y = new t$1({ BingMapsAerial: "aerial", BingMapsRoad: "road", BingMapsHybrid: "hybrid" }), m = "https://dev.virtualearth.net";
let h = class extends t(l(l$1(d))) {
  constructor(e2) {
    super(e2), this.type = "bing-maps", this.tileInfo = new x({ size: [256, 256], dpi: 96, origin: { x: -20037508342787e-6, y: 20037508342787e-6, spatialReference: k.WebMercator }, spatialReference: k.WebMercator, lods: [{ level: 1, resolution: 78271.5169639999, scale: 295828763795777e-6 }, { level: 2, resolution: 39135.7584820001, scale: 147914381897889e-6 }, { level: 3, resolution: 19567.8792409999, scale: 73957190948944e-6 }, { level: 4, resolution: 9783.93962049996, scale: 36978595474472e-6 }, { level: 5, resolution: 4891.96981024998, scale: 18489297737236e-6 }, { level: 6, resolution: 2445.98490512499, scale: 9244648868618e-6 }, { level: 7, resolution: 1222.99245256249, scale: 4622324434309e-6 }, { level: 8, resolution: 611.49622628138, scale: 2311162217155e-6 }, { level: 9, resolution: 305.748113140558, scale: 1155581108577e-6 }, { level: 10, resolution: 152.874056570411, scale: 577790.554289 }, { level: 11, resolution: 76.4370282850732, scale: 288895.277144 }, { level: 12, resolution: 38.2185141425366, scale: 144447.638572 }, { level: 13, resolution: 19.1092570712683, scale: 72223.819286 }, { level: 14, resolution: 9.55462853563415, scale: 36111.909643 }, { level: 15, resolution: 4.77731426794937, scale: 18055.954822 }, { level: 16, resolution: 2.38865713397468, scale: 9027.977411 }, { level: 17, resolution: 1.19432856685505, scale: 4513.988705 }, { level: 18, resolution: 0.597164283559817, scale: 2256.994353 }, { level: 19, resolution: 0.298582141647617, scale: 1128.497176 }, { level: 20, resolution: 0.1492910708238085, scale: 564.248588 }] }), this.key = null, this.style = "road", this.culture = "en-US", this.region = null, this.portalUrl = null, this.hasAttributionData = true;
  }
  get bingMetadata() {
    return this._get("bingMetadata");
  }
  set bingMetadata(e2) {
    this._set("bingMetadata", e2);
  }
  get copyright() {
    return r(this.bingMetadata) ? this.bingMetadata.copyright : null;
  }
  get operationalLayerType() {
    return y.toJSON(this.style);
  }
  get bingLogo() {
    return r(this.bingMetadata) ? this.bingMetadata.brandLogoUri : null;
  }
  load(e2) {
    return this.key ? this.addResolvingPromise(this._getMetadata()) : this.portalUrl ? this.addResolvingPromise(this._getPortalBingKey().then(() => this._getMetadata())) : this.addResolvingPromise(Promise.reject(new s$1("bingmapslayer:load", "Bing layer must have bing key."))), Promise.resolve(this);
  }
  getTileUrl(e2, t2, o2) {
    if (!this.loaded || t$2(this.bingMetadata))
      return null;
    const a = this.bingMetadata.resourceSets[0].resources[0], s2 = a.imageUrlSubdomains[t2 % a.imageUrlSubdomains.length], i2 = this._getQuadKey(e2, t2, o2);
    return a.imageUrl.replace("{subdomain}", s2).replace("{quadkey}", i2);
  }
  fetchAttributionData() {
    return __async(this, null, function* () {
      return this.load().then(() => {
        if (t$2(this.bingMetadata))
          return null;
        return { contributors: this.bingMetadata.resourceSets[0].resources[0].imageryProviders.map((e2) => ({ attribution: e2.attribution, coverageAreas: e2.coverageAreas.map((e3) => ({ zoomMin: e3.zoomMin, zoomMax: e3.zoomMax, score: 1, bbox: [e3.bbox[0], e3.bbox[1], e3.bbox[2], e3.bbox[3]] })) })) };
      });
    });
  }
  _getMetadata() {
    const e2 = { road: "roadOnDemand", aerial: "aerial", hybrid: "aerialWithLabelsOnDemand" }[this.style];
    return U(`${m}/REST/v1/Imagery/Metadata/${e2}`, { responseType: "json", query: { include: "ImageryProviders", uriScheme: "https", key: this.key, suppressStatus: true, output: "json", culture: this.culture, userRegion: this.region } }).then((e3) => {
      const t2 = e3.data;
      if (t2.statusCode !== 200)
        throw new s$1("bingmapslayer:getmetadata", t2.statusDescription);
      if (this.bingMetadata = t2, this.bingMetadata.resourceSets.length === 0)
        throw new s$1("bingmapslayer:getmetadata", "no bing resourcesets");
      if (this.bingMetadata.resourceSets[0].resources.length === 0)
        throw new s$1("bingmapslayer:getmetadata", "no bing resources");
    }).catch((e3) => {
      throw new s$1("bingmapslayer:getmetadata", e3.message);
    });
  }
  _getPortalBingKey() {
    return U(this.portalUrl, { responseType: "json", authMode: "no-prompt", query: { f: "json" } }).then((e2) => {
      if (!e2.data.bingKey)
        throw new s$1("bingmapslayer:getportalbingkey", "The referenced Portal does not contain a valid bing key");
      this.key = e2.data.bingKey;
    }).catch((e2) => {
      throw new s$1("bingmapslayer:getportalbingkey", e2.message);
    });
  }
  _getQuadKey(e2, t2, r2) {
    let o2 = "";
    for (let a = e2; a > 0; a--) {
      let e3 = 0;
      const s2 = 1 << a - 1;
      (r2 & s2) != 0 && (e3 += 1), (t2 & s2) != 0 && (e3 += 2), o2 += e3.toString();
    }
    return o2;
  }
};
e([y$2({ json: { read: false, write: false }, value: null })], h.prototype, "bingMetadata", null), e([y$2({ json: { read: false, write: false }, value: "bing-maps", readOnly: true })], h.prototype, "type", void 0), e([y$2({ type: x })], h.prototype, "tileInfo", void 0), e([y$2({ type: String, readOnly: true, json: { read: false, write: false } })], h.prototype, "copyright", null), e([y$2({ type: String, json: { write: false, read: false } })], h.prototype, "key", void 0), e([y$2({ type: y.apiValues, nonNullable: true, json: { read: { source: "layerType", reader: y.read } } })], h.prototype, "style", void 0), e([y$2({ type: ["BingMapsAerial", "BingMapsHybrid", "BingMapsRoad"] })], h.prototype, "operationalLayerType", null), e([y$2({ type: String, json: { write: false, read: false } })], h.prototype, "culture", void 0), e([y$2({ type: String, json: { write: false, read: false } })], h.prototype, "region", void 0), e([y$2({ type: String, json: { write: true, read: true } })], h.prototype, "portalUrl", void 0), e([y$2({ type: Boolean, json: { write: false, read: false } })], h.prototype, "hasAttributionData", void 0), e([y$2({ type: String, readOnly: true })], h.prototype, "bingLogo", null), h = e([i$1("esri.layers.BingMapsLayer")], h);
var b = h;
export default b;
