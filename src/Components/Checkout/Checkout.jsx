import React from 'react'
import "./Checkout.css";
import Subtotal from './Subtotal';
import { getBasketTotal } from '../StateProvider/Reducer';

import { useStateValue } from '../StateProvider/StateProvider';
import CheckoutProduct from './CheckoutProduct';
function Checkout() {
  const [{basket, user},dispatch] = useStateValue();
  return (
    <div className='checkout'>
      <div className='checkout_left'>
        <div className='shoppingBasket'> 
        <h2 className='checkout_title'>
            {user?.email}<br></br>
            Your Shopping basket
            {basket.map(item=>(
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              ></CheckoutProduct>
            ))}
        </h2>
      </div>
      <div className='checkout_right'>

        <Subtotal></Subtotal>
      </div>
      </div>
      
    </div>
  )
}

export default Checkout;
