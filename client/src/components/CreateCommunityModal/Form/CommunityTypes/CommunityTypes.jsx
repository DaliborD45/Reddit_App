import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CommunityList } from "./CommunityList/CommunityList";
import { Field } from "formik";

const CommunityTypes = ({ errorMessage }) => {
  return (
    <fieldset>
      <p className="font-semibold mb-3 ml-1">Community type</p>
      {CommunityList.map(({ label, span, icon }) => {
        return (
          <div className="flex items-center mb-4">
            <section className="flex">
              <Field
                type="radio"
                name="communityTypes"
                value={`${label}`}
                className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
              />
            </section>
            <FontAwesomeIcon icon={icon} size="sm" className="ml-3" />
            <section className="flex">
              <label
                htmlFor="country-option-3"
                className="text-sm font-medium text-gray-700 ml-2 block dark:text-gray-300"
              >
                {label}
              </label>
              <span className="text-xs text-gray-500 ml-2">{span}</span>
            </section>
          </div>
        );
      })}
      {errorMessage && (
        <p className="text-red-500 text-xs pt-1">{errorMessage}</p>
      )}
    </fieldset>
  );
};

export default CommunityTypes;
