// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBD7RTOr2aX7MMr8UGO1q9tPZDeR7iSbGE",
  authDomain: "user-email-password-auth-741e7.firebaseapp.com",
  projectId: "user-email-password-auth-741e7",
  storageBucket: "user-email-password-auth-741e7.appspot.com",
  messagingSenderId: "443348053697",
  appId: "1:443348053697:web:d9ab4ec9eecc551408ee40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;