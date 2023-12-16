import React, { useState } from "react";
import "./Quiz.css";

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questions = [
    {
      question: "The logo for luxury car maker Porsche features which animal?",
      options: ["horse", "dog", "tiger", "cat"],
      answer: "horse",
    },
    // Add more questions here
  ];

  const handleAnswerClick = (answer) => {
    if (answer === questions[currentQuestion].answer) {
      alert("Correct!");
    } else {
      alert("Incorrect!");
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert("You have completed the quiz!");
    }
  };

  const handleLastQuestionClick = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleNextQuestionClick = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    }
  };

  return (
    <div className='quiz-container'>
      <div className='quiz-header'>
        <h2>
          Question {currentQuestion + 1}/{questions.length}
        </h2>
      </div>

      <div className='quiz-question'>
        <p>{questions[currentQuestion].question}</p>
      </div>

      <div className='quiz-options'>
        {questions[currentQuestion].options.map((option) => (
          <button
            key={option}
            className='quiz-option-button'
            onClick={() => handleAnswerClick(option)}
          >
            {option}
          </button>
        ))}
      </div>

      <div className='quiz-navigation'>
        <button className='quiz-button' onClick={handleLastQuestionClick}>
          LAST QUESTION
        </button>
        <button className='quiz-button' onClick={handleNextQuestionClick}>
          NEXT QUESTION →
        </button>
      </div>
    </div>
  );
};

export default QuizPage;
