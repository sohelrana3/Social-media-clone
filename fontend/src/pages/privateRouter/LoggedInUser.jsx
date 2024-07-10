import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const LoggedInUser = () => {
  const { userinfo } = useSelector((state) => state.user);
  return userinfo ? <Outlet /> : <Navigate to="/login" />;
};

export default LoggedInUser;
