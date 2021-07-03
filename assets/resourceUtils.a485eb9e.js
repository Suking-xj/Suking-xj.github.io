import{ee as e,ef as t,aa as a,a5 as r,a0 as s,eg as o,aj as n}from"./vendor.74d5941c.js";async function c(a,r={},s){await a.load(s);const o=e(a.itemUrl,"resources"),{start:n=1,num:c=10,sortOrder:l="asc",sortField:i="created"}=r,u={query:{start:n,num:c,sortOrder:l,sortField:i},signal:t(s,"signal")},p=await a.portal._request(o,u);return{total:p.total,nextStart:p.nextStart,resources:p.resources.map((({created:e,size:t,resource:r})=>({created:new Date(e),size:t,resource:a.resourceFromPath(r)})))}}async function l(s,o,n,c){if(!s.hasPath())throw new a(`portal-item-resource-${o}:invalid-path`,"Resource does not have a valid path");await s.portalItem.load(c);const l=e(s.portalItem.userItemUrl,"add"===o?"addResources":"updateResources"),[i,u]=p(s.path),d=await m(n),h=new FormData;return i&&"."!==i&&h.append("resourcesPrefix",i),h.append("fileName",u),h.append("file",d,u),h.append("f","json"),r(c)&&c.access&&h.append("access",c.access),await s.portalItem.portal._request(l,{method:"post",body:h,signal:t(c,"signal")}),s}async function i(r,s,o){if(!s.hasPath())throw new a("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await r.load(o);const n=e(r.userItemUrl,"removeResources");await r.portal._request(n,{method:"post",query:{resource:s.path},signal:t(o,"signal")}),s.portalItem=null}async function u(a,r){await a.load(r);const s=e(a.userItemUrl,"removeResources");return a.portal._request(s,{method:"post",query:{deleteAll:!0},signal:t(r,"signal")})}function p(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function d(e){const[t,a]=function(e){const t=o(e);return s(t)?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}(e),[r,n]=p(t);return[r,n,a]}async function m(e){return e instanceof Blob?e:(await n(e.url,{responseType:"blob"})).data}function h(t,a){if(!t.hasPath())return null;const[r,,s]=d(t.path);return t.portalItem.resourceFromPath(e(r,a+s))}function f(t,a){if(!t.hasPath())return null;const[r,,s]=d(t.path);return t.portalItem.resourceFromPath(e(r,a+s))}export{l as addOrUpdateResource,m as contentToBlob,c as fetchResources,h as getSiblingOfSameType,f as getSiblingOfSameTypeI,u as removeAllResources,i as removeResource,d as splitPrefixFileNameAndExtension};
