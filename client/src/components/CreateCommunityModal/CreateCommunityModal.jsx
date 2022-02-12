import React, { useState } from "react";
import "@themesberg/flowbite";
import { Formik } from "formik";
import axios from "axios";

import Form from "./Form/Form";
import { addCommunityThunk } from "../../features/communities";
import { useSelector, useDispatch } from "react-redux";
import { setCloseModal } from "../../features/modal";
const CreateCommunityModal = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const isOpen = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch();
  const handleCommunitySubmit = async (values) => {
    dispatch(addCommunityThunk(values));
    dispatch(setCloseModal());
  };
  const [profilePic, setProfilePic] = useState(null);

  const handleUploadImage = async () => {
    const formData = new FormData();
    formData.append("file", profilePic);
    formData.append("upload_preset", "Reddit");
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dqhkvx2z5/auto/upload",
      formData
    );
    return res.data.public_id;
  };
  return (
    isOpen && (
      <Formik
        initialValues={{
          communityName: "",
          communityTypes: "",
          description: "",
          adultContent: false,
        }}
        onSubmit={(values) => {
          handleCommunitySubmit(values);
        }}
      >
        <Form errorMessage={errorMessage} />
      </Formik>
    )
  );
};

export default CreateCommunityModal;
