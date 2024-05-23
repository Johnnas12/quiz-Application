import React from 'react';

const QuizControls = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md mt-4 flex justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Previous
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Next
      </button>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Submit
      </button>
    </div>
  );
};

export default QuizControls;