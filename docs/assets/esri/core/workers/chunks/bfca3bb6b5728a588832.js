self.webpackChunkRemoteClient([150],{188:function(e,a,r){"use strict";r.r(a),r.d(a,"fromUrl",(function(){return o}));var n=r(0),t=r(16),l=r(21),s=r(54),i=r(151),u=r(271);async function o(e){var a;const s=null==(a=e.properties)?void 0:a.customParameters,o=await async function(e,a){let r=Object(i.e)(e);if(Object(n.g)(r)&&(r=await async function(e,a){const r=await f(e,a);let t=null,s=null;const u=r.type;if("Feature Layer"===u||"Table"===u?(t="FeatureServer",s=r.id):"indexedVector"===u?t="VectorTileServer":r.hasOwnProperty("mapName")?t="MapServer":r.hasOwnProperty("bandCount")&&r.hasOwnProperty("pixelSizeX")?t="ImageServer":r.hasOwnProperty("maxRecordCount")&&r.hasOwnProperty("allowGeometryUpdates")?t="FeatureServer":r.hasOwnProperty("streamUrls")&&(t="StreamServer"),!t)return null;const o=null!=s?Object(i.f)(e):null;return{title:Object(n.h)(o)&&r.name||Object(l.k)(e),serverType:t,sublayer:s,url:{path:Object(n.h)(o)?o.serviceUrl:Object(l.I)(e).path}}}(e,a)),Object(n.g)(r))throw new t.a("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e});const{serverType:s,sublayer:o}=r;let y;const d={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(s){case"MapServer":y=null!=o?"FeatureLayer":async function(e,a){return(await f(e,a)).tileInfo}(e,a).then(e=>e?"TileLayer":"MapImageLayer");break;case"ImageServer":y=f(e,a).then(e=>{const a=e.tileInfo&&e.tileInfo.format;return e.tileInfo?!a||"LERC"!==a.toUpperCase()||e.cacheType&&"elevation"!==e.cacheType.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer"});break;case"SceneServer":y=f(r.url.path,a).then(e=>{const a={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};if(e&&Array.isArray(e.layers)&&e.layers.length>0){const r=e.layers[0].layerType;if(null!=a[r])return a[r]}return"SceneLayer"});break;default:y=d[s]}const b="FeatureServer"===s,h={parsedUrl:r,Constructor:null,layerOrTableId:b?o:null,sublayerIds:null,tableIds:null},w=await y;if({FeatureLayer:!0,SceneLayer:!0}[w]&&null==o){const r=await c(e,s,a);if(b&&(h.sublayerInfos=r.layerInfos,h.tableInfos=r.tableInfos),1!==r.layerIds.length+r.tableIds.length)h.sublayerIds=r.layerIds,h.tableIds=r.tableIds;else if(b){var I,L;h.layerOrTableId=null!=(I=r.layerIds[0])?I:r.tableIds[0],h.sourceJSON=null!=(L=r.layerInfos[0])?L:r.tableInfos[0]}}return h.Constructor=await async function(e){return(0,u.a[e])()}(w),h}(e.url,s),d={...e.properties,url:e.url};if(!o.sublayerIds)return null!=o.layerOrTableId&&(d.layerId=o.layerOrTableId,d.sourceJSON=o.sourceJSON),new o.Constructor(d);const b=new(0,(await r.e(18).then(r.bind(null,356))).default)({title:o.parsedUrl.title});return function(e,a,r){function t(e,t){const l={...r,layerId:e,sublayerTitleMode:"service-name"};return Object(n.h)(t)&&(l.sourceJSON=t),new a.Constructor(l)}a.sublayerIds.forEach(r=>{const n=t(r,y(a.sublayerInfos,r));e.add(n)}),a.tableIds.forEach(r=>{const n=t(r,y(a.tableInfos,r));e.tables.add(n)})}(b,o,d),b}function y(e,a){return e?e.find(e=>e.id===a):null}async function c(e,a,r){var n,t;let l,s=!1;if("FeatureServer"===a){const a=await async function(e,a){var r,n;let t=await f(e,a);t=t||{},t.layers=(null==(r=t.layers)?void 0:r.filter(d))||[];const l={serviceJSON:t};if(t.currentVersion<10.5)return l;const s=await f(e+"/layers",a);return l.layersJSON={layers:(null==s||null==(n=s.layers)?void 0:n.filter(d))||[],tables:(null==s?void 0:s.tables)||[]},l}(e,r);s=!!a.layersJSON,l=a.layersJSON||a.serviceJSON}else l=await f(e,r);const i=null==(n=l)?void 0:n.layers,u=null==(t=l)?void 0:t.tables;return{layerIds:(null==i?void 0:i.map(e=>e.id).reverse())||[],tableIds:(null==u?void 0:u.map(e=>e.id).reverse())||[],layerInfos:s?i:[],tableInfos:s?u:[]}}function d(e){return!e.type||"Feature Layer"===e.type}async function f(e,a){return(await Object(s.default)(e,{responseType:"json",query:{f:"json",...a}})).data}},271:function(e,a,r){"use strict";r.d(a,"a",(function(){return n}));const n={BingMapsLayer:async()=>(await r.e(44).then(r.bind(null,426))).default,BuildingSceneLayer:async()=>(await Promise.all([r.e(1),r.e(2),r.e(3),r.e(17),r.e(76)]).then(r.bind(null,408))).default,CSVLayer:async()=>(await Promise.all([r.e(1),r.e(2),r.e(3),r.e(54)]).then(r.bind(null,427))).default,ElevationLayer:async()=>(await r.e(15).then(r.bind(null,418))).default,FeatureLayer:async()=>(await Promise.all([r.e(1),r.e(2),r.e(3),r.e(60)]).then(r.bind(null,167))).default,GroupLayer:async()=>(await Promise.all([r.e(18),r.e(146)]).then(r.bind(null,356))).default,GeoRSSLayer:async()=>(await r.e(47).then(r.bind(null,393))).default,ImageryLayer:async()=>(await Promise.all([r.e(1),r.e(10),r.e(14),r.e(46)]).then(r.bind(null,409))).default,ImageryTileLayer:async()=>(await Promise.all([r.e(1),r.e(10),r.e(14),r.e(61)]).then(r.bind(null,407))).default,IntegratedMeshLayer:async()=>(await r.e(40).then(r.bind(null,415))).default,KMLLayer:async()=>(await Promise.all([r.e(1),r.e(34)]).then(r.bind(null,420))).default,MapImageLayer:async()=>(await Promise.all([r.e(1),r.e(2),r.e(12),r.e(45)]).then(r.bind(null,360))).default,MapNotesLayer:async()=>(await Promise.all([r.e(1),r.e(2),r.e(3),r.e(49)]).then(r.bind(null,421))).default,OpenStreetMapLayer:async()=>(await Promise.all([r.e(11),r.e(160)]).then(r.bind(null,397))).default,PointCloudLayer:async()=>(await r.e(33).then(r.bind(null,411))).default,RouteLayer:async()=>(await Promise.all([r.e(1),r.e(2),r.e(3),r.e(55)]).then(r.bind(null,398))).default,SceneLayer:async()=>(await Promise.all([r.e(1),r.e(2),r.e(3),r.e(17),r.e(161)]).then(r.bind(null,428))).default,StreamLayer:async()=>(await Promise.all([r.e(1),r.e(2),r.e(41)]).then(r.bind(null,429))).default,TileLayer:async()=>(await Promise.all([r.e(1),r.e(2),r.e(12),r.e(48)]).then(r.bind(null,399))).default,UnknownLayer:async()=>(await r.e(73).then(r.bind(null,400))).default,UnsupportedLayer:async()=>(await r.e(74).then(r.bind(null,401))).default,VectorTileLayer:async()=>(await Promise.all([r.e(22),r.e(36)]).then(r.bind(null,410))).default,WebTileLayer:async()=>(await r.e(11).then(r.bind(null,311))).default,WMSLayer:async()=>(await r.e(37).then(r.bind(null,416))).default,WMTSLayer:async()=>(await Promise.all([r.e(11),r.e(162)]).then(r.bind(null,412))).default}}});