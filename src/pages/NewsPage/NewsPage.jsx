import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../../scss/index.scss'

const NewsPage = () => {

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
    <div className="content">
      <div className="products-wrap"> 
        <div className='products-wrap-top'>
          <div className='products-wrap-title'>
              <Link className='link' to='/'><span>Trang chủ</span></Link>
              <span>Dự án tiêu biểu</span>
          </div>

          <div className="news-page">
            <div className="news-page-left">
              {
                newsProducts.map((newsProduct, item) => {
                  return (
                    <div className='news-page-wrap' key={item}>
                      <p className='news-page-order'>{newsProduct.order}:</p>
                      <img className='news-page-img' src={newsProduct.img} alt="" />
                      <p className='news-page-title'>{newsProduct.title}</p>
                      <p className='news-page-des'>Tên dự án: {newsProduct.des}</p>
                      
                    </div>
                  )
                })
              }
            </div>
            <div className="news-page-right">
              <div className="news-page-relation">
                <p>Bài viết mới</p>
                <ul>
                  <li>Bí quyết trang trí bàn trà để tăng vẻ đẹp, sang trọng cho phòng khách</li>
                  <li>Những mẫu thiết kế nội thất phòng khách hiện đại nhất năm 2018</li>
                  <li>Thiết kế và thi công nội thất chung cư hiện đại (Anh Hà - Tân Mai)</li>
                  <li>Thiết kế nội thất chung cư hiện đại The SunShine Place</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsPage