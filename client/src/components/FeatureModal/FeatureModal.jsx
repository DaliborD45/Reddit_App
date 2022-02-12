import React from "react";
import { useSelector } from "react-redux";
const FeatureModal = () => {
  const isOpen = useSelector((state) => state.featureModal.isOpen);
  return (
    isOpen && (
      <div
        aria-hidden="true"
        className=" overflow-y-hidden bg-gray-700/80  fixed h-screen md:h-full  left-0 right-0 md:inset-0 z-50 justify-center items-center"
      >
        <div className="relative w-full max-w-2xl mx-auto mt-20 px-4 h-full md:h-auto">
          <div className="bg-white rounded-lg shadow  dark:bg-gray-700 border ">
            <div className="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600">
              <h1 className="text-gray-900 text-xl lg:text-2xl font-semibold dark:text-white">
                This Feature is not available yet !
              </h1>
              <h2>Our team is doing its best to add it asap &#128151.</h2>
            </div>

            <div className="flex space-x-2 items-center p-6 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                data-modal-toggle="default-modal"
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default FeatureModal;
