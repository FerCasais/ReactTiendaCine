// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0NgjYzGqrl_36x-kusbgjHo6Op5TFrC4",
  authDomain: "tiendaf-1a16b.firebaseapp.com",
  projectId: "tiendaf-1a16b",
  storageBucket: "tiendaf-1a16b.appspot.com",
  messagingSenderId: "338054352381",
  appId: "1:338054352381:web:4b2bfdcbbdae655ba4dd94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app