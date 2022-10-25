// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKJt7bfxomUOgOzqDZeOUAtAiGWmaN3Ts",
  authDomain: "web-scholar.firebaseapp.com",
  projectId: "web-scholar",
  storageBucket: "web-scholar.appspot.com",
  messagingSenderId: "328934999901",
  appId: "1:328934999901:web:0c26c4cd2228843f910ab4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;