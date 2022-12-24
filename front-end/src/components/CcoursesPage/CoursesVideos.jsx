import React, { useState } from "react";
import "../../Styles/CoursesStyles/CoursesVideos.css";

function CoursesVideos() {
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
    <div>
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

      <div className="sidenav">
        <button
          className="dropdown-btn"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <span className="line-1">Fundamentals of Programming</span>
          <span className="line-2">5 Lectures- 50min</span>
          <i className="fa fa-caret-down"></i>
        </button>
        <div className={`dropdown-container ${open ? "active" : "inactive"}`}>
          <a
            className="popup-vimeo"
            href="https://vimeo.com/67341671"
            onClick={() => shoot("popup-vimeo")}
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
    </div>
  );
}

export default CoursesVideos;
