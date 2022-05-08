// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_GOOGLE_FIREBASE_API_KEY,
  authDomain: "moshi-corzo.firebaseapp.com",
  projectId: "moshi-corzo",
  storageBucket: "moshi-corzo.appspot.com",
  messagingSenderId: "928246907154",
  appId: "1:928246907154:web:142f409c1c0491e5e373cb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const dataBase = getFirestore(app);

export default dataBase;
