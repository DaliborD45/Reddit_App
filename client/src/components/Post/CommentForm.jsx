import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { addCommentThunk } from "../../features/allComments";
import { useNavigate } from "react-router-dom";

const CommentForm = ({ PostId }) => {
  const navigate = useNavigate();
  const username = useSelector((state) => state.currentUser.value.name);
  const dispatch = useDispatch();
  const [loggedAlert, setLoggedAlert] = useState(false);
  const handleComment = async (value) => {
    try {
      dispatch(addCommentThunk(value));
    } catch (error) {
      console.log(error);
      setLoggedAlert(true);
    }
  };
  const initialValues = {
    content: "",
    PostId: PostId,
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(value, { resetForm }) => {
          handleComment(value);
          resetForm();
        }}
      >
        <Form>
          <section className=" pt-2 bg-white  pb-5">
            <label className="block text-left mt-10 text-xs">
              Comment as <b>{username}</b>
            </label>
            <Field
              style={{ width: "1800px" }}
              as="textarea"
              name="content"
              className="max-w-xs sm:max-w-xl  form-textarea mt-1 block w-full border border-black rounded-md p-2"
              placeholder="Enter some long form content."
            />
            {loggedAlert && (
              <span
                onClick={() => navigate("/login")}
                className="block text-red-500 hover:underline"
              >
                You are not logged in!
              </span>
            )}
            <button
              type="submit"
              className="px-2 py-1 bg-black text-white rounded-lg mt-1"
            >
              Comment
            </button>
          </section>
        </Form>
      </Formik>
    </>
  );
};

export default CommentForm;
