import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC3GpxD1rTgECZOAQxwu6GCHiao0uv_I28",
  authDomain: "medium-f013f.firebaseapp.com",
  projectId: "medium-f013f",
  storageBucket: "medium-f013f.appspot.com",
  messagingSenderId: "125993690156",
  appId: "1:125993690156:web:1484983867ddc61364dd89",
  measurementId: "G-GQE8V3YHYY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const db =  getFirestore(app)

export { auth , provider , db}