import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firbase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { adduser, removeuser } from "../utils/userSlice";
import { Netflix_logo } from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user); // Define user from store
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          adduser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeuser());
        navigate("/");
      }
    });
    return ()=>unsubscribe();
  }, []);
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black flex justify-between z-1">
      <img
        className="w-56"
        alt="logo"
        src={Netflix_logo}
      />
      {user && (
        <div className="flex p-2">
          {user && (
            <img className="w-12 h-12" alt="user-icon" src={user.photoURL} />
          )}
          <button className="text-white font-bold p-2" onClick={handleSignout}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
