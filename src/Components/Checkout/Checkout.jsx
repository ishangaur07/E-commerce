import React from 'react'
import "./Checkout.css";
import bgImage from "./background-checkout.jpg";
function Checkout() {
  return (
    <div className='checkout'>
      <div className='checkout_left'>
        <img 
        className='checkout_ad' 
        src={bgImage} 
        alt="" />
        <div>
        <h2 className='checkout_title'>
            Your Shopping basket
        </h2>
      </div>
      </div>
      
    </div>
  )
}

export default Checkout
