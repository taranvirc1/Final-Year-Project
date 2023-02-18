import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import "../../Styles/CoursesStyles/CoursesVideos.css";
import { useOutletContext } from "react-router-dom";

function CoursesVideos () {



  //const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState({
   courseID:"1",
  // studentId:"1",
   ratingStars:"",
   reviewDesc:""
  

  });







  const [loggedInUser, setLoggedinUser] = useOutletContext();
  console.log("this"+loggedInUser);
  const [userdata, setUserdata] = useState("");

  useEffect(()=>{
     
          const jwt = sessionStorage.getItem('jwt');
          console.log(jwt);
          axios({
              method: 'get',
              url: 'http://localhost:8080/user/findByEmail',
              params: {email: "murad8@gmail.com"},
              headers: {"Authorization" : `Bearer ${jwt}`}
          }).then((response) => {
              if (response.status === 201){
                alert("got students");

                  //console.log(response.data);
                  console.log(response.data);
                  setUserdata(response.data);
              }
          }).catch(err => {
              console.log(err.response);
              setUserdata("Data failure");
              
          })
      
  },[]);





  const [currentStudentID, setCurrentStudentID] = useState("");



  useEffect(() => {
    axios.get("http://localhost:8080/user/findByEmail",{  params: {email:loggedInUser },headers: {"Authorization" : `Bearer ${jwt}`} })
      .then(response => {
       // setReviews(response.data);
      console.log(response.data)
      setCurrentStudentID(response.data.studentId)
 
      })
      .catch(error=>{
         console.error(error)
         alert("cant get reviews")
      });
    },[]);

    console.log("current student" + currentStudentID)










  const{courseID,ratingStars,reviewDesc}=review
  const onInputChange=(e)=>{
    setReview({...review,[e.target.name]: e.target.value})
  };
  
  const onStarsClick=(rating)=> {
  setReview({...review,ratingStars:rating,courseID: courseID})
  };


  const onSubmit= async (e)=>{
    e.preventDefault();
    setForm(false);
    const jwt = sessionStorage.getItem('jwt');
    await axios
    .post("http://localhost:8080/review", review,{  headers: {"Authorization" : `Bearer ${jwt}`} })
    .then((response) => {
      console.log(response);
      if (response.status === 201) {
        alert("Registered Successfully!!!");
        setReview({
          courseID:"1",
   ratingStars:"",
   reviewDesc:"",


        });
      }
    })
    .catch(async (error) => {
      console.log(review);
      console.log(error);
      alert("Registration not sent!!!");
    });
 


  };




  const [reviews, setReviews] = useState([]);
  const [average, setAverage] = useState(0);

  const jwt = sessionStorage.getItem('jwt');
  console.log(jwt);

  useEffect(() => {
    axios.get("http://localhost:8080/getReviews",{ headers: {"Authorization" : `Bearer ${jwt}`} })
      .then(response => {
        setReviews(response.data);
    
 
      })
      .catch(error=>{
         console.error(error)
         alert("cant get reviews")
      });
    },[]);

  useEffect(()=>{
   // getReviews();

   
},[]);

const [visible, setVisible] = useState(2);

const showMoreReviews =()=>{
setVisible((prevValue)=> prevValue+2)
};
const showLessReviews =()=>{
  setVisible(2)  };


console.log(reviews);

const getAverage=(reviews)=>{
  if (reviews.length==null){
    return ;
  }
  const sum = 0;
  for (let i = 0; i < reviews.length; i++) {
    sum += parseInt (reviews[i].ratingStars);
  }
  const averagee = sum / reviews.length;
 // console.log(averagee)
  return averagee;
}

