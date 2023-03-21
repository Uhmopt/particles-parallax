import React from "react";
import { Outlet } from "react-router-dom";
import { HomeHeader } from "./HomeHeader";

export default function Layout() {
  return (
    <div className="">
      <HomeHeader />
      <Outlet />
    </div>
  );
}
