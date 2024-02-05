import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa6';
import './shop.css';
import { useProduct } from './ProductContext';

export function Shop({
  itemId,
  title,
  image,
  price,
  description,
  category,
  ratingCount,
  ratingRate,
}) {
  const navigate = useNavigate();
  const { setProduct,cartProductDetails, setCartProduct, setCount, setAdd } = useProduct();


  const handleClick = () => {
    setProduct({
      itemId,
      title,
      image,
      price,
      description,
      category,
      ratingCount,
      ratingRate,
    });
    navigate(`/shop/product/${itemId}`);
  };

  const handleAddToCart = () => {
      setCartProduct({
        itemId,
        title,
        image,
        price,
        count: 1,
      });


      setAdd((add) => add + 1);

    setCount((prevCount) => prevCount + 1);
  };


  return (
    <div className="cart" id={`cart ${itemId}`}>
      <img id="img" onClick={handleClick} src={image} alt={title} />
      <div className="cart-item-details">
        <h3 id="title">{title}</h3>
        <h2>Price: ${price}</h2>
        <p id="rate">
          <b>
            Rating: {ratingRate} <FaStar /> ({ratingCount})
          </b>
        </p>
        <div id="btn">
          <button onClick={handleAddToCart} id="add_btn">
            Add to cart
          </button>
          <button onClick={handleClick} className="btn_buy">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}