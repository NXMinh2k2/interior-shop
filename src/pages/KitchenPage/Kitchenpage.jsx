import React, {useState, useEffect} from 'react'
import CartProduct from '../../components/CartProduct'
import axios from 'axios'
import {Link} from 'react-router-dom'
import '../../scss/index.scss'
import Pagination from '../../components/Pagination'

const KitchenPage = () => {

    const [kitchenProducts, setKitchenProducts] = useState([])
    const [searchProducts, setSearchProducts] = useState("")
    const [value, setValue] = useState('1')
    const [currentPage, setCurrentPage] = useState(1)
    const [productsPerPage, setProductsPerPage] = useState(8)

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("http://localhost:3001/products")
            const data = res.data

            const newProducts = data.filter(x => x.place == "phongbep")
            setKitchenProducts(newProducts)
        }
        fetchData()
    }, [])

    const asccendingSortedAlphabet = [...kitchenProducts].sort((a,b) => a.name > b.name ? 1 : -1)  
    const descendingSortedAlphabet = [...kitchenProducts].sort((a,b) => a.name > b.name ? -1 : 1)
    const asccendingSortedPrice = [...kitchenProducts].sort((a,b) => parseFloat(a.price) - parseFloat(b.price))
    const descendingSortedPrice = [...kitchenProducts].sort((a,b) => parseFloat(b.price) - parseFloat(a.price))

    useEffect(() => {
        switch (value) {
            case '1':
                setKitchenProducts(kitchenProducts)
                break;

            case '2':
                setKitchenProducts(asccendingSortedAlphabet)
                break;

            case '3':
                setKitchenProducts(descendingSortedAlphabet)
                break;

            case '4':
                setKitchenProducts(asccendingSortedPrice)
                break;

            case '5':
                setKitchenProducts(descendingSortedPrice)
            break;
        
            default:
                break;
        }
    }, [value])

    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    const currentProducts = kitchenProducts.slice(indexOfFirstProduct, indexOfLastProduct)

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

  return (
    <div className="content">
        <div className="products-wrap"> 
            <div className='products-wrap-top'>
                <div className='products-wrap-title'>
                    <Link className='link' to='/'><span>Trang chủ</span></Link>
                    <span>Phòng Bếp</span>
                </div>
                <div className='products-wrap-filter'>
                    <div className='search'>
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input 
                            type="text"
                            placeholder='Tìm kiếm sản phẩm'
                            onChange={(e) => setSearchProducts(e.target.value)}
                        />
                    </div>
                    <div className='sort'>
                        <div className='sort-wrap'>
                            <span>Sort by:</span>   
                            <select onChange={(e) => setValue(e.target.value)}>
                                <option value="1">Toàn bộ sản phẩm</option>
                                <option value="2">A-Z</option>
                                <option value="3">Z-A</option>
                                <option value="4">Giá thấp - Giá cao</option>
                                <option value="5">Giá cao - Giá thấp</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className='kitchen-page'>
                <div className='products-wrap-text'>
                    <div className='products-text'>Phòng Bếp</div>
                </div>
                <div className='underline'></div>
                <div className='cart-product-wrap'>
                    {
                        currentProducts.filter(product => {
                            if(searchProducts == "") {
                                return product
                            } else if (product.name.toLowerCase().includes(searchProducts.toLocaleLowerCase())) {
                                return product
                            }
                        })
                        .map((product, index) => {
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
                <Pagination 
                    productsPerPage={productsPerPage} 
                    totalProducts={kitchenProducts.length}
                    paginate={paginate}
                />
            </div>
        </div>
    </div>
  )
}

export default KitchenPage