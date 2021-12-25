import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import axios from "axios";
import CommentForm from "./CommentForm";
import { Image as ShowImage } from "cloudinary-react";
import DeleteButton from "../Postcard/DeleteButton";

const Comment = ({ postData, votes, setVotes, id }) => {
  const [community, setCommunity] = useState({ name: "" });
  useEffect(() => {
    const getCommunityById = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3001/community/byId/${postData.communityId}`
        );
        console.log(res);
        setCommunity(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCommunityById();
  }, []);
  return (
    <div className=" pt-2 flex bg-white">
      <section className="pl-2   w-10">
        <SideBar votes={votes} setVotes={setVotes} PostId={id} />
      </section>
      <section className="pl-4">
        <section className="flex text-xs">
          <p className="font-bold">{`r/${community.name}`}</p>
          <p className=" pl-3">{`Posted by u/${postData.authorName}`}</p>
        </section>
        <section className="max-w-xl  break-words">
          <h1 className="font-bold text-lg  overflow-hidden ">
            {postData.title}
          </h1>

          <p className="pt-10 ">{postData.content}</p>
          <ShowImage
            cloudName="dqhkvx2z5"
            publicId={postData.imageId}
            className="max-w-full max-h-full mx-auto"
          />
        </section>
        <DeleteButton PostAuthorId={postData.authorId} PostId={id} />

        <CommentForm postData={postData} PostId={id} />
        <section className="border-b-2 border-gray-300 w-full pt-4"></section>
      </section>
    </div>
  );
};

export default Comment;
