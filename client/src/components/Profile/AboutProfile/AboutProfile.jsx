import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const AboutProfile = () => {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.currentUser.value);
  if (userData) {
    console.log(userData);
  }
  return (
    <div className="w-[350px] mx-auto mt-10 h-2/4 border border-gray-400 rounded-sm">
      <div className=" mx-auto">
        <section className="h-[50px] w-full bg-blue-500">
          <h1 className="font-bold text-white pt-2.5 pl-2.5">About User</h1>
        </section>
        <section className="h-[320px] bg-white w-full">
          <div className="w-11/12 mx-auto">
            <section className="w-5/5 pt-2  flex justify-center mb-5 ">
              <div className="bg-teal-300  rounded-full w-14 h-14">
                <input type="file" className="overflow-hidden w-10 h-10 pl-2 pt-2"/>
              </div>
              <p className="font-bold pl-3 pt-3 text-3xl">{userData.name}</p>
            </section>

            <section className="w-full flex  ml-1 font-bold mt-3">
              <section>
                <p>1</p>
                <p className="font-normal text-sm">Karma</p>
              </section>
              <section className="pl-20">
                <p>{userData.createdAt}</p>
                <p className="font-normal text-sm">Cake date</p>
              </section>
            </section>

            <section className="w-full mx-auto">
              <button className="w-full mt-5   rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold h-7 hover:opacity-90">
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
