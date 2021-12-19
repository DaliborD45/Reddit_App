import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import DeleteModal from "./DeleteModal";

const DeleteButton = ({ PostAuthorId, PostId }) => {
  const [isOpen, setOpen] = useState(false);
  const userId = useSelector((state) => state.currentUser.value.id);

  return (
    userId === PostAuthorId && (
      <>
        <FontAwesomeIcon
          icon={faTimesCircle}
          className="hover:text-red-500 ml-96"
          size="lg"
          onClick={() => setOpen(true)}
        />
        <DeleteModal isOpen={isOpen} setOpen={setOpen} PostId={PostId} />
      </>
    )
  );
};

export default DeleteButton;
