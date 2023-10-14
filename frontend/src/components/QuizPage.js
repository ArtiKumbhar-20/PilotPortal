import React, { useState } from 'react';

function QuizPage() {
  const questions = [
    {
      questionText: 'What is the capital of France?',
      answerOptions: [
        { answerText: '1) New York', isCorrect: false },
        { answerText: '2) London', isCorrect: false },
        { answerText: '3) Paris', isCorrect: true },
        { answerText: '4) Dublin', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is CEO of Tesla?',
      answerOptions: [
        { answerText: '1) Jeff Bezos', isCorrect: false },
        { answerText: '2) Elon Musk', isCorrect: true },
        { answerText: '3) Bill Gates', isCorrect: false },
        { answerText: '4) Tony Stark', isCorrect: false },
      ],
    },
    {
      questionText: 'The iPhone was created by which company?',
      answerOptions: [
        { answerText: '1) Apple', isCorrect: true },
        { answerText: '2) Intel', isCorrect: false },
        { answerText: '3) Amazon', isCorrect: false },
        { answerText: '4) Microsoft', isCorrect: false },
      ],
    },
    {
      questionText: 'How many Harry Potter books are there?',
      answerOptions: [
        { answerText: '1) 1', isCorrect: false },
        { answerText: '2) 4', isCorrect: false },
        { answerText: '3) 6', isCorrect: false },
        { answerText: '4) 7', isCorrect: true },
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
   
    <div style={{ 
      background: '#1e1b4b',
      width: '70%', 
      margin:'auto',
      marginTop:'50px',
      marginBottom:'50px',
      padding: '20px', 
      borderRadius: '15px', 
      boxShadow: '10px 10px 42px 0px rgba(0, 0, 0, 0.75)',
      
      }} className='app'>

      {showScore ? (
        <div style={{ 
          display: 'flex', 
          fontSize: '24px', 
          alignItems: 'center' 
          }} className='score-section'>
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div style={{ 
            width: '100%', 
          position: 'relative', 
          marginBottom: '20px',
          margin:'auto' 
        }} className='question-section'>

            <div style={{ 
              marginBottom: '20px', 
              textAlign: 'center' 
            }} className='question-count'>
              <span style={{ fontSize: '15px',color:'white' }}>Question {currentQuestion + 1}/{questions.length}</span>
            </div>

            <div style={{ 
              marginBottom: '12px', 
              textAlign: 'center' 
            }} className='question-text'>
              <span style={{ fontSize: '20px',color:'white' }}>{questions[currentQuestion].questionText}</span></div>
          </div>

          <div style={{ 
            width: '100%', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between',
            margin:'auto' 
          }} className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                style={{ 
                  width: '100%', 
                  fontSize: '16px', 
                  color: 'white',
                  background: '#1e1b4b',
                  borderRadius: '15px', 
                  display: 'flex',
                  padding: '5px',
                  justifyContent: 'flex-start', 
                  alignItems: 'center',
                  border: '1px solid',
                  borderImage: 'linear-gradient(to right, #854d0e, #c7996a) 1',

                  cursor: 'pointer',
                  marginTop:'10px',
                 }}
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
