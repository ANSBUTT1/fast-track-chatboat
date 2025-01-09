import React, { useState } from "react";
import {
  FaSearch,
  FaMicrophone,
  FaApple,
  FaGoogle,
  FaMicrosoft,
  FaAmazon,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaSlack,
} from "react-icons/fa";

const SearchEngine = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const suggestions = [
    "Search for Fast Track services",
    "Looking for Fast Track solutions?",
    "Fast Track your way to success",
    "How can Fast Track help you today?",
    "Explore Fast Track options",
    "Find Fast Track services near you",
    "Discover Fast Track products",
    "What does Fast Track offer?",
  ];

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setIsDropdownVisible(e.target.value.length > 0); // Show dropdown if input is not empty
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion); // Set clicked suggestion in the search query
    setIsDropdownVisible(false); // Hide the dropdown after selection
  };

  return (
    <div className="relative flex flex-col justify-center items-center min-h-[80vh] text-center py-8 ">
      <h1 className="text-5xl sm:text-6xl text-primary font-semibold mb-6">
        Fast Track
      </h1>

      <form
        onSubmit={handleSearchSubmit}
        className="relative flex items-center mb-6"
      >
        <input
          type="search"
          value={searchQuery}
          onChange={handleSearchChange}
          className="pl-20 pr-10 py-2 w-[50vw] h-14 shadow-sm outline-none shadow-primary/80 rounded-full text-gray-700"
          placeholder="Hey! How may I help you?"
          onFocus={() => setIsDropdownVisible(true)} // Show suggestions on focus
          onBlur={() => setIsDropdownVisible(false)} // Hide suggestions when focus is lost
        />
        <FaSearch className="absolute left-3 text-gray-500" />
        <FaMicrophone
          className="absolute right-3 text-gray-500 cursor-pointer hover:text-blue-500"
          onClick={toggleRecording}
        />

        {/* Suggestions Dropdown with transition effect */}
        <div
          className={`absolute top-12 left-0 right-0 mt-2 text-start bg-white border border-gray-300 rounded-lg shadow-lg transition-all duration-700 ease-in-out overflow-hidden ${
            isDropdownVisible && searchQuery
              ? "max-h-48 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          {isDropdownVisible && searchQuery && (
            <ul>
              {suggestions
                .filter((suggestion) =>
                  suggestion
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())
                )
                .map((suggestion, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSuggestionClick(suggestion)} // Set input value to the suggestion
                  >
                    {suggestion}
                  </li>
                ))}
            </ul>
          )}
        </div>
      </form>

      {/* Conditional Voice Recording Popup */}
      {isRecording && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
          <div className="relative flex flex-col justify-center w-[50vw] h-[50vh] p-6 bg-white border border-gray-300 rounded-lg shadow-lg">
            {/* Close button */}
            <button
              className="absolute top-2 right-6 w-10 h-10  rounded-full bg-red-500 text-3xl text-white"
              onClick={toggleRecording}
            >
              &times; {/* This is the "X" symbol */}
            </button>

            <div className="flex justify-center items-baseline gap-24 text-6xl">
              <h2 className="font-semibold mb-4">Speak Now...</h2>
              <FaMicrophone className="text-gray-500 cursor-pointer hover:text-blue-500 animate-pulse" />
            </div>

            {/* Stop recording button */}
            {/* The button has been removed as the close button in the top-left corner is the new way to stop */}
          </div>
        </div>
      )}

      {/* Company Icons Grid */}
      <div className="flex justify-center items-center mt-6">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-6">
          <div className="flex flex-col justify-center items-center">
            <div
              className="flex justify-center items-center p-2 rounded-full bg-gray-300 cursor-pointer"
              style={{ height: "60px", width: "60px" }}
            >
              <FaApple className="text-[#A2AAAD] text-3xl" />
            </div>
            <span className="text-center text-primary text-sm mt-2">Apple</span>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div
              className="flex justify-center items-center p-2 rounded-full bg-gray-300 cursor-pointer"
              style={{ height: "60px", width: "60px" }}
            >
              <FaGoogle className="text-[#4285F4] text-3xl" />
            </div>
            <span className="text-center text-primary text-sm mt-2">
              Google
            </span>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div
              className="flex justify-center items-center p-2 rounded-full bg-gray-300 cursor-pointer"
              style={{ height: "60px", width: "60px" }}
            >
              <FaMicrosoft className="text-[#00A4EF] text-3xl" />
            </div>
            <span className="text-center text-primary text-sm mt-2">
              Microsoft
            </span>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div
              className="flex justify-center items-center p-2 rounded-full bg-gray-300 cursor-pointer"
              style={{ height: "60px", width: "60px" }}
            >
              <FaAmazon className="text-[#FF9900] text-3xl" />
            </div>
            <span className="text-center text-primary text-sm mt-2">
              Amazon
            </span>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div
              className="flex justify-center items-center p-2 rounded-full bg-gray-300 cursor-pointer"
              style={{ height: "60px", width: "60px" }}
            >
              <FaFacebook className="text-[#1877F2] text-3xl" />
            </div>
            <span className="text-center text-primary text-sm mt-2">
              Facebook
            </span>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div
              className="flex justify-center items-center p-2 rounded-full bg-gray-300 cursor-pointer"
              style={{ height: "60px", width: "60px" }}
            >
              <FaTwitter className="text-[#1DA1F2] text-3xl" />
            </div>
            <span className="text-center text-primary text-sm mt-2">
              Twitter
            </span>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div
              className="flex justify-center items-center p-2 rounded-full bg-gray-300 cursor-pointer"
              style={{ height: "60px", width: "60px" }}
            >
              <FaLinkedin className="text-[#0A66C2] text-3xl" />
            </div>
            <span className="text-center text-primary text-sm mt-2">
              LinkedIn
            </span>
          </div>

          {/* New Slack Icon */}
          <div className="flex flex-col justify-center items-center">
            <div
              className="flex justify-center items-center p-2 rounded-full bg-gray-300 cursor-pointer"
              style={{ height: "60px", width: "60px" }}
            >
              <FaSlack className="text-[#4A154B] text-3xl" />
            </div>
            <span className="text-center text-primary text-sm mt-2">Slack</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchEngine;
