
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCzYWdGHIdxkus7cna3pZWzy9u6BuKFOuU",
  authDomain: "flixtronic-7571d.firebaseapp.com",
  projectId: "flixtronic-7571d",
  storageBucket: "flixtronic-7571d.appspot.com",
  messagingSenderId: "678699267593",
  appId: "1:678699267593:web:d353ef8ae045f797d92ad8",
  measurementId: "G-V7KMFYW94V"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);