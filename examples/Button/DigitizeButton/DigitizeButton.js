webpackJsonp([13],{23:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(0),r=a(24),o=function(e){var t,a=e||{};t=void 0!==a.attributions?a.attributions:[o.ATTRIBUTION];var i=void 0!==a.crossOrigin?a.crossOrigin:"anonymous",n=void 0!==a.url?a.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";r.a.call(this,{attributions:t,cacheSize:a.cacheSize,crossOrigin:i,opaque:void 0===a.opaque||a.opaque,maxZoom:void 0!==a.maxZoom?a.maxZoom:19,reprojectionErrorThreshold:a.reprojectionErrorThreshold,tileLoadFunction:a.tileLoadFunction,url:n,wrapX:a.wrapX})};i.a.inherits(o,r.a),o.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.',t.default=o},24:function(e,t,a){"use strict";var i=a(0),r=a(38),o=a(35),n=function(e){var t=e||{},a=void 0!==t.projection?t.projection:"EPSG:3857",i=void 0!==t.tileGrid?t.tileGrid:o.a.createXYZ({extent:o.a.extentFromProjection(a),maxZoom:t.maxZoom,minZoom:t.minZoom,tileSize:t.tileSize});r.a.call(this,{attributions:t.attributions,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,logo:t.logo,opaque:t.opaque,projection:a,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileGrid:i,tileLoadFunction:t.tileLoadFunction,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:void 0===t.wrapX||t.wrapX,transition:t.transition})};i.a.inherits(n,r.a),t.a=n},956:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var r=a(1),o=i(r),n=a(8),l=a(25),u=i(l),c=a(37),d=i(c),p=a(34),m=i(p),s=a(23),f=i(s),g=a(16),w=i(g),y=a(21),h=new u.default({layers:[new m.default({name:"OSM",source:new f.default})],view:new d.default({center:w.default.fromLonLat([37.4057,8.81566]),zoom:4})});(0,n.render)(o.default.createElement("div",null,o.default.createElement("div",{id:"map",style:{height:"400px"}}),o.default.createElement("div",{className:"example-block"},o.default.createElement("span",null,"Select a digitize type:"),o.default.createElement(y.ToggleGroup,{orientation:"horizontal"},o.default.createElement(y.DigitizeButton,{name:"drawPoint",map:h,drawType:"Point"},"Draw point"),o.default.createElement(y.DigitizeButton,{name:"drawLine",map:h,drawType:"LineString"},"Draw line"),o.default.createElement(y.DigitizeButton,{name:"drawPolygon",map:h,drawType:"Polygon"},"Draw polygon"),o.default.createElement(y.DigitizeButton,{name:"drawCircle",map:h,drawType:"Circle"},"Draw circle"),o.default.createElement(y.DigitizeButton,{name:"drawRectangle",map:h,drawType:"Rectangle"},"Draw rectangle"),o.default.createElement(y.DigitizeButton,{name:"drawText",map:h,drawType:"Text"},"Draw text label"),o.default.createElement(y.DigitizeButton,{name:"selectAndModify",map:h,editType:"Edit"},"Select and modify features"),o.default.createElement(y.DigitizeButton,{name:"copyFeature",map:h,editType:"Copy"},"Copy features"),o.default.createElement(y.DigitizeButton,{name:"deleteFeature",map:h,editType:"Delete"},"Delete features")))),document.getElementById("exampleContainer"),function(){h.setTarget("map")})}},[956]);