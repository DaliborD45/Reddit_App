import React, { useState } from "react";
import Image from "../Image/Image";
import PostForm from "../PostForm/PostForm";
import { tags } from "./Tags";
import { navLinks } from "./NavLinks";

const MainForm = ({ title, setTitle, image, setImage }) => {
  const clickedPostMethodHandler = (id) => setPostMethod(id);
  const [postMethod, setPostMethod] = useState(1);

  return (
    <div className=" bg-white h-1/2 mt-7 rounded-md flex flex-col w-full ">
      <ul className="w-full h-14 border flex">
        {navLinks.map(({ id, name, icon }) => {
          return (
            <li
              key={id}
              onClick={() => clickedPostMethodHandler(id)}
              className="border border-r w-1/4 text-center h-full pt-3 hover:bg-gray-100"
            >
              {name}
            </li>
          );
        })}
      </ul>
      {postMethod === 1 && (
        <PostForm title={title} setTitle={setTitle} tags={tags} />
      )}
      {postMethod === 2 && (
        <Image
          title={title}
          tags={tags}
          image={image}
          setTitle={setTitle}
          setImage={setImage}
        />
      )}
    </div>
  );
};

export default MainForm;
