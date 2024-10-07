import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyB1AQKcegeg_xS3UQGjRSWNoCTSTOPVigk",
  authDomain: "chat-efca3.firebaseapp.com",
  projectId: "chat-efca3",
  storageBucket: "chat-efca3.appspot.com",
  messagingSenderId: "153153801286",
  appId: "1:153153801286:web:452a14be069e17cf1ace47",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
