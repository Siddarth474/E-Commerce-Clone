import React from 'react'
import Categories from './Categories'
import BannerSlider from './BannerSlider'
import ProductList from './ProductList'
import Footer from './Footer'

const DisplayHome = () => {
  return (
    <div>
        <div className='sm:mx-3'>
          <Categories />
          <BannerSlider />
          <ProductList />
        </div>
        <Footer />
    </div>
  )
}

export default DisplayHome