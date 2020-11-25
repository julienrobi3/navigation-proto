<template>
  <div></div>
</template>

<script>
import { loadModules } from "esri-loader";
import jQuery from "jquery";
const $ = jQuery;
window.$ = $;

export default {
  name: "web-map",
  mounted() {
    // lazy load the required ArcGIS API for JavaScript modules and CSS
    loadModules([
      "esri/Map",
      "esri/views/MapView",
      "esri/layers/OGCFeatureLayer",
      "esri/Graphic",
      "esri/layers/GraphicsLayer",
      "esri/geometry/Point",
    ]).then(
      ([Map, MapView, OGCFeatureLayer, Graphic, GraphicsLayer, Point]) => {
        const map = new Map({
          basemap: "topo-vector",
        });

        this.view = new MapView({
          container: this.$el,
          map: map,
          center: [-117.08, 34.1],
          zoom: 11,
        });
        //load stations info:
        var stations = [];

        $.ajax({
          // TODO: fix CORS Error — and How the Access-Control-Allow-Origin Header
          url: "https://api.iwls.azure.cloud.dfo-mpo.gc.ca/api/v1/stations",
          type: "GET",
          async: false,
          contentType: "application/json; charset=utf-8",
          success: function (json) {
            stations = json;
          },
        });
        console.log(stations);

        var layer_regions = new OGCFeatureLayer({
          url: "http://localhost:32768/geoserver/OGSL/ogc/features/",
          collectionId: "OGSL:test_create_shp_exposed",
          legendEnabled: true,
          popupEnabled: true,
          name: "layer_regions",
          visible: true,
          title: "regions",
          renderer: {
            type: "simple",
            symbol: {
              type: "simple-fill",
            },
          },
        });
        map.add(layer_regions);

        var pointGraphicTrue;
        const vieww = this.view;
        this.view.on("click", function (event) {
          console.log(vieww);
          vieww.hitTest(event).then(getGraphics).then(buildLayer);
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
              // Si une couche des stations est déjà présente, on la supprime
              if (foundLayers) {
                map.remove(foundLayers);
              }

              // On zoom sur le poylgone cliqué
              vieww.goTo(response.results[0].graphic.geometry);

              return geometry;
            } 
            else {
              // s'il y a une géométrie mais que c'est pas un polygone, c'est que j'ai cliqué sur une station
              var stationAttributes = response.results[0].graphic.attributes;

              //"2020-07-01T00:00:00Z"

              var date = new Date();

              var year = String(date.getUTCFullYear());
              var month = String(date.getUTCMonth() + 1).padStart(2, "0");
              var day = String(date.getUTCDate()).padStart(2, "0");
              var dayPrediction = String(date.getUTCDate() + 1).padStart(
                2,
                "0"
              );
              var hour = String(date.getUTCHours()).padStart(2, "0");
              var hourMin = String(date.getUTCHours() - 1).padStart(2, "0"); // Pour obtenir les données de la dernière heure
              var minute = String(date.getUTCMinutes()).padStart(2, "0");
              var timeStart =
                year +
                "-" +
                month +
                "-" +
                day +
                "T" +
                hourMin +
                ":" +
                minute +
                ":00Z";
              var timeNow =
                year +
                "-" +
                month +
                "-" +
                day +
                "T" +
                hour +
                ":" +
                minute +
                ":00Z";
              var timeEnd =
                year +
                "-" +
                month +
                "-" +
                day +
                "T" +
                hour +
                ":" +
                minute +
                ":00Z";
              var timeEndPrediction =
                year +
                "-" +
                month +
                "-" +
                dayPrediction +
                "T" +
                hour +
                ":" +
                minute +
                ":00Z";
              // Get last observation if possible
              if (stationAttributes.color === "wlo") {
                var data;
                $.ajax({
                  // TODO: fix CORS Error — and How the Access-Control-Allow-Origin Header
                  url:
                    "https://api.iwls.azure.cloud.dfo-mpo.gc.ca/api/v1/stations/" +
                    stationAttributes.id +
                    "/data?time-series-code=wlo&from=" +
                    timeStart +
                    "&to=" +
                    timeEnd +
                    "",
                  type: "GET",
                  async: false,
                  contentType: "application/json; charset=utf-8",
                  success: function (json) {
                    data = json;
                  },
                });

                response.results[0].graphic.attributes.lastDate =
                  data[data.length - 1]["eventDate"];
                response.results[0].graphic.attributes.lastWlo =
                  data[data.length - 1]["value"];
              }

              // Get last prediction
              var prediction;
              $.ajax({
                // TODO: fix CORS Error — and How the Access-Control-Allow-Origin Header
                url:
                  "https://api.iwls.azure.cloud.dfo-mpo.gc.ca/api/v1/stations/" +
                  stationAttributes.id +
                  "/data?time-series-code=wlp&from=" +
                  timeStart +
                  "&to=" +
                  timeEndPrediction +
                  "",
                type: "GET",
                async: false,
                contentType: "application/json; charset=utf-8",
                success: function (json) {
                  prediction = json;
                },
              });

              //console.log(prediction)
              response.results[0].graphic.attributes.lastDateWlp =
                prediction[prediction.length - 1]["eventDate"];
              response.results[0].graphic.attributes.lastWlp =
                prediction[prediction.length - 1]["value"];
              response.results[0].graphic.attributes.predictions = prediction;
              response.results[0].graphic.attributes.timeNow = timeNow;
              console.log(
                "predictions",
                response.results[0].graphic.attributes.predictions
              );
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
              title: "stationsLayerTrue",
              name: "stationsLayerTrue",
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
                    },
                  });
                  //console.log(pointGraphicTrue.attributes.timeSeries)
                }

                stationsLayerTrue.add(pointGraphicTrue);
              }
            }
          }
        }

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
            //customContent,
          ],
        };
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
            //customContent,
          ],
        };
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
div {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>