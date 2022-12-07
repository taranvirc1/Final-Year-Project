import React from 'react'
import "../Styles/WhoAreWe.css"

export default function WhoAreWe() {
  return (
    <div className='body'>
    <div class="title">
        <h1>Who Are We?</h1>
    </div>
     <div class="center">
        <div class="box1">
            <img src="Picture1.png" height="250px" width="400px"/>
        </div>
        <div class="box2">
            <p>Coding4All was developed by a team of young developers, at Brunel Univeristy, with the sole purpose to change the lives of other students.</p>
        </div>
        <div class="box3">
            <p>Our team have a strong passion for coding and learning. They wish to provide useful resources so that other people may be able to nuture the same passion as they have. </p>
        </div>
        <div class = "box4">
            <img src="Picture1.png" height="250px" width="400px"/>
        </div>
     </div>  
    </div>
  )
}
