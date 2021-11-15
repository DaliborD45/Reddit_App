import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Postcard from "../Postcard/Postcard";
import { useSelector, useDispatch } from "react-redux";
import { setUserLogout, setCurrentUser } from "../../features/currentUser";
import { useNavigate } from "react-router-dom";
import LoggedNavbar from "../LoggedNavbar/LoggedNavbar";
import axios from "axios";
import { setAllPosts } from "../../features/allPosts";
const Homepage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allPosts = useSelector((state) => state.allPosts.value);
  useEffect(() => {
    const getAllPosts = async () => {
      try {
        const data = await axios.get("http://localhost:3001/posts");
        dispatch(setAllPosts(data.data));
      } catch (error) {
        console.log(error);
      }
    };
    getAllPosts();
  }, []);

  return (
    allPosts && (
      <div className="bg-gray-300 w-screen h-screen">
        <Navbar />
        <LoggedNavbar />
        <section className="border border-gray-900 w-1/2 mx-auto">
          {allPosts.map(({ title, text, id }) => {
            return <Postcard key={id} title={title} text={text} id={id} />;
          })}
        </section>
      </div>
    )
  );
};

export default Homepage;
