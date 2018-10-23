import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import property from './modules/property'
const fb = require('@/firebaseConfig.js')

Vue.use(Vuex)

// handle page reload
fb.auth.onAuthStateChanged(user => {
  if (user) {
    store.commit('setUser', user)
    store.dispatch('fetchUserProfile')
    store.dispatch('fetchProperties')
  }
})

export const store = new Vuex.Store({
  modules: {
    user,
    property
  } 
})
