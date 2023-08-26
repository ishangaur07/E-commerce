import React from 'react'
import "./Payment.css";
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider/StateProvider';
import CheckoutProduct from '../Checkout/CheckoutProduct';
function Payment() {
    const [{basket,user}, dispatch] = useStateValue();
  return (
    <div className='payment'>
      <div className='payment_container'>
        {/* Payment section - delivery address */}
        <h1>
            Checkout {<Link to="/checkout">{basket?.length} Items</Link>} 
        </h1>
        <div className="payment_section">
            <div className="payment_title">
                <h3>Delivery Address</h3>
                <div className="payment_address">
                    <p>{user?.email}</p>
                    <p>1-C Royal, Shipra Suncity</p>
                    <p>Ghaziabad</p>
                </div>
            </div>
        </div>
        {/* Payment section -Review Items */}
        <div className="payment_section">
        <div className="payment_title">
            <h3>Review Items and Delivery</h3>
        </div>
        <div className='payment_items'>
            {basket.map(item=>(  
                <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                ></CheckoutProduct>
            ))}
        </div>
        </div>
        {/* Payment section - Payment method */}
        <div className="payment_section">
        <div className="payment_title">
            <h3>Payment Method</h3>
        </div>
        <div className="payment_details">
            {/* Stipe Magic will */}
        </div>
        </div>
      </div>
    </div>
  )
}

export default Payment;
