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
  const showgptSearch = useSelector((store) => store.gpt.gptclicked);

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
  }, [dispatch, navigate]);

  return (
    <div className="absolute w-screen px-4 sm:px-8 py-2 bg-gradient-to-b from-black flex flex-col sm:flex-row justify-between items-center z-10">
      <img className="w-32 sm:w-56 h-auto mb-2 sm:mb-0" alt="logo" src={Netflix_logo} />
      {user && (
        <div className="flex items-center space-x-2">
          {showgptSearch && (
            <select
              className="appearance-none bg-gray-700 border border-gray-500 text-white py-2 px-4 rounded-lg leading-tight focus:outline-none focus:border-gray-900 focus:ring-opacity-50"
              onChange={handleLanguageChange}
              value={langSelector}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="py-2 px-4 bg-purple-800 text-white rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
            onClick={handleGptClick}
          >
            {showgptSearch ? "HomePage" : "Gpt Search"}
          </button>

          <img
            className="w-12 sm:w-16 h-12 sm:h-16 rounded-full"
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