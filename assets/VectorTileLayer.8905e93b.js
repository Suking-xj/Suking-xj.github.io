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
import { a4 as n, dD as U$1, dK as C, aj as U$2, aa as s$1, bT as y$1, hQ as Q, ee as D$1, hM as n$1, fc as j$1, cr as M, ar as s$2, iD as gt, iE as M$1, ia as et, aq as a, dG as z, iF as ht, iG as w$1, i9 as i, eP as x$1, gR as t$1, gS as s$3, dW as a$1, dX as p$1, dY as l$1, dZ as u, d_ as l$2, e1 as b, ds as e, bC as r$2, ao as b$1, bI as h$2, al as v, ae as e$1, af as y$2, bF as k, c4 as o$3, dQ as e$2, ag as i$1 } from "./vendor.74d5941c.js";
import { r as r$1 } from "./TileIndex.ec5f806e.js";
import { o as o$2 } from "./jsonContext.70bfdc66.js";
import { a as a$2 } from "./StyleRepository.bb6fee73.js";
import "./vec4f32.6de15d07.js";
import "./definitions.6737c10c.js";
function A(A2) {
  const o2 = { lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==", alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==", animation: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA" };
  return new Promise((l2) => {
    const Q2 = new Image();
    Q2.onload = () => {
      Q2.onload = Q2.onerror = null, l2(Q2.width > 0 && Q2.height > 0);
    }, Q2.onerror = () => {
      Q2.onload = Q2.onerror = null, l2(false);
    }, Q2.src = "data:image/webp;base64," + o2[A2];
  });
}
const r = n.getLogger("esri.layers.support.SpriteSource"), h$1 = 1.15;
class o$1 {
  constructor(t2, e2, i2, s2) {
    this.baseURL = t2, this.devicePixelRatio = e2, this.maxTextureSize = i2, this._spriteImageFormat = s2, this._isRetina = false, this._spritesData = {}, this.image = null, this.width = null, this.height = null, this.loadStatus = "not-loaded";
  }
  get spriteNames() {
    const t2 = [];
    for (const e2 in this._spritesData)
      t2.push(e2);
    return t2.sort(), t2;
  }
  getSpriteInfo(t2) {
    return this._spritesData[t2];
  }
  load(t2) {
    return __async(this, null, function* () {
      if (this.baseURL) {
        this.loadStatus = "loading";
        try {
          yield this._loadSprites(t2), this.loadStatus = "loaded";
        } catch (e2) {
          this.loadStatus = "failed";
        }
      } else
        this.loadStatus = "failed";
    });
  }
  _loadSprites(t2) {
    this._isRetina = this.devicePixelRatio > h$1;
    const o2 = U$1(this.baseURL), l2 = o2.query ? "?" + C(o2.query) : "", n2 = this._isRetina ? "@2x" : "", d2 = `${o2.path}${n2}.${this._spriteImageFormat}${l2}`, g2 = `${o2.path}${n2}.json${l2}`;
    return Promise.all([U$2(g2, t2), U$2(d2, __spreadValues({ responseType: "image" }, t2))]).then(([t3, i2]) => {
      const s2 = Object.keys(t3.data);
      if (!s2 || s2.length === 0 || s2.length === 1 && s2[0] === "_ssl" || !i2 || !i2.data)
        return this._spritesData = this.image = null, this.width = this.height = 0, Promise.resolve(null);
      this._spritesData = t3.data;
      const a2 = i2.data, h2 = Math.max(this.maxTextureSize, 4096);
      if (a2.width > h2 || a2.height > h2) {
        const t4 = `Sprite resource for style ${o2.path} is bigger than the maximum allowed of ${h2} pixels}`;
        throw r.error(t4), new s$1("SpriteSource", t4);
      }
      this.width = a2.width, this.height = a2.height;
      const l3 = document.createElement("canvas"), n3 = l3.getContext("2d");
      l3.width = a2.width, l3.height = a2.height, n3.drawImage(a2, 0, 0, a2.width, a2.height);
      const d3 = n3.getImageData(0, 0, a2.width, a2.height), g3 = new Uint8Array(d3.data);
      let m2;
      for (let e2 = 0; e2 < g3.length; e2 += 4)
        m2 = g3[e2 + 3] / 255, g3[e2] = g3[e2] * m2, g3[e2 + 1] = g3[e2 + 1] * m2, g3[e2 + 2] = g3[e2 + 2] * m2;
      this.image = g3;
    });
  }
}
class p {
  constructor(p2, h2, u2) {
    this.tileMapURL = "", this.tilemapCache = null, this.parsedUrl = null, this.tileInfo = null, this.capabilities = null, this.tileIndex = null, this.fullExtent = null, this.name = p2, this.sourceUrl = h2, h2 && (this.parsedUrl = U$1(this.sourceUrl));
    const c = this.parsedUrl.path, m2 = this.parsedUrl.query ? "?" + C(this.parsedUrl.query) : "", f = y$1(u2), d2 = f.tiles;
    h2 && d2.forEach((e2, t2) => {
      Q(e2) || (d2[t2] = D$1(c, e2) + m2);
    }), this.tileServers = d2, u2.tileMap && (this.tileMapURL = D$1(h2, u2.tileMap));
    const x2 = u2.capabilities && u2.capabilities.split(",").map((e2) => e2.toLowerCase().trim()), g2 = !!u2.exportTilesAllowed, y2 = !!x2 && x2.indexOf("tilemap") !== -1, M$12 = g2 && u2.hasOwnProperty("maxExportTilesCount") ? u2.maxExportTilesCount : 0;
    this.capabilities = { operations: { supportsExportTiles: g2, supportsTileMap: y2 }, exportTiles: g2 ? { maxExportTilesCount: +M$12 } : null }, this.tileInfo = n$1(f.tileInfo, f, null, { ignoreMinMaxLOD: true }), y2 && (this.type = "vector-tile", this.tilemapCache = new j$1({ layer: this }), this.tilemapCache && (this.tileIndex = new r$1(this.tilemapCache))), this.fullExtent = M.fromJSON(u2.fullExtent);
  }
  getRefKey(e2, t2) {
    return this.tileIndex ? this.tileIndex.dataKey(e2, t2) : Promise.resolve(e2);
  }
  getSourceTileUrl(e2, t2, i2) {
    let l2 = this.tileServers[t2 % this.tileServers.length];
    return l2 = l2.replace(/\{z\}/gi, e2.toString()).replace(/\{y\}/gi, t2.toString()).replace(/\{x\}/gi, i2.toString()), l2;
  }
  isCompatibleWith(e2) {
    const t2 = this.tileInfo, i2 = e2.tileInfo;
    if (!t2.spatialReference.equals(i2.spatialReference))
      return false;
    if (!t2.origin.equals(i2.origin))
      return false;
    if (Math.round(t2.dpi) !== Math.round(i2.dpi))
      return false;
    const l2 = t2.lods, r2 = i2.lods, s2 = Math.min(l2.length, r2.length);
    for (let o2 = 0; o2 < s2; o2++) {
      const e3 = l2[o2], t3 = r2[o2];
      if (e3.level !== t3.level || Math.round(e3.scale) !== Math.round(t3.scale))
        return false;
    }
    return true;
  }
}
const m = s$2.defaults && s$2.defaults.io.corsEnabledServers;
function y(e2, s2) {
  return __async(this, null, function* () {
    const t2 = { source: null, sourceBase: null, sourceUrl: null, validatedSource: null, style: null, styleBase: null, styleUrl: null, sourceNameToSource: {}, primarySourceName: "", spriteFormat: "png" }, [o2, l2] = typeof e2 == "string" ? [e2, null] : [null, e2.jsonUrl], n2 = o2 ? U$1(o2) : null;
    yield h(t2, "esri", e2, l2, s2);
    const i2 = { layerDefinition: t2.validatedSource, url: o2, parsedUrl: n2, serviceUrl: t2.sourceUrl, style: t2.style, styleUrl: t2.styleUrl, spriteUrl: t2.style.sprite && S(t2.styleBase, t2.style.sprite), spriteFormat: t2.spriteFormat, glyphsUrl: t2.style.glyphs && S(t2.styleBase, t2.style.glyphs), sourceNameToSource: t2.sourceNameToSource, primarySourceName: t2.primarySourceName };
    return d(i2.spriteUrl), d(i2.glyphsUrl), i2;
  });
}
function d(e2) {
  if (!e2)
    return;
  const r2 = M$1(e2);
  m && m.indexOf(r2) === -1 && m.push(r2);
}
function S(...e2) {
  let r2;
  for (let s2 = 0; s2 < e2.length; ++s2)
    if (et(e2[s2])) {
      if (r2) {
        const t2 = r2.split("://")[0];
        r2 = t2 + ":" + e2[s2].trim();
      }
    } else
      r2 = Q(e2[s2]) ? e2[s2] : D$1(r2, e2[s2]);
  return gt(r2);
}
function h(e2, s2, t2, o2, l2) {
  return __async(this, null, function* () {
    let n2, u2, c;
    if (a(l2), typeof t2 == "string") {
      const e3 = z(t2);
      d(e3);
      const s3 = U$1(e3);
      c = yield U$2(s3.path, __spreadValues({ query: { f: "json" }, responseType: "json" }, l2)), n2 = e3, u2 = e3;
    } else
      c = { data: t2 }, n2 = t2.jsonUrl || null, u2 = o2;
    const p2 = c.data;
    return c.ssl && (n2 && (n2 = n2.replace(/^http:/i, "https:")), u2 && (u2 = u2.replace(/^http:/i, "https:"))), U(p2) ? (e2.styleUrl = n2 || null, w(e2, p2, u2, l2)) : x(p2) ? e2.sourceUrl ? g(e2, p2, u2, false, s2, l2) : (e2.sourceUrl = n2 || null, g(e2, p2, u2, true, s2, l2)) : Promise.reject("You must specify the URL or the JSON for a service or for a style.");
  });
}
function U(e2) {
  return !!e2.sources;
}
function x(e2) {
  return !U(e2);
}
function w(e2, r2, s2, t2) {
  return __async(this, null, function* () {
    const o2 = s2 ? ht(s2) : w$1;
    e2.styleBase = o2, e2.style = r2, e2.styleUrl && d(e2.styleUrl), r2["sprite-format"] && r2["sprite-format"].toLowerCase() === "webp" && (e2.spriteFormat = "webp");
    const l2 = [];
    if (r2.sources && r2.sources.esri) {
      const s3 = r2.sources.esri;
      s3.url ? yield h(e2, "esri", S(o2, s3.url), void 0, t2) : l2.push(h(e2, "esri", s3, o2, t2));
    }
    for (const n2 of Object.keys(r2.sources))
      n2 !== "esri" && r2.sources[n2].type === "vector" && (r2.sources[n2].url ? l2.push(h(e2, n2, S(o2, r2.sources[n2].url), void 0, t2)) : r2.sources[n2].tiles && l2.push(h(e2, n2, r2.sources[n2], o2, t2)));
    yield Promise.all(l2);
  });
}
function g(e2, r2, t2, o2, l2, n2) {
  return __async(this, null, function* () {
    const i2 = t2 ? gt(t2) + "/" : w$1, u2 = j(r2, i2), a2 = new p(l2, i2, u2);
    if (!o2 && e2.primarySourceName in e2.sourceNameToSource) {
      const r3 = e2.sourceNameToSource[e2.primarySourceName];
      if (!r3.isCompatibleWith(a2))
        return Promise.resolve();
      a2.fullExtent != null && (r3.fullExtent != null ? r3.fullExtent.union(a2.fullExtent) : r3.fullExtent = a2.fullExtent.clone()), r3.tileInfo.lods.length < a2.tileInfo.lods.length && (r3.tileInfo = a2.tileInfo);
    }
    if (o2 ? (e2.sourceBase = i2, e2.source = r2, e2.validatedSource = u2, e2.primarySourceName = l2, e2.sourceUrl && d(e2.sourceUrl)) : d(i2), e2.sourceNameToSource[l2] = a2, !e2.style)
      return r2.defaultStyles == null ? Promise.reject() : typeof r2.defaultStyles == "string" ? h(e2, "", S(i2, r2.defaultStyles, "root.json"), void 0, n2) : h(e2, "", r2.defaultStyles, S(i2, "root.json"), n2);
  });
}
function j(e2, r2) {
  if (e2.hasOwnProperty("tileInfo"))
    return e2;
  const s2 = { xmin: -20037507067161843e-9, ymin: -20037507067161843e-9, xmax: 20037507067161843e-9, ymax: 20037507067161843e-9, spatialReference: { wkid: 102100 } }, t2 = 512;
  let o2 = 78271.51696400007, l2 = 2958287637957775e-7;
  const n2 = [], i2 = e2.hasOwnProperty("minzoom") ? parseFloat(e2.minzoom) : 0, u2 = e2.hasOwnProperty("maxzoom") ? parseFloat(e2.maxzoom) : 22;
  for (let c = 0; c <= u2; c++)
    c >= i2 && n2.push({ level: c, scale: l2, resolution: o2 }), o2 /= 2, l2 /= 2;
  for (const c of e2.tiles)
    d(S(r2, c));
  return { capabilities: "TilesOnly", initialExtent: s2, fullExtent: s2, minScale: 0, maxScale: 0, tiles: e2.tiles, tileInfo: { rows: t2, cols: t2, dpi: 96, format: "pbf", origin: { x: -20037508342787e-6, y: 20037508342787e-6 }, lods: n2, spatialReference: { wkid: 102100 } } };
}
class t {
  constructor(e2, i2) {
    this.lockedSchemaPixelSize = e2, this.isGCS = i2;
  }
  getLevelRowColumn(e2) {
    return this.isGCS ? [e2[0], e2[1] >> 1, e2[2] >> 1] : this.lockedSchemaPixelSize === 256 && e2[0] > 0 ? [e2[0] - 1, e2[1] >> 1, e2[2] >> 1] : e2;
  }
  adjustLevel(e2) {
    return this.isGCS ? e2 : this.lockedSchemaPixelSize === 256 ? e2 > 0 ? e2 - 1 : 0 : e2;
  }
  getShift(e2, i2) {
    let t2 = 0, s2 = 0;
    return (this.lockedSchemaPixelSize === 256 || this.isGCS) && (e2[2] % 2 && (t2 = i2), e2[1] % 2 && (s2 = i2)), [t2, s2];
  }
  getScale(e2) {
    if (this.isGCS) {
      if (this.lockedSchemaPixelSize === 512)
        return 4;
    } else if (this.lockedSchemaPixelSize === 256 && e2 === 0)
      return 1;
    return 2;
  }
  static create256x256CompatibleTileInfo(t2) {
    if (!t2)
      return null;
    if (t2.size[0] === 256 && t2.size[1] === 256)
      return t2;
    const s2 = 256, l2 = t2.spatialReference.isGeographic, r2 = [], o2 = t2.lods.length;
    for (let i$12 = 0; i$12 < o2; i$12++) {
      const s3 = t2.lods[i$12], o3 = l2 ? s3.resolution : 2 * s3.resolution;
      r2.push(new i({ level: s3.level, scale: s3.scale, resolution: o3 }));
    }
    return new x$1({ size: [s2, s2], dpi: t2.dpi, format: t2.format, compressionQuality: t2.compressionQuality, origin: t2.origin, spatialReference: t2.spatialReference, lods: r2 });
  }
  static create512x512CompatibleTileInfo(t2) {
    if (!t2)
      return null;
    if (t2.size[0] === 256 || t2.size[1] === 256)
      return null;
    const s2 = 512, l2 = [], r2 = t2.lods.length;
    for (let i$12 = 0; i$12 < r2; i$12++) {
      const s3 = t2.lods[i$12], r3 = 0.5 * s3.resolution;
      l2.push(new i({ level: s3.level, scale: s3.scale, resolution: r3 }));
    }
    return new x$1({ size: [s2, s2], dpi: t2.dpi, format: t2.format, compressionQuality: t2.compressionQuality, origin: t2.origin, spatialReference: t2.spatialReference, lods: l2 });
  }
}
const l = 1e-6;
function s(e2, s2) {
  if (e2 === s2)
    return true;
  if (!e2 && s2 != null)
    return false;
  if (e2 != null && !s2)
    return false;
  if (!e2.spatialReference.equals(s2.spatialReference) || e2.dpi !== s2.dpi)
    return false;
  const o2 = e2.origin, r2 = s2.origin;
  if (Math.abs(o2.x - r2.x) >= l || Math.abs(o2.y - r2.y) >= l)
    return false;
  let n2, t2;
  e2.lods[0].scale > s2.lods[0].scale ? (n2 = e2, t2 = s2) : (t2 = e2, n2 = s2);
  for (let i2 = n2.lods[0].scale; i2 >= t2.lods[t2.lods.length - 1].scale - l; i2 /= 2)
    if (Math.abs(i2 - t2.lods[0].scale) < l)
      return true;
  return false;
}
function o(l2, s2) {
  if (l2 === s2)
    return l2;
  if (!l2 && s2 != null)
    return s2;
  if (l2 != null && !s2)
    return l2;
  const o2 = l2.size[0], r2 = l2.format, n2 = l2.dpi, t2 = { x: l2.origin.x, y: l2.origin.y }, i2 = l2.spatialReference.toJSON(), a2 = l2.lods[0].scale > s2.lods[0].scale ? l2.lods[0] : s2.lods[0], d2 = l2.lods[l2.lods.length - 1].scale <= s2.lods[s2.lods.length - 1].scale ? l2.lods[l2.lods.length - 1] : s2.lods[s2.lods.length - 1], f = a2.scale, u2 = a2.resolution, c = d2.scale, p2 = [];
  let g2 = f, h2 = u2, x2 = 0;
  for (; g2 > c; )
    p2.push({ level: x2, resolution: h2, scale: g2 }), x2++, g2 /= 2, h2 /= 2;
  return new x$1({ size: [o2, o2], dpi: n2, format: r2 || "pbf", origin: t2, lods: p2, spatialReference: i2 });
}
let D = class extends t$1(s$3(a$1(p$1(l$1(u(l$2(b))))))) {
  constructor(...e2) {
    super(...e2), this._spriteSourceMap = new Map(), this.currentStyleInfo = null, this.style = null, this.isReference = null, this.operationalLayerType = "VectorTileLayer", this.type = "vector-tile", this.url = null;
  }
  normalizeCtorArgs(e2, t2) {
    return typeof e2 == "string" ? __spreadValues({ url: e2 }, t2) : e2;
  }
  destroy() {
    this._spriteSourceMap.clear();
  }
  prefetchResources(e$12) {
    return __async(this, null, function* () {
      yield this.loadSpriteSource(e.devicePixelRatio || 1, e$12);
    });
  }
  load(e2) {
    const t2 = this.loadFromPortal({ supportedTypes: ["Vector Tile Service"], supportsData: false }, e2).then(() => __async(this, null, function* () {
      if (!this.portalItem || !this.portalItem.id)
        return;
      const t3 = `${this.portalItem.itemUrl}/resources/styles/root.json`;
      (yield U$2(t3, __spreadProps(__spreadValues({}, e2), { query: { f: "json" } }))).data && this.read({ url: t3 }, o$2(this.portalItem));
    })).then(() => this._loadStyle(e2), () => this._loadStyle(e2));
    return this.addResolvingPromise(t2), Promise.resolve(this);
  }
  get attributionDataUrl() {
    const e2 = this.currentStyleInfo, t2 = e2 && e2.serviceUrl && U$1(e2.serviceUrl);
    return t2 ? this._getDefaultAttribution(t2.path) : null;
  }
  get capabilities() {
    const e2 = this._getPrimarySource();
    return e2 ? e2.capabilities : { operations: { supportsExportTiles: false, supportsTileMap: false }, exportTiles: null };
  }
  get fullExtent() {
    const e2 = this._getPrimarySource();
    return e2 ? e2.fullExtent : null;
  }
  get parsedUrl() {
    return this.serviceUrl ? U$1(this.serviceUrl) : null;
  }
  get serviceUrl() {
    return this.currentStyleInfo && this.currentStyleInfo.serviceUrl || null;
  }
  get spatialReference() {
    return this.tileInfo && this.tileInfo.spatialReference || null;
  }
  get styleUrl() {
    return this.currentStyleInfo && this.currentStyleInfo.styleUrl || null;
  }
  writeStyleUrl(e2, t2) {
    e2 && et(e2) && (e2 = `https:${e2}`), t2.styleUrl = e2;
  }
  get tileIndexType() {
    const e2 = this._getPrimarySource();
    return e2 ? e2.type : "";
  }
  get tileIndexUrl() {
    const e2 = this._getPrimarySource();
    return e2 ? e2.tileMapURL : "";
  }
  get tileInfo() {
    var e2;
    const t2 = [];
    for (const o2 in this.sourceNameToSource)
      t2.push(this.sourceNameToSource[o2]);
    let r2 = ((e2 = this._getPrimarySource()) == null ? void 0 : e2.tileInfo) || new x$1();
    if (t2.length > 1)
      for (let o$12 = 0; o$12 < t2.length; o$12++)
        s(r2, t2[o$12].tileInfo) && (r2 = o(r2, t2[o$12].tileInfo));
    return r2;
  }
  get tilemapCache() {
    const e2 = this._getPrimarySource();
    return e2 && e2.capabilities.operations.supportsTileMap ? e2.tilemapCache : null;
  }
  get tileServers() {
    const e2 = this._getPrimarySource();
    return e2 ? e2.tileServers : [];
  }
  readVersion(e2, t2) {
    return t2.version ? parseFloat(t2.version) : parseFloat(t2.currentVersion);
  }
  get compatibleTileInfo256() {
    return t.create256x256CompatibleTileInfo(this.tileInfo);
  }
  get compatibleTileInfo512() {
    return t.create512x512CompatibleTileInfo(this.tileInfo);
  }
  loadSpriteSource(e2 = 1, t2) {
    return __async(this, null, function* () {
      if (!this._spriteSourceMap.has(e2)) {
        const r2 = r$2(), o2 = new o$1(this.styleRepository.sprite, e2, r2.maxTextureSize, this.currentStyleInfo.spriteFormat);
        yield o2.load(t2), this._spriteSourceMap.set(e2, o2);
      }
      return Promise.resolve(this._spriteSourceMap.get(e2));
    });
  }
  loadStyle(e2, t2) {
    return __async(this, null, function* () {
      const r2 = e2 || this.style || this.url;
      if (this._loadingPromise && typeof r2 == "string" && this.url === r2 && !b$1(this._abortController))
        return this._loadingPromise;
      const o2 = this._abortController;
      o2 && o2.abort();
      const i2 = h$2();
      return this._loadingPromise = new Promise((e3, o3) => {
        const s2 = { signal: i2.signal };
        this._spriteSourceMap.clear(), this._getSourceAndStyle(r2, s2).then(e3, o3), v(t2, () => {
          i2.abort();
        });
      }), this._abortController = i2, this._loadingPromise;
    });
  }
  getStyleLayerId(e2) {
    return this.styleRepository.getStyleLayerId(e2);
  }
  getStyleLayerIndex(e2) {
    return this.styleRepository.getStyleLayerIndex(e2);
  }
  getPaintProperties(e2) {
    return y$1(this.styleRepository.getPaintProperties(e2));
  }
  setPaintProperties(e2, t2) {
    const r2 = this.styleRepository.isPainterDataDriven(e2);
    this.styleRepository.setPaintProperties(e2, t2);
    const o2 = this.styleRepository.isPainterDataDriven(e2);
    this.emit("paint-change", { layerName: e2, paint: t2, isDataDriven: r2 || o2 });
  }
  getStyleLayer(e2) {
    return y$1(this.styleRepository.getStyleLayer(e2));
  }
  setStyleLayer(e2, t2) {
    this.styleRepository.setStyleLayer(e2, t2), this.emit("style-layer-change", { layer: e2, index: t2 });
  }
  deleteStyleLayer(e2) {
    this.styleRepository.deleteStyleLayer(e2), this.emit("delete-style-layer", { layerName: e2 });
  }
  getLayoutProperties(e2) {
    return y$1(this.styleRepository.getLayoutProperties(e2));
  }
  setLayoutProperties(e2, t2) {
    this.styleRepository.setLayoutProperties(e2, t2), this.emit("layout-change", { layer: e2, layout: t2 });
  }
  setStyleLayerVisibility(e2, t2) {
    this.styleRepository.setStyleLayerVisibility(e2, t2), this.emit("style-layer-visibility-change", { layer: e2, visibility: t2 });
  }
  getStyleLayerVisibility(e2) {
    return this.styleRepository.getStyleLayerVisibility(e2);
  }
  getTileUrl(e2, t2, r2) {
    let o2 = this.tileServers[t2 % this.tileServers.length];
    return o2 = o2.replace(/\{z\}/gi, e2.toString()).replace(/\{y\}/gi, t2.toString()).replace(/\{x\}/gi, r2.toString()), o2;
  }
  write(e2, t2) {
    return t2 && t2.origin && !this.styleUrl ? (t2.messages && t2.messages.push(new s$1("vectortilelayer:unsupported", `VectorTileLayer (${this.title}, ${this.id}) with style defined by JSON only are not supported`, { layer: this })), null) : super.write(e2, t2);
  }
  _getSourceAndStyle(e2, t2) {
    return __async(this, null, function* () {
      if (!e2)
        throw new Error("invalid style!");
      const r2 = yield y(e2, t2);
      if (r2.spriteFormat === "webp") {
        (yield A("lossy")) || (r2.spriteFormat = "png");
      }
      this._set("currentStyleInfo", __spreadValues({}, r2)), typeof e2 == "string" ? (this.url = e2, this.style = null) : (this.url = null, this.style = e2), this._set("sourceNameToSource", r2.sourceNameToSource), this._set("primarySourceName", r2.primarySourceName), this._set("styleRepository", new a$2(r2.style, r2)), this.read(r2.layerDefinition, { origin: "service" }), this.emit("load-style", {});
    });
  }
  _getDefaultAttribution(e2) {
    const t2 = e2.match(/^https?:\/\/(?:basemaps|basemapsbeta|basemapsdev)(?:-api)?\.arcgis\.com(\/[^\/]+)?\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/vectortileserver/i), r2 = ["OpenStreetMap_v2", "OpenStreetMap_Daylight_v2", "OpenStreetMap_Export_v2", "OpenStreetMap_FTS_v2", "OpenStreetMap_GCS_v2", "World_Basemap", "World_Basemap_v2", "World_Basemap_Export_v2", "World_Basemap_GCS_v2", "World_Basemap_WGS84", "World_Contours_v2"];
    if (!t2)
      return;
    const o2 = t2[2] && t2[2].toLowerCase();
    if (!o2)
      return;
    const i2 = t2[1] || "";
    for (const s2 of r2)
      if (s2.toLowerCase().indexOf(o2) > -1)
        return z(`//static.arcgis.com/attribution/Vector${i2}/${s2}`);
  }
  _getPrimarySource() {
    return this.sourceNameToSource && this.primarySourceName in this.sourceNameToSource ? this.sourceNameToSource[this.primarySourceName] : null;
  }
  _loadStyle(e2) {
    return __async(this, null, function* () {
      return this._loadingPromise ? this._loadingPromise : this.loadStyle(null, e2);
    });
  }
};
e$1([y$2({ readOnly: true })], D.prototype, "attributionDataUrl", null), e$1([y$2({ type: ["show", "hide"] })], D.prototype, "listMode", void 0), e$1([y$2({ readOnly: true, dependsOn: ["sourceNameToSource", "primarySourceName"], json: { read: false } })], D.prototype, "capabilities", null), e$1([y$2({ readOnly: true })], D.prototype, "currentStyleInfo", void 0), e$1([y$2({ json: { read: false }, readOnly: true, type: M })], D.prototype, "fullExtent", null), e$1([y$2()], D.prototype, "style", void 0), e$1([y$2({ type: Boolean, json: { read: false, write: { enabled: true, overridePolicy: () => ({ enabled: false }) } } })], D.prototype, "isReference", void 0), e$1([y$2({ type: ["VectorTileLayer"] })], D.prototype, "operationalLayerType", void 0), e$1([y$2({ readOnly: true })], D.prototype, "parsedUrl", null), e$1([y$2({ readOnly: true })], D.prototype, "serviceUrl", null), e$1([y$2({ type: k, readOnly: true })], D.prototype, "spatialReference", null), e$1([y$2({ readOnly: true })], D.prototype, "styleRepository", void 0), e$1([y$2({ readOnly: true })], D.prototype, "sourceNameToSource", void 0), e$1([y$2({ readOnly: true })], D.prototype, "primarySourceName", void 0), e$1([y$2({ type: String, readOnly: true, json: { write: { ignoreOrigin: true }, origins: { "web-document": { write: { ignoreOrigin: true, isRequired: true } } } } })], D.prototype, "styleUrl", null), e$1([o$3(["portal-item", "web-document"], "styleUrl")], D.prototype, "writeStyleUrl", null), e$1([y$2({ json: { read: false }, readOnly: true })], D.prototype, "tileIndexType", null), e$1([y$2({ json: { read: false }, readOnly: true })], D.prototype, "tileIndexUrl", null), e$1([y$2({ json: { read: false, origins: { service: { read: false } } }, readOnly: true, type: x$1 })], D.prototype, "tileInfo", null), e$1([y$2({ json: { read: false }, readOnly: true, type: j$1 })], D.prototype, "tilemapCache", null), e$1([y$2({ json: { read: false }, readOnly: true })], D.prototype, "tileServers", null), e$1([y$2({ json: { read: false }, readOnly: true, value: "vector-tile" })], D.prototype, "type", void 0), e$1([y$2({ json: { origins: { "web-document": { read: { source: "styleUrl" } }, "portal-item": { read: { source: "url" } } }, write: false, read: false } })], D.prototype, "url", void 0), e$1([y$2({ readOnly: true })], D.prototype, "version", void 0), e$1([e$2("version", ["version", "currentVersion"])], D.prototype, "readVersion", null), e$1([y$2({ readOnly: true })], D.prototype, "compatibleTileInfo256", null), e$1([y$2({ readOnly: true })], D.prototype, "compatibleTileInfo512", null), D = e$1([i$1("esri.layers.VectorTileLayer")], D);
var E = D;
export default E;
