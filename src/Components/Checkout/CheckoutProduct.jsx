import React from 'react'
import './CheckoutProduct.css';
import {useStateValue} from "../StateProvider/StateProvider";
import Header from '../Header/Header';
function CheckoutProduct({ id, image, title, price, rating }) {
    const [{basket},dispatch] = useStateValue();
    
    const removeFromBasket = ()=>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,
        })
    }
    
    return (
        <>
         <Header></Header>
         <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} alt="" />
            <div className="checkoutProduct_info">
                <p className='checkoutProduct_title'>{title}</p>
                <p className='checkoutProduct_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))}
                </div>
                <button  onClick={removeFromBasket}>Remove the basket</button>
            </div>
        </div>
        </>
       
    )
}

export default CheckoutProduct;
