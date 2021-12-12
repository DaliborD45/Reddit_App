import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedditSquare } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setOpenModal } from "../../../features/modal";

import "@themesberg/flowbite";
const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="w-80 bg-white h-64  -ml-40 mt-5 rounded-md border border-gray-400 ">
      <section className="h-1/6 w-full bg-universe-img "></section>
      <section className="flex ml-5">
        <FontAwesomeIcon
          icon={faRedditSquare}
          size="3x"
          className="text-purple-800"
        />
        <h1 className="font-semibold text-xl pt-3 pl-2">Home</h1>
      </section>
      <section className="w-11/12 ">
        <p className="ml-3.5 text-sm">
          Your personal Reddit frontpage. Come here to check in with your
          favorite communities.
        </p>
        <button
          onClick={() => navigate("/addPost")}
          className="w-full mt-3 ml-3.5   rounded-full bg-blue-500 text-white font-bold h-7 hover:opacity-90"
        >
          Create Post
        </button>
        <button
          onClick={() => dispatch(setOpenModal())}
          className="w-full mt-3 ml-3.5   rounded-full bg-white text-blue-500 border border-blue-500 font-bold h-7 hover:bg-blue-50"
        >
          Create Community
        </button>
      </section>
    </div>
  );
};

export default Home;
