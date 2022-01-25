import React, { useState } from "react";
import LoggedNavbar from "../LoggedNavbar/LoggedNavbar";
import AboutProfile from "./AboutProfile/AboutProfile";
import UpdateProfileModal from "./UpdateProfileModal/UpdateProfileModal";

const Profile = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div className="w-screen min-h-screen bg-gray-200">
        <LoggedNavbar />
        <div className="pt-20">
          <AboutProfile setModalOpen={setModalOpen} />
          <UpdateProfileModal
            setModalOpen={setModalOpen}
            isModalOpen={isModalOpen}
          />
        </div>
      </div>
    </>
  );
};

export default Profile;
