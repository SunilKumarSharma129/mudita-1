import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-custom-light-green">
      <div className="flex flex-col py-5 my-4 bg-white rounded-lg shadow sm:px-6 md:px-8 lg:px-10">
        <div className="inline-flex self-center">
          <Link to="/" className="flex">
            <img
              src="/favicon.png"
              alt="Mudita Logo"
              className="w-24 h-24"
            />
          </Link>
        </div>
        <div className="self-center sm:text-xl md:text-3xl text-4xl text-custom-green p-0 mx-auto">Log In</div>
        <div className="p-6">
          <form>
            <div className="flex flex-col gap-4 mb-2">
              <div className="flex flex-col gap-4 mb-1">
                <div className="relative">
                  <input
                    type="text"
                    className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-custom-green focus:border-transparent"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-2">
                <div className="relative ">
                  <input
                    type="password"
                    className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-custom-green focus:border-transparent"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="flex w-full mb-3">
                <input
                  type="submit"
                  className="w-full px-4 py-2 text-center text-white transition duration-200 ease-in rounded-lg shadow-md cursor-pointer bg-custom-green hover:bg-transparent hover:ring-custom-green focus:outline-none hover:ring-2 hover:text-custom-green"
                  id="create-account-email"
                  value="Login"
                  onClick={(e) => submitForm(e)}
                />
              </div>
            </div>
          </form>
          <span className="justify-center pb-5 text-sm text-center text-hover-green flex-items-center">
            Don't have an account ?&nbsp;
            <Link
              to="/Register"
              className="px-1 text-sm text-custom-green hover:text-custom-hover-green"
            >
              Register
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;