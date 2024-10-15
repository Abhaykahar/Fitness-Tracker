import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Header() {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-black text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link to="/" className="hover:text-gray-300">Fitness Tracker</Link>
        </h1>

        <button
          className="block lg:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

    
        <ul className={`flex-col lg:flex-row lg:space-x-4 lg:flex mt-3 lg:mt-0 ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
          <li>
            <Link to="/dashboard" className="hover:text-gray-300">Dashboard</Link>
          </li>
          <li>
            <Link to="/log-workout" className="hover:text-gray-300">Log Workout</Link>
          </li>
          <li>
            <Link to="/statistics" className="hover:text-gray-300">Statistics</Link>
          </li>
          <li>
            <Link to="/set-goals" className="hover:text-gray-300">Set Goals</Link>
          </li>
          {user ? (
            <li>
              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
                Logout
              </button>
            </li>
          ) : (
            <li>
              <Link to="/login" className="hover:text-gray-300">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
