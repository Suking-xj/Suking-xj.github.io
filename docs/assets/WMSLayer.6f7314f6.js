var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,a=(t,r,n)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,l=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&a(e,r,t[r]);if(n)for(var r of n(t))i.call(t,r)&&a(e,r,t[r]);return e},o=(e,n)=>t(e,r(n));import{t as u,h as p,bN as d,aV as c,cw as m,p as y,y as h,co as f,cL as g,q as b,fO as x,al as w,cP as v,cc as E,br as N,j as S,fL as O,gp as I,fN as U,fM as R,cB as F,cC as L,cD as P,cH as A,f_ as _,r as M,U as j,dU as q,dG as T,cp as C,hz as V,bI as W,e8 as B,s as D,b7 as G,bm as H,gd as $,fi as k,hA as X,cG as J}from"./vendor.abf366c9.js";import{r as z}from"./scaleUtils.5e438c1b.js";import{l as Q}from"./ExportWMSImageParameters.82b1cc36.js";const Y=[[4001,4999],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3416,3416],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]],K={84:4326,83:4269,27:4267};function Z(e){if(!e)return null;const t={idCounter:-1};"string"==typeof e&&(e=(new DOMParser).parseFromString(e,"text/xml"));const r=e.documentElement;if("ServiceExceptionReport"===r.nodeName){const e=Array.prototype.slice.call(r.childNodes).map((e=>e.textContent)).join("\r\n");throw new p("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",e)}const n=ne("Capability",r),s=ne("Service",r),i=ne("Request",n);if(!n||!s||!i)return null;const a=ne("Layer",n);if(!a)return null;const l="WMS_Capabilities"===r.nodeName||"WMT_MS_Capabilities"===r.nodeName?r.getAttribute("version"):"1.3.0",o=ie("Title",s,"")||ie("Name",s,""),u=ie("AccessConstraints",s,""),c=ie("Abstract",s,""),m=parseInt(ie("MaxWidth",s,"5000"),10),y=parseInt(ie("MaxHeight",s,"5000"),10),h=oe(i,"GetMap"),f=le(i,"GetMap"),g=pe(a,l,t);let b,x,w,v,E=0;if(Array.prototype.slice.call(n.childNodes).forEach((e=>{"Layer"===e.nodeName&&(0===E?b=e:1===E?(g.name&&(g.name="",g.sublayers.push(pe(b,l,t))),g.sublayers.push(pe(e,l,t))):g.sublayers.push(pe(e,l,t)),E++)})),!g)return null;const N=g.fullExtents;if(x=g.sublayers,x||(x=[]),0===x.length&&x.push(g),w=g.extent,!w){const e=new d(x[0].extent);g.extent=e.toJSON(),w=g.extent}if(v=g.spatialReferences,!v.length&&x.length>0){const e=t=>{let r=[];return t.sublayers.forEach((t=>{!r.length&&t.spatialReferences.length&&(r=t.spatialReferences||e(t))})),r};x.forEach((t=>{v.length||(v=t.spatialReferences||e(t))}))}const S=le(i,"GetFeatureInfo");let O;if(S){const e=oe(i,"GetFeatureInfo");e.indexOf("text/html")>-1?O="text/html":e.indexOf("text/plain")>-1&&(O="text/plain")}if(!O){const e=function(t){t&&(t.queryable=!1,t.sublayers&&t.sublayers.forEach((t=>{e(t)})))};e(g)}const I=te(x),U=g.minScale||0,R=g.maxScale||0,F=g.dimensions,L=I.reduce(((e,t)=>e.concat(t.dimensions)),[]),P=F.concat(L).filter(ce);let A=null;if(P.length>0){let e=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY;P.forEach((r=>{const{extent:n}=r;!function(e){return Array.isArray(e)&&e.length>0&&e[0]instanceof Date}(n)?n.forEach((r=>{e=Math.min(e,r.min.getTime()),t=Math.max(t,r.max.getTime())})):n.forEach((r=>{e=Math.min(e,r.getTime()),t=Math.max(t,r.getTime())}))})),A={startTimeField:null,endTimeField:null,trackIdField:null,timeExtent:[e,t]}}return{copyright:u,description:c,dimensions:F,extent:w,fullExtents:N,featureInfoFormat:O,featureInfoUrl:S,mapUrl:f,maxWidth:m,maxHeight:y,maxScale:R,minScale:U,layers:I,spatialReferences:v,supportedImageFormatTypes:h,timeInfo:A,title:o,version:l}}function ee(e){return Y.some((([t,r])=>e>=t&&e<=r))}function te(e){let t=[];return e.forEach((e=>{t.push(e),e.sublayers&&e.sublayers.length&&(t=t.concat(te(e.sublayers)),delete e.sublayers)})),t}function re(e,t,r){var n;return null!=(n=t.getAttribute(e))?n:r}function ne(e,t){for(let r=0;r<t.childNodes.length;r++){const n=t.childNodes[r];if(de(n)&&n.nodeName===e)return n}return null}function se(e,t){const r=[];for(let n=0;n<t.childNodes.length;n++){const s=t.childNodes[n];de(s)&&s.nodeName===e&&r.push(s)}return r}function ie(e,t,r){const n=ne(e,t);return n?n.textContent:r}function ae(e,t,r){if(!e)return null;const n=parseFloat(e.getAttribute("minx")),s=parseFloat(e.getAttribute("miny")),i=parseFloat(e.getAttribute("maxx")),a=parseFloat(e.getAttribute("maxy"));let l,o,u,p;r?(l=isNaN(s)?-Number.MAX_VALUE:s,o=isNaN(n)?-Number.MAX_VALUE:n,u=isNaN(a)?Number.MAX_VALUE:a,p=isNaN(i)?Number.MAX_VALUE:i):(l=isNaN(n)?-Number.MAX_VALUE:n,o=isNaN(s)?-Number.MAX_VALUE:s,u=isNaN(i)?Number.MAX_VALUE:i,p=isNaN(a)?Number.MAX_VALUE:a);const m=new c({wkid:t});return new d({xmin:l,ymin:o,xmax:u,ymax:p,spatialReference:m})}function le(e,t){const r=ne(t,e);if(r){const e=ne("DCPType",r);if(e){const t=ne("HTTP",e);if(t){const e=ne("Get",t);if(e){let t=function(e,t,r,n){const s=ne(e,r);return s?re(t,s,n):n}("OnlineResource","xlink:href",e,null);if(t)return t.indexOf("&")===t.length-1&&(t=t.substring(0,t.length-1)),function(e,t){const r=[],n=m(e);for(const s in n.query)n.query.hasOwnProperty(s)&&-1===t.indexOf(s.toLowerCase())&&r.push(s+"="+n.query[s]);return n.path+(r.length?"?"+r.join("&"):"")}(t,["service","request"])}}}}return null}function oe(e,t){const r=se("Operation",e);if(0===r.length)return se("Format",ne(t,e)).map((e=>e.textContent));const n=[];return r.forEach((e=>{e.getAttribute("name")===t&&se("Format",e).forEach((e=>{n.push(e.textContent)}))})),n}function ue(e,t,r){const n=ne(t,e);if(!n)return r;const{textContent:s}=n;if(null==s||""===s)return r;const i=Number(s);return isNaN(i)?r:i}function pe(e,t,r){var n;if(!e)return null;const s={id:r.idCounter++,fullExtents:[],parentLayerId:null,queryable:"1"===e.getAttribute("queryable"),spatialReferences:[],sublayers:null},i=ne("LatLonBoundingBox",e),a=ne("EX_GeographicBoundingBox",e);let l=null;i&&(l=ae(i,4326)),a&&(l=new d(0,0,0,0,new c({wkid:4326})),l.xmin=parseFloat(ie("westBoundLongitude",a,"0")),l.ymin=parseFloat(ie("southBoundLatitude",a,"0")),l.xmax=parseFloat(ie("eastBoundLongitude",a,"0")),l.ymax=parseFloat(ie("northBoundLatitude",a,"0"))),i||a||(l=new d(-180,-90,180,90,new c({wkid:4326}))),s.minScale=ue(e,"MaxScaleDenominator",0),s.maxScale=ue(e,"MinScaleDenominator",0);const o=["1.0.0","1.1.0","1.1.1"].indexOf(t)>-1?"SRS":"CRS";return Array.prototype.slice.call(e.childNodes).forEach((e=>{if("Name"===e.nodeName)s.name=e.textContent||"";else if("Title"===e.nodeName)s.title=e.textContent||"";else if("Abstract"===e.nodeName)s.description=e.textContent||"";else if("BoundingBox"===e.nodeName){const r=e.getAttribute(o);if(r&&0===r.indexOf("EPSG:")){const n=parseInt(r.substring(5),10);0===n||isNaN(n)||l||(l="1.3.0"===t?ae(e,n,ee(n)):ae(e,n))}const n=r&&r.indexOf(":");if(n&&n>-1){let i=parseInt(r.substring(n+1,r.length),10);0===i||isNaN(i)||(i=K[i]?K[i]:i);const a="1.3.0"===t?ae(e,i,ee(i)):ae(e,i);s.fullExtents.push(a)}}else if(e.nodeName===o)e.textContent.split(" ").forEach((e=>{0===(e=e.indexOf(":")>-1?parseInt(e.split(":")[1],10):parseInt(e,10))||isNaN(e)||(K[e]&&(e=K[e]),-1===s.spatialReferences.indexOf(e)&&s.spatialReferences.push(e))}));else if("Style"!==e.nodeName||s.legendURL){if("Layer"===e.nodeName){const n=pe(e,t,r);n&&(n.parentLayerId=s.id,s.sublayers||(s.sublayers=[]),s.sublayers.push(n))}}else{const t=ne("LegendURL",e);if(t){const e=ne("OnlineResource",t);e&&(s.legendURL=e.getAttribute("xlink:href"))}}})),s.extent=null==(n=l)?void 0:n.toJSON(),s.dimensions=se("Dimension",e).filter((e=>e.getAttribute("name")&&e.getAttribute("units")&&e.textContent)).map((e=>{const t=e.getAttribute("name"),r=e.getAttribute("units"),n=e.textContent,s=e.getAttribute("unitSymbol"),i=e.getAttribute("default"),a="0"!==re("default",e,"0"),l="0"!==re("nearestValue",e,"0"),o="0"!==re("current",e,"0");return/^time$/i.test(t)&&/^ISO8601$/i.test(r)?{name:"time",units:"ISO8601",extent:he(n),default:he(i),multipleValues:a,nearestValue:l,current:o}:/^elevation$/i.test(t)?{name:"elevation",units:r,extent:me(n),unitSymbol:s,default:me(i),multipleValues:a,nearestValue:l}:{name:t,units:r,extent:ye(n),unitSymbol:s,default:ye(i),multipleValues:a,nearestValue:l}})),s}function de(e){return e.nodeType===Node.ELEMENT_NODE}function ce(e){return"time"===e.name}function me(e){if(!e)return null;const t=-1!==e.indexOf("/"),r=e.split(",");return t?r.map((e=>{const t=e.split("/");return t.length<2?null:{min:parseFloat(t[0]),max:parseFloat(t[1]),resolution:t.length>=3&&"0"!==t[2]?parseFloat(t[2]):void 0}})).filter((e=>e)):r.map((e=>parseFloat(e)))}function ye(e){if(!e)return null;const t=-1!==e.indexOf("/"),r=e.split(",");return t?r.map((e=>{const t=e.split("/");return t.length<2?null:{min:t[0],max:t[1],resolution:t.length>=3&&"0"!==t[2]?t[2]:void 0}})).filter((e=>e)):r}function he(e){if(!e)return null;const t=-1!==e.indexOf("/"),r=e.split(",");return t?r.map((e=>{const t=e.split("/");return t.length<2?null:{min:new Date(t[0]),max:new Date(t[1]),resolution:t.length>=3&&"0"!==t[2]?fe(t[2]):void 0}})).filter((e=>e)):r.map((e=>new Date(e)))}function fe(e){const t=e.match(/(?:p(\d+y|\d+(?:.|,)\d+y)?(\d+m|\d+(?:.|,)\d+m)?(\d+d|\d+(?:.|,)\d+d)?)?(?:t(\d+h|\d+(?:.|,)\d+h)?(\d+m|\d+(?:.|,)\d+m)?(\d+s|\d+(?:.|,)\d+s)?)?/i);return t?{years:ge(t[1]),months:ge(t[2]),days:ge(t[3]),hours:ge(t[4]),minutes:ge(t[5]),seconds:ge(t[6])}:null}function ge(e){if(!e)return 0;const t=e.match(/(?:\d+(?:.|,)\d+|\d+)/);if(!t)return 0;const r=t[0].replace(",",".");return Number(r)}function be(e){return e.toISOString().replace(/\.[0-9]{3}/,"")}const xe=new Set([102100,3857,102113,900913]),we=new Set([3395,54004]);var ve;let Ee=0,Ne=ve=class extends x{constructor(e){super(e),this._sublayersHandles=new w,this.dimensions=null,this.fullExtents=null,this.featureInfoFormat=null,this.featureInfoUrl=null,this.legendUrl=null,this.legendEnabled=!0,this.maxScale=0,this.minScale=0,this.popupEnabled=!1,this.queryable=!1,this.spatialReferences=null}get description(){return this._get("description")}set description(e){this._set("description",e)}get fullExtent(){return this._get("fullExtent")}set fullExtent(e){this._set("fullExtent",e)}readExtent(e,t){return(e=t.extent)?d.fromJSON(e):null}get id(){const e=this._get("id");return null==e?Ee++:e}set id(e){this._set("id",e)}readLegendUrl(e,t){return t?t.legendUrl||t.legendURL:null}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((t=>t.layer=e))}get name(){return this._get("name")}set name(e){this._set("name",e)}set sublayers(e){const t=this._get("sublayers");t&&(t.forEach((e=>{e.layer=null})),this._sublayersHandles.removeAll(),this._sublayersHandles=null),e&&(e.forEach((e=>{e.parent=this,e.layer=this.layer})),this._sublayersHandles.add([e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this.layer})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null}))])),this._set("sublayers",e)}castSublayers(e){return v(E.ofType(ve),e)}get title(){return this._get("title")}set title(e){this._set("title",e)}get visible(){return this._get("visible")}set visible(e){this._setAndNotifyLayer("visible",e)}clone(){const e=new ve;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent.clone()),this.hasOwnProperty("fullExtents")&&(e.fullExtents=this.fullExtents.map((e=>e.clone()))),this.hasOwnProperty("featureInfoFormat")&&(e.featureInfoFormat=this.featureInfoFormat),this.hasOwnProperty("featureInfoUrl")&&(e.featureInfoUrl=this.featureInfoUrl),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("legendEnabled")&&(e.legendEnabled=this.legendEnabled),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("name")&&(e.name=this.name),this.hasOwnProperty("parent")&&(e.parent=this.parent),this.hasOwnProperty("queryable")&&(e.queryable=this.queryable),this.hasOwnProperty("sublayers")&&(e.sublayers=this.sublayers&&this.sublayers.map((e=>e.clone()))),this.hasOwnProperty("spatialReferences")&&(e.spatialReferences=this.spatialReferences.map((e=>e))),this.hasOwnProperty("visible")&&(e.visible=this.visible),this.hasOwnProperty("title")&&(e.title=this.title),e}_setAndNotifyLayer(e,t){const r=this.layer;this._get(e)!==t&&(this._set(e,t),r&&r.emit("wms-sublayer-update",{propertyName:e,id:this.id}))}};y([h()],Ne.prototype,"description",null),y([h({readOnly:!0})],Ne.prototype,"dimensions",void 0),y([h({value:null})],Ne.prototype,"fullExtent",null),y([f("fullExtent",["extent"])],Ne.prototype,"readExtent",null),y([h()],Ne.prototype,"fullExtents",void 0),y([h()],Ne.prototype,"featureInfoFormat",void 0),y([h()],Ne.prototype,"featureInfoUrl",void 0),y([h({type:Number,json:{write:{enabled:!1,overridePolicy:()=>({ignoreOrigin:!0,enabled:!0})}}})],Ne.prototype,"id",null),y([h({type:String,json:{origins:{"web-document":{read:{source:["legendUrl","legendURL"]},write:{target:"legendUrl",ignoreOrigin:!0}}},read:{source:"legendURL"},write:{ignoreOrigin:!0}}})],Ne.prototype,"legendUrl",void 0),y([f(["web-document"],"legendUrl")],Ne.prototype,"readLegendUrl",null),y([h({value:!0,type:Boolean,json:{read:{source:"showLegend"},write:{target:"showLegend"},origins:{"web-map":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],Ne.prototype,"legendEnabled",void 0),y([h({value:null})],Ne.prototype,"layer",null),y([h()],Ne.prototype,"maxScale",void 0),y([h()],Ne.prototype,"minScale",void 0),y([h({type:String,value:null,json:{read:{source:"name"},write:{ignoreOrigin:!0}}})],Ne.prototype,"name",null),y([h()],Ne.prototype,"parent",void 0),y([h({type:Boolean,json:{read:{source:"showPopup"},write:{ignoreOrigin:!0,target:"showPopup"}}})],Ne.prototype,"popupEnabled",void 0),y([h({type:Boolean,json:{write:{ignoreOrigin:!0}}})],Ne.prototype,"queryable",void 0),y([h()],Ne.prototype,"sublayers",null),y([g("sublayers")],Ne.prototype,"castSublayers",null),y([h({type:[Number],json:{read:{source:"spatialReferences"}}})],Ne.prototype,"spatialReferences",void 0),y([h({type:String,value:null,json:{write:{ignoreOrigin:!0}}})],Ne.prototype,"title",null),y([h({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"}}})],Ne.prototype,"visible",null),Ne=ve=y([b("esri.layers.support.WMSSublayer")],Ne);var Se=Ne;const Oe=new N({bmp:"image/bmp",gif:"image/gif",jpg:"image/jpeg",png:"image/png",svg:"image/svg+xml"},{ignoreUnknown:!1});let Ie=class extends(S(O(I(U(R(F(L(P(A))))))))){constructor(...e){super(...e),this.allSublayers=new _({root:this,rootCollectionNames:["sublayers"],getChildrenFunction:e=>e.sublayers}),this.customParameters=null,this.customLayerParameters=null,this.copyright=null,this.description=null,this.dimensions=null,this.fullExtent=null,this.fullExtents=null,this.featureInfoFormat=null,this.featureInfoUrl=null,this.imageFormat=null,this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.legendEnabled=!0,this.mapUrl=null,this.isReference=null,this.operationalLayerType="WMS",this.spatialReference=null,this.spatialReferences=null,this.sublayers=null,this.type="wms",this.url=null,this.version=null,this.watch("sublayers",((e,t)=>{if(t){for(const e of t)e.layer=null;this.handles.remove("wms-sublayer")}if(e){for(const t of e)t.parent=this,t.layer=this;this.handles.add([e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null}))],"wms-sublayer")}}),!0)}normalizeCtorArgs(e,t){return"string"==typeof e?l({url:e},t):e}load(e){const t=M(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMS"]},e).then((()=>this._fetchService(t)),(()=>this._fetchService(t)))),Promise.resolve(this)}readFullExtentFromItemOrMap(e,t){const r=t.extent;return new d({xmin:r[0][0],ymin:r[0][1],xmax:r[1][0],ymax:r[1][1]})}writeFullExtent(e,t){t.extent=[[e.xmin,e.ymin],[e.xmax,e.ymax]]}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.indexOf("image/png")>-1?"image/png":r&&r[0]}readSpatialReferenceFromItemOrDocument(e,t){return new c(t.spatialReferences[0])}writeSpatialReferences(e,t){const r=this.spatialReference&&this.spatialReference.wkid;e&&r?(t.spatialReferences=e.filter((e=>e!==r)),t.spatialReferences.unshift(r)):t.spatialReferences=e}readSublayersFromItemOrMap(e,t,r){return Ue(t.layers,r,t.visibleLayers)}readSublayers(e,t,r){return Ue(t.layers,r)}writeSublayers(e,t,r,n){t.layers=[];const s=new Map,i=e.flatten((({sublayers:e})=>e&&e.toArray())).toArray();i.forEach((e=>{"number"==typeof e.parent.id&&(s.has(e.parent.id)?s.get(e.parent.id).push(e.id):s.set(e.parent.id,[e.id]))})),i.forEach((e=>{const r=l({sublayer:e},n),i=e.write({parentLayerId:"number"==typeof e.parent.id?e.parent.id:-1},r);if(s.has(e.id)&&(i.sublayerIds=s.get(e.id)),!e.sublayers&&e.name){const n=e.write({},r);delete n.id,t.layers.push(n)}})),t.visibleLayers=i.filter((e=>e.visible&&!e.sublayers)).map((e=>e.name))}createExportImageParameters(e,t,r,n){const s=n&&n.pixelRatio||1,i=z({extent:e,width:t})*s,a=new Q({layer:this,scale:i}),{xmin:o,ymin:p,xmax:d,ymax:c,spatialReference:m}=e,y=function(e,t){let r=e.wkid;return u(t)?r:(!t.includes(r)&&e.latestWkid&&(r=e.latestWkid),xe.has(r)?t.find((e=>xe.has(e)))||t.find((e=>we.has(e)))||102100:r)}(m,this.spatialReferences),h="1.3.0"===this.version&&ee(y)?`${p},${o},${c},${d}`:`${o},${p},${d},${c}`,f=a.toJSON();return l({bbox:h,["1.3.0"===this.version?"crs":"srs"]:isNaN(y)?void 0:"EPSG:"+y},f)}async fetchImage(e,t,r,n){var s,i;const a=this.mapUrl,u=this.createExportImageParameters(e,t,r,n);if(!u.layers){const e=document.createElement("canvas");return e.width=t,e.height=r,e}const p=null==n||null==(s=n.timeExtent)?void 0:s.start,d=null==n||null==(i=n.timeExtent)?void 0:i.end,c=p&&d?p.getTime()===d.getTime()?be(p):`${be(p)}/${be(d)}`:void 0,m={responseType:"image",query:this._mixCustomParameters(o(l({width:t,height:r},u),{time:c})),signal:null==n?void 0:n.signal};return null!=n&&n.timestamp&&(m.query=l({_ts:n.timestamp},m.query)),j(a,m).then((e=>e.data))}fetchFeatureInfo(e,t,r,n,s){const i=z({extent:e,width:t}),a=function(e){return e.length?e.filter((e=>e.popupEnabled&&e.name&&e.queryable)).map((e=>e.name)).join(","):""}(new Q({layer:this,scale:i}).visibleSublayers);if(!this.featureInfoUrl||!a)return null;const o="1.3.0"===this.version?{I:n,J:s}:{x:n,y:s},u=l({query_layers:a,request:"GetFeatureInfo",info_format:this.featureInfoFormat,feature_count:25,width:t,height:r},o),p=l(l({},this.createExportImageParameters(e,t,r)),u),d=this._mixCustomParameters(p),c=q(this.featureInfoUrl,d),m=document.createElement("iframe");m.src=c,m.frameBorder="0",m.marginHeight="0",m.marginWidth="0",m.style.width="100%",m.setAttribute("sandbox","");const y=new T({title:this.title,content:m});return new C({sourceLayer:this,popupTemplate:y})}findSublayerById(e){return this.allSublayers.find((t=>t.id===e))}findSublayerByName(e){return this.allSublayers.find((t=>t.name===e))}supportsSpatialReference(e){return V(this.url)||this.spatialReferences.some((t=>{const r=900913===t?c.WebMercator:new c({wkid:t});return W(r,e)}))}async _fetchService(e){if(!this.resourceInfo){this.parsedUrl.query&&this.parsedUrl.query.service&&(this.parsedUrl.query.SERVICE=this.parsedUrl.query.service,delete this.parsedUrl.query.service),this.parsedUrl.query&&this.parsedUrl.query.request&&(this.parsedUrl.query.REQUEST=this.parsedUrl.query.request,delete this.parsedUrl.query.request);const t=await j(this.parsedUrl.path,{query:l(l({SERVICE:"WMS",REQUEST:"GetCapabilities"},this.parsedUrl.query),this.customParameters),responseType:"xml",signal:e});this.resourceInfo=Z(t.data)}if(this.parsedUrl){const e=new B(this.parsedUrl.path);"https"!==e.scheme||e.port&&"443"!==e.port||-1!==D.request.httpsDomains.indexOf(e.host)||D.request.httpsDomains.push(e.host)}this.read(this.resourceInfo,{origin:"service"})}_mixCustomParameters(e){if(!this.customLayerParameters&&!this.customParameters)return e;const t=l(l({},this.customParameters),this.customLayerParameters);for(const r in t)e[r.toLowerCase()]=t[r];return e}};function Ue(e,t,r){const n=new Map;e.every((e=>null==e.id))&&(e=G(e)).forEach(((e,t)=>e.id=t));for(const i of e){const e=new Se;e.read(i,t),-1===(null==r?void 0:r.indexOf(e.name))&&(e.visible=!1),n.set(e.id,e)}const s=[];for(const i of e){const e=n.get(i.id);if(null!=i.parentLayerId&&i.parentLayerId>=0){const t=n.get(i.parentLayerId);t.sublayers||(t.sublayers=new E),t.sublayers.unshift(e)}else s.unshift(e)}return s}y([h({readOnly:!0})],Ie.prototype,"allSublayers",void 0),y([h({json:{type:Object,write:!0}})],Ie.prototype,"customParameters",void 0),y([h({json:{type:Object,write:!0}})],Ie.prototype,"customLayerParameters",void 0),y([h({type:String,json:{write:!0}})],Ie.prototype,"copyright",void 0),y([h()],Ie.prototype,"description",void 0),y([h({readOnly:!0})],Ie.prototype,"dimensions",void 0),y([h({json:{type:[[Number]],read:{source:"extent"},write:{target:"extent"},origins:{service:{read:{source:"extent"}}}}})],Ie.prototype,"fullExtent",void 0),y([f(["web-document","portal-item"],"fullExtent",["extent"])],Ie.prototype,"readFullExtentFromItemOrMap",null),y([H(["web-document","portal-item"],"fullExtent",{extent:{type:[[Number]]}})],Ie.prototype,"writeFullExtent",null),y([h()],Ie.prototype,"fullExtents",void 0),y([h({type:String,json:{write:{ignoreOrigin:!0}}})],Ie.prototype,"featureInfoFormat",void 0),y([h({type:String,json:{write:{ignoreOrigin:!0}}})],Ie.prototype,"featureInfoUrl",void 0),y([h({type:String,json:{origins:{"web-document":{default:"image/png",type:Oe.jsonValues,read:{reader:Oe.read,source:"format"},write:{writer:Oe.write,target:"format"}}}}})],Ie.prototype,"imageFormat",void 0),y([f("imageFormat",["supportedImageFormatTypes"])],Ie.prototype,"readImageFormat",null),y([h({type:Number,json:{read:{source:"maxHeight"},write:{target:"maxHeight"}}})],Ie.prototype,"imageMaxHeight",void 0),y([h({type:Number,json:{read:{source:"maxWidth"},write:{target:"maxWidth"}}})],Ie.prototype,"imageMaxWidth",void 0),y([h()],Ie.prototype,"imageTransparency",void 0),y([h($)],Ie.prototype,"legendEnabled",void 0),y([h({type:["show","hide","hide-children"]})],Ie.prototype,"listMode",void 0),y([h({type:String,json:{write:{ignoreOrigin:!0}}})],Ie.prototype,"mapUrl",void 0),y([h({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],Ie.prototype,"isReference",void 0),y([h({type:["WMS"]})],Ie.prototype,"operationalLayerType",void 0),y([h({type:c,json:{origins:{service:{read:{source:"extent.spatialReference"}}},write:!1}})],Ie.prototype,"spatialReference",void 0),y([f(["web-document","portal-item"],"spatialReference",["spatialReferences"])],Ie.prototype,"readSpatialReferenceFromItemOrDocument",null),y([h({type:[k],json:{read:{source:"spatialReferences"},write:{ignoreOrigin:!0}}})],Ie.prototype,"spatialReferences",void 0),y([H(["web-document","portal-item"],"spatialReferences")],Ie.prototype,"writeSpatialReferences",null),y([h({type:E.ofType(Se),json:{write:{target:"layers",overridePolicy(e,t,r){if(function(e,t){return e.some((e=>{for(const r in e)if(X(e,r,null,t))return!0;return!1}))}(this.allSublayers,r))return{ignoreOrigin:!0}}}}})],Ie.prototype,"sublayers",void 0),y([f(["web-document","portal-item"],"sublayers",["layers","visibleLayers"])],Ie.prototype,"readSublayersFromItemOrMap",null),y([f("service","sublayers",["layers"])],Ie.prototype,"readSublayers",null),y([H("sublayers",{layers:{type:[Se]},visibleLayers:{type:[String]}})],Ie.prototype,"writeSublayers",null),y([h({json:{read:!1},readOnly:!0,value:"wms"})],Ie.prototype,"type",void 0),y([h(J)],Ie.prototype,"url",void 0),y([h({type:String,json:{write:{ignoreOrigin:!0}}})],Ie.prototype,"version",void 0),Ie=y([b("esri.layers.WMSLayer")],Ie);var Re=Ie;export default Re;