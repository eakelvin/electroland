import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

const ProductCard = ({ product }) => {
  return (
         <SplideSlide>
            <div
              key={product.id}
              onClick={() => console.log(product.id)} 
              className='overflow-hidden rounded-lg relative shadow-2xl'>
                    <img 
                        src={product.image} 
                        alt={product.title} 
                        className='hover:scale-125 transition ease-in-out delay-150 duration-75 w-50 h-50'
                    />

                <div className='backdrop-blur-md bg-white/10 p-2 absolute bottom-0 w-full'>
                    <p className='font-semibold truncate'>{product.title}</p>
                    {/* <small>sdf</small> */}
                </div>
            </div>
            </SplideSlide>
  )
}

export default ProductCard
