import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

const ProductCard = () => {
  return (
    <div>
         <SplideSlide>
            <div className='overflow-hidden rounded-lg relative shadow-2xl'>
                    <img 
                        src='./images/bed.jpg' 
                        alt="" 
                        className='hover:scale-125 transition ease-in-out delay-150 duration-75 w-full h-full'
                    />

                <div className='backdrop-blur-md bg-white/10 p-2 absolute bottom-0 w-full'>
                    <p className='font-semibold truncate'>sdfg</p>
                    <small>sdf</small>
                </div>
            </div>
            </SplideSlide>
    </div>
  )
}

export default ProductCard
