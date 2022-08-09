import React, {useState, useEffect} from 'react'
import axios from 'axios'
import '../scss/index.scss'

const ViewCart = () => {
    const [cartProducts, setCartProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("http://localhost:3001/products")
            const data = res.data

            setCartProducts(data)
           
        }
        fetchData()
    }, [])
  return (
    <div className='view-cart'>
        <div className='cart-product'>
            {
                cartProducts.slice(0,2).map((cartProduct, item) => {
                    return (
                        <div key={item} className="cart-product-detail">
                            <img src={cartProduct.img} alt="" />
                            <span>{cartProduct.name}</span>
                        </div>
                    )
                })
            }
        </div>
        <div className='cart-button'>
            <button>Xem giỏ hàng</button>
            <button>Thanh toán</button>
        </div>
    </div>
  )
}

export default ViewCart