webpackJsonp([15],{931:function(e,a,t){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}var r=t(1),n=l(r),s=t(9),m=t(28),u=l(m),d=t(43),c=l(d),o=t(35),p=l(o),f=t(278),i=l(f),E=t(20),g=l(E),v=t(23),w=new p.default({name:"OSM-WMS",source:new i.default({url:"https://ows.terrestris.de/osm-gray/service",params:{LAYERS:"OSM-WMS",TILED:!0},serverType:"geoserver"})}),L=new p.default({name:"States (USA)",source:new i.default({url:"https://ahocevar.com/geoserver/wms",params:{LAYERS:"usa:states",TILED:!0},serverType:"geoserver"})}),y=new p.default({name:"Places",legendUrl:"https://www.koeln.de/files/images/Karnevalstrikot_Spieler_270.jpg",source:new i.default({url:"https://ahocevar.com/geoserver/wms",params:{LAYERS:"ne:ne_10m_populated_places",TILED:!0,TRANSPARENT:"true"},serverType:"geoserver"})}),S=new u.default({layers:[w,L,y],view:new c.default({center:g.default.fromLonLat([-98.583333,39.833333]),zoom:4})}),T={HEIGHT:10,WIDTH:10};(0,s.render)(n.default.createElement("div",null,n.default.createElement("div",{id:"map",style:{height:"200px"}}),n.default.createElement("div",{className:"example-block"},n.default.createElement("span",null,"Layer "+w.get("name")+":"),n.default.createElement(v.Legend,{layer:w})),n.default.createElement("div",{className:"example-block"},n.default.createElement("span",null,"Layer "+L.get("name")+' with "extraParams":'),n.default.createElement(v.Legend,{layer:L,extraParams:T})),n.default.createElement("div",{className:"example-block"},n.default.createElement("span",null,"Layer "+y.get("name")+' with custom "legendUrl":'),n.default.createElement(v.Legend,{layer:y}))),document.getElementById("exampleContainer"),function(){S.setTarget("map")})}},[931]);