// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "lofo-ac0b7.firebaseapp.com",
  projectId: "lofo-ac0b7",
  storageBucket: "lofo-ac0b7.appspot.com",
  messagingSenderId: "1065654668255",
  appId: "1:1065654668255:web:ce7588aa85b4bf1868526a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);