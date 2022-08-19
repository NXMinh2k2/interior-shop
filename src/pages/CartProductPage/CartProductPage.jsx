import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { increaseQuantityCart, decreaseQuantityCart, deleteProduct, showResultPrice } from '../../redux/handleSlice'
import '../../scss/index.scss'  

const CartProductPage = () => {
  const products = useSelector(state => state.product.checkoutProductList)
  // const [productList, setProductList] = useState(() => {
  //   const storageProduct = JSON.parse(localStorage.getItem('products'))
  //   return storageProduct ?? products
  // })

  // useEffect(() => {
  //   localStorage.setItem('products', JSON.stringify(products))
  // }, [products])

  const dispatch = useDispatch()
  const increaseProduct = (product) => {
    dispatch(increaseQuantityCart(product))
  }

  const decreaseProduct = (product) => {
    dispatch(decreaseQuantityCart(product))
  } 

  const removeProduct = (product) => {
    dispatch(deleteProduct(product))
  }

  const resultPrice = products.reduce((price, item) => price + item.totalPrice , 0) 

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
                            <th className='th-price'>{product.price} VNĐ</th>
                            <th >{product.totalPrice}.000.000VNĐ</th>
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
                      <Link to='/checkout' ><button>Thực hiện thanh toán</button></Link>
                    </td>
                  </tr>
                </table> 
              </div>

              <div className="cart-page-right">
                <div className="cart-page-relation">
                  <p>Bài viết mới</p>
                  <ul>
                     <Link className='link' to='/productpage3'><li>Bí quyết trang trí bàn trà để tăng vẻ đẹp, sang trọng cho phòng khách</li></Link>
                    <Link className='link' to='/productpage4'><li>Những mẫu thiết kế nội thất phòng khách hiện đại nhất năm 2018</li></Link>
                    <Link className='link' to='/productpage'><li>Thiết kế và thi công nội thất chung cư hiện đại (Anh Hà - Tân Mai)</li></Link>
                    <Link className='link' to='/productpage2'><li>Thiết kế nội thất chung cư hiện đại The SunShine Place</li></Link>
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

