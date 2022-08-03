import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CartProduct from './CartProduct'
import '../scss/index.scss'


const LivingRoomProduct = () => {

    const [livingRoomProduct, setLivingRoomProduct] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("http://localhost:3001/products")
            const data = res.data

            const newProducts = data.filter(x => x.place == "phongkhach")
            setLivingRoomProduct(newProducts)
        }
        fetchData()
    }, [])

  return (
    <div className='products-wrap-livingroom'>
        <div className='products-wrap-text'>
            <div className='products-text'>Phòng khách</div>
            <ul className='products-text-list'>
                <li>Sofa gỗ phòng khách</li>
                <li>Kệ tivi</li>
                <li>Bàn nước</li>
            </ul>
        </div>
        <div className='underline'></div>
        <div className='cart-product-wrap'>
            {
                livingRoomProduct.slice(9,17).map((product, index) => {
                    return (
                        <div key={index}>
                            <CartProduct
                                id={product.id}
                                img={product.img}
                                price={product.price}
                                oldPrice={product.oldPrice}
                                name={product.name}
                                code={product.code}
                                status={product.status}
                            />
                        </div> 
                    )
                })
            }
        </div>
    </div>
  )
}

export default LivingRoomProduct