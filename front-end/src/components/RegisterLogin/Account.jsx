import React from "react";
import registerLogo from "../../images/login-register-icons/undraw_launching_re_tomg.svg";
import loginLogo from "../../images/login-register-icons/undraw_secure_login_pdn4.svg";
import { Link } from "react-router-dom";
import "../../Styles/RegisterLoginStyles/Account.css";

function Account() {
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

  return (
    <div className="body">
      <div class="account-container">
        <div class="forms-container">
          <div class="signin-signup">
            {/* Signin/login form which contains email and password */}
            <form action="#" class="sign-in-form">
              <h2 class="form-title">Sign in</h2>
              <div class="input-field">
                <i class="fas fa-envelope"></i>
                <input type="text" placeholder="Email Address" />
              </div>
              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              {/* Redirect to home page after login */}
              <Link to="/">
                <input type="submit" value="Login" class="account-btn solid" />
              </Link>
              {/* Link to reset password form when user forgets password */}
              <Link to="/resetPassword">
                <a href="/" className="forgot">
                  Forgot your password?
                </a>
              </Link>
            </form>

            {/* Signup form which contains name, dob, country, phone, email and password */}
            <form action="#" class="sign-up-form">
              <h2 class="form-title">Sign up</h2>
              <div class="input-field">
                <i class="fas fa-user"></i>
                <input type="text" placeholder="First Name*" />
              </div>
              <div class="input-field">
                <i class="fas fa-user"></i>
                <input type="text" placeholder="Last Name*" />
              </div>
              <div class="input-field">
                <i class="fas fa-calendar-alt"></i>
                <input
                  className="date"
                  type="date"
                  placeholder="Date of Birth*"
                />
              </div>
              <div class="input-field">
                <i class="fas fa-globe-americas"></i>
                <input type="text" placeholder="Country*" />
              </div>
              <div class="input-field">
                <i class="fas fa-phone"></i>
                <input type="text" placeholder="Phone Number*" />
              </div>
              <div class="input-field">
                <i class="fas fa-envelope"></i>
                <input type="email" placeholder="Email*" />
              </div>
              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Password*" />
              </div>
              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Confirm Password*" />
              </div>
              {/* Link to confirmation page after sign up */}
              <Link to="/confirmAccount">
                <input type="submit" class="account-btn" value="Sign up" />
              </Link>
            </form>
          </div>
        </div>
        
        {/* Panel with link to sign up form */}
        <div class="panels-container">
          <div class="panel left-panel">
            <div class="panel-content">
              <h3>New here ?</h3>
              <p>
                Hello, tech friend. Please click here to create an account and
                start journey with us!
              </p>
              <button
                class="account-btn transparent"
                id="sign-up-btn"
                onClick={panelAnimation}
              >
                Sign up
              </button>
            </div>
            <img src={registerLogo} class="image" alt="sign up logo" />
          </div>

          {/* Panel with link to signin/login form */}
          <div class="panel right-panel">
            <div class="panel-content">
              <h3>One of us ?</h3>
              <p>
                Welcome back, tech friend. To keep connected with us please
                click here to sign in with your personal info!
              </p>
              <button
                class="account-btn transparent"
                id="sign-in-btn"
                onClick={panelAnimation}
              >
                Sign in
              </button>
            </div>
            <img src={loginLogo} class="image" alt="sign in logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
