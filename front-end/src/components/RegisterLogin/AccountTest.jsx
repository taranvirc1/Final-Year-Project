import React, { useState } from "react";
import registerLogo from "../../images/login-register-icons/undraw_launching_re_tomg.svg";
import loginLogo from "../../images/login-register-icons/undraw_secure_login_pdn4.svg";
import { Link } from "react-router-dom";
import "../../Styles/RegisterLoginStyles/Account.css";
import axios from "axios";
// import useForm from "./AccountFunctionality/useForm";
// import validateSignUpForm from "./AccountFunctionality/validateSignUpForm";

function AccountTest() {
  //Registration
  const [firstName, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [vFirstName, setVFirstName] = useState("");
  const [vLastname, setVLastName] = useState("");
  const [vDateOfBirth, setVDateOfBirth] = useState("");
  const [vCountry, setVCountry] = useState("");
  const [vPhone, setVPhone] = useState("");
  const [vEmail, setVEmail] = useState("");
  const [vPassword, setVPassword] = useState("");
  const [vConfirmPassword, setVConfirmPassword] = useState("");

  // const validateRegistration = () => {
  //   if()
  // };

  //fields in sign up form
  //values set to empty
  // const [values, setValues] = useState({
  //   firstName: "",
  //   lastName: "",
  //   dateOfBirth: "",
  //   country: "",
  //   phone: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  // });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      firstName,
      lastname,
      dateOfBirth,
      country,
      phone,
      email,
      password,
    };
    await axios
      .post("http://localhost:8080/user", JSON.stringify({ user }), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          alert("Registered Successfully!!!");
        }
      })
      .then(() => {
        setFirstName("");
        setLastName("");
        setDateOfBirth("");
        setCountry("");
        setPhone("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      })
      .catch((error) => {
        console.log(user);
        console.log(error);
        alert("Registration not sent!!!");
      });
    //change the value to true
    // setIsRegistered(true);
  };

  // const handleChange = (e) => {
  //   //get the value from user input
  //   const { name, value } = e.target;
  //   setValues({
  //     ...values,
  //     [name]: value,
  //   });
  // };

  //Login
  const [validLoginAttempts, setValidLoginAttempts] = useState(0);
  const [validEmail, setValidEmail] = useState("");
  const [validPassword, setValidPassword] = useState("");
  const [loginErrorMessages, setLoginErrorMessages] = useState("");
  const [loginSuccess, setLoginSuccess] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (validLoginAttempts >= 2) {
      setLoginErrorMessages(
        "Maximum login attempts reached. Please try again later!"
      );
      return;
    }

    if (
      validEmail === "2007048@brunel.ac.uk" &&
      validPassword === "PassWorD20.2*2."
    ) {
      setLoginSuccess("You have logged in successfully!!!");
      setLoginErrorMessages("");
      setValidLoginAttempts(0);
    } else {
      setLoginErrorMessages("Incorrect email address or password!");
      setValidLoginAttempts(validLoginAttempts + 1);
    }
  };

  const panelAnimation = () => {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".account-container");

    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });
  };

  const indicator = document.querySelector(".pass-indicator");
  const input = document.querySelector(".pass");
  const weak = document.querySelector(".weak");
  const medium = document.querySelector(".medium");
  const strong = document.querySelector(".strong");
  const text = document.querySelector(".pass-text");
  const showPass = document.querySelector(".show-pass");
  var passRegexWeak = /[a-z]/;
  var passRegexMedium = /\d+/;
  var passRegexStrong = /.[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
  var no;

  function passwordIndicator() {
    if (input.value !== "") {
      indicator.style.display = "block";
      indicator.style.display = "flex";
      if (
        input.value.length <= 3 &&
        (input.value.match(passRegexWeak) ||
          input.value.match(passRegexMedium) ||
          input.value.match(passRegexStrong))
      )
        no = 1;
      if (
        input.value.length >= 6 &&
        ((input.value.match(passRegexWeak) &&
          input.value.match(passRegexMedium)) ||
          (input.value.match(passRegexMedium) &&
            input.value.match(passRegexStrong)) ||
          (input.value.match(passRegexWeak) &&
            input.value.match(passRegexStrong)))
      )
        no = 2;
      if (
        input.value.length >= 6 &&
        input.value.match(passRegexWeak) &&
        input.value.match(passRegexMedium) &&
        input.value.match(passRegexStrong)
      )
        no = 3;
      if (no === 1) {
        weak.classList.add("active");
        text.style.display = "block";
        text.textContent = "Your password is too weak";
        text.classList.add("weak");
      }
      if (no === 2) {
        medium.classList.add("active");
        text.textContent = "Your password is medium";
        text.classList.add("medium");
      } else {
        medium.classList.remove("active");
        text.classList.remove("medium");
      }
      if (no === 3) {
        weak.classList.add("active");
        medium.classList.add("active");
        strong.classList.add("active");
        text.textContent = "Your password is strong";
        text.classList.add("strong");
      } else {
        strong.classList.remove("active");
        text.classList.remove("strong");
      }
      showPass.style.display = "block";
      showPass.onclick = function () {
        if (input.type === "password") {
          input.type = "text";
          showPass.textContent = "HIDE";
          showPass.style.color = "#acacac";
        } else {
          input.type = "password";
          showPass.textContent = "SHOW";
          showPass.style.color = "#000";
        }
      };
    } else {
      indicator.style.display = "none";
      text.style.display = "none";
      showPass.style.display = "none";
    }
  }

  return (
    <div className="body">
      <div className="account-container">
        <div className="forms-container">
          <div className="signin-signup">
            {/* Signin/login form which contains email and password */}
            <form
              className="sign-in-form"
              noValidate
              onSubmit={handleLoginSubmit}
            >
              <h2 className="form-title">Sign in</h2>
              {loginSuccess && <p className="loginSuccess">{loginSuccess}</p>}
              {loginErrorMessages && <p>{loginErrorMessages}</p>}
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input
                  type="text"
                  value={validEmail}
                  onChange={(e) => setValidEmail(e.target.value)}
                  placeholder="Email Address"
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  value={validPassword}
                  onChange={(e) => setValidPassword(e.target.value)}
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
                  // name="firstName"
                  // value={values.firstName}
                  // onChange={handleChange}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First Name*"
                />
              </div>
              {/* {errors.firstName && <p>{errors.firstName}</p>} */}
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  // name="lastName"
                  // value={values.lastName}
                  // onChange={handleChange}
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last Name*"
                />
              </div>
              {/* {errors.lastName && <p>{errors.lastName}</p>} */}
              <div className="input-field">
                <i className="fas fa-calendar-alt"></i>
                <input
                  className="date"
                  type="text"
                  // name="dateOfBirth"
                  // value={values.dateOfBirth}
                  // onChange={handleChange}
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  placeholder="Date of Birth*"
                />
              </div>
              {/* {errors.dateOfBirth && <p>{errors.dateOfBirth}</p>} */}
              <div className="input-field">
                <i className="fas fa-globe-americas"></i>
                <input
                  type="text"
                  // name="country"
                  // value={values.country}
                  // onChange={handleChange}
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder="Country*"
                />
              </div>
              {/* {errors.country && <p>{errors.country}</p>} */}
              <div className="input-field">
                <i className="fas fa-phone"></i>
                <input
                  type="text"
                  // name="phone"
                  // value={values.phone}
                  // onChange={handleChange}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone Number*"
                />
              </div>
              {/* {errors.phoneNumber && <p>{errors.phoneNumber}</p>} */}
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  // name="email"
                  // value={values.email}
                  // onChange={handleChange}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email*"
                />
              </div>
              {/* {errors.emailAddress && <p>{errors.emailAddress}</p>} */}
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  className="pass"
                  type="password"
                  // name="password"
                  // value={values.password}
                  // onChange={handleChange}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyUp={passwordIndicator}
                  placeholder="Password*"
                />
                <span className="show-pass">SHOW</span>
              </div>
              <div className="pass-indicator">
                <span className="weak"></span>
                <span className="medium"></span>
                <span className="strong"></span>
              </div>
              <div className="pass-text">Yours password is too weak</div>
              {/* {errors.studentPassword && <p>{errors.studentPassword}</p>} */}
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  // name="confirmPassword"
                  // value={values.confirmPassword}
                  // onChange={handleChange}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password*"
                />
              </div>
              {/* {errors.confirmPassword && <p>{errors.confirmPassword}</p>} */}
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
                onClick={panelAnimation}
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
                onClick={panelAnimation}
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

export default AccountTest;
