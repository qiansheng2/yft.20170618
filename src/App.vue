<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->

    <head>

      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title>Amaze UI Admin index Examples</title>
      <meta name="description" content="这是一个 index 页面">
      <meta name="keywords" content="index">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="renderer" content="webkit">
      <meta http-equiv="Cache-Control" content="no-siteapp">
      <link rel="icon" type="image/png" href="http://amazeui.org/i/favicon.png">
      <link rel="apple-touch-icon-precomposed" href="http://amazeui.org/i/app-icon72x72@2x.png">
      <meta name="apple-mobile-web-app-title" content="Amaze UI">
      <link rel="stylesheet" href="top/amazeui.min.css">
      <link rel="stylesheet" href="top/app.css">

    </head>
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
