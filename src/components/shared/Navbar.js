import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  
  return (
    <div className="md:pb-5 navbar">
      <nav className="fixed inset-x-0 top-0 z-20 px-2 text-sm border-gray-200 bg-white">
        <div className="flex flex-wrap items-center justify-between  mx-5 sm:mx-14">
          <Link to="/" className="flex">
            <img
              src="/logo.png"
              alt="Mudita Logo"
              className="w-24 h-24 md:w-24 md:h-24 md:pt-0"
            />
          </Link>
          <button
            className="inline-flex float-right ml-auto text-custom-blue rounded outline-none hover:text-white lg:hidden"
            onClick={handleClick}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div
            className={`${
              active ? "" : "hidden"
            }   w-full lg:inline-flex lg:flex-grow lg:w-auto mt-4`}
          >
            <div className="flex flex-row items-start w-full lg:ml-auto lg:w-auto lg:h-auto">
              <Link
                to="/Login"
                className="items-center rounded-full mx-3 justify-center w-auto px-4 py-2 mb-3 font-bold text-custom-green lg:inline-flex hover:bg-custom-light-green ring-2 ring-custom-green"
              >
                Login
              </Link>
              <Link
                to="/Register"
                className="items-center mx-3 rounded-full bg-new-green justify-center w-auto px-4 py-2 mb-3 font-bold text-custom-green lg:inline-flex hover:bg-hover-green hover:text-white"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;