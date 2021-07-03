var e,t=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,o=(e,r,i)=>r in e?t(e,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[r]=i,n=(e,t)=>{for(var r in t||(t={}))a.call(t,r)&&o(e,r,t[r]);if(s)for(var r of s(t))l.call(t,r)&&o(e,r,t[r]);return e},u=(e,t)=>r(e,i(t));import{ae as c,af as d,cr as p,eP as m,ag as h,dA as y,dQ as f,c_ as g,iJ as v,iK as w,aa as x,_ as S,bF as I,gR as M,gT as T,gS as L,dY as P,dZ as b,d_ as E,e1 as O,b3 as F,dI as C,aj as _,bT as R,dD as j,c4 as V}from"./vendor.74d5941c.js";import{a as U,x as A}from"./WebTileLayer.0a77deda.js";let N=e=class extends y{constructor(e){super(e),this.fullExtent=null,this.id=null,this.tileInfo=null}clone(){const t=new e;return this.hasOwnProperty("fullExtent")&&(t.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(t.id=this.id),this.hasOwnProperty("tileInfo")&&(t.tileInfo=this.tileInfo&&this.tileInfo.clone()),t}};c([d({type:p,json:{read:{source:"fullExtent"}}})],N.prototype,"fullExtent",void 0),c([d({type:String,json:{read:{source:"id"}}})],N.prototype,"id",void 0),c([d({type:m,json:{read:{source:"tileInfo"}}})],N.prototype,"tileInfo",void 0),N=e=c([h("esri.layer.support.TileMatrixSet")],N);var W,k=N;let D=W=class extends y{constructor(e){super(e),this.id=null,this.title=null,this.description=null,this.legendUrl=null}clone(){const e=new W;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("isDefault")&&(e.isDefault=this.isDefault),this.hasOwnProperty("keywords")&&(e.keywords=this.keywords&&this.keywords.slice()),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("title")&&(e.title=this.title),e}};c([d({json:{read:{source:"id"}}})],D.prototype,"id",void 0),c([d({json:{read:{source:"title"}}})],D.prototype,"title",void 0),c([d({json:{read:{source:"abstract"}}})],D.prototype,"description",void 0),c([d({json:{read:{source:"legendUrl"}}})],D.prototype,"legendUrl",void 0),c([d({json:{read:{source:"isDefault"}}})],D.prototype,"isDefault",void 0),c([d({json:{read:{source:"keywords"}}})],D.prototype,"keywords",void 0),D=W=c([h("esri.layer.support.WMTSStyle")],D);var K,B=D;let H=K=class extends y{constructor(e){super(e),this.fullExtent=null,this.imageFormats=null,this.id=null,this.layer=null,this.styles=null,this.tileMatrixSetId=null,this.tileMatrixSets=null}get description(){return this._get("description")}set description(e){this._set("description",e)}readFullExtent(e,t){return(e=t.fullExtent)?p.fromJSON(e):null}get imageFormat(){let e=this._get("imageFormat");return e||(e=this.imageFormats&&this.imageFormats.length?this.imageFormats[0]:""),e}set imageFormat(e){const t=this.imageFormats;e&&(e.indexOf("image/")>-1||t&&-1===t.indexOf(e))&&(-1===e.indexOf("image/")&&(e="image/"+e),t&&-1===t.indexOf(e))?console.error("The layer doesn't support the format of "+e):this._set("imageFormat",e)}get styleId(){let e=this._get("styleId");return e||(e=this.styles&&this.styles.length?this.styles.getItemAt(0).id:""),e}set styleId(e){this._set("styleId",e)}get title(){return this._get("title")}set title(e){this._set("title",e)}get tileMatrixSet(){return this.tileMatrixSets?this.tileMatrixSets.find((e=>e.id===this.tileMatrixSetId)):null}clone(){const e=new K;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("imageFormats")&&(e.imageFormats=this.imageFormats&&this.imageFormats.slice()),this.hasOwnProperty("imageFormat")&&(e.imageFormat=this.imageFormat),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("styleId")&&(e.styleId=this.styleId),this.hasOwnProperty("styles")&&(e.styles=this.styles&&this.styles.clone()),this.hasOwnProperty("tileMatrixSetId")&&(e.tileMatrixSetId=this.tileMatrixSetId),this.hasOwnProperty("tileMatrixSets")&&(e.tileMatrixSets=this.tileMatrixSets.clone()),this.hasOwnProperty("title")&&(e.title=this.title),e}};c([d()],H.prototype,"description",null),c([d()],H.prototype,"fullExtent",void 0),c([f("fullExtent",["fullExtent"])],H.prototype,"readFullExtent",null),c([d()],H.prototype,"imageFormat",null),c([d({json:{read:{source:"formats"}}})],H.prototype,"imageFormats",void 0),c([d()],H.prototype,"id",void 0),c([d()],H.prototype,"layer",void 0),c([d()],H.prototype,"styleId",null),c([d({type:g.ofType(B),json:{read:{source:"styles"}}})],H.prototype,"styles",void 0),c([d({value:null,json:{write:{ignoreOrigin:!0}}})],H.prototype,"title",null),c([d()],H.prototype,"tileMatrixSetId",void 0),c([d({readOnly:!0})],H.prototype,"tileMatrixSet",null),c([d({type:g.ofType(k),json:{read:{source:"tileMatrixSets"}}})],H.prototype,"tileMatrixSets",void 0),H=K=c([h("esri.layers.support.WMTSSublayer")],H);var G=H;const J=90.71428571428571,q=[[3819,3819],[3821,3824],[3889,3889],[3906,3906],[4001,4025],[4027,4036],[4039,4047],[4052,4055],[4074,4075],[4080,4081],[4120,4176],[4178,4185],[4188,4216],[4218,4289],[4291,4304],[4306,4319],[4322,4326],[4463,4463],[4470,4470],[4475,4475],[4483,4483],[4490,4490],[4555,4558],[4600,4646],[4657,4765],[4801,4811],[4813,4821],[4823,4824],[4901,4904],[5013,5013],[5132,5132],[5228,5229],[5233,5233],[5246,5246],[5252,5252],[5264,5264],[5324,5340],[5354,5354],[5360,5360],[5365,5365],[5370,5373],[5381,5381],[5393,5393],[5451,5451],[5464,5464],[5467,5467],[5489,5489],[5524,5524],[5527,5527],[5546,5546],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3038,3051],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3150,3151],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3389,3390],[3416,3417],[3833,3841],[3844,3850],[3854,3854],[3873,3885],[3907,3910],[4026,4026],[4037,4038],[4417,4417],[4434,4434],[4491,4554],[4839,4839],[5048,5048],[5105,5130],[5253,5259],[5269,5275],[5343,5349],[5479,5482],[5518,5519],[5520,5520],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]];function $(e,t){var r,i;e=e.replace(/ows:/gi,"");const s=(new DOMParser).parseFromString(e,"text/xml").documentElement,a=new Map,l=new Map,o=z("Contents",s);if(!o)throw new x("wmtslayer:wmts-capabilities-xml-is-not-valid");const n=z("OperationsMetadata",s),u=null==n?void 0:n.querySelector("[name='GetTile']"),c=null==u?void 0:u.getElementsByTagName("Get"),d=c&&Array.prototype.slice.call(c),p=null!=(r=(null==t||null==(i=t.url)?void 0:i.indexOf("https"))>-1)&&r;let m,h,y=t.serviceMode,f=t&&t.url;if(d&&d.length&&d.some((e=>{const t=z("Constraint",e);return!t||ee("AllowedValues","Value",y,t)?(f=e.attributes[0].nodeValue,!0):(!t||ee("AllowedValues","Value","RESTful",t)||ee("AllowedValues","Value","REST",t)?h=e.attributes[0].nodeValue:t&&!ee("AllowedValues","Value","KVP",t)||(m=e.attributes[0].nodeValue),!1)})),!f)if(h)f=h,y="RESTful";else if(m)f=m,y="KVP";else{const e=z("ServiceMetadataURL",s);f=e&&e.getAttribute("xlink:href")}const g=f.indexOf("1.0.0/");-1===g&&"RESTful"===y?f+="/":g>-1&&(f=f.substring(0,g)),"KVP"===y&&(f+=g>-1?"":"?"),p&&(f=f.replace(/^http:/i,"https:"));const v=Z("ServiceIdentification>AccessConstraints",s),w=Q("Layer",o),S=Q("TileMatrixSet",o);return{copyright:v,layers:w.map((e=>{const t=Z("Identifier",e);return a.set(t,e),function(e,t,r,i){const s=Z("Abstract",t),a=X("Format",t);return{id:e,fullExtent:re(t),description:s,formats:a,styles:ie(t,i),title:Z("Title",t),tileMatrixSets:se(t,r)}}(t,e,S,p)})),tileUrl:f,serviceMode:y,layerMap:a,dimensionMap:l}}function Y(e){return e.nodeType===Node.ELEMENT_NODE}function z(e,t){for(let r=0;r<t.childNodes.length;r++){const i=t.childNodes[r];if(Y(i)&&i.nodeName===e)return i}return null}function Q(e,t){const r=[];for(let i=0;i<t.childNodes.length;i++){const s=t.childNodes[i];Y(s)&&s.nodeName===e&&r.push(s)}return r}function X(e,t){const r=[];for(let i=0;i<t.childNodes.length;i++){const s=t.childNodes[i];Y(s)&&s.nodeName===e&&r.push(s)}return r.map((e=>e.textContent))}function Z(e,t){return e.split(">").forEach((e=>{t&&(t=z(e,t))})),t&&t.textContent}function ee(e,t,r,i){let s;return Array.prototype.slice.call(i.childNodes).some((i=>{if(i.nodeName.indexOf(e)>-1){const e=z(t,i),a=e&&e.textContent;if(a===r||r.split(":")&&r.split(":")[1]===a)return s=i,!0}return!1})),s}function te(e,t){const r=[],i=e.layerMap.get(t);if(!i)return;const s=Q("ResourceURL",i),a=Q("Dimension",i);let l,o,n,u;return a.length&&(l=Z("Identifier",a[0]),o=X("Default",a[0])||X("Value",a[0])),a.length>1&&(n=Z("Identifier",a[1]),u=X("Default",a[1])||X("Value",a[1])),e.dimensionMap.set(t,{dimensions:o,dimensions2:u}),s.forEach((e=>{let t=e.getAttribute("template");if("tile"===e.getAttribute("resourceType")){if(l&&o.length)if(t.indexOf("{"+l+"}")>-1)t=t.replace("{"+l+"}","{dimensionValue}");else{const e=t.toLowerCase().indexOf("{"+l.toLowerCase()+"}");e>-1&&(t=t.substring(0,e)+"{dimensionValue}"+t.substring(e+l.length+2))}if(n&&u.length)if(t.indexOf("{"+n+"}")>-1)t=t.replace("{"+n+"}","{dimensionValue2}");else{const e=t.toLowerCase().indexOf("{"+n.toLowerCase()+"}");e>-1&&(t=t.substring(0,e)+"{dimensionValue2}"+t.substring(e+n.length+2))}r.push({template:t,format:e.getAttribute("format"),resourceType:"tile"})}})),r}function re(e){const t=z("WGS84BoundingBox",e),r=t?Z("LowerCorner",t).split(" "):["-180","-90"],i=t?Z("UpperCorner",t).split(" "):["180","90"];return{xmin:parseFloat(r[0]),ymin:parseFloat(r[1]),xmax:parseFloat(i[0]),ymax:parseFloat(i[1]),spatialReference:{wkid:4326}}}function ie(e,t){return Q("Style",e).map((e=>{const r=z("LegendURL",e),i=z("Keywords",e),s=i&&X("Keyword",i);let a=r&&r.getAttribute("xlink:href");return t&&(a=a&&a.replace(/^http:/i,"https:")),{abstract:Z("Abstract",e),id:Z("Identifier",e),isDefault:"true"===e.getAttribute("isDefault"),keywords:s,legendUrl:a,title:Z("Title",e)}}))}function se(e,t){return Q("TileMatrixSetLink",e).map((e=>z("TileMatrixSet",e).textContent)).map((r=>function(e,t,r){const i=X("TileMatrix",ee("TileMatrixSetLink","TileMatrixSet",e,t)),s=r.find((t=>{const r=z("Identifier",t),i=r&&r.textContent;return!!(i===e||e.split(":")&&e.split(":")[1]===i)})),a=function(e){let t=Z("SupportedCRS",e);t&&(t=t.toLowerCase());let r=parseInt(t.split(":").pop(),10);900913!==r&&3857!==r||(r=102100);let i=!1;t.indexOf("crs84")>-1||t.indexOf("crs:84")>-1?(r=4326,i=!0):t.indexOf("crs83")>-1||t.indexOf("crs:83")>-1?(r=4269,i=!0):(t.indexOf("crs27")>-1||t.indexOf("crs:27")>-1)&&(r=4267,i=!0);const s=new I({wkid:r}),a=Z("TopLeftCorner",z("TileMatrix",e)).split(" "),l=a[0].split("E").map((e=>Number(e))),o=a[1].split("E").map((e=>Number(e)));let n,u=l[0],c=o[0];l.length>1&&(u=l[0]*10**l[1]),o.length>1&&(c=o[0]*10**o[1]);const d=i&&4326===r&&90===u&&-180===c;return q.some(((e,a)=>{const l=Number(t.split(":").pop());return l>=e[0]&&l<=e[1]||4326===r&&(!i||d)?(n=new S(c,u,s),!0):(a===q.length-1&&(n=new S(u,c,s)),!1)})),n}(s),l=a.spatialReference,o=l.wkid,n=z("TileMatrix",s),u=[parseInt(Z("TileWidth",n),10),parseInt(Z("TileHeight",n),10)],c=[];i.length?i.forEach(((t,r)=>{const i=ee("TileMatrix","Identifier",t,s);c.push(ae(i,o,r,e))})):Q("TileMatrix",s).forEach(((t,r)=>{c.push(ae(t,o,r,e))}));const d=function(e,t,r,i){const s=z("BoundingBox",e);let a,l,o,n,u,c;if(s&&(a=Z("LowerCorner",s).split(" "),l=Z("UpperCorner",s).split(" ")),a&&a.length>1&&l&&l.length>1)o=parseFloat(a[0]),u=parseFloat(a[1]),n=parseFloat(l[0]),c=parseFloat(l[1]);else{const s=z("TileMatrix",e),a=parseFloat(Z("MatrixWidth",s)),l=parseFloat(Z("MatrixHeight",s));o=t.x,c=t.y,n=o+a*r[0]*i.resolution,u=c-l*r[1]*i.resolution}return new p(o,u,n,c,t.spatialReference)}(s,a,u,c[0]);return{id:e,fullExtent:d.toJSON(),tileInfo:new m({dpi:96,spatialReference:l,size:u,origin:a,lods:c}).toJSON()}}(r,e,t)))}function ae(e,t,r,i){const s=Z("Identifier",e),a=Z("ScaleDenominator",e).split("E").map((e=>Number(e)));let l;l=a.length>1?a[0]*10**a[1]:a[0];const o=le(t,l,i);return l*=96/J,{level:r,levelValue:s,scale:l,resolution:o}}function le(e,t,r){let i;return i=v.hasOwnProperty(String(e))?v.values[v[e]]:"default028mm"===r?6370997*Math.PI/180:w(e).metersPerDegree,7*t/25e3/i}const oe={"image/png":".png","image/png8":".png","image/png24":".png","image/png32":".png","image/jpg":".jpg","image/jpeg":".jpeg","image/gif":".gif","image/bmp":".bmp","image/tiff":".tif","image/jpgpng":"","image/jpegpng":"","image/unknown":""},ne=new Set(["version","service","request","layer","style","format","tilematrixset","tilematrix","tilerow","tilecol"]);let ue=class extends(M(T(L(P(b(E(O))))))){constructor(...e){super(...e),this._sublayersHandles=new F,this.copyright="",this.customParameters=null,this.customLayerParameters=null,this.fullExtent=null,this.operationalLayerType="WebTiledLayer",this.resourceInfo=null,this.serviceMode="RESTful",this.sublayers=null,this.type="wmts",this.version="1.0.0",this.watch("activeLayer",((e,t)=>{t&&(t.layer=null),e&&(e.layer=this)}),!0),this.watch("sublayers",((e,t)=>{t&&(t.forEach((e=>{e.layer=null})),this._sublayersHandles.removeAll(),this._sublayersHandles=null),e&&(e.forEach((e=>{e.layer=this})),this._sublayersHandles||(this._sublayersHandles=new F),this._sublayersHandles.add([e.on("after-add",(({item:e})=>{e.layer=this})),e.on("after-remove",(({item:e})=>{e.layer=null}))]))}),!0)}normalizeCtorArgs(e,t){return"string"==typeof e?n({url:e},t):e}load(e){if("KVP"===this.serviceMode||"RESTful"===this.serviceMode)return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMTS"]},e).then((()=>this._fetchService(e))).catch((e=>{throw new x("wmtslayer:unsupported-service-data","Invalid response from the WMTS service.",{error:e})}))),Promise.resolve(this);console.error("WMTS mode could only be 'KVP' or 'RESTful'")}get activeLayer(){return this._get("activeLayer")}set activeLayer(e){this._set("activeLayer",e)}readActiveLayerFromService(e,t,r){let i;return this.activeLayer?t.layers.some((e=>e.id===this.activeLayer.id&&(i=e,!0))):(this.activeLayer=new G,i=t.layers[0]),this.activeLayer.read(i,r),this.activeLayer}readActiveLayerFromItemOrWebDoc(e,t){const{templateUrl:r,wmtsInfo:i}=t,s=r?this._getLowerCasedUrlParams(r):null,a=i&&i.layerIdentifier;let l=null;const o=i&&i.tileMatrixSet;o&&(Array.isArray(o)?o.length&&(l=o[0]):l=o);const n=s&&s.format,u=s&&s.style;return new G({id:a,imageFormat:n,styleId:u,tileMatrixSetId:l})}writeActiveLayer(e,t,r,i){const s=this.activeLayer;t.templateUrl=this.getUrlTemplate(s.id,s.tileMatrixSetId,s.imageFormat,s.styleId);const a=C("tileMatrixSet.tileInfo",s);t.tileInfo=a?a.toJSON(i):null,t.wmtsInfo=u(n({},t.wmtsInfo),{layerIdentifier:s.id,tileMatrixSet:s.tileMatrixSetId})}readCustomParameters(e,t){const r=t.wmtsInfo;return r?this._mergeParams(r.customParameters,r.url):null}get fullExtents(){const e=[];return this.activeLayer.tileMatrixSets.forEach((t=>{t.fullExtent&&e.push(t.fullExtent)})),e}readServiceMode(e,t){return t.templateUrl.indexOf("?")>-1?"KVP":"RESTful"}readSublayersFromService(e,t,r){return function(e,t){return e.map((e=>{const r=new G;return r.read(e,t),r}))}(t.layers,r)}get supportedSpatialReferences(){return this.activeLayer.tileMatrixSets.map((e=>e.tileInfo.spatialReference)).toArray()}get title(){var e,t;return null!=(e=null==(t=this.activeLayer)?void 0:t.title)?e:"Layer"}set title(e){e?this._override("title",e):this._clearOverride("title")}get url(){return this._get("url")}set url(e){e&&"/"===e.substr(-1)?this._set("url",e.slice(0,-1)):this._set("url",e)}createWebTileLayer(e){const t=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId),r=this._getTileMatrixSetById(e.tileMatrixSetId).tileInfo,i=e.fullExtent,s=new U({layerIdentifier:e.id,tileMatrixSet:e.tileMatrixSetId,url:this.url});return this.customLayerParameters&&(s.customLayerParameters=this.customLayerParameters),this.customParameters&&(s.customParameters=this.customParameters),new A({fullExtent:i,urlTemplate:t,tileInfo:r,wmtsInfo:s})}fetchTile(e,t,r){const i=this.getTileUrl(e,t,r);return _(i,{responseType:"image"}).then((e=>e.data))}findSublayerById(e){return this.sublayers.find((t=>t.id===e))}getTileUrl(e,t,r){const i=this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId).tileInfo.lods[e],s=i?i.levelValue?i.levelValue:`${i.level}`:`${e}`;let a=this.resourceInfo?"":function(e,t,r,i,s,a,l,o){const{dimensionMap:n}=e,u=te(e,t),c=n.get(t).dimensions&&n.get(t).dimensions[0],d=n.get(t).dimensions2&&n.get(t).dimensions2[0];let p="";if(u&&u.length>0){let e=null;u.some((t=>t.format===i&&(e=t,!0))),e||(e=u[l%u.length]),p=e.template.replace(/\{Style\}/gi,s).replace(/\{TileMatrixSet\}/gi,r).replace(/\{TileMatrix\}/gi,a).replace(/\{TileRow\}/gi,""+l).replace(/\{TileCol\}/gi,""+o).replace(/\{dimensionValue\}/gi,c).replace(/\{dimensionValue2\}/gi,d)}return p}({dimensionMap:this.dimensionMap,layerMap:this.layerMap},this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId,s,t,r);return a||(a=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId).replace(/\{level\}/gi,s).replace(/\{row\}/gi,`${t}`).replace(/\{col\}/gi,`${r}`)),a=this._appendCustomLayerParameters(a),a}getUrlTemplate(e,t,r,i){if(!this.resourceInfo){const r=function(e,t,r,i){const{dimensionMap:s}=e,a=te(e,t);let l="";if(a&&a.length>0){const e=s.get(t).dimensions&&s.get(t).dimensions[0],o=s.get(t).dimensions2&&s.get(t).dimensions2[0];l=a[0].template,l.indexOf(".xxx")===l.length-4&&(l=l.slice(0,l.length-4)),l=l.replace(/\{Style\}/gi,i),l=l.replace(/\{TileMatrixSet\}/gi,r),l=l.replace(/\{TileMatrix\}/gi,"{level}"),l=l.replace(/\{TileRow\}/gi,"{row}"),l=l.replace(/\{TileCol\}/gi,"{col}"),l=l.replace(/\{dimensionValue\}/gi,e),l=l.replace(/\{dimensionValue2\}/gi,o)}return l}({dimensionMap:this.dimensionMap,layerMap:this.layerMap},e,t,i);if(r)return r}if("KVP"===this.serviceMode)return this.url+"?SERVICE=WMTS&VERSION="+this.version+"&REQUEST=GetTile&LAYER="+e+"&STYLE="+i+"&FORMAT="+r+"&TILEMATRIXSET="+t+"&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";if("RESTful"===this.serviceMode){let s="";return oe[r.toLowerCase()]&&(s=oe[r.toLowerCase()]),this.url+e+"/"+i+"/"+t+"/{level}/{row}/{col}"+s}return""}async _fetchService(e){let t;if(this.resourceInfo)"KVP"===this.resourceInfo.serviceMode&&(this.url+=this.url.indexOf("?")>-1?"":"?"),t={ssl:!1,data:this.resourceInfo};else try{t=await this._getCapabilities(this.serviceMode,e)}catch{const i="KVP"===this.serviceMode?"RESTful":"KVP";try{t=await this._getCapabilities(i,e),this.serviceMode=i}catch(r){throw new x("wmtslayer:unsupported-service-data","Services does not support RESTful or KVP service modes.",{error:r})}}this.resourceInfo?t.data=function(e){return e.layers.forEach((e=>{e.tileMatrixSets.forEach((e=>{const t=e.tileInfo;96!==t.dpi&&(t.lods.forEach((r=>{r.scale=96*r.scale/t.dpi,r.resolution=le(t.spatialReference.wkid,r.scale*J/96,e.id)})),t.dpi=96)}))})),e}(t.data):t.data=$(t.data,{serviceMode:this.serviceMode,url:this.url}),t.data&&this.read(t.data,{origin:"service"})}async _getCapabilities(e,t){const r=this._getCapabilitiesUrl(e);return await _(r,u(n({},t),{responseType:"text"}))}_getTileMatrixSetById(e){return this.findSublayerById(this.activeLayer.id).tileMatrixSets.find((t=>t.id===e))}_appendCustomParameters(e){if(this.customParameters)for(const t in this.customParameters)e+=(-1===e.indexOf("?")?"?":"&")+t+"="+encodeURIComponent(this.customParameters[t]);return e}_appendCustomLayerParameters(e){if(this.customLayerParameters||this.customParameters){const t=n(n({},R(this.customParameters)),this.customLayerParameters);for(const r in t)e+=(-1===e.indexOf("?")?"?":"&")+r+"="+encodeURIComponent(t[r])}return e}_getCapabilitiesUrl(e){let t;return this.url=this.url.split("?")[0],"KVP"===e?t=this.url+"?request=GetCapabilities&service=WMTS&version="+this.version:"RESTful"===e&&(t=this.url+"/"+this.version+"/WMTSCapabilities.xml"),t=this._appendCustomParameters(t),t}_getLowerCasedUrlParams(e){if(!e)return null;const t=j(e).query;if(!t)return null;const r={};return Object.keys(t).forEach((e=>{r[e.toLowerCase()]=t[e]})),r}_mergeParams(e,t){const r=this._getLowerCasedUrlParams(t);if(r){const t=Object.keys(r);t.length&&(e=e?R(e):{},t.forEach((t=>{e.hasOwnProperty(t)||ne.has(t)||(e[t]=r[t])})))}return e}};c([d()],ue.prototype,"dimensionMap",void 0),c([d()],ue.prototype,"layerMap",void 0),c([d({type:G,json:{origins:{"web-document":{write:{ignoreOrigin:!0}}}}})],ue.prototype,"activeLayer",null),c([f("service","activeLayer",["layers"])],ue.prototype,"readActiveLayerFromService",null),c([f(["web-document","portal-item"],"activeLayer",["wmtsInfo"])],ue.prototype,"readActiveLayerFromItemOrWebDoc",null),c([V(["web-document","portal-item"],"activeLayer",{templateUrl:{type:String},tileInfo:{type:m},"wmtsInfo.layerIdentifier":{type:String},"wmtsInfo.tileMatrixSet":{type:String}})],ue.prototype,"writeActiveLayer",null),c([d({type:String,value:"",json:{write:!0}})],ue.prototype,"copyright",void 0),c([d({type:["show","hide"]})],ue.prototype,"listMode",void 0),c([d({json:{origins:{"web-document":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}},"portal-item":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}}}}})],ue.prototype,"customParameters",void 0),c([f("web-document","customParameters"),f("portal-item","customParameters")],ue.prototype,"readCustomParameters",null),c([d({json:{origins:{"web-document":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}},"portal-item":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}}}}})],ue.prototype,"customLayerParameters",void 0),c([d({type:p,json:{write:{ignoreOrigin:!0},origins:{"web-document":{read:{source:"fullExtent"}},"portal-item":{read:{source:"fullExtent"}}}}})],ue.prototype,"fullExtent",void 0),c([d({readOnly:!0})],ue.prototype,"fullExtents",null),c([d({type:["WebTiledLayer"]})],ue.prototype,"operationalLayerType",void 0),c([d()],ue.prototype,"resourceInfo",void 0),c([d()],ue.prototype,"serviceMode",void 0),c([f(["portal-item","web-document"],"serviceMode",["templateUrl"])],ue.prototype,"readServiceMode",null),c([d({type:g.ofType(G)})],ue.prototype,"sublayers",void 0),c([f("service","sublayers",["layers"])],ue.prototype,"readSublayersFromService",null),c([d({readOnly:!0})],ue.prototype,"supportedSpatialReferences",null),c([d({json:{read:{source:"title"}}})],ue.prototype,"title",null),c([d({json:{read:!1},readOnly:!0,value:"wmts"})],ue.prototype,"type",void 0),c([d({json:{origins:{service:{read:{source:"tileUrl"}},"web-document":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}},"portal-item":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}}}}})],ue.prototype,"url",null),c([d()],ue.prototype,"version",void 0),ue=c([h("esri.layers.WMTSLayer")],ue);var ce=ue;export default ce;
