import React, { useState } from "react";
import "@themesberg/flowbite";
import axios from "axios";
import { Formik } from "formik";
import Form from "./Form/Form"
import { addCommunities } from "../../features/communities";
import { useSelector, useDispatch } from "react-redux";
import { setCloseModal } from "../../features/modal";

const CreateCommunityModal = () => {
  const [communityName, setCommunityName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const isOpen = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch();

  const handleCreateCommunity = async (name, type, adultContent) => {
    try {
      const res = await axios.post(
        "http://localhost:3001/community/createCommunity",
        { name, type, adultContent },
        {
          headers: {
            authToken: localStorage.getItem("accessToken"),
          },
        }
      );
      dispatch(setCloseModal());
      console.log(res);
      dispatch(addCommunities(res.data));
    } catch (error) {
      console.error(error.response.data);
      setErrorMessage(error.response.data);
    }
  };

  return (
    isOpen && (
      <Formik
        initialValues={{
          communityTypes: "",
          adultContent: false,
        }}
        onSubmit={({ communityTypes, adultContent }) => {
          handleCreateCommunity(communityName, communityTypes, adultContent);
        }}
      >
        <Form setCommunityName={setCommunityName} errorMessage={errorMessage} />
      </Formik>
    )
  );
};

export default CreateCommunityModal;
