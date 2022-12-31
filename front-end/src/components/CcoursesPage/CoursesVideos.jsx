import React, { useState } from "react";
import "../../Styles/CoursesStyles/CoursesVideos.css";

function CoursesVideos() {
  function dropdown(){
    var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}}

const styleObj = {
  height:'145px',
  width :'150px'
}






  const [open, setOpen] = useState(false);
  const shoot = (a) => {
    a.magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });
  };
  return (
    <div className= "couresesVideos">
      <div className="curved-background-videos">
        <div className="curved-background__curved"></div>
      </div>
      <div className="discription">
        <h1 className="header">Learn C# Programming (In Ten Easy Steps) </h1>
        <h2 className="sub-header">
          The simplest way to learn C# programming.
        </h2>
      </div>
      <div className="objectVideos">
        <div className="wyl">What you will learn </div>
        <div className="wyl-list">
          <li>Use the source code examples to learn step-by-step </li>
        </div>
        <div className="b">
          <li>Master C# programming concepts from the ground up</li>
          <div className="c">
            <li>
              {" "}
              Use the source code examples to learn step-by-step Understand the
              special features of C#: object orientation, the .NET framework,
              error-handling, serialization
            </li>
          </div>
        </div>
      </div>
      <div className= "Space"> </div>
     <div className = "courseContent"> 
     <h1 className="courseContenttitle"> Course Content </h1>

      <div className="sidenav">
        <button
          className="dropdown-btn"
          onClick={() => dropdown()}
        >
          <span className="line-1">Fundamentals of Programming</span>
          <span className="line-2">5 Lectures- 50min</span>
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-container">
          <a className="popup-vimeo"
            href="https://vimeo.com/67341671"
            onClick={() => shoot(".popup-vimeo")}>
            Link 1<i className="fa-regular fa-circle-play"></i>
          </a>
          <a href="#">
            Link 2<i className="fa-regular fa-circle-play"></i>
          </a>
          <a href="#">
            Link 3<i className="fa-regular fa-circle-play"></i>
          </a>
        </div>
        <button className="dropdown-btn">
          Dropdown
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-container">
          <a
            
          >
            Link 1<i className="fa-regular fa-circle-play"></i>
          </a>
          <a href="#">
            Link 2<i className="fa-regular fa-circle-play"></i>
          </a>
          <a href="#">
            Link 3<i className="fa-regular fa-circle-play"></i>
          </a>
        </div>
        <button className="dropdown-btn">
          Dropdown
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-container">
          
           
          <a href="#">
            Link 2<i className="fa-regular fa-circle-play"></i>
          </a>
          <a href="#">
            Link 2<i className="fa-regular fa-circle-play"></i>
          </a>
          <a href="#">
            Link 3<i className="fa-regular fa-circle-play"></i>
          </a>
        </div>
        <button className="dropdown-btn">
          Dropdown
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-container">
          <a
            className="popup-vimeo"
            href="https://vimeo.com/67341671"
            onClick={() => shoot(".popup-vimeo")}
          >
            Link 1<i className="fa-regular fa-circle-play"></i>
          </a>
          <a href="#">
            Link 2<i className="fa-regular fa-circle-play"></i>
          </a>
          <a href="#">
            Link 3<i className="fa-regular fa-circle-play"></i>
          </a>
        </div>
        <button className="dropdown-btn">
          Dropdown
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-container">
          <a
            className="popup-vimeo"
            href="https://vimeo.com/67341671"
            onClick={() => shoot(".popup-vimeo")}
          >
            Link 1<i className="fa-regular fa-circle-play"></i>
          </a>
          <a href="#">
            Link 2<i className="fa-regular fa-circle-play"></i>
          </a>
          <a href="#">
            Link 3<i className="fa-regular fa-circle-play"></i>
          </a>
        </div>
      </div>
      </div>

      <div className="Coursediscription">
        <h1 className="DescriptionHeader">Discription </h1>
        <div className="DescriptionText">
          Learn C# Programming (in ten easy steps) [Version 2] is suitable for
          beginner programmers or anyone with experience in another programming
          language who needs to learn C# from the ground up. Step-by-step it
          explains how to write C# code to develop Windows applications using
          either the free Visual Studio Community Edition or a commercial
          edition of Microsoft Visual Studio (it even explains how to write C#
          programs using free tools for OS X). This is the completely revised
          and updated second version of this course. C# is one of the most
          widely used an important of all modern programming languages. If you
          need to learn C# quickly and painlessly, this is the perfect course.
          You will begin by learning the core features of programming –
          variables, constants, functions and data types. You will move on
          rapidly to learn about Object Orientation and the more advanced
          features of C# and the .NET framework such as file-handling,
          data-streaming, dealing with exceptions (errors) and overriding
          methods. Even if you start out as a complete beginner, by the end of
          this course you will have built a really solid foundation of
          programming knowledge and skills.
        </div>
      </div>
        

   
      
        {/* Hello world */}
        <div className="demo-row">
          <div className="container" id="id-sponsors">
            <div className="text-center">
              <h2 style={{margin: '20px 0', color: '#fff'}}>Our Sponsors</h2>
            </div>
            {/* Indicators */}
            
            {/* Wrapper for slides */}
            <div className="carousel-inner" role="listbox">
              <div className="item active">
                <div className="row">
                  <div className="col-sm-3 col-xs-6">
                    <div className="sponsor-feature"><img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Logo_of_the_United_Nations.svg/1200px-Logo_of_the_United_Nations.svg.png" style={{width: '200px'}} /></div>
                  </div>
                  <div className="col-sm-3 col-xs-6">
                    <div className="sponsor-feature"><img alt="" src="https://www.dcs.bbk.ac.uk/site/assets/files/4102/ioc_logo_onwhite_aw.258x0-is-hidpi.png" style={{width: '155px'}} /></div>
                  </div>
                  <div className="col-sm-3 col-xs-6">
                    <div className="sponsor-feature"><img alt="" src="https://cdn.freebiesupply.com/logos/large/2x/codecademy-logo-svg-vector.svg" style={{width: '155px'}} /></div>
                  </div>
                  <div className="col-sm-3 col-xs-6">
                    <div className="sponsor-feature"><img alt="" src="https://www.thetransitionphase.com/wp-content/uploads/2021/02/Brunel-Logo.png"  style={styleObj}/></div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          </div>
        






    </div>





  );
}

export default CoursesVideos;
