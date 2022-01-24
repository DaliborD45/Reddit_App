import React, { useState } from "react";
import "@themesberg/flowbite";
import { Formik } from "formik";
import Form from "./Form/Form";
import { addCommunityThunk, addCommunities } from "../../features/communities";
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
  return (
    isOpen && (
      <Formik
        initialValues={{
          communityName: "",
          communityTypes: "",
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
