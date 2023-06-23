// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCH7ur4OV5vU5wJFCTcKnjWYbHWXaaNnyU",
  authDomain: "mefirebase-df352.firebaseapp.com",
  projectId: "mefirebase-df352",
  storageBucket: "mefirebase-df352.appspot.com",
  messagingSenderId: "107181806055",
  appId: "1:107181806055:web:4b76f2dbe07d440fbc6d42",
  measurementId: "G-NLX2PLHGHT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)