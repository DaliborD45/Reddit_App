import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Postcard from "../Postcard/Postcard";
import { useSelector, useDispatch } from "react-redux";
import { setUserLogout, setCurrentUser } from "../../features/currentUser";
import { useNavigate } from "react-router-dom";
import LoggedNavbar from "../LoggedNavbar/LoggedNavbar";
import axios from "axios";
import { setAllPosts } from "../../features/allPosts";
import Communities from "./Communities/Communities";
import AddPost from "./AddPost/AddPost";
import TryPremium from "./TryPremium/TryPremium";
import Home from "./Home/Home";
const Homepage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allPosts = useSelector((state) => state.allPosts.value);
  useEffect(() => {
    const getAllPosts = async () => {
      try {
        const data = await axios.get("http://localhost:3001/posts");
        dispatch(setAllPosts(data.data));
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllPosts();
  }, []);

  return (
    allPosts && (
      <div className="bg-gray-300 overflow-x-hidden min-h-screen">
        <Navbar />
        <LoggedNavbar />
        <section className="w-7/12  mb-20  flex mx-auto">
          <section className="">
            <AddPost />
            {allPosts
              .map(({ title, text, id, Like }) => {
                return (
                  <Postcard
                    key={id}
                    title={title}
                    text={text}
                    id={id}
                    postLikes={Like}
                  />
                );
              })
              .reverse()}
          </section>
          <section>
            <Communities />
            <TryPremium />
            <Home />
          </section>
        </section>
      </div>
    )
  );
};

export default Homepage;
