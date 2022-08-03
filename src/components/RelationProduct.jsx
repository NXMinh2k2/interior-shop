import React from 'react'
import NewsProduct from './NewsProduct'
import ProjectProduct from './ProjectProdct'
import '../scss/index.scss'

const RelationProduct = () => {
  return (
    <div className='relation-products-wrap'>
        <ProjectProduct />
        <NewsProduct />
    </div>
  )
}

export default RelationProduct