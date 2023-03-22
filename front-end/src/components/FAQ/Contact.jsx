import React, { useState } from "react";
import "../../Styles/FAQStyles/Contact.css"
import tick_img from "../../images/login-register-icons/404-tick.png"
import axios from "axios";
import {useOutletContext } from "react-router-dom";
import { useEffect } from "react";


function Contact() {

  const [loggedInUser, setLoggedinUser] = useOutletContext();
  const params = {
    email: loggedInUser,
  };

 const jwt = localStorage.getItem("jwt");
  const token = jwt;
const headers = {
    Authorization: `Bearer ${token}`,
 };

 const [Contact, setContact] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [briefMessage, setBriefMessage] = useState("");
  //firstName:"";
  //lastName:"";
  //email:"";
 // phone:"";
 // breifMessage:"";

 //const [Contact, setContact] = useState({
 // firstName: "",
 //lastName: "",
 // email: "",
 // phone: "",
 // briefMessage: "",
// })

 //const {firstName, lastName, email, phone, briefMessage } = Contact;

 //const onInputChange = (e) => {
  //setContact({ ...Contact, [e.target.name]: e.target.value});
 //}

  useEffect(() => {
    axios
   .get("http://localhost:8080/user/findByEmail", {params, headers})
   .then((response) => {
      setContact(response.data);
      setFirstName(response.data);
      setLastName(response.data);
      setEmail(response.data);
      setPhone(response.data);

   })
    .catch((error) => {
    console.log(error);
    });
    }, [loggedInUser]);
    
  //const Contact = {
    //  firstName,
     // lastName,
     // email,
     // phone,
     // briefMessage,
    //}

 //  axios
  // .post("http://localhost:8080/contact_info", Contact)
 //.then((response) => {
 // console.log(response);
 //   if (response.status === 201){
  //    console.log(response);
   //   setFirstName("");
   //   setLastName("");
   //     setEmail("");
   //   setPhone("");
   //   }
      //Next();
   // })
    //.catch(async(error) => {
    // console.log(error);
     //alert("Error Submitting Contact Form, Please Try Again")
    //});
  
  const onSubmit =async (event) => {
    event.preventDefault();

   const Contact = {
      firstName,
      lastName,
      email,
      phone,
      briefMessage
    }

    await axios
   .post("http://localhost:8080/contact_info", Contact)
   .then((response) => {
    console.log(response);
    if (response.status === 201){
      console.log(response);
     setContact("");
      }
      //Next();
    })

  }
  
  const popup = document.getElementById("pop-up");

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
                  <form className="contact-form" onSubmit={onSubmit}>
                  <input 
                  type="text" 
                  name="firstName"
                  placeholder="Enter Your First Time"
                  defaultValue={Contact.firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required/>
                  
                    <input 
                    type="text" 
                    id="lastName" 
                    placeholder="Enter your Last Name:"
                    defaultValue={Contact.lastName}
                    onChange={(e) => setLastName(e.target.value)}
                     required/>
                    <input 
                    type="email" 
                    id="email" 
                    placeholder="Enter Your Email:"
                    defaultValue={Contact.email}
                  onChange={(e) => setEmail(e.target.value)}
                    required/>
                    <input 
                    type="phone" 
                    id="phone" 
                    placeholder="Enter Your Phone Number:"
                    defaultValue={Contact.phone}
                  onChange={(e) => setPhone(e.target.value)} 
                    required/>
        
                    <textarea id="briefMessage"
                     rows="6" 
                     placeholder="Please Provide A Brief Description Of Your Problem"
                     value={briefMessage}
                  onChange={(e) => setBriefMessage(e.target.value)} 
                     ></textarea>
                    <button type="submit" onClick={openPopup}>Send</button>
                    <div className="pop-up" id="popup">
                        <img src={tick_img}/>
                        <h2>Thank You!</h2>
                        <p>Your details have been successfully submitted. A moderator will respond soon.</p>
                        <button type="button" id="popup" onClick={closePopup}>OK</button>
                    </div>
                </form>
                </div>
        </div>   
    </div>
  );
}

export default Contact