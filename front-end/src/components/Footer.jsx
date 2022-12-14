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
    // <div className="footer">
    //   <div className="footer-container-left">
    //     {/* <div className="container-items"> */}
    //     {/* Section_1 */}
    //     <div className="about">
    //       <img
    //         className="footer-logo"
    //         src={logo}
    //         alt="logo"
    //         style={{ width: 140 }}
    //       ></img>
    //       <h3 className="footer-about-us">About Us</h3>
    //       <p>
    //         Coding4All was developed by a team of young developers, at Brunel
    //         University, with the sole purpose to change the lives of other
    //         students.
    //       </p>
    //     </div>
    //   </div>
    //   <ul className="footer-container-right">
    //     {/* Section_2 */}
    //     {/* <div className="contact-us"> */}
    //     {/* <ul className="link"> */}
    //     <li>
    //       <h3 className="footer-title">Contact Us</h3>
    //       {/* </li> */}
    //       <ul className="footer-box">
    //         <li>
    //             <a href="/">Code4All@hotmail.com</a>
    //         </li>
    //         <li>
    //           <p>Phone: +44 123-456-7890</p>
    //         </li>
    //       </ul>
    //     </li>
    //     {/* </ul> */}
    //     {/* </div> */}
    //     {/* Section_3 */}
    //     {/* <div className="links"> */}
    //     {/* <ul className="link"> */}
    //     <li>
    //       <h3 className="footer-title">Links</h3>
    //       {/* </li> */}
    //       <ul className="footer-box">
    //         <li>
    //           <a href="/donate">Donate</a>
    //         </li>
    //         <li>
    //           <a href="/faq">F.A.Q</a>
    //         </li>
    //         <li>
    //           <a href="/courses">Courses</a>
    //         </li>
    //       </ul>
    //     </li>
    //     {/* </ul> */}
    //     {/* </div> */}
    //     {/* Section_4*/}
    //     {/* <div className="socials"> */}
    //     {/* <ul> */}
    //     <li>
    //       <h3 className="footer-title">Socials</h3>
    //       <ul className="footer-box">
    //         <li>
    //           <a href="http://www.facebook.com">
    //             <AiFillFacebook />
    //           </a>
    //         </li>
    //         <li>
    //           <a href="http://www.instagram.com">
    //             <AiFillInstagram />
    //           </a>
    //         </li>
    //         <li>
    //           <a href="http://www.Twitter.com">
    //             <AiFillTwitterCircle />
    //           </a>
    //         </li>
    //       </ul>
    //       {/* </ul> */}
    //       {/* </div> */}
    //     </li>
    //   </ul>
    //   <div className="footer-container-bottom">
    //     <p>All Rights Reserved by &copy;Code4All 2022</p>
    //   </div>
    //   {/* </div> */}
    // </div>

    <div className="footer">
      <div className="footer-container-left">
        <img src={logo} alt="logo" style={{ width: 140 }} />
        <h3 className="footer-about-us">About Us</h3>
        <p className="about-par">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos autem
          culpa ipsam deleniti accusamus repudiandae, quis exercitationem qui.
          Sunt repudiandae architecto voluptas praesentium possimus aliquid.
        </p>
      </div>

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
