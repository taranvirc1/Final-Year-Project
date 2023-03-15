import React from "react";
import { useState, useEffect } from "react";
import "../../Styles/Quizzes/testQuiz.css";
import axios from "axios";

function TestQuiz() {
  const [questionss, setQuestionss] = useState([]);
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");

  
  
  const jwt = localStorage.getItem("jwt");

useEffect(()=>{

    const categoryIN = localStorage.getItem("category");
    const dificultyIN = localStorage.getItem("difficulty");

    


    axios
      .get(`http://localhost:8080/difficulty/${dificultyIN}/${categoryIN}`, {
        headers: { Authorization: `Bearer ${jwt}` },
      })
      .then((response) => {
        setQuestionss(response.data);
        //  setQuizLength(response.data.length);
      })
      .catch((error) => {
        console.error(error);
        alert("cant get quiz");
      });
    }, [category,difficulty])
  




  console.log(questionss);
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [isCorrect, setCorrect] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }else{
        setCorrect(true);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questionss.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (


    
    <div className="quizTesdwdwt">


        
      <div className="quizContainer">
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {questionss.length}
          </div>
        ) : (
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questionss.length}
            </div>
            {questionss.slice(currentQuestion,currentQuestion+1).map((question, index) => (
              <>
                <div className="question-text">{question.questionText}</div>
                  <div className="answer-section">

                  {question.answer.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.correct)}>{answerOption.answerText}</button>
						))}


     
                </div>
              </>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default TestQuiz;