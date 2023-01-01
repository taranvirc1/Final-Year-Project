import React, { Component } from 'react'
import {QuizData} from '../Quizzes/QuizzData'
import '../../Styles/Quizzes/Quizz.css'

export class Quiz extends Component {

constructor(props) {
    super(props)

    this.state ={
        userAnswer: null,
        currentIndex: 0,
        options: [],
        quizEnd: false,
        score: 0,
        disabled: true,
    }
}

loadQuiz =() => {
    const {currentIndex} = this.state;
    this.setState(() => {
        return {
            question: QuizData[currentIndex].question,
            options: QuizData[currentIndex].options,
            answer: QuizData[currentIndex].answer,
        }
    })
}

nextQuestionHandler = () => {
    const {userAnswer, answer, score} = this.state

    if(userAnswer === answer){
        this.setState({
            score: score + 1
        })
    }
    this.setState({
        currentIndex: this.state.currentIndex + 1,
        userAnswer: null
    })
}

componentDidMount() {
    this.loadQuiz();
}

checkAnswer = answer => {
    this.setState({
        userAnswer: answer,
        disabled: false
    })
}

componentDidUpdate(prevProps, prevState){
    const{currentIndex} = this.state;
    if(this.state.currentIndex !== prevState.currentIndex) {
        this.setState(() => {
            return {
                question: QuizData[currentIndex].question,
                options: QuizData[currentIndex].options,
                answer: QuizData[currentIndex].answer,
            }
        });
    }
  }
//Responds to the click of the finish button
finishHandler =() => {
    if(this.state.currentIndex === QuizData.length -1){
        this.setState({
            quizEnd:true
        })
    }

}


  render() {
    const{question, options, currentIndex, userAnswer, quizEnd} = this.state

    if(quizEnd) {
        return(
            <div className='final-container'>
                <h2 className='Quiz-questionTitle'>Quiz Ended: Your result is {this.state.score} /  {QuizData.length}</h2>
                <p className='Quiz-questionNo'>The correct Answers for the quiz are</p>
                <ul className='Quizz-ul'>
                    {QuizData.map((item, index) => (
                        <li className='options'
                        key={index}>
                            {item.answer}
                        </li>
                    ) )}
                </ul>
            </div>
        )
    }




    return (
        <div className='quiz-container'>
        <h2 className='Quiz-questionTitle'>{question}</h2>
        <span className='Quiz-questionNo'>Question  {currentIndex + 1 } of  {QuizData.length} </span>
        {
            options.map(option => 
                <p key = {option.id} className={'options ${userAnswer === option? "selected" : null } '} 
                onClick = {() => this.checkAnswer(option) }
                > 
                {option}
                </p>
                )

        }

        {currentIndex < QuizData.length - 1 &&
        <button className='Quiz-button' disabled = {this.state.disabled} onClick={this.nextQuestionHandler}> 
            Next Question
        </button>}

        {currentIndex === QuizData.length-1 && 
        <button className='Quiz-button' onClick={this.finishHandler} 
        disabled={this.state.disabled}> 
        Finish
        </button>} 
        


        </div>
    )
  }

}
  export default Quiz