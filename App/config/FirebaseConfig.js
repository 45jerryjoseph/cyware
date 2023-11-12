
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSckwcTNZmoK3PVuliZKG3yltSbizG6OQ",
  authDomain: "cyware-399807.firebaseapp.com",
  projectId: "cyware-399807",
  storageBucket: "cyware-399807.appspot.com",
  messagingSenderId: "885118015985",
  appId: "1:885118015985:web:24e0d5699d3f3216154c50",
  measurementId: "G-F5K9TW13F6"
};

// Initialize Firebase
const app= initializeApp(firebaseConfig);
export const auth = getAuth(app)

// const analytics = getAnalytics(app);