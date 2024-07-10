import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const { userinfo } = useSelector((state) => state.user);
  return <div>Home index</div>;
};

export default Home;
