function validateSignUpForm(values) {
  let errors = {};

  const regexEmail = "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$";

  //Error handling for First Name
  if (!values.firstName.trim()) {
    errors.firstName = "First Name required!";
  } else if (values.firstName.length < 3) {
    errors.firstName =
      "Invalid first name. Must be at least three characters long.";
  }

  //Error handling for Last Name
  if (!values.lastName.trim()) {
    errors.lastName = "Last Name required!";
  } else if (values.lastName.length < 3) {
    errors.lastName =
      "Invalid last name. Must be at least three characters long.";
  }

  //Error handling for Date of Birth
  if (!values.dob) {
    errors.dob = "Date of Birth required!";
  }

  //Error handling for Country
  if (!values.country) {
    errors.country = "Country required!";
  } else if (values.country.length < 3) {
    errors.country =
      "Invalid country name. Must be at least three characters long.";
  }

  //Error handling for Phone Number
  if (!values.phone) {
    errors.phone = "Phone Number required!";
  }

  //Error handling for Email Address
  if (!values.email) {
    errors.email = "Email Address required!";
  } else if (!values.email.match(regexEmail)) {
    errors.email = "Invalid email address. Try again!";
  }

  //Error handling for Password
  if (!values.password) {
    errors.password = "Password required!";
  } else if (values.password.length < 8) {
    errors.password = "Password must be at least 8 characters long.";
  }

  //Error handling for Confirm Password
  if (!values.confirmPassword) {
    errors.confirmPassword = "Password required!";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Passwords do not match!";
  }

  return errors;
}

export default validateSignUpForm;
