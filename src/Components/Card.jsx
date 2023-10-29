import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

const Card = () => {
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
                    </Splide>
                    
                </div>
            </div>
      
    </>
  )
}

export default Card

