// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiLXLhu2vL5VRCJuaehI6HQsKcj7J9Ais",
  authDomain: "cs-website-ea251.firebaseapp.com",
  projectId: "cs-website-ea251",
  storageBucket: "cs-website-ea251.firebasestorage.app",
  messagingSenderId: "436324935172",
  appId: "1:436324935172:web:a6bbea17562bcc592df751"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
