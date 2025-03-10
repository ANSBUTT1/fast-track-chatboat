import React, { useState, useRef, useEffect } from "react";
import { TbGridDots } from "react-icons/tb";
import {
  FaApple,
  FaGoogle,
  FaMicrosoft,
  FaAmazon,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaSlack,
} from "react-icons/fa";
import { ImLab } from "react-icons/im";
import image from "../assets/student4.jpg"; // Image for user profile
import { Link } from "react-router";

const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isFastTrackDropdownVisible, setFastTrackDropdownVisible] =
    useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // New state for authentication
  const [showModal, setShowModal] = useState(true); // New state for modal visibility
  const dropdownRef = useRef(null);
  const fastTrackDropdownRef = useRef(null);

  const toggleDropdown = () => setDropdownVisible((prevState) => !prevState);
  const toggleFastTrackDropdown = () =>
    setFastTrackDropdownVisible((prevState) => !prevState);
  const closeModal = () => setShowModal(false); // Close modal function

  const closeDropdown = () => {
    setDropdownVisible(false);
    setFastTrackDropdownVisible(false);
  };

  const handleDropdownItemClick = () => {
    closeDropdown();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      closeDropdown(event);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header>
      <nav>
        <ul className="flex justify-end items-center gap-4 p-4">
          {!isAuthenticated ? (
            <>
              <li>
              <Link to="/login"> 
                <button
                  className="border border-primary hover:bg-secondary hover:text-primary text-secondary bg-primary p-2 px-4 rounded-full text-sm font-semibold transition-colors duration-200 ease-in-out hover:bg-primary/50 cursor-pointer"
                  onClick={() => console.log("Login")}
                >
                  Login
                </button>
                </Link>
              </li>
              <li>
              <Link to="/signup">
                <button
                  className="border text-primary border-primary hover:text-secondary p-2 px-4 rounded-full text-sm font-semibold transition-colors duration-200 ease-in-out hover:bg-primary cursor-pointer"
                  onClick={() => console.log("Sign Up")}
                >
                  SignUp
                </button>
                </Link>
              </li>
            </>
          ) : (
            <>
              {/* Gmail Link */}
              <li>
                <Link  to="/services">
                <div className="hover:underline text-sm font-semibold transition-colors duration-200 ease-in-out hover:text-primary cursor-pointer">
                  Services
                </div>
                </Link>
              </li>

              {/* Images Link */}
              <li>
              <Link to="/pricing">
                <div className="hover:underline text-sm font-semibold transition-colors duration-200 ease-in-out hover:text-primary cursor-pointer">
                  Pricing
                </div>
              </Link>
              </li>

              {/* Labs Icon with Tooltip */}
              <li className="flex flex-col justify-center items-center group relative">
                <div
                  className="flex justify-center items-center p-2 rounded-full transition-all duration-200 ease-in-out hover:bg-primary/10 cursor-pointer"
                  style={{ height: "38px", width: "38px" }}
                >
                  <ImLab className="text-primary text-2xl" />
                </div>
                <div className="absolute top-8 left-1/2 w-28 transform -translate-x-1/2 hidden group-hover:block text-xs font-semibold bg-primary/70 text-white py-2 px-4 rounded-md mt-3 transition-all duration-300 ease-in-out">
                  Search Labs
                </div>
              </li>

              {/* FasTrak Apps Icon with Tooltip */}
              <li className="relative group">
                <div
                  className="flex justify-center items-center p-2 rounded-full transition-all duration-200 ease-in-out hover:bg-primary/10 cursor-pointer"
                  style={{ height: "38px", width: "38px" }}
                  onClick={toggleFastTrackDropdown} // Toggle on click
                >
                  <TbGridDots className="text-primary text-2xl" />
                  <div className="absolute top-8 left-0 w-32 transform -translate-x-1/2 hidden group-hover:block text-xs font-semibold bg-primary/70 text-white py-2 px-4 rounded-md mt-3 transition-all duration-300 ease-in-out">
                    FasTrak Apps
                  </div>
                </div>

                {/* FasTrak Apps Dropdown */}
                {isFastTrackDropdownVisible && (
                  <div
                    ref={fastTrackDropdownRef}
                    className="grid grid-cols-2 md:grid-cols-3 gap-2 absolute top-8 -left-24 transform -translate-x-1/2 bg-gray-200 shadow-lg rounded-md mt-2 p-4 z-10 w-[20rem]"
                  >
                    <div
                      onClick={handleDropdownItemClick}
                      className="flex flex-col justify-center items-center"
                    >
                      <div
                        className="flex justify-center items-center  rounded-full  cursor-pointer"
                        style={{ height: "50px", width: "50px" }}
                      >
                        <FaApple className="text-primary text-3xl" />
                      </div>
                      <span className="text-center text-primary text-sm ">
                        Apple
                      </span>
                    </div>

                    <div
                      onClick={handleDropdownItemClick}
                      className="flex flex-col justify-center items-center"
                    >
                      <div
                        className="flex justify-center items-center  rounded-full  cursor-pointer"
                        style={{ height: "50px", width: "50px" }}
                      >
                        <FaGoogle className="text-[#4285F4] text-3xl" />
                      </div>
                      <span className="text-center text-primary text-sm ">
                        Google
                      </span>
                    </div>

                    <div
                      onClick={handleDropdownItemClick}
                      className="flex flex-col justify-center items-center"
                    >
                      <div
                        className="flex justify-center items-center  rounded-full  cursor-pointer"
                        style={{ height: "50px", width: "50px" }}
                      >
                        <FaMicrosoft className="text-[#00A4EF] text-3xl" />
                      </div>
                      <span className="text-center text-primary text-sm ">
                        Microsoft
                      </span>
                    </div>

                    <div
                      onClick={handleDropdownItemClick}
                      className="flex flex-col justify-center items-center"
                    >
                      <div
                        className="flex justify-center items-center  rounded-full  cursor-pointer"
                        style={{ height: "50px", width: "50px" }}
                      >
                        <FaAmazon className="text-[#FF9900] text-3xl" />
                      </div>
                      <span className="text-center text-primary text-sm ">
                        Amazon
                      </span>
                    </div>

                    <div
                      onClick={handleDropdownItemClick}
                      className="flex flex-col justify-center items-center"
                    >
                      <div
                        className="flex justify-center items-center  rounded-full  cursor-pointer"
                        style={{ height: "50px", width: "50px" }}
                      >
                        <FaFacebook className="text-[#1877F2] text-3xl" />
                      </div>
                      <span className="text-center text-primary text-sm ">
                        Facebook
                      </span>
                    </div>

                    <div
                      onClick={handleDropdownItemClick}
                      className="flex flex-col justify-center items-center"
                    >
                      <div
                        className="flex justify-center items-center  rounded-full  cursor-pointer"
                        style={{ height: "50px", width: "50px" }}
                      >
                        <FaTwitter className="text-[#1DA1F2] text-3xl" />
                      </div>
                      <span className="text-center text-primary text-sm ">
                        Twitter
                      </span>
                    </div>

                    <div
                      onClick={handleDropdownItemClick}
                      className="flex flex-col justify-center items-center"
                    >
                      <div
                        className="flex justify-center items-center  rounded-full  cursor-pointer"
                        style={{ height: "50px", width: "50px" }}
                      >
                        <FaLinkedin className="text-[#0A66C2] text-3xl" />
                      </div>
                      <span className="text-center text-primary text-sm ">
                        LinkedIn
                      </span>
                    </div>

                    <div
                      onClick={handleDropdownItemClick}
                      className="flex flex-col justify-center items-center"
                    >
                      <div
                        className="flex justify-center items-center  rounded-full  cursor-pointer"
                        style={{ height: "50px", width: "50px" }}
                      >
                        <FaSlack className="text-[#4A154B] text-3xl" />
                      </div>
                      <span className="text-center text-primary text-sm ">
                        Slack
                      </span>
                    </div>
                  </div>
                )}
              </li>

              {/* User Profile Icon with Dropdown */}
              <li className="group relative">
                <div
                  className="flex justify-center items-center p-1 rounded-full transition-all duration-200 ease-in-out hover:bg-primary/20 cursor-pointer"
                  style={{ height: "40px", width: "40px" }}
                >
                  <img
                    onClick={toggleDropdown}
                    width={90}
                    src={image}
                    alt="profile-icon"
                    className="rounded-full"
                  />
                </div>
                {/* Hover-based Dropdown */}
                <div className="absolute text-start p-3 top-8 -left-16 w-48 transform -translate-x-1/2 hidden group-hover:block text-xs font-semibold bg-primary/70 text-white py-2 rounded-md mt-3 transition-all duration-300 ease-in-out">
                  <h1>FasTrak Account</h1>
                  <h1 className="text-gray-300">Anas Butt</h1>
                  <h1 className="text-gray-300">anasbutt7079@gmail.com</h1>
                </div>

                {/* Click-based Dropdown */}
                {isDropdownVisible && (
                  <div
                    ref={dropdownRef}
                    className="absolute top-8 -left-48 w-[35vw] transform -translate-x-1/2 text-xs font-semibold bg-gray-100 text-secondary rounded-md mt-3 shadow-lg transition-all duration-300 ease-in-out z-50"
                  >
                    <div className="flex flex-col justify-center items-center mb-4 p-2 bg-gray-200 rounded-md">
                      <img
                        src={image}
                        alt="profile-icon"
                        className="w-24 h-24 rounded-full mb-4"
                      />
                      <h1 className="text-primary font-medium text-xl">
                        Hi, Anas!
                      </h1>
                      <h2 className="text-sm text-gray-600">
                        anasbutt7079@gmail.com
                      </h2>
                    </div>

                    {/* Dropdown Links */}
                    <div className="flex flex-col px-6 gap-2 py-2 max-h-[80vh] overflow-y-auto">
                      <div className="flex flex-col items-start gap-2 p-4 bg-gray-50 rounded-lg shadow-md">
                        <div className="flex gap-6">
                          <img
                            src={image}
                            alt="profile-icon"
                            className="w-16 h-16 rounded-full border-2 border-primary/50"
                          />
                          <div>
                            <h1 className="text-xl font-semibold text-gray-800">
                              Anas Butt
                            </h1>
                            <h2 className="text-sm text-gray-500">
                              anasbutt7079@gmail.com
                            </h2>
                          </div>
                        </div>
                        <div className="flex gap-6">
                          <img
                            src={image}
                            alt="profile-icon"
                            className="w-16 h-16 rounded-full border-2 border-primary/50"
                          />
                          <div>
                            <h1 className="text-xl font-semibold text-gray-800">
                              Anas Butt
                            </h1>
                            <h2 className="text-sm text-gray-500">
                              anasbutt7079@gmail.com
                            </h2>
                          </div>
                        </div>
                      </div>

                      {/* Sign Out Button */}
                      <div className="flex justify-center mt-2">
                        <button
                          className="text-left text-sm text-white bg-primary rounded-full py-2 px-4 hover:bg-primary/80 mb-2 transition-all duration-300 ease-in-out"
                          onClick={() => console.log("Sign out")}
                        >
                          Sign Out all Accounts
                        </button>
                      </div>

                      {/* Links Section */}
                      <div className="flex justify-center gap-6 mt-6">
                        <a
                          href="#"
                          className="text-sm text-primary hover:underline hover:text-gray-800 transition-all duration-200 ease-in-out"
                        >
                          Privacy Policy
                        </a>
                        <a
                          href="#"
                          className="text-sm text-primary hover:underline hover:text-gray-800 transition-all duration-200 ease-in-out"
                        >
                          Terms of Service
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            </>
          )}
        </ul>
      </nav>

      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-700 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg text-center shadow-lg w-80">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Welcome Back!
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              We are glad to see you again!
            </p>
            <div className="flex flex-col justify-around gap-4">
             

              <Link >
              <button
                onClick={() => {
                  setIsAuthenticated(true);
                  console.log("Login");
                  closeModal();
                }}
                className="border text-lg border-primary hover:bg-secondary hover:text-primary text-secondary bg-primary p-2 px-4 rounded-full  font-semibold w-full transition-colors duration-200 ease-in-out hover:bg-primary/50 cursor-pointer"
              >
                Login
              </button>
              </Link>
            
              <Link to="/signup">
              <button
                onClick={() => {
                  setIsAuthenticated(true);
                  console.log("Sign Up");
                  closeModal();
                }}
                className="border text-primary border-primary hover:text-secondary p-2 px-4 rounded-full w-full text-lg font-semibold transition-colors duration-200 ease-in-out hover:bg-primary cursor-pointer"
              >
                Sign Up
              </button>
              </Link>
              <span>Or</span>
              <button
                onClick={() => {
                  console.log("Guest");
                  setIsAuthenticated(false); // Set authentication state to false
                  closeModal();
                }}
                className="bg-gray-200 p-2 rounded-full text-sm font-semibold text-gray-800 transition-all duration-200 ease-in-out hover:bg-gray-300"
              >
                Guest
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
