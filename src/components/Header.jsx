import React, { useEffect, useState, memo } from 'react'
import Logo from '../assets/images/logo.png'
import {Link} from 'react-router-dom'
import '../scss/index.scss'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../firebase/config'
import { getAuth, signOut } from 'firebase/auth'

// import {useAuth} from '../pages/Register/Register' 

const Header = () => {
    const location = useLocation()
    const currentUser = useAuth()
    console.log(currentUser)

    // const handleLogout = () => {
    //     logout()
    //     alert("Đăng xuất thành công")
    // }

    const auth = getAuth();

    const navigate = useNavigate()
    const handleLogout = () => {
        signOut(auth).then(() => {
            alert('Đăng xuất thành công')
            navigate('/login')
        // Sign-out successful.
        }).catch((error) => {
        // An error happened.
        });
    }

    const [header, setHeader] = useState(false)

    const handleChangeHeader = () => {
        const scrollY = window.scrollY
        if(scrollY > 120) {
            setHeader(true)
        } else {
            setHeader(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleChangeHeader)

        return () => {
            window.removeEventListener('scroll', handleChangeHeader)
        }
    }, [])

  return (
    <div className='header'>
        <div className="header-top">
            <div className="header-top-text">
                <span>THÁNG BÁN SOFA KHÔNG LÃI SUẤT - ƯU ĐÃ TỚI 4.500.000 Đ</span>
            </div>
            <ul className="header-top-list">
                <li>{currentUser && location.pathname == '/' ? currentUser.email : ''}</li>
                <Link className='link' to='/'><li className="header-top-item">Trang chủ</li></Link>
                <Link className='link' to='/'><li className="header-top-item">Giới thiệu</li></Link>
                <Link className='link' to='/contact'><li className="header-top-item">Liên hệ</li></Link>
                <Link className='link' to='/register'><li className="header-top-item">Đăng ký</li></Link>
                {
                    currentUser && location.pathname == '/' ?  (<li className="header-top-item" onClick={handleLogout}>Đăng xuất</li>) :
                                    (<Link className='link' to='/login'><li className="header-top-item">Đăng nhập</li></Link>)
                }
                <Link className='link' to='/cart'><li className="header-top-item">Giỏ hàng</li></Link>
                <Link className='link' to='/cart'>
                    <li className="header-top-item">
                        <i class="fa-solid fa-cart-shopping">
                            <div className='number-product'>
                                <span>1</span>
                            </div>
                        </i>
                    </li>
                </Link>
            </ul>
        </div>

        <div className="header-center">
            <div className="header-center-logo">
                <img src={Logo} alt="" />
            </div>
            <div className="header-center-search">
                <div className="header-center-search-input">
                    <input type="text" placeholder='Tìm sản phẩm'/>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
            <div className="header-center-contact">
                <div className='header-center-contact-hotline'>
                    <i class="fa-solid fa-phone"></i>
                    <span className='hotline'>Hotline: </span>
                    <span className='phone'>19002812</span>
                </div>
            </div>
        </div>

        <div className={header ? 'header-bottom scroll' : 'header-bottom'}>
            <div className="header-bottom-list ">
                <div className="header-bottom-item header-bottom-item-livingroom">
                    <span className='header-bottom-item-text-livingroom'>Phòng khách</span>
                    <div className='header-product'>
                        <ul className='header-product-list'>
                            <li className='header-product-item'>Sofa gỗ phòng khách</li>
                            <li className='header-product-item'>Kệ Ti Vi</li>
                            <li className='header-product-item'>Bàn nước</li>
                        </ul>
                    </div>
                </div>
                <div className="header-bottom-item header-bottom-item-bedroom">
                    <span className='header-bottom-item-text-bedroom'>Phòng ngủ</span>
                    <div className='header-product'>
                        <ul className='header-product-list'>
                            <li className='header-product-item'>Giường</li>
                            <li className='header-product-item'>Tủ quần áo</li>
                            <li className='header-product-item'>Bàn phấn</li>
                        </ul>
                    </div>
                </div>
                <div className="header-bottom-item header-bottom-item-kitchen">
                    <span className='header-bottom-item-text-kitchen'>Phòng bếp</span>
                    <div className='header-product'>
                        <ul className='header-product-list'>
                            <li className='header-product-item'>Bàn ăn</li>
                            <li className='header-product-item'>Ghế bàn ăn</li>
                            <li className='header-product-item'>Tủ bếp</li>
                        </ul>
                    </div>
                </div>
                <div className="header-bottom-item">
                   <span>Dự án tiêu biểu</span>
                </div>
                <div className="header-bottom-item">
                    <span>Tin tức</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default memo(Header)