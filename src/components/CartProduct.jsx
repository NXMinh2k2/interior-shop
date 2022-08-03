import React from 'react'
import { useDispatch } from 'react-redux'
import '../scss/index.scss'
import {addProducts} from '../redux/handleSlice'

const CartProduct = (props) => {
  const  {id, name, img, code, status, price, oldPrice} = props

  const dispatch = useDispatch()

  const handleViewProduct = (product) => {
      dispatch(addProducts(product))
  }


  return (
      <div className="cart-product-item">
        <img src={img} alt="" className="product-image" />
        <p className='product-title'>{name}</p>
        <div className='product-price'>
          <span className='product-price-new'>{price} VNĐ</span>
          <span className='product-price-old'>{oldPrice &&  `${oldPrice} VNĐ`}</span>
        </div>   

        <div className='view-product'>
          <button onClick={() => handleViewProduct({...props})}>Xem nhanh</button>
        </div> 
      </div>
  )
}

export default CartProduct