import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import ProductCard from './ProductCard'

const Card = ({ products }) => {
  return (
    <>
        <div className='w-full'>
                <div className='my-5 w-full'>
                {/* className="flex md:gap-6 gap-2 overflow-hidden flex-wrap" */}

                    <Splide className='overflow-hidden' options={{
                        gap:'1rem',
                        drag:'free',
                        perPage: 4,
                        type : 'loop',
                        pagination:false,
                        lazyLoad: 'nearby',
                        autoplay: true,
                        breakpoints: {
                            640:{
                                perPage: 2
                            }
                        }
                    }}>
                        {products && 
                            products.map((product,index)=> {
                                return(
                                <ProductCard product={product} key={product.id} />
                            )})
                        } 
                    </Splide>
                </div>
            </div>
      
    </>
  )
}

export default Card

