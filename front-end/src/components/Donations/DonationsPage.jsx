import React, { useState } from 'react'
import donationsPicture from "../../images/donations image 3.jpeg"
import "../../Styles/DonationsStyles/DonationsPage.css"
import {Link} from "react-router-dom"




function DonationsPage() {
const [title, setTitle] = useState('');
const [fname, setFname] = useState('');
const [lname, setLname] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');
const [hear, setHear] = useState('');
const [motivate, setMotivate] = useState('');
const [errors, setErrors] = useState({
  title: '',
  fname: '',
  lname: '',
  email: '',
  phone: '',
});


const newErrors = {};
const validateForm = (event) => {
  event.preventDefault();




  if (!title) {
    newErrors.title = 'Title is required';
  }
  if (!fname) {
    newErrors.fname = 'First name is required';
  }
  if (!lname) {
    newErrors.lname = 'Last name is required';
  }
  if (!email) {
    newErrors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    newErrors.email = 'Email is invalid';
  }
  if (!phone) {
    newErrors.phone = 'Phone number is required';
  } else if (!/^\d{10}$/.test(phone)) {
    newErrors.phone = 'Phone number is invalid';
  }
 
  setErrors(newErrors);
};
return (




  <div className='donations-container'>




  <h1 className='donationstitle'>Donations</h1>




  <h2 className='p'>Every child should have the opportunity to study computer science.</h2>
  <img className= "img" src={donationsPicture} alt="Trulli"/>
  <h3 className='par'>Why Donate?</h3>
  <div className='section'>
  <p>
      Children accross the world are suffering from a lack of quality education.
      <br/> By donating to Coding4all you are contributing to the goal of solving<br/>
      this issue and providing children with the opportunity to learn about computer science!<br/>
   </p>
   </div>




  <div className='formcontainer'>
  <form className='donationsform' onSubmit={validateForm}>
      <h2 className='formtitle'>Your Information</h2>


      <label for="title">Title:<input type="text" id="title" name="title" value={title} onChange={e => setTitle(e.target.value)} />{errors && <p>{errors.title}</p>}</label>


      <label for="fname">First name:<input type="text" id="fname" name="fname" value={fname} onChange={e => setFname(e.target.value)}/>{errors && <p>{errors.fname}</p>}</label>


      <label for="lname">Last name:<input type="text" id="lname" name="lname" value={lname} onChange={e => setLname(e.target.value)}/>{errors && <p>{errors.lname}</p>}</label>


      <label for="Eaddress">Email Adress:<input type="text" id="Eaddress" name="Eaddress" value={email} onChange={e => setEmail(e.target.value)}/>{newErrors && <p>{errors.email}</p>}</label>


      <label for="Pnumber">Phone number:<input type="text" id="Pnumber" name="Pnumber" value={phone} onChange={e => setPhone(e.target.value)}/>{errors && <p>{errors.phone}</p>}</label>


      <label for="">How did you hear about us?<input type="text" id="Howhear" name="hear" value={hear} onChange={e => setHear(e.target.value)}/>{errors && <p>{errors.hear}</p>}</label>


      <label for="">What motivated you to donate today?<input type="text" id="Motivate" name="Motivate" value={motivate} onChange={e => setMotivate(e.target.value)}/>{errors && <p>{errors.motivate}</p>}</label>


      {/* <Link to ="/donationsBilling"> */}


      <input className="btn-next" type="submit" value="Next"/>


      {/* </Link> */}
      </form>
  </div>




  </div>
)
}




export default DonationsPage