import React, { useRef, useState } from "react";
import { SearchIcon } from "../../../../svg/SearchIcon";
import OutSideClick from "../../../../funcations/click"

import SearchBox from "./SearchBox";

const HeaderPart = () => {
  let [show, setshow] = useState(false);
  let clickOutSide = useRef(null);
  OutSideClick(clickOutSide, () => {
    setshow(false);
  });
  return (
    <div className="flex justify-between relative">
      <div>
        <h4 className="text-black text-2xl font-bold">Feed</h4>
      </div>
      <div className="w-80 relative">
        <div
          className="flex items-center gap-x-3 border border-gray-500 rounded-full px-4 py-[10px]"
          onClick={() => setshow(true)}
        >
          <div className="cursor-pointer">
            <SearchIcon />
          </div>
          <div>
            <input
              type="text"
              placeholder="Search"
              className="focus:outline-none"
              ref={clickOutSide}
            />
          </div>
        </div>

        <div className="absolute top-0 left-0">{show && <SearchBox />}</div>
      </div>
    </div>
  );
};

export default HeaderPart;
