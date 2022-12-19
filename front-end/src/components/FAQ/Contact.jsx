import React from 'react'
import "../../Styles/FAQStyles/Contact.css"
import tick_img from "../../images/login-register-icons/404-tick.png"

function Contact() {
    const popup = document.getElementById("popup");

    function openPopup(){
        popup.classList.add("open-popup");
    }
    function closePopup(){
        popup.classList.remove("open-popup");
    }
  return (
    <div className="body">
         <div className="contact-container">
        <div className="form-wrapper">
            <div className="form-header">
            <h1> Contact Form </h1>
            </div>
                  <form className="contact-form">
                    <input type="text" id="name" placeholder="Enter Your Name" required/>
                    <input type="email" id="email" placeholder="Enter Your Email" required/>
                    <input type="phone" id="phone" placeholder="Enter Your Phone Number" required/>
        
                    <textarea id="message" rows="6" placeholder="Please Provide A Brief Description Of Your Problem"></textarea>
                    <button type="submit" onClick={openPopup}>Send</button>
                    <div className="popup" id="popup">
                        <img src={tick_img}/>
                        <h2>Thank You!</h2>
                        <p>Your details have been successfully submitted. A moderator will respond soon.</p>
                        <button type="button" id="popup" onClick={closePopup}>OK</button>
                    </div>
                </form>
                </div>
        </div>   
    </div>
  )
}

export default Contact