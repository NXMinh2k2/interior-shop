import React, { useEffect, useState, memo } from 'react'
import Logo from '../assets/images/logo.png'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import '../scss/index.scss'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../firebase/config'
import { getAuth, signOut } from 'firebase/auth'
import ViewCart from './ViewCart'

const Header = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const currentUser = useAuth()

    const auth = getAuth();
    const handleLogout = () => {
        signOut(auth).then(() => {
            alert('Đăng xuất thành công')
            navigate('/login')
        }).catch((error) => {
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

    const products = useSelector(state => state.product.addProductList)

    useEffect(() => {
        window.addEventListener('scroll', handleChangeHeader)

        return () => {
            window.removeEventListener('scroll', handleChangeHeader)
        }
    }, [])

  return (
    <div className='header'>
        <ViewCart />
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
                <Link className='link' to='/cart'><li className="cart-hover header-top-item">Giỏ hàng</li></Link>
                <Link className='link' to='/cart'>
                    <li className="cart-hover header-top-item">
                        <i class="fa-solid fa-cart-shopping">
                            <div className='number-product'>
                                <span>{}</span>
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
                    <Link className='link' to='/livingroom'><span className='header-bottom-item-text-livingroom'>Phòng khách</span></Link>
                    <div className='header-product'>
                        <ul className='header-product-list'>
                            <Link className='link' to='sofa'><li className='header-product-item'>Sofa gỗ phòng khách</li></Link>
                            <Link className='link' to='shelf'><li className='header-product-item'>Kệ Ti Vi</li></Link>
                            <Link className='link' to='desk'><li className='header-product-item'>Bàn trà</li></Link>
                        </ul>
                    </div>
                </div>
                <div className="header-bottom-item header-bottom-item-bedroom">
                    <Link className='link' to='/bedroom'><span className='header-bottom-item-text-bedroom'>Phòng ngủ</span></Link>
                    <div className='header-product'>
                        <ul className='header-product-list'>
                            <Link className='link' to='bed'><li className='header-product-item'>Giường</li></Link>
                            <Link className='link' to='cabinet'><li className='header-product-item'>Tủ quần áo</li></Link>
                            <Link className='link' to='dressingtable'><li className='header-product-item'>Bàn phấn</li></Link>
                        </ul>
                    </div>
                </div>
                <div className="header-bottom-item header-bottom-item-kitchen">
                    <Link className='link' to='/kitchen'><span className='header-bottom-item-text-kitchen'>Phòng bếp</span></Link>
                    <div className='header-product'>
                        <ul className='header-product-list'>
                            <Link className='link' to='dinningtable'> <li className='header-product-item'>Bàn ăn</li></Link>
                            <Link className='link' to='dinningchair'><li className='header-product-item'>Ghế bàn ăn</li></Link>
                            <Link className='link' to='kitchencabinet'><li className='header-product-item'>Tủ bếp</li></Link>
                        </ul>
                    </div>
                </div>
                <div className="header-bottom-item">
                   <Link className='link' to='/project'><span>Dự án tiêu biểu</span></Link>
                </div>
                <div className="header-bottom-item">
                <Link className='link' to='/news'><span>Tin tức</span></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default memo(Header)