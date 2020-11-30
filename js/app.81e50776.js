(function(e){function t(t){for(var n,s,o=t[0],l=t[1],c=t[2],u=0,m=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&m.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(m.length)m.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={app:0},i=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/navigation-proto/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var d=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},1336:function(e){e.exports=JSON.parse('{"layers":[{"type":"wms","url":"https://geo.weather.gc.ca/geomet?lang=fr&service=WMS&version=1.3.0&request=GetCapabilities&layer=RADAR_1KM_RSNO","title":{"en":"LayerEN","fr":"Précipitation radar"},"visibleLayer":false,"infoLegende":["Légende","<img src=\\"https://geo.weather.gc.ca/geomet?lang=fr&version=1.3.0&service=WMS&request=GetLegendGraphic&sld_version=1.1.0&layer=RADAR_1KM_RRAI&format=image/png&STYLE=RADARURPPRECIPR14-LINEAR\\">"],"name":"RADAR_1KM_RSNO","customParameters":"radar","opacity":1,"groupeParentName":"observations"},{"type":"wms","url":"https://geo.weather.gc.ca/geomet?lang=fr&service=WMS&version=1.3.0&request=GetCapabilities&layer=RADAR_COVERAGE_RRAI.INV","title":{"en":"LayerEN","fr":"Couverture Radar"},"visibleLayer":false,"name":"RADAR_COVERAGE_RRAI.INV","customParameters":"radar","opacity":1,"groupeParentName":"observations"},{"type":"wfs","url":"https://geoserver.preprod.ogsl.ca/geoserver/robitaillej/ogc/features/","collectionId":"robitaillej:test_create_shp","title":{"en":"LayerEN","fr":"regions"},"visibleLayer":true,"name":"layer_regions","renderer":{"type":"simple","symbol":{"type":"simple-fill","style":"none","outline":{"width":2,"color":"black"}}},"opacity":0.5},{"type":"wms","url":"https://geo.weather.gc.ca/geomet?lang=fr&service=WMS&version=1.3.0&request=GetCapabilities&layer=OCEAN.GIOPS.2D_UU2W","title":{"en":"LayerEN","fr":"Prévision des courants (m/s)"},"visibleLayer":false,"infoLegende":"<img src=\\"https://geo.weather.gc.ca/geomet?lang=fr&version=1.3.0&service=WMS&request=GetLegendGraphic&sld_version=1.1.0&layer=CGSL.ETA_UOGRD&format=image/png&STYLE=SEA_CURARROW\\">","name":"OCEAN.GIOPS.2D_UU2W","opacity":1,"groupeParentName":"previsions"}],"groupes":[{"name":"observations","title":{"en":"GroupEn","fr":"Observations"}},{"name":"previsions","title":{"en":"GroupEn","fr":"Prévisions"}}]}')},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("web-map",{attrs:{id:"viewDiv"}}),a("div",{attrs:{id:"layerlist"}}),e._m(0),e._m(1)],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"panel"}},[a("div",{attrs:{id:"region"}},[e._v(" Prévisions météo maritime - veuillez cliquer sur une région ")]),a("div",{attrs:{id:"emis"}}),a("table",{attrs:{id:"headerVent"}}),a("div",{attrs:{id:"vent"}}),a("table",{attrs:{id:"headerVagues"}}),a("div",{attrs:{id:"vagues"}}),a("table",{attrs:{id:"headerConditions"}}),a("div",{attrs:{id:"conditions"}}),a("table",{attrs:{id:"longTerme"}}),a("div",{attrs:{id:"emisExtent"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"sliderContainer"}},[a("div",{attrs:{id:"titleDate"}}),a("div",{attrs:{id:"slider"}})])}],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div")},o=[],l=(a("99af"),a("4de4"),a("7db0"),a("b0c0"),a("3835")),c=a("afaa"),d=a("1157"),u=a.n(d),m=u.a;function p(e,t){document.getElementById("panel").style.display=e-t<=0?"block":"none"}function g(e){var t;t="test_create_shp.1"===e?"m0000198_f":"m0000199_f";var a=new XMLHttpRequest;a.open("GET","https://cors-anywhere.herokuapp.com/https://dd.meteo.gc.ca/marine_weather/xml/st_lawrence/"+t+".xml",!0),a.onreadystatechange=function(){if(4==a.readyState&&200==a.status){var e=a.responseText,t=new DOMParser,n=t.parseFromString(e,"text/xml"),r=document.getElementById("buttonWarning");r&&r.remove();var i=document.getElementById("textWarning");if(i&&i.remove(),document.getElementById("region").innerHTML=n.getElementsByTagName("area")[0].innerHTML,0!==n.getElementsByTagName("warnings").length&&null===n.getElementsByTagName("warnings")[0].innerHTML){var s=n.getElementsByTagName("warnings")[0];if("EN VIGUEUR"===s.getElementsByTagName("event")[0].getAttribute("status")){var o=document.createElement("div");o.setAttribute("id","textWarning"),o.innerHTML=s.getElementsByTagName("event")[0].getAttribute("name")+" en vigueur pour cette région. Pour plus de détails, veuillez consulter <a href=https://meteo.gc.ca/marine/region_f.html?mapID=12 target='_blank'>météo maritime Canada</a>.",o.style.display="none";var l=document.getElementById("headerVent");l.insertAdjacentElement("beforebegin",o);var c=document.createElement("BUTTON");c.innerHTML="Avertissement",c.setAttribute("id","buttonWarning"),c.onclick=function(){var e=document.getElementById("textWarning");"none"===e.style.display?e.style.display="block":e.style.display="none"},o.insertAdjacentElement("beforebegin",c)}}var d=n.getElementsByTagName("regularForecast")[0];if(d){document.getElementById("emis").innerHTML="Prévisions émises le "+d.getElementsByTagName("textSummary")[1].innerHTML;var u=d.getElementsByTagName("wind")[0],m=d.getElementsByTagName("periodOfCoverage")[0];u&&(document.getElementById("headerVent").innerHTML="<tr><td id=header>Vent</td><td id=periode>pour "+m.innerHTML+"</td></tr>",document.getElementById("vent").innerHTML=u.innerHTML);var p=d.getElementsByTagName("weatherVisibility")[0];p&&(document.getElementById("headerConditions").innerHTML="<tr><td id=header>Conditions et visibilité</td><td id=periode>pour "+m.innerHTML+"</td></tr>",document.getElementById("conditions").innerHTML=p.innerHTML)}var g=n.getElementsByTagName("waveForecast")[0];if(g){var y=g.getElementsByTagName("weatherCondition")[0],f=y.getElementsByTagName("textSummary")[0],v=d.getElementsByTagName("periodOfCoverage")[0];f&&(document.getElementById("headerVagues").innerHTML="<tr><td id=header>Vagues</td><td id=periode>pour "+v.innerHTML+"</td></tr>",document.getElementById("vagues").innerHTML=f.innerHTML)}document.getElementById("longTerme").innerHTML="<tr><th colspan='2'>Prévisions long terme</th></tr>";var h=n.getElementsByTagName("extendedForecast")[0];if(h)for(var w=h.getElementsByTagName("weatherCondition")[0],b=w.getElementsByTagName("forecastPeriod"),T=0;T<b.length;T++)document.getElementById("longTerme").insertAdjacentHTML("beforeend","<tr><td>"+b[T].getAttribute("name")+"</td><td>"+b[T].innerHTML+"</td></tr>");else document.getElementById("longTerme").insertAdjacentHTML("beforeend","<tr><td>Prévisions long terme non disponibles pour le moment</td></tr>");document.getElementById("emisExtent").innerHTML="Prévisions long terme émises le "+h.getElementsByTagName("textSummary")[1].innerHTML}},a.send(null)}window.$=m;a("d81d"),a("d3b7"),a("ddb0");var y=a("5698");function f(e,t,a,n){console.log(a);for(var r=0;r<e.length;r++)e[r].date=new Date(e[r].eventDate);var i=y["h"](e,(function(e){return e.value})),s=y["g"](e,(function(e){return e.value})),o=6,l=new Date(a);l.setHours(l.getHours()-o);var c=new Date(a);c.setHours(c.getHours()+o);var d=y["e"](e,(function(e){return e.date})),u=200,m=150,p={top:10,bottom:35,left:25,right:10},g=y["l"](t).append("svg").attr("height",m).attr("width",u),f=y["k"]().range([p.left,u-p.right]);W();var v=y["j"]().domain(y["e"](e,(function(e){return e.value}))).range([m-p.bottom,p.top]);g.append("g");var h=y["f"]().x((function(e){return f(e.date)})).y((function(e){return v(e.value)}));g.append("path").data([e]).attr("class","line").attr("d",h).style("stroke-width",2).style("stroke","blue").style("fill","none");var w=new Date(a);console.log("date",w);var b=[{date:w,value:i},{date:w,value:s}];g.append("path").data([b]).attr("class","line").attr("d",h).style("stroke-width",2).style("stroke","black").style("fill","none").style("stroke-dasharray","3, 3");var T=m-p.bottom,E=y["m"]("%H:%M"),M=y["a"](f).ticks(10).tickFormat(E);g.append("g").attr("class","xaxis").attr("transform","translate(0,"+T+")").call(M).selectAll("text").style("text-anchor","end").attr("dx","-.8em").attr("dy",".15em").attr("transform","rotate(-65)").style("font-size",10),g.append("g").attr("class","yaxis").attr("transform","translate("+p.left+",0)").call(y["b"](v).ticks(6));var L=.4,N=g.append("path").attr("class","lineFollow").style("stroke-width",2).style("stroke","black").style("fill","none").style("stroke-dasharray","3, 3").style("opacity",L),D=g.append("path").attr("class","lineFollow").style("stroke-width",2).style("stroke","black").style("fill","none").style("stroke-dasharray","3, 3").style("opacity",L),H=g.append("g").append("circle").style("fill","none").attr("stroke","black").attr("r",8.5).style("opacity",0),S=g.append("g").append("text").style("opacity",0).attr("text-anchor","left").attr("alignment-baseline","middle"),x=g.append("rect").style("fill","none").style("pointer-events","all").attr("width",u).attr("height",m).on("mouseover",A).on("mousemove",R).on("mouseout",j).on("click",B);function I(t){var a=f.invert(y["i"](t,t.target)[0]),n=y["c"](O,a);return _=e[n],_}function B(){if(!event.defaultPrevented){var e=new Date(I(event).eventDate);n.values=[e]}}function A(){H.style("opacity",1),S.style("opacity",1)}var _,k,C,P,O=e.map((function(e){return e.date}));function R(){I(event),H.attr("cx",f(_.date)).attr("cy",v(_.value)),S.html(_.value).attr("x",f(_.date)+15).attr("y",v(_.value)).style("stroke","black"),k=[{date:_.date,value:i},{date:_.date,value:_.value}],C=[{date:_.date,value:_.value},{date:d[0],value:_.value}],N.data([k]).attr("d",h),D.data([C]).attr("d",h)}function j(){H.style("opacity",0),S.style("opacity",0)}function G(){I(event),H.style("opacity",0),S.style("opacity",0),g.selectAll(".lineFollow").style("opacity",0),P=_}function W(){var e;l<=d[0]?(e=new Date(d[0]),l=new Date(d[0]),c=new Date(e.setHours(e.getHours()+2*o)),f.domain([l,c])):l>d[0]&&c<d[1]?f.domain([l,c]):c>=d[1]&&(e=new Date(d[1]),c=new Date(d[1]),l=new Date(e.setHours(e.getHours()-2*o)),f.domain([l,c]))}function V(){I(event);var t=P.date.getTime()-_.date.getTime();l.setTime(l.getTime()+t),c.setTime(c.getTime()+t),W(),g.select(".xaxis").call(M).selectAll("text").style("text-anchor","end").attr("dx","-.8em").attr("dy",".15em").attr("transform","rotate(-65)").style("font-size",10),g.selectAll(".line").remove(),g.append("path").data([e]).attr("class","line").attr("d",h).style("stroke-width",2).style("stroke","blue").style("fill","none"),g.append("path").data([b]).attr("class","line").attr("d",h).style("stroke-width",2).style("stroke","black").style("fill","none").style("stroke-dasharray","3, 3")}function U(){H.style("opacity",1),S.style("opacity",1),g.selectAll(".lineFollow").style("opacity",L)}x.call(y["d"]().on("start",G).on("drag",V).on("end",U))}var v=f,h=a("1336"),w=(a("fb6a"),a("ac1f"),a("4d90"),a("1276"),u.a);function b(){var e;return w.ajax({url:"https://api.iwls.azure.cloud.dfo-mpo.gc.ca/api/v1/stations",type:"GET",async:!1,contentType:"application/json; charset=utf-8",success:function(t){e=t}}),e}function T(e,t,a,n,r){return e+"-"+t+"-"+a+"T"+n+":"+r+":00Z"}function E(e){var t=String(e.getUTCFullYear()),a=String(e.getUTCMonth()+1).padStart(2,"0"),n=String(e.getUTCDate()).padStart(2,"0"),r=String(e.getUTCHours()).padStart(2,"0"),i=String(e.getUTCMinutes()).padStart(2,"0");return T(t,a,n,r,i)}function M(e,t){var a,n,r=E(e.dateMin),i=E(e.dateNow),s=E(e.dateMax);"wlo"===t.color&&(w.ajax({url:"https://api.iwls.azure.cloud.dfo-mpo.gc.ca/api/v1/stations/"+t.id+"/data?time-series-code=wlo&from="+r+"&to="+i,type:"GET",async:!1,contentType:"application/json; charset=utf-8",success:function(e){a=e}}),t.lastDate=a[a.length-1]["eventDate"],t.lastWlo=a[a.length-1]["value"]);w.ajax({url:"https://api.iwls.azure.cloud.dfo-mpo.gc.ca/api/v1/stations/"+t.id+"/data?time-series-code=wlp&from="+r+"&to="+s,type:"GET",async:!1,contentType:"application/json; charset=utf-8",success:function(e){n=e}}),t.lastDateWlp=n[n.length-1]["eventDate"],t.lastWlp=n[n.length-1]["value"],t.predictions=n,t.timeNow=i}function L(e,t){var a=[],n=e.toISOString().slice(0,19)+"Z",r=t.toISOString().slice(0,19)+"Z",i=new Date(n),s=n;while(s<r)s=i.toISOString().slice(0,19)+"Z",a.push(s),i.setTime(i.getTime()+36e5);for(var o=0;o<a.length;o++)a[o]=new Date(a[o]),a[o].setHours(a[o].getHours()+Math.round(a[o].getMinutes()/60)),a[o].setMinutes(0,0,0);return a}function N(e){var t=[];return w.ajax({url:"https://geo.weather.gc.ca/geomet?lang=fr&service=WMS&version=1.3.0&request=GetCapabilities&layer="+e,type:"GET",async:!1,contentType:"application/json; charset=utf-8",success:function(e){t=e}}),t.getElementsByTagName("Dimension")[0].innerHTML.split("/")}function D(e,t){var a,n,r,i=N(t)[2];return"PT10M"===i?(a=6e5,n=new Date(Math.round(e.getTime()/a)*a),r=E(n)):"PT1H"===i?(a=36e5,n=new Date(Math.round(e.getTime()/a)*a),r=E(n)):"PT3H"===i&&(a=108e5,n=new Date(Math.round(e.getTime()/a)*a),r=E(n)),r}window.$=w;var H={name:"web-map",mounted:function(){var e=this;Object(c["loadModules"])(["esri/Map","esri/views/MapView","esri/layers/OGCFeatureLayer","esri/Graphic","esri/layers/GraphicsLayer","esri/geometry/Point","esri/popup/content/CustomContent","esri/layers/WMSLayer","esri/widgets/LayerList","esri/layers/GroupLayer","esri/core/watchUtils","esri/widgets/TimeSlider"],{css:!0}).then((function(t){var a=Object(l["a"])(t,12),n=a[0],r=a[1],i=a[2],s=a[3],o=a[4],c=a[5],d=a[6],u=a[7],m=a[8],y=a[9],f=a[10],w=a[11];function T(){this.dateNow=new Date,this.dateChosen=new Date,this.dateMin=new Date,this.dateMin.setHours(this.dateMin.getHours()-18),this.dateMax=new Date,this.dateMax.setHours(this.dateMax.getHours()+18),this.datesArrayHours=L(this.dateMin,this.dateMax)}var H=new T,S=new Proxy(H,{set:function(e,t,a){var n=a;console.log("layerList.visibleItems",z.visibleItems);for(var r=0;r<z.visibleItems.items.length;r++)"group"===z.visibleItems.items[r].layer.type&&(z.visibleItems.items[r].panel={});for(var i=x.allLayers.filter((function(e){return"wms"===e.type})),s=0;s<i.items.length;s++){var o=i.items[s].parent;o.remove(i.items[s])}for(var l=function(e){if(_[e].visible)for(var t=0;t<h.layers.length;t++)h.layers[t].groupeParentName===_[e].name&&(d=D(a,h.layers[t].name),m=new u({url:h.layers[t].url,title:h.layers[t].title.fr,name:h.layers[t].name,listMode:"hide-children",visible:I[h.layers[t].name],infoLegende:h.layers[t].infoLegende,opacity:h.layers[t].opacity,customParameters:{time:d}}),_[e].add(m),g=N(h.layers[t].name),(d<g[0]||d>g[1])&&_[e].remove(m),console.log("layerView",j.whenLayerView(m)),setTimeout((function(){Z(_[e].title)}),1))},c=0;c<_.length;c++){var d,m,g;l(c)}return p(S.dateNow,n),document.getElementById("titleDate").innerHTML=a,e[t]=a,!0}}),x=new n({basemap:"topo-vector"});e.view=new r({container:e.$el,map:x,center:[-68.805,47.027],zoom:7});var I={},B=new Proxy([],{set:function(e,t,a){for(var n=function(e){f.watch(B[e],"visible",(function(t){I[B[e].name]=t}))},r=0;r<B.length;r++)n(r);return e[t]=a,!0}});x.allLayers.on("change",(function(e){B.length=0;for(var t=0;t<e.target.items.length;t++)if(e.target.items[t].name){B.push(e.target.items[t]);var a=e.target.items[t].name;e.target.items[t].name in I||(I[a]=e.target.items[t].visible)}}));var A=b(),_=k(h.groupes);function k(e){for(var t=[],a=0;a<e.length;a++){var n=new y({title:e[a].title.fr,layers:[],visible:!1,name:e[a].name});t.push(n),x.add(n)}return t}for(var C=0;C<h.layers.length;C++)if("wfs"===h.layers[C].type){var P=new i({url:h.layers[C].url,collectionId:h.layers[C].collectionId,popupEnabled:!0,name:h.layers[C].name,visible:!0,title:h.layers[C].title.fr,listMode:"hide",renderer:h.layers[C].renderer});x.add(P)}for(var O,R,j=e.view,G=function(e){f.watch(_[e],"visible",(function(t){if(t)for(var a=function(t){r=x.allLayers.find((function(e){return e.name===h.layers[t].name})),"wms"===h.layers[t].type&&h.layers[t].groupeParentName===_[e].name&&void 0===r&&(i=D(H.dateChosen,h.layers[t].name),s=new u({url:h.layers[t].url,customParameters:{time:i},title:h.layers[t].title.fr,name:h.layers[t].name,listMode:"hide-children",visible:h.layers[t].visibleLayer,infoLegende:h.layers[t].infoLegende,opacity:h.layers[t].opacity}),_[e].add(s),o=N(h.layers[t].name),(i<o[0]||i>o[1])&&_[e].remove(s),setTimeout((function(){Z(_[e].title)}),1))},n=0;n<h.layers.length;n++){var r,i,s,o;a(n)}}))},W=0;W<_.length;W++)G(W);function V(e){var t=x.allLayers.find((function(e){return"stationsLayerTrue"===e.name}));if(!e.results[0].graphic.geometry)return t=x.allLayers.find((function(e){return"stationsLayerTrue"===e.name})),t&&x.remove(t),null;if("polygon"===e.results[0].graphic.geometry.type){var a=e.results[0].graphic.geometry;return t&&x.remove(t),j.goTo(e.results[0].graphic.geometry),console.log("id",e.results[0].graphic.attributes.OBJECTID),g(e.results[0].graphic.attributes.OBJECTID),a}var n=e.results[0].graphic.attributes;M(H,n)}function U(e){if(e){var t=new o({visible:!0,title:"Stations",name:"stationsLayerTrue",infoLegendeTitre:"Légende"});x.add(t);for(var a=0;a<A.length;a++){var n=new c({longitude:A[a]["longitude"],latitude:A[a]["latitude"],spatialReference:{wkid:3857}}),r=e.contains(n);if(r){for(var i=null,l=0;l<A[a]["timeSeries"].length;l++)"wlo"===A[a]["timeSeries"][l]["code"]&&(i="wlo");O=new s("wlo"===i?{geometry:n,symbol:{type:"simple-marker",color:"#d7191c"},popupTemplate:$,attributes:{id:A[a]["id"],officialName:A[a]["officialName"],timeSeries:A[a]["timeSeries"],color:i,lastDate:[],lastWlo:[],lastDateWlp:[],lastWlp:[],predictions:{},timeNow:[]}}:{geometry:n,symbol:{type:"simple-marker",color:"#1a9641"},popupTemplate:q,attributes:{id:A[a]["id"],officialName:A[a]["officialName"],timeSeries:A[a]["timeSeries"],color:i,lastDateWlp:[],lastWlp:[],predictions:{},timeNow:[]}}),t.add(O)}z.listItemCreatedFunction=function(e){var t=e.item;"Stations"===t.title&&(t.panel={content:"<p>Stations rouges: observations et prévisions</p><p>Stations vertes: observations seulement",open:!0})}}}}j.on("click",(function(e){j.hitTest(e).then(V).then(U)}));var F=new d({outFields:["*"],creator:function(e){console.log("feature",e);var t=document.createElement("div");return t.setAttribute("id","popupGraph"),R=e.graphic.attributes.predictions,t.innerHTML="Prédictions <br>",v(R,t,E(H.dateChosen),K),t}}),$={title:"{officialName}",content:[{type:"fields",fieldInfos:[{fieldName:"lastDate",label:"Dernière date d'observation",format:{places:0,digitSeparator:!0}},{fieldName:"lastWlo",label:"Valeur"}]},F],visibleElements:{featureNavigation:!1}},q={title:"{officialName}",content:[{type:"fields",fieldInfos:[{fieldName:"lastDateWlp",label:"Dernier moment de prédiction",format:{places:0,digitSeparator:!0}}]},F],visibleElements:{closeButton:!1}},z=new m({view:e.view,container:document.createElement("div")});z.container.style="height: 100%";var J=document.getElementById("layerlist");function Z(e){z.listItemCreatedFunction=function(t){var a=t.item;a.title===e&&(0===a.children.items.length?a.panel={content:"Aucune couche pour le temps sélectionné",open:!0}:a.panel={content:""}),"infoLegende"in a.layer&&(a.panel={content:a.layer.infoLegende,open:!1})}}J.appendChild(z.container);var K=new w({container:document.getElementById("slider"),view:e.view,mode:"instant",fullTimeExtent:{start:H.datesArrayHours[0],end:H.datesArrayHours[H.datesArrayHours.length-1]},values:[H.dateNow],stops:{interval:{value:20,unit:"minutes"}},tickConfigs:[{mode:"count",values:7,labelsVisible:!0,labelFormatFunction:function(e){var t=new Date(e);return"".concat(t.getHours(),":").concat(t.getUTCMinutes(),"0")}}],layout:"compact"});j.ui.add(K,"manual"),K.watch("values",(function(e){S.dateChosen=e[0];var t=document.getElementById("popupGraph");t&&(t.innerHTML="",v(R,t,E(H.dateChosen),K))})),document.getElementById("titleDate").innerHTML=H.dateNow}))},beforeDestroy:function(){this.view&&this.view.destroy()}},S=H,x=a("2877"),I=Object(x["a"])(S,s,o,!1,null,null,null),B=I.exports,A={name:"App",components:{WebMap:B}},_=A,k=(a("5c0b"),Object(x["a"])(_,r,i,!1,null,null,null)),C=k.exports;n["a"].config.productionTip=!1,n["a"].prototype.a="123";var P=n["a"].observable({errors:{}});Object.defineProperty(n["a"].prototype,"$errors",{get:function(){return P.errors},set:function(e){P.errors=e}}),new n["a"]({render:function(e){return e(C)},watch:{$errors:function(){console.log("$errors has changed")}}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";a("9c0c")},"9c0c":function(e,t,a){}});
//# sourceMappingURL=app.81e50776.js.map