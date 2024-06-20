import React from 'react';

function NotFound() {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-center">
      <img src="not found.jpeg" alt="404 Not Found" className="w-64 h-64 mb-8" />
      <h1 className="text-3xl font-bold text-white">404 Not Found</h1>
      <p className="text-xl text-gray-300 mt-4">Whoops! That page doesn’t exist.</p>
      <p className="text-gray-400 mt-2">Here are some helpful links instead:</p>
      <div className="mt-4 flex justify-center space-x-4">
        <a href="/" className="text-blue-500 hover:text-blue-400">Home</a>
        <a href="/search" className="text-blue-500 hover:text-blue-400">Search</a>
        <a href="/help" className="text-blue-500 hover:text-blue-400">Help</a>
        <a href="/contact" className="text-blue-500 hover:text-blue-400">Contact</a>
      </div>
    </div>
  );
}

export default NotFound;
