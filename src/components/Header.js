import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firbase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { adduser, removeuser } from "../utils/userSlice";
import { Netflix_logo, SUPPORTED_LANGUAGES } from "../utils/constant";
import { setGPTClicked } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const langSelector = useSelector((store) => store.config.lang);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleLanguageChange = (e) => {
    const langChange = e.target.value;
    dispatch(changeLanguage(langChange));
  };

  const handleGptClick = () => {
    dispatch(setGPTClicked());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black flex justify-between z-1">
      <img className="w-56" alt="logo" src={Netflix_logo} />
      {user && (
        <div className="flex items-center p-2">
          <select
            className="appearance-none mx-2 bg-gray-700 border border-gray text-white py-2 px-4  rounded-lg leading-tight focus:outline-none focus:border-gray-900 focus:ring-opacity-50"
            onChange={handleLanguageChange}
            value={langSelector}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>

          <button
            className="py-2 px-4 mx-2 bg-purple-800 text-white rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
            onClick={handleGptClick}
          >
            Gpt Search
          </button>

          <img
            className="w-12 h-12 rounded-full mx-2"
            alt="user-icon"
            src={user.photoURL}
          />

          <button
            className="text-white font-bold p-2 hover:underline"
            onClick={handleSignout}
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
