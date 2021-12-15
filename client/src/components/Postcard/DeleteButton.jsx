import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DeleteButton = ({ PostAuthorId, PostId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.currentUser.value.id);
  //   const allPosts = useSelector((state) => state.allPost);
  //   console.log(allPosts);
  const handlePostDelete = async () => {
    try {
      const res = axios.delete(
        `http://localhost:3001/posts/deletePost/${PostId}`,
        {
          headers: {
            authToken: localStorage.getItem("accessToken"),
          },
        }
      );
      navigate("/");
      window.location.reload();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    userId === PostAuthorId && (
      <FontAwesomeIcon
        icon={faTimesCircle}
        className="hover:text-red-500 ml-96"
        size="lg"
        onClick={handlePostDelete}
      />
    )
  );
};

export default DeleteButton;
