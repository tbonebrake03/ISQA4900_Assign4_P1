import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4J3Ppxy2aHsQHyAxuWuBRLPjW_Cwar5M",
  authDomain: "quasartodo-63379.firebaseapp.com",
  projectId: "quasartodo-63379",
  storageBucket: "quasartodo-63379.appspot.com",
  messagingSenderId: "903362054805",
  appId: "1:903362054805:web:ebd3cdb8e913caf018a99c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase
const db = firebase.initializeApp(firebaseConfig);
export default db.firestore();