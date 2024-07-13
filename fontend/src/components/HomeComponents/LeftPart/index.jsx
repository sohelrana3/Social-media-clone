import React from "react";
import Leftprofile from "./Leftprofile";
import LeftHomeData from "./LeftHomeData";
import { Leftdata } from "./data";

const LeftPart = () => {
  return (
    <>
      <div>
        <Leftprofile />
      </div>
      <div className="mt-10 w-3/4 mx-auto">
        {Leftdata.map((data, index) => (
          <LeftHomeData key={index} data={data}/>
        ))}
      </div>
    </>
  );
};

export default LeftPart;
