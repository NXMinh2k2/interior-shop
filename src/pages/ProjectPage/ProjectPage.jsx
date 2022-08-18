import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../../scss/index.scss'

const ProjectPage = () => {
  const [projectProducts, setProjectProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
        const res = await axios.get("http://localhost:3001/products")
        const data = res.data

        const newProducts = data.filter(x => x.type == "duantieubieu")
        setProjectProducts(newProducts)
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

          <div className="project-page">
            <div className="project-page-left">
                {
                  projectProducts.map((projectProduct, item) => {
                    return (
                      <div className='project-page-wrap' key={item}>
                        <p className='project-page-order'>{projectProduct.order}:</p>
                        <img className='project-page-img' src={projectProduct.img} alt="" />
                        <p className='project-page-title'>{projectProduct.title}</p>
                        <p className='project-page-name'>Tên dự án: {projectProduct.name}</p>
                        <p className='project-page-code'>Mã: {projectProduct.code}</p>
                        <p className='project-page-investor'>Chủ đầu tư: {projectProduct.investor}</p>
                        <p className='project-page-time'>Thời gian thi công: {projectProduct.time}</p>
                        <p className='project-page-place'>Vị trí: {projectProduct.place}</p>
                      </div>
                    )
                  })
                }
            </div>
            <div className="project-page-right">
                <div className="project-page-relation">
                  <p>Bài viết mới</p>
                  <ul>
                    <Link className='link' to='/productpage3'><li>Bí quyết trang trí bàn trà để tăng vẻ đẹp, sang trọng cho phòng khách</li></Link>
                    <Link className='link' to='/productpage4'><li>Những mẫu thiết kế nội thất phòng khách hiện đại nhất năm 2018</li></Link>
                    <Link className='link' to='/productpage'><li>Thiết kế và thi công nội thất chung cư hiện đại (Anh Hà - Tân Mai)</li></Link>
                    <Link className='link' to='/productpage2'><li>Thiết kế nội thất chung cư hiện đại The SunShine Place</li></Link>
                  </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectPage