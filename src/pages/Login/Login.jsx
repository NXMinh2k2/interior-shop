import React, { useRef, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import '../../scss/index.scss'
import { GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { useAuth } from '../../firebase/config';
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Login = () => {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",

        },
        validationSchema: Yup.object({
            email: Yup.string().required("Bắt buộc nhập").matches(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Email chưa đúng định dạng"),
            password: Yup.string().required("Bắt buộc nhập").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "Mật khẩu ít nhất 8 kí tự, ít nhất 1 chữ cái, một số và 1 kí tự đặc biệt"),
        }),
        // onSubmit: (values) => {
        //     window.alert('Form Submited')
        // }
    })

    useAuth()
    
    const email = formik.values.email
    const password = formik.values.password
    
    const auth = getAuth()
    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert("Đăng nhập thành công")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }

    const handleLoginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        })
    }
    
    const handleLoginWithFacebook = () => {
        const facebookProvider = new FacebookAuthProvider();
        signInWithPopup(auth, facebookProvider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        })
    }

    const handleForgotPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                // ..
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
        });
    }

        
  return (
    <div className='login'>
        <div className="login-wrap">
            <div className='login-title'>
                <Link className='link' to='/'><span>Trang chủ</span></Link>
                <span>Đăng nhập</span>
            </div>

            <div className="login-content">
                <div className="login-form">
                    <form onSubmit={formik.handleSubmit} action="">
                        <input  
                            type="email" 
                            placeholder='Email'
                            id='email'
                            name='email'
                            value={formik.values.email} 
                            onChange={formik.handleChange}
                        />
                        {
                            formik.errors.name && <span>{formik.errors.name}</span>
                        }
                         <input 
                            type="password" 
                            placeholder='Mật khẩu'
                            id='password'
                            name='password'
                            value={formik.values.password} 
                            onChange={formik.handleChange}
                            />
                        {
                            formik.errors.password && <span>{formik.errors.password}</span>
                        }
                        <button onClick={handleLogin}>Đăng nhập</button>
                        <div className='login-popup'>
                            <div className='facebook' onClick={handleLoginWithFacebook}>
                                <i class="fa-brands fa-facebook-f"></i>
                                <span>Facebook</span>
                            </div>
                            <div className='google' onClick={handleLoginWithGoogle}>
                                <i class="fa-brands fa-google"></i>
                                <span>Google</span>
                            </div>
                        </div>
                        <div className='forgot-password' onClick={handleForgotPassword}>
                            <span>Quên mật khẩu</span>
                            <i class="fa-solid fa-question"></i>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login