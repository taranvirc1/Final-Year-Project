import { useState, useEffect } from "react";

const useForm = (callback, validateForm) => {
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
    repPassword: "",
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
    setErrors(validateForm(values));
    //change the value to true
    setIsRegistered(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isRegistered) {
      callback();
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
