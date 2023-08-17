import React from 'react';
import "./Product.css";
function Product({title, image,price,rating}) {
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
            <p>⭐</p>
          ))}
        </div>
      </div>
      <img src={image} alt="" srcset="" />
      <button>Add to basket</button>
    </div>
  )
}

export default Product;
