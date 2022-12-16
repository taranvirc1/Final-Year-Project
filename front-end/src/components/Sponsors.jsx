import React from 'react'
import img1 from "../images/image/1.png"
import img2 from "../images/image/2.png"
import img3 from "../images/image/3.png"
import img4 from "../images/image/4.png"
import "../Styles/Sponsors.css";
function Sponsors() {
  return (
    <div className="Sponsors">
     <h2 className='key'>
       Key supporters
     </h2>
     <div className="Sponsors-header">
       <img src={img1} alt="logo" />
       <img src={img2} alt="logo" />
       <img src={img3} alt="logo" />
       <img src={img4} alt="logo" />
     </div>
    </div>
  )
}

export default Sponsors