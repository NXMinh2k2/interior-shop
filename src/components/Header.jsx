import React from 'react'
import Logo from '../assets/images/logo.png'
import {Link} from 'react-router-dom'
import '../scss/index.scss'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-top">
            <div className="header-top-text">
                <span>THÁNG BÁN SOFA KHÔNG LÃI SUẤT - ƯU ĐÃ TỚI 4.500.000 Đ</span>
            </div>
            <ul className="header-top-list">
                <li className="header-top-item">Trang chủ</li>
                <li className="header-top-item">Giới thiệu</li>
                <li className="header-top-item">Liên hệ</li>
                <li className="header-top-item">Đăng ký</li>
                <li className="header-top-item">Đăng nhập</li>
                <li className="header-top-item">
                    Giỏ hàng
                </li>
                <li className="header-top-item">
                    <i class="fa-solid fa-cart-shopping">
                            <div className='number-product'>
                                <span>1</span>
                            </div>
                        </i>
                </li>
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

        <div className="header-bottom">
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

export default Header