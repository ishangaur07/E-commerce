// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5MGbQrwgOpjiT0GPjKrvn7MMmwscHiHs",
  authDomain: "e-commerce-app-49d5d.firebaseapp.com",
  projectId: "e-commerce-app-49d5d",
  storageBucket: "e-commerce-app-49d5d.appspot.com",
  messagingSenderId: "191565260211",
  appId: "1:191565260211:web:f16dddbf378e702ba657c6",
  measurementId: "G-V2M8HVE1MH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);