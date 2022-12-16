import React from 'react'
import donationsPicture from "../../images/donations image 3.jpeg"
import "../../Styles/DonationsStyles/DonationsPage.css"
import {Link} from "react-router-dom"

function DonationsPage() {
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
    <form className='donationsform' action='/'>
        <h2 className='formtitle'>Your Information</h2>
        <label for="title">Title:<input type="text" id="title" name="title"/></label>
        <label for="fname">First name:<input type="text" id="fname" name="fname"/></label>
        <label for="lname">Last name:<input type="text" id="lname" name="lname"/></label>
        <label for="Eaddress">Email Adress:<input type="text" id="Eaddress" name="Eaddress"/></label>
        <label for="Pnumber">Phone number:<input type="text" id="Pnumber" name="Pnumber"/></label>
        <label for="">How did you hear about us?<input type="text" id="Howhear" name="Howhear"/></label>
        <label for="">What motivated you to donate today?<input type="text" id="Motivate" name="Motivate"/></label>
        <Link to ="/donationsBilling">
        <input className="btn-next" type="submit" value="Next"/>
        </Link>
        </form>
    </div>

    </div>
  )
}

export default DonationsPage