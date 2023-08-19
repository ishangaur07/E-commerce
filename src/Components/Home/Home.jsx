import React from 'react'
import "./Home.css";
import Product from '../Product/Product';
import BgImage from "./bg-img.jpg"
import alexa from "./alexa.png";
function Home() {
  return (
    <div className='home'>
      <div className="home_container">
        <div className="home_image">
          <img src={BgImage} alt="Trend" />
        </div>
        <div className='home_row'>
          <Product
            id="12353"
            title="The Lean Startup"
            price={29.99}
            image='https://www.freepnglogos.com/uploads/headphones-png/headphones-beats-pro-beats-dre-22.png'
            rating={5}></Product>


          <Product
            id="7803"
            title="Alexa"
            price={59.99}
            image={alexa}
            rating={4}></Product>
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
