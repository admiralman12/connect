import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyCfni2o_dYKQUV3vhl06ovF2VWfmq4deH4",
  authDomain: "mytestproject-24bb4.firebaseapp.com",
  databaseURL: "https://mytestproject-24bb4.firebaseio.com",
  projectId: "mytestproject-24bb4",
  storageBucket: "mytestproject-24bb4.appspot.com",
  messagingSenderId: "461863795802"
}

firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase
const settings = {
    timestampsInSnapshots: true
}
db.settings(settings)

// firebase collections
const usersCollection = db.collection('users')
const propertiesCollection = db.collection('properties')
const propertyUsersCollection = db.collection("propertyUsers")


export {
    db,
    auth,
    currentUser,
    usersCollection,
    propertiesCollection,
    propertyUsersCollection
}