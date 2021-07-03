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
import { c9 as t$1, ae as e$1, af as y, ag as i$3, cr as M, dQ as e$2, dR as g, bF as k, d1 as n$2, b$ as e$3, _ as j, dp as m, dA as a$1, a5 as r, aa as s, aj as U, dI as t$2, dS as r$1, dT as p$3, dD as U$1 } from "./vendor.74d5941c.js";
import { a } from "./GPMessage.8bfedb6d.js";
const t = (t2) => {
  if (!Array.isArray(t2))
    return false;
  const [e2] = t2;
  return typeof e2 == "number" || typeof e2 == "string";
};
class e {
  constructor(t2 = {}) {
    this._options = t2;
  }
  toQueryParams(e2) {
    if (!e2)
      return null;
    const o2 = e2.toJSON(), n2 = {};
    return Object.keys(o2).forEach((e3) => {
      const r2 = this._options[e3];
      if (r2) {
        const s2 = typeof r2 != "boolean" && r2.name ? r2.name : e3, i2 = typeof r2 != "boolean" && r2.getter ? r2.getter(o2) : o2[e3];
        i2 != null && (n2[s2] = t(i2) ? i2.join(",") : typeof i2 == "object" ? JSON.stringify(i2) : i2);
      } else
        n2[e3] = o2[e3];
    }, this), n2;
  }
}
function o(t2) {
  return new e(t2);
}
const p$2 = new t$1({ 0: "informative", 1: "process-definition", 2: "process-start", 3: "process-stop", 50: "warning", 100: "error", 101: "empty", 200: "abort" });
let i$2 = class extends a {
  constructor(r2) {
    super(r2), this.type = null;
  }
};
e$1([y({ type: String, json: { read: p$2.read, write: p$2.write } })], i$2.prototype, "type", void 0), i$2 = e$1([i$3("esri.tasks.support.NAMessage")], i$2);
var c$3 = i$2;
let u$4 = class extends g {
  constructor(e2) {
    super(e2), this.extent = null, this.features = null, this.geometryType = "polyline", this.routeId = null, this.routeName = null, this.totalDriveTime = null, this.totalLength = null, this.totalTime = null;
  }
  readFeatures(e2, r2) {
    (e2 || []).forEach((e3) => {
      this._decompressFeatureGeometry(e3, r2.summary.envelope.spatialReference);
    });
    const o2 = k.fromJSON(r2.spatialReference);
    return e2.map((e3) => {
      const r3 = n$2.fromJSON(e3), s2 = e3.geometry && e3.geometry.spatialReference;
      return r3.geometry && !s2 && (e$3(r3.geometry).spatialReference = o2), r3.strings = e3.strings, r3.events = (e3.events || []).map((t2) => {
        const r4 = new n$2({ geometry: new j({ x: t2.point.x, y: t2.point.y, z: t2.point.z, hasZ: t2.point.z !== void 0, spatialReference: e3.geometry && e3.geometry.spatialReference }), attributes: { ETA: t2.ETA, arriveTimeUTC: t2.arriveTimeUTC } });
        return r4.strings = t2.strings, r4;
      }), r3;
    });
  }
  get mergedGeometry() {
    if (!this.features)
      return null;
    const e2 = this.features.map(({ geometry: e3 }) => e$3(e3)), r2 = this.get("extent.spatialReference");
    return this._mergePolylinesToSinglePath(e2, r2);
  }
  get strings() {
    return this.features.map(({ strings: e2 }) => e2);
  }
  _decompressFeatureGeometry(e2, t2) {
    e2.geometry = this._decompressGeometry(e2.compressedGeometry, t2);
  }
  _decompressGeometry(e2, t2) {
    let r2 = 0, o2 = 0, s2 = 0, a2 = 0;
    const p2 = [];
    let n2, i2, m2, l2, u2, c2, y2, g2, h = 0, f2 = 0, d2 = 0;
    if (u2 = e2.match(/((\+|\-)[^\+\-\|]+|\|)/g), u2 || (u2 = []), parseInt(u2[h], 32) === 0) {
      h = 2;
      const e3 = parseInt(u2[h], 32);
      h++, c2 = parseInt(u2[h], 32), h++, 1 & e3 && (f2 = u2.indexOf("|") + 1, y2 = parseInt(u2[f2], 32), f2++), 2 & e3 && (d2 = u2.indexOf("|", f2) + 1, g2 = parseInt(u2[d2], 32), d2++);
    } else
      c2 = parseInt(u2[h], 32), h++;
    for (; h < u2.length && u2[h] !== "|"; ) {
      n2 = parseInt(u2[h], 32) + r2, h++, r2 = n2, i2 = parseInt(u2[h], 32) + o2, h++, o2 = i2;
      const e3 = [n2 / c2, i2 / c2];
      f2 && (l2 = parseInt(u2[f2], 32) + s2, f2++, s2 = l2, e3.push(l2 / y2)), d2 && (m2 = parseInt(u2[d2], 32) + a2, d2++, a2 = m2, e3.push(m2 / g2)), p2.push(e3);
    }
    return { paths: [p2], hasZ: f2 > 0, hasM: d2 > 0, spatialReference: t2 };
  }
  _mergePolylinesToSinglePath(e2, t2) {
    let r2 = [];
    (e2 || []).forEach((e3) => {
      e3.paths.forEach((e4) => {
        r2 = r2.concat(e4);
      });
    });
    const o2 = [];
    let s2 = [0, 0];
    return r2.forEach((e3) => {
      e3[0] === s2[0] && e3[1] === s2[1] || (o2.push(e3), s2 = e3);
    }), new m({ paths: [o2] }, t2);
  }
};
e$1([y({ type: M, json: { read: { source: "summary.envelope" } } })], u$4.prototype, "extent", void 0), e$1([y()], u$4.prototype, "features", void 0), e$1([e$2("features")], u$4.prototype, "readFeatures", null), e$1([y()], u$4.prototype, "geometryType", void 0), e$1([y({ readOnly: true })], u$4.prototype, "mergedGeometry", null), e$1([y()], u$4.prototype, "routeId", void 0), e$1([y()], u$4.prototype, "routeName", void 0), e$1([y({ value: null, readOnly: true })], u$4.prototype, "strings", null), e$1([y({ json: { read: { source: "summary.totalDriveTime" } } })], u$4.prototype, "totalDriveTime", void 0), e$1([y({ json: { read: { source: "summary.totalLength" } } })], u$4.prototype, "totalLength", void 0), e$1([y({ json: { read: { source: "summary.totalTime" } } })], u$4.prototype, "totalTime", void 0), u$4 = e$1([i$3("esri.tasks.support.DirectionsFeatureSet")], u$4);
var c$2 = u$4;
let i$1 = class extends a$1 {
  constructor(o2) {
    super(o2), this.directions = null, this.route = null, this.routeName = null, this.stops = null;
  }
};
e$1([y({ type: c$2, json: { write: true } })], i$1.prototype, "directions", void 0), e$1([y({ type: n$2, json: { write: true } })], i$1.prototype, "route", void 0), e$1([y({ type: String, json: { write: true } })], i$1.prototype, "routeName", void 0), e$1([y({ type: [n$2], json: { write: true } })], i$1.prototype, "stops", void 0), i$1 = e$1([i$3("esri.tasks.support.RouteResult")], i$1);
var u$3 = i$1;
function n$1(r2) {
  return r2 && g.fromJSON(r2).features.map((r3) => r3);
}
let u$2 = class extends a$1 {
  constructor(r2) {
    super(r2), this.barriers = null, this.messages = null, this.pointBarriers = null, this.polylineBarriers = null, this.polygonBarriers = null, this.routeResults = null;
  }
  readPointBarriers(r2, o2) {
    return n$1(o2.barriers || o2.pointBarriers);
  }
  readPolylineBarriers(r2) {
    return n$1(r2);
  }
  readPolygonBarriers(r2) {
    return n$1(r2);
  }
};
e$1([y({ aliasOf: "pointBarriers" })], u$2.prototype, "barriers", void 0), e$1([y({ type: [c$3] })], u$2.prototype, "messages", void 0), e$1([y({ type: [n$2] })], u$2.prototype, "pointBarriers", void 0), e$1([e$2("pointBarriers", ["barriers", "pointBarriers"])], u$2.prototype, "readPointBarriers", null), e$1([y({ type: [n$2] })], u$2.prototype, "polylineBarriers", void 0), e$1([e$2("polylineBarriers")], u$2.prototype, "readPolylineBarriers", null), e$1([y({ type: [n$2] })], u$2.prototype, "polygonBarriers", void 0), e$1([e$2("polygonBarriers")], u$2.prototype, "readPolygonBarriers", null), e$1([y({ type: [u$3] })], u$2.prototype, "routeResults", void 0), u$2 = e$1([i$3("esri.tasks.support.RouteResultsContainer")], u$2);
var c$1 = u$2;
function l$1(e2, t2, r2, s2) {
  s2[r2] = [t2.length, t2.length + e2.length], e2.forEach((e3) => {
    t2.push(e3.geometry);
  });
}
function n(e2, t2) {
  for (let r2 = 0; r2 < t2.length; r2++) {
    const s2 = e2[t2[r2]];
    if (s2 && s2.length)
      for (const e3 of s2)
        e3.z = void 0;
  }
  console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.");
}
function i(e2) {
  const t2 = [], r2 = [], { directions: s2 = [], routes: { features: o2 = [], spatialReference: l2 = null } = {}, stops: { features: n2 = [], spatialReference: i2 = null } = {}, barriers: u2, polygonBarriers: d2, polylineBarriers: p2, messages: f2 } = e2.data, c2 = "esri.tasks.RouteTask.NULL_ROUTE_NAME";
  let v, m2, h = true;
  const g2 = o2 && l2 || n2 && i2 || u2 && u2.spatialReference || d2 && d2.spatialReference || p2 && p2.spatialReference;
  s2.forEach((e3) => {
    t2.push(v = e3.routeName), r2[v] = { directions: e3 };
  }), o2.forEach((e3) => {
    t2.indexOf(v = e3.attributes.Name) === -1 && (t2.push(v), r2[v] = {}), e3.geometry && (e3.geometry.spatialReference = g2), r2[v].route = e3;
  }), n2.forEach((e3) => {
    m2 = e3.attributes, t2.indexOf(v = m2.RouteName || c2) === -1 && (t2.push(v), r2[v] = {}), v !== c2 && (h = false), e3.geometry && (e3.geometry.spatialReference = g2), r2[v].stops == null && (r2[v].stops = []), r2[v].stops.push(e3);
  }), n2.length > 0 && h === true && (r2[t2[0]].stops = r2[c2].stops, delete r2[c2], t2.splice(t2.indexOf(c2), 1));
  const T = t2.map((e3) => (r2[e3].routeName = e3 === c2 ? null : e3, r2[e3]));
  return c$1.fromJSON({ routeResults: T, pointBarriers: u2, polygonBarriers: d2, polylineBarriers: p2, messages: f2 });
}
function u$1(e2, r$12) {
  for (let s2 = 0; s2 < r$12.length; s2++) {
    const o2 = e2[r$12[s2]];
    if (o2 && o2.length) {
      for (const e3 of o2)
        if (r(e3) && e3.hasZ)
          return true;
    }
  }
  return false;
}
function d(e2) {
  return __async(this, null, function* () {
    if (!e2)
      throw new s("network-service:missing-url", "Url to Network service is missing");
    const { data: t2 } = yield U(e2, { query: { f: "json" } });
    t2.supportedTravelModes || (t2.supportedTravelModes = []);
    for (let r2 = 0; r2 < t2.supportedTravelModes.length; r2++)
      t2.supportedTravelModes[r2].id || (t2.supportedTravelModes[r2].id = t2.supportedTravelModes[r2].itemId);
    const o2 = t2.currentVersion >= 10.4 ? f(e2) : p$1(e2), { defaultTravelMode: a2, supportedTravelModes: l2 } = yield o2;
    return t2.defaultTravelMode = a2, t2.supportedTravelModes = l2, t2;
  });
}
function p$1(t2) {
  return __async(this, null, function* () {
    const { data: r2 } = yield U(t2.substring(0, t2.indexOf("/rest/") + 6) + "info", { query: { f: "json" } });
    if (!r2 || !r2.owningSystemUrl)
      return { supportedTravelModes: [], defaultTravelMode: null };
    t2 = r2.owningSystemUrl;
    const { data: a2 } = yield U(t2 + (t2[t2.length - 1] === "/" ? "" : "/") + "sharing/rest/portals/self", { query: { f: "json" } }), l2 = t$2("helperServices.routingUtilities.url", a2);
    if (!l2)
      return { supportedTravelModes: [], defaultTravelMode: null };
    const n2 = r$1(t2), i2 = /\/solve$/.test(n2.path) ? "Route" : /\/solveClosestFacility$/.test(n2.path) ? "ClosestFacility" : "ServiceAreas", u2 = yield U(l2 + (l2[l2.length - 1] === "/" ? "" : "/") + "GetTravelModes/execute", { query: { f: "json", serviceName: i2 } }), d2 = [];
    let p2 = null;
    if (u2 && u2.data && u2.data.results && u2.data.results.length) {
      const e2 = u2.data.results;
      for (const t3 of e2)
        if (t3.paramName === "supportedTravelModes") {
          if (t3.value && t3.value.features) {
            for (const { attributes: e3 } of t3.value.features)
              if (e3) {
                const t4 = JSON.parse(e3.TravelMode);
                d2.push(t4);
              }
          }
        } else
          t3.paramName === "defaultTravelMode" && (p2 = t3.value);
    }
    return { supportedTravelModes: d2, defaultTravelMode: p2 };
  });
}
function f(e2) {
  return __async(this, null, function* () {
    try {
      const { data: { supportedTravelModes: t2, defaultTravelMode: r2 } } = yield U(e2 + (e2[e2.length - 1] === "/" ? "" : "/") + "retrieveTravelModes", { query: { f: "json" } });
      return { supportedTravelModes: t2, defaultTravelMode: r2 };
    } catch (t2) {
      throw new s("network-service:retrieveTravelModes", "Could not get to the NAServer's retrieveTravelModes.", { error: t2 });
    }
  });
}
function l(e2, r2) {
  return __async(this, null, function* () {
    try {
      const { data: { supportedTravelModes: t2, defaultTravelMode: s2 } } = yield U(e2 + (e2[e2.length - 1] === "/" ? "" : "/") + "retrieveTravelModes", { query: { f: "json", token: r2 } });
      return { supportedTravelModes: t2, defaultTravelMode: s2 };
    } catch (t2) {
      throw new s("network-service:retrieveTravelModes", "Could not get to the NAServer's retrieveTravelModes.", { error: t2 });
    }
  });
}
function c(e2, t2) {
  return __async(this, null, function* () {
    const { data: s2 } = yield U(e2.substring(0, e2.indexOf("/rest/") + 6) + "info", { query: { f: "json", token: t2 } });
    if (!s2 || !s2.owningSystemUrl)
      return { supportedTravelModes: [], defaultTravelMode: null };
    e2 = s2.owningSystemUrl;
    const { data: o2 } = yield U(e2 + (e2[e2.length - 1] === "/" ? "" : "/") + "sharing/rest/portals/self", { query: { f: "json", token: t2 } }), n2 = t$2("helperServices.routingUtilities.url", o2);
    if (!n2)
      return { supportedTravelModes: [], defaultTravelMode: null };
    const l2 = U$1(e2), c2 = /\/solveClosestFacility$/.test(l2.path) ? "Route" : /\/solveClosestFacility$/.test(l2.path) ? "ClosestFacility" : "ServiceAreas", u2 = yield U(n2 + (n2[n2.length - 1] === "/" ? "" : "/") + "GetTravelModes/execute", { query: { f: "json", serviceName: c2, token: t2 } }), p2 = [];
    let d2 = null;
    if (u2 && u2.data && u2.data.results && u2.data.results.length) {
      const e3 = u2.data.results;
      for (const r2 of e3)
        if (r2.paramName === "supportedTravelModes") {
          if (r2.value && r2.value.features) {
            for (const { attributes: e4 } of r2.value.features)
              if (e4) {
                const r3 = JSON.parse(e4.TravelMode);
                p2.push(r3);
              }
          }
        } else
          r2.paramName === "defaultTravelMode" && (d2 = r2.value);
    }
    return { supportedTravelModes: p2, defaultTravelMode: d2 };
  });
}
const u = (r$12) => {
  let i2 = class extends r$12 {
    getServiceDescription(e2) {
      return __async(this, null, function* () {
        return this._serviceDescriptionPromise || (this._serviceDescriptionPromise = this._fetchServiceDescription(e2)), this._serviceDescriptionPromise;
      });
    }
    _fetchServiceDescription(e2) {
      return __async(this, null, function* () {
        if (!this.url || !this.parsedUrl)
          throw new s("network-service:missing-url", "Url to Network service is missing");
        const r2 = this.url, { data: t2 } = yield U(r2, { query: { f: "json", token: e2 } });
        t2.supportedTravelModes || (t2.supportedTravelModes = []);
        for (let o2 = 0; o2 < t2.supportedTravelModes.length; o2++)
          t2.supportedTravelModes[o2].id || (t2.supportedTravelModes[o2].id = t2.supportedTravelModes[o2].itemId);
        const s$1 = t2.currentVersion >= 10.4 ? l(r2, e2) : c(r2, e2), { defaultTravelMode: i3, supportedTravelModes: n2 } = yield s$1;
        return t2.defaultTravelMode = i3, t2.supportedTravelModes = n2, t2;
      });
    }
    _isInputGeometryZAware(e2, r$13) {
      for (let s2 = 0; s2 < r$13.length; s2++) {
        const o2 = e2[r$13[s2]];
        if (o2 && o2.length) {
          for (const e3 of o2)
            if (r(e3) && e3.hasZ)
              return true;
        }
      }
      return false;
    }
    _dropZValuesOffInputGeometry(e2, r2) {
      for (let t2 = 0; t2 < r2.length; t2++) {
        const s2 = e2[r2[t2]];
        if (s2 && s2.length)
          for (const e3 of s2)
            e3.z = void 0;
      }
      console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.");
    }
  };
  return i2 = e$1([i$3("esri.tasks.mixins.NAServiceDescription")], i2), i2;
};
let p = class extends u(p$3) {
};
p = e$1([i$3("esri.tasks.mixins.NAServiceDescription")], p);
export { c$3 as a, u as b, c$2 as c, d, i, l$1 as l, n, o, u$1 as u };
