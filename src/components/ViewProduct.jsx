import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import '../scss/index.scss'
import { addProducts, addDetailProducts, decreaseQuantity} from '../redux/handleSlice'

const ViewProduct = ({viewProduct, setViewProduct}) => {

    const products = useSelector((state) => state.product.addProductList)
    console.log(products)

    const handleHideViewProduct = () => {
        setViewProduct(!viewProduct)
    }

    const dispatch = useDispatch()
    const handleAddToCart = (product) => {
        dispatch(addDetailProducts(product))
    }

    const increaseProduct = (product) => {
        dispatch(addProducts(product))
      }
    
      const decreaseProduct = (product) => {
        dispatch(decreaseQuantity(product))
      } 

  return (
    <div className="overlay" onClick={handleHideViewProduct}>
            <div className="overlay-content" onClick={(e) => {e.stopPropagation()}}>
            {products.slice(products.length -1).map(product => {
                return (
                    <div className='view-product-wrap' key={product.id}>
                        <div className='view-product-img'>
                            <img src={product.img} alt="" />
                        </div>
                        <div className="view-product-detail">
                            <i 
                                class="fa-solid fa-xmark close" 
                                onClick={handleHideViewProduct}>
                            </i>
                            <p className='view-product-detail-name'>{product.name}</p>
                            <p className='view-product-detail-code'>{`Mã sản phẩm: ${product.code}`}</p>
                            <p className='view-product-detail-price'>
                                <span>{product.price} VNĐ</span>
                                <span>{product.oldPrice && `${product.oldPrice} VNĐ`}</span>
                            </p>
                            <p className='view-product-detail-num'>Số lượng:</p>
                            <div className='view-product-detail-quantity'>
                                <span><i class="fa-solid fa-minus" onClick={() => decreaseProduct(product)}></i></span>
                                <span>{product.quantity}</span>
                                <span ><i class="fa-solid fa-plus" onClick={() => increaseProduct(product)}></i></span>
                            </div>
                            <Link className='' to='/cart'><button className="view-product-detail-button" onClick={() => handleAddToCart(product)}>Đặt hàng</button></Link>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
  )
}

export default ViewProduct