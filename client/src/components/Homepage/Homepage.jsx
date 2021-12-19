import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Postcard from "../Postcard/Postcard";
import { useSelector, useDispatch } from "react-redux";
import LoggedNavbar from "../LoggedNavbar/LoggedNavbar";
import axios from "axios";
import { setAllPosts } from "../../features/allPosts";
import Communities from "./Communities/Communities";
import AddPost from "./AddPost/AddPost";
import TryPremium from "./TryPremium/TryPremium";
import Home from "./Home/Home";

import About from "./About/About";
import CreateCommunityModal from "../CreateCommunityModal/CreateCommunityModal";
const Homepage = () => {
  const dispatch = useDispatch();
  const allPosts = useSelector((state) => state.allPosts.value);
  useEffect(() => {
    const getAllPosts = async () => {
      try {
        const data = await axios.get("http://localhost:3001/posts");
        dispatch(setAllPosts(data.data));
        console.info(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllPosts();
  }, []);

  return (
    allPosts && (
      <div className="bg-gray-300 overflow-x-hidden  min-h-screen ">
        <Navbar />
        <LoggedNavbar />
        <CreateCommunityModal />
        <section className="w-7/12  mb-20  flex mx-auto mt-10">
          <section className="w-full">
            <AddPost />
            {allPosts
              .map(
                ({
                  title,
                  text,
                  id,
                  Like,
                  imageId,
                  communityId,
                  authorName,
                  authorId,
                }) => {
                  return (
                    <Postcard
                      key={id}
                      title={title}
                      text={text}
                      id={id}
                      postLikes={Like}
                      imageId={imageId}
                      communityId={communityId}
                      authorName={authorName}
                      PostAuthorId={authorId}
                    />
                  );
                }
              )
              .reverse()}
          </section>
          <section>
            <Communities />
            <TryPremium />
            <Home />
            <About />
          </section>
        </section>
      </div>
    )
  );
};

export default Homepage;
