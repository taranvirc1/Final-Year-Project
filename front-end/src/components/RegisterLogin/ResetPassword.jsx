import React, { useState } from "react";
import forgotPassword from "../../images/login-register-icons/forgot_password.svg";
import "../../Styles/RegisterLoginStyles/ResetPassword.css";
import axios from "axios";
import Swal from "sweetalert2";

function ResetPassword() {
  const [email, setEmail] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [emailSuccess, setEmailSuccess] = useState("");
  // const baseUrl = "http://localhost:8080/forgot_password";

  const fireAlert = () => {
    Swal.fire({
      title: `An email has been sent to ${email} with instructions to reset password!!!`,
      icon: "success",
    }).then(() => {
      //
    });
  };

  const regexEmail = "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$";

  const handleEmailSubmit = (e) => {
    e.preventDefault();

    // if (email === "2007048@brunel.ac.uk") {
    //   setEmailSuccess(
    //     `An email has been sent to ${email} with instructions to reset password!!!`
    //   );
    //   setEmailErrorMessage("");
    // }
    if (email === "") {
      setEmailErrorMessage("Email Address required!");
    } else if (!email.match(regexEmail)) {
      setEmailErrorMessage(
        "The email address you entered is invalid. Please, try again!"
      );
    } else {
      axios
        .post("http://localhost:5000/api/student/forgot-password", { email })
        .then((res) => {
          console.log(res);
          console.log(email);
          if (res.status === 200) {
            // alert(`Found email address. We have sent an email to ${email}`);
            // setEmailSuccess(
            //   `An email has been sent to ${email} with instructions to reset password!!!`
            // );
            fireAlert();
            setEmail("");
          }
        })
        .catch((error) => {
          console.log(email);
          console.log(error);
          // alert("Email does not exist!!!");
          setEmailErrorMessage(
            "The email address you entered does not exist. Please, try again!"
          );
        });
    }
  };

  return (
    <div className="body">
      <div className="account-container">
        <div className="forms-container">
          <div className="reset">
            {/* Form that contains email address field */}
            <form
              className="sign-in-form"
              noValidate
              onSubmit={handleEmailSubmit}
            >
              <h2 className="form-title">Reset Password</h2>
              {emailSuccess ? (
                <p className="emailSuccess">{emailSuccess}</p>
              ) : (
                emailErrorMessage && <p>{emailErrorMessage}</p>
              )}
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address*"
                />
              </div>
              {/* Link to new password page */}
              {/* <Link to="/newPassword"> */}
              <input
                type="submit"
                value="Send Reset Email"
                className="account-btn"
              />
              {/* </Link> */}
            </form>
          </div>
        </div>

        <div className="reset-panels-container">
          <div className="reset-panel reset-left-panel">
            <div className="reset-panel-content">
              <h3>Forgot your password ?</h3>
              <p>
                No problem, tech friend. Just enter your email and we'll send
                you an reset email!
              </p>
            </div>
            <img src={forgotPassword} className="image" alt="sign up logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
