import React from "react";
import "../styles/Main.css";
import { FaTimes, FaBars } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useRef } from "react";
import facebook from "../assets/facebook.png";
import { Link } from "react-router-dom";
import Profile from "../pages/Profile";
import logo from "../assets/logo.png";
import { CiBellOn } from "react-icons/ci";
import { IoLogoAngular } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdMenu } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineNotification } from "react-icons/ai";
import { AiOutlineBgColors } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import profile from "../assets/avatar.jpg";
import { ImProfile } from "react-icons/im";
import { RiLockPasswordLine } from "react-icons/ri";
function Main(props) {
  function title_change() {}
  return (
    <>
      <section>
        <div className="main-container">
          <div className="content-select">
            <div className="content-select-items">
              <div className="main-item" id="profiless">
                <a href="/">
                  <CgProfile size={40} />
                </a>
                <a href="/">Profile</a>
              </div>
              <div className="main-item">
                <a href="/">
                  <RiLockPasswordLine size={40} />
                </a>
                <a href="/">Change password</a>
              </div>
            </div>
          </div>
          <div className="chosen-content">
            <div className="chosen-select">
              <li className="list-c">
                <h1 className="chosen-title">Profile</h1>
                <p className="chosen-info">
                  Your profile information and image will be shown here
                </p>

                <div className="content-avatar">
                  <div className="avatar">
                    <img className="profile" src={profile} alt="avatar" />
                  </div>
                </div>

                <label className="content-text">Username</label>
                <input className="chosen-input" placeholder="Username"></input>
                <label className="content-text">Email</label>
                <input
                  className="chosen-input"
                  placeholder="email@gmail.com"
                ></input>
                <label className="content-text">Bio</label>
                <input
                  className="chosen-input"
                  placeholder="Hey"
                  id="bio"
                ></input>
                <button className="save">Save me</button>
              </li>
            </div>
          </div>

          <div className="chosen-content">
            <div className="chosen-select">
              <li className="list-c">
                <h1 className="chosen-title">Profile</h1>
                <p className="chosen-info">
                  Your profile information and image will be shown here
                </p>

                <button className="save">Save me</button>
              </li>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Main;
