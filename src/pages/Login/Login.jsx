import React, { useRef, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import '../../scss/index.scss'
import { GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from '../../firebase/config';


const Login = () => {
    const auth = getAuth()
    useAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const emailRef = useRef("")
    const passwordRef = useRef("")

    console.log(email)
    console.log(password)

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {

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
        
  return (
    <div className='login'>
        <div className="login-wrap">
            <div className='login-title'>
                <Link className='link' to='/'><span>Trang chủ</span></Link>
                <span>Đăng nhập</span>
            </div>

            <div className="login-content">
                <div className="login-form">
                    <form action="">
                        <input type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)} ref={emailRef}/>
                        <input type="text" placeholder='Mật khẩu' onChange={(e) => setPassword(e.target.value)} ref={passwordRef}/>
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
                        <div className='forgot-password'>
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