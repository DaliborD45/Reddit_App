import React, { useState } from "react";
import { useSelector } from "react-redux";
import DeleteModal from "./DeleteModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const DeleteButton = ({ PostAuthorId, PostId }) => {
  const [isOpen, setOpen] = useState(false);
  const userId = useSelector((state) => state.currentUser.value.id);

  return (
    userId === PostAuthorId && (
      <>
        <FontAwesomeIcon
        className="ml-8 hover:text-red-500"
        onClick={() => setOpen(true)} icon={faTimesCircle} />
        {/* <button className="mt-1 hover:opacity-90 text-white text-xs font-semibold bg-red-500 px-3 py-1 rounded-md h-5">
          Delete Post
        </button> */}

        <DeleteModal isOpen={isOpen} setOpen={setOpen} PostId={PostId} />
      </>
    )
  );
};

export default DeleteButton;
