import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDGgL5BpB8K_vum3UBte4zjlClfM0Od4bc",
    authDomain: "plan-it-a51fe.firebaseapp.com",
    databaseURL: "https://plan-it-a51fe.firebaseio.com",
    projectId: "plan-it-a51fe",
    storageBucket: "plan-it-a51fe.appspot.com",
    messagingSenderId: "788237402003",
    appId: "1:788237402003:web:998dbfc27b5db235eaf266",
    measurementId: "G-9ND23FGQ0Z"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true})

  export default firebase;