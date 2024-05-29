import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";
import { auth } from "../utils/firbase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { adduser } from "../utils/userSlice";
import { BG_IMG, avatar_logo } from "../utils/constant";

const Login = () => {
  const [isSignInform, setisSignInform] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

  const handletoggleSignInform = () => {
    setisSignInform(!isSignInform);
  };

  const handleButtonClick = () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    const message = checkValidData(emailValue, passwordValue);
    console.log(message);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInform) {
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: avatar_logo,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                adduser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          console.log("Signed up:", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("Signed in:", user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  return (
    <div className="relative min-h-screen bg-black">
      <Header />
      <img alt="background" src={BG_IMG} className="absolute top-0 left-0 w-full h-full object-cover z-0" />
      <div className="px-4 md:px-8 lg:px-12 xl:px-20 flex justify-center items-center min-h-screen">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="p-6 sm:p-12 bg-black w-full sm:w-3/4 md:w-1/2 lg:w-1/3 text-white bg-opacity-80 rounded-lg shadow-lg z-10"
        >
          <h1 className="font-bold text-3xl my-2">
            {isSignInform ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInform && (
            <input
              type="text"
              ref={name}
              placeholder="Full Name"
              className="p-4 my-4 w-full bg-gray-700 rounded-lg"
              required
            />
          )}

          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          />
          <button
            className="p-4 my-6 bg-red-700 w-full rounded-lg"
            onClick={handleButtonClick}
          >
            {isSignInform ? "Sign In" : "Sign Up"}
          </button>
          {errorMessage && (
            <p className="p-2 text-red-400 font-bold text-lg">{errorMessage}</p>
          )}
          <p className="py-4 cursor-pointer text-center"
            onClick={handletoggleSignInform}
          >
            {isSignInform
              ? "New User? Sign Up Now"
              : "Already registered? Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;