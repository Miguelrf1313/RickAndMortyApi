
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyDde6GqVdsd5KjFffOwUBQ5AU59ufMSm3I",
  authDomain: "api-proyect-a093e.firebaseapp.com",
  projectId: "api-proyect-a093e",
  storageBucket: "api-proyect-a093e.appspot.com",
  messagingSenderId: "59491192733",
  appId: "1:59491192733:web:ec2d4675a41dd735eee974"
};

// Initialize Firebase
export const FireBaseApp = initializeApp(firebaseConfig);
export const FireBaseAuth = getAuth(FireBaseApp)
export const FirebaseDB = getFirestore(FireBaseApp)