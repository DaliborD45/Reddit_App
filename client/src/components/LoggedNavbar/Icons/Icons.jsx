import React from "react";
import { faPlus, faFireAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

import {
  faCommentDots,
  faBell,
  faImages,
} from "@fortawesome/free-regular-svg-icons";
const Icons = () => {
  const navigate = useNavigate();

  const handleAddPost = () => {
    navigate("/addPost");
  };
  return (
    <section className="hidden lg:flex my-auto ml-5 ">
      <FontAwesomeIcon
        className="mx-3 hover:text-gray-700"
        icon={faFireAlt}
        size="lg"
      />
      <FontAwesomeIcon
        className="mx-3 hover:text-gray-700"
        icon={faImages}
        size="lg"
      />
      <FontAwesomeIcon
        className="mx-3 hover:text-gray-700"
        icon={faCommentDots}
        size="lg"
      />
      <FontAwesomeIcon
        className="mx-3 hover:text-gray-700"
        icon={faBell}
        size="lg"
      />
      <FontAwesomeIcon
        className="mx-3 hover:text-gray-700"
        icon={faPlus}
        onClick={handleAddPost}
        size="lg"
      />
    </section>
  );
};

export default Icons;
