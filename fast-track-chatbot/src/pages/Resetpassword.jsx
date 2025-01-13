import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
  // Validation Schema using Yup
  const validationSchema = Yup.object({
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required'),
  });

  // Handle form submission
  const handleSubmit = (values) => {
    console.log("Password Reset with:", values);
    // Handle form submission logic here (e.g., update password in database)
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-6 px-4">
      <div className="w-full   sm:max-w-lg lg:max-w-xl p-8 space-y-6 bg-secondary shadow-xl rounded-3xl">
        <h2 className="text-3xl font-extrabold text-center text-primary-500">
        FasTrak
        </h2>
        <Formik
          initialValues={{ password: '', confirmPassword: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="space-y-6">
              {/* New Password Field */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm  font-medium text-gray-800"
                >
                  New Password
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter new password"
                  className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition duration-300 ease-in-out"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-2"
                />
              </div>

              {/* Confirm Password Field */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm  font-medium text-primary"
                >
                  Confirm Password
                </label>
                <Field
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition duration-300 ease-in-out"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-500 text-sm mt-2"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full border border-primary hover:bg-primary hover:text-white py-3 px-4 rounded-full text-lg font-semibold transition duration-200 ease-in-out transform hover:scale-105"
                >
                  Reset Password
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

export default ResetPassword;
