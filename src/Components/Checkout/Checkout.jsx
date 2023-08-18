import React from 'react'
import "./Checkout.css";
import Subtotal from './Subtotal';
function Checkout() {
  return (
    <div className='checkout'>
      <div className='checkout_left'>
        <div>
        <h2 className='checkout_title'>
            Your Shopping basket
            {/* Basket Item */}
        </h2>
      </div>
      <div className='checkout_right'>
        <h2> The subtotal will go here</h2>
        <Subtotal></Subtotal>
      </div>
      </div>
      
    </div>
  )
}

export default Checkout
