import firebase from "firebase";
import "firebase/auth";

// Optionally import the services that you want to use

//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCFXCVl36N0B8Q8ODj2JioE8Aas6aF-QIs",
  authDomain: "travelapp-84577.firebaseapp.com",
  databaseURL: "https://travelapp-84577.firebaseio.com",
  projectId: "travelapp-84577",
  storageBucket: "travelapp-84577.appspot.com",
  messagingSenderId: "122237305050",
  appId: "1:122237305050:web:65953737b45272df6365e3",
  measurementId: "G-6C01NR110J",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
