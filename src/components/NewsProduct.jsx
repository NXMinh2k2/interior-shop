import React, {useEffect, useState} from 'react'
import axios from 'axios'

const NewsProduct = () => {

  const [newsProducts, setNewsProducts] = useState([])

  useEffect(() => {
      const fetchData = async () => {
          const res = await axios.get("http://localhost:3001/products")
          const data = res.data

          const newProducts = data.filter(x => x.type == "tintuc")
          setNewsProducts(newProducts)
      }
      fetchData()
  }, []) 

  return (
    <>
      {
        newsProducts.slice(0,1).map((newsProduct, index) => {
          return (
            <div className='newsproduct' key={index}>
                <p className='newsproduct-title'>Tin tức</p>
                <div className="newsproduct-wrap">
                    <img src={newsProduct.img}/>
                    <span>{newsProduct.title}</span>
                </div>
                <div className='newsproduct-des'>
                  NHỮNG MẪU THIẾT KẾ NỘI THẤT PHÒNG KHÁCH HIỆN ĐẠI NHẤT NĂM 2018
                </div>
            </div>
        )
        })
      }
    </>
  )
}

export default NewsProduct