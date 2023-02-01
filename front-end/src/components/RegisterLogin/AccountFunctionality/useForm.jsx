import { useState, useEffect } from "react";
import axios from "axios";

const useForm = (callback, validateForm) => {
  const firstName = "";
  const lastName = "";
  const dateOfBirth = "";
  const country = "";
  const phoneNumber = "";
  const emailAddress = "";
  const studentPassword = "";
  const repPassword = "";

  //fields in sign up form
  //values set to empty
  const [values, setValues] = useState({
    firstName,
    lastName,
    dateOfBirth,
    country,
    phoneNumber,
    emailAddress,
    studentPassword,
    repPassword,
  });

  //this is used to check errors for the sign up form
  const [errors, setErrors] = useState({});

  //check if the student has registered or not
  //set to false by default
  //set to true when no errors in form when clicking the sign up button
  const [isRegistered, setIsRegistered] = useState(false);

  const handleChange = (e) => {
    //get the value from user input
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //check the values in the signup form
    if (setErrors(validateForm(values))) {
      axios
        .post("/user", {
          firstName: values.firstName,
          lastName: values.lastName,
          dateOfBirth: values.dateOfBirth,
          country: values.country,
          phoneNumber: values.phoneNumber,
          emailAddress: values.emailAddress,
          studentPassword: values.studentPassword,
        })
        .then((response) => {
          console.log(response);
          if (response.status === 201) {
            alert("Registered Successfully!!!");
          }
        })
        // .then(() => {
        //   values.firstName = "";
        //   values.lastName = "";
        //   values.dateOfBirth = "";
        //   values.country = "";
        //   values.phoneNumber = "";
        //   values.emailAddress = "";
        //   values.studentPassword = "";
        // })
        .catch((error) => {
          console.log(error);
          alert("Registration not sent!!!");
        });
    }
    //change the value to true
    setIsRegistered(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isRegistered) {
      // callback();
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
