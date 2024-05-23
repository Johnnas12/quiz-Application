import React, {useEffect, useContext, useState} from "react";
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { UseResultContext } from "../context";
import { useLocation } from "react-router-dom";

const ResultPage = () => {
    // const { passed } = useContext(UseResultContext);
const [passed, setPassed] = useState(false)
const [result, setResult] = useState();
const location = useLocation();
//const passed = location.state.status;

useEffect(() => {
    setPassed(location.state.status);
    setResult(location.state.result);
    
  }, []);
console.log(passed)
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-6xl p-8 rounded-full">
        { passed ? (
          <FaCheckCircle className="text-green-500" />
        ) : (
          <FaTimesCircle className="text-red-500" />
        )}
      </div>
      <div className="text-4xl font-bold mt-8">
        {passed ? 'Congratulations, you passed!' : 'Sorry, you failed.'}
      </div>
      <div className="text-4xl font-bold mt-8">
             Your Result is: {result}
      </div>
    </div>
  );
};

export default ResultPage;