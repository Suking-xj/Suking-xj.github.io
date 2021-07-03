var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a, prop, b2[prop]);
    }
  return a;
};
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
import { bT as y$1, aa as s, c_ as L, a5 as r, c$ as V, d0 as L$1, d1 as n$1 } from "./vendor.74d5941c.js";
function l(e) {
  var t, a;
  return (e == null || (t = e.capabilities) == null || (a = t.operations) == null ? void 0 : a.supportsEditing) === true && e && (!("editingEnabled" in e) || e.editingEnabled);
}
function n(e) {
  return e && e.applyEdits != null;
}
function o(t, a, r2, s2) {
  return __async(this, null, function* () {
    let d, i;
    const l2 = { edits: r2, result: new Promise((e, t2) => {
      d = e, i = t2;
    }) };
    t.emit("apply-edits", l2);
    try {
      const { results: i2, edits: l3 } = yield p(t, a, r2, s2), n2 = (t2) => t2.filter((e) => !e.error).map(y$1), o2 = { edits: l3, addedFeatures: n2(i2.addFeatureResults), updatedFeatures: n2(i2.updateFeatureResults), deletedFeatures: n2(i2.deleteFeatureResults), addedAttachments: n2(i2.addAttachmentResults), updatedAttachments: n2(i2.updateAttachmentResults), deletedAttachments: n2(i2.deleteAttachmentResults) };
      return (o2.addedFeatures.length || o2.updatedFeatures.length || o2.deletedFeatures.length || o2.addedAttachments.length || o2.updatedAttachments.length || o2.deletedAttachments.length) && t.emit("edits", o2), d(o2), i2;
    } catch (n2) {
      throw i(n2), n2;
    }
  });
}
function p(e, t, r2, s$1) {
  return __async(this, null, function* () {
    if (yield e.load(), !n(t))
      return Promise.reject(new s(`${e.type}-layer:no-editing-support`, "Layer source does not support applyEdits capability", { layer: e }));
    if (!e.editingEnabled)
      throw new s(`${e.type}-layer:editing-disabled`, "Editing is disabled for layer", { layer: e });
    const d = yield u(e, r2, s$1);
    return d.addFeatures.length || d.updateFeatures.length || d.deleteFeatures.length || d.addAttachments.length || d.updateAttachments.length || d.deleteAttachments.length ? { edits: d, results: yield t.applyEdits(d, s$1) } : { edits: d, results: { addFeatureResults: [], updateFeatureResults: [], deleteFeatureResults: [], addAttachmentResults: [], updateAttachmentResults: [], deleteAttachmentResults: [] } };
  });
}
function u(e, t, r2) {
  const d = t && (t.addFeatures || t.updateFeatures || t.deleteFeatures), i = t && (t.addAttachments || t.updateAttachments || t.deleteAttachments);
  if (!t || !d && !i)
    throw new s(`${e.type}-layer:missing-parameters`, "'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");
  if (!e.capabilities.data.isVersioned && r2 && r2.gdbVersion)
    throw new s(`${e.type}-layer:invalid-parameter`, "'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");
  if (!e.capabilities.editing.supportsRollbackOnFailure && r2 && r2.rollbackOnFailureEnabled)
    throw new s(`${e.type}-layer:invalid-parameter`, "This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");
  if (!e.capabilities.editing.supportsGlobalId && r2 && r2.globalIdUsed)
    throw new s(`${e.type}-layer:invalid-parameter`, "This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");
  if (!e.capabilities.editing.supportsGlobalId && i)
    throw new s(`${e.type}-layer:invalid-parameter`, "'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");
  if ((!r2 || !r2.globalIdUsed) && i)
    throw new s(`${e.type}-layer:invalid-parameter`, "When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true");
  const l2 = __spreadValues({}, t);
  if (l2.addFeatures = t && L.isCollection(t.addFeatures) ? t.addFeatures.toArray() : l2.addFeatures || [], l2.updateFeatures = t && L.isCollection(t.updateFeatures) ? t.updateFeatures.toArray() : l2.updateFeatures || [], l2.deleteFeatures = t && L.isCollection(t.deleteFeatures) ? t.deleteFeatures.toArray() : l2.deleteFeatures || [], l2.addFeatures.length && !e.capabilities.operations.supportsAdd)
    throw new s(`${e.type}-layer:unsupported-operation`, "Layer does not support adding features.");
  if (l2.updateFeatures.length && !e.capabilities.operations.supportsUpdate)
    throw new s(`${e.type}-layer:unsupported-operation`, "Layer does not support updating features.");
  if (l2.deleteFeatures.length && !e.capabilities.operations.supportsDelete)
    throw new s(`${e.type}-layer:unsupported-operation`, "Layer does not support deleting features.");
  l2.addAttachments = l2.addAttachments || [], l2.updateAttachments = l2.updateAttachments || [], l2.deleteAttachments = l2.deleteAttachments || [], l2.addFeatures = l2.addFeatures.map(b), l2.updateFeatures = l2.updateFeatures.map(b);
  const n2 = r2 && r2.globalIdUsed;
  return l2.addFeatures.forEach((t2) => c(t2, e, n2)), l2.updateFeatures.forEach((t2) => y(t2, e, n2)), l2.deleteFeatures.forEach((t2) => m(t2, e, n2)), l2.addAttachments.forEach((t2) => g(t2, e)), l2.updateAttachments.forEach((t2) => g(t2, e)), f(l2);
}
function h(e, r$1, s$1) {
  if (s$1) {
    if ("attributes" in e && !e.attributes[r$1.globalIdField])
      throw new s(`${r$1.type}-layer:invalid-parameter`, "Feature should have 'globalId' when 'globalIdUsed' is true");
    if (!("attributes" in e) && !e.globalId)
      throw new s(`${r$1.type}-layer:invalid-parameter`, "'globalId' of the feature should be passed when 'globalIdUsed' is true");
  }
  if ("geometry" in e && r(e.geometry)) {
    if (e.geometry.hasZ && r$1.capabilities.data.supportsZ === false)
      throw new s(`${r$1.type}-layer:z-unsupported`, "Layer does not support z values while feature has z values.");
    if (e.geometry.hasM && r$1.capabilities.data.supportsM === false)
      throw new s(`${r$1.type}-layer:m-unsupported`, "Layer does not support m values while feature has m values.");
  }
}
function c(e, t, a) {
  h(e, t, a);
}
function m(e, t, a) {
  h(e, t, a);
}
function y(e, r$1, s$1) {
  if (h(e, r$1, s$1), "geometry" in e && r(e.geometry) && !r$1.capabilities.editing.supportsGeometryUpdate)
    throw new s(`${r$1.type}-layer:unsupported-operation`, "Layer does not support geometry updates.");
}
function g(e, t) {
  const { feature: s$1, attachment: d } = e;
  if (!s$1 || "attributes" in s$1 && !s$1.attributes[t.globalIdField])
    throw new s(`${t.type}-layer:invalid-parameter`, "Attachment should have reference to a feature with 'globalId'");
  if (!("attributes" in s$1) && !s$1.globalId)
    throw new s(`${t.type}-layer:invalid-parameter`, "Attachment should have reference to 'globalId' of the parent feature");
  if (!d.globalId)
    throw new s(`${t.type}-layer:invalid-parameter`, "Attachment should have 'globalId'");
  if (!d.data && !d.uploadId)
    throw new s(`${t.type}-layer:invalid-parameter`, "Attachment should have 'data' or 'uploadId'");
  if (!(d.data instanceof File && !!d.data.name) && !d.name)
    throw new s(`${t.type}-layer:invalid-parameter`, "'name' is required when attachment is specified as Base64 encoded string using 'data'");
  if (!t.capabilities.editing.supportsUploadWithItemId && d.uploadId)
    throw new s(`${t.type}-layer:invalid-parameter`, "This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");
  if (typeof d.data == "string") {
    const e2 = V(d.data);
    if (e2 && !e2.isBase64)
      throw new s(`${t.type}-layer:invalid-parameter`, "Attachment 'data' should be a Blob, File or Base64 encoded string");
  }
}
function f(e) {
  return __async(this, null, function* () {
    const t = e.addFeatures, a = e.updateFeatures, r2 = t.concat(a).map((e2) => e2.geometry), s2 = yield L$1(r2), d = t.length, l2 = a.length;
    return s2.slice(0, d).forEach((t2, a2) => {
      e.addFeatures[a2].geometry = t2;
    }), s2.slice(d, d + l2).forEach((t2, a2) => {
      e.updateFeatures[a2].geometry = t2;
    }), e;
  });
}
function b(e) {
  const t = new n$1();
  return e.attributes || (e.attributes = {}), t.geometry = e.geometry, t.attributes = e.attributes, t;
}
export { o as applyEdits, l as isEditableLayer };
