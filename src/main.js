import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
const fb = require('./firebaseConfig.js')
import router from './router'
import { store } from './store/store'

Vue.config.productionTip = false

let app = null

//Handle page reloads
fb.auth.onAuthStateChanged(user => {
/*   if (user) {
    store.dispatch('autoSignIn', user)
  } */
  if (!app) {
    new Vue({
      el: '#app',
      router,
      store,
      render: h => h(App),
    })
  }
  
})

