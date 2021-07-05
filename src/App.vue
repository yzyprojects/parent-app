<template>
  <div id="app">
    <router-link to= "/vue"> vue 微应用</router-link>
    <router-link to= "/react-app">react 微应用</router-link>
      <router-view></router-view>
      <div id="react"></div>
      <div id="vue"></div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif ;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
