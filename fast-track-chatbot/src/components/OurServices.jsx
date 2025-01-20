import React from "react";
import { Link } from "react-router-dom"; // Correct import
import {
  FaChartLine,
  FaDollarSign,
  FaUserAlt,
  FaBriefcase,
  FaFileInvoice,
  FaSyncAlt,
} from "react-icons/fa";

const OurServices = () => {
  const services = [
    {
      id: 1, // Unique ID
      title: "Business Process Review",
      description:
        "For business owners, developing and maintaining efficient processes is a critical element to establishing sustainable growth.",
      link: "/service/1", // Link to service detail page
      icon: <FaChartLine className="h-6 w-6 text-blue-500" />,
    },
    {
      id: 2,
      title: "Financial Modeling",
      description:
        "Without a robust and reliable financial model, key decision makers can find themselves struggling to make the strategic choices.",
      link: "/service/2",
      icon: <FaDollarSign className="h-6 w-6 text-blue-500" />,
    },
    {
      id: 3,
      title: "Services For Individuals",
      description:
        "You get one-on-one guidance and a comprehensive financial plan that helps manage risk, improve performance.",
      link: "/service/3",
      icon: <FaUserAlt className="h-6 w-6 text-blue-500" />,
    },
    {
      id: 4,
      title: "Business Services",
      description:
        "As a small business owner you have more important things to do than to keep your own books. We take care of your books for you.",
      link: "/service/4",
      icon: <FaBriefcase className="h-6 w-6 text-blue-500" />,
    },
    {
      id: 5,
      title: "Tax Services",
      description:
        "Today’s tax laws are complicated. Whether you’re preparing the return for your business or filing individual taxes.",
      link: "/service/5",
      icon: <FaFileInvoice className="h-6 w-6 text-blue-500" />,
    },
    {
      id: 6,
      title: "Wave Accounting Services",
      description:
        "We understand that the decision to switch to a new accounting system can be a difficult one. But once you’ve made the decision.",
      link: "/service/6",
      icon: <FaSyncAlt className="h-6 w-6 text-blue-500" />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">Our Services</h1>
      <p className="text-xl text-center mb-12">What we bring to you</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white p-6 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              {service.icon}
              <h2 className="text-2xl font-semibold ml-3">{service.title}</h2>
            </div>
            <p className="text-gray-600 mb-6">{service.description}</p>
            <Link
              to={service.link}
              className="text-blue-500 hover:underline font-semibold"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-6">
        <Link to="/">
          <button className="bg-primary text-secondary px-4 text-xs py-2 rounded-lg hover:bg-secondary hover:text-primary border border-primary ">
            back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OurServices;
