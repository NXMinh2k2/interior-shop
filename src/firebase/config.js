// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRBnbgB0IKvK9h0l-vtS3mdLDxe82z1r8",
  authDomain: "interior-shop.firebaseapp.com",
  projectId: "interior-shop",
  storageBucket: "interior-shop.appspot.com",
  messagingSenderId: "471977992405",
  appId: "1:471977992405:web:aa7fd41f3d9f5d4047425c",
  measurementId: "G-S5CNPJMHDT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
