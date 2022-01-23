import React from "react";
import { setOpenModal } from "../../../../features/modal";
import { setUserLogout } from "../../../../features/currentUser";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUserCog,
  faPlusSquare,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
const ProfileList = ({ isOpened }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profileLinks = [
    { id: 1, name: "Profile", icon: faUser },
    { id: 2, name: "User Settings", icon: faUserCog },
    { id: 3, name: " Create a Community", icon: faPlusSquare },
    { id: 4, name: "Sign out", icon: faSignOutAlt },
  ];
  const handleUserLogout = () => {
    localStorage.clear();
    dispatch(setUserLogout());
    navigate("/");
  };
  const handleCreateCommunity = () => {
    navigate("/");
    dispatch(setOpenModal());
  };
  return (
    <div
      id="dropdown"
      className={`${
        !isOpened && "hidden"
      } bg-white  text-base z-10 list-none divide-y divide-gray-100 rounded shadow max-w-lg xl:w-full dark:bg-gray-700 absolute left-72  sm:right-30 sm:left-auto `}
    >
      <ul className="py-1" aria-labelledby="dropdownButton">
        {profileLinks.map(({ id, name, icon }) => {
          return id === 4 || 3 ? (
            <li className="flex hover:bg-gray-100">
              <FontAwesomeIcon icon={icon} className="ml-2 mt-2" size="lg" />
              <p
                href="#"
                onClick={id === 4 ? handleUserLogout : handleCreateCommunity}
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
  );
};

export default ProfileList;
