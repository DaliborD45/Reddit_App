import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddPostAbout from "./AddPostAbout/AddPostAbout";
import Form from "./Form/Form";
import Navbar from "../Navbar/Navbar";
import LoggedNavbar from "../LoggedNavbar/LoggedNavbar";
import ProcessingBtn from "./SkeletonScreen/SkeletonScreen";
import { fetchCommunities } from "../../features/communities";
const AddPost = () => {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(fetchCommunities());
  }, []);

  return (
    <>
      <Navbar />
      <LoggedNavbar />
      <div className="w-screen h-screen bg-gray-300 flex">
        <section className="w-11/12 md:w-[745px] shrink-0 mx-auto pt-40">
          <h1 className="font-semibold text-lg pb-3  border-b-2">
            Create a post
          </h1>
          {isLoading ? <ProcessingBtn /> : <Form setLoading={setLoading} />}
        </section>
        <AddPostAbout />
      </div>
    </>
  );
};

export default AddPost;
