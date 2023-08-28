import React from 'react'
import './Order.css'
import moment from "moment";
import CheckoutProduct from "../Checkout/CheckoutProduct";
import { getBasketTotal } from '../StateProvider/Reducer';
import { useStateValue } from '../StateProvider/StateProvider';

function Order({ order }) {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className='order'>
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map(item => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      <div className='substotal'>
        <div className="totalPrice">
          <p> Subtotal ({basket.length} Items): <strong>{getBasketTotal(basket)}</strong></p>
        </div>
      </div>
    </div>
  )
}

export default Order




