// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHrir-9OTJJKBlB3AQFlWHBtcABWFPbXM",
  authDomain: "online-job-portal-43df2.firebaseapp.com",
  projectId: "online-job-portal-43df2",
  storageBucket: "online-job-portal-43df2.firebasestorage.app",
  messagingSenderId: "1091317372660",
  appId: "1:1091317372660:web:026ec0ed2004ddbe1370a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app);

export {db};