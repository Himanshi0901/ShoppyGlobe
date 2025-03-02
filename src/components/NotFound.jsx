import React from "react";

const NotFound = () => {
  return (
    <div className="flex  items-center justify-center min-h-screen bg-sky-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-black mb-4">404</h1>
        <p className="text-gray-700 text-lg  mb-6">The page you are looking for cannot be found.</p>
        <a
          href="/"
          className="bg-gray text-white px-4 py-2 rounded-lg shadow-md hover:bg-slate-600 transition"
        >
          Go Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
