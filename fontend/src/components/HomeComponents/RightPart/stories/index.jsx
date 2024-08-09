import React from "react";
import { StoryData } from "./storiesData";

const StoriesData = () => {
  return (
    <>
      <div className="w-full mb-5">
        <h4 className="text-lg text-black font-bold">Stories</h4>
      </div>
      <div className="flex items-center gap-x-3">
        {StoryData.slice(0, 3).map((data, index) => (
          <div
            key={index}
            style={{
              background: `url(${data.bgPicture})`,
            }}
            className="w-[33%] h-[400px] bg-cover bg-no-repeat bg-center"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden object-cover ml-2 mt-2 border border-blue-500">
              <img src={data.Picture} alt="" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default StoriesData;
