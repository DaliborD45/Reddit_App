import React from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPost } from "../../features/allPosts";
import Navbar from "../Navbar/Navbar";
import LoggedNavbar from "../LoggedNavbar/LoggedNavbar";
const AddPost = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleAddPost = async (values) => {
    const { title, text } = values;
    try {
      const post = await axios.post(
        "http://localhost:3001/posts/addPost",
        { title, text },
        {
          headers: {
            authToken: localStorage.getItem("accessToken"),
          },
        }
      );
      dispatch(addPost(post));
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="w-screen h-screen bg-gray-300">
      <Navbar />
      <LoggedNavbar />
      <section className="w-1/3 mx-auto">
        <h1>Create a post</h1>
        <Formik
          initialValues={{
            title: "",
            text: "",
          }}
          onSubmit={(values) => {
            handleAddPost(values);
          }}
        >
          <Form>
            <Field
              as="select"
              className="py-2 px-3 rounded-lg border-2 border-yellow-500 mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:border-transparent"
              name="preffered_posts"
            >
              <option defaultValue hidden="hidden">
                Choose a community
              </option>
              <option value="Sport">r/dunkmemes</option>
              <option value="Gaming">r/HydroHomies</option>
              <option value="Memes">r/HistoryHomies</option>
            </Field>
            <div className="w-3/3 bg-gray-100 h-1/2">
              <Field
                type="text"
                placeholder="Title"
                className="w-full"
                name="title"
              />

              <Field
                as="textarea"
                className="form-textarea mt-10 block w-full"
                rows="5"
                name="text"
                placeholder="Enter some long form content."
              />
            </div>
            <button className="px-3 py-1 bg-gray-500 rounded-md">Post</button>
          </Form>
        </Formik>
      </section>
    </div>
  );
};

export default AddPost;
