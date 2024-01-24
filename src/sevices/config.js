import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBNcHgk9WeF2YeHymABmgFZBPGMQm7MFJ0",
  authDomain: "appvx-30e80.firebaseapp.com",
  projectId: "appvx-30e80",
  storageBucket: "appvx-30e80.appspot.com",
  messagingSenderId: "532475866417",
  appId: "1:532475866417:web:75320225f3a9a7bceb5410"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore(app);