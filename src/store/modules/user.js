const fb = require('@/firebaseConfig.js')

export default {
    //namespaced: true,
    state: {
        currentUser: null, 
        loading: false,
        error: null
      },
      mutations: {
        setUser (state, payload) {
          state.currentUser = payload
        },
        setLoading (state, payload) {
          state.loading = payload
        },
        setError (state, payload) {
          state.error = payload
        },
        clearError (state) {
          state.error = null
        },
        clearLoading(state) {
          state.loading = false
        },
      },
      actions: {
        signUserUp({commit}, payload) {
          commit('setLoading', true)
          commit('clearError')
          fb.auth.createUserWithEmailAndPassword(payload.email, payload.password).then(user => {
            commit('setLoading', false)
            commit('setUser', user)
            fb.auth.currentUser.sendEmailVerification()
          })
          .catch(err => {
              commit('setLoading', false)
              commit('setError', err)
              console.log(err)
          })
        },
        signUserIn({commit}, payload) {
          commit('setLoading', true)
          commit('clearError')
          fb.auth.signInWithEmailAndPassword(payload.email, payload.password).then(user => {
            commit('setLoading', false)
            commit('setUser', user)
          }).catch(err => {
              commit('setLoading', false)
              commit('setError', err)
              console.log(err)
          })        
        },
        fetchUserProfile({ commit, state }) {
          fb.usersCollection.doc(state.currentUser.uid).get().then(res => {
              //commit('setUserProfile', res.data())
              //console.log(res.data())
          }).catch(err => {
              console.log(err)
          })
        },        
        autoSignIn({commit}, payload) {
          commit('setUser', {id: payload.uid})
        },
        signUserOut({commit}) {
          fb.auth.signOut()
          commit('setUser', null)       
        },
        clearError({commit}) {
          commit('clearError')
        },
        clearLoading({commit}) {
          commit('clearLoading')
        }      
      },
      getters: {
        user (state) {
          return state.currentUser
        },
        error (state) {
          return state.error
        },
        loading (state) {
          return state.loading
        }
      }
}
