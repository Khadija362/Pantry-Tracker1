// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUFbszerjYWoHsVJ-0BaW8nQq8HcZCU88",
  authDomain: "pantry-fb5c1.firebaseapp.com",
  projectId: "pantry-fb5c1",
  storageBucket: "pantry-fb5c1.appspot.com",
  messagingSenderId: "250485073386",
  appId: "1:250485073386:web:605911fd14966616b53e93",
  measurementId: "G-ZTYFY6VNT5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export {firestore};