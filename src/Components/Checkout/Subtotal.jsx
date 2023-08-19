import React from 'react'

import "./Subtotal.css";
function Subtotal() {
  return (
    <div className='substotal'>
      <div className="checkMessage">
       ✔ Your Order is eligible for Free Delivery. Select this option at checkout. Details
      </div>
      <div className="totalPrice">
        Subtotal (2 Items): $991.03
        
      </div>
      <div className="checkbox">
      <input type="checkbox" name="" id="" /> This order contains a gift
      </div>
    
        <button>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal
