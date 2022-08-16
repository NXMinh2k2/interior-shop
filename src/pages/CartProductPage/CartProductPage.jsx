import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { addProducts, decreaseQuantity, deleteProduct } from '../../redux/handleSlice'
import '../../scss/index.scss'  
import { createContext } from 'react'

const CartProductPage = () => {

  const products = useSelector(state => state.product.addProductList)

  const dispatch = useDispatch()
  const increaseProduct = (product) => {
    dispatch(addProducts(product))
  }

  const decreaseProduct = (product) => {
    dispatch(decreaseQuantity(product))
  } 

  const removeProduct = (product) => {
    dispatch(deleteProduct(product))
  }

  const resultPrice = products.reduce((price, item) => price + item.totalPrice , 0) 
  const PriceContext = createContext()

  return (
      <div className="content">
      {
        products ? (
          <div className="cart-wrap"> 
          <div className='cart-wrap-top'>
            <div className='cart-wrap-title'>
              <Link className='link' to='/'><span>Trang chủ</span></Link>
              <span>Giỏ hàng</span>
            </div>

            <div className="cart-page">
              <div className="cart-page-left">
                <div className='title'>Giỏ hàng</div>
                <table>
                  <tr>
                      <th className='product'>Sản phẩm</th>
                      <th className='quantity'>Số lượng</th>
                      <th className='unit-price'>Đơn giá</th>
                      <th className='price'>Thành tiền</th>
                  </tr>
                    {
                      products && products.map(product => {
                        return (
                          <tr key={product.id}>
                            <th className='product'>
                              <div className='product-wrap'>
                                <img src={product.img}/>
                                <div className='product-wrap-des'>
                                  <span>{product.name}</span>
                                  <div className='cart-wrap-delete' onClick={() => removeProduct(product)}>
                                    <i class="fa-solid fa-cart-arrow-down"></i>
                                    <span>Xóa</span>
                                  </div>
                                </div>
                              </div>
                            </th>
                            <th>
                              <div className='product-detail-quantity'>
                                  <span><i class="fa-solid fa-minus" onClick={() => decreaseProduct(product)} ></i></span>
                                  <span>{product.quantity}</span>
                                  <span ><i class="fa-solid fa-plus" onClick={() => increaseProduct(product)} ></i></span>
                              </div>
                            </th>
                            <th>{product.price} VNĐ</th>
                            <th>{product.totalPrice}.000.000VNĐ</th>
                          </tr>
                        )
                      })
                    }
                  <tr>
                    <td className='total-price' colSpan="4">Tổng tiền {resultPrice}.000.000 VNĐ</td>
                  </tr>
                  <tr>
                    <td className='btn-wrap' colSpan="4">
                      <Link to='/'><button>Tiếp tục mua hàng</button></Link>
                      <Link to='/checkout'><button>Thực hiện thanh toán</button></Link>
                    </td>
                  </tr>
                </table> 
              </div>

              <div className="cart-page-right">
                <div className="cart-page-relation">
                  <p>Bài viết mới</p>
                  <ul>
                    <li>Bí quyết trang trí bàn trà để tăng vẻ đẹp, sang trọng cho phòng khách</li>
                    <li>Những mẫu thiết kế nội thất phòng khách hiện đại nhất năm 2018</li>
                    <li>Thiết kế và thi công nội thất chung cư hiện đại (Anh Hà - Tân Mai)</li>
                    <li>Thiết kế nội thất chung cư hiện đại The SunShine Place</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        ) : 
        (<h1>Không có sản phẩm nào trong giỏ hàng. Quay lại <Link className='link' to='/'><span>Cửa Hàng</span></Link> để tiếp tục mua sắm.</h1>)
      }
      </div>
  )
}

export default CartProductPage
