// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-c4ce2.firebaseapp.com",
  projectId: "mern-estate-c4ce2",
  storageBucket: "mern-estate-c4ce2.firebasestorage.app",
  messagingSenderId: "351119254058",
  appId: "1:351119254058:web:56e13ffed9f602bba7d953"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);