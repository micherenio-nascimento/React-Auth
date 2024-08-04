import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword as signInWithEmailAndPasswordFirebase } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAYPw0tdu_hDiErGfS9nRHkNVACg-uqqP8",
    authDomain: "react-auth-ad48c.firebaseapp.com",
    projectId: "react-auth-ad48c",
    storageBucket: "react-auth-ad48c.appspot.com",
    messagingSenderId: "716092225560",
    appId: "1:716092225560:web:0ef3b0eeea3453ff44eb6d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Exporta a função com o alias correto
export { auth, signInWithEmailAndPasswordFirebase as signInWithEmailAndPassword };
