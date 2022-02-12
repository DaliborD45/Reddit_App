import React, { useState } from "react";
import { Formik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setUserLogout } from "../../../../features/currentUser";
import { useDispatch } from "react-redux";
import UpdateCommunityForm from "./UpdateCommunityForm/UpdateCommunityForm";

const UpdateCommunityModal = ({ setModalOpen, isModalOpen, communityId }) => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  const dispatch = useDispatch();
  const handleUserLogout = () => {
    localStorage.clear();
    dispatch(setUserLogout());
    navigate("/");
  };

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

  const handleUpdateProfile = async (values) => {
    if (profilePic) {
      var imageIdString = await handleUploadImage();
    }
    try {
      const response = await axios.put(
        "http://localhost:3001/community/updateCommunity",
        {
          updatedName: values.communityName,
          updatedCommunityTypes: values.communityTypes,
          communityPic: imageIdString ? imageIdString : null,
          communityId: communityId,
        },
        {
          headers: {
            authToken: localStorage.getItem("accessToken"),
          },
        }
      );
      console.log(response.data);

      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        handleUserLogout();
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    isModalOpen && (
      <Formik
        initialValues={{
          communityName: "",
          communityTypes: "",
        }}
        onSubmit={(values) => {
          handleUpdateProfile(values);
          console.log(values);
        }}
      >
        <UpdateCommunityForm
          setProfilePic={setProfilePic}
          setModalOpen={setModalOpen}
          isLoading={isLoading}
        />
      </Formik>
    )
  );
};

export default UpdateCommunityModal;
