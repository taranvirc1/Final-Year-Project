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
</div>

<form class="billing-form">
    <label for="card-number">Card number:<input type="text" id="card-number" name="card-number" maxlength="16"/></label>

    <label for="card-number">Blling First Name: <input type="text" name="bfname" /></label>
    <label for="card-number">Billing Last Name: <input type="text" name="blname" /></label>
    <label for="card-number">Billing Country: <input type="text" name="country" /></label>
    <label for="card-number">Billing Address: <input type="text" name="address" /></label>
    <label for="card-number">Billing Address 2: <input type="text" name="adress2" /></label>
    <label for="card-number">Billing City: <input type="text" name="city" /></label>
    <label for="card-number">Billing Region: <input type="text" name="region" /></label>
    <label for="card-number">Billing Postal Code: <input type="text" name="pcode" /></label>
    <Link to ="/confirmDonation">
    <input className='btn-submit' type="submit" value="Submit"/>
    </Link> 
</form>
</div>

    )
  }
  
  export default DonationsBilling