import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBzKpF_f1ScnJWuZUfHBMz518gwfhN5CHM",
    authDomain: "clone-6ed63.firebaseapp.com",
    projectId: "clone-6ed63",
    storageBucket: "clone-6ed63.appspot.com",
    messagingSenderId: "139975259466",
    appId: "1:139975259466:web:87dc78b462e21c0ffc7db3",
    measurementId: "G-SFN7X8D5H3"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };