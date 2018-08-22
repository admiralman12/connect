import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import * as firebase from 'firebase'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp(
      {
          apiKey: 'AIzaSyCJp_9m8C84WFCcp0Mrn2KFQaoa1ajyWU0',
          authDomain: 'connect-5862c.firebaseapp.com',
          databaseURL: 'https://connect-5862c.firebaseio.com',
          projectId: 'connect-5862c',
          storageBucket: 'connect-5862c.appspot.com',
      }
    )
  }
}).$mount('#app')
