import React from 'react'
import { Navbar } from './Navbar'
import './contact.css'
import {Footer} from './Footer.jsx';
export function Contact() {
  return (<>
    <Navbar/>
    <div id="contact_1">
      <img id="img_contact" src="https://harshcartproject.netlify.app/assets/contact-img-38861474.jpg" alt="" />
      <div id="input">
      <input type="text" placeholder="Your name"/><br/><br/>
      <input type="text" placeholder="Email id"/><br/><br/>
      <textarea type="text" placeholder="Reason for Contacting!"/><br/><br/>
      <button id="submit_btn">submit</button>
      </div>
    </div>
    <Footer/>
    </>
  )
}


