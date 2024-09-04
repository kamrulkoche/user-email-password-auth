// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoPG509nCS2RpDF8AxeP7V1DAUL9x8TRw",
  authDomain: "user-email-password-c9a37.firebaseapp.com",
  projectId: "user-email-password-c9a37",
  storageBucket: "user-email-password-c9a37.appspot.com",
  messagingSenderId: "1073793032697",
  appId: "1:1073793032697:web:a78e91c4e3645336721d28",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
