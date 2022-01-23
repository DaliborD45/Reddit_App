import React, { useState } from "react";
import * as yup from "yup";
import axios from "axios";
import { addPostThunk } from "../../../features/PostReducer";
import { Field, Form as FormikForm, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MainForm from "./MainForm";
let addPostSchema = yup.object().shape({
  communityId: yup
    .number("Community is required")
    .required("Community is required"),
});
const Form = ({ setLoading }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const communities = useSelector((state) => state.allCommunities.value);
  const [image, setImage] = useState(null);
  const [imageIdString, setImageIdString] = useState(null);
  const handleAddPost = async (values) => {
    setLoading(true);
    if (image !== null) {
      const response = await handleUploadImage();
      setImageIdString(response);
    }
    try {
      dispatch(addPostThunk(values, imageIdString));
      navigate("/");
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleUploadImage = async () => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "Reddit");
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dqhkvx2z5/auto/upload",
      formData
    );
    console.log(res);
    console.log(res.data.public_id);
    return res.data.public_id;
  };

  return (
    <Formik
      initialValues={{
        content: "",
        communityId: null,
        title: "",
      }}
      validationSchema={addPostSchema}
      onSubmit={(values) => {
        handleAddPost(values);
      }}
    >
      {({ errors, touched }) => (
        <FormikForm>
          <Field
            as="select"
            className="py-2 px-3 w-80 rounded-sm border-1 text-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent mt-3"
            name="communityId"
          >
            <option defaultValue hidden="hidden">
              Choose a community
            </option>
            {communities.map(({ name, id }) => {
              return <option key={id} value={id}>{`r/${name}`}</option>;
            })}
          </Field>
          {errors.communityId && touched.communityId ? (
            <div className="text-red-500 text-xs font-bold pl-2 pt-2">
              Community is required
            </div>
          ) : null}

          <MainForm setImage={setImage} />
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;
