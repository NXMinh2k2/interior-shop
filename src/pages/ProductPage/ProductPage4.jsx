import React from 'react'
import { Link } from 'react-router-dom'
import '../../scss/index.scss'

const ProductPage4 = () => {
  return (
    <div className="content">
    <div className="products-wrap"> 
      <div className='products-wrap-top'>
        <div className='products-wrap-title'>
            <Link className='link' to='/'><span>Trang chủ</span></Link>
            <span>Sản Phẩm</span>
        </div>

        <div className="product-page">
          <div className="product-page-left">
              <div className="product-page-wrap">
                <h1>NHỮNG MẪU THIẾT KẾ NỘI THẤT PHÒNG KHÁCH HIỆN ĐẠI NHẤT NĂM 2018</h1>
                <p>Sau đây những chuyên gia của Nội Thất Lạc Gia sẽ chia sẻ cho bạn một số kinh nghiệm hay trong việc lựa chọn đồ nội thất cho phòng khách thêm sang trọng và đẳng cấp.</p>
                <p>Tạo điểm nhấn bằng bộ bàn ghế gỗ đẹp</p>
                <p>Không gian phòng khách sẽ không bao giờ trở nên hoàn thiện nếu thiếu vắng đi một bộ bàn ghế gỗ đẹp. Đây được coi là bộ mặt của gia chủ, không chỉ là nơi tiếp khách mà còn chính là một vật dụng thể hiện được phong cách, lối sống của gia chủ. Một bộ bàn ghế gỗ hiện đại với kiểu dáng độc đáo sẽ biến không gian sống của bạn trở nên tuyệt vời hơn bao giờ hết.</p>
                <img src="https://noithatlacgia.com/wp-content/uploads/2018/05/bo-sofa-go-dep-lg-sf01-1-1024x680.jpg" alt="" />
                <span className='span'>Bàn ghế gỗ tự nhiên cho phòng khách thêm hiện đại</span>
                <p>Phối hợp hài hòa về màu sắc</p>
                <p>Điểm nổi bật ấn tượng đầu tiên cho những vị khách bước vào ngôi nhà của bạn là sự kết hợp hài hòa với những sắc màu vô cùng bắt mắt. Một bộ ghế sofa có màu sắc hài hòa với chiếc bàn trà hiện đại sẽ làm cho không gian phòng khách của bạn trở nên lôi cuốn với vẻ đẹp đầy sang trọng và đẳng cấp.</p>
                <img src="https://noithatlacgia.com/wp-content/uploads/2018/05/ban-ghe-go-hien-dai-lg-bg02-3-1024x683.jpg" alt="" />
                <span className='span'>Nội thất phòng khách với màu sắc hài hòa và lôi cuốn</span>
                <p>Điểm nhấn với chiếc kệ tivi thông minh</p>
                <p>Ngoài chiếc ghế sofa với gam màu bắt mắt, bạn cũng cần phải tạo ra một không gian ấn tượng với chiếc kệ tivi hiện đại, được thiết kế với kiểu dáng độc đáo tạo những tiện ích hoàn hảo. Với mẫu kệ tivi đẹp kết hợp với giá sách hay kệ trang trí sẽ biến không gian sống của chúng ta trở nên lý tưởng.</p>
                <img src="https://noithatlacgia.com/wp-content/uploads/2018/05/ke-tivi-go-hien-dai-lac-gia-14.gif" alt="" />
                <span className='span'>Kệ tivi kết hợp với kệ trang trí cho phòng khách thêm ấn tượng</span>
                <p>Hãy biến căn phòng khách của bạn trở thành không gian sống hiện đại, lý tưởng với những món đồ nội thất hiện đại. Nội Thất Lạc Gia là đơn vị chuyên thiết kế và cung cấp những sản phẩm nội thất chất lượng cao, mẫu mã đẹp mà giá cả lại hợp lý. Đây chính là điểm đến hoàn hảo cho mọi gia đình Việt.</p>
                <img src="https://noithatlacgia.com/wp-content/uploads/2018/05/ke-tivi-go-hien-dai-lac-gia-10.gif" alt="" />
                <span className='span'>Kệ tivi kết hợp với kệ trang trí cho phòng khách thêm ấn tượng</span>
              </div>
          </div>
          <div className="product-page-right">
              <div className="product-page-relation">
                <p>Bài viết mới</p>
                <ul>
                  <Link className='link' to="/productpage"><li>Thiết kế và thi công nội thất chung cư hiện đại (Anh Hà - Tân Mai)</li></Link>
                  <Link className='link' to="/productpage2"><li>Thiết kế nội thất chung cư hiện đại The SunShine Place</li></Link>
                  <Link className='link' to="/productpage3"><li>Bí quyết trang trí bàn trà để tăng vẻ đẹp, sang trọng cho phòng khách</li></Link>
                </ul>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProductPage4