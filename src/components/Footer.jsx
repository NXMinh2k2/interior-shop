import React, { useEffect, useState } from 'react'
import '../scss/index.scss'

const Footer = () => {
  const [scroll, setScroll] = useState(false)

  const handleChangeHeader = () => {
    const scrollY = window.scrollY
    if(scrollY > 500) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleChangeHeader)

    return () => {
        window.removeEventListener('scroll', handleChangeHeader)
    }
}, [])

  const handleScrollTop = () => {
    window.scrollTo({top : '0', behavior: 'smooth'})
  }

  return (
    <div className='footer'>
      <div className="footer-container">
        <div className="footer-info">
          <div className='footer-title'>Nhanh.vn</div>
          <div className='underline'></div>
          <ul className='footer-list'>
            <li>Giấy phép kinh doanh số: 0106162265 do phòng Kinh doanh sở KH&ĐT TP Hà Nội cấp ngày: 25/04/2013</li>
            <li>Xưởng SX: Số 102 Thái Thịnh, phường Trung Liệt, quận Đống Đa, TP Hà Nội</li>
            <li>Showroom 1: Thái thịnh, Đống Đa, Hà Nội</li>
            <li>Mở cửa: 7h30 - 21h30 kể cả thứ 7 và Chủ Nhật, Có vị trí đỗ xe ô tô</li>
          </ul>
        </div>

        <div className="footer-info">
          <div className='footer-title'>Liên hệ & Thanh toán</div>
          <div className='underline'></div>
          <ul className='footer-list'>
            <li>Hotline: 19002812</li>
            <li>Email : contact@nhanh.vn</li>
            <li>Website: nhanh.vn</li>
            <li>ĐĂNG KÝ NHẬN THÔNG TIN KHUYẾN MẠI QUA EMAIL</li>
            <li>
              <input type="text" placeholder='Nhập email của bạn'/>
              <button>ĐĂNG KÝ</button>
            </li>
          </ul>
        </div>

        <div className="footer-info">
          <div className='footer-title'>Hỗ trợ khách hàng</div>
          <div className='underline'></div>
          <ul className='footer-list'>
            <li>Chính sách bảo mật thông tin  </li>
            <li>Chính sách và quy định</li>
            <li>Hướng dẫn mua hàng  </li>
            <li>Sơ đồ chỉ đường</li>
          </ul>
        </div>

        <div className="footer-info">
          <div className='footer-title'>Hỗ trợ khách hàng</div>
          <div className='underline'></div>
          <div className='footer-img'>
            <img  src="https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/279455058_1996415153898594_3505548229932861994_n.png?stp=dst-png_p75x225&_nc_cat=102&ccb=1-7&_nc_sid=dd9801&_nc_ohc=Q_RSJY26swoAX_BLZXI&_nc_ht=scontent.fhan5-2.fna&edm=ADwHzz8EAAAA&oh=00_AT_k1tLBYb8BeSQwm-SmMNoeli5QP0iueYSIx_SHClNIJA&oe=6303A3CF" alt="" />
            <div className='footer-like'>
              <a href="https://www.facebook.com/nhanh.vn/" target="_blank"> 
                <i class="fa-brands fa-square-facebook"></i>
                <span>Thích trang</span>
              </a>
            </div>

            <div className='footer-logo'>
              <a href="https://www.facebook.com/nhanh.vn/" target="_blank">
                <img src="https://scontent.fhan5-2.fna.fbcdn.net/v/t31.18172-1/12030358_447990638741061_3521971540564016882_o.jpg?stp=cp0_dst-jpg_p74x74&_nc_cat=104&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=-qwuR9QR-JoAX_exCRI&_nc_ht=scontent.fhan5-2.fna&edm=ADwHzz8EAAAA&oh=00_AT8fBbJuLdoTZKzKDtOmwZsULFBze81cstxh_pp1TwyuwA&oe=630F145F" alt="" />
              </a>
            </div>
          </div>
          <div className='social'>
            <div className='social-facebook'>
              <i class="fa-brands fa-facebook-f"></i>
            </div>
            <div className='social-twitter'>
              <i class="fa-brands fa-twitter"></i>
            </div>
            <div className='social-pinterest '>
              <i class="fa-brands fa-pinterest-p"></i>
            </div>
            <div className='social-tumblr'>
              <i class="fa-brands fa-tumblr"></i>
            </div>
          </div>
        </div>

      </div>

      <div className='footer-contact'>
        <i class="fa-solid fa-phone"></i>
        <span className='hotline'>Hotline: </span>
        <span className='phone'>19002812</span>
      </div>

     {
      scroll ?  <div className='scrollTop' onClick={handleScrollTop}>
      <i class="fa-solid fa-arrow-up-long"></i>
    </div> : ''
     }
    </div>
  )
}

export default Footer