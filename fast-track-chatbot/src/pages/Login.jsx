import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const Login = () => {
  // Validation Schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  // Handle form submission
  const handleSubmit = (values) => {
    console.log("Form Submitted with:", values);
    // Handle form submission logic here (e.g., send data to server)
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 py-2 px-4">
      <div className=" w-full   sm:max-w-lg lg:max-w-xl p-8 space-y-6 bg-secondary shadow-xl rounded-3xl">
        <h2 className="text-3xl font-extrabold text-center text-primary-500">
          FasTrak
        </h2>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              {/* Email Field */}
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Password Field */}
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Submit Button */}
              <div className="mb-5">
                <Link to="/">
                  <button
                    type="submit"
                    className="border border-primary hover:bg-secondary hover:text-primary text-secondary bg-primary p-2 px-4 rounded-full w-full text-lg font-semibold transition-colors duration-200 ease-in-out hover:bg-primary/50 cursor-pointer"
                  >
                    Login
                  </button>
                </Link>
              </div>

              {/* Forgot Password Link */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <div className="text-center sm:border-e-2 sm:pe-5 border-primary">
                  <Link
                    to="/forgot-password"
                    className="text-primary-500 hover:text-primary-600 text-sm"
                  >
                    Forgot your password?
                  </Link>
                </div>
                {/* New User Guide */}
                <div className="text-center ">
                  <p className="text-sm">
                    New to FasTrak?{" "}
                    <Link
                      to="/signup"
                      className="text-primary-500 hover:text-primary-600 underline"
                    >
                      Sign up here
                    </Link>
                  </p>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
