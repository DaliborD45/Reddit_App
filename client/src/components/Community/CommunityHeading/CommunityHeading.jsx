import React from "react";
import { Image as ShowImage, Transformation } from "cloudinary-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import Subscribe from "../Subscribe/Subscribe";

const AboutCommunity = ({ communityData }) => {
  return (
    <section className=" w-full  h-60">
      <section className="h-2/3 bg-blue-500"></section>
      <section className="h-1/3 bg-white">
        <section className="flex w-full justify-center relative -top-5">
          <section className="">
            {communityData.profilePic ? (
              <ShowImage
                className="overflow-hidden rounded-full mt-2 mr-7"
                cloudName="dqhkvx2z5"
                publicId={communityData.profilePic}
              >
                <Transformation width="80" height="80" crop="scale" />
              </ShowImage>
            ) : (
              <FontAwesomeIcon
                icon={faUserFriends}
                className="mr-5 mt-2"
                size="3x"
              />
            )}
          </section>
          <h1 className="text-3xl ml-6 md:ml-0 font-bold md:text-4xl text-center pt-7">
            r/{communityData.name}
          </h1>
          <Subscribe communityId={communityData.id} />
        </section>
      </section>
    </section>
  );
};

export default AboutCommunity;
