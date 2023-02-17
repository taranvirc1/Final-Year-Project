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
    dateOfBirth: "",
    country: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //this is used to check errors for the sign up form
  const [errors, setErrors] = useState({});

  //check if the student has registered or not
  //set to false by default
  //set to true when no errors in form when clicking the sign up button
  // const [isRegistered, setIsRegistered] = useState(false);

  //take user to login after registration
  const goToLogin = () => {
    window.location.reload(false);
    navigate("/account");
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
    const {
      firstName,
      lastName,
      dateOfBirth,
      country,
      phone,
      email,
      password,
    } = values;
    const user = {
      firstName,
      lastName,
      dateOfBirth,
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
          // alert("Registered Successfully!!!");
          setValues({
            firstName: "",
            lastName: "",
            dateOfBirth: "",
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
    //change the value to true
    // setIsRegistered(true);
  };

  // useEffect(() => {
  //   if (Object.keys(errors).length === 0 && isRegistered) {
  //     // callback();
  //   }
  // }, [errors]);

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
