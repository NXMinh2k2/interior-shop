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
    
    const [openMenu, setOpenMenu] = useState(false)
    const [openSubMenu1, setOpenSubMenu1] = useState(false)
    const [openSubMenu2, setOpenSubMenu2] = useState(false)
    const [openSubMenu3, setOpenSubMenu3] = useState(false)
    const [header, setHeader] = useState(false)

    const handleChangeHeader = () => {
        const scrollY = window.scrollY
        if(scrollY > 120) {
            setHeader(true)
        } else {
            setHeader(false)
        }
    }

    const products = useSelector(state => state.product.checkoutProductList)
    const totalQuantity = products.reduce((quantity, product) => quantity + product.quantity, 0)

    useEffect(() => {
        window.addEventListener('scroll', handleChangeHeader)

        return () => {
            window.removeEventListener('scroll', handleChangeHeader)
        }
    }, [])

    const cartProducts = useSelector(state => state.product.checkoutProductList)

  return (
    <div className='header'>
        <ViewCart />

        {/*Start mobile-menu */}
        <div className={ openMenu ? `header-overlay active-overlay` : `header-overlay`} onClick={() => setOpenMenu(!openMenu)}>
            <div className={openMenu ? `header-menu active-menu` : `header-menu` } onClick={(e) => {e.stopPropagation()}}>
                <ul className='header-menu-list'>
                    <li className='header-menu-item'>
                        <div className='header-menu-item-wrap'>
                            <Link className='link' to='/livingroom' onClick={() => setOpenMenu(!openMenu)}><span>Phòng khách</span></Link>
                            {
                                openSubMenu1 ? <i class="fa-solid fa-circle-xmark"  onClick={() => setOpenSubMenu1(!openSubMenu1)}></i> : <i class="fa-solid fa-plus" onClick={() => setOpenSubMenu1(!openSubMenu1)}></i>
                            }
                        </div>
                        <ul className={openSubMenu1 ? `header-submenu-list active-submenu` : `header-submenu-list`}>
                            <Link className='link' to='sofa' onClick={() => setOpenMenu(!openMenu)}><li className='header-submenu-item'>Sofa gỗ phòng khách</li></Link>
                            <Link className='link' to='shelf' onClick={() => setOpenMenu(!openMenu)}><li className='header-submenu-item'>Kệ tivi</li></Link>
                            <Link className='link' to='desk' onClick={() => setOpenMenu(!openMenu)}> <li className='header-submenu-item'>Bàn nước</li></Link>
                        </ul>
                    </li>
                    <li className='header-menu-item'>
                        <div className='header-menu-item-wrap'>
                            <Link className='link' to='/bedroom' onClick={() => setOpenMenu(!openMenu)}><span>Phòng ngủ</span></Link>
                            {
                                openSubMenu2 ? <i class="fa-solid fa-circle-xmark"  onClick={() => setOpenSubMenu2(!openSubMenu2)}></i> : <i class="fa-solid fa-plus" onClick={() => setOpenSubMenu2(!openSubMenu2)}></i>
                            }
                        </div>
                        <ul className={openSubMenu2 ? `header-submenu-list active-submenu` : `header-submenu-list`}>
                            <Link className='link' to='bed' onClick={() => setOpenMenu(!openMenu)}><li className='header-submenu-item'>Giường</li></Link>
                            <Link className='link' to='cabinet' onClick={() => setOpenMenu(!openMenu)}><li className='header-submenu-item'>Tủ quần áo</li></Link>
                            <Link className='link' to='dressingtable' onClick={() => setOpenMenu(!openMenu)}><li className='header-submenu-item'>Bàn phấn</li></Link>
                        </ul>
                    </li>
                    <li className='header-menu-item'>
                        <div className='header-menu-item-wrap'>
                            <Link className='link' to='/kitchen' onClick={() => setOpenMenu(!openMenu)}><span>Phòng bếp</span></Link>
                            {
                                openSubMenu3 ? <i class="fa-solid fa-circle-xmark"  onClick={() => setOpenSubMenu3(!openSubMenu3)}></i> : <i class="fa-solid fa-plus" onClick={() => setOpenSubMenu3(!openSubMenu3)}></i>
                            }
                        </div>
                        <ul className={openSubMenu3 ? `header-submenu-list active-submenu` : `header-submenu-list`}>
                            <Link className='link' to='dinningtable' onClick={() => setOpenMenu(!openMenu)}><li className='header-submenu-item'>Bàn ăn</li></Link>
                            <Link className='link' to='dinningchair' onClick={() => setOpenMenu(!openMenu)}><li className='header-submenu-item'>Ghế ăn</li></Link>
                            <Link className='link' to='kitchencabinet' onClick={() => setOpenMenu(!openMenu)}><li className='header-submenu-item'>Tủ bếp</li></Link>
                        </ul>
                    </li>
                    <Link className='link' to='/project' onClick={() => setOpenMenu(!openMenu)}><li className='header-menu-item'>Dự án tiêu biểu</li></Link>
                    <Link className='link' to='/news' onClick={() => setOpenMenu(!openMenu)}><li className='header-menu-item'>Tin tức</li></Link>
                    
                </ul>
            </div>
        </div>

        {/*End   mobile-menu*/}
        <div className="header-top header-mobile">
            <div className="header-top-text">
                <span>THÁNG BÁN SOFA KHÔNG LÃI SUẤT - ƯU ĐÃ TỚI 4.500.000 Đ</span>
            </div>
            <ul className="header-top-list">
                <li className="header-top-item">
                    {currentUser && location.pathname == '/' 
                        ?   
                        <div className='account'>
                            <img src="https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-6/252927771_1026564704808760_274793464810513665_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=l8C6PUcGJYUAX80EEzD&_nc_ht=scontent.fhan5-11.fna&oh=00_AT_xCbAwGypaE1qE96K1LYdJdfI3pT8mOU3WIh7FceTV0Q&oe=63057681" alt="" />
                            <h1>{currentUser.email}</h1>
                        </div>
                        : ''
                    }
                </li>
                <Link className='link' to='/'><li className="header-top-item">Trang chủ</li></Link>
                {/* <Link className='link' to='/'><li className="header-top-item">Giới thiệu</li></Link> */}
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
                                <span>{totalQuantity}</span>
                            </div>
                        </i>
                    </li>
                </Link>
            </ul>
        </div>

        <div className="header-center">
            <div className='header-center-menu' onClick={() => setOpenMenu(!openMenu)}>
                <i class="fa-solid fa-bars" ></i>
            </div>
            <div className="header-center-logo">
                <Link className='link' to='/'>
                    <img src={Logo} alt="" />
                </Link>
            </div>
            <div className="header-center-search">
                <div className="header-center-search-input">
                    <input type="text" placeholder='Tìm kiếm sản phẩm'/>
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
            <div className="header-center-cart">
                <i class="fa-solid fa-cart-shopping"></i>
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