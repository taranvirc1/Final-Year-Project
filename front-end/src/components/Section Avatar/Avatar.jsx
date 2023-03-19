import React from "react";
import { useEffect, useRef, useState, useCallback } from "react";
import axios from "axios";
import image1 from "../../images/Avatar section/Badges/Solid_red.png";
import otherProfileImage from "../../images/Avatar section/Profile section/Profile picture/defaultProfilePic.png";
import chosenBadge1 from "../../images/Avatar section/Profile section/Chosen badges/Badge1.png";
import chosenBadge2 from "../../images/Avatar section/Profile section/Chosen badges/Badge2.png";
import chosenBadge3 from "../../images/Avatar section/Profile section/Chosen badges/Badge3.png";
import rankImg from "../../images/Avatar section/Profile section/Rank img/Rank 1.png";
import "../../Styles/Avatar Style/Main page.css";
import { AiFillLock } from "react-icons/ai";
import basic from "../../images/UPM/assets/basic.png";
import intermediate from "../../images/UPM/assets/intermediate.png";
import advanced from "../../images/UPM/assets/advanced.png";
import rare from "../../images/UPM/assets/rare.png";
import rare2 from "../../images/UPM/assets/rare2_low.png";
import nft from "../../images/UPM/assets/nft_low.png";
import nft1 from "../../images/UPM/assets/nft1_low.png";
import nft2 from "../../images/UPM/assets/nft2_low.png";
 function Avatar() {
    const [loggedInUser, setLoggedinUser] = useState("");
    const [profile, setProfile] = useState([]);
    useEffect(() => {
      const saveLoggedinUser = localStorage.getItem("loggedInUser");
      if (saveLoggedinUser) {
        setLoggedinUser(saveLoggedinUser);
      }
    }, []);
    console.log("user email is "+loggedInUser);
const [student, setStudent] = useState([]);
const [currentXp, setCurrentXp] = useState(0);
const [studentId, setStudentId] = useState("");


const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    axios.get("http://localhost:8080/getRankings",{  headers: {"Authorization" : `Bearer ${jwt}`} })
      .then(response => {
       // setReviews(response.data);
     
         
      console.log(response.data);
      setStudent(response.data);
      })
      .catch(error=>{
         console.error(error)
         alert("cant get reviews")
      });
    },[]);
  
   
    const token = jwt;
    const headers = {
      Authorization: `Bearer ${token}`
    };
    const Api = `http://localhost:8080/profile/${loggedInUser}`;
    
    var noOfQuiz = 6;
var xp = (noOfQuiz) * 10;

const updateXP = (currentXp, totalXp) => {
  const xpBar = document.querySelector(".xp-bar");
  const percentComplete = (currentXp / totalXp) * 100;
  xpBar.style.width = `${percentComplete}%`;
  console.log("The percent is " + percentComplete);
  console.log("The current xp is " + currentXp);

};
 

    useEffect(() => {
   
      const saveLoggedinUser = localStorage.getItem("loggedInUser");
      axios.get(`http://localhost:8080/profile/${saveLoggedinUser}`, { headers})
        .then(response => {
          setProfile(response.data);
          setStudentId(response.data.studentId)
          setCurrentXp(response.data.xp)
          updateXP(response.data.xp, 1000); 
        })
        .catch(error => {
          console.log(error);
        
        });
    }, []);

console.log(profile);
console.log("logged user studentId is : "+studentId );











  
  

return (
    
  <div>
    <div class="topPart">
   
      <div class="left">
        <div class="profileTab">
          <img src={"data:image/png;base64," + profile.avatar} class="profilePicture" />
          <img src={rankImg} class="rankimg" />
        </div>
        <div class="badges-and-xpbar">
          <div class="selectedBadges">
            <img src={basic} class="profileBadges" />
            <img src={intermediate} class="profileBadges" />
            <img src={advanced} class="profileBadges" />
            <img src={rare} class="profileBadges" />
          </div>
          <div class="xp-container">
            <div class="xp-bar">
                {profile.xp} / 1000
            </div>
          </div>
        </div>
      </div>
      
    </div>

    <h3 class="titles">unlock/choose a badge:</h3>
    <div class="badgeCollagePosition">
      <div class="Collage">
        
        <li>
                        <h6></h6>
                        <div className="upm-info">
                          <div className="upm-split">
                            <div class="upm-form2 upm-field2">
                              <div class="upm-avatar-container">
                                <div class="upm-avatar">
                                  <img src={basic} />
                                </div>
                               
                              </div>
                              <div class="upm-avatar-container">
                                <div class="upm-avatar">
                                  <img src={intermediate} />
                                </div>
                               
                              </div>
                              <div class="upm-avatar-container">
                                <div class="upm-avatar">
                                  <img src={advanced} />
                                </div>
                                
                              </div>
                              <div class="upm-avatar-container">
                                <div class="upm-avatar">
                                  <img src={rare} />
                                </div>
                                
                              </div>
                              <div class="upm-avatar-container">
                                <div class="upm-avatar">
                                  <img src={rare2} />
                                </div>
                                <AiFillLock className="upm-ic-lock" size={50} />
                              </div>
                              <div class="upm-avatar-container">
                                <div class="upm-avatar">
                                  <img src={nft} />
                                </div>
                                <AiFillLock className="upm-ic-lock" size={50} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
        
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
            <th>Name</th>
            <th>Quiz</th>
            <th>Overal XP</th>
          </tr>
        </thead>
        <tbody>
          {student.map((students,index)=> (
          
          
          <tr>
            <td>{index+1}</td>
            <td>
           
            {students.avatar?  <img  className="profilePhoto" src={"data:image/png;base64," + students.avatar } height="90" width="90" alt="" /> : <img  className="profilePhoto" src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} height="90" width="90" alt="" /> }
            </td>
       
    
            <td>{students.firstName} {" "}{students.lastName}</td>
            <td>4</td>
            <td>{students.xp}</td>
          </tr>
                  ))};

         
        </tbody>
      </table>
    </div>
  );
}
export default Avatar;
