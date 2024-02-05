import React, { createContext, useContext, useEffect, useState } from 'react';
const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productDetails, setProductDetails] = useState(null);
  const [cartProductDetails, setCartProductDetails] = useState([]);
  const [count, setCount] = useState(0);
  const [add, setAdd] = useState(0);
  const setProduct = (details) => {
    setProductDetails(details);
  };



  const setCartProduct = (details) => {
    setCartProductDetails((prevCartProducts) => {
      const existingItemIndex = prevCartProducts.findIndex(item => item.itemId === details.itemId);
  
      if (existingItemIndex !== -1) {
      
        const updatedCart = [...prevCartProducts];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          count: updatedCart[existingItemIndex].count + details.count,
        };
  
        return updatedCart;
      } else {
      
        return [...prevCartProducts, details];
      }
    });
  };
  


  return (
    <ProductContext.Provider value={{ productDetails, setProduct, cartProductDetails, setCartProduct, count, setCount, add, setAdd }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(ProductContext);
  return context;
};