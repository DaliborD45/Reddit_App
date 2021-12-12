import React, { useState } from "react";
import "@themesberg/flowbite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

import { faUser, faEye, faLock } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { setCloseModal } from "../../features/modal";

const CreateCommunityModal = () => {
  const [letterCount, setLetterCount] = useState(21);
  const [communityName, setCommunityName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen);
  const handleLetterCount = (e) => {
    setCommunityName(e.target.value);
    setLetterCount(21 - e.target.value.length);
  };
  const handleCreateCommunity = async (name, type, adultContent) => {
    try {
      const res = await axios.post(
        "http://localhost:3001/community/createCommunity",
        { name, type, adultContent },
        {
          headers: {
            authToken: localStorage.getItem("accessToken"),
          },
        }
      );
      dispatch(setCloseModal());
      console.log(res);
    } catch (error) {
      console.error(error.response.data);
      setErrorMessage(error.response.data);
    }
  };
  const communityTypes = [
    {
      icon: faUser,
      label: "Public",
      span: "Anyone can view,post,and comment to this community",
    },
    {
      icon: faEye,
      label: "Restricted",
      span: "Anyone can view this community, but only approved users can post",
    },
    {
      icon: faLock,
      label: "Private",
      span: "Only approved users can view submit to this community",
    },
  ];
  return (
    isOpen && (
      <Formik
        initialValues={{
          communityTypes: "",
          adultContent: false,
        }}
        onSubmit={({ communityTypes, adultContent }) => {
          handleCreateCommunity(communityName, communityTypes, adultContent);
        }}
      >
        <Form>
          <div
            aria-hidden="true"
            className=" overflow-x-hidden bg-gray-700/80 overflow-y-auto fixed h-modal md:h-full top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center"
          >
            <div className="relative w-full max-w-2xl mx-auto mt-20 px-4 h-full md:h-auto">
              <div className="bg-white rounded-lg shadow  dark:bg-gray-700 border ">
                <div className="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-gray-900 text-xl lg:text-2xl font-semibold dark:text-white">
                    Create a community
                  </h3>
                  <button
                    onClick={() => dispatch(setCloseModal())}
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="p-6 -mt-4">
                  <div className="mb-6">
                    <label className="text-lg font-medium text-gray-900 block  dark:text-gray-300">
                      Name
                    </label>
                    <span className="text-xs text-gray-500 ">
                      Community names including capitalization cannot be
                      changed.
                    </span>
                    <p className="absolute mt-8 ml-3 text-gray-400">r/</p>
                    <input
                      type="text"
                      as="input"
                      onChange={(e) => handleLetterCount(e)}
                      maxLength="21"
                      className={`shadow-sm mt-6 pl-7 text-sm border border-gray-200 text-gray-900  rounded-lg focus:ring-black focus:border-black block w-full p-2.5 ${
                        errorMessage && "border border-red-500"
                      }`}
                      required
                    />
                    <p
                      className={`text-xs pt-2  ${
                        letterCount === 0 ? "text-red-500" : "text-gray-500"
                      }`}
                    >{`${letterCount} Characters remaining`}</p>
                    {errorMessage && (
                      <p className="text-red-500 text-xs pt-1">
                        {errorMessage}
                      </p>
                    )}
                  </div>
                  <fieldset>
                    <p className="font-semibold mb-3 ml-1">Community type</p>
                    {communityTypes.map(({ label, span, icon }) => {
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
                          <FontAwesomeIcon
                            icon={icon}
                            size="sm"
                            className="ml-3"
                          />
                          <section className="flex">
                            <label
                              htmlFor="country-option-3"
                              className="text-sm font-medium text-gray-700 ml-2 block dark:text-gray-300"
                            >
                              {label}
                            </label>
                            <span className="text-xs text-gray-500 ml-2">
                              {span}
                            </span>
                          </section>
                        </div>
                      );
                    })}
                  </fieldset>
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
        </Form>
      </Formik>
    )
  );
};

export default CreateCommunityModal;
