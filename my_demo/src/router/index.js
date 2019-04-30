import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import myTest from '../components/my-test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: 'main',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: 'test',
      name: 'myTest',
      component: myTest
    }
  ]
})
