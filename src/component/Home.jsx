import React from 'react';
import './home.css';
import { Navbar } from './Navbar';
import {Footer} from './Footer.jsx';
export function Home(){
 
  return (<>
    <div id="home_back">
      
    
       <Navbar/>
        <div id="shop_img">
          <p id="para">
            
              Welcome to <b > Shopping App </b>, your one-stop online shop <br /> for
              all things weird and wonderful! Unleash <br /> your inner
              curiosity and discover the extraordinary<br /> in our diverse and
              delightfully unconventional marketplace.
           
          </p>
        
          <img
            id="home_img"
            src="https://wpswings.com/wp-content/uploads/2022/06/tips-to-increase-holiday-sales-2022-feature.jpg"
            alt=""
          />
        </div>
        <p id="shopping"><b>Elevate Your Shopping:   <br/> Unleash Possibilities!</b></p>
     
    </div>
     <Footer/>
    </>
  );
}

