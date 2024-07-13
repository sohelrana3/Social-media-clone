import React, { useEffect, useRef, useState } from "react";
import { SearchIcon } from "../../../../svg/SearchIcon";

const SearchBox = () => {
  let inputBox = useRef(null);
  let [icon, seticon] = useState(true);

  useEffect(() => {
    inputBox.current.focus();
  }, []);
  return (
    <div className=" w-80 bg-white rounded-md shadow-md min-h-[400px] max-h-[700px]">
      <div className="flex items-center gap-x-3 border border-gray-500 rounded-full px-4 py-[10px] ">
        {icon && (
          <div className="cursor-pointer">
            <SearchIcon />
          </div>
        )}

        <div>
          <input
            ref={inputBox}
            type="text"
            placeholder="Search"
            className="focus:outline-none"
            onFocus={()=> seticon(false)}
            onBlur={()=> seticon(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
