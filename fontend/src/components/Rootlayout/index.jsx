import React from 'react'
import LeftPart from "../../components/HomeComponents/LeftPart";
import HomePost from "../../components/HomeComponents/PostPart";
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className="mx-20 grid grid-cols-[1fr,3fr,1fr] mt-10 gap-x-10">
        <div className="">
          <LeftPart />
        </div>
        <div>
          <HomePost />
          <Outlet />
        </div>
        <div>

          {/* Right part */}
        </div>
      </div>
  )
}

export default RootLayout