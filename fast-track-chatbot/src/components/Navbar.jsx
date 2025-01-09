import React from "react";
import {  FaFacebook } from "react-icons/fa";
import { TbGridDots } from "react-icons/tb";
import { ImLab } from "react-icons/im";
import image from  "../assets/student4.jpg"
const Navbar = () => {
  return (
    <div>
      <header>
        <nav>
          <ul className="flex justify-end items-center gap-4 p-4">
            <li>
              {" "}
              <div className="hover:underline flex justify-center items-center rounded-full  cursor-pointer text-sm font-semibold">
                Gmail
              </div>
            </li>
            <li>
              {" "}
              <div className="hover:underline flex justify-center items-center rounded-full  cursor-pointer text-sm font-semibold">
                Images
              </div>
            </li>
            <li className="flex flex-col justify-center items-center group relative">
              <div
                className="flex justify-center items-center p-2 rounded-full hover:bg-gray-200 cursor-pointer"
                style={{  height: "38px", width: "38px"}}
              >
                <ImLab className="text-primary/40 text-2xl" />
              </div>
              {/* Dropdown menu */}
              <div className="absolute top-8 left-1/2 w-20 transform -translate-x-1/2 hidden group-hover:block text-xs font-semibold bg-primary/70 text-secondary px-2 py-1 rounded-md mt-3 transition-all delay-1000">
                Search Labs
              </div>
            </li>
            <li>
              {" "}
              <div
                className="flex justify-center items-center p-2 rounded-full hover:bg-gray-200 cursor-pointer"
                style={{ height: "38px", width: "38px" }}
              >
                <TbGridDots  className="text-primary text-2xl" />
                </div>
            </li>
            <li className="group">
              {" "}
              <div
                className="flex justify-center items-center p-[2px] rounded-full group-hover:bg-gray-300 cursor-pointer"
                style={{ height: "40px", width: "40px" }}
              >
               <img width={90} src={image} alt="profile-icon" className="rounded-full" />
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
