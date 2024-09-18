// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuVXKxPz_qlL-S79qqFWfeu39W2tKfjJk",
  authDomain: "wg-dashboard-f795b.firebaseapp.com",
  projectId: "wg-dashboard-f795b",
  storageBucket: "wg-dashboard-f795b.appspot.com",
  messagingSenderId: "877411358459",
  appId: "1:877411358459:web:d645b81b0cc1a7d9f9c25e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const handleGoogleSignInIfNeeded = async () => {
  if (auth.currentUser) {
    return;
  }
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider);
};

// It will be imported into your react app whenever it is needed
export const db: any = getFirestore(app);
