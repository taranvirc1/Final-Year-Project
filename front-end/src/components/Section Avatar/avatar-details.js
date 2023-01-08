//variables included within the avatar section
var imageSrc = "Imgs/Clapt girl.png";
var noOfQuiz = 6;
var lecturesComp = 5;
var examsComplete = 4;

//selector for the profile picture customization, which is derived from the variable 'imageSrc
const imageElement = document.querySelector(".profilePicture");
imageElement.src = imageSrc;

//xp bar function:
var xp = (noOfQuiz + lecturesComp * 2 + examsComplete * 4) * 10;
const xpBar = document.querySelector(".xp-bar");
function updateXP(currentXP, totalXP) {
  const percentComplete = (currentXP / totalXP) * 100;
  xpBar.style.width = `${percentComplete}%`;
}
updateXP(xp, 1000); // sets the xp bar to the xp gained by the user
