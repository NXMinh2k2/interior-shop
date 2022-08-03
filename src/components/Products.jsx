import React from 'react'
import BedRoomProduct from './BedRoomProduct'
import KitchenProduct from './KichenProduct'
import LivingRoomProduct from './LivingRoomProduct'
import RelationProduct from './RelationProduct'
import TitleProduct from './TitleProduct'

const Products = () => {
  return (
    <div className="content">
        <div className='products-wrap'>
            <TitleProduct />
            <LivingRoomProduct />
            <BedRoomProduct />
            <KitchenProduct />
            <RelationProduct />
        </div>
    </div>
  )
}

export default Products