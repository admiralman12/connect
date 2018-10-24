const fb = require('@/firebaseConfig.js')
import router from '@/router'

export default {
    //namespaced: true,
    state: {
        currentUser: null,
        emailVerified: null
      },
      mutations: {
        setUser (state, payload) {
          if (payload) {
            state.emailVerified = payload.emailVerified
          } else {
            state.emailVerified = null
          }
          state.currentUser = payload
        },
      },
      actions: {
        blankaction({commit}, payload) {

        },
        fetchUserProfile({ commit, state }) {
          //if email is verified 
          fb.usersCollection.doc(state.currentUser.uid).get().then(res => {
              //commit('setUserProfile', res.data())
              console.log(res.data())
          }).catch(err => {
              console.log(err)
          })
        },        
        signUserOut({commit}) {
          fb.auth.signOut()
        },    
      },
      getters: {
        user (state) {
          return state.currentUser
        },
      }
}
