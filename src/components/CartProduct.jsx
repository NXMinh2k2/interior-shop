import React from 'react'
import '../scss/index.scss'

const CartProduct = (props) => {
  const  {id, name, img, code, status, price, oldPrice} = props


  return (
      <div className="cart-product-item">
        <img src={img} alt="" className="product-image" />
        <p className='product-title'>{name}</p>
        <div className='product-price'>
          <span className='product-price-new'>{price} VNĐ</span>
          <span className='product-price-old'>{oldPrice &&  `${oldPrice} VNĐ`}</span>
        </div>    
      </div>
  )
}

export default CartProduct