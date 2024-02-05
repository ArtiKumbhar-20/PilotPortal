import { useState } from 'react'
import { quiz } from './questions'
import axios from 'axios';
import './Quiz.css'

const apiUrl = 'http://localhost:8000/api/quiz-results/';

const QuizPage = () => {
  const initialQuizState = {
    activeQuestion: 0,
    selectedAnswer: '',
    showResult: false,
    selectedAnswerIndex: null,
    result: {
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 1,
    },
    attempts: 1,
  };

  const [quizState, setQuizState] = useState(initialQuizState);
  const { activeQuestion, selectedAnswer, showResult, selectedAnswerIndex, result, attempts } = quizState;
  const maxAttempts = 3;
  const { questions } = quiz
  const { question, choices, correctAnswer } = questions[activeQuestion]

  const onClickNext = () => {
    if (activeQuestion !== questions.length - 1) {
      setQuizState((prev) => ({
        ...prev,
        selectedAnswerIndex: null,
        result: selectedAnswer
          ? {
              ...prev.result,
              score: prev.result.score + 5,
              correctAnswers: prev.result.correctAnswers + 1,
            }
          : { ...prev.result, wrongAnswers: prev.result.wrongAnswers + 1 },
        activeQuestion: prev.activeQuestion + 1,
      }));
    } else {
      setQuizState((prev) => ({ ...prev, showResult: true }));
    }
  }

  const onAnswerSelected = (answer, index) => {
    setQuizState((prev) => ({
      ...prev,
      selectedAnswerIndex: index,
      selectedAnswer: answer === correctAnswer,
    }));
  }

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)

  const resetQuiz = () => {
    if (attempts < maxAttempts) {
      const quizData = {
        user_id: 1,  // Replace with the actual user ID or authentication mechanism
        score: result.score,
        correct_answers: result.correctAnswers,
        wrong_answers: result.wrongAnswers,
        attempts: attempts,
      };
  
      // Make a POST request to the backend API
      axios.post(apiUrl, quizData)
        .then(response => {
          console.log('Quiz data sent successfully:', response.data);
        })
        .catch(error => {
          console.error('Error sending quiz data:', error);
        });
      setQuizState((prev) => ({
        ...initialQuizState,
        attempts: prev.attempts + 1,
      }));
    }
  };

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
          <h3>Assessment Result</h3>
          <p>
            {/* Total Score:<span> {result.score}</span> */}
            You've scored <span> {result.score}</span> points !!
          </p>
          
          <div className="section">
            <p className='section-para'> Total Questions:
            <span className="section-number">{questions.length}</span><br />
             
            </p>
            <p className='section-para'>Correct Answers:
            <span> {result.correctAnswers}</span><br />
              
            </p>
            <p className='section-para'>Wrong Answers:
            <span> {result.wrongAnswers}</span><br />
              
            </p>
            <p className="section-para">
                Attempts:
                <span> {attempts}</span>
                <br />
              </p>
          </div>
          {attempts < maxAttempts ? (
              <button type='submit' className='btn btn-custom' style={{ display: 'block', margin: 'auto'}} onClick={resetQuiz}>
                Try Again &#10227;
              </button>
            ) : (
              <p className='max-attempts-message'>Maximum number of attempts crossed</p>
            )}
        </div>
        
      )}
      


    </div>
    </div>
  )
}

export default QuizPage