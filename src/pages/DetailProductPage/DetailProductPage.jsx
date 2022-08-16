import React, {useState, useEffect} from 'react'
import axios from 'axios'
import '../../scss/index.scss'
import { Link, useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import CartProduct from '../../components/CartProduct'
import { addProducts, decreaseQuantity, addDetailProducts } from '../../redux/handleSlice'

const DetailProductPage = () => {
    const {id} = useParams()
    const detailProductList = useSelector((state) => state.product.addProductList)
    const detailProducts = detailProductList.filter(x => x.id == id)
    const detailProduct = detailProducts[0]
    console.log(detailProduct)

    const dispatch = useDispatch()
    const handleAddToCart = (detailProduct) => {
        dispatch(addDetailProducts(detailProduct))
    }

    const increaseProduct = (product) => {
      dispatch(addProducts(product))
    }
  
    const decreaseProduct = (product) => {
      dispatch(decreaseQuantity(product))
    } 

    const [detailProductPage, setDetailProductPage] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("http://localhost:3001/products")
            const data = res.data

            setDetailProductPage(data)
        }
        fetchData()
    }, [])

    const relationProducts = (detailProductPage.filter(x => x.code.includes(detailProduct.code.slice(0,2)))).filter(y => y.code !== detailProduct.code)
    const productDetail = detailProductPage.filter(x => x.code === detailProduct.code)

  return (
    <div className="content">
        <div className="products-wrap"> 
            <div className='products-wrap-top'>
                <div className='products-wrap-title'>
                    <Link className='link' to='/'><span>Trang chủ</span></Link>
                    {
                        productDetail.map(product => <span key={product.id}>{product.name}</span>)
                    }
                </div>
                
                <div className='product-detail'>
                    <div className="product-detail-left">
                        <div className='product-detail-img'>
                            <img src={detailProduct.img} alt="" />
                        </div>
                    </div>
                    <div className="product-detail-right">
                        <p className='product-detail-name'>{detailProduct.name}</p>
                        <p className='product-detail-code'>MÃ SP: {detailProduct.code}</p>
                        <p className='product-detail-price'>{detailProduct.price}<span>VNĐ</span></p>
                        <span className='product-detail-old-price'>{detailProduct.oldPrice && `Giá gốc ${detailProduct.oldPrice}VNĐ`}</span>
                        <p className='product-detail-num'>Số lượng:</p>
                        <div className='product-detail-quantity'>
                            <span><i class="fa-solid fa-minus" onClick={() => decreaseProduct(detailProduct)}></i></span>
                            <span>{detailProduct.quantity}</span>
                            <span ><i class="fa-solid fa-plus" onClick={() => increaseProduct(detailProduct)}></i></span>
                        </div>
                       <Link className='link' to='/cart'>
                        <div className="product-detail-button-cart" onClick={() => handleAddToCart(detailProduct)}>
                                <i class="fa-solid fa-cart-shopping"></i>
                                <span>Đặt hàng</span>
                            </div>
                       </Link>
                        <div className="product-detail-button-phone">
                            <i class="fa-solid fa-phone"></i>
                            <span>19002812</span>
                        </div>
                        <div className='social'>
                            <div className='social-facebook'>
                            <i class="fa-brands fa-facebook-f"></i>
                            </div>
                            <div className='social-twitter'>
                            <i class="fa-brands fa-twitter"></i>
                            </div>
                            <div className='social-pinterest '>
                            <i class="fa-brands fa-pinterest-p"></i>
                            </div>
                            <div className='social-tumblr'>
                            <i class="fa-brands fa-tumblr"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='product-detail-advertisement'>
                    <div className='product-detail-bottom-title'>Lí do bạn nên chọn</div>
                    <div className='product-detail-bottom-img'><img src="https://img.cdn.vncdn.io/nvn/ncdn/store1/40111/store_1551669392_300.png" alt="" /></div>
                    <ul>
                        <li>
                            <i class="fa-solid fa-award"></i>
                            <span>Thương hiệu - dịch vụ Việt Nam phát triển bền vững do Chủ tịch nước trao tặng</span>
                        </li>
                        <li>
                            <i class="fa-solid fa-thumbs-up"></i>
                            <span>Là doanh nghiệp tiêu biểu trong lĩnh vực Kiến trúc- Nội thất</span>
                        </li>
                        <li>
                            <i class="fa-solid fa-people-arrows"></i>
                            <span>Đội ngũ kiến trúc sư giàu kinh nghiệm, xu hướng thiết kế hiện đại</span>
                        </li>
                        <li>
                            <i class="fa-solid fa-wrench"></i>
                            <span>Chế độ bảo hành tại nhà, bảo trì vĩnh viễn tất cả sản phẩm</span>
                        </li>
                        <li>
                            <i class="fa-solid fa-truck-fast"></i>
                            <span>Vận chuyển miễn phí cho khu vụ nội thành hoặc 50km đầu</span>
                        </li>
                        <li>
                            <i class="fa-solid fa-hand-holding-dollar"></i>
                            <span>Kiểm tra hàng, thanh toán tại nhà khi nhận hàng</span>
                        </li>
                    </ul>
                </div>
                <div className='product-detail-relation'>
                    <div className='product-detail-relation-title'>SẢN PHẨM LIÊN QUAN</div>
                    <div className="cart-product-wrap">
                        {
                            relationProducts.map((product, index) => {
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
            </div>
        </div>
    </div>    
  )
}

export default DetailProductPage