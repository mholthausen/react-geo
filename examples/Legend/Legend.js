webpackJsonp([15],{931:function(e,a,t){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}var r=t(1),n=l(r),s=t(9),m=t(28),u=l(m),d=t(43),c=l(d),o=t(35),p=l(o),f=t(278),i=l(f),g=t(20),E=l(g),v=t(23),w=new p.default({name:"OSM-WMS",source:new i.default({url:"https://ows.terrestris.de/osm-gray/service",params:{LAYERS:"OSM-WMS",TILED:!0},serverType:"geoserver"})}),L=new p.default({name:"States (USA)",source:new i.default({url:"https://ahocevar.com/geoserver/wms",params:{LAYERS:"usa:states",TILED:!0},serverType:"geoserver"})}),y=new p.default({name:"Places",legendUrl:"https://www.koeln.de/files/images/Karnevalstrikot_Spieler_270.jpg",source:new i.default({url:"https://ahocevar.com/geoserver/wms",params:{LAYERS:"ne:ne_10m_populated_places",TILED:!0,TRANSPARENT:"true"},serverType:"geoserver"})}),h=new u.default({layers:[w,L,y],view:new c.default({center:E.default.fromLonLat([-98.583333,39.833333]),zoom:4})}),S={HEIGHT:10,WIDTH:10};(0,s.render)(n.default.createElement("div",null,n.default.createElement("div",{id:"map",style:{width:"400px",height:"400px",right:"0px",position:"absolute"}}),n.default.createElement("div",{className:"example-block"},n.default.createElement("span",null,"Layer "+w.get("name")+":"),n.default.createElement(v.Legend,{layer:w})),n.default.createElement("div",{className:"example-block"},n.default.createElement("span",null,"Layer "+L.get("name")+' with "extraParams":'),n.default.createElement(v.Legend,{layer:L,extraParams:S})),n.default.createElement("div",{className:"example-block"},n.default.createElement("span",null,"Layer "+y.get("name")+' with custom "legendUrl":'),n.default.createElement(v.Legend,{layer:y}))),document.getElementById("exampleContainer"),function(){h.setTarget("map")})}},[931]);