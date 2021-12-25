import React from "react";
import { Field, Form, ErrorMessage } from "formik";

const MainForm = ({ errors, touched }) => {
  return (
    <Form>
      <div className="grid grid-cols-1 mt-5 mx-7">
        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
          Username
        </label>
        <Field
          className="py-2 px-3 rounded-lg border-2 border-yellow-500 mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:border-transparent"
          type="text"
          placeholder="type name"
          name="name"
        />
        {errors.name && touched.name ? (
          <div className="text-red-500 text-xs font-bold pl-2 pt-2">
            Required
          </div>
        ) : null}
      </div>
      <div className="grid grid-cols-1 mt-5 mx-7">
        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
          Email
        </label>
        <Field
          className="py-2 px-3 rounded-lg border-2 border-yellow-500 mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:border-transparent"
          type="text"
          placeholder="type email"
          name="email"
        />
        {errors.email && touched.email ? (
          <div className="text-red-500 text-xs font-bold pl-2 pt-2">
            Required
          </div>
        ) : null}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
        <div className="grid grid-cols-1">
          <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
            Password
          </label>
          <Field
            className="py-2 px-3 rounded-lg border-2 border-yellow-500 mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:border-transparent"
            type="password"
            placeholder="type password"
            name="password"
          />
          {errors.password && touched.password ? (
            <div className="text-red-500 text-xs font-bold pl-2 pt-2">
              Required
            </div>
          ) : null}
        </div>
        <div className="grid grid-cols-1">
          <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
            Repeat Password
          </label>
          <Field
            className="py-2 px-3 rounded-lg border-2 border-yellow-500 mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:border-transparent"
            type="password"
            placeholder="repeat password"
            name="repetead_password"
          />
          {errors.repetead_password && touched.repetead_password ? (
            <div className="text-red-500 text-xs font-bold pl-2 pt-2">
              Password does not match
            </div>
          ) : null}
        </div>
      </div>

      <div className="flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5">
        <button
          type="button"
          className="w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2"
        >
          Cancel
        </button>
        <button
          className="w-auto bg-yellow-500 hover:bg-yellow-700 rounded-lg shadow-xl font-medium text-white px-4 py-2"
          type="submit"
        >
          Create
        </button>
      </div>
    </Form>
  );
};

export default MainForm;
