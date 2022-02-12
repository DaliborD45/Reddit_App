import React from "react";
import { Field, Form as FormikForm } from "formik";
import Done from "../../../Done";
import CommunityTypes from "../../../../CreateCommunityModal/Form/CommunityTypes/CommunityTypes";
import AdultCheck from "../../../../CreateCommunityModal/Form/AdultCheck/AdultCheck";
const UpdateCommunityForm = ({ setProfilePic, setModalOpen, isLoading }) => {
  return (
    <FormikForm>
      <div
        aria-hidden="true"
        className=" overflow-y-hidden bg-gray-700/80  fixed h-screen md:h-full  left-0 right-0 md:inset-0 z-50 justify-center items-center"
      >
        <div className="relative w-full max-w-2xl mx-auto mt-20 px-4 h-full md:h-auto">
          <div className="bg-white rounded-lg shadow  dark:bg-gray-700 border ">
            {isLoading ? (
              <Done />
            ) : (
              <>
                <div className="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-gray-900 text-xl lg:text-2xl font-semibold dark:text-white">
                    Community Settings
                  </h3>
                </div>

                <div className=" pb-2 pt-6 px-6 -mt-4  text-left">
                  <label className="block">Community Profile picture</label>
                  <input
                    type="file"
                    onChange={(event) =>
                      setProfilePic(event.currentTarget.files[0])
                    }
                    className="w-full border pl-2 my-5 py-1 text-lg border-black rounded-md"
                  />
                </div>
                <div className="text-left  py-2 px-6 -mt-4">
                  <label className="block">Community Name</label>

                  <Field
                    name="communityName"
                    className="w-full border pl-2 my-5 py-1 text-lg border-black rounded-md"
                  />
                  <CommunityTypes />
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
                    onClick={() => setModalOpen(false)}
                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    Cancel
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </FormikForm>
  );
};

export default UpdateCommunityForm;
