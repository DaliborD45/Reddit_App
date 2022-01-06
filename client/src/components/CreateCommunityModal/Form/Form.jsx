import React, { useState } from "react";
import { Field, Form as FormikForm } from "formik";
import { setCloseModal } from "../../../features/modal";
import { useDispatch } from "react-redux";
import AdultCheck from "./AdultCheck/AdultCheck";
import NameInput from "./NameInput/NameInput";
import CommunityTypes from "./CommunityTypes/CommunityTypes";
const Form = ({ setCommunityName, errorMessage }) => {
  const dispatch = useDispatch();

  return (
    <FormikForm>
      <div
        aria-hidden="true"
        className=" overflow-y-hidden bg-gray-700/80  fixed h-screen md:h-full  left-0 right-0 md:inset-0 z-50 justify-center items-center"
      >
        <div className="relative w-full max-w-2xl mx-auto mt-20 px-4 h-full md:h-auto">
          <div className="bg-white rounded-lg shadow  dark:bg-gray-700 border ">
            <div className="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-gray-900 text-xl lg:text-2xl font-semibold dark:text-white">
                Create a community
              </h3>
            </div>
            <div className="p-6 -mt-4">
              <NameInput
                setCommunityName={setCommunityName}
                errorMessage={errorMessage}
              />
              <CommunityTypes errorMessage={errorMessage} />
              <AdultCheck />
            </div>
            <div className="flex space-x-2 items-center p-6 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                data-modal-toggle="default-modal"
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Create
              </button>
              <div
                onClick={() => dispatch(setCloseModal())}
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600"
              >
                Cancel
              </div>
            </div>
          </div>
        </div>
      </div>
    </FormikForm>
  );
};
export default Form;
