// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"; // Added Firebase Auth
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8nzUWsOoV24i4lg5AzbbiHtjb2DGR5Qg",
  authDomain: "househunt-da3bc.firebaseapp.com",
  projectId: "househunt-da3bc",
  storageBucket: "househunt-da3bc.firebasestorage.app",
  messagingSenderId: "180177254472",
  appId: "1:180177254472:web:4125d0d19e3f1eb38fc07d",
  measurementId: "G-LEBLZZP8NV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Analytics
const auth = getAuth(app);
//const analytics = getAnalytics(app);
const db = getFirestore(app);

export { auth, GoogleAuthProvider, signInWithPopup, db }; // Export Auth functions
