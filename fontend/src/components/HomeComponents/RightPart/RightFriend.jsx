import React from 'react'
import { Link } from "react-router-dom";
import { ReduceText } from "../../../funcations/ReduceText";

const RightFriend = () => {
    const orginalName = "Raiz Uddin islam at "

    const reduceText = ReduceText(orginalName, 6)
  return (
    <>
        <div>
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-lg text-black font-bold">RightFriends</h4>
          </div>
          <div>
            <Link
              to="#"
              className="text-base font-normal py-2 px-4 border border-black hover:bg-gray-800 transition-all ease-linear duration-100 hover:text-white rounded-full"
            >
              See All
            </Link>
          </div>
        </div>
        <div className="pt-4">
          <div className="flex items-center gap-x-3">
            <div className="w-10 h-10 bg-gray-800 rounded-full"></div>
            <div>
              <h5 className="text-base text-black font-bold">{reduceText}</h5>
              <span className="text-sm font-normal text-gray-500">2 hours ago</span>
            </div>
            <div className="flex gap-x-1 justify-between items-center pl-4">
              <button className="py-3 px-5 bg-black rounded-full text-white">Accept</button>
              <button className="py-3 px-5 bg-red-500 rounded-full text-white">Reject</button>
    
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RightFriend