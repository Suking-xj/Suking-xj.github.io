import"./vendor.74d5941c.js";import{o as e}from"./FramebufferObject.18518335.js";import"./_commonjsHelpers.f2a458db.js";class t{constructor(){this._size=[0,0]}dispose(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null)}draw(e,t,s){const{width:r,height:i}=t;this._createOrResizeResources(e,r,i);const{context:a,painter:o}=e,{amount:l}=s,n=a.gl,h=this._layerFBOTexture;a.bindFramebuffer(t),t.copyToTexture(0,0,r,i,0,0,h),a.setBlendingEnabled(!0),a.setStencilTestEnabled(!1),a.setDepthTestEnabled(!1),a.setClearColor(0,0,0,0),a.clear(n.COLOR_BUFFER_BIT),o.blitTexture(a,h,9728,l)}_createOrResizeResources(t,s,r){const{context:i}=t;this._layerFBOTexture&&this._size[0]===s&&this._size[1]===r||(this._size[0]=s,this._size[1]=r,this._layerFBOTexture?this._layerFBOTexture.resize(s,r):this._layerFBOTexture=new e(i,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9728,flipped:!1,width:s,height:r}))}}export{t as Opacity};
