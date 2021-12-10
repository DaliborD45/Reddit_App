import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { faRedditSquare } from "@fortawesome/free-brands-svg-icons";
const Home = () => {
  return (
    <div className="w-80 bg-white h-60  -ml-40 mt-5 rounded-md border border-gray-400">
      <section></section>
      <section className="flex">
        <FontAwesomeIcon icon={faRedditSquare} />
        <h1 className="font-bold">Hello</h1>
      </section>
      <section className="w-11/12 ">
        <p className="ml-3.5 ">
          Your personal Reddit frontpage. Come here to check in with your
          favorite communities.
        </p>
        <button className="w-full mt-3 ml-3.5   rounded-full bg-blue-500 text-white font-bold h-7 hover:opacity-90">
          Create Post
        </button>
        <button className="w-full mt-3 ml-3.5   rounded-full bg-white text-blue-500 border border-blue-500 font-bold h-7 hover:bg-blue-50">
          Create Community
        </button>
      </section>
    </div>
  );
};

export default Home;
