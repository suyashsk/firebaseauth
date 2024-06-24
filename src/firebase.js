// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpN4EDhrDTL1lEOzEhFtHyIjS3oI5PgLs",
  authDomain: "geekster-app-d8d6a.firebaseapp.com",
  projectId: "geekster-app-d8d6a",
  storageBucket: "geekster-app-d8d6a.appspot.com",
  messagingSenderId: "601010108309",
  appId: "1:601010108309:web:f78b0923384b213788289c",
  measurementId: "G-J8HC3M2HZE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

