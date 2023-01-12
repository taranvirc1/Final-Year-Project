import React from "react";
import { Link } from "react-router-dom";
import forgotPassword from "../../images/login-register-icons/forgot_password.svg";
import "../../Styles/RegisterLoginStyles/ResetPassword.css";

function ResetPassword() {
  return (
    <div className="body">
      <div class="account-container">
        <div class="forms-container">
          <div class="reset">
            <form action="#" class="sign-in-form">
              <h2 class="form-title">Reset Password</h2>
              <div class="input-field">
                <i class="fas fa-envelope"></i>
                <input type="email" placeholder="Email" />
              </div>
              <Link to="/newPassword">
                <input
                  type="submit"
                  value="Send Reset Email"
                  class="account-btn"
                />
              </Link>
            </form>
          </div>
        </div>

        <div class="reset-panels-container">
          <div class="reset-panel reset-left-panel">
            <div class="reset-panel-content">
              <h3>Forgot your password ?</h3>
              <p>
                No problem, tech friend. Just enter your email and we'll send
                you an reset email!
              </p>
            </div>
            <img src={forgotPassword} class="image" alt="sign up logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
