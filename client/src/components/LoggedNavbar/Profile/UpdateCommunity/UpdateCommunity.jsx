import React, { useState } from "react";
import { Formik } from "formik";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateCommunityData } from "../../../features/communities";
import CommunityFrom from "./CommunityForm/CommunityForm";
const UpdateCommunity = ({ isModalOpen, setModalOpen, communityId }) => {
  const [communityPic, setCommunityPic] = useState("");
  const dispatch = useDispatch();

  const handleUploadImage = async () => {
    const formData = new FormData();
    formData.append("file", communityPic);
    formData.append("upload_preset", "Reddit");
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dqhkvx2z5/auto/upload",
      formData
    );
    return res.data.public_id;
  };

  const handleUpdateCommunity = async (values) => {
    if (communityPic) {
      var imageIdString = await handleUploadImage();
    }
    try {
      const response = await axios.put(
        "http://localhost:3001/community/updateCommunity",
        {
          communityName: values.communityName,
          communityId: communityId,
          communityPic: imageIdString ? imageIdString : null,
        },
        {
          headers: {
            authToken: localStorage.getItem("accessToken"),
          },
        }
      );
      console.log(response.data);
      dispatch(updateCommunityData(response.data));
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };
  const [isLoading, setLoading] = useState(false);
  return (
    isModalOpen && (
      <Formik
        initialValues={{
          communityName: "",
          communityTypes: "",
          adultContent: false,
        }}
        onSubmit={(values) => {
          handleUpdateCommunity(values);
        }}
      >
        <CommunityFrom
          setCommunityPic={setCommunityPic}
          setModalOpen={setModalOpen}
          isLoading={isLoading}
        />
      </Formik>
    )
  );
};

export default UpdateCommunity;
