import React from "react";
import { Field } from "formik";

const AdultCheck = () => {
  return (
    <div>
      <p className="font-semibold mt-5">Adult Content</p>
      <div className="flex items-start mb-6 mt-2">
        <div className="flex items-center h-5">
          <Field
            type="checkbox"
            name="adultContent"
            className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
          />
        </div>
        <div className="text-sm ml-3">
          <label className="font-medium text-gray-900 dark:text-gray-300">
            18+ year old community
          </label>
        </div>
      </div>
    </div>
  );
};

export default AdultCheck;
