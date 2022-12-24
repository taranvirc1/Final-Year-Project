import React,{useState} from 'react'
import "../../Styles/CoursesStyles/CoursesVideos.css";
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import videosjs from './videos'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function CoursesVideos() {
  const [open, setOpen] = useState(false);
  return (
    <div>

        <div className="curved-background-videos">
            <div className="curved-background__curved"></div>
        </div>
        <div className= "discription">
             <h1 className="header">Learn C# Programming (In Ten Easy Steps) </h1>  
             <h2 className ="sub-header">The simplest way to learn C# programming.</h2>

        </div>

        <div className="objectVideos">
           <div className="wyl">What you will learn </div>
            <div className="wyl-list">
            
              <li>Use the source code examples to learn step-by-step </li>
           
            </div>
          <div className="b">

            <li>Master C# programming concepts from the ground up</li>
            <div className="c">
            <li> Use the source code examples to learn step-by-step
                Understand the special features of C#: object orientation, the .NET framework, error-handling, serialization</li>
            </div>
          </div>
        
        </div>
        

<div className="sidenav">

  <button className='dropdown-btn' onClick={() => {setOpen(!open)}}>
                <span className="line-1">Fundamentals of Programming</span>
                <span className="line-2">5 Lectures- 50min</span>    
    <i className="fa fa-caret-down"></i>
  </button>
  <div className={`dropdown-container ${open? 'active' : 'inactive'}`} >
    <a href="#" >Link 1  
    <i className="fa-regular fa-circle-play"></i>
    </a>
    <a href="#">Link 2
    <i className="fa-regular fa-circle-play"></i>
    </a>
    <a href="#">Link 3
    <i className="fa-regular fa-circle-play"></i>
    </a>
  </div>
  <button className="dropdown-btn">Dropdown 
    <i className="fa fa-caret-down"></i>
  </button>
  <div className="dropdown-container">
    <a href="#">Link 1
    <i className="fa-regular fa-circle-play"></i>
    </a>
    <a href="#">Link 2
    <i className="fa-regular fa-circle-play"></i>
    </a>
    <a href="#">Link 3
    <i className="fa-regular fa-circle-play"></i>
    </a>
  </div>
 
</div>

        


       
        <script script="/videos.js"></script>

          












    </div>
  )
}

export default CoursesVideos