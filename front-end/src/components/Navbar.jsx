import React from "react";
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
  return (
    <>
      <div className="nav" id="nav">
        <div id="code4ALLlogo">
          <Link to="/">
            <a href="/">
              <img src={Logo} alt="" style={{ width: 140 }} />
            </a>
          </Link>
        </div>
        <ul id="list-switch">
          <li>
            <Link to="/donations">
              <a href="#donate">
                <img src={donate} alt="" />
                Donate
              </a>
            </Link>
          </li>
          <li>
            <Link to="/courses">
              <a href="#courses">
                <img src={courseslogo} alt="" />
                Courses
              </a>
            </Link>
          </li>

          <li>
            <a href="#Quizzes">
              <img src={quizzeslogo} alt="" />
              Quizzes
            </a>
          </li>
          <li>
            <Link to="/Forum_landing">
              <a href="/">
                <img img src={forumlogo} alt="" />
                Forum
              </a>
            </Link>
          </li>


          <li>
            <Link to="/UPM">
              <a href="#Rankings">
                <img img src={rankinglogo} alt="" />
                Rankings
              </a>
            </Link>
          </li>

          <li>
            <Link to="/account">
              <a href="#log">
                <img img src={Loginlogo} alt="" />
                Login
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
