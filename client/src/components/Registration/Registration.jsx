import React from "react";
import axios from "axios";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {useNavigate} from "react-router-dom"
const RegistrationSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string()
    .required()

    .min(6, "Must be exactly 5 digits"),
  username: Yup.string().required(),
  repetead_password: Yup.string().oneOf(
    [Yup.ref("password")],
    console.log("password does not match")
  ),
});

const Registration = () => {
  const navigate = useNavigate()
  const registerUser = async (values) => {
    const { username, email, password, preffered_posts } = values;
    try {
      const res = await axios.post("http://localhost:3001/users/register", {
        username,
        email,
        password,
        preffered_posts,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        repetead_password: "",
        preffered_posts: "",
      }}
      validationSchema={RegistrationSchema}
      onSubmit={(values) => {
        console.log(values);
        registerUser(values)
        navigate("/login")
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
                Reddit Registration
              </h1>
            </div>
          </div>
          <Form>
            <div className="grid grid-cols-1 mt-5 mx-7">
              <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                Username
              </label>
              <Field
                className="py-2 px-3 rounded-lg border-2 border-yellow-500 mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:border-transparent"
                type="text"
                placeholder="type username"
                name="username"
              />
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
              </div>
            </div>

            <div className="grid grid-cols-1 mt-5 mx-7">
              <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                Prefered Posts
              </label>
              <Field
                as="select"
                className="py-2 px-3 rounded-lg border-2 border-yellow-500 mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:border-transparent"
                name="preffered_posts"
              >
                <option defaultValue hidden="hidden">
                  pick one option
                </option>
                <option value="Sport">Sport</option>
                <option value="Gaming">Gaming</option>
                <option value="Memes">Memes</option>
              </Field>
            </div>

            {/* <div className="grid grid-cols-1 mt-5 mx-7">
          <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
            Another Input
          </label>
          <input
            className="py-2 px-3 rounded-lg border-2 border-yellow-500 mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:border-transparent"
            type="text"
            placeholder="Another Input"
          />
        </div> */}

            <div className="grid grid-cols-1 mt-5 mx-7">
              <label className="flex uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1">
                Upload Profile Pic{" "}
                <p className="text-xs ml-3 text-gray-400">*not required*</p>
              </label>
              {/* <div className="flex items-center justify-center w-full">
                <label className="flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-yellow-500 group">
                  <div className="flex flex-col items-center justify-center pt-7">
                    <svg
                      className="w-10 h-10 text-yellow-400 group-hover:text-yellow-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      ></path>
                    </svg>
                    <p className="lowercase text-sm text-gray-400 group-hover:text-yellow-700 pt-1 tracking-wider">
                      Select a photo
                    </p>
                  </div>
                  <Field type="file" className="hidden" />
                </label>
              </div> */}
            </div>

            <div className="flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5">
              <button className="w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2">
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
        </div>
      </div>
    </Formik>
  );
};

export default Registration;
