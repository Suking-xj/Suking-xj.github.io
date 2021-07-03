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
import { aj as U, bF as k$1, bT as y, dB as s, f1 as Rt, ar as s$1, dR as g$1, eQ as c$1, M, f2 as f } from "./vendor.74d5941c.js";
import { k, a, D, f as f$1 } from "./aaBoundingBox.b76947f8.js";
const c = { esriGeometryPoint: "points", esriGeometryPolyline: "polylines", esriGeometryPolygon: "polygons" };
function d(o) {
  const t = o.folders || [], r = t.slice(), s2 = new Map(), n = new Map(), i = new Map(), a2 = new Map(), f2 = new Map(), l = { esriGeometryPoint: n, esriGeometryPolyline: i, esriGeometryPolygon: a2 };
  (o.featureCollection && o.featureCollection.layers || []).forEach((o2) => {
    const t2 = y(o2);
    t2.featureSet.features = [];
    const r2 = o2.featureSet.geometryType;
    s2.set(r2, t2);
    const f3 = o2.layerDefinition.objectIdField;
    r2 === "esriGeometryPoint" ? G(n, f3, o2.featureSet.features) : r2 === "esriGeometryPolyline" ? G(i, f3, o2.featureSet.features) : r2 === "esriGeometryPolygon" && G(a2, f3, o2.featureSet.features);
  }), o.groundOverlays && o.groundOverlays.forEach((e) => {
    f2.set(e.id, e);
  }), t.forEach((e) => {
    e.networkLinkIds.forEach((t2) => {
      const s3 = P(t2, e.id, o.networkLinks);
      s3 && r.push(s3);
    });
  }), r.forEach((o2) => {
    o2.featureInfos && (o2.points = y(s2.get("esriGeometryPoint")), o2.polylines = y(s2.get("esriGeometryPolyline")), o2.polygons = y(s2.get("esriGeometryPolygon")), o2.mapImages = [], o2.featureInfos.map((e) => {
      switch (e.type) {
        case "esriGeometryPoint":
        case "esriGeometryPolyline":
        case "esriGeometryPolygon": {
          const t2 = l[e.type].get(e.id);
          t2 && o2[c[e.type]].featureSet.features.push(t2);
          break;
        }
        case "GroundOverlay": {
          const t2 = f2.get(e.id);
          t2 && o2.mapImages.push(t2);
          break;
        }
      }
    }), o2.fullExtent = j([o2]));
  });
  const u = j(r);
  return { folders: t, sublayers: r, extent: u };
}
function g(e, r, s$2, n) {
  const f2 = s && s.findCredential(e);
  e = Rt(e, { token: f2 && f2.token });
  const l = s$1.kmlServiceUrl;
  return U(l, { query: { url: e, model: "simple", folders: "", refresh: s$2 !== 0 || void 0, outSR: JSON.stringify(r) }, responseType: "json", signal: n });
}
function S(e, o, t = null, r = []) {
  const s2 = [], n = {}, i = o.sublayers, a2 = o.folders.map((e2) => e2.id);
  return i.forEach((o2) => {
    const i2 = new e();
    if (t ? i2.read(o2, t) : i2.read(o2), r.length && a2.indexOf(i2.id) > -1 && (i2.visible = r.indexOf(i2.id) !== -1), n[o2.id] = i2, o2.parentFolderId != null && o2.parentFolderId !== -1) {
      const e2 = n[o2.parentFolderId];
      e2.sublayers || (e2.sublayers = []), e2.sublayers.unshift(i2);
    } else
      s2.unshift(i2);
  }), s2;
}
function G(e, o, t) {
  t.forEach((t2) => {
    e.set(t2.attributes[o], t2);
  });
}
function h(e, o) {
  let t;
  return o.some((o2) => o2.id === e && (t = o2, true)), t;
}
function P(e, o, t) {
  const r = h(e, t);
  return r && (r.parentFolderId = o, r.networkLink = r), r;
}
function b(e) {
  return __async(this, null, function* () {
    const o = g$1.fromJSON(e.featureSet).features, t = e.layerDefinition, r = c$1(t.drawingInfo.renderer), s2 = M.fromJSON(e.popupInfo), i = [];
    for (const n of o) {
      const e2 = yield r.getSymbolAsync(n);
      n.symbol = e2, n.popupTemplate = s2, n.visible = true, i.push(n);
    }
    return i;
  });
}
function j(e) {
  const o = a(), t = a(D);
  for (const r of e) {
    if (r.polygons && r.polygons.featureSet && r.polygons.featureSet.features)
      for (const e2 of r.polygons.featureSet.features)
        f(o, e2.geometry), f$1(t, o);
    if (r.polylines && r.polylines.featureSet && r.polylines.featureSet.features)
      for (const e2 of r.polylines.featureSet.features)
        f(o, e2.geometry), f$1(t, o);
    if (r.points && r.points.featureSet && r.points.featureSet.features)
      for (const e2 of r.points.featureSet.features)
        f(o, e2.geometry), f$1(t, o);
    if (r.mapImages)
      for (const e2 of r.mapImages)
        f(o, e2.extent), f$1(t, o);
  }
  return k(t, D) ? null : { xmin: t[0], ymin: t[1], zmin: t[2], xmax: t[3], ymax: t[4], zmax: t[5], spatialReference: k$1.WGS84 };
}
export { S, b, d, g, j };
