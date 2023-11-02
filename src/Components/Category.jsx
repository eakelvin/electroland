import React from 'react'
import { FiFilter } from "react-icons/fi";
import ImageSlider from './ImageSlider';
import Card from './Card';
import Products from './Products';

const Category = ({ products }) => {
  return (
    <>
      <div className='bg-gray-900 text-white'>
        <div className='items-center py-8 px-10 mx-auto max-w-screen-xl grid grid-cols-2 lg:py-16 lg:px-6'>

            <div className='flex font-light text-gray-500 sm:text-lg dark:text-gray-400'>
                <FiFilter />
                <h2 className='text-3xl'>CATEGORIES</h2>
            </div>

            <div className=''>
                <form action="">
                    <select name="" id="" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                        <option defaultValue="">Select Category</option>
                        <option value="">All</option>
                        <option value="">Smartphones</option>
                        <option value="">Skincare</option>
                        <option value="">Home Decor</option>
                    </select>
                </form>
            </div>

        </div>
      </div>

      <div className='p-5 bg-slate-500'>
        <Card products={products} />
      </div>
      
      <Products products={products} />
    </>
  )
}

export default Category
