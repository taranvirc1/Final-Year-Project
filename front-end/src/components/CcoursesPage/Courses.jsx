import React from 'react'
import "../../Styles/CoursesStyles/Courses.css";
import clogo from '../../images/Courseimages/C++.jpg'
import javaimage from '../../images/Courseimages/java.webp'
import htmlimage from '../../images/Courseimages/html.jpg'
import js from '../../images/Courseimages/js.jpg'
import cssimage from '../../images/Courseimages/css.jpg'
import pythonimage from '../../images/Courseimages/python.jpg'
import reactimage from '../../images/Courseimages/react.jpg'
import mysqlimage from '../../images/Courseimages/mssql.webp'
import { Link } from "react-router-dom";
import Background2 from './background/Background2';


function Courses() {
  return (
    <div className="background">



<Background2/>
    <div className="overflow-hidden">
        <h5 className="header-drop-in" data-text="Coding4All">Coding4All</h5>
      
     
       
        <h4 className="drop-in-2">
          
           Computer Science Courses available for everyone free of cost.
          
            Learn programming and its concepts through 

        </h4>
        
       
       </div>
   <br>
    </br>
    <div className="Courseswrapper">
        
        <div className="Coursescard"><img src={javaimage} alt=""/>
          <div className="info">
            <h1>JAVA</h1>
            <p>In this course, you will get to learn everything about java </p>
            <Link to="/coursesvideos">
            <button> Watch Videos</button>
            </Link>
          </div>
        </div>
        <div className="Coursescard"><img src={pythonimage} alt=""/>
          <div className="info">
            <h1>Python</h1>
            <p>In this course, you will get to learn everything about python </p>
            <button>Watch Videos</button>
          </div>
        </div>
     

        <div className="Coursescard"><img src={clogo} alt=""/>
          <div className="info">
            <h1>C++</h1>
            <p>In this course, you will get to learn everything about C++ </p>
            <button >Watch Videos</button>
            
          </div>
        
      </div>
      <div className="Coursescard"><img src={mysqlimage} alt=""/>
        <div className="info">
          <h1>My SQL</h1>
          <p>In this course, you will get to learn everything about My Sql </p>
          <button>Watch Videos</button>
        
      </div>
    </div>
</div>

      <div className="Courseswrapper">
        
        <div className="Coursescard"><img src={reactimage} alt=""/>
            <div className="info">
              <h1>React</h1>
              <p>In this course, you will get to learn everything about React </p>
              <button>Watch Videos</button>
            </div>
          </div>
        
        <div className="Coursescard"><img src={htmlimage} alt=""/>
          <div className="info">
            <h1>HTML</h1>
            <p>In this course, you will get to learn everything about HTML </p>
            <button>Watch Videos</button>
          </div>
        </div>
        <div className="Coursescard"><img src={cssimage} alt=""/>
          <div className="info">
            <h1>CSS</h1>
            <p>In this course, you will get to learn everything about CSS styling </p>
            <button>Watch Videos</button>
          
        </div>
      </div>

      <div className="Coursescard"><img src={js} alt=""/>
        <div className="info">
          <h1>Java Script</h1>
          <p>In this course, you will get to learn everything about java Script </p>
          <button>Watch Videos</button>
        
      </div>
    </div>
    <br>
    </br>
</div>


       






    </div>
  )
}

export default Courses