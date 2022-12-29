// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNxG5W4nuyezzE7sCJpaPmUGnyem_GbY4",
  authDomain: "management-32e18.firebaseapp.com",
  projectId: "management-32e18",
  storageBucket: "management-32e18.appspot.com",
  messagingSenderId: "202119986660",
  appId: "1:202119986660:web:daa29117df21f191c79bf1",
  measurementId: "G-GHSXZ1C6Z6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;