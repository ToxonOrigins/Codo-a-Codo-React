// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA3-oGR5810d1hYHcmunTitjvztB_D31RI",
    authDomain: "react2026-a2dba.firebaseapp.com",
    projectId: "react2026-a2dba",
    storageBucket: "react2026-a2dba.firebasestorage.app",
    messagingSenderId: "639254159483",
    appId: "1:639254159483:web:89c1ca2fdf7efc503dc2de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

//para el login
const auth = getAuth(app);

export { db, auth };
