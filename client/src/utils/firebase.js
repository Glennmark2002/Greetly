// 

import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "greeetly.firebaseapp.com",
  projectId: "greeetly",
  storageBucket: "greeetly.firebasestorage.app",
  messagingSenderId: "675440807963",
  appId: "1:675440807963:web:a2a9a97bfba59f3426e8be"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider(); 
const auth = getAuth(app); 

export const authenticate = async () => await signInWithPopup(auth, provider);


