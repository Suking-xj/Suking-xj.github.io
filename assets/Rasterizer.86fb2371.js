import { cX as i } from "./vendor.74d5941c.js";
import { b as p, h, t } from "./CIMSymbolHelper.6546a069.js";
import { r, a } from "./cimAnalyzer.0b895c7f.js";
const s = 512;
class o {
  dispose() {
    this._rasterizationCanvas = null;
  }
  rasterizeJSONResource(e, s2, o2) {
    if (this._rasterizationCanvas || (this._rasterizationCanvas = document.createElement("canvas")), e.type === "simple-fill" || e.type === "esriSFS") {
      const [r2, a2, n] = p.rasterizeSimpleFill(this._rasterizationCanvas, e.style, s2);
      return { size: [a2, n], image: new Uint32Array(r2.buffer), sdf: false, simplePattern: true, anchorX: 0, anchorY: 0 };
    }
    if (e.type === "simple-line" || e.type === "esriSLS") {
      const [r2, a2, n] = p.rasterizeSimpleLine(e.style, e.cap);
      return { size: [a2, n], image: new Uint32Array(r2.buffer), sdf: true, simplePattern: true, anchorX: 0, anchorY: 0 };
    }
    let m, l, f;
    if (e.type === "simple-marker" || e.type === "esriSMS" || e.type === "line-marker" ? (m = h.fromSimpleMarker(e), f = r(m)) : e.type === "CIMHatchFill" ? (m = h.fromCIMHatchFill(e), l = new t(m.frame.xmin, -m.frame.ymax, m.frame.xmax - m.frame.xmin, m.frame.ymax - m.frame.ymin)) : e.markerPlacement && e.markerPlacement.type === "CIMMarkerPlacementInsidePolygon" ? (m = h.fromCIMInsidePolygon(e), l = new t(m.frame.xmin, -m.frame.ymax, m.frame.xmax - m.frame.xmin, m.frame.ymax - m.frame.ymin)) : (m = e, f = r(m)), f && !o2) {
      const [e2, r2, t2] = a(f);
      return e2 ? { size: [r2, t2], image: new Uint32Array(e2.buffer), sdf: true, simplePattern: true, anchorX: 0, anchorY: 0 } : null;
    }
    const [c, h$1, p$1, y, u] = h.rasterize(this._rasterizationCanvas, m, l, !o2);
    return c ? { size: [h$1, p$1], image: new Uint32Array(c.buffer), sdf: false, simplePattern: false, anchorX: y, anchorY: u } : null;
  }
  rasterizeImageResource(r2, t2, a2, n) {
    this._rasterizationCanvas || (this._rasterizationCanvas = document.createElement("canvas")), this._rasterizationCanvas.width = r2, this._rasterizationCanvas.height = t2;
    const i$1 = this._rasterizationCanvas.getContext("2d");
    a2 instanceof ImageData ? i$1.putImageData(a2, 0, 0) : (a2.setAttribute("width", `${r2}px`), a2.setAttribute("height", `${t2}px`), i$1.drawImage(a2, 0, 0, r2, t2));
    const o2 = i$1.getImageData(0, 0, r2, t2), m = new Uint8Array(o2.data);
    if (n) {
      for (const e of n)
        if (e && e.oldColor && e.oldColor.length === 4 && e.newColor && e.newColor.length === 4) {
          const [r3, t3, a3, n2] = e.oldColor, [i2, s2, o3, l2] = e.newColor;
          if (r3 === i2 && t3 === s2 && a3 === o3 && n2 === l2)
            continue;
          for (let e2 = 0; e2 < m.length; e2 += 4)
            r3 === m[e2] && t3 === m[e2 + 1] && a3 === m[e2 + 2] && n2 === m[e2 + 3] && (m[e2] = i2, m[e2 + 1] = s2, m[e2 + 2] = o3, m[e2 + 3] = l2);
        }
    }
    let l;
    for (let e = 0; e < m.length; e += 4)
      l = m[e + 3] / 255, m[e] = m[e] * l, m[e + 1] = m[e + 1] * l, m[e + 2] = m[e + 2] * l;
    let f = m, c = r2, h2 = t2;
    const p2 = s;
    if (c >= p2 || h2 >= p2) {
      const a3 = c / h2;
      a3 > 1 ? (c = p2, h2 = Math.round(p2 / a3)) : (h2 = p2, c = Math.round(p2 * a3)), f = new Uint8Array(4 * c * h2);
      const n2 = new Uint8ClampedArray(f.buffer);
      i(m, r2, t2, n2, c, h2, false);
    }
    return { size: [r2, t2], image: new Uint32Array(f.buffer), sdf: false, simplePattern: false, anchorX: 0, anchorY: 0 };
  }
}
export { o };
