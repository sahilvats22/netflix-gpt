import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firbase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user); // Define user from store
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black flex justify-between">
      <img
        className="w-56"
        alt="logo"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />
      {user &&<div className="flex p-2">
        {user && (
          <img
            className="w-12 h-12"
            alt="user-icon"
            src={user.photoURL}
          />
        )}
        <button className="text-white font-bold p-2" onClick={handleSignout}>
          (Sign Out)
        </button>
      </div>}
    </div>
  );
};

export default Header;
