import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import "../../Styles/CoursesStyles/CoursesVideos.css";

function CoursesVideos() {


  const [showPlayer, setShowPlayer] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  function handleClick(url) {
    setVideoUrl(url);
    setShowPlayer(true);
  }



  const [play, setPlay] = useState(true);

  const videoref = useRef()
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


window.document.onkeydown = function (event,e) {
  if (!e) {
    e = event;
  }
  if (e.keyCode == 27) {
    lightbox_close();
  }
};

function lightbox_open() {
  var lightBoxVideo = document.getElementById("light");
  
  document.getElementById("light").style.display = "block";
  document.getElementById("fade").style.display = "block";
  setPlay(true);
}

function lightbox_close() {
  var lightBoxVideo = document.getElementById("light");
  document.getElementById("light").style.display = "none";
  document.getElementById("fade").style.display = "none";
  setPlay(false);
}





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

 
{showPlayer && (
        <div className="video-player-popup">
          <button className="closeIcon" onClick={() => setShowPlayer(false)}><i class="fa-sharp fa-solid fa-xmark fa-2x" size ={"10px"}></i></button>
          <ReactPlayer className="videoPlayer"
                         url={videoUrl}
               
                      
                         width='120%'
                         height='100%'
                     
                    /> 
        </div>
      )}



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
     <div id="fade" onClick={() => lightbox_close()}></div>

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
        < a href="#!"onClick={() => handleClick('https://www.youtube.com/embed/b_3qa0uYVb8')}

>        
         

         
          Link 1<i className="fa-regular fa-circle-play"></i>
          </a>
          <a href="#" onClick={() => handleClick('https://www.youtube.com/watch?v=9kfScGV6W1Y')}>
            Link 2<i className="fa-regular fa-circle-play"></i>
          </a>
          <a href="#">
            Link 3<i className="fa-regular fa-circle-play"></i>
          </a>
        </div>
        <button className="dropdown-btn"
          onClick={() => dropdown()} >
          <span className="line-1">Fundamentals of data structures </span>
          <span className="line-2">5 Lectures- 50min</span>
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-container">
          <a href="#"
            
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
        <button className="dropdown-btn" onClick={() => dropdown()} >
          <span className="line-1">Fundamentals of algorithms </span>
          <span className="line-2">5 Lectures- 50min</span>
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
        <button className="dropdown-btn" onClick={() => dropdown()} >
          <span className="line-1">Theory of computation </span>
          <span className="line-2">5 Lectures- 50min</span>
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
        <button className="dropdown-btn" onClick={() => dropdown()} >
          <span className="line-1">Fundamentals of computer systems</span>
          <span className="line-2">5 Lectures- 50min</span>
          <i className="fa fa-caret-down"></i>
        </button>
        
        <div className="dropdown-container">
          < a href="#!" className="lightbox" onClick={() => lightbox_open()}

          >        
                   

                   {/*<div id="light">*/}
                   <ReactPlayer id="light"className="reactplayer"
                         url="https://www.youtube.com/watch?v=UVCP4bKy9Iw"
               
                      
                         width='60%'
                         height='50%'
                     
                    /> 
                  {/*</div>*/}

            Link 1 k<i className="fa-regular fa-circle-play"></i>
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
