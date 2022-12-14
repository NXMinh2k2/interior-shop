import React, {useState, useEffect} from 'react'
import CartProduct from '../../components/CartProduct'
import axios from 'axios'
import {Link} from 'react-router-dom'
import '../../scss/index.scss'
import Pagination from '../../components/Pagination'

const LivingRoomPage = () => {

    const [livingRoomProducts, setLivingRoomProducts] = useState([])
    const [searchProducts, setSearchProducts] = useState("")
    const [value, setValue] = useState('1')
    const [currentPage, setCurrentPage] = useState(1)
    const [productsPerPage, setProductsPerPage] = useState(8)

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("http://localhost:3001/products")
            const data = res.data

            const newProducts = data.filter(x => x.place == "phongkhach")
            setLivingRoomProducts(newProducts)
        }
        fetchData()
    }, [])

    const asccendingSortedAlphabet = [...livingRoomProducts].sort((a,b) => a.name > b.name ? 1 : -1)  
    const descendingSortedAlphabet = [...livingRoomProducts].sort((a,b) => a.name > b.name ? -1 : 1)
    const asccendingSortedPrice = [...livingRoomProducts].sort((a,b) => parseFloat(a.price) - parseFloat(b.price))
    const descendingSortedPrice = [...livingRoomProducts].sort((a,b) => parseFloat(b.price) - parseFloat(a.price))   

    useEffect(() => {
        switch (value) {
            case '1':
                setLivingRoomProducts(livingRoomProducts)
                break;

            case '2':
                setLivingRoomProducts(asccendingSortedAlphabet)
                break;

            case '3':
                setLivingRoomProducts(descendingSortedAlphabet)
                break;

            case '4':
                setLivingRoomProducts(asccendingSortedPrice)
                break;

            case '5':
                setLivingRoomProducts(descendingSortedPrice)
            break;
        
            default:
                break;
        }
    }, [value])

    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    const currentProducts = livingRoomProducts.slice(indexOfFirstProduct, indexOfLastProduct)

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

  return (
    <div className="content">
        <div className="products-wrap"> 
            <div className='products-wrap-top'>
                <div className='products-wrap-title'>
                    <Link className='link' to='/'><span>Trang ch???</span></Link>
                    <span>Ph??ng Kh??ch</span>
                </div>
                <div className='products-wrap-filter'>
                    <div className='search'>
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input 
                            type="text" 
                            placeholder='T??m ki???m s???n ph???m'
                            onChange={(e) => setSearchProducts(e.target.value)}
                        />
                    </div>
                    <div className='sort'>
                        <div className='sort-wrap'>
                            <span>Sort by:</span>
                            <select onChange={(e) => setValue(e.target.value)}>
                                <option value="1">To??n b??? s???n ph???m</option>
                                <option value="2">A-Z</option>
                                <option value="3">Z-A</option>
                                <option value="4">Gi?? th???p - Gi?? cao</option>
                                <option value="5">Gi?? cao - Gi?? th???p</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className='livingroom-page'>
                <div className='products-wrap-text'>
                    <div className='products-text'>Ph??ng kh??ch</div>
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
                    totalProducts={livingRoomProducts.length}
                    paginate={paginate}
                />
            </div>
        </div>
    </div>
  )
}

export default LivingRoomPage