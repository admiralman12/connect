const fb = require('@/firebaseConfig.js')

export default {
    //namespaced: true,
    state: {
      properties: []
    },
    mutations: {
      setProperties (state, payload) {
        state.properties.push(payload)
      },
    },
    actions: {
      createProperty({commit}, payload) {
        fb.propertiesCollection.add(
          JSON.parse(JSON.stringify(payload))
        ).then((result) => {
            
        }).catch(err => {
            console.log(err)
        })  
      },
      fetchProperties({ commit, rootState }) {
        //Update to limit only for properties user has access to
        let uid = rootState.user.currentUser.uid
        let propIds = []
        let props = []

        //Get docs the user has access to
        fb.propertyUsersCollection.where(uid, "==", true).get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            propIds.push(doc.id)            
          });

          //iterate and request each doc from FB
          propIds.map((propId) => {
            fb.propertiesCollection.doc(propId).get().then((doc) => {
              commit('setProperties', doc.data())
            }).catch(function(error) {
              console.log("Error getting documents: ", error);
            });
          })
         
        }).catch(function(error) {
          console.log("Error getting documents: ", error);
        });
  

/*         fb.propertiesCollection.where('user_id', '==' , true).onSnapshot(querySnapshot => {
          if (querySnapshot.docs.length) {
            let propsArray = []
            querySnapshot.forEach(doc => {
              let property = doc.data()
              property.id = doc.id
              propsArray.push(property)
            })
            commit('setProperties', propsArray)
          }
        }) */
      }
    },
    getters: {
      property (state) {
        return state.properties
      },
    }
}


