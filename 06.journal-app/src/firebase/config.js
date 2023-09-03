// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDXQLAv9Oasg3CefgFlGZXKLMm61KdC-M",
  authDomain: "devtalles-react.firebaseapp.com",
  projectId: "devtalles-react",
  storageBucket: "devtalles-react.appspot.com",
  messagingSenderId: "382904649744",
  appId: "1:382904649744:web:d7380c80d078767a146295",
  measurementId: "G-B46LFKSHV0"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
export const analytics = getAnalytics(FirebaseApp);