import React from 'react'
import Logo from './navIcons/logo.png'
import donate from './navIcons/donate.png'
import courseslogo from './navIcons/courses.png'
import quizzeslogo from './navIcons/quizzes.png'
import forumlogo from './navIcons/forum.png'
import rankinglogo from './navIcons/ranking.png'
import "./NavBar.css";
function Navbar() {
  return (
    <>

		<div className="nav" id="nav">
			<div id="code4ALLlogo">
			<a href="index.html"><img src={Logo} alt="" style ={{width: 140}} /></a></div>
			<ul id="list-switch">
			
				<li><a href="#donate"><img src={donate} alt="" />Donate</a></li>
				<li><a href="#courses"><img src={courseslogo} alt=""  />Courses</a></li>
				<li><a href="#Quizzes"><img src={quizzeslogo} alt =""  />Quizzes</a></li>
				<li><a href="#Forum"><img src={forumlogo} alt =""  />Forum</a></li>
				<li><a href="#Rankings"><img img src={rankinglogo} alt ="" />Rankings</a></li>
			</ul>
			
		</div>





    </>
  )
}

export default Navbar