import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Properties from './components/Property/Properties.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/properties',
      name: 'Properties',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(
        /* webpackChunkName: "about" */ 
        './components/Property/Properties.vue'
      )
    }
  ]
})
