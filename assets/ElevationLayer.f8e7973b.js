var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,o=(t,r,i)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[r]=i,n=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&o(e,r,t[r]);if(i)for(var r of i(t))a.call(t,r)&&o(e,r,t[r]);return e},l=(e,i)=>t(e,r(i));import{a4 as h,dU as d,dy as c,dV as p,a5 as u,aq as y,dW as v,dX as m,dY as g,dZ as f,d_ as _,aa as w,bI as b,aj as S,dK as j,ae as T,af as L,d$ as I,e0 as x,dQ as O,ag as k,e1 as E}from"./vendor.74d5941c.js";const P=h.getLogger("esri.core.workers.WorkerHandle");class V extends class{constructor(e,t,r,i={}){this._mainMethod=t,this._listeners=[],this._promise=d(e,l(n({},i),{scheduler:r})).then((e=>{if(void 0===this._thread){this._thread=e,this._promise=null,i.hasInitialize&&this.broadcast({},"initialize");for(const e of this._listeners)this._connectListener(e)}else e.close()})),this._promise.catch((t=>P.error(`Failed to initialize ${e} worker: ${t}`)))}on(e,t){const r={removed:!1,eventName:e,callback:t,threadHandle:null};return this._listeners.push(r),this._connectListener(r),c((()=>{r.removed=!0,p(this._listeners,r),this._thread&&u(r.threadHandle)&&r.threadHandle.remove()}))}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null}invoke(e,t){return this.invokeMethod(this._mainMethod,e,t)}invokeMethod(e,t,r){if(this._thread){const i=this.getTransferList(t,e);return this._thread.invoke(e,t,{transferList:i,signal:r})}return this._promise?this._promise.then((()=>(y(r),this.invokeMethod(e,t,r)))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then((()=>{})):this._promise?this._promise.then((()=>this.broadcast(e,t))):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then((t=>{e.removed||(e.threadHandle=t)}))}}{constructor(e){super("LercWorker","_decode",e,{strategy:"dedicated"}),this.scheduler=e}decode(e,t,r){return e&&0!==e.byteLength?this.invoke({buffer:e,options:t},r):Promise.resolve(null)}getTransferList(e){return[e.buffer]}}const D=new Map;const $=h.getLogger("esri.layers.ElevationLayer");let M=class extends(v(m(g(f(_(E)))))){constructor(...e){super(...e),this.copyright=null,this.heightModelInfo=null,this.path=null,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=function(e){let t=D.get(e);return t||(t={instance:new V(e),ref:0},D.set(e,t)),++t.ref,t.instance}()}normalizeCtorArgs(e,t){return"string"==typeof e?n({url:e},t):e}destroy(){(function(e){if(null==e)return;const t=e.scheduler,r=D.get(t);r&&--r.ref<=0&&(r.instance.destroy(),D.delete(t))})(this._lercDecoder),this._lercDecoder=null}set minScale(e){this.constructed&&$.warn(`${this.declaredClass}.minScale support has been removed (since 4.5)`)}get minScale(){}set maxScale(e){this.constructed&&$.warn(`${this.declaredClass}.maxScale support has been removed (since 4.5)`)}get maxScale(){}readVersion(e,t){let r=t.currentVersion;return r||(r=9.3),r}load(e){const t=u(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:e=>{for(let t=0;t<e.typeKeywords.length;t++)if("elevation 3d layer"===e.typeKeywords[t].toLowerCase())return!0;throw new w("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).then((()=>this._fetchImageService(t)),(()=>this._fetchImageService(t)))),Promise.resolve(this)}fetchTile(e,t,r,i){const s=u((i=i||{signal:null}).signal)?i.signal:i.signal=b().signal,a={responseType:"array-buffer",signal:s},o={noDataValue:i.noDataValue,returnFileInfo:!0};return this.load().then((()=>this._fetchTileAvailability(e,t,r,i))).then((()=>S(this.getTileUrl(e,t,r),a))).then((e=>this._lercDecoder.decode(e.data,o,s))).then((e=>({values:e.pixelData,width:e.width,height:e.height,maxZError:e.fileInfo.maxZError,noDataValue:e.noDataValue,minValue:e.minValue,maxValue:e.maxValue})))}getTileUrl(e,t,r){const i=!this.tilemapCache&&this.supportsBlankTile,s=j(l(n({},this.parsedUrl.query),{blankTile:!i&&null}));return`${this.parsedUrl.path}/tile/${e}/${t}/${r}${s?"?"+s:""}`}async queryElevation(e,t){const{ElevationQuery:r}=await import("./ElevationQuery.b77e7933.js");return y(t),(new r).query(this,e,t)}async createElevationSampler(e,t){const{ElevationQuery:r}=await import("./ElevationQuery.b77e7933.js");return y(t),(new r).createSampler(this,e,t)}_fetchTileAvailability(e,t,r,i){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,t,r,i):Promise.resolve("unknown")}async _fetchImageService(e){if(this.sourceJSON)return this.sourceJSON;const t={query:n({f:"json"},this.parsedUrl.query),responseType:"json",signal:e},r=await S(this.parsedUrl.path,t);r.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=r.data,this.read(r.data,{origin:"service",url:this.parsedUrl})}};T([L({json:{read:{source:"copyrightText"}}})],M.prototype,"copyright",void 0),T([L({readOnly:!0,type:I})],M.prototype,"heightModelInfo",void 0),T([L({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],M.prototype,"path",void 0),T([L({type:["show","hide"]})],M.prototype,"listMode",void 0),T([L({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],M.prototype,"minScale",null),T([L({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],M.prototype,"maxScale",null),T([L({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],M.prototype,"opacity",void 0),T([L({type:["ArcGISTiledElevationServiceLayer"]})],M.prototype,"operationalLayerType",void 0),T([L()],M.prototype,"sourceJSON",void 0),T([L({json:{read:!1},value:"elevation",readOnly:!0})],M.prototype,"type",void 0),T([L(x)],M.prototype,"url",void 0),T([L()],M.prototype,"version",void 0),T([O("version",["currentVersion"])],M.prototype,"readVersion",null),M=T([k("esri.layers.ElevationLayer")],M);var U=M;export default U;