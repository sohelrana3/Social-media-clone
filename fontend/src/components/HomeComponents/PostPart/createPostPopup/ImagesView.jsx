import React, { useRef, useState } from "react";
import EmojiPickers from "./EmojiPickers";
import { CircleCloseIcon } from "../../../../svg/CircleClose";
import { Media } from "../../../../svg/Media";

const ImagesView = ({ text, settext, textref, setshow }) => {
  const chooseFile = useRef(null);
  const [imge, setimge] = useState([]);

  const handleImagesUpload = (e) => {
    const file = Array.from(e.target.files);
    file.forEach((img) => {
      //   if (img.type !== "image/jpg"&& img.type !== "image/png") {
      //     console.log("not image found");
      //   }

      const renderFiles = new FileReader();
      renderFiles.readAsDataURL(img);
      renderFiles.onload = (renderImages) => {
        setimge((imge) => [...imge, renderImages.target.result]);
      };
    });

    console.log(imge);
  };
  const handlecClick = () => {
    chooseFile.current.click();
  };
  return (
    <>
      <EmojiPickers text={text} settext={settext} textref={textref} />
      <div className="p-2 border border-gray-200 rounded-md mb-5 relative">
        <div className="w-full h-[300px] bg-gray-200 rounded-md ">
          <input
            type="file"
            multiple
            accept="images/jpg,images/png,images/gif,images/webp"
            className="hidden"
            ref={chooseFile}
            onChange={handleImagesUpload}
          />
          <div className="absolute top-0 right-0 z-50 cursor-pointer " onClick={()=> setimge([])}>
            <CircleCloseIcon />
          </div>
          {imge && imge.length ? (
            <div
              className={`${
                imge.length === 1
                  ? "overflow-hidden w-full h-full"
                  : imge.length === 2
                  ? "overflow-hidden w-full h-full grid grid-cols-2 gap-1"
                  : imge.length === 3
                  ? "overflow-hidden w-full h-full grid grid-cols-2 gap-1"
                  : imge.length === 4
                  ? "overflow-hidden w-full h-full grid grid-cols-2 gap-1"
                  : imge.length >= 5
                  ? "overflow-hidden w-full h-full grid grid-cols-2 gap-1"
                  : "overflow-hidden"
              }`}
            >
              {imge.slice(0, 4).map((item, index) => (
                <img
                  key={index}
                  src={item}
                  className={`object-cover w-full h-full ${
                    imge.length === 3
                      ? "[&:nth-of-type(1)]:row-start-1"
                      : imge.length === 4
                      ? "[&:nth-of-type(1)]:row-start-2"
                      : ""
                  }`}
                />
              ))}
              <div>
                {imge.length >= 5 && (
                  <div className="absolute bottom-2 right-2 w-10 h-10  bg-gray-100 flex justify-center items-center rounded-full">
                    <span> +{imge.length - 4}</span>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className=" flex items-center justify-center h-full">
              <div className="absolute top-0 right-0 z-50 cursor-pointer" onClick={()=> setshow(false)}>
            
                <CircleCloseIcon />
              </div>

              <div className="flex flex-col items-center">
                <div
                  className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center cursor-pointer"
                  onClick={handlecClick}
                >
                  <Media />
                </div>
                <span>Add Photos/videos </span>
                <span>or drog and drop</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ImagesView;
