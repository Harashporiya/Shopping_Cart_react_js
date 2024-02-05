import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from '../App';
import { Home } from './Home'; 
import {About} from "./About";
import {Contact} from "./Contact"
import Product from "./Product";
import Cart from './Cart'

export default function Routing(){
  return (
    <>
 
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<App />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="/shop/product/:itemId" element={<Product/>} />
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

