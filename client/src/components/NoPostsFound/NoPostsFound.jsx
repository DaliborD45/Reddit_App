import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCamera } from "@fortawesome/free-solid-svg-icons";
const NoPostsFound = () => {
  const navigate = useNavigate();
  return (
    <div className="w-9/12 mt-10  h-52 bg-gray-200  text-center border-2 border-gray-600 rounded-md">
      <h1 className="font-bold text-3xl mt-6 text-gray-600">No posts were found!</h1>
      <FontAwesomeIcon icon={faCamera} size="4x" className="text-gray-600 mt-3"/>
      <h1 className="text-xl mt-2 font-semibold text-gray-600 hover:text-gray-700 hover:cursor-pointer" onClick={() => navigate("/addPost")}>Click here to add one</h1>
    </div>
  );
};

export default NoPostsFound;
