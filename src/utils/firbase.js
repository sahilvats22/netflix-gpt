// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDNwDhYfL3iGDSlNbSlwOQap5NVTrEZtE",
  authDomain: "netflix-gpt-43127.firebaseapp.com",
  projectId: "netflix-gpt-43127",
  storageBucket: "netflix-gpt-43127.appspot.com",
  messagingSenderId: "570601917389",
  appId: "1:570601917389:web:5d9d6ed46abeac426c1284",
  measurementId: "G-YKMQEFY3GH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
