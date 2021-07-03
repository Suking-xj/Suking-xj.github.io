import{h as t}from"./vendor.abf366c9.js";class o{constructor(t,o,r=""){this.major=t,this.minor=o,this._context=r}lessThan(t,o){return this.major<t||t===this.major&&this.minor<o}since(t,o){return!this.lessThan(t,o)}validate(o){if(this.major!==o.major){const r=this._context&&this._context+":",s=this._context&&this._context+" ";throw new t(r+"unsupported-version",`Required major ${s}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:o})}}clone(){return new o(this.major,this.minor,this._context)}static parse(r,s=""){const[e,n]=r.split("."),i=/^\s*\d+\s*$/;if(!e||!e.match||!e.match(i))throw new t((s&&s+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:r});if(!n||!n.match||!n.match(i))throw new t((s&&s+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:r});const a=parseInt(e,10),h=parseInt(n,10);return new o(a,h,s)}}export{o as r};