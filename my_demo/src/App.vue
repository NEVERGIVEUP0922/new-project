<template>
  <div id="app">
   <!--  <img src="./assets/logo.png"/> -->
    <div class="choose">
      <router-link :to="{name:'HelloWorld',param:{name:'test',id:1}}" style="cursor:pointer">
        main
      </router-link>
      <router-link :to="{name:'myTest',param:{name:'test',id:1}}" style="cursor:pointer">
        myPage
      </router-link>
    <router-view class="view"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
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
#app>.choose{
  text-align:center
}
</style>
