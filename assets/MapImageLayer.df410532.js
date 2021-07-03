var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,o=(t,r,s)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[r]=s,n=(e,t)=>{for(var r in t||(t={}))a.call(t,r)&&o(e,r,t[r]);if(s)for(var r of s(t))i.call(t,r)&&o(e,r,t[r]);return e},l=(e,s)=>t(e,r(s));import{gR as p,hw as y,gS as c,gT as u,i1 as h,i2 as d,dX as m,dY as g,dZ as b,d_ as v,i3 as f,ab as x,e1 as S,a5 as w,hP as O,i4 as j,f3 as P,i5 as I,aa as q,aj as E,an as M,cr as N,d5 as R,h5 as J,ae as L,af as F,dQ as T,c4 as U,i6 as A,gV as _,e0 as D,ag as V}from"./vendor.74d5941c.js";let $=class extends(p(y(c(u(h(d(m(g(b(v(f(x(S))))))))))))){constructor(...e){super(...e),this.alwaysRefetch=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,t){return"string"==typeof e?n({url:e},t):e}load(e){const t=w(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).then((()=>this._fetchService(t)),(()=>this._fetchService(t)))),Promise.resolve(this)}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.indexOf("PNG32")>-1?"png32":"png24"}writeSublayers(e,t,r,s){if(!this.loaded||!e)return;const a=e.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).toArray();let i=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap.supportsDynamicLayers){const e=O(s.origin);if(3===e){const e=this.createSublayersForOrigin("service").sublayers;i=j(a,e,2)}else if(e>3){const e=this.createSublayersForOrigin("portal-item");i=j(a,e.sublayers,O(e.origin))}}const o=[],l=n({writeSublayerStructure:i},s);let p=i;a.forEach((e=>{const t=e.write({},l);o.push(t),p=p||"user"===e.originOf("visible")})),o.some((e=>Object.keys(e).length>1))&&(t.layers=o),p&&(t.visibleLayers=a.filter((e=>e.visible)).map((e=>e.id)))}createExportImageParameters(e,t,r,s){const a=s&&s.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const i=new P({layer:this,scale:I({extent:e,width:t})*a}),o=i.toJSON();i.destroy();const l=!s||!s.rotation||this.version<10.3?{}:{rotation:-s.rotation},p=e&&e.spatialReference,y=p.wkid||JSON.stringify(p.toJSON());o.dpi*=a;const c={};if(null!=s&&s.timeExtent){const{start:e,end:t}=s.timeExtent.toJSON();c.time=e&&t&&e===t?""+e:`${null==e?"null":e},${null==t?"null":t}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(c.time="null,null");return n(n(n({bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:y,imageSR:y,size:t+","+r},o),l),c)}async fetchImage(e,t,r,s){const a={responseType:"image"};s&&s.timestamp&&(a.query=l(n({},a.query),{_ts:s.timestamp})),s&&s.signal&&(a.signal=s.signal),this.customParameters&&Object.keys(this.customParameters).length&&(a.query=n(n({},this.customParameters),a.query));const i=this.parsedUrl.path+"/export",o=l(n(n({},this.parsedUrl.query),this.createExportImageParameters(e,t,r,s)),{f:"image",_ts:this.alwaysRefetch?Date.now():null});return null==o.dynamicLayers||this.capabilities.exportMap.supportsDynamicLayers?(a.query?a.query=n(n({},o),a.query):a.query=o,E(i,a).then((e=>e.data)).catch((e=>{if(M(e))throw e;throw new q("mapimagelayer:image-fetch-error",`Unable to load image: ${i}`,{error:e})}))):Promise.reject(new q("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:o}))}async fetchRecomputedExtents(e={}){const t=l(n({},e),{query:{returnUpdates:!0,f:"json"}}),{data:r}=await E(this.url,t),{extent:s,fullExtent:a,timeExtent:i}=r,o=s||a;return{fullExtent:o&&N.fromJSON(o),timeExtent:i&&R.fromJSON({start:i[0],end:i[1]})}}loadAll(){return J(this,(e=>{e(this.allSublayers)}))}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:t,ssl:r}=await E(this.parsedUrl.path,{query:n(n({f:"json"},this.parsedUrl.query),this.customParameters),signal:e});r&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})}};L([F()],$.prototype,"alwaysRefetch",void 0),L([F()],$.prototype,"dpi",void 0),L([F()],$.prototype,"gdbVersion",void 0),L([F()],$.prototype,"imageFormat",void 0),L([T("imageFormat",["supportedImageFormatTypes"])],$.prototype,"readImageFormat",null),L([F({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],$.prototype,"imageMaxHeight",void 0),L([F({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],$.prototype,"imageMaxWidth",void 0),L([F()],$.prototype,"imageTransparency",void 0),L([F({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],$.prototype,"isReference",void 0),L([F({json:{read:!1,write:!1}})],$.prototype,"labelsVisible",void 0),L([F({type:["ArcGISMapServiceLayer"]})],$.prototype,"operationalLayerType",void 0),L([F({json:{read:!1,write:!1}})],$.prototype,"popupEnabled",void 0),L([F()],$.prototype,"sourceJSON",void 0),L([F({json:{write:{ignoreOrigin:!0}}})],$.prototype,"sublayers",void 0),L([U("sublayers",{layers:{type:[A]},visibleLayers:{type:[_]}})],$.prototype,"writeSublayers",null),L([F({type:["show","hide","hide-children"]})],$.prototype,"listMode",void 0),L([F({json:{read:!1},readOnly:!0,value:"map-image"})],$.prototype,"type",void 0),L([F(D)],$.prototype,"url",void 0),$=L([V("esri.layers.MapImageLayer")],$);var k=$;export default k;
