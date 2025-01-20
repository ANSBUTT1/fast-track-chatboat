import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const PageLayout = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default PageLayout;
