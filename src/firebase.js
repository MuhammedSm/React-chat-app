// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAORLKjnZsYNmuSIEucXlYqf0bGFtR2wXE",
  authDomain: "chat-92e95.firebaseapp.com",
  projectId: "chat-92e95",
  storageBucket: "chat-92e95.appspot.com",
  messagingSenderId: "382707027180",
  appId: "1:382707027180:web:f3bbd856ea741ff645e9c9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth =getAuth()
export const storage = getStorage();
export const db = getFirestore();