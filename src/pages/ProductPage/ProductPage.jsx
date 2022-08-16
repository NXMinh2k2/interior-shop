import React from 'react'
import { Link } from 'react-router-dom'
import '../../scss/index.scss'

const ProductPage = () => {
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
                    <h1>THIẾT KẾ VÀ THI CÔNG NỘI THẤT CHUNG CƯ HIỆN ĐẠI (ANH HÀ - TÂN MAI)</h1>
                    <p>Nội Thất Lạc Gia rất vinh hạnh khi được chọn là 1 trong những đơn vị độc quyền quản lý và phát triển sự án thiết kế nội thất chung cư cùng các nhà phân phối lớn. Với nhiều năm kinh nghiệm trong lĩnh thực thiết kế và thi công nội thất, Lạc Gia hứa hẹn sẽ đem đến cho quý vị một không gian sống tiện nghi, hiện đại và sang trọng nhất.</p>
                    <p>Các bạn hãy cùng Nội Thất Lạc Gia chiêm ngưỡng lại vẻ đẹp sang trọng và hiện đại tại căn hộ cao cấp của nhà anh Hà tại Tân Mai - Hoàng Mai nhé:</p>
                    <p>Dự án được đội ngũ KTS Nội Thất Lạc Gia thiết kế và thi công trọn gói, với thiết kế hiện đại tinh tế đã đem đến một không gian sống vô cùng tiện nghi và sang trọng.</p>
                    <span>Phòng Khách</span>
                    <p>“Sang trọng và đẳng cấp” là 2 từ để miêu tả không gian phòng khách nơi đây. Với thiết kế theo xu hướng hiện đại, đặc trưng của không gian sống, giúp mọi sinh hoạt của các thành viên trong gia đình trở nên đơn gian và thuận tiện.</p>
                    <p>Dưới đây là một số hình ảnh thực tế trong quá trinh lắp đặt và thi công căn hộ nhà anh Hà:</p>
                    <span>Phòng Bếp</span>
                    <p>Đúng như tên gọi của nó, phòng bếp chính là nơi sum họp, nơi giao thoa những cảm xúc đong đầy giữa các thành viên trong gia đình, vì thế mà phòng bếp luôn được đặc cách và trang trí những món đồ vật thật ấn tượng và đẹp mắt.</p>
                    <p>Hình ảnh thực tế trong quá trình lắp đặt nội thất phòng bếp với mẫu tủ bếp hiện đại:</p>
                    <img src="https://noithatlacgia.com/wp-content/uploads/2018/06/13.jpg" alt="" />
                    <img src="https://noithatlacgia.com/wp-content/uploads/2018/06/15.jpg" alt="" />
                    <span>Phòng tắm</span>
                    <p>Đối với phòng tắm, hầu hết các đồ nội thất đều được gắn chặt vào mặt sàn và mặt tường. Vì vậy, trước khi thiết kế nội thất phòng tắm, Lạc Gia đã xem xét rất kỹ lưỡng để có một không gian phòng tắm tiện nghi và hiện đại nhất có thể.</p>
                    <img src="https://noithatlacgia.com/wp-content/uploads/2018/06/9.jpg" alt="" />
                    <img src="https://noithatlacgia.com/wp-content/uploads/2018/06/20.jpg" alt="" />
                    <span>Các phòng ngủ</span>
                    <p>Phòng ngủ là nơi riêng tư nhất nhưng cũng cần sự trau chuốt, tỉ mỉ để tạo sự thoải mái, thư giãn nhất cho gia chủ. Điểm riêng biệt của mẫu giường ngủ này là ngăn kéo tiện dụng để bạn sắp xếp quần áo, chăn màn,… tạo sự gọn gàng, hiện đại cho không gian chung.</p>
                    <p>Căn hộ gồm 3 phòng ngủ, mỗi phòng lại được thiết kế và trang trí theo những phong cách khác nhau, thể hiện được tính cách và gu thẩm mĩ của mỗi thành viên trong gia đình. Mời các bạn cùng tham quan một số hình ảnh mà chúng tôi ghi lại được trong quá trình thi công, lắp đặt tại căn hộ nhà anh Hà:</p>
                    <p>Bất kì không gian nào, Nội Thất Lạc Gia cũng luôn chú ý tới sự hòa hợp giữa các món nội thất với nhau. Hãy cảm nhận vẻ đẹp của mẫu thiết kế này và lựa chọn mẫu thiết kế phù hợp với không gian sống của gia đình mình nhé!</p>
                </div>
            </div>
            <div className="product-page-right">
                <div className="product-page-relation">
                  <p>Bài viết mới</p>
                  <ul>
                    <Link className='link' to="/productpage2"><li>Thiết kế nội thất chung cư hiện đại The SunShine Place</li></Link>
                    <Link className='link' to="/productpage3"><li>Bí quyết trang trí bàn trà để tăng vẻ đẹp, sang trọng cho phòng khách</li></Link>
                    <Link className='link' to="/productpage4"><li>Những mẫu thiết kế nội thất phòng khách hiện đại nhất năm 2018</li></Link>
                  </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage