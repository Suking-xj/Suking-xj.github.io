var e=Object.defineProperty,r=Object.defineProperties,t=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,a=(r,t,s)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[t]=s,l=(e,r)=>{for(var t in r||(r={}))o.call(r,t)&&a(e,t,r[t]);if(s)for(var t of s(r))n.call(r,t)&&a(e,t,r[t]);return e},c=(e,s)=>r(e,t(s));import{ea as i,z as b}from"./vendor.d5722712.js";let u;function p(e,r={}){let t=r.responseType;t?"json"!==t&&"text"!==t&&"blob"!==t&&"array-buffer"!==t&&(t="text"):t="json";const s=r&&r.signal;return delete r.signal,i.invokeStaticMessage("request",{url:e,options:r},{signal:s}).then((s=>{const o=s.data;let n,a,i,p;if(o&&!("json"!==t&&"text"!==t&&"blob"!==t||(n=new Blob([o]),"json"!==t&&"text"!==t||(u||(u=new FileReaderSync),a=u.readAsText(n),"json"!==t)))){try{i=JSON.parse(a||null)}catch(f){const t=c(l({},f),{url:e,requestOptions:r});throw new b("request:server",f.message,t)}if(i.error){const t=c(l({},i.error),{url:e,requestOptions:r});throw new b("request:server",i.error.message,t)}}switch(t){case"json":p=i;break;case"text":p=a;break;case"blob":p=n;break;default:p=o}return{data:p,requestOptions:r,ssl:s.ssl,url:e}}))}export{p as execute};