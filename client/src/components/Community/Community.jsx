import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import LoggedNavbar from "../LoggedNavbar/LoggedNavbar";
import About from "../Homepage/About/About";
import AddPost from "../Homepage/AddPost/AddPost";
import Postcard from "../Postcard/Postcard";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredPosts } from "../../features/allPosts";
const Community = () => {
  const dispatch = useDispatch();
  const filteredPosts = useSelector(
    (state) => state.allPosts.filteredPostValue
  );
  const { id } = useParams();
  const [allPosts, setAllPosts] = useState([]);
  const [communityData, setCommunityData] = useState({});
  useEffect(() => {
    const getPosts = async () => {
      try {
        var res = await axios.get(
          `http://localhost:3001/posts/byCommunityId/${id}`
        );
        console.info(res.data);
        dispatch(setFilteredPosts(res.data));
        console.log(filteredPosts);
      } catch (error) {
        console.log(error);
      }
    };
    getPosts();
  }, []);
  useEffect(() => {
    const getCommunity = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3001/community/byId/${id}`
        );
        console.log(res.data);
        setCommunityData(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getCommunity();
  }, []);
  return (
    <>
      <Navbar />
      <LoggedNavbar />
      <div className="w-full h-screen bg-white ">
        <section className=" bg-banner-img  bg-repeat bg-containw w-full  h-64 bg-gray-800"></section>
        <h1 className="font-bold text-4xl text-center mt-5">
          r/{communityData.name}
        </h1>
        <section className="w-full bg-red-200 min-h-screen pb-20">
          <section className="w-7/12  mb-20  flex mx-auto mt-6">
            <section className="w-full">
              <AddPost />
              {filteredPosts.map((attribute) => {
                return (
                  <Postcard
                    key={attribute.id}
                    title={attribute.title}
                    text={attribute.text}
                    id={attribute.id}
                    postLikes={attribute.Like}
                    imageId={attribute.imageId}
                    communityId={attribute.communityId}
                    authorName={attribute.authorName}
                    PostAuthorId={attribute.postAuthorId}
                  />
                );
              })}
            </section>
            <section>
              <About />
            </section>
          </section>
        </section>
      </div>
    </>
  );
};

export default Community;
