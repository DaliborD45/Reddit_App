import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Image as ShowImage, Transformation } from "cloudinary-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const AboutProfile = ({ setModalOpen }) => {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.currentUser.value);
  if (userData) {
    console.log(userData);

  }
  return (
    <div className="w-[350px] mx-auto mt-10  border border-gray-400 rounded-sm">
      <div className=" mx-auto">
        <section className="h-[50px] w-full bg-blue-500">
          <h1 className="font-bold text-white pt-2.5 pl-2.5">About Users</h1>
        </section>
        <section className="h-[320px] bg-white w-full">
          <div className="w-11/12 mx-auto">
            <section className=" rounded-full pt-2  flex justify-center mb-5 ">
              {userData.profilePic ? (
                <ShowImage
                  className="overflow-hidden rounded-full mt-2 "
                  cloudName="dqhkvx2z5"
                  publicId={userData.profilePic}
                >
                  <Transformation width="80" height="80" crop="scale" />
                </ShowImage>
              ) : (
                <FontAwesomeIcon
                  icon={faUser}
                  className="mr-5 mt-2"
                  size="3x"
                />
              )}
              <p className="font-bold pl-3 pt-5 text-3xl">{userData.name}</p>
            </section>

            <section className="w-full flex  ml-1 font-bold mt-2">
              <section>
                <p className="font-normal ">Karma</p>
                <p className="pl-4">1</p>
              </section>
              <section className="pl-20">
                <p className="font-normal ">Cake date</p>
                <p className="font-semilight text-xs pl-1">
                  {userData.createdAt}
                </p>
              </section>
            </section>

            <section className="w-full mx-auto">
              <button
                onClick={() => setModalOpen(true)}
                className="w-full mt-5   rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold h-7 hover:opacity-90"
              >
                Update Profile
              </button>
            </section>
            <section className="w-full mx-auto">
              <button
                onClick={() => navigate("/addPost")}
                className="w-full  mt-5 m  rounded-full bg-blue-800 text-white font-bold h-7 hover:opacity-90"
              >
                New Post
              </button>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutProfile;
