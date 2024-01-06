

import { useState } from 'react'
import { quiz } from './questions'
import './Quiz.css'

const QuizPage = () => {
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  })

  const { questions } = quiz
  const { question, choices, correctAnswer } = questions[activeQuestion]

  const onClickNext = () => {
    setSelectedAnswerIndex(null)
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    )
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1)
    } else {
      setActiveQuestion(0)
      setShowResult(true)
    }
  }

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index)
    if (answer === correctAnswer) {
      setSelectedAnswer(true)
    } else {
      setSelectedAnswer(false)
    }
  }

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)

  return (
    <div className="quiz">
    <div className="quiz-container">
      {!showResult ? (
        <div>
          <div>
            <span className="active-question-no">{addLeadingZero(activeQuestion + 1)}</span>
            <span className="total-question">/{addLeadingZero(questions.length)}</span>
          </div>
          <h2 className="question">{question}</h2>
          <ul>
            {choices.map((answer, index) => (
              <li
                onClick={() => onAnswerSelected(answer, index)}
                key={answer}
                className={selectedAnswerIndex === index ? 'selected-answer' : null}>
                {answer}
              </li>
            ))}
          </ul>
          <div className="flex-right">
            <button onClick={onClickNext} disabled={selectedAnswerIndex === null}>
              {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
        
      ) : (
       
        <div className="result">

          <h3 className="result-heading">Result</h3>

          <div className="box-result">
          <p className="marks">
            Total Question: <span className="score">{questions.length}</span>
          </p>
          </div>

          
          <div className="box-result">
          <p className="marks">
            Total Score:<span className="score"> {result.score}</span>
          </p>
          </div>

          <div className="box-result">
          <p className="marks">
            Correct Answers:<span className="score"> {result.correctAnswers}</span>
          </p>
          </div>

          <div className="box-result">
          <p className="marks">
            Wrong Answers:<span className="score"> {result.wrongAnswers}</span>
          </p>
          </div>
        </div>
      )}
    </div>
    </div>
  )
}

export default QuizPage