import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoggedNavbar from "../LoggedNavbar/LoggedNavbar";
import CommentsField from "./CommentsField";
import Navbar from "../Navbar/Navbar";
import Comment from "./Comment";
import { useDispatch } from "react-redux";
import { setUpvote, setDownvote } from "../../features/votes";
const Post = () => {
  const [votes, setVotes] = useState([]);
  const [postData, setPostData] = useState({});
  const { id } = useParams();
  const dispatch = useDispatch();
  const getVoteData = (likes, Id) => {
    likes.map(({ type, authorId }) => {
      if (authorId === Id) {
        type === "Upvote"
          ? dispatch(setUpvote(true))
          : dispatch(setDownvote(true));
      }
    });
  };
  useEffect(() => {
    const getPostData = async () => {
      try {
        const data = await axios.get(`http://localhost:3001/posts/posts/${id}`);
        console.log(data.data.Like);
        setPostData(data.data);
        setVotes(data.data.Like);
        getVoteData(data.data.Like, data.data.authorId);
      } catch (error) {
        console.log(error);
      }
    };
    getPostData();
  }, []);

  return (
    <>
      <Navbar />
      <LoggedNavbar />
      <div className="w-screen min-h-screen bg-gray-700 pt-10">
        <section className="w-2/3 min-h-screen h-full bg-gray-300 mx-auto ">
          <section className="w-3/5 ml-32 pt-10 min-h-screen h-full ">
            <Comment
              postData={postData}
              votes={votes}
              setVotes={setVotes}
              id={id}
            />

            <section className="bg-white">
              <CommentsField PostId={id} />
            </section>
          </section>
        </section>
        <section></section>
      </div>
    </>
  );
};

export default Post;
