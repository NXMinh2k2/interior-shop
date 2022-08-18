import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import '../scss/index.scss'
import {viewProducts, addProducts} from '../redux/handleSlice'
import ViewProduct from './ViewProduct'
import { Link } from 'react-router-dom'

const CartProduct = (props) => {
  const  {id, name, img, code, status, price, oldPrice, discount} = props
  const [viewProduct, setViewProduct] = useState(false)

  const dispatch = useDispatch()
  
  const handleViewProduct = (product) => {
    dispatch(addProducts(product))
  }

  const handleViewDetailProduct = (product) => {
    dispatch(addProducts(product))
    setViewProduct(!viewProduct)
  }

  useEffect(() => {
    if(viewProduct === true) {
      document.body.style.overflow = 'hidden'
    } else  {
      document.body.style.overflow = 'unset';
    }
 }, [viewProduct])

  return (
      <>
        {
          viewProduct && <ViewProduct viewProduct={viewProduct} setViewProduct={setViewProduct}/>
        }
        <div className="cart-product-item">
          <Link className="link" to={`/detailproductpage/${id}`}>
            <img src={img} alt="" className="product-image" onClick={() => handleViewProduct({...props})}/>
            <p className='product-title' onClick={() => handleViewProduct({...props})}>{name}</p>
          </Link>
          <div className='product-price'>
            <span className='product-price-new'>{price} VNĐ</span>
            <span className='product-price-old'>{oldPrice &&  `${oldPrice} VNĐ`}</span>
          </div>   

          <div className='view-product'>
            <button className='view-btn' onClick={() => handleViewDetailProduct({...props})}>Xem nhanh</button>
          </div> 
          {
            discount && 
            <div className='discount'>
              <span>-{discount}</span>
            </div>
          }
        </div>
      </>
  )
}

export default CartProduct