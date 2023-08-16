import React from 'react';
import "./Product.css";
function Product() {
  return (
    <div className='product'>
      <div className="product_Info">
        <p>The lean Startup</p>
        <p className="productPrice">
            <small>$</small>
            <strong>19.99</strong>
        </p>
        <div className="product_rating">
            <p>⭐</p>
        </div>
      </div>
      <img src="https://www.freepnglogos.com/uploads/headphones-png/headphones-beats-pro-beats-dre-22.png" alt="" srcset="" />
      <button>Add to basket</button>
    </div>
  )
}

export default Product;
