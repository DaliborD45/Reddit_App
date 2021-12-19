import React from "react";
import { Field, Form } from "formik";
import { useNavigate } from "react-router-dom";

const MainForm = ({ errorMessage }) => {
  const navigate = useNavigate();

  return (
    <Form>
      <div className="grid grid-cols-1 mt-5 mx-7">
        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
          email
        </label>
        <Field
          className="py-2 px-3 rounded-lg border-2 border-yellow-500 mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:border-transparent"
          type="text"
          placeholder="Input 1"
          name="email"
        />
      </div>
      <div className="grid grid-cols-1 mt-5 mx-7">
        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
          Password
        </label>
        <Field
          className="py-2 px-3 rounded-lg border-2 border-yellow-500 mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:border-transparent"
          type="password"
          placeholder="Input 1"
          name="password"
        />
        {errorMessage && (
          <p className="pt-2 text-red-500 font-bold text-xs">{errorMessage}</p>
        )}
      </div>

      <div className="flex items-center justify-center  w-2/3 ml-auto  md:gap-8 gap-4 pt-5 pb-5">
        <button className="w-auto bg-yellow-500 hover:bg-yellow-700 mr-40 rounded-lg shadow-xl font-medium text-white px-4 py-2">
          Login
        </button>
        <p
          className="hover:text-yellow-400"
          onClick={() => navigate("/registration")}
        >
          Not registered yet?
        </p>
      </div>
    </Form>
  );
};

export default MainForm;
