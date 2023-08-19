import React,{useEffect} from 'react';
import "./Product.css";
import { useStateValue } from '../StateProvider/StateProvider';

function Product({id,title, image,price,rating}) {
  const [{basket},dispatch] = useStateValue();

  
  const addToBasket=()=>{
    dispatch({
      type:"Add_TO_BASKET",
      item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating
      },
    })
  }

  useEffect(() => {
    console.log("Updated basket length: ", basket.length);
  }, [basket]);
  return (
    <div className='product'>
      <div className="product_Info">
        <p>{title}</p>
        <p className="productPrice">
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
          .fill()
          .map((_,i)=>(
            <p key={i}>⭐</p>
          ))}
        </div>
      </div>
      <img src={image} alt=""/>
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  )
}

export default Product;
