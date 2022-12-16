import React from "react";
import logo from "../images/navIcons/logo.png";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import "../Styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      {/* Section 1 */}
      <div className="footer-container-left">
        <img src={logo} alt="logo" style={{ width: 140 }} />
        <h3 className="footer-about-us">About Us</h3>
        <p className="about-par">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos autem
          culpa ipsam deleniti accusamus repudiandae, quis exercitationem qui.
          Sunt repudiandae architecto voluptas praesentium possimus aliquid.
        </p>
      </div>
      {/* Section 2 */}
      <ul className="footer-container-right">
        <li>
          <h3 className="footer-title">Contact Us</h3>
          <ul className="footer-box contact">
            <li>
              <a className="link" href="/">
                Code4All@hotmail.com
              </a>
            </li>
            <li>
              <a className="link" href="/">
                Phone: +44 123-456-7890
              </a>
            </li>
          </ul>
        </li>
        {/* Section 3 */}
        <li className="features">
          <h3 className="footer-title">Links</h3>
          <ul className="footer-box link h-box">
            <li>
              <a className="link" href="/donate">
                Donate
              </a>
            </li>
            <li>
              <a className="link" href="/faq">
                FAQ
              </a>
            </li>
            <li>
              <a className="link" href="/courses">
                Courses
              </a>
            </li>
            <li>
              <a className="link" href="/quizzes">
                Quizzes
              </a>
            </li>
            <li>
              <a className="link" href="/rankings">
                Rankings
              </a>
            </li>
          </ul>
        </li>

        <li>
          <h3 className="footer-title">Social Media</h3>
          <ul className="footer-box social">
            <li>
              <a href="http://www.facebook.com">
                <AiFillFacebook />
              </a>
            </li>
            <li>
              <a href="http://www.instagram.com">
                <AiFillInstagram />
              </a>
            </li>
            <li>
              <a href="http://www.twitter.com">
                <AiFillTwitterCircle />
              </a>
            </li>
          </ul>
        </li>
      </ul>

      <div className="footer-container-bottom">
        <p>All Rights Reserved by &copy;Code4All 2022</p>
      </div>
    </div>
  );
}

export default Footer;
