import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
  // Validation Schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
  });

  // Handle form submission
  const handleSubmit = (values) => {
    console.log("Form Submitted with:", values);
    // Handle form submission logic here (e.g., send reset link to the email)
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 py-4 px-4">
      <div className="w-full   sm:max-w-lg lg:max-w-xl p-8 space-y-6 bg-secondary shadow-xl rounded-3xl">
        <h2 className="text-3xl font-extrabold text-center text-primary-500">
        FasTrak
        </h2>
        <Formik
          initialValues={{ email: '' }}
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
                  Enter your email
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

              {/* Submit Button */}
              <div className="mb-5">
                <button
                  type="submit"
                  className="w-full border border-primary bg-primary-500 hover:bg-primary hover:text-secondary text-primary py-3 px-4 rounded-full text-lg font-semibold transition-colors duration-200 ease-in-out"
                >
                  Send Reset Link
                </button>
              </div>

              {/* Back to Login Link */}
              <div className="text-center">
                <Link
                  to="/login"
                  className="text-primary-500 hover:text-primary-600 text-sm"
                >
                  Back to Login
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ForgetPassword;
