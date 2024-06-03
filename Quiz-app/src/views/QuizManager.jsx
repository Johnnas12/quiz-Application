import React, { useContext,  useState, useEffect } from 'react';
// import { ResultContext } from '../context';
import { UseResultContext } from '../context';
import axios from 'axios';
const QuizManager = () => {
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState('');
    const [correctAnswer, setCorrectAnswer] = useState('');
  
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(question, options, correctAnswer);
      const formdata= new FormData();
      formdata.append('question', question);
      formdata.append('options', options);
      formdata.append('correctAnswer', correctAnswer);
      axios.post('http://localhost:3000/api/quiz-questions', {'question': question, 'options': options, 'correctAnswer': correctAnswer}).then((response) => {
        console.log(response.data);
      }).catch((error) => {
        console.log(error);
      });;
      // Handle form submission and save the quiz question
    };
  
    return (
      <div className="flex justify-center items-center h-screen">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="question">
              Question
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="question"
              rows="3"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="options">
              Options (comma-separated)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="options"
              type="text"
              value={options}
              onChange={(e) => setOptions(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="correct-answer">
              Correct Answer
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="correct-answer"
              type="text"
              value={correctAnswer}
              onChange={(e) => setCorrectAnswer(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Save Question
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default QuizManager;