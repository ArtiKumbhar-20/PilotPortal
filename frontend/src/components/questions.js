// import axios from 'axios';
// import config from "./config";
// const apiUrl = `${config.backendUrl}`;

// // Function to fetch quiz questions from the backend
// const fetchQuizQuestions = async () => {
//   try {
//     const response = await axios.get(apiUrl + '/quiz-questions/');
//     console.log(response.data)
//     return response.data; // Assuming the response data is an array of questions
//   } catch (error) {
//     console.error('Error fetching quiz questions:', error);
//     return []; // Return an empty array in case of error
//   }
// };

// // Export an asynchronous function to fetch and return the quiz questions
// export const quiz = async () => {
//   // Fetch quiz questions using the fetchQuizQuestions function
//   const questions = await fetchQuizQuestions();

//   // Return the fetched quiz questions object
//   return {
//     topic: 'Javascript',
//     level: 'Beginner',
//     totalQuestions: questions.length, // Assuming total questions is based on the fetched questions
//     perQuestionScore: 5,
//     questions: questions.map((question) => ({
//       question: question.question_text,
//       choices: [question.option_a, question.option_b, question.option_c, question.option_d],
//       type: 'MCQs',
//       correctAnswer: question.correct_answer,
//     })),
//   };
// };
export const quiz = {
  topic: 'Javascript',
  level: 'Beginner',
  totalQuestions: 4,
  perQuestionScore: 5,
  questions: [
    {
      question: 'Which function is used to serialize an object into a JSON string in Javascript?',
      choices: ['stringify()', 'parse()', 'convert()', 'None of the above'],
      type: 'MCQs',
      correctAnswer: 'stringify()',
    },
    {
      question: 'Which of the following keywords is used to define a variable in Javascript?',
      choices: ['var', 'let', 'var and let', 'None of the above'],
      type: 'MCQs',
      correctAnswer: 'var and let',
    },
    {
      question:
        'Which of the following methods can be used to display data in some form using Javascript?',
      choices: ['document.write()', 'console.log()', 'window.alert', 'All of the above'],
      type: 'MCQs',
      correctAnswer: 'All of the above',
    },
    {
      question: 'How can a datatype be declared to be a constant type?',
      choices: ['const', 'var', 'let', 'constant'],
      type: 'MCQs',
      correctAnswer: 'const',
    },
  ],
}