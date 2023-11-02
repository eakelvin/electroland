import React, { useEffect, useState } from 'react'
import './App.css'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import Slider from './Components/Carousel'
import Category from './Components/Category'


function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then((data) => setProducts(data))
      // .then(json=>console.log(json))
  }, [])

  return (
    <>
      <Nav />
      <Slider />
      <Category products={products} />
      <Footer />
    </>
  )
}

export default App
