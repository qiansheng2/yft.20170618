<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style id="style-1-cropbar-clipper">
/* Copyright 2014 Evernote Corporation. All rights reserved. */
.en-markup-crop-options {
  top: 18px !important;
  left: 50% !important;
  margin-left: -100px !important;
  width: 200px !important;
  border: 2px rgba(255, 255, 255, .38) solid !important;
  border-radius: 4px !important;
}

.en-markup-crop-options div div:first-of-type {
  margin-left: 0px !important;
}
</style>
