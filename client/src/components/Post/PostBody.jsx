import React from "react";
import SideBar from "./SideBar";
import CommentForm from "./CommentForm";
import { Image as ShowImage } from "cloudinary-react";
import DeleteButton from "../Postcard/DeleteButton";

const PostBody = ({ postData, votes, setVotes, id, community }) => {
  return (
    <div className="max-w-sm sm:max-w-xl md:max-w-3xl shrink-1 pt-2 flex bg-white">
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

          <p className="pt-10 max-w-[300px] sm:max-w-lg md:max-w-3xl">
            {postData.content}
          </p>
          <ShowImage
            cloudName="dqhkvx2z5"
            publicId={postData.imageId}
            className="max-w-lg max-h-[500px] mx-auto"
          />
        </section>

        <CommentForm postData={postData} PostId={id} />
        <section className="border-b-2 border-gray-300 w-full pt-4"></section>
      </section>
      <DeleteButton PostAuthorId={postData.authorId} PostId={id} />
    </div>
  );
};

export default PostBody;
