import firebase from "firebase";

// Optionally import the services that you want to use

import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDhxnUjnZ5moHjYE5SLLRoaJ9u7Yvnteuk",
  authDomain: "travelapp-30b98.firebaseapp.com",
  databaseURL: "https://travelapp-30b98.firebaseio.com",
  projectId: "travelapp-30b98",
  storageBucket: "travelapp-30b98.appspot.com",
  messagingSenderId: "852314495334",
  appId: "1:852314495334:web:33771b08c99ee596bc90a7",
  measurementId: "G-JTD51TTMMF",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
