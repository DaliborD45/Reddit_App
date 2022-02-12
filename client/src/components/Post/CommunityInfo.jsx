import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBirthdayCake,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { Image as ShowImage, Transformation } from "cloudinary-react";
import { useNavigate } from "react-router-dom";

const CommunityInfo = ({
  communityName,
  communityProfilePic,
  communityDescription,
  communityId
}) => {
  const navigate = useNavigate();
  return (
    <div className="w-12/12 mx-auto mt-10 border border-gray-400 rounded-sm">
      <section className="h-[50px] w-full bg-blue-600">
        <h1 className="font-bold text-white pt-2.5 pl-2.5">About Community</h1>
      </section>
      <section className="h-[377px] bg-white ">
        <section className="w-10/12 mx-auto">
          <section className="w-5/5 pt-2 flex  ">
            {communityProfilePic ? (
              <ShowImage
                className="overflow-hidden rounded-full mt-2 mr-5"
                cloudName="dqhkvx2z5"
                publicId={communityProfilePic}
              >
                <Transformation width="70" height="70" crop="scale" />
              </ShowImage>
            ) : (
              <FontAwesomeIcon
                icon={faUserFriends}
                className="mr-5 mt-2"
                size="3x"
              />
            )}
            <p onClick={()=>navigate(`/community/${communityId}`)} className="font-bold pl-1 pt-7 text-xl hover:cursor-pointer hover:underline">{`r/${communityName}`}</p>
          </section>
          <section className="">
            <p className="text-md text-gray-700 font-semibold pt-3">
              {communityDescription}
            </p>
          </section>
          <section className="w-full flex   font-bold mt-3">
            <section>
              <p>3.3M</p>
              <p className="font-normal text-sm">Total Users</p>
            </section>
            <section className="pl-20">
              <p>4.7k</p>
              <p className="font-normal text-sm">Active Users</p>
            </section>
          </section>
          <section className="flex font-light text mt-3">
            <FontAwesomeIcon icon={faBirthdayCake} className="" size="lg" />

            <p className="pl-2">Created Sep 17, 2012</p>
          </section>
          <section className="w-full">
            <button
              onClick={() => navigate("/addPost")}
              className="w-[292px] mt-5   rounded-full bg-blue-800 text-white font-bold h-7 hover:opacity-90"
            >
              Create a Post
            </button>
          </section>
        </section>
      </section>
    </div>
  );
};

export default CommunityInfo;
