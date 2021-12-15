import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";
import axios from "axios";
import Post from "./Posts/Post";
import Image from "./Image/Image";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPost } from "../../features/allPosts";
import Navbar from "../Navbar/Navbar";
import LoggedNavbar from "../LoggedNavbar/LoggedNavbar";
import ProcessingBtn from "./ProcessingBtn";

let addPostSchema = yup.object().shape({
  communityId: yup
    .number("Community is required")
    .required("Community is required"),
});

const AddPost = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [communities, setCommunities] = useState([]);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [postMethod, setPostMethod] = useState(1);
  const handleUploadImage = async () => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "Reddit");
    // formData.append("api_key", signData.apikey);
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dqhkvx2z5/auto/upload",
      formData
    );
    console.log(res);
    console.log(res.data.public_id);
    return res.data.public_id;
  };
  const handleAddPost = async (values) => {
    const { content, communityId } = values;

    setLoading(true);
    if (image !== null) {
      var imageIdString = await handleUploadImage();
    }
    try {
      const post = await axios.post(
        "http://localhost:3001/posts/addPost",
        {
          title,
          content,
          imageId: imageIdString ? imageIdString : null,
          communityId: parseInt(communityId),
        },
        {
          headers: {
            authToken: localStorage.getItem("accessToken"),
          },
        }
      );
      navigate("/");
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  const clickedPostMethodHandler = (id) => setPostMethod(id);
  const navLinks = [
    { id: 1, name: "Post", icon: "" },
    { id: 2, name: "Images & Video", icon: "" },
    { id: 3, name: "Link", icon: "" },
    { id: 4, name: "Poll", icon: "" },
  ];
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

  return (
    <>
      <Navbar />
      <LoggedNavbar />
      <div className="w-screen h-screen bg-gray-300">
        <section className="w-5/12 mx-auto pt-40">
          <h1 className="font-semibold text-lg pb-3  border-b-2">
            Create a post
          </h1>
          {isLoading && <ProcessingBtn />}
          <Formik
            initialValues={{
              content: "",
              communityId: null,
            }}
            validationSchema={addPostSchema}
            onSubmit={(values) => {
              handleAddPost(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Field
                  as="select"
                  className="py-2 px-3 w-80 rounded-sm border-1 text-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent mt-3"
                  name="communityId"
                >
                  <option defaultValue hidden="hidden">
                    Choose a community
                  </option>
                  {communities.map(({ name, id }) => {
                    return <option key={id} value={id}>{`r/${name}`}</option>;
                  })}
                </Field>
                {errors.communityId && touched.communityId ? (
                  <div className="text-red-500 text-xs font-bold pl-2 pt-2">Community is required</div>
                ) : null}

                <div className=" bg-white h-1/2 mt-7 rounded-md flex flex-col w-full ">
                  <ul className="w-full h-14 border flex">
                    {navLinks.map(({ id, name, icon }) => {
                      return (
                        <li
                          key={id}
                          onClick={() => clickedPostMethodHandler(id)}
                          className="border border-r w-1/4 text-center h-full pt-3 hover:bg-gray-100"
                        >
                          {name}
                        </li>
                      );
                    })}
                  </ul>
                  {postMethod === 1 && (
                    <Post title={title} setTitle={setTitle} tags={tags} />
                  )}
                  {postMethod === 2 && (
                    <Image
                      title={title}
                      tags={tags}
                      image={image}
                      setTitle={setTitle}
                      setImage={setImage}
                    />
                  )}
                </div>
              </Form>
            )}
          </Formik>
        </section>
      </div>
    </>
  );
};

export default AddPost;
