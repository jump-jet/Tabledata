(function(e){function t(t){for(var r,c,u=t[0],l=t[1],s=t[2],p=0,i=[];p<u.length;p++)c=u[p],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&i.push(a[c][0]),a[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);d&&d(t);while(i.length)i.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var l=n[u];0!==a[l]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={class:"table"},o=Object(r["d"])("thead",null,[Object(r["d"])("tr",null,[Object(r["d"])("th",null,"Assest Name"),Object(r["d"])("th",null,"Department")])],-1);function c(e,t,n,c,u,l){return Object(r["e"])(),Object(r["c"])(r["a"],null,[Object(r["d"])("div",null,[Object(r["d"])("table",a,[o,Object(r["d"])("tbody",null,[(Object(r["e"])(!0),Object(r["c"])(r["a"],null,Object(r["g"])(c.json_data,(function(e){return Object(r["e"])(),Object(r["c"])("tr",{key:e.Asset_Name},[Object(r["d"])("td",null,Object(r["h"])(e.Asset_Name),1),Object(r["d"])("td",null,Object(r["h"])(e.Department),1)])})),128))])])]),Object(r["d"])("button",{onClick:t[0]||(t[0]=function(){return l.unparse&&l.unparse.apply(l,arguments)})},"Download CSV")],64)}n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),n("9861");var u=[{Asset_Name:"Printer",Department:"HR"},{Asset_Name:"Monitor",Department:"IT"},{Asset_Name:"Barcode Scanner",Department:"ACCOUNT"}],l={name:"App",setup:function(){var e=Object(r["f"])(u);return{json_data:e}},methods:{unparse:function(){var e=this.$papa.unparse(u),t=new Blob([e],{type:"text/csv;charset=utf-8;"}),n=null;n=navigator.msSaveBlob?navigator.msSaveBlob(t,"download.csv"):window.URL.createObjectURL(t);var r=document.createElement("a");r.href=n,r.setAttribute("download","download.csv"),r.click(),this.unparsedResults=this.$papa.unparse(this.json_data,{delimiter:","})}}},s=n("6b0d"),d=n.n(s);const p=d()(l,[["render",c]]);var i=p,b=n("f751");Object(r["b"])(i).use(b["a"]).mount("#app")}});
//# sourceMappingURL=app.dd30c84e.js.map