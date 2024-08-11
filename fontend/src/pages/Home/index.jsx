import React from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";
import HeaderPart from "../../components/HomeComponents/PostPart/Header";
import HomePost from "../../components/HomeComponents/PostPart";

const Home = () => {
  const { userinfo } = useSelector((state) => state.user);
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <div>
        <HeaderPart />
        <HomePost />
      </div>
    </>
  );
};

export default Home;
