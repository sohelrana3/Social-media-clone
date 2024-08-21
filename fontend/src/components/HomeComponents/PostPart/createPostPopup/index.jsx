import React from "react";
import {CircleCloseIcon} from "../../../../svg/CircleClose"

const CratePopUp = () => {
  return (
    <div className="absolute top-0 left-0 w-full flex justify-center items-center bg-[rgba(255,255,255,0.81)] h-screen z-20">
      <div className="w-[30%] bg-white shadow-md">
        <div className="border-b border-white p-2 relative">
          <h3 className="text-lg text-black text-center font-bold">
            Create Post
          </h3>
          <div className="absolute top-1 right-1 cursor-pointer">
            <CircleCloseIcon />
          </div>
        </div>
        <div className="px-3 py-4">
          <div className="flex items-center gap-x-3">
            <div className="w-12 h-12 rounded-full bg-gray-200"></div>
            <h4>one it park</h4>
          </div>
        </div>
        <div className="mt4">
          <textarea
            placeholder="What's up Samething"
            className="w-full min-h-24 outline-none p-2"
          />
        </div>
      </div>
    </div>
  );
};

export default CratePopUp;
