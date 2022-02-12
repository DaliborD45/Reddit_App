import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import PostsCardsList from "../PostsCardsList/PostsCardsList";
import LoggedNavbar from "../LoggedNavbar/LoggedNavbar";
import Communities from "./Communities/Communities";
import AddPost from "./AddPost/AddPost";
import TryPremium from "./TryPremium/TryPremium";
import Home from "./Home/Home";
import About from "./About/About";
import { fetchPosts } from "../../features/PostReducer";
import CreateCommunityModal from "../CreateCommunityModal/CreateCommunityModal";
import NoPostsFound from "../NoPostsFound/NoPostsFound";
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
        <section className="flex justify-between lg:w-2/3 shrink-0  mb-20   md:ml-10 lg:mx-auto mt-10  ">
          <section className="w-10/12 -mr-20">
            <AddPost />
            {allPosts.length > 0 ? (
              <PostsCardsList allPosts={allPosts} />
            ) : (
              <NoPostsFound />
            )}
          </section>
          <section className="hidden lg:block">
            <Communities />
            <TryPremium />
            <Home />
            <About  />
          </section>
        </section>
      </div>
    )
  );
};

export default Homepage;
