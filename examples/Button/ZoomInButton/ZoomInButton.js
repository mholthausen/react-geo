!function(e){function t(t){for(var o,u,l=t[0],i=t[1],c=t[2],d=0,p=[];d<l.length;d++)u=l[d],a[u]&&p.push(a[u][0]),a[u]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);for(f&&f(t);p.length;)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,l=1;l<n.length;l++){var i=n[l];0!==a[i]&&(o=!1)}o&&(r.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},a={24:0},r=[];function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},u.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var l=window.webpackJsonp=window.webpackJsonp||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var f=i;r.push([467,1,0]),n()}({467:function(e,t,n){"use strict";var o=d(n(2)),a=n(16),r=d(n(38)),u=d(n(50)),l=d(n(47)),i=d(n(61)),c=d(n(19)),f=n(33);function d(e){return e&&e.__esModule?e:{default:e}}var p=new r.default({layers:[new l.default({name:"OSM",source:new i.default})],view:new u.default({center:c.default.fromLonLat([37.4057,8.81566]),zoom:10})});(0,a.render)(o.default.createElement("div",null,o.default.createElement("div",{id:"map",style:{height:"400px"}}),o.default.createElement("div",{className:"example-block"},o.default.createElement("span",null,"Zoom in button:"),o.default.createElement(f.ZoomInButton,{map:p},"Zoom in (standard, animated)")," ",o.default.createElement(f.ZoomInButton,{map:p,animate:!1},"Zoom in (no animation)")," ",o.default.createElement(f.ZoomInButton,{map:p,animateOptions:{duration:1500}},"Zoom in (1.5 seconds animation)"))),document.getElementById("exampleContainer"),function(){p.setTarget("map")})}});