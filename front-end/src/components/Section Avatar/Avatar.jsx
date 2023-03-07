import React from "react";
import { useEffect, useRef, useState, useCallback } from "react";
import axios from "axios";
import image1 from "../../images/Avatar section/Badges/Solid_red.png";
import profileImage from "../../images/Avatar section/Profile section/Profile picture/defaultProfilePic.png";
import otherProfileImage from "../../images/Avatar section/Profile section/Profile picture/defaultProfilePic.png";
import chosenBadge1 from "../../images/Avatar section/Profile section/Chosen badges/Badge1.png";
import chosenBadge2 from "../../images/Avatar section/Profile section/Chosen badges/Badge2.png";
import chosenBadge3 from "../../images/Avatar section/Profile section/Chosen badges/Badge3.png";
import rankImg from "../../images/Avatar section/Profile section/Rank img/global-elite.png";
import "../../Styles/Avatar Style/Main page.css";
export default function Avatar() {

const [student, setStudent] = useState([]);

const jwt = sessionStorage.getItem("jwt");

  useEffect(() => {
    axios.get("http://localhost:8080/user",{  headers: {"Authorization" : `Bearer ${jwt}`} })
      .then(response => {
       // setReviews(response.data);
     
      const blob = new Blob([response.data.image], { type: 'image/jpeg' });
      const url = URL.createObjectURL(blob);     
      console.log(response.data);
      setStudent(response.data)
      })
      .catch(error=>{
         console.error(error)
         alert("cant get reviews")
      });
    },[]);

















  return (
    <div>
      <div class="topPart">
        <div class="left">
          <div class="profileTab">
            <img src={profileImage} class="profilePicture" />
            <img src={rankImg} class="rankimg" />
          </div>
          <div class="badges-and-xpbar">
            <div class="selectedBadges">
              <img src={chosenBadge1} class="profileBadges" />
              <img src={chosenBadge2} class="profileBadges" />
              <img src={chosenBadge3} class="profileBadges" />
              <img src={chosenBadge1} class="profileBadges" />
            </div>
            <div class="xp-container">
              <div class="xp-bar">
                <script src="Javascript functions/avatar-details.js"></script>
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="tasks">
            <h3>Daily Tasks:</h3>
            <ul>
              <li>Complete a quiz</li>
              <li>Watch a video lecture</li>
              <li>Solve practice problems</li>
            </ul>
          </div>

          <div class="stats">
            <h3>Stats for today:</h3>
            <ul>
              <li>stat 1</li>
              <li>stat 2</li>
              <li>stat 3</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 class="titles">unlock/choose a badge:</h3>
      <div class="collagePosition">
        <div class="Collage">
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
          <img src={image1} class="avaiableBadges" />
        </div>
      </div>

      <div class="league-title">
        <h3 class="titles">League Tables:</h3>
      </div>
      <table class="table-styled">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Profile</th>
            <th>Quizzes</th>
            <th>Lectures</th>
            <th>Exams</th>
            <th>Overal XP</th>
          </tr>
        </thead>
        <tbody>
          {student.map((students,index)=> (
          <tr>
            <td>{index}</td>
            <td>
              <img src={students.image} height="90" width="90" alt="" />
            </td>
            <td>{students.role}</td>
            <td>{students.lastName}</td>
            <td>4</td>
            <td>400</td>
          </tr>
                  ))};

         
        </tbody>
      </table>
    </div>
  );
}
