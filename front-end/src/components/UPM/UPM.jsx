import React from "react";
import "../../Styles/UPM/UPM.css";
import { BsPerson } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { SlLogout } from "react-icons/sl";
import { MdOutlineModeEdit } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";
import { AiOutlinePhone } from "react-icons/ai";
import { MdDateRange } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { TiTickOutline } from "react-icons/ti";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useNavigate, useOutletContext } from "react-router-dom";
function UPM() {
  const [loggedInUser, setLoggedinUser] = useOutletContext();
  const logout = useNavigate();

  const logoutUser = () => {
    setLoggedinUser("");
    sessionStorage.setItem("jwt", "");
    logout("/");
  };

  return (
    <>
      <div className="upm-container">
        <div className="upm-left-side">
          <nav className="upm-navigation">
            <li>
              <div className="upm-item-1">
                <a href="/">
                  <BsPerson size={45} />
                </a>
              </div>
            </li>
            <li className="li-1">
              <div className="upm-item-1">
                <a href="/">
                  <IoMdNotificationsOutline className="upm-ic" size={45} />
                </a>
              </div>
            </li>
            <li className="upm-log">
              <div className="upm-item-1 upm-logout">
                {/* <a href="#"> */}
                <SlLogout
                  className="upm-ic"
                  size={45}
                  onClick={logoutUser}
                  style={{ cursor: "pointer" }}
                />
                {/* </a> */}
              </div>
            </li>
          </nav>
        </div>
        <div className="upm-right-side">
          <div className="upm-card-container-1">
            <li>
              <div className="upm-box-1">
                <h2>Johndoe#5656</h2>
                <span className="upm-sp">
                  <h3>Status:</h3>
                  <label className="upm-ver">Verified</label>
                </span>
              </div>
            </li>
            <li>
              <div className="upm-avatar">
                <button>
                  <MdOutlineModeEdit size={25} />
                </button>
              </div>
            </li>
          </div>
          <div className="upm-card-container-2">
            <div className="upm-card">
              <li>
                <h2>General</h2>
              </li>
              <li>
                <p>
                  General information you want to make <a href="/">Find more</a>
                </p>
              </li>
              <li>
                <div class="upm-outer-form">
                  <div class="upm-form-container">
                    <label>Username</label>
                    <form class="upm-form">
                      <div class="upm-form-input-holder">
                        <span class="icon">
                          <AiOutlineUser
                            class="fa fa-envelope"
                            aria-hidden="true"
                          ></AiOutlineUser>
                        </span>
                        <input
                          type="text"
                          name="username"
                          placeholder="John Doe#4545"
                        />
                      </div>
                      <button className="upm-edit-button">
                        <MdOutlineModeEdit className="upm-icon" size={40} />
                      </button>
                    </form>
                    <label>Email</label>
                    <form class="upm-form">
                      <div class="upm-form-input-holder">
                        <span class="icon">
                          <HiOutlineMail
                            class="fa fa-envelope"
                            aria-hidden="true"
                          ></HiOutlineMail>
                        </span>
                        <input
                          type="email"
                          name="email"
                          placeholder="2119921@brunel.ac.uk"
                        />
                      </div>
                      <button className="upm-edit-button">
                        <MdOutlineModeEdit className="upm-icon" size={40} />
                      </button>
                    </form>
                    <label>Password</label>
                    <form class="upm-form">
                      <div class="upm-form-input-holder">
                        <span class="icon">
                          <RiLockPasswordLine
                            class="fa fa-envelope"
                            aria-hidden="true"
                          ></RiLockPasswordLine>
                        </span>
                        <input
                          type="password"
                          name="password"
                          placeholder="*************************"
                        />
                      </div>
                      <button className="upm-edit-button">
                        <MdOutlineModeEdit className="upm-icon" size={40} />
                      </button>
                    </form>
                    <label>Phone-number</label>
                    <form class="upm-form-1">
                      <div class="upm-form-input-holder">
                        <span class="icon">
                          <AiOutlinePhone
                            class="fa fa-envelope"
                            aria-hidden="true"
                          ></AiOutlinePhone>
                        </span>
                        <input
                          type="text"
                          name="phone"
                          placeholder="12345678910"
                        />
                      </div>
                      <button className="upm-edit-button">
                        <MdOutlineModeEdit className="upm-icon" size={40} />
                      </button>
                    </form>
                  </div>
                </div>
              </li>
            </div>
          </div>
          <div className="upm-card-container-2">
            <div className="upm-card">
              <li>
                <h2>Basic Info</h2>
              </li>
              <li>
                <p>
                  Basic information which was made by you during registration
                  phase.<a href="/">Find more</a>
                </p>
              </li>
              <li>
                <div class="upm-outer-form">
                  <div class="upm-form-container">
                    <label>Firstname</label>
                    <form class="upm-form">
                      <div class="upm-form-input-holder">
                        <span class="icon">
                          <AiOutlineUser
                            class="fa fa-envelope"
                            aria-hidden="true"
                          ></AiOutlineUser>
                        </span>
                        <input
                          type="text"
                          name="firstname"
                          placeholder="John Doe#4545"
                        />
                      </div>
                      <button className="upm-edit-button">
                        <MdOutlineModeEdit className="upm-icon" size={40} />
                      </button>
                    </form>
                    <label>Lastname</label>
                    <form class="upm-form">
                      <div class="upm-form-input-holder">
                        <span class="icon">
                          <AiOutlineUser
                            class="fa fa-envelope"
                            aria-hidden="true"
                          ></AiOutlineUser>
                        </span>
                        <input
                          type="text"
                          name="lastname"
                          placeholder="2119921@brunel.ac.uk"
                        />
                      </div>
                      <button className="upm-edit-button">
                        <MdOutlineModeEdit className="upm-icon" size={40} />
                      </button>
                    </form>
                    <label>DOB</label>
                    <form class="upm-form">
                      <div class="upm-form-input-holder">
                        <span class="icon">
                          <MdDateRange
                            class="fa fa-envelope"
                            aria-hidden="true"
                          ></MdDateRange>
                        </span>
                        <input
                          type="date"
                          name="DOB"
                          placeholder="*************************"
                        />
                      </div>
                      <button className="upm-edit-button">
                        <MdOutlineModeEdit className="upm-icon" size={40} />
                      </button>
                    </form>
                    <label>Bio</label>
                    <form class="upm-form-1">
                      <div class="upm-form-input-holder">
                        <span class="icon">
                          <FcAbout
                            class="fa fa-envelope"
                            aria-hidden="true"
                          ></FcAbout>
                        </span>
                        <input
                          className="in"
                          type="text"
                          name="BIO"
                          placeholder="About me..."
                        />
                      </div>
                      <button className="upm-edit-button">
                        <MdOutlineModeEdit className="upm-icon" size={40} />
                      </button>
                    </form>
                  </div>
                </div>
              </li>
            </div>
          </div>

          <div className="upm-card-container-2">
            <div className="upm-card">
              <li>
                <h2>Themes</h2>
              </li>
              <li>
                <p>
                  Select a theme of your choice<a href="/">Find more</a>
                </p>
              </li>
              <li>
                <div class="upm-outer-form">
                  <div class="upm-form-container">
                    <form class="upm-form-rad">
                      <div class="upm-form-input-holder-rad">
                        <input
                          type="radio"
                          name="firstname"
                          placeholder="John Doe#4545"
                        />
                        <label>Light</label>
                      </div>
                      <div class="upm-form-input-holder-rad">
                        <input
                          type="radio"
                          name="firstname"
                          placeholder="John Doe#4545"
                        />
                        <label>Dark</label>
                      </div>
                    </form>
                  </div>
                </div>
              </li>
            </div>
          </div>

          <div className="upm-card-container-4">
            <div className="upm-card">
              <li>
                <div class="upm-outer-form">
                  <div class="upm-form-container">
                    <form class="upm-form-2">
                      <div class="upm-form-button-holder-2">
                        <button className="upm-close">
                          <IoMdCloseCircleOutline
                            className="upm-icon-sub"
                            size={30}
                          />
                        </button>
                        <button className="upm-sub">
                          <TiTickOutline className="upm-icon-del" size={30} />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UPM;
