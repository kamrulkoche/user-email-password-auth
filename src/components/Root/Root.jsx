import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Header/Header";

const Root = () => {
  return (
    <div className="">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
