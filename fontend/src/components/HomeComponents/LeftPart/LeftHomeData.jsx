import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SettingsOption from "./SettingOption";

const LeftHomeData = ({ data }) => {
  let [show, setshow] = useState(false);
  const IconItem = data.icon;

  return (
    <>
      {data.title == "Settings" ? (
        <>
          <div className="relative">
            <NavLink
              to={data.to}
              className="flex items-center gap-4 mb-11 hover:bg-black py-3 px-6 rounded-full cursor-pointer group transition-all ease-linear duration-100"
              onClick={() => setshow(!show)}
            >
              <div className="group-hover:text-white transition-all ease-linear duration-100">
                <IconItem />
              </div>
              <div>
                <p className="text-lg text-black font-normal group-hover:text-white transition-all ease-linear duration-100">
                  {data.title}
                </p>
              </div>
            </NavLink>
            {show && (
              <div className="absolute top-16 left-0 bg-white shadow-md rounded-md w-[250px]">
                {data.title == "Settings" && (
                  <SettingsOption />
                  
                )}
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <NavLink
            to={data.to}
            className="flex items-center gap-4 mb-11 hover:bg-black py-3 px-6 rounded-full cursor-pointer group transition-all ease-linear duration-100"
            onClick={() => setshow(!show)}
          >
            <div className="group-hover:text-white transition-all ease-linear duration-100">
              <IconItem />
            </div>
            <div>
              <p className="text-lg text-black font-normal group-hover:text-white transition-all ease-linear duration-100">
                {data.title}
              </p>
            </div>
          </NavLink>
        </>
      )}
    </>
  );
};

export default LeftHomeData;
