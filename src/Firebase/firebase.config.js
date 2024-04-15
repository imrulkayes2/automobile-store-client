// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDiNXPWOHc2KFnJvwwWoZZjlghfM4JxbsM",
    authDomain: "automobile-store-777c8.firebaseapp.com",
    projectId: "automobile-store-777c8",
    storageBucket: "automobile-store-777c8.appspot.com",
    messagingSenderId: "844022846984",
    appId: "1:844022846984:web:9ae48e0b2b49c94e4c63bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;