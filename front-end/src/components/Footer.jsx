import React from "react";
import logo from "../assets/Logo.png";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import "../Styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="container-items">
          {/* Section_1 */}
          <div className="about">
            <img src={logo} alt="logo"></img>
            <ul>
              <li>
                <h3>About-US</h3>
              </li>
            </ul>
          </div>
          {/* Section_2 */}
          <div className="contact-us">
            <ul>
              <li>
                <h1>Contact-US</h1>
              </li>
              <li>
                <p>Email: Code4All@hotmail.com</p>
              </li>
              <li>
                <p>Phone: 12345678910</p>
              </li>
            </ul>
          </div>
          {/* Section_3 */}
          <div className="links">
            <ul>
              <li>
                <h1>Links</h1>
              </li>
              <li>
                <a href="/donate">Donate</a>
              </li>
              <li>
                <a href="/faq">F.A.Q</a>
              </li>
              <li>
                <a href="/courses">Courses</a>
              </li>
            </ul>
          </div>
          {/* Section_4*/}
          <div className="socials">
            <ul>
              <li>
                <h1>Socials</h1>
              </li>
              <li>
                <a href="www.facebook.com">
                  <AiFillFacebook />
                </a>
              </li>
              <li>
                <a href="www.instagram.com">
                  <AiFillInstagram />
                </a>
              </li>
              <li>
                <a href="www.Twitter.com">
                  <AiFillTwitterCircle />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
