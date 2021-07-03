import{ay as t,bK as e,D as i,E as o,F as a,B as r,dI as s,az as n,bX as p,cS as h,dh as d}from"./vendor.d5722712.js";import{_ as l}from"./Bitmap.e2b3b30a.js";const m=Math.PI/180;function c(t,e){const i=e.rotation*m,o=Math.abs(Math.cos(i)),a=Math.abs(Math.sin(i)),[r,s]=e.size;return t[0]=Math.round(s*a+r*o),t[1]=Math.round(s*o+r*a),t}const u=t(),g=[0,0],x=new e(0,0,0,0),f=2048,y=2048,M=!1,v=!1,_=!1;let R=class extends r{constructor(t){super(t),this._imagePromise=null,this.hidpi=_,this.imageMaxWidth=f,this.imageMaxHeight=y,this.imageRotationSupported=M,this.imageNormalizationSupported=v,this.update=s((async(t,e)=>{const i=t.state,o=n(i.spatialReference),a=this.hidpi?t.pixelRatio:1;if(!t.stationary||this.destroyed)return null;this.imageRotationSupported?(g[0]=i.size[0],g[1]=i.size[1]):c(g,i);const r=Math.floor(g[0]*a)>this.imageMaxWidth||Math.floor(g[1]*a)>this.imageMaxHeight,s=o&&(i.extent.xmin<o.valid[0]||i.extent.xmax>o.valid[1]),p=!this.imageNormalizationSupported&&s,h=!r&&!p,d=this.imageRotationSupported?i.rotation:0;if(h)this._imagePromise=this._singleExport(i,g,d,a,e);else{let t=Math.min(this.imageMaxWidth,this.imageMaxHeight);p&&(t=Math.min(i.worldScreenWidth,t)),this._imagePromise=this._tiledExport(i,t,d,a,e)}return this._imagePromise.then((async t=>{if(this._imagePromise=null,!this.destroyed){for(const e of this.container.children)t.includes(e)||e.fadeOut().then((()=>{e.remove()}));for(const e of t)this.container.addChild(e),e.fadeIn()}})).catch((t=>{throw this._imagePromise=null,t}))}),5e3)}destroy(){}get updating(){return null!==this._imagePromise}updateExports(t){for(const e of this.container.children){if(!e.visible||!e.stage)return;t(e)?console.error("ExportStrategy.updateExports doesn't support promise yet"):(e.invalidateTexture(),e.requestRender())}}_export(t,e,i,o,a,r){return Promise.resolve().then((()=>this.fetchSource(t,Math.floor(e*a),Math.floor(i*a),{rotation:o,pixelRatio:a,signal:r}))).then((i=>{const r=new l(i,"additive");return r.x=t.xmin,r.y=t.ymax,r.resolution=t.width/e,r.rotation=o,r.pixelRatio=a,r}))}_singleExport(t,e,i,o,a){!function(t,e,i,o){const[a,r]=e,[s,n]=o,p=.5*i;t[0]=a-p*s,t[1]=r-p*n,t[2]=a+p*s,t[3]=r+p*n}(u,t.center,t.resolution,e);const r=new p(u[0],u[1],u[2],u[3],t.spatialReference);return this._export(r,e[0],e[1],i,o,a).then((t=>[t]))}_tiledExport(t,e,i,o,a){const r=h.create({size:e,spatialReference:t.spatialReference,scales:[t.scale]}),s=new d(r),n=s.getTileCoverage(t);if(!n)return null;const l=[];return n.forEach(((r,n,h,d)=>{x.set(r,n,h,d),s.getTileBounds(u,x);const m=new p(u[0],u[1],u[2],u[3],t.spatialReference);l.push(this._export(m,e,e,i,o,a))})),Promise.all(l)}};i([o()],R.prototype,"_imagePromise",void 0),i([o()],R.prototype,"container",void 0),i([o()],R.prototype,"fetchSource",void 0),i([o()],R.prototype,"hidpi",void 0),i([o()],R.prototype,"imageMaxWidth",void 0),i([o()],R.prototype,"imageMaxHeight",void 0),i([o()],R.prototype,"imageRotationSupported",void 0),i([o()],R.prototype,"imageNormalizationSupported",void 0),i([o()],R.prototype,"requestUpdate",void 0),i([o()],R.prototype,"updating",null),R=i([a("esri.views.2d.layers.support.ExportStrategy")],R);var S=R;export{S};