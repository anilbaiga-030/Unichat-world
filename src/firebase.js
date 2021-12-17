import firebase from "firebase/app";

import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyC7dyNfyc0w0eYB1ySVyCeK4Kzv197gtc0",
    authDomain: "unichat-caf49.firebaseapp.com",
    projectId: "unichat-caf49",
    storageBucket: "unichat-caf49.appspot.com",
    messagingSenderId: "114533650979",
    appId: "1:114533650979:web:b085b81e5c57a3afb65796",
  })
  .auth();
