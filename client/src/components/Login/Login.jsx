import React, { useState } from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { loginUserThunk } from "../../features/currentUser";
import { useNavigate } from "react-router-dom";
import MainForm from "./MainForm/MainForm";
const Login = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(undefined);

  const dispatch = useDispatch();
  const loginUser = async (values) => {
    try {
      dispatch(loginUserThunk(values));
      navigate("/");
    } catch (error) {
      setErrorMessage(error.response.data);

      console.error();
    }
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values) => {
        console.log(values);
        loginUser(values);
      }}
    >
      <div className="flex h-screen bg-gray-200 items-center justify-center  ">
        <div className="grid bg-white rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2">
          <div className="flex justify-center py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="150"
              width="200"
              viewBox="-25.65 -42.75 222.3 256.5"
            >
              <g transform="translate(-85.4 -85.4)">
                <circle r="85.5" cy="170.9" cx="170.9" fill="#ff4500" />
                <path
                  d="M227.9 170.9c0-6.9-5.6-12.5-12.5-12.5-3.4 0-6.4 1.3-8.6 3.5-8.5-6.1-20.3-10.1-33.3-10.6l5.7-26.7 18.5 3.9c.2 4.7 4.1 8.5 8.9 8.5 4.9 0 8.9-4 8.9-8.9s-4-8.9-8.9-8.9c-3.5 0-6.5 2-7.9 5l-20.7-4.4c-.6-.1-1.2 0-1.7.3s-.8.8-1 1.4l-6.3 29.8c-13.3.4-25.2 4.3-33.8 10.6-2.2-2.1-5.3-3.5-8.6-3.5-6.9 0-12.5 5.6-12.5 12.5 0 5.1 3 9.4 7.4 11.4-.2 1.2-.3 2.5-.3 3.8 0 19.2 22.3 34.7 49.9 34.7 27.6 0 49.9-15.5 49.9-34.7 0-1.3-.1-2.5-.3-3.7 4.1-2 7.2-6.4 7.2-11.5zm-85.5 8.9c0-4.9 4-8.9 8.9-8.9s8.9 4 8.9 8.9-4 8.9-8.9 8.9-8.9-4-8.9-8.9zm49.7 23.5c-6.1 6.1-17.7 6.5-21.1 6.5-3.4 0-15.1-.5-21.1-6.5-.9-.9-.9-2.4 0-3.3.9-.9 2.4-.9 3.3 0 3.8 3.8 12 5.2 17.9 5.2 5.9 0 14-1.4 17.9-5.2.9-.9 2.4-.9 3.3 0 .7 1 .7 2.4-.2 3.3zm-1.6-14.6c-4.9 0-8.9-4-8.9-8.9s4-8.9 8.9-8.9 8.9 4 8.9 8.9-4 8.9-8.9 8.9z"
                  fill="#fff"
                />
              </g>
            </svg>
          </div>

          <div className="flex justify-center">
            <div className="flex">
              <h1 className="text-gray-600 font-bold md:text-4xl text-xl">
                Login
              </h1>
            </div>
          </div>
          <MainForm errorMessage={errorMessage} />
        </div>
      </div>
    </Formik>
  );
};

export default Login;
