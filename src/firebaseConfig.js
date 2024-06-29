// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA2TnQjNso07BBN_AraQDNBfS8WTfFHtAs",
  authDomain: "magnolia-app-4a5a9.firebaseapp.com",
  projectId: "magnolia-app-4a5a9",
  storageBucket: "magnolia-app-4a5a9.appspot.com",
  messagingSenderId: "959370784706",
  appId: "1:959370784706:web:a523b7df023889f18ab05b",
  measurementId: "G-M09SS5K6MC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
