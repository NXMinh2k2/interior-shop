import React from 'react'
import {useSelector} from 'react-redux'

const ViewProduct = () => {

    const products = useSelector((state) => state.products.productList)
    const product = products[0]
    console.log(product)

  return (
    <div className="overlay">
        <div className='view-product-wrap'>
            <div className='view-proudct-img'>
                <img src={product.img} alt="" />
            </div>
            <div className="view-product-detail">
                <p className='view-product-detail-name'>{product.name}</p>
                <p className='view-product-detail-code'>{`Mã sản phẩm: ${product.code}`}</p>
                <p className='view-product-detail-price'>
                    <span>{product.price} VNĐ</span>
                    <span>{product.oldPrice && `${product.oldPrice} VNĐ`}</span>
                </p>
                <p>Số lượng:</p>
                <div className='view-product-detail-quantity'>
                    <button>-</button>
                    <button>1</button>
                    <button>+</button>
                </div>
                <button className="view-product-detail-button">Đặt hàng</button>
            </div>
        </div>
    </div>
  )
}

export default ViewProduct