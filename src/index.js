// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword} from "firebase/auth"
import {getFirestore, collection, addDoc, connectFirestoreEmulator} from "firebase/firestore"
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

// //google Oauth
// const googleSignInBtn = document.querySelector('.google-sign-in');
// const provider = new GoogleAuthProvider();
// const auth = getAuth(app);

// //sign in
// googleSignInBtn.addEventListener('click', () =>{
//   signInWithPopup(auth,provider).then((result)=>{
//     const user = result.user;
//     alert('Hello, ${user.displayName}, You signed using Google!');

//   }).catch((error)=> {
//     const errorMessage = error.message;
//     alert('Error:${errorMessage}');
//   });
// });

// //sign in with email and password
// const epSignInBtn = document.querySelector('.ep-sign-in');
// epSignInBtn.addEventListener('click', () =>{
//   const email="iebrek@gmail.com";
//   const password = "PissedOff01";

//   signInWithEmailAndPassword(auth,email,password).then((result)=>{
//     alert('Hi you signed in using Email.');

//   }).catch((error)=>{
//     const errorMessage = error.message;
//     alert('Error:${errorMessage}');
//   });
// });
// //sign out
// const signOutBtn = document.querySelector('.sign-out');
// signOutBtn.addEventListener('click', () =>{
//   signOut(auth);
// });

// onAuthStateChanged(auth, (user)=>{
//   if(user){
//     alert("User has Sign In!")
//   }else{
//  alert("No User Currently")
//   }
// });

//firestore
const db = getFirestore();
connectFirestoreEmulator(db, 'localhost', 8080);

const saveBtn = document.querySelector(".save");
saveBtn.addEventListener('click', async ()=>{
  const collectionRef = collection(db, "gadgets")
  const newGadget = await addDoc(collectionRef,{
    name:"Phone",
    os: "Android",
    version: "11"
  });
  
  console.log("Created a new Gadget: " + newGadget.id);


});