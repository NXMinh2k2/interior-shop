import React, {useState, useEffect} from 'react'
import CartProduct from '../../components/CartProduct'
import axios from 'axios'
import {Link} from 'react-router-dom'
import '../../scss/index.scss'

const CabinetPage = () => {

    const [cabinetProducts, setCabinetProducts] = useState([])
    const [searchProducts, setSearchProducts] = useState("")
    const [value, setValue] = useState('1')

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("http://localhost:3001/products")
            const data = res.data

            const newProducts = data.filter(x => x.code.includes("TA"))
            setCabinetProducts(newProducts)
        }
        fetchData()

    }, [])
    
    const asccendingSortedAlphabet = [...cabinetProducts].sort((a,b) => a.name > b.name ? 1 : -1)  
    const descendingSortedAlphabet = [...cabinetProducts].sort((a,b) => a.name > b.name ? -1 : 1)
    const asccendingSortedPrice = [...cabinetProducts].sort((a,b) => parseFloat(a.price) - parseFloat(b.price))
    const descendingSortedPrice = [...cabinetProducts].sort((a,b) => parseFloat(b.price) - parseFloat(a.price))    

    useEffect(() => {
        switch (value) {
            case '1':
                setCabinetProducts(cabinetProducts)
                break;

            case '2':
                setCabinetProducts(asccendingSortedAlphabet)
                break;

            case '3':
                setCabinetProducts(descendingSortedAlphabet)
                break;

            case '4':
                setCabinetProducts(asccendingSortedPrice)
                break;

            case '5':
                setCabinetProducts(descendingSortedPrice)
            break;
        
            default:
                break;
        }
    }, [value])

  return (
    <div className="content">
        <div className="products-wrap"> 
            <div className='products-wrap-top'>
                <div className='products-wrap-title'>
                    <Link className='link' to='/'><span>Trang ch???</span></Link>
                    <span>Ph??ng Ng???</span>
                    <span>T??? qu???n ??o</span>
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

            <div className='bedroom-page'>
                <div className='products-wrap-text'>
                    <div className='products-text'>T??? qu???n ??o</div>
                </div>
                <div className='underline'></div>
                <div className='cart-product-wrap'>
                    {
                        cabinetProducts.filter(product => {
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
            </div>
        </div>
    </div>
  )
}

export default CabinetPage