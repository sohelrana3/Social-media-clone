import React from "react";
import LeftPart from "../../components/HomeComponents/LeftPart";
import HomePost from "../../components/HomeComponents/PostPart";
import RightFriends from "../HomeComponents/RightPart";
import { Outlet } from "react-router-dom";
import HeaderPart from "../HomeComponents/PostPart/Header";

const RootLayout = () => {
  return (
    <div className="mx-20 grid grid-cols-[1fr,3fr,1fr] mt-10 gap-x-10">
      <div className="">
        <LeftPart />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        {/* Right part */}
        <RightFriends />
      </div>
    </div>
  );
};

export default RootLayout;
