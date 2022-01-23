import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { addCommentThunk } from "../../features/allComments";
import { useNavigate } from "react-router-dom";

const CommentForm = ({ PostId }) => {
  const navigate = useNavigate();
  const username = useSelector((state) => state.currentUser.value.username);
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
        onSubmit={(value) => {
          handleComment(value);
        }}
      >
        <Form>
          <section className=" pt-2 bg-white  pb-5">
            <label className="block text-left mt-10 text-xs">
              Comment as {username}
            </label>

            <Field
              style={{ width: "600px" }}
              as="textarea"
              name="content"
              className="max-w-xs sm:max-w-md  form-textarea mt-1 block w-full border border-black rounded-md p-2"
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
            <button className="px-2 py-1 bg-black text-white rounded-lg mt-1">
              Comment
            </button>
          </section>
        </Form>
      </Formik>
    </>
  );
};

export default CommentForm;
