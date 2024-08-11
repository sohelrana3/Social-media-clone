import React from "react";
import { StoryData } from "./storiesData";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

const StoriesData = () => {
  return (
    <>
      <div className="w-full mb-5">
        <h4 className="text-lg text-black font-bold">Stories</h4>
      </div>

      <div className="w-[300px]">
        <Swiper spaceBetween={5} slidesPerView={3}>
          <div className="flex items-center gap-x-3">
            {StoryData.map((data, index) => (
              <SwiperSlide
                key={index}
                style={{
                  background: `url(${data.bgPicture})`,
                }}
                className="w-[33%] h-[200px] bg-cover bg-no-repeat bg-center"
              >
                <div className="w-8 h-8 rounded-full overflow-hidden object-cover ml-2 mt-2 border border-blue-500">
                  <img src={data.Picture} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default StoriesData;
