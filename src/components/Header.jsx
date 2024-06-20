import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="absolute inset-x-0 top-0 z-10 w-full">
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link to="/" title="" className="flex items-center">
              <img className="w-auto h-16" src="bklog.png" alt="Logo" />
              <span className="text-lg font-amsterdam font-bold text-white" style={{ fontFamily: 'Amsterdam Four, cursive' }}>
                Ayaan Books
              </span>
            </Link>
          </div>
          <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
            <Link
              to="/"
              className={`text-base ${isActive('/') ? 'text-blue-500 font-bold' : 'text-white'} transition-all duration-200 hover:text-blue-500`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-base ${isActive('/about') ? 'text-blue-500 font-bold' : 'text-white'} transition-all duration-200 hover:text-blue-500`}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className={`text-base ${isActive('/contact') ? 'text-blue-500 font-bold' : 'text-white'} transition-all duration-200 hover:text-blue-500`}
            >
              Contact
            </Link>
          </div>
          <button type="button" className="inline-flex p-2 ml-1 text-white transition-all duration-200 rounded-md sm:ml-4 lg:hidden focus:bg-gray-100 hover:bg-gray-100">
            <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
