// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc-_95MrUx5WIaIm5fuVd1fVtqIaJa-v0",
  authDomain: "coiso-2e223.firebaseapp.com",
  projectId: "coiso-2e223",
  storageBucket: "coiso-2e223.appspot.com",
  messagingSenderId: "629549044759",
  appId: "1:629549044759:web:6f92214930334931487852"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);

