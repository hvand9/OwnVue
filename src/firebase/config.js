import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyA-zDbJRY7Fdjm_ShoFMCxGYqG2ZJmDKfk",
  authDomain: "ownapp-c0294.firebaseapp.com",
  projectId: "ownapp-c0294",
  storageBucket: "ownapp-c0294.appspot.com",
  messagingSenderId: "699428336050",
  appId: "1:699428336050:web:78cae1cf94eedf599174ab",
  measurementId: "G-5JFSPBQPJX"
};

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }

