import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedditAlien } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import ProfileList from "./ProfileList/ProfileList";
import { useSelector } from "react-redux";
const Profile = () => {
  const [isOpened, setToggleOpen] = useState(false);
  const userDataName = useSelector((state) => state.currentUser.value.name);

  return (
    <>
      <button
        id="dropdownDividerButton"
        data-dropdown-toggle="dropdownDivider"
        className="hidden  md:inline-flex bg-white hover:bg-gray-100 border-2 border-gray-300 text-black  font-medium rounded-lg text-sm px-8 py-1.5 text-center  items-center w-[200px] xl:w-[250px]"
        type="button"
        onClick={() => setToggleOpen(isOpened ? false : true)}
      >
        <FontAwesomeIcon icon={faRedditAlien} className="-ml-5" size="2x" />{" "}
        <p className="pl-5 text-sm text-gray-600 truncate">{userDataName}</p>
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokelinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <FontAwesomeIcon
        className="inline-flex md:hidden sm:ml-4"
        icon={faBars}
        size="2x"
        onClick={() => setToggleOpen(isOpened ? false : true)}
      />
      <ProfileList isOpened={isOpened} />
    </>
  );
};

export default Profile;
