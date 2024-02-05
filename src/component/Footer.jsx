import React from 'react'
import { FaHeart } from "react-icons/fa6";
import './footer.css'
export function Footer() {
  return (
    <footer>
    <div id="footer">
      <h2 className="shop_app">Shopping App</h2>
     <p className="shop_app">Terms of Service | Privacy Policy</p>
     
     <p className="shop_app"><b>Made With</b> <FaHeart id="heart" /><b> by Harash Poriya</b> </p>
    </div>
    </footer>
  )
}


