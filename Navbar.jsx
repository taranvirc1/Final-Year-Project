import React from 'react'
import Logo from './iconsimg/logo.png'
import donate from './iconsimg/donate.png'
import courseslogo from './iconsimg/courses.png'
import quizzeslogo from './iconsimg/quizzes.png'
import forumlogo from './iconsimg/forum.png'
import rankinglogo from './iconsimg/ranking.png'
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