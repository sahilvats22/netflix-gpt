import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[10%] px-6 md:px-12 absolute text-white top-1/4">
      <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/2">{overview}</p>
      <div className="flex gap-4 my-2 md:m-0">
        <button className="bg-gray-500 text-white py-2 px-4 md:py-4 md:px-12  rounded-lg text-xl hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className="hidden md:inline-block bg-gray-200 text-black py-4 px-12 rounded-lg text-xl hover:bg-opacity-80">
          {" "}
          ℹ️ More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
