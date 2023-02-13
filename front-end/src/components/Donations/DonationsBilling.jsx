import React from 'react'
import "../../Styles/DonationsStyles/DonationsBilling.css"
import {Link} from "react-router-dom"
function DonationsBilling() {

  const showForm=()=> {
    var form = document.querySelector(".billing-form");
    console.log(form)
    form.style.display = "block";
  }
    return (

  <div className='billingcontainer'>
  <h1 className='billingtitle'>Billing Information</h1>

<div class="buttons">
  <button onClick={showForm}>Card</button> 
  <button> <a href='https://www.paypal.com/uk/signin' target="_blank" rel="noreferrer" style={{color: 'white', textDecoration: 'none'}}>Paypal</a></button>
</div>

<form class="billing-form">
    <label for="Donation-Amount">Donation Amount: <input type="text" name="DAmount" /></label>
    <label for="billing-fname">First Name: <input type="text" name="bfname" /></label>
    <label for="billing-lname">Last Name: <input type="text" name="blname" /></label>
    <label for="card-number">Card number:<input type="text" id="card-number" name="card-number" maxlength="16"/></label>
    <label for="CVV">CVV:<input type="text" id="card-number" name="CVV" maxlength="3"/></label>
    <label for="card-type">Card type:<input type="text" id="card-type" name="card-number" maxlength="16"/></label>
    <label for="expiry-date">Expiry date:<input type="text" id="expiry-date" name="card-number" maxlength="16"/></label>

    <label for="country">Country: <input type="text" name="country" /></label>
    <label for="billing-address">Address: <input type="text" name="address" /></label>
    <label for="billing-address-2">Address 2: <input type="text" name="address2" /></label>
    <label for="city">City: <input type="text" name="city" /></label>
    <label for="region">Region: <input type="text" name="region" /></label>
    <label for="postal-code">Postal Code: <input type="text" name="pcode" /></label>

    <Link to ="/confirmDonation">
    <input className='btn-submit' type="submit" value="Submit"/>
    </Link> 
</form>
</div>

    )
  }
  
  export default DonationsBilling