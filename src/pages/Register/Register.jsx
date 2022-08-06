import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../../scss/index.scss'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import firbase from '../../firebase/config'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

const Register = () => {
    
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            phone: ""
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Bắt buộc nhập").min(4, "Tên phải từ 4 kí tự trở lên"),
            email: Yup.string().required("Bắt buộc nhập").matches(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Email chưa đúng định dạng"),
            password: Yup.string().required("Bắt buộc nhập").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "Mật khẩu ít nhất 8 kí tự, ít nhất 1 chữ cái, một số và 1 kí tự đặc biệt"),
            phone: Yup.string().required("Bắt buộc nhập").matches(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/, "Không phải số điện thoại")
        }),
        // onSubmit: (values) => {
        //     window.alert('Form Submited')
        // }
    })

    const email = formik.values.email
    const password = formik.values.password

    const auth = getAuth();
    const signup = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert("Đăng ký thành công")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });    
    }
    
  return (
    <div className='register'>
        <div className="register-wrap">
            <div className='register-title'>
                <Link className='link' to='/'><span>Trang chủ</span></Link>
                <span>Đăng ký</span>
            </div>
            <div className='register-content'>
                <div className='register-form'>
                    <form onSubmit={formik.handleSubmit} action="">
                        <input 
                            type="text" 
                            placeholder='Họ và tên' 
                            id='name'
                            name='name'
                            value={formik.values.name} 
                            onChange={formik.handleChange}
                        />
                        {
                            formik.errors.name && <span>{formik.errors.name}</span>
                        }
                        <input 
                            type="email" 
                            placeholder='Email'
                            id='email'
                            name='email'
                            value={formik.values.email} 
                            onChange={formik.handleChange}
                        />
                        {
                            formik.errors.email && <span>{formik.errors.email}</span>
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
                        <input 
                            type="phone"
                            placeholder='Số điện thoại'
                            id='phone'
                            name='phone'
                            value={formik.values.phone} 
                            onChange={formik.handleChange}
                         />
                        {
                            formik.errors.phone && <span>{formik.errors.phone}</span>
                        }
                        <button onClick={signup}>ĐĂNG KÝ</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register
