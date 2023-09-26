import React, { useState } from 'react';

function QuizPage() {
  const questions = [
    {
      questionText: 'What is the capital of France?',
      answerOptions: [
        { answerText: 'New York', isCorrect: false },
        { answerText: 'London', isCorrect: false },
        { answerText: 'Paris', isCorrect: true },
        { answerText: 'Dublin', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is CEO of Tesla?',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Elon Musk', isCorrect: true },
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Tony Stark', isCorrect: false },
      ],
    },
    {
      questionText: 'The iPhone was created by which company?',
      answerOptions: [
        { answerText: 'Apple', isCorrect: true },
        { answerText: 'Intel', isCorrect: false },
        { answerText: 'Amazon', isCorrect: false },
        { answerText: 'Microsoft', isCorrect: false },
      ],
    },
    {
      questionText: 'How many Harry Potter books are there?',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '7', isCorrect: true },
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
   
    <div style={{ backgroundColor: '#252d4a', width: '50%', margin:'auto',marginTop:'50px',marginBottom:'50px',padding: '20px', borderRadius: '15px', boxShadow: '10px 10px 42px 0px rgba(0, 0, 0, 0.75)' }} className='app'>
      {showScore ? (
        <div style={{ display: 'flex', fontSize: '24px', alignItems: 'center' }} className='score-section'>
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div style={{ width: '100%', position: 'relative', marginBottom: '20px',margin:'auto' }} className='question-section'>
            <div style={{ marginBottom: '20px', textAlign: 'center' }} className='question-count'>
              <span style={{ fontSize: '28px' }}>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div style={{ marginBottom: '12px', textAlign: 'center' }} className='question-text'>{questions[currentQuestion].questionText}</div>
          </div>
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',margin:'auto' }} className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                style={{ width: '100%', fontSize: '16px', color: '#ffffff', backgroundColor: '#252d4a', borderRadius: '15px', display: 'flex', padding: '5px', justifyContent: 'flex-start', alignItems: 'center', border: '5px solid #234668', cursor: 'pointer',marginTop:'10px' }}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default QuizPage;
