import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DeleteModal = ({ isOpen, setOpen, PostId }) => {
  const navigate = useNavigate();

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
    isOpen && (
      <div
        aria-hidden="true"
        className=" overflow-x-hidden bg-gray-700/80 overflow-y-auto fixed h-modal md:h-full top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center"
      >
        <div className="relative w-full max-w-2xl mx-auto mt-60 px-4 h-full md:h-auto">
          <div className="bg-white rounded-lg shadow  dark:bg-gray-700 border ">
            <div className="flex  p-5 border-b rounded-t dark:border-gray-600">
              <p className="font-bold text-lg ">Are you sure you want to delete the post?</p>
              <button
                className=" border-red-500 px-6 py-1 mx-6 bg-red-400 border-2 rounded-md hover:opacity-80"
                onClick={handlePostDelete}
              >
                Delete
              </button>
              <button
                className=" border-blue-500 px-6 py-1 bg-blue-400 border-2 rounded-md hover:opacity-80"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default DeleteModal;
