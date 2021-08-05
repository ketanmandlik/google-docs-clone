import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAO7mmVp_voI8GMQOLgkhSlP6sLvztYDKM",
  authDomain: "docs-clone-7a742.firebaseapp.com",
  projectId: "docs-clone-7a742",
  storageBucket: "docs-clone-7a742.appspot.com",
  messagingSenderId: "717644396335",
  appId: "1:717644396335:web:86e2cfd38809daf52393da",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
