import React, { useState } from "react";
import Account from "../Account";
import ConfirmAccount from "../ConfirmAccount";

function Signup() {
  const [registered, setRegistered] = useState(false);

  const submitForm = () => {
    setRegistered(true);
  };

  return (
    <div>
      {!registered ? <Account submitForm={submitForm} /> : <ConfirmAccount />}
    </div>
  );
}

export default Signup;
