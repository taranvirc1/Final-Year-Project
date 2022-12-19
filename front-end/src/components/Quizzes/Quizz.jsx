import React from 'react'
import Quiz from './Quizzes'
import '../../Styles/Quizzes/Quiz.css'
function Quizz() {
  return (
    <div className='body'> 
    <h1 className='Quiz-title'> Codding For All</h1>
    <h2 className='Quiz-title1'>Fundamentals Programming MCQs (Multiple Choice Questions) </h2>
    <Quiz/>
    </div>
  )
}

export default Quizz