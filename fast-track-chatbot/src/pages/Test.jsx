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
import { GiBackwardTime } from "react-icons/gi";
import { IoMicCircle } from "react-icons/io5";

const SearchEngine = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const suggestions = [
    "What is the latest iPhone model released this year?",
    "How do I connect my smartphone to a smart TV?",
    "Who won the NBA championship last year?",
    "What is the speed of light in kilometers per second?",
    "What is the tallest mountain in the world?",
    "How many countries are there in the European Union?",
  ];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setIsDropdownVisible(true); // Show dropdown when typing
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
    setIsDropdownVisible(false); // Hide dropdown on submit
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion); // Set clicked suggestion as input value
    setIsDropdownVisible(false); // Hide the dropdown
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen text-center py-16">
      <h1 className="text-5xl sm:text-6xl text-primary font-semibold mb-6">
        Fast Track
      </h1>

      {/* Predefined Suggestions */}
      <div className="sm:flex gap-3 mb-4 hidden">
        <p
          className="border-[2px] text-xs md:text-sm border-[#d1d5db] px-3 py-2 rounded-2xl text-primary cursor-pointer"
          onClick={() =>
            handleSuggestionClick(
              "What is the latest iPhone model released this year?"
            )
          }
        >
          What is the latest iPhone model released this year?
        </p>
        <p
          className="border-[2px] text-xs md:text-sm border-[#d1d5db] px-3 py-2 rounded-2xl text-primary cursor-pointer"
          onClick={() =>
            handleSuggestionClick("Who won the NBA championship last year?")
          }
        >
          Who won the NBA championship last year?
        </p>
      </div>

      <form onSubmit={handleSearchSubmit} className="relative flex items-center mb-6">
        <input
          type="search"
          value={searchQuery}
          onChange={handleSearchChange}
          className="pl-20 pr-10 py-2 w-[50vw] h-14 shadow-sm outline-none drop-shadow-md rounded-full text-gray-700"
          placeholder="Hey! How may I help you?"
          onFocus={() => setIsDropdownVisible(true)} // Show dropdown on focus
          onBlur={() => setTimeout(() => setIsDropdownVisible(false), 200)} // Delay to allow click on suggestions
        />
        <FaSearch className="absolute left-3 text-gray-500" />
        <FaMicrophone
          className="absolute right-3 text-gray-500 cursor-pointer hover:text-blue-500"
          onClick={toggleRecording}
        />

        {/* Dropdown Suggestions */}
        {isDropdownVisible && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-80 overflow-y-auto scrollbar-hide">
            <ul className="mt-3 mb-4 pr-2">
              {suggestions
                .filter((suggestion) =>
                  suggestion.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((suggestion, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 mb-1 cursor-pointer hover:bg-gray-100 rounded-tr-lg rounded-br-lg"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    <span className="text-gray-500">
                      <GiBackwardTime />
                    </span>
                    <span>{suggestion}</span>
                  </li>
                ))}
            </ul>
          </div>
        )}
      </form>


      {/* Conditional Voice Recording Popup */}
      {isRecording && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
          <div className="relative flex flex-col justify-center sm:w-[50vw] sm:h-[50vh] mx-8 p-6 bg-white border border-gray-300 rounded-lg shadow-lg">
            {/* Close button */}
            <button
              className="absolute top-2 right-6 w-10 h-10 rounded-full bg-gray-200 text-3xl text-primary"
              onClick={toggleRecording}
            >
              &times; {/* This is the "X" symbol */}
            </button>

            <div className="flex flex-col justify-center items-center gap-4 px-3 py-16">
              <IoMicCircle className="text-gray-500 cursor-pointer text-[5rem] sm:text-[10rem] hover:text-blue-500 animate-pulse" />
              <h2 className="font-semibold text-primary/50 text-base md:text-3xl">
                Search with your voice...
              </h2>
              <h2 className="font-semibold text-primary/50 mb-4 text-xs md:text-lg">
                Using voice search makes finding information quick and effortless, simply by speaking what we need.
              </h2>
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
                <FaApple className="text-primary text-3xl" />
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
