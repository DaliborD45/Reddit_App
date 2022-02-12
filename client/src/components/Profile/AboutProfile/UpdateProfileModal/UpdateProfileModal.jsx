import React, { useState } from "react";
import { Formik, Field, Form as FormikForm } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Done from "../../Done";
import { setUserLogout } from "../../../../features/currentUser";
import { useDispatch } from "react-redux";
import UpdateProfileForm from "./UpdateProfileForm/UpdateProfileForm";
const UpdateProfileModal = ({ setModalOpen, isModalOpen }) => {
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
        "http://localhost:3001/users/updateUser",
        {
          updatedName: values.name,
          profilePicString: imageIdString ? imageIdString : null,
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
          name: "",
          password: "",
        }}
        onSubmit={(values) => {
          handleUpdateProfile(values);
        }}
      >
        <UpdateProfileForm
          setProfilePic={setProfilePic}
          setModalOpen={setModalOpen}
          isLoading={isLoading}
        />
      </Formik>
    )
  );
};

export default UpdateProfileModal;