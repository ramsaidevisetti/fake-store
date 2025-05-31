// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdBOpuf0f8YE9SlYrmq0p2pq7xtq-oUH8",
  authDomain: "fakestore-e3a37.firebaseapp.com",
  projectId: "fakestore-e3a37",
  storageBucket: "fakestore-e3a37.firebasestorage.app",
  messagingSenderId: "611715256459",
  appId: "1:611715256459:web:8f9f5580e4f892be49c48e",
  measurementId: "G-JSJWGBB08R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();