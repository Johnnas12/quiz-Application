import React from 'react';

const ScoreBoard = ({ score, questions }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md mt-4">
      <h2 className="text-2xl font-bold mb-4">Score</h2>
      <div className="flex items-center justify-between">
        <span className="text-4xl font-bold">
          {score}
        </span>
        <div className="text-gray-500">
          <p className="text-lg">Out of</p>
          <p className="text-4xl font-bold">{questions}</p>
        </div>
      </div>
      <div className="mt-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
          Reset
        </button>
      </div>
    </div>
  );
};

export default ScoreBoard;