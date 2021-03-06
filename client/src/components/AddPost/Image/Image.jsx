import React from "react";
import { Field } from "formik";
const Image = ({ image, setImage, tags }) => {
  const handleImageChange = (event) => {
    setImage(event.currentTarget.files[0]);
    console.log(image);
    console.log(event.currentTarget.files[0]);
  };
  return (
    <>
      <section className=" flex-row w-11/12 mx-auto  rounded-md mt-4  ">
        <section className="flex">
          <Field
            type="text"
            rows="2"
            placeholder="Title"
            className="w-full border border-gray-400 mx-auto px-5 py-2   focus focus:border-2  break-word"
            name="title"
          />
        </section>
        <section className="mt-5 mb-20">
          <input
            id="file"
            data-testid="pictureInput"
            name="file"
            className="block w-full text-sm text-gray-900  cursor-pointer bg-gray-50 border-2 "
            onChange={(event) => {
              handleImageChange(event);
            }}
            type="file"
          ></input>
        </section>
      </section>
      <section className="flex  w-11/12 mx-auto">
        {tags.map(({ name, titles }) => {
          return (
            <button
              title={titles}
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
      <section className="flex ml-auto mr-8 mb-5">
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

export default Image;
