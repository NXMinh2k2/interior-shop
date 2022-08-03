import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CartProduct from './CartProduct'
import '../scss/index.scss'


const KitchenProduct = () => {

    const [kitchenProduct, setKitchenProduct] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("http://localhost:3001/products")
            const data = res.data

            const newProducts = data.filter(x => x.place == "phongbep")
            setKitchenProduct(newProducts)
        }
        fetchData()
    }, [])

  return (
    <div className='products-wrap-kitchen'>
        <div className='products-wrap-text'>
            <div className='products-text'>Phòng bếp</div>
            <ul className='products-text-list'>
                <li>Bàn ăn</li>
                <li>Ghế bàn ăn</li>
                <li>Tủ bếp</li>
            </ul>
        </div>
        <div className='underline'></div>
        <div className='cart-product-wrap'>
            {
                kitchenProduct.slice(0,8).map((product, index) => {
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

export default KitchenProduct