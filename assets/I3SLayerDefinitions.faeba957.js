import{ae as e,af as t,ag as o,eS as r,dA as p}from"./vendor.74d5941c.js";let s=class extends p{constructor(){super(...arguments),this.nodesPerPage=null,this.rootIndex=0,this.lodSelectionMetricType=null}};e([t({type:Number})],s.prototype,"nodesPerPage",void 0),e([t({type:Number})],s.prototype,"rootIndex",void 0),e([t({type:String})],s.prototype,"lodSelectionMetricType",void 0),s=e([o("esri.layer.support.I3SNodePageDefinition")],s);let i=class extends p{constructor(){super(...arguments),this.factor=1}};e([t({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],i.prototype,"id",void 0),e([t({type:Number})],i.prototype,"factor",void 0),i=e([o("esri.layer.support.I3SMaterialTexture")],i);let a=class extends p{constructor(){super(...arguments),this.baseColorFactor=[1,1,1,1],this.baseColorTexture=null,this.metallicRoughnessTexture=null,this.metallicFactor=1,this.roughnessFactor=1}};e([t({type:[Number]})],a.prototype,"baseColorFactor",void 0),e([t({type:i})],a.prototype,"baseColorTexture",void 0),e([t({type:i})],a.prototype,"metallicRoughnessTexture",void 0),e([t({type:Number})],a.prototype,"metallicFactor",void 0),e([t({type:Number})],a.prototype,"roughnessFactor",void 0),a=e([o("esri.layer.support.I3SMaterialPBRMetallicRoughness")],a);let l=class extends p{constructor(){super(...arguments),this.alphaMode="opaque",this.alphaCutoff=.25,this.doubleSided=!1,this.cullFace="none",this.normalTexture=null,this.occlusionTexture=null,this.emissiveTexture=null,this.emissiveFactor=null,this.pbrMetallicRoughness=null}};e([r({opaque:"opaque",mask:"mask",blend:"blend"})],l.prototype,"alphaMode",void 0),e([t({type:Number})],l.prototype,"alphaCutoff",void 0),e([t({type:Boolean})],l.prototype,"doubleSided",void 0),e([r({none:"none",back:"back",front:"front"})],l.prototype,"cullFace",void 0),e([t({type:i})],l.prototype,"normalTexture",void 0),e([t({type:i})],l.prototype,"occlusionTexture",void 0),e([t({type:i})],l.prototype,"emissiveTexture",void 0),e([t({type:[Number]})],l.prototype,"emissiveFactor",void 0),e([t({type:a})],l.prototype,"pbrMetallicRoughness",void 0),l=e([o("esri.layer.support.I3SMaterialDefinition")],l);let n=class extends p{};e([t({type:String,json:{read:{source:["name","index"],reader:(e,t)=>null!=e?e:`${t.index}`}}})],n.prototype,"name",void 0),e([r({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",basis:"basis"})],n.prototype,"format",void 0),n=e([o("esri.layer.support.I3STextureFormat")],n);let y=class extends p{constructor(){super(...arguments),this.atlas=!1}};e([t({type:[n]})],y.prototype,"formats",void 0),e([t({type:Boolean})],y.prototype,"atlas",void 0),y=e([o("esri.layer.support.I3STextureSetDefinition")],y);let u=class extends p{};e([r({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],u.prototype,"type",void 0),e([t({type:Number})],u.prototype,"component",void 0),u=e([o("esri.layer.support.I3SGeometryAttribute")],u);let d=class extends p{};e([r({draco:"draco"})],d.prototype,"encoding",void 0),e([t({type:[String]})],d.prototype,"attributes",void 0),d=e([o("esri.layer.support.I3SGeometryCompressedAttributes")],d);let c=class extends p{constructor(){super(...arguments),this.offset=0}};e([t({type:Number})],c.prototype,"offset",void 0),e([t({type:u})],c.prototype,"position",void 0),e([t({type:u})],c.prototype,"normal",void 0),e([t({type:u})],c.prototype,"uv0",void 0),e([t({type:u})],c.prototype,"color",void 0),e([t({type:u})],c.prototype,"uvRegion",void 0),e([t({type:u})],c.prototype,"featureId",void 0),e([t({type:u})],c.prototype,"faceRange",void 0),e([t({type:d})],c.prototype,"compressedAttributes",void 0),c=e([o("esri.layer.support.I3SGeometryBuffer")],c);let v=class extends p{};e([r({triangle:"triangle"})],v.prototype,"topology",void 0),e([t()],v.prototype,"geometryBuffers",void 0),v=e([o("esri.layer.support.I3SGeometryDefinition")],v);export{l,v as m,s,y as u};
