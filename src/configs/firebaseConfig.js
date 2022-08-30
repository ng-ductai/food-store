import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMgi5rYNRZKN4bR5zlrj8OK5OUdy20-nw",
  authDomain: "food-efba6.firebaseapp.com",
  projectId: "food-efba6",
  storageBucket: "food-efba6.appspot.com",
  messagingSenderId: "1001302945174",
  appId: "1:1001302945174:web:5eadc27fc61a08224dc1b7",
  measurementId: "G-YDVB2Q1H33"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

auth.setPersistence("local");

export default firebase;
export { googleProvider, facebookProvider, auth, db };