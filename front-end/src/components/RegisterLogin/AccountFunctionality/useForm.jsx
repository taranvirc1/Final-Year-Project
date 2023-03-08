import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useForm = (validateForm) => {
  const navigate = useNavigate();
  //fields in sign up form
  //values set to empty
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    country: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //this is used to check errors for the sign up form
  const [errors, setErrors] = useState({});

  //take user to login after registration
  const goToLogin = () => {
    navigate("/confirmAccount");
  };

  const handleChange = (e) => {
    //get the value from user input
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //check the values in the signup form
    setErrors(validateForm(values));
    const { firstName, lastName, dob, country, phone, email, password } =
      values;
    const user = {
      firstName,
      lastName,
      dob,
      country,
      phone,
      email,
      password,
    };
    await axios
      .post("http://localhost:8080/user", user)
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          alert("Registered successfully!!!");
          console.log(user);
          setValues({
            firstName: "",
            lastName: "",
            dob: "",
            country: "",
            phone: "",
            email: "",
            password: "",
            confirmPassword: "",
          });
          goToLogin();
        }
      })
      .catch(async (error) => {
        console.log(user);
        console.log(error);
        alert("Registration not sent!!!");
      });
  };

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
