import React, {useContext,  useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import  {UseResultContext}  from "../context.jsx";
import { useLocation } from "react-router-dom";

const QuestionCard = () => {
  const [question, setQuestion] = useState([]);
  const [activeQuestion, setActiveQuestion] = useState({
    questionNumber: 0,
    id: "",
  });
  const [chosenanswer, setAnswer] = useState({ answer: "", index: 0 });
  const [score, setScore] = useState(0);
  // const { setPass } = useContext(UseResultContext);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestion = async () => {
      axios
        .get("http://localhost:3000/api/quiz-questions")
        .then((response) => {
          setQuestion(response.data);
          setActiveQuestion({questionNumber: 0, id: response.data[activeQuestion.questionNumber]['_id'],})
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      // Handle form submission and save the quiz question
    };

    fetchQuestion();
  }, []);
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
      <div>
        <Link to={"/register"}>
          <button>Register Quiz</button>
        </Link>
      </div>
      {question[activeQuestion.questionNumber] && (
        <div>
          <h2 className="text-2xl font-bold mb-4">
            {" "}
            {question[activeQuestion.questionNumber]["question"]}
          </h2>
          <ul className="space-y-2">
            {question[activeQuestion.questionNumber]["options"]
              .split(",")
              .map((answer, i) => {
                return (
                  <li key={i}>
                  <button
                    onClick={(e) => {
                      setAnswer({ answer: e.target.value, index: i });
                      if (e.target.value === question[activeQuestion.questionNumber]["correctAnswer"]) {
                        setScore(score + 1);
                      }
                    }}
                    value={answer}
                    className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full ${
                      chosenanswer.answer !== "" &&
                       question[activeQuestion.questionNumber]["_id"] == activeQuestion.id &&
                      chosenanswer.answer !== question[activeQuestion.questionNumber]["correctAnswer"] &&
                      i === chosenanswer.index
                        ? "bg-red-500"
                        : chosenanswer.answer === question[activeQuestion.questionNumber]["correctAnswer"] && i === chosenanswer.index
                        ? "bg-green-500"
                        : ""
                    }`}
                  >
                    {answer}
                  </button>
                </li>
                );
              })}
          </ul>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md mt-4 flex justify-between">
        <button
          onClick={() => {
            activeQuestion.questionNumber > 0 &&
              setActiveQuestion({
                questionNumber: activeQuestion.questionNumber - 1,
                id: question[activeQuestion.questionNumber]["_id"],
              });
          }}
          disabled={!(activeQuestion.questionNumber > 0)}
          className={` ${
            activeQuestion.questionNumber >= 1 ? "bg-blue-500" : "bg-gray-500"
          } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
        >
          Previous
        </button>
        <button
          onClick={() => {
            activeQuestion.questionNumber < question.length + 1 &&
              setActiveQuestion({
                questionNumber: activeQuestion.questionNumber + 1,
                id: question[activeQuestion.questionNumber]["_id"],
              });
          }}
          disabled={!(activeQuestion.questionNumber < question.length - 1)}
          className={` ${
            activeQuestion.questionNumber < question.length - 1
              ? "bg-blue-500"
              : "bg-gray-500"
          } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
        >
          Next
        </button>
      
        <button onClick={()=>{  navigate('/result', {state: {status: score >= Math.ceil((question.length)/2) ?  true: false, result: score }   })}}
        
     className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
     
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md mt-4">
        <h2 className="text-2xl font-bold mb-4">Score</h2>
        <div className="flex items-center justify-between">
          <span className="text-4xl font-bold">{score}</span>
          <div className="text-gray-500">
            <p className="text-lg">Out of</p>
            <p className="text-4xl font-bold">{question.length}</p>
          </div>
        </div>
        <div className="mt-4">
          <button
            onClick={() => {
              setActiveQuestion({ questionNumber: 0 });
              setScore(0);
              setAnswer({ answer: "" });
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
