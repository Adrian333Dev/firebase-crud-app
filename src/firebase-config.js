import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBG_CYqAl7wI4abXaGWht9bQqptBZILFxg",
  authDomain: "crud-app-435b7.firebaseapp.com",
  projectId: "crud-app-435b7",
  storageBucket: "crud-app-435b7.appspot.com",
  messagingSenderId: "564580776604",
  appId: "1:564580776604:web:449e0a041b4811b7df8b59",
  measurementId: "G-3NFRYBVQYY",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
