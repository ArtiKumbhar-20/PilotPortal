import React, { useState } from "react";
import "./Quiz.css";

function QuizPage() {
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "1) New York", isCorrect: false },
        { answerText: "2) London", isCorrect: false },
        { answerText: "3) Paris", isCorrect: true },
        { answerText: "4) Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "1) Jeff Bezos", isCorrect: false },
        { answerText: "2) Elon Musk", isCorrect: true },
        { answerText: "3) Bill Gates", isCorrect: false },
        { answerText: "4) Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "1) Apple", isCorrect: true },
        { answerText: "2) Intel", isCorrect: false },
        { answerText: "3) Amazon", isCorrect: false },
        { answerText: "4) Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1) 1", isCorrect: false },
        { answerText: "2) 4", isCorrect: false },
        { answerText: "3) 6", isCorrect: false },
        { answerText: "4) 7", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className='app'>
      {showScore ? (
        <div className='score-section'>
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              Question {currentQuestion + 1}/{questions.length}
            </div>
            <div className='question-text title'>
              {questions[currentQuestion].questionText}
            </div>
          </div>

          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  key={index}
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                  className='answer-button'
                >
                  {answerOption.answerText}
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default QuizPage;
