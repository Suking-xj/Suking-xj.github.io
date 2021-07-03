var e,t=Object.defineProperty,l=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,o=(e,l,r)=>l in e?t(e,l,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[l]=r;import{ae as i,af as a,ag as n,dA as p,bT as u,gR as c,gT as y,gS as d,dY as h,dZ as m,d_ as f,e1 as v,cr as w,bF as g,eP as b,_ as T,i9 as j,dC as S,aa as R,ia as x,dG as P,aj as O,ib as I,dQ as E,c4 as M}from"./vendor.74d5941c.js";let W=e=class extends p{constructor(e){super(e)}clone(){return new e({customLayerParameters:u(this.customLayerParameters),customParameters:u(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})}};i([a({json:{type:Object,write:!0}})],W.prototype,"customLayerParameters",void 0),i([a({json:{type:Object,write:!0}})],W.prototype,"customParameters",void 0),i([a({type:String,json:{write:!0}})],W.prototype,"layerIdentifier",void 0),i([a({type:String,json:{write:!0}})],W.prototype,"tileMatrixSet",void 0),i([a({type:String,json:{write:!0}})],W.prototype,"url",void 0),W=e=i([n("esri.layer.support.WMTSLayerInfo")],W);var U=W;let D=class extends(c(y(d(h(m(f(v))))))){constructor(...e){super(...e),this.copyright="",this.fullExtent=new w(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,g.WebMercator),this.legendEnabled=!1,this.isReference=null,this.popupEnabled=!1,this.spatialReference=g.WebMercator,this.subDomains=null,this.tileInfo=new b({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new T({x:-20037508.342787,y:20037508.342787,spatialReference:g.WebMercator}),spatialReference:g.WebMercator,lods:[new j({level:0,scale:591657527.591555,resolution:156543.033928}),new j({level:1,scale:295828763.795777,resolution:78271.5169639999}),new j({level:2,scale:147914381.897889,resolution:39135.7584820001}),new j({level:3,scale:73957190.948944,resolution:19567.8792409999}),new j({level:4,scale:36978595.474472,resolution:9783.93962049996}),new j({level:5,scale:18489297.737236,resolution:4891.96981024998}),new j({level:6,scale:9244648.868618,resolution:2445.98490512499}),new j({level:7,scale:4622324.434309,resolution:1222.99245256249}),new j({level:8,scale:2311162.217155,resolution:611.49622628138}),new j({level:9,scale:1155581.108577,resolution:305.748113140558}),new j({level:10,scale:577790.554289,resolution:152.874056570411}),new j({level:11,scale:288895.277144,resolution:76.4370282850732}),new j({level:12,scale:144447.638572,resolution:38.2185141425366}),new j({level:13,scale:72223.819286,resolution:19.1092570712683}),new j({level:14,scale:36111.909643,resolution:9.55462853563415}),new j({level:15,scale:18055.954822,resolution:4.77731426794937}),new j({level:16,scale:9027.977411,resolution:2.38865713397468}),new j({level:17,scale:4513.988705,resolution:1.19432856685505}),new j({level:18,scale:2256.994353,resolution:.597164283559817}),new j({level:19,scale:1128.497176,resolution:.298582141647617})]}),this.type="web-tile",this.urlTemplate=null,this.wmtsInfo=null}normalizeCtorArgs(e,t){return"string"==typeof e?((e,t)=>{for(var i in t||(t={}))r.call(t,i)&&o(e,i,t[i]);if(l)for(var i of l(t))s.call(t,i)&&o(e,i,t[i]);return e})({urlTemplate:e},t):e}load(e){const t=this.loadFromPortal({supportedTypes:["WMTS"]},e).then((()=>{let e="";if(this.urlTemplate)if(this.spatialReference.equals(this.tileInfo.spatialReference)){const t=new S(this.urlTemplate);this.subDomains&&this.subDomains.length>0||-1===t.authority.indexOf("{subDomain}")||(e="is missing 'subDomains' property")}else e="spatialReference must match tileInfo.spatialReference";else e="is missing the required 'urlTemplate' property value";if(e)throw new R("web-tile-layer:load",`WebTileLayer (title: '${this.title}', id: '${this.id}') ${e}`)}));return this.addResolvingPromise(t),Promise.resolve(this)}get levelValues(){const e=[];if(!this.tileInfo)return null;for(const t of this.tileInfo.lods)e[t.level]=t.levelValue||t.level;return e}readSpatialReference(e,t){return e||t.fullExtent&&t.fullExtent.spatialReference&&g.fromJSON(t.fullExtent.spatialReference)}get tileServers(){if(!this.urlTemplate)return null;const e=[],{urlTemplate:t,subDomains:l}=this,r=new S(t),s=r.scheme?r.scheme+"://":"//",o=s+r.authority+"/";if(-1===r.authority.indexOf("{subDomain}"))e.push(o);else if(l&&l.length>0&&r.authority.split(".").length>1)for(const i of l)e.push(s+r.authority.replace(/\{subDomain\}/gi,i)+"/");return e.map((e=>("/"!==e.charAt(e.length-1)&&(e+="/"),e)))}get urlPath(){if(!this.urlTemplate)return null;const e=this.urlTemplate,t=new S(e),l=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(l.length)}readUrlTemplate(e,t){return e||t.templateUrl}writeUrlTemplate(e,t){e&&x(e)&&(e="https:"+e),e&&(e=e.replace(/\{z\}/gi,"{level}").replace(/\{x\}/gi,"{col}").replace(/\{y\}/gi,"{row}"),e=P(e)),t.templateUrl=e}fetchTile(e,t,l,r={}){const{signal:s,timestamp:o}=r,i=this.getTileUrl(e,t,l),a={responseType:"image",signal:s};return null!=o&&(a.query={_ts:r.timestamp}),O(i,a).then((e=>e.data))}getTileUrl(e,t,l){const r=this.levelValues[e];return this.tileServers[t%this.tileServers.length]+I(this.urlPath,{level:r,z:r,col:l,x:l,row:t,y:t})}};i([a({type:String,value:"",json:{write:!0}})],D.prototype,"copyright",void 0),i([a({type:w,json:{write:!0}})],D.prototype,"fullExtent",void 0),i([a({readOnly:!0,json:{read:!1,write:!1}})],D.prototype,"legendEnabled",void 0),i([a({type:["show","hide"]})],D.prototype,"listMode",void 0),i([a()],D.prototype,"levelValues",null),i([a({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],D.prototype,"isReference",void 0),i([a({type:["WebTiledLayer"],value:"WebTiledLayer"})],D.prototype,"operationalLayerType",void 0),i([a({readOnly:!0,json:{read:!1,write:!1}})],D.prototype,"popupEnabled",void 0),i([a({type:g})],D.prototype,"spatialReference",void 0),i([E("spatialReference",["spatialReference","fullExtent.spatialReference"])],D.prototype,"readSpatialReference",null),i([a({type:[String],json:{write:!0}})],D.prototype,"subDomains",void 0),i([a({type:b,json:{write:!0}})],D.prototype,"tileInfo",void 0),i([a({readOnly:!0})],D.prototype,"tileServers",null),i([a({json:{read:!1}})],D.prototype,"type",void 0),i([a()],D.prototype,"urlPath",null),i([a({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],D.prototype,"urlTemplate",void 0),i([E("urlTemplate",["urlTemplate","templateUrl"])],D.prototype,"readUrlTemplate",null),i([M("urlTemplate",{templateUrl:{type:String}})],D.prototype,"writeUrlTemplate",null),i([a({type:U,json:{write:!0}})],D.prototype,"wmtsInfo",void 0),D=i([n("esri.layers.WebTileLayer")],D);var L=D,_=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:L});export{_ as W,U as a,L as x};
