import React, { useState } from 'react'

const Pagination = (props) => {

    const {productsPerPage, totalProducts, paginate} = props
    const [active, setActive] = useState(1)

    const pageNumbers = []

    for (let i=1; i <= Math.ceil(totalProducts/productsPerPage); i++) {
        pageNumbers.push(i)
    }

    const handleClick = (pageNumber) => {
        paginate(pageNumber)
        setActive(pageNumber)
    }


  return (
    <ul className='page-list'>
        {
            pageNumbers.map(pageNumber => {
                return (
                    <li 
                        className={pageNumber === active ? `active-item page-item` : `page-item`}
                        key={pageNumber}
                        onClick={() => handleClick(pageNumber)}
                    >
                        {pageNumber}
                    </li>
                )
            })
        }
    </ul>
  )
}

export default Pagination