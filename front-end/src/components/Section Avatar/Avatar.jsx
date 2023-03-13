import React from "react";
import { useEffect, useRef, useState, useCallback } from "react";
import axios from "axios";
import image1 from "../../images/Avatar section/Badges/Solid_red.png";
import profileImage from "../../images/Avatar section/Profile section/Profile picture/defaultProfilePic.png";
import otherProfileImage from "../../images/Avatar section/Profile section/Profile picture/defaultProfilePic.png";
import chosenBadge1 from "../../images/Avatar section/Profile section/Chosen badges/Badge1.png";
import chosenBadge2 from "../../images/Avatar section/Profile section/Chosen badges/Badge2.png";
import chosenBadge3 from "../../images/Avatar section/Profile section/Chosen badges/Badge3.png";
import rankImg from "../../images/Avatar section/Profile section/Rank img/Rank 1.png";
import "../../Styles/Avatar Style/Main page.css";
export default function Avatar() {

  const [student, setStudent] = useState([]);

  const fetchRankingsTable = async () => {
    const response = await axios.post("http://localhost:8080/Ranking", {totXp: 0}, {
      headers: {
        "Authorization" : `Bearer ${jwt}`
      }
    });
    setStudent(response.data);
  };
  
  useEffect(() => {
    fetchRankingsTable();
  }, []);

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
                <script src="front-end\src\components\Section Avatar\avatar-details.js"></script>
              </div>
            </div>
          </div>
        </div>
        
      </div>

      <h3 class="titles">unlock/choose a badge:</h3>
      <div class="badgeCollagePosition">
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
      <h3 class="titles">unlock/choose a background:</h3>
      <div class="backgroundCollagePosition">
        <div class="Collage">
          <img src={image1} class="avaiableBackgrounds"/>
          <img src={image1} class="avaiableBackgrounds"/>
          <img src={image1} class="avaiableBackgrounds"/>
          <img src={image1} class="avaiableBackgrounds"/>
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
        <th>Role</th>
        <th>Last Name</th>
        <th>Total XP</th>
      </tr>
    </thead>
    <tbody>
      {student.map((s, index) => (
        <tr key={s.id}>
          <td>{index + 1}</td>
          <td>
            <img src={s.image} height="90" width="90" alt="" />
          </td>
          <td>{s.role}</td>
          <td>{s.lastName} poop </td>
          <td>{s.totXp} 50 </td>
        </tr>
      ))}
    </tbody>
  </table>
    </div>
  );
}
