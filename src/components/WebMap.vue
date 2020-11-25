<template>
  <div></div>
</template>

<script>
import { loadModules } from "esri-loader";
import { getMeteo, hideMeteoElement } from "../assets/getMeteofunction";
import graph from "../assets/graph_d3Function";
import dataJSON from "../static/layers.json";
import {
  getStationAttributes,
  getStationsInfo,
  dateRoundedArrayHours,
  nearestTimeToShow,
  getTimeAvailable,
} from "../assets/IWLSServiceFunctions";

export default {
  name: "web-map",
  mounted() {
    loadModules(
      [
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/OGCFeatureLayer",
        "esri/Graphic",
        "esri/layers/GraphicsLayer",
        "esri/geometry/Point",
        "esri/popup/content/CustomContent",
        "esri/layers/WMSLayer",
        "esri/widgets/LayerList",
        "esri/layers/GroupLayer",
        "esri/core/watchUtils",
        "esri/widgets/TimeSlider",
      ],
      { css: true }
    ).then(
      ([
        ArcGISMap,
        MapView,
        OGCFeatureLayer,
        Graphic,
        GraphicsLayer,
        Point,
        CustomContent,
        WMSLayer,
        LayerList,
        GroupLayer,
        watchUtils,
        TimeSlider,
      ]) => {
        /* initialize date variable:
         */

        function getCurrentDate() {
          this.dateNow = new Date();
          this.dateChosen = new Date();

          this.dateMin = new Date();
          this.dateMin.setHours(this.dateMin.getHours() - 6);

          this.dateMax = new Date();
          this.dateMax.setHours(this.dateMax.getHours() + 6);

          this.datesArrayHours = dateRoundedArrayHours(
            this.dateMin,
            this.dateMax
          );
        }

        var date = new getCurrentDate();

        //Set what is happening if the variable date is changed by using a proxy
        var timeChangeProxy = new Proxy(date, {
          set: function (target, property, value) {
            var dateChosen = value;
            //console.log(value);

            var wmsLayers = map.allLayers.filter(function (layer) {
              return layer.type === "wms";
            });

            for (let i = 0; i < wmsLayers.items.length; i++) {
              var parent = wmsLayers.items[i].parent;

              parent.remove(wmsLayers.items[i]);
            }

            for (let i = 0; i < groupArray.length; i++) {
              if (groupArray[i].visible) {
                for (let j = 0; j < dataJSON.layers.length; j++) {
                  if (
                    dataJSON.layers[j].groupeParentName === groupArray[i].name
                  ) {
                    var dateUTCClicked = nearestTimeToShow(
                      value,
                      dataJSON.layers[j].name
                    );

                    var layer_wms = new WMSLayer({
                      url: dataJSON.layers[j].url,
                      title: dataJSON.layers[j].title.fr,
                      name: dataJSON.layers[j].name,
                      listMode: "hide-children",
                      visible: visibleLayers[dataJSON.layers[j].name],
                      infoLegende: dataJSON.layers[j].infoLegende,
                      opacity: dataJSON.layers[j].opacity,
                      customParameters: { time: dateUTCClicked }, // Permet de costumizer les paramètres requis par le service utilisé
                    });

                    groupArray[i].add(layer_wms);

                    var timeAvailable = getTimeAvailable(
                      dataJSON.layers[j].name
                    );

                    if (
                      dateUTCClicked < timeAvailable[0] ||
                      dateUTCClicked > timeAvailable[1]
                    ) {
                      groupArray[i].remove(layer_wms);
                    }

                    console.log("layerView", thisView.whenLayerView(layer_wms)); // TODO Find out why when I have this line, the layers erase themselves properly when I am out of range, but it doesnt when I dont add this line

                    updateGroupLayerList(groupArray[i].title);
                  }
                }
              }
            }

            //hide meteomaritime if in the past
            hideMeteoElement(timeChangeProxy.dateNow, dateChosen);

            // change date showed on the slider
            document.getElementById("titleDate").innerHTML = value;

            target[property] = value;
            return true;
          },
        });

        /**/

        const map = new ArcGISMap({
          basemap: "topo-vector",
        });

        this.view = new MapView({
          container: this.$el,
          map: map,
          center: [-68.805, 47.027], // longitude, latitude
          zoom: 7,
        });

        //Fonction permettant de mentionner quand, à une date choisie, il n'y a pas de couches pour le groupe s'il est visible.
        function updateGroupLayerList(title) {
          layerList.listItemCreatedFunction = function (event) {
            var item = event.item;
            if (item.title === title && item.layer.layers.items.length === 0) {
              item.panel = {
                content: "Aucune couche pour le temps sélectionné",
                open: true,
              };
            } else {
              item.panel = {};
            }
          };
        }

        // Set up a way to store the visible attribute of every layers, so that it keeps the same value when changing time
        //Stores layers and their visible states.
        var visibleLayers = {};

        //creates an array that will store all the layers of the map
        var currentLayersProxy = new Proxy([], {
          set: function (target, property, value) {
            //watch the visible property of all layers in the array. If changed, update the visibleLayers.
            for (let i = 0; i < currentLayersProxy.length; i++) {
              watchUtils.watch(currentLayersProxy[i], "visible", function (
                visible
              ) {
                visibleLayers[currentLayersProxy[i].name] = visible;
              });
            }
            target[property] = value;
            return true;
          },
        });

        // Watch for changes in layers of the map. If there is one, change the proxy and new layers to visibleLayers, but do not
        // the value of the visible property of the layers already listed in visibleLayers.
        map.allLayers.on("change", function (event) {
          currentLayersProxy.length = 0;
          for (let i = 0; i < event.target.items.length; i++) {
            if (event.target.items[i].name) {
              currentLayersProxy.push(event.target.items[i]);
              var propertyName = event.target.items[i].name;
              if (!(event.target.items[i].name in visibleLayers)) {
                visibleLayers[propertyName] = event.target.items[i].visible;
              }
            }
          }
        });

        //load stations info:
        var stations = getStationsInfo();

        // load the groups displayed in the layerlist (from layers.json)
        var groupArray = getGroups(dataJSON.groupes);

        function getGroups(groups) {
          var groupsArray = [];
          for (let i = 0; i < groups.length; i++) {
            var group = new GroupLayer({
              title: groups[i].title.fr,
              layers: [],
              visible: false,
              name: groups[i].name,
            });
            groupsArray.push(group);
            map.add(group);
          }
          return groupsArray;
        }
        //load wfs layers (from layers.json)
        for (let j = 0; j < dataJSON.layers.length; j++) {
          if (dataJSON.layers[j].type === "wfs") {
            var layer_wfs = new OGCFeatureLayer({
              url: dataJSON.layers[j].url,
              collectionId: dataJSON.layers[j].collectionId,
              popupEnabled: true,
              name: dataJSON.layers[j].name,
              visible: true,
              title: dataJSON.layers[j].title.fr,
              listMode: "hide",
              renderer: dataJSON.layers[j].renderer,
            });
            map.add(layer_wfs);
          }
        }

        var thisView = this.view;
        // Creates the WMS layers  (from layers.json)once it is clicked in the layerlist
        for (let i = 0; i < groupArray.length; i++) {
          watchUtils.watch(groupArray[i], "visible", function (visible) {
            if (visible) {
              for (let j = 0; j < dataJSON.layers.length; j++) {
                var foundLayersRadar = map.allLayers.find(function (layer) {
                  return layer.name === dataJSON.layers[j].name;
                });
                if (
                  dataJSON.layers[j].type === "wms" &&
                  dataJSON.layers[j].groupeParentName === groupArray[i].name
                ) {
                  if (foundLayersRadar === undefined) {
                    var dateToShow = nearestTimeToShow(
                      date.dateChosen,
                      dataJSON.layers[j].name
                    );
                    var layer_wms = new WMSLayer({
                      url: dataJSON.layers[j].url,
                      customParameters: {
                        time: dateToShow, // retrieve the current observation
                      },
                      title: dataJSON.layers[j].title.fr,
                      name: dataJSON.layers[j].name,
                      listMode: "hide-children",
                      visible: dataJSON.layers[j].visibleLayer,
                      infoLegende: dataJSON.layers[j].infoLegende,
                      opacity: dataJSON.layers[j].opacity,
                    });

                    groupArray[i].add(layer_wms);

                    var timeAvailable = getTimeAvailable(
                      dataJSON.layers[j].name
                    );


                    // Supprime la couche si le temps n'est pas dans les bornes. Ridicule d'ajouter puis ensuite supprimer, mais il semble que ce soit la seule facon que ca fonctionne correctement (pour l'instant)! 
                    if (
                      dateToShow < timeAvailable[0] ||
                      dateToShow > timeAvailable[1]
                    ) {
                      groupArray[i].remove(layer_wms);
                    }

                    updateGroupLayerList(groupArray[i].title);
                    //load wms radar layer
                  }
                }
              }
            }
          });
        }

        // Configure what is happening when a region is clicked and when a point is clicked.

        var pointGraphicTrue;
        thisView.on("click", function (event) {
          //console.log(event)
          thisView.hitTest(event).then(getGraphics).then(buildLayer);
        });

        function getGraphics(response) {
          // On vérifie s'il y a déjà une couche des stations d'affichée
          var foundLayers = map.allLayers.find(function (layer) {
            return layer.name === "stationsLayerTrue";
          });

          //Si on clique sur un couche de type polygone
          if (response.results[0].graphic.geometry) {
            if (response.results[0].graphic.geometry.type === "polygon") {
              var geometry = response.results[0].graphic.geometry;
              //console.log(geometry);

              if (foundLayers) {
                map.remove(foundLayers);
              }

              thisView.goTo(response.results[0].graphic.geometry);
              console.log("id", response.results[0].graphic.attributes.OBJECTID)
              getMeteo(response.results[0].graphic.attributes.OBJECTID);

              return geometry;
            } else {
              // s'il y a une géométrie mais que c'est pas un polygone, c'est que j'ai cliqué sur une station
              var stationAttributes = response.results[0].graphic.attributes;

              getStationAttributes(date, stationAttributes);
            }
          } else {
            foundLayers = map.allLayers.find(function (layer) {
              return layer.name === "stationsLayerTrue";
            });
            if (foundLayers) {
              map.remove(foundLayers);
            }
            return null;
          }
        }

        function buildLayer(polygoneClique) {
          //console.log("poly", polygoneClique)
          if (polygoneClique) {
            // On crée une couche qui va contenir les stations
            var stationsLayerTrue = new GraphicsLayer({
              visible: true,
              title: "Stations",
              name: "stationsLayerTrue",
              infoLegendeTitre: "Légende",
              //listMode: "hide",
            });
            map.add(stationsLayerTrue);

            for (let i = 0; i < stations.length; i++) {
              var point = new Point({
                longitude: stations[i]["longitude"],
                latitude: stations[i]["latitude"],
                spatialReference: { wkid: 3857 },
              });

              var intersects = polygoneClique.contains(point);

              if (intersects) {
                // check if wlo (observation) is available for station.
                var color = null;
                for (let j = 0; j < stations[i]["timeSeries"].length; j++) {
                  if (stations[i]["timeSeries"][j]["code"] === "wlo") {
                    color = "wlo";
                  }
                }

                if (color === "wlo") {
                  pointGraphicTrue = new Graphic({
                    geometry: point,
                    symbol: {
                      type: "simple-marker",
                      color: "#d7191c", //red
                    },
                    popupTemplate: popupTemplateWlo,
                    attributes: {
                      id: stations[i]["id"],
                      officialName: stations[i]["officialName"],
                      timeSeries: stations[i]["timeSeries"],
                      color: color,
                      lastDate: [],
                      lastWlo: [],
                      lastDateWlp: [],
                      lastWlp: [],
                      predictions: {},
                      timeNow: [],
                    },
                  });
                } else {
                  pointGraphicTrue = new Graphic({
                    geometry: point,
                    symbol: {
                      type: "simple-marker",
                      color: "#1a9641", //green
                    },
                    popupTemplate: popupTemplate,
                    attributes: {
                      id: stations[i]["id"],
                      officialName: stations[i]["officialName"],
                      timeSeries: stations[i]["timeSeries"],
                      color: color,
                      lastDateWlp: [],
                      lastWlp: [],
                      predictions: {},
                      timeNow: [],
                    },
                  });
                  //console.log(pointGraphicTrue.attributes.timeSeries)
                }

                stationsLayerTrue.add(pointGraphicTrue);
              }
            }
          }
          //console.log("layer", stationsLayerTrue);
        }

        // Call the function graph to create the graph popup template
        let customContent = new CustomContent({
          outFields: ["*"],
          creator: function (feature) {
            var div = document.createElement("div");
            var dataPrediction = feature.graphic.attributes.predictions;

            div.innerHTML = "Prédictions <br>";

            var data = dataPrediction;

            //call fonction graph qui génère le graph d3js
            graph(data, div, feature.graphic.attributes.timeNow, timeSlider);
            return div;
          },
        });

        //popup template for stations with observations and predictions
        var popupTemplateWlo = {
          title: "{officialName}",
          content: [
            {
              // Pass in the fields to display
              type: "fields",
              fieldInfos: [
                {
                  fieldName: "lastDate",
                  label: "Dernière date d'observation",
                  format: {
                    places: 0,
                    digitSeparator: true,
                  },
                },
                {
                  fieldName: "lastWlo",
                  label: "Valeur",
                },
              ],
            },
            customContent,
          ],
        };

        //popup template for stations with  predictions only
        var popupTemplate = {
          title: "{officialName}",
          content: [
            {
              // Pass in the fields to display
              type: "fields",
              fieldInfos: [
                {
                  fieldName: "lastDateWlp",
                  label: "Dernier moment de prédiction",
                  format: {
                    places: 0,
                    digitSeparator: true,
                  },
                },
              ],
            },
            customContent,
          ],
        };

        //builds the layer list and the legends embedded in it
        const layerList = new LayerList({
          view: this.view,
          container: document.createElement("div"),
          listItemCreatedFunction: function (event) {
            // A voir pourquoi cette fonction est appellée pour toutes les couches et
            // tous les groupes, et ce plusieurs fois.
            const item = event.item;
            if ("infoLegende" in item.layer) {
              item.panel = {
                content: item.layer.infoLegende,
                open: false,
              };
            }
          },
        });
        layerList.container.style = "height: 100%";
        let panelDiv = document.getElementById("layerlist");
        panelDiv.appendChild(layerList.container);

        //TimeSlider
        var timeSlider = new TimeSlider({
          container: document.getElementById("slider"),
          view: this.view,
          // show data within a given time range
          // in this case data within one year
          mode: "instant",
          fullTimeExtent: {
            // entire extent of the timeSlider
            start: date.datesArrayHours[0],
            end: date.datesArrayHours[date.datesArrayHours.length - 1],
          },
          values: [
            // location of timeSlider thumbs
            date.dateNow,
          ],
          stops: {
            interval: {
              value: 20,
              unit: "minutes",
            },
          },
          tickConfigs: [
            {
              mode: "count",
              values: 7,
              labelsVisible: true,
              labelFormatFunction: (value) => {
                const date = new Date(value);
                return `${date.getHours()}:${date.getUTCMinutes()}0`;
              },
            },
          ],
          layout: "compact",
        });

        thisView.ui.add(timeSlider, "manual");
        timeSlider.watch("values", function (values) {
          timeChangeProxy.dateChosen = values[0];
        });
        document.getElementById("titleDate").innerHTML = date.dateNow;
      }
    );
  },
  beforeDestroy() {
    if (this.view) {
      // destroy the map view
      this.view.destroy();
    }
  },
};
</script>

<style>
</style>