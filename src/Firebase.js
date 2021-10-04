import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwIrXANPp-0rSsxzUy19or3dAc3Miql_Q",
  authDomain: "whatsappclone-a5f16.firebaseapp.com",
  projectId: "whatsappclone-a5f16",
  storageBucket: "whatsappclone-a5f16.appspot.com",
  messagingSenderId: "519918284326",
  appId: "1:519918284326:web:1a6032703fcb51485ac0e7",
};
//initialize firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
//database
const db = firebaseApp.firestore();
//auth
const auth = firebaseApp.firebase.auth();
//google auth
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
