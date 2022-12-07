import React from "react";
import "../Styles/WhoAreWe.css";
import Picture1 from "../images/WhoAreWe-icons/Picture1.png"

export default function WhoAreWe() {
  return (
    <body style={{ background: "azure" }}>
      <div class="title">
        <h1>Who Are We?</h1>
      </div>
      <div class="center">
        <div class="box1">
          <img src={Picture1} height="250px" width="400px" alt="picture1" />
        </div>
        <div class="box2">
          <p>
            Coding4All was developed by a team of young developers, at Brunel
            Univeristy, with the sole purpose to change the lives of other
            students.
          </p>
        </div>
        <div class="box3">
          <p>
            Our team have a strong passion for coding and learning. They wish to
            provide useful resources so that other people may be able to nuture
            the same passion as they have.{" "}
          </p>
        </div>
        <div class="box4">
          <img src={Picture1} height="250px" width="400px" alt="picture2" />
        </div>
      </div>
    </body>
  );
}