/*

  useEffect(() => {
    axios.get("http://localhost:8080/getReviews",{ headers: {"Authorization" : `Bearer ${"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtdXJhZDdAZ21haWwuY29tIiwiZXhwIjoxNjc2NTg3OTIxfQ.KKbg_HlpuNC6mRB6PXu3IeliXqZ81SogHJQ9Fnt84e49nmq4nebu-ewXbgsU4PK9d18NLuGOiFtRYl-3EPnmow"}`} })
      .then(response => {
        setReviews(response.data.reviews);
   setAverage(getAverage(response.data.reviews));
 
      })
      .catch(error=>{
         console.error(error)
         alert("cant get reviews")
      });
  
    }, []);





console.log(reviews);

const getAverage=(reviews)=>{
  const total = reviews.reduce((acc, review) => acc + review.ratingStars, 0);
  return total / reviews.length;
};


*/


 

  const [showPlayer, setShowPlayer] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  function handleClick(url) {
    setVideoUrl(url);
    setShowPlayer(true);
  }


  const [showForm, setForm] = useState(false);
  function handleForm(){
    setForm(true);
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
                         controls={true}
                      
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

      <div className="sidenava">
        <button
          className="dropdown-btn"
          onClick={() => dropdown()}
        >
          <span className="line-1">Fundamentals of Programming</span>
          <span className="line-2">5 Lectures- 50min</span>
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-container">
        < a href="#!"onClick={() => handleClick('https://www.youtube.com/watch?v=eIrMbAQSU34')}

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
        
      <div className="reviewsContainer">
  

       
       <div className="averageRating"> <i className="star fa fa-star">{average} Course Rating | 1K ratings</i></div>
       <button className="submitButton" onClick={() => handleForm()}>Review</button>
        
       {showForm && (


        
        <div className="ratingContainer">
                <button className="ratingcloseIcon"
                 onClick={()=>{  setForm(false); 
                  onStarsClick(0)
                 setHover(0)
                
                  }}
                 
                 ><i class="fa-sharp fa-solid fa-xmark fa-1x" size ={"1px"}></i></button>
        <h1> How was the Course?</h1>
        <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= (hover || ratingStars) ? "on" : "off"}
              onClick={() => onStarsClick(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(ratingStars)}
              name = "ratingStars"
              value = {index}
             // onChange={(e) =>  onInputChange(e.target.value)}


            >
              <span className="fa fa-star"></span>
            </button>
            
          );
        })}
      </div>
      <textarea Classname="textReview"  type="review"
                  name = "reviewDesc"
                  value={reviewDesc}
                  onChange={(e) => onInputChange(e)}
                  placeholder="Reivew Here..."></textarea>

      <button className="submitButton"
      
      onClick={onSubmit}> Submit </button>
   
      </div>
      )}


             <div className="reviews">
              {reviews.slice(0,visible).map(reviewd=> (
              <div className="eachReview">
                <div className="top-review"> 
                  <h4 className="reviewerName">{reviewd.students.firstName}<span></span> {reviewd.students.lastName}</h4>
                  {new Array(reviewd.ratingStars).fill(null).map(() => (
                  <i className="fas fa-star icon-c" />
        ))}

                </div>
                <div className="reviewDiscription">
                <p>{reviewd.reviewDesc}</p>
              </div>
            </div>
           ))}
            
           
            </div>
            <button className="viewMore" onClick={showMoreReviews}> View More</button>
            <button className="viewLess" onClick={showLessReviews}> View Less</button>

      </div>
   
      
        {/* Hello world */}
      
            {/* Indicators */}
            
            {/* Wrapper for slides */}
            
            <div className="sponsor-header">
y
                        <h2 >Sponsored By</h2>
                       
                <div className="row">
         
                    <div className="sponsor-feature"><img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Logo_of_the_United_Nations.svg/1200px-Logo_of_the_United_Nations.svg.png" style={{width: '200px'}} /></div>
                
               
                    <div className="sponsor-feature"><img alt="" src="https://www.dcs.bbk.ac.uk/site/assets/files/4102/ioc_logo_onwhite_aw.258x0-is-hidpi.png" style={{width: '155px'}} /></div>
                 
                 
                    <div className="sponsor-feature"><img alt="" src="https://cdn.freebiesupply.com/logos/large/2x/codecademy-logo-svg-vector.svg" style={{width: '155px'}} /></div>
                  
                  
                    <div className="sponsor-feature"><img alt="" src="https://cdn.freebiesupply.com/logos/large/2x/codecademy-logo-svg-vector.svg" style={{width: '155px'}} /></div>
         
                 
                  
                </div>
                </div>
                






    </div>





  );
}

export default CoursesVideos;
