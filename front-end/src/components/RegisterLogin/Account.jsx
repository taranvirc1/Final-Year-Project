import React, { useEffect, useState } from "react";
import registerLogo from "../../images/login-register-icons/undraw_launching_re_tomg.svg";
import loginLogo from "../../images/login-register-icons/undraw_secure_login_pdn4.svg";
import { Link, useOutletContext } from "react-router-dom";
import "../../Styles/RegisterLoginStyles/Account.css";
import useForm from "./AccountFunctionality/useForm";
import validateSignUpForm from "../RegisterLogin/AccountFunctionality/validateSignUpForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Account() {
  const { handleChange, values, handleSubmit, errors, showErrors } =
    useForm(validateSignUpForm);

  const today = new Date().toISOString().slice(0, 10);
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

  useEffect(() => {
    // decrement value of interval every second (from 30 sec until it reaches zero)
    const interval = setInterval(() => {
      if (timeRemaining > 0) {
        // subtract 1 from the timer as long as it is greater than 0
        setTimeRemaining(timeRemaining - 1);
      }
      // 1 sec in miliseconds
    }, 1000);

    // clear the interval value when reaching zero
    return () => clearInterval(interval);
  }, [timeRemaining]);

  const login = () => {
    Swal.fire({
      title: "You have logged in successfully",
      confirmButtonText: "OK",
      confirmButtonColor: "#5995fd",
      icon: "success",
    }).then(() => {
      navigate("/");
    });
  };

  const error = () => {
    Swal.fire({
      title: "Login error",
      confirmButtonText: "OK",
      confirmButtonColor: "#ff0055",
      icon: "error",
    }).then(() => {});
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
              console.log(token);
              localStorage.setItem("jwt", token);
              setLoginErrorMessages("");
              setLoggedinUser(email);
              setTimeRemaining(null);
              login();
            } else {
              setValidLoginAttempts(validLoginAttempts + 1);
              error();
              setLoggedinUser("");
            }
          } else {
            setValidLoginAttempts(validLoginAttempts + 1);
            error();
            setLoggedinUser("");
          }
        })
        .then(() => {
          setTimeRemaining(null);
          setLoginErrorMessages("");
          setEmail("");
          setPassword("");
        })
        .catch((err) => {
          setValidLoginAttempts(validLoginAttempts + 1);
          error();
          setLoggedinUser("");
        });
      if (validLoginAttempts === 2) {
        setTimeRemaining(30);
      }
    }
  };

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
    if (values.password !== "") {
      if (
        values.password.length <= 3 &&
        (values.password.match(passRegexWeak) ||
          values.password.match(passRegexMedium) ||
          values.password.match(passRegexStrong))
      )
        setNo(1);
      if (
        values.password.length >= 6 &&
        ((values.password.match(passRegexWeak) &&
          values.password.match(passRegexMedium)) ||
          (values.password.match(passRegexMedium) &&
            values.password.match(passRegexStrong)) ||
          (values.password.match(passRegexWeak) &&
            values.password.match(passRegexStrong)))
      )
        setNo(1 && 2);
      if (
        values.password.length >= 6 &&
        values.password.match(passRegexWeak) &&
        values.password.match(passRegexMedium) &&
        values.password.match(passRegexStrong)
      )
        setNo(1 && 2 && 3);
    } else {
      setNo(null);
    }
  }

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
              {loginSuccess
                ? ""
                : loginErrorMessages && <p>{loginErrorMessages}</p>}
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
              {errors
                ? errors.firstName && showErrors && <p>{errors.firstName}</p>
                : ""}
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
              {errors
                ? errors.lastName && showErrors && <p>{errors.lastName}</p>
                : ""}
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
              {errors ? errors.dob && showErrors && <p>{errors.dob}</p> : ""}
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
              {errors
                ? errors.country && showErrors && <p>{errors.country}</p>
                : ""}
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
              {errors
                ? errors.phone && showErrors && <p>{errors.phone}</p>
                : ""}
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
              {errors
                ? errors.email && showErrors && <p>{errors.email}</p>
                : ""}
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
              {values.password && (
                <div className="pass-indicator">
                  <span className={`weak ${no === 1 ? "active" : ""}`}></span>
                  <span className={`medium ${no === 2 ? "active" : ""}`}></span>
                  <span className={`strong ${no === 3 ? "active" : ""}`}></span>
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
              {errors
                ? errors.password && showErrors && <p>{errors.password}</p>
                : ""}
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
              {errors
                ? errors.confirmPassword &&
                  showErrors && <p>{errors.confirmPassword}</p>
                : ""}
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
