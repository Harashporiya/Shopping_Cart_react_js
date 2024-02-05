import React from 'react';
import { FaStar } from 'react-icons/fa6';

import { useProduct } from './ProductContext';
import { Navbar } from './Navbar';
import './product.css'
import { Footer } from './Footer';
const Product = () => {
 
  const { productDetails } = useProduct();

 
  return (
    <div>
      <Navbar/>
      {productDetails && (
        <div id="details">
          <div>
        
          <img id="image" src={productDetails.image}/>
          </div>
          <div id="description">
          <h1>{productDetails.title}</h1>
          <h2>Price: ${productDetails.price}</h2>
      
          <p id="rate">
            <b>
              Rating: {productDetails.ratingRate}<FaStar/> ({productDetails.ratingCount})
            </b>
          </p>
          <p id="des_1">{productDetails.description}</p>
        
          </div>
        </div>
      )}
      <Footer/>
    </div>
  );
};

export default Product;

