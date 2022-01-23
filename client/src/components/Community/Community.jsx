import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import LoggedNavbar from "../LoggedNavbar/LoggedNavbar";
import About from "../Homepage/About/About";
import AddPost from "../Homepage/AddPost/AddPost";
import Postcard from "../Postcard/Postcard";
import Subscribe from "./Subscribe/Subscribe";
import { useSelector, useDispatch } from "react-redux";
import { fetchCommunitiesById } from "../../features/communities";
import { getPostsByCommunityId } from "../../features/PostReducer";
const Community = () => {
  const communityData = useSelector(
    (state) => state.allCommunities.currentCommunity
  );
  const allPosts = useSelector((state) => state.allPosts.commIdPosts);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchCommunitiesById(id));
    dispatch(getPostsByCommunityId(id));
  }, []);
  return (
    <>
      <Navbar />
      <LoggedNavbar />
      <div className="w-full h-screen bg-white ">
        <section className=" bg-banner-img  bg-repeat bg-containw w-full  h-64 bg-gray-800"></section>
        <section className="flex w-full justify-center">
          <h1 className="text-3xl ml-6 md:ml-0 font-bold md:text-4xl text-center pt-7">
            r/{communityData.name}
          </h1>
          <Subscribe communityId={id} />
        </section>
        <section className="w-full bg-gray-300 min-h-screen pb-20">
          <section className="lg:w-[1050px] shrink-0  mb-20  flex md:ml-10 lg:mx-auto mt-10 ">
            <section className="w-full">
              <AddPost />
              {allPosts.map((attribute) => {
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
                    PostAuthorId={attribute.postAuthorId}
                  />
                );
              })}
            </section>
            <section className="hidden lg:block">
              <About />
            </section>
          </section>
        </section>
      </div>
    </>
  );
};

export default Community;
