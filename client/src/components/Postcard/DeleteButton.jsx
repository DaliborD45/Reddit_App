import React, { useState } from "react";
import { useSelector } from "react-redux";
import DeleteModal from "./DeleteModal";

const DeleteButton = ({ PostAuthorId, PostId }) => {
  const [isOpen, setOpen] = useState(false);
  const userId = useSelector((state) => state.currentUser.value.id);

  return (
    userId === PostAuthorId && (
      <>
        <button
          className="mt-2 hover:opacity-90 text-white text-xs font-semibold bg-red-500 px-3 py-1 rounded-md"
          onClick={() => setOpen(true)}
        >
          Delete Post
        </button>

        <DeleteModal isOpen={isOpen} setOpen={setOpen} PostId={PostId} />
      </>
    )
  );
};

export default DeleteButton;
