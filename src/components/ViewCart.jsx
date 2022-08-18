import React, {useState, useEffect} from 'react'
import axios from 'axios'
import '../scss/index.scss'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const ViewCart = () => {
   const cartProducts = useSelector(state => state.product.checkoutProductList)

  return (
    <div className='view-cart'>
        <div className='cart-product'>
            {
                cartProducts ? cartProducts.map((cartProduct, item) => {
                    return (
                        <div key={item} className="cart-product-detail">
                            <img src={cartProduct.img} alt="" />
                            <span>{cartProduct.name}</span>
                        </div>
                    )
                }) : (<h2 style={{color: 'black'}}>No Product is Added</h2>)
            }
        </div>
        <div className='cart-button'>
            <Link className='link' to='/cart'><button>Xem giỏ hàng</button></Link>
            <Link className='link' to='/checkout'><button>Thanh toán</button></Link>
        </div>
    </div>
)}

export default ViewCart