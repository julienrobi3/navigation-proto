<template>
  <div id="app">
    <web-map id="viewDiv" />
    <div id="layerlist"></div>
    <div id="panel">
      <div id="region">
        Prévisions météo maritime - veuillez cliquer sur une région
      </div>
      <div id="emis"></div>

      <table id="headerVent"></table>
      <div id="vent"></div>
      <table id="headerVagues"></table>
      <div id="vagues"></div>
      <table id="headerConditions"></table>
      <div id="conditions"></div>

      <table id="longTerme"></table>
      <div id="emisExtent"></div>
    </div>
    <div id="sliderContainer">
      <div id="titleDate"></div>
      <div id="slider"></div>
    </div>
  </div>
</template>

<script>
import WebMap from "./components/WebMap.vue";
export default {
  name: "App",
  components: { WebMap },
};
</script>

<style lang="scss">
@import "src/assets/css/style_test_navigation_meteo.scss";
</style>
