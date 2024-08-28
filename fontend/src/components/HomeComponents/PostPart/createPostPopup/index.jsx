import React, { useEffect, useRef, useState } from "react";
import { CircleCloseIcon } from "../../../../svg/CircleClose";
import AddPost from "./AddPost";
import EmojiPickers from "./EmojiPickers";
import Feeling from "../../../../svg/Feeling";
import ImagesView from "./ImagesView";

const CratePopUp = ({PopShow}) => {
  const [coursorPoint, setcoursorPoint] = useState();
  const [text, settext] = useState("");
  const [show, setshow] = useState(false);
  const [images, setimages] = useState([]);
  const textref = useRef();

  return (
    <div className="absolute top-0 left-0 w-full flex justify-center items-center bg-[rgba(255,255,255,0.81)] h-screen z-20">
      <div className="w-[30%] bg-white shadow-md">
        <div className="border-b border-white p-2 relative">
          <h3 className="text-lg text-black text-center font-bold">
            Create Post
          </h3>
          <div className="absolute top-1 right-1 cursor-pointer" onClick={()=> PopShow(false)}>
            <CircleCloseIcon />
          </div>
        </div>
        <div className="px-3 py-4">
          <div className="flex items-center gap-x-3">
            <div className="w-12 h-12 rounded-full bg-gray-200"></div>
            <h4>one it park</h4>
          </div>
        </div>
        {show ? (
          <div>
            <ImagesView
              text={text}
              settext={settext}
              textref={textref}
              images={images}
              setimages={setimages}
              setshow={setshow}
            />
          </div>
        ) : (
          <>
            <EmojiPickers text={text} settext={settext} textref={textref} />
          </>
        )}

        <div>
          <AddPost setshow={setshow} show={show} />
        </div>

        {/* button */}

        <div className="mt3">
          <button className="w-full bg-gray-700 text-white p-2 rounded">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CratePopUp;
