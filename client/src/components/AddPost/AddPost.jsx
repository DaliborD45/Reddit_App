import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "./Form/Form";
import Navbar from "../Navbar/Navbar";
import LoggedNavbar from "../LoggedNavbar/LoggedNavbar";
import ProcessingBtn from "./ProcessingBtn/ProcessingBtn";

const AddPost = () => {
  const [communities, setCommunities] = useState([]);
  const [isLoading, setLoading] = useState(false);

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
          <Form setLoading={setLoading} communities={communities} />
        </section>
      </div>
    </>
  );
};

export default AddPost;
