import React, { useState } from "react";
import Logo from "../images/navIcons/logo.png";
import donate from "../images/navIcons/donate.png";
import courseslogo from "../images/navIcons/courses.png";
import quizzeslogo from "../images/navIcons/quizzes.png";
import forumlogo from "../images/navIcons/forum.png";
import rankinglogo from "../images/navIcons/ranking.png";
import Loginlogo from "../images/navIcons/login.png";
import "../Styles/NavBar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <div className="nav" id="nav">
        <div id="code4ALLlogo">
          {/* <Link to="/"> */}
          <Link to="/">
            <img src={Logo} alt="" style={{ width: 140 }} />
          </Link>
          {/* </Link> */}
        </div>
        <div className="menu-icon" onClick={() => setClicked(!clicked)}>
          {clicked ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </div>
        <ul
          id="list-switch"
          className={clicked ? "list-switch mobile" : "list-switch"}
          onClick={() => setClicked(false)}
        >
          <li>
            {/* <Link to="/donations"> */}
            <Link to="donations" className="navLink" href="#donate">
              <img src={donate} alt="" />
              Donate
            </Link>
            {/* </Link> */}
          </li>
          <li>
            {/* <Link to="/courses"> */}
            <Link to="courses" className="navLink" href="#courses">
              <img src={courseslogo} alt="" />
              Courses
            </Link>
            {/* </Link> */}
          </li>

          <li>
            {/* <Link to="/Quizzes"> */}
            <Link to="Quizzes" className="navLink" href="#Quizzes">
              <img src={quizzeslogo} alt="" />
              Quizzes
            </Link>
            {/* </Link> */}
          </li>
          <li>
            {/* <Link to="/Forum_landing"> */}
            <Link to="Forum_landing" className="navLink" href="/">
              <img img src={forumlogo} alt="" />
              Forum
            </Link>
            {/* </Link> */}
          </li>

          <li>
            {/* <Link to="/UPM"> */}
            <Link to="Ranking" className="navLink" href="#Rankings">
              <img img src={rankinglogo} alt="" />
              Rankings
            </Link>
            {/* </Link> */}
          </li>

          <li>
            {/* <Link to="/account"> */}
            <Link to="account" className="navLink" href="#log">
              <img img src={Loginlogo} alt="" />
              Login
            </Link>
            {/* </Link> */}
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
