import React, { useEffect, useState } from "react";
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
  const [communities, setCommunities] = useState([]);
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("");
  const handleAddPost = async (values) => {
    const { content } = values;
    try {
      const post = await axios.post(
        "http://localhost:3001/posts/addPost",
        { title, content },
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
  const tags = [
    { id: 1, title: "original content tag", name: "OC" },
    { id: 2, title: "spoiler content", name: "SPOILER" },
    { id: 3, title: "Mark as Not Safe For Work", name: "NSFW" },
    { id: 4, title: "add flair", name: "FLAIR" },
  ];
  useEffect(() => {
    const getCommunities = async () => {
      const data = await axios.get("http://localhost:3001/community");
      setCommunities(data.data);
    };
    getCommunities();
  }, []);

  const handleTitleInput = (e) => {
    setCount(e.target.value.length);
    setTitle(e.target.value);
  };

  return (
    <div className="w-screen h-screen bg-gray-300">
      <Navbar />
      <LoggedNavbar />
      <section className="w-5/12 mx-auto mt-10">
        <h1 className="font-semibold text-lg pb-3  border-b-2">
          Create a post
        </h1>
        <Formik
          initialValues={{
            content: "",
          }}
          onSubmit={(values) => {
            handleAddPost(values);
          }}
        >
          <Form>
            <Field
              as="select"
              className="py-2 px-3 w-80 rounded-sm border-1 text-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent mt-3"
              name="preffered_posts"
            >
              <option defaultValue hidden="hidden">
                Choose a community
              </option>
              {communities.map(({ name, id }) => {
                return <option value={id}>{`r/${name}`}</option>;
              })}
              <option value="Sport">r/dunkmemes</option>

              <option value="Memes">r/HistoryHomies</option>
            </Field>
            <div className=" bg-white h-1/2 mt-2 rounded-md flex flex-col">
              <input
                type="text"
                placeholder="Title"
                className="w-11/12 mx-auto border border-gray-200 focus:border-black outline-none focus:border-2 mt-4 rounded-md pl-3 py-2"
                onChange={handleTitleInput}
                name="title"
              />
              <p className="absolute top-48 mt-7 left-3/4 -ml-44  text-md">{`${count}/300`}</p>
              <Field
                as="textarea"
                className="form-textarea  block w-11/12 mx-auto border border-gray-200 focus:border-black outline-none focus:border-2 mt-2 rounded-md pl-3 pt-2 mb-10"
                rows="5"
                name="content"
                placeholder="Text (optional)"
              />
              <section className="flex  w-11/12 mx-auto">
                {tags.map(({ name ,title}) => {
                  return (
                    <button
                      title={title}
                      className=" py-1 rounded-full text-gray-400 font-bold px-4  border border-gray-400 flex mr-2 hover:bg-gray-100"
                    >
                      <svg
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        className="mt-1 mr-2"
                        width="16px"
                        height="16px"
                        viewBox="0 0 485 485"
                        xmlSpace="preserve"
                      >
                        <polygon
                          points="485,227.5 257.5,227.5 257.5,0 227.5,0 227.5,227.5 0,227.5 0,257.5 227.5,257.5 227.5,485 257.5,485 257.5,257.5 
	485,257.5 "
                        />
                      </svg>
                      {name}
                    </button>
                  );
                })}
              </section>
              <section className="flex ml-auto mr-8 mb-5">
                <button className="px-5 py-2 text-gray-400 font-bold border border-gray-500 rounded-full mr-5 hover:bg-gray-200">
                  SAVE DRAFT
                </button>
                <button className=" py-1 bg-gray-500 rounded-full text-gray-400 font-bold w-24 hover:bg-gray-600">
                  POST
                </button>
              </section>
            </div>
          </Form>
        </Formik>
      </section>
    </div>
  );
};

export default AddPost;
