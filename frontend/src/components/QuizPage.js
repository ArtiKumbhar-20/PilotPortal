// import React, { useState } from "react";
// import "./Quiz.css";

// function QuizPage() {
//   const questions = [
//     {
//       questionText: "What is the capital of France?",
//       answerOptions: [
//         { answerText: "1) New York", isCorrect: false },
//         { answerText: "2) London", isCorrect: false },
//         { answerText: "3) Paris", isCorrect: true },
//         { answerText: "4) Dublin", isCorrect: false },
//       ],
//     },
//     {
//       questionText: "Who is CEO of Tesla?",
//       answerOptions: [
//         { answerText: "1) Jeff Bezos", isCorrect: false },
//         { answerText: "2) Elon Musk", isCorrect: true },
//         { answerText: "3) Bill Gates", isCorrect: false },
//         { answerText: "4) Tony Stark", isCorrect: false },
//       ],
//     },
//     {
//       questionText: "The iPhone was created by which company?",
//       answerOptions: [
//         { answerText: "1) Apple", isCorrect: true },
//         { answerText: "2) Intel", isCorrect: false },
//         { answerText: "3) Amazon", isCorrect: false },
//         { answerText: "4) Microsoft", isCorrect: false },
//       ],
//     },
//     {
//       questionText: "How many Harry Potter books are there?",
//       answerOptions: [
//         { answerText: "1) 1", isCorrect: false },
//         { answerText: "2) 4", isCorrect: false },
//         { answerText: "3) 6", isCorrect: false },
//         { answerText: "4) 7", isCorrect: true },
//       ],
//     },
//   ];

//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [showScore, setShowScore] = useState(false);
//   const [score, setScore] = useState(0);

//   const handleAnswerOptionClick = (isCorrect) => {
//     if (isCorrect) {
//       setScore(score + 1);
//     }

//     const nextQuestion = currentQuestion + 1;
//     if (nextQuestion < questions.length) {
//       setCurrentQuestion(nextQuestion);
//     } else {
//       setShowScore(true);
//     }
//   };

//   return (
//     <div className='SpaceTop'>
//       <div className='app'>
//         {showScore ? (
//           <div className='score-section'>
//             You scored {score} out of {questions.length}
//           </div>
//         ) : (
//           <>
//             <div className='question-section'>
//               <div className='question-count'>
//                 Question {currentQuestion + 1}/{questions.length}
//               </div>
//               <div className='question-text title'>
//                 {questions[currentQuestion].questionText}
//               </div>
//             </div>

//             <div className='answer-section'>
//               {questions[currentQuestion].answerOptions.map(
//                 (answerOption, index) => (
//                   <button
//                     key={index}
//                     onClick={() =>
//                       handleAnswerOptionClick(answerOption.isCorrect)
//                     }
//                     className='answer-button'
//                   >
//                     {answerOption.answerText}
//                   </button>
//                 )
//               )}
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default QuizPage;

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
          <h2>{question}</h2>
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
          <h3>Result</h3>
          <p>
            Total Question: <span>{questions.length}</span>
          </p>
          <p>
            Total Score:<span> {result.score}</span>
          </p>
          <p>
            Correct Answers:<span> {result.correctAnswers}</span>
          </p>
          <p>
            Wrong Answers:<span> {result.wrongAnswers}</span>
          </p>
        </div>
      )}
    </div>
    </div>
  )
}

export default QuizPage