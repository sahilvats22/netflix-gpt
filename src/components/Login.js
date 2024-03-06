import React, { useRef, useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInform, setisSignInform] = useState(true);

  const handletoggleSignInform = () => {
    setisSignInform(!isSignInform);
  };
  return (
    <div>
      <div className="absolute">
        <Header />
        <img
          alt="image"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        />
      </div>
      <form className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl my-2">
          {isSignInform ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInform && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}

        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignInform ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={handletoggleSignInform}>
          {isSignInform
            ? "New User? Sign Up Now"
            : "Already registered?Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
