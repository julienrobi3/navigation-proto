(function(e){function t(t){for(var r,o,s=t[0],l=t[1],c=t[2],u=0,m=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);d&&d(t);while(m.length)m.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/navigation-proto/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1336:function(e){e.exports=JSON.parse('{"layers":[{"type":"wms","url":"https://geo.weather.gc.ca/geomet?lang=fr&service=WMS&version=1.3.0&request=GetCapabilities&layer=RADAR_1KM_RSNO","title":{"en":"LayerEN","fr":"Précipitation radar"},"visibleLayer":false,"infoLegende":["Légende","<img src=\\"https://geo.weather.gc.ca/geomet?lang=fr&version=1.3.0&service=WMS&request=GetLegendGraphic&sld_version=1.1.0&layer=RADAR_1KM_RRAI&format=image/png&STYLE=RADARURPPRECIPR14-LINEAR\\">"],"name":"RADAR_1KM_RSNO","customParameters":"radar","opacity":1,"groupeParentName":"observations"},{"type":"wms","url":"https://geo.weather.gc.ca/geomet?lang=fr&service=WMS&version=1.3.0&request=GetCapabilities&layer=RADAR_COVERAGE_RRAI.INV","title":{"en":"LayerEN","fr":"Couverture Radar"},"visibleLayer":false,"name":"RADAR_COVERAGE_RRAI.INV","customParameters":"radar","opacity":1,"groupeParentName":"observations"},{"type":"wfs","url":"https://geoserver.preprod.ogsl.ca/geoserver/robitaillej/ogc/features/","collectionId":"robitaillej:test_create_shp","title":{"en":"LayerEN","fr":"regions"},"visibleLayer":true,"name":"layer_regions","renderer":{"type":"simple","symbol":{"type":"simple-fill","style":"none","outline":{"width":2,"color":"black"}}},"opacity":0.5},{"type":"wms","url":"https://geo.weather.gc.ca/geomet?lang=fr&service=WMS&version=1.3.0&request=GetCapabilities&layer=OCEAN.GIOPS.2D_UU2W","title":{"en":"LayerEN","fr":"Prévision des courants (m/s)"},"visibleLayer":false,"infoLegende":"<img src=\\"https://geo.weather.gc.ca/geomet?lang=fr&version=1.3.0&service=WMS&request=GetLegendGraphic&sld_version=1.1.0&layer=CGSL.ETA_UOGRD&format=image/png&STYLE=SEA_CURARROW\\">","name":"OCEAN.GIOPS.2D_UU2W","opacity":1,"groupeParentName":"previsions"}],"groupes":[{"name":"observations","title":{"en":"GroupEn","fr":"Observations"}},{"name":"previsions","title":{"en":"GroupEn","fr":"Prévisions"}}]}')},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("web-map",{attrs:{id:"viewDiv"}}),n("div",{attrs:{id:"layerlist"}}),e._m(0),e._m(1)],1)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"panel"}},[n("div",{attrs:{id:"region"}},[e._v(" Prévisions météo maritime - veuillez cliquer sur une région ")]),n("div",{attrs:{id:"emis"}}),n("table",{attrs:{id:"headerVent"}}),n("div",{attrs:{id:"vent"}}),n("table",{attrs:{id:"headerVagues"}}),n("div",{attrs:{id:"vagues"}}),n("table",{attrs:{id:"headerConditions"}}),n("div",{attrs:{id:"conditions"}}),n("table",{attrs:{id:"longTerme"}}),n("div",{attrs:{id:"emisExtent"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"sliderContainer"}},[n("div",{attrs:{id:"titleDate"}}),n("div",{attrs:{id:"slider"}})])}],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},s=[],l=(n("99af"),n("4de4"),n("7db0"),n("b0c0"),n("3835")),c=n("afaa"),d=n("1157"),u=n.n(d),m=u.a;function p(e,t){document.getElementById("panel").style.display=e-t<=0?"block":"none"}function g(e){var t;t="test_create_shp.1"===e?"m0000198_f":"m0000199_f";var n=new XMLHttpRequest;n.open("GET","https://cors-anywhere.herokuapp.com/https://dd.meteo.gc.ca/marine_weather/xml/st_lawrence/"+t+".xml",!0),n.onreadystatechange=function(){if(4==n.readyState&&200==n.status){var e=n.responseText,t=new DOMParser,r=t.parseFromString(e,"text/xml"),a=document.getElementById("buttonWarning");a&&a.remove();var i=document.getElementById("textWarning");if(i&&i.remove(),document.getElementById("region").innerHTML=r.getElementsByTagName("area")[0].innerHTML,0!==r.getElementsByTagName("warnings").length&&null===r.getElementsByTagName("warnings")[0].innerHTML){var o=r.getElementsByTagName("warnings")[0];if("EN VIGUEUR"===o.getElementsByTagName("event")[0].getAttribute("status")){var s=document.createElement("div");s.setAttribute("id","textWarning"),s.innerHTML=o.getElementsByTagName("event")[0].getAttribute("name")+" en vigueur pour cette région. Pour plus de détails, veuillez consulter <a href=https://meteo.gc.ca/marine/region_f.html?mapID=12 target='_blank'>météo maritime Canada</a>.",s.style.display="none";var l=document.getElementById("headerVent");l.insertAdjacentElement("beforebegin",s);var c=document.createElement("BUTTON");c.innerHTML="Avertissement",c.setAttribute("id","buttonWarning"),c.onclick=function(){var e=document.getElementById("textWarning");"none"===e.style.display?e.style.display="block":e.style.display="none"},s.insertAdjacentElement("beforebegin",c)}}var d=r.getElementsByTagName("regularForecast")[0];if(d){document.getElementById("emis").innerHTML="Prévisions émises le "+d.getElementsByTagName("textSummary")[1].innerHTML;var u=d.getElementsByTagName("wind")[0],m=d.getElementsByTagName("periodOfCoverage")[0];u&&(document.getElementById("headerVent").innerHTML="<tr><td id=header>Vent</td><td id=periode>pour "+m.innerHTML+"</td></tr>",document.getElementById("vent").innerHTML=u.innerHTML);var p=d.getElementsByTagName("weatherVisibility")[0];p&&(document.getElementById("headerConditions").innerHTML="<tr><td id=header>Conditions et visibilité</td><td id=periode>pour "+m.innerHTML+"</td></tr>",document.getElementById("conditions").innerHTML=p.innerHTML)}var g=r.getElementsByTagName("waveForecast")[0];if(g){var y=g.getElementsByTagName("weatherCondition")[0],f=y.getElementsByTagName("textSummary")[0],v=d.getElementsByTagName("periodOfCoverage")[0];f&&(document.getElementById("headerVagues").innerHTML="<tr><td id=header>Vagues</td><td id=periode>pour "+v.innerHTML+"</td></tr>",document.getElementById("vagues").innerHTML=f.innerHTML)}document.getElementById("longTerme").innerHTML="<tr><th colspan='2'>Prévisions long terme</th></tr>";var h=r.getElementsByTagName("extendedForecast")[0];if(h)for(var b=h.getElementsByTagName("weatherCondition")[0],w=b.getElementsByTagName("forecastPeriod"),T=0;T<w.length;T++)document.getElementById("longTerme").insertAdjacentHTML("beforeend","<tr><td>"+w[T].getAttribute("name")+"</td><td>"+w[T].innerHTML+"</td></tr>");else document.getElementById("longTerme").insertAdjacentHTML("beforeend","<tr><td>Prévisions long terme non disponibles pour le moment</td></tr>");document.getElementById("emisExtent").innerHTML="Prévisions long terme émises le "+h.getElementsByTagName("textSummary")[1].innerHTML}},n.send(null)}window.$=m;n("d81d"),n("d3b7"),n("ddb0");var y=n("5698");function f(e,t,n,r){for(var a=y["n"]("%Y-%m-%dT%H:%M:00Z"),i=0;i<e.length;i++)e[i].date=a(e[i].eventDate);var o=y["h"](e,(function(e){return e.value})),s=y["g"](e,(function(e){return e.value})),l=6,c=new Date;c.setHours(c.getHours()-l);var d=new Date;d.setHours(d.getHours()+l);var u=y["e"](e,(function(e){return e.date})),m=200,p=150,g={top:10,bottom:35,left:15,right:10},f=y["l"](t).append("svg").attr("height",p).attr("width",m),v=y["k"]().domain([c,d]).range([g.left,m-g.right]),h=y["j"]().domain(y["e"](e,(function(e){return e.value}))).range([p-g.bottom,g.top]);f.append("g");var b=y["f"]().x((function(e){return v(e.date)})).y((function(e){return h(e.value)}));f.append("path").data([e]).attr("class","line").attr("d",b).style("stroke-width",2).style("stroke","blue").style("fill","none");var w=a(n),T=[{date:w,yvalue:o},{date:w,yvalue:s}],E=y["f"]().x((function(e){return v(e.date)})).y((function(e){return h(e.yvalue)}));f.append("path").data([T]).attr("class","line").attr("d",E).style("stroke-width",2).style("stroke","red").style("fill","none");var M=p-g.bottom,L=y["m"]("%d/%m %H:%M"),N=y["a"](v).ticks(10).tickFormat(L);f.append("g").attr("class","xaxis").attr("transform","translate(0,"+M+")").call(N).selectAll("text").style("text-anchor","end").attr("dx","-.8em").attr("dy",".15em").attr("transform","rotate(-65)").style("font-size",10),f.append("g").attr("class","yaxis").attr("transform","translate("+g.left+",0)").call(y["b"](h).ticks(6));var H=f.append("g").append("circle").style("fill","none").attr("stroke","black").attr("r",8.5).style("opacity",0),S=f.append("g").append("text").style("opacity",0).attr("text-anchor","left").attr("alignment-baseline","middle"),x=f.append("rect").style("fill","none").style("pointer-events","all").attr("width",m).attr("height",p).on("mouseover",B).on("mousemove",C).on("mouseout",O).on("click",D);function I(t){var n=v.invert(y["i"](t,t.target)[0]),r=y["c"](P,n);return _=e[r],_}function D(){if(!event.defaultPrevented){var e=new Date(I(event).eventDate);r.values=[e]}}function B(){H.style("opacity",1),S.style("opacity",1)}var _,A,P=e.map((function(e){return e.date}));function C(){I(event),H.attr("cx",v(_.date)).attr("cy",h(_.value)),S.html(_.value).attr("x",v(_.date)+15).attr("y",h(_.value)).style("stroke","black")}function O(){H.style("opacity",0),S.style("opacity",0)}function R(){I(event),H.style("opacity",0),S.style("opacity",0),A=_}function k(){I(event);var t=A.date.getTime()-_.date.getTime();c.setTime(c.getTime()+t),d.setTime(d.getTime()+t),c<u[0]&&(c=new Date(u[0]),d.setHours(c.getHours()+2*l)),d>u[1]&&(d=new Date(u[1]),c.setHours(d.getHours()-2*l)),v.domain([c,d]),f.select(".xaxis").call(N).selectAll("text").style("text-anchor","end").attr("dx","-.8em").attr("dy",".15em").attr("transform","rotate(-65)").style("font-size",10),f.selectAll("path").remove(),f.append("path").data([e]).attr("class","line").attr("d",b).style("stroke-width",2).style("stroke","blue").style("fill","none"),f.append("path").data([T]).attr("class","line").attr("d",E).style("stroke-width",2).style("stroke","red").style("fill","none")}function j(){H.style("opacity",1),S.style("opacity",1)}x.call(y["d"]().on("start",R).on("drag",k).on("end",j))}var v=f,h=n("1336"),b=(n("fb6a"),n("ac1f"),n("4d90"),n("1276"),u.a);function w(){var e;return b.ajax({url:"https://api.iwls.azure.cloud.dfo-mpo.gc.ca/api/v1/stations",type:"GET",async:!1,contentType:"application/json; charset=utf-8",success:function(t){e=t}}),e}function T(e,t,n,r,a){return e+"-"+t+"-"+n+"T"+r+":"+a+":00Z"}function E(e){var t=String(e.getUTCFullYear()),n=String(e.getUTCMonth()+1).padStart(2,"0"),r=String(e.getUTCDate()).padStart(2,"0"),a=String(e.getUTCHours()).padStart(2,"0"),i=String(e.getUTCMinutes()).padStart(2,"0");return T(t,n,r,a,i)}function M(e,t){var n,r,a=E(e.dateMin),i=E(e.dateNow),o=E(e.dateMax);"wlo"===t.color&&(b.ajax({url:"https://api.iwls.azure.cloud.dfo-mpo.gc.ca/api/v1/stations/"+t.id+"/data?time-series-code=wlo&from="+a+"&to="+i,type:"GET",async:!1,contentType:"application/json; charset=utf-8",success:function(e){n=e}}),t.lastDate=n[n.length-1]["eventDate"],t.lastWlo=n[n.length-1]["value"]);b.ajax({url:"https://api.iwls.azure.cloud.dfo-mpo.gc.ca/api/v1/stations/"+t.id+"/data?time-series-code=wlp&from="+a+"&to="+o,type:"GET",async:!1,contentType:"application/json; charset=utf-8",success:function(e){r=e}}),console.log("predictions",r),t.lastDateWlp=r[r.length-1]["eventDate"],t.lastWlp=r[r.length-1]["value"],t.predictions=r,t.timeNow=i}function L(e,t){var n=[],r=e.toISOString().slice(0,19)+"Z",a=t.toISOString().slice(0,19)+"Z",i=new Date(r),o=r;while(o<a)o=i.toISOString().slice(0,19)+"Z",n.push(o),i.setTime(i.getTime()+36e5);for(var s=0;s<n.length;s++)n[s]=new Date(n[s]),n[s].setHours(n[s].getHours()+Math.round(n[s].getMinutes()/60)),n[s].setMinutes(0,0,0);return n}function N(e){var t=[];return b.ajax({url:"https://geo.weather.gc.ca/geomet?lang=fr&service=WMS&version=1.3.0&request=GetCapabilities&layer="+e,type:"GET",async:!1,contentType:"application/json; charset=utf-8",success:function(e){t=e}}),t.getElementsByTagName("Dimension")[0].innerHTML.split("/")}function H(e,t){var n,r,a,i=N(t)[2];return"PT10M"===i?(n=6e5,r=new Date(Math.round(e.getTime()/n)*n),a=E(r)):"PT1H"===i?(n=36e5,r=new Date(Math.round(e.getTime()/n)*n),a=E(r)):"PT3H"===i&&(n=108e5,r=new Date(Math.round(e.getTime()/n)*n),a=E(r)),a}window.$=b;var S={name:"web-map",mounted:function(){var e=this;Object(c["loadModules"])(["esri/Map","esri/views/MapView","esri/layers/OGCFeatureLayer","esri/Graphic","esri/layers/GraphicsLayer","esri/geometry/Point","esri/popup/content/CustomContent","esri/layers/WMSLayer","esri/widgets/LayerList","esri/layers/GroupLayer","esri/core/watchUtils","esri/widgets/TimeSlider"],{css:!0}).then((function(t){var n=Object(l["a"])(t,12),r=n[0],a=n[1],i=n[2],o=n[3],s=n[4],c=n[5],d=n[6],u=n[7],m=n[8],y=n[9],f=n[10],b=n[11];function T(){this.dateNow=new Date,this.dateChosen=new Date,this.dateMin=new Date,this.dateMin.setHours(this.dateMin.getHours()-18),this.dateMax=new Date,this.dateMax.setHours(this.dateMax.getHours()+18),this.datesArrayHours=L(this.dateMin,this.dateMax)}var E=new T,S=new Proxy(E,{set:function(e,t,n){var r=n;console.log("layerList.visibleItems",$.visibleItems);for(var a=0;a<$.visibleItems.items.length;a++)"group"===$.visibleItems.items[a].layer.type&&($.visibleItems.items[a].panel={});for(var i=x.allLayers.filter((function(e){return"wms"===e.type})),o=0;o<i.items.length;o++){var s=i.items[o].parent;s.remove(i.items[o])}for(var l=function(e){if(_[e].visible)for(var t=0;t<h.layers.length;t++)h.layers[t].groupeParentName===_[e].name&&(d=H(n,h.layers[t].name),m=new u({url:h.layers[t].url,title:h.layers[t].title.fr,name:h.layers[t].name,listMode:"hide-children",visible:I[h.layers[t].name],infoLegende:h.layers[t].infoLegende,opacity:h.layers[t].opacity,customParameters:{time:d}}),_[e].add(m),g=N(h.layers[t].name),(d<g[0]||d>g[1])&&_[e].remove(m),console.log("layerView",R.whenLayerView(m)),setTimeout((function(){z(_[e].title)}),1))},c=0;c<_.length;c++){var d,m,g;l(c)}return p(S.dateNow,r),document.getElementById("titleDate").innerHTML=n,e[t]=n,!0}}),x=new r({basemap:"topo-vector"});e.view=new a({container:e.$el,map:x,center:[-68.805,47.027],zoom:7});var I={},D=new Proxy([],{set:function(e,t,n){for(var r=function(e){f.watch(D[e],"visible",(function(t){I[D[e].name]=t}))},a=0;a<D.length;a++)r(a);return e[t]=n,!0}});x.allLayers.on("change",(function(e){D.length=0;for(var t=0;t<e.target.items.length;t++)if(e.target.items[t].name){D.push(e.target.items[t]);var n=e.target.items[t].name;e.target.items[t].name in I||(I[n]=e.target.items[t].visible)}}));var B=w(),_=A(h.groupes);function A(e){for(var t=[],n=0;n<e.length;n++){var r=new y({title:e[n].title.fr,layers:[],visible:!1,name:e[n].name});t.push(r),x.add(r)}return t}for(var P=0;P<h.layers.length;P++)if("wfs"===h.layers[P].type){var C=new i({url:h.layers[P].url,collectionId:h.layers[P].collectionId,popupEnabled:!0,name:h.layers[P].name,visible:!0,title:h.layers[P].title.fr,listMode:"hide",renderer:h.layers[P].renderer});x.add(C)}for(var O,R=e.view,k=function(e){f.watch(_[e],"visible",(function(t){if(t)for(var n=function(t){a=x.allLayers.find((function(e){return e.name===h.layers[t].name})),"wms"===h.layers[t].type&&h.layers[t].groupeParentName===_[e].name&&void 0===a&&(i=H(E.dateChosen,h.layers[t].name),o=new u({url:h.layers[t].url,customParameters:{time:i},title:h.layers[t].title.fr,name:h.layers[t].name,listMode:"hide-children",visible:h.layers[t].visibleLayer,infoLegende:h.layers[t].infoLegende,opacity:h.layers[t].opacity}),_[e].add(o),s=N(h.layers[t].name),(i<s[0]||i>s[1])&&_[e].remove(o),setTimeout((function(){z(_[e].title)}),1))},r=0;r<h.layers.length;r++){var a,i,o,s;n(r)}}))},j=0;j<_.length;j++)k(j);function G(e){var t=x.allLayers.find((function(e){return"stationsLayerTrue"===e.name}));if(!e.results[0].graphic.geometry)return t=x.allLayers.find((function(e){return"stationsLayerTrue"===e.name})),t&&x.remove(t),null;if("polygon"===e.results[0].graphic.geometry.type){var n=e.results[0].graphic.geometry;return t&&x.remove(t),R.goTo(e.results[0].graphic.geometry),console.log("id",e.results[0].graphic.attributes.OBJECTID),g(e.results[0].graphic.attributes.OBJECTID),n}var r=e.results[0].graphic.attributes;M(E,r)}function W(e){if(e){var t=new s({visible:!0,title:"Stations",name:"stationsLayerTrue",infoLegendeTitre:"Légende"});x.add(t);for(var n=0;n<B.length;n++){var r=new c({longitude:B[n]["longitude"],latitude:B[n]["latitude"],spatialReference:{wkid:3857}}),a=e.contains(r);if(a){for(var i=null,l=0;l<B[n]["timeSeries"].length;l++)"wlo"===B[n]["timeSeries"][l]["code"]&&(i="wlo");O=new o("wlo"===i?{geometry:r,symbol:{type:"simple-marker",color:"#d7191c"},popupTemplate:U,attributes:{id:B[n]["id"],officialName:B[n]["officialName"],timeSeries:B[n]["timeSeries"],color:i,lastDate:[],lastWlo:[],lastDateWlp:[],lastWlp:[],predictions:{},timeNow:[]}}:{geometry:r,symbol:{type:"simple-marker",color:"#1a9641"},popupTemplate:F,attributes:{id:B[n]["id"],officialName:B[n]["officialName"],timeSeries:B[n]["timeSeries"],color:i,lastDateWlp:[],lastWlp:[],predictions:{},timeNow:[]}}),t.add(O)}$.listItemCreatedFunction=function(e){var t=e.item;"Stations"===t.title&&(t.panel={content:"<p>Stations rouges: observations et prévisions</p><p>Stations vertes: observations seulement",open:!0})}}}}R.on("click",(function(e){R.hitTest(e).then(G).then(W)}));var V=new d({outFields:["*"],creator:function(e){var t=document.createElement("div"),n=e.graphic.attributes.predictions;t.innerHTML="Prédictions <br>";var r=n;return v(r,t,e.graphic.attributes.timeNow,J),t}}),U={title:"{officialName}",content:[{type:"fields",fieldInfos:[{fieldName:"lastDate",label:"Dernière date d'observation",format:{places:0,digitSeparator:!0}},{fieldName:"lastWlo",label:"Valeur"}]},V]},F={title:"{officialName}",content:[{type:"fields",fieldInfos:[{fieldName:"lastDateWlp",label:"Dernier moment de prédiction",format:{places:0,digitSeparator:!0}}]},V]},$=new m({view:e.view,container:document.createElement("div")});$.container.style="height: 100%";var q=document.getElementById("layerlist");function z(e){$.listItemCreatedFunction=function(t){var n=t.item;n.title===e&&(0===n.children.items.length?n.panel={content:"Aucune couche pour le temps sélectionné",open:!0}:n.panel={content:""}),"infoLegende"in n.layer&&(n.panel={content:n.layer.infoLegende,open:!1})}}q.appendChild($.container);var J=new b({container:document.getElementById("slider"),view:e.view,mode:"instant",fullTimeExtent:{start:E.datesArrayHours[0],end:E.datesArrayHours[E.datesArrayHours.length-1]},values:[E.dateNow],stops:{interval:{value:20,unit:"minutes"}},tickConfigs:[{mode:"count",values:7,labelsVisible:!0,labelFormatFunction:function(e){var t=new Date(e);return"".concat(t.getHours(),":").concat(t.getUTCMinutes(),"0")}}],layout:"compact"});R.ui.add(J,"manual"),J.watch("values",(function(e){S.dateChosen=e[0]})),document.getElementById("titleDate").innerHTML=E.dateNow}))},beforeDestroy:function(){this.view&&this.view.destroy()}},x=S,I=n("2877"),D=Object(I["a"])(x,o,s,!1,null,null,null),B=D.exports,_={name:"App",components:{WebMap:B}},A=_,P=(n("5c0b"),Object(I["a"])(A,a,i,!1,null,null,null)),C=P.exports;r["a"].config.productionTip=!1,r["a"].prototype.a="123";var O=r["a"].observable({errors:{}});Object.defineProperty(r["a"].prototype,"$errors",{get:function(){return O.errors},set:function(e){O.errors=e}}),new r["a"]({render:function(e){return e(C)},watch:{$errors:function(){console.log("$errors has changed")}}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.bcc03a44.js.map