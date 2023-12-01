// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6bwGgwel-Z8fEjxwV54OjDdjq6VJqBis",
  authDomain: "e-commerce-36f59.firebaseapp.com",
  projectId: "e-commerce-36f59",
  storageBucket: "e-commerce-36f59.appspot.com",
  messagingSenderId: "992782694628",
  appId: "1:992782694628:web:b1acea4ab86fc1e99a94f1",
  measurementId: "G-LTWB875KK3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default { app };
