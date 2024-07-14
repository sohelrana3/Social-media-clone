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
      <div>
        <h2>home page</h2>
      </div>
     
    </>
  );
};

export default Home;
