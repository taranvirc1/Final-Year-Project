import React from "react";
import newPassword from "../../images/login-register-icons/reset_email.svg";
import { Link } from "react-router-dom";

function NewPassword() {
  return (
    <div className="body">
      <div className="account-container">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="form-title">New Password</h2>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="New Password" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Confirm Password" />
              </div>
              <Link to="/account">
                <input type="submit" class="btn" value="Change" />
              </Link>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="panel-content">
              <h3>Have received a reset password email?</h3>
              <p>
                Jut enter your new password here and you'll have access to your
                account once again!
              </p>
            </div>
            <img src={newPassword} className="image" alt="sign in logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewPassword;
