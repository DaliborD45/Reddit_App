import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Postcard from "../Postcard/Postcard";
import { useSelector, useDispatch } from "react-redux";
import LoggedNavbar from "../LoggedNavbar/LoggedNavbar";
import Communities from "./Communities/Communities";
import AddPost from "./AddPost/AddPost";
import TryPremium from "./TryPremium/TryPremium";
import Home from "./Home/Home";
import About from "./About/About";
import { fetchPosts } from "../../features/PostReducer";
import CreateCommunityModal from "../CreateCommunityModal/CreateCommunityModal";
const Homepage = () => {
  const dispatch = useDispatch();
  const allPosts = useSelector((state) => state.allPosts.value);
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    allPosts && (
      <div className="bg-gray-300 overflow-x-hidden  min-h-screen ">
        <Navbar />
        <LoggedNavbar />
        <CreateCommunityModal />
        <section className="lg:w-[1050px] shrink-0  mb-20  flex md:ml-10 lg:mx-auto mt-10  ">
          <section className="w-full ">
            <AddPost />
            {allPosts
              .map((attribute) => {
                return (
                  <Postcard
                    key={attribute.id}
                    title={attribute.title}
                    text={attribute.content}
                    id={attribute.id}
                    postLikes={attribute.Like}
                    imageId={attribute.imageId}
                    communityId={attribute.communityId}
                    authorName={attribute.authorName}
                    PostAuthorId={attribute.authorId}
                  />
                );
              })
              .reverse()}
          </section>
          <section className="hidden lg:block">
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
