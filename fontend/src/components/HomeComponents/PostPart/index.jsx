import React from "react";
import { LiveIcon } from "../../../svg/Live";
import { Media } from "../../../svg/Media";

const HomePost = () => {
  return (
    <div className="mt-10 py-6 px-6 bg-gray-100 rounded">
      <div className="flex items-center gap-x-3 w-full p-2 bg-white rounded-full mb-6 ">
        <div className="w-12 h-12 rounded-full bg-black"></div>
        <input
          type="text"
          placeholder="What is up say something"
          className="focus:outline-none w-full"
        />
      </div>
      <div className="border-t-2 border-white flex items-center justify-around">
        <div className="w-[33%] flex items-center gap-x-3 mt-4">
          <LiveIcon />
          <span>Live Video</span>
        </div>
        <div className="w-[33%] flex items-center gap-x-3 mt-4">
          <Media />
          <span>Images / Gallery</span>
        </div>
        <div className="w-[33%] flex items-center gap-x-3 mt-4">
          <LiveIcon />
          <span>Activities</span>
        </div>
      </div>
    </div>
  );
};

export default HomePost;
