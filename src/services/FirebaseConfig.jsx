import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import { getStorage } from "firebase/storage";
import {getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBlTAsLbS6xVYCmlDofOeU0SUFH5SUj2NI",
  authDomain: "react-auth-a3745.firebaseapp.com",
  projectId: "react-auth-a3745",
  storageBucket: "react-auth-a3745.appspot.com",
  messagingSenderId: "269874738777",
  appId: "1:269874738777:web:1e4332bb72af74c859a348"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);

export const database = getDatabase(app);