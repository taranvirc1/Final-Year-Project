import React, { useState } from "react";
import newPassword from "../../images/login-register-icons/reset_email.svg";
import { Link } from "react-router-dom";
import "../../Styles/RegisterLoginStyles/NewPassword.css";

function NewPassword() {
  const [validPassword, setValidPassword] = useState("");
  const [validConfirmPassword, setValidConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [updateSuccess, setUpdateSuccess] = useState("");

  //use axios.patch to update password
  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    if (validConfirmPassword === validPassword) {
      setUpdateSuccess("Password has been reset successfully!");
      setErrorMessage("");
    }
    if (validPassword === "") {
      setErrorMessage("Password required!");
    } else if (validConfirmPassword === "") {
      setErrorMessage("Password confirmation required!");
    } else if (validConfirmPassword !== validPassword) {
      setErrorMessage("Passwords do not match!");
    }
  };

  return (
    <div className="body">
      <div className="account-container">
        <div className="forms-container">
          <div className="new">
            {/* Form that contains new password and confirm password fields */}
            <form
              className="sign-in-form"
              noValidate
              onSubmit={handleUpdateSubmit}
            >
              <h2 className="form-title">New Password</h2>
              {updateSuccess && <p className="emailSuccess">{updateSuccess}</p>}
              {errorMessage && <p>{errorMessage}</p>}
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  value={validPassword}
                  onChange={(e) => setValidPassword(e.target.value)}
                  placeholder="New Password"
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  value={validConfirmPassword}
                  onChange={(e) => setValidConfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
                />
              </div>
              {/* Redirect to login form */}
              {/* <Link to="/account"> */}
                <input type="submit" class="account-btn" value="Change" />
              {/* </Link> */}
            </form>
          </div>
        </div>

        <div className="new-panels-container">
          <div className="new-panel new-left-panel">
            <div className="new-panel-content">
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
