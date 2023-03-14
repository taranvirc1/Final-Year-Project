//variables included within the avatar section
// var imageSrc = "Imgs/Clapt girl.png";
var noOfQuiz = 6;

//selector for the profile picture customization, which is derived from the variable 'imageSrc
// const imageElement = document.querySelector(".profilePicture");
// imageElement.src = imageSrc;

//xp bar function:
var xp = (noOfQuiz) * 10;
const xpBar = document.querySelector(".xp-bar");
function updateXP(currentXP, totalXP) {
  const percentComplete = (currentXP / totalXP) * 100;
  xpBar.style.width = `${percentComplete}%`;
}
updateXP(xp, 500); // sets the xp bar to the xp gained by the user

