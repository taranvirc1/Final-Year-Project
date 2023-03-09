import axios from "axios";
import React, { useEffect, useRef, useState, useCallback } from "react";
import ReactPlayer from "react-player";
import "../../Styles/CoursesStyles/CoursesVideos.css";
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import { getReviews } from "./APIs/RetrieveReviews";
import Background from "./background/Background";
import Accordion from "./Accordion";
function CoursesVideos() {
  //getting the current date using this function
  const current = new Date();
  const getCurrentDate = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  //review body for the post mapping
  //const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState({
    courseID: "1",
    // studentId:"1",// current user is got from the backend
    ratingStars: "",
    reviewDesc: "",
    createdAt: getCurrentDate,
  });

  // used to get the current user
  const [loggedInUser, setLoggedinUser] = useOutletContext();
  const [currentUser, setCurrentUser] = useState({
    email: loggedInUser,
  });

  //console.log("ff"+currentUser.email)
  console.log("this");
  const [userdata, setUserdata] = useState("");

  const [currentStudentID, setCurrentStudentID] = useState("");

  const [checkrating, setCheckRating] = useState(0);
  const [checkReview, setCheckReview] = useState("");

  // getting the review text and store in the review object of posting purposes

  const { courseID, ratingStars, reviewDesc, createdAt } = review;
  const onInputChange = (e) => {
    setReview({ ...review, [e.target.name]: e.target.value });
    setCheckReview(e.target.value);
  };

  // getting the selected star and store in the review object of posting purposes
  const onStarsClick = (rating) => {
    setReview({ ...review, ratingStars: rating, courseID: courseID });
    setCheckRating(rating);
  };

  //function used to deal with the edited review copy
  function handleEdit(ratingID) {
    const i = reviews.findIndex((review) => review.ratingID === ratingID);
    setReview(reviews[i]);

    const reviewCopy = {
      ratingID: reviews[i].ratingID,
      courseID: "1",
      // studentId:"1",
      ratingStars: reviews[i].ratingStars,
      reviewDesc: reviews[i].reviewDesc,
      createdAt: getCurrentDate,
    };
    setReview(reviewCopy);
  }

  const enabled = checkrating.length > 0 && checkReview.length > 0;

  console.log(checkReview.length);

  // method used to post and edit review--
  // if statement checks if review has an id to call the edit mapping else if null calls the post mapping
  const onSubmit = async (e) => {
    e.preventDefault();
    setForm(false);

    const jwt = localStorage.getItem("jwt");

    if (review.ratingID) {
      await axios
        .put(`http://localhost:8080/update/${review.ratingID}`, review, {
          headers: { Authorization: `Bearer ${jwt}` },
        })
        .then((d) => {
          const reviewsCopy = [...reviews];
          const i = reviewsCopy.findIndex((review) => review.ratingID === d.id);
          reviewsCopy[i] = d;
          setReviews(reviewsCopy);

          setReview({
            courseID: "1",
            ratingStars: "",
            reviewDesc: "",
            createdAt: getCurrentDate,
          });
        }) //;
        .catch(async (error) => {
          console.log(error);
        });
    } else {
      await axios
        .post("http://localhost:8080/review", review, {
          headers: { Authorization: `Bearer ${jwt}` },
        })
        .then((response) => {
          console.log(response);
          if (response.status === 201) {
            alert("Registered Successfully!!!");
            setReview({
              courseID: "1",
              ratingStars: "",
              reviewDesc: "",
              createdAt: getCurrentDate,
            });
          }
          if (response.status === 400) {
            alert("you already have a review");
          }
        })

        .catch(async (error) => {
          console.log(review);
          console.log(error);
        });
      setCheckReview("");

      // setForm(false);
      // onStarsClick(0);
      //setHover(0);
    }
    retrieveReviews();
  };

  const [reviews, setReviews] = useState([]); // retrieved reveiws is stored in this array
  const [average, setAverage] = useState(0);
  const [totalReviews, setTotalReviews] = useState(null);

  const jwt = localStorage.getItem("jwt");
  console.log(jwt);
  const retrieveReviews = () =>
    getReviews({ setTotalReviews, average, setReviews, jwt });

  useEffect(() => {
    // getReviews();
    retrieveReviews();
  }, []);

  const [visible, setVisible] = useState(10);

  const showMoreReviews = () => {
    setVisible((prevValue) => prevValue + 10);
  };
  const showLessReviews = () => {
    setVisible((prevValue) => prevValue - 5);
  };

  console.log(reviews);

  const getAverage = (reviews) => {
    if (reviews.length == null) {
      return;
    }
    const sum = 0;
    for (let i = 0; i < reviews.length; i++) {
      sum += parseInt(reviews[i].ratingStars);
    }
    const averagee = sum / reviews.length;
    return averagee;
  };

  const deleteReview = (ratingID) => {
    axios
      .delete(`http://localhost:8080/delete/${ratingID}`, {
        headers: { Authorization: `Bearer ${jwt}` },
      })
      .then((response) => {
        if (response.data != null) {
          alert("deleted successfully ");
        }
        retrieveReviews();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    const total = reviews.reduce(
      (acc, row) => acc + parseFloat(row.ratingStars),
      0
    );

    setTotalSum((total / totalReviews).toFixed(1));
  }, [reviews]);

  const params = {
    email: loggedInUser,
  };

  const [quiz, setQuiz] = useState([]);
  const [quizLength, setQuizLength] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:8080/quiz/murad8@gmail.com", {
        headers: { Authorization: `Bearer ${jwt}` },
      })
      .then((response) => {
        setQuiz(response.data);
        setQuizLength(response.data.length);
      })
      .catch((error) => {
        console.error(error);
        alert("cant get quiz");
      });
  }, []);
  console.log("quiz", quiz);

  const [widthValue, setWidthValue] = useState(0);

  useEffect(() => {
    const passedQuiz = quiz.filter((item) => item.result === "pass");
    const numberOfActiveItems = passedQuiz.length;

    const progressBarWidth =
      quizLength > 1 ? ((numberOfActiveItems - 1) / (quizLength - 1)) * 100 : 0;
    setWidthValue(progressBarWidth);
  }, [quiz]);

  const [showPlayer, setShowPlayer] = useState(false);

  function handleClick(url) {
    setVideoUrl(url);
    setShowPlayer(true);
  }

  const [showForm, setForm] = useState(false);
  function handleForm() {
    setForm(true);
  }

  function dropdown() {
    const dropdown = document.getElementsByClassName("dropdown-btn");
    var i;

    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
      });
    }
  }

  const [videoUrl, setVideoUrl] = useState("");

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/videos`, {
        headers: { Authorization: `Bearer ${jwt}` },
      })
      .then((response) => {
        console.log(response.data);

        setVideos(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(videos);

  const retrieveUrl = (videoName, courseID) => {
    const i = videos.find(
      (video) =>
        video.videoName === videoName && video.course.courseID === courseID
    );
    const url = i.url;

    setVideoUrl(url);
  };

  return (
    <div className="couresesVideos">
      <Background />

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
      <div className="Space"> </div>

      <Accordion />

      <div className="trackerContainer">
        Quiz Progress For this Course
        <div className="tracker">
          <div
            className="tracker-progress"
            style={{ width: `${widthValue}%` }}
          ></div>
          <div className="tracker-items">
            {quiz.map((quizzes, i) => (
              <div
                key={i}
                className={
                  "tracker-item" + (quizzes.result === "pass" ? " active" : "")
                }
              >
                <div className="tracker-name">{quizzes.quizType} Quiz</div>
              </div>
            ))}
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
          You will begin by learning the core features of programming variables,
          constants, functions and data types. You will move on rapidly to learn
          about Object Orientation and the more advanced features of C# and the
          .NET framework such as file-handling, data-streaming, dealing with
          exceptions (errors) and overriding methods. Even if you start out as a
          complete beginner, by the end of this course you will have built a
          really solid foundation of programming knowledge and skills.
        </div>
      </div>

      <div className="reviewsContainer">
        <div className="averageRating">
          {totalSum}
          <i className="star fa fa-star">
            Course Rating | {totalReviews} ratings
          </i>
        </div>
        <button className="submitButton" onClick={() => handleForm()}>
          Review
        </button>

        {showForm && (
          <div className="ratingContainer">
            <button
              className="ratingcloseIcon"
              onClick={() => {
                setForm(false);
                onStarsClick(0);
                setHover(0);
              }}
            >
              <i class="fa-sharp fa-solid fa-xmark fa-1x" size={"1px"}></i>
            </button>
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
                    // onMouseLeave={() => setHover(ratingStars)}
                    name="ratingStars"
                    value={review.ratingStars}
                    // onChange={(e) =>  onInputChange(e.target.value)}
                  >
                    <span className="fa fa-star"></span>
                  </button>
                );
              })}
            </div>
            <textarea
              Classname="textReview"
              type="review"
              name="reviewDesc"
              onChange={(e) => onInputChange(e)}
              value={review.reviewDesc}
              placeholder="Reivew Here..."
            ></textarea>
            <Link to="/coursesvideos">
              <button
                className="submitButton"
                type="button"
                disabled={!(checkReview && checkrating)}
                onClick={onSubmit}
              >
                Submit
              </button>
            </Link>
          </div>
        )}

        <div className="reviews">
          {reviews.slice(0, visible).map((reviewd) => (
            <div className="eachReview">
              <div className="top-review">
                <h4 className="reviewerName">
                  {reviewd.students.firstName}
                  <span></span> {reviewd.students.lastName}
                </h4>
                {new Array(reviewd.ratingStars).fill().map(() => (
                  <i className="fas fa-star icon-c" />
                ))}
              </div>
              <div className="reviewDiscription">
                <p>{reviewd.reviewDesc}</p>
                <p2>{reviewd.createdAt}</p2>
              </div>
              {loggedInUser === reviewd.students.email && (
                <button
                  className="editReview"
                  onClick={() => {
                    handleEdit(reviewd.ratingID);
                    handleForm();
                  }}
                >
                  Edit
                </button>
              )}

              {loggedInUser === reviewd.students.email && (
                <button
                  className="deleteReview"
                  onClick={() => deleteReview(reviewd.ratingID)}
                >
                  Delete
                </button>
              )}
            </div>
          ))}
        </div>
        <button className="viewMore" onClick={showMoreReviews}>
          View More
        </button>
        <button className="viewLess" onClick={showLessReviews}>
          View Less
        </button>
      </div>

      <div className="sponsor-header">
        <h2>Sponsored By</h2>

        <div className="row">
          <div className="sponsor-feature">
            <img
              alt=""
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Logo_of_the_United_Nations.svg/1200px-Logo_of_the_United_Nations.svg.png"
              style={{ width: "200px" }}
            />
          </div>

          <div className="sponsor-feature">
            <img
              alt=""
              src="https://www.dcs.bbk.ac.uk/site/assets/files/4102/ioc_logo_onwhite_aw.258x0-is-hidpi.png"
              style={{ width: "155px" }}
            />
          </div>

          <div className="sponsor-feature">
            <img
              alt=""
              src="https://cdn.freebiesupply.com/logos/large/2x/codecademy-logo-svg-vector.svg"
              style={{ width: "155px" }}
            />
          </div>

          <div className="sponsor-feature">
            <img
              alt=""
              src="https://cdn.freebiesupply.com/logos/large/2x/codecademy-logo-svg-vector.svg"
              style={{ width: "155px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursesVideos;
