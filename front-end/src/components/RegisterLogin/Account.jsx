import React, { useEffect, useState } from "react";
import registerLogo from "../../images/login-register-icons/undraw_launching_re_tomg.svg";
import loginLogo from "../../images/login-register-icons/undraw_secure_login_pdn4.svg";
import { Link, useOutletContext } from "react-router-dom";
import "../../Styles/RegisterLoginStyles/Account.css";
import useForm from "./AccountFunctionality/useForm";
import validateSignUpForm from "../RegisterLogin/AccountFunctionality/validateSignUpForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Account() {
  const { handleChange, values, handleSubmit, errors } =
    useForm(validateSignUpForm);

  const today = new Date().toISOString().slice(0, 10);
  // const [timeRemaining, setTimeRemaining] = useState(0);
  // const [timerActive, setTimerActive] = useState(false);
  const [invalidAttempts, setInvalidAttempts] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [validLoginAttempts, setValidLoginAttempts] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginErrorMessages, setLoginErrorMessages] = useState("");
  const [loginSuccess, setLoginSuccess] = useState("");
  const regexEmail = "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$";
  const baseUrl = "http://localhost:8080/login";
  const [loggedInUser, setLoggedinUser] = useOutletContext();
  const navigate = useNavigate();

  // useEffect(() => {
  //   let interval;
  //   if (timerActive) {
  //     interval = setInterval(() => {
  //       setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 1);
  //     }, 1000);
  //   }
  //   return () => clearInterval(interval);
  // }, [timerActive]);

  useEffect(() => {
    // decrement value of interval every second (from 30 sec until it reaches zero)
    const interval = setInterval(() => {
      if (timeRemaining > 0) {
        setTimeRemaining(timeRemaining - 1);
      }
    }, 1000);

    // clear the interval value when reaching zero
    return () => clearInterval(interval);
  }, [timeRemaining]);

  const login = () => {
    navigate("/");
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setLoginErrorMessages("Email address and password required!!!");
    } else if (!email.match(regexEmail)) {
      setLoginErrorMessages("Invalid email address!!!");
    } else if (password.length < 8) {
      setLoginErrorMessages("Invalid password!!!");
    } else {
      axios
        .post(baseUrl, { email, password })
        .then((res) => {
          if (res.status === 200) {
            const token = res.headers.authorization.split(" ")[1];
            if (token !== null) {
              console.log(res);
              console.log(token);
              localStorage.setItem("jwt", token);
              setInvalidAttempts(0);
              setTimeRemaining(0);
              // setValidLoginAttempts(0);
              setLoginErrorMessages("");
              alert("You have logged in successfully!!!");
              setLoginSuccess("You have logged in successfully!!!");
              console.log("this is " + loggedInUser);
              setLoggedinUser(email);
              login();
            } else {
              // setValidLoginAttempts(validLoginAttempts + 1);
              setInvalidAttempts(invalidAttempts + 1);
              setTimeRemaining(0);
              alert("Failed token!!!");
              setLoggedinUser("");
            }
          } else {
            // setValidLoginAttempts(validLoginAttempts + 1);
            setInvalidAttempts(invalidAttempts + 1);
            setTimeRemaining(0);
            alert("Login unsuccessful!!!");
            setLoggedinUser("");
          }
        })
        .then(() => {
          // setValidLoginAttempts(0);
          setInvalidAttempts(0);
          setTimeRemaining(0);
          setLoginErrorMessages("");
          setEmail("");
          setPassword("");
        })
        .catch((err) => {
          console.log(err);
          // setValidLoginAttempts(validLoginAttempts + 1);
          setInvalidAttempts(invalidAttempts + 1);
          setInvalidAttempts(0);
          alert("PROBLEM WITH LOGIN!!!");
          setLoggedinUser("");
        });
      if (invalidAttempts >= 2) {
        setInvalidAttempts(0);
        setTimeRemaining(30);
      }
    }

    // }
  };

  // const panelAnimation = () => {
  //   const sign_in_btn = document.querySelector("#sign-in-btn");
  //   const sign_up_btn = document.querySelector("#sign-up-btn");
  //   const container = document.querySelector(".account-container");

  //   sign_up_btn.addEventListener("click", () => {
  //     container.classList.add("sign-up-mode");
  //   });

  //   sign_in_btn.addEventListener("click", () => {
  //     container.classList.remove("sign-up-mode");
  //   });
  // };

  // useState for slide in animation
  const [isSignUpClick, setIsSignUpClick] = useState(false);

  const signUpBtn = () => {
    setIsSignUpClick(true);
  };

  const signInBtn = () => {
    setIsSignUpClick(false);
  };

  const [no, setNo] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const passRegexWeak = /[a-z]/;
  const passRegexMedium = /\d+/;
  const passRegexStrong = /.[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;

  function checkPasswordStrength() {
    if (password !== "") {
      if (
        password.length <= 3 &&
        (password.match(passRegexWeak) ||
          password.match(passRegexMedium) ||
          password.match(passRegexStrong))
      )
        setNo(1);
      if (
        password.length >= 6 &&
        ((password.match(passRegexWeak) && password.match(passRegexMedium)) ||
          (password.match(passRegexMedium) &&
            password.match(passRegexStrong)) ||
          (password.match(passRegexWeak) && password.match(passRegexStrong)))
      )
        setNo(2);
      if (
        password.length >= 6 &&
        password.match(passRegexWeak) &&
        password.match(passRegexMedium) &&
        password.match(passRegexStrong)
      )
        setNo(3);
    } else {
      setNo(null);
    }
  }

  // const indicator = document.querySelector(".pass-indicator");
  // const input = document.querySelector(".pass");
  // const weak = document.querySelector(".weak");
  // const medium = document.querySelector(".medium");
  // const strong = document.querySelector(".strong");
  // const text = document.querySelector(".pass-text");
  // const showPass = document.querySelector(".show-pass");
  // var passRegexWeak = /[a-z]/;
  // var passRegexMedium = /\d+/;
  // var passRegexStrong = /.[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
  // var no;

  // function passwordIndicator() {
  //   if (input.value !== "") {
  //     indicator.style.display = "block";
  //     indicator.style.display = "flex";
  //     if (
  //       input.value.length <= 3 &&
  //       (input.value.match(passRegexWeak) ||
  //         input.value.match(passRegexMedium) ||
  //         input.value.match(passRegexStrong))
  //     )
  //       no = 1;
  //     if (
  //       input.value.length >= 6 &&
  //       ((input.value.match(passRegexWeak) &&
  //         input.value.match(passRegexMedium)) ||
  //         (input.value.match(passRegexMedium) &&
  //           input.value.match(passRegexStrong)) ||
  //         (input.value.match(passRegexWeak) &&
  //           input.value.match(passRegexStrong)))
  //     )
  //       no = 2;
  //     if (
  //       input.value.length >= 6 &&
  //       input.value.match(passRegexWeak) &&
  //       input.value.match(passRegexMedium) &&
  //       input.value.match(passRegexStrong)
  //     )
  //       no = 3;
  //     if (no === 1) {
  //       weak.classList.add("active");
  //       text.style.display = "block";
  //       text.textContent = "Your password is too weak";
  //       text.classList.add("weak");
  //     }
  //     if (no === 2) {
  //       medium.classList.add("active");
  //       text.textContent = "Your password is medium";
  //       text.classList.add("medium");
  //     } else {
  //       medium.classList.remove("active");
  //       text.classList.remove("medium");
  //     }
  //     if (no === 3) {
  //       weak.classList.add("active");
  //       medium.classList.add("active");
  //       strong.classList.add("active");
  //       text.textContent = "Your password is strong";
  //       text.classList.add("strong");
  //     } else {
  //       strong.classList.remove("active");
  //       text.classList.remove("strong");
  //     }
  //     showPass.style.display = "block";
  //     showPass.onclick = function () {
  //       if (input.type === "password") {
  //         input.type = "text";
  //         showPass.textContent = "HIDE";
  //         showPass.style.color = "#acacac";
  //       } else {
  //         input.type = "password";
  //         showPass.textContent = "SHOW";
  //         showPass.style.color = "#000";
  //       }
  //     };
  //   } else {
  //     indicator.style.display = "none";
  //     text.style.display = "none";
  //     showPass.style.display = "none";
  //   }
  // }

  return (
    <div className="body">
      <div
        className={`account-container ${isSignUpClick ? "sign-up-mode" : ""}`}
      >
        <div className="forms-container">
          <div className="signin-signup">
            {/* Signin/login form which contains email and password */}
            <form
              className="sign-in-form"
              noValidate
              onSubmit={handleLoginSubmit}
            >
              <h2 className="form-title">Sign in</h2>
              {loginSuccess ? (
                <p className="loginSuccess">{loginSuccess}</p>
              ) : (
                loginErrorMessages && <p>{loginErrorMessages}</p>
              )}
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>
              {/* Redirect to home page after login */}
              {/* <Link to="/"> */}
              <input
                type="submit"
                value="Login"
                className="account-btn solid"
              />
              {/* show reset timer unless it reaches zero */}
              {timeRemaining > 0 && (
                <p>
                  Please wait {timeRemaining} seconds before trying to sign in
                  again.
                </p>
              )}
              {/* <p>
                {timerActive
                  ? `Time remaining: ${timeRemaining}`
                  : "Timer not started"}
              </p> */}
              {/* </Link> */}
              {/* Link to reset password form when user forgets password */}
              <Link to="/resetPassword" className="forgot">
                {/* <a href="/" className="forgot"> */}
                Forgot your password?
                {/* </a> */}
              </Link>
            </form>

            {/* Signup form which contains name, dob, country, phone, email and password */}
            <form
              // action="#"
              className="sign-up-form"
              noValidate
              onSubmit={handleSubmit}
            >
              <h2 className="form-title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  placeholder="First Name*"
                />
              </div>
              {errors.firstName && <p>{errors.firstName}</p>}
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  placeholder="Last Name*"
                />
              </div>
              {errors.lastName && <p>{errors.lastName}</p>}
              <div className="input-field">
                <i className="fas fa-calendar-alt"></i>
                <input
                  className="date"
                  type="date"
                  name="dob"
                  // min={minDate}
                  max={today}
                  value={values.dob}
                  onChange={handleChange}
                  placeholder="Date of Birth*"
                />
              </div>
              {errors.dob && <p>{errors.dob}</p>}
              <div className="input-field">
                <i className="fas fa-globe-americas"></i>
                <input
                  type="text"
                  name="country"
                  value={values.country}
                  onChange={handleChange}
                  placeholder="Country*"
                />
              </div>
              {errors.country && <p>{errors.country}</p>}
              <div className="input-field">
                <i className="fas fa-phone"></i>
                <input
                  type="text"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  placeholder="Phone Number*"
                />
              </div>
              {errors.phone && <p>{errors.phone}</p>}
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="Email*"
                />
              </div>
              {errors.email && <p>{errors.email}</p>}
              <div className="input-field">
                <i className="fas fa-lock"></i>
                {/* <input
                  className="pass"
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onKeyUp={passwordIndicator}
                  placeholder="Password*"
                /> */}
                <input
                  className="pass"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onKeyUp={checkPasswordStrength}
                  placeholder="Password*"
                />
                <span
                  className="show-pass"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <i
                    className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}
                  ></i>
                  {/* {showPassword ? "HIDE" : "SHOW"} */}
                </span>
                {/* <span className="show-pass">SHOW</span> */}
              </div>
              {password && (
                <div className="pass-indicator" style={{ display: "flex" }}>
                  <div className={`weak ${no === 1 ? "active" : ""}`}></div>
                  <div className={`medium ${no === 2 ? "active" : ""}`}></div>
                  <div className={`strong ${no === 3 ? "active" : ""}`}></div>
                </div>
              )}
              {no === 1 && (
                <div className="pass-text weak">Your password is too weak</div>
              )}
              {no === 2 && (
                <div className="pass-text medium">Your password is medium</div>
              )}
              {no === 3 && (
                <div className="pass-text strong">Your password is strong</div>
              )}
              {/* <div className="pass-indicator">
                <span className="weak"></span>
                <span className="medium"></span>
                <span className="strong"></span>
              </div>
              <div className="pass-text">Yours password is too weak</div> */}
              {errors.password && <p>{errors.password}</p>}
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Password*"
                />
              </div>
              {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
              {/* Link to confirmation page after sign up */}
              {/* <Link to="/confirmAccount"> */}
              <input type="submit" className="account-btn" value="Sign up" />
              {/* </Link> */}
            </form>
          </div>
        </div>

        {/* Panel with link to sign up form */}
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="panel-content">
              <h3>New here ?</h3>
              <p>
                Hello, tech friend. Please click here to create an account and
                start journey with us!
              </p>
              <button
                className="account-btn transparent"
                id="sign-up-btn"
                onClick={signUpBtn}
              >
                Sign up
              </button>
            </div>
            <img src={registerLogo} className="image" alt="sign up logo" />
          </div>

          {/* Panel with link to signin/login form */}
          <div className="panel right-panel">
            <div className="panel-content">
              <h3>One of us ?</h3>
              <p>
                Welcome back, tech friend. To keep connected with us please
                click here to sign in with your personal info!
              </p>
              <button
                className="account-btn transparent"
                id="sign-in-btn"
                onClick={signInBtn}
              >
                Sign in
              </button>
            </div>
            <img src={loginLogo} className="image" alt="sign in logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
