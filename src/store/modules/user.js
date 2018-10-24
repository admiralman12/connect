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
        fetchUserProfile({ commit, state, dispatch }) {
          //if email is verified 
          fb.usersCollection.doc(state.currentUser.uid).get().then(res => {
              if(res.data()) {

              } else {
                dispatch('createUserProfile')
              }
          }).catch(err => {
              console.log(err)
          })
        },
        createUserProfile({commit}) {
          fb.usersCollection.doc(state.currentUser.uid).set().then()
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
