webpackJsonp([21],{970:function(e,t,r){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}var a=r(1),o=l(a),n=r(8),u=r(71),f=l(u),d=r(57),i=l(d),m=r(21),c=new f.default({geometry:new i.default([19.09,1.09])}),p={foo:"bar",foo2:"bar2",foo3:"bar3",foo9:"bar9",name:"Point"};c.setProperties(p),c.setId(1909);var h={foo:"A",foo2:"nice",foo9:"example"};(0,n.render)(o.default.createElement("div",{className:"example-block"},o.default.createElement("h2",null,"PropertyGrid without a filter:"),o.default.createElement(m.PropertyGrid,{feature:c}),o.default.createElement("br",null),o.default.createElement("h2",null,"PropertyGrid with filtered attributes (foo and foo9 only):"),o.default.createElement(m.PropertyGrid,{feature:c,attributeFilter:["foo","foo9"],style:{width:"50%"}}),o.default.createElement("br",null),o.default.createElement("h2",null,"PropertyGrid with different column width (70 % width for column name / 30 % width for column value):"),o.default.createElement(m.PropertyGrid,{feature:c,attributeNameColumnWidthInPercent:70,style:{width:"50%"}}),o.default.createElement("br",null),o.default.createElement("h2",null,"PropertyGrid with column name mapping:"),o.default.createElement(m.PropertyGrid,{feature:c,attributeFilter:["foo","foo2","foo9","name"],attributeNames:h,style:{width:"50%"}})),document.getElementById("exampleContainer"))}},[970]);