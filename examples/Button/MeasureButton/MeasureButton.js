webpackJsonp([12],{23:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(0),r=a(24),i=function(e){var t,a=e||{};t=void 0!==a.attributions?a.attributions:[i.ATTRIBUTION];var o=void 0!==a.crossOrigin?a.crossOrigin:"anonymous",n=void 0!==a.url?a.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";r.a.call(this,{attributions:t,cacheSize:a.cacheSize,crossOrigin:o,opaque:void 0===a.opaque||a.opaque,maxZoom:void 0!==a.maxZoom?a.maxZoom:19,reprojectionErrorThreshold:a.reprojectionErrorThreshold,tileLoadFunction:a.tileLoadFunction,url:n,wrapX:a.wrapX})};o.a.inherits(i,r.a),i.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.',t.default=i},24:function(e,t,a){"use strict";var o=a(0),r=a(38),i=a(35),n=function(e){var t=e||{},a=void 0!==t.projection?t.projection:"EPSG:3857",o=void 0!==t.tileGrid?t.tileGrid:i.a.createXYZ({extent:i.a.extentFromProjection(a),maxZoom:t.maxZoom,minZoom:t.minZoom,tileSize:t.tileSize});r.a.call(this,{attributions:t.attributions,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,logo:t.logo,opaque:t.opaque,projection:a,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileGrid:o,tileLoadFunction:t.tileLoadFunction,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:void 0===t.wrapX||t.wrapX,transition:t.transition})};o.a.inherits(n,r.a),t.a=n},955:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=a(1),i=o(r),n=a(8),l=a(25),u=o(l),s=a(37),c=o(s),m=a(34),p=o(m),d=a(23),f=o(d),h=a(16),g=o(h),v=a(21),w=new u.default({layers:[new p.default({name:"OSM",source:new f.default})],view:new c.default({center:g.default.fromLonLat([37.4057,8.81566]),zoom:4})});(0,n.render)(i.default.createElement("div",null,i.default.createElement("div",{id:"map",style:{height:"400px"}}),i.default.createElement("div",{className:"example-block"},i.default.createElement("span",null,"Select a measure type:"),i.default.createElement(v.ToggleGroup,null,i.default.createElement(v.MeasureButton,{name:"line",map:w,measureType:"line"},"Distance"),i.default.createElement(v.MeasureButton,{name:"steps",map:w,measureType:"line",showMeasureInfoOnClickedPoints:!0},"Distance with step labels"),i.default.createElement(v.MeasureButton,{name:"multi",map:w,measureType:"line",multipleDrawing:!0},"Distance with multiple drawing"),i.default.createElement(v.MeasureButton,{name:"poly",map:w,measureType:"polygon"},"Area"),i.default.createElement(v.MeasureButton,{name:"angle",map:w,measureType:"angle"},"Angle")))),document.getElementById("exampleContainer"),function(){w.setTarget("map")})}},[955]);