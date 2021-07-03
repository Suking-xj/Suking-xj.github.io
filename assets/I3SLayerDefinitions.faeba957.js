import { ae as e, af as y$1, ag as i$1, eS as r, dA as a$1 } from "./vendor.74d5941c.js";
let s = class extends a$1 {
  constructor() {
    super(...arguments), this.nodesPerPage = null, this.rootIndex = 0, this.lodSelectionMetricType = null;
  }
};
e([y$1({ type: Number })], s.prototype, "nodesPerPage", void 0), e([y$1({ type: Number })], s.prototype, "rootIndex", void 0), e([y$1({ type: String })], s.prototype, "lodSelectionMetricType", void 0), s = e([i$1("esri.layer.support.I3SNodePageDefinition")], s);
let i = class extends a$1 {
  constructor() {
    super(...arguments), this.factor = 1;
  }
};
e([y$1({ type: Number, json: { read: { source: "textureSetDefinitionId" } } })], i.prototype, "id", void 0), e([y$1({ type: Number })], i.prototype, "factor", void 0), i = e([i$1("esri.layer.support.I3SMaterialTexture")], i);
let a = class extends a$1 {
  constructor() {
    super(...arguments), this.baseColorFactor = [1, 1, 1, 1], this.baseColorTexture = null, this.metallicRoughnessTexture = null, this.metallicFactor = 1, this.roughnessFactor = 1;
  }
};
e([y$1({ type: [Number] })], a.prototype, "baseColorFactor", void 0), e([y$1({ type: i })], a.prototype, "baseColorTexture", void 0), e([y$1({ type: i })], a.prototype, "metallicRoughnessTexture", void 0), e([y$1({ type: Number })], a.prototype, "metallicFactor", void 0), e([y$1({ type: Number })], a.prototype, "roughnessFactor", void 0), a = e([i$1("esri.layer.support.I3SMaterialPBRMetallicRoughness")], a);
let l = class extends a$1 {
  constructor() {
    super(...arguments), this.alphaMode = "opaque", this.alphaCutoff = 0.25, this.doubleSided = false, this.cullFace = "none", this.normalTexture = null, this.occlusionTexture = null, this.emissiveTexture = null, this.emissiveFactor = null, this.pbrMetallicRoughness = null;
  }
};
e([r({ opaque: "opaque", mask: "mask", blend: "blend" })], l.prototype, "alphaMode", void 0), e([y$1({ type: Number })], l.prototype, "alphaCutoff", void 0), e([y$1({ type: Boolean })], l.prototype, "doubleSided", void 0), e([r({ none: "none", back: "back", front: "front" })], l.prototype, "cullFace", void 0), e([y$1({ type: i })], l.prototype, "normalTexture", void 0), e([y$1({ type: i })], l.prototype, "occlusionTexture", void 0), e([y$1({ type: i })], l.prototype, "emissiveTexture", void 0), e([y$1({ type: [Number] })], l.prototype, "emissiveFactor", void 0), e([y$1({ type: a })], l.prototype, "pbrMetallicRoughness", void 0), l = e([i$1("esri.layer.support.I3SMaterialDefinition")], l);
let n = class extends a$1 {
};
e([y$1({ type: String, json: { read: { source: ["name", "index"], reader: (e2, t) => e2 != null ? e2 : `${t.index}` } } })], n.prototype, "name", void 0), e([r({ jpg: "jpg", png: "png", dds: "dds", "ktx-etc2": "ktx-etc2", basis: "basis" })], n.prototype, "format", void 0), n = e([i$1("esri.layer.support.I3STextureFormat")], n);
let u = class extends a$1 {
  constructor() {
    super(...arguments), this.atlas = false;
  }
};
e([y$1({ type: [n] })], u.prototype, "formats", void 0), e([y$1({ type: Boolean })], u.prototype, "atlas", void 0), u = e([i$1("esri.layer.support.I3STextureSetDefinition")], u);
let y = class extends a$1 {
};
e([r({ Float32: "Float32", UInt64: "UInt64", UInt32: "UInt32", UInt16: "UInt16", UInt8: "UInt8" })], y.prototype, "type", void 0), e([y$1({ type: Number })], y.prototype, "component", void 0), y = e([i$1("esri.layer.support.I3SGeometryAttribute")], y);
let c = class extends a$1 {
};
e([r({ draco: "draco" })], c.prototype, "encoding", void 0), e([y$1({ type: [String] })], c.prototype, "attributes", void 0), c = e([i$1("esri.layer.support.I3SGeometryCompressedAttributes")], c);
let d = class extends a$1 {
  constructor() {
    super(...arguments), this.offset = 0;
  }
};
e([y$1({ type: Number })], d.prototype, "offset", void 0), e([y$1({ type: y })], d.prototype, "position", void 0), e([y$1({ type: y })], d.prototype, "normal", void 0), e([y$1({ type: y })], d.prototype, "uv0", void 0), e([y$1({ type: y })], d.prototype, "color", void 0), e([y$1({ type: y })], d.prototype, "uvRegion", void 0), e([y$1({ type: y })], d.prototype, "featureId", void 0), e([y$1({ type: y })], d.prototype, "faceRange", void 0), e([y$1({ type: c })], d.prototype, "compressedAttributes", void 0), d = e([i$1("esri.layer.support.I3SGeometryBuffer")], d);
let m = class extends a$1 {
};
e([r({ triangle: "triangle" })], m.prototype, "topology", void 0), e([y$1()], m.prototype, "geometryBuffers", void 0), m = e([i$1("esri.layer.support.I3SGeometryDefinition")], m);
export { l, m, s, u };
