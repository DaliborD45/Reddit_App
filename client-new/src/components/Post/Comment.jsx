import React from "react";
import SideBar from "./SideBar";
import CommentForm from "./CommentForm";
const Comment = ({ postData, votes, setVotes, id }) => {
  return (
    <div className=" pt-2 flex bg-white">
      <section className="pl-2   w-10">
        <SideBar votes={votes} setVotes={setVotes} PostId={id} />
      </section>
      <section className="pl-4">
        <section className="max-w-xl  break-words">
          <h1 className="font-bold text-lg border overflow-hidden ">
            {postData.title}
          </h1>

          <p className="pt-10 ">{postData.content}</p>
        </section>
        <CommentForm postData={postData} PostId={id} />
        <section className="border-b-2 border-gray-300 w-full pt-4"></section>
      </section>
    </div>
  );
};

export default Comment;
