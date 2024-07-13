import React from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";
import LeftPart from "../../components/HomeComponents/LeftPart";
import HomePost from "../../components/HomeComponents/PostPart";

const Home = () => {
  const { userinfo } = useSelector((state) => state.user);
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <div className="mx-20 grid grid-cols-[1fr,3fr,1fr] mt-10 gap-x-10">
        <div className="">
          <LeftPart />
        </div>
        <div>
          <HomePost />
        </div>
        <div>

          {/* Right part */}
        </div>
      </div>
    </>
  );
};

export default Home;
