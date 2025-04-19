// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAnymZiT2iU9F7P4NjriV1L8ru1bscYEog",
  authDomain: "edulite-c5832.firebaseapp.com",
  databaseURL: "https://edulite-c5832-default-rtdb.firebaseio.com/",
  projectId: "edulite-c5832",
  storageBucket: "edulite-c5832.appspot.com",
  messagingSenderId: "860032738495",
  appId: "1:860032738495:web:7ca7c081a8b1817b49d20a",
  measurementId: "G-8KPH8D44J0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
