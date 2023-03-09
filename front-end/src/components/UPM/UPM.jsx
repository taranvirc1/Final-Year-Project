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
import { CiTwitter } from 'react-icons/ci';
import { AiOutlineInstagram } from 'react-icons/ai'
import { CiLinkedin } from 'react-icons/ci'
import { RiMapPin2Line } from 'react-icons/ri'
import { FaUpload } from 'react-icons/fa'
import { CiLogout } from 'react-icons/ci'
import axios from 'axios'
import defaultImage from "../../images/UPM/assets/facebook.png"
import { BiBookBookmark } from 'react-icons/bi'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillLock } from 'react-icons/ai'
import basic from "../../images/UPM/assets/basic.png"
import intermediate from "../../images/UPM/assets/intermediate.png"
import advanced from "../../images/UPM/assets/advanced.png"
import rare from "../../images/UPM/assets/rare.png"
import rare2 from "../../images/UPM/assets/rare2_low.png"
import nft from '../../images/UPM/assets/nft_low.png'
import nft1 from '../../images/UPM/assets/nft1_low.png'
import nft2 from '../../images/UPM/assets/nft2_low.png'
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
        setUser(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const userId = user.studentId

  const config = {
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    },
  };

  const FN = user.firstName;
  const LN = user.lastName;
  const UN = user.username;
  const CT = user.country;
  const D0B = user.dateOfBirth;
  const BI = user.bio;
  const NU = user.phone;
  const EM = user.email;
  const [firstname, setName] = useState(FN);
  const [userName, setUsername] = useState(UN);
  const [lastname, setLastName] = useState(LN);
  const [Email, setEmail] = useState(EM);
  const [number, setNumber] = useState(NU);
  const [Country, setCountry] = useState(CT);
  const [DOB, setDOB] = useState(D0B);
  const [newPasswords, setNewPasswords] = useState('default');
  const [Bio, setBio] = useState(BI);
  const [Role, setRole] = useState('Basic');
  const [LinkedIn, setLink] = useState('LinkedIn URL :)');
  const [Instagram, setInsta] = useState('Instagram URL :)');
  const [Twitter, setTwit] = useState('Twitter URL :)');
  const box = {
    firstName: firstname,
    lastName: lastname,
    email: Email,
    country: Country,
    phone: number
  };

  const box2 = {
    username: userName,
    country: Country,
    dateOfBirth: DOB,
    bio: Bio,
  };

  const box3 = {
    twitter: Twitter,
    instagram: Instagram,
    linkedIn: LinkedIn
  };

  const role = {
    role: Role
  };



  function updateInfo1() {
    updatePassword();
    axios.put(`http://localhost:8080/user/input/${userId}`, box, config)
      .then(response => {
        console.log("User updated:", response.data);
      })
      .catch(error => {
        console.error("Failed to update user:", error);
      });
  }
  const updatePassword = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8080/${userId}/password`,
        {},
        {
          headers: {
            'Authorization': `Bearer ${token}`
          },
          params: {
            newPassword: newPasswords
          }
        }
      );
      console.log(response.data);
      console.log(newPasswords)
    } catch (error) {
      console.error(error);
    }
  };

  function updateInfo2() {
    axios.put(`http://localhost:8080/user/input2/${userId}`, box2, config)
      .then(response => {
        console.log("User updated:", response.data);
      })
      .catch(error => {
        console.error("Failed to update user:", error);
      });
  }

  function updateInfo3() {
    axios.put(`http://localhost:8080/user/input3/${userId}`, box3, config)
      .then(response => {
        console.log("User updated:", response.data);
      })
      .catch(error => {
        console.error("Failed to update user:", error);
      });
  }


  function updateRole() {
    axios.put(`http://localhost:8080/user/role/${userId}`, role, config)
      .then(response => {
        console.log("User updated:", response.data);
      })
      .catch(error => {
        console.error("Failed to update user:", error);
      });
  }




  //---
  const defaultAvatarUrl = defaultImage;
  const [image, setImage] = useState(defaultAvatarUrl);
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

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    const url = URL.createObjectURL(e.target.files[0]);
    setImage(url);
  };

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

  //------

  // const [image2, setImage2] = useState(null);
  // const fileInput2 = useRef(null);
  // useEffect(() => {
  //   axios.get(`http://localhost:8080/${userId}/backimage`, {
  //     responseType: 'arraybuffer',
  //     headers: {
  //       'Authorization': `Bearer ${token}`
  //     }
  //   })
  //     .then(response => {
  //       const blob = new Blob([response.data], { type: 'image/jpeg' });
  //       const url = URL.createObjectURL(blob);
  //       setImage2(url);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setImage2(defaultAvatarUrl)
  //     });
  // }, [userId, token]);

  // const [file2, setFile2] = useState(null);

  // const handleSubmit2 = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append('file', file);

  //   axios.post(`http://localhost:8080/${userId}/backimage`, formData, {
  //     headers: {
  //       'Authorization': `Bearer ${token}`,
  //       'Content-Type': 'multipart/form-data'
  //     }
  //   })
  //     .then(response => console.log(response.data))
  //     .catch((error) => {
  //       console.log(error);
  //       setImage2(defaultAvatarUrl)
  //     });
  // };

  // const handleButtonClick2 = (e) => {
  //   e.preventDefault();
  //   fileInput.current.click();
  // }



  return (
    <>
      <div className="upmcontainer">
        <div className="upm-left-side">
          <nav className="upm-navigation">
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


            <div className='upm-container'>
              <div className='upm-mini-container'>
                <div class="upm-card-container">
                  <li><span class="upm-logout"><CiLogout size={30} onClick={logoutUser} /></span></li>
                  <li>
                    {image && <img class="upm-round" src={image} alt="avatar" />}
                    <button className="upm-click" onClick={handleButtonClick}><MdOutlineModeEdit size={25} /></button>
                    <button className="upm-saver-1" type="submit" onClick={handleSubmit}><FaUpload className="upm-icons-s" /></button>
                    <input type="file" onChange={handleFileChange} ref={fileInput} style={{ display: "none" }} />
                  </li>
                  <li><h3>{user.username}</h3></li>
                  <li><p>{user.bio} <br /> Hi, weclome to my profile settings i am {user.firstName}</p></li>
                  <li>
                    <div class="upm-buttons">
                      <a href='/' className="upm-primary">
                        <AiOutlineTwitter size={30} />
                      </a>
                      <a href='/' className="upm-primary ghost">
                        <CiLinkedin size={30} />
                      </a>
                      <a href='/' className="upm-primary ghost">
                        <AiOutlineInstagram size={30} />
                      </a>
                    </div>
                  </li>

                </div>
                <div class="upm-card-container-1">
                  <div className="upm-skills">
                    <ul>
                      <li>
                        <h6>Basic</h6>
                        <div className='upm-info'>
                          <div className='upm-split'>
                            <div class="upm-form field">
                              <input type="input" class="upm-field" placeholder="a"
                                defaultValue={user.firstName}
                                onChange={(event) => {
                                  const newValue = event.target.value;
                                  setName(newValue);

                                }} name="Firstname" id='name' required />
                              <label for="name" class="upm-label">Firstname</label>
                            </div>
                            <div className="upm-form field">
                              <input type="input" class="upm-field"
                                defaultValue={user.lastName}
                                onChange={(event) => {
                                  event.target.value = "asd"
                                  const newValue = event.target.value;
                                  setLastName(newValue);
                                }} name="Lastname" id='name' required />
                              <label for="name" class="upm-label">Lastname</label>
                            </div>
                          </div>
                          <div className='upm-split-2'>
                            <div class="upm-form field">
                              <input type="input" class="upm-field" placeholder={user.lastName}
                                defaultValue={user.email}
                                onChange={(event) => {
                                  const newValue = event.target.value;
                                  setEmail(newValue);
                                }} name="Email" id='Email' required />
                              <label for="name" class="upm-label">Email</label>
                            </div>
                          </div>

                          <div className='upm-split-2'>
                            <div class="upm-form field">
                              <input type="password" class="upm-field" placeholder={"*******************************"}
                                defaultValue={"*****************"}
                                onChange={(event) => {
                                  const newValue = event.target.value;
                                  setNewPasswords(newValue)
                                }} name="Password" id='Password' required />
                              <label for="name" class="upm-label">Password</label>
                            </div>
                          </div>
                          <div className='upm-split-2'>
                            <div class="upm-form field">
                              <input type="input" class="upm-field" placeholder={user.lastName}
                                defaultValue={user.phone}
                                onChange={(event) => {
                                  const newValue = event.target.value;
                                  setNumber(newValue);
                                }} name="Phone-number" id='number' required />
                              <label for="name" class="upm-label">Phone-number</label>
                            </div>
                          </div>
                          <div className='upm-split-2'>
                            <div class="upm-form field">
                              <input type="input" class="upm-field" placeholder={user.lastName}
                                defaultValue={user.country}
                                onChange={(event) => {
                                  const newValue = event.target.value;
                                  setCountry(newValue);
                                }} name="Language" id='language' required />
                              <label for="name" class="upm-label">Language</label>
                            </div>
                          </div>
                          <div className='upm-split-3'>
                            <button className="upm-edit-button" onClick={() => {
                              updateInfo1();
                            }}>
                              <MdOutlineModeEdit className="upm-icon" size={40} />
                            </button>
                          </div>

                        </div>
                      </li>

                      <li>
                        <h6>General</h6>
                        <div className='upm-info'>
                          <div className='upm-split'>
                            <div class="upm-form field">
                              <input type="input" class="upm-field" defaultValue={user.studentId} placeholder="ID" name="ID" id='ID' required />
                              <label for="name" class="upm-label">ID</label>
                            </div>
                            <div class="upm-form field">
                              <input type="input" class="upm-field" placeholder="Username" defaultValue={user.username} onChange={(event) => {
                                const newValue = event.target.value;
                                setUsername(newValue)
                              }} name="Username" id='name' required />
                              <label for="name" class="upm-label">Username</label>
                            </div>
                          </div>
                          <div className='upm-split-2'>
                            <div class="upm-form field">
                              <input type="date" class="upm-field" placeholder="DOB" defaultValue={user.dateOfBirth} onChange={(event) => {
                                const newValue = event.target.value;
                                setDOB(newValue)
                              }} name="DOB" id='DOB' required />
                              <label for="name" class="upm-label">DOB</label>
                            </div>
                          </div>

                          <div className='upm-split-2'>
                            <div class="upm-form field">
                              <input type="input" class="upm-field" placeholder="Country" defaultValue={user.country} onChange={(event) => {
                                const newValue = event.target.value;
                                setCountry(newValue)
                              }} name="Country" id='country' required />
                              <label for="name" class="upm-label">Country</label>
                            </div>
                          </div>
                          <div className='upm-split-2'>
                            <div class="upm-form field">
                              <textarea type="input" class="upm-field" placeholder="About" defaultValue={user.bio} onChange={(event) => {
                                const newValue = event.target.value;
                                setBio(newValue)
                              }} name="About" id='upm-about' required />
                              <label for="name" class="upm-label">About</label>
                            </div>
                          </div>
                          <div className='upm-split-3'>
                            <button className="upm-edit-button" onClick={() => {
                              updateInfo2();
                            }}>
                              <MdOutlineModeEdit className="upm-icon" size={40} />
                            </button>
                          </div>
                        </div>
                      </li>

                      <li>
                        <h6>Experiences</h6>
                        <div className='upm-info'>
                          <div className='upm-split'>
                            <div class="upm-form upm-field2">
                              <div class="upm-row1-container">
                                <div class="upm-box upm-cyan">
                                  <span className="upm-split-4">
                                    <h2>Beginner</h2>
                                    <p>By clicking this you're basically saying that you don't know much about coding</p>
                                  </span>
                                  <span className="upm-split-5">
                                    <button className="upm-book" type="submit" onClick={() => {
                                      setRole("Basic");
                                      updateRole();
                                    }}><BiBookBookmark size={50} /></button>
                                  </span>
                                </div>
                              </div>
                              <div class="upm-row1-container">
                                <div class="upm-box upm-box-down upm-cyan">
                                  <span className="upm-split-4">
                                    <h2>Intermediate</h2>
                                    <p>By clicking this you're basically saying that you know some stuff about coding</p>
                                  </span>
                                  <span className="upm-split-5">
                                    <button className="upm-book" type="submit" onClick={() => {
                                      setRole("Intermediate");
                                      updateRole();
                                    }}><BiBookBookmark size={50} /></button>
                                  </span>
                                </div>
                              </div>
                              <div class="upm-row1-container">
                                <div class="upm-box upm-box-down upm-cyan">
                                  <span className="upm-split-4">
                                    <h2>Advanced</h2>
                                    <p>By clicking this you're basically saying that you you're a professional at code</p>
                                  </span>
                                  <span className="upm-split-5">
                                    <button className="upm-book" type="submit" onClick={() => {
                                      setRole("Advanced");
                                      updateRole();
                                    }}><BiBookBookmark size={50} /></button>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li>
                        <h6>Achievments</h6>
                        <div className='upm-info'>
                          <div className='upm-split'>
                            <div class="upm-form2 upm-field2">
                              <div class="upm-avatar-container">
                                <div class="upm-avatar">
                                  <img src={basic} />
                                </div>
                                <AiFillLock className="upm-ic-lock" size={50} />
                              </div>
                              <div class="upm-avatar-container">
                                <div class="upm-avatar">
                                  <img src={intermediate} />
                                </div>
                                <AiFillLock className="upm-ic-lock" size={50} />
                              </div>
                              <div class="upm-avatar-container">
                                <div class="upm-avatar">
                                  <img src={advanced} />
                                </div>
                                <AiFillLock className="upm-ic-lock" size={50} />
                              </div><div class="upm-avatar-container">
                                <div class="upm-avatar">
                                  <img src={rare} />
                                </div>
                                <AiFillLock className="upm-ic-lock" size={50} />
                              </div><div class="upm-avatar-container">
                                <div class="upm-avatar">
                                  <img src={rare2} />
                                </div>
                                <AiFillLock className="upm-ic-lock" size={50} />
                              </div><div class="upm-avatar-container">
                                <div class="upm-avatar">
                                  <img src={nft} />
                                </div>
                                <AiFillLock className="upm-ic-lock" size={50} />
                              </div>
                            </div>

                          </div>
                        </div>
                      </li>

                      <li>
                        <h6>Socials</h6>
                        <div className='upm-info'>
                          <div className='upm-split'>
                            <div class="upm-form field">
                              <input type="input" class="upm-field" defaultValue={user.twitter} placeholder={user.firstName}
                                onChange={(event) => {
                                  const newValue = event.target.value;
                                  setTwit(newValue);
                                }} name="Firstname" id='name' required />
                              <label for="name" class="upm-label">Twitter</label>
                            </div>
                            <div className="upm-form field">
                              <input type="input" class="upm-field" defaultValue={user.linkedIn} placeholder={user.lastName}
                                onChange={(event) => {
                                  const newValue = event.target.value;
                                  setLink(newValue);
                                }} name="Lastname" id='name' required />
                              <label for="name" class="upm-label">LinkedIn</label>
                            </div>
                          </div>
                          <div className='upm-split-2'>
                            <div class="upm-form field">
                              <input type="input" class="upm-field" defaultValue={user.instagram} placeholder="sad"
                                onChange={(event) => {
                                  const newValue = event.target.value;
                                  setInsta(newValue);
                                }} name="Email" id='Email' required />
                              <label for="name" class="upm-label">Instagram</label>
                            </div>
                          </div>
                          <div className='upm-split-3'>
                            <button className="upm-edit-button" onClick={() => {
                              updateInfo3();
                            }}>
                              <MdOutlineModeEdit className="upm-icon" size={40} />
                            </button>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <input type="file" onChange={e => setFile2(e.target.files[0])} ref={fileInput2} style={{ display: "none" }} /> */}
          </div>
          {/* <div className="upm-card-container-2">
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
                          placeholder={user.username}
                          onChange={(event) => {
                            const newValue = event.target.value;
                            setUsername(newValue);
                          }}
                        ></input>
                      </div>
                      <button className="upm-edit-button" onClick={updateUsername} >
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
                          placeholder={"*******************************"}
                          onChange={(event) => {
                            const newValue = event.target.value;
                            setNewPasswords(newValue)
                          }}
                        />
                      </div>
                      <button className="upm-edit-button" onClick={updatePassword}>
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
                          <RiMapPin2Line
                            class="fa fa-envelope"
                            aria-hidden="true"
                          ></RiMapPin2Line>
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
                <h2>Experience</h2>
              </li>
              <li>
                <p>
                  Select a theme of your choice<a href="/">Find more</a>
                </p>
              </li>
              <li>
                <div class="upm-outer-form">
                  <div class="upm-form-container">
                    <div class="upm-form-rad">
                      <div class="upm-form-input-holder-rad">
                        <button className="upm-roles" id="basic" type="submit" onClick={() => {
                          setRole("Basic");
                          updateRole();
                        }}>Basic</button>
                      </div>
                      <div class="upm-form-input-holder-rad">
                        <button className="upm-roles" id="beginner" type="submit" onClick={() => {
                          setRole("Beginner");
                          updateRole();
                        }}>Beginner</button>
                      </div>

                      <div class="upm-form-input-holder-rad">
                        <button className="upm-roles" type="Advanced" onClick={() => {
                          setRole("Advanced");
                          updateRole();
                        }}>Advanced</button>
                      </div>
                      <div class="upm-form-input-holder-rad">
                        <button className="upm-roles" type="submit" id="Master" onClick={() => {
                          setRole("Master");
                          updateRole();
                        }}>Master</button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </div>
          </div>


          <div className="upm-card-container-2">
            <div className="upm-card">
              <li>
                <h2>Social Media</h2>
              </li>
              <li>
                <p>
                  Add social media links<a href="/">Find more</a>
                </p>
              </li>
              <li>
                <div class="upm-outer-form">
                  <div class="upm-form-container">
                    <label>Twitter</label>
                    <div class="upm-form">
                      <div class="upm-form-input-holder">
                        <span class="icon">
                          <CiTwitter
                            class="fa fa-envelope"
                            aria-hidden="true"
                          ></CiTwitter>
                        </span>
                        <input
                          type="text"
                          placeholder={user.twitter}
                          onChange={(event) => {
                            const newValue = event.target.value;
                            setTwit(newValue);
                          }}
                        ></input>
                      </div>
                      <button className="upm-edit-button" onClick={updateTwit} >
                        <MdOutlineModeEdit className="upm-icon" size={40} />
                      </button>
                    </div>
                    <label>LinkedIn</label>
                    <div class="upm-form">
                      <div class="upm-form-input-holder">
                        <span class="icon">
                          <CiLinkedin
                            class="fa fa-envelope"
                            aria-hidden="true"
                          ></CiLinkedin>
                        </span>
                        <input
                          type="text"
                          placeholder={user.linkedIn}
                          onChange={(event) => {
                            const newValue = event.target.value;
                            setLink(newValue);
                          }}

                        />
                      </div>
                      <button className="upm-edit-button" onClick={updateLink}>
                        <MdOutlineModeEdit className="upm-icon" size={40} />
                      </button>
                    </div>
                    <label>Instagram</label>
                    <div class="upm-form">
                      <div class="upm-form-input-holder">
                        <span class="icon">
                          <AiOutlineInstagram
                            class="fa fa-envelope"
                            aria-hidden="true"
                          ></AiOutlineInstagram>
                        </span>
                        <input
                          type="text"
                          placeholder={user.instagram}
                          onChange={(event) => {
                            const newValue = event.target.value;
                            setInsta(newValue)
                          }}
                        />
                      </div>
                      <button className="upm-edit-button" onClick={updateInstagram} >
                        <MdOutlineModeEdit className="upm-icon" size={40} />
                      </button>
                    </div>
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
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default UPM;
