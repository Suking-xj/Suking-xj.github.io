var e=Object.defineProperty,t=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,a=(t,i,s)=>i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[i]=s,o=(e,t)=>{for(var i in t||(t={}))n.call(t,i)&&a(e,i,t[i]);if(s)for(var i of s(t))r.call(t,i)&&a(e,i,t[i]);return e},l=(e,s)=>t(e,i(s));import{U as d,ep as u,z as p,e_ as y,e$ as c,c8 as f,bS as m,bO as h,c2 as g,aK as b,b$ as j,c1 as I,f0 as F}from"./vendor.d5722712.js";import{I as _,N as E,T}from"./geojson.2bcb713a.js";import{i as q,u as x,s as w}from"./clientSideDefaults.a0485032.js";import{y as O,p as D}from"./quantizationUtils.752d3fe4.js";import{u as R}from"./FeatureStore.4f1fa230.js";import{Z as S}from"./QueryEngine.a109d81f.js";import{y as Q,d as v,c as k,u as P,h as C}from"./sourceUtils.c2f5808c.js";import"./json.7989af9b.js";import"./aaBoundingBox.e57e01b7.js";import"./PooledRBush.7d2ff985.js";import"./quickselect.e4940b29.js";import"./_commonjsHelpers.f2a458db.js";import"./centroid.93c1b848.js";import"./QueryEngineCapabilities.91d2568e.js";import"./WhereClause.2a4414a8.js";import"./timeSupport.9d80cc37.js";const Z={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};export default class{constructor(){this._queryEngine=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._requiredFields=this._fieldsIndex=this._createDefaultAttributes=null}async load(e){const t=[];await this._checkProjection(e.spatialReference);let i=null;e.url&&(i=(await d(e.url,{responseType:"json"})).data,await _(i));const s=E(i,{geometryType:e.geometryType}),n=e.fields||s.fields||[],r=null!=e.hasZ?e.hasZ:s.hasZ,a=s.geometryType,b=e.objectIdField||("number"===s.objectIdFieldType?s.objectIdFieldName:"OBJECTID")||"OBJECTID",j=e.spatialReference||u;let I=e.timeInfo;if(!a)throw new p("geojson-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if("string"===s.objectIdFieldType&&t.push({name:"geojson-layer:unsupported-id-type",message:"Feature ids are of type string and can't be honored."}),n===s.fields&&s.unknownFields.length>0&&t.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:s.unknownFields}}),b){let e=null;n.some((t=>t.name===b&&(e=t,!0)))?(e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):n.unshift({alias:b,name:b,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const o of n){if(null==o.name&&(o.name=o.alias),null==o.alias&&(o.alias=o.name),!o.name)throw new p("geojson-layer:invalid-field-name","field name is missing",{field:o});if(o.name===b&&(o.type="esriFieldTypeOID"),-1===y.jsonValues.indexOf(o.type))throw new p("geojson-layer:invalid-field-type",`invalid type for field "${o.name}"`,{field:o})}const F={};this._requiredFields=[];for(const o of n)if("esriFieldTypeOID"!==o.type&&"esriFieldTypeGlobalID"!==o.type){o.editable=null==o.editable||!!o.editable,o.nullable=null==o.nullable||!!o.nullable;const e=c(o);o.nullable||void 0!==e?F[o.name]=e:this._requiredFields.push(o)}if(this._fieldsIndex=new f(n),I){if(I.startTimeField){const e=this._fieldsIndex.get(I.startTimeField);e?(I.startTimeField=e.name,e.type="esriFieldTypeDate"):I.startTimeField=null}if(I.endTimeField){const e=this._fieldsIndex.get(I.endTimeField);e?(I.endTimeField=e.name,e.type="esriFieldTypeDate"):I.endTimeField=null}if(I.trackIdField){const e=this._fieldsIndex.get(I.trackIdField);e?I.trackIdField=e.name:(I.trackIdField=null,t.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:I}}))}I.startTimeField||I.endTimeField||(t.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:I}}),I=null)}const D={warnings:t,featureErrors:[],layerDefinition:l(o({},Z),{drawingInfo:q(a),templates:x(F),extent:null,geometryType:a,objectIdField:b,fields:n,hasZ:!!r,timeInfo:I})};this._queryEngine=new S({fields:n,geometryType:a,hasM:!1,hasZ:r,objectIdField:b,spatialReference:j,timeInfo:I,featureStore:new R({geometryType:a,hasM:!1,hasZ:r}),cacheSpatialQueries:!0}),this._createDefaultAttributes=w(F,b),this._nextObjectId=s.maxObjectId+1;const Q=T(i,{geometryType:a,hasZ:r,objectIdFieldName:"number"===s.objectIdFieldType?b:null});if(!m(j,u))for(const o of Q)o.geometry&&(o.geometry=h(O(g(o.geometry,a,r,!1),u,j)));return this._loadInitialFeatures(D,Q),D}async applyEdits(e){const{spatialReference:t,geometryType:i}=this._queryEngine;return await Promise.all([Q(t,i),D(e.adds,t),D(e.updates,t)]),this._applyEdits(e)}queryFeatures(e={},t={}){return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e={},t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e={},t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e={},t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)}_loadInitialFeatures(e,t){const{featureStore:i,objectIdField:s}=this._queryEngine,n=[];for(const r of t){const t=this._createDefaultAttributes(),i=v(this._fieldsIndex,this._requiredFields,t,r.attributes,!0,e.warnings);i?e.featureErrors.push(i):(this._assignObjectId(t,r.attributes,!0),r.attributes=t,r.objectId=t[s],n.push(r))}if(i.addMany(n),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){const{start:t,end:i}=this._queryEngine.timeExtent;e.layerDefinition.timeInfo.timeExtent=[t,i]}return e}_applyEdits(e){const{adds:t,updates:i,deletes:s}=e,n={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(n,t),i&&i.length&&this._applyUpdateEdits(n,i),s&&s.length){for(const e of s)n.deleteResults.push(k(e));this._queryEngine.featureStore.removeManyById(s)}return{fullExtent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent,featureEditResults:n}}_applyAddEdits(e,t){const{addResults:i}=e,{geometryType:s,hasM:n,hasZ:r,objectIdField:a,spatialReference:o,featureStore:l}=this._queryEngine,d=[];for(const u of t){if(u.geometry&&s!==b(u.geometry)){i.push(P("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),n=v(this._fieldsIndex,this._requiredFields,t,u.attributes);if(n)i.push(n);else{if(this._assignObjectId(t,u.attributes),u.attributes=t,null!=u.uid){const t=u.attributes[a];e.uidToObjectId[u.uid]=t}u.geometry&&(u.geometry=O(C(u.geometry,o),u.geometry.spatialReference,o)),d.push(u),i.push(k(u.attributes[a]))}}l.addMany(j([],d,s,r,n,a))}_applyUpdateEdits({updateResults:e},t){const{geometryType:i,hasM:s,hasZ:n,objectIdField:r,spatialReference:a,featureStore:o}=this._queryEngine;for(const l of t){const{attributes:t,geometry:d}=l,u=t&&t[r];if(null==u){e.push(P(`Identifier field ${r} missing`));continue}if(!o.has(u)){e.push(P(`Feature with object id ${u} missing`));continue}const p=I(o.getFeature(u),i,n,s);if(d){if(i!==b(d)){e.push(P("Incorrect geometry type."));continue}p.geometry=O(C(d,a),d.spatialReference,a)}if(t){const i=v(this._fieldsIndex,this._requiredFields,p.attributes,t);if(i){e.push(i);continue}}o.add(F(p,i,n,s,r)),e.push(k(u))}}_assignObjectId(e,t,i=!1){const s=this._queryEngine.objectIdField;i&&isFinite(t[s])?e[s]=t[s]:e[s]=this._nextObjectId++}async _checkProjection(e){try{await D(u,e)}catch{throw new p("geojson-layer","Projection not supported")}}}