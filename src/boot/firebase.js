
import firebase from "firebase/app"
import "firebase/firestore"

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCtnDTucc66k9aiZ6L_TZpkIxa13fDzJRY",
  authDomain: "alpha-betta.firebaseapp.com",
  projectId: "alpha-betta",
  storageBucket: "alpha-betta.appspot.com",
  messagingSenderId: "259817376346",
  appId: "1:259817376346:web:82c5cb7915d77c5ef0a663"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();

export default db