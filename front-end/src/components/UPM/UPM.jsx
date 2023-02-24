import React, { useState } from "react";
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
import { useEffect } from "react";
import { useRef } from "react";
import axios from 'axios'
function UPM() {
  const [loggedInUser, setLoggedinUser] = useOutletContext();
  const logout = useNavigate();
  const [user, setUser] = useState([]);
  const logoutUser = () => {
    setLoggedinUser("");
    sessionStorage.setItem("jwt", "");
    logout("/");
  };
  const jwt = sessionStorage.getItem('jwt')
  const token = jwt;
  const headers = {
    Authorization: `Bearer ${token}`
  };
  const Api = 'http://localhost:8080/user/findByEmail';
  const params = {
    email: loggedInUser,
  };
  useEffect(() => {
    axios.get(Api, { headers, params })
      .then(response => {
        setUser(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


  // [Profile Avatar]






















  const userId = user.studentId // replace with the user ID you want to update
  const newFirstName = "John"; // replace with the new first name you want to set

  const config = {
    headers: {
      "Authorization": `Bearer ${token}`, // replace with your bearer token
      "Content-Type": "application/json"
    },
  };


  const [firstname, setName] = useState('');
  const [userName, setUsername] = useState('');
  const [lastname, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [Country, setCountry] = useState('');
  const [DOB, setDOB] = useState('');
  const [Password, setPassword] = useState('');
  const [Bio, setBio] = useState('');
  const firstName = {
    firstName: firstname,
  };
  const lastName = {
    lastName: lastname,
  };

  const email = {
    email: Email
  };
  const country = {
    country: Country
  };

  const phone = {
    phone: number
  };
  const dateOfBirth = {
    dateOfBirth: DOB
  };
  const bio = {
    bio: Bio
  };


  function updateFirstName() {
    axios.put(`http://localhost:8080/user/firstName/${userId}`, firstName, config)
      .then(response => {
        console.log("User updated:", response.data);
      })
      .catch(error => {
        console.error("Failed to update user:", error);
      });
  }

  function updateLastName() {
    axios.put(`http://localhost:8080/user/lastName/${userId}`, lastName, config)
      .then(response => {
        console.log("User updated:", response.data);
      })
      .catch(error => {
        console.error("Failed to update user:", error);
      });
  }

  function updateEmail() {
    axios.put(`http://localhost:8080/user/email/${userId}`, email, config)
      .then(response => {
        console.log("User updated:", response.data);
      })
      .catch(error => {
        console.error("Failed to update user:", error);
      });
  }

  function updateCountry() {
    axios.put(`http://localhost:8080/user/country/${userId}`, country, config)
      .then(response => {
        console.log("User updated:", response.data);
      })
      .catch(error => {
        console.error("Failed to update user:", error);
      });
  }

  function updatePhone() {
    axios.put(`http://localhost:8080/user/phone/${userId}`, phone, config)
      .then(response => {
        console.log("User updated:", response.data);
      })
      .catch(error => {
        console.error("Failed to update user:", error);
      });
  }

  function updateDOB() {
    axios.put(`http://localhost:8080/user/DOB/${userId}`, dateOfBirth, config)
      .then(response => {
        console.log("User updated:", response.data);
      })
      .catch(error => {
        console.error("Failed to update user:", error);
      });
  }

  function updateBio() {
    axios.put(`http://localhost:8080/user/bio/${userId}`, bio, config)
      .then(response => {
        console.log("User updated:", response.data);
      })
      .catch(error => {
        console.error("Failed to update user:", error);
      });
  }


  //---
  const [image, setImage] = useState(null);
  const fileInput = useRef(null);
  useEffect(() => {
    axios.get(`http://localhost:8080/${userId}/image`, {
      responseType: 'arraybuffer',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        const blob = new Blob([response.data], { type: 'image/jpeg' });
        const url = URL.createObjectURL(blob);
        setImage(url);
      })
      .catch(error => console.log(error));
  }, [userId, token]);

  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    axios.post(`http://localhost:8080/${userId}/image`, formData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    fileInput.current.click();
  }


  return (
    <>
      <div className="upmcontainer">
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
            <li><div className='upm-box-1'><span className='upm-sp'><h3>Status:</h3><label className='upm-ver'>Verified</label></span></div></li>
            <li><div className='upm-avatar'>{image && <img src={image} alt="User image" />}<button onClick={handleButtonClick}><MdOutlineModeEdit size={25} /></button></div></li>
            <li>
              <input type="file" onChange={e => setFile(e.target.files[0])} ref={fileInput} style={{ display: "none" }} />
              <button className="upm-saver" type="submit" onClick={handleSubmit}>Save Changes</button>
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
                    <div class="upm-form">
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
                          placeholder={user.firstName}
                          onChange={(event) => {
                            const newValue = event.target.value;
                            setName(newValue);
                          }}
                        ></input>
                      </div>
                      <button className="upm-edit-button" onClick={updateFirstName} >
                        <MdOutlineModeEdit className="upm-icon" size={40} />
                      </button>
                    </div>
                    <label>Email</label>
                    <div class="upm-form">
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
                          placeholder={user.email}
                          onChange={(event) => {
                            const newValue = event.target.value;
                            setEmail(newValue);

                          }}

                        />
                      </div>
                      <button className="upm-edit-button" onClick={updateEmail}>
                        <MdOutlineModeEdit className="upm-icon" size={40} />
                      </button>
                    </div>
                    <label>Password</label>
                    <div class="upm-form">
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
                          placeholder={user.password}
                          onChange={(event) => {
                            const newValue = event.target.value;
                            setPassword(newValue)
                          }}
                        />
                      </div>
                      <button className="upm-edit-button" >
                        <MdOutlineModeEdit className="upm-icon" size={40} />
                      </button>
                    </div>
                    <label>Phone-number</label>
                    <div class="upm-form-1">
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
                          placeholder={user.phone}
                          onChange={(event) => {
                            const newValue = event.target.value;
                            setNumber(newValue);

                          }}

                        />
                      </div>
                      <button className="upm-edit-button" onClick={updatePhone}>
                        <MdOutlineModeEdit className="upm-icon" size={40} />
                      </button>
                    </div>
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
                    <div class="upm-form">
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
                          placeholder={user.firstName}
                          onChange={(event) => {
                            const newValue = event.target.value;
                            setName(newValue);

                          }}

                        />
                      </div>
                      <button className="upm-edit-button" onClick={updateFirstName}>
                        <MdOutlineModeEdit className="upm-icon" size={40} />
                      </button>
                    </div>
                    <label>Lastname</label>
                    <div class="upm-form">
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
                          placeholder={user.lastName}
                          onChange={(event) => {
                            const newValue = event.target.value;
                            setLastName(newValue);

                          }}

                        />
                      </div>
                      <button className="upm-edit-button" onClick={updateLastName}>
                        <MdOutlineModeEdit className="upm-icon" size={40} />
                      </button>
                    </div>
                    <label>DOB</label>
                    <div class="upm-form">
                      <div class="upm-form-input-holder">
                        <span class="icon">
                          <MdDateRange
                            class="fa fa-envelope"
                            aria-hidden="true"
                          ></MdDateRange>
                        </span>
                        <input
                          type="text"
                          name="DOB"
                          placeholder={user.dateOfBirth}
                          onChange={(event) => {
                            const newValue = event.target.value;
                            setDOB(newValue);
                          }}

                        />
                      </div>
                      <button className="upm-edit-button" onClick={updateDOB}>
                        <MdOutlineModeEdit className="upm-icon" size={40} />
                      </button>
                    </div>

                    <label>Country</label>
                    <div class="upm-form">
                      <div class="upm-form-input-holder">
                        <span class="icon">
                          <MdDateRange
                            class="fa fa-envelope"
                            aria-hidden="true"
                          ></MdDateRange>
                        </span>
                        <input
                          type="text"
                          name="DOB"
                          placeholder={user.country}
                          onChange={(event) => {
                            const newValue = event.target.value;
                            setCountry(newValue);
                          }}

                        />
                      </div>
                      <button className="upm-edit-button" onClick={updateCountry}>
                        <MdOutlineModeEdit className="upm-icon" size={40} />
                      </button>
                    </div>
                    <label>Bio</label>
                    <div class="upm-form-1">
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
                          placeholder={user.bio}
                          onChange={(event) => {
                            const newValue = event.target.value;
                            setBio(newValue);
                          }}
                        />
                      </div>
                      <button className="upm-edit-button" onClick={updateBio}>
                        <MdOutlineModeEdit className="upm-icon" size={40} />
                      </button>
                    </div>
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
                    <div class="upm-form-2">
                      <div class="upm-form-button-holder-2">
                        <button className="upm-close">
                          <IoMdCloseCircleOutline
                            className="upm-icon-sub"
                            size={30}
                          />
                        </button>
                        <button className="upm-sub"  >
                          <TiTickOutline className="upm-icon-del" size={30} />
                        </button>
                      </div>
                    </div>
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
