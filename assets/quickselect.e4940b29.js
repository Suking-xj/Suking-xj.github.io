import{o}from"./_commonjsHelpers.f2a458db.js";var r=o((function(o){var r;void 0!==(r=function(){function o(t,n,f,a,i){for(;a>f;){if(a-f>600){var e=a-f+1,h=n-f+1,u=Math.log(e),c=.5*Math.exp(2*u/3),M=.5*Math.sqrt(u*c*(e-c)/e)*(h-e/2<0?-1:1);o(t,n,Math.max(f,Math.floor(n-h*c/e+M)),Math.min(a,Math.floor(n+(e-h)*c/e+M)),i)}var m=t[n],v=f,l=a;for(r(t,f,n),i(t[a],m)>0&&r(t,f,a);v<l;){for(r(t,v,l),v++,l--;i(t[v],m)<0;)v++;for(;i(t[l],m)>0;)l--}0===i(t[f],m)?r(t,f,l):r(t,++l,a),l<=n&&(f=l+1),n<=l&&(a=l-1)}}function r(o,r,t){var n=o[r];o[r]=o[t],o[t]=n}function t(o,r){return o<r?-1:o>r?1:0}return function(r,n,f,a,i){o(r,n,f||0,a||r.length-1,i||t)}}())&&(o.exports=r)}));export{r};