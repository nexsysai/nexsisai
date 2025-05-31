import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-800">
      <div className="loader-container relative w-40 h-40">
        <div className="x-loader text-6xl font-bold text-transparent">X</div>
        <div className="fill-effect"></div>
      </div>
    </div>
  );
};

export default Loader;
