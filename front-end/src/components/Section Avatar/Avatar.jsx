import React from "react";
import { useEffect, useRef, useState, useCallback } from "react";
import axios from "axios";
import rankImg from "../../images/Avatar section/Profile section/Rank img/Rank 1.png";
import rank1 from "../../images/Avatar section/Profile section/Rank img/Rank 1.png"; 
import rank2 from "../../images/Avatar section/Profile section/Rank img/Rank 2.png"; 
import rank3 from "../../images/Avatar section/Profile section/Rank img/Rank 3.png"; 
import rank4 from "../../images/Avatar section/Profile section/Rank img/Rank 4.png"; 
import rank5 from "../../images/Avatar section/Profile section/Rank img/Rank 5.png"; 
import rank6 from "../../images/Avatar section/Profile section/Rank img/Rank 6.png"; 
import rank7 from "../../images/Avatar section/Profile section/Rank img/Rank 7.png"; 
import rank8 from "../../images/Avatar section/Profile section/Rank img/Rank 8.png"; 
import rank9 from "../../images/Avatar section/Profile section/Rank img/Rank 9.png"; 
import rank10 from "../../images/Avatar section/Profile section/Rank img/Rank 10.png"; 
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
  //Gets the logged in student's email and sets the varaible 'loggedInUser' as the string value. 
    const [loggedInUser, setLoggedinUser] = useState("");
    const [profile, setProfile] = useState([]);
    useEffect(() => {
      const saveLoggedinUser = localStorage.getItem("loggedInUser");
      if (saveLoggedinUser) {
        setLoggedinUser(saveLoggedinUser);
      }
    }, []);
    console.log("user email is "+loggedInUser); 
    //constant declarations
        const [student, setStudent] = useState([]);
        const [studentId, setStudentId] = useState("");
        const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    axios.get("http://localhost:8080/getRankings",{  headers: {"Authorization" : `Bearer ${jwt}`} })
      .then(response => {
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
  //XP FUNCTIONALITY SECTION

  const [rankImg, setRankImg] = useState(rank1);

  //function calculates xp percentage to fill as the width for the 'xp bar'

  const updateXP = (currentXp, totalXp) => {
  const xpBar = document.querySelector(".xp-bar");
  const percentComplete = (currentXp / totalXp) * 100;
  xpBar.style.width = `${percentComplete}%`;
  console.log("The percent is " + percentComplete);
  console.log("The current xp is " + currentXp);

};
//Changes the xp so it fits inside the xp bar 
const getRemainingXP = (xp) => {
  return xp % 1000;
};



    useEffect(() => {
   
      const saveLoggedinUser = localStorage.getItem("loggedInUser");
      axios.get(`http://localhost:8080/profile/${saveLoggedinUser}`, { headers})
        .then(response => {
          setProfile(response.data);
          setStudentId(response.data.studentId)
          const remainingXP = getRemainingXP(response.data.xp);
          updateXP(remainingXP, 1000);
          
          const rank = Math.floor(response.data.xp / 1000) + 1;
          switch (rank) {
            case 1:
              setRankImg(rank1);
              break;
            case 2:
              setRankImg(rank2);
              break;
            case 3:
              setRankImg(rank3);
              break;
            case 4:
              setRankImg(rank4);
              break;
            case 5:
              setRankImg(rank5);
              break;
            case 6:
              setRankImg(rank6);
              break;
            case 7:
              setRankImg(rank7);
              break;
            case 8:
              setRankImg(rank8);
              break;
            case 9:
              setRankImg(rank9);
              break;
            case 10:
              setRankImg(rank10);
              break;
            default:
              setRankImg(rank1);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }, []);

console.log(profile);
console.log("logged user studentId is : "+studentId );

//BADGE SELECTION FUNCTIONALITY SECTION
const [selectedBadges, setSelectedBadges] = useState([basic, intermediate, advanced, rare]);
const [popupVisible, setPopupVisible] = useState(false);
const [activeBadge, setActiveBadge] = useState(null);
const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
const badgeImages = {
  basic: basic,
  intermediate: intermediate,
  advanced: advanced,
  rare: rare,
  rare2: rare2,
  nft: nft,
  nft1: nft1,
  nft2: nft2,
};
const [badgeStatus, setBadgeStatus] = useState({
  basic: true,
  intermediate: true,
  advanced: true,
  rare: true,
  rare2: true,
  nft: true,
});
//checks the badge status in the localStorge of the 'loggedInUser'
useEffect(() => {
  const savedBadgeStatus = localStorage.getItem(`badgeStatus_${loggedInUser}`);
  if (savedBadgeStatus) {
    setBadgeStatus(JSON.parse(savedBadgeStatus));
  }
}, [loggedInUser]);

useEffect(() => {
  if (loggedInUser) {
    localStorage.setItem(`badgeStatus_${loggedInUser}`, JSON.stringify(badgeStatus));
  }
}, [badgeStatus, loggedInUser]);

//function checks if the badgeStatus for a badge object is locked (true) or unlocked (false)
const handleBadgeClick = (e, badgeName) => {
  setPopupPosition({ x: e.clientX, y: e.clientY });

  if (!badgeStatus[badgeName]) {
    setActiveBadge(badgeName);
    setPopupVisible(true);
  } else {
    setBadgeStatus({ ...badgeStatus, [badgeName]: !badgeStatus[badgeName] });
  }
};

//function places active badge at index of selectedBadges array
const handlePopupClick = (index) => {
  setSelectedBadges((prevBadges) => {
    const newBadges = [...prevBadges];
    newBadges[index] = badgeImages[activeBadge];
    return newBadges;
  });
  setPopupVisible(false);
};

const renderPopup = () => {
  if (!popupVisible) return null;

  const popupStyle = {
    position: "fixed",
    top: `${popupPosition.y - 10}px`,
    left: `${popupPosition.x}px`,
    zIndex: 1000,
    display: "flex",
    justifyContent: "space-around",
    width: "200px",
    backgroundColor: "transparent",
    border: "none",
    borderRadius: "5px",
    padding: "5px",
  };

//connects the handlePopupClick to the onclick event of the const 'renderPopUp
  return (
    <div className="popup" style={popupStyle}>
      {Array.from({ length: 4 }, (_, i) => (
        <button key={i} onClick={() => handlePopupClick(i)} style={{ padding: "2px 4px" }}>
          {i + 1}
        </button>
      ))}
    </div>
  );
};

return (
    
  <div>
    <div class="topPart">
   
      <div class="left">
        <div class="profileTab">
          <img src={"data:image/png;base64," + profile.avatar} class="profilePicture" />
          <img src={rankImg} class="rankimg" />
        </div>
        <div class="badges-and-xpbar">
        <div className="selectedBadges">
        {selectedBadges.map((badge, index) => (
          <img key={index} src={badge} className="profileBadges" />
        ))}
      </div>
          <div class="xp-container">
            <div class="xp-bar">
                {profile.xp % 1000} / 1000
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
            <div className="upm-form2 upm-field2">
              {/* ... (other upm-avatar-container elements) */}

              <div
                      className="upm-avatar-container"
                      onClick={(e) => handleBadgeClick(e, "basic")}
                    >
                      <div className="upm-avatar">
                        <img
                          src={basic}
                          style={{
                            filter: badgeStatus.basic ? "grayscale(100%)" : "grayscale(0%)",
                          }}
                        />
                      </div>
                      {badgeStatus.basic && (
                        <AiFillLock className="upm-ic-lock" size={50} />
                      )}
              </div>


              <div
                      className="upm-avatar-container"
                      onClick={(e) => handleBadgeClick(e, "intermediate")}
                    >
                      <div className="upm-avatar">
                        <img
                          src={intermediate}
                          style={{
                            filter: badgeStatus.intermediate ? "grayscale(100%)" : "grayscale(0%)",
                          }}
                        />
                      </div>
                      {badgeStatus.inter && (
                        <AiFillLock className="upm-ic-lock" size={50} />
                      )}
              </div>
              <div
                      className="upm-avatar-container"
                      onClick={(e) => handleBadgeClick(e, "advanced")}
                    >
                      <div className="upm-avatar">
                        <img
                          src={advanced}
                          style={{
                            filter: badgeStatus.advanced ? "grayscale(100%)" : "grayscale(0%)",
                          }}
                        />
                      </div>
                      {badgeStatus.advanced && (
                        <AiFillLock className="upm-ic-lock" size={50} />
                      )}
              </div>
              <div
                      className="upm-avatar-container"
                      onClick={(e) => handleBadgeClick(e, "rare")}
                    >
                      <div className="upm-avatar">
                        <img
                          src={rare}
                          style={{
                            filter: badgeStatus.rare ? "grayscale(100%)" : "grayscale(0%)",
                          }}
                        />
                      </div>
                      {badgeStatus.rare && (
                        <AiFillLock className="upm-ic-lock" size={50} />
                      )}
              </div>
              <div
                      className="upm-avatar-container"
                      onClick={(e) => handleBadgeClick(e, "rare2")}
                    >
                      <div className="upm-avatar">
                        <img
                          src={rare2}
                          style={{
                            filter: badgeStatus.rare2 ? "grayscale(100%)" : "grayscale(0%)",
                          }}
                        />
                      </div>
                      {badgeStatus.rare2 && (
                        <AiFillLock className="upm-ic-lock" size={50} />
                      )}
              </div>
              <div
                      className="upm-avatar-container"
                      onClick={(e) => handleBadgeClick(e, "nft")}
                    >
                      <div className="upm-avatar">
                        <img
                          src={nft}
                          style={{
                            filter: badgeStatus.nft ? "grayscale(100%)" : "grayscale(0%)",
                          }}
                        />
                      </div>
                      {badgeStatus.nft && (
                        <AiFillLock className="upm-ic-lock" size={50} />
                      )}
              </div>

              {/* ... (other upm-avatar-container elements) */}
            </div>
          </div>
        </div>
        {renderPopup()}
      </li>
      </div>
    </div>
  

      <div class="league-title">
        <h3 class="titles">Leaderboard:</h3>
      </div>
      <table class="table-styled">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Profile</th>
            <th>Name</th>
            <th>Quiz</th>
            <th>Overall XP</th>
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
