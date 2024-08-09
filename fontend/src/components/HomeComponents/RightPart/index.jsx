import React from "react";
import RightFriend from "./RightFriend";
import StoriesData from "./stories";

const RightFriends = () => {
  return (
    <>
      <div>
        <RightFriend />
      </div>
      <div className="mt-10">
        <StoriesData />
      </div>
    </>
  );
};

export default RightFriends;
