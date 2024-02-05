import React from 'react'
import { Navbar } from './Navbar'
import './about.css'
import {Footer} from './Footer.jsx';
export function About() {
  return (<>
  <Navbar/>
    <div id="img_para">
      <img id="about_img" src="https://harshcartproject.netlify.app/assets/About-a3f73aab.jpg" alt=""/>

      <p id="about_para">Welcome to Shopping App! We are not your average ecommerce platform. At Shopping App, we celebrate the unconventional, the eccentric, and the extraordinary. Our curated collection of products is a testament to the vibrant creativity that exists in the world, and we take pride in providing a space where artists, creators, and innovators can showcase their exceptional creations. From one-of-a-kind artworks to whimsical gadgets, our platform is a treasure trove of unique finds that cater to the bold and adventurous souls who seek to stand out from the crowd. Embrace the bizarre, explore the extraordinary, and join us on a journey to discover the unexpected wonders that Shopping App has to offer.</p>
    </div>
    <Footer/>
    </>
  )
}


