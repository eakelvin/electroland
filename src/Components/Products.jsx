import React from 'react'
import ProductCard from './ProductCard'

const Products = ({products}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-10'>
        {products.map((item) => {
            return <ProductCard item={item} key={item.id} />
        })}
    </div>
  )
}

export default Products
