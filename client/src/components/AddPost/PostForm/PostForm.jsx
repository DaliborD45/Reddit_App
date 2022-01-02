import React, { useState } from "react";
import { Field } from "formik";

const PostForm = ({ setTitle, tags }) => {
  const handleTitleInput = (e) => {
    setTitle(e.target.value);
  };

  return (
    <>
      <section className="flex flex-row w-11/12 mx-auto  rounded-md mt-4 border border-gray-200 ">
        <textarea
          type="text"
          rows="2"
          placeholder="Title"
          className="w-full mx-auto  pl-3 py-2 focus:border-none focus:outline-none break-word"
          onChange={handleTitleInput}
          name="title"
        />
      </section>
      <Field
        as="textarea"
        className="form-textarea  block w-11/12 mx-auto border border-gray-200 focus:border-black outline-none focus:border-2 mt-2 rounded-md pl-3 pt-2 mb-10"
        rows="5"
        name="content"
        placeholder="Text (optional)"
      />
      <section className="flex  w-11/12 mx-auto">
        {tags.map(({ name, title }) => {
          return (
            <button
              title={title}
              className=" py-1 rounded-full text-gray-400 font-bold px-4  border border-gray-400 flex mr-2 hover:bg-gray-100"
            >
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className="mt-1 mr-2"
                width="16px"
                height="16px"
                viewBox="0 0 485 485"
                xmlSpace="preserve"
              >
                <polygon
                  points="485,227.5 257.5,227.5 257.5,0 227.5,0 227.5,227.5 0,227.5 0,257.5 227.5,257.5 227.5,485 257.5,485 257.5,257.5 
	485,257.5 "
                />
              </svg>
              {name}
            </button>
          );
        })}
      </section>
      <section className="flex ml-auto mr-8 mb-5 mt-5 md:mt-0">
        <button
          type="button"
          className="px-5 py-2 text-gray-400 font-bold border border-gray-500 rounded-full mr-5 hover:bg-gray-200"
        >
          SAVE DRAFT
        </button>
        <button
          type="submit"
          className=" py-1 bg-gray-500 rounded-full text-gray-400 font-bold w-24 hover:bg-gray-600"
        >
          POST
        </button>
      </section>
    </>
  );
};

export default PostForm;
