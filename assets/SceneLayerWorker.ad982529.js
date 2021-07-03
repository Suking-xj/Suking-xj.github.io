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
import { gr as a$1, gs as r, a5 as r$1 } from "./vendor.74d5941c.js";
function t() {
  return i$1 || (i$1 = new Promise((e) => import("./i3s.05e49d38.js").then(function(e2) {
    return e2.i;
  }).then(({ default: t2 }) => {
    const i2 = t2({ locateFile: n$1, onRuntimeInitialized: () => e(i2) });
    delete i2.then;
  })).catch((e) => Promise.reject(e))), i$1;
}
function n$1(t2) {
  return a$1(`esri/libs/i3s/${t2}`);
}
let i$1;
function n(e) {
  return __async(this, null, function* () {
    yield h();
    const t2 = [e.geometryBuffer];
    return { result: y(e, t2), transferList: t2 };
  });
}
function o(t2) {
  return __async(this, null, function* () {
    var r$12;
    yield h();
    const n2 = [t2.geometryBuffer], { geometryBuffer: o2 } = t2, s2 = o2.byteLength, f2 = c._malloc(s2), i2 = new Uint8Array(c.HEAPU8.buffer, f2, s2);
    i2.set(new Uint8Array(o2));
    const a2 = c.dracoDecompressPointCloudData(f2, i2.byteLength);
    if (c._free(f2), a2.error.length > 0)
      throw `i3s.wasm: ${a2.error}`;
    const u2 = ((r$12 = a2.featureIds) == null ? void 0 : r$12.length) > 0 ? r(a2.featureIds) : null, l2 = r(a2.positions);
    u2 && n2.push(u2.buffer), n2.push(l2.buffer);
    return { result: { positions: l2, featureIds: u2 }, transferList: n2 };
  });
}
function s(e) {
  return __async(this, null, function* () {
    yield h(), m(e);
    const t2 = { buffer: e.buffer };
    return { result: t2, transferList: [t2.buffer] };
  });
}
function f(e) {
  return __async(this, null, function* () {
    yield h(), l(e);
  });
}
function i(e) {
  return __async(this, null, function* () {
    yield h(), c.setLegacySchema(e.context, e.jsonSchema);
  });
}
function a(e) {
  d(e);
}
let u, c;
function l(e) {
  const t2 = e.modifications, r2 = c._malloc(8 * t2.length), n2 = new Float64Array(c.HEAPU8.buffer, r2, t2.length);
  for (let o2 = 0; o2 < t2.length; ++o2)
    n2[o2] = t2[o2];
  c.setModifications(e.context, r2, t2.length, e.isGeodetic), c._free(r2);
}
function y(r$2, n2) {
  if (!c)
    return null;
  const { context: o2, localOrigin: s2, globalTrafo: f2, mbs: i2, obb: a2, elevationOffset: u2, geometryBuffer: l2, geometryDescriptor: y2, indexToVertexProjector: b2, vertexToRenderProjector: m2 } = r$2, d2 = c._malloc(l2.byteLength), h2 = 33, p2 = c._malloc(h2 * Float64Array.BYTES_PER_ELEMENT), g = new Uint8Array(c.HEAPU8.buffer, d2, l2.byteLength);
  g.set(new Uint8Array(l2));
  const w = new Float64Array(c.HEAPU8.buffer, p2, h2);
  E(w, s2);
  let A = w.byteOffset + 3 * w.BYTES_PER_ELEMENT, _ = new Float64Array(w.buffer, A);
  E(_, f2), A += 16 * w.BYTES_PER_ELEMENT, _ = new Float64Array(w.buffer, A), E(_, i2), A += 4 * w.BYTES_PER_ELEMENT, r$1(a2) && (_ = new Float64Array(w.buffer, A), E(_, a2.center), A += 3 * w.BYTES_PER_ELEMENT, _ = new Float64Array(w.buffer, A), E(_, a2.halfSize), A += 3 * w.BYTES_PER_ELEMENT, _ = new Float64Array(w.buffer, A), E(_, a2.quaternion));
  const L = y2, T = { isDraco: false, isLegacy: false, color: r$2.layouts.some((e) => e.some((e2) => e2.name === "color")), normal: r$2.needNormals && r$2.layouts.some((e) => e.some((e2) => e2.name === "normalCompressed")), uv0: r$2.layouts.some((e) => e.some((e2) => e2.name === "uv0")), uvRegion: r$2.layouts.some((e) => e.some((e2) => e2.name === "uvRegion")), featureIndex: L.featureIndex }, I = c.process(o2, !!r$2.obb, d2, g.byteLength, L, T, p2, u2, b2, m2, r$2.normalReferenceFrame);
  if (c._free(p2), c._free(d2), I.error.length > 0)
    throw `i3s.wasm: ${I.error}`;
  if (I.discarded)
    return null;
  const P = I.componentOffsets.length > 0 ? r(I.componentOffsets) : null, U = I.featureIds.length > 0 ? r(I.featureIds) : null, B = r(I.interleavedVertedData).buffer, F = I.indicesType === 1 ? r(new Uint16Array(I.indices.buffer, I.indices.byteOffset, I.indices.byteLength / 2)) : r(new Uint32Array(I.indices.buffer, I.indices.byteOffset, I.indices.byteLength / 4)), v = r(I.positions), x = I.positionIndicesType === 1 ? r(new Uint16Array(I.positionIndices.buffer, I.positionIndices.byteOffset, I.positionIndices.byteLength / 2)) : r(new Uint32Array(I.positionIndices.buffer, I.positionIndices.byteOffset, I.positionIndices.byteLength / 4)), M = { layout: r$2.layouts[0], interleavedVertexData: B, indices: F, hasColors: I.hasColors, hasModifications: I.hasModifications, positionData: { data: v, indices: x } };
  return U && n2.push(U.buffer), P && n2.push(P.buffer), n2.push(B), n2.push(F.buffer), n2.push(v.buffer), n2.push(x.buffer), { componentOffsets: P, featureIds: U, transformedGeometry: M, obb: I.obb };
}
function b(e) {
  return e === 0 ? 0 : e === 1 ? 1 : e === 2 ? 2 : 3;
}
function m(e) {
  const { context: t2, buffer: r2 } = e, n2 = c._malloc(r2.byteLength), o2 = r2.byteLength / Float64Array.BYTES_PER_ELEMENT, s2 = new Float64Array(c.HEAPU8.buffer, n2, o2), f2 = new Float64Array(r2);
  s2.set(f2), c.filterOBBs(t2, n2, o2), f2.set(s2), c._free(n2);
}
function d(e) {
  c && c.destroy(e);
}
function E(e, t2) {
  for (let r2 = 0; r2 < t2.length; ++r2)
    e[r2] = t2[r2];
}
function h() {
  return c ? Promise.resolve() : (u || (u = t().then((e) => {
    c = e, u = null;
  })), u);
}
const p = { transform: y, destroy: d };
export { a as destroyContext, o as dracoDecompressPointCloudData, s as filterObbsForModifications, m as filterObbsForModificationsSync, h as initialize, b as interpretObbModificationResults, n as process, i as setLegacySchema, f as setModifications, l as setModificationsSync, p as test };
