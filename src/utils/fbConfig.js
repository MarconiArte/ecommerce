
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA92fMNho54udkeYWHBpXV93xzzfT_nM2U",
  authDomain: "pia-pasteleria.firebaseapp.com",
  projectId: "pia-pasteleria",
  storageBucket: "pia-pasteleria.appspot.com",
  messagingSenderId: "434721133022",
  appId: "1:434721133022:web:201dac7b5e472a36d70d4f",
  measurementId: "G-J12FX2DGY1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

