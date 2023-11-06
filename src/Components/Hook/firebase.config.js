// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCymf2i4V8QxIhJacvUzWumyhzL9R45w30",
  authDomain: "guardiant-pest-control.firebaseapp.com",
  projectId: "guardiant-pest-control",
  storageBucket: "guardiant-pest-control.appspot.com",
  messagingSenderId: "531787950358",
  appId: "1:531787950358:web:efcbbfcda91800a1350837"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app