import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDCgHwYbFeHTXP_5AVk7mr1Rr4BkJovkeo",
  authDomain: "curso-8c446.firebaseapp.com",
  dataBaseUrl: "https://curso-8c446-default-rtdb.firebaseio.com",
  projectId: "curso-8c446",
  storageBucket: "curso-8c446.appspot.com",
  messagingSenderId: "252147762637",
  appId: "1:252147762637:web:e32fc1bbe19d7277653084",
  measurementId: "G-77LXQSPM49",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
