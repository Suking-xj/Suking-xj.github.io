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
import { a9 as u, bi as d$1, aq as a, cf as n$1, aj as U, gL as e$1, gM as c, cO as c$1, gN as m, gO as r$1, bc as y, bd as f, gP as n$2, gQ as i$2, e8 as e$2 } from "./vendor.74d5941c.js";
import { k, T } from "./cimAnalyzer.0b895c7f.js";
import { o as o$2 } from "./Rasterizer.86fb2371.js";
import "./CIMSymbolHelper.6546a069.js";
function e(t) {
  return `rgb(${t.slice(0, 3).toString()})`;
}
function i$1(t) {
  return `rgba(${t.slice(0, 3).toString()},${t[3]})`;
}
class r {
  constructor() {
  }
  rasterizeText(t, r2) {
    this._textRasterizationCanvas || (this._textRasterizationCanvas = document.createElement("canvas"));
    const o2 = this._textRasterizationCanvas, n2 = o2.getContext("2d");
    this.setFontProperties(n2, r2), this.parameters = r2, this.textLines = t.split(/\r?\n/), this.lineHeight = this.computeLineHeight();
    const a2 = this.computeTextWidth(n2, r2), h = this.lineHeight * this.textLines.length;
    o2.width = a2, o2.height = h, this.renderedLineHeight = Math.round(this.lineHeight * r2.pixelRatio), this.renderedHaloSize = r2.halo.size * r2.pixelRatio, this.renderedWidth = a2 * r2.pixelRatio, this.renderedHeight = h * r2.pixelRatio, this.fillStyle = i$1(r2.color), this.haloStyle = e(r2.halo.color);
    const l = this.renderedLineHeight, d2 = this.renderedHaloSize;
    this.setFontProperties(n2, r2);
    const c2 = s(n2.textAlign, this.renderedWidth) + d2, g = d2;
    let f2 = 0, p2 = 0;
    d2 > 0 && this.renderHalo(n2, c2, g, f2, p2, r2), p2 += g, f2 += c2;
    for (const e2 of this.textLines)
      n2.globalCompositeOperation = "destination-out", n2.fillStyle = "rgb(0, 0, 0)", n2.fillText(e2, f2, p2), n2.globalCompositeOperation = "source-over", n2.fillStyle = this.fillStyle, n2.fillText(e2, f2, p2), p2 += l;
    const u2 = n2.getImageData(0, 0, this.renderedWidth, this.renderedHeight), x = new Uint8Array(u2.data);
    if (r2.premultiplyColors) {
      let t2;
      for (let e2 = 0; e2 < x.length; e2 += 4)
        t2 = x[e2 + 3] / 255, x[e2] = x[e2] * t2, x[e2 + 1] = x[e2 + 1] * t2, x[e2 + 2] = x[e2 + 2] * t2;
    }
    return { size: [this.renderedWidth, this.renderedHeight], image: new Uint32Array(x.buffer), sdf: false, simplePattern: false, anchorX: 0, anchorY: 0 };
  }
  renderHalo(t, e2, i2, r2, s2, o2) {
    const n2 = this.renderedWidth, a2 = this.renderedHeight;
    this._haloRasterizationCanvas || (this._haloRasterizationCanvas = document.createElement("canvas")), this._haloRasterizationCanvas.width = n2, this._haloRasterizationCanvas.height = a2;
    const h = this._haloRasterizationCanvas, l = h.getContext("2d");
    l.clearRect(0, 0, n2, a2), this.setFontProperties(l, o2), l.fillStyle = this.haloStyle, l.strokeStyle = this.haloStyle;
    const d2 = this.renderedHaloSize < 3;
    l.lineJoin = d2 ? "miter" : "round", d2 ? this.renderHaloEmulated(l, e2, i2) : this.renderHaloNative(l, e2, i2), t.globalAlpha = this.parameters.halo.color[3], t.drawImage(h, 0, 0, n2, a2, r2, s2, n2, a2), t.globalAlpha = 1;
  }
  renderHaloEmulated(t, e2, i2) {
    const r2 = this.renderedLineHeight, s2 = this.renderedHaloSize;
    for (const n2 of this.textLines) {
      for (const [r3, a2] of o$1)
        t.fillText(n2, e2 + s2 * r3, i2 + s2 * a2);
      i2 += r2;
    }
  }
  renderHaloNative(t, e2, i2) {
    const r2 = this.renderedLineHeight, s2 = this.renderedHaloSize;
    for (const o2 of this.textLines) {
      const n2 = 2 * s2, a2 = 5, h = 0.1;
      for (let r3 = 0; r3 < a2; r3++) {
        const s3 = 1 - (a2 - 1) * h + r3 * h;
        t.lineWidth = s3 * n2, t.strokeText(o2, e2, i2);
      }
      i2 += r2;
    }
  }
  setFontProperties(e2, i2) {
    const r2 = i2.font, s2 = `${r2.style} ${r2.weight} ${u(i2.size * i2.pixelRatio)}px ${r2.family}, sans-serif`;
    let o2;
    switch (e2.font = s2, e2.textBaseline = "top", i2.horizontalAlignment) {
      case "left":
        o2 = "left";
        break;
      case "right":
        o2 = "right";
        break;
      case "center":
        o2 = "center";
        break;
      default:
        o2 = "left";
    }
    e2.textAlign = o2;
  }
  computeTextWidth(t, e2) {
    let i2 = 0;
    for (const s2 of this.textLines)
      i2 = Math.max(i2, t.measureText(s2).width);
    const r2 = e2.font;
    return (r2.style === "italic" || r2.style === "oblique" || typeof r2.weight == "string" && (r2.weight === "bold" || r2.weight === "bolder") || typeof r2.weight == "number" && r2.weight > 600) && (i2 += 0.3 * t.measureText("A").width), i2 += 2 * this.parameters.halo.size, Math.round(i2);
  }
  computeLineHeight() {
    const t = 1.275 * this.parameters.size;
    return Math.round(t + 2 * this.parameters.halo.size);
  }
}
function s(t, e2) {
  return t === "center" ? 0.5 * e2 : t === "right" ? e2 : 0;
}
const o$1 = [];
{
  const t = 16;
  for (let e2 = 0; e2 < 360; e2 += 360 / t)
    o$1.push([Math.cos(Math.PI * e2 / 180), Math.sin(Math.PI * e2 / 180)]);
}
var p;
!function(e2) {
  e2.Legend = "legend", e2.Preview = "preview";
}(p || (p = {}));
const d = (e2, t, r2) => {
  if (e2 && e2.targetSize) {
    let a2;
    if (r2) {
      const t2 = Math.max(r2.frame.xmax - r2.frame.xmin, r2.frame.ymax - r2.frame.ymin);
      a2 = e2.targetSize / u(t2);
    } else
      a2 = e2.targetSize / t.referenceSize;
    return a2;
  }
  return e2 && e2.scaleFactor ? e2.scaleFactor : 1;
}, M = { fill: { legend: { frame: { xmax: 15, xmin: 0, ymax: 15, ymin: 0 }, geometry: { rings: [[[0, 15], [15, 7.5], [15, 0], [0, 0], [0, 15]]] }, canvasPaths: { rings: [[[0, 15], [0, 0], [15, 7.5], [15, 15], [0, 15]]] } }, preview: { frame: { xmax: 100, xmin: 0, ymax: 100, ymin: 0 }, geometry: { rings: [[[0, 100], [100, 100], [100, 0], [0, 0], [0, 100]]] }, canvasPaths: { rings: [[[0, 100], [0, 0], [100, 0], [100, 100], [0, 100]]] } } }, stroke: { legend: { frame: { xmax: 24, xmin: 0, ymax: -2, ymin: 2 }, geometry: { paths: [[[0, 0], [12, 0], [24, 0]]] }, canvasPaths: { paths: [[[0, 2], [12, 2], [24, 2]]] } }, preview: { frame: { xmax: 100, xmin: 0, ymax: -2, ymin: 2 }, geometry: { paths: [[[0, 0], [50, 0], [100, 0]]] }, canvasPaths: { paths: [[[0, 2], [50, 2], [100, 2]]] } } } };
class C {
  constructor(e2, t) {
    this._spatialReference = e2, this._avoidSDF = t, this._resourceCache = new Map(), this._rasterizer = new o$2(), this._textRasterizer = new r(), this._pictureMarkerCache = new Map();
  }
  rasterizeCIMSymbolAsync(e2, t, a2, i2, s2, o2, n2, c2) {
    return __async(this, null, function* () {
      i2 = i2 || (t ? t.centroid != null ? "esriGeometryPolygon" : d$1(t.geometry) : null) || z(e2);
      const l = yield this.analyzeCIMSymbol(e2, t ? I(t.attributes) : null, a2, i2, c2);
      return this.rasterizeCIMSymbol(l, t, i2, s2, o2, n2);
    });
  }
  analyzeCIMSymbol(e2, r2, a$1, i2, s2) {
    return __async(this, null, function* () {
      const o2 = [], n2 = r2 ? { geometryType: i2, spatialReference: this._spatialReference, fields: r2 } : null;
      let l;
      yield k(e2.data, n2, o2, this._avoidSDF), a(s2);
      for (const t of o2)
        t.cim.type !== "CIMPictureMarker" && t.cim.type !== "CIMPictureFill" && t.cim.type !== "CIMPictureStroke" || (l || (l = []), l.push(this.fetchPictureMarkerResource(t, s2))), a$1 && t.type === "text" && typeof t.text == "string" && t.text.indexOf("[") > -1 && (t.text = n$1(a$1, t.text, t.cim.textCase));
      return l && (yield Promise.all(l)), o2;
    });
  }
  fetchPictureMarkerResource(e2, t) {
    return __async(this, null, function* () {
      const r2 = e2.materialHash;
      if (!this._pictureMarkerCache.get(r2)) {
        const a2 = (yield U(e2.cim.url, { responseType: "image", signal: t && t.signal })).data;
        this._pictureMarkerCache.set(r2, a2);
      }
    });
  }
  rasterizeCIMSymbol(e2, t, r2, a2, i2, s2) {
    const o2 = [];
    for (const n2 of e2) {
      a2 && typeof a2.scaleFactor == "function" && (a2.scaleFactor = a2.scaleFactor(t, i2, s2));
      const e3 = this._getRasterizedResource(n2, t, r2, a2, i2, s2);
      if (!e3)
        continue;
      let c2 = 0, m2 = e3.anchorX || 0, h = e3.anchorY || 0, f2 = false, g = 0, y2 = 0;
      if (r2 === "esriGeometryPoint") {
        const e4 = d(a2, n2, null);
        if (g = e$1(n2.offsetX, t, i2, s2) * e4 || 0, y2 = e$1(n2.offsetY, t, i2, s2) * e4 || 0, n2.type === "marker")
          c2 = e$1(n2.rotation, t, i2, s2) || 0, f2 = !!n2.rotateClockwise && n2.rotateClockwise;
        else if (n2.type === "text") {
          if (c2 = e$1(n2.angle, t, i2, s2) || 0, n2.horizontalAlignment !== void 0)
            switch (n2.horizontalAlignment) {
              case "left":
                m2 = -0.5;
                break;
              case "right":
                m2 = 0.5;
                break;
              default:
                m2 = 0;
            }
          if (n2.verticalAlignment !== void 0)
            switch (n2.verticalAlignment) {
              case "top":
                h = 0.5;
                break;
              case "bottom":
                h = -0.5;
                break;
              case "baseline":
                h = -0.25;
                break;
              default:
                h = 0;
            }
        }
      }
      e3 != null && o2.push({ angle: c2, rotateClockWise: f2, anchorX: m2, anchorY: h, offsetX: g, offsetY: y2, rasterizedResource: e3 });
    }
    return this.getSymbolImage(o2);
  }
  getSymbolImage(e2) {
    const t = document.createElement("canvas"), r2 = t.getContext("2d");
    let a2 = 0, i2 = 0, n2 = 0, c$12 = 0;
    const l = [];
    for (let o2 = 0; o2 < e2.length; o2++) {
      const t2 = e2[o2], m3 = t2.rasterizedResource;
      if (!m3)
        continue;
      const h2 = m3.size, f3 = t2.offsetX, g = t2.offsetY, y2 = t2.anchorX, u$1 = t2.anchorY, p2 = t2.rotateClockWise || false;
      let d2 = t2.angle, M2 = u(f3) - h2[0] * (0.5 + y2), C2 = u(g) - h2[1] * (0.5 + u$1), I2 = M2 + h2[0], z2 = C2 + h2[1];
      if (d2) {
        p2 && (d2 = -d2);
        const e3 = Math.sin(d2 * Math.PI / 180), t3 = Math.cos(d2 * Math.PI / 180), r3 = M2 * t3 - C2 * e3, a3 = M2 * e3 + C2 * t3, i3 = M2 * t3 - z2 * e3, s2 = M2 * e3 + z2 * t3, o3 = I2 * t3 - z2 * e3, n3 = I2 * e3 + z2 * t3, c2 = I2 * t3 - C2 * e3, l2 = I2 * e3 + C2 * t3;
        M2 = Math.min(r3, i3, o3, c2), C2 = Math.min(a3, s2, n3, l2), I2 = Math.max(r3, i3, o3, c2), z2 = Math.max(a3, s2, n3, l2);
      }
      a2 = M2 < a2 ? M2 : a2, i2 = C2 < i2 ? C2 : i2, n2 = I2 > n2 ? I2 : n2, c$12 = z2 > c$12 ? z2 : c$12;
      const P2 = r2.createImageData(m3.size[0], m3.size[1]);
      P2.data.set(new Uint8ClampedArray(m3.image.buffer));
      const x = { offsetX: f3, offsetY: g, rotateClockwise: p2, angle: d2, rasterizedImage: P2, anchorX: y2, anchorY: u$1 };
      l.push(x);
    }
    t.width = n2 - a2, t.height = c$12 - i2;
    const m2 = -a2, h = c$12;
    for (let o2 = 0; o2 < l.length; o2++) {
      const e3 = l[o2], t2 = this._imageDataToCanvas(e3.rasterizedImage), a3 = e3.rasterizedImage.width, i3 = e3.rasterizedImage.height, n3 = m2 - a3 * (0.5 + e3.anchorX), c2 = h - i3 * (0.5 - e3.anchorY);
      if (e3.angle) {
        const a4 = (360 - e3.angle) * Math.PI / 180;
        r2.save(), r2.translate(u(e3.offsetX), -u(e3.offsetY)), r2.translate(m2, h), r2.rotate(a4), r2.translate(-m2, -h), r2.drawImage(t2, n3, c2), r2.restore();
      } else
        r2.drawImage(t2, n3 + u(e3.offsetX), c2 - u(e3.offsetY));
    }
    const f2 = new c({ x: m2 / t.width - 0.5, y: h / t.height - 0.5 });
    return { imageData: t.width !== 0 && t.height !== 0 ? r2.getImageData(0, 0, t.width, t.height) : r2.createImageData(1, 1), anchorPosition: f2 };
  }
  _imageDataToCanvas(e2) {
    this._imageDataCanvas || (this._imageDataCanvas = document.createElement("canvas"));
    const t = this._imageDataCanvas, r2 = t.getContext("2d");
    return t.width = e2.width, t.height = e2.height, r2.putImageData(e2, 0, 0), t;
  }
  _imageTo32Array(e2, t, r2) {
    this._imageDataCanvas || (this._imageDataCanvas = document.createElement("canvas"));
    const a2 = this._imageDataCanvas, i2 = a2.getContext("2d");
    return a2.width = t, a2.height = r2, i2.drawImage(e2, 0, 0, t, r2), new Uint32Array(i2.getImageData(0, 0, t, r2).data.buffer);
  }
  _getRasterizedResource(t, r2, a2, i2, s2, o2) {
    let n2, c2, m$1, f2;
    if (a2 === "esriGeometryPolyline" || a2 === "esriGeometryPolygon") {
      const h = i2 && i2.style ? i2.style : p.Legend, f3 = a2 === "esriGeometryPolyline" ? M.stroke[h] : M.fill[h];
      if (t.type === "line") {
        if (t.cim.type !== "CIMSolidStroke") {
          if (t.cim.type === "CIMPictureStroke") {
            const e2 = e$1(t.width, r2, s2, o2), { image: a3, width: i3, height: n3 } = this._getPictureResource(t, e2);
            return this._rasterizePictureResource(t, a3, i3, n3, f3, e2);
          }
          return null;
        }
        ({ analyzedCIM: n2, hash: m$1 } = P(t, r2, s2, o2)), c2 = this._embedCIMLayerInVectorMarker(n2, f3);
      } else if (t.type === "marker") {
        if (t.cim.type === "CIMPictureMarker")
          return null;
        if (t.cim.type !== "CIMVectorMarker")
          return null;
        t.cim.offsetX = e$1(t.offsetX, r2, s2, o2), t.cim.offsetY = e$1(t.offsetY, r2, s2, o2), t.cim.rotation = e$1(t.rotation, r2, s2, o2), t.cim.markerPlacement = t.markerPlacement, { analyzedCIM: n2 } = P(t, r2, s2, o2), m$1 = c$1(JSON.stringify(n2)).toString(), c2 = this._embedCIMLayerInVectorMarker(n2, f3);
      } else {
        if (t.type === "text")
          return null;
        if (t.type === "fill") {
          if (t.cim.type === "CIMHatchFill" || t.cim.type === "CIMVectorMarker" || t.cim.type === "CIMPictureMarker" || t.cim.type === "CIMPictureFill") {
            const e2 = t.cim.size || t.cim.height;
            let a3, i3, c3;
            if (t.cim.type === "CIMPictureMarker" || t.cim.type === "CIMPictureFill")
              ({ image: a3, width: i3, height: c3 } = this._getPictureResource(t, e2));
            else {
              ({ analyzedCIM: n2, hash: m$1 } = P(t, r2, s2, o2));
              const e3 = this._rasterizer.rasterizeJSONResource(n2, 1, this._avoidSDF);
              a3 = e3.image, i3 = e3.size[0], c3 = e3.size[1];
            }
            return this._rasterizePictureResource(t, a3, i3, c3, f3, null);
          }
          if (t.cim.type !== "CIMSolidFill")
            return null;
          ({ analyzedCIM: n2, hash: m$1 } = P(t, r2, s2, o2)), c2 = this._embedCIMLayerInVectorMarker(n2, f3);
        }
      }
    } else {
      if (t.type === "text")
        return f2 = this._rasterizeTextResource(t, r2, i2, s2, o2), f2;
      ({ analyzedCIM: n2, hash: m$1 } = P(t, r2, s2, o2));
      const e2 = d(i2, t, null);
      if (t.cim.type === "CIMPictureMarker") {
        const a3 = e$1(t.size, r2, s2, o2) * e2, { image: i3, width: n3, height: c3 } = this._getPictureResource(t, a3);
        return f2 = { image: i3, size: [n3, c3], sdf: false, simplePattern: false, anchorX: t.anchorPoint ? t.anchorPoint.x : 0, anchorY: t.anchorPoint ? t.anchorPoint.y : 0 }, f2;
      }
      m(n2, e2, { preserveOutlineWidth: false }), c2 = n2;
    }
    m$1 += a2, i2 && (m$1 += JSON.stringify(i2));
    const g = this._resourceCache;
    return g.has(m$1) ? g.get(m$1) : (f2 = this._rasterizer.rasterizeJSONResource(c2, window.devicePixelRatio || 1, this._avoidSDF), g.set(m$1, f2), f2);
  }
  _rasterizeTextResource(e2, t, r2, a2, i2) {
    const s2 = d(r2, e2, null), o2 = e$1(e2.text, t, a2, i2);
    if (!o2 || o2.length === 0)
      return null;
    const n2 = e$1(e2.fontName, t, a2, i2), c2 = e$1(e2.style, t, a2, i2), h = e$1(e2.weight, t, a2, i2), f2 = e$1(e2.decoration, t, a2, i2), g = e$1(e2.size, t, a2, i2) * s2, y2 = e$1(e2.horizontalAlignment, t, a2, i2), u2 = e$1(e2.verticalAlignment, t, a2, i2), p2 = r$1(e$1(e2.color, t, a2, i2)), M2 = r$1(e$1(e2.outlineColor, t, a2, i2)), C2 = { color: p2, size: g, horizontalAlignment: y2, verticalAlignment: u2, font: { family: n2, style: c2, weight: h, decoration: f2 }, halo: { size: e$1(e2.outlineSize, t, a2, i2) || 0, color: M2, style: c2 }, pixelRatio: 1, premultiplyColors: !this._avoidSDF };
    return this._textRasterizer.rasterizeText(o2, C2);
  }
  _rasterizePictureResource(e2, t, r2, o2, n2, c2) {
    const l = document.createElement("canvas"), m2 = l.getContext("2d");
    l.height = u(Math.max(Math.abs(n2.frame.ymax - n2.frame.ymin), c2)), l.width = u(Math.abs(n2.frame.xmax - n2.frame.xmin));
    const h = m2.createImageData(r2, o2);
    h.data.set(new Uint8ClampedArray(t.buffer));
    const f$1 = this._imageDataToCanvas(h), g = m2.createPattern(f$1, "repeat"), y$1 = Math.cos((-e2.cim.rotation || 0) * Math.PI / 180), u$1 = Math.sin((-e2.cim.rotation || 0) * Math.PI / 180);
    g.setTransform({ m11: y$1, m12: u$1, m21: -u$1, m22: y$1, m41: u(e2.cim.offsetX) || 0, m42: u(e2.cim.offsetY) || 0 });
    const p2 = n2.canvasPaths;
    let d2, M2, C2;
    y(p2) ? (d2 = p2.rings, m2.fillStyle = g, M2 = m2.fill, C2 = ["evenodd"]) : f(p2) && (d2 = p2.paths, m2.strokeStyle = g, m2.lineWidth = c2, M2 = m2.stroke, d2[0][0][1] = l.height / 2, d2[0][1][1] = l.height / 2), m2.beginPath();
    for (const a2 of d2) {
      const e3 = a2 ? a2.length : 0;
      if (e3 > 1) {
        let t2 = a2[0];
        m2.moveTo(u(t2[0]), u(t2[1]));
        for (let r3 = 1; r3 < e3; ++r3)
          t2 = a2[r3], m2.lineTo(u(t2[0]), u(t2[1]));
        m2.closePath();
      }
    }
    M2.apply(m2, C2);
    const I2 = m2.getImageData(0, 0, l.width, l.height), z2 = new Uint8Array(I2.data);
    return { size: [l.width, l.height], image: new Uint32Array(z2.buffer), sdf: false, simplePattern: false, anchorX: 0, anchorY: 0 };
  }
  _getPictureResource(e2, t) {
    const r2 = this._pictureMarkerCache.get(e2.materialHash);
    if (!r2)
      return null;
    const a2 = r2.height / r2.width, i2 = t ? a2 > 1 ? u(t) : u(t) / a2 : r2.width, o2 = t ? a2 > 1 ? u(t) * a2 : u(t) : r2.height;
    return { image: this._imageTo32Array(r2, i2, o2), width: i2, height: o2 };
  }
  _embedCIMLayerInVectorMarker(e2, t) {
    const r2 = y(t.geometry) ? "CIMPolygonSymbol" : "CIMLineSymbol";
    return { type: "CIMVectorMarker", frame: t.frame, markerGraphics: [{ type: "CIMMarkerGraphic", geometry: t.geometry, symbol: { type: r2, symbolLayers: [e2] } }] };
  }
}
function I(e2) {
  return (e2 ? Object.keys(e2) : []).map((t) => ({ name: t, alias: t, type: typeof e2[t] == "string" ? "esriFieldTypeString" : "esriFieldTypeDouble" }));
}
function z(e2) {
  if (!(e2 && e2.data && e2.data.symbol))
    return null;
  switch (e2.data.symbol.type) {
    case "CIMPointSymbol":
    case "CIMTextSymbol":
      return "esriGeometryPoint";
    case "CIMLineSymbol":
      return "esriGeometryPolyline";
    case "CIMPolygonSymbol":
      return "esriGeometryPolygon";
    default:
      return null;
  }
}
function P(e2, t, r2, a2) {
  let i2, s2;
  if (typeof e2.materialHash == "function") {
    i2 = (0, e2.materialHash)(t, r2, a2), s2 = T(e2.cim, e2.materialOverrides);
  } else
    i2 = e2.materialHash, s2 = e2.cim;
  return { analyzedCIM: s2, hash: i2 };
}
const i = new C(null, true), o = 120;
function n(_0) {
  return __async(this, arguments, function* (l, n2 = {}) {
    const { size: s2, maxSize: c2, node: m2, opacity: r2 } = n2, y2 = n2.cimOptions || n2, { feature: d2, fieldMap: h, geometryType: p2, style: u2 } = y2, g = n$2(l), f2 = Math.min(s2 != null ? s2 : g, c2 != null ? c2 : e$2(o));
    f2 !== g && (l = l.clone(), i$2(l, f2, { preserveOutlineWidth: true }));
    let M2 = 3;
    l && l.data && l.data.symbol && l.data.symbol.type !== "CIMPointSymbol" && (M2 = 1);
    const b = yield i.rasterizeCIMSymbolAsync(l, d2, h, p2, { scaleFactor: M2, style: u2 }), w = document.createElement("canvas");
    w.width = b.imageData.width, w.height = b.imageData.height;
    w.getContext("2d").putImageData(b.imageData, 0, 0);
    let C2 = w.width / M2, D = w.height / M2;
    if (s2 != null && ((n2 == null ? void 0 : n2.scale) == null || (n2 == null ? void 0 : n2.scale))) {
      const t = C2 / D;
      C2 = t <= 1 ? Math.ceil(f2 * t) : f2, D = t <= 1 ? f2 : Math.ceil(f2 / t);
    }
    const I2 = new Image(C2, D);
    return I2.src = w.toDataURL(), r2 != null && (I2.style.opacity = `${r2}`), m2 && m2.appendChild(I2), I2;
  });
}
export { n as previewCIMSymbol };
