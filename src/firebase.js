// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDq2kY3ipNk-_taIoZ_hHxMcqwRWoshXN0",
  authDomain: "hourwrk.firebaseapp.com",
  projectId: "hourwrk",
  storageBucket: "hourwrk.appspot.com",
  messagingSenderId: "1042073201033",
  appId: "1:1042073201033:web:3f6c1d92e8d53be1d91958"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)

export {db, auth}
