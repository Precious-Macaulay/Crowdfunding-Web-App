import React from "react";
import logo from "../images/logo.png";
import user from "../images/anisha (2).png";
import { Link } from "react-router-dom";

const DashboardHeader = () => {
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="">
          <img src={logo} alt="" />
        </div>
        <div className="flex">
          <img src={user} alt="" className="w-9 rounded-full" />
          <Link to="/prompt" className="pl-5 pt-1 text-red-500">Logout</Link>
        </div>
      </div>
    </nav>
  );
};

export default DashboardHeader;
