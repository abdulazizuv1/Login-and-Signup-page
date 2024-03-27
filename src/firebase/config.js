import firebase from "firebase";
import "firebase/storage"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBQEeTU6Eu8UHeJTXxCuRcPSI0c4OdHDJQ",
    authDomain: "my-money-e4968.firebaseapp.com",
    projectId: "my-money-e4968",
    storageBucket: "my-money-e4968.appspot.com",
    messagingSenderId: "584497501599",
    appId: "1:584497501599:web:3a549ac0df7c21341059aa",
    measurementId: "G-J56H8D8ZLN"
  };

firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()

export {projectAuth}