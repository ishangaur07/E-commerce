// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC5MGbQrwgOpjiT0GPjKrvn7MMmwscHiHs",
  authDomain: "e-commerce-app-49d5d.firebaseapp.com",
  projectId: "e-commerce-app-49d5d",
  storageBucket: "e-commerce-app-49d5d.appspot.com",
  messagingSenderId: "191565260211",
  appId: "1:191565260211:web:f16dddbf378e702ba657c6",
  measurementId: "G-V2M8HVE1MH"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth(); // Export auth instance
export default firebase;