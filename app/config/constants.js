import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyADZf64NHe0armH4qmJn4Oz6cpGJdpZNc0",
  authDomain: "yokedin-9f501.firebaseapp.com",
  databaseURL: "https://yokedin-9f501.firebaseio.com",
  projectId: "yokedin-9f501",
  storageBucket: "yokedin-9f501.appspot.com",
  messagingSenderId: "932848231614"
};
firebase.initializeApp(config);

const ref = firebase.database().ref()
const firebaseAuth = firebase.auth()
const facebookProvider = firebase.auth.FacebookAuthProvider

export {
  ref,
  firebaseAuth,
  facebookProvider,
}
