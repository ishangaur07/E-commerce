import React from 'react'
import "./Home.css";
import Product from '../Product/Product';
import BgImage from "./bg-img.jpg"
function Home() {
  return (
    <div className='home'>
        <div className="home_container">
          <div className="home_image">
            <img src={BgImage} alt="Trend"/>
          </div>
          <div className='home_row'>
           <Product></Product>
           <Product></Product>
          </div>
          <div className='home_row'>
          <Product></Product>
           <Product></Product>
           <Product></Product>
          </div>
          <div className='home_row'>
          <Product></Product>
          </div>
        </div>
    </div>
  )
}

export default Home
