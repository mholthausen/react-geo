!function(e){function t(t){for(var l,o,i=t[0],u=t[1],c=t[2],s=0,f=[];s<i.length;s++)o=i[s],a[o]&&f.push(a[o][0]),a[o]=0;for(l in u)Object.prototype.hasOwnProperty.call(u,l)&&(e[l]=u[l]);for(p&&p(t);f.length;)f.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],l=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(l=!1)}l&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var l={},a={21:0},r=[];function o(t){if(l[t])return l[t].exports;var n=l[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=l,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var i=window.webpackJsonp=window.webpackJsonp||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var p=u;r.push([464,1,0]),n()}({464:function(e,t,n){"use strict";var l=v(n(2)),a=v(n(61)),r=v(n(95)),o=v(n(47)),i=v(n(96)),u=v(n(75)),c=v(n(72)),p=v(n(50)),s=v(n(38)),f=v(n(68)),d=v(n(127)),m=v(n(89)),h=n(16),g=n(33);function v(e){return e&&e.__esModule?e:{default:e}}var w=!1,E=!1,y=[130,130],b=void 0,x=new Promise(function(e){var t=new o.default({source:new a.default}),n=new i.default({source:new r.default({features:[new u.default({geometry:new c.default([135.1691495,34.6565482])})]}),style:new f.default({image:new d.default({radius:10,fill:new m.default({color:"#C62148"})})})}),l=new s.default({view:new p.default({center:[135.1691495,34.6565482],projection:"EPSG:4326",zoom:16}),layers:[t,n],interactions:[]});l.on("singleclick",function(e){var t=document.getElementById("map"),n=l.getPixelFromCoordinate([135.1691495,34.6565482]),a=l.getPixelFromCoordinate(e.coordinate);l.hasFeatureAtPixel(a)?(E=!0,b=[n[0]+t.offsetLeft,n[1]+t.offsetTop]):E=!1,C()}),e(l)}),B=(0,g.mappify)(g.MapComponent),C=function e(){(0,h.render)(l.default.createElement("div",null,l.default.createElement("div",{className:"example-block",style:{width:500,height:200}},l.default.createElement("div",null,"CircleMenu with segment as submenu:"),l.default.createElement(g.SimpleButton,{id:"segmentButton",shape:"circle",icon:"plus",style:{position:"absolute",top:y[0]+"px",left:y[1]+"px"},onClick:function(){var t=document.getElementById("segmentButton");w=!w,t.style.transform=w?"rotate(45deg)":"rotate(0deg)",e()}}),w?l.default.createElement(g.CircleMenu,{style:{position:"absolute",background:"none",border:"none"},position:[y[0]+14,y[1]+14],diameter:100,animationDuration:500,segmentAngles:[0,90]},l.default.createElement(g.SimpleButton,{icon:"floppy-o",shape:"circle"}),l.default.createElement(g.SimpleButton,{icon:"trash-o",shape:"circle"}),l.default.createElement(g.SimpleButton,{icon:"pencil",shape:"circle"})):null),l.default.createElement("div",{className:"example-block"},l.default.createElement("span",null,"CircleMenu in a Map (click the red feature)"),l.default.createElement(g.MapProvider,{map:x},l.default.createElement(B,{style:{height:"512px"}})),E?l.default.createElement(g.CircleMenu,{position:b,diameter:80,animationDuration:500},l.default.createElement(g.SimpleButton,{icon:"pencil",shape:"circle"}),l.default.createElement(g.SimpleButton,{icon:"line-chart",shape:"circle"}),l.default.createElement(g.SimpleButton,{icon:"link",shape:"circle"}),l.default.createElement(g.SimpleButton,{icon:"thumbs-o-up",shape:"circle"}),l.default.createElement(g.SimpleButton,{icon:"bullhorn",shape:"circle"})):null)),document.getElementById("exampleContainer"))};C()}});