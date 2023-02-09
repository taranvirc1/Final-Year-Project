import { useState } from "react";
import axios from "axios";

const useForm = (validateForm) => {
  //fields in sign up form
  //values set to empty
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    country: "",
    phoneNumber: "",
    emailAddress: "",
    studentPassword: "",
    confirmPassword: "",
  });

  //this is used to check errors for the sign up form
  const [errors, setErrors] = useState({});

  //check if the student has registered or not
  //set to false by default
  //set to true when no errors in form when clicking the sign up button
  // const [isRegistered, setIsRegistered] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //check the values in the signup form
    setErrors(validateForm(values));
    const {
      firstName,
      lastName,
      dateOfBirth,
      country,
      phoneNumber,
      emailAddress,
      studentPassword,
    } = values;
    const user = {
      firstName,
      lastName,
      dateOfBirth,
      country,
      phoneNumber,
      emailAddress,
      studentPassword,
    };
    await axios
      .post("http://localhost:8080/user", user)
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          alert("Registered Successfully!!!");
        }
      })
      .catch(async (error) => {
        console.log(user);
        console.log(error);
        alert("Registration not sent!!!");
      });
    //change the value to true
    // setIsRegistered(true);
  };

  const handleChange = (e) => {
    //get the value from user input
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  // useEffect(() => {
  //   if (Object.keys(errors).length === 0 && isRegistered) {
  //     // callback();
  //   }
  // }, [errors]);

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
