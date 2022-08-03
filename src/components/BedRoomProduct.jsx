import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CartProduct from './CartProduct'

const BedRoomProduct = () => {

    const [bedRoomProduct, setBedRoomProduct] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("http://localhost:3001/products")
            const data = res.data

            const newProducts = data.filter(x => x.place == "phongngu")
            setBedRoomProduct(newProducts)
        }
        fetchData()
    }, [])

  return (
    <div className='products-wrap-bedroom'>
        <div className='products-wrap-text'>
            <div className='products-text'>Phòng ngủ</div>
            <ul className='products-text-list'>
                <li>Giường</li>
                <li>Tủ quần áo</li>
                <li>Bàn phấn</li>
            </ul>
        </div>
        <div className='underline'></div>
        <div className='cart-product-wrap'>
            {
                bedRoomProduct.slice(10).map((product, index) => {
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

export default BedRoomProduct