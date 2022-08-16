import React from 'react'
import { Link } from 'react-router-dom'
import '../../scss/index.scss'

const ProductPage3 = () => {
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
                    <h1>BÍ QUYẾT TRANG TRÍ BÀN TRÀ ĐỂ TĂNG VẺ ĐẸP, SANG TRỌNG CHO PHÒNG KHÁCH</h1>
                    <p>Nếu bạn cho rằng chỉ khi nào thiết kế, trang trí nội thất theo phong cách đồng bộ thì mới giúp cho không gian trở nên sang trọng, quyến rũ thì bạn đã lầm rồi, đôi khi một chút phá cách, một chút sáng tạo lại mang đến nhiều điều thú vị. Đặc biệt hơn nữa khi không gian ấy lại là phòng khách thì gia chủ hoàn toàn có thể thỏa sức sáng tạo.</p>
                    <img src="https://noithatlacgia.com/wp-content/uploads/2018/05/ban-tra-go-lg-04.jpg" alt="" />
                    <span className='span'>Một bộ bàn nước sẽ giúp căn phòng của bạn thêm hiện đại và sang trọng hơn</span>
                    <p>Nhìn vào đây chúng ta thấy một căn phòng khách được chăm chút hết sức cẩn thận, những chiếc lọ thủy tinh được đặt ở bên bộ bàn nước tiếp khách làm cho không gian trở nên lung linh, huyền ảo hơn. Ngoài ra bạn còn có thể tô điểm thêm vẻ đẹp của chúng bằng cách trang trí hoa tươi, nến và hạt thủy tinh…</p>
                    <p>Đôi khi cũng không cần phải quá cầu kỳ, phức tạp, chỉ một chút nhẹ nhàng, lãng mạn từ ánh sáng của ngọn nến, một vài nhánh cây đặt trong đèn thủy tinh kiểu cổ bày trên bàn nước như thế này cũng đủ để mang lại những phút giây thư giãn cho bạn.</p>
                    <img src="https://noithatlacgia.com/wp-content/uploads/2018/05/ban-tra-go-oc-cho-06.jpg" alt="" />
                    <span className='span'>Bàn nước gỗ kết hợp ngăn kéo sẽ rất tiện lợi cho bạn khi sử dụng</span>
                    <p>Nếu bạn là một người yêu thiên nhiên, thích gần gũi với mảng xanh của cuộc sống thì tại sao không nghĩ đến việc sử dụng những chậu hoa nhỏ đặt ở trên bàn nước, đi kèm với đó là những vật dụng làm từ chất liệu tự nhiên ví dụ như thảm dệt, đồ may tre đan…</p>
                    <p>Phòng khách sang trọng sẽ tràn trề nhựa sống với chậu cây xanh nhỏ đặt ở trên bàn nước tạo điểm nhấn, nó cũng là yếu tố góp phần liên kết mọi chi tiết trong không gian này lại.</p>
                    <img src="https://noithatlacgia.com/wp-content/uploads/2018/05/ban-tra-mat-kinh-lg-03.jpg" alt="" />
                    <span className='span'>Một bộ bàn nước sẽ giúp căn phòng của bạn thêm hiện đại và sang trọng hơn</span>
                    <p>Thay vì chỉ gò bó thiết kế phòng khách theo phong cách hiện đại thì có những ý tưởng cổ điển mãi trường tồn theo tháng năm và không bao giờ bị coi là lỗi mốt, điển hình như căn phòng khách thanh lịch này được sử dụng chiếc bàn nước và ở trên nó là chiếc cốc thủy tinh đựng nến nhìn rất hút mắt.</p>
                    <p>Trong trường hợp phòng khách của bạn có diện tích nhỏ và không có quá nhiều bàn ghế phòng khách thì có thể sử dụng loại bàn gỗ kết hợp cùng với hoa, giỏ mây, đĩa đựng hoa quả ở trên bàn nước, điều này khiến cho phòng khách của nhà bạn trở nên phong cách và độc đáo hơn rất nhiều.</p>
                    <img src="https://noithatlacgia.com/wp-content/uploads/2018/05/ban-nuoc-Lg-02.jpg" alt="" />
                    <span className='span'>Bộ bàn nước này lại cực kỳ phá cách chỉ đơn giản bằng một vài khúc gỗ dài được đặt những ngọn nến nhỏ ở bên trên</span>
                    <p>Sự hiện diện của những giỏ mây có đựng vỏ ốc, đá cuội…ở trên chiếc bàn nước sang trọng gợi nhớ cho ta cảm hứng ở đại dương. Ý tưởng này rất thích hợp để trang trí phòng khách vào mùa hè, cho không gian trở nên mát mẻ hơn.</p>
                    <p>Kết hợp ánh sáng của những ngọn nến lung linh cùng chậu cây nhỏ xinh xắn được đặt ở trên bàn nước giúp cho không gian phòng khách trở nên lãng mạn hơn bao giờ hết.</p>
                </div>
            </div>
            <div className="product-page-right">
                <div className="product-page-relation">
                  <p>Bài viết mới</p>
                  <ul>
                    <Link className='link' to="/productpage"><li>Thiết kế và thi công nội thất chung cư hiện đại (Anh Hà - Tân Mai)</li></Link>
                    <Link className='link' to="/productpage2"><li>Thiết kế nội thất chung cư hiện đại The SunShine Place</li></Link>
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

export default ProductPage3