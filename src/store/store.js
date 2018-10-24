import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import property from './modules/property'
const fb = require('@/firebaseConfig.js')

Vue.use(Vuex)
Vue.config.devtools = true

// handle page reload
fb.auth.onAuthStateChanged(user => {
  if (user) {
    store.commit('setUser', user)   
    //check if profile exists and if not create it
    store.dispatch('fetchUserProfile')
    //store.dispatch('fetchProperties')
  } else {
    store.commit('setUser', null)   
  }
})

export const store = new Vuex.Store({
  modules: {
    user
  } 
})
