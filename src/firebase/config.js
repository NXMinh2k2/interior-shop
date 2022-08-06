// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {  onAuthStateChanged, getAuth, signOut } from "firebase/auth";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


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
  
  const auth = getAuth()

  export const useAuth = () => {
    const navigate = useNavigate()
    const [currentUser, setCurrentUser] = useState()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                navigate('/')
                setCurrentUser(user)
            }
        })
    }, [])

    return currentUser
  }

  // export const logout = () => {
  //   signOut(auth)
  // }
