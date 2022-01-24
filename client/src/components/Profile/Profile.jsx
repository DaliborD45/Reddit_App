import React from "react";
import LoggedNavbar from "../LoggedNavbar/LoggedNavbar";
import AboutProfile from "./AboutProfile/AboutProfile";

const Profile = () => {
  return (
    <>
      <div className="w-screen min-h-screen bg-gray-200">
        <LoggedNavbar />
        <div className="pt-20">
          <AboutProfile />
        </div>
      </div>
    </>
  );
};

export default Profile;
