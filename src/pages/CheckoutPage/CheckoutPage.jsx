import React from 'react'
import { useDispatch ,useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteProduct } from '../../redux/handleSlice'
import '../../scss/index.scss'

const CheckoutPage = () => {

  const products = useSelector(state => state.product.addProductList)

  const dispatch = useDispatch()
  const removeProduct = (product) => {
    dispatch(deleteProduct(product))
  }

  return (
    <div className='checkout'>
        <div className='checkout-wrap'>
            <div className="checkout-left">
              <div className='checkout-product'>
                <div className='title'>Giỏ hàng (2)</div>
                {
                  products.map(product => {
                    return (
                      <div className='product'key={product.id}>
                        <div className='product-img'> 
                          <img src={product.img}/>
                        </div>
                        <div className='product-info'>
                          <h3>{product.name}</h3>
                          <p>Mã sản phẩm: <span>{product.code}</span></p>
                          <p>Tình trạng: <span>Còn hàng</span></p>
                          <p>Giá thành: {product.price}</p>
                          <p>Số lượng: {product.quantity}</p>
                        </div>
                        <div className="product-btn" onClick={() => removeProduct(product)}>
                          <button>Xóa</button>
                        </div>
                      </div>
                    )
                  }) 
                }
              </div>
              <Link className='link' to='/'><button className='checkout-btn'>Tiếp tục mua hàng</button></Link>
              <div className='checkout-info'>
                <div className='title'>Thông tin khách hàng</div>
                <div className='info'>
                  <div className="info-wrap">
                    <form action="">
                      <div className='input-wrap'>
                        <label>Họ và tên</label>
                        <input type="text" placeholder='Họ và Tên'/>
                      </div>
                      <div className='input-wrap'>
                        <label>Email</label>
                        <input type="email" placeholder='Email'/>
                      </div>
                      <div className='input-wrap'>
                        <label>Số điện thoại</label>
                        <input type="number" placeholder='Số điện thoại'/>
                      </div>
                      <div className='input-wrap'>
                        <label>Địa chỉ</label>
                        <input type="text" placeholder='Địa chỉ'/>
                      </div>
                      <div className='input-wrap'>
                        <label>Tỉnh / Thành</label>
                        <select name="" id="">
                          <option value="">Chọn tỉnh thành</option>
                      </select>
                      </div>
                      <div className='input-wrap'>
                        <label>Quận / Huyện</label>
                        <select name="" id="">
                          <option value="">Chọn quận huyện</option>
                      </select>
                      </div>
                      <div className='input-wrap'>
                        <label>Phường / Xã</label>
                        <select name="" id="">
                          <option value="">Chọn phường xã</option>
                      </select>
                      </div>
                      
                    </form>
                    <div className="payment">
                      <h3>Phương thức thanh toán</h3>
                      <div className='input-method-wrap'>
                          <input type="radio" name='check'/>
                          <label>Thanh toán tại nhà (Quý Khách vui lòng thanh toán hóa đơn khi nhận được hàng. Cảm ơn Quý Khách!)</label>
                      </div>
                      <div className='input-method-wrap'>
                          <input type="radio" name='check'/>
                          <label>Bằng ví điện tử Bảo Kim (Đăng nhập để thực hiện chức năng này)</label>
                      </div>
                      <div className='input-method-wrap'>
                        <textarea name="" id="" placeholder='Ghi chú'></textarea>
                      </div>  
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="checkout-right">
                <div className='checkout-bill'>
                  <h1>THANH TOÁN</h1>
                  <div className='discount-title'>NHẬP MÃ ƯU ĐÃI ( MÃ COUPON, VOUCHER )</div>
                  <p>Mã giảm giá</p>
                  <div className='discount-wrap'>
                    <input type="text" placeholder='Mã giảm giá'/>
                    <button>Sử dụng</button>
                  </div>
                  <div className='price-temporary'>
                    <span>TẠM TÍNH</span>
                    <span>97,994,000</span>
                  </div>
                  <div className='fees-ship'>
                    <span>PHÍ VẬN CHUYỂN</span>
                    <span>0đ</span>
                  </div>
                  <div className='price'>
                    <span>THÀNH TIỀN</span>
                    <span>97,994,000</span>
                  </div>
                  <button>Thanh TOÁN</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CheckoutPage