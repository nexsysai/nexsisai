import React from "react";
import { BounceLoader } from "react-spinners";

const NexsysLoader = ({ size = 100, color = "#1090CB" }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      {/* <div className="animate-spin rounded-full w-16 h-16 border-t-4 border-b-4 border-[#1090CB]"></div> */}
      <BounceLoader color="#1090CB" size={100} />
    </div>
  );
};

export default NexsysLoader;
