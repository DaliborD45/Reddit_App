import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import CommunityInfo from "../Post/CommunityInfo";
import LoggedNavbar from "../LoggedNavbar/LoggedNavbar";
import About from "../Homepage/About/About";
import AddPost from "../Homepage/AddPost/AddPost";
import Postcard from "../Postcard/Postcard";
import { useSelector, useDispatch } from "react-redux";
import { fetchCommunitiesById } from "../../features/communities";
import { getPostsByCommunityId } from "../../features/PostReducer";
import CommunityHeading from "./CommunityHeading/CommunityHeading";
const Community = () => {
  const communityData = useSelector(
    (state) => state.allCommunities.currentCommunity
  );
  console.log(communityData);
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
        <CommunityHeading communityData={communityData} />

        <section className="w-full bg-gray-200 min-h-screen pb-20">
          <section className=" w-2/3 justify-between shrink-0  mb-20  flex md:ml-10 lg:mx-auto mt-5 ">
            <section className="w-11/12">
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
            <section className="hidden lg:block -mt-3 w-[440px]">
              <CommunityInfo
                communityName={communityData.name}
                communityDescription={communityData.description}
                communityProfilePic={communityData.profilePic}
              />
              <About />
            </section>
          </section>
        </section>
      </div>
    </>
  );
};

export default Community;
