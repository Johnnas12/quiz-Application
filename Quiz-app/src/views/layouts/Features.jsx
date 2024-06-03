import React from 'react';

const Features = () => {
  return (
    <section id="about" className="py-12 bg-gray-200 text-center">
      <h2 className="text-3xl font-semibold mb-8">Features</h2>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md w-80">
          <svg className="h-12 w-12 text-blue-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m4 0h-1m0 0h-1m-2 0v-4h1m0 4h1m0 0v-4h1m-4 0v-4h1m0 4h1m0 4h-1v4h-1m0-4h-1v4h-1m0 4v-4h1m-1 4v4h1m0-4h1v4h1m0-4v4h-1m0-4v-4h-1m4 0v4h-1m0-4h-1v4h1"></path>
          </svg>
          <h3 className="text-xl font-semibold mb-2">Multiple Quiz Categories</h3>
          <p className="text-gray-600">Choose from a variety of categories to test your knowledge on different subjects.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md w-80">
          <svg className="h-12 w-12 text-blue-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m4 0h-1m0 0h-1m-2 0v-4h1m0 4h1m0 0v-4h1m-4 0v-4h1m0 4h1m0 4h-1v4h-1m0-4h-1v4h-1m0 4v-4h1m-1 4v4h1m0-4h1v4h1m0-4v4h-1m0-4v-4h-1m4 0v4h-1m0-4h-1v4h1"></path>
          </svg>
          <h3 className="text-xl font-semibold mb-2">Instant Feedback</h3>
          <p className="text-gray-600">Get immediate feedback on your answers to help you learn and improve.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md w-80">
          <svg className="h-12 w-12 text-blue-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m4 0h-1m0 0h-1m-2 0v-4h1m0 4h1m0 0v-4h1m-4 0v-4h1m0 4h1m0 4h-1v4h-1m0-4h-1v4h-1m0 4v-4h1m-1 4v4h1m0-4h1v4h1m0-4v4h-1m0-4v-4h-1m4 0v4h-1m0-4h-1v4h1"></path>
          </svg>
          <h3 className="text-xl font-semibold mb-2">Track Your Progress</h3>
          <p className="text-gray-600">Monitor your progress and see how much you've improved over time.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
