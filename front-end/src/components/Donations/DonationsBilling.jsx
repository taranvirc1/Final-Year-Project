import React, { useState } from 'react'
import "../../Styles/DonationsStyles/DonationsBilling.css"
import {Link} from "react-router-dom"


function DonationsBilling() {
 const [dAmount, setdAmount] = useState('');
 const [bfName, setBfname] = useState('');
 const [blName, setBlname] = useState('');
 const [cardNo, setCardNo] = useState('');
 const [cvv, setCvv] = useState('');
 const [cardType, setCardType] = useState('');
 const [expiryDate, setExpiryDate] = useState('');
 const [country, setCountry] = useState('');
 const [city, setCity] = useState('');
 const [address, setAddress] = useState('');
 const [postalCode, setPostalCode] = useState('');
 const [errors, setErrors] = useState({
   dAmount: '',
   bfname: '',
   blname: '',
   cardNo: '',
   cvv: '',
   cardType: '',
   expiryDate: '',
   country: '',
   city: '',
   address: '',
   postalCode: '',
 });


 const showForm=()=> {
   var form = document.querySelector(".billing-form");
   console.log(form)
   form.style.display = "block";
 }
 const newErrors = {};
 const validateForm = (event) => {
   event.preventDefault();
  


   if (!dAmount) {
     newErrors.dAmount = 'Donation Amount is required';
   }else if (!/^\d+$/.test(dAmount)) {
    newErrors.dAmount = 'Donation Amount should only contain numbers';
   }
   if (!bfName) {
     newErrors.bfName = 'First name is required';
   }
   if (!blName) {
     newErrors.blName = 'Last name is required';
   }
   if (!cardNo) {
     newErrors.cardNo = 'Card number is required';
   } else if (!/^\d{16}$/.test(cardNo)) {
    newErrors.cardNo = 'Invalid card number';
  }
   if (!cvv) {
     newErrors.cvv = 'CVV is required';
   } else if (!/^\d{3}$/.test(cvv)) {
    newErrors.cvv = 'Invalid CVV';
  }
   if (!expiryDate) {
     newErrors.expiryDate = 'Expiry date is required';
   }else if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
      newErrors.expiryDate = 'Invalid expiry date. Please use MM/YY format.';
    }
   if (!cardType) {
     newErrors.cardType = 'Card type is required';
   }
   if (!country) {
     newErrors.country = 'Country is required';
   }
   if (!city) {
     newErrors.city = 'City is required';
   }
   if (!address) {
     newErrors.address = 'Address is required';
   } else if (!/^[a-zA-Z0-9\s,'-]+$/.test(address)) {
    newErrors.address = 'Invalid address';
   }
   if (!postalCode) {
     newErrors.postalCode = 'Postal code is required';
   } else if (!/^[a-zA-Z0-9]+$/.test(postalCode)) {
    newErrors.postalCode = 'Invalid postal code';
  }


   setErrors(newErrors);


   };




   return (


 <div className='billingcontainer'>
 <h1 className='billingtitle'>Billing Information</h1>


<div class="buttons">
 <button onClick={showForm}>Card</button>
 <button> <a href='https://www.paypal.com/uk/signin' target="_blank" rel="noreferrer" style={{color: 'white', textDecoration: 'none'}}>Paypal</a></button>
</div>


<form class="billing-form" onSubmit={validateForm}>


   <label for="Donation-Amount">Donation Amount: <input type="text" name="DAmount" value={dAmount} onChange={e => setdAmount(e.target.value)} />{errors && <p>{errors.dAmount}</p>}</label>


   <label for="billing-fname">First Name: <input type="text" name="bfname" value={bfName} onChange={e => setBfname(e.target.value)} />{errors && <p>{errors.bfName}</p>}</label>


   <label for="billing-lname">Last Name: <input type="text" name="blname" value={blName} onChange={e => setBlname(e.target.value)} />{errors && <p>{errors.blName}</p>}</label>


   <label for="card-number">Card number:<input type="text" id="card-number" name="card-number" maxlength="16" value={cardNo} onChange={e => setCardNo(e.target.value)}/>{errors && <p>{errors.cardNo}</p>}</label>


   <label for="CVV">CVV:<input type="text" id="card-number" name="CVV" maxlength="3" value={cvv} onChange={e => setCvv(e.target.value)}/>{errors && <p>{errors.cvv}</p>}</label>


   <label for="card-type">Card type:<input type="text" id="card-type" name="card-number" maxlength="16" value={cardType} onChange={e => setCardType(e.target.value)}/>{errors && <p>{errors.cardType}</p>}</label>


   <label for="expiry-date">Expiry date:<input type="text" id="expiry-date" name="card-number" maxlength="16" value={expiryDate} onChange={e => setExpiryDate(e.target.value)}/>{errors && <p>{errors.expiryDate}</p>}</label>


   <label for="country">Country: <input type="text" name="country" value={country} onChange={e => setCountry(e.target.value)} />{errors && <p>{errors.country}</p>}</label>


   <label for="billing-address">Address: <input type="text" name="address" value={address} onChange={e => setAddress(e.target.value)} />{errors && <p>{errors.address}</p>}</label>


   <label for="city">City: <input type="text" name="city" value={city} onChange={e => setCity(e.target.value)} />{errors && <p>{errors.city}</p>}</label>


   <label for="postal-code">Postal Code: <input type="text" name="pcode" value={postalCode} onChange={e => setPostalCode(e.target.value)} />{errors && <p>{errors.postalCode}</p>}</label>
  




   {/* <Link to ="/confirmDonation"> */}
   <input className='btn-submit' type="submit" value="Submit"/>
   {/* </Link>  */}
</form>
</div>
  
   )
 }
  export default DonationsBilling
