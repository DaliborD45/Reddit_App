import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoggedNavbar from "../LoggedNavbar/LoggedNavbar";
import CommentsField from "./CommentsField";
import Navbar from "../Navbar/Navbar";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
const Post = () => {
  const [votes, setVotes] = useState();
  const [postData, setData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const getPostData = async () => {
      try {
        const data = await axios.get(`http://localhost:3001/posts/posts/${id}`);
        console.log(data);
        setData(data.data);
        setVotes(data.data.Like.length);
      } catch (error) {
        console.log(error);
      }
    };
    getPostData();
  }, []);

  return (
    <div className="w-screen min-h-screen bg-gray-700">
      <Navbar />
      <LoggedNavbar />
      <section className="w-2/3 min-h-screen h-full bg-gray-300 mx-auto mt-10">
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
      <section>
        
      </section>
    </div>
  );
};

export default Post;