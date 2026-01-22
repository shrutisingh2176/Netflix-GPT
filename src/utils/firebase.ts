   // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3yI-55xbEbHWV1iIR5lNq2I0ZMh_5zv8",
  authDomain: "netflix-gpt-6228b.firebaseapp.com",
  projectId: "netflix-gpt-6228b",
  storageBucket: "netflix-gpt-6228b.firebasestorage.app",
  messagingSenderId: "114753622809",
  appId: "1:114753622809:web:9ef5d3c99e488f1f406b88",
  measurementId: "G-YSSB27PLTT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();