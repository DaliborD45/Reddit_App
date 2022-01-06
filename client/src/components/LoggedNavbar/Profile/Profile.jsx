import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedditAlien } from "@fortawesome/free-brands-svg-icons";
import {
  faUser,
  faUserCog,
  faPlusSquare,
  faSignOutAlt,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { setUserLogout } from "../../../features/currentUser";
import { setOpenModal } from "../../../features/modal";

const Profile = ({ username }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profileLinks = [
    { id: 1, name: "Profile", icon: faUser },
    { id: 2, name: "User Settings", icon: faUserCog },
    { id: 3, name: " Create a Community", icon: faPlusSquare },
    { id: 4, name: "Sign out", icon: faSignOutAlt },
  ];
  const [isOpened, setToggleOpen] = useState(false);
  const handleUserLogout = () => {
    localStorage.clear();
    dispatch(setUserLogout());
    navigate("/login");
  };
  return (
    <>
      <button
        id="dropdownDividerButton"
        data-dropdown-toggle="dropdownDivider"
        className="hidden  md:inline-flex bg-white hover:bg-gray-100 border-2 border-gray-300 text-black  font-medium rounded-lg text-sm px-8 py-1.5 text-center  items-center max-w-[200px]"
        type="button"
        onClick={() => setToggleOpen(isOpened ? false : true)}
      >
        <FontAwesomeIcon icon={faRedditAlien} className="-ml-5" size="2x" />{" "}
        <p className="pl-5 text-sm text-gray-600 truncate">{username}</p>
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
      <div
        id="dropdown"
        className={`${
          !isOpened && "hidden"
        } bg-white  text-base z-10 list-none divide-y divide-gray-100 rounded shadow w-50 dark:bg-gray-700 absolute left-72  sm:right-30 sm:left-auto `}
      >
        <ul className="py-1" aria-labelledby="dropdownButton">
          {profileLinks.map(({ id, name, icon }) => {
            return id === 4 || 3 ? (
              <li className="flex hover:bg-gray-100">
                <FontAwesomeIcon icon={icon} className="ml-2 mt-2" size="lg" />
                <p
                  href="#"
                  onClick={
                    id === 4 ? handleUserLogout : () => dispatch(setOpenModal())
                  }
                  className="text-sm  text-gray-700 block px-4 py-2 "
                >
                  {name}
                </p>
              </li>
            ) : (
              <li className="flex hover:bg-gray-100">
                <FontAwesomeIcon icon={icon} className="ml-2 mt-2" size="lg" />
                <p
                  href="#"
                  className={`text-sm  text-gray-700 block  py-2 ${
                    id === 2 ? "px-2" : "px-4"
                  }`}
                >
                  {name}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Profile;
