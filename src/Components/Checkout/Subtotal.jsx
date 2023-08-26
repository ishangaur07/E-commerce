import React from 'react'
import "./Subtotal.css";
import {useStateValue} from "../StateProvider/StateProvider";
import { getBasketTotal } from '../StateProvider/Reducer';
import { useNavigate } from 'react-router-dom';
function Subtotal() {
  const navigate = useNavigate()
  const [{basket},dispatch] = useStateValue();
  return (
    <div className='substotal'>
      <div className="checkMessage">
       ✅ Your Order is eligible for Free Delivery. Select this option at checkout. Details
      </div>
      <div className="totalPrice">
       <p> Subtotal ({basket.length} Items): <strong>{getBasketTotal(basket)}</strong></p>
        
      </div>
      <div className="checkbox">
      <input type="checkbox" name="" id="" /> This order contains a gift
      </div>
    
        <button onClick={e=>navigate("/payment")}>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal
