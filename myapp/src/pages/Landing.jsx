import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
        Welcome to CreatorConnect
      </h1>
      <p className="text-lg md:text-xl text-center max-w-xl mb-8">
        A platform that connects content creators with skilled video editors and content writers.
      </p>

      <div className="flex gap-6">
        <Link to="/signup">
          <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition">
            Sign Up
          </button>
        </Link>
        <Link to="/signin">
          <button className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
