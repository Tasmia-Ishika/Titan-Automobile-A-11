// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-lzq6rmjK6oWGl5BMxKzyNb81GEUvImQ",
    authDomain: "titan-automobiles.firebaseapp.com",
    projectId: "titan-automobiles",
    storageBucket: "titan-automobiles.appspot.com",
    messagingSenderId: "985023519268",
    appId: "1:985023519268:web:a19051046caf1b2d8196b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;