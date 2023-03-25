import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

const Navbar = () => {
  const { user } = useAuthContext();
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="md:pb-5 navbar">
      <nav className="fixed inset-x-0 shadow-md top-0 z-20 px-2 text-sm border-gray-200 bg-white">
        <div className="flex flex-wrap items-center justify-between  mx-5 sm:mx-14">
          <Link to="/" className="flex">
            <img
              src="/logo.png"
              alt="Mudita Logo"
              className="w-16 h-16 md:w-16 md:h-16 md:pt-0"
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
            =
            {user ? (
              <div className="flex flex-row items-start w-full lg:ml-auto lg:w-auto lg:h-auto">
                <h3 className="font-bold text-xl text-custom-green ">
                  {user.user.name}
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="mx-4 text-custom-green w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                  />
                </svg>
              </div>
            ) : (
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
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
