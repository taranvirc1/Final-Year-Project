// method used to get the data from database
import React, { useState } from "react";
import axios from "axios";

export const getReviews = async ({
  setTotalReviews,
  average,
  setReviews,
  jwt,
}) => {
  await axios
    .get("http://localhost:8080/getReviews", {
      headers: { Authorization: `Bearer ${jwt}` },
    })
    .then((response) => {
      setReviews(response.data);
      setTotalReviews(response.data.length);
    })
    .catch((error) => {
      console.error(error);
      alert("cant get reviews");
    });
};
