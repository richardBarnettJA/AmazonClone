import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
            <img className='home_image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt='' />

            <div className='home_row'>
                <Product id="4903850" title='Beats Headphones' price={199.99} image="https://m.media-amazon.com/images/I/51-+O3-wFxL._AC_UY218_.jpg" rating={5} />
                <Product />
            </div>
            <div className='home_row'>
                <Product />
                <Product />
                <Product />
            </div>
            <div className='home_row'>
                <Product />
            </div>
        </div>
    </div>
  )
}

export default Home