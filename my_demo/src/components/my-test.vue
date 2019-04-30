<template>
  <div >
    <headers></headers>
  </div>
</template>

<script>
import headers from '../public/header'
/*
  import main from "../public/main";
  import footer from "../public/footer";
*/
export default {
  name: 'myTest',
  components: {headers},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only  -->
<style scoped rel="stylesheet/stylus">
  @import '../static/home/index/css/index.less';
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
