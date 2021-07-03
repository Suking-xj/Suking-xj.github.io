var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,s=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r;import{bT as d,aa as i,c_ as l,a5 as n,c$ as o,d0 as u,d1 as p}from"./vendor.74d5941c.js";function c(e){var t,a;return!0===(null==e||null==(t=e.capabilities)||null==(a=t.operations)?void 0:a.supportsEditing)&&e&&(!("editingEnabled"in e)||e.editingEnabled)}async function h(e,o,p,c){let h,g;const f={edits:p,result:new Promise(((e,t)=>{h=e,g=t}))};e.emit("apply-edits",f);try{const{results:g,edits:f}=await async function(e,d,o,p){if(await e.load(),!function(e){return e&&null!=e.applyEdits}(d))return Promise.reject(new i(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e}));if(!e.editingEnabled)throw new i(`${e.type}-layer:editing-disabled`,"Editing is disabled for layer",{layer:e});const c=await function(e,d,o){const p=d&&(d.addFeatures||d.updateFeatures||d.deleteFeatures),c=d&&(d.addAttachments||d.updateAttachments||d.deleteAttachments);if(!d||!p&&!c)throw new i(`${e.type}-layer:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!e.capabilities.data.isVersioned&&o&&o.gdbVersion)throw new i(`${e.type}-layer:invalid-parameter`,"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!e.capabilities.editing.supportsRollbackOnFailure&&o&&o.rollbackOnFailureEnabled)throw new i(`${e.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");if(!e.capabilities.editing.supportsGlobalId&&o&&o.globalIdUsed)throw new i(`${e.type}-layer:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!e.capabilities.editing.supportsGlobalId&&c)throw new i(`${e.type}-layer:invalid-parameter`,"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if((!o||!o.globalIdUsed)&&c)throw new i(`${e.type}-layer:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true");const h=((e,d)=>{for(var i in d||(d={}))a.call(d,i)&&s(e,i,d[i]);if(t)for(var i of t(d))r.call(d,i)&&s(e,i,d[i]);return e})({},d);if(h.addFeatures=d&&l.isCollection(d.addFeatures)?d.addFeatures.toArray():h.addFeatures||[],h.updateFeatures=d&&l.isCollection(d.updateFeatures)?d.updateFeatures.toArray():h.updateFeatures||[],h.deleteFeatures=d&&l.isCollection(d.deleteFeatures)?d.deleteFeatures.toArray():h.deleteFeatures||[],h.addFeatures.length&&!e.capabilities.operations.supportsAdd)throw new i(`${e.type}-layer:unsupported-operation`,"Layer does not support adding features.");if(h.updateFeatures.length&&!e.capabilities.operations.supportsUpdate)throw new i(`${e.type}-layer:unsupported-operation`,"Layer does not support updating features.");if(h.deleteFeatures.length&&!e.capabilities.operations.supportsDelete)throw new i(`${e.type}-layer:unsupported-operation`,"Layer does not support deleting features.");h.addAttachments=h.addAttachments||[],h.updateAttachments=h.updateAttachments||[],h.deleteAttachments=h.deleteAttachments||[],h.addFeatures=h.addFeatures.map(b),h.updateFeatures=h.updateFeatures.map(b);const g=o&&o.globalIdUsed;return h.addFeatures.forEach((t=>function(e,t,a){y(e,t,a)}(t,e,g))),h.updateFeatures.forEach((t=>function(e,t,a){if(y(e,t,a),"geometry"in e&&n(e.geometry)&&!t.capabilities.editing.supportsGeometryUpdate)throw new i(`${t.type}-layer:unsupported-operation`,"Layer does not support geometry updates.")}(t,e,g))),h.deleteFeatures.forEach((t=>function(e,t,a){y(e,t,a)}(t,e,g))),h.addAttachments.forEach((t=>m(t,e))),h.updateAttachments.forEach((t=>m(t,e))),async function(e){const t=e.addFeatures,a=e.updateFeatures,r=t.concat(a).map((e=>e.geometry)),s=await u(r),d=t.length,i=a.length;return s.slice(0,d).forEach(((t,a)=>{e.addFeatures[a].geometry=t})),s.slice(d,d+i).forEach(((t,a)=>{e.updateFeatures[a].geometry=t})),e}(h)}(e,o,p);return c.addFeatures.length||c.updateFeatures.length||c.deleteFeatures.length||c.addAttachments.length||c.updateAttachments.length||c.deleteAttachments.length?{edits:c,results:await d.applyEdits(c,p)}:{edits:c,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}(e,o,p,c),w=e=>e.filter((e=>!e.error)).map(d),F={edits:f,addedFeatures:w(g.addFeatureResults),updatedFeatures:w(g.updateFeatureResults),deletedFeatures:w(g.deleteFeatureResults),addedAttachments:w(g.addAttachmentResults),updatedAttachments:w(g.updateAttachmentResults),deletedAttachments:w(g.deleteAttachmentResults)};return(F.addedFeatures.length||F.updatedFeatures.length||F.deletedFeatures.length||F.addedAttachments.length||F.updatedAttachments.length||F.deletedAttachments.length)&&e.emit("edits",F),h(F),g}catch(w){throw g(w),w}}function y(e,t,a){if(a){if("attributes"in e&&!e.attributes[t.globalIdField])throw new i(`${t.type}-layer:invalid-parameter`,"Feature should have 'globalId' when 'globalIdUsed' is true");if(!("attributes"in e)&&!e.globalId)throw new i(`${t.type}-layer:invalid-parameter`,"'globalId' of the feature should be passed when 'globalIdUsed' is true")}if("geometry"in e&&n(e.geometry)){if(e.geometry.hasZ&&!1===t.capabilities.data.supportsZ)throw new i(`${t.type}-layer:z-unsupported`,"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&!1===t.capabilities.data.supportsM)throw new i(`${t.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.")}}function m(e,t){const{feature:a,attachment:r}=e;if(!a||"attributes"in a&&!a.attributes[t.globalIdField])throw new i(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in a)&&!a.globalId)throw new i(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to 'globalId' of the parent feature");if(!r.globalId)throw new i(`${t.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!r.data&&!r.uploadId)throw new i(`${t.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(r.data instanceof File&&r.data.name||r.name))throw new i(`${t.type}-layer:invalid-parameter`,"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!t.capabilities.editing.supportsUploadWithItemId&&r.uploadId)throw new i(`${t.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof r.data){const e=o(r.data);if(e&&!e.isBase64)throw new i(`${t.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string")}}function b(e){const t=new p;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}export{h as applyEdits,c as isEditableLayer};