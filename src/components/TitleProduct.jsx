import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CartProduct from './CartProduct'
import '../scss/index.scss'

const TitleProduct = () => {

    const [data, setData] = useState([])
    const [products, setProducts] = useState(data)

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("http://localhost:3001/products")
            const data = res.data
            setData(data)
            setProducts(data)
        }
        fetchData()
    }, [])

    const filterProducts = (status) => {
        const newProducts = data.filter(x => x.status === status)
        setProducts(newProducts)
    }

  return (
    <div className="products-wrap-title">
                <ul className='products-wrap-text-list'>
                        <li onClick={() => filterProducts("discount")}>Sản phẩm khuyến mại</li>
                        <li onClick={() => filterProducts("new")}>Sản phẩm mới</li>
                        <li onClick={() => filterProducts("hot")}>Sản phẩm bán chạy</li>
                </ul>
                <div className='cart-product-wrap'>
                    {
                        products.slice(0,4).map((product, index) => {
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

export default TitleProduct