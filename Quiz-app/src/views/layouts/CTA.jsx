import React from 'react';
import QuestionCard from '../QuestionCard';
import { Link, useNavigate } from "react-router-dom";
const CTA = () => {
  return (
    <section id="cta" className="relative p-6 text-center text-white bg-cover bg-center" style={{ backgroundImage: "url('/img/quizzz.jpg')" }}>
      <div className="bg-black bg-opacity-50 p-8 rounded-lg">
        <h2 className="text-2xl mb-4">Ready to challenge yourself?</h2>
        <Link to={'/quiz'}>
        <button 
          className="bg-blue-500 py-2 px-4 rounded hover:bg-blue-600 transition duration-300 transform hover:scale-105"
          onClick={() => {}}
        >
          Start Now
        </button>
        </Link>
      </div>
    </section>
  );
};

export default CTA;
